import Cf, { useState as yl, useEffect as no, useMemo as Vp, useRef as ws } from "react";
var v0 = { exports: {} }, Hp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qx;
function XD() {
  if (qx) return Hp;
  qx = 1;
  var B = Cf, q = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), dt = Object.prototype.hasOwnProperty, _e = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Qe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(Fe, J, Z) {
    var Oe, G = {}, fe = null, X = null;
    Z !== void 0 && (fe = "" + Z), J.key !== void 0 && (fe = "" + J.key), J.ref !== void 0 && (X = J.ref);
    for (Oe in J) dt.call(J, Oe) && !Qe.hasOwnProperty(Oe) && (G[Oe] = J[Oe]);
    if (Fe && Fe.defaultProps) for (Oe in J = Fe.defaultProps, J) G[Oe] === void 0 && (G[Oe] = J[Oe]);
    return { $$typeof: q, type: Fe, key: fe, ref: X, props: G, _owner: _e.current };
  }
  return Hp.Fragment = _, Hp.jsx = g, Hp.jsxs = g, Hp;
}
var Fp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zx;
function KD() {
  return Zx || (Zx = 1, process.env.NODE_ENV !== "production" && function() {
    var B = Cf, q = Symbol.for("react.element"), _ = Symbol.for("react.portal"), dt = Symbol.for("react.fragment"), _e = Symbol.for("react.strict_mode"), Qe = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), Fe = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), re = Symbol.iterator, Ce = "@@iterator";
    function Ne(E) {
      if (E === null || typeof E != "object")
        return null;
      var H = re && E[re] || E[Ce];
      return typeof H == "function" ? H : null;
    }
    var tt = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function nt(E) {
      {
        for (var H = arguments.length, ae = new Array(H > 1 ? H - 1 : 0), ke = 1; ke < H; ke++)
          ae[ke - 1] = arguments[ke];
        De("error", E, ae);
      }
    }
    function De(E, H, ae) {
      {
        var ke = tt.ReactDebugCurrentFrame, Ie = ke.getStackAddendum();
        Ie !== "" && (H += "%s", ae = ae.concat([Ie]));
        var Be = ae.map(function(at) {
          return String(at);
        });
        Be.unshift("Warning: " + H), Function.prototype.apply.call(console[E], console, Be);
      }
    }
    var Je = !1, Ae = !1, Tt = !1, Pe = !1, en = !1, Ut;
    Ut = Symbol.for("react.module.reference");
    function tn(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === dt || E === Qe || en || E === _e || E === Z || E === Oe || Pe || E === X || Je || Ae || Tt || typeof E == "object" && E !== null && (E.$$typeof === fe || E.$$typeof === G || E.$$typeof === g || E.$$typeof === Fe || E.$$typeof === J || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === Ut || E.getModuleId !== void 0));
    }
    function Wt(E, H, ae) {
      var ke = E.displayName;
      if (ke)
        return ke;
      var Ie = H.displayName || H.name || "";
      return Ie !== "" ? ae + "(" + Ie + ")" : ae;
    }
    function Y(E) {
      return E.displayName || "Context";
    }
    function I(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && nt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case dt:
          return "Fragment";
        case _:
          return "Portal";
        case Qe:
          return "Profiler";
        case _e:
          return "StrictMode";
        case Z:
          return "Suspense";
        case Oe:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case Fe:
            var H = E;
            return Y(H) + ".Consumer";
          case g:
            var ae = E;
            return Y(ae._context) + ".Provider";
          case J:
            return Wt(E, E.render, "ForwardRef");
          case G:
            var ke = E.displayName || null;
            return ke !== null ? ke : I(E.type) || "Memo";
          case fe: {
            var Ie = E, Be = Ie._payload, at = Ie._init;
            try {
              return I(at(Be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var me = Object.assign, Xe = 0, pt, Ht, W, ge, K, Ze, rt;
    function Yn() {
    }
    Yn.__reactDisabledLog = !0;
    function un() {
      {
        if (Xe === 0) {
          pt = console.log, Ht = console.info, W = console.warn, ge = console.error, K = console.group, Ze = console.groupCollapsed, rt = console.groupEnd;
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
        Xe++;
      }
    }
    function ta() {
      {
        if (Xe--, Xe === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: me({}, E, {
              value: pt
            }),
            info: me({}, E, {
              value: Ht
            }),
            warn: me({}, E, {
              value: W
            }),
            error: me({}, E, {
              value: ge
            }),
            group: me({}, E, {
              value: K
            }),
            groupCollapsed: me({}, E, {
              value: Ze
            }),
            groupEnd: me({}, E, {
              value: rt
            })
          });
        }
        Xe < 0 && nt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var hn = tt.ReactCurrentDispatcher, mn;
    function kn(E, H, ae) {
      {
        if (mn === void 0)
          try {
            throw Error();
          } catch (Ie) {
            var ke = Ie.stack.trim().match(/\n( *(at )?)/);
            mn = ke && ke[1] || "";
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
        var ae = Un.get(E);
        if (ae !== void 0)
          return ae;
      }
      var ke;
      ir = !0;
      var Ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Be;
      Be = hn.current, hn.current = null, un();
      try {
        if (H) {
          var at = function() {
            throw Error();
          };
          if (Object.defineProperty(at.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(at, []);
            } catch (We) {
              ke = We;
            }
            Reflect.construct(E, [], at);
          } else {
            try {
              at.call();
            } catch (We) {
              ke = We;
            }
            E.call(at.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (We) {
            ke = We;
          }
          E();
        }
      } catch (We) {
        if (We && ke && typeof We.stack == "string") {
          for (var et = We.stack.split(`
`), On = ke.stack.split(`
`), Yt = et.length - 1, Xt = On.length - 1; Yt >= 1 && Xt >= 0 && et[Yt] !== On[Xt]; )
            Xt--;
          for (; Yt >= 1 && Xt >= 0; Yt--, Xt--)
            if (et[Yt] !== On[Xt]) {
              if (Yt !== 1 || Xt !== 1)
                do
                  if (Yt--, Xt--, Xt < 0 || et[Yt] !== On[Xt]) {
                    var fr = `
` + et[Yt].replace(" at new ", " at ");
                    return E.displayName && fr.includes("<anonymous>") && (fr = fr.replace("<anonymous>", E.displayName)), typeof E == "function" && Un.set(E, fr), fr;
                  }
                while (Yt >= 1 && Xt >= 0);
              break;
            }
        }
      } finally {
        ir = !1, hn.current = Be, ta(), Error.prepareStackTrace = Ie;
      }
      var li = E ? E.displayName || E.name : "", ui = li ? kn(li) : "";
      return typeof E == "function" && Un.set(E, ui), ui;
    }
    function Gt(E, H, ae) {
      return cr(E, !1);
    }
    function bt(E) {
      var H = E.prototype;
      return !!(H && H.isReactComponent);
    }
    function on(E, H, ae) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return cr(E, bt(E));
      if (typeof E == "string")
        return kn(E);
      switch (E) {
        case Z:
          return kn("Suspense");
        case Oe:
          return kn("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case J:
            return Gt(E.render);
          case G:
            return on(E.type, H, ae);
          case fe: {
            var ke = E, Ie = ke._payload, Be = ke._init;
            try {
              return on(Be(Ie), H, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var An = Object.prototype.hasOwnProperty, Ta = {}, Aa = tt.ReactDebugCurrentFrame;
    function Ue(E) {
      if (E) {
        var H = E._owner, ae = on(E.type, E._source, H ? H.type : null);
        Aa.setExtraStackFrame(ae);
      } else
        Aa.setExtraStackFrame(null);
    }
    function At(E, H, ae, ke, Ie) {
      {
        var Be = Function.call.bind(An);
        for (var at in E)
          if (Be(E, at)) {
            var et = void 0;
            try {
              if (typeof E[at] != "function") {
                var On = Error((ke || "React class") + ": " + ae + " type `" + at + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[at] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw On.name = "Invariant Violation", On;
              }
              et = E[at](H, at, ke, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Yt) {
              et = Yt;
            }
            et && !(et instanceof Error) && (Ue(Ie), nt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ke || "React class", ae, at, typeof et), Ue(null)), et instanceof Error && !(et.message in Ta) && (Ta[et.message] = !0, Ue(Ie), nt("Failed %s type: %s", ae, et.message), Ue(null));
          }
      }
    }
    var Ct = Array.isArray;
    function _t(E) {
      return Ct(E);
    }
    function Ot(E) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, ae = H && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return ae;
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
    function nn(E) {
      if (jn(E))
        return nt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ot(E)), Nt(E);
    }
    var rn = tt.ReactCurrentOwner, Hn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gn, Q;
    function ie(E) {
      if (An.call(E, "ref")) {
        var H = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Ve(E) {
      if (An.call(E, "key")) {
        var H = Object.getOwnPropertyDescriptor(E, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Ge(E, H) {
      typeof E.ref == "string" && rn.current;
    }
    function lt(E, H) {
      {
        var ae = function() {
          gn || (gn = !0, nt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        ae.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function ht(E, H) {
      {
        var ae = function() {
          Q || (Q = !0, nt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        ae.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var Bt = function(E, H, ae, ke, Ie, Be, at) {
      var et = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: q,
        // Built-in properties that belong on the element
        type: E,
        key: H,
        ref: ae,
        props: at,
        // Record the component responsible for creating this element.
        _owner: Be
      };
      return et._store = {}, Object.defineProperty(et._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(et, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.defineProperty(et, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ie
      }), Object.freeze && (Object.freeze(et.props), Object.freeze(et)), et;
    };
    function _n(E, H, ae, ke, Ie) {
      {
        var Be, at = {}, et = null, On = null;
        ae !== void 0 && (nn(ae), et = "" + ae), Ve(H) && (nn(H.key), et = "" + H.key), ie(H) && (On = H.ref, Ge(H, Ie));
        for (Be in H)
          An.call(H, Be) && !Hn.hasOwnProperty(Be) && (at[Be] = H[Be]);
        if (E && E.defaultProps) {
          var Yt = E.defaultProps;
          for (Be in Yt)
            at[Be] === void 0 && (at[Be] = Yt[Be]);
        }
        if (et || On) {
          var Xt = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          et && lt(at, Xt), On && ht(at, Xt);
        }
        return Bt(E, et, On, Ie, ke, rn.current, at);
      }
    }
    var xt = tt.ReactCurrentOwner, ut = tt.ReactDebugCurrentFrame;
    function Ft(E) {
      if (E) {
        var H = E._owner, ae = on(E.type, E._source, H ? H.type : null);
        ut.setExtraStackFrame(ae);
      } else
        ut.setExtraStackFrame(null);
    }
    var ja;
    ja = !1;
    function na(E) {
      return typeof E == "object" && E !== null && E.$$typeof === q;
    }
    function gl() {
      {
        if (xt.current) {
          var E = I(xt.current.type);
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
          var ae = typeof E == "string" ? E : E.displayName || E.name;
          ae && (H = `

Check the top-level render call using <` + ae + ">.");
        }
        return H;
      }
    }
    function cu(E, H) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var ae = ao(H);
        if (ro[ae])
          return;
        ro[ae] = !0;
        var ke = "";
        E && E._owner && E._owner !== xt.current && (ke = " It was passed a child from " + I(E._owner.type) + "."), Ft(E), nt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, ke), Ft(null);
      }
    }
    function fu(E, H) {
      {
        if (typeof E != "object")
          return;
        if (_t(E))
          for (var ae = 0; ae < E.length; ae++) {
            var ke = E[ae];
            na(ke) && cu(ke, H);
          }
        else if (na(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var Ie = Ne(E);
          if (typeof Ie == "function" && Ie !== E.entries)
            for (var Be = Ie.call(E), at; !(at = Be.next()).done; )
              na(at.value) && cu(at.value, H);
        }
      }
    }
    function io(E) {
      {
        var H = E.type;
        if (H == null || typeof H == "string")
          return;
        var ae;
        if (typeof H == "function")
          ae = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === J || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === G))
          ae = H.propTypes;
        else
          return;
        if (ae) {
          var ke = I(H);
          At(ae, E.props, "prop", ke, E);
        } else if (H.PropTypes !== void 0 && !ja) {
          ja = !0;
          var Ie = I(H);
          nt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ie || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && nt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ai(E) {
      {
        for (var H = Object.keys(E.props), ae = 0; ae < H.length; ae++) {
          var ke = H[ae];
          if (ke !== "children" && ke !== "key") {
            Ft(E), nt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ke), Ft(null);
            break;
          }
        }
        E.ref !== null && (Ft(E), nt("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
      }
    }
    var Ra = {};
    function br(E, H, ae, ke, Ie, Be) {
      {
        var at = tn(E);
        if (!at) {
          var et = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var On = bs();
          On ? et += On : et += gl();
          var Yt;
          E === null ? Yt = "null" : _t(E) ? Yt = "array" : E !== void 0 && E.$$typeof === q ? (Yt = "<" + (I(E.type) || "Unknown") + " />", et = " Did you accidentally export a JSX literal instead of a component?") : Yt = typeof E, nt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Yt, et);
        }
        var Xt = _n(E, H, ae, Ie, Be);
        if (Xt == null)
          return Xt;
        if (at) {
          var fr = H.children;
          if (fr !== void 0)
            if (ke)
              if (_t(fr)) {
                for (var li = 0; li < fr.length; li++)
                  fu(fr[li], E);
                Object.freeze && Object.freeze(fr);
              } else
                nt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fu(fr, E);
        }
        if (An.call(H, "key")) {
          var ui = I(E), We = Object.keys(H).filter(function(lo) {
            return lo !== "key";
          }), Ke = We.length > 0 ? "{key: someKey, " + We.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ra[ui + Ke]) {
            var oi = We.length > 0 ? "{" + We.join(": ..., ") + ": ...}" : "{}";
            nt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ke, ui, oi, ui), Ra[ui + Ke] = !0;
          }
        }
        return E === dt ? ai(Xt) : io(Xt), Xt;
      }
    }
    function Ui(E, H, ae) {
      return br(E, H, ae, !0);
    }
    function ii(E, H, ae) {
      return br(E, H, ae, !1);
    }
    var Ai = ii, ji = Ui;
    Fp.Fragment = dt, Fp.jsx = Ai, Fp.jsxs = ji;
  }()), Fp;
}
process.env.NODE_ENV === "production" ? v0.exports = XD() : v0.exports = KD();
var ye = v0.exports, h0 = { exports: {} }, Ca = {}, jm = { exports: {} }, d0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jx;
function qD() {
  return Jx || (Jx = 1, function(B) {
    function q(W, ge) {
      var K = W.length;
      W.push(ge);
      e: for (; 0 < K; ) {
        var Ze = K - 1 >>> 1, rt = W[Ze];
        if (0 < _e(rt, ge)) W[Ze] = ge, W[K] = rt, K = Ze;
        else break e;
      }
    }
    function _(W) {
      return W.length === 0 ? null : W[0];
    }
    function dt(W) {
      if (W.length === 0) return null;
      var ge = W[0], K = W.pop();
      if (K !== ge) {
        W[0] = K;
        e: for (var Ze = 0, rt = W.length, Yn = rt >>> 1; Ze < Yn; ) {
          var un = 2 * (Ze + 1) - 1, ta = W[un], hn = un + 1, mn = W[hn];
          if (0 > _e(ta, K)) hn < rt && 0 > _e(mn, ta) ? (W[Ze] = mn, W[hn] = K, Ze = hn) : (W[Ze] = ta, W[un] = K, Ze = un);
          else if (hn < rt && 0 > _e(mn, K)) W[Ze] = mn, W[hn] = K, Ze = hn;
          else break e;
        }
      }
      return ge;
    }
    function _e(W, ge) {
      var K = W.sortIndex - ge.sortIndex;
      return K !== 0 ? K : W.id - ge.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Qe = performance;
      B.unstable_now = function() {
        return Qe.now();
      };
    } else {
      var g = Date, Fe = g.now();
      B.unstable_now = function() {
        return g.now() - Fe;
      };
    }
    var J = [], Z = [], Oe = 1, G = null, fe = 3, X = !1, re = !1, Ce = !1, Ne = typeof setTimeout == "function" ? setTimeout : null, tt = typeof clearTimeout == "function" ? clearTimeout : null, nt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function De(W) {
      for (var ge = _(Z); ge !== null; ) {
        if (ge.callback === null) dt(Z);
        else if (ge.startTime <= W) dt(Z), ge.sortIndex = ge.expirationTime, q(J, ge);
        else break;
        ge = _(Z);
      }
    }
    function Je(W) {
      if (Ce = !1, De(W), !re) if (_(J) !== null) re = !0, pt(Ae);
      else {
        var ge = _(Z);
        ge !== null && Ht(Je, ge.startTime - W);
      }
    }
    function Ae(W, ge) {
      re = !1, Ce && (Ce = !1, tt(en), en = -1), X = !0;
      var K = fe;
      try {
        for (De(ge), G = _(J); G !== null && (!(G.expirationTime > ge) || W && !Wt()); ) {
          var Ze = G.callback;
          if (typeof Ze == "function") {
            G.callback = null, fe = G.priorityLevel;
            var rt = Ze(G.expirationTime <= ge);
            ge = B.unstable_now(), typeof rt == "function" ? G.callback = rt : G === _(J) && dt(J), De(ge);
          } else dt(J);
          G = _(J);
        }
        if (G !== null) var Yn = !0;
        else {
          var un = _(Z);
          un !== null && Ht(Je, un.startTime - ge), Yn = !1;
        }
        return Yn;
      } finally {
        G = null, fe = K, X = !1;
      }
    }
    var Tt = !1, Pe = null, en = -1, Ut = 5, tn = -1;
    function Wt() {
      return !(B.unstable_now() - tn < Ut);
    }
    function Y() {
      if (Pe !== null) {
        var W = B.unstable_now();
        tn = W;
        var ge = !0;
        try {
          ge = Pe(!0, W);
        } finally {
          ge ? I() : (Tt = !1, Pe = null);
        }
      } else Tt = !1;
    }
    var I;
    if (typeof nt == "function") I = function() {
      nt(Y);
    };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), Xe = me.port2;
      me.port1.onmessage = Y, I = function() {
        Xe.postMessage(null);
      };
    } else I = function() {
      Ne(Y, 0);
    };
    function pt(W) {
      Pe = W, Tt || (Tt = !0, I());
    }
    function Ht(W, ge) {
      en = Ne(function() {
        W(B.unstable_now());
      }, ge);
    }
    B.unstable_IdlePriority = 5, B.unstable_ImmediatePriority = 1, B.unstable_LowPriority = 4, B.unstable_NormalPriority = 3, B.unstable_Profiling = null, B.unstable_UserBlockingPriority = 2, B.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, B.unstable_continueExecution = function() {
      re || X || (re = !0, pt(Ae));
    }, B.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ut = 0 < W ? Math.floor(1e3 / W) : 5;
    }, B.unstable_getCurrentPriorityLevel = function() {
      return fe;
    }, B.unstable_getFirstCallbackNode = function() {
      return _(J);
    }, B.unstable_next = function(W) {
      switch (fe) {
        case 1:
        case 2:
        case 3:
          var ge = 3;
          break;
        default:
          ge = fe;
      }
      var K = fe;
      fe = ge;
      try {
        return W();
      } finally {
        fe = K;
      }
    }, B.unstable_pauseExecution = function() {
    }, B.unstable_requestPaint = function() {
    }, B.unstable_runWithPriority = function(W, ge) {
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
      var K = fe;
      fe = W;
      try {
        return ge();
      } finally {
        fe = K;
      }
    }, B.unstable_scheduleCallback = function(W, ge, K) {
      var Ze = B.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? Ze + K : Ze) : K = Ze, W) {
        case 1:
          var rt = -1;
          break;
        case 2:
          rt = 250;
          break;
        case 5:
          rt = 1073741823;
          break;
        case 4:
          rt = 1e4;
          break;
        default:
          rt = 5e3;
      }
      return rt = K + rt, W = { id: Oe++, callback: ge, priorityLevel: W, startTime: K, expirationTime: rt, sortIndex: -1 }, K > Ze ? (W.sortIndex = K, q(Z, W), _(J) === null && W === _(Z) && (Ce ? (tt(en), en = -1) : Ce = !0, Ht(Je, K - Ze))) : (W.sortIndex = rt, q(J, W), re || X || (re = !0, pt(Ae))), W;
    }, B.unstable_shouldYield = Wt, B.unstable_wrapCallback = function(W) {
      var ge = fe;
      return function() {
        var K = fe;
        fe = ge;
        try {
          return W.apply(this, arguments);
        } finally {
          fe = K;
        }
      };
    };
  }(d0)), d0;
}
var p0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function ZD() {
  return eT || (eT = 1, function(B) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var q = !1, _ = 5;
      function dt(Q, ie) {
        var Ve = Q.length;
        Q.push(ie), g(Q, ie, Ve);
      }
      function _e(Q) {
        return Q.length === 0 ? null : Q[0];
      }
      function Qe(Q) {
        if (Q.length === 0)
          return null;
        var ie = Q[0], Ve = Q.pop();
        return Ve !== ie && (Q[0] = Ve, Fe(Q, Ve, 0)), ie;
      }
      function g(Q, ie, Ve) {
        for (var Ge = Ve; Ge > 0; ) {
          var lt = Ge - 1 >>> 1, ht = Q[lt];
          if (J(ht, ie) > 0)
            Q[lt] = ie, Q[Ge] = ht, Ge = lt;
          else
            return;
        }
      }
      function Fe(Q, ie, Ve) {
        for (var Ge = Ve, lt = Q.length, ht = lt >>> 1; Ge < ht; ) {
          var Bt = (Ge + 1) * 2 - 1, _n = Q[Bt], xt = Bt + 1, ut = Q[xt];
          if (J(_n, ie) < 0)
            xt < lt && J(ut, _n) < 0 ? (Q[Ge] = ut, Q[xt] = ie, Ge = xt) : (Q[Ge] = _n, Q[Bt] = ie, Ge = Bt);
          else if (xt < lt && J(ut, ie) < 0)
            Q[Ge] = ut, Q[xt] = ie, Ge = xt;
          else
            return;
        }
      }
      function J(Q, ie) {
        var Ve = Q.sortIndex - ie.sortIndex;
        return Ve !== 0 ? Ve : Q.id - ie.id;
      }
      var Z = 1, Oe = 2, G = 3, fe = 4, X = 5;
      function re(Q, ie) {
      }
      var Ce = typeof performance == "object" && typeof performance.now == "function";
      if (Ce) {
        var Ne = performance;
        B.unstable_now = function() {
          return Ne.now();
        };
      } else {
        var tt = Date, nt = tt.now();
        B.unstable_now = function() {
          return tt.now() - nt;
        };
      }
      var De = 1073741823, Je = -1, Ae = 250, Tt = 5e3, Pe = 1e4, en = De, Ut = [], tn = [], Wt = 1, Y = null, I = G, me = !1, Xe = !1, pt = !1, Ht = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function K(Q) {
        for (var ie = _e(tn); ie !== null; ) {
          if (ie.callback === null)
            Qe(tn);
          else if (ie.startTime <= Q)
            Qe(tn), ie.sortIndex = ie.expirationTime, dt(Ut, ie);
          else
            return;
          ie = _e(tn);
        }
      }
      function Ze(Q) {
        if (pt = !1, K(Q), !Xe)
          if (_e(Ut) !== null)
            Xe = !0, Nt(rt);
          else {
            var ie = _e(tn);
            ie !== null && nn(Ze, ie.startTime - Q);
          }
      }
      function rt(Q, ie) {
        Xe = !1, pt && (pt = !1, rn()), me = !0;
        var Ve = I;
        try {
          var Ge;
          if (!q) return Yn(Q, ie);
        } finally {
          Y = null, I = Ve, me = !1;
        }
      }
      function Yn(Q, ie) {
        var Ve = ie;
        for (K(Ve), Y = _e(Ut); Y !== null && !(Y.expirationTime > Ve && (!Q || Aa())); ) {
          var Ge = Y.callback;
          if (typeof Ge == "function") {
            Y.callback = null, I = Y.priorityLevel;
            var lt = Y.expirationTime <= Ve, ht = Ge(lt);
            Ve = B.unstable_now(), typeof ht == "function" ? Y.callback = ht : Y === _e(Ut) && Qe(Ut), K(Ve);
          } else
            Qe(Ut);
          Y = _e(Ut);
        }
        if (Y !== null)
          return !0;
        var Bt = _e(tn);
        return Bt !== null && nn(Ze, Bt.startTime - Ve), !1;
      }
      function un(Q, ie) {
        switch (Q) {
          case Z:
          case Oe:
          case G:
          case fe:
          case X:
            break;
          default:
            Q = G;
        }
        var Ve = I;
        I = Q;
        try {
          return ie();
        } finally {
          I = Ve;
        }
      }
      function ta(Q) {
        var ie;
        switch (I) {
          case Z:
          case Oe:
          case G:
            ie = G;
            break;
          default:
            ie = I;
            break;
        }
        var Ve = I;
        I = ie;
        try {
          return Q();
        } finally {
          I = Ve;
        }
      }
      function hn(Q) {
        var ie = I;
        return function() {
          var Ve = I;
          I = ie;
          try {
            return Q.apply(this, arguments);
          } finally {
            I = Ve;
          }
        };
      }
      function mn(Q, ie, Ve) {
        var Ge = B.unstable_now(), lt;
        if (typeof Ve == "object" && Ve !== null) {
          var ht = Ve.delay;
          typeof ht == "number" && ht > 0 ? lt = Ge + ht : lt = Ge;
        } else
          lt = Ge;
        var Bt;
        switch (Q) {
          case Z:
            Bt = Je;
            break;
          case Oe:
            Bt = Ae;
            break;
          case X:
            Bt = en;
            break;
          case fe:
            Bt = Pe;
            break;
          case G:
          default:
            Bt = Tt;
            break;
        }
        var _n = lt + Bt, xt = {
          id: Wt++,
          callback: ie,
          priorityLevel: Q,
          startTime: lt,
          expirationTime: _n,
          sortIndex: -1
        };
        return lt > Ge ? (xt.sortIndex = lt, dt(tn, xt), _e(Ut) === null && xt === _e(tn) && (pt ? rn() : pt = !0, nn(Ze, lt - Ge))) : (xt.sortIndex = _n, dt(Ut, xt), !Xe && !me && (Xe = !0, Nt(rt))), xt;
      }
      function kn() {
      }
      function ir() {
        !Xe && !me && (Xe = !0, Nt(rt));
      }
      function Un() {
        return _e(Ut);
      }
      function yn(Q) {
        Q.callback = null;
      }
      function cr() {
        return I;
      }
      var Gt = !1, bt = null, on = -1, An = _, Ta = -1;
      function Aa() {
        var Q = B.unstable_now() - Ta;
        return !(Q < An);
      }
      function Ue() {
      }
      function At(Q) {
        if (Q < 0 || Q > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Q > 0 ? An = Math.floor(1e3 / Q) : An = _;
      }
      var Ct = function() {
        if (bt !== null) {
          var Q = B.unstable_now();
          Ta = Q;
          var ie = !0, Ve = !0;
          try {
            Ve = bt(ie, Q);
          } finally {
            Ve ? _t() : (Gt = !1, bt = null);
          }
        } else
          Gt = !1;
      }, _t;
      if (typeof ge == "function")
        _t = function() {
          ge(Ct);
        };
      else if (typeof MessageChannel < "u") {
        var Ot = new MessageChannel(), jn = Ot.port2;
        Ot.port1.onmessage = Ct, _t = function() {
          jn.postMessage(null);
        };
      } else
        _t = function() {
          Ht(Ct, 0);
        };
      function Nt(Q) {
        bt = Q, Gt || (Gt = !0, _t());
      }
      function nn(Q, ie) {
        on = Ht(function() {
          Q(B.unstable_now());
        }, ie);
      }
      function rn() {
        W(on), on = -1;
      }
      var Hn = Ue, gn = null;
      B.unstable_IdlePriority = X, B.unstable_ImmediatePriority = Z, B.unstable_LowPriority = fe, B.unstable_NormalPriority = G, B.unstable_Profiling = gn, B.unstable_UserBlockingPriority = Oe, B.unstable_cancelCallback = yn, B.unstable_continueExecution = ir, B.unstable_forceFrameRate = At, B.unstable_getCurrentPriorityLevel = cr, B.unstable_getFirstCallbackNode = Un, B.unstable_next = ta, B.unstable_pauseExecution = kn, B.unstable_requestPaint = Hn, B.unstable_runWithPriority = un, B.unstable_scheduleCallback = mn, B.unstable_shouldYield = Aa, B.unstable_wrapCallback = hn, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(p0)), p0;
}
var tT;
function iT() {
  return tT || (tT = 1, process.env.NODE_ENV === "production" ? jm.exports = qD() : jm.exports = ZD()), jm.exports;
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
var nT;
function JD() {
  if (nT) return Ca;
  nT = 1;
  var B = Cf, q = iT();
  function _(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var dt = /* @__PURE__ */ new Set(), _e = {};
  function Qe(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (_e[n] = r, n = 0; n < r.length; n++) dt.add(r[n]);
  }
  var Fe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), J = Object.prototype.hasOwnProperty, Z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oe = {}, G = {};
  function fe(n) {
    return J.call(G, n) ? !0 : J.call(Oe, n) ? !1 : Z.test(n) ? G[n] = !0 : (Oe[n] = !0, !1);
  }
  function X(n, r, l, o) {
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
  function re(n, r, l, o) {
    if (r === null || typeof r > "u" || X(n, r, l, o)) return !0;
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
  function Ce(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var Ne = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ne[n] = new Ce(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ne[r] = new Ce(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ne[n] = new Ce(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ne[n] = new Ce(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ne[n] = new Ce(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ne[n] = new Ce(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ne[n] = new Ce(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ne[n] = new Ce(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ne[n] = new Ce(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var tt = /[\-:]([a-z])/g;
  function nt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      tt,
      nt
    );
    Ne[r] = new Ce(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(tt, nt);
    Ne[r] = new Ce(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(tt, nt);
    Ne[r] = new Ce(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ne[n] = new Ce(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ne.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ne[n] = new Ce(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function De(n, r, l, o) {
    var c = Ne.hasOwnProperty(r) ? Ne[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (re(r, l, c, o) && (l = null), o || c === null ? fe(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Je = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ae = Symbol.for("react.element"), Tt = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), en = Symbol.for("react.strict_mode"), Ut = Symbol.for("react.profiler"), tn = Symbol.for("react.provider"), Wt = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), Xe = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), Ht = Symbol.for("react.offscreen"), W = Symbol.iterator;
  function ge(n) {
    return n === null || typeof n != "object" ? null : (n = W && n[W] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var K = Object.assign, Ze;
  function rt(n) {
    if (Ze === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      Ze = r && r[1] || "";
    }
    return `
` + Ze + n;
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
    return (n = n ? n.displayName || n.name : "") ? rt(n) : "";
  }
  function ta(n) {
    switch (n.tag) {
      case 5:
        return rt(n.type);
      case 16:
        return rt("Lazy");
      case 13:
        return rt("Suspense");
      case 19:
        return rt("SuspenseList");
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
      case Pe:
        return "Fragment";
      case Tt:
        return "Portal";
      case Ut:
        return "Profiler";
      case en:
        return "StrictMode";
      case I:
        return "Suspense";
      case me:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Wt:
        return (n.displayName || "Context") + ".Consumer";
      case tn:
        return (n._context.displayName || "Context") + ".Provider";
      case Y:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Xe:
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
        return r === en ? "StrictMode" : "Mode";
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
    return K({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function on(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = kn(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function An(n, r) {
    r = r.checked, r != null && De(n, "checked", r, !1);
  }
  function Ta(n, r) {
    An(n, r);
    var l = kn(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ue(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ue(n, r.type, kn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Aa(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ue(n, r, l) {
    (r !== "number" || Gt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var At = Array.isArray;
  function Ct(n, r, l, o) {
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
    if (r.dangerouslySetInnerHTML != null) throw Error(_(91));
    return K({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Ot(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(_(92));
        if (At(l)) {
          if (1 < l.length) throw Error(_(93));
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
  function nn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function rn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? nn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Hn, gn = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Hn = Hn || document.createElement("div"), Hn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Hn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
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
  var ie = {
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
  }, Ve = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ie).forEach(function(n) {
    Ve.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ie[r] = ie[n];
    });
  });
  function Ge(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ie.hasOwnProperty(n) && ie[n] ? ("" + r).trim() : r + "px";
  }
  function lt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ge(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var ht = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Bt(n, r) {
    if (r) {
      if (ht[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(_(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(_(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(_(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(_(62));
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
  var xt = null;
  function ut(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ft = null, ja = null, na = null;
  function gl(n) {
    if (n = xe(n)) {
      if (typeof Ft != "function") throw Error(_(280));
      var r = n.stateNode;
      r && (r = Kt(r), Ft(n.stateNode, n.type, r));
    }
  }
  function bs(n) {
    ja ? na ? na.push(n) : na = [n] : ja = n;
  }
  function ro() {
    if (ja) {
      var n = ja, r = na;
      if (na = ja = null, gl(n), r) for (n = 0; n < r.length; n++) gl(r[n]);
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
      fu = !1, (ja !== null || na !== null) && (cu(), ro());
    }
  }
  function ai(n, r) {
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
    if (l && typeof l != "function") throw Error(_(231, r, typeof l));
    return l;
  }
  var Ra = !1;
  if (Fe) try {
    var br = {};
    Object.defineProperty(br, "passive", { get: function() {
      Ra = !0;
    } }), window.addEventListener("test", br, br), window.removeEventListener("test", br, br);
  } catch {
    Ra = !1;
  }
  function Ui(n, r, l, o, c, d, h, S, C) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, N);
    } catch (F) {
      this.onError(F);
    }
  }
  var ii = !1, Ai = null, ji = !1, E = null, H = { onError: function(n) {
    ii = !0, Ai = n;
  } };
  function ae(n, r, l, o, c, d, h, S, C) {
    ii = !1, Ai = null, Ui.apply(H, arguments);
  }
  function ke(n, r, l, o, c, d, h, S, C) {
    if (ae.apply(this, arguments), ii) {
      if (ii) {
        var N = Ai;
        ii = !1, Ai = null;
      } else throw Error(_(198));
      ji || (ji = !0, E = N);
    }
  }
  function Ie(n) {
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
  function Be(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function at(n) {
    if (Ie(n) !== n) throw Error(_(188));
  }
  function et(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ie(n), r === null) throw Error(_(188));
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
          if (d === l) return at(c), n;
          if (d === o) return at(c), r;
          d = d.sibling;
        }
        throw Error(_(188));
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
          if (!h) throw Error(_(189));
        }
      }
      if (l.alternate !== o) throw Error(_(190));
    }
    if (l.tag !== 3) throw Error(_(188));
    return l.stateNode.current === l ? n : r;
  }
  function On(n) {
    return n = et(n), n !== null ? Yt(n) : null;
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
  var Xt = q.unstable_scheduleCallback, fr = q.unstable_cancelCallback, li = q.unstable_shouldYield, ui = q.unstable_requestPaint, We = q.unstable_now, Ke = q.unstable_getCurrentPriorityLevel, oi = q.unstable_ImmediatePriority, lo = q.unstable_UserBlockingPriority, uo = q.unstable_NormalPriority, Bp = q.unstable_LowPriority, xf = q.unstable_IdlePriority, oo = null, wa = null;
  function Pp(n) {
    if (wa && typeof wa.onCommitFiberRoot == "function") try {
      wa.onCommitFiberRoot(oo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var ra = Math.clz32 ? Math.clz32 : Tf, Vm = Math.log, Bm = Math.LN2;
  function Tf(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Vm(n) / Bm | 0) | 0;
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
  function Pm(n, r) {
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
      C === -1 ? (!(S & l) || S & o) && (c[h] = Pm(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
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
  function $m(n, r) {
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
  var kt, kf, _f, $e, Of, dr = !1, Hi = [], aa = null, Fi = null, an = null, Pt = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), Qn = [], ia = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function si(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        aa = null;
        break;
      case "dragenter":
      case "dragleave":
        Fi = null;
        break;
      case "mouseover":
      case "mouseout":
        an = null;
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
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = xe(r), r !== null && kf(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Nf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return aa = co(aa, n, r, l, o, c), !0;
      case "dragenter":
        return Fi = co(Fi, n, r, l, o, c), !0;
      case "mouseover":
        return an = co(an, n, r, l, o, c), !0;
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
      var l = Ie(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Be(l), r !== null) {
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
        xt = o, l.target.dispatchEvent(o), xt = null;
      } else return r = xe(l), r !== null && kf(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function $p(n, r, l) {
    fo(n) && l.delete(r);
  }
  function Ym() {
    dr = !1, aa !== null && fo(aa) && (aa = null), Fi !== null && fo(Fi) && (Fi = null), an !== null && fo(an) && (an = null), Pt.forEach($p), so.forEach($p);
  }
  function po(n, r) {
    n.blockedOn === r && (n.blockedOn = null, dr || (dr = !0, q.unstable_scheduleCallback(q.unstable_NormalPriority, Ym)));
  }
  function Vi(n) {
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
    for (aa !== null && po(aa, n), Fi !== null && po(Fi, n), an !== null && po(an, n), Pt.forEach(r), so.forEach(r), l = 0; l < Qn.length; l++) o = Qn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Qn.length && (l = Qn[0], l.blockedOn === null); ) Mf(l), l.blockedOn === null && Qn.shift();
  }
  var xl = Je.ReactCurrentBatchConfig, Tl = !0;
  function Yp(n, r, l, o) {
    var c = Dt, d = xl.transition;
    xl.transition = null;
    try {
      Dt = 1, _s(n, r, l, o);
    } finally {
      Dt = c, xl.transition = d;
    }
  }
  function Qp(n, r, l, o) {
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
      if (c === null) Gs(n, r, o, vo, l), si(n, o);
      else if (Nf(c, n, r, l, o)) o.stopPropagation();
      else if (si(n, o), r & 4 && -1 < ia.indexOf(n)) {
        for (; c !== null; ) {
          var d = xe(c);
          if (d !== null && kt(d), d = Os(n, r, l, o), d === null && Gs(n, r, o, vo, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Gs(n, r, o, null, l);
    }
  }
  var vo = null;
  function Os(n, r, l, o) {
    if (vo = null, n = ut(o), n = Nl(n), n !== null) if (r = Ie(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Be(r), n !== null) return n;
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
        switch (Ke()) {
          case oi:
            return 1;
          case lo:
            return 4;
          case uo:
          case Bp:
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
  var ci = null, Ms = null, pu = null;
  function Lf() {
    if (pu) return pu;
    var n, r = Ms, l = r.length, o, c = "value" in ci ? ci.value : ci.textContent, d = c.length;
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
    return K(r.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, As = Dr(Rl), vu = K({}, Rl, { view: 0, detail: 0 }), Qm = Dr(vu), zf, In, wl, ho = K({}, vu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ff, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== wl && (wl && n.type === "mousemove" ? (zf = n.screenX - wl.screenX, In = n.screenY - wl.screenY) : In = zf = 0, wl = n), zf);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : In;
  } }), Uf = Dr(ho), Im = K({}, ho, { dataTransfer: 0 }), hu = Dr(Im), Af = K({}, vu, { relatedTarget: 0 }), js = Dr(Af), Wm = K({}, Rl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gm = Dr(Wm), Xm = K({}, Rl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Ip = Dr(Xm), jf = K({}, Rl, { data: 0 }), Hf = Dr(jf), Wp = {
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
  }, Gp = {
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
  }, Km = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function fi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Km[n]) ? !!r[n] : !1;
  }
  function Ff() {
    return fi;
  }
  var Vf = K({}, vu, { key: function(n) {
    if (n.key) {
      var r = Wp[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Ls(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Gp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ff, charCode: function(n) {
    return n.type === "keypress" ? Ls(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Ls(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Bf = Dr(Vf), Pf = K({}, ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Xp = Dr(Pf), Hs = K({}, vu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ff }), Kp = Dr(Hs), kr = K({}, Rl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), di = Dr(kr), Sn = K({}, ho, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pi = Dr(Sn), $f = [9, 13, 27, 32], mu = Fe && "CompositionEvent" in window, mo = null;
  Fe && "documentMode" in document && (mo = document.documentMode);
  var yo = Fe && "TextEvent" in window && !mo, qp = Fe && (!mu || mo && 8 < mo && 11 >= mo), Zp = " ", Fs = !1;
  function Jp(n, r) {
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
  function ev(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var yu = !1;
  function tv(n, r) {
    switch (n) {
      case "compositionend":
        return ev(r);
      case "keypress":
        return r.which !== 32 ? null : (Fs = !0, Zp);
      case "textInput":
        return n = r.data, n === Zp && Fs ? null : n;
      default:
        return null;
    }
  }
  function qm(n, r) {
    if (yu) return n === "compositionend" || !mu && Jp(n, r) ? (n = Lf(), pu = Ms = ci = null, yu = !1, n) : null;
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
        return qp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Zm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function nv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Zm[n.type] : r === "textarea";
  }
  function Yf(n, r, l, o) {
    bs(o), r = To(r, "onChange"), 0 < r.length && (l = new As("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Ha = null, bl = null;
  function rv(n) {
    _l(n, 0);
  }
  function go(n) {
    var r = ka(n);
    if (cr(r)) return n;
  }
  function Jm(n, r) {
    if (n === "change") return r;
  }
  var av = !1;
  if (Fe) {
    var Qf;
    if (Fe) {
      var If = "oninput" in document;
      if (!If) {
        var iv = document.createElement("div");
        iv.setAttribute("oninput", "return;"), If = typeof iv.oninput == "function";
      }
      Qf = If;
    } else Qf = !1;
    av = Qf && (!document.documentMode || 9 < document.documentMode);
  }
  function lv() {
    Ha && (Ha.detachEvent("onpropertychange", uv), bl = Ha = null);
  }
  function uv(n) {
    if (n.propertyName === "value" && go(bl)) {
      var r = [];
      Yf(r, bl, n, ut(n)), io(rv, r);
    }
  }
  function ey(n, r, l) {
    n === "focusin" ? (lv(), Ha = r, bl = l, Ha.attachEvent("onpropertychange", uv)) : n === "focusout" && lv();
  }
  function ov(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return go(bl);
  }
  function ty(n, r) {
    if (n === "click") return go(r);
  }
  function sv(n, r) {
    if (n === "input" || n === "change") return go(r);
  }
  function ny(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Da = typeof Object.is == "function" ? Object.is : ny;
  function So(n, r) {
    if (Da(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!J.call(r, c) || !Da(n[c], r[c])) return !1;
    }
    return !0;
  }
  function cv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Vs(n, r) {
    var l = cv(n);
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
      l = cv(l);
    }
  }
  function Bi(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Bi(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
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
    if (r !== l && l && l.ownerDocument && Bi(l.ownerDocument.documentElement, l)) {
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
  var ry = Fe && "documentMode" in document && 11 >= document.documentMode, Su = null, Wf = null, Co = null, Gf = !1;
  function Xf(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Gf || Su == null || Su !== Gt(o) || (o = Su, "selectionStart" in o && Bs(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Co && So(Co, o) || (Co = o, o = To(Wf, "onSelect"), 0 < o.length && (r = new As("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Su)));
  }
  function Ps(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Dl = { animationend: Ps("Animation", "AnimationEnd"), animationiteration: Ps("Animation", "AnimationIteration"), animationstart: Ps("Animation", "AnimationStart"), transitionend: Ps("Transition", "TransitionEnd") }, Wn = {}, Kf = {};
  Fe && (Kf = document.createElement("div").style, "AnimationEvent" in window || (delete Dl.animationend.animation, delete Dl.animationiteration.animation, delete Dl.animationstart.animation), "TransitionEvent" in window || delete Dl.transitionend.transition);
  function $s(n) {
    if (Wn[n]) return Wn[n];
    if (!Dl[n]) return n;
    var r = Dl[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Kf) return Wn[n] = r[l];
    return n;
  }
  var fv = $s("animationend"), dv = $s("animationiteration"), pv = $s("animationstart"), vv = $s("transitionend"), qf = /* @__PURE__ */ new Map(), Ys = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function la(n, r) {
    qf.set(n, r), Qe(r, [n]);
  }
  for (var Zf = 0; Zf < Ys.length; Zf++) {
    var kl = Ys[Zf], ay = kl.toLowerCase(), iy = kl[0].toUpperCase() + kl.slice(1);
    la(ay, "on" + iy);
  }
  la(fv, "onAnimationEnd"), la(dv, "onAnimationIteration"), la(pv, "onAnimationStart"), la("dblclick", "onDoubleClick"), la("focusin", "onFocus"), la("focusout", "onBlur"), la(vv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Qe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Qe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Qe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Qe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Qe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Qe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jf = new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));
  function Qs(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ke(o, r, void 0, n), n.currentTarget = null;
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
          Qs(c, S, N), d = C;
        }
        else for (h = 0; h < o.length; h++) {
          if (S = o[h], C = S.instance, N = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped()) break e;
          Qs(c, S, N), d = C;
        }
      }
    }
    if (ji) throw n = E, ji = !1, E = null, n;
  }
  function Rt(n, r) {
    var l = r[bo];
    l === void 0 && (l = r[bo] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (hv(r, n, 2, !1), l.add(o));
  }
  function Is(n, r, l) {
    var o = 0;
    r && (o |= 4), hv(l, n, o, r);
  }
  var Ws = "_reactListening" + Math.random().toString(36).slice(2);
  function Eu(n) {
    if (!n[Ws]) {
      n[Ws] = !0, dt.forEach(function(l) {
        l !== "selectionchange" && (Jf.has(l) || Is(l, !1, n), Is(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ws] || (r[Ws] = !0, Is("selectionchange", !1, r));
    }
  }
  function hv(n, r, l, o) {
    switch (Ns(r)) {
      case 1:
        var c = Yp;
        break;
      case 4:
        c = Qp;
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
      var N = d, F = ut(l), P = [];
      e: {
        var j = qf.get(n);
        if (j !== void 0) {
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
              ue = Kp;
              break;
            case fv:
            case dv:
            case pv:
              ue = Gm;
              break;
            case vv:
              ue = di;
              break;
            case "scroll":
              ue = Qm;
              break;
            case "wheel":
              ue = pi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ue = Ip;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ue = Xp;
          }
          var he = (r & 4) !== 0, pn = !he && n === "scroll", w = he ? j !== null ? j + "Capture" : null : j;
          he = [];
          for (var T = N, k; T !== null; ) {
            k = T;
            var V = k.stateNode;
            if (k.tag === 5 && V !== null && (k = V, w !== null && (V = ai(T, w), V != null && he.push(Cu(T, V, k)))), pn) break;
            T = T.return;
          }
          0 < he.length && (j = new ue(j, de, null, l, F), P.push({ event: j, listeners: he }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (j = n === "mouseover" || n === "pointerover", ue = n === "mouseout" || n === "pointerout", j && l !== xt && (de = l.relatedTarget || l.fromElement) && (Nl(de) || de[vi])) break e;
          if ((ue || j) && (j = F.window === F ? F : (j = F.ownerDocument) ? j.defaultView || j.parentWindow : window, ue ? (de = l.relatedTarget || l.toElement, ue = N, de = de ? Nl(de) : null, de !== null && (pn = Ie(de), de !== pn || de.tag !== 5 && de.tag !== 6) && (de = null)) : (ue = null, de = N), ue !== de)) {
            if (he = Uf, V = "onMouseLeave", w = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (he = Xp, V = "onPointerLeave", w = "onPointerEnter", T = "pointer"), pn = ue == null ? j : ka(ue), k = de == null ? j : ka(de), j = new he(V, T + "leave", ue, l, F), j.target = pn, j.relatedTarget = k, V = null, Nl(F) === N && (he = new he(w, T + "enter", de, l, F), he.target = k, he.relatedTarget = pn, V = he), pn = V, ue && de) t: {
              for (he = ue, w = de, T = 0, k = he; k; k = Pi(k)) T++;
              for (k = 0, V = w; V; V = Pi(V)) k++;
              for (; 0 < T - k; ) he = Pi(he), T--;
              for (; 0 < k - T; ) w = Pi(w), k--;
              for (; T--; ) {
                if (he === w || w !== null && he === w.alternate) break t;
                he = Pi(he), w = Pi(w);
              }
              he = null;
            }
            else he = null;
            ue !== null && mv(P, j, ue, he, !1), de !== null && pn !== null && mv(P, pn, de, he, !0);
          }
        }
        e: {
          if (j = N ? ka(N) : window, ue = j.nodeName && j.nodeName.toLowerCase(), ue === "select" || ue === "input" && j.type === "file") var pe = Jm;
          else if (nv(j)) if (av) pe = sv;
          else {
            pe = ov;
            var we = ey;
          }
          else (ue = j.nodeName) && ue.toLowerCase() === "input" && (j.type === "checkbox" || j.type === "radio") && (pe = ty);
          if (pe && (pe = pe(n, N))) {
            Yf(P, pe, l, F);
            break e;
          }
          we && we(n, j, N), n === "focusout" && (we = j._wrapperState) && we.controlled && j.type === "number" && Ue(j, "number", j.value);
        }
        switch (we = N ? ka(N) : window, n) {
          case "focusin":
            (nv(we) || we.contentEditable === "true") && (Su = we, Wf = N, Co = null);
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
            Gf = !1, Xf(P, l, F);
            break;
          case "selectionchange":
            if (ry) break;
          case "keydown":
          case "keyup":
            Xf(P, l, F);
        }
        var be;
        if (mu) e: {
          switch (n) {
            case "compositionstart":
              var ze = "onCompositionStart";
              break e;
            case "compositionend":
              ze = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ze = "onCompositionUpdate";
              break e;
          }
          ze = void 0;
        }
        else yu ? Jp(n, l) && (ze = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ze = "onCompositionStart");
        ze && (qp && l.locale !== "ko" && (yu || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && yu && (be = Lf()) : (ci = F, Ms = "value" in ci ? ci.value : ci.textContent, yu = !0)), we = To(N, ze), 0 < we.length && (ze = new Hf(ze, n, null, l, F), P.push({ event: ze, listeners: we }), be ? ze.data = be : (be = ev(l), be !== null && (ze.data = be)))), (be = yo ? tv(n, l) : qm(n, l)) && (N = To(N, "onBeforeInput"), 0 < N.length && (F = new Hf("onBeforeInput", "beforeinput", null, l, F), P.push({ event: F, listeners: N }), F.data = be));
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
      c.tag === 5 && d !== null && (c = d, d = ai(n, l), d != null && o.unshift(Cu(n, d, c)), d = ai(n, r), d != null && o.push(Cu(n, d, c))), n = n.return;
    }
    return o;
  }
  function Pi(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function mv(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, N = S.stateNode;
      if (C !== null && C === o) break;
      S.tag === 5 && N !== null && (S = N, c ? (C = ai(l, d), C != null && h.unshift(Cu(l, C, S))) : c || (C = ai(l, d), C != null && h.push(Cu(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var yv = /\r\n?/g, ly = /\u0000|\uFFFD/g;
  function gv(n) {
    return (typeof n == "string" ? n : "" + n).replace(yv, `
`).replace(ly, "");
  }
  function Xs(n, r, l) {
    if (r = gv(r), gv(n) !== r && l) throw Error(_(425));
  }
  function $i() {
  }
  var Ro = null, Ol = null;
  function Ks(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var qs = typeof setTimeout == "function" ? setTimeout : void 0, ed = typeof clearTimeout == "function" ? clearTimeout : void 0, Sv = typeof Promise == "function" ? Promise : void 0, xu = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sv < "u" ? function(n) {
    return Sv.resolve(null).then(n).catch(Zs);
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
          n.removeChild(c), Vi(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Vi(r);
  }
  function Fa(n) {
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
  function Ev(n) {
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
  var Yi = Math.random().toString(36).slice(2), Va = "__reactFiber$" + Yi, wo = "__reactProps$" + Yi, vi = "__reactContainer$" + Yi, bo = "__reactEvents$" + Yi, Ru = "__reactListeners$" + Yi, uy = "__reactHandles$" + Yi;
  function Nl(n) {
    var r = n[Va];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[vi] || l[Va]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Ev(n); n !== null; ) {
          if (l = n[Va]) return l;
          n = Ev(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function xe(n) {
    return n = n[Va] || n[vi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ka(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(_(33));
  }
  function Kt(n) {
    return n[wo] || null;
  }
  var ot = [], ua = -1;
  function oa(n) {
    return { current: n };
  }
  function Vt(n) {
    0 > ua || (n.current = ot[ua], ot[ua] = null, ua--);
  }
  function Ee(n, r) {
    ua++, ot[ua] = n.current, n.current = r;
  }
  var lr = {}, ln = oa(lr), Nn = oa(!1), _r = lr;
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
    Vt(Nn), Vt(ln);
  }
  function Cv(n, r, l) {
    if (ln.current !== lr) throw Error(_(168));
    Ee(ln, r), Ee(Nn, l);
  }
  function Do(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(_(108, mn(n) || "Unknown", c));
    return K({}, l, o);
  }
  function Fn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || lr, _r = ln.current, Ee(ln, n), Ee(Nn, Nn.current), !0;
  }
  function Js(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(_(169));
    l ? (n = Do(n, r, _r), o.__reactInternalMemoizedMergedChildContext = n, Vt(Nn), Vt(ln), Ee(ln, n)) : Vt(Nn), Ee(Nn, l);
  }
  var Ba = null, bu = !1, hi = !1;
  function ec(n) {
    Ba === null ? Ba = [n] : Ba.push(n);
  }
  function Qi(n) {
    bu = !0, ec(n);
  }
  function Pa() {
    if (!hi && Ba !== null) {
      hi = !0;
      var n = 0, r = Dt;
      try {
        var l = Ba;
        for (Dt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ba = null, bu = !1;
      } catch (c) {
        throw Ba !== null && (Ba = Ba.slice(n + 1)), Xt(oi, Pa), c;
      } finally {
        Dt = r, hi = !1;
      }
    }
    return null;
  }
  var Ii = [], Wi = 0, Gi = null, mi = 0, Cn = [], sa = 0, Yr = null, $a = 1, Ya = "";
  function Ml(n, r) {
    Ii[Wi++] = mi, Ii[Wi++] = Gi, Gi = n, mi = r;
  }
  function xv(n, r, l) {
    Cn[sa++] = $a, Cn[sa++] = Ya, Cn[sa++] = Yr, Yr = n;
    var o = $a;
    n = Ya;
    var c = 32 - ra(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - ra(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, $a = 1 << 32 - ra(r) + c | l << c | o, Ya = d + n;
    } else $a = 1 << d | l << c | o, Ya = n;
  }
  function tc(n) {
    n.return !== null && (Ml(n, 1), xv(n, 1, 0));
  }
  function nc(n) {
    for (; n === Gi; ) Gi = Ii[--Wi], Ii[Wi] = null, mi = Ii[--Wi], Ii[Wi] = null;
    for (; n === Yr; ) Yr = Cn[--sa], Cn[sa] = null, Ya = Cn[--sa], Cn[sa] = null, $a = Cn[--sa], Cn[sa] = null;
  }
  var Nr = null, Mr = null, Qt = !1, ca = null;
  function td(n, r) {
    var l = ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Tv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Nr = n, Mr = Fa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Nr = n, Mr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Yr !== null ? { id: $a, overflow: Ya } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Nr = n, Mr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function nd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function rd(n) {
    if (Qt) {
      var r = Mr;
      if (r) {
        var l = r;
        if (!Tv(n, r)) {
          if (nd(n)) throw Error(_(418));
          r = Fa(l.nextSibling);
          var o = Nr;
          r && Tv(n, r) ? td(o, l) : (n.flags = n.flags & -4097 | 2, Qt = !1, Nr = n);
        }
      } else {
        if (nd(n)) throw Error(_(418));
        n.flags = n.flags & -4097 | 2, Qt = !1, Nr = n;
      }
    }
  }
  function Mn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Nr = n;
  }
  function rc(n) {
    if (n !== Nr) return !1;
    if (!Qt) return Mn(n), Qt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ks(n.type, n.memoizedProps)), r && (r = Mr)) {
      if (nd(n)) throw ko(), Error(_(418));
      for (; r; ) td(n, r), r = Fa(r.nextSibling);
    }
    if (Mn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(_(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Mr = Fa(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Mr = null;
      }
    } else Mr = Nr ? Fa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ko() {
    for (var n = Mr; n; ) n = Fa(n.nextSibling);
  }
  function Xi() {
    Mr = Nr = null, Qt = !1;
  }
  function yi(n) {
    ca === null ? ca = [n] : ca.push(n);
  }
  var oy = Je.ReactCurrentBatchConfig;
  function Ll(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(_(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(_(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(_(284));
      if (!l._owner) throw Error(_(290, n));
    }
    return n;
  }
  function ac(n, r) {
    throw n = Object.prototype.toString.call(r), Error(_(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Rv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zl(n) {
    function r(w, T) {
      if (n) {
        var k = w.deletions;
        k === null ? (w.deletions = [T], w.flags |= 16) : k.push(T);
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
      return w = rl(w, T), w.index = 0, w.sibling = null, w;
    }
    function d(w, T, k) {
      return w.index = k, n ? (k = w.alternate, k !== null ? (k = k.index, k < T ? (w.flags |= 2, T) : k) : (w.flags |= 2, T)) : (w.flags |= 1048576, T);
    }
    function h(w) {
      return n && w.alternate === null && (w.flags |= 2), w;
    }
    function S(w, T, k, V) {
      return T === null || T.tag !== 6 ? (T = zd(k, w.mode, V), T.return = w, T) : (T = c(T, k), T.return = w, T);
    }
    function C(w, T, k, V) {
      var pe = k.type;
      return pe === Pe ? F(w, T, k.props.children, V, k.key) : T !== null && (T.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === pt && Rv(pe) === T.type) ? (V = c(T, k.props), V.ref = Ll(w, T, k), V.return = w, V) : (V = as(k.type, k.key, k.props, null, w.mode, V), V.ref = Ll(w, T, k), V.return = w, V);
    }
    function N(w, T, k, V) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== k.containerInfo || T.stateNode.implementation !== k.implementation ? (T = jc(k, w.mode, V), T.return = w, T) : (T = c(T, k.children || []), T.return = w, T);
    }
    function F(w, T, k, V, pe) {
      return T === null || T.tag !== 7 ? (T = Ti(k, w.mode, V, pe), T.return = w, T) : (T = c(T, k), T.return = w, T);
    }
    function P(w, T, k) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = zd("" + T, w.mode, k), T.return = w, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Ae:
            return k = as(T.type, T.key, T.props, null, w.mode, k), k.ref = Ll(w, null, T), k.return = w, k;
          case Tt:
            return T = jc(T, w.mode, k), T.return = w, T;
          case pt:
            var V = T._init;
            return P(w, V(T._payload), k);
        }
        if (At(T) || ge(T)) return T = Ti(T, w.mode, k, null), T.return = w, T;
        ac(w, T);
      }
      return null;
    }
    function j(w, T, k, V) {
      var pe = T !== null ? T.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number") return pe !== null ? null : S(w, T, "" + k, V);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ae:
            return k.key === pe ? C(w, T, k, V) : null;
          case Tt:
            return k.key === pe ? N(w, T, k, V) : null;
          case pt:
            return pe = k._init, j(
              w,
              T,
              pe(k._payload),
              V
            );
        }
        if (At(k) || ge(k)) return pe !== null ? null : F(w, T, k, V, null);
        ac(w, k);
      }
      return null;
    }
    function ue(w, T, k, V, pe) {
      if (typeof V == "string" && V !== "" || typeof V == "number") return w = w.get(k) || null, S(T, w, "" + V, pe);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case Ae:
            return w = w.get(V.key === null ? k : V.key) || null, C(T, w, V, pe);
          case Tt:
            return w = w.get(V.key === null ? k : V.key) || null, N(T, w, V, pe);
          case pt:
            var we = V._init;
            return ue(w, T, k, we(V._payload), pe);
        }
        if (At(V) || ge(V)) return w = w.get(k) || null, F(T, w, V, pe, null);
        ac(T, V);
      }
      return null;
    }
    function de(w, T, k, V) {
      for (var pe = null, we = null, be = T, ze = T = 0, Pn = null; be !== null && ze < k.length; ze++) {
        be.index > ze ? (Pn = be, be = null) : Pn = be.sibling;
        var gt = j(w, be, k[ze], V);
        if (gt === null) {
          be === null && (be = Pn);
          break;
        }
        n && be && gt.alternate === null && r(w, be), T = d(gt, T, ze), we === null ? pe = gt : we.sibling = gt, we = gt, be = Pn;
      }
      if (ze === k.length) return l(w, be), Qt && Ml(w, ze), pe;
      if (be === null) {
        for (; ze < k.length; ze++) be = P(w, k[ze], V), be !== null && (T = d(be, T, ze), we === null ? pe = be : we.sibling = be, we = be);
        return Qt && Ml(w, ze), pe;
      }
      for (be = o(w, be); ze < k.length; ze++) Pn = ue(be, w, ze, k[ze], V), Pn !== null && (n && Pn.alternate !== null && be.delete(Pn.key === null ? ze : Pn.key), T = d(Pn, T, ze), we === null ? pe = Pn : we.sibling = Pn, we = Pn);
      return n && be.forEach(function(ll) {
        return r(w, ll);
      }), Qt && Ml(w, ze), pe;
    }
    function he(w, T, k, V) {
      var pe = ge(k);
      if (typeof pe != "function") throw Error(_(150));
      if (k = pe.call(k), k == null) throw Error(_(151));
      for (var we = pe = null, be = T, ze = T = 0, Pn = null, gt = k.next(); be !== null && !gt.done; ze++, gt = k.next()) {
        be.index > ze ? (Pn = be, be = null) : Pn = be.sibling;
        var ll = j(w, be, gt.value, V);
        if (ll === null) {
          be === null && (be = Pn);
          break;
        }
        n && be && ll.alternate === null && r(w, be), T = d(ll, T, ze), we === null ? pe = ll : we.sibling = ll, we = ll, be = Pn;
      }
      if (gt.done) return l(
        w,
        be
      ), Qt && Ml(w, ze), pe;
      if (be === null) {
        for (; !gt.done; ze++, gt = k.next()) gt = P(w, gt.value, V), gt !== null && (T = d(gt, T, ze), we === null ? pe = gt : we.sibling = gt, we = gt);
        return Qt && Ml(w, ze), pe;
      }
      for (be = o(w, be); !gt.done; ze++, gt = k.next()) gt = ue(be, w, ze, gt.value, V), gt !== null && (n && gt.alternate !== null && be.delete(gt.key === null ? ze : gt.key), T = d(gt, T, ze), we === null ? pe = gt : we.sibling = gt, we = gt);
      return n && be.forEach(function(lh) {
        return r(w, lh);
      }), Qt && Ml(w, ze), pe;
    }
    function pn(w, T, k, V) {
      if (typeof k == "object" && k !== null && k.type === Pe && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Ae:
            e: {
              for (var pe = k.key, we = T; we !== null; ) {
                if (we.key === pe) {
                  if (pe = k.type, pe === Pe) {
                    if (we.tag === 7) {
                      l(w, we.sibling), T = c(we, k.props.children), T.return = w, w = T;
                      break e;
                    }
                  } else if (we.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === pt && Rv(pe) === we.type) {
                    l(w, we.sibling), T = c(we, k.props), T.ref = Ll(w, we, k), T.return = w, w = T;
                    break e;
                  }
                  l(w, we);
                  break;
                } else r(w, we);
                we = we.sibling;
              }
              k.type === Pe ? (T = Ti(k.props.children, w.mode, V, k.key), T.return = w, w = T) : (V = as(k.type, k.key, k.props, null, w.mode, V), V.ref = Ll(w, T, k), V.return = w, w = V);
            }
            return h(w);
          case Tt:
            e: {
              for (we = k.key; T !== null; ) {
                if (T.key === we) if (T.tag === 4 && T.stateNode.containerInfo === k.containerInfo && T.stateNode.implementation === k.implementation) {
                  l(w, T.sibling), T = c(T, k.children || []), T.return = w, w = T;
                  break e;
                } else {
                  l(w, T);
                  break;
                }
                else r(w, T);
                T = T.sibling;
              }
              T = jc(k, w.mode, V), T.return = w, w = T;
            }
            return h(w);
          case pt:
            return we = k._init, pn(w, T, we(k._payload), V);
        }
        if (At(k)) return de(w, T, k, V);
        if (ge(k)) return he(w, T, k, V);
        ac(w, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, T !== null && T.tag === 6 ? (l(w, T.sibling), T = c(T, k), T.return = w, w = T) : (l(w, T), T = zd(k, w.mode, V), T.return = w, w = T), h(w)) : l(w, T);
    }
    return pn;
  }
  var sn = zl(!0), te = zl(!1), Qr = oa(null), Lr = null, Du = null, ad = null;
  function id() {
    ad = Du = Lr = null;
  }
  function ld(n) {
    var r = Qr.current;
    Vt(Qr), n._currentValue = r;
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
      if (Lr === null) throw Error(_(308));
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
    return c === null ? (l.next = l, od(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ir(n, o);
  }
  function Ir(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Wr = !1;
  function cd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function wv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function gi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ki(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, st & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ir(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, od(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ir(n, l);
  }
  function ic(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, ks(n, l);
    }
  }
  function bv(n, r) {
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
      var F = n.alternate;
      F !== null && (F = F.updateQueue, S = F.lastBaseUpdate, S !== h && (S === null ? F.firstBaseUpdate = N : S.next = N, F.lastBaseUpdate = C));
    }
    if (d !== null) {
      var P = c.baseState;
      h = 0, F = N = C = null, S = d;
      do {
        var j = S.lane, ue = S.eventTime;
        if ((o & j) === j) {
          F !== null && (F = F.next = {
            eventTime: ue,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var de = n, he = S;
            switch (j = r, ue = l, he.tag) {
              case 1:
                if (de = he.payload, typeof de == "function") {
                  P = de.call(ue, P, j);
                  break e;
                }
                P = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = he.payload, j = typeof de == "function" ? de.call(ue, P, j) : de, j == null) break e;
                P = K({}, P, j);
                break e;
              case 2:
                Wr = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, j = c.effects, j === null ? c.effects = [S] : j.push(S));
        } else ue = { eventTime: ue, lane: j, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, F === null ? (N = F = ue, C = P) : F = F.next = ue, h |= j;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null) break;
          j = S, S = j.next, j.next = null, c.lastBaseUpdate = j, c.shared.pending = null;
        }
      } while (!0);
      if (F === null && (C = P), c.baseState = C, c.firstBaseUpdate = N, c.lastBaseUpdate = F, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Xa |= h, n.lanes = h, n.memoizedState = P;
    }
  }
  function fd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(_(191, c));
        c.call(o);
      }
    }
  }
  var Oo = {}, Qa = oa(Oo), No = oa(Oo), Mo = oa(Oo);
  function Al(n) {
    if (n === Oo) throw Error(_(174));
    return n;
  }
  function dd(n, r) {
    switch (Ee(Mo, r), Ee(No, n), Ee(Qa, Oo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : rn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = rn(r, n);
    }
    Vt(Qa), Ee(Qa, r);
  }
  function jl() {
    Vt(Qa), Vt(No), Vt(Mo);
  }
  function Dv(n) {
    Al(Mo.current);
    var r = Al(Qa.current), l = rn(r, n.type);
    r !== l && (Ee(No, n), Ee(Qa, l));
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
  function Te() {
    for (var n = 0; n < Lo.length; n++) Lo[n]._workInProgressVersionPrimary = null;
    Lo.length = 0;
  }
  var qe = Je.ReactCurrentDispatcher, mt = Je.ReactCurrentBatchConfig, Mt = 0, yt = null, xn = null, Vn = null, oc = !1, zo = !1, Hl = 0, A = 0;
  function vt() {
    throw Error(_(321));
  }
  function Me(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Da(n[l], r[l])) return !1;
    return !0;
  }
  function qi(n, r, l, o, c, d) {
    if (Mt = d, yt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, qe.current = n === null || n.memoizedState === null ? Tc : Vo, n = l(o, c), zo) {
      d = 0;
      do {
        if (zo = !1, Hl = 0, 25 <= d) throw Error(_(301));
        d += 1, Vn = xn = null, r.updateQueue = null, qe.current = Rc, n = l(o, c);
      } while (zo);
    }
    if (qe.current = $l, r = xn !== null && xn.next !== null, Mt = 0, Vn = xn = yt = null, oc = !1, r) throw Error(_(300));
    return n;
  }
  function _a() {
    var n = Hl !== 0;
    return Hl = 0, n;
  }
  function ur() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Vn === null ? yt.memoizedState = Vn = n : Vn = Vn.next = n, Vn;
  }
  function cn() {
    if (xn === null) {
      var n = yt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = xn.next;
    var r = Vn === null ? yt.memoizedState : Vn.next;
    if (r !== null) Vn = r, xn = n;
    else {
      if (n === null) throw Error(_(310));
      xn = n, n = { memoizedState: xn.memoizedState, baseState: xn.baseState, baseQueue: xn.baseQueue, queue: xn.queue, next: null }, Vn === null ? yt.memoizedState = Vn = n : Vn = Vn.next = n;
    }
    return Vn;
  }
  function Si(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Zi(n) {
    var r = cn(), l = r.queue;
    if (l === null) throw Error(_(311));
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
        var F = N.lane;
        if ((Mt & F) === F) C !== null && (C = C.next = { lane: 0, action: N.action, hasEagerState: N.hasEagerState, eagerState: N.eagerState, next: null }), o = N.hasEagerState ? N.eagerState : n(o, N.action);
        else {
          var P = {
            lane: F,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          };
          C === null ? (S = C = P, h = o) : C = C.next = P, yt.lanes |= F, Xa |= F;
        }
        N = N.next;
      } while (N !== null && N !== d);
      C === null ? h = o : C.next = S, Da(o, r.memoizedState) || (Tn = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, yt.lanes |= d, Xa |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Fl(n) {
    var r = cn(), l = r.queue;
    if (l === null) throw Error(_(311));
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
    var l = yt, o = cn(), c = r(), d = !Da(o.memoizedState, c);
    if (d && (o.memoizedState = c, Tn = !0), o = o.queue, Uo(pc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Vn !== null && Vn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Vl(9, dc.bind(null, l, o, c, r), void 0, null), Ln === null) throw Error(_(349));
      Mt & 30 || fc(l, r, c);
    }
    return c;
  }
  function fc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = yt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, yt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
    var r = Ir(n, 1);
    r !== null && mr(r, n, 1, -1);
  }
  function mc(n) {
    var r = ur();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Si, lastRenderedState: n }, r.queue = n, n = n.dispatch = Pl.bind(null, yt, n), [r.memoizedState, n];
  }
  function Vl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = yt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, yt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function yc() {
    return cn().memoizedState;
  }
  function ku(n, r, l, o) {
    var c = ur();
    yt.flags |= n, c.memoizedState = Vl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function _u(n, r, l, o) {
    var c = cn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (xn !== null) {
      var h = xn.memoizedState;
      if (d = h.destroy, o !== null && Me(o, h.deps)) {
        c.memoizedState = Vl(r, l, d, o);
        return;
      }
    }
    yt.flags |= n, c.memoizedState = Vl(1 | r, l, d, o);
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
    return o !== null && r !== null && Me(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function xc(n, r) {
    var l = cn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Me(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function pd(n, r, l) {
    return Mt & 21 ? (Da(l, r) || (l = Ds(), yt.lanes |= l, Xa |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Tn = !0), n.memoizedState = l);
  }
  function Ho(n, r) {
    var l = Dt;
    Dt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = mt.transition;
    mt.transition = {};
    try {
      n(!1), r();
    } finally {
      Dt = l, mt.transition = o;
    }
  }
  function vd() {
    return cn().memoizedState;
  }
  function Fo(n, r, l) {
    var o = Ka(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, zr(n)) kv(r, l);
    else if (l = sd(n, r, l, o), l !== null) {
      var c = bn();
      mr(l, n, o, c), jt(l, r, o);
    }
  }
  function Pl(n, r, l) {
    var o = Ka(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (zr(n)) kv(r, c);
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
    return n === yt || r !== null && r === yt;
  }
  function kv(n, r) {
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
  var $l = { readContext: fa, useCallback: vt, useContext: vt, useEffect: vt, useImperativeHandle: vt, useInsertionEffect: vt, useLayoutEffect: vt, useMemo: vt, useReducer: vt, useRef: vt, useState: vt, useDebugValue: vt, useDeferredValue: vt, useTransition: vt, useMutableSource: vt, useSyncExternalStore: vt, useId: vt, unstable_isNewReconciler: !1 }, Tc = { readContext: fa, useCallback: function(n, r) {
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
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Fo.bind(null, yt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = ur();
    return n = { current: n }, r.memoizedState = n;
  }, useState: mc, useDebugValue: jo, useDeferredValue: function(n) {
    return ur().memoizedState = n;
  }, useTransition: function() {
    var n = mc(!1), r = n[0];
    return n = Ho.bind(null, n[1]), ur().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = yt, c = ur();
    if (Qt) {
      if (l === void 0) throw Error(_(407));
      l = l();
    } else {
      if (l = r(), Ln === null) throw Error(_(349));
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
    if (Qt) {
      var l = Ya, o = $a;
      l = (o & ~(1 << 32 - ra(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Hl++, 0 < l && (r += "H" + l.toString(32)), r += ":";
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
    useReducer: Zi,
    useRef: yc,
    useState: function() {
      return Zi(Si);
    },
    useDebugValue: jo,
    useDeferredValue: function(n) {
      var r = cn();
      return pd(r, xn.memoizedState, n);
    },
    useTransition: function() {
      var n = Zi(Si)[0], r = cn().memoizedState;
      return [n, r];
    },
    useMutableSource: sc,
    useSyncExternalStore: cc,
    useId: vd,
    unstable_isNewReconciler: !1
  }, Rc = { readContext: fa, useCallback: Cc, useContext: fa, useEffect: Uo, useImperativeHandle: Ec, useInsertionEffect: Sc, useLayoutEffect: Ao, useMemo: xc, useReducer: Fl, useRef: yc, useState: function() {
    return Fl(Si);
  }, useDebugValue: jo, useDeferredValue: function(n) {
    var r = cn();
    return xn === null ? r.memoizedState = n : pd(r, xn.memoizedState, n);
  }, useTransition: function() {
    var n = Fl(Si)[0], r = cn().memoizedState;
    return [n, r];
  }, useMutableSource: sc, useSyncExternalStore: cc, useId: vd, unstable_isNewReconciler: !1 };
  function Oa(n, r) {
    if (n && n.defaultProps) {
      r = K({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function hd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : K({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var wc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ie(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = bn(), c = Ka(n), d = gi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ki(n, d, c), r !== null && (mr(r, n, c, o), ic(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = bn(), c = Ka(n), d = gi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ki(n, d, c), r !== null && (mr(r, n, c, o), ic(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = bn(), o = Ka(n), c = gi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ki(n, c, o), r !== null && (mr(r, n, o, l), ic(r, n, o));
  } };
  function _v(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !So(l, o) || !So(c, d) : !0;
  }
  function bc(n, r, l) {
    var o = !1, c = lr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = fa(d) : (c = En(r) ? _r : ln.current, o = r.contextTypes, d = (o = o != null) ? Or(n, c) : lr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = wc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Ov(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && wc.enqueueReplaceState(r, r.state, null);
  }
  function Bo(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, cd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = fa(d) : (d = En(r) ? _r : ln.current, c.context = Or(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (hd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && wc.enqueueReplaceState(c, c.state, null), _o(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
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
  function Nv(n, r, l) {
    l = gi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Uu || (Uu = !0, Wl = o), yd(n, r);
    }, l;
  }
  function gd(n, r, l) {
    l = gi(-1, l), l.tag = 3;
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
      yd(n, r), typeof o != "function" && (tl === null ? tl = /* @__PURE__ */ new Set([this]) : tl.add(this));
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
    c.has(l) || (c.add(l), n = hy.bind(null, n, r, l), r.then(n, n));
  }
  function Mv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ji(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = gi(-1, 1), r.tag = 2, Ki(l, r, 1))), l.lanes |= 1), n);
  }
  var Po = Je.ReactCurrentOwner, Tn = !1;
  function Gn(n, r, l, o) {
    r.child = n === null ? te(r, null, l, o) : sn(r, n.child, l, o);
  }
  function Ur(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return qt(r, c), o = qi(n, r, l, o, d, c), l = _a(), n !== null && !Tn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pa(n, r, c)) : (Qt && l && tc(r), r.flags |= 1, Gn(n, r, o, c), r.child);
  }
  function Ql(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Ld(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Ye(n, r, d, o, c)) : (n = as(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : So, l(h, o) && n.ref === r.ref) return pa(n, r, c);
    }
    return r.flags |= 1, n = rl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ye(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (So(d, o) && n.ref === r.ref) if (Tn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Tn = !0);
      else return r.lanes = n.lanes, pa(n, r, c);
    }
    return Lv(n, r, l, o, c);
  }
  function $o(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ee(Mu, Gr), Gr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ee(Mu, Gr), Gr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Ee(Mu, Gr), Gr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Ee(Mu, Gr), Gr |= o;
    return Gn(n, r, c, l), r.child;
  }
  function Ed(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Lv(n, r, l, o, c) {
    var d = En(l) ? _r : ln.current;
    return d = Or(r, d), qt(r, c), l = qi(n, r, l, o, d, c), o = _a(), n !== null && !Tn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pa(n, r, c)) : (Qt && o && tc(r), r.flags |= 1, Gn(n, r, l, c), r.child);
  }
  function zv(n, r, l, o, c) {
    if (En(l)) {
      var d = !0;
      Fn(r);
    } else d = !1;
    if (qt(r, c), r.stateNode === null) da(n, r), bc(r, l, o), Bo(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, N = l.contextType;
      typeof N == "object" && N !== null ? N = fa(N) : (N = En(l) ? _r : ln.current, N = Or(r, N));
      var F = l.getDerivedStateFromProps, P = typeof F == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      P || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== N) && Ov(r, h, o, N), Wr = !1;
      var j = r.memoizedState;
      h.state = j, _o(r, o, h, c), C = r.memoizedState, S !== o || j !== C || Nn.current || Wr ? (typeof F == "function" && (hd(r, l, F, o), C = r.memoizedState), (S = Wr || _v(r, l, S, o, j, C, N)) ? (P || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = N, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, wv(n, r), S = r.memoizedProps, N = r.type === r.elementType ? S : Oa(r.type, S), h.props = N, P = r.pendingProps, j = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = fa(C) : (C = En(l) ? _r : ln.current, C = Or(r, C));
      var ue = l.getDerivedStateFromProps;
      (F = typeof ue == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== P || j !== C) && Ov(r, h, o, C), Wr = !1, j = r.memoizedState, h.state = j, _o(r, o, h, c);
      var de = r.memoizedState;
      S !== P || j !== de || Nn.current || Wr ? (typeof ue == "function" && (hd(r, l, ue, o), de = r.memoizedState), (N = Wr || _v(r, l, N, o, j, de, C) || !1) ? (F || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, de, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, de, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && j === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && j === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = de), h.props = o, h.state = de, h.context = C, o = N) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && j === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && j === n.memoizedState || (r.flags |= 1024), o = !1);
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
    r.pendingContext ? Cv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Cv(n, r.context, !1), dd(n, r.containerInfo);
  }
  function Uv(n, r, l, o, c) {
    return Xi(), yi(c), r.flags |= 256, Gn(n, r, l, o), r.child;
  }
  var kc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Cd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function _c(n, r, l) {
    var o = r.pendingProps, c = Zt.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ee(Zt, c & 1), n === null)
      return rd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = al(h, o, 0, null), n = Ti(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Cd(l), r.memoizedState = kc, n) : xd(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null)) return Av(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = rl(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = rl(S, d) : (d = Ti(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Cd(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = kc, o;
    }
    return d = n.child, n = d.sibling, o = rl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function xd(n, r) {
    return r = al({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Qo(n, r, l, o) {
    return o !== null && yi(o), sn(r, n.child, null, l), n = xd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Av(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = md(Error(_(422))), Qo(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = al({ mode: "visible", children: o.children }, c, 0, null), d = Ti(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && sn(r, n.child, null, h), r.child.memoizedState = Cd(h), r.memoizedState = kc, d);
    if (!(r.mode & 1)) return Qo(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var S = o.dgst;
      return o = S, d = Error(_(419)), o = md(d, o, void 0), Qo(n, r, h, o);
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
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ir(n, c), mr(o, n, c, -1));
      }
      return Md(), o = md(Error(_(421))), Qo(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = my.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Mr = Fa(c.nextSibling), Nr = r, Qt = !0, ca = null, n !== null && (Cn[sa++] = $a, Cn[sa++] = Ya, Cn[sa++] = Yr, $a = n.id, Ya = n.overflow, Yr = r), r = xd(r, o.children), r.flags |= 4096, r);
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
  function Ia(n, r, l) {
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
    if (Ee(Zt, o), !(r.mode & 1)) r.memoizedState = null;
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
    if (n !== null && (r.dependencies = n.dependencies), Xa |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(_(153));
    if (r.child !== null) {
      for (n = r.child, l = rl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = rl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Io(n, r, l) {
    switch (r.tag) {
      case 3:
        Ou(r), Xi();
        break;
      case 5:
        Dv(r);
        break;
      case 1:
        En(r.type) && Fn(r);
        break;
      case 4:
        dd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ee(Qr, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ee(Zt, Zt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? _c(n, r, l) : (Ee(Zt, Zt.current & 1), n = pa(n, r, l), n !== null ? n.sibling : null);
        Ee(Zt, Zt.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Ia(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ee(Zt, Zt.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, $o(n, r, l);
    }
    return pa(n, r, l);
  }
  var va, Rn, jv, Hv;
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
  }, jv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Al(Qa.current);
      var d = null;
      switch (l) {
        case "input":
          c = bt(n, c), o = bt(n, o), d = [];
          break;
        case "select":
          c = K({}, c, { value: void 0 }), o = K({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = _t(n, c), o = _t(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = $i);
      }
      Bt(l, o);
      var h;
      l = null;
      for (N in c) if (!o.hasOwnProperty(N) && c.hasOwnProperty(N) && c[N] != null) if (N === "style") {
        var S = c[N];
        for (h in S) S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
      } else N !== "dangerouslySetInnerHTML" && N !== "children" && N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning" && N !== "autoFocus" && (_e.hasOwnProperty(N) ? d || (d = []) : (d = d || []).push(N, null));
      for (N in o) {
        var C = o[N];
        if (S = c != null ? c[N] : void 0, o.hasOwnProperty(N) && C !== S && (C != null || S != null)) if (N === "style") if (S) {
          for (h in S) !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
          for (h in C) C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
        } else l || (d || (d = []), d.push(
          N,
          l
        )), l = C;
        else N === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(N, C)) : N === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(N, "" + C) : N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning" && (_e.hasOwnProperty(N) ? (C != null && N === "onScroll" && Rt("scroll", n), d || S === C || (d = [])) : (d = d || []).push(N, C));
      }
      l && (d = d || []).push("style", l);
      var N = d;
      (r.updateQueue = N) && (r.flags |= 4);
    }
  }, Hv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Wo(n, r) {
    if (!Qt) switch (n.tailMode) {
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
  function Fv(n, r, l) {
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
        return o = r.stateNode, jl(), Vt(Nn), Vt(ln), Te(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (rc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ca !== null && (Gl(ca), ca = null))), Rn(n, r), Bn(r), null;
      case 5:
        lc(r);
        var c = Al(Mo.current);
        if (l = r.type, n !== null && r.stateNode != null) jv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(_(166));
            return Bn(r), null;
          }
          if (n = Al(Qa.current), rc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Va] = r, o[wo] = d, n = (r.mode & 1) !== 0, l) {
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
              ), c = ["children", "" + S]) : _e.hasOwnProperty(h) && S != null && h === "onScroll" && Rt("scroll", o);
            }
            switch (l) {
              case "input":
                yn(o), Aa(o, d, !0);
                break;
              case "textarea":
                yn(o), Nt(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = $i);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = nn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[Va] = r, n[wo] = o, va(n, r, !1, !1), r.stateNode = n;
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
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = K({}, o, { value: void 0 }), Rt("invalid", n);
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
                d === "style" ? lt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && gn(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && Q(n, C) : typeof C == "number" && Q(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (_e.hasOwnProperty(d) ? C != null && d === "onScroll" && Rt("scroll", n) : C != null && De(n, d, C, h));
              }
              switch (l) {
                case "input":
                  yn(n), Aa(n, o, !1);
                  break;
                case "textarea":
                  yn(n), Nt(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + kn(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Ct(n, !!o.multiple, d, !1) : o.defaultValue != null && Ct(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = $i);
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
        if (n && r.stateNode != null) Hv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(_(166));
          if (l = Al(Mo.current), Al(Qa.current), rc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Va] = r, (d = o.nodeValue !== l) && (n = Nr, n !== null)) switch (n.tag) {
              case 3:
                Xs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Xs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Va] = r, r.stateNode = o;
        }
        return Bn(r), null;
      case 13:
        if (Vt(Zt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Qt && Mr !== null && r.mode & 1 && !(r.flags & 128)) ko(), Xi(), r.flags |= 98560, d = !1;
          else if (d = rc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(_(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(_(317));
              d[Va] = r;
            } else Xi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
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
              return Ee(Zt, Zt.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && We() > zu && (r.flags |= 128, o = !0, Wo(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = uc(h), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Wo(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !Qt) return Bn(r), null;
          } else 2 * We() - d.renderingStartTime > zu && l !== 1073741824 && (r.flags |= 128, o = !0, Wo(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = We(), r.sibling = null, l = Zt.current, Ee(Zt, o ? l & 1 | 2 : l & 1), r) : (Bn(r), null);
      case 22:
      case 23:
        return Nd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Gr & 1073741824 && (Bn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Bn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(_(156, r.tag));
  }
  function Oc(n, r) {
    switch (nc(r), r.tag) {
      case 1:
        return En(r.type) && wu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return jl(), Vt(Nn), Vt(ln), Te(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return lc(r), null;
      case 13:
        if (Vt(Zt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(_(340));
          Xi();
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
  var Go = !1, or = !1, sy = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
  function Nu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      It(n, r, o);
    }
    else l.current = null;
  }
  function Nc(n, r, l) {
    try {
      l();
    } catch (o) {
      It(n, r, o);
    }
  }
  var Vv = !1;
  function Bv(n, r) {
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
          var h = 0, S = -1, C = -1, N = 0, F = 0, P = n, j = null;
          t: for (; ; ) {
            for (var ue; P !== l || c !== 0 && P.nodeType !== 3 || (S = h + c), P !== d || o !== 0 && P.nodeType !== 3 || (C = h + o), P.nodeType === 3 && (h += P.nodeValue.length), (ue = P.firstChild) !== null; )
              j = P, P = ue;
            for (; ; ) {
              if (P === n) break t;
              if (j === l && ++N === c && (S = h), j === d && ++F === o && (C = h), (ue = P.nextSibling) !== null) break;
              P = j, j = P.parentNode;
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
            var k = r.stateNode.containerInfo;
            k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(_(163));
        }
      } catch (V) {
        It(r, r.return, V);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ce = n;
        break;
      }
      ce = r.return;
    }
    return de = Vv, Vv = !1, de;
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
    r !== null && (n.alternate = null, Mc(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Va], delete r[wo], delete r[bo], delete r[Ru], delete r[uy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function qo(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ei(n) {
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
  function Wa(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = $i));
    else if (o !== 4 && (n = n.child, n !== null)) for (Wa(n, r, l), n = n.sibling; n !== null; ) Wa(n, r, l), n = n.sibling;
  }
  function Ga(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ga(n, r, l), n = n.sibling; n !== null; ) Ga(n, r, l), n = n.sibling;
  }
  var fn = null, vr = !1;
  function hr(n, r, l) {
    for (l = l.child; l !== null; ) Pv(n, r, l), l = l.sibling;
  }
  function Pv(n, r, l) {
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
        fn !== null && (vr ? (n = fn, l = l.stateNode, n.nodeType === 8 ? Tu(n.parentNode, l) : n.nodeType === 1 && Tu(n, l), Vi(n)) : Tu(fn, l.stateNode));
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
          It(l, r, S);
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
  function $v(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new sy()), r.forEach(function(o) {
        var c = Zv.bind(null, n, o);
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
        if (fn === null) throw Error(_(160));
        Pv(d, h, c), fn = null, vr = !1;
        var C = c.alternate;
        C !== null && (C.return = null), c.return = null;
      } catch (N) {
        It(c, r, N);
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
            It(n, n.return, he);
          }
          try {
            Xo(5, n, n.return);
          } catch (he) {
            It(n, n.return, he);
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
            It(n, n.return, he);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null) try {
            S === "input" && d.type === "radio" && d.name != null && An(c, d), _n(S, h);
            var N = _n(S, d);
            for (h = 0; h < C.length; h += 2) {
              var F = C[h], P = C[h + 1];
              F === "style" ? lt(c, P) : F === "dangerouslySetInnerHTML" ? gn(c, P) : F === "children" ? Q(c, P) : De(c, F, P, N);
            }
            switch (S) {
              case "input":
                Ta(c, d);
                break;
              case "textarea":
                jn(c, d);
                break;
              case "select":
                var j = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ue = d.value;
                ue != null ? Ct(c, !!d.multiple, ue, !1) : j !== !!d.multiple && (d.defaultValue != null ? Ct(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Ct(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[wo] = d;
          } catch (he) {
            It(n, n.return, he);
          }
        }
        break;
      case 6:
        if (Na(r, n), Ar(n), o & 4) {
          if (n.stateNode === null) throw Error(_(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (he) {
            It(n, n.return, he);
          }
        }
        break;
      case 3:
        if (Na(r, n), Ar(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Vi(r.containerInfo);
        } catch (he) {
          It(n, n.return, he);
        }
        break;
      case 4:
        Na(r, n), Ar(n);
        break;
      case 13:
        Na(r, n), Ar(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (kd = We())), o & 4 && $v(n);
        break;
      case 22:
        if (F = l !== null && l.memoizedState !== null, n.mode & 1 ? (or = (N = or) || F, Na(r, n), or = N) : Na(r, n), Ar(n), o & 8192) {
          if (N = n.memoizedState !== null, (n.stateNode.isHidden = N) && !F && n.mode & 1) for (ce = n, F = n.child; F !== null; ) {
            for (P = ce = F; ce !== null; ) {
              switch (j = ce, ue = j.child, j.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xo(4, j, j.return);
                  break;
                case 1:
                  Nu(j, j.return);
                  var de = j.stateNode;
                  if (typeof de.componentWillUnmount == "function") {
                    o = j, l = j.return;
                    try {
                      r = o, de.props = r.memoizedProps, de.state = r.memoizedState, de.componentWillUnmount();
                    } catch (he) {
                      It(o, l, he);
                    }
                  }
                  break;
                case 5:
                  Nu(j, j.return);
                  break;
                case 22:
                  if (j.memoizedState !== null) {
                    Zo(P);
                    continue;
                  }
              }
              ue !== null ? (ue.return = j, ce = ue) : Zo(P);
            }
            F = F.sibling;
          }
          e: for (F = null, P = n; ; ) {
            if (P.tag === 5) {
              if (F === null) {
                F = P;
                try {
                  c = P.stateNode, N ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = P.stateNode, C = P.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Ge("display", h));
                } catch (he) {
                  It(n, n.return, he);
                }
              }
            } else if (P.tag === 6) {
              if (F === null) try {
                P.stateNode.nodeValue = N ? "" : P.memoizedProps;
              } catch (he) {
                It(n, n.return, he);
              }
            } else if ((P.tag !== 22 && P.tag !== 23 || P.memoizedState === null || P === n) && P.child !== null) {
              P.child.return = P, P = P.child;
              continue;
            }
            if (P === n) break e;
            for (; P.sibling === null; ) {
              if (P.return === null || P.return === n) break e;
              F === P && (F = null), P = P.return;
            }
            F === P && (F = null), P.sibling.return = P.return, P = P.sibling;
          }
        }
        break;
      case 19:
        Na(r, n), Ar(n), o & 4 && $v(n);
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
          throw Error(_(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Q(c, ""), o.flags &= -33);
            var d = Ei(n);
            Ga(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = Ei(n);
            Wa(n, S, h);
            break;
          default:
            throw Error(_(161));
        }
      } catch (C) {
        It(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function cy(n, r, l) {
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
        Yv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ce = d) : Yv(n);
    }
  }
  function Yv(n) {
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
                  var F = N.memoizedState;
                  if (F !== null) {
                    var P = F.dehydrated;
                    P !== null && Vi(P);
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
              throw Error(_(163));
          }
          or || r.flags & 512 && Rd(r);
        } catch (j) {
          It(r, r.return, j);
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
              It(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                It(r, c, C);
              }
            }
            var d = r.return;
            try {
              Rd(r);
            } catch (C) {
              It(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              Rd(r);
            } catch (C) {
              It(r, h, C);
            }
        }
      } catch (C) {
        It(r, r.return, C);
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
  var fy = Math.ceil, el = Je.ReactCurrentDispatcher, Il = Je.ReactCurrentOwner, Xn = Je.ReactCurrentBatchConfig, st = 0, Ln = null, wn = null, Kn = 0, Gr = 0, Mu = oa(0), dn = 0, Jo = null, Xa = 0, Lu = 0, Lc = 0, es = null, jr = null, kd = 0, zu = 1 / 0, Xr = null, Uu = !1, Wl = null, tl = null, zc = !1, Ci = null, ts = 0, nl = 0, Au = null, ns = -1, sr = 0;
  function bn() {
    return st & 6 ? We() : ns !== -1 ? ns : ns = We();
  }
  function Ka(n) {
    return n.mode & 1 ? st & 2 && Kn !== 0 ? Kn & -Kn : oy.transition !== null ? (sr === 0 && (sr = Ds()), sr) : (n = Dt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ns(n.type)), n) : 1;
  }
  function mr(n, r, l, o) {
    if (50 < nl) throw nl = 0, Au = null, Error(_(185));
    Cl(n, l, o), (!(st & 2) || n !== Ln) && (n === Ln && (!(st & 2) && (Lu |= l), dn === 4 && Ma(n, Kn)), Hr(n, o), l === 1 && st === 0 && !(r.mode & 1) && (zu = We() + 500, bu && Pa()));
  }
  function Hr(n, r) {
    var l = n.callbackNode;
    Rf(n, r);
    var o = El(n, n === Ln ? Kn : 0);
    if (o === 0) l !== null && fr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && fr(l), r === 1) n.tag === 0 ? Qi(_d.bind(null, n)) : ec(_d.bind(null, n)), xu(function() {
        !(st & 6) && Pa();
      }), l = null;
      else {
        switch (Df(o)) {
          case 1:
            l = oi;
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
        l = eh(l, Uc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Uc(n, r) {
    if (ns = -1, sr = 0, st & 6) throw Error(_(327));
    var l = n.callbackNode;
    if (ju() && n.callbackNode !== l) return null;
    var o = El(n, n === Ln ? Kn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Ac(n, o);
    else {
      r = o;
      var c = st;
      st |= 2;
      var d = Iv();
      (Ln !== n || Kn !== r) && (Xr = null, zu = We() + 500, xi(n, r));
      do
        try {
          Wv();
          break;
        } catch (S) {
          Qv(n, S);
        }
      while (!0);
      id(), el.current = d, st = c, wn !== null ? r = 0 : (Ln = null, Kn = 0, r = dn);
    }
    if (r !== 0) {
      if (r === 2 && (c = wf(n), c !== 0 && (o = c, r = rs(n, c))), r === 1) throw l = Jo, xi(n, 0), Ma(n, o), Hr(n, We()), l;
      if (r === 6) Ma(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !dy(c) && (r = Ac(n, o), r === 2 && (d = wf(n), d !== 0 && (o = d, r = rs(n, d))), r === 1)) throw l = Jo, xi(n, 0), Ma(n, o), Hr(n, We()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(_(345));
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
            if (o = c, o = We() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * fy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = qs(Kl.bind(null, n, jr, Xr), o);
              break;
            }
            Kl(n, jr, Xr);
            break;
          case 5:
            Kl(n, jr, Xr);
            break;
          default:
            throw Error(_(329));
        }
      }
    }
    return Hr(n, We()), n.callbackNode === l ? Uc.bind(null, n) : null;
  }
  function rs(n, r) {
    var l = es;
    return n.current.memoizedState.isDehydrated && (xi(n, r).flags |= 256), n = Ac(n, r), n !== 2 && (r = jr, jr = l, r !== null && Gl(r)), n;
  }
  function Gl(n) {
    jr === null ? jr = n : jr.push.apply(jr, n);
  }
  function dy(n) {
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
    if (st & 6) throw Error(_(327));
    ju();
    var r = El(n, 0);
    if (!(r & 1)) return Hr(n, We()), null;
    var l = Ac(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = wf(n);
      o !== 0 && (r = o, l = rs(n, o));
    }
    if (l === 1) throw l = Jo, xi(n, 0), Ma(n, r), Hr(n, We()), l;
    if (l === 6) throw Error(_(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Kl(n, jr, Xr), Hr(n, We()), null;
  }
  function Od(n, r) {
    var l = st;
    st |= 1;
    try {
      return n(r);
    } finally {
      st = l, st === 0 && (zu = We() + 500, bu && Pa());
    }
  }
  function Xl(n) {
    Ci !== null && Ci.tag === 0 && !(st & 6) && ju();
    var r = st;
    st |= 1;
    var l = Xn.transition, o = Dt;
    try {
      if (Xn.transition = null, Dt = 1, n) return n();
    } finally {
      Dt = o, Xn.transition = l, st = r, !(st & 6) && Pa();
    }
  }
  function Nd() {
    Gr = Mu.current, Vt(Mu);
  }
  function xi(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, ed(l)), wn !== null) for (l = wn.return; l !== null; ) {
      var o = l;
      switch (nc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && wu();
          break;
        case 3:
          jl(), Vt(Nn), Vt(ln), Te();
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
    if (Ln = n, wn = n = rl(n.current, null), Kn = Gr = r, dn = 0, Jo = null, Lc = Lu = Xa = 0, jr = es = null, Ul !== null) {
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
  function Qv(n, r) {
    do {
      var l = wn;
      try {
        if (id(), qe.current = $l, oc) {
          for (var o = yt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          oc = !1;
        }
        if (Mt = 0, Vn = xn = yt = null, zo = !1, Hl = 0, Il.current = null, l === null || l.return === null) {
          dn = 1, Jo = r, wn = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = Kn, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var N = C, F = S, P = F.tag;
            if (!(F.mode & 1) && (P === 0 || P === 11 || P === 15)) {
              var j = F.alternate;
              j ? (F.updateQueue = j.updateQueue, F.memoizedState = j.memoizedState, F.lanes = j.lanes) : (F.updateQueue = null, F.memoizedState = null);
            }
            var ue = Mv(h);
            if (ue !== null) {
              ue.flags &= -257, Ji(ue, h, S, d, r), ue.mode & 1 && Sd(d, N, r), r = ue, C = N;
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
              C = Error(_(426));
            }
          } else if (Qt && S.mode & 1) {
            var pn = Mv(h);
            if (pn !== null) {
              !(pn.flags & 65536) && (pn.flags |= 256), Ji(pn, h, S, d, r), yi(Yl(C, S));
              break e;
            }
          }
          d = C = Yl(C, S), dn !== 4 && (dn = 2), es === null ? es = [d] : es.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var w = Nv(d, C, r);
                bv(d, w);
                break e;
              case 1:
                S = C;
                var T = d.type, k = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (tl === null || !tl.has(k)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var V = gd(d, S, r);
                  bv(d, V);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Xv(l);
      } catch (pe) {
        r = pe, wn === l && l !== null && (wn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Iv() {
    var n = el.current;
    return el.current = $l, n === null ? $l : n;
  }
  function Md() {
    (dn === 0 || dn === 3 || dn === 2) && (dn = 4), Ln === null || !(Xa & 268435455) && !(Lu & 268435455) || Ma(Ln, Kn);
  }
  function Ac(n, r) {
    var l = st;
    st |= 2;
    var o = Iv();
    (Ln !== n || Kn !== r) && (Xr = null, xi(n, r));
    do
      try {
        py();
        break;
      } catch (c) {
        Qv(n, c);
      }
    while (!0);
    if (id(), st = l, el.current = o, wn !== null) throw Error(_(261));
    return Ln = null, Kn = 0, dn;
  }
  function py() {
    for (; wn !== null; ) Gv(wn);
  }
  function Wv() {
    for (; wn !== null && !li(); ) Gv(wn);
  }
  function Gv(n) {
    var r = Jv(n.alternate, n, Gr);
    n.memoizedProps = n.pendingProps, r === null ? Xv(n) : wn = r, Il.current = null;
  }
  function Xv(n) {
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
      } else if (l = Fv(l, r, Gr), l !== null) {
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
      Xn.transition = null, Dt = 1, vy(n, r, l, o);
    } finally {
      Xn.transition = c, Dt = o;
    }
    return null;
  }
  function vy(n, r, l, o) {
    do
      ju();
    while (Ci !== null);
    if (st & 6) throw Error(_(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(_(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if ($m(n, d), n === Ln && (wn = Ln = null, Kn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || zc || (zc = !0, eh(uo, function() {
      return ju(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Xn.transition, Xn.transition = null;
      var h = Dt;
      Dt = 1;
      var S = st;
      st |= 4, Il.current = null, Bv(n, l), wd(l, n), gu(Ol), Tl = !!Ro, Ol = Ro = null, n.current = l, cy(l), ui(), st = S, Dt = h, Xn.transition = d;
    } else n.current = l;
    if (zc && (zc = !1, Ci = n, ts = c), d = n.pendingLanes, d === 0 && (tl = null), Pp(l.stateNode), Hr(n, We()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Uu) throw Uu = !1, n = Wl, Wl = null, n;
    return ts & 1 && n.tag !== 0 && ju(), d = n.pendingLanes, d & 1 ? n === Au ? nl++ : (nl = 0, Au = n) : nl = 0, Pa(), null;
  }
  function ju() {
    if (Ci !== null) {
      var n = Df(ts), r = Xn.transition, l = Dt;
      try {
        if (Xn.transition = null, Dt = 16 > n ? 16 : n, Ci === null) var o = !1;
        else {
          if (n = Ci, Ci = null, ts = 0, st & 6) throw Error(_(331));
          var c = st;
          for (st |= 4, ce = n.current; ce !== null; ) {
            var d = ce, h = d.child;
            if (ce.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var N = S[C];
                  for (ce = N; ce !== null; ) {
                    var F = ce;
                    switch (F.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xo(8, F, d);
                    }
                    var P = F.child;
                    if (P !== null) P.return = F, ce = P;
                    else for (; ce !== null; ) {
                      F = ce;
                      var j = F.sibling, ue = F.return;
                      if (Mc(F), F === N) {
                        ce = null;
                        break;
                      }
                      if (j !== null) {
                        j.return = ue, ce = j;
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
            var k = h.child;
            if (h.subtreeFlags & 2064 && k !== null) k.return = h, ce = k;
            else e: for (h = T; ce !== null; ) {
              if (S = ce, S.flags & 2048) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ko(9, S);
                }
              } catch (pe) {
                It(S, S.return, pe);
              }
              if (S === h) {
                ce = null;
                break e;
              }
              var V = S.sibling;
              if (V !== null) {
                V.return = S.return, ce = V;
                break e;
              }
              ce = S.return;
            }
          }
          if (st = c, Pa(), wa && typeof wa.onPostCommitFiberRoot == "function") try {
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
  function Kv(n, r, l) {
    r = Yl(l, r), r = Nv(n, r, 1), n = Ki(n, r, 1), r = bn(), n !== null && (Cl(n, 1, r), Hr(n, r));
  }
  function It(n, r, l) {
    if (n.tag === 3) Kv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Kv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (tl === null || !tl.has(o))) {
          n = Yl(l, n), n = gd(r, n, 1), r = Ki(r, n, 1), n = bn(), r !== null && (Cl(r, 1, n), Hr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function hy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = bn(), n.pingedLanes |= n.suspendedLanes & l, Ln === n && (Kn & l) === l && (dn === 4 || dn === 3 && (Kn & 130023424) === Kn && 500 > We() - kd ? xi(n, 0) : Lc |= l), Hr(n, r);
  }
  function qv(n, r) {
    r === 0 && (n.mode & 1 ? (r = ba, ba <<= 1, !(ba & 130023424) && (ba = 4194304)) : r = 1);
    var l = bn();
    n = Ir(n, r), n !== null && (Cl(n, r, l), Hr(n, l));
  }
  function my(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), qv(n, l);
  }
  function Zv(n, r) {
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
        throw Error(_(314));
    }
    o !== null && o.delete(r), qv(n, l);
  }
  var Jv;
  Jv = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Nn.current) Tn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Tn = !1, Io(n, r, l);
      Tn = !!(n.flags & 131072);
    }
    else Tn = !1, Qt && r.flags & 1048576 && xv(r, mi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        da(n, r), n = r.pendingProps;
        var c = Or(r, ln.current);
        qt(r, l), c = qi(null, r, o, n, c, l);
        var d = _a();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, En(o) ? (d = !0, Fn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, cd(r), c.updater = wc, r.stateNode = c, c._reactInternals = r, Bo(r, o, n, l), r = Yo(null, r, o, !0, d, l)) : (r.tag = 0, Qt && d && tc(r), Gn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (da(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = gy(o), n = Oa(o, n), c) {
            case 0:
              r = Lv(null, r, o, n, l);
              break e;
            case 1:
              r = zv(null, r, o, n, l);
              break e;
            case 11:
              r = Ur(null, r, o, n, l);
              break e;
            case 14:
              r = Ql(null, r, o, Oa(o.type, n), l);
              break e;
          }
          throw Error(_(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Oa(o, c), Lv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Oa(o, c), zv(n, r, o, c, l);
      case 3:
        e: {
          if (Ou(r), n === null) throw Error(_(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, wv(n, r), _o(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Yl(Error(_(423)), r), r = Uv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Yl(Error(_(424)), r), r = Uv(n, r, o, l, c);
            break e;
          } else for (Mr = Fa(r.stateNode.containerInfo.firstChild), Nr = r, Qt = !0, ca = null, l = te(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Xi(), o === c) {
              r = pa(n, r, l);
              break e;
            }
            Gn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Dv(r), n === null && rd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Ks(o, c) ? h = null : d !== null && Ks(o, d) && (r.flags |= 32), Ed(n, r), Gn(n, r, h, l), r.child;
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
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, Ee(Qr, o._currentValue), o._currentValue = h, d !== null) if (Da(d.value, h)) {
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
                    C = gi(-1, l & -l), C.tag = 2;
                    var N = d.updateQueue;
                    if (N !== null) {
                      N = N.shared;
                      var F = N.pending;
                      F === null ? C.next = C : (C.next = F.next, F.next = C), N.pending = C;
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
              if (h = d.return, h === null) throw Error(_(341));
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
        return o = r.type, c = Oa(o, r.pendingProps), c = Oa(o.type, c), Ql(n, r, o, c, l);
      case 15:
        return Ye(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Oa(o, c), da(n, r), r.tag = 1, En(o) ? (n = !0, Fn(r)) : n = !1, qt(r, l), bc(r, o, c), Bo(r, o, c, l), Yo(null, r, o, !0, n, l);
      case 19:
        return Ia(n, r, l);
      case 22:
        return $o(n, r, l);
    }
    throw Error(_(156, r.tag));
  };
  function eh(n, r) {
    return Xt(n, r);
  }
  function yy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ha(n, r, l, o) {
    return new yy(n, r, l, o);
  }
  function Ld(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function gy(n) {
    if (typeof n == "function") return Ld(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Y) return 11;
      if (n === Xe) return 14;
    }
    return 2;
  }
  function rl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function as(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function") Ld(n) && (h = 1);
    else if (typeof n == "string") h = 5;
    else e: switch (n) {
      case Pe:
        return Ti(l.children, c, d, r);
      case en:
        h = 8, c |= 8;
        break;
      case Ut:
        return n = ha(12, l, r, c | 2), n.elementType = Ut, n.lanes = d, n;
      case I:
        return n = ha(13, l, r, c), n.elementType = I, n.lanes = d, n;
      case me:
        return n = ha(19, l, r, c), n.elementType = me, n.lanes = d, n;
      case Ht:
        return al(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case tn:
            h = 10;
            break e;
          case Wt:
            h = 9;
            break e;
          case Y:
            h = 11;
            break e;
          case Xe:
            h = 14;
            break e;
          case pt:
            h = 16, o = null;
            break e;
        }
        throw Error(_(130, n == null ? n : typeof n, ""));
    }
    return r = ha(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ti(n, r, l, o) {
    return n = ha(7, n, o, r), n.lanes = l, n;
  }
  function al(n, r, l, o) {
    return n = ha(22, n, o, r), n.elementType = Ht, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function zd(n, r, l) {
    return n = ha(6, n, null, r), n.lanes = l, n;
  }
  function jc(n, r, l) {
    return r = ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function th(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = bf(0), this.expirationTimes = bf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Hc(n, r, l, o, c, d, h, S, C) {
    return n = new th(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, cd(d), n;
  }
  function Sy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Tt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Ud(n) {
    if (!n) return lr;
    n = n._reactInternals;
    e: {
      if (Ie(n) !== n || n.tag !== 1) throw Error(_(170));
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
      throw Error(_(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (En(l)) return Do(n, l, r);
    }
    return r;
  }
  function nh(n, r, l, o, c, d, h, S, C) {
    return n = Hc(l, o, !0, n, c, d, h, S, C), n.context = Ud(null), l = n.current, o = bn(), c = Ka(l), d = gi(o, c), d.callback = r ?? null, Ki(l, d, c), n.current.lanes = c, Cl(n, c, o), Hr(n, o), n;
  }
  function Fc(n, r, l, o) {
    var c = r.current, d = bn(), h = Ka(c);
    return l = Ud(l), r.context === null ? r.context = l : r.pendingContext = l, r = gi(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ki(c, r, h), n !== null && (mr(n, c, h, d), ic(n, c, h)), h;
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
  function rh() {
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
    if (r === null) throw Error(_(409));
    Fc(n, r, null, null);
  }, Pc.prototype.unmount = jd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Xl(function() {
        Fc(null, n, null, null);
      }), r[vi] = null;
    }
  };
  function Pc(n) {
    this._internalRoot = n;
  }
  Pc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = $e();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Qn.length && r !== 0 && r < Qn[l].priority; l++) ;
      Qn.splice(l, 0, n), l === 0 && Mf(n);
    }
  };
  function Hd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function $c(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ah() {
  }
  function Ey(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var N = Vc(h);
          d.call(N);
        };
      }
      var h = nh(r, o, n, 0, null, !1, !1, "", ah);
      return n._reactRootContainer = h, n[vi] = h.current, Eu(n.nodeType === 8 ? n.parentNode : n), Xl(), h;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var N = Vc(C);
        S.call(N);
      };
    }
    var C = Hc(n, 0, !1, null, null, !1, !1, "", ah);
    return n._reactRootContainer = C, n[vi] = C.current, Eu(n.nodeType === 8 ? n.parentNode : n), Xl(function() {
      Fc(r, C, l, o);
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
      Fc(r, h, n, c);
    } else h = Ey(l, r, n, c, o);
    return Vc(h);
  }
  kt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Sl(r.pendingLanes);
          l !== 0 && (ks(r, l | 1), Hr(r, We()), !(st & 6) && (zu = We() + 500, Pa()));
        }
        break;
      case 13:
        Xl(function() {
          var o = Ir(n, 1);
          if (o !== null) {
            var c = bn();
            mr(o, n, 1, c);
          }
        }), Bc(n, 1);
    }
  }, kf = function(n) {
    if (n.tag === 13) {
      var r = Ir(n, 134217728);
      if (r !== null) {
        var l = bn();
        mr(r, n, 134217728, l);
      }
      Bc(n, 134217728);
    }
  }, _f = function(n) {
    if (n.tag === 13) {
      var r = Ka(n), l = Ir(n, r);
      if (l !== null) {
        var o = bn();
        mr(l, n, r, o);
      }
      Bc(n, r);
    }
  }, $e = function() {
    return Dt;
  }, Of = function(n, r) {
    var l = Dt;
    try {
      return Dt = n, r();
    } finally {
      Dt = l;
    }
  }, Ft = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ta(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Kt(o);
              if (!c) throw Error(_(90));
              cr(o), Ta(o, c);
            }
          }
        }
        break;
      case "textarea":
        jn(n, l);
        break;
      case "select":
        r = l.value, r != null && Ct(n, !!l.multiple, r, !1);
    }
  }, ao = Od, cu = Xl;
  var Cy = { usingClientEntryPoint: !1, Events: [xe, ka, Kt, bs, ro, Od] }, ls = { findFiberByHostInstance: Nl, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ih = { bundleType: ls.bundleType, version: ls.version, rendererPackageName: ls.rendererPackageName, rendererConfig: ls.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Je.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = On(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ls.findFiberByHostInstance || rh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!il.isDisabled && il.supportsFiber) try {
      oo = il.inject(ih), wa = il;
    } catch {
    }
  }
  return Ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cy, Ca.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Hd(r)) throw Error(_(200));
    return Sy(n, r, null, l);
  }, Ca.createRoot = function(n, r) {
    if (!Hd(n)) throw Error(_(299));
    var l = !1, o = "", c = ql;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Hc(n, 1, !1, null, null, l, !1, o, c), n[vi] = r.current, Eu(n.nodeType === 8 ? n.parentNode : n), new jd(r);
  }, Ca.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(_(188)) : (n = Object.keys(n).join(","), Error(_(268, n)));
    return n = On(r), n = n === null ? null : n.stateNode, n;
  }, Ca.flushSync = function(n) {
    return Xl(n);
  }, Ca.hydrate = function(n, r, l) {
    if (!$c(r)) throw Error(_(200));
    return is(null, n, r, !0, l);
  }, Ca.hydrateRoot = function(n, r, l) {
    if (!Hd(n)) throw Error(_(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = ql;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = nh(r, null, n, 1, l ?? null, c, !1, d, h), n[vi] = r.current, Eu(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Pc(r);
  }, Ca.render = function(n, r, l) {
    if (!$c(r)) throw Error(_(200));
    return is(null, n, r, !1, l);
  }, Ca.unmountComponentAtNode = function(n) {
    if (!$c(n)) throw Error(_(40));
    return n._reactRootContainer ? (Xl(function() {
      is(null, null, n, !1, function() {
        n._reactRootContainer = null, n[vi] = null;
      });
    }), !0) : !1;
  }, Ca.unstable_batchedUpdates = Od, Ca.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!$c(l)) throw Error(_(200));
    if (n == null || n._reactInternals === void 0) throw Error(_(38));
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
var rT;
function ek() {
  return rT || (rT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var B = Cf, q = iT(), _ = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, dt = !1;
    function _e(e) {
      dt = e;
    }
    function Qe(e) {
      if (!dt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Fe("warn", e, a);
      }
    }
    function g(e) {
      if (!dt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Fe("error", e, a);
      }
    }
    function Fe(e, t, a) {
      {
        var i = _.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var J = 0, Z = 1, Oe = 2, G = 3, fe = 4, X = 5, re = 6, Ce = 7, Ne = 8, tt = 9, nt = 10, De = 11, Je = 12, Ae = 13, Tt = 14, Pe = 15, en = 16, Ut = 17, tn = 18, Wt = 19, Y = 21, I = 22, me = 23, Xe = 24, pt = 25, Ht = !0, W = !1, ge = !1, K = !1, Ze = !1, rt = !0, Yn = !0, un = !0, ta = !0, hn = /* @__PURE__ */ new Set(), mn = {}, kn = {};
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
    function Aa(e, t) {
      if (bt(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Gt(e)), on(e);
    }
    function Ue(e, t) {
      if (bt(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Gt(e)), on(e);
    }
    function At(e) {
      if (bt(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Gt(e)), on(e);
    }
    function Ct(e) {
      if (bt(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Gt(e)), on(e);
    }
    var _t = 0, Ot = 1, jn = 2, Nt = 3, nn = 4, rn = 5, Hn = 6, gn = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Q = gn + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ie = new RegExp("^[" + gn + "][" + Q + "]*$"), Ve = {}, Ge = {};
    function lt(e) {
      return cr.call(Ge, e) ? !0 : cr.call(Ve, e) ? !1 : ie.test(e) ? (Ge[e] = !0, !0) : (Ve[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function ht(e, t, a) {
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
          case nn:
            return t === !1;
          case rn:
            return isNaN(t);
          case Hn:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function xt(e) {
      return Ft.hasOwnProperty(e) ? Ft[e] : null;
    }
    function ut(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === jn || t === Nt || t === nn, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ft = {}, ja = [
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
    ja.forEach(function(e) {
      Ft[e] = new ut(
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
      Ft[t] = new ut(
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
      Ft[e] = new ut(
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
      Ft[e] = new ut(
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
      Ft[e] = new ut(
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
      Ft[e] = new ut(
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
      Ft[e] = new ut(
        e,
        nn,
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
      Ft[e] = new ut(
        e,
        Hn,
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
      Ft[e] = new ut(
        e,
        rn,
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
      Ft[t] = new ut(
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
      Ft[t] = new ut(
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
      Ft[t] = new ut(
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
      Ft[e] = new ut(
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
    Ft[bs] = new ut(
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
      Ft[e] = new ut(
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
        if (i.type === nn) {
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
    function ai(e, t, a, i) {
      var u = xt(t);
      if (!ht(t, u, i)) {
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
          R === Nt || R === nn && a === !0 ? x = "" : (An(a, m), x = "" + a, u.sanitizeURL && cu(x.toString())), y ? e.setAttributeNS(y, m, x) : e.setAttribute(m, x);
        }
      }
    }
    var Ra = Symbol.for("react.element"), br = Symbol.for("react.portal"), Ui = Symbol.for("react.fragment"), ii = Symbol.for("react.strict_mode"), Ai = Symbol.for("react.profiler"), ji = Symbol.for("react.provider"), E = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), ke = Symbol.for("react.suspense_list"), Ie = Symbol.for("react.memo"), Be = Symbol.for("react.lazy"), at = Symbol.for("react.scope"), et = Symbol.for("react.debug_trace_mode"), On = Symbol.for("react.offscreen"), Yt = Symbol.for("react.legacy_hidden"), Xt = Symbol.for("react.cache"), fr = Symbol.for("react.tracing_marker"), li = Symbol.iterator, ui = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = li && e[li] || e[ui];
      return typeof t == "function" ? t : null;
    }
    var Ke = Object.assign, oi = 0, lo, uo, Bp, xf, oo, wa, Pp;
    function ra() {
    }
    ra.__reactDisabledLog = !0;
    function Vm() {
      {
        if (oi === 0) {
          lo = console.log, uo = console.info, Bp = console.warn, xf = console.error, oo = console.group, wa = console.groupCollapsed, Pp = console.groupEnd;
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
        oi++;
      }
    }
    function Bm() {
      {
        if (oi--, oi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ke({}, e, {
              value: lo
            }),
            info: Ke({}, e, {
              value: uo
            }),
            warn: Ke({}, e, {
              value: Bp
            }),
            error: Ke({}, e, {
              value: xf
            }),
            group: Ke({}, e, {
              value: oo
            }),
            groupCollapsed: Ke({}, e, {
              value: wa
            }),
            groupEnd: Ke({}, e, {
              value: Pp
            })
          });
        }
        oi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Tf = _.ReactCurrentDispatcher, du;
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
      var Pm = typeof WeakMap == "function" ? WeakMap : Map;
      El = new Pm();
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
      s = Tf.current, Tf.current = null, Vm();
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
        Sl = !1, Tf.current = s, Bm(), Error.prepareStackTrace = u;
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
        case ae:
          return ba("Suspense");
        case ke:
          return ba("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case H:
            return Ds(e.render);
          case Ie:
            return Cl(e.type, t, a);
          case Be: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Cl(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function $m(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case X:
          return ba(e.type);
        case en:
          return ba("Lazy");
        case Ae:
          return ba("Suspense");
        case Wt:
          return ba("SuspenseList");
        case J:
        case Oe:
        case Pe:
          return Ds(e.type);
        case De:
          return Ds(e.type.render);
        case Z:
          return wf(e.type);
        default:
          return "";
      }
    }
    function ks(e) {
      try {
        var t = "", a = e;
        do
          t += $m(a), a = a.return;
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
        case Ui:
          return "Fragment";
        case br:
          return "Portal";
        case Ai:
          return "Profiler";
        case ii:
          return "StrictMode";
        case ae:
          return "Suspense";
        case ke:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var t = e;
            return Df(t) + ".Consumer";
          case ji:
            var a = e;
            return Df(a._context) + ".Provider";
          case H:
            return Dt(e, e.render, "ForwardRef");
          case Ie:
            var i = e.displayName || null;
            return i !== null ? i : kt(e.type) || "Memo";
          case Be: {
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
    function $e(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Xe:
          return "Cache";
        case tt:
          var i = a;
          return _f(i) + ".Consumer";
        case nt:
          var u = a;
          return _f(u._context) + ".Provider";
        case tn:
          return "DehydratedFragment";
        case De:
          return kf(a, a.render, "ForwardRef");
        case Ce:
          return "Fragment";
        case X:
          return a;
        case fe:
          return "Portal";
        case G:
          return "Root";
        case re:
          return "Text";
        case en:
          return kt(a);
        case Ne:
          return a === ii ? "StrictMode" : "Mode";
        case I:
          return "Offscreen";
        case Je:
          return "Profiler";
        case Y:
          return "Scope";
        case Ae:
          return "Suspense";
        case Wt:
          return "SuspenseList";
        case pt:
          return "TracingMarker";
        case Z:
        case J:
        case Ut:
        case Oe:
        case Tt:
        case Pe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Of = _.ReactDebugCurrentFrame, dr = null, Hi = !1;
    function aa() {
      {
        if (dr === null)
          return null;
        var e = dr._debugOwner;
        if (e !== null && typeof e < "u")
          return $e(e);
      }
      return null;
    }
    function Fi() {
      return dr === null ? "" : ks(dr);
    }
    function an() {
      Of.getCurrentStack = null, dr = null, Hi = !1;
    }
    function Pt(e) {
      Of.getCurrentStack = e === null ? null : Fi, dr = e, Hi = !1;
    }
    function so() {
      return dr;
    }
    function Qn(e) {
      Hi = e;
    }
    function ia(e) {
      return "" + e;
    }
    function si(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ct(e), e;
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
    function $p(e) {
      e._valueTracker = null;
    }
    function Ym(e) {
      var t = "";
      return e && (Mf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function po(e) {
      var t = Mf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Ct(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Ct(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Ct(p), i = "" + p;
          },
          stopTracking: function() {
            $p(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Vi(e) {
      fo(e) || (e._valueTracker = po(e));
    }
    function xl(e) {
      if (!e)
        return !1;
      var t = fo(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ym(e);
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
    var Yp = !1, Qp = !1, _s = !1, vo = !1;
    function Os(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ns(e, t) {
      var a = e, i = t.checked, u = Ke({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ci(e, t) {
      Nf("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Qp && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", aa() || "A component", t.type), Qp = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Yp && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", aa() || "A component", t.type), Yp = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: si(t.value != null ? t.value : i),
        controlled: Os(t)
      };
    }
    function Ms(e, t) {
      var a = e, i = t.checked;
      i != null && ai(a, "checked", i, !1);
    }
    function pu(e, t) {
      var a = e;
      {
        var i = Os(t);
        !a._wrapperState.controlled && i && !vo && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vo = !0), a._wrapperState.controlled && !i && !_s && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), _s = !0);
      }
      Ms(e, t);
      var u = si(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = ia(u)) : a.value !== ia(u) && (a.value = ia(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Us(a, t.type, u) : t.hasOwnProperty("defaultValue") && Us(a, t.type, si(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
            var p = Th(f);
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
      t.value == null && (typeof t.children == "object" && t.children !== null ? B.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Rl || (Rl = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (As || (As = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Dr && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Dr = !0);
    }
    function Qm(e, t) {
      t.value != null && e.setAttribute("value", ia(si(t.value)));
    }
    var zf = Array.isArray;
    function In(e) {
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
    function Im(e) {
      {
        Nf("select", e);
        for (var t = 0; t < Uf.length; t++) {
          var a = Uf[t];
          if (e[a] != null) {
            var i = In(e[a]);
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
        for (var y = ia(si(a)), R = null, x = 0; x < u.length; x++) {
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
      return Ke({}, t, {
        value: void 0
      });
    }
    function js(e, t) {
      var a = e;
      Im(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !wl && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), wl = !0);
    }
    function Wm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? hu(a, !!t.multiple, i, !1) : t.defaultValue != null && hu(a, !!t.multiple, t.defaultValue, !0);
    }
    function Gm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? hu(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? hu(a, !!t.multiple, t.defaultValue, !0) : hu(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xm(e, t) {
      var a = e, i = t.value;
      i != null && hu(a, !!t.multiple, i, !1);
    }
    var Ip = !1;
    function jf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ke({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: ia(a._wrapperState.initialValue)
      });
      return i;
    }
    function Hf(e, t) {
      var a = e;
      Nf("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Ip && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", aa() || "A component"), Ip = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (In(u)) {
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
        initialValue: si(i)
      };
    }
    function Wp(e, t) {
      var a = e, i = si(t.value), u = si(t.defaultValue);
      if (i != null) {
        var s = ia(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = ia(u));
    }
    function Gp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Km(e, t) {
      Wp(e, t);
    }
    var fi = "http://www.w3.org/1999/xhtml", Ff = "http://www.w3.org/1998/Math/MathML", Vf = "http://www.w3.org/2000/svg";
    function Bf(e) {
      switch (e) {
        case "svg":
          return Vf;
        case "math":
          return Ff;
        default:
          return fi;
      }
    }
    function Pf(e, t) {
      return e == null || e === fi ? Bf(t) : e === Vf && t === "foreignObject" ? fi : e;
    }
    var Xp = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Hs, Kp = Xp(function(e, t) {
      if (e.namespaceURI === Vf && !("innerHTML" in e)) {
        Hs = Hs || document.createElement("div"), Hs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Hs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), kr = 1, di = 3, Sn = 8, pi = 9, $f = 11, mu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === di) {
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
    function qp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Zp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(yo).forEach(function(e) {
      Zp.forEach(function(t) {
        yo[qp(t, e)] = yo[e];
      });
    });
    function Fs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(yo.hasOwnProperty(e) && yo[e]) ? t + "px" : (Ue(t, e), ("" + t).trim());
    }
    var Jp = /([A-Z])/g, ev = /^ms-/;
    function yu(e) {
      return e.replace(Jp, "-$1").toLowerCase().replace(ev, "-ms-");
    }
    var tv = function() {
    };
    {
      var qm = /^(?:webkit|moz|o)[A-Z]/, Zm = /^-ms-/, nv = /-(.)/g, Yf = /;\s*$/, Ha = {}, bl = {}, rv = !1, go = !1, Jm = function(e) {
        return e.replace(nv, function(t, a) {
          return a.toUpperCase();
        });
      }, av = function(e) {
        Ha.hasOwnProperty(e) && Ha[e] || (Ha[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Jm(e.replace(Zm, "ms-"))
        ));
      }, Qf = function(e) {
        Ha.hasOwnProperty(e) && Ha[e] || (Ha[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, If = function(e, t) {
        bl.hasOwnProperty(t) && bl[t] || (bl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Yf, "")));
      }, iv = function(e, t) {
        rv || (rv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, lv = function(e, t) {
        go || (go = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      tv = function(e, t) {
        e.indexOf("-") > -1 ? av(e) : qm.test(e) ? Qf(e) : Yf.test(t) && If(e, t), typeof t == "number" && (isNaN(t) ? iv(e, t) : isFinite(t) || lv(e, t));
      };
    }
    var uv = tv;
    function ey(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : yu(i)) + ":", t += Fs(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function ov(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || uv(i, t[i]);
          var s = Fs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ty(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function sv(e) {
      var t = {};
      for (var a in e)
        for (var i = mo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ny(e, t) {
      {
        if (!t)
          return;
        var a = sv(e), i = sv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ty(e[f]) ? "Removing" : "Updating", f, p);
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
    }, So = Ke({
      menuitem: !0
    }, Da), cv = "__html";
    function Vs(e, t) {
      if (t) {
        if (So[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(cv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Bi(e, t) {
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
    }, gu = {}, ry = new RegExp("^(aria)-[" + Q + "]*$"), Su = new RegExp("^(aria)[A-Z][" + Q + "]*$");
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
        if (ry.test(t)) {
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
      Bi(e, t) || Co(e, t);
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
      var Wn = {}, Kf = /^on./, $s = /^on[^A-Z]/, fv = new RegExp("^(aria)-[" + Q + "]*$"), dv = new RegExp("^(aria)[A-Z][" + Q + "]*$");
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
        if (fv.test(t) || dv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wn[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wn[t] = !0, !0;
        var v = xt(t), m = v !== null && v.type === _t;
        if (Eo.hasOwnProperty(u)) {
          var y = Eo[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), Wn[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wn[t] = !0, !0;
        return typeof a == "boolean" && Bt(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : m ? !0 : Bt(t, a, v, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Nt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var pv = function(e, t, a) {
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
    function vv(e, t, a) {
      Bi(e, t) || pv(e, t, a);
    }
    var qf = 1, Ys = 2, la = 4, Zf = qf | Ys | la, kl = null;
    function ay(e) {
      kl !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), kl = e;
    }
    function iy() {
      kl === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), kl = null;
    }
    function xo(e) {
      return e === kl;
    }
    function Jf(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === di ? t.parentNode : t;
    }
    var Qs = null, _l = null, Rt = null;
    function Is(e) {
      var t = Vu(e);
      if (t) {
        if (typeof Qs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Th(a);
          Qs(t.stateNode, t.type, i);
        }
      }
    }
    function Ws(e) {
      Qs = e;
    }
    function Eu(e) {
      _l ? Rt ? Rt.push(e) : Rt = [e] : _l = e;
    }
    function hv() {
      return _l !== null || Rt !== null;
    }
    function Gs() {
      if (_l) {
        var e = _l, t = Rt;
        if (_l = null, Rt = null, Is(e), t)
          for (var a = 0; a < t.length; a++)
            Is(t[a]);
      }
    }
    var Cu = function(e, t) {
      return e(t);
    }, To = function() {
    }, Pi = !1;
    function mv() {
      var e = hv();
      e && (To(), Gs());
    }
    function yv(e, t, a) {
      if (Pi)
        return e(t, a);
      Pi = !0;
      try {
        return Cu(e, t, a);
      } finally {
        Pi = !1, mv();
      }
    }
    function ly(e, t, a) {
      Cu = e, To = a;
    }
    function gv(e) {
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
          return !!(a.disabled && gv(t));
        default:
          return !1;
      }
    }
    function $i(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Th(a);
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
        var ne = Array.prototype.slice.call(arguments, 3);
        function Re() {
          R = !0, L(), a.apply(i, ne), x = !1;
        }
        var Se, ft = !1, it = !1;
        function b(D) {
          if (Se = D.error, ft = !0, Se === null && D.colno === 0 && D.lineno === 0 && (it = !0), D.defaultPrevented && Se != null && typeof Se == "object")
            try {
              Se._suppressLogging = !0;
            } catch {
            }
        }
        var z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", b), ed.addEventListener(z, Re, !1), y.initEvent(z, !1, !1), ed.dispatchEvent(y), M && Object.defineProperty(window, "event", M), R && x && (ft ? it && (Se = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Se = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Se)), window.removeEventListener("error", b), !R)
          return L(), Ks.apply(this, arguments);
      };
    }
    var Sv = qs, xu = !1, Zs = null, Tu = !1, Fa = null, Ev = {
      onError: function(e) {
        xu = !0, Zs = e;
      }
    };
    function Yi(e, t, a, i, u, s, f, p, v) {
      xu = !1, Zs = null, Sv.apply(Ev, arguments);
    }
    function Va(e, t, a, i, u, s, f, p, v) {
      if (Yi.apply(this, arguments), xu) {
        var m = bo();
        Tu || (Tu = !0, Fa = m);
      }
    }
    function wo() {
      if (Tu) {
        var e = Fa;
        throw Tu = !1, Fa = null, e;
      }
    }
    function vi() {
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
    function uy(e) {
      return e._reactInternals !== void 0;
    }
    function Nl(e, t) {
      e._reactInternals = t;
    }
    var xe = (
      /*                      */
      0
    ), ka = (
      /*                */
      1
    ), Kt = (
      /*                    */
      2
    ), ot = (
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
    ), Ee = (
      /*                   */
      128
    ), lr = (
      /*            */
      256
    ), ln = (
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
    ), Cv = (
      /*               */
      32767
    ), Do = (
      /*                   */
      32768
    ), Fn = (
      /*                */
      65536
    ), Js = (
      /* */
      131072
    ), Ba = (
      /*                       */
      1048576
    ), bu = (
      /*                    */
      2097152
    ), hi = (
      /*                 */
      4194304
    ), ec = (
      /*                */
      8388608
    ), Qi = (
      /*               */
      16777216
    ), Pa = (
      /*              */
      33554432
    ), Ii = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ot | Nn | 0
    ), Wi = Kt | ot | ua | oa | ln | Or | En, Gi = ot | Vt | ln | En, mi = _r | ua, Cn = hi | ec | bu, sa = _.ReactCurrentOwner;
    function Yr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Kt | Or)) !== xe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === G ? a : null;
    }
    function $a(e) {
      if (e.tag === Ae) {
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
    function Ya(e) {
      return e.tag === G ? e.stateNode.containerInfo : null;
    }
    function Ml(e) {
      return Yr(e) === e;
    }
    function xv(e) {
      {
        var t = sa.current;
        if (t !== null && t.tag === Z) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", $e(a) || "A component"), i._warnedAboutRefsInRender = !0;
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
      if (i.tag !== G)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Nr(e) {
      var t = nc(e);
      return t !== null ? Mr(t) : null;
    }
    function Mr(e) {
      if (e.tag === X || e.tag === re)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Mr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Qt(e) {
      var t = nc(e);
      return t !== null ? ca(t) : null;
    }
    function ca(e) {
      if (e.tag === X || e.tag === re)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== fe) {
          var a = ca(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var td = q.unstable_scheduleCallback, Tv = q.unstable_cancelCallback, nd = q.unstable_shouldYield, rd = q.unstable_requestPaint, Mn = q.unstable_now, rc = q.unstable_getCurrentPriorityLevel, ko = q.unstable_ImmediatePriority, Xi = q.unstable_UserBlockingPriority, yi = q.unstable_NormalPriority, oy = q.unstable_LowPriority, Ll = q.unstable_IdlePriority, ac = q.unstable_yieldValue, Rv = q.unstable_setDisableYieldValue, zl = null, sn = null, te = null, Qr = !1, Lr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Du(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Yn && (e = Ke({}, e, {
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
          Qr || (Qr = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function id(e, t) {
      if (sn && typeof sn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ee) === Ee;
          if (un) {
            var i;
            switch (t) {
              case pr:
                i = ko;
                break;
              case Ia:
                i = Xi;
                break;
              case da:
                i = yi;
                break;
              case pa:
                i = Ll;
                break;
              default:
                i = yi;
                break;
            }
            sn.onCommitFiberRoot(zl, e, i, a);
          }
        } catch (u) {
          Qr || (Qr = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function ld(e) {
      if (sn && typeof sn.onPostCommitFiberRoot == "function")
        try {
          sn.onPostCommitFiberRoot(zl, e);
        } catch (t) {
          Qr || (Qr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function ud(e) {
      if (sn && typeof sn.onCommitFiberUnmount == "function")
        try {
          sn.onCommitFiberUnmount(zl, e);
        } catch (t) {
          Qr || (Qr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function qt(e) {
      if (typeof ac == "function" && (Rv(e), _e(e)), sn && typeof sn.setStrictMode == "function")
        try {
          sn.setStrictMode(zl, e);
        } catch (t) {
          Qr || (Qr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function fa(e) {
      te = e;
    }
    function Ul() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Hl; a++) {
          var i = kv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function od(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function sd() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function Ir(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function Wr() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function cd(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function wv() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function gi(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ki() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function ic(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function bv() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function _o(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function fd() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function Oo(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function Qa(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function No(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function Mo() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function Al(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function dd() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function jl(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function Dv() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function lc() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function Zt(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function uc(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function Lo(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var Te = (
      /*                         */
      0
    ), qe = (
      /*                 */
      1
    ), mt = (
      /*                    */
      2
    ), Mt = (
      /*               */
      8
    ), yt = (
      /*              */
      16
    ), xn = Math.clz32 ? Math.clz32 : zo, Vn = Math.log, oc = Math.LN2;
    function zo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Vn(t) / oc | 0) | 0;
    }
    var Hl = 31, A = (
      /*                        */
      0
    ), vt = (
      /*                          */
      0
    ), Me = (
      /*                        */
      1
    ), qi = (
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
    ), Si = (
      /*                */
      32
    ), Zi = (
      /*                       */
      4194240
    ), Fl = (
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
    ), pd = Bl, Ho = (
      /*          */
      134217728
    ), vd = (
      /*                          */
      268435455
    ), Fo = (
      /*               */
      268435456
    ), Pl = (
      /*                        */
      536870912
    ), zr = (
      /*                   */
      1073741824
    );
    function kv(e) {
      {
        if (e & Me)
          return "Sync";
        if (e & qi)
          return "InputContinuousHydration";
        if (e & _a)
          return "InputContinuous";
        if (e & ur)
          return "DefaultHydration";
        if (e & cn)
          return "Default";
        if (e & Si)
          return "TransitionHydration";
        if (e & Zi)
          return "Transition";
        if (e & Ao)
          return "Retry";
        if (e & Ho)
          return "SelectiveHydration";
        if (e & Fo)
          return "IdleHydration";
        if (e & Pl)
          return "Idle";
        if (e & zr)
          return "Offscreen";
      }
    }
    var jt = -1, $l = Fl, Tc = Bl;
    function Vo(e) {
      switch (Ji(e)) {
        case Me:
          return Me;
        case qi:
          return qi;
        case _a:
          return _a;
        case ur:
          return ur;
        case cn:
          return cn;
        case Si:
          return Si;
        case Fl:
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
          return e & Zi;
        case Bl:
        case Ec:
        case jo:
        case Cc:
        case xc:
          return e & Ao;
        case Ho:
          return Ho;
        case Fo:
          return Fo;
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
        var y = Ji(i), R = Ji(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === cn && (R & Zi) !== A
        )
          return t;
      }
      (i & _a) !== A && (i |= a & cn);
      var x = e.entangledLanes;
      if (x !== A)
        for (var O = e.entanglements, M = i & x; M > 0; ) {
          var L = Tn(M), ne = 1 << L;
          i |= O[L], M &= ~ne;
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
        case Me:
        case qi:
        case _a:
          return t + 250;
        case ur:
        case cn:
        case Si:
        case Fl:
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
        case Ho:
        case Fo:
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
    function _v(e) {
      return Vo(e.pendingLanes);
    }
    function bc(e) {
      var t = e.pendingLanes & ~zr;
      return t !== A ? t : t & zr ? zr : A;
    }
    function Ov(e) {
      return (e & Me) !== A;
    }
    function Bo(e) {
      return (e & vd) !== A;
    }
    function Yl(e) {
      return (e & Ao) === e;
    }
    function md(e) {
      var t = Me | _a | cn;
      return (e & t) === A;
    }
    function yd(e) {
      return (e & Zi) === e;
    }
    function Dc(e, t) {
      var a = qi | _a | ur | cn;
      return (t & a) !== A;
    }
    function Nv(e, t) {
      return (t & e.expiredLanes) !== A;
    }
    function gd(e) {
      return (e & Zi) !== A;
    }
    function Sd() {
      var e = $l;
      return $l <<= 1, ($l & Zi) === A && ($l = Fl), e;
    }
    function Mv() {
      var e = Tc;
      return Tc <<= 1, (Tc & Ao) === A && (Tc = Bl), e;
    }
    function Ji(e) {
      return e & -e;
    }
    function Po(e) {
      return Ji(e);
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
    function Ql(e, t) {
      return (e & t) === t;
    }
    function Ye(e, t) {
      return e | t;
    }
    function $o(e, t) {
      return e & ~t;
    }
    function Ed(e, t) {
      return e & t;
    }
    function Lv(e) {
      return e;
    }
    function zv(e, t) {
      return e !== vt && e < t ? e : t;
    }
    function Yo(e) {
      for (var t = [], a = 0; a < Hl; a++)
        t.push(e);
      return t;
    }
    function Ou(e, t, a) {
      e.pendingLanes |= t, t !== Pl && (e.suspendedLanes = A, e.pingedLanes = A);
      var i = e.eventTimes, u = Gn(t);
      i[u] = a;
    }
    function Uv(e, t) {
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
      var a = Ji(t), i;
      switch (a) {
        case _a:
          i = qi;
          break;
        case cn:
          i = ur;
          break;
        case Fl:
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
          i = Si;
          break;
        case Pl:
          i = Fo;
          break;
        default:
          i = vt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== vt ? vt : i;
    }
    function Qo(e, t, a) {
      if (Lr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Gn(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Av(e, t) {
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
    var pr = Me, Ia = _a, da = cn, pa = Pl, Io = vt;
    function va() {
      return Io;
    }
    function Rn(e) {
      Io = e;
    }
    function jv(e, t) {
      var a = Io;
      try {
        return Io = e, t();
      } finally {
        Io = a;
      }
    }
    function Hv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Wo(e, t) {
      return e > t ? e : t;
    }
    function Bn(e, t) {
      return e !== 0 && e < t;
    }
    function Fv(e) {
      var t = Ji(e);
      return Bn(pr, t) ? Bn(Ia, t) ? Bo(t) ? da : pa : Ia : pr;
    }
    function Oc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Go;
    function or(e) {
      Go = e;
    }
    function sy(e) {
      Go(e);
    }
    var ce;
    function Nu(e) {
      ce = e;
    }
    var Nc;
    function Vv(e) {
      Nc = e;
    }
    var Bv;
    function Xo(e) {
      Bv = e;
    }
    var Ko;
    function Rd(e) {
      Ko = e;
    }
    var Mc = !1, qo = [], Ei = null, Wa = null, Ga = null, fn = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), hr = [], Pv = [
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
    function $v(e) {
      return Pv.indexOf(e) > -1;
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
          Ei = null;
          break;
        case "dragenter":
        case "dragleave":
          Wa = null;
          break;
        case "mouseover":
        case "mouseout":
          Ga = null;
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
    function cy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ei = Ar(Ei, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Wa = Ar(Wa, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Ga = Ar(Ga, e, t, a, i, p), !0;
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
          if (i === Ae) {
            var u = $a(a);
            if (u !== null) {
              e.blockedOn = u, Ko(e.priority, function() {
                Nc(a);
              });
              return;
            }
          } else if (i === G) {
            var s = a.stateNode;
            if (Oc(s)) {
              e.blockedOn = Ya(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Yv(e) {
      for (var t = Bv(), a = {
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
          ay(s), u.target.dispatchEvent(s), iy();
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
    function fy() {
      Mc = !1, Ei !== null && Zo(Ei) && (Ei = null), Wa !== null && Zo(Wa) && (Wa = null), Ga !== null && Zo(Ga) && (Ga = null), fn.forEach(Dd), vr.forEach(Dd);
    }
    function el(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Mc || (Mc = !0, q.unstable_scheduleCallback(q.unstable_NormalPriority, fy)));
    }
    function Il(e) {
      if (qo.length > 0) {
        el(qo[0], e);
        for (var t = 1; t < qo.length; t++) {
          var a = qo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ei !== null && el(Ei, e), Wa !== null && el(Wa, e), Ga !== null && el(Ga, e);
      var i = function(p) {
        return el(p, e);
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
    var Xn = _.ReactCurrentBatchConfig, st = !0;
    function Ln(e) {
      st = !!e;
    }
    function wn() {
      return st;
    }
    function Kn(e, t, a) {
      var i = Lc(t), u;
      switch (i) {
        case pr:
          u = Gr;
          break;
        case Ia:
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
        Rn(Ia), dn(e, t, a, i);
      } finally {
        Rn(u), Xn.transition = s;
      }
    }
    function dn(e, t, a, i) {
      st && Jo(e, t, a, i);
    }
    function Jo(e, t, a, i) {
      var u = Lu(e, t, a, i);
      if (u === null) {
        ky(e, t, i, Xa, a), wd(e, i);
        return;
      }
      if (cy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (wd(e, i), t & la && $v(e)) {
        for (; u !== null; ) {
          var s = Vu(u);
          s !== null && sy(s);
          var f = Lu(e, t, a, i);
          if (f === null && ky(e, t, i, Xa, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      ky(e, t, i, null, a);
    }
    var Xa = null;
    function Lu(e, t, a, i) {
      Xa = null;
      var u = Jf(i), s = ss(u);
      if (s !== null) {
        var f = Yr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ae) {
            var v = $a(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === G) {
            var m = f.stateNode;
            if (Oc(m))
              return Ya(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Xa = s, null;
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
          return Ia;
        case "message": {
          var t = rc();
          switch (t) {
            case ko:
              return pr;
            case Xi:
              return Ia;
            case yi:
            case oy:
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
    function tl(e) {
      return Xr = e, Uu = ts(), !0;
    }
    function zc() {
      Xr = null, Uu = null, Wl = null;
    }
    function Ci() {
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
    function nl(e) {
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
      return Ke(t.prototype, {
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
    }, Ka = sr(bn), mr = Ke({}, bn, {
      view: 0,
      detail: 0
    }), Hr = sr(mr), Uc, rs, Gl;
    function dy(e) {
      e !== Gl && (Gl && e.type === "mousemove" ? (Uc = e.screenX - Gl.screenX, rs = e.screenY - Gl.screenY) : (Uc = 0, rs = 0), Gl = e);
    }
    var Ma = Ke({}, mr, {
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
      getModifierState: It,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (dy(e), Uc);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : rs;
      }
    }), _d = sr(Ma), Od = Ke({}, Ma, {
      dataTransfer: 0
    }), Xl = sr(Od), Nd = Ke({}, mr, {
      relatedTarget: 0
    }), xi = sr(Nd), Qv = Ke({}, bn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Iv = sr(Qv), Md = Ke({}, bn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Ac = sr(Md), py = Ke({}, bn, {
      data: 0
    }), Wv = sr(py), Gv = Wv, Xv = {
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
    function vy(e) {
      if (e.key) {
        var t = Xv[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = nl(e);
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
    function Kv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ju[e];
      return i ? !!a[i] : !1;
    }
    function It(e) {
      return Kv;
    }
    var hy = Ke({}, mr, {
      key: vy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: It,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? nl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? nl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), qv = sr(hy), my = Ke({}, Ma, {
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
    }), Zv = sr(my), Jv = Ke({}, mr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: It
    }), eh = sr(Jv), yy = Ke({}, bn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ha = sr(yy), Ld = Ke({}, Ma, {
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
    }), gy = sr(Ld), rl = [9, 13, 27, 32], as = 229, Ti = yn && "CompositionEvent" in window, al = null;
    yn && "documentMode" in document && (al = document.documentMode);
    var zd = yn && "TextEvent" in window && !al, jc = yn && (!Ti || al && al > 8 && al <= 11), th = 32, Hc = String.fromCharCode(th);
    function Sy() {
      ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ir("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ir("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ir("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ud = !1;
    function nh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Fc(e) {
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
          return rl.indexOf(t.keyCode) !== -1;
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
    function rh(e) {
      return e.locale === "ko";
    }
    var ql = !1;
    function jd(e, t, a, i, u) {
      var s, f;
      if (Ti ? s = Fc(t) : ql ? Ad(t, i) && (s = "onCompositionEnd") : Vc(t, i) && (s = "onCompositionStart"), !s)
        return null;
      jc && !rh(i) && (!ql && s === "onCompositionStart" ? ql = tl(u) : s === "onCompositionEnd" && ql && (f = Ci()));
      var p = ch(a, s);
      if (p.length > 0) {
        var v = new Wv(s, t, null, i, u);
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
          return a !== th ? null : (Ud = !0, Hc);
        case "textInput":
          var i = t.data;
          return i === Hc && Ud ? null : i;
        default:
          return null;
      }
    }
    function Hd(e, t) {
      if (ql) {
        if (e === "compositionend" || !Ti && Ad(e, t)) {
          var a = Ci();
          return zc(), ql = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!nh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return jc && !rh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function $c(e, t, a, i, u) {
      var s;
      if (zd ? s = Pc(t, i) : s = Hd(t, i), !s)
        return null;
      var f = ch(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Gv("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function ah(e, t, a, i, u, s, f) {
      jd(e, t, a, i, u), $c(e, t, a, i, u);
    }
    var Ey = {
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
      return t === "input" ? !!Ey[e.type] : t === "textarea";
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
    function Cy(e) {
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
    function ih(e, t, a, i) {
      Eu(i);
      var u = ch(t, "onChange");
      if (u.length > 0) {
        var s = new Ka("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var il = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      ih(t, n, e, Jf(e)), yv(o, t);
    }
    function o(e) {
      k0(e, 0);
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
    yn && (h = Cy("input") && (!document.documentMode || document.documentMode > 9));
    function S(e, t) {
      il = e, n = t, il.attachEvent("onpropertychange", N);
    }
    function C() {
      il && (il.detachEvent("onpropertychange", N), il = null, n = null);
    }
    function N(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function F(e, t, a) {
      e === "focusin" ? (C(), S(t, a)) : e === "focusout" && C();
    }
    function P(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function j(e) {
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
      if (r(p) ? v = d : is(p) ? h ? v = de : (v = P, m = F) : j(p) && (v = ue), v) {
        var y = v(t, a);
        if (y) {
          ih(e, y, i, u);
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
            (O !== L || O.tag !== X && O.tag !== re) && (O = null);
          }
        } else
          x = null, O = a;
        if (x !== O) {
          var ne = _d, Re = "onMouseLeave", Se = "onMouseEnter", ft = "mouse";
          (t === "pointerout" || t === "pointerover") && (ne = Zv, Re = "onPointerLeave", Se = "onPointerEnter", ft = "pointer");
          var it = x == null ? y : Xc(x), b = O == null ? y : Xc(O), z = new ne(Re, ft + "leave", x, i, u);
          z.target = it, z.relatedTarget = b;
          var D = null, $ = ss(u);
          if ($ === a) {
            var se = new ne(Se, ft + "enter", O, i, u);
            se.target = b, se.relatedTarget = it, D = se;
          }
          DT(e, z, D, x, O);
        }
      }
    }
    function k(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var V = typeof Object.is == "function" ? Object.is : k;
    function pe(e, t) {
      if (V(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!cr.call(t, s) || !V(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function we(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function be(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ze(e, t) {
      for (var a = we(e), i = 0, u = 0; a; ) {
        if (a.nodeType === di) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = we(be(a));
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
      return gt(e, u, s, f, p);
    }
    function gt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, R = null;
      e: for (; ; ) {
        for (var x = null; y === t && (a === 0 || y.nodeType === di) && (f = s + a), y === i && (u === 0 || y.nodeType === di) && (p = s + u), y.nodeType === di && (s += y.nodeValue.length), (x = y.firstChild) !== null; )
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
    function ll(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = ze(e, f), y = ze(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function lh(e) {
      return e && e.nodeType === di;
    }
    function y0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : lh(e) ? !1 : lh(t) ? y0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function sT(e) {
      return e && e.ownerDocument && y0(e.ownerDocument.documentElement, e);
    }
    function cT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g0() {
      for (var e = window, t = Tl(); t instanceof e.HTMLIFrameElement; ) {
        if (cT(t))
          e = t.contentWindow;
        else
          return t;
        t = Tl(e.document);
      }
      return t;
    }
    function xy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function fT() {
      var e = g0();
      return {
        focusedElem: e,
        selectionRange: xy(e) ? pT(e) : null
      };
    }
    function dT(e) {
      var t = g0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && sT(a)) {
        i !== null && xy(a) && vT(a, i);
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
    function pT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Pn(e), t || {
        start: 0,
        end: 0
      };
    }
    function vT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : ll(e, t);
    }
    var hT = yn && "documentMode" in document && document.documentMode <= 11;
    function mT() {
      ir("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Yc = null, Ty = null, Fd = null, Ry = !1;
    function yT(e) {
      if ("selectionStart" in e && xy(e))
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
    function gT(e) {
      return e.window === e ? e.document : e.nodeType === pi ? e : e.ownerDocument;
    }
    function S0(e, t, a) {
      var i = gT(a);
      if (!(Ry || Yc == null || Yc !== Tl(i))) {
        var u = yT(Yc);
        if (!Fd || !pe(Fd, u)) {
          Fd = u;
          var s = ch(Ty, "onSelect");
          if (s.length > 0) {
            var f = new Ka("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Yc;
          }
        }
      }
    }
    function ST(e, t, a, i, u, s, f) {
      var p = a ? Xc(a) : window;
      switch (t) {
        case "focusin":
          (is(p) || p.contentEditable === "true") && (Yc = p, Ty = a, Fd = null);
          break;
        case "focusout":
          Yc = null, Ty = null, Fd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, S0(e, i, u);
          break;
        case "selectionchange":
          if (hT)
            break;
        case "keydown":
        case "keyup":
          S0(e, i, u);
      }
    }
    function uh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Qc = {
      animationend: uh("Animation", "AnimationEnd"),
      animationiteration: uh("Animation", "AnimationIteration"),
      animationstart: uh("Animation", "AnimationStart"),
      transitionend: uh("Transition", "TransitionEnd")
    }, wy = {}, E0 = {};
    yn && (E0 = document.createElement("div").style, "AnimationEvent" in window || (delete Qc.animationend.animation, delete Qc.animationiteration.animation, delete Qc.animationstart.animation), "TransitionEvent" in window || delete Qc.transitionend.transition);
    function oh(e) {
      if (wy[e])
        return wy[e];
      if (!Qc[e])
        return e;
      var t = Qc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in E0)
          return wy[e] = t[a];
      return e;
    }
    var C0 = oh("animationend"), x0 = oh("animationiteration"), T0 = oh("animationstart"), R0 = oh("transitionend"), w0 = /* @__PURE__ */ new Map(), b0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Hu(e, t) {
      w0.set(e, t), ir(t, [e]);
    }
    function ET() {
      for (var e = 0; e < b0.length; e++) {
        var t = b0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Hu(a, "on" + i);
      }
      Hu(C0, "onAnimationEnd"), Hu(x0, "onAnimationIteration"), Hu(T0, "onAnimationStart"), Hu("dblclick", "onDoubleClick"), Hu("focusin", "onFocus"), Hu("focusout", "onBlur"), Hu(R0, "onTransitionEnd");
    }
    function CT(e, t, a, i, u, s, f) {
      var p = w0.get(t);
      if (p !== void 0) {
        var v = Ka, m = t;
        switch (t) {
          case "keypress":
            if (nl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = qv;
            break;
          case "focusin":
            m = "focus", v = xi;
            break;
          case "focusout":
            m = "blur", v = xi;
            break;
          case "beforeblur":
          case "afterblur":
            v = xi;
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
            v = eh;
            break;
          case C0:
          case x0:
          case T0:
            v = Iv;
            break;
          case R0:
            v = ha;
            break;
          case "scroll":
            v = Hr;
            break;
          case "wheel":
            v = gy;
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
            v = Zv;
            break;
        }
        var y = (s & la) !== 0;
        {
          var R = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = wT(a, p, i.type, y, R);
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
    ET(), w(), ls(), mT(), Sy();
    function xT(e, t, a, i, u, s, f) {
      CT(e, t, a, i, u, s);
      var p = (s & Zf) === 0;
      p && (T(e, t, a, i, u), pn(e, t, a, i, u), ST(e, t, a, i, u), ah(e, t, a, i, u));
    }
    var Vd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], by = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Vd));
    function D0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Va(i, t, void 0, e), e.currentTarget = null;
    }
    function TT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          D0(e, v, p), i = f;
        }
      else
        for (var m = 0; m < t.length; m++) {
          var y = t[m], R = y.instance, x = y.currentTarget, O = y.listener;
          if (R !== i && e.isPropagationStopped())
            return;
          D0(e, O, x), i = R;
        }
    }
    function k0(e, t) {
      for (var a = (t & la) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        TT(s, f, a);
      }
      wo();
    }
    function RT(e, t, a, i, u) {
      var s = Jf(a), f = [];
      xT(f, e, i, a, s, t), k0(f, t);
    }
    function Jt(e, t) {
      by.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = e1(t), u = kT(e);
      i.has(u) || (_0(t, e, Ys, a), i.add(u));
    }
    function Dy(e, t, a) {
      by.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= la), _0(a, e, i, t);
    }
    var sh = "_reactListening" + Math.random().toString(36).slice(2);
    function Bd(e) {
      if (!e[sh]) {
        e[sh] = !0, hn.forEach(function(a) {
          a !== "selectionchange" && (by.has(a) || Dy(a, !1, e), Dy(a, !0, e));
        });
        var t = e.nodeType === pi ? e : e.ownerDocument;
        t !== null && (t[sh] || (t[sh] = !0, Dy("selectionchange", !1, t)));
      }
    }
    function _0(e, t, a, i, u) {
      var s = Kn(e, t, a), f = void 0;
      Ro && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? kd(e, t, s, f) : jr(e, t, s) : f !== void 0 ? zu(e, t, s, f) : es(e, t, s);
    }
    function O0(e, t) {
      return e === t || e.nodeType === Sn && e.parentNode === t;
    }
    function ky(e, t, a, i, u) {
      var s = i;
      if (!(t & qf) && !(t & Ys)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === G || v === fe) {
              var m = p.stateNode.containerInfo;
              if (O0(m, f))
                break;
              if (v === fe)
                for (var y = p.return; y !== null; ) {
                  var R = y.tag;
                  if (R === G || R === fe) {
                    var x = y.stateNode.containerInfo;
                    if (O0(x, f))
                      return;
                  }
                  y = y.return;
                }
              for (; m !== null; ) {
                var O = ss(m);
                if (O === null)
                  return;
                var M = O.tag;
                if (M === X || M === re) {
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
      yv(function() {
        return RT(e, t, a, s);
      });
    }
    function Pd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function wT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, x = R.stateNode, O = R.tag;
        if (O === X && x !== null && (y = x, p !== null)) {
          var M = $i(m, p);
          M != null && v.push(Pd(m, M, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function ch(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === X && f !== null) {
          var v = f, m = $i(u, a);
          m != null && i.unshift(Pd(u, m, v));
          var y = $i(u, t);
          y != null && i.push(Pd(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function Ic(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== X);
      return e || null;
    }
    function bT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Ic(s))
        u++;
      for (var f = 0, p = i; p; p = Ic(p))
        f++;
      for (; u - f > 0; )
        a = Ic(a), u--;
      for (; f - u > 0; )
        i = Ic(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ic(a), i = Ic(i);
      }
      return null;
    }
    function N0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === X && y !== null) {
          var x = y;
          if (u) {
            var O = $i(p, s);
            O != null && f.unshift(Pd(p, O, x));
          } else if (!u) {
            var M = $i(p, s);
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
    function DT(e, t, a, i, u) {
      var s = i && u ? bT(i, u) : null;
      i !== null && N0(e, t, i, s, !1), u !== null && a !== null && N0(e, a, u, s, !0);
    }
    function kT(e, t) {
      return e + "__bubble";
    }
    var ma = !1, $d = "dangerouslySetInnerHTML", fh = "suppressContentEditableWarning", Fu = "suppressHydrationWarning", M0 = "autoFocus", us = "children", os = "style", dh = "__html", _y, ph, Yd, L0, vh, z0, U0;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, ph = function(e, t) {
      Gf(e, t), Ps(e, t), vv(e, t, {
        registrationNameDependencies: mn,
        possibleRegistrationNames: kn
      });
    }, z0 = yn && !document.documentMode, Yd = function(e, t, a) {
      if (!ma) {
        var i = hh(a), u = hh(t);
        u !== i && (ma = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, L0 = function(e) {
      if (!ma) {
        ma = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, vh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, U0 = function(e, t) {
      var a = e.namespaceURI === fi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var _T = /\r\n?/g, OT = /\u0000|\uFFFD/g;
    function hh(e) {
      At(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(_T, `
`).replace(OT, "");
    }
    function mh(e, t, a, i) {
      var u = hh(t), s = hh(e);
      if (s !== u && (i && (ma || (ma = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ht))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function A0(e) {
      return e.nodeType === pi ? e : e.ownerDocument;
    }
    function NT() {
    }
    function yh(e) {
      e.onclick = NT;
    }
    function MT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === os)
            f && Object.freeze(f), ov(t, f);
          else if (s === $d) {
            var p = f ? f[dh] : void 0;
            p != null && Kp(t, p);
          } else if (s === us)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && mu(t, f);
            } else typeof f == "number" && mu(t, "" + f);
          else s === fh || s === Fu || s === M0 || (mn.hasOwnProperty(s) ? f != null && (typeof f != "function" && vh(s, f), s === "onScroll" && Jt("scroll", t)) : f != null && ai(t, s, f, u));
        }
    }
    function LT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === os ? ov(e, f) : s === $d ? Kp(e, f) : s === us ? mu(e, f) : ai(e, s, f, i);
      }
    }
    function zT(e, t, a, i) {
      var u, s = A0(a), f, p = i;
      if (p === fi && (p = Bf(e)), p === fi) {
        if (u = Bi(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === fi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !cr.call(_y, e) && (_y[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function UT(e, t) {
      return A0(t).createTextNode(e);
    }
    function AT(e, t, a, i) {
      var u = Bi(t, a);
      ph(t, a);
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
          ci(e, a), s = Ns(e, a), Jt("invalid", e);
          break;
        case "option":
          vu(e, a), s = a;
          break;
        case "select":
          js(e, a), s = Af(e, a), Jt("invalid", e);
          break;
        case "textarea":
          Hf(e, a), s = jf(e, a), Jt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Vs(t, s), MT(t, e, i, s, u), t) {
        case "input":
          Vi(e), Lf(e, a, !1);
          break;
        case "textarea":
          Vi(e), Gp(e);
          break;
        case "option":
          Qm(e, a);
          break;
        case "select":
          Wm(e, a);
          break;
        default:
          typeof s.onClick == "function" && yh(e);
          break;
      }
    }
    function jT(e, t, a, i, u) {
      ph(t, i);
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
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && yh(e);
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
          } else v === $d || v === us || v === fh || v === Fu || v === M0 || (mn.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
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
            var M = x ? x[dh] : void 0, L = O ? O[dh] : void 0;
            M != null && L !== M && (s = s || []).push(v, M);
          } else v === us ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === fh || v === Fu || (mn.hasOwnProperty(v) ? (x != null && (typeof x != "function" && vh(v, x), v === "onScroll" && Jt("scroll", e)), !s && O !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return y && (ny(y, p[os]), (s = s || []).push(os, y)), s;
    }
    function HT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && Ms(e, u);
      var s = Bi(a, i), f = Bi(a, u);
      switch (LT(e, t, s, f), a) {
        case "input":
          pu(e, u);
          break;
        case "textarea":
          Wp(e, u);
          break;
        case "select":
          Gm(e, u);
          break;
      }
    }
    function FT(e) {
      {
        var t = e.toLowerCase();
        return Eo.hasOwnProperty(t) && Eo[t] || null;
      }
    }
    function VT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Bi(t, a), ph(t, a), t) {
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
          ci(e, a), Jt("invalid", e);
          break;
        case "option":
          vu(e, a);
          break;
        case "select":
          js(e, a), Jt("invalid", e);
          break;
        case "textarea":
          Hf(e, a), Jt("invalid", e);
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
            typeof L == "string" ? e.textContent !== L && (a[Fu] !== !0 && mh(e.textContent, L, s, f), O = [us, L]) : typeof L == "number" && e.textContent !== "" + L && (a[Fu] !== !0 && mh(e.textContent, L, s, f), O = [us, "" + L]);
          else if (mn.hasOwnProperty(M))
            L != null && (typeof L != "function" && vh(M, L), M === "onScroll" && Jt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ne = void 0, Re = xt(M);
            if (a[Fu] !== !0) {
              if (!(M === fh || M === Fu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              M === "value" || M === "checked" || M === "selected")) {
                if (M === $d) {
                  var Se = e.innerHTML, ft = L ? L[dh] : void 0;
                  if (ft != null) {
                    var it = U0(e, ft);
                    it !== Se && Yd(M, Se, it);
                  }
                } else if (M === os) {
                  if (v.delete(M), z0) {
                    var b = ey(L);
                    ne = e.getAttribute("style"), b !== ne && Yd(M, ne, b);
                  }
                } else if (p && !Ze)
                  v.delete(M.toLowerCase()), ne = io(e, M, L), L !== ne && Yd(M, ne, L);
                else if (!ht(M, Re, p) && !_n(M, L, Re, p)) {
                  var z = !1;
                  if (Re !== null)
                    v.delete(Re.attributeName), ne = fu(e, M, L, Re);
                  else {
                    var D = i;
                    if (D === fi && (D = Bf(t)), D === fi)
                      v.delete(M.toLowerCase());
                    else {
                      var $ = FT(M);
                      $ !== null && $ !== M && (z = !0, v.delete($)), v.delete(M);
                    }
                    ne = io(e, M, L);
                  }
                  var se = Ze;
                  !se && L !== ne && !z && Yd(M, ne, L);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Fu] !== !0 && L0(v), t) {
        case "input":
          Vi(e), Lf(e, a, !0);
          break;
        case "textarea":
          Vi(e), Gp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && yh(e);
          break;
      }
      return O;
    }
    function BT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Oy(e, t) {
      {
        if (ma)
          return;
        ma = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (ma)
          return;
        ma = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function My(e, t, a) {
      {
        if (ma)
          return;
        ma = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || ma)
          return;
        ma = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function PT(e, t, a) {
      switch (t) {
        case "input":
          Ls(e, a);
          return;
        case "textarea":
          Km(e, a);
          return;
        case "select":
          Xm(e, a);
          return;
      }
    }
    var Qd = function() {
    }, Id = function() {
    };
    {
      var $T = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], j0 = [
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
      ], YT = j0.concat(["button"]), QT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], H0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Id = function(e, t) {
        var a = Ke({}, e || H0), i = {
          tag: t
        };
        return j0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), YT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), $T.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
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
            return QT.indexOf(t) === -1;
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
      }, WT = function(e, t) {
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
      }, F0 = {};
      Qd = function(e, t, a) {
        a = a || H0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = IT(e, u) ? null : i, f = s ? null : WT(e, a), p = s || f;
        if (p) {
          var v = p.tag, m = !!s + "|" + e + "|" + v;
          if (!F0[m]) {
            F0[m] = !0;
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
    var gh = "suppressHydrationWarning", Sh = "$", Eh = "/$", Wd = "$?", Gd = "$!", GT = "style", zy = null, Uy = null;
    function XT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case pi:
        case $f: {
          t = i === pi ? "#document" : "#fragment";
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
        var p = t.toLowerCase(), v = Id(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function KT(e, t, a) {
      {
        var i = e, u = Pf(i.namespace, t), s = Id(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function hk(e) {
      return e;
    }
    function qT(e) {
      zy = wn(), Uy = fT();
      var t = null;
      return Ln(!1), t;
    }
    function ZT(e) {
      dT(Uy), Ln(zy), zy = null, Uy = null;
    }
    function JT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Qd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Id(f.ancestorInfo, e);
          Qd(null, p, v);
        }
        s = f.namespace;
      }
      var m = zT(e, t, a, s);
      return qd(u, m), $y(m, t), m;
    }
    function eR(e, t) {
      e.appendChild(t);
    }
    function tR(e, t, a, i, u) {
      switch (AT(e, t, a, i), t) {
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
    function nR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Id(f.ancestorInfo, t);
          Qd(null, p, v);
        }
      }
      return jT(e, t, a, i);
    }
    function Ay(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function rR(e, t, a, i) {
      {
        var u = a;
        Qd(null, e, u.ancestorInfo);
      }
      var s = UT(e, t);
      return qd(i, s), s;
    }
    function aR() {
      var e = window.event;
      return e === void 0 ? da : Lc(e.type);
    }
    var jy = typeof setTimeout == "function" ? setTimeout : void 0, iR = typeof clearTimeout == "function" ? clearTimeout : void 0, Hy = -1, V0 = typeof Promise == "function" ? Promise : void 0, lR = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(e) {
      return V0.resolve(null).then(e).catch(uR);
    } : jy;
    function uR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function oR(e, t, a, i) {
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
    function sR(e, t, a, i, u, s) {
      HT(e, t, a, i, u), $y(e, u);
    }
    function B0(e) {
      mu(e, "");
    }
    function cR(e, t, a) {
      e.nodeValue = a;
    }
    function fR(e, t) {
      e.appendChild(t);
    }
    function dR(e, t) {
      var a;
      e.nodeType === Sn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && yh(a);
    }
    function pR(e, t, a) {
      e.insertBefore(t, a);
    }
    function vR(e, t, a) {
      e.nodeType === Sn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function hR(e, t) {
      e.removeChild(t);
    }
    function mR(e, t) {
      e.nodeType === Sn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Sn) {
          var s = u.data;
          if (s === Eh)
            if (i === 0) {
              e.removeChild(u), Il(t);
              return;
            } else
              i--;
          else (s === Sh || s === Wd || s === Gd) && i++;
        }
        a = u;
      } while (a);
      Il(t);
    }
    function yR(e, t) {
      e.nodeType === Sn ? Fy(e.parentNode, t) : e.nodeType === kr && Fy(e, t), Il(e);
    }
    function gR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function SR(e) {
      e.nodeValue = "";
    }
    function ER(e, t) {
      e = e;
      var a = t[GT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Fs("display", i);
    }
    function CR(e, t) {
      e.nodeValue = t;
    }
    function xR(e) {
      e.nodeType === kr ? e.textContent = "" : e.nodeType === pi && e.documentElement && e.removeChild(e.documentElement);
    }
    function TR(e, t, a) {
      return e.nodeType !== kr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function RR(e, t) {
      return t === "" || e.nodeType !== di ? null : e;
    }
    function wR(e) {
      return e.nodeType !== Sn ? null : e;
    }
    function P0(e) {
      return e.data === Wd;
    }
    function Vy(e) {
      return e.data === Gd;
    }
    function bR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function DR(e, t) {
      e._reactRetry = t;
    }
    function Ch(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === kr || t === di)
          break;
        if (t === Sn) {
          var a = e.data;
          if (a === Sh || a === Gd || a === Wd)
            break;
          if (a === Eh)
            return null;
        }
      }
      return e;
    }
    function Xd(e) {
      return Ch(e.nextSibling);
    }
    function kR(e) {
      return Ch(e.firstChild);
    }
    function _R(e) {
      return Ch(e.firstChild);
    }
    function OR(e) {
      return Ch(e.nextSibling);
    }
    function NR(e, t, a, i, u, s, f) {
      qd(s, e), $y(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & qe) !== Te;
      return VT(e, t, a, p, i, m, f);
    }
    function MR(e, t, a, i) {
      return qd(a, e), a.mode & qe, BT(e, t);
    }
    function LR(e, t) {
      qd(t, e);
    }
    function zR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === Eh) {
            if (a === 0)
              return Xd(t);
            a--;
          } else (i === Sh || i === Gd || i === Wd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function $0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === Sh || i === Gd || i === Wd) {
            if (a === 0)
              return t;
            a--;
          } else i === Eh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function UR(e) {
      Il(e);
    }
    function AR(e) {
      Il(e);
    }
    function jR(e) {
      return e !== "head" && e !== "body";
    }
    function HR(e, t, a, i) {
      var u = !0;
      mh(t.nodeValue, a, i, u);
    }
    function FR(e, t, a, i, u, s) {
      if (t[gh] !== !0) {
        var f = !0;
        mh(i.nodeValue, u, s, f);
      }
    }
    function VR(e, t) {
      t.nodeType === kr ? Oy(e, t) : t.nodeType === Sn || Ny(e, t);
    }
    function BR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === kr ? Oy(a, t) : t.nodeType === Sn || Ny(a, t));
      }
    }
    function PR(e, t, a, i, u) {
      (u || t[gh] !== !0) && (i.nodeType === kr ? Oy(a, i) : i.nodeType === Sn || Ny(a, i));
    }
    function $R(e, t, a) {
      My(e, t);
    }
    function YR(e, t) {
      Ly(e, t);
    }
    function QR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && My(i, t);
      }
    }
    function IR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function WR(e, t, a, i, u, s) {
      (s || t[gh] !== !0) && My(a, i);
    }
    function GR(e, t, a, i, u) {
      (u || t[gh] !== !0) && Ly(a, i);
    }
    function XR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function KR(e) {
      Bd(e);
    }
    var Wc = Math.random().toString(36).slice(2), Gc = "__reactFiber$" + Wc, By = "__reactProps$" + Wc, Kd = "__reactContainer$" + Wc, Py = "__reactEvents$" + Wc, qR = "__reactListeners$" + Wc, ZR = "__reactHandles$" + Wc;
    function JR(e) {
      delete e[Gc], delete e[By], delete e[Py], delete e[qR], delete e[ZR];
    }
    function qd(e, t) {
      t[Gc] = e;
    }
    function xh(e, t) {
      t[Kd] = e;
    }
    function Y0(e) {
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
            for (var u = $0(e); u !== null; ) {
              var s = u[Gc];
              if (s)
                return s;
              u = $0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Vu(e) {
      var t = e[Gc] || e[Kd];
      return t && (t.tag === X || t.tag === re || t.tag === Ae || t.tag === G) ? t : null;
    }
    function Xc(e) {
      if (e.tag === X || e.tag === re)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Th(e) {
      return e[By] || null;
    }
    function $y(e, t) {
      e[By] = t;
    }
    function e1(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var Q0 = {}, I0 = _.ReactDebugCurrentFrame;
    function Rh(e) {
      if (e) {
        var t = e._owner, a = Cl(e.type, e._source, t ? t.type : null);
        I0.setExtraStackFrame(a);
      } else
        I0.setExtraStackFrame(null);
    }
    function Ri(e, t, a, i, u) {
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
            p && !(p instanceof Error) && (Rh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Rh(null)), p instanceof Error && !(p.message in Q0) && (Q0[p.message] = !0, Rh(u), g("Failed %s type: %s", a, p.message), Rh(null));
          }
      }
    }
    var Yy = [], wh;
    wh = [];
    var Zl = -1;
    function Bu(e) {
      return {
        current: e
      };
    }
    function Fr(e, t) {
      if (Zl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== wh[Zl] && g("Unexpected Fiber popped."), e.current = Yy[Zl], Yy[Zl] = null, wh[Zl] = null, Zl--;
    }
    function Vr(e, t, a) {
      Zl++, Yy[Zl] = e.current, wh[Zl] = a, e.current = t;
    }
    var Qy;
    Qy = {};
    var La = {};
    Object.freeze(La);
    var Jl = Bu(La), ul = Bu(!1), Iy = La;
    function Kc(e, t, a) {
      return a && ol(t) ? Iy : Jl.current;
    }
    function W0(e, t, a) {
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
          var p = $e(e) || "Unknown";
          Ri(i, s, "context", p);
        }
        return u && W0(e, t, s), s;
      }
    }
    function bh() {
      return ul.current;
    }
    function ol(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Dh(e) {
      Fr(ul, e), Fr(Jl, e);
    }
    function Wy(e) {
      Fr(ul, e), Fr(Jl, e);
    }
    function G0(e, t, a) {
      {
        if (Jl.current !== La)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(Jl, t, e), Vr(ul, a, e);
      }
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = $e(e) || "Unknown";
            Qy[s] || (Qy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error(($e(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = $e(e) || "Unknown";
          Ri(u, f, "child context", v);
        }
        return Ke({}, a, f);
      }
    }
    function kh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || La;
        return Iy = Jl.current, Vr(Jl, a, e), Vr(ul, ul.current, e), !0;
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = X0(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, Fr(ul, e), Fr(Jl, e), Vr(Jl, u, e), Vr(ul, a, e);
        } else
          Fr(ul, e), Vr(ul, a, e);
      }
    }
    function t1(e) {
      {
        if (!Ml(e) || e.tag !== Z)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case G:
              return t.stateNode.context;
            case Z: {
              var a = t.type;
              if (ol(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Pu = 0, _h = 1, eu = null, Gy = !1, Xy = !1;
    function q0(e) {
      eu === null ? eu = [e] : eu.push(e);
    }
    function n1(e) {
      Gy = !0, q0(e);
    }
    function Z0() {
      Gy && $u();
    }
    function $u() {
      if (!Xy && eu !== null) {
        Xy = !0;
        var e = 0, t = va();
        try {
          var a = !0, i = eu;
          for (Rn(pr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          eu = null, Gy = !1;
        } catch (s) {
          throw eu !== null && (eu = eu.slice(e + 1)), td(ko, $u), s;
        } finally {
          Rn(t), Xy = !1;
        }
      }
      return null;
    }
    var Zc = [], Jc = 0, Oh = null, Nh = 0, qa = [], Za = 0, cs = null, tu = 1, nu = "";
    function r1(e) {
      return ds(), (e.flags & Ba) !== xe;
    }
    function a1(e) {
      return ds(), Nh;
    }
    function i1() {
      var e = nu, t = tu, a = t & ~l1(t);
      return a.toString(32) + e;
    }
    function fs(e, t) {
      ds(), Zc[Jc++] = Nh, Zc[Jc++] = Oh, Oh = e, Nh = t;
    }
    function J0(e, t, a) {
      ds(), qa[Za++] = tu, qa[Za++] = nu, qa[Za++] = cs, cs = e;
      var i = tu, u = nu, s = Mh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Mh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), x = f >> m, O = s - m, M = Mh(t) + O, L = p << O, ne = L | x, Re = R + u;
        tu = 1 << M | ne, nu = Re;
      } else {
        var Se = p << s, ft = Se | f, it = u;
        tu = 1 << v | ft, nu = it;
      }
    }
    function Ky(e) {
      ds();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        fs(e, a), J0(e, a, i);
      }
    }
    function Mh(e) {
      return 32 - xn(e);
    }
    function l1(e) {
      return 1 << Mh(e) - 1;
    }
    function qy(e) {
      for (; e === Oh; )
        Oh = Zc[--Jc], Zc[Jc] = null, Nh = Zc[--Jc], Zc[Jc] = null;
      for (; e === cs; )
        cs = qa[--Za], qa[Za] = null, nu = qa[--Za], qa[Za] = null, tu = qa[--Za], qa[Za] = null;
    }
    function u1() {
      return ds(), cs !== null ? {
        id: tu,
        overflow: nu
      } : null;
    }
    function o1(e, t) {
      ds(), qa[Za++] = tu, qa[Za++] = nu, qa[Za++] = cs, tu = t.id, nu = t.overflow, cs = e;
    }
    function ds() {
      gr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var yr = null, Ja = null, wi = !1, ps = !1, Yu = null;
    function s1() {
      wi && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eE() {
      ps = !0;
    }
    function c1() {
      return ps;
    }
    function f1(e) {
      var t = e.stateNode.containerInfo;
      return Ja = _R(t), yr = e, wi = !0, Yu = null, ps = !1, !0;
    }
    function d1(e, t, a) {
      return Ja = OR(t), yr = e, wi = !0, Yu = null, ps = !1, a !== null && o1(e, a), !0;
    }
    function tE(e, t) {
      switch (e.tag) {
        case G: {
          VR(e.stateNode.containerInfo, t);
          break;
        }
        case X: {
          var a = (e.mode & qe) !== Te;
          PR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ae: {
          var i = e.memoizedState;
          i.dehydrated !== null && BR(i.dehydrated, t);
          break;
        }
      }
    }
    function nE(e, t) {
      tE(e, t);
      var a = mD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ua) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (ps)
          return;
        switch (e.tag) {
          case G: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case X:
                var i = t.type;
                t.pendingProps, $R(a, i);
                break;
              case re:
                var u = t.pendingProps;
                YR(a, u);
                break;
            }
            break;
          }
          case X: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case X: {
                var v = t.type, m = t.pendingProps, y = (e.mode & qe) !== Te;
                WR(
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
              case re: {
                var R = t.pendingProps, x = (e.mode & qe) !== Te;
                GR(
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
          case Ae: {
            var O = e.memoizedState, M = O.dehydrated;
            if (M !== null) switch (t.tag) {
              case X:
                var L = t.type;
                t.pendingProps, QR(M, L);
                break;
              case re:
                var ne = t.pendingProps;
                IR(M, ne);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function rE(e, t) {
      t.flags = t.flags & ~Or | Kt, Zy(e, t);
    }
    function aE(e, t) {
      switch (e.tag) {
        case X: {
          var a = e.type;
          e.pendingProps;
          var i = TR(t, a);
          return i !== null ? (e.stateNode = i, yr = e, Ja = kR(i), !0) : !1;
        }
        case re: {
          var u = e.pendingProps, s = RR(t, u);
          return s !== null ? (e.stateNode = s, yr = e, Ja = null, !0) : !1;
        }
        case Ae: {
          var f = wR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: u1(),
              retryLane: zr
            };
            e.memoizedState = p;
            var v = yD(f);
            return v.return = e, e.child = v, yr = e, Ja = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & qe) !== Te && (e.flags & Ee) === xe;
    }
    function eg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function tg(e) {
      if (wi) {
        var t = Ja;
        if (!t) {
          Jy(e) && (Zy(yr, e), eg()), rE(yr, e), wi = !1, yr = e;
          return;
        }
        var a = t;
        if (!aE(e, t)) {
          Jy(e) && (Zy(yr, e), eg()), t = Xd(a);
          var i = yr;
          if (!t || !aE(e, t)) {
            rE(yr, e), wi = !1, yr = e;
            return;
          }
          nE(i, a);
        }
      }
    }
    function p1(e, t, a) {
      var i = e.stateNode, u = !ps, s = NR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function v1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = MR(t, a, e);
      if (i) {
        var u = yr;
        if (u !== null)
          switch (u.tag) {
            case G: {
              var s = u.stateNode.containerInfo, f = (u.mode & qe) !== Te;
              HR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case X: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & qe) !== Te;
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
    function h1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      LR(a, e);
    }
    function m1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return zR(a);
    }
    function iE(e) {
      for (var t = e.return; t !== null && t.tag !== X && t.tag !== G && t.tag !== Ae; )
        t = t.return;
      yr = t;
    }
    function Lh(e) {
      if (e !== yr)
        return !1;
      if (!wi)
        return iE(e), wi = !0, !1;
      if (e.tag !== G && (e.tag !== X || jR(e.type) && !Ay(e.type, e.memoizedProps))) {
        var t = Ja;
        if (t)
          if (Jy(e))
            lE(e), eg();
          else
            for (; t; )
              nE(e, t), t = Xd(t);
      }
      return iE(e), e.tag === Ae ? Ja = m1(e) : Ja = yr ? Xd(e.stateNode) : null, !0;
    }
    function y1() {
      return wi && Ja !== null;
    }
    function lE(e) {
      for (var t = Ja; t; )
        tE(e, t), t = Xd(t);
    }
    function ef() {
      yr = null, Ja = null, wi = !1, ps = !1;
    }
    function uE() {
      Yu !== null && (ex(Yu), Yu = null);
    }
    function gr() {
      return wi;
    }
    function ng(e) {
      Yu === null ? Yu = [e] : Yu.push(e);
    }
    var g1 = _.ReactCurrentBatchConfig, S1 = null;
    function E1() {
      return g1.transition;
    }
    var bi = {
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
      var C1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Mt && (t = a), a = a.return;
        return t;
      }, vs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Jd = [], ep = [], tp = [], np = [], rp = [], ap = [], hs = /* @__PURE__ */ new Set();
      bi.recordUnsafeLifecycleWarnings = function(e, t) {
        hs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Jd.push(e), e.mode & Mt && typeof t.UNSAFE_componentWillMount == "function" && ep.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && tp.push(e), e.mode & Mt && typeof t.UNSAFE_componentWillReceiveProps == "function" && np.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && rp.push(e), e.mode & Mt && typeof t.UNSAFE_componentWillUpdate == "function" && ap.push(e));
      }, bi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Jd.length > 0 && (Jd.forEach(function(x) {
          e.add($e(x) || "Component"), hs.add(x.type);
        }), Jd = []);
        var t = /* @__PURE__ */ new Set();
        ep.length > 0 && (ep.forEach(function(x) {
          t.add($e(x) || "Component"), hs.add(x.type);
        }), ep = []);
        var a = /* @__PURE__ */ new Set();
        tp.length > 0 && (tp.forEach(function(x) {
          a.add($e(x) || "Component"), hs.add(x.type);
        }), tp = []);
        var i = /* @__PURE__ */ new Set();
        np.length > 0 && (np.forEach(function(x) {
          i.add($e(x) || "Component"), hs.add(x.type);
        }), np = []);
        var u = /* @__PURE__ */ new Set();
        rp.length > 0 && (rp.forEach(function(x) {
          u.add($e(x) || "Component"), hs.add(x.type);
        }), rp = []);
        var s = /* @__PURE__ */ new Set();
        if (ap.length > 0 && (ap.forEach(function(x) {
          s.add($e(x) || "Component"), hs.add(x.type);
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
          Qe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = vs(a);
          Qe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = vs(u);
          Qe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var zh = /* @__PURE__ */ new Map(), oE = /* @__PURE__ */ new Set();
      bi.recordLegacyContextWarning = function(e, t) {
        var a = C1(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oE.has(e.type)) {
          var i = zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], zh.set(a, i)), i.push(e));
        }
      }, bi.flushLegacyContextWarning = function() {
        zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add($e(s) || "Component"), oE.add(s.type);
            });
            var u = vs(i);
            try {
              Pt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              an();
            }
          }
        });
      }, bi.discardPendingWarnings = function() {
        Jd = [], ep = [], tp = [], np = [], rp = [], ap = [], zh = /* @__PURE__ */ new Map();
      };
    }
    var rg, ag, ig, lg, ug, sE = function(e, t) {
    };
    rg = !1, ag = !1, ig = {}, lg = {}, ug = {}, sE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = $e(t) || "Component";
        lg[a] || (lg[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function x1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function ip(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Mt || rt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== Z) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !x1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = $e(e) || "Component";
          ig[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ig[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== Z)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Aa(i, "ref");
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
    function Uh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ah(e) {
      {
        var t = $e(e) || "Component";
        if (ug[t])
          return;
        ug[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function cE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function fE(e) {
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
          return b.flags |= Ba, z;
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
        if (z === null || z.tag !== re) {
          var se = n0(D, b.mode, $);
          return se.return = b, se;
        } else {
          var le = u(z, D);
          return le.return = b, le;
        }
      }
      function v(b, z, D, $) {
        var se = D.type;
        if (se === Ui)
          return y(b, z, D.props.children, $, D.key);
        if (z !== null && (z.elementType === se || // Keep this check inline so it only runs on the false path:
        mx(z, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof se == "object" && se !== null && se.$$typeof === Be && cE(se) === z.type)) {
          var le = u(z, D.props);
          return le.ref = ip(b, z, D), le.return = b, le._debugSource = D._source, le._debugOwner = D._owner, le;
        }
        var Le = t0(D, b.mode, $);
        return Le.ref = ip(b, z, D), Le.return = b, Le;
      }
      function m(b, z, D, $) {
        if (z === null || z.tag !== fe || z.stateNode.containerInfo !== D.containerInfo || z.stateNode.implementation !== D.implementation) {
          var se = r0(D, b.mode, $);
          return se.return = b, se;
        } else {
          var le = u(z, D.children || []);
          return le.return = b, le;
        }
      }
      function y(b, z, D, $, se) {
        if (z === null || z.tag !== Ce) {
          var le = to(D, b.mode, $, se);
          return le.return = b, le;
        } else {
          var Le = u(z, D);
          return Le.return = b, Le;
        }
      }
      function R(b, z, D) {
        if (typeof z == "string" && z !== "" || typeof z == "number") {
          var $ = n0("" + z, b.mode, D);
          return $.return = b, $;
        }
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Ra: {
              var se = t0(z, b.mode, D);
              return se.ref = ip(b, null, z), se.return = b, se;
            }
            case br: {
              var le = r0(z, b.mode, D);
              return le.return = b, le;
            }
            case Be: {
              var Le = z._payload, He = z._init;
              return R(b, He(Le), D);
            }
          }
          if (In(z) || We(z)) {
            var zt = to(z, b.mode, D, null);
            return zt.return = b, zt;
          }
          Uh(b, z);
        }
        return typeof z == "function" && Ah(b), null;
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
            case Be: {
              var le = D._payload, Le = D._init;
              return x(b, z, Le(le), $);
            }
          }
          if (In(D) || We(D))
            return se !== null ? null : y(b, z, D, $, null);
          Uh(b, D);
        }
        return typeof D == "function" && Ah(b), null;
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
              var He = b.get($.key === null ? D : $.key) || null;
              return m(z, He, $, se);
            }
            case Be:
              var zt = $._payload, St = $._init;
              return O(b, z, D, St(zt), se);
          }
          if (In($) || We($)) {
            var zn = b.get(D) || null;
            return y(z, zn, $, se, null);
          }
          Uh(z, $);
        }
        return typeof $ == "function" && Ah(z), null;
      }
      function M(b, z, D) {
        {
          if (typeof b != "object" || b === null)
            return z;
          switch (b.$$typeof) {
            case Ra:
            case br:
              sE(b, D);
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
            case Be:
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
        for (var He = null, zt = null, St = z, zn = 0, Et = 0, Dn = null; St !== null && Et < D.length; Et++) {
          St.index > Et ? (Dn = St, St = null) : Dn = St.sibling;
          var Pr = x(b, St, D[Et], $);
          if (Pr === null) {
            St === null && (St = Dn);
            break;
          }
          e && St && Pr.alternate === null && t(b, St), zn = s(Pr, zn, Et), zt === null ? He = Pr : zt.sibling = Pr, zt = Pr, St = Dn;
        }
        if (Et === D.length) {
          if (a(b, St), gr()) {
            var wr = Et;
            fs(b, wr);
          }
          return He;
        }
        if (St === null) {
          for (; Et < D.length; Et++) {
            var Ua = R(b, D[Et], $);
            Ua !== null && (zn = s(Ua, zn, Et), zt === null ? He = Ua : zt.sibling = Ua, zt = Ua);
          }
          if (gr()) {
            var Jr = Et;
            fs(b, Jr);
          }
          return He;
        }
        for (var ea = i(b, St); Et < D.length; Et++) {
          var $r = O(ea, b, Et, D[Et], $);
          $r !== null && (e && $r.alternate !== null && ea.delete($r.key === null ? Et : $r.key), zn = s($r, zn, Et), zt === null ? He = $r : zt.sibling = $r, zt = $r);
        }
        if (e && ea.forEach(function(Ef) {
          return t(b, Ef);
        }), gr()) {
          var su = Et;
          fs(b, su);
        }
        return He;
      }
      function ne(b, z, D, $) {
        var se = We(D);
        if (typeof se != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (ag || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ag = !0), D.entries === se && (rg || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), rg = !0);
          var le = se.call(D);
          if (le)
            for (var Le = null, He = le.next(); !He.done; He = le.next()) {
              var zt = He.value;
              Le = M(zt, Le, b);
            }
        }
        var St = se.call(D);
        if (St == null)
          throw new Error("An iterable object provided no iterator.");
        for (var zn = null, Et = null, Dn = z, Pr = 0, wr = 0, Ua = null, Jr = St.next(); Dn !== null && !Jr.done; wr++, Jr = St.next()) {
          Dn.index > wr ? (Ua = Dn, Dn = null) : Ua = Dn.sibling;
          var ea = x(b, Dn, Jr.value, $);
          if (ea === null) {
            Dn === null && (Dn = Ua);
            break;
          }
          e && Dn && ea.alternate === null && t(b, Dn), Pr = s(ea, Pr, wr), Et === null ? zn = ea : Et.sibling = ea, Et = ea, Dn = Ua;
        }
        if (Jr.done) {
          if (a(b, Dn), gr()) {
            var $r = wr;
            fs(b, $r);
          }
          return zn;
        }
        if (Dn === null) {
          for (; !Jr.done; wr++, Jr = St.next()) {
            var su = R(b, Jr.value, $);
            su !== null && (Pr = s(su, Pr, wr), Et === null ? zn = su : Et.sibling = su, Et = su);
          }
          if (gr()) {
            var Ef = wr;
            fs(b, Ef);
          }
          return zn;
        }
        for (var jp = i(b, Dn); !Jr.done; wr++, Jr = St.next()) {
          var ml = O(jp, b, wr, Jr.value, $);
          ml !== null && (e && ml.alternate !== null && jp.delete(ml.key === null ? wr : ml.key), Pr = s(ml, Pr, wr), Et === null ? zn = ml : Et.sibling = ml, Et = ml);
        }
        if (e && jp.forEach(function(GD) {
          return t(b, GD);
        }), gr()) {
          var WD = wr;
          fs(b, WD);
        }
        return zn;
      }
      function Re(b, z, D, $) {
        if (z !== null && z.tag === re) {
          a(b, z.sibling);
          var se = u(z, D);
          return se.return = b, se;
        }
        a(b, z);
        var le = n0(D, b.mode, $);
        return le.return = b, le;
      }
      function Se(b, z, D, $) {
        for (var se = D.key, le = z; le !== null; ) {
          if (le.key === se) {
            var Le = D.type;
            if (Le === Ui) {
              if (le.tag === Ce) {
                a(b, le.sibling);
                var He = u(le, D.props.children);
                return He.return = b, He._debugSource = D._source, He._debugOwner = D._owner, He;
              }
            } else if (le.elementType === Le || // Keep this check inline so it only runs on the false path:
            mx(le, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Le == "object" && Le !== null && Le.$$typeof === Be && cE(Le) === le.type) {
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
        if (D.type === Ui) {
          var St = to(D.props.children, b.mode, $, D.key);
          return St.return = b, St;
        } else {
          var zn = t0(D, b.mode, $);
          return zn.ref = ip(b, z, D), zn.return = b, zn;
        }
      }
      function ft(b, z, D, $) {
        for (var se = D.key, le = z; le !== null; ) {
          if (le.key === se)
            if (le.tag === fe && le.stateNode.containerInfo === D.containerInfo && le.stateNode.implementation === D.implementation) {
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
        var He = r0(D, b.mode, $);
        return He.return = b, He;
      }
      function it(b, z, D, $) {
        var se = typeof D == "object" && D !== null && D.type === Ui && D.key === null;
        if (se && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Ra:
              return f(Se(b, z, D, $));
            case br:
              return f(ft(b, z, D, $));
            case Be:
              var le = D._payload, Le = D._init;
              return it(b, z, Le(le), $);
          }
          if (In(D))
            return L(b, z, D, $);
          if (We(D))
            return ne(b, z, D, $);
          Uh(b, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(Re(b, z, "" + D, $)) : (typeof D == "function" && Ah(b), a(b, z));
      }
      return it;
    }
    var tf = fE(!0), dE = fE(!1);
    function T1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Rs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Rs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function R1(e, t) {
      for (var a = e.child; a !== null; )
        fD(a, t), a = a.sibling;
    }
    var og = Bu(null), sg;
    sg = {};
    var jh = null, nf = null, cg = null, Hh = !1;
    function Fh() {
      jh = null, nf = null, cg = null, Hh = !1;
    }
    function pE() {
      Hh = !0;
    }
    function vE() {
      Hh = !1;
    }
    function hE(e, t, a) {
      Vr(og, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== sg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = sg;
    }
    function fg(e, t) {
      var a = og.current;
      Fr(og, t), e._currentValue = a;
    }
    function dg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ql(i.childLanes, t) ? u !== null && !Ql(u.childLanes, t) && (u.childLanes = Ye(u.childLanes, t)) : (i.childLanes = Ye(i.childLanes, t), u !== null && (u.childLanes = Ye(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function w1(e, t, a) {
      b1(e, t, a);
    }
    function b1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === Z) {
                var p = Po(a), v = ru(jt, p);
                v.tag = Bh;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = Ye(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = Ye(x.lanes, a)), dg(i.return, a, e), s.lanes = Ye(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === nt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === tn) {
          var O = i.return;
          if (O === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          O.lanes = Ye(O.lanes, a);
          var M = O.alternate;
          M !== null && (M.lanes = Ye(M.lanes, a)), dg(O, a, e), u = i.sibling;
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
      jh = e, nf = null, cg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Ur(a.lanes, t) && Ep(), a.firstContext = null);
      }
    }
    function $n(e) {
      Hh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (cg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (nf === null) {
          if (jh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          nf = a, jh.dependencies = {
            lanes: A,
            firstContext: a
          };
        } else
          nf = nf.next = a;
      }
      return t;
    }
    var ms = null;
    function pg(e) {
      ms === null ? ms = [e] : ms.push(e);
    }
    function D1() {
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
    function mE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, pg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Vh(e, i);
    }
    function k1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, pg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function _1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, pg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Vh(e, i);
    }
    function ya(e, t) {
      return Vh(e, t);
    }
    var O1 = Vh;
    function Vh(e, t) {
      e.lanes = Ye(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ye(a.lanes, t)), a === null && (e.flags & (Kt | Or)) !== xe && dx(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ye(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ye(a.childLanes, t) : (u.flags & (Kt | Or)) !== xe && dx(e), i = u, u = u.return;
      if (i.tag === G) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yE = 0, gE = 1, Bh = 2, vg = 3, Ph = !1, hg, $h;
    hg = !1, $h = null;
    function mg(e) {
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
    function SE(e, t) {
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
        tag: yE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Qu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if ($h === u && !hg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), hg = !0), kb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, O1(e, a);
      } else
        return _1(e, u, t, a);
    }
    function Yh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (gd(a)) {
          var s = u.lanes;
          s = Ed(s, e.pendingLanes);
          var f = Ye(s, a);
          u.lanes = f, _c(e, f);
        }
      }
    }
    function yg(e, t) {
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
    function N1(e, t, a, i, u, s) {
      switch (a.tag) {
        case gE: {
          var f = a.payload;
          if (typeof f == "function") {
            pE();
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
              vE();
            }
            return p;
          }
          return f;
        }
        case vg:
          e.flags = e.flags & ~Fn | Ee;
        case yE: {
          var v = a.payload, m;
          if (typeof v == "function") {
            pE(), m = v.call(s, i, u);
            {
              if (e.mode & Mt) {
                qt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  qt(!1);
                }
              }
              vE();
            }
          } else
            m = v;
          return m == null ? i : Ke({}, i, m);
        }
        case Bh:
          return Ph = !0, i;
      }
      return i;
    }
    function Qh(e, t, a, i) {
      var u = e.updateQueue;
      Ph = !1, $h = u.shared;
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
        var O = u.baseState, M = A, L = null, ne = null, Re = null, Se = s;
        do {
          var ft = Se.lane, it = Se.eventTime;
          if (Ql(i, ft)) {
            if (Re !== null) {
              var z = {
                eventTime: it,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: vt,
                tag: Se.tag,
                payload: Se.payload,
                callback: Se.callback,
                next: null
              };
              Re = Re.next = z;
            }
            O = N1(e, u, Se, O, t, a);
            var D = Se.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            Se.lane !== vt) {
              e.flags |= Vt;
              var $ = u.effects;
              $ === null ? u.effects = [Se] : $.push(Se);
            }
          } else {
            var b = {
              eventTime: it,
              lane: ft,
              tag: Se.tag,
              payload: Se.payload,
              callback: Se.callback,
              next: null
            };
            Re === null ? (ne = Re = b, L = O) : Re = Re.next = b, M = Ye(M, ft);
          }
          if (Se = Se.next, Se === null) {
            if (p = u.shared.pending, p === null)
              break;
            var se = p, le = se.next;
            se.next = null, Se = le, u.lastBaseUpdate = se, u.shared.pending = null;
          }
        } while (!0);
        Re === null && (L = O), u.baseState = L, u.firstBaseUpdate = ne, u.lastBaseUpdate = Re;
        var Le = u.shared.interleaved;
        if (Le !== null) {
          var He = Le;
          do
            M = Ye(M, He.lane), He = He.next;
          while (He !== Le);
        } else s === null && (u.shared.lanes = A);
        Mp(M), e.lanes = M, e.memoizedState = O;
      }
      $h = null;
    }
    function M1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EE() {
      Ph = !1;
    }
    function Ih() {
      return Ph;
    }
    function CE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, M1(f, a));
        }
    }
    var lp = {}, Iu = Bu(lp), up = Bu(lp), Wh = Bu(lp);
    function Gh(e) {
      if (e === lp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function xE() {
      var e = Gh(Wh.current);
      return e;
    }
    function gg(e, t) {
      Vr(Wh, t, e), Vr(up, e, e), Vr(Iu, lp, e);
      var a = XT(t);
      Fr(Iu, e), Vr(Iu, a, e);
    }
    function af(e) {
      Fr(Iu, e), Fr(up, e), Fr(Wh, e);
    }
    function Sg() {
      var e = Gh(Iu.current);
      return e;
    }
    function TE(e) {
      Gh(Wh.current);
      var t = Gh(Iu.current), a = KT(t, e.type);
      t !== a && (Vr(up, e, e), Vr(Iu, a, e));
    }
    function Eg(e) {
      up.current === e && (Fr(Iu, e), Fr(up, e));
    }
    var L1 = 0, RE = 1, wE = 1, op = 2, Di = Bu(L1);
    function Cg(e, t) {
      return (e & t) !== 0;
    }
    function lf(e) {
      return e & RE;
    }
    function xg(e, t) {
      return e & RE | t;
    }
    function z1(e, t) {
      return e | t;
    }
    function Wu(e, t) {
      Vr(Di, t, e);
    }
    function uf(e) {
      Fr(Di, e);
    }
    function U1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Xh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ae) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || P0(i) || Vy(i))
              return t;
          }
        } else if (t.tag === Wt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ee) !== xe;
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
    ), sl = (
      /*  */
      2
    ), Zn = (
      /*    */
      4
    ), Sr = (
      /*   */
      8
    ), Tg = [];
    function Rg() {
      for (var e = 0; e < Tg.length; e++) {
        var t = Tg[e];
        t._workInProgressVersionPrimary = null;
      }
      Tg.length = 0;
    }
    function A1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var oe = _.ReactCurrentDispatcher, sp = _.ReactCurrentBatchConfig, wg, of;
    wg = /* @__PURE__ */ new Set();
    var ys = A, Lt = null, Jn = null, er = null, Kh = !1, cp = !1, fp = 0, j1 = 0, H1 = 25, U = null, ei = null, Gu = -1, bg = !1;
    function wt() {
      {
        var e = U;
        ei === null ? ei = [e] : ei.push(e);
      }
    }
    function ee() {
      {
        var e = U;
        ei !== null && (Gu++, ei[Gu] !== e && F1(e));
      }
    }
    function sf(e) {
      e != null && !In(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", U, typeof e);
    }
    function F1(e) {
      {
        var t = $e(Lt);
        if (!wg.has(t) && (wg.add(t), ei !== null)) {
          for (var a = "", i = 30, u = 0; u <= Gu; u++) {
            for (var s = ei[u], f = u === Gu ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function Dg(e, t) {
      if (bg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", U), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, U, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!V(e[a], t[a]))
          return !1;
      return !0;
    }
    function cf(e, t, a, i, u, s) {
      ys = s, Lt = t, ei = e !== null ? e._debugHookTypes : null, Gu = -1, bg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = A, e !== null && e.memoizedState !== null ? oe.current = WE : ei !== null ? oe.current = IE : oe.current = QE;
      var f = a(i, u);
      if (cp) {
        var p = 0;
        do {
          if (cp = !1, fp = 0, p >= H1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, bg = !1, Jn = null, er = null, t.updateQueue = null, Gu = -1, oe.current = GE, f = a(i, u);
        } while (cp);
      }
      oe.current = sm, t._debugHookTypes = ei;
      var v = Jn !== null && Jn.next !== null;
      if (ys = A, Lt = null, Jn = null, er = null, U = null, ei = null, Gu = -1, e !== null && (e.flags & Cn) !== (t.flags & Cn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & qe) !== Te && g("Internal React error: Expected static flag was missing. Please notify the React team."), Kh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function ff() {
      var e = fp !== 0;
      return fp = 0, e;
    }
    function bE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & yt) !== Te ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = $o(e.lanes, a);
    }
    function DE() {
      if (oe.current = sm, Kh) {
        for (var e = Lt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Kh = !1;
      }
      ys = A, Lt = null, Jn = null, er = null, ei = null, Gu = -1, U = null, VE = !1, cp = !1, fp = 0;
    }
    function cl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return er === null ? Lt.memoizedState = er = e : er = er.next = e, er;
    }
    function ti() {
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
    function kE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function kg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = cl(), u;
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
      var f = s.dispatch = $1.bind(null, Lt, s);
      return [i.memoizedState, f];
    }
    function Og(e, t, a) {
      var i = ti(), u = i.queue;
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
          var ne = L.lane;
          if (Ql(ys, ne)) {
            if (M !== null) {
              var Se = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: vt,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null
              };
              M = M.next = Se;
            }
            if (L.hasEagerState)
              R = L.eagerState;
            else {
              var ft = L.action;
              R = e(R, ft);
            }
          } else {
            var Re = {
              lane: ne,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            };
            M === null ? (O = M = Re, x = R) : M = M.next = Re, Lt.lanes = Ye(Lt.lanes, ne), Mp(ne);
          }
          L = L.next;
        } while (L !== null && L !== y);
        M === null ? x = R : M.next = O, V(R, i.memoizedState) || Ep(), i.memoizedState = R, i.baseState = x, i.baseQueue = M, u.lastRenderedState = R;
      }
      var it = u.interleaved;
      if (it !== null) {
        var b = it;
        do {
          var z = b.lane;
          Lt.lanes = Ye(Lt.lanes, z), Mp(z), b = b.next;
        } while (b !== it);
      } else f === null && (u.lanes = A);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function Ng(e, t, a) {
      var i = ti(), u = i.queue;
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
        V(p, i.memoizedState) || Ep(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function mk(e, t, a) {
    }
    function yk(e, t, a) {
    }
    function Mg(e, t, a) {
      var i = Lt, u = cl(), s, f = gr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), of || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), of = !0);
      } else {
        if (s = t(), !of) {
          var p = t();
          V(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), of = !0);
        }
        var v = km();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Dc(v, ys) || _E(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, tm(NE.bind(null, i, m, e), [e]), i.flags |= _r, dp(qn | Sr, OE.bind(null, i, m, s, t), void 0, null), s;
    }
    function qh(e, t, a) {
      var i = Lt, u = ti(), s = t();
      if (!of) {
        var f = t();
        V(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), of = !0);
      }
      var p = u.memoizedState, v = !V(p, s);
      v && (u.memoizedState = s, Ep());
      var m = u.queue;
      if (vp(NE.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      er !== null && er.memoizedState.tag & qn) {
        i.flags |= _r, dp(qn | Sr, OE.bind(null, i, m, s, t), void 0, null);
        var y = km();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Dc(y, ys) || _E(i, t, s);
      }
      return s;
    }
    function _E(e, t, a) {
      e.flags |= wu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Lt.updateQueue;
      if (u === null)
        u = kE(), Lt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function OE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ME(t) && LE(e);
    }
    function NE(e, t, a) {
      var i = function() {
        ME(t) && LE(e);
      };
      return a(i);
    }
    function ME(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !V(a, i);
      } catch {
        return !0;
      }
    }
    function LE(e) {
      var t = ya(e, Me);
      t !== null && ar(t, e, Me, jt);
    }
    function Zh(e) {
      var t = cl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: A,
        dispatch: null,
        lastRenderedReducer: kg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Y1.bind(null, Lt, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return Og(kg);
    }
    function zg(e) {
      return Ng(kg);
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
        s = kE(), Lt.updateQueue = s, s.lastEffect = u.next = u;
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
    function Ug(e) {
      var t = cl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Jh(e) {
      var t = ti();
      return t.memoizedState;
    }
    function pp(e, t, a, i) {
      var u = cl(), s = i === void 0 ? null : i;
      Lt.flags |= e, u.memoizedState = dp(qn | t, a, void 0, s);
    }
    function em(e, t, a, i) {
      var u = ti(), s = i === void 0 ? null : i, f = void 0;
      if (Jn !== null) {
        var p = Jn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Dg(s, v)) {
            u.memoizedState = dp(t, a, f, s);
            return;
          }
        }
      }
      Lt.flags |= e, u.memoizedState = dp(qn | t, a, f, s);
    }
    function tm(e, t) {
      return (Lt.mode & yt) !== Te ? pp(Pa | _r | ec, Sr, e, t) : pp(_r | ec, Sr, e, t);
    }
    function vp(e, t) {
      return em(_r, Sr, e, t);
    }
    function Ag(e, t) {
      return pp(ot, sl, e, t);
    }
    function nm(e, t) {
      return em(ot, sl, e, t);
    }
    function jg(e, t) {
      var a = ot;
      return a |= hi, (Lt.mode & yt) !== Te && (a |= Qi), pp(a, Zn, e, t);
    }
    function rm(e, t) {
      return em(ot, Zn, e, t);
    }
    function zE(e, t) {
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
    function Hg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = ot;
      return u |= hi, (Lt.mode & yt) !== Te && (u |= Qi), pp(u, Zn, zE.bind(null, t, e), i);
    }
    function am(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return em(ot, Zn, zE.bind(null, t, e), i);
    }
    function V1(e, t) {
    }
    var im = V1;
    function Fg(e, t) {
      var a = cl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function lm(e, t) {
      var a = ti(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Dg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Vg(e, t) {
      var a = cl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function um(e, t) {
      var a = ti(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Dg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Bg(e) {
      var t = cl();
      return t.memoizedState = e, e;
    }
    function UE(e) {
      var t = ti(), a = Jn, i = a.memoizedState;
      return jE(t, i, e);
    }
    function AE(e) {
      var t = ti();
      if (Jn === null)
        return t.memoizedState = e, e;
      var a = Jn.memoizedState;
      return jE(t, a, e);
    }
    function jE(e, t, a) {
      var i = !md(ys);
      if (i) {
        if (!V(a, t)) {
          var u = Sd();
          Lt.lanes = Ye(Lt.lanes, u), Mp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Ep()), e.memoizedState = a, a;
    }
    function B1(e, t, a) {
      var i = va();
      Rn(Hv(i, Ia)), e(!0);
      var u = sp.transition;
      sp.transition = {};
      var s = sp.transition;
      sp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Rn(i), sp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Qe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = Zh(!1), t = e[0], a = e[1], i = B1.bind(null, a), u = cl();
      return u.memoizedState = i, [t, i];
    }
    function HE() {
      var e = Lg(), t = e[0], a = ti(), i = a.memoizedState;
      return [t, i];
    }
    function FE() {
      var e = zg(), t = e[0], a = ti(), i = a.memoizedState;
      return [t, i];
    }
    var VE = !1;
    function P1() {
      return VE;
    }
    function $g() {
      var e = cl(), t = km(), a = t.identifierPrefix, i;
      if (gr()) {
        var u = i1();
        i = ":" + a + "R" + u;
        var s = fp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = j1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function om() {
      var e = ti(), t = e.memoizedState;
      return t;
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
      if (BE(e))
        PE(t, u);
      else {
        var s = mE(e, t, u, i);
        if (s !== null) {
          var f = Zr();
          ar(s, e, i, f), $E(s, t, i);
        }
      }
      YE(e, i);
    }
    function Y1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ju(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (BE(e))
        PE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === A && (s === null || s.lanes === A)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = oe.current, oe.current = ki;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, V(m, v)) {
                k1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              oe.current = p;
            }
          }
        }
        var y = mE(e, t, u, i);
        if (y !== null) {
          var R = Zr();
          ar(y, e, i, R), $E(y, t, i);
        }
      }
      YE(e, i);
    }
    function BE(e) {
      var t = e.alternate;
      return e === Lt || t !== null && t === Lt;
    }
    function PE(e, t) {
      cp = Kh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function $E(e, t, a) {
      if (gd(a)) {
        var i = t.lanes;
        i = Ed(i, e.pendingLanes);
        var u = Ye(i, a);
        t.lanes = u, _c(e, u);
      }
    }
    function YE(e, t, a) {
      Lo(e, t);
    }
    var sm = {
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
    }, QE = null, IE = null, WE = null, GE = null, fl = null, ki = null, cm = null;
    {
      var Yg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, je = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      QE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", wt(), sf(t), Fg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", wt(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", wt(), sf(t), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", wt(), sf(a), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", wt(), sf(t), Ag(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", wt(), sf(t), jg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", wt(), sf(t);
          var a = oe.current;
          oe.current = fl;
          try {
            return Vg(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", wt();
          var i = oe.current;
          oe.current = fl;
          try {
            return _g(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", wt(), Ug(e);
        },
        useState: function(e) {
          U = "useState", wt();
          var t = oe.current;
          oe.current = fl;
          try {
            return Zh(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", wt(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", wt(), Bg(e);
        },
        useTransition: function() {
          return U = "useTransition", wt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", wt(), Mg(e, t, a);
        },
        useId: function() {
          return U = "useId", wt(), $g();
        },
        unstable_isNewReconciler: W
      }, IE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ee(), Fg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ee(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ee(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ee(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ee(), Ag(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ee(), jg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ee();
          var a = oe.current;
          oe.current = fl;
          try {
            return Vg(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ee();
          var i = oe.current;
          oe.current = fl;
          try {
            return _g(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ee(), Ug(e);
        },
        useState: function(e) {
          U = "useState", ee();
          var t = oe.current;
          oe.current = fl;
          try {
            return Zh(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ee(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ee(), Bg(e);
        },
        useTransition: function() {
          return U = "useTransition", ee(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", ee(), Mg(e, t, a);
        },
        useId: function() {
          return U = "useId", ee(), $g();
        },
        unstable_isNewReconciler: W
      }, WE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ee(), lm(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ee(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ee(), vp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ee(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ee(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ee(), rm(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ee();
          var a = oe.current;
          oe.current = ki;
          try {
            return um(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ee();
          var i = oe.current;
          oe.current = ki;
          try {
            return Og(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ee(), Jh();
        },
        useState: function(e) {
          U = "useState", ee();
          var t = oe.current;
          oe.current = ki;
          try {
            return Lg(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ee(), im();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ee(), UE(e);
        },
        useTransition: function() {
          return U = "useTransition", ee(), HE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", ee(), qh(e, t);
        },
        useId: function() {
          return U = "useId", ee(), om();
        },
        unstable_isNewReconciler: W
      }, GE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", ee(), lm(e, t);
        },
        useContext: function(e) {
          return U = "useContext", ee(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", ee(), vp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", ee(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", ee(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", ee(), rm(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", ee();
          var a = oe.current;
          oe.current = cm;
          try {
            return um(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", ee();
          var i = oe.current;
          oe.current = cm;
          try {
            return Ng(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", ee(), Jh();
        },
        useState: function(e) {
          U = "useState", ee();
          var t = oe.current;
          oe.current = cm;
          try {
            return zg(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", ee(), im();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", ee(), AE(e);
        },
        useTransition: function() {
          return U = "useTransition", ee(), FE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", ee(), qh(e, t);
        },
        useId: function() {
          return U = "useId", ee(), om();
        },
        unstable_isNewReconciler: W
      }, fl = {
        readContext: function(e) {
          return Yg(), $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", je(), wt(), Fg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", je(), wt(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", je(), wt(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", je(), wt(), Hg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", je(), wt(), Ag(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", je(), wt(), jg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", je(), wt();
          var a = oe.current;
          oe.current = fl;
          try {
            return Vg(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", je(), wt();
          var i = oe.current;
          oe.current = fl;
          try {
            return _g(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", je(), wt(), Ug(e);
        },
        useState: function(e) {
          U = "useState", je(), wt();
          var t = oe.current;
          oe.current = fl;
          try {
            return Zh(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", je(), wt(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", je(), wt(), Bg(e);
        },
        useTransition: function() {
          return U = "useTransition", je(), wt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", je(), wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", je(), wt(), Mg(e, t, a);
        },
        useId: function() {
          return U = "useId", je(), wt(), $g();
        },
        unstable_isNewReconciler: W
      }, ki = {
        readContext: function(e) {
          return Yg(), $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", je(), ee(), lm(e, t);
        },
        useContext: function(e) {
          return U = "useContext", je(), ee(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", je(), ee(), vp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", je(), ee(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", je(), ee(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", je(), ee(), rm(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", je(), ee();
          var a = oe.current;
          oe.current = ki;
          try {
            return um(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", je(), ee();
          var i = oe.current;
          oe.current = ki;
          try {
            return Og(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", je(), ee(), Jh();
        },
        useState: function(e) {
          U = "useState", je(), ee();
          var t = oe.current;
          oe.current = ki;
          try {
            return Lg(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", je(), ee(), im();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", je(), ee(), UE(e);
        },
        useTransition: function() {
          return U = "useTransition", je(), ee(), HE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", je(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", je(), ee(), qh(e, t);
        },
        useId: function() {
          return U = "useId", je(), ee(), om();
        },
        unstable_isNewReconciler: W
      }, cm = {
        readContext: function(e) {
          return Yg(), $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", je(), ee(), lm(e, t);
        },
        useContext: function(e) {
          return U = "useContext", je(), ee(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", je(), ee(), vp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", je(), ee(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", je(), ee(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", je(), ee(), rm(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", je(), ee();
          var a = oe.current;
          oe.current = ki;
          try {
            return um(e, t);
          } finally {
            oe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", je(), ee();
          var i = oe.current;
          oe.current = ki;
          try {
            return Ng(e, t, a);
          } finally {
            oe.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", je(), ee(), Jh();
        },
        useState: function(e) {
          U = "useState", je(), ee();
          var t = oe.current;
          oe.current = ki;
          try {
            return zg(e);
          } finally {
            oe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", je(), ee(), im();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", je(), ee(), AE(e);
        },
        useTransition: function() {
          return U = "useTransition", je(), ee(), FE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", je(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", je(), ee(), qh(e, t);
        },
        useId: function() {
          return U = "useId", je(), ee(), om();
        },
        unstable_isNewReconciler: W
      };
    }
    var Xu = q.unstable_now, XE = 0, fm = -1, hp = -1, dm = -1, Qg = !1, pm = !1;
    function KE() {
      return Qg;
    }
    function Q1() {
      pm = !0;
    }
    function I1() {
      Qg = !1, pm = !1;
    }
    function W1() {
      Qg = pm, pm = !1;
    }
    function qE() {
      return XE;
    }
    function ZE() {
      XE = Xu();
    }
    function Ig(e) {
      hp = Xu(), e.actualStartTime < 0 && (e.actualStartTime = Xu());
    }
    function JE(e) {
      hp = -1;
    }
    function vm(e, t) {
      if (hp >= 0) {
        var a = Xu() - hp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), hp = -1;
      }
    }
    function dl(e) {
      if (fm >= 0) {
        var t = Xu() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case G:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Je:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Wg(e) {
      if (dm >= 0) {
        var t = Xu() - dm;
        dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case G:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Je:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function pl() {
      fm = Xu();
    }
    function Gg() {
      dm = Xu();
    }
    function Xg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function _i(e, t) {
      if (e && e.defaultProps) {
        var a = Ke({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Kg = {}, qg, Zg, Jg, eS, tS, eC, hm, nS, rS, aS, mp;
    {
      qg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), mp = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      hm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
        if (t === void 0) {
          var a = kt(e) || "Component";
          tS.has(a) || (tS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Kg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Kg);
    }
    function iS(e, t, a, i) {
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
        eC(t, s);
      }
      var f = s == null ? u : Ke({}, u, s);
      if (e.memoizedState = f, e.lanes === A) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var lS = {
      isMounted: xv,
      enqueueSetState: function(e, t, a) {
        var i = Ru(e), u = Zr(), s = Ju(i), f = ru(u, s);
        f.payload = t, a != null && (hm(a, "setState"), f.callback = a);
        var p = Qu(i, f, s);
        p !== null && (ar(p, i, s, u), Yh(p, i, s)), Lo(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ru(e), u = Zr(), s = Ju(i), f = ru(u, s);
        f.tag = gE, f.payload = t, a != null && (hm(a, "replaceState"), f.callback = a);
        var p = Qu(i, f, s);
        p !== null && (ar(p, i, s, u), Yh(p, i, s)), Lo(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ru(e), i = Zr(), u = Ju(a), s = ru(i, u);
        s.tag = Bh, t != null && (hm(t, "forceUpdate"), s.callback = t);
        var f = Qu(a, s, u);
        f !== null && (ar(f, a, u, i), Yh(f, a, u)), uc(a, u);
      }
    };
    function nC(e, t, a, i, u, s, f) {
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
    function G1(e, t, a) {
      var i = e.stateNode;
      {
        var u = kt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !mp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Mt) === Te && (mp.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !mp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Mt) === Te && (mp.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !rS.has(t) && (rS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", kt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Jg.has(t) && (Jg.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", kt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || In(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function rC(e, t) {
      t.updater = lS, e.stateNode = t, Nl(t, e), t._reactInternalInstance = Kg;
    }
    function aC(e, t, a) {
      var i = !1, u = La, s = La, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === E && f._context === void 0
        );
        if (!p && !aS.has(t)) {
          aS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === ji ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", kt(t) || "Component", v);
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
      rC(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var x = kt(t) || "Component";
          Zg.has(x) || (Zg.add(x), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, y.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var O = null, M = null, L = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? O = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (O = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? M = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (M = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? L = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (L = "UNSAFE_componentWillUpdate"), O !== null || M !== null || L !== null) {
            var ne = kt(t) || "Component", Re = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            eS.has(ne) || (eS.add(ne), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ne, Re, O !== null ? `
  ` + O : "", M !== null ? `
  ` + M : "", L !== null ? `
  ` + L : ""));
          }
        }
      }
      return i && W0(e, u, s), y;
    }
    function X1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", $e(e) || "Component"), lS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = $e(e) || "Component";
          qg.has(s) || (qg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        lS.enqueueReplaceState(t, t.state, null);
      }
    }
    function uS(e, t, a, i) {
      G1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, mg(e);
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
          nS.has(p) || (nS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Mt && bi.recordLegacyContextWarning(e, u), bi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (iS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (X1(e, u), Qh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = ot;
        m |= hi, (e.mode & yt) !== Te && (m |= Qi), e.flags |= m;
      }
    }
    function K1(e, t, a, i) {
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
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && iC(e, u, a, v), EE();
      var x = e.memoizedState, O = u.state = x;
      if (Qh(e, a, u, i), O = e.memoizedState, s === a && x === O && !bh() && !Ih()) {
        if (typeof u.componentDidMount == "function") {
          var M = ot;
          M |= hi, (e.mode & yt) !== Te && (M |= Qi), e.flags |= M;
        }
        return !1;
      }
      typeof y == "function" && (iS(e, t, y, a), O = e.memoizedState);
      var L = Ih() || nC(e, t, s, a, x, O, v);
      if (L) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ne = ot;
          ne |= hi, (e.mode & yt) !== Te && (ne |= Qi), e.flags |= ne;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Re = ot;
          Re |= hi, (e.mode & yt) !== Te && (Re |= Qi), e.flags |= Re;
        }
        e.memoizedProps = a, e.memoizedState = O;
      }
      return u.props = a, u.state = O, u.context = v, L;
    }
    function q1(e, t, a, i, u) {
      var s = t.stateNode;
      SE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : _i(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, R = La;
      if (typeof y == "object" && y !== null)
        R = $n(y);
      else {
        var x = Kc(t, a, !0);
        R = qc(t, x);
      }
      var O = a.getDerivedStateFromProps, M = typeof O == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !M && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && iC(t, s, i, R), EE();
      var L = t.memoizedState, ne = s.state = L;
      if (Qh(t, i, s, u), ne = t.memoizedState, f === v && L === ne && !bh() && !Ih() && !ge)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= ot), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Nn), !1;
      typeof O == "function" && (iS(t, a, O, i), ne = t.memoizedState);
      var Re = Ih() || nC(t, a, p, i, L, ne, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ge;
      return Re ? (!M && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ne, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ne, R)), typeof s.componentDidUpdate == "function" && (t.flags |= ot), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Nn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= ot), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Nn), t.memoizedProps = i, t.memoizedState = ne), s.props = i, s.state = ne, s.context = R, Re;
    }
    function gs(e, t) {
      return {
        value: e,
        source: t,
        stack: ks(t),
        digest: null
      };
    }
    function oS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Z1(e, t) {
      return !0;
    }
    function sS(e, t) {
      try {
        var a = Z1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === Z)
            return;
          console.error(i);
        }
        var p = u ? $e(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === G)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = $e(e) || "Anonymous";
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
    var J1 = typeof WeakMap == "function" ? WeakMap : Map;
    function lC(e, t, a) {
      var i = ru(jt, a);
      i.tag = vg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Qb(u), sS(e, t);
      }, i;
    }
    function cS(e, t, a) {
      var i = ru(jt, a);
      i.tag = vg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          yx(e), sS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        yx(e), sS(e, t), typeof u != "function" && $b(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Ur(e.lanes, Me) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", $e(e) || "Unknown"));
      }), i;
    }
    function uC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new J1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Ib.bind(null, e, t, a);
        Lr && Lp(e, a), t.then(s, s);
      }
    }
    function ew(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function tw(e, t) {
      var a = e.tag;
      if ((e.mode & qe) === Te && (a === J || a === De || a === Pe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oC(e) {
      var t = e;
      do {
        if (t.tag === Ae && U1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, u) {
      if ((e.mode & qe) === Te) {
        if (e === t)
          e.flags |= Fn;
        else {
          if (e.flags |= Ee, a.flags |= Js, a.flags &= -52805, a.tag === Z) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ut;
            else {
              var f = ru(jt, Me);
              f.tag = Bh, Qu(a, f, Me);
            }
          }
          a.lanes = Ye(a.lanes, Me);
        }
        return e;
      }
      return e.flags |= Fn, e.lanes = u, e;
    }
    function nw(e, t, a, i, u) {
      if (a.flags |= Do, Lr && Lp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        tw(a), gr() && a.mode & qe && eE();
        var f = oC(t);
        if (f !== null) {
          f.flags &= ~lr, sC(f, t, a, e, u), f.mode & qe && uC(e, s, u), ew(f, e, s);
          return;
        } else {
          if (!Ov(u)) {
            uC(e, s, u), $S();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (gr() && a.mode & qe) {
        eE();
        var v = oC(t);
        if (v !== null) {
          (v.flags & Fn) === xe && (v.flags |= lr), sC(v, t, a, e, u), ng(gs(i, a));
          return;
        }
      }
      i = gs(i, a), Ub(i);
      var m = t;
      do {
        switch (m.tag) {
          case G: {
            var y = i;
            m.flags |= Fn;
            var R = Po(u);
            m.lanes = Ye(m.lanes, R);
            var x = lC(m, y, R);
            yg(m, x);
            return;
          }
          case Z:
            var O = i, M = m.type, L = m.stateNode;
            if ((m.flags & Ee) === xe && (typeof M.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && !ox(L))) {
              m.flags |= Fn;
              var ne = Po(u);
              m.lanes = Ye(m.lanes, ne);
              var Re = cS(m, O, ne);
              yg(m, Re);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function rw() {
      return null;
    }
    var yp = _.ReactCurrentOwner, Oi = !1, fS, gp, dS, pS, vS, Ss, hS, mm, Sp;
    fS = {}, gp = {}, dS = {}, pS = {}, vS = {}, Ss = !1, hS = {}, mm = {}, Sp = {};
    function Kr(e, t, a, i) {
      e === null ? t.child = dE(t, null, a, i) : t.child = tf(t, e.child, a, i);
    }
    function aw(e, t, a, i) {
      t.child = tf(t, e.child, null, i), t.child = tf(t, null, a, i);
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ri(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      rf(t, u), Ir(t);
      {
        if (yp.current = t, Qn(!0), v = cf(e, t, f, i, p, u), m = ff(), t.mode & Mt) {
          qt(!0);
          try {
            v = cf(e, t, f, i, p, u), m = ff();
          } finally {
            qt(!1);
          }
        }
        Qn(!1);
      }
      return Wr(), e !== null && !Oi ? (bE(e, t, u), au(e, t, u)) : (gr() && m && Ky(t), t.flags |= ka, Kr(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (sD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Sf(s), t.tag = Pe, t.type = f, gS(t, s), dC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ri(
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
        var m = e0(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var y = a.type, R = y.propTypes;
        R && Ri(
          R,
          i,
          // Resolved props
          "prop",
          kt(y)
        );
      }
      var x = e.child, O = RS(e, u);
      if (!O) {
        var M = x.memoizedProps, L = a.compare;
        if (L = L !== null ? L : pe, L(M, i) && e.ref === t.ref)
          return au(e, t, u);
      }
      t.flags |= ka;
      var ne = Rs(x, i);
      return ne.ref = t.ref, ne.return = t, t.child = ne, ne;
    }
    function dC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Be) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && Ri(
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
          if (Oi = !1, t.pendingProps = i = y, RS(e, u))
            (e.flags & Js) !== xe && (Oi = !0);
          else return t.lanes = e.lanes, au(e, t, u);
      }
      return mS(e, t, a, i, u);
    }
    function pC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || K)
        if ((t.mode & qe) === Te) {
          var f = {
            baseLanes: A,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, _m(t, a);
        } else if (Ur(a, zr)) {
          var R = {
            baseLanes: A,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var x = s !== null ? s.baseLanes : a;
          _m(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Ye(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = zr;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, _m(t, v), null;
        }
      else {
        var O;
        s !== null ? (O = Ye(s.baseLanes, a), t.memoizedState = null) : O = a, _m(t, O);
      }
      return Kr(e, t, u, a), t.child;
    }
    function iw(e, t, a) {
      var i = t.pendingProps;
      return Kr(e, t, i, a), t.child;
    }
    function lw(e, t, a) {
      var i = t.pendingProps.children;
      return Kr(e, t, i, a), t.child;
    }
    function uw(e, t, a) {
      {
        t.flags |= ot;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Kr(e, t, s, a), t.child;
    }
    function vC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ln, t.flags |= bu);
    }
    function mS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ri(
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
      rf(t, u), Ir(t);
      {
        if (yp.current = t, Qn(!0), v = cf(e, t, a, i, f, u), m = ff(), t.mode & Mt) {
          qt(!0);
          try {
            v = cf(e, t, a, i, f, u), m = ff();
          } finally {
            qt(!1);
          }
        }
        Qn(!1);
      }
      return Wr(), e !== null && !Oi ? (bE(e, t, u), au(e, t, u)) : (gr() && m && Ky(t), t.flags |= ka, Kr(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      {
        switch (RD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ee, t.flags |= Fn;
            var m = new Error("Simulated error coming from DevTools"), y = Po(u);
            t.lanes = Ye(t.lanes, y);
            var R = cS(t, gs(m, t), y);
            yg(t, R);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && Ri(
            x,
            i,
            // Resolved props
            "prop",
            kt(a)
          );
        }
      }
      var O;
      ol(a) ? (O = !0, kh(t)) : O = !1, rf(t, u);
      var M = t.stateNode, L;
      M === null ? (gm(e, t), aC(t, a, i), uS(t, a, i, u), L = !0) : e === null ? L = K1(t, a, i, u) : L = q1(e, t, a, i, u);
      var ne = yS(e, t, a, L, O, u);
      {
        var Re = t.stateNode;
        L && Re.props !== i && (Ss || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", $e(t) || "a component"), Ss = !0);
      }
      return ne;
    }
    function yS(e, t, a, i, u, s) {
      vC(e, t);
      var f = (t.flags & Ee) !== xe;
      if (!i && !f)
        return u && K0(t, a, !1), au(e, t, s);
      var p = t.stateNode;
      yp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, JE();
      else {
        Ir(t);
        {
          if (Qn(!0), v = p.render(), t.mode & Mt) {
            qt(!0);
            try {
              p.render();
            } finally {
              qt(!1);
            }
          }
          Qn(!1);
        }
        Wr();
      }
      return t.flags |= ka, e !== null && f ? aw(e, t, v, s) : Kr(e, t, v, s), t.memoizedState = p.state, u && K0(t, a, !0), t.child;
    }
    function mC(e) {
      var t = e.stateNode;
      t.pendingContext ? G0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G0(e, t.context, !1), gg(e, t.containerInfo);
    }
    function ow(e, t, a) {
      if (mC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      SE(e, t), Qh(t, i, null, a);
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
          return yC(e, t, p, a, y);
        } else if (p !== s) {
          var R = gs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yC(e, t, p, a, R);
        } else {
          f1(t);
          var x = dE(t, null, p, a);
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
    function yC(e, t, a, i, u) {
      return ef(), ng(u), t.flags |= lr, Kr(e, t, a, i), t.child;
    }
    function sw(e, t, a) {
      TE(t), e === null && tg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ay(i, u);
      return p ? f = null : s !== null && Ay(i, s) && (t.flags |= oa), vC(e, t), Kr(e, t, f, a), t.child;
    }
    function cw(e, t) {
      return e === null && tg(t), null;
    }
    function fw(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = cD(v), y = _i(v, u), R;
      switch (m) {
        case J:
          return gS(t, v), t.type = v = Sf(v), R = mS(null, t, v, y, i), R;
        case Z:
          return t.type = v = GS(v), R = hC(null, t, v, y, i), R;
        case De:
          return t.type = v = XS(v), R = cC(null, t, v, y, i), R;
        case Tt: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && Ri(
              x,
              y,
              // Resolved for outer only
              "prop",
              kt(v)
            );
          }
          return R = fC(
            null,
            t,
            v,
            _i(v.type, y),
            // The inner type can have defaults too
            i
          ), R;
        }
      }
      var O = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Be && (O = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + O));
    }
    function dw(e, t, a, i, u) {
      gm(e, t), t.tag = Z;
      var s;
      return ol(a) ? (s = !0, kh(t)) : s = !1, rf(t, u), aC(t, a, i), uS(t, a, i, u), yS(null, t, a, !0, s, u);
    }
    function pw(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Kc(t, a, !1);
        s = qc(t, f);
      }
      rf(t, i);
      var p, v;
      Ir(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = kt(a) || "Unknown";
          fS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), fS[m] = !0);
        }
        t.mode & Mt && bi.recordLegacyContextWarning(t, null), Qn(!0), yp.current = t, p = cf(null, t, a, u, s, i), v = ff(), Qn(!1);
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
        t.tag = Z, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return ol(a) ? (x = !0, kh(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, mg(t), rC(t, p), uS(t, a, u, i), yS(null, t, a, !0, x, i);
      } else {
        if (t.tag = J, t.mode & Mt) {
          qt(!0);
          try {
            p = cf(null, t, a, u, s, i), v = ff();
          } finally {
            qt(!1);
          }
        }
        return gr() && v && Ky(t), Kr(null, t, p, i), gS(t, a), t.child;
      }
    }
    function gS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = aa();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), vS[u] || (vS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = kt(t) || "Unknown";
          Sp[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Sp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = kt(t) || "Unknown";
          pS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), pS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = kt(t) || "Unknown";
          dS[v] || (g("%s: Function components do not support contextType.", v), dS[v] = !0);
        }
      }
    }
    var SS = {
      dehydrated: null,
      treeContext: null,
      retryLane: vt
    };
    function ES(e) {
      return {
        baseLanes: e,
        cachePool: rw(),
        transitions: null
      };
    }
    function vw(e, t) {
      var a = null;
      return {
        baseLanes: Ye(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function hw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Cg(e, op);
    }
    function mw(e, t) {
      return $o(e.childLanes, t);
    }
    function gC(e, t, a) {
      var i = t.pendingProps;
      wD(t) && (t.flags |= Ee);
      var u = Di.current, s = !1, f = (t.flags & Ee) !== xe;
      if (f || hw(u, e) ? (s = !0, t.flags &= ~Ee) : (e === null || e.memoizedState !== null) && (u = z1(u, wE)), u = lf(u), Wu(t, u), e === null) {
        tg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Cw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var R = yw(t, m, y, a), x = t.child;
          return x.memoizedState = ES(a), t.memoizedState = SS, R;
        } else
          return CS(t, m);
      } else {
        var O = e.memoizedState;
        if (O !== null) {
          var M = O.dehydrated;
          if (M !== null)
            return xw(e, t, f, i, M, O, a);
        }
        if (s) {
          var L = i.fallback, ne = i.children, Re = Sw(e, t, ne, L, a), Se = t.child, ft = e.child.memoizedState;
          return Se.memoizedState = ft === null ? ES(a) : vw(ft, a), Se.childLanes = mw(e, a), t.memoizedState = SS, Re;
        } else {
          var it = i.children, b = gw(e, t, it, a);
          return t.memoizedState = null, b;
        }
      }
    }
    function CS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = xS(u, i);
      return s.return = e, e.child = s, s;
    }
    function yw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & qe) === Te && s !== null ? (p = s, p.childLanes = A, p.pendingProps = f, e.mode & mt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = to(a, u, i, null)) : (p = xS(f, u), v = to(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function xS(e, t, a) {
      return Sx(e, t, A, null);
    }
    function SC(e, t) {
      return Rs(e, t);
    }
    function gw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = SC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & qe) === Te && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ua) : p.push(s);
      }
      return t.child = f, f;
    }
    function Sw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & qe) === Te && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = A, m.pendingProps = v, t.mode & mt && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = SC(f, v), m.subtreeFlags = f.subtreeFlags & Cn;
      var R;
      return p !== null ? R = Rs(p, i) : (R = to(i, s, u, null), R.flags |= Kt), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function ym(e, t, a, i) {
      i !== null && ng(i), tf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = CS(t, s);
      return f.flags |= Kt, t.memoizedState = null, f;
    }
    function Ew(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = xS(f, s), v = to(i, s, u, null);
      return v.flags |= Kt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & qe) !== Te && tf(t, e.child, null, u), v;
    }
    function Cw(e, t, a) {
      return (e.mode & qe) === Te ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Me) : Vy(t) ? e.lanes = ur : e.lanes = zr, null;
    }
    function xw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & lr) {
          t.flags &= ~lr;
          var b = oS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ym(e, t, f, b);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ee, null;
          var z = i.children, D = i.fallback, $ = Ew(e, t, z, D, f), se = t.child;
          return se.memoizedState = ES(f), t.memoizedState = SS, $;
        }
      else {
        if (s1(), (t.mode & qe) === Te)
          return ym(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vy(u)) {
          var p, v, m;
          {
            var y = bR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = oS(R, p, m);
          return ym(e, t, f, x);
        }
        var O = Ur(f, e.childLanes);
        if (Oi || O) {
          var M = km();
          if (M !== null) {
            var L = xd(M, f);
            if (L !== vt && L !== s.retryLane) {
              s.retryLane = L;
              var ne = jt;
              ya(e, L), ar(M, e, L, ne);
            }
          }
          $S();
          var Re = oS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ym(e, t, f, Re);
        } else if (P0(u)) {
          t.flags |= Ee, t.child = e.child;
          var Se = Wb.bind(null, e);
          return DR(u, Se), null;
        } else {
          d1(t, u, s.treeContext);
          var ft = i.children, it = CS(t, ft);
          return it.flags |= Or, it;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = Ye(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ye(i.lanes, t)), dg(e.return, t, a);
    }
    function Tw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ae) {
          var u = i.memoizedState;
          u !== null && EC(i, a, e);
        } else if (i.tag === Wt)
          EC(i, a, e);
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
    function Rw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Xh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function ww(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !hS[e])
        if (hS[e] = !0, typeof e == "string")
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
    function bw(e, t) {
      e !== void 0 && !mm[e] && (e !== "collapsed" && e !== "hidden" ? (mm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (mm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CC(e, t) {
      {
        var a = In(e), i = !a && typeof We(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Dw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (In(e)) {
          for (var a = 0; a < e.length; a++)
            if (!CC(e[a], a))
              return;
        } else {
          var i = We(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!CC(s.value, f))
                  return;
                f++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function TS(e, t, a, i, u) {
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
    function xC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      ww(u), bw(s, u), Dw(f, u), Kr(e, t, f, a);
      var p = Di.current, v = Cg(p, op);
      if (v)
        p = xg(p, op), t.flags |= Ee;
      else {
        var m = e !== null && (e.flags & Ee) !== xe;
        m && Tw(t, t.child, a), p = lf(p);
      }
      if (Wu(t, p), (t.mode & qe) === Te)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = Rw(t.child), R;
            y === null ? (R = t.child, t.child = null) : (R = y.sibling, y.sibling = null), TS(
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
              if (M !== null && Xh(M) === null) {
                t.child = O;
                break;
              }
              var L = O.sibling;
              O.sibling = x, x = O, O = L;
            }
            TS(
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
            TS(
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
    function kw(e, t, a) {
      gg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = tf(t, null, i, a) : Kr(e, t, i, a), t.child;
    }
    var TC = !1;
    function _w(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TC || (TC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ri(v, s, "prop", "Context.Provider");
      }
      if (hE(t, u, p), f !== null) {
        var m = f.value;
        if (V(m, p)) {
          if (f.children === s.children && !bh())
            return au(e, t, a);
        } else
          w1(t, u, a);
      }
      var y = s.children;
      return Kr(e, t, y, a), t.child;
    }
    var RC = !1;
    function Ow(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (RC || (RC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), rf(t, a);
      var f = $n(i);
      Ir(t);
      var p;
      return yp.current = t, Qn(!0), p = s(f), Qn(!1), Wr(), t.flags |= ka, Kr(e, t, p, a), t.child;
    }
    function Ep() {
      Oi = !0;
    }
    function gm(e, t) {
      (t.mode & qe) === Te && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Kt);
    }
    function au(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), JE(), Mp(t.lanes), Ur(a, t.childLanes) ? (T1(e, t), t.child) : null;
    }
    function Nw(e, t, a) {
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
    function RS(e, t) {
      var a = e.lanes;
      return !!Ur(a, t);
    }
    function Mw(e, t, a) {
      switch (t.tag) {
        case G:
          mC(t), t.stateNode, ef();
          break;
        case X:
          TE(t);
          break;
        case Z: {
          var i = t.type;
          ol(i) && kh(t);
          break;
        }
        case fe:
          gg(t, t.stateNode.containerInfo);
          break;
        case nt: {
          var u = t.memoizedProps.value, s = t.type._context;
          hE(t, s, u);
          break;
        }
        case Je:
          {
            var f = Ur(a, t.childLanes);
            f && (t.flags |= ot);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ae: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Wu(t, lf(Di.current)), t.flags |= Ee, null;
            var m = t.child, y = m.childLanes;
            if (Ur(a, y))
              return gC(e, t, a);
            Wu(t, lf(Di.current));
            var R = au(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            Wu(t, lf(Di.current));
          break;
        }
        case Wt: {
          var x = (e.flags & Ee) !== xe, O = Ur(a, t.childLanes);
          if (x) {
            if (O)
              return xC(e, t, a);
            t.flags |= Ee;
          }
          var M = t.memoizedState;
          if (M !== null && (M.rendering = null, M.tail = null, M.lastEffect = null), Wu(t, Di.current), O)
            break;
          return null;
        }
        case I:
        case me:
          return t.lanes = A, pC(e, t, a);
      }
      return au(e, t, a);
    }
    function wC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Nw(e, t, e0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Oi = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ee) === xe)
            return Oi = !1, Mw(e, t, a);
          (e.flags & Js) !== xe ? Oi = !0 : Oi = !1;
        }
      } else if (Oi = !1, gr() && r1(t)) {
        var f = t.index, p = a1();
        J0(t, p, f);
      }
      switch (t.lanes = A, t.tag) {
        case Oe:
          return pw(e, t, t.type, a);
        case en: {
          var v = t.elementType;
          return fw(e, t, v, a);
        }
        case J: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : _i(m, y);
          return mS(e, t, m, R, a);
        }
        case Z: {
          var x = t.type, O = t.pendingProps, M = t.elementType === x ? O : _i(x, O);
          return hC(e, t, x, M, a);
        }
        case G:
          return ow(e, t, a);
        case X:
          return sw(e, t, a);
        case re:
          return cw(e, t);
        case Ae:
          return gC(e, t, a);
        case fe:
          return kw(e, t, a);
        case De: {
          var L = t.type, ne = t.pendingProps, Re = t.elementType === L ? ne : _i(L, ne);
          return cC(e, t, L, Re, a);
        }
        case Ce:
          return iw(e, t, a);
        case Ne:
          return lw(e, t, a);
        case Je:
          return uw(e, t, a);
        case nt:
          return _w(e, t, a);
        case tt:
          return Ow(e, t, a);
        case Tt: {
          var Se = t.type, ft = t.pendingProps, it = _i(Se, ft);
          if (t.type !== t.elementType) {
            var b = Se.propTypes;
            b && Ri(
              b,
              it,
              // Resolved for outer only
              "prop",
              kt(Se)
            );
          }
          return it = _i(Se.type, it), fC(e, t, Se, it, a);
        }
        case Pe:
          return dC(e, t, t.type, t.pendingProps, a);
        case Ut: {
          var z = t.type, D = t.pendingProps, $ = t.elementType === z ? D : _i(z, D);
          return dw(e, t, z, $, a);
        }
        case Wt:
          return xC(e, t, a);
        case Y:
          break;
        case I:
          return pC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function df(e) {
      e.flags |= ot;
    }
    function bC(e) {
      e.flags |= ln, e.flags |= bu;
    }
    var DC, wS, kC, _C;
    DC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === X || u.tag === re)
          eR(e, u.stateNode);
        else if (u.tag !== fe) {
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
    }, wS = function(e, t) {
    }, kC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Sg(), v = nR(f, a, s, i, u, p);
        t.updateQueue = v, v && df(t);
      }
    }, _C = function(e, t, a, i) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = A, i = xe;
      if (t) {
        if ((e.mode & mt) !== Te) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Ye(a, Ye(m.lanes, m.childLanes)), i |= m.subtreeFlags & Cn, i |= m.flags & Cn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Ye(a, Ye(y.lanes, y.childLanes)), i |= y.subtreeFlags & Cn, i |= y.flags & Cn, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & mt) !== Te) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ye(a, Ye(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ye(a, Ye(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Lw(e, t, a) {
      if (y1() && (t.mode & qe) !== Te && (t.flags & Ee) === xe)
        return lE(t), ef(), t.flags |= lr | Do | Fn, !1;
      var i = Lh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (h1(t), Er(t), (t.mode & mt) !== Te) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (ef(), (t.flags & Ee) === xe && (t.memoizedState = null), t.flags |= ot, Er(t), (t.mode & mt) !== Te) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return uE(), !0;
    }
    function OC(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case Oe:
        case en:
        case Pe:
        case J:
        case De:
        case Ce:
        case Ne:
        case Je:
        case tt:
        case Tt:
          return Er(t), null;
        case Z: {
          var u = t.type;
          return ol(u) && Dh(t), Er(t), null;
        }
        case G: {
          var s = t.stateNode;
          if (af(t), Wy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Lh(t);
            if (f)
              df(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & lr) !== xe) && (t.flags |= Nn, uE());
            }
          }
          return wS(e, t), Er(t), null;
        }
        case X: {
          Eg(t);
          var v = xE(), m = t.type;
          if (e !== null && t.stateNode != null)
            kC(e, t, m, i, v), e.ref !== t.ref && bC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Er(t), null;
            }
            var y = Sg(), R = Lh(t);
            if (R)
              p1(t, v, y) && df(t);
            else {
              var x = JT(m, i, v, y, t);
              DC(x, t, !1, !1), t.stateNode = x, tR(x, m, i, v) && df(t);
            }
            t.ref !== null && bC(t);
          }
          return Er(t), null;
        }
        case re: {
          var O = i;
          if (e && t.stateNode != null) {
            var M = e.memoizedProps;
            _C(e, t, M, O);
          } else {
            if (typeof O != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var L = xE(), ne = Sg(), Re = Lh(t);
            Re ? v1(t) && df(t) : t.stateNode = rR(O, L, ne, t);
          }
          return Er(t), null;
        }
        case Ae: {
          uf(t);
          var Se = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var ft = Lw(e, t, Se);
            if (!ft)
              return t.flags & Fn ? t : null;
          }
          if ((t.flags & Ee) !== xe)
            return t.lanes = a, (t.mode & mt) !== Te && Xg(t), t;
          var it = Se !== null, b = e !== null && e.memoizedState !== null;
          if (it !== b && it) {
            var z = t.child;
            if (z.flags |= En, (t.mode & qe) !== Te) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              D || Cg(Di.current, wE) ? zb() : $S();
            }
          }
          var $ = t.updateQueue;
          if ($ !== null && (t.flags |= ot), Er(t), (t.mode & mt) !== Te && it) {
            var se = t.child;
            se !== null && (t.treeBaseDuration -= se.treeBaseDuration);
          }
          return null;
        }
        case fe:
          return af(t), wS(e, t), e === null && KR(t.stateNode.containerInfo), Er(t), null;
        case nt:
          var le = t.type._context;
          return fg(le, t), Er(t), null;
        case Ut: {
          var Le = t.type;
          return ol(Le) && Dh(t), Er(t), null;
        }
        case Wt: {
          uf(t);
          var He = t.memoizedState;
          if (He === null)
            return Er(t), null;
          var zt = (t.flags & Ee) !== xe, St = He.rendering;
          if (St === null)
            if (zt)
              Cp(He, !1);
            else {
              var zn = Ab() && (e === null || (e.flags & Ee) === xe);
              if (!zn)
                for (var Et = t.child; Et !== null; ) {
                  var Dn = Xh(Et);
                  if (Dn !== null) {
                    zt = !0, t.flags |= Ee, Cp(He, !1);
                    var Pr = Dn.updateQueue;
                    return Pr !== null && (t.updateQueue = Pr, t.flags |= ot), t.subtreeFlags = xe, R1(t, a), Wu(t, xg(Di.current, op)), t.child;
                  }
                  Et = Et.sibling;
                }
              He.tail !== null && Mn() > qC() && (t.flags |= Ee, zt = !0, Cp(He, !1), t.lanes = pd);
            }
          else {
            if (!zt) {
              var wr = Xh(St);
              if (wr !== null) {
                t.flags |= Ee, zt = !0;
                var Ua = wr.updateQueue;
                if (Ua !== null && (t.updateQueue = Ua, t.flags |= ot), Cp(He, !0), He.tail === null && He.tailMode === "hidden" && !St.alternate && !gr())
                  return Er(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Mn() * 2 - He.renderingStartTime > qC() && a !== zr && (t.flags |= Ee, zt = !0, Cp(He, !1), t.lanes = pd);
            }
            if (He.isBackwards)
              St.sibling = t.child, t.child = St;
            else {
              var Jr = He.last;
              Jr !== null ? Jr.sibling = St : t.child = St, He.last = St;
            }
          }
          if (He.tail !== null) {
            var ea = He.tail;
            He.rendering = ea, He.tail = ea.sibling, He.renderingStartTime = Mn(), ea.sibling = null;
            var $r = Di.current;
            return zt ? $r = xg($r, op) : $r = lf($r), Wu(t, $r), ea;
          }
          return Er(t), null;
        }
        case Y:
          break;
        case I:
        case me: {
          PS(t);
          var su = t.memoizedState, Ef = su !== null;
          if (e !== null) {
            var jp = e.memoizedState, ml = jp !== null;
            ml !== Ef && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !K && (t.flags |= En);
          }
          return !Ef || (t.mode & qe) === Te ? Er(t) : Ur(hl, zr) && (Er(t), t.subtreeFlags & (Kt | ot) && (t.flags |= En)), null;
        }
        case Xe:
          return null;
        case pt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zw(e, t, a) {
      switch (qy(t), t.tag) {
        case Z: {
          var i = t.type;
          ol(i) && Dh(t);
          var u = t.flags;
          return u & Fn ? (t.flags = u & ~Fn | Ee, (t.mode & mt) !== Te && Xg(t), t) : null;
        }
        case G: {
          t.stateNode, af(t), Wy(t), Rg();
          var s = t.flags;
          return (s & Fn) !== xe && (s & Ee) === xe ? (t.flags = s & ~Fn | Ee, t) : null;
        }
        case X:
          return Eg(t), null;
        case Ae: {
          uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            ef();
          }
          var p = t.flags;
          return p & Fn ? (t.flags = p & ~Fn | Ee, (t.mode & mt) !== Te && Xg(t), t) : null;
        }
        case Wt:
          return uf(t), null;
        case fe:
          return af(t), null;
        case nt:
          var v = t.type._context;
          return fg(v, t), null;
        case I:
        case me:
          return PS(t), null;
        case Xe:
          return null;
        default:
          return null;
      }
    }
    function NC(e, t, a) {
      switch (qy(t), t.tag) {
        case Z: {
          var i = t.type.childContextTypes;
          i != null && Dh(t);
          break;
        }
        case G: {
          t.stateNode, af(t), Wy(t), Rg();
          break;
        }
        case X: {
          Eg(t);
          break;
        }
        case fe:
          af(t);
          break;
        case Ae:
          uf(t);
          break;
        case Wt:
          uf(t);
          break;
        case nt:
          var u = t.type._context;
          fg(u, t);
          break;
        case I:
        case me:
          PS(t);
          break;
      }
    }
    var MC = null;
    MC = /* @__PURE__ */ new Set();
    var Sm = !1, Cr = !1, Uw = typeof WeakSet == "function" ? WeakSet : Set, ve = null, pf = null, vf = null;
    function Aw(e) {
      Yi(null, function() {
        throw e;
      }), bo();
    }
    var jw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & mt)
        try {
          pl(), t.componentWillUnmount();
        } finally {
          dl(e);
        }
      else
        t.componentWillUnmount();
    };
    function LC(e, t) {
      try {
        Ku(Zn, e);
      } catch (a) {
        $t(e, t, a);
      }
    }
    function bS(e, t, a) {
      try {
        jw(e, a);
      } catch (i) {
        $t(e, t, i);
      }
    }
    function Hw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        $t(e, t, i);
      }
    }
    function zC(e, t) {
      try {
        AC(e);
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
            if (un && ta && e.mode & mt)
              try {
                pl(), i = a(null);
              } finally {
                dl(e);
              }
            else
              i = a(null);
          } catch (u) {
            $t(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", $e(e));
        } else
          a.current = null;
    }
    function Em(e, t, a) {
      try {
        a();
      } catch (i) {
        $t(e, t, i);
      }
    }
    var UC = !1;
    function Fw(e, t) {
      qT(e.containerInfo), ve = t, Vw();
      var a = UC;
      return UC = !1, a;
    }
    function Vw() {
      for (; ve !== null; ) {
        var e = ve, t = e.child;
        (e.subtreeFlags & Ii) !== xe && t !== null ? (t.return = e, ve = t) : Bw();
      }
    }
    function Bw() {
      for (; ve !== null; ) {
        var e = ve;
        Pt(e);
        try {
          Pw(e);
        } catch (a) {
          $t(e, e.return, a);
        }
        an();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ve = t;
          return;
        }
        ve = e.return;
      }
    }
    function Pw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Nn) !== xe) {
        switch (Pt(e), e.tag) {
          case J:
          case De:
          case Pe:
            break;
          case Z: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ss && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : _i(e.type, i), u);
              {
                var p = MC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", $e(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case G: {
            {
              var v = e.stateNode;
              xR(v.containerInfo);
            }
            break;
          }
          case X:
          case re:
          case fe:
          case Ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        an();
      }
    }
    function Ni(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Sr) !== ga ? gi(t) : (e & Zn) !== ga && _o(t), (e & sl) !== ga && zp(!0), Em(t, a, p), (e & sl) !== ga && zp(!1), (e & Sr) !== ga ? Ki() : (e & Zn) !== ga && fd());
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
            (e & sl) !== ga && zp(!0), s.destroy = f(), (e & sl) !== ga && zp(!1), (e & Sr) !== ga ? wv() : (e & Zn) !== ga && bv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Zn) !== xe ? v = "useLayoutEffect" : (s.tag & sl) !== xe ? v = "useInsertionEffect" : v = "useEffect";
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
    function $w(e, t) {
      if ((t.flags & ot) !== xe)
        switch (t.tag) {
          case Je: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = qE(), p = t.alternate === null ? "mount" : "update";
            KE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case G:
                  var m = v.stateNode;
                  m.passiveEffectDuration += a;
                  break e;
                case Je:
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
    function Yw(e, t, a, i) {
      if ((a.flags & Gi) !== xe)
        switch (a.tag) {
          case J:
          case De:
          case Pe: {
            if (!Cr)
              if (a.mode & mt)
                try {
                  pl(), Ku(Zn | qn, a);
                } finally {
                  dl(a);
                }
              else
                Ku(Zn | qn, a);
            break;
          }
          case Z: {
            var u = a.stateNode;
            if (a.flags & ot && !Cr)
              if (t === null)
                if (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), a.mode & mt)
                  try {
                    pl(), u.componentDidMount();
                  } finally {
                    dl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : _i(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), a.mode & mt)
                  try {
                    pl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    dl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", $e(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", $e(a) || "instance")), CE(a, p, u));
            break;
          }
          case G: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case X:
                    m = a.child.stateNode;
                    break;
                  case Z:
                    m = a.child.stateNode;
                    break;
                }
              CE(a, v, m);
            }
            break;
          }
          case X: {
            var y = a.stateNode;
            if (t === null && a.flags & ot) {
              var R = a.type, x = a.memoizedProps;
              oR(y, R, x);
            }
            break;
          }
          case re:
            break;
          case fe:
            break;
          case Je: {
            {
              var O = a.memoizedProps, M = O.onCommit, L = O.onRender, ne = a.stateNode.effectDuration, Re = qE(), Se = t === null ? "mount" : "update";
              KE() && (Se = "nested-update"), typeof L == "function" && L(a.memoizedProps.id, Se, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Re);
              {
                typeof M == "function" && M(a.memoizedProps.id, Se, ne, Re), Bb(a);
                var ft = a.return;
                e: for (; ft !== null; ) {
                  switch (ft.tag) {
                    case G:
                      var it = ft.stateNode;
                      it.effectDuration += ne;
                      break e;
                    case Je:
                      var b = ft.stateNode;
                      b.effectDuration += ne;
                      break e;
                  }
                  ft = ft.return;
                }
              }
            }
            break;
          }
          case Ae: {
            Zw(e, a);
            break;
          }
          case Wt:
          case Ut:
          case Y:
          case I:
          case me:
          case pt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Cr || a.flags & ln && AC(a);
    }
    function Qw(e) {
      switch (e.tag) {
        case J:
        case De:
        case Pe: {
          if (e.mode & mt)
            try {
              pl(), LC(e, e.return);
            } finally {
              dl(e);
            }
          else
            LC(e, e.return);
          break;
        }
        case Z: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hw(e, e.return, t), zC(e, e.return);
          break;
        }
        case X: {
          zC(e, e.return);
          break;
        }
      }
    }
    function Iw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === X) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? gR(u) : ER(i.stateNode, i.memoizedProps);
            } catch (f) {
              $t(e, e.return, f);
            }
          }
        } else if (i.tag === re) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? SR(s) : CR(s, i.memoizedProps);
            } catch (f) {
              $t(e, e.return, f);
            }
        } else if (!((i.tag === I || i.tag === me) && i.memoizedState !== null && i !== e)) {
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
    function AC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case X:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & mt)
            try {
              pl(), u = t(i);
            } finally {
              dl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", $e(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", $e(e)), t.current = i;
      }
    }
    function Ww(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function jC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, jC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === X) {
          var a = e.stateNode;
          a !== null && JR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Gw(e) {
      for (var t = e.return; t !== null; ) {
        if (HC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function HC(e) {
      return e.tag === X || e.tag === G || e.tag === fe;
    }
    function FC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || HC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== X && t.tag !== re && t.tag !== tn; ) {
          if (t.flags & Kt || t.child === null || t.tag === fe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Kt))
          return t.stateNode;
      }
    }
    function Xw(e) {
      var t = Gw(e);
      switch (t.tag) {
        case X: {
          var a = t.stateNode;
          t.flags & oa && (B0(a), t.flags &= ~oa);
          var i = FC(e);
          kS(e, i, a);
          break;
        }
        case G:
        case fe: {
          var u = t.stateNode.containerInfo, s = FC(e);
          DS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === X || i === re;
      if (u) {
        var s = e.stateNode;
        t ? vR(a, s, t) : dR(a, s);
      } else if (i !== fe) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === X || i === re;
      if (u) {
        var s = e.stateNode;
        t ? pR(a, s, t) : fR(a, s);
      } else if (i !== fe) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    var xr = null, Mi = !1;
    function Kw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case X: {
              xr = i.stateNode, Mi = !1;
              break e;
            }
            case G: {
              xr = i.stateNode.containerInfo, Mi = !0;
              break e;
            }
            case fe: {
              xr = i.stateNode.containerInfo, Mi = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (xr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        VC(e, t, a), xr = null, Mi = !1;
      }
      Ww(a);
    }
    function qu(e, t, a) {
      for (var i = a.child; i !== null; )
        VC(e, t, i), i = i.sibling;
    }
    function VC(e, t, a) {
      switch (ud(a), a.tag) {
        case X:
          Cr || hf(a, t);
        case re: {
          {
            var i = xr, u = Mi;
            xr = null, qu(e, t, a), xr = i, Mi = u, xr !== null && (Mi ? mR(xr, a.stateNode) : hR(xr, a.stateNode));
          }
          return;
        }
        case tn: {
          xr !== null && (Mi ? yR(xr, a.stateNode) : Fy(xr, a.stateNode));
          return;
        }
        case fe: {
          {
            var s = xr, f = Mi;
            xr = a.stateNode.containerInfo, Mi = !0, qu(e, t, a), xr = s, Mi = f;
          }
          return;
        }
        case J:
        case De:
        case Tt:
        case Pe: {
          if (!Cr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, x = R.destroy, O = R.tag;
                  x !== void 0 && ((O & sl) !== ga ? Em(a, t, x) : (O & Zn) !== ga && (_o(a), a.mode & mt ? (pl(), Em(a, t, x), dl(a)) : Em(a, t, x), fd())), y = y.next;
                } while (y !== m);
              }
            }
          }
          qu(e, t, a);
          return;
        }
        case Z: {
          if (!Cr) {
            hf(a, t);
            var M = a.stateNode;
            typeof M.componentWillUnmount == "function" && bS(a, t, M);
          }
          qu(e, t, a);
          return;
        }
        case Y: {
          qu(e, t, a);
          return;
        }
        case I: {
          if (
            // TODO: Remove this dead flag
            a.mode & qe
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
    function qw(e) {
      e.memoizedState;
    }
    function Zw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && AR(s);
          }
        }
      }
    }
    function BC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Uw()), t.forEach(function(i) {
          var u = Gb.bind(null, e, i);
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
    function Jw(e, t, a) {
      pf = a, vf = e, Pt(t), PC(t, e), Pt(t), pf = null, vf = null;
    }
    function Li(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Kw(e, t, s);
          } catch (v) {
            $t(s, t, v);
          }
        }
      var f = so();
      if (t.subtreeFlags & Wi)
        for (var p = t.child; p !== null; )
          Pt(p), PC(p, e), p = p.sibling;
      Pt(f);
    }
    function PC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case J:
        case De:
        case Tt:
        case Pe: {
          if (Li(t, e), vl(e), u & ot) {
            try {
              Ni(sl | qn, e, e.return), Ku(sl | qn, e);
            } catch (Le) {
              $t(e, e.return, Le);
            }
            if (e.mode & mt) {
              try {
                pl(), Ni(Zn | qn, e, e.return);
              } catch (Le) {
                $t(e, e.return, Le);
              }
              dl(e);
            } else
              try {
                Ni(Zn | qn, e, e.return);
              } catch (Le) {
                $t(e, e.return, Le);
              }
          }
          return;
        }
        case Z: {
          Li(t, e), vl(e), u & ln && i !== null && hf(i, i.return);
          return;
        }
        case X: {
          Li(t, e), vl(e), u & ln && i !== null && hf(i, i.return);
          {
            if (e.flags & oa) {
              var s = e.stateNode;
              try {
                B0(s);
              } catch (Le) {
                $t(e, e.return, Le);
              }
            }
            if (u & ot) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    sR(f, y, m, v, p, e);
                  } catch (Le) {
                    $t(e, e.return, Le);
                  }
              }
            }
          }
          return;
        }
        case re: {
          if (Li(t, e), vl(e), u & ot) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, x = e.memoizedProps, O = i !== null ? i.memoizedProps : x;
            try {
              cR(R, O, x);
            } catch (Le) {
              $t(e, e.return, Le);
            }
          }
          return;
        }
        case G: {
          if (Li(t, e), vl(e), u & ot && i !== null) {
            var M = i.memoizedState;
            if (M.isDehydrated)
              try {
                UR(t.containerInfo);
              } catch (Le) {
                $t(e, e.return, Le);
              }
          }
          return;
        }
        case fe: {
          Li(t, e), vl(e);
          return;
        }
        case Ae: {
          Li(t, e), vl(e);
          var L = e.child;
          if (L.flags & En) {
            var ne = L.stateNode, Re = L.memoizedState, Se = Re !== null;
            if (ne.isHidden = Se, Se) {
              var ft = L.alternate !== null && L.alternate.memoizedState !== null;
              ft || Lb();
            }
          }
          if (u & ot) {
            try {
              qw(e);
            } catch (Le) {
              $t(e, e.return, Le);
            }
            BC(e);
          }
          return;
        }
        case I: {
          var it = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & qe
          ) {
            var b = Cr;
            Cr = b || it, Li(t, e), Cr = b;
          } else
            Li(t, e);
          if (vl(e), u & En) {
            var z = e.stateNode, D = e.memoizedState, $ = D !== null, se = e;
            if (z.isHidden = $, $ && !it && (se.mode & qe) !== Te) {
              ve = se;
              for (var le = se.child; le !== null; )
                ve = le, tb(le), le = le.sibling;
            }
            Iw(se, $);
          }
          return;
        }
        case Wt: {
          Li(t, e), vl(e), u & ot && BC(e);
          return;
        }
        case Y:
          return;
        default: {
          Li(t, e), vl(e);
          return;
        }
      }
    }
    function vl(e) {
      var t = e.flags;
      if (t & Kt) {
        try {
          Xw(e);
        } catch (a) {
          $t(e, e.return, a);
        }
        e.flags &= ~Kt;
      }
      t & Or && (e.flags &= ~Or);
    }
    function eb(e, t, a) {
      pf = a, vf = t, ve = e, $C(e, t, a), pf = null, vf = null;
    }
    function $C(e, t, a) {
      for (var i = (e.mode & qe) !== Te; ve !== null; ) {
        var u = ve, s = u.child;
        if (u.tag === I && i) {
          var f = u.memoizedState !== null, p = f || Sm;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || Cr, R = Sm, x = Cr;
            Sm = p, Cr = y, Cr && !x && (ve = u, nb(u));
            for (var O = s; O !== null; )
              ve = O, $C(
                O,
                // New root; bubble back up to here and stop.
                t,
                a
              ), O = O.sibling;
            ve = u, Sm = R, Cr = x, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Gi) !== xe && s !== null ? (s.return = u, ve = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; ve !== null; ) {
        var i = ve;
        if ((i.flags & Gi) !== xe) {
          var u = i.alternate;
          Pt(i);
          try {
            Yw(t, u, i, a);
          } catch (f) {
            $t(i, i.return, f);
          }
          an();
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
    function tb(e) {
      for (; ve !== null; ) {
        var t = ve, a = t.child;
        switch (t.tag) {
          case J:
          case De:
          case Tt:
          case Pe: {
            if (t.mode & mt)
              try {
                pl(), Ni(Zn, t, t.return);
              } finally {
                dl(t);
              }
            else
              Ni(Zn, t, t.return);
            break;
          }
          case Z: {
            hf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && bS(t, t.return, i);
            break;
          }
          case X: {
            hf(t, t.return);
            break;
          }
          case I: {
            var u = t.memoizedState !== null;
            if (u) {
              YC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ve = a) : YC(e);
      }
    }
    function YC(e) {
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
    function nb(e) {
      for (; ve !== null; ) {
        var t = ve, a = t.child;
        if (t.tag === I) {
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
          Qw(t);
        } catch (i) {
          $t(t, t.return, i);
        }
        if (an(), t === e) {
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
    function rb(e, t, a, i) {
      ve = t, ab(t, e, a, i);
    }
    function ab(e, t, a, i) {
      for (; ve !== null; ) {
        var u = ve, s = u.child;
        (u.subtreeFlags & mi) !== xe && s !== null ? (s.return = u, ve = s) : ib(e, t, a, i);
      }
    }
    function ib(e, t, a, i) {
      for (; ve !== null; ) {
        var u = ve;
        if ((u.flags & _r) !== xe) {
          Pt(u);
          try {
            lb(t, u, a, i);
          } catch (f) {
            $t(u, u.return, f);
          }
          an();
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
    function lb(e, t, a, i) {
      switch (t.tag) {
        case J:
        case De:
        case Pe: {
          if (t.mode & mt) {
            Gg();
            try {
              Ku(Sr | qn, t);
            } finally {
              Wg(t);
            }
          } else
            Ku(Sr | qn, t);
          break;
        }
      }
    }
    function ub(e) {
      ve = e, ob();
    }
    function ob() {
      for (; ve !== null; ) {
        var e = ve, t = e.child;
        if ((ve.flags & ua) !== xe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ve = u, fb(u, e);
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
        (e.subtreeFlags & mi) !== xe && t !== null ? (t.return = e, ve = t) : sb();
      }
    }
    function sb() {
      for (; ve !== null; ) {
        var e = ve;
        (e.flags & _r) !== xe && (Pt(e), cb(e), an());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ve = t;
          return;
        }
        ve = e.return;
      }
    }
    function cb(e) {
      switch (e.tag) {
        case J:
        case De:
        case Pe: {
          e.mode & mt ? (Gg(), Ni(Sr | qn, e, e.return), Wg(e)) : Ni(Sr | qn, e, e.return);
          break;
        }
      }
    }
    function fb(e, t) {
      for (; ve !== null; ) {
        var a = ve;
        Pt(a), pb(a, t), an();
        var i = a.child;
        i !== null ? (i.return = a, ve = i) : db(e);
      }
    }
    function db(e) {
      for (; ve !== null; ) {
        var t = ve, a = t.sibling, i = t.return;
        if (jC(t), t === e) {
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
    function pb(e, t) {
      switch (e.tag) {
        case J:
        case De:
        case Pe: {
          e.mode & mt ? (Gg(), Ni(Sr, e, t), Wg(e)) : Ni(Sr, e, t);
          break;
        }
      }
    }
    function vb(e) {
      switch (e.tag) {
        case J:
        case De:
        case Pe: {
          try {
            Ku(Zn | qn, e);
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
        case Z: {
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
    function hb(e) {
      switch (e.tag) {
        case J:
        case De:
        case Pe: {
          try {
            Ku(Sr | qn, e);
          } catch (t) {
            $t(e, e.return, t);
          }
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case J:
        case De:
        case Pe: {
          try {
            Ni(Zn | qn, e, e.return);
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
        case Z: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && bS(e, e.return, t);
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case J:
        case De:
        case Pe:
          try {
            Ni(Sr | qn, e, e.return);
          } catch (t) {
            $t(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var xp = Symbol.for;
      xp("selector.component"), xp("selector.has_pseudo_class"), xp("selector.role"), xp("selector.test_id"), xp("selector.text");
    }
    var gb = [];
    function Sb() {
      gb.forEach(function(e) {
        return e();
      });
    }
    var Eb = _.ReactCurrentActQueue;
    function Cb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function IC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Eb.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var xb = Math.ceil, OS = _.ReactCurrentDispatcher, NS = _.ReactCurrentOwner, Tr = _.ReactCurrentBatchConfig, zi = _.ReactCurrentActQueue, tr = (
      /*             */
      0
    ), WC = (
      /*               */
      1
    ), Rr = (
      /*                */
      2
    ), ni = (
      /*                */
      4
    ), iu = 0, Tp = 1, Es = 2, Cm = 3, Rp = 4, GC = 5, MS = 6, ct = tr, qr = null, vn = null, nr = A, hl = A, LS = Bu(A), rr = iu, wp = null, xm = A, bp = A, Tm = A, Dp = null, Sa = null, zS = 0, XC = 500, KC = 1 / 0, Tb = 500, lu = null;
    function kp() {
      KC = Mn() + Tb;
    }
    function qC() {
      return KC;
    }
    var Rm = !1, US = null, mf = null, Cs = !1, Zu = null, _p = A, AS = [], jS = null, Rb = 50, Op = 0, HS = null, FS = !1, wm = !1, wb = 50, yf = 0, bm = null, Np = jt, Dm = A, ZC = !1;
    function km() {
      return qr;
    }
    function Zr() {
      return (ct & (Rr | ni)) !== tr ? Mn() : (Np !== jt || (Np = Mn()), Np);
    }
    function Ju(e) {
      var t = e.mode;
      if ((t & qe) === Te)
        return Me;
      if ((ct & Rr) !== tr && nr !== A)
        return Po(nr);
      var a = E1() !== S1;
      if (a) {
        if (Tr.transition !== null) {
          var i = Tr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Dm === vt && (Dm = Sd()), Dm;
      }
      var u = va();
      if (u !== vt)
        return u;
      var s = aR();
      return s;
    }
    function bb(e) {
      var t = e.mode;
      return (t & qe) === Te ? Me : Mv();
    }
    function ar(e, t, a, i) {
      Kb(), ZC && g("useInsertionEffect must not schedule updates."), FS && (wm = !0), Ou(e, a, i), (ct & Rr) !== A && e === qr ? Jb(t) : (Lr && Qo(e, t, a), eD(t), e === qr && ((ct & Rr) === tr && (bp = Ye(bp, a)), rr === Rp && eo(e, nr)), Ea(e, i), a === Me && ct === tr && (t.mode & qe) === Te && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !zi.isBatchingLegacy && (kp(), Z0()));
    }
    function Db(e, t, a) {
      var i = e.current;
      i.lanes = t, Ou(e, t, a), Ea(e, a);
    }
    function kb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (ct & Rr) !== tr
      );
    }
    function Ea(e, t) {
      var a = e.callbackNode;
      wc(e, t);
      var i = Rc(e, e === qr ? nr : A);
      if (i === A) {
        a !== null && vx(a), e.callbackNode = null, e.callbackPriority = vt;
        return;
      }
      var u = Ji(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(zi.current !== null && a !== IS)) {
        a == null && s !== Me && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vx(a);
      var f;
      if (u === Me)
        e.tag === Pu ? (zi.isBatchingLegacy !== null && (zi.didScheduleLegacyUpdate = !0), n1(tx.bind(null, e))) : q0(tx.bind(null, e)), zi.current !== null ? zi.current.push($u) : lR(function() {
          (ct & (Rr | ni)) === tr && $u();
        }), f = null;
      else {
        var p;
        switch (Fv(i)) {
          case pr:
            p = ko;
            break;
          case Ia:
            p = Xi;
            break;
          case da:
            p = yi;
            break;
          case pa:
            p = Ll;
            break;
          default:
            p = yi;
            break;
        }
        f = WS(p, JC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function JC(e, t) {
      if (I1(), Np = jt, Dm = A, (ct & (Rr | ni)) !== tr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ou();
      if (i && e.callbackNode !== a)
        return null;
      var u = Rc(e, e === qr ? nr : A);
      if (u === A)
        return null;
      var s = !Dc(e, u) && !Nv(e, u) && !t, f = s ? Hb(e, u) : Om(e, u);
      if (f !== iu) {
        if (f === Es) {
          var p = bc(e);
          p !== A && (u = p, f = VS(e, p));
        }
        if (f === Tp) {
          var v = wp;
          throw xs(e, A), eo(e, u), Ea(e, Mn()), v;
        }
        if (f === MS)
          eo(e, u);
        else {
          var m = !Dc(e, u), y = e.current.alternate;
          if (m && !Ob(y)) {
            if (f = Om(e, u), f === Es) {
              var R = bc(e);
              R !== A && (u = R, f = VS(e, R));
            }
            if (f === Tp) {
              var x = wp;
              throw xs(e, A), eo(e, u), Ea(e, Mn()), x;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, _b(e, f, u);
        }
      }
      return Ea(e, Mn()), e.callbackNode === a ? JC.bind(null, e) : null;
    }
    function VS(e, t) {
      var a = Dp;
      if (Oc(e)) {
        var i = xs(e, t);
        i.flags |= lr, XR(e.containerInfo);
      }
      var u = Om(e, t);
      if (u !== Es) {
        var s = Sa;
        Sa = a, s !== null && ex(s);
      }
      return u;
    }
    function ex(e) {
      Sa === null ? Sa = e : Sa.push.apply(Sa, e);
    }
    function _b(e, t, a) {
      switch (t) {
        case iu:
        case Tp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Es: {
          Ts(e, Sa, lu);
          break;
        }
        case Cm: {
          if (eo(e, a), Yl(a) && // do not delay if we're inside an act() scope
          !hx()) {
            var i = zS + XC - Mn();
            if (i > 10) {
              var u = Rc(e, A);
              if (u !== A)
                break;
              var s = e.suspendedLanes;
              if (!Ql(s, a)) {
                Zr(), kc(e, s);
                break;
              }
              e.timeoutHandle = jy(Ts.bind(null, e, Sa, lu), i);
              break;
            }
          }
          Ts(e, Sa, lu);
          break;
        }
        case Rp: {
          if (eo(e, a), yd(a))
            break;
          if (!hx()) {
            var f = Oa(e, a), p = f, v = Mn() - p, m = Xb(v) - v;
            if (m > 10) {
              e.timeoutHandle = jy(Ts.bind(null, e, Sa, lu), m);
              break;
            }
          }
          Ts(e, Sa, lu);
          break;
        }
        case GC: {
          Ts(e, Sa, lu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Ob(e) {
      for (var t = e; ; ) {
        if (t.flags & wu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!V(f(), p))
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
      t = $o(t, Tm), t = $o(t, bp), Uv(e, t);
    }
    function tx(e) {
      if (W1(), (ct & (Rr | ni)) !== tr)
        throw new Error("Should not already be working.");
      ou();
      var t = Rc(e, A);
      if (!Ur(t, Me))
        return Ea(e, Mn()), null;
      var a = Om(e, t);
      if (e.tag !== Pu && a === Es) {
        var i = bc(e);
        i !== A && (t = i, a = VS(e, i));
      }
      if (a === Tp) {
        var u = wp;
        throw xs(e, A), eo(e, t), Ea(e, Mn()), u;
      }
      if (a === MS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ts(e, Sa, lu), Ea(e, Mn()), null;
    }
    function Nb(e, t) {
      t !== A && (_c(e, Ye(t, Me)), Ea(e, Mn()), (ct & (Rr | ni)) === tr && (kp(), $u()));
    }
    function BS(e, t) {
      var a = ct;
      ct |= WC;
      try {
        return e(t);
      } finally {
        ct = a, ct === tr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !zi.isBatchingLegacy && (kp(), Z0());
      }
    }
    function Mb(e, t, a, i, u) {
      var s = va(), f = Tr.transition;
      try {
        return Tr.transition = null, Rn(pr), e(t, a, i, u);
      } finally {
        Rn(s), Tr.transition = f, ct === tr && kp();
      }
    }
    function uu(e) {
      Zu !== null && Zu.tag === Pu && (ct & (Rr | ni)) === tr && ou();
      var t = ct;
      ct |= WC;
      var a = Tr.transition, i = va();
      try {
        return Tr.transition = null, Rn(pr), e ? e() : void 0;
      } finally {
        Rn(i), Tr.transition = a, ct = t, (ct & (Rr | ni)) === tr && $u();
      }
    }
    function nx() {
      return (ct & (Rr | ni)) !== tr;
    }
    function _m(e, t) {
      Vr(LS, hl, e), hl = Ye(hl, t);
    }
    function PS(e) {
      hl = LS.current, Fr(LS, e);
    }
    function xs(e, t) {
      e.finishedWork = null, e.finishedLanes = A;
      var a = e.timeoutHandle;
      if (a !== Hy && (e.timeoutHandle = Hy, iR(a)), vn !== null)
        for (var i = vn.return; i !== null; ) {
          var u = i.alternate;
          NC(u, i), i = i.return;
        }
      qr = e;
      var s = Rs(e.current, null);
      return vn = s, nr = hl = t, rr = iu, wp = null, xm = A, bp = A, Tm = A, Dp = null, Sa = null, D1(), bi.discardPendingWarnings(), s;
    }
    function rx(e, t) {
      do {
        var a = vn;
        try {
          if (Fh(), DE(), an(), NS.current = null, a === null || a.return === null) {
            rr = Tp, wp = t, vn = null;
            return;
          }
          if (un && a.mode & mt && vm(a, !0), Yn)
            if (Wr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Qa(a, i, nr);
            } else
              Oo(a, t, nr);
          nw(e, a.return, a, t, nr), ux(a);
        } catch (u) {
          t = u, vn === a && a !== null ? (a = a.return, vn = a) : a = vn;
          continue;
        }
        return;
      } while (!0);
    }
    function ax() {
      var e = OS.current;
      return OS.current = sm, e === null ? sm : e;
    }
    function ix(e) {
      OS.current = e;
    }
    function Lb() {
      zS = Mn();
    }
    function Mp(e) {
      xm = Ye(e, xm);
    }
    function zb() {
      rr === iu && (rr = Cm);
    }
    function $S() {
      (rr === iu || rr === Cm || rr === Es) && (rr = Rp), qr !== null && (Bo(xm) || Bo(bp)) && eo(qr, nr);
    }
    function Ub(e) {
      rr !== Rp && (rr = Es), Dp === null ? Dp = [e] : Dp.push(e);
    }
    function Ab() {
      return rr === iu;
    }
    function Om(e, t) {
      var a = ct;
      ct |= Rr;
      var i = ax();
      if (qr !== e || nr !== t) {
        if (Lr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lp(e, nr), u.clear()), Av(e, t);
        }
        lu = Td(), xs(e, t);
      }
      jl(t);
      do
        try {
          jb();
          break;
        } catch (s) {
          rx(e, s);
        }
      while (!0);
      if (Fh(), ct = a, ix(i), vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return lc(), qr = null, nr = A, rr;
    }
    function jb() {
      for (; vn !== null; )
        lx(vn);
    }
    function Hb(e, t) {
      var a = ct;
      ct |= Rr;
      var i = ax();
      if (qr !== e || nr !== t) {
        if (Lr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Lp(e, nr), u.clear()), Av(e, t);
        }
        lu = Td(), kp(), xs(e, t);
      }
      jl(t);
      do
        try {
          Fb();
          break;
        } catch (s) {
          rx(e, s);
        }
      while (!0);
      return Fh(), ix(i), ct = a, vn !== null ? (Dv(), iu) : (lc(), qr = null, nr = A, rr);
    }
    function Fb() {
      for (; vn !== null && !nd(); )
        lx(vn);
    }
    function lx(e) {
      var t = e.alternate;
      Pt(e);
      var a;
      (e.mode & mt) !== Te ? (Ig(e), a = YS(t, e, hl), vm(e, !0)) : a = YS(t, e, hl), an(), e.memoizedProps = e.pendingProps, a === null ? ux(e) : vn = a, NS.current = null;
    }
    function ux(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Do) === xe) {
          Pt(t);
          var u = void 0;
          if ((t.mode & mt) === Te ? u = OC(a, t, hl) : (Ig(t), u = OC(a, t, hl), vm(t, !1)), an(), u !== null) {
            vn = u;
            return;
          }
        } else {
          var s = zw(a, t);
          if (s !== null) {
            s.flags &= Cv, vn = s;
            return;
          }
          if ((t.mode & mt) !== Te) {
            vm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Do, i.subtreeFlags = xe, i.deletions = null;
          else {
            rr = MS, vn = null;
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
      rr === iu && (rr = GC);
    }
    function Ts(e, t, a) {
      var i = va(), u = Tr.transition;
      try {
        Tr.transition = null, Rn(pr), Vb(e, t, a, i);
      } finally {
        Tr.transition = u, Rn(i);
      }
      return null;
    }
    function Vb(e, t, a, i) {
      do
        ou();
      while (Zu !== null);
      if (qb(), (ct & (Rr | ni)) !== tr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (od(s), u === null)
        return sd(), null;
      if (s === A && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = A, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = vt;
      var f = Ye(u.lanes, u.childLanes);
      Cd(e, f), e === qr && (qr = null, vn = null, nr = A), ((u.subtreeFlags & mi) !== xe || (u.flags & mi) !== xe) && (Cs || (Cs = !0, jS = a, WS(yi, function() {
        return ou(), null;
      })));
      var p = (u.subtreeFlags & (Ii | Wi | Gi | mi)) !== xe, v = (u.flags & (Ii | Wi | Gi | mi)) !== xe;
      if (p || v) {
        var m = Tr.transition;
        Tr.transition = null;
        var y = va();
        Rn(pr);
        var R = ct;
        ct |= ni, NS.current = null, Fw(e, u), ZE(), Jw(e, u, s), ZT(e.containerInfo), e.current = u, No(s), eb(u, e, s), Mo(), rd(), ct = R, Rn(y), Tr.transition = m;
      } else
        e.current = u, ZE();
      var x = Cs;
      if (Cs ? (Cs = !1, Zu = e, _p = s) : (yf = 0, bm = null), f = e.pendingLanes, f === A && (mf = null), x || fx(e.current, !1), id(u.stateNode, i), Lr && e.memoizedUpdaters.clear(), Sb(), Ea(e, Mn()), t !== null)
        for (var O = e.onRecoverableError, M = 0; M < t.length; M++) {
          var L = t[M], ne = L.stack, Re = L.digest;
          O(L.value, {
            componentStack: ne,
            digest: Re
          });
        }
      if (Rm) {
        Rm = !1;
        var Se = US;
        throw US = null, Se;
      }
      return Ur(_p, Me) && e.tag !== Pu && ou(), f = e.pendingLanes, Ur(f, Me) ? (Q1(), e === HS ? Op++ : (Op = 0, HS = e)) : Op = 0, $u(), sd(), null;
    }
    function ou() {
      if (Zu !== null) {
        var e = Fv(_p), t = Wo(da, e), a = Tr.transition, i = va();
        try {
          return Tr.transition = null, Rn(t), Pb();
        } finally {
          Rn(i), Tr.transition = a;
        }
      }
      return !1;
    }
    function Bb(e) {
      AS.push(e), Cs || (Cs = !0, WS(yi, function() {
        return ou(), null;
      }));
    }
    function Pb() {
      if (Zu === null)
        return !1;
      var e = jS;
      jS = null;
      var t = Zu, a = _p;
      if (Zu = null, _p = A, (ct & (Rr | ni)) !== tr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, wm = !1, Al(a);
      var i = ct;
      ct |= ni, ub(t.current), rb(t, t.current, a, e);
      {
        var u = AS;
        AS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          $w(t, f);
        }
      }
      dd(), fx(t.current, !0), ct = i, $u(), wm ? t === bm ? yf++ : (yf = 0, bm = t) : yf = 0, FS = !1, wm = !1, ld(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function ox(e) {
      return mf !== null && mf.has(e);
    }
    function $b(e) {
      mf === null ? mf = /* @__PURE__ */ new Set([e]) : mf.add(e);
    }
    function Yb(e) {
      Rm || (Rm = !0, US = e);
    }
    var Qb = Yb;
    function sx(e, t, a) {
      var i = gs(a, t), u = lC(e, i, Me), s = Qu(e, u, Me), f = Zr();
      s !== null && (Ou(s, Me, f), Ea(s, f));
    }
    function $t(e, t, a) {
      if (Aw(a), zp(!1), e.tag === G) {
        sx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === G) {
          sx(i, e, a);
          return;
        } else if (i.tag === Z) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !ox(s)) {
            var f = gs(a, e), p = cS(i, f, Me), v = Qu(i, p, Me), m = Zr();
            v !== null && (Ou(v, Me, m), Ea(v, m));
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
      kc(e, a), tD(e), qr === e && Ql(nr, a) && (rr === Rp || rr === Cm && Yl(nr) && Mn() - zS < XC ? xs(e, A) : Tm = Ye(Tm, a)), Ea(e, u);
    }
    function cx(e, t) {
      t === vt && (t = bb(e));
      var a = Zr(), i = ya(e, t);
      i !== null && (Ou(i, t, a), Ea(i, a));
    }
    function Wb(e) {
      var t = e.memoizedState, a = vt;
      t !== null && (a = t.retryLane), cx(e, a);
    }
    function Gb(e, t) {
      var a = vt, i;
      switch (e.tag) {
        case Ae:
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
      i !== null && i.delete(t), cx(e, a);
    }
    function Xb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : xb(e / 1960) * 1960;
    }
    function Kb() {
      if (Op > Rb)
        throw Op = 0, HS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      yf > wb && (yf = 0, bm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function qb() {
      bi.flushLegacyContextWarning(), bi.flushPendingUnsafeLifecycleWarnings();
    }
    function fx(e, t) {
      Pt(e), Nm(e, Qi, mb), t && Nm(e, Pa, yb), Nm(e, Qi, vb), t && Nm(e, Pa, hb), an();
    }
    function Nm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== xe ? i = i.child : ((i.flags & t) !== xe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Mm = null;
    function dx(e) {
      {
        if ((ct & Rr) !== tr || !(e.mode & qe))
          return;
        var t = e.tag;
        if (t !== Oe && t !== G && t !== Z && t !== J && t !== De && t !== Tt && t !== Pe)
          return;
        var a = $e(e) || "ReactComponent";
        if (Mm !== null) {
          if (Mm.has(a))
            return;
          Mm.add(a);
        } else
          Mm = /* @__PURE__ */ new Set([a]);
        var i = dr;
        try {
          Pt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Pt(e) : an();
        }
      }
    }
    var YS;
    {
      var Zb = null;
      YS = function(e, t, a) {
        var i = Ex(Zb, t);
        try {
          return wC(e, t, a);
        } catch (s) {
          if (c1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Fh(), DE(), NC(e, t), Ex(t, i), t.mode & mt && Ig(t), Yi(null, wC, null, e, t, a), vi()) {
            var u = bo();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var px = !1, QS;
    QS = /* @__PURE__ */ new Set();
    function Jb(e) {
      if (Hi && !P1())
        switch (e.tag) {
          case J:
          case De:
          case Pe: {
            var t = vn && $e(vn) || "Unknown", a = t;
            if (!QS.has(a)) {
              QS.add(a);
              var i = $e(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case Z: {
            px || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), px = !0);
            break;
          }
        }
    }
    function Lp(e, t) {
      if (Lr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Qo(e, i, t);
        });
      }
    }
    var IS = {};
    function WS(e, t) {
      {
        var a = zi.current;
        return a !== null ? (a.push(t), IS) : td(e, t);
      }
    }
    function vx(e) {
      if (e !== IS)
        return Tv(e);
    }
    function hx() {
      return zi.current !== null;
    }
    function eD(e) {
      {
        if (e.mode & qe) {
          if (!IC())
            return;
        } else if (!Cb() || ct !== tr || e.tag !== J && e.tag !== De && e.tag !== Pe)
          return;
        if (zi.current === null) {
          var t = dr;
          try {
            Pt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, $e(e));
          } finally {
            t ? Pt(e) : an();
          }
        }
      }
    }
    function tD(e) {
      e.tag !== Pu && IC() && zi.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function zp(e) {
      ZC = e;
    }
    var ri = null, gf = null, nD = function(e) {
      ri = e;
    };
    function Sf(e) {
      {
        if (ri === null)
          return e;
        var t = ri(e);
        return t === void 0 ? e : t.current;
      }
    }
    function GS(e) {
      return Sf(e);
    }
    function XS(e) {
      {
        if (ri === null)
          return e;
        var t = ri(e);
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
    function mx(e, t) {
      {
        if (ri === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case Z: {
            typeof i == "function" && (u = !0);
            break;
          }
          case J: {
            (typeof i == "function" || s === Be) && (u = !0);
            break;
          }
          case De: {
            (s === H || s === Be) && (u = !0);
            break;
          }
          case Tt:
          case Pe: {
            (s === Ie || s === Be) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ri(a);
          if (f !== void 0 && f === ri(i))
            return !0;
        }
        return !1;
      }
    }
    function yx(e) {
      {
        if (ri === null || typeof WeakSet != "function")
          return;
        gf === null && (gf = /* @__PURE__ */ new WeakSet()), gf.add(e);
      }
    }
    var rD = function(e, t) {
      {
        if (ri === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ou(), uu(function() {
          KS(e.current, i, a);
        });
      }
    }, aD = function(e, t) {
      {
        if (e.context !== La)
          return;
        ou(), uu(function() {
          Up(t, e, null, null);
        });
      }
    };
    function KS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case J:
          case Pe:
          case Z:
            v = p;
            break;
          case De:
            v = p.render;
            break;
        }
        if (ri === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = ri(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === Z ? y = !0 : m = !0));
        }
        if (gf !== null && (gf.has(e) || i !== null && gf.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var x = ya(e, Me);
          x !== null && ar(x, e, Me, jt);
        }
        u !== null && !y && KS(u, t, a), s !== null && KS(s, t, a);
      }
    }
    var iD = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case J:
          case Pe:
          case Z:
            p = f;
            break;
          case De:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? lD(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function lD(e, t) {
      {
        var a = uD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case X:
              t.add(i.stateNode);
              return;
            case fe:
              t.add(i.stateNode.containerInfo);
              return;
            case G:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function uD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === X)
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
    var ZS;
    {
      ZS = !1;
      try {
        var gx = Object.preventExtensions({});
      } catch {
        ZS = !0;
      }
    }
    function oD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = xe, this.subtreeFlags = xe, this.deletions = null, this.lanes = A, this.childLanes = A, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ZS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var za = function(e, t, a, i) {
      return new oD(e, t, a, i);
    };
    function JS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function sD(e) {
      return typeof e == "function" && !JS(e) && e.defaultProps === void 0;
    }
    function cD(e) {
      if (typeof e == "function")
        return JS(e) ? Z : J;
      if (e != null) {
        var t = e.$$typeof;
        if (t === H)
          return De;
        if (t === Ie)
          return Tt;
      }
      return Oe;
    }
    function Rs(e, t) {
      var a = e.alternate;
      a === null ? (a = za(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = xe, a.subtreeFlags = xe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Cn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Oe:
        case J:
        case Pe:
          a.type = Sf(e.type);
          break;
        case Z:
          a.type = GS(e.type);
          break;
        case De:
          a.type = XS(e.type);
          break;
      }
      return a;
    }
    function fD(e, t) {
      e.flags &= Cn | Kt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = A, e.lanes = t, e.child = null, e.subtreeFlags = xe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = xe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function dD(e, t, a) {
      var i;
      return e === _h ? (i = qe, t === !0 && (i |= Mt, i |= yt)) : i = Te, Lr && (i |= mt), za(G, null, null, i);
    }
    function e0(e, t, a, i, u, s) {
      var f = Oe, p = e;
      if (typeof e == "function")
        JS(e) ? (f = Z, p = GS(p)) : p = Sf(p);
      else if (typeof e == "string")
        f = X;
      else
        e: switch (e) {
          case Ui:
            return to(a.children, u, s, t);
          case ii:
            f = Ne, u |= Mt, (u & qe) !== Te && (u |= yt);
            break;
          case Ai:
            return pD(a, u, s, t);
          case ae:
            return vD(a, u, s, t);
          case ke:
            return hD(a, u, s, t);
          case On:
            return Sx(a, u, s, t);
          case Yt:
          case at:
          case Xt:
          case fr:
          case et:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ji:
                  f = nt;
                  break e;
                case E:
                  f = tt;
                  break e;
                case H:
                  f = De, p = XS(p);
                  break e;
                case Ie:
                  f = Tt;
                  break e;
                case Be:
                  f = en, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var m = i ? $e(i) : null;
              m && (v += `

Check the render method of \`` + m + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var y = za(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function t0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = e0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function to(e, t, a, i) {
      var u = za(Ce, e, i, t);
      return u.lanes = a, u;
    }
    function pD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = za(Je, e, i, t | mt);
      return u.elementType = Ai, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function vD(e, t, a, i) {
      var u = za(Ae, e, i, t);
      return u.elementType = ae, u.lanes = a, u;
    }
    function hD(e, t, a, i) {
      var u = za(Wt, e, i, t);
      return u.elementType = ke, u.lanes = a, u;
    }
    function Sx(e, t, a, i) {
      var u = za(I, e, i, t);
      u.elementType = On, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function n0(e, t, a) {
      var i = za(re, e, null, t);
      return i.lanes = a, i;
    }
    function mD() {
      var e = za(X, null, null, Te);
      return e.elementType = "DELETED", e;
    }
    function yD(e) {
      var t = za(tn, null, null, Te);
      return t.stateNode = e, t;
    }
    function r0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = za(fe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function Ex(e, t) {
      return e === null && (e = za(Oe, null, null, Te)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function gD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Hy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = vt, this.eventTimes = Yo(A), this.expirationTimes = Yo(jt), this.pendingLanes = A, this.suspendedLanes = A, this.pingedLanes = A, this.expiredLanes = A, this.mutableReadLanes = A, this.finishedLanes = A, this.entangledLanes = A, this.entanglements = Yo(A), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Hl; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case _h:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Pu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Cx(e, t, a, i, u, s, f, p, v, m) {
      var y = new gD(e, t, a, p, v), R = dD(t, s);
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
      return mg(R), y;
    }
    var a0 = "18.3.1";
    function SD(e, t, a) {
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
    var i0, l0;
    i0 = !1, l0 = {};
    function xx(e) {
      if (!e)
        return La;
      var t = Ru(e), a = t1(t);
      if (t.tag === Z) {
        var i = t.type;
        if (ol(i))
          return X0(t, i, a);
      }
      return a;
    }
    function ED(e, t) {
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
          var s = $e(a) || "Component";
          if (!l0[s]) {
            l0[s] = !0;
            var f = dr;
            try {
              Pt(u), a.mode & Mt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Pt(f) : an();
            }
          }
        }
        return u.stateNode;
      }
    }
    function Tx(e, t, a, i, u, s, f, p) {
      var v = !1, m = null;
      return Cx(e, t, v, m, a, i, u, s, f);
    }
    function Rx(e, t, a, i, u, s, f, p, v, m) {
      var y = !0, R = Cx(a, i, y, e, u, s, f, p, v);
      R.context = xx(null);
      var x = R.current, O = Zr(), M = Ju(x), L = ru(O, M);
      return L.callback = t ?? null, Qu(x, L, M), Db(R, M, O), R;
    }
    function Up(e, t, a, i) {
      ad(t, e);
      var u = t.current, s = Zr(), f = Ju(u);
      Zt(f);
      var p = xx(a);
      t.context === null ? t.context = p : t.pendingContext = p, Hi && dr !== null && !i0 && (i0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, $e(dr) || "Unknown"));
      var v = ru(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Qu(u, v, f);
      return m !== null && (ar(m, u, f, s), Yh(m, u, f)), f;
    }
    function Lm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case X:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function CD(e) {
      switch (e.tag) {
        case G: {
          var t = e.stateNode;
          if (Oc(t)) {
            var a = _v(t);
            Nb(t, a);
          }
          break;
        }
        case Ae: {
          uu(function() {
            var u = ya(e, Me);
            if (u !== null) {
              var s = Zr();
              ar(u, e, Me, s);
            }
          });
          var i = Me;
          u0(e, i);
          break;
        }
      }
    }
    function wx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = zv(a.retryLane, t));
    }
    function u0(e, t) {
      wx(e, t);
      var a = e.alternate;
      a && wx(a, t);
    }
    function xD(e) {
      if (e.tag === Ae) {
        var t = Ho, a = ya(e, t);
        if (a !== null) {
          var i = Zr();
          ar(a, e, t, i);
        }
        u0(e, t);
      }
    }
    function TD(e) {
      if (e.tag === Ae) {
        var t = Ju(e), a = ya(e, t);
        if (a !== null) {
          var i = Zr();
          ar(a, e, t, i);
        }
        u0(e, t);
      }
    }
    function bx(e) {
      var t = Qt(e);
      return t === null ? null : t.stateNode;
    }
    var Dx = function(e) {
      return null;
    };
    function RD(e) {
      return Dx(e);
    }
    var kx = function(e) {
      return !1;
    };
    function wD(e) {
      return kx(e);
    }
    var _x = null, Ox = null, Nx = null, Mx = null, Lx = null, zx = null, Ux = null, Ax = null, jx = null;
    {
      var Hx = function(e, t, a) {
        var i = t[a], u = In(e) ? e.slice() : Ke({}, e);
        return a + 1 === t.length ? (In(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Hx(e[i], t, a + 1), u);
      }, Fx = function(e, t) {
        return Hx(e, t, 0);
      }, Vx = function(e, t, a, i) {
        var u = t[i], s = In(e) ? e.slice() : Ke({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], In(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = Vx(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Bx = function(e, t, a) {
        if (t.length !== a.length) {
          Qe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Qe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Vx(e, t, a, 0);
      }, Px = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = In(e) ? e.slice() : Ke({}, e);
        return s[u] = Px(e[u], t, a + 1, i), s;
      }, $x = function(e, t, a) {
        return Px(e, t, 0, a);
      }, o0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      _x = function(e, t, a, i) {
        var u = o0(e, t);
        if (u !== null) {
          var s = $x(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ke({}, e.memoizedProps);
          var f = ya(e, Me);
          f !== null && ar(f, e, Me, jt);
        }
      }, Ox = function(e, t, a) {
        var i = o0(e, t);
        if (i !== null) {
          var u = Fx(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ke({}, e.memoizedProps);
          var s = ya(e, Me);
          s !== null && ar(s, e, Me, jt);
        }
      }, Nx = function(e, t, a, i) {
        var u = o0(e, t);
        if (u !== null) {
          var s = Bx(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ke({}, e.memoizedProps);
          var f = ya(e, Me);
          f !== null && ar(f, e, Me, jt);
        }
      }, Mx = function(e, t, a) {
        e.pendingProps = $x(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ya(e, Me);
        i !== null && ar(i, e, Me, jt);
      }, Lx = function(e, t) {
        e.pendingProps = Fx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ya(e, Me);
        a !== null && ar(a, e, Me, jt);
      }, zx = function(e, t, a) {
        e.pendingProps = Bx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ya(e, Me);
        i !== null && ar(i, e, Me, jt);
      }, Ux = function(e) {
        var t = ya(e, Me);
        t !== null && ar(t, e, Me, jt);
      }, Ax = function(e) {
        Dx = e;
      }, jx = function(e) {
        kx = e;
      };
    }
    function bD(e) {
      var t = Nr(e);
      return t === null ? null : t.stateNode;
    }
    function DD(e) {
      return null;
    }
    function kD() {
      return dr;
    }
    function _D(e) {
      var t = e.findFiberByHostInstance, a = _.ReactCurrentDispatcher;
      return Du({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: _x,
        overrideHookStateDeletePath: Ox,
        overrideHookStateRenamePath: Nx,
        overrideProps: Mx,
        overridePropsDeletePath: Lx,
        overridePropsRenamePath: zx,
        setErrorHandler: Ax,
        setSuspenseHandler: jx,
        scheduleUpdate: Ux,
        currentDispatcherRef: a,
        findHostInstanceByFiber: bD,
        findFiberByHostInstance: t || DD,
        // React Refresh
        findHostInstancesForRefresh: iD,
        scheduleRefresh: rD,
        scheduleRoot: aD,
        setRefreshHandler: nD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: kD,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: a0
      });
    }
    var Yx = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function s0(e) {
      this._internalRoot = e;
    }
    zm.prototype.render = s0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Um(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Sn) {
          var i = bx(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Up(e, t, null, null);
    }, zm.prototype.unmount = s0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nx() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), uu(function() {
          Up(null, e, null, null);
        }), Y0(t);
      }
    };
    function OD(e, t) {
      if (!Um(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Qx(e);
      var a = !1, i = !1, u = "", s = Yx;
      t != null && (t.hydrate ? Qe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ra && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = Tx(e, _h, null, a, i, u, s);
      xh(f.current, e);
      var p = e.nodeType === Sn ? e.parentNode : e;
      return Bd(p), new s0(f);
    }
    function zm(e) {
      this._internalRoot = e;
    }
    function ND(e) {
      e && Yv(e);
    }
    zm.prototype.unstable_scheduleHydration = ND;
    function MD(e, t, a) {
      if (!Um(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Qx(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = Yx;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = Rx(t, null, e, _h, i, s, f, p, v);
      if (xh(m.current, e), Bd(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          A1(m, R);
        }
      return new zm(m);
    }
    function Um(e) {
      return !!(e && (e.nodeType === kr || e.nodeType === pi || e.nodeType === $f));
    }
    function Ap(e) {
      return !!(e && (e.nodeType === kr || e.nodeType === pi || e.nodeType === $f || e.nodeType === Sn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Qx(e) {
      e.nodeType === kr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Zd(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var LD = _.ReactCurrentOwner, Ix;
    Ix = function(e) {
      if (e._reactRootContainer && e.nodeType !== Sn) {
        var t = bx(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = c0(e), u = !!(i && Vu(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === kr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function c0(e) {
      return e ? e.nodeType === pi ? e.documentElement : e.firstChild : null;
    }
    function Wx() {
    }
    function zD(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Lm(f);
            s.call(x);
          };
        }
        var f = Rx(
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
          Wx
        );
        e._reactRootContainer = f, xh(f.current, e);
        var p = e.nodeType === Sn ? e.parentNode : e;
        return Bd(p), uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var x = Lm(y);
            m.call(x);
          };
        }
        var y = Tx(
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
          Wx
        );
        e._reactRootContainer = y, xh(y.current, e);
        var R = e.nodeType === Sn ? e.parentNode : e;
        return Bd(R), uu(function() {
          Up(t, y, a, i);
        }), y;
      }
    }
    function UD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Am(e, t, a, i, u) {
      Ix(a), UD(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = zD(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Lm(f);
            p.call(v);
          };
        }
        Up(t, f, e, u);
      }
      return Lm(f);
    }
    var Gx = !1;
    function AD(e) {
      {
        Gx || (Gx = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = LD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", kt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === kr ? e : ED(e, "findDOMNode");
    }
    function jD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ap(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Zd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Am(null, e, t, !0, a);
    }
    function HD(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ap(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Zd(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Am(null, e, t, !1, a);
    }
    function FD(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ap(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !uy(e))
        throw new Error("parentComponent must be a valid React Component");
      return Am(e, t, a, !1, i);
    }
    var Xx = !1;
    function VD(e) {
      if (Xx || (Xx = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Ap(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Zd(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = c0(e), i = a && !Vu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return uu(function() {
          Am(null, null, e, !1, function() {
            e._reactRootContainer = null, Y0(e);
          });
        }), !0;
      } else {
        {
          var u = c0(e), s = !!(u && Vu(u)), f = e.nodeType === kr && Ap(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    or(CD), Nu(xD), Vv(TD), Xo(va), Rd(jv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ws(PT), ly(BS, Mb, uu);
    function BD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Um(t))
        throw new Error("Target container is not a DOM element.");
      return SD(e, t, null, a);
    }
    function PD(e, t, a, i) {
      return FD(e, t, a, i);
    }
    var f0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Vu, Xc, Th, Eu, Gs, BS]
    };
    function $D(e, t) {
      return f0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), OD(e, t);
    }
    function YD(e, t, a) {
      return f0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), MD(e, t, a);
    }
    function QD(e) {
      return nx() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), uu(e);
    }
    var ID = _D({
      findFiberByHostInstance: ss,
      bundleType: 1,
      version: a0,
      rendererPackageName: "react-dom"
    });
    if (!ID && yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Kx = window.location.protocol;
      /^(https?|file):$/.test(Kx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Kx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f0, xa.createPortal = BD, xa.createRoot = $D, xa.findDOMNode = AD, xa.flushSync = QD, xa.hydrate = jD, xa.hydrateRoot = YD, xa.render = HD, xa.unmountComponentAtNode = VD, xa.unstable_batchedUpdates = BS, xa.unstable_renderSubtreeIntoContainer = PD, xa.version = a0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xa;
}
function lT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lT);
    } catch (B) {
      console.error(B);
    }
  }
}
process.env.NODE_ENV === "production" ? (lT(), h0.exports = JD()) : h0.exports = ek();
var tk = h0.exports, m0, Hm = tk;
if (process.env.NODE_ENV === "production")
  m0 = Hm.createRoot, Hm.hydrateRoot;
else {
  var aT = Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  m0 = function(B, q) {
    aT.usingClientEntryPoint = !0;
    try {
      return Hm.createRoot(B, q);
    } finally {
      aT.usingClientEntryPoint = !1;
    }
  };
}
function nk() {
  const B = ak(), q = /^#\/element\/(.+)$/.exec(B);
  return /* @__PURE__ */ ye.jsx("div", { className: "karyotype_viewer_main ", children: /* @__PURE__ */ ye.jsx(rk, { route: B, children: q ? /* @__PURE__ */ ye.jsx(lk, { elementId: decodeURIComponent(q[1]) }) : /* @__PURE__ */ ye.jsx(ik, {}) }) });
}
class rk extends Cf.Component {
  constructor(q) {
    super(q), this.state = { error: null };
  }
  static getDerivedStateFromError(q) {
    return { error: q };
  }
  componentDidCatch(q, _) {
  }
  componentDidUpdate(q) {
    q.route !== this.props.route && this.state.error && this.setState({ error: null });
  }
  render() {
    return this.state.error ? /* @__PURE__ */ ye.jsx("div", { className: "max-w-7xl mx-auto p-4", children: /* @__PURE__ */ ye.jsxs("div", { className: "rounded-xl border bg-white p-6", children: [
      /* @__PURE__ */ ye.jsx("div", { className: "text-red-700 font-semibold mb-2", children: "Something went wrong" }),
      /* @__PURE__ */ ye.jsx("pre", { className: "text-xs whitespace-pre-wrap text-red-800", children: String(this.state.error) }),
      /* @__PURE__ */ ye.jsx("button", { className: "mt-3 px-3 py-1.5 rounded-xl border", onClick: () => this.setState({ error: null }), children: "Try again" })
    ] }) }) : this.props.children;
  }
}
function ak() {
  const [B, q] = yl(() => window.location.hash || "#/");
  return no(() => {
    const _ = () => q(window.location.hash || "#/");
    return window.addEventListener("hashchange", _), () => window.removeEventListener("hashchange", _);
  }, []), B;
}
function ik() {
  const [B, q] = yl(null), [_, dt] = yl(null), [_e, Qe] = yl("(none)"), [g, Fe] = yl("(none)"), [J, Z] = yl(!1), [Oe, G] = yl(null), [fe, X] = yl(null);
  return no(() => {
    try {
      sessionStorage.removeItem("selected_element");
      const re = [];
      for (let Ce = 0; Ce < sessionStorage.length; Ce++) {
        const Ne = sessionStorage.key(Ce);
        Ne && Ne.startsWith("element:") && re.push(Ne);
      }
      re.forEach((Ce) => sessionStorage.removeItem(Ce));
    } catch {
    }
  }, []), no(() => {
    const re = document.getElementById("karyotype_div");
    if (!re)
      return;
    async function Ce() {
      try {
        console.log(re.getAttribute("data-karyo-txt"), typeof re.getAttribute("data-karyo-txt")), console.log(re.getAttribute("data-karyo-bed"));
        const tt = await (await fetch(re.getAttribute("data-karyo-txt"))).text();
        q(tt), Qe(re.getAttribute("data-karyo-txt"));
        const De = await (await fetch(re.getAttribute("data-karyo-bed"))).text();
        dt(De), Fe(re.getAttribute("data-karyo-bed"));
        const Je = re.getAttribute("data-karyo-parent");
        G(Je);
      } catch (Ne) {
        console.error("Error loading static files", Ne);
      }
    }
    Ce();
  }, []), /* @__PURE__ */ ye.jsx("div", { className: "main-grid grid grid-cols-1 lg:grid-cols-12 gap-4", children: /* @__PURE__ */ ye.jsx("div", { className: "col-left lg:col-span-9", children: /* @__PURE__ */ ye.jsx(uk, { karyoText: B, bedText: _, parent: Oe }) }) });
}
function lk({ elementId: B }) {
  const q = Vp(() => {
    const _ = sessionStorage.getItem(`element:${B}`);
    return _ ? JSON.parse(_) : null;
  }, [B]);
  return /* @__PURE__ */ ye.jsxs("div", { className: "bg-white rounded-2xl shadow p-6", children: [
    /* @__PURE__ */ ye.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ ye.jsx("a", { href: "#/", className: "text-sm text-blue-600 hover:underline", onClick: (_) => {
      _.preventDefault(), window.history.length > 1 ? window.history.back() : window.location.hash = "#/";
    }, children: "← Back to viewer" }) }),
    /* @__PURE__ */ ye.jsxs("h1", { className: "mt-2 text-2xl font-semibold", children: [
      "Element: ",
      /* @__PURE__ */ ye.jsx("span", { className: "font-mono text-base px-2 py-1 rounded bg-gray-100 break-all", children: B })
    ] }),
    q ? /* @__PURE__ */ ye.jsxs("div", { className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ ye.jsxs("div", { className: "p-4 bg-gray-50 rounded-xl", children: [
        /* @__PURE__ */ ye.jsx("h2", { className: "font-semibold", children: "Summary" }),
        /* @__PURE__ */ ye.jsxs("ul", { className: "text-sm text-gray-800 mt-2 space-y-1", children: [
          /* @__PURE__ */ ye.jsxs("li", { children: [
            /* @__PURE__ */ ye.jsx("b", { children: "Chrom:" }),
            " ",
            q.chr
          ] }),
          /* @__PURE__ */ ye.jsxs("li", { children: [
            /* @__PURE__ */ ye.jsx("b", { children: "Start:" }),
            " ",
            Number(q.start).toLocaleString()
          ] }),
          /* @__PURE__ */ ye.jsxs("li", { children: [
            /* @__PURE__ */ ye.jsx("b", { children: "End:" }),
            " ",
            Number(q.end).toLocaleString()
          ] }),
          /* @__PURE__ */ ye.jsxs("li", { children: [
            /* @__PURE__ */ ye.jsx("b", { children: "Name:" }),
            " ",
            q.name
          ] }),
          /* @__PURE__ */ ye.jsxs("li", { children: [
            /* @__PURE__ */ ye.jsx("b", { children: "Family:" }),
            " ",
            q.family
          ] })
        ] })
      ] }),
      /* @__PURE__ */ ye.jsxs("div", { className: "p-4 bg-gray-50 rounded-xl", children: [
        /* @__PURE__ */ ye.jsx("h2", { className: "font-semibold", children: "External Links" }),
        /* @__PURE__ */ ye.jsxs("ul", { className: "text-sm list-disc pl-5 mt-2", children: [
          /* @__PURE__ */ ye.jsx("li", { children: /* @__PURE__ */ ye.jsx("a", { className: "text-blue-600 hover:underline", href: "#", children: "Repeat-ome record" }) }),
          /* @__PURE__ */ ye.jsx("li", { children: /* @__PURE__ */ ye.jsx("a", { className: "text-blue-600 hover:underline", href: "#", children: "UCSC / Ensembl" }) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ ye.jsx("p", { className: "mt-3 text-gray-600", children: "No cached element data for this id. Navigate here by clicking an element in the viewer." })
  ] });
}
function uk({ karyoText: B, bedText: q, parent: _ }) {
  const dt = ws(null), _e = ws(null), Qe = ws(null), g = ws(!1), [Fe, J] = yl(() => sessionStorage.getItem("selected_element") || null);
  no(() => {
    const Y = () => J(null);
    return window.addEventListener("kv-clear-all", Y), () => window.removeEventListener("kv-clear-all", Y);
  }, []);
  const Z = ws({ x: 0, y: 0, s: 1 }), Oe = ws(!1), G = ws({ x: 0, y: 0, tx: 0, ty: 0 }), fe = (Y, I, me) => {
    Z.current = { x: Y, y: I, s: me };
    const Xe = Qe.current;
    Xe && Xe.setAttribute("transform", `translate(${Y},${I}) scale(${me})`);
  }, X = () => {
    const Y = _e.current, I = Qe.current;
    if (!(!Y || !I))
      try {
        const me = I.getBBox();
        if (!isFinite(me.width) || !isFinite(me.height) || me.width === 0 || me.height === 0) return;
        const Xe = Y.clientWidth || 1e3, pt = Y.clientHeight || 600, Ht = 20, W = (Xe - 2 * Ht) / me.width, ge = (pt - 2 * Ht) / me.height, K = Math.min(W, ge), Ze = Ht - me.x * K + (Xe - (me.width * K + 2 * Ht)) / 2, rt = Ht - me.y * K + (pt - (me.height * K + 2 * Ht)) / 2;
        fe(Ze, rt, K);
      } catch {
      }
  }, re = (Y, I, me) => {
    const { x: Xe, y: pt, s: Ht } = Z.current, W = pk(Ht * Y, 0.3, 200), ge = (I - Xe) / Ht, K = (me - pt) / Ht, Ze = I - ge * W, rt = me - K * W;
    fe(Ze, rt, W);
  }, Ce = (Y) => {
    Y.preventDefault();
    const I = Math.exp(-Y.deltaY * 1e-3), me = Y.currentTarget.getBoundingClientRect();
    re(I, Y.clientX - me.left, Y.clientY - me.top);
  }, Ne = (Y) => {
    const I = _e.current;
    if (!I) return;
    const me = Y.target;
    if (!(me && typeof me.getAttribute == "function" && me.getAttribute("data-el") === "1")) {
      Oe.current = !0;
      try {
        I.setPointerCapture(Y.pointerId);
      } catch {
      }
      G.current = { x: Y.clientX, y: Y.clientY, tx: Z.current.x, ty: Z.current.y };
    }
  }, tt = (Y) => {
    if (!Oe.current) return;
    const I = Y.clientX - G.current.x, me = Y.clientY - G.current.y;
    fe(G.current.tx + I, G.current.ty + me, Z.current.s);
  }, nt = (Y) => {
    const I = _e.current;
    if (I) {
      Oe.current = !1;
      try {
        I.releasePointerCapture(Y.pointerId);
      } catch {
      }
    }
  }, De = Vp(() => B ? ck(B) : [], [B]), Je = Vp(() => q ? fk(q) : [], [q]);
  no(() => {
    g.current = !1;
  }, [De, Je]);
  const Ae = Vp(() => Array.from(new Set(Je.map((Y) => Y.family))), [Je]), [Tt, Pe] = yl(/* @__PURE__ */ new Set()), en = Vp(() => {
    const Y = /* @__PURE__ */ new Map();
    return Ae.forEach((I, me) => Y.set(I, dk(me, Ae.length || 1))), Y;
  }, [Ae]);
  console.log(en), console.log(Ae), no(() => {
    Pe(new Set(Ae));
  }, [Ae]), no(() => {
    const Y = "http://www.w3.org/2000/svg", I = _e.current;
    if (!I) return;
    for (; I.firstChild; ) I.removeChild(I.firstChild);
    const me = document.createElementNS(Y, "defs");
    I.appendChild(me);
    const Xe = document.createElementNS(Y, "g");
    if (I.appendChild(Xe), Qe.current = Xe, !De.length) return;
    const pt = new Map(De.map((Ue) => [Ue.key, Ue])), Ht = De.map((Ue) => Ue.key), W = Ht.length, K = Math.ceil(W / 14), Ze = Math.floor(W / K), rt = W % K, Yn = [];
    let un = 0;
    for (let Ue = 0; Ue < K; Ue++) {
      const At = Ze + (Ue < rt ? 1 : 0);
      Yn.push(Ht.slice(un, un + At)), un += At;
    }
    const ta = 16, hn = 340, mn = 80, kn = 20, ir = 40, Un = /* @__PURE__ */ new Map(), yn = De.reduce((Ue, At) => Math.max(Ue, At.end - At.start), 1), cr = (Ue, At, Ct) => (_t) => At + (_t - Ue.start) / (Ue.end - Ue.start) * Ct;
    Yn.forEach((Ue, At) => {
      Ue.forEach((Ct, _t) => {
        const Ot = pt.get(Ct);
        if (!Ot) return;
        const Nt = (Ot.end - Ot.start) / yn * 280 + 40, nn = ir + _t * mn, rn = kn + At * hn, Hn = cr(Ot, rn, Nt);
        Un.set(Ct, { x: nn, y: rn, height: Nt, scale: Hn, k: Ot });
      });
    });
    for (const [Ue, At] of Un) {
      const { x: Ct, y: _t, height: Ot, k: jn, scale: Nt } = At, nn = Nt(jn.ceStart), rn = Nt(jn.ceEnd), Hn = sk(Ct, _t, Ot, ta, nn, rn), gn = document.createElementNS(Y, "path");
      gn.setAttribute("d", Hn), gn.setAttribute("fill", "#e5e7eb"), gn.setAttribute("stroke", "#9ca3af"), gn.setAttribute("stroke-width", "1"), gn.setAttribute("shape-rendering", "geometricPrecision"), Xe.appendChild(gn);
      const Q = `clip-${Ue}`, ie = document.createElementNS(Y, "clipPath");
      ie.setAttribute("id", Q);
      const Ve = document.createElementNS(Y, "path");
      Ve.setAttribute("d", Hn), ie.appendChild(Ve), me.appendChild(ie);
      const Ge = document.createElementNS(Y, "g");
      Ge.setAttribute("clip-path", `url(#${Q})`), Xe.appendChild(Ge);
      const lt = document.createElementNS(Y, "text");
      lt.setAttribute("x", String(Ct + ta / 2)), lt.setAttribute("y", String(_t + Ot + 16)), lt.setAttribute("text-anchor", "middle"), lt.setAttribute("font-size", "12"), lt.setAttribute("fill", "#374151"), lt.textContent = jn.label, Xe.appendChild(lt), At.gChr = Ge;
    }
    const Gt = document.createElementNS(Y, "rect");
    Gt.setAttribute("fill", "none"), Gt.setAttribute("stroke", "#111827"), Gt.setAttribute("stroke-width", "2"), Gt.setAttribute("vector-effect", "non-scaling-stroke"), Gt.setAttribute("pointer-events", "none"), Gt.setAttribute("visibility", "hidden");
    const bt = document.createElementNS(Y, "rect");
    bt.setAttribute("fill", "none"), bt.setAttribute("stroke", "#2563eb"), bt.setAttribute("stroke-width", "2"), bt.setAttribute("vector-effect", "non-scaling-stroke"), bt.setAttribute("pointer-events", "none"), bt.setAttribute("visibility", "hidden");
    const on = /* @__PURE__ */ new Map(), An = (Ue) => Tt.has(Ue);
    for (const Ue of Je) {
      if (!An(Ue.family) || !pt.has(Ue.key)) continue;
      const At = Un.get(Ue.key);
      if (!At) continue;
      const { k: Ct, scale: _t } = At, Ot = Math.max(Ct.start, Math.min(Ue.start, Ct.end)), jn = Math.max(Ct.start, Math.min(Ue.end + 1, Ct.end + 1)), Nt = _t(Ot), nn = _t(jn), rn = `${pt.get(Ue.key).label}:${Ue.start}-${Ue.end}:${Ue.name}`.replace(/\s+/g, "_");
      (on.get(Ue.key) || on.set(Ue.key, []).get(Ue.key)).push({ b: Ue, yTop: Nt, yBot: nn, id: rn });
    }
    const Ta = 2, Aa = 8;
    for (const [Ue, At] of on) {
      const Ct = Un.get(Ue);
      if (!Ct) continue;
      const { x: _t, y: Ot, height: jn, gChr: Nt } = Ct, nn = 16 - 2 * Ta, rn = Math.min(nn, Math.max(Aa, nn)), Hn = _t + (16 - rn) / 2, gn = At.slice().sort((Q, ie) => Q.yTop - ie.yTop || Q.yBot - Q.yTop - (ie.yBot - ie.yTop));
      for (let Q = 0; Q < gn.length; Q++) {
        const { b: ie, id: Ve } = gn[Q];
        let Ge = Math.max(Ot, Math.min(Ot + jn, gn[Q].yTop)), lt = Math.max(Ge, Math.min(Ot + jn, gn[Q].yBot));
        const ht = document.createElementNS(Y, "rect");
        ht.setAttribute("x", String(Hn)), ht.setAttribute("width", String(rn)), ht.setAttribute("y", String(Ge)), ht.setAttribute("height", String(Math.max(1, lt - Ge))), ht.setAttribute("fill", en.get(ie.family) || "#10b981"), ht.setAttribute("stroke", "none"), ht.setAttribute("cursor", "pointer"), ht.setAttribute("pointer-events", "all"), ht.setAttribute("data-el", "1"), ht.addEventListener("pointerdown", (xt) => xt.stopPropagation()), ht.addEventListener("pointerenter", () => {
          bt.setAttribute("x", String(Hn)), bt.setAttribute("y", String(Ge)), bt.setAttribute("width", String(rn)), bt.setAttribute("height", String(Math.max(1, lt - Ge))), bt.setAttribute("visibility", "visible"), Nt.appendChild(bt);
        }), ht.addEventListener("pointerleave", () => {
          bt.setAttribute("visibility", "hidden");
        }), ht.addEventListener("click", () => {
          window.open("/repeatTable/" + ie.family, "_blank");
        });
        const Bt = document.createElementNS(Y, "title"), _n = pt.get(ie.key);
        if (Bt.textContent = `${ie.name} — ${ie.family}
${_n ? _n.label : ie.key}:${ie.start}-${ie.end}`, ht.appendChild(Bt), Nt.appendChild(ht), Fe && Ve === Fe) {
          const xt = { x: Hn, w: rn, y: Ge, h: Math.max(1, lt - Ge) }, ut = document.createElementNS(Y, "rect");
          ut.setAttribute("fill", "none"), ut.setAttribute("stroke", "#111827"), ut.setAttribute("stroke-width", "2"), ut.setAttribute("vector-effect", "non-scaling-stroke"), ut.setAttribute("pointer-events", "none"), ut.setAttribute("x", String(xt.x)), ut.setAttribute("y", String(xt.y)), ut.setAttribute("width", String(xt.w)), ut.setAttribute("height", String(xt.h)), Nt.appendChild(ut);
        }
      }
    }
    g.current || (setTimeout(X, 0), g.current = !0);
  }, [De, Je, Tt, en, Fe]), no(() => {
    const Y = _e.current;
    if (!Y) return;
    const I = (me) => {
      me.preventDefault(), Math.pow(1.0015, me.deltaY);
      const Xe = Y.getBoundingClientRect();
      (me.clientX - Xe.left) / Xe.width, (me.clientY - Xe.top) / Xe.height;
    };
    return Y.addEventListener("wheel", I, { passive: !1 }), () => {
      Y.removeEventListener("wheel", I);
    };
  }, []);
  const Ut = () => {
    const Y = _e.current;
    if (!Y) return;
    const I = Y.getBoundingClientRect();
    re(1.2, I.width / 2, I.height / 2);
  }, tn = () => {
    const Y = _e.current;
    if (!Y) return;
    const I = Y.getBoundingClientRect();
    re(1 / 1.2, I.width / 2, I.height / 2);
  }, Wt = () => {
    X();
  };
  return /* @__PURE__ */ ye.jsxs("div", { ref: dt, className: "kary_card bg-white rounded-2xl shadow overflow-hidden", children: [
    /* @__PURE__ */ ye.jsx("div", { className: "kary_btns_div flex items-center justify-between border-b px-3 py-2", children: /* @__PURE__ */ ye.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ ye.jsx("button", { onClick: Ut, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "＋ Zoom in" }),
      /* @__PURE__ */ ye.jsx("button", { onClick: tn, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "－ Zoom out" }),
      /* @__PURE__ */ ye.jsx("button", { onClick: Wt, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "⟲ Reset" })
    ] }) }),
    /* @__PURE__ */ ye.jsxs("div", { className: "kary_graph_holder grid grid-cols-12", children: [
      /* @__PURE__ */ ye.jsx("div", { className: "kary_graph col-span-9 border-r", children: /* @__PURE__ */ ye.jsxs("div", { className: "kary_svg_holder relative w-full h-full bg-gray-50", children: [
        /* @__PURE__ */ ye.jsx(
          "svg",
          {
            ref: _e,
            className: "absolute inset-0 w-full h-full block",
            onWheel: Ce,
            onPointerDown: Ne,
            onPointerMove: tt,
            onPointerUp: nt
          }
        ),
        !ok(De) && !Je.length && /* @__PURE__ */ ye.jsx("div", { className: "absolute inset-0 grid place-items-center pointer-events-none", children: /* @__PURE__ */ ye.jsxs("div", { className: "text-center text-gray-500", children: [
          /* @__PURE__ */ ye.jsx("div", { className: "mb-2 text-2xl", children: "⬆" }),
          /* @__PURE__ */ ye.jsx("p", { className: "font-medium", children: "Drop karyotype + BED here" }),
          /* @__PURE__ */ ye.jsx("p", { className: "text-sm", children: "or use the upload buttons" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ ye.jsx("div", { className: "col-span-3 max-h-[72vh] overflow-auto p-3", children: Ae.length ? /* @__PURE__ */ ye.jsx("div", { className: "karyo_btns space-y-2", children: Ae.map((Y) => /* @__PURE__ */ ye.jsxs("button", { onClick: () => {
        const I = new Set(Tt);
        I.has(Y) ? I.delete(Y) : I.add(Y), Pe(I);
      }, className: `w-full flex items-center gap-3 px-3 py-2 rounded-xl border ${Tt.has(Y) ? "hover:opacity-70" : "bg-gray-100 opacity-70"}`, style: { background: en.get(Y) || "#10b981" }, children: [
        /* @__PURE__ */ ye.jsx("span", { className: "inline-block w-5 h-5" }),
        /* @__PURE__ */ ye.jsx("span", { className: "text-sm font-medium flex-1 text-left", children: Y })
      ] }, Y)) }) : /* @__PURE__ */ ye.jsx("div", { className: "text-sm text-gray-500 p-2", children: "Legend appears after loading a BED (column 5 = family)." }) })
    ] })
  ] });
}
function ok(B) {
  return Array.isArray(B) && B.length > 0;
}
function sk(B, q, _, dt, _e, Qe) {
  const g = B + dt / 2, Fe = B, J = B + dt, Z = q, Oe = q + _;
  let G = Math.max(Z, Math.min(_e, Qe)), fe = Math.min(Oe, Math.max(_e, Qe));
  const X = 4, re = dt * 0.45, Ce = Math.min(re * 0.25, 6), Ne = Math.max(G, Z + X), tt = Math.min(fe, Oe - X);
  return [
    `M ${Fe} ${Z + X}`,
    `Q ${Fe} ${Z} ${Fe + X} ${Z}`,
    `L ${J - X} ${Z}`,
    `Q ${J} ${Z} ${J} ${Z + X}`,
    `L ${J} ${Ne - Ce}`,
    `Q ${J} ${Ne} ${g + re / 2 + Ce} ${Ne}`,
    `Q ${g + re / 2} ${Ne} ${g + re / 2} ${Ne + Ce}`,
    `L ${g + re / 2} ${tt - Ce}`,
    `Q ${g + re / 2} ${tt} ${g + re / 2 + Ce} ${tt}`,
    `Q ${J} ${tt} ${J} ${tt + Ce}`,
    `L ${J} ${Oe - X}`,
    `Q ${J} ${Oe} ${J - X} ${Oe}`,
    `L ${Fe + X} ${Oe}`,
    `Q ${Fe} ${Oe} ${Fe} ${Oe - X}`,
    `L ${Fe} ${tt + Ce}`,
    `Q ${Fe} ${tt} ${g - re / 2 - Ce} ${tt}`,
    `Q ${g - re / 2} ${tt} ${g - re / 2} ${tt - Ce}`,
    `L ${g - re / 2} ${Ne + Ce}`,
    `Q ${g - re / 2} ${Ne} ${g - re / 2 - Ce} ${Ne}`,
    `Q ${Fe} ${Ne} ${Fe} ${Ne - Ce}`,
    `L ${Fe} ${Z + X}`,
    "Z"
  ].join(" ");
}
function uT(B) {
  return String(B || "").trim().replace(/^chrom(?:osome)?/i, "").replace(/^chr/i, "").trim().toLowerCase();
}
function ck(B) {
  const q = [], _ = String(B).split(/\r?\n/);
  for (let dt = 0; dt < _.length; dt++) {
    const _e = String(_[dt] || "").trim();
    if (!_e || /^#/.test(_e)) continue;
    const Qe = _e.split(/\t|,|\s+/).filter(Boolean);
    if (Qe.length < 5) continue;
    const g = Qe[1], Fe = Qe[2];
    if (/start/i.test(g) || /end/i.test(Fe) || /ce[_-]?start/i.test(_e)) continue;
    const [Z, Oe, G, fe, X] = Qe, re = String(Z).trim(), Ce = uT(re), Ne = Fm(Oe), tt = Fm(G), nt = Fm(fe), De = Fm(X);
    [Ne, tt, nt, De].some((Je) => !isFinite(Je)) || q.push({ key: Ce, label: re, start: Ne, end: tt, ceStart: nt, ceEnd: De });
  }
  return q;
}
function fk(B) {
  const q = [], _ = String(B).split(/\r?\n/);
  for (const dt of _) {
    const _e = String(dt).trim();
    if (!_e || /^#/.test(_e)) continue;
    const Qe = _e.split(/\t|\s+/);
    if (Qe.length < 5) continue;
    const [g, Fe, J, Z, Oe] = Qe, G = uT(g), fe = +Fe, X = +J;
    if (!isFinite(fe) || !isFinite(X)) continue;
    const re = fe + 1, Ce = X;
    q.push({ key: G, start: re, end: Ce, name: Z, family: Oe, raw: _e });
  }
  return q;
}
function dk(B, q) {
  return `hsl(${B * 360 / Math.max(1, q) % 360} 70% 45%)`;
}
function pk(B, q, _) {
  return Math.max(q, Math.min(_, B));
}
function Fm(B) {
  const _ = +String(B).replace(/,/g, "");
  return isFinite(_) ? _ : NaN;
}
const oT = document.getElementById("karyotype_div");
if (!oT)
  throw new Error('Missing <div id="karyotype_div"> in your HTML/template');
const vk = m0(oT);
vk.render(
  /* @__PURE__ */ ye.jsx(Cf.StrictMode, { children: /* @__PURE__ */ ye.jsx(nk, {}) })
);
