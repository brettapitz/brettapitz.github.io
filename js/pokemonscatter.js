(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // ns-hugo:/home/brett/Sites/Personal/dev/assets/js/d3.min.js
  var require_d3_min = __commonJS((exports, module) => {
    !function(t, n) {
      typeof exports == "object" && typeof module != "undefined" ? n(exports) : typeof define == "function" && define.amd ? define(["exports"], n) : n((t = typeof globalThis != "undefined" ? globalThis : t || self).d3 = t.d3 || {});
    }(exports, function(t) {
      "use strict";
      function n(t2, n2) {
        return t2 < n2 ? -1 : t2 > n2 ? 1 : t2 >= n2 ? 0 : NaN;
      }
      function e(t2) {
        let e2 = t2, r2 = t2;
        function i2(t3, n2, e3, i3) {
          for (e3 == null && (e3 = 0), i3 == null && (i3 = t3.length); e3 < i3; ) {
            const o2 = e3 + i3 >>> 1;
            r2(t3[o2], n2) < 0 ? e3 = o2 + 1 : i3 = o2;
          }
          return e3;
        }
        return t2.length === 1 && (e2 = (n2, e3) => t2(n2) - e3, r2 = function(t3) {
          return (e3, r3) => n(t3(e3), r3);
        }(t2)), {left: i2, center: function(t3, n2, r3, o2) {
          r3 == null && (r3 = 0), o2 == null && (o2 = t3.length);
          const a2 = i2(t3, n2, r3, o2 - 1);
          return a2 > r3 && e2(t3[a2 - 1], n2) > -e2(t3[a2], n2) ? a2 - 1 : a2;
        }, right: function(t3, n2, e3, i3) {
          for (e3 == null && (e3 = 0), i3 == null && (i3 = t3.length); e3 < i3; ) {
            const o2 = e3 + i3 >>> 1;
            r2(t3[o2], n2) > 0 ? i3 = o2 : e3 = o2 + 1;
          }
          return e3;
        }};
      }
      function r(t2) {
        return t2 === null ? NaN : +t2;
      }
      const i = e(n), o = i.right, a = i.left, u = e(r).center;
      function c(t2, n2) {
        let e2 = 0;
        if (n2 === void 0)
          for (let n3 of t2)
            n3 != null && (n3 = +n3) >= n3 && ++e2;
        else {
          let r2 = -1;
          for (let i2 of t2)
            (i2 = n2(i2, ++r2, t2)) != null && (i2 = +i2) >= i2 && ++e2;
        }
        return e2;
      }
      function f(t2) {
        return 0 | t2.length;
      }
      function s(t2) {
        return !(t2 > 0);
      }
      function l(t2) {
        return typeof t2 != "object" || "length" in t2 ? t2 : Array.from(t2);
      }
      function h(t2, n2) {
        let e2, r2 = 0, i2 = 0, o2 = 0;
        if (n2 === void 0)
          for (let n3 of t2)
            n3 != null && (n3 = +n3) >= n3 && (e2 = n3 - i2, i2 += e2 / ++r2, o2 += e2 * (n3 - i2));
        else {
          let a2 = -1;
          for (let u2 of t2)
            (u2 = n2(u2, ++a2, t2)) != null && (u2 = +u2) >= u2 && (e2 = u2 - i2, i2 += e2 / ++r2, o2 += e2 * (u2 - i2));
        }
        if (r2 > 1)
          return o2 / (r2 - 1);
      }
      function d(t2, n2) {
        const e2 = h(t2, n2);
        return e2 ? Math.sqrt(e2) : e2;
      }
      function p(t2, n2) {
        let e2, r2;
        if (n2 === void 0)
          for (const n3 of t2)
            n3 != null && (e2 === void 0 ? n3 >= n3 && (e2 = r2 = n3) : (e2 > n3 && (e2 = n3), r2 < n3 && (r2 = n3)));
        else {
          let i2 = -1;
          for (let o2 of t2)
            (o2 = n2(o2, ++i2, t2)) != null && (e2 === void 0 ? o2 >= o2 && (e2 = r2 = o2) : (e2 > o2 && (e2 = o2), r2 < o2 && (r2 = o2)));
        }
        return [e2, r2];
      }
      class g {
        constructor() {
          this._partials = new Float64Array(32), this._n = 0;
        }
        add(t2) {
          const n2 = this._partials;
          let e2 = 0;
          for (let r2 = 0; r2 < this._n && r2 < 32; r2++) {
            const i2 = n2[r2], o2 = t2 + i2, a2 = Math.abs(t2) < Math.abs(i2) ? t2 - (o2 - i2) : i2 - (o2 - t2);
            a2 && (n2[e2++] = a2), t2 = o2;
          }
          return n2[e2] = t2, this._n = e2 + 1, this;
        }
        valueOf() {
          const t2 = this._partials;
          let n2, e2, r2, i2 = this._n, o2 = 0;
          if (i2 > 0) {
            for (o2 = t2[--i2]; i2 > 0 && (n2 = o2, e2 = t2[--i2], o2 = n2 + e2, r2 = e2 - (o2 - n2), !r2); )
              ;
            i2 > 0 && (r2 < 0 && t2[i2 - 1] < 0 || r2 > 0 && t2[i2 - 1] > 0) && (e2 = 2 * r2, n2 = o2 + e2, e2 == n2 - o2 && (o2 = n2));
          }
          return o2;
        }
      }
      class y extends Map {
        constructor(t2 = [], n2 = x) {
          super(), Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: n2}});
          for (const [n3, e2] of t2)
            this.set(n3, e2);
        }
        get(t2) {
          return super.get(_(this, t2));
        }
        has(t2) {
          return super.has(_(this, t2));
        }
        set(t2, n2) {
          return super.set(b(this, t2), n2);
        }
        delete(t2) {
          return super.delete(m(this, t2));
        }
      }
      class v extends Set {
        constructor(t2 = [], n2 = x) {
          super(), Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: n2}});
          for (const n3 of t2)
            this.add(n3);
        }
        has(t2) {
          return super.has(_(this, t2));
        }
        add(t2) {
          return super.add(b(this, t2));
        }
        delete(t2) {
          return super.delete(m(this, t2));
        }
      }
      function _({_intern: t2, _key: n2}, e2) {
        const r2 = n2(e2);
        return t2.has(r2) ? t2.get(r2) : e2;
      }
      function b({_intern: t2, _key: n2}, e2) {
        const r2 = n2(e2);
        return t2.has(r2) ? t2.get(r2) : (t2.set(r2, e2), e2);
      }
      function m({_intern: t2, _key: n2}, e2) {
        const r2 = n2(e2);
        return t2.has(r2) && (e2 = t2.get(e2), t2.delete(r2)), e2;
      }
      function x(t2) {
        return t2 !== null && typeof t2 == "object" ? t2.valueOf() : t2;
      }
      function w(t2) {
        return t2;
      }
      function M(t2, ...n2) {
        return S(t2, w, w, n2);
      }
      function A(t2, n2, ...e2) {
        return S(t2, w, n2, e2);
      }
      function T(t2) {
        if (t2.length !== 1)
          throw new Error("duplicate key");
        return t2[0];
      }
      function S(t2, n2, e2, r2) {
        return function t3(i2, o2) {
          if (o2 >= r2.length)
            return e2(i2);
          const a2 = new y(), u2 = r2[o2++];
          let c2 = -1;
          for (const t4 of i2) {
            const n3 = u2(t4, ++c2, i2), e3 = a2.get(n3);
            e3 ? e3.push(t4) : a2.set(n3, [t4]);
          }
          for (const [n3, e3] of a2)
            a2.set(n3, t3(e3, o2));
          return n2(a2);
        }(t2, 0);
      }
      function E(t2, n2) {
        return Array.from(n2, (n3) => t2[n3]);
      }
      function k(t2, ...e2) {
        if (typeof t2[Symbol.iterator] != "function")
          throw new TypeError("values is not iterable");
        t2 = Array.from(t2);
        let [r2 = n] = e2;
        if (r2.length === 1 || e2.length > 1) {
          const i2 = Uint32Array.from(t2, (t3, n2) => n2);
          return e2.length > 1 ? (e2 = e2.map((n2) => t2.map(n2)), i2.sort((t3, r3) => {
            for (const i3 of e2) {
              const e3 = n(i3[t3], i3[r3]);
              if (e3)
                return e3;
            }
          })) : (r2 = t2.map(r2), i2.sort((t3, e3) => n(r2[t3], r2[e3]))), E(t2, i2);
        }
        return t2.sort(r2);
      }
      var N = Array.prototype.slice;
      function C(t2) {
        return function() {
          return t2;
        };
      }
      var P = Math.sqrt(50), z = Math.sqrt(10), D = Math.sqrt(2);
      function q(t2, n2, e2) {
        var r2, i2, o2, a2, u2 = -1;
        if (e2 = +e2, (t2 = +t2) === (n2 = +n2) && e2 > 0)
          return [t2];
        if ((r2 = n2 < t2) && (i2 = t2, t2 = n2, n2 = i2), (a2 = R(t2, n2, e2)) === 0 || !isFinite(a2))
          return [];
        if (a2 > 0)
          for (t2 = Math.ceil(t2 / a2), n2 = Math.floor(n2 / a2), o2 = new Array(i2 = Math.ceil(n2 - t2 + 1)); ++u2 < i2; )
            o2[u2] = (t2 + u2) * a2;
        else
          for (a2 = -a2, t2 = Math.ceil(t2 * a2), n2 = Math.floor(n2 * a2), o2 = new Array(i2 = Math.ceil(n2 - t2 + 1)); ++u2 < i2; )
            o2[u2] = (t2 + u2) / a2;
        return r2 && o2.reverse(), o2;
      }
      function R(t2, n2, e2) {
        var r2 = (n2 - t2) / Math.max(0, e2), i2 = Math.floor(Math.log(r2) / Math.LN10), o2 = r2 / Math.pow(10, i2);
        return i2 >= 0 ? (o2 >= P ? 10 : o2 >= z ? 5 : o2 >= D ? 2 : 1) * Math.pow(10, i2) : -Math.pow(10, -i2) / (o2 >= P ? 10 : o2 >= z ? 5 : o2 >= D ? 2 : 1);
      }
      function F(t2, n2, e2) {
        var r2 = Math.abs(n2 - t2) / Math.max(0, e2), i2 = Math.pow(10, Math.floor(Math.log(r2) / Math.LN10)), o2 = r2 / i2;
        return o2 >= P ? i2 *= 10 : o2 >= z ? i2 *= 5 : o2 >= D && (i2 *= 2), n2 < t2 ? -i2 : i2;
      }
      function O(t2, n2, e2) {
        let r2;
        for (; ; ) {
          const i2 = R(t2, n2, e2);
          if (i2 === r2 || i2 === 0 || !isFinite(i2))
            return [t2, n2];
          i2 > 0 ? (t2 = Math.floor(t2 / i2) * i2, n2 = Math.ceil(n2 / i2) * i2) : i2 < 0 && (t2 = Math.ceil(t2 * i2) / i2, n2 = Math.floor(n2 * i2) / i2), r2 = i2;
        }
      }
      function U(t2) {
        return Math.ceil(Math.log(c(t2)) / Math.LN2) + 1;
      }
      function I() {
        var t2 = w, n2 = p, e2 = U;
        function r2(r3) {
          Array.isArray(r3) || (r3 = Array.from(r3));
          var i2, a2, u2 = r3.length, c2 = new Array(u2);
          for (i2 = 0; i2 < u2; ++i2)
            c2[i2] = t2(r3[i2], i2, r3);
          var f2 = n2(c2), s2 = f2[0], l2 = f2[1], h2 = e2(c2, s2, l2);
          if (!Array.isArray(h2)) {
            const t3 = l2, e3 = +h2;
            if (n2 === p && ([s2, l2] = O(s2, l2, e3)), (h2 = q(s2, l2, e3))[h2.length - 1] >= l2)
              if (t3 >= l2 && n2 === p) {
                const t4 = R(s2, l2, e3);
                isFinite(t4) && (t4 > 0 ? l2 = (Math.floor(l2 / t4) + 1) * t4 : t4 < 0 && (l2 = (Math.ceil(l2 * -t4) + 1) / -t4));
              } else
                h2.pop();
          }
          for (var d2 = h2.length; h2[0] <= s2; )
            h2.shift(), --d2;
          for (; h2[d2 - 1] > l2; )
            h2.pop(), --d2;
          var g2, y2 = new Array(d2 + 1);
          for (i2 = 0; i2 <= d2; ++i2)
            (g2 = y2[i2] = []).x0 = i2 > 0 ? h2[i2 - 1] : s2, g2.x1 = i2 < d2 ? h2[i2] : l2;
          for (i2 = 0; i2 < u2; ++i2)
            s2 <= (a2 = c2[i2]) && a2 <= l2 && y2[o(h2, a2, 0, d2)].push(r3[i2]);
          return y2;
        }
        return r2.value = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : C(n3), r2) : t2;
        }, r2.domain = function(t3) {
          return arguments.length ? (n2 = typeof t3 == "function" ? t3 : C([t3[0], t3[1]]), r2) : n2;
        }, r2.thresholds = function(t3) {
          return arguments.length ? (e2 = typeof t3 == "function" ? t3 : Array.isArray(t3) ? C(N.call(t3)) : C(t3), r2) : e2;
        }, r2;
      }
      function B(t2, n2) {
        let e2;
        if (n2 === void 0)
          for (const n3 of t2)
            n3 != null && (e2 < n3 || e2 === void 0 && n3 >= n3) && (e2 = n3);
        else {
          let r2 = -1;
          for (let i2 of t2)
            (i2 = n2(i2, ++r2, t2)) != null && (e2 < i2 || e2 === void 0 && i2 >= i2) && (e2 = i2);
        }
        return e2;
      }
      function Y(t2, n2) {
        let e2;
        if (n2 === void 0)
          for (const n3 of t2)
            n3 != null && (e2 > n3 || e2 === void 0 && n3 >= n3) && (e2 = n3);
        else {
          let r2 = -1;
          for (let i2 of t2)
            (i2 = n2(i2, ++r2, t2)) != null && (e2 > i2 || e2 === void 0 && i2 >= i2) && (e2 = i2);
        }
        return e2;
      }
      function L(t2, e2, r2 = 0, i2 = t2.length - 1, o2 = n) {
        for (; i2 > r2; ) {
          if (i2 - r2 > 600) {
            const n3 = i2 - r2 + 1, a3 = e2 - r2 + 1, u3 = Math.log(n3), c2 = 0.5 * Math.exp(2 * u3 / 3), f2 = 0.5 * Math.sqrt(u3 * c2 * (n3 - c2) / n3) * (a3 - n3 / 2 < 0 ? -1 : 1);
            L(t2, e2, Math.max(r2, Math.floor(e2 - a3 * c2 / n3 + f2)), Math.min(i2, Math.floor(e2 + (n3 - a3) * c2 / n3 + f2)), o2);
          }
          const n2 = t2[e2];
          let a2 = r2, u2 = i2;
          for (j(t2, r2, e2), o2(t2[i2], n2) > 0 && j(t2, r2, i2); a2 < u2; ) {
            for (j(t2, a2, u2), ++a2, --u2; o2(t2[a2], n2) < 0; )
              ++a2;
            for (; o2(t2[u2], n2) > 0; )
              --u2;
          }
          o2(t2[r2], n2) === 0 ? j(t2, r2, u2) : (++u2, j(t2, u2, i2)), u2 <= e2 && (r2 = u2 + 1), e2 <= u2 && (i2 = u2 - 1);
        }
        return t2;
      }
      function j(t2, n2, e2) {
        const r2 = t2[n2];
        t2[n2] = t2[e2], t2[e2] = r2;
      }
      function H(t2, n2, e2) {
        if (r2 = (t2 = Float64Array.from(function* (t3, n3) {
          if (n3 === void 0)
            for (let n4 of t3)
              n4 != null && (n4 = +n4) >= n4 && (yield n4);
          else {
            let e3 = -1;
            for (let r3 of t3)
              (r3 = n3(r3, ++e3, t3)) != null && (r3 = +r3) >= r3 && (yield r3);
          }
        }(t2, e2))).length) {
          if ((n2 = +n2) <= 0 || r2 < 2)
            return Y(t2);
          if (n2 >= 1)
            return B(t2);
          var r2, i2 = (r2 - 1) * n2, o2 = Math.floor(i2), a2 = B(L(t2, o2).subarray(0, o2 + 1));
          return a2 + (Y(t2.subarray(o2 + 1)) - a2) * (i2 - o2);
        }
      }
      function X(t2, n2, e2 = r) {
        if (i2 = t2.length) {
          if ((n2 = +n2) <= 0 || i2 < 2)
            return +e2(t2[0], 0, t2);
          if (n2 >= 1)
            return +e2(t2[i2 - 1], i2 - 1, t2);
          var i2, o2 = (i2 - 1) * n2, a2 = Math.floor(o2), u2 = +e2(t2[a2], a2, t2);
          return u2 + (+e2(t2[a2 + 1], a2 + 1, t2) - u2) * (o2 - a2);
        }
      }
      function G(t2, n2) {
        let e2, r2 = -1, i2 = -1;
        if (n2 === void 0)
          for (const n3 of t2)
            ++i2, n3 != null && (e2 < n3 || e2 === void 0 && n3 >= n3) && (e2 = n3, r2 = i2);
        else
          for (let o2 of t2)
            (o2 = n2(o2, ++i2, t2)) != null && (e2 < o2 || e2 === void 0 && o2 >= o2) && (e2 = o2, r2 = i2);
        return r2;
      }
      function V(t2) {
        return Array.from(function* (t3) {
          for (const n2 of t3)
            yield* n2;
        }(t2));
      }
      function $(t2, n2) {
        let e2, r2 = -1, i2 = -1;
        if (n2 === void 0)
          for (const n3 of t2)
            ++i2, n3 != null && (e2 > n3 || e2 === void 0 && n3 >= n3) && (e2 = n3, r2 = i2);
        else
          for (let o2 of t2)
            (o2 = n2(o2, ++i2, t2)) != null && (e2 > o2 || e2 === void 0 && o2 >= o2) && (e2 = o2, r2 = i2);
        return r2;
      }
      function W(t2, n2) {
        return [t2, n2];
      }
      function Z(t2, n2, e2) {
        t2 = +t2, n2 = +n2, e2 = (i2 = arguments.length) < 2 ? (n2 = t2, t2 = 0, 1) : i2 < 3 ? 1 : +e2;
        for (var r2 = -1, i2 = 0 | Math.max(0, Math.ceil((n2 - t2) / e2)), o2 = new Array(i2); ++r2 < i2; )
          o2[r2] = t2 + r2 * e2;
        return o2;
      }
      function K(t2, e2 = n) {
        if (e2.length === 1)
          return $(t2, e2);
        let r2, i2 = -1, o2 = -1;
        for (const n2 of t2)
          ++o2, (i2 < 0 ? e2(n2, n2) === 0 : e2(n2, r2) < 0) && (r2 = n2, i2 = o2);
        return i2;
      }
      var Q = J(Math.random);
      function J(t2) {
        return function(n2, e2 = 0, r2 = n2.length) {
          let i2 = r2 - (e2 = +e2);
          for (; i2; ) {
            const r3 = t2() * i2-- | 0, o2 = n2[i2 + e2];
            n2[i2 + e2] = n2[r3 + e2], n2[r3 + e2] = o2;
          }
          return n2;
        };
      }
      function tt(t2) {
        if (!(i2 = t2.length))
          return [];
        for (var n2 = -1, e2 = Y(t2, nt), r2 = new Array(e2); ++n2 < e2; )
          for (var i2, o2 = -1, a2 = r2[n2] = new Array(i2); ++o2 < i2; )
            a2[o2] = t2[o2][n2];
        return r2;
      }
      function nt(t2) {
        return t2.length;
      }
      function et(t2) {
        return t2 instanceof Set ? t2 : new Set(t2);
      }
      function rt(t2, n2) {
        const e2 = t2[Symbol.iterator](), r2 = new Set();
        for (const t3 of n2) {
          if (r2.has(t3))
            continue;
          let n3, i2;
          for (; {value: n3, done: i2} = e2.next(); ) {
            if (i2)
              return false;
            if (r2.add(n3), Object.is(t3, n3))
              break;
          }
        }
        return true;
      }
      var it = Array.prototype.slice;
      function ot(t2) {
        return t2;
      }
      var at = 1e-6;
      function ut(t2) {
        return "translate(" + (t2 + 0.5) + ",0)";
      }
      function ct(t2) {
        return "translate(0," + (t2 + 0.5) + ")";
      }
      function ft(t2) {
        return (n2) => +t2(n2);
      }
      function st(t2) {
        var n2 = Math.max(0, t2.bandwidth() - 1) / 2;
        return t2.round() && (n2 = Math.round(n2)), function(e2) {
          return +t2(e2) + n2;
        };
      }
      function lt() {
        return !this.__axis;
      }
      function ht(t2, n2) {
        var e2 = [], r2 = null, i2 = null, o2 = 6, a2 = 6, u2 = 3, c2 = t2 === 1 || t2 === 4 ? -1 : 1, f2 = t2 === 4 || t2 === 2 ? "x" : "y", s2 = t2 === 1 || t2 === 3 ? ut : ct;
        function l2(l3) {
          var h2 = r2 == null ? n2.ticks ? n2.ticks.apply(n2, e2) : n2.domain() : r2, d2 = i2 == null ? n2.tickFormat ? n2.tickFormat.apply(n2, e2) : ot : i2, p2 = Math.max(o2, 0) + u2, g2 = n2.range(), y2 = +g2[0] + 0.5, v2 = +g2[g2.length - 1] + 0.5, _2 = (n2.bandwidth ? st : ft)(n2.copy()), b2 = l3.selection ? l3.selection() : l3, m2 = b2.selectAll(".domain").data([null]), x2 = b2.selectAll(".tick").data(h2, n2).order(), w2 = x2.exit(), M2 = x2.enter().append("g").attr("class", "tick"), A2 = x2.select("line"), T2 = x2.select("text");
          m2 = m2.merge(m2.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), x2 = x2.merge(M2), A2 = A2.merge(M2.append("line").attr("stroke", "currentColor").attr(f2 + "2", c2 * o2)), T2 = T2.merge(M2.append("text").attr("fill", "currentColor").attr(f2, c2 * p2).attr("dy", t2 === 1 ? "0em" : t2 === 3 ? "0.71em" : "0.32em")), l3 !== b2 && (m2 = m2.transition(l3), x2 = x2.transition(l3), A2 = A2.transition(l3), T2 = T2.transition(l3), w2 = w2.transition(l3).attr("opacity", at).attr("transform", function(t3) {
            return isFinite(t3 = _2(t3)) ? s2(t3) : this.getAttribute("transform");
          }), M2.attr("opacity", at).attr("transform", function(t3) {
            var n3 = this.parentNode.__axis;
            return s2(n3 && isFinite(n3 = n3(t3)) ? n3 : _2(t3));
          })), w2.remove(), m2.attr("d", t2 === 4 || t2 == 2 ? a2 ? "M" + c2 * a2 + "," + y2 + "H0.5V" + v2 + "H" + c2 * a2 : "M0.5," + y2 + "V" + v2 : a2 ? "M" + y2 + "," + c2 * a2 + "V0.5H" + v2 + "V" + c2 * a2 : "M" + y2 + ",0.5H" + v2), x2.attr("opacity", 1).attr("transform", function(t3) {
            return s2(_2(t3));
          }), A2.attr(f2 + "2", c2 * o2), T2.attr(f2, c2 * p2).text(d2), b2.filter(lt).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t2 === 2 ? "start" : t2 === 4 ? "end" : "middle"), b2.each(function() {
            this.__axis = _2;
          });
        }
        return l2.scale = function(t3) {
          return arguments.length ? (n2 = t3, l2) : n2;
        }, l2.ticks = function() {
          return e2 = it.call(arguments), l2;
        }, l2.tickArguments = function(t3) {
          return arguments.length ? (e2 = t3 == null ? [] : it.call(t3), l2) : e2.slice();
        }, l2.tickValues = function(t3) {
          return arguments.length ? (r2 = t3 == null ? null : it.call(t3), l2) : r2 && r2.slice();
        }, l2.tickFormat = function(t3) {
          return arguments.length ? (i2 = t3, l2) : i2;
        }, l2.tickSize = function(t3) {
          return arguments.length ? (o2 = a2 = +t3, l2) : o2;
        }, l2.tickSizeInner = function(t3) {
          return arguments.length ? (o2 = +t3, l2) : o2;
        }, l2.tickSizeOuter = function(t3) {
          return arguments.length ? (a2 = +t3, l2) : a2;
        }, l2.tickPadding = function(t3) {
          return arguments.length ? (u2 = +t3, l2) : u2;
        }, l2;
      }
      var dt = {value: () => {
      }};
      function pt() {
        for (var t2, n2 = 0, e2 = arguments.length, r2 = {}; n2 < e2; ++n2) {
          if (!(t2 = arguments[n2] + "") || t2 in r2 || /[\s.]/.test(t2))
            throw new Error("illegal type: " + t2);
          r2[t2] = [];
        }
        return new gt(r2);
      }
      function gt(t2) {
        this._ = t2;
      }
      function yt(t2, n2) {
        return t2.trim().split(/^|\s+/).map(function(t3) {
          var e2 = "", r2 = t3.indexOf(".");
          if (r2 >= 0 && (e2 = t3.slice(r2 + 1), t3 = t3.slice(0, r2)), t3 && !n2.hasOwnProperty(t3))
            throw new Error("unknown type: " + t3);
          return {type: t3, name: e2};
        });
      }
      function vt(t2, n2) {
        for (var e2, r2 = 0, i2 = t2.length; r2 < i2; ++r2)
          if ((e2 = t2[r2]).name === n2)
            return e2.value;
      }
      function _t(t2, n2, e2) {
        for (var r2 = 0, i2 = t2.length; r2 < i2; ++r2)
          if (t2[r2].name === n2) {
            t2[r2] = dt, t2 = t2.slice(0, r2).concat(t2.slice(r2 + 1));
            break;
          }
        return e2 != null && t2.push({name: n2, value: e2}), t2;
      }
      gt.prototype = pt.prototype = {constructor: gt, on: function(t2, n2) {
        var e2, r2 = this._, i2 = yt(t2 + "", r2), o2 = -1, a2 = i2.length;
        if (!(arguments.length < 2)) {
          if (n2 != null && typeof n2 != "function")
            throw new Error("invalid callback: " + n2);
          for (; ++o2 < a2; )
            if (e2 = (t2 = i2[o2]).type)
              r2[e2] = _t(r2[e2], t2.name, n2);
            else if (n2 == null)
              for (e2 in r2)
                r2[e2] = _t(r2[e2], t2.name, null);
          return this;
        }
        for (; ++o2 < a2; )
          if ((e2 = (t2 = i2[o2]).type) && (e2 = vt(r2[e2], t2.name)))
            return e2;
      }, copy: function() {
        var t2 = {}, n2 = this._;
        for (var e2 in n2)
          t2[e2] = n2[e2].slice();
        return new gt(t2);
      }, call: function(t2, n2) {
        if ((e2 = arguments.length - 2) > 0)
          for (var e2, r2, i2 = new Array(e2), o2 = 0; o2 < e2; ++o2)
            i2[o2] = arguments[o2 + 2];
        if (!this._.hasOwnProperty(t2))
          throw new Error("unknown type: " + t2);
        for (o2 = 0, e2 = (r2 = this._[t2]).length; o2 < e2; ++o2)
          r2[o2].value.apply(n2, i2);
      }, apply: function(t2, n2, e2) {
        if (!this._.hasOwnProperty(t2))
          throw new Error("unknown type: " + t2);
        for (var r2 = this._[t2], i2 = 0, o2 = r2.length; i2 < o2; ++i2)
          r2[i2].value.apply(n2, e2);
      }};
      var bt = "http://www.w3.org/1999/xhtml", mt = {svg: "http://www.w3.org/2000/svg", xhtml: bt, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/"};
      function xt(t2) {
        var n2 = t2 += "", e2 = n2.indexOf(":");
        return e2 >= 0 && (n2 = t2.slice(0, e2)) !== "xmlns" && (t2 = t2.slice(e2 + 1)), mt.hasOwnProperty(n2) ? {space: mt[n2], local: t2} : t2;
      }
      function wt(t2) {
        return function() {
          var n2 = this.ownerDocument, e2 = this.namespaceURI;
          return e2 === bt && n2.documentElement.namespaceURI === bt ? n2.createElement(t2) : n2.createElementNS(e2, t2);
        };
      }
      function Mt(t2) {
        return function() {
          return this.ownerDocument.createElementNS(t2.space, t2.local);
        };
      }
      function At(t2) {
        var n2 = xt(t2);
        return (n2.local ? Mt : wt)(n2);
      }
      function Tt() {
      }
      function St(t2) {
        return t2 == null ? Tt : function() {
          return this.querySelector(t2);
        };
      }
      function Et(t2) {
        return typeof t2 == "object" && "length" in t2 ? t2 : Array.from(t2);
      }
      function kt() {
        return [];
      }
      function Nt(t2) {
        return t2 == null ? kt : function() {
          return this.querySelectorAll(t2);
        };
      }
      function Ct(t2) {
        return function() {
          return this.matches(t2);
        };
      }
      function Pt(t2) {
        return function(n2) {
          return n2.matches(t2);
        };
      }
      var zt = Array.prototype.find;
      function Dt() {
        return this.firstElementChild;
      }
      var qt = Array.prototype.filter;
      function Rt() {
        return this.children;
      }
      function Ft(t2) {
        return new Array(t2.length);
      }
      function Ot(t2, n2) {
        this.ownerDocument = t2.ownerDocument, this.namespaceURI = t2.namespaceURI, this._next = null, this._parent = t2, this.__data__ = n2;
      }
      function Ut(t2) {
        return function() {
          return t2;
        };
      }
      function It(t2, n2, e2, r2, i2, o2) {
        for (var a2, u2 = 0, c2 = n2.length, f2 = o2.length; u2 < f2; ++u2)
          (a2 = n2[u2]) ? (a2.__data__ = o2[u2], r2[u2] = a2) : e2[u2] = new Ot(t2, o2[u2]);
        for (; u2 < c2; ++u2)
          (a2 = n2[u2]) && (i2[u2] = a2);
      }
      function Bt(t2, n2, e2, r2, i2, o2, a2) {
        var u2, c2, f2, s2 = new Map(), l2 = n2.length, h2 = o2.length, d2 = new Array(l2);
        for (u2 = 0; u2 < l2; ++u2)
          (c2 = n2[u2]) && (d2[u2] = f2 = a2.call(c2, c2.__data__, u2, n2) + "", s2.has(f2) ? i2[u2] = c2 : s2.set(f2, c2));
        for (u2 = 0; u2 < h2; ++u2)
          f2 = a2.call(t2, o2[u2], u2, o2) + "", (c2 = s2.get(f2)) ? (r2[u2] = c2, c2.__data__ = o2[u2], s2.delete(f2)) : e2[u2] = new Ot(t2, o2[u2]);
        for (u2 = 0; u2 < l2; ++u2)
          (c2 = n2[u2]) && s2.get(d2[u2]) === c2 && (i2[u2] = c2);
      }
      function Yt(t2) {
        return t2.__data__;
      }
      function Lt(t2, n2) {
        return t2 < n2 ? -1 : t2 > n2 ? 1 : t2 >= n2 ? 0 : NaN;
      }
      function jt(t2) {
        return function() {
          this.removeAttribute(t2);
        };
      }
      function Ht(t2) {
        return function() {
          this.removeAttributeNS(t2.space, t2.local);
        };
      }
      function Xt(t2, n2) {
        return function() {
          this.setAttribute(t2, n2);
        };
      }
      function Gt(t2, n2) {
        return function() {
          this.setAttributeNS(t2.space, t2.local, n2);
        };
      }
      function Vt(t2, n2) {
        return function() {
          var e2 = n2.apply(this, arguments);
          e2 == null ? this.removeAttribute(t2) : this.setAttribute(t2, e2);
        };
      }
      function $t(t2, n2) {
        return function() {
          var e2 = n2.apply(this, arguments);
          e2 == null ? this.removeAttributeNS(t2.space, t2.local) : this.setAttributeNS(t2.space, t2.local, e2);
        };
      }
      function Wt(t2) {
        return t2.ownerDocument && t2.ownerDocument.defaultView || t2.document && t2 || t2.defaultView;
      }
      function Zt(t2) {
        return function() {
          this.style.removeProperty(t2);
        };
      }
      function Kt(t2, n2, e2) {
        return function() {
          this.style.setProperty(t2, n2, e2);
        };
      }
      function Qt(t2, n2, e2) {
        return function() {
          var r2 = n2.apply(this, arguments);
          r2 == null ? this.style.removeProperty(t2) : this.style.setProperty(t2, r2, e2);
        };
      }
      function Jt(t2, n2) {
        return t2.style.getPropertyValue(n2) || Wt(t2).getComputedStyle(t2, null).getPropertyValue(n2);
      }
      function tn(t2) {
        return function() {
          delete this[t2];
        };
      }
      function nn(t2, n2) {
        return function() {
          this[t2] = n2;
        };
      }
      function en(t2, n2) {
        return function() {
          var e2 = n2.apply(this, arguments);
          e2 == null ? delete this[t2] : this[t2] = e2;
        };
      }
      function rn(t2) {
        return t2.trim().split(/^|\s+/);
      }
      function on(t2) {
        return t2.classList || new an(t2);
      }
      function an(t2) {
        this._node = t2, this._names = rn(t2.getAttribute("class") || "");
      }
      function un(t2, n2) {
        for (var e2 = on(t2), r2 = -1, i2 = n2.length; ++r2 < i2; )
          e2.add(n2[r2]);
      }
      function cn(t2, n2) {
        for (var e2 = on(t2), r2 = -1, i2 = n2.length; ++r2 < i2; )
          e2.remove(n2[r2]);
      }
      function fn(t2) {
        return function() {
          un(this, t2);
        };
      }
      function sn(t2) {
        return function() {
          cn(this, t2);
        };
      }
      function ln(t2, n2) {
        return function() {
          (n2.apply(this, arguments) ? un : cn)(this, t2);
        };
      }
      function hn() {
        this.textContent = "";
      }
      function dn(t2) {
        return function() {
          this.textContent = t2;
        };
      }
      function pn(t2) {
        return function() {
          var n2 = t2.apply(this, arguments);
          this.textContent = n2 == null ? "" : n2;
        };
      }
      function gn() {
        this.innerHTML = "";
      }
      function yn(t2) {
        return function() {
          this.innerHTML = t2;
        };
      }
      function vn(t2) {
        return function() {
          var n2 = t2.apply(this, arguments);
          this.innerHTML = n2 == null ? "" : n2;
        };
      }
      function _n() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function bn() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function mn() {
        return null;
      }
      function xn() {
        var t2 = this.parentNode;
        t2 && t2.removeChild(this);
      }
      function wn() {
        var t2 = this.cloneNode(false), n2 = this.parentNode;
        return n2 ? n2.insertBefore(t2, this.nextSibling) : t2;
      }
      function Mn() {
        var t2 = this.cloneNode(true), n2 = this.parentNode;
        return n2 ? n2.insertBefore(t2, this.nextSibling) : t2;
      }
      function An(t2) {
        return t2.trim().split(/^|\s+/).map(function(t3) {
          var n2 = "", e2 = t3.indexOf(".");
          return e2 >= 0 && (n2 = t3.slice(e2 + 1), t3 = t3.slice(0, e2)), {type: t3, name: n2};
        });
      }
      function Tn(t2) {
        return function() {
          var n2 = this.__on;
          if (n2) {
            for (var e2, r2 = 0, i2 = -1, o2 = n2.length; r2 < o2; ++r2)
              e2 = n2[r2], t2.type && e2.type !== t2.type || e2.name !== t2.name ? n2[++i2] = e2 : this.removeEventListener(e2.type, e2.listener, e2.options);
            ++i2 ? n2.length = i2 : delete this.__on;
          }
        };
      }
      function Sn(t2, n2, e2) {
        return function() {
          var r2, i2 = this.__on, o2 = function(t3) {
            return function(n3) {
              t3.call(this, n3, this.__data__);
            };
          }(n2);
          if (i2) {
            for (var a2 = 0, u2 = i2.length; a2 < u2; ++a2)
              if ((r2 = i2[a2]).type === t2.type && r2.name === t2.name)
                return this.removeEventListener(r2.type, r2.listener, r2.options), this.addEventListener(r2.type, r2.listener = o2, r2.options = e2), void (r2.value = n2);
          }
          this.addEventListener(t2.type, o2, e2), r2 = {type: t2.type, name: t2.name, value: n2, listener: o2, options: e2}, i2 ? i2.push(r2) : this.__on = [r2];
        };
      }
      function En(t2, n2, e2) {
        var r2 = Wt(t2), i2 = r2.CustomEvent;
        typeof i2 == "function" ? i2 = new i2(n2, e2) : (i2 = r2.document.createEvent("Event"), e2 ? (i2.initEvent(n2, e2.bubbles, e2.cancelable), i2.detail = e2.detail) : i2.initEvent(n2, false, false)), t2.dispatchEvent(i2);
      }
      function kn(t2, n2) {
        return function() {
          return En(this, t2, n2);
        };
      }
      function Nn(t2, n2) {
        return function() {
          return En(this, t2, n2.apply(this, arguments));
        };
      }
      Ot.prototype = {constructor: Ot, appendChild: function(t2) {
        return this._parent.insertBefore(t2, this._next);
      }, insertBefore: function(t2, n2) {
        return this._parent.insertBefore(t2, n2);
      }, querySelector: function(t2) {
        return this._parent.querySelector(t2);
      }, querySelectorAll: function(t2) {
        return this._parent.querySelectorAll(t2);
      }}, an.prototype = {add: function(t2) {
        this._names.indexOf(t2) < 0 && (this._names.push(t2), this._node.setAttribute("class", this._names.join(" ")));
      }, remove: function(t2) {
        var n2 = this._names.indexOf(t2);
        n2 >= 0 && (this._names.splice(n2, 1), this._node.setAttribute("class", this._names.join(" ")));
      }, contains: function(t2) {
        return this._names.indexOf(t2) >= 0;
      }};
      var Cn = [null];
      function Pn(t2, n2) {
        this._groups = t2, this._parents = n2;
      }
      function zn() {
        return new Pn([[document.documentElement]], Cn);
      }
      function Dn(t2) {
        return typeof t2 == "string" ? new Pn([[document.querySelector(t2)]], [document.documentElement]) : new Pn([[t2]], Cn);
      }
      Pn.prototype = zn.prototype = {constructor: Pn, select: function(t2) {
        typeof t2 != "function" && (t2 = St(t2));
        for (var n2 = this._groups, e2 = n2.length, r2 = new Array(e2), i2 = 0; i2 < e2; ++i2)
          for (var o2, a2, u2 = n2[i2], c2 = u2.length, f2 = r2[i2] = new Array(c2), s2 = 0; s2 < c2; ++s2)
            (o2 = u2[s2]) && (a2 = t2.call(o2, o2.__data__, s2, u2)) && ("__data__" in o2 && (a2.__data__ = o2.__data__), f2[s2] = a2);
        return new Pn(r2, this._parents);
      }, selectAll: function(t2) {
        t2 = typeof t2 == "function" ? function(t3) {
          return function() {
            var n3 = t3.apply(this, arguments);
            return n3 == null ? [] : Et(n3);
          };
        }(t2) : Nt(t2);
        for (var n2 = this._groups, e2 = n2.length, r2 = [], i2 = [], o2 = 0; o2 < e2; ++o2)
          for (var a2, u2 = n2[o2], c2 = u2.length, f2 = 0; f2 < c2; ++f2)
            (a2 = u2[f2]) && (r2.push(t2.call(a2, a2.__data__, f2, u2)), i2.push(a2));
        return new Pn(r2, i2);
      }, selectChild: function(t2) {
        return this.select(t2 == null ? Dt : function(t3) {
          return function() {
            return zt.call(this.children, t3);
          };
        }(typeof t2 == "function" ? t2 : Pt(t2)));
      }, selectChildren: function(t2) {
        return this.selectAll(t2 == null ? Rt : function(t3) {
          return function() {
            return qt.call(this.children, t3);
          };
        }(typeof t2 == "function" ? t2 : Pt(t2)));
      }, filter: function(t2) {
        typeof t2 != "function" && (t2 = Ct(t2));
        for (var n2 = this._groups, e2 = n2.length, r2 = new Array(e2), i2 = 0; i2 < e2; ++i2)
          for (var o2, a2 = n2[i2], u2 = a2.length, c2 = r2[i2] = [], f2 = 0; f2 < u2; ++f2)
            (o2 = a2[f2]) && t2.call(o2, o2.__data__, f2, a2) && c2.push(o2);
        return new Pn(r2, this._parents);
      }, data: function(t2, n2) {
        if (!arguments.length)
          return Array.from(this, Yt);
        var e2 = n2 ? Bt : It, r2 = this._parents, i2 = this._groups;
        typeof t2 != "function" && (t2 = Ut(t2));
        for (var o2 = i2.length, a2 = new Array(o2), u2 = new Array(o2), c2 = new Array(o2), f2 = 0; f2 < o2; ++f2) {
          var s2 = r2[f2], l2 = i2[f2], h2 = l2.length, d2 = Et(t2.call(s2, s2 && s2.__data__, f2, r2)), p2 = d2.length, g2 = u2[f2] = new Array(p2), y2 = a2[f2] = new Array(p2), v2 = c2[f2] = new Array(h2);
          e2(s2, l2, g2, y2, v2, d2, n2);
          for (var _2, b2, m2 = 0, x2 = 0; m2 < p2; ++m2)
            if (_2 = g2[m2]) {
              for (m2 >= x2 && (x2 = m2 + 1); !(b2 = y2[x2]) && ++x2 < p2; )
                ;
              _2._next = b2 || null;
            }
        }
        return (a2 = new Pn(a2, r2))._enter = u2, a2._exit = c2, a2;
      }, enter: function() {
        return new Pn(this._enter || this._groups.map(Ft), this._parents);
      }, exit: function() {
        return new Pn(this._exit || this._groups.map(Ft), this._parents);
      }, join: function(t2, n2, e2) {
        var r2 = this.enter(), i2 = this, o2 = this.exit();
        return r2 = typeof t2 == "function" ? t2(r2) : r2.append(t2 + ""), n2 != null && (i2 = n2(i2)), e2 == null ? o2.remove() : e2(o2), r2 && i2 ? r2.merge(i2).order() : i2;
      }, merge: function(t2) {
        if (!(t2 instanceof Pn))
          throw new Error("invalid merge");
        for (var n2 = this._groups, e2 = t2._groups, r2 = n2.length, i2 = e2.length, o2 = Math.min(r2, i2), a2 = new Array(r2), u2 = 0; u2 < o2; ++u2)
          for (var c2, f2 = n2[u2], s2 = e2[u2], l2 = f2.length, h2 = a2[u2] = new Array(l2), d2 = 0; d2 < l2; ++d2)
            (c2 = f2[d2] || s2[d2]) && (h2[d2] = c2);
        for (; u2 < r2; ++u2)
          a2[u2] = n2[u2];
        return new Pn(a2, this._parents);
      }, selection: function() {
        return this;
      }, order: function() {
        for (var t2 = this._groups, n2 = -1, e2 = t2.length; ++n2 < e2; )
          for (var r2, i2 = t2[n2], o2 = i2.length - 1, a2 = i2[o2]; --o2 >= 0; )
            (r2 = i2[o2]) && (a2 && 4 ^ r2.compareDocumentPosition(a2) && a2.parentNode.insertBefore(r2, a2), a2 = r2);
        return this;
      }, sort: function(t2) {
        function n2(n3, e3) {
          return n3 && e3 ? t2(n3.__data__, e3.__data__) : !n3 - !e3;
        }
        t2 || (t2 = Lt);
        for (var e2 = this._groups, r2 = e2.length, i2 = new Array(r2), o2 = 0; o2 < r2; ++o2) {
          for (var a2, u2 = e2[o2], c2 = u2.length, f2 = i2[o2] = new Array(c2), s2 = 0; s2 < c2; ++s2)
            (a2 = u2[s2]) && (f2[s2] = a2);
          f2.sort(n2);
        }
        return new Pn(i2, this._parents).order();
      }, call: function() {
        var t2 = arguments[0];
        return arguments[0] = this, t2.apply(null, arguments), this;
      }, nodes: function() {
        return Array.from(this);
      }, node: function() {
        for (var t2 = this._groups, n2 = 0, e2 = t2.length; n2 < e2; ++n2)
          for (var r2 = t2[n2], i2 = 0, o2 = r2.length; i2 < o2; ++i2) {
            var a2 = r2[i2];
            if (a2)
              return a2;
          }
        return null;
      }, size: function() {
        let t2 = 0;
        for (const n2 of this)
          ++t2;
        return t2;
      }, empty: function() {
        return !this.node();
      }, each: function(t2) {
        for (var n2 = this._groups, e2 = 0, r2 = n2.length; e2 < r2; ++e2)
          for (var i2, o2 = n2[e2], a2 = 0, u2 = o2.length; a2 < u2; ++a2)
            (i2 = o2[a2]) && t2.call(i2, i2.__data__, a2, o2);
        return this;
      }, attr: function(t2, n2) {
        var e2 = xt(t2);
        if (arguments.length < 2) {
          var r2 = this.node();
          return e2.local ? r2.getAttributeNS(e2.space, e2.local) : r2.getAttribute(e2);
        }
        return this.each((n2 == null ? e2.local ? Ht : jt : typeof n2 == "function" ? e2.local ? $t : Vt : e2.local ? Gt : Xt)(e2, n2));
      }, style: function(t2, n2, e2) {
        return arguments.length > 1 ? this.each((n2 == null ? Zt : typeof n2 == "function" ? Qt : Kt)(t2, n2, e2 == null ? "" : e2)) : Jt(this.node(), t2);
      }, property: function(t2, n2) {
        return arguments.length > 1 ? this.each((n2 == null ? tn : typeof n2 == "function" ? en : nn)(t2, n2)) : this.node()[t2];
      }, classed: function(t2, n2) {
        var e2 = rn(t2 + "");
        if (arguments.length < 2) {
          for (var r2 = on(this.node()), i2 = -1, o2 = e2.length; ++i2 < o2; )
            if (!r2.contains(e2[i2]))
              return false;
          return true;
        }
        return this.each((typeof n2 == "function" ? ln : n2 ? fn : sn)(e2, n2));
      }, text: function(t2) {
        return arguments.length ? this.each(t2 == null ? hn : (typeof t2 == "function" ? pn : dn)(t2)) : this.node().textContent;
      }, html: function(t2) {
        return arguments.length ? this.each(t2 == null ? gn : (typeof t2 == "function" ? vn : yn)(t2)) : this.node().innerHTML;
      }, raise: function() {
        return this.each(_n);
      }, lower: function() {
        return this.each(bn);
      }, append: function(t2) {
        var n2 = typeof t2 == "function" ? t2 : At(t2);
        return this.select(function() {
          return this.appendChild(n2.apply(this, arguments));
        });
      }, insert: function(t2, n2) {
        var e2 = typeof t2 == "function" ? t2 : At(t2), r2 = n2 == null ? mn : typeof n2 == "function" ? n2 : St(n2);
        return this.select(function() {
          return this.insertBefore(e2.apply(this, arguments), r2.apply(this, arguments) || null);
        });
      }, remove: function() {
        return this.each(xn);
      }, clone: function(t2) {
        return this.select(t2 ? Mn : wn);
      }, datum: function(t2) {
        return arguments.length ? this.property("__data__", t2) : this.node().__data__;
      }, on: function(t2, n2, e2) {
        var r2, i2, o2 = An(t2 + ""), a2 = o2.length;
        if (!(arguments.length < 2)) {
          for (u2 = n2 ? Sn : Tn, r2 = 0; r2 < a2; ++r2)
            this.each(u2(o2[r2], n2, e2));
          return this;
        }
        var u2 = this.node().__on;
        if (u2) {
          for (var c2, f2 = 0, s2 = u2.length; f2 < s2; ++f2)
            for (r2 = 0, c2 = u2[f2]; r2 < a2; ++r2)
              if ((i2 = o2[r2]).type === c2.type && i2.name === c2.name)
                return c2.value;
        }
      }, dispatch: function(t2, n2) {
        return this.each((typeof n2 == "function" ? Nn : kn)(t2, n2));
      }, [Symbol.iterator]: function* () {
        for (var t2 = this._groups, n2 = 0, e2 = t2.length; n2 < e2; ++n2)
          for (var r2, i2 = t2[n2], o2 = 0, a2 = i2.length; o2 < a2; ++o2)
            (r2 = i2[o2]) && (yield r2);
      }};
      var qn = 0;
      function Rn() {
        return new Fn();
      }
      function Fn() {
        this._ = "@" + (++qn).toString(36);
      }
      function On(t2) {
        let n2;
        for (; n2 = t2.sourceEvent; )
          t2 = n2;
        return t2;
      }
      function Un(t2, n2) {
        if (t2 = On(t2), n2 === void 0 && (n2 = t2.currentTarget), n2) {
          var e2 = n2.ownerSVGElement || n2;
          if (e2.createSVGPoint) {
            var r2 = e2.createSVGPoint();
            return r2.x = t2.clientX, r2.y = t2.clientY, [(r2 = r2.matrixTransform(n2.getScreenCTM().inverse())).x, r2.y];
          }
          if (n2.getBoundingClientRect) {
            var i2 = n2.getBoundingClientRect();
            return [t2.clientX - i2.left - n2.clientLeft, t2.clientY - i2.top - n2.clientTop];
          }
        }
        return [t2.pageX, t2.pageY];
      }
      function In(t2) {
        t2.stopImmediatePropagation();
      }
      function Bn(t2) {
        t2.preventDefault(), t2.stopImmediatePropagation();
      }
      function Yn(t2) {
        var n2 = t2.document.documentElement, e2 = Dn(t2).on("dragstart.drag", Bn, true);
        "onselectstart" in n2 ? e2.on("selectstart.drag", Bn, true) : (n2.__noselect = n2.style.MozUserSelect, n2.style.MozUserSelect = "none");
      }
      function Ln(t2, n2) {
        var e2 = t2.document.documentElement, r2 = Dn(t2).on("dragstart.drag", null);
        n2 && (r2.on("click.drag", Bn, true), setTimeout(function() {
          r2.on("click.drag", null);
        }, 0)), "onselectstart" in e2 ? r2.on("selectstart.drag", null) : (e2.style.MozUserSelect = e2.__noselect, delete e2.__noselect);
      }
      Fn.prototype = Rn.prototype = {constructor: Fn, get: function(t2) {
        for (var n2 = this._; !(n2 in t2); )
          if (!(t2 = t2.parentNode))
            return;
        return t2[n2];
      }, set: function(t2, n2) {
        return t2[this._] = n2;
      }, remove: function(t2) {
        return this._ in t2 && delete t2[this._];
      }, toString: function() {
        return this._;
      }};
      var jn = (t2) => () => t2;
      function Hn(t2, {sourceEvent: n2, subject: e2, target: r2, identifier: i2, active: o2, x: a2, y: u2, dx: c2, dy: f2, dispatch: s2}) {
        Object.defineProperties(this, {type: {value: t2, enumerable: true, configurable: true}, sourceEvent: {value: n2, enumerable: true, configurable: true}, subject: {value: e2, enumerable: true, configurable: true}, target: {value: r2, enumerable: true, configurable: true}, identifier: {value: i2, enumerable: true, configurable: true}, active: {value: o2, enumerable: true, configurable: true}, x: {value: a2, enumerable: true, configurable: true}, y: {value: u2, enumerable: true, configurable: true}, dx: {value: c2, enumerable: true, configurable: true}, dy: {value: f2, enumerable: true, configurable: true}, _: {value: s2}});
      }
      function Xn(t2) {
        return !t2.ctrlKey && !t2.button;
      }
      function Gn() {
        return this.parentNode;
      }
      function Vn(t2, n2) {
        return n2 == null ? {x: t2.x, y: t2.y} : n2;
      }
      function $n() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function Wn(t2, n2, e2) {
        t2.prototype = n2.prototype = e2, e2.constructor = t2;
      }
      function Zn(t2, n2) {
        var e2 = Object.create(t2.prototype);
        for (var r2 in n2)
          e2[r2] = n2[r2];
        return e2;
      }
      function Kn() {
      }
      Hn.prototype.on = function() {
        var t2 = this._.on.apply(this._, arguments);
        return t2 === this._ ? this : t2;
      };
      var Qn = 0.7, Jn = 1 / Qn, te = "\\s*([+-]?\\d+)\\s*", ne = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", ee = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", re = /^#([0-9a-f]{3,8})$/, ie = new RegExp("^rgb\\(" + [te, te, te] + "\\)$"), oe = new RegExp("^rgb\\(" + [ee, ee, ee] + "\\)$"), ae = new RegExp("^rgba\\(" + [te, te, te, ne] + "\\)$"), ue = new RegExp("^rgba\\(" + [ee, ee, ee, ne] + "\\)$"), ce = new RegExp("^hsl\\(" + [ne, ee, ee] + "\\)$"), fe = new RegExp("^hsla\\(" + [ne, ee, ee, ne] + "\\)$"), se = {aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074};
      function le() {
        return this.rgb().formatHex();
      }
      function he() {
        return this.rgb().formatRgb();
      }
      function de(t2) {
        var n2, e2;
        return t2 = (t2 + "").trim().toLowerCase(), (n2 = re.exec(t2)) ? (e2 = n2[1].length, n2 = parseInt(n2[1], 16), e2 === 6 ? pe(n2) : e2 === 3 ? new _e(n2 >> 8 & 15 | n2 >> 4 & 240, n2 >> 4 & 15 | 240 & n2, (15 & n2) << 4 | 15 & n2, 1) : e2 === 8 ? ge(n2 >> 24 & 255, n2 >> 16 & 255, n2 >> 8 & 255, (255 & n2) / 255) : e2 === 4 ? ge(n2 >> 12 & 15 | n2 >> 8 & 240, n2 >> 8 & 15 | n2 >> 4 & 240, n2 >> 4 & 15 | 240 & n2, ((15 & n2) << 4 | 15 & n2) / 255) : null) : (n2 = ie.exec(t2)) ? new _e(n2[1], n2[2], n2[3], 1) : (n2 = oe.exec(t2)) ? new _e(255 * n2[1] / 100, 255 * n2[2] / 100, 255 * n2[3] / 100, 1) : (n2 = ae.exec(t2)) ? ge(n2[1], n2[2], n2[3], n2[4]) : (n2 = ue.exec(t2)) ? ge(255 * n2[1] / 100, 255 * n2[2] / 100, 255 * n2[3] / 100, n2[4]) : (n2 = ce.exec(t2)) ? we(n2[1], n2[2] / 100, n2[3] / 100, 1) : (n2 = fe.exec(t2)) ? we(n2[1], n2[2] / 100, n2[3] / 100, n2[4]) : se.hasOwnProperty(t2) ? pe(se[t2]) : t2 === "transparent" ? new _e(NaN, NaN, NaN, 0) : null;
      }
      function pe(t2) {
        return new _e(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2, 1);
      }
      function ge(t2, n2, e2, r2) {
        return r2 <= 0 && (t2 = n2 = e2 = NaN), new _e(t2, n2, e2, r2);
      }
      function ye(t2) {
        return t2 instanceof Kn || (t2 = de(t2)), t2 ? new _e((t2 = t2.rgb()).r, t2.g, t2.b, t2.opacity) : new _e();
      }
      function ve(t2, n2, e2, r2) {
        return arguments.length === 1 ? ye(t2) : new _e(t2, n2, e2, r2 == null ? 1 : r2);
      }
      function _e(t2, n2, e2, r2) {
        this.r = +t2, this.g = +n2, this.b = +e2, this.opacity = +r2;
      }
      function be() {
        return "#" + xe(this.r) + xe(this.g) + xe(this.b);
      }
      function me() {
        var t2 = this.opacity;
        return ((t2 = isNaN(t2) ? 1 : Math.max(0, Math.min(1, t2))) === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (t2 === 1 ? ")" : ", " + t2 + ")");
      }
      function xe(t2) {
        return ((t2 = Math.max(0, Math.min(255, Math.round(t2) || 0))) < 16 ? "0" : "") + t2.toString(16);
      }
      function we(t2, n2, e2, r2) {
        return r2 <= 0 ? t2 = n2 = e2 = NaN : e2 <= 0 || e2 >= 1 ? t2 = n2 = NaN : n2 <= 0 && (t2 = NaN), new Te(t2, n2, e2, r2);
      }
      function Me(t2) {
        if (t2 instanceof Te)
          return new Te(t2.h, t2.s, t2.l, t2.opacity);
        if (t2 instanceof Kn || (t2 = de(t2)), !t2)
          return new Te();
        if (t2 instanceof Te)
          return t2;
        var n2 = (t2 = t2.rgb()).r / 255, e2 = t2.g / 255, r2 = t2.b / 255, i2 = Math.min(n2, e2, r2), o2 = Math.max(n2, e2, r2), a2 = NaN, u2 = o2 - i2, c2 = (o2 + i2) / 2;
        return u2 ? (a2 = n2 === o2 ? (e2 - r2) / u2 + 6 * (e2 < r2) : e2 === o2 ? (r2 - n2) / u2 + 2 : (n2 - e2) / u2 + 4, u2 /= c2 < 0.5 ? o2 + i2 : 2 - o2 - i2, a2 *= 60) : u2 = c2 > 0 && c2 < 1 ? 0 : a2, new Te(a2, u2, c2, t2.opacity);
      }
      function Ae(t2, n2, e2, r2) {
        return arguments.length === 1 ? Me(t2) : new Te(t2, n2, e2, r2 == null ? 1 : r2);
      }
      function Te(t2, n2, e2, r2) {
        this.h = +t2, this.s = +n2, this.l = +e2, this.opacity = +r2;
      }
      function Se(t2, n2, e2) {
        return 255 * (t2 < 60 ? n2 + (e2 - n2) * t2 / 60 : t2 < 180 ? e2 : t2 < 240 ? n2 + (e2 - n2) * (240 - t2) / 60 : n2);
      }
      Wn(Kn, de, {copy: function(t2) {
        return Object.assign(new this.constructor(), this, t2);
      }, displayable: function() {
        return this.rgb().displayable();
      }, hex: le, formatHex: le, formatHsl: function() {
        return Me(this).formatHsl();
      }, formatRgb: he, toString: he}), Wn(_e, ve, Zn(Kn, {brighter: function(t2) {
        return t2 = t2 == null ? Jn : Math.pow(Jn, t2), new _e(this.r * t2, this.g * t2, this.b * t2, this.opacity);
      }, darker: function(t2) {
        return t2 = t2 == null ? Qn : Math.pow(Qn, t2), new _e(this.r * t2, this.g * t2, this.b * t2, this.opacity);
      }, rgb: function() {
        return this;
      }, displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      }, hex: be, formatHex: be, formatRgb: me, toString: me})), Wn(Te, Ae, Zn(Kn, {brighter: function(t2) {
        return t2 = t2 == null ? Jn : Math.pow(Jn, t2), new Te(this.h, this.s, this.l * t2, this.opacity);
      }, darker: function(t2) {
        return t2 = t2 == null ? Qn : Math.pow(Qn, t2), new Te(this.h, this.s, this.l * t2, this.opacity);
      }, rgb: function() {
        var t2 = this.h % 360 + 360 * (this.h < 0), n2 = isNaN(t2) || isNaN(this.s) ? 0 : this.s, e2 = this.l, r2 = e2 + (e2 < 0.5 ? e2 : 1 - e2) * n2, i2 = 2 * e2 - r2;
        return new _e(Se(t2 >= 240 ? t2 - 240 : t2 + 120, i2, r2), Se(t2, i2, r2), Se(t2 < 120 ? t2 + 240 : t2 - 120, i2, r2), this.opacity);
      }, displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      }, formatHsl: function() {
        var t2 = this.opacity;
        return ((t2 = isNaN(t2) ? 1 : Math.max(0, Math.min(1, t2))) === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (t2 === 1 ? ")" : ", " + t2 + ")");
      }}));
      const Ee = Math.PI / 180, ke = 180 / Math.PI, Ne = 0.96422, Ce = 0.82521, Pe = 4 / 29, ze = 6 / 29, De = 3 * ze * ze;
      function qe(t2) {
        if (t2 instanceof Fe)
          return new Fe(t2.l, t2.a, t2.b, t2.opacity);
        if (t2 instanceof je)
          return He(t2);
        t2 instanceof _e || (t2 = ye(t2));
        var n2, e2, r2 = Be(t2.r), i2 = Be(t2.g), o2 = Be(t2.b), a2 = Oe((0.2225045 * r2 + 0.7168786 * i2 + 0.0606169 * o2) / 1);
        return r2 === i2 && i2 === o2 ? n2 = e2 = a2 : (n2 = Oe((0.4360747 * r2 + 0.3850649 * i2 + 0.1430804 * o2) / Ne), e2 = Oe((0.0139322 * r2 + 0.0971045 * i2 + 0.7141733 * o2) / Ce)), new Fe(116 * a2 - 16, 500 * (n2 - a2), 200 * (a2 - e2), t2.opacity);
      }
      function Re(t2, n2, e2, r2) {
        return arguments.length === 1 ? qe(t2) : new Fe(t2, n2, e2, r2 == null ? 1 : r2);
      }
      function Fe(t2, n2, e2, r2) {
        this.l = +t2, this.a = +n2, this.b = +e2, this.opacity = +r2;
      }
      function Oe(t2) {
        return t2 > 0.008856451679035631 ? Math.pow(t2, 1 / 3) : t2 / De + Pe;
      }
      function Ue(t2) {
        return t2 > ze ? t2 * t2 * t2 : De * (t2 - Pe);
      }
      function Ie(t2) {
        return 255 * (t2 <= 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 1 / 2.4) - 0.055);
      }
      function Be(t2) {
        return (t2 /= 255) <= 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
      }
      function Ye(t2) {
        if (t2 instanceof je)
          return new je(t2.h, t2.c, t2.l, t2.opacity);
        if (t2 instanceof Fe || (t2 = qe(t2)), t2.a === 0 && t2.b === 0)
          return new je(NaN, 0 < t2.l && t2.l < 100 ? 0 : NaN, t2.l, t2.opacity);
        var n2 = Math.atan2(t2.b, t2.a) * ke;
        return new je(n2 < 0 ? n2 + 360 : n2, Math.sqrt(t2.a * t2.a + t2.b * t2.b), t2.l, t2.opacity);
      }
      function Le(t2, n2, e2, r2) {
        return arguments.length === 1 ? Ye(t2) : new je(t2, n2, e2, r2 == null ? 1 : r2);
      }
      function je(t2, n2, e2, r2) {
        this.h = +t2, this.c = +n2, this.l = +e2, this.opacity = +r2;
      }
      function He(t2) {
        if (isNaN(t2.h))
          return new Fe(t2.l, 0, 0, t2.opacity);
        var n2 = t2.h * Ee;
        return new Fe(t2.l, Math.cos(n2) * t2.c, Math.sin(n2) * t2.c, t2.opacity);
      }
      Wn(Fe, Re, Zn(Kn, {brighter: function(t2) {
        return new Fe(this.l + 18 * (t2 == null ? 1 : t2), this.a, this.b, this.opacity);
      }, darker: function(t2) {
        return new Fe(this.l - 18 * (t2 == null ? 1 : t2), this.a, this.b, this.opacity);
      }, rgb: function() {
        var t2 = (this.l + 16) / 116, n2 = isNaN(this.a) ? t2 : t2 + this.a / 500, e2 = isNaN(this.b) ? t2 : t2 - this.b / 200;
        return new _e(Ie(3.1338561 * (n2 = Ne * Ue(n2)) - 1.6168667 * (t2 = 1 * Ue(t2)) - 0.4906146 * (e2 = Ce * Ue(e2))), Ie(-0.9787684 * n2 + 1.9161415 * t2 + 0.033454 * e2), Ie(0.0719453 * n2 - 0.2289914 * t2 + 1.4052427 * e2), this.opacity);
      }})), Wn(je, Le, Zn(Kn, {brighter: function(t2) {
        return new je(this.h, this.c, this.l + 18 * (t2 == null ? 1 : t2), this.opacity);
      }, darker: function(t2) {
        return new je(this.h, this.c, this.l - 18 * (t2 == null ? 1 : t2), this.opacity);
      }, rgb: function() {
        return He(this).rgb();
      }}));
      var Xe = -0.14861, Ge = 1.78277, Ve = -0.29227, $e = -0.90649, We = 1.97294, Ze = We * $e, Ke = We * Ge, Qe = Ge * Ve - $e * Xe;
      function Je(t2) {
        if (t2 instanceof nr)
          return new nr(t2.h, t2.s, t2.l, t2.opacity);
        t2 instanceof _e || (t2 = ye(t2));
        var n2 = t2.r / 255, e2 = t2.g / 255, r2 = t2.b / 255, i2 = (Qe * r2 + Ze * n2 - Ke * e2) / (Qe + Ze - Ke), o2 = r2 - i2, a2 = (We * (e2 - i2) - Ve * o2) / $e, u2 = Math.sqrt(a2 * a2 + o2 * o2) / (We * i2 * (1 - i2)), c2 = u2 ? Math.atan2(a2, o2) * ke - 120 : NaN;
        return new nr(c2 < 0 ? c2 + 360 : c2, u2, i2, t2.opacity);
      }
      function tr(t2, n2, e2, r2) {
        return arguments.length === 1 ? Je(t2) : new nr(t2, n2, e2, r2 == null ? 1 : r2);
      }
      function nr(t2, n2, e2, r2) {
        this.h = +t2, this.s = +n2, this.l = +e2, this.opacity = +r2;
      }
      function er(t2, n2, e2, r2, i2) {
        var o2 = t2 * t2, a2 = o2 * t2;
        return ((1 - 3 * t2 + 3 * o2 - a2) * n2 + (4 - 6 * o2 + 3 * a2) * e2 + (1 + 3 * t2 + 3 * o2 - 3 * a2) * r2 + a2 * i2) / 6;
      }
      function rr(t2) {
        var n2 = t2.length - 1;
        return function(e2) {
          var r2 = e2 <= 0 ? e2 = 0 : e2 >= 1 ? (e2 = 1, n2 - 1) : Math.floor(e2 * n2), i2 = t2[r2], o2 = t2[r2 + 1], a2 = r2 > 0 ? t2[r2 - 1] : 2 * i2 - o2, u2 = r2 < n2 - 1 ? t2[r2 + 2] : 2 * o2 - i2;
          return er((e2 - r2 / n2) * n2, a2, i2, o2, u2);
        };
      }
      function ir(t2) {
        var n2 = t2.length;
        return function(e2) {
          var r2 = Math.floor(((e2 %= 1) < 0 ? ++e2 : e2) * n2), i2 = t2[(r2 + n2 - 1) % n2], o2 = t2[r2 % n2], a2 = t2[(r2 + 1) % n2], u2 = t2[(r2 + 2) % n2];
          return er((e2 - r2 / n2) * n2, i2, o2, a2, u2);
        };
      }
      Wn(nr, tr, Zn(Kn, {brighter: function(t2) {
        return t2 = t2 == null ? Jn : Math.pow(Jn, t2), new nr(this.h, this.s, this.l * t2, this.opacity);
      }, darker: function(t2) {
        return t2 = t2 == null ? Qn : Math.pow(Qn, t2), new nr(this.h, this.s, this.l * t2, this.opacity);
      }, rgb: function() {
        var t2 = isNaN(this.h) ? 0 : (this.h + 120) * Ee, n2 = +this.l, e2 = isNaN(this.s) ? 0 : this.s * n2 * (1 - n2), r2 = Math.cos(t2), i2 = Math.sin(t2);
        return new _e(255 * (n2 + e2 * (Xe * r2 + Ge * i2)), 255 * (n2 + e2 * (Ve * r2 + $e * i2)), 255 * (n2 + e2 * (We * r2)), this.opacity);
      }}));
      var or = (t2) => () => t2;
      function ar(t2, n2) {
        return function(e2) {
          return t2 + e2 * n2;
        };
      }
      function ur(t2, n2) {
        var e2 = n2 - t2;
        return e2 ? ar(t2, e2 > 180 || e2 < -180 ? e2 - 360 * Math.round(e2 / 360) : e2) : or(isNaN(t2) ? n2 : t2);
      }
      function cr(t2) {
        return (t2 = +t2) == 1 ? fr : function(n2, e2) {
          return e2 - n2 ? function(t3, n3, e3) {
            return t3 = Math.pow(t3, e3), n3 = Math.pow(n3, e3) - t3, e3 = 1 / e3, function(r2) {
              return Math.pow(t3 + r2 * n3, e3);
            };
          }(n2, e2, t2) : or(isNaN(n2) ? e2 : n2);
        };
      }
      function fr(t2, n2) {
        var e2 = n2 - t2;
        return e2 ? ar(t2, e2) : or(isNaN(t2) ? n2 : t2);
      }
      var sr = function t2(n2) {
        var e2 = cr(n2);
        function r2(t3, n3) {
          var r3 = e2((t3 = ve(t3)).r, (n3 = ve(n3)).r), i2 = e2(t3.g, n3.g), o2 = e2(t3.b, n3.b), a2 = fr(t3.opacity, n3.opacity);
          return function(n4) {
            return t3.r = r3(n4), t3.g = i2(n4), t3.b = o2(n4), t3.opacity = a2(n4), t3 + "";
          };
        }
        return r2.gamma = t2, r2;
      }(1);
      function lr(t2) {
        return function(n2) {
          var e2, r2, i2 = n2.length, o2 = new Array(i2), a2 = new Array(i2), u2 = new Array(i2);
          for (e2 = 0; e2 < i2; ++e2)
            r2 = ve(n2[e2]), o2[e2] = r2.r || 0, a2[e2] = r2.g || 0, u2[e2] = r2.b || 0;
          return o2 = t2(o2), a2 = t2(a2), u2 = t2(u2), r2.opacity = 1, function(t3) {
            return r2.r = o2(t3), r2.g = a2(t3), r2.b = u2(t3), r2 + "";
          };
        };
      }
      var hr = lr(rr), dr = lr(ir);
      function pr(t2, n2) {
        n2 || (n2 = []);
        var e2, r2 = t2 ? Math.min(n2.length, t2.length) : 0, i2 = n2.slice();
        return function(o2) {
          for (e2 = 0; e2 < r2; ++e2)
            i2[e2] = t2[e2] * (1 - o2) + n2[e2] * o2;
          return i2;
        };
      }
      function gr(t2) {
        return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
      }
      function yr(t2, n2) {
        var e2, r2 = n2 ? n2.length : 0, i2 = t2 ? Math.min(r2, t2.length) : 0, o2 = new Array(i2), a2 = new Array(r2);
        for (e2 = 0; e2 < i2; ++e2)
          o2[e2] = Mr(t2[e2], n2[e2]);
        for (; e2 < r2; ++e2)
          a2[e2] = n2[e2];
        return function(t3) {
          for (e2 = 0; e2 < i2; ++e2)
            a2[e2] = o2[e2](t3);
          return a2;
        };
      }
      function vr(t2, n2) {
        var e2 = new Date();
        return t2 = +t2, n2 = +n2, function(r2) {
          return e2.setTime(t2 * (1 - r2) + n2 * r2), e2;
        };
      }
      function _r(t2, n2) {
        return t2 = +t2, n2 = +n2, function(e2) {
          return t2 * (1 - e2) + n2 * e2;
        };
      }
      function br(t2, n2) {
        var e2, r2 = {}, i2 = {};
        for (e2 in t2 !== null && typeof t2 == "object" || (t2 = {}), n2 !== null && typeof n2 == "object" || (n2 = {}), n2)
          e2 in t2 ? r2[e2] = Mr(t2[e2], n2[e2]) : i2[e2] = n2[e2];
        return function(t3) {
          for (e2 in r2)
            i2[e2] = r2[e2](t3);
          return i2;
        };
      }
      var mr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, xr = new RegExp(mr.source, "g");
      function wr(t2, n2) {
        var e2, r2, i2, o2 = mr.lastIndex = xr.lastIndex = 0, a2 = -1, u2 = [], c2 = [];
        for (t2 += "", n2 += ""; (e2 = mr.exec(t2)) && (r2 = xr.exec(n2)); )
          (i2 = r2.index) > o2 && (i2 = n2.slice(o2, i2), u2[a2] ? u2[a2] += i2 : u2[++a2] = i2), (e2 = e2[0]) === (r2 = r2[0]) ? u2[a2] ? u2[a2] += r2 : u2[++a2] = r2 : (u2[++a2] = null, c2.push({i: a2, x: _r(e2, r2)})), o2 = xr.lastIndex;
        return o2 < n2.length && (i2 = n2.slice(o2), u2[a2] ? u2[a2] += i2 : u2[++a2] = i2), u2.length < 2 ? c2[0] ? function(t3) {
          return function(n3) {
            return t3(n3) + "";
          };
        }(c2[0].x) : function(t3) {
          return function() {
            return t3;
          };
        }(n2) : (n2 = c2.length, function(t3) {
          for (var e3, r3 = 0; r3 < n2; ++r3)
            u2[(e3 = c2[r3]).i] = e3.x(t3);
          return u2.join("");
        });
      }
      function Mr(t2, n2) {
        var e2, r2 = typeof n2;
        return n2 == null || r2 === "boolean" ? or(n2) : (r2 === "number" ? _r : r2 === "string" ? (e2 = de(n2)) ? (n2 = e2, sr) : wr : n2 instanceof de ? sr : n2 instanceof Date ? vr : gr(n2) ? pr : Array.isArray(n2) ? yr : typeof n2.valueOf != "function" && typeof n2.toString != "function" || isNaN(n2) ? br : _r)(t2, n2);
      }
      function Ar(t2, n2) {
        return t2 = +t2, n2 = +n2, function(e2) {
          return Math.round(t2 * (1 - e2) + n2 * e2);
        };
      }
      var Tr, Sr = 180 / Math.PI, Er = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1};
      function kr(t2, n2, e2, r2, i2, o2) {
        var a2, u2, c2;
        return (a2 = Math.sqrt(t2 * t2 + n2 * n2)) && (t2 /= a2, n2 /= a2), (c2 = t2 * e2 + n2 * r2) && (e2 -= t2 * c2, r2 -= n2 * c2), (u2 = Math.sqrt(e2 * e2 + r2 * r2)) && (e2 /= u2, r2 /= u2, c2 /= u2), t2 * r2 < n2 * e2 && (t2 = -t2, n2 = -n2, c2 = -c2, a2 = -a2), {translateX: i2, translateY: o2, rotate: Math.atan2(n2, t2) * Sr, skewX: Math.atan(c2) * Sr, scaleX: a2, scaleY: u2};
      }
      function Nr(t2, n2, e2, r2) {
        function i2(t3) {
          return t3.length ? t3.pop() + " " : "";
        }
        return function(o2, a2) {
          var u2 = [], c2 = [];
          return o2 = t2(o2), a2 = t2(a2), function(t3, r3, i3, o3, a3, u3) {
            if (t3 !== i3 || r3 !== o3) {
              var c3 = a3.push("translate(", null, n2, null, e2);
              u3.push({i: c3 - 4, x: _r(t3, i3)}, {i: c3 - 2, x: _r(r3, o3)});
            } else
              (i3 || o3) && a3.push("translate(" + i3 + n2 + o3 + e2);
          }(o2.translateX, o2.translateY, a2.translateX, a2.translateY, u2, c2), function(t3, n3, e3, o3) {
            t3 !== n3 ? (t3 - n3 > 180 ? n3 += 360 : n3 - t3 > 180 && (t3 += 360), o3.push({i: e3.push(i2(e3) + "rotate(", null, r2) - 2, x: _r(t3, n3)})) : n3 && e3.push(i2(e3) + "rotate(" + n3 + r2);
          }(o2.rotate, a2.rotate, u2, c2), function(t3, n3, e3, o3) {
            t3 !== n3 ? o3.push({i: e3.push(i2(e3) + "skewX(", null, r2) - 2, x: _r(t3, n3)}) : n3 && e3.push(i2(e3) + "skewX(" + n3 + r2);
          }(o2.skewX, a2.skewX, u2, c2), function(t3, n3, e3, r3, o3, a3) {
            if (t3 !== e3 || n3 !== r3) {
              var u3 = o3.push(i2(o3) + "scale(", null, ",", null, ")");
              a3.push({i: u3 - 4, x: _r(t3, e3)}, {i: u3 - 2, x: _r(n3, r3)});
            } else
              e3 === 1 && r3 === 1 || o3.push(i2(o3) + "scale(" + e3 + "," + r3 + ")");
          }(o2.scaleX, o2.scaleY, a2.scaleX, a2.scaleY, u2, c2), o2 = a2 = null, function(t3) {
            for (var n3, e3 = -1, r3 = c2.length; ++e3 < r3; )
              u2[(n3 = c2[e3]).i] = n3.x(t3);
            return u2.join("");
          };
        };
      }
      var Cr = Nr(function(t2) {
        const n2 = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t2 + "");
        return n2.isIdentity ? Er : kr(n2.a, n2.b, n2.c, n2.d, n2.e, n2.f);
      }, "px, ", "px)", "deg)"), Pr = Nr(function(t2) {
        return t2 == null ? Er : (Tr || (Tr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Tr.setAttribute("transform", t2), (t2 = Tr.transform.baseVal.consolidate()) ? kr((t2 = t2.matrix).a, t2.b, t2.c, t2.d, t2.e, t2.f) : Er);
      }, ", ", ")", ")");
      function zr(t2) {
        return ((t2 = Math.exp(t2)) + 1 / t2) / 2;
      }
      var Dr = function t2(n2, e2, r2) {
        function i2(t3, i3) {
          var o2, a2, u2 = t3[0], c2 = t3[1], f2 = t3[2], s2 = i3[0], l2 = i3[1], h2 = i3[2], d2 = s2 - u2, p2 = l2 - c2, g2 = d2 * d2 + p2 * p2;
          if (g2 < 1e-12)
            a2 = Math.log(h2 / f2) / n2, o2 = function(t4) {
              return [u2 + t4 * d2, c2 + t4 * p2, f2 * Math.exp(n2 * t4 * a2)];
            };
          else {
            var y2 = Math.sqrt(g2), v2 = (h2 * h2 - f2 * f2 + r2 * g2) / (2 * f2 * e2 * y2), _2 = (h2 * h2 - f2 * f2 - r2 * g2) / (2 * h2 * e2 * y2), b2 = Math.log(Math.sqrt(v2 * v2 + 1) - v2), m2 = Math.log(Math.sqrt(_2 * _2 + 1) - _2);
            a2 = (m2 - b2) / n2, o2 = function(t4) {
              var r3 = t4 * a2, i4 = zr(b2), o3 = f2 / (e2 * y2) * (i4 * function(t5) {
                return ((t5 = Math.exp(2 * t5)) - 1) / (t5 + 1);
              }(n2 * r3 + b2) - function(t5) {
                return ((t5 = Math.exp(t5)) - 1 / t5) / 2;
              }(b2));
              return [u2 + o3 * d2, c2 + o3 * p2, f2 * i4 / zr(n2 * r3 + b2)];
            };
          }
          return o2.duration = 1e3 * a2 * n2 / Math.SQRT2, o2;
        }
        return i2.rho = function(n3) {
          var e3 = Math.max(1e-3, +n3), r3 = e3 * e3;
          return t2(e3, r3, r3 * r3);
        }, i2;
      }(Math.SQRT2, 2, 4);
      function qr(t2) {
        return function(n2, e2) {
          var r2 = t2((n2 = Ae(n2)).h, (e2 = Ae(e2)).h), i2 = fr(n2.s, e2.s), o2 = fr(n2.l, e2.l), a2 = fr(n2.opacity, e2.opacity);
          return function(t3) {
            return n2.h = r2(t3), n2.s = i2(t3), n2.l = o2(t3), n2.opacity = a2(t3), n2 + "";
          };
        };
      }
      var Rr = qr(ur), Fr = qr(fr);
      function Or(t2) {
        return function(n2, e2) {
          var r2 = t2((n2 = Le(n2)).h, (e2 = Le(e2)).h), i2 = fr(n2.c, e2.c), o2 = fr(n2.l, e2.l), a2 = fr(n2.opacity, e2.opacity);
          return function(t3) {
            return n2.h = r2(t3), n2.c = i2(t3), n2.l = o2(t3), n2.opacity = a2(t3), n2 + "";
          };
        };
      }
      var Ur = Or(ur), Ir = Or(fr);
      function Br(t2) {
        return function n2(e2) {
          function r2(n3, r3) {
            var i2 = t2((n3 = tr(n3)).h, (r3 = tr(r3)).h), o2 = fr(n3.s, r3.s), a2 = fr(n3.l, r3.l), u2 = fr(n3.opacity, r3.opacity);
            return function(t3) {
              return n3.h = i2(t3), n3.s = o2(t3), n3.l = a2(Math.pow(t3, e2)), n3.opacity = u2(t3), n3 + "";
            };
          }
          return e2 = +e2, r2.gamma = n2, r2;
        }(1);
      }
      var Yr = Br(ur), Lr = Br(fr);
      function jr(t2, n2) {
        n2 === void 0 && (n2 = t2, t2 = Mr);
        for (var e2 = 0, r2 = n2.length - 1, i2 = n2[0], o2 = new Array(r2 < 0 ? 0 : r2); e2 < r2; )
          o2[e2] = t2(i2, i2 = n2[++e2]);
        return function(t3) {
          var n3 = Math.max(0, Math.min(r2 - 1, Math.floor(t3 *= r2)));
          return o2[n3](t3 - n3);
        };
      }
      var Hr, Xr, Gr = 0, Vr = 0, $r = 0, Wr = 0, Zr = 0, Kr = 0, Qr = typeof performance == "object" && performance.now ? performance : Date, Jr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t2) {
        setTimeout(t2, 17);
      };
      function ti() {
        return Zr || (Jr(ni), Zr = Qr.now() + Kr);
      }
      function ni() {
        Zr = 0;
      }
      function ei() {
        this._call = this._time = this._next = null;
      }
      function ri(t2, n2, e2) {
        var r2 = new ei();
        return r2.restart(t2, n2, e2), r2;
      }
      function ii() {
        ti(), ++Gr;
        for (var t2, n2 = Hr; n2; )
          (t2 = Zr - n2._time) >= 0 && n2._call.call(null, t2), n2 = n2._next;
        --Gr;
      }
      function oi() {
        Zr = (Wr = Qr.now()) + Kr, Gr = Vr = 0;
        try {
          ii();
        } finally {
          Gr = 0, function() {
            var t2, n2, e2 = Hr, r2 = 1 / 0;
            for (; e2; )
              e2._call ? (r2 > e2._time && (r2 = e2._time), t2 = e2, e2 = e2._next) : (n2 = e2._next, e2._next = null, e2 = t2 ? t2._next = n2 : Hr = n2);
            Xr = t2, ui(r2);
          }(), Zr = 0;
        }
      }
      function ai() {
        var t2 = Qr.now(), n2 = t2 - Wr;
        n2 > 1e3 && (Kr -= n2, Wr = t2);
      }
      function ui(t2) {
        Gr || (Vr && (Vr = clearTimeout(Vr)), t2 - Zr > 24 ? (t2 < 1 / 0 && (Vr = setTimeout(oi, t2 - Qr.now() - Kr)), $r && ($r = clearInterval($r))) : ($r || (Wr = Qr.now(), $r = setInterval(ai, 1e3)), Gr = 1, Jr(oi)));
      }
      function ci(t2, n2, e2) {
        var r2 = new ei();
        return n2 = n2 == null ? 0 : +n2, r2.restart((e3) => {
          r2.stop(), t2(e3 + n2);
        }, n2, e2), r2;
      }
      ei.prototype = ri.prototype = {constructor: ei, restart: function(t2, n2, e2) {
        if (typeof t2 != "function")
          throw new TypeError("callback is not a function");
        e2 = (e2 == null ? ti() : +e2) + (n2 == null ? 0 : +n2), this._next || Xr === this || (Xr ? Xr._next = this : Hr = this, Xr = this), this._call = t2, this._time = e2, ui();
      }, stop: function() {
        this._call && (this._call = null, this._time = 1 / 0, ui());
      }};
      var fi = pt("start", "end", "cancel", "interrupt"), si = [];
      function li(t2, n2, e2, r2, i2, o2) {
        var a2 = t2.__transition;
        if (a2) {
          if (e2 in a2)
            return;
        } else
          t2.__transition = {};
        !function(t3, n3, e3) {
          var r3, i3 = t3.__transition;
          function o3(t4) {
            e3.state = 1, e3.timer.restart(a3, e3.delay, e3.time), e3.delay <= t4 && a3(t4 - e3.delay);
          }
          function a3(o4) {
            var f2, s2, l2, h2;
            if (e3.state !== 1)
              return c2();
            for (f2 in i3)
              if ((h2 = i3[f2]).name === e3.name) {
                if (h2.state === 3)
                  return ci(a3);
                h2.state === 4 ? (h2.state = 6, h2.timer.stop(), h2.on.call("interrupt", t3, t3.__data__, h2.index, h2.group), delete i3[f2]) : +f2 < n3 && (h2.state = 6, h2.timer.stop(), h2.on.call("cancel", t3, t3.__data__, h2.index, h2.group), delete i3[f2]);
              }
            if (ci(function() {
              e3.state === 3 && (e3.state = 4, e3.timer.restart(u2, e3.delay, e3.time), u2(o4));
            }), e3.state = 2, e3.on.call("start", t3, t3.__data__, e3.index, e3.group), e3.state === 2) {
              for (e3.state = 3, r3 = new Array(l2 = e3.tween.length), f2 = 0, s2 = -1; f2 < l2; ++f2)
                (h2 = e3.tween[f2].value.call(t3, t3.__data__, e3.index, e3.group)) && (r3[++s2] = h2);
              r3.length = s2 + 1;
            }
          }
          function u2(n4) {
            for (var i4 = n4 < e3.duration ? e3.ease.call(null, n4 / e3.duration) : (e3.timer.restart(c2), e3.state = 5, 1), o4 = -1, a4 = r3.length; ++o4 < a4; )
              r3[o4].call(t3, i4);
            e3.state === 5 && (e3.on.call("end", t3, t3.__data__, e3.index, e3.group), c2());
          }
          function c2() {
            for (var r4 in e3.state = 6, e3.timer.stop(), delete i3[n3], i3)
              return;
            delete t3.__transition;
          }
          i3[n3] = e3, e3.timer = ri(o3, 0, e3.time);
        }(t2, e2, {name: n2, index: r2, group: i2, on: fi, tween: si, time: o2.time, delay: o2.delay, duration: o2.duration, ease: o2.ease, timer: null, state: 0});
      }
      function hi(t2, n2) {
        var e2 = pi(t2, n2);
        if (e2.state > 0)
          throw new Error("too late; already scheduled");
        return e2;
      }
      function di(t2, n2) {
        var e2 = pi(t2, n2);
        if (e2.state > 3)
          throw new Error("too late; already running");
        return e2;
      }
      function pi(t2, n2) {
        var e2 = t2.__transition;
        if (!e2 || !(e2 = e2[n2]))
          throw new Error("transition not found");
        return e2;
      }
      function gi(t2, n2) {
        var e2, r2, i2, o2 = t2.__transition, a2 = true;
        if (o2) {
          for (i2 in n2 = n2 == null ? null : n2 + "", o2)
            (e2 = o2[i2]).name === n2 ? (r2 = e2.state > 2 && e2.state < 5, e2.state = 6, e2.timer.stop(), e2.on.call(r2 ? "interrupt" : "cancel", t2, t2.__data__, e2.index, e2.group), delete o2[i2]) : a2 = false;
          a2 && delete t2.__transition;
        }
      }
      function yi(t2, n2) {
        var e2, r2;
        return function() {
          var i2 = di(this, t2), o2 = i2.tween;
          if (o2 !== e2) {
            for (var a2 = 0, u2 = (r2 = e2 = o2).length; a2 < u2; ++a2)
              if (r2[a2].name === n2) {
                (r2 = r2.slice()).splice(a2, 1);
                break;
              }
          }
          i2.tween = r2;
        };
      }
      function vi(t2, n2, e2) {
        var r2, i2;
        if (typeof e2 != "function")
          throw new Error();
        return function() {
          var o2 = di(this, t2), a2 = o2.tween;
          if (a2 !== r2) {
            i2 = (r2 = a2).slice();
            for (var u2 = {name: n2, value: e2}, c2 = 0, f2 = i2.length; c2 < f2; ++c2)
              if (i2[c2].name === n2) {
                i2[c2] = u2;
                break;
              }
            c2 === f2 && i2.push(u2);
          }
          o2.tween = i2;
        };
      }
      function _i(t2, n2, e2) {
        var r2 = t2._id;
        return t2.each(function() {
          var t3 = di(this, r2);
          (t3.value || (t3.value = {}))[n2] = e2.apply(this, arguments);
        }), function(t3) {
          return pi(t3, r2).value[n2];
        };
      }
      function bi(t2, n2) {
        var e2;
        return (typeof n2 == "number" ? _r : n2 instanceof de ? sr : (e2 = de(n2)) ? (n2 = e2, sr) : wr)(t2, n2);
      }
      function mi(t2) {
        return function() {
          this.removeAttribute(t2);
        };
      }
      function xi(t2) {
        return function() {
          this.removeAttributeNS(t2.space, t2.local);
        };
      }
      function wi(t2, n2, e2) {
        var r2, i2, o2 = e2 + "";
        return function() {
          var a2 = this.getAttribute(t2);
          return a2 === o2 ? null : a2 === r2 ? i2 : i2 = n2(r2 = a2, e2);
        };
      }
      function Mi(t2, n2, e2) {
        var r2, i2, o2 = e2 + "";
        return function() {
          var a2 = this.getAttributeNS(t2.space, t2.local);
          return a2 === o2 ? null : a2 === r2 ? i2 : i2 = n2(r2 = a2, e2);
        };
      }
      function Ai(t2, n2, e2) {
        var r2, i2, o2;
        return function() {
          var a2, u2, c2 = e2(this);
          if (c2 != null)
            return (a2 = this.getAttribute(t2)) === (u2 = c2 + "") ? null : a2 === r2 && u2 === i2 ? o2 : (i2 = u2, o2 = n2(r2 = a2, c2));
          this.removeAttribute(t2);
        };
      }
      function Ti(t2, n2, e2) {
        var r2, i2, o2;
        return function() {
          var a2, u2, c2 = e2(this);
          if (c2 != null)
            return (a2 = this.getAttributeNS(t2.space, t2.local)) === (u2 = c2 + "") ? null : a2 === r2 && u2 === i2 ? o2 : (i2 = u2, o2 = n2(r2 = a2, c2));
          this.removeAttributeNS(t2.space, t2.local);
        };
      }
      function Si(t2, n2) {
        return function(e2) {
          this.setAttribute(t2, n2.call(this, e2));
        };
      }
      function Ei(t2, n2) {
        return function(e2) {
          this.setAttributeNS(t2.space, t2.local, n2.call(this, e2));
        };
      }
      function ki(t2, n2) {
        var e2, r2;
        function i2() {
          var i3 = n2.apply(this, arguments);
          return i3 !== r2 && (e2 = (r2 = i3) && Ei(t2, i3)), e2;
        }
        return i2._value = n2, i2;
      }
      function Ni(t2, n2) {
        var e2, r2;
        function i2() {
          var i3 = n2.apply(this, arguments);
          return i3 !== r2 && (e2 = (r2 = i3) && Si(t2, i3)), e2;
        }
        return i2._value = n2, i2;
      }
      function Ci(t2, n2) {
        return function() {
          hi(this, t2).delay = +n2.apply(this, arguments);
        };
      }
      function Pi(t2, n2) {
        return n2 = +n2, function() {
          hi(this, t2).delay = n2;
        };
      }
      function zi(t2, n2) {
        return function() {
          di(this, t2).duration = +n2.apply(this, arguments);
        };
      }
      function Di(t2, n2) {
        return n2 = +n2, function() {
          di(this, t2).duration = n2;
        };
      }
      function qi(t2, n2) {
        if (typeof n2 != "function")
          throw new Error();
        return function() {
          di(this, t2).ease = n2;
        };
      }
      function Ri(t2, n2, e2) {
        var r2, i2, o2 = function(t3) {
          return (t3 + "").trim().split(/^|\s+/).every(function(t4) {
            var n3 = t4.indexOf(".");
            return n3 >= 0 && (t4 = t4.slice(0, n3)), !t4 || t4 === "start";
          });
        }(n2) ? hi : di;
        return function() {
          var a2 = o2(this, t2), u2 = a2.on;
          u2 !== r2 && (i2 = (r2 = u2).copy()).on(n2, e2), a2.on = i2;
        };
      }
      var Fi = zn.prototype.constructor;
      function Oi(t2) {
        return function() {
          this.style.removeProperty(t2);
        };
      }
      function Ui(t2, n2, e2) {
        return function(r2) {
          this.style.setProperty(t2, n2.call(this, r2), e2);
        };
      }
      function Ii(t2, n2, e2) {
        var r2, i2;
        function o2() {
          var o3 = n2.apply(this, arguments);
          return o3 !== i2 && (r2 = (i2 = o3) && Ui(t2, o3, e2)), r2;
        }
        return o2._value = n2, o2;
      }
      function Bi(t2) {
        return function(n2) {
          this.textContent = t2.call(this, n2);
        };
      }
      function Yi(t2) {
        var n2, e2;
        function r2() {
          var r3 = t2.apply(this, arguments);
          return r3 !== e2 && (n2 = (e2 = r3) && Bi(r3)), n2;
        }
        return r2._value = t2, r2;
      }
      var Li = 0;
      function ji(t2, n2, e2, r2) {
        this._groups = t2, this._parents = n2, this._name = e2, this._id = r2;
      }
      function Hi(t2) {
        return zn().transition(t2);
      }
      function Xi() {
        return ++Li;
      }
      var Gi = zn.prototype;
      ji.prototype = Hi.prototype = {constructor: ji, select: function(t2) {
        var n2 = this._name, e2 = this._id;
        typeof t2 != "function" && (t2 = St(t2));
        for (var r2 = this._groups, i2 = r2.length, o2 = new Array(i2), a2 = 0; a2 < i2; ++a2)
          for (var u2, c2, f2 = r2[a2], s2 = f2.length, l2 = o2[a2] = new Array(s2), h2 = 0; h2 < s2; ++h2)
            (u2 = f2[h2]) && (c2 = t2.call(u2, u2.__data__, h2, f2)) && ("__data__" in u2 && (c2.__data__ = u2.__data__), l2[h2] = c2, li(l2[h2], n2, e2, h2, l2, pi(u2, e2)));
        return new ji(o2, this._parents, n2, e2);
      }, selectAll: function(t2) {
        var n2 = this._name, e2 = this._id;
        typeof t2 != "function" && (t2 = Nt(t2));
        for (var r2 = this._groups, i2 = r2.length, o2 = [], a2 = [], u2 = 0; u2 < i2; ++u2)
          for (var c2, f2 = r2[u2], s2 = f2.length, l2 = 0; l2 < s2; ++l2)
            if (c2 = f2[l2]) {
              for (var h2, d2 = t2.call(c2, c2.__data__, l2, f2), p2 = pi(c2, e2), g2 = 0, y2 = d2.length; g2 < y2; ++g2)
                (h2 = d2[g2]) && li(h2, n2, e2, g2, d2, p2);
              o2.push(d2), a2.push(c2);
            }
        return new ji(o2, a2, n2, e2);
      }, filter: function(t2) {
        typeof t2 != "function" && (t2 = Ct(t2));
        for (var n2 = this._groups, e2 = n2.length, r2 = new Array(e2), i2 = 0; i2 < e2; ++i2)
          for (var o2, a2 = n2[i2], u2 = a2.length, c2 = r2[i2] = [], f2 = 0; f2 < u2; ++f2)
            (o2 = a2[f2]) && t2.call(o2, o2.__data__, f2, a2) && c2.push(o2);
        return new ji(r2, this._parents, this._name, this._id);
      }, merge: function(t2) {
        if (t2._id !== this._id)
          throw new Error();
        for (var n2 = this._groups, e2 = t2._groups, r2 = n2.length, i2 = e2.length, o2 = Math.min(r2, i2), a2 = new Array(r2), u2 = 0; u2 < o2; ++u2)
          for (var c2, f2 = n2[u2], s2 = e2[u2], l2 = f2.length, h2 = a2[u2] = new Array(l2), d2 = 0; d2 < l2; ++d2)
            (c2 = f2[d2] || s2[d2]) && (h2[d2] = c2);
        for (; u2 < r2; ++u2)
          a2[u2] = n2[u2];
        return new ji(a2, this._parents, this._name, this._id);
      }, selection: function() {
        return new Fi(this._groups, this._parents);
      }, transition: function() {
        for (var t2 = this._name, n2 = this._id, e2 = Xi(), r2 = this._groups, i2 = r2.length, o2 = 0; o2 < i2; ++o2)
          for (var a2, u2 = r2[o2], c2 = u2.length, f2 = 0; f2 < c2; ++f2)
            if (a2 = u2[f2]) {
              var s2 = pi(a2, n2);
              li(a2, t2, e2, f2, u2, {time: s2.time + s2.delay + s2.duration, delay: 0, duration: s2.duration, ease: s2.ease});
            }
        return new ji(r2, this._parents, t2, e2);
      }, call: Gi.call, nodes: Gi.nodes, node: Gi.node, size: Gi.size, empty: Gi.empty, each: Gi.each, on: function(t2, n2) {
        var e2 = this._id;
        return arguments.length < 2 ? pi(this.node(), e2).on.on(t2) : this.each(Ri(e2, t2, n2));
      }, attr: function(t2, n2) {
        var e2 = xt(t2), r2 = e2 === "transform" ? Pr : bi;
        return this.attrTween(t2, typeof n2 == "function" ? (e2.local ? Ti : Ai)(e2, r2, _i(this, "attr." + t2, n2)) : n2 == null ? (e2.local ? xi : mi)(e2) : (e2.local ? Mi : wi)(e2, r2, n2));
      }, attrTween: function(t2, n2) {
        var e2 = "attr." + t2;
        if (arguments.length < 2)
          return (e2 = this.tween(e2)) && e2._value;
        if (n2 == null)
          return this.tween(e2, null);
        if (typeof n2 != "function")
          throw new Error();
        var r2 = xt(t2);
        return this.tween(e2, (r2.local ? ki : Ni)(r2, n2));
      }, style: function(t2, n2, e2) {
        var r2 = (t2 += "") == "transform" ? Cr : bi;
        return n2 == null ? this.styleTween(t2, function(t3, n3) {
          var e3, r3, i2;
          return function() {
            var o2 = Jt(this, t3), a2 = (this.style.removeProperty(t3), Jt(this, t3));
            return o2 === a2 ? null : o2 === e3 && a2 === r3 ? i2 : i2 = n3(e3 = o2, r3 = a2);
          };
        }(t2, r2)).on("end.style." + t2, Oi(t2)) : typeof n2 == "function" ? this.styleTween(t2, function(t3, n3, e3) {
          var r3, i2, o2;
          return function() {
            var a2 = Jt(this, t3), u2 = e3(this), c2 = u2 + "";
            return u2 == null && (this.style.removeProperty(t3), c2 = u2 = Jt(this, t3)), a2 === c2 ? null : a2 === r3 && c2 === i2 ? o2 : (i2 = c2, o2 = n3(r3 = a2, u2));
          };
        }(t2, r2, _i(this, "style." + t2, n2))).each(function(t3, n3) {
          var e3, r3, i2, o2, a2 = "style." + n3, u2 = "end." + a2;
          return function() {
            var c2 = di(this, t3), f2 = c2.on, s2 = c2.value[a2] == null ? o2 || (o2 = Oi(n3)) : void 0;
            f2 === e3 && i2 === s2 || (r3 = (e3 = f2).copy()).on(u2, i2 = s2), c2.on = r3;
          };
        }(this._id, t2)) : this.styleTween(t2, function(t3, n3, e3) {
          var r3, i2, o2 = e3 + "";
          return function() {
            var a2 = Jt(this, t3);
            return a2 === o2 ? null : a2 === r3 ? i2 : i2 = n3(r3 = a2, e3);
          };
        }(t2, r2, n2), e2).on("end.style." + t2, null);
      }, styleTween: function(t2, n2, e2) {
        var r2 = "style." + (t2 += "");
        if (arguments.length < 2)
          return (r2 = this.tween(r2)) && r2._value;
        if (n2 == null)
          return this.tween(r2, null);
        if (typeof n2 != "function")
          throw new Error();
        return this.tween(r2, Ii(t2, n2, e2 == null ? "" : e2));
      }, text: function(t2) {
        return this.tween("text", typeof t2 == "function" ? function(t3) {
          return function() {
            var n2 = t3(this);
            this.textContent = n2 == null ? "" : n2;
          };
        }(_i(this, "text", t2)) : function(t3) {
          return function() {
            this.textContent = t3;
          };
        }(t2 == null ? "" : t2 + ""));
      }, textTween: function(t2) {
        var n2 = "text";
        if (arguments.length < 1)
          return (n2 = this.tween(n2)) && n2._value;
        if (t2 == null)
          return this.tween(n2, null);
        if (typeof t2 != "function")
          throw new Error();
        return this.tween(n2, Yi(t2));
      }, remove: function() {
        return this.on("end.remove", function(t2) {
          return function() {
            var n2 = this.parentNode;
            for (var e2 in this.__transition)
              if (+e2 !== t2)
                return;
            n2 && n2.removeChild(this);
          };
        }(this._id));
      }, tween: function(t2, n2) {
        var e2 = this._id;
        if (t2 += "", arguments.length < 2) {
          for (var r2, i2 = pi(this.node(), e2).tween, o2 = 0, a2 = i2.length; o2 < a2; ++o2)
            if ((r2 = i2[o2]).name === t2)
              return r2.value;
          return null;
        }
        return this.each((n2 == null ? yi : vi)(e2, t2, n2));
      }, delay: function(t2) {
        var n2 = this._id;
        return arguments.length ? this.each((typeof t2 == "function" ? Ci : Pi)(n2, t2)) : pi(this.node(), n2).delay;
      }, duration: function(t2) {
        var n2 = this._id;
        return arguments.length ? this.each((typeof t2 == "function" ? zi : Di)(n2, t2)) : pi(this.node(), n2).duration;
      }, ease: function(t2) {
        var n2 = this._id;
        return arguments.length ? this.each(qi(n2, t2)) : pi(this.node(), n2).ease;
      }, easeVarying: function(t2) {
        if (typeof t2 != "function")
          throw new Error();
        return this.each(function(t3, n2) {
          return function() {
            var e2 = n2.apply(this, arguments);
            if (typeof e2 != "function")
              throw new Error();
            di(this, t3).ease = e2;
          };
        }(this._id, t2));
      }, end: function() {
        var t2, n2, e2 = this, r2 = e2._id, i2 = e2.size();
        return new Promise(function(o2, a2) {
          var u2 = {value: a2}, c2 = {value: function() {
            --i2 == 0 && o2();
          }};
          e2.each(function() {
            var e3 = di(this, r2), i3 = e3.on;
            i3 !== t2 && ((n2 = (t2 = i3).copy())._.cancel.push(u2), n2._.interrupt.push(u2), n2._.end.push(c2)), e3.on = n2;
          }), i2 === 0 && o2();
        });
      }, [Symbol.iterator]: Gi[Symbol.iterator]};
      function Vi(t2) {
        return ((t2 *= 2) <= 1 ? t2 * t2 : --t2 * (2 - t2) + 1) / 2;
      }
      function $i(t2) {
        return ((t2 *= 2) <= 1 ? t2 * t2 * t2 : (t2 -= 2) * t2 * t2 + 2) / 2;
      }
      var Wi = function t2(n2) {
        function e2(t3) {
          return Math.pow(t3, n2);
        }
        return n2 = +n2, e2.exponent = t2, e2;
      }(3), Zi = function t2(n2) {
        function e2(t3) {
          return 1 - Math.pow(1 - t3, n2);
        }
        return n2 = +n2, e2.exponent = t2, e2;
      }(3), Ki = function t2(n2) {
        function e2(t3) {
          return ((t3 *= 2) <= 1 ? Math.pow(t3, n2) : 2 - Math.pow(2 - t3, n2)) / 2;
        }
        return n2 = +n2, e2.exponent = t2, e2;
      }(3), Qi = Math.PI, Ji = Qi / 2;
      function to(t2) {
        return (1 - Math.cos(Qi * t2)) / 2;
      }
      function no(t2) {
        return 1.0009775171065494 * (Math.pow(2, -10 * t2) - 9765625e-10);
      }
      function eo(t2) {
        return ((t2 *= 2) <= 1 ? no(1 - t2) : 2 - no(t2 - 1)) / 2;
      }
      function ro(t2) {
        return ((t2 *= 2) <= 1 ? 1 - Math.sqrt(1 - t2 * t2) : Math.sqrt(1 - (t2 -= 2) * t2) + 1) / 2;
      }
      var io = 4 / 11, oo = 7.5625;
      function ao(t2) {
        return (t2 = +t2) < io ? oo * t2 * t2 : t2 < 0.7272727272727273 ? oo * (t2 -= 0.5454545454545454) * t2 + 0.75 : t2 < 0.9090909090909091 ? oo * (t2 -= 0.8181818181818182) * t2 + 0.9375 : oo * (t2 -= 0.9545454545454546) * t2 + 0.984375;
      }
      var uo = 1.70158, co = function t2(n2) {
        function e2(t3) {
          return (t3 = +t3) * t3 * (n2 * (t3 - 1) + t3);
        }
        return n2 = +n2, e2.overshoot = t2, e2;
      }(uo), fo = function t2(n2) {
        function e2(t3) {
          return --t3 * t3 * ((t3 + 1) * n2 + t3) + 1;
        }
        return n2 = +n2, e2.overshoot = t2, e2;
      }(uo), so = function t2(n2) {
        function e2(t3) {
          return ((t3 *= 2) < 1 ? t3 * t3 * ((n2 + 1) * t3 - n2) : (t3 -= 2) * t3 * ((n2 + 1) * t3 + n2) + 2) / 2;
        }
        return n2 = +n2, e2.overshoot = t2, e2;
      }(uo), lo = 2 * Math.PI, ho = function t2(n2, e2) {
        var r2 = Math.asin(1 / (n2 = Math.max(1, n2))) * (e2 /= lo);
        function i2(t3) {
          return n2 * no(- --t3) * Math.sin((r2 - t3) / e2);
        }
        return i2.amplitude = function(n3) {
          return t2(n3, e2 * lo);
        }, i2.period = function(e3) {
          return t2(n2, e3);
        }, i2;
      }(1, 0.3), po = function t2(n2, e2) {
        var r2 = Math.asin(1 / (n2 = Math.max(1, n2))) * (e2 /= lo);
        function i2(t3) {
          return 1 - n2 * no(t3 = +t3) * Math.sin((t3 + r2) / e2);
        }
        return i2.amplitude = function(n3) {
          return t2(n3, e2 * lo);
        }, i2.period = function(e3) {
          return t2(n2, e3);
        }, i2;
      }(1, 0.3), go = function t2(n2, e2) {
        var r2 = Math.asin(1 / (n2 = Math.max(1, n2))) * (e2 /= lo);
        function i2(t3) {
          return ((t3 = 2 * t3 - 1) < 0 ? n2 * no(-t3) * Math.sin((r2 - t3) / e2) : 2 - n2 * no(t3) * Math.sin((r2 + t3) / e2)) / 2;
        }
        return i2.amplitude = function(n3) {
          return t2(n3, e2 * lo);
        }, i2.period = function(e3) {
          return t2(n2, e3);
        }, i2;
      }(1, 0.3), yo = {time: null, delay: 0, duration: 250, ease: $i};
      function vo(t2, n2) {
        for (var e2; !(e2 = t2.__transition) || !(e2 = e2[n2]); )
          if (!(t2 = t2.parentNode))
            throw new Error(`transition ${n2} not found`);
        return e2;
      }
      zn.prototype.interrupt = function(t2) {
        return this.each(function() {
          gi(this, t2);
        });
      }, zn.prototype.transition = function(t2) {
        var n2, e2;
        t2 instanceof ji ? (n2 = t2._id, t2 = t2._name) : (n2 = Xi(), (e2 = yo).time = ti(), t2 = t2 == null ? null : t2 + "");
        for (var r2 = this._groups, i2 = r2.length, o2 = 0; o2 < i2; ++o2)
          for (var a2, u2 = r2[o2], c2 = u2.length, f2 = 0; f2 < c2; ++f2)
            (a2 = u2[f2]) && li(a2, t2, n2, f2, u2, e2 || vo(a2, n2));
        return new ji(r2, this._parents, t2, n2);
      };
      var _o = [null];
      var bo = (t2) => () => t2;
      function mo(t2, {sourceEvent: n2, target: e2, selection: r2, mode: i2, dispatch: o2}) {
        Object.defineProperties(this, {type: {value: t2, enumerable: true, configurable: true}, sourceEvent: {value: n2, enumerable: true, configurable: true}, target: {value: e2, enumerable: true, configurable: true}, selection: {value: r2, enumerable: true, configurable: true}, mode: {value: i2, enumerable: true, configurable: true}, _: {value: o2}});
      }
      function xo(t2) {
        t2.stopImmediatePropagation();
      }
      function wo(t2) {
        t2.preventDefault(), t2.stopImmediatePropagation();
      }
      var Mo = {name: "drag"}, Ao = {name: "space"}, To = {name: "handle"}, So = {name: "center"};
      const {abs: Eo, max: ko, min: No} = Math;
      function Co(t2) {
        return [+t2[0], +t2[1]];
      }
      function Po(t2) {
        return [Co(t2[0]), Co(t2[1])];
      }
      var zo = {name: "x", handles: ["w", "e"].map(Bo), input: function(t2, n2) {
        return t2 == null ? null : [[+t2[0], n2[0][1]], [+t2[1], n2[1][1]]];
      }, output: function(t2) {
        return t2 && [t2[0][0], t2[1][0]];
      }}, Do = {name: "y", handles: ["n", "s"].map(Bo), input: function(t2, n2) {
        return t2 == null ? null : [[n2[0][0], +t2[0]], [n2[1][0], +t2[1]]];
      }, output: function(t2) {
        return t2 && [t2[0][1], t2[1][1]];
      }}, qo = {name: "xy", handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Bo), input: function(t2) {
        return t2 == null ? null : Po(t2);
      }, output: function(t2) {
        return t2;
      }}, Ro = {overlay: "crosshair", selection: "move", n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize"}, Fo = {e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se"}, Oo = {n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw"}, Uo = {overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1}, Io = {overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1};
      function Bo(t2) {
        return {type: t2};
      }
      function Yo(t2) {
        return !t2.ctrlKey && !t2.button;
      }
      function Lo() {
        var t2 = this.ownerSVGElement || this;
        return t2.hasAttribute("viewBox") ? [[(t2 = t2.viewBox.baseVal).x, t2.y], [t2.x + t2.width, t2.y + t2.height]] : [[0, 0], [t2.width.baseVal.value, t2.height.baseVal.value]];
      }
      function jo() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function Ho(t2) {
        for (; !t2.__brush; )
          if (!(t2 = t2.parentNode))
            return;
        return t2.__brush;
      }
      function Xo(t2) {
        return t2[0][0] === t2[1][0] || t2[0][1] === t2[1][1];
      }
      function Go(t2) {
        var n2, e2 = Lo, r2 = Yo, i2 = jo, o2 = true, a2 = pt("start", "brush", "end"), u2 = 6;
        function c2(n3) {
          var e3 = n3.property("__brush", g2).selectAll(".overlay").data([Bo("overlay")]);
          e3.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Ro.overlay).merge(e3).each(function() {
            var t3 = Ho(this).extent;
            Dn(this).attr("x", t3[0][0]).attr("y", t3[0][1]).attr("width", t3[1][0] - t3[0][0]).attr("height", t3[1][1] - t3[0][1]);
          }), n3.selectAll(".selection").data([Bo("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Ro.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
          var r3 = n3.selectAll(".handle").data(t2.handles, function(t3) {
            return t3.type;
          });
          r3.exit().remove(), r3.enter().append("rect").attr("class", function(t3) {
            return "handle handle--" + t3.type;
          }).attr("cursor", function(t3) {
            return Ro[t3.type];
          }), n3.each(f2).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", h2).filter(i2).on("touchstart.brush", h2).on("touchmove.brush", d2).on("touchend.brush touchcancel.brush", p2).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function f2() {
          var t3 = Dn(this), n3 = Ho(this).selection;
          n3 ? (t3.selectAll(".selection").style("display", null).attr("x", n3[0][0]).attr("y", n3[0][1]).attr("width", n3[1][0] - n3[0][0]).attr("height", n3[1][1] - n3[0][1]), t3.selectAll(".handle").style("display", null).attr("x", function(t4) {
            return t4.type[t4.type.length - 1] === "e" ? n3[1][0] - u2 / 2 : n3[0][0] - u2 / 2;
          }).attr("y", function(t4) {
            return t4.type[0] === "s" ? n3[1][1] - u2 / 2 : n3[0][1] - u2 / 2;
          }).attr("width", function(t4) {
            return t4.type === "n" || t4.type === "s" ? n3[1][0] - n3[0][0] + u2 : u2;
          }).attr("height", function(t4) {
            return t4.type === "e" || t4.type === "w" ? n3[1][1] - n3[0][1] + u2 : u2;
          })) : t3.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
        }
        function s2(t3, n3, e3) {
          var r3 = t3.__brush.emitter;
          return !r3 || e3 && r3.clean ? new l2(t3, n3, e3) : r3;
        }
        function l2(t3, n3, e3) {
          this.that = t3, this.args = n3, this.state = t3.__brush, this.active = 0, this.clean = e3;
        }
        function h2(e3) {
          if ((!n2 || e3.touches) && r2.apply(this, arguments)) {
            var i3, a3, u3, c3, l3, h3, d4, p3, g3, y2, v2, _2 = this, b2 = e3.target.__data__.type, m2 = (o2 && e3.metaKey ? b2 = "overlay" : b2) === "selection" ? Mo : o2 && e3.altKey ? So : To, x2 = t2 === Do ? null : Uo[b2], w2 = t2 === zo ? null : Io[b2], M2 = Ho(_2), A2 = M2.extent, T2 = M2.selection, S2 = A2[0][0], E2 = A2[0][1], k2 = A2[1][0], N2 = A2[1][1], C2 = 0, P2 = 0, z2 = x2 && w2 && o2 && e3.shiftKey, D2 = Array.from(e3.touches || [e3], (t3) => {
              const n3 = t3.identifier;
              return (t3 = Un(t3, _2)).point0 = t3.slice(), t3.identifier = n3, t3;
            });
            if (b2 === "overlay") {
              T2 && (g3 = true);
              const n3 = [D2[0], D2[1] || D2[0]];
              M2.selection = T2 = [[i3 = t2 === Do ? S2 : No(n3[0][0], n3[1][0]), u3 = t2 === zo ? E2 : No(n3[0][1], n3[1][1])], [l3 = t2 === Do ? k2 : ko(n3[0][0], n3[1][0]), d4 = t2 === zo ? N2 : ko(n3[0][1], n3[1][1])]], D2.length > 1 && I2();
            } else
              i3 = T2[0][0], u3 = T2[0][1], l3 = T2[1][0], d4 = T2[1][1];
            a3 = i3, c3 = u3, h3 = l3, p3 = d4;
            var q2 = Dn(_2).attr("pointer-events", "none"), R2 = q2.selectAll(".overlay").attr("cursor", Ro[b2]);
            gi(_2);
            var F2 = s2(_2, arguments, true).beforestart();
            if (e3.touches)
              F2.moved = U2, F2.ended = B2;
            else {
              var O2 = Dn(e3.view).on("mousemove.brush", U2, true).on("mouseup.brush", B2, true);
              o2 && O2.on("keydown.brush", Y2, true).on("keyup.brush", L2, true), Yn(e3.view);
            }
            f2.call(_2), F2.start(e3, m2.name);
          }
          function U2(t3) {
            for (const n3 of t3.changedTouches || [t3])
              for (const t4 of D2)
                t4.identifier === n3.identifier && (t4.cur = Un(n3, _2));
            if (z2 && !y2 && !v2 && D2.length === 1) {
              const t4 = D2[0];
              Eo(t4.cur[0] - t4[0]) > Eo(t4.cur[1] - t4[1]) ? v2 = true : y2 = true;
            }
            for (const t4 of D2)
              t4.cur && (t4[0] = t4.cur[0], t4[1] = t4.cur[1]);
            g3 = true, wo(t3), I2(t3);
          }
          function I2(t3) {
            const n3 = D2[0], e4 = n3.point0;
            var r3;
            switch (C2 = n3[0] - e4[0], P2 = n3[1] - e4[1], m2) {
              case Ao:
              case Mo:
                x2 && (C2 = ko(S2 - i3, No(k2 - l3, C2)), a3 = i3 + C2, h3 = l3 + C2), w2 && (P2 = ko(E2 - u3, No(N2 - d4, P2)), c3 = u3 + P2, p3 = d4 + P2);
                break;
              case To:
                D2[1] ? (x2 && (a3 = ko(S2, No(k2, D2[0][0])), h3 = ko(S2, No(k2, D2[1][0])), x2 = 1), w2 && (c3 = ko(E2, No(N2, D2[0][1])), p3 = ko(E2, No(N2, D2[1][1])), w2 = 1)) : (x2 < 0 ? (C2 = ko(S2 - i3, No(k2 - i3, C2)), a3 = i3 + C2, h3 = l3) : x2 > 0 && (C2 = ko(S2 - l3, No(k2 - l3, C2)), a3 = i3, h3 = l3 + C2), w2 < 0 ? (P2 = ko(E2 - u3, No(N2 - u3, P2)), c3 = u3 + P2, p3 = d4) : w2 > 0 && (P2 = ko(E2 - d4, No(N2 - d4, P2)), c3 = u3, p3 = d4 + P2));
                break;
              case So:
                x2 && (a3 = ko(S2, No(k2, i3 - C2 * x2)), h3 = ko(S2, No(k2, l3 + C2 * x2))), w2 && (c3 = ko(E2, No(N2, u3 - P2 * w2)), p3 = ko(E2, No(N2, d4 + P2 * w2)));
            }
            h3 < a3 && (x2 *= -1, r3 = i3, i3 = l3, l3 = r3, r3 = a3, a3 = h3, h3 = r3, b2 in Fo && R2.attr("cursor", Ro[b2 = Fo[b2]])), p3 < c3 && (w2 *= -1, r3 = u3, u3 = d4, d4 = r3, r3 = c3, c3 = p3, p3 = r3, b2 in Oo && R2.attr("cursor", Ro[b2 = Oo[b2]])), M2.selection && (T2 = M2.selection), y2 && (a3 = T2[0][0], h3 = T2[1][0]), v2 && (c3 = T2[0][1], p3 = T2[1][1]), T2[0][0] === a3 && T2[0][1] === c3 && T2[1][0] === h3 && T2[1][1] === p3 || (M2.selection = [[a3, c3], [h3, p3]], f2.call(_2), F2.brush(t3, m2.name));
          }
          function B2(t3) {
            if (xo(t3), t3.touches) {
              if (t3.touches.length)
                return;
              n2 && clearTimeout(n2), n2 = setTimeout(function() {
                n2 = null;
              }, 500);
            } else
              Ln(t3.view, g3), O2.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
            q2.attr("pointer-events", "all"), R2.attr("cursor", Ro.overlay), M2.selection && (T2 = M2.selection), Xo(T2) && (M2.selection = null, f2.call(_2)), F2.end(t3, m2.name);
          }
          function Y2(t3) {
            switch (t3.keyCode) {
              case 16:
                z2 = x2 && w2;
                break;
              case 18:
                m2 === To && (x2 && (l3 = h3 - C2 * x2, i3 = a3 + C2 * x2), w2 && (d4 = p3 - P2 * w2, u3 = c3 + P2 * w2), m2 = So, I2());
                break;
              case 32:
                m2 !== To && m2 !== So || (x2 < 0 ? l3 = h3 - C2 : x2 > 0 && (i3 = a3 - C2), w2 < 0 ? d4 = p3 - P2 : w2 > 0 && (u3 = c3 - P2), m2 = Ao, R2.attr("cursor", Ro.selection), I2());
                break;
              default:
                return;
            }
            wo(t3);
          }
          function L2(t3) {
            switch (t3.keyCode) {
              case 16:
                z2 && (y2 = v2 = z2 = false, I2());
                break;
              case 18:
                m2 === So && (x2 < 0 ? l3 = h3 : x2 > 0 && (i3 = a3), w2 < 0 ? d4 = p3 : w2 > 0 && (u3 = c3), m2 = To, I2());
                break;
              case 32:
                m2 === Ao && (t3.altKey ? (x2 && (l3 = h3 - C2 * x2, i3 = a3 + C2 * x2), w2 && (d4 = p3 - P2 * w2, u3 = c3 + P2 * w2), m2 = So) : (x2 < 0 ? l3 = h3 : x2 > 0 && (i3 = a3), w2 < 0 ? d4 = p3 : w2 > 0 && (u3 = c3), m2 = To), R2.attr("cursor", Ro[b2]), I2());
                break;
              default:
                return;
            }
            wo(t3);
          }
        }
        function d2(t3) {
          s2(this, arguments).moved(t3);
        }
        function p2(t3) {
          s2(this, arguments).ended(t3);
        }
        function g2() {
          var n3 = this.__brush || {selection: null};
          return n3.extent = Po(e2.apply(this, arguments)), n3.dim = t2, n3;
        }
        return c2.move = function(n3, e3) {
          n3.tween ? n3.on("start.brush", function(t3) {
            s2(this, arguments).beforestart().start(t3);
          }).on("interrupt.brush end.brush", function(t3) {
            s2(this, arguments).end(t3);
          }).tween("brush", function() {
            var n4 = this, r3 = n4.__brush, i3 = s2(n4, arguments), o3 = r3.selection, a3 = t2.input(typeof e3 == "function" ? e3.apply(this, arguments) : e3, r3.extent), u3 = Mr(o3, a3);
            function c3(t3) {
              r3.selection = t3 === 1 && a3 === null ? null : u3(t3), f2.call(n4), i3.brush();
            }
            return o3 !== null && a3 !== null ? c3 : c3(1);
          }) : n3.each(function() {
            var n4 = this, r3 = arguments, i3 = n4.__brush, o3 = t2.input(typeof e3 == "function" ? e3.apply(n4, r3) : e3, i3.extent), a3 = s2(n4, r3).beforestart();
            gi(n4), i3.selection = o3 === null ? null : o3, f2.call(n4), a3.start().brush().end();
          });
        }, c2.clear = function(t3) {
          c2.move(t3, null);
        }, l2.prototype = {beforestart: function() {
          return ++this.active == 1 && (this.state.emitter = this, this.starting = true), this;
        }, start: function(t3, n3) {
          return this.starting ? (this.starting = false, this.emit("start", t3, n3)) : this.emit("brush", t3), this;
        }, brush: function(t3, n3) {
          return this.emit("brush", t3, n3), this;
        }, end: function(t3, n3) {
          return --this.active == 0 && (delete this.state.emitter, this.emit("end", t3, n3)), this;
        }, emit: function(n3, e3, r3) {
          var i3 = Dn(this.that).datum();
          a2.call(n3, this.that, new mo(n3, {sourceEvent: e3, target: c2, selection: t2.output(this.state.selection), mode: r3, dispatch: a2}), i3);
        }}, c2.extent = function(t3) {
          return arguments.length ? (e2 = typeof t3 == "function" ? t3 : bo(Po(t3)), c2) : e2;
        }, c2.filter = function(t3) {
          return arguments.length ? (r2 = typeof t3 == "function" ? t3 : bo(!!t3), c2) : r2;
        }, c2.touchable = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : bo(!!t3), c2) : i2;
        }, c2.handleSize = function(t3) {
          return arguments.length ? (u2 = +t3, c2) : u2;
        }, c2.keyModifiers = function(t3) {
          return arguments.length ? (o2 = !!t3, c2) : o2;
        }, c2.on = function() {
          var t3 = a2.on.apply(a2, arguments);
          return t3 === a2 ? c2 : t3;
        }, c2;
      }
      var Vo = Math.abs, $o = Math.cos, Wo = Math.sin, Zo = Math.PI, Ko = Zo / 2, Qo = 2 * Zo, Jo = Math.max, ta = 1e-12;
      function na(t2, n2) {
        return Array.from({length: n2 - t2}, (n3, e2) => t2 + e2);
      }
      function ea(t2) {
        return function(n2, e2) {
          return t2(n2.source.value + n2.target.value, e2.source.value + e2.target.value);
        };
      }
      function ra(t2, n2) {
        var e2 = 0, r2 = null, i2 = null, o2 = null;
        function a2(a3) {
          var u2, c2 = a3.length, f2 = new Array(c2), s2 = na(0, c2), l2 = new Array(c2 * c2), h2 = new Array(c2), d2 = 0;
          a3 = Float64Array.from({length: c2 * c2}, n2 ? (t3, n3) => a3[n3 % c2][n3 / c2 | 0] : (t3, n3) => a3[n3 / c2 | 0][n3 % c2]);
          for (let n3 = 0; n3 < c2; ++n3) {
            let e3 = 0;
            for (let r3 = 0; r3 < c2; ++r3)
              e3 += a3[n3 * c2 + r3] + t2 * a3[r3 * c2 + n3];
            d2 += f2[n3] = e3;
          }
          u2 = (d2 = Jo(0, Qo - e2 * c2) / d2) ? e2 : Qo / c2;
          {
            let n3 = 0;
            r2 && s2.sort((t3, n4) => r2(f2[t3], f2[n4]));
            for (const e3 of s2) {
              const r3 = n3;
              if (t2) {
                const t3 = na(1 + ~c2, c2).filter((t4) => t4 < 0 ? a3[~t4 * c2 + e3] : a3[e3 * c2 + t4]);
                i2 && t3.sort((t4, n4) => i2(t4 < 0 ? -a3[~t4 * c2 + e3] : a3[e3 * c2 + t4], n4 < 0 ? -a3[~n4 * c2 + e3] : a3[e3 * c2 + n4]));
                for (const r4 of t3)
                  if (r4 < 0) {
                    (l2[~r4 * c2 + e3] || (l2[~r4 * c2 + e3] = {source: null, target: null})).target = {index: e3, startAngle: n3, endAngle: n3 += a3[~r4 * c2 + e3] * d2, value: a3[~r4 * c2 + e3]};
                  } else {
                    (l2[e3 * c2 + r4] || (l2[e3 * c2 + r4] = {source: null, target: null})).source = {index: e3, startAngle: n3, endAngle: n3 += a3[e3 * c2 + r4] * d2, value: a3[e3 * c2 + r4]};
                  }
                h2[e3] = {index: e3, startAngle: r3, endAngle: n3, value: f2[e3]};
              } else {
                const t3 = na(0, c2).filter((t4) => a3[e3 * c2 + t4] || a3[t4 * c2 + e3]);
                i2 && t3.sort((t4, n4) => i2(a3[e3 * c2 + t4], a3[e3 * c2 + n4]));
                for (const r4 of t3) {
                  let t4;
                  if (e3 < r4 ? (t4 = l2[e3 * c2 + r4] || (l2[e3 * c2 + r4] = {source: null, target: null}), t4.source = {index: e3, startAngle: n3, endAngle: n3 += a3[e3 * c2 + r4] * d2, value: a3[e3 * c2 + r4]}) : (t4 = l2[r4 * c2 + e3] || (l2[r4 * c2 + e3] = {source: null, target: null}), t4.target = {index: e3, startAngle: n3, endAngle: n3 += a3[e3 * c2 + r4] * d2, value: a3[e3 * c2 + r4]}, e3 === r4 && (t4.source = t4.target)), t4.source && t4.target && t4.source.value < t4.target.value) {
                    const n4 = t4.source;
                    t4.source = t4.target, t4.target = n4;
                  }
                }
                h2[e3] = {index: e3, startAngle: r3, endAngle: n3, value: f2[e3]};
              }
              n3 += u2;
            }
          }
          return (l2 = Object.values(l2)).groups = h2, o2 ? l2.sort(o2) : l2;
        }
        return a2.padAngle = function(t3) {
          return arguments.length ? (e2 = Jo(0, t3), a2) : e2;
        }, a2.sortGroups = function(t3) {
          return arguments.length ? (r2 = t3, a2) : r2;
        }, a2.sortSubgroups = function(t3) {
          return arguments.length ? (i2 = t3, a2) : i2;
        }, a2.sortChords = function(t3) {
          return arguments.length ? (t3 == null ? o2 = null : (o2 = ea(t3))._ = t3, a2) : o2 && o2._;
        }, a2;
      }
      const ia = Math.PI, oa = 2 * ia, aa = 1e-6, ua = oa - aa;
      function ca() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
      }
      function fa() {
        return new ca();
      }
      ca.prototype = fa.prototype = {constructor: ca, moveTo: function(t2, n2) {
        this._ += "M" + (this._x0 = this._x1 = +t2) + "," + (this._y0 = this._y1 = +n2);
      }, closePath: function() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
      }, lineTo: function(t2, n2) {
        this._ += "L" + (this._x1 = +t2) + "," + (this._y1 = +n2);
      }, quadraticCurveTo: function(t2, n2, e2, r2) {
        this._ += "Q" + +t2 + "," + +n2 + "," + (this._x1 = +e2) + "," + (this._y1 = +r2);
      }, bezierCurveTo: function(t2, n2, e2, r2, i2, o2) {
        this._ += "C" + +t2 + "," + +n2 + "," + +e2 + "," + +r2 + "," + (this._x1 = +i2) + "," + (this._y1 = +o2);
      }, arcTo: function(t2, n2, e2, r2, i2) {
        t2 = +t2, n2 = +n2, e2 = +e2, r2 = +r2, i2 = +i2;
        var o2 = this._x1, a2 = this._y1, u2 = e2 - t2, c2 = r2 - n2, f2 = o2 - t2, s2 = a2 - n2, l2 = f2 * f2 + s2 * s2;
        if (i2 < 0)
          throw new Error("negative radius: " + i2);
        if (this._x1 === null)
          this._ += "M" + (this._x1 = t2) + "," + (this._y1 = n2);
        else if (l2 > aa)
          if (Math.abs(s2 * u2 - c2 * f2) > aa && i2) {
            var h2 = e2 - o2, d2 = r2 - a2, p2 = u2 * u2 + c2 * c2, g2 = h2 * h2 + d2 * d2, y2 = Math.sqrt(p2), v2 = Math.sqrt(l2), _2 = i2 * Math.tan((ia - Math.acos((p2 + l2 - g2) / (2 * y2 * v2))) / 2), b2 = _2 / v2, m2 = _2 / y2;
            Math.abs(b2 - 1) > aa && (this._ += "L" + (t2 + b2 * f2) + "," + (n2 + b2 * s2)), this._ += "A" + i2 + "," + i2 + ",0,0," + +(s2 * h2 > f2 * d2) + "," + (this._x1 = t2 + m2 * u2) + "," + (this._y1 = n2 + m2 * c2);
          } else
            this._ += "L" + (this._x1 = t2) + "," + (this._y1 = n2);
        else
          ;
      }, arc: function(t2, n2, e2, r2, i2, o2) {
        t2 = +t2, n2 = +n2, o2 = !!o2;
        var a2 = (e2 = +e2) * Math.cos(r2), u2 = e2 * Math.sin(r2), c2 = t2 + a2, f2 = n2 + u2, s2 = 1 ^ o2, l2 = o2 ? r2 - i2 : i2 - r2;
        if (e2 < 0)
          throw new Error("negative radius: " + e2);
        this._x1 === null ? this._ += "M" + c2 + "," + f2 : (Math.abs(this._x1 - c2) > aa || Math.abs(this._y1 - f2) > aa) && (this._ += "L" + c2 + "," + f2), e2 && (l2 < 0 && (l2 = l2 % oa + oa), l2 > ua ? this._ += "A" + e2 + "," + e2 + ",0,1," + s2 + "," + (t2 - a2) + "," + (n2 - u2) + "A" + e2 + "," + e2 + ",0,1," + s2 + "," + (this._x1 = c2) + "," + (this._y1 = f2) : l2 > aa && (this._ += "A" + e2 + "," + e2 + ",0," + +(l2 >= ia) + "," + s2 + "," + (this._x1 = t2 + e2 * Math.cos(i2)) + "," + (this._y1 = n2 + e2 * Math.sin(i2))));
      }, rect: function(t2, n2, e2, r2) {
        this._ += "M" + (this._x0 = this._x1 = +t2) + "," + (this._y0 = this._y1 = +n2) + "h" + +e2 + "v" + +r2 + "h" + -e2 + "Z";
      }, toString: function() {
        return this._;
      }};
      var sa = Array.prototype.slice;
      function la(t2) {
        return function() {
          return t2;
        };
      }
      function ha(t2) {
        return t2.source;
      }
      function da(t2) {
        return t2.target;
      }
      function pa(t2) {
        return t2.radius;
      }
      function ga(t2) {
        return t2.startAngle;
      }
      function ya(t2) {
        return t2.endAngle;
      }
      function va() {
        return 0;
      }
      function _a() {
        return 10;
      }
      function ba(t2) {
        var n2 = ha, e2 = da, r2 = pa, i2 = pa, o2 = ga, a2 = ya, u2 = va, c2 = null;
        function f2() {
          var f3, s2 = n2.apply(this, arguments), l2 = e2.apply(this, arguments), h2 = u2.apply(this, arguments) / 2, d2 = sa.call(arguments), p2 = +r2.apply(this, (d2[0] = s2, d2)), g2 = o2.apply(this, d2) - Ko, y2 = a2.apply(this, d2) - Ko, v2 = +i2.apply(this, (d2[0] = l2, d2)), _2 = o2.apply(this, d2) - Ko, b2 = a2.apply(this, d2) - Ko;
          if (c2 || (c2 = f3 = fa()), h2 > ta && (Vo(y2 - g2) > 2 * h2 + ta ? y2 > g2 ? (g2 += h2, y2 -= h2) : (g2 -= h2, y2 += h2) : g2 = y2 = (g2 + y2) / 2, Vo(b2 - _2) > 2 * h2 + ta ? b2 > _2 ? (_2 += h2, b2 -= h2) : (_2 -= h2, b2 += h2) : _2 = b2 = (_2 + b2) / 2), c2.moveTo(p2 * $o(g2), p2 * Wo(g2)), c2.arc(0, 0, p2, g2, y2), g2 !== _2 || y2 !== b2)
            if (t2) {
              var m2 = +t2.apply(this, arguments), x2 = v2 - m2, w2 = (_2 + b2) / 2;
              c2.quadraticCurveTo(0, 0, x2 * $o(_2), x2 * Wo(_2)), c2.lineTo(v2 * $o(w2), v2 * Wo(w2)), c2.lineTo(x2 * $o(b2), x2 * Wo(b2));
            } else
              c2.quadraticCurveTo(0, 0, v2 * $o(_2), v2 * Wo(_2)), c2.arc(0, 0, v2, _2, b2);
          if (c2.quadraticCurveTo(0, 0, p2 * $o(g2), p2 * Wo(g2)), c2.closePath(), f3)
            return c2 = null, f3 + "" || null;
        }
        return t2 && (f2.headRadius = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : la(+n3), f2) : t2;
        }), f2.radius = function(t3) {
          return arguments.length ? (r2 = i2 = typeof t3 == "function" ? t3 : la(+t3), f2) : r2;
        }, f2.sourceRadius = function(t3) {
          return arguments.length ? (r2 = typeof t3 == "function" ? t3 : la(+t3), f2) : r2;
        }, f2.targetRadius = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : la(+t3), f2) : i2;
        }, f2.startAngle = function(t3) {
          return arguments.length ? (o2 = typeof t3 == "function" ? t3 : la(+t3), f2) : o2;
        }, f2.endAngle = function(t3) {
          return arguments.length ? (a2 = typeof t3 == "function" ? t3 : la(+t3), f2) : a2;
        }, f2.padAngle = function(t3) {
          return arguments.length ? (u2 = typeof t3 == "function" ? t3 : la(+t3), f2) : u2;
        }, f2.source = function(t3) {
          return arguments.length ? (n2 = t3, f2) : n2;
        }, f2.target = function(t3) {
          return arguments.length ? (e2 = t3, f2) : e2;
        }, f2.context = function(t3) {
          return arguments.length ? (c2 = t3 == null ? null : t3, f2) : c2;
        }, f2;
      }
      var ma = Array.prototype.slice;
      function xa(t2, n2) {
        return t2 - n2;
      }
      var wa = (t2) => () => t2;
      function Ma(t2, n2) {
        for (var e2, r2 = -1, i2 = n2.length; ++r2 < i2; )
          if (e2 = Aa(t2, n2[r2]))
            return e2;
        return 0;
      }
      function Aa(t2, n2) {
        for (var e2 = n2[0], r2 = n2[1], i2 = -1, o2 = 0, a2 = t2.length, u2 = a2 - 1; o2 < a2; u2 = o2++) {
          var c2 = t2[o2], f2 = c2[0], s2 = c2[1], l2 = t2[u2], h2 = l2[0], d2 = l2[1];
          if (Ta(c2, l2, n2))
            return 0;
          s2 > r2 != d2 > r2 && e2 < (h2 - f2) * (r2 - s2) / (d2 - s2) + f2 && (i2 = -i2);
        }
        return i2;
      }
      function Ta(t2, n2, e2) {
        var r2, i2, o2, a2;
        return function(t3, n3, e3) {
          return (n3[0] - t3[0]) * (e3[1] - t3[1]) == (e3[0] - t3[0]) * (n3[1] - t3[1]);
        }(t2, n2, e2) && (i2 = t2[r2 = +(t2[0] === n2[0])], o2 = e2[r2], a2 = n2[r2], i2 <= o2 && o2 <= a2 || a2 <= o2 && o2 <= i2);
      }
      function Sa() {
      }
      var Ea = [[], [[[1, 1.5], [0.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [0.5, 1]]], [[[1, 0.5], [1.5, 1]]], [[[1, 1.5], [0.5, 1]], [[1, 0.5], [1.5, 1]]], [[[1, 0.5], [1, 1.5]]], [[[1, 0.5], [0.5, 1]]], [[[0.5, 1], [1, 0.5]]], [[[1, 1.5], [1, 0.5]]], [[[0.5, 1], [1, 0.5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, 0.5]]], [[[0.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[0.5, 1], [1, 1.5]]], []];
      function ka() {
        var t2 = 1, n2 = 1, e2 = U, r2 = u2;
        function i2(t3) {
          var n3 = e2(t3);
          if (Array.isArray(n3))
            n3 = n3.slice().sort(xa);
          else {
            var r3 = p(t3), i3 = r3[0], a3 = r3[1];
            n3 = F(i3, a3, n3), n3 = Z(Math.floor(i3 / n3) * n3, Math.floor(a3 / n3) * n3, n3);
          }
          return n3.map(function(n4) {
            return o2(t3, n4);
          });
        }
        function o2(e3, i3) {
          var o3 = [], u3 = [];
          return function(e4, r3, i4) {
            var o4, u4, c2, f2, s2, l2, h2 = new Array(), d2 = new Array();
            o4 = u4 = -1, f2 = e4[0] >= r3, Ea[f2 << 1].forEach(p2);
            for (; ++o4 < t2 - 1; )
              c2 = f2, f2 = e4[o4 + 1] >= r3, Ea[c2 | f2 << 1].forEach(p2);
            Ea[f2 << 0].forEach(p2);
            for (; ++u4 < n2 - 1; ) {
              for (o4 = -1, f2 = e4[u4 * t2 + t2] >= r3, s2 = e4[u4 * t2] >= r3, Ea[f2 << 1 | s2 << 2].forEach(p2); ++o4 < t2 - 1; )
                c2 = f2, f2 = e4[u4 * t2 + t2 + o4 + 1] >= r3, l2 = s2, s2 = e4[u4 * t2 + o4 + 1] >= r3, Ea[c2 | f2 << 1 | s2 << 2 | l2 << 3].forEach(p2);
              Ea[f2 | s2 << 3].forEach(p2);
            }
            o4 = -1, s2 = e4[u4 * t2] >= r3, Ea[s2 << 2].forEach(p2);
            for (; ++o4 < t2 - 1; )
              l2 = s2, s2 = e4[u4 * t2 + o4 + 1] >= r3, Ea[s2 << 2 | l2 << 3].forEach(p2);
            function p2(t3) {
              var n3, e5, r4 = [t3[0][0] + o4, t3[0][1] + u4], c3 = [t3[1][0] + o4, t3[1][1] + u4], f3 = a2(r4), s3 = a2(c3);
              (n3 = d2[f3]) ? (e5 = h2[s3]) ? (delete d2[n3.end], delete h2[e5.start], n3 === e5 ? (n3.ring.push(c3), i4(n3.ring)) : h2[n3.start] = d2[e5.end] = {start: n3.start, end: e5.end, ring: n3.ring.concat(e5.ring)}) : (delete d2[n3.end], n3.ring.push(c3), d2[n3.end = s3] = n3) : (n3 = h2[s3]) ? (e5 = d2[f3]) ? (delete h2[n3.start], delete d2[e5.end], n3 === e5 ? (n3.ring.push(c3), i4(n3.ring)) : h2[e5.start] = d2[n3.end] = {start: e5.start, end: n3.end, ring: e5.ring.concat(n3.ring)}) : (delete h2[n3.start], n3.ring.unshift(r4), h2[n3.start = f3] = n3) : h2[f3] = d2[s3] = {start: f3, end: s3, ring: [r4, c3]};
            }
            Ea[s2 << 3].forEach(p2);
          }(e3, i3, function(t3) {
            r2(t3, e3, i3), function(t4) {
              for (var n3 = 0, e4 = t4.length, r3 = t4[e4 - 1][1] * t4[0][0] - t4[e4 - 1][0] * t4[0][1]; ++n3 < e4; )
                r3 += t4[n3 - 1][1] * t4[n3][0] - t4[n3 - 1][0] * t4[n3][1];
              return r3;
            }(t3) > 0 ? o3.push([t3]) : u3.push(t3);
          }), u3.forEach(function(t3) {
            for (var n3, e4 = 0, r3 = o3.length; e4 < r3; ++e4)
              if (Ma((n3 = o3[e4])[0], t3) !== -1)
                return void n3.push(t3);
          }), {type: "MultiPolygon", value: i3, coordinates: o3};
        }
        function a2(n3) {
          return 2 * n3[0] + n3[1] * (t2 + 1) * 4;
        }
        function u2(e3, r3, i3) {
          e3.forEach(function(e4) {
            var o3, a3 = e4[0], u3 = e4[1], c2 = 0 | a3, f2 = 0 | u3, s2 = r3[f2 * t2 + c2];
            a3 > 0 && a3 < t2 && c2 === a3 && (o3 = r3[f2 * t2 + c2 - 1], e4[0] = a3 + (i3 - o3) / (s2 - o3) - 0.5), u3 > 0 && u3 < n2 && f2 === u3 && (o3 = r3[(f2 - 1) * t2 + c2], e4[1] = u3 + (i3 - o3) / (s2 - o3) - 0.5);
          });
        }
        return i2.contour = o2, i2.size = function(e3) {
          if (!arguments.length)
            return [t2, n2];
          var r3 = Math.floor(e3[0]), o3 = Math.floor(e3[1]);
          if (!(r3 >= 0 && o3 >= 0))
            throw new Error("invalid size");
          return t2 = r3, n2 = o3, i2;
        }, i2.thresholds = function(t3) {
          return arguments.length ? (e2 = typeof t3 == "function" ? t3 : Array.isArray(t3) ? wa(ma.call(t3)) : wa(t3), i2) : e2;
        }, i2.smooth = function(t3) {
          return arguments.length ? (r2 = t3 ? u2 : Sa, i2) : r2 === u2;
        }, i2;
      }
      function Na(t2, n2, e2) {
        for (var r2 = t2.width, i2 = t2.height, o2 = 1 + (e2 << 1), a2 = 0; a2 < i2; ++a2)
          for (var u2 = 0, c2 = 0; u2 < r2 + e2; ++u2)
            u2 < r2 && (c2 += t2.data[u2 + a2 * r2]), u2 >= e2 && (u2 >= o2 && (c2 -= t2.data[u2 - o2 + a2 * r2]), n2.data[u2 - e2 + a2 * r2] = c2 / Math.min(u2 + 1, r2 - 1 + o2 - u2, o2));
      }
      function Ca(t2, n2, e2) {
        for (var r2 = t2.width, i2 = t2.height, o2 = 1 + (e2 << 1), a2 = 0; a2 < r2; ++a2)
          for (var u2 = 0, c2 = 0; u2 < i2 + e2; ++u2)
            u2 < i2 && (c2 += t2.data[a2 + u2 * r2]), u2 >= e2 && (u2 >= o2 && (c2 -= t2.data[a2 + (u2 - o2) * r2]), n2.data[a2 + (u2 - e2) * r2] = c2 / Math.min(u2 + 1, i2 - 1 + o2 - u2, o2));
      }
      function Pa(t2) {
        return t2[0];
      }
      function za(t2) {
        return t2[1];
      }
      function Da() {
        return 1;
      }
      const qa = Math.pow(2, -52), Ra = new Uint32Array(512);
      class Fa {
        static from(t2, n2 = Ha, e2 = Xa) {
          const r2 = t2.length, i2 = new Float64Array(2 * r2);
          for (let o2 = 0; o2 < r2; o2++) {
            const r3 = t2[o2];
            i2[2 * o2] = n2(r3), i2[2 * o2 + 1] = e2(r3);
          }
          return new Fa(i2);
        }
        constructor(t2) {
          const n2 = t2.length >> 1;
          if (n2 > 0 && typeof t2[0] != "number")
            throw new Error("Expected coords to contain numbers.");
          this.coords = t2;
          const e2 = Math.max(2 * n2 - 5, 0);
          this._triangles = new Uint32Array(3 * e2), this._halfedges = new Int32Array(3 * e2), this._hashSize = Math.ceil(Math.sqrt(n2)), this._hullPrev = new Uint32Array(n2), this._hullNext = new Uint32Array(n2), this._hullTri = new Uint32Array(n2), this._hullHash = new Int32Array(this._hashSize).fill(-1), this._ids = new Uint32Array(n2), this._dists = new Float64Array(n2), this.update();
        }
        update() {
          const {coords: t2, _hullPrev: n2, _hullNext: e2, _hullTri: r2, _hullHash: i2} = this, o2 = t2.length >> 1;
          let a2 = 1 / 0, u2 = 1 / 0, c2 = -1 / 0, f2 = -1 / 0;
          for (let n3 = 0; n3 < o2; n3++) {
            const e3 = t2[2 * n3], r3 = t2[2 * n3 + 1];
            e3 < a2 && (a2 = e3), r3 < u2 && (u2 = r3), e3 > c2 && (c2 = e3), r3 > f2 && (f2 = r3), this._ids[n3] = n3;
          }
          const s2 = (a2 + c2) / 2, l2 = (u2 + f2) / 2;
          let h2, d2, p2, g2 = 1 / 0;
          for (let n3 = 0; n3 < o2; n3++) {
            const e3 = Oa(s2, l2, t2[2 * n3], t2[2 * n3 + 1]);
            e3 < g2 && (h2 = n3, g2 = e3);
          }
          const y2 = t2[2 * h2], v2 = t2[2 * h2 + 1];
          g2 = 1 / 0;
          for (let n3 = 0; n3 < o2; n3++) {
            if (n3 === h2)
              continue;
            const e3 = Oa(y2, v2, t2[2 * n3], t2[2 * n3 + 1]);
            e3 < g2 && e3 > 0 && (d2 = n3, g2 = e3);
          }
          let _2 = t2[2 * d2], b2 = t2[2 * d2 + 1], m2 = 1 / 0;
          for (let n3 = 0; n3 < o2; n3++) {
            if (n3 === h2 || n3 === d2)
              continue;
            const e3 = Ya(y2, v2, _2, b2, t2[2 * n3], t2[2 * n3 + 1]);
            e3 < m2 && (p2 = n3, m2 = e3);
          }
          let x2 = t2[2 * p2], w2 = t2[2 * p2 + 1];
          if (m2 === 1 / 0) {
            for (let n4 = 0; n4 < o2; n4++)
              this._dists[n4] = t2[2 * n4] - t2[0] || t2[2 * n4 + 1] - t2[1];
            La(this._ids, this._dists, 0, o2 - 1);
            const n3 = new Uint32Array(o2);
            let e3 = 0;
            for (let t3 = 0, r3 = -1 / 0; t3 < o2; t3++) {
              const i3 = this._ids[t3];
              this._dists[i3] > r3 && (n3[e3++] = i3, r3 = this._dists[i3]);
            }
            return this.hull = n3.subarray(0, e3), this.triangles = new Uint32Array(0), void (this.halfedges = new Uint32Array(0));
          }
          if (Ia(y2, v2, _2, b2, x2, w2)) {
            const t3 = d2, n3 = _2, e3 = b2;
            d2 = p2, _2 = x2, b2 = w2, p2 = t3, x2 = n3, w2 = e3;
          }
          const M2 = function(t3, n3, e3, r3, i3, o3) {
            const a3 = e3 - t3, u3 = r3 - n3, c3 = i3 - t3, f3 = o3 - n3, s3 = a3 * a3 + u3 * u3, l3 = c3 * c3 + f3 * f3, h3 = 0.5 / (a3 * f3 - u3 * c3);
            return {x: t3 + (f3 * s3 - u3 * l3) * h3, y: n3 + (a3 * l3 - c3 * s3) * h3};
          }(y2, v2, _2, b2, x2, w2);
          this._cx = M2.x, this._cy = M2.y;
          for (let n3 = 0; n3 < o2; n3++)
            this._dists[n3] = Oa(t2[2 * n3], t2[2 * n3 + 1], M2.x, M2.y);
          La(this._ids, this._dists, 0, o2 - 1), this._hullStart = h2;
          let A2 = 3;
          e2[h2] = n2[p2] = d2, e2[d2] = n2[h2] = p2, e2[p2] = n2[d2] = h2, r2[h2] = 0, r2[d2] = 1, r2[p2] = 2, i2.fill(-1), i2[this._hashKey(y2, v2)] = h2, i2[this._hashKey(_2, b2)] = d2, i2[this._hashKey(x2, w2)] = p2, this.trianglesLen = 0, this._addTriangle(h2, d2, p2, -1, -1, -1);
          for (let o3, a3, u3 = 0; u3 < this._ids.length; u3++) {
            const c3 = this._ids[u3], f3 = t2[2 * c3], s3 = t2[2 * c3 + 1];
            if (u3 > 0 && Math.abs(f3 - o3) <= qa && Math.abs(s3 - a3) <= qa)
              continue;
            if (o3 = f3, a3 = s3, c3 === h2 || c3 === d2 || c3 === p2)
              continue;
            let l3 = 0;
            for (let t3 = 0, n3 = this._hashKey(f3, s3); t3 < this._hashSize && (l3 = i2[(n3 + t3) % this._hashSize], l3 === -1 || l3 === e2[l3]); t3++)
              ;
            l3 = n2[l3];
            let g3, y3 = l3;
            for (; g3 = e2[y3], !Ia(f3, s3, t2[2 * y3], t2[2 * y3 + 1], t2[2 * g3], t2[2 * g3 + 1]); )
              if (y3 = g3, y3 === l3) {
                y3 = -1;
                break;
              }
            if (y3 === -1)
              continue;
            let v3 = this._addTriangle(y3, c3, e2[y3], -1, -1, r2[y3]);
            r2[c3] = this._legalize(v3 + 2), r2[y3] = v3, A2++;
            let _3 = e2[y3];
            for (; g3 = e2[_3], Ia(f3, s3, t2[2 * _3], t2[2 * _3 + 1], t2[2 * g3], t2[2 * g3 + 1]); )
              v3 = this._addTriangle(_3, c3, g3, r2[c3], -1, r2[_3]), r2[c3] = this._legalize(v3 + 2), e2[_3] = _3, A2--, _3 = g3;
            if (y3 === l3)
              for (; g3 = n2[y3], Ia(f3, s3, t2[2 * g3], t2[2 * g3 + 1], t2[2 * y3], t2[2 * y3 + 1]); )
                v3 = this._addTriangle(g3, c3, y3, -1, r2[y3], r2[g3]), this._legalize(v3 + 2), r2[g3] = v3, e2[y3] = y3, A2--, y3 = g3;
            this._hullStart = n2[c3] = y3, e2[y3] = n2[_3] = c3, e2[c3] = _3, i2[this._hashKey(f3, s3)] = c3, i2[this._hashKey(t2[2 * y3], t2[2 * y3 + 1])] = y3;
          }
          this.hull = new Uint32Array(A2);
          for (let t3 = 0, n3 = this._hullStart; t3 < A2; t3++)
            this.hull[t3] = n3, n3 = e2[n3];
          this.triangles = this._triangles.subarray(0, this.trianglesLen), this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
        }
        _hashKey(t2, n2) {
          return Math.floor(function(t3, n3) {
            const e2 = t3 / (Math.abs(t3) + Math.abs(n3));
            return (n3 > 0 ? 3 - e2 : 1 + e2) / 4;
          }(t2 - this._cx, n2 - this._cy) * this._hashSize) % this._hashSize;
        }
        _legalize(t2) {
          const {_triangles: n2, _halfedges: e2, coords: r2} = this;
          let i2 = 0, o2 = 0;
          for (; ; ) {
            const a2 = e2[t2], u2 = t2 - t2 % 3;
            if (o2 = u2 + (t2 + 2) % 3, a2 === -1) {
              if (i2 === 0)
                break;
              t2 = Ra[--i2];
              continue;
            }
            const c2 = a2 - a2 % 3, f2 = u2 + (t2 + 1) % 3, s2 = c2 + (a2 + 2) % 3, l2 = n2[o2], h2 = n2[t2], d2 = n2[f2], p2 = n2[s2];
            if (Ba(r2[2 * l2], r2[2 * l2 + 1], r2[2 * h2], r2[2 * h2 + 1], r2[2 * d2], r2[2 * d2 + 1], r2[2 * p2], r2[2 * p2 + 1])) {
              n2[t2] = p2, n2[a2] = l2;
              const r3 = e2[s2];
              if (r3 === -1) {
                let n3 = this._hullStart;
                do {
                  if (this._hullTri[n3] === s2) {
                    this._hullTri[n3] = t2;
                    break;
                  }
                  n3 = this._hullPrev[n3];
                } while (n3 !== this._hullStart);
              }
              this._link(t2, r3), this._link(a2, e2[o2]), this._link(o2, s2);
              const u3 = c2 + (a2 + 1) % 3;
              i2 < Ra.length && (Ra[i2++] = u3);
            } else {
              if (i2 === 0)
                break;
              t2 = Ra[--i2];
            }
          }
          return o2;
        }
        _link(t2, n2) {
          this._halfedges[t2] = n2, n2 !== -1 && (this._halfedges[n2] = t2);
        }
        _addTriangle(t2, n2, e2, r2, i2, o2) {
          const a2 = this.trianglesLen;
          return this._triangles[a2] = t2, this._triangles[a2 + 1] = n2, this._triangles[a2 + 2] = e2, this._link(a2, r2), this._link(a2 + 1, i2), this._link(a2 + 2, o2), this.trianglesLen += 3, a2;
        }
      }
      function Oa(t2, n2, e2, r2) {
        const i2 = t2 - e2, o2 = n2 - r2;
        return i2 * i2 + o2 * o2;
      }
      function Ua(t2, n2, e2, r2, i2, o2) {
        const a2 = (r2 - n2) * (i2 - t2), u2 = (e2 - t2) * (o2 - n2);
        return Math.abs(a2 - u2) >= 33306690738754716e-32 * Math.abs(a2 + u2) ? a2 - u2 : 0;
      }
      function Ia(t2, n2, e2, r2, i2, o2) {
        return (Ua(i2, o2, t2, n2, e2, r2) || Ua(t2, n2, e2, r2, i2, o2) || Ua(e2, r2, i2, o2, t2, n2)) < 0;
      }
      function Ba(t2, n2, e2, r2, i2, o2, a2, u2) {
        const c2 = t2 - a2, f2 = n2 - u2, s2 = e2 - a2, l2 = r2 - u2, h2 = i2 - a2, d2 = o2 - u2, p2 = s2 * s2 + l2 * l2, g2 = h2 * h2 + d2 * d2;
        return c2 * (l2 * g2 - p2 * d2) - f2 * (s2 * g2 - p2 * h2) + (c2 * c2 + f2 * f2) * (s2 * d2 - l2 * h2) < 0;
      }
      function Ya(t2, n2, e2, r2, i2, o2) {
        const a2 = e2 - t2, u2 = r2 - n2, c2 = i2 - t2, f2 = o2 - n2, s2 = a2 * a2 + u2 * u2, l2 = c2 * c2 + f2 * f2, h2 = 0.5 / (a2 * f2 - u2 * c2), d2 = (f2 * s2 - u2 * l2) * h2, p2 = (a2 * l2 - c2 * s2) * h2;
        return d2 * d2 + p2 * p2;
      }
      function La(t2, n2, e2, r2) {
        if (r2 - e2 <= 20)
          for (let i2 = e2 + 1; i2 <= r2; i2++) {
            const r3 = t2[i2], o2 = n2[r3];
            let a2 = i2 - 1;
            for (; a2 >= e2 && n2[t2[a2]] > o2; )
              t2[a2 + 1] = t2[a2--];
            t2[a2 + 1] = r3;
          }
        else {
          let i2 = e2 + 1, o2 = r2;
          ja(t2, e2 + r2 >> 1, i2), n2[t2[e2]] > n2[t2[r2]] && ja(t2, e2, r2), n2[t2[i2]] > n2[t2[r2]] && ja(t2, i2, r2), n2[t2[e2]] > n2[t2[i2]] && ja(t2, e2, i2);
          const a2 = t2[i2], u2 = n2[a2];
          for (; ; ) {
            do {
              i2++;
            } while (n2[t2[i2]] < u2);
            do {
              o2--;
            } while (n2[t2[o2]] > u2);
            if (o2 < i2)
              break;
            ja(t2, i2, o2);
          }
          t2[e2 + 1] = t2[o2], t2[o2] = a2, r2 - i2 + 1 >= o2 - e2 ? (La(t2, n2, i2, r2), La(t2, n2, e2, o2 - 1)) : (La(t2, n2, e2, o2 - 1), La(t2, n2, i2, r2));
        }
      }
      function ja(t2, n2, e2) {
        const r2 = t2[n2];
        t2[n2] = t2[e2], t2[e2] = r2;
      }
      function Ha(t2) {
        return t2[0];
      }
      function Xa(t2) {
        return t2[1];
      }
      const Ga = 1e-6;
      class Va {
        constructor() {
          this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
        }
        moveTo(t2, n2) {
          this._ += `M${this._x0 = this._x1 = +t2},${this._y0 = this._y1 = +n2}`;
        }
        closePath() {
          this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
        }
        lineTo(t2, n2) {
          this._ += `L${this._x1 = +t2},${this._y1 = +n2}`;
        }
        arc(t2, n2, e2) {
          const r2 = (t2 = +t2) + (e2 = +e2), i2 = n2 = +n2;
          if (e2 < 0)
            throw new Error("negative radius");
          this._x1 === null ? this._ += `M${r2},${i2}` : (Math.abs(this._x1 - r2) > Ga || Math.abs(this._y1 - i2) > Ga) && (this._ += "L" + r2 + "," + i2), e2 && (this._ += `A${e2},${e2},0,1,1,${t2 - e2},${n2}A${e2},${e2},0,1,1,${this._x1 = r2},${this._y1 = i2}`);
        }
        rect(t2, n2, e2, r2) {
          this._ += `M${this._x0 = this._x1 = +t2},${this._y0 = this._y1 = +n2}h${+e2}v${+r2}h${-e2}Z`;
        }
        value() {
          return this._ || null;
        }
      }
      class $a {
        constructor() {
          this._ = [];
        }
        moveTo(t2, n2) {
          this._.push([t2, n2]);
        }
        closePath() {
          this._.push(this._[0].slice());
        }
        lineTo(t2, n2) {
          this._.push([t2, n2]);
        }
        value() {
          return this._.length ? this._ : null;
        }
      }
      class Wa {
        constructor(t2, [n2, e2, r2, i2] = [0, 0, 960, 500]) {
          if (!((r2 = +r2) >= (n2 = +n2) && (i2 = +i2) >= (e2 = +e2)))
            throw new Error("invalid bounds");
          this.delaunay = t2, this._circumcenters = new Float64Array(2 * t2.points.length), this.vectors = new Float64Array(2 * t2.points.length), this.xmax = r2, this.xmin = n2, this.ymax = i2, this.ymin = e2, this._init();
        }
        update() {
          return this.delaunay.update(), this._init(), this;
        }
        _init() {
          const {delaunay: {points: t2, hull: n2, triangles: e2}, vectors: r2} = this, i2 = this.circumcenters = this._circumcenters.subarray(0, e2.length / 3 * 2);
          for (let n3, r3, o3 = 0, a3 = 0, u3 = e2.length; o3 < u3; o3 += 3, a3 += 2) {
            const u4 = 2 * e2[o3], c3 = 2 * e2[o3 + 1], f3 = 2 * e2[o3 + 2], s3 = t2[u4], l3 = t2[u4 + 1], h2 = t2[c3], d2 = t2[c3 + 1], p2 = t2[f3], g2 = t2[f3 + 1], y2 = h2 - s3, v2 = d2 - l3, _2 = p2 - s3, b2 = g2 - l3, m2 = y2 * y2 + v2 * v2, x2 = _2 * _2 + b2 * b2, w2 = 2 * (y2 * b2 - v2 * _2);
            if (w2)
              if (Math.abs(w2) < 1e-8)
                n3 = (s3 + p2) / 2, r3 = (l3 + g2) / 2;
              else {
                const t3 = 1 / w2;
                n3 = s3 + (b2 * m2 - v2 * x2) * t3, r3 = l3 + (y2 * x2 - _2 * m2) * t3;
              }
            else
              n3 = (s3 + p2) / 2 - 1e8 * b2, r3 = (l3 + g2) / 2 + 1e8 * _2;
            i2[a3] = n3, i2[a3 + 1] = r3;
          }
          let o2, a2, u2, c2 = n2[n2.length - 1], f2 = 4 * c2, s2 = t2[2 * c2], l2 = t2[2 * c2 + 1];
          r2.fill(0);
          for (let e3 = 0; e3 < n2.length; ++e3)
            c2 = n2[e3], o2 = f2, a2 = s2, u2 = l2, f2 = 4 * c2, s2 = t2[2 * c2], l2 = t2[2 * c2 + 1], r2[o2 + 2] = r2[f2] = u2 - l2, r2[o2 + 3] = r2[f2 + 1] = s2 - a2;
        }
        render(t2) {
          const n2 = t2 == null ? t2 = new Va() : void 0, {delaunay: {halfedges: e2, inedges: r2, hull: i2}, circumcenters: o2, vectors: a2} = this;
          if (i2.length <= 1)
            return null;
          for (let n3 = 0, r3 = e2.length; n3 < r3; ++n3) {
            const r4 = e2[n3];
            if (r4 < n3)
              continue;
            const i3 = 2 * Math.floor(n3 / 3), a3 = 2 * Math.floor(r4 / 3), u3 = o2[i3], c3 = o2[i3 + 1], f2 = o2[a3], s2 = o2[a3 + 1];
            this._renderSegment(u3, c3, f2, s2, t2);
          }
          let u2, c2 = i2[i2.length - 1];
          for (let n3 = 0; n3 < i2.length; ++n3) {
            u2 = c2, c2 = i2[n3];
            const e3 = 2 * Math.floor(r2[c2] / 3), f2 = o2[e3], s2 = o2[e3 + 1], l2 = 4 * u2, h2 = this._project(f2, s2, a2[l2 + 2], a2[l2 + 3]);
            h2 && this._renderSegment(f2, s2, h2[0], h2[1], t2);
          }
          return n2 && n2.value();
        }
        renderBounds(t2) {
          const n2 = t2 == null ? t2 = new Va() : void 0;
          return t2.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin), n2 && n2.value();
        }
        renderCell(t2, n2) {
          const e2 = n2 == null ? n2 = new Va() : void 0, r2 = this._clip(t2);
          if (r2 === null || !r2.length)
            return;
          n2.moveTo(r2[0], r2[1]);
          let i2 = r2.length;
          for (; r2[0] === r2[i2 - 2] && r2[1] === r2[i2 - 1] && i2 > 1; )
            i2 -= 2;
          for (let t3 = 2; t3 < i2; t3 += 2)
            r2[t3] === r2[t3 - 2] && r2[t3 + 1] === r2[t3 - 1] || n2.lineTo(r2[t3], r2[t3 + 1]);
          return n2.closePath(), e2 && e2.value();
        }
        *cellPolygons() {
          const {delaunay: {points: t2}} = this;
          for (let n2 = 0, e2 = t2.length / 2; n2 < e2; ++n2) {
            const t3 = this.cellPolygon(n2);
            t3 && (t3.index = n2, yield t3);
          }
        }
        cellPolygon(t2) {
          const n2 = new $a();
          return this.renderCell(t2, n2), n2.value();
        }
        _renderSegment(t2, n2, e2, r2, i2) {
          let o2;
          const a2 = this._regioncode(t2, n2), u2 = this._regioncode(e2, r2);
          a2 === 0 && u2 === 0 ? (i2.moveTo(t2, n2), i2.lineTo(e2, r2)) : (o2 = this._clipSegment(t2, n2, e2, r2, a2, u2)) && (i2.moveTo(o2[0], o2[1]), i2.lineTo(o2[2], o2[3]));
        }
        contains(t2, n2, e2) {
          return (n2 = +n2) == n2 && (e2 = +e2) == e2 && this.delaunay._step(t2, n2, e2) === t2;
        }
        *neighbors(t2) {
          const n2 = this._clip(t2);
          if (n2)
            for (const e2 of this.delaunay.neighbors(t2)) {
              const t3 = this._clip(e2);
              if (t3)
                t:
                  for (let r2 = 0, i2 = n2.length; r2 < i2; r2 += 2)
                    for (let o2 = 0, a2 = t3.length; o2 < a2; o2 += 2)
                      if (n2[r2] == t3[o2] && n2[r2 + 1] == t3[o2 + 1] && n2[(r2 + 2) % i2] == t3[(o2 + a2 - 2) % a2] && n2[(r2 + 3) % i2] == t3[(o2 + a2 - 1) % a2]) {
                        yield e2;
                        break t;
                      }
            }
        }
        _cell(t2) {
          const {circumcenters: n2, delaunay: {inedges: e2, halfedges: r2, triangles: i2}} = this, o2 = e2[t2];
          if (o2 === -1)
            return null;
          const a2 = [];
          let u2 = o2;
          do {
            const e3 = Math.floor(u2 / 3);
            if (a2.push(n2[2 * e3], n2[2 * e3 + 1]), u2 = u2 % 3 == 2 ? u2 - 2 : u2 + 1, i2[u2] !== t2)
              break;
            u2 = r2[u2];
          } while (u2 !== o2 && u2 !== -1);
          return a2;
        }
        _clip(t2) {
          if (t2 === 0 && this.delaunay.hull.length === 1)
            return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
          const n2 = this._cell(t2);
          if (n2 === null)
            return null;
          const {vectors: e2} = this, r2 = 4 * t2;
          return e2[r2] || e2[r2 + 1] ? this._clipInfinite(t2, n2, e2[r2], e2[r2 + 1], e2[r2 + 2], e2[r2 + 3]) : this._clipFinite(t2, n2);
        }
        _clipFinite(t2, n2) {
          const e2 = n2.length;
          let r2, i2, o2, a2, u2, c2 = null, f2 = n2[e2 - 2], s2 = n2[e2 - 1], l2 = this._regioncode(f2, s2);
          for (let h2 = 0; h2 < e2; h2 += 2)
            if (r2 = f2, i2 = s2, f2 = n2[h2], s2 = n2[h2 + 1], o2 = l2, l2 = this._regioncode(f2, s2), o2 === 0 && l2 === 0)
              a2 = u2, u2 = 0, c2 ? c2.push(f2, s2) : c2 = [f2, s2];
            else {
              let n3, e3, h3, d2, p2;
              if (o2 === 0) {
                if ((n3 = this._clipSegment(r2, i2, f2, s2, o2, l2)) === null)
                  continue;
                [e3, h3, d2, p2] = n3;
              } else {
                if ((n3 = this._clipSegment(f2, s2, r2, i2, l2, o2)) === null)
                  continue;
                [d2, p2, e3, h3] = n3, a2 = u2, u2 = this._edgecode(e3, h3), a2 && u2 && this._edge(t2, a2, u2, c2, c2.length), c2 ? c2.push(e3, h3) : c2 = [e3, h3];
              }
              a2 = u2, u2 = this._edgecode(d2, p2), a2 && u2 && this._edge(t2, a2, u2, c2, c2.length), c2 ? c2.push(d2, p2) : c2 = [d2, p2];
            }
          if (c2)
            a2 = u2, u2 = this._edgecode(c2[0], c2[1]), a2 && u2 && this._edge(t2, a2, u2, c2, c2.length);
          else if (this.contains(t2, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2))
            return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
          return c2;
        }
        _clipSegment(t2, n2, e2, r2, i2, o2) {
          for (; ; ) {
            if (i2 === 0 && o2 === 0)
              return [t2, n2, e2, r2];
            if (i2 & o2)
              return null;
            let a2, u2, c2 = i2 || o2;
            8 & c2 ? (a2 = t2 + (e2 - t2) * (this.ymax - n2) / (r2 - n2), u2 = this.ymax) : 4 & c2 ? (a2 = t2 + (e2 - t2) * (this.ymin - n2) / (r2 - n2), u2 = this.ymin) : 2 & c2 ? (u2 = n2 + (r2 - n2) * (this.xmax - t2) / (e2 - t2), a2 = this.xmax) : (u2 = n2 + (r2 - n2) * (this.xmin - t2) / (e2 - t2), a2 = this.xmin), i2 ? (t2 = a2, n2 = u2, i2 = this._regioncode(t2, n2)) : (e2 = a2, r2 = u2, o2 = this._regioncode(e2, r2));
          }
        }
        _clipInfinite(t2, n2, e2, r2, i2, o2) {
          let a2, u2 = Array.from(n2);
          if ((a2 = this._project(u2[0], u2[1], e2, r2)) && u2.unshift(a2[0], a2[1]), (a2 = this._project(u2[u2.length - 2], u2[u2.length - 1], i2, o2)) && u2.push(a2[0], a2[1]), u2 = this._clipFinite(t2, u2))
            for (let n3, e3 = 0, r3 = u2.length, i3 = this._edgecode(u2[r3 - 2], u2[r3 - 1]); e3 < r3; e3 += 2)
              n3 = i3, i3 = this._edgecode(u2[e3], u2[e3 + 1]), n3 && i3 && (e3 = this._edge(t2, n3, i3, u2, e3), r3 = u2.length);
          else
            this.contains(t2, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2) && (u2 = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax]);
          return u2;
        }
        _edge(t2, n2, e2, r2, i2) {
          for (; n2 !== e2; ) {
            let e3, o2;
            switch (n2) {
              case 5:
                n2 = 4;
                continue;
              case 4:
                n2 = 6, e3 = this.xmax, o2 = this.ymin;
                break;
              case 6:
                n2 = 2;
                continue;
              case 2:
                n2 = 10, e3 = this.xmax, o2 = this.ymax;
                break;
              case 10:
                n2 = 8;
                continue;
              case 8:
                n2 = 9, e3 = this.xmin, o2 = this.ymax;
                break;
              case 9:
                n2 = 1;
                continue;
              case 1:
                n2 = 5, e3 = this.xmin, o2 = this.ymin;
            }
            r2[i2] === e3 && r2[i2 + 1] === o2 || !this.contains(t2, e3, o2) || (r2.splice(i2, 0, e3, o2), i2 += 2);
          }
          if (r2.length > 4)
            for (let t3 = 0; t3 < r2.length; t3 += 2) {
              const n3 = (t3 + 2) % r2.length, e3 = (t3 + 4) % r2.length;
              (r2[t3] === r2[n3] && r2[n3] === r2[e3] || r2[t3 + 1] === r2[n3 + 1] && r2[n3 + 1] === r2[e3 + 1]) && (r2.splice(n3, 2), t3 -= 2);
            }
          return i2;
        }
        _project(t2, n2, e2, r2) {
          let i2, o2, a2, u2 = 1 / 0;
          if (r2 < 0) {
            if (n2 <= this.ymin)
              return null;
            (i2 = (this.ymin - n2) / r2) < u2 && (a2 = this.ymin, o2 = t2 + (u2 = i2) * e2);
          } else if (r2 > 0) {
            if (n2 >= this.ymax)
              return null;
            (i2 = (this.ymax - n2) / r2) < u2 && (a2 = this.ymax, o2 = t2 + (u2 = i2) * e2);
          }
          if (e2 > 0) {
            if (t2 >= this.xmax)
              return null;
            (i2 = (this.xmax - t2) / e2) < u2 && (o2 = this.xmax, a2 = n2 + (u2 = i2) * r2);
          } else if (e2 < 0) {
            if (t2 <= this.xmin)
              return null;
            (i2 = (this.xmin - t2) / e2) < u2 && (o2 = this.xmin, a2 = n2 + (u2 = i2) * r2);
          }
          return [o2, a2];
        }
        _edgecode(t2, n2) {
          return (t2 === this.xmin ? 1 : t2 === this.xmax ? 2 : 0) | (n2 === this.ymin ? 4 : n2 === this.ymax ? 8 : 0);
        }
        _regioncode(t2, n2) {
          return (t2 < this.xmin ? 1 : t2 > this.xmax ? 2 : 0) | (n2 < this.ymin ? 4 : n2 > this.ymax ? 8 : 0);
        }
      }
      const Za = 2 * Math.PI, Ka = Math.pow;
      function Qa(t2) {
        return t2[0];
      }
      function Ja(t2) {
        return t2[1];
      }
      function tu(t2, n2, e2) {
        return [t2 + Math.sin(t2 + n2) * e2, n2 + Math.cos(t2 - n2) * e2];
      }
      class nu {
        static from(t2, n2 = Qa, e2 = Ja, r2) {
          return new nu("length" in t2 ? function(t3, n3, e3, r3) {
            const i2 = t3.length, o2 = new Float64Array(2 * i2);
            for (let a2 = 0; a2 < i2; ++a2) {
              const i3 = t3[a2];
              o2[2 * a2] = n3.call(r3, i3, a2, t3), o2[2 * a2 + 1] = e3.call(r3, i3, a2, t3);
            }
            return o2;
          }(t2, n2, e2, r2) : Float64Array.from(function* (t3, n3, e3, r3) {
            let i2 = 0;
            for (const o2 of t3)
              yield n3.call(r3, o2, i2, t3), yield e3.call(r3, o2, i2, t3), ++i2;
          }(t2, n2, e2, r2)));
        }
        constructor(t2) {
          this._delaunator = new Fa(t2), this.inedges = new Int32Array(t2.length / 2), this._hullIndex = new Int32Array(t2.length / 2), this.points = this._delaunator.coords, this._init();
        }
        update() {
          return this._delaunator.update(), this._init(), this;
        }
        _init() {
          const t2 = this._delaunator, n2 = this.points;
          if (t2.hull && t2.hull.length > 2 && function(t3) {
            const {triangles: n3, coords: e3} = t3;
            for (let t4 = 0; t4 < n3.length; t4 += 3) {
              const r3 = 2 * n3[t4], i3 = 2 * n3[t4 + 1], o3 = 2 * n3[t4 + 2];
              if ((e3[o3] - e3[r3]) * (e3[i3 + 1] - e3[r3 + 1]) - (e3[i3] - e3[r3]) * (e3[o3 + 1] - e3[r3 + 1]) > 1e-10)
                return false;
            }
            return true;
          }(t2)) {
            this.collinear = Int32Array.from({length: n2.length / 2}, (t4, n3) => n3).sort((t4, e4) => n2[2 * t4] - n2[2 * e4] || n2[2 * t4 + 1] - n2[2 * e4 + 1]);
            const t3 = this.collinear[0], e3 = this.collinear[this.collinear.length - 1], r3 = [n2[2 * t3], n2[2 * t3 + 1], n2[2 * e3], n2[2 * e3 + 1]], i3 = 1e-8 * Math.hypot(r3[3] - r3[1], r3[2] - r3[0]);
            for (let t4 = 0, e4 = n2.length / 2; t4 < e4; ++t4) {
              const e5 = tu(n2[2 * t4], n2[2 * t4 + 1], i3);
              n2[2 * t4] = e5[0], n2[2 * t4 + 1] = e5[1];
            }
            this._delaunator = new Fa(n2);
          } else
            delete this.collinear;
          const e2 = this.halfedges = this._delaunator.halfedges, r2 = this.hull = this._delaunator.hull, i2 = this.triangles = this._delaunator.triangles, o2 = this.inedges.fill(-1), a2 = this._hullIndex.fill(-1);
          for (let t3 = 0, n3 = e2.length; t3 < n3; ++t3) {
            const n4 = i2[t3 % 3 == 2 ? t3 - 2 : t3 + 1];
            e2[t3] !== -1 && o2[n4] !== -1 || (o2[n4] = t3);
          }
          for (let t3 = 0, n3 = r2.length; t3 < n3; ++t3)
            a2[r2[t3]] = t3;
          r2.length <= 2 && r2.length > 0 && (this.triangles = new Int32Array(3).fill(-1), this.halfedges = new Int32Array(3).fill(-1), this.triangles[0] = r2[0], this.triangles[1] = r2[1], this.triangles[2] = r2[1], o2[r2[0]] = 1, r2.length === 2 && (o2[r2[1]] = 0));
        }
        voronoi(t2) {
          return new Wa(this, t2);
        }
        *neighbors(t2) {
          const {inedges: n2, hull: e2, _hullIndex: r2, halfedges: i2, triangles: o2, collinear: a2} = this;
          if (a2) {
            const n3 = a2.indexOf(t2);
            return n3 > 0 && (yield a2[n3 - 1]), void (n3 < a2.length - 1 && (yield a2[n3 + 1]));
          }
          const u2 = n2[t2];
          if (u2 === -1)
            return;
          let c2 = u2, f2 = -1;
          do {
            if (yield f2 = o2[c2], c2 = c2 % 3 == 2 ? c2 - 2 : c2 + 1, o2[c2] !== t2)
              return;
            if (c2 = i2[c2], c2 === -1) {
              const n3 = e2[(r2[t2] + 1) % e2.length];
              return void (n3 !== f2 && (yield n3));
            }
          } while (c2 !== u2);
        }
        find(t2, n2, e2 = 0) {
          if ((t2 = +t2) != t2 || (n2 = +n2) != n2)
            return -1;
          const r2 = e2;
          let i2;
          for (; (i2 = this._step(e2, t2, n2)) >= 0 && i2 !== e2 && i2 !== r2; )
            e2 = i2;
          return i2;
        }
        _step(t2, n2, e2) {
          const {inedges: r2, hull: i2, _hullIndex: o2, halfedges: a2, triangles: u2, points: c2} = this;
          if (r2[t2] === -1 || !c2.length)
            return (t2 + 1) % (c2.length >> 1);
          let f2 = t2, s2 = Ka(n2 - c2[2 * t2], 2) + Ka(e2 - c2[2 * t2 + 1], 2);
          const l2 = r2[t2];
          let h2 = l2;
          do {
            let r3 = u2[h2];
            const l3 = Ka(n2 - c2[2 * r3], 2) + Ka(e2 - c2[2 * r3 + 1], 2);
            if (l3 < s2 && (s2 = l3, f2 = r3), h2 = h2 % 3 == 2 ? h2 - 2 : h2 + 1, u2[h2] !== t2)
              break;
            if (h2 = a2[h2], h2 === -1) {
              if (h2 = i2[(o2[t2] + 1) % i2.length], h2 !== r3 && Ka(n2 - c2[2 * h2], 2) + Ka(e2 - c2[2 * h2 + 1], 2) < s2)
                return h2;
              break;
            }
          } while (h2 !== l2);
          return f2;
        }
        render(t2) {
          const n2 = t2 == null ? t2 = new Va() : void 0, {points: e2, halfedges: r2, triangles: i2} = this;
          for (let n3 = 0, o2 = r2.length; n3 < o2; ++n3) {
            const o3 = r2[n3];
            if (o3 < n3)
              continue;
            const a2 = 2 * i2[n3], u2 = 2 * i2[o3];
            t2.moveTo(e2[a2], e2[a2 + 1]), t2.lineTo(e2[u2], e2[u2 + 1]);
          }
          return this.renderHull(t2), n2 && n2.value();
        }
        renderPoints(t2, n2 = 2) {
          const e2 = t2 == null ? t2 = new Va() : void 0, {points: r2} = this;
          for (let e3 = 0, i2 = r2.length; e3 < i2; e3 += 2) {
            const i3 = r2[e3], o2 = r2[e3 + 1];
            t2.moveTo(i3 + n2, o2), t2.arc(i3, o2, n2, 0, Za);
          }
          return e2 && e2.value();
        }
        renderHull(t2) {
          const n2 = t2 == null ? t2 = new Va() : void 0, {hull: e2, points: r2} = this, i2 = 2 * e2[0], o2 = e2.length;
          t2.moveTo(r2[i2], r2[i2 + 1]);
          for (let n3 = 1; n3 < o2; ++n3) {
            const i3 = 2 * e2[n3];
            t2.lineTo(r2[i3], r2[i3 + 1]);
          }
          return t2.closePath(), n2 && n2.value();
        }
        hullPolygon() {
          const t2 = new $a();
          return this.renderHull(t2), t2.value();
        }
        renderTriangle(t2, n2) {
          const e2 = n2 == null ? n2 = new Va() : void 0, {points: r2, triangles: i2} = this, o2 = 2 * i2[t2 *= 3], a2 = 2 * i2[t2 + 1], u2 = 2 * i2[t2 + 2];
          return n2.moveTo(r2[o2], r2[o2 + 1]), n2.lineTo(r2[a2], r2[a2 + 1]), n2.lineTo(r2[u2], r2[u2 + 1]), n2.closePath(), e2 && e2.value();
        }
        *trianglePolygons() {
          const {triangles: t2} = this;
          for (let n2 = 0, e2 = t2.length / 3; n2 < e2; ++n2)
            yield this.trianglePolygon(n2);
        }
        trianglePolygon(t2) {
          const n2 = new $a();
          return this.renderTriangle(t2, n2), n2.value();
        }
      }
      var eu = {}, ru = {};
      function iu(t2) {
        return new Function("d", "return {" + t2.map(function(t3, n2) {
          return JSON.stringify(t3) + ": d[" + n2 + '] || ""';
        }).join(",") + "}");
      }
      function ou(t2) {
        var n2 = Object.create(null), e2 = [];
        return t2.forEach(function(t3) {
          for (var r2 in t3)
            r2 in n2 || e2.push(n2[r2] = r2);
        }), e2;
      }
      function au(t2, n2) {
        var e2 = t2 + "", r2 = e2.length;
        return r2 < n2 ? new Array(n2 - r2 + 1).join(0) + e2 : e2;
      }
      function uu(t2) {
        var n2 = t2.getUTCHours(), e2 = t2.getUTCMinutes(), r2 = t2.getUTCSeconds(), i2 = t2.getUTCMilliseconds();
        return isNaN(t2) ? "Invalid Date" : function(t3) {
          return t3 < 0 ? "-" + au(-t3, 6) : t3 > 9999 ? "+" + au(t3, 6) : au(t3, 4);
        }(t2.getUTCFullYear()) + "-" + au(t2.getUTCMonth() + 1, 2) + "-" + au(t2.getUTCDate(), 2) + (i2 ? "T" + au(n2, 2) + ":" + au(e2, 2) + ":" + au(r2, 2) + "." + au(i2, 3) + "Z" : r2 ? "T" + au(n2, 2) + ":" + au(e2, 2) + ":" + au(r2, 2) + "Z" : e2 || n2 ? "T" + au(n2, 2) + ":" + au(e2, 2) + "Z" : "");
      }
      function cu(t2) {
        var n2 = new RegExp('["' + t2 + "\n\r]"), e2 = t2.charCodeAt(0);
        function r2(t3, n3) {
          var r3, i3 = [], o3 = t3.length, a3 = 0, u2 = 0, c2 = o3 <= 0, f2 = false;
          function s2() {
            if (c2)
              return ru;
            if (f2)
              return f2 = false, eu;
            var n4, r4, i4 = a3;
            if (t3.charCodeAt(i4) === 34) {
              for (; a3++ < o3 && t3.charCodeAt(a3) !== 34 || t3.charCodeAt(++a3) === 34; )
                ;
              return (n4 = a3) >= o3 ? c2 = true : (r4 = t3.charCodeAt(a3++)) === 10 ? f2 = true : r4 === 13 && (f2 = true, t3.charCodeAt(a3) === 10 && ++a3), t3.slice(i4 + 1, n4 - 1).replace(/""/g, '"');
            }
            for (; a3 < o3; ) {
              if ((r4 = t3.charCodeAt(n4 = a3++)) === 10)
                f2 = true;
              else if (r4 === 13)
                f2 = true, t3.charCodeAt(a3) === 10 && ++a3;
              else if (r4 !== e2)
                continue;
              return t3.slice(i4, n4);
            }
            return c2 = true, t3.slice(i4, o3);
          }
          for (t3.charCodeAt(o3 - 1) === 10 && --o3, t3.charCodeAt(o3 - 1) === 13 && --o3; (r3 = s2()) !== ru; ) {
            for (var l2 = []; r3 !== eu && r3 !== ru; )
              l2.push(r3), r3 = s2();
            n3 && (l2 = n3(l2, u2++)) == null || i3.push(l2);
          }
          return i3;
        }
        function i2(n3, e3) {
          return n3.map(function(n4) {
            return e3.map(function(t3) {
              return a2(n4[t3]);
            }).join(t2);
          });
        }
        function o2(n3) {
          return n3.map(a2).join(t2);
        }
        function a2(t3) {
          return t3 == null ? "" : t3 instanceof Date ? uu(t3) : n2.test(t3 += "") ? '"' + t3.replace(/"/g, '""') + '"' : t3;
        }
        return {parse: function(t3, n3) {
          var e3, i3, o3 = r2(t3, function(t4, r3) {
            if (e3)
              return e3(t4, r3 - 1);
            i3 = t4, e3 = n3 ? function(t5, n4) {
              var e4 = iu(t5);
              return function(r4, i4) {
                return n4(e4(r4), i4, t5);
              };
            }(t4, n3) : iu(t4);
          });
          return o3.columns = i3 || [], o3;
        }, parseRows: r2, format: function(n3, e3) {
          return e3 == null && (e3 = ou(n3)), [e3.map(a2).join(t2)].concat(i2(n3, e3)).join("\n");
        }, formatBody: function(t3, n3) {
          return n3 == null && (n3 = ou(t3)), i2(t3, n3).join("\n");
        }, formatRows: function(t3) {
          return t3.map(o2).join("\n");
        }, formatRow: o2, formatValue: a2};
      }
      var fu = cu(","), su = fu.parse, lu = fu.parseRows, hu = fu.format, du = fu.formatBody, pu = fu.formatRows, gu = fu.formatRow, yu = fu.formatValue, vu = cu("	"), _u = vu.parse, bu = vu.parseRows, mu = vu.format, xu = vu.formatBody, wu = vu.formatRows, Mu = vu.formatRow, Au = vu.formatValue;
      const Tu = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();
      function Su(t2) {
        if (!t2.ok)
          throw new Error(t2.status + " " + t2.statusText);
        return t2.blob();
      }
      function Eu(t2) {
        if (!t2.ok)
          throw new Error(t2.status + " " + t2.statusText);
        return t2.arrayBuffer();
      }
      function ku(t2) {
        if (!t2.ok)
          throw new Error(t2.status + " " + t2.statusText);
        return t2.text();
      }
      function Nu(t2, n2) {
        return fetch(t2, n2).then(ku);
      }
      function Cu(t2) {
        return function(n2, e2, r2) {
          return arguments.length === 2 && typeof e2 == "function" && (r2 = e2, e2 = void 0), Nu(n2, e2).then(function(n3) {
            return t2(n3, r2);
          });
        };
      }
      var Pu = Cu(su), zu = Cu(_u);
      function Du(t2) {
        if (!t2.ok)
          throw new Error(t2.status + " " + t2.statusText);
        if (t2.status !== 204 && t2.status !== 205)
          return t2.json();
      }
      function qu(t2) {
        return (n2, e2) => Nu(n2, e2).then((n3) => new DOMParser().parseFromString(n3, t2));
      }
      var Ru = qu("application/xml"), Fu = qu("text/html"), Ou = qu("image/svg+xml");
      function Uu(t2, n2, e2, r2) {
        if (isNaN(n2) || isNaN(e2))
          return t2;
        var i2, o2, a2, u2, c2, f2, s2, l2, h2, d2 = t2._root, p2 = {data: r2}, g2 = t2._x0, y2 = t2._y0, v2 = t2._x1, _2 = t2._y1;
        if (!d2)
          return t2._root = p2, t2;
        for (; d2.length; )
          if ((f2 = n2 >= (o2 = (g2 + v2) / 2)) ? g2 = o2 : v2 = o2, (s2 = e2 >= (a2 = (y2 + _2) / 2)) ? y2 = a2 : _2 = a2, i2 = d2, !(d2 = d2[l2 = s2 << 1 | f2]))
            return i2[l2] = p2, t2;
        if (u2 = +t2._x.call(null, d2.data), c2 = +t2._y.call(null, d2.data), n2 === u2 && e2 === c2)
          return p2.next = d2, i2 ? i2[l2] = p2 : t2._root = p2, t2;
        do {
          i2 = i2 ? i2[l2] = new Array(4) : t2._root = new Array(4), (f2 = n2 >= (o2 = (g2 + v2) / 2)) ? g2 = o2 : v2 = o2, (s2 = e2 >= (a2 = (y2 + _2) / 2)) ? y2 = a2 : _2 = a2;
        } while ((l2 = s2 << 1 | f2) == (h2 = (c2 >= a2) << 1 | u2 >= o2));
        return i2[h2] = d2, i2[l2] = p2, t2;
      }
      function Iu(t2, n2, e2, r2, i2) {
        this.node = t2, this.x0 = n2, this.y0 = e2, this.x1 = r2, this.y1 = i2;
      }
      function Bu(t2) {
        return t2[0];
      }
      function Yu(t2) {
        return t2[1];
      }
      function Lu(t2, n2, e2) {
        var r2 = new ju(n2 == null ? Bu : n2, e2 == null ? Yu : e2, NaN, NaN, NaN, NaN);
        return t2 == null ? r2 : r2.addAll(t2);
      }
      function ju(t2, n2, e2, r2, i2, o2) {
        this._x = t2, this._y = n2, this._x0 = e2, this._y0 = r2, this._x1 = i2, this._y1 = o2, this._root = void 0;
      }
      function Hu(t2) {
        for (var n2 = {data: t2.data}, e2 = n2; t2 = t2.next; )
          e2 = e2.next = {data: t2.data};
        return n2;
      }
      var Xu = Lu.prototype = ju.prototype;
      function Gu(t2) {
        return function() {
          return t2;
        };
      }
      function Vu(t2) {
        return 1e-6 * (t2() - 0.5);
      }
      function $u(t2) {
        return t2.x + t2.vx;
      }
      function Wu(t2) {
        return t2.y + t2.vy;
      }
      function Zu(t2) {
        return t2.index;
      }
      function Ku(t2, n2) {
        var e2 = t2.get(n2);
        if (!e2)
          throw new Error("node not found: " + n2);
        return e2;
      }
      Xu.copy = function() {
        var t2, n2, e2 = new ju(this._x, this._y, this._x0, this._y0, this._x1, this._y1), r2 = this._root;
        if (!r2)
          return e2;
        if (!r2.length)
          return e2._root = Hu(r2), e2;
        for (t2 = [{source: r2, target: e2._root = new Array(4)}]; r2 = t2.pop(); )
          for (var i2 = 0; i2 < 4; ++i2)
            (n2 = r2.source[i2]) && (n2.length ? t2.push({source: n2, target: r2.target[i2] = new Array(4)}) : r2.target[i2] = Hu(n2));
        return e2;
      }, Xu.add = function(t2) {
        const n2 = +this._x.call(null, t2), e2 = +this._y.call(null, t2);
        return Uu(this.cover(n2, e2), n2, e2, t2);
      }, Xu.addAll = function(t2) {
        var n2, e2, r2, i2, o2 = t2.length, a2 = new Array(o2), u2 = new Array(o2), c2 = 1 / 0, f2 = 1 / 0, s2 = -1 / 0, l2 = -1 / 0;
        for (e2 = 0; e2 < o2; ++e2)
          isNaN(r2 = +this._x.call(null, n2 = t2[e2])) || isNaN(i2 = +this._y.call(null, n2)) || (a2[e2] = r2, u2[e2] = i2, r2 < c2 && (c2 = r2), r2 > s2 && (s2 = r2), i2 < f2 && (f2 = i2), i2 > l2 && (l2 = i2));
        if (c2 > s2 || f2 > l2)
          return this;
        for (this.cover(c2, f2).cover(s2, l2), e2 = 0; e2 < o2; ++e2)
          Uu(this, a2[e2], u2[e2], t2[e2]);
        return this;
      }, Xu.cover = function(t2, n2) {
        if (isNaN(t2 = +t2) || isNaN(n2 = +n2))
          return this;
        var e2 = this._x0, r2 = this._y0, i2 = this._x1, o2 = this._y1;
        if (isNaN(e2))
          i2 = (e2 = Math.floor(t2)) + 1, o2 = (r2 = Math.floor(n2)) + 1;
        else {
          for (var a2, u2, c2 = i2 - e2 || 1, f2 = this._root; e2 > t2 || t2 >= i2 || r2 > n2 || n2 >= o2; )
            switch (u2 = (n2 < r2) << 1 | t2 < e2, (a2 = new Array(4))[u2] = f2, f2 = a2, c2 *= 2, u2) {
              case 0:
                i2 = e2 + c2, o2 = r2 + c2;
                break;
              case 1:
                e2 = i2 - c2, o2 = r2 + c2;
                break;
              case 2:
                i2 = e2 + c2, r2 = o2 - c2;
                break;
              case 3:
                e2 = i2 - c2, r2 = o2 - c2;
            }
          this._root && this._root.length && (this._root = f2);
        }
        return this._x0 = e2, this._y0 = r2, this._x1 = i2, this._y1 = o2, this;
      }, Xu.data = function() {
        var t2 = [];
        return this.visit(function(n2) {
          if (!n2.length)
            do {
              t2.push(n2.data);
            } while (n2 = n2.next);
        }), t2;
      }, Xu.extent = function(t2) {
        return arguments.length ? this.cover(+t2[0][0], +t2[0][1]).cover(+t2[1][0], +t2[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
      }, Xu.find = function(t2, n2, e2) {
        var r2, i2, o2, a2, u2, c2, f2, s2 = this._x0, l2 = this._y0, h2 = this._x1, d2 = this._y1, p2 = [], g2 = this._root;
        for (g2 && p2.push(new Iu(g2, s2, l2, h2, d2)), e2 == null ? e2 = 1 / 0 : (s2 = t2 - e2, l2 = n2 - e2, h2 = t2 + e2, d2 = n2 + e2, e2 *= e2); c2 = p2.pop(); )
          if (!(!(g2 = c2.node) || (i2 = c2.x0) > h2 || (o2 = c2.y0) > d2 || (a2 = c2.x1) < s2 || (u2 = c2.y1) < l2))
            if (g2.length) {
              var y2 = (i2 + a2) / 2, v2 = (o2 + u2) / 2;
              p2.push(new Iu(g2[3], y2, v2, a2, u2), new Iu(g2[2], i2, v2, y2, u2), new Iu(g2[1], y2, o2, a2, v2), new Iu(g2[0], i2, o2, y2, v2)), (f2 = (n2 >= v2) << 1 | t2 >= y2) && (c2 = p2[p2.length - 1], p2[p2.length - 1] = p2[p2.length - 1 - f2], p2[p2.length - 1 - f2] = c2);
            } else {
              var _2 = t2 - +this._x.call(null, g2.data), b2 = n2 - +this._y.call(null, g2.data), m2 = _2 * _2 + b2 * b2;
              if (m2 < e2) {
                var x2 = Math.sqrt(e2 = m2);
                s2 = t2 - x2, l2 = n2 - x2, h2 = t2 + x2, d2 = n2 + x2, r2 = g2.data;
              }
            }
        return r2;
      }, Xu.remove = function(t2) {
        if (isNaN(o2 = +this._x.call(null, t2)) || isNaN(a2 = +this._y.call(null, t2)))
          return this;
        var n2, e2, r2, i2, o2, a2, u2, c2, f2, s2, l2, h2, d2 = this._root, p2 = this._x0, g2 = this._y0, y2 = this._x1, v2 = this._y1;
        if (!d2)
          return this;
        if (d2.length)
          for (; ; ) {
            if ((f2 = o2 >= (u2 = (p2 + y2) / 2)) ? p2 = u2 : y2 = u2, (s2 = a2 >= (c2 = (g2 + v2) / 2)) ? g2 = c2 : v2 = c2, n2 = d2, !(d2 = d2[l2 = s2 << 1 | f2]))
              return this;
            if (!d2.length)
              break;
            (n2[l2 + 1 & 3] || n2[l2 + 2 & 3] || n2[l2 + 3 & 3]) && (e2 = n2, h2 = l2);
          }
        for (; d2.data !== t2; )
          if (r2 = d2, !(d2 = d2.next))
            return this;
        return (i2 = d2.next) && delete d2.next, r2 ? (i2 ? r2.next = i2 : delete r2.next, this) : n2 ? (i2 ? n2[l2] = i2 : delete n2[l2], (d2 = n2[0] || n2[1] || n2[2] || n2[3]) && d2 === (n2[3] || n2[2] || n2[1] || n2[0]) && !d2.length && (e2 ? e2[h2] = d2 : this._root = d2), this) : (this._root = i2, this);
      }, Xu.removeAll = function(t2) {
        for (var n2 = 0, e2 = t2.length; n2 < e2; ++n2)
          this.remove(t2[n2]);
        return this;
      }, Xu.root = function() {
        return this._root;
      }, Xu.size = function() {
        var t2 = 0;
        return this.visit(function(n2) {
          if (!n2.length)
            do {
              ++t2;
            } while (n2 = n2.next);
        }), t2;
      }, Xu.visit = function(t2) {
        var n2, e2, r2, i2, o2, a2, u2 = [], c2 = this._root;
        for (c2 && u2.push(new Iu(c2, this._x0, this._y0, this._x1, this._y1)); n2 = u2.pop(); )
          if (!t2(c2 = n2.node, r2 = n2.x0, i2 = n2.y0, o2 = n2.x1, a2 = n2.y1) && c2.length) {
            var f2 = (r2 + o2) / 2, s2 = (i2 + a2) / 2;
            (e2 = c2[3]) && u2.push(new Iu(e2, f2, s2, o2, a2)), (e2 = c2[2]) && u2.push(new Iu(e2, r2, s2, f2, a2)), (e2 = c2[1]) && u2.push(new Iu(e2, f2, i2, o2, s2)), (e2 = c2[0]) && u2.push(new Iu(e2, r2, i2, f2, s2));
          }
        return this;
      }, Xu.visitAfter = function(t2) {
        var n2, e2 = [], r2 = [];
        for (this._root && e2.push(new Iu(this._root, this._x0, this._y0, this._x1, this._y1)); n2 = e2.pop(); ) {
          var i2 = n2.node;
          if (i2.length) {
            var o2, a2 = n2.x0, u2 = n2.y0, c2 = n2.x1, f2 = n2.y1, s2 = (a2 + c2) / 2, l2 = (u2 + f2) / 2;
            (o2 = i2[0]) && e2.push(new Iu(o2, a2, u2, s2, l2)), (o2 = i2[1]) && e2.push(new Iu(o2, s2, u2, c2, l2)), (o2 = i2[2]) && e2.push(new Iu(o2, a2, l2, s2, f2)), (o2 = i2[3]) && e2.push(new Iu(o2, s2, l2, c2, f2));
          }
          r2.push(n2);
        }
        for (; n2 = r2.pop(); )
          t2(n2.node, n2.x0, n2.y0, n2.x1, n2.y1);
        return this;
      }, Xu.x = function(t2) {
        return arguments.length ? (this._x = t2, this) : this._x;
      }, Xu.y = function(t2) {
        return arguments.length ? (this._y = t2, this) : this._y;
      };
      const Qu = 4294967296;
      function Ju(t2) {
        return t2.x;
      }
      function tc(t2) {
        return t2.y;
      }
      var nc = Math.PI * (3 - Math.sqrt(5));
      function ec(t2, n2) {
        if ((e2 = (t2 = n2 ? t2.toExponential(n2 - 1) : t2.toExponential()).indexOf("e")) < 0)
          return null;
        var e2, r2 = t2.slice(0, e2);
        return [r2.length > 1 ? r2[0] + r2.slice(2) : r2, +t2.slice(e2 + 1)];
      }
      function rc(t2) {
        return (t2 = ec(Math.abs(t2))) ? t2[1] : NaN;
      }
      var ic, oc = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function ac(t2) {
        if (!(n2 = oc.exec(t2)))
          throw new Error("invalid format: " + t2);
        var n2;
        return new uc({fill: n2[1], align: n2[2], sign: n2[3], symbol: n2[4], zero: n2[5], width: n2[6], comma: n2[7], precision: n2[8] && n2[8].slice(1), trim: n2[9], type: n2[10]});
      }
      function uc(t2) {
        this.fill = t2.fill === void 0 ? " " : t2.fill + "", this.align = t2.align === void 0 ? ">" : t2.align + "", this.sign = t2.sign === void 0 ? "-" : t2.sign + "", this.symbol = t2.symbol === void 0 ? "" : t2.symbol + "", this.zero = !!t2.zero, this.width = t2.width === void 0 ? void 0 : +t2.width, this.comma = !!t2.comma, this.precision = t2.precision === void 0 ? void 0 : +t2.precision, this.trim = !!t2.trim, this.type = t2.type === void 0 ? "" : t2.type + "";
      }
      function cc(t2, n2) {
        var e2 = ec(t2, n2);
        if (!e2)
          return t2 + "";
        var r2 = e2[0], i2 = e2[1];
        return i2 < 0 ? "0." + new Array(-i2).join("0") + r2 : r2.length > i2 + 1 ? r2.slice(0, i2 + 1) + "." + r2.slice(i2 + 1) : r2 + new Array(i2 - r2.length + 2).join("0");
      }
      ac.prototype = uc.prototype, uc.prototype.toString = function() {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
      };
      var fc = {"%": (t2, n2) => (100 * t2).toFixed(n2), b: (t2) => Math.round(t2).toString(2), c: (t2) => t2 + "", d: function(t2) {
        return Math.abs(t2 = Math.round(t2)) >= 1e21 ? t2.toLocaleString("en").replace(/,/g, "") : t2.toString(10);
      }, e: (t2, n2) => t2.toExponential(n2), f: (t2, n2) => t2.toFixed(n2), g: (t2, n2) => t2.toPrecision(n2), o: (t2) => Math.round(t2).toString(8), p: (t2, n2) => cc(100 * t2, n2), r: cc, s: function(t2, n2) {
        var e2 = ec(t2, n2);
        if (!e2)
          return t2 + "";
        var r2 = e2[0], i2 = e2[1], o2 = i2 - (ic = 3 * Math.max(-8, Math.min(8, Math.floor(i2 / 3)))) + 1, a2 = r2.length;
        return o2 === a2 ? r2 : o2 > a2 ? r2 + new Array(o2 - a2 + 1).join("0") : o2 > 0 ? r2.slice(0, o2) + "." + r2.slice(o2) : "0." + new Array(1 - o2).join("0") + ec(t2, Math.max(0, n2 + o2 - 1))[0];
      }, X: (t2) => Math.round(t2).toString(16).toUpperCase(), x: (t2) => Math.round(t2).toString(16)};
      function sc(t2) {
        return t2;
      }
      var lc, hc = Array.prototype.map, dc = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
      function pc(t2) {
        var n2, e2, r2 = t2.grouping === void 0 || t2.thousands === void 0 ? sc : (n2 = hc.call(t2.grouping, Number), e2 = t2.thousands + "", function(t3, r3) {
          for (var i3 = t3.length, o3 = [], a3 = 0, u3 = n2[0], c3 = 0; i3 > 0 && u3 > 0 && (c3 + u3 + 1 > r3 && (u3 = Math.max(1, r3 - c3)), o3.push(t3.substring(i3 -= u3, i3 + u3)), !((c3 += u3 + 1) > r3)); )
            u3 = n2[a3 = (a3 + 1) % n2.length];
          return o3.reverse().join(e2);
        }), i2 = t2.currency === void 0 ? "" : t2.currency[0] + "", o2 = t2.currency === void 0 ? "" : t2.currency[1] + "", a2 = t2.decimal === void 0 ? "." : t2.decimal + "", u2 = t2.numerals === void 0 ? sc : function(t3) {
          return function(n3) {
            return n3.replace(/[0-9]/g, function(n4) {
              return t3[+n4];
            });
          };
        }(hc.call(t2.numerals, String)), c2 = t2.percent === void 0 ? "%" : t2.percent + "", f2 = t2.minus === void 0 ? "\u2212" : t2.minus + "", s2 = t2.nan === void 0 ? "NaN" : t2.nan + "";
        function l2(t3) {
          var n3 = (t3 = ac(t3)).fill, e3 = t3.align, l3 = t3.sign, h2 = t3.symbol, d2 = t3.zero, p2 = t3.width, g2 = t3.comma, y2 = t3.precision, v2 = t3.trim, _2 = t3.type;
          _2 === "n" ? (g2 = true, _2 = "g") : fc[_2] || (y2 === void 0 && (y2 = 12), v2 = true, _2 = "g"), (d2 || n3 === "0" && e3 === "=") && (d2 = true, n3 = "0", e3 = "=");
          var b2 = h2 === "$" ? i2 : h2 === "#" && /[boxX]/.test(_2) ? "0" + _2.toLowerCase() : "", m2 = h2 === "$" ? o2 : /[%p]/.test(_2) ? c2 : "", x2 = fc[_2], w2 = /[defgprs%]/.test(_2);
          function M2(t4) {
            var i3, o3, c3, h3 = b2, M3 = m2;
            if (_2 === "c")
              M3 = x2(t4) + M3, t4 = "";
            else {
              var A2 = (t4 = +t4) < 0 || 1 / t4 < 0;
              if (t4 = isNaN(t4) ? s2 : x2(Math.abs(t4), y2), v2 && (t4 = function(t5) {
                t:
                  for (var n4, e4 = t5.length, r3 = 1, i4 = -1; r3 < e4; ++r3)
                    switch (t5[r3]) {
                      case ".":
                        i4 = n4 = r3;
                        break;
                      case "0":
                        i4 === 0 && (i4 = r3), n4 = r3;
                        break;
                      default:
                        if (!+t5[r3])
                          break t;
                        i4 > 0 && (i4 = 0);
                    }
                return i4 > 0 ? t5.slice(0, i4) + t5.slice(n4 + 1) : t5;
              }(t4)), A2 && +t4 == 0 && l3 !== "+" && (A2 = false), h3 = (A2 ? l3 === "(" ? l3 : f2 : l3 === "-" || l3 === "(" ? "" : l3) + h3, M3 = (_2 === "s" ? dc[8 + ic / 3] : "") + M3 + (A2 && l3 === "(" ? ")" : ""), w2) {
                for (i3 = -1, o3 = t4.length; ++i3 < o3; )
                  if (48 > (c3 = t4.charCodeAt(i3)) || c3 > 57) {
                    M3 = (c3 === 46 ? a2 + t4.slice(i3 + 1) : t4.slice(i3)) + M3, t4 = t4.slice(0, i3);
                    break;
                  }
              }
            }
            g2 && !d2 && (t4 = r2(t4, 1 / 0));
            var T2 = h3.length + t4.length + M3.length, S2 = T2 < p2 ? new Array(p2 - T2 + 1).join(n3) : "";
            switch (g2 && d2 && (t4 = r2(S2 + t4, S2.length ? p2 - M3.length : 1 / 0), S2 = ""), e3) {
              case "<":
                t4 = h3 + t4 + M3 + S2;
                break;
              case "=":
                t4 = h3 + S2 + t4 + M3;
                break;
              case "^":
                t4 = S2.slice(0, T2 = S2.length >> 1) + h3 + t4 + M3 + S2.slice(T2);
                break;
              default:
                t4 = S2 + h3 + t4 + M3;
            }
            return u2(t4);
          }
          return y2 = y2 === void 0 ? 6 : /[gprs]/.test(_2) ? Math.max(1, Math.min(21, y2)) : Math.max(0, Math.min(20, y2)), M2.toString = function() {
            return t3 + "";
          }, M2;
        }
        return {format: l2, formatPrefix: function(t3, n3) {
          var e3 = l2(((t3 = ac(t3)).type = "f", t3)), r3 = 3 * Math.max(-8, Math.min(8, Math.floor(rc(n3) / 3))), i3 = Math.pow(10, -r3), o3 = dc[8 + r3 / 3];
          return function(t4) {
            return e3(i3 * t4) + o3;
          };
        }};
      }
      function gc(n2) {
        return lc = pc(n2), t.format = lc.format, t.formatPrefix = lc.formatPrefix, lc;
      }
      function yc(t2) {
        return Math.max(0, -rc(Math.abs(t2)));
      }
      function vc(t2, n2) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(rc(n2) / 3))) - rc(Math.abs(t2)));
      }
      function _c(t2, n2) {
        return t2 = Math.abs(t2), n2 = Math.abs(n2) - t2, Math.max(0, rc(n2) - rc(t2)) + 1;
      }
      gc({thousands: ",", grouping: [3], currency: ["$", ""]});
      var bc = 1e-6, mc = 1e-12, xc = Math.PI, wc = xc / 2, Mc = xc / 4, Ac = 2 * xc, Tc = 180 / xc, Sc = xc / 180, Ec = Math.abs, kc = Math.atan, Nc = Math.atan2, Cc = Math.cos, Pc = Math.ceil, zc = Math.exp, Dc = Math.hypot, qc = Math.log, Rc = Math.pow, Fc = Math.sin, Oc = Math.sign || function(t2) {
        return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
      }, Uc = Math.sqrt, Ic = Math.tan;
      function Bc(t2) {
        return t2 > 1 ? 0 : t2 < -1 ? xc : Math.acos(t2);
      }
      function Yc(t2) {
        return t2 > 1 ? wc : t2 < -1 ? -wc : Math.asin(t2);
      }
      function Lc(t2) {
        return (t2 = Fc(t2 / 2)) * t2;
      }
      function jc() {
      }
      function Hc(t2, n2) {
        t2 && Gc.hasOwnProperty(t2.type) && Gc[t2.type](t2, n2);
      }
      var Xc = {Feature: function(t2, n2) {
        Hc(t2.geometry, n2);
      }, FeatureCollection: function(t2, n2) {
        for (var e2 = t2.features, r2 = -1, i2 = e2.length; ++r2 < i2; )
          Hc(e2[r2].geometry, n2);
      }}, Gc = {Sphere: function(t2, n2) {
        n2.sphere();
      }, Point: function(t2, n2) {
        t2 = t2.coordinates, n2.point(t2[0], t2[1], t2[2]);
      }, MultiPoint: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          t2 = e2[r2], n2.point(t2[0], t2[1], t2[2]);
      }, LineString: function(t2, n2) {
        Vc(t2.coordinates, n2, 0);
      }, MultiLineString: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          Vc(e2[r2], n2, 0);
      }, Polygon: function(t2, n2) {
        $c(t2.coordinates, n2);
      }, MultiPolygon: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          $c(e2[r2], n2);
      }, GeometryCollection: function(t2, n2) {
        for (var e2 = t2.geometries, r2 = -1, i2 = e2.length; ++r2 < i2; )
          Hc(e2[r2], n2);
      }};
      function Vc(t2, n2, e2) {
        var r2, i2 = -1, o2 = t2.length - e2;
        for (n2.lineStart(); ++i2 < o2; )
          r2 = t2[i2], n2.point(r2[0], r2[1], r2[2]);
        n2.lineEnd();
      }
      function $c(t2, n2) {
        var e2 = -1, r2 = t2.length;
        for (n2.polygonStart(); ++e2 < r2; )
          Vc(t2[e2], n2, 1);
        n2.polygonEnd();
      }
      function Wc(t2, n2) {
        t2 && Xc.hasOwnProperty(t2.type) ? Xc[t2.type](t2, n2) : Hc(t2, n2);
      }
      var Zc, Kc, Qc, Jc, tf, nf, ef, rf, of, af, uf, cf, ff, sf, lf, hf, df = new g(), pf = new g(), gf = {point: jc, lineStart: jc, lineEnd: jc, polygonStart: function() {
        df = new g(), gf.lineStart = yf, gf.lineEnd = vf;
      }, polygonEnd: function() {
        var t2 = +df;
        pf.add(t2 < 0 ? Ac + t2 : t2), this.lineStart = this.lineEnd = this.point = jc;
      }, sphere: function() {
        pf.add(Ac);
      }};
      function yf() {
        gf.point = _f;
      }
      function vf() {
        bf(Zc, Kc);
      }
      function _f(t2, n2) {
        gf.point = bf, Zc = t2, Kc = n2, Qc = t2 *= Sc, Jc = Cc(n2 = (n2 *= Sc) / 2 + Mc), tf = Fc(n2);
      }
      function bf(t2, n2) {
        var e2 = (t2 *= Sc) - Qc, r2 = e2 >= 0 ? 1 : -1, i2 = r2 * e2, o2 = Cc(n2 = (n2 *= Sc) / 2 + Mc), a2 = Fc(n2), u2 = tf * a2, c2 = Jc * o2 + u2 * Cc(i2), f2 = u2 * r2 * Fc(i2);
        df.add(Nc(f2, c2)), Qc = t2, Jc = o2, tf = a2;
      }
      function mf(t2) {
        return [Nc(t2[1], t2[0]), Yc(t2[2])];
      }
      function xf(t2) {
        var n2 = t2[0], e2 = t2[1], r2 = Cc(e2);
        return [r2 * Cc(n2), r2 * Fc(n2), Fc(e2)];
      }
      function wf(t2, n2) {
        return t2[0] * n2[0] + t2[1] * n2[1] + t2[2] * n2[2];
      }
      function Mf(t2, n2) {
        return [t2[1] * n2[2] - t2[2] * n2[1], t2[2] * n2[0] - t2[0] * n2[2], t2[0] * n2[1] - t2[1] * n2[0]];
      }
      function Af(t2, n2) {
        t2[0] += n2[0], t2[1] += n2[1], t2[2] += n2[2];
      }
      function Tf(t2, n2) {
        return [t2[0] * n2, t2[1] * n2, t2[2] * n2];
      }
      function Sf(t2) {
        var n2 = Uc(t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2]);
        t2[0] /= n2, t2[1] /= n2, t2[2] /= n2;
      }
      var Ef, kf, Nf, Cf, Pf, zf, Df, qf, Rf, Ff, Of, Uf, If, Bf, Yf, Lf, jf = {point: Hf, lineStart: Gf, lineEnd: Vf, polygonStart: function() {
        jf.point = $f, jf.lineStart = Wf, jf.lineEnd = Zf, sf = new g(), gf.polygonStart();
      }, polygonEnd: function() {
        gf.polygonEnd(), jf.point = Hf, jf.lineStart = Gf, jf.lineEnd = Vf, df < 0 ? (nf = -(rf = 180), ef = -(of = 90)) : sf > bc ? of = 90 : sf < -1e-6 && (ef = -90), hf[0] = nf, hf[1] = rf;
      }, sphere: function() {
        nf = -(rf = 180), ef = -(of = 90);
      }};
      function Hf(t2, n2) {
        lf.push(hf = [nf = t2, rf = t2]), n2 < ef && (ef = n2), n2 > of && (of = n2);
      }
      function Xf(t2, n2) {
        var e2 = xf([t2 * Sc, n2 * Sc]);
        if (ff) {
          var r2 = Mf(ff, e2), i2 = Mf([r2[1], -r2[0], 0], r2);
          Sf(i2), i2 = mf(i2);
          var o2, a2 = t2 - af, u2 = a2 > 0 ? 1 : -1, c2 = i2[0] * Tc * u2, f2 = Ec(a2) > 180;
          f2 ^ (u2 * af < c2 && c2 < u2 * t2) ? (o2 = i2[1] * Tc) > of && (of = o2) : f2 ^ (u2 * af < (c2 = (c2 + 360) % 360 - 180) && c2 < u2 * t2) ? (o2 = -i2[1] * Tc) < ef && (ef = o2) : (n2 < ef && (ef = n2), n2 > of && (of = n2)), f2 ? t2 < af ? Kf(nf, t2) > Kf(nf, rf) && (rf = t2) : Kf(t2, rf) > Kf(nf, rf) && (nf = t2) : rf >= nf ? (t2 < nf && (nf = t2), t2 > rf && (rf = t2)) : t2 > af ? Kf(nf, t2) > Kf(nf, rf) && (rf = t2) : Kf(t2, rf) > Kf(nf, rf) && (nf = t2);
        } else
          lf.push(hf = [nf = t2, rf = t2]);
        n2 < ef && (ef = n2), n2 > of && (of = n2), ff = e2, af = t2;
      }
      function Gf() {
        jf.point = Xf;
      }
      function Vf() {
        hf[0] = nf, hf[1] = rf, jf.point = Hf, ff = null;
      }
      function $f(t2, n2) {
        if (ff) {
          var e2 = t2 - af;
          sf.add(Ec(e2) > 180 ? e2 + (e2 > 0 ? 360 : -360) : e2);
        } else
          uf = t2, cf = n2;
        gf.point(t2, n2), Xf(t2, n2);
      }
      function Wf() {
        gf.lineStart();
      }
      function Zf() {
        $f(uf, cf), gf.lineEnd(), Ec(sf) > bc && (nf = -(rf = 180)), hf[0] = nf, hf[1] = rf, ff = null;
      }
      function Kf(t2, n2) {
        return (n2 -= t2) < 0 ? n2 + 360 : n2;
      }
      function Qf(t2, n2) {
        return t2[0] - n2[0];
      }
      function Jf(t2, n2) {
        return t2[0] <= t2[1] ? t2[0] <= n2 && n2 <= t2[1] : n2 < t2[0] || t2[1] < n2;
      }
      var ts = {sphere: jc, point: ns, lineStart: rs, lineEnd: as, polygonStart: function() {
        ts.lineStart = us, ts.lineEnd = cs;
      }, polygonEnd: function() {
        ts.lineStart = rs, ts.lineEnd = as;
      }};
      function ns(t2, n2) {
        t2 *= Sc;
        var e2 = Cc(n2 *= Sc);
        es(e2 * Cc(t2), e2 * Fc(t2), Fc(n2));
      }
      function es(t2, n2, e2) {
        ++Ef, Nf += (t2 - Nf) / Ef, Cf += (n2 - Cf) / Ef, Pf += (e2 - Pf) / Ef;
      }
      function rs() {
        ts.point = is;
      }
      function is(t2, n2) {
        t2 *= Sc;
        var e2 = Cc(n2 *= Sc);
        Bf = e2 * Cc(t2), Yf = e2 * Fc(t2), Lf = Fc(n2), ts.point = os, es(Bf, Yf, Lf);
      }
      function os(t2, n2) {
        t2 *= Sc;
        var e2 = Cc(n2 *= Sc), r2 = e2 * Cc(t2), i2 = e2 * Fc(t2), o2 = Fc(n2), a2 = Nc(Uc((a2 = Yf * o2 - Lf * i2) * a2 + (a2 = Lf * r2 - Bf * o2) * a2 + (a2 = Bf * i2 - Yf * r2) * a2), Bf * r2 + Yf * i2 + Lf * o2);
        kf += a2, zf += a2 * (Bf + (Bf = r2)), Df += a2 * (Yf + (Yf = i2)), qf += a2 * (Lf + (Lf = o2)), es(Bf, Yf, Lf);
      }
      function as() {
        ts.point = ns;
      }
      function us() {
        ts.point = fs;
      }
      function cs() {
        ss(Uf, If), ts.point = ns;
      }
      function fs(t2, n2) {
        Uf = t2, If = n2, t2 *= Sc, n2 *= Sc, ts.point = ss;
        var e2 = Cc(n2);
        Bf = e2 * Cc(t2), Yf = e2 * Fc(t2), Lf = Fc(n2), es(Bf, Yf, Lf);
      }
      function ss(t2, n2) {
        t2 *= Sc;
        var e2 = Cc(n2 *= Sc), r2 = e2 * Cc(t2), i2 = e2 * Fc(t2), o2 = Fc(n2), a2 = Yf * o2 - Lf * i2, u2 = Lf * r2 - Bf * o2, c2 = Bf * i2 - Yf * r2, f2 = Dc(a2, u2, c2), s2 = Yc(f2), l2 = f2 && -s2 / f2;
        Rf.add(l2 * a2), Ff.add(l2 * u2), Of.add(l2 * c2), kf += s2, zf += s2 * (Bf + (Bf = r2)), Df += s2 * (Yf + (Yf = i2)), qf += s2 * (Lf + (Lf = o2)), es(Bf, Yf, Lf);
      }
      function ls(t2) {
        return function() {
          return t2;
        };
      }
      function hs(t2, n2) {
        function e2(e3, r2) {
          return e3 = t2(e3, r2), n2(e3[0], e3[1]);
        }
        return t2.invert && n2.invert && (e2.invert = function(e3, r2) {
          return (e3 = n2.invert(e3, r2)) && t2.invert(e3[0], e3[1]);
        }), e2;
      }
      function ds(t2, n2) {
        return [Ec(t2) > xc ? t2 + Math.round(-t2 / Ac) * Ac : t2, n2];
      }
      function ps(t2, n2, e2) {
        return (t2 %= Ac) ? n2 || e2 ? hs(ys(t2), vs(n2, e2)) : ys(t2) : n2 || e2 ? vs(n2, e2) : ds;
      }
      function gs(t2) {
        return function(n2, e2) {
          return [(n2 += t2) > xc ? n2 - Ac : n2 < -xc ? n2 + Ac : n2, e2];
        };
      }
      function ys(t2) {
        var n2 = gs(t2);
        return n2.invert = gs(-t2), n2;
      }
      function vs(t2, n2) {
        var e2 = Cc(t2), r2 = Fc(t2), i2 = Cc(n2), o2 = Fc(n2);
        function a2(t3, n3) {
          var a3 = Cc(n3), u2 = Cc(t3) * a3, c2 = Fc(t3) * a3, f2 = Fc(n3), s2 = f2 * e2 + u2 * r2;
          return [Nc(c2 * i2 - s2 * o2, u2 * e2 - f2 * r2), Yc(s2 * i2 + c2 * o2)];
        }
        return a2.invert = function(t3, n3) {
          var a3 = Cc(n3), u2 = Cc(t3) * a3, c2 = Fc(t3) * a3, f2 = Fc(n3), s2 = f2 * i2 - c2 * o2;
          return [Nc(c2 * i2 + f2 * o2, u2 * e2 + s2 * r2), Yc(s2 * e2 - u2 * r2)];
        }, a2;
      }
      function _s(t2) {
        function n2(n3) {
          return (n3 = t2(n3[0] * Sc, n3[1] * Sc))[0] *= Tc, n3[1] *= Tc, n3;
        }
        return t2 = ps(t2[0] * Sc, t2[1] * Sc, t2.length > 2 ? t2[2] * Sc : 0), n2.invert = function(n3) {
          return (n3 = t2.invert(n3[0] * Sc, n3[1] * Sc))[0] *= Tc, n3[1] *= Tc, n3;
        }, n2;
      }
      function bs(t2, n2, e2, r2, i2, o2) {
        if (e2) {
          var a2 = Cc(n2), u2 = Fc(n2), c2 = r2 * e2;
          i2 == null ? (i2 = n2 + r2 * Ac, o2 = n2 - c2 / 2) : (i2 = ms(a2, i2), o2 = ms(a2, o2), (r2 > 0 ? i2 < o2 : i2 > o2) && (i2 += r2 * Ac));
          for (var f2, s2 = i2; r2 > 0 ? s2 > o2 : s2 < o2; s2 -= c2)
            f2 = mf([a2, -u2 * Cc(s2), -u2 * Fc(s2)]), t2.point(f2[0], f2[1]);
        }
      }
      function ms(t2, n2) {
        (n2 = xf(n2))[0] -= t2, Sf(n2);
        var e2 = Bc(-n2[1]);
        return ((-n2[2] < 0 ? -e2 : e2) + Ac - bc) % Ac;
      }
      function xs() {
        var t2, n2 = [];
        return {point: function(n3, e2, r2) {
          t2.push([n3, e2, r2]);
        }, lineStart: function() {
          n2.push(t2 = []);
        }, lineEnd: jc, rejoin: function() {
          n2.length > 1 && n2.push(n2.pop().concat(n2.shift()));
        }, result: function() {
          var e2 = n2;
          return n2 = [], t2 = null, e2;
        }};
      }
      function ws(t2, n2) {
        return Ec(t2[0] - n2[0]) < bc && Ec(t2[1] - n2[1]) < bc;
      }
      function Ms(t2, n2, e2, r2) {
        this.x = t2, this.z = n2, this.o = e2, this.e = r2, this.v = false, this.n = this.p = null;
      }
      function As(t2, n2, e2, r2, i2) {
        var o2, a2, u2 = [], c2 = [];
        if (t2.forEach(function(t3) {
          if (!((n3 = t3.length - 1) <= 0)) {
            var n3, e3, r3 = t3[0], a3 = t3[n3];
            if (ws(r3, a3)) {
              if (!r3[2] && !a3[2]) {
                for (i2.lineStart(), o2 = 0; o2 < n3; ++o2)
                  i2.point((r3 = t3[o2])[0], r3[1]);
                return void i2.lineEnd();
              }
              a3[0] += 2e-6;
            }
            u2.push(e3 = new Ms(r3, t3, null, true)), c2.push(e3.o = new Ms(r3, null, e3, false)), u2.push(e3 = new Ms(a3, t3, null, false)), c2.push(e3.o = new Ms(a3, null, e3, true));
          }
        }), u2.length) {
          for (c2.sort(n2), Ts(u2), Ts(c2), o2 = 0, a2 = c2.length; o2 < a2; ++o2)
            c2[o2].e = e2 = !e2;
          for (var f2, s2, l2 = u2[0]; ; ) {
            for (var h2 = l2, d2 = true; h2.v; )
              if ((h2 = h2.n) === l2)
                return;
            f2 = h2.z, i2.lineStart();
            do {
              if (h2.v = h2.o.v = true, h2.e) {
                if (d2)
                  for (o2 = 0, a2 = f2.length; o2 < a2; ++o2)
                    i2.point((s2 = f2[o2])[0], s2[1]);
                else
                  r2(h2.x, h2.n.x, 1, i2);
                h2 = h2.n;
              } else {
                if (d2)
                  for (f2 = h2.p.z, o2 = f2.length - 1; o2 >= 0; --o2)
                    i2.point((s2 = f2[o2])[0], s2[1]);
                else
                  r2(h2.x, h2.p.x, -1, i2);
                h2 = h2.p;
              }
              f2 = (h2 = h2.o).z, d2 = !d2;
            } while (!h2.v);
            i2.lineEnd();
          }
        }
      }
      function Ts(t2) {
        if (n2 = t2.length) {
          for (var n2, e2, r2 = 0, i2 = t2[0]; ++r2 < n2; )
            i2.n = e2 = t2[r2], e2.p = i2, i2 = e2;
          i2.n = e2 = t2[0], e2.p = i2;
        }
      }
      function Ss(t2) {
        return Ec(t2[0]) <= xc ? t2[0] : Oc(t2[0]) * ((Ec(t2[0]) + xc) % Ac - xc);
      }
      function Es(t2, n2) {
        var e2 = Ss(n2), r2 = n2[1], i2 = Fc(r2), o2 = [Fc(e2), -Cc(e2), 0], a2 = 0, u2 = 0, c2 = new g();
        i2 === 1 ? r2 = wc + bc : i2 === -1 && (r2 = -wc - bc);
        for (var f2 = 0, s2 = t2.length; f2 < s2; ++f2)
          if (h2 = (l2 = t2[f2]).length)
            for (var l2, h2, d2 = l2[h2 - 1], p2 = Ss(d2), y2 = d2[1] / 2 + Mc, v2 = Fc(y2), _2 = Cc(y2), b2 = 0; b2 < h2; ++b2, p2 = x2, v2 = M2, _2 = A2, d2 = m2) {
              var m2 = l2[b2], x2 = Ss(m2), w2 = m2[1] / 2 + Mc, M2 = Fc(w2), A2 = Cc(w2), T2 = x2 - p2, S2 = T2 >= 0 ? 1 : -1, E2 = S2 * T2, k2 = E2 > xc, N2 = v2 * M2;
              if (c2.add(Nc(N2 * S2 * Fc(E2), _2 * A2 + N2 * Cc(E2))), a2 += k2 ? T2 + S2 * Ac : T2, k2 ^ p2 >= e2 ^ x2 >= e2) {
                var C2 = Mf(xf(d2), xf(m2));
                Sf(C2);
                var P2 = Mf(o2, C2);
                Sf(P2);
                var z2 = (k2 ^ T2 >= 0 ? -1 : 1) * Yc(P2[2]);
                (r2 > z2 || r2 === z2 && (C2[0] || C2[1])) && (u2 += k2 ^ T2 >= 0 ? 1 : -1);
              }
            }
        return (a2 < -1e-6 || a2 < bc && c2 < -1e-12) ^ 1 & u2;
      }
      function ks(t2, n2, e2, r2) {
        return function(i2) {
          var o2, a2, u2, c2 = n2(i2), f2 = xs(), s2 = n2(f2), l2 = false, h2 = {point: d2, lineStart: g2, lineEnd: y2, polygonStart: function() {
            h2.point = v2, h2.lineStart = _2, h2.lineEnd = b2, a2 = [], o2 = [];
          }, polygonEnd: function() {
            h2.point = d2, h2.lineStart = g2, h2.lineEnd = y2, a2 = V(a2);
            var t3 = Es(o2, r2);
            a2.length ? (l2 || (i2.polygonStart(), l2 = true), As(a2, Cs, t3, e2, i2)) : t3 && (l2 || (i2.polygonStart(), l2 = true), i2.lineStart(), e2(null, null, 1, i2), i2.lineEnd()), l2 && (i2.polygonEnd(), l2 = false), a2 = o2 = null;
          }, sphere: function() {
            i2.polygonStart(), i2.lineStart(), e2(null, null, 1, i2), i2.lineEnd(), i2.polygonEnd();
          }};
          function d2(n3, e3) {
            t2(n3, e3) && i2.point(n3, e3);
          }
          function p2(t3, n3) {
            c2.point(t3, n3);
          }
          function g2() {
            h2.point = p2, c2.lineStart();
          }
          function y2() {
            h2.point = d2, c2.lineEnd();
          }
          function v2(t3, n3) {
            u2.push([t3, n3]), s2.point(t3, n3);
          }
          function _2() {
            s2.lineStart(), u2 = [];
          }
          function b2() {
            v2(u2[0][0], u2[0][1]), s2.lineEnd();
            var t3, n3, e3, r3, c3 = s2.clean(), h3 = f2.result(), d4 = h3.length;
            if (u2.pop(), o2.push(u2), u2 = null, d4)
              if (1 & c3) {
                if ((n3 = (e3 = h3[0]).length - 1) > 0) {
                  for (l2 || (i2.polygonStart(), l2 = true), i2.lineStart(), t3 = 0; t3 < n3; ++t3)
                    i2.point((r3 = e3[t3])[0], r3[1]);
                  i2.lineEnd();
                }
              } else
                d4 > 1 && 2 & c3 && h3.push(h3.pop().concat(h3.shift())), a2.push(h3.filter(Ns));
          }
          return h2;
        };
      }
      function Ns(t2) {
        return t2.length > 1;
      }
      function Cs(t2, n2) {
        return ((t2 = t2.x)[0] < 0 ? t2[1] - wc - bc : wc - t2[1]) - ((n2 = n2.x)[0] < 0 ? n2[1] - wc - bc : wc - n2[1]);
      }
      ds.invert = ds;
      var Ps = ks(function() {
        return true;
      }, function(t2) {
        var n2, e2 = NaN, r2 = NaN, i2 = NaN;
        return {lineStart: function() {
          t2.lineStart(), n2 = 1;
        }, point: function(o2, a2) {
          var u2 = o2 > 0 ? xc : -xc, c2 = Ec(o2 - e2);
          Ec(c2 - xc) < bc ? (t2.point(e2, r2 = (r2 + a2) / 2 > 0 ? wc : -wc), t2.point(i2, r2), t2.lineEnd(), t2.lineStart(), t2.point(u2, r2), t2.point(o2, r2), n2 = 0) : i2 !== u2 && c2 >= xc && (Ec(e2 - i2) < bc && (e2 -= i2 * bc), Ec(o2 - u2) < bc && (o2 -= u2 * bc), r2 = function(t3, n3, e3, r3) {
            var i3, o3, a3 = Fc(t3 - e3);
            return Ec(a3) > bc ? kc((Fc(n3) * (o3 = Cc(r3)) * Fc(e3) - Fc(r3) * (i3 = Cc(n3)) * Fc(t3)) / (i3 * o3 * a3)) : (n3 + r3) / 2;
          }(e2, r2, o2, a2), t2.point(i2, r2), t2.lineEnd(), t2.lineStart(), t2.point(u2, r2), n2 = 0), t2.point(e2 = o2, r2 = a2), i2 = u2;
        }, lineEnd: function() {
          t2.lineEnd(), e2 = r2 = NaN;
        }, clean: function() {
          return 2 - n2;
        }};
      }, function(t2, n2, e2, r2) {
        var i2;
        if (t2 == null)
          i2 = e2 * wc, r2.point(-xc, i2), r2.point(0, i2), r2.point(xc, i2), r2.point(xc, 0), r2.point(xc, -i2), r2.point(0, -i2), r2.point(-xc, -i2), r2.point(-xc, 0), r2.point(-xc, i2);
        else if (Ec(t2[0] - n2[0]) > bc) {
          var o2 = t2[0] < n2[0] ? xc : -xc;
          i2 = e2 * o2 / 2, r2.point(-o2, i2), r2.point(0, i2), r2.point(o2, i2);
        } else
          r2.point(n2[0], n2[1]);
      }, [-xc, -wc]);
      function zs(t2) {
        var n2 = Cc(t2), e2 = 6 * Sc, r2 = n2 > 0, i2 = Ec(n2) > bc;
        function o2(t3, e3) {
          return Cc(t3) * Cc(e3) > n2;
        }
        function a2(t3, e3, r3) {
          var i3 = [1, 0, 0], o3 = Mf(xf(t3), xf(e3)), a3 = wf(o3, o3), u3 = o3[0], c2 = a3 - u3 * u3;
          if (!c2)
            return !r3 && t3;
          var f2 = n2 * a3 / c2, s2 = -n2 * u3 / c2, l2 = Mf(i3, o3), h2 = Tf(i3, f2);
          Af(h2, Tf(o3, s2));
          var d2 = l2, p2 = wf(h2, d2), g2 = wf(d2, d2), y2 = p2 * p2 - g2 * (wf(h2, h2) - 1);
          if (!(y2 < 0)) {
            var v2 = Uc(y2), _2 = Tf(d2, (-p2 - v2) / g2);
            if (Af(_2, h2), _2 = mf(_2), !r3)
              return _2;
            var b2, m2 = t3[0], x2 = e3[0], w2 = t3[1], M2 = e3[1];
            x2 < m2 && (b2 = m2, m2 = x2, x2 = b2);
            var A2 = x2 - m2, T2 = Ec(A2 - xc) < bc;
            if (!T2 && M2 < w2 && (b2 = w2, w2 = M2, M2 = b2), T2 || A2 < bc ? T2 ? w2 + M2 > 0 ^ _2[1] < (Ec(_2[0] - m2) < bc ? w2 : M2) : w2 <= _2[1] && _2[1] <= M2 : A2 > xc ^ (m2 <= _2[0] && _2[0] <= x2)) {
              var S2 = Tf(d2, (-p2 + v2) / g2);
              return Af(S2, h2), [_2, mf(S2)];
            }
          }
        }
        function u2(n3, e3) {
          var i3 = r2 ? t2 : xc - t2, o3 = 0;
          return n3 < -i3 ? o3 |= 1 : n3 > i3 && (o3 |= 2), e3 < -i3 ? o3 |= 4 : e3 > i3 && (o3 |= 8), o3;
        }
        return ks(o2, function(t3) {
          var n3, e3, c2, f2, s2;
          return {lineStart: function() {
            f2 = c2 = false, s2 = 1;
          }, point: function(l2, h2) {
            var d2, p2 = [l2, h2], g2 = o2(l2, h2), y2 = r2 ? g2 ? 0 : u2(l2, h2) : g2 ? u2(l2 + (l2 < 0 ? xc : -xc), h2) : 0;
            if (!n3 && (f2 = c2 = g2) && t3.lineStart(), g2 !== c2 && (!(d2 = a2(n3, p2)) || ws(n3, d2) || ws(p2, d2)) && (p2[2] = 1), g2 !== c2)
              s2 = 0, g2 ? (t3.lineStart(), d2 = a2(p2, n3), t3.point(d2[0], d2[1])) : (d2 = a2(n3, p2), t3.point(d2[0], d2[1], 2), t3.lineEnd()), n3 = d2;
            else if (i2 && n3 && r2 ^ g2) {
              var v2;
              y2 & e3 || !(v2 = a2(p2, n3, true)) || (s2 = 0, r2 ? (t3.lineStart(), t3.point(v2[0][0], v2[0][1]), t3.point(v2[1][0], v2[1][1]), t3.lineEnd()) : (t3.point(v2[1][0], v2[1][1]), t3.lineEnd(), t3.lineStart(), t3.point(v2[0][0], v2[0][1], 3)));
            }
            !g2 || n3 && ws(n3, p2) || t3.point(p2[0], p2[1]), n3 = p2, c2 = g2, e3 = y2;
          }, lineEnd: function() {
            c2 && t3.lineEnd(), n3 = null;
          }, clean: function() {
            return s2 | (f2 && c2) << 1;
          }};
        }, function(n3, r3, i3, o3) {
          bs(o3, t2, e2, i3, n3, r3);
        }, r2 ? [0, -t2] : [-xc, t2 - xc]);
      }
      var Ds, qs, Rs, Fs, Os = 1e9, Us = -Os;
      function Is(t2, n2, e2, r2) {
        function i2(i3, o3) {
          return t2 <= i3 && i3 <= e2 && n2 <= o3 && o3 <= r2;
        }
        function o2(i3, o3, u3, f2) {
          var s2 = 0, l2 = 0;
          if (i3 == null || (s2 = a2(i3, u3)) !== (l2 = a2(o3, u3)) || c2(i3, o3) < 0 ^ u3 > 0)
            do {
              f2.point(s2 === 0 || s2 === 3 ? t2 : e2, s2 > 1 ? r2 : n2);
            } while ((s2 = (s2 + u3 + 4) % 4) !== l2);
          else
            f2.point(o3[0], o3[1]);
        }
        function a2(r3, i3) {
          return Ec(r3[0] - t2) < bc ? i3 > 0 ? 0 : 3 : Ec(r3[0] - e2) < bc ? i3 > 0 ? 2 : 1 : Ec(r3[1] - n2) < bc ? i3 > 0 ? 1 : 0 : i3 > 0 ? 3 : 2;
        }
        function u2(t3, n3) {
          return c2(t3.x, n3.x);
        }
        function c2(t3, n3) {
          var e3 = a2(t3, 1), r3 = a2(n3, 1);
          return e3 !== r3 ? e3 - r3 : e3 === 0 ? n3[1] - t3[1] : e3 === 1 ? t3[0] - n3[0] : e3 === 2 ? t3[1] - n3[1] : n3[0] - t3[0];
        }
        return function(a3) {
          var c3, f2, s2, l2, h2, d2, p2, g2, y2, v2, _2, b2 = a3, m2 = xs(), x2 = {point: w2, lineStart: function() {
            x2.point = M2, f2 && f2.push(s2 = []);
            v2 = true, y2 = false, p2 = g2 = NaN;
          }, lineEnd: function() {
            c3 && (M2(l2, h2), d2 && y2 && m2.rejoin(), c3.push(m2.result()));
            x2.point = w2, y2 && b2.lineEnd();
          }, polygonStart: function() {
            b2 = m2, c3 = [], f2 = [], _2 = true;
          }, polygonEnd: function() {
            var n3 = function() {
              for (var n4 = 0, e4 = 0, i4 = f2.length; e4 < i4; ++e4)
                for (var o3, a4, u3 = f2[e4], c4 = 1, s3 = u3.length, l3 = u3[0], h3 = l3[0], d4 = l3[1]; c4 < s3; ++c4)
                  o3 = h3, a4 = d4, h3 = (l3 = u3[c4])[0], d4 = l3[1], a4 <= r2 ? d4 > r2 && (h3 - o3) * (r2 - a4) > (d4 - a4) * (t2 - o3) && ++n4 : d4 <= r2 && (h3 - o3) * (r2 - a4) < (d4 - a4) * (t2 - o3) && --n4;
              return n4;
            }(), e3 = _2 && n3, i3 = (c3 = V(c3)).length;
            (e3 || i3) && (a3.polygonStart(), e3 && (a3.lineStart(), o2(null, null, 1, a3), a3.lineEnd()), i3 && As(c3, u2, n3, o2, a3), a3.polygonEnd());
            b2 = a3, c3 = f2 = s2 = null;
          }};
          function w2(t3, n3) {
            i2(t3, n3) && b2.point(t3, n3);
          }
          function M2(o3, a4) {
            var u3 = i2(o3, a4);
            if (f2 && s2.push([o3, a4]), v2)
              l2 = o3, h2 = a4, d2 = u3, v2 = false, u3 && (b2.lineStart(), b2.point(o3, a4));
            else if (u3 && y2)
              b2.point(o3, a4);
            else {
              var c4 = [p2 = Math.max(Us, Math.min(Os, p2)), g2 = Math.max(Us, Math.min(Os, g2))], m3 = [o3 = Math.max(Us, Math.min(Os, o3)), a4 = Math.max(Us, Math.min(Os, a4))];
              !function(t3, n3, e3, r3, i3, o4) {
                var a5, u4 = t3[0], c5 = t3[1], f3 = 0, s3 = 1, l3 = n3[0] - u4, h3 = n3[1] - c5;
                if (a5 = e3 - u4, l3 || !(a5 > 0)) {
                  if (a5 /= l3, l3 < 0) {
                    if (a5 < f3)
                      return;
                    a5 < s3 && (s3 = a5);
                  } else if (l3 > 0) {
                    if (a5 > s3)
                      return;
                    a5 > f3 && (f3 = a5);
                  }
                  if (a5 = i3 - u4, l3 || !(a5 < 0)) {
                    if (a5 /= l3, l3 < 0) {
                      if (a5 > s3)
                        return;
                      a5 > f3 && (f3 = a5);
                    } else if (l3 > 0) {
                      if (a5 < f3)
                        return;
                      a5 < s3 && (s3 = a5);
                    }
                    if (a5 = r3 - c5, h3 || !(a5 > 0)) {
                      if (a5 /= h3, h3 < 0) {
                        if (a5 < f3)
                          return;
                        a5 < s3 && (s3 = a5);
                      } else if (h3 > 0) {
                        if (a5 > s3)
                          return;
                        a5 > f3 && (f3 = a5);
                      }
                      if (a5 = o4 - c5, h3 || !(a5 < 0)) {
                        if (a5 /= h3, h3 < 0) {
                          if (a5 > s3)
                            return;
                          a5 > f3 && (f3 = a5);
                        } else if (h3 > 0) {
                          if (a5 < f3)
                            return;
                          a5 < s3 && (s3 = a5);
                        }
                        return f3 > 0 && (t3[0] = u4 + f3 * l3, t3[1] = c5 + f3 * h3), s3 < 1 && (n3[0] = u4 + s3 * l3, n3[1] = c5 + s3 * h3), true;
                      }
                    }
                  }
                }
              }(c4, m3, t2, n2, e2, r2) ? u3 && (b2.lineStart(), b2.point(o3, a4), _2 = false) : (y2 || (b2.lineStart(), b2.point(c4[0], c4[1])), b2.point(m3[0], m3[1]), u3 || b2.lineEnd(), _2 = false);
            }
            p2 = o3, g2 = a4, y2 = u3;
          }
          return x2;
        };
      }
      var Bs = {sphere: jc, point: jc, lineStart: function() {
        Bs.point = Ls, Bs.lineEnd = Ys;
      }, lineEnd: jc, polygonStart: jc, polygonEnd: jc};
      function Ys() {
        Bs.point = Bs.lineEnd = jc;
      }
      function Ls(t2, n2) {
        qs = t2 *= Sc, Rs = Fc(n2 *= Sc), Fs = Cc(n2), Bs.point = js;
      }
      function js(t2, n2) {
        t2 *= Sc;
        var e2 = Fc(n2 *= Sc), r2 = Cc(n2), i2 = Ec(t2 - qs), o2 = Cc(i2), a2 = r2 * Fc(i2), u2 = Fs * e2 - Rs * r2 * o2, c2 = Rs * e2 + Fs * r2 * o2;
        Ds.add(Nc(Uc(a2 * a2 + u2 * u2), c2)), qs = t2, Rs = e2, Fs = r2;
      }
      function Hs(t2) {
        return Ds = new g(), Wc(t2, Bs), +Ds;
      }
      var Xs = [null, null], Gs = {type: "LineString", coordinates: Xs};
      function Vs(t2, n2) {
        return Xs[0] = t2, Xs[1] = n2, Hs(Gs);
      }
      var $s = {Feature: function(t2, n2) {
        return Zs(t2.geometry, n2);
      }, FeatureCollection: function(t2, n2) {
        for (var e2 = t2.features, r2 = -1, i2 = e2.length; ++r2 < i2; )
          if (Zs(e2[r2].geometry, n2))
            return true;
        return false;
      }}, Ws = {Sphere: function() {
        return true;
      }, Point: function(t2, n2) {
        return Ks(t2.coordinates, n2);
      }, MultiPoint: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          if (Ks(e2[r2], n2))
            return true;
        return false;
      }, LineString: function(t2, n2) {
        return Qs(t2.coordinates, n2);
      }, MultiLineString: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          if (Qs(e2[r2], n2))
            return true;
        return false;
      }, Polygon: function(t2, n2) {
        return Js(t2.coordinates, n2);
      }, MultiPolygon: function(t2, n2) {
        for (var e2 = t2.coordinates, r2 = -1, i2 = e2.length; ++r2 < i2; )
          if (Js(e2[r2], n2))
            return true;
        return false;
      }, GeometryCollection: function(t2, n2) {
        for (var e2 = t2.geometries, r2 = -1, i2 = e2.length; ++r2 < i2; )
          if (Zs(e2[r2], n2))
            return true;
        return false;
      }};
      function Zs(t2, n2) {
        return !(!t2 || !Ws.hasOwnProperty(t2.type)) && Ws[t2.type](t2, n2);
      }
      function Ks(t2, n2) {
        return Vs(t2, n2) === 0;
      }
      function Qs(t2, n2) {
        for (var e2, r2, i2, o2 = 0, a2 = t2.length; o2 < a2; o2++) {
          if ((r2 = Vs(t2[o2], n2)) === 0)
            return true;
          if (o2 > 0 && (i2 = Vs(t2[o2], t2[o2 - 1])) > 0 && e2 <= i2 && r2 <= i2 && (e2 + r2 - i2) * (1 - Math.pow((e2 - r2) / i2, 2)) < mc * i2)
            return true;
          e2 = r2;
        }
        return false;
      }
      function Js(t2, n2) {
        return !!Es(t2.map(tl), nl(n2));
      }
      function tl(t2) {
        return (t2 = t2.map(nl)).pop(), t2;
      }
      function nl(t2) {
        return [t2[0] * Sc, t2[1] * Sc];
      }
      function el(t2, n2, e2) {
        var r2 = Z(t2, n2 - bc, e2).concat(n2);
        return function(t3) {
          return r2.map(function(n3) {
            return [t3, n3];
          });
        };
      }
      function rl(t2, n2, e2) {
        var r2 = Z(t2, n2 - bc, e2).concat(n2);
        return function(t3) {
          return r2.map(function(n3) {
            return [n3, t3];
          });
        };
      }
      function il() {
        var t2, n2, e2, r2, i2, o2, a2, u2, c2, f2, s2, l2, h2 = 10, d2 = h2, p2 = 90, g2 = 360, y2 = 2.5;
        function v2() {
          return {type: "MultiLineString", coordinates: _2()};
        }
        function _2() {
          return Z(Pc(r2 / p2) * p2, e2, p2).map(s2).concat(Z(Pc(u2 / g2) * g2, a2, g2).map(l2)).concat(Z(Pc(n2 / h2) * h2, t2, h2).filter(function(t3) {
            return Ec(t3 % p2) > bc;
          }).map(c2)).concat(Z(Pc(o2 / d2) * d2, i2, d2).filter(function(t3) {
            return Ec(t3 % g2) > bc;
          }).map(f2));
        }
        return v2.lines = function() {
          return _2().map(function(t3) {
            return {type: "LineString", coordinates: t3};
          });
        }, v2.outline = function() {
          return {type: "Polygon", coordinates: [s2(r2).concat(l2(a2).slice(1), s2(e2).reverse().slice(1), l2(u2).reverse().slice(1))]};
        }, v2.extent = function(t3) {
          return arguments.length ? v2.extentMajor(t3).extentMinor(t3) : v2.extentMinor();
        }, v2.extentMajor = function(t3) {
          return arguments.length ? (r2 = +t3[0][0], e2 = +t3[1][0], u2 = +t3[0][1], a2 = +t3[1][1], r2 > e2 && (t3 = r2, r2 = e2, e2 = t3), u2 > a2 && (t3 = u2, u2 = a2, a2 = t3), v2.precision(y2)) : [[r2, u2], [e2, a2]];
        }, v2.extentMinor = function(e3) {
          return arguments.length ? (n2 = +e3[0][0], t2 = +e3[1][0], o2 = +e3[0][1], i2 = +e3[1][1], n2 > t2 && (e3 = n2, n2 = t2, t2 = e3), o2 > i2 && (e3 = o2, o2 = i2, i2 = e3), v2.precision(y2)) : [[n2, o2], [t2, i2]];
        }, v2.step = function(t3) {
          return arguments.length ? v2.stepMajor(t3).stepMinor(t3) : v2.stepMinor();
        }, v2.stepMajor = function(t3) {
          return arguments.length ? (p2 = +t3[0], g2 = +t3[1], v2) : [p2, g2];
        }, v2.stepMinor = function(t3) {
          return arguments.length ? (h2 = +t3[0], d2 = +t3[1], v2) : [h2, d2];
        }, v2.precision = function(h3) {
          return arguments.length ? (y2 = +h3, c2 = el(o2, i2, 90), f2 = rl(n2, t2, y2), s2 = el(u2, a2, 90), l2 = rl(r2, e2, y2), v2) : y2;
        }, v2.extentMajor([[-180, -89.999999], [180, 89.999999]]).extentMinor([[-180, -80.000001], [180, 80.000001]]);
      }
      var ol, al, ul, cl, fl = (t2) => t2, sl = new g(), ll = new g(), hl = {point: jc, lineStart: jc, lineEnd: jc, polygonStart: function() {
        hl.lineStart = dl, hl.lineEnd = yl;
      }, polygonEnd: function() {
        hl.lineStart = hl.lineEnd = hl.point = jc, sl.add(Ec(ll)), ll = new g();
      }, result: function() {
        var t2 = sl / 2;
        return sl = new g(), t2;
      }};
      function dl() {
        hl.point = pl;
      }
      function pl(t2, n2) {
        hl.point = gl, ol = ul = t2, al = cl = n2;
      }
      function gl(t2, n2) {
        ll.add(cl * t2 - ul * n2), ul = t2, cl = n2;
      }
      function yl() {
        gl(ol, al);
      }
      var vl = 1 / 0, _l = vl, bl = -vl, ml = bl, xl = {point: function(t2, n2) {
        t2 < vl && (vl = t2);
        t2 > bl && (bl = t2);
        n2 < _l && (_l = n2);
        n2 > ml && (ml = n2);
      }, lineStart: jc, lineEnd: jc, polygonStart: jc, polygonEnd: jc, result: function() {
        var t2 = [[vl, _l], [bl, ml]];
        return bl = ml = -(_l = vl = 1 / 0), t2;
      }};
      var wl, Ml, Al, Tl, Sl = 0, El = 0, kl = 0, Nl = 0, Cl = 0, Pl = 0, zl = 0, Dl = 0, ql = 0, Rl = {point: Fl, lineStart: Ol, lineEnd: Bl, polygonStart: function() {
        Rl.lineStart = Yl, Rl.lineEnd = Ll;
      }, polygonEnd: function() {
        Rl.point = Fl, Rl.lineStart = Ol, Rl.lineEnd = Bl;
      }, result: function() {
        var t2 = ql ? [zl / ql, Dl / ql] : Pl ? [Nl / Pl, Cl / Pl] : kl ? [Sl / kl, El / kl] : [NaN, NaN];
        return Sl = El = kl = Nl = Cl = Pl = zl = Dl = ql = 0, t2;
      }};
      function Fl(t2, n2) {
        Sl += t2, El += n2, ++kl;
      }
      function Ol() {
        Rl.point = Ul;
      }
      function Ul(t2, n2) {
        Rl.point = Il, Fl(Al = t2, Tl = n2);
      }
      function Il(t2, n2) {
        var e2 = t2 - Al, r2 = n2 - Tl, i2 = Uc(e2 * e2 + r2 * r2);
        Nl += i2 * (Al + t2) / 2, Cl += i2 * (Tl + n2) / 2, Pl += i2, Fl(Al = t2, Tl = n2);
      }
      function Bl() {
        Rl.point = Fl;
      }
      function Yl() {
        Rl.point = jl;
      }
      function Ll() {
        Hl(wl, Ml);
      }
      function jl(t2, n2) {
        Rl.point = Hl, Fl(wl = Al = t2, Ml = Tl = n2);
      }
      function Hl(t2, n2) {
        var e2 = t2 - Al, r2 = n2 - Tl, i2 = Uc(e2 * e2 + r2 * r2);
        Nl += i2 * (Al + t2) / 2, Cl += i2 * (Tl + n2) / 2, Pl += i2, zl += (i2 = Tl * t2 - Al * n2) * (Al + t2), Dl += i2 * (Tl + n2), ql += 3 * i2, Fl(Al = t2, Tl = n2);
      }
      function Xl(t2) {
        this._context = t2;
      }
      Xl.prototype = {_radius: 4.5, pointRadius: function(t2) {
        return this._radius = t2, this;
      }, polygonStart: function() {
        this._line = 0;
      }, polygonEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        this._line === 0 && this._context.closePath(), this._point = NaN;
      }, point: function(t2, n2) {
        switch (this._point) {
          case 0:
            this._context.moveTo(t2, n2), this._point = 1;
            break;
          case 1:
            this._context.lineTo(t2, n2);
            break;
          default:
            this._context.moveTo(t2 + this._radius, n2), this._context.arc(t2, n2, this._radius, 0, Ac);
        }
      }, result: jc};
      var Gl, Vl, $l, Wl, Zl, Kl = new g(), Ql = {point: jc, lineStart: function() {
        Ql.point = Jl;
      }, lineEnd: function() {
        Gl && th(Vl, $l), Ql.point = jc;
      }, polygonStart: function() {
        Gl = true;
      }, polygonEnd: function() {
        Gl = null;
      }, result: function() {
        var t2 = +Kl;
        return Kl = new g(), t2;
      }};
      function Jl(t2, n2) {
        Ql.point = th, Vl = Wl = t2, $l = Zl = n2;
      }
      function th(t2, n2) {
        Wl -= t2, Zl -= n2, Kl.add(Uc(Wl * Wl + Zl * Zl)), Wl = t2, Zl = n2;
      }
      function nh() {
        this._string = [];
      }
      function eh(t2) {
        return "m0," + t2 + "a" + t2 + "," + t2 + " 0 1,1 0," + -2 * t2 + "a" + t2 + "," + t2 + " 0 1,1 0," + 2 * t2 + "z";
      }
      function rh(t2) {
        return function(n2) {
          var e2 = new ih();
          for (var r2 in t2)
            e2[r2] = t2[r2];
          return e2.stream = n2, e2;
        };
      }
      function ih() {
      }
      function oh(t2, n2, e2) {
        var r2 = t2.clipExtent && t2.clipExtent();
        return t2.scale(150).translate([0, 0]), r2 != null && t2.clipExtent(null), Wc(e2, t2.stream(xl)), n2(xl.result()), r2 != null && t2.clipExtent(r2), t2;
      }
      function ah(t2, n2, e2) {
        return oh(t2, function(e3) {
          var r2 = n2[1][0] - n2[0][0], i2 = n2[1][1] - n2[0][1], o2 = Math.min(r2 / (e3[1][0] - e3[0][0]), i2 / (e3[1][1] - e3[0][1])), a2 = +n2[0][0] + (r2 - o2 * (e3[1][0] + e3[0][0])) / 2, u2 = +n2[0][1] + (i2 - o2 * (e3[1][1] + e3[0][1])) / 2;
          t2.scale(150 * o2).translate([a2, u2]);
        }, e2);
      }
      function uh(t2, n2, e2) {
        return ah(t2, [[0, 0], n2], e2);
      }
      function ch(t2, n2, e2) {
        return oh(t2, function(e3) {
          var r2 = +n2, i2 = r2 / (e3[1][0] - e3[0][0]), o2 = (r2 - i2 * (e3[1][0] + e3[0][0])) / 2, a2 = -i2 * e3[0][1];
          t2.scale(150 * i2).translate([o2, a2]);
        }, e2);
      }
      function fh(t2, n2, e2) {
        return oh(t2, function(e3) {
          var r2 = +n2, i2 = r2 / (e3[1][1] - e3[0][1]), o2 = -i2 * e3[0][0], a2 = (r2 - i2 * (e3[1][1] + e3[0][1])) / 2;
          t2.scale(150 * i2).translate([o2, a2]);
        }, e2);
      }
      nh.prototype = {_radius: 4.5, _circle: eh(4.5), pointRadius: function(t2) {
        return (t2 = +t2) !== this._radius && (this._radius = t2, this._circle = null), this;
      }, polygonStart: function() {
        this._line = 0;
      }, polygonEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        this._line === 0 && this._string.push("Z"), this._point = NaN;
      }, point: function(t2, n2) {
        switch (this._point) {
          case 0:
            this._string.push("M", t2, ",", n2), this._point = 1;
            break;
          case 1:
            this._string.push("L", t2, ",", n2);
            break;
          default:
            this._circle == null && (this._circle = eh(this._radius)), this._string.push("M", t2, ",", n2, this._circle);
        }
      }, result: function() {
        if (this._string.length) {
          var t2 = this._string.join("");
          return this._string = [], t2;
        }
        return null;
      }}, ih.prototype = {constructor: ih, point: function(t2, n2) {
        this.stream.point(t2, n2);
      }, sphere: function() {
        this.stream.sphere();
      }, lineStart: function() {
        this.stream.lineStart();
      }, lineEnd: function() {
        this.stream.lineEnd();
      }, polygonStart: function() {
        this.stream.polygonStart();
      }, polygonEnd: function() {
        this.stream.polygonEnd();
      }};
      var sh = Cc(30 * Sc);
      function lh(t2, n2) {
        return +n2 ? function(t3, n3) {
          function e2(r2, i2, o2, a2, u2, c2, f2, s2, l2, h2, d2, p2, g2, y2) {
            var v2 = f2 - r2, _2 = s2 - i2, b2 = v2 * v2 + _2 * _2;
            if (b2 > 4 * n3 && g2--) {
              var m2 = a2 + h2, x2 = u2 + d2, w2 = c2 + p2, M2 = Uc(m2 * m2 + x2 * x2 + w2 * w2), A2 = Yc(w2 /= M2), T2 = Ec(Ec(w2) - 1) < bc || Ec(o2 - l2) < bc ? (o2 + l2) / 2 : Nc(x2, m2), S2 = t3(T2, A2), E2 = S2[0], k2 = S2[1], N2 = E2 - r2, C2 = k2 - i2, P2 = _2 * N2 - v2 * C2;
              (P2 * P2 / b2 > n3 || Ec((v2 * N2 + _2 * C2) / b2 - 0.5) > 0.3 || a2 * h2 + u2 * d2 + c2 * p2 < sh) && (e2(r2, i2, o2, a2, u2, c2, E2, k2, T2, m2 /= M2, x2 /= M2, w2, g2, y2), y2.point(E2, k2), e2(E2, k2, T2, m2, x2, w2, f2, s2, l2, h2, d2, p2, g2, y2));
            }
          }
          return function(n4) {
            var r2, i2, o2, a2, u2, c2, f2, s2, l2, h2, d2, p2, g2 = {point: y2, lineStart: v2, lineEnd: b2, polygonStart: function() {
              n4.polygonStart(), g2.lineStart = m2;
            }, polygonEnd: function() {
              n4.polygonEnd(), g2.lineStart = v2;
            }};
            function y2(e3, r3) {
              e3 = t3(e3, r3), n4.point(e3[0], e3[1]);
            }
            function v2() {
              s2 = NaN, g2.point = _2, n4.lineStart();
            }
            function _2(r3, i3) {
              var o3 = xf([r3, i3]), a3 = t3(r3, i3);
              e2(s2, l2, f2, h2, d2, p2, s2 = a3[0], l2 = a3[1], f2 = r3, h2 = o3[0], d2 = o3[1], p2 = o3[2], 16, n4), n4.point(s2, l2);
            }
            function b2() {
              g2.point = y2, n4.lineEnd();
            }
            function m2() {
              v2(), g2.point = x2, g2.lineEnd = w2;
            }
            function x2(t4, n5) {
              _2(r2 = t4, n5), i2 = s2, o2 = l2, a2 = h2, u2 = d2, c2 = p2, g2.point = _2;
            }
            function w2() {
              e2(s2, l2, f2, h2, d2, p2, i2, o2, r2, a2, u2, c2, 16, n4), g2.lineEnd = b2, b2();
            }
            return g2;
          };
        }(t2, n2) : function(t3) {
          return rh({point: function(n3, e2) {
            n3 = t3(n3, e2), this.stream.point(n3[0], n3[1]);
          }});
        }(t2);
      }
      var hh = rh({point: function(t2, n2) {
        this.stream.point(t2 * Sc, n2 * Sc);
      }});
      function dh(t2, n2, e2, r2, i2, o2) {
        if (!o2)
          return function(t3, n3, e3, r3, i3) {
            function o3(o4, a3) {
              return [n3 + t3 * (o4 *= r3), e3 - t3 * (a3 *= i3)];
            }
            return o3.invert = function(o4, a3) {
              return [(o4 - n3) / t3 * r3, (e3 - a3) / t3 * i3];
            }, o3;
          }(t2, n2, e2, r2, i2);
        var a2 = Cc(o2), u2 = Fc(o2), c2 = a2 * t2, f2 = u2 * t2, s2 = a2 / t2, l2 = u2 / t2, h2 = (u2 * e2 - a2 * n2) / t2, d2 = (u2 * n2 + a2 * e2) / t2;
        function p2(t3, o3) {
          return [c2 * (t3 *= r2) - f2 * (o3 *= i2) + n2, e2 - f2 * t3 - c2 * o3];
        }
        return p2.invert = function(t3, n3) {
          return [r2 * (s2 * t3 - l2 * n3 + h2), i2 * (d2 - l2 * t3 - s2 * n3)];
        }, p2;
      }
      function ph(t2) {
        return gh(function() {
          return t2;
        })();
      }
      function gh(t2) {
        var n2, e2, r2, i2, o2, a2, u2, c2, f2, s2, l2 = 150, h2 = 480, d2 = 250, p2 = 0, g2 = 0, y2 = 0, v2 = 0, _2 = 0, b2 = 0, m2 = 1, x2 = 1, w2 = null, M2 = Ps, A2 = null, T2 = fl, S2 = 0.5;
        function E2(t3) {
          return c2(t3[0] * Sc, t3[1] * Sc);
        }
        function k2(t3) {
          return (t3 = c2.invert(t3[0], t3[1])) && [t3[0] * Tc, t3[1] * Tc];
        }
        function N2() {
          var t3 = dh(l2, 0, 0, m2, x2, b2).apply(null, n2(p2, g2)), r3 = dh(l2, h2 - t3[0], d2 - t3[1], m2, x2, b2);
          return e2 = ps(y2, v2, _2), u2 = hs(n2, r3), c2 = hs(e2, u2), a2 = lh(u2, S2), C2();
        }
        function C2() {
          return f2 = s2 = null, E2;
        }
        return E2.stream = function(t3) {
          return f2 && s2 === t3 ? f2 : f2 = hh(function(t4) {
            return rh({point: function(n3, e3) {
              var r3 = t4(n3, e3);
              return this.stream.point(r3[0], r3[1]);
            }});
          }(e2)(M2(a2(T2(s2 = t3)))));
        }, E2.preclip = function(t3) {
          return arguments.length ? (M2 = t3, w2 = void 0, C2()) : M2;
        }, E2.postclip = function(t3) {
          return arguments.length ? (T2 = t3, A2 = r2 = i2 = o2 = null, C2()) : T2;
        }, E2.clipAngle = function(t3) {
          return arguments.length ? (M2 = +t3 ? zs(w2 = t3 * Sc) : (w2 = null, Ps), C2()) : w2 * Tc;
        }, E2.clipExtent = function(t3) {
          return arguments.length ? (T2 = t3 == null ? (A2 = r2 = i2 = o2 = null, fl) : Is(A2 = +t3[0][0], r2 = +t3[0][1], i2 = +t3[1][0], o2 = +t3[1][1]), C2()) : A2 == null ? null : [[A2, r2], [i2, o2]];
        }, E2.scale = function(t3) {
          return arguments.length ? (l2 = +t3, N2()) : l2;
        }, E2.translate = function(t3) {
          return arguments.length ? (h2 = +t3[0], d2 = +t3[1], N2()) : [h2, d2];
        }, E2.center = function(t3) {
          return arguments.length ? (p2 = t3[0] % 360 * Sc, g2 = t3[1] % 360 * Sc, N2()) : [p2 * Tc, g2 * Tc];
        }, E2.rotate = function(t3) {
          return arguments.length ? (y2 = t3[0] % 360 * Sc, v2 = t3[1] % 360 * Sc, _2 = t3.length > 2 ? t3[2] % 360 * Sc : 0, N2()) : [y2 * Tc, v2 * Tc, _2 * Tc];
        }, E2.angle = function(t3) {
          return arguments.length ? (b2 = t3 % 360 * Sc, N2()) : b2 * Tc;
        }, E2.reflectX = function(t3) {
          return arguments.length ? (m2 = t3 ? -1 : 1, N2()) : m2 < 0;
        }, E2.reflectY = function(t3) {
          return arguments.length ? (x2 = t3 ? -1 : 1, N2()) : x2 < 0;
        }, E2.precision = function(t3) {
          return arguments.length ? (a2 = lh(u2, S2 = t3 * t3), C2()) : Uc(S2);
        }, E2.fitExtent = function(t3, n3) {
          return ah(E2, t3, n3);
        }, E2.fitSize = function(t3, n3) {
          return uh(E2, t3, n3);
        }, E2.fitWidth = function(t3, n3) {
          return ch(E2, t3, n3);
        }, E2.fitHeight = function(t3, n3) {
          return fh(E2, t3, n3);
        }, function() {
          return n2 = t2.apply(this, arguments), E2.invert = n2.invert && k2, N2();
        };
      }
      function yh(t2) {
        var n2 = 0, e2 = xc / 3, r2 = gh(t2), i2 = r2(n2, e2);
        return i2.parallels = function(t3) {
          return arguments.length ? r2(n2 = t3[0] * Sc, e2 = t3[1] * Sc) : [n2 * Tc, e2 * Tc];
        }, i2;
      }
      function vh(t2, n2) {
        var e2 = Fc(t2), r2 = (e2 + Fc(n2)) / 2;
        if (Ec(r2) < bc)
          return function(t3) {
            var n3 = Cc(t3);
            function e3(t4, e4) {
              return [t4 * n3, Fc(e4) / n3];
            }
            return e3.invert = function(t4, e4) {
              return [t4 / n3, Yc(e4 * n3)];
            }, e3;
          }(t2);
        var i2 = 1 + e2 * (2 * r2 - e2), o2 = Uc(i2) / r2;
        function a2(t3, n3) {
          var e3 = Uc(i2 - 2 * r2 * Fc(n3)) / r2;
          return [e3 * Fc(t3 *= r2), o2 - e3 * Cc(t3)];
        }
        return a2.invert = function(t3, n3) {
          var e3 = o2 - n3, a3 = Nc(t3, Ec(e3)) * Oc(e3);
          return e3 * r2 < 0 && (a3 -= xc * Oc(t3) * Oc(e3)), [a3 / r2, Yc((i2 - (t3 * t3 + e3 * e3) * r2 * r2) / (2 * r2))];
        }, a2;
      }
      function _h() {
        return yh(vh).scale(155.424).center([0, 33.6442]);
      }
      function bh() {
        return _h().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-0.6, 38.7]);
      }
      function mh(t2) {
        return function(n2, e2) {
          var r2 = Cc(n2), i2 = Cc(e2), o2 = t2(r2 * i2);
          return o2 === 1 / 0 ? [2, 0] : [o2 * i2 * Fc(n2), o2 * Fc(e2)];
        };
      }
      function xh(t2) {
        return function(n2, e2) {
          var r2 = Uc(n2 * n2 + e2 * e2), i2 = t2(r2), o2 = Fc(i2), a2 = Cc(i2);
          return [Nc(n2 * o2, r2 * a2), Yc(r2 && e2 * o2 / r2)];
        };
      }
      var wh = mh(function(t2) {
        return Uc(2 / (1 + t2));
      });
      wh.invert = xh(function(t2) {
        return 2 * Yc(t2 / 2);
      });
      var Mh = mh(function(t2) {
        return (t2 = Bc(t2)) && t2 / Fc(t2);
      });
      function Ah(t2, n2) {
        return [t2, qc(Ic((wc + n2) / 2))];
      }
      function Th(t2) {
        var n2, e2, r2, i2 = ph(t2), o2 = i2.center, a2 = i2.scale, u2 = i2.translate, c2 = i2.clipExtent, f2 = null;
        function s2() {
          var o3 = xc * a2(), u3 = i2(_s(i2.rotate()).invert([0, 0]));
          return c2(f2 == null ? [[u3[0] - o3, u3[1] - o3], [u3[0] + o3, u3[1] + o3]] : t2 === Ah ? [[Math.max(u3[0] - o3, f2), n2], [Math.min(u3[0] + o3, e2), r2]] : [[f2, Math.max(u3[1] - o3, n2)], [e2, Math.min(u3[1] + o3, r2)]]);
        }
        return i2.scale = function(t3) {
          return arguments.length ? (a2(t3), s2()) : a2();
        }, i2.translate = function(t3) {
          return arguments.length ? (u2(t3), s2()) : u2();
        }, i2.center = function(t3) {
          return arguments.length ? (o2(t3), s2()) : o2();
        }, i2.clipExtent = function(t3) {
          return arguments.length ? (t3 == null ? f2 = n2 = e2 = r2 = null : (f2 = +t3[0][0], n2 = +t3[0][1], e2 = +t3[1][0], r2 = +t3[1][1]), s2()) : f2 == null ? null : [[f2, n2], [e2, r2]];
        }, s2();
      }
      function Sh(t2) {
        return Ic((wc + t2) / 2);
      }
      function Eh(t2, n2) {
        var e2 = Cc(t2), r2 = t2 === n2 ? Fc(t2) : qc(e2 / Cc(n2)) / qc(Sh(n2) / Sh(t2)), i2 = e2 * Rc(Sh(t2), r2) / r2;
        if (!r2)
          return Ah;
        function o2(t3, n3) {
          i2 > 0 ? n3 < -wc + bc && (n3 = -wc + bc) : n3 > wc - bc && (n3 = wc - bc);
          var e3 = i2 / Rc(Sh(n3), r2);
          return [e3 * Fc(r2 * t3), i2 - e3 * Cc(r2 * t3)];
        }
        return o2.invert = function(t3, n3) {
          var e3 = i2 - n3, o3 = Oc(r2) * Uc(t3 * t3 + e3 * e3), a2 = Nc(t3, Ec(e3)) * Oc(e3);
          return e3 * r2 < 0 && (a2 -= xc * Oc(t3) * Oc(e3)), [a2 / r2, 2 * kc(Rc(i2 / o3, 1 / r2)) - wc];
        }, o2;
      }
      function kh(t2, n2) {
        return [t2, n2];
      }
      function Nh(t2, n2) {
        var e2 = Cc(t2), r2 = t2 === n2 ? Fc(t2) : (e2 - Cc(n2)) / (n2 - t2), i2 = e2 / r2 + t2;
        if (Ec(r2) < bc)
          return kh;
        function o2(t3, n3) {
          var e3 = i2 - n3, o3 = r2 * t3;
          return [e3 * Fc(o3), i2 - e3 * Cc(o3)];
        }
        return o2.invert = function(t3, n3) {
          var e3 = i2 - n3, o3 = Nc(t3, Ec(e3)) * Oc(e3);
          return e3 * r2 < 0 && (o3 -= xc * Oc(t3) * Oc(e3)), [o3 / r2, i2 - Oc(r2) * Uc(t3 * t3 + e3 * e3)];
        }, o2;
      }
      Mh.invert = xh(function(t2) {
        return t2;
      }), Ah.invert = function(t2, n2) {
        return [t2, 2 * kc(zc(n2)) - wc];
      }, kh.invert = kh;
      var Ch = 1.340264, Ph = -0.081106, zh = 893e-6, Dh = 3796e-6, qh = Uc(3) / 2;
      function Rh(t2, n2) {
        var e2 = Yc(qh * Fc(n2)), r2 = e2 * e2, i2 = r2 * r2 * r2;
        return [t2 * Cc(e2) / (qh * (Ch + 3 * Ph * r2 + i2 * (7 * zh + 9 * Dh * r2))), e2 * (Ch + Ph * r2 + i2 * (zh + Dh * r2))];
      }
      function Fh(t2, n2) {
        var e2 = Cc(n2), r2 = Cc(t2) * e2;
        return [e2 * Fc(t2) / r2, Fc(n2) / r2];
      }
      function Oh(t2, n2) {
        var e2 = n2 * n2, r2 = e2 * e2;
        return [t2 * (0.8707 - 0.131979 * e2 + r2 * (r2 * (3971e-6 * e2 - 1529e-6 * r2) - 0.013791)), n2 * (1.007226 + e2 * (0.015085 + r2 * (0.028874 * e2 - 0.044475 - 5916e-6 * r2)))];
      }
      function Uh(t2, n2) {
        return [Cc(n2) * Fc(t2), Fc(n2)];
      }
      function Ih(t2, n2) {
        var e2 = Cc(n2), r2 = 1 + Cc(t2) * e2;
        return [e2 * Fc(t2) / r2, Fc(n2) / r2];
      }
      function Bh(t2, n2) {
        return [qc(Ic((wc + n2) / 2)), -t2];
      }
      function Yh(t2, n2) {
        return t2.parent === n2.parent ? 1 : 2;
      }
      function Lh(t2, n2) {
        return t2 + n2.x;
      }
      function jh(t2, n2) {
        return Math.max(t2, n2.y);
      }
      function Hh(t2) {
        var n2 = 0, e2 = t2.children, r2 = e2 && e2.length;
        if (r2)
          for (; --r2 >= 0; )
            n2 += e2[r2].value;
        else
          n2 = 1;
        t2.value = n2;
      }
      function Xh(t2, n2) {
        t2 instanceof Map ? (t2 = [void 0, t2], n2 === void 0 && (n2 = Vh)) : n2 === void 0 && (n2 = Gh);
        for (var e2, r2, i2, o2, a2, u2 = new Zh(t2), c2 = [u2]; e2 = c2.pop(); )
          if ((i2 = n2(e2.data)) && (a2 = (i2 = Array.from(i2)).length))
            for (e2.children = i2, o2 = a2 - 1; o2 >= 0; --o2)
              c2.push(r2 = i2[o2] = new Zh(i2[o2])), r2.parent = e2, r2.depth = e2.depth + 1;
        return u2.eachBefore(Wh);
      }
      function Gh(t2) {
        return t2.children;
      }
      function Vh(t2) {
        return Array.isArray(t2) ? t2[1] : null;
      }
      function $h(t2) {
        t2.data.value !== void 0 && (t2.value = t2.data.value), t2.data = t2.data.data;
      }
      function Wh(t2) {
        var n2 = 0;
        do {
          t2.height = n2;
        } while ((t2 = t2.parent) && t2.height < ++n2);
      }
      function Zh(t2) {
        this.data = t2, this.depth = this.height = 0, this.parent = null;
      }
      function Kh(t2) {
        for (var n2, e2, r2 = 0, i2 = (t2 = function(t3) {
          for (var n3, e3, r3 = t3.length; r3; )
            e3 = Math.random() * r3-- | 0, n3 = t3[r3], t3[r3] = t3[e3], t3[e3] = n3;
          return t3;
        }(Array.from(t2))).length, o2 = []; r2 < i2; )
          n2 = t2[r2], e2 && td(e2, n2) ? ++r2 : (e2 = ed(o2 = Qh(o2, n2)), r2 = 0);
        return e2;
      }
      function Qh(t2, n2) {
        var e2, r2;
        if (nd(n2, t2))
          return [n2];
        for (e2 = 0; e2 < t2.length; ++e2)
          if (Jh(n2, t2[e2]) && nd(rd(t2[e2], n2), t2))
            return [t2[e2], n2];
        for (e2 = 0; e2 < t2.length - 1; ++e2)
          for (r2 = e2 + 1; r2 < t2.length; ++r2)
            if (Jh(rd(t2[e2], t2[r2]), n2) && Jh(rd(t2[e2], n2), t2[r2]) && Jh(rd(t2[r2], n2), t2[e2]) && nd(id(t2[e2], t2[r2], n2), t2))
              return [t2[e2], t2[r2], n2];
        throw new Error();
      }
      function Jh(t2, n2) {
        var e2 = t2.r - n2.r, r2 = n2.x - t2.x, i2 = n2.y - t2.y;
        return e2 < 0 || e2 * e2 < r2 * r2 + i2 * i2;
      }
      function td(t2, n2) {
        var e2 = t2.r - n2.r + 1e-9 * Math.max(t2.r, n2.r, 1), r2 = n2.x - t2.x, i2 = n2.y - t2.y;
        return e2 > 0 && e2 * e2 > r2 * r2 + i2 * i2;
      }
      function nd(t2, n2) {
        for (var e2 = 0; e2 < n2.length; ++e2)
          if (!td(t2, n2[e2]))
            return false;
        return true;
      }
      function ed(t2) {
        switch (t2.length) {
          case 1:
            return function(t3) {
              return {x: t3.x, y: t3.y, r: t3.r};
            }(t2[0]);
          case 2:
            return rd(t2[0], t2[1]);
          case 3:
            return id(t2[0], t2[1], t2[2]);
        }
      }
      function rd(t2, n2) {
        var e2 = t2.x, r2 = t2.y, i2 = t2.r, o2 = n2.x, a2 = n2.y, u2 = n2.r, c2 = o2 - e2, f2 = a2 - r2, s2 = u2 - i2, l2 = Math.sqrt(c2 * c2 + f2 * f2);
        return {x: (e2 + o2 + c2 / l2 * s2) / 2, y: (r2 + a2 + f2 / l2 * s2) / 2, r: (l2 + i2 + u2) / 2};
      }
      function id(t2, n2, e2) {
        var r2 = t2.x, i2 = t2.y, o2 = t2.r, a2 = n2.x, u2 = n2.y, c2 = n2.r, f2 = e2.x, s2 = e2.y, l2 = e2.r, h2 = r2 - a2, d2 = r2 - f2, p2 = i2 - u2, g2 = i2 - s2, y2 = c2 - o2, v2 = l2 - o2, _2 = r2 * r2 + i2 * i2 - o2 * o2, b2 = _2 - a2 * a2 - u2 * u2 + c2 * c2, m2 = _2 - f2 * f2 - s2 * s2 + l2 * l2, x2 = d2 * p2 - h2 * g2, w2 = (p2 * m2 - g2 * b2) / (2 * x2) - r2, M2 = (g2 * y2 - p2 * v2) / x2, A2 = (d2 * b2 - h2 * m2) / (2 * x2) - i2, T2 = (h2 * v2 - d2 * y2) / x2, S2 = M2 * M2 + T2 * T2 - 1, E2 = 2 * (o2 + w2 * M2 + A2 * T2), k2 = w2 * w2 + A2 * A2 - o2 * o2, N2 = -(S2 ? (E2 + Math.sqrt(E2 * E2 - 4 * S2 * k2)) / (2 * S2) : k2 / E2);
        return {x: r2 + w2 + M2 * N2, y: i2 + A2 + T2 * N2, r: N2};
      }
      function od(t2, n2, e2) {
        var r2, i2, o2, a2, u2 = t2.x - n2.x, c2 = t2.y - n2.y, f2 = u2 * u2 + c2 * c2;
        f2 ? (i2 = n2.r + e2.r, i2 *= i2, a2 = t2.r + e2.r, i2 > (a2 *= a2) ? (r2 = (f2 + a2 - i2) / (2 * f2), o2 = Math.sqrt(Math.max(0, a2 / f2 - r2 * r2)), e2.x = t2.x - r2 * u2 - o2 * c2, e2.y = t2.y - r2 * c2 + o2 * u2) : (r2 = (f2 + i2 - a2) / (2 * f2), o2 = Math.sqrt(Math.max(0, i2 / f2 - r2 * r2)), e2.x = n2.x + r2 * u2 - o2 * c2, e2.y = n2.y + r2 * c2 + o2 * u2)) : (e2.x = n2.x + e2.r, e2.y = n2.y);
      }
      function ad(t2, n2) {
        var e2 = t2.r + n2.r - 1e-6, r2 = n2.x - t2.x, i2 = n2.y - t2.y;
        return e2 > 0 && e2 * e2 > r2 * r2 + i2 * i2;
      }
      function ud(t2) {
        var n2 = t2._, e2 = t2.next._, r2 = n2.r + e2.r, i2 = (n2.x * e2.r + e2.x * n2.r) / r2, o2 = (n2.y * e2.r + e2.y * n2.r) / r2;
        return i2 * i2 + o2 * o2;
      }
      function cd(t2) {
        this._ = t2, this.next = null, this.previous = null;
      }
      function fd(t2) {
        if (!(i2 = (t2 = function(t3) {
          return typeof t3 == "object" && "length" in t3 ? t3 : Array.from(t3);
        }(t2)).length))
          return 0;
        var n2, e2, r2, i2, o2, a2, u2, c2, f2, s2, l2;
        if ((n2 = t2[0]).x = 0, n2.y = 0, !(i2 > 1))
          return n2.r;
        if (e2 = t2[1], n2.x = -e2.r, e2.x = n2.r, e2.y = 0, !(i2 > 2))
          return n2.r + e2.r;
        od(e2, n2, r2 = t2[2]), n2 = new cd(n2), e2 = new cd(e2), r2 = new cd(r2), n2.next = r2.previous = e2, e2.next = n2.previous = r2, r2.next = e2.previous = n2;
        t:
          for (u2 = 3; u2 < i2; ++u2) {
            od(n2._, e2._, r2 = t2[u2]), r2 = new cd(r2), c2 = e2.next, f2 = n2.previous, s2 = e2._.r, l2 = n2._.r;
            do {
              if (s2 <= l2) {
                if (ad(c2._, r2._)) {
                  e2 = c2, n2.next = e2, e2.previous = n2, --u2;
                  continue t;
                }
                s2 += c2._.r, c2 = c2.next;
              } else {
                if (ad(f2._, r2._)) {
                  (n2 = f2).next = e2, e2.previous = n2, --u2;
                  continue t;
                }
                l2 += f2._.r, f2 = f2.previous;
              }
            } while (c2 !== f2.next);
            for (r2.previous = n2, r2.next = e2, n2.next = e2.previous = e2 = r2, o2 = ud(n2); (r2 = r2.next) !== e2; )
              (a2 = ud(r2)) < o2 && (n2 = r2, o2 = a2);
            e2 = n2.next;
          }
        for (n2 = [e2._], r2 = e2; (r2 = r2.next) !== e2; )
          n2.push(r2._);
        for (r2 = Kh(n2), u2 = 0; u2 < i2; ++u2)
          (n2 = t2[u2]).x -= r2.x, n2.y -= r2.y;
        return r2.r;
      }
      function sd(t2) {
        return t2 == null ? null : ld(t2);
      }
      function ld(t2) {
        if (typeof t2 != "function")
          throw new Error();
        return t2;
      }
      function hd() {
        return 0;
      }
      function dd(t2) {
        return function() {
          return t2;
        };
      }
      function pd(t2) {
        return Math.sqrt(t2.value);
      }
      function gd(t2) {
        return function(n2) {
          n2.children || (n2.r = Math.max(0, +t2(n2) || 0));
        };
      }
      function yd(t2, n2) {
        return function(e2) {
          if (r2 = e2.children) {
            var r2, i2, o2, a2 = r2.length, u2 = t2(e2) * n2 || 0;
            if (u2)
              for (i2 = 0; i2 < a2; ++i2)
                r2[i2].r += u2;
            if (o2 = fd(r2), u2)
              for (i2 = 0; i2 < a2; ++i2)
                r2[i2].r -= u2;
            e2.r = o2 + u2;
          }
        };
      }
      function vd(t2) {
        return function(n2) {
          var e2 = n2.parent;
          n2.r *= t2, e2 && (n2.x = e2.x + t2 * n2.x, n2.y = e2.y + t2 * n2.y);
        };
      }
      function _d(t2) {
        t2.x0 = Math.round(t2.x0), t2.y0 = Math.round(t2.y0), t2.x1 = Math.round(t2.x1), t2.y1 = Math.round(t2.y1);
      }
      function bd(t2, n2, e2, r2, i2) {
        for (var o2, a2 = t2.children, u2 = -1, c2 = a2.length, f2 = t2.value && (r2 - n2) / t2.value; ++u2 < c2; )
          (o2 = a2[u2]).y0 = e2, o2.y1 = i2, o2.x0 = n2, o2.x1 = n2 += o2.value * f2;
      }
      Rh.invert = function(t2, n2) {
        for (var e2, r2 = n2, i2 = r2 * r2, o2 = i2 * i2 * i2, a2 = 0; a2 < 12 && (o2 = (i2 = (r2 -= e2 = (r2 * (Ch + Ph * i2 + o2 * (zh + Dh * i2)) - n2) / (Ch + 3 * Ph * i2 + o2 * (7 * zh + 9 * Dh * i2))) * r2) * i2 * i2, !(Ec(e2) < mc)); ++a2)
          ;
        return [qh * t2 * (Ch + 3 * Ph * i2 + o2 * (7 * zh + 9 * Dh * i2)) / Cc(r2), Yc(Fc(r2) / qh)];
      }, Fh.invert = xh(kc), Oh.invert = function(t2, n2) {
        var e2, r2 = n2, i2 = 25;
        do {
          var o2 = r2 * r2, a2 = o2 * o2;
          r2 -= e2 = (r2 * (1.007226 + o2 * (0.015085 + a2 * (0.028874 * o2 - 0.044475 - 5916e-6 * a2))) - n2) / (1.007226 + o2 * (0.045255 + a2 * (0.259866 * o2 - 0.311325 - 5916e-6 * 11 * a2)));
        } while (Ec(e2) > bc && --i2 > 0);
        return [t2 / (0.8707 + (o2 = r2 * r2) * (o2 * (o2 * o2 * o2 * (3971e-6 - 1529e-6 * o2) - 0.013791) - 0.131979)), r2];
      }, Uh.invert = xh(Yc), Ih.invert = xh(function(t2) {
        return 2 * kc(t2);
      }), Bh.invert = function(t2, n2) {
        return [-n2, 2 * kc(zc(t2)) - wc];
      }, Zh.prototype = Xh.prototype = {constructor: Zh, count: function() {
        return this.eachAfter(Hh);
      }, each: function(t2, n2) {
        let e2 = -1;
        for (const r2 of this)
          t2.call(n2, r2, ++e2, this);
        return this;
      }, eachAfter: function(t2, n2) {
        for (var e2, r2, i2, o2 = this, a2 = [o2], u2 = [], c2 = -1; o2 = a2.pop(); )
          if (u2.push(o2), e2 = o2.children)
            for (r2 = 0, i2 = e2.length; r2 < i2; ++r2)
              a2.push(e2[r2]);
        for (; o2 = u2.pop(); )
          t2.call(n2, o2, ++c2, this);
        return this;
      }, eachBefore: function(t2, n2) {
        for (var e2, r2, i2 = this, o2 = [i2], a2 = -1; i2 = o2.pop(); )
          if (t2.call(n2, i2, ++a2, this), e2 = i2.children)
            for (r2 = e2.length - 1; r2 >= 0; --r2)
              o2.push(e2[r2]);
        return this;
      }, find: function(t2, n2) {
        let e2 = -1;
        for (const r2 of this)
          if (t2.call(n2, r2, ++e2, this))
            return r2;
      }, sum: function(t2) {
        return this.eachAfter(function(n2) {
          for (var e2 = +t2(n2.data) || 0, r2 = n2.children, i2 = r2 && r2.length; --i2 >= 0; )
            e2 += r2[i2].value;
          n2.value = e2;
        });
      }, sort: function(t2) {
        return this.eachBefore(function(n2) {
          n2.children && n2.children.sort(t2);
        });
      }, path: function(t2) {
        for (var n2 = this, e2 = function(t3, n3) {
          if (t3 === n3)
            return t3;
          var e3 = t3.ancestors(), r3 = n3.ancestors(), i3 = null;
          t3 = e3.pop(), n3 = r3.pop();
          for (; t3 === n3; )
            i3 = t3, t3 = e3.pop(), n3 = r3.pop();
          return i3;
        }(n2, t2), r2 = [n2]; n2 !== e2; )
          n2 = n2.parent, r2.push(n2);
        for (var i2 = r2.length; t2 !== e2; )
          r2.splice(i2, 0, t2), t2 = t2.parent;
        return r2;
      }, ancestors: function() {
        for (var t2 = this, n2 = [t2]; t2 = t2.parent; )
          n2.push(t2);
        return n2;
      }, descendants: function() {
        return Array.from(this);
      }, leaves: function() {
        var t2 = [];
        return this.eachBefore(function(n2) {
          n2.children || t2.push(n2);
        }), t2;
      }, links: function() {
        var t2 = this, n2 = [];
        return t2.each(function(e2) {
          e2 !== t2 && n2.push({source: e2.parent, target: e2});
        }), n2;
      }, copy: function() {
        return Xh(this).eachBefore($h);
      }, [Symbol.iterator]: function* () {
        var t2, n2, e2, r2, i2 = this, o2 = [i2];
        do {
          for (t2 = o2.reverse(), o2 = []; i2 = t2.pop(); )
            if (yield i2, n2 = i2.children)
              for (e2 = 0, r2 = n2.length; e2 < r2; ++e2)
                o2.push(n2[e2]);
        } while (o2.length);
      }};
      var md = {depth: -1}, xd = {};
      function wd(t2) {
        return t2.id;
      }
      function Md(t2) {
        return t2.parentId;
      }
      function Ad(t2, n2) {
        return t2.parent === n2.parent ? 1 : 2;
      }
      function Td(t2) {
        var n2 = t2.children;
        return n2 ? n2[0] : t2.t;
      }
      function Sd(t2) {
        var n2 = t2.children;
        return n2 ? n2[n2.length - 1] : t2.t;
      }
      function Ed(t2, n2, e2) {
        var r2 = e2 / (n2.i - t2.i);
        n2.c -= r2, n2.s += e2, t2.c += r2, n2.z += e2, n2.m += e2;
      }
      function kd(t2, n2, e2) {
        return t2.a.parent === n2.parent ? t2.a : e2;
      }
      function Nd(t2, n2) {
        this._ = t2, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n2;
      }
      function Cd(t2, n2, e2, r2, i2) {
        for (var o2, a2 = t2.children, u2 = -1, c2 = a2.length, f2 = t2.value && (i2 - e2) / t2.value; ++u2 < c2; )
          (o2 = a2[u2]).x0 = n2, o2.x1 = r2, o2.y0 = e2, o2.y1 = e2 += o2.value * f2;
      }
      Nd.prototype = Object.create(Zh.prototype);
      var Pd = (1 + Math.sqrt(5)) / 2;
      function zd(t2, n2, e2, r2, i2, o2) {
        for (var a2, u2, c2, f2, s2, l2, h2, d2, p2, g2, y2, v2 = [], _2 = n2.children, b2 = 0, m2 = 0, x2 = _2.length, w2 = n2.value; b2 < x2; ) {
          c2 = i2 - e2, f2 = o2 - r2;
          do {
            s2 = _2[m2++].value;
          } while (!s2 && m2 < x2);
          for (l2 = h2 = s2, y2 = s2 * s2 * (g2 = Math.max(f2 / c2, c2 / f2) / (w2 * t2)), p2 = Math.max(h2 / y2, y2 / l2); m2 < x2; ++m2) {
            if (s2 += u2 = _2[m2].value, u2 < l2 && (l2 = u2), u2 > h2 && (h2 = u2), y2 = s2 * s2 * g2, (d2 = Math.max(h2 / y2, y2 / l2)) > p2) {
              s2 -= u2;
              break;
            }
            p2 = d2;
          }
          v2.push(a2 = {value: s2, dice: c2 < f2, children: _2.slice(b2, m2)}), a2.dice ? bd(a2, e2, r2, i2, w2 ? r2 += f2 * s2 / w2 : o2) : Cd(a2, e2, r2, w2 ? e2 += c2 * s2 / w2 : i2, o2), w2 -= s2, b2 = m2;
        }
        return v2;
      }
      var Dd = function t2(n2) {
        function e2(t3, e3, r2, i2, o2) {
          zd(n2, t3, e3, r2, i2, o2);
        }
        return e2.ratio = function(n3) {
          return t2((n3 = +n3) > 1 ? n3 : 1);
        }, e2;
      }(Pd);
      var qd = function t2(n2) {
        function e2(t3, e3, r2, i2, o2) {
          if ((a2 = t3._squarify) && a2.ratio === n2)
            for (var a2, u2, c2, f2, s2, l2 = -1, h2 = a2.length, d2 = t3.value; ++l2 < h2; ) {
              for (c2 = (u2 = a2[l2]).children, f2 = u2.value = 0, s2 = c2.length; f2 < s2; ++f2)
                u2.value += c2[f2].value;
              u2.dice ? bd(u2, e3, r2, i2, d2 ? r2 += (o2 - r2) * u2.value / d2 : o2) : Cd(u2, e3, r2, d2 ? e3 += (i2 - e3) * u2.value / d2 : i2, o2), d2 -= u2.value;
            }
          else
            t3._squarify = a2 = zd(n2, t3, e3, r2, i2, o2), a2.ratio = n2;
        }
        return e2.ratio = function(n3) {
          return t2((n3 = +n3) > 1 ? n3 : 1);
        }, e2;
      }(Pd);
      function Rd(t2, n2, e2) {
        return (n2[0] - t2[0]) * (e2[1] - t2[1]) - (n2[1] - t2[1]) * (e2[0] - t2[0]);
      }
      function Fd(t2, n2) {
        return t2[0] - n2[0] || t2[1] - n2[1];
      }
      function Od(t2) {
        const n2 = t2.length, e2 = [0, 1];
        let r2, i2 = 2;
        for (r2 = 2; r2 < n2; ++r2) {
          for (; i2 > 1 && Rd(t2[e2[i2 - 2]], t2[e2[i2 - 1]], t2[r2]) <= 0; )
            --i2;
          e2[i2++] = r2;
        }
        return e2.slice(0, i2);
      }
      var Ud = Math.random, Id = function t2(n2) {
        function e2(t3, e3) {
          return t3 = t3 == null ? 0 : +t3, e3 = e3 == null ? 1 : +e3, arguments.length === 1 ? (e3 = t3, t3 = 0) : e3 -= t3, function() {
            return n2() * e3 + t3;
          };
        }
        return e2.source = t2, e2;
      }(Ud), Bd = function t2(n2) {
        function e2(t3, e3) {
          return arguments.length < 2 && (e3 = t3, t3 = 0), t3 = Math.floor(t3), e3 = Math.floor(e3) - t3, function() {
            return Math.floor(n2() * e3 + t3);
          };
        }
        return e2.source = t2, e2;
      }(Ud), Yd = function t2(n2) {
        function e2(t3, e3) {
          var r2, i2;
          return t3 = t3 == null ? 0 : +t3, e3 = e3 == null ? 1 : +e3, function() {
            var o2;
            if (r2 != null)
              o2 = r2, r2 = null;
            else
              do {
                r2 = 2 * n2() - 1, o2 = 2 * n2() - 1, i2 = r2 * r2 + o2 * o2;
              } while (!i2 || i2 > 1);
            return t3 + e3 * o2 * Math.sqrt(-2 * Math.log(i2) / i2);
          };
        }
        return e2.source = t2, e2;
      }(Ud), Ld = function t2(n2) {
        var e2 = Yd.source(n2);
        function r2() {
          var t3 = e2.apply(this, arguments);
          return function() {
            return Math.exp(t3());
          };
        }
        return r2.source = t2, r2;
      }(Ud), jd = function t2(n2) {
        function e2(t3) {
          return (t3 = +t3) <= 0 ? () => 0 : function() {
            for (var e3 = 0, r2 = t3; r2 > 1; --r2)
              e3 += n2();
            return e3 + r2 * n2();
          };
        }
        return e2.source = t2, e2;
      }(Ud), Hd = function t2(n2) {
        var e2 = jd.source(n2);
        function r2(t3) {
          if ((t3 = +t3) == 0)
            return n2;
          var r3 = e2(t3);
          return function() {
            return r3() / t3;
          };
        }
        return r2.source = t2, r2;
      }(Ud), Xd = function t2(n2) {
        function e2(t3) {
          return function() {
            return -Math.log1p(-n2()) / t3;
          };
        }
        return e2.source = t2, e2;
      }(Ud), Gd = function t2(n2) {
        function e2(t3) {
          if ((t3 = +t3) < 0)
            throw new RangeError("invalid alpha");
          return t3 = 1 / -t3, function() {
            return Math.pow(1 - n2(), t3);
          };
        }
        return e2.source = t2, e2;
      }(Ud), Vd = function t2(n2) {
        function e2(t3) {
          if ((t3 = +t3) < 0 || t3 > 1)
            throw new RangeError("invalid p");
          return function() {
            return Math.floor(n2() + t3);
          };
        }
        return e2.source = t2, e2;
      }(Ud), $d = function t2(n2) {
        function e2(t3) {
          if ((t3 = +t3) < 0 || t3 > 1)
            throw new RangeError("invalid p");
          return t3 === 0 ? () => 1 / 0 : t3 === 1 ? () => 1 : (t3 = Math.log1p(-t3), function() {
            return 1 + Math.floor(Math.log1p(-n2()) / t3);
          });
        }
        return e2.source = t2, e2;
      }(Ud), Wd = function t2(n2) {
        var e2 = Yd.source(n2)();
        function r2(t3, r3) {
          if ((t3 = +t3) < 0)
            throw new RangeError("invalid k");
          if (t3 === 0)
            return () => 0;
          if (r3 = r3 == null ? 1 : +r3, t3 === 1)
            return () => -Math.log1p(-n2()) * r3;
          var i2 = (t3 < 1 ? t3 + 1 : t3) - 1 / 3, o2 = 1 / (3 * Math.sqrt(i2)), a2 = t3 < 1 ? () => Math.pow(n2(), 1 / t3) : () => 1;
          return function() {
            do {
              do {
                var t4 = e2(), u2 = 1 + o2 * t4;
              } while (u2 <= 0);
              u2 *= u2 * u2;
              var c2 = 1 - n2();
            } while (c2 >= 1 - 0.0331 * t4 * t4 * t4 * t4 && Math.log(c2) >= 0.5 * t4 * t4 + i2 * (1 - u2 + Math.log(u2)));
            return i2 * u2 * a2() * r3;
          };
        }
        return r2.source = t2, r2;
      }(Ud), Zd = function t2(n2) {
        var e2 = Wd.source(n2);
        function r2(t3, n3) {
          var r3 = e2(t3), i2 = e2(n3);
          return function() {
            var t4 = r3();
            return t4 === 0 ? 0 : t4 / (t4 + i2());
          };
        }
        return r2.source = t2, r2;
      }(Ud), Kd = function t2(n2) {
        var e2 = $d.source(n2), r2 = Zd.source(n2);
        function i2(t3, n3) {
          return t3 = +t3, (n3 = +n3) >= 1 ? () => t3 : n3 <= 0 ? () => 0 : function() {
            for (var i3 = 0, o2 = t3, a2 = n3; o2 * a2 > 16 && o2 * (1 - a2) > 16; ) {
              var u2 = Math.floor((o2 + 1) * a2), c2 = r2(u2, o2 - u2 + 1)();
              c2 <= a2 ? (i3 += u2, o2 -= u2, a2 = (a2 - c2) / (1 - c2)) : (o2 = u2 - 1, a2 /= c2);
            }
            for (var f2 = a2 < 0.5, s2 = e2(f2 ? a2 : 1 - a2), l2 = s2(), h2 = 0; l2 <= o2; ++h2)
              l2 += s2();
            return i3 + (f2 ? h2 : o2 - h2);
          };
        }
        return i2.source = t2, i2;
      }(Ud), Qd = function t2(n2) {
        function e2(t3, e3, r2) {
          var i2;
          return (t3 = +t3) == 0 ? i2 = (t4) => -Math.log(t4) : (t3 = 1 / t3, i2 = (n3) => Math.pow(n3, t3)), e3 = e3 == null ? 0 : +e3, r2 = r2 == null ? 1 : +r2, function() {
            return e3 + r2 * i2(-Math.log1p(-n2()));
          };
        }
        return e2.source = t2, e2;
      }(Ud), Jd = function t2(n2) {
        function e2(t3, e3) {
          return t3 = t3 == null ? 0 : +t3, e3 = e3 == null ? 1 : +e3, function() {
            return t3 + e3 * Math.tan(Math.PI * n2());
          };
        }
        return e2.source = t2, e2;
      }(Ud), tp = function t2(n2) {
        function e2(t3, e3) {
          return t3 = t3 == null ? 0 : +t3, e3 = e3 == null ? 1 : +e3, function() {
            var r2 = n2();
            return t3 + e3 * Math.log(r2 / (1 - r2));
          };
        }
        return e2.source = t2, e2;
      }(Ud), np = function t2(n2) {
        var e2 = Wd.source(n2), r2 = Kd.source(n2);
        function i2(t3) {
          return function() {
            for (var i3 = 0, o2 = t3; o2 > 16; ) {
              var a2 = Math.floor(0.875 * o2), u2 = e2(a2)();
              if (u2 > o2)
                return i3 + r2(a2 - 1, o2 / u2)();
              i3 += a2, o2 -= u2;
            }
            for (var c2 = -Math.log1p(-n2()), f2 = 0; c2 <= o2; ++f2)
              c2 -= Math.log1p(-n2());
            return i3 + f2;
          };
        }
        return i2.source = t2, i2;
      }(Ud);
      const ep = 1 / 4294967296;
      function rp(t2, n2) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t2);
            break;
          default:
            this.range(n2).domain(t2);
        }
        return this;
      }
      function ip(t2, n2) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            typeof t2 == "function" ? this.interpolator(t2) : this.range(t2);
            break;
          default:
            this.domain(t2), typeof n2 == "function" ? this.interpolator(n2) : this.range(n2);
        }
        return this;
      }
      const op = Symbol("implicit");
      function ap() {
        var t2 = new Map(), n2 = [], e2 = [], r2 = op;
        function i2(i3) {
          var o2 = i3 + "", a2 = t2.get(o2);
          if (!a2) {
            if (r2 !== op)
              return r2;
            t2.set(o2, a2 = n2.push(i3));
          }
          return e2[(a2 - 1) % e2.length];
        }
        return i2.domain = function(e3) {
          if (!arguments.length)
            return n2.slice();
          n2 = [], t2 = new Map();
          for (const r3 of e3) {
            const e4 = r3 + "";
            t2.has(e4) || t2.set(e4, n2.push(r3));
          }
          return i2;
        }, i2.range = function(t3) {
          return arguments.length ? (e2 = Array.from(t3), i2) : e2.slice();
        }, i2.unknown = function(t3) {
          return arguments.length ? (r2 = t3, i2) : r2;
        }, i2.copy = function() {
          return ap(n2, e2).unknown(r2);
        }, rp.apply(i2, arguments), i2;
      }
      function up() {
        var t2, n2, e2 = ap().unknown(void 0), r2 = e2.domain, i2 = e2.range, o2 = 0, a2 = 1, u2 = false, c2 = 0, f2 = 0, s2 = 0.5;
        function l2() {
          var e3 = r2().length, l3 = a2 < o2, h2 = l3 ? a2 : o2, d2 = l3 ? o2 : a2;
          t2 = (d2 - h2) / Math.max(1, e3 - c2 + 2 * f2), u2 && (t2 = Math.floor(t2)), h2 += (d2 - h2 - t2 * (e3 - c2)) * s2, n2 = t2 * (1 - c2), u2 && (h2 = Math.round(h2), n2 = Math.round(n2));
          var p2 = Z(e3).map(function(n3) {
            return h2 + t2 * n3;
          });
          return i2(l3 ? p2.reverse() : p2);
        }
        return delete e2.unknown, e2.domain = function(t3) {
          return arguments.length ? (r2(t3), l2()) : r2();
        }, e2.range = function(t3) {
          return arguments.length ? ([o2, a2] = t3, o2 = +o2, a2 = +a2, l2()) : [o2, a2];
        }, e2.rangeRound = function(t3) {
          return [o2, a2] = t3, o2 = +o2, a2 = +a2, u2 = true, l2();
        }, e2.bandwidth = function() {
          return n2;
        }, e2.step = function() {
          return t2;
        }, e2.round = function(t3) {
          return arguments.length ? (u2 = !!t3, l2()) : u2;
        }, e2.padding = function(t3) {
          return arguments.length ? (c2 = Math.min(1, f2 = +t3), l2()) : c2;
        }, e2.paddingInner = function(t3) {
          return arguments.length ? (c2 = Math.min(1, t3), l2()) : c2;
        }, e2.paddingOuter = function(t3) {
          return arguments.length ? (f2 = +t3, l2()) : f2;
        }, e2.align = function(t3) {
          return arguments.length ? (s2 = Math.max(0, Math.min(1, t3)), l2()) : s2;
        }, e2.copy = function() {
          return up(r2(), [o2, a2]).round(u2).paddingInner(c2).paddingOuter(f2).align(s2);
        }, rp.apply(l2(), arguments);
      }
      function cp(t2) {
        var n2 = t2.copy;
        return t2.padding = t2.paddingOuter, delete t2.paddingInner, delete t2.paddingOuter, t2.copy = function() {
          return cp(n2());
        }, t2;
      }
      function fp(t2) {
        return +t2;
      }
      var sp = [0, 1];
      function lp(t2) {
        return t2;
      }
      function hp(t2, n2) {
        return (n2 -= t2 = +t2) ? function(e2) {
          return (e2 - t2) / n2;
        } : function(t3) {
          return function() {
            return t3;
          };
        }(isNaN(n2) ? NaN : 0.5);
      }
      function dp(t2, n2, e2) {
        var r2 = t2[0], i2 = t2[1], o2 = n2[0], a2 = n2[1];
        return i2 < r2 ? (r2 = hp(i2, r2), o2 = e2(a2, o2)) : (r2 = hp(r2, i2), o2 = e2(o2, a2)), function(t3) {
          return o2(r2(t3));
        };
      }
      function pp(t2, n2, e2) {
        var r2 = Math.min(t2.length, n2.length) - 1, i2 = new Array(r2), a2 = new Array(r2), u2 = -1;
        for (t2[r2] < t2[0] && (t2 = t2.slice().reverse(), n2 = n2.slice().reverse()); ++u2 < r2; )
          i2[u2] = hp(t2[u2], t2[u2 + 1]), a2[u2] = e2(n2[u2], n2[u2 + 1]);
        return function(n3) {
          var e3 = o(t2, n3, 1, r2) - 1;
          return a2[e3](i2[e3](n3));
        };
      }
      function gp(t2, n2) {
        return n2.domain(t2.domain()).range(t2.range()).interpolate(t2.interpolate()).clamp(t2.clamp()).unknown(t2.unknown());
      }
      function yp() {
        var t2, n2, e2, r2, i2, o2, a2 = sp, u2 = sp, c2 = Mr, f2 = lp;
        function s2() {
          var t3 = Math.min(a2.length, u2.length);
          return f2 !== lp && (f2 = function(t4, n3) {
            var e3;
            return t4 > n3 && (e3 = t4, t4 = n3, n3 = e3), function(e4) {
              return Math.max(t4, Math.min(n3, e4));
            };
          }(a2[0], a2[t3 - 1])), r2 = t3 > 2 ? pp : dp, i2 = o2 = null, l2;
        }
        function l2(n3) {
          return isNaN(n3 = +n3) ? e2 : (i2 || (i2 = r2(a2.map(t2), u2, c2)))(t2(f2(n3)));
        }
        return l2.invert = function(e3) {
          return f2(n2((o2 || (o2 = r2(u2, a2.map(t2), _r)))(e3)));
        }, l2.domain = function(t3) {
          return arguments.length ? (a2 = Array.from(t3, fp), s2()) : a2.slice();
        }, l2.range = function(t3) {
          return arguments.length ? (u2 = Array.from(t3), s2()) : u2.slice();
        }, l2.rangeRound = function(t3) {
          return u2 = Array.from(t3), c2 = Ar, s2();
        }, l2.clamp = function(t3) {
          return arguments.length ? (f2 = !!t3 || lp, s2()) : f2 !== lp;
        }, l2.interpolate = function(t3) {
          return arguments.length ? (c2 = t3, s2()) : c2;
        }, l2.unknown = function(t3) {
          return arguments.length ? (e2 = t3, l2) : e2;
        }, function(e3, r3) {
          return t2 = e3, n2 = r3, s2();
        };
      }
      function vp() {
        return yp()(lp, lp);
      }
      function _p(n2, e2, r2, i2) {
        var o2, a2 = F(n2, e2, r2);
        switch ((i2 = ac(i2 == null ? ",f" : i2)).type) {
          case "s":
            var u2 = Math.max(Math.abs(n2), Math.abs(e2));
            return i2.precision != null || isNaN(o2 = vc(a2, u2)) || (i2.precision = o2), t.formatPrefix(i2, u2);
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            i2.precision != null || isNaN(o2 = _c(a2, Math.max(Math.abs(n2), Math.abs(e2)))) || (i2.precision = o2 - (i2.type === "e"));
            break;
          case "f":
          case "%":
            i2.precision != null || isNaN(o2 = yc(a2)) || (i2.precision = o2 - 2 * (i2.type === "%"));
        }
        return t.format(i2);
      }
      function bp(t2) {
        var n2 = t2.domain;
        return t2.ticks = function(t3) {
          var e2 = n2();
          return q(e2[0], e2[e2.length - 1], t3 == null ? 10 : t3);
        }, t2.tickFormat = function(t3, e2) {
          var r2 = n2();
          return _p(r2[0], r2[r2.length - 1], t3 == null ? 10 : t3, e2);
        }, t2.nice = function(e2) {
          e2 == null && (e2 = 10);
          var r2, i2, o2 = n2(), a2 = 0, u2 = o2.length - 1, c2 = o2[a2], f2 = o2[u2], s2 = 10;
          for (f2 < c2 && (i2 = c2, c2 = f2, f2 = i2, i2 = a2, a2 = u2, u2 = i2); s2-- > 0; ) {
            if ((i2 = R(c2, f2, e2)) === r2)
              return o2[a2] = c2, o2[u2] = f2, n2(o2);
            if (i2 > 0)
              c2 = Math.floor(c2 / i2) * i2, f2 = Math.ceil(f2 / i2) * i2;
            else {
              if (!(i2 < 0))
                break;
              c2 = Math.ceil(c2 * i2) / i2, f2 = Math.floor(f2 * i2) / i2;
            }
            r2 = i2;
          }
          return t2;
        }, t2;
      }
      function mp(t2, n2) {
        var e2, r2 = 0, i2 = (t2 = t2.slice()).length - 1, o2 = t2[r2], a2 = t2[i2];
        return a2 < o2 && (e2 = r2, r2 = i2, i2 = e2, e2 = o2, o2 = a2, a2 = e2), t2[r2] = n2.floor(o2), t2[i2] = n2.ceil(a2), t2;
      }
      function xp(t2) {
        return Math.log(t2);
      }
      function wp(t2) {
        return Math.exp(t2);
      }
      function Mp(t2) {
        return -Math.log(-t2);
      }
      function Ap(t2) {
        return -Math.exp(-t2);
      }
      function Tp(t2) {
        return isFinite(t2) ? +("1e" + t2) : t2 < 0 ? 0 : t2;
      }
      function Sp(t2) {
        return function(n2) {
          return -t2(-n2);
        };
      }
      function Ep(n2) {
        var e2, r2, i2 = n2(xp, wp), o2 = i2.domain, a2 = 10;
        function u2() {
          return e2 = function(t2) {
            return t2 === Math.E ? Math.log : t2 === 10 && Math.log10 || t2 === 2 && Math.log2 || (t2 = Math.log(t2), function(n3) {
              return Math.log(n3) / t2;
            });
          }(a2), r2 = function(t2) {
            return t2 === 10 ? Tp : t2 === Math.E ? Math.exp : function(n3) {
              return Math.pow(t2, n3);
            };
          }(a2), o2()[0] < 0 ? (e2 = Sp(e2), r2 = Sp(r2), n2(Mp, Ap)) : n2(xp, wp), i2;
        }
        return i2.base = function(t2) {
          return arguments.length ? (a2 = +t2, u2()) : a2;
        }, i2.domain = function(t2) {
          return arguments.length ? (o2(t2), u2()) : o2();
        }, i2.ticks = function(t2) {
          var n3, i3 = o2(), u3 = i3[0], c2 = i3[i3.length - 1];
          (n3 = c2 < u3) && (h2 = u3, u3 = c2, c2 = h2);
          var f2, s2, l2, h2 = e2(u3), d2 = e2(c2), p2 = t2 == null ? 10 : +t2, g2 = [];
          if (!(a2 % 1) && d2 - h2 < p2) {
            if (h2 = Math.floor(h2), d2 = Math.ceil(d2), u3 > 0) {
              for (; h2 <= d2; ++h2)
                for (s2 = 1, f2 = r2(h2); s2 < a2; ++s2)
                  if (!((l2 = f2 * s2) < u3)) {
                    if (l2 > c2)
                      break;
                    g2.push(l2);
                  }
            } else
              for (; h2 <= d2; ++h2)
                for (s2 = a2 - 1, f2 = r2(h2); s2 >= 1; --s2)
                  if (!((l2 = f2 * s2) < u3)) {
                    if (l2 > c2)
                      break;
                    g2.push(l2);
                  }
            2 * g2.length < p2 && (g2 = q(u3, c2, p2));
          } else
            g2 = q(h2, d2, Math.min(d2 - h2, p2)).map(r2);
          return n3 ? g2.reverse() : g2;
        }, i2.tickFormat = function(n3, o3) {
          if (o3 == null && (o3 = a2 === 10 ? ".0e" : ","), typeof o3 != "function" && (o3 = t.format(o3)), n3 === 1 / 0)
            return o3;
          n3 == null && (n3 = 10);
          var u3 = Math.max(1, a2 * n3 / i2.ticks().length);
          return function(t2) {
            var n4 = t2 / r2(Math.round(e2(t2)));
            return n4 * a2 < a2 - 0.5 && (n4 *= a2), n4 <= u3 ? o3(t2) : "";
          };
        }, i2.nice = function() {
          return o2(mp(o2(), {floor: function(t2) {
            return r2(Math.floor(e2(t2)));
          }, ceil: function(t2) {
            return r2(Math.ceil(e2(t2)));
          }}));
        }, i2;
      }
      function kp(t2) {
        return function(n2) {
          return Math.sign(n2) * Math.log1p(Math.abs(n2 / t2));
        };
      }
      function Np(t2) {
        return function(n2) {
          return Math.sign(n2) * Math.expm1(Math.abs(n2)) * t2;
        };
      }
      function Cp(t2) {
        var n2 = 1, e2 = t2(kp(n2), Np(n2));
        return e2.constant = function(e3) {
          return arguments.length ? t2(kp(n2 = +e3), Np(n2)) : n2;
        }, bp(e2);
      }
      function Pp(t2) {
        return function(n2) {
          return n2 < 0 ? -Math.pow(-n2, t2) : Math.pow(n2, t2);
        };
      }
      function zp(t2) {
        return t2 < 0 ? -Math.sqrt(-t2) : Math.sqrt(t2);
      }
      function Dp(t2) {
        return t2 < 0 ? -t2 * t2 : t2 * t2;
      }
      function qp(t2) {
        var n2 = t2(lp, lp), e2 = 1;
        function r2() {
          return e2 === 1 ? t2(lp, lp) : e2 === 0.5 ? t2(zp, Dp) : t2(Pp(e2), Pp(1 / e2));
        }
        return n2.exponent = function(t3) {
          return arguments.length ? (e2 = +t3, r2()) : e2;
        }, bp(n2);
      }
      function Rp() {
        var t2 = qp(yp());
        return t2.copy = function() {
          return gp(t2, Rp()).exponent(t2.exponent());
        }, rp.apply(t2, arguments), t2;
      }
      function Fp(t2) {
        return Math.sign(t2) * t2 * t2;
      }
      function Op(t2) {
        return Math.sign(t2) * Math.sqrt(Math.abs(t2));
      }
      var Up = new Date(), Ip = new Date();
      function Bp(t2, n2, e2, r2) {
        function i2(n3) {
          return t2(n3 = arguments.length === 0 ? new Date() : new Date(+n3)), n3;
        }
        return i2.floor = function(n3) {
          return t2(n3 = new Date(+n3)), n3;
        }, i2.ceil = function(e3) {
          return t2(e3 = new Date(e3 - 1)), n2(e3, 1), t2(e3), e3;
        }, i2.round = function(t3) {
          var n3 = i2(t3), e3 = i2.ceil(t3);
          return t3 - n3 < e3 - t3 ? n3 : e3;
        }, i2.offset = function(t3, e3) {
          return n2(t3 = new Date(+t3), e3 == null ? 1 : Math.floor(e3)), t3;
        }, i2.range = function(e3, r3, o2) {
          var a2, u2 = [];
          if (e3 = i2.ceil(e3), o2 = o2 == null ? 1 : Math.floor(o2), !(e3 < r3 && o2 > 0))
            return u2;
          do {
            u2.push(a2 = new Date(+e3)), n2(e3, o2), t2(e3);
          } while (a2 < e3 && e3 < r3);
          return u2;
        }, i2.filter = function(e3) {
          return Bp(function(n3) {
            if (n3 >= n3)
              for (; t2(n3), !e3(n3); )
                n3.setTime(n3 - 1);
          }, function(t3, r3) {
            if (t3 >= t3)
              if (r3 < 0)
                for (; ++r3 <= 0; )
                  for (; n2(t3, -1), !e3(t3); )
                    ;
              else
                for (; --r3 >= 0; )
                  for (; n2(t3, 1), !e3(t3); )
                    ;
          });
        }, e2 && (i2.count = function(n3, r3) {
          return Up.setTime(+n3), Ip.setTime(+r3), t2(Up), t2(Ip), Math.floor(e2(Up, Ip));
        }, i2.every = function(t3) {
          return t3 = Math.floor(t3), isFinite(t3) && t3 > 0 ? t3 > 1 ? i2.filter(r2 ? function(n3) {
            return r2(n3) % t3 == 0;
          } : function(n3) {
            return i2.count(0, n3) % t3 == 0;
          }) : i2 : null;
        }), i2;
      }
      var Yp = Bp(function() {
      }, function(t2, n2) {
        t2.setTime(+t2 + n2);
      }, function(t2, n2) {
        return n2 - t2;
      });
      Yp.every = function(t2) {
        return t2 = Math.floor(t2), isFinite(t2) && t2 > 0 ? t2 > 1 ? Bp(function(n2) {
          n2.setTime(Math.floor(n2 / t2) * t2);
        }, function(n2, e2) {
          n2.setTime(+n2 + e2 * t2);
        }, function(n2, e2) {
          return (e2 - n2) / t2;
        }) : Yp : null;
      };
      var Lp = Yp.range, jp = 1e3, Hp = 6e4, Xp = 36e5, Gp = 864e5, Vp = 6048e5, $p = Bp(function(t2) {
        t2.setTime(t2 - t2.getMilliseconds());
      }, function(t2, n2) {
        t2.setTime(+t2 + n2 * jp);
      }, function(t2, n2) {
        return (n2 - t2) / jp;
      }, function(t2) {
        return t2.getUTCSeconds();
      }), Wp = $p.range, Zp = Bp(function(t2) {
        t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * jp);
      }, function(t2, n2) {
        t2.setTime(+t2 + n2 * Hp);
      }, function(t2, n2) {
        return (n2 - t2) / Hp;
      }, function(t2) {
        return t2.getMinutes();
      }), Kp = Zp.range, Qp = Bp(function(t2) {
        t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * jp - t2.getMinutes() * Hp);
      }, function(t2, n2) {
        t2.setTime(+t2 + n2 * Xp);
      }, function(t2, n2) {
        return (n2 - t2) / Xp;
      }, function(t2) {
        return t2.getHours();
      }), Jp = Qp.range, tg = Bp((t2) => t2.setHours(0, 0, 0, 0), (t2, n2) => t2.setDate(t2.getDate() + n2), (t2, n2) => (n2 - t2 - (n2.getTimezoneOffset() - t2.getTimezoneOffset()) * Hp) / Gp, (t2) => t2.getDate() - 1), ng = tg.range;
      function eg(t2) {
        return Bp(function(n2) {
          n2.setDate(n2.getDate() - (n2.getDay() + 7 - t2) % 7), n2.setHours(0, 0, 0, 0);
        }, function(t3, n2) {
          t3.setDate(t3.getDate() + 7 * n2);
        }, function(t3, n2) {
          return (n2 - t3 - (n2.getTimezoneOffset() - t3.getTimezoneOffset()) * Hp) / Vp;
        });
      }
      var rg = eg(0), ig = eg(1), og = eg(2), ag = eg(3), ug = eg(4), cg = eg(5), fg = eg(6), sg = rg.range, lg = ig.range, hg = og.range, dg = ag.range, pg = ug.range, gg = cg.range, yg = fg.range, vg = Bp(function(t2) {
        t2.setDate(1), t2.setHours(0, 0, 0, 0);
      }, function(t2, n2) {
        t2.setMonth(t2.getMonth() + n2);
      }, function(t2, n2) {
        return n2.getMonth() - t2.getMonth() + 12 * (n2.getFullYear() - t2.getFullYear());
      }, function(t2) {
        return t2.getMonth();
      }), _g = vg.range, bg = Bp(function(t2) {
        t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
      }, function(t2, n2) {
        t2.setFullYear(t2.getFullYear() + n2);
      }, function(t2, n2) {
        return n2.getFullYear() - t2.getFullYear();
      }, function(t2) {
        return t2.getFullYear();
      });
      bg.every = function(t2) {
        return isFinite(t2 = Math.floor(t2)) && t2 > 0 ? Bp(function(n2) {
          n2.setFullYear(Math.floor(n2.getFullYear() / t2) * t2), n2.setMonth(0, 1), n2.setHours(0, 0, 0, 0);
        }, function(n2, e2) {
          n2.setFullYear(n2.getFullYear() + e2 * t2);
        }) : null;
      };
      var mg = bg.range, xg = Bp(function(t2) {
        t2.setUTCSeconds(0, 0);
      }, function(t2, n2) {
        t2.setTime(+t2 + n2 * Hp);
      }, function(t2, n2) {
        return (n2 - t2) / Hp;
      }, function(t2) {
        return t2.getUTCMinutes();
      }), wg = xg.range, Mg = Bp(function(t2) {
        t2.setUTCMinutes(0, 0, 0);
      }, function(t2, n2) {
        t2.setTime(+t2 + n2 * Xp);
      }, function(t2, n2) {
        return (n2 - t2) / Xp;
      }, function(t2) {
        return t2.getUTCHours();
      }), Ag = Mg.range, Tg = Bp(function(t2) {
        t2.setUTCHours(0, 0, 0, 0);
      }, function(t2, n2) {
        t2.setUTCDate(t2.getUTCDate() + n2);
      }, function(t2, n2) {
        return (n2 - t2) / Gp;
      }, function(t2) {
        return t2.getUTCDate() - 1;
      }), Sg = Tg.range;
      function Eg(t2) {
        return Bp(function(n2) {
          n2.setUTCDate(n2.getUTCDate() - (n2.getUTCDay() + 7 - t2) % 7), n2.setUTCHours(0, 0, 0, 0);
        }, function(t3, n2) {
          t3.setUTCDate(t3.getUTCDate() + 7 * n2);
        }, function(t3, n2) {
          return (n2 - t3) / Vp;
        });
      }
      var kg = Eg(0), Ng = Eg(1), Cg = Eg(2), Pg = Eg(3), zg = Eg(4), Dg = Eg(5), qg = Eg(6), Rg = kg.range, Fg = Ng.range, Og = Cg.range, Ug = Pg.range, Ig = zg.range, Bg = Dg.range, Yg = qg.range, Lg = Bp(function(t2) {
        t2.setUTCDate(1), t2.setUTCHours(0, 0, 0, 0);
      }, function(t2, n2) {
        t2.setUTCMonth(t2.getUTCMonth() + n2);
      }, function(t2, n2) {
        return n2.getUTCMonth() - t2.getUTCMonth() + 12 * (n2.getUTCFullYear() - t2.getUTCFullYear());
      }, function(t2) {
        return t2.getUTCMonth();
      }), jg = Lg.range, Hg = Bp(function(t2) {
        t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
      }, function(t2, n2) {
        t2.setUTCFullYear(t2.getUTCFullYear() + n2);
      }, function(t2, n2) {
        return n2.getUTCFullYear() - t2.getUTCFullYear();
      }, function(t2) {
        return t2.getUTCFullYear();
      });
      Hg.every = function(t2) {
        return isFinite(t2 = Math.floor(t2)) && t2 > 0 ? Bp(function(n2) {
          n2.setUTCFullYear(Math.floor(n2.getUTCFullYear() / t2) * t2), n2.setUTCMonth(0, 1), n2.setUTCHours(0, 0, 0, 0);
        }, function(n2, e2) {
          n2.setUTCFullYear(n2.getUTCFullYear() + e2 * t2);
        }) : null;
      };
      var Xg = Hg.range;
      function Gg(t2) {
        if (0 <= t2.y && t2.y < 100) {
          var n2 = new Date(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
          return n2.setFullYear(t2.y), n2;
        }
        return new Date(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
      }
      function Vg(t2) {
        if (0 <= t2.y && t2.y < 100) {
          var n2 = new Date(Date.UTC(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
          return n2.setUTCFullYear(t2.y), n2;
        }
        return new Date(Date.UTC(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
      }
      function $g(t2, n2, e2) {
        return {y: t2, m: n2, d: e2, H: 0, M: 0, S: 0, L: 0};
      }
      function Wg(t2) {
        var n2 = t2.dateTime, e2 = t2.date, r2 = t2.time, i2 = t2.periods, o2 = t2.days, a2 = t2.shortDays, u2 = t2.months, c2 = t2.shortMonths, f2 = ry(i2), s2 = iy(i2), l2 = ry(o2), h2 = iy(o2), d2 = ry(a2), p2 = iy(a2), g2 = ry(u2), y2 = iy(u2), v2 = ry(c2), _2 = iy(c2), b2 = {a: function(t3) {
          return a2[t3.getDay()];
        }, A: function(t3) {
          return o2[t3.getDay()];
        }, b: function(t3) {
          return c2[t3.getMonth()];
        }, B: function(t3) {
          return u2[t3.getMonth()];
        }, c: null, d: Ty, e: Ty, f: Cy, g: Yy, G: jy, H: Sy, I: Ey, j: ky, L: Ny, m: Py, M: zy, p: function(t3) {
          return i2[+(t3.getHours() >= 12)];
        }, q: function(t3) {
          return 1 + ~~(t3.getMonth() / 3);
        }, Q: hv, s: dv, S: Dy, u: qy, U: Ry, V: Oy, w: Uy, W: Iy, x: null, X: null, y: By, Y: Ly, Z: Hy, "%": lv}, m2 = {a: function(t3) {
          return a2[t3.getUTCDay()];
        }, A: function(t3) {
          return o2[t3.getUTCDay()];
        }, b: function(t3) {
          return c2[t3.getUTCMonth()];
        }, B: function(t3) {
          return u2[t3.getUTCMonth()];
        }, c: null, d: Xy, e: Xy, f: Zy, g: uv, G: fv, H: Gy, I: Vy, j: $y, L: Wy, m: Ky, M: Qy, p: function(t3) {
          return i2[+(t3.getUTCHours() >= 12)];
        }, q: function(t3) {
          return 1 + ~~(t3.getUTCMonth() / 3);
        }, Q: hv, s: dv, S: Jy, u: tv, U: nv, V: rv, w: iv, W: ov, x: null, X: null, y: av, Y: cv, Z: sv, "%": lv}, x2 = {a: function(t3, n3, e3) {
          var r3 = d2.exec(n3.slice(e3));
          return r3 ? (t3.w = p2.get(r3[0].toLowerCase()), e3 + r3[0].length) : -1;
        }, A: function(t3, n3, e3) {
          var r3 = l2.exec(n3.slice(e3));
          return r3 ? (t3.w = h2.get(r3[0].toLowerCase()), e3 + r3[0].length) : -1;
        }, b: function(t3, n3, e3) {
          var r3 = v2.exec(n3.slice(e3));
          return r3 ? (t3.m = _2.get(r3[0].toLowerCase()), e3 + r3[0].length) : -1;
        }, B: function(t3, n3, e3) {
          var r3 = g2.exec(n3.slice(e3));
          return r3 ? (t3.m = y2.get(r3[0].toLowerCase()), e3 + r3[0].length) : -1;
        }, c: function(t3, e3, r3) {
          return A2(t3, n2, e3, r3);
        }, d: gy, e: gy, f: xy, g: ly, G: sy, H: vy, I: vy, j: yy, L: my, m: py, M: _y, p: function(t3, n3, e3) {
          var r3 = f2.exec(n3.slice(e3));
          return r3 ? (t3.p = s2.get(r3[0].toLowerCase()), e3 + r3[0].length) : -1;
        }, q: dy, Q: My, s: Ay, S: by, u: ay, U: uy, V: cy, w: oy, W: fy, x: function(t3, n3, r3) {
          return A2(t3, e2, n3, r3);
        }, X: function(t3, n3, e3) {
          return A2(t3, r2, n3, e3);
        }, y: ly, Y: sy, Z: hy, "%": wy};
        function w2(t3, n3) {
          return function(e3) {
            var r3, i3, o3, a3 = [], u3 = -1, c3 = 0, f3 = t3.length;
            for (e3 instanceof Date || (e3 = new Date(+e3)); ++u3 < f3; )
              t3.charCodeAt(u3) === 37 && (a3.push(t3.slice(c3, u3)), (i3 = Kg[r3 = t3.charAt(++u3)]) != null ? r3 = t3.charAt(++u3) : i3 = r3 === "e" ? " " : "0", (o3 = n3[r3]) && (r3 = o3(e3, i3)), a3.push(r3), c3 = u3 + 1);
            return a3.push(t3.slice(c3, u3)), a3.join("");
          };
        }
        function M2(t3, n3) {
          return function(e3) {
            var r3, i3, o3 = $g(1900, void 0, 1);
            if (A2(o3, t3, e3 += "", 0) != e3.length)
              return null;
            if ("Q" in o3)
              return new Date(o3.Q);
            if ("s" in o3)
              return new Date(1e3 * o3.s + ("L" in o3 ? o3.L : 0));
            if (n3 && !("Z" in o3) && (o3.Z = 0), "p" in o3 && (o3.H = o3.H % 12 + 12 * o3.p), o3.m === void 0 && (o3.m = "q" in o3 ? o3.q : 0), "V" in o3) {
              if (o3.V < 1 || o3.V > 53)
                return null;
              "w" in o3 || (o3.w = 1), "Z" in o3 ? (i3 = (r3 = Vg($g(o3.y, 0, 1))).getUTCDay(), r3 = i3 > 4 || i3 === 0 ? Ng.ceil(r3) : Ng(r3), r3 = Tg.offset(r3, 7 * (o3.V - 1)), o3.y = r3.getUTCFullYear(), o3.m = r3.getUTCMonth(), o3.d = r3.getUTCDate() + (o3.w + 6) % 7) : (i3 = (r3 = Gg($g(o3.y, 0, 1))).getDay(), r3 = i3 > 4 || i3 === 0 ? ig.ceil(r3) : ig(r3), r3 = tg.offset(r3, 7 * (o3.V - 1)), o3.y = r3.getFullYear(), o3.m = r3.getMonth(), o3.d = r3.getDate() + (o3.w + 6) % 7);
            } else
              ("W" in o3 || "U" in o3) && ("w" in o3 || (o3.w = "u" in o3 ? o3.u % 7 : "W" in o3 ? 1 : 0), i3 = "Z" in o3 ? Vg($g(o3.y, 0, 1)).getUTCDay() : Gg($g(o3.y, 0, 1)).getDay(), o3.m = 0, o3.d = "W" in o3 ? (o3.w + 6) % 7 + 7 * o3.W - (i3 + 5) % 7 : o3.w + 7 * o3.U - (i3 + 6) % 7);
            return "Z" in o3 ? (o3.H += o3.Z / 100 | 0, o3.M += o3.Z % 100, Vg(o3)) : Gg(o3);
          };
        }
        function A2(t3, n3, e3, r3) {
          for (var i3, o3, a3 = 0, u3 = n3.length, c3 = e3.length; a3 < u3; ) {
            if (r3 >= c3)
              return -1;
            if ((i3 = n3.charCodeAt(a3++)) === 37) {
              if (i3 = n3.charAt(a3++), !(o3 = x2[i3 in Kg ? n3.charAt(a3++) : i3]) || (r3 = o3(t3, e3, r3)) < 0)
                return -1;
            } else if (i3 != e3.charCodeAt(r3++))
              return -1;
          }
          return r3;
        }
        return b2.x = w2(e2, b2), b2.X = w2(r2, b2), b2.c = w2(n2, b2), m2.x = w2(e2, m2), m2.X = w2(r2, m2), m2.c = w2(n2, m2), {format: function(t3) {
          var n3 = w2(t3 += "", b2);
          return n3.toString = function() {
            return t3;
          }, n3;
        }, parse: function(t3) {
          var n3 = M2(t3 += "", false);
          return n3.toString = function() {
            return t3;
          }, n3;
        }, utcFormat: function(t3) {
          var n3 = w2(t3 += "", m2);
          return n3.toString = function() {
            return t3;
          }, n3;
        }, utcParse: function(t3) {
          var n3 = M2(t3 += "", true);
          return n3.toString = function() {
            return t3;
          }, n3;
        }};
      }
      var Zg, Kg = {"-": "", _: " ", 0: "0"}, Qg = /^\s*\d+/, Jg = /^%/, ty = /[\\^$*+?|[\]().{}]/g;
      function ny(t2, n2, e2) {
        var r2 = t2 < 0 ? "-" : "", i2 = (r2 ? -t2 : t2) + "", o2 = i2.length;
        return r2 + (o2 < e2 ? new Array(e2 - o2 + 1).join(n2) + i2 : i2);
      }
      function ey(t2) {
        return t2.replace(ty, "\\$&");
      }
      function ry(t2) {
        return new RegExp("^(?:" + t2.map(ey).join("|") + ")", "i");
      }
      function iy(t2) {
        return new Map(t2.map((t3, n2) => [t3.toLowerCase(), n2]));
      }
      function oy(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 1));
        return r2 ? (t2.w = +r2[0], e2 + r2[0].length) : -1;
      }
      function ay(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 1));
        return r2 ? (t2.u = +r2[0], e2 + r2[0].length) : -1;
      }
      function uy(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.U = +r2[0], e2 + r2[0].length) : -1;
      }
      function cy(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.V = +r2[0], e2 + r2[0].length) : -1;
      }
      function fy(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.W = +r2[0], e2 + r2[0].length) : -1;
      }
      function sy(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 4));
        return r2 ? (t2.y = +r2[0], e2 + r2[0].length) : -1;
      }
      function ly(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.y = +r2[0] + (+r2[0] > 68 ? 1900 : 2e3), e2 + r2[0].length) : -1;
      }
      function hy(t2, n2, e2) {
        var r2 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n2.slice(e2, e2 + 6));
        return r2 ? (t2.Z = r2[1] ? 0 : -(r2[2] + (r2[3] || "00")), e2 + r2[0].length) : -1;
      }
      function dy(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 1));
        return r2 ? (t2.q = 3 * r2[0] - 3, e2 + r2[0].length) : -1;
      }
      function py(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.m = r2[0] - 1, e2 + r2[0].length) : -1;
      }
      function gy(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.d = +r2[0], e2 + r2[0].length) : -1;
      }
      function yy(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 3));
        return r2 ? (t2.m = 0, t2.d = +r2[0], e2 + r2[0].length) : -1;
      }
      function vy(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.H = +r2[0], e2 + r2[0].length) : -1;
      }
      function _y(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.M = +r2[0], e2 + r2[0].length) : -1;
      }
      function by(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 2));
        return r2 ? (t2.S = +r2[0], e2 + r2[0].length) : -1;
      }
      function my(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 3));
        return r2 ? (t2.L = +r2[0], e2 + r2[0].length) : -1;
      }
      function xy(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2, e2 + 6));
        return r2 ? (t2.L = Math.floor(r2[0] / 1e3), e2 + r2[0].length) : -1;
      }
      function wy(t2, n2, e2) {
        var r2 = Jg.exec(n2.slice(e2, e2 + 1));
        return r2 ? e2 + r2[0].length : -1;
      }
      function My(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2));
        return r2 ? (t2.Q = +r2[0], e2 + r2[0].length) : -1;
      }
      function Ay(t2, n2, e2) {
        var r2 = Qg.exec(n2.slice(e2));
        return r2 ? (t2.s = +r2[0], e2 + r2[0].length) : -1;
      }
      function Ty(t2, n2) {
        return ny(t2.getDate(), n2, 2);
      }
      function Sy(t2, n2) {
        return ny(t2.getHours(), n2, 2);
      }
      function Ey(t2, n2) {
        return ny(t2.getHours() % 12 || 12, n2, 2);
      }
      function ky(t2, n2) {
        return ny(1 + tg.count(bg(t2), t2), n2, 3);
      }
      function Ny(t2, n2) {
        return ny(t2.getMilliseconds(), n2, 3);
      }
      function Cy(t2, n2) {
        return Ny(t2, n2) + "000";
      }
      function Py(t2, n2) {
        return ny(t2.getMonth() + 1, n2, 2);
      }
      function zy(t2, n2) {
        return ny(t2.getMinutes(), n2, 2);
      }
      function Dy(t2, n2) {
        return ny(t2.getSeconds(), n2, 2);
      }
      function qy(t2) {
        var n2 = t2.getDay();
        return n2 === 0 ? 7 : n2;
      }
      function Ry(t2, n2) {
        return ny(rg.count(bg(t2) - 1, t2), n2, 2);
      }
      function Fy(t2) {
        var n2 = t2.getDay();
        return n2 >= 4 || n2 === 0 ? ug(t2) : ug.ceil(t2);
      }
      function Oy(t2, n2) {
        return t2 = Fy(t2), ny(ug.count(bg(t2), t2) + (bg(t2).getDay() === 4), n2, 2);
      }
      function Uy(t2) {
        return t2.getDay();
      }
      function Iy(t2, n2) {
        return ny(ig.count(bg(t2) - 1, t2), n2, 2);
      }
      function By(t2, n2) {
        return ny(t2.getFullYear() % 100, n2, 2);
      }
      function Yy(t2, n2) {
        return ny((t2 = Fy(t2)).getFullYear() % 100, n2, 2);
      }
      function Ly(t2, n2) {
        return ny(t2.getFullYear() % 1e4, n2, 4);
      }
      function jy(t2, n2) {
        var e2 = t2.getDay();
        return ny((t2 = e2 >= 4 || e2 === 0 ? ug(t2) : ug.ceil(t2)).getFullYear() % 1e4, n2, 4);
      }
      function Hy(t2) {
        var n2 = t2.getTimezoneOffset();
        return (n2 > 0 ? "-" : (n2 *= -1, "+")) + ny(n2 / 60 | 0, "0", 2) + ny(n2 % 60, "0", 2);
      }
      function Xy(t2, n2) {
        return ny(t2.getUTCDate(), n2, 2);
      }
      function Gy(t2, n2) {
        return ny(t2.getUTCHours(), n2, 2);
      }
      function Vy(t2, n2) {
        return ny(t2.getUTCHours() % 12 || 12, n2, 2);
      }
      function $y(t2, n2) {
        return ny(1 + Tg.count(Hg(t2), t2), n2, 3);
      }
      function Wy(t2, n2) {
        return ny(t2.getUTCMilliseconds(), n2, 3);
      }
      function Zy(t2, n2) {
        return Wy(t2, n2) + "000";
      }
      function Ky(t2, n2) {
        return ny(t2.getUTCMonth() + 1, n2, 2);
      }
      function Qy(t2, n2) {
        return ny(t2.getUTCMinutes(), n2, 2);
      }
      function Jy(t2, n2) {
        return ny(t2.getUTCSeconds(), n2, 2);
      }
      function tv(t2) {
        var n2 = t2.getUTCDay();
        return n2 === 0 ? 7 : n2;
      }
      function nv(t2, n2) {
        return ny(kg.count(Hg(t2) - 1, t2), n2, 2);
      }
      function ev(t2) {
        var n2 = t2.getUTCDay();
        return n2 >= 4 || n2 === 0 ? zg(t2) : zg.ceil(t2);
      }
      function rv(t2, n2) {
        return t2 = ev(t2), ny(zg.count(Hg(t2), t2) + (Hg(t2).getUTCDay() === 4), n2, 2);
      }
      function iv(t2) {
        return t2.getUTCDay();
      }
      function ov(t2, n2) {
        return ny(Ng.count(Hg(t2) - 1, t2), n2, 2);
      }
      function av(t2, n2) {
        return ny(t2.getUTCFullYear() % 100, n2, 2);
      }
      function uv(t2, n2) {
        return ny((t2 = ev(t2)).getUTCFullYear() % 100, n2, 2);
      }
      function cv(t2, n2) {
        return ny(t2.getUTCFullYear() % 1e4, n2, 4);
      }
      function fv(t2, n2) {
        var e2 = t2.getUTCDay();
        return ny((t2 = e2 >= 4 || e2 === 0 ? zg(t2) : zg.ceil(t2)).getUTCFullYear() % 1e4, n2, 4);
      }
      function sv() {
        return "+0000";
      }
      function lv() {
        return "%";
      }
      function hv(t2) {
        return +t2;
      }
      function dv(t2) {
        return Math.floor(+t2 / 1e3);
      }
      function pv(n2) {
        return Zg = Wg(n2), t.timeFormat = Zg.format, t.timeParse = Zg.parse, t.utcFormat = Zg.utcFormat, t.utcParse = Zg.utcParse, Zg;
      }
      pv({dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]});
      var gv = "%Y-%m-%dT%H:%M:%S.%LZ";
      var yv = Date.prototype.toISOString ? function(t2) {
        return t2.toISOString();
      } : t.utcFormat(gv);
      var vv = +new Date("2000-01-01T00:00:00.000Z") ? function(t2) {
        var n2 = new Date(t2);
        return isNaN(n2) ? null : n2;
      } : t.utcParse(gv), _v = 1e3, bv = 6e4, mv = 36e5, xv = 864e5, wv = 2592e6, Mv = 31536e6;
      function Av(t2) {
        return new Date(t2);
      }
      function Tv(t2) {
        return t2 instanceof Date ? +t2 : +new Date(+t2);
      }
      function Sv(t2, n2, r2, i2, o2, a2, u2, c2, f2) {
        var s2 = vp(), l2 = s2.invert, h2 = s2.domain, d2 = f2(".%L"), p2 = f2(":%S"), g2 = f2("%I:%M"), y2 = f2("%I %p"), v2 = f2("%a %d"), _2 = f2("%b %d"), b2 = f2("%B"), m2 = f2("%Y"), x2 = [[u2, 1, _v], [u2, 5, 5e3], [u2, 15, 15e3], [u2, 30, 3e4], [a2, 1, bv], [a2, 5, 3e5], [a2, 15, 9e5], [a2, 30, 18e5], [o2, 1, mv], [o2, 3, 108e5], [o2, 6, 216e5], [o2, 12, 432e5], [i2, 1, xv], [i2, 2, 1728e5], [r2, 1, 6048e5], [n2, 1, wv], [n2, 3, 7776e6], [t2, 1, Mv]];
        function w2(e2) {
          return (u2(e2) < e2 ? d2 : a2(e2) < e2 ? p2 : o2(e2) < e2 ? g2 : i2(e2) < e2 ? y2 : n2(e2) < e2 ? r2(e2) < e2 ? v2 : _2 : t2(e2) < e2 ? b2 : m2)(e2);
        }
        function M2(n3, r3, i3) {
          if (n3 == null && (n3 = 10), typeof n3 == "number") {
            var o3, a3 = Math.abs(i3 - r3) / n3, u3 = e(function(t3) {
              return t3[2];
            }).right(x2, a3);
            return u3 === x2.length ? (o3 = F(r3 / Mv, i3 / Mv, n3), n3 = t2) : u3 ? (o3 = (u3 = x2[a3 / x2[u3 - 1][2] < x2[u3][2] / a3 ? u3 - 1 : u3])[1], n3 = u3[0]) : (o3 = Math.max(F(r3, i3, n3), 1), n3 = c2), n3.every(o3);
          }
          return n3;
        }
        return s2.invert = function(t3) {
          return new Date(l2(t3));
        }, s2.domain = function(t3) {
          return arguments.length ? h2(Array.from(t3, Tv)) : h2().map(Av);
        }, s2.ticks = function(t3) {
          var n3, e2 = h2(), r3 = e2[0], i3 = e2[e2.length - 1], o3 = i3 < r3;
          return o3 && (n3 = r3, r3 = i3, i3 = n3), n3 = (n3 = M2(t3, r3, i3)) ? n3.range(r3, i3 + 1) : [], o3 ? n3.reverse() : n3;
        }, s2.tickFormat = function(t3, n3) {
          return n3 == null ? w2 : f2(n3);
        }, s2.nice = function(t3) {
          var n3 = h2();
          return (t3 = M2(t3, n3[0], n3[n3.length - 1])) ? h2(mp(n3, t3)) : s2;
        }, s2.copy = function() {
          return gp(s2, Sv(t2, n2, r2, i2, o2, a2, u2, c2, f2));
        }, s2;
      }
      function Ev() {
        var t2, n2, e2, r2, i2, o2 = 0, a2 = 1, u2 = lp, c2 = false;
        function f2(n3) {
          return isNaN(n3 = +n3) ? i2 : u2(e2 === 0 ? 0.5 : (n3 = (r2(n3) - t2) * e2, c2 ? Math.max(0, Math.min(1, n3)) : n3));
        }
        function s2(t3) {
          return function(n3) {
            var e3, r3;
            return arguments.length ? ([e3, r3] = n3, u2 = t3(e3, r3), f2) : [u2(0), u2(1)];
          };
        }
        return f2.domain = function(i3) {
          return arguments.length ? ([o2, a2] = i3, t2 = r2(o2 = +o2), n2 = r2(a2 = +a2), e2 = t2 === n2 ? 0 : 1 / (n2 - t2), f2) : [o2, a2];
        }, f2.clamp = function(t3) {
          return arguments.length ? (c2 = !!t3, f2) : c2;
        }, f2.interpolator = function(t3) {
          return arguments.length ? (u2 = t3, f2) : u2;
        }, f2.range = s2(Mr), f2.rangeRound = s2(Ar), f2.unknown = function(t3) {
          return arguments.length ? (i2 = t3, f2) : i2;
        }, function(i3) {
          return r2 = i3, t2 = i3(o2), n2 = i3(a2), e2 = t2 === n2 ? 0 : 1 / (n2 - t2), f2;
        };
      }
      function kv(t2, n2) {
        return n2.domain(t2.domain()).interpolator(t2.interpolator()).clamp(t2.clamp()).unknown(t2.unknown());
      }
      function Nv() {
        var t2 = qp(Ev());
        return t2.copy = function() {
          return kv(t2, Nv()).exponent(t2.exponent());
        }, ip.apply(t2, arguments);
      }
      function Cv() {
        var t2, n2, e2, r2, i2, o2, a2, u2 = 0, c2 = 0.5, f2 = 1, s2 = 1, l2 = lp, h2 = false;
        function d2(t3) {
          return isNaN(t3 = +t3) ? a2 : (t3 = 0.5 + ((t3 = +o2(t3)) - n2) * (s2 * t3 < s2 * n2 ? r2 : i2), l2(h2 ? Math.max(0, Math.min(1, t3)) : t3));
        }
        function p2(t3) {
          return function(n3) {
            var e3, r3, i3;
            return arguments.length ? ([e3, r3, i3] = n3, l2 = jr(t3, [e3, r3, i3]), d2) : [l2(0), l2(0.5), l2(1)];
          };
        }
        return d2.domain = function(a3) {
          return arguments.length ? ([u2, c2, f2] = a3, t2 = o2(u2 = +u2), n2 = o2(c2 = +c2), e2 = o2(f2 = +f2), r2 = t2 === n2 ? 0 : 0.5 / (n2 - t2), i2 = n2 === e2 ? 0 : 0.5 / (e2 - n2), s2 = n2 < t2 ? -1 : 1, d2) : [u2, c2, f2];
        }, d2.clamp = function(t3) {
          return arguments.length ? (h2 = !!t3, d2) : h2;
        }, d2.interpolator = function(t3) {
          return arguments.length ? (l2 = t3, d2) : l2;
        }, d2.range = p2(Mr), d2.rangeRound = p2(Ar), d2.unknown = function(t3) {
          return arguments.length ? (a2 = t3, d2) : a2;
        }, function(a3) {
          return o2 = a3, t2 = a3(u2), n2 = a3(c2), e2 = a3(f2), r2 = t2 === n2 ? 0 : 0.5 / (n2 - t2), i2 = n2 === e2 ? 0 : 0.5 / (e2 - n2), s2 = n2 < t2 ? -1 : 1, d2;
        };
      }
      function Pv() {
        var t2 = qp(Cv());
        return t2.copy = function() {
          return kv(t2, Pv()).exponent(t2.exponent());
        }, ip.apply(t2, arguments);
      }
      function zv(t2) {
        for (var n2 = t2.length / 6 | 0, e2 = new Array(n2), r2 = 0; r2 < n2; )
          e2[r2] = "#" + t2.slice(6 * r2, 6 * ++r2);
        return e2;
      }
      var Dv = zv("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), qv = zv("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"), Rv = zv("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"), Fv = zv("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"), Ov = zv("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"), Uv = zv("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"), Iv = zv("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Bv = zv("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), Yv = zv("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), Lv = zv("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab"), jv = (t2) => hr(t2[t2.length - 1]), Hv = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(zv), Xv = jv(Hv), Gv = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(zv), Vv = jv(Gv), $v = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(zv), Wv = jv($v), Zv = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(zv), Kv = jv(Zv), Qv = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(zv), Jv = jv(Qv), t_ = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(zv), n_ = jv(t_), e_ = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(zv), r_ = jv(e_), i_ = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(zv), o_ = jv(i_), a_ = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(zv), u_ = jv(a_), c_ = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(zv), f_ = jv(c_), s_ = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(zv), l_ = jv(s_), h_ = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(zv), d_ = jv(h_), p_ = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(zv), g_ = jv(p_), y_ = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(zv), v_ = jv(y_), __ = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(zv), b_ = jv(__), m_ = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(zv), x_ = jv(m_), w_ = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(zv), M_ = jv(w_), A_ = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(zv), T_ = jv(A_), S_ = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(zv), E_ = jv(S_), k_ = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(zv), N_ = jv(k_), C_ = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(zv), P_ = jv(C_), z_ = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(zv), D_ = jv(z_), q_ = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(zv), R_ = jv(q_), F_ = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(zv), O_ = jv(F_), U_ = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(zv), I_ = jv(U_), B_ = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(zv), Y_ = jv(B_), L_ = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(zv), j_ = jv(L_);
      var H_ = Lr(tr(300, 0.5, 0), tr(-240, 0.5, 1)), X_ = Lr(tr(-100, 0.75, 0.35), tr(80, 1.5, 0.8)), G_ = Lr(tr(260, 0.75, 0.35), tr(80, 1.5, 0.8)), V_ = tr();
      var $_ = ve(), W_ = Math.PI / 3, Z_ = 2 * Math.PI / 3;
      function K_(t2) {
        var n2 = t2.length;
        return function(e2) {
          return t2[Math.max(0, Math.min(n2 - 1, Math.floor(e2 * n2)))];
        };
      }
      var Q_ = K_(zv("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), J_ = K_(zv("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), tb = K_(zv("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), nb = K_(zv("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
      function eb(t2) {
        return function() {
          return t2;
        };
      }
      var rb = Math.abs, ib = Math.atan2, ob = Math.cos, ab = Math.max, ub = Math.min, cb = Math.sin, fb = Math.sqrt, sb = 1e-12, lb = Math.PI, hb = lb / 2, db = 2 * lb;
      function pb(t2) {
        return t2 > 1 ? 0 : t2 < -1 ? lb : Math.acos(t2);
      }
      function gb(t2) {
        return t2 >= 1 ? hb : t2 <= -1 ? -hb : Math.asin(t2);
      }
      function yb(t2) {
        return t2.innerRadius;
      }
      function vb(t2) {
        return t2.outerRadius;
      }
      function _b(t2) {
        return t2.startAngle;
      }
      function bb(t2) {
        return t2.endAngle;
      }
      function mb(t2) {
        return t2 && t2.padAngle;
      }
      function xb(t2, n2, e2, r2, i2, o2, a2, u2) {
        var c2 = e2 - t2, f2 = r2 - n2, s2 = a2 - i2, l2 = u2 - o2, h2 = l2 * c2 - s2 * f2;
        if (!(h2 * h2 < sb))
          return [t2 + (h2 = (s2 * (n2 - o2) - l2 * (t2 - i2)) / h2) * c2, n2 + h2 * f2];
      }
      function wb(t2, n2, e2, r2, i2, o2, a2) {
        var u2 = t2 - e2, c2 = n2 - r2, f2 = (a2 ? o2 : -o2) / fb(u2 * u2 + c2 * c2), s2 = f2 * c2, l2 = -f2 * u2, h2 = t2 + s2, d2 = n2 + l2, p2 = e2 + s2, g2 = r2 + l2, y2 = (h2 + p2) / 2, v2 = (d2 + g2) / 2, _2 = p2 - h2, b2 = g2 - d2, m2 = _2 * _2 + b2 * b2, x2 = i2 - o2, w2 = h2 * g2 - p2 * d2, M2 = (b2 < 0 ? -1 : 1) * fb(ab(0, x2 * x2 * m2 - w2 * w2)), A2 = (w2 * b2 - _2 * M2) / m2, T2 = (-w2 * _2 - b2 * M2) / m2, S2 = (w2 * b2 + _2 * M2) / m2, E2 = (-w2 * _2 + b2 * M2) / m2, k2 = A2 - y2, N2 = T2 - v2, C2 = S2 - y2, P2 = E2 - v2;
        return k2 * k2 + N2 * N2 > C2 * C2 + P2 * P2 && (A2 = S2, T2 = E2), {cx: A2, cy: T2, x01: -s2, y01: -l2, x11: A2 * (i2 / x2 - 1), y11: T2 * (i2 / x2 - 1)};
      }
      var Mb = Array.prototype.slice;
      function Ab(t2) {
        return typeof t2 == "object" && "length" in t2 ? t2 : Array.from(t2);
      }
      function Tb(t2) {
        this._context = t2;
      }
      function Sb(t2) {
        return new Tb(t2);
      }
      function Eb(t2) {
        return t2[0];
      }
      function kb(t2) {
        return t2[1];
      }
      function Nb(t2, n2) {
        var e2 = eb(true), r2 = null, i2 = Sb, o2 = null;
        function a2(a3) {
          var u2, c2, f2, s2 = (a3 = Ab(a3)).length, l2 = false;
          for (r2 == null && (o2 = i2(f2 = fa())), u2 = 0; u2 <= s2; ++u2)
            !(u2 < s2 && e2(c2 = a3[u2], u2, a3)) === l2 && ((l2 = !l2) ? o2.lineStart() : o2.lineEnd()), l2 && o2.point(+t2(c2, u2, a3), +n2(c2, u2, a3));
          if (f2)
            return o2 = null, f2 + "" || null;
        }
        return t2 = typeof t2 == "function" ? t2 : t2 === void 0 ? Eb : eb(t2), n2 = typeof n2 == "function" ? n2 : n2 === void 0 ? kb : eb(n2), a2.x = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : eb(+n3), a2) : t2;
        }, a2.y = function(t3) {
          return arguments.length ? (n2 = typeof t3 == "function" ? t3 : eb(+t3), a2) : n2;
        }, a2.defined = function(t3) {
          return arguments.length ? (e2 = typeof t3 == "function" ? t3 : eb(!!t3), a2) : e2;
        }, a2.curve = function(t3) {
          return arguments.length ? (i2 = t3, r2 != null && (o2 = i2(r2)), a2) : i2;
        }, a2.context = function(t3) {
          return arguments.length ? (t3 == null ? r2 = o2 = null : o2 = i2(r2 = t3), a2) : r2;
        }, a2;
      }
      function Cb(t2, n2, e2) {
        var r2 = null, i2 = eb(true), o2 = null, a2 = Sb, u2 = null;
        function c2(c3) {
          var f3, s2, l2, h2, d2, p2 = (c3 = Ab(c3)).length, g2 = false, y2 = new Array(p2), v2 = new Array(p2);
          for (o2 == null && (u2 = a2(d2 = fa())), f3 = 0; f3 <= p2; ++f3) {
            if (!(f3 < p2 && i2(h2 = c3[f3], f3, c3)) === g2)
              if (g2 = !g2)
                s2 = f3, u2.areaStart(), u2.lineStart();
              else {
                for (u2.lineEnd(), u2.lineStart(), l2 = f3 - 1; l2 >= s2; --l2)
                  u2.point(y2[l2], v2[l2]);
                u2.lineEnd(), u2.areaEnd();
              }
            g2 && (y2[f3] = +t2(h2, f3, c3), v2[f3] = +n2(h2, f3, c3), u2.point(r2 ? +r2(h2, f3, c3) : y2[f3], e2 ? +e2(h2, f3, c3) : v2[f3]));
          }
          if (d2)
            return u2 = null, d2 + "" || null;
        }
        function f2() {
          return Nb().defined(i2).curve(a2).context(o2);
        }
        return t2 = typeof t2 == "function" ? t2 : t2 === void 0 ? Eb : eb(+t2), n2 = typeof n2 == "function" ? n2 : eb(n2 === void 0 ? 0 : +n2), e2 = typeof e2 == "function" ? e2 : e2 === void 0 ? kb : eb(+e2), c2.x = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : eb(+n3), r2 = null, c2) : t2;
        }, c2.x0 = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : eb(+n3), c2) : t2;
        }, c2.x1 = function(t3) {
          return arguments.length ? (r2 = t3 == null ? null : typeof t3 == "function" ? t3 : eb(+t3), c2) : r2;
        }, c2.y = function(t3) {
          return arguments.length ? (n2 = typeof t3 == "function" ? t3 : eb(+t3), e2 = null, c2) : n2;
        }, c2.y0 = function(t3) {
          return arguments.length ? (n2 = typeof t3 == "function" ? t3 : eb(+t3), c2) : n2;
        }, c2.y1 = function(t3) {
          return arguments.length ? (e2 = t3 == null ? null : typeof t3 == "function" ? t3 : eb(+t3), c2) : e2;
        }, c2.lineX0 = c2.lineY0 = function() {
          return f2().x(t2).y(n2);
        }, c2.lineY1 = function() {
          return f2().x(t2).y(e2);
        }, c2.lineX1 = function() {
          return f2().x(r2).y(n2);
        }, c2.defined = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : eb(!!t3), c2) : i2;
        }, c2.curve = function(t3) {
          return arguments.length ? (a2 = t3, o2 != null && (u2 = a2(o2)), c2) : a2;
        }, c2.context = function(t3) {
          return arguments.length ? (t3 == null ? o2 = u2 = null : u2 = a2(o2 = t3), c2) : o2;
        }, c2;
      }
      function Pb(t2, n2) {
        return n2 < t2 ? -1 : n2 > t2 ? 1 : n2 >= t2 ? 0 : NaN;
      }
      function zb(t2) {
        return t2;
      }
      Tb.prototype = {areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t2, n2);
        }
      }};
      var Db = Rb(Sb);
      function qb(t2) {
        this._curve = t2;
      }
      function Rb(t2) {
        function n2(n3) {
          return new qb(t2(n3));
        }
        return n2._curve = t2, n2;
      }
      function Fb(t2) {
        var n2 = t2.curve;
        return t2.angle = t2.x, delete t2.x, t2.radius = t2.y, delete t2.y, t2.curve = function(t3) {
          return arguments.length ? n2(Rb(t3)) : n2()._curve;
        }, t2;
      }
      function Ob() {
        return Fb(Nb().curve(Db));
      }
      function Ub() {
        var t2 = Cb().curve(Db), n2 = t2.curve, e2 = t2.lineX0, r2 = t2.lineX1, i2 = t2.lineY0, o2 = t2.lineY1;
        return t2.angle = t2.x, delete t2.x, t2.startAngle = t2.x0, delete t2.x0, t2.endAngle = t2.x1, delete t2.x1, t2.radius = t2.y, delete t2.y, t2.innerRadius = t2.y0, delete t2.y0, t2.outerRadius = t2.y1, delete t2.y1, t2.lineStartAngle = function() {
          return Fb(e2());
        }, delete t2.lineX0, t2.lineEndAngle = function() {
          return Fb(r2());
        }, delete t2.lineX1, t2.lineInnerRadius = function() {
          return Fb(i2());
        }, delete t2.lineY0, t2.lineOuterRadius = function() {
          return Fb(o2());
        }, delete t2.lineY1, t2.curve = function(t3) {
          return arguments.length ? n2(Rb(t3)) : n2()._curve;
        }, t2;
      }
      function Ib(t2, n2) {
        return [(n2 = +n2) * Math.cos(t2 -= Math.PI / 2), n2 * Math.sin(t2)];
      }
      function Bb(t2) {
        return t2.source;
      }
      function Yb(t2) {
        return t2.target;
      }
      function Lb(t2) {
        var n2 = Bb, e2 = Yb, r2 = Eb, i2 = kb, o2 = null;
        function a2() {
          var a3, u2 = Mb.call(arguments), c2 = n2.apply(this, u2), f2 = e2.apply(this, u2);
          if (o2 || (o2 = a3 = fa()), t2(o2, +r2.apply(this, (u2[0] = c2, u2)), +i2.apply(this, u2), +r2.apply(this, (u2[0] = f2, u2)), +i2.apply(this, u2)), a3)
            return o2 = null, a3 + "" || null;
        }
        return a2.source = function(t3) {
          return arguments.length ? (n2 = t3, a2) : n2;
        }, a2.target = function(t3) {
          return arguments.length ? (e2 = t3, a2) : e2;
        }, a2.x = function(t3) {
          return arguments.length ? (r2 = typeof t3 == "function" ? t3 : eb(+t3), a2) : r2;
        }, a2.y = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : eb(+t3), a2) : i2;
        }, a2.context = function(t3) {
          return arguments.length ? (o2 = t3 == null ? null : t3, a2) : o2;
        }, a2;
      }
      function jb(t2, n2, e2, r2, i2) {
        t2.moveTo(n2, e2), t2.bezierCurveTo(n2 = (n2 + r2) / 2, e2, n2, i2, r2, i2);
      }
      function Hb(t2, n2, e2, r2, i2) {
        t2.moveTo(n2, e2), t2.bezierCurveTo(n2, e2 = (e2 + i2) / 2, r2, e2, r2, i2);
      }
      function Xb(t2, n2, e2, r2, i2) {
        var o2 = Ib(n2, e2), a2 = Ib(n2, e2 = (e2 + i2) / 2), u2 = Ib(r2, e2), c2 = Ib(r2, i2);
        t2.moveTo(o2[0], o2[1]), t2.bezierCurveTo(a2[0], a2[1], u2[0], u2[1], c2[0], c2[1]);
      }
      qb.prototype = {areaStart: function() {
        this._curve.areaStart();
      }, areaEnd: function() {
        this._curve.areaEnd();
      }, lineStart: function() {
        this._curve.lineStart();
      }, lineEnd: function() {
        this._curve.lineEnd();
      }, point: function(t2, n2) {
        this._curve.point(n2 * Math.sin(t2), n2 * -Math.cos(t2));
      }};
      var Gb = {draw: function(t2, n2) {
        var e2 = Math.sqrt(n2 / lb);
        t2.moveTo(e2, 0), t2.arc(0, 0, e2, 0, db);
      }}, Vb = {draw: function(t2, n2) {
        var e2 = Math.sqrt(n2 / 5) / 2;
        t2.moveTo(-3 * e2, -e2), t2.lineTo(-e2, -e2), t2.lineTo(-e2, -3 * e2), t2.lineTo(e2, -3 * e2), t2.lineTo(e2, -e2), t2.lineTo(3 * e2, -e2), t2.lineTo(3 * e2, e2), t2.lineTo(e2, e2), t2.lineTo(e2, 3 * e2), t2.lineTo(-e2, 3 * e2), t2.lineTo(-e2, e2), t2.lineTo(-3 * e2, e2), t2.closePath();
      }}, $b = Math.sqrt(1 / 3), Wb = 2 * $b, Zb = {draw: function(t2, n2) {
        var e2 = Math.sqrt(n2 / Wb), r2 = e2 * $b;
        t2.moveTo(0, -e2), t2.lineTo(r2, 0), t2.lineTo(0, e2), t2.lineTo(-r2, 0), t2.closePath();
      }}, Kb = Math.sin(lb / 10) / Math.sin(7 * lb / 10), Qb = Math.sin(db / 10) * Kb, Jb = -Math.cos(db / 10) * Kb, tm = {draw: function(t2, n2) {
        var e2 = Math.sqrt(0.8908130915292852 * n2), r2 = Qb * e2, i2 = Jb * e2;
        t2.moveTo(0, -e2), t2.lineTo(r2, i2);
        for (var o2 = 1; o2 < 5; ++o2) {
          var a2 = db * o2 / 5, u2 = Math.cos(a2), c2 = Math.sin(a2);
          t2.lineTo(c2 * e2, -u2 * e2), t2.lineTo(u2 * r2 - c2 * i2, c2 * r2 + u2 * i2);
        }
        t2.closePath();
      }}, nm = {draw: function(t2, n2) {
        var e2 = Math.sqrt(n2), r2 = -e2 / 2;
        t2.rect(r2, r2, e2, e2);
      }}, em = Math.sqrt(3), rm = {draw: function(t2, n2) {
        var e2 = -Math.sqrt(n2 / (3 * em));
        t2.moveTo(0, 2 * e2), t2.lineTo(-em * e2, -e2), t2.lineTo(em * e2, -e2), t2.closePath();
      }}, im = -0.5, om = Math.sqrt(3) / 2, am = 1 / Math.sqrt(12), um = 3 * (am / 2 + 1), cm = {draw: function(t2, n2) {
        var e2 = Math.sqrt(n2 / um), r2 = e2 / 2, i2 = e2 * am, o2 = r2, a2 = e2 * am + e2, u2 = -o2, c2 = a2;
        t2.moveTo(r2, i2), t2.lineTo(o2, a2), t2.lineTo(u2, c2), t2.lineTo(im * r2 - om * i2, om * r2 + im * i2), t2.lineTo(im * o2 - om * a2, om * o2 + im * a2), t2.lineTo(im * u2 - om * c2, om * u2 + im * c2), t2.lineTo(im * r2 + om * i2, im * i2 - om * r2), t2.lineTo(im * o2 + om * a2, im * a2 - om * o2), t2.lineTo(im * u2 + om * c2, im * c2 - om * u2), t2.closePath();
      }}, fm = [Gb, Vb, Zb, nm, tm, rm, cm];
      function sm() {
      }
      function lm(t2, n2, e2) {
        t2._context.bezierCurveTo((2 * t2._x0 + t2._x1) / 3, (2 * t2._y0 + t2._y1) / 3, (t2._x0 + 2 * t2._x1) / 3, (t2._y0 + 2 * t2._y1) / 3, (t2._x0 + 4 * t2._x1 + n2) / 6, (t2._y0 + 4 * t2._y1 + e2) / 6);
      }
      function hm(t2) {
        this._context = t2;
      }
      function dm(t2) {
        this._context = t2;
      }
      function pm(t2) {
        this._context = t2;
      }
      function gm(t2, n2) {
        this._basis = new hm(t2), this._beta = n2;
      }
      hm.prototype = {areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 3:
            lm(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1);
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            lm(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = t2, this._y0 = this._y1, this._y1 = n2;
      }}, dm.prototype = {areaStart: sm, areaEnd: sm, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        }
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._x2 = t2, this._y2 = n2;
            break;
          case 1:
            this._point = 2, this._x3 = t2, this._y3 = n2;
            break;
          case 2:
            this._point = 3, this._x4 = t2, this._y4 = n2, this._context.moveTo((this._x0 + 4 * this._x1 + t2) / 6, (this._y0 + 4 * this._y1 + n2) / 6);
            break;
          default:
            lm(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = t2, this._y0 = this._y1, this._y1 = n2;
      }}, pm.prototype = {areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      }, lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var e2 = (this._x0 + 4 * this._x1 + t2) / 6, r2 = (this._y0 + 4 * this._y1 + n2) / 6;
            this._line ? this._context.lineTo(e2, r2) : this._context.moveTo(e2, r2);
            break;
          case 3:
            this._point = 4;
          default:
            lm(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = t2, this._y0 = this._y1, this._y1 = n2;
      }}, gm.prototype = {lineStart: function() {
        this._x = [], this._y = [], this._basis.lineStart();
      }, lineEnd: function() {
        var t2 = this._x, n2 = this._y, e2 = t2.length - 1;
        if (e2 > 0)
          for (var r2, i2 = t2[0], o2 = n2[0], a2 = t2[e2] - i2, u2 = n2[e2] - o2, c2 = -1; ++c2 <= e2; )
            r2 = c2 / e2, this._basis.point(this._beta * t2[c2] + (1 - this._beta) * (i2 + r2 * a2), this._beta * n2[c2] + (1 - this._beta) * (o2 + r2 * u2));
        this._x = this._y = null, this._basis.lineEnd();
      }, point: function(t2, n2) {
        this._x.push(+t2), this._y.push(+n2);
      }};
      var ym = function t2(n2) {
        function e2(t3) {
          return n2 === 1 ? new hm(t3) : new gm(t3, n2);
        }
        return e2.beta = function(n3) {
          return t2(+n3);
        }, e2;
      }(0.85);
      function vm(t2, n2, e2) {
        t2._context.bezierCurveTo(t2._x1 + t2._k * (t2._x2 - t2._x0), t2._y1 + t2._k * (t2._y2 - t2._y0), t2._x2 + t2._k * (t2._x1 - n2), t2._y2 + t2._k * (t2._y1 - e2), t2._x2, t2._y2);
      }
      function _m(t2, n2) {
        this._context = t2, this._k = (1 - n2) / 6;
      }
      _m.prototype = {areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            vm(this, this._x1, this._y1);
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
            break;
          case 1:
            this._point = 2, this._x1 = t2, this._y1 = n2;
            break;
          case 2:
            this._point = 3;
          default:
            vm(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      }};
      var bm = function t2(n2) {
        function e2(t3) {
          return new _m(t3, n2);
        }
        return e2.tension = function(n3) {
          return t2(+n3);
        }, e2;
      }(0);
      function mm(t2, n2) {
        this._context = t2, this._k = (1 - n2) / 6;
      }
      mm.prototype = {areaStart: sm, areaEnd: sm, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        }
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._x3 = t2, this._y3 = n2;
            break;
          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t2, this._y4 = n2);
            break;
          case 2:
            this._point = 3, this._x5 = t2, this._y5 = n2;
            break;
          default:
            vm(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      }};
      var xm = function t2(n2) {
        function e2(t3) {
          return new mm(t3, n2);
        }
        return e2.tension = function(n3) {
          return t2(+n3);
        }, e2;
      }(0);
      function wm(t2, n2) {
        this._context = t2, this._k = (1 - n2) / 6;
      }
      wm.prototype = {areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      }, lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            vm(this, t2, n2);
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      }};
      var Mm = function t2(n2) {
        function e2(t3) {
          return new wm(t3, n2);
        }
        return e2.tension = function(n3) {
          return t2(+n3);
        }, e2;
      }(0);
      function Am(t2, n2, e2) {
        var r2 = t2._x1, i2 = t2._y1, o2 = t2._x2, a2 = t2._y2;
        if (t2._l01_a > sb) {
          var u2 = 2 * t2._l01_2a + 3 * t2._l01_a * t2._l12_a + t2._l12_2a, c2 = 3 * t2._l01_a * (t2._l01_a + t2._l12_a);
          r2 = (r2 * u2 - t2._x0 * t2._l12_2a + t2._x2 * t2._l01_2a) / c2, i2 = (i2 * u2 - t2._y0 * t2._l12_2a + t2._y2 * t2._l01_2a) / c2;
        }
        if (t2._l23_a > sb) {
          var f2 = 2 * t2._l23_2a + 3 * t2._l23_a * t2._l12_a + t2._l12_2a, s2 = 3 * t2._l23_a * (t2._l23_a + t2._l12_a);
          o2 = (o2 * f2 + t2._x1 * t2._l23_2a - n2 * t2._l12_2a) / s2, a2 = (a2 * f2 + t2._y1 * t2._l23_2a - e2 * t2._l12_2a) / s2;
        }
        t2._context.bezierCurveTo(r2, i2, o2, a2, t2._x2, t2._y2);
      }
      function Tm(t2, n2) {
        this._context = t2, this._alpha = n2;
      }
      Tm.prototype = {areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2);
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        if (t2 = +t2, n2 = +n2, this._point) {
          var e2 = this._x2 - t2, r2 = this._y2 - n2;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e2 * e2 + r2 * r2, this._alpha));
        }
        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            Am(this, t2, n2);
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      }};
      var Sm = function t2(n2) {
        function e2(t3) {
          return n2 ? new Tm(t3, n2) : new _m(t3, 0);
        }
        return e2.alpha = function(n3) {
          return t2(+n3);
        }, e2;
      }(0.5);
      function Em(t2, n2) {
        this._context = t2, this._alpha = n2;
      }
      Em.prototype = {areaStart: sm, areaEnd: sm, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        }
      }, point: function(t2, n2) {
        if (t2 = +t2, n2 = +n2, this._point) {
          var e2 = this._x2 - t2, r2 = this._y2 - n2;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e2 * e2 + r2 * r2, this._alpha));
        }
        switch (this._point) {
          case 0:
            this._point = 1, this._x3 = t2, this._y3 = n2;
            break;
          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t2, this._y4 = n2);
            break;
          case 2:
            this._point = 3, this._x5 = t2, this._y5 = n2;
            break;
          default:
            Am(this, t2, n2);
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      }};
      var km = function t2(n2) {
        function e2(t3) {
          return n2 ? new Em(t3, n2) : new mm(t3, 0);
        }
        return e2.alpha = function(n3) {
          return t2(+n3);
        }, e2;
      }(0.5);
      function Nm(t2, n2) {
        this._context = t2, this._alpha = n2;
      }
      Nm.prototype = {areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      }, lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        if (t2 = +t2, n2 = +n2, this._point) {
          var e2 = this._x2 - t2, r2 = this._y2 - n2;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e2 * e2 + r2 * r2, this._alpha));
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            Am(this, t2, n2);
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t2, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
      }};
      var Cm = function t2(n2) {
        function e2(t3) {
          return n2 ? new Nm(t3, n2) : new wm(t3, 0);
        }
        return e2.alpha = function(n3) {
          return t2(+n3);
        }, e2;
      }(0.5);
      function Pm(t2) {
        this._context = t2;
      }
      function zm(t2) {
        return t2 < 0 ? -1 : 1;
      }
      function Dm(t2, n2, e2) {
        var r2 = t2._x1 - t2._x0, i2 = n2 - t2._x1, o2 = (t2._y1 - t2._y0) / (r2 || i2 < 0 && -0), a2 = (e2 - t2._y1) / (i2 || r2 < 0 && -0), u2 = (o2 * i2 + a2 * r2) / (r2 + i2);
        return (zm(o2) + zm(a2)) * Math.min(Math.abs(o2), Math.abs(a2), 0.5 * Math.abs(u2)) || 0;
      }
      function qm(t2, n2) {
        var e2 = t2._x1 - t2._x0;
        return e2 ? (3 * (t2._y1 - t2._y0) / e2 - n2) / 2 : n2;
      }
      function Rm(t2, n2, e2) {
        var r2 = t2._x0, i2 = t2._y0, o2 = t2._x1, a2 = t2._y1, u2 = (o2 - r2) / 3;
        t2._context.bezierCurveTo(r2 + u2, i2 + u2 * n2, o2 - u2, a2 - u2 * e2, o2, a2);
      }
      function Fm(t2) {
        this._context = t2;
      }
      function Om(t2) {
        this._context = new Um(t2);
      }
      function Um(t2) {
        this._context = t2;
      }
      function Im(t2) {
        this._context = t2;
      }
      function Bm(t2) {
        var n2, e2, r2 = t2.length - 1, i2 = new Array(r2), o2 = new Array(r2), a2 = new Array(r2);
        for (i2[0] = 0, o2[0] = 2, a2[0] = t2[0] + 2 * t2[1], n2 = 1; n2 < r2 - 1; ++n2)
          i2[n2] = 1, o2[n2] = 4, a2[n2] = 4 * t2[n2] + 2 * t2[n2 + 1];
        for (i2[r2 - 1] = 2, o2[r2 - 1] = 7, a2[r2 - 1] = 8 * t2[r2 - 1] + t2[r2], n2 = 1; n2 < r2; ++n2)
          e2 = i2[n2] / o2[n2 - 1], o2[n2] -= e2, a2[n2] -= e2 * a2[n2 - 1];
        for (i2[r2 - 1] = a2[r2 - 1] / o2[r2 - 1], n2 = r2 - 2; n2 >= 0; --n2)
          i2[n2] = (a2[n2] - i2[n2 + 1]) / o2[n2];
        for (o2[r2 - 1] = (t2[r2] + i2[r2 - 1]) / 2, n2 = 0; n2 < r2 - 1; ++n2)
          o2[n2] = 2 * t2[n2 + 1] - i2[n2 + 1];
        return [i2, o2];
      }
      function Ym(t2, n2) {
        this._context = t2, this._t = n2;
      }
      function Lm(t2, n2) {
        if ((i2 = t2.length) > 1)
          for (var e2, r2, i2, o2 = 1, a2 = t2[n2[0]], u2 = a2.length; o2 < i2; ++o2)
            for (r2 = a2, a2 = t2[n2[o2]], e2 = 0; e2 < u2; ++e2)
              a2[e2][1] += a2[e2][0] = isNaN(r2[e2][1]) ? r2[e2][0] : r2[e2][1];
      }
      function jm(t2) {
        for (var n2 = t2.length, e2 = new Array(n2); --n2 >= 0; )
          e2[n2] = n2;
        return e2;
      }
      function Hm(t2, n2) {
        return t2[n2];
      }
      function Xm(t2) {
        const n2 = [];
        return n2.key = t2, n2;
      }
      function Gm(t2) {
        var n2 = t2.map(Vm);
        return jm(t2).sort(function(t3, e2) {
          return n2[t3] - n2[e2];
        });
      }
      function Vm(t2) {
        for (var n2, e2 = -1, r2 = 0, i2 = t2.length, o2 = -1 / 0; ++e2 < i2; )
          (n2 = +t2[e2][1]) > o2 && (o2 = n2, r2 = e2);
        return r2;
      }
      function $m(t2) {
        var n2 = t2.map(Wm);
        return jm(t2).sort(function(t3, e2) {
          return n2[t3] - n2[e2];
        });
      }
      function Wm(t2) {
        for (var n2, e2 = 0, r2 = -1, i2 = t2.length; ++r2 < i2; )
          (n2 = +t2[r2][1]) && (e2 += n2);
        return e2;
      }
      Pm.prototype = {areaStart: sm, areaEnd: sm, lineStart: function() {
        this._point = 0;
      }, lineEnd: function() {
        this._point && this._context.closePath();
      }, point: function(t2, n2) {
        t2 = +t2, n2 = +n2, this._point ? this._context.lineTo(t2, n2) : (this._point = 1, this._context.moveTo(t2, n2));
      }}, Fm.prototype = {areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
      }, lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            Rm(this, this._t0, qm(this, this._t0));
        }
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
      }, point: function(t2, n2) {
        var e2 = NaN;
        if (n2 = +n2, (t2 = +t2) !== this._x1 || n2 !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, Rm(this, qm(this, e2 = Dm(this, t2, n2)), e2);
              break;
            default:
              Rm(this, this._t0, e2 = Dm(this, t2, n2));
          }
          this._x0 = this._x1, this._x1 = t2, this._y0 = this._y1, this._y1 = n2, this._t0 = e2;
        }
      }}, (Om.prototype = Object.create(Fm.prototype)).point = function(t2, n2) {
        Fm.prototype.point.call(this, n2, t2);
      }, Um.prototype = {moveTo: function(t2, n2) {
        this._context.moveTo(n2, t2);
      }, closePath: function() {
        this._context.closePath();
      }, lineTo: function(t2, n2) {
        this._context.lineTo(n2, t2);
      }, bezierCurveTo: function(t2, n2, e2, r2, i2, o2) {
        this._context.bezierCurveTo(n2, t2, r2, e2, o2, i2);
      }}, Im.prototype = {areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x = [], this._y = [];
      }, lineEnd: function() {
        var t2 = this._x, n2 = this._y, e2 = t2.length;
        if (e2)
          if (this._line ? this._context.lineTo(t2[0], n2[0]) : this._context.moveTo(t2[0], n2[0]), e2 === 2)
            this._context.lineTo(t2[1], n2[1]);
          else
            for (var r2 = Bm(t2), i2 = Bm(n2), o2 = 0, a2 = 1; a2 < e2; ++o2, ++a2)
              this._context.bezierCurveTo(r2[0][o2], i2[0][o2], r2[1][o2], i2[1][o2], t2[a2], n2[a2]);
        (this._line || this._line !== 0 && e2 === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
      }, point: function(t2, n2) {
        this._x.push(+t2), this._y.push(+n2);
      }}, Ym.prototype = {areaStart: function() {
        this._line = 0;
      }, areaEnd: function() {
        this._line = NaN;
      }, lineStart: function() {
        this._x = this._y = NaN, this._point = 0;
      }, lineEnd: function() {
        0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
      }, point: function(t2, n2) {
        switch (t2 = +t2, n2 = +n2, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t2, n2) : this._context.moveTo(t2, n2);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0)
              this._context.lineTo(this._x, n2), this._context.lineTo(t2, n2);
            else {
              var e2 = this._x * (1 - this._t) + t2 * this._t;
              this._context.lineTo(e2, this._y), this._context.lineTo(e2, n2);
            }
        }
        this._x = t2, this._y = n2;
      }};
      var Zm = (t2) => () => t2;
      function Km(t2, {sourceEvent: n2, target: e2, transform: r2, dispatch: i2}) {
        Object.defineProperties(this, {type: {value: t2, enumerable: true, configurable: true}, sourceEvent: {value: n2, enumerable: true, configurable: true}, target: {value: e2, enumerable: true, configurable: true}, transform: {value: r2, enumerable: true, configurable: true}, _: {value: i2}});
      }
      function Qm(t2, n2, e2) {
        this.k = t2, this.x = n2, this.y = e2;
      }
      Qm.prototype = {constructor: Qm, scale: function(t2) {
        return t2 === 1 ? this : new Qm(this.k * t2, this.x, this.y);
      }, translate: function(t2, n2) {
        return t2 === 0 & n2 === 0 ? this : new Qm(this.k, this.x + this.k * t2, this.y + this.k * n2);
      }, apply: function(t2) {
        return [t2[0] * this.k + this.x, t2[1] * this.k + this.y];
      }, applyX: function(t2) {
        return t2 * this.k + this.x;
      }, applyY: function(t2) {
        return t2 * this.k + this.y;
      }, invert: function(t2) {
        return [(t2[0] - this.x) / this.k, (t2[1] - this.y) / this.k];
      }, invertX: function(t2) {
        return (t2 - this.x) / this.k;
      }, invertY: function(t2) {
        return (t2 - this.y) / this.k;
      }, rescaleX: function(t2) {
        return t2.copy().domain(t2.range().map(this.invertX, this).map(t2.invert, t2));
      }, rescaleY: function(t2) {
        return t2.copy().domain(t2.range().map(this.invertY, this).map(t2.invert, t2));
      }, toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      }};
      var Jm = new Qm(1, 0, 0);
      function tx(t2) {
        for (; !t2.__zoom; )
          if (!(t2 = t2.parentNode))
            return Jm;
        return t2.__zoom;
      }
      function nx(t2) {
        t2.stopImmediatePropagation();
      }
      function ex(t2) {
        t2.preventDefault(), t2.stopImmediatePropagation();
      }
      function rx(t2) {
        return !(t2.ctrlKey && t2.type !== "wheel" || t2.button);
      }
      function ix() {
        var t2 = this;
        return t2 instanceof SVGElement ? (t2 = t2.ownerSVGElement || t2).hasAttribute("viewBox") ? [[(t2 = t2.viewBox.baseVal).x, t2.y], [t2.x + t2.width, t2.y + t2.height]] : [[0, 0], [t2.width.baseVal.value, t2.height.baseVal.value]] : [[0, 0], [t2.clientWidth, t2.clientHeight]];
      }
      function ox() {
        return this.__zoom || Jm;
      }
      function ax(t2) {
        return -t2.deltaY * (t2.deltaMode === 1 ? 0.05 : t2.deltaMode ? 1 : 2e-3) * (t2.ctrlKey ? 10 : 1);
      }
      function ux() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function cx(t2, n2, e2) {
        var r2 = t2.invertX(n2[0][0]) - e2[0][0], i2 = t2.invertX(n2[1][0]) - e2[1][0], o2 = t2.invertY(n2[0][1]) - e2[0][1], a2 = t2.invertY(n2[1][1]) - e2[1][1];
        return t2.translate(i2 > r2 ? (r2 + i2) / 2 : Math.min(0, r2) || Math.max(0, i2), a2 > o2 ? (o2 + a2) / 2 : Math.min(0, o2) || Math.max(0, a2));
      }
      tx.prototype = Qm.prototype, t.Adder = g, t.Delaunay = nu, t.FormatSpecifier = uc, t.InternMap = y, t.InternSet = v, t.Voronoi = Wa, t.active = function(t2, n2) {
        var e2, r2, i2 = t2.__transition;
        if (i2) {
          for (r2 in n2 = n2 == null ? null : n2 + "", i2)
            if ((e2 = i2[r2]).state > 1 && e2.name === n2)
              return new ji([[t2]], _o, n2, +r2);
        }
        return null;
      }, t.arc = function() {
        var t2 = yb, n2 = vb, e2 = eb(0), r2 = null, i2 = _b, o2 = bb, a2 = mb, u2 = null;
        function c2() {
          var c3, f2, s2 = +t2.apply(this, arguments), l2 = +n2.apply(this, arguments), h2 = i2.apply(this, arguments) - hb, d2 = o2.apply(this, arguments) - hb, p2 = rb(d2 - h2), g2 = d2 > h2;
          if (u2 || (u2 = c3 = fa()), l2 < s2 && (f2 = l2, l2 = s2, s2 = f2), l2 > sb)
            if (p2 > db - sb)
              u2.moveTo(l2 * ob(h2), l2 * cb(h2)), u2.arc(0, 0, l2, h2, d2, !g2), s2 > sb && (u2.moveTo(s2 * ob(d2), s2 * cb(d2)), u2.arc(0, 0, s2, d2, h2, g2));
            else {
              var y2, v2, _2 = h2, b2 = d2, m2 = h2, x2 = d2, w2 = p2, M2 = p2, A2 = a2.apply(this, arguments) / 2, T2 = A2 > sb && (r2 ? +r2.apply(this, arguments) : fb(s2 * s2 + l2 * l2)), S2 = ub(rb(l2 - s2) / 2, +e2.apply(this, arguments)), E2 = S2, k2 = S2;
              if (T2 > sb) {
                var N2 = gb(T2 / s2 * cb(A2)), C2 = gb(T2 / l2 * cb(A2));
                (w2 -= 2 * N2) > sb ? (m2 += N2 *= g2 ? 1 : -1, x2 -= N2) : (w2 = 0, m2 = x2 = (h2 + d2) / 2), (M2 -= 2 * C2) > sb ? (_2 += C2 *= g2 ? 1 : -1, b2 -= C2) : (M2 = 0, _2 = b2 = (h2 + d2) / 2);
              }
              var P2 = l2 * ob(_2), z2 = l2 * cb(_2), D2 = s2 * ob(x2), q2 = s2 * cb(x2);
              if (S2 > sb) {
                var R2, F2 = l2 * ob(b2), O2 = l2 * cb(b2), U2 = s2 * ob(m2), I2 = s2 * cb(m2);
                if (p2 < lb && (R2 = xb(P2, z2, U2, I2, F2, O2, D2, q2))) {
                  var B2 = P2 - R2[0], Y2 = z2 - R2[1], L2 = F2 - R2[0], j2 = O2 - R2[1], H2 = 1 / cb(pb((B2 * L2 + Y2 * j2) / (fb(B2 * B2 + Y2 * Y2) * fb(L2 * L2 + j2 * j2))) / 2), X2 = fb(R2[0] * R2[0] + R2[1] * R2[1]);
                  E2 = ub(S2, (s2 - X2) / (H2 - 1)), k2 = ub(S2, (l2 - X2) / (H2 + 1));
                }
              }
              M2 > sb ? k2 > sb ? (y2 = wb(U2, I2, P2, z2, l2, k2, g2), v2 = wb(F2, O2, D2, q2, l2, k2, g2), u2.moveTo(y2.cx + y2.x01, y2.cy + y2.y01), k2 < S2 ? u2.arc(y2.cx, y2.cy, k2, ib(y2.y01, y2.x01), ib(v2.y01, v2.x01), !g2) : (u2.arc(y2.cx, y2.cy, k2, ib(y2.y01, y2.x01), ib(y2.y11, y2.x11), !g2), u2.arc(0, 0, l2, ib(y2.cy + y2.y11, y2.cx + y2.x11), ib(v2.cy + v2.y11, v2.cx + v2.x11), !g2), u2.arc(v2.cx, v2.cy, k2, ib(v2.y11, v2.x11), ib(v2.y01, v2.x01), !g2))) : (u2.moveTo(P2, z2), u2.arc(0, 0, l2, _2, b2, !g2)) : u2.moveTo(P2, z2), s2 > sb && w2 > sb ? E2 > sb ? (y2 = wb(D2, q2, F2, O2, s2, -E2, g2), v2 = wb(P2, z2, U2, I2, s2, -E2, g2), u2.lineTo(y2.cx + y2.x01, y2.cy + y2.y01), E2 < S2 ? u2.arc(y2.cx, y2.cy, E2, ib(y2.y01, y2.x01), ib(v2.y01, v2.x01), !g2) : (u2.arc(y2.cx, y2.cy, E2, ib(y2.y01, y2.x01), ib(y2.y11, y2.x11), !g2), u2.arc(0, 0, s2, ib(y2.cy + y2.y11, y2.cx + y2.x11), ib(v2.cy + v2.y11, v2.cx + v2.x11), g2), u2.arc(v2.cx, v2.cy, E2, ib(v2.y11, v2.x11), ib(v2.y01, v2.x01), !g2))) : u2.arc(0, 0, s2, x2, m2, g2) : u2.lineTo(D2, q2);
            }
          else
            u2.moveTo(0, 0);
          if (u2.closePath(), c3)
            return u2 = null, c3 + "" || null;
        }
        return c2.centroid = function() {
          var e3 = (+t2.apply(this, arguments) + +n2.apply(this, arguments)) / 2, r3 = (+i2.apply(this, arguments) + +o2.apply(this, arguments)) / 2 - lb / 2;
          return [ob(r3) * e3, cb(r3) * e3];
        }, c2.innerRadius = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : eb(+n3), c2) : t2;
        }, c2.outerRadius = function(t3) {
          return arguments.length ? (n2 = typeof t3 == "function" ? t3 : eb(+t3), c2) : n2;
        }, c2.cornerRadius = function(t3) {
          return arguments.length ? (e2 = typeof t3 == "function" ? t3 : eb(+t3), c2) : e2;
        }, c2.padRadius = function(t3) {
          return arguments.length ? (r2 = t3 == null ? null : typeof t3 == "function" ? t3 : eb(+t3), c2) : r2;
        }, c2.startAngle = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : eb(+t3), c2) : i2;
        }, c2.endAngle = function(t3) {
          return arguments.length ? (o2 = typeof t3 == "function" ? t3 : eb(+t3), c2) : o2;
        }, c2.padAngle = function(t3) {
          return arguments.length ? (a2 = typeof t3 == "function" ? t3 : eb(+t3), c2) : a2;
        }, c2.context = function(t3) {
          return arguments.length ? (u2 = t3 == null ? null : t3, c2) : u2;
        }, c2;
      }, t.area = Cb, t.areaRadial = Ub, t.ascending = n, t.autoType = function(t2) {
        for (var n2 in t2) {
          var e2, r2, i2 = t2[n2].trim();
          if (i2)
            if (i2 === "true")
              i2 = true;
            else if (i2 === "false")
              i2 = false;
            else if (i2 === "NaN")
              i2 = NaN;
            else if (isNaN(e2 = +i2)) {
              if (!(r2 = i2.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))
                continue;
              Tu && r2[4] && !r2[7] && (i2 = i2.replace(/-/g, "/").replace(/T/, " ")), i2 = new Date(i2);
            } else
              i2 = e2;
          else
            i2 = null;
          t2[n2] = i2;
        }
        return t2;
      }, t.axisBottom = function(t2) {
        return ht(3, t2);
      }, t.axisLeft = function(t2) {
        return ht(4, t2);
      }, t.axisRight = function(t2) {
        return ht(2, t2);
      }, t.axisTop = function(t2) {
        return ht(1, t2);
      }, t.bin = I, t.bisect = o, t.bisectCenter = u, t.bisectLeft = a, t.bisectRight = o, t.bisector = e, t.blob = function(t2, n2) {
        return fetch(t2, n2).then(Su);
      }, t.brush = function() {
        return Go(qo);
      }, t.brushSelection = function(t2) {
        var n2 = t2.__brush;
        return n2 ? n2.dim.output(n2.selection) : null;
      }, t.brushX = function() {
        return Go(zo);
      }, t.brushY = function() {
        return Go(Do);
      }, t.buffer = function(t2, n2) {
        return fetch(t2, n2).then(Eu);
      }, t.chord = function() {
        return ra(false, false);
      }, t.chordDirected = function() {
        return ra(true, false);
      }, t.chordTranspose = function() {
        return ra(false, true);
      }, t.cluster = function() {
        var t2 = Yh, n2 = 1, e2 = 1, r2 = false;
        function i2(i3) {
          var o2, a2 = 0;
          i3.eachAfter(function(n3) {
            var e3 = n3.children;
            e3 ? (n3.x = function(t3) {
              return t3.reduce(Lh, 0) / t3.length;
            }(e3), n3.y = function(t3) {
              return 1 + t3.reduce(jh, 0);
            }(e3)) : (n3.x = o2 ? a2 += t2(n3, o2) : 0, n3.y = 0, o2 = n3);
          });
          var u2 = function(t3) {
            for (var n3; n3 = t3.children; )
              t3 = n3[0];
            return t3;
          }(i3), c2 = function(t3) {
            for (var n3; n3 = t3.children; )
              t3 = n3[n3.length - 1];
            return t3;
          }(i3), f2 = u2.x - t2(u2, c2) / 2, s2 = c2.x + t2(c2, u2) / 2;
          return i3.eachAfter(r2 ? function(t3) {
            t3.x = (t3.x - i3.x) * n2, t3.y = (i3.y - t3.y) * e2;
          } : function(t3) {
            t3.x = (t3.x - f2) / (s2 - f2) * n2, t3.y = (1 - (i3.y ? t3.y / i3.y : 1)) * e2;
          });
        }
        return i2.separation = function(n3) {
          return arguments.length ? (t2 = n3, i2) : t2;
        }, i2.size = function(t3) {
          return arguments.length ? (r2 = false, n2 = +t3[0], e2 = +t3[1], i2) : r2 ? null : [n2, e2];
        }, i2.nodeSize = function(t3) {
          return arguments.length ? (r2 = true, n2 = +t3[0], e2 = +t3[1], i2) : r2 ? [n2, e2] : null;
        }, i2;
      }, t.color = de, t.contourDensity = function() {
        var t2 = Pa, n2 = za, e2 = Da, r2 = 960, i2 = 500, o2 = 20, a2 = 2, u2 = 3 * o2, c2 = r2 + 2 * u2 >> a2, f2 = i2 + 2 * u2 >> a2, s2 = wa(20);
        function l2(r3) {
          var i3 = new Float32Array(c2 * f2), l3 = new Float32Array(c2 * f2);
          r3.forEach(function(r4, o3, s3) {
            var l4 = +t2(r4, o3, s3) + u2 >> a2, h3 = +n2(r4, o3, s3) + u2 >> a2, d5 = +e2(r4, o3, s3);
            l4 >= 0 && l4 < c2 && h3 >= 0 && h3 < f2 && (i3[l4 + h3 * c2] += d5);
          }), Na({width: c2, height: f2, data: i3}, {width: c2, height: f2, data: l3}, o2 >> a2), Ca({width: c2, height: f2, data: l3}, {width: c2, height: f2, data: i3}, o2 >> a2), Na({width: c2, height: f2, data: i3}, {width: c2, height: f2, data: l3}, o2 >> a2), Ca({width: c2, height: f2, data: l3}, {width: c2, height: f2, data: i3}, o2 >> a2), Na({width: c2, height: f2, data: i3}, {width: c2, height: f2, data: l3}, o2 >> a2), Ca({width: c2, height: f2, data: l3}, {width: c2, height: f2, data: i3}, o2 >> a2);
          var d4 = s2(i3);
          if (!Array.isArray(d4)) {
            var p3 = B(i3);
            d4 = F(0, p3, d4), (d4 = Z(0, Math.floor(p3 / d4) * d4, d4)).shift();
          }
          return ka().thresholds(d4).size([c2, f2])(i3).map(h2);
        }
        function h2(t3) {
          return t3.value *= Math.pow(2, -2 * a2), t3.coordinates.forEach(d2), t3;
        }
        function d2(t3) {
          t3.forEach(p2);
        }
        function p2(t3) {
          t3.forEach(g2);
        }
        function g2(t3) {
          t3[0] = t3[0] * Math.pow(2, a2) - u2, t3[1] = t3[1] * Math.pow(2, a2) - u2;
        }
        function y2() {
          return c2 = r2 + 2 * (u2 = 3 * o2) >> a2, f2 = i2 + 2 * u2 >> a2, l2;
        }
        return l2.x = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : wa(+n3), l2) : t2;
        }, l2.y = function(t3) {
          return arguments.length ? (n2 = typeof t3 == "function" ? t3 : wa(+t3), l2) : n2;
        }, l2.weight = function(t3) {
          return arguments.length ? (e2 = typeof t3 == "function" ? t3 : wa(+t3), l2) : e2;
        }, l2.size = function(t3) {
          if (!arguments.length)
            return [r2, i2];
          var n3 = +t3[0], e3 = +t3[1];
          if (!(n3 >= 0 && e3 >= 0))
            throw new Error("invalid size");
          return r2 = n3, i2 = e3, y2();
        }, l2.cellSize = function(t3) {
          if (!arguments.length)
            return 1 << a2;
          if (!((t3 = +t3) >= 1))
            throw new Error("invalid cell size");
          return a2 = Math.floor(Math.log(t3) / Math.LN2), y2();
        }, l2.thresholds = function(t3) {
          return arguments.length ? (s2 = typeof t3 == "function" ? t3 : Array.isArray(t3) ? wa(ma.call(t3)) : wa(t3), l2) : s2;
        }, l2.bandwidth = function(t3) {
          if (!arguments.length)
            return Math.sqrt(o2 * (o2 + 1));
          if (!((t3 = +t3) >= 0))
            throw new Error("invalid bandwidth");
          return o2 = Math.round((Math.sqrt(4 * t3 * t3 + 1) - 1) / 2), y2();
        }, l2;
      }, t.contours = ka, t.count = c, t.create = function(t2) {
        return Dn(At(t2).call(document.documentElement));
      }, t.creator = At, t.cross = function(...t2) {
        const n2 = typeof t2[t2.length - 1] == "function" && function(t3) {
          return (n3) => t3(...n3);
        }(t2.pop()), e2 = (t2 = t2.map(l)).map(f), r2 = t2.length - 1, i2 = new Array(r2 + 1).fill(0), o2 = [];
        if (r2 < 0 || e2.some(s))
          return o2;
        for (; ; ) {
          o2.push(i2.map((n3, e3) => t2[e3][n3]));
          let a2 = r2;
          for (; ++i2[a2] === e2[a2]; ) {
            if (a2 === 0)
              return n2 ? o2.map(n2) : o2;
            i2[a2--] = 0;
          }
        }
      }, t.csv = Pu, t.csvFormat = hu, t.csvFormatBody = du, t.csvFormatRow = gu, t.csvFormatRows = pu, t.csvFormatValue = yu, t.csvParse = su, t.csvParseRows = lu, t.cubehelix = tr, t.cumsum = function(t2, n2) {
        var e2 = 0, r2 = 0;
        return Float64Array.from(t2, n2 === void 0 ? (t3) => e2 += +t3 || 0 : (i2) => e2 += +n2(i2, r2++, t2) || 0);
      }, t.curveBasis = function(t2) {
        return new hm(t2);
      }, t.curveBasisClosed = function(t2) {
        return new dm(t2);
      }, t.curveBasisOpen = function(t2) {
        return new pm(t2);
      }, t.curveBundle = ym, t.curveCardinal = bm, t.curveCardinalClosed = xm, t.curveCardinalOpen = Mm, t.curveCatmullRom = Sm, t.curveCatmullRomClosed = km, t.curveCatmullRomOpen = Cm, t.curveLinear = Sb, t.curveLinearClosed = function(t2) {
        return new Pm(t2);
      }, t.curveMonotoneX = function(t2) {
        return new Fm(t2);
      }, t.curveMonotoneY = function(t2) {
        return new Om(t2);
      }, t.curveNatural = function(t2) {
        return new Im(t2);
      }, t.curveStep = function(t2) {
        return new Ym(t2, 0.5);
      }, t.curveStepAfter = function(t2) {
        return new Ym(t2, 1);
      }, t.curveStepBefore = function(t2) {
        return new Ym(t2, 0);
      }, t.descending = function(t2, n2) {
        return n2 < t2 ? -1 : n2 > t2 ? 1 : n2 >= t2 ? 0 : NaN;
      }, t.deviation = d, t.difference = function(t2, ...n2) {
        t2 = new Set(t2);
        for (const e2 of n2)
          for (const n3 of e2)
            t2.delete(n3);
        return t2;
      }, t.disjoint = function(t2, n2) {
        const e2 = n2[Symbol.iterator](), r2 = new Set();
        for (const n3 of t2) {
          if (r2.has(n3))
            return false;
          let t3, i2;
          for (; ({value: t3, done: i2} = e2.next()) && !i2; ) {
            if (Object.is(n3, t3))
              return false;
            r2.add(t3);
          }
        }
        return true;
      }, t.dispatch = pt, t.drag = function() {
        var t2, n2, e2, r2, i2 = Xn, o2 = Gn, a2 = Vn, u2 = $n, c2 = {}, f2 = pt("start", "drag", "end"), s2 = 0, l2 = 0;
        function h2(t3) {
          t3.on("mousedown.drag", d2).filter(u2).on("touchstart.drag", y2).on("touchmove.drag", v2).on("touchend.drag touchcancel.drag", _2).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function d2(a3, u3) {
          if (!r2 && i2.call(this, a3, u3)) {
            var c3 = b2(this, o2.call(this, a3, u3), a3, u3, "mouse");
            c3 && (Dn(a3.view).on("mousemove.drag", p2, true).on("mouseup.drag", g2, true), Yn(a3.view), In(a3), e2 = false, t2 = a3.clientX, n2 = a3.clientY, c3("start", a3));
          }
        }
        function p2(r3) {
          if (Bn(r3), !e2) {
            var i3 = r3.clientX - t2, o3 = r3.clientY - n2;
            e2 = i3 * i3 + o3 * o3 > l2;
          }
          c2.mouse("drag", r3);
        }
        function g2(t3) {
          Dn(t3.view).on("mousemove.drag mouseup.drag", null), Ln(t3.view, e2), Bn(t3), c2.mouse("end", t3);
        }
        function y2(t3, n3) {
          if (i2.call(this, t3, n3)) {
            var e3, r3, a3 = t3.changedTouches, u3 = o2.call(this, t3, n3), c3 = a3.length;
            for (e3 = 0; e3 < c3; ++e3)
              (r3 = b2(this, u3, t3, n3, a3[e3].identifier, a3[e3])) && (In(t3), r3("start", t3, a3[e3]));
          }
        }
        function v2(t3) {
          var n3, e3, r3 = t3.changedTouches, i3 = r3.length;
          for (n3 = 0; n3 < i3; ++n3)
            (e3 = c2[r3[n3].identifier]) && (Bn(t3), e3("drag", t3, r3[n3]));
        }
        function _2(t3) {
          var n3, e3, i3 = t3.changedTouches, o3 = i3.length;
          for (r2 && clearTimeout(r2), r2 = setTimeout(function() {
            r2 = null;
          }, 500), n3 = 0; n3 < o3; ++n3)
            (e3 = c2[i3[n3].identifier]) && (In(t3), e3("end", t3, i3[n3]));
        }
        function b2(t3, n3, e3, r3, i3, o3) {
          var u3, l3, d4, p3 = f2.copy(), g3 = Un(o3 || e3, n3);
          if ((d4 = a2.call(t3, new Hn("beforestart", {sourceEvent: e3, target: h2, identifier: i3, active: s2, x: g3[0], y: g3[1], dx: 0, dy: 0, dispatch: p3}), r3)) != null)
            return u3 = d4.x - g3[0] || 0, l3 = d4.y - g3[1] || 0, function e4(o4, a3, f3) {
              var y3, v3 = g3;
              switch (o4) {
                case "start":
                  c2[i3] = e4, y3 = s2++;
                  break;
                case "end":
                  delete c2[i3], --s2;
                case "drag":
                  g3 = Un(f3 || a3, n3), y3 = s2;
              }
              p3.call(o4, t3, new Hn(o4, {sourceEvent: a3, subject: d4, target: h2, identifier: i3, active: y3, x: g3[0] + u3, y: g3[1] + l3, dx: g3[0] - v3[0], dy: g3[1] - v3[1], dispatch: p3}), r3);
            };
        }
        return h2.filter = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : jn(!!t3), h2) : i2;
        }, h2.container = function(t3) {
          return arguments.length ? (o2 = typeof t3 == "function" ? t3 : jn(t3), h2) : o2;
        }, h2.subject = function(t3) {
          return arguments.length ? (a2 = typeof t3 == "function" ? t3 : jn(t3), h2) : a2;
        }, h2.touchable = function(t3) {
          return arguments.length ? (u2 = typeof t3 == "function" ? t3 : jn(!!t3), h2) : u2;
        }, h2.on = function() {
          var t3 = f2.on.apply(f2, arguments);
          return t3 === f2 ? h2 : t3;
        }, h2.clickDistance = function(t3) {
          return arguments.length ? (l2 = (t3 = +t3) * t3, h2) : Math.sqrt(l2);
        }, h2;
      }, t.dragDisable = Yn, t.dragEnable = Ln, t.dsv = function(t2, n2, e2, r2) {
        arguments.length === 3 && typeof e2 == "function" && (r2 = e2, e2 = void 0);
        var i2 = cu(t2);
        return Nu(n2, e2).then(function(t3) {
          return i2.parse(t3, r2);
        });
      }, t.dsvFormat = cu, t.easeBack = so, t.easeBackIn = co, t.easeBackInOut = so, t.easeBackOut = fo, t.easeBounce = ao, t.easeBounceIn = function(t2) {
        return 1 - ao(1 - t2);
      }, t.easeBounceInOut = function(t2) {
        return ((t2 *= 2) <= 1 ? 1 - ao(1 - t2) : ao(t2 - 1) + 1) / 2;
      }, t.easeBounceOut = ao, t.easeCircle = ro, t.easeCircleIn = function(t2) {
        return 1 - Math.sqrt(1 - t2 * t2);
      }, t.easeCircleInOut = ro, t.easeCircleOut = function(t2) {
        return Math.sqrt(1 - --t2 * t2);
      }, t.easeCubic = $i, t.easeCubicIn = function(t2) {
        return t2 * t2 * t2;
      }, t.easeCubicInOut = $i, t.easeCubicOut = function(t2) {
        return --t2 * t2 * t2 + 1;
      }, t.easeElastic = po, t.easeElasticIn = ho, t.easeElasticInOut = go, t.easeElasticOut = po, t.easeExp = eo, t.easeExpIn = function(t2) {
        return no(1 - +t2);
      }, t.easeExpInOut = eo, t.easeExpOut = function(t2) {
        return 1 - no(t2);
      }, t.easeLinear = (t2) => +t2, t.easePoly = Ki, t.easePolyIn = Wi, t.easePolyInOut = Ki, t.easePolyOut = Zi, t.easeQuad = Vi, t.easeQuadIn = function(t2) {
        return t2 * t2;
      }, t.easeQuadInOut = Vi, t.easeQuadOut = function(t2) {
        return t2 * (2 - t2);
      }, t.easeSin = to, t.easeSinIn = function(t2) {
        return +t2 == 1 ? 1 : 1 - Math.cos(t2 * Ji);
      }, t.easeSinInOut = to, t.easeSinOut = function(t2) {
        return Math.sin(t2 * Ji);
      }, t.every = function(t2, n2) {
        if (typeof n2 != "function")
          throw new TypeError("test is not a function");
        let e2 = -1;
        for (const r2 of t2)
          if (!n2(r2, ++e2, t2))
            return false;
        return true;
      }, t.extent = p, t.filter = function(t2, n2) {
        if (typeof n2 != "function")
          throw new TypeError("test is not a function");
        const e2 = [];
        let r2 = -1;
        for (const i2 of t2)
          n2(i2, ++r2, t2) && e2.push(i2);
        return e2;
      }, t.forceCenter = function(t2, n2) {
        var e2, r2 = 1;
        function i2() {
          var i3, o2, a2 = e2.length, u2 = 0, c2 = 0;
          for (i3 = 0; i3 < a2; ++i3)
            u2 += (o2 = e2[i3]).x, c2 += o2.y;
          for (u2 = (u2 / a2 - t2) * r2, c2 = (c2 / a2 - n2) * r2, i3 = 0; i3 < a2; ++i3)
            (o2 = e2[i3]).x -= u2, o2.y -= c2;
        }
        return t2 == null && (t2 = 0), n2 == null && (n2 = 0), i2.initialize = function(t3) {
          e2 = t3;
        }, i2.x = function(n3) {
          return arguments.length ? (t2 = +n3, i2) : t2;
        }, i2.y = function(t3) {
          return arguments.length ? (n2 = +t3, i2) : n2;
        }, i2.strength = function(t3) {
          return arguments.length ? (r2 = +t3, i2) : r2;
        }, i2;
      }, t.forceCollide = function(t2) {
        var n2, e2, r2, i2 = 1, o2 = 1;
        function a2() {
          for (var t3, a3, c3, f2, s2, l2, h2, d2 = n2.length, p2 = 0; p2 < o2; ++p2)
            for (a3 = Lu(n2, $u, Wu).visitAfter(u2), t3 = 0; t3 < d2; ++t3)
              c3 = n2[t3], l2 = e2[c3.index], h2 = l2 * l2, f2 = c3.x + c3.vx, s2 = c3.y + c3.vy, a3.visit(g2);
          function g2(t4, n3, e3, o3, a4) {
            var u3 = t4.data, d4 = t4.r, p3 = l2 + d4;
            if (!u3)
              return n3 > f2 + p3 || o3 < f2 - p3 || e3 > s2 + p3 || a4 < s2 - p3;
            if (u3.index > c3.index) {
              var g3 = f2 - u3.x - u3.vx, y2 = s2 - u3.y - u3.vy, v2 = g3 * g3 + y2 * y2;
              v2 < p3 * p3 && (g3 === 0 && (v2 += (g3 = Vu(r2)) * g3), y2 === 0 && (v2 += (y2 = Vu(r2)) * y2), v2 = (p3 - (v2 = Math.sqrt(v2))) / v2 * i2, c3.vx += (g3 *= v2) * (p3 = (d4 *= d4) / (h2 + d4)), c3.vy += (y2 *= v2) * p3, u3.vx -= g3 * (p3 = 1 - p3), u3.vy -= y2 * p3);
            }
          }
        }
        function u2(t3) {
          if (t3.data)
            return t3.r = e2[t3.data.index];
          for (var n3 = t3.r = 0; n3 < 4; ++n3)
            t3[n3] && t3[n3].r > t3.r && (t3.r = t3[n3].r);
        }
        function c2() {
          if (n2) {
            var r3, i3, o3 = n2.length;
            for (e2 = new Array(o3), r3 = 0; r3 < o3; ++r3)
              i3 = n2[r3], e2[i3.index] = +t2(i3, r3, n2);
          }
        }
        return typeof t2 != "function" && (t2 = Gu(t2 == null ? 1 : +t2)), a2.initialize = function(t3, e3) {
          n2 = t3, r2 = e3, c2();
        }, a2.iterations = function(t3) {
          return arguments.length ? (o2 = +t3, a2) : o2;
        }, a2.strength = function(t3) {
          return arguments.length ? (i2 = +t3, a2) : i2;
        }, a2.radius = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : Gu(+n3), c2(), a2) : t2;
        }, a2;
      }, t.forceLink = function(t2) {
        var n2, e2, r2, i2, o2, a2, u2 = Zu, c2 = function(t3) {
          return 1 / Math.min(i2[t3.source.index], i2[t3.target.index]);
        }, f2 = Gu(30), s2 = 1;
        function l2(r3) {
          for (var i3 = 0, u3 = t2.length; i3 < s2; ++i3)
            for (var c3, f3, l3, h3, d4, p3, g2, y2 = 0; y2 < u3; ++y2)
              f3 = (c3 = t2[y2]).source, h3 = (l3 = c3.target).x + l3.vx - f3.x - f3.vx || Vu(a2), d4 = l3.y + l3.vy - f3.y - f3.vy || Vu(a2), h3 *= p3 = ((p3 = Math.sqrt(h3 * h3 + d4 * d4)) - e2[y2]) / p3 * r3 * n2[y2], d4 *= p3, l3.vx -= h3 * (g2 = o2[y2]), l3.vy -= d4 * g2, f3.vx += h3 * (g2 = 1 - g2), f3.vy += d4 * g2;
        }
        function h2() {
          if (r2) {
            var a3, c3, f3 = r2.length, s3 = t2.length, l3 = new Map(r2.map((t3, n3) => [u2(t3, n3, r2), t3]));
            for (a3 = 0, i2 = new Array(f3); a3 < s3; ++a3)
              (c3 = t2[a3]).index = a3, typeof c3.source != "object" && (c3.source = Ku(l3, c3.source)), typeof c3.target != "object" && (c3.target = Ku(l3, c3.target)), i2[c3.source.index] = (i2[c3.source.index] || 0) + 1, i2[c3.target.index] = (i2[c3.target.index] || 0) + 1;
            for (a3 = 0, o2 = new Array(s3); a3 < s3; ++a3)
              c3 = t2[a3], o2[a3] = i2[c3.source.index] / (i2[c3.source.index] + i2[c3.target.index]);
            n2 = new Array(s3), d2(), e2 = new Array(s3), p2();
          }
        }
        function d2() {
          if (r2)
            for (var e3 = 0, i3 = t2.length; e3 < i3; ++e3)
              n2[e3] = +c2(t2[e3], e3, t2);
        }
        function p2() {
          if (r2)
            for (var n3 = 0, i3 = t2.length; n3 < i3; ++n3)
              e2[n3] = +f2(t2[n3], n3, t2);
        }
        return t2 == null && (t2 = []), l2.initialize = function(t3, n3) {
          r2 = t3, a2 = n3, h2();
        }, l2.links = function(n3) {
          return arguments.length ? (t2 = n3, h2(), l2) : t2;
        }, l2.id = function(t3) {
          return arguments.length ? (u2 = t3, l2) : u2;
        }, l2.iterations = function(t3) {
          return arguments.length ? (s2 = +t3, l2) : s2;
        }, l2.strength = function(t3) {
          return arguments.length ? (c2 = typeof t3 == "function" ? t3 : Gu(+t3), d2(), l2) : c2;
        }, l2.distance = function(t3) {
          return arguments.length ? (f2 = typeof t3 == "function" ? t3 : Gu(+t3), p2(), l2) : f2;
        }, l2;
      }, t.forceManyBody = function() {
        var t2, n2, e2, r2, i2, o2 = Gu(-30), a2 = 1, u2 = 1 / 0, c2 = 0.81;
        function f2(e3) {
          var i3, o3 = t2.length, a3 = Lu(t2, Ju, tc).visitAfter(l2);
          for (r2 = e3, i3 = 0; i3 < o3; ++i3)
            n2 = t2[i3], a3.visit(h2);
        }
        function s2() {
          if (t2) {
            var n3, e3, r3 = t2.length;
            for (i2 = new Array(r3), n3 = 0; n3 < r3; ++n3)
              e3 = t2[n3], i2[e3.index] = +o2(e3, n3, t2);
          }
        }
        function l2(t3) {
          var n3, e3, r3, o3, a3, u3 = 0, c3 = 0;
          if (t3.length) {
            for (r3 = o3 = a3 = 0; a3 < 4; ++a3)
              (n3 = t3[a3]) && (e3 = Math.abs(n3.value)) && (u3 += n3.value, c3 += e3, r3 += e3 * n3.x, o3 += e3 * n3.y);
            t3.x = r3 / c3, t3.y = o3 / c3;
          } else {
            (n3 = t3).x = n3.data.x, n3.y = n3.data.y;
            do {
              u3 += i2[n3.data.index];
            } while (n3 = n3.next);
          }
          t3.value = u3;
        }
        function h2(t3, o3, f3, s3) {
          if (!t3.value)
            return true;
          var l3 = t3.x - n2.x, h3 = t3.y - n2.y, d2 = s3 - o3, p2 = l3 * l3 + h3 * h3;
          if (d2 * d2 / c2 < p2)
            return p2 < u2 && (l3 === 0 && (p2 += (l3 = Vu(e2)) * l3), h3 === 0 && (p2 += (h3 = Vu(e2)) * h3), p2 < a2 && (p2 = Math.sqrt(a2 * p2)), n2.vx += l3 * t3.value * r2 / p2, n2.vy += h3 * t3.value * r2 / p2), true;
          if (!(t3.length || p2 >= u2)) {
            (t3.data !== n2 || t3.next) && (l3 === 0 && (p2 += (l3 = Vu(e2)) * l3), h3 === 0 && (p2 += (h3 = Vu(e2)) * h3), p2 < a2 && (p2 = Math.sqrt(a2 * p2)));
            do {
              t3.data !== n2 && (d2 = i2[t3.data.index] * r2 / p2, n2.vx += l3 * d2, n2.vy += h3 * d2);
            } while (t3 = t3.next);
          }
        }
        return f2.initialize = function(n3, r3) {
          t2 = n3, e2 = r3, s2();
        }, f2.strength = function(t3) {
          return arguments.length ? (o2 = typeof t3 == "function" ? t3 : Gu(+t3), s2(), f2) : o2;
        }, f2.distanceMin = function(t3) {
          return arguments.length ? (a2 = t3 * t3, f2) : Math.sqrt(a2);
        }, f2.distanceMax = function(t3) {
          return arguments.length ? (u2 = t3 * t3, f2) : Math.sqrt(u2);
        }, f2.theta = function(t3) {
          return arguments.length ? (c2 = t3 * t3, f2) : Math.sqrt(c2);
        }, f2;
      }, t.forceRadial = function(t2, n2, e2) {
        var r2, i2, o2, a2 = Gu(0.1);
        function u2(t3) {
          for (var a3 = 0, u3 = r2.length; a3 < u3; ++a3) {
            var c3 = r2[a3], f2 = c3.x - n2 || 1e-6, s2 = c3.y - e2 || 1e-6, l2 = Math.sqrt(f2 * f2 + s2 * s2), h2 = (o2[a3] - l2) * i2[a3] * t3 / l2;
            c3.vx += f2 * h2, c3.vy += s2 * h2;
          }
        }
        function c2() {
          if (r2) {
            var n3, e3 = r2.length;
            for (i2 = new Array(e3), o2 = new Array(e3), n3 = 0; n3 < e3; ++n3)
              o2[n3] = +t2(r2[n3], n3, r2), i2[n3] = isNaN(o2[n3]) ? 0 : +a2(r2[n3], n3, r2);
          }
        }
        return typeof t2 != "function" && (t2 = Gu(+t2)), n2 == null && (n2 = 0), e2 == null && (e2 = 0), u2.initialize = function(t3) {
          r2 = t3, c2();
        }, u2.strength = function(t3) {
          return arguments.length ? (a2 = typeof t3 == "function" ? t3 : Gu(+t3), c2(), u2) : a2;
        }, u2.radius = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : Gu(+n3), c2(), u2) : t2;
        }, u2.x = function(t3) {
          return arguments.length ? (n2 = +t3, u2) : n2;
        }, u2.y = function(t3) {
          return arguments.length ? (e2 = +t3, u2) : e2;
        }, u2;
      }, t.forceSimulation = function(t2) {
        var n2, e2 = 1, r2 = 1e-3, i2 = 1 - Math.pow(r2, 1 / 300), o2 = 0, a2 = 0.6, u2 = new Map(), c2 = ri(l2), f2 = pt("tick", "end"), s2 = function() {
          let t3 = 1;
          return () => (t3 = (1664525 * t3 + 1013904223) % Qu) / Qu;
        }();
        function l2() {
          h2(), f2.call("tick", n2), e2 < r2 && (c2.stop(), f2.call("end", n2));
        }
        function h2(r3) {
          var c3, f3, s3 = t2.length;
          r3 === void 0 && (r3 = 1);
          for (var l3 = 0; l3 < r3; ++l3)
            for (e2 += (o2 - e2) * i2, u2.forEach(function(t3) {
              t3(e2);
            }), c3 = 0; c3 < s3; ++c3)
              (f3 = t2[c3]).fx == null ? f3.x += f3.vx *= a2 : (f3.x = f3.fx, f3.vx = 0), f3.fy == null ? f3.y += f3.vy *= a2 : (f3.y = f3.fy, f3.vy = 0);
          return n2;
        }
        function d2() {
          for (var n3, e3 = 0, r3 = t2.length; e3 < r3; ++e3) {
            if ((n3 = t2[e3]).index = e3, n3.fx != null && (n3.x = n3.fx), n3.fy != null && (n3.y = n3.fy), isNaN(n3.x) || isNaN(n3.y)) {
              var i3 = 10 * Math.sqrt(0.5 + e3), o3 = e3 * nc;
              n3.x = i3 * Math.cos(o3), n3.y = i3 * Math.sin(o3);
            }
            (isNaN(n3.vx) || isNaN(n3.vy)) && (n3.vx = n3.vy = 0);
          }
        }
        function p2(n3) {
          return n3.initialize && n3.initialize(t2, s2), n3;
        }
        return t2 == null && (t2 = []), d2(), n2 = {tick: h2, restart: function() {
          return c2.restart(l2), n2;
        }, stop: function() {
          return c2.stop(), n2;
        }, nodes: function(e3) {
          return arguments.length ? (t2 = e3, d2(), u2.forEach(p2), n2) : t2;
        }, alpha: function(t3) {
          return arguments.length ? (e2 = +t3, n2) : e2;
        }, alphaMin: function(t3) {
          return arguments.length ? (r2 = +t3, n2) : r2;
        }, alphaDecay: function(t3) {
          return arguments.length ? (i2 = +t3, n2) : +i2;
        }, alphaTarget: function(t3) {
          return arguments.length ? (o2 = +t3, n2) : o2;
        }, velocityDecay: function(t3) {
          return arguments.length ? (a2 = 1 - t3, n2) : 1 - a2;
        }, randomSource: function(t3) {
          return arguments.length ? (s2 = t3, u2.forEach(p2), n2) : s2;
        }, force: function(t3, e3) {
          return arguments.length > 1 ? (e3 == null ? u2.delete(t3) : u2.set(t3, p2(e3)), n2) : u2.get(t3);
        }, find: function(n3, e3, r3) {
          var i3, o3, a3, u3, c3, f3 = 0, s3 = t2.length;
          for (r3 == null ? r3 = 1 / 0 : r3 *= r3, f3 = 0; f3 < s3; ++f3)
            (a3 = (i3 = n3 - (u3 = t2[f3]).x) * i3 + (o3 = e3 - u3.y) * o3) < r3 && (c3 = u3, r3 = a3);
          return c3;
        }, on: function(t3, e3) {
          return arguments.length > 1 ? (f2.on(t3, e3), n2) : f2.on(t3);
        }};
      }, t.forceX = function(t2) {
        var n2, e2, r2, i2 = Gu(0.1);
        function o2(t3) {
          for (var i3, o3 = 0, a3 = n2.length; o3 < a3; ++o3)
            (i3 = n2[o3]).vx += (r2[o3] - i3.x) * e2[o3] * t3;
        }
        function a2() {
          if (n2) {
            var o3, a3 = n2.length;
            for (e2 = new Array(a3), r2 = new Array(a3), o3 = 0; o3 < a3; ++o3)
              e2[o3] = isNaN(r2[o3] = +t2(n2[o3], o3, n2)) ? 0 : +i2(n2[o3], o3, n2);
          }
        }
        return typeof t2 != "function" && (t2 = Gu(t2 == null ? 0 : +t2)), o2.initialize = function(t3) {
          n2 = t3, a2();
        }, o2.strength = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : Gu(+t3), a2(), o2) : i2;
        }, o2.x = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : Gu(+n3), a2(), o2) : t2;
        }, o2;
      }, t.forceY = function(t2) {
        var n2, e2, r2, i2 = Gu(0.1);
        function o2(t3) {
          for (var i3, o3 = 0, a3 = n2.length; o3 < a3; ++o3)
            (i3 = n2[o3]).vy += (r2[o3] - i3.y) * e2[o3] * t3;
        }
        function a2() {
          if (n2) {
            var o3, a3 = n2.length;
            for (e2 = new Array(a3), r2 = new Array(a3), o3 = 0; o3 < a3; ++o3)
              e2[o3] = isNaN(r2[o3] = +t2(n2[o3], o3, n2)) ? 0 : +i2(n2[o3], o3, n2);
          }
        }
        return typeof t2 != "function" && (t2 = Gu(t2 == null ? 0 : +t2)), o2.initialize = function(t3) {
          n2 = t3, a2();
        }, o2.strength = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : Gu(+t3), a2(), o2) : i2;
        }, o2.y = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : Gu(+n3), a2(), o2) : t2;
        }, o2;
      }, t.formatDefaultLocale = gc, t.formatLocale = pc, t.formatSpecifier = ac, t.fsum = function(t2, n2) {
        const e2 = new g();
        if (n2 === void 0)
          for (let n3 of t2)
            (n3 = +n3) && e2.add(n3);
        else {
          let r2 = -1;
          for (let i2 of t2)
            (i2 = +n2(i2, ++r2, t2)) && e2.add(i2);
        }
        return +e2;
      }, t.geoAlbers = bh, t.geoAlbersUsa = function() {
        var t2, n2, e2, r2, i2, o2, a2 = bh(), u2 = _h().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), c2 = _h().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), f2 = {point: function(t3, n3) {
          o2 = [t3, n3];
        }};
        function s2(t3) {
          var n3 = t3[0], a3 = t3[1];
          return o2 = null, e2.point(n3, a3), o2 || (r2.point(n3, a3), o2) || (i2.point(n3, a3), o2);
        }
        function l2() {
          return t2 = n2 = null, s2;
        }
        return s2.invert = function(t3) {
          var n3 = a2.scale(), e3 = a2.translate(), r3 = (t3[0] - e3[0]) / n3, i3 = (t3[1] - e3[1]) / n3;
          return (i3 >= 0.12 && i3 < 0.234 && r3 >= -0.425 && r3 < -0.214 ? u2 : i3 >= 0.166 && i3 < 0.234 && r3 >= -0.214 && r3 < -0.115 ? c2 : a2).invert(t3);
        }, s2.stream = function(e3) {
          return t2 && n2 === e3 ? t2 : (r3 = [a2.stream(n2 = e3), u2.stream(e3), c2.stream(e3)], i3 = r3.length, t2 = {point: function(t3, n3) {
            for (var e4 = -1; ++e4 < i3; )
              r3[e4].point(t3, n3);
          }, sphere: function() {
            for (var t3 = -1; ++t3 < i3; )
              r3[t3].sphere();
          }, lineStart: function() {
            for (var t3 = -1; ++t3 < i3; )
              r3[t3].lineStart();
          }, lineEnd: function() {
            for (var t3 = -1; ++t3 < i3; )
              r3[t3].lineEnd();
          }, polygonStart: function() {
            for (var t3 = -1; ++t3 < i3; )
              r3[t3].polygonStart();
          }, polygonEnd: function() {
            for (var t3 = -1; ++t3 < i3; )
              r3[t3].polygonEnd();
          }});
          var r3, i3;
        }, s2.precision = function(t3) {
          return arguments.length ? (a2.precision(t3), u2.precision(t3), c2.precision(t3), l2()) : a2.precision();
        }, s2.scale = function(t3) {
          return arguments.length ? (a2.scale(t3), u2.scale(0.35 * t3), c2.scale(t3), s2.translate(a2.translate())) : a2.scale();
        }, s2.translate = function(t3) {
          if (!arguments.length)
            return a2.translate();
          var n3 = a2.scale(), o3 = +t3[0], s3 = +t3[1];
          return e2 = a2.translate(t3).clipExtent([[o3 - 0.455 * n3, s3 - 0.238 * n3], [o3 + 0.455 * n3, s3 + 0.238 * n3]]).stream(f2), r2 = u2.translate([o3 - 0.307 * n3, s3 + 0.201 * n3]).clipExtent([[o3 - 0.425 * n3 + bc, s3 + 0.12 * n3 + bc], [o3 - 0.214 * n3 - bc, s3 + 0.234 * n3 - bc]]).stream(f2), i2 = c2.translate([o3 - 0.205 * n3, s3 + 0.212 * n3]).clipExtent([[o3 - 0.214 * n3 + bc, s3 + 0.166 * n3 + bc], [o3 - 0.115 * n3 - bc, s3 + 0.234 * n3 - bc]]).stream(f2), l2();
        }, s2.fitExtent = function(t3, n3) {
          return ah(s2, t3, n3);
        }, s2.fitSize = function(t3, n3) {
          return uh(s2, t3, n3);
        }, s2.fitWidth = function(t3, n3) {
          return ch(s2, t3, n3);
        }, s2.fitHeight = function(t3, n3) {
          return fh(s2, t3, n3);
        }, s2.scale(1070);
      }, t.geoArea = function(t2) {
        return pf = new g(), Wc(t2, gf), 2 * pf;
      }, t.geoAzimuthalEqualArea = function() {
        return ph(wh).scale(124.75).clipAngle(179.999);
      }, t.geoAzimuthalEqualAreaRaw = wh, t.geoAzimuthalEquidistant = function() {
        return ph(Mh).scale(79.4188).clipAngle(179.999);
      }, t.geoAzimuthalEquidistantRaw = Mh, t.geoBounds = function(t2) {
        var n2, e2, r2, i2, o2, a2, u2;
        if (of = rf = -(nf = ef = 1 / 0), lf = [], Wc(t2, jf), e2 = lf.length) {
          for (lf.sort(Qf), n2 = 1, o2 = [r2 = lf[0]]; n2 < e2; ++n2)
            Jf(r2, (i2 = lf[n2])[0]) || Jf(r2, i2[1]) ? (Kf(r2[0], i2[1]) > Kf(r2[0], r2[1]) && (r2[1] = i2[1]), Kf(i2[0], r2[1]) > Kf(r2[0], r2[1]) && (r2[0] = i2[0])) : o2.push(r2 = i2);
          for (a2 = -1 / 0, n2 = 0, r2 = o2[e2 = o2.length - 1]; n2 <= e2; r2 = i2, ++n2)
            i2 = o2[n2], (u2 = Kf(r2[1], i2[0])) > a2 && (a2 = u2, nf = i2[0], rf = r2[1]);
        }
        return lf = hf = null, nf === 1 / 0 || ef === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[nf, ef], [rf, of]];
      }, t.geoCentroid = function(t2) {
        Ef = kf = Nf = Cf = Pf = zf = Df = qf = 0, Rf = new g(), Ff = new g(), Of = new g(), Wc(t2, ts);
        var n2 = +Rf, e2 = +Ff, r2 = +Of, i2 = Dc(n2, e2, r2);
        return i2 < mc && (n2 = zf, e2 = Df, r2 = qf, kf < bc && (n2 = Nf, e2 = Cf, r2 = Pf), (i2 = Dc(n2, e2, r2)) < mc) ? [NaN, NaN] : [Nc(e2, n2) * Tc, Yc(r2 / i2) * Tc];
      }, t.geoCircle = function() {
        var t2, n2, e2 = ls([0, 0]), r2 = ls(90), i2 = ls(6), o2 = {point: function(e3, r3) {
          t2.push(e3 = n2(e3, r3)), e3[0] *= Tc, e3[1] *= Tc;
        }};
        function a2() {
          var a3 = e2.apply(this, arguments), u2 = r2.apply(this, arguments) * Sc, c2 = i2.apply(this, arguments) * Sc;
          return t2 = [], n2 = ps(-a3[0] * Sc, -a3[1] * Sc, 0).invert, bs(o2, u2, c2, 1), a3 = {type: "Polygon", coordinates: [t2]}, t2 = n2 = null, a3;
        }
        return a2.center = function(t3) {
          return arguments.length ? (e2 = typeof t3 == "function" ? t3 : ls([+t3[0], +t3[1]]), a2) : e2;
        }, a2.radius = function(t3) {
          return arguments.length ? (r2 = typeof t3 == "function" ? t3 : ls(+t3), a2) : r2;
        }, a2.precision = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : ls(+t3), a2) : i2;
        }, a2;
      }, t.geoClipAntimeridian = Ps, t.geoClipCircle = zs, t.geoClipExtent = function() {
        var t2, n2, e2, r2 = 0, i2 = 0, o2 = 960, a2 = 500;
        return e2 = {stream: function(e3) {
          return t2 && n2 === e3 ? t2 : t2 = Is(r2, i2, o2, a2)(n2 = e3);
        }, extent: function(u2) {
          return arguments.length ? (r2 = +u2[0][0], i2 = +u2[0][1], o2 = +u2[1][0], a2 = +u2[1][1], t2 = n2 = null, e2) : [[r2, i2], [o2, a2]];
        }};
      }, t.geoClipRectangle = Is, t.geoConicConformal = function() {
        return yh(Eh).scale(109.5).parallels([30, 30]);
      }, t.geoConicConformalRaw = Eh, t.geoConicEqualArea = _h, t.geoConicEqualAreaRaw = vh, t.geoConicEquidistant = function() {
        return yh(Nh).scale(131.154).center([0, 13.9389]);
      }, t.geoConicEquidistantRaw = Nh, t.geoContains = function(t2, n2) {
        return (t2 && $s.hasOwnProperty(t2.type) ? $s[t2.type] : Zs)(t2, n2);
      }, t.geoDistance = Vs, t.geoEqualEarth = function() {
        return ph(Rh).scale(177.158);
      }, t.geoEqualEarthRaw = Rh, t.geoEquirectangular = function() {
        return ph(kh).scale(152.63);
      }, t.geoEquirectangularRaw = kh, t.geoGnomonic = function() {
        return ph(Fh).scale(144.049).clipAngle(60);
      }, t.geoGnomonicRaw = Fh, t.geoGraticule = il, t.geoGraticule10 = function() {
        return il()();
      }, t.geoIdentity = function() {
        var t2, n2, e2, r2, i2, o2, a2, u2 = 1, c2 = 0, f2 = 0, s2 = 1, l2 = 1, h2 = 0, d2 = null, p2 = 1, g2 = 1, y2 = rh({point: function(t3, n3) {
          var e3 = b2([t3, n3]);
          this.stream.point(e3[0], e3[1]);
        }}), v2 = fl;
        function _2() {
          return p2 = u2 * s2, g2 = u2 * l2, o2 = a2 = null, b2;
        }
        function b2(e3) {
          var r3 = e3[0] * p2, i3 = e3[1] * g2;
          if (h2) {
            var o3 = i3 * t2 - r3 * n2;
            r3 = r3 * t2 + i3 * n2, i3 = o3;
          }
          return [r3 + c2, i3 + f2];
        }
        return b2.invert = function(e3) {
          var r3 = e3[0] - c2, i3 = e3[1] - f2;
          if (h2) {
            var o3 = i3 * t2 + r3 * n2;
            r3 = r3 * t2 - i3 * n2, i3 = o3;
          }
          return [r3 / p2, i3 / g2];
        }, b2.stream = function(t3) {
          return o2 && a2 === t3 ? o2 : o2 = y2(v2(a2 = t3));
        }, b2.postclip = function(t3) {
          return arguments.length ? (v2 = t3, d2 = e2 = r2 = i2 = null, _2()) : v2;
        }, b2.clipExtent = function(t3) {
          return arguments.length ? (v2 = t3 == null ? (d2 = e2 = r2 = i2 = null, fl) : Is(d2 = +t3[0][0], e2 = +t3[0][1], r2 = +t3[1][0], i2 = +t3[1][1]), _2()) : d2 == null ? null : [[d2, e2], [r2, i2]];
        }, b2.scale = function(t3) {
          return arguments.length ? (u2 = +t3, _2()) : u2;
        }, b2.translate = function(t3) {
          return arguments.length ? (c2 = +t3[0], f2 = +t3[1], _2()) : [c2, f2];
        }, b2.angle = function(e3) {
          return arguments.length ? (n2 = Fc(h2 = e3 % 360 * Sc), t2 = Cc(h2), _2()) : h2 * Tc;
        }, b2.reflectX = function(t3) {
          return arguments.length ? (s2 = t3 ? -1 : 1, _2()) : s2 < 0;
        }, b2.reflectY = function(t3) {
          return arguments.length ? (l2 = t3 ? -1 : 1, _2()) : l2 < 0;
        }, b2.fitExtent = function(t3, n3) {
          return ah(b2, t3, n3);
        }, b2.fitSize = function(t3, n3) {
          return uh(b2, t3, n3);
        }, b2.fitWidth = function(t3, n3) {
          return ch(b2, t3, n3);
        }, b2.fitHeight = function(t3, n3) {
          return fh(b2, t3, n3);
        }, b2;
      }, t.geoInterpolate = function(t2, n2) {
        var e2 = t2[0] * Sc, r2 = t2[1] * Sc, i2 = n2[0] * Sc, o2 = n2[1] * Sc, a2 = Cc(r2), u2 = Fc(r2), c2 = Cc(o2), f2 = Fc(o2), s2 = a2 * Cc(e2), l2 = a2 * Fc(e2), h2 = c2 * Cc(i2), d2 = c2 * Fc(i2), p2 = 2 * Yc(Uc(Lc(o2 - r2) + a2 * c2 * Lc(i2 - e2))), g2 = Fc(p2), y2 = p2 ? function(t3) {
          var n3 = Fc(t3 *= p2) / g2, e3 = Fc(p2 - t3) / g2, r3 = e3 * s2 + n3 * h2, i3 = e3 * l2 + n3 * d2, o3 = e3 * u2 + n3 * f2;
          return [Nc(i3, r3) * Tc, Nc(o3, Uc(r3 * r3 + i3 * i3)) * Tc];
        } : function() {
          return [e2 * Tc, r2 * Tc];
        };
        return y2.distance = p2, y2;
      }, t.geoLength = Hs, t.geoMercator = function() {
        return Th(Ah).scale(961 / Ac);
      }, t.geoMercatorRaw = Ah, t.geoNaturalEarth1 = function() {
        return ph(Oh).scale(175.295);
      }, t.geoNaturalEarth1Raw = Oh, t.geoOrthographic = function() {
        return ph(Uh).scale(249.5).clipAngle(90.000001);
      }, t.geoOrthographicRaw = Uh, t.geoPath = function(t2, n2) {
        var e2, r2, i2 = 4.5;
        function o2(t3) {
          return t3 && (typeof i2 == "function" && r2.pointRadius(+i2.apply(this, arguments)), Wc(t3, e2(r2))), r2.result();
        }
        return o2.area = function(t3) {
          return Wc(t3, e2(hl)), hl.result();
        }, o2.measure = function(t3) {
          return Wc(t3, e2(Ql)), Ql.result();
        }, o2.bounds = function(t3) {
          return Wc(t3, e2(xl)), xl.result();
        }, o2.centroid = function(t3) {
          return Wc(t3, e2(Rl)), Rl.result();
        }, o2.projection = function(n3) {
          return arguments.length ? (e2 = n3 == null ? (t2 = null, fl) : (t2 = n3).stream, o2) : t2;
        }, o2.context = function(t3) {
          return arguments.length ? (r2 = t3 == null ? (n2 = null, new nh()) : new Xl(n2 = t3), typeof i2 != "function" && r2.pointRadius(i2), o2) : n2;
        }, o2.pointRadius = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : (r2.pointRadius(+t3), +t3), o2) : i2;
        }, o2.projection(t2).context(n2);
      }, t.geoProjection = ph, t.geoProjectionMutator = gh, t.geoRotation = _s, t.geoStereographic = function() {
        return ph(Ih).scale(250).clipAngle(142);
      }, t.geoStereographicRaw = Ih, t.geoStream = Wc, t.geoTransform = function(t2) {
        return {stream: rh(t2)};
      }, t.geoTransverseMercator = function() {
        var t2 = Th(Bh), n2 = t2.center, e2 = t2.rotate;
        return t2.center = function(t3) {
          return arguments.length ? n2([-t3[1], t3[0]]) : [(t3 = n2())[1], -t3[0]];
        }, t2.rotate = function(t3) {
          return arguments.length ? e2([t3[0], t3[1], t3.length > 2 ? t3[2] + 90 : 90]) : [(t3 = e2())[0], t3[1], t3[2] - 90];
        }, e2([0, 0, 90]).scale(159.155);
      }, t.geoTransverseMercatorRaw = Bh, t.gray = function(t2, n2) {
        return new Fe(t2, 0, 0, n2 == null ? 1 : n2);
      }, t.greatest = function(t2, e2 = n) {
        let r2, i2 = false;
        if (e2.length === 1) {
          let o2;
          for (const a2 of t2) {
            const t3 = e2(a2);
            (i2 ? n(t3, o2) > 0 : n(t3, t3) === 0) && (r2 = a2, o2 = t3, i2 = true);
          }
        } else
          for (const n2 of t2)
            (i2 ? e2(n2, r2) > 0 : e2(n2, n2) === 0) && (r2 = n2, i2 = true);
        return r2;
      }, t.greatestIndex = function(t2, e2 = n) {
        if (e2.length === 1)
          return G(t2, e2);
        let r2, i2 = -1, o2 = -1;
        for (const n2 of t2)
          ++o2, (i2 < 0 ? e2(n2, n2) === 0 : e2(n2, r2) > 0) && (r2 = n2, i2 = o2);
        return i2;
      }, t.group = M, t.groupSort = function(t2, e2, r2) {
        return (e2.length === 1 ? k(A(t2, e2, r2), ([t3, e3], [r3, i2]) => n(e3, i2) || n(t3, r3)) : k(M(t2, r2), ([t3, r3], [i2, o2]) => e2(r3, o2) || n(t3, i2))).map(([t3]) => t3);
      }, t.groups = function(t2, ...n2) {
        return S(t2, Array.from, w, n2);
      }, t.hcl = Le, t.hierarchy = Xh, t.histogram = I, t.hsl = Ae, t.html = Fu, t.image = function(t2, n2) {
        return new Promise(function(e2, r2) {
          var i2 = new Image();
          for (var o2 in n2)
            i2[o2] = n2[o2];
          i2.onerror = r2, i2.onload = function() {
            e2(i2);
          }, i2.src = t2;
        });
      }, t.index = function(t2, ...n2) {
        return S(t2, w, T, n2);
      }, t.indexes = function(t2, ...n2) {
        return S(t2, Array.from, T, n2);
      }, t.interpolate = Mr, t.interpolateArray = function(t2, n2) {
        return (gr(n2) ? pr : yr)(t2, n2);
      }, t.interpolateBasis = rr, t.interpolateBasisClosed = ir, t.interpolateBlues = D_, t.interpolateBrBG = Xv, t.interpolateBuGn = f_, t.interpolateBuPu = l_, t.interpolateCividis = function(t2) {
        return t2 = Math.max(0, Math.min(1, t2)), "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t2 * (35.34 - t2 * (2381.73 - t2 * (6402.7 - t2 * (7024.72 - 2710.57 * t2))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t2 * (170.73 + t2 * (52.82 - t2 * (131.46 - t2 * (176.58 - 67.37 * t2))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t2 * (442.36 - t2 * (2482.43 - t2 * (6167.24 - t2 * (6614.94 - 2475.67 * t2))))))) + ")";
      }, t.interpolateCool = G_, t.interpolateCubehelix = Yr, t.interpolateCubehelixDefault = H_, t.interpolateCubehelixLong = Lr, t.interpolateDate = vr, t.interpolateDiscrete = function(t2) {
        var n2 = t2.length;
        return function(e2) {
          return t2[Math.max(0, Math.min(n2 - 1, Math.floor(e2 * n2)))];
        };
      }, t.interpolateGnBu = d_, t.interpolateGreens = R_, t.interpolateGreys = O_, t.interpolateHcl = Ur, t.interpolateHclLong = Ir, t.interpolateHsl = Rr, t.interpolateHslLong = Fr, t.interpolateHue = function(t2, n2) {
        var e2 = ur(+t2, +n2);
        return function(t3) {
          var n3 = e2(t3);
          return n3 - 360 * Math.floor(n3 / 360);
        };
      }, t.interpolateInferno = tb, t.interpolateLab = function(t2, n2) {
        var e2 = fr((t2 = Re(t2)).l, (n2 = Re(n2)).l), r2 = fr(t2.a, n2.a), i2 = fr(t2.b, n2.b), o2 = fr(t2.opacity, n2.opacity);
        return function(n3) {
          return t2.l = e2(n3), t2.a = r2(n3), t2.b = i2(n3), t2.opacity = o2(n3), t2 + "";
        };
      }, t.interpolateMagma = J_, t.interpolateNumber = _r, t.interpolateNumberArray = pr, t.interpolateObject = br, t.interpolateOrRd = g_, t.interpolateOranges = j_, t.interpolatePRGn = Vv, t.interpolatePiYG = Wv, t.interpolatePlasma = nb, t.interpolatePuBu = b_, t.interpolatePuBuGn = v_, t.interpolatePuOr = Kv, t.interpolatePuRd = x_, t.interpolatePurples = I_, t.interpolateRainbow = function(t2) {
        (t2 < 0 || t2 > 1) && (t2 -= Math.floor(t2));
        var n2 = Math.abs(t2 - 0.5);
        return V_.h = 360 * t2 - 100, V_.s = 1.5 - 1.5 * n2, V_.l = 0.8 - 0.9 * n2, V_ + "";
      }, t.interpolateRdBu = Jv, t.interpolateRdGy = n_, t.interpolateRdPu = M_, t.interpolateRdYlBu = r_, t.interpolateRdYlGn = o_, t.interpolateReds = Y_, t.interpolateRgb = sr, t.interpolateRgbBasis = hr, t.interpolateRgbBasisClosed = dr, t.interpolateRound = Ar, t.interpolateSinebow = function(t2) {
        var n2;
        return t2 = (0.5 - t2) * Math.PI, $_.r = 255 * (n2 = Math.sin(t2)) * n2, $_.g = 255 * (n2 = Math.sin(t2 + W_)) * n2, $_.b = 255 * (n2 = Math.sin(t2 + Z_)) * n2, $_ + "";
      }, t.interpolateSpectral = u_, t.interpolateString = wr, t.interpolateTransformCss = Cr, t.interpolateTransformSvg = Pr, t.interpolateTurbo = function(t2) {
        return t2 = Math.max(0, Math.min(1, t2)), "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t2 * (1172.33 - t2 * (10793.56 - t2 * (33300.12 - t2 * (38394.49 - 14825.05 * t2))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t2 * (557.33 + t2 * (1225.33 - t2 * (3574.96 - t2 * (1073.77 + 707.56 * t2))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t2 * (3211.1 - t2 * (15327.97 - t2 * (27814 - t2 * (22569.18 - 6838.66 * t2))))))) + ")";
      }, t.interpolateViridis = Q_, t.interpolateWarm = X_, t.interpolateYlGn = E_, t.interpolateYlGnBu = T_, t.interpolateYlOrBr = N_, t.interpolateYlOrRd = P_, t.interpolateZoom = Dr, t.interrupt = gi, t.intersection = function(t2, ...n2) {
        t2 = new Set(t2), n2 = n2.map(et);
        t:
          for (const e2 of t2)
            for (const r2 of n2)
              if (!r2.has(e2)) {
                t2.delete(e2);
                continue t;
              }
        return t2;
      }, t.interval = function(t2, n2, e2) {
        var r2 = new ei(), i2 = n2;
        return n2 == null ? (r2.restart(t2, n2, e2), r2) : (r2._restart = r2.restart, r2.restart = function(t3, n3, e3) {
          n3 = +n3, e3 = e3 == null ? ti() : +e3, r2._restart(function o2(a2) {
            a2 += i2, r2._restart(o2, i2 += n3, e3), t3(a2);
          }, n3, e3);
        }, r2.restart(t2, n2, e2), r2);
      }, t.isoFormat = yv, t.isoParse = vv, t.json = function(t2, n2) {
        return fetch(t2, n2).then(Du);
      }, t.lab = Re, t.lch = function(t2, n2, e2, r2) {
        return arguments.length === 1 ? Ye(t2) : new je(e2, n2, t2, r2 == null ? 1 : r2);
      }, t.least = function(t2, e2 = n) {
        let r2, i2 = false;
        if (e2.length === 1) {
          let o2;
          for (const a2 of t2) {
            const t3 = e2(a2);
            (i2 ? n(t3, o2) < 0 : n(t3, t3) === 0) && (r2 = a2, o2 = t3, i2 = true);
          }
        } else
          for (const n2 of t2)
            (i2 ? e2(n2, r2) < 0 : e2(n2, n2) === 0) && (r2 = n2, i2 = true);
        return r2;
      }, t.leastIndex = K, t.line = Nb, t.lineRadial = Ob, t.linkHorizontal = function() {
        return Lb(jb);
      }, t.linkRadial = function() {
        var t2 = Lb(Xb);
        return t2.angle = t2.x, delete t2.x, t2.radius = t2.y, delete t2.y, t2;
      }, t.linkVertical = function() {
        return Lb(Hb);
      }, t.local = Rn, t.map = function(t2, n2) {
        if (typeof t2[Symbol.iterator] != "function")
          throw new TypeError("values is not iterable");
        if (typeof n2 != "function")
          throw new TypeError("mapper is not a function");
        return Array.from(t2, (e2, r2) => n2(e2, r2, t2));
      }, t.matcher = Ct, t.max = B, t.maxIndex = G, t.mean = function(t2, n2) {
        let e2 = 0, r2 = 0;
        if (n2 === void 0)
          for (let n3 of t2)
            n3 != null && (n3 = +n3) >= n3 && (++e2, r2 += n3);
        else {
          let i2 = -1;
          for (let o2 of t2)
            (o2 = n2(o2, ++i2, t2)) != null && (o2 = +o2) >= o2 && (++e2, r2 += o2);
        }
        if (e2)
          return r2 / e2;
      }, t.median = function(t2, n2) {
        return H(t2, 0.5, n2);
      }, t.merge = V, t.min = Y, t.minIndex = $, t.namespace = xt, t.namespaces = mt, t.nice = O, t.now = ti, t.pack = function() {
        var t2 = null, n2 = 1, e2 = 1, r2 = hd;
        function i2(i3) {
          return i3.x = n2 / 2, i3.y = e2 / 2, t2 ? i3.eachBefore(gd(t2)).eachAfter(yd(r2, 0.5)).eachBefore(vd(1)) : i3.eachBefore(gd(pd)).eachAfter(yd(hd, 1)).eachAfter(yd(r2, i3.r / Math.min(n2, e2))).eachBefore(vd(Math.min(n2, e2) / (2 * i3.r))), i3;
        }
        return i2.radius = function(n3) {
          return arguments.length ? (t2 = sd(n3), i2) : t2;
        }, i2.size = function(t3) {
          return arguments.length ? (n2 = +t3[0], e2 = +t3[1], i2) : [n2, e2];
        }, i2.padding = function(t3) {
          return arguments.length ? (r2 = typeof t3 == "function" ? t3 : dd(+t3), i2) : r2;
        }, i2;
      }, t.packEnclose = Kh, t.packSiblings = function(t2) {
        return fd(t2), t2;
      }, t.pairs = function(t2, n2 = W) {
        const e2 = [];
        let r2, i2 = false;
        for (const o2 of t2)
          i2 && e2.push(n2(r2, o2)), r2 = o2, i2 = true;
        return e2;
      }, t.partition = function() {
        var t2 = 1, n2 = 1, e2 = 0, r2 = false;
        function i2(i3) {
          var o2 = i3.height + 1;
          return i3.x0 = i3.y0 = e2, i3.x1 = t2, i3.y1 = n2 / o2, i3.eachBefore(function(t3, n3) {
            return function(r3) {
              r3.children && bd(r3, r3.x0, t3 * (r3.depth + 1) / n3, r3.x1, t3 * (r3.depth + 2) / n3);
              var i4 = r3.x0, o3 = r3.y0, a2 = r3.x1 - e2, u2 = r3.y1 - e2;
              a2 < i4 && (i4 = a2 = (i4 + a2) / 2), u2 < o3 && (o3 = u2 = (o3 + u2) / 2), r3.x0 = i4, r3.y0 = o3, r3.x1 = a2, r3.y1 = u2;
            };
          }(n2, o2)), r2 && i3.eachBefore(_d), i3;
        }
        return i2.round = function(t3) {
          return arguments.length ? (r2 = !!t3, i2) : r2;
        }, i2.size = function(e3) {
          return arguments.length ? (t2 = +e3[0], n2 = +e3[1], i2) : [t2, n2];
        }, i2.padding = function(t3) {
          return arguments.length ? (e2 = +t3, i2) : e2;
        }, i2;
      }, t.path = fa, t.permute = E, t.pie = function() {
        var t2 = zb, n2 = Pb, e2 = null, r2 = eb(0), i2 = eb(db), o2 = eb(0);
        function a2(a3) {
          var u2, c2, f2, s2, l2, h2 = (a3 = Ab(a3)).length, d2 = 0, p2 = new Array(h2), g2 = new Array(h2), y2 = +r2.apply(this, arguments), v2 = Math.min(db, Math.max(-db, i2.apply(this, arguments) - y2)), _2 = Math.min(Math.abs(v2) / h2, o2.apply(this, arguments)), b2 = _2 * (v2 < 0 ? -1 : 1);
          for (u2 = 0; u2 < h2; ++u2)
            (l2 = g2[p2[u2] = u2] = +t2(a3[u2], u2, a3)) > 0 && (d2 += l2);
          for (n2 != null ? p2.sort(function(t3, e3) {
            return n2(g2[t3], g2[e3]);
          }) : e2 != null && p2.sort(function(t3, n3) {
            return e2(a3[t3], a3[n3]);
          }), u2 = 0, f2 = d2 ? (v2 - h2 * b2) / d2 : 0; u2 < h2; ++u2, y2 = s2)
            c2 = p2[u2], s2 = y2 + ((l2 = g2[c2]) > 0 ? l2 * f2 : 0) + b2, g2[c2] = {data: a3[c2], index: u2, value: l2, startAngle: y2, endAngle: s2, padAngle: _2};
          return g2;
        }
        return a2.value = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : eb(+n3), a2) : t2;
        }, a2.sortValues = function(t3) {
          return arguments.length ? (n2 = t3, e2 = null, a2) : n2;
        }, a2.sort = function(t3) {
          return arguments.length ? (e2 = t3, n2 = null, a2) : e2;
        }, a2.startAngle = function(t3) {
          return arguments.length ? (r2 = typeof t3 == "function" ? t3 : eb(+t3), a2) : r2;
        }, a2.endAngle = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : eb(+t3), a2) : i2;
        }, a2.padAngle = function(t3) {
          return arguments.length ? (o2 = typeof t3 == "function" ? t3 : eb(+t3), a2) : o2;
        }, a2;
      }, t.piecewise = jr, t.pointRadial = Ib, t.pointer = Un, t.pointers = function(t2, n2) {
        return t2.target && (t2 = On(t2), n2 === void 0 && (n2 = t2.currentTarget), t2 = t2.touches || [t2]), Array.from(t2, (t3) => Un(t3, n2));
      }, t.polygonArea = function(t2) {
        for (var n2, e2 = -1, r2 = t2.length, i2 = t2[r2 - 1], o2 = 0; ++e2 < r2; )
          n2 = i2, i2 = t2[e2], o2 += n2[1] * i2[0] - n2[0] * i2[1];
        return o2 / 2;
      }, t.polygonCentroid = function(t2) {
        for (var n2, e2, r2 = -1, i2 = t2.length, o2 = 0, a2 = 0, u2 = t2[i2 - 1], c2 = 0; ++r2 < i2; )
          n2 = u2, u2 = t2[r2], c2 += e2 = n2[0] * u2[1] - u2[0] * n2[1], o2 += (n2[0] + u2[0]) * e2, a2 += (n2[1] + u2[1]) * e2;
        return [o2 / (c2 *= 3), a2 / c2];
      }, t.polygonContains = function(t2, n2) {
        for (var e2, r2, i2 = t2.length, o2 = t2[i2 - 1], a2 = n2[0], u2 = n2[1], c2 = o2[0], f2 = o2[1], s2 = false, l2 = 0; l2 < i2; ++l2)
          e2 = (o2 = t2[l2])[0], (r2 = o2[1]) > u2 != f2 > u2 && a2 < (c2 - e2) * (u2 - r2) / (f2 - r2) + e2 && (s2 = !s2), c2 = e2, f2 = r2;
        return s2;
      }, t.polygonHull = function(t2) {
        if ((e2 = t2.length) < 3)
          return null;
        var n2, e2, r2 = new Array(e2), i2 = new Array(e2);
        for (n2 = 0; n2 < e2; ++n2)
          r2[n2] = [+t2[n2][0], +t2[n2][1], n2];
        for (r2.sort(Fd), n2 = 0; n2 < e2; ++n2)
          i2[n2] = [r2[n2][0], -r2[n2][1]];
        var o2 = Od(r2), a2 = Od(i2), u2 = a2[0] === o2[0], c2 = a2[a2.length - 1] === o2[o2.length - 1], f2 = [];
        for (n2 = o2.length - 1; n2 >= 0; --n2)
          f2.push(t2[r2[o2[n2]][2]]);
        for (n2 = +u2; n2 < a2.length - c2; ++n2)
          f2.push(t2[r2[a2[n2]][2]]);
        return f2;
      }, t.polygonLength = function(t2) {
        for (var n2, e2, r2 = -1, i2 = t2.length, o2 = t2[i2 - 1], a2 = o2[0], u2 = o2[1], c2 = 0; ++r2 < i2; )
          n2 = a2, e2 = u2, n2 -= a2 = (o2 = t2[r2])[0], e2 -= u2 = o2[1], c2 += Math.hypot(n2, e2);
        return c2;
      }, t.precisionFixed = yc, t.precisionPrefix = vc, t.precisionRound = _c, t.quadtree = Lu, t.quantile = H, t.quantileSorted = X, t.quantize = function(t2, n2) {
        for (var e2 = new Array(n2), r2 = 0; r2 < n2; ++r2)
          e2[r2] = t2(r2 / (n2 - 1));
        return e2;
      }, t.quickselect = L, t.radialArea = Ub, t.radialLine = Ob, t.randomBates = Hd, t.randomBernoulli = Vd, t.randomBeta = Zd, t.randomBinomial = Kd, t.randomCauchy = Jd, t.randomExponential = Xd, t.randomGamma = Wd, t.randomGeometric = $d, t.randomInt = Bd, t.randomIrwinHall = jd, t.randomLcg = function(t2 = Math.random()) {
        let n2 = 0 | (0 <= t2 && t2 < 1 ? t2 / ep : Math.abs(t2));
        return () => (n2 = 1664525 * n2 + 1013904223 | 0, ep * (n2 >>> 0));
      }, t.randomLogNormal = Ld, t.randomLogistic = tp, t.randomNormal = Yd, t.randomPareto = Gd, t.randomPoisson = np, t.randomUniform = Id, t.randomWeibull = Qd, t.range = Z, t.reduce = function(t2, n2, e2) {
        if (typeof n2 != "function")
          throw new TypeError("reducer is not a function");
        const r2 = t2[Symbol.iterator]();
        let i2, o2, a2 = -1;
        if (arguments.length < 3) {
          if ({done: i2, value: e2} = r2.next(), i2)
            return;
          ++a2;
        }
        for (; {done: i2, value: o2} = r2.next(), !i2; )
          e2 = n2(e2, o2, ++a2, t2);
        return e2;
      }, t.reverse = function(t2) {
        if (typeof t2[Symbol.iterator] != "function")
          throw new TypeError("values is not iterable");
        return Array.from(t2).reverse();
      }, t.rgb = ve, t.ribbon = function() {
        return ba();
      }, t.ribbonArrow = function() {
        return ba(_a);
      }, t.rollup = A, t.rollups = function(t2, n2, ...e2) {
        return S(t2, Array.from, n2, e2);
      }, t.scaleBand = up, t.scaleDiverging = function t2() {
        var n2 = bp(Cv()(lp));
        return n2.copy = function() {
          return kv(n2, t2());
        }, ip.apply(n2, arguments);
      }, t.scaleDivergingLog = function t2() {
        var n2 = Ep(Cv()).domain([0.1, 1, 10]);
        return n2.copy = function() {
          return kv(n2, t2()).base(n2.base());
        }, ip.apply(n2, arguments);
      }, t.scaleDivergingPow = Pv, t.scaleDivergingSqrt = function() {
        return Pv.apply(null, arguments).exponent(0.5);
      }, t.scaleDivergingSymlog = function t2() {
        var n2 = Cp(Cv());
        return n2.copy = function() {
          return kv(n2, t2()).constant(n2.constant());
        }, ip.apply(n2, arguments);
      }, t.scaleIdentity = function t2(n2) {
        var e2;
        function r2(t3) {
          return isNaN(t3 = +t3) ? e2 : t3;
        }
        return r2.invert = r2, r2.domain = r2.range = function(t3) {
          return arguments.length ? (n2 = Array.from(t3, fp), r2) : n2.slice();
        }, r2.unknown = function(t3) {
          return arguments.length ? (e2 = t3, r2) : e2;
        }, r2.copy = function() {
          return t2(n2).unknown(e2);
        }, n2 = arguments.length ? Array.from(n2, fp) : [0, 1], bp(r2);
      }, t.scaleImplicit = op, t.scaleLinear = function t2() {
        var n2 = vp();
        return n2.copy = function() {
          return gp(n2, t2());
        }, rp.apply(n2, arguments), bp(n2);
      }, t.scaleLog = function t2() {
        var n2 = Ep(yp()).domain([1, 10]);
        return n2.copy = function() {
          return gp(n2, t2()).base(n2.base());
        }, rp.apply(n2, arguments), n2;
      }, t.scaleOrdinal = ap, t.scalePoint = function() {
        return cp(up.apply(null, arguments).paddingInner(1));
      }, t.scalePow = Rp, t.scaleQuantile = function t2() {
        var e2, r2 = [], i2 = [], a2 = [];
        function u2() {
          var t3 = 0, n2 = Math.max(1, i2.length);
          for (a2 = new Array(n2 - 1); ++t3 < n2; )
            a2[t3 - 1] = X(r2, t3 / n2);
          return c2;
        }
        function c2(t3) {
          return isNaN(t3 = +t3) ? e2 : i2[o(a2, t3)];
        }
        return c2.invertExtent = function(t3) {
          var n2 = i2.indexOf(t3);
          return n2 < 0 ? [NaN, NaN] : [n2 > 0 ? a2[n2 - 1] : r2[0], n2 < a2.length ? a2[n2] : r2[r2.length - 1]];
        }, c2.domain = function(t3) {
          if (!arguments.length)
            return r2.slice();
          r2 = [];
          for (let n2 of t3)
            n2 == null || isNaN(n2 = +n2) || r2.push(n2);
          return r2.sort(n), u2();
        }, c2.range = function(t3) {
          return arguments.length ? (i2 = Array.from(t3), u2()) : i2.slice();
        }, c2.unknown = function(t3) {
          return arguments.length ? (e2 = t3, c2) : e2;
        }, c2.quantiles = function() {
          return a2.slice();
        }, c2.copy = function() {
          return t2().domain(r2).range(i2).unknown(e2);
        }, rp.apply(c2, arguments);
      }, t.scaleQuantize = function t2() {
        var n2, e2 = 0, r2 = 1, i2 = 1, a2 = [0.5], u2 = [0, 1];
        function c2(t3) {
          return t3 <= t3 ? u2[o(a2, t3, 0, i2)] : n2;
        }
        function f2() {
          var t3 = -1;
          for (a2 = new Array(i2); ++t3 < i2; )
            a2[t3] = ((t3 + 1) * r2 - (t3 - i2) * e2) / (i2 + 1);
          return c2;
        }
        return c2.domain = function(t3) {
          return arguments.length ? ([e2, r2] = t3, e2 = +e2, r2 = +r2, f2()) : [e2, r2];
        }, c2.range = function(t3) {
          return arguments.length ? (i2 = (u2 = Array.from(t3)).length - 1, f2()) : u2.slice();
        }, c2.invertExtent = function(t3) {
          var n3 = u2.indexOf(t3);
          return n3 < 0 ? [NaN, NaN] : n3 < 1 ? [e2, a2[0]] : n3 >= i2 ? [a2[i2 - 1], r2] : [a2[n3 - 1], a2[n3]];
        }, c2.unknown = function(t3) {
          return arguments.length ? (n2 = t3, c2) : c2;
        }, c2.thresholds = function() {
          return a2.slice();
        }, c2.copy = function() {
          return t2().domain([e2, r2]).range(u2).unknown(n2);
        }, rp.apply(bp(c2), arguments);
      }, t.scaleRadial = function t2() {
        var n2, e2 = vp(), r2 = [0, 1], i2 = false;
        function o2(t3) {
          var r3 = Op(e2(t3));
          return isNaN(r3) ? n2 : i2 ? Math.round(r3) : r3;
        }
        return o2.invert = function(t3) {
          return e2.invert(Fp(t3));
        }, o2.domain = function(t3) {
          return arguments.length ? (e2.domain(t3), o2) : e2.domain();
        }, o2.range = function(t3) {
          return arguments.length ? (e2.range((r2 = Array.from(t3, fp)).map(Fp)), o2) : r2.slice();
        }, o2.rangeRound = function(t3) {
          return o2.range(t3).round(true);
        }, o2.round = function(t3) {
          return arguments.length ? (i2 = !!t3, o2) : i2;
        }, o2.clamp = function(t3) {
          return arguments.length ? (e2.clamp(t3), o2) : e2.clamp();
        }, o2.unknown = function(t3) {
          return arguments.length ? (n2 = t3, o2) : n2;
        }, o2.copy = function() {
          return t2(e2.domain(), r2).round(i2).clamp(e2.clamp()).unknown(n2);
        }, rp.apply(o2, arguments), bp(o2);
      }, t.scaleSequential = function t2() {
        var n2 = bp(Ev()(lp));
        return n2.copy = function() {
          return kv(n2, t2());
        }, ip.apply(n2, arguments);
      }, t.scaleSequentialLog = function t2() {
        var n2 = Ep(Ev()).domain([1, 10]);
        return n2.copy = function() {
          return kv(n2, t2()).base(n2.base());
        }, ip.apply(n2, arguments);
      }, t.scaleSequentialPow = Nv, t.scaleSequentialQuantile = function t2() {
        var e2 = [], r2 = lp;
        function i2(t3) {
          if (!isNaN(t3 = +t3))
            return r2((o(e2, t3, 1) - 1) / (e2.length - 1));
        }
        return i2.domain = function(t3) {
          if (!arguments.length)
            return e2.slice();
          e2 = [];
          for (let n2 of t3)
            n2 == null || isNaN(n2 = +n2) || e2.push(n2);
          return e2.sort(n), i2;
        }, i2.interpolator = function(t3) {
          return arguments.length ? (r2 = t3, i2) : r2;
        }, i2.range = function() {
          return e2.map((t3, n2) => r2(n2 / (e2.length - 1)));
        }, i2.quantiles = function(t3) {
          return Array.from({length: t3 + 1}, (n2, r3) => H(e2, r3 / t3));
        }, i2.copy = function() {
          return t2(r2).domain(e2);
        }, ip.apply(i2, arguments);
      }, t.scaleSequentialSqrt = function() {
        return Nv.apply(null, arguments).exponent(0.5);
      }, t.scaleSequentialSymlog = function t2() {
        var n2 = Cp(Ev());
        return n2.copy = function() {
          return kv(n2, t2()).constant(n2.constant());
        }, ip.apply(n2, arguments);
      }, t.scaleSqrt = function() {
        return Rp.apply(null, arguments).exponent(0.5);
      }, t.scaleSymlog = function t2() {
        var n2 = Cp(yp());
        return n2.copy = function() {
          return gp(n2, t2()).constant(n2.constant());
        }, rp.apply(n2, arguments);
      }, t.scaleThreshold = function t2() {
        var n2, e2 = [0.5], r2 = [0, 1], i2 = 1;
        function a2(t3) {
          return t3 <= t3 ? r2[o(e2, t3, 0, i2)] : n2;
        }
        return a2.domain = function(t3) {
          return arguments.length ? (e2 = Array.from(t3), i2 = Math.min(e2.length, r2.length - 1), a2) : e2.slice();
        }, a2.range = function(t3) {
          return arguments.length ? (r2 = Array.from(t3), i2 = Math.min(e2.length, r2.length - 1), a2) : r2.slice();
        }, a2.invertExtent = function(t3) {
          var n3 = r2.indexOf(t3);
          return [e2[n3 - 1], e2[n3]];
        }, a2.unknown = function(t3) {
          return arguments.length ? (n2 = t3, a2) : n2;
        }, a2.copy = function() {
          return t2().domain(e2).range(r2).unknown(n2);
        }, rp.apply(a2, arguments);
      }, t.scaleTime = function() {
        return rp.apply(Sv(bg, vg, rg, tg, Qp, Zp, $p, Yp, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
      }, t.scaleUtc = function() {
        return rp.apply(Sv(Hg, Lg, kg, Tg, Mg, xg, $p, Yp, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
      }, t.scan = function(t2, n2) {
        const e2 = K(t2, n2);
        return e2 < 0 ? void 0 : e2;
      }, t.schemeAccent = qv, t.schemeBlues = z_, t.schemeBrBG = Hv, t.schemeBuGn = c_, t.schemeBuPu = s_, t.schemeCategory10 = Dv, t.schemeDark2 = Rv, t.schemeGnBu = h_, t.schemeGreens = q_, t.schemeGreys = F_, t.schemeOrRd = p_, t.schemeOranges = L_, t.schemePRGn = Gv, t.schemePaired = Fv, t.schemePastel1 = Ov, t.schemePastel2 = Uv, t.schemePiYG = $v, t.schemePuBu = __, t.schemePuBuGn = y_, t.schemePuOr = Zv, t.schemePuRd = m_, t.schemePurples = U_, t.schemeRdBu = Qv, t.schemeRdGy = t_, t.schemeRdPu = w_, t.schemeRdYlBu = e_, t.schemeRdYlGn = i_, t.schemeReds = B_, t.schemeSet1 = Iv, t.schemeSet2 = Bv, t.schemeSet3 = Yv, t.schemeSpectral = a_, t.schemeTableau10 = Lv, t.schemeYlGn = S_, t.schemeYlGnBu = A_, t.schemeYlOrBr = k_, t.schemeYlOrRd = C_, t.select = Dn, t.selectAll = function(t2) {
        return typeof t2 == "string" ? new Pn([document.querySelectorAll(t2)], [document.documentElement]) : new Pn([t2 == null ? [] : Et(t2)], Cn);
      }, t.selection = zn, t.selector = St, t.selectorAll = Nt, t.shuffle = Q, t.shuffler = J, t.some = function(t2, n2) {
        if (typeof n2 != "function")
          throw new TypeError("test is not a function");
        let e2 = -1;
        for (const r2 of t2)
          if (n2(r2, ++e2, t2))
            return true;
        return false;
      }, t.sort = k, t.stack = function() {
        var t2 = eb([]), n2 = jm, e2 = Lm, r2 = Hm;
        function i2(i3) {
          var o2, a2, u2 = Array.from(t2.apply(this, arguments), Xm), c2 = u2.length, f2 = -1;
          for (const t3 of i3)
            for (o2 = 0, ++f2; o2 < c2; ++o2)
              (u2[o2][f2] = [0, +r2(t3, u2[o2].key, f2, i3)]).data = t3;
          for (o2 = 0, a2 = Ab(n2(u2)); o2 < c2; ++o2)
            u2[a2[o2]].index = o2;
          return e2(u2, a2), u2;
        }
        return i2.keys = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : eb(Array.from(n3)), i2) : t2;
        }, i2.value = function(t3) {
          return arguments.length ? (r2 = typeof t3 == "function" ? t3 : eb(+t3), i2) : r2;
        }, i2.order = function(t3) {
          return arguments.length ? (n2 = t3 == null ? jm : typeof t3 == "function" ? t3 : eb(Array.from(t3)), i2) : n2;
        }, i2.offset = function(t3) {
          return arguments.length ? (e2 = t3 == null ? Lm : t3, i2) : e2;
        }, i2;
      }, t.stackOffsetDiverging = function(t2, n2) {
        if ((u2 = t2.length) > 0)
          for (var e2, r2, i2, o2, a2, u2, c2 = 0, f2 = t2[n2[0]].length; c2 < f2; ++c2)
            for (o2 = a2 = 0, e2 = 0; e2 < u2; ++e2)
              (i2 = (r2 = t2[n2[e2]][c2])[1] - r2[0]) > 0 ? (r2[0] = o2, r2[1] = o2 += i2) : i2 < 0 ? (r2[1] = a2, r2[0] = a2 += i2) : (r2[0] = 0, r2[1] = i2);
      }, t.stackOffsetExpand = function(t2, n2) {
        if ((r2 = t2.length) > 0) {
          for (var e2, r2, i2, o2 = 0, a2 = t2[0].length; o2 < a2; ++o2) {
            for (i2 = e2 = 0; e2 < r2; ++e2)
              i2 += t2[e2][o2][1] || 0;
            if (i2)
              for (e2 = 0; e2 < r2; ++e2)
                t2[e2][o2][1] /= i2;
          }
          Lm(t2, n2);
        }
      }, t.stackOffsetNone = Lm, t.stackOffsetSilhouette = function(t2, n2) {
        if ((e2 = t2.length) > 0) {
          for (var e2, r2 = 0, i2 = t2[n2[0]], o2 = i2.length; r2 < o2; ++r2) {
            for (var a2 = 0, u2 = 0; a2 < e2; ++a2)
              u2 += t2[a2][r2][1] || 0;
            i2[r2][1] += i2[r2][0] = -u2 / 2;
          }
          Lm(t2, n2);
        }
      }, t.stackOffsetWiggle = function(t2, n2) {
        if ((i2 = t2.length) > 0 && (r2 = (e2 = t2[n2[0]]).length) > 0) {
          for (var e2, r2, i2, o2 = 0, a2 = 1; a2 < r2; ++a2) {
            for (var u2 = 0, c2 = 0, f2 = 0; u2 < i2; ++u2) {
              for (var s2 = t2[n2[u2]], l2 = s2[a2][1] || 0, h2 = (l2 - (s2[a2 - 1][1] || 0)) / 2, d2 = 0; d2 < u2; ++d2) {
                var p2 = t2[n2[d2]];
                h2 += (p2[a2][1] || 0) - (p2[a2 - 1][1] || 0);
              }
              c2 += l2, f2 += h2 * l2;
            }
            e2[a2 - 1][1] += e2[a2 - 1][0] = o2, c2 && (o2 -= f2 / c2);
          }
          e2[a2 - 1][1] += e2[a2 - 1][0] = o2, Lm(t2, n2);
        }
      }, t.stackOrderAppearance = Gm, t.stackOrderAscending = $m, t.stackOrderDescending = function(t2) {
        return $m(t2).reverse();
      }, t.stackOrderInsideOut = function(t2) {
        var n2, e2, r2 = t2.length, i2 = t2.map(Wm), o2 = Gm(t2), a2 = 0, u2 = 0, c2 = [], f2 = [];
        for (n2 = 0; n2 < r2; ++n2)
          e2 = o2[n2], a2 < u2 ? (a2 += i2[e2], c2.push(e2)) : (u2 += i2[e2], f2.push(e2));
        return f2.reverse().concat(c2);
      }, t.stackOrderNone = jm, t.stackOrderReverse = function(t2) {
        return jm(t2).reverse();
      }, t.stratify = function() {
        var t2 = wd, n2 = Md;
        function e2(e3) {
          var r2, i2, o2, a2, u2, c2, f2, s2 = Array.from(e3), l2 = s2.length, h2 = new Map();
          for (i2 = 0; i2 < l2; ++i2)
            r2 = s2[i2], u2 = s2[i2] = new Zh(r2), (c2 = t2(r2, i2, e3)) != null && (c2 += "") && (f2 = u2.id = c2, h2.set(f2, h2.has(f2) ? xd : u2)), (c2 = n2(r2, i2, e3)) != null && (c2 += "") && (u2.parent = c2);
          for (i2 = 0; i2 < l2; ++i2)
            if (c2 = (u2 = s2[i2]).parent) {
              if (!(a2 = h2.get(c2)))
                throw new Error("missing: " + c2);
              if (a2 === xd)
                throw new Error("ambiguous: " + c2);
              a2.children ? a2.children.push(u2) : a2.children = [u2], u2.parent = a2;
            } else {
              if (o2)
                throw new Error("multiple roots");
              o2 = u2;
            }
          if (!o2)
            throw new Error("no root");
          if (o2.parent = md, o2.eachBefore(function(t3) {
            t3.depth = t3.parent.depth + 1, --l2;
          }).eachBefore(Wh), o2.parent = null, l2 > 0)
            throw new Error("cycle");
          return o2;
        }
        return e2.id = function(n3) {
          return arguments.length ? (t2 = ld(n3), e2) : t2;
        }, e2.parentId = function(t3) {
          return arguments.length ? (n2 = ld(t3), e2) : n2;
        }, e2;
      }, t.style = Jt, t.subset = function(t2, n2) {
        return rt(n2, t2);
      }, t.sum = function(t2, n2) {
        let e2 = 0;
        if (n2 === void 0)
          for (let n3 of t2)
            (n3 = +n3) && (e2 += n3);
        else {
          let r2 = -1;
          for (let i2 of t2)
            (i2 = +n2(i2, ++r2, t2)) && (e2 += i2);
        }
        return e2;
      }, t.superset = rt, t.svg = Ou, t.symbol = function(t2, n2) {
        var e2 = null;
        function r2() {
          var r3;
          if (e2 || (e2 = r3 = fa()), t2.apply(this, arguments).draw(e2, +n2.apply(this, arguments)), r3)
            return e2 = null, r3 + "" || null;
        }
        return t2 = typeof t2 == "function" ? t2 : eb(t2 || Gb), n2 = typeof n2 == "function" ? n2 : eb(n2 === void 0 ? 64 : +n2), r2.type = function(n3) {
          return arguments.length ? (t2 = typeof n3 == "function" ? n3 : eb(n3), r2) : t2;
        }, r2.size = function(t3) {
          return arguments.length ? (n2 = typeof t3 == "function" ? t3 : eb(+t3), r2) : n2;
        }, r2.context = function(t3) {
          return arguments.length ? (e2 = t3 == null ? null : t3, r2) : e2;
        }, r2;
      }, t.symbolCircle = Gb, t.symbolCross = Vb, t.symbolDiamond = Zb, t.symbolSquare = nm, t.symbolStar = tm, t.symbolTriangle = rm, t.symbolWye = cm, t.symbols = fm, t.text = Nu, t.thresholdFreedmanDiaconis = function(t2, n2, e2) {
        return Math.ceil((e2 - n2) / (2 * (H(t2, 0.75) - H(t2, 0.25)) * Math.pow(c(t2), -1 / 3)));
      }, t.thresholdScott = function(t2, n2, e2) {
        return Math.ceil((e2 - n2) / (3.5 * d(t2) * Math.pow(c(t2), -1 / 3)));
      }, t.thresholdSturges = U, t.tickFormat = _p, t.tickIncrement = R, t.tickStep = F, t.ticks = q, t.timeDay = tg, t.timeDays = ng, t.timeFormatDefaultLocale = pv, t.timeFormatLocale = Wg, t.timeFriday = cg, t.timeFridays = gg, t.timeHour = Qp, t.timeHours = Jp, t.timeInterval = Bp, t.timeMillisecond = Yp, t.timeMilliseconds = Lp, t.timeMinute = Zp, t.timeMinutes = Kp, t.timeMonday = ig, t.timeMondays = lg, t.timeMonth = vg, t.timeMonths = _g, t.timeSaturday = fg, t.timeSaturdays = yg, t.timeSecond = $p, t.timeSeconds = Wp, t.timeSunday = rg, t.timeSundays = sg, t.timeThursday = ug, t.timeThursdays = pg, t.timeTuesday = og, t.timeTuesdays = hg, t.timeWednesday = ag, t.timeWednesdays = dg, t.timeWeek = rg, t.timeWeeks = sg, t.timeYear = bg, t.timeYears = mg, t.timeout = ci, t.timer = ri, t.timerFlush = ii, t.transition = Hi, t.transpose = tt, t.tree = function() {
        var t2 = Ad, n2 = 1, e2 = 1, r2 = null;
        function i2(i3) {
          var c2 = function(t3) {
            for (var n3, e3, r3, i4, o3, a3 = new Nd(t3, 0), u3 = [a3]; n3 = u3.pop(); )
              if (r3 = n3._.children)
                for (n3.children = new Array(o3 = r3.length), i4 = o3 - 1; i4 >= 0; --i4)
                  u3.push(e3 = n3.children[i4] = new Nd(r3[i4], i4)), e3.parent = n3;
            return (a3.parent = new Nd(null, 0)).children = [a3], a3;
          }(i3);
          if (c2.eachAfter(o2), c2.parent.m = -c2.z, c2.eachBefore(a2), r2)
            i3.eachBefore(u2);
          else {
            var f2 = i3, s2 = i3, l2 = i3;
            i3.eachBefore(function(t3) {
              t3.x < f2.x && (f2 = t3), t3.x > s2.x && (s2 = t3), t3.depth > l2.depth && (l2 = t3);
            });
            var h2 = f2 === s2 ? 1 : t2(f2, s2) / 2, d2 = h2 - f2.x, p2 = n2 / (s2.x + h2 + d2), g2 = e2 / (l2.depth || 1);
            i3.eachBefore(function(t3) {
              t3.x = (t3.x + d2) * p2, t3.y = t3.depth * g2;
            });
          }
          return i3;
        }
        function o2(n3) {
          var e3 = n3.children, r3 = n3.parent.children, i3 = n3.i ? r3[n3.i - 1] : null;
          if (e3) {
            !function(t3) {
              for (var n4, e4 = 0, r4 = 0, i4 = t3.children, o4 = i4.length; --o4 >= 0; )
                (n4 = i4[o4]).z += e4, n4.m += e4, e4 += n4.s + (r4 += n4.c);
            }(n3);
            var o3 = (e3[0].z + e3[e3.length - 1].z) / 2;
            i3 ? (n3.z = i3.z + t2(n3._, i3._), n3.m = n3.z - o3) : n3.z = o3;
          } else
            i3 && (n3.z = i3.z + t2(n3._, i3._));
          n3.parent.A = function(n4, e4, r4) {
            if (e4) {
              for (var i4, o4 = n4, a3 = n4, u3 = e4, c2 = o4.parent.children[0], f2 = o4.m, s2 = a3.m, l2 = u3.m, h2 = c2.m; u3 = Sd(u3), o4 = Td(o4), u3 && o4; )
                c2 = Td(c2), (a3 = Sd(a3)).a = n4, (i4 = u3.z + l2 - o4.z - f2 + t2(u3._, o4._)) > 0 && (Ed(kd(u3, n4, r4), n4, i4), f2 += i4, s2 += i4), l2 += u3.m, f2 += o4.m, h2 += c2.m, s2 += a3.m;
              u3 && !Sd(a3) && (a3.t = u3, a3.m += l2 - s2), o4 && !Td(c2) && (c2.t = o4, c2.m += f2 - h2, r4 = n4);
            }
            return r4;
          }(n3, i3, n3.parent.A || r3[0]);
        }
        function a2(t3) {
          t3._.x = t3.z + t3.parent.m, t3.m += t3.parent.m;
        }
        function u2(t3) {
          t3.x *= n2, t3.y = t3.depth * e2;
        }
        return i2.separation = function(n3) {
          return arguments.length ? (t2 = n3, i2) : t2;
        }, i2.size = function(t3) {
          return arguments.length ? (r2 = false, n2 = +t3[0], e2 = +t3[1], i2) : r2 ? null : [n2, e2];
        }, i2.nodeSize = function(t3) {
          return arguments.length ? (r2 = true, n2 = +t3[0], e2 = +t3[1], i2) : r2 ? [n2, e2] : null;
        }, i2;
      }, t.treemap = function() {
        var t2 = Dd, n2 = false, e2 = 1, r2 = 1, i2 = [0], o2 = hd, a2 = hd, u2 = hd, c2 = hd, f2 = hd;
        function s2(t3) {
          return t3.x0 = t3.y0 = 0, t3.x1 = e2, t3.y1 = r2, t3.eachBefore(l2), i2 = [0], n2 && t3.eachBefore(_d), t3;
        }
        function l2(n3) {
          var e3 = i2[n3.depth], r3 = n3.x0 + e3, s3 = n3.y0 + e3, l3 = n3.x1 - e3, h2 = n3.y1 - e3;
          l3 < r3 && (r3 = l3 = (r3 + l3) / 2), h2 < s3 && (s3 = h2 = (s3 + h2) / 2), n3.x0 = r3, n3.y0 = s3, n3.x1 = l3, n3.y1 = h2, n3.children && (e3 = i2[n3.depth + 1] = o2(n3) / 2, r3 += f2(n3) - e3, s3 += a2(n3) - e3, (l3 -= u2(n3) - e3) < r3 && (r3 = l3 = (r3 + l3) / 2), (h2 -= c2(n3) - e3) < s3 && (s3 = h2 = (s3 + h2) / 2), t2(n3, r3, s3, l3, h2));
        }
        return s2.round = function(t3) {
          return arguments.length ? (n2 = !!t3, s2) : n2;
        }, s2.size = function(t3) {
          return arguments.length ? (e2 = +t3[0], r2 = +t3[1], s2) : [e2, r2];
        }, s2.tile = function(n3) {
          return arguments.length ? (t2 = ld(n3), s2) : t2;
        }, s2.padding = function(t3) {
          return arguments.length ? s2.paddingInner(t3).paddingOuter(t3) : s2.paddingInner();
        }, s2.paddingInner = function(t3) {
          return arguments.length ? (o2 = typeof t3 == "function" ? t3 : dd(+t3), s2) : o2;
        }, s2.paddingOuter = function(t3) {
          return arguments.length ? s2.paddingTop(t3).paddingRight(t3).paddingBottom(t3).paddingLeft(t3) : s2.paddingTop();
        }, s2.paddingTop = function(t3) {
          return arguments.length ? (a2 = typeof t3 == "function" ? t3 : dd(+t3), s2) : a2;
        }, s2.paddingRight = function(t3) {
          return arguments.length ? (u2 = typeof t3 == "function" ? t3 : dd(+t3), s2) : u2;
        }, s2.paddingBottom = function(t3) {
          return arguments.length ? (c2 = typeof t3 == "function" ? t3 : dd(+t3), s2) : c2;
        }, s2.paddingLeft = function(t3) {
          return arguments.length ? (f2 = typeof t3 == "function" ? t3 : dd(+t3), s2) : f2;
        }, s2;
      }, t.treemapBinary = function(t2, n2, e2, r2, i2) {
        var o2, a2, u2 = t2.children, c2 = u2.length, f2 = new Array(c2 + 1);
        for (f2[0] = a2 = o2 = 0; o2 < c2; ++o2)
          f2[o2 + 1] = a2 += u2[o2].value;
        !function t3(n3, e3, r3, i3, o3, a3, c3) {
          if (n3 >= e3 - 1) {
            var s2 = u2[n3];
            return s2.x0 = i3, s2.y0 = o3, s2.x1 = a3, void (s2.y1 = c3);
          }
          var l2 = f2[n3], h2 = r3 / 2 + l2, d2 = n3 + 1, p2 = e3 - 1;
          for (; d2 < p2; ) {
            var g2 = d2 + p2 >>> 1;
            f2[g2] < h2 ? d2 = g2 + 1 : p2 = g2;
          }
          h2 - f2[d2 - 1] < f2[d2] - h2 && n3 + 1 < d2 && --d2;
          var y2 = f2[d2] - l2, v2 = r3 - y2;
          if (a3 - i3 > c3 - o3) {
            var _2 = r3 ? (i3 * v2 + a3 * y2) / r3 : a3;
            t3(n3, d2, y2, i3, o3, _2, c3), t3(d2, e3, v2, _2, o3, a3, c3);
          } else {
            var b2 = r3 ? (o3 * v2 + c3 * y2) / r3 : c3;
            t3(n3, d2, y2, i3, o3, a3, b2), t3(d2, e3, v2, i3, b2, a3, c3);
          }
        }(0, c2, t2.value, n2, e2, r2, i2);
      }, t.treemapDice = bd, t.treemapResquarify = qd, t.treemapSlice = Cd, t.treemapSliceDice = function(t2, n2, e2, r2, i2) {
        (1 & t2.depth ? Cd : bd)(t2, n2, e2, r2, i2);
      }, t.treemapSquarify = Dd, t.tsv = zu, t.tsvFormat = mu, t.tsvFormatBody = xu, t.tsvFormatRow = Mu, t.tsvFormatRows = wu, t.tsvFormatValue = Au, t.tsvParse = _u, t.tsvParseRows = bu, t.union = function(...t2) {
        const n2 = new Set();
        for (const e2 of t2)
          for (const t3 of e2)
            n2.add(t3);
        return n2;
      }, t.utcDay = Tg, t.utcDays = Sg, t.utcFriday = Dg, t.utcFridays = Bg, t.utcHour = Mg, t.utcHours = Ag, t.utcMillisecond = Yp, t.utcMilliseconds = Lp, t.utcMinute = xg, t.utcMinutes = wg, t.utcMonday = Ng, t.utcMondays = Fg, t.utcMonth = Lg, t.utcMonths = jg, t.utcSaturday = qg, t.utcSaturdays = Yg, t.utcSecond = $p, t.utcSeconds = Wp, t.utcSunday = kg, t.utcSundays = Rg, t.utcThursday = zg, t.utcThursdays = Ig, t.utcTuesday = Cg, t.utcTuesdays = Og, t.utcWednesday = Pg, t.utcWednesdays = Ug, t.utcWeek = kg, t.utcWeeks = Rg, t.utcYear = Hg, t.utcYears = Xg, t.variance = h, t.version = "6.5.0", t.window = Wt, t.xml = Ru, t.zip = function() {
        return tt(arguments);
      }, t.zoom = function() {
        var t2, n2, e2, r2 = rx, i2 = ix, o2 = cx, a2 = ax, u2 = ux, c2 = [0, 1 / 0], f2 = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s2 = 250, l2 = Dr, h2 = pt("start", "zoom", "end"), d2 = 500, p2 = 0, g2 = 10;
        function y2(t3) {
          t3.property("__zoom", ox).on("wheel.zoom", M2).on("mousedown.zoom", A2).on("dblclick.zoom", T2).filter(u2).on("touchstart.zoom", S2).on("touchmove.zoom", E2).on("touchend.zoom touchcancel.zoom", k2).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function v2(t3, n3) {
          return (n3 = Math.max(c2[0], Math.min(c2[1], n3))) === t3.k ? t3 : new Qm(n3, t3.x, t3.y);
        }
        function _2(t3, n3, e3) {
          var r3 = n3[0] - e3[0] * t3.k, i3 = n3[1] - e3[1] * t3.k;
          return r3 === t3.x && i3 === t3.y ? t3 : new Qm(t3.k, r3, i3);
        }
        function b2(t3) {
          return [(+t3[0][0] + +t3[1][0]) / 2, (+t3[0][1] + +t3[1][1]) / 2];
        }
        function m2(t3, n3, e3, r3) {
          t3.on("start.zoom", function() {
            x2(this, arguments).event(r3).start();
          }).on("interrupt.zoom end.zoom", function() {
            x2(this, arguments).event(r3).end();
          }).tween("zoom", function() {
            var t4 = this, o3 = arguments, a3 = x2(t4, o3).event(r3), u3 = i2.apply(t4, o3), c3 = e3 == null ? b2(u3) : typeof e3 == "function" ? e3.apply(t4, o3) : e3, f3 = Math.max(u3[1][0] - u3[0][0], u3[1][1] - u3[0][1]), s3 = t4.__zoom, h3 = typeof n3 == "function" ? n3.apply(t4, o3) : n3, d4 = l2(s3.invert(c3).concat(f3 / s3.k), h3.invert(c3).concat(f3 / h3.k));
            return function(t5) {
              if (t5 === 1)
                t5 = h3;
              else {
                var n4 = d4(t5), e4 = f3 / n4[2];
                t5 = new Qm(e4, c3[0] - n4[0] * e4, c3[1] - n4[1] * e4);
              }
              a3.zoom(null, t5);
            };
          });
        }
        function x2(t3, n3, e3) {
          return !e3 && t3.__zooming || new w2(t3, n3);
        }
        function w2(t3, n3) {
          this.that = t3, this.args = n3, this.active = 0, this.sourceEvent = null, this.extent = i2.apply(t3, n3), this.taps = 0;
        }
        function M2(t3, ...n3) {
          if (r2.apply(this, arguments)) {
            var e3 = x2(this, n3).event(t3), i3 = this.__zoom, u3 = Math.max(c2[0], Math.min(c2[1], i3.k * Math.pow(2, a2.apply(this, arguments)))), s3 = Un(t3);
            if (e3.wheel)
              e3.mouse[0][0] === s3[0] && e3.mouse[0][1] === s3[1] || (e3.mouse[1] = i3.invert(e3.mouse[0] = s3)), clearTimeout(e3.wheel);
            else {
              if (i3.k === u3)
                return;
              e3.mouse = [s3, i3.invert(s3)], gi(this), e3.start();
            }
            ex(t3), e3.wheel = setTimeout(l3, 150), e3.zoom("mouse", o2(_2(v2(i3, u3), e3.mouse[0], e3.mouse[1]), e3.extent, f2));
          }
          function l3() {
            e3.wheel = null, e3.end();
          }
        }
        function A2(t3, ...n3) {
          if (!e2 && r2.apply(this, arguments)) {
            var i3 = x2(this, n3, true).event(t3), a3 = Dn(t3.view).on("mousemove.zoom", h3, true).on("mouseup.zoom", d4, true), u3 = Un(t3, c3), c3 = t3.currentTarget, s3 = t3.clientX, l3 = t3.clientY;
            Yn(t3.view), nx(t3), i3.mouse = [u3, this.__zoom.invert(u3)], gi(this), i3.start();
          }
          function h3(t4) {
            if (ex(t4), !i3.moved) {
              var n4 = t4.clientX - s3, e3 = t4.clientY - l3;
              i3.moved = n4 * n4 + e3 * e3 > p2;
            }
            i3.event(t4).zoom("mouse", o2(_2(i3.that.__zoom, i3.mouse[0] = Un(t4, c3), i3.mouse[1]), i3.extent, f2));
          }
          function d4(t4) {
            a3.on("mousemove.zoom mouseup.zoom", null), Ln(t4.view, i3.moved), ex(t4), i3.event(t4).end();
          }
        }
        function T2(t3, ...n3) {
          if (r2.apply(this, arguments)) {
            var e3 = this.__zoom, a3 = Un(t3.changedTouches ? t3.changedTouches[0] : t3, this), u3 = e3.invert(a3), c3 = e3.k * (t3.shiftKey ? 0.5 : 2), l3 = o2(_2(v2(e3, c3), a3, u3), i2.apply(this, n3), f2);
            ex(t3), s2 > 0 ? Dn(this).transition().duration(s2).call(m2, l3, a3, t3) : Dn(this).call(y2.transform, l3, a3, t3);
          }
        }
        function S2(e3, ...i3) {
          if (r2.apply(this, arguments)) {
            var o3, a3, u3, c3, f3 = e3.touches, s3 = f3.length, l3 = x2(this, i3, e3.changedTouches.length === s3).event(e3);
            for (nx(e3), a3 = 0; a3 < s3; ++a3)
              c3 = [c3 = Un(u3 = f3[a3], this), this.__zoom.invert(c3), u3.identifier], l3.touch0 ? l3.touch1 || l3.touch0[2] === c3[2] || (l3.touch1 = c3, l3.taps = 0) : (l3.touch0 = c3, o3 = true, l3.taps = 1 + !!t2);
            t2 && (t2 = clearTimeout(t2)), o3 && (l3.taps < 2 && (n2 = c3[0], t2 = setTimeout(function() {
              t2 = null;
            }, d2)), gi(this), l3.start());
          }
        }
        function E2(t3, ...n3) {
          if (this.__zooming) {
            var e3, r3, i3, a3, u3 = x2(this, n3).event(t3), c3 = t3.changedTouches, s3 = c3.length;
            for (ex(t3), e3 = 0; e3 < s3; ++e3)
              i3 = Un(r3 = c3[e3], this), u3.touch0 && u3.touch0[2] === r3.identifier ? u3.touch0[0] = i3 : u3.touch1 && u3.touch1[2] === r3.identifier && (u3.touch1[0] = i3);
            if (r3 = u3.that.__zoom, u3.touch1) {
              var l3 = u3.touch0[0], h3 = u3.touch0[1], d4 = u3.touch1[0], p3 = u3.touch1[1], g3 = (g3 = d4[0] - l3[0]) * g3 + (g3 = d4[1] - l3[1]) * g3, y3 = (y3 = p3[0] - h3[0]) * y3 + (y3 = p3[1] - h3[1]) * y3;
              r3 = v2(r3, Math.sqrt(g3 / y3)), i3 = [(l3[0] + d4[0]) / 2, (l3[1] + d4[1]) / 2], a3 = [(h3[0] + p3[0]) / 2, (h3[1] + p3[1]) / 2];
            } else {
              if (!u3.touch0)
                return;
              i3 = u3.touch0[0], a3 = u3.touch0[1];
            }
            u3.zoom("touch", o2(_2(r3, i3, a3), u3.extent, f2));
          }
        }
        function k2(t3, ...r3) {
          if (this.__zooming) {
            var i3, o3, a3 = x2(this, r3).event(t3), u3 = t3.changedTouches, c3 = u3.length;
            for (nx(t3), e2 && clearTimeout(e2), e2 = setTimeout(function() {
              e2 = null;
            }, d2), i3 = 0; i3 < c3; ++i3)
              o3 = u3[i3], a3.touch0 && a3.touch0[2] === o3.identifier ? delete a3.touch0 : a3.touch1 && a3.touch1[2] === o3.identifier && delete a3.touch1;
            if (a3.touch1 && !a3.touch0 && (a3.touch0 = a3.touch1, delete a3.touch1), a3.touch0)
              a3.touch0[1] = this.__zoom.invert(a3.touch0[0]);
            else if (a3.end(), a3.taps === 2 && (o3 = Un(o3, this), Math.hypot(n2[0] - o3[0], n2[1] - o3[1]) < g2)) {
              var f3 = Dn(this).on("dblclick.zoom");
              f3 && f3.apply(this, arguments);
            }
          }
        }
        return y2.transform = function(t3, n3, e3, r3) {
          var i3 = t3.selection ? t3.selection() : t3;
          i3.property("__zoom", ox), t3 !== i3 ? m2(t3, n3, e3, r3) : i3.interrupt().each(function() {
            x2(this, arguments).event(r3).start().zoom(null, typeof n3 == "function" ? n3.apply(this, arguments) : n3).end();
          });
        }, y2.scaleBy = function(t3, n3, e3, r3) {
          y2.scaleTo(t3, function() {
            var t4 = this.__zoom.k, e4 = typeof n3 == "function" ? n3.apply(this, arguments) : n3;
            return t4 * e4;
          }, e3, r3);
        }, y2.scaleTo = function(t3, n3, e3, r3) {
          y2.transform(t3, function() {
            var t4 = i2.apply(this, arguments), r4 = this.__zoom, a3 = e3 == null ? b2(t4) : typeof e3 == "function" ? e3.apply(this, arguments) : e3, u3 = r4.invert(a3), c3 = typeof n3 == "function" ? n3.apply(this, arguments) : n3;
            return o2(_2(v2(r4, c3), a3, u3), t4, f2);
          }, e3, r3);
        }, y2.translateBy = function(t3, n3, e3, r3) {
          y2.transform(t3, function() {
            return o2(this.__zoom.translate(typeof n3 == "function" ? n3.apply(this, arguments) : n3, typeof e3 == "function" ? e3.apply(this, arguments) : e3), i2.apply(this, arguments), f2);
          }, null, r3);
        }, y2.translateTo = function(t3, n3, e3, r3, a3) {
          y2.transform(t3, function() {
            var t4 = i2.apply(this, arguments), a4 = this.__zoom, u3 = r3 == null ? b2(t4) : typeof r3 == "function" ? r3.apply(this, arguments) : r3;
            return o2(Jm.translate(u3[0], u3[1]).scale(a4.k).translate(typeof n3 == "function" ? -n3.apply(this, arguments) : -n3, typeof e3 == "function" ? -e3.apply(this, arguments) : -e3), t4, f2);
          }, r3, a3);
        }, w2.prototype = {event: function(t3) {
          return t3 && (this.sourceEvent = t3), this;
        }, start: function() {
          return ++this.active == 1 && (this.that.__zooming = this, this.emit("start")), this;
        }, zoom: function(t3, n3) {
          return this.mouse && t3 !== "mouse" && (this.mouse[1] = n3.invert(this.mouse[0])), this.touch0 && t3 !== "touch" && (this.touch0[1] = n3.invert(this.touch0[0])), this.touch1 && t3 !== "touch" && (this.touch1[1] = n3.invert(this.touch1[0])), this.that.__zoom = n3, this.emit("zoom"), this;
        }, end: function() {
          return --this.active == 0 && (delete this.that.__zooming, this.emit("end")), this;
        }, emit: function(t3) {
          var n3 = Dn(this.that).datum();
          h2.call(t3, this.that, new Km(t3, {sourceEvent: this.sourceEvent, target: y2, type: t3, transform: this.that.__zoom, dispatch: h2}), n3);
        }}, y2.wheelDelta = function(t3) {
          return arguments.length ? (a2 = typeof t3 == "function" ? t3 : Zm(+t3), y2) : a2;
        }, y2.filter = function(t3) {
          return arguments.length ? (r2 = typeof t3 == "function" ? t3 : Zm(!!t3), y2) : r2;
        }, y2.touchable = function(t3) {
          return arguments.length ? (u2 = typeof t3 == "function" ? t3 : Zm(!!t3), y2) : u2;
        }, y2.extent = function(t3) {
          return arguments.length ? (i2 = typeof t3 == "function" ? t3 : Zm([[+t3[0][0], +t3[0][1]], [+t3[1][0], +t3[1][1]]]), y2) : i2;
        }, y2.scaleExtent = function(t3) {
          return arguments.length ? (c2[0] = +t3[0], c2[1] = +t3[1], y2) : [c2[0], c2[1]];
        }, y2.translateExtent = function(t3) {
          return arguments.length ? (f2[0][0] = +t3[0][0], f2[1][0] = +t3[1][0], f2[0][1] = +t3[0][1], f2[1][1] = +t3[1][1], y2) : [[f2[0][0], f2[0][1]], [f2[1][0], f2[1][1]]];
        }, y2.constrain = function(t3) {
          return arguments.length ? (o2 = t3, y2) : o2;
        }, y2.duration = function(t3) {
          return arguments.length ? (s2 = +t3, y2) : s2;
        }, y2.interpolate = function(t3) {
          return arguments.length ? (l2 = t3, y2) : l2;
        }, y2.on = function() {
          var t3 = h2.on.apply(h2, arguments);
          return t3 === h2 ? y2 : t3;
        }, y2.clickDistance = function(t3) {
          return arguments.length ? (p2 = (t3 = +t3) * t3, y2) : Math.sqrt(p2);
        }, y2.tapDistance = function(t3) {
          return arguments.length ? (g2 = +t3, y2) : g2;
        }, y2;
      }, t.zoomIdentity = Jm, t.zoomTransform = tx, Object.defineProperty(t, "__esModule", {value: true});
    });
  });

  // js/pokemonscatter.js
  var d3 = __toModule(require_d3_min());
  var varLabels = {
    NAME: "Name",
    NUMBER: "Number",
    HP: "Hit Points",
    SPD: "Speed",
    ATK: "Attack",
    DEF: "Defense",
    SP_ATK: "Special Attack",
    SP_DEF: "Special Defense",
    TOTAL: "Sum of All Base Stats",
    HEIGHT: "Height (m)",
    WEIGHT: "Weight (kg)"
  };
  var xScale;
  var yScale;
  var xAxis;
  var xAxisG;
  var yAxis;
  var yAxisG;
  var height = 900;
  var width = 1200;
  var dotRadius = 6;
  var margin = {top: 70, right: 40, bottom: 80, left: 95};
  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;
  var transitionTime = 1e3;
  var d3container = document.getElementById("d3container");
  var vis = d3.select(d3container).append("svg").attr("width", `100%`).attr("viewBox", `0 0 ${width} ${height}`);
  var chart = vis.append("g").attr("transform", `translate(${margin.left}, ${margin.top})`);
  var setup = (data) => {
    const variables = Object.keys(data[0]).filter((d) => d !== "NAME");
    d3.select("select.xvar").on("change", () => update(data)).selectAll("option").data(variables).enter().append("option").attr("value", (d) => d).text((d) => varLabels[d]);
    d3.select("select.yvar").on("change", () => update(data)).selectAll("option").data(variables).enter().append("option").attr("value", (d) => d).text((d) => varLabels[d]);
    d3.select("select.xvar").property("value", "NUMBER");
    d3.select("select.yvar").property("value", "HP");
    let xvar = d3.select("select.xvar").property("value");
    let yvar = d3.select("select.yvar").property("value");
    xScale = d3.scaleLinear().domain(0, d3.max(data.map((d) => d[xvar]))).range([0, innerWidth]).nice();
    xAxis = d3.axisBottom(xScale).tickSize(-innerHeight).tickPadding(10);
    xAxisG = chart.append("g").call(xAxis).attr("transform", `translate(0, ${innerHeight})`);
    yScale = d3.scaleLinear().domain(0, d3.max(data.map((d) => d[yvar]))).range([innerHeight, 0]).nice();
    yAxis = d3.axisLeft(yScale).tickSize(-innerWidth).tickPadding(10);
    yAxisG = chart.append("g").call(yAxis);
    xAxisG.append("text").attr("class", "axis-label").attr("y", 50).attr("x", innerWidth / 2).attr("fill", "black").text(varLabels[xvar]);
    yAxisG.append("text").attr("class", "axis-label").attr("text-anchor", "middle").attr("y", -60).attr("x", -innerHeight / 2).attr("fill", "black").attr("transform", "rotate(-90)").text(varLabels[yvar]);
    chart.append("text").attr("class", "title").attr("y", -20).attr("x", innerWidth / 2).attr("text-anchor", "middle").text("Pokemon Stats");
  };
  var update = (data) => {
    let xvar = d3.select("select.xvar").property("value");
    let yvar = d3.select("select.yvar").property("value");
    let hover = (d) => d.NAME + "\n" + varLabels[xvar] + ": " + d[xvar] + "\n" + varLabels[yvar] + ": " + d[yvar];
    xScale.domain([0, d3.max(data.map((d) => d[xvar]))]);
    yScale.domain([0, d3.max(data.map((d) => d[yvar]))]);
    xAxisG.transition().duration(transitionTime).call(xAxis);
    yAxisG.transition().duration(transitionTime).call(yAxis);
    let circles = chart.selectAll("circle").data(data);
    circles.enter().append("circle").attr("cx", (d) => xScale(d[xvar])).attr("cy", (d) => yScale(d[yvar])).attr("r", dotRadius).append("title").text(hover).merge(circles).transition().duration(transitionTime).attr("cx", (d) => xScale(d[xvar])).attr("cy", (d) => yScale(d[yvar])).select("title").text(hover);
    circles.exit().transition().duration(transitionTime).remove();
    xAxisG.select("text").text(varLabels[xvar]);
    yAxisG.select("text").text(varLabels[yvar]);
  };
  d3.csv("./pokemon.csv").then(function(all_data) {
    let data = all_data.map((d) => {
      return {
        NAME: d.NAME,
        NUMBER: +d.NUMBER,
        HP: +d.HP,
        SPD: +d.SPD,
        ATK: +d.ATK,
        DEF: +d.DEF,
        SP_ATK: +d.SP_ATK,
        SP_DEF: +d.SP_DEF,
        TOTAL: +d.TOTAL,
        HEIGHT: +d.HEIGHT,
        WEIGHT: +d.WEIGHT
      };
    });
    setup(data);
    update(data);
  });
})();
