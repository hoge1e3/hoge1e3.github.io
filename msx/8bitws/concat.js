(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.e = exports.d = exports.c = exports.b = exports.a = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var j = Object.create;
var e = Object.defineProperty;
var k = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames,
  f = Object.getOwnPropertySymbols,
  m = Object.getPrototypeOf,
  g = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable;
var h = function h(a, b, c) {
    return b in a ? e(a, b, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: c
    }) : a[b] = c;
  },
  p = function p(a, b) {
    for (var c in b || (b = {})) {
      g.call(b, c) && h(a, c, b[c]);
    }
    if (f) {
      var _iterator = _createForOfIteratorHelper(f(b)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          n.call(b, c) && h(a, c, b[c]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return a;
  };
exports.a = p;
var i = function i(a) {
  return e(a, "__esModule", {
    value: !0
  });
};
var q = function (a) {
  return typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(a, {
    get: function get(b, c) {
      return (typeof require != "undefined" ? require : b)[c];
    }
  }) : a;
}(function (a) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + a + '" is not supported');
});
exports.b = q;
var r = function r(a, b) {
    return function () {
      return b || a((b = {
        exports: {}
      }).exports, b), b.exports;
    };
  },
  s = function s(a, b) {
    i(a);
    for (var c in b) {
      e(a, c, {
        get: b[c],
        enumerable: !0
      });
    }
  },
  o = function o(a, b, c) {
    if (b && _typeof(b) == "object" || typeof b == "function") {
      var _iterator2 = _createForOfIteratorHelper(l(b)),
        _step2;
      try {
        var _loop = function _loop() {
          var d = _step2.value;
          !g.call(a, d) && d !== "default" && e(a, d, {
            get: function get() {
              return b[d];
            },
            enumerable: !(c = k(b, d)) || c.enumerable
          });
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    return a;
  },
  t = function t(a) {
    return o(i(e(a != null ? j(m(a)) : {}, "default", a && a.__esModule && "default" in a ? {
      get: function get() {
        return a["default"];
      },
      enumerable: !0
    } : {
      value: a,
      enumerable: !0
    })), a);
  };
exports.e = t;
exports.d = s;
exports.c = r;

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.c = exports.b = exports.a = void 0;
var _chunkY2G6ABZC = require("./chunk-Y2G6ABZC.js");
var _chunkQEB57REV = require("./chunk-QEB57REV.js");
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var b;
(function (a) {
  a[a.GRAPHICS = 0] = "GRAPHICS", a[a.TEXT = 1] = "TEXT", a[a.BITMAP = 2] = "BITMAP", a[a.MULTICOLOR = 3] = "MULTICOLOR", a[a.MODE4 = 4] = "MODE4", a[a.BITMAP_TEXT = 5] = "BITMAP_TEXT", a[a.BITMAP_MULTICOLOR = 6] = "BITMAP_MULTICOLOR", a[a.ILLEGAL = 7] = "ILLEGAL";
})(b || (b = {}));
var O = /*#__PURE__*/function () {
    function O(e, t, r) {
      _classCallCheck(this, O);
      this.probe = new _chunkY2G6ABZC.n();
      this.ram = new Uint8Array(16384);
      this.registers = new Uint8Array(8);
      this.spriteBuffer = new Uint8Array(256);
      this.displayOn = !1;
      this.interruptsOn = !1;
      this.fb32 = e, this.cru = t, this.enableFlicker = r, this.palette = [(0, _chunkQEB57REV.t)(0, 0, 0), (0, _chunkQEB57REV.t)(0, 0, 0), (0, _chunkQEB57REV.t)(33, 200, 66), (0, _chunkQEB57REV.t)(94, 220, 120), (0, _chunkQEB57REV.t)(84, 85, 237), (0, _chunkQEB57REV.t)(125, 118, 252), (0, _chunkQEB57REV.t)(212, 82, 77), (0, _chunkQEB57REV.t)(66, 235, 245), (0, _chunkQEB57REV.t)(252, 85, 84), (0, _chunkQEB57REV.t)(255, 121, 120), (0, _chunkQEB57REV.t)(212, 193, 84), (0, _chunkQEB57REV.t)(230, 206, 128), (0, _chunkQEB57REV.t)(33, 176, 59), (0, _chunkQEB57REV.t)(201, 91, 186), (0, _chunkQEB57REV.t)(204, 204, 204), (0, _chunkQEB57REV.t)(255, 255, 255)];
    }
    _createClass(O, [{
      key: "reset",
      value: function reset() {
        var e;
        this.ram.fill(0), this.registers.fill(0), this.addressRegister = 0, this.statusRegister = 0, this.prefetchByte = 0, this.latch = !1, this.displayOn = !1, this.interruptsOn = !1, this.screenMode = 0, this.bitmapMode = !1, this.textMode = !1, this.colorTable = 0, this.nameTable = 0, this.charPatternTable = 0, this.spriteAttributeTable = 0, this.spritePatternTable = 0, this.colorTableMask = 16383, this.patternTableMask = 16383, this.ramMask = 16383, this.fgColor = 0, this.bgColor = 0, this.flicker = this.enableFlicker, this.redrawRequired = !0, this.width = 304, this.height = 240;
      }
    }, {
      key: "drawScanline",
      value: function drawScanline(e) {
        var t = this.fb32,
          r = this.width,
          i = e * r,
          h = this.screenMode,
          s = this.textMode,
          l = this.bitmapMode,
          a = s ? 240 : 256,
          n = 192,
          d = r - a >> 1,
          m = this.height - n >> 1,
          M = this.fgColor,
          g = this.bgColor,
          o = this.ram,
          P = this.nameTable,
          V = this.colorTable,
          C = this.charPatternTable,
          D = this.colorTableMask,
          H = this.patternTableMask,
          ce = this.spriteAttributeTable,
          ue = this.spritePatternTable,
          Z = (this.registers[1] & 2) != 0,
          y = this.registers[1] & 1,
          $ = (Z ? 16 : 8) << (y ? 1 : 0),
          j = this.flicker ? 4 : 32,
          J = this.palette,
          N = !1,
          Q = !1,
          Y = 31,
          R,
          v,
          _,
          f,
          F,
          B,
          p;
        if (e >= m && e < m + n && this.displayOn) {
          var u = e - m;
          if (!s) {
            var W = this.spriteBuffer;
            W.fill(0);
            var z = 0,
              ee = !1,
              A = ce,
              U;
            for (U = 0; U < 32 && z <= j && !ee; U++) {
              var k = o[A];
              if (k !== 208) {
                k > 208 && (k -= 256), k++;
                var X = k + $,
                  L = -1;
                if (U < 8 || !l) u >= k && u < X && (L = u);else {
                  var K = u & ((this.registers[4] & 3) << 6 | 63);
                  K >= k && K < X ? L = K : u >= 64 && u < 128 && u >= k && u < X && (L = u);
                }
                if (L !== -1) {
                  if (z < j) {
                    var te = o[A + 1],
                      de = o[A + 2] & (Z ? 252 : 255),
                      me = o[A + 3] & 15;
                    (o[A + 3] & 128) != 0 && (te -= 32);
                    for (var ge = L - k >> y, pe = ue + (de << 3) + ge, E = 0; E < $; E++) {
                      var G = te + E;
                      if (G >= 0 && G < a) {
                        var re = E >> y,
                          Te = o[pe + (re >= 8 ? 16 : 0)];
                        (Te & 128 >> (re & 7)) != 0 && (W[G] === 0 ? W[G] = me + 1 : N = !0);
                      }
                    }
                  }
                  z++;
                }
                A += 4;
              } else ee = !0;
            }
            z > 4 && (Q = !0, Y = U);
          }
          var S = s ? (u >> 3) * 40 : u >> 3 << 5,
            x = u & 7;
          for (R = 0; R < r; R++) {
            if (R >= d && R < d + a) {
              var T = R - d;
              switch (h) {
                case 0:
                  f = o[P + S + (T >> 3)], B = o[V + (f >> 3)], p = o[C + (f << 3) + x], v = (p & 128 >> (T & 7)) != 0 ? (B & 240) >> 4 : B & 15;
                  break;
                case 2:
                  f = o[P + S + (T >> 3)], F = ((u & 192) << 5) + (f << 3), B = o[V + (F & D) + x], p = o[C + (F & H) + x], v = (p & 128 >> (T & 7)) != 0 ? (B & 240) >> 4 : B & 15;
                  break;
                case 3:
                  f = o[P + S + (T >> 3)], x = (u & 28) >> 2, p = o[C + (f << 3) + x], v = (T & 4) == 0 ? (p & 240) >> 4 : p & 15;
                  break;
                case 1:
                  f = o[P + S + Math.floor(T / 6)], p = o[C + (f << 3) + x], v = (p & 128 >> T % 6) != 0 ? M : g;
                  break;
                case 5:
                  f = o[P + S + Math.floor(T / 6)], F = ((u & 192) << 5) + (f << 3), p = o[C + (F & H) + x], v = (p & 128 >> T % 6) != 0 ? M : g;
                  break;
                case 6:
                  f = o[P + S + (T >> 3)], x = (u & 28) >> 2, F = ((u & 192) << 5) + (f << 3), p = o[C + (F & H) + x], v = (T & 4) == 0 ? (p & 240) >> 4 : p & 15;
                  break;
                case 7:
                  v = (T & 4) == 0 ? M : g;
                  break;
              }
              if (v === 0 && (v = g), !s) {
                var se = W[T] - 1;
                se > 0 && (v = se);
              }
            } else v = g;
            _ = J[v], t[i++] = _;
          }
        } else for (_ = J[g], R = 0; R < r; R++) {
          t[i++] = _;
        }
        e === m + n && (this.statusRegister |= 128, this.interruptsOn && this.cru.setVDPInterrupt(!0)), N && (this.statusRegister |= 32), (this.statusRegister & 64) == 0 && (this.statusRegister |= Y), Q && (this.statusRegister |= 64);
      }
    }, {
      key: "setReadAddress",
      value: function setReadAddress(e) {
        this.addressRegister = (e & 63) << 8 | this.addressRegister & 255, this.prefetchByte = this.ram[this.addressRegister++], this.addressRegister &= 16383;
      }
    }, {
      key: "setWriteAddress",
      value: function setWriteAddress(e) {
        this.addressRegister = (e & 63) << 8 | this.addressRegister & 255;
      }
    }, {
      key: "setVDPWriteRegister",
      value: function setVDPWriteRegister(e) {
        var t = this.registers.length - 1;
        switch (this.registers[e & t] = this.addressRegister & 255, e & t) {
          case 0:
            this.updateMode(this.registers[0], this.registers[1]);
            break;
          case 1:
            this.ramMask = (this.registers[1] & 128) != 0 ? 16383 : 8191, this.displayOn = (this.registers[1] & 64) != 0, this.interruptsOn = (this.registers[1] & 32) != 0, this.updateMode(this.registers[0], this.registers[1]);
            break;
          case 2:
            this.nameTable = (this.registers[2] & 15) << 10;
            break;
          case 3:
            this.bitmapMode ? this.colorTable = (this.registers[3] & 128) << 6 : this.colorTable = this.registers[3] << 6, this.updateTableMasks();
            break;
          case 4:
            this.bitmapMode ? this.charPatternTable = (this.registers[4] & 4) << 11 : this.charPatternTable = (this.registers[4] & 7) << 11, this.updateTableMasks();
            break;
          case 5:
            this.spriteAttributeTable = (this.registers[5] & 127) << 7;
            break;
          case 6:
            this.spritePatternTable = (this.registers[6] & 7) << 11;
            break;
          case 7:
            this.fgColor = (this.registers[7] & 240) >> 4, this.bgColor = this.registers[7] & 15;
            break;
        }
      }
    }, {
      key: "setVDPWriteCommand3",
      value: function setVDPWriteCommand3(e) {
        this.setVDPWriteRegister(e);
      }
    }, {
      key: "writeAddress",
      value: function writeAddress(e) {
        if (!this.latch) this.addressRegister = this.addressRegister & 65280 | e;else {
          switch ((e & 192) >> 6) {
            case 0:
              this.setReadAddress(e);
              break;
            case 1:
              this.setWriteAddress(e);
              break;
            case 2:
              this.setVDPWriteRegister(e);
              break;
            case 3:
              this.setVDPWriteCommand3(e);
              break;
          }
          this.redrawRequired = !0;
        }
        this.latch = !this.latch;
      }
    }, {
      key: "updateMode",
      value: function updateMode(e, t) {
        if (this.bitmapMode = (e & 2) != 0, this.textMode = (t & 16) != 0, this.bitmapMode) switch ((t & 24) >> 3) {
          case 0:
            this.screenMode = 2;
            break;
          case 1:
            this.screenMode = 6;
            break;
          case 2:
            this.screenMode = 5;
            break;
          case 3:
            this.screenMode = 7;
            break;
        } else switch ((t & 24) >> 3) {
          case 0:
            this.screenMode = 0;
            break;
          case 1:
            this.screenMode = 3;
            break;
          case 2:
            this.screenMode = 1;
            break;
          case 3:
            this.screenMode = 7;
            break;
        }
        this.bitmapMode ? (this.colorTable = (this.registers[3] & 128) << 6, this.charPatternTable = (this.registers[4] & 4) << 11, this.updateTableMasks()) : (this.colorTable = this.registers[3] << 6, this.charPatternTable = (this.registers[4] & 7) << 11), this.nameTable = (this.registers[2] & 15) << 10, this.spriteAttributeTable = (this.registers[5] & 127) << 7, this.spritePatternTable = (this.registers[6] & 7) << 11;
      }
    }, {
      key: "updateTableMasks",
      value: function updateTableMasks() {
        this.screenMode === 2 ? (this.colorTableMask = (this.registers[3] & 127) << 6 | 63, this.patternTableMask = (this.registers[4] & 3) << 11 | this.colorTableMask & 2047) : this.screenMode === 5 || this.screenMode === 6 ? (this.colorTableMask = this.ramMask, this.patternTableMask = (this.registers[4] & 3) << 11 | 2047) : (this.colorTableMask = this.ramMask, this.patternTableMask = this.ramMask);
      }
    }, {
      key: "writeData",
      value: function writeData(e) {
        this.probe.logVRAMWrite(this.addressRegister, e), this.ram[this.addressRegister++] = e, this.prefetchByte = e, this.addressRegister &= this.ramMask, this.latch = !1, this.redrawRequired = !0;
      }
    }, {
      key: "readStatus",
      value: function readStatus() {
        var e = this.statusRegister;
        return this.statusRegister = 31, this.interruptsOn && this.cru.setVDPInterrupt(!1), this.latch = !1, e;
      }
    }, {
      key: "readData",
      value: function readData() {
        var e = this.prefetchByte;
        return this.prefetchByte = this.ram[this.addressRegister++], this.probe.logVRAMRead(this.addressRegister - 1, this.prefetchByte), this.addressRegister &= this.ramMask, this.latch = !1, e;
      }
    }, {
      key: "getRAM",
      value: function getRAM() {
        return this.ram;
      }
    }, {
      key: "colorTableSize",
      value: function colorTableSize() {
        return this.screenMode === 0 ? 32 : this.screenMode === 2 ? Math.min(this.colorTableMask + 1, 6144) : 0;
      }
    }, {
      key: "patternTableSize",
      value: function patternTableSize() {
        return this.bitmapMode ? Math.min(this.patternTableMask + 1, 6144) : 2048;
      }
    }, {
      key: "getDebugTables",
      value: function getDebugTables() {
        var e = [["Pattern Table", this.charPatternTable, this.patternTableSize()], ["Name Table", this.nameTable, 768], ["Color Table", this.colorTable, this.colorTableSize()], ["Sprite Patterns", this.spritePatternTable, 64 * 32], ["Sprite Attributes", this.spriteAttributeTable, 4 * 32]];
        return e;
      }
    }, {
      key: "getRegsString",
      value: function getRegsString() {
        var e = 20;
        for (var t = "Registers:", r = 0; r < this.registers.length; r++) {
          t += " " + (0, _chunkQEB57REV.g)(this.registers[r], 2);
        }
        t += "\n\n";
        var i = this.getDebugTables();
        var _iterator = _createForOfIteratorHelper(i),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var h = _step.value;
            h[2] > 0 && (t += (0, _chunkQEB57REV.a)(h[0], e) + ": $" + (0, _chunkQEB57REV.g)(h[1], 4) + " - $" + (0, _chunkQEB57REV.g)(h[1] + h[2] - 1, 4) + "\n");
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return t += (0, _chunkQEB57REV.a)("Address Register", e) + ": $" + (0, _chunkQEB57REV.g)(this.addressRegister, 4) + "\n", t += (0, _chunkQEB57REV.a)("Status Register", e) + ": $" + (0, _chunkQEB57REV.g)(this.statusRegister, 2) + "\n", t += (0, _chunkQEB57REV.a)("Screen Mode", e) + ":  " + this.screenMode + "\n", t += (0, _chunkQEB57REV.a)("Display On", e) + ":  " + this.displayOn + "\n", this.ramMask != 16383 && (t += (0, _chunkQEB57REV.a)("RAM Mask", e) + ": $" + (0, _chunkQEB57REV.g)(this.ramMask) + "\n"), t;
      }
    }, {
      key: "hexView",
      value: function hexView(e, t, r) {
        for (var i = "", h = null, s = e, l = 0, a = 0; a < t && s < 16384; s++, a++) {
          (a & 15) == 0 && (i += "\n" + (0, _chunkQEB57REV.g)(s, 4) + ":", l++), i += " ", r && r === s && (h = l);
          var n = this.ram[s].toString(16).toUpperCase();
          n.length === 1 && (i += "0"), i += n;
        }
        return {
          text: i.substr(1),
          lineCount: l,
          anchorLine: h - 1
        };
      }
    }, {
      key: "getWord",
      value: function getWord(e) {
        return e < 16384 ? this.ram[e] << 8 | this.ram[e + 1] : 0;
      }
    }, {
      key: "getCharAt",
      value: function getCharAt(e, t) {
        return e -= 24, t -= 24, this.textMode ? this.ram[this.nameTable + Math.floor((e - 8) / 6) + Math.floor(t / 8) * 40] : this.ram[this.nameTable + Math.floor(e / 8) + Math.floor(t / 8) * 32];
      }
    }, {
      key: "setFlicker",
      value: function setFlicker(e) {
        this.flicker = e, this.enableFlicker = e;
      }
    }, {
      key: "getState",
      value: function getState() {
        return {
          ram: this.ram.slice(0),
          registers: this.registers.slice(0),
          addressRegister: this.addressRegister,
          statusRegister: this.statusRegister,
          latch: this.latch,
          prefetchByte: this.prefetchByte,
          displayOn: this.displayOn,
          interruptsOn: this.interruptsOn,
          screenMode: this.screenMode,
          bitmapMode: this.bitmapMode,
          textMode: this.textMode,
          colorTable: this.colorTable,
          nameTable: this.nameTable,
          charPatternTable: this.charPatternTable,
          spriteAttributeTable: this.spriteAttributeTable,
          spritePatternTable: this.spritePatternTable,
          colorTableMask: this.colorTableMask,
          patternTableMask: this.patternTableMask,
          ramMask: this.ramMask,
          fgColor: this.fgColor,
          bgColor: this.bgColor,
          flicker: this.flicker
        };
      }
    }, {
      key: "restoreState",
      value: function restoreState(e) {
        this.ram.set(e.ram), this.registers.set(e.registers), this.addressRegister = e.addressRegister, this.statusRegister = e.statusRegister, this.latch = e.latch, this.prefetchByte = e.prefetchByte, this.displayOn = e.displayOn, this.interruptsOn = e.interruptsOn, this.screenMode = e.screenMode, this.bitmapMode = e.bitmapMode, this.textMode = e.textMode, this.colorTable = e.colorTable, this.nameTable = e.nameTable, this.charPatternTable = e.charPatternTable, this.spriteAttributeTable = e.spriteAttributeTable, this.spritePatternTable = e.spritePatternTable, this.colorTableMask = e.colorTableMask, this.patternTableMask = e.patternTableMask, this.ramMask = e.ramMask, this.fgColor = e.fgColor, this.bgColor = e.bgColor, this.flicker = e.flicker, this.redrawRequired = !0;
      }
    }]);
    return O;
  }(),
  be = /*#__PURE__*/function (_O) {
    _inherits(be, _O);
    var _super = _createSuper(be);
    function be() {
      var _this;
      _classCallCheck(this, be);
      _this = _super.apply(this, arguments);
      _this.cram = new Uint8Array(32);
      _this.cpalette = new Uint32Array(32);
      _this.registers = new Uint8Array(16);
      _this.vramUntwiddled = new Uint8Array(32768);
      _this.numVisibleLines = 192;
      _this.lineCounter = 0;
      _this.lineInterruptPending = !1;
      return _this;
    }
    _createClass(be, [{
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(be.prototype), "reset", this).call(this), this.writeToCRAM = !1, this.cram.fill(0), this.cpalette.fill(0), this.vramUntwiddled.fill(0);
      }
    }, {
      key: "readStatus",
      value: function readStatus() {
        return this.lineInterruptPending = !1, _get(_getPrototypeOf(be.prototype), "readStatus", this).call(this);
      }
    }, {
      key: "updateMode",
      value: function updateMode(e, t) {
        e & 4 ? (this.screenMode = 4, this.nameTable = (this.registers[2] & 15) << 10 & 14336, this.spriteAttributeTable = (this.registers[5] & 126) << 7) : _get(_getPrototypeOf(be.prototype), "updateMode", this).call(this, e, t);
      }
    }, {
      key: "setReadAddress",
      value: function setReadAddress(e) {
        _get(_getPrototypeOf(be.prototype), "setReadAddress", this).call(this, e), this.writeToCRAM = !1;
      }
    }, {
      key: "setWriteAddress",
      value: function setWriteAddress(e) {
        _get(_getPrototypeOf(be.prototype), "setWriteAddress", this).call(this, e), this.writeToCRAM = !1;
      }
    }, {
      key: "setVDPWriteRegister",
      value: function setVDPWriteRegister(e) {
        _get(_getPrototypeOf(be.prototype), "setVDPWriteRegister", this).call(this, e), this.ramMask = 16383;
      }
    }, {
      key: "setVDPWriteCommand3",
      value: function setVDPWriteCommand3(e) {
        this.writeToCRAM = !0;
      }
    }, {
      key: "writeData",
      value: function writeData(e) {
        if (this.writeToCRAM) {
          var t = this.addressRegister++ & this.cram.length - 1;
          this.cram[t] = e, this.cpalette[t] = (0, _chunkQEB57REV.t)((e & 3) * 85, (e >> 2 & 3) * 85, (e >> 4 & 3) * 85), this.prefetchByte = e, this.addressRegister &= this.ramMask, this.redrawRequired = !0;
        } else {
          var r = this.addressRegister;
          _get(_getPrototypeOf(be.prototype), "writeData", this).call(this, e), this.writeTwiddled(r, e);
        }
        this.latch = !1;
      }
    }, {
      key: "writeTwiddled",
      value: function writeTwiddled(e, t) {
        for (var r = e & 16380, i = r * 2, h = this.ram[r], s = this.ram[r + 1], l = this.ram[r + 2], a = this.ram[r + 3], n = 0; n < 8; ++n) {
          var d = 7 - n,
            m = h >>> d & 1 | (s >>> d & 1) << 1 | (l >>> d & 1) << 2 | (a >>> d & 1) << 3;
          this.vramUntwiddled[i + n] = m;
        }
      }
    }, {
      key: "getState",
      value: function getState() {
        var e = _get(_getPrototypeOf(be.prototype), "getState", this).call(this);
        return e.cram = this.cram.slice(0), e;
      }
    }, {
      key: "restoreState",
      value: function restoreState(e) {
        _get(_getPrototypeOf(be.prototype), "restoreState", this).call(this, e), this.cram.set(e.cram);
      }
    }, {
      key: "drawScanline",
      value: function drawScanline(e) {
        this.screenMode == 4 ? this.rasterize_line(e) : _get(_getPrototypeOf(be.prototype), "drawScanline", this).call(this, e);
      }
    }, {
      key: "findSprites",
      value: function findSprites(e) {
        var t = this.spriteAttributeTable,
          r = [],
          i = 8,
          h;
        for (this.registers[1] & 2 && (i = 16), h = 0; h < 64; h++) {
          var s = this.ram[t + h];
          if (s === 208) break;
          if (s >= 240 && (s -= 256), e >= s && e < s + i) {
            if (r.length === 8) {
              this.statusRegister |= 64;
              break;
            }
            r.push([this.ram[t + 128 + h * 2], this.ram[t + 128 + h * 2 + 1], s]);
          }
        }
        return r;
      }
    }, {
      key: "rasterize_background",
      value: function rasterize_background(e, t, r, i, h) {
        e = e | 0, t = t | 0, r = r | 0, i = (i | 0) * 2;
        var s, l;
        r & 1 << 9 ? (l = -1, i += 7) : l = 1;
        var a = r & 1 << 11 ? 16 : 0;
        var n;
        if (h && a === 0) for (s = 0; s < 8; s++) {
          n = this.vramUntwiddled[i], i += l, n !== 0 && (this.fb32[e + t] = this.cpalette[n]), t = t + 1 & 255;
        } else for (s = 0; s < 8; s++) {
          n = this.vramUntwiddled[i] + a, i += l, this.fb32[e + t] = this.cpalette[n], t = t + 1 & 255;
        }
      }
    }, {
      key: "clear_background",
      value: function clear_background(e, t) {
        e = e | 0, t = t | 0;
        var r;
        var i = this.cpalette[0];
        for (r = 0; r < 8; ++r) {
          this.fb32[e + t] = i, t = t + 1 & 255;
        }
      }
    }, {
      key: "rasterize_background_line",
      value: function rasterize_background_line(e, t, r, i) {
        e = e | 0, t = t | 0, r = r | 0;
        var h = (i | 0) * 4;
        for (var s = 0; s < 32; s++) {
          var l = this.ram[r + s * 2] | this.ram[r + s * 2 + 1] << 8,
            a = l & 511,
            n = 32 * a;
          l & 1 << 10 ? n += 28 - h : n += h, (l & 1 << 12) == 0 ? this.rasterize_background(e, t, l, n, !1) : this.clear_background(e, t), t = t + 8 & 255;
        }
      }
    }, {
      key: "rasterize_foreground_line",
      value: function rasterize_foreground_line(e, t, r, i) {
        e = e | 0, t = t | 0, r = r | 0;
        var h = (i | 0) * 4;
        for (var s = 0; s < 32; s++) {
          var l = this.ram[r + s * 2] | this.ram[r + s * 2 + 1] << 8;
          if ((l & 1 << 12) != 0) {
            var a = l & 511,
              n = 32 * a;
            l & 1 << 10 ? n += 28 - h : n += h, this.rasterize_background(e, s * 8 + t & 255, l, n, !0);
          }
        }
      }
    }, {
      key: "rasterize_sprites",
      value: function rasterize_sprites(e, t, r, i) {
        t = t | 0, r = r | 0;
        var h = this.registers[6] & 4 ? 8192 : 0;
        for (var s = 0; s < 256; ++s) {
          for (var l = s, a = !1, n = !1, d = 256, m = 0; m < i.length; m++) {
            var M = i[m],
              g = l - M[0];
            if (g < 0) {
              var o = -g;
              o < d && (d = o);
              continue;
            }
            if (!(g >= 8)) {
              a = !0;
              var P = e - M[2],
                V = h + M[1] * 32 + P * 4,
                C = V * 2 + g,
                D = this.vramUntwiddled[C];
              if (D !== 0) {
                if (n) {
                  this.statusRegister |= 32;
                  break;
                }
                this.fb32[t + (r + s - this.registers[8] & 255)] = this.cpalette[16 + D], n = !0;
              }
            }
          }
          !a && d > 1 && (s += d - 1);
        }
      }
    }, {
      key: "border_clear",
      value: function border_clear(e, t) {
        e = e | 0, t = t | 0;
        var r = 16 + (this.registers[7] & 15),
          i = this.cpalette[r];
        this.fb32.fill(i, e, e + t);
      }
    }, {
      key: "rasterize_line",
      value: function rasterize_line(e) {
        e |= 0;
        var t = this.registers,
          r = 256,
          i = this.numVisibleLines,
          h = this.width - r >> 1,
          s = this.height - i >> 1;
        var l = (e + s) * this.width | 0,
          a = l + h | 0;
        if (!this.displayOn || e < 0 || e >= i) e < this.height ? this.border_clear(l, this.width) : e >= 262 - s && this.border_clear((e - 262 + s) * this.width, this.width);else {
          var n = e + t[9];
          n >= 224 && (n -= 224);
          var d = this.findSprites(e),
            m = t[0] & 64 && e < 16 ? 0 : t[8],
            M = this.nameTable + (n >>> 3) * 64,
            g = n & 7;
          this.rasterize_background_line(a, m, M, g), this.rasterize_sprites(e, a, m, d), this.rasterize_foreground_line(a, m, M, g), this.border_clear(l, h), this.border_clear(a + 256, h), t[0] & 1 << 5 && this.border_clear(a, 8);
        }
        e == i && (this.statusRegister |= 128, this.interruptsOn && this.cru.setVDPInterrupt(!0)), e <= i ? this.lineCounter > 0 ? this.lineCounter-- : (this.lineCounter = this.registers[10], this.lineInterruptPending = !0) : this.lineCounter = this.registers[10], this.lineInterruptPending && this.registers[0] & 16;
      }
    }, {
      key: "getDebugTables",
      value: function getDebugTables() {
        if (this.screenMode == 4) {
          var e = [["Pattern Table", 0, 512 * 32], ["Name Table", this.nameTable, 32 * 32 * 2], ["Sprite Attributes", this.spriteAttributeTable, 256]];
          return e;
        } else return _get(_getPrototypeOf(be.prototype), "getDebugTables", this).call(this);
      }
    }]);
    return be;
  }(O),
  fe = /*#__PURE__*/function (_be) {
    _inherits(fe, _be);
    var _super2 = _createSuper(fe);
    function fe() {
      var _this2;
      _classCallCheck(this, fe);
      _this2 = _super2.apply(this, arguments);
      _this2.cram = new Uint8Array(64);
      _this2.cram_latch = 0;
      return _this2;
    }
    _createClass(fe, [{
      key: "writeData",
      value: function writeData(e) {
        if (this.writeToCRAM) {
          if (this.addressRegister & 1) {
            var t = this.cram_latch + (e << 8),
              r = (0, _chunkQEB57REV.t)((t & 15) * 17, (t >> 4 & 15) * 17, (t >> 8 & 15) * 17),
              i = this.addressRegister & this.cram.length - 1;
            this.cram[i - 1] = this.cram_latch, this.cram[i] = e, this.cpalette[i >> 1] = r, this.prefetchByte = e, this.addressRegister &= this.ramMask, this.redrawRequired = !0;
          } else this.cram_latch = e;
          this.addressRegister++;
        } else _get(_getPrototypeOf(fe.prototype), "writeData", this).call(this, e);
        this.latch = !1;
      }
    }]);
    return fe;
  }(be);
exports.b = fe;
exports.a = be;
var oe = 2,
  ve = /*#__PURE__*/function (_le) {
    _inherits(ve, _le);
    var _super3 = _createSuper(ve);
    function ve() {
      var _this3;
      _classCallCheck(this, ve);
      _this3 = _super3.apply(this, arguments);
      _this3.cpuFrequency = 3579545;
      _this3.canvasWidth = 304;
      _this3.numTotalScanlines = 262;
      _this3.numVisibleScanlines = 240;
      _this3.cpuCyclesPerLine = _this3.cpuFrequency / (262 * 60);
      _this3.sampleRate = 262 * 60 * oe;
      _this3.overscan = !0;
      _this3.cpu = new _chunkY2G6ABZC.c();
      return _this3;
    }
    _createClass(ve, [{
      key: "getKeyboardFunction",
      value: function getKeyboardFunction() {
        return null;
      }
    }, {
      key: "init",
      value: function init(e, t, r) {
        this.connectCPUMemoryBus(e), this.connectCPUIOBus(t), this.handler = (0, _chunkQEB57REV.W)(this.inputs, this.getKeyboardMap(), this.getKeyboardFunction()), this.psg = r, this.audioadapter = r && new _chunkY2G6ABZC.k(r.psg, oe, this.sampleRate);
      }
    }, {
      key: "connectVideo",
      value: function connectVideo(e) {
        var _this4 = this;
        _get(_getPrototypeOf(ve.prototype), "connectVideo", this).call(this, e);
        var t = {
          setVDPInterrupt: function setVDPInterrupt(r) {
            r && _this4.vdpInterrupt();
          }
        };
        this.vdp = this.newVDP(this.pixels, t, !0);
      }
    }, {
      key: "connectProbe",
      value: function connectProbe(e) {
        _get(_getPrototypeOf(ve.prototype), "connectProbe", this).call(this, e), this.vdp.probe = e || this.nullProbe;
      }
    }, {
      key: "newVDP",
      value: function newVDP(e, t, r) {
        return new O(e, t, r);
      }
    }, {
      key: "startScanline",
      value: function startScanline() {
        this.audio && this.audioadapter && this.audioadapter.generate(this.audio);
      }
    }, {
      key: "drawScanline",
      value: function drawScanline() {
        this.vdp.drawScanline(this.scanline);
      }
    }, {
      key: "loadState",
      value: function loadState(e) {
        _get(_getPrototypeOf(ve.prototype), "loadState", this).call(this, e), this.vdp.restoreState(e.vdp);
      }
    }, {
      key: "saveState",
      value: function saveState() {
        var e = _get(_getPrototypeOf(ve.prototype), "saveState", this).call(this);
        return e.vdp = this.vdp.getState(), e;
      }
    }, {
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(ve.prototype), "reset", this).call(this), this.vdp.reset(), this.psg.reset();
      }
    }, {
      key: "getDebugCategories",
      value: function getDebugCategories() {
        return ["CPU", "Stack", "VDP"];
      }
    }, {
      key: "getDebugInfo",
      value: function getDebugInfo(e, t) {
        switch (e) {
          case "VDP":
            return this.vdpStateToLongString(t.vdp);
        }
      }
    }, {
      key: "vdpStateToLongString",
      value: function vdpStateToLongString(e) {
        return this.vdp.getRegsString();
      }
    }, {
      key: "readVRAMAddress",
      value: function readVRAMAddress(e) {
        return this.vdp.ram[e & 16383];
      }
    }]);
    return ve;
  }(_chunkY2G6ABZC.q);
exports.c = ve;

},{"./chunk-QEB57REV.js":3,"./chunk-Y2G6ABZC.js":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = Ge;
exports.A = Ae;
exports.B = Ke;
exports.C = Ee;
exports.D = Ve;
exports.E = Le;
exports.F = we;
exports.G = Me;
exports.H = void 0;
exports.I = d;
exports.J = void 0;
exports.K = Ne;
exports.L = Re;
exports.M = Fe;
exports.N = W;
exports.T = exports.S = exports.R = exports.Q = exports.P = exports.O = void 0;
exports.U = Oe;
exports.V = void 0;
exports.W = Q;
exports.X = Ie;
exports.Y = He;
exports.Z = void 0;
exports._ = Be;
exports.a = ne;
exports.aa = ee;
exports.b = ie;
exports.ba = te;
exports.c = ae;
exports.ca = void 0;
exports.d = se;
exports.da = ke;
exports.e = oe;
exports.f = ce;
exports.g = V;
exports.h = le;
exports.i = ue;
exports.j = fe;
exports.k = he;
exports.l = O;
exports.m = I;
exports.n = H;
exports.o = pe;
exports.p = me;
exports.q = ge;
exports.r = ve;
exports.s = xe;
exports.t = P;
exports.u = A;
exports.v = de;
exports.w = ye;
exports.x = _e;
exports.y = B;
exports.z = be;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ne(e, t) {
  for (e += ""; e.length < t;) {
    e = " " + e;
  }
  return e;
}
function ie(e, t) {
  for (e += ""; e.length < t;) {
    e += " ";
  }
  return e;
}
function ae(e) {
  return e &= 255, e < 128 ? e : -(256 - e);
}
function se(e) {
  var t = e.split("/");
  return t[t.length - 1];
}
function oe(e) {
  return e.substring(0, e.lastIndexOf("/"));
}
function ce(e) {
  var t = e.lastIndexOf(".");
  return t > 0 ? e.substr(0, t) : e;
}
function V(e, t) {
  return t || (t = 2), t == 8 ? V(e >> 16 & 65535, 4) + V(e & 65535, 4) : D(e, t, 16);
}
function le(e, t) {
  return t || (t = 8), D(e, t, 2);
}
function D(e, t, r) {
  try {
    for (var i = e.toString(r).toUpperCase(); i.length < t;) {
      i = "0" + i;
    }
    return i;
  } catch (n) {
    return e + "";
  }
}
function ue(e) {
  var t = {};
  if (e) for (var r in e) {
    t[e[r]] = r;
  }
  return t;
}
function fe(e, t) {
  for (var r = e.split(/(\S+\s+)/).filter(function (l) {
      return l;
    }), i = t.split(/(\S+\s+)/).filter(function (l) {
      return l;
    }), n = 0, s = 0, a = ""; n < r.length && s < i.length;) {
    var o = r[n],
      c = i[s];
    if (c && c.indexOf("\n") >= 0) for (; n < e.length && r[n].indexOf("\n") < 0;) {
      n++;
    }
    o != c && (c = '<span class="hilite">' + c + "</span>"), a += c, n++, s++;
  }
  for (; s < i.length;) {
    a += i[s++];
  }
  return a;
}
function he() {
  var e = 16,
    t = 0,
    r = 1,
    i = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 35, 48, 72, 128],
    n = null,
    s = function s(a) {
      for (var o = 1, c = 0, l = e; l < a.length;) {
        o = o + (a[l] & 255) & 65535, c = c + o & 65535, l++;
      }
      return c << 16 | o;
    };
  this.decode = function (a) {
    if (n = null, a.length < e || a[0] != 76 || a[1] != 90 || a[2] != 71) return null;
    var o = a[6] | a[5] << 8 | a[4] << 16 | a[3] << 24,
      c = (a[11] & 255) << 24 | (a[12] & 255) << 16 | (a[13] & 255) << 8 | a[14] & 255;
    if (s(a) != c) return null;
    var l = new Array(),
      h = a[15] & 255;
    if (h == r) for (var m = a[16] & 255, p = a[17] & 255, x = a[18] & 255, T = a[19] & 255, g, v, L, S, K, E, y = 0, _ = e + 4, M = a.length; _ <= M;) {
      if (g = a[_++] & 255, g != m && g != p && g != x && g != T) l[y++] = g;else if (v = a[_++] & 255, v != 0) for (g == m ? (K = i[v & 31], L = a[_++] & 255, S = a[_++] & 255, E = ((v & 224) << 11 | L << 8 | S) + 2056) : g == p ? (K = i[v & 31], L = a[_++] & 255, E = ((v & 224) << 3 | L) + 8) : g == x ? (K = (v >> 6) + 3, E = (v & 63) + 8) : (K = i[v & 31], E = (v >> 5) + 1), b = 0; b < K; b++) {
        l[y] = l[y - E], y++;
      } else l[y++] = g;
    } else if (h == t) for (var y = 0, M = a.length, b = e; b < M; b++) {
      l[y++] = a[b] & 255;
    } else return null;
    return l.length < o ? null : (n = l.slice(0, o), n);
  }, this.getByteArray = function () {
    return n;
  }, this.getStringLatin1 = function () {
    return I(n);
  }, this.getStringUTF8 = function () {
    return H(n);
  };
}
function O(e) {
  for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++) {
    t[r] = e.charCodeAt(r);
  }
  return t;
}
function I(e) {
  var t = "";
  if (e != null) {
    for (var r = new Array(), i = 0; i < 256; ++i) {
      r[i] = String.fromCharCode(i);
    }
    for (var n = e.length, i = 0; i < n; i++) {
      t += r[e[i]];
    }
  }
  return t;
}
function H(e) {
  for (var t = "", r = new Array(), i = 0; i < 128; ++i) {
    r[i] = String.fromCharCode(i);
  }
  for (var n, s = e.length, i = 0; i < s;) {
    if (n = e[i++], n < 128) t += r[n];else {
      if (n >= 192 && n < 224) n = (n & 31) << 6 | e[i++] & 63;else if (n = (n & 15) << 12 | (e[i] & 63) << 6 | e[i + 1] & 63, i += 2, n == 65279) continue;
      t += String.fromCharCode(n);
    }
  }
  return t;
}
function pe(e, t) {
  var r = 0;
  if (e) {
    e = e.toUpperCase();
    var a = [".CHR", ".BIN", ".DAT", ".PAL", ".NAM", ".RLE", ".LZ4", ".NSF"];
    for (var _i = 0, _a = a; _i < _a.length; _i++) {
      var i = _a[_i];
      e.endsWith(i) && r++;
    }
  }
  for (var n = 0; n < (t ? t.length : 0);) {
    var _a2 = t[n++];
    if ((_a2 & 128) == 0) {
      if (_a2 < 9 || _a2 >= 14 && _a2 < 26 || _a2 == 127) {
        r++;
        break;
      }
    } else {
      var s = 0;
      for ((_a2 & 224) == 192 ? s = 1 : (_a2 & 240) == 224 ? s = 2 : (_a2 & 248) == 240 ? s = 3 : (_a2 < 160 || _a2 == 255) && r++; s--;) {
        if (n >= t.length || (t[n++] & 192) != 128) {
          r++;
          break;
        }
      }
    }
  }
  return r > 0;
}
function me(e, t, r) {
  for (var i = r || 9, n = t.length, s = e._malloc(n + 1), a = 0; a < n; a++) {
    e.setValue(s + a, t[a], "i8");
  }
  var o = e._LZG_MaxEncodedSize(n),
    c = e._malloc(o + 1),
    l = e.ccall("compress_lzg", "number", ["number", "number", "number", "number", "number"], [i, s, n, o, c]);
  e._free(s);
  for (var h = new Uint8Array(l), a = 0; a < l; a++) {
    h[a] = e.getValue(c + a, "i8");
  }
  return e._free(c), h;
}
function ge(e, t, r) {
  for (var i in r) {
    var n = r[i],
      s = _typeof(n);
    n === null || s == "undefined" ? t[i] = n : s == "function" || (s == "object" ? n.slice && (t[i] = n.slice()) : t[i] = n);
  }
  return t;
}
function ve(e, t, r) {
  for (var i = "", n = 0; n < t.length; n++) {
    if (t[n]) {
      var s = 1 << (r ? t.length - 1 - n : n);
      n > 0 && (i += " "), i += e & s ? t[n] : "-";
    }
  }
  return i;
}
function xe(e) {
  return (e & 255) << 16 | e >> 16 & 255 | e & 65280;
}
function P(e, t, r) {
  return e & 255 | (t & 255) << 8 | (r & 255) << 16 | 4278190080;
}
function A(e, t, r) {
  return r < e ? e : r > t ? t : r;
}
function de(e) {
  return e.replace(/\W+/g, "_");
}
function ye(e) {
  for (var t = 0, r = e[t++], i = [], n = r; t < e.length;) {
    var s = e[t++];
    if (s == r) {
      for (var a = e[t++], o = 0; o < a; o++) {
        i.push(n);
      }
      if (a == 0) break;
    } else n = s, i.push(n);
  }
  return new Uint8Array(i);
}
function _e(e, t, r) {
  var i = new XMLHttpRequest();
  i.open("GET", e, !0), i.responseType = r, i.onload = function (n) {
    if (i.status == 200) {
      var s = i.response;
      s instanceof ArrayBuffer && (s = new Uint8Array(s)), t(s);
    } else if (i.status == 404) t(null);else throw Error("Error " + i.status + " loading " + e);
  }, i.onerror = function (n) {
    t(null);
  }, i.ontimeout = function (n) {
    throw Error("Timeout loading " + e);
  }, i.send(null);
}
function B(e) {
  return e.split(".")[0];
}
function G(e) {
  return e.split("-")[0];
}
function be(e) {
  return G(B(e));
}
function Ae(e) {
  return e != null && (Array.isArray(e) || k(e));
}
function k(e) {
  return e != null && e.BYTES_PER_ELEMENT;
}
function Ke(e) {
  return typeof e == "string" ? O(e) : e;
}
function Ee(e) {
  return e < 32 ? String.fromCharCode(e + 9216) : String.fromCharCode(e);
}
function Ve(e) {
  return new Promise(function (t, r) {
    var i = document.createElement("script");
    i.onload = t, i.onerror = r, i.src = e, document.getElementsByTagName("head")[0].appendChild(i);
  });
}
function Le(e) {
  e.startsWith("?") && (e = e.substr(1));
  var t = e.split("&");
  if (!t || t.length == 0) return {};
  for (var r = {}, i = 0; i < t.length; ++i) {
    var n = t[i].split("=", 2);
    n.length == 1 ? r[n[0]] = "" : r[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " "));
  }
  return r;
}
function we(e) {
  return !e || e == "false" || e == "0" ? !1 : e == "true" || e == "1" ? !0 : !!e;
}
function Me(e, t, r, i) {
  var n = e,
    s = 1;
  for (r > 1 && r < n && (n = Math.ceil(e / r), s = r); n > s;) {
    var a = n,
      o = s;
    if ((n & 1) == 0 && (o = s * 2, a = n / 2), n % 3 == 0 && (o = s * 3, a = n / 3), n % 5 == 0 && (o = s * 5, a = n / 5), a < t || a < o * i) break;
    n = a, s = o;
  }
  return {
    a: n,
    b: s
  };
}
var X = /*#__PURE__*/function () {
  function X() {
    _classCallCheck(this, X);
    this.maxSize = 8e6;
    this.reset();
  }
  _createClass(X, [{
    key: "get",
    value: function get(t) {
      return this.cache.get(t);
    }
  }, {
    key: "put",
    value: function put(t, r) {
      this.cache.set(t, r), this.size += r.length, this.size > this.maxSize && (console.log("cache reset", this), this.reset());
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cache = new Map(), this.size = 0;
    }
  }]);
  return X;
}();
exports.H = X;
function d(e) {
  var t = e && e.w + "px" || "100%",
    r = e && e.h + "px" || "100%",
    i = this.itemHeight = e.itemHeight;
  this.items = e.items, this.generatorFn = e.generatorFn, this.totalRows = e.totalRows || e.items && e.items.length;
  var n = d.createScroller(i * this.totalRows);
  this.container = d.createContainer(t, r), this.container.appendChild(n);
  var s = Math.ceil(e.h / i);
  this.cachedItemsLen = s * 3, this._renderChunk(this.container, 0);
  var a = this,
    o,
    c = s * i,
    l = 0;
  this.rmNodeInterval = setInterval(function () {
    if (Date.now() - l > 100) for (var m = document.querySelectorAll('[data-rm="1"]'), p = 0, x = m.length; p < x; p++) {
      try {
        a.container.removeChild(m[p]);
      } catch (T) {}
    }
  }, 300);
  function h(m) {
    var p = m.target.scrollTop;
    if (!o || Math.abs(p - o) > c) {
      var x = Math.floor(p / i) - s;
      a._renderChunk(a.container, x < 0 ? 0 : x), o = p;
    }
    l = Date.now(), m.preventDefault && m.preventDefault();
  }
  this.container.addEventListener("scroll", h);
}
d.prototype.createRow = function (e) {
  var t;
  if (this.generatorFn) t = this.generatorFn(e);else if (this.items) if (typeof this.items[e] == "string") {
    var r = document.createTextNode(this.items[e]);
    t = document.createElement("div"), t.style.height = this.itemHeight + "px", t.appendChild(r);
  } else t = this.items[e];
  return t.classList.add("vrow"), t.setAttribute("data-index", "" + e), t.style.position = "absolute", t.style.top = e * this.itemHeight + "px", t;
};
d.prototype._renderChunk = function (e, t) {
  var r = t + this.cachedItemsLen;
  r > this.totalRows && (r = this.totalRows);
  for (var i = document.createDocumentFragment(), n = t; n < r; n++) {
    i.appendChild(this.createRow(n));
  }
  for (var s = 1, a = e.childNodes.length; s < a; s++) {
    e.childNodes[s].style.display = "none", e.childNodes[s].setAttribute("data-rm", "1");
  }
  e.appendChild(i);
};
d.createContainer = function (e, t) {
  var r = document.createElement("div");
  return r.classList.add("vlist"), r.style.width = e, r.style.height = t, r.style.overflow = "auto", r.style.position = "relative", r.style.padding = "0", r.style.border = "1px solid black", r;
};
d.createScroller = function (e) {
  var t = document.createElement("div");
  return t.style.opacity = "0", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", t.style.width = "1px", t.style.height = e + "px", t;
};
d.prototype.scrollToItem = function (e) {
  this.container.scrollTop = this.itemHeight * e;
};
var Ue = {},
  w = 1;
exports.J = Ue;
function Ne() {
  var e = w;
  return e ^= e << 13, e ^= e >> 17, e ^= e << 5, (w = e) & 255;
}
function Re() {
  return w;
}
function Fe(e) {
  w = e;
}
function W(e, t, r, i) {
  var n = e.createElement("canvas");
  return n.width = r, n.height = i, n.classList.add("emuvideo"), n.tabIndex = -1, t.appendChild(n), n;
}
var u;
exports.O = u;
(function (o) {
  o[o.KeyDown = 1] = "KeyDown", o[o.Shift = 2] = "Shift", o[o.Ctrl = 4] = "Ctrl", o[o.Alt = 8] = "Alt", o[o.Meta = 16] = "Meta", o[o.KeyUp = 64] = "KeyUp", o[o.KeyPress = 128] = "KeyPress";
})(u || (exports.O = u = {}));
function Y(e, t) {
  e.onkeydown = function (r) {
    var i = R(r);
    t(r.which, r.keyCode, 1 | i), i || r.preventDefault();
  }, e.onkeyup = function (r) {
    t(r.which, r.keyCode, 64 | R(r));
  };
}
var U = /*#__PURE__*/function () {
    function U(t, r, i, n) {
      _classCallCheck(this, U);
      this.paddle_x = 255;
      this.paddle_y = 255;
      this.mainElement = t, this.width = r, this.height = i, this.options = n;
    }
    _createClass(U, [{
      key: "setRotate",
      value: function setRotate(t) {
        var r = this.canvas;
        t ? (r.style.transform = "rotate(" + t + "deg)", r.width < r.height && (r.style.paddingLeft = r.style.paddingRight = "10%")) : (r.style.transform = null, r.style.paddingLeft = r.style.paddingRight = null);
      }
    }, {
      key: "create",
      value: function create(t) {
        var r;
        this.canvas = r = W(t || document, this.mainElement, this.width, this.height), this.vcanvas = $(r), this.options && this.options.rotate && this.setRotate(this.options.rotate), this.options && this.options.overscan && this.vcanvas.css("padding", "0px"), this.options && this.options.aspect && (console.log(this.options), this.vcanvas.css("aspect-ratio", this.options.aspect + "")), this.ctx = r.getContext("2d"), this.imageData = this.ctx.createImageData(this.width, this.height), this.datau32 = new Uint32Array(this.imageData.data.buffer);
      }
    }, {
      key: "setKeyboardEvents",
      value: function setKeyboardEvents(t) {
        Y(this.canvas, t);
      }
    }, {
      key: "getFrameData",
      value: function getFrameData() {
        return this.datau32;
      }
    }, {
      key: "getContext",
      value: function getContext() {
        return this.ctx;
      }
    }, {
      key: "updateFrame",
      value: function updateFrame(t, r, i, n, s, a) {
        s && a ? this.ctx.putImageData(this.imageData, t, r, i, n, s, a) : this.ctx.putImageData(this.imageData, 0, 0);
      }
    }, {
      key: "clearRect",
      value: function clearRect(t, r, i, n) {
        var s = this.ctx;
        s.fillStyle = "#000000", s.fillRect(t, r, i, n);
      }
    }, {
      key: "setupMouseEvents",
      value: function setupMouseEvents(t) {
        var _this = this;
        t || (t = this.canvas), $(t).mousemove(function (r) {
          var i = ee(t, r),
            n = Math.floor(i.x * 255 / _this.canvas.width),
            s = Math.floor(i.y * 255 / _this.canvas.height);
          _this.paddle_x = A(0, 255, n), _this.paddle_y = A(0, 255, s);
        });
      }
    }]);
    return U;
  }(),
  Z = /*#__PURE__*/function (_U) {
    _inherits(Z, _U);
    var _super = _createSuper(Z);
    function Z() {
      var _this2;
      _classCallCheck(this, Z);
      _this2 = _super.apply(this, arguments);
      _this2.persistenceAlpha = .5;
      _this2.jitter = 1;
      _this2.gamma = .8;
      _this2.COLORS = ["#111111", "#1111ff", "#11ff11", "#11ffff", "#ff1111", "#ff11ff", "#ffff11", "#ffffff"];
      return _this2;
    }
    _createClass(Z, [{
      key: "create",
      value: function create() {
        _get(_getPrototypeOf(Z.prototype), "create", this).call(this), this.sx = this.width / 1024, this.sy = this.height / 1024;
      }
    }, {
      key: "clear",
      value: function clear() {
        var t = this.ctx;
        t.globalCompositeOperation = "source-over", t.globalAlpha = this.persistenceAlpha, t.fillStyle = "#000000", t.fillRect(0, 0, this.width, this.height), t.globalAlpha = 1, t.globalCompositeOperation = "lighter";
      }
    }, {
      key: "drawLine",
      value: function drawLine(t, r, i, n, s, a) {
        var o = this.ctx,
          c = this.sx,
          l = this.sy;
        if (s > 0) {
          var h = Math.pow(s / 255, this.gamma);
          o.globalAlpha = h, o.lineWidth = 3, o.beginPath();
          var m = this.jitter * (Math.random() - .5),
            p = this.jitter * (Math.random() - .5);
          t += m, i += m, r += p, n += p, o.moveTo(t * c, this.height - r * l), t == i && r == n ? o.lineTo(i * c + 1, this.height - n * l) : o.lineTo(i * c, this.height - n * l), o.strokeStyle = this.COLORS[a & 7], o.stroke();
        }
      }
    }]);
    return Z;
  }(U),
  N = /*#__PURE__*/_createClass(function N(t) {
    _classCallCheck(this, N);
    this.mem = new Uint8Array(new ArrayBuffer(t));
  }),
  C = /*#__PURE__*/function (_Error) {
    _inherits(C, _Error);
    var _super2 = _createSuper(C);
    function C(t, r) {
      var _this3;
      _classCallCheck(this, C);
      _this3 = _super2.call(this, t);
      _this3.$loc = r, Object.setPrototypeOf(_assertThisInitialized(_this3), C.prototype);
      return _this3;
    }
    return _createClass(C);
  }( /*#__PURE__*/_wrapNativeSuper(Error)),
  z = !1,
  q = /*#__PURE__*/function () {
    function q(t, r) {
      _classCallCheck(this, q);
      this.running = !1;
      this.pulsing = !1;
      this.nextts = 0;
      this.useReqAnimFrame = z && typeof window.requestAnimationFrame == "function";
      this.frameRate = t, this.intervalMsec = 1e3 / t, this.callback = r;
    }
    _createClass(q, [{
      key: "scheduleFrame",
      value: function scheduleFrame(t) {
        var _this4 = this;
        var r = function r(i) {
          try {
            _this4.nextFrame(_this4.useReqAnimFrame ? i : Date.now());
          } catch (n) {
            throw _this4.running = !1, _this4.pulsing = !1, n;
          }
        };
        this.useReqAnimFrame ? window.requestAnimationFrame(r) : setTimeout(r, t);
      }
    }, {
      key: "nextFrame",
      value: function nextFrame(t) {
        t > this.nextts && (this.running && this.callback(), this.nframes == 0 && (this.startts = t), this.nframes++ == 300 && console.log("Avg framerate: " + this.nframes * 1e3 / (t - this.startts) + " fps")), this.nextts += this.intervalMsec, t - this.nextts > 1e3 && (this.nextts = t), this.running ? this.scheduleFrame(this.nextts - t) : this.pulsing = !1;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }, {
      key: "start",
      value: function start() {
        this.running || (this.running = !0, this.nextts = 0, this.nframes = 0, this.pulsing || (this.scheduleFrame(0), this.pulsing = !0));
      }
    }, {
      key: "stop",
      value: function stop() {
        this.running = !1;
      }
    }]);
    return q;
  }();
exports.T = q;
exports.S = C;
exports.R = N;
exports.Q = Z;
exports.P = U;
function Oe(e, t, r) {
  for (var i = "", n = e.BYTES_PER_ELEMENT || 1, s = Math.ceil(16 / n), a = e instanceof Float32Array || e instanceof Float64Array, o = 0; o < r; o += s) {
    i += "$" + V(o + t) + ":";
    for (var c = 0; c < s; c++) {
      o + c < e.length && (c == s / 2 && (i += " "), a ? i += " " + e[o + c].toPrecision(n * 2) : i += " " + V(e[o + c], n * 2));
    }
    i += "\n";
  }
  return i;
}
var f = {
  ANYKEY: {
    c: 0,
    n: "?"
  },
  UP: {
    c: 38,
    n: "Up",
    plyr: 0,
    yaxis: -1
  },
  DOWN: {
    c: 40,
    n: "Down",
    plyr: 0,
    yaxis: 1
  },
  LEFT: {
    c: 37,
    n: "Left",
    plyr: 0,
    xaxis: -1
  },
  RIGHT: {
    c: 39,
    n: "Right",
    plyr: 0,
    xaxis: 1
  },
  A: {
    c: 32,
    n: "Space",
    plyr: 0,
    button: 0
  },
  B: {
    c: 16,
    n: "Shift",
    plyr: 0,
    button: 1
  },
  GP_A: {
    c: 88,
    n: "X",
    plyr: 0,
    button: 0
  },
  GP_B: {
    c: 90,
    n: "Z",
    plyr: 0,
    button: 1
  },
  GP_C: {
    c: 86,
    n: "V",
    plyr: 0,
    button: 2
  },
  GP_D: {
    c: 67,
    n: "C",
    plyr: 0,
    button: 3
  },
  SELECT: {
    c: 220,
    n: "\\",
    plyr: 0,
    button: 8
  },
  START: {
    c: 13,
    n: "Enter",
    plyr: 0,
    button: 9
  },
  OPTION: {
    c: 8,
    n: "Bcksp",
    plyr: 0,
    button: 10
  },
  P2_UP: {
    c: 87,
    n: "W",
    plyr: 1,
    yaxis: -1
  },
  P2_DOWN: {
    c: 83,
    n: "S",
    plyr: 1,
    yaxis: 1
  },
  P2_LEFT: {
    c: 65,
    n: "A",
    plyr: 1,
    xaxis: -1
  },
  P2_RIGHT: {
    c: 68,
    n: "D",
    plyr: 1,
    xaxis: 1
  },
  P2_A: {
    c: 84,
    n: "T",
    plyr: 1,
    button: 0
  },
  P2_B: {
    c: 82,
    n: "R",
    plyr: 1,
    button: 1
  },
  P2_GP_A: {
    c: 69,
    n: "E",
    plyr: 1,
    button: 0
  },
  P2_GP_B: {
    c: 82,
    n: "R",
    plyr: 1,
    button: 1
  },
  P2_GP_C: {
    c: 84,
    n: "T",
    plyr: 1,
    button: 2
  },
  P2_GP_D: {
    c: 89,
    n: "Y",
    plyr: 1,
    button: 3
  },
  P2_SELECT: {
    c: 70,
    n: "F",
    plyr: 1,
    button: 8
  },
  P2_START: {
    c: 71,
    n: "G",
    plyr: 1,
    button: 9
  },
  VK_ESCAPE: {
    c: 27,
    n: "Esc"
  },
  VK_F1: {
    c: 112,
    n: "F1"
  },
  VK_F2: {
    c: 113,
    n: "F2"
  },
  VK_F3: {
    c: 114,
    n: "F3"
  },
  VK_F4: {
    c: 115,
    n: "F4"
  },
  VK_F5: {
    c: 116,
    n: "F5"
  },
  VK_F6: {
    c: 117,
    n: "F6"
  },
  VK_F7: {
    c: 118,
    n: "F7"
  },
  VK_F8: {
    c: 119,
    n: "F8"
  },
  VK_F9: {
    c: 120,
    n: "F9"
  },
  VK_F10: {
    c: 121,
    n: "F10"
  },
  VK_F11: {
    c: 122,
    n: "F11"
  },
  VK_F12: {
    c: 123,
    n: "F12"
  },
  VK_SCROLL_LOCK: {
    c: 145,
    n: "ScrLck"
  },
  VK_PAUSE: {
    c: 19,
    n: "Pause"
  },
  VK_QUOTE: {
    c: 222,
    n: "'"
  },
  VK_1: {
    c: 49,
    n: "1"
  },
  VK_2: {
    c: 50,
    n: "2"
  },
  VK_3: {
    c: 51,
    n: "3"
  },
  VK_4: {
    c: 52,
    n: "4"
  },
  VK_5: {
    c: 53,
    n: "5"
  },
  VK_6: {
    c: 54,
    n: "6"
  },
  VK_7: {
    c: 55,
    n: "7"
  },
  VK_8: {
    c: 56,
    n: "8"
  },
  VK_9: {
    c: 57,
    n: "9"
  },
  VK_0: {
    c: 48,
    n: "0"
  },
  VK_MINUS: {
    c: 189,
    n: "-"
  },
  VK_MINUS2: {
    c: 173,
    n: "-"
  },
  VK_EQUALS: {
    c: 187,
    n: "="
  },
  VK_EQUALS2: {
    c: 61,
    n: "="
  },
  VK_BACK_SPACE: {
    c: 8,
    n: "Bkspc"
  },
  VK_TAB: {
    c: 9,
    n: "Tab"
  },
  VK_Q: {
    c: 81,
    n: "Q"
  },
  VK_W: {
    c: 87,
    n: "W"
  },
  VK_E: {
    c: 69,
    n: "E"
  },
  VK_R: {
    c: 82,
    n: "R"
  },
  VK_T: {
    c: 84,
    n: "T"
  },
  VK_Y: {
    c: 89,
    n: "Y"
  },
  VK_U: {
    c: 85,
    n: "U"
  },
  VK_I: {
    c: 73,
    n: "I"
  },
  VK_O: {
    c: 79,
    n: "O"
  },
  VK_P: {
    c: 80,
    n: "P"
  },
  VK_ACUTE: {
    c: 219,
    n: "\xB4"
  },
  VK_OPEN_BRACKET: {
    c: 219,
    n: "["
  },
  VK_CLOSE_BRACKET: {
    c: 221,
    n: "]"
  },
  VK_CAPS_LOCK: {
    c: 20,
    n: "CpsLck"
  },
  VK_A: {
    c: 65,
    n: "A"
  },
  VK_S: {
    c: 83,
    n: "S"
  },
  VK_D: {
    c: 68,
    n: "D"
  },
  VK_F: {
    c: 70,
    n: "F"
  },
  VK_G: {
    c: 71,
    n: "G"
  },
  VK_H: {
    c: 72,
    n: "H"
  },
  VK_J: {
    c: 74,
    n: "J"
  },
  VK_K: {
    c: 75,
    n: "K"
  },
  VK_L: {
    c: 76,
    n: "L"
  },
  VK_CEDILLA: {
    c: 186,
    n: "\xC7"
  },
  VK_TILDE: {
    c: 222,
    n: "~"
  },
  VK_ENTER: {
    c: 13,
    n: "Enter"
  },
  VK_SHIFT: {
    c: 16,
    n: "Shift"
  },
  VK_BACK_SLASH: {
    c: 220,
    n: "\\"
  },
  VK_Z: {
    c: 90,
    n: "Z"
  },
  VK_X: {
    c: 88,
    n: "X"
  },
  VK_C: {
    c: 67,
    n: "C"
  },
  VK_V: {
    c: 86,
    n: "V"
  },
  VK_B: {
    c: 66,
    n: "B"
  },
  VK_N: {
    c: 78,
    n: "N"
  },
  VK_M: {
    c: 77,
    n: "M"
  },
  VK_COMMA: {
    c: 188,
    n: "] ="
  },
  VK_PERIOD: {
    c: 190,
    n: "."
  },
  VK_SEMICOLON: {
    c: 59,
    n: ";"
  },
  VK_SLASH: {
    c: 191,
    n: "/"
  },
  VK_CONTROL: {
    c: 17,
    n: "Ctrl"
  },
  VK_ALT: {
    c: 18,
    n: "Alt"
  },
  VK_COMMAND: {
    c: 224,
    n: "Cmd"
  },
  VK_SPACE: {
    c: 32,
    n: "Space"
  },
  VK_INSERT: {
    c: 45,
    n: "Ins"
  },
  VK_DELETE: {
    c: 46,
    n: "Del"
  },
  VK_HOME: {
    c: 36,
    n: "Home"
  },
  VK_END: {
    c: 35,
    n: "End"
  },
  VK_PAGE_UP: {
    c: 33,
    n: "PgUp"
  },
  VK_PAGE_DOWN: {
    c: 34,
    n: "PgDown"
  },
  VK_UP: {
    c: 38,
    n: "Up"
  },
  VK_DOWN: {
    c: 40,
    n: "Down"
  },
  VK_LEFT: {
    c: 37,
    n: "Left"
  },
  VK_RIGHT: {
    c: 39,
    n: "Right"
  },
  VK_NUM_LOCK: {
    c: 144,
    n: "Num"
  },
  VK_DIVIDE: {
    c: 111,
    n: "Num /"
  },
  VK_MULTIPLY: {
    c: 106,
    n: "Num *"
  },
  VK_SUBTRACT: {
    c: 109,
    n: "Num -"
  },
  VK_ADD: {
    c: 107,
    n: "Num +"
  },
  VK_DECIMAL: {
    c: 194,
    n: "Num ."
  },
  VK_NUMPAD0: {
    c: 96,
    n: "Num 0"
  },
  VK_NUMPAD1: {
    c: 97,
    n: "Num 1"
  },
  VK_NUMPAD2: {
    c: 98,
    n: "Num 2"
  },
  VK_NUMPAD3: {
    c: 99,
    n: "Num 3"
  },
  VK_NUMPAD4: {
    c: 100,
    n: "Num 4"
  },
  VK_NUMPAD5: {
    c: 101,
    n: "Num 5"
  },
  VK_NUMPAD6: {
    c: 102,
    n: "Num 6"
  },
  VK_NUMPAD7: {
    c: 103,
    n: "Num 7"
  },
  VK_NUMPAD8: {
    c: 104,
    n: "Num 8"
  },
  VK_NUMPAD9: {
    c: 105,
    n: "Num 9"
  },
  VK_NUMPAD_CENTER: {
    c: 12,
    n: "Num Cntr"
  }
};
exports.V = f;
function R(e) {
  return (e.shiftKey ? 2 : 0) | (e.ctrlKey ? 4 : 0) | (e.altKey ? 8 : 0) | (e.metaKey ? 16 : 0);
}
function Q(e, t, r, i) {
  return function (n, s, a) {
    if (!t) {
      r(null, n, s, a);
      return;
    }
    var o = t[n];
    if (o || (o = t[0]), r && (o || i) && r(o, n, s, a), o) {
      var c = o.mask;
      c < 0 && (c = -c, a & (1 | 64) && (a ^= 1 | 64)), a & 1 ? e[o.index] |= c : a & 64 && (e[o.index] &= ~c);
    }
  };
}
function Ie(e, t, r, i, n) {
  var s = Q(t, r, i, n);
  return e.setKeyboardEvents(s), new F(s);
}
function He(e) {
  for (var t = new Map(), r = 0; r < e.length; r++) {
    var i = e[r],
      n = {
        index: i[1],
        mask: i[2],
        def: i[0]
      };
    t[i[0].c] = n;
  }
  return t;
}
var J = [f.UP, f.DOWN, f.LEFT, f.RIGHT, f.A, f.B, f.SELECT, f.START, f.P2_UP, f.P2_DOWN, f.P2_LEFT, f.P2_RIGHT, f.P2_A, f.P2_B, f.P2_SELECT, f.P2_START],
  F = /*#__PURE__*/function () {
    function F(t) {
      var _this5 = this;
      _classCallCheck(this, F);
      this.active = !1;
      this.state = new Int8Array(32);
      this.lastState = new Int8Array(32);
      this.AXIS0 = 24;
      this.handler = t, window.addEventListener("gamepadconnected", function (r) {
        console.log("Gamepad connected:", r), _this5.active = typeof navigator.getGamepads == "function";
      }), window.addEventListener("gamepaddisconnected", function (r) {
        console.log("Gamepad disconnected:", r);
      });
    }
    _createClass(F, [{
      key: "poll",
      value: function poll() {
        if (!!this.active) for (var t = navigator.getGamepads(), r = 0; r < t.length; r++) {
          var i = t[r];
          if (i) {
            for (var n = 0; n < i.axes.length; n++) {
              var s = n + this.AXIS0;
              this.state[s] = Math.round(i.axes[n]), this.state[s] != this.lastState[s] && this.handleStateChange(r, s);
            }
            for (var n = 0; n < i.buttons.length; n++) {
              this.state[n] = i.buttons[n].pressed ? 1 : 0, this.state[n] != this.lastState[n] && this.handleStateChange(r, n);
            }
            this.lastState.set(this.state);
          }
        }
      }
    }, {
      key: "handleStateChange",
      value: function handleStateChange(t, r) {
        var i = r - this.AXIS0;
        var _iterator = _createForOfIteratorHelper(J),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var n = _step.value;
            if (n && n.plyr == t) {
              var s = n.c,
                a = this.state[r],
                o = this.lastState[r];
              if (r == n.button || i == 0 && n.xaxis == a || i == 1 && n.yaxis == a) {
                a != 0 ? this.handler(s, 0, 1) : this.handler(s, 0, 64);
                break;
              } else if (a == 0 && i == 0 && n.xaxis == o || i == 1 && n.yaxis == o) {
                this.handler(s, 0, 64);
                break;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }]);
    return F;
  }();
exports.Z = F;
function Be(e, t, r) {
  if (e.length > t) throw Error("Data too long, " + e.length + " > " + t);
  var i = new N(t);
  return r ? i.mem.set(e, t - e.length) : i.mem.set(e), i.mem;
}
function j(e, t) {
  var r = this;
  function i() {
    var n = "";
    t && t.gmask && (n += "a&=" + t.gmask + ";");
    for (var s = 0; s < e.length; s++) {
      var a = e[s],
        o = a[0] | 0,
        c = a[1] | 0,
        l = a[2] | 0,
        h = a[3];
      r["__fn" + s] = h, n += "if (a>=" + o + " && a<=" + c + "){", l && (n += "a&=" + l + ";"), n += "return this.__fn" + s + "(a,v)&0xff;}\n";
    }
    return n += "return 0;", new Function("a", "v", n);
  }
  return i().bind(r);
}
function Ge(e, t) {
  return new j(e, t);
}
function ee(e, t) {
  var r = e.getBoundingClientRect(),
    i = e.width / r.width,
    n = e.height / r.height;
  return {
    x: (t.clientX - r.left) * i,
    y: (t.clientY - r.top) * n
  };
}
function te() {
  return $("#booksMenuButton").first().height();
}
var re = /*#__PURE__*/function () {
  function re(t) {
    _classCallCheck(this, re);
    var r = document.createElement("div");
    r.setAttribute("class", "memdump"), t.appendChild(r), this.maindiv = r;
  }
  _createClass(re, [{
    key: "create",
    value: function create(t, r, i) {
      this.getLineAt = i, this.memorylist = new d({
        w: $(t).width(),
        h: $(t).height(),
        itemHeight: te(),
        totalRows: r,
        generatorFn: function generatorFn(n) {
          var s = i(n),
            a = document.createElement("div");
          return a.appendChild(document.createTextNode(s.text)), s.clas != null && (a.className = s.clas), a;
        }
      }), $(this.maindiv).append(this.memorylist.container);
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this6 = this;
      this.memorylist && $(this.maindiv).find("[data-index]").each(function (t, r) {
        var i = r,
          n = parseInt(i.getAttribute("data-index")),
          s = i.innerText,
          a = _this6.getLineAt(n),
          o = a.text;
        if (s != o && (i.innerText = o, a.clas != null && !i.classList.contains(a.clas))) {
          var c = Array.from(i.classList);
          c.forEach(function (l) {
            return i.classList.remove(l);
          }), i.classList.add("vrow"), i.classList.add(a.clas);
        }
      });
    }
  }]);
  return re;
}();
exports.ca = re;
function ke(e) {
  var t = .9,
    r = 1.1,
    i = 60,
    n = e >> 4 & 15,
    s = e & 15,
    a = n ? i : 0;
  n && (s += 1);
  var o = ((n - 1) * 25 - 25) * (2 * Math.PI / 360),
    c = 256 * r * Math.pow(s / 16, t),
    l = a * Math.cos(o),
    h = a * Math.sin(o);
  var m = c + .956 * l + .621 * h,
    p = c - .272 * l - .647 * h,
    x = c - 1.107 * l + 1.704 * h;
  return P(A(0, 255, m), A(0, 255, p), A(0, 255, x));
}

},{}],4:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = yt;
exports.B = It;
exports.C = Lt;
exports.D = void 0;
exports.E = Et;
exports.F = void 0;
exports.G = L0;
exports.K = exports.J = exports.I = exports.H = void 0;
exports.a = rt;
exports.b = ct;
exports.f = exports.e = exports.d = exports.c = void 0;
exports.g = Mn;
exports.r = exports.q = exports.p = exports.o = exports.n = exports.m = exports.l = exports.k = exports.j = exports.i = exports.h = void 0;
exports.s = Z0;
exports.u = exports.t = void 0;
exports.v = g0;
exports.w = void 0;
exports.x = vn;
exports.y = Rt;
exports.z = void 0;
var _chunkQEB57REV = require("./chunk-QEB57REV.js");
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var sn = [{
  mn: "BRK",
  am: "",
  nb: 1,
  il: 0,
  c1: 7,
  c2: 0
}, {
  mn: "ORA",
  am: "(aa,x)",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "SLO",
  am: "(aa,x)",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "NOP",
  am: "aa",
  nb: 2,
  il: 1,
  c1: 3,
  c2: 0
}, {
  mn: "ORA",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "ASL",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 0
}, {
  mn: "SLO",
  am: "aa",
  nb: 2,
  il: 1,
  c1: 5,
  c2: 0
}, {
  mn: "PHP",
  am: "",
  nb: 1,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "ORA",
  am: "#aa",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "ASL",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "ANC",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 2,
  c2: 0
}, {
  mn: "NOP",
  am: "AAAA",
  nb: 3,
  il: 1,
  c1: 4,
  c2: 0
}, {
  mn: "ORA",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "ASL",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "SLO",
  am: "AAAA",
  nb: 3,
  il: 1,
  c1: 6,
  c2: 0
}, {
  mn: "BPL",
  am: "branch",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 2
}, {
  mn: "ORA",
  am: "(aa),y",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 1
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "SLO",
  am: "(aa),y",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "NOP",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 4,
  c2: 0
}, {
  mn: "ORA",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "ASL",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "SLO",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 6,
  c2: 1
}, {
  mn: "CLC",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "ORA",
  am: "AAAA,y",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "NOP",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "SLO",
  am: "AAAA,y",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}, {
  mn: "NOP",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 4,
  c2: 1
}, {
  mn: "ORA",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "ASL",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 7,
  c2: 0
}, {
  mn: "SLO",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}, {
  mn: "JSR",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "AND",
  am: "(aa,x)",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "RLA",
  am: "(aa,x)",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "BIT",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "AND",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "ROL",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 0
}, {
  mn: "RLA",
  am: "aa",
  nb: 2,
  il: 1,
  c1: 5,
  c2: 0
}, {
  mn: "PLP",
  am: "",
  nb: 1,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "AND",
  am: "#aa",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "ROL",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "ANC",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 2,
  c2: 0
}, {
  mn: "BIT",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "AND",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "ROL",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "RLA",
  am: "AAAA",
  nb: 3,
  il: 1,
  c1: 6,
  c2: 0
}, {
  mn: "BMI",
  am: "branch",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 2
}, {
  mn: "AND",
  am: "(aa),y",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 1
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "RLA",
  am: "(aa),y",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "NOP",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 4,
  c2: 0
}, {
  mn: "AND",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "ROL",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "RLA",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 6,
  c2: 1
}, {
  mn: "SEC",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "AND",
  am: "AAAA,y",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "NOP",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "RLA",
  am: "AAAA,y",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}, {
  mn: "NOP",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 4,
  c2: 1
}, {
  mn: "AND",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "ROL",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 7,
  c2: 0
}, {
  mn: "RLA",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}, {
  mn: "RTI",
  am: "",
  nb: 1,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "EOR",
  am: "(aa,x)",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "SRE",
  am: "(aa,x)",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "NOP",
  am: "aa",
  nb: 2,
  il: 1,
  c1: 3,
  c2: 0
}, {
  mn: "EOR",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "LSR",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 0
}, {
  mn: "SRE",
  am: "aa",
  nb: 2,
  il: 1,
  c1: 5,
  c2: 0
}, {
  mn: "PHA",
  am: "",
  nb: 1,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "EOR",
  am: "#aa",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "LSR",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "ASR",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 2,
  c2: 0
}, {
  mn: "JMP",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "EOR",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "LSR",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "SRE",
  am: "AAAA",
  nb: 3,
  il: 1,
  c1: 6,
  c2: 0
}, {
  mn: "BVC",
  am: "branch",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 2
}, {
  mn: "EOR",
  am: "(aa),y",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 1
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "SRE",
  am: "(aa),y",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "NOP",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 4,
  c2: 0
}, {
  mn: "EOR",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "LSR",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "SRE",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 6,
  c2: 1
}, {
  mn: "CLI",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "EOR",
  am: "AAAA,y",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "NOP",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "SRE",
  am: "AAAA,y",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}, {
  mn: "NOP",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 4,
  c2: 1
}, {
  mn: "EOR",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "LSR",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 7,
  c2: 0
}, {
  mn: "SRE",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}, {
  mn: "RTS",
  am: "",
  nb: 1,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "ADC",
  am: "(aa,x)",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "RRA",
  am: "(aa,x)",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "NOP",
  am: "aa",
  nb: 2,
  il: 1,
  c1: 3,
  c2: 0
}, {
  mn: "ADC",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "ROR",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 0
}, {
  mn: "RRA",
  am: "aa",
  nb: 2,
  il: 1,
  c1: 5,
  c2: 0
}, {
  mn: "PLA",
  am: "",
  nb: 1,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "ADC",
  am: "#aa",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "ROR",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "ARR",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 2,
  c2: 0
}, {
  mn: "JMP",
  am: "(AAAA)",
  nb: 3,
  il: 0,
  c1: 5,
  c2: 0
}, {
  mn: "ADC",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "ROR",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "RRA",
  am: "AAAA",
  nb: 3,
  il: 1,
  c1: 6,
  c2: 0
}, {
  mn: "BVS",
  am: "branch",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 2
}, {
  mn: "ADC",
  am: "(aa),y",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 1
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "RRA",
  am: "(aa),y",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "NOP",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 4,
  c2: 0
}, {
  mn: "ADC",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "ROR",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "RRA",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 6,
  c2: 1
}, {
  mn: "SEI",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "ADC",
  am: "AAAA,y",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "NOP",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "RRA",
  am: "AAAA,y",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}, {
  mn: "NOP",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 4,
  c2: 1
}, {
  mn: "ADC",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "ROR",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 7,
  c2: 0
}, {
  mn: "RRA",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}, {
  mn: "NOP",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "STA",
  am: "(aa,x)",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "NOP",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "SAX",
  am: "(aa,x)",
  nb: 2,
  il: 1,
  c1: 6,
  c2: 1
}, {
  mn: "STY",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "STA",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "STX",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "SAX",
  am: "aa",
  nb: 2,
  il: 1,
  c1: 3,
  c2: 0
}, {
  mn: "DEY",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "NOP",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "TXA",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "ANE",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "STY",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "STA",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "STX",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "SAX",
  am: "AAAA",
  nb: 3,
  il: 1,
  c1: 4,
  c2: 0
}, {
  mn: "BCC",
  am: "branch",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 2
}, {
  mn: "STA",
  am: "(aa),y",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "SHA",
  am: "(aa),y",
  nb: 2,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "STY",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "STA",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "STX",
  am: "aa,y",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "SAX",
  am: "aa,y",
  nb: 3,
  il: 1,
  c1: 4,
  c2: 1
}, {
  mn: "TYA",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "STA",
  am: "AAAA,y",
  nb: 3,
  il: 0,
  c1: 5,
  c2: 0
}, {
  mn: "TXS",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "SHS",
  am: "AAAA,y",
  nb: 3,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "SHY",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "STA",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 5,
  c2: 0
}, {
  mn: "SHX",
  am: "AAAA,y",
  nb: 3,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "SHA",
  am: "AAAA,y",
  nb: 3,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "LDY",
  am: "#aa",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "LDA",
  am: "(aa,x)",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "LDX",
  am: "#aa",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "LAX",
  am: "(aa,x)",
  nb: 2,
  il: 1,
  c1: 6,
  c2: 1
}, {
  mn: "LDY",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "LDA",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "LDX",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "LAX",
  am: "aa",
  nb: 2,
  il: 1,
  c1: 3,
  c2: 0
}, {
  mn: "TAY",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "LDA",
  am: "#aa",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "TAX",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "LXA",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "LDY",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "LDA",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "LDX",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "LAX",
  am: "AAAA",
  nb: 3,
  il: 1,
  c1: 4,
  c2: 0
}, {
  mn: "BCS",
  am: "branch",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 2
}, {
  mn: "LDA",
  am: "(aa),y",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 1
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "LAX",
  am: "(aa),y",
  nb: 2,
  il: 1,
  c1: 5,
  c2: 1
}, {
  mn: "LDY",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "LDA",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "LDX",
  am: "aa,y",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "LAX",
  am: "aa,y",
  nb: 2,
  il: 1,
  c1: 4,
  c2: 1
}, {
  mn: "CLV",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "LDA",
  am: "AAAA,y",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "TSX",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "LAS",
  am: "AAAA,y",
  nb: 3,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "LDY",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "LDA",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "LDX",
  am: "AAAA,y",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "LAX",
  am: "AAAA,y",
  nb: 3,
  il: 1,
  c1: 4,
  c2: 1
}, {
  mn: "CPY",
  am: "#aa",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "CMP",
  am: "(aa,x)",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "NOP",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "DCP",
  am: "(aa,x)",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "CPY",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "CMP",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "DEC",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 0
}, {
  mn: "DCP",
  am: "aa",
  nb: 2,
  il: 1,
  c1: 5,
  c2: 0
}, {
  mn: "INY",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "CMP",
  am: "#aa",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "DEX",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "SBX",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 2,
  c2: 0
}, {
  mn: "CPY",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "CMP",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "DEC",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "DCP",
  am: "AAAA",
  nb: 3,
  il: 1,
  c1: 6,
  c2: 0
}, {
  mn: "BNE",
  am: "branch",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 2
}, {
  mn: "CMP",
  am: "(aa),y",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 1
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "DCP",
  am: "(aa),y",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "NOP",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 4,
  c2: 0
}, {
  mn: "CMP",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "DEC",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "DCP",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 6,
  c2: 1
}, {
  mn: "CLD",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "CMP",
  am: "AAAA,y",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "NOP",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "DCP",
  am: "AAAA,y",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}, {
  mn: "NOP",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 4,
  c2: 1
}, {
  mn: "CMP",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "DEC",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 7,
  c2: 0
}, {
  mn: "DCP",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}, {
  mn: "CPX",
  am: "#aa",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "SBC",
  am: "(aa,x)",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "NOP",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "ISB",
  am: "(aa,x)",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "CPX",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "SBC",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 3,
  c2: 0
}, {
  mn: "INC",
  am: "aa",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 0
}, {
  mn: "ISB",
  am: "aa",
  nb: 2,
  il: 1,
  c1: 5,
  c2: 0
}, {
  mn: "INX",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "SBC",
  am: "#aa",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "NOP",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "SBC",
  am: "#aa",
  nb: 2,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "CPX",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "SBC",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "INC",
  am: "AAAA",
  nb: 3,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "ISB",
  am: "AAAA",
  nb: 3,
  il: 1,
  c1: 6,
  c2: 0
}, {
  mn: "BEQ",
  am: "branch",
  nb: 2,
  il: 0,
  c1: 2,
  c2: 2
}, {
  mn: "SBC",
  am: "(aa),y",
  nb: 2,
  il: 0,
  c1: 5,
  c2: 1
}, {
  mn: "KIL",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "ISB",
  am: "(aa),y",
  nb: 2,
  il: 1,
  c1: 8,
  c2: 1
}, {
  mn: "NOP",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 4,
  c2: 0
}, {
  mn: "SBC",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 4,
  c2: 0
}, {
  mn: "INC",
  am: "aa,x",
  nb: 2,
  il: 0,
  c1: 6,
  c2: 0
}, {
  mn: "ISB",
  am: "aa,x",
  nb: 2,
  il: 1,
  c1: 6,
  c2: 1
}, {
  mn: "SED",
  am: "",
  nb: 1,
  il: 0,
  c1: 2,
  c2: 0
}, {
  mn: "SBC",
  am: "AAAA,y",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "NOP",
  am: "",
  nb: 1,
  il: 1,
  c1: 0,
  c2: 0
}, {
  mn: "ISB",
  am: "AAAA,y",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}, {
  mn: "NOP",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 4,
  c2: 1
}, {
  mn: "SBC",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 4,
  c2: 1
}, {
  mn: "INC",
  am: "AAAA,x",
  nb: 3,
  il: 0,
  c1: 7,
  c2: 0
}, {
  mn: "ISB",
  am: "AAAA,x",
  nb: 3,
  il: 1,
  c1: 7,
  c2: 1
}];
function rt(h, e, r, c) {
  var l = sn[e];
  if (l == null) return {
    line: "???",
    nbytes: 1,
    isaddr: !1
  };
  var x = l.mn,
    d = l.am,
    u = !1;
  if (d == "branch") {
    var a = r < 128 ? h + 2 + r : h + 2 - (256 - r);
    a &= 65535, d = "$" + (0, _chunkQEB57REV.g)(a, 4), u = !0;
  } else d = d.replace("aa", "$" + (0, _chunkQEB57REV.g)(r, 2)), d = d.replace("AAAA", "$" + (0, _chunkQEB57REV.g)(r + (c << 8), 4)), d.indexOf("#") < 0 && d.indexOf("$") >= 0 && (u = !0);
  return {
    line: l.mn + " " + d,
    nbytes: l.nb,
    isaddr: u
  };
}
function xn(h) {
  var e = h;
  if (!e || typeof e.mem_read != "function" || typeof e.mem_write != "function" || typeof e.io_read != "function" || typeof e.io_write != "function") throw "Z80: Core object is missing required functions.";
  var r = 0,
    c = 0,
    l = 0,
    x = 0,
    d = 0,
    u = 0,
    a = 0,
    V = 0,
    L = 0,
    p = 0,
    I = 0,
    k = 0,
    G = 0,
    oe = 0,
    A = 0,
    R = 0,
    E = 0,
    U = 0,
    z = 57328,
    i = 0,
    f = {
      S: 0,
      Z: 0,
      Y: 0,
      H: 0,
      X: 0,
      P: 0,
      N: 0,
      C: 0
    },
    ge = {
      S: 0,
      Z: 0,
      Y: 0,
      H: 0,
      X: 0,
      P: 0,
      N: 0,
      C: 0
    },
    Fe = 0,
    W = 0,
    Be = 0,
    _ = !1,
    C = !1,
    Ze = !1,
    te = 0;
  function q() {
    return {
      PC: i,
      SP: z,
      IX: A,
      IY: R,
      AF: (r << 8) + Xe(),
      BC: (c << 8) + l,
      DE: (x << 8) + d,
      HL: (u << 8) + a,
      AF_: (V << 8) + Ve(),
      BC_: (L << 8) + p,
      DE_: (I << 8) + k,
      HL_: (G << 8) + oe,
      IR: (E << 8) + U,
      im: Fe,
      iff1: W,
      iff2: Be,
      halted: _,
      do_delayed_di: C,
      do_delayed_ei: Ze,
      cycle_counter: te
    };
  }
  function We(t) {
    i = t.PC, z = t.SP, A = t.IX, R = t.IY, r = t.AF >> 8 & 255, Ue(t.AF), c = t.BC >> 8 & 255, l = t.BC & 255, x = t.DE >> 8 & 255, d = t.DE & 255, u = t.HL >> 8 & 255, a = t.HL & 255, V = t.AF_ >> 8 & 255, De(t.AF_), L = t.BC_ >> 8 & 255, p = t.BC_ & 255, I = t.DE_ >> 8 & 255, k = t.DE_ & 255, G = t.HL_ >> 8 & 255, oe = t.HL_ & 255, E = t.IR >> 8 & 255, U = t.IR & 255, Fe = t.im, W = t.iff1, Be = t.iff2, _ = t.halted, C = t.do_delayed_di, Ze = t.do_delayed_ei, te = t.cycle_counter;
  }
  var K = function K() {
      z = 57328, i = 0, r = 0, U = 0, Ue(0), Fe = 0, W = 0, Be = 0, _ = !1, C = !1, Ze = !1, te = 0;
    },
    H = function H() {
      if (_) return 1;
      var t = !1,
        b = !1;
      C ? (C = !1, t = !0) : Ze && (Ze = !1, b = !0), U = U & 128 | (U & 127) + 1 & 127;
      var P = e.mem_read(i);
      ue(P), i = i + 1 & 65535, t ? (W = 0, Be = 0) : b && (W = 1, Be = 1);
      var Le = te;
      return te = 0, Le;
    },
    Ae = function Ae(t, b) {
      if (t) return U = U & 128 | (U & 127) + 1 & 127, _ = !1, Be = W, W = 0, we(i), i = 102, te += 11, !0;
      if (W) {
        if (U = U & 128 | (U & 127) + 1 & 127, _ = !1, W = 0, Be = 0, Fe === 0) i = i - 1 & 65535, ue(b), i = i + 1 & 65535, te += 2;else if (Fe === 1) we(i), i = 56, te += 13;else if (Fe === 2) {
          we(i);
          var P = E << 8 | b;
          i = e.mem_read(P) | e.mem_read(P + 1 & 65535) << 8, te += 19;
        }
        return !0;
      }
    },
    ue = function ue(t) {
      var b = function b(Oe) {
        return (Oe & 7) == 0 ? c : (Oe & 7) == 1 ? l : (Oe & 7) == 2 ? x : (Oe & 7) == 3 ? d : (Oe & 7) == 4 ? u : (Oe & 7) == 5 ? a : (Oe & 7) == 6 ? e.mem_read(a | u << 8) : r;
      };
      if (t === 118) _ = !0;else if (t >= 64 && t < 128) {
        var P = b(t);
        (t & 56) >>> 3 == 0 ? c = P : (t & 56) >>> 3 == 1 ? l = P : (t & 56) >>> 3 == 2 ? x = P : (t & 56) >>> 3 == 3 ? d = P : (t & 56) >>> 3 == 4 ? u = P : (t & 56) >>> 3 == 5 ? a = P : (t & 56) >>> 3 == 6 ? e.mem_write(a | u << 8, P) : (t & 56) >>> 3 == 7 && (r = P);
      } else if (t >= 128 && t < 192) {
        var P = b(t),
          Le = [ce, ie, M, D, fe, ne, T, F];
        Le[(t & 56) >>> 3](P);
      } else {
        var Je = S[t];
        Je();
      }
      te += o[t];
    },
    O = function O(t) {
      return t &= 255, t & 128 && (t = -((255 & ~t) + 1)), t;
    },
    Xe = function Xe() {
      return f.S << 7 | f.Z << 6 | f.Y << 5 | f.H << 4 | f.X << 3 | f.P << 2 | f.N << 1 | f.C;
    },
    Ve = function Ve() {
      return ge.S << 7 | ge.Z << 6 | ge.Y << 5 | ge.H << 4 | ge.X << 3 | ge.P << 2 | ge.N << 1 | ge.C;
    },
    Ue = function Ue(t) {
      f.S = (t & 128) >>> 7, f.Z = (t & 64) >>> 6, f.Y = (t & 32) >>> 5, f.H = (t & 16) >>> 4, f.X = (t & 8) >>> 3, f.P = (t & 4) >>> 2, f.N = (t & 2) >>> 1, f.C = t & 1;
    },
    De = function De(t) {
      ge.S = (t & 128) >>> 7, ge.Z = (t & 64) >>> 6, ge.Y = (t & 32) >>> 5, ge.H = (t & 16) >>> 4, ge.X = (t & 8) >>> 3, ge.P = (t & 4) >>> 2, ge.N = (t & 2) >>> 1, ge.C = t & 1;
    },
    Q = function Q(t) {
      f.Y = (t & 32) >>> 5, f.X = (t & 8) >>> 3;
    },
    me = function me(t) {
      var b = [1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1];
      return b[t];
    },
    we = function we(t) {
      z = z - 1 & 65535, e.mem_write(z, (t & 65280) >>> 8), z = z - 1 & 65535, e.mem_write(z, t & 255);
    },
    be = function be() {
      var t = e.mem_read(z) & 255;
      return z = z + 1 & 65535, t |= e.mem_read(z) << 8, z = z + 1 & 65535, t;
    },
    ye = function ye(t) {
      t ? (i = e.mem_read(i + 1 & 65535) | e.mem_read(i + 2 & 65535) << 8, i = i - 1 & 65535) : i = i + 2 & 65535;
    },
    ze = function ze(t) {
      if (t) {
        te += 5;
        var b = O(e.mem_read(i + 1 & 65535));
        i = i + b + 1 & 65535;
      } else i = i + 1 & 65535;
    },
    Ne = function Ne(t) {
      t ? (te += 7, we(i + 3 & 65535), i = e.mem_read(i + 1 & 65535) | e.mem_read(i + 2 & 65535) << 8, i = i - 1 & 65535) : i = i + 2 & 65535;
    },
    He = function He(t) {
      t && (te += 6, i = be() - 1 & 65535);
    },
    pe = function pe(t) {
      we(i + 1 & 65535), i = t - 1 & 65535;
    },
    ce = function ce(t) {
      var b = r + t;
      f.S = b & 128 ? 1 : 0, f.Z = b & 255 ? 0 : 1, f.H = (t & 15) + (r & 15) & 16 ? 1 : 0, f.P = (r & 128) == (t & 128) && (r & 128) != (b & 128) ? 1 : 0, f.N = 0, f.C = b & 256 ? 1 : 0, r = b & 255, Q(r);
    },
    ie = function ie(t) {
      var b = r + t + f.C;
      f.S = b & 128 ? 1 : 0, f.Z = b & 255 ? 0 : 1, f.H = (t & 15) + (r & 15) + f.C & 16 ? 1 : 0, f.P = (r & 128) == (t & 128) && (r & 128) != (b & 128) ? 1 : 0, f.N = 0, f.C = b & 256 ? 1 : 0, r = b & 255, Q(r);
    },
    M = function M(t) {
      var b = r - t;
      f.S = b & 128 ? 1 : 0, f.Z = b & 255 ? 0 : 1, f.H = (r & 15) - (t & 15) & 16 ? 1 : 0, f.P = (r & 128) != (t & 128) && (r & 128) != (b & 128) ? 1 : 0, f.N = 1, f.C = b & 256 ? 1 : 0, r = b & 255, Q(r);
    },
    D = function D(t) {
      var b = r - t - f.C;
      f.S = b & 128 ? 1 : 0, f.Z = b & 255 ? 0 : 1, f.H = (r & 15) - (t & 15) - f.C & 16 ? 1 : 0, f.P = (r & 128) != (t & 128) && (r & 128) != (b & 128) ? 1 : 0, f.N = 1, f.C = b & 256 ? 1 : 0, r = b & 255, Q(r);
    },
    F = function F(t) {
      var b = r;
      M(t), r = b, Q(t);
    },
    fe = function fe(t) {
      r &= t & 255, f.S = r & 128 ? 1 : 0, f.Z = r ? 0 : 1, f.H = 1, f.P = me(r), f.N = 0, f.C = 0, Q(r);
    },
    T = function T(t) {
      r = (t | r) & 255, f.S = r & 128 ? 1 : 0, f.Z = r ? 0 : 1, f.H = 0, f.P = me(r), f.N = 0, f.C = 0, Q(r);
    },
    ne = function ne(t) {
      r = (t ^ r) & 255, f.S = r & 128 ? 1 : 0, f.Z = r ? 0 : 1, f.H = 0, f.P = me(r), f.N = 0, f.C = 0, Q(r);
    },
    w = function w(t) {
      var b = t + 1;
      return f.S = b & 128 ? 1 : 0, f.Z = b & 255 ? 0 : 1, f.H = (t & 15) == 15 ? 1 : 0, f.P = t === 127 ? 1 : 0, f.N = 0, b &= 255, Q(b), b;
    },
    N = function N(t) {
      var b = t - 1;
      return f.S = b & 128 ? 1 : 0, f.Z = b & 255 ? 0 : 1, f.H = (t & 15) == 0 ? 1 : 0, f.P = t === 128 ? 1 : 0, f.N = 1, b &= 255, Q(b), b;
    },
    _e = function _e(t) {
      var b = a | u << 8,
        P = b + t;
      f.N = 0, f.C = P & 65536 ? 1 : 0, f.H = (b & 4095) + (t & 4095) & 4096 ? 1 : 0, a = P & 255, u = (P & 65280) >>> 8, Q(u);
    },
    Y = function Y(t) {
      t += f.C;
      var b = a | u << 8,
        P = b + t;
      f.S = P & 32768 ? 1 : 0, f.Z = P & 65535 ? 0 : 1, f.H = (b & 4095) + (t & 4095) & 4096 ? 1 : 0, f.P = (b & 32768) == (t & 32768) && (P & 32768) != (b & 32768) ? 1 : 0, f.N = 0, f.C = P & 65536 ? 1 : 0, a = P & 255, u = P >>> 8 & 255, Q(u);
    },
    re = function re(t) {
      t += f.C;
      var b = a | u << 8,
        P = b - t;
      f.S = P & 32768 ? 1 : 0, f.Z = P & 65535 ? 0 : 1, f.H = (b & 4095) - (t & 4095) & 4096 ? 1 : 0, f.P = (b & 32768) != (t & 32768) && (P & 32768) != (b & 32768) ? 1 : 0, f.N = 1, f.C = P & 65536 ? 1 : 0, a = P & 255, u = P >>> 8 & 255, Q(u);
    },
    ve = function ve(t) {
      var b = e.io_read(t);
      return f.S = b & 128 ? 1 : 0, f.Z = b ? 0 : 1, f.H = 0, f.P = me(b) ? 1 : 0, f.N = 0, Q(b), b;
    },
    $ = function $() {
      r !== 128 && (r = O(r), r = -r & 255), f.S = r & 128 ? 1 : 0, f.Z = r ? 0 : 1, f.H = (-r & 15) > 0 ? 1 : 0, f.P = r === 128 ? 1 : 0, f.N = 1, f.C = r ? 1 : 0, Q(r);
    },
    le = function le() {
      var t = e.mem_read(a | u << 8);
      e.mem_write(d | x << 8, t);
      var b = (d | x << 8) + 1;
      d = b & 255, x = (b & 65280) >>> 8, b = (a | u << 8) + 1, a = b & 255, u = (b & 65280) >>> 8, b = (l | c << 8) - 1, l = b & 255, c = (b & 65280) >>> 8, f.H = 0, f.P = l || c ? 1 : 0, f.N = 0, f.Y = (r + t & 2) >>> 1, f.X = (r + t & 8) >>> 3;
    },
    Ie = function Ie() {
      var t = f.C,
        b = e.mem_read(a | u << 8);
      F(b), f.C = t, f.Y = (r - b - f.H & 2) >>> 1, f.X = (r - b - f.H & 8) >>> 3;
      var P = (a | u << 8) + 1;
      a = P & 255, u = (P & 65280) >>> 8, P = (l | c << 8) - 1, l = P & 255, c = (P & 65280) >>> 8, f.P = P ? 1 : 0;
    },
    Z = function Z() {
      c = N(c), e.mem_write(a | u << 8, e.io_read(c << 8 | l));
      var t = (a | u << 8) + 1;
      a = t & 255, u = (t & 65280) >>> 8, f.N = 1;
    },
    ee = function ee() {
      e.io_write(c << 8 | l, e.mem_read(a | u << 8));
      var t = (a | u << 8) + 1;
      a = t & 255, u = (t & 65280) >>> 8, c = N(c), f.N = 1;
    },
    se = function se() {
      f.N = 0, f.H = 0;
      var t = e.mem_read(a | u << 8);
      e.mem_write(d | x << 8, t);
      var b = (d | x << 8) - 1;
      d = b & 255, x = (b & 65280) >>> 8, b = (a | u << 8) - 1, a = b & 255, u = (b & 65280) >>> 8, b = (l | c << 8) - 1, l = b & 255, c = (b & 65280) >>> 8, f.P = l || c ? 1 : 0, f.Y = (r + t & 2) >>> 1, f.X = (r + t & 8) >>> 3;
    },
    Pe = function Pe() {
      var t = f.C,
        b = e.mem_read(a | u << 8);
      F(b), f.C = t, f.Y = (r - b - f.H & 2) >>> 1, f.X = (r - b - f.H & 8) >>> 3;
      var P = (a | u << 8) - 1;
      a = P & 255, u = (P & 65280) >>> 8, P = (l | c << 8) - 1, l = P & 255, c = (P & 65280) >>> 8, f.P = P ? 1 : 0;
    },
    Re = function Re() {
      c = N(c), e.mem_write(a | u << 8, e.io_read(c << 8 | l));
      var t = (a | u << 8) - 1;
      a = t & 255, u = (t & 65280) >>> 8, f.N = 1;
    },
    Ye = function Ye() {
      e.io_write(c << 8 | l, e.mem_read(a | u << 8));
      var t = (a | u << 8) - 1;
      a = t & 255, u = (t & 65280) >>> 8, c = N(c), f.N = 1;
    },
    xe = function xe(t) {
      return f.N = 0, f.H = 0, f.C = (t & 128) >>> 7, t = (t << 1 | f.C) & 255, f.Z = t ? 0 : 1, f.P = me(t), f.S = t & 128 ? 1 : 0, Q(t), t;
    },
    de = function de(t) {
      return f.N = 0, f.H = 0, f.C = t & 1, t = t >>> 1 & 127 | f.C << 7, f.Z = t & 255 ? 0 : 1, f.P = me(t), f.S = t & 128 ? 1 : 0, Q(t), t & 255;
    },
    Me = function Me(t) {
      f.N = 0, f.H = 0;
      var b = f.C;
      return f.C = (t & 128) >>> 7, t = (t << 1 | b) & 255, f.Z = t ? 0 : 1, f.P = me(t), f.S = t & 128 ? 1 : 0, Q(t), t;
    },
    ke = function ke(t) {
      f.N = 0, f.H = 0;
      var b = f.C;
      return f.C = t & 1, t = t >>> 1 & 127 | b << 7, f.Z = t ? 0 : 1, f.P = me(t), f.S = t & 128 ? 1 : 0, Q(t), t;
    },
    Ke = function Ke(t) {
      return f.N = 0, f.H = 0, f.C = (t & 128) >>> 7, t = t << 1 & 255, f.Z = t ? 0 : 1, f.P = me(t), f.S = t & 128 ? 1 : 0, Q(t), t;
    },
    X = function X(t) {
      return f.N = 0, f.H = 0, f.C = t & 1, t = t >>> 1 & 127 | t & 128, f.Z = t ? 0 : 1, f.P = me(t), f.S = t & 128 ? 1 : 0, Q(t), t;
    },
    je = function je(t) {
      return f.N = 0, f.H = 0, f.C = (t & 128) >>> 7, t = t << 1 & 255 | 1, f.Z = t ? 0 : 1, f.P = me(t), f.S = t & 128 ? 1 : 0, Q(t), t;
    },
    Qe = function Qe(t) {
      return f.N = 0, f.H = 0, f.C = t & 1, t = t >>> 1 & 127, f.Z = t ? 0 : 1, f.P = me(t), f.S = 0, Q(t), t;
    },
    e0 = function e0(t) {
      f.N = 0;
      var b = A + t;
      f.C = b & 65536 ? 1 : 0, f.H = (A & 4095) + (t & 4095) & 4096 ? 1 : 0, Q((b & 65280) >>> 8), A = b & 65535;
    },
    S = [];
  S[0] = function () {}, S[1] = function () {
    i = i + 1 & 65535, l = e.mem_read(i), i = i + 1 & 65535, c = e.mem_read(i);
  }, S[2] = function () {
    e.mem_write(l | c << 8, r);
  }, S[3] = function () {
    var t = l | c << 8;
    t += 1, l = t & 255, c = (t & 65280) >>> 8;
  }, S[4] = function () {
    c = w(c);
  }, S[5] = function () {
    c = N(c);
  }, S[6] = function () {
    i = i + 1 & 65535, c = e.mem_read(i);
  }, S[7] = function () {
    var t = f.S,
      b = f.Z,
      P = f.P;
    r = xe(r), f.S = t, f.Z = b, f.P = P;
  }, S[8] = function () {
    var t = r;
    r = V, V = t, t = Xe(), Ue(Ve()), De(t);
  }, S[9] = function () {
    _e(l | c << 8);
  }, S[10] = function () {
    r = e.mem_read(l | c << 8);
  }, S[11] = function () {
    var t = l | c << 8;
    t -= 1, l = t & 255, c = (t & 65280) >>> 8;
  }, S[12] = function () {
    l = w(l);
  }, S[13] = function () {
    l = N(l);
  }, S[14] = function () {
    i = i + 1 & 65535, l = e.mem_read(i);
  }, S[15] = function () {
    var t = f.S,
      b = f.Z,
      P = f.P;
    r = de(r), f.S = t, f.Z = b, f.P = P;
  }, S[16] = function () {
    c = c - 1 & 255, ze(c !== 0);
  }, S[17] = function () {
    i = i + 1 & 65535, d = e.mem_read(i), i = i + 1 & 65535, x = e.mem_read(i);
  }, S[18] = function () {
    e.mem_write(d | x << 8, r);
  }, S[19] = function () {
    var t = d | x << 8;
    t += 1, d = t & 255, x = (t & 65280) >>> 8;
  }, S[20] = function () {
    x = w(x);
  }, S[21] = function () {
    x = N(x);
  }, S[22] = function () {
    i = i + 1 & 65535, x = e.mem_read(i);
  }, S[23] = function () {
    var t = f.S,
      b = f.Z,
      P = f.P;
    r = Me(r), f.S = t, f.Z = b, f.P = P;
  }, S[24] = function () {
    var t = O(e.mem_read(i + 1 & 65535));
    i = i + t + 1 & 65535;
  }, S[25] = function () {
    _e(d | x << 8);
  }, S[26] = function () {
    r = e.mem_read(d | x << 8);
  }, S[27] = function () {
    var t = d | x << 8;
    t -= 1, d = t & 255, x = (t & 65280) >>> 8;
  }, S[28] = function () {
    d = w(d);
  }, S[29] = function () {
    d = N(d);
  }, S[30] = function () {
    i = i + 1 & 65535, d = e.mem_read(i);
  }, S[31] = function () {
    var t = f.S,
      b = f.Z,
      P = f.P;
    r = ke(r), f.S = t, f.Z = b, f.P = P;
  }, S[32] = function () {
    ze(!f.Z);
  }, S[33] = function () {
    i = i + 1 & 65535, a = e.mem_read(i), i = i + 1 & 65535, u = e.mem_read(i);
  }, S[34] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, e.mem_write(t, a), e.mem_write(t + 1 & 65535, u);
  }, S[35] = function () {
    var t = a | u << 8;
    t += 1, a = t & 255, u = (t & 65280) >>> 8;
  }, S[36] = function () {
    u = w(u);
  }, S[37] = function () {
    u = N(u);
  }, S[38] = function () {
    i = i + 1 & 65535, u = e.mem_read(i);
  }, S[39] = function () {
    var t = r;
    f.N ? ((f.H || (r & 15) > 9) && (t -= 6), (f.C || r > 153) && (t -= 96)) : ((f.H || (r & 15) > 9) && (t += 6), (f.C || r > 153) && (t += 96)), f.S = t & 128 ? 1 : 0, f.Z = t & 255 ? 0 : 1, f.H = r & 16 ^ t & 16 ? 1 : 0, f.P = me(t & 255), f.C = f.C || r > 153 ? 1 : 0, r = t & 255, Q(r);
  }, S[40] = function () {
    ze(!!f.Z);
  }, S[41] = function () {
    _e(a | u << 8);
  }, S[42] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, a = e.mem_read(t), u = e.mem_read(t + 1 & 65535);
  }, S[43] = function () {
    var t = a | u << 8;
    t -= 1, a = t & 255, u = (t & 65280) >>> 8;
  }, S[44] = function () {
    a = w(a);
  }, S[45] = function () {
    a = N(a);
  }, S[46] = function () {
    i = i + 1 & 65535, a = e.mem_read(i);
  }, S[47] = function () {
    r = ~r & 255, f.N = 1, f.H = 1, Q(r);
  }, S[48] = function () {
    ze(!f.C);
  }, S[49] = function () {
    z = e.mem_read(i + 1 & 65535) | e.mem_read(i + 2 & 65535) << 8, i = i + 2 & 65535;
  }, S[50] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, e.mem_write(t, r);
  }, S[51] = function () {
    z = z + 1 & 65535;
  }, S[52] = function () {
    var t = a | u << 8;
    e.mem_write(t, w(e.mem_read(t)));
  }, S[53] = function () {
    var t = a | u << 8;
    e.mem_write(t, N(e.mem_read(t)));
  }, S[54] = function () {
    i = i + 1 & 65535, e.mem_write(a | u << 8, e.mem_read(i));
  }, S[55] = function () {
    f.N = 0, f.H = 0, f.C = 1, Q(r);
  }, S[56] = function () {
    ze(!!f.C);
  }, S[57] = function () {
    _e(z);
  }, S[58] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, r = e.mem_read(t);
  }, S[59] = function () {
    z = z - 1 & 65535;
  }, S[60] = function () {
    r = w(r);
  }, S[61] = function () {
    r = N(r);
  }, S[62] = function () {
    r = e.mem_read(i + 1 & 65535), i = i + 1 & 65535;
  }, S[63] = function () {
    f.N = 0, f.H = f.C, f.C = f.C ? 0 : 1, Q(r);
  }, S[192] = function () {
    He(!f.Z);
  }, S[193] = function () {
    var t = be();
    l = t & 255, c = (t & 65280) >>> 8;
  }, S[194] = function () {
    ye(!f.Z);
  }, S[195] = function () {
    i = e.mem_read(i + 1 & 65535) | e.mem_read(i + 2 & 65535) << 8, i = i - 1 & 65535;
  }, S[196] = function () {
    Ne(!f.Z);
  }, S[197] = function () {
    we(l | c << 8);
  }, S[198] = function () {
    i = i + 1 & 65535, ce(e.mem_read(i));
  }, S[199] = function () {
    pe(0);
  }, S[200] = function () {
    He(!!f.Z);
  }, S[201] = function () {
    i = be() - 1 & 65535;
  }, S[202] = function () {
    ye(!!f.Z);
  }, S[203] = function () {
    U = U & 128 | (U & 127) + 1 & 127, i = i + 1 & 65535;
    var t = e.mem_read(i),
      b = (t & 56) >>> 3,
      P = t & 7;
    if (t < 64) {
      var Le = [xe, de, Me, ke, Ke, X, je, Qe];
      P === 0 ? c = Le[b](c) : P === 1 ? l = Le[b](l) : P === 2 ? x = Le[b](x) : P === 3 ? d = Le[b](d) : P === 4 ? u = Le[b](u) : P === 5 ? a = Le[b](a) : P === 6 ? e.mem_write(a | u << 8, Le[b](e.mem_read(a | u << 8))) : P === 7 && (r = Le[b](r));
    } else t < 128 ? (P === 0 ? f.Z = c & 1 << b ? 0 : 1 : P === 1 ? f.Z = l & 1 << b ? 0 : 1 : P === 2 ? f.Z = x & 1 << b ? 0 : 1 : P === 3 ? f.Z = d & 1 << b ? 0 : 1 : P === 4 ? f.Z = u & 1 << b ? 0 : 1 : P === 5 ? f.Z = a & 1 << b ? 0 : 1 : P === 6 ? f.Z = e.mem_read(a | u << 8) & 1 << b ? 0 : 1 : P === 7 && (f.Z = r & 1 << b ? 0 : 1), f.N = 0, f.H = 1, f.P = f.Z, f.S = b === 7 && !f.Z ? 1 : 0, f.Y = b === 5 && !f.Z ? 1 : 0, f.X = b === 3 && !f.Z ? 1 : 0) : t < 192 ? P === 0 ? c &= 255 & ~(1 << b) : P === 1 ? l &= 255 & ~(1 << b) : P === 2 ? x &= 255 & ~(1 << b) : P === 3 ? d &= 255 & ~(1 << b) : P === 4 ? u &= 255 & ~(1 << b) : P === 5 ? a &= 255 & ~(1 << b) : P === 6 ? e.mem_write(a | u << 8, e.mem_read(a | u << 8) & ~(1 << b)) : P === 7 && (r &= 255 & ~(1 << b)) : P === 0 ? c |= 1 << b : P === 1 ? l |= 1 << b : P === 2 ? x |= 1 << b : P === 3 ? d |= 1 << b : P === 4 ? u |= 1 << b : P === 5 ? a |= 1 << b : P === 6 ? e.mem_write(a | u << 8, e.mem_read(a | u << 8) | 1 << b) : P === 7 && (r |= 1 << b);
    te += g[t];
  }, S[204] = function () {
    Ne(!!f.Z);
  }, S[205] = function () {
    we(i + 3 & 65535), i = e.mem_read(i + 1 & 65535) | e.mem_read(i + 2 & 65535) << 8, i = i - 1 & 65535;
  }, S[206] = function () {
    i = i + 1 & 65535, ie(e.mem_read(i));
  }, S[207] = function () {
    pe(8);
  }, S[208] = function () {
    He(!f.C);
  }, S[209] = function () {
    var t = be();
    d = t & 255, x = (t & 65280) >>> 8;
  }, S[210] = function () {
    ye(!f.C);
  }, S[211] = function () {
    i = i + 1 & 65535, e.io_write(r << 8 | e.mem_read(i), r);
  }, S[212] = function () {
    Ne(!f.C);
  }, S[213] = function () {
    we(d | x << 8);
  }, S[214] = function () {
    i = i + 1 & 65535, M(e.mem_read(i));
  }, S[215] = function () {
    pe(16);
  }, S[216] = function () {
    He(!!f.C);
  }, S[217] = function () {
    var t = c;
    c = L, L = t, t = l, l = p, p = t, t = x, x = I, I = t, t = d, d = k, k = t, t = u, u = G, G = t, t = a, a = oe, oe = t;
  }, S[218] = function () {
    ye(!!f.C);
  }, S[219] = function () {
    i = i + 1 & 65535, r = e.io_read(r << 8 | e.mem_read(i));
  }, S[220] = function () {
    Ne(!!f.C);
  }, S[221] = function () {
    U = U & 128 | (U & 127) + 1 & 127, i = i + 1 & 65535;
    var t = e.mem_read(i),
      b = B[t];
    b ? (b(), te += s[t]) : (i = i - 1 & 65535, te += o[0]);
  }, S[222] = function () {
    i = i + 1 & 65535, D(e.mem_read(i));
  }, S[223] = function () {
    pe(24);
  }, S[224] = function () {
    He(!f.P);
  }, S[225] = function () {
    var t = be();
    a = t & 255, u = (t & 65280) >>> 8;
  }, S[226] = function () {
    ye(!f.P);
  }, S[227] = function () {
    var t = e.mem_read(z);
    e.mem_write(z, a), a = t, t = e.mem_read(z + 1 & 65535), e.mem_write(z + 1 & 65535, u), u = t;
  }, S[228] = function () {
    Ne(!f.P);
  }, S[229] = function () {
    we(a | u << 8);
  }, S[230] = function () {
    i = i + 1 & 65535, fe(e.mem_read(i));
  }, S[231] = function () {
    pe(32);
  }, S[232] = function () {
    He(!!f.P);
  }, S[233] = function () {
    i = a | u << 8, i = i - 1 & 65535;
  }, S[234] = function () {
    ye(!!f.P);
  }, S[235] = function () {
    var t = x;
    x = u, u = t, t = d, d = a, a = t;
  }, S[236] = function () {
    Ne(!!f.P);
  }, S[237] = function () {
    U = U & 128 | (U & 127) + 1 & 127, i = i + 1 & 65535;
    var t = e.mem_read(i),
      b = y[t];
    b ? (b(), te += n[t]) : te += o[0];
  }, S[238] = function () {
    i = i + 1 & 65535, ne(e.mem_read(i));
  }, S[239] = function () {
    pe(40);
  }, S[240] = function () {
    He(!f.S);
  }, S[241] = function () {
    var t = be();
    Ue(t & 255), r = (t & 65280) >>> 8;
  }, S[242] = function () {
    ye(!f.S);
  }, S[243] = function () {
    C = !0;
  }, S[244] = function () {
    Ne(!f.S);
  }, S[245] = function () {
    we(Xe() | r << 8);
  }, S[246] = function () {
    i = i + 1 & 65535, T(e.mem_read(i));
  }, S[247] = function () {
    pe(48);
  }, S[248] = function () {
    He(!!f.S);
  }, S[249] = function () {
    z = a | u << 8;
  }, S[250] = function () {
    ye(!!f.S);
  }, S[251] = function () {
    Ze = !0;
  }, S[252] = function () {
    Ne(!!f.S);
  }, S[253] = function () {
    U = U & 128 | (U & 127) + 1 & 127, i = i + 1 & 65535;
    var t = e.mem_read(i),
      b = B[t];
    if (b) {
      var P = A;
      A = R, b(), R = A, A = P, te += s[t];
    } else i = i - 1 & 65535, te += o[0];
  }, S[254] = function () {
    i = i + 1 & 65535, F(e.mem_read(i));
  }, S[255] = function () {
    pe(56);
  };
  var y = [];
  y[64] = function () {
    c = ve(c << 8 | l);
  }, y[65] = function () {
    e.io_write(c << 8 | l, c);
  }, y[66] = function () {
    re(l | c << 8);
  }, y[67] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, e.mem_write(t, l), e.mem_write(t + 1 & 65535, c);
  }, y[68] = function () {
    $();
  }, y[69] = function () {
    i = be() - 1 & 65535, W = Be;
  }, y[70] = function () {
    Fe = 0;
  }, y[71] = function () {
    E = r;
  }, y[72] = function () {
    l = ve(c << 8 | l);
  }, y[73] = function () {
    e.io_write(c << 8 | l, l);
  }, y[74] = function () {
    Y(l | c << 8);
  }, y[75] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, l = e.mem_read(t), c = e.mem_read(t + 1 & 65535);
  }, y[76] = function () {
    $();
  }, y[77] = function () {
    i = be() - 1 & 65535;
  }, y[78] = function () {
    Fe = 0;
  }, y[79] = function () {
    U = r;
  }, y[80] = function () {
    x = ve(c << 8 | l);
  }, y[81] = function () {
    e.io_write(c << 8 | l, x);
  }, y[82] = function () {
    re(d | x << 8);
  }, y[83] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, e.mem_write(t, d), e.mem_write(t + 1 & 65535, x);
  }, y[84] = function () {
    $();
  }, y[85] = function () {
    i = be() - 1 & 65535, W = Be;
  }, y[86] = function () {
    Fe = 1;
  }, y[87] = function () {
    r = E, f.S = r & 128 ? 1 : 0, f.Z = r ? 0 : 1, f.H = 0, f.P = Be, f.N = 0, Q(r);
  }, y[88] = function () {
    d = ve(c << 8 | l);
  }, y[89] = function () {
    e.io_write(c << 8 | l, d);
  }, y[90] = function () {
    Y(d | x << 8);
  }, y[91] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, d = e.mem_read(t), x = e.mem_read(t + 1 & 65535);
  }, y[92] = function () {
    $();
  }, y[93] = function () {
    i = be() - 1 & 65535, W = Be;
  }, y[94] = function () {
    Fe = 2;
  }, y[95] = function () {
    r = U, f.S = r & 128 ? 1 : 0, f.Z = r ? 0 : 1, f.H = 0, f.P = Be, f.N = 0, Q(r);
  }, y[96] = function () {
    u = ve(c << 8 | l);
  }, y[97] = function () {
    e.io_write(c << 8 | l, u);
  }, y[98] = function () {
    re(a | u << 8);
  }, y[99] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, e.mem_write(t, a), e.mem_write(t + 1 & 65535, u);
  }, y[100] = function () {
    $();
  }, y[101] = function () {
    i = be() - 1 & 65535, W = Be;
  }, y[102] = function () {
    Fe = 0;
  }, y[103] = function () {
    var t = e.mem_read(a | u << 8),
      b = t & 15,
      P = r & 15;
    t = (t & 240) >>> 4 | P << 4, r = r & 240 | b, e.mem_write(a | u << 8, t), f.S = r & 128 ? 1 : 0, f.Z = r ? 0 : 1, f.H = 0, f.P = me(r) ? 1 : 0, f.N = 0, Q(r);
  }, y[104] = function () {
    a = ve(c << 8 | l);
  }, y[105] = function () {
    e.io_write(c << 8 | l, a);
  }, y[106] = function () {
    Y(a | u << 8);
  }, y[107] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, a = e.mem_read(t), u = e.mem_read(t + 1 & 65535);
  }, y[108] = function () {
    $();
  }, y[109] = function () {
    i = be() - 1 & 65535, W = Be;
  }, y[110] = function () {
    Fe = 0;
  }, y[111] = function () {
    var t = e.mem_read(a | u << 8),
      b = t & 240,
      P = r & 15;
    t = (t & 15) << 4 | P, r = r & 240 | b >>> 4, e.mem_write(a | u << 8, t), f.S = r & 128 ? 1 : 0, f.Z = r ? 0 : 1, f.H = 0, f.P = me(r) ? 1 : 0, f.N = 0, Q(r);
  }, y[112] = function () {
    ve(c << 8 | l);
  }, y[113] = function () {
    e.io_write(c << 8 | l, 0);
  }, y[114] = function () {
    re(z);
  }, y[115] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, e.mem_write(t, z & 255), e.mem_write(t + 1 & 65535, z >>> 8 & 255);
  }, y[116] = function () {
    $();
  }, y[117] = function () {
    i = be() - 1 & 65535, W = Be;
  }, y[118] = function () {
    Fe = 1;
  }, y[120] = function () {
    r = ve(c << 8 | l);
  }, y[121] = function () {
    e.io_write(c << 8 | l, r);
  }, y[122] = function () {
    Y(z);
  }, y[123] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, z = e.mem_read(t), z |= e.mem_read(t + 1 & 65535) << 8;
  }, y[124] = function () {
    $();
  }, y[125] = function () {
    i = be() - 1 & 65535, W = Be;
  }, y[126] = function () {
    Fe = 2;
  }, y[160] = function () {
    le();
  }, y[161] = function () {
    Ie();
  }, y[162] = function () {
    Z();
  }, y[163] = function () {
    ee();
  }, y[168] = function () {
    se();
  }, y[169] = function () {
    Pe();
  }, y[170] = function () {
    Re();
  }, y[171] = function () {
    Ye();
  }, y[176] = function () {
    le(), (c || l) && (te += 5, i = i - 2 & 65535);
  }, y[177] = function () {
    Ie(), !f.Z && (c || l) && (te += 5, i = i - 2 & 65535);
  }, y[178] = function () {
    Z(), c && (te += 5, i = i - 2 & 65535);
  }, y[179] = function () {
    ee(), c && (te += 5, i = i - 2 & 65535);
  }, y[184] = function () {
    se(), (c || l) && (te += 5, i = i - 2 & 65535);
  }, y[185] = function () {
    Pe(), !f.Z && (c || l) && (te += 5, i = i - 2 & 65535);
  }, y[186] = function () {
    Re(), c && (te += 5, i = i - 2 & 65535);
  }, y[187] = function () {
    Ye(), c && (te += 5, i = i - 2 & 65535);
  };
  var B = [];
  B[9] = function () {
    e0(l | c << 8);
  }, B[25] = function () {
    e0(d | x << 8);
  }, B[33] = function () {
    i = i + 1 & 65535, A = e.mem_read(i), i = i + 1 & 65535, A |= e.mem_read(i) << 8;
  }, B[34] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, e.mem_write(t, A & 255), e.mem_write(t + 1 & 65535, A >>> 8 & 255);
  }, B[35] = function () {
    A = A + 1 & 65535;
  }, B[36] = function () {
    A = w(A >>> 8) << 8 | A & 255;
  }, B[37] = function () {
    A = N(A >>> 8) << 8 | A & 255;
  }, B[38] = function () {
    i = i + 1 & 65535, A = e.mem_read(i) << 8 | A & 255;
  }, B[41] = function () {
    e0(A);
  }, B[42] = function () {
    i = i + 1 & 65535;
    var t = e.mem_read(i);
    i = i + 1 & 65535, t |= e.mem_read(i) << 8, A = e.mem_read(t), A |= e.mem_read(t + 1 & 65535) << 8;
  }, B[43] = function () {
    A = A - 1 & 65535;
  }, B[44] = function () {
    A = w(A & 255) | A & 65280;
  }, B[45] = function () {
    A = N(A & 255) | A & 65280;
  }, B[46] = function () {
    i = i + 1 & 65535, A = e.mem_read(i) & 255 | A & 65280;
  }, B[52] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i)),
      b = e.mem_read(t + A & 65535);
    e.mem_write(t + A & 65535, w(b));
  }, B[53] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i)),
      b = e.mem_read(t + A & 65535);
    e.mem_write(t + A & 65535, N(b));
  }, B[54] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    i = i + 1 & 65535, e.mem_write(A + t & 65535, e.mem_read(i));
  }, B[57] = function () {
    e0(z);
  }, B[68] = function () {
    c = A >>> 8 & 255;
  }, B[69] = function () {
    c = A & 255;
  }, B[70] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    c = e.mem_read(A + t & 65535);
  }, B[76] = function () {
    l = A >>> 8 & 255;
  }, B[77] = function () {
    l = A & 255;
  }, B[78] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    l = e.mem_read(A + t & 65535);
  }, B[84] = function () {
    x = A >>> 8 & 255;
  }, B[85] = function () {
    x = A & 255;
  }, B[86] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    x = e.mem_read(A + t & 65535);
  }, B[92] = function () {
    d = A >>> 8 & 255;
  }, B[93] = function () {
    d = A & 255;
  }, B[94] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    d = e.mem_read(A + t & 65535);
  }, B[96] = function () {
    A = A & 255 | c << 8;
  }, B[97] = function () {
    A = A & 255 | l << 8;
  }, B[98] = function () {
    A = A & 255 | x << 8;
  }, B[99] = function () {
    A = A & 255 | d << 8;
  }, B[100] = function () {}, B[101] = function () {
    A = A & 255 | (A & 255) << 8;
  }, B[102] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    u = e.mem_read(A + t & 65535);
  }, B[103] = function () {
    A = A & 255 | r << 8;
  }, B[104] = function () {
    A = A & 65280 | c;
  }, B[105] = function () {
    A = A & 65280 | l;
  }, B[106] = function () {
    A = A & 65280 | x;
  }, B[107] = function () {
    A = A & 65280 | d;
  }, B[108] = function () {
    A = A & 65280 | A >>> 8;
  }, B[109] = function () {}, B[110] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    a = e.mem_read(A + t & 65535);
  }, B[111] = function () {
    A = A & 65280 | r;
  }, B[112] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    e.mem_write(A + t & 65535, c);
  }, B[113] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    e.mem_write(A + t & 65535, l);
  }, B[114] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    e.mem_write(A + t & 65535, x);
  }, B[115] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    e.mem_write(A + t & 65535, d);
  }, B[116] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    e.mem_write(A + t & 65535, u);
  }, B[117] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    e.mem_write(A + t & 65535, a);
  }, B[119] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    e.mem_write(A + t & 65535, r);
  }, B[124] = function () {
    r = A >>> 8 & 255;
  }, B[125] = function () {
    r = A & 255;
  }, B[126] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    r = e.mem_read(A + t & 65535);
  }, B[132] = function () {
    ce(A >>> 8 & 255);
  }, B[133] = function () {
    ce(A & 255);
  }, B[134] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    ce(e.mem_read(A + t & 65535));
  }, B[140] = function () {
    ie(A >>> 8 & 255);
  }, B[141] = function () {
    ie(A & 255);
  }, B[142] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    ie(e.mem_read(A + t & 65535));
  }, B[148] = function () {
    M(A >>> 8 & 255);
  }, B[149] = function () {
    M(A & 255);
  }, B[150] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    M(e.mem_read(A + t & 65535));
  }, B[156] = function () {
    D(A >>> 8 & 255);
  }, B[157] = function () {
    D(A & 255);
  }, B[158] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    D(e.mem_read(A + t & 65535));
  }, B[164] = function () {
    fe(A >>> 8 & 255);
  }, B[165] = function () {
    fe(A & 255);
  }, B[166] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    fe(e.mem_read(A + t & 65535));
  }, B[172] = function () {
    ne(A >>> 8 & 255);
  }, B[173] = function () {
    ne(A & 255);
  }, B[174] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    ne(e.mem_read(A + t & 65535));
  }, B[180] = function () {
    T(A >>> 8 & 255);
  }, B[181] = function () {
    T(A & 255);
  }, B[182] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    T(e.mem_read(A + t & 65535));
  }, B[188] = function () {
    F(A >>> 8 & 255);
  }, B[189] = function () {
    F(A & 255);
  }, B[190] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    F(e.mem_read(A + t & 65535));
  }, B[203] = function () {
    i = i + 1 & 65535;
    var t = O(e.mem_read(i));
    i = i + 1 & 65535;
    var b = e.mem_read(i),
      P;
    if (b < 64) {
      var Le = [xe, de, Me, ke, Ke, X, je, Qe],
        Je = Le[(b & 56) >>> 3],
        P = Je(e.mem_read(A + t & 65535));
      e.mem_write(A + t & 65535, P);
    } else {
      var Oe = (b & 56) >>> 3;
      b < 128 ? (f.N = 0, f.H = 1, f.Z = e.mem_read(A + t & 65535) & 1 << Oe ? 0 : 1, f.P = f.Z, f.S = Oe === 7 && !f.Z ? 1 : 0) : b < 192 ? (P = e.mem_read(A + t & 65535) & ~(1 << Oe) & 255, e.mem_write(A + t & 65535, P)) : (P = e.mem_read(A + t & 65535) | 1 << Oe, e.mem_write(A + t & 65535, P));
    }
    P !== void 0 && ((b & 7) == 0 ? c = P : (b & 7) == 1 ? l = P : (b & 7) == 2 ? x = P : (b & 7) == 3 ? d = P : (b & 7) == 4 ? u = P : (b & 7) == 5 ? a = P : (b & 7) == 7 && (r = P)), te += g[b] + 8;
  }, B[225] = function () {
    A = be();
  }, B[227] = function () {
    var t = A;
    A = e.mem_read(z), A |= e.mem_read(z + 1 & 65535) << 8, e.mem_write(z, t & 255), e.mem_write(z + 1 & 65535, t >>> 8 & 255);
  }, B[229] = function () {
    we(A);
  }, B[233] = function () {
    i = A - 1 & 65535;
  }, B[249] = function () {
    z = A;
  };
  var o = [4, 10, 7, 6, 4, 4, 7, 4, 4, 11, 7, 6, 4, 4, 7, 4, 8, 10, 7, 6, 4, 4, 7, 4, 12, 11, 7, 6, 4, 4, 7, 4, 7, 10, 16, 6, 4, 4, 7, 4, 7, 11, 16, 6, 4, 4, 7, 4, 7, 10, 13, 6, 11, 11, 10, 4, 7, 11, 13, 6, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 7, 7, 7, 7, 7, 7, 4, 7, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 7, 4, 5, 10, 10, 10, 10, 11, 7, 11, 5, 10, 10, 0, 10, 17, 7, 11, 5, 10, 10, 11, 10, 11, 7, 11, 5, 4, 10, 11, 10, 0, 7, 11, 5, 10, 10, 19, 10, 11, 7, 11, 5, 4, 10, 4, 10, 0, 7, 11, 5, 10, 10, 4, 10, 11, 7, 11, 5, 6, 10, 4, 10, 0, 7, 11],
    n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 15, 20, 8, 14, 8, 9, 12, 12, 15, 20, 8, 14, 8, 9, 12, 12, 15, 20, 8, 14, 8, 9, 12, 12, 15, 20, 8, 14, 8, 9, 12, 12, 15, 20, 8, 14, 8, 18, 12, 12, 15, 20, 8, 14, 8, 18, 12, 12, 15, 20, 8, 14, 8, 0, 12, 12, 15, 20, 8, 14, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 16, 16, 0, 0, 0, 0, 16, 16, 16, 16, 0, 0, 0, 0, 16, 16, 16, 16, 0, 0, 0, 0, 16, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    g = [8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8, 8, 8, 8, 8, 8, 8, 15, 8],
    s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 14, 20, 10, 8, 8, 11, 0, 0, 15, 20, 10, 8, 8, 11, 0, 0, 0, 0, 0, 23, 23, 19, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 8, 8, 19, 0, 8, 8, 8, 8, 8, 8, 19, 8, 8, 8, 8, 8, 8, 8, 19, 8, 19, 19, 19, 19, 19, 19, 0, 19, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 8, 8, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 23, 0, 15, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0];
  this.saveState = q, this.loadState = We, this.reset = K, this.advanceInsn = H, this.interrupt = Ae, this.getPC = function () {
    return i;
  }, this.getSP = function () {
    return z;
  }, this.getHalted = function () {
    return _;
  };
}
var at = /*#__PURE__*/function () {
  function at() {
    _classCallCheck(this, at);
    this.retryInterrupts = !1;
    this.retryData = -1;
  }
  _createClass(at, [{
    key: "buildCPU",
    value: function buildCPU() {
      this.memBus && this.ioBus && (this.cpu = new xn({
        mem_read: this.memBus.read.bind(this.memBus),
        mem_write: this.memBus.write.bind(this.memBus),
        io_read: this.ioBus.read.bind(this.ioBus),
        io_write: this.ioBus.write.bind(this.ioBus)
      }));
    }
  }, {
    key: "connectMemoryBus",
    value: function connectMemoryBus(e) {
      this.memBus = e, this.buildCPU();
    }
  }, {
    key: "connectIOBus",
    value: function connectIOBus(e) {
      this.ioBus = e, this.buildCPU();
    }
  }, {
    key: "advanceInsn",
    value: function advanceInsn() {
      return this.retryInterrupts && this.retryData >= 0 && this.cpu.interrupt(!1, this.retryData) && (this.retryData = -1), this.cpu.advanceInsn();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cpu.reset();
    }
  }, {
    key: "interrupt",
    value: function interrupt(e) {
      !this.cpu.interrupt(!1, e) && this.retryInterrupts && (this.retryData = e);
    }
  }, {
    key: "NMI",
    value: function NMI() {
      this.cpu.interrupt(!0, 0);
    }
  }, {
    key: "getSP",
    value: function getSP() {
      return this.cpu.getSP();
    }
  }, {
    key: "getPC",
    value: function getPC() {
      return this.cpu.getPC();
    }
  }, {
    key: "isHalted",
    value: function isHalted() {
      return this.cpu.getHalted();
    }
  }, {
    key: "saveState",
    value: function saveState() {
      return this.cpu.saveState();
    }
  }, {
    key: "loadState",
    value: function loadState(e) {
      this.cpu.loadState(e);
    }
  }, {
    key: "isStable",
    value: function isStable() {
      return !0;
    }
  }]);
  return at;
}();
exports.c = at;
var Ct = /*#__PURE__*/function () {
    function Ct() {
      _classCallCheck(this, Ct);
      this.master = new MasterChannel();
    }
    _createClass(Ct, [{
      key: "start",
      value: function start() {
        this.looper || (this.looper = new AudioLooper(512), this.looper.setChannel(this.master), this.looper.activate());
      }
    }, {
      key: "stop",
      value: function stop() {
        this.looper && (this.looper.setChannel(null), this.looper = null);
      }
    }]);
    return Ct;
  }(),
  un = /*#__PURE__*/function () {
    function un(e) {
      _classCallCheck(this, un);
      this.psg = new PsgDeviceChannel();
      this.curreg = 0;
      this.master = e, this.psg.setMode(PsgDeviceChannel.MODE_SIGNED), this.psg.setDevice(PsgDeviceChannel.DEVICE_AY_3_8910), e.master.addChannel(this.psg);
    }
    _createClass(un, [{
      key: "reset",
      value: function reset() {
        for (var e = 15; e >= 0; e--) {
          this.selectRegister(e), this.setData(0);
        }
      }
    }, {
      key: "selectRegister",
      value: function selectRegister(e) {
        this.curreg = e & 15;
      }
    }, {
      key: "setData",
      value: function setData(e) {
        this.psg.writeRegisterAY(this.curreg, e & 255);
      }
    }, {
      key: "readData",
      value: function readData() {
        return this.psg.readRegister(this.curreg);
      }
    }, {
      key: "currentRegister",
      value: function currentRegister() {
        return this.curreg;
      }
    }]);
    return un;
  }(),
  on = /*#__PURE__*/function () {
    function on(e) {
      _classCallCheck(this, on);
      this.psg = new PsgDeviceChannel();
      this.master = e, this.psg.setMode(PsgDeviceChannel.MODE_SIGNED), this.psg.setDevice(PsgDeviceChannel.DEVICE_SN76489), e.master.addChannel(this.psg);
    }
    _createClass(on, [{
      key: "reset",
      value: function reset() {}
    }, {
      key: "setData",
      value: function setData(e) {
        this.psg.writeRegisterSN(0, e & 255);
      }
    }]);
    return on;
  }();
exports.f = on;
exports.e = un;
exports.d = Ct;
function Mn(h) {
  for (var e = new Ct(), r = 1; r <= h; r++) {
    var c = new ln();
    e["pokey" + r] = c, e.master.addChannel(c);
  }
  return e;
}
function I0(h, e) {
  for (var r = new Uint8Array(h.length * e.length), c = 0, l = 0; l < r.length; l++) {
    r[l] = e[c % e.length], h[l % h.length] && c++;
  }
  return r;
}
function X0(h) {
  var e = new Uint8Array(h * 2);
  return e.fill(1, 0, h), e;
}
var ln = function ln() {
    for (var h = 128, e = 64, r = 32, c = 16, l = 15, x = 128, d = 64, u = 32, a = 16, V = 8, L = 4, p = 2, I = 1, k = 28, G = 114, oe = 15, A = 31, R = 511, E = 131071, U = 0, z = 1, i = 2, f = 3, ge = 0, Fe = 4, W = 8, Be = 12, _ = 127, C = 1789790, Ze = 1787520, te = new Uint8Array([1]), q = new Uint8Array([0, 1]), We = new Uint8Array([1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0]), K = new Uint8Array([0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1]), H = new Uint8Array([0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0]), Ae = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), ue = new Uint8Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), O = new Uint8Array(1 << 14), Xe = 0; Xe < O.length; Xe++) {
      O[Xe] = Math.random() > .5 ? 1 : 0;
    }
    var Ve = I0(O, K),
      Ue = I0(K, We),
      De = [Ve, K, Ue, K, O, q, We, q],
      Q = X0(2),
      me = X0(6),
      we = X0(31),
      be = X0(93),
      ye = I0(Ae, We),
      ze = I0(K, Q),
      Ne = I0(K, me),
      He = [te, We, ye, Ue, Q, Q, we, ze, H, K, we, te, me, me, be, Ne],
      pe = new Uint8Array(16),
      ce = new Float32Array(4),
      ie = new Float32Array(4),
      M = new Float32Array(4),
      D = new Uint8Array(4),
      F = [te, te, te, te],
      fe,
      T,
      ne,
      w,
      N = !0;
    this.setBufferLength = function (Y) {
      fe = new Int32Array(Y);
    }, this.getBuffer = function () {
      return fe;
    }, this.setSampleRate = function (Y) {
      T = Y, w = C / Y;
    };
    function _e(Y) {
      var re = pe[8],
        ve = re & I ? G : k,
        $,
        le = Y & 4,
        Ie = le >> 1,
        Z = le >> 2;
      re & a >> Z ? (re & d >> Z ? $ = pe[le + 2] * 256 + pe[le + 0] + 7 : $ = (pe[le + 2] * 256 + pe[le + 0] + 1) * ve, ie[Ie + 1] = w / $, ie[Ie + 0] = 0) : (re & d >> Z ? $ = pe[le + 0] + 4 : $ = (pe[le + 0] + 1) * ve, ie[Ie + 0] = w / $, $ = (pe[le + 2] + 1) * ve, ie[Ie + 1] = w / $);
    }
    this.setRegister = function (Y, re) {
      if (Y &= 15, re &= 255, pe[Y] != re) switch (pe[Y] = re, Y) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 8:
          N = !0;
          break;
        case 1:
        case 3:
        case 5:
        case 7:
          M[Y >> 1] = re & 15, F[Y >> 1] = De[re >> 5];
          break;
      }
    }, this.getRegister = function (Y) {
      return Y &= 15, pe[Y];
    }, this.setTIARegister = function (Y, re) {
      switch (Y) {
        case 23:
        case 24:
          pe[(Y & 1) * 4] = re & 31, N = !0;
          break;
        case 21:
        case 22:
          F[(Y & 1) * 2] = He[re & 15];
          break;
        case 25:
        case 26:
          M[(Y & 1) * 2] = re & 15;
          break;
      }
    }, this.generate = function (Y) {
      N && (_e(0), _e(4), N = !1);
      for (var re = 0; re < Y; re += 2) {
        for (var ve = 0, $ = 0; $ < 4; $++) {
          var le = ie[$],
            Ie = M[$];
          if (le > 0 && le < 1 && Ie > 0) {
            var Z = F[$],
              ee = ce[$] += le;
            ee > Z.length && (ee = ce[$] = ee - Math.floor(ee / Z.length) * Z.length);
            var se = Z[Math.floor(ee)];
            se && (ve += Ie);
          }
        }
        ve *= 64, fe[re] = ve, fe[re + 1] = ve;
      }
    };
  },
  Tn = function Tn(h) {
    var e,
      r,
      c = [],
      l = 0;
    h.onmessage = function (x) {
      x && x.data && x.data.samples && r && (c.push(x.data.samples), l += x.data.samples.length);
    }, this.setBufferLength = function (x) {
      r = new Int16Array(x), l = 0;
    }, this.getBuffer = function () {
      return r;
    }, this.setSampleRate = function (x) {
      e = x, h.postMessage({
        sampleRate: x
      });
    }, this.generate = function (x) {
      if (l < x * 3) {
        r.fill(0);
        return;
      }
      for (var d = 0; d < r.length && c.length != 0;) {
        var u = c.shift();
        l -= u.length;
        var a = r.length - d;
        u.length < a ? r.set(u, d) : (r.set(u.slice(0, a), d), c.unshift(u.slice(a)), l += u.length - a), d += u.length;
      }
    };
  },
  mn = function mn(h) {
    var e = this,
      r,
      c,
      l,
      x,
      d,
      u,
      a,
      V,
      L = 4;
    function p(G) {
      var oe = G.outputBuffer.length,
        A = G.outputBuffer.getChannelData(0),
        R = this.module;
      if (R || (R = G.srcElement.module), !!R) if (R.callback) {
        R.callback(A);
        return;
      } else {
        for (var E = u[a], U = 0; U < A.length; U++) {
          A[U] = E[U];
        }
        a = (a + 1) % u.length;
      }
    }
    function I() {
      if (u) {
        var _iterator = _createForOfIteratorHelper(u),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var G = _step.value;
            G.fill(0);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    function k() {
      var G = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
      if (!G) {
        console.log("no web audio context");
        return;
      }
      var oe = new G();
      e.context = oe, e.sr = e.context.sampleRate, e.bufferlen = 2048, e.filterNode = e.context.createBiquadFilter(), e.filterNode.type = "lowshelf", e.filterNode.frequency.value = 100, e.filterNode.gain.value = -6, typeof e.context.createScriptProcessor == "function" ? e.mixerNode = e.context.createScriptProcessor(e.bufferlen, 1, 1) : e.mixerNode = e.context.createJavaScriptNode(e.bufferlen, 1, 1), e.mixerNode.module = e, e.mixerNode.onaudioprocess = p, e.compressorNode = e.context.createDynamicsCompressor(), e.mixerNode.connect(e.filterNode), e.filterNode.connect(e.compressorNode), e.compressorNode.connect(e.context.destination);
    }
    this.start = function () {
      if (this.context) {
        this.context.state == "suspended" && this.context.resume();
        return;
      }
      if (k(), !!this.context) {
        c = this.sr * 1 / h, r = 0, l = 0, d = 0, u = [], a = 1, V = 0;
        for (var G = 0; G < L; G++) {
          var oe = new ArrayBuffer(e.bufferlen * 4);
          u[G] = new Float32Array(oe);
        }
        x = u[0];
      }
    }, this.stop = function () {
      this.context && this.context.suspend && this.context.suspend(), I();
    }, this.close = function () {
      this.context && (this.context.close(), this.context = null);
    }, this.addSingleSample = function (G) {
      if (!!x && (x[d++] = G, d >= x.length)) {
        d = 0, u[V] = x;
        var oe = (V + 1) % u.length;
        oe == a ? V = Math.floor(a + L / 2) % u.length : V = oe, x = u[V];
      }
    }, this.feedSample = function (G, oe) {
      if (l += G * oe, r += c * oe, r >= 1) {
        for (l /= r; r >= 1;) {
          this.addSingleSample(l * c), r -= 1;
        }
        l *= r;
      }
    };
  },
  it = /*#__PURE__*/function () {
    function it(e) {
      _classCallCheck(this, it);
      this.sa = new mn(e);
    }
    _createClass(it, [{
      key: "feedSample",
      value: function feedSample(e, r) {
        this.sa.feedSample(e, r);
      }
    }, {
      key: "start",
      value: function start() {
        this.sa.start();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.sa.stop();
      }
    }]);
    return it;
  }(),
  bn = /*#__PURE__*/function () {
    function bn(e, r, c) {
      var _this = this;
      _classCallCheck(this, bn);
      this.audioGain = 1 / 8192;
      this.bufferLength = r * 2, this.channels = e.generate ? [e] : e, this.channels.forEach(function (l) {
        l.setBufferLength(_this.bufferLength), l.setSampleRate(c);
      });
    }
    _createClass(bn, [{
      key: "generate",
      value: function generate(e) {
        var _this2 = this;
        var r = this.bufferLength,
          c = this.channels.map(function (x) {
            return x.getBuffer();
          });
        this.channels.forEach(function (x) {
          x.generate(r);
        });
        var _loop = function _loop(x) {
          l = 0;
          c.forEach(function (d) {
            return l += d[x];
          }), e.feedSample(l * _this2.audioGain, 1);
        };
        for (var x = 0; x < r; x += 2) {
          var l;
          _loop(x);
        }
      }
    }]);
    return bn;
  }();
exports.k = bn;
exports.j = mn;
exports.i = Tn;
exports.h = ln;
var Ee;
exports.l = Ee;
(function (E) {
  E[E.CLOCKS = 0] = "CLOCKS", E[E.EXECUTE = 16777216] = "EXECUTE", E[E.INTERRUPT = 134217728] = "INTERRUPT", E[E.ILLEGAL = 150994944] = "ILLEGAL", E[E.SP_PUSH = 167772160] = "SP_PUSH", E[E.SP_POP = 184549376] = "SP_POP", E[E.HAS_VALUE = 268435456] = "HAS_VALUE", E[E.MEM_READ = 301989888] = "MEM_READ", E[E.MEM_WRITE = 318767104] = "MEM_WRITE", E[E.IO_READ = 335544320] = "IO_READ", E[E.IO_WRITE = 352321536] = "IO_WRITE", E[E.VRAM_READ = 369098752] = "VRAM_READ", E[E.VRAM_WRITE = 385875968] = "VRAM_WRITE", E[E.DMA_READ = 402653184] = "DMA_READ", E[E.DMA_WRITE = 419430400] = "DMA_WRITE", E[E.WAIT = 520093696] = "WAIT", E[E.SCANLINE = 2113929216] = "SCANLINE", E[E.FRAME = 2130706432] = "FRAME";
})(Ee || (exports.l = Ee = {}));
var ft = /*#__PURE__*/function () {
  function ft(e, r) {
    _classCallCheck(this, ft);
    this.idx = 0;
    this.sl = 0;
    this.cur_sp = -1;
    this.singleFrame = !0;
    this.m = e, this.reset(r || 1048576);
  }
  _createClass(ft, [{
    key: "start",
    value: function start() {
      this.m.connectProbe(this);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.m.connectProbe(null);
    }
  }, {
    key: "reset",
    value: function reset(e) {
      e && (this.buf = new Uint32Array(e)), this.sl = 0, this.cur_sp = -1, this.clear();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.idx = 0;
    }
  }, {
    key: "logData",
    value: function logData(e) {
      this.log(e);
    }
  }, {
    key: "log",
    value: function log(e) {
      this.idx >= this.buf.length || (this.buf[this.idx++] = e);
    }
  }, {
    key: "relog",
    value: function relog(e) {
      this.buf[this.idx - 1] = e;
    }
  }, {
    key: "lastOp",
    value: function lastOp() {
      return this.idx > 0 ? this.buf[this.idx - 1] & 4278190080 : -1;
    }
  }, {
    key: "lastAddr",
    value: function lastAddr() {
      return this.idx > 0 ? this.buf[this.idx - 1] & 16777215 : -1;
    }
  }, {
    key: "addLogBuffer",
    value: function addLogBuffer(e) {
      this.idx + e.length > this.buf.length && (e = e.slice(0, this.buf.length - this.idx)), this.buf.set(e, this.idx), this.idx += e.length;
    }
  }, {
    key: "logClocks",
    value: function logClocks(e) {
      e |= 0, e > 0 && (this.lastOp() == 0 ? this.relog(this.lastAddr() + e | 0) : this.log(e | 0));
    }
  }, {
    key: "logNewScanline",
    value: function logNewScanline() {
      this.log(2113929216), this.sl++;
    }
  }, {
    key: "logNewFrame",
    value: function logNewFrame() {
      this.log(2130706432), this.sl = 0, this.singleFrame && this.clear();
    }
  }, {
    key: "logExecute",
    value: function logExecute(e, r) {
      this.cur_sp !== r && (r < this.cur_sp && this.log(167772160 | r), r > this.cur_sp && this.log(184549376 | r), this.cur_sp = r), this.log(e | 16777216);
    }
  }, {
    key: "logInterrupt",
    value: function logInterrupt(e) {
      this.log(e | 134217728);
    }
  }, {
    key: "logValue",
    value: function logValue(e, r, c) {
      this.log(e & 65535 | (r & 255) << 16 | c);
    }
  }, {
    key: "logRead",
    value: function logRead(e, r) {
      this.logValue(e, r, 301989888);
    }
  }, {
    key: "logWrite",
    value: function logWrite(e, r) {
      this.logValue(e, r, 318767104);
    }
  }, {
    key: "logIORead",
    value: function logIORead(e, r) {
      this.logValue(e, r, 335544320);
    }
  }, {
    key: "logIOWrite",
    value: function logIOWrite(e, r) {
      this.logValue(e, r, 352321536);
    }
  }, {
    key: "logVRAMRead",
    value: function logVRAMRead(e, r) {
      this.logValue(e, r, 369098752);
    }
  }, {
    key: "logVRAMWrite",
    value: function logVRAMWrite(e, r) {
      this.logValue(e, r, 385875968);
    }
  }, {
    key: "logIllegal",
    value: function logIllegal(e) {
      this.log(e | 150994944);
    }
  }, {
    key: "logWait",
    value: function logWait(e) {
      this.log(e | 520093696);
    }
  }, {
    key: "logDMARead",
    value: function logDMARead(e, r) {
      this.logValue(e, r, 402653184);
    }
  }, {
    key: "logDMAWrite",
    value: function logDMAWrite(e, r) {
      this.logValue(e, r, 419430400);
    }
  }, {
    key: "countEvents",
    value: function countEvents(e) {
      for (var r = 0, c = 0; c < this.idx; c++) {
        (this.buf[c] & 4278190080) == e && r++;
      }
      return r;
    }
  }, {
    key: "countClocks",
    value: function countClocks() {
      for (var e = 0, r = 0; r < this.idx; r++) {
        (this.buf[r] & 4278190080) == 0 && (e += this.buf[r] & 65535);
      }
      return e;
    }
  }]);
  return ft;
}();
exports.m = ft;
var Y0 = /*#__PURE__*/function () {
    function Y0() {
      _classCallCheck(this, Y0);
    }
    _createClass(Y0, [{
      key: "logClocks",
      value: function logClocks() {}
    }, {
      key: "logNewScanline",
      value: function logNewScanline() {}
    }, {
      key: "logNewFrame",
      value: function logNewFrame() {}
    }, {
      key: "logExecute",
      value: function logExecute() {}
    }, {
      key: "logInterrupt",
      value: function logInterrupt() {}
    }, {
      key: "logRead",
      value: function logRead() {}
    }, {
      key: "logWrite",
      value: function logWrite() {}
    }, {
      key: "logIORead",
      value: function logIORead() {}
    }, {
      key: "logIOWrite",
      value: function logIOWrite() {}
    }, {
      key: "logVRAMRead",
      value: function logVRAMRead() {}
    }, {
      key: "logVRAMWrite",
      value: function logVRAMWrite() {}
    }, {
      key: "logIllegal",
      value: function logIllegal() {}
    }, {
      key: "logWait",
      value: function logWait() {}
    }, {
      key: "logDMARead",
      value: function logDMARead() {}
    }, {
      key: "logDMAWrite",
      value: function logDMAWrite() {}
    }, {
      key: "logData",
      value: function logData() {}
    }, {
      key: "addLogBuffer",
      value: function addLogBuffer(e) {}
    }]);
    return Y0;
  }(),
  gt = /*#__PURE__*/function () {
    function gt() {
      _classCallCheck(this, gt);
      this.inputs = new Uint8Array(32);
      this.nullProbe = new Y0();
      this.probe = this.nullProbe;
    }
    _createClass(gt, [{
      key: "setKeyInput",
      value: function setKeyInput(e, r, c) {
        this.handler && this.handler(e, r, c);
      }
    }, {
      key: "connectProbe",
      value: function connectProbe(e) {
        this.probe = e || this.nullProbe;
      }
    }, {
      key: "reset",
      value: function reset() {
        this.cpu.reset();
      }
    }, {
      key: "loadROM",
      value: function loadROM(e, r) {
        this.rom || (this.rom = new Uint8Array(this.defaultROMSize)), this.rom.set(e);
      }
    }, {
      key: "loadState",
      value: function loadState(e) {
        this.cpu.loadState(e.c), this.ram.set(e.ram), this.inputs.set(e.inputs);
      }
    }, {
      key: "saveState",
      value: function saveState() {
        return {
          c: this.cpu.saveState(),
          ram: this.ram.slice(0),
          inputs: this.inputs.slice(0)
        };
      }
    }, {
      key: "loadControlsState",
      value: function loadControlsState(e) {
        this.inputs.set(e.inputs);
      }
    }, {
      key: "saveControlsState",
      value: function saveControlsState() {
        return {
          inputs: this.inputs.slice(0)
        };
      }
    }, {
      key: "advanceCPU",
      value: function advanceCPU() {
        var e = this.cpu,
          r = 1;
        return this.cpu.isStable() && this.probe.logExecute(this.cpu.getPC(), this.cpu.getSP()), e.advanceClock ? e.advanceClock() : e.advanceInsn && (r = e.advanceInsn(1)), this.probe.logClocks(r), r;
      }
    }, {
      key: "probeMemoryBus",
      value: function probeMemoryBus(e) {
        var _this3 = this;
        return {
          read: function read(r) {
            var c = e.read(r);
            return _this3.probe.logRead(r, c), c;
          },
          write: function write(r, c) {
            _this3.probe.logWrite(r, c), e.write(r, c);
          }
        };
      }
    }, {
      key: "connectCPUMemoryBus",
      value: function connectCPUMemoryBus(e) {
        this.cpu.connectMemoryBus(this.probeMemoryBus(e));
      }
    }, {
      key: "probeIOBus",
      value: function probeIOBus(e) {
        var _this4 = this;
        return {
          read: function read(r) {
            var c = e.read(r);
            return _this4.probe.logIORead(r, c), c;
          },
          write: function write(r, c) {
            _this4.probe.logIOWrite(r, c), e.write(r, c);
          }
        };
      }
    }, {
      key: "probeDMABus",
      value: function probeDMABus(e) {
        var _this5 = this;
        return {
          read: function read(r) {
            var c = e.read(r);
            return _this5.probe.logDMARead(r, c), c;
          },
          write: function write(r, c) {
            _this5.probe.logDMAWrite(r, c), e.write(r, c);
          }
        };
      }
    }, {
      key: "connectCPUIOBus",
      value: function connectCPUIOBus(e) {
        this.cpu.connectIOBus(this.probeIOBus(e));
      }
    }]);
    return gt;
  }(),
  pt = /*#__PURE__*/function (_gt) {
    _inherits(pt, _gt);
    var _super = _createSuper(pt);
    function pt() {
      var _this6;
      _classCallCheck(this, pt);
      _this6 = _super.apply(this, arguments);
      _this6.overscan = !1;
      _this6.rotate = 0;
      return _this6;
    }
    _createClass(pt, [{
      key: "getAudioParams",
      value: function getAudioParams() {
        return {
          sampleRate: this.sampleRate,
          stereo: !1
        };
      }
    }, {
      key: "connectAudio",
      value: function connectAudio(e) {
        this.audio = e;
      }
    }, {
      key: "getVideoParams",
      value: function getVideoParams() {
        return {
          width: this.canvasWidth,
          height: this.numVisibleScanlines,
          aspect: this.aspectRatio,
          overscan: this.overscan,
          rotate: this.rotate
        };
      }
    }, {
      key: "connectVideo",
      value: function connectVideo(e) {
        this.pixels = e;
      }
    }]);
    return pt;
  }(gt),
  dn = /*#__PURE__*/function (_pt) {
    _inherits(dn, _pt);
    var _super2 = _createSuper(dn);
    function dn() {
      _classCallCheck(this, dn);
      return _super2.apply(this, arguments);
    }
    _createClass(dn, [{
      key: "advanceFrame",
      value: function advanceFrame(e) {
        this.preFrame();
        var r = 0,
          c = 0;
        this.probe.logNewFrame(), this.frameCycles = 0;
        for (var l = 0; l < this.numTotalScanlines; l++) {
          for (r += this.cpuCyclesPerLine, this.scanline = l, this.startScanline(); this.frameCycles < r;) {
            if (e && e()) {
              l = 999;
              break;
            }
            this.frameCycles += this.advanceCPU(), c++;
          }
          this.drawScanline(), this.probe.logNewScanline(), this.probe.logClocks(Math.floor(this.frameCycles - r));
        }
        return this.postFrame(), c;
      }
    }, {
      key: "preFrame",
      value: function preFrame() {}
    }, {
      key: "postFrame",
      value: function postFrame() {}
    }, {
      key: "getRasterY",
      value: function getRasterY() {
        return this.scanline;
      }
    }, {
      key: "getRasterX",
      value: function getRasterX() {
        return this.frameCycles % this.cpuCyclesPerLine;
      }
    }]);
    return dn;
  }(pt);
exports.q = dn;
exports.p = pt;
exports.o = gt;
exports.n = Y0;
var _t = ["nop", "ld bc,xx", "ld (bc),a", "inc bc", "inc b", "dec b", "ld b,x", "rlca", "ex af,af'", "add hl,bc", "ld a,(bc)", "dec bc", "inc c", "dec c", "ld c,x", "rrca", "djnz x", "ld de,xx", "ld (de),a", "inc de", "inc d", "dec d", "ld d,x", "rla", "jr x", "add hl,de", "ld a,(de)", "dec de", "inc e", "dec e", "ld e,x", "rra", "jr nz,x", "ld hl,xx", "ld (xx),hl", "inc hl", "inc h", "dec h", "ld h,x", "daa", "jr z,x", "add hl,hl", "ld hl,(xx)", "dec hl", "inc l", "dec l", "ld l,x", "cpl", "jr nc,x", "ld sp,xx", "ld (xx),a", "inc sp", "inc (hl)", "dec (hl)", "ld (hl),x", "scf", "jr c,x", "add hl,sp", "ld a,(xx)", "dec sp", "inc a", "dec a", "ld a,x", "ccf", "ld b,b", "ld b,c", "ld b,d", "ld b,e", "ld b,h", "ld b,l", "ld b,(hl)", "ld b,a", "ld c,b", "ld c,c", "ld c,d", "ld c,e", "ld c,h", "ld c,l", "ld c,(hl)", "ld c,a", "ld d,b", "ld d,c", "ld d,d", "ld d,e", "ld d,h", "ld d,l", "ld d,(hl)", "ld d,a", "ld e,b", "ld e,c", "ld e,d", "ld e,e", "ld e,h", "ld e,l", "ld e,(hl)", "ld e,a", "ld h,b", "ld h,c", "ld h,d", "ld h,e", "ld h,h", "ld h,l", "ld h,(hl)", "ld h,a", "ld l,b", "ld l,c", "ld l,d", "ld l,e", "ld l,h", "ld l,l", "ld l,(hl)", "ld l,a", "ld (hl),b", "ld (hl),c", "ld (hl),d", "ld (hl),e", "ld (hl),h", "ld (hl),l", "halt", "ld (hl),a", "ld a,b", "ld a,c", "ld a,d", "ld a,e", "ld a,h", "ld a,l", "ld a,(hl)", "ld a,a", "add a,b", "add a,c", "add a,d", "add a,e", "add a,h", "add a,l", "add a,(hl)", "add a,a", "adc a,b", "adc a,c", "adc a,d", "adc a,e", "adc a,h", "adc a,l", "adc a,(hl)", "adc a,a", "sub b", "sub c", "sub d", "sub e", "sub h", "sub l", "sub (hl)", "sub a", "sbc a,b", "sbc a,c", "sbc a,d", "sbc a,e", "sbc a,h", "sbc a,l", "sbc a,(hl)", "sbc a,a", "and b", "and c", "and d", "and e", "and h", "and l", "and (hl)", "and a", "xor b", "xor c", "xor d", "xor e", "xor h", "xor l", "xor (hl)", "xor a", "or b", "or c", "or d", "or e", "or h", "or l", "or (hl)", "or a", "cp b", "cp c", "cp d", "cp e", "cp h", "cp l", "cp (hl)", "cp a", "ret nz", "pop bc", "jp nz,xx", "jp xx", "call nz,xx", "push bc", "add a,x", "rst 00h", "ret z", "ret", "jp z,xx", "xxBITxx", "call z,xx", "call xx", "adc a,x", "rst 08h", "ret nc", "pop de", "jp nc,xx", "out (x),a", "call nc,xx", "push de", "sub x", "rst 10h", "ret c", "exx", "jp c,xx", "in a,(x)", "call c,xx", "xxIXxx", "sbc a,x", "rst 18h", "ret po", "pop hl", "jp po,xx", "ex (sp),hl", "call po,xx", "push hl", "and x", "rst 20h", "ret pe", "jp (hl)", "jp pe,xx", "ex de,hl", "call pe,xx", "xx80xx", "xor x", "rst 28h", "ret p", "pop af", "jp p,xx", "di", "call p,xx", "push af", "or x", "rst 30h", "ret m", "ld sp,hl", "jp m,xx", "ei", "call m,xx", "xxIYxx", "cp x", "rst 38h"],
  Pt = ["in b,(c)", "out (c),b", "sbc hl,bc", "ld (xx),bc", "neg", "retn", "im 0", "ld i,a", "in c,(c)", "out (c),c", "adc hl,bc", "ld bc,(xx)", "neg", "reti", "", "ld r,a", "in d,(c)", "out (c),d", "sbc hl,de", "ld (xx),de", "neg", "retn", "im 1", "ld a,i", "in e,(c)", "out (c),e", "adc hl,de", "ld de,(xx)", "neg", "retn", "im 2", "ld a,r", "in h,(c)", "out (c),h", "sbc hl,hl", "ld (xx),hl", "neg", "retn", "", "rrd", "in l,(c)", "out (c),l", "adc hl,hl", "ld hl,(xx)", "neg", "retn", "", "rld", "in f,(c)", "out (c),f", "sbc hl,sp", "ld (xx),sp", "neg", "retn", "", "", "in a,(c)", "out (c),a", "adc hl,sp", "ld sp,(xx)", "neg", "reti", "", "", "ldi", "cpi", "ini", "outi", "", "", "", "", "ldd", "cpd", "ind", "outd", "", "", "", "", "ldir", "cpir", "inir", "otir", "", "", "", "", "lddr", "cpdr", "indr", "otdr", "", "", "", ""],
  kt = ["rlc b", "rlc c", "rlc d", "rlc e", "rlc h", "rlc l", "rlc (hl)", "rlc a", "rrc b", "rrc c", "rrc d", "rrc e", "rrc h", "rrc l", "rrc (hl)", "rrc a", "rl b", "rl c", "rl d", "rl e", "rl h", "rl l", "rl (hl)", "rl a", "rr b", "rr c", "rr d", "rr e", "rr h", "rr l", "rr (hl)", "rr a", "sla b", "sla c", "sla d", "sla e", "sla h", "sla l", "sla (hl)", "sla a", "sra b", "sra c", "sra d", "sra e", "sra h", "sra l", "sra (hl)", "sra a", "sll b", "sll c", "sll d", "sll e", "sll h", "sll l", "sll (hl)", "sll a", "srl b", "srl c", "srl d", "srl e", "srl h", "srl l", "srl (hl)", "srl a", "bit 0,b", "bit 0,c", "bit 0,d", "bit 0,e", "bit 0,h", "bit 0,l", "bit 0,(hl)", "bit 0,a", "bit 1,b", "bit 1,c", "bit 1,d", "bit 1,e", "bit 1,h", "bit 1,l", "bit 1,(hl)", "bit 1,a", "bit 2,b", "bit 2,c", "bit 2,d", "bit 2,e", "bit 2,h", "bit 2,l", "bit 2,(hl)", "bit 2,a", "bit 3,b", "bit 3,c", "bit 3,d", "bit 3,e", "bit 3,h", "bit 3,l", "bit 3,(hl)", "bit 3,a", "bit 4,b", "bit 4,c", "bit 4,d", "bit 4,e", "bit 4,h", "bit 4,l", "bit 4,(hl)", "bit 4,a", "bit 5,b", "bit 5,c", "bit 5,d", "bit 5,e", "bit 5,h", "bit 5,l", "bit 5,(hl)", "bit 5,a", "bit 6,b", "bit 6,c", "bit 6,d", "bit 6,e", "bit 6,h", "bit 6,l", "bit 6,(hl)", "bit 6,a", "bit 7,b", "bit 7,c", "bit 7,d", "bit 7,e", "bit 7,h", "bit 7,l", "bit 7,(hl)", "bit 7,a", "res 0,b", "res 0,c", "res 0,d", "res 0,e", "res 0,h", "res 0,l", "res 0,(hl)", "res 0,a", "res 1,b", "res 1,c", "res 1,d", "res 1,e", "res 1,h", "res 1,l", "res 1,(hl)", "res 1,a", "res 2,b", "res 2,c", "res 2,d", "res 2,e", "res 2,h", "res 2,l", "res 2,(hl)", "res 2,a", "res 3,b", "res 3,c", "res 3,d", "res 3,e", "res 3,h", "res 3,l", "res 3,(hl)", "res 3,a", "res 4,b", "res 4,c", "res 4,d", "res 4,e", "res 4,h", "res 4,l", "res 4,(hl)", "res 4,a", "res 5,b", "res 5,c", "res 5,d", "res 5,e", "res 5,h", "res 5,l", "res 5,(hl)", "res 5,a", "res 6,b", "res 6,c", "res 6,d", "res 6,e", "res 6,h", "res 6,l", "res 6,(hl)", "res 6,a", "res 7,b", "res 7,c", "res 7,d", "res 7,e", "res 7,h", "res 7,l", "res 7,(hl)", "res 7,a", "set 0,b", "set 0,c", "set 0,d", "set 0,e", "set 0,h", "set 0,l", "set 0,(hl)", "set 0,a", "set 1,b", "set 1,c", "set 1,d", "set 1,e", "set 1,h", "set 1,l", "set 1,(hl)", "set 1,a", "set 2,b", "set 2,c", "set 2,d", "set 2,e", "set 2,h", "set 2,l", "set 2,(hl)", "set 2,a", "set 3,b", "set 3,c", "set 3,d", "set 3,e", "set 3,h", "set 3,l", "set 3,(hl)", "set 3,a", "set 4,b", "set 4,c", "set 4,d", "set 4,e", "set 4,h", "set 4,l", "set 4,(hl)", "set 4,a", "set 5,b", "set 5,c", "set 5,d", "set 5,e", "set 5,h", "set 5,l", "set 5,(hl)", "set 5,a", "set 6,b", "set 6,c", "set 6,d", "set 6,e", "set 6,h", "set 6,l", "set 6,(hl)", "set 6,a", "set 7,b", "set 7,c", "set 7,d", "set 7,e", "set 7,h", "set 7,l", "set 7,(hl)", "set 7,a"];
function ct(h, e, r, c, l) {
  var x,
    d,
    u,
    a = [e, r, c, l],
    V = !1;
  switch (d = 1, e) {
    case 203:
      u = kt[r], d++;
      break;
    case 237:
      r >= 64 && r <= 127 && (u = Pt[r - 64]), r >= 160 && r <= 191 && (u = Pt[r - 160 + 64]), d++;
      break;
    case 221:
    case 253:
      var L = e == 221 ? "ix" : "iy";
      r == 203 ? (u = kt[l], a[2] = l, a[3] = c, d++) : u = _t[r], u = u.replace(/[(]hl[)]/, "(" + L + "+x)"), u = u.replace(/\bhl\b/, L), d++;
      break;
    default:
      u = _t[e];
      break;
  }
  if ((!u || !u.length) && (u = "??"), /\bxx\b/.test(u)) u = u.replace(/\bxx\b/, "$" + (0, _chunkQEB57REV.g)(a[d] + (a[d + 1] << 8), 4)), d += 2, V = !0;else if (/\bx\b/.test(u)) {
    if (u.startsWith("j")) {
      var p = r < 128 ? h + 2 + r : h + 2 - (256 - r);
      p &= 65535, u = u.replace(/\bx\b/, "$" + (0, _chunkQEB57REV.g)(p, 4)), V = !0;
    } else u = u.replace(/\bx\b/, "$" + (0, _chunkQEB57REV.g)(a[d], 2));
    d += 1;
  }
  return {
    line: u.toUpperCase(),
    nbytes: d,
    isaddr: V
  };
}
var W0 = /*#__PURE__*/function () {
  function W0(e) {
    _classCallCheck(this, W0);
    this.maxROMSize = 262144;
    this.videoOffsetBytes = 0;
    this.prefix = e;
    var r = this;
    this.cpu = {
      getPC: r.getPC.bind(r),
      getSP: r.getSP.bind(r),
      isStable: r.isStable.bind(r),
      reset: r.reset.bind(r),
      saveState: function saveState() {
        return r.getCPUState();
      },
      loadState: function loadState() {
        console.log("loadState not implemented");
      },
      connectMemoryBus: function connectMemoryBus() {
        console.log("connectMemoryBus not implemented");
      }
    };
  }
  _createClass(W0, [{
    key: "getImports",
    value: function getImports(e) {
      return {};
    }
  }, {
    key: "fetchWASM",
    value: function () {
      var _fetchWASM = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var e, r, c, l;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("res/" + this.prefix + ".wasm");
              case 2:
                e = _context.sent;
                if (!(e.status == 200 || e.size)) {
                  _context.next = 16;
                  break;
                }
                _context.next = 6;
                return e.arrayBuffer();
              case 6:
                r = _context.sent;
                _context.next = 9;
                return WebAssembly.compile(r);
              case 9:
                c = _context.sent;
                _context.next = 12;
                return WebAssembly.instantiate(c, this.getImports(c));
              case 12:
                l = _context.sent;
                this.instance = l, this.exports = l.exports;
                _context.next = 17;
                break;
              case 16:
                throw new Error("could not load WASM file");
              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function fetchWASM() {
        return _fetchWASM.apply(this, arguments);
      }
      return fetchWASM;
    }()
  }, {
    key: "fetchBIOS",
    value: function () {
      var _fetchBIOS = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var e, r;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("res/" + this.prefix + ".bios");
              case 2:
                e = _context2.sent;
                if (!(e.status == 200 || e.size)) {
                  _context2.next = 10;
                  break;
                }
                _context2.next = 6;
                return e.arrayBuffer();
              case 6:
                r = _context2.sent;
                this.biosptr = this.exports.malloc(r.byteLength), this.biosarr = new Uint8Array(this.exports.memory.buffer, this.biosptr, r.byteLength), this.loadBIOS(new Uint8Array(r));
                _context2.next = 11;
                break;
              case 10:
                throw new Error("could not load BIOS file");
              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function fetchBIOS() {
        return _fetchBIOS.apply(this, arguments);
      }
      return fetchBIOS;
    }()
  }, {
    key: "initWASM",
    value: function () {
      var _initWASM = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var e, r, c, l;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.sys = this.exports.machine_init(this.biosptr);
                e = this.exports.machine_get_state_size();
                this.stateptr = this.exports.malloc(e);
                r = this.exports.machine_get_controls_state_size();
                this.ctrlstateptr = this.exports.malloc(r);
                c = this.exports.machine_get_cpu_state_size();
                this.cpustateptr = this.exports.malloc(c), this.romptr = this.exports.malloc(this.maxROMSize), this.statearr = new Uint8Array(this.exports.memory.buffer, this.stateptr, e), this.ctrlstatearr = new Uint8Array(this.exports.memory.buffer, this.ctrlstateptr, r), this.cpustatearr = new Uint8Array(this.exports.memory.buffer, this.cpustateptr, c);
                l = 4096 * 4;
                this.audioarr = new Float32Array(this.exports.memory.buffer, this.exports.machine_get_sample_buffer(), l), this.romarr = new Uint8Array(this.exports.memory.buffer, this.romptr, this.maxROMSize), console.log("machine_init", this.sys, e, r, c, l);
              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function initWASM() {
        return _initWASM.apply(this, arguments);
      }
      return initWASM;
    }()
  }, {
    key: "loadWASM",
    value: function () {
      var _loadWASM = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.fetchWASM();
              case 2:
                this.exports.memory.grow(96);
                _context4.next = 5;
                return this.fetchBIOS();
              case 5:
                _context4.next = 7;
                return this.initWASM();
              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function loadWASM() {
        return _loadWASM.apply(this, arguments);
      }
      return loadWASM;
    }()
  }, {
    key: "getPC",
    value: function getPC() {
      return this.exports.machine_cpu_get_pc(this.sys);
    }
  }, {
    key: "getSP",
    value: function getSP() {
      return this.exports.machine_cpu_get_sp(this.sys);
    }
  }, {
    key: "isStable",
    value: function isStable() {
      return this.exports.machine_cpu_is_stable(this.sys);
    }
  }, {
    key: "loadROM",
    value: function loadROM(e) {
      if (e.length > this.maxROMSize) throw new _chunkQEB57REV.S("Rom size too big: ".concat(e.length, " bytes"));
      this.romarr.set(e), this.romlen = e.length, console.log("load rom", e.length, "bytes"), this.reset();
    }
  }, {
    key: "loadBIOS",
    value: function loadBIOS(e) {
      this.biosarr.set(e);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.exports.machine_reset(this.sys);
    }
  }, {
    key: "read",
    value: function read(e) {
      return this.exports.machine_mem_read(this.sys, e & 65535);
    }
  }, {
    key: "readConst",
    value: function readConst(e) {
      return this.exports.machine_mem_read(this.sys, e & 65535);
    }
  }, {
    key: "write",
    value: function write(e, r) {
      this.exports.machine_mem_write(this.sys, e & 65535, r & 255);
    }
  }, {
    key: "getAudioParams",
    value: function getAudioParams() {
      return {
        sampleRate: 44100,
        stereo: !1
      };
    }
  }, {
    key: "connectVideo",
    value: function connectVideo(e) {
      this.pixel_dest = e;
      var r = this.exports.machine_get_pixel_buffer(this.sys);
      console.log("connectVideo", r, e.length), this.pixel_src = new Uint32Array(this.exports.memory.buffer, r + this.videoOffsetBytes, e.length);
    }
  }, {
    key: "syncVideo",
    value: function syncVideo() {
      this.exports.machine_update_video && this.exports.machine_update_video(this.sys), this.pixel_dest != null && this.pixel_dest.set(this.pixel_src);
    }
  }, {
    key: "saveControlsState",
    value: function saveControlsState() {
      return this.exports.machine_save_controls_state(this.sys, this.ctrlstateptr), {
        controls: this.ctrlstatearr.slice(0)
      };
    }
  }, {
    key: "loadControlsState",
    value: function loadControlsState(e) {
      this.ctrlstatearr.set(e.controls), this.exports.machine_load_controls_state(this.sys, this.ctrlstateptr);
    }
  }, {
    key: "connectAudio",
    value: function connectAudio(e) {
      this.audio = e;
    }
  }, {
    key: "syncAudio",
    value: function syncAudio() {
      if (this.audio != null) for (var e = this.exports.machine_get_sample_count(), r = 0; r < e; r++) {
        this.audio.feedSample(this.audioarr[r], 1);
      }
    }
  }, {
    key: "advanceFrameClock",
    value: function advanceFrameClock(e, r) {
      var c;
      if (e) for (c = 0; c < r && !e(); c++) {
        this.exports.machine_tick(this.sys);
      } else this.exports.machine_exec(this.sys, r), c = r;
      return this.syncVideo(), this.syncAudio(), c;
    }
  }, {
    key: "copyProbeData",
    value: function copyProbeData() {
      if (this.probe && !(this.probe instanceof Y0)) {
        var e = this.exports.machine_get_probe_buffer_size(),
          r = this.exports.machine_get_probe_buffer_address(),
          c = new Uint32Array(this.exports.memory.buffer, r, e);
        this.probe.logNewFrame(), this.probe.addLogBuffer(c);
      }
    }
  }, {
    key: "connectProbe",
    value: function connectProbe(e) {
      this.probe = e;
    }
  }, {
    key: "getDebugTree",
    value: function getDebugTree() {
      return this.saveState();
    }
  }]);
  return W0;
}();
exports.r = W0;
"use strict";
function Z0() {
  var h,
    e,
    r,
    c,
    l,
    x,
    d,
    u,
    a,
    V,
    L = 1,
    p = 2,
    I = 4,
    k = 8,
    G = 16,
    oe = 32,
    A = 64,
    R = 128,
    E = 65534,
    U = 65532,
    z = 65530,
    i = 65528,
    f = 65526,
    ge = 65524,
    Fe = 65522,
    W = 0,
    Be,
    _,
    C,
    Ze = [6, 0, 0, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 3, 6, 0, 0, 2, 4, 0, 0, 5, 9, 0, 2, 3, 0, 3, 2, 8, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 5, 3, 6, 9, 11, 0, 19, 2, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 6, 0, 0, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 3, 6, 7, 0, 0, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 4, 7, 2, 2, 2, 4, 2, 2, 2, 0, 2, 2, 2, 2, 4, 7, 3, 0, 4, 4, 4, 6, 4, 4, 4, 4, 4, 4, 4, 4, 6, 7, 5, 5, 4, 4, 4, 6, 4, 4, 4, 4, 4, 4, 4, 4, 6, 7, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 5, 7, 8, 6, 6, 2, 2, 2, 4, 2, 2, 2, 0, 2, 2, 2, 2, 3, 0, 3, 0, 4, 4, 4, 6, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 4, 4, 4, 6, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6],
    te = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 6, 6, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 6, 6, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7],
    q = [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
    We = function We(o, n, g) {
      a |= ((o ^ n ^ g ^ g >> 1) & 128) >> 6;
    },
    K = function K(o, n, g) {
      a |= ((o ^ n ^ g ^ g >> 1) & 32768) >> 14;
    },
    H = function H() {
      return (e << 8) + r;
    },
    Ae = function Ae(o) {
      e = o >> 8 & 255, r = o & 255;
    },
    ue = function ue(o) {
      _(--d, o & 255);
    },
    O = function O(o) {
      _(--d, o & 255), _(--d, o >> 8 & 255);
    },
    Xe = function Xe(o) {
      _(--x, o & 255);
    },
    Ve = function Ve(o) {
      _(--x, o & 255), _(--x, o >> 8 & 255);
    },
    Ue = function Ue() {
      return C(d++);
    },
    De = function De() {
      return C(d++) * 256 + C(d++);
    },
    Q = function Q() {
      return C(x++);
    },
    me = function me() {
      return C(x++) * 256 + C(x++);
    },
    we = function we(o) {
      var n = 0;
      o & 128 && (O(u), n += 2), o & 64 && (O(x), n += 2), o & 32 && (O(l), n += 2), o & 16 && (O(c), n += 2), o & 8 && (ue(V), n++), o & 4 && (ue(r), n++), o & 2 && (ue(e), n++), o & 1 && (ue(a), n++), W += n;
    },
    be = function be(o) {
      var n = 0;
      o & 128 && (Ve(u), n += 2), o & 64 && (Ve(d), n += 2), o & 32 && (Ve(l), n += 2), o & 16 && (Ve(c), n += 2), o & 8 && (Xe(V), n++), o & 4 && (Xe(r), n++), o & 2 && (Xe(e), n++), o & 1 && (Xe(a), n++), W += n;
    },
    ye = function ye(o) {
      var n = 0;
      o & 1 && (a = Ue(), n++), o & 2 && (e = Ue(), n++), o & 4 && (r = Ue(), n++), o & 8 && (V = Ue(), n++), o & 16 && (c = De(), n += 2), o & 32 && (l = De(), n += 2), o & 64 && (x = De(), n += 2), o & 128 && (u = De(), n += 2), W += n;
    },
    ze = function ze(o) {
      var n = 0;
      o & 1 && (a = Q(), n++), o & 2 && (e = Q(), n++), o & 4 && (r = Q(), n++), o & 8 && (V = Q(), n++), o & 16 && (c = me(), n += 2), o & 32 && (l = me(), n += 2), o & 64 && (d = me(), n += 2), o & 128 && (u = me(), n += 2), W += n;
    },
    Ne = function Ne(o) {
      switch (o & 15) {
        case 0:
          return H();
        case 1:
          return c;
        case 2:
          return l;
        case 3:
          return x;
        case 4:
          return d;
        case 5:
          return u;
        case 8:
          return e;
        case 9:
          return r;
        case 10:
          return a;
        case 11:
          return V;
        default:
          return null;
      }
    },
    He = function He(o, n) {
      switch (o & 15) {
        case 0:
          Ae(n);
          return;
        case 1:
          c = n;
          return;
        case 2:
          l = n;
          return;
        case 3:
          x = n;
          return;
        case 4:
          d = n;
          return;
        case 5:
          u = n;
          return;
        case 8:
          e = n;
          return;
        case 9:
          r = n;
          return;
        case 10:
          a = n;
          return;
        case 11:
          V = n;
          return;
        default:
          return;
      }
    },
    pe = function pe(o, n) {
      var g = o & 136;
      (g == 128 || g == 8) && (g = 0), n ? (g = Ne(o >> 4), He(o >> 4, Ne(o)), He(o, g)) : He(o, Ne(o >> 4));
    },
    ce = function ce(o) {
      return o > 127 ? o - 256 : o;
    },
    ie = function ie(o) {
      return o > 32767 ? o - 65536 : o;
    },
    M = function M() {
      var o = C(u++);
      return u &= 65535, o;
    },
    D = function D() {
      var o = C(u++);
      u &= 65535;
      var n = C(u++);
      return u &= 65535, o * 256 + n;
    },
    F = function F(o) {
      var n = C(o++);
      o &= 65535;
      var g = C(o++);
      return o &= 65535, n * 256 + g;
    },
    fe = function fe(o, n) {
      _(o++, n >> 8 & 255), o &= 65535, _(o, n & 255);
    },
    T = function T() {
      var o = M(),
        n;
      switch (o & 96) {
        case 0:
          n = c;
          break;
        case 32:
          n = l;
          break;
        case 64:
          n = x;
          break;
        case 96:
          n = d;
          break;
      }
      var g = null,
        s = null,
        t;
      if (o & 128) {
        switch (o & 15) {
          case 0:
            s = n, g = n + 1, W += 2;
            break;
          case 1:
            s = n, g = n + 2, W += 3;
            break;
          case 2:
            g = n - 1, s = g, W += 2;
            break;
          case 3:
            g = n - 2, s = g, W += 3;
            break;
          case 4:
            s = n;
            break;
          case 5:
            s = n + ce(r), W += 1;
            break;
          case 6:
            s = n + ce(e), W += 1;
            break;
          case 7:
            s = 0;
            break;
          case 8:
            s = n + ce(M()), W += 1;
            break;
          case 9:
            s = n + ie(D()), W += 4;
            break;
          case 10:
            s = 0;
            break;
          case 11:
            W += 4, s = n + H();
            break;
          case 12:
            t = ce(M()), s = u + t, W += 1;
            break;
          case 13:
            t = ie(D()), s = u + t, W += 5;
            break;
          case 14:
            s = 0;
            break;
          case 15:
            W += 5, s = D();
            break;
        }
        s &= 65535, o & 16 && (s = C(s) * 256 + C(s + 1 & 65535), W += 3);
      } else {
        var b = o & 31;
        b > 15 && (b -= 32), s = n + b, W += 1;
      }
      if (g !== null) switch (o & 96) {
        case 0:
          c = g;
          break;
        case 32:
          l = g;
          break;
        case 64:
          x = g;
          break;
        case 96:
          d = g;
          break;
      }
      return s & 65535;
    },
    ne = function ne(o) {
      a &= ~(I | k), o === 0 && (a |= I), o & 32768 && (a |= k);
    },
    w = function w(o) {
      return o++, o &= 255, a &= ~(I | p | k), a |= q[o], (o === 0 || o == 128) && (a |= p), o;
    },
    N = function N(o) {
      return o--, o &= 255, a &= ~(I | p | k), a |= q[o], (o === 127 || o == 255) && (a |= p), o;
    },
    _e = function _e(o, n) {
      var g = o - n;
      return a &= ~(L | I | p | k), a |= q[g & 255], g & 256 && (a |= L), We(o, n, g), g & 255;
    },
    Y = function Y(o, n) {
      var g = o - n;
      return a &= ~(L | I | p | k), (g & 65535) == 0 && (a |= I), g & 32768 && (a |= k), g & 65536 && (a |= L), K(o, n, g), g & 65535;
    },
    re = function re(o, n) {
      var g = o + n;
      return a &= ~(oe | L | I | p | k), a |= q[g & 255], g & 256 && (a |= L), We(o, n, g), (g ^ o ^ n) & 16 && (a |= oe), g & 255;
    },
    ve = function ve(o, n) {
      var g = o + n;
      return a &= ~(L | I | p | k), (g & 65535) == 0 && (a |= I), g & 32768 && (a |= k), g & 65536 && (a |= L), K(o, n, g), g & 65535;
    },
    $ = function $(o, n) {
      var g = o + n + (a & L);
      return a &= ~(oe | L | I | p | k), a |= q[g & 255], g & 256 && (a |= L), We(o, n, g), (g ^ o ^ n) & 16 && (a |= oe), g & 255;
    },
    le = function le(o, n) {
      var g = o - n - (a & L);
      return a &= ~(L | I | p | k), a |= q[g & 255], g & 256 && (a |= L), We(o, n, g), g & 255;
    },
    Ie = function Ie(o, n) {
      var g = o - n;
      a &= ~(L | I | p | k), a |= q[g & 255], g & 256 && (a |= L), We(o, n, g);
    },
    Z = function Z(o, n) {
      var g = o - n;
      a &= ~(L | I | p | k), (g & 65535) == 0 && (a |= I), g & 32768 && (a |= k), g & 65536 && (a |= L), K(o, n, g);
    },
    ee = function ee(o) {
      return a &= ~(L | I | p | k), o == 128 && (a |= p), o = (~o & 255) + 1, o === 0 && (a |= I), o & 128 && (a |= k | L), o;
    },
    se = function se(o) {
      return a &= ~(I | L | k), o & 1 && (a |= L), o >>= 1, o === 0 && (a |= I), o & 255;
    },
    Pe = function Pe(o) {
      return a &= ~(I | L | k), o & 1 && (a |= L), o = o & 128 | o >> 1, a |= q[o], o;
    },
    Re = function Re(o) {
      var n = o;
      return a &= ~(I | L | k | p), o & 128 && (a |= L), o <<= 1, a |= q[o], (o ^ n) & 128 && (a |= p), o;
    },
    Ye = function Ye(o) {
      var n = o,
        g = a & L;
      return a &= ~(I | L | k | p), o & 128 && (a |= L), o = o << 1 | g, a |= q[o], (o ^ n) & 128 && (a |= p), o;
    },
    xe = function xe(o) {
      var n = a & L;
      return a &= ~(I | L | k), o & 1 && (a |= L), o = o >> 1 | n << 7, a |= q[o], o;
    },
    de = function de(o, n) {
      return a &= ~(I | k | p), o ^= n, a |= q[o], o;
    },
    Me = function Me(o, n) {
      return a &= ~(I | k | p), o |= n, a |= q[o], o;
    },
    ke = function ke(o, n) {
      return a &= ~(I | k | p), o &= n, a |= q[o], o;
    },
    Ke = function Ke(o) {
      return a &= ~(I | k | p), o ^= 255, a |= q[o], a |= L, o;
    },
    X = function X() {
      return V * 256 + M();
    },
    je = function je() {
      var o = W,
        n = null,
        g = null,
        s = u,
        t = M();
      switch (W += Ze[t], t) {
        case 0:
          n = X(), _(n, ee(C(n)));
          break;
        case 3:
          n = X(), _(n, Ke(C(n)));
          break;
        case 4:
          n = X(), _(n, se(C(n)));
          break;
        case 6:
          n = X(), _(n, xe(C(n)));
          break;
        case 7:
          n = X(), _(n, Pe(C(n)));
          break;
        case 8:
          n = X(), _(n, Re(C(n)));
          break;
        case 9:
          n = X(), _(n, Ye(C(n)));
          break;
        case 10:
          n = X(), _(n, N(C(n)));
          break;
        case 12:
          n = X(), _(n, w(C(n)));
          break;
        case 13:
          n = X(), g = C(n), a &= ~(I | k | p), a |= q[g];
          break;
        case 14:
          n = X(), u = n;
          break;
        case 15:
          n = X(), _(n, 0), a &= ~(L | k | p), a |= I;
          break;
        case 18:
          break;
        case 19:
          break;
        case 22:
          n = ie(D()), u += n;
          break;
        case 23:
          n = ie(D()), O(u), u += n;
          break;
        case 25:
          var b = 0,
            P = e & 240,
            Le = e & 15;
          (Le > 9 || a & 32) && (b |= 6), P > 128 && Le > 9 && (b |= 96), (P > 144 || a & 1) && (b |= 96), n = b + e, a &= ~(L | k | I | p), n & 256 && (a |= L), e = n & 255, a |= q[e];
          break;
        case 26:
          a |= M();
          break;
        case 28:
          a &= M();
          break;
        case 29:
          e = r & 128 ? 255 : 0, ne(H()), a &= ~p;
          break;
        case 30:
          g = M(), pe(g, !0);
          break;
        case 31:
          g = M(), pe(g, !1);
          break;
        case 32:
          n = ce(M()), u += n;
          break;
        case 33:
          n = ce(M());
          break;
        case 34:
          n = ce(M()), a & (L | I) || (u += n);
          break;
        case 35:
          n = ce(M()), a & (L | I) && (u += n);
          break;
        case 36:
          n = ce(M()), a & L || (u += n);
          break;
        case 37:
          n = ce(M()), a & L && (u += n);
          break;
        case 38:
          n = ce(M()), a & I || (u += n);
          break;
        case 39:
          n = ce(M()), a & I && (u += n);
          break;
        case 40:
          n = ce(M()), a & p || (u += n);
          break;
        case 41:
          n = ce(M()), a & p && (u += n);
          break;
        case 42:
          n = ce(M()), a & k || (u += n);
          break;
        case 43:
          n = ce(M()), a & k && (u += n);
          break;
        case 44:
          n = ce(M()), a & k ^ (a & p) << 2 || (u += n);
          break;
        case 45:
          n = ce(M()), a & k ^ (a & p) << 2 && (u += n);
          break;
        case 46:
          n = ce(M()), a & k ^ (a & p) << 2 || a & I || (u += n);
          break;
        case 47:
          n = ce(M()), (a & k ^ (a & p) << 2 || a & I) && (u += n);
          break;
        case 48:
          c = T(), c === 0 ? a |= I : a &= ~I;
          break;
        case 49:
          l = T(), l === 0 ? a |= I : a &= ~I;
          break;
        case 50:
          d = T();
          break;
        case 51:
          x = T();
          break;
        case 52:
          we(M());
          break;
        case 53:
          ye(M());
          break;
        case 54:
          be(M());
          break;
        case 55:
          ze(M());
          break;
        case 57:
          u = De();
          break;
        case 58:
          c += r;
          break;
        case 59:
          a = Ue(), a & R && (W += 9, e = Ue(), r = Ue(), V = Ue(), c = De(), l = De(), x = De()), u = De();
          break;
        case 60:
          a &= M();
          break;
        case 61:
          n = e * r, n === 0 ? a |= I : a &= ~I, n & 128 ? a |= L : a &= ~L, Ae(n);
          break;
        case 63:
          a |= R, O(u), O(x), O(l), O(c), ue(V), ue(r), ue(e), ue(a), a |= G | A, u = F(z);
          break;
        case 64:
          e = ee(e);
          break;
        case 67:
          e = Ke(e);
          break;
        case 68:
          e = se(e);
          break;
        case 70:
          e = xe(e);
          break;
        case 71:
          e = Pe(e);
          break;
        case 72:
          e = Re(e);
          break;
        case 73:
          e = Ye(e);
          break;
        case 74:
          e = N(e);
          break;
        case 76:
          e = w(e);
          break;
        case 77:
          a &= ~(I | k | p), a |= q[e];
          break;
        case 79:
          e = 0, a &= ~(k | p | L), a |= I;
          break;
        case 80:
          r = ee(r);
          break;
        case 83:
          r = Ke(r);
          break;
        case 84:
          r = se(r);
          break;
        case 86:
          r = xe(r);
          break;
        case 87:
          r = Pe(r);
          break;
        case 88:
          r = Re(r);
          break;
        case 89:
          r = Ye(r);
          break;
        case 90:
          r = N(r);
          break;
        case 92:
          r = w(r);
          break;
        case 93:
          a &= ~(I | k | p), a |= q[r];
          break;
        case 95:
          r = 0, a &= ~(k | p | L), a |= I;
          break;
        case 96:
          n = T(), _(n, ee(C(n)));
          break;
        case 99:
          n = T(), _(n, Ke(C(n)));
          break;
        case 100:
          n = T(), _(n, se(C(n)));
          break;
        case 102:
          n = T(), _(n, xe(C(n)));
          break;
        case 103:
          n = T(), _(n, Pe(C(n)));
          break;
        case 104:
          n = T(), _(n, Re(C(n)));
          break;
        case 105:
          n = T(), _(n, Ye(C(n)));
          break;
        case 106:
          n = T(), _(n, N(C(n)));
          break;
        case 108:
          n = T(), _(n, w(C(n)));
          break;
        case 109:
          n = T(), g = C(n), a &= ~(I | k | p), a |= q[g];
          break;
        case 110:
          n = T(), u = n;
          break;
        case 111:
          n = T(), _(n, 0), a &= ~(L | k | p), a |= I;
          break;
        case 112:
          n = D(), _(n, ee(C(n)));
          break;
        case 115:
          n = D(), _(n, Ke(C(n)));
          break;
        case 116:
          n = D(), _(n, se(C(n)));
          break;
        case 118:
          n = D(), _(n, xe(C(n)));
          break;
        case 119:
          n = D(), _(n, Pe(C(n)));
          break;
        case 120:
          n = D(), _(n, Re(C(n)));
          break;
        case 121:
          n = D(), _(n, Ye(C(n)));
          break;
        case 122:
          n = D(), _(n, N(C(n)));
          break;
        case 124:
          n = D(), _(n, w(C(n)));
          break;
        case 125:
          n = D(), g = C(n), a &= ~(I | k | p), a |= q[g];
          break;
        case 126:
          n = D(), u = n;
          break;
        case 127:
          n = D(), _(n, 0), a &= ~(L | k | p), a |= I;
          break;
        case 128:
          e = _e(e, M());
          break;
        case 129:
          Ie(e, M());
          break;
        case 130:
          e = le(e, M());
          break;
        case 131:
          Ae(Y(H(), D()));
          break;
        case 132:
          e = ke(e, M());
          break;
        case 133:
          ke(e, M());
          break;
        case 134:
          e = M(), a &= ~(I | k | p), a |= q[e];
          break;
        case 136:
          e = de(e, M());
          break;
        case 137:
          e = $(e, M());
          break;
        case 138:
          e = Me(e, M());
          break;
        case 139:
          e = re(e, M());
          break;
        case 140:
          Z(c, D());
          break;
        case 141:
          n = ce(M()), O(u), u += n;
          break;
        case 142:
          c = D(), ne(c), a &= ~p;
          break;
        case 144:
          n = X(), e = _e(e, C(n));
          break;
        case 145:
          n = X(), Ie(e, C(n));
          break;
        case 146:
          n = X(), e = le(e, C(n));
          break;
        case 147:
          n = X(), Ae(Y(H(), F(n)));
          break;
        case 148:
          n = X(), e = ke(e, C(n));
          break;
        case 149:
          n = X(), ke(e, C(n));
          break;
        case 150:
          n = X(), e = C(n), a &= ~(I | k | p), a |= q[e];
          break;
        case 151:
          n = X(), _(n, e), a &= ~(I | k | p), a |= q[e];
          break;
        case 152:
          n = X(), e = de(e, C(n));
          break;
        case 153:
          n = X(), e = $(e, C(n));
          break;
        case 154:
          n = X(), e = Me(e, C(n));
          break;
        case 155:
          n = X(), e = re(e, C(n));
          break;
        case 156:
          n = X(), Z(c, F(n));
          break;
        case 157:
          n = X(), O(u), u = n;
          break;
        case 158:
          n = X(), c = F(n), ne(c), a &= ~p;
          break;
        case 159:
          n = X(), fe(n, c), ne(c), a &= ~p;
          break;
        case 160:
          n = T(), e = _e(e, C(n));
          break;
        case 161:
          n = T(), Ie(e, C(n));
          break;
        case 162:
          n = T(), e = le(e, C(n));
          break;
        case 163:
          n = T(), Ae(Y(H(), F(n)));
          break;
        case 164:
          n = T(), e = ke(e, C(n));
          break;
        case 165:
          n = T(), ke(e, C(n));
          break;
        case 166:
          n = T(), e = C(n), a &= ~(I | k | p), a |= q[e];
          break;
        case 167:
          n = T(), _(n, e), a &= ~(I | k | p), a |= q[e];
          break;
        case 168:
          n = T(), e = de(e, C(n));
          break;
        case 169:
          n = T(), e = $(e, C(n));
          break;
        case 170:
          n = T(), e = Me(e, C(n));
          break;
        case 171:
          n = T(), e = re(e, C(n));
          break;
        case 172:
          n = T(), Z(c, F(n));
          break;
        case 173:
          n = T(), O(u), u = n;
          break;
        case 174:
          n = T(), c = F(n), ne(c), a &= ~p;
          break;
        case 175:
          n = T(), fe(n, c), ne(c), a &= ~p;
          break;
        case 176:
          n = D(), e = _e(e, C(n));
          break;
        case 177:
          n = D(), Ie(e, C(n));
          break;
        case 178:
          n = D(), e = le(e, C(n));
          break;
        case 179:
          n = D(), Ae(Y(H(), F(n)));
          break;
        case 180:
          n = D(), e = ke(e, C(n));
          break;
        case 181:
          n = D(), ke(e, C(n));
          break;
        case 182:
          n = D(), e = C(n), a &= ~(I | k | p), a |= q[e];
          break;
        case 183:
          n = D(), _(n, e), a &= ~(I | k | p), a |= q[e];
          break;
        case 184:
          n = D(), e = de(e, C(n));
          break;
        case 185:
          n = D(), e = $(e, C(n));
          break;
        case 186:
          n = D(), e = Me(e, C(n));
          break;
        case 187:
          n = D(), e = re(e, C(n));
          break;
        case 188:
          n = D(), Z(c, F(n));
          break;
        case 189:
          n = D(), O(u), u = n;
          break;
        case 190:
          n = D(), c = F(n), ne(c), a &= ~p;
          break;
        case 191:
          n = D(), fe(n, c), ne(c), a &= ~p;
          break;
        case 192:
          r = _e(r, M());
          break;
        case 193:
          Ie(r, M());
          break;
        case 194:
          r = le(r, M());
          break;
        case 195:
          Ae(ve(H(), D()));
          break;
        case 196:
          r = ke(r, M());
          break;
        case 197:
          ke(r, M());
          break;
        case 198:
          r = M(), a &= ~(I | k | p), a |= q[r];
          break;
        case 200:
          r = de(r, M());
          break;
        case 201:
          r = $(r, M());
          break;
        case 202:
          r = Me(r, M());
          break;
        case 203:
          r = re(r, M());
          break;
        case 204:
          n = D(), Ae(n), ne(n), a &= ~p;
          break;
        case 206:
          x = D(), ne(x), a &= ~p;
          break;
        case 208:
          n = X(), r = _e(r, C(n));
          break;
        case 209:
          n = X(), Ie(r, C(n));
          break;
        case 210:
          n = X(), r = le(r, C(n));
          break;
        case 211:
          n = X(), Ae(ve(H(), F(n)));
          break;
        case 212:
          n = X(), r = ke(r, C(n));
          break;
        case 213:
          n = X(), ke(r, C(n));
          break;
        case 214:
          n = X(), r = C(n), a &= ~(I | k | p), a |= q[r];
          break;
        case 215:
          n = X(), _(n, r), a &= ~(I | k | p), a |= q[r];
          break;
        case 216:
          n = X(), r = de(r, C(n));
          break;
        case 217:
          n = X(), r = $(r, C(n));
          break;
        case 218:
          n = X(), r = Me(r, C(n));
          break;
        case 219:
          n = X(), r = re(r, C(n));
          break;
        case 220:
          n = X(), g = F(n), Ae(g), ne(g), a &= ~p;
          break;
        case 221:
          n = X(), fe(n, H()), a &= ~p;
          break;
        case 222:
          n = X(), x = F(n), ne(x), a &= ~p;
          break;
        case 223:
          n = X(), fe(n, x), ne(x), a &= ~p;
          break;
        case 224:
          n = T(), r = _e(r, C(n));
          break;
        case 225:
          n = T(), Ie(r, C(n));
          break;
        case 226:
          n = T(), r = le(r, C(n));
          break;
        case 227:
          n = T(), Ae(ve(H(), F(n)));
          break;
        case 228:
          n = T(), r = ke(r, C(n));
          break;
        case 229:
          n = T(), ke(r, C(n));
          break;
        case 230:
          n = T(), r = C(n), a &= ~(I | k | p), a |= q[r];
          break;
        case 231:
          n = T(), _(n, r), a &= ~(I | k | p), a |= q[r];
          break;
        case 232:
          n = T(), r = de(r, C(n));
          break;
        case 233:
          n = T(), r = $(r, C(n));
          break;
        case 234:
          n = T(), r = Me(r, C(n));
          break;
        case 235:
          n = T(), r = re(r, C(n));
          break;
        case 236:
          n = T(), g = F(n), Ae(g), ne(g), a &= ~p;
          break;
        case 237:
          n = T(), fe(n, H()), a &= ~p;
          break;
        case 238:
          n = T(), x = F(n), ne(x), a &= ~p;
          break;
        case 239:
          n = T(), fe(n, x), ne(x), a &= ~p;
          break;
        case 240:
          n = D(), r = _e(r, C(n));
          break;
        case 241:
          n = D(), Ie(r, C(n));
          break;
        case 242:
          n = D(), r = le(r, C(n));
          break;
        case 243:
          n = D(), Ae(ve(H(), F(n)));
          break;
        case 244:
          n = D(), r = ke(r, C(n));
          break;
        case 245:
          n = D(), ke(r, C(n));
          break;
        case 246:
          n = D(), r = C(n), a &= ~(I | k | p), a |= q[r];
          break;
        case 247:
          n = D(), _(n, r), a &= ~(I | k | p), a |= q[r];
          break;
        case 248:
          n = D(), r = de(r, C(n));
          break;
        case 249:
          n = D(), r = $(r, C(n));
          break;
        case 250:
          n = D(), r = Me(r, C(n));
          break;
        case 251:
          n = D(), r = re(r, C(n));
          break;
        case 252:
          n = D(), g = F(n), Ae(g), ne(g), a &= ~p;
          break;
        case 253:
          n = D(), fe(n, H()), a &= ~p;
          break;
        case 254:
          n = D(), x = F(n), ne(x), a &= ~p;
          break;
        case 255:
          n = D(), fe(n, x), ne(x), a &= ~p;
          break;
        case 16:
          switch (t = M(), W += te[t], t) {
            case 33:
              n = ie(D());
              break;
            case 34:
              n = ie(D()), a & (L | I) || (u += n);
              break;
            case 35:
              n = ie(D()), a & (L | I) && (u += n);
              break;
            case 36:
              n = ie(D()), a & L || (u += n);
              break;
            case 37:
              n = ie(D()), a & L && (u += n);
              break;
            case 38:
              n = ie(D()), a & I || (u += n);
              break;
            case 39:
              n = ie(D()), a & I && (u += n);
              break;
            case 40:
              n = ie(D()), a & p || (u += n);
              break;
            case 41:
              n = ie(D()), a & p && (u += n);
              break;
            case 42:
              n = ie(D()), a & k || (u += n);
              break;
            case 43:
              n = ie(D()), a & k && (u += n);
              break;
            case 44:
              n = ie(D()), a & k ^ (a & p) << 2 || (u += n);
              break;
            case 45:
              n = ie(D()), a & k ^ (a & p) << 2 && (u += n);
              break;
            case 46:
              n = ie(D()), a & k ^ (a & p) << 2 || a & I || (u += n);
              break;
            case 47:
              n = ie(D()), (a & k ^ (a & p) << 2 || a & I) && (u += n);
              break;
            case 63:
              a |= R, O(u), O(x), O(l), O(c), ue(V), ue(r), ue(e), ue(a), a |= G | A, u = F(ge);
              break;
            case 131:
              Z(H(), D());
              break;
            case 140:
              Z(l, D());
              break;
            case 142:
              l = D(), ne(l), a &= ~p;
              break;
            case 147:
              n = X(), Z(H(), F(n));
              break;
            case 156:
              n = X(), Z(l, F(n));
              break;
            case 158:
              n = X(), l = F(n), ne(l), a &= ~p;
              break;
            case 159:
              n = X(), fe(n, l), ne(l), a &= ~p;
              break;
            case 163:
              n = T(), Z(H(), F(n));
              break;
            case 172:
              n = T(), Z(l, F(n));
              break;
            case 174:
              n = T(), l = F(n), ne(l), a &= ~p;
              break;
            case 175:
              n = T(), fe(n, l), ne(l), a &= ~p;
              break;
            case 179:
              n = D(), Z(H(), F(n));
              break;
            case 188:
              n = D(), Z(l, F(n));
              break;
            case 190:
              n = D(), l = F(n), ne(l), a &= ~p;
              break;
            case 191:
              n = D(), fe(n, l), ne(l), a &= ~p;
              break;
            case 206:
              d = D(), ne(d), a &= ~p;
              break;
            case 222:
              n = X(), d = F(n), ne(d), a &= ~p;
              break;
            case 223:
              n = X(), fe(n, d), ne(d), a &= ~p;
              break;
            case 238:
              n = T(), d = F(n), ne(d), a &= ~p;
              break;
            case 239:
              n = T(), fe(n, d), ne(d), a &= ~p;
              break;
            case 254:
              n = D(), d = F(n), ne(d), a &= ~p;
              break;
            case 255:
              n = D(), fe(n, d), ne(d), a &= ~p;
              break;
          }
          break;
        case 17:
          switch (t = M(), W += te[t], t) {
            case 63:
              a |= R, O(u), O(x), O(l), O(c), ue(V), ue(r), ue(e), ue(a), a |= G | A, u = F(Fe);
              break;
            case 131:
              Z(x, D());
              break;
            case 140:
              Z(d, D());
              break;
            case 147:
              n = X(), Z(x, F(n));
              break;
            case 156:
              n = X(), Z(d, F(n));
              break;
            case 163:
              n = T(), Z(x, F(n));
              break;
            case 172:
              n = T(), Z(d, F(n));
              break;
            case 179:
              n = D(), Z(x, F(n));
              break;
            case 188:
              n = D(), Z(d, F(n));
              break;
          }
          break;
      }
      return e &= 255, r &= 255, a &= 255, V &= 255, c &= 65535, l &= 65535, x &= 65535, d &= 65535, u &= 65535, W - o;
    },
    Qe = function Qe() {
      u = F(E), V = 0, a |= A | G, W = 0, e = r = V = c = l = x = d = 0;
    },
    e0 = [[2, 1, "NEG"], [1, 0, "???"], [1, 0, "???"], [2, 1, "COM"], [2, 1, "LSR"], [1, 0, "???"], [2, 1, "ROR"], [2, 1, "ASR"], [2, 1, "LSL"], [2, 1, "ROL"], [2, 1, "DEC"], [1, 0, "???"], [2, 1, "INC"], [2, 1, "TST"], [2, 1, "JMP"], [2, 1, "CLR"], [1, 0, "Prefix"], [1, 0, "Prefix"], [1, 2, "NOP"], [1, 2, "SYNC"], [1, 0, "???"], [1, 0, "???"], [3, 3, "LBRA"], [3, 3, "LBSR"], [1, 0, "???"], [1, 2, "DAA"], [2, 4, "ORCC"], [1, 0, "???"], [2, 4, "ANDCC"], [1, 2, "SEX"], [2, 20, "EXG"], [2, 20, "TFR"], [2, 5, "BRA"], [2, 5, "BRN"], [2, 5, "BHI"], [2, 5, "BLS"], [2, 5, "BCC"], [2, 5, "BCS"], [2, 5, "BNE"], [2, 5, "BEQ"], [2, 5, "BVC"], [2, 5, "BVS"], [2, 5, "BPL"], [2, 5, "BMI"], [2, 5, "BGE"], [2, 5, "BLT"], [2, 5, "BGT"], [2, 5, "BLE"], [2, 6, "LEAX"], [2, 6, "LEAY"], [2, 6, "LEAS"], [2, 6, "LEAU"], [2, 10, "PSHS"], [2, 10, "PULS"], [2, 11, "PSHU"], [2, 11, "PULU"], [1, 0, "???"], [1, 2, "RTS"], [1, 2, "ABX"], [1, 2, "RTI"], [2, 2, "CWAI"], [1, 2, "MUL"], [1, 2, "RESET"], [1, 2, "SWI1"], [1, 2, "NEGA"], [1, 0, "???"], [1, 0, "???"], [1, 2, "COMA"], [1, 2, "LSRA"], [1, 0, "???"], [1, 2, "RORA"], [1, 2, "ASRA"], [1, 2, "ASLA"], [1, 2, "ROLA"], [1, 2, "DECA"], [1, 0, "???"], [1, 2, "INCA"], [1, 2, "TSTA"], [1, 0, "???"], [1, 2, "CLRA"], [1, 2, "NEGB"], [1, 0, "???"], [1, 0, "???"], [1, 2, "COMB"], [1, 2, "LSRB"], [1, 0, "???"], [1, 2, "RORB"], [1, 2, "ASRB"], [1, 2, "ASLB"], [1, 2, "ROLB"], [1, 2, "DECB"], [1, 0, "???"], [1, 2, "INCB"], [1, 2, "TSTB"], [1, 0, "???"], [1, 2, "CLRB"], [2, 6, "NEG"], [1, 0, "???"], [1, 0, "???"], [2, 6, "COM"], [2, 6, "LSR"], [1, 0, "???"], [2, 6, "ROR"], [2, 6, "ASR"], [2, 6, "LSL"], [2, 6, "ROL"], [2, 6, "DEC"], [1, 0, "???"], [2, 6, "INC"], [2, 6, "TST"], [2, 6, "JMP"], [2, 6, "CLR"], [3, 7, "NEG"], [1, 0, "???"], [1, 0, "???"], [3, 7, "COM"], [3, 7, "LSR"], [1, 0, "???"], [3, 7, "ROR"], [3, 7, "ASR"], [3, 7, "LSL"], [3, 7, "ROL"], [3, 7, "DEC"], [1, 0, "???"], [3, 7, "INC"], [3, 7, "TST"], [3, 7, "JMP"], [3, 7, "CLR"], [2, 4, "SUBA"], [2, 4, "CMPA"], [2, 4, "SBCA"], [3, 8, "SUBD"], [2, 4, "ANDA"], [2, 4, "BITA"], [2, 4, "LDA"], [1, 0, "???"], [2, 4, "EORA"], [2, 4, "ADCA"], [2, 4, "ORA"], [2, 4, "ADDA"], [3, 8, "CMPX"], [2, 5, "BSR"], [3, 8, "LDX"], [1, 0, "???"], [2, 1, "SUBA"], [2, 1, "CMPA"], [2, 1, "SBCA"], [2, 1, "SUBd"], [2, 1, "ANDA"], [2, 1, "BITA"], [2, 1, "LDA"], [2, 1, "STA"], [2, 1, "EORA"], [2, 1, "ADCA"], [2, 1, "ORA"], [2, 1, "ADDA"], [2, 1, "CMPX"], [2, 1, "JSR"], [2, 1, "LDX"], [2, 1, "STX"], [2, 6, "SUBA"], [2, 6, "CMPA"], [2, 6, "SBCA"], [2, 6, "SUBD"], [2, 6, "ANDA"], [2, 6, "BITA"], [2, 6, "LDA"], [2, 6, "STA"], [2, 6, "EORA"], [2, 6, "ADCA"], [2, 6, "ORA"], [2, 6, "ADDA"], [2, 6, "CMPX"], [2, 6, "JSR"], [2, 6, "LDX"], [2, 6, "STX"], [3, 7, "SUBA"], [3, 7, "CMPA"], [3, 7, "SBCA"], [3, 7, "SUBD"], [3, 7, "ANDA"], [3, 7, "BITA"], [3, 7, "LDA"], [3, 7, "STA"], [3, 7, "EORA"], [3, 7, "ADCA"], [3, 7, "ORA"], [3, 7, "ADDA"], [3, 7, "CMPX"], [3, 7, "JSR"], [3, 7, "LDX"], [3, 7, "STX"], [2, 4, "SUBB"], [2, 4, "CMPB"], [2, 4, "SBCB"], [3, 8, "ADDD"], [2, 4, "ANDB"], [2, 4, "BITB"], [2, 4, "LDB"], [1, 0, "???"], [2, 4, "EORB"], [2, 4, "ADCB"], [2, 4, "ORB"], [2, 4, "ADDB"], [3, 8, "LDD"], [1, 0, "???"], [3, 8, "LDU"], [1, 0, "???"], [2, 1, "SUBB"], [2, 1, "CMPB"], [2, 1, "SBCB"], [2, 1, "ADDD"], [2, 1, "ANDB"], [2, 1, "BITB"], [2, 1, "LDB"], [2, 1, "STB"], [2, 1, "EORB"], [2, 1, "ADCB"], [2, 1, "ORB "], [2, 1, "ADDB"], [2, 1, "LDD "], [2, 1, "STD "], [2, 1, "LDU "], [2, 1, "STU "], [2, 6, "SUBB"], [2, 6, "CMPB"], [2, 6, "SBCB"], [2, 6, "ADDD"], [2, 6, "ANDB"], [2, 6, "BITB"], [2, 6, "LDB"], [2, 6, "STB"], [2, 6, "EORB"], [2, 6, "ADCB"], [2, 6, "ORB"], [2, 6, "ADDB"], [2, 6, "LDD"], [2, 6, "STD"], [2, 6, "LDU"], [2, 6, "STU"], [3, 7, "SUBB"], [3, 7, "CMPB"], [3, 7, "SBCB"], [3, 7, "ADDD"], [3, 7, "ANDB"], [3, 7, "BITB"], [3, 7, "LDB"], [3, 7, "STB"], [3, 7, "EORB"], [3, 7, "ADCB"], [3, 7, "ORB"], [3, 7, "ADDB"], [3, 7, "LDD"], [3, 7, "STD"], [3, 7, "LDU"], [3, 7, "STU"]],
    S = {
      63: [2, 2, "SWI3"],
      131: [4, 8, "CMPU"],
      140: [4, 8, "CMPS"],
      147: [3, 1, "CMPU"],
      156: [3, 1, "CMPS"],
      163: [3, 6, "CMPU"],
      172: [3, 6, "CMPS"],
      179: [4, 7, "CMPU"],
      188: [4, 7, "CMPS"]
    },
    y = {
      33: [5, 3, "LBRN"],
      34: [5, 3, "LBHI"],
      35: [5, 3, "LBLS"],
      36: [5, 3, "LBCC"],
      37: [5, 3, "LBCS"],
      38: [5, 3, "LBNE"],
      39: [5, 3, "LBEQ"],
      40: [5, 3, "LBVC"],
      41: [5, 3, "LBVS"],
      42: [5, 3, "LBPL"],
      43: [5, 3, "LBMI"],
      44: [5, 3, "LBGE"],
      45: [5, 3, "LBLT"],
      46: [5, 3, "LBGT"],
      47: [5, 3, "LBLE"],
      63: [2, 2, "SWI2"],
      131: [4, 8, "CMPD"],
      140: [4, 8, "CMPY"],
      142: [4, 8, "LDY"],
      147: [3, 1, "CMPD"],
      156: [3, 1, "CMPY"],
      158: [3, 1, "LDY"],
      159: [3, 1, "STY"],
      163: [3, 6, "CMPD"],
      172: [3, 6, "CMPY"],
      174: [3, 6, "LDY"],
      175: [3, 6, "STY"],
      179: [4, 7, "CMPD"],
      188: [4, 7, "CMPY"],
      190: [4, 7, "LDY"],
      191: [4, 7, "STY"],
      206: [4, 8, "LDS"],
      222: [3, 1, "LDS"],
      223: [3, 1, "STS"],
      238: [3, 6, "LDS"],
      239: [3, 6, "STS"],
      254: [4, 7, "LDS"],
      255: [4, 7, "STS"]
    },
    B = function B(o, n, g, s, t, b) {
      var P = function P(m0, J0) {
          for (var k0 = m0.toString(16); k0.length < J0;) {
            k0 = "0" + k0;
          }
          return k0.toUpperCase();
        },
        Le = function Le(m0) {
          return P(m0 & 255, 2);
        },
        Je = function Je(m0) {
          return P(m0, 4);
        },
        Oe,
        r0,
        qe,
        t0 = e0[o];
      if (o === 16) {
        if (t0 = y[n], t0 === void 0) return ["???", 2];
        o = n, n = g, g = s, s = t;
      }
      if (o === 17) {
        if (t0 = S[n], t0 === void 0) return ["???", 2];
        o = n, n = g, g = s, s = t;
      }
      var $e = t0[0],
        j0 = t0[1],
        J = t0[2];
      switch (j0) {
        case 0:
          break;
        case 1:
          J += "	$" + Le(n);
          break;
        case 2:
          break;
        case 3:
          J += "	#$" + Je(n * 256 + g < 32768 ? n * 256 + g + b : n * 256 + g + b - 65536);
          break;
        case 4:
          J += "	#$" + Le(n);
          break;
        case 5:
          J += "	#$" + Je(n < 128 ? n + b + 2 : n + b - 254);
          break;
        case 6:
          J += "	";
          var l0 = n,
            Te = ["X", "Y", "U", "S"][(l0 & 96) >> 5];
          if (!(l0 & 128)) {
            var p0 = l0 & 31;
            p0 > 15 && (p0 = p0 - 32), J += p0 + "," + Te;
            break;
          }
          var $0 = l0 & 16,
            O0 = l0 & 15,
            _0 = g > 127 ? g - 256 : g,
            P0 = g * 256 + s > 32767 ? g * 256 + s - 65536 : g * 256 + s;
          if ($0) switch (O0) {
            case 0:
              J += "???";
              break;
            case 1:
              J += "[," + Te + "++]";
              break;
            case 2:
              J += "???";
              break;
            case 3:
              J += "[,--" + Te + "]";
              break;
            case 4:
              J += "[," + Te + "]";
              break;
            case 5:
              J += "[B," + Te + "]";
              break;
            case 6:
              J += "[A," + Te + "]";
              break;
            case 7:
              J += "???";
              break;
            case 8:
              J += "[" + _0 + "," + Te + "]", $e++;
              break;
            case 9:
              J += "[" + P0 + "," + Te + "]", $e += 2;
              break;
            case 10:
              J += "???";
              break;
            case 11:
              J += "[D," + Te + "]";
              break;
            case 12:
              J += "[" + _0 + ",PC]", $e++;
              break;
            case 13:
              J += "[" + P0 + ",PC]", $e += 2;
              break;
            case 14:
              J += "???";
              break;
            case 15:
              J += "[$" + Je(g * 256 + s) + "]", $e += 2;
              break;
          } else switch (O0) {
            case 0:
              J += "," + Te + "+";
              break;
            case 1:
              J += "," + Te + "++";
              break;
            case 2:
              J += ",-" + Te;
              break;
            case 3:
              J += ",--" + Te;
              break;
            case 4:
              J += "," + Te;
              break;
            case 5:
              J += "B," + Te;
              break;
            case 6:
              J += "A," + Te;
              break;
            case 7:
              J += "???";
              break;
            case 8:
              J += _0 + "," + Te, $e++;
              break;
            case 9:
              J += P0 + "," + Te, $e += 2;
              break;
            case 10:
              J += "???";
              break;
            case 11:
              J += "D," + Te;
              break;
            case 12:
              J += _0 + ",PC", $e++;
              break;
            case 13:
              J += P0 + ",PC", $e += 2;
              break;
            case 14:
              J += "???";
              break;
            case 15:
              J += "$" + Je(g * 256 + s), $e += 2;
              break;
          }
          break;
        case 7:
          J += "	$" + Je(n * 256 + g);
          break;
        case 8:
          J += "	#$" + Je(n * 256 + g);
          break;
        case 10:
          for (Oe = ["PC", "U", "Y", "X", "DP", "B", "A", "CC"], r0 = [], qe = 0; qe < 8; qe++) {
            (n & 1) != 0 && r0.push(Oe[7 - qe]), n >>= 1;
          }
          J += "	" + r0.join(",");
          break;
        case 11:
          for (Oe = ["PC", "S", "Y", "X", "DP", "B", "A", "CC"], r0 = [], qe = 0; qe < 8; qe++) {
            (n & 1) != 0 && r0.push(Oe[7 - qe]), n >>= 1;
          }
          J += "	" + r0.join(",");
          break;
        case 20:
          Oe = ["D", "X", "Y", "U", "S", "PC", "?", "?", "A", "B", "CC", "DP", "?", "?", "?", "?"], J += "	" + Oe[n >> 4] + "," + Oe[n & 15];
          break;
      }
      return {
        line: J,
        nbytes: $e
      };
    };
  return {
    steps: function steps(o) {
      for (; o > 0;) {
        o -= je();
      }
    },
    runFrame: function runFrame(o) {
      for (; W < o;) {
        je();
      }
    },
    advanceInsn: function advanceInsn() {
      return je();
    },
    T: function T() {
      return W;
    },
    getTstates: function getTstates() {
      return W;
    },
    setTstates: function setTstates(o) {
      W = o;
    },
    reset: Qe,
    init: function init(o, n, g) {
      _ = o, C = n, h = g, Qe();
    },
    getPC: function getPC() {
      return u;
    },
    getSP: function getSP() {
      return d;
    },
    saveState: function saveState() {
      return {
        PC: u,
        SP: d,
        U: x,
        A: e,
        B: r,
        X: c,
        Y: l,
        DP: V,
        CC: a,
        T: W
      };
    },
    loadState: function loadState(o) {
      u = o.PC, d = o.SP, x = o.U, e = o.A, r = o.B, c = o.X, l = o.Y, V = o.DP, a = o.CC, W = o.T;
    },
    firq: function firq() {
      a & A || (O(u), a &= ~R, ue(a), a |= G | A, u = F(f), W += 9);
    },
    interrupt: function interrupt() {
      a & G || (O(u), O(x), O(l), O(c), ue(V), ue(r), ue(e), a |= R, ue(a), a |= G, u = F(i), W += 18);
    },
    nmi: function nmi() {
      O(u), O(x), O(l), O(c), ue(V), ue(r), ue(e), a |= R, ue(a), a |= G | A, u = F(U), W += 18;
    },
    set: function set(o, n) {
      switch (o.toUpperCase()) {
        case "PC":
          u = n;
          return;
        case "A":
          e = n;
          return;
        case "B":
          r = n;
          return;
        case "X":
          c = n;
          return;
        case "Y":
          l = n;
          return;
        case "SP":
          d = n;
          return;
        case "U":
          x = n;
          return;
        case "FLAGS":
          a = n;
          return;
      }
    },
    flagsToString: function flagsToString() {
      for (var o = "", n = "EFHINZVC", g = 0; g < 8; g++) {
        var s = a & 128 >> g;
        s === 0 ? o += n[g].toLowerCase() : o += n[g];
      }
      return o;
    },
    disasm: B,
    isStable: function isStable() {
      return !0;
    }
  };
}
var st = function st() {
    var h = this;
    this.powerOn = function () {
      this.reset();
    }, this.powerOff = function () {}, this.clockPulse = function () {
      !r || (G++, A[G]());
    }, this.connectBus = function (m) {
      e = m;
    }, this.setRDY = function (m) {
      r = m;
    }, this.isRDY = function () {
      return r;
    }, this.reset = function () {
      p = 1, G = -1, A = [K], c = e.read(W) | e.read(W + 1) << 8, this.setRDY(!0);
    };
    var e,
      r = !1,
      c = 0,
      l = 0,
      x = 0,
      d = 0,
      u = 0,
      a = 0,
      V = 0,
      L = 0,
      p = 0,
      I = 0,
      k = 0,
      G = -1,
      oe = -1,
      A,
      R = 0,
      E = 0,
      U = 0,
      z = !1,
      i = 0,
      f = 0,
      ge = 0;
    var Fe = 65530,
      W = 65532,
      Be = 65534,
      _ = 0,
      C = 1,
      Ze = 7,
      te = 6,
      q = 1,
      We = 0;
    this.debug = !1, this.trace = !1;
    var K = function K() {
        oe = e.read(c), A = t[oe], G = 0, c++;
      },
      H = K,
      Ae = function Ae() {
        e.read(c);
      },
      ue = function ue() {
        f = e.read(c), c++;
      },
      O = function O() {
        E = e.read(c), c++;
      },
      Xe = function Xe() {
        E |= e.read(c) << 8, c++;
      },
      Ve = function Ve() {
        E = e.read(U);
      },
      Ue = function Ue() {
        E |= e.read(U) << 8;
      },
      De = function De() {
        U = e.read(c), c++;
      },
      Q = function Q() {
        U |= e.read(c) << 8, c++;
      },
      me = function me() {
        U = e.read(i);
      },
      we = function we() {
        U |= e.read(i) << 8;
      },
      be = function be() {
        var m = (U & 255) + d;
        z = m > 255, U = U & 65280 | m & 255;
      },
      ye = function ye() {
        var m = (U & 255) + u;
        z = m > 255, U = U & 65280 | m & 255;
      },
      ze = function ze() {
        var m = (U & 255) + 1;
        z = m > 255, U = U & 65280 | m & 255;
      },
      Ne = function Ne() {
        z && (U = U + 256 & 65535);
      },
      He = function He() {
        i = e.read(c), c++;
      },
      pe = function pe() {
        i |= e.read(c) << 8, c++;
      },
      ce = function ce() {
        var m = (i & 255) + 1;
        i = i & 65280 | m & 255;
      },
      ie = function ie() {
        R = e.read(c), c++;
      },
      M = function M() {
        R = e.read(E);
      },
      D = function D() {
        R = e.read(U);
      },
      F = function F() {
        e.write(E, R);
      },
      fe = function fe() {
        e.write(U, R);
      },
      T = function T() {
        var m = c & 255,
          v = m + f & 255;
        f > 127 ? ge = v > m ? -256 : 0 : ge = v < m ? 256 : 0, c = c & 65280 | v;
      },
      ne = function ne() {
        c = c + ge & 65535;
      },
      w = function w(m) {
        I = m === 0 ? 1 : 0;
      },
      N = function N(m) {
        a = m & 128 ? 1 : 0;
      },
      _e = function _e(m) {
        V = m ? 1 : 0;
      },
      Y = function Y(m) {
        k = m ? 1 : 0;
      },
      re = function re() {
        return l = l + 1 & 255, e.read(256 + l);
      },
      ve = function ve() {
        return e.read(256 + l);
      },
      $ = function $(m) {
        e.write(256 + l, m), l = l - 1 & 255;
      },
      le = function le() {
        return a << 7 | V << 6 | 48 | L << 3 | p << 2 | I << 1 | k;
      },
      Ie = function Ie(m) {
        a = m >>> 7, V = m >>> 6 & 1, L = m >>> 3 & 1, p = m >>> 2 & 1, I = m >>> 1 & 1, k = m & 1;
      },
      Z = function Z(m) {
        h.debug && h.breakpoint("Illegal Opcode: " + m);
      },
      ee = function ee(m) {
        return [K, Ae, function () {
          m(), H();
        }];
      },
      se = function se(m) {
        return [K, ie, function () {
          m(), H();
        }];
      },
      Pe = function Pe(m) {
        return [K, O, M, function () {
          m(), H();
        }];
      },
      Re = function Re(m) {
        return [K, O, Xe, M, function () {
          m(), H();
        }];
      },
      Ye = function Ye(m) {
        return [K, De, D, function () {
          be(), Ve();
        }, function () {
          ze(), Ue();
        }, M, function () {
          m(), H();
        }];
      },
      xe = function xe(m) {
        var v = m === _ ? be : ye;
        return function (j) {
          return [K, De, Q, function () {
            v(), D(), Ne();
          }, function () {
            z ? D() : (j(), H());
          }, function () {
            j(), H();
          }];
        };
      },
      de = function de(m) {
        var v = m === _ ? be : ye;
        return function (j) {
          return [K, De, D, function () {
            v(), D();
          }, function () {
            j(), H();
          }];
        };
      },
      Me = function Me(m) {
        return [K, He, me, function () {
          ce(), we();
        }, function () {
          ye(), D(), Ne();
        }, function () {
          z ? D() : (m(), H());
        }, function () {
          m(), H();
        }];
      },
      ke = function ke(m) {
        return [K, O, function () {
          m(), F();
        }, H];
      },
      Ke = function Ke(m) {
        return [K, O, Xe, function () {
          m(), F();
        }, H];
      },
      X = function X(m) {
        return [K, De, D, function () {
          be(), Ve();
        }, function () {
          ze(), Ue();
        }, function () {
          m(), F();
        }, H];
      },
      je = function je(m) {
        var v = m === _ ? be : ye;
        return function (j) {
          return [K, De, Q, function () {
            v(), D(), Ne();
          }, function () {
            j(), fe();
          }, H];
        };
      },
      Qe = function Qe(m) {
        var v = m === _ ? be : ye;
        return function (j) {
          return [K, De, D, function () {
            v(), j(), fe();
          }, H];
        };
      },
      e0 = function e0(m) {
        return [K, He, me, function () {
          ce(), we();
        }, function () {
          ye(), D(), Ne();
        }, function () {
          m(), fe();
        }, H];
      },
      S = function S(m) {
        return [K, O, M, F, function () {
          m(), F();
        }, H];
      },
      y = function y(m) {
        return [K, O, Xe, M, F, function () {
          m(), F();
        }, H];
      },
      B = function B(m) {
        var v = m === _ ? be : ye;
        return function (j) {
          return [K, De, D, function () {
            v(), D();
          }, fe, function () {
            j(), fe();
          }, H];
        };
      },
      o = function o(m) {
        var v = m === _ ? be : ye;
        return function (j) {
          return [K, De, Q, function () {
            v(), D(), Ne();
          }, D, fe, function () {
            j(), fe();
          }, H];
        };
      },
      n = function n(m) {
        return [K, De, D, function () {
          be(), Ve();
        }, function () {
          ze(), Ue();
        }, M, F, function () {
          m(), F();
        }, H];
      },
      g = function g(m) {
        return [K, He, me, function () {
          ce(), we();
        }, function () {
          ye(), D(), Ne();
        }, D, fe, function () {
          m(), fe();
        }, H];
      },
      s = new Array(256),
      t = new Array(256);
    s[0] = "BRK", t[0] = Qt(), s[1] = "ORA", t[1] = x0(Ye), s[2] = "uKIL", t[2] = Ge(), s[3] = "uSLO", t[3] = S0(n), s[4] = "uNOP", t[4] = Ce(Pe), s[5] = "ORA", t[5] = x0(Pe), s[6] = "ASL", t[6] = w0(S), s[7] = "uSLO", t[7] = S0(S), s[8] = "PHP", t[8] = jt(), s[9] = "ORA", t[9] = x0(se), s[10] = "ASL", t[10] = b(), s[11] = "uANC", t[11] = ot(se), s[12] = "uNOP", t[12] = Ce(Re), s[13] = "ORA", t[13] = x0(Re), s[14] = "ASL", t[14] = w0(y), s[15] = "uSLO", t[15] = S0(y), s[16] = "BPL", t[16] = u0(Ze, 0), s[17] = "ORA", t[17] = x0(Me), s[18] = "uKIL", t[18] = Ge(), s[19] = "uSLO", t[19] = S0(g), s[20] = "uNOP", t[20] = Ce(de(_)), s[21] = "ORA", t[21] = x0(de(_)), s[22] = "ASL", t[22] = w0(B(_)), s[23] = "uSLO", t[23] = S0(B(_)), s[24] = "CLC", t[24] = P(), s[25] = "ORA", t[25] = x0(xe(C)), s[26] = "uNOP", t[26] = Ce(ee), s[27] = "uSLO", t[27] = S0(o(C)), s[28] = "uNOP", t[28] = Ce(xe(_)), s[29] = "ORA", t[29] = x0(xe(_)), s[30] = "ASL", t[30] = w0(o(_)), s[31] = "uSLO", t[31] = S0(o(_)), s[32] = "JSR", t[32] = Gt(), s[33] = "AND", t[33] = i0(Ye), s[34] = "uKIL", t[34] = Ge(), s[35] = "uRLA", t[35] = A0(n), s[36] = "BIT", t[36] = ut(Pe), s[37] = "AND", t[37] = i0(Pe), s[38] = "ROL", t[38] = F0(S), s[39] = "uRLA", t[39] = A0(S), s[40] = "PLP", t[40] = Jt(), s[41] = "AND", t[41] = i0(se), s[42] = "ROL", t[42] = l0(), s[43] = "uANC", t[43] = ot(se), s[44] = "BIT", t[44] = ut(Re), s[45] = "AND", t[45] = i0(Re), s[46] = "ROL", t[46] = F0(y), s[47] = "uRLA", t[47] = A0(y), s[48] = "BMI", t[48] = u0(Ze, 1), s[49] = "AND", t[49] = i0(Me), s[50] = "uKIL", t[50] = Ge(), s[51] = "uRLA", t[51] = A0(g), s[52] = "uNOP", t[52] = Ce(de(_)), s[53] = "AND", t[53] = i0(de(_)), s[54] = "ROL", t[54] = F0(B(_)), s[55] = "uRLA", t[55] = A0(B(_)), s[56] = "SEC", t[56] = p0(), s[57] = "AND", t[57] = i0(xe(C)), s[58] = "uNOP", t[58] = Ce(ee), s[59] = "uRLA", t[59] = A0(o(C)), s[60] = "uNOP", t[60] = Ce(xe(_)), s[61] = "AND", t[61] = i0(xe(_)), s[62] = "ROL", t[62] = F0(o(_)), s[63] = "uRLA", t[63] = A0(o(_)), s[64] = "RTI", t[64] = tn(), s[65] = "EOR", t[65] = c0(Ye), s[66] = "uKIL", t[66] = Ge(), s[67] = "uSRE", t[67] = C0(n), s[68] = "uNOP", t[68] = Ce(Pe), s[69] = "EOR", t[69] = c0(Pe), s[70] = "LSR", t[70] = T0(S), s[71] = "uSRE", t[71] = C0(S), s[72] = "PHA", t[72] = Kt(), s[73] = "EOR", t[73] = c0(se), s[74] = "LSR", t[74] = j0(), s[75] = "uASR", t[75] = Ht(se), s[76] = "JMP", t[76] = rn(), s[77] = "EOR", t[77] = c0(Re), s[78] = "LSR", t[78] = T0(y), s[79] = "uSRE", t[79] = C0(y), s[80] = "BVC", t[80] = u0(te, 0), s[81] = "EOR", t[81] = c0(Me), s[82] = "uKIL", t[82] = Ge(), s[83] = "uSRE", t[83] = C0(g), s[84] = "uNOP", t[84] = Ce(de(_)), s[85] = "EOR", t[85] = c0(de(_)), s[86] = "LSR", t[86] = T0(B(_)), s[87] = "uSRE", t[87] = C0(B(_)), s[88] = "CLI", t[88] = Je(), s[89] = "EOR", t[89] = c0(xe(C)), s[90] = "uNOP", t[90] = Ce(ee), s[91] = "uSRE", t[91] = C0(o(C)), s[92] = "uNOP", t[92] = Ce(xe(_)), s[93] = "EOR", t[93] = c0(xe(_)), s[94] = "LSR", t[94] = T0(o(_)), s[95] = "uSRE", t[95] = C0(o(_)), s[96] = "RTS", t[96] = nn(), s[97] = "ADC", t[97] = a0(Ye), s[98] = "uKIL", t[98] = Ge(), s[99] = "uRRA", t[99] = v0(n), s[100] = "uNOP", t[100] = Ce(Pe), s[101] = "ADC", t[101] = a0(Pe), s[102] = "ROR", t[102] = U0(S), s[103] = "uRRA", t[103] = v0(S), s[104] = "PLA", t[104] = $t(), s[105] = "ADC", t[105] = a0(se), s[106] = "ROR", t[106] = Te(), s[107] = "uARR", t[107] = Ut(se), s[108] = "JMP", t[108] = an(), s[109] = "ADC", t[109] = a0(Re), s[110] = "ROR", t[110] = U0(y), s[111] = "uRRA", t[111] = v0(y), s[112] = "BVS", t[112] = u0(te, 1), s[113] = "ADC", t[113] = a0(Me), s[114] = "uKIL", t[114] = Ge(), s[115] = "uRRA", t[115] = v0(g), s[116] = "uNOP", t[116] = Ce(de(_)), s[117] = "ADC", t[117] = a0(de(_)), s[118] = "ROR", t[118] = U0(B(_)), s[119] = "uRRA", t[119] = v0(B(_)), s[120] = "SEI", t[120] = O0(), s[121] = "ADC", t[121] = a0(xe(C)), s[122] = "uNOP", t[122] = Ce(ee), s[123] = "uRRA", t[123] = v0(o(C)), s[124] = "uNOP", t[124] = Ce(xe(_)), s[125] = "ADC", t[125] = a0(xe(_)), s[126] = "ROR", t[126] = U0(o(_)), s[127] = "uRRA", t[127] = v0(o(_)), s[128] = "uNOP", t[128] = Ce(se), s[129] = "STA", t[129] = b0(X), s[130] = "uNOP", t[130] = Ce(se), s[131] = "uSAX", t[131] = E0(X), s[132] = "STY", t[132] = et(ke), s[133] = "STA", t[133] = b0(ke), s[134] = "STX", t[134] = q0(ke), s[135] = "uSAX", t[135] = E0(ke), s[136] = "DEY", t[136] = qe(), s[137] = "uNOP", t[137] = Ce(se), s[138] = "TXA", t[138] = J0(), s[139] = "uANE", t[139] = Ft(se), s[140] = "STY", t[140] = et(Ke), s[141] = "STA", t[141] = b0(Ke), s[142] = "STX", t[142] = q0(Ke), s[143] = "uSAX", t[143] = E0(Ke), s[144] = "BCC", t[144] = u0(We, 0), s[145] = "STA", t[145] = b0(e0), s[146] = "uKIL", t[146] = Ge(), s[147] = "uSHA", t[147] = lt(e0), s[148] = "STY", t[148] = et(Qe(_)), s[149] = "STA", t[149] = b0(Qe(_)), s[150] = "STX", t[150] = q0(Qe(C)), s[151] = "uSAX", t[151] = E0(Qe(C)), s[152] = "TYA", t[152] = Tt(), s[153] = "STA", t[153] = b0(je(C)), s[154] = "TXS", t[154] = k0(), s[155] = "uSHS", t[155] = Zt(je(C)), s[156] = "uSHY", t[156] = zt(je(_)), s[157] = "STA", t[157] = b0(je(_)), s[158] = "uSHX", t[158] = Vt(je(C)), s[159] = "uSHA", t[159] = lt(je(C)), s[160] = "LDY", t[160] = y0(se), s[161] = "LDA", t[161] = s0(Ye), s[162] = "LDX", t[162] = R0(se), s[163] = "uLAX", t[163] = D0(Ye), s[164] = "LDY", t[164] = y0(Pe), s[165] = "LDA", t[165] = s0(Pe), s[166] = "LDX", t[166] = R0(Pe), s[167] = "uLAX", t[167] = D0(Pe), s[168] = "TAY", t[168] = P0(), s[169] = "LDA", t[169] = s0(se), s[170] = "TAX", t[170] = _0(), s[171] = "uLXA", t[171] = Yt(se), s[172] = "LDY", t[172] = y0(Re), s[173] = "LDA", t[173] = s0(Re), s[174] = "LDX", t[174] = R0(Re), s[175] = "uLAX", t[175] = D0(Re), s[176] = "BCS", t[176] = u0(We, 1), s[177] = "LDA", t[177] = s0(Me), s[178] = "uKIL", t[178] = Ge(), s[179] = "uLAX", t[179] = D0(Me), s[180] = "LDY", t[180] = y0(de(_)), s[181] = "LDA", t[181] = s0(de(_)), s[182] = "LDX", t[182] = R0(de(C)), s[183] = "uLAX", t[183] = D0(de(C)), s[184] = "CLV", t[184] = Oe(), s[185] = "LDA", t[185] = s0(xe(C)), s[186] = "TSX", t[186] = m0(), s[187] = "uLAS", t[187] = Xt(xe(C)), s[188] = "LDY", t[188] = y0(xe(_)), s[189] = "LDA", t[189] = s0(xe(_)), s[190] = "LDX", t[190] = R0(xe(C)), s[191] = "uLAX", t[191] = D0(xe(C)), s[192] = "CPY", t[192] = Q0(se), s[193] = "CMP", t[193] = f0(Ye), s[194] = "uNOP", t[194] = Ce(se), s[195] = "uDCP", t[195] = d0(n), s[196] = "CPY", t[196] = Q0(Pe), s[197] = "CMP", t[197] = f0(Pe), s[198] = "DEC", t[198] = N0(S), s[199] = "uDCP", t[199] = d0(S), s[200] = "INY", t[200] = $e(), s[201] = "CMP", t[201] = f0(se), s[202] = "DEX", t[202] = r0(), s[203] = "uSBX", t[203] = Wt(se), s[204] = "CPY", t[204] = Q0(Re), s[205] = "CMP", t[205] = f0(Re), s[206] = "DEC", t[206] = N0(y), s[207] = "uDCP", t[207] = d0(y), s[208] = "BNE", t[208] = u0(q, 0), s[209] = "CMP", t[209] = f0(Me), s[210] = "uKIL", t[210] = Ge(), s[211] = "uDCP", t[211] = d0(g), s[212] = "uNOP", t[212] = Ce(de(_)), s[213] = "CMP", t[213] = f0(de(_)), s[214] = "DEC", t[214] = N0(B(_)), s[215] = "uDCP", t[215] = d0(B(_)), s[216] = "CLD", t[216] = Le(), s[217] = "CMP", t[217] = f0(xe(C)), s[218] = "uNOP", t[218] = Ce(ee), s[219] = "uDCP", t[219] = d0(o(C)), s[220] = "uNOP", t[220] = Ce(xe(_)), s[221] = "CMP", t[221] = f0(xe(_)), s[222] = "DEC", t[222] = N0(o(_)), s[223] = "uDCP", t[223] = d0(o(_)), s[224] = "CPX", t[224] = G0(se), s[225] = "SBC", t[225] = n0(Ye), s[226] = "uNOP", t[226] = Ce(se), s[227] = "uISB", t[227] = h0(n), s[228] = "CPX", t[228] = G0(Pe), s[229] = "SBC", t[229] = n0(Pe), s[230] = "INC", t[230] = M0(S), s[231] = "uISB", t[231] = h0(S), s[232] = "INX", t[232] = t0(), s[233] = "SBC", t[233] = n0(se), s[234] = "NOP", t[234] = J(), s[235] = "SBC", t[235] = n0(se), s[236] = "CPX", t[236] = G0(Re), s[237] = "SBC", t[237] = n0(Re), s[238] = "INC", t[238] = M0(y), s[239] = "uISB", t[239] = h0(y), s[240] = "BEQ", t[240] = u0(q, 1), s[241] = "SBC", t[241] = n0(Me), s[242] = "uKIL", t[242] = Ge(), s[243] = "uISB", t[243] = h0(g), s[244] = "uNOP", t[244] = Ce(de(_)), s[245] = "SBC", t[245] = n0(de(_)), s[246] = "INC", t[246] = M0(B(_)), s[247] = "uISB", t[247] = h0(B(_)), s[248] = "SED", t[248] = $0(), s[249] = "SBC", t[249] = n0(xe(C)), s[250] = "uNOP", t[250] = Ce(ee), s[251] = "uISB", t[251] = h0(o(C)), s[252] = "uNOP", t[252] = Ce(xe(_)), s[253] = "SBC", t[253] = n0(xe(_)), s[254] = "INC", t[254] = M0(o(_)), s[255] = "uISB", t[255] = h0(o(_));
    function b() {
      return ee(function () {
        Y(x > 127), x = x << 1 & 255, w(x), N(x);
      });
    }
    function P() {
      return ee(function () {
        k = 0;
      });
    }
    function Le() {
      return ee(function () {
        L = 0;
      });
    }
    function Je() {
      return ee(function () {
        p = 0;
      });
    }
    function Oe() {
      return ee(function () {
        V = 0;
      });
    }
    function r0() {
      return ee(function () {
        d = d - 1 & 255, w(d), N(d);
      });
    }
    function qe() {
      return ee(function () {
        u = u - 1 & 255, w(u), N(u);
      });
    }
    function t0() {
      return ee(function () {
        d = d + 1 & 255, w(d), N(d);
      });
    }
    function $e() {
      return ee(function () {
        u = u + 1 & 255, w(u), N(u);
      });
    }
    function j0() {
      return ee(function () {
        k = x & 1, x >>>= 1, w(x), a = 0;
      });
    }
    function J() {
      return ee(function () {});
    }
    function l0() {
      return ee(function () {
        var m = x > 127;
        x = (x << 1 | k) & 255, Y(m), w(x), N(x);
      });
    }
    function Te() {
      return ee(function () {
        var m = x & 1;
        x = x >>> 1 | k << 7, Y(m), w(x), N(x);
      });
    }
    function p0() {
      return ee(function () {
        k = 1;
      });
    }
    function $0() {
      return ee(function () {
        L = 1;
      });
    }
    function O0() {
      return ee(function () {
        p = 1;
      });
    }
    function _0() {
      return ee(function () {
        d = x, w(d), N(d);
      });
    }
    function P0() {
      return ee(function () {
        u = x, w(u), N(u);
      });
    }
    function m0() {
      return ee(function () {
        d = l, w(d), N(d);
      });
    }
    function J0() {
      return ee(function () {
        x = d, w(x), N(x);
      });
    }
    function k0() {
      return ee(function () {
        l = d;
      });
    }
    function Tt() {
      return ee(function () {
        x = u, w(x), N(x);
      });
    }
    function Ge() {
      return [K, function () {
        Z("KIL/HLT/JAM");
      }, function () {
        G--;
      }];
    }
    function Ce(m) {
      return m(function () {
        Z("NOP/DOP");
      });
    }
    function a0(m) {
      return m(function () {
        if (L) {
          var v = R,
            j = (x & 15) + (v & 15) + k;
          j > 9 && (j += 6);
          var Se = (x >> 4) + (v >> 4) + (j > 15 ? 1 : 0) << 4;
          w(x + v + k & 255), N(Se), _e((x ^ Se) & ~(x ^ v) & 128), Se > 159 && (Se += 96), Y(Se > 255), x = (Se | j & 15) & 255;
        } else {
          var he = x + R + k;
          Y(he > 255), _e((x ^ he) & (R ^ he) & 128), x = he & 255, w(x), N(x);
        }
      });
    }
    function i0(m) {
      return m(function () {
        x &= R, w(x), N(x);
      });
    }
    function ut(m) {
      return m(function () {
        var v = R;
        w(x & v), _e(v & 64), N(v);
      });
    }
    function f0(m) {
      return m(function () {
        var v = x - R & 255;
        Y(x >= R), w(v), N(v);
      });
    }
    function G0(m) {
      return m(function () {
        var v = d - R & 255;
        Y(d >= R), w(v), N(v);
      });
    }
    function Q0(m) {
      return m(function () {
        var v = u - R & 255;
        Y(u >= R), w(v), N(v);
      });
    }
    function c0(m) {
      return m(function () {
        x ^= R, w(x), N(x);
      });
    }
    function s0(m) {
      return m(function () {
        x = R, w(x), N(x);
      });
    }
    function R0(m) {
      return m(function () {
        d = R, w(d), N(d);
      });
    }
    function y0(m) {
      return m(function () {
        u = R, w(u), N(u);
      });
    }
    function x0(m) {
      return m(function () {
        x |= R, w(x), N(x);
      });
    }
    function n0(m) {
      return m(function () {
        if (L) {
          var v = R,
            j = (x & 15) - (v & 15) - (1 - k),
            Se = (x >> 4) - (v >> 4) - (j < 0 ? 1 : 0);
          j < 0 && (j -= 6), Se < 0 && (Se -= 6);
          var he = x - v - (1 - k);
          Y(~he & 256), _e((x ^ v) & (x ^ he) & 128), w(he & 255), N(he), x = (Se << 4 | j & 15) & 255;
        } else v = ~R & 255, he = x + v + k, Y(he > 255), _e((x ^ he) & (v ^ he) & 128), x = he & 255, w(x), N(x);
      });
    }
    function ot(m) {
      return m(function () {
        Z("ANC"), x &= R, w(x), a = k = x & 128 ? 1 : 0;
      });
    }
    function Ft(m) {
      return m(function () {
        Z("ANE");
      });
    }
    function Ut(m) {
      return m(function () {
        Z("ARR");
        var v = x & R,
          j = k ? 128 : 0;
        v = v >>> 1 | j, x = v, w(v), N(v);
        var Se = x & 96;
        Se == 96 ? (k = 1, V = 0) : Se == 0 ? (k = 0, V = 0) : Se == 32 ? (k = 0, V = 1) : Se == 64 && (k = 1, V = 1);
      });
    }
    function Ht(m) {
      return m(function () {
        Z("ASR");
        var v = x & R;
        k = v & 1, v = v >>> 1, x = v, w(v), a = 0;
      });
    }
    function Xt(m) {
      return m(function () {
        Z("LAS");
        var v = l & R;
        x = v, d = v, l = v, w(v), N(v);
      });
    }
    function D0(m) {
      return m(function () {
        Z("LAX");
        var v = R;
        x = v, d = v, w(v), N(v);
      });
    }
    function Yt(m) {
      return m(function () {
        Z("LXA");
        var v = x & R;
        x = v, d = v, w(v), N(v);
      });
    }
    function Wt(m) {
      return m(function () {
        Z("SBX");
        var v = x & d,
          j = R,
          Se = v - j & 255;
        d = Se, Y(v >= j), w(Se), N(Se);
      });
    }
    function b0(m) {
      return m(function () {
        R = x;
      });
    }
    function q0(m) {
      return m(function () {
        R = d;
      });
    }
    function et(m) {
      return m(function () {
        R = u;
      });
    }
    function E0(m) {
      return m(function () {
        Z("SAX"), R = x & d;
      });
    }
    function lt(m) {
      return m(function () {
        Z("SHA"), R = x & d & (U >>> 8) + 1 & 255;
      });
    }
    function Zt(m) {
      return m(function () {
        Z("SHS");
        var v = x & d;
        l = v, R = v & (U >>> 8) + 1 & 255;
      });
    }
    function Vt(m) {
      return m(function () {
        Z("SHX"), R = d & (U >>> 8) + 1 & 255;
      });
    }
    function zt(m) {
      return m(function () {
        Z("SHY"), R = u & (U >>> 8) + 1 & 255;
      });
    }
    function w0(m) {
      return m(function () {
        Y(R > 127);
        var v = R << 1 & 255;
        R = v, w(v), N(v);
      });
    }
    function N0(m) {
      return m(function () {
        var v = R - 1 & 255;
        R = v, w(v), N(v);
      });
    }
    function M0(m) {
      return m(function () {
        var v = R + 1 & 255;
        R = v, w(v), N(v);
      });
    }
    function T0(m) {
      return m(function () {
        k = R & 1, R >>>= 1, w(R), a = 0;
      });
    }
    function F0(m) {
      return m(function () {
        var v = R > 127,
          j = (R << 1 | k) & 255;
        R = j, Y(v), w(j), N(j);
      });
    }
    function U0(m) {
      return m(function () {
        var v = R & 1,
          j = R >>> 1 | k << 7;
        R = j, Y(v), w(j), N(j);
      });
    }
    function d0(m) {
      return m(function () {
        Z("DCP");
        var v = R - 1 & 255;
        R = v, v = x - v, Y(v >= 0), w(v), N(v);
      });
    }
    function h0(m) {
      return m(function () {
        if (Z("ISB"), R = R + 1 & 255, L) {
          var v = R,
            j = (x & 15) - (v & 15) - (1 - k),
            Se = (x >> 4) - (v >> 4) - (j < 0 ? 1 : 0);
          j < 0 && (j -= 6), Se < 0 && (Se -= 6);
          var he = x - v - (1 - k);
          Y(~he & 256), _e((x ^ v) & (x ^ he) & 128), w(he & 255), N(he), x = (Se << 4 | j & 15) & 255;
        } else v = ~R & 255, he = x + v + k, Y(he > 255), _e((x ^ he) & (v ^ he) & 128), x = he & 255, w(x), N(x);
      });
    }
    function A0(m) {
      return m(function () {
        Z("RLA");
        var v = R,
          j = k;
        Y(v & 128), v = (v << 1 | j) & 255, R = v, x &= v, w(v), N(v);
      });
    }
    function v0(m) {
      return m(function () {
        Z("RRA");
        var v = R,
          j = k ? 128 : 0;
        if (Y(v & 1), v = v >>> 1 | j, R = v, L) {
          var Se = R,
            he = (x & 15) + (Se & 15) + k;
          he > 9 && (he += 6);
          var B0 = (x >> 4) + (Se >> 4) + (he > 15 ? 1 : 0) << 4;
          w(x + Se + k & 255), N(B0), _e((x ^ B0) & ~(x ^ Se) & 128), B0 > 159 && (B0 += 96), Y(B0 > 255), x = (B0 | he & 15) & 255;
        } else {
          var H0 = x + R + k;
          Y(H0 > 255), _e((x ^ H0) & (R ^ H0) & 128), x = H0 & 255, w(x), N(x);
        }
      });
    }
    function S0(m) {
      return m(function () {
        Z("SLO");
        var v = R;
        Y(v & 128), v = v << 1 & 255, R = v, v = x | v, x = v, w(v), N(v);
      });
    }
    function C0(m) {
      return m(function () {
        Z("SRE");
        var v = R;
        Y(v & 1), v = v >>> 1, R = v, v = (x ^ v) & 255, x = v, w(v), N(v);
      });
    }
    function Kt() {
      return [K, Ae, function () {
        $(x);
      }, H];
    }
    function jt() {
      return [K, Ae, function () {
        $(le());
      }, H];
    }
    function $t() {
      return [K, Ae, ve, function () {
        x = re(), w(x), N(x);
      }, H];
    }
    function Jt() {
      return [K, Ae, ve, function () {
        Ie(re());
      }, H];
    }
    function Gt() {
      return [K, O, ve, function () {
        $(c >>> 8 & 255);
      }, function () {
        $(c & 255);
      }, Xe, function () {
        c = E, H();
      }];
    }
    function Qt() {
      return [K, ie, function () {
        h.debug && h.breakpoint("BRK " + R), $(c >>> 8 & 255);
      }, function () {
        $(c & 255);
      }, function () {
        $(le());
      }, function () {
        E = e.read(Be);
      }, function () {
        E |= e.read(Be + 1) << 8;
      }, function () {
        c = E, p = 1, H();
      }];
    }
    function qt() {
      return [K, ie, function () {
        h.debug && h.breakpoint("IRQ " + R), $(c >>> 8 & 255);
      }, function () {
        $(c & 255);
      }, function () {
        $(le() & ~16);
      }, function () {
        E = e.read(Be);
      }, function () {
        E |= e.read(Be + 1) << 8;
      }, function () {
        c = E, H();
      }];
    }
    function en() {
      return [K, ie, function () {
        h.debug && h.breakpoint("NMI " + R), $(c >>> 8 & 255);
      }, function () {
        $(c & 255);
      }, function () {
        $(le() & ~16);
      }, function () {
        E = e.read(Fe);
      }, function () {
        E |= e.read(Fe + 1) << 8;
      }, function () {
        c = E, H();
      }];
    }
    function tn() {
      return [K, Ae, ve, function () {
        Ie(re());
      }, function () {
        E = re();
      }, function () {
        E |= re() << 8;
      }, function () {
        c = E, H();
      }];
    }
    function nn() {
      return [K, Ae, ve, function () {
        E = re();
      }, function () {
        E |= re() << 8;
      }, function () {
        c = E, ie();
      }, H];
    }
    function rn() {
      return [K, O, Xe, function () {
        c = E, H();
      }];
    }
    function an() {
      return [K, He, pe, me, function () {
        ce(), we();
      }, function () {
        c = U, H();
      }];
    }
    function u0(m, v) {
      var j;
      return m === q ? j = function j() {
        return I === v;
      } : m === Ze ? j = function j() {
        return a === v;
      } : m === We ? j = function j() {
        return k === v;
      } : j = function j() {
        return V === v;
      }, [K, ue, function () {
        j() ? (Ae(), T()) : H();
      }, function () {
        ge ? (Ae(), ne()) : H();
      }, H];
    }
    this.saveState = function () {
      return {
        PC: c - 1 & 65535,
        A: x,
        X: d,
        Y: u,
        SP: l,
        N: a,
        V: V,
        D: L,
        I: p,
        Z: I,
        C: k,
        T: G,
        o: oe,
        R: r ? 1 : 0,
        d: R,
        AD: E,
        BA: U,
        BC: z ? 1 : 0,
        IA: i,
        bo: f,
        boa: ge
      };
    }, this.loadState = function (m) {
      c = m.PC + 1 & 65535, x = m.A, d = m.X, u = m.Y, l = m.SP, a = m.N, V = m.V, L = m.D, p = m.I, I = m.Z, k = m.C, G = m.T, oe = m.o, r = !!m.R, R = m.d, E = m.AD, U = m.BA, z = !!m.BC, i = m.IA, f = m.bo, ge = m.boa, A = oe < 0 ? [K] : t[oe];
    }, this.toString = function () {
      return "CPU  PC: " + c.toString(16) + "  op: " + oe.toString() + "  T: " + G + "  data: " + R + "\n A: " + x.toString(16) + "  X: " + d.toString(16) + "  Y: " + u.toString(16) + "  SP: " + l.toString(16) + "     N" + a + "  V" + V + "  D" + L + "  I" + p + "  Z" + I + "  C" + k + "  ";
    }, this.breakpoint = function (m) {
      if (this.trace) var v = "CPU Breakpoint!  " + (m ? "(" + m + ")" : "") + "\n\n" + this.toString();
    };
    var mt = [7, 6, 0, 8, 3, 3, 5, 5, 3, 2, 2, 2, 4, 4, 6, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7, 6, 6, 0, 8, 3, 3, 5, 5, 4, 2, 2, 2, 4, 4, 6, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7, 6, 6, 0, 8, 3, 3, 5, 5, 3, 2, 2, 2, 3, 4, 6, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7, 6, 6, 0, 8, 3, 3, 5, 5, 4, 2, 2, 2, 5, 4, 6, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7, 0, 6, 0, 6, 3, 3, 3, 3, 2, 0, 2, 0, 4, 4, 4, 4, 2, 6, 0, 0, 4, 4, 4, 4, 2, 5, 2, 0, 0, 5, 0, 0, 2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 0, 4, 4, 4, 4, 2, 5, 0, 5, 4, 4, 4, 4, 2, 4, 2, 0, 4, 4, 4, 4, 2, 6, 0, 8, 3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 3, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7, 2, 6, 0, 8, 3, 3, 5, 5, 2, 2, 2, 0, 4, 4, 6, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7],
      fn = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
      cn = [1, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3, 3, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3, 1, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3, 1, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3, 0, 2, 0, 2, 2, 2, 2, 2, 1, 0, 1, 0, 3, 3, 3, 3, 2, 2, 0, 0, 2, 2, 2, 3, 1, 3, 1, 0, 0, 3, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 1, 0, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 0, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3],
      On = [1, 2, 0, 0, 0, 2, 2, 0, 1, 2, 1, 0, 0, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0, 3, 2, 0, 0, 2, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0, 1, 2, 0, 0, 0, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0, 1, 2, 0, 0, 0, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0, 0, 2, 0, 0, 2, 2, 2, 0, 1, 0, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 2, 2, 2, 0, 1, 3, 1, 0, 0, 3, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 2, 2, 2, 0, 1, 3, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 2, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0, 2, 2, 0, 0, 2, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0];
    this.getOpcodeMetadata = function (m, v) {
      return {
        opcode: m,
        mnenomic: s[m],
        minCycles: mt[m],
        maxCycles: mt[m] + fn[m],
        insnlength: cn[m]
      };
    }, this.setNMI = function () {
      A = en(), G = 1, c = c - 1 & 65535;
    }, this.setIRQ = function () {
      p || (A = qt(), G = 1, c = c - 1 & 65535);
    }, this.getSP = function () {
      return l;
    }, this.getPC = function () {
      return c - 1 & 65535;
    }, this.getT = function () {
      return G;
    }, this.isHalted = function () {
      return s[oe] == "uKIL";
    }, this.isPCStable = function () {
      return G == 0;
    };
  },
  o0;
(function (c) {
  c[c.None = 0] = "None", c[c.NMI = 1] = "NMI", c[c.IRQ = 2] = "IRQ";
})(o0 || (o0 = {}));
var hn = /*#__PURE__*/function () {
  function hn() {
    _classCallCheck(this, hn);
    this.cpu = new st();
    this.interruptType = 0;
  }
  _createClass(hn, [{
    key: "connectMemoryBus",
    value: function connectMemoryBus(e) {
      this.cpu.connectBus(e);
    }
  }, {
    key: "advanceClock",
    value: function advanceClock() {
      if (this.interruptType && this.isStable()) {
        switch (this.interruptType) {
          case 1:
            this.cpu.setNMI();
            break;
          case 2:
            this.cpu.setIRQ();
            break;
        }
        this.interruptType = 0;
      }
      this.cpu.clockPulse();
    }
  }, {
    key: "advanceInsn",
    value: function advanceInsn() {
      do {
        this.advanceClock();
      } while (!this.isStable());
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cpu.reset(), this.interruptType = 0;
    }
  }, {
    key: "interrupt",
    value: function interrupt(e) {
      this.interruptType != 1 && (this.interruptType = e);
    }
  }, {
    key: "NMI",
    value: function NMI() {
      this.interrupt(1);
    }
  }, {
    key: "IRQ",
    value: function IRQ() {
      this.interrupt(2);
    }
  }, {
    key: "getSP",
    value: function getSP() {
      return this.cpu.getSP();
    }
  }, {
    key: "getPC",
    value: function getPC() {
      return this.cpu.getPC();
    }
  }, {
    key: "isHalted",
    value: function isHalted() {
      return this.cpu.isHalted();
    }
  }, {
    key: "saveState",
    value: function saveState() {
      var e = this.cpu.saveState();
      return e.it = this.interruptType, e;
    }
  }, {
    key: "loadState",
    value: function loadState(e) {
      this.cpu.loadState(e), this.interruptType = e.it;
    }
  }, {
    key: "isStable",
    value: function isStable() {
      return this.cpu.isPCStable();
    }
  }]);
  return hn;
}();
exports.t = hn;
var An = /*#__PURE__*/_createClass(function An(e, r) {
  _classCallCheck(this, An);
  this.symbolmap = e, this.debuginfo = r, this.addr2symbol = (0, _chunkQEB57REV.i)(e), this.addr2symbol[0] || (this.addr2symbol[0] = "$00"), this.addr2symbol[65536] = "__END__";
});
exports.u = An;
function g0(h) {
  return h && typeof h.getDebugCategories == "function";
}
var Dt = /*#__PURE__*/function () {
    function Dt() {
      _classCallCheck(this, Dt);
      this.id2bp = {};
    }
    _createClass(Dt, [{
      key: "getDebugCondition",
      value: function getDebugCondition() {
        var _this7 = this;
        return Object.keys(this.id2bp).length == 0 ? null : function () {
          var e = !1;
          for (var r in _this7.id2bp) {
            _this7.id2bp[r].cond() && (e = !0);
          }
          return e;
        };
      }
    }]);
    return Dt;
  }(),
  Bt = /*#__PURE__*/function () {
    function Bt() {
      _classCallCheck(this, Bt);
      this.recorder = null;
      this.internalFiles = {};
    }
    _createClass(Bt, [{
      key: "setRecorder",
      value: function setRecorder(e) {
        this.recorder = e;
      }
    }, {
      key: "updateRecorder",
      value: function updateRecorder() {
        this.recorder && this.isRunning() && this.recorder.frameRequested() && this.recorder.recordFrame(this.saveState());
      }
    }, {
      key: "inspect",
      value: function inspect(e) {
        return vn(this, e);
      }
    }, {
      key: "getDebugTree",
      value: function getDebugTree() {
        var r;
        var e = {};
        return e.state = this.saveState(), ((r = this.debugSymbols) == null ? void 0 : r.debuginfo) && (e.debuginfo = this.debugSymbols.debuginfo), e;
      }
    }, {
      key: "readFile",
      value: function readFile(e) {
        return this.internalFiles[e];
      }
    }, {
      key: "writeFile",
      value: function writeFile(e, r) {
        return this.internalFiles[e] = r, !0;
      }
    }]);
    return Bt;
  }(),
  V0 = /*#__PURE__*/function (_Bt) {
    _inherits(V0, _Bt);
    var _super3 = _createSuper(V0);
    function V0() {
      var _this8;
      _classCallCheck(this, V0);
      _this8 = _super3.apply(this, arguments);
      _this8.debugSavedState = null;
      _this8.debugBreakState = null;
      _this8.debugTargetClock = 0;
      _this8.debugClock = 0;
      _this8.breakpoints = new Dt();
      _this8.frameCount = 0;
      return _this8;
    }
    _createClass(V0, [{
      key: "setBreakpoint",
      value: function setBreakpoint(e, r) {
        r ? (this.breakpoints.id2bp[e] = {
          cond: r
        }, this.restartDebugging()) : this.clearBreakpoint(e);
      }
    }, {
      key: "clearBreakpoint",
      value: function clearBreakpoint(e) {
        delete this.breakpoints.id2bp[e];
      }
    }, {
      key: "hasBreakpoint",
      value: function hasBreakpoint(e) {
        return this.breakpoints.id2bp[e] != null;
      }
    }, {
      key: "getDebugCallback",
      value: function getDebugCallback() {
        return this.breakpoints.getDebugCondition();
      }
    }, {
      key: "setupDebug",
      value: function setupDebug(e) {
        this.onBreakpointHit = e;
      }
    }, {
      key: "clearDebug",
      value: function clearDebug() {
        this.debugBreakState != null && this.loadState(this.debugSavedState), this.debugSavedState = null, this.debugBreakState = null, this.debugTargetClock = -1, this.debugClock = 0, this.onBreakpointHit = null, this.clearBreakpoint("debug"), this.frameCount = 0;
      }
    }, {
      key: "setDebugCondition",
      value: function setDebugCondition(e) {
        this.setBreakpoint("debug", e);
      }
    }, {
      key: "resetDebugging",
      value: function resetDebugging() {
        this.debugSavedState ? this.loadState(this.debugSavedState) : this.debugSavedState = this.saveState(), this.debugClock = 0, this.debugCallback = this.getDebugCallback(), this.debugBreakState = null;
      }
    }, {
      key: "restartDebugging",
      value: function restartDebugging() {
        this.resetDebugging(), this.resume();
      }
    }, {
      key: "preFrame",
      value: function preFrame() {
        this.debugCallback && !this.debugBreakState && (this.debugSavedState = this.saveState(), this.debugTargetClock -= this.debugClock, this.debugClock = 0);
      }
    }, {
      key: "postFrame",
      value: function postFrame() {
        this.debugCallback && this.debugBreakState && this.loadState(this.debugBreakState), this.frameCount++;
      }
    }, {
      key: "pollControls",
      value: function pollControls() {}
    }, {
      key: "nextFrame",
      value: function nextFrame(e) {
        this.pollControls(), this.updateRecorder(), this.preFrame();
        var r = this.advance(e);
        return this.postFrame(), r;
      }
    }, {
      key: "evalDebugCondition",
      value: function evalDebugCondition() {
        this.debugCallback && !this.debugBreakState && this.debugCallback();
      }
    }, {
      key: "wasBreakpointHit",
      value: function wasBreakpointHit() {
        return this.debugBreakState != null;
      }
    }, {
      key: "breakpointHit",
      value: function breakpointHit(e, r) {
        console.log(this.debugTargetClock, e, this.debugClock, this.isStable()), this.debugTargetClock = e, this.debugBreakState = this.saveState(), console.log("Breakpoint at clk", this.debugClock, "PC", this.debugBreakState.c.PC.toString(16)), this.pause(), this.onBreakpointHit && this.onBreakpointHit(this.debugBreakState, r);
      }
    }, {
      key: "haltAndCatchFire",
      value: function haltAndCatchFire(e) {
        this.breakpointHit(this.debugClock, e);
      }
    }, {
      key: "runEval",
      value: function runEval(e) {
        var _this9 = this;
        this.setDebugCondition(function () {
          if (++_this9.debugClock >= _this9.debugTargetClock && _this9.isStable()) {
            var r = _this9.getCPUState();
            return e(r) ? (_this9.breakpointHit(_this9.debugClock), !0) : !1;
          }
        });
      }
    }, {
      key: "runToPC",
      value: function runToPC(e) {
        this.debugTargetClock++, this.runEval(function (r) {
          return r.PC == e;
        });
      }
    }, {
      key: "runUntilReturn",
      value: function runUntilReturn() {
        var e = this.getSP();
        this.runEval(function (r) {
          return r.SP > e;
        });
      }
    }, {
      key: "runToFrameClock",
      value: function runToFrameClock(e) {
        this.restartDebugging(), this.debugTargetClock = e, this.runEval(function () {
          return !0;
        });
      }
    }, {
      key: "step",
      value: function step() {
        this.runToFrameClock(this.debugClock + 1);
      }
    }, {
      key: "stepBack",
      value: function stepBack() {
        var _this10 = this;
        var e,
          r,
          c = this.debugTargetClock;
        this.restartDebugging(), this.debugTargetClock = c - 25, this.runEval(function (l) {
          return _this10.debugClock < c ? (e = _this10.saveState(), r = _this10.debugClock, !1) : (e && (_this10.loadState(e), _this10.debugClock = r), !0);
        });
      }
    }, {
      key: "runToVsync",
      value: function runToVsync() {
        var _this11 = this;
        this.restartDebugging();
        var e = this.frameCount;
        this.runEval(function () {
          return _this11.frameCount > e;
        });
      }
    }]);
    return V0;
  }(Bt);
exports.w = Bt;
function vn(h, e) {
  if (!!h.debugSymbols) {
    var r = h.debugSymbols.symbolmap,
      c = h.debugSymbols.addr2symbol;
    if (!r || !h.readAddress) return null;
    var l = r["_" + e] || r[e];
    if (typeof l != "number") return null;
    var x = h.readAddress(l);
    if (c && c[l + 1] != null) return "$" + (0, _chunkQEB57REV.g)(l, 4) + " = $" + (0, _chunkQEB57REV.g)(x, 2) + " (" + x + " decimal)";
    {
      var d = h.readAddress(l + 1),
        u = x | d << 8;
      return "$" + (0, _chunkQEB57REV.g)(l, 4) + " = $" + (0, _chunkQEB57REV.g)(x, 2) + " $" + (0, _chunkQEB57REV.g)(d, 2) + " (" + (u << 16 >> 16) + " decimal)";
    }
  }
}
function Rt(h) {
  return h.endsWith(".pla") ? "plasm" : h.endsWith(".c") || h.endsWith(".h") ? "cc65" : h.endsWith(".s") || h.endsWith(".ca65") ? "ca65" : h.endsWith(".dasm") ? "dasm" : h.endsWith(".acme") ? "acme" : h.endsWith(".wiz") ? "wiz" : h.endsWith(".ecs") ? "ecs" : "dasm";
}
var Sn = /*#__PURE__*/function (_V) {
  _inherits(Sn, _V);
  var _super4 = _createSuper(Sn);
  function Sn() {
    var _this12;
    _classCallCheck(this, Sn);
    _this12 = _super4.apply(this, arguments);
    _this12.debugPCDelta = -1;
    _this12.getToolForFilename = Rt;
    return _this12;
  }
  _createClass(Sn, [{
    key: "fixPC",
    value: function fixPC(e) {
      return e.PC = e.PC + this.debugPCDelta & 65535, e;
    }
  }, {
    key: "unfixPC",
    value: function unfixPC(e) {
      return e.PC = e.PC - this.debugPCDelta & 65535, e;
    }
  }, {
    key: "getSP",
    value: function getSP() {
      return this.getCPUState().SP;
    }
  }, {
    key: "getPC",
    value: function getPC() {
      return this.getCPUState().PC;
    }
  }, {
    key: "isStable",
    value: function isStable() {
      return !this.getCPUState().T;
    }
  }, {
    key: "newCPU",
    value: function newCPU(e) {
      var r = new st();
      return r.connectBus(e), r;
    }
  }, {
    key: "getOpcodeMetadata",
    value: function getOpcodeMetadata(e, r) {
      return It(e, r);
    }
  }, {
    key: "getOriginPC",
    value: function getOriginPC() {
      return (this.readAddress(65532) | this.readAddress(65533) << 8) & 65535;
    }
  }, {
    key: "disassemble",
    value: function disassemble(e, r) {
      return rt(e, r(e), r(e + 1), r(e + 2));
    }
  }, {
    key: "getDefaultExtension",
    value: function getDefaultExtension() {
      return ".a";
    }
  }, {
    key: "getDebugCategories",
    value: function getDebugCategories() {
      return ["CPU", "ZPRAM", "Stack"];
    }
  }, {
    key: "getDebugInfo",
    value: function getDebugInfo(e, r) {
      switch (e) {
        case "CPU":
          return yt(r.c);
        case "ZPRAM":
          return (0, _chunkQEB57REV.U)(r.b || r.ram, 0, 256);
        case "Stack":
          return L0(this, r.b || r.ram, 256, 511, 256 + r.c.SP, 32);
      }
    }
  }]);
  return Sn;
}(V0);
exports.z = Sn;
function yt(h) {
  function e(r) {
    var c = "";
    return c += r.N ? " N" : " -", c += r.V ? " V" : " -", c += r.D ? " D" : " -", c += r.Z ? " Z" : " -", c += r.C ? " C" : " -", c += r.I ? " I" : " -", c;
  }
  return "PC " + (0, _chunkQEB57REV.g)(h.PC, 4) + "  " + e(h) + "\n A " + (0, _chunkQEB57REV.g)(h.A) + "     " + (h.R ? "" : "BUSY") + "\n X " + (0, _chunkQEB57REV.g)(h.X) + "\n Y " + (0, _chunkQEB57REV.g)(h.Y) + "     SP " + (0, _chunkQEB57REV.g)(h.SP) + "\n";
}
var z0 = {
  cycletime: [7, 6, 0, 8, 3, 3, 5, 5, 3, 2, 2, 2, 4, 4, 6, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7, 6, 6, 0, 8, 3, 3, 5, 5, 4, 2, 2, 2, 4, 4, 6, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7, 6, 6, 0, 8, 3, 3, 5, 5, 3, 2, 2, 2, 3, 4, 6, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7, 6, 6, 0, 8, 3, 3, 5, 5, 4, 2, 2, 2, 5, 4, 6, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7, 0, 6, 0, 6, 3, 3, 3, 3, 2, 0, 2, 0, 4, 4, 4, 4, 2, 6, 0, 0, 4, 4, 4, 4, 2, 5, 2, 0, 0, 5, 0, 0, 2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 0, 4, 4, 4, 4, 2, 5, 0, 5, 4, 4, 4, 4, 2, 4, 2, 0, 4, 4, 4, 4, 2, 6, 0, 8, 3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 3, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7, 2, 6, 0, 8, 3, 3, 5, 5, 2, 2, 2, 0, 4, 4, 6, 6, 2, 5, 0, 8, 4, 4, 6, 6, 2, 4, 0, 7, 4, 4, 7, 7],
  extracycles: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  insnlengths: [1, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3, 3, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3, 1, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3, 1, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3, 0, 2, 0, 2, 2, 2, 2, 2, 1, 0, 1, 0, 3, 3, 3, 3, 2, 2, 0, 0, 2, 2, 2, 3, 1, 3, 1, 0, 0, 3, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 1, 0, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 2, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 1, 0, 3, 3, 3, 3, 2, 2, 0, 2, 2, 2, 2, 2, 1, 3, 0, 3, 3, 3, 3, 3],
  validinsns: [1, 2, 0, 0, 0, 2, 2, 0, 1, 2, 1, 0, 0, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0, 3, 2, 0, 0, 2, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0, 1, 2, 0, 0, 0, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0, 1, 2, 0, 0, 0, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0, 0, 2, 0, 0, 2, 2, 2, 0, 1, 0, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 2, 2, 2, 0, 1, 3, 1, 0, 0, 3, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 2, 2, 2, 0, 1, 3, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 2, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0, 2, 2, 0, 0, 2, 2, 2, 0, 1, 2, 1, 0, 3, 3, 3, 0, 2, 2, 0, 0, 0, 2, 2, 0, 1, 3, 0, 0, 0, 3, 3, 0]
};
function It(h, e) {
  return {
    opcode: h,
    minCycles: z0.cycletime[h],
    maxCycles: z0.cycletime[h] + z0.extracycles[h],
    insnlength: z0.insnlengths[h]
  };
}
function Lt(h) {
  function e(r) {
    return (0, _chunkQEB57REV.r)(r, ["S", "Z",, "H",, "V", "N", "C"], !0);
  }
  return "PC " + (0, _chunkQEB57REV.g)(h.PC, 4) + "  " + e(h.AF) + " " + (h.iff1 ? "I" : "-") + (h.iff2 ? "I" : "-") + "\nSP " + (0, _chunkQEB57REV.g)(h.SP, 4) + "  IR " + (0, _chunkQEB57REV.g)(h.IR, 4) + "\nIX " + (0, _chunkQEB57REV.g)(h.IX, 4) + "  IY " + (0, _chunkQEB57REV.g)(h.IY, 4) + "\nAF " + (0, _chunkQEB57REV.g)(h.AF, 4) + "  BC " + (0, _chunkQEB57REV.g)(h.BC, 4) + "\nDE " + (0, _chunkQEB57REV.g)(h.DE, 4) + "  HL " + (0, _chunkQEB57REV.g)(h.HL, 4) + "\n";
}
var Ot = /*#__PURE__*/function (_V2) {
  _inherits(Ot, _V2);
  var _super5 = _createSuper(Ot);
  function Ot() {
    var _this13;
    _classCallCheck(this, Ot);
    _this13 = _super5.apply(this, arguments);
    _this13.waitCycles = 0;
    _this13.getToolForFilename = Et;
    return _this13;
  }
  _createClass(Ot, [{
    key: "newCPU",
    value: function newCPU(e, r) {
      return this._cpu = new at(), this._cpu.connectMemoryBus(e), this._cpu.connectIOBus(r), this._cpu;
    }
  }, {
    key: "getPC",
    value: function getPC() {
      return this._cpu.getPC();
    }
  }, {
    key: "getSP",
    value: function getSP() {
      return this._cpu.getSP();
    }
  }, {
    key: "isStable",
    value: function isStable() {
      return !0;
    }
  }, {
    key: "runCPU",
    value: function runCPU(e, r) {
      if (this._cpu = e, this.waitCycles = 0, this.wasBreakpointHit()) return 0;
      var c = this.getDebugCallback(),
        l = 0;
      for (this.waitCycles += r; this.waitCycles > 0;) {
        if (c && c()) {
          c = null;
          break;
        }
        var x = e.advanceInsn();
        l += x, this.waitCycles -= x;
      }
      return l;
    }
  }, {
    key: "getDefaultExtension",
    value: function getDefaultExtension() {
      return ".c";
    }
  }, {
    key: "getDebugCategories",
    value: function getDebugCategories() {
      return ["CPU", "Stack"];
    }
  }, {
    key: "getDebugInfo",
    value: function getDebugInfo(e, r) {
      switch (e) {
        case "CPU":
          return Lt(r.c);
        case "Stack":
          {
            var c = r.c.SP - 1 & 65535,
              l = c & 65280,
              x = l + 255;
            return c == 0 && (c = 65536), console.log(c, l, x), L0(this, [], l, x, c, 205);
          }
      }
    }
  }, {
    key: "disassemble",
    value: function disassemble(e, r) {
      return ct(e, r(e), r(e + 1), r(e + 2), r(e + 3));
    }
  }]);
  return Ot;
}(V0);
exports.D = Ot;
function Et(h) {
  return h.endsWith(".c") || h.endsWith(".h") ? "sdcc" : h.endsWith(".s") ? "sdasz80" : h.endsWith(".ns") ? "naken" : h.endsWith(".scc") ? "sccz80" : h.endsWith(".z") ? "zmac" : h.endsWith(".wiz") ? "wiz" : "zmac";
}
function xt(h) {
  function e(r) {
    return (0, _chunkQEB57REV.r)(r, ["E", "F", "H", "I", "N", "Z", "V", "C"], !0);
  }
  return "PC " + (0, _chunkQEB57REV.g)(h.PC, 4) + "  " + e(h.CC) + "\nSP " + (0, _chunkQEB57REV.g)(h.SP, 4) + "\nDP " + (0, _chunkQEB57REV.g)(h.DP, 2) + "\n A " + (0, _chunkQEB57REV.g)(h.A, 2) + "\n B " + (0, _chunkQEB57REV.g)(h.B, 2) + "\n X " + (0, _chunkQEB57REV.g)(h.X, 4) + "\n Y " + (0, _chunkQEB57REV.g)(h.Y, 4) + "\n U " + (0, _chunkQEB57REV.g)(h.U, 4) + "\n";
}
function wt(h) {
  return h.endsWith(".c") || h.endsWith(".h") ? "cmoc" : h.endsWith(".xasm") ? "xasm6809" : "lwasm";
}
var Cn = /*#__PURE__*/function (_Ot) {
  _inherits(Cn, _Ot);
  var _super6 = _createSuper(Cn);
  function Cn() {
    var _this14;
    _classCallCheck(this, Cn);
    _this14 = _super6.apply(this, arguments);
    _this14.getToolForFilename = wt;
    return _this14;
  }
  _createClass(Cn, [{
    key: "newCPU",
    value: function newCPU(e) {
      var r = Object.create(Z0());
      return r.init(e.write, e.read, 0), r;
    }
  }, {
    key: "cpuStateToLongString",
    value: function cpuStateToLongString(e) {
      return xt(e);
    }
  }, {
    key: "disassemble",
    value: function disassemble(e, r) {
      return Object.create(Z0()).disasm(r(e), r(e + 1), r(e + 2), r(e + 3), r(e + 4), e);
    }
  }, {
    key: "getDefaultExtension",
    value: function getDefaultExtension() {
      return ".asm";
    }
  }, {
    key: "getDebugCategories",
    value: function getDebugCategories() {
      return ["CPU", "Stack"];
    }
  }, {
    key: "getDebugInfo",
    value: function getDebugInfo(e, r) {
      switch (e) {
        case "CPU":
          return xt(r.c);
        default:
          return _get(_getPrototypeOf(Cn.prototype), "getDebugInfo", this).call(this, e, r);
      }
    }
  }]);
  return Cn;
}(Ot);
exports.F = Cn;
function L0(h, e, r, c, l, x, d) {
  var u = "",
    a = 0;
  function V(k) {
    return k < e.length ? e[k] : h.readAddress(k);
  }
  for (; l < c;) {
    l++;
    var L = V(l) + V(l + 1) * 256;
    d && (L = (L & 255) << 8 | (L & 65280) >> 8);
    var p = x == 32 ? -2 : -3,
      I = V(L + p);
    I == x ? (u += "\n$" + (0, _chunkQEB57REV.g)(l) + ": ", u += (0, _chunkQEB57REV.g)(L, 4) + " " + gn(h, L, !0), l++, a = 0) : (a == 0 && (u += "\n$" + (0, _chunkQEB57REV.g)(l) + ": "), u += (0, _chunkQEB57REV.g)(V(l)) + " ", ++a == 8 && (a = 0));
  }
  return u + "\n";
}
function gn(h, e, r) {
  for (var c = e, l = h.debugSymbols && h.debugSymbols.addr2symbol; l && e >= 0;) {
    var x = l[e];
    if (x) {
      var x = l[e];
      return r ? x + " + $" + (0, _chunkQEB57REV.g)(c - e) : x;
    }
    if (!r) break;
    e--;
  }
  return "";
}
function pn(h) {
  return typeof h.connectVideo == "function";
}
function _n(h) {
  return typeof h.connectAudio == "function";
}
function Pn(h) {
  return typeof h.setKeyInput == "function";
}
function Nt(h) {
  return typeof h.setPaddleInput == "function";
}
function kn(h) {
  return typeof h.getRasterY == "function";
}
function Dn(h) {
  return typeof h.connectProbe == "function";
}
function Bn(h) {
  return typeof h.loadBIOS == "function";
}
function Rn(h) {
  return typeof h.connectSerialIO == "function";
}
var K0 = /*#__PURE__*/function (_V3) {
    _inherits(K0, _V3);
    var _super7 = _createSuper(K0);
    function K0(e) {
      var _this15;
      _classCallCheck(this, K0);
      _this15 = _super7.call(this);
      _this15.mainElement = e;
      return _this15;
    }
    _createClass(K0, [{
      key: "reset",
      value: function reset() {
        this.machine.reset(), this.serialVisualizer != null && this.serialVisualizer.reset();
      }
    }, {
      key: "loadState",
      value: function loadState(e) {
        this.machine.loadState(e);
      }
    }, {
      key: "saveState",
      value: function saveState() {
        return this.machine.saveState();
      }
    }, {
      key: "getSP",
      value: function getSP() {
        return this.machine.cpu.getSP();
      }
    }, {
      key: "getPC",
      value: function getPC() {
        return this.machine.cpu.getPC();
      }
    }, {
      key: "isStable",
      value: function isStable() {
        return this.machine.cpu.isStable();
      }
    }, {
      key: "getCPUState",
      value: function getCPUState() {
        return this.machine.cpu.saveState();
      }
    }, {
      key: "loadControlsState",
      value: function loadControlsState(e) {
        this.machine.loadControlsState(e);
      }
    }, {
      key: "saveControlsState",
      value: function saveControlsState() {
        return this.machine.saveControlsState();
      }
    }, {
      key: "start",
      value: function () {
        var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var _this16 = this;
          var e, r, c, l;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  this.machine = this.newMachine();
                  e = this.machine;
                  _context5.t0 = e instanceof W0;
                  if (!_context5.t0) {
                    _context5.next = 6;
                    break;
                  }
                  _context5.next = 6;
                  return e.loadWASM();
                case 6:
                  if (pn(e)) {
                    c = e.getVideoParams();
                    this.video = new _chunkQEB57REV.P(this.mainElement, c.width, c.height, {
                      overscan: !!c.overscan,
                      rotate: c.rotate | 0,
                      aspect: c.aspect
                    }), this.video.create(), e.connectVideo(this.video.getFrameData()), Pn(e) && (this.video.setKeyboardEvents(e.setKeyInput.bind(e)), this.poller = new _chunkQEB57REV.Z(e.setKeyInput.bind(e))), r = c.videoFrequency;
                  }
                  if (this.timer = new _chunkQEB57REV.T(r || 60, this.nextFrame.bind(this)), _n(e)) {
                    l = e.getAudioParams();
                    this.audio = new it(l.sampleRate), this.audio.start(), e.connectAudio(this.audio);
                  }
                  Nt(e) && this.video.setupMouseEvents(), Dn(e) && (this.probeRecorder = new ft(e), this.startProbing = function () {
                    return e.connectProbe(_this16.probeRecorder), _this16.probeRecorder;
                  }, this.stopProbing = function () {
                    e.connectProbe(null);
                  }), Bn(e) && (this.loadBIOS = function (x, d) {
                    e.loadBIOS(d, x);
                  }), Rn(e) && (this.serialIOInterface == null ? this.serialVisualizer = new Mt(this.mainElement, e) : e.connectSerialIO(this.serialIOInterface));
                case 9:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));
        function start() {
          return _start.apply(this, arguments);
        }
        return start;
      }()
    }, {
      key: "loadROM",
      value: function loadROM(e, r) {
        this.machine.loadROM(r, e), this.reset();
      }
    }, {
      key: "pollControls",
      value: function pollControls() {
        this.poller && this.poller.poll(), Nt(this.machine) && (this.machine.setPaddleInput(0, this.video.paddle_x), this.machine.setPaddleInput(1, this.video.paddle_y)), this.machine.pollControls && this.machine.pollControls();
      }
    }, {
      key: "advance",
      value: function advance(e) {
        var r = this.getDebugCallback();
        var c = this.machine.advanceFrame(r);
        return !e && this.video && this.video.updateFrame(), !e && this.serialVisualizer && this.serialVisualizer.refresh(), c;
      }
    }, {
      key: "advanceFrameClock",
      value: function advanceFrameClock(e, r) {
        if (r > 0) return this.machine instanceof W0 ? this.machine.advanceFrameClock(e, r) : this.machine.advanceFrame(function () {
          return --r <= 0;
        });
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.timer && this.timer.isRunning();
      }
    }, {
      key: "resume",
      value: function resume() {
        this.timer.start(), this.audio && this.audio.start();
      }
    }, {
      key: "pause",
      value: function pause() {
        this.timer.stop(), this.audio && this.audio.stop();
      }
    }, {
      key: "runToVsync",
      value: function runToVsync() {
        var _this17 = this;
        this.restartDebugging();
        var e = !1;
        this.runEval(function () {
          if (_this17.getRasterScanline() > 0) e = !0;else return e;
        });
      }
    }, {
      key: "getRasterScanline",
      value: function getRasterScanline() {
        return kn(this.machine) && this.machine.getRasterY();
      }
    }, {
      key: "readAddress",
      value: function readAddress(e) {
        return this.machine.read(e);
      }
    }, {
      key: "getDebugCategories",
      value: function getDebugCategories() {
        if (g0(this.machine)) return this.machine.getDebugCategories();
      }
    }, {
      key: "getDebugInfo",
      value: function getDebugInfo(e, r) {
        return g0(this.machine) && this.machine.getDebugInfo(e, r);
      }
    }]);
    return K0;
  }(V0),
  yn = /*#__PURE__*/function (_K) {
    _inherits(yn, _K);
    var _super8 = _createSuper(yn);
    function yn() {
      var _this18;
      _classCallCheck(this, yn);
      _this18 = _super8.apply(this, arguments);
      _this18.getOpcodeMetadata = It;
      _this18.getToolForFilename = Rt;
      return _this18;
    }
    _createClass(yn, [{
      key: "disassemble",
      value: function disassemble(e, r) {
        return rt(e, r(e), r(e + 1), r(e + 2));
      }
    }, {
      key: "getDebugCategories",
      value: function getDebugCategories() {
        return g0(this.machine) ? this.machine.getDebugCategories() : ["CPU", "ZPRAM", "Stack"];
      }
    }, {
      key: "getDebugInfo",
      value: function getDebugInfo(e, r) {
        switch (e) {
          case "CPU":
            return yt(r.c);
          case "ZPRAM":
            return (0, _chunkQEB57REV.U)(r.b || r.ram, 0, 256);
          case "Stack":
            return L0(this, r.b || r.ram, 256, 511, 256 + r.c.SP, 32);
          default:
            return g0(this.machine) && this.machine.getDebugInfo(e, r);
        }
      }
    }]);
    return yn;
  }(K0),
  In = /*#__PURE__*/function (_K2) {
    _inherits(In, _K2);
    var _super9 = _createSuper(In);
    function In() {
      var _this19;
      _classCallCheck(this, In);
      _this19 = _super9.apply(this, arguments);
      _this19.getToolForFilename = Et;
      return _this19;
    }
    _createClass(In, [{
      key: "getDebugCategories",
      value: function getDebugCategories() {
        return g0(this.machine) ? this.machine.getDebugCategories() : ["CPU", "Stack"];
      }
    }, {
      key: "getDebugInfo",
      value: function getDebugInfo(e, r) {
        switch (e) {
          case "CPU":
            return Lt(r.c);
          case "Stack":
            {
              var c = r.c.SP - 1 & 65535,
                l = c & 65280,
                x = l + 255;
              return c == 0 && (c = 65536), L0(this, [], l, x, c, 205);
            }
          default:
            return g0(this.machine) && this.machine.getDebugInfo(e, r);
        }
      }
    }, {
      key: "disassemble",
      value: function disassemble(e, r) {
        return ct(e, r(e), r(e + 1), r(e + 2), r(e + 3));
      }
    }]);
    return In;
  }(K0),
  Ln = /*#__PURE__*/function (_K3) {
    _inherits(Ln, _K3);
    var _super10 = _createSuper(Ln);
    function Ln() {
      var _this20;
      _classCallCheck(this, Ln);
      _this20 = _super10.apply(this, arguments);
      _this20.getToolForFilename = wt;
      return _this20;
    }
    _createClass(Ln, [{
      key: "getDebugCategories",
      value: function getDebugCategories() {
        return g0(this.machine) ? this.machine.getDebugCategories() : ["CPU", "Stack"];
      }
    }, {
      key: "getDebugInfo",
      value: function getDebugInfo(e, r) {
        switch (e) {
          case "CPU":
            return xt(r.c);
          case "Stack":
            {
              var c = r.c.SP - 1 & 65535,
                l = c & 65280,
                x = l + 255;
              return c == 0 && (c = 65536), L0(this, [], l, x, c, 23, !0);
            }
          default:
            return _get(_getPrototypeOf(Ln.prototype), "getDebugInfo", this).call(this, e, r);
        }
      }
    }, {
      key: "disassemble",
      value: function disassemble(e, r) {
        return Object.create(Z0()).disasm(r(e), r(e + 1), r(e + 2), r(e + 3), r(e + 4), e);
      }
    }]);
    return Ln;
  }(K0),
  Mt = /*#__PURE__*/function () {
    function Mt(e, r) {
      _classCallCheck(this, Mt);
      this.lastOutCount = -1;
      this.lastInCount = -1;
      this.device = r, this.textarea = document.createElement("textarea"), this.textarea.classList.add("transcript"), this.textarea.classList.add("transcript-style-2"), this.textarea.style.display = "none", e.appendChild(this.textarea);
    }
    _createClass(Mt, [{
      key: "reset",
      value: function reset() {
        this.lastOutCount = 0, this.lastInCount = 0, this.textarea.style.display = "none";
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var e = "";
        if (this.device.serialOut.length != this.lastOutCount) {
          var r = "";
          var _iterator2 = _createForOfIteratorHelper(this.device.serialOut),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var c = _step2.value;
              e != c.op && (r != "" && (r += "\n"), c.op === "read" ? r += "<< " : c.op === "write" && (r += ">> "), e = c.op), c.value == 10 ? (r += "\u21B5", e = "") : r += (0, _chunkQEB57REV.C)(c.value);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          this.textarea.value = r, this.lastOutCount = this.device.serialOut.length, this.textarea.style.display = "block";
        }
      }
    }]);
    return Mt;
  }();
exports.K = Ln;
exports.J = In;
exports.I = yn;
exports.H = K0;

},{"./chunk-QEB57REV.js":3}],5:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.b = exports.a = void 0;
var _chunkQEB57REV = require("./chunk-QEB57REV.js");
var _chunk5XVCUSSZ = require("./chunk-5XVCUSSZ.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var y = (0, _chunk5XVCUSSZ.c)(function (d, S) {
  (function (u, e) {
    typeof define == "function" && define.amd ? define([], e) : typeof d != "undefined" ? e() : (e(), u.FileSaver = {});
  })(d, function () {
    "use strict";

    function u(t, a) {
      return typeof a == "undefined" ? a = {
        autoBom: !1
      } : _typeof(a) != "object" && (console.warn("Deprecated: Expected third argument to be a object"), a = {
        autoBom: !a
      }), a.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\uFEFF", t], {
        type: t.type
      }) : t;
    }
    function e(t, a, l) {
      var n = new XMLHttpRequest();
      n.open("GET", t), n.responseType = "blob", n.onload = function () {
        f(n.response, a, l);
      }, n.onerror = function () {
        console.error("could not download file");
      }, n.send();
    }
    function r(t) {
      var a = new XMLHttpRequest();
      a.open("HEAD", t, !1);
      try {
        a.send();
      } catch (l) {}
      return 200 <= a.status && 299 >= a.status;
    }
    function i(t) {
      try {
        t.dispatchEvent(new MouseEvent("click"));
      } catch (l) {
        var a = document.createEvent("MouseEvents");
        a.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(a);
      }
    }
    var o = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window.window === window ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self.self === self ? self : (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global.global === global ? global : void 0,
      c = o.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
      f = o.saveAs || ((typeof window === "undefined" ? "undefined" : _typeof(window)) != "object" || window !== o ? function () {} : "download" in HTMLAnchorElement.prototype && !c ? function (t, a, l) {
        var n = o.URL || o.webkitURL,
          s = document.createElement("a");
        a = a || t.name || "download", s.download = a, s.rel = "noopener", typeof t == "string" ? (s.href = t, s.origin === location.origin ? i(s) : r(s.href) ? e(t, a, l) : i(s, s.target = "_blank")) : (s.href = n.createObjectURL(t), setTimeout(function () {
          n.revokeObjectURL(s.href);
        }, 4e4), setTimeout(function () {
          i(s);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function (t, a, l) {
        if (a = a || t.name || "download", typeof t != "string") navigator.msSaveOrOpenBlob(u(t, l), a);else if (r(t)) e(t, a, l);else {
          var n = document.createElement("a");
          n.href = t, n.target = "_blank", setTimeout(function () {
            i(n);
          });
        }
      } : function (t, a, l, n) {
        if (n = n || open("", "_blank"), n && (n.document.title = n.document.body.innerText = "downloading..."), typeof t == "string") return e(t, a, l);
        var s = t.type === "application/octet-stream",
          C = /constructor/i.test(o.HTMLElement) || o.safari,
          v = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((v || s && C || c) && typeof FileReader != "undefined") {
          var m = new FileReader();
          m.onloadend = function () {
            var h = m.result;
            h = v ? h : h.replace(/^data:[^;]*;/, "data:attachment/file;"), n ? n.location.href = h : location = h, n = null;
          }, m.readAsDataURL(t);
        } else {
          var k = o.URL || o.webkitURL,
            p = k.createObjectURL(t);
          n ? n.location = p : location.href = p, n = null, setTimeout(function () {
            k.revokeObjectURL(p);
          }, 4e4);
        }
      });
    o.saveAs = f.saveAs = f, typeof S != "undefined" && (S.exports = f);
  });
});
exports.b = y;
var E = /*#__PURE__*/function () {
  function E(e) {
    _classCallCheck(this, E);
    this.checkpointInterval = 10;
    this.maxCheckpoints = 300;
    this.reset(), this.platform = e;
  }
  _createClass(E, [{
    key: "reset",
    value: function reset() {
      this.checkpoints = [], this.framerecs = [], this.frameCount = 0, this.lastSeekFrame = 0, this.lastSeekStep = 0, this.lastStepCount = 0, this.callbackStateChanged && this.callbackStateChanged();
    }
  }, {
    key: "frameRequested",
    value: function frameRequested() {
      var e = {
          controls: this.platform.saveControlsState(),
          seed: (0, _chunkQEB57REV.L)()
        },
        r = !1;
      return this.lastSeekFrame < this.frameCount ? this.loadControls(this.lastSeekFrame) : (this.platform.saveControlsState && this.framerecs.push(e), r = this.frameCount++ % this.checkpointInterval == 0), this.lastSeekFrame++, this.lastSeekStep = 0, this.callbackStateChanged && this.callbackStateChanged(), r;
    }
  }, {
    key: "numFrames",
    value: function numFrames() {
      return this.frameCount;
    }
  }, {
    key: "currentFrame",
    value: function currentFrame() {
      return this.lastSeekFrame;
    }
  }, {
    key: "currentStep",
    value: function currentStep() {
      return this.lastSeekStep;
    }
  }, {
    key: "recordFrame",
    value: function recordFrame(e) {
      this.checkpoints.push(e), this.callbackNewCheckpoint && this.callbackNewCheckpoint(e), this.checkpoints.length > this.maxCheckpoints && (this.checkpoints.shift(), this.framerecs = this.framerecs.slice(this.checkpointInterval), this.lastSeekFrame -= this.checkpointInterval, this.frameCount -= this.checkpointInterval, this.callbackStateChanged && this.callbackStateChanged());
    }
  }, {
    key: "getStateAtOrBefore",
    value: function getStateAtOrBefore(e) {
      if (e <= 0 && this.checkpoints.length > 0) return {
        frame: 0,
        state: this.checkpoints[0]
      };
      var r = Math.floor(e / this.checkpointInterval),
        i = r < this.checkpoints.length ? r : this.checkpoints.length - 1,
        o = i * this.checkpointInterval;
      return {
        frame: o,
        state: this.checkpoints[i]
      };
    }
  }, {
    key: "loadFrame",
    value: function loadFrame(e, r) {
      if (e |= 0, r |= 0, e == this.lastSeekFrame && r == this.lastSeekStep) return e;
      var _this$getStateAtOrBef = this.getStateAtOrBefore(e - 1),
        i = _this$getStateAtOrBef.frame,
        o = _this$getStateAtOrBef.state;
      if (o) {
        var c = 0;
        for (this.platform.pause(), this.platform.loadState(o); i < e;) {
          i < this.framerecs.length && this.loadControls(i), i++, c = this.platform.advance(i < e);
        }
        return i == 0 && (c = this.platform.advance(!0), this.platform.loadState(o)), r > 0 && this.platform.advanceFrameClock && (r = this.platform.advanceFrameClock(null, r)), this.lastSeekFrame = e, this.lastSeekStep = r, this.lastStepCount = c, e;
      } else return -1;
    }
  }, {
    key: "loadControls",
    value: function loadControls(e) {
      this.platform.loadControlsState && this.platform.loadControlsState(this.framerecs[e].controls), (0, _chunkQEB57REV.M)(this.framerecs[e].seed);
    }
  }, {
    key: "getLastCheckpoint",
    value: function getLastCheckpoint() {
      return this.checkpoints.length && this.checkpoints[this.checkpoints.length - 1];
    }
  }]);
  return E;
}();
exports.a = E;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./chunk-5XVCUSSZ.js":1,"./chunk-QEB57REV.js":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.platform_id = exports.platform = void 0;
exports.startEmbed = H;
exports.stateRecorder = void 0;
var _chunkZOBESMA = require("./chunk-ZOBESMA4.js");
var _chunkQEB57REV = require("./chunk-QEB57REV.js");
var _chunk5XVCUSSZ = require("./chunk-5XVCUSSZ.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var v = (0, _chunk5XVCUSSZ.e)((0, _chunkZOBESMA.b)());
Promise.resolve().then(function () {
  return _interopRequireWildcard(require("./msx-R44PHCEP.js"));
});
var s,
  t,
  l,
  h = function (e) {
    if (!e || e.length == 0) return {};
    for (var r = {}, n = 0; n < e.length; ++n) {
      var o = e[n].split("=", 2);
      o.length == 1 ? r[o[0]] = "" : r[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " "));
    }
    return r;
  }(window.location.search.substr(1).split("&"));
exports.stateRecorder = l;
exports.platform = t;
exports.platform_id = s;
function I() {
  _typeof(window.onerror) == "object" && (window.onerror = function (e, r, n, o, a) {
    var i = e + " " + r + "  " + n + ":" + o + ", " + a;
    $.get("/error?msg=" + encodeURIComponent(i), "text");
  });
}
function x() {
  var e = !1;
  document.addEventListener("visibilitychange", function (r) {
    document.visibilityState == "hidden" && t.isRunning() ? (t.pause(), e = !0) : document.visibilityState == "visible" && e && (t.resume(), e = !1);
  }), $(window).on("focus", function () {
    e && (t.resume(), e = !1);
  }), $(window).on("blur", function () {
    t.isRunning() && (t.pause(), e = !0);
  });
}
function y(_x, _x2) {
  return _y.apply(this, arguments);
}
function _y() {
  _y = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e, r) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (r) {
              _context.next = 3;
              break;
            }
            alert("No ROM found.");
            return _context.abrupt("return");
          case 3:
            console.log(r.length + " bytes");
            _context.next = 6;
            return t.loadROM(e, r);
          case 6:
            t.resume();
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _y.apply(this, arguments);
}
function k() {
  return $("#emulator").find("canvas");
}
function P(e, r, n) {
  (0, _chunkQEB57REV.D)("gif.js/dist/gif.js").then(function () {
    var o = k()[0];
    if (!o) {
      alert("Could not find canvas element to record video!");
      return;
    }
    var a = 0;
    o.style && o.style.transform && (o.style.transform.indexOf("rotate(-90deg)") >= 0 ? a = -1 : o.style.transform.indexOf("rotate(90deg)") >= 0 && (a = 1));
    var i = new GIF({
      workerScript: "gif.js/dist/gif.worker.js",
      workers: 4,
      quality: 10,
      rotate: a
    });
    i.on("finished", function (R) {
      console.log("finished encoding GIF"), n(R);
    }), e = e || 100 + (Math.random() * 256 & 3), r = r || 100 + (Math.random() * 256 & 15);
    var f = 0;
    console.log("Recording video", o);
    var m = function m() {
      f++ > r ? (console.log("Rendering video"), i.render()) : (i.addFrame(o, {
        delay: e,
        copy: !0
      }), setTimeout(m, e));
    };
    m();
  });
}
function M(_x3) {
  return _M.apply(this, arguments);
}
function _M() {
  _M = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
    var r, n, o, a, i;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (_chunkQEB57REV.J[s]) {
              _context2.next = 2;
              break;
            }
            throw Error("Invalid platform '" + s + "'.");
          case 2:
            exports.platform = t = new _chunkQEB57REV.J[s]($("#emuscreen")[0]);
            _context2.next = 5;
            return t.start();
          case 5:
            e.rec && k().on("focus", function () {
              t.resume();
            });
            r = e.n || "Game", o = e.url, a = e.r;
            if (!o) {
              _context2.next = 9;
              break;
            }
            return _context2.abrupt("return", (console.log(o), (0, _chunkQEB57REV.x)(o, function (f) {
              y(r, f);
            }, "arraybuffer"), !0));
          case 9:
            if (a) {
              i = (0, _chunkQEB57REV.l)(atob(a));
              n = new _chunkQEB57REV.k().decode(i);
            }
            return _context2.abrupt("return", (x(), y(r, n), !0));
          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _M.apply(this, arguments);
}
window.loadPlatform = d;
function d(_x4) {
  return _d.apply(this, arguments);
}
function _d() {
  _d = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(e.data && (e = e.data), exports.platform_id = s = e.p, !s)) {
              _context3.next = 2;
              break;
            }
            throw new Error("No platform variable!");
          case 2:
            _context3.prev = 2;
            console.log("starting platform", s);
            _context3.next = 6;
            return M(e);
          case 6:
            _context3.next = 11;
            break;
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0), alert('Platform "' + s + '" not supported.');
          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 8]]);
  }));
  return _d.apply(this, arguments);
}
function H() {
  I(), h.p && d(h);
}
window.addEventListener("message", E, !1);
function E(e) {
  if (e.data) {
    var r = e.data.cmd;
    if (r == "start" && !t) d(e);else if (r == "reset") t.reset(), l.reset();else if (r == "getReplay") {
      var n = {
        frameCount: l.frameCount,
        checkpoints: l.checkpoints,
        framerecs: l.framerecs,
        checkpointInterval: l.checkpointInterval,
        maxCheckpoints: l.maxCheckpoints
      };
      e.source.postMessage({
        ack: r,
        replay: n
      }, e.origin);
    } else if (r == "watchState") {
      var o = new Function("platform", "state", e.data.fn);
      l.callbackNewCheckpoint = function (a) {
        e.source.postMessage({
          ack: r,
          state: o(t, a)
        }, e.origin);
      };
    } else r == "recordVideo" ? P(e.data.intervalMsec, e.data.maxFrames, function (a) {
      e.data.filename && (0, v.saveAs)(a, e.data.filename), e.source.postMessage({
        ack: r,
        gif: a
      }, e.origin);
    }) : console.log("Unknown data.cmd: " + r);
  }
}
self === top && (document.body.style.backgroundColor = "#555");

},{"./chunk-5XVCUSSZ.js":1,"./chunk-QEB57REV.js":3,"./chunk-ZOBESMA4.js":5,"./msx-R44PHCEP.js":7}],7:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _chunkGL2HKYEL = require("./chunk-GL2HKYEL.js");
var _chunkY2G6ABZC = require("./chunk-Y2G6ABZC.js");
var _chunkQEB57REV = require("./chunk-QEB57REV.js");
require("./chunk-5XVCUSSZ.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var n = (0, _chunkQEB57REV.Y)([[_chunkQEB57REV.V.UP, 0, 1], [_chunkQEB57REV.V.DOWN, 0, 2], [_chunkQEB57REV.V.LEFT, 0, 4], [_chunkQEB57REV.V.RIGHT, 0, 8], [_chunkQEB57REV.V.A, 0, 16], [_chunkQEB57REV.V.B, 0, 32], [_chunkQEB57REV.V.P2_UP, 1, 1], [_chunkQEB57REV.V.P2_DOWN, 1, 2], [_chunkQEB57REV.V.P2_LEFT, 1, 4], [_chunkQEB57REV.V.P2_RIGHT, 1, 8], [_chunkQEB57REV.V.P2_A, 1, 16], [_chunkQEB57REV.V.P2_B, 1, 32], [_chunkQEB57REV.V.ANYKEY, 2, 0]]),
  o = 0;
var w = 16,
  a = [_chunkQEB57REV.V.VK_7, _chunkQEB57REV.V.VK_6, _chunkQEB57REV.V.VK_5, _chunkQEB57REV.V.VK_4, _chunkQEB57REV.V.VK_3, _chunkQEB57REV.V.VK_2, _chunkQEB57REV.V.VK_1, _chunkQEB57REV.V.VK_0, _chunkQEB57REV.V.VK_SEMICOLON, _chunkQEB57REV.V.VK_CLOSE_BRACKET, _chunkQEB57REV.V.VK_OPEN_BRACKET, _chunkQEB57REV.V.VK_BACK_SLASH, _chunkQEB57REV.V.VK_EQUALS, _chunkQEB57REV.V.VK_MINUS, _chunkQEB57REV.V.VK_9, _chunkQEB57REV.V.VK_8, _chunkQEB57REV.V.VK_B, _chunkQEB57REV.V.VK_A, null, _chunkQEB57REV.V.VK_SLASH, _chunkQEB57REV.V.VK_PERIOD, _chunkQEB57REV.V.VK_COMMA, _chunkQEB57REV.V.VK_ACUTE, _chunkQEB57REV.V.VK_QUOTE, _chunkQEB57REV.V.VK_J, _chunkQEB57REV.V.VK_I, _chunkQEB57REV.V.VK_H, _chunkQEB57REV.V.VK_G, _chunkQEB57REV.V.VK_F, _chunkQEB57REV.V.VK_E, _chunkQEB57REV.V.VK_D, _chunkQEB57REV.V.VK_C, _chunkQEB57REV.V.VK_R, _chunkQEB57REV.V.VK_Q, _chunkQEB57REV.V.VK_P, _chunkQEB57REV.V.VK_O, _chunkQEB57REV.V.VK_N, _chunkQEB57REV.V.VK_M, _chunkQEB57REV.V.VK_L, _chunkQEB57REV.V.VK_K, _chunkQEB57REV.V.VK_Z, _chunkQEB57REV.V.VK_Y, _chunkQEB57REV.V.VK_X, _chunkQEB57REV.V.VK_W, _chunkQEB57REV.V.VK_V, _chunkQEB57REV.V.VK_U, _chunkQEB57REV.V.VK_T, _chunkQEB57REV.V.VK_S, _chunkQEB57REV.V.VK_F3, _chunkQEB57REV.V.VK_F2, _chunkQEB57REV.V.VK_F1, null, _chunkQEB57REV.V.VK_CAPS_LOCK, null, _chunkQEB57REV.V.VK_CONTROL, _chunkQEB57REV.V.VK_SHIFT, _chunkQEB57REV.V.VK_ENTER, null, _chunkQEB57REV.V.VK_BACK_SPACE, null, _chunkQEB57REV.V.VK_TAB, _chunkQEB57REV.V.VK_ESCAPE, _chunkQEB57REV.V.VK_F5, _chunkQEB57REV.V.VK_F4, _chunkQEB57REV.V.VK_RIGHT, _chunkQEB57REV.V.VK_DOWN, _chunkQEB57REV.V.VK_UP, _chunkQEB57REV.V.VK_LEFT, _chunkQEB57REV.V.VK_DELETE, _chunkQEB57REV.V.VK_INSERT, _chunkQEB57REV.V.VK_HOME, _chunkQEB57REV.V.VK_SPACE, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  i = /*#__PURE__*/function (_x) {
    _inherits(i, _x);
    var _super = _createSuper(i);
    function i() {
      var _this;
      _classCallCheck(this, i);
      _this = _super.call(this);
      _this.numVisibleScanlines = 240;
      _this.defaultROMSize = 32768;
      _this.ram = new Uint8Array(65536);
      _this.slotmask = 0;
      _this.ppi_c = 0;
      _this.read = function (s) {
        var e = s >> 14 << 1,
          D = _this.slotmask >> e & 3,
          g = _this.slots[D];
        return g ? g.read(s) : 0;
      };
      _this.write = function (s, e) {
        var D = s >> 14 << 1,
          g = _this.slotmask >> D & 3,
          B = _this.slots[g];
        B && B.write(s, e);
      };
      _this.init(_assertThisInitialized(_this), _this.newIOBus(), new _chunkY2G6ABZC.e(new _chunkY2G6ABZC.d())), _this.bios = new _chunkQEB57REV.k().decode((0, _chunkQEB57REV.l)(atob(l))), _this.bios[3541] = 0, _this.bios[3542] = 0, _this.bios[3543] = 0, _this.slots = [{
        read: function read(s) {
          return _this.bios[s] | 0;
        },
        write: function write(s, e) {}
      }, {
        read: function read(s) {
          return _this.rom[s - 16384] | 0;
        },
        write: function write(s, e) {}
      }, {
        read: function read(s) {
          return _this.rom[s - 16384] | 0;
        },
        write: function write(s, e) {}
      }, {
        read: function read(s) {
          return _this.ram[s] | 0;
        },
        write: function write(s, e) {
          _this.ram[s] = e;
        }
      }];
      return _this;
    }
    _createClass(i, [{
      key: "loadBIOS",
      value: function loadBIOS(s) {
        this.bios = s;
      }
    }, {
      key: "getKeyboardMap",
      value: function getKeyboardMap() {
        return n;
      }
    }, {
      key: "getKeyboardFunction",
      value: function getKeyboardFunction() {
        var _this2 = this;
        return function (s, e, D, g) {
          for (var B = a, M = 0; M < B.length; M++) {
            if (B[M] && B[M].c == e) {
              var R = M >> 3,
                f = 7 - (M & 7);
              g & _chunkQEB57REV.O.KeyDown ? _this2.inputs[w + R] |= 1 << f : g & _chunkQEB57REV.O.KeyUp && (_this2.inputs[w + R] &= ~(1 << f));
              break;
            }
          }
        };
      }
    }, {
      key: "newIOBus",
      value: function newIOBus() {
        var _this3 = this;
        return {
          read: function read(s) {
            switch (s &= 255, s) {
              case 152:
                return _this3.vdp.readData();
              case 153:
                return _this3.vdp.readStatus();
              case 162:
                return _this3.psg.currentRegister() == 14 ? ~_this3.inputs[o] : _this3.psg.readData();
              case 168:
                return _this3.slotmask;
              case 169:
                return ~_this3.inputs[w + (_this3.ppi_c & 15)];
              case 170:
                return _this3.ppi_c;
            }
            return 0;
          },
          write: function write(s, e) {
            switch (s &= 255, e &= 255, s) {
              case 152:
                _this3.vdp.writeData(e);
                break;
              case 153:
                _this3.vdp.writeAddress(e);
                break;
              case 168:
                _this3.slotmask = e;
                break;
              case 170:
                _this3.ppi_c = e;
                break;
              case 171:
                var D = e >> 1 & 7;
                _this3.ppi_c = _this3.ppi_c & ~(1 << D) | (e & 1) << D;
                break;
              case 160:
                _this3.psg.selectRegister(e);
                break;
              case 161:
                _this3.psg.setData(e);
                break;
              case 252:
              case 253:
              case 254:
              case 255:
                break;
            }
          }
        };
      }
    }, {
      key: "vdpInterrupt",
      value: function vdpInterrupt() {
        this.probe.logInterrupt(255), this.cpu.interrupt(255);
      }
    }, {
      key: "loadState",
      value: function loadState(s) {
        _get(_getPrototypeOf(i.prototype), "loadState", this).call(this, s), this.slotmask = s.slotmask, this.ppi_c = s.ppi_c, this.psg.selectRegister(s.psgRegister);
      }
    }, {
      key: "saveState",
      value: function saveState() {
        var s = _get(_getPrototypeOf(i.prototype), "saveState", this).call(this);
        return s.slotmask = this.slotmask, s.ppi_c = this.ppi_c, s.psgRegister = this.psg.currentRegister(), s;
      }
    }, {
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(i.prototype), "reset", this).call(this), this.slotmask = 0, this.ppi_c = 0;
      }
    }, {
      key: "resetInputs",
      value: function resetInputs() {
        this.inputs.fill(0);
      }
    }]);
    return i;
  }(_chunkGL2HKYEL.c),
  l = "\nTFpHAADAAAAAI8Sp+W4NAVo7UZPzwxINvxuYmMPtEADDvyMAw/+T4QAkAMMbEQDDNJPhIZPhc5Ph\nJxEhAgAAAMM5EZOhk+HmGMNOEcNYEcMWAsMiAsMuAsNFAsNNAsNVAsNgAsNtAsOBAsOXAsOtAsPU\nAgDDXhnDHgPDggPDwgPDBQTDQwTDjwTDtwTD5gTDGQXDbwXDggXDjAXDlwXDOhfDUhfDXBfDahHD\nfBHDjxHDtBHD2RTDAxXDERXDNhXDVBXDSxXDJRbDQRbDUxbDVhbDtQfDZhbDahbDexbDjRbDnxbD\njxfDAhjDRxjDWRjDshbDxRbD1xbD6RbD/BbDDxfDIRfDahjDeRjDRAjDVgjDZwjDdgjDhgjDlwjD\nqQjDuQjD9AjDAgnDFAnDJgnDNwnDRwnDWQnDawnDfQnDjgnDpxjDYVE6F8NtF8NwF8NzF8OCF8OG\nF8OKF8OzGMPFGMPJGMPfGMNwGgAAAMk7IyWTH5MZTwYACQnDEQK+IygFIyMQ+MlOI2Zp6Trg8+a/\nRw4BzS4CyVEE9kA7BQTzy7l405l59oDTmfvlId/zeFE2d+HJzVUC9gDbmMn1zWAC8dOYyfN905l8\n5j9RHTsGA/ZAUUVRWAsMeEFPDFEeBSD7DSD4UXTl61FNPA6Y7aLCjQI9IPjhyetRIjsHDqPCo1FO\n68n+BNAhtgLDAAKCA8IDBQRDBPMh3/MBmQgWgO2jeO1RABS3IPf7wyICOq/8/ggoOj31OunzB5MB\n5vBvOuvztUcOB80uAvHAOwcOIerztiq/8wEgADsFsfULeLEg9/HJUSZRJcMuOwJCt8jNSAOT4f4E\nOBAqKPklJQEAAlE65g/NbQIqJvkBAAivUQLJUdoEHtkYAh7RUSDNYFFeVwEAIPN705g+AAAA05h5\nk6MMzYwFMAMMDAx605gQ4/vJzRYCPgAyr/wysPw6rvMysPM+ATLc8zLd8yqz8yIi+Sq38yIk+Sq5\n8yIo+Sq78yIm+c3UAs2PBM2oB83NB8O+AlF4AVH4OwYyURoqvVG1wVG1xVFvKsNRe1EvOq87Al7N\ntwTNUwPN3DsGOwJRO1Fwx1FwzWACBgOv89OYPCD7EPn7KstRv81ReSrPOwN85lG2+DsGNgM7BTbR\nOwU2rw4G8/UeBPUGIFE8EPvxHSD08cYgDSDr+yrVOwNE1zsDRNk7A0QZBTsCRA4Iw74COt/z5vFH\nDgDNLgI7Qnzn9hBHDFEEEbPzDgKvzUoFExMMk8LJOw4gUd69OwUek25R5/YCOw8pxzsFKT5/k4ID\nOw8rOwqCCFHr0TsWXNX1IWgFBgAJRut+I2ZvKY8Q/EfxsEdRK9ETEwzJAAAGCgUJBSYAbykpKTsi\n+gIpKe1bJvkZyYeHKij5FgBfGTtiYg8PPgjQPiDJ9f4gOA07QkwCKCL+BTAc8cn+DSD68eXFKrn8\nAQgACSK5/CEAACK3/MHhyfHJ8eXVxfXNIgjtW7n87Uu3/M25CDrp8zLy8yoq+e1Ly/MJEUD8Orn8\n5gcGAE8JzRIGAfAACVEIL+YHT1EGKrc7BEu3/PHB0eHJOrdRIfXF1eXNmwZRhCgaOiz5LzIs+eFR\nX9HB8VFRUcrJwVFLwcHxyfXlxdVXWO1LyfMJTzry8+YPR81FAvXmD7goEfH1D5MBUQMgDfHRweHx\nyZOjL8l6s/7/URbLAJMk5g+wzU0CGN3x5vBRgdpBPE8+B6g8R8XNRQJHGs1IBg0oAw8Y+k86LPmh\nT3ixURwjE8EQ4clHUlBQUlQAOyImBcn1ze8GO4Vb89OYEPwNIPn7yc37BjuFh1HCO4SGOvb6tygQ\nUa/aYAL+B1EIOAGH5eYDD2/mgKwXyxUXfRfz05k+jtOZ4X3TmcnN5QY7g9zvBjuD3FESj9OZ25n1\nr1HC+/HJ25kBADtCKQEB4JOiAlGEA4CTogQ7ojgBCAiToTtnntwHPgAhAAgBAAjNbQI+9SEAIAEg\nAFEDAQf1UR8hvxsRUdWXAsnJUQbtWyQ7gmfDlwLAO4Nm0OUhxQfNAALhyc0H3Af4Bw4IOrDz/igB\nwAM4CAGABxgDAQADKiL5PiA7AlYBIbL7dxGz+wEXAO2ww0USrwEAGCok+W/FURXBOurzKsnzw20C\nUQHmD0c7ohawAQAIURhRDO1LIPlvJgApKSkJBggRQPzF1eU6H/nNvyPh0cESEyMQ78nl9SFPCM2f\nCfHhyVJJR0hUQwBRCmE7BQpMRUZRyXI7BQlVUFGHgTsFB1Q7BQiROwUIRE9XTlGJojsGGVHKO0LQ\nO0LYyVNDQUxYWQDF7UNRCVO5/Cq5/CmTAi4ABgA+/zIs+XnmBygKRz7/px8Q/FGH+DvC3SIq+cHJ\nTUFQUTM6LPkqKvnJRkVUQ0g7A2MNCTsEY1NUT1JFUYofOwYKRVRBVFJRSjE7BQpSRUFEUZtCOwgb\nUYhSOwUITlFJWFFKZDsFCkdUQVM7BN12OwUKUE5USU5JUUqIOwY+Q0FOOwNgmTsJCUwAPiPTLs2r\nCT4A0y7JfiO3yNMvGPjmD/4KMAXGMNMvycY3k4E7Y1fNswnxk2HJfM3DCX2TYVofAHGTH5Mfkx+T\nH5MfkxyTBMnd4f3hO8Lx2QiTovvJPoLTqz5Q06qv0/880/480/080/wh///Z26j28Ed406g6//8v\n9vBPeTL//yEA/z4Pd74gCC+TgQMlGPIkfLcoFdm8OAUoA9kYDC4AZ9l42UfZedlP2XnWEE8wy3jW\nEEcwu9l9tygGEfUlw4caeNOoOwJB2SEA8/nNFw/NQxDNTQf7zU4RBg8REw4hAIDF5dU6wfw7pGa+\nIBLrEyMQ7N0hEID9KsD8zTQkGBE+BTLq8zLr883CAyFWJc2OEPsGeM2KED4EUQyTgerzPg8y6fM+\nHTKvOwgbzSIOzdr+zQEPPgEymf2vMin7zcv+IS8mURPDZRpDLUJJT1MgTG9nbyBST00hyfwRyvwB\nPwA2AO2wIcH8r+W2IQBAzWkOzHY7AplRwct/KAbGBMtnKOThIzzmAyDbyUfNvyMj9XiTolfxX3jJ\n5c1ZDiFBQs0hEXjhO8IqvTsCgfH1R+YDxjDNtBF4y3goDz4uUUIPDzsFDD4Nk4IKk4Hx4SMjzfgO\nKBVP1d3h9f3h25m3+rYO9eXNNCTz4fEOAFFUAsvpk8Txk8T5R+YMX3g7wsTmMLNffJPBA7MhyfwW\nAF8ZcXjJxc1ZDnqzeMHJUQsGQH7LfygI5SHQOwKM4SMQ8Mk+ACGA83cRgfMBfQztsD7JIQBRBgHz\nAX8AUYaa/XcRm/0BTQJRBv8h2vt3Edv7ARVRVAAh8FEG8fsBJ1EGUQQi+PMi+vPZIkj82SGA8yJK\n/CJ09iE7ACURgPMBGlFaAAAis/MhAAgit5OhGCK9k6EgIr+ToQAiwZOhGyLDk6E4IsVRlsdRlslR\nlstRls1Rls9RutFRkNVRkNdRkNnzIVn5IvPzIXX5Il35IfX5ImP5IXX6Imn5Pn8yXPkyYvkyaPk+\nJzKu8z4gMq/zWgQEET4YMrE7QjI7SzegMuDzOsH8Mh/5KgQAIiD5PsMhtBEi5f4y5P7J8yHB/Nuo\nV+Y/TztkFV/mDzL//0dRQ7ggFXvmD/ZQOwgIBQaAexgEBgB7L1EMetOocCN5xkBPMMX7yXYQ/VoD\nBT4FMAl+t8jNtBEjGPdRAd0hiQDNPxojGPMOIFEXt8AOKDqw8/4p2A5QycX1zasQUQbtRIE8yz9v\nOt3zPYVvJgBEOtzzPcs/MAEJyyHLELcg9O1LIvkJ8cE7Qm/4EDvlV1lOQ0hSAM1I/34j/gDI/jrI\n/jA4A/462P4gKO3+CSjpt8n1zeT+8cl8usB9u1FyMhFR8kdFVFlQUgAI2eF+I14jViM7RIrlCNnD\nNCQejz4PzVIXwzoXUSljOwUpSU5JRk5LO+LUdTsFClNUUlRNUwD75dUq+vPtW/jz5z7/IAGv0eHJ\nzcL9OwgNIAT7dhjyfvUjff4YIAM7QkX68/FRHVoDA+ak/TsiJQIwE/H1zQQUk4HaEc0ZFDrd8zJh\n9juCwcnNERXQKBL1Oqf8t8K9EvH+IDgq/n/K9hPNvRDNTQIq3PM6sPMkvDgEItzzyRGx+yYAGa93\nUQ7NbBLDLhIGDCGIFMMIAj4gzfIROt3z5gf+ASDyyVFusfMsvTAJ5c1FEs2QE+EtUXchAQGTws0u\nE1EZ5VE6OtzzIbHzvjAIzS4SUQ4Y7+FRWD4BMt2Tof8yp/zJOt3zIbBRGgM8GB87BSbQPDLc8xja\nURI9IAtRDD3IUQg6sPNRbTsGB1FBOwckyUc8IAwyp/zxBg8hrDsCpvEQBA4AGAQQGA4B/jQoBv41\nKAgYLnkyqvwYKHkyqfwYIhAIBh+QMt3zGBgQFlFC3PM+AxgNPgEYCT4CGAU+BBgBrzsJldA8OwNz\n3TsCc1EBzWwSIbH7OtzzXxYAGXc6sPM8Id3zlk8GAD4gzb0Qw20CURk7AvhFOrHzMtzzkEcEUSQY\nDlEU6z1RCJPhzc4TEPA7IgMmAFEcVx4AlT1RNyGx+xnrYmsr7bjDLhM7CTw7Cjk7Auc7BjnNLhM7\nBzxRuRFROVRdI+2wyfXFBgA6sPNPzdwTwfE7QiARGPzNgQLB0dXFIVEClwLB4Qnr4Qk7Asz+Acg7\nI9XDkhI6qfz+AVoDBEwC0DrM+zsCxU0COwoNUQrNRQIyzPunFgBfyxPLEpNmryGv/L4gBSq38xgD\nKsHz5RkRGPwBCADNgQI6qvz+ACAHIRj8BggYBSEe/AYCfi93IxD64RH4BxnrURBRYJcCzb0QPv/D\nTQIHVhYIkhIJHxIKLhILRRIMtgcNbBIbchIceBIdkhIepxIfsBJqtgdFtgdLLhNKTBJsKxNMTBNN\nkBNZDBNBpxJCsBJDFRNEIhNIRRJ4BBN5CBPNtv/1zSUWOAjNAxUo9vEYDD4NzfYUrzIV9PE3yfXT\nkT4A05Av05Dxp8nNu//bkB8fPv8wAS+nO2LipvyvvncgCPH+ASATdxgR8f5AOAn+YDAF1kC/GAL+\nUDfhyc3b/Tqq9qfKVBU7Q8zDVBU/IADN4P0hSBXNjhAq3fMiyvsRsPsmAH0Zd82PEf5/yuQV/iAw\nEQYUIeUVzQACrzKo/DtCj+P1Oqj8p8SLFfHfGMnNBBQq3PMivPY+IDKn9jskbP4gICg7ZKO8IB0m\nOyPifrcoEzpR2E0CKrz2O2JSwxkUPiD1UQ7f8VEzGMPJN+HJkwKvk8QYABgA1hXXFRgA2hXbk6Hc\nk2GTJN0V3jsFBOGT4+I7BxIYAOM7BwTbqubw9gfTqtup5hDAUYUGUYUCwDc7IihMFjuF4VNDTlRD\nAMNBFlENYTsFDUJFRVAAOwKcUQx1OwUMRk5LU0I7ogmGOwUJRVJBO6UbmDsFCkRTUFFKO0N42Dqw\n/M29/bfKWgMOOFEdvlHdN8lUQVBJT05RcNE7CgtRiuJRylHcRlFK9TsJHE9R7wgXOwkLVVRRSxpR\ny1HdRgDFR9uqBCgMy+cFKAnLpwUoBMHJ7hDTqsHJHgA+CM1SFzyTZh64PgeT4cnz06D1e9Oh+/HJ\n06Dbosm3Pg4oATzTq8nbqMnTqMnbmcnzxU87IjyxOyI7wfvJzaf/yc2s/8k6ZPinycX+ACAZPgjN\ncxcPkwEv5g/lIfIXFgBfGX7hwafJ5dUeAD0oAsvzPg/zzVwX++a/s187w2k+DlGIUSgh4hcGAE8J\nftFRaD4Ak4EAAQUABwgGBwMCBANRRAAHAQgFBgAHAwACAQQFAwD+BTADtyAJOwNt9v48yfM91R4D\nR+YBKAIeTD4PzVwXOwdeeAYQ5gIoAgYgOwVn0aAoAhgDPv/Jrzsi1VMYOyMwr8lHVFBBRDsiQmRR\nylFJREwAzZoYRgQjfpAjI6ZvJgDJUQd+PEcjlsh4IyPlpisrK3fhI34jZm8FSAYACXP2Ackq8/NH\nBweAgE9RCMm326rLtyACy/fTqjsCZL47BVJPVVRETFAALgIYAzo4+9UWAF0hQfsZHiW3KAQZPRj5\n0ckq+vMi+PM74yrZCJOi/eXd5c2a/duZtzLn8/JOGc2f/Sqe/CMinvyvMtn7OvbzPTL28yA3PgOT\nwa/NAhgv5gEy6PPNYxkq+PPtW/rz5yAbOvdRHffzIBIh2vsB/wtxIxD8URg+AVEMWg4ERM3W/e1F\nOyLlTwYLIeX7eTsi63cjDBD23VE0EeX7Ouv7DyG+JjgDIe4mDgsa3b4AxLQZL92mAAga3XcACAYI\nDzgaIxD63SMTDch5/gUg3SHeJxjY9T4FMvfz8cn1UQsoB/4EKBzDExp4/gMgBD4AGCH+ApPhARgZ\n/gEgNT4CGBF4/ghRCQMYCP4HICQ+BBgA5cXVB5MBIX/4O0JR6xqnKAjVzSAa0RMY9NHB4RgJfqco\nBeVRCeHxw6I7Au93WgcAeNU7A/rRyDsiS80/Gt3hyQjZ9cXV5e1X9dn95Tr4+vX94QjNNCSTodnx\n4l4a++HRwfHZCMkY/s3a/hEiJsOHGuX1IYAaOyO1EQdRSENBTEJBUwDbmSEGKAYMDpntswEACK/T\nmAt4sSD4Ib8bUQZ+05gjUUf3PgDTmT5A05kh7iVRTH6nIPka05gTGpPhw2UaWh8GQZMekx2TAzxC\npaXDvUI8PH7b273DfjxsqpJERCgQABAoRIKT4zg41v7WOJPhfHyT4pMBGBiTgf///+fnk4E8QoGT\nAUI8w71+kwG9wwwECHCIiHAAAJOiIHAgIDAoKCDgwAA4PCQk5NwYABBEOKo4RBAAEBAQOJNhkwLv\nOwWD71HHEOCT5Q+T5TsGEJMDUSD/UecAUZiT4TsHKFFNUXiT4oFCJBgYJEKBAQIECBAgQICAQCAQ\nCAQCAVEa/1FtkwYgkwEAIAAAUFBRyABQ+JMhURBwoHAocFERyNAgWJgAAGCQYKiYYAAAQEBR3yBA\nkwFRFyA7AnKT4QAgqHBQiJPiIPggUUiTAlHl+DsHZVFHOwOGOyIXqKg7Ih8gYCAgIDsjJwhwgFEi\n+AgwCFFQEDBQ+DsC1viAcFGIMEA7JE/4iBBRKVFoOydfeAiT4TsDVTsDZ5Pik2EYYIBgOyKhAPg7\nBHnAMAgwwFFoMDsD6HCImKiomEBRePiIiAAA4JDgkIjwUVCAgDsCUPBIkwFRCPiA4IA7A5CAUUFR\nmLhRWFGvUTBwOyI5UQg4CAg7A6CIkKDgkFEQgJMCUTDYqKhRoMioqJiYUWhRBlFg8IiI8DsESIio\nkGhRyKCYUQiAcAgIOwJwOwJQIDsCYJMBeJPjUFBRiKioqNiT4VAgUDsCUDtCXlFg+DsiT/hRODsi\nkDsiCDsj6VEIOyKYUQhAoDtK7vgAIDsn/XiImGhRJ4A7AnpRiICAeAAACAh4OwNwUTqY4JPhMEhA\nQOBAOyJRUVAIcFGoiAAAIABgOwP4EAAwOwJiYICAmKDgmAAAwDsGgADwqKiok+NRqDtkETsFCDsD\n+jsDSAgAALjAUUZRCPA7AvhAQPBASDBRSDsE+JPiOwL4k+E7A/gAAMgwYJg7Bhg7Ivr4MED4AAAQ\nICBAICAQO0PQkwEAUUVRCwBQOwb4IFBQUR87JeAgQFA7BVgIEDsE4CBQOyQIUDslEEAgk+QgOwUI\nOyQYIEAgUFHoUDslGEAgOwYIOyQIIFCT5EA7QtmT4VA7Q2FREJPlGDtCUTtDkdBosNgAAHigsOCg\nuFFwOyQYUDslIEBRaTsDSDsEoEAgk+Q7BLAIcFFnUag7RVAgIDsDmCAgUEDgQEiwUR5Q+CBwIACA\n0LCwuNCIgDhA8JMhOAAIEDsEyBA7BZgQOwVgEDsFWChQOySoKNCoqDtCsDtFIDuF0QBwIAAgYDsk\nwADgOyOvk+E7IpdASFAwSJA4k+IoWLgIAFEgO0OYkwFIkEiT45BIkDsCWHA7IwAoOyVoUQg7A4Ao\nOyUwKDsF0FFgk+Q7BpAAk+P8O2KY6AgwSADYk+PgaDDoOwJoUCg7J+A7RChIUCBoqAAAfKioqGgo\nKERwgHCIO4RKkwL///CTAQ+TAVFEkwQ7yBM8UZpRzMCTBVFkUWz8kwUDkwU/kwURIkSIk2KIRCIR\nk2L+fDg7Z2IQOHz+gMDg8ODAgAABAwcPBwMBAP9+PBgYPH7/gcPn///nw4E7AlQ7Big7AmQ7BJST\nBFFUMzPMzJNiABAoKHw7o+g4kyE7AltQiKhQOwy+k+JRbDsG3JMCOwjaaJA7gnBgkOCQkOCAAPiI\nO4KpAAD4UJMBSFEISCBAiDtDmHiQOyQmiIjIsFFaUFAgk0FwIHCoqJOBOyK+O6WAiFDYO6KgMEg7\nZLBQqDsCiAAQUWBAURmA4IA7BSA7gwA7oo87Alg7wyhRATujmJPhO6Owk+I7ZbqTA8BRIFEmOyLI\naLCTQjuCiTsEXzB4eJPjUUOTYRwQEJBQMBAA4JCQUYxgEGA7JEhwkwMAqlWTJMXl9Ven8/zeJPHh\n5dXl9VoDDN5vRz78zfgjX0Xx5gOT4UfbqFejsOHNgPN70fXLesQaJfHhwckEBcgHBxD8yeVX1VG4\nweHV5TsMNno7CjZZzYXz0eVRtuHJCNnz/eXx3eXhV6dRMtVRIUcO/N3l8VF3hygHywDLAT0g+SFn\nJOXbqPWhsNnDjPNRK9FRtgjZyfPlb1EqPqvGVQXyeyRXOwNuZ0c+wAcHBfKLJF8vT3qjR32n8tYk\nDw/mA+XFOwUipSSjR3rmwGfbqG/mwLRaBAxiobBPMv//fdOoIcX8euYDhW98zgBneXfB4duoobDT\nqOHJVw8PX+bAb9uoT+Y/tdOoe+YDb3wmAxgCKSnWQDD6fC9nUX5fpLVRPm9506hRPE8GAH0hxfwJ\nd8l6Dw/mwEdRs7BRM1EbOwcaUVlzydOoXhgD06hzetOoUQQIzZjzCPGT4cnd6QBaBQ87MC4yOTsk\n8mNiaW9zLnNmLm5ldA0KQ2hhcmFjdGVyIHNldDogVVMNCkluUQdydXB0IGZyZXF1ZW5jeTogNjBI\neg0KS2V5Ym9hcmQgdHlwZVHmkyQASW5pdCBST00gaW4gc2xvdDogAENhbm5vdCBleGVjdXRlIGEg\nQkFTSUNRXS5RKUVSUk9SOgBNRU1PUlkgTk9UIEZPVU5ELgBDQUxMRURRCk4gRVhJU1RJTkdR8i4A\nU1RBQ0sgUbIuADsCb05vIGNhcnRyaWRnZSBmb3VuZC5RT1RoaXMgdmVyc2lvbiBvZiA7BfxjYW4N\nCm9ubHkgc3RRLjsIM3NRLlBsZWFzZSByZVHUeW91ciBNU1gNCihlbXVsYXRvcikgd2l0aCBhOwgw\nDQppbnNlcnRlZC4AMDEyMzQ1Njc4OS09XFtdOwAnYCwuLwBhYmNkZWZnaGlqa2xtbm9wcXJzdHV2\nd3h5eikhQCMkJV4mKihfK3x7fToifjw+PwBBQkNERUZHSElKS0xNTk9QUQBSU1RVVldYWVoACayr\nuu+99PvsBxfxHgENBgW78/IdAMQRvMfNFBUT3MbdyAsbwtvMGNISwBrPHBkPCgD9/AAA9QAACB/w\nFgIOBAP3rq/2AP4A+sHO1BDW38reyQzTw9fLqdEAxdXQ+ar465/Zv5uY4OHnh+7pAO3at7nlhqan\nAISXjYuMlIGxoZGzteakoqODkwCJloKViIqghditnr6cnQAA4jvCpOjqtrjkjwCoAI5RBQCZmrAA\nkrK0AKUA41FHO4QvkwgbCQAIAA0gDAAAHR4fHCorLzspMywuAIBwgQCCAYT1h1oEAnWTH5Mfkx+T\nH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+THpMdkwPF5cEbe7IoAwkY+FoDGKu1Mc2fCT4g\n0y560y970y/x4clST01CQVM7H6CTH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5MekxyTBj46kz+T\nP5Ms5fUhSTpaBRvgWgMMYHN0YXRlbWVudHMgYXJlIG5vdCBpbXBsUYtlZCB5ZXQ7P7uTH5Mfkx+T\nH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mf\nkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+T\nH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TBc2O\nWgpBt5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+T\nH5Mfkx+TH5Mfkx+TH5MfWh5ixDsfeZMfkx+TH5Mfkx+TH5Mfkx+TH5MeAOX1ISJ9WgQ60XVua25v\nd25AN0QxNwA5fd0hiQHNPxrJ3SGFAcM/Wh9abpMeOw71H347DfVFMTQ735aTH5Mfkx6TC1oNaeX/\nzW8AWgdqSmIAKiL5AQADPgDNVgABAALNRwABA5+TogQAk6FaA3T+B5MBR1oDcC9aA3AqyfNRIyok\nUS4ECesBMAMhvIDNXFHJAQnrKgQACQEAA1FKyfM7Bxvsg1HJEQABGVEWPvFReyL5AYQACeshHIcG\nCsXl1QEYAFEd4QEgUQzhUQUJwRDpO01I/viTYh9/k6E/OwwSHzsIAvj+OwYDfx9aA1VJ/vz48B8/\nUS2TBVFIAFG+kwk7CS8Afz8f+Pw7CwdaBVbh/v4fP387CUH+/DsGUPiTAfCTAR+TAT+TAVFIUdBR\nzTsGKzsGCDsHJMffUQ3wOwi3WgZcfjsDen8//pMB/Pz8fDsGKAAA/PgfP3/+UWnwf1Ef/FFk8FFr\nfz8fH/D++PAff3z8+D8/f5MDOwZMOwYIOwaYUUdRUFEzkwN8PDw8x5MBHx7j45Pi/Pjw8FFhOwb/\nOwUfkwT+fzstdn87B7hRKz9+kwFRHvAfHz9+OwJEOwK0k+J4eHh8UVg/OyRI/vz8+DsDTzsD0loI\nXXOTBTsEcfD4/HyTAlEDf39/PzsKcFGIOwJkOwwv/B+TgfA7Itw8jx9/OwJ0n5MBfH5+f+M+Pz87\nJE7wPlEiOwZEOyI6OyLQ/vjxPPA7Isc7JS1RkHz8+DsiaAA/OyJV8Pj8k8L4UT07TRc7TTU7BwY7\nBFz++D87S3k7SYo7CEB/OwovOwYCOyJQ/viTofA7Tac7AvaTCztz8gkJk2KQkAmTgZNhkxFRGFGX\nOwUnkAGTARmTAZGRkTsHHFEEkQmRGRlRVJMGOwYIOwcZOwUoOwU4kTsGeDsHETsFIFEUUbg7QoCT\nCvGTAVFQCFEfCJCQkJPjk2GBUSyBUS07BhyTgQ8Pk8EPkwFRaJPiH1FBUVZRUTsJSJPiURFRhFEu\nD/FRRlHBUWtRnzsFI/GAkJCAkICAOwJwCAkICAkYGRkYGRgYGVGVOwdEAQE7B1k7B1w7Bho7BnQ7\nJBg7CA6TBFHOOwSsOwJzCAg7Al8ICfHx4ZNB4VE0Hh+T4lFIHx5RBJPlUVCT4VF4k+JRkPHhk+E7\nBWA7BkoPDx47BXA7BEgICAhaA1/Qk+GTA1ETGJMC4ZMBDpMBUWST4x4eUQhRTuHhHpNikwFRhDsG\nAVEnUUZRJx47BTCT4lHSUZ4BAVE5OwsQUU07BnQYGBiBkwIICDtEClELUQZRDTsHkFGak+GTAxiT\npBiBUW47BrRRq1EsUVU7CEA7AliT4pMCOwffUYWAURCEOwUhBDtmAwSTDVHOAICAgYKDhIWGhzsj\nJpMJiImKi4yNjo+QjJMK45GSkwCUjJWWUUSXOwkQ5JiZmoyMm5ydnp+goaKjnaSlpp2TAYzkp6ip\njIyqq4yMrK2ur4yMsLGys7OztIzktbVRLraTYbe4ubqMjLu8vb6+v8CM5MHCw4yMxMXFxsfIycrL\nzM3OxcXFz9CM5NHC0jsLgZMF5NPU1dbX2Nna2zsHC1YwLjI55IDc3d7C3+Dh4pMM5VoGXW2TH5Mf\nkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+T\nH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mf\nkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+T\nH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+TH5Mfkx+THpMc/w==\n";
var h = [{
    id: "helloworld.asm",
    name: "Hello World (ASM)"
  }, {
    id: "redbook_kbd.asm",
    name: "Redbook Keyboard Scanner (ASM)"
  }, {
    id: "siegegame.c",
    name: "Siege Game"
  }, {
    id: "eliza.c",
    name: "Eliza"
  }, {
    id: "hello.wiz",
    name: "Hello (Wiz)"
  }],
  F = [{
    id: "text.c",
    name: "Text Mode"
  }, {
    id: "hello.c",
    name: "Scrolling Text"
  }, {
    id: "text32.c",
    name: "32-Column Color Text"
  }, {
    id: "stars.c",
    name: "Scrolling Starfield"
  }, {
    id: "cursorsmooth.c",
    name: "Moving Cursor"
  }, {
    id: "simplemusic.c",
    name: "Simple Music"
  }, {
    id: "musicplayer.c",
    name: "Multivoice Music"
  }, {
    id: "mode2bitmap.c",
    name: "Mode 2 Bitmap"
  }, {
    id: "mode2compressed.c",
    name: "Mode 2 Bitmap (LZG)"
  }, {
    id: "lines.c",
    name: "Mode 2 Lines"
  }, {
    id: "multicolor.c",
    name: "Multicolor Mode"
  }, {
    id: "siegegame.c",
    name: "Siege Game"
  }, {
    id: "shoot.c",
    name: "Solarian Game"
  }, {
    id: "climber.c",
    name: "Climber Game"
  }],
  k = /*#__PURE__*/function (_Q) {
    _inherits(k, _Q);
    var _super2 = _createSuper(k);
    function k() {
      var _this4;
      _classCallCheck(this, k);
      _this4 = _super2.apply(this, arguments);
      _this4.getMemoryMap = function () {
        return {
          main: [{
            name: "BIOS",
            start: 0,
            size: 16384,
            type: "rom"
          }, {
            name: "RAM",
            start: 49152,
            size: 12800,
            type: "ram"
          }, {
            name: "Stack",
            start: 61440,
            size: 768,
            type: "ram"
          }, {
            name: "BIOS Work RAM",
            start: 62208,
            size: 3328
          }]
        };
      };
      return _this4;
    }
    _createClass(k, [{
      key: "newMachine",
      value: function newMachine() {
        return new i();
      }
    }, {
      key: "getPresets",
      value: function getPresets() {
        return h;
      }
    }, {
      key: "getDefaultExtension",
      value: function getDefaultExtension() {
        return ".c";
      }
    }, {
      key: "readAddress",
      value: function readAddress(s) {
        return this.machine.read(s);
      }
    }, {
      key: "readVRAMAddress",
      value: function readVRAMAddress(s) {
        return this.machine.readVRAMAddress(s);
      }
    }]);
    return k;
  }(_chunkY2G6ABZC.J),
  C = /*#__PURE__*/function (_k) {
    _inherits(C, _k);
    var _super3 = _createSuper(C);
    function C() {
      _classCallCheck(this, C);
      return _super3.apply(this, arguments);
    }
    _createClass(C, [{
      key: "getPresets",
      value: function getPresets() {
        return F;
      }
    }]);
    return C;
  }(k);
_chunkQEB57REV.J.msx = k;
_chunkQEB57REV.J["msx-libcv"] = C;

},{"./chunk-5XVCUSSZ.js":1,"./chunk-GL2HKYEL.js":2,"./chunk-QEB57REV.js":3,"./chunk-Y2G6ABZC.js":4}]},{},[6]);
