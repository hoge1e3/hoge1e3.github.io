//onerror=alert.bind(window);
/*global globalThis*/
import pNode from "./petit-node/index.js";
import "./petit-node/console.js";

globalThis.pNode=pNode;
//alert(globalThis.pNode);
let FS;
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
    await pNode.importModule(run);
}
function init(){
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
            networkBoot("acepad/setup.zip");
            //afterInit(o);
        }
    });
}
function afterInit({FS}){
    const rp=FS.get("/package.json");
    btn("Setup/Restore",()=>networkBoot("acepad/setup.zip"));
    console.log(rp.exists());
    if(rp.exists()){
        const o=rp.obj();
        if(o.menus){
            for(let k in o.menus){
                const run=o.menus[k];
                btn(k,async ()=>{
                    await console.log("start",run);
                    await pNode.importModule(FS.get(run));
                });
            }
        }
    }
}
addEventListener("load",init);
function btn(c,a){
    let b=document.createElement("button");
    b.innerText=c;
    document.body.append(b);
    b.addEventListener("click", async()=>{
      try {
          await a();
      }catch(e){alert(e);}
    });	    
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
