import Cf, { useState as no, useEffect as Aa, useMemo as Bp, useRef as ws } from "react";
var m0 = { exports: {} }, Fp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zx;
function GD() {
  if (Zx) return Fp;
  Zx = 1;
  var j = Cf, K = Symbol.for("react.element"), k = Symbol.for("react.fragment"), at = Object.prototype.hasOwnProperty, De = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(je, Z, J) {
    var Oe, Y = {}, ee = null, I = null;
    J !== void 0 && (ee = "" + J), Z.key !== void 0 && (ee = "" + Z.key), Z.ref !== void 0 && (I = Z.ref);
    for (Oe in Z) at.call(Z, Oe) && !Be.hasOwnProperty(Oe) && (Y[Oe] = Z[Oe]);
    if (je && je.defaultProps) for (Oe in Z = je.defaultProps, Z) Y[Oe] === void 0 && (Y[Oe] = Z[Oe]);
    return { $$typeof: K, type: je, key: ee, ref: I, props: Y, _owner: De.current };
  }
  return Fp.Fragment = k, Fp.jsx = g, Fp.jsxs = g, Fp;
}
var Hp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jx;
function XD() {
  return Jx || (Jx = 1, process.env.NODE_ENV !== "production" && function() {
    var j = Cf, K = Symbol.for("react.element"), k = Symbol.for("react.portal"), at = Symbol.for("react.fragment"), De = Symbol.for("react.strict_mode"), Be = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), je = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), fe = Symbol.iterator, xe = "@@iterator";
    function we(E) {
      if (E === null || typeof E != "object")
        return null;
      var H = fe && E[fe] || E[xe];
      return typeof H == "function" ? H : null;
    }
    var et = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Ze(E) {
      {
        for (var H = arguments.length, ie = new Array(H > 1 ? H - 1 : 0), _e = 1; _e < H; _e++)
          ie[_e - 1] = arguments[_e];
        Me("error", E, ie);
      }
    }
    function Me(E, H, ie) {
      {
        var _e = et.ReactDebugCurrentFrame, Qe = _e.getStackAddendum();
        Qe !== "" && (H += "%s", ie = ie.concat([Qe]));
        var Pe = ie.map(function(nt) {
          return String(nt);
        });
        Pe.unshift("Warning: " + H), Function.prototype.apply.call(console[E], console, Pe);
      }
    }
    var it = !1, He = !1, Tt = !1, $e = !1, ln = !1, Ut;
    Ut = Symbol.for("react.module.reference");
    function en(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === at || E === Be || ln || E === De || E === J || E === Oe || $e || E === I || it || He || Tt || typeof E == "object" && E !== null && (E.$$typeof === ee || E.$$typeof === Y || E.$$typeof === g || E.$$typeof === je || E.$$typeof === Z || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === Ut || E.getModuleId !== void 0));
    }
    function Wt(E, H, ie) {
      var _e = E.displayName;
      if (_e)
        return _e;
      var Qe = H.displayName || H.name || "";
      return Qe !== "" ? ie + "(" + Qe + ")" : ie;
    }
    function G(E) {
      return E.displayName || "Context";
    }
    function X(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && Ze("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case at:
          return "Fragment";
        case k:
          return "Portal";
        case Be:
          return "Profiler";
        case De:
          return "StrictMode";
        case J:
          return "Suspense";
        case Oe:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case je:
            var H = E;
            return G(H) + ".Consumer";
          case g:
            var ie = E;
            return G(ie._context) + ".Provider";
          case Z:
            return Wt(E, E.render, "ForwardRef");
          case Y:
            var _e = E.displayName || null;
            return _e !== null ? _e : X(E.type) || "Memo";
          case ee: {
            var Qe = E, Pe = Qe._payload, nt = Qe._init;
            try {
              return X(nt(Pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Te = Object.assign, ot = 0, pt, Ft, W, ye, q, qe, tt;
    function Yn() {
    }
    Yn.__reactDisabledLog = !0;
    function un() {
      {
        if (ot === 0) {
          pt = console.log, Ft = console.info, W = console.warn, ye = console.error, q = console.group, qe = console.groupCollapsed, tt = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: Yn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        ot++;
      }
    }
    function ta() {
      {
        if (ot--, ot === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Te({}, E, {
              value: pt
            }),
            info: Te({}, E, {
              value: Ft
            }),
            warn: Te({}, E, {
              value: W
            }),
            error: Te({}, E, {
              value: ye
            }),
            group: Te({}, E, {
              value: q
            }),
            groupCollapsed: Te({}, E, {
              value: qe
            }),
            groupEnd: Te({}, E, {
              value: tt
            })
          });
        }
        ot < 0 && Ze("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var hn = et.ReactCurrentDispatcher, mn;
    function kn(E, H, ie) {
      {
        if (mn === void 0)
          try {
            throw Error();
          } catch (Qe) {
            var _e = Qe.stack.trim().match(/\n( *(at )?)/);
            mn = _e && _e[1] || "";
          }
        return `
` + mn + E;
      }
    }
    var ir = !1, Un;
    {
      var yn = typeof WeakMap == "function" ? WeakMap : Map;
      Un = new yn();
    }
    function cr(E, H) {
      if (!E || ir)
        return "";
      {
        var ie = Un.get(E);
        if (ie !== void 0)
          return ie;
      }
      var _e;
      ir = !0;
      var Qe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Pe;
      Pe = hn.current, hn.current = null, un();
      try {
        if (H) {
          var nt = function() {
            throw Error();
          };
          if (Object.defineProperty(nt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(nt, []);
            } catch (We) {
              _e = We;
            }
            Reflect.construct(E, [], nt);
          } else {
            try {
              nt.call();
            } catch (We) {
              _e = We;
            }
            E.call(nt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (We) {
            _e = We;
          }
          E();
        }
      } catch (We) {
        if (We && _e && typeof We.stack == "string") {
          for (var Je = We.stack.split(`
`), On = _e.stack.split(`
`), Yt = Je.length - 1, Xt = On.length - 1; Yt >= 1 && Xt >= 0 && Je[Yt] !== On[Xt]; )
            Xt--;
          for (; Yt >= 1 && Xt >= 0; Yt--, Xt--)
            if (Je[Yt] !== On[Xt]) {
              if (Yt !== 1 || Xt !== 1)
                do
                  if (Yt--, Xt--, Xt < 0 || Je[Yt] !== On[Xt]) {
                    var fr = `
` + Je[Yt].replace(" at new ", " at ");
                    return E.displayName && fr.includes("<anonymous>") && (fr = fr.replace("<anonymous>", E.displayName)), typeof E == "function" && Un.set(E, fr), fr;
                  }
                while (Yt >= 1 && Xt >= 0);
              break;
            }
        }
      } finally {
        ir = !1, hn.current = Pe, ta(), Error.prepareStackTrace = Qe;
      }
      var ui = E ? E.displayName || E.name : "", oi = ui ? kn(ui) : "";
      return typeof E == "function" && Un.set(E, oi), oi;
    }
    function Gt(E, H, ie) {
      return cr(E, !1);
    }
    function bt(E) {
      var H = E.prototype;
      return !!(H && H.isReactComponent);
    }
    function on(E, H, ie) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return cr(E, bt(E));
      if (typeof E == "string")
        return kn(E);
      switch (E) {
        case J:
          return kn("Suspense");
        case Oe:
          return kn("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case Z:
            return Gt(E.render);
          case Y:
            return on(E.type, H, ie);
          case ee: {
            var _e = E, Qe = _e._payload, Pe = _e._init;
            try {
              return on(Pe(Qe), H, ie);
            } catch {
            }
          }
        }
      return "";
    }
    var An = Object.prototype.hasOwnProperty, Ta = {}, ja = et.ReactDebugCurrentFrame;
    function Ae(E) {
      if (E) {
        var H = E._owner, ie = on(E.type, E._source, H ? H.type : null);
        ja.setExtraStackFrame(ie);
      } else
        ja.setExtraStackFrame(null);
    }
    function At(E, H, ie, _e, Qe) {
      {
        var Pe = Function.call.bind(An);
        for (var nt in E)
          if (Pe(E, nt)) {
            var Je = void 0;
            try {
              if (typeof E[nt] != "function") {
                var On = Error((_e || "React class") + ": " + ie + " type `" + nt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[nt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw On.name = "Invariant Violation", On;
              }
              Je = E[nt](H, nt, _e, ie, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Yt) {
              Je = Yt;
            }
            Je && !(Je instanceof Error) && (Ae(Qe), Ze("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _e || "React class", ie, nt, typeof Je), Ae(null)), Je instanceof Error && !(Je.message in Ta) && (Ta[Je.message] = !0, Ae(Qe), Ze("Failed %s type: %s", ie, Je.message), Ae(null));
          }
      }
    }
    var xt = Array.isArray;
    function _t(E) {
      return xt(E);
    }
    function Ot(E) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, ie = H && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return ie;
      }
    }
    function jn(E) {
      try {
        return Nt(E), !1;
      } catch {
        return !0;
      }
    }
    function Nt(E) {
      return "" + E;
    }
    function tn(E) {
      if (jn(E))
        return Ze("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ot(E)), Nt(E);
    }
    var nn = et.ReactCurrentOwner, Fn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gn, Q;
    function ne(E) {
      if (An.call(E, "ref")) {
        var H = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function ze(E) {
      if (An.call(E, "key")) {
        var H = Object.getOwnPropertyDescriptor(E, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Ge(E, H) {
      typeof E.ref == "string" && nn.current;
    }
    function lt(E, H) {
      {
        var ie = function() {
          gn || (gn = !0, Ze("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        ie.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: ie,
          configurable: !0
        });
      }
    }
    function mt(E, H) {
      {
        var ie = function() {
          Q || (Q = !0, Ze("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        ie.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: ie,
          configurable: !0
        });
      }
    }
    var Bt = function(E, H, ie, _e, Qe, Pe, nt) {
      var Je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: K,
        // Built-in properties that belong on the element
        type: E,
        key: H,
        ref: ie,
        props: nt,
        // Record the component responsible for creating this element.
        _owner: Pe
      };
      return Je._store = {}, Object.defineProperty(Je._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Je, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.defineProperty(Je, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Qe
      }), Object.freeze && (Object.freeze(Je.props), Object.freeze(Je)), Je;
    };
    function _n(E, H, ie, _e, Qe) {
      {
        var Pe, nt = {}, Je = null, On = null;
        ie !== void 0 && (tn(ie), Je = "" + ie), ze(H) && (tn(H.key), Je = "" + H.key), ne(H) && (On = H.ref, Ge(H, Qe));
        for (Pe in H)
          An.call(H, Pe) && !Fn.hasOwnProperty(Pe) && (nt[Pe] = H[Pe]);
        if (E && E.defaultProps) {
          var Yt = E.defaultProps;
          for (Pe in Yt)
            nt[Pe] === void 0 && (nt[Pe] = Yt[Pe]);
        }
        if (Je || On) {
          var Xt = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          Je && lt(nt, Xt), On && mt(nt, Xt);
        }
        return Bt(E, Je, On, Qe, _e, nn.current, nt);
      }
    }
    var vt = et.ReactCurrentOwner, ut = et.ReactDebugCurrentFrame;
    function Ht(E) {
      if (E) {
        var H = E._owner, ie = on(E.type, E._source, H ? H.type : null);
        ut.setExtraStackFrame(ie);
      } else
        ut.setExtraStackFrame(null);
    }
    var Fa;
    Fa = !1;
    function na(E) {
      return typeof E == "object" && E !== null && E.$$typeof === K;
    }
    function gl() {
      {
        if (vt.current) {
          var E = X(vt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function bs(E) {
      return "";
    }
    var ro = {};
    function ao(E) {
      {
        var H = gl();
        if (!H) {
          var ie = typeof E == "string" ? E : E.displayName || E.name;
          ie && (H = `

Check the top-level render call using <` + ie + ">.");
        }
        return H;
      }
    }
    function cu(E, H) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var ie = ao(H);
        if (ro[ie])
          return;
        ro[ie] = !0;
        var _e = "";
        E && E._owner && E._owner !== vt.current && (_e = " It was passed a child from " + X(E._owner.type) + "."), Ht(E), Ze('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, _e), Ht(null);
      }
    }
    function fu(E, H) {
      {
        if (typeof E != "object")
          return;
        if (_t(E))
          for (var ie = 0; ie < E.length; ie++) {
            var _e = E[ie];
            na(_e) && cu(_e, H);
          }
        else if (na(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Qe = we(E);
          if (typeof Qe == "function" && Qe !== E.entries)
            for (var Pe = Qe.call(E), nt; !(nt = Pe.next()).done; )
              na(nt.value) && cu(nt.value, H);
        }
      }
    }
    function io(E) {
      {
        var H = E.type;
        if (H == null || typeof H == "string")
          return;
        var ie;
        if (typeof H == "function")
          ie = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === Z || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === Y))
          ie = H.propTypes;
        else
          return;
        if (ie) {
          var _e = X(H);
          At(ie, E.props, "prop", _e, E);
        } else if (H.PropTypes !== void 0 && !Fa) {
          Fa = !0;
          var Qe = X(H);
          Ze("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Qe || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && Ze("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ii(E) {
      {
        for (var H = Object.keys(E.props), ie = 0; ie < H.length; ie++) {
          var _e = H[ie];
          if (_e !== "children" && _e !== "key") {
            Ht(E), Ze("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _e), Ht(null);
            break;
          }
        }
        E.ref !== null && (Ht(E), Ze("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
      }
    }
    var Ra = {};
    function br(E, H, ie, _e, Qe, Pe) {
      {
        var nt = en(E);
        if (!nt) {
          var Je = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (Je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var On = bs();
          On ? Je += On : Je += gl();
          var Yt;
          E === null ? Yt = "null" : _t(E) ? Yt = "array" : E !== void 0 && E.$$typeof === K ? (Yt = "<" + (X(E.type) || "Unknown") + " />", Je = " Did you accidentally export a JSX literal instead of a component?") : Yt = typeof E, Ze("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Yt, Je);
        }
        var Xt = _n(E, H, ie, Qe, Pe);
        if (Xt == null)
          return Xt;
        if (nt) {
          var fr = H.children;
          if (fr !== void 0)
            if (_e)
              if (_t(fr)) {
                for (var ui = 0; ui < fr.length; ui++)
                  fu(fr[ui], E);
                Object.freeze && Object.freeze(fr);
              } else
                Ze("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fu(fr, E);
        }
        if (An.call(H, "key")) {
          var oi = X(E), We = Object.keys(H).filter(function(lo) {
            return lo !== "key";
          }), Xe = We.length > 0 ? "{key: someKey, " + We.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ra[oi + Xe]) {
            var si = We.length > 0 ? "{" + We.join(": ..., ") + ": ...}" : "{}";
            Ze(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xe, oi, si, oi), Ra[oi + Xe] = !0;
          }
        }
        return E === at ? ii(Xt) : io(Xt), Xt;
      }
    }
    function Ai(E, H, ie) {
      return br(E, H, ie, !0);
    }
    function li(E, H, ie) {
      return br(E, H, ie, !1);
    }
    var ji = li, Fi = Ai;
    Hp.Fragment = at, Hp.jsx = ji, Hp.jsxs = Fi;
  }()), Hp;
}
process.env.NODE_ENV === "production" ? m0.exports = GD() : m0.exports = XD();
var me = m0.exports, Pp = {}, y0 = { exports: {} }, Ca = {}, Hm = { exports: {} }, v0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function KD() {
  return eT || (eT = 1, function(j) {
    function K(W, ye) {
      var q = W.length;
      W.push(ye);
      e: for (; 0 < q; ) {
        var qe = q - 1 >>> 1, tt = W[qe];
        if (0 < De(tt, ye)) W[qe] = ye, W[q] = tt, q = qe;
        else break e;
      }
    }
    function k(W) {
      return W.length === 0 ? null : W[0];
    }
    function at(W) {
      if (W.length === 0) return null;
      var ye = W[0], q = W.pop();
      if (q !== ye) {
        W[0] = q;
        e: for (var qe = 0, tt = W.length, Yn = tt >>> 1; qe < Yn; ) {
          var un = 2 * (qe + 1) - 1, ta = W[un], hn = un + 1, mn = W[hn];
          if (0 > De(ta, q)) hn < tt && 0 > De(mn, ta) ? (W[qe] = mn, W[hn] = q, qe = hn) : (W[qe] = ta, W[un] = q, qe = un);
          else if (hn < tt && 0 > De(mn, q)) W[qe] = mn, W[hn] = q, qe = hn;
          else break e;
        }
      }
      return ye;
    }
    function De(W, ye) {
      var q = W.sortIndex - ye.sortIndex;
      return q !== 0 ? q : W.id - ye.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Be = performance;
      j.unstable_now = function() {
        return Be.now();
      };
    } else {
      var g = Date, je = g.now();
      j.unstable_now = function() {
        return g.now() - je;
      };
    }
    var Z = [], J = [], Oe = 1, Y = null, ee = 3, I = !1, fe = !1, xe = !1, we = typeof setTimeout == "function" ? setTimeout : null, et = typeof clearTimeout == "function" ? clearTimeout : null, Ze = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Me(W) {
      for (var ye = k(J); ye !== null; ) {
        if (ye.callback === null) at(J);
        else if (ye.startTime <= W) at(J), ye.sortIndex = ye.expirationTime, K(Z, ye);
        else break;
        ye = k(J);
      }
    }
    function it(W) {
      if (xe = !1, Me(W), !fe) if (k(Z) !== null) fe = !0, pt(He);
      else {
        var ye = k(J);
        ye !== null && Ft(it, ye.startTime - W);
      }
    }
    function He(W, ye) {
      fe = !1, xe && (xe = !1, et(ln), ln = -1), I = !0;
      var q = ee;
      try {
        for (Me(ye), Y = k(Z); Y !== null && (!(Y.expirationTime > ye) || W && !Wt()); ) {
          var qe = Y.callback;
          if (typeof qe == "function") {
            Y.callback = null, ee = Y.priorityLevel;
            var tt = qe(Y.expirationTime <= ye);
            ye = j.unstable_now(), typeof tt == "function" ? Y.callback = tt : Y === k(Z) && at(Z), Me(ye);
          } else at(Z);
          Y = k(Z);
        }
        if (Y !== null) var Yn = !0;
        else {
          var un = k(J);
          un !== null && Ft(it, un.startTime - ye), Yn = !1;
        }
        return Yn;
      } finally {
        Y = null, ee = q, I = !1;
      }
    }
    var Tt = !1, $e = null, ln = -1, Ut = 5, en = -1;
    function Wt() {
      return !(j.unstable_now() - en < Ut);
    }
    function G() {
      if ($e !== null) {
        var W = j.unstable_now();
        en = W;
        var ye = !0;
        try {
          ye = $e(!0, W);
        } finally {
          ye ? X() : (Tt = !1, $e = null);
        }
      } else Tt = !1;
    }
    var X;
    if (typeof Ze == "function") X = function() {
      Ze(G);
    };
    else if (typeof MessageChannel < "u") {
      var Te = new MessageChannel(), ot = Te.port2;
      Te.port1.onmessage = G, X = function() {
        ot.postMessage(null);
      };
    } else X = function() {
      we(G, 0);
    };
    function pt(W) {
      $e = W, Tt || (Tt = !0, X());
    }
    function Ft(W, ye) {
      ln = we(function() {
        W(j.unstable_now());
      }, ye);
    }
    j.unstable_IdlePriority = 5, j.unstable_ImmediatePriority = 1, j.unstable_LowPriority = 4, j.unstable_NormalPriority = 3, j.unstable_Profiling = null, j.unstable_UserBlockingPriority = 2, j.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, j.unstable_continueExecution = function() {
      fe || I || (fe = !0, pt(He));
    }, j.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ut = 0 < W ? Math.floor(1e3 / W) : 5;
    }, j.unstable_getCurrentPriorityLevel = function() {
      return ee;
    }, j.unstable_getFirstCallbackNode = function() {
      return k(Z);
    }, j.unstable_next = function(W) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
          var ye = 3;
          break;
        default:
          ye = ee;
      }
      var q = ee;
      ee = ye;
      try {
        return W();
      } finally {
        ee = q;
      }
    }, j.unstable_pauseExecution = function() {
    }, j.unstable_requestPaint = function() {
    }, j.unstable_runWithPriority = function(W, ye) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          W = 3;
      }
      var q = ee;
      ee = W;
      try {
        return ye();
      } finally {
        ee = q;
      }
    }, j.unstable_scheduleCallback = function(W, ye, q) {
      var qe = j.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? qe + q : qe) : q = qe, W) {
        case 1:
          var tt = -1;
          break;
        case 2:
          tt = 250;
          break;
        case 5:
          tt = 1073741823;
          break;
        case 4:
          tt = 1e4;
          break;
        default:
          tt = 5e3;
      }
      return tt = q + tt, W = { id: Oe++, callback: ye, priorityLevel: W, startTime: q, expirationTime: tt, sortIndex: -1 }, q > qe ? (W.sortIndex = q, K(J, W), k(Z) === null && W === k(J) && (xe ? (et(ln), ln = -1) : xe = !0, Ft(it, q - qe))) : (W.sortIndex = tt, K(Z, W), fe || I || (fe = !0, pt(He))), W;
    }, j.unstable_shouldYield = Wt, j.unstable_wrapCallback = function(W) {
      var ye = ee;
      return function() {
        var q = ee;
        ee = ye;
        try {
          return W.apply(this, arguments);
        } finally {
          ee = q;
        }
      };
    };
  }(v0)), v0;
}
var h0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function qD() {
  return tT || (tT = 1, function(j) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var K = !1, k = 5;
      function at(Q, ne) {
        var ze = Q.length;
        Q.push(ne), g(Q, ne, ze);
      }
      function De(Q) {
        return Q.length === 0 ? null : Q[0];
      }
      function Be(Q) {
        if (Q.length === 0)
          return null;
        var ne = Q[0], ze = Q.pop();
        return ze !== ne && (Q[0] = ze, je(Q, ze, 0)), ne;
      }
      function g(Q, ne, ze) {
        for (var Ge = ze; Ge > 0; ) {
          var lt = Ge - 1 >>> 1, mt = Q[lt];
          if (Z(mt, ne) > 0)
            Q[lt] = ne, Q[Ge] = mt, Ge = lt;
          else
            return;
        }
      }
      function je(Q, ne, ze) {
        for (var Ge = ze, lt = Q.length, mt = lt >>> 1; Ge < mt; ) {
          var Bt = (Ge + 1) * 2 - 1, _n = Q[Bt], vt = Bt + 1, ut = Q[vt];
          if (Z(_n, ne) < 0)
            vt < lt && Z(ut, _n) < 0 ? (Q[Ge] = ut, Q[vt] = ne, Ge = vt) : (Q[Ge] = _n, Q[Bt] = ne, Ge = Bt);
          else if (vt < lt && Z(ut, ne) < 0)
            Q[Ge] = ut, Q[vt] = ne, Ge = vt;
          else
            return;
        }
      }
      function Z(Q, ne) {
        var ze = Q.sortIndex - ne.sortIndex;
        return ze !== 0 ? ze : Q.id - ne.id;
      }
      var J = 1, Oe = 2, Y = 3, ee = 4, I = 5;
      function fe(Q, ne) {
      }
      var xe = typeof performance == "object" && typeof performance.now == "function";
      if (xe) {
        var we = performance;
        j.unstable_now = function() {
          return we.now();
        };
      } else {
        var et = Date, Ze = et.now();
        j.unstable_now = function() {
          return et.now() - Ze;
        };
      }
      var Me = 1073741823, it = -1, He = 250, Tt = 5e3, $e = 1e4, ln = Me, Ut = [], en = [], Wt = 1, G = null, X = Y, Te = !1, ot = !1, pt = !1, Ft = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, ye = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function q(Q) {
        for (var ne = De(en); ne !== null; ) {
          if (ne.callback === null)
            Be(en);
          else if (ne.startTime <= Q)
            Be(en), ne.sortIndex = ne.expirationTime, at(Ut, ne);
          else
            return;
          ne = De(en);
        }
      }
      function qe(Q) {
        if (pt = !1, q(Q), !ot)
          if (De(Ut) !== null)
            ot = !0, Nt(tt);
          else {
            var ne = De(en);
            ne !== null && tn(qe, ne.startTime - Q);
          }
      }
      function tt(Q, ne) {
        ot = !1, pt && (pt = !1, nn()), Te = !0;
        var ze = X;
        try {
          var Ge;
          if (!K) return Yn(Q, ne);
        } finally {
          G = null, X = ze, Te = !1;
        }
      }
      function Yn(Q, ne) {
        var ze = ne;
        for (q(ze), G = De(Ut); G !== null && !(G.expirationTime > ze && (!Q || ja())); ) {
          var Ge = G.callback;
          if (typeof Ge == "function") {
            G.callback = null, X = G.priorityLevel;
            var lt = G.expirationTime <= ze, mt = Ge(lt);
            ze = j.unstable_now(), typeof mt == "function" ? G.callback = mt : G === De(Ut) && Be(Ut), q(ze);
          } else
            Be(Ut);
          G = De(Ut);
        }
        if (G !== null)
          return !0;
        var Bt = De(en);
        return Bt !== null && tn(qe, Bt.startTime - ze), !1;
      }
      function un(Q, ne) {
        switch (Q) {
          case J:
          case Oe:
          case Y:
          case ee:
          case I:
            break;
          default:
            Q = Y;
        }
        var ze = X;
        X = Q;
        try {
          return ne();
        } finally {
          X = ze;
        }
      }
      function ta(Q) {
        var ne;
        switch (X) {
          case J:
          case Oe:
          case Y:
            ne = Y;
            break;
          default:
            ne = X;
            break;
        }
        var ze = X;
        X = ne;
        try {
          return Q();
        } finally {
          X = ze;
        }
      }
      function hn(Q) {
        var ne = X;
        return function() {
          var ze = X;
          X = ne;
          try {
            return Q.apply(this, arguments);
          } finally {
            X = ze;
          }
        };
      }
      function mn(Q, ne, ze) {
        var Ge = j.unstable_now(), lt;
        if (typeof ze == "object" && ze !== null) {
          var mt = ze.delay;
          typeof mt == "number" && mt > 0 ? lt = Ge + mt : lt = Ge;
        } else
          lt = Ge;
        var Bt;
        switch (Q) {
          case J:
            Bt = it;
            break;
          case Oe:
            Bt = He;
            break;
          case I:
            Bt = ln;
            break;
          case ee:
            Bt = $e;
            break;
          case Y:
          default:
            Bt = Tt;
            break;
        }
        var _n = lt + Bt, vt = {
          id: Wt++,
          callback: ne,
          priorityLevel: Q,
          startTime: lt,
          expirationTime: _n,
          sortIndex: -1
        };
        return lt > Ge ? (vt.sortIndex = lt, at(en, vt), De(Ut) === null && vt === De(en) && (pt ? nn() : pt = !0, tn(qe, lt - Ge))) : (vt.sortIndex = _n, at(Ut, vt), !ot && !Te && (ot = !0, Nt(tt))), vt;
      }
      function kn() {
      }
      function ir() {
        !ot && !Te && (ot = !0, Nt(tt));
      }
      function Un() {
        return De(Ut);
      }
      function yn(Q) {
        Q.callback = null;
      }
      function cr() {
        return X;
      }
      var Gt = !1, bt = null, on = -1, An = k, Ta = -1;
      function ja() {
        var Q = j.unstable_now() - Ta;
        return !(Q < An);
      }
      function Ae() {
      }
      function At(Q) {
        if (Q < 0 || Q > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Q > 0 ? An = Math.floor(1e3 / Q) : An = k;
      }
      var xt = function() {
        if (bt !== null) {
          var Q = j.unstable_now();
          Ta = Q;
          var ne = !0, ze = !0;
          try {
            ze = bt(ne, Q);
          } finally {
            ze ? _t() : (Gt = !1, bt = null);
          }
        } else
          Gt = !1;
      }, _t;
      if (typeof ye == "function")
        _t = function() {
          ye(xt);
        };
      else if (typeof MessageChannel < "u") {
        var Ot = new MessageChannel(), jn = Ot.port2;
        Ot.port1.onmessage = xt, _t = function() {
          jn.postMessage(null);
        };
      } else
        _t = function() {
          Ft(xt, 0);
        };
      function Nt(Q) {
        bt = Q, Gt || (Gt = !0, _t());
      }
      function tn(Q, ne) {
        on = Ft(function() {
          Q(j.unstable_now());
        }, ne);
      }
      function nn() {
        W(on), on = -1;
      }
      var Fn = Ae, gn = null;
      j.unstable_IdlePriority = I, j.unstable_ImmediatePriority = J, j.unstable_LowPriority = ee, j.unstable_NormalPriority = Y, j.unstable_Profiling = gn, j.unstable_UserBlockingPriority = Oe, j.unstable_cancelCallback = yn, j.unstable_continueExecution = ir, j.unstable_forceFrameRate = At, j.unstable_getCurrentPriorityLevel = cr, j.unstable_getFirstCallbackNode = Un, j.unstable_next = ta, j.unstable_pauseExecution = kn, j.unstable_requestPaint = Fn, j.unstable_runWithPriority = un, j.unstable_scheduleCallback = mn, j.unstable_shouldYield = ja, j.unstable_wrapCallback = hn, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(h0)), h0;
}
var nT;
function iT() {
  return nT || (nT = 1, process.env.NODE_ENV === "production" ? Hm.exports = KD() : Hm.exports = qD()), Hm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rT;
function ZD() {
  if (rT) return Ca;
  rT = 1;
  var j = Cf, K = iT();
  function k(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var at = /* @__PURE__ */ new Set(), De = {};
  function Be(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (De[n] = r, n = 0; n < r.length; n++) at.add(r[n]);
  }
  var je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Z = Object.prototype.hasOwnProperty, J = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oe = {}, Y = {};
  function ee(n) {
    return Z.call(Y, n) ? !0 : Z.call(Oe, n) ? !1 : J.test(n) ? Y[n] = !0 : (Oe[n] = !0, !1);
  }
  function I(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function fe(n, r, l, o) {
    if (r === null || typeof r > "u" || I(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function xe(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var we = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    we[n] = new xe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    we[r] = new xe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    we[n] = new xe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    we[n] = new xe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    we[n] = new xe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    we[n] = new xe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    we[n] = new xe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    we[n] = new xe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    we[n] = new xe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var et = /[\-:]([a-z])/g;
  function Ze(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      et,
      Ze
    );
    we[r] = new xe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(et, Ze);
    we[r] = new xe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(et, Ze);
    we[r] = new xe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    we[n] = new xe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), we.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    we[n] = new xe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Me(n, r, l, o) {
    var c = we.hasOwnProperty(r) ? we[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (fe(r, l, c, o) && (l = null), o || c === null ? ee(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var it = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, He = Symbol.for("react.element"), Tt = Symbol.for("react.portal"), $e = Symbol.for("react.fragment"), ln = Symbol.for("react.strict_mode"), Ut = Symbol.for("react.profiler"), en = Symbol.for("react.provider"), Wt = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), Te = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), Ft = Symbol.for("react.offscreen"), W = Symbol.iterator;
  function ye(n) {
    return n === null || typeof n != "object" ? null : (n = W && n[W] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var q = Object.assign, qe;
  function tt(n) {
    if (qe === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      qe = r && r[1] || "";
    }
    return `
` + qe + n;
  }
  var Yn = !1;
  function un(n, r) {
    if (!n || Yn) return "";
    Yn = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (N) {
          var o = N;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (N) {
          o = N;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (N) {
          o = N;
        }
        n();
      }
    } catch (N) {
      if (N && o && typeof N.stack == "string") {
        for (var c = N.stack.split(`
`), d = o.stack.split(`
`), h = c.length - 1, S = d.length - 1; 1 <= h && 0 <= S && c[h] !== d[S]; ) S--;
        for (; 1 <= h && 0 <= S; h--, S--) if (c[h] !== d[S]) {
          if (h !== 1 || S !== 1)
            do
              if (h--, S--, 0 > S || c[h] !== d[S]) {
                var C = `
` + c[h].replace(" at new ", " at ");
                return n.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", n.displayName)), C;
              }
            while (1 <= h && 0 <= S);
          break;
        }
      }
    } finally {
      Yn = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? tt(n) : "";
  }
  function ta(n) {
    switch (n.tag) {
      case 5:
        return tt(n.type);
      case 16:
        return tt("Lazy");
      case 13:
        return tt("Suspense");
      case 19:
        return tt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = un(n.type, !1), n;
      case 11:
        return n = un(n.type.render, !1), n;
      case 1:
        return n = un(n.type, !0), n;
      default:
        return "";
    }
  }
  function hn(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case $e:
        return "Fragment";
      case Tt:
        return "Portal";
      case Ut:
        return "Profiler";
      case ln:
        return "StrictMode";
      case X:
        return "Suspense";
      case Te:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Wt:
        return (n.displayName || "Context") + ".Consumer";
      case en:
        return (n._context.displayName || "Context") + ".Provider";
      case G:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ot:
        return r = n.displayName || null, r !== null ? r : hn(n.type) || "Memo";
      case pt:
        r = n._payload, n = n._init;
        try {
          return hn(n(r));
        } catch {
        }
    }
    return null;
  }
  function mn(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return hn(r);
      case 8:
        return r === ln ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function kn(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ir(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Un(n) {
    var r = ir(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(h) {
        o = "" + h, d.call(this, h);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(h) {
        o = "" + h;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function yn(n) {
    n._valueTracker || (n._valueTracker = Un(n));
  }
  function cr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = ir(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Gt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function bt(n, r) {
    var l = r.checked;
    return q({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function on(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = kn(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function An(n, r) {
    r = r.checked, r != null && Me(n, "checked", r, !1);
  }
  function Ta(n, r) {
    An(n, r);
    var l = kn(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ae(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ae(n, r.type, kn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ja(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ae(n, r, l) {
    (r !== "number" || Gt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var At = Array.isArray;
  function xt(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + kn(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function _t(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(k(91));
    return q({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Ot(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(k(92));
        if (At(l)) {
          if (1 < l.length) throw Error(k(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: kn(l) };
  }
  function jn(n, r) {
    var l = kn(r.value), o = kn(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Nt(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function tn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function nn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? tn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Fn, gn = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Fn = Fn || document.createElement("div"), Fn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Fn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Q(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ne = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ze = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ne).forEach(function(n) {
    ze.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ne[r] = ne[n];
    });
  });
  function Ge(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ne.hasOwnProperty(n) && ne[n] ? ("" + r).trim() : r + "px";
  }
  function lt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ge(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var mt = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Bt(n, r) {
    if (r) {
      if (mt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(k(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(k(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(k(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(k(62));
    }
  }
  function _n(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vt = null;
  function ut(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ht = null, Fa = null, na = null;
  function gl(n) {
    if (n = Ee(n)) {
      if (typeof Ht != "function") throw Error(k(280));
      var r = n.stateNode;
      r && (r = Kt(r), Ht(n.stateNode, n.type, r));
    }
  }
  function bs(n) {
    Fa ? na ? na.push(n) : na = [n] : Fa = n;
  }
  function ro() {
    if (Fa) {
      var n = Fa, r = na;
      if (na = Fa = null, gl(n), r) for (n = 0; n < r.length; n++) gl(r[n]);
    }
  }
  function ao(n, r) {
    return n(r);
  }
  function cu() {
  }
  var fu = !1;
  function io(n, r, l) {
    if (fu) return n(r, l);
    fu = !0;
    try {
      return ao(n, r, l);
    } finally {
      fu = !1, (Fa !== null || na !== null) && (cu(), ro());
    }
  }
  function ii(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Kt(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(k(231, r, typeof l));
    return l;
  }
  var Ra = !1;
  if (je) try {
    var br = {};
    Object.defineProperty(br, "passive", { get: function() {
      Ra = !0;
    } }), window.addEventListener("test", br, br), window.removeEventListener("test", br, br);
  } catch {
    Ra = !1;
  }
  function Ai(n, r, l, o, c, d, h, S, C) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, N);
    } catch (V) {
      this.onError(V);
    }
  }
  var li = !1, ji = null, Fi = !1, E = null, H = { onError: function(n) {
    li = !0, ji = n;
  } };
  function ie(n, r, l, o, c, d, h, S, C) {
    li = !1, ji = null, Ai.apply(H, arguments);
  }
  function _e(n, r, l, o, c, d, h, S, C) {
    if (ie.apply(this, arguments), li) {
      if (li) {
        var N = ji;
        li = !1, ji = null;
      } else throw Error(k(198));
      Fi || (Fi = !0, E = N);
    }
  }
  function Qe(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Pe(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function nt(n) {
    if (Qe(n) !== n) throw Error(k(188));
  }
  function Je(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Qe(n), r === null) throw Error(k(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return nt(c), n;
          if (d === o) return nt(c), r;
          d = d.sibling;
        }
        throw Error(k(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var h = !1, S = c.child; S; ) {
          if (S === l) {
            h = !0, l = c, o = d;
            break;
          }
          if (S === o) {
            h = !0, o = c, l = d;
            break;
          }
          S = S.sibling;
        }
        if (!h) {
          for (S = d.child; S; ) {
            if (S === l) {
              h = !0, l = d, o = c;
              break;
            }
            if (S === o) {
              h = !0, o = d, l = c;
              break;
            }
            S = S.sibling;
          }
          if (!h) throw Error(k(189));
        }
      }
      if (l.alternate !== o) throw Error(k(190));
    }
    if (l.tag !== 3) throw Error(k(188));
    return l.stateNode.current === l ? n : r;
  }
  function On(n) {
    return n = Je(n), n !== null ? Yt(n) : null;
  }
  function Yt(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Yt(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Xt = K.unstable_scheduleCallback, fr = K.unstable_cancelCallback, ui = K.unstable_shouldYield, oi = K.unstable_requestPaint, We = K.unstable_now, Xe = K.unstable_getCurrentPriorityLevel, si = K.unstable_ImmediatePriority, lo = K.unstable_UserBlockingPriority, uo = K.unstable_NormalPriority, $p = K.unstable_LowPriority, xf = K.unstable_IdlePriority, oo = null, wa = null;
  function Yp(n) {
    if (wa && typeof wa.onCommitFiberRoot == "function") try {
      wa.onCommitFiberRoot(oo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var ra = Math.clz32 ? Math.clz32 : Tf, Pm = Math.log, $m = Math.LN2;
  function Tf(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Pm(n) / $m | 0) | 0;
  }
  var du = 64, ba = 4194304;
  function Sl(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function El(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = Sl(S) : (d &= h, d !== 0 && (o = Sl(d)));
    } else h = l & ~c, h !== 0 ? o = Sl(h) : d !== 0 && (o = Sl(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - ra(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Ym(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Rf(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - ra(d), S = 1 << h, C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = Ym(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function wf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ds() {
    var n = du;
    return du <<= 1, !(du & 4194240) && (du = 64), n;
  }
  function bf(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Cl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ra(r), n[r] = l;
  }
  function Im(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - ra(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function ks(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - ra(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Dt = 0;
  function Df(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var kt, kf, _f, Ye, Of, dr = !1, Hi = [], aa = null, Vi = null, rn = null, Pt = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), In = [], ia = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ci(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        aa = null;
        break;
      case "dragenter":
      case "dragleave":
        Vi = null;
        break;
      case "mouseover":
      case "mouseout":
        rn = null;
        break;
      case "pointerover":
      case "pointerout":
        Pt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        so.delete(r.pointerId);
    }
  }
  function co(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ee(r), r !== null && kf(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Nf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return aa = co(aa, n, r, l, o, c), !0;
      case "dragenter":
        return Vi = co(Vi, n, r, l, o, c), !0;
      case "mouseover":
        return rn = co(rn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Pt.set(d, co(Pt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, so.set(d, co(so.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Mf(n) {
    var r = Nl(n.target);
    if (r !== null) {
      var l = Qe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Pe(l), r !== null) {
            n.blockedOn = r, Of(n.priority, function() {
              _f(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function fo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Os(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        vt = o, l.target.dispatchEvent(o), vt = null;
      } else return r = Ee(l), r !== null && kf(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Ip(n, r, l) {
    fo(n) && l.delete(r);
  }
  function Qm() {
    dr = !1, aa !== null && fo(aa) && (aa = null), Vi !== null && fo(Vi) && (Vi = null), rn !== null && fo(rn) && (rn = null), Pt.forEach(Ip), so.forEach(Ip);
  }
  function po(n, r) {
    n.blockedOn === r && (n.blockedOn = null, dr || (dr = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, Qm)));
  }
  function Bi(n) {
    function r(c) {
      return po(c, n);
    }
    if (0 < Hi.length) {
      po(Hi[0], n);
      for (var l = 1; l < Hi.length; l++) {
        var o = Hi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (aa !== null && po(aa, n), Vi !== null && po(Vi, n), rn !== null && po(rn, n), Pt.forEach(r), so.forEach(r), l = 0; l < In.length; l++) o = In[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < In.length && (l = In[0], l.blockedOn === null); ) Mf(l), l.blockedOn === null && In.shift();
  }
  var xl = it.ReactCurrentBatchConfig, Tl = !0;
  function Qp(n, r, l, o) {
    var c = Dt, d = xl.transition;
    xl.transition = null;
    try {
      Dt = 1, _s(n, r, l, o);
    } finally {
      Dt = c, xl.transition = d;
    }
  }
  function Wp(n, r, l, o) {
    var c = Dt, d = xl.transition;
    xl.transition = null;
    try {
      Dt = 4, _s(n, r, l, o);
    } finally {
      Dt = c, xl.transition = d;
    }
  }
  function _s(n, r, l, o) {
    if (Tl) {
      var c = Os(n, r, l, o);
      if (c === null) Gs(n, r, o, vo, l), ci(n, o);
      else if (Nf(c, n, r, l, o)) o.stopPropagation();
      else if (ci(n, o), r & 4 && -1 < ia.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ee(c);
          if (d !== null && kt(d), d = Os(n, r, l, o), d === null && Gs(n, r, o, vo, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Gs(n, r, o, null, l);
    }
  }
  var vo = null;
  function Os(n, r, l, o) {
    if (vo = null, n = ut(o), n = Nl(n), n !== null) if (r = Qe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Pe(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return vo = n, null;
  }
  function Ns(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Xe()) {
          case si:
            return 1;
          case lo:
            return 4;
          case uo:
          case $p:
            return 16;
          case xf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var fi = null, Ms = null, pu = null;
  function Lf() {
    if (pu) return pu;
    var n, r = Ms, l = r.length, o, c = "value" in fi ? fi.value : fi.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++) ;
    return pu = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Ls(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function zs() {
    return !0;
  }
  function Us() {
    return !1;
  }
  function Dr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n) n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? zs : Us, this.isPropagationStopped = Us, this;
    }
    return q(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = zs);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = zs);
    }, persist: function() {
    }, isPersistent: zs }), r;
  }
  var Rl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, As = Dr(Rl), vu = q({}, Rl, { view: 0, detail: 0 }), Wm = Dr(vu), zf, Qn, wl, ho = q({}, vu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== wl && (wl && n.type === "mousemove" ? (zf = n.screenX - wl.screenX, Qn = n.screenY - wl.screenY) : Qn = zf = 0, wl = n), zf);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Qn;
  } }), Uf = Dr(ho), Gm = q({}, ho, { dataTransfer: 0 }), hu = Dr(Gm), Af = q({}, vu, { relatedTarget: 0 }), js = Dr(Af), Xm = q({}, Rl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Km = Dr(Xm), qm = q({}, Rl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Gp = Dr(qm), jf = q({}, Rl, { data: 0 }), Ff = Dr(jf), Xp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Kp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Zm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function di(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Zm[n]) ? !!r[n] : !1;
  }
  function Hf() {
    return di;
  }
  var Vf = q({}, vu, { key: function(n) {
    if (n.key) {
      var r = Xp[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Ls(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Kp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hf, charCode: function(n) {
    return n.type === "keypress" ? Ls(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ls(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bf = Dr(Vf), Pf = q({}, ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qp = Dr(Pf), Fs = q({}, vu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hf }), Zp = Dr(Fs), kr = q({}, Rl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pi = Dr(kr), Sn = q({}, ho, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vi = Dr(Sn), $f = [9, 13, 27, 32], mu = je && "CompositionEvent" in window, mo = null;
  je && "documentMode" in document && (mo = document.documentMode);
  var yo = je && "TextEvent" in window && !mo, Jp = je && (!mu || mo && 8 < mo && 11 >= mo), ev = " ", Hs = !1;
  function tv(n, r) {
    switch (n) {
      case "keyup":
        return $f.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function nv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var yu = !1;
  function rv(n, r) {
    switch (n) {
      case "compositionend":
        return nv(r);
      case "keypress":
        return r.which !== 32 ? null : (Hs = !0, ev);
      case "textInput":
        return n = r.data, n === ev && Hs ? null : n;
      default:
        return null;
    }
  }
  function Jm(n, r) {
    if (yu) return n === "compositionend" || !mu && tv(n, r) ? (n = Lf(), pu = Ms = fi = null, yu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Jp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ey = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function av(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ey[n.type] : r === "textarea";
  }
  function Yf(n, r, l, o) {
    bs(o), r = To(r, "onChange"), 0 < r.length && (l = new As("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Ha = null, bl = null;
  function iv(n) {
    _l(n, 0);
  }
  function go(n) {
    var r = ka(n);
    if (cr(r)) return n;
  }
  function ty(n, r) {
    if (n === "change") return r;
  }
  var lv = !1;
  if (je) {
    var If;
    if (je) {
      var Qf = "oninput" in document;
      if (!Qf) {
        var uv = document.createElement("div");
        uv.setAttribute("oninput", "return;"), Qf = typeof uv.oninput == "function";
      }
      If = Qf;
    } else If = !1;
    lv = If && (!document.documentMode || 9 < document.documentMode);
  }
  function ov() {
    Ha && (Ha.detachEvent("onpropertychange", sv), bl = Ha = null);
  }
  function sv(n) {
    if (n.propertyName === "value" && go(bl)) {
      var r = [];
      Yf(r, bl, n, ut(n)), io(iv, r);
    }
  }
  function ny(n, r, l) {
    n === "focusin" ? (ov(), Ha = r, bl = l, Ha.attachEvent("onpropertychange", sv)) : n === "focusout" && ov();
  }
  function cv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return go(bl);
  }
  function ry(n, r) {
    if (n === "click") return go(r);
  }
  function fv(n, r) {
    if (n === "input" || n === "change") return go(r);
  }
  function ay(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Da = typeof Object.is == "function" ? Object.is : ay;
  function So(n, r) {
    if (Da(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Z.call(r, c) || !Da(n[c], r[c])) return !1;
    }
    return !0;
  }
  function dv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Vs(n, r) {
    var l = dv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = dv(l);
    }
  }
  function Pi(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Pi(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Eo() {
    for (var n = window, r = Gt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Gt(n.document);
    }
    return r;
  }
  function Bs(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function gu(n) {
    var r = Eo(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Pi(l.ownerDocument.documentElement, l)) {
      if (o !== null && Bs(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Vs(l, d);
          var h = Vs(
            l,
            o
          );
          c && h && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== h.node || n.focusOffset !== h.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(h.node, h.offset)) : (r.setEnd(h.node, h.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var iy = je && "documentMode" in document && 11 >= document.documentMode, Su = null, Wf = null, Co = null, Gf = !1;
  function Xf(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Gf || Su == null || Su !== Gt(o) || (o = Su, "selectionStart" in o && Bs(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Co && So(Co, o) || (Co = o, o = To(Wf, "onSelect"), 0 < o.length && (r = new As("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Su)));
  }
  function Ps(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Dl = { animationend: Ps("Animation", "AnimationEnd"), animationiteration: Ps("Animation", "AnimationIteration"), animationstart: Ps("Animation", "AnimationStart"), transitionend: Ps("Transition", "TransitionEnd") }, Wn = {}, Kf = {};
  je && (Kf = document.createElement("div").style, "AnimationEvent" in window || (delete Dl.animationend.animation, delete Dl.animationiteration.animation, delete Dl.animationstart.animation), "TransitionEvent" in window || delete Dl.transitionend.transition);
  function $s(n) {
    if (Wn[n]) return Wn[n];
    if (!Dl[n]) return n;
    var r = Dl[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Kf) return Wn[n] = r[l];
    return n;
  }
  var pv = $s("animationend"), vv = $s("animationiteration"), hv = $s("animationstart"), mv = $s("transitionend"), qf = /* @__PURE__ */ new Map(), Ys = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function la(n, r) {
    qf.set(n, r), Be(r, [n]);
  }
  for (var Zf = 0; Zf < Ys.length; Zf++) {
    var kl = Ys[Zf], ly = kl.toLowerCase(), uy = kl[0].toUpperCase() + kl.slice(1);
    la(ly, "on" + uy);
  }
  la(pv, "onAnimationEnd"), la(vv, "onAnimationIteration"), la(hv, "onAnimationStart"), la("dblclick", "onDoubleClick"), la("focusin", "onFocus"), la("focusout", "onBlur"), la(mv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Be("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Be("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Be("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Be("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Be("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Be("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jf = new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));
  function Is(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, _e(o, r, void 0, n), n.currentTarget = null;
  }
  function _l(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var h = o.length - 1; 0 <= h; h--) {
          var S = o[h], C = S.instance, N = S.currentTarget;
          if (S = S.listener, C !== d && c.isPropagationStopped()) break e;
          Is(c, S, N), d = C;
        }
        else for (h = 0; h < o.length; h++) {
          if (S = o[h], C = S.instance, N = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped()) break e;
          Is(c, S, N), d = C;
        }
      }
    }
    if (Fi) throw n = E, Fi = !1, E = null, n;
  }
  function Rt(n, r) {
    var l = r[bo];
    l === void 0 && (l = r[bo] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (yv(r, n, 2, !1), l.add(o));
  }
  function Qs(n, r, l) {
    var o = 0;
    r && (o |= 4), yv(l, n, o, r);
  }
  var Ws = "_reactListening" + Math.random().toString(36).slice(2);
  function Eu(n) {
    if (!n[Ws]) {
      n[Ws] = !0, at.forEach(function(l) {
        l !== "selectionchange" && (Jf.has(l) || Qs(l, !1, n), Qs(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ws] || (r[Ws] = !0, Qs("selectionchange", !1, r));
    }
  }
  function yv(n, r, l, o) {
    switch (Ns(r)) {
      case 1:
        var c = Qp;
        break;
      case 4:
        c = Wp;
        break;
      default:
        c = _s;
    }
    l = c.bind(null, r, l, n), c = void 0, !Ra || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Gs(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var h = o.tag;
      if (h === 3 || h === 4) {
        var S = o.stateNode.containerInfo;
        if (S === c || S.nodeType === 8 && S.parentNode === c) break;
        if (h === 4) for (h = o.return; h !== null; ) {
          var C = h.tag;
          if ((C === 3 || C === 4) && (C = h.stateNode.containerInfo, C === c || C.nodeType === 8 && C.parentNode === c)) return;
          h = h.return;
        }
        for (; S !== null; ) {
          if (h = Nl(S), h === null) return;
          if (C = h.tag, C === 5 || C === 6) {
            o = d = h;
            continue e;
          }
          S = S.parentNode;
        }
      }
      o = o.return;
    }
    io(function() {
      var N = d, V = ut(l), P = [];
      e: {
        var F = qf.get(n);
        if (F !== void 0) {
          var ue = As, de = n;
          switch (n) {
            case "keypress":
              if (Ls(l) === 0) break e;
            case "keydown":
            case "keyup":
              ue = Bf;
              break;
            case "focusin":
              de = "focus", ue = js;
              break;
            case "focusout":
              de = "blur", ue = js;
              break;
            case "beforeblur":
            case "afterblur":
              ue = js;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ue = Uf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ue = hu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ue = Zp;
              break;
            case pv:
            case vv:
            case hv:
              ue = Km;
              break;
            case mv:
              ue = pi;
              break;
            case "scroll":
              ue = Wm;
              break;
            case "wheel":
              ue = vi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ue = Gp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ue = qp;
          }
          var he = (r & 4) !== 0, pn = !he && n === "scroll", w = he ? F !== null ? F + "Capture" : null : F;
          he = [];
          for (var T = N, _; T !== null; ) {
            _ = T;
            var B = _.stateNode;
            if (_.tag === 5 && B !== null && (_ = B, w !== null && (B = ii(T, w), B != null && he.push(Cu(T, B, _)))), pn) break;
            T = T.return;
          }
          0 < he.length && (F = new ue(F, de, null, l, V), P.push({ event: F, listeners: he }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (F = n === "mouseover" || n === "pointerover", ue = n === "mouseout" || n === "pointerout", F && l !== vt && (de = l.relatedTarget || l.fromElement) && (Nl(de) || de[hi])) break e;
          if ((ue || F) && (F = V.window === V ? V : (F = V.ownerDocument) ? F.defaultView || F.parentWindow : window, ue ? (de = l.relatedTarget || l.toElement, ue = N, de = de ? Nl(de) : null, de !== null && (pn = Qe(de), de !== pn || de.tag !== 5 && de.tag !== 6) && (de = null)) : (ue = null, de = N), ue !== de)) {
            if (he = Uf, B = "onMouseLeave", w = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (he = qp, B = "onPointerLeave", w = "onPointerEnter", T = "pointer"), pn = ue == null ? F : ka(ue), _ = de == null ? F : ka(de), F = new he(B, T + "leave", ue, l, V), F.target = pn, F.relatedTarget = _, B = null, Nl(V) === N && (he = new he(w, T + "enter", de, l, V), he.target = _, he.relatedTarget = pn, B = he), pn = B, ue && de) t: {
              for (he = ue, w = de, T = 0, _ = he; _; _ = $i(_)) T++;
              for (_ = 0, B = w; B; B = $i(B)) _++;
              for (; 0 < T - _; ) he = $i(he), T--;
              for (; 0 < _ - T; ) w = $i(w), _--;
              for (; T--; ) {
                if (he === w || w !== null && he === w.alternate) break t;
                he = $i(he), w = $i(w);
              }
              he = null;
            }
            else he = null;
            ue !== null && gv(P, F, ue, he, !1), de !== null && pn !== null && gv(P, pn, de, he, !0);
          }
        }
        e: {
          if (F = N ? ka(N) : window, ue = F.nodeName && F.nodeName.toLowerCase(), ue === "select" || ue === "input" && F.type === "file") var pe = ty;
          else if (av(F)) if (lv) pe = fv;
          else {
            pe = cv;
            var be = ny;
          }
          else (ue = F.nodeName) && ue.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (pe = ry);
          if (pe && (pe = pe(n, N))) {
            Yf(P, pe, l, V);
            break e;
          }
          be && be(n, F, N), n === "focusout" && (be = F._wrapperState) && be.controlled && F.type === "number" && Ae(F, "number", F.value);
        }
        switch (be = N ? ka(N) : window, n) {
          case "focusin":
            (av(be) || be.contentEditable === "true") && (Su = be, Wf = N, Co = null);
            break;
          case "focusout":
            Co = Wf = Su = null;
            break;
          case "mousedown":
            Gf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gf = !1, Xf(P, l, V);
            break;
          case "selectionchange":
            if (iy) break;
          case "keydown":
          case "keyup":
            Xf(P, l, V);
        }
        var ke;
        if (mu) e: {
          switch (n) {
            case "compositionstart":
              var Ue = "onCompositionStart";
              break e;
            case "compositionend":
              Ue = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ue = "onCompositionUpdate";
              break e;
          }
          Ue = void 0;
        }
        else yu ? tv(n, l) && (Ue = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ue = "onCompositionStart");
        Ue && (Jp && l.locale !== "ko" && (yu || Ue !== "onCompositionStart" ? Ue === "onCompositionEnd" && yu && (ke = Lf()) : (fi = V, Ms = "value" in fi ? fi.value : fi.textContent, yu = !0)), be = To(N, Ue), 0 < be.length && (Ue = new Ff(Ue, n, null, l, V), P.push({ event: Ue, listeners: be }), ke ? Ue.data = ke : (ke = nv(l), ke !== null && (Ue.data = ke)))), (ke = yo ? rv(n, l) : Jm(n, l)) && (N = To(N, "onBeforeInput"), 0 < N.length && (V = new Ff("onBeforeInput", "beforeinput", null, l, V), P.push({ event: V, listeners: N }), V.data = ke));
      }
      _l(P, r);
    });
  }
  function Cu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function To(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ii(n, l), d != null && o.unshift(Cu(n, d, c)), d = ii(n, r), d != null && o.push(Cu(n, d, c))), n = n.return;
    }
    return o;
  }
  function $i(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function gv(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, N = S.stateNode;
      if (C !== null && C === o) break;
      S.tag === 5 && N !== null && (S = N, c ? (C = ii(l, d), C != null && h.unshift(Cu(l, C, S))) : c || (C = ii(l, d), C != null && h.push(Cu(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var Sv = /\r\n?/g, oy = /\u0000|\uFFFD/g;
  function Ev(n) {
    return (typeof n == "string" ? n : "" + n).replace(Sv, `
`).replace(oy, "");
  }
  function Xs(n, r, l) {
    if (r = Ev(r), Ev(n) !== r && l) throw Error(k(425));
  }
  function Yi() {
  }
  var Ro = null, Ol = null;
  function Ks(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var qs = typeof setTimeout == "function" ? setTimeout : void 0, ed = typeof clearTimeout == "function" ? clearTimeout : void 0, Cv = typeof Promise == "function" ? Promise : void 0, xu = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cv < "u" ? function(n) {
    return Cv.resolve(null).then(n).catch(Zs);
  } : qs;
  function Zs(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Tu(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Bi(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Bi(r);
  }
  function Va(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function xv(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ii = Math.random().toString(36).slice(2), Ba = "__reactFiber$" + Ii, wo = "__reactProps$" + Ii, hi = "__reactContainer$" + Ii, bo = "__reactEvents$" + Ii, Ru = "__reactListeners$" + Ii, sy = "__reactHandles$" + Ii;
  function Nl(n) {
    var r = n[Ba];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[hi] || l[Ba]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = xv(n); n !== null; ) {
          if (l = n[Ba]) return l;
          n = xv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ee(n) {
    return n = n[Ba] || n[hi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ka(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(k(33));
  }
  function Kt(n) {
    return n[wo] || null;
  }
  var st = [], ua = -1;
  function oa(n) {
    return { current: n };
  }
  function Vt(n) {
    0 > ua || (n.current = st[ua], st[ua] = null, ua--);
  }
  function Se(n, r) {
    ua++, st[ua] = n.current, n.current = r;
  }
  var lr = {}, an = oa(lr), Nn = oa(!1), _r = lr;
  function Or(n, r) {
    var l = n.type.contextTypes;
    if (!l) return lr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function En(n) {
    return n = n.childContextTypes, n != null;
  }
  function wu() {
    Vt(Nn), Vt(an);
  }
  function Tv(n, r, l) {
    if (an.current !== lr) throw Error(k(168));
    Se(an, r), Se(Nn, l);
  }
  function Do(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(k(108, mn(n) || "Unknown", c));
    return q({}, l, o);
  }
  function Hn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || lr, _r = an.current, Se(an, n), Se(Nn, Nn.current), !0;
  }
  function Js(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(k(169));
    l ? (n = Do(n, r, _r), o.__reactInternalMemoizedMergedChildContext = n, Vt(Nn), Vt(an), Se(an, n)) : Vt(Nn), Se(Nn, l);
  }
  var Pa = null, bu = !1, mi = !1;
  function ec(n) {
    Pa === null ? Pa = [n] : Pa.push(n);
  }
  function Qi(n) {
    bu = !0, ec(n);
  }
  function $a() {
    if (!mi && Pa !== null) {
      mi = !0;
      var n = 0, r = Dt;
      try {
        var l = Pa;
        for (Dt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Pa = null, bu = !1;
      } catch (c) {
        throw Pa !== null && (Pa = Pa.slice(n + 1)), Xt(si, $a), c;
      } finally {
        Dt = r, mi = !1;
      }
    }
    return null;
  }
  var Wi = [], Gi = 0, Xi = null, yi = 0, Cn = [], sa = 0, Yr = null, Ya = 1, Ia = "";
  function Ml(n, r) {
    Wi[Gi++] = yi, Wi[Gi++] = Xi, Xi = n, yi = r;
  }
  function Rv(n, r, l) {
    Cn[sa++] = Ya, Cn[sa++] = Ia, Cn[sa++] = Yr, Yr = n;
    var o = Ya;
    n = Ia;
    var c = 32 - ra(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - ra(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, Ya = 1 << 32 - ra(r) + c | l << c | o, Ia = d + n;
    } else Ya = 1 << d | l << c | o, Ia = n;
  }
  function tc(n) {
    n.return !== null && (Ml(n, 1), Rv(n, 1, 0));
  }
  function nc(n) {
    for (; n === Xi; ) Xi = Wi[--Gi], Wi[Gi] = null, yi = Wi[--Gi], Wi[Gi] = null;
    for (; n === Yr; ) Yr = Cn[--sa], Cn[sa] = null, Ia = Cn[--sa], Cn[sa] = null, Ya = Cn[--sa], Cn[sa] = null;
  }
  var Nr = null, Mr = null, It = !1, ca = null;
  function td(n, r) {
    var l = ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function wv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Nr = n, Mr = Va(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Nr = n, Mr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Yr !== null ? { id: Ya, overflow: Ia } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Nr = n, Mr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function nd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function rd(n) {
    if (It) {
      var r = Mr;
      if (r) {
        var l = r;
        if (!wv(n, r)) {
          if (nd(n)) throw Error(k(418));
          r = Va(l.nextSibling);
          var o = Nr;
          r && wv(n, r) ? td(o, l) : (n.flags = n.flags & -4097 | 2, It = !1, Nr = n);
        }
      } else {
        if (nd(n)) throw Error(k(418));
        n.flags = n.flags & -4097 | 2, It = !1, Nr = n;
      }
    }
  }
  function Mn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Nr = n;
  }
  function rc(n) {
    if (n !== Nr) return !1;
    if (!It) return Mn(n), It = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ks(n.type, n.memoizedProps)), r && (r = Mr)) {
      if (nd(n)) throw ko(), Error(k(418));
      for (; r; ) td(n, r), r = Va(r.nextSibling);
    }
    if (Mn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(k(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Mr = Va(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Mr = null;
      }
    } else Mr = Nr ? Va(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ko() {
    for (var n = Mr; n; ) n = Va(n.nextSibling);
  }
  function Ki() {
    Mr = Nr = null, It = !1;
  }
  function gi(n) {
    ca === null ? ca = [n] : ca.push(n);
  }
  var cy = it.ReactCurrentBatchConfig;
  function Ll(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(k(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(k(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(k(284));
      if (!l._owner) throw Error(k(290, n));
    }
    return n;
  }
  function ac(n, r) {
    throw n = Object.prototype.toString.call(r), Error(k(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function bv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zl(n) {
    function r(w, T) {
      if (n) {
        var _ = w.deletions;
        _ === null ? (w.deletions = [T], w.flags |= 16) : _.push(T);
      }
    }
    function l(w, T) {
      if (!n) return null;
      for (; T !== null; ) r(w, T), T = T.sibling;
      return null;
    }
    function o(w, T) {
      for (w = /* @__PURE__ */ new Map(); T !== null; ) T.key !== null ? w.set(T.key, T) : w.set(T.index, T), T = T.sibling;
      return w;
    }
    function c(w, T) {
      return w = al(w, T), w.index = 0, w.sibling = null, w;
    }
    function d(w, T, _) {
      return w.index = _, n ? (_ = w.alternate, _ !== null ? (_ = _.index, _ < T ? (w.flags |= 2, T) : _) : (w.flags |= 2, T)) : (w.flags |= 1048576, T);
    }
    function h(w) {
      return n && w.alternate === null && (w.flags |= 2), w;
    }
    function S(w, T, _, B) {
      return T === null || T.tag !== 6 ? (T = zd(_, w.mode, B), T.return = w, T) : (T = c(T, _), T.return = w, T);
    }
    function C(w, T, _, B) {
      var pe = _.type;
      return pe === $e ? V(w, T, _.props.children, B, _.key) : T !== null && (T.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === pt && bv(pe) === T.type) ? (B = c(T, _.props), B.ref = Ll(w, T, _), B.return = w, B) : (B = as(_.type, _.key, _.props, null, w.mode, B), B.ref = Ll(w, T, _), B.return = w, B);
    }
    function N(w, T, _, B) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== _.containerInfo || T.stateNode.implementation !== _.implementation ? (T = jc(_, w.mode, B), T.return = w, T) : (T = c(T, _.children || []), T.return = w, T);
    }
    function V(w, T, _, B, pe) {
      return T === null || T.tag !== 7 ? (T = Ri(_, w.mode, B, pe), T.return = w, T) : (T = c(T, _), T.return = w, T);
    }
    function P(w, T, _) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = zd("" + T, w.mode, _), T.return = w, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case He:
            return _ = as(T.type, T.key, T.props, null, w.mode, _), _.ref = Ll(w, null, T), _.return = w, _;
          case Tt:
            return T = jc(T, w.mode, _), T.return = w, T;
          case pt:
            var B = T._init;
            return P(w, B(T._payload), _);
        }
        if (At(T) || ye(T)) return T = Ri(T, w.mode, _, null), T.return = w, T;
        ac(w, T);
      }
      return null;
    }
    function F(w, T, _, B) {
      var pe = T !== null ? T.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return pe !== null ? null : S(w, T, "" + _, B);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case He:
            return _.key === pe ? C(w, T, _, B) : null;
          case Tt:
            return _.key === pe ? N(w, T, _, B) : null;
          case pt:
            return pe = _._init, F(
              w,
              T,
              pe(_._payload),
              B
            );
        }
        if (At(_) || ye(_)) return pe !== null ? null : V(w, T, _, B, null);
        ac(w, _);
      }
      return null;
    }
    function ue(w, T, _, B, pe) {
      if (typeof B == "string" && B !== "" || typeof B == "number") return w = w.get(_) || null, S(T, w, "" + B, pe);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case He:
            return w = w.get(B.key === null ? _ : B.key) || null, C(T, w, B, pe);
          case Tt:
            return w = w.get(B.key === null ? _ : B.key) || null, N(T, w, B, pe);
          case pt:
            var be = B._init;
            return ue(w, T, _, be(B._payload), pe);
        }
        if (At(B) || ye(B)) return w = w.get(_) || null, V(T, w, B, pe, null);
        ac(T, B);
      }
      return null;
    }
    function de(w, T, _, B) {
      for (var pe = null, be = null, ke = T, Ue = T = 0, Pn = null; ke !== null && Ue < _.length; Ue++) {
        ke.index > Ue ? (Pn = ke, ke = null) : Pn = ke.sibling;
        var St = F(w, ke, _[Ue], B);
        if (St === null) {
          ke === null && (ke = Pn);
          break;
        }
        n && ke && St.alternate === null && r(w, ke), T = d(St, T, Ue), be === null ? pe = St : be.sibling = St, be = St, ke = Pn;
      }
      if (Ue === _.length) return l(w, ke), It && Ml(w, Ue), pe;
      if (ke === null) {
        for (; Ue < _.length; Ue++) ke = P(w, _[Ue], B), ke !== null && (T = d(ke, T, Ue), be === null ? pe = ke : be.sibling = ke, be = ke);
        return It && Ml(w, Ue), pe;
      }
      for (ke = o(w, ke); Ue < _.length; Ue++) Pn = ue(ke, w, Ue, _[Ue], B), Pn !== null && (n && Pn.alternate !== null && ke.delete(Pn.key === null ? Ue : Pn.key), T = d(Pn, T, Ue), be === null ? pe = Pn : be.sibling = Pn, be = Pn);
      return n && ke.forEach(function(ul) {
        return r(w, ul);
      }), It && Ml(w, Ue), pe;
    }
    function he(w, T, _, B) {
      var pe = ye(_);
      if (typeof pe != "function") throw Error(k(150));
      if (_ = pe.call(_), _ == null) throw Error(k(151));
      for (var be = pe = null, ke = T, Ue = T = 0, Pn = null, St = _.next(); ke !== null && !St.done; Ue++, St = _.next()) {
        ke.index > Ue ? (Pn = ke, ke = null) : Pn = ke.sibling;
        var ul = F(w, ke, St.value, B);
        if (ul === null) {
          ke === null && (ke = Pn);
          break;
        }
        n && ke && ul.alternate === null && r(w, ke), T = d(ul, T, Ue), be === null ? pe = ul : be.sibling = ul, be = ul, ke = Pn;
      }
      if (St.done) return l(
        w,
        ke
      ), It && Ml(w, Ue), pe;
      if (ke === null) {
        for (; !St.done; Ue++, St = _.next()) St = P(w, St.value, B), St !== null && (T = d(St, T, Ue), be === null ? pe = St : be.sibling = St, be = St);
        return It && Ml(w, Ue), pe;
      }
      for (ke = o(w, ke); !St.done; Ue++, St = _.next()) St = ue(ke, w, Ue, St.value, B), St !== null && (n && St.alternate !== null && ke.delete(St.key === null ? Ue : St.key), T = d(St, T, Ue), be === null ? pe = St : be.sibling = St, be = St);
      return n && ke.forEach(function(oh) {
        return r(w, oh);
      }), It && Ml(w, Ue), pe;
    }
    function pn(w, T, _, B) {
      if (typeof _ == "object" && _ !== null && _.type === $e && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case He:
            e: {
              for (var pe = _.key, be = T; be !== null; ) {
                if (be.key === pe) {
                  if (pe = _.type, pe === $e) {
                    if (be.tag === 7) {
                      l(w, be.sibling), T = c(be, _.props.children), T.return = w, w = T;
                      break e;
                    }
                  } else if (be.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === pt && bv(pe) === be.type) {
                    l(w, be.sibling), T = c(be, _.props), T.ref = Ll(w, be, _), T.return = w, w = T;
                    break e;
                  }
                  l(w, be);
                  break;
                } else r(w, be);
                be = be.sibling;
              }
              _.type === $e ? (T = Ri(_.props.children, w.mode, B, _.key), T.return = w, w = T) : (B = as(_.type, _.key, _.props, null, w.mode, B), B.ref = Ll(w, T, _), B.return = w, w = B);
            }
            return h(w);
          case Tt:
            e: {
              for (be = _.key; T !== null; ) {
                if (T.key === be) if (T.tag === 4 && T.stateNode.containerInfo === _.containerInfo && T.stateNode.implementation === _.implementation) {
                  l(w, T.sibling), T = c(T, _.children || []), T.return = w, w = T;
                  break e;
                } else {
                  l(w, T);
                  break;
                }
                else r(w, T);
                T = T.sibling;
              }
              T = jc(_, w.mode, B), T.return = w, w = T;
            }
            return h(w);
          case pt:
            return be = _._init, pn(w, T, be(_._payload), B);
        }
        if (At(_)) return de(w, T, _, B);
        if (ye(_)) return he(w, T, _, B);
        ac(w, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" ? (_ = "" + _, T !== null && T.tag === 6 ? (l(w, T.sibling), T = c(T, _), T.return = w, w = T) : (l(w, T), T = zd(_, w.mode, B), T.return = w, w = T), h(w)) : l(w, T);
    }
    return pn;
  }
  var sn = zl(!0), re = zl(!1), Ir = oa(null), Lr = null, Du = null, ad = null;
  function id() {
    ad = Du = Lr = null;
  }
  function ld(n) {
    var r = Ir.current;
    Vt(Ir), n._currentValue = r;
  }
  function ud(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function qt(n, r) {
    Lr = n, ad = Du = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Tn = !0), n.firstContext = null);
  }
  function fa(n) {
    var r = n._currentValue;
    if (ad !== n) if (n = { context: n, memoizedValue: r, next: null }, Du === null) {
      if (Lr === null) throw Error(k(308));
      Du = n, Lr.dependencies = { lanes: 0, firstContext: n };
    } else Du = Du.next = n;
    return r;
  }
  var Ul = null;
  function od(n) {
    Ul === null ? Ul = [n] : Ul.push(n);
  }
  function sd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, od(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Qr(n, o);
  }
  function Qr(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Wr = !1;
  function cd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Dv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Si(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function qi(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, ct & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Qr(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, od(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Qr(n, l);
  }
  function ic(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ks(n, l);
    }
  }
  function kv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var h = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = h : d = d.next = h, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function _o(n, r, l, o) {
    var c = n.updateQueue;
    Wr = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S, N = C.next;
      C.next = null, h === null ? d = N : h.next = N, h = C;
      var V = n.alternate;
      V !== null && (V = V.updateQueue, S = V.lastBaseUpdate, S !== h && (S === null ? V.firstBaseUpdate = N : S.next = N, V.lastBaseUpdate = C));
    }
    if (d !== null) {
      var P = c.baseState;
      h = 0, V = N = C = null, S = d;
      do {
        var F = S.lane, ue = S.eventTime;
        if ((o & F) === F) {
          V !== null && (V = V.next = {
            eventTime: ue,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var de = n, he = S;
            switch (F = r, ue = l, he.tag) {
              case 1:
                if (de = he.payload, typeof de == "function") {
                  P = de.call(ue, P, F);
                  break e;
                }
                P = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = he.payload, F = typeof de == "function" ? de.call(ue, P, F) : de, F == null) break e;
                P = q({}, P, F);
                break e;
              case 2:
                Wr = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, F = c.effects, F === null ? c.effects = [S] : F.push(S));
        } else ue = { eventTime: ue, lane: F, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, V === null ? (N = V = ue, C = P) : V = V.next = ue, h |= F;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null) break;
          F = S, S = F.next, F.next = null, c.lastBaseUpdate = F, c.shared.pending = null;
        }
      } while (!0);
      if (V === null && (C = P), c.baseState = C, c.firstBaseUpdate = N, c.lastBaseUpdate = V, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ka |= h, n.lanes = h, n.memoizedState = P;
    }
  }
  function fd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(k(191, c));
        c.call(o);
      }
    }
  }
  var Oo = {}, Qa = oa(Oo), No = oa(Oo), Mo = oa(Oo);
  function Al(n) {
    if (n === Oo) throw Error(k(174));
    return n;
  }
  function dd(n, r) {
    switch (Se(Mo, r), Se(No, n), Se(Qa, Oo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : nn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = nn(r, n);
    }
    Vt(Qa), Se(Qa, r);
  }
  function jl() {
    Vt(Qa), Vt(No), Vt(Mo);
  }
  function _v(n) {
    Al(Mo.current);
    var r = Al(Qa.current), l = nn(r, n.type);
    r !== l && (Se(No, n), Se(Qa, l));
  }
  function lc(n) {
    No.current === n && (Vt(Qa), Vt(No));
  }
  var Zt = oa(0);
  function uc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Lo = [];
  function Ce() {
    for (var n = 0; n < Lo.length; n++) Lo[n]._workInProgressVersionPrimary = null;
    Lo.length = 0;
  }
  var Ke = it.ReactCurrentDispatcher, yt = it.ReactCurrentBatchConfig, Mt = 0, gt = null, xn = null, Vn = null, oc = !1, zo = !1, Fl = 0, A = 0;
  function ht() {
    throw Error(k(321));
  }
  function Ne(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Da(n[l], r[l])) return !1;
    return !0;
  }
  function Zi(n, r, l, o, c, d) {
    if (Mt = d, gt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ke.current = n === null || n.memoizedState === null ? Tc : Vo, n = l(o, c), zo) {
      d = 0;
      do {
        if (zo = !1, Fl = 0, 25 <= d) throw Error(k(301));
        d += 1, Vn = xn = null, r.updateQueue = null, Ke.current = Rc, n = l(o, c);
      } while (zo);
    }
    if (Ke.current = $l, r = xn !== null && xn.next !== null, Mt = 0, Vn = xn = gt = null, oc = !1, r) throw Error(k(300));
    return n;
  }
  function _a() {
    var n = Fl !== 0;
    return Fl = 0, n;
  }
  function ur() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Vn === null ? gt.memoizedState = Vn = n : Vn = Vn.next = n, Vn;
  }
  function cn() {
    if (xn === null) {
      var n = gt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = xn.next;
    var r = Vn === null ? gt.memoizedState : Vn.next;
    if (r !== null) Vn = r, xn = n;
    else {
      if (n === null) throw Error(k(310));
      xn = n, n = { memoizedState: xn.memoizedState, baseState: xn.baseState, baseQueue: xn.baseQueue, queue: xn.queue, next: null }, Vn === null ? gt.memoizedState = Vn = n : Vn = Vn.next = n;
    }
    return Vn;
  }
  function Ei(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ji(n) {
    var r = cn(), l = r.queue;
    if (l === null) throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = xn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var h = c.next;
        c.next = d.next, d.next = h;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = h = null, C = null, N = d;
      do {
        var V = N.lane;
        if ((Mt & V) === V) C !== null && (C = C.next = { lane: 0, action: N.action, hasEagerState: N.hasEagerState, eagerState: N.eagerState, next: null }), o = N.hasEagerState ? N.eagerState : n(o, N.action);
        else {
          var P = {
            lane: V,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          };
          C === null ? (S = C = P, h = o) : C = C.next = P, gt.lanes |= V, Ka |= V;
        }
        N = N.next;
      } while (N !== null && N !== d);
      C === null ? h = o : C.next = S, Da(o, r.memoizedState) || (Tn = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, gt.lanes |= d, Ka |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Hl(n) {
    var r = cn(), l = r.queue;
    if (l === null) throw Error(k(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      Da(d, r.memoizedState) || (Tn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function sc() {
  }
  function cc(n, r) {
    var l = gt, o = cn(), c = r(), d = !Da(o.memoizedState, c);
    if (d && (o.memoizedState = c, Tn = !0), o = o.queue, Uo(pc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Vn !== null && Vn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Vl(9, dc.bind(null, l, o, c, r), void 0, null), Ln === null) throw Error(k(349));
      Mt & 30 || fc(l, r, c);
    }
    return c;
  }
  function fc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = gt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, gt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function dc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, vc(r) && hc(n);
  }
  function pc(n, r, l) {
    return l(function() {
      vc(r) && hc(n);
    });
  }
  function vc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Da(n, l);
    } catch {
      return !0;
    }
  }
  function hc(n) {
    var r = Qr(n, 1);
    r !== null && mr(r, n, 1, -1);
  }
  function mc(n) {
    var r = ur();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ei, lastRenderedState: n }, r.queue = n, n = n.dispatch = Pl.bind(null, gt, n), [r.memoizedState, n];
  }
  function Vl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = gt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, gt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function yc() {
    return cn().memoizedState;
  }
  function ku(n, r, l, o) {
    var c = ur();
    gt.flags |= n, c.memoizedState = Vl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function _u(n, r, l, o) {
    var c = cn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (xn !== null) {
      var h = xn.memoizedState;
      if (d = h.destroy, o !== null && Ne(o, h.deps)) {
        c.memoizedState = Vl(r, l, d, o);
        return;
      }
    }
    gt.flags |= n, c.memoizedState = Vl(1 | r, l, d, o);
  }
  function gc(n, r) {
    return ku(8390656, 8, n, r);
  }
  function Uo(n, r) {
    return _u(2048, 8, n, r);
  }
  function Sc(n, r) {
    return _u(4, 2, n, r);
  }
  function Ao(n, r) {
    return _u(4, 4, n, r);
  }
  function Bl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Ec(n, r, l) {
    return l = l != null ? l.concat([n]) : null, _u(4, 4, Bl.bind(null, r, n), l);
  }
  function jo() {
  }
  function Cc(n, r) {
    var l = cn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ne(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function xc(n, r) {
    var l = cn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ne(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function pd(n, r, l) {
    return Mt & 21 ? (Da(l, r) || (l = Ds(), gt.lanes |= l, Ka |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Tn = !0), n.memoizedState = l);
  }
  function Fo(n, r) {
    var l = Dt;
    Dt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = yt.transition;
    yt.transition = {};
    try {
      n(!1), r();
    } finally {
      Dt = l, yt.transition = o;
    }
  }
  function vd() {
    return cn().memoizedState;
  }
  function Ho(n, r, l) {
    var o = qa(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, zr(n)) Ov(r, l);
    else if (l = sd(n, r, l, o), l !== null) {
      var c = bn();
      mr(l, n, o, c), jt(l, r, o);
    }
  }
  function Pl(n, r, l) {
    var o = qa(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (zr(n)) Ov(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var h = r.lastRenderedState, S = d(h, l);
        if (c.hasEagerState = !0, c.eagerState = S, Da(S, h)) {
          var C = r.interleaved;
          C === null ? (c.next = c, od(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = sd(n, r, c, o), l !== null && (c = bn(), mr(l, n, o, c), jt(l, r, o));
    }
  }
  function zr(n) {
    var r = n.alternate;
    return n === gt || r !== null && r === gt;
  }
  function Ov(n, r) {
    zo = oc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function jt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ks(n, l);
    }
  }
  var $l = { readContext: fa, useCallback: ht, useContext: ht, useEffect: ht, useImperativeHandle: ht, useInsertionEffect: ht, useLayoutEffect: ht, useMemo: ht, useReducer: ht, useRef: ht, useState: ht, useDebugValue: ht, useDeferredValue: ht, useTransition: ht, useMutableSource: ht, useSyncExternalStore: ht, useId: ht, unstable_isNewReconciler: !1 }, Tc = { readContext: fa, useCallback: function(n, r) {
    return ur().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: fa, useEffect: gc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ku(
      4194308,
      4,
      Bl.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return ku(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ku(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = ur();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = ur();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Ho.bind(null, gt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = ur();
    return n = { current: n }, r.memoizedState = n;
  }, useState: mc, useDebugValue: jo, useDeferredValue: function(n) {
    return ur().memoizedState = n;
  }, useTransition: function() {
    var n = mc(!1), r = n[0];
    return n = Fo.bind(null, n[1]), ur().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = gt, c = ur();
    if (It) {
      if (l === void 0) throw Error(k(407));
      l = l();
    } else {
      if (l = r(), Ln === null) throw Error(k(349));
      Mt & 30 || fc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, gc(pc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Vl(9, dc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = ur(), r = Ln.identifierPrefix;
    if (It) {
      var l = Ia, o = Ya;
      l = (o & ~(1 << 32 - ra(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Fl++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = A++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Vo = {
    readContext: fa,
    useCallback: Cc,
    useContext: fa,
    useEffect: Uo,
    useImperativeHandle: Ec,
    useInsertionEffect: Sc,
    useLayoutEffect: Ao,
    useMemo: xc,
    useReducer: Ji,
    useRef: yc,
    useState: function() {
      return Ji(Ei);
    },
    useDebugValue: jo,
    useDeferredValue: function(n) {
      var r = cn();
      return pd(r, xn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ji(Ei)[0], r = cn().memoizedState;
      return [n, r];
    },
    useMutableSource: sc,
    useSyncExternalStore: cc,
    useId: vd,
    unstable_isNewReconciler: !1
  }, Rc = { readContext: fa, useCallback: Cc, useContext: fa, useEffect: Uo, useImperativeHandle: Ec, useInsertionEffect: Sc, useLayoutEffect: Ao, useMemo: xc, useReducer: Hl, useRef: yc, useState: function() {
    return Hl(Ei);
  }, useDebugValue: jo, useDeferredValue: function(n) {
    var r = cn();
    return xn === null ? r.memoizedState = n : pd(r, xn.memoizedState, n);
  }, useTransition: function() {
    var n = Hl(Ei)[0], r = cn().memoizedState;
    return [n, r];
  }, useMutableSource: sc, useSyncExternalStore: cc, useId: vd, unstable_isNewReconciler: !1 };
  function Oa(n, r) {
    if (n && n.defaultProps) {
      r = q({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function hd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : q({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var wc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Qe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = bn(), c = qa(n), d = Si(o, c);
    d.payload = r, l != null && (d.callback = l), r = qi(n, d, c), r !== null && (mr(r, n, c, o), ic(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = bn(), c = qa(n), d = Si(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = qi(n, d, c), r !== null && (mr(r, n, c, o), ic(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = bn(), o = qa(n), c = Si(l, o);
    c.tag = 2, r != null && (c.callback = r), r = qi(n, c, o), r !== null && (mr(r, n, o, l), ic(r, n, o));
  } };
  function Nv(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !So(l, o) || !So(c, d) : !0;
  }
  function bc(n, r, l) {
    var o = !1, c = lr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = fa(d) : (c = En(r) ? _r : an.current, o = r.contextTypes, d = (o = o != null) ? Or(n, c) : lr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = wc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Mv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && wc.enqueueReplaceState(r, r.state, null);
  }
  function Bo(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, cd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = fa(d) : (d = En(r) ? _r : an.current, c.context = Or(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (hd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && wc.enqueueReplaceState(c, c.state, null), _o(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Yl(n, r) {
    try {
      var l = "", o = r;
      do
        l += ta(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function md(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function yd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Dc = typeof WeakMap == "function" ? WeakMap : Map;
  function Lv(n, r, l) {
    l = Si(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Uu || (Uu = !0, Wl = o), yd(n, r);
    }, l;
  }
  function gd(n, r, l) {
    l = Si(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        yd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      yd(n, r), typeof o != "function" && (nl === null ? nl = /* @__PURE__ */ new Set([this]) : nl.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function Sd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Dc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = yy.bind(null, n, r, l), r.then(n, n));
  }
  function zv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function el(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Si(-1, 1), r.tag = 2, qi(l, r, 1))), l.lanes |= 1), n);
  }
  var Po = it.ReactCurrentOwner, Tn = !1;
  function Gn(n, r, l, o) {
    r.child = n === null ? re(r, null, l, o) : sn(r, n.child, l, o);
  }
  function Ur(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return qt(r, c), o = Zi(n, r, l, o, d, c), l = _a(), n !== null && !Tn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pa(n, r, c)) : (It && l && tc(r), r.flags |= 1, Gn(n, r, o, c), r.child);
  }
  function Il(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Ld(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Ie(n, r, d, o, c)) : (n = as(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : So, l(h, o) && n.ref === r.ref) return pa(n, r, c);
    }
    return r.flags |= 1, n = al(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ie(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (So(d, o) && n.ref === r.ref) if (Tn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Tn = !0);
      else return r.lanes = n.lanes, pa(n, r, c);
    }
    return Uv(n, r, l, o, c);
  }
  function $o(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(Mu, Gr), Gr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Se(Mu, Gr), Gr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Se(Mu, Gr), Gr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Se(Mu, Gr), Gr |= o;
    return Gn(n, r, c, l), r.child;
  }
  function Ed(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Uv(n, r, l, o, c) {
    var d = En(l) ? _r : an.current;
    return d = Or(r, d), qt(r, c), l = Zi(n, r, l, o, d, c), o = _a(), n !== null && !Tn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pa(n, r, c)) : (It && o && tc(r), r.flags |= 1, Gn(n, r, l, c), r.child);
  }
  function Av(n, r, l, o, c) {
    if (En(l)) {
      var d = !0;
      Hn(r);
    } else d = !1;
    if (qt(r, c), r.stateNode === null) da(n, r), bc(r, l, o), Bo(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, N = l.contextType;
      typeof N == "object" && N !== null ? N = fa(N) : (N = En(l) ? _r : an.current, N = Or(r, N));
      var V = l.getDerivedStateFromProps, P = typeof V == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      P || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== N) && Mv(r, h, o, N), Wr = !1;
      var F = r.memoizedState;
      h.state = F, _o(r, o, h, c), C = r.memoizedState, S !== o || F !== C || Nn.current || Wr ? (typeof V == "function" && (hd(r, l, V, o), C = r.memoizedState), (S = Wr || Nv(r, l, S, o, F, C, N)) ? (P || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = N, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, Dv(n, r), S = r.memoizedProps, N = r.type === r.elementType ? S : Oa(r.type, S), h.props = N, P = r.pendingProps, F = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = fa(C) : (C = En(l) ? _r : an.current, C = Or(r, C));
      var ue = l.getDerivedStateFromProps;
      (V = typeof ue == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== P || F !== C) && Mv(r, h, o, C), Wr = !1, F = r.memoizedState, h.state = F, _o(r, o, h, c);
      var de = r.memoizedState;
      S !== P || F !== de || Nn.current || Wr ? (typeof ue == "function" && (hd(r, l, ue, o), de = r.memoizedState), (N = Wr || Nv(r, l, N, o, F, de, C) || !1) ? (V || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, de, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, de, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = de), h.props = o, h.state = de, h.context = C, o = N) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Yo(n, r, l, o, d, c);
  }
  function Yo(n, r, l, o, c, d) {
    Ed(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h) return c && Js(r, l, !1), pa(n, r, d);
    o = r.stateNode, Po.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = sn(r, n.child, null, d), r.child = sn(r, null, S, d)) : Gn(n, r, S, d), r.memoizedState = o.state, c && Js(r, l, !0), r.child;
  }
  function Ou(n) {
    var r = n.stateNode;
    r.pendingContext ? Tv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Tv(n, r.context, !1), dd(n, r.containerInfo);
  }
  function jv(n, r, l, o, c) {
    return Ki(), gi(c), r.flags |= 256, Gn(n, r, l, o), r.child;
  }
  var kc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function _c(n, r, l) {
    var o = r.pendingProps, c = Zt.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Se(Zt, c & 1), n === null)
      return rd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = il(h, o, 0, null), n = Ri(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Cd(l), r.memoizedState = kc, n) : xd(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null)) return Fv(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = al(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = al(S, d) : (d = Ri(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Cd(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = kc, o;
    }
    return d = n.child, n = d.sibling, o = al(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function xd(n, r) {
    return r = il({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Io(n, r, l, o) {
    return o !== null && gi(o), sn(r, n.child, null, l), n = xd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Fv(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = md(Error(k(422))), Io(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = il({ mode: "visible", children: o.children }, c, 0, null), d = Ri(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && sn(r, n.child, null, h), r.child.memoizedState = Cd(h), r.memoizedState = kc, d);
    if (!(r.mode & 1)) return Io(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var S = o.dgst;
      return o = S, d = Error(k(419)), o = md(d, o, void 0), Io(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, Tn || S) {
      if (o = Ln, o !== null) {
        switch (h & -h) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Qr(n, c), mr(o, n, c, -1));
      }
      return Md(), o = md(Error(k(421))), Io(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = gy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Mr = Va(c.nextSibling), Nr = r, It = !0, ca = null, n !== null && (Cn[sa++] = Ya, Cn[sa++] = Ia, Cn[sa++] = Yr, Ya = n.id, Ia = n.overflow, Yr = r), r = xd(r, o.children), r.flags |= 4096, r);
  }
  function Td(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), ud(n.return, r, l);
  }
  function pr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Wa(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Gn(n, r, o.children, l), o = Zt.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Td(n, l, r);
        else if (n.tag === 19) Td(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (Se(Zt, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && uc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), pr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && uc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        pr(r, !0, l, null, d);
        break;
      case "together":
        pr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function da(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function pa(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ka |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(k(153));
    if (r.child !== null) {
      for (n = r.child, l = al(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = al(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Qo(n, r, l) {
    switch (r.tag) {
      case 3:
        Ou(r), Ki();
        break;
      case 5:
        _v(r);
        break;
      case 1:
        En(r.type) && Hn(r);
        break;
      case 4:
        dd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Se(Ir, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Se(Zt, Zt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? _c(n, r, l) : (Se(Zt, Zt.current & 1), n = pa(n, r, l), n !== null ? n.sibling : null);
        Se(Zt, Zt.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Wa(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Se(Zt, Zt.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, $o(n, r, l);
    }
    return pa(n, r, l);
  }
  var va, Rn, Hv, Vv;
  va = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Rn = function() {
  }, Hv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Al(Qa.current);
      var d = null;
      switch (l) {
        case "input":
          c = bt(n, c), o = bt(n, o), d = [];
          break;
        case "select":
          c = q({}, c, { value: void 0 }), o = q({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = _t(n, c), o = _t(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Yi);
      }
      Bt(l, o);
      var h;
      l = null;
      for (N in c) if (!o.hasOwnProperty(N) && c.hasOwnProperty(N) && c[N] != null) if (N === "style") {
        var S = c[N];
        for (h in S) S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
      } else N !== "dangerouslySetInnerHTML" && N !== "children" && N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning" && N !== "autoFocus" && (De.hasOwnProperty(N) ? d || (d = []) : (d = d || []).push(N, null));
      for (N in o) {
        var C = o[N];
        if (S = c != null ? c[N] : void 0, o.hasOwnProperty(N) && C !== S && (C != null || S != null)) if (N === "style") if (S) {
          for (h in S) !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
          for (h in C) C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
        } else l || (d || (d = []), d.push(
          N,
          l
        )), l = C;
        else N === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(N, C)) : N === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(N, "" + C) : N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning" && (De.hasOwnProperty(N) ? (C != null && N === "onScroll" && Rt("scroll", n), d || S === C || (d = [])) : (d = d || []).push(N, C));
      }
      l && (d = d || []).push("style", l);
      var N = d;
      (r.updateQueue = N) && (r.flags |= 4);
    }
  }, Vv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Wo(n, r) {
    if (!It) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Bn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Bv(n, r, l) {
    var o = r.pendingProps;
    switch (nc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Bn(r), null;
      case 1:
        return En(r.type) && wu(), Bn(r), null;
      case 3:
        return o = r.stateNode, jl(), Vt(Nn), Vt(an), Ce(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (rc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ca !== null && (Gl(ca), ca = null))), Rn(n, r), Bn(r), null;
      case 5:
        lc(r);
        var c = Al(Mo.current);
        if (l = r.type, n !== null && r.stateNode != null) Hv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(k(166));
            return Bn(r), null;
          }
          if (n = Al(Qa.current), rc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ba] = r, o[wo] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Rt("cancel", o), Rt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Rt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < xo.length; c++) Rt(xo[c], o);
                break;
              case "source":
                Rt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Rt(
                  "error",
                  o
                ), Rt("load", o);
                break;
              case "details":
                Rt("toggle", o);
                break;
              case "input":
                on(o, d), Rt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Rt("invalid", o);
                break;
              case "textarea":
                Ot(o, d), Rt("invalid", o);
            }
            Bt(l, d), c = null;
            for (var h in d) if (d.hasOwnProperty(h)) {
              var S = d[h];
              h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && Xs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && Xs(
                o.textContent,
                S,
                n
              ), c = ["children", "" + S]) : De.hasOwnProperty(h) && S != null && h === "onScroll" && Rt("scroll", o);
            }
            switch (l) {
              case "input":
                yn(o), ja(o, d, !0);
                break;
              case "textarea":
                yn(o), Nt(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Yi);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = tn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[Ba] = r, n[wo] = o, va(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = _n(l, o), l) {
                case "dialog":
                  Rt("cancel", n), Rt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Rt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < xo.length; c++) Rt(xo[c], n);
                  c = o;
                  break;
                case "source":
                  Rt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Rt(
                    "error",
                    n
                  ), Rt("load", n), c = o;
                  break;
                case "details":
                  Rt("toggle", n), c = o;
                  break;
                case "input":
                  on(n, o), c = bt(n, o), Rt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = q({}, o, { value: void 0 }), Rt("invalid", n);
                  break;
                case "textarea":
                  Ot(n, o), c = _t(n, o), Rt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Bt(l, c), S = c;
              for (d in S) if (S.hasOwnProperty(d)) {
                var C = S[d];
                d === "style" ? lt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && gn(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && Q(n, C) : typeof C == "number" && Q(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (De.hasOwnProperty(d) ? C != null && d === "onScroll" && Rt("scroll", n) : C != null && Me(n, d, C, h));
              }
              switch (l) {
                case "input":
                  yn(n), ja(n, o, !1);
                  break;
                case "textarea":
                  yn(n), Nt(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + kn(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? xt(n, !!o.multiple, d, !1) : o.defaultValue != null && xt(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Yi);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Bn(r), null;
      case 6:
        if (n && r.stateNode != null) Vv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(k(166));
          if (l = Al(Mo.current), Al(Qa.current), rc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ba] = r, (d = o.nodeValue !== l) && (n = Nr, n !== null)) switch (n.tag) {
              case 3:
                Xs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Xs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ba] = r, r.stateNode = o;
        }
        return Bn(r), null;
      case 13:
        if (Vt(Zt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (It && Mr !== null && r.mode & 1 && !(r.flags & 128)) ko(), Ki(), r.flags |= 98560, d = !1;
          else if (d = rc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(k(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(k(317));
              d[Ba] = r;
            } else Ki(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Bn(r), d = !1;
          } else ca !== null && (Gl(ca), ca = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Zt.current & 1 ? dn === 0 && (dn = 3) : Md())), r.updateQueue !== null && (r.flags |= 4), Bn(r), null);
      case 4:
        return jl(), Rn(n, r), n === null && Eu(r.stateNode.containerInfo), Bn(r), null;
      case 10:
        return ld(r.type._context), Bn(r), null;
      case 17:
        return En(r.type) && wu(), Bn(r), null;
      case 19:
        if (Vt(Zt), d = r.memoizedState, d === null) return Bn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null) if (o) Wo(d, !1);
        else {
          if (dn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (h = uc(n), h !== null) {
              for (r.flags |= 128, Wo(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Se(Zt, Zt.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && We() > zu && (r.flags |= 128, o = !0, Wo(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = uc(h), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Wo(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !It) return Bn(r), null;
          } else 2 * We() - d.renderingStartTime > zu && l !== 1073741824 && (r.flags |= 128, o = !0, Wo(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = We(), r.sibling = null, l = Zt.current, Se(Zt, o ? l & 1 | 2 : l & 1), r) : (Bn(r), null);
      case 22:
      case 23:
        return Nd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Gr & 1073741824 && (Bn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Bn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, r.tag));
  }
  function Oc(n, r) {
    switch (nc(r), r.tag) {
      case 1:
        return En(r.type) && wu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return jl(), Vt(Nn), Vt(an), Ce(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return lc(r), null;
      case 13:
        if (Vt(Zt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(k(340));
          Ki();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Vt(Zt), null;
      case 4:
        return jl(), null;
      case 10:
        return ld(r.type._context), null;
      case 22:
      case 23:
        return Nd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Go = !1, or = !1, fy = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
  function Nu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Qt(n, r, o);
    }
    else l.current = null;
  }
  function Nc(n, r, l) {
    try {
      l();
    } catch (o) {
      Qt(n, r, o);
    }
  }
  var Pv = !1;
  function $v(n, r) {
    if (Ro = Tl, n = Eo(), Bs(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var h = 0, S = -1, C = -1, N = 0, V = 0, P = n, F = null;
          t: for (; ; ) {
            for (var ue; P !== l || c !== 0 && P.nodeType !== 3 || (S = h + c), P !== d || o !== 0 && P.nodeType !== 3 || (C = h + o), P.nodeType === 3 && (h += P.nodeValue.length), (ue = P.firstChild) !== null; )
              F = P, P = ue;
            for (; ; ) {
              if (P === n) break t;
              if (F === l && ++N === c && (S = h), F === d && ++V === o && (C = h), (ue = P.nextSibling) !== null) break;
              P = F, F = P.parentNode;
            }
            P = ue;
          }
          l = S === -1 || C === -1 ? null : { start: S, end: C };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ol = { focusedElem: n, selectionRange: l }, Tl = !1, ce = r; ce !== null; ) if (r = ce, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ce = n;
    else for (; ce !== null; ) {
      r = ce;
      try {
        var de = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (de !== null) {
              var he = de.memoizedProps, pn = de.memoizedState, w = r.stateNode, T = w.getSnapshotBeforeUpdate(r.elementType === r.type ? he : Oa(r.type, he), pn);
              w.__reactInternalSnapshotBeforeUpdate = T;
            }
            break;
          case 3:
            var _ = r.stateNode.containerInfo;
            _.nodeType === 1 ? _.textContent = "" : _.nodeType === 9 && _.documentElement && _.removeChild(_.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(k(163));
        }
      } catch (B) {
        Qt(r, r.return, B);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ce = n;
        break;
      }
      ce = r.return;
    }
    return de = Pv, Pv = !1, de;
  }
  function Xo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Nc(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ko(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Rd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Mc(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Mc(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ba], delete r[wo], delete r[bo], delete r[Ru], delete r[sy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function qo(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ci(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || qo(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ga(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Yi));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ga(n, r, l), n = n.sibling; n !== null; ) Ga(n, r, l), n = n.sibling;
  }
  function Xa(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Xa(n, r, l), n = n.sibling; n !== null; ) Xa(n, r, l), n = n.sibling;
  }
  var fn = null, vr = !1;
  function hr(n, r, l) {
    for (l = l.child; l !== null; ) Yv(n, r, l), l = l.sibling;
  }
  function Yv(n, r, l) {
    if (wa && typeof wa.onCommitFiberUnmount == "function") try {
      wa.onCommitFiberUnmount(oo, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        or || Nu(l, r);
      case 6:
        var o = fn, c = vr;
        fn = null, hr(n, r, l), fn = o, vr = c, fn !== null && (vr ? (n = fn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : fn.removeChild(l.stateNode));
        break;
      case 18:
        fn !== null && (vr ? (n = fn, l = l.stateNode, n.nodeType === 8 ? Tu(n.parentNode, l) : n.nodeType === 1 && Tu(n, l), Bi(n)) : Tu(fn, l.stateNode));
        break;
      case 4:
        o = fn, c = vr, fn = l.stateNode.containerInfo, vr = !0, hr(n, r, l), fn = o, vr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!or && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && Nc(l, r, h), c = c.next;
          } while (c !== o);
        }
        hr(n, r, l);
        break;
      case 1:
        if (!or && (Nu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (S) {
          Qt(l, r, S);
        }
        hr(n, r, l);
        break;
      case 21:
        hr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (or = (o = or) || l.memoizedState !== null, hr(n, r, l), or = o) : hr(n, r, l);
        break;
      default:
        hr(n, r, l);
    }
  }
  function Iv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new fy()), r.forEach(function(o) {
        var c = eh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Na(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, h = r, S = h;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              fn = S.stateNode, vr = !1;
              break e;
            case 3:
              fn = S.stateNode.containerInfo, vr = !0;
              break e;
            case 4:
              fn = S.stateNode.containerInfo, vr = !0;
              break e;
          }
          S = S.return;
        }
        if (fn === null) throw Error(k(160));
        Yv(d, h, c), fn = null, vr = !1;
        var C = c.alternate;
        C !== null && (C.return = null), c.return = null;
      } catch (N) {
        Qt(c, r, N);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) wd(r, n), r = r.sibling;
  }
  function wd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Na(r, n), Ar(n), o & 4) {
          try {
            Xo(3, n, n.return), Ko(3, n);
          } catch (he) {
            Qt(n, n.return, he);
          }
          try {
            Xo(5, n, n.return);
          } catch (he) {
            Qt(n, n.return, he);
          }
        }
        break;
      case 1:
        Na(r, n), Ar(n), o & 512 && l !== null && Nu(l, l.return);
        break;
      case 5:
        if (Na(r, n), Ar(n), o & 512 && l !== null && Nu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Q(c, "");
          } catch (he) {
            Qt(n, n.return, he);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null) try {
            S === "input" && d.type === "radio" && d.name != null && An(c, d), _n(S, h);
            var N = _n(S, d);
            for (h = 0; h < C.length; h += 2) {
              var V = C[h], P = C[h + 1];
              V === "style" ? lt(c, P) : V === "dangerouslySetInnerHTML" ? gn(c, P) : V === "children" ? Q(c, P) : Me(c, V, P, N);
            }
            switch (S) {
              case "input":
                Ta(c, d);
                break;
              case "textarea":
                jn(c, d);
                break;
              case "select":
                var F = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ue = d.value;
                ue != null ? xt(c, !!d.multiple, ue, !1) : F !== !!d.multiple && (d.defaultValue != null ? xt(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : xt(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[wo] = d;
          } catch (he) {
            Qt(n, n.return, he);
          }
        }
        break;
      case 6:
        if (Na(r, n), Ar(n), o & 4) {
          if (n.stateNode === null) throw Error(k(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (he) {
            Qt(n, n.return, he);
          }
        }
        break;
      case 3:
        if (Na(r, n), Ar(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Bi(r.containerInfo);
        } catch (he) {
          Qt(n, n.return, he);
        }
        break;
      case 4:
        Na(r, n), Ar(n);
        break;
      case 13:
        Na(r, n), Ar(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (kd = We())), o & 4 && Iv(n);
        break;
      case 22:
        if (V = l !== null && l.memoizedState !== null, n.mode & 1 ? (or = (N = or) || V, Na(r, n), or = N) : Na(r, n), Ar(n), o & 8192) {
          if (N = n.memoizedState !== null, (n.stateNode.isHidden = N) && !V && n.mode & 1) for (ce = n, V = n.child; V !== null; ) {
            for (P = ce = V; ce !== null; ) {
              switch (F = ce, ue = F.child, F.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xo(4, F, F.return);
                  break;
                case 1:
                  Nu(F, F.return);
                  var de = F.stateNode;
                  if (typeof de.componentWillUnmount == "function") {
                    o = F, l = F.return;
                    try {
                      r = o, de.props = r.memoizedProps, de.state = r.memoizedState, de.componentWillUnmount();
                    } catch (he) {
                      Qt(o, l, he);
                    }
                  }
                  break;
                case 5:
                  Nu(F, F.return);
                  break;
                case 22:
                  if (F.memoizedState !== null) {
                    Zo(P);
                    continue;
                  }
              }
              ue !== null ? (ue.return = F, ce = ue) : Zo(P);
            }
            V = V.sibling;
          }
          e: for (V = null, P = n; ; ) {
            if (P.tag === 5) {
              if (V === null) {
                V = P;
                try {
                  c = P.stateNode, N ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = P.stateNode, C = P.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Ge("display", h));
                } catch (he) {
                  Qt(n, n.return, he);
                }
              }
            } else if (P.tag === 6) {
              if (V === null) try {
                P.stateNode.nodeValue = N ? "" : P.memoizedProps;
              } catch (he) {
                Qt(n, n.return, he);
              }
            } else if ((P.tag !== 22 && P.tag !== 23 || P.memoizedState === null || P === n) && P.child !== null) {
              P.child.return = P, P = P.child;
              continue;
            }
            if (P === n) break e;
            for (; P.sibling === null; ) {
              if (P.return === null || P.return === n) break e;
              V === P && (V = null), P = P.return;
            }
            V === P && (V = null), P.sibling.return = P.return, P = P.sibling;
          }
        }
        break;
      case 19:
        Na(r, n), Ar(n), o & 4 && Iv(n);
        break;
      case 21:
        break;
      default:
        Na(
          r,
          n
        ), Ar(n);
    }
  }
  function Ar(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (qo(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(k(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Q(c, ""), o.flags &= -33);
            var d = Ci(n);
            Xa(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = Ci(n);
            Ga(n, S, h);
            break;
          default:
            throw Error(k(161));
        }
      } catch (C) {
        Qt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function dy(n, r, l) {
    ce = n, bd(n);
  }
  function bd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ce !== null; ) {
      var c = ce, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || Go;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || or;
          S = Go;
          var N = or;
          if (Go = h, (or = C) && !N) for (ce = c; ce !== null; ) h = ce, C = h.child, h.tag === 22 && h.memoizedState !== null ? Dd(c) : C !== null ? (C.return = h, ce = C) : Dd(c);
          for (; d !== null; ) ce = d, bd(d), d = d.sibling;
          ce = c, Go = S, or = N;
        }
        Qv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ce = d) : Qv(n);
    }
  }
  function Qv(n) {
    for (; ce !== null; ) {
      var r = ce;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              or || Ko(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !or) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : Oa(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && fd(r, d, o);
              break;
            case 3:
              var h = r.updateQueue;
              if (h !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                fd(r, h, l);
              }
              break;
            case 5:
              var S = r.stateNode;
              if (l === null && r.flags & 4) {
                l = S;
                var C = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    C.autoFocus && l.focus();
                    break;
                  case "img":
                    C.src && (l.src = C.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var N = r.alternate;
                if (N !== null) {
                  var V = N.memoizedState;
                  if (V !== null) {
                    var P = V.dehydrated;
                    P !== null && Bi(P);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
          or || r.flags & 512 && Rd(r);
        } catch (F) {
          Qt(r, r.return, F);
        }
      }
      if (r === n) {
        ce = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ce = l;
        break;
      }
      ce = r.return;
    }
  }
  function Zo(n) {
    for (; ce !== null; ) {
      var r = ce;
      if (r === n) {
        ce = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ce = l;
        break;
      }
      ce = r.return;
    }
  }
  function Dd(n) {
    for (; ce !== null; ) {
      var r = ce;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ko(4, r);
            } catch (C) {
              Qt(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                Qt(r, c, C);
              }
            }
            var d = r.return;
            try {
              Rd(r);
            } catch (C) {
              Qt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              Rd(r);
            } catch (C) {
              Qt(r, h, C);
            }
        }
      } catch (C) {
        Qt(r, r.return, C);
      }
      if (r === n) {
        ce = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, ce = S;
        break;
      }
      ce = r.return;
    }
  }
  var py = Math.ceil, tl = it.ReactCurrentDispatcher, Ql = it.ReactCurrentOwner, Xn = it.ReactCurrentBatchConfig, ct = 0, Ln = null, wn = null, Kn = 0, Gr = 0, Mu = oa(0), dn = 0, Jo = null, Ka = 0, Lu = 0, Lc = 0, es = null, jr = null, kd = 0, zu = 1 / 0, Xr = null, Uu = !1, Wl = null, nl = null, zc = !1, xi = null, ts = 0, rl = 0, Au = null, ns = -1, sr = 0;
  function bn() {
    return ct & 6 ? We() : ns !== -1 ? ns : ns = We();
  }
  function qa(n) {
    return n.mode & 1 ? ct & 2 && Kn !== 0 ? Kn & -Kn : cy.transition !== null ? (sr === 0 && (sr = Ds()), sr) : (n = Dt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ns(n.type)), n) : 1;
  }
  function mr(n, r, l, o) {
    if (50 < rl) throw rl = 0, Au = null, Error(k(185));
    Cl(n, l, o), (!(ct & 2) || n !== Ln) && (n === Ln && (!(ct & 2) && (Lu |= l), dn === 4 && Ma(n, Kn)), Fr(n, o), l === 1 && ct === 0 && !(r.mode & 1) && (zu = We() + 500, bu && $a()));
  }
  function Fr(n, r) {
    var l = n.callbackNode;
    Rf(n, r);
    var o = El(n, n === Ln ? Kn : 0);
    if (o === 0) l !== null && fr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && fr(l), r === 1) n.tag === 0 ? Qi(_d.bind(null, n)) : ec(_d.bind(null, n)), xu(function() {
        !(ct & 6) && $a();
      }), l = null;
      else {
        switch (Df(o)) {
          case 1:
            l = si;
            break;
          case 4:
            l = lo;
            break;
          case 16:
            l = uo;
            break;
          case 536870912:
            l = xf;
            break;
          default:
            l = uo;
        }
        l = nh(l, Uc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Uc(n, r) {
    if (ns = -1, sr = 0, ct & 6) throw Error(k(327));
    var l = n.callbackNode;
    if (ju() && n.callbackNode !== l) return null;
    var o = El(n, n === Ln ? Kn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Ac(n, o);
    else {
      r = o;
      var c = ct;
      ct |= 2;
      var d = Gv();
      (Ln !== n || Kn !== r) && (Xr = null, zu = We() + 500, Ti(n, r));
      do
        try {
          Xv();
          break;
        } catch (S) {
          Wv(n, S);
        }
      while (!0);
      id(), tl.current = d, ct = c, wn !== null ? r = 0 : (Ln = null, Kn = 0, r = dn);
    }
    if (r !== 0) {
      if (r === 2 && (c = wf(n), c !== 0 && (o = c, r = rs(n, c))), r === 1) throw l = Jo, Ti(n, 0), Ma(n, o), Fr(n, We()), l;
      if (r === 6) Ma(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !vy(c) && (r = Ac(n, o), r === 2 && (d = wf(n), d !== 0 && (o = d, r = rs(n, d))), r === 1)) throw l = Jo, Ti(n, 0), Ma(n, o), Fr(n, We()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            Kl(n, jr, Xr);
            break;
          case 3:
            if (Ma(n, o), (o & 130023424) === o && (r = kd + 500 - We(), 10 < r)) {
              if (El(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                bn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = qs(Kl.bind(null, n, jr, Xr), r);
              break;
            }
            Kl(n, jr, Xr);
            break;
          case 4:
            if (Ma(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - ra(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = We() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * py(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = qs(Kl.bind(null, n, jr, Xr), o);
              break;
            }
            Kl(n, jr, Xr);
            break;
          case 5:
            Kl(n, jr, Xr);
            break;
          default:
            throw Error(k(329));
        }
      }
    }
    return Fr(n, We()), n.callbackNode === l ? Uc.bind(null, n) : null;
  }
  function rs(n, r) {
    var l = es;
    return n.current.memoizedState.isDehydrated && (Ti(n, r).flags |= 256), n = Ac(n, r), n !== 2 && (r = jr, jr = l, r !== null && Gl(r)), n;
  }
  function Gl(n) {
    jr === null ? jr = n : jr.push.apply(jr, n);
  }
  function vy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Da(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ma(n, r) {
    for (r &= ~Lc, r &= ~Lu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - ra(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function _d(n) {
    if (ct & 6) throw Error(k(327));
    ju();
    var r = El(n, 0);
    if (!(r & 1)) return Fr(n, We()), null;
    var l = Ac(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = wf(n);
      o !== 0 && (r = o, l = rs(n, o));
    }
    if (l === 1) throw l = Jo, Ti(n, 0), Ma(n, r), Fr(n, We()), l;
    if (l === 6) throw Error(k(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Kl(n, jr, Xr), Fr(n, We()), null;
  }
  function Od(n, r) {
    var l = ct;
    ct |= 1;
    try {
      return n(r);
    } finally {
      ct = l, ct === 0 && (zu = We() + 500, bu && $a());
    }
  }
  function Xl(n) {
    xi !== null && xi.tag === 0 && !(ct & 6) && ju();
    var r = ct;
    ct |= 1;
    var l = Xn.transition, o = Dt;
    try {
      if (Xn.transition = null, Dt = 1, n) return n();
    } finally {
      Dt = o, Xn.transition = l, ct = r, !(ct & 6) && $a();
    }
  }
  function Nd() {
    Gr = Mu.current, Vt(Mu);
  }
  function Ti(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, ed(l)), wn !== null) for (l = wn.return; l !== null; ) {
      var o = l;
      switch (nc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && wu();
          break;
        case 3:
          jl(), Vt(Nn), Vt(an), Ce();
          break;
        case 5:
          lc(o);
          break;
        case 4:
          jl();
          break;
        case 13:
          Vt(Zt);
          break;
        case 19:
          Vt(Zt);
          break;
        case 10:
          ld(o.type._context);
          break;
        case 22:
        case 23:
          Nd();
      }
      l = l.return;
    }
    if (Ln = n, wn = n = al(n.current, null), Kn = Gr = r, dn = 0, Jo = null, Lc = Lu = Ka = 0, jr = es = null, Ul !== null) {
      for (r = 0; r < Ul.length; r++) if (l = Ul[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var h = d.next;
          d.next = c, o.next = h;
        }
        l.pending = o;
      }
      Ul = null;
    }
    return n;
  }
  function Wv(n, r) {
    do {
      var l = wn;
      try {
        if (id(), Ke.current = $l, oc) {
          for (var o = gt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          oc = !1;
        }
        if (Mt = 0, Vn = xn = gt = null, zo = !1, Fl = 0, Ql.current = null, l === null || l.return === null) {
          dn = 1, Jo = r, wn = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = Kn, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var N = C, V = S, P = V.tag;
            if (!(V.mode & 1) && (P === 0 || P === 11 || P === 15)) {
              var F = V.alternate;
              F ? (V.updateQueue = F.updateQueue, V.memoizedState = F.memoizedState, V.lanes = F.lanes) : (V.updateQueue = null, V.memoizedState = null);
            }
            var ue = zv(h);
            if (ue !== null) {
              ue.flags &= -257, el(ue, h, S, d, r), ue.mode & 1 && Sd(d, N, r), r = ue, C = N;
              var de = r.updateQueue;
              if (de === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(C), r.updateQueue = he;
              } else de.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                Sd(d, N, r), Md();
                break e;
              }
              C = Error(k(426));
            }
          } else if (It && S.mode & 1) {
            var pn = zv(h);
            if (pn !== null) {
              !(pn.flags & 65536) && (pn.flags |= 256), el(pn, h, S, d, r), gi(Yl(C, S));
              break e;
            }
          }
          d = C = Yl(C, S), dn !== 4 && (dn = 2), es === null ? es = [d] : es.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var w = Lv(d, C, r);
                kv(d, w);
                break e;
              case 1:
                S = C;
                var T = d.type, _ = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (nl === null || !nl.has(_)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var B = gd(d, S, r);
                  kv(d, B);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        qv(l);
      } catch (pe) {
        r = pe, wn === l && l !== null && (wn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Gv() {
    var n = tl.current;
    return tl.current = $l, n === null ? $l : n;
  }
  function Md() {
    (dn === 0 || dn === 3 || dn === 2) && (dn = 4), Ln === null || !(Ka & 268435455) && !(Lu & 268435455) || Ma(Ln, Kn);
  }
  function Ac(n, r) {
    var l = ct;
    ct |= 2;
    var o = Gv();
    (Ln !== n || Kn !== r) && (Xr = null, Ti(n, r));
    do
      try {
        hy();
        break;
      } catch (c) {
        Wv(n, c);
      }
    while (!0);
    if (id(), ct = l, tl.current = o, wn !== null) throw Error(k(261));
    return Ln = null, Kn = 0, dn;
  }
  function hy() {
    for (; wn !== null; ) Kv(wn);
  }
  function Xv() {
    for (; wn !== null && !ui(); ) Kv(wn);
  }
  function Kv(n) {
    var r = th(n.alternate, n, Gr);
    n.memoizedProps = n.pendingProps, r === null ? qv(n) : wn = r, Ql.current = null;
  }
  function qv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Oc(l, r), l !== null) {
          l.flags &= 32767, wn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          dn = 6, wn = null;
          return;
        }
      } else if (l = Bv(l, r, Gr), l !== null) {
        wn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        wn = r;
        return;
      }
      wn = r = n;
    } while (r !== null);
    dn === 0 && (dn = 5);
  }
  function Kl(n, r, l) {
    var o = Dt, c = Xn.transition;
    try {
      Xn.transition = null, Dt = 1, my(n, r, l, o);
    } finally {
      Xn.transition = c, Dt = o;
    }
    return null;
  }
  function my(n, r, l, o) {
    do
      ju();
    while (xi !== null);
    if (ct & 6) throw Error(k(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(k(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Im(n, d), n === Ln && (wn = Ln = null, Kn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || zc || (zc = !0, nh(uo, function() {
      return ju(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Xn.transition, Xn.transition = null;
      var h = Dt;
      Dt = 1;
      var S = ct;
      ct |= 4, Ql.current = null, $v(n, l), wd(l, n), gu(Ol), Tl = !!Ro, Ol = Ro = null, n.current = l, dy(l), oi(), ct = S, Dt = h, Xn.transition = d;
    } else n.current = l;
    if (zc && (zc = !1, xi = n, ts = c), d = n.pendingLanes, d === 0 && (nl = null), Yp(l.stateNode), Fr(n, We()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Uu) throw Uu = !1, n = Wl, Wl = null, n;
    return ts & 1 && n.tag !== 0 && ju(), d = n.pendingLanes, d & 1 ? n === Au ? rl++ : (rl = 0, Au = n) : rl = 0, $a(), null;
  }
  function ju() {
    if (xi !== null) {
      var n = Df(ts), r = Xn.transition, l = Dt;
      try {
        if (Xn.transition = null, Dt = 16 > n ? 16 : n, xi === null) var o = !1;
        else {
          if (n = xi, xi = null, ts = 0, ct & 6) throw Error(k(331));
          var c = ct;
          for (ct |= 4, ce = n.current; ce !== null; ) {
            var d = ce, h = d.child;
            if (ce.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var N = S[C];
                  for (ce = N; ce !== null; ) {
                    var V = ce;
                    switch (V.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xo(8, V, d);
                    }
                    var P = V.child;
                    if (P !== null) P.return = V, ce = P;
                    else for (; ce !== null; ) {
                      V = ce;
                      var F = V.sibling, ue = V.return;
                      if (Mc(V), V === N) {
                        ce = null;
                        break;
                      }
                      if (F !== null) {
                        F.return = ue, ce = F;
                        break;
                      }
                      ce = ue;
                    }
                  }
                }
                var de = d.alternate;
                if (de !== null) {
                  var he = de.child;
                  if (he !== null) {
                    de.child = null;
                    do {
                      var pn = he.sibling;
                      he.sibling = null, he = pn;
                    } while (he !== null);
                  }
                }
                ce = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null) h.return = d, ce = h;
            else e: for (; ce !== null; ) {
              if (d = ce, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Xo(9, d, d.return);
              }
              var w = d.sibling;
              if (w !== null) {
                w.return = d.return, ce = w;
                break e;
              }
              ce = d.return;
            }
          }
          var T = n.current;
          for (ce = T; ce !== null; ) {
            h = ce;
            var _ = h.child;
            if (h.subtreeFlags & 2064 && _ !== null) _.return = h, ce = _;
            else e: for (h = T; ce !== null; ) {
              if (S = ce, S.flags & 2048) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ko(9, S);
                }
              } catch (pe) {
                Qt(S, S.return, pe);
              }
              if (S === h) {
                ce = null;
                break e;
              }
              var B = S.sibling;
              if (B !== null) {
                B.return = S.return, ce = B;
                break e;
              }
              ce = S.return;
            }
          }
          if (ct = c, $a(), wa && typeof wa.onPostCommitFiberRoot == "function") try {
            wa.onPostCommitFiberRoot(oo, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Dt = l, Xn.transition = r;
      }
    }
    return !1;
  }
  function Zv(n, r, l) {
    r = Yl(l, r), r = Lv(n, r, 1), n = qi(n, r, 1), r = bn(), n !== null && (Cl(n, 1, r), Fr(n, r));
  }
  function Qt(n, r, l) {
    if (n.tag === 3) Zv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Zv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (nl === null || !nl.has(o))) {
          n = Yl(l, n), n = gd(r, n, 1), r = qi(r, n, 1), n = bn(), r !== null && (Cl(r, 1, n), Fr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function yy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = bn(), n.pingedLanes |= n.suspendedLanes & l, Ln === n && (Kn & l) === l && (dn === 4 || dn === 3 && (Kn & 130023424) === Kn && 500 > We() - kd ? Ti(n, 0) : Lc |= l), Fr(n, r);
  }
  function Jv(n, r) {
    r === 0 && (n.mode & 1 ? (r = ba, ba <<= 1, !(ba & 130023424) && (ba = 4194304)) : r = 1);
    var l = bn();
    n = Qr(n, r), n !== null && (Cl(n, r, l), Fr(n, l));
  }
  function gy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Jv(n, l);
  }
  function eh(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(k(314));
    }
    o !== null && o.delete(r), Jv(n, l);
  }
  var th;
  th = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Nn.current) Tn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Tn = !1, Qo(n, r, l);
      Tn = !!(n.flags & 131072);
    }
    else Tn = !1, It && r.flags & 1048576 && Rv(r, yi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        da(n, r), n = r.pendingProps;
        var c = Or(r, an.current);
        qt(r, l), c = Zi(null, r, o, n, c, l);
        var d = _a();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, En(o) ? (d = !0, Hn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, cd(r), c.updater = wc, r.stateNode = c, c._reactInternals = r, Bo(r, o, n, l), r = Yo(null, r, o, !0, d, l)) : (r.tag = 0, It && d && tc(r), Gn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (da(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Ey(o), n = Oa(o, n), c) {
            case 0:
              r = Uv(null, r, o, n, l);
              break e;
            case 1:
              r = Av(null, r, o, n, l);
              break e;
            case 11:
              r = Ur(null, r, o, n, l);
              break e;
            case 14:
              r = Il(null, r, o, Oa(o.type, n), l);
              break e;
          }
          throw Error(k(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Oa(o, c), Uv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Oa(o, c), Av(n, r, o, c, l);
      case 3:
        e: {
          if (Ou(r), n === null) throw Error(k(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Dv(n, r), _o(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Yl(Error(k(423)), r), r = jv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Yl(Error(k(424)), r), r = jv(n, r, o, l, c);
            break e;
          } else for (Mr = Va(r.stateNode.containerInfo.firstChild), Nr = r, It = !0, ca = null, l = re(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ki(), o === c) {
              r = pa(n, r, l);
              break e;
            }
            Gn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return _v(r), n === null && rd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Ks(o, c) ? h = null : d !== null && Ks(o, d) && (r.flags |= 32), Ed(n, r), Gn(n, r, h, l), r.child;
      case 6:
        return n === null && rd(r), null;
      case 13:
        return _c(n, r, l);
      case 4:
        return dd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = sn(r, null, o, l) : Gn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Oa(o, c), Ur(n, r, o, c, l);
      case 7:
        return Gn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Gn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Gn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, Se(Ir, o._currentValue), o._currentValue = h, d !== null) if (Da(d.value, h)) {
            if (d.children === c.children && !Nn.current) {
              r = pa(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var S = d.dependencies;
            if (S !== null) {
              h = d.child;
              for (var C = S.firstContext; C !== null; ) {
                if (C.context === o) {
                  if (d.tag === 1) {
                    C = Si(-1, l & -l), C.tag = 2;
                    var N = d.updateQueue;
                    if (N !== null) {
                      N = N.shared;
                      var V = N.pending;
                      V === null ? C.next = C : (C.next = V.next, V.next = C), N.pending = C;
                    }
                  }
                  d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), ud(
                    d.return,
                    l,
                    r
                  ), S.lanes |= l;
                  break;
                }
                C = C.next;
              }
            } else if (d.tag === 10) h = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (h = d.return, h === null) throw Error(k(341));
              h.lanes |= l, S = h.alternate, S !== null && (S.lanes |= l), ud(h, l, r), h = d.sibling;
            } else h = d.child;
            if (h !== null) h.return = d;
            else for (h = d; h !== null; ) {
              if (h === r) {
                h = null;
                break;
              }
              if (d = h.sibling, d !== null) {
                d.return = h.return, h = d;
                break;
              }
              h = h.return;
            }
            d = h;
          }
          Gn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, qt(r, l), c = fa(c), o = o(c), r.flags |= 1, Gn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Oa(o, r.pendingProps), c = Oa(o.type, c), Il(n, r, o, c, l);
      case 15:
        return Ie(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Oa(o, c), da(n, r), r.tag = 1, En(o) ? (n = !0, Hn(r)) : n = !1, qt(r, l), bc(r, o, c), Bo(r, o, c, l), Yo(null, r, o, !0, n, l);
      case 19:
        return Wa(n, r, l);
      case 22:
        return $o(n, r, l);
    }
    throw Error(k(156, r.tag));
  };
  function nh(n, r) {
    return Xt(n, r);
  }
  function Sy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ha(n, r, l, o) {
    return new Sy(n, r, l, o);
  }
  function Ld(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ey(n) {
    if (typeof n == "function") return Ld(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === G) return 11;
      if (n === ot) return 14;
    }
    return 2;
  }
  function al(n, r) {
    var l = n.alternate;
    return l === null ? (l = ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function as(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function") Ld(n) && (h = 1);
    else if (typeof n == "string") h = 5;
    else e: switch (n) {
      case $e:
        return Ri(l.children, c, d, r);
      case ln:
        h = 8, c |= 8;
        break;
      case Ut:
        return n = ha(12, l, r, c | 2), n.elementType = Ut, n.lanes = d, n;
      case X:
        return n = ha(13, l, r, c), n.elementType = X, n.lanes = d, n;
      case Te:
        return n = ha(19, l, r, c), n.elementType = Te, n.lanes = d, n;
      case Ft:
        return il(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case en:
            h = 10;
            break e;
          case Wt:
            h = 9;
            break e;
          case G:
            h = 11;
            break e;
          case ot:
            h = 14;
            break e;
          case pt:
            h = 16, o = null;
            break e;
        }
        throw Error(k(130, n == null ? n : typeof n, ""));
    }
    return r = ha(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ri(n, r, l, o) {
    return n = ha(7, n, o, r), n.lanes = l, n;
  }
  function il(n, r, l, o) {
    return n = ha(22, n, o, r), n.elementType = Ft, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function zd(n, r, l) {
    return n = ha(6, n, null, r), n.lanes = l, n;
  }
  function jc(n, r, l) {
    return r = ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function rh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = bf(0), this.expirationTimes = bf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Fc(n, r, l, o, c, d, h, S, C) {
    return n = new rh(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, cd(d), n;
  }
  function Cy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Tt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Ud(n) {
    if (!n) return lr;
    n = n._reactInternals;
    e: {
      if (Qe(n) !== n || n.tag !== 1) throw Error(k(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (En(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(k(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (En(l)) return Do(n, l, r);
    }
    return r;
  }
  function ah(n, r, l, o, c, d, h, S, C) {
    return n = Fc(l, o, !0, n, c, d, h, S, C), n.context = Ud(null), l = n.current, o = bn(), c = qa(l), d = Si(o, c), d.callback = r ?? null, qi(l, d, c), n.current.lanes = c, Cl(n, c, o), Fr(n, o), n;
  }
  function Hc(n, r, l, o) {
    var c = r.current, d = bn(), h = qa(c);
    return l = Ud(l), r.context === null ? r.context = l : r.pendingContext = l, r = Si(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = qi(c, r, h), n !== null && (mr(n, c, h, d), ic(n, c, h)), h;
  }
  function Vc(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Ad(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Bc(n, r) {
    Ad(n, r), (n = n.alternate) && Ad(n, r);
  }
  function ih() {
    return null;
  }
  var ql = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function jd(n) {
    this._internalRoot = n;
  }
  Pc.prototype.render = jd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(k(409));
    Hc(n, r, null, null);
  }, Pc.prototype.unmount = jd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Xl(function() {
        Hc(null, n, null, null);
      }), r[hi] = null;
    }
  };
  function Pc(n) {
    this._internalRoot = n;
  }
  Pc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ye();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < In.length && r !== 0 && r < In[l].priority; l++) ;
      In.splice(l, 0, n), l === 0 && Mf(n);
    }
  };
  function Fd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function $c(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function lh() {
  }
  function xy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var N = Vc(h);
          d.call(N);
        };
      }
      var h = ah(r, o, n, 0, null, !1, !1, "", lh);
      return n._reactRootContainer = h, n[hi] = h.current, Eu(n.nodeType === 8 ? n.parentNode : n), Xl(), h;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var N = Vc(C);
        S.call(N);
      };
    }
    var C = Fc(n, 0, !1, null, null, !1, !1, "", lh);
    return n._reactRootContainer = C, n[hi] = C.current, Eu(n.nodeType === 8 ? n.parentNode : n), Xl(function() {
      Hc(r, C, l, o);
    }), C;
  }
  function is(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var C = Vc(h);
          S.call(C);
        };
      }
      Hc(r, h, n, c);
    } else h = xy(l, r, n, c, o);
    return Vc(h);
  }
  kt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Sl(r.pendingLanes);
          l !== 0 && (ks(r, l | 1), Fr(r, We()), !(ct & 6) && (zu = We() + 500, $a()));
        }
        break;
      case 13:
        Xl(function() {
          var o = Qr(n, 1);
          if (o !== null) {
            var c = bn();
            mr(o, n, 1, c);
          }
        }), Bc(n, 1);
    }
  }, kf = function(n) {
    if (n.tag === 13) {
      var r = Qr(n, 134217728);
      if (r !== null) {
        var l = bn();
        mr(r, n, 134217728, l);
      }
      Bc(n, 134217728);
    }
  }, _f = function(n) {
    if (n.tag === 13) {
      var r = qa(n), l = Qr(n, r);
      if (l !== null) {
        var o = bn();
        mr(l, n, r, o);
      }
      Bc(n, r);
    }
  }, Ye = function() {
    return Dt;
  }, Of = function(n, r) {
    var l = Dt;
    try {
      return Dt = n, r();
    } finally {
      Dt = l;
    }
  }, Ht = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ta(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Kt(o);
              if (!c) throw Error(k(90));
              cr(o), Ta(o, c);
            }
          }
        }
        break;
      case "textarea":
        jn(n, l);
        break;
      case "select":
        r = l.value, r != null && xt(n, !!l.multiple, r, !1);
    }
  }, ao = Od, cu = Xl;
  var Ty = { usingClientEntryPoint: !1, Events: [Ee, ka, Kt, bs, ro, Od] }, ls = { findFiberByHostInstance: Nl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, uh = { bundleType: ls.bundleType, version: ls.version, rendererPackageName: ls.rendererPackageName, rendererConfig: ls.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: it.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = On(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ls.findFiberByHostInstance || ih, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ll.isDisabled && ll.supportsFiber) try {
      oo = ll.inject(uh), wa = ll;
    } catch {
    }
  }
  return Ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ty, Ca.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fd(r)) throw Error(k(200));
    return Cy(n, r, null, l);
  }, Ca.createRoot = function(n, r) {
    if (!Fd(n)) throw Error(k(299));
    var l = !1, o = "", c = ql;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Fc(n, 1, !1, null, null, l, !1, o, c), n[hi] = r.current, Eu(n.nodeType === 8 ? n.parentNode : n), new jd(r);
  }, Ca.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(k(188)) : (n = Object.keys(n).join(","), Error(k(268, n)));
    return n = On(r), n = n === null ? null : n.stateNode, n;
  }, Ca.flushSync = function(n) {
    return Xl(n);
  }, Ca.hydrate = function(n, r, l) {
    if (!$c(r)) throw Error(k(200));
    return is(null, n, r, !0, l);
  }, Ca.hydrateRoot = function(n, r, l) {
    if (!Fd(n)) throw Error(k(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = ql;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = ah(r, null, n, 1, l ?? null, c, !1, d, h), n[hi] = r.current, Eu(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Pc(r);
  }, Ca.render = function(n, r, l) {
    if (!$c(r)) throw Error(k(200));
    return is(null, n, r, !1, l);
  }, Ca.unmountComponentAtNode = function(n) {
    if (!$c(n)) throw Error(k(40));
    return n._reactRootContainer ? (Xl(function() {
      is(null, null, n, !1, function() {
        n._reactRootContainer = null, n[hi] = null;
      });
    }), !0) : !1;
  }, Ca.unstable_batchedUpdates = Od, Ca.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!$c(l)) throw Error(k(200));
    if (n == null || n._reactInternals === void 0) throw Error(k(38));
    return is(n, r, l, !1, o);
  }, Ca.version = "18.3.1-next-f1338f8080-20240426", Ca;
}
var xa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function JD() {
  return aT || (aT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var j = Cf, K = iT(), k = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, at = !1;
    function De(e) {
      at = e;
    }
    function Be(e) {
      if (!at) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        je("warn", e, a);
      }
    }
    function g(e) {
      if (!at) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        je("error", e, a);
      }
    }
    function je(e, t, a) {
      {
        var i = k.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Z = 0, J = 1, Oe = 2, Y = 3, ee = 4, I = 5, fe = 6, xe = 7, we = 8, et = 9, Ze = 10, Me = 11, it = 12, He = 13, Tt = 14, $e = 15, ln = 16, Ut = 17, en = 18, Wt = 19, G = 21, X = 22, Te = 23, ot = 24, pt = 25, Ft = !0, W = !1, ye = !1, q = !1, qe = !1, tt = !0, Yn = !0, un = !0, ta = !0, hn = /* @__PURE__ */ new Set(), mn = {}, kn = {};
    function ir(e, t) {
      Un(e, t), Un(e + "Capture", t);
    }
    function Un(e, t) {
      mn[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), mn[e] = t;
      {
        var a = e.toLowerCase();
        kn[a] = e, e === "onDoubleClick" && (kn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        hn.add(t[i]);
    }
    var yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", cr = Object.prototype.hasOwnProperty;
    function Gt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function bt(e) {
      try {
        return on(e), !1;
      } catch {
        return !0;
      }
    }
    function on(e) {
      return "" + e;
    }
    function An(e, t) {
      if (bt(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Gt(e)), on(e);
    }
    function Ta(e) {
      if (bt(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Gt(e)), on(e);
    }
    function ja(e, t) {
      if (bt(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Gt(e)), on(e);
    }
    function Ae(e, t) {
      if (bt(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Gt(e)), on(e);
    }
    function At(e) {
      if (bt(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Gt(e)), on(e);
    }
    function xt(e) {
      if (bt(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Gt(e)), on(e);
    }
    var _t = 0, Ot = 1, jn = 2, Nt = 3, tn = 4, nn = 5, Fn = 6, gn = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Q = gn + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ne = new RegExp("^[" + gn + "][" + Q + "]*$"), ze = {}, Ge = {};
    function lt(e) {
      return cr.call(Ge, e) ? !0 : cr.call(ze, e) ? !1 : ne.test(e) ? (Ge[e] = !0, !0) : (ze[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function mt(e, t, a) {
      return t !== null ? t.type === _t : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Bt(e, t, a, i) {
      if (a !== null && a.type === _t)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function _n(e, t, a, i) {
      if (t === null || typeof t > "u" || Bt(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Nt:
            return !t;
          case tn:
            return t === !1;
          case nn:
            return isNaN(t);
          case Fn:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function vt(e) {
      return Ht.hasOwnProperty(e) ? Ht[e] : null;
    }
    function ut(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === jn || t === Nt || t === tn, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ht = {}, Fa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Fa.forEach(function(e) {
      Ht[e] = new ut(
        e,
        _t,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ht[t] = new ut(
        t,
        Ot,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ht[e] = new ut(
        e,
        jn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ht[e] = new ut(
        e,
        jn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Ht[e] = new ut(
        e,
        Nt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ht[e] = new ut(
        e,
        Nt,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ht[e] = new ut(
        e,
        tn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ht[e] = new ut(
        e,
        Fn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ht[e] = new ut(
        e,
        nn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var na = /[\-\:]([a-z])/g, gl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(na, gl);
      Ht[t] = new ut(
        t,
        Ot,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(na, gl);
      Ht[t] = new ut(
        t,
        Ot,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(na, gl);
      Ht[t] = new ut(
        t,
        Ot,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ht[e] = new ut(
        e,
        Ot,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var bs = "xlinkHref";
    Ht[bs] = new ut(
      "xlinkHref",
      Ot,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ht[e] = new ut(
        e,
        Ot,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ro = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ao = !1;
    function cu(e) {
      !ao && ro.test(e) && (ao = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function fu(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        An(a, t), i.sanitizeURL && cu("" + a);
        var s = i.attributeName, f = null;
        if (i.type === tn) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : _n(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (_n(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Nt)
            return a;
          f = e.getAttribute(s);
        }
        return _n(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function io(e, t, a, i) {
      {
        if (!lt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return An(a, t), u === "" + a ? a : u;
      }
    }
    function ii(e, t, a, i) {
      var u = vt(t);
      if (!mt(t, u, i)) {
        if (_n(t, a, u, i) && (a = null), i || u === null) {
          if (lt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (An(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Nt ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var R = u.type, x;
          R === Nt || R === tn && a === !0 ? x = "" : (An(a, m), x = "" + a, u.sanitizeURL && cu(x.toString())), y ? e.setAttributeNS(y, m, x) : e.setAttribute(m, x);
        }
      }
    }
    var Ra = Symbol.for("react.element"), br = Symbol.for("react.portal"), Ai = Symbol.for("react.fragment"), li = Symbol.for("react.strict_mode"), ji = Symbol.for("react.profiler"), Fi = Symbol.for("react.provider"), E = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), Qe = Symbol.for("react.memo"), Pe = Symbol.for("react.lazy"), nt = Symbol.for("react.scope"), Je = Symbol.for("react.debug_trace_mode"), On = Symbol.for("react.offscreen"), Yt = Symbol.for("react.legacy_hidden"), Xt = Symbol.for("react.cache"), fr = Symbol.for("react.tracing_marker"), ui = Symbol.iterator, oi = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ui && e[ui] || e[oi];
      return typeof t == "function" ? t : null;
    }
    var Xe = Object.assign, si = 0, lo, uo, $p, xf, oo, wa, Yp;
    function ra() {
    }
    ra.__reactDisabledLog = !0;
    function Pm() {
      {
        if (si === 0) {
          lo = console.log, uo = console.info, $p = console.warn, xf = console.error, oo = console.group, wa = console.groupCollapsed, Yp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ra,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        si++;
      }
    }
    function $m() {
      {
        if (si--, si === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Xe({}, e, {
              value: lo
            }),
            info: Xe({}, e, {
              value: uo
            }),
            warn: Xe({}, e, {
              value: $p
            }),
            error: Xe({}, e, {
              value: xf
            }),
            group: Xe({}, e, {
              value: oo
            }),
            groupCollapsed: Xe({}, e, {
              value: wa
            }),
            groupEnd: Xe({}, e, {
              value: Yp
            })
          });
        }
        si < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Tf = k.ReactCurrentDispatcher, du;
    function ba(e, t, a) {
      {
        if (du === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            du = i && i[1] || "";
          }
        return `
` + du + e;
      }
    }
    var Sl = !1, El;
    {
      var Ym = typeof WeakMap == "function" ? WeakMap : Map;
      El = new Ym();
    }
    function Rf(e, t) {
      if (!e || Sl)
        return "";
      {
        var a = El.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Sl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Tf.current, Tf.current = null, Pm();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (M) {
              i = M;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (M) {
              i = M;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            i = M;
          }
          e();
        }
      } catch (M) {
        if (M && i && typeof M.stack == "string") {
          for (var p = M.stack.split(`
`), v = i.stack.split(`
`), m = p.length - 1, y = v.length - 1; m >= 1 && y >= 0 && p[m] !== v[y]; )
            y--;
          for (; m >= 1 && y >= 0; m--, y--)
            if (p[m] !== v[y]) {
              if (m !== 1 || y !== 1)
                do
                  if (m--, y--, y < 0 || p[m] !== v[y]) {
                    var R = `
` + p[m].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && El.set(e, R), R;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        Sl = !1, Tf.current = s, $m(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", O = x ? ba(x) : "";
      return typeof e == "function" && El.set(e, O), O;
    }
    function wf(e, t, a) {
      return Rf(e, !0);
    }
    function Ds(e, t, a) {
      return Rf(e, !1);
    }
    function bf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Cl(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Rf(e, bf(e));
      if (typeof e == "string")
        return ba(e);
      switch (e) {
        case ie:
          return ba("Suspense");
        case _e:
          return ba("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case H:
            return Ds(e.render);
          case Qe:
            return Cl(e.type, t, a);
          case Pe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Cl(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Im(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case I:
          return ba(e.type);
        case ln:
          return ba("Lazy");
        case He:
          return ba("Suspense");
        case Wt:
          return ba("SuspenseList");
        case Z:
        case Oe:
        case $e:
          return Ds(e.type);
        case Me:
          return Ds(e.type.render);
        case J:
          return wf(e.type);
        default:
          return "";
      }
    }
    function ks(e) {
      try {
        var t = "", a = e;
        do
          t += Im(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Dt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Df(e) {
      return e.displayName || "Context";
    }
    function kt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ai:
          return "Fragment";
        case br:
          return "Portal";
        case ji:
          return "Profiler";
        case li:
          return "StrictMode";
        case ie:
          return "Suspense";
        case _e:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var t = e;
            return Df(t) + ".Consumer";
          case Fi:
            var a = e;
            return Df(a._context) + ".Provider";
          case H:
            return Dt(e, e.render, "ForwardRef");
          case Qe:
            var i = e.displayName || null;
            return i !== null ? i : kt(e.type) || "Memo";
          case Pe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return kt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function kf(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function _f(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ot:
          return "Cache";
        case et:
          var i = a;
          return _f(i) + ".Consumer";
        case Ze:
          var u = a;
          return _f(u._context) + ".Provider";
        case en:
          return "DehydratedFragment";
        case Me:
          return kf(a, a.render, "ForwardRef");
        case xe:
          return "Fragment";
        case I:
          return a;
        case ee:
          return "Portal";
        case Y:
          return "Root";
        case fe:
          return "Text";
        case ln:
          return kt(a);
        case we:
          return a === li ? "StrictMode" : "Mode";
        case X:
          return "Offscreen";
        case it:
          return "Profiler";
        case G:
          return "Scope";
        case He:
          return "Suspense";
        case Wt:
          return "SuspenseList";
        case pt:
          return "TracingMarker";
        case J:
        case Z:
        case Ut:
        case Oe:
        case Tt:
        case $e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Of = k.ReactDebugCurrentFrame, dr = null, Hi = !1;
    function aa() {
      {
        if (dr === null)
          return null;
        var e = dr._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function Vi() {
      return dr === null ? "" : ks(dr);
    }
    function rn() {
      Of.getCurrentStack = null, dr = null, Hi = !1;
    }
    function Pt(e) {
      Of.getCurrentStack = e === null ? null : Vi, dr = e, Hi = !1;
    }
    function so() {
      return dr;
    }
    function In(e) {
      Hi = e;
    }
    function ia(e) {
      return "" + e;
    }
    function ci(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return xt(e), e;
        default:
          return "";
      }
    }
    var co = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Nf(e, t) {
      co[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Mf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function fo(e) {
      return e._valueTracker;
    }
    function Ip(e) {
      e._valueTracker = null;
    }
    function Qm(e) {
      var t = "";
      return e && (Mf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function po(e) {
      var t = Mf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      xt(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            xt(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            xt(p), i = "" + p;
          },
          stopTracking: function() {
            Ip(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Bi(e) {
      fo(e) || (e._valueTracker = po(e));
    }
    function xl(e) {
      if (!e)
        return !1;
      var t = fo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Qm(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Tl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Qp = !1, Wp = !1, _s = !1, vo = !1;
    function Os(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ns(e, t) {
      var a = e, i = t.checked, u = Xe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function fi(e, t) {
      Nf("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Wp && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", aa() || "A component", t.type), Wp = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Qp && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", aa() || "A component", t.type), Qp = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ci(t.value != null ? t.value : i),
        controlled: Os(t)
      };
    }
    function Ms(e, t) {
      var a = e, i = t.checked;
      i != null && ii(a, "checked", i, !1);
    }
    function pu(e, t) {
      var a = e;
      {
        var i = Os(t);
        !a._wrapperState.controlled && i && !vo && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vo = !0), a._wrapperState.controlled && !i && !_s && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), _s = !0);
      }
      Ms(e, t);
      var u = ci(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = ia(u)) : a.value !== ia(u) && (a.value = ia(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Us(a, t.type, u) : t.hasOwnProperty("defaultValue") && Us(a, t.type, ci(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Lf(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = ia(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ls(e, t) {
      var a = e;
      pu(a, t), zs(a, t);
    }
    function zs(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        An(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = wh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            xl(f), pu(f, p);
          }
        }
      }
    }
    function Us(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Tl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = ia(e._wrapperState.initialValue) : e.defaultValue !== ia(a) && (e.defaultValue = ia(a)));
    }
    var Dr = !1, Rl = !1, As = !1;
    function vu(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? j.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Rl || (Rl = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (As || (As = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Dr && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Dr = !0);
    }
    function Wm(e, t) {
      t.value != null && e.setAttribute("value", ia(ci(t.value)));
    }
    var zf = Array.isArray;
    function Qn(e) {
      return zf(e);
    }
    var wl;
    wl = !1;
    function ho() {
      var e = aa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Uf = ["value", "defaultValue"];
    function Gm(e) {
      {
        Nf("select", e);
        for (var t = 0; t < Uf.length; t++) {
          var a = Uf[t];
          if (e[a] != null) {
            var i = Qn(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ho()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ho());
          }
        }
      }
    }
    function hu(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = ia(ci(a)), R = null, x = 0; x < u.length; x++) {
          if (u[x].value === y) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          R === null && !u[x].disabled && (R = u[x]);
        }
        R !== null && (R.selected = !0);
      }
    }
    function Af(e, t) {
      return Xe({}, t, {
        value: void 0
      });
    }
    function js(e, t) {
      var a = e;
      Gm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !wl && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), wl = !0);
    }
    function Xm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? hu(a, !!t.multiple, i, !1) : t.defaultValue != null && hu(a, !!t.multiple, t.defaultValue, !0);
    }
    function Km(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? hu(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? hu(a, !!t.multiple, t.defaultValue, !0) : hu(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function qm(e, t) {
      var a = e, i = t.value;
      i != null && hu(a, !!t.multiple, i, !1);
    }
    var Gp = !1;
    function jf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Xe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ia(a._wrapperState.initialValue)
      });
      return i;
    }
    function Ff(e, t) {
      var a = e;
      Nf("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Gp && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", aa() || "A component"), Gp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Qn(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: ci(i)
      };
    }
    function Xp(e, t) {
      var a = e, i = ci(t.value), u = ci(t.defaultValue);
      if (i != null) {
        var s = ia(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = ia(u));
    }
    function Kp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Zm(e, t) {
      Xp(e, t);
    }
    var di = "http://www.w3.org/1999/xhtml", Hf = "http://www.w3.org/1998/Math/MathML", Vf = "http://www.w3.org/2000/svg";
    function Bf(e) {
      switch (e) {
        case "svg":
          return Vf;
        case "math":
          return Hf;
        default:
          return di;
      }
    }
    function Pf(e, t) {
      return e == null || e === di ? Bf(t) : e === Vf && t === "foreignObject" ? di : e;
    }
    var qp = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Fs, Zp = qp(function(e, t) {
      if (e.namespaceURI === Vf && !("innerHTML" in e)) {
        Fs = Fs || document.createElement("div"), Fs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Fs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), kr = 1, pi = 3, Sn = 8, vi = 9, $f = 11, mu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === pi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, mo = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, yo = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Jp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ev = ["Webkit", "ms", "Moz", "O"];
    Object.keys(yo).forEach(function(e) {
      ev.forEach(function(t) {
        yo[Jp(t, e)] = yo[e];
      });
    });
    function Hs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(yo.hasOwnProperty(e) && yo[e]) ? t + "px" : (Ae(t, e), ("" + t).trim());
    }
    var tv = /([A-Z])/g, nv = /^ms-/;
    function yu(e) {
      return e.replace(tv, "-$1").toLowerCase().replace(nv, "-ms-");
    }
    var rv = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, ey = /^-ms-/, av = /-(.)/g, Yf = /;\s*$/, Ha = {}, bl = {}, iv = !1, go = !1, ty = function(e) {
        return e.replace(av, function(t, a) {
          return a.toUpperCase();
        });
      }, lv = function(e) {
        Ha.hasOwnProperty(e) && Ha[e] || (Ha[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ty(e.replace(ey, "ms-"))
        ));
      }, If = function(e) {
        Ha.hasOwnProperty(e) && Ha[e] || (Ha[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Qf = function(e, t) {
        bl.hasOwnProperty(t) && bl[t] || (bl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Yf, "")));
      }, uv = function(e, t) {
        iv || (iv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ov = function(e, t) {
        go || (go = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      rv = function(e, t) {
        e.indexOf("-") > -1 ? lv(e) : Jm.test(e) ? If(e) : Yf.test(t) && Qf(e, t), typeof t == "number" && (isNaN(t) ? uv(e, t) : isFinite(t) || ov(e, t));
      };
    }
    var sv = rv;
    function ny(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : yu(i)) + ":", t += Hs(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function cv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || sv(i, t[i]);
          var s = Hs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ry(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function fv(e) {
      var t = {};
      for (var a in e)
        for (var i = mo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ay(e, t) {
      {
        if (!t)
          return;
        var a = fv(e), i = fv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ry(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Da = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, So = Xe({
      menuitem: !0
    }, Da), dv = "__html";
    function Vs(e, t) {
      if (t) {
        if (So[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(dv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Pi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Eo = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Bs = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, gu = {}, iy = new RegExp("^(aria)-[" + Q + "]*$"), Su = new RegExp("^(aria)[A-Z][" + Q + "]*$");
    function Wf(e, t) {
      {
        if (cr.call(gu, t) && gu[t])
          return !0;
        if (Su.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Bs.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), gu[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), gu[t] = !0, !0;
        }
        if (iy.test(t)) {
          var u = t.toLowerCase(), s = Bs.hasOwnProperty(u) ? u : null;
          if (s == null)
            return gu[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), gu[t] = !0, !0;
        }
      }
      return !0;
    }
    function Co(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Wf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Gf(e, t) {
      Pi(e, t) || Co(e, t);
    }
    var Xf = !1;
    function Ps(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Xf && (Xf = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Dl = function() {
    };
    {
      var Wn = {}, Kf = /^on./, $s = /^on[^A-Z]/, pv = new RegExp("^(aria)-[" + Q + "]*$"), vv = new RegExp("^(aria)[A-Z][" + Q + "]*$");
      Dl = function(e, t, a, i) {
        if (cr.call(Wn, t) && Wn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Wn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Wn[t] = !0, !0;
          if (Kf.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Wn[t] = !0, !0;
        } else if (Kf.test(t))
          return $s.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Wn[t] = !0, !0;
        if (pv.test(t) || vv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wn[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wn[t] = !0, !0;
        var v = vt(t), m = v !== null && v.type === _t;
        if (Eo.hasOwnProperty(u)) {
          var y = Eo[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), Wn[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wn[t] = !0, !0;
        return typeof a == "boolean" && Bt(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : m ? !0 : Bt(t, a, v, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Nt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var hv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = Dl(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function mv(e, t, a) {
      Pi(e, t) || hv(e, t, a);
    }
    var qf = 1, Ys = 2, la = 4, Zf = qf | Ys | la, kl = null;
    function ly(e) {
      kl !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), kl = e;
    }
    function uy() {
      kl === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), kl = null;
    }
    function xo(e) {
      return e === kl;
    }
    function Jf(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === pi ? t.parentNode : t;
    }
    var Is = null, _l = null, Rt = null;
    function Qs(e) {
      var t = Vu(e);
      if (t) {
        if (typeof Is != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = wh(a);
          Is(t.stateNode, t.type, i);
        }
      }
    }
    function Ws(e) {
      Is = e;
    }
    function Eu(e) {
      _l ? Rt ? Rt.push(e) : Rt = [e] : _l = e;
    }
    function yv() {
      return _l !== null || Rt !== null;
    }
    function Gs() {
      if (_l) {
        var e = _l, t = Rt;
        if (_l = null, Rt = null, Qs(e), t)
          for (var a = 0; a < t.length; a++)
            Qs(t[a]);
      }
    }
    var Cu = function(e, t) {
      return e(t);
    }, To = function() {
    }, $i = !1;
    function gv() {
      var e = yv();
      e && (To(), Gs());
    }
    function Sv(e, t, a) {
      if ($i)
        return e(t, a);
      $i = !0;
      try {
        return Cu(e, t, a);
      } finally {
        $i = !1, gv();
      }
    }
    function oy(e, t, a) {
      Cu = e, To = a;
    }
    function Ev(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Xs(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Ev(t));
        default:
          return !1;
      }
    }
    function Yi(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = wh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Xs(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Ro = !1;
    if (yn)
      try {
        var Ol = {};
        Object.defineProperty(Ol, "passive", {
          get: function() {
            Ro = !0;
          }
        }), window.addEventListener("test", Ol, Ol), window.removeEventListener("test", Ol, Ol);
      } catch {
        Ro = !1;
      }
    function Ks(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var qs = Ks;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ed = document.createElement("react");
      qs = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), R = !1, x = !0, O = window.event, M = Object.getOwnPropertyDescriptor(window, "event");
        function L() {
          ed.removeEventListener(z, Re, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = O);
        }
        var ae = Array.prototype.slice.call(arguments, 3);
        function Re() {
          R = !0, L(), a.apply(i, ae), x = !1;
        }
        var ge, dt = !1, rt = !1;
        function b(D) {
          if (ge = D.error, dt = !0, ge === null && D.colno === 0 && D.lineno === 0 && (rt = !0), D.defaultPrevented && ge != null && typeof ge == "object")
            try {
              ge._suppressLogging = !0;
            } catch {
            }
        }
        var z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", b), ed.addEventListener(z, Re, !1), y.initEvent(z, !1, !1), ed.dispatchEvent(y), M && Object.defineProperty(window, "event", M), R && x && (dt ? rt && (ge = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ge = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ge)), window.removeEventListener("error", b), !R)
          return L(), Ks.apply(this, arguments);
      };
    }
    var Cv = qs, xu = !1, Zs = null, Tu = !1, Va = null, xv = {
      onError: function(e) {
        xu = !0, Zs = e;
      }
    };
    function Ii(e, t, a, i, u, s, f, p, v) {
      xu = !1, Zs = null, Cv.apply(xv, arguments);
    }
    function Ba(e, t, a, i, u, s, f, p, v) {
      if (Ii.apply(this, arguments), xu) {
        var m = bo();
        Tu || (Tu = !0, Va = m);
      }
    }
    function wo() {
      if (Tu) {
        var e = Va;
        throw Tu = !1, Va = null, e;
      }
    }
    function hi() {
      return xu;
    }
    function bo() {
      if (xu) {
        var e = Zs;
        return xu = !1, Zs = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ru(e) {
      return e._reactInternals;
    }
    function sy(e) {
      return e._reactInternals !== void 0;
    }
    function Nl(e, t) {
      e._reactInternals = t;
    }
    var Ee = (
      /*                      */
      0
    ), ka = (
      /*                */
      1
    ), Kt = (
      /*                    */
      2
    ), st = (
      /*                       */
      4
    ), ua = (
      /*                */
      16
    ), oa = (
      /*                 */
      32
    ), Vt = (
      /*                     */
      64
    ), Se = (
      /*                   */
      128
    ), lr = (
      /*            */
      256
    ), an = (
      /*                          */
      512
    ), Nn = (
      /*                     */
      1024
    ), _r = (
      /*                      */
      2048
    ), Or = (
      /*                    */
      4096
    ), En = (
      /*                   */
      8192
    ), wu = (
      /*             */
      16384
    ), Tv = (
      /*               */
      32767
    ), Do = (
      /*                   */
      32768
    ), Hn = (
      /*                */
      65536
    ), Js = (
      /* */
      131072
    ), Pa = (
      /*                       */
      1048576
    ), bu = (
      /*                    */
      2097152
    ), mi = (
      /*                 */
      4194304
    ), ec = (
      /*                */
      8388608
    ), Qi = (
      /*               */
      16777216
    ), $a = (
      /*              */
      33554432
    ), Wi = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      st | Nn | 0
    ), Gi = Kt | st | ua | oa | an | Or | En, Xi = st | Vt | an | En, yi = _r | ua, Cn = mi | ec | bu, sa = k.ReactCurrentOwner;
    function Yr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Kt | Or)) !== Ee && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Y ? a : null;
    }
    function Ya(e) {
      if (e.tag === He) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ia(e) {
      return e.tag === Y ? e.stateNode.containerInfo : null;
    }
    function Ml(e) {
      return Yr(e) === e;
    }
    function Rv(e) {
      {
        var t = sa.current;
        if (t !== null && t.tag === J) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ru(e);
      return u ? Yr(u) === u : !1;
    }
    function tc(e) {
      if (Yr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function nc(e) {
      var t = e.alternate;
      if (!t) {
        var a = Yr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return tc(s), e;
            if (v === u)
              return tc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var m = !1, y = s.child; y; ) {
            if (y === i) {
              m = !0, i = s, u = f;
              break;
            }
            if (y === u) {
              m = !0, u = s, i = f;
              break;
            }
            y = y.sibling;
          }
          if (!m) {
            for (y = f.child; y; ) {
              if (y === i) {
                m = !0, i = f, u = s;
                break;
              }
              if (y === u) {
                m = !0, u = f, i = s;
                break;
              }
              y = y.sibling;
            }
            if (!m)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Y)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Nr(e) {
      var t = nc(e);
      return t !== null ? Mr(t) : null;
    }
    function Mr(e) {
      if (e.tag === I || e.tag === fe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Mr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function It(e) {
      var t = nc(e);
      return t !== null ? ca(t) : null;
    }
    function ca(e) {
      if (e.tag === I || e.tag === fe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ee) {
          var a = ca(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var td = K.unstable_scheduleCallback, wv = K.unstable_cancelCallback, nd = K.unstable_shouldYield, rd = K.unstable_requestPaint, Mn = K.unstable_now, rc = K.unstable_getCurrentPriorityLevel, ko = K.unstable_ImmediatePriority, Ki = K.unstable_UserBlockingPriority, gi = K.unstable_NormalPriority, cy = K.unstable_LowPriority, Ll = K.unstable_IdlePriority, ac = K.unstable_yieldValue, bv = K.unstable_setDisableYieldValue, zl = null, sn = null, re = null, Ir = !1, Lr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Du(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Yn && (e = Xe({}, e, {
          getLaneLabelMap: Ul,
          injectProfilingHooks: fa
        })), zl = t.inject(e), sn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ad(e, t) {
      if (sn && typeof sn.onScheduleFiberRoot == "function")
        try {
          sn.onScheduleFiberRoot(zl, e, t);
        } catch (a) {
          Ir || (Ir = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function id(e, t) {
      if (sn && typeof sn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Se) === Se;
          if (un) {
            var i;
            switch (t) {
              case pr:
                i = ko;
                break;
              case Wa:
                i = Ki;
                break;
              case da:
                i = gi;
                break;
              case pa:
                i = Ll;
                break;
              default:
                i = gi;
                break;
            }
            sn.onCommitFiberRoot(zl, e, i, a);
          }
        } catch (u) {
          Ir || (Ir = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function ld(e) {
      if (sn && typeof sn.onPostCommitFiberRoot == "function")
        try {
          sn.onPostCommitFiberRoot(zl, e);
        } catch (t) {
          Ir || (Ir = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ud(e) {
      if (sn && typeof sn.onCommitFiberUnmount == "function")
        try {
          sn.onCommitFiberUnmount(zl, e);
        } catch (t) {
          Ir || (Ir = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function qt(e) {
      if (typeof ac == "function" && (bv(e), De(e)), sn && typeof sn.setStrictMode == "function")
        try {
          sn.setStrictMode(zl, e);
        } catch (t) {
          Ir || (Ir = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function fa(e) {
      re = e;
    }
    function Ul() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Fl; a++) {
          var i = Ov(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function od(e) {
      re !== null && typeof re.markCommitStarted == "function" && re.markCommitStarted(e);
    }
    function sd() {
      re !== null && typeof re.markCommitStopped == "function" && re.markCommitStopped();
    }
    function Qr(e) {
      re !== null && typeof re.markComponentRenderStarted == "function" && re.markComponentRenderStarted(e);
    }
    function Wr() {
      re !== null && typeof re.markComponentRenderStopped == "function" && re.markComponentRenderStopped();
    }
    function cd(e) {
      re !== null && typeof re.markComponentPassiveEffectMountStarted == "function" && re.markComponentPassiveEffectMountStarted(e);
    }
    function Dv() {
      re !== null && typeof re.markComponentPassiveEffectMountStopped == "function" && re.markComponentPassiveEffectMountStopped();
    }
    function Si(e) {
      re !== null && typeof re.markComponentPassiveEffectUnmountStarted == "function" && re.markComponentPassiveEffectUnmountStarted(e);
    }
    function qi() {
      re !== null && typeof re.markComponentPassiveEffectUnmountStopped == "function" && re.markComponentPassiveEffectUnmountStopped();
    }
    function ic(e) {
      re !== null && typeof re.markComponentLayoutEffectMountStarted == "function" && re.markComponentLayoutEffectMountStarted(e);
    }
    function kv() {
      re !== null && typeof re.markComponentLayoutEffectMountStopped == "function" && re.markComponentLayoutEffectMountStopped();
    }
    function _o(e) {
      re !== null && typeof re.markComponentLayoutEffectUnmountStarted == "function" && re.markComponentLayoutEffectUnmountStarted(e);
    }
    function fd() {
      re !== null && typeof re.markComponentLayoutEffectUnmountStopped == "function" && re.markComponentLayoutEffectUnmountStopped();
    }
    function Oo(e, t, a) {
      re !== null && typeof re.markComponentErrored == "function" && re.markComponentErrored(e, t, a);
    }
    function Qa(e, t, a) {
      re !== null && typeof re.markComponentSuspended == "function" && re.markComponentSuspended(e, t, a);
    }
    function No(e) {
      re !== null && typeof re.markLayoutEffectsStarted == "function" && re.markLayoutEffectsStarted(e);
    }
    function Mo() {
      re !== null && typeof re.markLayoutEffectsStopped == "function" && re.markLayoutEffectsStopped();
    }
    function Al(e) {
      re !== null && typeof re.markPassiveEffectsStarted == "function" && re.markPassiveEffectsStarted(e);
    }
    function dd() {
      re !== null && typeof re.markPassiveEffectsStopped == "function" && re.markPassiveEffectsStopped();
    }
    function jl(e) {
      re !== null && typeof re.markRenderStarted == "function" && re.markRenderStarted(e);
    }
    function _v() {
      re !== null && typeof re.markRenderYielded == "function" && re.markRenderYielded();
    }
    function lc() {
      re !== null && typeof re.markRenderStopped == "function" && re.markRenderStopped();
    }
    function Zt(e) {
      re !== null && typeof re.markRenderScheduled == "function" && re.markRenderScheduled(e);
    }
    function uc(e, t) {
      re !== null && typeof re.markForceUpdateScheduled == "function" && re.markForceUpdateScheduled(e, t);
    }
    function Lo(e, t) {
      re !== null && typeof re.markStateUpdateScheduled == "function" && re.markStateUpdateScheduled(e, t);
    }
    var Ce = (
      /*                         */
      0
    ), Ke = (
      /*                 */
      1
    ), yt = (
      /*                    */
      2
    ), Mt = (
      /*               */
      8
    ), gt = (
      /*              */
      16
    ), xn = Math.clz32 ? Math.clz32 : zo, Vn = Math.log, oc = Math.LN2;
    function zo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Vn(t) / oc | 0) | 0;
    }
    var Fl = 31, A = (
      /*                        */
      0
    ), ht = (
      /*                          */
      0
    ), Ne = (
      /*                        */
      1
    ), Zi = (
      /*    */
      2
    ), _a = (
      /*             */
      4
    ), ur = (
      /*            */
      8
    ), cn = (
      /*                     */
      16
    ), Ei = (
      /*                */
      32
    ), Ji = (
      /*                       */
      4194240
    ), Hl = (
      /*                        */
      64
    ), sc = (
      /*                        */
      128
    ), cc = (
      /*                        */
      256
    ), fc = (
      /*                        */
      512
    ), dc = (
      /*                        */
      1024
    ), pc = (
      /*                        */
      2048
    ), vc = (
      /*                        */
      4096
    ), hc = (
      /*                        */
      8192
    ), mc = (
      /*                        */
      16384
    ), Vl = (
      /*                       */
      32768
    ), yc = (
      /*                       */
      65536
    ), ku = (
      /*                       */
      131072
    ), _u = (
      /*                       */
      262144
    ), gc = (
      /*                       */
      524288
    ), Uo = (
      /*                       */
      1048576
    ), Sc = (
      /*                       */
      2097152
    ), Ao = (
      /*                            */
      130023424
    ), Bl = (
      /*                             */
      4194304
    ), Ec = (
      /*                             */
      8388608
    ), jo = (
      /*                             */
      16777216
    ), Cc = (
      /*                             */
      33554432
    ), xc = (
      /*                             */
      67108864
    ), pd = Bl, Fo = (
      /*          */
      134217728
    ), vd = (
      /*                          */
      268435455
    ), Ho = (
      /*               */
      268435456
    ), Pl = (
      /*                        */
      536870912
    ), zr = (
      /*                   */
      1073741824
    );
    function Ov(e) {
      {
        if (e & Ne)
          return "Sync";
        if (e & Zi)
          return "InputContinuousHydration";
        if (e & _a)
          return "InputContinuous";
        if (e & ur)
          return "DefaultHydration";
        if (e & cn)
          return "Default";
        if (e & Ei)
          return "TransitionHydration";
        if (e & Ji)
          return "Transition";
        if (e & Ao)
          return "Retry";
        if (e & Fo)
          return "SelectiveHydration";
        if (e & Ho)
          return "IdleHydration";
        if (e & Pl)
          return "Idle";
        if (e & zr)
          return "Offscreen";
      }
    }
    var jt = -1, $l = Hl, Tc = Bl;
    function Vo(e) {
      switch (el(e)) {
        case Ne:
          return Ne;
        case Zi:
          return Zi;
        case _a:
          return _a;
        case ur:
          return ur;
        case cn:
          return cn;
        case Ei:
          return Ei;
        case Hl:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case mc:
        case Vl:
        case yc:
        case ku:
        case _u:
        case gc:
        case Uo:
        case Sc:
          return e & Ji;
        case Bl:
        case Ec:
        case jo:
        case Cc:
        case xc:
          return e & Ao;
        case Fo:
          return Fo;
        case Ho:
          return Ho;
        case Pl:
          return Pl;
        case zr:
          return zr;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Rc(e, t) {
      var a = e.pendingLanes;
      if (a === A)
        return A;
      var i = A, u = e.suspendedLanes, s = e.pingedLanes, f = a & vd;
      if (f !== A) {
        var p = f & ~u;
        if (p !== A)
          i = Vo(p);
        else {
          var v = f & s;
          v !== A && (i = Vo(v));
        }
      } else {
        var m = a & ~u;
        m !== A ? i = Vo(m) : s !== A && (i = Vo(s));
      }
      if (i === A)
        return A;
      if (t !== A && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === A) {
        var y = el(i), R = el(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === cn && (R & Ji) !== A
        )
          return t;
      }
      (i & _a) !== A && (i |= a & cn);
      var x = e.entangledLanes;
      if (x !== A)
        for (var O = e.entanglements, M = i & x; M > 0; ) {
          var L = Tn(M), ae = 1 << L;
          i |= O[L], M &= ~ae;
        }
      return i;
    }
    function Oa(e, t) {
      for (var a = e.eventTimes, i = jt; t > 0; ) {
        var u = Tn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function hd(e, t) {
      switch (e) {
        case Ne:
        case Zi:
        case _a:
          return t + 250;
        case ur:
        case cn:
        case Ei:
        case Hl:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case mc:
        case Vl:
        case yc:
        case ku:
        case _u:
        case gc:
        case Uo:
        case Sc:
          return t + 5e3;
        case Bl:
        case Ec:
        case jo:
        case Cc:
        case xc:
          return jt;
        case Fo:
        case Ho:
        case Pl:
        case zr:
          return jt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), jt;
      }
    }
    function wc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p, m = s[p];
        m === jt ? ((v & i) === A || (v & u) !== A) && (s[p] = hd(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Nv(e) {
      return Vo(e.pendingLanes);
    }
    function bc(e) {
      var t = e.pendingLanes & ~zr;
      return t !== A ? t : t & zr ? zr : A;
    }
    function Mv(e) {
      return (e & Ne) !== A;
    }
    function Bo(e) {
      return (e & vd) !== A;
    }
    function Yl(e) {
      return (e & Ao) === e;
    }
    function md(e) {
      var t = Ne | _a | cn;
      return (e & t) === A;
    }
    function yd(e) {
      return (e & Ji) === e;
    }
    function Dc(e, t) {
      var a = Zi | _a | ur | cn;
      return (t & a) !== A;
    }
    function Lv(e, t) {
      return (t & e.expiredLanes) !== A;
    }
    function gd(e) {
      return (e & Ji) !== A;
    }
    function Sd() {
      var e = $l;
      return $l <<= 1, ($l & Ji) === A && ($l = Hl), e;
    }
    function zv() {
      var e = Tc;
      return Tc <<= 1, (Tc & Ao) === A && (Tc = Bl), e;
    }
    function el(e) {
      return e & -e;
    }
    function Po(e) {
      return el(e);
    }
    function Tn(e) {
      return 31 - xn(e);
    }
    function Gn(e) {
      return Tn(e);
    }
    function Ur(e, t) {
      return (e & t) !== A;
    }
    function Il(e, t) {
      return (e & t) === t;
    }
    function Ie(e, t) {
      return e | t;
    }
    function $o(e, t) {
      return e & ~t;
    }
    function Ed(e, t) {
      return e & t;
    }
    function Uv(e) {
      return e;
    }
    function Av(e, t) {
      return e !== ht && e < t ? e : t;
    }
    function Yo(e) {
      for (var t = [], a = 0; a < Fl; a++)
        t.push(e);
      return t;
    }
    function Ou(e, t, a) {
      e.pendingLanes |= t, t !== Pl && (e.suspendedLanes = A, e.pingedLanes = A);
      var i = e.eventTimes, u = Gn(t);
      i[u] = a;
    }
    function jv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Tn(i), s = 1 << u;
        a[u] = jt, i &= ~s;
      }
    }
    function kc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Cd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = A, e.pingedLanes = A, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p;
        i[p] = A, u[p] = jt, s[p] = jt, f &= ~v;
      }
    }
    function _c(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Tn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function xd(e, t) {
      var a = el(t), i;
      switch (a) {
        case _a:
          i = Zi;
          break;
        case cn:
          i = ur;
          break;
        case Hl:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case mc:
        case Vl:
        case yc:
        case ku:
        case _u:
        case gc:
        case Uo:
        case Sc:
        case Bl:
        case Ec:
        case jo:
        case Cc:
        case xc:
          i = Ei;
          break;
        case Pl:
          i = Ho;
          break;
        default:
          i = ht;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== ht ? ht : i;
    }
    function Io(e, t, a) {
      if (Lr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Gn(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Fv(e, t) {
      if (Lr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Gn(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Td(e, t) {
      return null;
    }
    var pr = Ne, Wa = _a, da = cn, pa = Pl, Qo = ht;
    function va() {
      return Qo;
    }
    function Rn(e) {
      Qo = e;
    }
    function Hv(e, t) {
      var a = Qo;
      try {
        return Qo = e, t();
      } finally {
        Qo = a;
      }
    }
    function Vv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Wo(e, t) {
      return e > t ? e : t;
    }
    function Bn(e, t) {
      return e !== 0 && e < t;
    }
    function Bv(e) {
      var t = el(e);
      return Bn(pr, t) ? Bn(Wa, t) ? Bo(t) ? da : pa : Wa : pr;
    }
    function Oc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Go;
    function or(e) {
      Go = e;
    }
    function fy(e) {
      Go(e);
    }
    var ce;
    function Nu(e) {
      ce = e;
    }
    var Nc;
    function Pv(e) {
      Nc = e;
    }
    var $v;
    function Xo(e) {
      $v = e;
    }
    var Ko;
    function Rd(e) {
      Ko = e;
    }
    var Mc = !1, qo = [], Ci = null, Ga = null, Xa = null, fn = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), hr = [], Yv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Iv(e) {
      return Yv.indexOf(e) > -1;
    }
    function Na(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function wd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ci = null;
          break;
        case "dragenter":
        case "dragleave":
          Ga = null;
          break;
        case "mouseover":
        case "mouseout":
          Xa = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          fn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          vr.delete(i);
          break;
        }
      }
    }
    function Ar(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Na(t, a, i, u, s);
        if (t !== null) {
          var p = Vu(t);
          p !== null && ce(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function dy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ci = Ar(Ci, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ga = Ar(Ga, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Xa = Ar(Xa, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return fn.set(m, Ar(fn.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, R = y.pointerId;
          return vr.set(R, Ar(vr.get(R) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function bd(e) {
      var t = ss(e.target);
      if (t !== null) {
        var a = Yr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === He) {
            var u = Ya(a);
            if (u !== null) {
              e.blockedOn = u, Ko(e.priority, function() {
                Nc(a);
              });
              return;
            }
          } else if (i === Y) {
            var s = a.stateNode;
            if (Oc(s)) {
              e.blockedOn = Ia(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Qv(e) {
      for (var t = $v(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < hr.length && Bn(t, hr[i].priority); i++)
        ;
      hr.splice(i, 0, a), i === 0 && bd(a);
    }
    function Zo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Lu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ly(s), u.target.dispatchEvent(s), uy();
        } else {
          var f = Vu(i);
          return f !== null && ce(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Dd(e, t, a) {
      Zo(e) && a.delete(t);
    }
    function py() {
      Mc = !1, Ci !== null && Zo(Ci) && (Ci = null), Ga !== null && Zo(Ga) && (Ga = null), Xa !== null && Zo(Xa) && (Xa = null), fn.forEach(Dd), vr.forEach(Dd);
    }
    function tl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Mc || (Mc = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, py)));
    }
    function Ql(e) {
      if (qo.length > 0) {
        tl(qo[0], e);
        for (var t = 1; t < qo.length; t++) {
          var a = qo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ci !== null && tl(Ci, e), Ga !== null && tl(Ga, e), Xa !== null && tl(Xa, e);
      var i = function(p) {
        return tl(p, e);
      };
      fn.forEach(i), vr.forEach(i);
      for (var u = 0; u < hr.length; u++) {
        var s = hr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; hr.length > 0; ) {
        var f = hr[0];
        if (f.blockedOn !== null)
          break;
        bd(f), f.blockedOn === null && hr.shift();
      }
    }
    var Xn = k.ReactCurrentBatchConfig, ct = !0;
    function Ln(e) {
      ct = !!e;
    }
    function wn() {
      return ct;
    }
    function Kn(e, t, a) {
      var i = Lc(t), u;
      switch (i) {
        case pr:
          u = Gr;
          break;
        case Wa:
          u = Mu;
          break;
        case da:
        default:
          u = dn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Gr(e, t, a, i) {
      var u = va(), s = Xn.transition;
      Xn.transition = null;
      try {
        Rn(pr), dn(e, t, a, i);
      } finally {
        Rn(u), Xn.transition = s;
      }
    }
    function Mu(e, t, a, i) {
      var u = va(), s = Xn.transition;
      Xn.transition = null;
      try {
        Rn(Wa), dn(e, t, a, i);
      } finally {
        Rn(u), Xn.transition = s;
      }
    }
    function dn(e, t, a, i) {
      ct && Jo(e, t, a, i);
    }
    function Jo(e, t, a, i) {
      var u = Lu(e, t, a, i);
      if (u === null) {
        Oy(e, t, i, Ka, a), wd(e, i);
        return;
      }
      if (dy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (wd(e, i), t & la && Iv(e)) {
        for (; u !== null; ) {
          var s = Vu(u);
          s !== null && fy(s);
          var f = Lu(e, t, a, i);
          if (f === null && Oy(e, t, i, Ka, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Oy(e, t, i, null, a);
    }
    var Ka = null;
    function Lu(e, t, a, i) {
      Ka = null;
      var u = Jf(i), s = ss(u);
      if (s !== null) {
        var f = Yr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === He) {
            var v = Ya(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === Y) {
            var m = f.stateNode;
            if (Oc(m))
              return Ia(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ka = s, null;
    }
    function Lc(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return pr;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Wa;
        case "message": {
          var t = rc();
          switch (t) {
            case ko:
              return pr;
            case Ki:
              return Wa;
            case gi:
            case cy:
              return da;
            case Ll:
              return pa;
            default:
              return da;
          }
        }
        default:
          return da;
      }
    }
    function es(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function jr(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function kd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function zu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Xr = null, Uu = null, Wl = null;
    function nl(e) {
      return Xr = e, Uu = ts(), !0;
    }
    function zc() {
      Xr = null, Uu = null, Wl = null;
    }
    function xi() {
      if (Wl)
        return Wl;
      var e, t = Uu, a = t.length, i, u = ts(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Wl = u.slice(e, p), Wl;
    }
    function ts() {
      return "value" in Xr ? Xr.value : Xr.textContent;
    }
    function rl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Au() {
      return !0;
    }
    function ns() {
      return !1;
    }
    function sr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = Au : this.isDefaultPrevented = ns, this.isPropagationStopped = ns, this;
      }
      return Xe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Au);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Au);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Au
      }), t;
    }
    var bn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, qa = sr(bn), mr = Xe({}, bn, {
      view: 0,
      detail: 0
    }), Fr = sr(mr), Uc, rs, Gl;
    function vy(e) {
      e !== Gl && (Gl && e.type === "mousemove" ? (Uc = e.screenX - Gl.screenX, rs = e.screenY - Gl.screenY) : (Uc = 0, rs = 0), Gl = e);
    }
    var Ma = Xe({}, mr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Qt,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (vy(e), Uc);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : rs;
      }
    }), _d = sr(Ma), Od = Xe({}, Ma, {
      dataTransfer: 0
    }), Xl = sr(Od), Nd = Xe({}, mr, {
      relatedTarget: 0
    }), Ti = sr(Nd), Wv = Xe({}, bn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Gv = sr(Wv), Md = Xe({}, bn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Ac = sr(Md), hy = Xe({}, bn, {
      data: 0
    }), Xv = sr(hy), Kv = Xv, qv = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Kl = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function my(e) {
      if (e.key) {
        var t = qv[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = rl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Kl[e.keyCode] || "Unidentified" : "";
    }
    var ju = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Zv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ju[e];
      return i ? !!a[i] : !1;
    }
    function Qt(e) {
      return Zv;
    }
    var yy = Xe({}, mr, {
      key: my,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Qt,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? rl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Jv = sr(yy), gy = Xe({}, Ma, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), eh = sr(gy), th = Xe({}, mr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Qt
    }), nh = sr(th), Sy = Xe({}, bn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ha = sr(Sy), Ld = Xe({}, Ma, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ey = sr(Ld), al = [9, 13, 27, 32], as = 229, Ri = yn && "CompositionEvent" in window, il = null;
    yn && "documentMode" in document && (il = document.documentMode);
    var zd = yn && "TextEvent" in window && !il, jc = yn && (!Ri || il && il > 8 && il <= 11), rh = 32, Fc = String.fromCharCode(rh);
    function Cy() {
      ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ir("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ir("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ir("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ud = !1;
    function ah(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Hc(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Vc(e, t) {
      return e === "keydown" && t.keyCode === as;
    }
    function Ad(e, t) {
      switch (e) {
        case "keyup":
          return al.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== as;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Bc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ih(e) {
      return e.locale === "ko";
    }
    var ql = !1;
    function jd(e, t, a, i, u) {
      var s, f;
      if (Ri ? s = Hc(t) : ql ? Ad(t, i) && (s = "onCompositionEnd") : Vc(t, i) && (s = "onCompositionStart"), !s)
        return null;
      jc && !ih(i) && (!ql && s === "onCompositionStart" ? ql = nl(u) : s === "onCompositionEnd" && ql && (f = xi()));
      var p = dh(a, s);
      if (p.length > 0) {
        var v = new Xv(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Bc(i);
          m !== null && (v.data = m);
        }
      }
    }
    function Pc(e, t) {
      switch (e) {
        case "compositionend":
          return Bc(t);
        case "keypress":
          var a = t.which;
          return a !== rh ? null : (Ud = !0, Fc);
        case "textInput":
          var i = t.data;
          return i === Fc && Ud ? null : i;
        default:
          return null;
      }
    }
    function Fd(e, t) {
      if (ql) {
        if (e === "compositionend" || !Ri && Ad(e, t)) {
          var a = xi();
          return zc(), ql = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ah(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return jc && !ih(t) ? null : t.data;
        default:
          return null;
      }
    }
    function $c(e, t, a, i, u) {
      var s;
      if (zd ? s = Pc(t, i) : s = Fd(t, i), !s)
        return null;
      var f = dh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Kv("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function lh(e, t, a, i, u, s, f) {
      jd(e, t, a, i, u), $c(e, t, a, i, u);
    }
    var xy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function is(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!xy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Ty(e) {
      if (!yn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function ls() {
      ir("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function uh(e, t, a, i) {
      Eu(i);
      var u = dh(t, "onChange");
      if (u.length > 0) {
        var s = new qa("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var ll = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      uh(t, n, e, Jf(e)), Sv(o, t);
    }
    function o(e) {
      _0(e, 0);
    }
    function c(e) {
      var t = Xc(e);
      if (xl(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var h = !1;
    yn && (h = Ty("input") && (!document.documentMode || document.documentMode > 9));
    function S(e, t) {
      ll = e, n = t, ll.attachEvent("onpropertychange", N);
    }
    function C() {
      ll && (ll.detachEvent("onpropertychange", N), ll = null, n = null);
    }
    function N(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function V(e, t, a) {
      e === "focusin" ? (C(), S(t, a)) : e === "focusout" && C();
    }
    function P(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function F(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ue(e, t) {
      if (e === "click")
        return c(t);
    }
    function de(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function he(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Us(e, "number", e.value);
    }
    function pn(e, t, a, i, u, s, f) {
      var p = a ? Xc(a) : window, v, m;
      if (r(p) ? v = d : is(p) ? h ? v = de : (v = P, m = V) : F(p) && (v = ue), v) {
        var y = v(t, a);
        if (y) {
          uh(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && he(p);
    }
    function w() {
      Un("onMouseEnter", ["mouseout", "mouseover"]), Un("onMouseLeave", ["mouseout", "mouseover"]), Un("onPointerEnter", ["pointerout", "pointerover"]), Un("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function T(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !xo(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (ss(m) || Zd(m)))
          return;
      }
      if (!(!v && !p)) {
        var y;
        if (u.window === u)
          y = u;
        else {
          var R = u.ownerDocument;
          R ? y = R.defaultView || R.parentWindow : y = window;
        }
        var x, O;
        if (v) {
          var M = i.relatedTarget || i.toElement;
          if (x = a, O = M ? ss(M) : null, O !== null) {
            var L = Yr(O);
            (O !== L || O.tag !== I && O.tag !== fe) && (O = null);
          }
        } else
          x = null, O = a;
        if (x !== O) {
          var ae = _d, Re = "onMouseLeave", ge = "onMouseEnter", dt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ae = eh, Re = "onPointerLeave", ge = "onPointerEnter", dt = "pointer");
          var rt = x == null ? y : Xc(x), b = O == null ? y : Xc(O), z = new ae(Re, dt + "leave", x, i, u);
          z.target = rt, z.relatedTarget = b;
          var D = null, $ = ss(u);
          if ($ === a) {
            var se = new ae(ge, dt + "enter", O, i, u);
            se.target = b, se.relatedTarget = rt, D = se;
          }
          bT(e, z, D, x, O);
        }
      }
    }
    function _(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var B = typeof Object.is == "function" ? Object.is : _;
    function pe(e, t) {
      if (B(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!cr.call(t, s) || !B(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function be(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ke(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ue(e, t) {
      for (var a = be(e), i = 0, u = 0; a; ) {
        if (a.nodeType === pi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = be(ke(a));
      }
    }
    function Pn(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return St(e, u, s, f, p);
    }
    function St(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, R = null;
      e: for (; ; ) {
        for (var x = null; y === t && (a === 0 || y.nodeType === pi) && (f = s + a), y === i && (u === 0 || y.nodeType === pi) && (p = s + u), y.nodeType === pi && (s += y.nodeValue.length), (x = y.firstChild) !== null; )
          R = y, y = x;
        for (; ; ) {
          if (y === e)
            break e;
          if (R === t && ++v === a && (f = s), R === i && ++m === u && (p = s), (x = y.nextSibling) !== null)
            break;
          y = R, R = y.parentNode;
        }
        y = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function ul(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = Ue(e, f), y = Ue(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function oh(e) {
      return e && e.nodeType === pi;
    }
    function g0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : oh(e) ? !1 : oh(t) ? g0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function oT(e) {
      return e && e.ownerDocument && g0(e.ownerDocument.documentElement, e);
    }
    function sT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function S0() {
      for (var e = window, t = Tl(); t instanceof e.HTMLIFrameElement; ) {
        if (sT(t))
          e = t.contentWindow;
        else
          return t;
        t = Tl(e.document);
      }
      return t;
    }
    function Ry(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function cT() {
      var e = S0();
      return {
        focusedElem: e,
        selectionRange: Ry(e) ? dT(e) : null
      };
    }
    function fT(e) {
      var t = S0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && oT(a)) {
        i !== null && Ry(a) && pT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === kr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function dT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Pn(e), t || {
        start: 0,
        end: 0
      };
    }
    function pT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : ul(e, t);
    }
    var vT = yn && "documentMode" in document && document.documentMode <= 11;
    function hT() {
      ir("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Yc = null, wy = null, Hd = null, by = !1;
    function mT(e) {
      if ("selectionStart" in e && Ry(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function yT(e) {
      return e.window === e ? e.document : e.nodeType === vi ? e : e.ownerDocument;
    }
    function E0(e, t, a) {
      var i = yT(a);
      if (!(by || Yc == null || Yc !== Tl(i))) {
        var u = mT(Yc);
        if (!Hd || !pe(Hd, u)) {
          Hd = u;
          var s = dh(wy, "onSelect");
          if (s.length > 0) {
            var f = new qa("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Yc;
          }
        }
      }
    }
    function gT(e, t, a, i, u, s, f) {
      var p = a ? Xc(a) : window;
      switch (t) {
        case "focusin":
          (is(p) || p.contentEditable === "true") && (Yc = p, wy = a, Hd = null);
          break;
        case "focusout":
          Yc = null, wy = null, Hd = null;
          break;
        case "mousedown":
          by = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          by = !1, E0(e, i, u);
          break;
        case "selectionchange":
          if (vT)
            break;
        case "keydown":
        case "keyup":
          E0(e, i, u);
      }
    }
    function sh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Ic = {
      animationend: sh("Animation", "AnimationEnd"),
      animationiteration: sh("Animation", "AnimationIteration"),
      animationstart: sh("Animation", "AnimationStart"),
      transitionend: sh("Transition", "TransitionEnd")
    }, Dy = {}, C0 = {};
    yn && (C0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ic.animationend.animation, delete Ic.animationiteration.animation, delete Ic.animationstart.animation), "TransitionEvent" in window || delete Ic.transitionend.transition);
    function ch(e) {
      if (Dy[e])
        return Dy[e];
      if (!Ic[e])
        return e;
      var t = Ic[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in C0)
          return Dy[e] = t[a];
      return e;
    }
    var x0 = ch("animationend"), T0 = ch("animationiteration"), R0 = ch("animationstart"), w0 = ch("transitionend"), b0 = /* @__PURE__ */ new Map(), D0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Fu(e, t) {
      b0.set(e, t), ir(t, [e]);
    }
    function ST() {
      for (var e = 0; e < D0.length; e++) {
        var t = D0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Fu(a, "on" + i);
      }
      Fu(x0, "onAnimationEnd"), Fu(T0, "onAnimationIteration"), Fu(R0, "onAnimationStart"), Fu("dblclick", "onDoubleClick"), Fu("focusin", "onFocus"), Fu("focusout", "onBlur"), Fu(w0, "onTransitionEnd");
    }
    function ET(e, t, a, i, u, s, f) {
      var p = b0.get(t);
      if (p !== void 0) {
        var v = qa, m = t;
        switch (t) {
          case "keypress":
            if (rl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Jv;
            break;
          case "focusin":
            m = "focus", v = Ti;
            break;
          case "focusout":
            m = "blur", v = Ti;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ti;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = _d;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Xl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = nh;
            break;
          case x0:
          case T0:
          case R0:
            v = Gv;
            break;
          case w0:
            v = ha;
            break;
          case "scroll":
            v = Fr;
            break;
          case "wheel":
            v = Ey;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ac;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = eh;
            break;
        }
        var y = (s & la) !== 0;
        {
          var R = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = RT(a, p, i.type, y, R);
          if (x.length > 0) {
            var O = new v(p, m, null, i, u);
            e.push({
              event: O,
              listeners: x
            });
          }
        }
      }
    }
    ST(), w(), ls(), hT(), Cy();
    function CT(e, t, a, i, u, s, f) {
      ET(e, t, a, i, u, s);
      var p = (s & Zf) === 0;
      p && (T(e, t, a, i, u), pn(e, t, a, i, u), gT(e, t, a, i, u), lh(e, t, a, i, u));
    }
    var Vd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ky = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Vd));
    function k0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ba(i, t, void 0, e), e.currentTarget = null;
    }
    function xT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          k0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], R = y.instance, x = y.currentTarget, O = y.listener;
          if (R !== i && e.isPropagationStopped())
            return;
          k0(e, O, x), i = R;
        }
    }
    function _0(e, t) {
      for (var a = (t & la) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        xT(s, f, a);
      }
      wo();
    }
    function TT(e, t, a, i, u) {
      var s = Jf(a), f = [];
      CT(f, e, i, a, s, t), _0(f, t);
    }
    function Jt(e, t) {
      ky.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = JR(t), u = DT(e);
      i.has(u) || (O0(t, e, Ys, a), i.add(u));
    }
    function _y(e, t, a) {
      ky.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= la), O0(a, e, i, t);
    }
    var fh = "_reactListening" + Math.random().toString(36).slice(2);
    function Bd(e) {
      if (!e[fh]) {
        e[fh] = !0, hn.forEach(function(a) {
          a !== "selectionchange" && (ky.has(a) || _y(a, !1, e), _y(a, !0, e));
        });
        var t = e.nodeType === vi ? e : e.ownerDocument;
        t !== null && (t[fh] || (t[fh] = !0, _y("selectionchange", !1, t)));
      }
    }
    function O0(e, t, a, i, u) {
      var s = Kn(e, t, a), f = void 0;
      Ro && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? kd(e, t, s, f) : jr(e, t, s) : f !== void 0 ? zu(e, t, s, f) : es(e, t, s);
    }
    function N0(e, t) {
      return e === t || e.nodeType === Sn && e.parentNode === t;
    }
    function Oy(e, t, a, i, u) {
      var s = i;
      if (!(t & qf) && !(t & Ys)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === Y || v === ee) {
              var m = p.stateNode.containerInfo;
              if (N0(m, f))
                break;
              if (v === ee)
                for (var y = p.return; y !== null; ) {
                  var R = y.tag;
                  if (R === Y || R === ee) {
                    var x = y.stateNode.containerInfo;
                    if (N0(x, f))
                      return;
                  }
                  y = y.return;
                }
              for (; m !== null; ) {
                var O = ss(m);
                if (O === null)
                  return;
                var M = O.tag;
                if (M === I || M === fe) {
                  p = s = O;
                  continue e;
                }
                m = m.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Sv(function() {
        return TT(e, t, a, s);
      });
    }
    function Pd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function RT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, x = R.stateNode, O = R.tag;
        if (O === I && x !== null && (y = x, p !== null)) {
          var M = Yi(m, p);
          M != null && v.push(Pd(m, M, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function dh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === I && f !== null) {
          var v = f, m = Yi(u, a);
          m != null && i.unshift(Pd(u, m, v));
          var y = Yi(u, t);
          y != null && i.push(Pd(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function Qc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== I);
      return e || null;
    }
    function wT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Qc(s))
        u++;
      for (var f = 0, p = i; p; p = Qc(p))
        f++;
      for (; u - f > 0; )
        a = Qc(a), u--;
      for (; f - u > 0; )
        i = Qc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Qc(a), i = Qc(i);
      }
      return null;
    }
    function M0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === I && y !== null) {
          var x = y;
          if (u) {
            var O = Yi(p, s);
            O != null && f.unshift(Pd(p, O, x));
          } else if (!u) {
            var M = Yi(p, s);
            M != null && f.push(Pd(p, M, x));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function bT(e, t, a, i, u) {
      var s = i && u ? wT(i, u) : null;
      i !== null && M0(e, t, i, s, !1), u !== null && a !== null && M0(e, a, u, s, !0);
    }
    function DT(e, t) {
      return e + "__bubble";
    }
    var ma = !1, $d = "dangerouslySetInnerHTML", ph = "suppressContentEditableWarning", Hu = "suppressHydrationWarning", L0 = "autoFocus", us = "children", os = "style", vh = "__html", Ny, hh, Yd, z0, mh, U0, A0;
    Ny = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, hh = function(e, t) {
      Gf(e, t), Ps(e, t), mv(e, t, {
        registrationNameDependencies: mn,
        possibleRegistrationNames: kn
      });
    }, U0 = yn && !document.documentMode, Yd = function(e, t, a) {
      if (!ma) {
        var i = yh(a), u = yh(t);
        u !== i && (ma = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, z0 = function(e) {
      if (!ma) {
        ma = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, mh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, A0 = function(e, t) {
      var a = e.namespaceURI === di ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var kT = /\r\n?/g, _T = /\u0000|\uFFFD/g;
    function yh(e) {
      At(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(kT, `
`).replace(_T, "");
    }
    function gh(e, t, a, i) {
      var u = yh(t), s = yh(e);
      if (s !== u && (i && (ma || (ma = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ft))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function j0(e) {
      return e.nodeType === vi ? e : e.ownerDocument;
    }
    function OT() {
    }
    function Sh(e) {
      e.onclick = OT;
    }
    function NT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === os)
            f && Object.freeze(f), cv(t, f);
          else if (s === $d) {
            var p = f ? f[vh] : void 0;
            p != null && Zp(t, p);
          } else if (s === us)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && mu(t, f);
            } else typeof f == "number" && mu(t, "" + f);
          else s === ph || s === Hu || s === L0 || (mn.hasOwnProperty(s) ? f != null && (typeof f != "function" && mh(s, f), s === "onScroll" && Jt("scroll", t)) : f != null && ii(t, s, f, u));
        }
    }
    function MT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === os ? cv(e, f) : s === $d ? Zp(e, f) : s === us ? mu(e, f) : ii(e, s, f, i);
      }
    }
    function LT(e, t, a, i) {
      var u, s = j0(a), f, p = i;
      if (p === di && (p = Bf(e)), p === di) {
        if (u = Pi(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var m = v.firstChild;
          f = v.removeChild(m);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var y = f;
          t.multiple ? y.multiple = !0 : t.size && (y.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === di && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !cr.call(Ny, e) && (Ny[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function zT(e, t) {
      return j0(t).createTextNode(e);
    }
    function UT(e, t, a, i) {
      var u = Pi(t, a);
      hh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Jt("cancel", e), Jt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Jt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Vd.length; f++)
            Jt(Vd[f], e);
          s = a;
          break;
        case "source":
          Jt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Jt("error", e), Jt("load", e), s = a;
          break;
        case "details":
          Jt("toggle", e), s = a;
          break;
        case "input":
          fi(e, a), s = Ns(e, a), Jt("invalid", e);
          break;
        case "option":
          vu(e, a), s = a;
          break;
        case "select":
          js(e, a), s = Af(e, a), Jt("invalid", e);
          break;
        case "textarea":
          Ff(e, a), s = jf(e, a), Jt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Vs(t, s), NT(t, e, i, s, u), t) {
        case "input":
          Bi(e), Lf(e, a, !1);
          break;
        case "textarea":
          Bi(e), Kp(e);
          break;
        case "option":
          Wm(e, a);
          break;
        case "select":
          Xm(e, a);
          break;
        default:
          typeof s.onClick == "function" && Sh(e);
          break;
      }
    }
    function AT(e, t, a, i, u) {
      hh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Ns(e, a), p = Ns(e, i), s = [];
          break;
        case "select":
          f = Af(e, a), p = Af(e, i), s = [];
          break;
        case "textarea":
          f = jf(e, a), p = jf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Sh(e);
          break;
      }
      Vs(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === os) {
            var R = f[v];
            for (m in R)
              R.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else v === $d || v === us || v === ph || v === Hu || v === L0 || (mn.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], O = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === O || x == null && O == null))
          if (v === os)
            if (x && Object.freeze(x), O) {
              for (m in O)
                O.hasOwnProperty(m) && (!x || !x.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in x)
                x.hasOwnProperty(m) && O[m] !== x[m] && (y || (y = {}), y[m] = x[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = x;
          else if (v === $d) {
            var M = x ? x[vh] : void 0, L = O ? O[vh] : void 0;
            M != null && L !== M && (s = s || []).push(v, M);
          } else v === us ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === ph || v === Hu || (mn.hasOwnProperty(v) ? (x != null && (typeof x != "function" && mh(v, x), v === "onScroll" && Jt("scroll", e)), !s && O !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return y && (ay(y, p[os]), (s = s || []).push(os, y)), s;
    }
    function jT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Ms(e, u);
      var s = Pi(a, i), f = Pi(a, u);
      switch (MT(e, t, s, f), a) {
        case "input":
          pu(e, u);
          break;
        case "textarea":
          Xp(e, u);
          break;
        case "select":
          Km(e, u);
          break;
      }
    }
    function FT(e) {
      {
        var t = e.toLowerCase();
        return Eo.hasOwnProperty(t) && Eo[t] || null;
      }
    }
    function HT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Pi(t, a), hh(t, a), t) {
        case "dialog":
          Jt("cancel", e), Jt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Jt("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < Vd.length; m++)
            Jt(Vd[m], e);
          break;
        case "source":
          Jt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Jt("error", e), Jt("load", e);
          break;
        case "details":
          Jt("toggle", e);
          break;
        case "input":
          fi(e, a), Jt("invalid", e);
          break;
        case "option":
          vu(e, a);
          break;
        case "select":
          js(e, a), Jt("invalid", e);
          break;
        case "textarea":
          Ff(e, a), Jt("invalid", e);
          break;
      }
      Vs(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var y = e.attributes, R = 0; R < y.length; R++) {
          var x = y[R].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(y[R].name);
          }
        }
      }
      var O = null;
      for (var M in a)
        if (a.hasOwnProperty(M)) {
          var L = a[M];
          if (M === us)
            typeof L == "string" ? e.textContent !== L && (a[Hu] !== !0 && gh(e.textContent, L, s, f), O = [us, L]) : typeof L == "number" && e.textContent !== "" + L && (a[Hu] !== !0 && gh(e.textContent, L, s, f), O = [us, "" + L]);
          else if (mn.hasOwnProperty(M))
            L != null && (typeof L != "function" && mh(M, L), M === "onScroll" && Jt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ae = void 0, Re = vt(M);
            if (a[Hu] !== !0) {
              if (!(M === ph || M === Hu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              M === "value" || M === "checked" || M === "selected")) {
                if (M === $d) {
                  var ge = e.innerHTML, dt = L ? L[vh] : void 0;
                  if (dt != null) {
                    var rt = A0(e, dt);
                    rt !== ge && Yd(M, ge, rt);
                  }
                } else if (M === os) {
                  if (v.delete(M), U0) {
                    var b = ny(L);
                    ae = e.getAttribute("style"), b !== ae && Yd(M, ae, b);
                  }
                } else if (p && !qe)
                  v.delete(M.toLowerCase()), ae = io(e, M, L), L !== ae && Yd(M, ae, L);
                else if (!mt(M, Re, p) && !_n(M, L, Re, p)) {
                  var z = !1;
                  if (Re !== null)
                    v.delete(Re.attributeName), ae = fu(e, M, L, Re);
                  else {
                    var D = i;
                    if (D === di && (D = Bf(t)), D === di)
                      v.delete(M.toLowerCase());
                    else {
                      var $ = FT(M);
                      $ !== null && $ !== M && (z = !0, v.delete($)), v.delete(M);
                    }
                    ae = io(e, M, L);
                  }
                  var se = qe;
                  !se && L !== ae && !z && Yd(M, ae, L);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Hu] !== !0 && z0(v), t) {
        case "input":
          Bi(e), Lf(e, a, !0);
          break;
        case "textarea":
          Bi(e), Kp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Sh(e);
          break;
      }
      return O;
    }
    function VT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function My(e, t) {
      {
        if (ma)
          return;
        ma = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (ma)
          return;
        ma = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t, a) {
      {
        if (ma)
          return;
        ma = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t) {
      {
        if (t === "" || ma)
          return;
        ma = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function BT(e, t, a) {
      switch (t) {
        case "input":
          Ls(e, a);
          return;
        case "textarea":
          Zm(e, a);
          return;
        case "select":
          qm(e, a);
          return;
      }
    }
    var Id = function() {
    }, Qd = function() {
    };
    {
      var PT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], F0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], $T = F0.concat(["button"]), YT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], H0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Qd = function(e, t) {
        var a = Xe({}, e || H0), i = {
          tag: t
        };
        return F0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), $T.indexOf(t) !== -1 && (a.pTagInButtonScope = null), PT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var IT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return YT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, QT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, V0 = {};
      Id = function(e, t, a) {
        a = a || H0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = IT(e, u) ? null : i, f = s ? null : QT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!V0[m]) {
            V0[m] = !0;
            var y = e, R = "";
            if (e === "#text" ? /\S/.test(t) ? y = "Text nodes" : (y = "Whitespace text nodes", R = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : y = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", y, v, R, x);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", y, v);
          }
        }
      };
    }
    var Eh = "suppressHydrationWarning", Ch = "$", xh = "/$", Wd = "$?", Gd = "$!", WT = "style", Ay = null, jy = null;
    function GT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case vi:
        case $f: {
          t = i === vi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Pf(null, "");
          break;
        }
        default: {
          var s = i === Sn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Pf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Qd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function XT(e, t, a) {
      {
        var i = e, u = Pf(i.namespace, t), s = Qd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function vk(e) {
      return e;
    }
    function KT(e) {
      Ay = wn(), jy = cT();
      var t = null;
      return Ln(!1), t;
    }
    function qT(e) {
      fT(jy), Ln(Ay), Ay = null, jy = null;
    }
    function ZT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Id(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Qd(f.ancestorInfo, e);
          Id(null, p, v);
        }
        s = f.namespace;
      }
      var m = LT(e, t, a, s);
      return qd(u, m), Iy(m, t), m;
    }
    function JT(e, t) {
      e.appendChild(t);
    }
    function eR(e, t, a, i, u) {
      switch (UT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function tR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Qd(f.ancestorInfo, t);
          Id(null, p, v);
        }
      }
      return AT(e, t, a, i);
    }
    function Fy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function nR(e, t, a, i) {
      {
        var u = a;
        Id(null, e, u.ancestorInfo);
      }
      var s = zT(e, t);
      return qd(i, s), s;
    }
    function rR() {
      var e = window.event;
      return e === void 0 ? da : Lc(e.type);
    }
    var Hy = typeof setTimeout == "function" ? setTimeout : void 0, aR = typeof clearTimeout == "function" ? clearTimeout : void 0, Vy = -1, B0 = typeof Promise == "function" ? Promise : void 0, iR = typeof queueMicrotask == "function" ? queueMicrotask : typeof B0 < "u" ? function(e) {
      return B0.resolve(null).then(e).catch(lR);
    } : Hy;
    function lR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function uR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function oR(e, t, a, i, u, s) {
      jT(e, t, a, i, u), Iy(e, u);
    }
    function P0(e) {
      mu(e, "");
    }
    function sR(e, t, a) {
      e.nodeValue = a;
    }
    function cR(e, t) {
      e.appendChild(t);
    }
    function fR(e, t) {
      var a;
      e.nodeType === Sn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Sh(a);
    }
    function dR(e, t, a) {
      e.insertBefore(t, a);
    }
    function pR(e, t, a) {
      e.nodeType === Sn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function vR(e, t) {
      e.removeChild(t);
    }
    function hR(e, t) {
      e.nodeType === Sn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function By(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Sn) {
          var s = u.data;
          if (s === xh)
            if (i === 0) {
              e.removeChild(u), Ql(t);
              return;
            } else
              i--;
          else (s === Ch || s === Wd || s === Gd) && i++;
        }
        a = u;
      } while (a);
      Ql(t);
    }
    function mR(e, t) {
      e.nodeType === Sn ? By(e.parentNode, t) : e.nodeType === kr && By(e, t), Ql(e);
    }
    function yR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function gR(e) {
      e.nodeValue = "";
    }
    function SR(e, t) {
      e = e;
      var a = t[WT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Hs("display", i);
    }
    function ER(e, t) {
      e.nodeValue = t;
    }
    function CR(e) {
      e.nodeType === kr ? e.textContent = "" : e.nodeType === vi && e.documentElement && e.removeChild(e.documentElement);
    }
    function xR(e, t, a) {
      return e.nodeType !== kr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function TR(e, t) {
      return t === "" || e.nodeType !== pi ? null : e;
    }
    function RR(e) {
      return e.nodeType !== Sn ? null : e;
    }
    function $0(e) {
      return e.data === Wd;
    }
    function Py(e) {
      return e.data === Gd;
    }
    function wR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function bR(e, t) {
      e._reactRetry = t;
    }
    function Th(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === kr || t === pi)
          break;
        if (t === Sn) {
          var a = e.data;
          if (a === Ch || a === Gd || a === Wd)
            break;
          if (a === xh)
            return null;
        }
      }
      return e;
    }
    function Xd(e) {
      return Th(e.nextSibling);
    }
    function DR(e) {
      return Th(e.firstChild);
    }
    function kR(e) {
      return Th(e.firstChild);
    }
    function _R(e) {
      return Th(e.nextSibling);
    }
    function OR(e, t, a, i, u, s, f) {
      qd(s, e), Iy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & Ke) !== Ce;
      return HT(e, t, a, p, i, m, f);
    }
    function NR(e, t, a, i) {
      return qd(a, e), a.mode & Ke, VT(e, t);
    }
    function MR(e, t) {
      qd(t, e);
    }
    function LR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === xh) {
            if (a === 0)
              return Xd(t);
            a--;
          } else (i === Ch || i === Gd || i === Wd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Y0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === Ch || i === Gd || i === Wd) {
            if (a === 0)
              return t;
            a--;
          } else i === xh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function zR(e) {
      Ql(e);
    }
    function UR(e) {
      Ql(e);
    }
    function AR(e) {
      return e !== "head" && e !== "body";
    }
    function jR(e, t, a, i) {
      var u = !0;
      gh(t.nodeValue, a, i, u);
    }
    function FR(e, t, a, i, u, s) {
      if (t[Eh] !== !0) {
        var f = !0;
        gh(i.nodeValue, u, s, f);
      }
    }
    function HR(e, t) {
      t.nodeType === kr ? My(e, t) : t.nodeType === Sn || Ly(e, t);
    }
    function VR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === kr ? My(a, t) : t.nodeType === Sn || Ly(a, t));
      }
    }
    function BR(e, t, a, i, u) {
      (u || t[Eh] !== !0) && (i.nodeType === kr ? My(a, i) : i.nodeType === Sn || Ly(a, i));
    }
    function PR(e, t, a) {
      zy(e, t);
    }
    function $R(e, t) {
      Uy(e, t);
    }
    function YR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && zy(i, t);
      }
    }
    function IR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Uy(a, t);
      }
    }
    function QR(e, t, a, i, u, s) {
      (s || t[Eh] !== !0) && zy(a, i);
    }
    function WR(e, t, a, i, u) {
      (u || t[Eh] !== !0) && Uy(a, i);
    }
    function GR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function XR(e) {
      Bd(e);
    }
    var Wc = Math.random().toString(36).slice(2), Gc = "__reactFiber$" + Wc, $y = "__reactProps$" + Wc, Kd = "__reactContainer$" + Wc, Yy = "__reactEvents$" + Wc, KR = "__reactListeners$" + Wc, qR = "__reactHandles$" + Wc;
    function ZR(e) {
      delete e[Gc], delete e[$y], delete e[Yy], delete e[KR], delete e[qR];
    }
    function qd(e, t) {
      t[Gc] = e;
    }
    function Rh(e, t) {
      t[Kd] = e;
    }
    function I0(e) {
      e[Kd] = null;
    }
    function Zd(e) {
      return !!e[Kd];
    }
    function ss(e) {
      var t = e[Gc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Kd] || a[Gc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Y0(e); u !== null; ) {
              var s = u[Gc];
              if (s)
                return s;
              u = Y0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Vu(e) {
      var t = e[Gc] || e[Kd];
      return t && (t.tag === I || t.tag === fe || t.tag === He || t.tag === Y) ? t : null;
    }
    function Xc(e) {
      if (e.tag === I || e.tag === fe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function wh(e) {
      return e[$y] || null;
    }
    function Iy(e, t) {
      e[$y] = t;
    }
    function JR(e) {
      var t = e[Yy];
      return t === void 0 && (t = e[Yy] = /* @__PURE__ */ new Set()), t;
    }
    var Q0 = {}, W0 = k.ReactDebugCurrentFrame;
    function bh(e) {
      if (e) {
        var t = e._owner, a = Cl(e.type, e._source, t ? t.type : null);
        W0.setExtraStackFrame(a);
      } else
        W0.setExtraStackFrame(null);
    }
    function wi(e, t, a, i, u) {
      {
        var s = Function.call.bind(cr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              p = m;
            }
            p && !(p instanceof Error) && (bh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), bh(null)), p instanceof Error && !(p.message in Q0) && (Q0[p.message] = !0, bh(u), g("Failed %s type: %s", a, p.message), bh(null));
          }
      }
    }
    var Qy = [], Dh;
    Dh = [];
    var Zl = -1;
    function Bu(e) {
      return {
        current: e
      };
    }
    function Hr(e, t) {
      if (Zl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Dh[Zl] && g("Unexpected Fiber popped."), e.current = Qy[Zl], Qy[Zl] = null, Dh[Zl] = null, Zl--;
    }
    function Vr(e, t, a) {
      Zl++, Qy[Zl] = e.current, Dh[Zl] = a, e.current = t;
    }
    var Wy;
    Wy = {};
    var La = {};
    Object.freeze(La);
    var Jl = Bu(La), ol = Bu(!1), Gy = La;
    function Kc(e, t, a) {
      return a && sl(t) ? Gy : Jl.current;
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function qc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return La;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ye(e) || "Unknown";
          wi(i, s, "context", p);
        }
        return u && G0(e, t, s), s;
      }
    }
    function kh() {
      return ol.current;
    }
    function sl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function _h(e) {
      Hr(ol, e), Hr(Jl, e);
    }
    function Xy(e) {
      Hr(ol, e), Hr(Jl, e);
    }
    function X0(e, t, a) {
      {
        if (Jl.current !== La)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(Jl, t, e), Vr(ol, a, e);
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ye(e) || "Unknown";
            Wy[s] || (Wy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ye(e) || "Unknown";
          wi(u, f, "child context", v);
        }
        return Xe({}, a, f);
      }
    }
    function Oh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || La;
        return Gy = Jl.current, Vr(Jl, a, e), Vr(ol, ol.current, e), !0;
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = K0(e, t, Gy);
          i.__reactInternalMemoizedMergedChildContext = u, Hr(ol, e), Hr(Jl, e), Vr(Jl, u, e), Vr(ol, a, e);
        } else
          Hr(ol, e), Vr(ol, a, e);
      }
    }
    function e1(e) {
      {
        if (!Ml(e) || e.tag !== J)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Y:
              return t.stateNode.context;
            case J: {
              var a = t.type;
              if (sl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Pu = 0, Nh = 1, eu = null, Ky = !1, qy = !1;
    function Z0(e) {
      eu === null ? eu = [e] : eu.push(e);
    }
    function t1(e) {
      Ky = !0, Z0(e);
    }
    function J0() {
      Ky && $u();
    }
    function $u() {
      if (!qy && eu !== null) {
        qy = !0;
        var e = 0, t = va();
        try {
          var a = !0, i = eu;
          for (Rn(pr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          eu = null, Ky = !1;
        } catch (s) {
          throw eu !== null && (eu = eu.slice(e + 1)), td(ko, $u), s;
        } finally {
          Rn(t), qy = !1;
        }
      }
      return null;
    }
    var Zc = [], Jc = 0, Mh = null, Lh = 0, Za = [], Ja = 0, cs = null, tu = 1, nu = "";
    function n1(e) {
      return ds(), (e.flags & Pa) !== Ee;
    }
    function r1(e) {
      return ds(), Lh;
    }
    function a1() {
      var e = nu, t = tu, a = t & ~i1(t);
      return a.toString(32) + e;
    }
    function fs(e, t) {
      ds(), Zc[Jc++] = Lh, Zc[Jc++] = Mh, Mh = e, Lh = t;
    }
    function eE(e, t, a) {
      ds(), Za[Ja++] = tu, Za[Ja++] = nu, Za[Ja++] = cs, cs = e;
      var i = tu, u = nu, s = zh(i) - 1, f = i & ~(1 << s), p = a + 1, v = zh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), x = f >> m, O = s - m, M = zh(t) + O, L = p << O, ae = L | x, Re = R + u;
        tu = 1 << M | ae, nu = Re;
      } else {
        var ge = p << s, dt = ge | f, rt = u;
        tu = 1 << v | dt, nu = rt;
      }
    }
    function Zy(e) {
      ds();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        fs(e, a), eE(e, a, i);
      }
    }
    function zh(e) {
      return 32 - xn(e);
    }
    function i1(e) {
      return 1 << zh(e) - 1;
    }
    function Jy(e) {
      for (; e === Mh; )
        Mh = Zc[--Jc], Zc[Jc] = null, Lh = Zc[--Jc], Zc[Jc] = null;
      for (; e === cs; )
        cs = Za[--Ja], Za[Ja] = null, nu = Za[--Ja], Za[Ja] = null, tu = Za[--Ja], Za[Ja] = null;
    }
    function l1() {
      return ds(), cs !== null ? {
        id: tu,
        overflow: nu
      } : null;
    }
    function u1(e, t) {
      ds(), Za[Ja++] = tu, Za[Ja++] = nu, Za[Ja++] = cs, tu = t.id, nu = t.overflow, cs = e;
    }
    function ds() {
      gr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var yr = null, ei = null, bi = !1, ps = !1, Yu = null;
    function o1() {
      bi && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function tE() {
      ps = !0;
    }
    function s1() {
      return ps;
    }
    function c1(e) {
      var t = e.stateNode.containerInfo;
      return ei = kR(t), yr = e, bi = !0, Yu = null, ps = !1, !0;
    }
    function f1(e, t, a) {
      return ei = _R(t), yr = e, bi = !0, Yu = null, ps = !1, a !== null && u1(e, a), !0;
    }
    function nE(e, t) {
      switch (e.tag) {
        case Y: {
          HR(e.stateNode.containerInfo, t);
          break;
        }
        case I: {
          var a = (e.mode & Ke) !== Ce;
          BR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case He: {
          var i = e.memoizedState;
          i.dehydrated !== null && VR(i.dehydrated, t);
          break;
        }
      }
    }
    function rE(e, t) {
      nE(e, t);
      var a = hD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ua) : i.push(a);
    }
    function eg(e, t) {
      {
        if (ps)
          return;
        switch (e.tag) {
          case Y: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case I:
                var i = t.type;
                t.pendingProps, PR(a, i);
                break;
              case fe:
                var u = t.pendingProps;
                $R(a, u);
                break;
            }
            break;
          }
          case I: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case I: {
                var v = t.type, m = t.pendingProps, y = (e.mode & Ke) !== Ce;
                QR(
                  s,
                  f,
                  p,
                  v,
                  m,
                  // TODO: Delete this argument when we remove the legacy root API.
                  y
                );
                break;
              }
              case fe: {
                var R = t.pendingProps, x = (e.mode & Ke) !== Ce;
                WR(
                  s,
                  f,
                  p,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case He: {
            var O = e.memoizedState, M = O.dehydrated;
            if (M !== null) switch (t.tag) {
              case I:
                var L = t.type;
                t.pendingProps, YR(M, L);
                break;
              case fe:
                var ae = t.pendingProps;
                IR(M, ae);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function aE(e, t) {
      t.flags = t.flags & ~Or | Kt, eg(e, t);
    }
    function iE(e, t) {
      switch (e.tag) {
        case I: {
          var a = e.type;
          e.pendingProps;
          var i = xR(t, a);
          return i !== null ? (e.stateNode = i, yr = e, ei = DR(i), !0) : !1;
        }
        case fe: {
          var u = e.pendingProps, s = TR(t, u);
          return s !== null ? (e.stateNode = s, yr = e, ei = null, !0) : !1;
        }
        case He: {
          var f = RR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: l1(),
              retryLane: zr
            };
            e.memoizedState = p;
            var v = mD(f);
            return v.return = e, e.child = v, yr = e, ei = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function tg(e) {
      return (e.mode & Ke) !== Ce && (e.flags & Se) === Ee;
    }
    function ng(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function rg(e) {
      if (bi) {
        var t = ei;
        if (!t) {
          tg(e) && (eg(yr, e), ng()), aE(yr, e), bi = !1, yr = e;
          return;
        }
        var a = t;
        if (!iE(e, t)) {
          tg(e) && (eg(yr, e), ng()), t = Xd(a);
          var i = yr;
          if (!t || !iE(e, t)) {
            aE(yr, e), bi = !1, yr = e;
            return;
          }
          rE(i, a);
        }
      }
    }
    function d1(e, t, a) {
      var i = e.stateNode, u = !ps, s = OR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function p1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = NR(t, a, e);
      if (i) {
        var u = yr;
        if (u !== null)
          switch (u.tag) {
            case Y: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ke) !== Ce;
              jR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case I: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & Ke) !== Ce;
              FR(
                p,
                v,
                m,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                y
              );
              break;
            }
          }
      }
      return i;
    }
    function v1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      MR(a, e);
    }
    function h1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return LR(a);
    }
    function lE(e) {
      for (var t = e.return; t !== null && t.tag !== I && t.tag !== Y && t.tag !== He; )
        t = t.return;
      yr = t;
    }
    function Uh(e) {
      if (e !== yr)
        return !1;
      if (!bi)
        return lE(e), bi = !0, !1;
      if (e.tag !== Y && (e.tag !== I || AR(e.type) && !Fy(e.type, e.memoizedProps))) {
        var t = ei;
        if (t)
          if (tg(e))
            uE(e), ng();
          else
            for (; t; )
              rE(e, t), t = Xd(t);
      }
      return lE(e), e.tag === He ? ei = h1(e) : ei = yr ? Xd(e.stateNode) : null, !0;
    }
    function m1() {
      return bi && ei !== null;
    }
    function uE(e) {
      for (var t = ei; t; )
        nE(e, t), t = Xd(t);
    }
    function ef() {
      yr = null, ei = null, bi = !1, ps = !1;
    }
    function oE() {
      Yu !== null && (tx(Yu), Yu = null);
    }
    function gr() {
      return bi;
    }
    function ag(e) {
      Yu === null ? Yu = [e] : Yu.push(e);
    }
    var y1 = k.ReactCurrentBatchConfig, g1 = null;
    function S1() {
      return y1.transition;
    }
    var Di = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var E1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Mt && (t = a), a = a.return;
        return t;
      }, vs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Jd = [], ep = [], tp = [], np = [], rp = [], ap = [], hs = /* @__PURE__ */ new Set();
      Di.recordUnsafeLifecycleWarnings = function(e, t) {
        hs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Jd.push(e), e.mode & Mt && typeof t.UNSAFE_componentWillMount == "function" && ep.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && tp.push(e), e.mode & Mt && typeof t.UNSAFE_componentWillReceiveProps == "function" && np.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && rp.push(e), e.mode & Mt && typeof t.UNSAFE_componentWillUpdate == "function" && ap.push(e));
      }, Di.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Jd.length > 0 && (Jd.forEach(function(x) {
          e.add(Ye(x) || "Component"), hs.add(x.type);
        }), Jd = []);
        var t = /* @__PURE__ */ new Set();
        ep.length > 0 && (ep.forEach(function(x) {
          t.add(Ye(x) || "Component"), hs.add(x.type);
        }), ep = []);
        var a = /* @__PURE__ */ new Set();
        tp.length > 0 && (tp.forEach(function(x) {
          a.add(Ye(x) || "Component"), hs.add(x.type);
        }), tp = []);
        var i = /* @__PURE__ */ new Set();
        np.length > 0 && (np.forEach(function(x) {
          i.add(Ye(x) || "Component"), hs.add(x.type);
        }), np = []);
        var u = /* @__PURE__ */ new Set();
        rp.length > 0 && (rp.forEach(function(x) {
          u.add(Ye(x) || "Component"), hs.add(x.type);
        }), rp = []);
        var s = /* @__PURE__ */ new Set();
        if (ap.length > 0 && (ap.forEach(function(x) {
          s.add(Ye(x) || "Component"), hs.add(x.type);
        }), ap = []), t.size > 0) {
          var f = vs(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = vs(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = vs(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = vs(e);
          Be(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = vs(a);
          Be(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = vs(u);
          Be(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var Ah = /* @__PURE__ */ new Map(), sE = /* @__PURE__ */ new Set();
      Di.recordLegacyContextWarning = function(e, t) {
        var a = E1(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!sE.has(e.type)) {
          var i = Ah.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ah.set(a, i)), i.push(e));
        }
      }, Di.flushLegacyContextWarning = function() {
        Ah.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ye(s) || "Component"), sE.add(s.type);
            });
            var u = vs(i);
            try {
              Pt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              rn();
            }
          }
        });
      }, Di.discardPendingWarnings = function() {
        Jd = [], ep = [], tp = [], np = [], rp = [], ap = [], Ah = /* @__PURE__ */ new Map();
      };
    }
    var ig, lg, ug, og, sg, cE = function(e, t) {
    };
    ig = !1, lg = !1, ug = {}, og = {}, sg = {}, cE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        og[a] || (og[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function C1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function ip(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Mt || tt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== J) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !C1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ye(e) || "Component";
          ug[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ug[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== J)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          ja(i, "ref");
          var m = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === m)
            return t.ref;
          var y = function(R) {
            var x = v.refs;
            R === null ? delete x[m] : x[m] = R;
          };
          return y._stringRef = m, y;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function jh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Fh(e) {
      {
        var t = Ye(e) || "Component";
        if (sg[t])
          return;
        sg[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function fE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function dE(e) {
      function t(b, z) {
        if (e) {
          var D = b.deletions;
          D === null ? (b.deletions = [z], b.flags |= ua) : D.push(z);
        }
      }
      function a(b, z) {
        if (!e)
          return null;
        for (var D = z; D !== null; )
          t(b, D), D = D.sibling;
        return null;
      }
      function i(b, z) {
        for (var D = /* @__PURE__ */ new Map(), $ = z; $ !== null; )
          $.key !== null ? D.set($.key, $) : D.set($.index, $), $ = $.sibling;
        return D;
      }
      function u(b, z) {
        var D = Rs(b, z);
        return D.index = 0, D.sibling = null, D;
      }
      function s(b, z, D) {
        if (b.index = D, !e)
          return b.flags |= Pa, z;
        var $ = b.alternate;
        if ($ !== null) {
          var se = $.index;
          return se < z ? (b.flags |= Kt, z) : se;
        } else
          return b.flags |= Kt, z;
      }
      function f(b) {
        return e && b.alternate === null && (b.flags |= Kt), b;
      }
      function p(b, z, D, $) {
        if (z === null || z.tag !== fe) {
          var se = a0(D, b.mode, $);
          return se.return = b, se;
        } else {
          var le = u(z, D);
          return le.return = b, le;
        }
      }
      function v(b, z, D, $) {
        var se = D.type;
        if (se === Ai)
          return y(b, z, D.props.children, $, D.key);
        if (z !== null && (z.elementType === se || // Keep this check inline so it only runs on the false path:
        yx(z, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof se == "object" && se !== null && se.$$typeof === Pe && fE(se) === z.type)) {
          var le = u(z, D.props);
          return le.ref = ip(b, z, D), le.return = b, le._debugSource = D._source, le._debugOwner = D._owner, le;
        }
        var Le = r0(D, b.mode, $);
        return Le.ref = ip(b, z, D), Le.return = b, Le;
      }
      function m(b, z, D, $) {
        if (z === null || z.tag !== ee || z.stateNode.containerInfo !== D.containerInfo || z.stateNode.implementation !== D.implementation) {
          var se = i0(D, b.mode, $);
          return se.return = b, se;
        } else {
          var le = u(z, D.children || []);
          return le.return = b, le;
        }
      }
      function y(b, z, D, $, se) {
        if (z === null || z.tag !== xe) {
          var le = to(D, b.mode, $, se);
          return le.return = b, le;
        } else {
          var Le = u(z, D);
          return Le.return = b, Le;
        }
      }
      function R(b, z, D) {
        if (typeof z == "string" && z !== "" || typeof z == "number") {
          var $ = a0("" + z, b.mode, D);
          return $.return = b, $;
        }
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Ra: {
              var se = r0(z, b.mode, D);
              return se.ref = ip(b, null, z), se.return = b, se;
            }
            case br: {
              var le = i0(z, b.mode, D);
              return le.return = b, le;
            }
            case Pe: {
              var Le = z._payload, Ve = z._init;
              return R(b, Ve(Le), D);
            }
          }
          if (Qn(z) || We(z)) {
            var zt = to(z, b.mode, D, null);
            return zt.return = b, zt;
          }
          jh(b, z);
        }
        return typeof z == "function" && Fh(b), null;
      }
      function x(b, z, D, $) {
        var se = z !== null ? z.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return se !== null ? null : p(b, z, "" + D, $);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Ra:
              return D.key === se ? v(b, z, D, $) : null;
            case br:
              return D.key === se ? m(b, z, D, $) : null;
            case Pe: {
              var le = D._payload, Le = D._init;
              return x(b, z, Le(le), $);
            }
          }
          if (Qn(D) || We(D))
            return se !== null ? null : y(b, z, D, $, null);
          jh(b, D);
        }
        return typeof D == "function" && Fh(b), null;
      }
      function O(b, z, D, $, se) {
        if (typeof $ == "string" && $ !== "" || typeof $ == "number") {
          var le = b.get(D) || null;
          return p(z, le, "" + $, se);
        }
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Ra: {
              var Le = b.get($.key === null ? D : $.key) || null;
              return v(z, Le, $, se);
            }
            case br: {
              var Ve = b.get($.key === null ? D : $.key) || null;
              return m(z, Ve, $, se);
            }
            case Pe:
              var zt = $._payload, Et = $._init;
              return O(b, z, D, Et(zt), se);
          }
          if (Qn($) || We($)) {
            var zn = b.get(D) || null;
            return y(z, zn, $, se, null);
          }
          jh(z, $);
        }
        return typeof $ == "function" && Fh(z), null;
      }
      function M(b, z, D) {
        {
          if (typeof b != "object" || b === null)
            return z;
          switch (b.$$typeof) {
            case Ra:
            case br:
              cE(b, D);
              var $ = b.key;
              if (typeof $ != "string")
                break;
              if (z === null) {
                z = /* @__PURE__ */ new Set(), z.add($);
                break;
              }
              if (!z.has($)) {
                z.add($);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", $);
              break;
            case Pe:
              var se = b._payload, le = b._init;
              M(le(se), z, D);
              break;
          }
        }
        return z;
      }
      function L(b, z, D, $) {
        for (var se = null, le = 0; le < D.length; le++) {
          var Le = D[le];
          se = M(Le, se, b);
        }
        for (var Ve = null, zt = null, Et = z, zn = 0, Ct = 0, Dn = null; Et !== null && Ct < D.length; Ct++) {
          Et.index > Ct ? (Dn = Et, Et = null) : Dn = Et.sibling;
          var Pr = x(b, Et, D[Ct], $);
          if (Pr === null) {
            Et === null && (Et = Dn);
            break;
          }
          e && Et && Pr.alternate === null && t(b, Et), zn = s(Pr, zn, Ct), zt === null ? Ve = Pr : zt.sibling = Pr, zt = Pr, Et = Dn;
        }
        if (Ct === D.length) {
          if (a(b, Et), gr()) {
            var wr = Ct;
            fs(b, wr);
          }
          return Ve;
        }
        if (Et === null) {
          for (; Ct < D.length; Ct++) {
            var Ua = R(b, D[Ct], $);
            Ua !== null && (zn = s(Ua, zn, Ct), zt === null ? Ve = Ua : zt.sibling = Ua, zt = Ua);
          }
          if (gr()) {
            var Jr = Ct;
            fs(b, Jr);
          }
          return Ve;
        }
        for (var ea = i(b, Et); Ct < D.length; Ct++) {
          var $r = O(ea, b, Ct, D[Ct], $);
          $r !== null && (e && $r.alternate !== null && ea.delete($r.key === null ? Ct : $r.key), zn = s($r, zn, Ct), zt === null ? Ve = $r : zt.sibling = $r, zt = $r);
        }
        if (e && ea.forEach(function(Ef) {
          return t(b, Ef);
        }), gr()) {
          var su = Ct;
          fs(b, su);
        }
        return Ve;
      }
      function ae(b, z, D, $) {
        var se = We(D);
        if (typeof se != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (lg || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), lg = !0), D.entries === se && (ig || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ig = !0);
          var le = se.call(D);
          if (le)
            for (var Le = null, Ve = le.next(); !Ve.done; Ve = le.next()) {
              var zt = Ve.value;
              Le = M(zt, Le, b);
            }
        }
        var Et = se.call(D);
        if (Et == null)
          throw new Error("An iterable object provided no iterator.");
        for (var zn = null, Ct = null, Dn = z, Pr = 0, wr = 0, Ua = null, Jr = Et.next(); Dn !== null && !Jr.done; wr++, Jr = Et.next()) {
          Dn.index > wr ? (Ua = Dn, Dn = null) : Ua = Dn.sibling;
          var ea = x(b, Dn, Jr.value, $);
          if (ea === null) {
            Dn === null && (Dn = Ua);
            break;
          }
          e && Dn && ea.alternate === null && t(b, Dn), Pr = s(ea, Pr, wr), Ct === null ? zn = ea : Ct.sibling = ea, Ct = ea, Dn = Ua;
        }
        if (Jr.done) {
          if (a(b, Dn), gr()) {
            var $r = wr;
            fs(b, $r);
          }
          return zn;
        }
        if (Dn === null) {
          for (; !Jr.done; wr++, Jr = Et.next()) {
            var su = R(b, Jr.value, $);
            su !== null && (Pr = s(su, Pr, wr), Ct === null ? zn = su : Ct.sibling = su, Ct = su);
          }
          if (gr()) {
            var Ef = wr;
            fs(b, Ef);
          }
          return zn;
        }
        for (var jp = i(b, Dn); !Jr.done; wr++, Jr = Et.next()) {
          var yl = O(jp, b, wr, Jr.value, $);
          yl !== null && (e && yl.alternate !== null && jp.delete(yl.key === null ? wr : yl.key), Pr = s(yl, Pr, wr), Ct === null ? zn = yl : Ct.sibling = yl, Ct = yl);
        }
        if (e && jp.forEach(function(WD) {
          return t(b, WD);
        }), gr()) {
          var QD = wr;
          fs(b, QD);
        }
        return zn;
      }
      function Re(b, z, D, $) {
        if (z !== null && z.tag === fe) {
          a(b, z.sibling);
          var se = u(z, D);
          return se.return = b, se;
        }
        a(b, z);
        var le = a0(D, b.mode, $);
        return le.return = b, le;
      }
      function ge(b, z, D, $) {
        for (var se = D.key, le = z; le !== null; ) {
          if (le.key === se) {
            var Le = D.type;
            if (Le === Ai) {
              if (le.tag === xe) {
                a(b, le.sibling);
                var Ve = u(le, D.props.children);
                return Ve.return = b, Ve._debugSource = D._source, Ve._debugOwner = D._owner, Ve;
              }
            } else if (le.elementType === Le || // Keep this check inline so it only runs on the false path:
            yx(le, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Le == "object" && Le !== null && Le.$$typeof === Pe && fE(Le) === le.type) {
              a(b, le.sibling);
              var zt = u(le, D.props);
              return zt.ref = ip(b, le, D), zt.return = b, zt._debugSource = D._source, zt._debugOwner = D._owner, zt;
            }
            a(b, le);
            break;
          } else
            t(b, le);
          le = le.sibling;
        }
        if (D.type === Ai) {
          var Et = to(D.props.children, b.mode, $, D.key);
          return Et.return = b, Et;
        } else {
          var zn = r0(D, b.mode, $);
          return zn.ref = ip(b, z, D), zn.return = b, zn;
        }
      }
      function dt(b, z, D, $) {
        for (var se = D.key, le = z; le !== null; ) {
          if (le.key === se)
            if (le.tag === ee && le.stateNode.containerInfo === D.containerInfo && le.stateNode.implementation === D.implementation) {
              a(b, le.sibling);
              var Le = u(le, D.children || []);
              return Le.return = b, Le;
            } else {
              a(b, le);
              break;
            }
          else
            t(b, le);
          le = le.sibling;
        }
        var Ve = i0(D, b.mode, $);
        return Ve.return = b, Ve;
      }
      function rt(b, z, D, $) {
        var se = typeof D == "object" && D !== null && D.type === Ai && D.key === null;
        if (se && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Ra:
              return f(ge(b, z, D, $));
            case br:
              return f(dt(b, z, D, $));
            case Pe:
              var le = D._payload, Le = D._init;
              return rt(b, z, Le(le), $);
          }
          if (Qn(D))
            return L(b, z, D, $);
          if (We(D))
            return ae(b, z, D, $);
          jh(b, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(Re(b, z, "" + D, $)) : (typeof D == "function" && Fh(b), a(b, z));
      }
      return rt;
    }
    var tf = dE(!0), pE = dE(!1);
    function x1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Rs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Rs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function T1(e, t) {
      for (var a = e.child; a !== null; )
        cD(a, t), a = a.sibling;
    }
    var cg = Bu(null), fg;
    fg = {};
    var Hh = null, nf = null, dg = null, Vh = !1;
    function Bh() {
      Hh = null, nf = null, dg = null, Vh = !1;
    }
    function vE() {
      Vh = !0;
    }
    function hE() {
      Vh = !1;
    }
    function mE(e, t, a) {
      Vr(cg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== fg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = fg;
    }
    function pg(e, t) {
      var a = cg.current;
      Hr(cg, t), e._currentValue = a;
    }
    function vg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Il(i.childLanes, t) ? u !== null && !Il(u.childLanes, t) && (u.childLanes = Ie(u.childLanes, t)) : (i.childLanes = Ie(i.childLanes, t), u !== null && (u.childLanes = Ie(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function R1(e, t, a) {
      w1(e, t, a);
    }
    function w1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === J) {
                var p = Po(a), v = ru(jt, p);
                v.tag = $h;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = Ie(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = Ie(x.lanes, a)), vg(i.return, a, e), s.lanes = Ie(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Ze)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === en) {
          var O = i.return;
          if (O === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          O.lanes = Ie(O.lanes, a);
          var M = O.alternate;
          M !== null && (M.lanes = Ie(M.lanes, a)), vg(O, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var L = u.sibling;
            if (L !== null) {
              L.return = u.return, u = L;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function rf(e, t) {
      Hh = e, nf = null, dg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Ur(a.lanes, t) && Ep(), a.firstContext = null);
      }
    }
    function $n(e) {
      Vh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (dg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (nf === null) {
          if (Hh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          nf = a, Hh.dependencies = {
            lanes: A,
            firstContext: a
          };
        } else
          nf = nf.next = a;
      }
      return t;
    }
    var ms = null;
    function hg(e) {
      ms === null ? ms = [e] : ms.push(e);
    }
    function b1() {
      if (ms !== null) {
        for (var e = 0; e < ms.length; e++) {
          var t = ms[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        ms = null;
      }
    }
    function yE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ph(e, i);
    }
    function D1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function k1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ph(e, i);
    }
    function ya(e, t) {
      return Ph(e, t);
    }
    var _1 = Ph;
    function Ph(e, t) {
      e.lanes = Ie(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ie(a.lanes, t)), a === null && (e.flags & (Kt | Or)) !== Ee && px(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ie(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ie(a.childLanes, t) : (u.flags & (Kt | Or)) !== Ee && px(e), i = u, u = u.return;
      if (i.tag === Y) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var gE = 0, SE = 1, $h = 2, mg = 3, Yh = !1, yg, Ih;
    yg = !1, Ih = null;
    function gg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: A
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function EE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function ru(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: gE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Iu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Ih === u && !yg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), yg = !0), Db()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, _1(e, a);
      } else
        return k1(e, u, t, a);
    }
    function Qh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (gd(a)) {
          var s = u.lanes;
          s = Ed(s, e.pendingLanes);
          var f = Ie(s, a);
          u.lanes = f, _c(e, f);
        }
      }
    }
    function Sg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var m = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = m : (f.next = m, f = m), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var y = a.lastBaseUpdate;
      y === null ? a.firstBaseUpdate = t : y.next = t, a.lastBaseUpdate = t;
    }
    function O1(e, t, a, i, u, s) {
      switch (a.tag) {
        case SE: {
          var f = a.payload;
          if (typeof f == "function") {
            vE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Mt) {
                qt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  qt(!1);
                }
              }
              hE();
            }
            return p;
          }
          return f;
        }
        case mg:
          e.flags = e.flags & ~Hn | Se;
        case gE: {
          var v = a.payload, m;
          if (typeof v == "function") {
            vE(), m = v.call(s, i, u);
            {
              if (e.mode & Mt) {
                qt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  qt(!1);
                }
              }
              hE();
            }
          } else
            m = v;
          return m == null ? i : Xe({}, i, m);
        }
        case $h:
          return Yh = !0, i;
      }
      return i;
    }
    function Wh(e, t, a, i) {
      var u = e.updateQueue;
      Yh = !1, Ih = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, m = v.next;
        v.next = null, f === null ? s = m : f.next = m, f = v;
        var y = e.alternate;
        if (y !== null) {
          var R = y.updateQueue, x = R.lastBaseUpdate;
          x !== f && (x === null ? R.firstBaseUpdate = m : x.next = m, R.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var O = u.baseState, M = A, L = null, ae = null, Re = null, ge = s;
        do {
          var dt = ge.lane, rt = ge.eventTime;
          if (Il(i, dt)) {
            if (Re !== null) {
              var z = {
                eventTime: rt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ht,
                tag: ge.tag,
                payload: ge.payload,
                callback: ge.callback,
                next: null
              };
              Re = Re.next = z;
            }
            O = O1(e, u, ge, O, t, a);
            var D = ge.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            ge.lane !== ht) {
              e.flags |= Vt;
              var $ = u.effects;
              $ === null ? u.effects = [ge] : $.push(ge);
            }
          } else {
            var b = {
              eventTime: rt,
              lane: dt,
              tag: ge.tag,
              payload: ge.payload,
              callback: ge.callback,
              next: null
            };
            Re === null ? (ae = Re = b, L = O) : Re = Re.next = b, M = Ie(M, dt);
          }
          if (ge = ge.next, ge === null) {
            if (p = u.shared.pending, p === null)
              break;
            var se = p, le = se.next;
            se.next = null, ge = le, u.lastBaseUpdate = se, u.shared.pending = null;
          }
        } while (!0);
        Re === null && (L = O), u.baseState = L, u.firstBaseUpdate = ae, u.lastBaseUpdate = Re;
        var Le = u.shared.interleaved;
        if (Le !== null) {
          var Ve = Le;
          do
            M = Ie(M, Ve.lane), Ve = Ve.next;
          while (Ve !== Le);
        } else s === null && (u.shared.lanes = A);
        Mp(M), e.lanes = M, e.memoizedState = O;
      }
      Ih = null;
    }
    function N1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function CE() {
      Yh = !1;
    }
    function Gh() {
      return Yh;
    }
    function xE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, N1(f, a));
        }
    }
    var lp = {}, Qu = Bu(lp), up = Bu(lp), Xh = Bu(lp);
    function Kh(e) {
      if (e === lp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function TE() {
      var e = Kh(Xh.current);
      return e;
    }
    function Eg(e, t) {
      Vr(Xh, t, e), Vr(up, e, e), Vr(Qu, lp, e);
      var a = GT(t);
      Hr(Qu, e), Vr(Qu, a, e);
    }
    function af(e) {
      Hr(Qu, e), Hr(up, e), Hr(Xh, e);
    }
    function Cg() {
      var e = Kh(Qu.current);
      return e;
    }
    function RE(e) {
      Kh(Xh.current);
      var t = Kh(Qu.current), a = XT(t, e.type);
      t !== a && (Vr(up, e, e), Vr(Qu, a, e));
    }
    function xg(e) {
      up.current === e && (Hr(Qu, e), Hr(up, e));
    }
    var M1 = 0, wE = 1, bE = 1, op = 2, ki = Bu(M1);
    function Tg(e, t) {
      return (e & t) !== 0;
    }
    function lf(e) {
      return e & wE;
    }
    function Rg(e, t) {
      return e & wE | t;
    }
    function L1(e, t) {
      return e | t;
    }
    function Wu(e, t) {
      Vr(ki, t, e);
    }
    function uf(e) {
      Hr(ki, e);
    }
    function z1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function qh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === He) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || $0(i) || Py(i))
              return t;
          }
        } else if (t.tag === Wt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Se) !== Ee;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ga = (
      /*   */
      0
    ), qn = (
      /* */
      1
    ), cl = (
      /*  */
      2
    ), Zn = (
      /*    */
      4
    ), Sr = (
      /*   */
      8
    ), wg = [];
    function bg() {
      for (var e = 0; e < wg.length; e++) {
        var t = wg[e];
        t._workInProgressVersionPrimary = null;
      }
      wg.length = 0;
    }
    function U1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var oe = k.ReactCurrentDispatcher, sp = k.ReactCurrentBatchConfig, Dg, of;
    Dg = /* @__PURE__ */ new Set();
    var ys = A, Lt = null, Jn = null, er = null, Zh = !1, cp = !1, fp = 0, A1 = 0, j1 = 25, U = null, ti = null, Gu = -1, kg = !1;
    function wt() {
      {
        var e = U;
        ti === null ? ti = [e] : ti.push(e);
      }
    }
    function te() {
      {
        var e = U;
        ti !== null && (Gu++, ti[Gu] !== e && F1(e));
      }
    }
    function sf(e) {
      e != null && !Qn(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", U, typeof e);
    }
    function F1(e) {
      {
        var t = Ye(Lt);
        if (!Dg.has(t) && (Dg.add(t), ti !== null)) {
          for (var a = "", i = 30, u = 0; u <= Gu; u++) {
            for (var s = ti[u], f = u === Gu ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Br() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function _g(e, t) {
      if (kg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", U), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, U, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!B(e[a], t[a]))
          return !1;
      return !0;
    }
    function cf(e, t, a, i, u, s) {
      ys = s, Lt = t, ti = e !== null ? e._debugHookTypes : null, Gu = -1, kg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = A, e !== null && e.memoizedState !== null ? oe.current = GE : ti !== null ? oe.current = WE : oe.current = QE;
      var f = a(i, u);
      if (cp) {
        var p = 0;
        do {
          if (cp = !1, fp = 0, p >= j1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, kg = !1, Jn = null, er = null, t.updateQueue = null, Gu = -1, oe.current = XE, f = a(i, u);
        } while (cp);
      }
      oe.current = fm, t._debugHookTypes = ti;
      var v = Jn !== null && Jn.next !== null;
      if (ys = A, Lt = null, Jn = null, er = null, U = null, ti = null, Gu = -1, e !== null && (e.flags & Cn) !== (t.flags & Cn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ke) !== Ce && g("Internal React error: Expected static flag was missing. Please notify the React team."), Zh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function ff() {
      var e = fp !== 0;
      return fp = 0, e;
    }
    function DE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & gt) !== Ce ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = $o(e.lanes, a);
    }
    function kE() {
      if (oe.current = fm, Zh) {
        for (var e = Lt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Zh = !1;
      }
      ys = A, Lt = null, Jn = null, er = null, ti = null, Gu = -1, U = null, BE = !1, cp = !1, fp = 0;
    }
    function fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return er === null ? Lt.memoizedState = er = e : er = er.next = e, er;
    }
    function ni() {
      var e;
      if (Jn === null) {
        var t = Lt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Jn.next;
      var a;
      if (er === null ? a = Lt.memoizedState : a = er.next, a !== null)
        er = a, a = er.next, Jn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Jn = e;
        var i = {
          memoizedState: Jn.memoizedState,
          baseState: Jn.baseState,
          baseQueue: Jn.baseQueue,
          queue: Jn.queue,
          next: null
        };
        er === null ? Lt.memoizedState = er = i : er = er.next = i;
      }
      return er;
    }
    function _E() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Og(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ng(e, t, a) {
      var i = fl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: A,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = P1.bind(null, Lt, s);
      return [i.memoizedState, f];
    }
    function Mg(e, t, a) {
      var i = ni(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Jn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, m = p.next;
          f.next = m, p.next = v;
        }
        s.baseQueue !== f && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var y = f.next, R = s.baseState, x = null, O = null, M = null, L = y;
        do {
          var ae = L.lane;
          if (Il(ys, ae)) {
            if (M !== null) {
              var ge = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ht,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null
              };
              M = M.next = ge;
            }
            if (L.hasEagerState)
              R = L.eagerState;
            else {
              var dt = L.action;
              R = e(R, dt);
            }
          } else {
            var Re = {
              lane: ae,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            };
            M === null ? (O = M = Re, x = R) : M = M.next = Re, Lt.lanes = Ie(Lt.lanes, ae), Mp(ae);
          }
          L = L.next;
        } while (L !== null && L !== y);
        M === null ? x = R : M.next = O, B(R, i.memoizedState) || Ep(), i.memoizedState = R, i.baseState = x, i.baseQueue = M, u.lastRenderedState = R;
      }
      var rt = u.interleaved;
      if (rt !== null) {
        var b = rt;
        do {
          var z = b.lane;
          Lt.lanes = Ie(Lt.lanes, z), Mp(z), b = b.next;
        } while (b !== rt);
      } else f === null && (u.lanes = A);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function Lg(e, t, a) {
      var i = ni(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, m = v;
        do {
          var y = m.action;
          p = e(p, y), m = m.next;
        } while (m !== v);
        B(p, i.memoizedState) || Ep(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function hk(e, t, a) {
    }
    function mk(e, t, a) {
    }
    function zg(e, t, a) {
      var i = Lt, u = fl(), s, f = gr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), of || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), of = !0);
      } else {
        if (s = t(), !of) {
          var p = t();
          B(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), of = !0);
        }
        var v = Om();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Dc(v, ys) || OE(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, rm(ME.bind(null, i, m, e), [e]), i.flags |= _r, dp(qn | Sr, NE.bind(null, i, m, s, t), void 0, null), s;
    }
    function Jh(e, t, a) {
      var i = Lt, u = ni(), s = t();
      if (!of) {
        var f = t();
        B(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), of = !0);
      }
      var p = u.memoizedState, v = !B(p, s);
      v && (u.memoizedState = s, Ep());
      var m = u.queue;
      if (vp(ME.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      er !== null && er.memoizedState.tag & qn) {
        i.flags |= _r, dp(qn | Sr, NE.bind(null, i, m, s, t), void 0, null);
        var y = Om();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Dc(y, ys) || OE(i, t, s);
      }
      return s;
    }
    function OE(e, t, a) {
      e.flags |= wu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Lt.updateQueue;
      if (u === null)
        u = _E(), Lt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function NE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, LE(t) && zE(e);
    }
    function ME(e, t, a) {
      var i = function() {
        LE(t) && zE(e);
      };
      return a(i);
    }
    function LE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !B(a, i);
      } catch {
        return !0;
      }
    }
    function zE(e) {
      var t = ya(e, Ne);
      t !== null && ar(t, e, Ne, jt);
    }
    function em(e) {
      var t = fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: A,
        dispatch: null,
        lastRenderedReducer: Og,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = $1.bind(null, Lt, a);
      return [t.memoizedState, i];
    }
    function Ug(e) {
      return Mg(Og);
    }
    function Ag(e) {
      return Lg(Og);
    }
    function dp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Lt.updateQueue;
      if (s === null)
        s = _E(), Lt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function jg(e) {
      var t = fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function tm(e) {
      var t = ni();
      return t.memoizedState;
    }
    function pp(e, t, a, i) {
      var u = fl(), s = i === void 0 ? null : i;
      Lt.flags |= e, u.memoizedState = dp(qn | t, a, void 0, s);
    }
    function nm(e, t, a, i) {
      var u = ni(), s = i === void 0 ? null : i, f = void 0;
      if (Jn !== null) {
        var p = Jn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (_g(s, v)) {
            u.memoizedState = dp(t, a, f, s);
            return;
          }
        }
      }
      Lt.flags |= e, u.memoizedState = dp(qn | t, a, f, s);
    }
    function rm(e, t) {
      return (Lt.mode & gt) !== Ce ? pp($a | _r | ec, Sr, e, t) : pp(_r | ec, Sr, e, t);
    }
    function vp(e, t) {
      return nm(_r, Sr, e, t);
    }
    function Fg(e, t) {
      return pp(st, cl, e, t);
    }
    function am(e, t) {
      return nm(st, cl, e, t);
    }
    function Hg(e, t) {
      var a = st;
      return a |= mi, (Lt.mode & gt) !== Ce && (a |= Qi), pp(a, Zn, e, t);
    }
    function im(e, t) {
      return nm(st, Zn, e, t);
    }
    function UE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Vg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = st;
      return u |= mi, (Lt.mode & gt) !== Ce && (u |= Qi), pp(u, Zn, UE.bind(null, t, e), i);
    }
    function lm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return nm(st, Zn, UE.bind(null, t, e), i);
    }
    function H1(e, t) {
    }
    var um = H1;
    function Bg(e, t) {
      var a = fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function om(e, t) {
      var a = ni(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Pg(e, t) {
      var a = fl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function sm(e, t) {
      var a = ni(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function $g(e) {
      var t = fl();
      return t.memoizedState = e, e;
    }
    function AE(e) {
      var t = ni(), a = Jn, i = a.memoizedState;
      return FE(t, i, e);
    }
    function jE(e) {
      var t = ni();
      if (Jn === null)
        return t.memoizedState = e, e;
      var a = Jn.memoizedState;
      return FE(t, a, e);
    }
    function FE(e, t, a) {
      var i = !md(ys);
      if (i) {
        if (!B(a, t)) {
          var u = Sd();
          Lt.lanes = Ie(Lt.lanes, u), Mp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Ep()), e.memoizedState = a, a;
    }
    function V1(e, t, a) {
      var i = va();
      Rn(Vv(i, Wa)), e(!0);
      var u = sp.transition;
      sp.transition = {};
      var s = sp.transition;
      sp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Rn(i), sp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Be("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Yg() {
      var e = em(!1), t = e[0], a = e[1], i = V1.bind(null, a), u = fl();
      return u.memoizedState = i, [t, i];
    }
    function HE() {
      var e = Ug(), t = e[0], a = ni(), i = a.memoizedState;
      return [t, i];
    }
    function VE() {
      var e = Ag(), t = e[0], a = ni(), i = a.memoizedState;
      return [t, i];
    }
    var BE = !1;
    function B1() {
      return BE;
    }
    function Ig() {
      var e = fl(), t = Om(), a = t.identifierPrefix, i;
      if (gr()) {
        var u = a1();
        i = ":" + a + "R" + u;
        var s = fp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = A1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function cm() {
      var e = ni(), t = e.memoizedState;
      return t;
    }
    function P1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ju(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        $E(t, u);
      else {
        var s = yE(e, t, u, i);
        if (s !== null) {
          var f = Zr();
          ar(s, e, i, f), YE(s, t, i);
        }
      }
      IE(e, i);
    }
    function $1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ju(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        $E(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === A && (s === null || s.lanes === A)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = oe.current, oe.current = _i;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, B(m, v)) {
                D1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              oe.current = p;
            }
          }
        }
        var y = yE(e, t, u, i);
        if (y !== null) {
          var R = Zr();
          ar(y, e, i, R), YE(y, t, i);
        }
      }
      IE(e, i);
    }
    function PE(e) {
      var t = e.alternate;
      return e === Lt || t !== null && t === Lt;
    }
    function $E(e, t) {
      cp = Zh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YE(e, t, a) {
      if (gd(a)) {
        var i = t.lanes;
        i = Ed(i, e.pendingLanes);
        var u = Ie(i, a);
        t.lanes = u, _c(e, u);
      }
    }
    function IE(e, t, a) {
      Lo(e, t);
    }
    var fm = {
      readContext: $n,
      useCallback: Br,
      useContext: Br,
      useEffect: Br,
      useImperativeHandle: Br,
      useInsertionEffect: Br,
      useLayoutEffect: Br,
      useMemo: Br,
      useReducer: Br,
      useRef: Br,
      useState: Br,
      useDebugValue: Br,
      useDeferredValue: Br,
      useTransition: Br,
      useMutableSource: Br,
      useSyncExternalStore: Br,
      useId: Br,
      unstable_isNewReconciler: W
    }, QE = null, WE = null, GE = null, XE = null, dl = null, _i = null, dm = null;
    {
      var Qg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Fe = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      QE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", wt(), sf(t), Bg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", wt(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", wt(), sf(t), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", wt(), sf(a), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", wt(), sf(t), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", wt(), sf(t), Hg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", wt(), sf(t);
          var a = oe.current;
          oe.current = dl;
          try {
            return Pg(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", wt();
          var i = oe.current;
          oe.current = dl;
          try {
            return Ng(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", wt(), jg(e);
        },
        useState: function(e) {
          U = "useState", wt();
          var t = oe.current;
          oe.current = dl;
          try {
            return em(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", wt(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", wt(), $g(e);
        },
        useTransition: function() {
          return U = "useTransition", wt(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", wt(), zg(e, t, a);
        },
        useId: function() {
          return U = "useId", wt(), Ig();
        },
        unstable_isNewReconciler: W
      }, WE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", te(), Bg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", te(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", te(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", te(), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", te(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", te(), Hg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", te();
          var a = oe.current;
          oe.current = dl;
          try {
            return Pg(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", te();
          var i = oe.current;
          oe.current = dl;
          try {
            return Ng(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", te(), jg(e);
        },
        useState: function(e) {
          U = "useState", te();
          var t = oe.current;
          oe.current = dl;
          try {
            return em(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", te(), $g(e);
        },
        useTransition: function() {
          return U = "useTransition", te(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", te(), zg(e, t, a);
        },
        useId: function() {
          return U = "useId", te(), Ig();
        },
        unstable_isNewReconciler: W
      }, GE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", te(), om(e, t);
        },
        useContext: function(e) {
          return U = "useContext", te(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", te(), vp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", te(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", te(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", te(), im(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", te();
          var a = oe.current;
          oe.current = _i;
          try {
            return sm(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", te();
          var i = oe.current;
          oe.current = _i;
          try {
            return Mg(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", te(), tm();
        },
        useState: function(e) {
          U = "useState", te();
          var t = oe.current;
          oe.current = _i;
          try {
            return Ug(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", te(), um();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", te(), AE(e);
        },
        useTransition: function() {
          return U = "useTransition", te(), HE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", te(), Jh(e, t);
        },
        useId: function() {
          return U = "useId", te(), cm();
        },
        unstable_isNewReconciler: W
      }, XE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", te(), om(e, t);
        },
        useContext: function(e) {
          return U = "useContext", te(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", te(), vp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", te(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", te(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", te(), im(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", te();
          var a = oe.current;
          oe.current = dm;
          try {
            return sm(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", te();
          var i = oe.current;
          oe.current = dm;
          try {
            return Lg(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", te(), tm();
        },
        useState: function(e) {
          U = "useState", te();
          var t = oe.current;
          oe.current = dm;
          try {
            return Ag(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", te(), um();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", te(), jE(e);
        },
        useTransition: function() {
          return U = "useTransition", te(), VE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", te(), Jh(e, t);
        },
        useId: function() {
          return U = "useId", te(), cm();
        },
        unstable_isNewReconciler: W
      }, dl = {
        readContext: function(e) {
          return Qg(), $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Fe(), wt(), Bg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Fe(), wt(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Fe(), wt(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Fe(), wt(), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Fe(), wt(), Fg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Fe(), wt(), Hg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Fe(), wt();
          var a = oe.current;
          oe.current = dl;
          try {
            return Pg(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Fe(), wt();
          var i = oe.current;
          oe.current = dl;
          try {
            return Ng(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Fe(), wt(), jg(e);
        },
        useState: function(e) {
          U = "useState", Fe(), wt();
          var t = oe.current;
          oe.current = dl;
          try {
            return em(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Fe(), wt(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Fe(), wt(), $g(e);
        },
        useTransition: function() {
          return U = "useTransition", Fe(), wt(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Fe(), wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Fe(), wt(), zg(e, t, a);
        },
        useId: function() {
          return U = "useId", Fe(), wt(), Ig();
        },
        unstable_isNewReconciler: W
      }, _i = {
        readContext: function(e) {
          return Qg(), $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Fe(), te(), om(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Fe(), te(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Fe(), te(), vp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Fe(), te(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Fe(), te(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Fe(), te(), im(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Fe(), te();
          var a = oe.current;
          oe.current = _i;
          try {
            return sm(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Fe(), te();
          var i = oe.current;
          oe.current = _i;
          try {
            return Mg(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Fe(), te(), tm();
        },
        useState: function(e) {
          U = "useState", Fe(), te();
          var t = oe.current;
          oe.current = _i;
          try {
            return Ug(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Fe(), te(), um();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Fe(), te(), AE(e);
        },
        useTransition: function() {
          return U = "useTransition", Fe(), te(), HE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Fe(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Fe(), te(), Jh(e, t);
        },
        useId: function() {
          return U = "useId", Fe(), te(), cm();
        },
        unstable_isNewReconciler: W
      }, dm = {
        readContext: function(e) {
          return Qg(), $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Fe(), te(), om(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Fe(), te(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Fe(), te(), vp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Fe(), te(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Fe(), te(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Fe(), te(), im(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Fe(), te();
          var a = oe.current;
          oe.current = _i;
          try {
            return sm(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Fe(), te();
          var i = oe.current;
          oe.current = _i;
          try {
            return Lg(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Fe(), te(), tm();
        },
        useState: function(e) {
          U = "useState", Fe(), te();
          var t = oe.current;
          oe.current = _i;
          try {
            return Ag(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Fe(), te(), um();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Fe(), te(), jE(e);
        },
        useTransition: function() {
          return U = "useTransition", Fe(), te(), VE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Fe(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Fe(), te(), Jh(e, t);
        },
        useId: function() {
          return U = "useId", Fe(), te(), cm();
        },
        unstable_isNewReconciler: W
      };
    }
    var Xu = K.unstable_now, KE = 0, pm = -1, hp = -1, vm = -1, Wg = !1, hm = !1;
    function qE() {
      return Wg;
    }
    function Y1() {
      hm = !0;
    }
    function I1() {
      Wg = !1, hm = !1;
    }
    function Q1() {
      Wg = hm, hm = !1;
    }
    function ZE() {
      return KE;
    }
    function JE() {
      KE = Xu();
    }
    function Gg(e) {
      hp = Xu(), e.actualStartTime < 0 && (e.actualStartTime = Xu());
    }
    function eC(e) {
      hp = -1;
    }
    function mm(e, t) {
      if (hp >= 0) {
        var a = Xu() - hp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), hp = -1;
      }
    }
    function pl(e) {
      if (pm >= 0) {
        var t = Xu() - pm;
        pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Y:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case it:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Xg(e) {
      if (vm >= 0) {
        var t = Xu() - vm;
        vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Y:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case it:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function vl() {
      pm = Xu();
    }
    function Kg() {
      vm = Xu();
    }
    function qg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Oi(e, t) {
      if (e && e.defaultProps) {
        var a = Xe({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Zg = {}, Jg, eS, tS, nS, rS, tC, ym, aS, iS, lS, mp;
    {
      Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), mp = /* @__PURE__ */ new Set();
      var nC = /* @__PURE__ */ new Set();
      ym = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          nC.has(a) || (nC.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, tC = function(e, t) {
        if (t === void 0) {
          var a = kt(e) || "Component";
          rS.has(a) || (rS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Zg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Zg);
    }
    function uS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Mt) {
          qt(!0);
          try {
            s = a(i, u);
          } finally {
            qt(!1);
          }
        }
        tC(t, s);
      }
      var f = s == null ? u : Xe({}, u, s);
      if (e.memoizedState = f, e.lanes === A) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var oS = {
      isMounted: Rv,
      enqueueSetState: function(e, t, a) {
        var i = Ru(e), u = Zr(), s = Ju(i), f = ru(u, s);
        f.payload = t, a != null && (ym(a, "setState"), f.callback = a);
        var p = Iu(i, f, s);
        p !== null && (ar(p, i, s, u), Qh(p, i, s)), Lo(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ru(e), u = Zr(), s = Ju(i), f = ru(u, s);
        f.tag = SE, f.payload = t, a != null && (ym(a, "replaceState"), f.callback = a);
        var p = Iu(i, f, s);
        p !== null && (ar(p, i, s, u), Qh(p, i, s)), Lo(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ru(e), i = Zr(), u = Ju(a), s = ru(i, u);
        s.tag = $h, t != null && (ym(t, "forceUpdate"), s.callback = t);
        var f = Iu(a, s, u);
        f !== null && (ar(f, a, u, i), Qh(f, a, u)), uc(a, u);
      }
    };
    function rC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Mt) {
            qt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              qt(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", kt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !pe(a, i) || !pe(u, s) : !0;
    }
    function W1(e, t, a) {
      var i = e.stateNode;
      {
        var u = kt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !mp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Mt) === Ce && (mp.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !mp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Mt) === Ce && (mp.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !iS.has(t) && (iS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", kt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !tS.has(t) && (tS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", kt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Qn(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function aC(e, t) {
      t.updater = oS, e.stateNode = t, Nl(t, e), t._reactInternalInstance = Zg;
    }
    function iC(e, t, a) {
      var i = !1, u = La, s = La, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === E && f._context === void 0
        );
        if (!p && !lS.has(t)) {
          lS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Fi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", kt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = $n(f);
      else {
        u = Kc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? qc(e, u) : La;
      }
      var y = new t(a, s);
      if (e.mode & Mt) {
        qt(!0);
        try {
          y = new t(a, s);
        } finally {
          qt(!1);
        }
      }
      var R = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      aC(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var x = kt(t) || "Component";
          eS.has(x) || (eS.add(x), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, y.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var O = null, M = null, L = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? O = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (O = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? M = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (M = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? L = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (L = "UNSAFE_componentWillUpdate"), O !== null || M !== null || L !== null) {
            var ae = kt(t) || "Component", Re = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            nS.has(ae) || (nS.add(ae), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, Re, O !== null ? `
  ` + O : "", M !== null ? `
  ` + M : "", L !== null ? `
  ` + L : ""));
          }
        }
      }
      return i && G0(e, u, s), y;
    }
    function G1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), oS.enqueueReplaceState(t, t.state, null));
    }
    function lC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ye(e) || "Component";
          Jg.has(s) || (Jg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        oS.enqueueReplaceState(t, t.state, null);
      }
    }
    function sS(e, t, a, i) {
      W1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, gg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = $n(s);
      else {
        var f = Kc(e, t, !0);
        u.context = qc(e, f);
      }
      {
        if (u.state === a) {
          var p = kt(t) || "Component";
          aS.has(p) || (aS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Mt && Di.recordLegacyContextWarning(e, u), Di.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (uS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (G1(e, u), Wh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = st;
        m |= mi, (e.mode & gt) !== Ce && (m |= Qi), e.flags |= m;
      }
    }
    function X1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = La;
      if (typeof p == "object" && p !== null)
        v = $n(p);
      else {
        var m = Kc(e, t, !0);
        v = qc(e, m);
      }
      var y = t.getDerivedStateFromProps, R = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && lC(e, u, a, v), CE();
      var x = e.memoizedState, O = u.state = x;
      if (Wh(e, a, u, i), O = e.memoizedState, s === a && x === O && !kh() && !Gh()) {
        if (typeof u.componentDidMount == "function") {
          var M = st;
          M |= mi, (e.mode & gt) !== Ce && (M |= Qi), e.flags |= M;
        }
        return !1;
      }
      typeof y == "function" && (uS(e, t, y, a), O = e.memoizedState);
      var L = Gh() || rC(e, t, s, a, x, O, v);
      if (L) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ae = st;
          ae |= mi, (e.mode & gt) !== Ce && (ae |= Qi), e.flags |= ae;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Re = st;
          Re |= mi, (e.mode & gt) !== Ce && (Re |= Qi), e.flags |= Re;
        }
        e.memoizedProps = a, e.memoizedState = O;
      }
      return u.props = a, u.state = O, u.context = v, L;
    }
    function K1(e, t, a, i, u) {
      var s = t.stateNode;
      EE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Oi(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, R = La;
      if (typeof y == "object" && y !== null)
        R = $n(y);
      else {
        var x = Kc(t, a, !0);
        R = qc(t, x);
      }
      var O = a.getDerivedStateFromProps, M = typeof O == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !M && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && lC(t, s, i, R), CE();
      var L = t.memoizedState, ae = s.state = L;
      if (Wh(t, i, s, u), ae = t.memoizedState, f === v && L === ae && !kh() && !Gh() && !ye)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Nn), !1;
      typeof O == "function" && (uS(t, a, O, i), ae = t.memoizedState);
      var Re = Gh() || rC(t, a, p, i, L, ae, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ye;
      return Re ? (!M && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ae, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ae, R)), typeof s.componentDidUpdate == "function" && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Nn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Nn), t.memoizedProps = i, t.memoizedState = ae), s.props = i, s.state = ae, s.context = R, Re;
    }
    function gs(e, t) {
      return {
        value: e,
        source: t,
        stack: ks(t),
        digest: null
      };
    }
    function cS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function q1(e, t) {
      return !0;
    }
    function fS(e, t) {
      try {
        var a = q1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === J)
            return;
          console.error(i);
        }
        var p = u ? Ye(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === Y)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Ye(e) || "Anonymous";
          m = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + y + ".");
        }
        var R = v + `
` + f + `

` + ("" + m);
        console.error(R);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var Z1 = typeof WeakMap == "function" ? WeakMap : Map;
    function uC(e, t, a) {
      var i = ru(jt, a);
      i.tag = mg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Yb(u), fS(e, t);
      }, i;
    }
    function dS(e, t, a) {
      var i = ru(jt, a);
      i.tag = mg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          gx(e), fS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        gx(e), fS(e, t), typeof u != "function" && Pb(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Ur(e.lanes, Ne) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), i;
    }
    function oC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Z1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Ib.bind(null, e, t, a);
        Lr && Lp(e, a), t.then(s, s);
      }
    }
    function J1(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ew(e, t) {
      var a = e.tag;
      if ((e.mode & Ke) === Ce && (a === Z || a === Me || a === $e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function sC(e) {
      var t = e;
      do {
        if (t.tag === He && z1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function cC(e, t, a, i, u) {
      if ((e.mode & Ke) === Ce) {
        if (e === t)
          e.flags |= Hn;
        else {
          if (e.flags |= Se, a.flags |= Js, a.flags &= -52805, a.tag === J) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ut;
            else {
              var f = ru(jt, Ne);
              f.tag = $h, Iu(a, f, Ne);
            }
          }
          a.lanes = Ie(a.lanes, Ne);
        }
        return e;
      }
      return e.flags |= Hn, e.lanes = u, e;
    }
    function tw(e, t, a, i, u) {
      if (a.flags |= Do, Lr && Lp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ew(a), gr() && a.mode & Ke && tE();
        var f = sC(t);
        if (f !== null) {
          f.flags &= ~lr, cC(f, t, a, e, u), f.mode & Ke && oC(e, s, u), J1(f, e, s);
          return;
        } else {
          if (!Mv(u)) {
            oC(e, s, u), IS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (gr() && a.mode & Ke) {
        tE();
        var v = sC(t);
        if (v !== null) {
          (v.flags & Hn) === Ee && (v.flags |= lr), cC(v, t, a, e, u), ag(gs(i, a));
          return;
        }
      }
      i = gs(i, a), zb(i);
      var m = t;
      do {
        switch (m.tag) {
          case Y: {
            var y = i;
            m.flags |= Hn;
            var R = Po(u);
            m.lanes = Ie(m.lanes, R);
            var x = uC(m, y, R);
            Sg(m, x);
            return;
          }
          case J:
            var O = i, M = m.type, L = m.stateNode;
            if ((m.flags & Se) === Ee && (typeof M.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && !sx(L))) {
              m.flags |= Hn;
              var ae = Po(u);
              m.lanes = Ie(m.lanes, ae);
              var Re = dS(m, O, ae);
              Sg(m, Re);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function nw() {
      return null;
    }
    var yp = k.ReactCurrentOwner, Ni = !1, pS, gp, vS, hS, mS, Ss, yS, gm, Sp;
    pS = {}, gp = {}, vS = {}, hS = {}, mS = {}, Ss = !1, yS = {}, gm = {}, Sp = {};
    function Kr(e, t, a, i) {
      e === null ? t.child = pE(t, null, a, i) : t.child = tf(t, e.child, a, i);
    }
    function rw(e, t, a, i) {
      t.child = tf(t, e.child, null, i), t.child = tf(t, null, a, i);
    }
    function fC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && wi(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      rf(t, u), Qr(t);
      {
        if (yp.current = t, In(!0), v = cf(e, t, f, i, p, u), m = ff(), t.mode & Mt) {
          qt(!0);
          try {
            v = cf(e, t, f, i, p, u), m = ff();
          } finally {
            qt(!1);
          }
        }
        In(!1);
      }
      return Wr(), e !== null && !Ni ? (DE(e, t, u), au(e, t, u)) : (gr() && m && Zy(t), t.flags |= ka, Kr(e, t, v, u), t.child);
    }
    function dC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (oD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Sf(s), t.tag = $e, t.type = f, ES(t, s), pC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && wi(
            p,
            i,
            // Resolved props
            "prop",
            kt(s)
          ), a.defaultProps !== void 0) {
            var v = kt(s) || "Unknown";
            Sp[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Sp[v] = !0);
          }
        }
        var m = n0(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var y = a.type, R = y.propTypes;
        R && wi(
          R,
          i,
          // Resolved props
          "prop",
          kt(y)
        );
      }
      var x = e.child, O = bS(e, u);
      if (!O) {
        var M = x.memoizedProps, L = a.compare;
        if (L = L !== null ? L : pe, L(M, i) && e.ref === t.ref)
          return au(e, t, u);
      }
      t.flags |= ka;
      var ae = Rs(x, i);
      return ae.ref = t.ref, ae.return = t, t.child = ae, ae;
    }
    function pC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Pe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && wi(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            kt(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (pe(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ni = !1, t.pendingProps = i = y, bS(e, u))
            (e.flags & Js) !== Ee && (Ni = !0);
          else return t.lanes = e.lanes, au(e, t, u);
      }
      return gS(e, t, a, i, u);
    }
    function vC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || q)
        if ((t.mode & Ke) === Ce) {
          var f = {
            baseLanes: A,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Nm(t, a);
        } else if (Ur(a, zr)) {
          var R = {
            baseLanes: A,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var x = s !== null ? s.baseLanes : a;
          Nm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Ie(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = zr;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, Nm(t, v), null;
        }
      else {
        var O;
        s !== null ? (O = Ie(s.baseLanes, a), t.memoizedState = null) : O = a, Nm(t, O);
      }
      return Kr(e, t, u, a), t.child;
    }
    function aw(e, t, a) {
      var i = t.pendingProps;
      return Kr(e, t, i, a), t.child;
    }
    function iw(e, t, a) {
      var i = t.pendingProps.children;
      return Kr(e, t, i, a), t.child;
    }
    function lw(e, t, a) {
      {
        t.flags |= st;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Kr(e, t, s, a), t.child;
    }
    function hC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= an, t.flags |= bu);
    }
    function gS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && wi(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f;
      {
        var p = Kc(t, a, !0);
        f = qc(t, p);
      }
      var v, m;
      rf(t, u), Qr(t);
      {
        if (yp.current = t, In(!0), v = cf(e, t, a, i, f, u), m = ff(), t.mode & Mt) {
          qt(!0);
          try {
            v = cf(e, t, a, i, f, u), m = ff();
          } finally {
            qt(!1);
          }
        }
        In(!1);
      }
      return Wr(), e !== null && !Ni ? (DE(e, t, u), au(e, t, u)) : (gr() && m && Zy(t), t.flags |= ka, Kr(e, t, v, u), t.child);
    }
    function mC(e, t, a, i, u) {
      {
        switch (TD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Se, t.flags |= Hn;
            var m = new Error("Simulated error coming from DevTools"), y = Po(u);
            t.lanes = Ie(t.lanes, y);
            var R = dS(t, gs(m, t), y);
            Sg(t, R);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && wi(
            x,
            i,
            // Resolved props
            "prop",
            kt(a)
          );
        }
      }
      var O;
      sl(a) ? (O = !0, Oh(t)) : O = !1, rf(t, u);
      var M = t.stateNode, L;
      M === null ? (Em(e, t), iC(t, a, i), sS(t, a, i, u), L = !0) : e === null ? L = X1(t, a, i, u) : L = K1(e, t, a, i, u);
      var ae = SS(e, t, a, L, O, u);
      {
        var Re = t.stateNode;
        L && Re.props !== i && (Ss || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), Ss = !0);
      }
      return ae;
    }
    function SS(e, t, a, i, u, s) {
      hC(e, t);
      var f = (t.flags & Se) !== Ee;
      if (!i && !f)
        return u && q0(t, a, !1), au(e, t, s);
      var p = t.stateNode;
      yp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, eC();
      else {
        Qr(t);
        {
          if (In(!0), v = p.render(), t.mode & Mt) {
            qt(!0);
            try {
              p.render();
            } finally {
              qt(!1);
            }
          }
          In(!1);
        }
        Wr();
      }
      return t.flags |= ka, e !== null && f ? rw(e, t, v, s) : Kr(e, t, v, s), t.memoizedState = p.state, u && q0(t, a, !0), t.child;
    }
    function yC(e) {
      var t = e.stateNode;
      t.pendingContext ? X0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && X0(e, t.context, !1), Eg(e, t.containerInfo);
    }
    function uw(e, t, a) {
      if (yC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      EE(e, t), Wh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, m = t.updateQueue;
        if (m.baseState = v, t.memoizedState = v, t.flags & lr) {
          var y = gs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return gC(e, t, p, a, y);
        } else if (p !== s) {
          var R = gs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return gC(e, t, p, a, R);
        } else {
          c1(t);
          var x = pE(t, null, p, a);
          t.child = x;
          for (var O = x; O; )
            O.flags = O.flags & ~Kt | Or, O = O.sibling;
        }
      } else {
        if (ef(), p === s)
          return au(e, t, a);
        Kr(e, t, p, a);
      }
      return t.child;
    }
    function gC(e, t, a, i, u) {
      return ef(), ag(u), t.flags |= lr, Kr(e, t, a, i), t.child;
    }
    function ow(e, t, a) {
      RE(t), e === null && rg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Fy(i, u);
      return p ? f = null : s !== null && Fy(i, s) && (t.flags |= oa), hC(e, t), Kr(e, t, f, a), t.child;
    }
    function sw(e, t) {
      return e === null && rg(t), null;
    }
    function cw(e, t, a, i) {
      Em(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = sD(v), y = Oi(v, u), R;
      switch (m) {
        case Z:
          return ES(t, v), t.type = v = Sf(v), R = gS(null, t, v, y, i), R;
        case J:
          return t.type = v = KS(v), R = mC(null, t, v, y, i), R;
        case Me:
          return t.type = v = qS(v), R = fC(null, t, v, y, i), R;
        case Tt: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && wi(
              x,
              y,
              // Resolved for outer only
              "prop",
              kt(v)
            );
          }
          return R = dC(
            null,
            t,
            v,
            Oi(v.type, y),
            // The inner type can have defaults too
            i
          ), R;
        }
      }
      var O = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Pe && (O = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + O));
    }
    function fw(e, t, a, i, u) {
      Em(e, t), t.tag = J;
      var s;
      return sl(a) ? (s = !0, Oh(t)) : s = !1, rf(t, u), iC(t, a, i), sS(t, a, i, u), SS(null, t, a, !0, s, u);
    }
    function dw(e, t, a, i) {
      Em(e, t);
      var u = t.pendingProps, s;
      {
        var f = Kc(t, a, !1);
        s = qc(t, f);
      }
      rf(t, i);
      var p, v;
      Qr(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = kt(a) || "Unknown";
          pS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), pS[m] = !0);
        }
        t.mode & Mt && Di.recordLegacyContextWarning(t, null), In(!0), yp.current = t, p = cf(null, t, a, u, s, i), v = ff(), In(!1);
      }
      if (Wr(), t.flags |= ka, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = kt(a) || "Unknown";
        gp[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), gp[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = kt(a) || "Unknown";
          gp[R] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), gp[R] = !0);
        }
        t.tag = J, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return sl(a) ? (x = !0, Oh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, gg(t), aC(t, p), sS(t, a, u, i), SS(null, t, a, !0, x, i);
      } else {
        if (t.tag = Z, t.mode & Mt) {
          qt(!0);
          try {
            p = cf(null, t, a, u, s, i), v = ff();
          } finally {
            qt(!1);
          }
        }
        return gr() && v && Zy(t), Kr(null, t, p, i), ES(t, a), t.child;
      }
    }
    function ES(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = aa();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), mS[u] || (mS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = kt(t) || "Unknown";
          Sp[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Sp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = kt(t) || "Unknown";
          hS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), hS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = kt(t) || "Unknown";
          vS[v] || (g("%s: Function components do not support contextType.", v), vS[v] = !0);
        }
      }
    }
    var CS = {
      dehydrated: null,
      treeContext: null,
      retryLane: ht
    };
    function xS(e) {
      return {
        baseLanes: e,
        cachePool: nw(),
        transitions: null
      };
    }
    function pw(e, t) {
      var a = null;
      return {
        baseLanes: Ie(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function vw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Tg(e, op);
    }
    function hw(e, t) {
      return $o(e.childLanes, t);
    }
    function SC(e, t, a) {
      var i = t.pendingProps;
      RD(t) && (t.flags |= Se);
      var u = ki.current, s = !1, f = (t.flags & Se) !== Ee;
      if (f || vw(u, e) ? (s = !0, t.flags &= ~Se) : (e === null || e.memoizedState !== null) && (u = L1(u, bE)), u = lf(u), Wu(t, u), e === null) {
        rg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Ew(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var R = mw(t, m, y, a), x = t.child;
          return x.memoizedState = xS(a), t.memoizedState = CS, R;
        } else
          return TS(t, m);
      } else {
        var O = e.memoizedState;
        if (O !== null) {
          var M = O.dehydrated;
          if (M !== null)
            return Cw(e, t, f, i, M, O, a);
        }
        if (s) {
          var L = i.fallback, ae = i.children, Re = gw(e, t, ae, L, a), ge = t.child, dt = e.child.memoizedState;
          return ge.memoizedState = dt === null ? xS(a) : pw(dt, a), ge.childLanes = hw(e, a), t.memoizedState = CS, Re;
        } else {
          var rt = i.children, b = yw(e, t, rt, a);
          return t.memoizedState = null, b;
        }
      }
    }
    function TS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = RS(u, i);
      return s.return = e, e.child = s, s;
    }
    function mw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ke) === Ce && s !== null ? (p = s, p.childLanes = A, p.pendingProps = f, e.mode & yt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = to(a, u, i, null)) : (p = RS(f, u), v = to(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function RS(e, t, a) {
      return Ex(e, t, A, null);
    }
    function EC(e, t) {
      return Rs(e, t);
    }
    function yw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = EC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ke) === Ce && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ua) : p.push(s);
      }
      return t.child = f, f;
    }
    function gw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ke) === Ce && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = A, m.pendingProps = v, t.mode & yt && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = EC(f, v), m.subtreeFlags = f.subtreeFlags & Cn;
      var R;
      return p !== null ? R = Rs(p, i) : (R = to(i, s, u, null), R.flags |= Kt), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function Sm(e, t, a, i) {
      i !== null && ag(i), tf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = TS(t, s);
      return f.flags |= Kt, t.memoizedState = null, f;
    }
    function Sw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = RS(f, s), v = to(i, s, u, null);
      return v.flags |= Kt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ke) !== Ce && tf(t, e.child, null, u), v;
    }
    function Ew(e, t, a) {
      return (e.mode & Ke) === Ce ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ne) : Py(t) ? e.lanes = ur : e.lanes = zr, null;
    }
    function Cw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & lr) {
          t.flags &= ~lr;
          var b = cS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Sm(e, t, f, b);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Se, null;
          var z = i.children, D = i.fallback, $ = Sw(e, t, z, D, f), se = t.child;
          return se.memoizedState = xS(f), t.memoizedState = CS, $;
        }
      else {
        if (o1(), (t.mode & Ke) === Ce)
          return Sm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Py(u)) {
          var p, v, m;
          {
            var y = wR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = cS(R, p, m);
          return Sm(e, t, f, x);
        }
        var O = Ur(f, e.childLanes);
        if (Ni || O) {
          var M = Om();
          if (M !== null) {
            var L = xd(M, f);
            if (L !== ht && L !== s.retryLane) {
              s.retryLane = L;
              var ae = jt;
              ya(e, L), ar(M, e, L, ae);
            }
          }
          IS();
          var Re = cS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Sm(e, t, f, Re);
        } else if ($0(u)) {
          t.flags |= Se, t.child = e.child;
          var ge = Qb.bind(null, e);
          return bR(u, ge), null;
        } else {
          f1(t, u, s.treeContext);
          var dt = i.children, rt = TS(t, dt);
          return rt.flags |= Or, rt;
        }
      }
    }
    function CC(e, t, a) {
      e.lanes = Ie(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ie(i.lanes, t)), vg(e.return, t, a);
    }
    function xw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === He) {
          var u = i.memoizedState;
          u !== null && CC(i, a, e);
        } else if (i.tag === Wt)
          CC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Tw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && qh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Rw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !yS[e])
        if (yS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function ww(e, t) {
      e !== void 0 && !gm[e] && (e !== "collapsed" && e !== "hidden" ? (gm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (gm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function xC(e, t) {
      {
        var a = Qn(e), i = !a && typeof We(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function bw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Qn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!xC(e[a], a))
              return;
        } else {
          var i = We(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!xC(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function wS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function TC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Rw(u), ww(s, u), bw(f, u), Kr(e, t, f, a);
      var p = ki.current, v = Tg(p, op);
      if (v)
        p = Rg(p, op), t.flags |= Se;
      else {
        var m = e !== null && (e.flags & Se) !== Ee;
        m && xw(t, t.child, a), p = lf(p);
      }
      if (Wu(t, p), (t.mode & Ke) === Ce)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = Tw(t.child), R;
            y === null ? (R = t.child, t.child = null) : (R = y.sibling, y.sibling = null), wS(
              t,
              !1,
              // isBackwards
              R,
              y,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, O = t.child;
            for (t.child = null; O !== null; ) {
              var M = O.alternate;
              if (M !== null && qh(M) === null) {
                t.child = O;
                break;
              }
              var L = O.sibling;
              O.sibling = x, x = O, O = L;
            }
            wS(
              t,
              !0,
              // isBackwards
              x,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            wS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Dw(e, t, a) {
      Eg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = tf(t, null, i, a) : Kr(e, t, i, a), t.child;
    }
    var RC = !1;
    function kw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || RC || (RC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && wi(v, s, "prop", "Context.Provider");
      }
      if (mE(t, u, p), f !== null) {
        var m = f.value;
        if (B(m, p)) {
          if (f.children === s.children && !kh())
            return au(e, t, a);
        } else
          R1(t, u, a);
      }
      var y = s.children;
      return Kr(e, t, y, a), t.child;
    }
    var wC = !1;
    function _w(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), rf(t, a);
      var f = $n(i);
      Qr(t);
      var p;
      return yp.current = t, In(!0), p = s(f), In(!1), Wr(), t.flags |= ka, Kr(e, t, p, a), t.child;
    }
    function Ep() {
      Ni = !0;
    }
    function Em(e, t) {
      (t.mode & Ke) === Ce && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Kt);
    }
    function au(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), eC(), Mp(t.lanes), Ur(a, t.childLanes) ? (x1(e, t), t.child) : null;
    }
    function Ow(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= ua) : s.push(e), a.flags |= Kt, a;
      }
    }
    function bS(e, t) {
      var a = e.lanes;
      return !!Ur(a, t);
    }
    function Nw(e, t, a) {
      switch (t.tag) {
        case Y:
          yC(t), t.stateNode, ef();
          break;
        case I:
          RE(t);
          break;
        case J: {
          var i = t.type;
          sl(i) && Oh(t);
          break;
        }
        case ee:
          Eg(t, t.stateNode.containerInfo);
          break;
        case Ze: {
          var u = t.memoizedProps.value, s = t.type._context;
          mE(t, s, u);
          break;
        }
        case it:
          {
            var f = Ur(a, t.childLanes);
            f && (t.flags |= st);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case He: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Wu(t, lf(ki.current)), t.flags |= Se, null;
            var m = t.child, y = m.childLanes;
            if (Ur(a, y))
              return SC(e, t, a);
            Wu(t, lf(ki.current));
            var R = au(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            Wu(t, lf(ki.current));
          break;
        }
        case Wt: {
          var x = (e.flags & Se) !== Ee, O = Ur(a, t.childLanes);
          if (x) {
            if (O)
              return TC(e, t, a);
            t.flags |= Se;
          }
          var M = t.memoizedState;
          if (M !== null && (M.rendering = null, M.tail = null, M.lastEffect = null), Wu(t, ki.current), O)
            break;
          return null;
        }
        case X:
        case Te:
          return t.lanes = A, vC(e, t, a);
      }
      return au(e, t, a);
    }
    function bC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Ow(e, t, n0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || kh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ni = !0;
        else {
          var s = bS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Se) === Ee)
            return Ni = !1, Nw(e, t, a);
          (e.flags & Js) !== Ee ? Ni = !0 : Ni = !1;
        }
      } else if (Ni = !1, gr() && n1(t)) {
        var f = t.index, p = r1();
        eE(t, p, f);
      }
      switch (t.lanes = A, t.tag) {
        case Oe:
          return dw(e, t, t.type, a);
        case ln: {
          var v = t.elementType;
          return cw(e, t, v, a);
        }
        case Z: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : Oi(m, y);
          return gS(e, t, m, R, a);
        }
        case J: {
          var x = t.type, O = t.pendingProps, M = t.elementType === x ? O : Oi(x, O);
          return mC(e, t, x, M, a);
        }
        case Y:
          return uw(e, t, a);
        case I:
          return ow(e, t, a);
        case fe:
          return sw(e, t);
        case He:
          return SC(e, t, a);
        case ee:
          return Dw(e, t, a);
        case Me: {
          var L = t.type, ae = t.pendingProps, Re = t.elementType === L ? ae : Oi(L, ae);
          return fC(e, t, L, Re, a);
        }
        case xe:
          return aw(e, t, a);
        case we:
          return iw(e, t, a);
        case it:
          return lw(e, t, a);
        case Ze:
          return kw(e, t, a);
        case et:
          return _w(e, t, a);
        case Tt: {
          var ge = t.type, dt = t.pendingProps, rt = Oi(ge, dt);
          if (t.type !== t.elementType) {
            var b = ge.propTypes;
            b && wi(
              b,
              rt,
              // Resolved for outer only
              "prop",
              kt(ge)
            );
          }
          return rt = Oi(ge.type, rt), dC(e, t, ge, rt, a);
        }
        case $e:
          return pC(e, t, t.type, t.pendingProps, a);
        case Ut: {
          var z = t.type, D = t.pendingProps, $ = t.elementType === z ? D : Oi(z, D);
          return fw(e, t, z, $, a);
        }
        case Wt:
          return TC(e, t, a);
        case G:
          break;
        case X:
          return vC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function df(e) {
      e.flags |= st;
    }
    function DC(e) {
      e.flags |= an, e.flags |= bu;
    }
    var kC, DS, _C, OC;
    kC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === I || u.tag === fe)
          JT(e, u.stateNode);
        else if (u.tag !== ee) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, DS = function(e, t) {
    }, _C = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Cg(), v = tR(f, a, s, i, u, p);
        t.updateQueue = v, v && df(t);
      }
    }, OC = function(e, t, a, i) {
      a !== i && df(t);
    };
    function Cp(e, t) {
      if (!gr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Er(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = A, i = Ee;
      if (t) {
        if ((e.mode & yt) !== Ce) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Ie(a, Ie(m.lanes, m.childLanes)), i |= m.subtreeFlags & Cn, i |= m.flags & Cn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Ie(a, Ie(y.lanes, y.childLanes)), i |= y.subtreeFlags & Cn, i |= y.flags & Cn, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & yt) !== Ce) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ie(a, Ie(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ie(a, Ie(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Mw(e, t, a) {
      if (m1() && (t.mode & Ke) !== Ce && (t.flags & Se) === Ee)
        return uE(t), ef(), t.flags |= lr | Do | Hn, !1;
      var i = Uh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (v1(t), Er(t), (t.mode & yt) !== Ce) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (ef(), (t.flags & Se) === Ee && (t.memoizedState = null), t.flags |= st, Er(t), (t.mode & yt) !== Ce) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return oE(), !0;
    }
    function NC(e, t, a) {
      var i = t.pendingProps;
      switch (Jy(t), t.tag) {
        case Oe:
        case ln:
        case $e:
        case Z:
        case Me:
        case xe:
        case we:
        case it:
        case et:
        case Tt:
          return Er(t), null;
        case J: {
          var u = t.type;
          return sl(u) && _h(t), Er(t), null;
        }
        case Y: {
          var s = t.stateNode;
          if (af(t), Xy(t), bg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Uh(t);
            if (f)
              df(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & lr) !== Ee) && (t.flags |= Nn, oE());
            }
          }
          return DS(e, t), Er(t), null;
        }
        case I: {
          xg(t);
          var v = TE(), m = t.type;
          if (e !== null && t.stateNode != null)
            _C(e, t, m, i, v), e.ref !== t.ref && DC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Er(t), null;
            }
            var y = Cg(), R = Uh(t);
            if (R)
              d1(t, v, y) && df(t);
            else {
              var x = ZT(m, i, v, y, t);
              kC(x, t, !1, !1), t.stateNode = x, eR(x, m, i, v) && df(t);
            }
            t.ref !== null && DC(t);
          }
          return Er(t), null;
        }
        case fe: {
          var O = i;
          if (e && t.stateNode != null) {
            var M = e.memoizedProps;
            OC(e, t, M, O);
          } else {
            if (typeof O != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var L = TE(), ae = Cg(), Re = Uh(t);
            Re ? p1(t) && df(t) : t.stateNode = nR(O, L, ae, t);
          }
          return Er(t), null;
        }
        case He: {
          uf(t);
          var ge = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var dt = Mw(e, t, ge);
            if (!dt)
              return t.flags & Hn ? t : null;
          }
          if ((t.flags & Se) !== Ee)
            return t.lanes = a, (t.mode & yt) !== Ce && qg(t), t;
          var rt = ge !== null, b = e !== null && e.memoizedState !== null;
          if (rt !== b && rt) {
            var z = t.child;
            if (z.flags |= En, (t.mode & Ke) !== Ce) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              D || Tg(ki.current, bE) ? Lb() : IS();
            }
          }
          var $ = t.updateQueue;
          if ($ !== null && (t.flags |= st), Er(t), (t.mode & yt) !== Ce && rt) {
            var se = t.child;
            se !== null && (t.treeBaseDuration -= se.treeBaseDuration);
          }
          return null;
        }
        case ee:
          return af(t), DS(e, t), e === null && XR(t.stateNode.containerInfo), Er(t), null;
        case Ze:
          var le = t.type._context;
          return pg(le, t), Er(t), null;
        case Ut: {
          var Le = t.type;
          return sl(Le) && _h(t), Er(t), null;
        }
        case Wt: {
          uf(t);
          var Ve = t.memoizedState;
          if (Ve === null)
            return Er(t), null;
          var zt = (t.flags & Se) !== Ee, Et = Ve.rendering;
          if (Et === null)
            if (zt)
              Cp(Ve, !1);
            else {
              var zn = Ub() && (e === null || (e.flags & Se) === Ee);
              if (!zn)
                for (var Ct = t.child; Ct !== null; ) {
                  var Dn = qh(Ct);
                  if (Dn !== null) {
                    zt = !0, t.flags |= Se, Cp(Ve, !1);
                    var Pr = Dn.updateQueue;
                    return Pr !== null && (t.updateQueue = Pr, t.flags |= st), t.subtreeFlags = Ee, T1(t, a), Wu(t, Rg(ki.current, op)), t.child;
                  }
                  Ct = Ct.sibling;
                }
              Ve.tail !== null && Mn() > ZC() && (t.flags |= Se, zt = !0, Cp(Ve, !1), t.lanes = pd);
            }
          else {
            if (!zt) {
              var wr = qh(Et);
              if (wr !== null) {
                t.flags |= Se, zt = !0;
                var Ua = wr.updateQueue;
                if (Ua !== null && (t.updateQueue = Ua, t.flags |= st), Cp(Ve, !0), Ve.tail === null && Ve.tailMode === "hidden" && !Et.alternate && !gr())
                  return Er(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Mn() * 2 - Ve.renderingStartTime > ZC() && a !== zr && (t.flags |= Se, zt = !0, Cp(Ve, !1), t.lanes = pd);
            }
            if (Ve.isBackwards)
              Et.sibling = t.child, t.child = Et;
            else {
              var Jr = Ve.last;
              Jr !== null ? Jr.sibling = Et : t.child = Et, Ve.last = Et;
            }
          }
          if (Ve.tail !== null) {
            var ea = Ve.tail;
            Ve.rendering = ea, Ve.tail = ea.sibling, Ve.renderingStartTime = Mn(), ea.sibling = null;
            var $r = ki.current;
            return zt ? $r = Rg($r, op) : $r = lf($r), Wu(t, $r), ea;
          }
          return Er(t), null;
        }
        case G:
          break;
        case X:
        case Te: {
          YS(t);
          var su = t.memoizedState, Ef = su !== null;
          if (e !== null) {
            var jp = e.memoizedState, yl = jp !== null;
            yl !== Ef && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !q && (t.flags |= En);
          }
          return !Ef || (t.mode & Ke) === Ce ? Er(t) : Ur(ml, zr) && (Er(t), t.subtreeFlags & (Kt | st) && (t.flags |= En)), null;
        }
        case ot:
          return null;
        case pt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Lw(e, t, a) {
      switch (Jy(t), t.tag) {
        case J: {
          var i = t.type;
          sl(i) && _h(t);
          var u = t.flags;
          return u & Hn ? (t.flags = u & ~Hn | Se, (t.mode & yt) !== Ce && qg(t), t) : null;
        }
        case Y: {
          t.stateNode, af(t), Xy(t), bg();
          var s = t.flags;
          return (s & Hn) !== Ee && (s & Se) === Ee ? (t.flags = s & ~Hn | Se, t) : null;
        }
        case I:
          return xg(t), null;
        case He: {
          uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            ef();
          }
          var p = t.flags;
          return p & Hn ? (t.flags = p & ~Hn | Se, (t.mode & yt) !== Ce && qg(t), t) : null;
        }
        case Wt:
          return uf(t), null;
        case ee:
          return af(t), null;
        case Ze:
          var v = t.type._context;
          return pg(v, t), null;
        case X:
        case Te:
          return YS(t), null;
        case ot:
          return null;
        default:
          return null;
      }
    }
    function MC(e, t, a) {
      switch (Jy(t), t.tag) {
        case J: {
          var i = t.type.childContextTypes;
          i != null && _h(t);
          break;
        }
        case Y: {
          t.stateNode, af(t), Xy(t), bg();
          break;
        }
        case I: {
          xg(t);
          break;
        }
        case ee:
          af(t);
          break;
        case He:
          uf(t);
          break;
        case Wt:
          uf(t);
          break;
        case Ze:
          var u = t.type._context;
          pg(u, t);
          break;
        case X:
        case Te:
          YS(t);
          break;
      }
    }
    var LC = null;
    LC = /* @__PURE__ */ new Set();
    var Cm = !1, Cr = !1, zw = typeof WeakSet == "function" ? WeakSet : Set, ve = null, pf = null, vf = null;
    function Uw(e) {
      Ii(null, function() {
        throw e;
      }), bo();
    }
    var Aw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & yt)
        try {
          vl(), t.componentWillUnmount();
        } finally {
          pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function zC(e, t) {
      try {
        Ku(Zn, e);
      } catch (a) {
        $t(e, t, a);
      }
    }
    function kS(e, t, a) {
      try {
        Aw(e, a);
      } catch (i) {
        $t(e, t, i);
      }
    }
    function jw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        $t(e, t, i);
      }
    }
    function UC(e, t) {
      try {
        jC(e);
      } catch (a) {
        $t(e, t, a);
      }
    }
    function hf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (un && ta && e.mode & yt)
              try {
                vl(), i = a(null);
              } finally {
                pl(e);
              }
            else
              i = a(null);
          } catch (u) {
            $t(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function xm(e, t, a) {
      try {
        a();
      } catch (i) {
        $t(e, t, i);
      }
    }
    var AC = !1;
    function Fw(e, t) {
      KT(e.containerInfo), ve = t, Hw();
      var a = AC;
      return AC = !1, a;
    }
    function Hw() {
      for (; ve !== null; ) {
        var e = ve, t = e.child;
        (e.subtreeFlags & Wi) !== Ee && t !== null ? (t.return = e, ve = t) : Vw();
      }
    }
    function Vw() {
      for (; ve !== null; ) {
        var e = ve;
        Pt(e);
        try {
          Bw(e);
        } catch (a) {
          $t(e, e.return, a);
        }
        rn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ve = t;
          return;
        }
        ve = e.return;
      }
    }
    function Bw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Nn) !== Ee) {
        switch (Pt(e), e.tag) {
          case Z:
          case Me:
          case $e:
            break;
          case J: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ss && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Oi(e.type, i), u);
              {
                var p = LC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Y: {
            {
              var v = e.stateNode;
              CR(v.containerInfo);
            }
            break;
          }
          case I:
          case fe:
          case ee:
          case Ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        rn();
      }
    }
    function Mi(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Sr) !== ga ? Si(t) : (e & Zn) !== ga && _o(t), (e & cl) !== ga && zp(!0), xm(t, a, p), (e & cl) !== ga && zp(!1), (e & Sr) !== ga ? qi() : (e & Zn) !== ga && fd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ku(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Sr) !== ga ? cd(t) : (e & Zn) !== ga && ic(t);
            var f = s.create;
            (e & cl) !== ga && zp(!0), s.destroy = f(), (e & cl) !== ga && zp(!1), (e & Sr) !== ga ? Dv() : (e & Zn) !== ga && kv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Zn) !== Ee ? v = "useLayoutEffect" : (s.tag & cl) !== Ee ? v = "useInsertionEffect" : v = "useEffect";
                var m = void 0;
                p === null ? m = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? m = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : m = " You returned: " + p, g("%s must not return anything besides a function, which is used for clean-up.%s", v, m);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Pw(e, t) {
      if ((t.flags & st) !== Ee)
        switch (t.tag) {
          case it: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = ZE(), p = t.alternate === null ? "mount" : "update";
            qE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case Y:
                  var m = v.stateNode;
                  m.passiveEffectDuration += a;
                  break e;
                case it:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function $w(e, t, a, i) {
      if ((a.flags & Xi) !== Ee)
        switch (a.tag) {
          case Z:
          case Me:
          case $e: {
            if (!Cr)
              if (a.mode & yt)
                try {
                  vl(), Ku(Zn | qn, a);
                } finally {
                  pl(a);
                }
              else
                Ku(Zn | qn, a);
            break;
          }
          case J: {
            var u = a.stateNode;
            if (a.flags & st && !Cr)
              if (t === null)
                if (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & yt)
                  try {
                    vl(), u.componentDidMount();
                  } finally {
                    pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Oi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & yt)
                  try {
                    vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), xE(a, p, u));
            break;
          }
          case Y: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case I:
                    m = a.child.stateNode;
                    break;
                  case J:
                    m = a.child.stateNode;
                    break;
                }
              xE(a, v, m);
            }
            break;
          }
          case I: {
            var y = a.stateNode;
            if (t === null && a.flags & st) {
              var R = a.type, x = a.memoizedProps;
              uR(y, R, x);
            }
            break;
          }
          case fe:
            break;
          case ee:
            break;
          case it: {
            {
              var O = a.memoizedProps, M = O.onCommit, L = O.onRender, ae = a.stateNode.effectDuration, Re = ZE(), ge = t === null ? "mount" : "update";
              qE() && (ge = "nested-update"), typeof L == "function" && L(a.memoizedProps.id, ge, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Re);
              {
                typeof M == "function" && M(a.memoizedProps.id, ge, ae, Re), Vb(a);
                var dt = a.return;
                e: for (; dt !== null; ) {
                  switch (dt.tag) {
                    case Y:
                      var rt = dt.stateNode;
                      rt.effectDuration += ae;
                      break e;
                    case it:
                      var b = dt.stateNode;
                      b.effectDuration += ae;
                      break e;
                  }
                  dt = dt.return;
                }
              }
            }
            break;
          }
          case He: {
            qw(e, a);
            break;
          }
          case Wt:
          case Ut:
          case G:
          case X:
          case Te:
          case pt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Cr || a.flags & an && jC(a);
    }
    function Yw(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case $e: {
          if (e.mode & yt)
            try {
              vl(), zC(e, e.return);
            } finally {
              pl(e);
            }
          else
            zC(e, e.return);
          break;
        }
        case J: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && jw(e, e.return, t), UC(e, e.return);
          break;
        }
        case I: {
          UC(e, e.return);
          break;
        }
      }
    }
    function Iw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === I) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? yR(u) : SR(i.stateNode, i.memoizedProps);
            } catch (f) {
              $t(e, e.return, f);
            }
          }
        } else if (i.tag === fe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? gR(s) : ER(s, i.memoizedProps);
            } catch (f) {
              $t(e, e.return, f);
            }
        } else if (!((i.tag === X || i.tag === Te) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function jC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case I:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & yt)
            try {
              vl(), u = t(i);
            } finally {
              pl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = i;
      }
    }
    function Qw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function FC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, FC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === I) {
          var a = e.stateNode;
          a !== null && ZR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Ww(e) {
      for (var t = e.return; t !== null; ) {
        if (HC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function HC(e) {
      return e.tag === I || e.tag === Y || e.tag === ee;
    }
    function VC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || HC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== I && t.tag !== fe && t.tag !== en; ) {
          if (t.flags & Kt || t.child === null || t.tag === ee)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Kt))
          return t.stateNode;
      }
    }
    function Gw(e) {
      var t = Ww(e);
      switch (t.tag) {
        case I: {
          var a = t.stateNode;
          t.flags & oa && (P0(a), t.flags &= ~oa);
          var i = VC(e);
          OS(e, i, a);
          break;
        }
        case Y:
        case ee: {
          var u = t.stateNode.containerInfo, s = VC(e);
          _S(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === I || i === fe;
      if (u) {
        var s = e.stateNode;
        t ? pR(a, s, t) : fR(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    function OS(e, t, a) {
      var i = e.tag, u = i === I || i === fe;
      if (u) {
        var s = e.stateNode;
        t ? dR(a, s, t) : cR(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          OS(f, t, a);
          for (var p = f.sibling; p !== null; )
            OS(p, t, a), p = p.sibling;
        }
      }
    }
    var xr = null, Li = !1;
    function Xw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case I: {
              xr = i.stateNode, Li = !1;
              break e;
            }
            case Y: {
              xr = i.stateNode.containerInfo, Li = !0;
              break e;
            }
            case ee: {
              xr = i.stateNode.containerInfo, Li = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (xr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        BC(e, t, a), xr = null, Li = !1;
      }
      Qw(a);
    }
    function qu(e, t, a) {
      for (var i = a.child; i !== null; )
        BC(e, t, i), i = i.sibling;
    }
    function BC(e, t, a) {
      switch (ud(a), a.tag) {
        case I:
          Cr || hf(a, t);
        case fe: {
          {
            var i = xr, u = Li;
            xr = null, qu(e, t, a), xr = i, Li = u, xr !== null && (Li ? hR(xr, a.stateNode) : vR(xr, a.stateNode));
          }
          return;
        }
        case en: {
          xr !== null && (Li ? mR(xr, a.stateNode) : By(xr, a.stateNode));
          return;
        }
        case ee: {
          {
            var s = xr, f = Li;
            xr = a.stateNode.containerInfo, Li = !0, qu(e, t, a), xr = s, Li = f;
          }
          return;
        }
        case Z:
        case Me:
        case Tt:
        case $e: {
          if (!Cr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, x = R.destroy, O = R.tag;
                  x !== void 0 && ((O & cl) !== ga ? xm(a, t, x) : (O & Zn) !== ga && (_o(a), a.mode & yt ? (vl(), xm(a, t, x), pl(a)) : xm(a, t, x), fd())), y = y.next;
                } while (y !== m);
              }
            }
          }
          qu(e, t, a);
          return;
        }
        case J: {
          if (!Cr) {
            hf(a, t);
            var M = a.stateNode;
            typeof M.componentWillUnmount == "function" && kS(a, t, M);
          }
          qu(e, t, a);
          return;
        }
        case G: {
          qu(e, t, a);
          return;
        }
        case X: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ke
          ) {
            var L = Cr;
            Cr = L || a.memoizedState !== null, qu(e, t, a), Cr = L;
          } else
            qu(e, t, a);
          break;
        }
        default: {
          qu(e, t, a);
          return;
        }
      }
    }
    function Kw(e) {
      e.memoizedState;
    }
    function qw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && UR(s);
          }
        }
      }
    }
    function PC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new zw()), t.forEach(function(i) {
          var u = Wb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Lr)
              if (pf !== null && vf !== null)
                Lp(vf, pf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Zw(e, t, a) {
      pf = a, vf = e, Pt(t), $C(t, e), Pt(t), pf = null, vf = null;
    }
    function zi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Xw(e, t, s);
          } catch (v) {
            $t(s, t, v);
          }
        }
      var f = so();
      if (t.subtreeFlags & Gi)
        for (var p = t.child; p !== null; )
          Pt(p), $C(p, e), p = p.sibling;
      Pt(f);
    }
    function $C(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Z:
        case Me:
        case Tt:
        case $e: {
          if (zi(t, e), hl(e), u & st) {
            try {
              Mi(cl | qn, e, e.return), Ku(cl | qn, e);
            } catch (Le) {
              $t(e, e.return, Le);
            }
            if (e.mode & yt) {
              try {
                vl(), Mi(Zn | qn, e, e.return);
              } catch (Le) {
                $t(e, e.return, Le);
              }
              pl(e);
            } else
              try {
                Mi(Zn | qn, e, e.return);
              } catch (Le) {
                $t(e, e.return, Le);
              }
          }
          return;
        }
        case J: {
          zi(t, e), hl(e), u & an && i !== null && hf(i, i.return);
          return;
        }
        case I: {
          zi(t, e), hl(e), u & an && i !== null && hf(i, i.return);
          {
            if (e.flags & oa) {
              var s = e.stateNode;
              try {
                P0(s);
              } catch (Le) {
                $t(e, e.return, Le);
              }
            }
            if (u & st) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    oR(f, y, m, v, p, e);
                  } catch (Le) {
                    $t(e, e.return, Le);
                  }
              }
            }
          }
          return;
        }
        case fe: {
          if (zi(t, e), hl(e), u & st) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, x = e.memoizedProps, O = i !== null ? i.memoizedProps : x;
            try {
              sR(R, O, x);
            } catch (Le) {
              $t(e, e.return, Le);
            }
          }
          return;
        }
        case Y: {
          if (zi(t, e), hl(e), u & st && i !== null) {
            var M = i.memoizedState;
            if (M.isDehydrated)
              try {
                zR(t.containerInfo);
              } catch (Le) {
                $t(e, e.return, Le);
              }
          }
          return;
        }
        case ee: {
          zi(t, e), hl(e);
          return;
        }
        case He: {
          zi(t, e), hl(e);
          var L = e.child;
          if (L.flags & En) {
            var ae = L.stateNode, Re = L.memoizedState, ge = Re !== null;
            if (ae.isHidden = ge, ge) {
              var dt = L.alternate !== null && L.alternate.memoizedState !== null;
              dt || Mb();
            }
          }
          if (u & st) {
            try {
              Kw(e);
            } catch (Le) {
              $t(e, e.return, Le);
            }
            PC(e);
          }
          return;
        }
        case X: {
          var rt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ke
          ) {
            var b = Cr;
            Cr = b || rt, zi(t, e), Cr = b;
          } else
            zi(t, e);
          if (hl(e), u & En) {
            var z = e.stateNode, D = e.memoizedState, $ = D !== null, se = e;
            if (z.isHidden = $, $ && !rt && (se.mode & Ke) !== Ce) {
              ve = se;
              for (var le = se.child; le !== null; )
                ve = le, eb(le), le = le.sibling;
            }
            Iw(se, $);
          }
          return;
        }
        case Wt: {
          zi(t, e), hl(e), u & st && PC(e);
          return;
        }
        case G:
          return;
        default: {
          zi(t, e), hl(e);
          return;
        }
      }
    }
    function hl(e) {
      var t = e.flags;
      if (t & Kt) {
        try {
          Gw(e);
        } catch (a) {
          $t(e, e.return, a);
        }
        e.flags &= ~Kt;
      }
      t & Or && (e.flags &= ~Or);
    }
    function Jw(e, t, a) {
      pf = a, vf = t, ve = e, YC(e, t, a), pf = null, vf = null;
    }
    function YC(e, t, a) {
      for (var i = (e.mode & Ke) !== Ce; ve !== null; ) {
        var u = ve, s = u.child;
        if (u.tag === X && i) {
          var f = u.memoizedState !== null, p = f || Cm;
          if (p) {
            NS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || Cr, R = Cm, x = Cr;
            Cm = p, Cr = y, Cr && !x && (ve = u, tb(u));
            for (var O = s; O !== null; )
              ve = O, YC(
                O,
                // New root; bubble back up to here and stop.
                t,
                a
              ), O = O.sibling;
            ve = u, Cm = R, Cr = x, NS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Xi) !== Ee && s !== null ? (s.return = u, ve = s) : NS(e, t, a);
      }
    }
    function NS(e, t, a) {
      for (; ve !== null; ) {
        var i = ve;
        if ((i.flags & Xi) !== Ee) {
          var u = i.alternate;
          Pt(i);
          try {
            $w(t, u, i, a);
          } catch (f) {
            $t(i, i.return, f);
          }
          rn();
        }
        if (i === e) {
          ve = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ve = s;
          return;
        }
        ve = i.return;
      }
    }
    function eb(e) {
      for (; ve !== null; ) {
        var t = ve, a = t.child;
        switch (t.tag) {
          case Z:
          case Me:
          case Tt:
          case $e: {
            if (t.mode & yt)
              try {
                vl(), Mi(Zn, t, t.return);
              } finally {
                pl(t);
              }
            else
              Mi(Zn, t, t.return);
            break;
          }
          case J: {
            hf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && kS(t, t.return, i);
            break;
          }
          case I: {
            hf(t, t.return);
            break;
          }
          case X: {
            var u = t.memoizedState !== null;
            if (u) {
              IC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ve = a) : IC(e);
      }
    }
    function IC(e) {
      for (; ve !== null; ) {
        var t = ve;
        if (t === e) {
          ve = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ve = a;
          return;
        }
        ve = t.return;
      }
    }
    function tb(e) {
      for (; ve !== null; ) {
        var t = ve, a = t.child;
        if (t.tag === X) {
          var i = t.memoizedState !== null;
          if (i) {
            QC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ve = a) : QC(e);
      }
    }
    function QC(e) {
      for (; ve !== null; ) {
        var t = ve;
        Pt(t);
        try {
          Yw(t);
        } catch (i) {
          $t(t, t.return, i);
        }
        if (rn(), t === e) {
          ve = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ve = a;
          return;
        }
        ve = t.return;
      }
    }
    function nb(e, t, a, i) {
      ve = t, rb(t, e, a, i);
    }
    function rb(e, t, a, i) {
      for (; ve !== null; ) {
        var u = ve, s = u.child;
        (u.subtreeFlags & yi) !== Ee && s !== null ? (s.return = u, ve = s) : ab(e, t, a, i);
      }
    }
    function ab(e, t, a, i) {
      for (; ve !== null; ) {
        var u = ve;
        if ((u.flags & _r) !== Ee) {
          Pt(u);
          try {
            ib(t, u, a, i);
          } catch (f) {
            $t(u, u.return, f);
          }
          rn();
        }
        if (u === e) {
          ve = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ve = s;
          return;
        }
        ve = u.return;
      }
    }
    function ib(e, t, a, i) {
      switch (t.tag) {
        case Z:
        case Me:
        case $e: {
          if (t.mode & yt) {
            Kg();
            try {
              Ku(Sr | qn, t);
            } finally {
              Xg(t);
            }
          } else
            Ku(Sr | qn, t);
          break;
        }
      }
    }
    function lb(e) {
      ve = e, ub();
    }
    function ub() {
      for (; ve !== null; ) {
        var e = ve, t = e.child;
        if ((ve.flags & ua) !== Ee) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ve = u, cb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ve = e;
          }
        }
        (e.subtreeFlags & yi) !== Ee && t !== null ? (t.return = e, ve = t) : ob();
      }
    }
    function ob() {
      for (; ve !== null; ) {
        var e = ve;
        (e.flags & _r) !== Ee && (Pt(e), sb(e), rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ve = t;
          return;
        }
        ve = e.return;
      }
    }
    function sb(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case $e: {
          e.mode & yt ? (Kg(), Mi(Sr | qn, e, e.return), Xg(e)) : Mi(Sr | qn, e, e.return);
          break;
        }
      }
    }
    function cb(e, t) {
      for (; ve !== null; ) {
        var a = ve;
        Pt(a), db(a, t), rn();
        var i = a.child;
        i !== null ? (i.return = a, ve = i) : fb(e);
      }
    }
    function fb(e) {
      for (; ve !== null; ) {
        var t = ve, a = t.sibling, i = t.return;
        if (FC(t), t === e) {
          ve = null;
          return;
        }
        if (a !== null) {
          a.return = i, ve = a;
          return;
        }
        ve = i;
      }
    }
    function db(e, t) {
      switch (e.tag) {
        case Z:
        case Me:
        case $e: {
          e.mode & yt ? (Kg(), Mi(Sr, e, t), Xg(e)) : Mi(Sr, e, t);
          break;
        }
      }
    }
    function pb(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case $e: {
          try {
            Ku(Zn | qn, e);
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
        case J: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
      }
    }
    function vb(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case $e: {
          try {
            Ku(Sr | qn, e);
          } catch (t) {
            $t(e, e.return, t);
          }
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case $e: {
          try {
            Mi(Zn | qn, e, e.return);
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
        case J: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && kS(e, e.return, t);
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case Z:
        case Me:
        case $e:
          try {
            Mi(Sr | qn, e, e.return);
          } catch (t) {
            $t(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var xp = Symbol.for;
      xp("selector.component"), xp("selector.has_pseudo_class"), xp("selector.role"), xp("selector.test_id"), xp("selector.text");
    }
    var yb = [];
    function gb() {
      yb.forEach(function(e) {
        return e();
      });
    }
    var Sb = k.ReactCurrentActQueue;
    function Eb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function WC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Sb.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Cb = Math.ceil, MS = k.ReactCurrentDispatcher, LS = k.ReactCurrentOwner, Tr = k.ReactCurrentBatchConfig, Ui = k.ReactCurrentActQueue, tr = (
      /*             */
      0
    ), GC = (
      /*               */
      1
    ), Rr = (
      /*                */
      2
    ), ri = (
      /*                */
      4
    ), iu = 0, Tp = 1, Es = 2, Tm = 3, Rp = 4, XC = 5, zS = 6, ft = tr, qr = null, vn = null, nr = A, ml = A, US = Bu(A), rr = iu, wp = null, Rm = A, bp = A, wm = A, Dp = null, Sa = null, AS = 0, KC = 500, qC = 1 / 0, xb = 500, lu = null;
    function kp() {
      qC = Mn() + xb;
    }
    function ZC() {
      return qC;
    }
    var bm = !1, jS = null, mf = null, Cs = !1, Zu = null, _p = A, FS = [], HS = null, Tb = 50, Op = 0, VS = null, BS = !1, Dm = !1, Rb = 50, yf = 0, km = null, Np = jt, _m = A, JC = !1;
    function Om() {
      return qr;
    }
    function Zr() {
      return (ft & (Rr | ri)) !== tr ? Mn() : (Np !== jt || (Np = Mn()), Np);
    }
    function Ju(e) {
      var t = e.mode;
      if ((t & Ke) === Ce)
        return Ne;
      if ((ft & Rr) !== tr && nr !== A)
        return Po(nr);
      var a = S1() !== g1;
      if (a) {
        if (Tr.transition !== null) {
          var i = Tr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return _m === ht && (_m = Sd()), _m;
      }
      var u = va();
      if (u !== ht)
        return u;
      var s = rR();
      return s;
    }
    function wb(e) {
      var t = e.mode;
      return (t & Ke) === Ce ? Ne : zv();
    }
    function ar(e, t, a, i) {
      Xb(), JC && g("useInsertionEffect must not schedule updates."), BS && (Dm = !0), Ou(e, a, i), (ft & Rr) !== A && e === qr ? Zb(t) : (Lr && Io(e, t, a), Jb(t), e === qr && ((ft & Rr) === tr && (bp = Ie(bp, a)), rr === Rp && eo(e, nr)), Ea(e, i), a === Ne && ft === tr && (t.mode & Ke) === Ce && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ui.isBatchingLegacy && (kp(), J0()));
    }
    function bb(e, t, a) {
      var i = e.current;
      i.lanes = t, Ou(e, t, a), Ea(e, a);
    }
    function Db(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (ft & Rr) !== tr
      );
    }
    function Ea(e, t) {
      var a = e.callbackNode;
      wc(e, t);
      var i = Rc(e, e === qr ? nr : A);
      if (i === A) {
        a !== null && hx(a), e.callbackNode = null, e.callbackPriority = ht;
        return;
      }
      var u = el(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ui.current !== null && a !== GS)) {
        a == null && s !== Ne && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && hx(a);
      var f;
      if (u === Ne)
        e.tag === Pu ? (Ui.isBatchingLegacy !== null && (Ui.didScheduleLegacyUpdate = !0), t1(nx.bind(null, e))) : Z0(nx.bind(null, e)), Ui.current !== null ? Ui.current.push($u) : iR(function() {
          (ft & (Rr | ri)) === tr && $u();
        }), f = null;
      else {
        var p;
        switch (Bv(i)) {
          case pr:
            p = ko;
            break;
          case Wa:
            p = Ki;
            break;
          case da:
            p = gi;
            break;
          case pa:
            p = Ll;
            break;
          default:
            p = gi;
            break;
        }
        f = XS(p, ex.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function ex(e, t) {
      if (I1(), Np = jt, _m = A, (ft & (Rr | ri)) !== tr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ou();
      if (i && e.callbackNode !== a)
        return null;
      var u = Rc(e, e === qr ? nr : A);
      if (u === A)
        return null;
      var s = !Dc(e, u) && !Lv(e, u) && !t, f = s ? jb(e, u) : Mm(e, u);
      if (f !== iu) {
        if (f === Es) {
          var p = bc(e);
          p !== A && (u = p, f = PS(e, p));
        }
        if (f === Tp) {
          var v = wp;
          throw xs(e, A), eo(e, u), Ea(e, Mn()), v;
        }
        if (f === zS)
          eo(e, u);
        else {
          var m = !Dc(e, u), y = e.current.alternate;
          if (m && !_b(y)) {
            if (f = Mm(e, u), f === Es) {
              var R = bc(e);
              R !== A && (u = R, f = PS(e, R));
            }
            if (f === Tp) {
              var x = wp;
              throw xs(e, A), eo(e, u), Ea(e, Mn()), x;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, kb(e, f, u);
        }
      }
      return Ea(e, Mn()), e.callbackNode === a ? ex.bind(null, e) : null;
    }
    function PS(e, t) {
      var a = Dp;
      if (Oc(e)) {
        var i = xs(e, t);
        i.flags |= lr, GR(e.containerInfo);
      }
      var u = Mm(e, t);
      if (u !== Es) {
        var s = Sa;
        Sa = a, s !== null && tx(s);
      }
      return u;
    }
    function tx(e) {
      Sa === null ? Sa = e : Sa.push.apply(Sa, e);
    }
    function kb(e, t, a) {
      switch (t) {
        case iu:
        case Tp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Es: {
          Ts(e, Sa, lu);
          break;
        }
        case Tm: {
          if (eo(e, a), Yl(a) && // do not delay if we're inside an act() scope
          !mx()) {
            var i = AS + KC - Mn();
            if (i > 10) {
              var u = Rc(e, A);
              if (u !== A)
                break;
              var s = e.suspendedLanes;
              if (!Il(s, a)) {
                Zr(), kc(e, s);
                break;
              }
              e.timeoutHandle = Hy(Ts.bind(null, e, Sa, lu), i);
              break;
            }
          }
          Ts(e, Sa, lu);
          break;
        }
        case Rp: {
          if (eo(e, a), yd(a))
            break;
          if (!mx()) {
            var f = Oa(e, a), p = f, v = Mn() - p, m = Gb(v) - v;
            if (m > 10) {
              e.timeoutHandle = Hy(Ts.bind(null, e, Sa, lu), m);
              break;
            }
          }
          Ts(e, Sa, lu);
          break;
        }
        case XC: {
          Ts(e, Sa, lu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function _b(e) {
      for (var t = e; ; ) {
        if (t.flags & wu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!B(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & wu && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function eo(e, t) {
      t = $o(t, wm), t = $o(t, bp), jv(e, t);
    }
    function nx(e) {
      if (Q1(), (ft & (Rr | ri)) !== tr)
        throw new Error("Should not already be working.");
      ou();
      var t = Rc(e, A);
      if (!Ur(t, Ne))
        return Ea(e, Mn()), null;
      var a = Mm(e, t);
      if (e.tag !== Pu && a === Es) {
        var i = bc(e);
        i !== A && (t = i, a = PS(e, i));
      }
      if (a === Tp) {
        var u = wp;
        throw xs(e, A), eo(e, t), Ea(e, Mn()), u;
      }
      if (a === zS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ts(e, Sa, lu), Ea(e, Mn()), null;
    }
    function Ob(e, t) {
      t !== A && (_c(e, Ie(t, Ne)), Ea(e, Mn()), (ft & (Rr | ri)) === tr && (kp(), $u()));
    }
    function $S(e, t) {
      var a = ft;
      ft |= GC;
      try {
        return e(t);
      } finally {
        ft = a, ft === tr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ui.isBatchingLegacy && (kp(), J0());
      }
    }
    function Nb(e, t, a, i, u) {
      var s = va(), f = Tr.transition;
      try {
        return Tr.transition = null, Rn(pr), e(t, a, i, u);
      } finally {
        Rn(s), Tr.transition = f, ft === tr && kp();
      }
    }
    function uu(e) {
      Zu !== null && Zu.tag === Pu && (ft & (Rr | ri)) === tr && ou();
      var t = ft;
      ft |= GC;
      var a = Tr.transition, i = va();
      try {
        return Tr.transition = null, Rn(pr), e ? e() : void 0;
      } finally {
        Rn(i), Tr.transition = a, ft = t, (ft & (Rr | ri)) === tr && $u();
      }
    }
    function rx() {
      return (ft & (Rr | ri)) !== tr;
    }
    function Nm(e, t) {
      Vr(US, ml, e), ml = Ie(ml, t);
    }
    function YS(e) {
      ml = US.current, Hr(US, e);
    }
    function xs(e, t) {
      e.finishedWork = null, e.finishedLanes = A;
      var a = e.timeoutHandle;
      if (a !== Vy && (e.timeoutHandle = Vy, aR(a)), vn !== null)
        for (var i = vn.return; i !== null; ) {
          var u = i.alternate;
          MC(u, i), i = i.return;
        }
      qr = e;
      var s = Rs(e.current, null);
      return vn = s, nr = ml = t, rr = iu, wp = null, Rm = A, bp = A, wm = A, Dp = null, Sa = null, b1(), Di.discardPendingWarnings(), s;
    }
    function ax(e, t) {
      do {
        var a = vn;
        try {
          if (Bh(), kE(), rn(), LS.current = null, a === null || a.return === null) {
            rr = Tp, wp = t, vn = null;
            return;
          }
          if (un && a.mode & yt && mm(a, !0), Yn)
            if (Wr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Qa(a, i, nr);
            } else
              Oo(a, t, nr);
          tw(e, a.return, a, t, nr), ox(a);
        } catch (u) {
          t = u, vn === a && a !== null ? (a = a.return, vn = a) : a = vn;
          continue;
        }
        return;
      } while (!0);
    }
    function ix() {
      var e = MS.current;
      return MS.current = fm, e === null ? fm : e;
    }
    function lx(e) {
      MS.current = e;
    }
    function Mb() {
      AS = Mn();
    }
    function Mp(e) {
      Rm = Ie(e, Rm);
    }
    function Lb() {
      rr === iu && (rr = Tm);
    }
    function IS() {
      (rr === iu || rr === Tm || rr === Es) && (rr = Rp), qr !== null && (Bo(Rm) || Bo(bp)) && eo(qr, nr);
    }
    function zb(e) {
      rr !== Rp && (rr = Es), Dp === null ? Dp = [e] : Dp.push(e);
    }
    function Ub() {
      return rr === iu;
    }
    function Mm(e, t) {
      var a = ft;
      ft |= Rr;
      var i = ix();
      if (qr !== e || nr !== t) {
        if (Lr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lp(e, nr), u.clear()), Fv(e, t);
        }
        lu = Td(), xs(e, t);
      }
      jl(t);
      do
        try {
          Ab();
          break;
        } catch (s) {
          ax(e, s);
        }
      while (!0);
      if (Bh(), ft = a, lx(i), vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return lc(), qr = null, nr = A, rr;
    }
    function Ab() {
      for (; vn !== null; )
        ux(vn);
    }
    function jb(e, t) {
      var a = ft;
      ft |= Rr;
      var i = ix();
      if (qr !== e || nr !== t) {
        if (Lr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lp(e, nr), u.clear()), Fv(e, t);
        }
        lu = Td(), kp(), xs(e, t);
      }
      jl(t);
      do
        try {
          Fb();
          break;
        } catch (s) {
          ax(e, s);
        }
      while (!0);
      return Bh(), lx(i), ft = a, vn !== null ? (_v(), iu) : (lc(), qr = null, nr = A, rr);
    }
    function Fb() {
      for (; vn !== null && !nd(); )
        ux(vn);
    }
    function ux(e) {
      var t = e.alternate;
      Pt(e);
      var a;
      (e.mode & yt) !== Ce ? (Gg(e), a = QS(t, e, ml), mm(e, !0)) : a = QS(t, e, ml), rn(), e.memoizedProps = e.pendingProps, a === null ? ox(e) : vn = a, LS.current = null;
    }
    function ox(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Do) === Ee) {
          Pt(t);
          var u = void 0;
          if ((t.mode & yt) === Ce ? u = NC(a, t, ml) : (Gg(t), u = NC(a, t, ml), mm(t, !1)), rn(), u !== null) {
            vn = u;
            return;
          }
        } else {
          var s = Lw(a, t);
          if (s !== null) {
            s.flags &= Tv, vn = s;
            return;
          }
          if ((t.mode & yt) !== Ce) {
            mm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Do, i.subtreeFlags = Ee, i.deletions = null;
          else {
            rr = zS, vn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          vn = v;
          return;
        }
        t = i, vn = t;
      } while (t !== null);
      rr === iu && (rr = XC);
    }
    function Ts(e, t, a) {
      var i = va(), u = Tr.transition;
      try {
        Tr.transition = null, Rn(pr), Hb(e, t, a, i);
      } finally {
        Tr.transition = u, Rn(i);
      }
      return null;
    }
    function Hb(e, t, a, i) {
      do
        ou();
      while (Zu !== null);
      if (Kb(), (ft & (Rr | ri)) !== tr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (od(s), u === null)
        return sd(), null;
      if (s === A && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = A, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = ht;
      var f = Ie(u.lanes, u.childLanes);
      Cd(e, f), e === qr && (qr = null, vn = null, nr = A), ((u.subtreeFlags & yi) !== Ee || (u.flags & yi) !== Ee) && (Cs || (Cs = !0, HS = a, XS(gi, function() {
        return ou(), null;
      })));
      var p = (u.subtreeFlags & (Wi | Gi | Xi | yi)) !== Ee, v = (u.flags & (Wi | Gi | Xi | yi)) !== Ee;
      if (p || v) {
        var m = Tr.transition;
        Tr.transition = null;
        var y = va();
        Rn(pr);
        var R = ft;
        ft |= ri, LS.current = null, Fw(e, u), JE(), Zw(e, u, s), qT(e.containerInfo), e.current = u, No(s), Jw(u, e, s), Mo(), rd(), ft = R, Rn(y), Tr.transition = m;
      } else
        e.current = u, JE();
      var x = Cs;
      if (Cs ? (Cs = !1, Zu = e, _p = s) : (yf = 0, km = null), f = e.pendingLanes, f === A && (mf = null), x || dx(e.current, !1), id(u.stateNode, i), Lr && e.memoizedUpdaters.clear(), gb(), Ea(e, Mn()), t !== null)
        for (var O = e.onRecoverableError, M = 0; M < t.length; M++) {
          var L = t[M], ae = L.stack, Re = L.digest;
          O(L.value, {
            componentStack: ae,
            digest: Re
          });
        }
      if (bm) {
        bm = !1;
        var ge = jS;
        throw jS = null, ge;
      }
      return Ur(_p, Ne) && e.tag !== Pu && ou(), f = e.pendingLanes, Ur(f, Ne) ? (Y1(), e === VS ? Op++ : (Op = 0, VS = e)) : Op = 0, $u(), sd(), null;
    }
    function ou() {
      if (Zu !== null) {
        var e = Bv(_p), t = Wo(da, e), a = Tr.transition, i = va();
        try {
          return Tr.transition = null, Rn(t), Bb();
        } finally {
          Rn(i), Tr.transition = a;
        }
      }
      return !1;
    }
    function Vb(e) {
      FS.push(e), Cs || (Cs = !0, XS(gi, function() {
        return ou(), null;
      }));
    }
    function Bb() {
      if (Zu === null)
        return !1;
      var e = HS;
      HS = null;
      var t = Zu, a = _p;
      if (Zu = null, _p = A, (ft & (Rr | ri)) !== tr)
        throw new Error("Cannot flush passive effects while already rendering.");
      BS = !0, Dm = !1, Al(a);
      var i = ft;
      ft |= ri, lb(t.current), nb(t, t.current, a, e);
      {
        var u = FS;
        FS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Pw(t, f);
        }
      }
      dd(), dx(t.current, !0), ft = i, $u(), Dm ? t === km ? yf++ : (yf = 0, km = t) : yf = 0, BS = !1, Dm = !1, ld(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function sx(e) {
      return mf !== null && mf.has(e);
    }
    function Pb(e) {
      mf === null ? mf = /* @__PURE__ */ new Set([e]) : mf.add(e);
    }
    function $b(e) {
      bm || (bm = !0, jS = e);
    }
    var Yb = $b;
    function cx(e, t, a) {
      var i = gs(a, t), u = uC(e, i, Ne), s = Iu(e, u, Ne), f = Zr();
      s !== null && (Ou(s, Ne, f), Ea(s, f));
    }
    function $t(e, t, a) {
      if (Uw(a), zp(!1), e.tag === Y) {
        cx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Y) {
          cx(i, e, a);
          return;
        } else if (i.tag === J) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !sx(s)) {
            var f = gs(a, e), p = dS(i, f, Ne), v = Iu(i, p, Ne), m = Zr();
            v !== null && (Ou(v, Ne, m), Ea(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Ib(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Zr();
      kc(e, a), eD(e), qr === e && Il(nr, a) && (rr === Rp || rr === Tm && Yl(nr) && Mn() - AS < KC ? xs(e, A) : wm = Ie(wm, a)), Ea(e, u);
    }
    function fx(e, t) {
      t === ht && (t = wb(e));
      var a = Zr(), i = ya(e, t);
      i !== null && (Ou(i, t, a), Ea(i, a));
    }
    function Qb(e) {
      var t = e.memoizedState, a = ht;
      t !== null && (a = t.retryLane), fx(e, a);
    }
    function Wb(e, t) {
      var a = ht, i;
      switch (e.tag) {
        case He:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Wt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), fx(e, a);
    }
    function Gb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Cb(e / 1960) * 1960;
    }
    function Xb() {
      if (Op > Tb)
        throw Op = 0, VS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      yf > Rb && (yf = 0, km = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Kb() {
      Di.flushLegacyContextWarning(), Di.flushPendingUnsafeLifecycleWarnings();
    }
    function dx(e, t) {
      Pt(e), Lm(e, Qi, hb), t && Lm(e, $a, mb), Lm(e, Qi, pb), t && Lm(e, $a, vb), rn();
    }
    function Lm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ee ? i = i.child : ((i.flags & t) !== Ee && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var zm = null;
    function px(e) {
      {
        if ((ft & Rr) !== tr || !(e.mode & Ke))
          return;
        var t = e.tag;
        if (t !== Oe && t !== Y && t !== J && t !== Z && t !== Me && t !== Tt && t !== $e)
          return;
        var a = Ye(e) || "ReactComponent";
        if (zm !== null) {
          if (zm.has(a))
            return;
          zm.add(a);
        } else
          zm = /* @__PURE__ */ new Set([a]);
        var i = dr;
        try {
          Pt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Pt(e) : rn();
        }
      }
    }
    var QS;
    {
      var qb = null;
      QS = function(e, t, a) {
        var i = Cx(qb, t);
        try {
          return bC(e, t, a);
        } catch (s) {
          if (s1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Bh(), kE(), MC(e, t), Cx(t, i), t.mode & yt && Gg(t), Ii(null, bC, null, e, t, a), hi()) {
            var u = bo();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var vx = !1, WS;
    WS = /* @__PURE__ */ new Set();
    function Zb(e) {
      if (Hi && !B1())
        switch (e.tag) {
          case Z:
          case Me:
          case $e: {
            var t = vn && Ye(vn) || "Unknown", a = t;
            if (!WS.has(a)) {
              WS.add(a);
              var i = Ye(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case J: {
            vx || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), vx = !0);
            break;
          }
        }
    }
    function Lp(e, t) {
      if (Lr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Io(e, i, t);
        });
      }
    }
    var GS = {};
    function XS(e, t) {
      {
        var a = Ui.current;
        return a !== null ? (a.push(t), GS) : td(e, t);
      }
    }
    function hx(e) {
      if (e !== GS)
        return wv(e);
    }
    function mx() {
      return Ui.current !== null;
    }
    function Jb(e) {
      {
        if (e.mode & Ke) {
          if (!WC())
            return;
        } else if (!Eb() || ft !== tr || e.tag !== Z && e.tag !== Me && e.tag !== $e)
          return;
        if (Ui.current === null) {
          var t = dr;
          try {
            Pt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? Pt(e) : rn();
          }
        }
      }
    }
    function eD(e) {
      e.tag !== Pu && WC() && Ui.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function zp(e) {
      JC = e;
    }
    var ai = null, gf = null, tD = function(e) {
      ai = e;
    };
    function Sf(e) {
      {
        if (ai === null)
          return e;
        var t = ai(e);
        return t === void 0 ? e : t.current;
      }
    }
    function KS(e) {
      return Sf(e);
    }
    function qS(e) {
      {
        if (ai === null)
          return e;
        var t = ai(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Sf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: H,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function yx(e, t) {
      {
        if (ai === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case J: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Z: {
            (typeof i == "function" || s === Pe) && (u = !0);
            break;
          }
          case Me: {
            (s === H || s === Pe) && (u = !0);
            break;
          }
          case Tt:
          case $e: {
            (s === Qe || s === Pe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ai(a);
          if (f !== void 0 && f === ai(i))
            return !0;
        }
        return !1;
      }
    }
    function gx(e) {
      {
        if (ai === null || typeof WeakSet != "function")
          return;
        gf === null && (gf = /* @__PURE__ */ new WeakSet()), gf.add(e);
      }
    }
    var nD = function(e, t) {
      {
        if (ai === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ou(), uu(function() {
          ZS(e.current, i, a);
        });
      }
    }, rD = function(e, t) {
      {
        if (e.context !== La)
          return;
        ou(), uu(function() {
          Up(t, e, null, null);
        });
      }
    };
    function ZS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Z:
          case $e:
          case J:
            v = p;
            break;
          case Me:
            v = p.render;
            break;
        }
        if (ai === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = ai(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === J ? y = !0 : m = !0));
        }
        if (gf !== null && (gf.has(e) || i !== null && gf.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var x = ya(e, Ne);
          x !== null && ar(x, e, Ne, jt);
        }
        u !== null && !y && ZS(u, t, a), s !== null && ZS(s, t, a);
      }
    }
    var aD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return JS(e.current, i, a), a;
      }
    };
    function JS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Z:
          case $e:
          case J:
            p = f;
            break;
          case Me:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? iD(e, a) : i !== null && JS(i, t, a), u !== null && JS(u, t, a);
      }
    }
    function iD(e, t) {
      {
        var a = lD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case I:
              t.add(i.stateNode);
              return;
            case ee:
              t.add(i.stateNode.containerInfo);
              return;
            case Y:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function lD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === I)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var e0;
    {
      e0 = !1;
      try {
        var Sx = Object.preventExtensions({});
      } catch {
        e0 = !0;
      }
    }
    function uD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ee, this.subtreeFlags = Ee, this.deletions = null, this.lanes = A, this.childLanes = A, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !e0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var za = function(e, t, a, i) {
      return new uD(e, t, a, i);
    };
    function t0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function oD(e) {
      return typeof e == "function" && !t0(e) && e.defaultProps === void 0;
    }
    function sD(e) {
      if (typeof e == "function")
        return t0(e) ? J : Z;
      if (e != null) {
        var t = e.$$typeof;
        if (t === H)
          return Me;
        if (t === Qe)
          return Tt;
      }
      return Oe;
    }
    function Rs(e, t) {
      var a = e.alternate;
      a === null ? (a = za(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ee, a.subtreeFlags = Ee, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Cn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Oe:
        case Z:
        case $e:
          a.type = Sf(e.type);
          break;
        case J:
          a.type = KS(e.type);
          break;
        case Me:
          a.type = qS(e.type);
          break;
      }
      return a;
    }
    function cD(e, t) {
      e.flags &= Cn | Kt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = A, e.lanes = t, e.child = null, e.subtreeFlags = Ee, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ee, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function fD(e, t, a) {
      var i;
      return e === Nh ? (i = Ke, t === !0 && (i |= Mt, i |= gt)) : i = Ce, Lr && (i |= yt), za(Y, null, null, i);
    }
    function n0(e, t, a, i, u, s) {
      var f = Oe, p = e;
      if (typeof e == "function")
        t0(e) ? (f = J, p = KS(p)) : p = Sf(p);
      else if (typeof e == "string")
        f = I;
      else
        e: switch (e) {
          case Ai:
            return to(a.children, u, s, t);
          case li:
            f = we, u |= Mt, (u & Ke) !== Ce && (u |= gt);
            break;
          case ji:
            return dD(a, u, s, t);
          case ie:
            return pD(a, u, s, t);
          case _e:
            return vD(a, u, s, t);
          case On:
            return Ex(a, u, s, t);
          case Yt:
          case nt:
          case Xt:
          case fr:
          case Je:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Fi:
                  f = Ze;
                  break e;
                case E:
                  f = et;
                  break e;
                case H:
                  f = Me, p = qS(p);
                  break e;
                case Qe:
                  f = Tt;
                  break e;
                case Pe:
                  f = ln, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var m = i ? Ye(i) : null;
              m && (v += `

Check the render method of \`` + m + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var y = za(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function r0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = n0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function to(e, t, a, i) {
      var u = za(xe, e, i, t);
      return u.lanes = a, u;
    }
    function dD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = za(it, e, i, t | yt);
      return u.elementType = ji, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function pD(e, t, a, i) {
      var u = za(He, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function vD(e, t, a, i) {
      var u = za(Wt, e, i, t);
      return u.elementType = _e, u.lanes = a, u;
    }
    function Ex(e, t, a, i) {
      var u = za(X, e, i, t);
      u.elementType = On, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function a0(e, t, a) {
      var i = za(fe, e, null, t);
      return i.lanes = a, i;
    }
    function hD() {
      var e = za(I, null, null, Ce);
      return e.elementType = "DELETED", e;
    }
    function mD(e) {
      var t = za(en, null, null, Ce);
      return t.stateNode = e, t;
    }
    function i0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = za(ee, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function Cx(e, t) {
      return e === null && (e = za(Oe, null, null, Ce)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function yD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Vy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = ht, this.eventTimes = Yo(A), this.expirationTimes = Yo(jt), this.pendingLanes = A, this.suspendedLanes = A, this.pingedLanes = A, this.expiredLanes = A, this.mutableReadLanes = A, this.finishedLanes = A, this.entangledLanes = A, this.entanglements = Yo(A), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Fl; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Nh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Pu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function xx(e, t, a, i, u, s, f, p, v, m) {
      var y = new yD(e, t, a, p, v), R = fD(t, s);
      y.current = R, R.stateNode = y;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        R.memoizedState = x;
      }
      return gg(R), y;
    }
    var l0 = "18.3.1";
    function gD(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ta(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: br,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var u0, o0;
    u0 = !1, o0 = {};
    function Tx(e) {
      if (!e)
        return La;
      var t = Ru(e), a = e1(t);
      if (t.tag === J) {
        var i = t.type;
        if (sl(i))
          return K0(t, i, a);
      }
      return a;
    }
    function SD(e, t) {
      {
        var a = Ru(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Nr(a);
        if (u === null)
          return null;
        if (u.mode & Mt) {
          var s = Ye(a) || "Component";
          if (!o0[s]) {
            o0[s] = !0;
            var f = dr;
            try {
              Pt(u), a.mode & Mt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Pt(f) : rn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function Rx(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return xx(e, t, v, m, a, i, u, s, f);
    }
    function wx(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, R = xx(a, i, y, e, u, s, f, p, v);
      R.context = Tx(null);
      var x = R.current, O = Zr(), M = Ju(x), L = ru(O, M);
      return L.callback = t ?? null, Iu(x, L, M), bb(R, M, O), R;
    }
    function Up(e, t, a, i) {
      ad(t, e);
      var u = t.current, s = Zr(), f = Ju(u);
      Zt(f);
      var p = Tx(a);
      t.context === null ? t.context = p : t.pendingContext = p, Hi && dr !== null && !u0 && (u0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(dr) || "Unknown"));
      var v = ru(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Iu(u, v, f);
      return m !== null && (ar(m, u, f, s), Qh(m, u, f)), f;
    }
    function Um(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case I:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function ED(e) {
      switch (e.tag) {
        case Y: {
          var t = e.stateNode;
          if (Oc(t)) {
            var a = Nv(t);
            Ob(t, a);
          }
          break;
        }
        case He: {
          uu(function() {
            var u = ya(e, Ne);
            if (u !== null) {
              var s = Zr();
              ar(u, e, Ne, s);
            }
          });
          var i = Ne;
          s0(e, i);
          break;
        }
      }
    }
    function bx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Av(a.retryLane, t));
    }
    function s0(e, t) {
      bx(e, t);
      var a = e.alternate;
      a && bx(a, t);
    }
    function CD(e) {
      if (e.tag === He) {
        var t = Fo, a = ya(e, t);
        if (a !== null) {
          var i = Zr();
          ar(a, e, t, i);
        }
        s0(e, t);
      }
    }
    function xD(e) {
      if (e.tag === He) {
        var t = Ju(e), a = ya(e, t);
        if (a !== null) {
          var i = Zr();
          ar(a, e, t, i);
        }
        s0(e, t);
      }
    }
    function Dx(e) {
      var t = It(e);
      return t === null ? null : t.stateNode;
    }
    var kx = function(e) {
      return null;
    };
    function TD(e) {
      return kx(e);
    }
    var _x = function(e) {
      return !1;
    };
    function RD(e) {
      return _x(e);
    }
    var Ox = null, Nx = null, Mx = null, Lx = null, zx = null, Ux = null, Ax = null, jx = null, Fx = null;
    {
      var Hx = function(e, t, a) {
        var i = t[a], u = Qn(e) ? e.slice() : Xe({}, e);
        return a + 1 === t.length ? (Qn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Hx(e[i], t, a + 1), u);
      }, Vx = function(e, t) {
        return Hx(e, t, 0);
      }, Bx = function(e, t, a, i) {
        var u = t[i], s = Qn(e) ? e.slice() : Xe({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Qn(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = Bx(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Px = function(e, t, a) {
        if (t.length !== a.length) {
          Be("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Be("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Bx(e, t, a, 0);
      }, $x = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Qn(e) ? e.slice() : Xe({}, e);
        return s[u] = $x(e[u], t, a + 1, i), s;
      }, Yx = function(e, t, a) {
        return $x(e, t, 0, a);
      }, c0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Ox = function(e, t, a, i) {
        var u = c0(e, t);
        if (u !== null) {
          var s = Yx(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Xe({}, e.memoizedProps);
          var f = ya(e, Ne);
          f !== null && ar(f, e, Ne, jt);
        }
      }, Nx = function(e, t, a) {
        var i = c0(e, t);
        if (i !== null) {
          var u = Vx(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Xe({}, e.memoizedProps);
          var s = ya(e, Ne);
          s !== null && ar(s, e, Ne, jt);
        }
      }, Mx = function(e, t, a, i) {
        var u = c0(e, t);
        if (u !== null) {
          var s = Px(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Xe({}, e.memoizedProps);
          var f = ya(e, Ne);
          f !== null && ar(f, e, Ne, jt);
        }
      }, Lx = function(e, t, a) {
        e.pendingProps = Yx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ya(e, Ne);
        i !== null && ar(i, e, Ne, jt);
      }, zx = function(e, t) {
        e.pendingProps = Vx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ya(e, Ne);
        a !== null && ar(a, e, Ne, jt);
      }, Ux = function(e, t, a) {
        e.pendingProps = Px(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ya(e, Ne);
        i !== null && ar(i, e, Ne, jt);
      }, Ax = function(e) {
        var t = ya(e, Ne);
        t !== null && ar(t, e, Ne, jt);
      }, jx = function(e) {
        kx = e;
      }, Fx = function(e) {
        _x = e;
      };
    }
    function wD(e) {
      var t = Nr(e);
      return t === null ? null : t.stateNode;
    }
    function bD(e) {
      return null;
    }
    function DD() {
      return dr;
    }
    function kD(e) {
      var t = e.findFiberByHostInstance, a = k.ReactCurrentDispatcher;
      return Du({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Ox,
        overrideHookStateDeletePath: Nx,
        overrideHookStateRenamePath: Mx,
        overrideProps: Lx,
        overridePropsDeletePath: zx,
        overridePropsRenamePath: Ux,
        setErrorHandler: jx,
        setSuspenseHandler: Fx,
        scheduleUpdate: Ax,
        currentDispatcherRef: a,
        findHostInstanceByFiber: wD,
        findFiberByHostInstance: t || bD,
        // React Refresh
        findHostInstancesForRefresh: aD,
        scheduleRefresh: nD,
        scheduleRoot: rD,
        setRefreshHandler: tD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: DD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: l0
      });
    }
    var Ix = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function f0(e) {
      this._internalRoot = e;
    }
    Am.prototype.render = f0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : jm(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Sn) {
          var i = Dx(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Up(e, t, null, null);
    }, Am.prototype.unmount = f0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        rx() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), uu(function() {
          Up(null, e, null, null);
        }), I0(t);
      }
    };
    function _D(e, t) {
      if (!jm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Qx(e);
      var a = !1, i = !1, u = "", s = Ix;
      t != null && (t.hydrate ? Be("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ra && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = Rx(e, Nh, null, a, i, u, s);
      Rh(f.current, e);
      var p = e.nodeType === Sn ? e.parentNode : e;
      return Bd(p), new f0(f);
    }
    function Am(e) {
      this._internalRoot = e;
    }
    function OD(e) {
      e && Qv(e);
    }
    Am.prototype.unstable_scheduleHydration = OD;
    function ND(e, t, a) {
      if (!jm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Qx(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = Ix;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = wx(t, null, e, Nh, i, s, f, p, v);
      if (Rh(m.current, e), Bd(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          U1(m, R);
        }
      return new Am(m);
    }
    function jm(e) {
      return !!(e && (e.nodeType === kr || e.nodeType === vi || e.nodeType === $f));
    }
    function Ap(e) {
      return !!(e && (e.nodeType === kr || e.nodeType === vi || e.nodeType === $f || e.nodeType === Sn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Qx(e) {
      e.nodeType === kr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Zd(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var MD = k.ReactCurrentOwner, Wx;
    Wx = function(e) {
      if (e._reactRootContainer && e.nodeType !== Sn) {
        var t = Dx(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = d0(e), u = !!(i && Vu(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === kr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function d0(e) {
      return e ? e.nodeType === vi ? e.documentElement : e.firstChild : null;
    }
    function Gx() {
    }
    function LD(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Um(f);
            s.call(x);
          };
        }
        var f = wx(
          t,
          i,
          e,
          Pu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Gx
        );
        e._reactRootContainer = f, Rh(f.current, e);
        var p = e.nodeType === Sn ? e.parentNode : e;
        return Bd(p), uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var x = Um(y);
            m.call(x);
          };
        }
        var y = Rx(
          e,
          Pu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Gx
        );
        e._reactRootContainer = y, Rh(y.current, e);
        var R = e.nodeType === Sn ? e.parentNode : e;
        return Bd(R), uu(function() {
          Up(t, y, a, i);
        }), y;
      }
    }
    function zD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Fm(e, t, a, i, u) {
      Wx(a), zD(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = LD(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Um(f);
            p.call(v);
          };
        }
        Up(t, f, e, u);
      }
      return Um(f);
    }
    var Xx = !1;
    function UD(e) {
      {
        Xx || (Xx = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = MD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", kt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === kr ? e : SD(e, "findDOMNode");
    }
    function AD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ap(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Zd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Fm(null, e, t, !0, a);
    }
    function jD(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ap(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Zd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Fm(null, e, t, !1, a);
    }
    function FD(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ap(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !sy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Fm(e, t, a, !1, i);
    }
    var Kx = !1;
    function HD(e) {
      if (Kx || (Kx = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Ap(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Zd(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = d0(e), i = a && !Vu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return uu(function() {
          Fm(null, null, e, !1, function() {
            e._reactRootContainer = null, I0(e);
          });
        }), !0;
      } else {
        {
          var u = d0(e), s = !!(u && Vu(u)), f = e.nodeType === kr && Ap(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    or(ED), Nu(CD), Pv(xD), Xo(va), Rd(Hv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ws(BT), oy($S, Nb, uu);
    function VD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!jm(t))
        throw new Error("Target container is not a DOM element.");
      return gD(e, t, null, a);
    }
    function BD(e, t, a, i) {
      return FD(e, t, a, i);
    }
    var p0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Vu, Xc, wh, Eu, Gs, $S]
    };
    function PD(e, t) {
      return p0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), _D(e, t);
    }
    function $D(e, t, a) {
      return p0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ND(e, t, a);
    }
    function YD(e) {
      return rx() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), uu(e);
    }
    var ID = kD({
      findFiberByHostInstance: ss,
      bundleType: 1,
      version: l0,
      rendererPackageName: "react-dom"
    });
    if (!ID && yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qx = window.location.protocol;
      /^(https?|file):$/.test(qx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p0, xa.createPortal = VD, xa.createRoot = PD, xa.findDOMNode = UD, xa.flushSync = YD, xa.hydrate = AD, xa.hydrateRoot = $D, xa.render = jD, xa.unmountComponentAtNode = HD, xa.unstable_batchedUpdates = $S, xa.unstable_renderSubtreeIntoContainer = BD, xa.version = l0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xa;
}
function lT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lT);
    } catch (j) {
      console.error(j);
    }
  }
}
process.env.NODE_ENV === "production" ? (lT(), y0.exports = ZD()) : y0.exports = JD();
var ek = y0.exports, Vp = ek;
if (process.env.NODE_ENV === "production")
  Pp.createRoot = Vp.createRoot, Pp.hydrateRoot = Vp.hydrateRoot;
else {
  var Vm = Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Pp.createRoot = function(j, K) {
    Vm.usingClientEntryPoint = !0;
    try {
      return Vp.createRoot(j, K);
    } finally {
      Vm.usingClientEntryPoint = !1;
    }
  }, Pp.hydrateRoot = function(j, K, k) {
    Vm.usingClientEntryPoint = !0;
    try {
      return Vp.hydrateRoot(j, K, k);
    } finally {
      Vm.usingClientEntryPoint = !1;
    }
  };
}
function tk() {
  const j = rk(), K = /^#\/element\/(.+)$/.exec(j);
  return /* @__PURE__ */ me.jsx("div", { className: "karyotype_viewer_main ", children: /* @__PURE__ */ me.jsx(nk, { route: j, children: K ? /* @__PURE__ */ me.jsx(ik, { elementId: decodeURIComponent(K[1]) }) : /* @__PURE__ */ me.jsx(ak, {}) }) });
}
class nk extends Cf.Component {
  constructor(K) {
    super(K), this.state = { error: null };
  }
  static getDerivedStateFromError(K) {
    return { error: K };
  }
  componentDidCatch(K, k) {
  }
  componentDidUpdate(K) {
    K.route !== this.props.route && this.state.error && this.setState({ error: null });
  }
  render() {
    return this.state.error ? /* @__PURE__ */ me.jsx("div", { className: "max-w-7xl mx-auto p-4", children: /* @__PURE__ */ me.jsxs("div", { className: "rounded-xl border bg-white p-6", children: [
      /* @__PURE__ */ me.jsx("div", { className: "text-red-700 font-semibold mb-2", children: "Something went wrong" }),
      /* @__PURE__ */ me.jsx("pre", { className: "text-xs whitespace-pre-wrap text-red-800", children: String(this.state.error) }),
      /* @__PURE__ */ me.jsx("button", { className: "mt-3 px-3 py-1.5 rounded-xl border", onClick: () => this.setState({ error: null }), children: "Try again" })
    ] }) }) : this.props.children;
  }
}
function rk() {
  const [j, K] = no(() => window.location.hash || "#/");
  return Aa(() => {
    const k = () => K(window.location.hash || "#/");
    return window.addEventListener("hashchange", k), () => window.removeEventListener("hashchange", k);
  }, []), j;
}
function ak() {
  const [j, K] = no(null), [k, at] = no(null), [De, Be] = no("(none)"), [g, je] = no("(none)"), [Z, J] = no(!1);
  Aa(() => {
    const Y = localStorage.getItem("karyo_tsv_text"), ee = localStorage.getItem("elements_bed_text"), I = localStorage.getItem("karyo_tsv_name"), fe = localStorage.getItem("elements_bed_name");
    Y && (K(Y), Be(I || "(saved)")), ee && (at(ee), je(fe || "(saved)"));
  }, []), Aa(() => {
    try {
      sessionStorage.removeItem("selected_element");
      const Y = [];
      for (let ee = 0; ee < sessionStorage.length; ee++) {
        const I = sessionStorage.key(ee);
        I && I.startsWith("element:") && Y.push(I);
      }
      Y.forEach((ee) => sessionStorage.removeItem(ee));
    } catch {
    }
  }, []), Aa(() => {
  }, [j, k]), Aa(() => {
    j && localStorage.setItem("karyo_tsv_text", j);
  }, [j]), Aa(() => {
    k && localStorage.setItem("elements_bed_text", k);
  }, [k]), Aa(() => {
    De && localStorage.setItem("karyo_tsv_name", De);
  }, [De]), Aa(() => {
    g && localStorage.setItem("elements_bed_name", g);
  }, [g]);
  const Oe = (Y) => {
    const ee = Array.from(Y), I = (we) => ee.find((et) => we.some((Ze) => et.name.toLowerCase().endsWith(Ze))), fe = I([".txt", ".tsv", ".csv"]), xe = I([".bed", ".txt"]);
    if (fe) {
      const we = new FileReader();
      we.onload = () => {
        K(String(we.result || "")), Be(fe.name);
      }, we.readAsText(fe);
    }
    if (xe) {
      const we = new FileReader();
      we.onload = () => {
        at(String(we.result || "")), je(xe.name);
      }, we.readAsText(xe);
    }
  };
  return Aa(() => {
    async function Y() {
      try {
        const I = await (await fetch("/data/human_karyotype.txt")).text();
        K(I), Be("human_karyotype.txt");
        const xe = await (await fetch("/data/compiled.bed")).text();
        at(xe), je("elements.bed");
      } catch (ee) {
        console.error("Error loading static files", ee);
      }
    }
    Y();
  }, []), /* @__PURE__ */ me.jsx("div", { className: "main-grid grid grid-cols-1 lg:grid-cols-12 gap-4", children: /* @__PURE__ */ me.jsx("div", { className: "col-left lg:col-span-9", children: /* @__PURE__ */ me.jsx(lk, { karyoText: j, bedText: k, onDropFiles: Oe }) }) });
}
function ik({ elementId: j }) {
  const K = Bp(() => {
    const k = sessionStorage.getItem(`element:${j}`);
    return k ? JSON.parse(k) : null;
  }, [j]);
  return /* @__PURE__ */ me.jsxs("div", { className: "bg-white rounded-2xl shadow p-6", children: [
    /* @__PURE__ */ me.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ me.jsx("a", { href: "#/", className: "text-sm text-blue-600 hover:underline", onClick: (k) => {
      k.preventDefault(), window.history.length > 1 ? window.history.back() : window.location.hash = "#/";
    }, children: "← Back to viewer" }) }),
    /* @__PURE__ */ me.jsxs("h1", { className: "mt-2 text-2xl font-semibold", children: [
      "Element: ",
      /* @__PURE__ */ me.jsx("span", { className: "font-mono text-base px-2 py-1 rounded bg-gray-100 break-all", children: j })
    ] }),
    K ? /* @__PURE__ */ me.jsxs("div", { className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ me.jsxs("div", { className: "p-4 bg-gray-50 rounded-xl", children: [
        /* @__PURE__ */ me.jsx("h2", { className: "font-semibold", children: "Summary" }),
        /* @__PURE__ */ me.jsxs("ul", { className: "text-sm text-gray-800 mt-2 space-y-1", children: [
          /* @__PURE__ */ me.jsxs("li", { children: [
            /* @__PURE__ */ me.jsx("b", { children: "Chrom:" }),
            " ",
            K.chr
          ] }),
          /* @__PURE__ */ me.jsxs("li", { children: [
            /* @__PURE__ */ me.jsx("b", { children: "Start:" }),
            " ",
            Number(K.start).toLocaleString()
          ] }),
          /* @__PURE__ */ me.jsxs("li", { children: [
            /* @__PURE__ */ me.jsx("b", { children: "End:" }),
            " ",
            Number(K.end).toLocaleString()
          ] }),
          /* @__PURE__ */ me.jsxs("li", { children: [
            /* @__PURE__ */ me.jsx("b", { children: "Name:" }),
            " ",
            K.name
          ] }),
          /* @__PURE__ */ me.jsxs("li", { children: [
            /* @__PURE__ */ me.jsx("b", { children: "Family:" }),
            " ",
            K.family
          ] })
        ] })
      ] }),
      /* @__PURE__ */ me.jsxs("div", { className: "p-4 bg-gray-50 rounded-xl", children: [
        /* @__PURE__ */ me.jsx("h2", { className: "font-semibold", children: "External Links" }),
        /* @__PURE__ */ me.jsxs("ul", { className: "text-sm list-disc pl-5 mt-2", children: [
          /* @__PURE__ */ me.jsx("li", { children: /* @__PURE__ */ me.jsx("a", { className: "text-blue-600 hover:underline", href: "#", children: "Repeat‑ome record" }) }),
          /* @__PURE__ */ me.jsx("li", { children: /* @__PURE__ */ me.jsx("a", { className: "text-blue-600 hover:underline", href: "#", children: "UCSC / Ensembl" }) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ me.jsx("p", { className: "mt-3 text-gray-600", children: "No cached element data for this id. Navigate here by clicking an element in the viewer." })
  ] });
}
function lk({ karyoText: j, bedText: K, onDropFiles: k }) {
  const at = ws(null), De = ws(null), Be = ws(null), g = ws(!1), [je, Z] = no(() => sessionStorage.getItem("selected_element") || null);
  Aa(() => {
    const G = () => Z(null);
    return window.addEventListener("kv-clear-all", G), () => window.removeEventListener("kv-clear-all", G);
  }, []);
  const J = ws({ x: 0, y: 0, s: 1 }), Oe = ws(!1), Y = ws({ x: 0, y: 0, tx: 0, ty: 0 }), ee = (G, X, Te) => {
    J.current = { x: G, y: X, s: Te };
    const ot = Be.current;
    ot && ot.setAttribute("transform", `translate(${G},${X}) scale(${Te})`);
  }, I = () => {
    const G = De.current, X = Be.current;
    if (!(!G || !X))
      try {
        const Te = X.getBBox();
        if (!isFinite(Te.width) || !isFinite(Te.height) || Te.width === 0 || Te.height === 0) return;
        const ot = G.clientWidth || 1e3, pt = G.clientHeight || 600, Ft = 20, W = (ot - 2 * Ft) / Te.width, ye = (pt - 2 * Ft) / Te.height, q = Math.min(W, ye), qe = Ft - Te.x * q + (ot - (Te.width * q + 2 * Ft)) / 2, tt = Ft - Te.y * q + (pt - (Te.height * q + 2 * Ft)) / 2;
        ee(qe, tt, q);
      } catch {
      }
  }, fe = (G, X, Te) => {
    const { x: ot, y: pt, s: Ft } = J.current, W = dk(Ft * G, 0.3, 200), ye = (X - ot) / Ft, q = (Te - pt) / Ft, qe = X - ye * W, tt = Te - q * W;
    ee(qe, tt, W);
  }, xe = (G) => {
    G.preventDefault();
    const X = Math.exp(-G.deltaY * 1e-3), Te = G.currentTarget.getBoundingClientRect();
    fe(X, G.clientX - Te.left, G.clientY - Te.top);
  }, we = (G) => {
    const X = De.current;
    if (!X) return;
    const Te = G.target;
    if (!(Te && typeof Te.getAttribute == "function" && Te.getAttribute("data-el") === "1")) {
      Oe.current = !0;
      try {
        X.setPointerCapture(G.pointerId);
      } catch {
      }
      Y.current = { x: G.clientX, y: G.clientY, tx: J.current.x, ty: J.current.y };
    }
  }, et = (G) => {
    if (!Oe.current) return;
    const X = G.clientX - Y.current.x, Te = G.clientY - Y.current.y;
    ee(Y.current.tx + X, Y.current.ty + Te, J.current.s);
  }, Ze = (G) => {
    const X = De.current;
    if (X) {
      Oe.current = !1;
      try {
        X.releasePointerCapture(G.pointerId);
      } catch {
      }
    }
  }, Me = Bp(() => j ? sk(j) : [], [j]), it = Bp(() => K ? ck(K) : [], [K]);
  Aa(() => {
    g.current = !1;
  }, [Me, it]);
  const He = Bp(() => Array.from(new Set(it.map((G) => G.family))), [it]), [Tt, $e] = no(/* @__PURE__ */ new Set()), ln = Bp(() => {
    const G = /* @__PURE__ */ new Map();
    return He.forEach((X, Te) => G.set(X, fk(Te, He.length || 1))), G;
  }, [He]);
  Aa(() => {
    $e(new Set(He));
  }, [He]), Aa(() => {
    const G = "http://www.w3.org/2000/svg", X = De.current;
    if (!X) return;
    for (; X.firstChild; ) X.removeChild(X.firstChild);
    const Te = document.createElementNS(G, "defs");
    X.appendChild(Te);
    const ot = document.createElementNS(G, "g");
    if (X.appendChild(ot), Be.current = ot, !Me.length) return;
    const pt = new Map(Me.map((Ae) => [Ae.key, Ae])), Ft = Me.map((Ae) => Ae.key), W = Ft.length, q = Math.ceil(W / 14), qe = Math.floor(W / q), tt = W % q, Yn = [];
    let un = 0;
    for (let Ae = 0; Ae < q; Ae++) {
      const At = qe + (Ae < tt ? 1 : 0);
      Yn.push(Ft.slice(un, un + At)), un += At;
    }
    const ta = 16, hn = 340, mn = 80, kn = 20, ir = 40, Un = /* @__PURE__ */ new Map(), yn = Me.reduce((Ae, At) => Math.max(Ae, At.end - At.start), 1), cr = (Ae, At, xt) => (_t) => At + (_t - Ae.start) / (Ae.end - Ae.start) * xt;
    Yn.forEach((Ae, At) => {
      Ae.forEach((xt, _t) => {
        const Ot = pt.get(xt);
        if (!Ot) return;
        const Nt = (Ot.end - Ot.start) / yn * 280 + 40, tn = ir + _t * mn, nn = kn + At * hn, Fn = cr(Ot, nn, Nt);
        Un.set(xt, { x: tn, y: nn, height: Nt, scale: Fn, k: Ot });
      });
    });
    for (const [Ae, At] of Un) {
      const { x: xt, y: _t, height: Ot, k: jn, scale: Nt } = At, tn = Nt(jn.ceStart), nn = Nt(jn.ceEnd), Fn = ok(xt, _t, Ot, ta, tn, nn), gn = document.createElementNS(G, "path");
      gn.setAttribute("d", Fn), gn.setAttribute("fill", "#e5e7eb"), gn.setAttribute("stroke", "#9ca3af"), gn.setAttribute("stroke-width", "1"), gn.setAttribute("shape-rendering", "geometricPrecision"), ot.appendChild(gn);
      const Q = `clip-${Ae}`, ne = document.createElementNS(G, "clipPath");
      ne.setAttribute("id", Q);
      const ze = document.createElementNS(G, "path");
      ze.setAttribute("d", Fn), ne.appendChild(ze), Te.appendChild(ne);
      const Ge = document.createElementNS(G, "g");
      Ge.setAttribute("clip-path", `url(#${Q})`), ot.appendChild(Ge);
      const lt = document.createElementNS(G, "text");
      lt.setAttribute("x", String(xt + ta / 2)), lt.setAttribute("y", String(_t + Ot + 16)), lt.setAttribute("text-anchor", "middle"), lt.setAttribute("font-size", "12"), lt.setAttribute("fill", "#374151"), lt.textContent = jn.label, ot.appendChild(lt), At.gChr = Ge;
    }
    const Gt = document.createElementNS(G, "rect");
    Gt.setAttribute("fill", "none"), Gt.setAttribute("stroke", "#111827"), Gt.setAttribute("stroke-width", "2"), Gt.setAttribute("vector-effect", "non-scaling-stroke"), Gt.setAttribute("pointer-events", "none"), Gt.setAttribute("visibility", "hidden");
    const bt = document.createElementNS(G, "rect");
    bt.setAttribute("fill", "none"), bt.setAttribute("stroke", "#2563eb"), bt.setAttribute("stroke-width", "2"), bt.setAttribute("vector-effect", "non-scaling-stroke"), bt.setAttribute("pointer-events", "none"), bt.setAttribute("visibility", "hidden");
    const on = /* @__PURE__ */ new Map(), An = (Ae) => Tt.has(Ae);
    for (const Ae of it) {
      if (!An(Ae.family) || !pt.has(Ae.key)) continue;
      const At = Un.get(Ae.key);
      if (!At) continue;
      const { k: xt, scale: _t } = At, Ot = Math.max(xt.start, Math.min(Ae.start, xt.end)), jn = Math.max(xt.start, Math.min(Ae.end + 1, xt.end + 1)), Nt = _t(Ot), tn = _t(jn), nn = `${pt.get(Ae.key).label}:${Ae.start}-${Ae.end}:${Ae.name}`.replace(/\s+/g, "_");
      (on.get(Ae.key) || on.set(Ae.key, []).get(Ae.key)).push({ b: Ae, yTop: Nt, yBot: tn, id: nn });
    }
    const Ta = 2, ja = 8;
    for (const [Ae, At] of on) {
      const xt = Un.get(Ae);
      if (!xt) continue;
      const { x: _t, y: Ot, height: jn, gChr: Nt } = xt, tn = 16 - 2 * Ta, nn = Math.min(tn, Math.max(ja, tn)), Fn = _t + (16 - nn) / 2, gn = At.slice().sort((Q, ne) => Q.yTop - ne.yTop || Q.yBot - Q.yTop - (ne.yBot - ne.yTop));
      for (let Q = 0; Q < gn.length; Q++) {
        const { b: ne, id: ze } = gn[Q];
        let Ge = Math.max(Ot, Math.min(Ot + jn, gn[Q].yTop)), lt = Math.max(Ge, Math.min(Ot + jn, gn[Q].yBot));
        const mt = document.createElementNS(G, "rect");
        mt.setAttribute("x", String(Fn)), mt.setAttribute("width", String(nn)), mt.setAttribute("y", String(Ge)), mt.setAttribute("height", String(Math.max(1, lt - Ge))), mt.setAttribute("fill", ln.get(ne.family) || "#10b981"), mt.setAttribute("stroke", "none"), mt.setAttribute("cursor", "pointer"), mt.setAttribute("pointer-events", "all"), mt.setAttribute("data-el", "1"), mt.addEventListener("pointerdown", (vt) => vt.stopPropagation()), mt.addEventListener("pointerenter", () => {
          bt.setAttribute("x", String(Fn)), bt.setAttribute("y", String(Ge)), bt.setAttribute("width", String(nn)), bt.setAttribute("height", String(Math.max(1, lt - Ge))), bt.setAttribute("visibility", "visible"), Nt.appendChild(bt);
        }), mt.addEventListener("pointerleave", () => {
          bt.setAttribute("visibility", "hidden");
        }), mt.addEventListener("click", () => {
          sessionStorage.setItem("selected_element", ze), Z(ze);
          const vt = pt.get(ne.key);
          sessionStorage.setItem(`element:${ze}`, JSON.stringify({
            chr: vt ? vt.label : ne.key,
            start: ne.start,
            end: ne.end,
            name: ne.name,
            family: ne.family
          })), window.location.hash = `#/element/${encodeURIComponent(ze)}`;
        });
        const Bt = document.createElementNS(G, "title"), _n = pt.get(ne.key);
        if (Bt.textContent = `${ne.name} — ${ne.family}
${_n ? _n.label : ne.key}:${ne.start}-${ne.end}`, mt.appendChild(Bt), Nt.appendChild(mt), je && ze === je) {
          const vt = { x: Fn, w: nn, y: Ge, h: Math.max(1, lt - Ge) }, ut = document.createElementNS(G, "rect");
          ut.setAttribute("fill", "none"), ut.setAttribute("stroke", "#111827"), ut.setAttribute("stroke-width", "2"), ut.setAttribute("vector-effect", "non-scaling-stroke"), ut.setAttribute("pointer-events", "none"), ut.setAttribute("x", String(vt.x)), ut.setAttribute("y", String(vt.y)), ut.setAttribute("width", String(vt.w)), ut.setAttribute("height", String(vt.h)), Nt.appendChild(ut);
        }
      }
    }
    g.current || (setTimeout(I, 0), g.current = !0);
  }, [Me, it, Tt, ln, je]);
  const Ut = () => {
    const G = De.current;
    if (!G) return;
    const X = G.getBoundingClientRect();
    fe(1.2, X.width / 2, X.height / 2);
  }, en = () => {
    const G = De.current;
    if (!G) return;
    const X = G.getBoundingClientRect();
    fe(1 / 1.2, X.width / 2, X.height / 2);
  }, Wt = () => {
    I();
  };
  return /* @__PURE__ */ me.jsxs("div", { ref: at, className: "kary_card bg-white rounded-2xl shadow overflow-hidden", children: [
    /* @__PURE__ */ me.jsxs("div", { className: "kary_btns_div flex items-center justify-between border-b px-3 py-2", children: [
      /* @__PURE__ */ me.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ me.jsx("button", { onClick: Ut, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "＋ Zoom in" }),
        /* @__PURE__ */ me.jsx("button", { onClick: en, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "－ Zoom out" }),
        /* @__PURE__ */ me.jsx("button", { onClick: Wt, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "⟲ Reset" }),
        /* @__PURE__ */ me.jsx("button", { onClick: () => {
          Z(null), sessionStorage.removeItem("selected_element");
        }, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "Clear selection" })
      ] }),
      /* @__PURE__ */ me.jsx("div", { className: "text-sm text-gray-600", children: "Drop karyotype + BED or use upload buttons" })
    ] }),
    /* @__PURE__ */ me.jsxs("div", { className: "kary_graph_holder grid grid-cols-12", children: [
      /* @__PURE__ */ me.jsx("div", { className: "kary_graph col-span-9 border-r", children: /* @__PURE__ */ me.jsxs("div", { className: "kary_svg_holder relative w-full h-full bg-gray-50", children: [
        /* @__PURE__ */ me.jsx(
          "svg",
          {
            ref: De,
            className: "absolute inset-0 w-full h-full block",
            onWheel: xe,
            onPointerDown: we,
            onPointerMove: et,
            onPointerUp: Ze
          }
        ),
        !uk(Me) && !it.length && /* @__PURE__ */ me.jsx("div", { className: "absolute inset-0 grid place-items-center pointer-events-none", children: /* @__PURE__ */ me.jsxs("div", { className: "text-center text-gray-500", children: [
          /* @__PURE__ */ me.jsx("div", { className: "mb-2 text-2xl", children: "⬆" }),
          /* @__PURE__ */ me.jsx("p", { className: "font-medium", children: "Drop karyotype + BED here" }),
          /* @__PURE__ */ me.jsx("p", { className: "text-sm", children: "or use the upload buttons" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ me.jsx("div", { className: "col-span-3 max-h-[72vh] overflow-auto p-3", children: He.length ? /* @__PURE__ */ me.jsx("div", { className: "space-y-2", children: He.map((G) => /* @__PURE__ */ me.jsxs("button", { onClick: () => {
        const X = new Set(Tt);
        X.has(G) ? X.delete(G) : X.add(G), $e(X);
      }, className: `w-full flex items-center gap-3 px-3 py-2 rounded-xl border ${Tt.has(G) ? "bg-white hover:bg-gray-50" : "bg-gray-100 opacity-70"}`, children: [
        /* @__PURE__ */ me.jsx("span", { className: "inline-block w-5 h-5", style: { background: ln.get(G) || "#10b981" } }),
        /* @__PURE__ */ me.jsx("span", { className: "text-sm font-medium flex-1 text-left", children: G })
      ] }, G)) }) : /* @__PURE__ */ me.jsx("div", { className: "text-sm text-gray-500 p-2", children: "Legend appears after loading a BED (column 5 = family)." }) })
    ] })
  ] });
}
function uk(j) {
  return Array.isArray(j) && j.length > 0;
}
function ok(j, K, k, at, De, Be) {
  const g = j + at / 2, je = j, Z = j + at, J = K, Oe = K + k;
  let Y = Math.max(J, Math.min(De, Be)), ee = Math.min(Oe, Math.max(De, Be));
  const I = 4, fe = at * 0.45, xe = Math.min(fe * 0.25, 6), we = Math.max(Y, J + I), et = Math.min(ee, Oe - I);
  return [
    `M ${je} ${J + I}`,
    `Q ${je} ${J} ${je + I} ${J}`,
    `L ${Z - I} ${J}`,
    `Q ${Z} ${J} ${Z} ${J + I}`,
    `L ${Z} ${we - xe}`,
    `Q ${Z} ${we} ${g + fe / 2 + xe} ${we}`,
    `Q ${g + fe / 2} ${we} ${g + fe / 2} ${we + xe}`,
    `L ${g + fe / 2} ${et - xe}`,
    `Q ${g + fe / 2} ${et} ${g + fe / 2 + xe} ${et}`,
    `Q ${Z} ${et} ${Z} ${et + xe}`,
    `L ${Z} ${Oe - I}`,
    `Q ${Z} ${Oe} ${Z - I} ${Oe}`,
    `L ${je + I} ${Oe}`,
    `Q ${je} ${Oe} ${je} ${Oe - I}`,
    `L ${je} ${et + xe}`,
    `Q ${je} ${et} ${g - fe / 2 - xe} ${et}`,
    `Q ${g - fe / 2} ${et} ${g - fe / 2} ${et - xe}`,
    `L ${g - fe / 2} ${we + xe}`,
    `Q ${g - fe / 2} ${we} ${g - fe / 2 - xe} ${we}`,
    `Q ${je} ${we} ${je} ${we - xe}`,
    `L ${je} ${J + I}`,
    "Z"
  ].join(" ");
}
function uT(j) {
  return String(j || "").trim().replace(/^chrom(?:osome)?/i, "").replace(/^chr/i, "").trim().toLowerCase();
}
function sk(j) {
  const K = [], k = String(j).split(/\r?\n/);
  for (let at = 0; at < k.length; at++) {
    const De = String(k[at] || "").trim();
    if (!De || /^#/.test(De)) continue;
    const Be = De.split(/\t|,|\s+/).filter(Boolean);
    if (Be.length < 5) continue;
    const g = Be[1], je = Be[2];
    if (/start/i.test(g) || /end/i.test(je) || /ce[_-]?start/i.test(De)) continue;
    const [J, Oe, Y, ee, I] = Be, fe = String(J).trim(), xe = uT(fe), we = Bm(Oe), et = Bm(Y), Ze = Bm(ee), Me = Bm(I);
    [we, et, Ze, Me].some((it) => !isFinite(it)) || K.push({ key: xe, label: fe, start: we, end: et, ceStart: Ze, ceEnd: Me });
  }
  return K;
}
function ck(j) {
  const K = [], k = String(j).split(/\r?\n/);
  for (const at of k) {
    const De = String(at).trim();
    if (!De || /^#/.test(De)) continue;
    const Be = De.split(/\t|\s+/);
    if (Be.length < 5) continue;
    const [g, je, Z, J, Oe] = Be, Y = uT(g), ee = +je, I = +Z;
    if (!isFinite(ee) || !isFinite(I)) continue;
    const fe = ee + 1, xe = I;
    K.push({ key: Y, start: fe, end: xe, name: J, family: Oe, raw: De });
  }
  return K;
}
function fk(j, K) {
  return `hsl(${j * 360 / Math.max(1, K) % 360} 70% 45%)`;
}
function dk(j, K, k) {
  return Math.max(K, Math.min(k, j));
}
function Bm(j) {
  const k = +String(j).replace(/,/g, "");
  return isFinite(k) ? k : NaN;
}
const pk = document.getElementById("karyotype_div");
Pp.createRoot(pk).render(
  /* @__PURE__ */ me.jsx(Cf.StrictMode, { children: /* @__PURE__ */ me.jsx(tk, {}) })
);
