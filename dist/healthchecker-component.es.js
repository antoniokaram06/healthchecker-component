var Vn = Object.defineProperty;
var Un = (e, t, r) => t in e ? Vn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var D = (e, t, r) => Un(e, typeof t != "symbol" ? t + "" : t, r);
import * as l from "react";
import hr, { forwardRef as pr, createElement as vt, useState as re, useEffect as Gn } from "react";
import * as Kn from "react-dom";
import Yn from "react-dom";
import React, { useState, useEffect } from "react";
import { HealthChecker as Hn } from "@hiveio/wax/vite";
import '../i18n.js';
import i18n from '../i18n.js';
import { useTranslation } from 'react-i18next';
console.log('i18n object imported in HealthChecker:', i18n);
console.log('Current language:', i18n.language);
console.log('Translation for "title":', i18n.t('title'));
console.log('all keys =', i18n.getResourceBundle('en', 'healthchecker'));

var gt = { exports: {} }, De = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yt;
function Xn() {
  if (Yt) return De;
  Yt = 1;
  var e = hr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(i, d, f) {
    var p, v = {}, g = null, C = null;
    f !== void 0 && (g = "" + f), d.key !== void 0 && (g = "" + d.key), d.ref !== void 0 && (C = d.ref);
    for (p in d) n.call(d, p) && !s.hasOwnProperty(p) && (v[p] = d[p]);
    if (i && i.defaultProps) for (p in d = i.defaultProps, d) v[p] === void 0 && (v[p] = d[p]);
    return { $$typeof: t, type: i, key: g, ref: C, props: v, _owner: o.current };
  }
  return De.Fragment = r, De.jsx = c, De.jsxs = c, De;
}
var We = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ht;
function Jn() {
  return Ht || (Ht = 1, process.env.NODE_ENV !== "production" && function() {
    var e = hr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), R = Symbol.iterator, m = "@@iterator";
    function E(a) {
      if (a === null || typeof a != "object")
        return null;
      var h = R && a[R] || a[m];
      return typeof h == "function" ? h : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(a) {
      {
        for (var h = arguments.length, b = new Array(h > 1 ? h - 1 : 0), P = 1; P < h; P++)
          b[P - 1] = arguments[P];
        j("error", a, b);
      }
    }
    function j(a, h, b) {
      {
        var P = S.ReactDebugCurrentFrame, F = P.getStackAddendum();
        F !== "" && (h += "%s", b = b.concat([F]));
        var W = b.map(function(M) {
          return String(M);
        });
        W.unshift("Warning: " + h), Function.prototype.apply.call(console[a], console, W);
      }
    }
    var _ = !1, I = !1, w = !1, N = !1, X = !1, Y;
    Y = Symbol.for("react.module.reference");
    function ne(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === n || a === s || X || a === o || a === f || a === p || N || a === C || _ || I || w || typeof a == "object" && a !== null && (a.$$typeof === g || a.$$typeof === v || a.$$typeof === c || a.$$typeof === i || a.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      a.$$typeof === Y || a.getModuleId !== void 0));
    }
    function Pe(a, h, b) {
      var P = a.displayName;
      if (P)
        return P;
      var F = h.displayName || h.name || "";
      return F !== "" ? b + "(" + F + ")" : b;
    }
    function de(a) {
      return a.displayName || "Context";
    }
    function H(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case i:
            var h = a;
            return de(h) + ".Consumer";
          case c:
            var b = a;
            return de(b._context) + ".Provider";
          case d:
            return Pe(a, a.render, "ForwardRef");
          case v:
            var P = a.displayName || null;
            return P !== null ? P : H(a.type) || "Memo";
          case g: {
            var F = a, W = F._payload, M = F._init;
            try {
              return H(M(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, J = 0, L, ie, B, G, fe, be, A;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function Q() {
      {
        if (J === 0) {
          L = console.log, ie = console.info, B = console.warn, G = console.error, fe = console.group, be = console.groupCollapsed, A = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        J++;
      }
    }
    function ee() {
      {
        if (J--, J === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: U({}, a, {
              value: L
            }),
            info: U({}, a, {
              value: ie
            }),
            warn: U({}, a, {
              value: B
            }),
            error: U({}, a, {
              value: G
            }),
            group: U({}, a, {
              value: fe
            }),
            groupCollapsed: U({}, a, {
              value: be
            }),
            groupEnd: U({}, a, {
              value: A
            })
          });
        }
        J < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = S.ReactCurrentDispatcher, ce;
    function ye(a, h, b) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (F) {
            var P = F.stack.trim().match(/\n( *(at )?)/);
            ce = P && P[1] || "";
          }
        return `
` + ce + a;
      }
    }
    var ke = !1, le;
    {
      var bn = typeof WeakMap == "function" ? WeakMap : Map;
      le = new bn();
    }
    function Tt(a, h) {
      if (!a || ke)
        return "";
      {
        var b = le.get(a);
        if (b !== void 0)
          return b;
      }
      var P;
      ke = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = se.current, se.current = null, Q();
      try {
        if (h) {
          var M = function() {
            throw Error();
          };
          if (Object.defineProperty(M.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(M, []);
            } catch (te) {
              P = te;
            }
            Reflect.construct(a, [], M);
          } else {
            try {
              M.call();
            } catch (te) {
              P = te;
            }
            a.call(M.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            P = te;
          }
          a();
        }
      } catch (te) {
        if (te && P && typeof te.stack == "string") {
          for (var O = te.stack.split(`
`), Z = P.stack.split(`
`), z = O.length - 1, V = Z.length - 1; z >= 1 && V >= 0 && O[z] !== Z[V]; )
            V--;
          for (; z >= 1 && V >= 0; z--, V--)
            if (O[z] !== Z[V]) {
              if (z !== 1 || V !== 1)
                do
                  if (z--, V--, V < 0 || O[z] !== Z[V]) {
                    var oe = `
` + O[z].replace(" at new ", " at ");
                    return a.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", a.displayName)), typeof a == "function" && le.set(a, oe), oe;
                  }
                while (z >= 1 && V >= 0);
              break;
            }
        }
      } finally {
        ke = !1, se.current = W, ee(), Error.prepareStackTrace = F;
      }
      var Ae = a ? a.displayName || a.name : "", xe = Ae ? ye(Ae) : "";
      return typeof a == "function" && le.set(a, xe), xe;
    }
    function yn(a, h, b) {
      return Tt(a, !1);
    }
    function xn(a) {
      var h = a.prototype;
      return !!(h && h.isReactComponent);
    }
    function $e(a, h, b) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return Tt(a, xn(a));
      if (typeof a == "string")
        return ye(a);
      switch (a) {
        case f:
          return ye("Suspense");
        case p:
          return ye("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case d:
            return yn(a.render);
          case v:
            return $e(a.type, h, b);
          case g: {
            var P = a, F = P._payload, W = P._init;
            try {
              return $e(W(F), h, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Fe = Object.prototype.hasOwnProperty, _t = {}, It = S.ReactDebugCurrentFrame;
    function ze(a) {
      if (a) {
        var h = a._owner, b = $e(a.type, a._source, h ? h.type : null);
        It.setExtraStackFrame(b);
      } else
        It.setExtraStackFrame(null);
    }
    function wn(a, h, b, P, F) {
      {
        var W = Function.call.bind(Fe);
        for (var M in a)
          if (W(a, M)) {
            var O = void 0;
            try {
              if (typeof a[M] != "function") {
                var Z = Error((P || "React class") + ": " + b + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              O = a[M](h, M, P, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              O = z;
            }
            O && !(O instanceof Error) && (ze(F), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", b, M, typeof O), ze(null)), O instanceof Error && !(O.message in _t) && (_t[O.message] = !0, ze(F), k("Failed %s type: %s", b, O.message), ze(null));
          }
      }
    }
    var Cn = Array.isArray;
    function tt(a) {
      return Cn(a);
    }
    function En(a) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, b = h && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return b;
      }
    }
    function Sn(a) {
      try {
        return Mt(a), !1;
      } catch {
        return !0;
      }
    }
    function Mt(a) {
      return "" + a;
    }
    function Lt(a) {
      if (Sn(a))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(a)), Mt(a);
    }
    var Ft = S.ReactCurrentOwner, Rn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Dt, Wt;
    function Pn(a) {
      if (Fe.call(a, "ref")) {
        var h = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function kn(a) {
      if (Fe.call(a, "key")) {
        var h = Object.getOwnPropertyDescriptor(a, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function Nn(a, h) {
      typeof a.ref == "string" && Ft.current;
    }
    function An(a, h) {
      {
        var b = function() {
          Dt || (Dt = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        b.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function jn(a, h) {
      {
        var b = function() {
          Wt || (Wt = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        b.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var On = function(a, h, b, P, F, W, M) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: a,
        key: h,
        ref: b,
        props: M,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function Tn(a, h, b, P, F) {
      {
        var W, M = {}, O = null, Z = null;
        b !== void 0 && (Lt(b), O = "" + b), kn(h) && (Lt(h.key), O = "" + h.key), Pn(h) && (Z = h.ref, Nn(h, F));
        for (W in h)
          Fe.call(h, W) && !Rn.hasOwnProperty(W) && (M[W] = h[W]);
        if (a && a.defaultProps) {
          var z = a.defaultProps;
          for (W in z)
            M[W] === void 0 && (M[W] = z[W]);
        }
        if (O || Z) {
          var V = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          O && An(M, V), Z && jn(M, V);
        }
        return On(a, O, Z, F, P, Ft.current, M);
      }
    }
    var rt = S.ReactCurrentOwner, $t = S.ReactDebugCurrentFrame;
    function Ne(a) {
      if (a) {
        var h = a._owner, b = $e(a.type, a._source, h ? h.type : null);
        $t.setExtraStackFrame(b);
      } else
        $t.setExtraStackFrame(null);
    }
    var nt;
    nt = !1;
    function ot(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function zt() {
      {
        if (rt.current) {
          var a = H(rt.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function _n(a) {
      return "";
    }
    var Bt = {};
    function In(a) {
      {
        var h = zt();
        if (!h) {
          var b = typeof a == "string" ? a : a.displayName || a.name;
          b && (h = `

Check the top-level render call using <` + b + ">.");
        }
        return h;
      }
    }
    function Vt(a, h) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var b = In(h);
        if (Bt[b])
          return;
        Bt[b] = !0;
        var P = "";
        a && a._owner && a._owner !== rt.current && (P = " It was passed a child from " + H(a._owner.type) + "."), Ne(a), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, P), Ne(null);
      }
    }
    function Ut(a, h) {
      {
        if (typeof a != "object")
          return;
        if (tt(a))
          for (var b = 0; b < a.length; b++) {
            var P = a[b];
            ot(P) && Vt(P, h);
          }
        else if (ot(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var F = E(a);
          if (typeof F == "function" && F !== a.entries)
            for (var W = F.call(a), M; !(M = W.next()).done; )
              ot(M.value) && Vt(M.value, h);
        }
      }
    }
    function Mn(a) {
      {
        var h = a.type;
        if (h == null || typeof h == "string")
          return;
        var b;
        if (typeof h == "function")
          b = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === v))
          b = h.propTypes;
        else
          return;
        if (b) {
          var P = H(h);
          wn(b, a.props, "prop", P, a);
        } else if (h.PropTypes !== void 0 && !nt) {
          nt = !0;
          var F = H(h);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ln(a) {
      {
        for (var h = Object.keys(a.props), b = 0; b < h.length; b++) {
          var P = h[b];
          if (P !== "children" && P !== "key") {
            Ne(a), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), Ne(null);
            break;
          }
        }
        a.ref !== null && (Ne(a), k("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    var Gt = {};
    function Kt(a, h, b, P, F, W) {
      {
        var M = ne(a);
        if (!M) {
          var O = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = _n();
          Z ? O += Z : O += zt();
          var z;
          a === null ? z = "null" : tt(a) ? z = "array" : a !== void 0 && a.$$typeof === t ? (z = "<" + (H(a.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : z = typeof a, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, O);
        }
        var V = Tn(a, h, b, F, W);
        if (V == null)
          return V;
        if (M) {
          var oe = h.children;
          if (oe !== void 0)
            if (P)
              if (tt(oe)) {
                for (var Ae = 0; Ae < oe.length; Ae++)
                  Ut(oe[Ae], a);
                Object.freeze && Object.freeze(oe);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ut(oe, a);
        }
        if (Fe.call(h, "key")) {
          var xe = H(a), te = Object.keys(h).filter(function(Bn) {
            return Bn !== "key";
          }), st = te.length > 0 ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Gt[xe + st]) {
            var zn = te.length > 0 ? "{" + te.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, st, xe, zn, xe), Gt[xe + st] = !0;
          }
        }
        return a === n ? Ln(V) : Mn(V), V;
      }
    }
    function Fn(a, h, b) {
      return Kt(a, h, b, !0);
    }
    function Dn(a, h, b) {
      return Kt(a, h, b, !1);
    }
    var Wn = Dn, $n = Fn;
    We.Fragment = n, We.jsx = Wn, We.jsxs = $n;
  }()), We;
}
process.env.NODE_ENV === "production" ? gt.exports = Xn() : gt.exports = Jn();
var u = gt.exports;
function mr(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = mr(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function vr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = mr(e)) && (n && (n += " "), n += t);
  return n;
}
const Rt = "-", qn = (e) => {
  const t = Qn(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (c) => {
      const i = c.split(Rt);
      return i[0] === "" && i.length !== 1 && i.shift(), gr(i, t) || Zn(c);
    },
    getConflictingClassGroupIds: (c, i) => {
      const d = r[c] || [];
      return i && n[c] ? [...d, ...n[c]] : d;
    }
  };
}, gr = (e, t) => {
  var c;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? gr(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(Rt);
  return (c = t.validators.find(({
    validator: i
  }) => i(s))) == null ? void 0 : c.classGroupId;
}, Xt = /^\[(.+)\]$/, Zn = (e) => {
  if (Xt.test(e)) {
    const t = Xt.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Qn = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in r)
    bt(r[o], n, o, t);
  return n;
}, bt = (e, t, r, n) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Jt(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (eo(o)) {
        bt(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, c]) => {
      bt(c, Jt(t, s), r, n);
    });
  });
}, Jt = (e, t) => {
  let r = e;
  return t.split(Rt).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, eo = (e) => e.isThemeGetter, to = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const o = (s, c) => {
    r.set(s, c), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let c = r.get(s);
      if (c !== void 0)
        return c;
      if ((c = n.get(s)) !== void 0)
        return o(s, c), c;
    },
    set(s, c) {
      r.has(s) ? r.set(s, c) : o(s, c);
    }
  };
}, yt = "!", xt = ":", ro = xt.length, no = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const s = [];
    let c = 0, i = 0, d = 0, f;
    for (let R = 0; R < o.length; R++) {
      let m = o[R];
      if (c === 0 && i === 0) {
        if (m === xt) {
          s.push(o.slice(d, R)), d = R + ro;
          continue;
        }
        if (m === "/") {
          f = R;
          continue;
        }
      }
      m === "[" ? c++ : m === "]" ? c-- : m === "(" ? i++ : m === ")" && i--;
    }
    const p = s.length === 0 ? o : o.substring(d), v = oo(p), g = v !== p, C = f && f > d ? f - d : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: v,
      maybePostfixModifierPosition: C
    };
  };
  if (t) {
    const o = t + xt, s = n;
    n = (c) => c.startsWith(o) ? s(c.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: c,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const o = n;
    n = (s) => r({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, oo = (e) => e.endsWith(yt) ? e.substring(0, e.length - 1) : e.startsWith(yt) ? e.substring(1) : e, so = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const o = [];
    let s = [];
    return n.forEach((c) => {
      c[0] === "[" || t[c] ? (o.push(...s.sort(), c), s = []) : s.push(c);
    }), o.push(...s.sort()), o;
  };
}, ao = (e) => ({
  cache: to(e.cacheSize),
  parseClassName: no(e),
  sortModifiers: so(e),
  ...qn(e)
}), io = /\s+/, co = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, c = [], i = e.trim().split(io);
  let d = "";
  for (let f = i.length - 1; f >= 0; f -= 1) {
    const p = i[f], {
      isExternal: v,
      modifiers: g,
      hasImportantModifier: C,
      baseClassName: R,
      maybePostfixModifierPosition: m
    } = r(p);
    if (v) {
      d = p + (d.length > 0 ? " " + d : d);
      continue;
    }
    let E = !!m, S = n(E ? R.substring(0, m) : R);
    if (!S) {
      if (!E) {
        d = p + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (S = n(R), !S) {
        d = p + (d.length > 0 ? " " + d : d);
        continue;
      }
      E = !1;
    }
    const k = s(g).join(":"), j = C ? k + yt : k, _ = j + S;
    if (c.includes(_))
      continue;
    c.push(_);
    const I = o(S, E);
    for (let w = 0; w < I.length; ++w) {
      const N = I[w];
      c.push(j + N);
    }
    d = p + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function lo() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = br(t)) && (n && (n += " "), n += r);
  return n;
}
const br = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = br(e[n])) && (r && (r += " "), r += t);
  return r;
};
function uo(e, ...t) {
  let r, n, o, s = c;
  function c(d) {
    const f = t.reduce((p, v) => v(p), e());
    return r = ao(f), n = r.cache.get, o = r.cache.set, s = i, i(d);
  }
  function i(d) {
    const f = n(d);
    if (f)
      return f;
    const p = co(d, r);
    return o(d, p), p;
  }
  return function() {
    return s(lo.apply(null, arguments));
  };
}
const K = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, yr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, xr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fo = /^\d+\/\d+$/, ho = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, po = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, mo = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, vo = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, go = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, je = (e) => fo.test(e), T = (e) => !!e && !Number.isNaN(Number(e)), we = (e) => !!e && Number.isInteger(Number(e)), qt = (e) => e.endsWith("%") && T(e.slice(0, -1)), pe = (e) => ho.test(e), bo = () => !0, yo = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  po.test(e) && !mo.test(e)
), Pt = () => !1, xo = (e) => vo.test(e), wo = (e) => go.test(e), Co = (e) => !y(e) && !x(e), Eo = (e) => Me(e, Er, Pt), y = (e) => yr.test(e), Ce = (e) => Me(e, Sr, yo), at = (e) => Me(e, Io, T), So = (e) => Me(e, wr, Pt), Ro = (e) => Me(e, Cr, wo), Po = (e) => Me(e, Pt, xo), x = (e) => xr.test(e), Be = (e) => Le(e, Sr), ko = (e) => Le(e, Mo), No = (e) => Le(e, wr), Ao = (e) => Le(e, Er), jo = (e) => Le(e, Cr), Oo = (e) => Le(e, Lo, !0), Me = (e, t, r) => {
  const n = yr.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Le = (e, t, r = !1) => {
  const n = xr.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, wr = (e) => e === "position", To = /* @__PURE__ */ new Set(["image", "url"]), Cr = (e) => To.has(e), _o = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Er = (e) => _o.has(e), Sr = (e) => e === "length", Io = (e) => e === "number", Mo = (e) => e === "family-name", Lo = (e) => e === "shadow", Fo = () => {
  const e = K("color"), t = K("font"), r = K("text"), n = K("font-weight"), o = K("tracking"), s = K("leading"), c = K("breakpoint"), i = K("container"), d = K("spacing"), f = K("radius"), p = K("shadow"), v = K("inset-shadow"), g = K("drop-shadow"), C = K("blur"), R = K("perspective"), m = K("aspect"), E = K("ease"), S = K("animate"), k = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], j = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], _ = () => ["auto", "hidden", "clip", "visible", "scroll"], I = () => ["auto", "contain", "none"], w = () => [x, y, d], N = () => [je, "full", "auto", ...w()], X = () => [we, "none", "subgrid", x, y], Y = () => ["auto", {
    span: ["full", we, x, y]
  }, x, y], ne = () => [we, "auto", x, y], Pe = () => ["auto", "min", "max", "fr", x, y], de = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], H = () => ["start", "end", "center", "stretch"], U = () => ["auto", ...w()], J = () => [je, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...w()], L = () => [e, x, y], ie = () => [qt, Ce], B = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    x,
    y
  ], G = () => ["", T, Be, Ce], fe = () => ["solid", "dashed", "dotted", "double"], be = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], A = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    C,
    x,
    y
  ], q = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", x, y], Q = () => ["none", T, x, y], ee = () => ["none", T, x, y], se = () => [T, x, y], ce = () => [je, "full", ...w()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [pe],
      breakpoint: [pe],
      color: [bo],
      container: [pe],
      "drop-shadow": [pe],
      ease: ["in", "out", "in-out"],
      font: [Co],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [pe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [pe],
      shadow: [pe],
      spacing: ["px", T],
      text: [pe],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", je, y, x, m]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [T, y, x, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": k()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": k()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...j(), y, x]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: _()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": _()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": _()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: N()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": N()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": N()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: N()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: N()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: N()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: N()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: N()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: N()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [we, "auto", x, y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [je, "full", "auto", i, ...w()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [T, je, "auto", "initial", "none", y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", T, x, y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", T, x, y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [we, "first", "last", "none", x, y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": X()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Y()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ne()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ne()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": X()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Y()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ne()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ne()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Pe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Pe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: w()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": w()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": w()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...de(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...H(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...H()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...de()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...H(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...H(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": de()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...H(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...H()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: w()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: w()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: w()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: w()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: w()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: w()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: w()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: w()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: w()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: U()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: U()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: U()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: U()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: U()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: U()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: U()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: U()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: U()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": w()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": w()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: J()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...J()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...J()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [c]
          },
          ...J()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...J()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...J()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...J()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Be, Ce]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, x, at]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", qt, y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ko, y, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, x, y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [T, "none", x, at]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...w()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", x, y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", x, y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: L()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: L()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...fe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [T, "from-font", "auto", x, Ce]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: L()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [T, "auto", x, y]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", x, y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", x, y]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...j(), No, So]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Ao, Eo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, we, x, y],
          radial: ["", x, y],
          conic: [we, x, y]
        }, jo, Ro]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: L()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ie()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ie()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ie()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: L()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: B()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": B()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": B()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": B()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": B()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": B()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": B()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": B()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": B()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": B()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": B()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": B()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": B()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": B()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": B()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: G()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": G()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": G()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": G()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": G()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": G()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": G()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": G()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": G()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": G()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": G()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...fe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...fe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: L()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": L()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": L()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": L()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": L()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": L()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": L()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": L()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": L()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: L()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...fe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [T, x, y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", T, Be, Ce]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          Oo,
          Po
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: L()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", x, y, v]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": L()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: G()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: L()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [T, Ce]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": L()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": G()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": L()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [T, x, y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...be(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": be()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          x,
          y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: A()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [T, x, y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [T, x, y]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          x,
          y
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", T, x, y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [T, x, y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", T, x, y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [T, x, y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", T, x, y]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          x,
          y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": A()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [T, x, y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [T, x, y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", T, x, y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [T, x, y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", T, x, y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [T, x, y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [T, x, y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", T, x, y]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": w()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": w()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": w()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", x, y]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [T, "initial", x, y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", E, x, y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [T, x, y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", S, x, y]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [R, x, y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": q()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ee()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ee()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ee()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ee()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: se()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": se()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": se()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [x, y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: q()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ce()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ce()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ce()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ce()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: L()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: L()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", x, y]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", x, y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [T, Be, Ce, at]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...L()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, Do = /* @__PURE__ */ uo(Fo);
function $(...e) {
  return Do(vr(e));
}
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Rr = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $o = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = pr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: s,
    iconNode: c,
    ...i
  }, d) => vt(
    "svg",
    {
      ref: d,
      ...$o,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Rr("lucide", o),
      ...i
    },
    [
      ...c.map(([f, p]) => vt(f, p)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = (e, t) => {
  const r = pr(
    ({ className: n, ...o }, s) => vt(zo, {
      ref: s,
      iconNode: t,
      className: Rr(`lucide-${Wo(e)}`, n),
      ...o
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], wt = Pr("LoaderCircle", Bo);
/**
 * @license lucide-react v0.482.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], kr = Pr("X", Vo);
function Zt(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Nr(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = Zt(o, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == "function" ? s() : Zt(e[o], null);
        }
      };
  };
}
function Re(...e) {
  return l.useCallback(Nr(...e), e);
}
var Ze = l.forwardRef((e, t) => {
  const { children: r, ...n } = e, o = l.Children.toArray(r), s = o.find(Go);
  if (s) {
    const c = s.props.children, i = o.map((d) => d === s ? l.Children.count(c) > 1 ? l.Children.only(null) : l.isValidElement(c) ? c.props.children : null : d);
    return /* @__PURE__ */ u.jsx(Ct, { ...n, ref: t, children: l.isValidElement(c) ? l.cloneElement(c, void 0, i) : null });
  }
  return /* @__PURE__ */ u.jsx(Ct, { ...n, ref: t, children: r });
});
Ze.displayName = "Slot";
var Ct = l.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (l.isValidElement(r)) {
    const o = Yo(r), s = Ko(n, r.props);
    return r.type !== l.Fragment && (s.ref = t ? Nr(t, o) : o), l.cloneElement(r, s);
  }
  return l.Children.count(r) > 1 ? l.Children.only(null) : null;
});
Ct.displayName = "SlotClone";
var Uo = ({ children: e }) => /* @__PURE__ */ u.jsx(u.Fragment, { children: e });
function Go(e) {
  return l.isValidElement(e) && e.type === Uo;
}
function Ko(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      s(...i), o(...i);
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Yo(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const Qt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, er = vr, Ar = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return er(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, c = Object.keys(o).map((f) => {
    const p = r == null ? void 0 : r[f], v = s == null ? void 0 : s[f];
    if (p === null) return null;
    const g = Qt(p) || Qt(v);
    return o[f][g];
  }), i = r && Object.entries(r).reduce((f, p) => {
    let [v, g] = p;
    return g === void 0 || (f[v] = g), f;
  }, {}), d = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((f, p) => {
    let { class: v, className: g, ...C } = p;
    return Object.entries(C).every((R) => {
      let [m, E] = R;
      return Array.isArray(E) ? E.includes({
        ...s,
        ...i
      }[m]) : {
        ...s,
        ...i
      }[m] === E;
    }) ? [
      ...f,
      v,
      g
    ] : f;
  }, []);
  return er(e, c, d, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Ho = Ar(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ve = l.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...o }, s) => {
    const c = n ? Ze : "button";
    return /* @__PURE__ */ u.jsx(
      c,
      {
        className: $(Ho({ variant: t, size: r, className: e })),
        ref: s,
        ...o
      }
    );
  }
);
ve.displayName = "Button";
const jr = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: $(
      "rounded-lg border dark:border-white bg-theme text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
jr.displayName = "Card";
const Xo = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: $("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Xo.displayName = "CardHeader";
const Jo = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: $(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Jo.displayName = "CardTitle";
const qo = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: $("text-sm text-muted-foreground", e),
    ...t
  }
));
qo.displayName = "CardDescription";
const Zo = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx("div", { ref: r, className: $("p-6 pt-0", e), ...t }));
Zo.displayName = "CardContent";
const Qo = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  "div",
  {
    ref: r,
    className: $("flex items-center p-6 pt-0", e),
    ...t
  }
));
Qo.displayName = "CardFooter";
const es = Ar(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function ts({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ u.jsx("div", { className: $(es({ variant: t }), e), ...r });
}
const rs = ({
  providerLink: e,
  disabled: t,
  isSelected: r,
  isTop: n,
  checkerNamesList: o,
  latency: s,
  score: c,
  index: i,
  failedChecks: d,
  isHealthCheckerActive: f,
  deleteProvider: p,
  switchToProvider: v,
  selectValidator: g
}) => {
  const C = (R) => {
    d.includes(R) && g(e, R);
  };
  return n && i === 1 ? null : /* @__PURE__ */ u.jsxs(
    jr,
    {
      className: $(
        "relative flex flex-col gap-2 my-1 p-2 dark:text-white",
        "lg:flex-row lg:flex-wrap lg:items-center",
        {
          "outline outline-2 outline-offset-2 mb-6": n,
          "border-green-600": r
        }
      ),
      children: [
        !r && /* @__PURE__ */ u.jsx("div", { className: "absolute top-0 right-2", children: /* @__PURE__ */ u.jsx(
          ve,
          {
            className: "p-1 rounded",
            onClick: () => p(e),
            variant: "ghost",
            children: /* @__PURE__ */ u.jsx(kr, { className: "w-4 h-4 dark:text-white" })
          }
        ) }),
        /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap justify-around p-4 w-full", children: [
          /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full md:w-1/2", children: [
            /* @__PURE__ */ u.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ u.jsx("p", { children: i }),
              /* @__PURE__ */ u.jsx(
                "p",
                {
                  className: $("text-center", {
                    "text-red-600": t
                  }),
                  "data-testid": "hc-api-name",
                  children: e
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx("div", { className: "flex flex-wrap items-center gap-2 py-2 pl-4", children: t ? /* @__PURE__ */ u.jsx("div", { children: "API failed" }) : o.map((R) => /* @__PURE__ */ u.jsx(
              ts,
              {
                variant: "outline",
                className: $("m-0.5", {
                  "border-red-600 cursor-pointer": d.includes(R)
                }),
                onClick: () => C(R),
                "data-testid": "hc-validator-badge",
                children: R
              },
              R
            )) })
          ] }),
          /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col w-full md:w-1/2 align-center justify-center", children: [
            f && /* @__PURE__ */ u.jsx("div", { className: "flex w-full justify-center align-center", children: c !== -1 ? c !== 0 && /* @__PURE__ */ u.jsxs("div", { className: "flex gap-6", children: [
              /* @__PURE__ */ u.jsxs("p", { children: [
                "Latency: ",
                s
              ] }),
              /* @__PURE__ */ u.jsxs("p", { children: [
                "Score: ",
                c.toFixed(3)
              ] })
            ] }) : /* @__PURE__ */ u.jsx(wt, { className: "h-6 w-6 animate-spin" }) }),
            /* @__PURE__ */ u.jsx("div", { className: "flex w-full items-end justify-center text-center", children: r ? /* @__PURE__ */ u.jsx("div", { className: "text-green-600", "data-testid": "hc-selected", children: "Selected" }) : /* @__PURE__ */ u.jsx(
              ve,
              {
                className: "hover:bg-slate-400 rounded w-full max-w-[200px]",
                onClick: () => v(e),
                "data-testid": "hc-set-api-button",
                children: i18n.t('setMain'),
              }
            ) })
          ] })
        ] })
      ]
    }
  );
}, kt = l.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ u.jsx(
    "input",
    {
      type: t,
      className: $(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: n,
      ...r
    }
  )
);
kt.displayName = "Input";
const ns = (e) => {
  try {
    const t = new URL(e), r = t.protocol === "http:" || t.protocol === "https:", n = /\.[a-z]{2,}$/i.test(t.hostname);
    return r && n;
  } catch {
    return !1;
  }
}, os = ({
  onProviderSubmit: e
}) => {
  const [t, r] = re(""), [n, o] = re(""), s = (c) => {
    if (!ns(c)) {
      o(
        "Please enter a valid URL (must start with http:// or https://)"
      );
      return;
    }
    o(""), e(c.trim()), r("");
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "flex flex-col justify left", children: [
    /* @__PURE__ */ u.jsx("div", { className: "font-semibold", children: i18n.t('AddCustomNode') }),
    /* @__PURE__ */ u.jsx("div", { className: "text-sm mb-2", children: i18n.t('EnterACustomHiveNodeURL') }),
    /* @__PURE__ */ u.jsxs("div", { className: "flex w-ful", children: [
      /* @__PURE__ */ u.jsx(
        kt,
        {
          value: t,
          autoFocus: !0,
          className: "focus:bg-white dark:focus:bg-gray-700",
          type: "url",
          "data-testid": "api-address-input",
          placeholder: "(e.g., https://example.com)",
          onChange: (c) => r(c.target.value)
        }
      ),
      /* @__PURE__ */ u.jsx(
        ve,
        {
          disabled: t === "",
          className: "hover:bg-slate-400",
          onClick: () => {
            s(t);
          },
          children: i18n.t('Add')
        }
      )
    ] }),
    n ? /* @__PURE__ */ u.jsx("div", { className: "flex text-red-500", children: n }) : null
  ] });
};
function ge(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function ss(e, t) {
  const r = l.createContext(t), n = (s) => {
    const { children: c, ...i } = s, d = l.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ u.jsx(r.Provider, { value: d, children: c });
  };
  n.displayName = e + "Provider";
  function o(s) {
    const c = l.useContext(r);
    if (c) return c;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function as(e, t = []) {
  let r = [];
  function n(s, c) {
    const i = l.createContext(c), d = r.length;
    r = [...r, c];
    const f = (v) => {
      var S;
      const { scope: g, children: C, ...R } = v, m = ((S = g == null ? void 0 : g[e]) == null ? void 0 : S[d]) || i, E = l.useMemo(() => R, Object.values(R));
      return /* @__PURE__ */ u.jsx(m.Provider, { value: E, children: C });
    };
    f.displayName = s + "Provider";
    function p(v, g) {
      var m;
      const C = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[d]) || i, R = l.useContext(C);
      if (R) return R;
      if (c !== void 0) return c;
      throw new Error(`\`${v}\` must be used within \`${s}\``);
    }
    return [f, p];
  }
  const o = () => {
    const s = r.map((c) => l.createContext(c));
    return function(i) {
      const d = (i == null ? void 0 : i[e]) || s;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: d } }),
        [i, d]
      );
    };
  };
  return o.scopeName = e, [n, is(o, ...t)];
}
function is(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const c = n.reduce((i, { useScope: d, scopeName: f }) => {
        const v = d(s)[`__scope${f}`];
        return { ...i, ...v };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var Je = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {
}, cs = l.useId || (() => {
}), ls = 0;
function it(e) {
  const [t, r] = l.useState(cs());
  return Je(() => {
    r((n) => n ?? String(ls++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function Ee(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function us({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, o] = ds({ defaultProp: t, onChange: r }), s = e !== void 0, c = s ? e : n, i = Ee(r), d = l.useCallback(
    (f) => {
      if (s) {
        const v = typeof f == "function" ? f(e) : f;
        v !== e && i(v);
      } else
        o(f);
    },
    [s, e, o, i]
  );
  return [c, d];
}
function ds({
  defaultProp: e,
  onChange: t
}) {
  const r = l.useState(e), [n] = r, o = l.useRef(n), s = Ee(t);
  return l.useEffect(() => {
    o.current !== n && (s(n), o.current = n);
  }, [n, o, s]), r;
}
var fs = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], he = fs.reduce((e, t) => {
  const r = l.forwardRef((n, o) => {
    const { asChild: s, ...c } = n, i = s ? Ze : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u.jsx(i, { ...c, ref: o });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function hs(e, t) {
  e && Kn.flushSync(() => e.dispatchEvent(t));
}
function ps(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ee(e);
  l.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var ms = "DismissableLayer", Et = "dismissableLayer.update", vs = "dismissableLayer.pointerDownOutside", gs = "dismissableLayer.focusOutside", tr, Or = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Tr = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: c,
      onDismiss: i,
      ...d
    } = e, f = l.useContext(Or), [p, v] = l.useState(null), g = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, C] = l.useState({}), R = Re(t, (N) => v(N)), m = Array.from(f.layers), [E] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), S = m.indexOf(E), k = p ? m.indexOf(p) : -1, j = f.layersWithOutsidePointerEventsDisabled.size > 0, _ = k >= S, I = xs((N) => {
      const X = N.target, Y = [...f.branches].some((ne) => ne.contains(X));
      !_ || Y || (o == null || o(N), c == null || c(N), N.defaultPrevented || i == null || i());
    }, g), w = ws((N) => {
      const X = N.target;
      [...f.branches].some((ne) => ne.contains(X)) || (s == null || s(N), c == null || c(N), N.defaultPrevented || i == null || i());
    }, g);
    return ps((N) => {
      k === f.layers.size - 1 && (n == null || n(N), !N.defaultPrevented && i && (N.preventDefault(), i()));
    }, g), l.useEffect(() => {
      if (p)
        return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (tr = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(p)), f.layers.add(p), rr(), () => {
          r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = tr);
        };
    }, [p, g, r, f]), l.useEffect(() => () => {
      p && (f.layers.delete(p), f.layersWithOutsidePointerEventsDisabled.delete(p), rr());
    }, [p, f]), l.useEffect(() => {
      const N = () => C({});
      return document.addEventListener(Et, N), () => document.removeEventListener(Et, N);
    }, []), /* @__PURE__ */ u.jsx(
      he.div,
      {
        ...d,
        ref: R,
        style: {
          pointerEvents: j ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ge(e.onFocusCapture, w.onFocusCapture),
        onBlurCapture: ge(e.onBlurCapture, w.onBlurCapture),
        onPointerDownCapture: ge(
          e.onPointerDownCapture,
          I.onPointerDownCapture
        )
      }
    );
  }
);
Tr.displayName = ms;
var bs = "DismissableLayerBranch", ys = l.forwardRef((e, t) => {
  const r = l.useContext(Or), n = l.useRef(null), o = Re(t, n);
  return l.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ u.jsx(he.div, { ...e, ref: o });
});
ys.displayName = bs;
function xs(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ee(e), n = l.useRef(!1), o = l.useRef(() => {
  });
  return l.useEffect(() => {
    const s = (i) => {
      if (i.target && !n.current) {
        let d = function() {
          _r(
            vs,
            r,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = d, t.addEventListener("click", o.current, { once: !0 })) : d();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function ws(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Ee(e), n = l.useRef(!1);
  return l.useEffect(() => {
    const o = (s) => {
      s.target && !n.current && _r(gs, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function rr() {
  const e = new CustomEvent(Et);
  document.dispatchEvent(e);
}
function _r(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? hs(o, s) : o.dispatchEvent(s);
}
var ct = "focusScope.autoFocusOnMount", lt = "focusScope.autoFocusOnUnmount", nr = { bubbles: !1, cancelable: !0 }, Cs = "FocusScope", Ir = l.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...c
  } = e, [i, d] = l.useState(null), f = Ee(o), p = Ee(s), v = l.useRef(null), g = Re(t, (m) => d(m)), C = l.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  l.useEffect(() => {
    if (n) {
      let m = function(j) {
        if (C.paused || !i) return;
        const _ = j.target;
        i.contains(_) ? v.current = _ : me(v.current, { select: !0 });
      }, E = function(j) {
        if (C.paused || !i) return;
        const _ = j.relatedTarget;
        _ !== null && (i.contains(_) || me(v.current, { select: !0 }));
      }, S = function(j) {
        if (document.activeElement === document.body)
          for (const I of j)
            I.removedNodes.length > 0 && me(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", E);
      const k = new MutationObserver(S);
      return i && k.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", E), k.disconnect();
      };
    }
  }, [n, i, C.paused]), l.useEffect(() => {
    if (i) {
      sr.add(C);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const S = new CustomEvent(ct, nr);
        i.addEventListener(ct, f), i.dispatchEvent(S), S.defaultPrevented || (Es(Ns(Mr(i)), { select: !0 }), document.activeElement === m && me(i));
      }
      return () => {
        i.removeEventListener(ct, f), setTimeout(() => {
          const S = new CustomEvent(lt, nr);
          i.addEventListener(lt, p), i.dispatchEvent(S), S.defaultPrevented || me(m ?? document.body, { select: !0 }), i.removeEventListener(lt, p), sr.remove(C);
        }, 0);
      };
    }
  }, [i, f, p, C]);
  const R = l.useCallback(
    (m) => {
      if (!r && !n || C.paused) return;
      const E = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, S = document.activeElement;
      if (E && S) {
        const k = m.currentTarget, [j, _] = Ss(k);
        j && _ ? !m.shiftKey && S === _ ? (m.preventDefault(), r && me(j, { select: !0 })) : m.shiftKey && S === j && (m.preventDefault(), r && me(_, { select: !0 })) : S === k && m.preventDefault();
      }
    },
    [r, n, C.paused]
  );
  return /* @__PURE__ */ u.jsx(he.div, { tabIndex: -1, ...c, ref: g, onKeyDown: R });
});
Ir.displayName = Cs;
function Es(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (me(n, { select: t }), document.activeElement !== r) return;
}
function Ss(e) {
  const t = Mr(e), r = or(t, e), n = or(t.reverse(), e);
  return [r, n];
}
function Mr(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function or(e, t) {
  for (const r of e)
    if (!Rs(r, { upTo: t })) return r;
}
function Rs(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ps(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function me(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Ps(e) && t && e.select();
  }
}
var sr = ks();
function ks() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = ar(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = ar(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function ar(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Ns(e) {
  return e.filter((t) => t.tagName !== "A");
}
var As = "Portal", Lr = l.forwardRef((e, t) => {
  var i;
  const { container: r, ...n } = e, [o, s] = l.useState(!1);
  Je(() => s(!0), []);
  const c = r || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return c ? Yn.createPortal(/* @__PURE__ */ u.jsx(he.div, { ...n, ref: t }), c) : null;
});
Lr.displayName = As;
function js(e, t) {
  return l.useReducer((r, n) => t[r][n] ?? r, e);
}
var Qe = (e) => {
  const { present: t, children: r } = e, n = Os(t), o = typeof r == "function" ? r({ present: n.isPresent }) : l.Children.only(r), s = Re(n.ref, Ts(o));
  return typeof r == "function" || n.isPresent ? l.cloneElement(o, { ref: s }) : null;
};
Qe.displayName = "Presence";
function Os(e) {
  const [t, r] = l.useState(), n = l.useRef({}), o = l.useRef(e), s = l.useRef("none"), c = e ? "mounted" : "unmounted", [i, d] = js(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return l.useEffect(() => {
    const f = Ve(n.current);
    s.current = i === "mounted" ? f : "none";
  }, [i]), Je(() => {
    const f = n.current, p = o.current;
    if (p !== e) {
      const g = s.current, C = Ve(f);
      e ? d("MOUNT") : C === "none" || (f == null ? void 0 : f.display) === "none" ? d("UNMOUNT") : d(p && g !== C ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, d]), Je(() => {
    if (t) {
      let f;
      const p = t.ownerDocument.defaultView ?? window, v = (C) => {
        const m = Ve(n.current).includes(C.animationName);
        if (C.target === t && m && (d("ANIMATION_END"), !o.current)) {
          const E = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", f = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = E);
          });
        }
      }, g = (C) => {
        C.target === t && (s.current = Ve(n.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", v), t.addEventListener("animationend", v), () => {
        p.clearTimeout(f), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", v), t.removeEventListener("animationend", v);
      };
    } else
      d("ANIMATION_END");
  }, [t, d]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: l.useCallback((f) => {
      f && (n.current = getComputedStyle(f)), r(f);
    }, [])
  };
}
function Ve(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ts(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var ut = 0;
function _s() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ir()), document.body.insertAdjacentElement("beforeend", e[1] ?? ir()), ut++, () => {
      ut === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ut--;
    };
  }, []);
}
function ir() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ue = function() {
  return ue = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, ue.apply(this, arguments);
};
function Fr(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function Is(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var He = "right-scroll-bar-position", Xe = "width-before-scroll-bar", Ms = "with-scroll-bars-hidden", Ls = "--removed-body-scroll-bar-size";
function dt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Fs(e, t) {
  var r = re(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Ds = typeof window < "u" ? l.useLayoutEffect : l.useEffect, cr = /* @__PURE__ */ new WeakMap();
function Ws(e, t) {
  var r = Fs(null, function(n) {
    return e.forEach(function(o) {
      return dt(o, n);
    });
  });
  return Ds(function() {
    var n = cr.get(r);
    if (n) {
      var o = new Set(n), s = new Set(e), c = r.current;
      o.forEach(function(i) {
        s.has(i) || dt(i, null);
      }), s.forEach(function(i) {
        o.has(i) || dt(i, c);
      });
    }
    cr.set(r, e);
  }, [e]), r;
}
function $s(e) {
  return e;
}
function zs(e, t) {
  t === void 0 && (t = $s);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(s) {
      var c = t(s, n);
      return r.push(c), function() {
        r = r.filter(function(i) {
          return i !== c;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (n = !0; r.length; ) {
        var c = r;
        r = [], c.forEach(s);
      }
      r = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      n = !0;
      var c = [];
      if (r.length) {
        var i = r;
        r = [], i.forEach(s), c = r;
      }
      var d = function() {
        var p = c;
        c = [], p.forEach(s);
      }, f = function() {
        return Promise.resolve().then(d);
      };
      f(), r = {
        push: function(p) {
          c.push(p), f();
        },
        filter: function(p) {
          return c = c.filter(p), r;
        }
      };
    }
  };
  return o;
}
function Bs(e) {
  e === void 0 && (e = {});
  var t = zs(null);
  return t.options = ue({ async: !0, ssr: !1 }, e), t;
}
var Dr = function(e) {
  var t = e.sideCar, r = Fr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return l.createElement(n, ue({}, r));
};
Dr.isSideCarExport = !0;
function Vs(e, t) {
  return e.useMedium(t), Dr;
}
var Wr = Bs(), ft = function() {
}, et = l.forwardRef(function(e, t) {
  var r = l.useRef(null), n = l.useState({
    onScrollCapture: ft,
    onWheelCapture: ft,
    onTouchMoveCapture: ft
  }), o = n[0], s = n[1], c = e.forwardProps, i = e.children, d = e.className, f = e.removeScrollBar, p = e.enabled, v = e.shards, g = e.sideCar, C = e.noIsolation, R = e.inert, m = e.allowPinchZoom, E = e.as, S = E === void 0 ? "div" : E, k = e.gapMode, j = Fr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = g, I = Ws([r, t]), w = ue(ue({}, j), o);
  return l.createElement(
    l.Fragment,
    null,
    p && l.createElement(_, { sideCar: Wr, removeScrollBar: f, shards: v, noIsolation: C, inert: R, setCallbacks: s, allowPinchZoom: !!m, lockRef: r, gapMode: k }),
    c ? l.cloneElement(l.Children.only(i), ue(ue({}, w), { ref: I })) : l.createElement(S, ue({}, w, { className: d, ref: I }), i)
  );
});
et.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
et.classNames = {
  fullWidth: Xe,
  zeroRight: He
};
var Us = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Gs() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Us();
  return t && e.setAttribute("nonce", t), e;
}
function Ks(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ys(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Hs = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Gs()) && (Ks(t, r), Ys(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Xs = function() {
  var e = Hs();
  return function(t, r) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, $r = function() {
  var e = Xs(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Js = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ht = function(e) {
  return parseInt(e || "", 10) || 0;
}, qs = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ht(r), ht(n), ht(o)];
}, Zs = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Js;
  var t = qs(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Qs = $r(), Ie = "data-scroll-locked", ea = function(e, t, r, n) {
  var o = e.left, s = e.top, c = e.right, i = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Ms, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(i, "px ").concat(n, `;
  }
  body[`).concat(Ie, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(i, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(He, ` {
    right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(Xe, ` {
    margin-right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(He, " .").concat(He, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Xe, " .").concat(Xe, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Ie, `] {
    `).concat(Ls, ": ").concat(i, `px;
  }
`);
}, lr = function() {
  var e = parseInt(document.body.getAttribute(Ie) || "0", 10);
  return isFinite(e) ? e : 0;
}, ta = function() {
  l.useEffect(function() {
    return document.body.setAttribute(Ie, (lr() + 1).toString()), function() {
      var e = lr() - 1;
      e <= 0 ? document.body.removeAttribute(Ie) : document.body.setAttribute(Ie, e.toString());
    };
  }, []);
}, ra = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  ta();
  var s = l.useMemo(function() {
    return Zs(o);
  }, [o]);
  return l.createElement(Qs, { styles: ea(s, !t, o, r ? "" : "!important") });
}, St = !1;
if (typeof window < "u")
  try {
    var Ue = Object.defineProperty({}, "passive", {
      get: function() {
        return St = !0, !0;
      }
    });
    window.addEventListener("test", Ue, Ue), window.removeEventListener("test", Ue, Ue);
  } catch {
    St = !1;
  }
var Oe = St ? { passive: !1 } : !1, na = function(e) {
  return e.tagName === "TEXTAREA";
}, zr = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !na(e) && r[t] === "visible")
  );
}, oa = function(e) {
  return zr(e, "overflowY");
}, sa = function(e) {
  return zr(e, "overflowX");
}, ur = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Br(e, n);
    if (o) {
      var s = Vr(e, n), c = s[1], i = s[2];
      if (c > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, aa = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, ia = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Br = function(e, t) {
  return e === "v" ? oa(t) : sa(t);
}, Vr = function(e, t) {
  return e === "v" ? aa(t) : ia(t);
}, ca = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, la = function(e, t, r, n, o) {
  var s = ca(e, window.getComputedStyle(t).direction), c = s * n, i = r.target, d = t.contains(i), f = !1, p = c > 0, v = 0, g = 0;
  do {
    var C = Vr(e, i), R = C[0], m = C[1], E = C[2], S = m - E - s * R;
    (R || S) && Br(e, i) && (v += S, g += R), i instanceof ShadowRoot ? i = i.host : i = i.parentNode;
  } while (
    // portaled content
    !d && i !== document.body || // self content
    d && (t.contains(i) || t === i)
  );
  return (p && Math.abs(v) < 1 || !p && Math.abs(g) < 1) && (f = !0), f;
}, Ge = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, dr = function(e) {
  return [e.deltaX, e.deltaY];
}, fr = function(e) {
  return e && "current" in e ? e.current : e;
}, ua = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, da = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, fa = 0, Te = [];
function ha(e) {
  var t = l.useRef([]), r = l.useRef([0, 0]), n = l.useRef(), o = l.useState(fa++)[0], s = l.useState($r)[0], c = l.useRef(e);
  l.useEffect(function() {
    c.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Is([e.lockRef.current], (e.shards || []).map(fr), !0).filter(Boolean);
      return m.forEach(function(E) {
        return E.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(E) {
          return E.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = l.useCallback(function(m, E) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !c.current.allowPinchZoom;
    var S = Ge(m), k = r.current, j = "deltaX" in m ? m.deltaX : k[0] - S[0], _ = "deltaY" in m ? m.deltaY : k[1] - S[1], I, w = m.target, N = Math.abs(j) > Math.abs(_) ? "h" : "v";
    if ("touches" in m && N === "h" && w.type === "range")
      return !1;
    var X = ur(N, w);
    if (!X)
      return !0;
    if (X ? I = N : (I = N === "v" ? "h" : "v", X = ur(N, w)), !X)
      return !1;
    if (!n.current && "changedTouches" in m && (j || _) && (n.current = I), !I)
      return !0;
    var Y = n.current || I;
    return la(Y, E, m, Y === "h" ? j : _);
  }, []), d = l.useCallback(function(m) {
    var E = m;
    if (!(!Te.length || Te[Te.length - 1] !== s)) {
      var S = "deltaY" in E ? dr(E) : Ge(E), k = t.current.filter(function(I) {
        return I.name === E.type && (I.target === E.target || E.target === I.shadowParent) && ua(I.delta, S);
      })[0];
      if (k && k.should) {
        E.cancelable && E.preventDefault();
        return;
      }
      if (!k) {
        var j = (c.current.shards || []).map(fr).filter(Boolean).filter(function(I) {
          return I.contains(E.target);
        }), _ = j.length > 0 ? i(E, j[0]) : !c.current.noIsolation;
        _ && E.cancelable && E.preventDefault();
      }
    }
  }, []), f = l.useCallback(function(m, E, S, k) {
    var j = { name: m, delta: E, target: S, should: k, shadowParent: pa(S) };
    t.current.push(j), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== j;
      });
    }, 1);
  }, []), p = l.useCallback(function(m) {
    r.current = Ge(m), n.current = void 0;
  }, []), v = l.useCallback(function(m) {
    f(m.type, dr(m), m.target, i(m, e.lockRef.current));
  }, []), g = l.useCallback(function(m) {
    f(m.type, Ge(m), m.target, i(m, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return Te.push(s), e.setCallbacks({
      onScrollCapture: v,
      onWheelCapture: v,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", d, Oe), document.addEventListener("touchmove", d, Oe), document.addEventListener("touchstart", p, Oe), function() {
      Te = Te.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", d, Oe), document.removeEventListener("touchmove", d, Oe), document.removeEventListener("touchstart", p, Oe);
    };
  }, []);
  var C = e.removeScrollBar, R = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    R ? l.createElement(s, { styles: da(o) }) : null,
    C ? l.createElement(ra, { gapMode: e.gapMode }) : null
  );
}
function pa(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ma = Vs(Wr, ha);
var Ur = l.forwardRef(function(e, t) {
  return l.createElement(et, ue({}, e, { ref: t, sideCar: ma }));
});
Ur.classNames = et.classNames;
var va = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, _e = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), Ye = {}, pt = 0, Gr = function(e) {
  return e && (e.host || Gr(e.parentNode));
}, ga = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Gr(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, ba = function(e, t, r, n) {
  var o = ga(t, Array.isArray(e) ? e : [e]);
  Ye[r] || (Ye[r] = /* @__PURE__ */ new WeakMap());
  var s = Ye[r], c = [], i = /* @__PURE__ */ new Set(), d = new Set(o), f = function(v) {
    !v || i.has(v) || (i.add(v), f(v.parentNode));
  };
  o.forEach(f);
  var p = function(v) {
    !v || d.has(v) || Array.prototype.forEach.call(v.children, function(g) {
      if (i.has(g))
        p(g);
      else
        try {
          var C = g.getAttribute(n), R = C !== null && C !== "false", m = (_e.get(g) || 0) + 1, E = (s.get(g) || 0) + 1;
          _e.set(g, m), s.set(g, E), c.push(g), m === 1 && R && Ke.set(g, !0), E === 1 && g.setAttribute(r, "true"), R || g.setAttribute(n, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", g, S);
        }
    });
  };
  return p(t), i.clear(), pt++, function() {
    c.forEach(function(v) {
      var g = _e.get(v) - 1, C = s.get(v) - 1;
      _e.set(v, g), s.set(v, C), g || (Ke.has(v) || v.removeAttribute(n), Ke.delete(v)), C || v.removeAttribute(r);
    }), pt--, pt || (_e = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), Ye = {});
  };
}, ya = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = va(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), ba(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Nt = "Dialog", [Kr, $a] = as(Nt), [xa, ae] = Kr(Nt), Yr = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    modal: c = !0
  } = e, i = l.useRef(null), d = l.useRef(null), [f = !1, p] = us({
    prop: n,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ u.jsx(
    xa,
    {
      scope: t,
      triggerRef: i,
      contentRef: d,
      contentId: it(),
      titleId: it(),
      descriptionId: it(),
      open: f,
      onOpenChange: p,
      onOpenToggle: l.useCallback(() => p((v) => !v), [p]),
      modal: c,
      children: r
    }
  );
};
Yr.displayName = Nt;
var Hr = "DialogTrigger", wa = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ae(Hr, r), s = Re(t, o.triggerRef);
    return /* @__PURE__ */ u.jsx(
      he.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ot(o.open),
        ...n,
        ref: s,
        onClick: ge(e.onClick, o.onOpenToggle)
      }
    );
  }
);
wa.displayName = Hr;
var At = "DialogPortal", [Ca, Xr] = Kr(At, {
  forceMount: void 0
}), Jr = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, s = ae(At, t);
  return /* @__PURE__ */ u.jsx(Ca, { scope: t, forceMount: r, children: l.Children.map(n, (c) => /* @__PURE__ */ u.jsx(Qe, { present: r || s.open, children: /* @__PURE__ */ u.jsx(Lr, { asChild: !0, container: o, children: c }) })) });
};
Jr.displayName = At;
var qe = "DialogOverlay", qr = l.forwardRef(
  (e, t) => {
    const r = Xr(qe, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = ae(qe, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ u.jsx(Qe, { present: n || s.open, children: /* @__PURE__ */ u.jsx(Ea, { ...o, ref: t }) }) : null;
  }
);
qr.displayName = qe;
var Ea = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ae(qe, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ u.jsx(Ur, { as: Ze, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ u.jsx(
        he.div,
        {
          "data-state": Ot(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), Se = "DialogContent", Zr = l.forwardRef(
  (e, t) => {
    const r = Xr(Se, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = ae(Se, e.__scopeDialog);
    return /* @__PURE__ */ u.jsx(Qe, { present: n || s.open, children: s.modal ? /* @__PURE__ */ u.jsx(Sa, { ...o, ref: t }) : /* @__PURE__ */ u.jsx(Ra, { ...o, ref: t }) });
  }
);
Zr.displayName = Se;
var Sa = l.forwardRef(
  (e, t) => {
    const r = ae(Se, e.__scopeDialog), n = l.useRef(null), o = Re(t, r.contentRef, n);
    return l.useEffect(() => {
      const s = n.current;
      if (s) return ya(s);
    }, []), /* @__PURE__ */ u.jsx(
      Qr,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ge(e.onCloseAutoFocus, (s) => {
          var c;
          s.preventDefault(), (c = r.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: ge(e.onPointerDownOutside, (s) => {
          const c = s.detail.originalEvent, i = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: ge(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Ra = l.forwardRef(
  (e, t) => {
    const r = ae(Se, e.__scopeDialog), n = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ u.jsx(
      Qr,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var c, i;
          (c = e.onCloseAutoFocus) == null || c.call(e, s), s.defaultPrevented || (n.current || (i = r.triggerRef.current) == null || i.focus(), s.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var d, f;
          (d = e.onInteractOutside) == null || d.call(e, s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const c = s.target;
          ((f = r.triggerRef.current) == null ? void 0 : f.contains(c)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Qr = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: s, ...c } = e, i = ae(Se, r), d = l.useRef(null), f = Re(t, d);
    return _s(), /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
      /* @__PURE__ */ u.jsx(
        Ir,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ u.jsx(
            Tr,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Ot(i.open),
              ...c,
              ref: f,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(Pa, { titleId: i.titleId }),
        /* @__PURE__ */ u.jsx(Na, { contentRef: d, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), jt = "DialogTitle", en = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ae(jt, r);
    return /* @__PURE__ */ u.jsx(he.h2, { id: o.titleId, ...n, ref: t });
  }
);
en.displayName = jt;
var tn = "DialogDescription", rn = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ae(tn, r);
    return /* @__PURE__ */ u.jsx(he.p, { id: o.descriptionId, ...n, ref: t });
  }
);
rn.displayName = tn;
var nn = "DialogClose", on = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ae(nn, r);
    return /* @__PURE__ */ u.jsx(
      he.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: ge(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
on.displayName = nn;
function Ot(e) {
  return e ? "open" : "closed";
}
var sn = "DialogTitleWarning", [za, an] = ss(sn, {
  contentName: Se,
  titleName: jt,
  docsSlug: "dialog"
}), Pa = ({ titleId: e }) => {
  const t = an(sn), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return l.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, ka = "DialogDescriptionWarning", Na = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${an(ka).contentName}}.`;
  return l.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, Aa = Yr, ja = Jr, cn = qr, ln = Zr, un = en, dn = rn, Oa = on;
const Ta = Aa, _a = ja, fn = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  cn,
  {
    ref: r,
    className: $(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
fn.displayName = cn.displayName;
const hn = l.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ u.jsxs(_a, { children: [
  /* @__PURE__ */ u.jsx(fn, {}),
  /* @__PURE__ */ u.jsxs(
    ln,
    {
      ref: n,
      className: $(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-theme p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ u.jsxs(Oa, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ u.jsx(kr, { className: "h-4 w-4" }),
          /* @__PURE__ */ u.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
hn.displayName = ln.displayName;
const pn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: $(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
pn.displayName = "DialogHeader";
const mn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: $(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
mn.displayName = "DialogFooter";
const vn = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  un,
  {
    ref: r,
    className: $(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
vn.displayName = un.displayName;
const Ia = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u.jsx(
  dn,
  {
    ref: r,
    className: $("text-sm text-muted-foreground", e),
    ...t
  }
));
Ia.displayName = dn.displayName;
const Ma = ({
  isOpened: e,
  validatorDetails: t,
  onDialogOpenChange: r,
  clearValidationError: n
}) => {
  const o = () => {
    t != null && t.providerName && (t != null && t.checkName) && (n(t == null ? void 0 : t.providerName, t == null ? void 0 : t.checkName), r(!1));
  }, s = () => typeof (t == null ? void 0 : t.params) == "string" ? JSON.stringify(JSON.parse(t == null ? void 0 : t.params), null, 2) : null;
  return /* @__PURE__ */ u.jsx(Ta, { open: e, onOpenChange: r, children: /* @__PURE__ */ u.jsxs(hn, { children: [
    /* @__PURE__ */ u.jsx(pn, { children: /* @__PURE__ */ u.jsxs(vn, { children: [
      t == null ? void 0 : t.checkName,
      " validator error"
    ] }) }),
    /* @__PURE__ */ u.jsx("div", { children: 'Message: ' }),
    /* @__PURE__ */ u.jsx("div", { children: t == null ? void 0 : t.message }),
    /* @__PURE__ */ u.jsx("div", { children:  "Path:"  }),
    /* @__PURE__ */ u.jsx("pre", { children: t == null ? void 0 : t.paths.join("/") }),
    /* @__PURE__ */ u.jsx("div", { children:  "Params:" }),
    /* @__PURE__ */ u.jsx("pre", { children: s() }),
    /* @__PURE__ */ u.jsx(mn, { children: /* @__PURE__ */ u.jsx(ve, { onClick: o, children: "Clear error"  }) })
  ] }) });
}, gn = ({
  leftLabel: e,
  rightLabel: t,
  checked: r,
  className: n = "",
  disabled: o,
  onClick: s
}) => /* @__PURE__ */ u.jsxs(
  "div",
  {
    className: $("flex gap-x-2 items-center", n),
    "data-testid": "toggle",
    children: [
      e && /* @__PURE__ */ u.jsx("p", { children: e }),
      /* @__PURE__ */ u.jsx(
        "div",
        {
          className: $(
            "w-10 h-5 rounded-3xl border-2 invalid relative border-black dark:border-white",
            {
              "cursor-pointer": !o,
              "bg-green-600": r,
              "bg-transparent": !r,
              "border-gray-700": o && !r
            }
          ),
          onClick: o ? void 0 : s,
          children: /* @__PURE__ */ u.jsx(
            "div",
            {
              className: $(
                "w-3.5 h-3.5 bg-white rounded-full absolute top-px left-px transition duration-300 ease-in-out",
                {
                  "translate-x-[20px]": r,
                  "bg-gray-700": o && !r,
                  "bg-black dark:bg-white": !o
                }
              )
            }
          )
        }
      ),
      t && /* @__PURE__ */ u.jsx("p", { children: t })
    ]
  }
);

gn.displayName = "Toggle";
const Ba = ({
  className: e,
  healthCheckerService: t,
  selectedLanguage
}) => {
  
  const { t: translate} = useTranslation('healthchecker');

  
    useEffect(() => {
      //i18n.changeLanguage('en');
       console.log('selectedLanguage prop:', selectedLanguage);
       if (selectedLanguage) i18n.changeLanguage(selectedLanguage);
        console.log('selectedLanguage prop:', selectedLanguage);
    
    }, [selectedLanguage]); 

    //if (!ready) return React.createElement('p', null, 'Loading…');

    
  const {
    addProvider: r,
    removeProvider: n,
    resetProviders: o,
    clearValidationError: s,
    handleChangeOfNode: c,
    startCheckingProcess: i,
    stopCheckingProcess: d,
    evaluateAndSwitch: f,
    serviceKey: p
  } = t, [v, g] = re(
    void 0
  ), [C, R] = re(void 0), [m, E] = re(null), [S, k] = re(void 0), [j, _] = re(""), [I, w] = re(/* @__PURE__ */ new Map()), [N, X] = re(void 0), [Y, ne] = re(void 0), [Pe, de] = re(!1), [H, U] = re(void 0), J = (A) => {
    r(A);
  }, L = (A, q) => {
    var ee;
    const Q = (ee = I == null ? void 0 : I.get(A)) == null ? void 0 : ee.find((se) => se.checkName === q);
    Q && (U(Q), de(!0));
  }, ie = () => {
    const A = t.getComponentData();
    A && (R(A == null ? void 0 : A.scoredEndpoints), g(A == null ? void 0 : A.apiCheckers), k(A == null ? void 0 : A.providers), w(A.failedChecksByProvider), E(A == null ? void 0 : A.nodeAddress), X(A == null ? void 0 : A.isActive), ne(A == null ? void 0 : A.switchStatus));
  }, B = () => {
    N ? d() : i();
  };
  Gn(() => (t.addEventListener(`stateChange-${p}`, () => {
    ie();
  }), ie(), () => {
    t.removeEventListener(
      `stateChange-${p}`,
      () => {
        ie();
      }
    );
  }), []);
  const G = (A, q, Q) => {
    var ke;
    const { endpointUrl: ee, score: se, up: ce } = A;
    let ye = null;
    return ce && A.latencies.length && (ye = A.latencies[A.latencies.length - 1]), S != null && S.find((le) => le === ee) ? /* @__PURE__ */ u.jsx(
      rs,
      {
        isTop: !1,
        providerLink: ee,
        switchToProvider: c,
        disabled: se === 0,
        latency: ye,
        isSelected: A.endpointUrl === m,
        checkerNamesList: (v == null ? void 0 : v.map((le) => le.title)) || [],
        index: q + 1,
        score: A.score,
        deleteProvider: n,
        failedChecks: ((ke = I.get(ee)) == null ? void 0 : ke.map((le) => le.checkName)) || [],
        selectValidator: L,
        isHealthCheckerActive: !!N
      },
      ee
    ) : null;
  }, fe = () => {
    if (!C || !C.length)
      return /* @__PURE__ */ u.jsx(wt, { className: "ml-2 animate-spin h-8 w-8 justify-self-center mb-4 ..." });
    const A = j ? C.filter(
      (q) => q.endpointUrl.toLowerCase().includes(j.toLowerCase())
    ) : C;
    return /* @__PURE__ */ u.jsx(u.Fragment, { children: A.sort((q, Q) => q.endpointUrl === m ? -1 : Q.endpointUrl === m ? 1 : 0).map(
      (q, Q) => G(q, Q)
    ) });
  }, be = () => {
    if (!Y) return /* @__PURE__ */ u.jsx(u.Fragment, { children:i18n.t('switchToBest')});
    if (Y === "waiting")
      return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        "Evaluating",
        " ",
        Y === "waiting" && /* @__PURE__ */ u.jsx(wt, { className: "animate-spin h-6 w-6 ..." })
      ] });
    if (Y === "done") return /* @__PURE__ */ u.jsx(u.Fragment, { children: i18n.t('endpointFound')});
    if (Y === "no_change") return /* @__PURE__ */ u.jsx(u.Fragment, { children: i18n.t('alreadyBest') });
  };
  return /* @__PURE__ */ u.jsxs("div", { className: $(e), children: [
    /* @__PURE__ */ u.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ u.jsx("h2", { className: "text-xl text-left", children: i18n.t('title') }),
      console.log('all keys =', i18n.getResourceBundle('en', 'healthchecker')),
      /* @__PURE__ */ u.jsx("div", { className: "flex items-center space-x-2 my-2", children: /* @__PURE__ */ u.jsx(
        gn,
        {
          checked: !!N,
          onClick: B,
          leftLabel: i18n.t('continuousCheck')
        }
      ) })
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "flex flex-wrap items-center gap-2 justify-between my-2 w-full", children: [
      /* @__PURE__ */ u.jsx(
        ve,
        {
          variant: "outline",
          className: "mt-2 order-1 sm:order-2",
          onClick: f,
          children: be()
        }
      ),
      /* @__PURE__ */ u.jsxs("div", { className: "flex mt-2 w-full sm:w-1/2 order-2 sm:order-1", children: [
        /* @__PURE__ */ u.jsx(
          kt,
          {
            type: "text",
            placeholder: i18n.t('filterPlaceholder'),
            value: j,
            onChange: (A) => _(A.target.value),
            className: "w-full"
          }
        ),
        j && /* @__PURE__ */ u.jsx(
          ve,
          {
            variant: "ghost",
            size: "icon",
            onClick: () => _(""),
            "aria-label": i18n.t('clearFilter'),
            className: "ml-2",
            children: "Clear"
          }
        )
      ] })
    ] }),
    fe(),
    /* @__PURE__ */ u.jsx(os, { onProviderSubmit: J }),
    /* @__PURE__ */ u.jsx(
      ve,
      {
        variant: "outline",
        className: "mt-2",
        onClick: o,
        children: i18n.t('restoreDefaults')
      }
      
    ),
    /* @__PURE__ */ u.jsx(
      Ma,
      {
        isOpened: Pe,
        onDialogOpenChange: de,
        validatorDetails: H,
        clearValidationError: s
      }
    )
  ] });
}, mt = "localProviders";
class Va extends EventTarget {
  /**
   * 
   * @param serviceKey 
   * @param apiCheckers 
   * @param defaultProviders 
   * @param nodeAddress 
   * @param changeNodeAddress 
   * @param enableLogs 
   * Initialize necessery part of HC process. Set providers, chekers and addresses. Don't start checks yet.
   */
  constructor(r, n, o, s, c, i) {
    super();
    D(this, "defaultProviders");
    D(this, "healthChecker");
    D(this, "endpointTitleById", /* @__PURE__ */ new Map());
    D(this, "enableLogs");
    D(this, "scoredEndpoints");
    D(this, "failedChecksByProvider", /* @__PURE__ */ new Map());
    D(this, "nodeAddress", null);
    D(this, "providers");
    D(this, "apiCheckers");
    D(this, "serviceKey");
    D(this, "isActive");
    D(this, "switchStatus");
    D(this, "changeNodeAddress", () => {
    });
    // Local Storage
    D(this, "readLocalProvidersFromLocalStorage", () => {
      try {
        const r = window.localStorage.getItem(`${mt}-${this.serviceKey}`);
        r ? this.providers = JSON.parse(r) : this.providers = this.defaultProviders;
      } catch (r) {
        console.log(r);
      }
    });
    D(this, "writeLocalProvidersToLocalStorage", async (r) => {
      try {
        r && r.length > 0 ? (await window.localStorage.setItem(`${mt}-${this.serviceKey}`, JSON.stringify(r)), this.providers = r) : (await window.localStorage.removeItem(`${mt}-${this.serviceKey}`), this.providers = void 0);
      } catch (n) {
        console.log(n);
      }
    });
    // HC Logic
    D(this, "handleChangeOfNode", (r) => {
      this.changeNodeAddress(r), this.nodeAddress = r, this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
    });
    D(this, "markValidationError", (r, n, o) => {
      const s = this.endpointTitleById.get(r);
      if (s) {
        const c = {
          checkName: s,
          providerName: n,
          message: o.message,
          paths: o.apiEndpoint.paths,
          params: o.request.data
        }, i = [...this.failedChecksByProvider.get(n) || [], c], d = structuredClone(this.failedChecksByProvider).set(n, i);
        this.failedChecksByProvider = d, this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
      }
    });
    D(this, "clearValidationError", (r, n) => {
      const o = [...this.failedChecksByProvider.get(r) || []].filter((c) => c.checkName !== n), s = structuredClone(this.failedChecksByProvider).set(r, o);
      this.failedChecksByProvider = s, this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
    });
    D(this, "updateAppAfterScoredEndpointsChange", (r) => {
      this.enableLogs && console.log(JSON.stringify(r)), r.length && (this.scoredEndpoints = r), this.switchStatus && this.switchToBestProvider(), this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
    });
    /**
     * Part of HC necessary initialization. Set event listeners and default endpoints.
     */
    D(this, "initializeHealthChecker", async () => {
      var n, o, s, c;
      (n = this.healthChecker) == null || n.on("error", (i) => {
        this.enableLogs && console.error(i.message);
      }), (o = this.healthChecker) == null || o.on("data", this.updateAppAfterScoredEndpointsChange), (s = this.healthChecker) == null || s.on("validationerror", (i) => this.markValidationError(i.apiEndpoint.id, i.request.endpoint, i));
      const r = (c = this.providers) == null ? void 0 : c.map(
        (i) => ({ endpointUrl: i, score: -1, up: !0, latencies: [] })
      );
      r && !this.scoredEndpoints && (this.scoredEndpoints = r);
    });
    D(this, "evaluateAndSwitch", () => {
      var r, n;
      this.isActive && ((n = (r = this.scoredEndpoints) == null ? void 0 : r[0]) != null && n.up) ? this.switchToBestProvider() : (this.switchStatus = "waiting", this.registerCalls(), this.emit(`stateChange-${this.serviceKey}`, this.getComponentData()));
    });
    D(this, "switchToBestProvider", () => {
      var n;
      const r = (n = this.scoredEndpoints) == null ? void 0 : n[0];
      r != null && r.up && (r != null && r.endpointUrl) && (this.nodeAddress !== r.endpointUrl && (this.handleChangeOfNode(r.endpointUrl), this.switchStatus = "done", setTimeout(() => {
        this.switchStatus = void 0, this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
      }, 5e3)), this.switchStatus = "no_change", this.emit(`stateChange-${this.serviceKey}`, this.getComponentData()), setTimeout(() => {
        this.switchStatus = void 0, this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
      }, 5e3));
    });
    D(this, "registerCalls", async () => {
      var n;
      const r = /* @__PURE__ */ new Map();
      if (this.apiCheckers)
        for (const o of this.apiCheckers) {
          const s = await ((n = this.healthChecker) == null ? void 0 : n.register(o.method, o.params, o.validatorFunction, this.providers));
          s && r.set(s.id, o.title);
        }
      this.endpointTitleById = r;
    });
    /**
     * Trigger automatic checks.
     */
    D(this, "startCheckingProcess", async () => {
      this.registerCalls(), this.isActive = !0, this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
    });
    /**
     * Stop automatic checks.
     */
    D(this, "stopCheckingProcess", async () => {
      var r;
      (r = this.healthChecker) == null || r.unregisterAll(), this.isActive = !1, this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
    });
    D(this, "addProvider", (r) => {
      if (this.healthChecker) {
        for (const n of this.healthChecker)
          n.addEndpointUrl(r);
        this.providers && !this.providers.some((n) => r === n) && (this.writeLocalProvidersToLocalStorage([...this.providers || [], r]), this.providers = [...this.providers || [], r], this.scoredEndpoints = [...this.scoredEndpoints || [], { endpointUrl: r, score: -1, up: !0, latencies: [] }], this.emit(`stateChange-${this.serviceKey}`, this.getComponentData()));
      }
    });
    D(this, "removeProvider", (r) => {
      var o, s;
      if (this.healthChecker && this.providers)
        for (const c of this.healthChecker)
          c.removeEndpointUrl(r);
      const n = ((o = this.providers) == null ? void 0 : o.filter((c) => c !== r)) || [];
      this.scoredEndpoints = (s = this.scoredEndpoints) == null ? void 0 : s.filter((c) => c.endpointUrl !== r), this.writeLocalProvidersToLocalStorage(n), this.providers = n, this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
    });
    D(this, "resetProviders", () => {
      var r, n;
      this.nodeAddress && !((r = this == null ? void 0 : this.defaultProviders) != null && r.includes(this.nodeAddress)) ? this.writeLocalProvidersToLocalStorage([...(this == null ? void 0 : this.defaultProviders) || [], this.nodeAddress]) : this.writeLocalProvidersToLocalStorage((this == null ? void 0 : this.defaultProviders) || []), this.scoredEndpoints = [], (n = this.healthChecker) == null || n.unregisterAll(), this.registerCalls(), this.emit(`stateChange-${this.serviceKey}`, this.getComponentData());
    });
    D(this, "getComponentData", () => {
      if (this.apiCheckers && this.scoredEndpoints)
        return {
          apiCheckers: this.apiCheckers,
          scoredEndpoints: this.scoredEndpoints,
          failedChecksByProvider: this.failedChecksByProvider,
          nodeAddress: this.nodeAddress,
          providers: this.providers,
          isActive: this.isActive,
          switchStatus: this.switchStatus
        };
    });
    this.serviceKey = r, this.apiCheckers = n, this.nodeAddress = s, this.defaultProviders = o, this.isActive = !1, this.healthChecker = new Hn(), this.readLocalProvidersFromLocalStorage(), this.changeNodeAddress = c, this.initializeHealthChecker(), this.enableLogs = i;
  }
  emit(r, n) {
    this.dispatchEvent(new CustomEvent(r, { detail: n }));
  }
}
export {
  Ba as HealthCheckerComponent,
  Va as HealthCheckerService
};
