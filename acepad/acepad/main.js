/*global globalThis*/
import pNode from "./petit-node/index.js";
import "./petit-node/console.js";
const SETUP_URL="acepad/setup.zip";
const timeout=(t)=>new Promise(s=>setTimeout(s,t));

globalThis.pNode=pNode;
//alert(globalThis.pNode);
let FS;
let menus;
let autoexec;
function installPWA(){
    if ('serviceWorker' in navigator) {
        if(document.readyState === "complete")start();
        else window.addEventListener('load', start);
    }
    function start() {
        navigator.serviceWorker.register('acepad/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    }
}
installPWA();
function status(...a){
    console.log(...a);
}
async function unzipURL(url, dest) {
    status("Fetching: "+url);
    const response = await fetch(url);
    console.log(response);
    let blob=await response.blob();
    return await unzipBlob(blob,dest);
}
async function unzipBlob(blob, dest) {
    status("unzipping blob ");
    let zip=FS.get("/tmp/setup.zip");
    await zip.setBlob(blob);
    dest.mkdir();
    await FS.zip.unzip(zip,dest);
}
async function networkBoot(url){
    const run=FS.get("/tmp/run/");
    await unzipURL(url, run);
    status("Boot start!");
    rmbtn();
    await pNode.importModule(run);
}
function initCss(){
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
    .menubtn {
        color: #008;
        width:100px;
        height:100px;
    }
    button:active{
        background:#ccc;
    }
    .menus{
        display: flex;
        flex-wrap: wrap;
    }
    .autob{
        background: #dc2;
    }
    .stop{
        background: #d20;
        position:absolute;
        bottom: 0px;
        right: 0px;
    }
    `));
    document.head.appendChild(style);
    menus=document.createElement('div');
    menus.classList.add("menus");
    document.body.appendChild(menus);
    
}
function init(){
    initCss();
    console.log("init");
    pNode.boot({
        init(o){
            globalThis.FS=FS=o.FS.default;
            FS.os={
                importModule:pNode.importModule,
                loadModule:pNode.importModule,
                createModuleURL:pNode.createModuleURL,
                urlToPath:pNode.urlToPath,
                convertStack:pNode.convertStack,
                loadScriptTag,
            };
            FS.mount("/tmp/",FS.LSFS.ramDisk());
            //networkBoot("acepad/setup.zip");
            afterInit(o);
        }
    });
}
function rmbtn(){
    for(let b of document.querySelectorAll('button')){
        b.parentNode.removeChild(b);
    }
}

const handlers={
    async oncompilestart({entry}) {
        await timeout(0);
        console.log("Compile start ",entry.file.path());
    },
    async onwaitcompiled({entry}) {
        await timeout(0);
        console.log("Waiting for end Compile ",entry.file.path());
    },
    async oncompiled({module}) {
        await timeout(0);
        console.log("Compile complete ",module.file.path());
    },
    async oncachehit({module}) {
        await timeout(0);
        console.log("In cache ",module.file.path());
    }
};
function afterInit({FS}){
    const rp=FS.get("/package.json");
    btn("Setup/<br/>Restore",()=>networkBoot(SETUP_URL));
    btn("Insert<br/>Boot Disk",()=>casettePon());
    console.log(rp.exists());
    if(rp.exists()){
        const o=rp.obj();
        if(o.menus){
            for(let k in o.menus){
                const run=o.menus[k];
                let main,auto;
                if(typeof run==="object"){
                    main=run.main;
                    auto=run.auto;
                    if (auto) {
                        try {
                            const e=pNode.resolveEntry(FS.get(main));
                            e.compile(handlers).then(
                                r=>console.log("Prefetched auto start",r.url),
                                e=>console.error(e),
                            );
                        }catch(e) {
                            console.error(e);
                        }
                    }
                }else{
                    main=run;
                }
                btn(k,async ()=>{
                    rmbtn();
                    await console.log("start",main);
                    await timeout(0);
                    await pNode.importModule(FS.get(main));
                },auto);
            }
        }
    }
}
addEventListener("load",init);
function btn(c,a,auto){
    let b=document.createElement("button");
    b.classList.add("menubtn");
    b.innerHTML=c;
    menus.append(b);
    const act=async()=>{
        try {
            abortAuto();
            await a();
        }catch(e){alert(e);}
    };
    b.addEventListener("click", act);	    
    if(auto){
        b.classList.add("autob");
        console.log("auto start ",c," in 2 seconds.");
        autoexec=act;
        stopBtn();
    }
}
function abortAuto(){
    const b=document.querySelector("button.stop");
    if(b)document.body.removeChild(b);
    console.log("Boot aborted.");
    autoexec=null;
}
function stopBtn(){
    if(document.querySelector("button.stop"))return ;
    const b=document.createElement("button");
    b.classList.add("menubtn");
    b.classList.add("stop");
    
    b.innerHTML="Stop<br>auto start<br>2";
    document.body.append(b);
    const act=async()=>{
        abortAuto();
    };
    b.addEventListener("click", act);	    
    setTimeout(async()=>{
        if(b.parentNode){
            b.parentNode.removeChild(b);
        }
        await timeout(10);
        if(autoexec)autoexec();
    },2000);
    setTimeout(()=>{
        b.innerHTML="Stop<br>auto start<br>1";
    },1000);
}

function getQueryString(key, default_) {
    if (arguments.length === 1) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(location.href);
    if (qs == null) return default_;else return decodeURLComponentEx(qs[1]);
}
function decodeURLComponentEx(s) {
    return decodeURIComponent(s.replace(/\+/g, '%20'));
}

function loadScriptTag(url,attr){
    /*global define,requirejs*/
    if (attr.type!=="module" && 
    typeof define==="function" && 
    define.amd && 
    typeof requirejs==="function") {
        return new Promise(
        (s)=>requirejs([url],(r)=>s(r)));
    }
    const script = document.createElement('script');
    script.src = url;
    for(let k in attr){
        script.setAttribute(k,attr[k]);
    }
    return new Promise(
    function (resolve,reject){
        script.addEventListener("load",resolve);
        script.addEventListener("error",reject);
        document.head.appendChild(script);
    });
}
function casettePon() {
    const cas=document.createElement("input");
    cas.setAttribute("type","file");
    document.body.appendChild(cas);
    //const cas=document.querySelector("#casette");
    cas.addEventListener("input",async function () {
        const run=FS.get("/tmp/run/");
        await unzipBlob(this.files[0],run);
        rmbtn();
        pNode.importModule(run);
    });
}
