import Tf, { useState as Hi, useEffect as du, useMemo as ks, useRef as bs } from "react";
var h0 = { exports: {} }, Vp = {};
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
function Kk() {
  if (Zx) return Vp;
  Zx = 1;
  var j = Tf, Q = Symbol.for("react.element"), w = Symbol.for("react.fragment"), Ve = Object.prototype.hasOwnProperty, Ue = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ie = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(Fe, q, Z) {
    var be, I = {}, oe = null, ee = null;
    Z !== void 0 && (oe = "" + Z), q.key !== void 0 && (oe = "" + q.key), q.ref !== void 0 && (ee = q.ref);
    for (be in q) Ve.call(q, be) && !Ie.hasOwnProperty(be) && (I[be] = q[be]);
    if (Fe && Fe.defaultProps) for (be in q = Fe.defaultProps, q) I[be] === void 0 && (I[be] = q[be]);
    return { $$typeof: Q, type: Fe, key: oe, ref: ee, props: I, _owner: Ue.current };
  }
  return Vp.Fragment = w, Vp.jsx = g, Vp.jsxs = g, Vp;
}
var Bp = {};
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
function qk() {
  return Jx || (Jx = 1, process.env.NODE_ENV !== "production" && function() {
    var j = Tf, Q = Symbol.for("react.element"), w = Symbol.for("react.portal"), Ve = Symbol.for("react.fragment"), Ue = Symbol.for("react.strict_mode"), Ie = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), Fe = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), he = Symbol.iterator, ke = "@@iterator";
    function me(E) {
      if (E === null || typeof E != "object")
        return null;
      var V = he && E[he] || E[ke];
      return typeof V == "function" ? V : null;
    }
    var We = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Re(E) {
      {
        for (var V = arguments.length, re = new Array(V > 1 ? V - 1 : 0), Le = 1; Le < V; Le++)
          re[Le - 1] = arguments[Le];
        De("error", E, re);
      }
    }
    function De(E, V, re) {
      {
        var Le = We.ReactDebugCurrentFrame, qe = Le.getStackAddendum();
        qe !== "" && (V += "%s", re = re.concat([qe]));
        var Qe = re.map(function(lt) {
          return String(lt);
        });
        Qe.unshift("Warning: " + V), Function.prototype.apply.call(console[E], console, Qe);
      }
    }
    var tt = !1, Ee = !1, nt = !1, Ce = !1, Pt = !1, mt;
    mt = Symbol.for("react.module.reference");
    function yt(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === Ve || E === Ie || Pt || E === Ue || E === Z || E === be || Ce || E === ee || tt || Ee || nt || typeof E == "object" && E !== null && (E.$$typeof === oe || E.$$typeof === I || E.$$typeof === g || E.$$typeof === Fe || E.$$typeof === q || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === mt || E.getModuleId !== void 0));
    }
    function Ut(E, V, re) {
      var Le = E.displayName;
      if (Le)
        return Le;
      var qe = V.displayName || V.name || "";
      return qe !== "" ? re + "(" + qe + ")" : re;
    }
    function gt(E) {
      return E.displayName || "Context";
    }
    function _e(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && Re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case Ve:
          return "Fragment";
        case w:
          return "Portal";
        case Ie:
          return "Profiler";
        case Ue:
          return "StrictMode";
        case Z:
          return "Suspense";
        case be:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case Fe:
            var V = E;
            return gt(V) + ".Consumer";
          case g:
            var re = E;
            return gt(re._context) + ".Provider";
          case q:
            return Ut(E, E.render, "ForwardRef");
          case I:
            var Le = E.displayName || null;
            return Le !== null ? Le : _e(E.type) || "Memo";
          case oe: {
            var qe = E, Qe = qe._payload, lt = qe._init;
            try {
              return _e(lt(Qe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var At = Object.assign, Kt = 0, Vt, K, L, G, W, $e, Pe;
    function Yt() {
    }
    Yt.__reactDisabledLog = !0;
    function an() {
      {
        if (Kt === 0) {
          Vt = console.log, K = console.info, L = console.warn, G = console.error, W = console.group, $e = console.groupCollapsed, Pe = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: Yt,
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
        Kt++;
      }
    }
    function sn() {
      {
        if (Kt--, Kt === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, E, {
              value: Vt
            }),
            info: At({}, E, {
              value: K
            }),
            warn: At({}, E, {
              value: L
            }),
            error: At({}, E, {
              value: G
            }),
            group: At({}, E, {
              value: W
            }),
            groupCollapsed: At({}, E, {
              value: $e
            }),
            groupEnd: At({}, E, {
              value: Pe
            })
          });
        }
        Kt < 0 && Re("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Qt = We.ReactCurrentDispatcher, It;
    function yn(E, V, re) {
      {
        if (It === void 0)
          try {
            throw Error();
          } catch (qe) {
            var Le = qe.stack.trim().match(/\n( *(at )?)/);
            It = Le && Le[1] || "";
          }
        return `
` + It + E;
      }
    }
    var zn = !1, ir;
    {
      var gn = typeof WeakMap == "function" ? WeakMap : Map;
      ir = new gn();
    }
    function fr(E, V) {
      if (!E || zn)
        return "";
      {
        var re = ir.get(E);
        if (re !== void 0)
          return re;
      }
      var Le;
      zn = !0;
      var qe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Qe;
      Qe = Qt.current, Qt.current = null, an();
      try {
        if (V) {
          var lt = function() {
            throw Error();
          };
          if (Object.defineProperty(lt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(lt, []);
            } catch (Ze) {
              Le = Ze;
            }
            Reflect.construct(E, [], lt);
          } else {
            try {
              lt.call();
            } catch (Ze) {
              Le = Ze;
            }
            E.call(lt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            Le = Ze;
          }
          E();
        }
      } catch (Ze) {
        if (Ze && Le && typeof Ze.stack == "string") {
          for (var at = Ze.stack.split(`
`), _n = Le.stack.split(`
`), Wt = at.length - 1, Jt = _n.length - 1; Wt >= 1 && Jt >= 0 && at[Wt] !== _n[Jt]; )
            Jt--;
          for (; Wt >= 1 && Jt >= 0; Wt--, Jt--)
            if (at[Wt] !== _n[Jt]) {
              if (Wt !== 1 || Jt !== 1)
                do
                  if (Wt--, Jt--, Jt < 0 || at[Wt] !== _n[Jt]) {
                    var vr = `
` + at[Wt].replace(" at new ", " at ");
                    return E.displayName && vr.includes("<anonymous>") && (vr = vr.replace("<anonymous>", E.displayName)), typeof E == "function" && ir.set(E, vr), vr;
                  }
                while (Wt >= 1 && Jt >= 0);
              break;
            }
        }
      } finally {
        zn = !1, Qt.current = Qe, sn(), Error.prepareStackTrace = qe;
      }
      var si = E ? E.displayName || E.name : "", ci = si ? yn(si) : "";
      return typeof E == "function" && ir.set(E, ci), ci;
    }
    function Un(E, V, re) {
      return fr(E, !1);
    }
    function Pn(E) {
      var V = E.prototype;
      return !!(V && V.isReactComponent);
    }
    function ln(E, V, re) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return fr(E, Pn(E));
      if (typeof E == "string")
        return yn(E);
      switch (E) {
        case Z:
          return yn("Suspense");
        case be:
          return yn("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case q:
            return Un(E.render);
          case I:
            return ln(E.type, V, re);
          case oe: {
            var Le = E, qe = Le._payload, Qe = Le._init;
            try {
              return ln(Qe(qe), V, re);
            } catch {
            }
          }
        }
      return "";
    }
    var An = Object.prototype.hasOwnProperty, Ra = {}, wa = We.ReactDebugCurrentFrame;
    function Yn(E) {
      if (E) {
        var V = E._owner, re = ln(E.type, E._source, V ? V.type : null);
        wa.setExtraStackFrame(re);
      } else
        wa.setExtraStackFrame(null);
    }
    function qt(E, V, re, Le, qe) {
      {
        var Qe = Function.call.bind(An);
        for (var lt in E)
          if (Qe(E, lt)) {
            var at = void 0;
            try {
              if (typeof E[lt] != "function") {
                var _n = Error((Le || "React class") + ": " + re + " type `" + lt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[lt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _n.name = "Invariant Violation", _n;
              }
              at = E[lt](V, lt, Le, re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Wt) {
              at = Wt;
            }
            at && !(at instanceof Error) && (Yn(qe), Re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", re, lt, typeof at), Yn(null)), at instanceof Error && !(at.message in Ra) && (Ra[at.message] = !0, Yn(qe), Re("Failed %s type: %s", re, at.message), Yn(null));
          }
      }
    }
    var Dn = Array.isArray;
    function jn(E) {
      return Dn(E);
    }
    function dr(E) {
      {
        var V = typeof Symbol == "function" && Symbol.toStringTag, re = V && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return re;
      }
    }
    function Fa(E) {
      try {
        return Oe(E), !1;
      } catch {
        return !0;
      }
    }
    function Oe(E) {
      return "" + E;
    }
    function Rt(E) {
      if (Fa(E))
        return Re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dr(E)), Oe(E);
    }
    var jt = We.ReactCurrentOwner, cn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Zt, X;
    function ce(E) {
      if (An.call(E, "ref")) {
        var V = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Ae(E) {
      if (An.call(E, "key")) {
        var V = Object.getOwnPropertyDescriptor(E, "key").get;
        if (V && V.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Ke(E, V) {
      typeof E.ref == "string" && jt.current;
    }
    function pt(E, V) {
      {
        var re = function() {
          Zt || (Zt = !0, Re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        re.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: re,
          configurable: !0
        });
      }
    }
    function Ot(E, V) {
      {
        var re = function() {
          X || (X = !0, Re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", V));
        };
        re.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: re,
          configurable: !0
        });
      }
    }
    var ot = function(E, V, re, Le, qe, Qe, lt) {
      var at = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Q,
        // Built-in properties that belong on the element
        type: E,
        key: V,
        ref: re,
        props: lt,
        // Record the component responsible for creating this element.
        _owner: Qe
      };
      return at._store = {}, Object.defineProperty(at._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(at, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.defineProperty(at, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: qe
      }), Object.freeze && (Object.freeze(at.props), Object.freeze(at)), at;
    };
    function vt(E, V, re, Le, qe) {
      {
        var Qe, lt = {}, at = null, _n = null;
        re !== void 0 && (Rt(re), at = "" + re), Ae(V) && (Rt(V.key), at = "" + V.key), ce(V) && (_n = V.ref, Ke(V, qe));
        for (Qe in V)
          An.call(V, Qe) && !cn.hasOwnProperty(Qe) && (lt[Qe] = V[Qe]);
        if (E && E.defaultProps) {
          var Wt = E.defaultProps;
          for (Qe in Wt)
            lt[Qe] === void 0 && (lt[Qe] = Wt[Qe]);
        }
        if (at || _n) {
          var Jt = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          at && pt(lt, Jt), _n && Ot(lt, Jt);
        }
        return ot(E, at, _n, qe, Le, jt.current, lt);
      }
    }
    var kt = We.ReactCurrentOwner, it = We.ReactDebugCurrentFrame;
    function rt(E) {
      if (E) {
        var V = E._owner, re = ln(E.type, E._source, V ? V.type : null);
        it.setExtraStackFrame(re);
      } else
        it.setExtraStackFrame(null);
    }
    var Ht;
    Ht = !1;
    function pr(E) {
      return typeof E == "object" && E !== null && E.$$typeof === Q;
    }
    function Va() {
      {
        if (kt.current) {
          var E = _e(kt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function ba(E) {
      return "";
    }
    var lr = {};
    function io(E) {
      {
        var V = Va();
        if (!V) {
          var re = typeof E == "string" ? E : E.displayName || E.name;
          re && (V = `

Check the top-level render call using <` + re + ">.");
        }
        return V;
      }
    }
    function pu(E, V) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var re = io(V);
        if (lr[re])
          return;
        lr[re] = !0;
        var Le = "";
        E && E._owner && E._owner !== kt.current && (Le = " It was passed a child from " + _e(E._owner.type) + "."), rt(E), Re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', re, Le), rt(null);
      }
    }
    function vu(E, V) {
      {
        if (typeof E != "object")
          return;
        if (jn(E))
          for (var re = 0; re < E.length; re++) {
            var Le = E[re];
            pr(Le) && pu(Le, V);
          }
        else if (pr(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var qe = me(E);
          if (typeof qe == "function" && qe !== E.entries)
            for (var Qe = qe.call(E), lt; !(lt = Qe.next()).done; )
              pr(lt.value) && pu(lt.value, V);
        }
      }
    }
    function lo(E) {
      {
        var V = E.type;
        if (V == null || typeof V == "string")
          return;
        var re;
        if (typeof V == "function")
          re = V.propTypes;
        else if (typeof V == "object" && (V.$$typeof === q || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        V.$$typeof === I))
          re = V.propTypes;
        else
          return;
        if (re) {
          var Le = _e(V);
          qt(re, E.props, "prop", Le, E);
        } else if (V.PropTypes !== void 0 && !Ht) {
          Ht = !0;
          var qe = _e(V);
          Re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", qe || "Unknown");
        }
        typeof V.getDefaultProps == "function" && !V.getDefaultProps.isReactClassApproved && Re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ui(E) {
      {
        for (var V = Object.keys(E.props), re = 0; re < V.length; re++) {
          var Le = V[re];
          if (Le !== "children" && Le !== "key") {
            rt(E), Re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), rt(null);
            break;
          }
        }
        E.ref !== null && (rt(E), Re("Invalid attribute `ref` supplied to `React.Fragment`."), rt(null));
      }
    }
    var ka = {};
    function _r(E, V, re, Le, qe, Qe) {
      {
        var lt = yt(E);
        if (!lt) {
          var at = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (at += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _n = ba();
          _n ? at += _n : at += Va();
          var Wt;
          E === null ? Wt = "null" : jn(E) ? Wt = "array" : E !== void 0 && E.$$typeof === Q ? (Wt = "<" + (_e(E.type) || "Unknown") + " />", at = " Did you accidentally export a JSX literal instead of a component?") : Wt = typeof E, Re("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Wt, at);
        }
        var Jt = vt(E, V, re, qe, Qe);
        if (Jt == null)
          return Jt;
        if (lt) {
          var vr = V.children;
          if (vr !== void 0)
            if (Le)
              if (jn(vr)) {
                for (var si = 0; si < vr.length; si++)
                  vu(vr[si], E);
                Object.freeze && Object.freeze(vr);
              } else
                Re("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vu(vr, E);
        }
        if (An.call(V, "key")) {
          var ci = _e(E), Ze = Object.keys(V).filter(function(uo) {
            return uo !== "key";
          }), Je = Ze.length > 0 ? "{key: someKey, " + Ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ka[ci + Je]) {
            var fi = Ze.length > 0 ? "{" + Ze.join(": ..., ") + ": ...}" : "{}";
            Re(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Je, ci, fi, ci), ka[ci + Je] = !0;
          }
        }
        return E === Ve ? ui(Jt) : lo(Jt), Jt;
      }
    }
    function Fi(E, V, re) {
      return _r(E, V, re, !0);
    }
    function oi(E, V, re) {
      return _r(E, V, re, !1);
    }
    var Vi = oi, Bi = Fi;
    Bp.Fragment = Ve, Bp.jsx = Vi, Bp.jsxs = Bi;
  }()), Bp;
}
process.env.NODE_ENV === "production" ? h0.exports = Kk() : h0.exports = qk();
var ye = h0.exports, m0 = { exports: {} }, xa = {}, Hm = { exports: {} }, p0 = {};
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
function Zk() {
  return eT || (eT = 1, function(j) {
    function Q(L, G) {
      var W = L.length;
      L.push(G);
      e: for (; 0 < W; ) {
        var $e = W - 1 >>> 1, Pe = L[$e];
        if (0 < Ue(Pe, G)) L[$e] = G, L[W] = Pe, W = $e;
        else break e;
      }
    }
    function w(L) {
      return L.length === 0 ? null : L[0];
    }
    function Ve(L) {
      if (L.length === 0) return null;
      var G = L[0], W = L.pop();
      if (W !== G) {
        L[0] = W;
        e: for (var $e = 0, Pe = L.length, Yt = Pe >>> 1; $e < Yt; ) {
          var an = 2 * ($e + 1) - 1, sn = L[an], Qt = an + 1, It = L[Qt];
          if (0 > Ue(sn, W)) Qt < Pe && 0 > Ue(It, sn) ? (L[$e] = It, L[Qt] = W, $e = Qt) : (L[$e] = sn, L[an] = W, $e = an);
          else if (Qt < Pe && 0 > Ue(It, W)) L[$e] = It, L[Qt] = W, $e = Qt;
          else break e;
        }
      }
      return G;
    }
    function Ue(L, G) {
      var W = L.sortIndex - G.sortIndex;
      return W !== 0 ? W : L.id - G.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ie = performance;
      j.unstable_now = function() {
        return Ie.now();
      };
    } else {
      var g = Date, Fe = g.now();
      j.unstable_now = function() {
        return g.now() - Fe;
      };
    }
    var q = [], Z = [], be = 1, I = null, oe = 3, ee = !1, he = !1, ke = !1, me = typeof setTimeout == "function" ? setTimeout : null, We = typeof clearTimeout == "function" ? clearTimeout : null, Re = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function De(L) {
      for (var G = w(Z); G !== null; ) {
        if (G.callback === null) Ve(Z);
        else if (G.startTime <= L) Ve(Z), G.sortIndex = G.expirationTime, Q(q, G);
        else break;
        G = w(Z);
      }
    }
    function tt(L) {
      if (ke = !1, De(L), !he) if (w(q) !== null) he = !0, Vt(Ee);
      else {
        var G = w(Z);
        G !== null && K(tt, G.startTime - L);
      }
    }
    function Ee(L, G) {
      he = !1, ke && (ke = !1, We(Pt), Pt = -1), ee = !0;
      var W = oe;
      try {
        for (De(G), I = w(q); I !== null && (!(I.expirationTime > G) || L && !Ut()); ) {
          var $e = I.callback;
          if (typeof $e == "function") {
            I.callback = null, oe = I.priorityLevel;
            var Pe = $e(I.expirationTime <= G);
            G = j.unstable_now(), typeof Pe == "function" ? I.callback = Pe : I === w(q) && Ve(q), De(G);
          } else Ve(q);
          I = w(q);
        }
        if (I !== null) var Yt = !0;
        else {
          var an = w(Z);
          an !== null && K(tt, an.startTime - G), Yt = !1;
        }
        return Yt;
      } finally {
        I = null, oe = W, ee = !1;
      }
    }
    var nt = !1, Ce = null, Pt = -1, mt = 5, yt = -1;
    function Ut() {
      return !(j.unstable_now() - yt < mt);
    }
    function gt() {
      if (Ce !== null) {
        var L = j.unstable_now();
        yt = L;
        var G = !0;
        try {
          G = Ce(!0, L);
        } finally {
          G ? _e() : (nt = !1, Ce = null);
        }
      } else nt = !1;
    }
    var _e;
    if (typeof Re == "function") _e = function() {
      Re(gt);
    };
    else if (typeof MessageChannel < "u") {
      var At = new MessageChannel(), Kt = At.port2;
      At.port1.onmessage = gt, _e = function() {
        Kt.postMessage(null);
      };
    } else _e = function() {
      me(gt, 0);
    };
    function Vt(L) {
      Ce = L, nt || (nt = !0, _e());
    }
    function K(L, G) {
      Pt = me(function() {
        L(j.unstable_now());
      }, G);
    }
    j.unstable_IdlePriority = 5, j.unstable_ImmediatePriority = 1, j.unstable_LowPriority = 4, j.unstable_NormalPriority = 3, j.unstable_Profiling = null, j.unstable_UserBlockingPriority = 2, j.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, j.unstable_continueExecution = function() {
      he || ee || (he = !0, Vt(Ee));
    }, j.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : mt = 0 < L ? Math.floor(1e3 / L) : 5;
    }, j.unstable_getCurrentPriorityLevel = function() {
      return oe;
    }, j.unstable_getFirstCallbackNode = function() {
      return w(q);
    }, j.unstable_next = function(L) {
      switch (oe) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = oe;
      }
      var W = oe;
      oe = G;
      try {
        return L();
      } finally {
        oe = W;
      }
    }, j.unstable_pauseExecution = function() {
    }, j.unstable_requestPaint = function() {
    }, j.unstable_runWithPriority = function(L, G) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var W = oe;
      oe = L;
      try {
        return G();
      } finally {
        oe = W;
      }
    }, j.unstable_scheduleCallback = function(L, G, W) {
      var $e = j.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? $e + W : $e) : W = $e, L) {
        case 1:
          var Pe = -1;
          break;
        case 2:
          Pe = 250;
          break;
        case 5:
          Pe = 1073741823;
          break;
        case 4:
          Pe = 1e4;
          break;
        default:
          Pe = 5e3;
      }
      return Pe = W + Pe, L = { id: be++, callback: G, priorityLevel: L, startTime: W, expirationTime: Pe, sortIndex: -1 }, W > $e ? (L.sortIndex = W, Q(Z, L), w(q) === null && L === w(Z) && (ke ? (We(Pt), Pt = -1) : ke = !0, K(tt, W - $e))) : (L.sortIndex = Pe, Q(q, L), he || ee || (he = !0, Vt(Ee))), L;
    }, j.unstable_shouldYield = Ut, j.unstable_wrapCallback = function(L) {
      var G = oe;
      return function() {
        var W = oe;
        oe = G;
        try {
          return L.apply(this, arguments);
        } finally {
          oe = W;
        }
      };
    };
  }(p0)), p0;
}
var v0 = {};
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
function Jk() {
  return tT || (tT = 1, function(j) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Q = !1, w = 5;
      function Ve(X, ce) {
        var Ae = X.length;
        X.push(ce), g(X, ce, Ae);
      }
      function Ue(X) {
        return X.length === 0 ? null : X[0];
      }
      function Ie(X) {
        if (X.length === 0)
          return null;
        var ce = X[0], Ae = X.pop();
        return Ae !== ce && (X[0] = Ae, Fe(X, Ae, 0)), ce;
      }
      function g(X, ce, Ae) {
        for (var Ke = Ae; Ke > 0; ) {
          var pt = Ke - 1 >>> 1, Ot = X[pt];
          if (q(Ot, ce) > 0)
            X[pt] = ce, X[Ke] = Ot, Ke = pt;
          else
            return;
        }
      }
      function Fe(X, ce, Ae) {
        for (var Ke = Ae, pt = X.length, Ot = pt >>> 1; Ke < Ot; ) {
          var ot = (Ke + 1) * 2 - 1, vt = X[ot], kt = ot + 1, it = X[kt];
          if (q(vt, ce) < 0)
            kt < pt && q(it, vt) < 0 ? (X[Ke] = it, X[kt] = ce, Ke = kt) : (X[Ke] = vt, X[ot] = ce, Ke = ot);
          else if (kt < pt && q(it, ce) < 0)
            X[Ke] = it, X[kt] = ce, Ke = kt;
          else
            return;
        }
      }
      function q(X, ce) {
        var Ae = X.sortIndex - ce.sortIndex;
        return Ae !== 0 ? Ae : X.id - ce.id;
      }
      var Z = 1, be = 2, I = 3, oe = 4, ee = 5;
      function he(X, ce) {
      }
      var ke = typeof performance == "object" && typeof performance.now == "function";
      if (ke) {
        var me = performance;
        j.unstable_now = function() {
          return me.now();
        };
      } else {
        var We = Date, Re = We.now();
        j.unstable_now = function() {
          return We.now() - Re;
        };
      }
      var De = 1073741823, tt = -1, Ee = 250, nt = 5e3, Ce = 1e4, Pt = De, mt = [], yt = [], Ut = 1, gt = null, _e = I, At = !1, Kt = !1, Vt = !1, K = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function W(X) {
        for (var ce = Ue(yt); ce !== null; ) {
          if (ce.callback === null)
            Ie(yt);
          else if (ce.startTime <= X)
            Ie(yt), ce.sortIndex = ce.expirationTime, Ve(mt, ce);
          else
            return;
          ce = Ue(yt);
        }
      }
      function $e(X) {
        if (Vt = !1, W(X), !Kt)
          if (Ue(mt) !== null)
            Kt = !0, Oe(Pe);
          else {
            var ce = Ue(yt);
            ce !== null && Rt($e, ce.startTime - X);
          }
      }
      function Pe(X, ce) {
        Kt = !1, Vt && (Vt = !1, jt()), At = !0;
        var Ae = _e;
        try {
          var Ke;
          if (!Q) return Yt(X, ce);
        } finally {
          gt = null, _e = Ae, At = !1;
        }
      }
      function Yt(X, ce) {
        var Ae = ce;
        for (W(Ae), gt = Ue(mt); gt !== null && !(gt.expirationTime > Ae && (!X || wa())); ) {
          var Ke = gt.callback;
          if (typeof Ke == "function") {
            gt.callback = null, _e = gt.priorityLevel;
            var pt = gt.expirationTime <= Ae, Ot = Ke(pt);
            Ae = j.unstable_now(), typeof Ot == "function" ? gt.callback = Ot : gt === Ue(mt) && Ie(mt), W(Ae);
          } else
            Ie(mt);
          gt = Ue(mt);
        }
        if (gt !== null)
          return !0;
        var ot = Ue(yt);
        return ot !== null && Rt($e, ot.startTime - Ae), !1;
      }
      function an(X, ce) {
        switch (X) {
          case Z:
          case be:
          case I:
          case oe:
          case ee:
            break;
          default:
            X = I;
        }
        var Ae = _e;
        _e = X;
        try {
          return ce();
        } finally {
          _e = Ae;
        }
      }
      function sn(X) {
        var ce;
        switch (_e) {
          case Z:
          case be:
          case I:
            ce = I;
            break;
          default:
            ce = _e;
            break;
        }
        var Ae = _e;
        _e = ce;
        try {
          return X();
        } finally {
          _e = Ae;
        }
      }
      function Qt(X) {
        var ce = _e;
        return function() {
          var Ae = _e;
          _e = ce;
          try {
            return X.apply(this, arguments);
          } finally {
            _e = Ae;
          }
        };
      }
      function It(X, ce, Ae) {
        var Ke = j.unstable_now(), pt;
        if (typeof Ae == "object" && Ae !== null) {
          var Ot = Ae.delay;
          typeof Ot == "number" && Ot > 0 ? pt = Ke + Ot : pt = Ke;
        } else
          pt = Ke;
        var ot;
        switch (X) {
          case Z:
            ot = tt;
            break;
          case be:
            ot = Ee;
            break;
          case ee:
            ot = Pt;
            break;
          case oe:
            ot = Ce;
            break;
          case I:
          default:
            ot = nt;
            break;
        }
        var vt = pt + ot, kt = {
          id: Ut++,
          callback: ce,
          priorityLevel: X,
          startTime: pt,
          expirationTime: vt,
          sortIndex: -1
        };
        return pt > Ke ? (kt.sortIndex = pt, Ve(yt, kt), Ue(mt) === null && kt === Ue(yt) && (Vt ? jt() : Vt = !0, Rt($e, pt - Ke))) : (kt.sortIndex = vt, Ve(mt, kt), !Kt && !At && (Kt = !0, Oe(Pe))), kt;
      }
      function yn() {
      }
      function zn() {
        !Kt && !At && (Kt = !0, Oe(Pe));
      }
      function ir() {
        return Ue(mt);
      }
      function gn(X) {
        X.callback = null;
      }
      function fr() {
        return _e;
      }
      var Un = !1, Pn = null, ln = -1, An = w, Ra = -1;
      function wa() {
        var X = j.unstable_now() - Ra;
        return !(X < An);
      }
      function Yn() {
      }
      function qt(X) {
        if (X < 0 || X > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        X > 0 ? An = Math.floor(1e3 / X) : An = w;
      }
      var Dn = function() {
        if (Pn !== null) {
          var X = j.unstable_now();
          Ra = X;
          var ce = !0, Ae = !0;
          try {
            Ae = Pn(ce, X);
          } finally {
            Ae ? jn() : (Un = !1, Pn = null);
          }
        } else
          Un = !1;
      }, jn;
      if (typeof G == "function")
        jn = function() {
          G(Dn);
        };
      else if (typeof MessageChannel < "u") {
        var dr = new MessageChannel(), Fa = dr.port2;
        dr.port1.onmessage = Dn, jn = function() {
          Fa.postMessage(null);
        };
      } else
        jn = function() {
          K(Dn, 0);
        };
      function Oe(X) {
        Pn = X, Un || (Un = !0, jn());
      }
      function Rt(X, ce) {
        ln = K(function() {
          X(j.unstable_now());
        }, ce);
      }
      function jt() {
        L(ln), ln = -1;
      }
      var cn = Yn, Zt = null;
      j.unstable_IdlePriority = ee, j.unstable_ImmediatePriority = Z, j.unstable_LowPriority = oe, j.unstable_NormalPriority = I, j.unstable_Profiling = Zt, j.unstable_UserBlockingPriority = be, j.unstable_cancelCallback = gn, j.unstable_continueExecution = zn, j.unstable_forceFrameRate = qt, j.unstable_getCurrentPriorityLevel = fr, j.unstable_getFirstCallbackNode = ir, j.unstable_next = sn, j.unstable_pauseExecution = yn, j.unstable_requestPaint = cn, j.unstable_runWithPriority = an, j.unstable_scheduleCallback = It, j.unstable_shouldYield = wa, j.unstable_wrapCallback = Qt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(v0)), v0;
}
var nT;
function lT() {
  return nT || (nT = 1, process.env.NODE_ENV === "production" ? Hm.exports = Zk() : Hm.exports = Jk()), Hm.exports;
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
function eD() {
  if (rT) return xa;
  rT = 1;
  var j = Tf, Q = lT();
  function w(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ve = /* @__PURE__ */ new Set(), Ue = {};
  function Ie(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (Ue[n] = r, n = 0; n < r.length; n++) Ve.add(r[n]);
  }
  var Fe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), q = Object.prototype.hasOwnProperty, Z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, be = {}, I = {};
  function oe(n) {
    return q.call(I, n) ? !0 : q.call(be, n) ? !1 : Z.test(n) ? I[n] = !0 : (be[n] = !0, !1);
  }
  function ee(n, r, l, o) {
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
  function he(n, r, l, o) {
    if (r === null || typeof r > "u" || ee(n, r, l, o)) return !0;
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
  function ke(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var me = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    me[n] = new ke(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    me[r] = new ke(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    me[n] = new ke(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    me[n] = new ke(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    me[n] = new ke(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    me[n] = new ke(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    me[n] = new ke(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    me[n] = new ke(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    me[n] = new ke(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var We = /[\-:]([a-z])/g;
  function Re(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      We,
      Re
    );
    me[r] = new ke(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(We, Re);
    me[r] = new ke(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(We, Re);
    me[r] = new ke(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    me[n] = new ke(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), me.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    me[n] = new ke(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function De(n, r, l, o) {
    var c = me.hasOwnProperty(r) ? me[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (he(r, l, c, o) && (l = null), o || c === null ? oe(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var tt = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ee = Symbol.for("react.element"), nt = Symbol.for("react.portal"), Ce = Symbol.for("react.fragment"), Pt = Symbol.for("react.strict_mode"), mt = Symbol.for("react.profiler"), yt = Symbol.for("react.provider"), Ut = Symbol.for("react.context"), gt = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), At = Symbol.for("react.suspense_list"), Kt = Symbol.for("react.memo"), Vt = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), L = Symbol.iterator;
  function G(n) {
    return n === null || typeof n != "object" ? null : (n = L && n[L] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var W = Object.assign, $e;
  function Pe(n) {
    if ($e === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      $e = r && r[1] || "";
    }
    return `
` + $e + n;
  }
  var Yt = !1;
  function an(n, r) {
    if (!n || Yt) return "";
    Yt = !0;
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
        } catch (M) {
          var o = M;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (M) {
          o = M;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (M) {
          o = M;
        }
        n();
      }
    } catch (M) {
      if (M && o && typeof M.stack == "string") {
        for (var c = M.stack.split(`
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
      Yt = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Pe(n) : "";
  }
  function sn(n) {
    switch (n.tag) {
      case 5:
        return Pe(n.type);
      case 16:
        return Pe("Lazy");
      case 13:
        return Pe("Suspense");
      case 19:
        return Pe("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = an(n.type, !1), n;
      case 11:
        return n = an(n.type.render, !1), n;
      case 1:
        return n = an(n.type, !0), n;
      default:
        return "";
    }
  }
  function Qt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ce:
        return "Fragment";
      case nt:
        return "Portal";
      case mt:
        return "Profiler";
      case Pt:
        return "StrictMode";
      case _e:
        return "Suspense";
      case At:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Ut:
        return (n.displayName || "Context") + ".Consumer";
      case yt:
        return (n._context.displayName || "Context") + ".Provider";
      case gt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Kt:
        return r = n.displayName || null, r !== null ? r : Qt(n.type) || "Memo";
      case Vt:
        r = n._payload, n = n._init;
        try {
          return Qt(n(r));
        } catch {
        }
    }
    return null;
  }
  function It(n) {
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
        return Qt(r);
      case 8:
        return r === Pt ? "StrictMode" : "Mode";
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
  function yn(n) {
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
  function zn(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ir(n) {
    var r = zn(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function gn(n) {
    n._valueTracker || (n._valueTracker = ir(n));
  }
  function fr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = zn(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Un(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Pn(n, r) {
    var l = r.checked;
    return W({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function ln(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = yn(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function An(n, r) {
    r = r.checked, r != null && De(n, "checked", r, !1);
  }
  function Ra(n, r) {
    An(n, r);
    var l = yn(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Yn(n, r.type, l) : r.hasOwnProperty("defaultValue") && Yn(n, r.type, yn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function wa(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Yn(n, r, l) {
    (r !== "number" || Un(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var qt = Array.isArray;
  function Dn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + yn(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function jn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(w(91));
    return W({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function dr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(w(92));
        if (qt(l)) {
          if (1 < l.length) throw Error(w(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: yn(l) };
  }
  function Fa(n, r) {
    var l = yn(r.value), o = yn(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Oe(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Rt(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function jt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Rt(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var cn, Zt = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (cn = cn || document.createElement("div"), cn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = cn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function X(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ce = {
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
  }, Ae = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ce).forEach(function(n) {
    Ae.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ce[r] = ce[n];
    });
  });
  function Ke(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ce.hasOwnProperty(n) && ce[n] ? ("" + r).trim() : r + "px";
  }
  function pt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ke(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Ot = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ot(n, r) {
    if (r) {
      if (Ot[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(w(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(w(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(w(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(w(62));
    }
  }
  function vt(n, r) {
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
  var kt = null;
  function it(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var rt = null, Ht = null, pr = null;
  function Va(n) {
    if (n = xe(n)) {
      if (typeof rt != "function") throw Error(w(280));
      var r = n.stateNode;
      r && (r = en(r), rt(n.stateNode, n.type, r));
    }
  }
  function ba(n) {
    Ht ? pr ? pr.push(n) : pr = [n] : Ht = n;
  }
  function lr() {
    if (Ht) {
      var n = Ht, r = pr;
      if (pr = Ht = null, Va(n), r) for (n = 0; n < r.length; n++) Va(r[n]);
    }
  }
  function io(n, r) {
    return n(r);
  }
  function pu() {
  }
  var vu = !1;
  function lo(n, r, l) {
    if (vu) return n(r, l);
    vu = !0;
    try {
      return io(n, r, l);
    } finally {
      vu = !1, (Ht !== null || pr !== null) && (pu(), lr());
    }
  }
  function ui(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = en(l);
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
    if (l && typeof l != "function") throw Error(w(231, r, typeof l));
    return l;
  }
  var ka = !1;
  if (Fe) try {
    var _r = {};
    Object.defineProperty(_r, "passive", { get: function() {
      ka = !0;
    } }), window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
  } catch {
    ka = !1;
  }
  function Fi(n, r, l, o, c, d, h, S, C) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, M);
    } catch (B) {
      this.onError(B);
    }
  }
  var oi = !1, Vi = null, Bi = !1, E = null, V = { onError: function(n) {
    oi = !0, Vi = n;
  } };
  function re(n, r, l, o, c, d, h, S, C) {
    oi = !1, Vi = null, Fi.apply(V, arguments);
  }
  function Le(n, r, l, o, c, d, h, S, C) {
    if (re.apply(this, arguments), oi) {
      if (oi) {
        var M = Vi;
        oi = !1, Vi = null;
      } else throw Error(w(198));
      Bi || (Bi = !0, E = M);
    }
  }
  function qe(n) {
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
  function Qe(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function lt(n) {
    if (qe(n) !== n) throw Error(w(188));
  }
  function at(n) {
    var r = n.alternate;
    if (!r) {
      if (r = qe(n), r === null) throw Error(w(188));
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
          if (d === l) return lt(c), n;
          if (d === o) return lt(c), r;
          d = d.sibling;
        }
        throw Error(w(188));
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
          if (!h) throw Error(w(189));
        }
      }
      if (l.alternate !== o) throw Error(w(190));
    }
    if (l.tag !== 3) throw Error(w(188));
    return l.stateNode.current === l ? n : r;
  }
  function _n(n) {
    return n = at(n), n !== null ? Wt(n) : null;
  }
  function Wt(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Wt(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Jt = Q.unstable_scheduleCallback, vr = Q.unstable_cancelCallback, si = Q.unstable_shouldYield, ci = Q.unstable_requestPaint, Ze = Q.unstable_now, Je = Q.unstable_getCurrentPriorityLevel, fi = Q.unstable_ImmediatePriority, uo = Q.unstable_UserBlockingPriority, oo = Q.unstable_NormalPriority, $p = Q.unstable_LowPriority, Rf = Q.unstable_IdlePriority, so = null, Da = null;
  function Pp(n) {
    if (Da && typeof Da.onCommitFiberRoot == "function") try {
      Da.onCommitFiberRoot(so, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var aa = Math.clz32 ? Math.clz32 : wf, Bm = Math.log, $m = Math.LN2;
  function wf(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Bm(n) / $m | 0) | 0;
  }
  var hu = 64, _a = 4194304;
  function Cl(n) {
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
  function xl(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, h = l & 268435455;
    if (h !== 0) {
      var S = h & ~c;
      S !== 0 ? o = Cl(S) : (d &= h, d !== 0 && (o = Cl(d)));
    } else h = l & ~c, h !== 0 ? o = Cl(h) : d !== 0 && (o = Cl(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - aa(r), c = 1 << l, o |= n[l], r &= ~c;
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
  function bf(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var h = 31 - aa(d), S = 1 << h, C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = Pm(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function kf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function _s() {
    var n = hu;
    return hu <<= 1, !(hu & 4194240) && (hu = 64), n;
  }
  function Df(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Tl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - aa(r), n[r] = l;
  }
  function Ym(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - aa(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Os(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - aa(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Dt = 0;
  function _f(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var _t, Of, Mf, Ge, Nf, hr = !1, $i = [], ia = null, Pi = null, un = null, Bt = /* @__PURE__ */ new Map(), co = /* @__PURE__ */ new Map(), Qn = [], la = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function di(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        ia = null;
        break;
      case "dragenter":
      case "dragleave":
        Pi = null;
        break;
      case "mouseover":
      case "mouseout":
        un = null;
        break;
      case "pointerover":
      case "pointerout":
        Bt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        co.delete(r.pointerId);
    }
  }
  function fo(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = xe(r), r !== null && Of(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Lf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return ia = fo(ia, n, r, l, o, c), !0;
      case "dragenter":
        return Pi = fo(Pi, n, r, l, o, c), !0;
      case "mouseover":
        return un = fo(un, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Bt.set(d, fo(Bt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, co.set(d, fo(co.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function zf(n) {
    var r = Ll(n.target);
    if (r !== null) {
      var l = qe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Qe(l), r !== null) {
            n.blockedOn = r, Nf(n.priority, function() {
              Mf(l);
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
  function po(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Ns(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        kt = o, l.target.dispatchEvent(o), kt = null;
      } else return r = xe(l), r !== null && Of(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Yp(n, r, l) {
    po(n) && l.delete(r);
  }
  function Qm() {
    hr = !1, ia !== null && po(ia) && (ia = null), Pi !== null && po(Pi) && (Pi = null), un !== null && po(un) && (un = null), Bt.forEach(Yp), co.forEach(Yp);
  }
  function vo(n, r) {
    n.blockedOn === r && (n.blockedOn = null, hr || (hr = !0, Q.unstable_scheduleCallback(Q.unstable_NormalPriority, Qm)));
  }
  function Yi(n) {
    function r(c) {
      return vo(c, n);
    }
    if (0 < $i.length) {
      vo($i[0], n);
      for (var l = 1; l < $i.length; l++) {
        var o = $i[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (ia !== null && vo(ia, n), Pi !== null && vo(Pi, n), un !== null && vo(un, n), Bt.forEach(r), co.forEach(r), l = 0; l < Qn.length; l++) o = Qn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Qn.length && (l = Qn[0], l.blockedOn === null); ) zf(l), l.blockedOn === null && Qn.shift();
  }
  var Rl = tt.ReactCurrentBatchConfig, wl = !0;
  function Qp(n, r, l, o) {
    var c = Dt, d = Rl.transition;
    Rl.transition = null;
    try {
      Dt = 1, Ms(n, r, l, o);
    } finally {
      Dt = c, Rl.transition = d;
    }
  }
  function Ip(n, r, l, o) {
    var c = Dt, d = Rl.transition;
    Rl.transition = null;
    try {
      Dt = 4, Ms(n, r, l, o);
    } finally {
      Dt = c, Rl.transition = d;
    }
  }
  function Ms(n, r, l, o) {
    if (wl) {
      var c = Ns(n, r, l, o);
      if (c === null) Ks(n, r, o, ho, l), di(n, o);
      else if (Lf(c, n, r, l, o)) o.stopPropagation();
      else if (di(n, o), r & 4 && -1 < la.indexOf(n)) {
        for (; c !== null; ) {
          var d = xe(c);
          if (d !== null && _t(d), d = Ns(n, r, l, o), d === null && Ks(n, r, o, ho, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Ks(n, r, o, null, l);
    }
  }
  var ho = null;
  function Ns(n, r, l, o) {
    if (ho = null, n = it(o), n = Ll(n), n !== null) if (r = qe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Qe(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return ho = n, null;
  }
  function Ls(n) {
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
        switch (Je()) {
          case fi:
            return 1;
          case uo:
            return 4;
          case oo:
          case $p:
            return 16;
          case Rf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pi = null, zs = null, mu = null;
  function Uf() {
    if (mu) return mu;
    var n, r = zs, l = r.length, o, c = "value" in pi ? pi.value : pi.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++) ;
    return mu = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Us(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function As() {
    return !0;
  }
  function js() {
    return !1;
  }
  function Or(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n) n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? As : js, this.isPropagationStopped = js, this;
    }
    return W(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = As);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = As);
    }, persist: function() {
    }, isPersistent: As }), r;
  }
  var bl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Hs = Or(bl), yu = W({}, bl, { view: 0, detail: 0 }), Im = Or(yu), Af, In, kl, mo = W({}, yu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== kl && (kl && n.type === "mousemove" ? (Af = n.screenX - kl.screenX, In = n.screenY - kl.screenY) : In = Af = 0, kl = n), Af);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : In;
  } }), jf = Or(mo), Wm = W({}, mo, { dataTransfer: 0 }), gu = Or(Wm), Hf = W({}, yu, { relatedTarget: 0 }), Fs = Or(Hf), Gm = W({}, bl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xm = Or(Gm), Km = W({}, bl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Wp = Or(Km), Ff = W({}, bl, { data: 0 }), Vf = Or(Ff), Gp = {
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
  }, Xp = {
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
  }, qm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function vi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = qm[n]) ? !!r[n] : !1;
  }
  function Bf() {
    return vi;
  }
  var $f = W({}, yu, { key: function(n) {
    if (n.key) {
      var r = Gp[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Us(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Xp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bf, charCode: function(n) {
    return n.type === "keypress" ? Us(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Us(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Pf = Or($f), Yf = W({}, mo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Kp = Or(Yf), Vs = W({}, yu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bf }), qp = Or(Vs), Mr = W({}, bl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hi = Or(Mr), Sn = W({}, mo, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), mi = Or(Sn), Qf = [9, 13, 27, 32], Su = Fe && "CompositionEvent" in window, yo = null;
  Fe && "documentMode" in document && (yo = document.documentMode);
  var go = Fe && "TextEvent" in window && !yo, Zp = Fe && (!Su || yo && 8 < yo && 11 >= yo), Jp = " ", Bs = !1;
  function ev(n, r) {
    switch (n) {
      case "keyup":
        return Qf.indexOf(r.keyCode) !== -1;
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
  function tv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Eu = !1;
  function nv(n, r) {
    switch (n) {
      case "compositionend":
        return tv(r);
      case "keypress":
        return r.which !== 32 ? null : (Bs = !0, Jp);
      case "textInput":
        return n = r.data, n === Jp && Bs ? null : n;
      default:
        return null;
    }
  }
  function Zm(n, r) {
    if (Eu) return n === "compositionend" || !Su && ev(n, r) ? (n = Uf(), mu = zs = pi = null, Eu = !1, n) : null;
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
        return Zp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function rv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jm[n.type] : r === "textarea";
  }
  function If(n, r, l, o) {
    ba(o), r = Ro(r, "onChange"), 0 < r.length && (l = new Hs("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Ba = null, Dl = null;
  function av(n) {
    Ml(n, 0);
  }
  function So(n) {
    var r = Ma(n);
    if (fr(r)) return n;
  }
  function ey(n, r) {
    if (n === "change") return r;
  }
  var iv = !1;
  if (Fe) {
    var Wf;
    if (Fe) {
      var Gf = "oninput" in document;
      if (!Gf) {
        var lv = document.createElement("div");
        lv.setAttribute("oninput", "return;"), Gf = typeof lv.oninput == "function";
      }
      Wf = Gf;
    } else Wf = !1;
    iv = Wf && (!document.documentMode || 9 < document.documentMode);
  }
  function uv() {
    Ba && (Ba.detachEvent("onpropertychange", ov), Dl = Ba = null);
  }
  function ov(n) {
    if (n.propertyName === "value" && So(Dl)) {
      var r = [];
      If(r, Dl, n, it(n)), lo(av, r);
    }
  }
  function ty(n, r, l) {
    n === "focusin" ? (uv(), Ba = r, Dl = l, Ba.attachEvent("onpropertychange", ov)) : n === "focusout" && uv();
  }
  function sv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return So(Dl);
  }
  function ny(n, r) {
    if (n === "click") return So(r);
  }
  function cv(n, r) {
    if (n === "input" || n === "change") return So(r);
  }
  function ry(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Oa = typeof Object.is == "function" ? Object.is : ry;
  function Eo(n, r) {
    if (Oa(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!q.call(r, c) || !Oa(n[c], r[c])) return !1;
    }
    return !0;
  }
  function fv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function $s(n, r) {
    var l = fv(n);
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
      l = fv(l);
    }
  }
  function Qi(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Qi(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Co() {
    for (var n = window, r = Un(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Un(n.document);
    }
    return r;
  }
  function Ps(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Cu(n) {
    var r = Co(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Qi(l.ownerDocument.documentElement, l)) {
      if (o !== null && Ps(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = $s(l, d);
          var h = $s(
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
  var ay = Fe && "documentMode" in document && 11 >= document.documentMode, xu = null, Xf = null, xo = null, Kf = !1;
  function qf(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Kf || xu == null || xu !== Un(o) || (o = xu, "selectionStart" in o && Ps(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), xo && Eo(xo, o) || (xo = o, o = Ro(Xf, "onSelect"), 0 < o.length && (r = new Hs("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = xu)));
  }
  function Ys(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var _l = { animationend: Ys("Animation", "AnimationEnd"), animationiteration: Ys("Animation", "AnimationIteration"), animationstart: Ys("Animation", "AnimationStart"), transitionend: Ys("Transition", "TransitionEnd") }, Wn = {}, Zf = {};
  Fe && (Zf = document.createElement("div").style, "AnimationEvent" in window || (delete _l.animationend.animation, delete _l.animationiteration.animation, delete _l.animationstart.animation), "TransitionEvent" in window || delete _l.transitionend.transition);
  function Qs(n) {
    if (Wn[n]) return Wn[n];
    if (!_l[n]) return n;
    var r = _l[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Zf) return Wn[n] = r[l];
    return n;
  }
  var dv = Qs("animationend"), pv = Qs("animationiteration"), vv = Qs("animationstart"), hv = Qs("transitionend"), Jf = /* @__PURE__ */ new Map(), Is = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ua(n, r) {
    Jf.set(n, r), Ie(r, [n]);
  }
  for (var ed = 0; ed < Is.length; ed++) {
    var Ol = Is[ed], iy = Ol.toLowerCase(), ly = Ol[0].toUpperCase() + Ol.slice(1);
    ua(iy, "on" + ly);
  }
  ua(dv, "onAnimationEnd"), ua(pv, "onAnimationIteration"), ua(vv, "onAnimationStart"), ua("dblclick", "onDoubleClick"), ua("focusin", "onFocus"), ua("focusout", "onBlur"), ua(hv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Ie("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ie("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ie("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ie("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ie("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ie("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var To = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), td = new Set("cancel close invalid load scroll toggle".split(" ").concat(To));
  function Ws(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Le(o, r, void 0, n), n.currentTarget = null;
  }
  function Ml(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var h = o.length - 1; 0 <= h; h--) {
          var S = o[h], C = S.instance, M = S.currentTarget;
          if (S = S.listener, C !== d && c.isPropagationStopped()) break e;
          Ws(c, S, M), d = C;
        }
        else for (h = 0; h < o.length; h++) {
          if (S = o[h], C = S.instance, M = S.currentTarget, S = S.listener, C !== d && c.isPropagationStopped()) break e;
          Ws(c, S, M), d = C;
        }
      }
    }
    if (Bi) throw n = E, Bi = !1, E = null, n;
  }
  function wt(n, r) {
    var l = r[ko];
    l === void 0 && (l = r[ko] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (mv(r, n, 2, !1), l.add(o));
  }
  function Gs(n, r, l) {
    var o = 0;
    r && (o |= 4), mv(l, n, o, r);
  }
  var Xs = "_reactListening" + Math.random().toString(36).slice(2);
  function Tu(n) {
    if (!n[Xs]) {
      n[Xs] = !0, Ve.forEach(function(l) {
        l !== "selectionchange" && (td.has(l) || Gs(l, !1, n), Gs(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Xs] || (r[Xs] = !0, Gs("selectionchange", !1, r));
    }
  }
  function mv(n, r, l, o) {
    switch (Ls(r)) {
      case 1:
        var c = Qp;
        break;
      case 4:
        c = Ip;
        break;
      default:
        c = Ms;
    }
    l = c.bind(null, r, l, n), c = void 0, !ka || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Ks(n, r, l, o, c) {
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
          if (h = Ll(S), h === null) return;
          if (C = h.tag, C === 5 || C === 6) {
            o = d = h;
            continue e;
          }
          S = S.parentNode;
        }
      }
      o = o.return;
    }
    lo(function() {
      var M = d, B = it(l), P = [];
      e: {
        var F = Jf.get(n);
        if (F !== void 0) {
          var ie = Hs, fe = n;
          switch (n) {
            case "keypress":
              if (Us(l) === 0) break e;
            case "keydown":
            case "keyup":
              ie = Pf;
              break;
            case "focusin":
              fe = "focus", ie = Fs;
              break;
            case "focusout":
              fe = "blur", ie = Fs;
              break;
            case "beforeblur":
            case "afterblur":
              ie = Fs;
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
              ie = jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ie = gu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ie = qp;
              break;
            case dv:
            case pv:
            case vv:
              ie = Xm;
              break;
            case hv:
              ie = hi;
              break;
            case "scroll":
              ie = Im;
              break;
            case "wheel":
              ie = mi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ie = Wp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ie = Kp;
          }
          var ve = (r & 4) !== 0, hn = !ve && n === "scroll", b = ve ? F !== null ? F + "Capture" : null : F;
          ve = [];
          for (var T = M, _; T !== null; ) {
            _ = T;
            var $ = _.stateNode;
            if (_.tag === 5 && $ !== null && (_ = $, b !== null && ($ = ui(T, b), $ != null && ve.push(Ru(T, $, _)))), hn) break;
            T = T.return;
          }
          0 < ve.length && (F = new ie(F, fe, null, l, B), P.push({ event: F, listeners: ve }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (F = n === "mouseover" || n === "pointerover", ie = n === "mouseout" || n === "pointerout", F && l !== kt && (fe = l.relatedTarget || l.fromElement) && (Ll(fe) || fe[yi])) break e;
          if ((ie || F) && (F = B.window === B ? B : (F = B.ownerDocument) ? F.defaultView || F.parentWindow : window, ie ? (fe = l.relatedTarget || l.toElement, ie = M, fe = fe ? Ll(fe) : null, fe !== null && (hn = qe(fe), fe !== hn || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (ie = null, fe = M), ie !== fe)) {
            if (ve = jf, $ = "onMouseLeave", b = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (ve = Kp, $ = "onPointerLeave", b = "onPointerEnter", T = "pointer"), hn = ie == null ? F : Ma(ie), _ = fe == null ? F : Ma(fe), F = new ve($, T + "leave", ie, l, B), F.target = hn, F.relatedTarget = _, $ = null, Ll(B) === M && (ve = new ve(b, T + "enter", fe, l, B), ve.target = _, ve.relatedTarget = hn, $ = ve), hn = $, ie && fe) t: {
              for (ve = ie, b = fe, T = 0, _ = ve; _; _ = Ii(_)) T++;
              for (_ = 0, $ = b; $; $ = Ii($)) _++;
              for (; 0 < T - _; ) ve = Ii(ve), T--;
              for (; 0 < _ - T; ) b = Ii(b), _--;
              for (; T--; ) {
                if (ve === b || b !== null && ve === b.alternate) break t;
                ve = Ii(ve), b = Ii(b);
              }
              ve = null;
            }
            else ve = null;
            ie !== null && yv(P, F, ie, ve, !1), fe !== null && hn !== null && yv(P, hn, fe, ve, !0);
          }
        }
        e: {
          if (F = M ? Ma(M) : window, ie = F.nodeName && F.nodeName.toLowerCase(), ie === "select" || ie === "input" && F.type === "file") var de = ey;
          else if (rv(F)) if (iv) de = cv;
          else {
            de = sv;
            var Me = ty;
          }
          else (ie = F.nodeName) && ie.toLowerCase() === "input" && (F.type === "checkbox" || F.type === "radio") && (de = ny);
          if (de && (de = de(n, M))) {
            If(P, de, l, B);
            break e;
          }
          Me && Me(n, F, M), n === "focusout" && (Me = F._wrapperState) && Me.controlled && F.type === "number" && Yn(F, "number", F.value);
        }
        switch (Me = M ? Ma(M) : window, n) {
          case "focusin":
            (rv(Me) || Me.contentEditable === "true") && (xu = Me, Xf = M, xo = null);
            break;
          case "focusout":
            xo = Xf = xu = null;
            break;
          case "mousedown":
            Kf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Kf = !1, qf(P, l, B);
            break;
          case "selectionchange":
            if (ay) break;
          case "keydown":
          case "keyup":
            qf(P, l, B);
        }
        var Ne;
        if (Su) e: {
          switch (n) {
            case "compositionstart":
              var He = "onCompositionStart";
              break e;
            case "compositionend":
              He = "onCompositionEnd";
              break e;
            case "compositionupdate":
              He = "onCompositionUpdate";
              break e;
          }
          He = void 0;
        }
        else Eu ? ev(n, l) && (He = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (He = "onCompositionStart");
        He && (Zp && l.locale !== "ko" && (Eu || He !== "onCompositionStart" ? He === "onCompositionEnd" && Eu && (Ne = Uf()) : (pi = B, zs = "value" in pi ? pi.value : pi.textContent, Eu = !0)), Me = Ro(M, He), 0 < Me.length && (He = new Vf(He, n, null, l, B), P.push({ event: He, listeners: Me }), Ne ? He.data = Ne : (Ne = tv(l), Ne !== null && (He.data = Ne)))), (Ne = go ? nv(n, l) : Zm(n, l)) && (M = Ro(M, "onBeforeInput"), 0 < M.length && (B = new Vf("onBeforeInput", "beforeinput", null, l, B), P.push({ event: B, listeners: M }), B.data = Ne));
      }
      Ml(P, r);
    });
  }
  function Ru(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Ro(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ui(n, l), d != null && o.unshift(Ru(n, d, c)), d = ui(n, r), d != null && o.push(Ru(n, d, c))), n = n.return;
    }
    return o;
  }
  function Ii(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function yv(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, M = S.stateNode;
      if (C !== null && C === o) break;
      S.tag === 5 && M !== null && (S = M, c ? (C = ui(l, d), C != null && h.unshift(Ru(l, C, S))) : c || (C = ui(l, d), C != null && h.push(Ru(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var gv = /\r\n?/g, uy = /\u0000|\uFFFD/g;
  function Sv(n) {
    return (typeof n == "string" ? n : "" + n).replace(gv, `
`).replace(uy, "");
  }
  function qs(n, r, l) {
    if (r = Sv(r), Sv(n) !== r && l) throw Error(w(425));
  }
  function Wi() {
  }
  var wo = null, Nl = null;
  function Zs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Js = typeof setTimeout == "function" ? setTimeout : void 0, nd = typeof clearTimeout == "function" ? clearTimeout : void 0, Ev = typeof Promise == "function" ? Promise : void 0, wu = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ev < "u" ? function(n) {
    return Ev.resolve(null).then(n).catch(ec);
  } : Js;
  function ec(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function bu(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Yi(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Yi(r);
  }
  function $a(n) {
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
  function Cv(n) {
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
  var Gi = Math.random().toString(36).slice(2), Pa = "__reactFiber$" + Gi, bo = "__reactProps$" + Gi, yi = "__reactContainer$" + Gi, ko = "__reactEvents$" + Gi, ku = "__reactListeners$" + Gi, oy = "__reactHandles$" + Gi;
  function Ll(n) {
    var r = n[Pa];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[yi] || l[Pa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Cv(n); n !== null; ) {
          if (l = n[Pa]) return l;
          n = Cv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function xe(n) {
    return n = n[Pa] || n[yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ma(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(w(33));
  }
  function en(n) {
    return n[bo] || null;
  }
  var st = [], oa = -1;
  function sa(n) {
    return { current: n };
  }
  function Ft(n) {
    0 > oa || (n.current = st[oa], st[oa] = null, oa--);
  }
  function Se(n, r) {
    oa++, st[oa] = n.current, n.current = r;
  }
  var ur = {}, on = sa(ur), On = sa(!1), Nr = ur;
  function Lr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return ur;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function En(n) {
    return n = n.childContextTypes, n != null;
  }
  function Du() {
    Ft(On), Ft(on);
  }
  function xv(n, r, l) {
    if (on.current !== ur) throw Error(w(168));
    Se(on, r), Se(On, l);
  }
  function Do(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(w(108, It(n) || "Unknown", c));
    return W({}, l, o);
  }
  function Hn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ur, Nr = on.current, Se(on, n), Se(On, On.current), !0;
  }
  function tc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(w(169));
    l ? (n = Do(n, r, Nr), o.__reactInternalMemoizedMergedChildContext = n, Ft(On), Ft(on), Se(on, n)) : Ft(On), Se(On, l);
  }
  var Ya = null, _u = !1, gi = !1;
  function nc(n) {
    Ya === null ? Ya = [n] : Ya.push(n);
  }
  function Xi(n) {
    _u = !0, nc(n);
  }
  function Qa() {
    if (!gi && Ya !== null) {
      gi = !0;
      var n = 0, r = Dt;
      try {
        var l = Ya;
        for (Dt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ya = null, _u = !1;
      } catch (c) {
        throw Ya !== null && (Ya = Ya.slice(n + 1)), Jt(fi, Qa), c;
      } finally {
        Dt = r, gi = !1;
      }
    }
    return null;
  }
  var Ki = [], qi = 0, Zi = null, Si = 0, Cn = [], ca = 0, Wr = null, Ia = 1, Wa = "";
  function zl(n, r) {
    Ki[qi++] = Si, Ki[qi++] = Zi, Zi = n, Si = r;
  }
  function Tv(n, r, l) {
    Cn[ca++] = Ia, Cn[ca++] = Wa, Cn[ca++] = Wr, Wr = n;
    var o = Ia;
    n = Wa;
    var c = 32 - aa(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - aa(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, Ia = 1 << 32 - aa(r) + c | l << c | o, Wa = d + n;
    } else Ia = 1 << d | l << c | o, Wa = n;
  }
  function rc(n) {
    n.return !== null && (zl(n, 1), Tv(n, 1, 0));
  }
  function ac(n) {
    for (; n === Zi; ) Zi = Ki[--qi], Ki[qi] = null, Si = Ki[--qi], Ki[qi] = null;
    for (; n === Wr; ) Wr = Cn[--ca], Cn[ca] = null, Wa = Cn[--ca], Cn[ca] = null, Ia = Cn[--ca], Cn[ca] = null;
  }
  var zr = null, Ur = null, Gt = !1, fa = null;
  function rd(n, r) {
    var l = ma(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Rv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, zr = n, Ur = $a(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, zr = n, Ur = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Wr !== null ? { id: Ia, overflow: Wa } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ma(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, zr = n, Ur = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ad(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function id(n) {
    if (Gt) {
      var r = Ur;
      if (r) {
        var l = r;
        if (!Rv(n, r)) {
          if (ad(n)) throw Error(w(418));
          r = $a(l.nextSibling);
          var o = zr;
          r && Rv(n, r) ? rd(o, l) : (n.flags = n.flags & -4097 | 2, Gt = !1, zr = n);
        }
      } else {
        if (ad(n)) throw Error(w(418));
        n.flags = n.flags & -4097 | 2, Gt = !1, zr = n;
      }
    }
  }
  function Mn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    zr = n;
  }
  function ic(n) {
    if (n !== zr) return !1;
    if (!Gt) return Mn(n), Gt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Zs(n.type, n.memoizedProps)), r && (r = Ur)) {
      if (ad(n)) throw _o(), Error(w(418));
      for (; r; ) rd(n, r), r = $a(r.nextSibling);
    }
    if (Mn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(w(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Ur = $a(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ur = null;
      }
    } else Ur = zr ? $a(n.stateNode.nextSibling) : null;
    return !0;
  }
  function _o() {
    for (var n = Ur; n; ) n = $a(n.nextSibling);
  }
  function Ji() {
    Ur = zr = null, Gt = !1;
  }
  function Ei(n) {
    fa === null ? fa = [n] : fa.push(n);
  }
  var sy = tt.ReactCurrentBatchConfig;
  function Ul(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(w(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(w(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(w(284));
      if (!l._owner) throw Error(w(290, n));
    }
    return n;
  }
  function lc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(w(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function wv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Al(n) {
    function r(b, T) {
      if (n) {
        var _ = b.deletions;
        _ === null ? (b.deletions = [T], b.flags |= 16) : _.push(T);
      }
    }
    function l(b, T) {
      if (!n) return null;
      for (; T !== null; ) r(b, T), T = T.sibling;
      return null;
    }
    function o(b, T) {
      for (b = /* @__PURE__ */ new Map(); T !== null; ) T.key !== null ? b.set(T.key, T) : b.set(T.index, T), T = T.sibling;
      return b;
    }
    function c(b, T) {
      return b = ul(b, T), b.index = 0, b.sibling = null, b;
    }
    function d(b, T, _) {
      return b.index = _, n ? (_ = b.alternate, _ !== null ? (_ = _.index, _ < T ? (b.flags |= 2, T) : _) : (b.flags |= 2, T)) : (b.flags |= 1048576, T);
    }
    function h(b) {
      return n && b.alternate === null && (b.flags |= 2), b;
    }
    function S(b, T, _, $) {
      return T === null || T.tag !== 6 ? (T = Ad(_, b.mode, $), T.return = b, T) : (T = c(T, _), T.return = b, T);
    }
    function C(b, T, _, $) {
      var de = _.type;
      return de === Ce ? B(b, T, _.props.children, $, _.key) : T !== null && (T.elementType === de || typeof de == "object" && de !== null && de.$$typeof === Vt && wv(de) === T.type) ? ($ = c(T, _.props), $.ref = Ul(b, T, _), $.return = b, $) : ($ = is(_.type, _.key, _.props, null, b.mode, $), $.ref = Ul(b, T, _), $.return = b, $);
    }
    function M(b, T, _, $) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== _.containerInfo || T.stateNode.implementation !== _.implementation ? (T = Fc(_, b.mode, $), T.return = b, T) : (T = c(T, _.children || []), T.return = b, T);
    }
    function B(b, T, _, $, de) {
      return T === null || T.tag !== 7 ? (T = bi(_, b.mode, $, de), T.return = b, T) : (T = c(T, _), T.return = b, T);
    }
    function P(b, T, _) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = Ad("" + T, b.mode, _), T.return = b, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Ee:
            return _ = is(T.type, T.key, T.props, null, b.mode, _), _.ref = Ul(b, null, T), _.return = b, _;
          case nt:
            return T = Fc(T, b.mode, _), T.return = b, T;
          case Vt:
            var $ = T._init;
            return P(b, $(T._payload), _);
        }
        if (qt(T) || G(T)) return T = bi(T, b.mode, _, null), T.return = b, T;
        lc(b, T);
      }
      return null;
    }
    function F(b, T, _, $) {
      var de = T !== null ? T.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return de !== null ? null : S(b, T, "" + _, $);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Ee:
            return _.key === de ? C(b, T, _, $) : null;
          case nt:
            return _.key === de ? M(b, T, _, $) : null;
          case Vt:
            return de = _._init, F(
              b,
              T,
              de(_._payload),
              $
            );
        }
        if (qt(_) || G(_)) return de !== null ? null : B(b, T, _, $, null);
        lc(b, _);
      }
      return null;
    }
    function ie(b, T, _, $, de) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") return b = b.get(_) || null, S(T, b, "" + $, de);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case Ee:
            return b = b.get($.key === null ? _ : $.key) || null, C(T, b, $, de);
          case nt:
            return b = b.get($.key === null ? _ : $.key) || null, M(T, b, $, de);
          case Vt:
            var Me = $._init;
            return ie(b, T, _, Me($._payload), de);
        }
        if (qt($) || G($)) return b = b.get(_) || null, B(T, b, $, de, null);
        lc(T, $);
      }
      return null;
    }
    function fe(b, T, _, $) {
      for (var de = null, Me = null, Ne = T, He = T = 0, Bn = null; Ne !== null && He < _.length; He++) {
        Ne.index > He ? (Bn = Ne, Ne = null) : Bn = Ne.sibling;
        var Ct = F(b, Ne, _[He], $);
        if (Ct === null) {
          Ne === null && (Ne = Bn);
          break;
        }
        n && Ne && Ct.alternate === null && r(b, Ne), T = d(Ct, T, He), Me === null ? de = Ct : Me.sibling = Ct, Me = Ct, Ne = Bn;
      }
      if (He === _.length) return l(b, Ne), Gt && zl(b, He), de;
      if (Ne === null) {
        for (; He < _.length; He++) Ne = P(b, _[He], $), Ne !== null && (T = d(Ne, T, He), Me === null ? de = Ne : Me.sibling = Ne, Me = Ne);
        return Gt && zl(b, He), de;
      }
      for (Ne = o(b, Ne); He < _.length; He++) Bn = ie(Ne, b, He, _[He], $), Bn !== null && (n && Bn.alternate !== null && Ne.delete(Bn.key === null ? He : Bn.key), T = d(Bn, T, He), Me === null ? de = Bn : Me.sibling = Bn, Me = Bn);
      return n && Ne.forEach(function(cl) {
        return r(b, cl);
      }), Gt && zl(b, He), de;
    }
    function ve(b, T, _, $) {
      var de = G(_);
      if (typeof de != "function") throw Error(w(150));
      if (_ = de.call(_), _ == null) throw Error(w(151));
      for (var Me = de = null, Ne = T, He = T = 0, Bn = null, Ct = _.next(); Ne !== null && !Ct.done; He++, Ct = _.next()) {
        Ne.index > He ? (Bn = Ne, Ne = null) : Bn = Ne.sibling;
        var cl = F(b, Ne, Ct.value, $);
        if (cl === null) {
          Ne === null && (Ne = Bn);
          break;
        }
        n && Ne && cl.alternate === null && r(b, Ne), T = d(cl, T, He), Me === null ? de = cl : Me.sibling = cl, Me = cl, Ne = Bn;
      }
      if (Ct.done) return l(
        b,
        Ne
      ), Gt && zl(b, He), de;
      if (Ne === null) {
        for (; !Ct.done; He++, Ct = _.next()) Ct = P(b, Ct.value, $), Ct !== null && (T = d(Ct, T, He), Me === null ? de = Ct : Me.sibling = Ct, Me = Ct);
        return Gt && zl(b, He), de;
      }
      for (Ne = o(b, Ne); !Ct.done; He++, Ct = _.next()) Ct = ie(Ne, b, He, Ct.value, $), Ct !== null && (n && Ct.alternate !== null && Ne.delete(Ct.key === null ? He : Ct.key), T = d(Ct, T, He), Me === null ? de = Ct : Me.sibling = Ct, Me = Ct);
      return n && Ne.forEach(function(uh) {
        return r(b, uh);
      }), Gt && zl(b, He), de;
    }
    function hn(b, T, _, $) {
      if (typeof _ == "object" && _ !== null && _.type === Ce && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Ee:
            e: {
              for (var de = _.key, Me = T; Me !== null; ) {
                if (Me.key === de) {
                  if (de = _.type, de === Ce) {
                    if (Me.tag === 7) {
                      l(b, Me.sibling), T = c(Me, _.props.children), T.return = b, b = T;
                      break e;
                    }
                  } else if (Me.elementType === de || typeof de == "object" && de !== null && de.$$typeof === Vt && wv(de) === Me.type) {
                    l(b, Me.sibling), T = c(Me, _.props), T.ref = Ul(b, Me, _), T.return = b, b = T;
                    break e;
                  }
                  l(b, Me);
                  break;
                } else r(b, Me);
                Me = Me.sibling;
              }
              _.type === Ce ? (T = bi(_.props.children, b.mode, $, _.key), T.return = b, b = T) : ($ = is(_.type, _.key, _.props, null, b.mode, $), $.ref = Ul(b, T, _), $.return = b, b = $);
            }
            return h(b);
          case nt:
            e: {
              for (Me = _.key; T !== null; ) {
                if (T.key === Me) if (T.tag === 4 && T.stateNode.containerInfo === _.containerInfo && T.stateNode.implementation === _.implementation) {
                  l(b, T.sibling), T = c(T, _.children || []), T.return = b, b = T;
                  break e;
                } else {
                  l(b, T);
                  break;
                }
                else r(b, T);
                T = T.sibling;
              }
              T = Fc(_, b.mode, $), T.return = b, b = T;
            }
            return h(b);
          case Vt:
            return Me = _._init, hn(b, T, Me(_._payload), $);
        }
        if (qt(_)) return fe(b, T, _, $);
        if (G(_)) return ve(b, T, _, $);
        lc(b, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" ? (_ = "" + _, T !== null && T.tag === 6 ? (l(b, T.sibling), T = c(T, _), T.return = b, b = T) : (l(b, T), T = Ad(_, b.mode, $), T.return = b, b = T), h(b)) : l(b, T);
    }
    return hn;
  }
  var fn = Al(!0), te = Al(!1), Gr = sa(null), Ar = null, Ou = null, ld = null;
  function ud() {
    ld = Ou = Ar = null;
  }
  function od(n) {
    var r = Gr.current;
    Ft(Gr), n._currentValue = r;
  }
  function sd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function tn(n, r) {
    Ar = n, ld = Ou = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Tn = !0), n.firstContext = null);
  }
  function da(n) {
    var r = n._currentValue;
    if (ld !== n) if (n = { context: n, memoizedValue: r, next: null }, Ou === null) {
      if (Ar === null) throw Error(w(308));
      Ou = n, Ar.dependencies = { lanes: 0, firstContext: n };
    } else Ou = Ou.next = n;
    return r;
  }
  var jl = null;
  function cd(n) {
    jl === null ? jl = [n] : jl.push(n);
  }
  function fd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Xr(n, o);
  }
  function Xr(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Kr = !1;
  function dd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ci(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function el(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, ct & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Xr(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Xr(n, l);
  }
  function uc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Os(n, l);
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
  function Oo(n, r, l, o) {
    var c = n.updateQueue;
    Kr = !1;
    var d = c.firstBaseUpdate, h = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S, M = C.next;
      C.next = null, h === null ? d = M : h.next = M, h = C;
      var B = n.alternate;
      B !== null && (B = B.updateQueue, S = B.lastBaseUpdate, S !== h && (S === null ? B.firstBaseUpdate = M : S.next = M, B.lastBaseUpdate = C));
    }
    if (d !== null) {
      var P = c.baseState;
      h = 0, B = M = C = null, S = d;
      do {
        var F = S.lane, ie = S.eventTime;
        if ((o & F) === F) {
          B !== null && (B = B.next = {
            eventTime: ie,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var fe = n, ve = S;
            switch (F = r, ie = l, ve.tag) {
              case 1:
                if (fe = ve.payload, typeof fe == "function") {
                  P = fe.call(ie, P, F);
                  break e;
                }
                P = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = ve.payload, F = typeof fe == "function" ? fe.call(ie, P, F) : fe, F == null) break e;
                P = W({}, P, F);
                break e;
              case 2:
                Kr = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, F = c.effects, F === null ? c.effects = [S] : F.push(S));
        } else ie = { eventTime: ie, lane: F, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, B === null ? (M = B = ie, C = P) : B = B.next = ie, h |= F;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null) break;
          F = S, S = F.next, F.next = null, c.lastBaseUpdate = F, c.shared.pending = null;
        }
      } while (!0);
      if (B === null && (C = P), c.baseState = C, c.firstBaseUpdate = M, c.lastBaseUpdate = B, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Za |= h, n.lanes = h, n.memoizedState = P;
    }
  }
  function pd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(w(191, c));
        c.call(o);
      }
    }
  }
  var Mo = {}, Ga = sa(Mo), No = sa(Mo), Lo = sa(Mo);
  function Hl(n) {
    if (n === Mo) throw Error(w(174));
    return n;
  }
  function vd(n, r) {
    switch (Se(Lo, r), Se(No, n), Se(Ga, Mo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : jt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = jt(r, n);
    }
    Ft(Ga), Se(Ga, r);
  }
  function Fl() {
    Ft(Ga), Ft(No), Ft(Lo);
  }
  function Dv(n) {
    Hl(Lo.current);
    var r = Hl(Ga.current), l = jt(r, n.type);
    r !== l && (Se(No, n), Se(Ga, l));
  }
  function oc(n) {
    No.current === n && (Ft(Ga), Ft(No));
  }
  var nn = sa(0);
  function sc(n) {
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
  var zo = [];
  function Te() {
    for (var n = 0; n < zo.length; n++) zo[n]._workInProgressVersionPrimary = null;
    zo.length = 0;
  }
  var et = tt.ReactCurrentDispatcher, St = tt.ReactCurrentBatchConfig, Mt = 0, Et = null, xn = null, Fn = null, cc = !1, Uo = !1, Vl = 0, H = 0;
  function ht() {
    throw Error(w(321));
  }
  function ze(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Oa(n[l], r[l])) return !1;
    return !0;
  }
  function tl(n, r, l, o, c, d) {
    if (Mt = d, Et = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, et.current = n === null || n.memoizedState === null ? wc : Bo, n = l(o, c), Uo) {
      d = 0;
      do {
        if (Uo = !1, Vl = 0, 25 <= d) throw Error(w(301));
        d += 1, Fn = xn = null, r.updateQueue = null, et.current = bc, n = l(o, c);
      } while (Uo);
    }
    if (et.current = Ql, r = xn !== null && xn.next !== null, Mt = 0, Fn = xn = Et = null, cc = !1, r) throw Error(w(300));
    return n;
  }
  function Na() {
    var n = Vl !== 0;
    return Vl = 0, n;
  }
  function or() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fn === null ? Et.memoizedState = Fn = n : Fn = Fn.next = n, Fn;
  }
  function dn() {
    if (xn === null) {
      var n = Et.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = xn.next;
    var r = Fn === null ? Et.memoizedState : Fn.next;
    if (r !== null) Fn = r, xn = n;
    else {
      if (n === null) throw Error(w(310));
      xn = n, n = { memoizedState: xn.memoizedState, baseState: xn.baseState, baseQueue: xn.baseQueue, queue: xn.queue, next: null }, Fn === null ? Et.memoizedState = Fn = n : Fn = Fn.next = n;
    }
    return Fn;
  }
  function xi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function nl(n) {
    var r = dn(), l = r.queue;
    if (l === null) throw Error(w(311));
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
      var S = h = null, C = null, M = d;
      do {
        var B = M.lane;
        if ((Mt & B) === B) C !== null && (C = C.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), o = M.hasEagerState ? M.eagerState : n(o, M.action);
        else {
          var P = {
            lane: B,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          C === null ? (S = C = P, h = o) : C = C.next = P, Et.lanes |= B, Za |= B;
        }
        M = M.next;
      } while (M !== null && M !== d);
      C === null ? h = o : C.next = S, Oa(o, r.memoizedState) || (Tn = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Et.lanes |= d, Za |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Bl(n) {
    var r = dn(), l = r.queue;
    if (l === null) throw Error(w(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      Oa(d, r.memoizedState) || (Tn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function fc() {
  }
  function dc(n, r) {
    var l = Et, o = dn(), c = r(), d = !Oa(o.memoizedState, c);
    if (d && (o.memoizedState = c, Tn = !0), o = o.queue, Ao(hc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Fn !== null && Fn.memoizedState.tag & 1) {
      if (l.flags |= 2048, $l(9, vc.bind(null, l, o, c, r), void 0, null), Nn === null) throw Error(w(349));
      Mt & 30 || pc(l, r, c);
    }
    return c;
  }
  function pc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Et.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Et.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function vc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, mc(r) && yc(n);
  }
  function hc(n, r, l) {
    return l(function() {
      mc(r) && yc(n);
    });
  }
  function mc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Oa(n, l);
    } catch {
      return !0;
    }
  }
  function yc(n) {
    var r = Xr(n, 1);
    r !== null && Sr(r, n, 1, -1);
  }
  function gc(n) {
    var r = or();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: xi, lastRenderedState: n }, r.queue = n, n = n.dispatch = Yl.bind(null, Et, n), [r.memoizedState, n];
  }
  function $l(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Et.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Et.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Sc() {
    return dn().memoizedState;
  }
  function Mu(n, r, l, o) {
    var c = or();
    Et.flags |= n, c.memoizedState = $l(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Nu(n, r, l, o) {
    var c = dn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (xn !== null) {
      var h = xn.memoizedState;
      if (d = h.destroy, o !== null && ze(o, h.deps)) {
        c.memoizedState = $l(r, l, d, o);
        return;
      }
    }
    Et.flags |= n, c.memoizedState = $l(1 | r, l, d, o);
  }
  function Ec(n, r) {
    return Mu(8390656, 8, n, r);
  }
  function Ao(n, r) {
    return Nu(2048, 8, n, r);
  }
  function Cc(n, r) {
    return Nu(4, 2, n, r);
  }
  function jo(n, r) {
    return Nu(4, 4, n, r);
  }
  function Pl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function xc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Nu(4, 4, Pl.bind(null, r, n), l);
  }
  function Ho() {
  }
  function Tc(n, r) {
    var l = dn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ze(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Rc(n, r) {
    var l = dn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ze(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function hd(n, r, l) {
    return Mt & 21 ? (Oa(l, r) || (l = _s(), Et.lanes |= l, Za |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Tn = !0), n.memoizedState = l);
  }
  function Fo(n, r) {
    var l = Dt;
    Dt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = St.transition;
    St.transition = {};
    try {
      n(!1), r();
    } finally {
      Dt = l, St.transition = o;
    }
  }
  function md() {
    return dn().memoizedState;
  }
  function Vo(n, r, l) {
    var o = Ja(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, jr(n)) _v(r, l);
    else if (l = fd(n, r, l, o), l !== null) {
      var c = bn();
      Sr(l, n, o, c), zt(l, r, o);
    }
  }
  function Yl(n, r, l) {
    var o = Ja(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (jr(n)) _v(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var h = r.lastRenderedState, S = d(h, l);
        if (c.hasEagerState = !0, c.eagerState = S, Oa(S, h)) {
          var C = r.interleaved;
          C === null ? (c.next = c, cd(r)) : (c.next = C.next, C.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = fd(n, r, c, o), l !== null && (c = bn(), Sr(l, n, o, c), zt(l, r, o));
    }
  }
  function jr(n) {
    var r = n.alternate;
    return n === Et || r !== null && r === Et;
  }
  function _v(n, r) {
    Uo = cc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function zt(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Os(n, l);
    }
  }
  var Ql = { readContext: da, useCallback: ht, useContext: ht, useEffect: ht, useImperativeHandle: ht, useInsertionEffect: ht, useLayoutEffect: ht, useMemo: ht, useReducer: ht, useRef: ht, useState: ht, useDebugValue: ht, useDeferredValue: ht, useTransition: ht, useMutableSource: ht, useSyncExternalStore: ht, useId: ht, unstable_isNewReconciler: !1 }, wc = { readContext: da, useCallback: function(n, r) {
    return or().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: da, useEffect: Ec, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Mu(
      4194308,
      4,
      Pl.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Mu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Mu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = or();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = or();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Vo.bind(null, Et, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = or();
    return n = { current: n }, r.memoizedState = n;
  }, useState: gc, useDebugValue: Ho, useDeferredValue: function(n) {
    return or().memoizedState = n;
  }, useTransition: function() {
    var n = gc(!1), r = n[0];
    return n = Fo.bind(null, n[1]), or().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Et, c = or();
    if (Gt) {
      if (l === void 0) throw Error(w(407));
      l = l();
    } else {
      if (l = r(), Nn === null) throw Error(w(349));
      Mt & 30 || pc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ec(hc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, $l(9, vc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = or(), r = Nn.identifierPrefix;
    if (Gt) {
      var l = Wa, o = Ia;
      l = (o & ~(1 << 32 - aa(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Vl++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = H++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Bo = {
    readContext: da,
    useCallback: Tc,
    useContext: da,
    useEffect: Ao,
    useImperativeHandle: xc,
    useInsertionEffect: Cc,
    useLayoutEffect: jo,
    useMemo: Rc,
    useReducer: nl,
    useRef: Sc,
    useState: function() {
      return nl(xi);
    },
    useDebugValue: Ho,
    useDeferredValue: function(n) {
      var r = dn();
      return hd(r, xn.memoizedState, n);
    },
    useTransition: function() {
      var n = nl(xi)[0], r = dn().memoizedState;
      return [n, r];
    },
    useMutableSource: fc,
    useSyncExternalStore: dc,
    useId: md,
    unstable_isNewReconciler: !1
  }, bc = { readContext: da, useCallback: Tc, useContext: da, useEffect: Ao, useImperativeHandle: xc, useInsertionEffect: Cc, useLayoutEffect: jo, useMemo: Rc, useReducer: Bl, useRef: Sc, useState: function() {
    return Bl(xi);
  }, useDebugValue: Ho, useDeferredValue: function(n) {
    var r = dn();
    return xn === null ? r.memoizedState = n : hd(r, xn.memoizedState, n);
  }, useTransition: function() {
    var n = Bl(xi)[0], r = dn().memoizedState;
    return [n, r];
  }, useMutableSource: fc, useSyncExternalStore: dc, useId: md, unstable_isNewReconciler: !1 };
  function La(n, r) {
    if (n && n.defaultProps) {
      r = W({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function yd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : W({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var kc = { isMounted: function(n) {
    return (n = n._reactInternals) ? qe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = bn(), c = Ja(n), d = Ci(o, c);
    d.payload = r, l != null && (d.callback = l), r = el(n, d, c), r !== null && (Sr(r, n, c, o), uc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = bn(), c = Ja(n), d = Ci(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = el(n, d, c), r !== null && (Sr(r, n, c, o), uc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = bn(), o = Ja(n), c = Ci(l, o);
    c.tag = 2, r != null && (c.callback = r), r = el(n, c, o), r !== null && (Sr(r, n, o, l), uc(r, n, o));
  } };
  function Ov(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !Eo(l, o) || !Eo(c, d) : !0;
  }
  function Dc(n, r, l) {
    var o = !1, c = ur, d = r.contextType;
    return typeof d == "object" && d !== null ? d = da(d) : (c = En(r) ? Nr : on.current, o = r.contextTypes, d = (o = o != null) ? Lr(n, c) : ur), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = kc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Mv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && kc.enqueueReplaceState(r, r.state, null);
  }
  function $o(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, dd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = da(d) : (d = En(r) ? Nr : on.current, c.context = Lr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (yd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && kc.enqueueReplaceState(c, c.state, null), Oo(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Il(n, r) {
    try {
      var l = "", o = r;
      do
        l += sn(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function gd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Sd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var _c = typeof WeakMap == "function" ? WeakMap : Map;
  function Nv(n, r, l) {
    l = Ci(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Hu || (Hu = !0, Xl = o), Sd(n, r);
    }, l;
  }
  function Ed(n, r, l) {
    l = Ci(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Sd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Sd(n, r), typeof o != "function" && (il === null ? il = /* @__PURE__ */ new Set([this]) : il.add(this));
      var h = r.stack;
      this.componentDidCatch(r.value, { componentStack: h !== null ? h : "" });
    }), l;
  }
  function Cd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new _c();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = my.bind(null, n, r, l), r.then(n, n));
  }
  function Lv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function rl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ci(-1, 1), r.tag = 2, el(l, r, 1))), l.lanes |= 1), n);
  }
  var Po = tt.ReactCurrentOwner, Tn = !1;
  function Gn(n, r, l, o) {
    r.child = n === null ? te(r, null, l, o) : fn(r, n.child, l, o);
  }
  function Hr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return tn(r, c), o = tl(n, r, l, o, d, c), l = Na(), n !== null && !Tn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, va(n, r, c)) : (Gt && l && rc(r), r.flags |= 1, Gn(n, r, o, c), r.child);
  }
  function Wl(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Ud(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Xe(n, r, d, o, c)) : (n = is(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Eo, l(h, o) && n.ref === r.ref) return va(n, r, c);
    }
    return r.flags |= 1, n = ul(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Xe(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Eo(d, o) && n.ref === r.ref) if (Tn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Tn = !0);
      else return r.lanes = n.lanes, va(n, r, c);
    }
    return zv(n, r, l, o, c);
  }
  function Yo(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Se(Uu, qr), qr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Se(Uu, qr), qr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Se(Uu, qr), qr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Se(Uu, qr), qr |= o;
    return Gn(n, r, c, l), r.child;
  }
  function xd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function zv(n, r, l, o, c) {
    var d = En(l) ? Nr : on.current;
    return d = Lr(r, d), tn(r, c), l = tl(n, r, l, o, d, c), o = Na(), n !== null && !Tn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, va(n, r, c)) : (Gt && o && rc(r), r.flags |= 1, Gn(n, r, l, c), r.child);
  }
  function Uv(n, r, l, o, c) {
    if (En(l)) {
      var d = !0;
      Hn(r);
    } else d = !1;
    if (tn(r, c), r.stateNode === null) pa(n, r), Dc(r, l, o), $o(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, M = l.contextType;
      typeof M == "object" && M !== null ? M = da(M) : (M = En(l) ? Nr : on.current, M = Lr(r, M));
      var B = l.getDerivedStateFromProps, P = typeof B == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      P || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== M) && Mv(r, h, o, M), Kr = !1;
      var F = r.memoizedState;
      h.state = F, Oo(r, o, h, c), C = r.memoizedState, S !== o || F !== C || On.current || Kr ? (typeof B == "function" && (yd(r, l, B, o), C = r.memoizedState), (S = Kr || Ov(r, l, S, o, F, C, M)) ? (P || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = M, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, bv(n, r), S = r.memoizedProps, M = r.type === r.elementType ? S : La(r.type, S), h.props = M, P = r.pendingProps, F = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = da(C) : (C = En(l) ? Nr : on.current, C = Lr(r, C));
      var ie = l.getDerivedStateFromProps;
      (B = typeof ie == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== P || F !== C) && Mv(r, h, o, C), Kr = !1, F = r.memoizedState, h.state = F, Oo(r, o, h, c);
      var fe = r.memoizedState;
      S !== P || F !== fe || On.current || Kr ? (typeof ie == "function" && (yd(r, l, ie, o), fe = r.memoizedState), (M = Kr || Ov(r, l, M, o, F, fe, C) || !1) ? (B || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, fe, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, fe, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = fe), h.props = o, h.state = fe, h.context = C, o = M) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && F === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Qo(n, r, l, o, d, c);
  }
  function Qo(n, r, l, o, c, d) {
    xd(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h) return c && tc(r, l, !1), va(n, r, d);
    o = r.stateNode, Po.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = fn(r, n.child, null, d), r.child = fn(r, null, S, d)) : Gn(n, r, S, d), r.memoizedState = o.state, c && tc(r, l, !0), r.child;
  }
  function Lu(n) {
    var r = n.stateNode;
    r.pendingContext ? xv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && xv(n, r.context, !1), vd(n, r.containerInfo);
  }
  function Av(n, r, l, o, c) {
    return Ji(), Ei(c), r.flags |= 256, Gn(n, r, l, o), r.child;
  }
  var Oc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Td(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Mc(n, r, l) {
    var o = r.pendingProps, c = nn.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Se(nn, c & 1), n === null)
      return id(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = ol(h, o, 0, null), n = bi(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Td(l), r.memoizedState = Oc, n) : Rd(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null)) return jv(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = ul(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = ul(S, d) : (d = bi(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Td(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Oc, o;
    }
    return d = n.child, n = d.sibling, o = ul(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Rd(n, r) {
    return r = ol({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Io(n, r, l, o) {
    return o !== null && Ei(o), fn(r, n.child, null, l), n = Rd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function jv(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = gd(Error(w(422))), Io(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = ol({ mode: "visible", children: o.children }, c, 0, null), d = bi(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && fn(r, n.child, null, h), r.child.memoizedState = Td(h), r.memoizedState = Oc, d);
    if (!(r.mode & 1)) return Io(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var S = o.dgst;
      return o = S, d = Error(w(419)), o = gd(d, o, void 0), Io(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, Tn || S) {
      if (o = Nn, o !== null) {
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
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Xr(n, c), Sr(o, n, c, -1));
      }
      return zd(), o = gd(Error(w(421))), Io(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = yy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Ur = $a(c.nextSibling), zr = r, Gt = !0, fa = null, n !== null && (Cn[ca++] = Ia, Cn[ca++] = Wa, Cn[ca++] = Wr, Ia = n.id, Wa = n.overflow, Wr = r), r = Rd(r, o.children), r.flags |= 4096, r);
  }
  function wd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), sd(n.return, r, l);
  }
  function mr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Xa(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Gn(n, r, o.children, l), o = nn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && wd(n, l, r);
        else if (n.tag === 19) wd(n, l, r);
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
    if (Se(nn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && sc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), mr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && sc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        mr(r, !0, l, null, d);
        break;
      case "together":
        mr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function pa(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function va(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Za |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(w(153));
    if (r.child !== null) {
      for (n = r.child, l = ul(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = ul(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Wo(n, r, l) {
    switch (r.tag) {
      case 3:
        Lu(r), Ji();
        break;
      case 5:
        Dv(r);
        break;
      case 1:
        En(r.type) && Hn(r);
        break;
      case 4:
        vd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Se(Gr, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Se(nn, nn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Mc(n, r, l) : (Se(nn, nn.current & 1), n = va(n, r, l), n !== null ? n.sibling : null);
        Se(nn, nn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Xa(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Se(nn, nn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Yo(n, r, l);
    }
    return va(n, r, l);
  }
  var ha, Rn, Hv, Fv;
  ha = function(n, r) {
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
      n = r.stateNode, Hl(Ga.current);
      var d = null;
      switch (l) {
        case "input":
          c = Pn(n, c), o = Pn(n, o), d = [];
          break;
        case "select":
          c = W({}, c, { value: void 0 }), o = W({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = jn(n, c), o = jn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Wi);
      }
      ot(l, o);
      var h;
      l = null;
      for (M in c) if (!o.hasOwnProperty(M) && c.hasOwnProperty(M) && c[M] != null) if (M === "style") {
        var S = c[M];
        for (h in S) S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
      } else M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (Ue.hasOwnProperty(M) ? d || (d = []) : (d = d || []).push(M, null));
      for (M in o) {
        var C = o[M];
        if (S = c != null ? c[M] : void 0, o.hasOwnProperty(M) && C !== S && (C != null || S != null)) if (M === "style") if (S) {
          for (h in S) !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
          for (h in C) C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
        } else l || (d || (d = []), d.push(
          M,
          l
        )), l = C;
        else M === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(M, C)) : M === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(M, "" + C) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (Ue.hasOwnProperty(M) ? (C != null && M === "onScroll" && wt("scroll", n), d || S === C || (d = [])) : (d = d || []).push(M, C));
      }
      l && (d = d || []).push("style", l);
      var M = d;
      (r.updateQueue = M) && (r.flags |= 4);
    }
  }, Fv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Go(n, r) {
    if (!Gt) switch (n.tailMode) {
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
  function Vn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Vv(n, r, l) {
    var o = r.pendingProps;
    switch (ac(r), r.tag) {
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
        return Vn(r), null;
      case 1:
        return En(r.type) && Du(), Vn(r), null;
      case 3:
        return o = r.stateNode, Fl(), Ft(On), Ft(on), Te(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (ic(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, fa !== null && (Kl(fa), fa = null))), Rn(n, r), Vn(r), null;
      case 5:
        oc(r);
        var c = Hl(Lo.current);
        if (l = r.type, n !== null && r.stateNode != null) Hv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(w(166));
            return Vn(r), null;
          }
          if (n = Hl(Ga.current), ic(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Pa] = r, o[bo] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                wt("cancel", o), wt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                wt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < To.length; c++) wt(To[c], o);
                break;
              case "source":
                wt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                wt(
                  "error",
                  o
                ), wt("load", o);
                break;
              case "details":
                wt("toggle", o);
                break;
              case "input":
                ln(o, d), wt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, wt("invalid", o);
                break;
              case "textarea":
                dr(o, d), wt("invalid", o);
            }
            ot(l, d), c = null;
            for (var h in d) if (d.hasOwnProperty(h)) {
              var S = d[h];
              h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && qs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && qs(
                o.textContent,
                S,
                n
              ), c = ["children", "" + S]) : Ue.hasOwnProperty(h) && S != null && h === "onScroll" && wt("scroll", o);
            }
            switch (l) {
              case "input":
                gn(o), wa(o, d, !0);
                break;
              case "textarea":
                gn(o), Oe(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Wi);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Rt(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[Pa] = r, n[bo] = o, ha(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = vt(l, o), l) {
                case "dialog":
                  wt("cancel", n), wt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  wt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < To.length; c++) wt(To[c], n);
                  c = o;
                  break;
                case "source":
                  wt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  wt(
                    "error",
                    n
                  ), wt("load", n), c = o;
                  break;
                case "details":
                  wt("toggle", n), c = o;
                  break;
                case "input":
                  ln(n, o), c = Pn(n, o), wt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = W({}, o, { value: void 0 }), wt("invalid", n);
                  break;
                case "textarea":
                  dr(n, o), c = jn(n, o), wt("invalid", n);
                  break;
                default:
                  c = o;
              }
              ot(l, c), S = c;
              for (d in S) if (S.hasOwnProperty(d)) {
                var C = S[d];
                d === "style" ? pt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && Zt(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && X(n, C) : typeof C == "number" && X(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ue.hasOwnProperty(d) ? C != null && d === "onScroll" && wt("scroll", n) : C != null && De(n, d, C, h));
              }
              switch (l) {
                case "input":
                  gn(n), wa(n, o, !1);
                  break;
                case "textarea":
                  gn(n), Oe(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + yn(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Dn(n, !!o.multiple, d, !1) : o.defaultValue != null && Dn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Wi);
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
        return Vn(r), null;
      case 6:
        if (n && r.stateNode != null) Fv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(w(166));
          if (l = Hl(Lo.current), Hl(Ga.current), ic(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Pa] = r, (d = o.nodeValue !== l) && (n = zr, n !== null)) switch (n.tag) {
              case 3:
                qs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && qs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Pa] = r, r.stateNode = o;
        }
        return Vn(r), null;
      case 13:
        if (Ft(nn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Gt && Ur !== null && r.mode & 1 && !(r.flags & 128)) _o(), Ji(), r.flags |= 98560, d = !1;
          else if (d = ic(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(w(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(w(317));
              d[Pa] = r;
            } else Ji(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Vn(r), d = !1;
          } else fa !== null && (Kl(fa), fa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || nn.current & 1 ? vn === 0 && (vn = 3) : zd())), r.updateQueue !== null && (r.flags |= 4), Vn(r), null);
      case 4:
        return Fl(), Rn(n, r), n === null && Tu(r.stateNode.containerInfo), Vn(r), null;
      case 10:
        return od(r.type._context), Vn(r), null;
      case 17:
        return En(r.type) && Du(), Vn(r), null;
      case 19:
        if (Ft(nn), d = r.memoizedState, d === null) return Vn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null) if (o) Go(d, !1);
        else {
          if (vn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (h = sc(n), h !== null) {
              for (r.flags |= 128, Go(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Se(nn, nn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ze() > ju && (r.flags |= 128, o = !0, Go(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = sc(h), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Go(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !Gt) return Vn(r), null;
          } else 2 * Ze() - d.renderingStartTime > ju && l !== 1073741824 && (r.flags |= 128, o = !0, Go(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ze(), r.sibling = null, l = nn.current, Se(nn, o ? l & 1 | 2 : l & 1), r) : (Vn(r), null);
      case 22:
      case 23:
        return Ld(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? qr & 1073741824 && (Vn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Vn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(w(156, r.tag));
  }
  function Nc(n, r) {
    switch (ac(r), r.tag) {
      case 1:
        return En(r.type) && Du(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Fl(), Ft(On), Ft(on), Te(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return oc(r), null;
      case 13:
        if (Ft(nn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(w(340));
          Ji();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ft(nn), null;
      case 4:
        return Fl(), null;
      case 10:
        return od(r.type._context), null;
      case 22:
      case 23:
        return Ld(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Xo = !1, sr = !1, cy = typeof WeakSet == "function" ? WeakSet : Set, se = null;
  function zu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Xt(n, r, o);
    }
    else l.current = null;
  }
  function Lc(n, r, l) {
    try {
      l();
    } catch (o) {
      Xt(n, r, o);
    }
  }
  var Bv = !1;
  function $v(n, r) {
    if (wo = wl, n = Co(), Ps(n)) {
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
          var h = 0, S = -1, C = -1, M = 0, B = 0, P = n, F = null;
          t: for (; ; ) {
            for (var ie; P !== l || c !== 0 && P.nodeType !== 3 || (S = h + c), P !== d || o !== 0 && P.nodeType !== 3 || (C = h + o), P.nodeType === 3 && (h += P.nodeValue.length), (ie = P.firstChild) !== null; )
              F = P, P = ie;
            for (; ; ) {
              if (P === n) break t;
              if (F === l && ++M === c && (S = h), F === d && ++B === o && (C = h), (ie = P.nextSibling) !== null) break;
              P = F, F = P.parentNode;
            }
            P = ie;
          }
          l = S === -1 || C === -1 ? null : { start: S, end: C };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Nl = { focusedElem: n, selectionRange: l }, wl = !1, se = r; se !== null; ) if (r = se, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, se = n;
    else for (; se !== null; ) {
      r = se;
      try {
        var fe = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (fe !== null) {
              var ve = fe.memoizedProps, hn = fe.memoizedState, b = r.stateNode, T = b.getSnapshotBeforeUpdate(r.elementType === r.type ? ve : La(r.type, ve), hn);
              b.__reactInternalSnapshotBeforeUpdate = T;
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
            throw Error(w(163));
        }
      } catch ($) {
        Xt(r, r.return, $);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, se = n;
        break;
      }
      se = r.return;
    }
    return fe = Bv, Bv = !1, fe;
  }
  function Ko(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Lc(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function qo(n, r) {
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
  function bd(n) {
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
  function zc(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, zc(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Pa], delete r[bo], delete r[ko], delete r[ku], delete r[oy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Zo(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ti(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Zo(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ka(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Wi));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ka(n, r, l), n = n.sibling; n !== null; ) Ka(n, r, l), n = n.sibling;
  }
  function qa(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (qa(n, r, l), n = n.sibling; n !== null; ) qa(n, r, l), n = n.sibling;
  }
  var pn = null, yr = !1;
  function gr(n, r, l) {
    for (l = l.child; l !== null; ) Pv(n, r, l), l = l.sibling;
  }
  function Pv(n, r, l) {
    if (Da && typeof Da.onCommitFiberUnmount == "function") try {
      Da.onCommitFiberUnmount(so, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        sr || zu(l, r);
      case 6:
        var o = pn, c = yr;
        pn = null, gr(n, r, l), pn = o, yr = c, pn !== null && (yr ? (n = pn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : pn.removeChild(l.stateNode));
        break;
      case 18:
        pn !== null && (yr ? (n = pn, l = l.stateNode, n.nodeType === 8 ? bu(n.parentNode, l) : n.nodeType === 1 && bu(n, l), Yi(n)) : bu(pn, l.stateNode));
        break;
      case 4:
        o = pn, c = yr, pn = l.stateNode.containerInfo, yr = !0, gr(n, r, l), pn = o, yr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!sr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, h = d.destroy;
            d = d.tag, h !== void 0 && (d & 2 || d & 4) && Lc(l, r, h), c = c.next;
          } while (c !== o);
        }
        gr(n, r, l);
        break;
      case 1:
        if (!sr && (zu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (S) {
          Xt(l, r, S);
        }
        gr(n, r, l);
        break;
      case 21:
        gr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (sr = (o = sr) || l.memoizedState !== null, gr(n, r, l), sr = o) : gr(n, r, l);
        break;
      default:
        gr(n, r, l);
    }
  }
  function Yv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new cy()), r.forEach(function(o) {
        var c = Jv.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function za(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, h = r, S = h;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              pn = S.stateNode, yr = !1;
              break e;
            case 3:
              pn = S.stateNode.containerInfo, yr = !0;
              break e;
            case 4:
              pn = S.stateNode.containerInfo, yr = !0;
              break e;
          }
          S = S.return;
        }
        if (pn === null) throw Error(w(160));
        Pv(d, h, c), pn = null, yr = !1;
        var C = c.alternate;
        C !== null && (C.return = null), c.return = null;
      } catch (M) {
        Xt(c, r, M);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) kd(r, n), r = r.sibling;
  }
  function kd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (za(r, n), Fr(n), o & 4) {
          try {
            Ko(3, n, n.return), qo(3, n);
          } catch (ve) {
            Xt(n, n.return, ve);
          }
          try {
            Ko(5, n, n.return);
          } catch (ve) {
            Xt(n, n.return, ve);
          }
        }
        break;
      case 1:
        za(r, n), Fr(n), o & 512 && l !== null && zu(l, l.return);
        break;
      case 5:
        if (za(r, n), Fr(n), o & 512 && l !== null && zu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            X(c, "");
          } catch (ve) {
            Xt(n, n.return, ve);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null) try {
            S === "input" && d.type === "radio" && d.name != null && An(c, d), vt(S, h);
            var M = vt(S, d);
            for (h = 0; h < C.length; h += 2) {
              var B = C[h], P = C[h + 1];
              B === "style" ? pt(c, P) : B === "dangerouslySetInnerHTML" ? Zt(c, P) : B === "children" ? X(c, P) : De(c, B, P, M);
            }
            switch (S) {
              case "input":
                Ra(c, d);
                break;
              case "textarea":
                Fa(c, d);
                break;
              case "select":
                var F = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ie = d.value;
                ie != null ? Dn(c, !!d.multiple, ie, !1) : F !== !!d.multiple && (d.defaultValue != null ? Dn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Dn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[bo] = d;
          } catch (ve) {
            Xt(n, n.return, ve);
          }
        }
        break;
      case 6:
        if (za(r, n), Fr(n), o & 4) {
          if (n.stateNode === null) throw Error(w(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ve) {
            Xt(n, n.return, ve);
          }
        }
        break;
      case 3:
        if (za(r, n), Fr(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Yi(r.containerInfo);
        } catch (ve) {
          Xt(n, n.return, ve);
        }
        break;
      case 4:
        za(r, n), Fr(n);
        break;
      case 13:
        za(r, n), Fr(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Od = Ze())), o & 4 && Yv(n);
        break;
      case 22:
        if (B = l !== null && l.memoizedState !== null, n.mode & 1 ? (sr = (M = sr) || B, za(r, n), sr = M) : za(r, n), Fr(n), o & 8192) {
          if (M = n.memoizedState !== null, (n.stateNode.isHidden = M) && !B && n.mode & 1) for (se = n, B = n.child; B !== null; ) {
            for (P = se = B; se !== null; ) {
              switch (F = se, ie = F.child, F.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ko(4, F, F.return);
                  break;
                case 1:
                  zu(F, F.return);
                  var fe = F.stateNode;
                  if (typeof fe.componentWillUnmount == "function") {
                    o = F, l = F.return;
                    try {
                      r = o, fe.props = r.memoizedProps, fe.state = r.memoizedState, fe.componentWillUnmount();
                    } catch (ve) {
                      Xt(o, l, ve);
                    }
                  }
                  break;
                case 5:
                  zu(F, F.return);
                  break;
                case 22:
                  if (F.memoizedState !== null) {
                    Jo(P);
                    continue;
                  }
              }
              ie !== null ? (ie.return = F, se = ie) : Jo(P);
            }
            B = B.sibling;
          }
          e: for (B = null, P = n; ; ) {
            if (P.tag === 5) {
              if (B === null) {
                B = P;
                try {
                  c = P.stateNode, M ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = P.stateNode, C = P.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Ke("display", h));
                } catch (ve) {
                  Xt(n, n.return, ve);
                }
              }
            } else if (P.tag === 6) {
              if (B === null) try {
                P.stateNode.nodeValue = M ? "" : P.memoizedProps;
              } catch (ve) {
                Xt(n, n.return, ve);
              }
            } else if ((P.tag !== 22 && P.tag !== 23 || P.memoizedState === null || P === n) && P.child !== null) {
              P.child.return = P, P = P.child;
              continue;
            }
            if (P === n) break e;
            for (; P.sibling === null; ) {
              if (P.return === null || P.return === n) break e;
              B === P && (B = null), P = P.return;
            }
            B === P && (B = null), P.sibling.return = P.return, P = P.sibling;
          }
        }
        break;
      case 19:
        za(r, n), Fr(n), o & 4 && Yv(n);
        break;
      case 21:
        break;
      default:
        za(
          r,
          n
        ), Fr(n);
    }
  }
  function Fr(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Zo(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(w(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (X(c, ""), o.flags &= -33);
            var d = Ti(n);
            qa(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = Ti(n);
            Ka(n, S, h);
            break;
          default:
            throw Error(w(161));
        }
      } catch (C) {
        Xt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function fy(n, r, l) {
    se = n, Dd(n);
  }
  function Dd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; se !== null; ) {
      var c = se, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || Xo;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || sr;
          S = Xo;
          var M = sr;
          if (Xo = h, (sr = C) && !M) for (se = c; se !== null; ) h = se, C = h.child, h.tag === 22 && h.memoizedState !== null ? _d(c) : C !== null ? (C.return = h, se = C) : _d(c);
          for (; d !== null; ) se = d, Dd(d), d = d.sibling;
          se = c, Xo = S, sr = M;
        }
        Qv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, se = d) : Qv(n);
    }
  }
  function Qv(n) {
    for (; se !== null; ) {
      var r = se;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              sr || qo(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !sr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : La(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && pd(r, d, o);
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
                pd(r, h, l);
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
                var M = r.alternate;
                if (M !== null) {
                  var B = M.memoizedState;
                  if (B !== null) {
                    var P = B.dehydrated;
                    P !== null && Yi(P);
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
              throw Error(w(163));
          }
          sr || r.flags & 512 && bd(r);
        } catch (F) {
          Xt(r, r.return, F);
        }
      }
      if (r === n) {
        se = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, se = l;
        break;
      }
      se = r.return;
    }
  }
  function Jo(n) {
    for (; se !== null; ) {
      var r = se;
      if (r === n) {
        se = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, se = l;
        break;
      }
      se = r.return;
    }
  }
  function _d(n) {
    for (; se !== null; ) {
      var r = se;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              qo(4, r);
            } catch (C) {
              Xt(r, l, C);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (C) {
                Xt(r, c, C);
              }
            }
            var d = r.return;
            try {
              bd(r);
            } catch (C) {
              Xt(r, d, C);
            }
            break;
          case 5:
            var h = r.return;
            try {
              bd(r);
            } catch (C) {
              Xt(r, h, C);
            }
        }
      } catch (C) {
        Xt(r, r.return, C);
      }
      if (r === n) {
        se = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, se = S;
        break;
      }
      se = r.return;
    }
  }
  var dy = Math.ceil, al = tt.ReactCurrentDispatcher, Gl = tt.ReactCurrentOwner, Xn = tt.ReactCurrentBatchConfig, ct = 0, Nn = null, wn = null, Kn = 0, qr = 0, Uu = sa(0), vn = 0, es = null, Za = 0, Au = 0, Uc = 0, ts = null, Vr = null, Od = 0, ju = 1 / 0, Zr = null, Hu = !1, Xl = null, il = null, Ac = !1, Ri = null, ns = 0, ll = 0, Fu = null, rs = -1, cr = 0;
  function bn() {
    return ct & 6 ? Ze() : rs !== -1 ? rs : rs = Ze();
  }
  function Ja(n) {
    return n.mode & 1 ? ct & 2 && Kn !== 0 ? Kn & -Kn : sy.transition !== null ? (cr === 0 && (cr = _s()), cr) : (n = Dt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ls(n.type)), n) : 1;
  }
  function Sr(n, r, l, o) {
    if (50 < ll) throw ll = 0, Fu = null, Error(w(185));
    Tl(n, l, o), (!(ct & 2) || n !== Nn) && (n === Nn && (!(ct & 2) && (Au |= l), vn === 4 && Ua(n, Kn)), Br(n, o), l === 1 && ct === 0 && !(r.mode & 1) && (ju = Ze() + 500, _u && Qa()));
  }
  function Br(n, r) {
    var l = n.callbackNode;
    bf(n, r);
    var o = xl(n, n === Nn ? Kn : 0);
    if (o === 0) l !== null && vr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && vr(l), r === 1) n.tag === 0 ? Xi(Md.bind(null, n)) : nc(Md.bind(null, n)), wu(function() {
        !(ct & 6) && Qa();
      }), l = null;
      else {
        switch (_f(o)) {
          case 1:
            l = fi;
            break;
          case 4:
            l = uo;
            break;
          case 16:
            l = oo;
            break;
          case 536870912:
            l = Rf;
            break;
          default:
            l = oo;
        }
        l = th(l, jc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function jc(n, r) {
    if (rs = -1, cr = 0, ct & 6) throw Error(w(327));
    var l = n.callbackNode;
    if (Vu() && n.callbackNode !== l) return null;
    var o = xl(n, n === Nn ? Kn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Hc(n, o);
    else {
      r = o;
      var c = ct;
      ct |= 2;
      var d = Wv();
      (Nn !== n || Kn !== r) && (Zr = null, ju = Ze() + 500, wi(n, r));
      do
        try {
          Gv();
          break;
        } catch (S) {
          Iv(n, S);
        }
      while (!0);
      ud(), al.current = d, ct = c, wn !== null ? r = 0 : (Nn = null, Kn = 0, r = vn);
    }
    if (r !== 0) {
      if (r === 2 && (c = kf(n), c !== 0 && (o = c, r = as(n, c))), r === 1) throw l = es, wi(n, 0), Ua(n, o), Br(n, Ze()), l;
      if (r === 6) Ua(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !py(c) && (r = Hc(n, o), r === 2 && (d = kf(n), d !== 0 && (o = d, r = as(n, d))), r === 1)) throw l = es, wi(n, 0), Ua(n, o), Br(n, Ze()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(w(345));
          case 2:
            Zl(n, Vr, Zr);
            break;
          case 3:
            if (Ua(n, o), (o & 130023424) === o && (r = Od + 500 - Ze(), 10 < r)) {
              if (xl(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                bn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Js(Zl.bind(null, n, Vr, Zr), r);
              break;
            }
            Zl(n, Vr, Zr);
            break;
          case 4:
            if (Ua(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - aa(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = Ze() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * dy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Js(Zl.bind(null, n, Vr, Zr), o);
              break;
            }
            Zl(n, Vr, Zr);
            break;
          case 5:
            Zl(n, Vr, Zr);
            break;
          default:
            throw Error(w(329));
        }
      }
    }
    return Br(n, Ze()), n.callbackNode === l ? jc.bind(null, n) : null;
  }
  function as(n, r) {
    var l = ts;
    return n.current.memoizedState.isDehydrated && (wi(n, r).flags |= 256), n = Hc(n, r), n !== 2 && (r = Vr, Vr = l, r !== null && Kl(r)), n;
  }
  function Kl(n) {
    Vr === null ? Vr = n : Vr.push.apply(Vr, n);
  }
  function py(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Oa(d(), c)) return !1;
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
  function Ua(n, r) {
    for (r &= ~Uc, r &= ~Au, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - aa(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Md(n) {
    if (ct & 6) throw Error(w(327));
    Vu();
    var r = xl(n, 0);
    if (!(r & 1)) return Br(n, Ze()), null;
    var l = Hc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = kf(n);
      o !== 0 && (r = o, l = as(n, o));
    }
    if (l === 1) throw l = es, wi(n, 0), Ua(n, r), Br(n, Ze()), l;
    if (l === 6) throw Error(w(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Zl(n, Vr, Zr), Br(n, Ze()), null;
  }
  function Nd(n, r) {
    var l = ct;
    ct |= 1;
    try {
      return n(r);
    } finally {
      ct = l, ct === 0 && (ju = Ze() + 500, _u && Qa());
    }
  }
  function ql(n) {
    Ri !== null && Ri.tag === 0 && !(ct & 6) && Vu();
    var r = ct;
    ct |= 1;
    var l = Xn.transition, o = Dt;
    try {
      if (Xn.transition = null, Dt = 1, n) return n();
    } finally {
      Dt = o, Xn.transition = l, ct = r, !(ct & 6) && Qa();
    }
  }
  function Ld() {
    qr = Uu.current, Ft(Uu);
  }
  function wi(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, nd(l)), wn !== null) for (l = wn.return; l !== null; ) {
      var o = l;
      switch (ac(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Du();
          break;
        case 3:
          Fl(), Ft(On), Ft(on), Te();
          break;
        case 5:
          oc(o);
          break;
        case 4:
          Fl();
          break;
        case 13:
          Ft(nn);
          break;
        case 19:
          Ft(nn);
          break;
        case 10:
          od(o.type._context);
          break;
        case 22:
        case 23:
          Ld();
      }
      l = l.return;
    }
    if (Nn = n, wn = n = ul(n.current, null), Kn = qr = r, vn = 0, es = null, Uc = Au = Za = 0, Vr = ts = null, jl !== null) {
      for (r = 0; r < jl.length; r++) if (l = jl[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var h = d.next;
          d.next = c, o.next = h;
        }
        l.pending = o;
      }
      jl = null;
    }
    return n;
  }
  function Iv(n, r) {
    do {
      var l = wn;
      try {
        if (ud(), et.current = Ql, cc) {
          for (var o = Et.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          cc = !1;
        }
        if (Mt = 0, Fn = xn = Et = null, Uo = !1, Vl = 0, Gl.current = null, l === null || l.return === null) {
          vn = 1, es = r, wn = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = Kn, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var M = C, B = S, P = B.tag;
            if (!(B.mode & 1) && (P === 0 || P === 11 || P === 15)) {
              var F = B.alternate;
              F ? (B.updateQueue = F.updateQueue, B.memoizedState = F.memoizedState, B.lanes = F.lanes) : (B.updateQueue = null, B.memoizedState = null);
            }
            var ie = Lv(h);
            if (ie !== null) {
              ie.flags &= -257, rl(ie, h, S, d, r), ie.mode & 1 && Cd(d, M, r), r = ie, C = M;
              var fe = r.updateQueue;
              if (fe === null) {
                var ve = /* @__PURE__ */ new Set();
                ve.add(C), r.updateQueue = ve;
              } else fe.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                Cd(d, M, r), zd();
                break e;
              }
              C = Error(w(426));
            }
          } else if (Gt && S.mode & 1) {
            var hn = Lv(h);
            if (hn !== null) {
              !(hn.flags & 65536) && (hn.flags |= 256), rl(hn, h, S, d, r), Ei(Il(C, S));
              break e;
            }
          }
          d = C = Il(C, S), vn !== 4 && (vn = 2), ts === null ? ts = [d] : ts.push(d), d = h;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var b = Nv(d, C, r);
                kv(d, b);
                break e;
              case 1:
                S = C;
                var T = d.type, _ = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (il === null || !il.has(_)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var $ = Ed(d, S, r);
                  kv(d, $);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Kv(l);
      } catch (de) {
        r = de, wn === l && l !== null && (wn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Wv() {
    var n = al.current;
    return al.current = Ql, n === null ? Ql : n;
  }
  function zd() {
    (vn === 0 || vn === 3 || vn === 2) && (vn = 4), Nn === null || !(Za & 268435455) && !(Au & 268435455) || Ua(Nn, Kn);
  }
  function Hc(n, r) {
    var l = ct;
    ct |= 2;
    var o = Wv();
    (Nn !== n || Kn !== r) && (Zr = null, wi(n, r));
    do
      try {
        vy();
        break;
      } catch (c) {
        Iv(n, c);
      }
    while (!0);
    if (ud(), ct = l, al.current = o, wn !== null) throw Error(w(261));
    return Nn = null, Kn = 0, vn;
  }
  function vy() {
    for (; wn !== null; ) Xv(wn);
  }
  function Gv() {
    for (; wn !== null && !si(); ) Xv(wn);
  }
  function Xv(n) {
    var r = eh(n.alternate, n, qr);
    n.memoizedProps = n.pendingProps, r === null ? Kv(n) : wn = r, Gl.current = null;
  }
  function Kv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Nc(l, r), l !== null) {
          l.flags &= 32767, wn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          vn = 6, wn = null;
          return;
        }
      } else if (l = Vv(l, r, qr), l !== null) {
        wn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        wn = r;
        return;
      }
      wn = r = n;
    } while (r !== null);
    vn === 0 && (vn = 5);
  }
  function Zl(n, r, l) {
    var o = Dt, c = Xn.transition;
    try {
      Xn.transition = null, Dt = 1, hy(n, r, l, o);
    } finally {
      Xn.transition = c, Dt = o;
    }
    return null;
  }
  function hy(n, r, l, o) {
    do
      Vu();
    while (Ri !== null);
    if (ct & 6) throw Error(w(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(w(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Ym(n, d), n === Nn && (wn = Nn = null, Kn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Ac || (Ac = !0, th(oo, function() {
      return Vu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Xn.transition, Xn.transition = null;
      var h = Dt;
      Dt = 1;
      var S = ct;
      ct |= 4, Gl.current = null, $v(n, l), kd(l, n), Cu(Nl), wl = !!wo, Nl = wo = null, n.current = l, fy(l), ci(), ct = S, Dt = h, Xn.transition = d;
    } else n.current = l;
    if (Ac && (Ac = !1, Ri = n, ns = c), d = n.pendingLanes, d === 0 && (il = null), Pp(l.stateNode), Br(n, Ze()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Hu) throw Hu = !1, n = Xl, Xl = null, n;
    return ns & 1 && n.tag !== 0 && Vu(), d = n.pendingLanes, d & 1 ? n === Fu ? ll++ : (ll = 0, Fu = n) : ll = 0, Qa(), null;
  }
  function Vu() {
    if (Ri !== null) {
      var n = _f(ns), r = Xn.transition, l = Dt;
      try {
        if (Xn.transition = null, Dt = 16 > n ? 16 : n, Ri === null) var o = !1;
        else {
          if (n = Ri, Ri = null, ns = 0, ct & 6) throw Error(w(331));
          var c = ct;
          for (ct |= 4, se = n.current; se !== null; ) {
            var d = se, h = d.child;
            if (se.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var M = S[C];
                  for (se = M; se !== null; ) {
                    var B = se;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ko(8, B, d);
                    }
                    var P = B.child;
                    if (P !== null) P.return = B, se = P;
                    else for (; se !== null; ) {
                      B = se;
                      var F = B.sibling, ie = B.return;
                      if (zc(B), B === M) {
                        se = null;
                        break;
                      }
                      if (F !== null) {
                        F.return = ie, se = F;
                        break;
                      }
                      se = ie;
                    }
                  }
                }
                var fe = d.alternate;
                if (fe !== null) {
                  var ve = fe.child;
                  if (ve !== null) {
                    fe.child = null;
                    do {
                      var hn = ve.sibling;
                      ve.sibling = null, ve = hn;
                    } while (ve !== null);
                  }
                }
                se = d;
              }
            }
            if (d.subtreeFlags & 2064 && h !== null) h.return = d, se = h;
            else e: for (; se !== null; ) {
              if (d = se, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ko(9, d, d.return);
              }
              var b = d.sibling;
              if (b !== null) {
                b.return = d.return, se = b;
                break e;
              }
              se = d.return;
            }
          }
          var T = n.current;
          for (se = T; se !== null; ) {
            h = se;
            var _ = h.child;
            if (h.subtreeFlags & 2064 && _ !== null) _.return = h, se = _;
            else e: for (h = T; se !== null; ) {
              if (S = se, S.flags & 2048) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qo(9, S);
                }
              } catch (de) {
                Xt(S, S.return, de);
              }
              if (S === h) {
                se = null;
                break e;
              }
              var $ = S.sibling;
              if ($ !== null) {
                $.return = S.return, se = $;
                break e;
              }
              se = S.return;
            }
          }
          if (ct = c, Qa(), Da && typeof Da.onPostCommitFiberRoot == "function") try {
            Da.onPostCommitFiberRoot(so, n);
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
  function qv(n, r, l) {
    r = Il(l, r), r = Nv(n, r, 1), n = el(n, r, 1), r = bn(), n !== null && (Tl(n, 1, r), Br(n, r));
  }
  function Xt(n, r, l) {
    if (n.tag === 3) qv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        qv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (il === null || !il.has(o))) {
          n = Il(l, n), n = Ed(r, n, 1), r = el(r, n, 1), n = bn(), r !== null && (Tl(r, 1, n), Br(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function my(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = bn(), n.pingedLanes |= n.suspendedLanes & l, Nn === n && (Kn & l) === l && (vn === 4 || vn === 3 && (Kn & 130023424) === Kn && 500 > Ze() - Od ? wi(n, 0) : Uc |= l), Br(n, r);
  }
  function Zv(n, r) {
    r === 0 && (n.mode & 1 ? (r = _a, _a <<= 1, !(_a & 130023424) && (_a = 4194304)) : r = 1);
    var l = bn();
    n = Xr(n, r), n !== null && (Tl(n, r, l), Br(n, l));
  }
  function yy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Zv(n, l);
  }
  function Jv(n, r) {
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
        throw Error(w(314));
    }
    o !== null && o.delete(r), Zv(n, l);
  }
  var eh;
  eh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || On.current) Tn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Tn = !1, Wo(n, r, l);
      Tn = !!(n.flags & 131072);
    }
    else Tn = !1, Gt && r.flags & 1048576 && Tv(r, Si, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        pa(n, r), n = r.pendingProps;
        var c = Lr(r, on.current);
        tn(r, l), c = tl(null, r, o, n, c, l);
        var d = Na();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, En(o) ? (d = !0, Hn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, dd(r), c.updater = kc, r.stateNode = c, c._reactInternals = r, $o(r, o, n, l), r = Qo(null, r, o, !0, d, l)) : (r.tag = 0, Gt && d && rc(r), Gn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (pa(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Sy(o), n = La(o, n), c) {
            case 0:
              r = zv(null, r, o, n, l);
              break e;
            case 1:
              r = Uv(null, r, o, n, l);
              break e;
            case 11:
              r = Hr(null, r, o, n, l);
              break e;
            case 14:
              r = Wl(null, r, o, La(o.type, n), l);
              break e;
          }
          throw Error(w(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : La(o, c), zv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : La(o, c), Uv(n, r, o, c, l);
      case 3:
        e: {
          if (Lu(r), n === null) throw Error(w(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, bv(n, r), Oo(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Il(Error(w(423)), r), r = Av(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Il(Error(w(424)), r), r = Av(n, r, o, l, c);
            break e;
          } else for (Ur = $a(r.stateNode.containerInfo.firstChild), zr = r, Gt = !0, fa = null, l = te(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ji(), o === c) {
              r = va(n, r, l);
              break e;
            }
            Gn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Dv(r), n === null && id(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Zs(o, c) ? h = null : d !== null && Zs(o, d) && (r.flags |= 32), xd(n, r), Gn(n, r, h, l), r.child;
      case 6:
        return n === null && id(r), null;
      case 13:
        return Mc(n, r, l);
      case 4:
        return vd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = fn(r, null, o, l) : Gn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : La(o, c), Hr(n, r, o, c, l);
      case 7:
        return Gn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Gn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Gn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, Se(Gr, o._currentValue), o._currentValue = h, d !== null) if (Oa(d.value, h)) {
            if (d.children === c.children && !On.current) {
              r = va(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var S = d.dependencies;
            if (S !== null) {
              h = d.child;
              for (var C = S.firstContext; C !== null; ) {
                if (C.context === o) {
                  if (d.tag === 1) {
                    C = Ci(-1, l & -l), C.tag = 2;
                    var M = d.updateQueue;
                    if (M !== null) {
                      M = M.shared;
                      var B = M.pending;
                      B === null ? C.next = C : (C.next = B.next, B.next = C), M.pending = C;
                    }
                  }
                  d.lanes |= l, C = d.alternate, C !== null && (C.lanes |= l), sd(
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
              if (h = d.return, h === null) throw Error(w(341));
              h.lanes |= l, S = h.alternate, S !== null && (S.lanes |= l), sd(h, l, r), h = d.sibling;
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
        return c = r.type, o = r.pendingProps.children, tn(r, l), c = da(c), o = o(c), r.flags |= 1, Gn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = La(o, r.pendingProps), c = La(o.type, c), Wl(n, r, o, c, l);
      case 15:
        return Xe(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : La(o, c), pa(n, r), r.tag = 1, En(o) ? (n = !0, Hn(r)) : n = !1, tn(r, l), Dc(r, o, c), $o(r, o, c, l), Qo(null, r, o, !0, n, l);
      case 19:
        return Xa(n, r, l);
      case 22:
        return Yo(n, r, l);
    }
    throw Error(w(156, r.tag));
  };
  function th(n, r) {
    return Jt(n, r);
  }
  function gy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ma(n, r, l, o) {
    return new gy(n, r, l, o);
  }
  function Ud(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Sy(n) {
    if (typeof n == "function") return Ud(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === gt) return 11;
      if (n === Kt) return 14;
    }
    return 2;
  }
  function ul(n, r) {
    var l = n.alternate;
    return l === null ? (l = ma(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function is(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function") Ud(n) && (h = 1);
    else if (typeof n == "string") h = 5;
    else e: switch (n) {
      case Ce:
        return bi(l.children, c, d, r);
      case Pt:
        h = 8, c |= 8;
        break;
      case mt:
        return n = ma(12, l, r, c | 2), n.elementType = mt, n.lanes = d, n;
      case _e:
        return n = ma(13, l, r, c), n.elementType = _e, n.lanes = d, n;
      case At:
        return n = ma(19, l, r, c), n.elementType = At, n.lanes = d, n;
      case K:
        return ol(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case yt:
            h = 10;
            break e;
          case Ut:
            h = 9;
            break e;
          case gt:
            h = 11;
            break e;
          case Kt:
            h = 14;
            break e;
          case Vt:
            h = 16, o = null;
            break e;
        }
        throw Error(w(130, n == null ? n : typeof n, ""));
    }
    return r = ma(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function bi(n, r, l, o) {
    return n = ma(7, n, o, r), n.lanes = l, n;
  }
  function ol(n, r, l, o) {
    return n = ma(22, n, o, r), n.elementType = K, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ad(n, r, l) {
    return n = ma(6, n, null, r), n.lanes = l, n;
  }
  function Fc(n, r, l) {
    return r = ma(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function nh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Df(0), this.expirationTimes = Df(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Df(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Vc(n, r, l, o, c, d, h, S, C) {
    return n = new nh(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ma(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, dd(d), n;
  }
  function Ey(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: nt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function jd(n) {
    if (!n) return ur;
    n = n._reactInternals;
    e: {
      if (qe(n) !== n || n.tag !== 1) throw Error(w(170));
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
      throw Error(w(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (En(l)) return Do(n, l, r);
    }
    return r;
  }
  function rh(n, r, l, o, c, d, h, S, C) {
    return n = Vc(l, o, !0, n, c, d, h, S, C), n.context = jd(null), l = n.current, o = bn(), c = Ja(l), d = Ci(o, c), d.callback = r ?? null, el(l, d, c), n.current.lanes = c, Tl(n, c, o), Br(n, o), n;
  }
  function Bc(n, r, l, o) {
    var c = r.current, d = bn(), h = Ja(c);
    return l = jd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ci(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = el(c, r, h), n !== null && (Sr(n, c, h, d), uc(n, c, h)), h;
  }
  function $c(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Hd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Pc(n, r) {
    Hd(n, r), (n = n.alternate) && Hd(n, r);
  }
  function ah() {
    return null;
  }
  var Jl = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Fd(n) {
    this._internalRoot = n;
  }
  Yc.prototype.render = Fd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(w(409));
    Bc(n, r, null, null);
  }, Yc.prototype.unmount = Fd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      ql(function() {
        Bc(null, n, null, null);
      }), r[yi] = null;
    }
  };
  function Yc(n) {
    this._internalRoot = n;
  }
  Yc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Ge();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Qn.length && r !== 0 && r < Qn[l].priority; l++) ;
      Qn.splice(l, 0, n), l === 0 && zf(n);
    }
  };
  function Vd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Qc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ih() {
  }
  function Cy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var M = $c(h);
          d.call(M);
        };
      }
      var h = rh(r, o, n, 0, null, !1, !1, "", ih);
      return n._reactRootContainer = h, n[yi] = h.current, Tu(n.nodeType === 8 ? n.parentNode : n), ql(), h;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var M = $c(C);
        S.call(M);
      };
    }
    var C = Vc(n, 0, !1, null, null, !1, !1, "", ih);
    return n._reactRootContainer = C, n[yi] = C.current, Tu(n.nodeType === 8 ? n.parentNode : n), ql(function() {
      Bc(r, C, l, o);
    }), C;
  }
  function ls(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var h = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var C = $c(h);
          S.call(C);
        };
      }
      Bc(r, h, n, c);
    } else h = Cy(l, r, n, c, o);
    return $c(h);
  }
  _t = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Cl(r.pendingLanes);
          l !== 0 && (Os(r, l | 1), Br(r, Ze()), !(ct & 6) && (ju = Ze() + 500, Qa()));
        }
        break;
      case 13:
        ql(function() {
          var o = Xr(n, 1);
          if (o !== null) {
            var c = bn();
            Sr(o, n, 1, c);
          }
        }), Pc(n, 1);
    }
  }, Of = function(n) {
    if (n.tag === 13) {
      var r = Xr(n, 134217728);
      if (r !== null) {
        var l = bn();
        Sr(r, n, 134217728, l);
      }
      Pc(n, 134217728);
    }
  }, Mf = function(n) {
    if (n.tag === 13) {
      var r = Ja(n), l = Xr(n, r);
      if (l !== null) {
        var o = bn();
        Sr(l, n, r, o);
      }
      Pc(n, r);
    }
  }, Ge = function() {
    return Dt;
  }, Nf = function(n, r) {
    var l = Dt;
    try {
      return Dt = n, r();
    } finally {
      Dt = l;
    }
  }, rt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ra(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = en(o);
              if (!c) throw Error(w(90));
              fr(o), Ra(o, c);
            }
          }
        }
        break;
      case "textarea":
        Fa(n, l);
        break;
      case "select":
        r = l.value, r != null && Dn(n, !!l.multiple, r, !1);
    }
  }, io = Nd, pu = ql;
  var xy = { usingClientEntryPoint: !1, Events: [xe, Ma, en, ba, lr, Nd] }, us = { findFiberByHostInstance: Ll, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, lh = { bundleType: us.bundleType, version: us.version, rendererPackageName: us.rendererPackageName, rendererConfig: us.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: tt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = _n(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: us.findFiberByHostInstance || ah, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sl.isDisabled && sl.supportsFiber) try {
      so = sl.inject(lh), Da = sl;
    } catch {
    }
  }
  return xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xy, xa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vd(r)) throw Error(w(200));
    return Ey(n, r, null, l);
  }, xa.createRoot = function(n, r) {
    if (!Vd(n)) throw Error(w(299));
    var l = !1, o = "", c = Jl;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Vc(n, 1, !1, null, null, l, !1, o, c), n[yi] = r.current, Tu(n.nodeType === 8 ? n.parentNode : n), new Fd(r);
  }, xa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(w(188)) : (n = Object.keys(n).join(","), Error(w(268, n)));
    return n = _n(r), n = n === null ? null : n.stateNode, n;
  }, xa.flushSync = function(n) {
    return ql(n);
  }, xa.hydrate = function(n, r, l) {
    if (!Qc(r)) throw Error(w(200));
    return ls(null, n, r, !0, l);
  }, xa.hydrateRoot = function(n, r, l) {
    if (!Vd(n)) throw Error(w(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = Jl;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = rh(r, null, n, 1, l ?? null, c, !1, d, h), n[yi] = r.current, Tu(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Yc(r);
  }, xa.render = function(n, r, l) {
    if (!Qc(r)) throw Error(w(200));
    return ls(null, n, r, !1, l);
  }, xa.unmountComponentAtNode = function(n) {
    if (!Qc(n)) throw Error(w(40));
    return n._reactRootContainer ? (ql(function() {
      ls(null, null, n, !1, function() {
        n._reactRootContainer = null, n[yi] = null;
      });
    }), !0) : !1;
  }, xa.unstable_batchedUpdates = Nd, xa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Qc(l)) throw Error(w(200));
    if (n == null || n._reactInternals === void 0) throw Error(w(38));
    return ls(n, r, l, !1, o);
  }, xa.version = "18.3.1-next-f1338f8080-20240426", xa;
}
var Ta = {};
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
function tD() {
  return aT || (aT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var j = Tf, Q = lT(), w = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ve = !1;
    function Ue(e) {
      Ve = e;
    }
    function Ie(e) {
      if (!Ve) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Fe("warn", e, a);
      }
    }
    function g(e) {
      if (!Ve) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Fe("error", e, a);
      }
    }
    function Fe(e, t, a) {
      {
        var i = w.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var q = 0, Z = 1, be = 2, I = 3, oe = 4, ee = 5, he = 6, ke = 7, me = 8, We = 9, Re = 10, De = 11, tt = 12, Ee = 13, nt = 14, Ce = 15, Pt = 16, mt = 17, yt = 18, Ut = 19, gt = 21, _e = 22, At = 23, Kt = 24, Vt = 25, K = !0, L = !1, G = !1, W = !1, $e = !1, Pe = !0, Yt = !0, an = !0, sn = !0, Qt = /* @__PURE__ */ new Set(), It = {}, yn = {};
    function zn(e, t) {
      ir(e, t), ir(e + "Capture", t);
    }
    function ir(e, t) {
      It[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), It[e] = t;
      {
        var a = e.toLowerCase();
        yn[a] = e, e === "onDoubleClick" && (yn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Qt.add(t[i]);
    }
    var gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", fr = Object.prototype.hasOwnProperty;
    function Un(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Pn(e) {
      try {
        return ln(e), !1;
      } catch {
        return !0;
      }
    }
    function ln(e) {
      return "" + e;
    }
    function An(e, t) {
      if (Pn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Un(e)), ln(e);
    }
    function Ra(e) {
      if (Pn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Un(e)), ln(e);
    }
    function wa(e, t) {
      if (Pn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Un(e)), ln(e);
    }
    function Yn(e, t) {
      if (Pn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Un(e)), ln(e);
    }
    function qt(e) {
      if (Pn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Un(e)), ln(e);
    }
    function Dn(e) {
      if (Pn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Un(e)), ln(e);
    }
    var jn = 0, dr = 1, Fa = 2, Oe = 3, Rt = 4, jt = 5, cn = 6, Zt = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", X = Zt + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ce = new RegExp("^[" + Zt + "][" + X + "]*$"), Ae = {}, Ke = {};
    function pt(e) {
      return fr.call(Ke, e) ? !0 : fr.call(Ae, e) ? !1 : ce.test(e) ? (Ke[e] = !0, !0) : (Ae[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Ot(e, t, a) {
      return t !== null ? t.type === jn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ot(e, t, a, i) {
      if (a !== null && a.type === jn)
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
    function vt(e, t, a, i) {
      if (t === null || typeof t > "u" || ot(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Oe:
            return !t;
          case Rt:
            return t === !1;
          case jt:
            return isNaN(t);
          case cn:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function kt(e) {
      return rt.hasOwnProperty(e) ? rt[e] : null;
    }
    function it(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Fa || t === Oe || t === Rt, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var rt = {}, Ht = [
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
    Ht.forEach(function(e) {
      rt[e] = new it(
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      rt[t] = new it(
        t,
        dr,
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
      rt[e] = new it(
        e,
        Fa,
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
      rt[e] = new it(
        e,
        Fa,
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
      rt[e] = new it(
        e,
        Oe,
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
      rt[e] = new it(
        e,
        Oe,
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
      rt[e] = new it(
        e,
        Rt,
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
      rt[e] = new it(
        e,
        cn,
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
      rt[e] = new it(
        e,
        jt,
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
    var pr = /[\-\:]([a-z])/g, Va = function(e) {
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
      var t = e.replace(pr, Va);
      rt[t] = new it(
        t,
        dr,
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
      var t = e.replace(pr, Va);
      rt[t] = new it(
        t,
        dr,
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
      var t = e.replace(pr, Va);
      rt[t] = new it(
        t,
        dr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      rt[e] = new it(
        e,
        dr,
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
    var ba = "xlinkHref";
    rt[ba] = new it(
      "xlinkHref",
      dr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      rt[e] = new it(
        e,
        dr,
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
    var lr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, io = !1;
    function pu(e) {
      !io && lr.test(e) && (io = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vu(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        An(a, t), i.sanitizeURL && pu("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Rt) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : vt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (vt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Oe)
            return a;
          f = e.getAttribute(s);
        }
        return vt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function lo(e, t, a, i) {
      {
        if (!pt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return An(a, t), u === "" + a ? a : u;
      }
    }
    function ui(e, t, a, i) {
      var u = kt(t);
      if (!Ot(t, u, i)) {
        if (vt(t, a, u, i) && (a = null), i || u === null) {
          if (pt(t)) {
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
            e[p] = v === Oe ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var R = u.type, x;
          R === Oe || R === Rt && a === !0 ? x = "" : (An(a, m), x = "" + a, u.sanitizeURL && pu(x.toString())), y ? e.setAttributeNS(y, m, x) : e.setAttribute(m, x);
        }
      }
    }
    var ka = Symbol.for("react.element"), _r = Symbol.for("react.portal"), Fi = Symbol.for("react.fragment"), oi = Symbol.for("react.strict_mode"), Vi = Symbol.for("react.profiler"), Bi = Symbol.for("react.provider"), E = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), Le = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), Qe = Symbol.for("react.lazy"), lt = Symbol.for("react.scope"), at = Symbol.for("react.debug_trace_mode"), _n = Symbol.for("react.offscreen"), Wt = Symbol.for("react.legacy_hidden"), Jt = Symbol.for("react.cache"), vr = Symbol.for("react.tracing_marker"), si = Symbol.iterator, ci = "@@iterator";
    function Ze(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = si && e[si] || e[ci];
      return typeof t == "function" ? t : null;
    }
    var Je = Object.assign, fi = 0, uo, oo, $p, Rf, so, Da, Pp;
    function aa() {
    }
    aa.__reactDisabledLog = !0;
    function Bm() {
      {
        if (fi === 0) {
          uo = console.log, oo = console.info, $p = console.warn, Rf = console.error, so = console.group, Da = console.groupCollapsed, Pp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: aa,
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
        fi++;
      }
    }
    function $m() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Je({}, e, {
              value: uo
            }),
            info: Je({}, e, {
              value: oo
            }),
            warn: Je({}, e, {
              value: $p
            }),
            error: Je({}, e, {
              value: Rf
            }),
            group: Je({}, e, {
              value: so
            }),
            groupCollapsed: Je({}, e, {
              value: Da
            }),
            groupEnd: Je({}, e, {
              value: Pp
            })
          });
        }
        fi < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wf = w.ReactCurrentDispatcher, hu;
    function _a(e, t, a) {
      {
        if (hu === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            hu = i && i[1] || "";
          }
        return `
` + hu + e;
      }
    }
    var Cl = !1, xl;
    {
      var Pm = typeof WeakMap == "function" ? WeakMap : Map;
      xl = new Pm();
    }
    function bf(e, t) {
      if (!e || Cl)
        return "";
      {
        var a = xl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Cl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = wf.current, wf.current = null, Bm();
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
            } catch (N) {
              i = N;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (N) {
              i = N;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            i = N;
          }
          e();
        }
      } catch (N) {
        if (N && i && typeof N.stack == "string") {
          for (var p = N.stack.split(`
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
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && xl.set(e, R), R;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        Cl = !1, wf.current = s, $m(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", O = x ? _a(x) : "";
      return typeof e == "function" && xl.set(e, O), O;
    }
    function kf(e, t, a) {
      return bf(e, !0);
    }
    function _s(e, t, a) {
      return bf(e, !1);
    }
    function Df(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Tl(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return bf(e, Df(e));
      if (typeof e == "string")
        return _a(e);
      switch (e) {
        case re:
          return _a("Suspense");
        case Le:
          return _a("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case V:
            return _s(e.render);
          case qe:
            return Tl(e.type, t, a);
          case Qe: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Tl(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ym(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ee:
          return _a(e.type);
        case Pt:
          return _a("Lazy");
        case Ee:
          return _a("Suspense");
        case Ut:
          return _a("SuspenseList");
        case q:
        case be:
        case Ce:
          return _s(e.type);
        case De:
          return _s(e.type.render);
        case Z:
          return kf(e.type);
        default:
          return "";
      }
    }
    function Os(e) {
      try {
        var t = "", a = e;
        do
          t += Ym(a), a = a.return;
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
    function _f(e) {
      return e.displayName || "Context";
    }
    function _t(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Fi:
          return "Fragment";
        case _r:
          return "Portal";
        case Vi:
          return "Profiler";
        case oi:
          return "StrictMode";
        case re:
          return "Suspense";
        case Le:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var t = e;
            return _f(t) + ".Consumer";
          case Bi:
            var a = e;
            return _f(a._context) + ".Provider";
          case V:
            return Dt(e, e.render, "ForwardRef");
          case qe:
            var i = e.displayName || null;
            return i !== null ? i : _t(e.type) || "Memo";
          case Qe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return _t(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Of(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Mf(e) {
      return e.displayName || "Context";
    }
    function Ge(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Kt:
          return "Cache";
        case We:
          var i = a;
          return Mf(i) + ".Consumer";
        case Re:
          var u = a;
          return Mf(u._context) + ".Provider";
        case yt:
          return "DehydratedFragment";
        case De:
          return Of(a, a.render, "ForwardRef");
        case ke:
          return "Fragment";
        case ee:
          return a;
        case oe:
          return "Portal";
        case I:
          return "Root";
        case he:
          return "Text";
        case Pt:
          return _t(a);
        case me:
          return a === oi ? "StrictMode" : "Mode";
        case _e:
          return "Offscreen";
        case tt:
          return "Profiler";
        case gt:
          return "Scope";
        case Ee:
          return "Suspense";
        case Ut:
          return "SuspenseList";
        case Vt:
          return "TracingMarker";
        case Z:
        case q:
        case mt:
        case be:
        case nt:
        case Ce:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Nf = w.ReactDebugCurrentFrame, hr = null, $i = !1;
    function ia() {
      {
        if (hr === null)
          return null;
        var e = hr._debugOwner;
        if (e !== null && typeof e < "u")
          return Ge(e);
      }
      return null;
    }
    function Pi() {
      return hr === null ? "" : Os(hr);
    }
    function un() {
      Nf.getCurrentStack = null, hr = null, $i = !1;
    }
    function Bt(e) {
      Nf.getCurrentStack = e === null ? null : Pi, hr = e, $i = !1;
    }
    function co() {
      return hr;
    }
    function Qn(e) {
      $i = e;
    }
    function la(e) {
      return "" + e;
    }
    function di(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Dn(e), e;
        default:
          return "";
      }
    }
    var fo = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Lf(e, t) {
      fo[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function zf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function po(e) {
      return e._valueTracker;
    }
    function Yp(e) {
      e._valueTracker = null;
    }
    function Qm(e) {
      var t = "";
      return e && (zf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function vo(e) {
      var t = zf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Dn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Dn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Dn(p), i = "" + p;
          },
          stopTracking: function() {
            Yp(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Yi(e) {
      po(e) || (e._valueTracker = vo(e));
    }
    function Rl(e) {
      if (!e)
        return !1;
      var t = po(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Qm(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function wl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Qp = !1, Ip = !1, Ms = !1, ho = !1;
    function Ns(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ls(e, t) {
      var a = e, i = t.checked, u = Je({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function pi(e, t) {
      Lf("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Ip && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ia() || "A component", t.type), Ip = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Qp && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ia() || "A component", t.type), Qp = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: di(t.value != null ? t.value : i),
        controlled: Ns(t)
      };
    }
    function zs(e, t) {
      var a = e, i = t.checked;
      i != null && ui(a, "checked", i, !1);
    }
    function mu(e, t) {
      var a = e;
      {
        var i = Ns(t);
        !a._wrapperState.controlled && i && !ho && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ho = !0), a._wrapperState.controlled && !i && !Ms && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ms = !0);
      }
      zs(e, t);
      var u = di(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = la(u)) : a.value !== la(u) && (a.value = la(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? js(a, t.type, u) : t.hasOwnProperty("defaultValue") && js(a, t.type, di(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Uf(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = la(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Us(e, t) {
      var a = e;
      mu(a, t), As(a, t);
    }
    function As(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        An(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Rh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Rl(f), mu(f, p);
          }
        }
      }
    }
    function js(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || wl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = la(e._wrapperState.initialValue) : e.defaultValue !== la(a) && (e.defaultValue = la(a)));
    }
    var Or = !1, bl = !1, Hs = !1;
    function yu(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? j.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || bl || (bl = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Hs || (Hs = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Or && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Or = !0);
    }
    function Im(e, t) {
      t.value != null && e.setAttribute("value", la(di(t.value)));
    }
    var Af = Array.isArray;
    function In(e) {
      return Af(e);
    }
    var kl;
    kl = !1;
    function mo() {
      var e = ia();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var jf = ["value", "defaultValue"];
    function Wm(e) {
      {
        Lf("select", e);
        for (var t = 0; t < jf.length; t++) {
          var a = jf[t];
          if (e[a] != null) {
            var i = In(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, mo()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, mo());
          }
        }
      }
    }
    function gu(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = la(di(a)), R = null, x = 0; x < u.length; x++) {
          if (u[x].value === y) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          R === null && !u[x].disabled && (R = u[x]);
        }
        R !== null && (R.selected = !0);
      }
    }
    function Hf(e, t) {
      return Je({}, t, {
        value: void 0
      });
    }
    function Fs(e, t) {
      var a = e;
      Wm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !kl && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), kl = !0);
    }
    function Gm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? gu(a, !!t.multiple, i, !1) : t.defaultValue != null && gu(a, !!t.multiple, t.defaultValue, !0);
    }
    function Xm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? gu(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? gu(a, !!t.multiple, t.defaultValue, !0) : gu(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Km(e, t) {
      var a = e, i = t.value;
      i != null && gu(a, !!t.multiple, i, !1);
    }
    var Wp = !1;
    function Ff(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Je({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: la(a._wrapperState.initialValue)
      });
      return i;
    }
    function Vf(e, t) {
      var a = e;
      Lf("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Wp && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ia() || "A component"), Wp = !0);
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
        initialValue: di(i)
      };
    }
    function Gp(e, t) {
      var a = e, i = di(t.value), u = di(t.defaultValue);
      if (i != null) {
        var s = la(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = la(u));
    }
    function Xp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function qm(e, t) {
      Gp(e, t);
    }
    var vi = "http://www.w3.org/1999/xhtml", Bf = "http://www.w3.org/1998/Math/MathML", $f = "http://www.w3.org/2000/svg";
    function Pf(e) {
      switch (e) {
        case "svg":
          return $f;
        case "math":
          return Bf;
        default:
          return vi;
      }
    }
    function Yf(e, t) {
      return e == null || e === vi ? Pf(t) : e === $f && t === "foreignObject" ? vi : e;
    }
    var Kp = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, Vs, qp = Kp(function(e, t) {
      if (e.namespaceURI === $f && !("innerHTML" in e)) {
        Vs = Vs || document.createElement("div"), Vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Vs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Mr = 1, hi = 3, Sn = 8, mi = 9, Qf = 11, Su = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === hi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, yo = {
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
    }, go = {
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
    function Zp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Jp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(go).forEach(function(e) {
      Jp.forEach(function(t) {
        go[Zp(t, e)] = go[e];
      });
    });
    function Bs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(go.hasOwnProperty(e) && go[e]) ? t + "px" : (Yn(t, e), ("" + t).trim());
    }
    var ev = /([A-Z])/g, tv = /^ms-/;
    function Eu(e) {
      return e.replace(ev, "-$1").toLowerCase().replace(tv, "-ms-");
    }
    var nv = function() {
    };
    {
      var Zm = /^(?:webkit|moz|o)[A-Z]/, Jm = /^-ms-/, rv = /-(.)/g, If = /;\s*$/, Ba = {}, Dl = {}, av = !1, So = !1, ey = function(e) {
        return e.replace(rv, function(t, a) {
          return a.toUpperCase();
        });
      }, iv = function(e) {
        Ba.hasOwnProperty(e) && Ba[e] || (Ba[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ey(e.replace(Jm, "ms-"))
        ));
      }, Wf = function(e) {
        Ba.hasOwnProperty(e) && Ba[e] || (Ba[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Gf = function(e, t) {
        Dl.hasOwnProperty(t) && Dl[t] || (Dl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(If, "")));
      }, lv = function(e, t) {
        av || (av = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, uv = function(e, t) {
        So || (So = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      nv = function(e, t) {
        e.indexOf("-") > -1 ? iv(e) : Zm.test(e) ? Wf(e) : If.test(t) && Gf(e, t), typeof t == "number" && (isNaN(t) ? lv(e, t) : isFinite(t) || uv(e, t));
      };
    }
    var ov = nv;
    function ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Eu(i)) + ":", t += Bs(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function sv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ov(i, t[i]);
          var s = Bs(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function cv(e) {
      var t = {};
      for (var a in e)
        for (var i = yo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ry(e, t) {
      {
        if (!t)
          return;
        var a = cv(e), i = cv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ny(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Oa = {
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
    }, Eo = Je({
      menuitem: !0
    }, Oa), fv = "__html";
    function $s(e, t) {
      if (t) {
        if (Eo[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Qi(e, t) {
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
    var Co = {
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
    }, Ps = {
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
    }, Cu = {}, ay = new RegExp("^(aria)-[" + X + "]*$"), xu = new RegExp("^(aria)[A-Z][" + X + "]*$");
    function Xf(e, t) {
      {
        if (fr.call(Cu, t) && Cu[t])
          return !0;
        if (xu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Ps.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Cu[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Cu[t] = !0, !0;
        }
        if (ay.test(t)) {
          var u = t.toLowerCase(), s = Ps.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Cu[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Cu[t] = !0, !0;
        }
      }
      return !0;
    }
    function xo(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Xf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Kf(e, t) {
      Qi(e, t) || xo(e, t);
    }
    var qf = !1;
    function Ys(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !qf && (qf = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var _l = function() {
    };
    {
      var Wn = {}, Zf = /^on./, Qs = /^on[^A-Z]/, dv = new RegExp("^(aria)-[" + X + "]*$"), pv = new RegExp("^(aria)[A-Z][" + X + "]*$");
      _l = function(e, t, a, i) {
        if (fr.call(Wn, t) && Wn[t])
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
          if (Zf.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), Wn[t] = !0, !0;
        } else if (Zf.test(t))
          return Qs.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Wn[t] = !0, !0;
        if (dv.test(t) || pv.test(t))
          return !0;
        if (u === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Wn[t] = !0, !0;
        if (u === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Wn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Wn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Wn[t] = !0, !0;
        var v = kt(t), m = v !== null && v.type === jn;
        if (Co.hasOwnProperty(u)) {
          var y = Co[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), Wn[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wn[t] = !0, !0;
        return typeof a == "boolean" && ot(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : m ? !0 : ot(t, a, v, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Oe && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var vv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = _l(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function hv(e, t, a) {
      Qi(e, t) || vv(e, t, a);
    }
    var Jf = 1, Is = 2, ua = 4, ed = Jf | Is | ua, Ol = null;
    function iy(e) {
      Ol !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Ol = e;
    }
    function ly() {
      Ol === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Ol = null;
    }
    function To(e) {
      return e === Ol;
    }
    function td(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === hi ? t.parentNode : t;
    }
    var Ws = null, Ml = null, wt = null;
    function Gs(e) {
      var t = Pu(e);
      if (t) {
        if (typeof Ws != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Rh(a);
          Ws(t.stateNode, t.type, i);
        }
      }
    }
    function Xs(e) {
      Ws = e;
    }
    function Tu(e) {
      Ml ? wt ? wt.push(e) : wt = [e] : Ml = e;
    }
    function mv() {
      return Ml !== null || wt !== null;
    }
    function Ks() {
      if (Ml) {
        var e = Ml, t = wt;
        if (Ml = null, wt = null, Gs(e), t)
          for (var a = 0; a < t.length; a++)
            Gs(t[a]);
      }
    }
    var Ru = function(e, t) {
      return e(t);
    }, Ro = function() {
    }, Ii = !1;
    function yv() {
      var e = mv();
      e && (Ro(), Ks());
    }
    function gv(e, t, a) {
      if (Ii)
        return e(t, a);
      Ii = !0;
      try {
        return Ru(e, t, a);
      } finally {
        Ii = !1, yv();
      }
    }
    function uy(e, t, a) {
      Ru = e, Ro = a;
    }
    function Sv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function qs(e, t, a) {
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
          return !!(a.disabled && Sv(t));
        default:
          return !1;
      }
    }
    function Wi(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Rh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (qs(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var wo = !1;
    if (gn)
      try {
        var Nl = {};
        Object.defineProperty(Nl, "passive", {
          get: function() {
            wo = !0;
          }
        }), window.addEventListener("test", Nl, Nl), window.removeEventListener("test", Nl, Nl);
      } catch {
        wo = !1;
      }
    function Zs(e, t, a, i, u, s, f, p, v) {
      var m = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, m);
      } catch (y) {
        this.onError(y);
      }
    }
    var Js = Zs;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var nd = document.createElement("react");
      Js = function(t, a, i, u, s, f, p, v, m) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var y = document.createEvent("Event"), R = !1, x = !0, O = window.event, N = Object.getOwnPropertyDescriptor(window, "event");
        function z() {
          nd.removeEventListener(U, we, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = O);
        }
        var ne = Array.prototype.slice.call(arguments, 3);
        function we() {
          R = !0, z(), a.apply(i, ne), x = !1;
        }
        var ge, dt = !1, ut = !1;
        function k(D) {
          if (ge = D.error, dt = !0, ge === null && D.colno === 0 && D.lineno === 0 && (ut = !0), D.defaultPrevented && ge != null && typeof ge == "object")
            try {
              ge._suppressLogging = !0;
            } catch {
            }
        }
        var U = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), nd.addEventListener(U, we, !1), y.initEvent(U, !1, !1), nd.dispatchEvent(y), N && Object.defineProperty(window, "event", N), R && x && (dt ? ut && (ge = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ge = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ge)), window.removeEventListener("error", k), !R)
          return z(), Zs.apply(this, arguments);
      };
    }
    var Ev = Js, wu = !1, ec = null, bu = !1, $a = null, Cv = {
      onError: function(e) {
        wu = !0, ec = e;
      }
    };
    function Gi(e, t, a, i, u, s, f, p, v) {
      wu = !1, ec = null, Ev.apply(Cv, arguments);
    }
    function Pa(e, t, a, i, u, s, f, p, v) {
      if (Gi.apply(this, arguments), wu) {
        var m = ko();
        bu || (bu = !0, $a = m);
      }
    }
    function bo() {
      if (bu) {
        var e = $a;
        throw bu = !1, $a = null, e;
      }
    }
    function yi() {
      return wu;
    }
    function ko() {
      if (wu) {
        var e = ec;
        return wu = !1, ec = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ku(e) {
      return e._reactInternals;
    }
    function oy(e) {
      return e._reactInternals !== void 0;
    }
    function Ll(e, t) {
      e._reactInternals = t;
    }
    var xe = (
      /*                      */
      0
    ), Ma = (
      /*                */
      1
    ), en = (
      /*                    */
      2
    ), st = (
      /*                       */
      4
    ), oa = (
      /*                */
      16
    ), sa = (
      /*                 */
      32
    ), Ft = (
      /*                     */
      64
    ), Se = (
      /*                   */
      128
    ), ur = (
      /*            */
      256
    ), on = (
      /*                          */
      512
    ), On = (
      /*                     */
      1024
    ), Nr = (
      /*                      */
      2048
    ), Lr = (
      /*                    */
      4096
    ), En = (
      /*                   */
      8192
    ), Du = (
      /*             */
      16384
    ), xv = (
      /*               */
      32767
    ), Do = (
      /*                   */
      32768
    ), Hn = (
      /*                */
      65536
    ), tc = (
      /* */
      131072
    ), Ya = (
      /*                       */
      1048576
    ), _u = (
      /*                    */
      2097152
    ), gi = (
      /*                 */
      4194304
    ), nc = (
      /*                */
      8388608
    ), Xi = (
      /*               */
      16777216
    ), Qa = (
      /*              */
      33554432
    ), Ki = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      st | On | 0
    ), qi = en | st | oa | sa | on | Lr | En, Zi = st | Ft | on | En, Si = Nr | oa, Cn = gi | nc | _u, ca = w.ReactCurrentOwner;
    function Wr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (en | Lr)) !== xe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === I ? a : null;
    }
    function Ia(e) {
      if (e.tag === Ee) {
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
    function Wa(e) {
      return e.tag === I ? e.stateNode.containerInfo : null;
    }
    function zl(e) {
      return Wr(e) === e;
    }
    function Tv(e) {
      {
        var t = ca.current;
        if (t !== null && t.tag === Z) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ge(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ku(e);
      return u ? Wr(u) === u : !1;
    }
    function rc(e) {
      if (Wr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ac(e) {
      var t = e.alternate;
      if (!t) {
        var a = Wr(e);
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
              return rc(s), e;
            if (v === u)
              return rc(s), t;
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
      if (i.tag !== I)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function zr(e) {
      var t = ac(e);
      return t !== null ? Ur(t) : null;
    }
    function Ur(e) {
      if (e.tag === ee || e.tag === he)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Ur(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Gt(e) {
      var t = ac(e);
      return t !== null ? fa(t) : null;
    }
    function fa(e) {
      if (e.tag === ee || e.tag === he)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== oe) {
          var a = fa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var rd = Q.unstable_scheduleCallback, Rv = Q.unstable_cancelCallback, ad = Q.unstable_shouldYield, id = Q.unstable_requestPaint, Mn = Q.unstable_now, ic = Q.unstable_getCurrentPriorityLevel, _o = Q.unstable_ImmediatePriority, Ji = Q.unstable_UserBlockingPriority, Ei = Q.unstable_NormalPriority, sy = Q.unstable_LowPriority, Ul = Q.unstable_IdlePriority, lc = Q.unstable_yieldValue, wv = Q.unstable_setDisableYieldValue, Al = null, fn = null, te = null, Gr = !1, Ar = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ou(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Yt && (e = Je({}, e, {
          getLaneLabelMap: jl,
          injectProfilingHooks: da
        })), Al = t.inject(e), fn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ld(e, t) {
      if (fn && typeof fn.onScheduleFiberRoot == "function")
        try {
          fn.onScheduleFiberRoot(Al, e, t);
        } catch (a) {
          Gr || (Gr = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function ud(e, t) {
      if (fn && typeof fn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Se) === Se;
          if (an) {
            var i;
            switch (t) {
              case mr:
                i = _o;
                break;
              case Xa:
                i = Ji;
                break;
              case pa:
                i = Ei;
                break;
              case va:
                i = Ul;
                break;
              default:
                i = Ei;
                break;
            }
            fn.onCommitFiberRoot(Al, e, i, a);
          }
        } catch (u) {
          Gr || (Gr = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function od(e) {
      if (fn && typeof fn.onPostCommitFiberRoot == "function")
        try {
          fn.onPostCommitFiberRoot(Al, e);
        } catch (t) {
          Gr || (Gr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function sd(e) {
      if (fn && typeof fn.onCommitFiberUnmount == "function")
        try {
          fn.onCommitFiberUnmount(Al, e);
        } catch (t) {
          Gr || (Gr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function tn(e) {
      if (typeof lc == "function" && (wv(e), Ue(e)), fn && typeof fn.setStrictMode == "function")
        try {
          fn.setStrictMode(Al, e);
        } catch (t) {
          Gr || (Gr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function da(e) {
      te = e;
    }
    function jl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Vl; a++) {
          var i = _v(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function cd(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function fd() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function Xr(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function Kr() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function dd(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function bv() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function Ci(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function el() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function uc(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function kv() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function Oo(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function pd() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function Mo(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function Ga(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function No(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function Lo() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function Hl(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function vd() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function Fl(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function Dv() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function oc() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function nn(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function sc(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function zo(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var Te = (
      /*                         */
      0
    ), et = (
      /*                 */
      1
    ), St = (
      /*                    */
      2
    ), Mt = (
      /*               */
      8
    ), Et = (
      /*              */
      16
    ), xn = Math.clz32 ? Math.clz32 : Uo, Fn = Math.log, cc = Math.LN2;
    function Uo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Fn(t) / cc | 0) | 0;
    }
    var Vl = 31, H = (
      /*                        */
      0
    ), ht = (
      /*                          */
      0
    ), ze = (
      /*                        */
      1
    ), tl = (
      /*    */
      2
    ), Na = (
      /*             */
      4
    ), or = (
      /*            */
      8
    ), dn = (
      /*                     */
      16
    ), xi = (
      /*                */
      32
    ), nl = (
      /*                       */
      4194240
    ), Bl = (
      /*                        */
      64
    ), fc = (
      /*                        */
      128
    ), dc = (
      /*                        */
      256
    ), pc = (
      /*                        */
      512
    ), vc = (
      /*                        */
      1024
    ), hc = (
      /*                        */
      2048
    ), mc = (
      /*                        */
      4096
    ), yc = (
      /*                        */
      8192
    ), gc = (
      /*                        */
      16384
    ), $l = (
      /*                       */
      32768
    ), Sc = (
      /*                       */
      65536
    ), Mu = (
      /*                       */
      131072
    ), Nu = (
      /*                       */
      262144
    ), Ec = (
      /*                       */
      524288
    ), Ao = (
      /*                       */
      1048576
    ), Cc = (
      /*                       */
      2097152
    ), jo = (
      /*                            */
      130023424
    ), Pl = (
      /*                             */
      4194304
    ), xc = (
      /*                             */
      8388608
    ), Ho = (
      /*                             */
      16777216
    ), Tc = (
      /*                             */
      33554432
    ), Rc = (
      /*                             */
      67108864
    ), hd = Pl, Fo = (
      /*          */
      134217728
    ), md = (
      /*                          */
      268435455
    ), Vo = (
      /*               */
      268435456
    ), Yl = (
      /*                        */
      536870912
    ), jr = (
      /*                   */
      1073741824
    );
    function _v(e) {
      {
        if (e & ze)
          return "Sync";
        if (e & tl)
          return "InputContinuousHydration";
        if (e & Na)
          return "InputContinuous";
        if (e & or)
          return "DefaultHydration";
        if (e & dn)
          return "Default";
        if (e & xi)
          return "TransitionHydration";
        if (e & nl)
          return "Transition";
        if (e & jo)
          return "Retry";
        if (e & Fo)
          return "SelectiveHydration";
        if (e & Vo)
          return "IdleHydration";
        if (e & Yl)
          return "Idle";
        if (e & jr)
          return "Offscreen";
      }
    }
    var zt = -1, Ql = Bl, wc = Pl;
    function Bo(e) {
      switch (rl(e)) {
        case ze:
          return ze;
        case tl:
          return tl;
        case Na:
          return Na;
        case or:
          return or;
        case dn:
          return dn;
        case xi:
          return xi;
        case Bl:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case mc:
        case yc:
        case gc:
        case $l:
        case Sc:
        case Mu:
        case Nu:
        case Ec:
        case Ao:
        case Cc:
          return e & nl;
        case Pl:
        case xc:
        case Ho:
        case Tc:
        case Rc:
          return e & jo;
        case Fo:
          return Fo;
        case Vo:
          return Vo;
        case Yl:
          return Yl;
        case jr:
          return jr;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function bc(e, t) {
      var a = e.pendingLanes;
      if (a === H)
        return H;
      var i = H, u = e.suspendedLanes, s = e.pingedLanes, f = a & md;
      if (f !== H) {
        var p = f & ~u;
        if (p !== H)
          i = Bo(p);
        else {
          var v = f & s;
          v !== H && (i = Bo(v));
        }
      } else {
        var m = a & ~u;
        m !== H ? i = Bo(m) : s !== H && (i = Bo(s));
      }
      if (i === H)
        return H;
      if (t !== H && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === H) {
        var y = rl(i), R = rl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === dn && (R & nl) !== H
        )
          return t;
      }
      (i & Na) !== H && (i |= a & dn);
      var x = e.entangledLanes;
      if (x !== H)
        for (var O = e.entanglements, N = i & x; N > 0; ) {
          var z = Tn(N), ne = 1 << z;
          i |= O[z], N &= ~ne;
        }
      return i;
    }
    function La(e, t) {
      for (var a = e.eventTimes, i = zt; t > 0; ) {
        var u = Tn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function yd(e, t) {
      switch (e) {
        case ze:
        case tl:
        case Na:
          return t + 250;
        case or:
        case dn:
        case xi:
        case Bl:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case mc:
        case yc:
        case gc:
        case $l:
        case Sc:
        case Mu:
        case Nu:
        case Ec:
        case Ao:
        case Cc:
          return t + 5e3;
        case Pl:
        case xc:
        case Ho:
        case Tc:
        case Rc:
          return zt;
        case Fo:
        case Vo:
        case Yl:
        case jr:
          return zt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), zt;
      }
    }
    function kc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p, m = s[p];
        m === zt ? ((v & i) === H || (v & u) !== H) && (s[p] = yd(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Ov(e) {
      return Bo(e.pendingLanes);
    }
    function Dc(e) {
      var t = e.pendingLanes & ~jr;
      return t !== H ? t : t & jr ? jr : H;
    }
    function Mv(e) {
      return (e & ze) !== H;
    }
    function $o(e) {
      return (e & md) !== H;
    }
    function Il(e) {
      return (e & jo) === e;
    }
    function gd(e) {
      var t = ze | Na | dn;
      return (e & t) === H;
    }
    function Sd(e) {
      return (e & nl) === e;
    }
    function _c(e, t) {
      var a = tl | Na | or | dn;
      return (t & a) !== H;
    }
    function Nv(e, t) {
      return (t & e.expiredLanes) !== H;
    }
    function Ed(e) {
      return (e & nl) !== H;
    }
    function Cd() {
      var e = Ql;
      return Ql <<= 1, (Ql & nl) === H && (Ql = Bl), e;
    }
    function Lv() {
      var e = wc;
      return wc <<= 1, (wc & jo) === H && (wc = Pl), e;
    }
    function rl(e) {
      return e & -e;
    }
    function Po(e) {
      return rl(e);
    }
    function Tn(e) {
      return 31 - xn(e);
    }
    function Gn(e) {
      return Tn(e);
    }
    function Hr(e, t) {
      return (e & t) !== H;
    }
    function Wl(e, t) {
      return (e & t) === t;
    }
    function Xe(e, t) {
      return e | t;
    }
    function Yo(e, t) {
      return e & ~t;
    }
    function xd(e, t) {
      return e & t;
    }
    function zv(e) {
      return e;
    }
    function Uv(e, t) {
      return e !== ht && e < t ? e : t;
    }
    function Qo(e) {
      for (var t = [], a = 0; a < Vl; a++)
        t.push(e);
      return t;
    }
    function Lu(e, t, a) {
      e.pendingLanes |= t, t !== Yl && (e.suspendedLanes = H, e.pingedLanes = H);
      var i = e.eventTimes, u = Gn(t);
      i[u] = a;
    }
    function Av(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Tn(i), s = 1 << u;
        a[u] = zt, i &= ~s;
      }
    }
    function Oc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Td(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = H, e.pingedLanes = H, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p;
        i[p] = H, u[p] = zt, s[p] = zt, f &= ~v;
      }
    }
    function Mc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Tn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Rd(e, t) {
      var a = rl(t), i;
      switch (a) {
        case Na:
          i = tl;
          break;
        case dn:
          i = or;
          break;
        case Bl:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case mc:
        case yc:
        case gc:
        case $l:
        case Sc:
        case Mu:
        case Nu:
        case Ec:
        case Ao:
        case Cc:
        case Pl:
        case xc:
        case Ho:
        case Tc:
        case Rc:
          i = xi;
          break;
        case Yl:
          i = Vo;
          break;
        default:
          i = ht;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== ht ? ht : i;
    }
    function Io(e, t, a) {
      if (Ar)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Gn(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function jv(e, t) {
      if (Ar)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Gn(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function wd(e, t) {
      return null;
    }
    var mr = ze, Xa = Na, pa = dn, va = Yl, Wo = ht;
    function ha() {
      return Wo;
    }
    function Rn(e) {
      Wo = e;
    }
    function Hv(e, t) {
      var a = Wo;
      try {
        return Wo = e, t();
      } finally {
        Wo = a;
      }
    }
    function Fv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Go(e, t) {
      return e > t ? e : t;
    }
    function Vn(e, t) {
      return e !== 0 && e < t;
    }
    function Vv(e) {
      var t = rl(e);
      return Vn(mr, t) ? Vn(Xa, t) ? $o(t) ? pa : va : Xa : mr;
    }
    function Nc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Xo;
    function sr(e) {
      Xo = e;
    }
    function cy(e) {
      Xo(e);
    }
    var se;
    function zu(e) {
      se = e;
    }
    var Lc;
    function Bv(e) {
      Lc = e;
    }
    var $v;
    function Ko(e) {
      $v = e;
    }
    var qo;
    function bd(e) {
      qo = e;
    }
    var zc = !1, Zo = [], Ti = null, Ka = null, qa = null, pn = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), gr = [], Pv = [
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
    function Yv(e) {
      return Pv.indexOf(e) > -1;
    }
    function za(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function kd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ti = null;
          break;
        case "dragenter":
        case "dragleave":
          Ka = null;
          break;
        case "mouseover":
        case "mouseout":
          qa = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          pn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          yr.delete(i);
          break;
        }
      }
    }
    function Fr(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = za(t, a, i, u, s);
        if (t !== null) {
          var p = Pu(t);
          p !== null && se(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function fy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ti = Fr(Ti, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ka = Fr(Ka, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return qa = Fr(qa, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return pn.set(m, Fr(pn.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, R = y.pointerId;
          return yr.set(R, Fr(yr.get(R) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function Dd(e) {
      var t = cs(e.target);
      if (t !== null) {
        var a = Wr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ee) {
            var u = Ia(a);
            if (u !== null) {
              e.blockedOn = u, qo(e.priority, function() {
                Lc(a);
              });
              return;
            }
          } else if (i === I) {
            var s = a.stateNode;
            if (Nc(s)) {
              e.blockedOn = Wa(a);
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
      }, i = 0; i < gr.length && Vn(t, gr[i].priority); i++)
        ;
      gr.splice(i, 0, a), i === 0 && Dd(a);
    }
    function Jo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Au(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          iy(s), u.target.dispatchEvent(s), ly();
        } else {
          var f = Pu(i);
          return f !== null && se(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function _d(e, t, a) {
      Jo(e) && a.delete(t);
    }
    function dy() {
      zc = !1, Ti !== null && Jo(Ti) && (Ti = null), Ka !== null && Jo(Ka) && (Ka = null), qa !== null && Jo(qa) && (qa = null), pn.forEach(_d), yr.forEach(_d);
    }
    function al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, zc || (zc = !0, Q.unstable_scheduleCallback(Q.unstable_NormalPriority, dy)));
    }
    function Gl(e) {
      if (Zo.length > 0) {
        al(Zo[0], e);
        for (var t = 1; t < Zo.length; t++) {
          var a = Zo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ti !== null && al(Ti, e), Ka !== null && al(Ka, e), qa !== null && al(qa, e);
      var i = function(p) {
        return al(p, e);
      };
      pn.forEach(i), yr.forEach(i);
      for (var u = 0; u < gr.length; u++) {
        var s = gr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; gr.length > 0; ) {
        var f = gr[0];
        if (f.blockedOn !== null)
          break;
        Dd(f), f.blockedOn === null && gr.shift();
      }
    }
    var Xn = w.ReactCurrentBatchConfig, ct = !0;
    function Nn(e) {
      ct = !!e;
    }
    function wn() {
      return ct;
    }
    function Kn(e, t, a) {
      var i = Uc(t), u;
      switch (i) {
        case mr:
          u = qr;
          break;
        case Xa:
          u = Uu;
          break;
        case pa:
        default:
          u = vn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function qr(e, t, a, i) {
      var u = ha(), s = Xn.transition;
      Xn.transition = null;
      try {
        Rn(mr), vn(e, t, a, i);
      } finally {
        Rn(u), Xn.transition = s;
      }
    }
    function Uu(e, t, a, i) {
      var u = ha(), s = Xn.transition;
      Xn.transition = null;
      try {
        Rn(Xa), vn(e, t, a, i);
      } finally {
        Rn(u), Xn.transition = s;
      }
    }
    function vn(e, t, a, i) {
      ct && es(e, t, a, i);
    }
    function es(e, t, a, i) {
      var u = Au(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Za, a), kd(e, i);
        return;
      }
      if (fy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (kd(e, i), t & ua && Yv(e)) {
        for (; u !== null; ) {
          var s = Pu(u);
          s !== null && cy(s);
          var f = Au(e, t, a, i);
          if (f === null && _y(e, t, i, Za, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Za = null;
    function Au(e, t, a, i) {
      Za = null;
      var u = td(i), s = cs(u);
      if (s !== null) {
        var f = Wr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ee) {
            var v = Ia(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === I) {
            var m = f.stateNode;
            if (Nc(m))
              return Wa(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Za = s, null;
    }
    function Uc(e) {
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
          return mr;
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
          return Xa;
        case "message": {
          var t = ic();
          switch (t) {
            case _o:
              return mr;
            case Ji:
              return Xa;
            case Ei:
            case sy:
              return pa;
            case Ul:
              return va;
            default:
              return pa;
          }
        }
        default:
          return pa;
      }
    }
    function ts(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Vr(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Od(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function ju(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Zr = null, Hu = null, Xl = null;
    function il(e) {
      return Zr = e, Hu = ns(), !0;
    }
    function Ac() {
      Zr = null, Hu = null, Xl = null;
    }
    function Ri() {
      if (Xl)
        return Xl;
      var e, t = Hu, a = t.length, i, u = ns(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Xl = u.slice(e, p), Xl;
    }
    function ns() {
      return "value" in Zr ? Zr.value : Zr.textContent;
    }
    function ll(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Fu() {
      return !0;
    }
    function rs() {
      return !1;
    }
    function cr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var m = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return m ? this.isDefaultPrevented = Fu : this.isDefaultPrevented = rs, this.isPropagationStopped = rs, this;
      }
      return Je(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Fu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Fu);
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
        isPersistent: Fu
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
    }, Ja = cr(bn), Sr = Je({}, bn, {
      view: 0,
      detail: 0
    }), Br = cr(Sr), jc, as, Kl;
    function py(e) {
      e !== Kl && (Kl && e.type === "mousemove" ? (jc = e.screenX - Kl.screenX, as = e.screenY - Kl.screenY) : (jc = 0, as = 0), Kl = e);
    }
    var Ua = Je({}, Sr, {
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
      getModifierState: Xt,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (py(e), jc);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : as;
      }
    }), Md = cr(Ua), Nd = Je({}, Ua, {
      dataTransfer: 0
    }), ql = cr(Nd), Ld = Je({}, Sr, {
      relatedTarget: 0
    }), wi = cr(Ld), Iv = Je({}, bn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wv = cr(Iv), zd = Je({}, bn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Hc = cr(zd), vy = Je({}, bn, {
      data: 0
    }), Gv = cr(vy), Xv = Gv, Kv = {
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
    }, Zl = {
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
    function hy(e) {
      if (e.key) {
        var t = Kv[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = ll(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Zl[e.keyCode] || "Unidentified" : "";
    }
    var Vu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function qv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Vu[e];
      return i ? !!a[i] : !1;
    }
    function Xt(e) {
      return qv;
    }
    var my = Je({}, Sr, {
      key: hy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Xt,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? ll(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Zv = cr(my), yy = Je({}, Ua, {
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
    }), Jv = cr(yy), eh = Je({}, Sr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xt
    }), th = cr(eh), gy = Je({}, bn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ma = cr(gy), Ud = Je({}, Ua, {
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
    }), Sy = cr(Ud), ul = [9, 13, 27, 32], is = 229, bi = gn && "CompositionEvent" in window, ol = null;
    gn && "documentMode" in document && (ol = document.documentMode);
    var Ad = gn && "TextEvent" in window && !ol, Fc = gn && (!bi || ol && ol > 8 && ol <= 11), nh = 32, Vc = String.fromCharCode(nh);
    function Ey() {
      zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), zn("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), zn("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), zn("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var jd = !1;
    function rh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Bc(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function $c(e, t) {
      return e === "keydown" && t.keyCode === is;
    }
    function Hd(e, t) {
      switch (e) {
        case "keyup":
          return ul.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== is;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Pc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ah(e) {
      return e.locale === "ko";
    }
    var Jl = !1;
    function Fd(e, t, a, i, u) {
      var s, f;
      if (bi ? s = Bc(t) : Jl ? Hd(t, i) && (s = "onCompositionEnd") : $c(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Fc && !ah(i) && (!Jl && s === "onCompositionStart" ? Jl = il(u) : s === "onCompositionEnd" && Jl && (f = Ri()));
      var p = fh(a, s);
      if (p.length > 0) {
        var v = new Gv(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var m = Pc(i);
          m !== null && (v.data = m);
        }
      }
    }
    function Yc(e, t) {
      switch (e) {
        case "compositionend":
          return Pc(t);
        case "keypress":
          var a = t.which;
          return a !== nh ? null : (jd = !0, Vc);
        case "textInput":
          var i = t.data;
          return i === Vc && jd ? null : i;
        default:
          return null;
      }
    }
    function Vd(e, t) {
      if (Jl) {
        if (e === "compositionend" || !bi && Hd(e, t)) {
          var a = Ri();
          return Ac(), Jl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!rh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Fc && !ah(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Qc(e, t, a, i, u) {
      var s;
      if (Ad ? s = Yc(t, i) : s = Vd(t, i), !s)
        return null;
      var f = fh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Xv("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function ih(e, t, a, i, u, s, f) {
      Fd(e, t, a, i, u), Qc(e, t, a, i, u);
    }
    var Cy = {
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
    function ls(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Cy[e.type] : t === "textarea";
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
    function xy(e) {
      if (!gn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function us() {
      zn("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function lh(e, t, a, i) {
      Tu(i);
      var u = fh(t, "onChange");
      if (u.length > 0) {
        var s = new Ja("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var sl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      lh(t, n, e, td(e)), gv(o, t);
    }
    function o(e) {
      _0(e, 0);
    }
    function c(e) {
      var t = qc(e);
      if (Rl(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var h = !1;
    gn && (h = xy("input") && (!document.documentMode || document.documentMode > 9));
    function S(e, t) {
      sl = e, n = t, sl.attachEvent("onpropertychange", M);
    }
    function C() {
      sl && (sl.detachEvent("onpropertychange", M), sl = null, n = null);
    }
    function M(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function B(e, t, a) {
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
    function ie(e, t) {
      if (e === "click")
        return c(t);
    }
    function fe(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function ve(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || js(e, "number", e.value);
    }
    function hn(e, t, a, i, u, s, f) {
      var p = a ? qc(a) : window, v, m;
      if (r(p) ? v = d : ls(p) ? h ? v = fe : (v = P, m = B) : F(p) && (v = ie), v) {
        var y = v(t, a);
        if (y) {
          lh(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && ve(p);
    }
    function b() {
      ir("onMouseEnter", ["mouseout", "mouseover"]), ir("onMouseLeave", ["mouseout", "mouseover"]), ir("onPointerEnter", ["pointerout", "pointerover"]), ir("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function T(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !To(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (cs(m) || ep(m)))
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
          var N = i.relatedTarget || i.toElement;
          if (x = a, O = N ? cs(N) : null, O !== null) {
            var z = Wr(O);
            (O !== z || O.tag !== ee && O.tag !== he) && (O = null);
          }
        } else
          x = null, O = a;
        if (x !== O) {
          var ne = Md, we = "onMouseLeave", ge = "onMouseEnter", dt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ne = Jv, we = "onPointerLeave", ge = "onPointerEnter", dt = "pointer");
          var ut = x == null ? y : qc(x), k = O == null ? y : qc(O), U = new ne(we, dt + "leave", x, i, u);
          U.target = ut, U.relatedTarget = k;
          var D = null, Y = cs(u);
          if (Y === a) {
            var ue = new ne(ge, dt + "enter", O, i, u);
            ue.target = k, ue.relatedTarget = ut, D = ue;
          }
          DT(e, U, D, x, O);
        }
      }
    }
    function _(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var $ = typeof Object.is == "function" ? Object.is : _;
    function de(e, t) {
      if ($(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!fr.call(t, s) || !$(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Me(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ne(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function He(e, t) {
      for (var a = Me(e), i = 0, u = 0; a; ) {
        if (a.nodeType === hi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Me(Ne(a));
      }
    }
    function Bn(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ct(e, u, s, f, p);
    }
    function Ct(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, m = 0, y = e, R = null;
      e: for (; ; ) {
        for (var x = null; y === t && (a === 0 || y.nodeType === hi) && (f = s + a), y === i && (u === 0 || y.nodeType === hi) && (p = s + u), y.nodeType === hi && (s += y.nodeValue.length), (x = y.firstChild) !== null; )
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
    function cl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var m = He(e, f), y = He(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function uh(e) {
      return e && e.nodeType === hi;
    }
    function g0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : uh(e) ? !1 : uh(t) ? g0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cT(e) {
      return e && e.ownerDocument && g0(e.ownerDocument.documentElement, e);
    }
    function fT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function S0() {
      for (var e = window, t = wl(); t instanceof e.HTMLIFrameElement; ) {
        if (fT(t))
          e = t.contentWindow;
        else
          return t;
        t = wl(e.document);
      }
      return t;
    }
    function Ty(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dT() {
      var e = S0();
      return {
        focusedElem: e,
        selectionRange: Ty(e) ? vT(e) : null
      };
    }
    function pT(e) {
      var t = S0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cT(a)) {
        i !== null && Ty(a) && hT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Mr && u.push({
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
    function vT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Bn(e), t || {
        start: 0,
        end: 0
      };
    }
    function hT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : cl(e, t);
    }
    var mT = gn && "documentMode" in document && document.documentMode <= 11;
    function yT() {
      zn("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ic = null, Ry = null, Bd = null, wy = !1;
    function gT(e) {
      if ("selectionStart" in e && Ty(e))
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
    function ST(e) {
      return e.window === e ? e.document : e.nodeType === mi ? e : e.ownerDocument;
    }
    function E0(e, t, a) {
      var i = ST(a);
      if (!(wy || Ic == null || Ic !== wl(i))) {
        var u = gT(Ic);
        if (!Bd || !de(Bd, u)) {
          Bd = u;
          var s = fh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Ja("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Ic;
          }
        }
      }
    }
    function ET(e, t, a, i, u, s, f) {
      var p = a ? qc(a) : window;
      switch (t) {
        case "focusin":
          (ls(p) || p.contentEditable === "true") && (Ic = p, Ry = a, Bd = null);
          break;
        case "focusout":
          Ic = null, Ry = null, Bd = null;
          break;
        case "mousedown":
          wy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wy = !1, E0(e, i, u);
          break;
        case "selectionchange":
          if (mT)
            break;
        case "keydown":
        case "keyup":
          E0(e, i, u);
      }
    }
    function oh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Wc = {
      animationend: oh("Animation", "AnimationEnd"),
      animationiteration: oh("Animation", "AnimationIteration"),
      animationstart: oh("Animation", "AnimationStart"),
      transitionend: oh("Transition", "TransitionEnd")
    }, by = {}, C0 = {};
    gn && (C0 = document.createElement("div").style, "AnimationEvent" in window || (delete Wc.animationend.animation, delete Wc.animationiteration.animation, delete Wc.animationstart.animation), "TransitionEvent" in window || delete Wc.transitionend.transition);
    function sh(e) {
      if (by[e])
        return by[e];
      if (!Wc[e])
        return e;
      var t = Wc[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in C0)
          return by[e] = t[a];
      return e;
    }
    var x0 = sh("animationend"), T0 = sh("animationiteration"), R0 = sh("animationstart"), w0 = sh("transitionend"), b0 = /* @__PURE__ */ new Map(), k0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Bu(e, t) {
      b0.set(e, t), zn(t, [e]);
    }
    function CT() {
      for (var e = 0; e < k0.length; e++) {
        var t = k0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Bu(a, "on" + i);
      }
      Bu(x0, "onAnimationEnd"), Bu(T0, "onAnimationIteration"), Bu(R0, "onAnimationStart"), Bu("dblclick", "onDoubleClick"), Bu("focusin", "onFocus"), Bu("focusout", "onBlur"), Bu(w0, "onTransitionEnd");
    }
    function xT(e, t, a, i, u, s, f) {
      var p = b0.get(t);
      if (p !== void 0) {
        var v = Ja, m = t;
        switch (t) {
          case "keypress":
            if (ll(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Zv;
            break;
          case "focusin":
            m = "focus", v = wi;
            break;
          case "focusout":
            m = "blur", v = wi;
            break;
          case "beforeblur":
          case "afterblur":
            v = wi;
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
            v = Md;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = ql;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = th;
            break;
          case x0:
          case T0:
          case R0:
            v = Wv;
            break;
          case w0:
            v = ma;
            break;
          case "scroll":
            v = Br;
            break;
          case "wheel":
            v = Sy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Hc;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Jv;
            break;
        }
        var y = (s & ua) !== 0;
        {
          var R = !y && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = bT(a, p, i.type, y, R);
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
    CT(), b(), us(), yT(), Ey();
    function TT(e, t, a, i, u, s, f) {
      xT(e, t, a, i, u, s);
      var p = (s & ed) === 0;
      p && (T(e, t, a, i, u), hn(e, t, a, i, u), ET(e, t, a, i, u), ih(e, t, a, i, u));
    }
    var $d = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], ky = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat($d));
    function D0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Pa(i, t, void 0, e), e.currentTarget = null;
    }
    function RT(e, t, a) {
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
    function _0(e, t) {
      for (var a = (t & ua) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        RT(s, f, a);
      }
      bo();
    }
    function wT(e, t, a, i, u) {
      var s = td(a), f = [];
      TT(f, e, i, a, s, t), _0(f, t);
    }
    function rn(e, t) {
      ky.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = t1(t), u = _T(e);
      i.has(u) || (O0(t, e, Is, a), i.add(u));
    }
    function Dy(e, t, a) {
      ky.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ua), O0(a, e, i, t);
    }
    var ch = "_reactListening" + Math.random().toString(36).slice(2);
    function Pd(e) {
      if (!e[ch]) {
        e[ch] = !0, Qt.forEach(function(a) {
          a !== "selectionchange" && (ky.has(a) || Dy(a, !1, e), Dy(a, !0, e));
        });
        var t = e.nodeType === mi ? e : e.ownerDocument;
        t !== null && (t[ch] || (t[ch] = !0, Dy("selectionchange", !1, t)));
      }
    }
    function O0(e, t, a, i, u) {
      var s = Kn(e, t, a), f = void 0;
      wo && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Od(e, t, s, f) : Vr(e, t, s) : f !== void 0 ? ju(e, t, s, f) : ts(e, t, s);
    }
    function M0(e, t) {
      return e === t || e.nodeType === Sn && e.parentNode === t;
    }
    function _y(e, t, a, i, u) {
      var s = i;
      if (!(t & Jf) && !(t & Is)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === I || v === oe) {
              var m = p.stateNode.containerInfo;
              if (M0(m, f))
                break;
              if (v === oe)
                for (var y = p.return; y !== null; ) {
                  var R = y.tag;
                  if (R === I || R === oe) {
                    var x = y.stateNode.containerInfo;
                    if (M0(x, f))
                      return;
                  }
                  y = y.return;
                }
              for (; m !== null; ) {
                var O = cs(m);
                if (O === null)
                  return;
                var N = O.tag;
                if (N === ee || N === he) {
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
      gv(function() {
        return wT(e, t, a, s);
      });
    }
    function Yd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function bT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], m = e, y = null; m !== null; ) {
        var R = m, x = R.stateNode, O = R.tag;
        if (O === ee && x !== null && (y = x, p !== null)) {
          var N = Wi(m, p);
          N != null && v.push(Yd(m, N, y));
        }
        if (u)
          break;
        m = m.return;
      }
      return v;
    }
    function fh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ee && f !== null) {
          var v = f, m = Wi(u, a);
          m != null && i.unshift(Yd(u, m, v));
          var y = Wi(u, t);
          y != null && i.push(Yd(u, y, v));
        }
        u = u.return;
      }
      return i;
    }
    function Gc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ee);
      return e || null;
    }
    function kT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Gc(s))
        u++;
      for (var f = 0, p = i; p; p = Gc(p))
        f++;
      for (; u - f > 0; )
        a = Gc(a), u--;
      for (; f - u > 0; )
        i = Gc(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Gc(a), i = Gc(i);
      }
      return null;
    }
    function N0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, m = v.alternate, y = v.stateNode, R = v.tag;
        if (m !== null && m === i)
          break;
        if (R === ee && y !== null) {
          var x = y;
          if (u) {
            var O = Wi(p, s);
            O != null && f.unshift(Yd(p, O, x));
          } else if (!u) {
            var N = Wi(p, s);
            N != null && f.push(Yd(p, N, x));
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
      var s = i && u ? kT(i, u) : null;
      i !== null && N0(e, t, i, s, !1), u !== null && a !== null && N0(e, a, u, s, !0);
    }
    function _T(e, t) {
      return e + "__bubble";
    }
    var ya = !1, Qd = "dangerouslySetInnerHTML", dh = "suppressContentEditableWarning", $u = "suppressHydrationWarning", L0 = "autoFocus", os = "children", ss = "style", ph = "__html", Oy, vh, Id, z0, hh, U0, A0;
    Oy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, vh = function(e, t) {
      Kf(e, t), Ys(e, t), hv(e, t, {
        registrationNameDependencies: It,
        possibleRegistrationNames: yn
      });
    }, U0 = gn && !document.documentMode, Id = function(e, t, a) {
      if (!ya) {
        var i = mh(a), u = mh(t);
        u !== i && (ya = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, z0 = function(e) {
      if (!ya) {
        ya = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, hh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, A0 = function(e, t) {
      var a = e.namespaceURI === vi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OT = /\r\n?/g, MT = /\u0000|\uFFFD/g;
    function mh(e) {
      qt(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OT, `
`).replace(MT, "");
    }
    function yh(e, t, a, i) {
      var u = mh(t), s = mh(e);
      if (s !== u && (i && (ya || (ya = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && K))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function j0(e) {
      return e.nodeType === mi ? e : e.ownerDocument;
    }
    function NT() {
    }
    function gh(e) {
      e.onclick = NT;
    }
    function LT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === ss)
            f && Object.freeze(f), sv(t, f);
          else if (s === Qd) {
            var p = f ? f[ph] : void 0;
            p != null && qp(t, p);
          } else if (s === os)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Su(t, f);
            } else typeof f == "number" && Su(t, "" + f);
          else s === dh || s === $u || s === L0 || (It.hasOwnProperty(s) ? f != null && (typeof f != "function" && hh(s, f), s === "onScroll" && rn("scroll", t)) : f != null && ui(t, s, f, u));
        }
    }
    function zT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === ss ? sv(e, f) : s === Qd ? qp(e, f) : s === os ? Su(e, f) : ui(e, s, f, i);
      }
    }
    function UT(e, t, a, i) {
      var u, s = j0(a), f, p = i;
      if (p === vi && (p = Pf(e)), p === vi) {
        if (u = Qi(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === vi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !fr.call(Oy, e) && (Oy[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function AT(e, t) {
      return j0(t).createTextNode(e);
    }
    function jT(e, t, a, i) {
      var u = Qi(t, a);
      vh(t, a);
      var s;
      switch (t) {
        case "dialog":
          rn("cancel", e), rn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < $d.length; f++)
            rn($d[f], e);
          s = a;
          break;
        case "source":
          rn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e), s = a;
          break;
        case "details":
          rn("toggle", e), s = a;
          break;
        case "input":
          pi(e, a), s = Ls(e, a), rn("invalid", e);
          break;
        case "option":
          yu(e, a), s = a;
          break;
        case "select":
          Fs(e, a), s = Hf(e, a), rn("invalid", e);
          break;
        case "textarea":
          Vf(e, a), s = Ff(e, a), rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch ($s(t, s), LT(t, e, i, s, u), t) {
        case "input":
          Yi(e), Uf(e, a, !1);
          break;
        case "textarea":
          Yi(e), Xp(e);
          break;
        case "option":
          Im(e, a);
          break;
        case "select":
          Gm(e, a);
          break;
        default:
          typeof s.onClick == "function" && gh(e);
          break;
      }
    }
    function HT(e, t, a, i, u) {
      vh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Ls(e, a), p = Ls(e, i), s = [];
          break;
        case "select":
          f = Hf(e, a), p = Hf(e, i), s = [];
          break;
        case "textarea":
          f = Ff(e, a), p = Ff(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && gh(e);
          break;
      }
      $s(t, p);
      var v, m, y = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === ss) {
            var R = f[v];
            for (m in R)
              R.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else v === Qd || v === os || v === dh || v === $u || v === L0 || (It.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], O = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === O || x == null && O == null))
          if (v === ss)
            if (x && Object.freeze(x), O) {
              for (m in O)
                O.hasOwnProperty(m) && (!x || !x.hasOwnProperty(m)) && (y || (y = {}), y[m] = "");
              for (m in x)
                x.hasOwnProperty(m) && O[m] !== x[m] && (y || (y = {}), y[m] = x[m]);
            } else
              y || (s || (s = []), s.push(v, y)), y = x;
          else if (v === Qd) {
            var N = x ? x[ph] : void 0, z = O ? O[ph] : void 0;
            N != null && z !== N && (s = s || []).push(v, N);
          } else v === os ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === dh || v === $u || (It.hasOwnProperty(v) ? (x != null && (typeof x != "function" && hh(v, x), v === "onScroll" && rn("scroll", e)), !s && O !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return y && (ry(y, p[ss]), (s = s || []).push(ss, y)), s;
    }
    function FT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && zs(e, u);
      var s = Qi(a, i), f = Qi(a, u);
      switch (zT(e, t, s, f), a) {
        case "input":
          mu(e, u);
          break;
        case "textarea":
          Gp(e, u);
          break;
        case "select":
          Xm(e, u);
          break;
      }
    }
    function VT(e) {
      {
        var t = e.toLowerCase();
        return Co.hasOwnProperty(t) && Co[t] || null;
      }
    }
    function BT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Qi(t, a), vh(t, a), t) {
        case "dialog":
          rn("cancel", e), rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < $d.length; m++)
            rn($d[m], e);
          break;
        case "source":
          rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e);
          break;
        case "details":
          rn("toggle", e);
          break;
        case "input":
          pi(e, a), rn("invalid", e);
          break;
        case "option":
          yu(e, a);
          break;
        case "select":
          Fs(e, a), rn("invalid", e);
          break;
        case "textarea":
          Vf(e, a), rn("invalid", e);
          break;
      }
      $s(t, a);
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
      for (var N in a)
        if (a.hasOwnProperty(N)) {
          var z = a[N];
          if (N === os)
            typeof z == "string" ? e.textContent !== z && (a[$u] !== !0 && yh(e.textContent, z, s, f), O = [os, z]) : typeof z == "number" && e.textContent !== "" + z && (a[$u] !== !0 && yh(e.textContent, z, s, f), O = [os, "" + z]);
          else if (It.hasOwnProperty(N))
            z != null && (typeof z != "function" && hh(N, z), N === "onScroll" && rn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ne = void 0, we = kt(N);
            if (a[$u] !== !0) {
              if (!(N === dh || N === $u || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              N === "value" || N === "checked" || N === "selected")) {
                if (N === Qd) {
                  var ge = e.innerHTML, dt = z ? z[ph] : void 0;
                  if (dt != null) {
                    var ut = A0(e, dt);
                    ut !== ge && Id(N, ge, ut);
                  }
                } else if (N === ss) {
                  if (v.delete(N), U0) {
                    var k = ty(z);
                    ne = e.getAttribute("style"), k !== ne && Id(N, ne, k);
                  }
                } else if (p && !$e)
                  v.delete(N.toLowerCase()), ne = lo(e, N, z), z !== ne && Id(N, ne, z);
                else if (!Ot(N, we, p) && !vt(N, z, we, p)) {
                  var U = !1;
                  if (we !== null)
                    v.delete(we.attributeName), ne = vu(e, N, z, we);
                  else {
                    var D = i;
                    if (D === vi && (D = Pf(t)), D === vi)
                      v.delete(N.toLowerCase());
                    else {
                      var Y = VT(N);
                      Y !== null && Y !== N && (U = !0, v.delete(Y)), v.delete(N);
                    }
                    ne = lo(e, N, z);
                  }
                  var ue = $e;
                  !ue && z !== ne && !U && Id(N, ne, z);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[$u] !== !0 && z0(v), t) {
        case "input":
          Yi(e), Uf(e, a, !0);
          break;
        case "textarea":
          Yi(e), Xp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && gh(e);
          break;
      }
      return O;
    }
    function $T(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function My(e, t) {
      {
        if (ya)
          return;
        ya = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (ya)
          return;
        ya = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (ya)
          return;
        ya = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t) {
      {
        if (t === "" || ya)
          return;
        ya = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function PT(e, t, a) {
      switch (t) {
        case "input":
          Us(e, a);
          return;
        case "textarea":
          qm(e, a);
          return;
        case "select":
          Km(e, a);
          return;
      }
    }
    var Wd = function() {
    }, Gd = function() {
    };
    {
      var YT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], H0 = [
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
      ], QT = H0.concat(["button"]), IT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], F0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Gd = function(e, t) {
        var a = Je({}, e || F0), i = {
          tag: t
        };
        return H0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), QT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), YT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var WT = function(e, t) {
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
            return IT.indexOf(t) === -1;
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
      }, GT = function(e, t) {
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
      Wd = function(e, t, a) {
        a = a || F0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = WT(e, u) ? null : i, f = s ? null : GT(e, a), p = s || f;
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
    var Sh = "suppressHydrationWarning", Eh = "$", Ch = "/$", Xd = "$?", Kd = "$!", XT = "style", Uy = null, Ay = null;
    function KT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case mi:
        case Qf: {
          t = i === mi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Yf(null, "");
          break;
        }
        default: {
          var s = i === Sn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Yf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Gd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function qT(e, t, a) {
      {
        var i = e, u = Yf(i.namespace, t), s = Gd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function SD(e) {
      return e;
    }
    function ZT(e) {
      Uy = wn(), Ay = dT();
      var t = null;
      return Nn(!1), t;
    }
    function JT(e) {
      pT(Ay), Nn(Uy), Uy = null, Ay = null;
    }
    function eR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Wd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Gd(f.ancestorInfo, e);
          Wd(null, p, v);
        }
        s = f.namespace;
      }
      var m = UT(e, t, a, s);
      return Jd(u, m), Yy(m, t), m;
    }
    function tR(e, t) {
      e.appendChild(t);
    }
    function nR(e, t, a, i, u) {
      switch (jT(e, t, a, i), t) {
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
    function rR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Gd(f.ancestorInfo, t);
          Wd(null, p, v);
        }
      }
      return HT(e, t, a, i);
    }
    function jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function aR(e, t, a, i) {
      {
        var u = a;
        Wd(null, e, u.ancestorInfo);
      }
      var s = AT(e, t);
      return Jd(i, s), s;
    }
    function iR() {
      var e = window.event;
      return e === void 0 ? pa : Uc(e.type);
    }
    var Hy = typeof setTimeout == "function" ? setTimeout : void 0, lR = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, B0 = typeof Promise == "function" ? Promise : void 0, uR = typeof queueMicrotask == "function" ? queueMicrotask : typeof B0 < "u" ? function(e) {
      return B0.resolve(null).then(e).catch(oR);
    } : Hy;
    function oR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function sR(e, t, a, i) {
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
    function cR(e, t, a, i, u, s) {
      FT(e, t, a, i, u), Yy(e, u);
    }
    function $0(e) {
      Su(e, "");
    }
    function fR(e, t, a) {
      e.nodeValue = a;
    }
    function dR(e, t) {
      e.appendChild(t);
    }
    function pR(e, t) {
      var a;
      e.nodeType === Sn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && gh(a);
    }
    function vR(e, t, a) {
      e.insertBefore(t, a);
    }
    function hR(e, t, a) {
      e.nodeType === Sn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function mR(e, t) {
      e.removeChild(t);
    }
    function yR(e, t) {
      e.nodeType === Sn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Vy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Sn) {
          var s = u.data;
          if (s === Ch)
            if (i === 0) {
              e.removeChild(u), Gl(t);
              return;
            } else
              i--;
          else (s === Eh || s === Xd || s === Kd) && i++;
        }
        a = u;
      } while (a);
      Gl(t);
    }
    function gR(e, t) {
      e.nodeType === Sn ? Vy(e.parentNode, t) : e.nodeType === Mr && Vy(e, t), Gl(e);
    }
    function SR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ER(e) {
      e.nodeValue = "";
    }
    function CR(e, t) {
      e = e;
      var a = t[XT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Bs("display", i);
    }
    function xR(e, t) {
      e.nodeValue = t;
    }
    function TR(e) {
      e.nodeType === Mr ? e.textContent = "" : e.nodeType === mi && e.documentElement && e.removeChild(e.documentElement);
    }
    function RR(e, t, a) {
      return e.nodeType !== Mr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function wR(e, t) {
      return t === "" || e.nodeType !== hi ? null : e;
    }
    function bR(e) {
      return e.nodeType !== Sn ? null : e;
    }
    function P0(e) {
      return e.data === Xd;
    }
    function By(e) {
      return e.data === Kd;
    }
    function kR(e) {
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
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Mr || t === hi)
          break;
        if (t === Sn) {
          var a = e.data;
          if (a === Eh || a === Kd || a === Xd)
            break;
          if (a === Ch)
            return null;
        }
      }
      return e;
    }
    function qd(e) {
      return xh(e.nextSibling);
    }
    function _R(e) {
      return xh(e.firstChild);
    }
    function OR(e) {
      return xh(e.firstChild);
    }
    function MR(e) {
      return xh(e.nextSibling);
    }
    function NR(e, t, a, i, u, s, f) {
      Jd(s, e), Yy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var m = (s.mode & et) !== Te;
      return BT(e, t, a, p, i, m, f);
    }
    function LR(e, t, a, i) {
      return Jd(a, e), a.mode & et, $T(e, t);
    }
    function zR(e, t) {
      Jd(t, e);
    }
    function UR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === Ch) {
            if (a === 0)
              return qd(t);
            a--;
          } else (i === Eh || i === Kd || i === Xd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Y0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === Eh || i === Kd || i === Xd) {
            if (a === 0)
              return t;
            a--;
          } else i === Ch && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function AR(e) {
      Gl(e);
    }
    function jR(e) {
      Gl(e);
    }
    function HR(e) {
      return e !== "head" && e !== "body";
    }
    function FR(e, t, a, i) {
      var u = !0;
      yh(t.nodeValue, a, i, u);
    }
    function VR(e, t, a, i, u, s) {
      if (t[Sh] !== !0) {
        var f = !0;
        yh(i.nodeValue, u, s, f);
      }
    }
    function BR(e, t) {
      t.nodeType === Mr ? My(e, t) : t.nodeType === Sn || Ny(e, t);
    }
    function $R(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Mr ? My(a, t) : t.nodeType === Sn || Ny(a, t));
      }
    }
    function PR(e, t, a, i, u) {
      (u || t[Sh] !== !0) && (i.nodeType === Mr ? My(a, i) : i.nodeType === Sn || Ny(a, i));
    }
    function YR(e, t, a) {
      Ly(e, t);
    }
    function QR(e, t) {
      zy(e, t);
    }
    function IR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function WR(e, t) {
      {
        var a = e.parentNode;
        a !== null && zy(a, t);
      }
    }
    function GR(e, t, a, i, u, s) {
      (s || t[Sh] !== !0) && Ly(a, i);
    }
    function XR(e, t, a, i, u) {
      (u || t[Sh] !== !0) && zy(a, i);
    }
    function KR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function qR(e) {
      Pd(e);
    }
    var Xc = Math.random().toString(36).slice(2), Kc = "__reactFiber$" + Xc, $y = "__reactProps$" + Xc, Zd = "__reactContainer$" + Xc, Py = "__reactEvents$" + Xc, ZR = "__reactListeners$" + Xc, JR = "__reactHandles$" + Xc;
    function e1(e) {
      delete e[Kc], delete e[$y], delete e[Py], delete e[ZR], delete e[JR];
    }
    function Jd(e, t) {
      t[Kc] = e;
    }
    function Th(e, t) {
      t[Zd] = e;
    }
    function Q0(e) {
      e[Zd] = null;
    }
    function ep(e) {
      return !!e[Zd];
    }
    function cs(e) {
      var t = e[Kc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Zd] || a[Kc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Y0(e); u !== null; ) {
              var s = u[Kc];
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
    function Pu(e) {
      var t = e[Kc] || e[Zd];
      return t && (t.tag === ee || t.tag === he || t.tag === Ee || t.tag === I) ? t : null;
    }
    function qc(e) {
      if (e.tag === ee || e.tag === he)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Rh(e) {
      return e[$y] || null;
    }
    function Yy(e, t) {
      e[$y] = t;
    }
    function t1(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var I0 = {}, W0 = w.ReactDebugCurrentFrame;
    function wh(e) {
      if (e) {
        var t = e._owner, a = Tl(e.type, e._source, t ? t.type : null);
        W0.setExtraStackFrame(a);
      } else
        W0.setExtraStackFrame(null);
    }
    function ki(e, t, a, i, u) {
      {
        var s = Function.call.bind(fr);
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
            p && !(p instanceof Error) && (wh(u), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), wh(null)), p instanceof Error && !(p.message in I0) && (I0[p.message] = !0, wh(u), g("Failed %s type: %s", a, p.message), wh(null));
          }
      }
    }
    var Qy = [], bh;
    bh = [];
    var eu = -1;
    function Yu(e) {
      return {
        current: e
      };
    }
    function $r(e, t) {
      if (eu < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== bh[eu] && g("Unexpected Fiber popped."), e.current = Qy[eu], Qy[eu] = null, bh[eu] = null, eu--;
    }
    function Pr(e, t, a) {
      eu++, Qy[eu] = e.current, bh[eu] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var Aa = {};
    Object.freeze(Aa);
    var tu = Yu(Aa), fl = Yu(!1), Wy = Aa;
    function Zc(e, t, a) {
      return a && dl(t) ? Wy : tu.current;
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Jc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Aa;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ge(e) || "Unknown";
          ki(i, s, "context", p);
        }
        return u && G0(e, t, s), s;
      }
    }
    function kh() {
      return fl.current;
    }
    function dl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Dh(e) {
      $r(fl, e), $r(tu, e);
    }
    function Gy(e) {
      $r(fl, e), $r(tu, e);
    }
    function X0(e, t, a) {
      {
        if (tu.current !== Aa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Pr(tu, t, e), Pr(fl, a, e);
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ge(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ge(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ge(e) || "Unknown";
          ki(u, f, "child context", v);
        }
        return Je({}, a, f);
      }
    }
    function _h(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Aa;
        return Wy = tu.current, Pr(tu, a, e), Pr(fl, fl.current, e), !0;
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = K0(e, t, Wy);
          i.__reactInternalMemoizedMergedChildContext = u, $r(fl, e), $r(tu, e), Pr(tu, u, e), Pr(fl, a, e);
        } else
          $r(fl, e), Pr(fl, a, e);
      }
    }
    function n1(e) {
      {
        if (!zl(e) || e.tag !== Z)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case I:
              return t.stateNode.context;
            case Z: {
              var a = t.type;
              if (dl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Qu = 0, Oh = 1, nu = null, Xy = !1, Ky = !1;
    function Z0(e) {
      nu === null ? nu = [e] : nu.push(e);
    }
    function r1(e) {
      Xy = !0, Z0(e);
    }
    function J0() {
      Xy && Iu();
    }
    function Iu() {
      if (!Ky && nu !== null) {
        Ky = !0;
        var e = 0, t = ha();
        try {
          var a = !0, i = nu;
          for (Rn(mr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          nu = null, Xy = !1;
        } catch (s) {
          throw nu !== null && (nu = nu.slice(e + 1)), rd(_o, Iu), s;
        } finally {
          Rn(t), Ky = !1;
        }
      }
      return null;
    }
    var ef = [], tf = 0, Mh = null, Nh = 0, ei = [], ti = 0, fs = null, ru = 1, au = "";
    function a1(e) {
      return ps(), (e.flags & Ya) !== xe;
    }
    function i1(e) {
      return ps(), Nh;
    }
    function l1() {
      var e = au, t = ru, a = t & ~u1(t);
      return a.toString(32) + e;
    }
    function ds(e, t) {
      ps(), ef[tf++] = Nh, ef[tf++] = Mh, Mh = e, Nh = t;
    }
    function eE(e, t, a) {
      ps(), ei[ti++] = ru, ei[ti++] = au, ei[ti++] = fs, fs = e;
      var i = ru, u = au, s = Lh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Lh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), x = f >> m, O = s - m, N = Lh(t) + O, z = p << O, ne = z | x, we = R + u;
        ru = 1 << N | ne, au = we;
      } else {
        var ge = p << s, dt = ge | f, ut = u;
        ru = 1 << v | dt, au = ut;
      }
    }
    function qy(e) {
      ps();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ds(e, a), eE(e, a, i);
      }
    }
    function Lh(e) {
      return 32 - xn(e);
    }
    function u1(e) {
      return 1 << Lh(e) - 1;
    }
    function Zy(e) {
      for (; e === Mh; )
        Mh = ef[--tf], ef[tf] = null, Nh = ef[--tf], ef[tf] = null;
      for (; e === fs; )
        fs = ei[--ti], ei[ti] = null, au = ei[--ti], ei[ti] = null, ru = ei[--ti], ei[ti] = null;
    }
    function o1() {
      return ps(), fs !== null ? {
        id: ru,
        overflow: au
      } : null;
    }
    function s1(e, t) {
      ps(), ei[ti++] = ru, ei[ti++] = au, ei[ti++] = fs, ru = t.id, au = t.overflow, fs = e;
    }
    function ps() {
      Cr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Er = null, ni = null, Di = !1, vs = !1, Wu = null;
    function c1() {
      Di && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function tE() {
      vs = !0;
    }
    function f1() {
      return vs;
    }
    function d1(e) {
      var t = e.stateNode.containerInfo;
      return ni = OR(t), Er = e, Di = !0, Wu = null, vs = !1, !0;
    }
    function p1(e, t, a) {
      return ni = MR(t), Er = e, Di = !0, Wu = null, vs = !1, a !== null && s1(e, a), !0;
    }
    function nE(e, t) {
      switch (e.tag) {
        case I: {
          BR(e.stateNode.containerInfo, t);
          break;
        }
        case ee: {
          var a = (e.mode & et) !== Te;
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
        case Ee: {
          var i = e.memoizedState;
          i.dehydrated !== null && $R(i.dehydrated, t);
          break;
        }
      }
    }
    function rE(e, t) {
      nE(e, t);
      var a = yk();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= oa) : i.push(a);
    }
    function Jy(e, t) {
      {
        if (vs)
          return;
        switch (e.tag) {
          case I: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ee:
                var i = t.type;
                t.pendingProps, YR(a, i);
                break;
              case he:
                var u = t.pendingProps;
                QR(a, u);
                break;
            }
            break;
          }
          case ee: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ee: {
                var v = t.type, m = t.pendingProps, y = (e.mode & et) !== Te;
                GR(
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
              case he: {
                var R = t.pendingProps, x = (e.mode & et) !== Te;
                XR(
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
          case Ee: {
            var O = e.memoizedState, N = O.dehydrated;
            if (N !== null) switch (t.tag) {
              case ee:
                var z = t.type;
                t.pendingProps, IR(N, z);
                break;
              case he:
                var ne = t.pendingProps;
                WR(N, ne);
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
      t.flags = t.flags & ~Lr | en, Jy(e, t);
    }
    function iE(e, t) {
      switch (e.tag) {
        case ee: {
          var a = e.type;
          e.pendingProps;
          var i = RR(t, a);
          return i !== null ? (e.stateNode = i, Er = e, ni = _R(i), !0) : !1;
        }
        case he: {
          var u = e.pendingProps, s = wR(t, u);
          return s !== null ? (e.stateNode = s, Er = e, ni = null, !0) : !1;
        }
        case Ee: {
          var f = bR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: o1(),
              retryLane: jr
            };
            e.memoizedState = p;
            var v = gk(f);
            return v.return = e, e.child = v, Er = e, ni = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function eg(e) {
      return (e.mode & et) !== Te && (e.flags & Se) === xe;
    }
    function tg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ng(e) {
      if (Di) {
        var t = ni;
        if (!t) {
          eg(e) && (Jy(Er, e), tg()), aE(Er, e), Di = !1, Er = e;
          return;
        }
        var a = t;
        if (!iE(e, t)) {
          eg(e) && (Jy(Er, e), tg()), t = qd(a);
          var i = Er;
          if (!t || !iE(e, t)) {
            aE(Er, e), Di = !1, Er = e;
            return;
          }
          rE(i, a);
        }
      }
    }
    function v1(e, t, a) {
      var i = e.stateNode, u = !vs, s = NR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function h1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = LR(t, a, e);
      if (i) {
        var u = Er;
        if (u !== null)
          switch (u.tag) {
            case I: {
              var s = u.stateNode.containerInfo, f = (u.mode & et) !== Te;
              FR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ee: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & et) !== Te;
              VR(
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
    function m1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      zR(a, e);
    }
    function y1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return UR(a);
    }
    function lE(e) {
      for (var t = e.return; t !== null && t.tag !== ee && t.tag !== I && t.tag !== Ee; )
        t = t.return;
      Er = t;
    }
    function zh(e) {
      if (e !== Er)
        return !1;
      if (!Di)
        return lE(e), Di = !0, !1;
      if (e.tag !== I && (e.tag !== ee || HR(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = ni;
        if (t)
          if (eg(e))
            uE(e), tg();
          else
            for (; t; )
              rE(e, t), t = qd(t);
      }
      return lE(e), e.tag === Ee ? ni = y1(e) : ni = Er ? qd(e.stateNode) : null, !0;
    }
    function g1() {
      return Di && ni !== null;
    }
    function uE(e) {
      for (var t = ni; t; )
        nE(e, t), t = qd(t);
    }
    function nf() {
      Er = null, ni = null, Di = !1, vs = !1;
    }
    function oE() {
      Wu !== null && (tx(Wu), Wu = null);
    }
    function Cr() {
      return Di;
    }
    function rg(e) {
      Wu === null ? Wu = [e] : Wu.push(e);
    }
    var S1 = w.ReactCurrentBatchConfig, E1 = null;
    function C1() {
      return S1.transition;
    }
    var _i = {
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
      var x1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Mt && (t = a), a = a.return;
        return t;
      }, hs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, tp = [], np = [], rp = [], ap = [], ip = [], lp = [], ms = /* @__PURE__ */ new Set();
      _i.recordUnsafeLifecycleWarnings = function(e, t) {
        ms.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && tp.push(e), e.mode & Mt && typeof t.UNSAFE_componentWillMount == "function" && np.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && rp.push(e), e.mode & Mt && typeof t.UNSAFE_componentWillReceiveProps == "function" && ap.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && ip.push(e), e.mode & Mt && typeof t.UNSAFE_componentWillUpdate == "function" && lp.push(e));
      }, _i.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        tp.length > 0 && (tp.forEach(function(x) {
          e.add(Ge(x) || "Component"), ms.add(x.type);
        }), tp = []);
        var t = /* @__PURE__ */ new Set();
        np.length > 0 && (np.forEach(function(x) {
          t.add(Ge(x) || "Component"), ms.add(x.type);
        }), np = []);
        var a = /* @__PURE__ */ new Set();
        rp.length > 0 && (rp.forEach(function(x) {
          a.add(Ge(x) || "Component"), ms.add(x.type);
        }), rp = []);
        var i = /* @__PURE__ */ new Set();
        ap.length > 0 && (ap.forEach(function(x) {
          i.add(Ge(x) || "Component"), ms.add(x.type);
        }), ap = []);
        var u = /* @__PURE__ */ new Set();
        ip.length > 0 && (ip.forEach(function(x) {
          u.add(Ge(x) || "Component"), ms.add(x.type);
        }), ip = []);
        var s = /* @__PURE__ */ new Set();
        if (lp.length > 0 && (lp.forEach(function(x) {
          s.add(Ge(x) || "Component"), ms.add(x.type);
        }), lp = []), t.size > 0) {
          var f = hs(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = hs(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = hs(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var m = hs(e);
          Ie(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = hs(a);
          Ie(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = hs(u);
          Ie(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var Uh = /* @__PURE__ */ new Map(), sE = /* @__PURE__ */ new Set();
      _i.recordLegacyContextWarning = function(e, t) {
        var a = x1(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!sE.has(e.type)) {
          var i = Uh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Uh.set(a, i)), i.push(e));
        }
      }, _i.flushLegacyContextWarning = function() {
        Uh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ge(s) || "Component"), sE.add(s.type);
            });
            var u = hs(i);
            try {
              Bt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              un();
            }
          }
        });
      }, _i.discardPendingWarnings = function() {
        tp = [], np = [], rp = [], ap = [], ip = [], lp = [], Uh = /* @__PURE__ */ new Map();
      };
    }
    var ag, ig, lg, ug, og, cE = function(e, t) {
    };
    ag = !1, ig = !1, lg = {}, ug = {}, og = {}, cE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ge(t) || "Component";
        ug[a] || (ug[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function T1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function up(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Mt || Pe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== Z) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !T1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ge(e) || "Component";
          lg[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), lg[u] = !0);
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
          wa(i, "ref");
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
    function Ah(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function jh(e) {
      {
        var t = Ge(e) || "Component";
        if (og[t])
          return;
        og[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function fE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function dE(e) {
      function t(k, U) {
        if (e) {
          var D = k.deletions;
          D === null ? (k.deletions = [U], k.flags |= oa) : D.push(U);
        }
      }
      function a(k, U) {
        if (!e)
          return null;
        for (var D = U; D !== null; )
          t(k, D), D = D.sibling;
        return null;
      }
      function i(k, U) {
        for (var D = /* @__PURE__ */ new Map(), Y = U; Y !== null; )
          Y.key !== null ? D.set(Y.key, Y) : D.set(Y.index, Y), Y = Y.sibling;
        return D;
      }
      function u(k, U) {
        var D = ws(k, U);
        return D.index = 0, D.sibling = null, D;
      }
      function s(k, U, D) {
        if (k.index = D, !e)
          return k.flags |= Ya, U;
        var Y = k.alternate;
        if (Y !== null) {
          var ue = Y.index;
          return ue < U ? (k.flags |= en, U) : ue;
        } else
          return k.flags |= en, U;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= en), k;
      }
      function p(k, U, D, Y) {
        if (U === null || U.tag !== he) {
          var ue = r0(D, k.mode, Y);
          return ue.return = k, ue;
        } else {
          var ae = u(U, D);
          return ae.return = k, ae;
        }
      }
      function v(k, U, D, Y) {
        var ue = D.type;
        if (ue === Fi)
          return y(k, U, D.props.children, Y, D.key);
        if (U !== null && (U.elementType === ue || // Keep this check inline so it only runs on the false path:
        yx(U, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ue == "object" && ue !== null && ue.$$typeof === Qe && fE(ue) === U.type)) {
          var ae = u(U, D.props);
          return ae.ref = up(k, U, D), ae.return = k, ae._debugSource = D._source, ae._debugOwner = D._owner, ae;
        }
        var je = n0(D, k.mode, Y);
        return je.ref = up(k, U, D), je.return = k, je;
      }
      function m(k, U, D, Y) {
        if (U === null || U.tag !== oe || U.stateNode.containerInfo !== D.containerInfo || U.stateNode.implementation !== D.implementation) {
          var ue = a0(D, k.mode, Y);
          return ue.return = k, ue;
        } else {
          var ae = u(U, D.children || []);
          return ae.return = k, ae;
        }
      }
      function y(k, U, D, Y, ue) {
        if (U === null || U.tag !== ke) {
          var ae = ao(D, k.mode, Y, ue);
          return ae.return = k, ae;
        } else {
          var je = u(U, D);
          return je.return = k, je;
        }
      }
      function R(k, U, D) {
        if (typeof U == "string" && U !== "" || typeof U == "number") {
          var Y = r0("" + U, k.mode, D);
          return Y.return = k, Y;
        }
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case ka: {
              var ue = n0(U, k.mode, D);
              return ue.ref = up(k, null, U), ue.return = k, ue;
            }
            case _r: {
              var ae = a0(U, k.mode, D);
              return ae.return = k, ae;
            }
            case Qe: {
              var je = U._payload, Ye = U._init;
              return R(k, Ye(je), D);
            }
          }
          if (In(U) || Ze(U)) {
            var Lt = ao(U, k.mode, D, null);
            return Lt.return = k, Lt;
          }
          Ah(k, U);
        }
        return typeof U == "function" && jh(k), null;
      }
      function x(k, U, D, Y) {
        var ue = U !== null ? U.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return ue !== null ? null : p(k, U, "" + D, Y);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case ka:
              return D.key === ue ? v(k, U, D, Y) : null;
            case _r:
              return D.key === ue ? m(k, U, D, Y) : null;
            case Qe: {
              var ae = D._payload, je = D._init;
              return x(k, U, je(ae), Y);
            }
          }
          if (In(D) || Ze(D))
            return ue !== null ? null : y(k, U, D, Y, null);
          Ah(k, D);
        }
        return typeof D == "function" && jh(k), null;
      }
      function O(k, U, D, Y, ue) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var ae = k.get(D) || null;
          return p(U, ae, "" + Y, ue);
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case ka: {
              var je = k.get(Y.key === null ? D : Y.key) || null;
              return v(U, je, Y, ue);
            }
            case _r: {
              var Ye = k.get(Y.key === null ? D : Y.key) || null;
              return m(U, Ye, Y, ue);
            }
            case Qe:
              var Lt = Y._payload, xt = Y._init;
              return O(k, U, D, xt(Lt), ue);
          }
          if (In(Y) || Ze(Y)) {
            var Ln = k.get(D) || null;
            return y(U, Ln, Y, ue, null);
          }
          Ah(U, Y);
        }
        return typeof Y == "function" && jh(U), null;
      }
      function N(k, U, D) {
        {
          if (typeof k != "object" || k === null)
            return U;
          switch (k.$$typeof) {
            case ka:
            case _r:
              cE(k, D);
              var Y = k.key;
              if (typeof Y != "string")
                break;
              if (U === null) {
                U = /* @__PURE__ */ new Set(), U.add(Y);
                break;
              }
              if (!U.has(Y)) {
                U.add(Y);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Y);
              break;
            case Qe:
              var ue = k._payload, ae = k._init;
              N(ae(ue), U, D);
              break;
          }
        }
        return U;
      }
      function z(k, U, D, Y) {
        for (var ue = null, ae = 0; ae < D.length; ae++) {
          var je = D[ae];
          ue = N(je, ue, k);
        }
        for (var Ye = null, Lt = null, xt = U, Ln = 0, Tt = 0, kn = null; xt !== null && Tt < D.length; Tt++) {
          xt.index > Tt ? (kn = xt, xt = null) : kn = xt.sibling;
          var Qr = x(k, xt, D[Tt], Y);
          if (Qr === null) {
            xt === null && (xt = kn);
            break;
          }
          e && xt && Qr.alternate === null && t(k, xt), Ln = s(Qr, Ln, Tt), Lt === null ? Ye = Qr : Lt.sibling = Qr, Lt = Qr, xt = kn;
        }
        if (Tt === D.length) {
          if (a(k, xt), Cr()) {
            var Dr = Tt;
            ds(k, Dr);
          }
          return Ye;
        }
        if (xt === null) {
          for (; Tt < D.length; Tt++) {
            var Ha = R(k, D[Tt], Y);
            Ha !== null && (Ln = s(Ha, Ln, Tt), Lt === null ? Ye = Ha : Lt.sibling = Ha, Lt = Ha);
          }
          if (Cr()) {
            var na = Tt;
            ds(k, na);
          }
          return Ye;
        }
        for (var ra = i(k, xt); Tt < D.length; Tt++) {
          var Ir = O(ra, k, Tt, D[Tt], Y);
          Ir !== null && (e && Ir.alternate !== null && ra.delete(Ir.key === null ? Tt : Ir.key), Ln = s(Ir, Ln, Tt), Lt === null ? Ye = Ir : Lt.sibling = Ir, Lt = Ir);
        }
        if (e && ra.forEach(function(xf) {
          return t(k, xf);
        }), Cr()) {
          var fu = Tt;
          ds(k, fu);
        }
        return Ye;
      }
      function ne(k, U, D, Y) {
        var ue = Ze(D);
        if (typeof ue != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (ig || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ig = !0), D.entries === ue && (ag || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ag = !0);
          var ae = ue.call(D);
          if (ae)
            for (var je = null, Ye = ae.next(); !Ye.done; Ye = ae.next()) {
              var Lt = Ye.value;
              je = N(Lt, je, k);
            }
        }
        var xt = ue.call(D);
        if (xt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Ln = null, Tt = null, kn = U, Qr = 0, Dr = 0, Ha = null, na = xt.next(); kn !== null && !na.done; Dr++, na = xt.next()) {
          kn.index > Dr ? (Ha = kn, kn = null) : Ha = kn.sibling;
          var ra = x(k, kn, na.value, Y);
          if (ra === null) {
            kn === null && (kn = Ha);
            break;
          }
          e && kn && ra.alternate === null && t(k, kn), Qr = s(ra, Qr, Dr), Tt === null ? Ln = ra : Tt.sibling = ra, Tt = ra, kn = Ha;
        }
        if (na.done) {
          if (a(k, kn), Cr()) {
            var Ir = Dr;
            ds(k, Ir);
          }
          return Ln;
        }
        if (kn === null) {
          for (; !na.done; Dr++, na = xt.next()) {
            var fu = R(k, na.value, Y);
            fu !== null && (Qr = s(fu, Qr, Dr), Tt === null ? Ln = fu : Tt.sibling = fu, Tt = fu);
          }
          if (Cr()) {
            var xf = Dr;
            ds(k, xf);
          }
          return Ln;
        }
        for (var Fp = i(k, kn); !na.done; Dr++, na = xt.next()) {
          var El = O(Fp, k, Dr, na.value, Y);
          El !== null && (e && El.alternate !== null && Fp.delete(El.key === null ? Dr : El.key), Qr = s(El, Qr, Dr), Tt === null ? Ln = El : Tt.sibling = El, Tt = El);
        }
        if (e && Fp.forEach(function(Xk) {
          return t(k, Xk);
        }), Cr()) {
          var Gk = Dr;
          ds(k, Gk);
        }
        return Ln;
      }
      function we(k, U, D, Y) {
        if (U !== null && U.tag === he) {
          a(k, U.sibling);
          var ue = u(U, D);
          return ue.return = k, ue;
        }
        a(k, U);
        var ae = r0(D, k.mode, Y);
        return ae.return = k, ae;
      }
      function ge(k, U, D, Y) {
        for (var ue = D.key, ae = U; ae !== null; ) {
          if (ae.key === ue) {
            var je = D.type;
            if (je === Fi) {
              if (ae.tag === ke) {
                a(k, ae.sibling);
                var Ye = u(ae, D.props.children);
                return Ye.return = k, Ye._debugSource = D._source, Ye._debugOwner = D._owner, Ye;
              }
            } else if (ae.elementType === je || // Keep this check inline so it only runs on the false path:
            yx(ae, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof je == "object" && je !== null && je.$$typeof === Qe && fE(je) === ae.type) {
              a(k, ae.sibling);
              var Lt = u(ae, D.props);
              return Lt.ref = up(k, ae, D), Lt.return = k, Lt._debugSource = D._source, Lt._debugOwner = D._owner, Lt;
            }
            a(k, ae);
            break;
          } else
            t(k, ae);
          ae = ae.sibling;
        }
        if (D.type === Fi) {
          var xt = ao(D.props.children, k.mode, Y, D.key);
          return xt.return = k, xt;
        } else {
          var Ln = n0(D, k.mode, Y);
          return Ln.ref = up(k, U, D), Ln.return = k, Ln;
        }
      }
      function dt(k, U, D, Y) {
        for (var ue = D.key, ae = U; ae !== null; ) {
          if (ae.key === ue)
            if (ae.tag === oe && ae.stateNode.containerInfo === D.containerInfo && ae.stateNode.implementation === D.implementation) {
              a(k, ae.sibling);
              var je = u(ae, D.children || []);
              return je.return = k, je;
            } else {
              a(k, ae);
              break;
            }
          else
            t(k, ae);
          ae = ae.sibling;
        }
        var Ye = a0(D, k.mode, Y);
        return Ye.return = k, Ye;
      }
      function ut(k, U, D, Y) {
        var ue = typeof D == "object" && D !== null && D.type === Fi && D.key === null;
        if (ue && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case ka:
              return f(ge(k, U, D, Y));
            case _r:
              return f(dt(k, U, D, Y));
            case Qe:
              var ae = D._payload, je = D._init;
              return ut(k, U, je(ae), Y);
          }
          if (In(D))
            return z(k, U, D, Y);
          if (Ze(D))
            return ne(k, U, D, Y);
          Ah(k, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(we(k, U, "" + D, Y)) : (typeof D == "function" && jh(k), a(k, U));
      }
      return ut;
    }
    var rf = dE(!0), pE = dE(!1);
    function R1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ws(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ws(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function w1(e, t) {
      for (var a = e.child; a !== null; )
        dk(a, t), a = a.sibling;
    }
    var sg = Yu(null), cg;
    cg = {};
    var Hh = null, af = null, fg = null, Fh = !1;
    function Vh() {
      Hh = null, af = null, fg = null, Fh = !1;
    }
    function vE() {
      Fh = !0;
    }
    function hE() {
      Fh = !1;
    }
    function mE(e, t, a) {
      Pr(sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cg;
    }
    function dg(e, t) {
      var a = sg.current;
      $r(sg, t), e._currentValue = a;
    }
    function pg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Wl(i.childLanes, t) ? u !== null && !Wl(u.childLanes, t) && (u.childLanes = Xe(u.childLanes, t)) : (i.childLanes = Xe(i.childLanes, t), u !== null && (u.childLanes = Xe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function b1(e, t, a) {
      k1(e, t, a);
    }
    function k1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === Z) {
                var p = Po(a), v = iu(zt, p);
                v.tag = $h;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = Xe(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = Xe(x.lanes, a)), pg(i.return, a, e), s.lanes = Xe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Re)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === yt) {
          var O = i.return;
          if (O === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          O.lanes = Xe(O.lanes, a);
          var N = O.alternate;
          N !== null && (N.lanes = Xe(N.lanes, a)), pg(O, a, e), u = i.sibling;
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
            var z = u.sibling;
            if (z !== null) {
              z.return = u.return, u = z;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function lf(e, t) {
      Hh = e, af = null, fg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Hr(a.lanes, t) && xp(), a.firstContext = null);
      }
    }
    function $n(e) {
      Fh && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (fg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (af === null) {
          if (Hh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          af = a, Hh.dependencies = {
            lanes: H,
            firstContext: a
          };
        } else
          af = af.next = a;
      }
      return t;
    }
    var ys = null;
    function vg(e) {
      ys === null ? ys = [e] : ys.push(e);
    }
    function D1() {
      if (ys !== null) {
        for (var e = 0; e < ys.length; e++) {
          var t = ys[e], a = t.interleaved;
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
        ys = null;
      }
    }
    function yE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Bh(e, i);
    }
    function _1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function O1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, vg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Bh(e, i);
    }
    function ga(e, t) {
      return Bh(e, t);
    }
    var M1 = Bh;
    function Bh(e, t) {
      e.lanes = Xe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Xe(a.lanes, t)), a === null && (e.flags & (en | Lr)) !== xe && px(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Xe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Xe(a.childLanes, t) : (u.flags & (en | Lr)) !== xe && px(e), i = u, u = u.return;
      if (i.tag === I) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var gE = 0, SE = 1, $h = 2, hg = 3, Ph = !1, mg, Yh;
    mg = !1, Yh = null;
    function yg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: H
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
    function iu(e, t) {
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
    function Gu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Yh === u && !mg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), mg = !0), _b()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, M1(e, a);
      } else
        return O1(e, u, t, a);
    }
    function Qh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ed(a)) {
          var s = u.lanes;
          s = xd(s, e.pendingLanes);
          var f = Xe(s, a);
          u.lanes = f, Mc(e, f);
        }
      }
    }
    function gg(e, t) {
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
        case SE: {
          var f = a.payload;
          if (typeof f == "function") {
            vE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Mt) {
                tn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  tn(!1);
                }
              }
              hE();
            }
            return p;
          }
          return f;
        }
        case hg:
          e.flags = e.flags & ~Hn | Se;
        case gE: {
          var v = a.payload, m;
          if (typeof v == "function") {
            vE(), m = v.call(s, i, u);
            {
              if (e.mode & Mt) {
                tn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  tn(!1);
                }
              }
              hE();
            }
          } else
            m = v;
          return m == null ? i : Je({}, i, m);
        }
        case $h:
          return Ph = !0, i;
      }
      return i;
    }
    function Ih(e, t, a, i) {
      var u = e.updateQueue;
      Ph = !1, Yh = u.shared;
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
        var O = u.baseState, N = H, z = null, ne = null, we = null, ge = s;
        do {
          var dt = ge.lane, ut = ge.eventTime;
          if (Wl(i, dt)) {
            if (we !== null) {
              var U = {
                eventTime: ut,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ht,
                tag: ge.tag,
                payload: ge.payload,
                callback: ge.callback,
                next: null
              };
              we = we.next = U;
            }
            O = N1(e, u, ge, O, t, a);
            var D = ge.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            ge.lane !== ht) {
              e.flags |= Ft;
              var Y = u.effects;
              Y === null ? u.effects = [ge] : Y.push(ge);
            }
          } else {
            var k = {
              eventTime: ut,
              lane: dt,
              tag: ge.tag,
              payload: ge.payload,
              callback: ge.callback,
              next: null
            };
            we === null ? (ne = we = k, z = O) : we = we.next = k, N = Xe(N, dt);
          }
          if (ge = ge.next, ge === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ue = p, ae = ue.next;
            ue.next = null, ge = ae, u.lastBaseUpdate = ue, u.shared.pending = null;
          }
        } while (!0);
        we === null && (z = O), u.baseState = z, u.firstBaseUpdate = ne, u.lastBaseUpdate = we;
        var je = u.shared.interleaved;
        if (je !== null) {
          var Ye = je;
          do
            N = Xe(N, Ye.lane), Ye = Ye.next;
          while (Ye !== je);
        } else s === null && (u.shared.lanes = H);
        zp(N), e.lanes = N, e.memoizedState = O;
      }
      Yh = null;
    }
    function L1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function CE() {
      Ph = !1;
    }
    function Wh() {
      return Ph;
    }
    function xE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, L1(f, a));
        }
    }
    var op = {}, Xu = Yu(op), sp = Yu(op), Gh = Yu(op);
    function Xh(e) {
      if (e === op)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function TE() {
      var e = Xh(Gh.current);
      return e;
    }
    function Sg(e, t) {
      Pr(Gh, t, e), Pr(sp, e, e), Pr(Xu, op, e);
      var a = KT(t);
      $r(Xu, e), Pr(Xu, a, e);
    }
    function uf(e) {
      $r(Xu, e), $r(sp, e), $r(Gh, e);
    }
    function Eg() {
      var e = Xh(Xu.current);
      return e;
    }
    function RE(e) {
      Xh(Gh.current);
      var t = Xh(Xu.current), a = qT(t, e.type);
      t !== a && (Pr(sp, e, e), Pr(Xu, a, e));
    }
    function Cg(e) {
      sp.current === e && ($r(Xu, e), $r(sp, e));
    }
    var z1 = 0, wE = 1, bE = 1, cp = 2, Oi = Yu(z1);
    function xg(e, t) {
      return (e & t) !== 0;
    }
    function of(e) {
      return e & wE;
    }
    function Tg(e, t) {
      return e & wE | t;
    }
    function U1(e, t) {
      return e | t;
    }
    function Ku(e, t) {
      Pr(Oi, t, e);
    }
    function sf(e) {
      $r(Oi, e);
    }
    function A1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Kh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ee) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || P0(i) || By(i))
              return t;
          }
        } else if (t.tag === Ut && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Se) !== xe;
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
    var Sa = (
      /*   */
      0
    ), qn = (
      /* */
      1
    ), pl = (
      /*  */
      2
    ), Zn = (
      /*    */
      4
    ), xr = (
      /*   */
      8
    ), Rg = [];
    function wg() {
      for (var e = 0; e < Rg.length; e++) {
        var t = Rg[e];
        t._workInProgressVersionPrimary = null;
      }
      Rg.length = 0;
    }
    function j1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var le = w.ReactCurrentDispatcher, fp = w.ReactCurrentBatchConfig, bg, cf;
    bg = /* @__PURE__ */ new Set();
    var gs = H, Nt = null, Jn = null, er = null, qh = !1, dp = !1, pp = 0, H1 = 0, F1 = 25, A = null, ri = null, qu = -1, kg = !1;
    function bt() {
      {
        var e = A;
        ri === null ? ri = [e] : ri.push(e);
      }
    }
    function J() {
      {
        var e = A;
        ri !== null && (qu++, ri[qu] !== e && V1(e));
      }
    }
    function ff(e) {
      e != null && !In(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", A, typeof e);
    }
    function V1(e) {
      {
        var t = Ge(Nt);
        if (!bg.has(t) && (bg.add(t), ri !== null)) {
          for (var a = "", i = 30, u = 0; u <= qu; u++) {
            for (var s = ri[u], f = u === qu ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function Yr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Dg(e, t) {
      if (kg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", A), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, A, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!$(e[a], t[a]))
          return !1;
      return !0;
    }
    function df(e, t, a, i, u, s) {
      gs = s, Nt = t, ri = e !== null ? e._debugHookTypes : null, qu = -1, kg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = H, e !== null && e.memoizedState !== null ? le.current = GE : ri !== null ? le.current = WE : le.current = IE;
      var f = a(i, u);
      if (dp) {
        var p = 0;
        do {
          if (dp = !1, pp = 0, p >= F1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, kg = !1, Jn = null, er = null, t.updateQueue = null, qu = -1, le.current = XE, f = a(i, u);
        } while (dp);
      }
      le.current = cm, t._debugHookTypes = ri;
      var v = Jn !== null && Jn.next !== null;
      if (gs = H, Nt = null, Jn = null, er = null, A = null, ri = null, qu = -1, e !== null && (e.flags & Cn) !== (t.flags & Cn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & et) !== Te && g("Internal React error: Expected static flag was missing. Please notify the React team."), qh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function pf() {
      var e = pp !== 0;
      return pp = 0, e;
    }
    function kE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Et) !== Te ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Yo(e.lanes, a);
    }
    function DE() {
      if (le.current = cm, qh) {
        for (var e = Nt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        qh = !1;
      }
      gs = H, Nt = null, Jn = null, er = null, ri = null, qu = -1, A = null, BE = !1, dp = !1, pp = 0;
    }
    function vl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return er === null ? Nt.memoizedState = er = e : er = er.next = e, er;
    }
    function ai() {
      var e;
      if (Jn === null) {
        var t = Nt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Jn.next;
      var a;
      if (er === null ? a = Nt.memoizedState : a = er.next, a !== null)
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
        er === null ? Nt.memoizedState = er = i : er = er.next = i;
      }
      return er;
    }
    function _E() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Og(e, t, a) {
      var i = vl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: H,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Y1.bind(null, Nt, s);
      return [i.memoizedState, f];
    }
    function Mg(e, t, a) {
      var i = ai(), u = i.queue;
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
        var y = f.next, R = s.baseState, x = null, O = null, N = null, z = y;
        do {
          var ne = z.lane;
          if (Wl(gs, ne)) {
            if (N !== null) {
              var ge = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: ht,
                action: z.action,
                hasEagerState: z.hasEagerState,
                eagerState: z.eagerState,
                next: null
              };
              N = N.next = ge;
            }
            if (z.hasEagerState)
              R = z.eagerState;
            else {
              var dt = z.action;
              R = e(R, dt);
            }
          } else {
            var we = {
              lane: ne,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            };
            N === null ? (O = N = we, x = R) : N = N.next = we, Nt.lanes = Xe(Nt.lanes, ne), zp(ne);
          }
          z = z.next;
        } while (z !== null && z !== y);
        N === null ? x = R : N.next = O, $(R, i.memoizedState) || xp(), i.memoizedState = R, i.baseState = x, i.baseQueue = N, u.lastRenderedState = R;
      }
      var ut = u.interleaved;
      if (ut !== null) {
        var k = ut;
        do {
          var U = k.lane;
          Nt.lanes = Xe(Nt.lanes, U), zp(U), k = k.next;
        } while (k !== ut);
      } else f === null && (u.lanes = H);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function Ng(e, t, a) {
      var i = ai(), u = i.queue;
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
        $(p, i.memoizedState) || xp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function ED(e, t, a) {
    }
    function CD(e, t, a) {
    }
    function Lg(e, t, a) {
      var i = Nt, u = vl(), s, f = Cr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), cf || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), cf = !0);
      } else {
        if (s = t(), !cf) {
          var p = t();
          $(s, p) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), cf = !0);
        }
        var v = _m();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _c(v, gs) || OE(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, nm(NE.bind(null, i, m, e), [e]), i.flags |= Nr, vp(qn | xr, ME.bind(null, i, m, s, t), void 0, null), s;
    }
    function Zh(e, t, a) {
      var i = Nt, u = ai(), s = t();
      if (!cf) {
        var f = t();
        $(s, f) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), cf = !0);
      }
      var p = u.memoizedState, v = !$(p, s);
      v && (u.memoizedState = s, xp());
      var m = u.queue;
      if (mp(NE.bind(null, i, m, e), [e]), m.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      er !== null && er.memoizedState.tag & qn) {
        i.flags |= Nr, vp(qn | xr, ME.bind(null, i, m, s, t), void 0, null);
        var y = _m();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _c(y, gs) || OE(i, t, s);
      }
      return s;
    }
    function OE(e, t, a) {
      e.flags |= Du;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Nt.updateQueue;
      if (u === null)
        u = _E(), Nt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function ME(e, t, a, i) {
      t.value = a, t.getSnapshot = i, LE(t) && zE(e);
    }
    function NE(e, t, a) {
      var i = function() {
        LE(t) && zE(e);
      };
      return a(i);
    }
    function LE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !$(a, i);
      } catch {
        return !0;
      }
    }
    function zE(e) {
      var t = ga(e, ze);
      t !== null && ar(t, e, ze, zt);
    }
    function Jh(e) {
      var t = vl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: H,
        dispatch: null,
        lastRenderedReducer: _g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Q1.bind(null, Nt, a);
      return [t.memoizedState, i];
    }
    function zg(e) {
      return Mg(_g);
    }
    function Ug(e) {
      return Ng(_g);
    }
    function vp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Nt.updateQueue;
      if (s === null)
        s = _E(), Nt.updateQueue = s, s.lastEffect = u.next = u;
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
    function Ag(e) {
      var t = vl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function em(e) {
      var t = ai();
      return t.memoizedState;
    }
    function hp(e, t, a, i) {
      var u = vl(), s = i === void 0 ? null : i;
      Nt.flags |= e, u.memoizedState = vp(qn | t, a, void 0, s);
    }
    function tm(e, t, a, i) {
      var u = ai(), s = i === void 0 ? null : i, f = void 0;
      if (Jn !== null) {
        var p = Jn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Dg(s, v)) {
            u.memoizedState = vp(t, a, f, s);
            return;
          }
        }
      }
      Nt.flags |= e, u.memoizedState = vp(qn | t, a, f, s);
    }
    function nm(e, t) {
      return (Nt.mode & Et) !== Te ? hp(Qa | Nr | nc, xr, e, t) : hp(Nr | nc, xr, e, t);
    }
    function mp(e, t) {
      return tm(Nr, xr, e, t);
    }
    function jg(e, t) {
      return hp(st, pl, e, t);
    }
    function rm(e, t) {
      return tm(st, pl, e, t);
    }
    function Hg(e, t) {
      var a = st;
      return a |= gi, (Nt.mode & Et) !== Te && (a |= Xi), hp(a, Zn, e, t);
    }
    function am(e, t) {
      return tm(st, Zn, e, t);
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
    function Fg(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = st;
      return u |= gi, (Nt.mode & Et) !== Te && (u |= Xi), hp(u, Zn, UE.bind(null, t, e), i);
    }
    function im(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return tm(st, Zn, UE.bind(null, t, e), i);
    }
    function B1(e, t) {
    }
    var lm = B1;
    function Vg(e, t) {
      var a = vl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function um(e, t) {
      var a = ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Dg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Bg(e, t) {
      var a = vl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function om(e, t) {
      var a = ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Dg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function $g(e) {
      var t = vl();
      return t.memoizedState = e, e;
    }
    function AE(e) {
      var t = ai(), a = Jn, i = a.memoizedState;
      return HE(t, i, e);
    }
    function jE(e) {
      var t = ai();
      if (Jn === null)
        return t.memoizedState = e, e;
      var a = Jn.memoizedState;
      return HE(t, a, e);
    }
    function HE(e, t, a) {
      var i = !gd(gs);
      if (i) {
        if (!$(a, t)) {
          var u = Cd();
          Nt.lanes = Xe(Nt.lanes, u), zp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, xp()), e.memoizedState = a, a;
    }
    function $1(e, t, a) {
      var i = ha();
      Rn(Fv(i, Xa)), e(!0);
      var u = fp.transition;
      fp.transition = {};
      var s = fp.transition;
      fp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Rn(i), fp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ie("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = Jh(!1), t = e[0], a = e[1], i = $1.bind(null, a), u = vl();
      return u.memoizedState = i, [t, i];
    }
    function FE() {
      var e = zg(), t = e[0], a = ai(), i = a.memoizedState;
      return [t, i];
    }
    function VE() {
      var e = Ug(), t = e[0], a = ai(), i = a.memoizedState;
      return [t, i];
    }
    var BE = !1;
    function P1() {
      return BE;
    }
    function Yg() {
      var e = vl(), t = _m(), a = t.identifierPrefix, i;
      if (Cr()) {
        var u = l1();
        i = ":" + a + "R" + u;
        var s = pp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = H1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function sm() {
      var e = ai(), t = e.memoizedState;
      return t;
    }
    function Y1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($E(e))
        PE(t, u);
      else {
        var s = yE(e, t, u, i);
        if (s !== null) {
          var f = ta();
          ar(s, e, i, f), YE(s, t, i);
        }
      }
      QE(e, i);
    }
    function Q1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = no(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($E(e))
        PE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === H && (s === null || s.lanes === H)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = le.current, le.current = Mi;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, $(m, v)) {
                _1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              le.current = p;
            }
          }
        }
        var y = yE(e, t, u, i);
        if (y !== null) {
          var R = ta();
          ar(y, e, i, R), YE(y, t, i);
        }
      }
      QE(e, i);
    }
    function $E(e) {
      var t = e.alternate;
      return e === Nt || t !== null && t === Nt;
    }
    function PE(e, t) {
      dp = qh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YE(e, t, a) {
      if (Ed(a)) {
        var i = t.lanes;
        i = xd(i, e.pendingLanes);
        var u = Xe(i, a);
        t.lanes = u, Mc(e, u);
      }
    }
    function QE(e, t, a) {
      zo(e, t);
    }
    var cm = {
      readContext: $n,
      useCallback: Yr,
      useContext: Yr,
      useEffect: Yr,
      useImperativeHandle: Yr,
      useInsertionEffect: Yr,
      useLayoutEffect: Yr,
      useMemo: Yr,
      useReducer: Yr,
      useRef: Yr,
      useState: Yr,
      useDebugValue: Yr,
      useDeferredValue: Yr,
      useTransition: Yr,
      useMutableSource: Yr,
      useSyncExternalStore: Yr,
      useId: Yr,
      unstable_isNewReconciler: L
    }, IE = null, WE = null, GE = null, XE = null, hl = null, Mi = null, fm = null;
    {
      var Qg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Be = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      IE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", bt(), ff(t), Vg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", bt(), $n(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", bt(), ff(t), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", bt(), ff(a), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", bt(), ff(t), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", bt(), ff(t), Hg(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", bt(), ff(t);
          var a = le.current;
          le.current = hl;
          try {
            return Bg(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", bt();
          var i = le.current;
          le.current = hl;
          try {
            return Og(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", bt(), Ag(e);
        },
        useState: function(e) {
          A = "useState", bt();
          var t = le.current;
          le.current = hl;
          try {
            return Jh(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", bt(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", bt(), $g(e);
        },
        useTransition: function() {
          return A = "useTransition", bt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", bt(), Lg(e, t, a);
        },
        useId: function() {
          return A = "useId", bt(), Yg();
        },
        unstable_isNewReconciler: L
      }, WE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", J(), Vg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", J(), $n(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", J(), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", J(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", J(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", J(), Hg(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", J();
          var a = le.current;
          le.current = hl;
          try {
            return Bg(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", J();
          var i = le.current;
          le.current = hl;
          try {
            return Og(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", J(), Ag(e);
        },
        useState: function(e) {
          A = "useState", J();
          var t = le.current;
          le.current = hl;
          try {
            return Jh(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", J(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", J(), $g(e);
        },
        useTransition: function() {
          return A = "useTransition", J(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", J(), Lg(e, t, a);
        },
        useId: function() {
          return A = "useId", J(), Yg();
        },
        unstable_isNewReconciler: L
      }, GE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", J(), um(e, t);
        },
        useContext: function(e) {
          return A = "useContext", J(), $n(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", J(), mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", J(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", J(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", J(), am(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", J();
          var a = le.current;
          le.current = Mi;
          try {
            return om(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", J();
          var i = le.current;
          le.current = Mi;
          try {
            return Mg(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", J(), em();
        },
        useState: function(e) {
          A = "useState", J();
          var t = le.current;
          le.current = Mi;
          try {
            return zg(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", J(), lm();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", J(), AE(e);
        },
        useTransition: function() {
          return A = "useTransition", J(), FE();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", J(), Zh(e, t);
        },
        useId: function() {
          return A = "useId", J(), sm();
        },
        unstable_isNewReconciler: L
      }, XE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", J(), um(e, t);
        },
        useContext: function(e) {
          return A = "useContext", J(), $n(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", J(), mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", J(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", J(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", J(), am(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", J();
          var a = le.current;
          le.current = fm;
          try {
            return om(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", J();
          var i = le.current;
          le.current = fm;
          try {
            return Ng(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", J(), em();
        },
        useState: function(e) {
          A = "useState", J();
          var t = le.current;
          le.current = fm;
          try {
            return Ug(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", J(), lm();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", J(), jE(e);
        },
        useTransition: function() {
          return A = "useTransition", J(), VE();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", J(), Zh(e, t);
        },
        useId: function() {
          return A = "useId", J(), sm();
        },
        unstable_isNewReconciler: L
      }, hl = {
        readContext: function(e) {
          return Qg(), $n(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", Be(), bt(), Vg(e, t);
        },
        useContext: function(e) {
          return A = "useContext", Be(), bt(), $n(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", Be(), bt(), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", Be(), bt(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", Be(), bt(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", Be(), bt(), Hg(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", Be(), bt();
          var a = le.current;
          le.current = hl;
          try {
            return Bg(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", Be(), bt();
          var i = le.current;
          le.current = hl;
          try {
            return Og(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", Be(), bt(), Ag(e);
        },
        useState: function(e) {
          A = "useState", Be(), bt();
          var t = le.current;
          le.current = hl;
          try {
            return Jh(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", Be(), bt(), void 0;
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", Be(), bt(), $g(e);
        },
        useTransition: function() {
          return A = "useTransition", Be(), bt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", Be(), bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", Be(), bt(), Lg(e, t, a);
        },
        useId: function() {
          return A = "useId", Be(), bt(), Yg();
        },
        unstable_isNewReconciler: L
      }, Mi = {
        readContext: function(e) {
          return Qg(), $n(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", Be(), J(), um(e, t);
        },
        useContext: function(e) {
          return A = "useContext", Be(), J(), $n(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", Be(), J(), mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", Be(), J(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", Be(), J(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", Be(), J(), am(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", Be(), J();
          var a = le.current;
          le.current = Mi;
          try {
            return om(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", Be(), J();
          var i = le.current;
          le.current = Mi;
          try {
            return Mg(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", Be(), J(), em();
        },
        useState: function(e) {
          A = "useState", Be(), J();
          var t = le.current;
          le.current = Mi;
          try {
            return zg(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", Be(), J(), lm();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", Be(), J(), AE(e);
        },
        useTransition: function() {
          return A = "useTransition", Be(), J(), FE();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", Be(), J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", Be(), J(), Zh(e, t);
        },
        useId: function() {
          return A = "useId", Be(), J(), sm();
        },
        unstable_isNewReconciler: L
      }, fm = {
        readContext: function(e) {
          return Qg(), $n(e);
        },
        useCallback: function(e, t) {
          return A = "useCallback", Be(), J(), um(e, t);
        },
        useContext: function(e) {
          return A = "useContext", Be(), J(), $n(e);
        },
        useEffect: function(e, t) {
          return A = "useEffect", Be(), J(), mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return A = "useImperativeHandle", Be(), J(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return A = "useInsertionEffect", Be(), J(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return A = "useLayoutEffect", Be(), J(), am(e, t);
        },
        useMemo: function(e, t) {
          A = "useMemo", Be(), J();
          var a = le.current;
          le.current = Mi;
          try {
            return om(e, t);
          } finally {
            le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          A = "useReducer", Be(), J();
          var i = le.current;
          le.current = Mi;
          try {
            return Ng(e, t, a);
          } finally {
            le.current = i;
          }
        },
        useRef: function(e) {
          return A = "useRef", Be(), J(), em();
        },
        useState: function(e) {
          A = "useState", Be(), J();
          var t = le.current;
          le.current = Mi;
          try {
            return Ug(e);
          } finally {
            le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return A = "useDebugValue", Be(), J(), lm();
        },
        useDeferredValue: function(e) {
          return A = "useDeferredValue", Be(), J(), jE(e);
        },
        useTransition: function() {
          return A = "useTransition", Be(), J(), VE();
        },
        useMutableSource: function(e, t, a) {
          return A = "useMutableSource", Be(), J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return A = "useSyncExternalStore", Be(), J(), Zh(e, t);
        },
        useId: function() {
          return A = "useId", Be(), J(), sm();
        },
        unstable_isNewReconciler: L
      };
    }
    var Zu = Q.unstable_now, KE = 0, dm = -1, yp = -1, pm = -1, Ig = !1, vm = !1;
    function qE() {
      return Ig;
    }
    function I1() {
      vm = !0;
    }
    function W1() {
      Ig = !1, vm = !1;
    }
    function G1() {
      Ig = vm, vm = !1;
    }
    function ZE() {
      return KE;
    }
    function JE() {
      KE = Zu();
    }
    function Wg(e) {
      yp = Zu(), e.actualStartTime < 0 && (e.actualStartTime = Zu());
    }
    function eC(e) {
      yp = -1;
    }
    function hm(e, t) {
      if (yp >= 0) {
        var a = Zu() - yp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), yp = -1;
      }
    }
    function ml(e) {
      if (dm >= 0) {
        var t = Zu() - dm;
        dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case tt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Gg(e) {
      if (pm >= 0) {
        var t = Zu() - pm;
        pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case I:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case tt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function yl() {
      dm = Zu();
    }
    function Xg() {
      pm = Zu();
    }
    function Kg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ni(e, t) {
      if (e && e.defaultProps) {
        var a = Je({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Zg, Jg, eS, tS, nS, tC, mm, rS, aS, iS, gp;
    {
      Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), gp = /* @__PURE__ */ new Set();
      var nC = /* @__PURE__ */ new Set();
      mm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          nC.has(a) || (nC.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, tC = function(e, t) {
        if (t === void 0) {
          var a = _t(e) || "Component";
          nS.has(a) || (nS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function lS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Mt) {
          tn(!0);
          try {
            s = a(i, u);
          } finally {
            tn(!1);
          }
        }
        tC(t, s);
      }
      var f = s == null ? u : Je({}, u, s);
      if (e.memoizedState = f, e.lanes === H) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var uS = {
      isMounted: Tv,
      enqueueSetState: function(e, t, a) {
        var i = ku(e), u = ta(), s = no(i), f = iu(u, s);
        f.payload = t, a != null && (mm(a, "setState"), f.callback = a);
        var p = Gu(i, f, s);
        p !== null && (ar(p, i, s, u), Qh(p, i, s)), zo(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ku(e), u = ta(), s = no(i), f = iu(u, s);
        f.tag = SE, f.payload = t, a != null && (mm(a, "replaceState"), f.callback = a);
        var p = Gu(i, f, s);
        p !== null && (ar(p, i, s, u), Qh(p, i, s)), zo(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ku(e), i = ta(), u = no(a), s = iu(i, u);
        s.tag = $h, t != null && (mm(t, "forceUpdate"), s.callback = t);
        var f = Gu(a, s, u);
        f !== null && (ar(f, a, u, i), Qh(f, a, u)), sc(a, u);
      }
    };
    function rC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Mt) {
            tn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              tn(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", _t(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !de(a, i) || !de(u, s) : !0;
    }
    function X1(e, t, a) {
      var i = e.stateNode;
      {
        var u = _t(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !gp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Mt) === Te && (gp.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !gp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Mt) === Te && (gp.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !aS.has(t) && (aS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", _t(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !eS.has(t) && (eS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", _t(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || In(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function aC(e, t) {
      t.updater = uS, e.stateNode = t, Ll(t, e), t._reactInternalInstance = qg;
    }
    function iC(e, t, a) {
      var i = !1, u = Aa, s = Aa, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === E && f._context === void 0
        );
        if (!p && !iS.has(t)) {
          iS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Bi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", _t(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = $n(f);
      else {
        u = Zc(e, t, !0);
        var m = t.contextTypes;
        i = m != null, s = i ? Jc(e, u) : Aa;
      }
      var y = new t(a, s);
      if (e.mode & Mt) {
        tn(!0);
        try {
          y = new t(a, s);
        } finally {
          tn(!1);
        }
      }
      var R = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      aC(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var x = _t(t) || "Component";
          Jg.has(x) || (Jg.add(x), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, y.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var O = null, N = null, z = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? O = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (O = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? N = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (N = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? z = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (z = "UNSAFE_componentWillUpdate"), O !== null || N !== null || z !== null) {
            var ne = _t(t) || "Component", we = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            tS.has(ne) || (tS.add(ne), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ne, we, O !== null ? `
  ` + O : "", N !== null ? `
  ` + N : "", z !== null ? `
  ` + z : ""));
          }
        }
      }
      return i && G0(e, u, s), y;
    }
    function K1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ge(e) || "Component"), uS.enqueueReplaceState(t, t.state, null));
    }
    function lC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ge(e) || "Component";
          Zg.has(s) || (Zg.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        uS.enqueueReplaceState(t, t.state, null);
      }
    }
    function oS(e, t, a, i) {
      X1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, yg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = $n(s);
      else {
        var f = Zc(e, t, !0);
        u.context = Jc(e, f);
      }
      {
        if (u.state === a) {
          var p = _t(t) || "Component";
          rS.has(p) || (rS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Mt && _i.recordLegacyContextWarning(e, u), _i.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (lS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (K1(e, u), Ih(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = st;
        m |= gi, (e.mode & Et) !== Te && (m |= Xi), e.flags |= m;
      }
    }
    function q1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Aa;
      if (typeof p == "object" && p !== null)
        v = $n(p);
      else {
        var m = Zc(e, t, !0);
        v = Jc(e, m);
      }
      var y = t.getDerivedStateFromProps, R = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !R && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && lC(e, u, a, v), CE();
      var x = e.memoizedState, O = u.state = x;
      if (Ih(e, a, u, i), O = e.memoizedState, s === a && x === O && !kh() && !Wh()) {
        if (typeof u.componentDidMount == "function") {
          var N = st;
          N |= gi, (e.mode & Et) !== Te && (N |= Xi), e.flags |= N;
        }
        return !1;
      }
      typeof y == "function" && (lS(e, t, y, a), O = e.memoizedState);
      var z = Wh() || rC(e, t, s, a, x, O, v);
      if (z) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ne = st;
          ne |= gi, (e.mode & Et) !== Te && (ne |= Xi), e.flags |= ne;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var we = st;
          we |= gi, (e.mode & Et) !== Te && (we |= Xi), e.flags |= we;
        }
        e.memoizedProps = a, e.memoizedState = O;
      }
      return u.props = a, u.state = O, u.context = v, z;
    }
    function Z1(e, t, a, i, u) {
      var s = t.stateNode;
      EE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ni(t.type, f);
      s.props = p;
      var v = t.pendingProps, m = s.context, y = a.contextType, R = Aa;
      if (typeof y == "object" && y !== null)
        R = $n(y);
      else {
        var x = Zc(t, a, !0);
        R = Jc(t, x);
      }
      var O = a.getDerivedStateFromProps, N = typeof O == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !N && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || m !== R) && lC(t, s, i, R), CE();
      var z = t.memoizedState, ne = s.state = z;
      if (Ih(t, i, s, u), ne = t.memoizedState, f === v && z === ne && !kh() && !Wh() && !G)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || z !== e.memoizedState) && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || z !== e.memoizedState) && (t.flags |= On), !1;
      typeof O == "function" && (lS(t, a, O, i), ne = t.memoizedState);
      var we = Wh() || rC(t, a, p, i, z, ne, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      G;
      return we ? (!N && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ne, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ne, R)), typeof s.componentDidUpdate == "function" && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= On)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || z !== e.memoizedState) && (t.flags |= st), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || z !== e.memoizedState) && (t.flags |= On), t.memoizedProps = i, t.memoizedState = ne), s.props = i, s.state = ne, s.context = R, we;
    }
    function Ss(e, t) {
      return {
        value: e,
        source: t,
        stack: Os(t),
        digest: null
      };
    }
    function sS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function J1(e, t) {
      return !0;
    }
    function cS(e, t) {
      try {
        var a = J1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === Z)
            return;
          console.error(i);
        }
        var p = u ? Ge(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === I)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Ge(e) || "Anonymous";
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
    var ew = typeof WeakMap == "function" ? WeakMap : Map;
    function uC(e, t, a) {
      var i = iu(zt, a);
      i.tag = hg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Ib(u), cS(e, t);
      }, i;
    }
    function fS(e, t, a) {
      var i = iu(zt, a);
      i.tag = hg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          gx(e), cS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        gx(e), cS(e, t), typeof u != "function" && Yb(this);
        var v = t.value, m = t.stack;
        this.componentDidCatch(v, {
          componentStack: m !== null ? m : ""
        }), typeof u != "function" && (Hr(e.lanes, ze) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ge(e) || "Unknown"));
      }), i;
    }
    function oC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ew(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Wb.bind(null, e, t, a);
        Ar && Up(e, a), t.then(s, s);
      }
    }
    function tw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function nw(e, t) {
      var a = e.tag;
      if ((e.mode & et) === Te && (a === q || a === De || a === Ce)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function sC(e) {
      var t = e;
      do {
        if (t.tag === Ee && A1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function cC(e, t, a, i, u) {
      if ((e.mode & et) === Te) {
        if (e === t)
          e.flags |= Hn;
        else {
          if (e.flags |= Se, a.flags |= tc, a.flags &= -52805, a.tag === Z) {
            var s = a.alternate;
            if (s === null)
              a.tag = mt;
            else {
              var f = iu(zt, ze);
              f.tag = $h, Gu(a, f, ze);
            }
          }
          a.lanes = Xe(a.lanes, ze);
        }
        return e;
      }
      return e.flags |= Hn, e.lanes = u, e;
    }
    function rw(e, t, a, i, u) {
      if (a.flags |= Do, Ar && Up(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nw(a), Cr() && a.mode & et && tE();
        var f = sC(t);
        if (f !== null) {
          f.flags &= ~ur, cC(f, t, a, e, u), f.mode & et && oC(e, s, u), tw(f, e, s);
          return;
        } else {
          if (!Mv(u)) {
            oC(e, s, u), YS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Cr() && a.mode & et) {
        tE();
        var v = sC(t);
        if (v !== null) {
          (v.flags & Hn) === xe && (v.flags |= ur), cC(v, t, a, e, u), rg(Ss(i, a));
          return;
        }
      }
      i = Ss(i, a), Ab(i);
      var m = t;
      do {
        switch (m.tag) {
          case I: {
            var y = i;
            m.flags |= Hn;
            var R = Po(u);
            m.lanes = Xe(m.lanes, R);
            var x = uC(m, y, R);
            gg(m, x);
            return;
          }
          case Z:
            var O = i, N = m.type, z = m.stateNode;
            if ((m.flags & Se) === xe && (typeof N.getDerivedStateFromError == "function" || z !== null && typeof z.componentDidCatch == "function" && !sx(z))) {
              m.flags |= Hn;
              var ne = Po(u);
              m.lanes = Xe(m.lanes, ne);
              var we = fS(m, O, ne);
              gg(m, we);
              return;
            }
            break;
        }
        m = m.return;
      } while (m !== null);
    }
    function aw() {
      return null;
    }
    var Sp = w.ReactCurrentOwner, Li = !1, dS, Ep, pS, vS, hS, Es, mS, ym, Cp;
    dS = {}, Ep = {}, pS = {}, vS = {}, hS = {}, Es = !1, mS = {}, ym = {}, Cp = {};
    function Jr(e, t, a, i) {
      e === null ? t.child = pE(t, null, a, i) : t.child = rf(t, e.child, a, i);
    }
    function iw(e, t, a, i) {
      t.child = rf(t, e.child, null, i), t.child = rf(t, null, a, i);
    }
    function fC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ki(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      lf(t, u), Xr(t);
      {
        if (Sp.current = t, Qn(!0), v = df(e, t, f, i, p, u), m = pf(), t.mode & Mt) {
          tn(!0);
          try {
            v = df(e, t, f, i, p, u), m = pf();
          } finally {
            tn(!1);
          }
        }
        Qn(!1);
      }
      return Kr(), e !== null && !Li ? (kE(e, t, u), lu(e, t, u)) : (Cr() && m && qy(t), t.flags |= Ma, Jr(e, t, v, u), t.child);
    }
    function dC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (ck(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Cf(s), t.tag = Ce, t.type = f, SS(t, s), pC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && ki(
            p,
            i,
            // Resolved props
            "prop",
            _t(s)
          ), a.defaultProps !== void 0) {
            var v = _t(s) || "Unknown";
            Cp[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Cp[v] = !0);
          }
        }
        var m = t0(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var y = a.type, R = y.propTypes;
        R && ki(
          R,
          i,
          // Resolved props
          "prop",
          _t(y)
        );
      }
      var x = e.child, O = wS(e, u);
      if (!O) {
        var N = x.memoizedProps, z = a.compare;
        if (z = z !== null ? z : de, z(N, i) && e.ref === t.ref)
          return lu(e, t, u);
      }
      t.flags |= Ma;
      var ne = ws(x, i);
      return ne.ref = t.ref, ne.return = t, t.child = ne, ne;
    }
    function pC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Qe) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var m = s && s.propTypes;
          m && ki(
            m,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            _t(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (de(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Li = !1, t.pendingProps = i = y, wS(e, u))
            (e.flags & tc) !== xe && (Li = !0);
          else return t.lanes = e.lanes, lu(e, t, u);
      }
      return yS(e, t, a, i, u);
    }
    function vC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || W)
        if ((t.mode & et) === Te) {
          var f = {
            baseLanes: H,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Om(t, a);
        } else if (Hr(a, jr)) {
          var R = {
            baseLanes: H,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = R;
          var x = s !== null ? s.baseLanes : a;
          Om(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var m = s.baseLanes;
            v = Xe(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = jr;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, Om(t, v), null;
        }
      else {
        var O;
        s !== null ? (O = Xe(s.baseLanes, a), t.memoizedState = null) : O = a, Om(t, O);
      }
      return Jr(e, t, u, a), t.child;
    }
    function lw(e, t, a) {
      var i = t.pendingProps;
      return Jr(e, t, i, a), t.child;
    }
    function uw(e, t, a) {
      var i = t.pendingProps.children;
      return Jr(e, t, i, a), t.child;
    }
    function ow(e, t, a) {
      {
        t.flags |= st;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Jr(e, t, s, a), t.child;
    }
    function hC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= on, t.flags |= _u);
    }
    function yS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && ki(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
        );
      }
      var f;
      {
        var p = Zc(t, a, !0);
        f = Jc(t, p);
      }
      var v, m;
      lf(t, u), Xr(t);
      {
        if (Sp.current = t, Qn(!0), v = df(e, t, a, i, f, u), m = pf(), t.mode & Mt) {
          tn(!0);
          try {
            v = df(e, t, a, i, f, u), m = pf();
          } finally {
            tn(!1);
          }
        }
        Qn(!1);
      }
      return Kr(), e !== null && !Li ? (kE(e, t, u), lu(e, t, u)) : (Cr() && m && qy(t), t.flags |= Ma, Jr(e, t, v, u), t.child);
    }
    function mC(e, t, a, i, u) {
      {
        switch (wk(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Se, t.flags |= Hn;
            var m = new Error("Simulated error coming from DevTools"), y = Po(u);
            t.lanes = Xe(t.lanes, y);
            var R = fS(t, Ss(m, t), y);
            gg(t, R);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && ki(
            x,
            i,
            // Resolved props
            "prop",
            _t(a)
          );
        }
      }
      var O;
      dl(a) ? (O = !0, _h(t)) : O = !1, lf(t, u);
      var N = t.stateNode, z;
      N === null ? (Sm(e, t), iC(t, a, i), oS(t, a, i, u), z = !0) : e === null ? z = q1(t, a, i, u) : z = Z1(e, t, a, i, u);
      var ne = gS(e, t, a, z, O, u);
      {
        var we = t.stateNode;
        z && we.props !== i && (Es || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ge(t) || "a component"), Es = !0);
      }
      return ne;
    }
    function gS(e, t, a, i, u, s) {
      hC(e, t);
      var f = (t.flags & Se) !== xe;
      if (!i && !f)
        return u && q0(t, a, !1), lu(e, t, s);
      var p = t.stateNode;
      Sp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, eC();
      else {
        Xr(t);
        {
          if (Qn(!0), v = p.render(), t.mode & Mt) {
            tn(!0);
            try {
              p.render();
            } finally {
              tn(!1);
            }
          }
          Qn(!1);
        }
        Kr();
      }
      return t.flags |= Ma, e !== null && f ? iw(e, t, v, s) : Jr(e, t, v, s), t.memoizedState = p.state, u && q0(t, a, !0), t.child;
    }
    function yC(e) {
      var t = e.stateNode;
      t.pendingContext ? X0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && X0(e, t.context, !1), Sg(e, t.containerInfo);
    }
    function sw(e, t, a) {
      if (yC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      EE(e, t), Ih(t, i, null, a);
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
        if (m.baseState = v, t.memoizedState = v, t.flags & ur) {
          var y = Ss(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return gC(e, t, p, a, y);
        } else if (p !== s) {
          var R = Ss(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return gC(e, t, p, a, R);
        } else {
          d1(t);
          var x = pE(t, null, p, a);
          t.child = x;
          for (var O = x; O; )
            O.flags = O.flags & ~en | Lr, O = O.sibling;
        }
      } else {
        if (nf(), p === s)
          return lu(e, t, a);
        Jr(e, t, p, a);
      }
      return t.child;
    }
    function gC(e, t, a, i, u) {
      return nf(), rg(u), t.flags |= ur, Jr(e, t, a, i), t.child;
    }
    function cw(e, t, a) {
      RE(t), e === null && ng(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = jy(i, u);
      return p ? f = null : s !== null && jy(i, s) && (t.flags |= sa), hC(e, t), Jr(e, t, f, a), t.child;
    }
    function fw(e, t) {
      return e === null && ng(t), null;
    }
    function dw(e, t, a, i) {
      Sm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = fk(v), y = Ni(v, u), R;
      switch (m) {
        case q:
          return SS(t, v), t.type = v = Cf(v), R = yS(null, t, v, y, i), R;
        case Z:
          return t.type = v = XS(v), R = mC(null, t, v, y, i), R;
        case De:
          return t.type = v = KS(v), R = fC(null, t, v, y, i), R;
        case nt: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && ki(
              x,
              y,
              // Resolved for outer only
              "prop",
              _t(v)
            );
          }
          return R = dC(
            null,
            t,
            v,
            Ni(v.type, y),
            // The inner type can have defaults too
            i
          ), R;
        }
      }
      var O = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Qe && (O = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + O));
    }
    function pw(e, t, a, i, u) {
      Sm(e, t), t.tag = Z;
      var s;
      return dl(a) ? (s = !0, _h(t)) : s = !1, lf(t, u), iC(t, a, i), oS(t, a, i, u), gS(null, t, a, !0, s, u);
    }
    function vw(e, t, a, i) {
      Sm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Zc(t, a, !1);
        s = Jc(t, f);
      }
      lf(t, i);
      var p, v;
      Xr(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = _t(a) || "Unknown";
          dS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), dS[m] = !0);
        }
        t.mode & Mt && _i.recordLegacyContextWarning(t, null), Qn(!0), Sp.current = t, p = df(null, t, a, u, s, i), v = pf(), Qn(!1);
      }
      if (Kr(), t.flags |= Ma, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = _t(a) || "Unknown";
        Ep[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), Ep[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = _t(a) || "Unknown";
          Ep[R] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Ep[R] = !0);
        }
        t.tag = Z, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return dl(a) ? (x = !0, _h(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, yg(t), aC(t, p), oS(t, a, u, i), gS(null, t, a, !0, x, i);
      } else {
        if (t.tag = q, t.mode & Mt) {
          tn(!0);
          try {
            p = df(null, t, a, u, s, i), v = pf();
          } finally {
            tn(!1);
          }
        }
        return Cr() && v && qy(t), Jr(null, t, p, i), SS(t, a), t.child;
      }
    }
    function SS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ia();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), hS[u] || (hS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = _t(t) || "Unknown";
          Cp[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Cp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = _t(t) || "Unknown";
          vS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), vS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = _t(t) || "Unknown";
          pS[v] || (g("%s: Function components do not support contextType.", v), pS[v] = !0);
        }
      }
    }
    var ES = {
      dehydrated: null,
      treeContext: null,
      retryLane: ht
    };
    function CS(e) {
      return {
        baseLanes: e,
        cachePool: aw(),
        transitions: null
      };
    }
    function hw(e, t) {
      var a = null;
      return {
        baseLanes: Xe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return xg(e, cp);
    }
    function yw(e, t) {
      return Yo(e.childLanes, t);
    }
    function SC(e, t, a) {
      var i = t.pendingProps;
      bk(t) && (t.flags |= Se);
      var u = Oi.current, s = !1, f = (t.flags & Se) !== xe;
      if (f || mw(u, e) ? (s = !0, t.flags &= ~Se) : (e === null || e.memoizedState !== null) && (u = U1(u, bE)), u = of(u), Ku(t, u), e === null) {
        ng(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return xw(t, v);
        }
        var m = i.children, y = i.fallback;
        if (s) {
          var R = gw(t, m, y, a), x = t.child;
          return x.memoizedState = CS(a), t.memoizedState = ES, R;
        } else
          return xS(t, m);
      } else {
        var O = e.memoizedState;
        if (O !== null) {
          var N = O.dehydrated;
          if (N !== null)
            return Tw(e, t, f, i, N, O, a);
        }
        if (s) {
          var z = i.fallback, ne = i.children, we = Ew(e, t, ne, z, a), ge = t.child, dt = e.child.memoizedState;
          return ge.memoizedState = dt === null ? CS(a) : hw(dt, a), ge.childLanes = yw(e, a), t.memoizedState = ES, we;
        } else {
          var ut = i.children, k = Sw(e, t, ut, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function xS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = TS(u, i);
      return s.return = e, e.child = s, s;
    }
    function gw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & et) === Te && s !== null ? (p = s, p.childLanes = H, p.pendingProps = f, e.mode & St && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = ao(a, u, i, null)) : (p = TS(f, u), v = ao(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function TS(e, t, a) {
      return Ex(e, t, H, null);
    }
    function EC(e, t) {
      return ws(e, t);
    }
    function Sw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = EC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & et) === Te && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= oa) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ew(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, m;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & et) === Te && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = H, m.pendingProps = v, t.mode & St && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = EC(f, v), m.subtreeFlags = f.subtreeFlags & Cn;
      var R;
      return p !== null ? R = ws(p, i) : (R = ao(i, s, u, null), R.flags |= en), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function gm(e, t, a, i) {
      i !== null && rg(i), rf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = xS(t, s);
      return f.flags |= en, t.memoizedState = null, f;
    }
    function Cw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = TS(f, s), v = ao(i, s, u, null);
      return v.flags |= en, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & et) !== Te && rf(t, e.child, null, u), v;
    }
    function xw(e, t, a) {
      return (e.mode & et) === Te ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ze) : By(t) ? e.lanes = or : e.lanes = jr, null;
    }
    function Tw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & ur) {
          t.flags &= ~ur;
          var k = sS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return gm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Se, null;
          var U = i.children, D = i.fallback, Y = Cw(e, t, U, D, f), ue = t.child;
          return ue.memoizedState = CS(f), t.memoizedState = ES, Y;
        }
      else {
        if (c1(), (t.mode & et) === Te)
          return gm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (By(u)) {
          var p, v, m;
          {
            var y = kR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = sS(R, p, m);
          return gm(e, t, f, x);
        }
        var O = Hr(f, e.childLanes);
        if (Li || O) {
          var N = _m();
          if (N !== null) {
            var z = Rd(N, f);
            if (z !== ht && z !== s.retryLane) {
              s.retryLane = z;
              var ne = zt;
              ga(e, z), ar(N, e, z, ne);
            }
          }
          YS();
          var we = sS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return gm(e, t, f, we);
        } else if (P0(u)) {
          t.flags |= Se, t.child = e.child;
          var ge = Gb.bind(null, e);
          return DR(u, ge), null;
        } else {
          p1(t, u, s.treeContext);
          var dt = i.children, ut = xS(t, dt);
          return ut.flags |= Lr, ut;
        }
      }
    }
    function CC(e, t, a) {
      e.lanes = Xe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Xe(i.lanes, t)), pg(e.return, t, a);
    }
    function Rw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ee) {
          var u = i.memoizedState;
          u !== null && CC(i, a, e);
        } else if (i.tag === Ut)
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
    function ww(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Kh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function bw(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !mS[e])
        if (mS[e] = !0, typeof e == "string")
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
    function kw(e, t) {
      e !== void 0 && !ym[e] && (e !== "collapsed" && e !== "hidden" ? (ym[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (ym[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function xC(e, t) {
      {
        var a = In(e), i = !a && typeof Ze(e) == "function";
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
            if (!xC(e[a], a))
              return;
        } else {
          var i = Ze(e);
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
    function RS(e, t, a, i, u) {
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
      bw(u), kw(s, u), Dw(f, u), Jr(e, t, f, a);
      var p = Oi.current, v = xg(p, cp);
      if (v)
        p = Tg(p, cp), t.flags |= Se;
      else {
        var m = e !== null && (e.flags & Se) !== xe;
        m && Rw(t, t.child, a), p = of(p);
      }
      if (Ku(t, p), (t.mode & et) === Te)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var y = ww(t.child), R;
            y === null ? (R = t.child, t.child = null) : (R = y.sibling, y.sibling = null), RS(
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
              var N = O.alternate;
              if (N !== null && Kh(N) === null) {
                t.child = O;
                break;
              }
              var z = O.sibling;
              O.sibling = x, x = O, O = z;
            }
            RS(
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
            RS(
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
    function _w(e, t, a) {
      Sg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = rf(t, null, i, a) : Jr(e, t, i, a), t.child;
    }
    var RC = !1;
    function Ow(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || RC || (RC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && ki(v, s, "prop", "Context.Provider");
      }
      if (mE(t, u, p), f !== null) {
        var m = f.value;
        if ($(m, p)) {
          if (f.children === s.children && !kh())
            return lu(e, t, a);
        } else
          b1(t, u, a);
      }
      var y = s.children;
      return Jr(e, t, y, a), t.child;
    }
    var wC = !1;
    function Mw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), lf(t, a);
      var f = $n(i);
      Xr(t);
      var p;
      return Sp.current = t, Qn(!0), p = s(f), Qn(!1), Kr(), t.flags |= Ma, Jr(e, t, p, a), t.child;
    }
    function xp() {
      Li = !0;
    }
    function Sm(e, t) {
      (t.mode & et) === Te && e !== null && (e.alternate = null, t.alternate = null, t.flags |= en);
    }
    function lu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), eC(), zp(t.lanes), Hr(a, t.childLanes) ? (R1(e, t), t.child) : null;
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
        return s === null ? (i.deletions = [e], i.flags |= oa) : s.push(e), a.flags |= en, a;
      }
    }
    function wS(e, t) {
      var a = e.lanes;
      return !!Hr(a, t);
    }
    function Lw(e, t, a) {
      switch (t.tag) {
        case I:
          yC(t), t.stateNode, nf();
          break;
        case ee:
          RE(t);
          break;
        case Z: {
          var i = t.type;
          dl(i) && _h(t);
          break;
        }
        case oe:
          Sg(t, t.stateNode.containerInfo);
          break;
        case Re: {
          var u = t.memoizedProps.value, s = t.type._context;
          mE(t, s, u);
          break;
        }
        case tt:
          {
            var f = Hr(a, t.childLanes);
            f && (t.flags |= st);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ee: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ku(t, of(Oi.current)), t.flags |= Se, null;
            var m = t.child, y = m.childLanes;
            if (Hr(a, y))
              return SC(e, t, a);
            Ku(t, of(Oi.current));
            var R = lu(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            Ku(t, of(Oi.current));
          break;
        }
        case Ut: {
          var x = (e.flags & Se) !== xe, O = Hr(a, t.childLanes);
          if (x) {
            if (O)
              return TC(e, t, a);
            t.flags |= Se;
          }
          var N = t.memoizedState;
          if (N !== null && (N.rendering = null, N.tail = null, N.lastEffect = null), Ku(t, Oi.current), O)
            break;
          return null;
        }
        case _e:
        case At:
          return t.lanes = H, vC(e, t, a);
      }
      return lu(e, t, a);
    }
    function bC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Nw(e, t, t0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || kh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Li = !0;
        else {
          var s = wS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Se) === xe)
            return Li = !1, Lw(e, t, a);
          (e.flags & tc) !== xe ? Li = !0 : Li = !1;
        }
      } else if (Li = !1, Cr() && a1(t)) {
        var f = t.index, p = i1();
        eE(t, p, f);
      }
      switch (t.lanes = H, t.tag) {
        case be:
          return vw(e, t, t.type, a);
        case Pt: {
          var v = t.elementType;
          return dw(e, t, v, a);
        }
        case q: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : Ni(m, y);
          return yS(e, t, m, R, a);
        }
        case Z: {
          var x = t.type, O = t.pendingProps, N = t.elementType === x ? O : Ni(x, O);
          return mC(e, t, x, N, a);
        }
        case I:
          return sw(e, t, a);
        case ee:
          return cw(e, t, a);
        case he:
          return fw(e, t);
        case Ee:
          return SC(e, t, a);
        case oe:
          return _w(e, t, a);
        case De: {
          var z = t.type, ne = t.pendingProps, we = t.elementType === z ? ne : Ni(z, ne);
          return fC(e, t, z, we, a);
        }
        case ke:
          return lw(e, t, a);
        case me:
          return uw(e, t, a);
        case tt:
          return ow(e, t, a);
        case Re:
          return Ow(e, t, a);
        case We:
          return Mw(e, t, a);
        case nt: {
          var ge = t.type, dt = t.pendingProps, ut = Ni(ge, dt);
          if (t.type !== t.elementType) {
            var k = ge.propTypes;
            k && ki(
              k,
              ut,
              // Resolved for outer only
              "prop",
              _t(ge)
            );
          }
          return ut = Ni(ge.type, ut), dC(e, t, ge, ut, a);
        }
        case Ce:
          return pC(e, t, t.type, t.pendingProps, a);
        case mt: {
          var U = t.type, D = t.pendingProps, Y = t.elementType === U ? D : Ni(U, D);
          return pw(e, t, U, Y, a);
        }
        case Ut:
          return TC(e, t, a);
        case gt:
          break;
        case _e:
          return vC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function vf(e) {
      e.flags |= st;
    }
    function kC(e) {
      e.flags |= on, e.flags |= _u;
    }
    var DC, bS, _C, OC;
    DC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ee || u.tag === he)
          tR(e, u.stateNode);
        else if (u.tag !== oe) {
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
    }, bS = function(e, t) {
    }, _C = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Eg(), v = rR(f, a, s, i, u, p);
        t.updateQueue = v, v && vf(t);
      }
    }, OC = function(e, t, a, i) {
      a !== i && vf(t);
    };
    function Tp(e, t) {
      if (!Cr())
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
    function Tr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = H, i = xe;
      if (t) {
        if ((e.mode & St) !== Te) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Xe(a, Xe(m.lanes, m.childLanes)), i |= m.subtreeFlags & Cn, i |= m.flags & Cn, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Xe(a, Xe(y.lanes, y.childLanes)), i |= y.subtreeFlags & Cn, i |= y.flags & Cn, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & St) !== Te) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Xe(a, Xe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Xe(a, Xe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zw(e, t, a) {
      if (g1() && (t.mode & et) !== Te && (t.flags & Se) === xe)
        return uE(t), nf(), t.flags |= ur | Do | Hn, !1;
      var i = zh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (m1(t), Tr(t), (t.mode & St) !== Te) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (nf(), (t.flags & Se) === xe && (t.memoizedState = null), t.flags |= st, Tr(t), (t.mode & St) !== Te) {
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
    function MC(e, t, a) {
      var i = t.pendingProps;
      switch (Zy(t), t.tag) {
        case be:
        case Pt:
        case Ce:
        case q:
        case De:
        case ke:
        case me:
        case tt:
        case We:
        case nt:
          return Tr(t), null;
        case Z: {
          var u = t.type;
          return dl(u) && Dh(t), Tr(t), null;
        }
        case I: {
          var s = t.stateNode;
          if (uf(t), Gy(t), wg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = zh(t);
            if (f)
              vf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & ur) !== xe) && (t.flags |= On, oE());
            }
          }
          return bS(e, t), Tr(t), null;
        }
        case ee: {
          Cg(t);
          var v = TE(), m = t.type;
          if (e !== null && t.stateNode != null)
            _C(e, t, m, i, v), e.ref !== t.ref && kC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Tr(t), null;
            }
            var y = Eg(), R = zh(t);
            if (R)
              v1(t, v, y) && vf(t);
            else {
              var x = eR(m, i, v, y, t);
              DC(x, t, !1, !1), t.stateNode = x, nR(x, m, i, v) && vf(t);
            }
            t.ref !== null && kC(t);
          }
          return Tr(t), null;
        }
        case he: {
          var O = i;
          if (e && t.stateNode != null) {
            var N = e.memoizedProps;
            OC(e, t, N, O);
          } else {
            if (typeof O != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var z = TE(), ne = Eg(), we = zh(t);
            we ? h1(t) && vf(t) : t.stateNode = aR(O, z, ne, t);
          }
          return Tr(t), null;
        }
        case Ee: {
          sf(t);
          var ge = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var dt = zw(e, t, ge);
            if (!dt)
              return t.flags & Hn ? t : null;
          }
          if ((t.flags & Se) !== xe)
            return t.lanes = a, (t.mode & St) !== Te && Kg(t), t;
          var ut = ge !== null, k = e !== null && e.memoizedState !== null;
          if (ut !== k && ut) {
            var U = t.child;
            if (U.flags |= En, (t.mode & et) !== Te) {
              var D = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              D || xg(Oi.current, bE) ? Ub() : YS();
            }
          }
          var Y = t.updateQueue;
          if (Y !== null && (t.flags |= st), Tr(t), (t.mode & St) !== Te && ut) {
            var ue = t.child;
            ue !== null && (t.treeBaseDuration -= ue.treeBaseDuration);
          }
          return null;
        }
        case oe:
          return uf(t), bS(e, t), e === null && qR(t.stateNode.containerInfo), Tr(t), null;
        case Re:
          var ae = t.type._context;
          return dg(ae, t), Tr(t), null;
        case mt: {
          var je = t.type;
          return dl(je) && Dh(t), Tr(t), null;
        }
        case Ut: {
          sf(t);
          var Ye = t.memoizedState;
          if (Ye === null)
            return Tr(t), null;
          var Lt = (t.flags & Se) !== xe, xt = Ye.rendering;
          if (xt === null)
            if (Lt)
              Tp(Ye, !1);
            else {
              var Ln = jb() && (e === null || (e.flags & Se) === xe);
              if (!Ln)
                for (var Tt = t.child; Tt !== null; ) {
                  var kn = Kh(Tt);
                  if (kn !== null) {
                    Lt = !0, t.flags |= Se, Tp(Ye, !1);
                    var Qr = kn.updateQueue;
                    return Qr !== null && (t.updateQueue = Qr, t.flags |= st), t.subtreeFlags = xe, w1(t, a), Ku(t, Tg(Oi.current, cp)), t.child;
                  }
                  Tt = Tt.sibling;
                }
              Ye.tail !== null && Mn() > ZC() && (t.flags |= Se, Lt = !0, Tp(Ye, !1), t.lanes = hd);
            }
          else {
            if (!Lt) {
              var Dr = Kh(xt);
              if (Dr !== null) {
                t.flags |= Se, Lt = !0;
                var Ha = Dr.updateQueue;
                if (Ha !== null && (t.updateQueue = Ha, t.flags |= st), Tp(Ye, !0), Ye.tail === null && Ye.tailMode === "hidden" && !xt.alternate && !Cr())
                  return Tr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Mn() * 2 - Ye.renderingStartTime > ZC() && a !== jr && (t.flags |= Se, Lt = !0, Tp(Ye, !1), t.lanes = hd);
            }
            if (Ye.isBackwards)
              xt.sibling = t.child, t.child = xt;
            else {
              var na = Ye.last;
              na !== null ? na.sibling = xt : t.child = xt, Ye.last = xt;
            }
          }
          if (Ye.tail !== null) {
            var ra = Ye.tail;
            Ye.rendering = ra, Ye.tail = ra.sibling, Ye.renderingStartTime = Mn(), ra.sibling = null;
            var Ir = Oi.current;
            return Lt ? Ir = Tg(Ir, cp) : Ir = of(Ir), Ku(t, Ir), ra;
          }
          return Tr(t), null;
        }
        case gt:
          break;
        case _e:
        case At: {
          PS(t);
          var fu = t.memoizedState, xf = fu !== null;
          if (e !== null) {
            var Fp = e.memoizedState, El = Fp !== null;
            El !== xf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !W && (t.flags |= En);
          }
          return !xf || (t.mode & et) === Te ? Tr(t) : Hr(Sl, jr) && (Tr(t), t.subtreeFlags & (en | st) && (t.flags |= En)), null;
        }
        case Kt:
          return null;
        case Vt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uw(e, t, a) {
      switch (Zy(t), t.tag) {
        case Z: {
          var i = t.type;
          dl(i) && Dh(t);
          var u = t.flags;
          return u & Hn ? (t.flags = u & ~Hn | Se, (t.mode & St) !== Te && Kg(t), t) : null;
        }
        case I: {
          t.stateNode, uf(t), Gy(t), wg();
          var s = t.flags;
          return (s & Hn) !== xe && (s & Se) === xe ? (t.flags = s & ~Hn | Se, t) : null;
        }
        case ee:
          return Cg(t), null;
        case Ee: {
          sf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            nf();
          }
          var p = t.flags;
          return p & Hn ? (t.flags = p & ~Hn | Se, (t.mode & St) !== Te && Kg(t), t) : null;
        }
        case Ut:
          return sf(t), null;
        case oe:
          return uf(t), null;
        case Re:
          var v = t.type._context;
          return dg(v, t), null;
        case _e:
        case At:
          return PS(t), null;
        case Kt:
          return null;
        default:
          return null;
      }
    }
    function NC(e, t, a) {
      switch (Zy(t), t.tag) {
        case Z: {
          var i = t.type.childContextTypes;
          i != null && Dh(t);
          break;
        }
        case I: {
          t.stateNode, uf(t), Gy(t), wg();
          break;
        }
        case ee: {
          Cg(t);
          break;
        }
        case oe:
          uf(t);
          break;
        case Ee:
          sf(t);
          break;
        case Ut:
          sf(t);
          break;
        case Re:
          var u = t.type._context;
          dg(u, t);
          break;
        case _e:
        case At:
          PS(t);
          break;
      }
    }
    var LC = null;
    LC = /* @__PURE__ */ new Set();
    var Em = !1, Rr = !1, Aw = typeof WeakSet == "function" ? WeakSet : Set, pe = null, hf = null, mf = null;
    function jw(e) {
      Gi(null, function() {
        throw e;
      }), ko();
    }
    var Hw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & St)
        try {
          yl(), t.componentWillUnmount();
        } finally {
          ml(e);
        }
      else
        t.componentWillUnmount();
    };
    function zC(e, t) {
      try {
        Ju(Zn, e);
      } catch (a) {
        $t(e, t, a);
      }
    }
    function kS(e, t, a) {
      try {
        Hw(e, a);
      } catch (i) {
        $t(e, t, i);
      }
    }
    function Fw(e, t, a) {
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
    function yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (an && sn && e.mode & St)
              try {
                yl(), i = a(null);
              } finally {
                ml(e);
              }
            else
              i = a(null);
          } catch (u) {
            $t(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          a.current = null;
    }
    function Cm(e, t, a) {
      try {
        a();
      } catch (i) {
        $t(e, t, i);
      }
    }
    var AC = !1;
    function Vw(e, t) {
      ZT(e.containerInfo), pe = t, Bw();
      var a = AC;
      return AC = !1, a;
    }
    function Bw() {
      for (; pe !== null; ) {
        var e = pe, t = e.child;
        (e.subtreeFlags & Ki) !== xe && t !== null ? (t.return = e, pe = t) : $w();
      }
    }
    function $w() {
      for (; pe !== null; ) {
        var e = pe;
        Bt(e);
        try {
          Pw(e);
        } catch (a) {
          $t(e, e.return, a);
        }
        un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, pe = t;
          return;
        }
        pe = e.return;
      }
    }
    function Pw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & On) !== xe) {
        switch (Bt(e), e.tag) {
          case q:
          case De:
          case Ce:
            break;
          case Z: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Es && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ni(e.type, i), u);
              {
                var p = LC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ge(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case I: {
            {
              var v = e.stateNode;
              TR(v.containerInfo);
            }
            break;
          }
          case ee:
          case he:
          case oe:
          case mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        un();
      }
    }
    function zi(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & xr) !== Sa ? Ci(t) : (e & Zn) !== Sa && Oo(t), (e & pl) !== Sa && Ap(!0), Cm(t, a, p), (e & pl) !== Sa && Ap(!1), (e & xr) !== Sa ? el() : (e & Zn) !== Sa && pd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ju(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & xr) !== Sa ? dd(t) : (e & Zn) !== Sa && uc(t);
            var f = s.create;
            (e & pl) !== Sa && Ap(!0), s.destroy = f(), (e & pl) !== Sa && Ap(!1), (e & xr) !== Sa ? bv() : (e & Zn) !== Sa && kv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Zn) !== xe ? v = "useLayoutEffect" : (s.tag & pl) !== xe ? v = "useInsertionEffect" : v = "useEffect";
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
    function Yw(e, t) {
      if ((t.flags & st) !== xe)
        switch (t.tag) {
          case tt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = ZE(), p = t.alternate === null ? "mount" : "update";
            qE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case I:
                  var m = v.stateNode;
                  m.passiveEffectDuration += a;
                  break e;
                case tt:
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
    function Qw(e, t, a, i) {
      if ((a.flags & Zi) !== xe)
        switch (a.tag) {
          case q:
          case De:
          case Ce: {
            if (!Rr)
              if (a.mode & St)
                try {
                  yl(), Ju(Zn | qn, a);
                } finally {
                  ml(a);
                }
              else
                Ju(Zn | qn, a);
            break;
          }
          case Z: {
            var u = a.stateNode;
            if (a.flags & st && !Rr)
              if (t === null)
                if (a.type === a.elementType && !Es && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & St)
                  try {
                    yl(), u.componentDidMount();
                  } finally {
                    ml(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ni(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Es && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & St)
                  try {
                    yl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ml(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Es && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), xE(a, p, u));
            break;
          }
          case I: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ee:
                    m = a.child.stateNode;
                    break;
                  case Z:
                    m = a.child.stateNode;
                    break;
                }
              xE(a, v, m);
            }
            break;
          }
          case ee: {
            var y = a.stateNode;
            if (t === null && a.flags & st) {
              var R = a.type, x = a.memoizedProps;
              sR(y, R, x);
            }
            break;
          }
          case he:
            break;
          case oe:
            break;
          case tt: {
            {
              var O = a.memoizedProps, N = O.onCommit, z = O.onRender, ne = a.stateNode.effectDuration, we = ZE(), ge = t === null ? "mount" : "update";
              qE() && (ge = "nested-update"), typeof z == "function" && z(a.memoizedProps.id, ge, a.actualDuration, a.treeBaseDuration, a.actualStartTime, we);
              {
                typeof N == "function" && N(a.memoizedProps.id, ge, ne, we), $b(a);
                var dt = a.return;
                e: for (; dt !== null; ) {
                  switch (dt.tag) {
                    case I:
                      var ut = dt.stateNode;
                      ut.effectDuration += ne;
                      break e;
                    case tt:
                      var k = dt.stateNode;
                      k.effectDuration += ne;
                      break e;
                  }
                  dt = dt.return;
                }
              }
            }
            break;
          }
          case Ee: {
            Jw(e, a);
            break;
          }
          case Ut:
          case mt:
          case gt:
          case _e:
          case At:
          case Vt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Rr || a.flags & on && jC(a);
    }
    function Iw(e) {
      switch (e.tag) {
        case q:
        case De:
        case Ce: {
          if (e.mode & St)
            try {
              yl(), zC(e, e.return);
            } finally {
              ml(e);
            }
          else
            zC(e, e.return);
          break;
        }
        case Z: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Fw(e, e.return, t), UC(e, e.return);
          break;
        }
        case ee: {
          UC(e, e.return);
          break;
        }
      }
    }
    function Ww(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ee) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? SR(u) : CR(i.stateNode, i.memoizedProps);
            } catch (f) {
              $t(e, e.return, f);
            }
          }
        } else if (i.tag === he) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ER(s) : xR(s, i.memoizedProps);
            } catch (f) {
              $t(e, e.return, f);
            }
        } else if (!((i.tag === _e || i.tag === At) && i.memoizedState !== null && i !== e)) {
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
          case ee:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & St)
            try {
              yl(), u = t(i);
            } finally {
              ml(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ge(e)), t.current = i;
      }
    }
    function Gw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function HC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, HC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ee) {
          var a = e.stateNode;
          a !== null && e1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Xw(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === ee || e.tag === I || e.tag === oe;
    }
    function VC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ee && t.tag !== he && t.tag !== yt; ) {
          if (t.flags & en || t.child === null || t.tag === oe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & en))
          return t.stateNode;
      }
    }
    function Kw(e) {
      var t = Xw(e);
      switch (t.tag) {
        case ee: {
          var a = t.stateNode;
          t.flags & sa && ($0(a), t.flags &= ~sa);
          var i = VC(e);
          _S(e, i, a);
          break;
        }
        case I:
        case oe: {
          var u = t.stateNode.containerInfo, s = VC(e);
          DS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === ee || i === he;
      if (u) {
        var s = e.stateNode;
        t ? hR(a, s, t) : pR(a, s);
      } else if (i !== oe) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === ee || i === he;
      if (u) {
        var s = e.stateNode;
        t ? vR(a, s, t) : dR(a, s);
      } else if (i !== oe) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var wr = null, Ui = !1;
    function qw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ee: {
              wr = i.stateNode, Ui = !1;
              break e;
            }
            case I: {
              wr = i.stateNode.containerInfo, Ui = !0;
              break e;
            }
            case oe: {
              wr = i.stateNode.containerInfo, Ui = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (wr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        BC(e, t, a), wr = null, Ui = !1;
      }
      Gw(a);
    }
    function eo(e, t, a) {
      for (var i = a.child; i !== null; )
        BC(e, t, i), i = i.sibling;
    }
    function BC(e, t, a) {
      switch (sd(a), a.tag) {
        case ee:
          Rr || yf(a, t);
        case he: {
          {
            var i = wr, u = Ui;
            wr = null, eo(e, t, a), wr = i, Ui = u, wr !== null && (Ui ? yR(wr, a.stateNode) : mR(wr, a.stateNode));
          }
          return;
        }
        case yt: {
          wr !== null && (Ui ? gR(wr, a.stateNode) : Vy(wr, a.stateNode));
          return;
        }
        case oe: {
          {
            var s = wr, f = Ui;
            wr = a.stateNode.containerInfo, Ui = !0, eo(e, t, a), wr = s, Ui = f;
          }
          return;
        }
        case q:
        case De:
        case nt:
        case Ce: {
          if (!Rr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, x = R.destroy, O = R.tag;
                  x !== void 0 && ((O & pl) !== Sa ? Cm(a, t, x) : (O & Zn) !== Sa && (Oo(a), a.mode & St ? (yl(), Cm(a, t, x), ml(a)) : Cm(a, t, x), pd())), y = y.next;
                } while (y !== m);
              }
            }
          }
          eo(e, t, a);
          return;
        }
        case Z: {
          if (!Rr) {
            yf(a, t);
            var N = a.stateNode;
            typeof N.componentWillUnmount == "function" && kS(a, t, N);
          }
          eo(e, t, a);
          return;
        }
        case gt: {
          eo(e, t, a);
          return;
        }
        case _e: {
          if (
            // TODO: Remove this dead flag
            a.mode & et
          ) {
            var z = Rr;
            Rr = z || a.memoizedState !== null, eo(e, t, a), Rr = z;
          } else
            eo(e, t, a);
          break;
        }
        default: {
          eo(e, t, a);
          return;
        }
      }
    }
    function Zw(e) {
      e.memoizedState;
    }
    function Jw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && jR(s);
          }
        }
      }
    }
    function $C(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Aw()), t.forEach(function(i) {
          var u = Xb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ar)
              if (hf !== null && mf !== null)
                Up(mf, hf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function eb(e, t, a) {
      hf = a, mf = e, Bt(t), PC(t, e), Bt(t), hf = null, mf = null;
    }
    function Ai(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            qw(e, t, s);
          } catch (v) {
            $t(s, t, v);
          }
        }
      var f = co();
      if (t.subtreeFlags & qi)
        for (var p = t.child; p !== null; )
          Bt(p), PC(p, e), p = p.sibling;
      Bt(f);
    }
    function PC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case q:
        case De:
        case nt:
        case Ce: {
          if (Ai(t, e), gl(e), u & st) {
            try {
              zi(pl | qn, e, e.return), Ju(pl | qn, e);
            } catch (je) {
              $t(e, e.return, je);
            }
            if (e.mode & St) {
              try {
                yl(), zi(Zn | qn, e, e.return);
              } catch (je) {
                $t(e, e.return, je);
              }
              ml(e);
            } else
              try {
                zi(Zn | qn, e, e.return);
              } catch (je) {
                $t(e, e.return, je);
              }
          }
          return;
        }
        case Z: {
          Ai(t, e), gl(e), u & on && i !== null && yf(i, i.return);
          return;
        }
        case ee: {
          Ai(t, e), gl(e), u & on && i !== null && yf(i, i.return);
          {
            if (e.flags & sa) {
              var s = e.stateNode;
              try {
                $0(s);
              } catch (je) {
                $t(e, e.return, je);
              }
            }
            if (u & st) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    cR(f, y, m, v, p, e);
                  } catch (je) {
                    $t(e, e.return, je);
                  }
              }
            }
          }
          return;
        }
        case he: {
          if (Ai(t, e), gl(e), u & st) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, x = e.memoizedProps, O = i !== null ? i.memoizedProps : x;
            try {
              fR(R, O, x);
            } catch (je) {
              $t(e, e.return, je);
            }
          }
          return;
        }
        case I: {
          if (Ai(t, e), gl(e), u & st && i !== null) {
            var N = i.memoizedState;
            if (N.isDehydrated)
              try {
                AR(t.containerInfo);
              } catch (je) {
                $t(e, e.return, je);
              }
          }
          return;
        }
        case oe: {
          Ai(t, e), gl(e);
          return;
        }
        case Ee: {
          Ai(t, e), gl(e);
          var z = e.child;
          if (z.flags & En) {
            var ne = z.stateNode, we = z.memoizedState, ge = we !== null;
            if (ne.isHidden = ge, ge) {
              var dt = z.alternate !== null && z.alternate.memoizedState !== null;
              dt || zb();
            }
          }
          if (u & st) {
            try {
              Zw(e);
            } catch (je) {
              $t(e, e.return, je);
            }
            $C(e);
          }
          return;
        }
        case _e: {
          var ut = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & et
          ) {
            var k = Rr;
            Rr = k || ut, Ai(t, e), Rr = k;
          } else
            Ai(t, e);
          if (gl(e), u & En) {
            var U = e.stateNode, D = e.memoizedState, Y = D !== null, ue = e;
            if (U.isHidden = Y, Y && !ut && (ue.mode & et) !== Te) {
              pe = ue;
              for (var ae = ue.child; ae !== null; )
                pe = ae, nb(ae), ae = ae.sibling;
            }
            Ww(ue, Y);
          }
          return;
        }
        case Ut: {
          Ai(t, e), gl(e), u & st && $C(e);
          return;
        }
        case gt:
          return;
        default: {
          Ai(t, e), gl(e);
          return;
        }
      }
    }
    function gl(e) {
      var t = e.flags;
      if (t & en) {
        try {
          Kw(e);
        } catch (a) {
          $t(e, e.return, a);
        }
        e.flags &= ~en;
      }
      t & Lr && (e.flags &= ~Lr);
    }
    function tb(e, t, a) {
      hf = a, mf = t, pe = e, YC(e, t, a), hf = null, mf = null;
    }
    function YC(e, t, a) {
      for (var i = (e.mode & et) !== Te; pe !== null; ) {
        var u = pe, s = u.child;
        if (u.tag === _e && i) {
          var f = u.memoizedState !== null, p = f || Em;
          if (p) {
            OS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || Rr, R = Em, x = Rr;
            Em = p, Rr = y, Rr && !x && (pe = u, rb(u));
            for (var O = s; O !== null; )
              pe = O, YC(
                O,
                // New root; bubble back up to here and stop.
                t,
                a
              ), O = O.sibling;
            pe = u, Em = R, Rr = x, OS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Zi) !== xe && s !== null ? (s.return = u, pe = s) : OS(e, t, a);
      }
    }
    function OS(e, t, a) {
      for (; pe !== null; ) {
        var i = pe;
        if ((i.flags & Zi) !== xe) {
          var u = i.alternate;
          Bt(i);
          try {
            Qw(t, u, i, a);
          } catch (f) {
            $t(i, i.return, f);
          }
          un();
        }
        if (i === e) {
          pe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, pe = s;
          return;
        }
        pe = i.return;
      }
    }
    function nb(e) {
      for (; pe !== null; ) {
        var t = pe, a = t.child;
        switch (t.tag) {
          case q:
          case De:
          case nt:
          case Ce: {
            if (t.mode & St)
              try {
                yl(), zi(Zn, t, t.return);
              } finally {
                ml(t);
              }
            else
              zi(Zn, t, t.return);
            break;
          }
          case Z: {
            yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && kS(t, t.return, i);
            break;
          }
          case ee: {
            yf(t, t.return);
            break;
          }
          case _e: {
            var u = t.memoizedState !== null;
            if (u) {
              QC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, pe = a) : QC(e);
      }
    }
    function QC(e) {
      for (; pe !== null; ) {
        var t = pe;
        if (t === e) {
          pe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, pe = a;
          return;
        }
        pe = t.return;
      }
    }
    function rb(e) {
      for (; pe !== null; ) {
        var t = pe, a = t.child;
        if (t.tag === _e) {
          var i = t.memoizedState !== null;
          if (i) {
            IC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, pe = a) : IC(e);
      }
    }
    function IC(e) {
      for (; pe !== null; ) {
        var t = pe;
        Bt(t);
        try {
          Iw(t);
        } catch (i) {
          $t(t, t.return, i);
        }
        if (un(), t === e) {
          pe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, pe = a;
          return;
        }
        pe = t.return;
      }
    }
    function ab(e, t, a, i) {
      pe = t, ib(t, e, a, i);
    }
    function ib(e, t, a, i) {
      for (; pe !== null; ) {
        var u = pe, s = u.child;
        (u.subtreeFlags & Si) !== xe && s !== null ? (s.return = u, pe = s) : lb(e, t, a, i);
      }
    }
    function lb(e, t, a, i) {
      for (; pe !== null; ) {
        var u = pe;
        if ((u.flags & Nr) !== xe) {
          Bt(u);
          try {
            ub(t, u, a, i);
          } catch (f) {
            $t(u, u.return, f);
          }
          un();
        }
        if (u === e) {
          pe = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, pe = s;
          return;
        }
        pe = u.return;
      }
    }
    function ub(e, t, a, i) {
      switch (t.tag) {
        case q:
        case De:
        case Ce: {
          if (t.mode & St) {
            Xg();
            try {
              Ju(xr | qn, t);
            } finally {
              Gg(t);
            }
          } else
            Ju(xr | qn, t);
          break;
        }
      }
    }
    function ob(e) {
      pe = e, sb();
    }
    function sb() {
      for (; pe !== null; ) {
        var e = pe, t = e.child;
        if ((pe.flags & oa) !== xe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              pe = u, db(u, e);
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
            pe = e;
          }
        }
        (e.subtreeFlags & Si) !== xe && t !== null ? (t.return = e, pe = t) : cb();
      }
    }
    function cb() {
      for (; pe !== null; ) {
        var e = pe;
        (e.flags & Nr) !== xe && (Bt(e), fb(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, pe = t;
          return;
        }
        pe = e.return;
      }
    }
    function fb(e) {
      switch (e.tag) {
        case q:
        case De:
        case Ce: {
          e.mode & St ? (Xg(), zi(xr | qn, e, e.return), Gg(e)) : zi(xr | qn, e, e.return);
          break;
        }
      }
    }
    function db(e, t) {
      for (; pe !== null; ) {
        var a = pe;
        Bt(a), vb(a, t), un();
        var i = a.child;
        i !== null ? (i.return = a, pe = i) : pb(e);
      }
    }
    function pb(e) {
      for (; pe !== null; ) {
        var t = pe, a = t.sibling, i = t.return;
        if (HC(t), t === e) {
          pe = null;
          return;
        }
        if (a !== null) {
          a.return = i, pe = a;
          return;
        }
        pe = i;
      }
    }
    function vb(e, t) {
      switch (e.tag) {
        case q:
        case De:
        case Ce: {
          e.mode & St ? (Xg(), zi(xr, e, t), Gg(e)) : zi(xr, e, t);
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case q:
        case De:
        case Ce: {
          try {
            Ju(Zn | qn, e);
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
    function mb(e) {
      switch (e.tag) {
        case q:
        case De:
        case Ce: {
          try {
            Ju(xr | qn, e);
          } catch (t) {
            $t(e, e.return, t);
          }
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case q:
        case De:
        case Ce: {
          try {
            zi(Zn | qn, e, e.return);
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
        case Z: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && kS(e, e.return, t);
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case q:
        case De:
        case Ce:
          try {
            zi(xr | qn, e, e.return);
          } catch (t) {
            $t(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Rp = Symbol.for;
      Rp("selector.component"), Rp("selector.has_pseudo_class"), Rp("selector.role"), Rp("selector.test_id"), Rp("selector.text");
    }
    var Sb = [];
    function Eb() {
      Sb.forEach(function(e) {
        return e();
      });
    }
    var Cb = w.ReactCurrentActQueue;
    function xb(e) {
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
        return !e && Cb.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Tb = Math.ceil, MS = w.ReactCurrentDispatcher, NS = w.ReactCurrentOwner, br = w.ReactCurrentBatchConfig, ji = w.ReactCurrentActQueue, tr = (
      /*             */
      0
    ), GC = (
      /*               */
      1
    ), kr = (
      /*                */
      2
    ), ii = (
      /*                */
      4
    ), uu = 0, wp = 1, Cs = 2, xm = 3, bp = 4, XC = 5, LS = 6, ft = tr, ea = null, mn = null, nr = H, Sl = H, zS = Yu(H), rr = uu, kp = null, Tm = H, Dp = H, Rm = H, _p = null, Ea = null, US = 0, KC = 500, qC = 1 / 0, Rb = 500, ou = null;
    function Op() {
      qC = Mn() + Rb;
    }
    function ZC() {
      return qC;
    }
    var wm = !1, AS = null, gf = null, xs = !1, to = null, Mp = H, jS = [], HS = null, wb = 50, Np = 0, FS = null, VS = !1, bm = !1, bb = 50, Sf = 0, km = null, Lp = zt, Dm = H, JC = !1;
    function _m() {
      return ea;
    }
    function ta() {
      return (ft & (kr | ii)) !== tr ? Mn() : (Lp !== zt || (Lp = Mn()), Lp);
    }
    function no(e) {
      var t = e.mode;
      if ((t & et) === Te)
        return ze;
      if ((ft & kr) !== tr && nr !== H)
        return Po(nr);
      var a = C1() !== E1;
      if (a) {
        if (br.transition !== null) {
          var i = br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Dm === ht && (Dm = Cd()), Dm;
      }
      var u = ha();
      if (u !== ht)
        return u;
      var s = iR();
      return s;
    }
    function kb(e) {
      var t = e.mode;
      return (t & et) === Te ? ze : Lv();
    }
    function ar(e, t, a, i) {
      qb(), JC && g("useInsertionEffect must not schedule updates."), VS && (bm = !0), Lu(e, a, i), (ft & kr) !== H && e === ea ? ek(t) : (Ar && Io(e, t, a), tk(t), e === ea && ((ft & kr) === tr && (Dp = Xe(Dp, a)), rr === bp && ro(e, nr)), Ca(e, i), a === ze && ft === tr && (t.mode & et) === Te && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ji.isBatchingLegacy && (Op(), J0()));
    }
    function Db(e, t, a) {
      var i = e.current;
      i.lanes = t, Lu(e, t, a), Ca(e, a);
    }
    function _b(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (ft & kr) !== tr
      );
    }
    function Ca(e, t) {
      var a = e.callbackNode;
      kc(e, t);
      var i = bc(e, e === ea ? nr : H);
      if (i === H) {
        a !== null && hx(a), e.callbackNode = null, e.callbackPriority = ht;
        return;
      }
      var u = rl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ji.current !== null && a !== WS)) {
        a == null && s !== ze && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && hx(a);
      var f;
      if (u === ze)
        e.tag === Qu ? (ji.isBatchingLegacy !== null && (ji.didScheduleLegacyUpdate = !0), r1(nx.bind(null, e))) : Z0(nx.bind(null, e)), ji.current !== null ? ji.current.push(Iu) : uR(function() {
          (ft & (kr | ii)) === tr && Iu();
        }), f = null;
      else {
        var p;
        switch (Vv(i)) {
          case mr:
            p = _o;
            break;
          case Xa:
            p = Ji;
            break;
          case pa:
            p = Ei;
            break;
          case va:
            p = Ul;
            break;
          default:
            p = Ei;
            break;
        }
        f = GS(p, ex.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function ex(e, t) {
      if (W1(), Lp = zt, Dm = H, (ft & (kr | ii)) !== tr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = cu();
      if (i && e.callbackNode !== a)
        return null;
      var u = bc(e, e === ea ? nr : H);
      if (u === H)
        return null;
      var s = !_c(e, u) && !Nv(e, u) && !t, f = s ? Fb(e, u) : Mm(e, u);
      if (f !== uu) {
        if (f === Cs) {
          var p = Dc(e);
          p !== H && (u = p, f = BS(e, p));
        }
        if (f === wp) {
          var v = kp;
          throw Ts(e, H), ro(e, u), Ca(e, Mn()), v;
        }
        if (f === LS)
          ro(e, u);
        else {
          var m = !_c(e, u), y = e.current.alternate;
          if (m && !Mb(y)) {
            if (f = Mm(e, u), f === Cs) {
              var R = Dc(e);
              R !== H && (u = R, f = BS(e, R));
            }
            if (f === wp) {
              var x = kp;
              throw Ts(e, H), ro(e, u), Ca(e, Mn()), x;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, Ob(e, f, u);
        }
      }
      return Ca(e, Mn()), e.callbackNode === a ? ex.bind(null, e) : null;
    }
    function BS(e, t) {
      var a = _p;
      if (Nc(e)) {
        var i = Ts(e, t);
        i.flags |= ur, KR(e.containerInfo);
      }
      var u = Mm(e, t);
      if (u !== Cs) {
        var s = Ea;
        Ea = a, s !== null && tx(s);
      }
      return u;
    }
    function tx(e) {
      Ea === null ? Ea = e : Ea.push.apply(Ea, e);
    }
    function Ob(e, t, a) {
      switch (t) {
        case uu:
        case wp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Cs: {
          Rs(e, Ea, ou);
          break;
        }
        case xm: {
          if (ro(e, a), Il(a) && // do not delay if we're inside an act() scope
          !mx()) {
            var i = US + KC - Mn();
            if (i > 10) {
              var u = bc(e, H);
              if (u !== H)
                break;
              var s = e.suspendedLanes;
              if (!Wl(s, a)) {
                ta(), Oc(e, s);
                break;
              }
              e.timeoutHandle = Hy(Rs.bind(null, e, Ea, ou), i);
              break;
            }
          }
          Rs(e, Ea, ou);
          break;
        }
        case bp: {
          if (ro(e, a), Sd(a))
            break;
          if (!mx()) {
            var f = La(e, a), p = f, v = Mn() - p, m = Kb(v) - v;
            if (m > 10) {
              e.timeoutHandle = Hy(Rs.bind(null, e, Ea, ou), m);
              break;
            }
          }
          Rs(e, Ea, ou);
          break;
        }
        case XC: {
          Rs(e, Ea, ou);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Mb(e) {
      for (var t = e; ; ) {
        if (t.flags & Du) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!$(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Du && v !== null) {
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
    function ro(e, t) {
      t = Yo(t, Rm), t = Yo(t, Dp), Av(e, t);
    }
    function nx(e) {
      if (G1(), (ft & (kr | ii)) !== tr)
        throw new Error("Should not already be working.");
      cu();
      var t = bc(e, H);
      if (!Hr(t, ze))
        return Ca(e, Mn()), null;
      var a = Mm(e, t);
      if (e.tag !== Qu && a === Cs) {
        var i = Dc(e);
        i !== H && (t = i, a = BS(e, i));
      }
      if (a === wp) {
        var u = kp;
        throw Ts(e, H), ro(e, t), Ca(e, Mn()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Rs(e, Ea, ou), Ca(e, Mn()), null;
    }
    function Nb(e, t) {
      t !== H && (Mc(e, Xe(t, ze)), Ca(e, Mn()), (ft & (kr | ii)) === tr && (Op(), Iu()));
    }
    function $S(e, t) {
      var a = ft;
      ft |= GC;
      try {
        return e(t);
      } finally {
        ft = a, ft === tr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ji.isBatchingLegacy && (Op(), J0());
      }
    }
    function Lb(e, t, a, i, u) {
      var s = ha(), f = br.transition;
      try {
        return br.transition = null, Rn(mr), e(t, a, i, u);
      } finally {
        Rn(s), br.transition = f, ft === tr && Op();
      }
    }
    function su(e) {
      to !== null && to.tag === Qu && (ft & (kr | ii)) === tr && cu();
      var t = ft;
      ft |= GC;
      var a = br.transition, i = ha();
      try {
        return br.transition = null, Rn(mr), e ? e() : void 0;
      } finally {
        Rn(i), br.transition = a, ft = t, (ft & (kr | ii)) === tr && Iu();
      }
    }
    function rx() {
      return (ft & (kr | ii)) !== tr;
    }
    function Om(e, t) {
      Pr(zS, Sl, e), Sl = Xe(Sl, t);
    }
    function PS(e) {
      Sl = zS.current, $r(zS, e);
    }
    function Ts(e, t) {
      e.finishedWork = null, e.finishedLanes = H;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, lR(a)), mn !== null)
        for (var i = mn.return; i !== null; ) {
          var u = i.alternate;
          NC(u, i), i = i.return;
        }
      ea = e;
      var s = ws(e.current, null);
      return mn = s, nr = Sl = t, rr = uu, kp = null, Tm = H, Dp = H, Rm = H, _p = null, Ea = null, D1(), _i.discardPendingWarnings(), s;
    }
    function ax(e, t) {
      do {
        var a = mn;
        try {
          if (Vh(), DE(), un(), NS.current = null, a === null || a.return === null) {
            rr = wp, kp = t, mn = null;
            return;
          }
          if (an && a.mode & St && hm(a, !0), Yt)
            if (Kr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ga(a, i, nr);
            } else
              Mo(a, t, nr);
          rw(e, a.return, a, t, nr), ox(a);
        } catch (u) {
          t = u, mn === a && a !== null ? (a = a.return, mn = a) : a = mn;
          continue;
        }
        return;
      } while (!0);
    }
    function ix() {
      var e = MS.current;
      return MS.current = cm, e === null ? cm : e;
    }
    function lx(e) {
      MS.current = e;
    }
    function zb() {
      US = Mn();
    }
    function zp(e) {
      Tm = Xe(e, Tm);
    }
    function Ub() {
      rr === uu && (rr = xm);
    }
    function YS() {
      (rr === uu || rr === xm || rr === Cs) && (rr = bp), ea !== null && ($o(Tm) || $o(Dp)) && ro(ea, nr);
    }
    function Ab(e) {
      rr !== bp && (rr = Cs), _p === null ? _p = [e] : _p.push(e);
    }
    function jb() {
      return rr === uu;
    }
    function Mm(e, t) {
      var a = ft;
      ft |= kr;
      var i = ix();
      if (ea !== e || nr !== t) {
        if (Ar) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Up(e, nr), u.clear()), jv(e, t);
        }
        ou = wd(), Ts(e, t);
      }
      Fl(t);
      do
        try {
          Hb();
          break;
        } catch (s) {
          ax(e, s);
        }
      while (!0);
      if (Vh(), ft = a, lx(i), mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return oc(), ea = null, nr = H, rr;
    }
    function Hb() {
      for (; mn !== null; )
        ux(mn);
    }
    function Fb(e, t) {
      var a = ft;
      ft |= kr;
      var i = ix();
      if (ea !== e || nr !== t) {
        if (Ar) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Up(e, nr), u.clear()), jv(e, t);
        }
        ou = wd(), Op(), Ts(e, t);
      }
      Fl(t);
      do
        try {
          Vb();
          break;
        } catch (s) {
          ax(e, s);
        }
      while (!0);
      return Vh(), lx(i), ft = a, mn !== null ? (Dv(), uu) : (oc(), ea = null, nr = H, rr);
    }
    function Vb() {
      for (; mn !== null && !ad(); )
        ux(mn);
    }
    function ux(e) {
      var t = e.alternate;
      Bt(e);
      var a;
      (e.mode & St) !== Te ? (Wg(e), a = QS(t, e, Sl), hm(e, !0)) : a = QS(t, e, Sl), un(), e.memoizedProps = e.pendingProps, a === null ? ox(e) : mn = a, NS.current = null;
    }
    function ox(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Do) === xe) {
          Bt(t);
          var u = void 0;
          if ((t.mode & St) === Te ? u = MC(a, t, Sl) : (Wg(t), u = MC(a, t, Sl), hm(t, !1)), un(), u !== null) {
            mn = u;
            return;
          }
        } else {
          var s = Uw(a, t);
          if (s !== null) {
            s.flags &= xv, mn = s;
            return;
          }
          if ((t.mode & St) !== Te) {
            hm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Do, i.subtreeFlags = xe, i.deletions = null;
          else {
            rr = LS, mn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          mn = v;
          return;
        }
        t = i, mn = t;
      } while (t !== null);
      rr === uu && (rr = XC);
    }
    function Rs(e, t, a) {
      var i = ha(), u = br.transition;
      try {
        br.transition = null, Rn(mr), Bb(e, t, a, i);
      } finally {
        br.transition = u, Rn(i);
      }
      return null;
    }
    function Bb(e, t, a, i) {
      do
        cu();
      while (to !== null);
      if (Zb(), (ft & (kr | ii)) !== tr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (cd(s), u === null)
        return fd(), null;
      if (s === H && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = H, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = ht;
      var f = Xe(u.lanes, u.childLanes);
      Td(e, f), e === ea && (ea = null, mn = null, nr = H), ((u.subtreeFlags & Si) !== xe || (u.flags & Si) !== xe) && (xs || (xs = !0, HS = a, GS(Ei, function() {
        return cu(), null;
      })));
      var p = (u.subtreeFlags & (Ki | qi | Zi | Si)) !== xe, v = (u.flags & (Ki | qi | Zi | Si)) !== xe;
      if (p || v) {
        var m = br.transition;
        br.transition = null;
        var y = ha();
        Rn(mr);
        var R = ft;
        ft |= ii, NS.current = null, Vw(e, u), JE(), eb(e, u, s), JT(e.containerInfo), e.current = u, No(s), tb(u, e, s), Lo(), id(), ft = R, Rn(y), br.transition = m;
      } else
        e.current = u, JE();
      var x = xs;
      if (xs ? (xs = !1, to = e, Mp = s) : (Sf = 0, km = null), f = e.pendingLanes, f === H && (gf = null), x || dx(e.current, !1), ud(u.stateNode, i), Ar && e.memoizedUpdaters.clear(), Eb(), Ca(e, Mn()), t !== null)
        for (var O = e.onRecoverableError, N = 0; N < t.length; N++) {
          var z = t[N], ne = z.stack, we = z.digest;
          O(z.value, {
            componentStack: ne,
            digest: we
          });
        }
      if (wm) {
        wm = !1;
        var ge = AS;
        throw AS = null, ge;
      }
      return Hr(Mp, ze) && e.tag !== Qu && cu(), f = e.pendingLanes, Hr(f, ze) ? (I1(), e === FS ? Np++ : (Np = 0, FS = e)) : Np = 0, Iu(), fd(), null;
    }
    function cu() {
      if (to !== null) {
        var e = Vv(Mp), t = Go(pa, e), a = br.transition, i = ha();
        try {
          return br.transition = null, Rn(t), Pb();
        } finally {
          Rn(i), br.transition = a;
        }
      }
      return !1;
    }
    function $b(e) {
      jS.push(e), xs || (xs = !0, GS(Ei, function() {
        return cu(), null;
      }));
    }
    function Pb() {
      if (to === null)
        return !1;
      var e = HS;
      HS = null;
      var t = to, a = Mp;
      if (to = null, Mp = H, (ft & (kr | ii)) !== tr)
        throw new Error("Cannot flush passive effects while already rendering.");
      VS = !0, bm = !1, Hl(a);
      var i = ft;
      ft |= ii, ob(t.current), ab(t, t.current, a, e);
      {
        var u = jS;
        jS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Yw(t, f);
        }
      }
      vd(), dx(t.current, !0), ft = i, Iu(), bm ? t === km ? Sf++ : (Sf = 0, km = t) : Sf = 0, VS = !1, bm = !1, od(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function sx(e) {
      return gf !== null && gf.has(e);
    }
    function Yb(e) {
      gf === null ? gf = /* @__PURE__ */ new Set([e]) : gf.add(e);
    }
    function Qb(e) {
      wm || (wm = !0, AS = e);
    }
    var Ib = Qb;
    function cx(e, t, a) {
      var i = Ss(a, t), u = uC(e, i, ze), s = Gu(e, u, ze), f = ta();
      s !== null && (Lu(s, ze, f), Ca(s, f));
    }
    function $t(e, t, a) {
      if (jw(a), Ap(!1), e.tag === I) {
        cx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === I) {
          cx(i, e, a);
          return;
        } else if (i.tag === Z) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !sx(s)) {
            var f = Ss(a, e), p = fS(i, f, ze), v = Gu(i, p, ze), m = ta();
            v !== null && (Lu(v, ze, m), Ca(v, m));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Wb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ta();
      Oc(e, a), nk(e), ea === e && Wl(nr, a) && (rr === bp || rr === xm && Il(nr) && Mn() - US < KC ? Ts(e, H) : Rm = Xe(Rm, a)), Ca(e, u);
    }
    function fx(e, t) {
      t === ht && (t = kb(e));
      var a = ta(), i = ga(e, t);
      i !== null && (Lu(i, t, a), Ca(i, a));
    }
    function Gb(e) {
      var t = e.memoizedState, a = ht;
      t !== null && (a = t.retryLane), fx(e, a);
    }
    function Xb(e, t) {
      var a = ht, i;
      switch (e.tag) {
        case Ee:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Ut:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), fx(e, a);
    }
    function Kb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Tb(e / 1960) * 1960;
    }
    function qb() {
      if (Np > wb)
        throw Np = 0, FS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Sf > bb && (Sf = 0, km = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Zb() {
      _i.flushLegacyContextWarning(), _i.flushPendingUnsafeLifecycleWarnings();
    }
    function dx(e, t) {
      Bt(e), Nm(e, Xi, yb), t && Nm(e, Qa, gb), Nm(e, Xi, hb), t && Nm(e, Qa, mb), un();
    }
    function Nm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== xe ? i = i.child : ((i.flags & t) !== xe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Lm = null;
    function px(e) {
      {
        if ((ft & kr) !== tr || !(e.mode & et))
          return;
        var t = e.tag;
        if (t !== be && t !== I && t !== Z && t !== q && t !== De && t !== nt && t !== Ce)
          return;
        var a = Ge(e) || "ReactComponent";
        if (Lm !== null) {
          if (Lm.has(a))
            return;
          Lm.add(a);
        } else
          Lm = /* @__PURE__ */ new Set([a]);
        var i = hr;
        try {
          Bt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Bt(e) : un();
        }
      }
    }
    var QS;
    {
      var Jb = null;
      QS = function(e, t, a) {
        var i = Cx(Jb, t);
        try {
          return bC(e, t, a);
        } catch (s) {
          if (f1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Vh(), DE(), NC(e, t), Cx(t, i), t.mode & St && Wg(t), Gi(null, bC, null, e, t, a), yi()) {
            var u = ko();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var vx = !1, IS;
    IS = /* @__PURE__ */ new Set();
    function ek(e) {
      if ($i && !P1())
        switch (e.tag) {
          case q:
          case De:
          case Ce: {
            var t = mn && Ge(mn) || "Unknown", a = t;
            if (!IS.has(a)) {
              IS.add(a);
              var i = Ge(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case Z: {
            vx || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), vx = !0);
            break;
          }
        }
    }
    function Up(e, t) {
      if (Ar) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Io(e, i, t);
        });
      }
    }
    var WS = {};
    function GS(e, t) {
      {
        var a = ji.current;
        return a !== null ? (a.push(t), WS) : rd(e, t);
      }
    }
    function hx(e) {
      if (e !== WS)
        return Rv(e);
    }
    function mx() {
      return ji.current !== null;
    }
    function tk(e) {
      {
        if (e.mode & et) {
          if (!WC())
            return;
        } else if (!xb() || ft !== tr || e.tag !== q && e.tag !== De && e.tag !== Ce)
          return;
        if (ji.current === null) {
          var t = hr;
          try {
            Bt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ge(e));
          } finally {
            t ? Bt(e) : un();
          }
        }
      }
    }
    function nk(e) {
      e.tag !== Qu && WC() && ji.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ap(e) {
      JC = e;
    }
    var li = null, Ef = null, rk = function(e) {
      li = e;
    };
    function Cf(e) {
      {
        if (li === null)
          return e;
        var t = li(e);
        return t === void 0 ? e : t.current;
      }
    }
    function XS(e) {
      return Cf(e);
    }
    function KS(e) {
      {
        if (li === null)
          return e;
        var t = li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Cf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: V,
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
        if (li === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case Z: {
            typeof i == "function" && (u = !0);
            break;
          }
          case q: {
            (typeof i == "function" || s === Qe) && (u = !0);
            break;
          }
          case De: {
            (s === V || s === Qe) && (u = !0);
            break;
          }
          case nt:
          case Ce: {
            (s === qe || s === Qe) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = li(a);
          if (f !== void 0 && f === li(i))
            return !0;
        }
        return !1;
      }
    }
    function gx(e) {
      {
        if (li === null || typeof WeakSet != "function")
          return;
        Ef === null && (Ef = /* @__PURE__ */ new WeakSet()), Ef.add(e);
      }
    }
    var ak = function(e, t) {
      {
        if (li === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        cu(), su(function() {
          qS(e.current, i, a);
        });
      }
    }, ik = function(e, t) {
      {
        if (e.context !== Aa)
          return;
        cu(), su(function() {
          jp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case q:
          case Ce:
          case Z:
            v = p;
            break;
          case De:
            v = p.render;
            break;
        }
        if (li === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = li(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === Z ? y = !0 : m = !0));
        }
        if (Ef !== null && (Ef.has(e) || i !== null && Ef.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var x = ga(e, ze);
          x !== null && ar(x, e, ze, zt);
        }
        u !== null && !y && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var lk = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return ZS(e.current, i, a), a;
      }
    };
    function ZS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case q:
          case Ce:
          case Z:
            p = f;
            break;
          case De:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? uk(e, a) : i !== null && ZS(i, t, a), u !== null && ZS(u, t, a);
      }
    }
    function uk(e, t) {
      {
        var a = ok(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ee:
              t.add(i.stateNode);
              return;
            case oe:
              t.add(i.stateNode.containerInfo);
              return;
            case I:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ok(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ee)
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
    var JS;
    {
      JS = !1;
      try {
        var Sx = Object.preventExtensions({});
      } catch {
        JS = !0;
      }
    }
    function sk(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = xe, this.subtreeFlags = xe, this.deletions = null, this.lanes = H, this.childLanes = H, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !JS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ja = function(e, t, a, i) {
      return new sk(e, t, a, i);
    };
    function e0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ck(e) {
      return typeof e == "function" && !e0(e) && e.defaultProps === void 0;
    }
    function fk(e) {
      if (typeof e == "function")
        return e0(e) ? Z : q;
      if (e != null) {
        var t = e.$$typeof;
        if (t === V)
          return De;
        if (t === qe)
          return nt;
      }
      return be;
    }
    function ws(e, t) {
      var a = e.alternate;
      a === null ? (a = ja(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = xe, a.subtreeFlags = xe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Cn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case be:
        case q:
        case Ce:
          a.type = Cf(e.type);
          break;
        case Z:
          a.type = XS(e.type);
          break;
        case De:
          a.type = KS(e.type);
          break;
      }
      return a;
    }
    function dk(e, t) {
      e.flags &= Cn | en;
      var a = e.alternate;
      if (a === null)
        e.childLanes = H, e.lanes = t, e.child = null, e.subtreeFlags = xe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function pk(e, t, a) {
      var i;
      return e === Oh ? (i = et, t === !0 && (i |= Mt, i |= Et)) : i = Te, Ar && (i |= St), ja(I, null, null, i);
    }
    function t0(e, t, a, i, u, s) {
      var f = be, p = e;
      if (typeof e == "function")
        e0(e) ? (f = Z, p = XS(p)) : p = Cf(p);
      else if (typeof e == "string")
        f = ee;
      else
        e: switch (e) {
          case Fi:
            return ao(a.children, u, s, t);
          case oi:
            f = me, u |= Mt, (u & et) !== Te && (u |= Et);
            break;
          case Vi:
            return vk(a, u, s, t);
          case re:
            return hk(a, u, s, t);
          case Le:
            return mk(a, u, s, t);
          case _n:
            return Ex(a, u, s, t);
          case Wt:
          case lt:
          case Jt:
          case vr:
          case at:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Bi:
                  f = Re;
                  break e;
                case E:
                  f = We;
                  break e;
                case V:
                  f = De, p = KS(p);
                  break e;
                case qe:
                  f = nt;
                  break e;
                case Qe:
                  f = Pt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var m = i ? Ge(i) : null;
              m && (v += `

Check the render method of \`` + m + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var y = ja(f, a, t, u);
      return y.elementType = e, y.type = p, y.lanes = s, y._debugOwner = i, y;
    }
    function n0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = t0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function ao(e, t, a, i) {
      var u = ja(ke, e, i, t);
      return u.lanes = a, u;
    }
    function vk(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ja(tt, e, i, t | St);
      return u.elementType = Vi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function hk(e, t, a, i) {
      var u = ja(Ee, e, i, t);
      return u.elementType = re, u.lanes = a, u;
    }
    function mk(e, t, a, i) {
      var u = ja(Ut, e, i, t);
      return u.elementType = Le, u.lanes = a, u;
    }
    function Ex(e, t, a, i) {
      var u = ja(_e, e, i, t);
      u.elementType = _n, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function r0(e, t, a) {
      var i = ja(he, e, null, t);
      return i.lanes = a, i;
    }
    function yk() {
      var e = ja(ee, null, null, Te);
      return e.elementType = "DELETED", e;
    }
    function gk(e) {
      var t = ja(yt, null, null, Te);
      return t.stateNode = e, t;
    }
    function a0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ja(oe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function Cx(e, t) {
      return e === null && (e = ja(be, null, null, Te)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Sk(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = ht, this.eventTimes = Qo(H), this.expirationTimes = Qo(zt), this.pendingLanes = H, this.suspendedLanes = H, this.pingedLanes = H, this.expiredLanes = H, this.mutableReadLanes = H, this.finishedLanes = H, this.entangledLanes = H, this.entanglements = Qo(H), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Vl; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Oh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Qu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function xx(e, t, a, i, u, s, f, p, v, m) {
      var y = new Sk(e, t, a, p, v), R = pk(t, s);
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
      return yg(R), y;
    }
    var i0 = "18.3.1";
    function Ek(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ra(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: _r,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var l0, u0;
    l0 = !1, u0 = {};
    function Tx(e) {
      if (!e)
        return Aa;
      var t = ku(e), a = n1(t);
      if (t.tag === Z) {
        var i = t.type;
        if (dl(i))
          return K0(t, i, a);
      }
      return a;
    }
    function Ck(e, t) {
      {
        var a = ku(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = zr(a);
        if (u === null)
          return null;
        if (u.mode & Mt) {
          var s = Ge(a) || "Component";
          if (!u0[s]) {
            u0[s] = !0;
            var f = hr;
            try {
              Bt(u), a.mode & Mt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Bt(f) : un();
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
      var x = R.current, O = ta(), N = no(x), z = iu(O, N);
      return z.callback = t ?? null, Gu(x, z, N), Db(R, N, O), R;
    }
    function jp(e, t, a, i) {
      ld(t, e);
      var u = t.current, s = ta(), f = no(u);
      nn(f);
      var p = Tx(a);
      t.context === null ? t.context = p : t.pendingContext = p, $i && hr !== null && !l0 && (l0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ge(hr) || "Unknown"));
      var v = iu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Gu(u, v, f);
      return m !== null && (ar(m, u, f, s), Qh(m, u, f)), f;
    }
    function zm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ee:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function xk(e) {
      switch (e.tag) {
        case I: {
          var t = e.stateNode;
          if (Nc(t)) {
            var a = Ov(t);
            Nb(t, a);
          }
          break;
        }
        case Ee: {
          su(function() {
            var u = ga(e, ze);
            if (u !== null) {
              var s = ta();
              ar(u, e, ze, s);
            }
          });
          var i = ze;
          o0(e, i);
          break;
        }
      }
    }
    function bx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Uv(a.retryLane, t));
    }
    function o0(e, t) {
      bx(e, t);
      var a = e.alternate;
      a && bx(a, t);
    }
    function Tk(e) {
      if (e.tag === Ee) {
        var t = Fo, a = ga(e, t);
        if (a !== null) {
          var i = ta();
          ar(a, e, t, i);
        }
        o0(e, t);
      }
    }
    function Rk(e) {
      if (e.tag === Ee) {
        var t = no(e), a = ga(e, t);
        if (a !== null) {
          var i = ta();
          ar(a, e, t, i);
        }
        o0(e, t);
      }
    }
    function kx(e) {
      var t = Gt(e);
      return t === null ? null : t.stateNode;
    }
    var Dx = function(e) {
      return null;
    };
    function wk(e) {
      return Dx(e);
    }
    var _x = function(e) {
      return !1;
    };
    function bk(e) {
      return _x(e);
    }
    var Ox = null, Mx = null, Nx = null, Lx = null, zx = null, Ux = null, Ax = null, jx = null, Hx = null;
    {
      var Fx = function(e, t, a) {
        var i = t[a], u = In(e) ? e.slice() : Je({}, e);
        return a + 1 === t.length ? (In(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Fx(e[i], t, a + 1), u);
      }, Vx = function(e, t) {
        return Fx(e, t, 0);
      }, Bx = function(e, t, a, i) {
        var u = t[i], s = In(e) ? e.slice() : Je({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], In(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = Bx(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, $x = function(e, t, a) {
        if (t.length !== a.length) {
          Ie("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ie("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Bx(e, t, a, 0);
      }, Px = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = In(e) ? e.slice() : Je({}, e);
        return s[u] = Px(e[u], t, a + 1, i), s;
      }, Yx = function(e, t, a) {
        return Px(e, t, 0, a);
      }, s0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Ox = function(e, t, a, i) {
        var u = s0(e, t);
        if (u !== null) {
          var s = Yx(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Je({}, e.memoizedProps);
          var f = ga(e, ze);
          f !== null && ar(f, e, ze, zt);
        }
      }, Mx = function(e, t, a) {
        var i = s0(e, t);
        if (i !== null) {
          var u = Vx(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Je({}, e.memoizedProps);
          var s = ga(e, ze);
          s !== null && ar(s, e, ze, zt);
        }
      }, Nx = function(e, t, a, i) {
        var u = s0(e, t);
        if (u !== null) {
          var s = $x(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Je({}, e.memoizedProps);
          var f = ga(e, ze);
          f !== null && ar(f, e, ze, zt);
        }
      }, Lx = function(e, t, a) {
        e.pendingProps = Yx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ga(e, ze);
        i !== null && ar(i, e, ze, zt);
      }, zx = function(e, t) {
        e.pendingProps = Vx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ga(e, ze);
        a !== null && ar(a, e, ze, zt);
      }, Ux = function(e, t, a) {
        e.pendingProps = $x(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ga(e, ze);
        i !== null && ar(i, e, ze, zt);
      }, Ax = function(e) {
        var t = ga(e, ze);
        t !== null && ar(t, e, ze, zt);
      }, jx = function(e) {
        Dx = e;
      }, Hx = function(e) {
        _x = e;
      };
    }
    function kk(e) {
      var t = zr(e);
      return t === null ? null : t.stateNode;
    }
    function Dk(e) {
      return null;
    }
    function _k() {
      return hr;
    }
    function Ok(e) {
      var t = e.findFiberByHostInstance, a = w.ReactCurrentDispatcher;
      return Ou({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Ox,
        overrideHookStateDeletePath: Mx,
        overrideHookStateRenamePath: Nx,
        overrideProps: Lx,
        overridePropsDeletePath: zx,
        overridePropsRenamePath: Ux,
        setErrorHandler: jx,
        setSuspenseHandler: Hx,
        scheduleUpdate: Ax,
        currentDispatcherRef: a,
        findHostInstanceByFiber: kk,
        findFiberByHostInstance: t || Dk,
        // React Refresh
        findHostInstancesForRefresh: lk,
        scheduleRefresh: ak,
        scheduleRoot: ik,
        setRefreshHandler: rk,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: _k,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: i0
      });
    }
    var Qx = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function c0(e) {
      this._internalRoot = e;
    }
    Um.prototype.render = c0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Am(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Sn) {
          var i = kx(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      jp(e, t, null, null);
    }, Um.prototype.unmount = c0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        rx() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), su(function() {
          jp(null, e, null, null);
        }), Q0(t);
      }
    };
    function Mk(e, t) {
      if (!Am(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Ix(e);
      var a = !1, i = !1, u = "", s = Qx;
      t != null && (t.hydrate ? Ie("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ka && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = Rx(e, Oh, null, a, i, u, s);
      Th(f.current, e);
      var p = e.nodeType === Sn ? e.parentNode : e;
      return Pd(p), new c0(f);
    }
    function Um(e) {
      this._internalRoot = e;
    }
    function Nk(e) {
      e && Qv(e);
    }
    Um.prototype.unstable_scheduleHydration = Nk;
    function Lk(e, t, a) {
      if (!Am(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Ix(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = Qx;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var m = wx(t, null, e, Oh, i, s, f, p, v);
      if (Th(m.current, e), Pd(e), u)
        for (var y = 0; y < u.length; y++) {
          var R = u[y];
          j1(m, R);
        }
      return new Um(m);
    }
    function Am(e) {
      return !!(e && (e.nodeType === Mr || e.nodeType === mi || e.nodeType === Qf));
    }
    function Hp(e) {
      return !!(e && (e.nodeType === Mr || e.nodeType === mi || e.nodeType === Qf || e.nodeType === Sn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Ix(e) {
      e.nodeType === Mr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), ep(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var zk = w.ReactCurrentOwner, Wx;
    Wx = function(e) {
      if (e._reactRootContainer && e.nodeType !== Sn) {
        var t = kx(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = f0(e), u = !!(i && Pu(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Mr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function f0(e) {
      return e ? e.nodeType === mi ? e.documentElement : e.firstChild : null;
    }
    function Gx() {
    }
    function Uk(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = zm(f);
            s.call(x);
          };
        }
        var f = wx(
          t,
          i,
          e,
          Qu,
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
        e._reactRootContainer = f, Th(f.current, e);
        var p = e.nodeType === Sn ? e.parentNode : e;
        return Pd(p), su(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var m = i;
          i = function() {
            var x = zm(y);
            m.call(x);
          };
        }
        var y = Rx(
          e,
          Qu,
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
        e._reactRootContainer = y, Th(y.current, e);
        var R = e.nodeType === Sn ? e.parentNode : e;
        return Pd(R), su(function() {
          jp(t, y, a, i);
        }), y;
      }
    }
    function Ak(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function jm(e, t, a, i, u) {
      Wx(a), Ak(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Uk(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = zm(f);
            p.call(v);
          };
        }
        jp(t, f, e, u);
      }
      return zm(f);
    }
    var Xx = !1;
    function jk(e) {
      {
        Xx || (Xx = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = zk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", _t(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Mr ? e : Ck(e, "findDOMNode");
    }
    function Hk(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ep(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return jm(null, e, t, !0, a);
    }
    function Fk(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ep(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return jm(null, e, t, !1, a);
    }
    function Vk(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !oy(e))
        throw new Error("parentComponent must be a valid React Component");
      return jm(e, t, a, !1, i);
    }
    var Kx = !1;
    function Bk(e) {
      if (Kx || (Kx = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Hp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = ep(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = f0(e), i = a && !Pu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return su(function() {
          jm(null, null, e, !1, function() {
            e._reactRootContainer = null, Q0(e);
          });
        }), !0;
      } else {
        {
          var u = f0(e), s = !!(u && Pu(u)), f = e.nodeType === Mr && Hp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    sr(xk), zu(Tk), Bv(Rk), Ko(ha), bd(Hv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Xs(PT), uy($S, Lb, su);
    function $k(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Am(t))
        throw new Error("Target container is not a DOM element.");
      return Ek(e, t, null, a);
    }
    function Pk(e, t, a, i) {
      return Vk(e, t, a, i);
    }
    var d0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Pu, qc, Rh, Tu, Ks, $S]
    };
    function Yk(e, t) {
      return d0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Mk(e, t);
    }
    function Qk(e, t, a) {
      return d0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Lk(e, t, a);
    }
    function Ik(e) {
      return rx() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), su(e);
    }
    var Wk = Ok({
      findFiberByHostInstance: cs,
      bundleType: 1,
      version: i0,
      rendererPackageName: "react-dom"
    });
    if (!Wk && gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qx = window.location.protocol;
      /^(https?|file):$/.test(qx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d0, Ta.createPortal = $k, Ta.createRoot = Yk, Ta.findDOMNode = jk, Ta.flushSync = Ik, Ta.hydrate = Hk, Ta.hydrateRoot = Qk, Ta.render = Fk, Ta.unmountComponentAtNode = Bk, Ta.unstable_batchedUpdates = $S, Ta.unstable_renderSubtreeIntoContainer = Pk, Ta.version = i0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ta;
}
function uT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uT);
    } catch (j) {
      console.error(j);
    }
  }
}
process.env.NODE_ENV === "production" ? (uT(), m0.exports = eD()) : m0.exports = tD();
var nD = m0.exports, y0, Fm = nD;
if (process.env.NODE_ENV === "production")
  y0 = Fm.createRoot, Fm.hydrateRoot;
else {
  var iT = Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  y0 = function(j, Q) {
    iT.usingClientEntryPoint = !0;
    try {
      return Fm.createRoot(j, Q);
    } finally {
      iT.usingClientEntryPoint = !1;
    }
  };
}
function rD() {
  const j = iD(), Q = /^#\/element\/(.+)$/.exec(j);
  return /* @__PURE__ */ ye.jsx("div", { className: "karyotype_viewer_main ", children: /* @__PURE__ */ ye.jsx(aD, { route: j, children: Q ? /* @__PURE__ */ ye.jsx(oD, { elementId: decodeURIComponent(Q[1]) }) : /* @__PURE__ */ ye.jsx(uD, {}) }) });
}
class aD extends Tf.Component {
  constructor(Q) {
    super(Q), this.state = { error: null };
  }
  static getDerivedStateFromError(Q) {
    return { error: Q };
  }
  componentDidCatch(Q, w) {
  }
  componentDidUpdate(Q) {
    Q.route !== this.props.route && this.state.error && this.setState({ error: null });
  }
  render() {
    return this.state.error ? /* @__PURE__ */ ye.jsx("div", { className: "max-w-7xl mx-auto p-4", children: /* @__PURE__ */ ye.jsxs("div", { className: "rounded-xl border bg-white p-6", children: [
      /* @__PURE__ */ ye.jsx("div", { className: "text-red-700 font-semibold mb-2", children: "Something went wrong" }),
      /* @__PURE__ */ ye.jsx("pre", { className: "text-xs whitespace-pre-wrap text-red-800", children: String(this.state.error) }),
      /* @__PURE__ */ ye.jsx("button", { className: "mt-3 px-3 py-1.5 rounded-xl border", onClick: () => this.setState({ error: null }), children: "Try again" })
    ] }) }) : this.props.children;
  }
}
function iD() {
  const [j, Q] = Hi(() => window.location.hash || "#/");
  return du(() => {
    const w = () => Q(window.location.hash || "#/");
    return window.addEventListener("hashchange", w), () => window.removeEventListener("hashchange", w);
  }, []), j;
}
function lD(j, Q) {
  if (!j || !Q) return null;
  const w = String(Q).trim().toLowerCase(), Ve = Object.keys(j).find(
    (Ue) => Ue.trim().toLowerCase() === w
  );
  return Ve ? j[Ve] : null;
}
function uD() {
  const [j, Q] = Hi(null), [w, Ve] = Hi(null), [Ue, Ie] = Hi("(none)"), [g, Fe] = Hi("(none)"), [q, Z] = Hi(!1), [be, I] = Hi(null), [oe, ee] = Hi(null), [he, ke] = Hi(null);
  return du(() => {
    try {
      sessionStorage.removeItem("selected_element");
      const me = [];
      for (let We = 0; We < sessionStorage.length; We++) {
        const Re = sessionStorage.key(We);
        Re && Re.startsWith("element:") && me.push(Re);
      }
      me.forEach((We) => sessionStorage.removeItem(We));
    } catch {
    }
  }, []), du(() => {
    const me = document.getElementById("karyotype_div");
    if (!me)
      return;
    async function We() {
      try {
        console.log(me.getAttribute("data-karyo-txt"), typeof me.getAttribute("data-karyo-txt")), console.log(me.getAttribute("data-karyo-bed"));
        const De = await (await fetch(me.getAttribute("data-karyo-txt"))).text();
        Q(De), Ie(me.getAttribute("data-karyo-txt"));
        const Ee = await (await fetch(me.getAttribute("data-karyo-bed"))).text();
        Ve(Ee), Fe(me.getAttribute("data-karyo-bed"));
        const Ce = await (await fetch("/static/karyotype_viewer/family_colors.json")).json();
        console.log(Ce), ee(Ce), console.log(oe);
        const Pt = me.dataset.karyoParent;
        I(Pt), console.log(Pt, be);
        const mt = me.dataset.onlyRepeat;
        console.log(mt, typeof mt), ke(mt.toString()), console.log(he);
      } catch (Re) {
        console.error("Error loading static files", Re);
      }
    }
    We();
  }, []), /* @__PURE__ */ ye.jsx("div", { className: "main-grid grid grid-cols-1 lg:grid-cols-12 gap-4", children: /* @__PURE__ */ ye.jsx("div", { className: "col-left lg:col-span-9", children: /* @__PURE__ */ ye.jsx(sD, { karyoText: j, bedText: w, parent: be, onlyRepeat: he, familyColors: oe }) }) });
}
function oD({ elementId: j }) {
  const Q = ks(() => {
    const w = sessionStorage.getItem(`element:${j}`);
    return w ? JSON.parse(w) : null;
  }, [j]);
  return /* @__PURE__ */ ye.jsxs("div", { className: "bg-white rounded-2xl shadow p-6", children: [
    /* @__PURE__ */ ye.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ ye.jsx("a", { href: "#/", className: "text-sm text-blue-600 hover:underline", onClick: (w) => {
      w.preventDefault(), window.history.length > 1 ? window.history.back() : window.location.hash = "#/";
    }, children: "← Back to viewer" }) }),
    /* @__PURE__ */ ye.jsxs("h1", { className: "mt-2 text-2xl font-semibold", children: [
      "Element: ",
      /* @__PURE__ */ ye.jsx("span", { className: "font-mono text-base px-2 py-1 rounded bg-gray-100 break-all", children: j })
    ] }),
    Q ? /* @__PURE__ */ ye.jsxs("div", { className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ ye.jsxs("div", { className: "p-4 bg-gray-50 rounded-xl", children: [
        /* @__PURE__ */ ye.jsx("h2", { className: "font-semibold", children: "Summary" }),
        /* @__PURE__ */ ye.jsxs("ul", { className: "text-sm text-gray-800 mt-2 space-y-1", children: [
          /* @__PURE__ */ ye.jsxs("li", { children: [
            /* @__PURE__ */ ye.jsx("b", { children: "Chrom:" }),
            " ",
            Q.chr
          ] }),
          /* @__PURE__ */ ye.jsxs("li", { children: [
            /* @__PURE__ */ ye.jsx("b", { children: "Start:" }),
            " ",
            Number(Q.start).toLocaleString()
          ] }),
          /* @__PURE__ */ ye.jsxs("li", { children: [
            /* @__PURE__ */ ye.jsx("b", { children: "End:" }),
            " ",
            Number(Q.end).toLocaleString()
          ] }),
          /* @__PURE__ */ ye.jsxs("li", { children: [
            /* @__PURE__ */ ye.jsx("b", { children: "Name:" }),
            " ",
            Q.name
          ] }),
          /* @__PURE__ */ ye.jsxs("li", { children: [
            /* @__PURE__ */ ye.jsx("b", { children: "Family:" }),
            " ",
            Q.family
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
function sD({ karyoText: j, bedText: Q, parent: w, onlyRepeat: Ve, familyColors: Ue }) {
  const Ie = bs(null), g = bs(null), Fe = bs(null), q = bs(!1), [Z, be] = Hi(() => sessionStorage.getItem("selected_element") || null);
  du(() => {
    const K = () => be(null);
    return window.addEventListener("kv-clear-all", K), () => window.removeEventListener("kv-clear-all", K);
  }, []);
  const I = bs({ x: 0, y: 0, s: 1 }), oe = bs(!1), ee = bs({ x: 0, y: 0, tx: 0, ty: 0 }), he = (K, L, G) => {
    I.current = { x: K, y: L, s: G };
    const W = Fe.current;
    W && W.setAttribute("transform", `translate(${K},${L}) scale(${G})`);
  }, ke = () => {
    const K = g.current, L = Fe.current;
    if (!(!K || !L))
      try {
        const G = L.getBBox();
        if (!isFinite(G.width) || !isFinite(G.height) || G.width === 0 || G.height === 0) return;
        const W = K.clientWidth || 1e3, $e = K.clientHeight || 600, Pe = 20, Yt = (W - 2 * Pe) / G.width, an = ($e - 2 * Pe) / G.height, sn = Math.min(Yt, an), Qt = Pe - G.x * sn + (W - (G.width * sn + 2 * Pe)) / 2, It = Pe - G.y * sn + ($e - (G.height * sn + 2 * Pe)) / 2;
        he(Qt, It, sn);
      } catch {
      }
  }, me = (K, L, G) => {
    const { x: W, y: $e, s: Pe } = I.current, Yt = Ds(Pe * K, 0.3, 200), an = (L - W) / Pe, sn = (G - $e) / Pe, Qt = L - an * Yt, It = G - sn * Yt;
    he(Qt, It, Yt);
  }, We = (K) => {
    K.preventDefault();
    const L = Math.exp(-K.deltaY * 1e-3), G = K.currentTarget.getBoundingClientRect();
    me(L, K.clientX - G.left, K.clientY - G.top);
  }, Re = (K) => {
    const L = g.current;
    if (!L) return;
    const G = K.target;
    if (!(G && typeof G.getAttribute == "function" && G.getAttribute("data-el") === "1")) {
      oe.current = !0;
      try {
        L.setPointerCapture(K.pointerId);
      } catch {
      }
      ee.current = { x: K.clientX, y: K.clientY, tx: I.current.x, ty: I.current.y };
    }
  }, De = (K) => {
    if (!oe.current) return;
    const L = K.clientX - ee.current.x, G = K.clientY - ee.current.y;
    he(ee.current.tx + L, ee.current.ty + G, I.current.s);
  }, tt = (K) => {
    const L = g.current;
    if (L) {
      oe.current = !1;
      try {
        L.releasePointerCapture(K.pointerId);
      } catch {
      }
    }
  }, Ee = ks(() => j ? dD(j) : [], [j]), nt = ks(() => Q ? pD(Q) : [], [Q]);
  du(() => {
    q.current = !1;
  }, [Ee, nt]);
  const Ce = ks(() => new Map(Ee.map((K) => [K.key, K])), [Ee]), Pt = ks(() => nt.filter((K) => !(!Ce.get(K.key) || !isFinite(K.start) || !isFinite(K.end) || K.end < K.start)), [nt, Ce]), mt = String(Ve).toLowerCase() === "true", yt = ks(() => {
    const K = Array.from(
      new Set(
        Pt.map((L) => String(L.family || "").trim()).filter(Boolean)
      )
    );
    return mt && w ? K.filter((L) => L === w) : K;
  }, [Pt, mt, w]), [Ut, gt] = Hi(/* @__PURE__ */ new Set()), _e = ks(() => {
    const K = /* @__PURE__ */ new Map(), L = w && w !== "none" ? lD(Ue, w) : null;
    return yt.forEach((G, W) => {
      const $e = L ? yD(L, W, yt.length || 1) : vD(W, yt.length || 1);
      K.set(G, $e);
    }), K;
  }, [yt, w, Ue]);
  du(() => {
    gt(new Set(yt));
  }, [yt]), console.log(_e), console.log(yt), du(() => {
    gt(new Set(yt));
  }, [yt]), du(() => {
    const K = "http://www.w3.org/2000/svg", L = g.current;
    if (!L) return;
    for (; L.firstChild; ) L.removeChild(L.firstChild);
    const G = document.createElementNS(K, "defs");
    L.appendChild(G);
    const W = document.createElementNS(K, "g");
    if (L.appendChild(W), Fe.current = W, !Ee.length) return;
    const $e = new Map(Ee.map((Oe) => [Oe.key, Oe])), Pe = Ee.map((Oe) => Oe.key), Yt = Pe.length, sn = Math.ceil(Yt / 14), Qt = Math.floor(Yt / sn), It = Yt % sn, yn = [];
    let zn = 0;
    for (let Oe = 0; Oe < sn; Oe++) {
      const Rt = Qt + (Oe < It ? 1 : 0);
      yn.push(Pe.slice(zn, zn + Rt)), zn += Rt;
    }
    const ir = 16, gn = 340, fr = 80, Un = 20, Pn = 40, ln = /* @__PURE__ */ new Map(), An = Ee.reduce((Oe, Rt) => Math.max(Oe, Rt.end - Rt.start), 1), Ra = (Oe, Rt, jt) => (cn) => Rt + (cn - Oe.start) / (Oe.end - Oe.start) * jt;
    yn.forEach((Oe, Rt) => {
      Oe.forEach((jt, cn) => {
        const Zt = $e.get(jt);
        if (!Zt) return;
        const ce = (Zt.end - Zt.start) / An * 280 + 40, Ae = Pn + cn * fr, Ke = Un + Rt * gn, pt = Ra(Zt, Ke, ce);
        ln.set(jt, { x: Ae, y: Ke, height: ce, scale: pt, k: Zt });
      });
    });
    for (const [Oe, Rt] of ln) {
      const { x: jt, y: cn, height: Zt, k: X, scale: ce } = Rt, Ae = ce(X.ceStart), Ke = ce(X.ceEnd);
      var wa = !0;
      Ae < 22 && Ke < 22 && (console.log("NO PINCH: ", w), wa = !1);
      const pt = fD(jt, cn, Zt, ir, Ae, Ke, wa), Ot = document.createElementNS(K, "path");
      Ot.setAttribute("d", pt), Ot.setAttribute("fill", "#e5e7eb"), Ot.setAttribute("stroke", "#9ca3af"), Ot.setAttribute("stroke-width", "1"), Ot.setAttribute("shape-rendering", "geometricPrecision"), W.appendChild(Ot);
      const ot = `clip-${Oe}`, vt = document.createElementNS(K, "clipPath");
      vt.setAttribute("id", ot);
      const kt = document.createElementNS(K, "path");
      kt.setAttribute("d", pt), vt.appendChild(kt), G.appendChild(vt);
      const it = document.createElementNS(K, "g");
      it.setAttribute("clip-path", `url(#${ot})`), W.appendChild(it);
      const rt = document.createElementNS(K, "text");
      rt.setAttribute("x", String(jt + ir / 2)), rt.setAttribute("y", String(cn + Zt + 16)), rt.setAttribute("text-anchor", "middle"), rt.setAttribute("font-size", "12"), rt.setAttribute("fill", "#374151"), rt.textContent = X.label, W.appendChild(rt), Rt.gChr = it;
    }
    const Yn = document.createElementNS(K, "rect");
    Yn.setAttribute("fill", "none"), Yn.setAttribute("stroke", "#111827"), Yn.setAttribute("stroke-width", "2"), Yn.setAttribute("vector-effect", "non-scaling-stroke"), Yn.setAttribute("pointer-events", "none"), Yn.setAttribute("visibility", "hidden");
    const qt = document.createElementNS(K, "rect");
    qt.setAttribute("fill", "none"), qt.setAttribute("stroke", "#2563eb"), qt.setAttribute("stroke-width", "2"), qt.setAttribute("vector-effect", "non-scaling-stroke"), qt.setAttribute("pointer-events", "none"), qt.setAttribute("visibility", "hidden");
    const Dn = /* @__PURE__ */ new Map(), jn = (Oe) => Ut.has(Oe);
    for (const Oe of Pt) {
      if (!jn(Oe.family) || !$e.has(Oe.key)) continue;
      const Rt = ln.get(Oe.key);
      if (!Rt) continue;
      const { k: jt, scale: cn } = Rt, Zt = Math.max(jt.start, Math.min(Oe.start, jt.end)), X = Math.max(jt.start, Math.min(Oe.end + 1, jt.end + 1)), ce = cn(Zt), Ae = cn(X), Ke = `${$e.get(Oe.key).label}:${Oe.start}-${Oe.end}:${Oe.name}`.replace(/\s+/g, "_");
      (Dn.get(Oe.key) || Dn.set(Oe.key, []).get(Oe.key)).push({ b: Oe, yTop: ce, yBot: Ae, id: Ke });
    }
    const dr = 2, Fa = 8;
    for (const [Oe, Rt] of Dn) {
      const jt = ln.get(Oe);
      if (!jt) continue;
      const { x: cn, y: Zt, height: X, gChr: ce } = jt, Ae = 16 - 2 * dr, Ke = Math.min(Ae, Math.max(Fa, Ae)), pt = cn + (16 - Ke) / 2, Ot = Rt.slice().sort((ot, vt) => ot.yTop - vt.yTop || ot.yBot - ot.yTop - (vt.yBot - vt.yTop));
      for (let ot = 0; ot < Ot.length; ot++) {
        const { b: vt, id: kt } = Ot[ot];
        let it = Math.max(Zt, Math.min(Zt + X, Ot[ot].yTop)), rt = Math.max(it, Math.min(Zt + X, Ot[ot].yBot));
        const Ht = document.createElementNS(K, "rect");
        Ht.setAttribute("x", String(pt)), Ht.setAttribute("width", String(Ke)), Ht.setAttribute("y", String(it)), Ht.setAttribute("height", String(Math.max(1, rt - it))), Ht.setAttribute("fill", _e.get(vt.family) || "#10b981"), Ht.setAttribute("stroke", "none"), Ht.setAttribute("cursor", "pointer"), Ht.setAttribute("pointer-events", "all"), Ht.setAttribute("data-el", "1"), Ht.addEventListener("pointerdown", (ba) => ba.stopPropagation()), Ht.addEventListener("pointerenter", () => {
          qt.setAttribute("x", String(pt)), qt.setAttribute("y", String(it)), qt.setAttribute("width", String(Ke)), qt.setAttribute("height", String(Math.max(1, rt - it))), qt.setAttribute("visibility", "visible"), ce.appendChild(qt);
        }), Ht.addEventListener("pointerleave", () => {
          qt.setAttribute("visibility", "hidden");
        }), Ht.addEventListener("click", () => {
          window.open("/repeatTable/" + vt.family, "_blank");
        });
        const pr = document.createElementNS(K, "title"), Va = $e.get(vt.key);
        if (pr.textContent = `${vt.name} — ${vt.family}
${Va ? Va.label : vt.key}:${vt.start}-${vt.end}`, Ht.appendChild(pr), ce.appendChild(Ht), Z && kt === Z) {
          const ba = { x: pt, w: Ke, y: it, h: Math.max(1, rt - it) }, lr = document.createElementNS(K, "rect");
          lr.setAttribute("fill", "none"), lr.setAttribute("stroke", "#111827"), lr.setAttribute("stroke-width", "2"), lr.setAttribute("vector-effect", "non-scaling-stroke"), lr.setAttribute("pointer-events", "none"), lr.setAttribute("x", String(ba.x)), lr.setAttribute("y", String(ba.y)), lr.setAttribute("width", String(ba.w)), lr.setAttribute("height", String(ba.h)), ce.appendChild(lr);
        }
      }
    }
    q.current || (setTimeout(ke, 0), q.current = !0);
  }, [Ee, nt, Ut, _e, Z]), du(() => {
    const K = g.current;
    if (!K) return;
    const L = (G) => {
      G.preventDefault(), Math.pow(1.0015, G.deltaY);
      const W = K.getBoundingClientRect();
      (G.clientX - W.left) / W.width, (G.clientY - W.top) / W.height;
    };
    return K.addEventListener("wheel", L, { passive: !1 }), () => {
      K.removeEventListener("wheel", L);
    };
  }, []);
  const At = () => {
    const K = g.current;
    if (!K) return;
    const L = K.getBoundingClientRect();
    me(1.2, L.width / 2, L.height / 2);
  }, Kt = () => {
    const K = g.current;
    if (!K) return;
    const L = K.getBoundingClientRect();
    me(1 / 1.2, L.width / 2, L.height / 2);
  }, Vt = () => {
    ke();
  };
  return /* @__PURE__ */ ye.jsxs("div", { ref: Ie, className: "kary_card bg-white rounded-2xl shadow overflow-hidden flex flex-col flex-1 min-h-0", children: [
    /* @__PURE__ */ ye.jsx("div", { className: "kary_btns_div flex items-center justify-between border-b px-3 py-2", children: /* @__PURE__ */ ye.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ ye.jsx("button", { onClick: At, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "+ Zoom in" }),
      /* @__PURE__ */ ye.jsx("button", { onClick: Kt, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "- Zoom out" }),
      /* @__PURE__ */ ye.jsx("button", { onClick: Vt, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "⟲ Reset" })
    ] }) }),
    /* @__PURE__ */ ye.jsxs("div", { className: "kary_graph_holder grid grid-cols-12 flex-1 min-h-0", children: [
      /* @__PURE__ */ ye.jsx("div", { className: "kary_graph col-span-9 border-r h-full min-h-0", children: /* @__PURE__ */ ye.jsxs("div", { className: "kary_svg_holder relative w-full h-full min-h-0 bg-gray-50", children: [
        /* @__PURE__ */ ye.jsx(
          "svg",
          {
            ref: g,
            className: "absolute inset-0 w-full h-full block",
            onWheel: We,
            onPointerDown: Re,
            onPointerMove: De,
            onPointerUp: tt
          }
        ),
        !cD(Ee) && !nt.length && /* @__PURE__ */ ye.jsx("div", { className: "absolute inset-0 grid place-items-center pointer-events-none", children: /* @__PURE__ */ ye.jsxs("div", { className: "text-center text-gray-500", children: [
          /* @__PURE__ */ ye.jsx("div", { className: "mb-2 text-2xl", children: "⬆" }),
          /* @__PURE__ */ ye.jsx("p", { className: "font-medium", children: "Drop karyotype + BED here" }),
          /* @__PURE__ */ ye.jsx("p", { className: "text-sm", children: "or use the upload buttons" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ ye.jsx("div", { className: "col-span-3 h-full min-h-0 overflow-hidden p-3 flex flex-col justify-end", children: yt.length ? /* @__PURE__ */ ye.jsx("div", { className: "family-scroll mt-auto", children: /* @__PURE__ */ ye.jsx("div", { className: "karyo_btns", children: yt.map((K) => /* @__PURE__ */ ye.jsx(
        "button",
        {
          onClick: () => {
            const L = new Set(Ut);
            L.has(K) ? L.delete(K) : L.add(K), gt(L);
          },
          className: `w-full flex items-center gap-3 px-3 py-2 rounded-xl border ${Ut.has(K) ? "hover:opacity-70" : "bg-gray-100 opacity-70"}`,
          style: { background: _e.get(K) || "#10b981" },
          children: /* @__PURE__ */ ye.jsx("span", { className: "text-sm font-medium flex-1 text-left break-words", children: K })
        },
        K
      )) }) }) : /* @__PURE__ */ ye.jsx("div", { className: "text-sm text-gray-500 p-2 mt-auto", children: "Legend appears after loading BED rows that match chromosomes in the karyotype file." }) })
    ] })
  ] });
}
function cD(j) {
  return Array.isArray(j) && j.length > 0;
}
function fD(j, Q, w, Ve, Ue, Ie, g = !0) {
  if (!g) {
    const De = j, tt = j + Ve, Ee = Q, nt = Q + w, Ce = Math.min(Ve / 2, 8);
    return [
      `M ${De} ${Ee + Ce}`,
      `Q ${De} ${Ee} ${De + Ce} ${Ee}`,
      `L ${tt - Ce} ${Ee}`,
      `Q ${tt} ${Ee} ${tt} ${Ee + Ce}`,
      `L ${tt} ${nt - Ce}`,
      `Q ${tt} ${nt} ${tt - Ce} ${nt}`,
      `L ${De + Ce} ${nt}`,
      `Q ${De} ${nt} ${De} ${nt - Ce}`,
      `L ${De} ${Ee + Ce}`,
      "Z"
    ].join(" ");
  }
  const Fe = j + Ve / 2, q = j, Z = j + Ve, be = Q, I = Q + w;
  let oe = Math.max(be, Math.min(Ue, Ie)), ee = Math.min(I, Math.max(Ue, Ie));
  const he = 4, ke = Ve * 0.45, me = Math.min(ke * 0.25, 6), We = Math.max(oe, be + he), Re = Math.min(ee, I - he);
  return [
    `M ${q} ${be + he}`,
    `Q ${q} ${be} ${q + he} ${be}`,
    `L ${Z - he} ${be}`,
    `Q ${Z} ${be} ${Z} ${be + he}`,
    `L ${Z} ${We - me}`,
    `Q ${Z} ${We} ${Fe + ke / 2 + me} ${We}`,
    `Q ${Fe + ke / 2} ${We} ${Fe + ke / 2} ${We + me}`,
    `L ${Fe + ke / 2} ${Re - me}`,
    `Q ${Fe + ke / 2} ${Re} ${Fe + ke / 2 + me} ${Re}`,
    `Q ${Z} ${Re} ${Z} ${Re + me}`,
    `L ${Z} ${I - he}`,
    `Q ${Z} ${I} ${Z - he} ${I}`,
    `L ${q + he} ${I}`,
    `Q ${q} ${I} ${q} ${I - he}`,
    `L ${q} ${Re + me}`,
    `Q ${q} ${Re} ${Fe - ke / 2 - me} ${Re}`,
    `Q ${Fe - ke / 2} ${Re} ${Fe - ke / 2} ${Re - me}`,
    `L ${Fe - ke / 2} ${We + me}`,
    `Q ${Fe - ke / 2} ${We} ${Fe - ke / 2 - me} ${We}`,
    `Q ${q} ${We} ${q} ${We - me}`,
    `L ${q} ${be + he}`,
    "Z"
  ].join(" ");
}
function oT(j) {
  return String(j || "").trim().replace(/^chrom(?:osome)?/i, "").replace(/^chr/i, "").trim().toLowerCase();
}
function dD(j) {
  const Q = [], w = String(j).split(/\r?\n/);
  for (let Ve = 0; Ve < w.length; Ve++) {
    const Ue = String(w[Ve] || "").trim();
    if (!Ue || /^#/.test(Ue)) continue;
    const Ie = Ue.split(/\t|,|\s+/).filter(Boolean);
    if (Ie.length < 5) continue;
    const g = Ie[1], Fe = Ie[2];
    if (/start/i.test(g) || /end/i.test(Fe) || /ce[_-]?start/i.test(Ue)) continue;
    const [Z, be, I, oe, ee] = Ie, he = String(Z).trim(), ke = oT(he), me = Vm(be), We = Vm(I), Re = Vm(oe), De = Vm(ee);
    [me, We, Re, De].some((tt) => !isFinite(tt)) || Q.push({ key: ke, label: he, start: me, end: We, ceStart: Re, ceEnd: De });
  }
  return Q;
}
function pD(j) {
  const Q = [], w = String(j).split(/\r?\n/);
  for (const Ve of w) {
    const Ue = String(Ve).trim();
    if (!Ue || /^#/.test(Ue)) continue;
    const Ie = Ue.split(/\t|\s+/);
    if (Ie.length < 5) continue;
    const [g, Fe, q, Z, be] = Ie, I = oT(g), oe = +Fe, ee = +q;
    if (!isFinite(oe) || !isFinite(ee)) continue;
    const he = oe + 1, ke = ee;
    Q.push({ key: I, start: he, end: ke, name: Z, family: be, raw: Ue });
  }
  return Q;
}
function vD(j, Q) {
  return `hsl(${j * 360 / Math.max(1, Q) % 360} 70% 45%)`;
}
function Ds(j, Q, w) {
  return Math.max(Q, Math.min(w, j));
}
function Vm(j) {
  const w = +String(j).replace(/,/g, "");
  return isFinite(w) ? w : NaN;
}
function hD(j) {
  const Q = String(j).trim().match(/^hsl\(\s*([-\d.]+)\s+([-\d.]+)%\s+([-\d.]+)%\s*\)$/i);
  return Q ? {
    h: (Number(Q[1]) % 360 + 360) % 360,
    s: Ds(Number(Q[2]), 0, 100),
    l: Ds(Number(Q[3]), 0, 100)
  } : null;
}
function mD({ h: j, s: Q, l: w }) {
  return `hsl(${j} ${Q}% ${w}%)`;
}
function yD(j, Q, w) {
  const Ve = hD(j);
  if (!Ve) return j;
  const Ue = Math.max(1, w - 1), Ie = Ue === 0 ? 0.5 : Q / Ue, g = Ds(Ve.l - 18, 10, 90), Fe = Ds(Ve.l + 18, 10, 90), q = g + (Fe - g) * Ie, Z = Ds(Ve.s - 8, 35, 95), be = Ds(Ve.s + 4, 35, 95), I = be - (be - Z) * Ie;
  return mD({ h: Ve.h, s: Math.round(I), l: Math.round(q) });
}
const sT = document.getElementById("karyotype_div");
if (!sT)
  throw new Error('Missing <div id="karyotype_div"> in your HTML/template');
const gD = y0(sT);
gD.render(
  /* @__PURE__ */ ye.jsx(Tf.StrictMode, { children: /* @__PURE__ */ ye.jsx(rD, {}) })
);
