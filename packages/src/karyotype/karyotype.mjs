import Tf, { useState as gl, useEffect as cu, useMemo as bs, useRef as ws } from "react";
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
function KD() {
  if (Zx) return Vp;
  Zx = 1;
  var A = Tf, I = Symbol.for("react.element"), b = Symbol.for("react.fragment"), Qe = Object.prototype.hasOwnProperty, Pe = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(Be, X, q) {
    var Ce, W = {}, ae = null, J = null;
    q !== void 0 && (ae = "" + q), X.key !== void 0 && (ae = "" + X.key), X.ref !== void 0 && (J = X.ref);
    for (Ce in X) Qe.call(X, Ce) && !Ne.hasOwnProperty(Ce) && (W[Ce] = X[Ce]);
    if (Be && Be.defaultProps) for (Ce in X = Be.defaultProps, X) W[Ce] === void 0 && (W[Ce] = X[Ce]);
    return { $$typeof: I, type: Be, key: ae, ref: J, props: W, _owner: Pe.current };
  }
  return Vp.Fragment = b, Vp.jsx = g, Vp.jsxs = g, Vp;
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
function qD() {
  return Jx || (Jx = 1, process.env.NODE_ENV !== "production" && function() {
    var A = Tf, I = Symbol.for("react.element"), b = Symbol.for("react.portal"), Qe = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), Ne = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), Be = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), Ce = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), ie = Symbol.iterator, ye = "@@iterator";
    function _e(E) {
      if (E === null || typeof E != "object")
        return null;
      var F = ie && E[ie] || E[ye];
      return typeof F == "function" ? F : null;
    }
    var it = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function je(E) {
      {
        for (var F = arguments.length, ne = new Array(F > 1 ? F - 1 : 0), Me = 1; Me < F; Me++)
          ne[Me - 1] = arguments[Me];
        De("error", E, ne);
      }
    }
    function De(E, F, ne) {
      {
        var Me = it.ReactDebugCurrentFrame, qe = Me.getStackAddendum();
        qe !== "" && (F += "%s", ne = ne.concat([qe]));
        var We = ne.map(function(ut) {
          return String(ut);
        });
        We.unshift("Warning: " + F), Function.prototype.apply.call(console[E], console, We);
      }
    }
    var $e = !1, Re = !1, rt = !1, we = !1, Dt = !1, Tt;
    Tt = Symbol.for("react.module.reference");
    function It(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === Qe || E === Ne || Dt || E === Pe || E === q || E === Ce || we || E === J || $e || Re || rt || typeof E == "object" && E !== null && (E.$$typeof === ae || E.$$typeof === W || E.$$typeof === g || E.$$typeof === Be || E.$$typeof === X || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === Tt || E.getModuleId !== void 0));
    }
    function jt(E, F, ne) {
      var Me = E.displayName;
      if (Me)
        return Me;
      var qe = F.displayName || F.name || "";
      return qe !== "" ? ne + "(" + qe + ")" : ne;
    }
    function Rt(E) {
      return E.displayName || "Context";
    }
    function Le(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && je("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case Qe:
          return "Fragment";
        case b:
          return "Portal";
        case Ne:
          return "Profiler";
        case Pe:
          return "StrictMode";
        case q:
          return "Suspense";
        case Ce:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case Be:
            var F = E;
            return Rt(F) + ".Consumer";
          case g:
            var ne = E;
            return Rt(ne._context) + ".Provider";
          case X:
            return jt(E, E.render, "ForwardRef");
          case W:
            var Me = E.displayName || null;
            return Me !== null ? Me : Le(E.type) || "Memo";
          case ae: {
            var qe = E, We = qe._payload, ut = qe._init;
            try {
              return Le(ut(We));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ht = Object.assign, Q = 0, fe, He, V, de, K, Ge, st;
    function Ft() {
    }
    Ft.__reactDisabledLog = !0;
    function Kt() {
      {
        if (Q === 0) {
          fe = console.log, He = console.info, V = console.warn, de = console.error, K = console.group, Ge = console.groupCollapsed, st = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: Ft,
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
        Q++;
      }
    }
    function fr() {
      {
        if (Q--, Q === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ht({}, E, {
              value: fe
            }),
            info: Ht({}, E, {
              value: He
            }),
            warn: Ht({}, E, {
              value: V
            }),
            error: Ht({}, E, {
              value: de
            }),
            group: Ht({}, E, {
              value: K
            }),
            groupCollapsed: Ht({}, E, {
              value: Ge
            }),
            groupEnd: Ht({}, E, {
              value: st
            })
          });
        }
        Q < 0 && je("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var un = it.ReactCurrentDispatcher, nn;
    function hn(E, F, ne) {
      {
        if (nn === void 0)
          try {
            throw Error();
          } catch (qe) {
            var Me = qe.stack.trim().match(/\n( *(at )?)/);
            nn = Me && Me[1] || "";
          }
        return `
` + nn + E;
      }
    }
    var ir = !1, dr;
    {
      var mn = typeof WeakMap == "function" ? WeakMap : Map;
      dr = new mn();
    }
    function pr(E, F) {
      if (!E || ir)
        return "";
      {
        var ne = dr.get(E);
        if (ne !== void 0)
          return ne;
      }
      var Me;
      ir = !0;
      var qe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var We;
      We = un.current, un.current = null, Kt();
      try {
        if (F) {
          var ut = function() {
            throw Error();
          };
          if (Object.defineProperty(ut.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ut, []);
            } catch (Ze) {
              Me = Ze;
            }
            Reflect.construct(E, [], ut);
          } else {
            try {
              ut.call();
            } catch (Ze) {
              Me = Ze;
            }
            E.call(ut.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ze) {
            Me = Ze;
          }
          E();
        }
      } catch (Ze) {
        if (Ze && Me && typeof Ze.stack == "string") {
          for (var at = Ze.stack.split(`
`), Mn = Me.stack.split(`
`), Wt = at.length - 1, qt = Mn.length - 1; Wt >= 1 && qt >= 0 && at[Wt] !== Mn[qt]; )
            qt--;
          for (; Wt >= 1 && qt >= 0; Wt--, qt--)
            if (at[Wt] !== Mn[qt]) {
              if (Wt !== 1 || qt !== 1)
                do
                  if (Wt--, qt--, qt < 0 || at[Wt] !== Mn[qt]) {
                    var vr = `
` + at[Wt].replace(" at new ", " at ");
                    return E.displayName && vr.includes("<anonymous>") && (vr = vr.replace("<anonymous>", E.displayName)), typeof E == "function" && dr.set(E, vr), vr;
                  }
                while (Wt >= 1 && qt >= 0);
              break;
            }
        }
      } finally {
        ir = !1, un.current = We, fr(), Error.prepareStackTrace = qe;
      }
      var ui = E ? E.displayName || E.name : "", oi = ui ? hn(ui) : "";
      return typeof E == "function" && dr.set(E, oi), oi;
    }
    function on(E, F, ne) {
      return pr(E, !1);
    }
    function Pn(E) {
      var F = E.prototype;
      return !!(F && F.isReactComponent);
    }
    function Dn(E, F, ne) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return pr(E, Pn(E));
      if (typeof E == "string")
        return hn(E);
      switch (E) {
        case q:
          return hn("Suspense");
        case Ce:
          return hn("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case X:
            return on(E.render);
          case W:
            return Dn(E.type, F, ne);
          case ae: {
            var Me = E, qe = Me._payload, We = Me._init;
            try {
              return Dn(We(qe), F, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var kn = Object.prototype.hasOwnProperty, lr = {}, rn = it.ReactDebugCurrentFrame;
    function _r(E) {
      if (E) {
        var F = E._owner, ne = Dn(E.type, E._source, F ? F.type : null);
        rn.setExtraStackFrame(ne);
      } else
        rn.setExtraStackFrame(null);
    }
    function ba(E, F, ne, Me, qe) {
      {
        var We = Function.call.bind(kn);
        for (var ut in E)
          if (We(E, ut)) {
            var at = void 0;
            try {
              if (typeof E[ut] != "function") {
                var Mn = Error((Me || "React class") + ": " + ne + " type `" + ut + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[ut] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Mn.name = "Invariant Violation", Mn;
              }
              at = E[ut](F, ut, Me, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Wt) {
              at = Wt;
            }
            at && !(at instanceof Error) && (_r(qe), je("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", ne, ut, typeof at), _r(null)), at instanceof Error && !(at.message in lr) && (lr[at.message] = !0, _r(qe), je("Failed %s type: %s", ne, at.message), _r(null));
          }
      }
    }
    var Yn = Array.isArray;
    function An(E) {
      return Yn(E);
    }
    function ze(E) {
      {
        var F = typeof Symbol == "function" && Symbol.toStringTag, ne = F && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return ne;
      }
    }
    function Vt(E) {
      try {
        return yt(E), !1;
      } catch {
        return !0;
      }
    }
    function yt(E) {
      return "" + E;
    }
    function $t(E) {
      if (Vt(E))
        return je("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(E)), yt(E);
    }
    var Pt = it.ReactCurrentOwner, _n = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yn, G;
    function se(E) {
      if (kn.call(E, "ref")) {
        var F = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Fe(E) {
      if (kn.call(E, "key")) {
        var F = Object.getOwnPropertyDescriptor(E, "key").get;
        if (F && F.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function Je(E, F) {
      typeof E.ref == "string" && Pt.current;
    }
    function lt(E, F) {
      {
        var ne = function() {
          yn || (yn = !0, je("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        ne.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function ht(E, F) {
      {
        var ne = function() {
          G || (G = !0, je("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F));
        };
        ne.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var Ut = function(E, F, ne, Me, qe, We, ut) {
      var at = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: I,
        // Built-in properties that belong on the element
        type: E,
        key: F,
        ref: ne,
        props: ut,
        // Record the component responsible for creating this element.
        _owner: We
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
        value: Me
      }), Object.defineProperty(at, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: qe
      }), Object.freeze && (Object.freeze(at.props), Object.freeze(at)), at;
    };
    function Mt(E, F, ne, Me, qe) {
      {
        var We, ut = {}, at = null, Mn = null;
        ne !== void 0 && ($t(ne), at = "" + ne), Fe(F) && ($t(F.key), at = "" + F.key), se(F) && (Mn = F.ref, Je(F, qe));
        for (We in F)
          kn.call(F, We) && !_n.hasOwnProperty(We) && (ut[We] = F[We]);
        if (E && E.defaultProps) {
          var Wt = E.defaultProps;
          for (We in Wt)
            ut[We] === void 0 && (ut[We] = Wt[We]);
        }
        if (at || Mn) {
          var qt = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          at && lt(ut, qt), Mn && ht(ut, qt);
        }
        return Ut(E, at, Mn, qe, Me, Pt.current, ut);
      }
    }
    var ct = it.ReactCurrentOwner, et = it.ReactDebugCurrentFrame;
    function kt(E) {
      if (E) {
        var F = E._owner, ne = Dn(E.type, E._source, F ? F.type : null);
        et.setExtraStackFrame(ne);
      } else
        et.setExtraStackFrame(null);
    }
    var Gr;
    Gr = !1;
    function On(E) {
      return typeof E == "object" && E !== null && E.$$typeof === I;
    }
    function jn() {
      {
        if (ct.current) {
          var E = Le(ct.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function ks(E) {
      return "";
    }
    var ro = {};
    function ao(E) {
      {
        var F = jn();
        if (!F) {
          var ne = typeof E == "string" ? E : E.displayName || E.name;
          ne && (F = `

Check the top-level render call using <` + ne + ">.");
        }
        return F;
      }
    }
    function fu(E, F) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var ne = ao(F);
        if (ro[ne])
          return;
        ro[ne] = !0;
        var Me = "";
        E && E._owner && E._owner !== ct.current && (Me = " It was passed a child from " + Le(E._owner.type) + "."), kt(E), je('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, Me), kt(null);
      }
    }
    function du(E, F) {
      {
        if (typeof E != "object")
          return;
        if (An(E))
          for (var ne = 0; ne < E.length; ne++) {
            var Me = E[ne];
            On(Me) && fu(Me, F);
          }
        else if (On(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var qe = _e(E);
          if (typeof qe == "function" && qe !== E.entries)
            for (var We = qe.call(E), ut; !(ut = We.next()).done; )
              On(ut.value) && fu(ut.value, F);
        }
      }
    }
    function io(E) {
      {
        var F = E.type;
        if (F == null || typeof F == "string")
          return;
        var ne;
        if (typeof F == "function")
          ne = F.propTypes;
        else if (typeof F == "object" && (F.$$typeof === X || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        F.$$typeof === W))
          ne = F.propTypes;
        else
          return;
        if (ne) {
          var Me = Le(F);
          ba(ne, E.props, "prop", Me, E);
        } else if (F.PropTypes !== void 0 && !Gr) {
          Gr = !0;
          var qe = Le(F);
          je("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", qe || "Unknown");
        }
        typeof F.getDefaultProps == "function" && !F.getDefaultProps.isReactClassApproved && je("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ii(E) {
      {
        for (var F = Object.keys(E.props), ne = 0; ne < F.length; ne++) {
          var Me = F[ne];
          if (Me !== "children" && Me !== "key") {
            kt(E), je("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), kt(null);
            break;
          }
        }
        E.ref !== null && (kt(E), je("Invalid attribute `ref` supplied to `React.Fragment`."), kt(null));
      }
    }
    var Da = {};
    function Or(E, F, ne, Me, qe, We) {
      {
        var ut = It(E);
        if (!ut) {
          var at = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (at += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Mn = ks();
          Mn ? at += Mn : at += jn();
          var Wt;
          E === null ? Wt = "null" : An(E) ? Wt = "array" : E !== void 0 && E.$$typeof === I ? (Wt = "<" + (Le(E.type) || "Unknown") + " />", at = " Did you accidentally export a JSX literal instead of a component?") : Wt = typeof E, je("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Wt, at);
        }
        var qt = Mt(E, F, ne, qe, We);
        if (qt == null)
          return qt;
        if (ut) {
          var vr = F.children;
          if (vr !== void 0)
            if (Me)
              if (An(vr)) {
                for (var ui = 0; ui < vr.length; ui++)
                  du(vr[ui], E);
                Object.freeze && Object.freeze(vr);
              } else
                je("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              du(vr, E);
        }
        if (kn.call(F, "key")) {
          var oi = Le(E), Ze = Object.keys(F).filter(function(lo) {
            return lo !== "key";
          }), tt = Ze.length > 0 ? "{key: someKey, " + Ze.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Da[oi + tt]) {
            var si = Ze.length > 0 ? "{" + Ze.join(": ..., ") + ": ...}" : "{}";
            je(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, tt, oi, si, oi), Da[oi + tt] = !0;
          }
        }
        return E === Qe ? ii(qt) : io(qt), qt;
      }
    }
    function Ai(E, F, ne) {
      return Or(E, F, ne, !0);
    }
    function li(E, F, ne) {
      return Or(E, F, ne, !1);
    }
    var ji = li, Hi = Ai;
    Bp.Fragment = Qe, Bp.jsx = ji, Bp.jsxs = Hi;
  }()), Bp;
}
process.env.NODE_ENV === "production" ? h0.exports = KD() : h0.exports = qD();
var ge = h0.exports, m0 = { exports: {} }, Ra = {}, Hm = { exports: {} }, p0 = {};
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
function ZD() {
  return eT || (eT = 1, function(A) {
    function I(V, de) {
      var K = V.length;
      V.push(de);
      e: for (; 0 < K; ) {
        var Ge = K - 1 >>> 1, st = V[Ge];
        if (0 < Pe(st, de)) V[Ge] = de, V[K] = st, K = Ge;
        else break e;
      }
    }
    function b(V) {
      return V.length === 0 ? null : V[0];
    }
    function Qe(V) {
      if (V.length === 0) return null;
      var de = V[0], K = V.pop();
      if (K !== de) {
        V[0] = K;
        e: for (var Ge = 0, st = V.length, Ft = st >>> 1; Ge < Ft; ) {
          var Kt = 2 * (Ge + 1) - 1, fr = V[Kt], un = Kt + 1, nn = V[un];
          if (0 > Pe(fr, K)) un < st && 0 > Pe(nn, fr) ? (V[Ge] = nn, V[un] = K, Ge = un) : (V[Ge] = fr, V[Kt] = K, Ge = Kt);
          else if (un < st && 0 > Pe(nn, K)) V[Ge] = nn, V[un] = K, Ge = un;
          else break e;
        }
      }
      return de;
    }
    function Pe(V, de) {
      var K = V.sortIndex - de.sortIndex;
      return K !== 0 ? K : V.id - de.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ne = performance;
      A.unstable_now = function() {
        return Ne.now();
      };
    } else {
      var g = Date, Be = g.now();
      A.unstable_now = function() {
        return g.now() - Be;
      };
    }
    var X = [], q = [], Ce = 1, W = null, ae = 3, J = !1, ie = !1, ye = !1, _e = typeof setTimeout == "function" ? setTimeout : null, it = typeof clearTimeout == "function" ? clearTimeout : null, je = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function De(V) {
      for (var de = b(q); de !== null; ) {
        if (de.callback === null) Qe(q);
        else if (de.startTime <= V) Qe(q), de.sortIndex = de.expirationTime, I(X, de);
        else break;
        de = b(q);
      }
    }
    function $e(V) {
      if (ye = !1, De(V), !ie) if (b(X) !== null) ie = !0, fe(Re);
      else {
        var de = b(q);
        de !== null && He($e, de.startTime - V);
      }
    }
    function Re(V, de) {
      ie = !1, ye && (ye = !1, it(Dt), Dt = -1), J = !0;
      var K = ae;
      try {
        for (De(de), W = b(X); W !== null && (!(W.expirationTime > de) || V && !jt()); ) {
          var Ge = W.callback;
          if (typeof Ge == "function") {
            W.callback = null, ae = W.priorityLevel;
            var st = Ge(W.expirationTime <= de);
            de = A.unstable_now(), typeof st == "function" ? W.callback = st : W === b(X) && Qe(X), De(de);
          } else Qe(X);
          W = b(X);
        }
        if (W !== null) var Ft = !0;
        else {
          var Kt = b(q);
          Kt !== null && He($e, Kt.startTime - de), Ft = !1;
        }
        return Ft;
      } finally {
        W = null, ae = K, J = !1;
      }
    }
    var rt = !1, we = null, Dt = -1, Tt = 5, It = -1;
    function jt() {
      return !(A.unstable_now() - It < Tt);
    }
    function Rt() {
      if (we !== null) {
        var V = A.unstable_now();
        It = V;
        var de = !0;
        try {
          de = we(!0, V);
        } finally {
          de ? Le() : (rt = !1, we = null);
        }
      } else rt = !1;
    }
    var Le;
    if (typeof je == "function") Le = function() {
      je(Rt);
    };
    else if (typeof MessageChannel < "u") {
      var Ht = new MessageChannel(), Q = Ht.port2;
      Ht.port1.onmessage = Rt, Le = function() {
        Q.postMessage(null);
      };
    } else Le = function() {
      _e(Rt, 0);
    };
    function fe(V) {
      we = V, rt || (rt = !0, Le());
    }
    function He(V, de) {
      Dt = _e(function() {
        V(A.unstable_now());
      }, de);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, A.unstable_continueExecution = function() {
      ie || J || (ie = !0, fe(Re));
    }, A.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Tt = 0 < V ? Math.floor(1e3 / V) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return ae;
    }, A.unstable_getFirstCallbackNode = function() {
      return b(X);
    }, A.unstable_next = function(V) {
      switch (ae) {
        case 1:
        case 2:
        case 3:
          var de = 3;
          break;
        default:
          de = ae;
      }
      var K = ae;
      ae = de;
      try {
        return V();
      } finally {
        ae = K;
      }
    }, A.unstable_pauseExecution = function() {
    }, A.unstable_requestPaint = function() {
    }, A.unstable_runWithPriority = function(V, de) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var K = ae;
      ae = V;
      try {
        return de();
      } finally {
        ae = K;
      }
    }, A.unstable_scheduleCallback = function(V, de, K) {
      var Ge = A.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? Ge + K : Ge) : K = Ge, V) {
        case 1:
          var st = -1;
          break;
        case 2:
          st = 250;
          break;
        case 5:
          st = 1073741823;
          break;
        case 4:
          st = 1e4;
          break;
        default:
          st = 5e3;
      }
      return st = K + st, V = { id: Ce++, callback: de, priorityLevel: V, startTime: K, expirationTime: st, sortIndex: -1 }, K > Ge ? (V.sortIndex = K, I(q, V), b(X) === null && V === b(q) && (ye ? (it(Dt), Dt = -1) : ye = !0, He($e, K - Ge))) : (V.sortIndex = st, I(X, V), ie || J || (ie = !0, fe(Re))), V;
    }, A.unstable_shouldYield = jt, A.unstable_wrapCallback = function(V) {
      var de = ae;
      return function() {
        var K = ae;
        ae = de;
        try {
          return V.apply(this, arguments);
        } finally {
          ae = K;
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
function JD() {
  return tT || (tT = 1, function(A) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var I = !1, b = 5;
      function Qe(G, se) {
        var Fe = G.length;
        G.push(se), g(G, se, Fe);
      }
      function Pe(G) {
        return G.length === 0 ? null : G[0];
      }
      function Ne(G) {
        if (G.length === 0)
          return null;
        var se = G[0], Fe = G.pop();
        return Fe !== se && (G[0] = Fe, Be(G, Fe, 0)), se;
      }
      function g(G, se, Fe) {
        for (var Je = Fe; Je > 0; ) {
          var lt = Je - 1 >>> 1, ht = G[lt];
          if (X(ht, se) > 0)
            G[lt] = se, G[Je] = ht, Je = lt;
          else
            return;
        }
      }
      function Be(G, se, Fe) {
        for (var Je = Fe, lt = G.length, ht = lt >>> 1; Je < ht; ) {
          var Ut = (Je + 1) * 2 - 1, Mt = G[Ut], ct = Ut + 1, et = G[ct];
          if (X(Mt, se) < 0)
            ct < lt && X(et, Mt) < 0 ? (G[Je] = et, G[ct] = se, Je = ct) : (G[Je] = Mt, G[Ut] = se, Je = Ut);
          else if (ct < lt && X(et, se) < 0)
            G[Je] = et, G[ct] = se, Je = ct;
          else
            return;
        }
      }
      function X(G, se) {
        var Fe = G.sortIndex - se.sortIndex;
        return Fe !== 0 ? Fe : G.id - se.id;
      }
      var q = 1, Ce = 2, W = 3, ae = 4, J = 5;
      function ie(G, se) {
      }
      var ye = typeof performance == "object" && typeof performance.now == "function";
      if (ye) {
        var _e = performance;
        A.unstable_now = function() {
          return _e.now();
        };
      } else {
        var it = Date, je = it.now();
        A.unstable_now = function() {
          return it.now() - je;
        };
      }
      var De = 1073741823, $e = -1, Re = 250, rt = 5e3, we = 1e4, Dt = De, Tt = [], It = [], jt = 1, Rt = null, Le = W, Ht = !1, Q = !1, fe = !1, He = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, de = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function K(G) {
        for (var se = Pe(It); se !== null; ) {
          if (se.callback === null)
            Ne(It);
          else if (se.startTime <= G)
            Ne(It), se.sortIndex = se.expirationTime, Qe(Tt, se);
          else
            return;
          se = Pe(It);
        }
      }
      function Ge(G) {
        if (fe = !1, K(G), !Q)
          if (Pe(Tt) !== null)
            Q = !0, yt(st);
          else {
            var se = Pe(It);
            se !== null && $t(Ge, se.startTime - G);
          }
      }
      function st(G, se) {
        Q = !1, fe && (fe = !1, Pt()), Ht = !0;
        var Fe = Le;
        try {
          var Je;
          if (!I) return Ft(G, se);
        } finally {
          Rt = null, Le = Fe, Ht = !1;
        }
      }
      function Ft(G, se) {
        var Fe = se;
        for (K(Fe), Rt = Pe(Tt); Rt !== null && !(Rt.expirationTime > Fe && (!G || rn())); ) {
          var Je = Rt.callback;
          if (typeof Je == "function") {
            Rt.callback = null, Le = Rt.priorityLevel;
            var lt = Rt.expirationTime <= Fe, ht = Je(lt);
            Fe = A.unstable_now(), typeof ht == "function" ? Rt.callback = ht : Rt === Pe(Tt) && Ne(Tt), K(Fe);
          } else
            Ne(Tt);
          Rt = Pe(Tt);
        }
        if (Rt !== null)
          return !0;
        var Ut = Pe(It);
        return Ut !== null && $t(Ge, Ut.startTime - Fe), !1;
      }
      function Kt(G, se) {
        switch (G) {
          case q:
          case Ce:
          case W:
          case ae:
          case J:
            break;
          default:
            G = W;
        }
        var Fe = Le;
        Le = G;
        try {
          return se();
        } finally {
          Le = Fe;
        }
      }
      function fr(G) {
        var se;
        switch (Le) {
          case q:
          case Ce:
          case W:
            se = W;
            break;
          default:
            se = Le;
            break;
        }
        var Fe = Le;
        Le = se;
        try {
          return G();
        } finally {
          Le = Fe;
        }
      }
      function un(G) {
        var se = Le;
        return function() {
          var Fe = Le;
          Le = se;
          try {
            return G.apply(this, arguments);
          } finally {
            Le = Fe;
          }
        };
      }
      function nn(G, se, Fe) {
        var Je = A.unstable_now(), lt;
        if (typeof Fe == "object" && Fe !== null) {
          var ht = Fe.delay;
          typeof ht == "number" && ht > 0 ? lt = Je + ht : lt = Je;
        } else
          lt = Je;
        var Ut;
        switch (G) {
          case q:
            Ut = $e;
            break;
          case Ce:
            Ut = Re;
            break;
          case J:
            Ut = Dt;
            break;
          case ae:
            Ut = we;
            break;
          case W:
          default:
            Ut = rt;
            break;
        }
        var Mt = lt + Ut, ct = {
          id: jt++,
          callback: se,
          priorityLevel: G,
          startTime: lt,
          expirationTime: Mt,
          sortIndex: -1
        };
        return lt > Je ? (ct.sortIndex = lt, Qe(It, ct), Pe(Tt) === null && ct === Pe(It) && (fe ? Pt() : fe = !0, $t(Ge, lt - Je))) : (ct.sortIndex = Mt, Qe(Tt, ct), !Q && !Ht && (Q = !0, yt(st))), ct;
      }
      function hn() {
      }
      function ir() {
        !Q && !Ht && (Q = !0, yt(st));
      }
      function dr() {
        return Pe(Tt);
      }
      function mn(G) {
        G.callback = null;
      }
      function pr() {
        return Le;
      }
      var on = !1, Pn = null, Dn = -1, kn = b, lr = -1;
      function rn() {
        var G = A.unstable_now() - lr;
        return !(G < kn);
      }
      function _r() {
      }
      function ba(G) {
        if (G < 0 || G > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        G > 0 ? kn = Math.floor(1e3 / G) : kn = b;
      }
      var Yn = function() {
        if (Pn !== null) {
          var G = A.unstable_now();
          lr = G;
          var se = !0, Fe = !0;
          try {
            Fe = Pn(se, G);
          } finally {
            Fe ? An() : (on = !1, Pn = null);
          }
        } else
          on = !1;
      }, An;
      if (typeof de == "function")
        An = function() {
          de(Yn);
        };
      else if (typeof MessageChannel < "u") {
        var ze = new MessageChannel(), Vt = ze.port2;
        ze.port1.onmessage = Yn, An = function() {
          Vt.postMessage(null);
        };
      } else
        An = function() {
          He(Yn, 0);
        };
      function yt(G) {
        Pn = G, on || (on = !0, An());
      }
      function $t(G, se) {
        Dn = He(function() {
          G(A.unstable_now());
        }, se);
      }
      function Pt() {
        V(Dn), Dn = -1;
      }
      var _n = _r, yn = null;
      A.unstable_IdlePriority = J, A.unstable_ImmediatePriority = q, A.unstable_LowPriority = ae, A.unstable_NormalPriority = W, A.unstable_Profiling = yn, A.unstable_UserBlockingPriority = Ce, A.unstable_cancelCallback = mn, A.unstable_continueExecution = ir, A.unstable_forceFrameRate = ba, A.unstable_getCurrentPriorityLevel = pr, A.unstable_getFirstCallbackNode = dr, A.unstable_next = fr, A.unstable_pauseExecution = hn, A.unstable_requestPaint = _n, A.unstable_runWithPriority = Kt, A.unstable_scheduleCallback = nn, A.unstable_shouldYield = rn, A.unstable_wrapCallback = un, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(v0)), v0;
}
var nT;
function lT() {
  return nT || (nT = 1, process.env.NODE_ENV === "production" ? Hm.exports = ZD() : Hm.exports = JD()), Hm.exports;
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
function ek() {
  if (rT) return Ra;
  rT = 1;
  var A = Tf, I = lT();
  function b(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Qe = /* @__PURE__ */ new Set(), Pe = {};
  function Ne(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (Pe[n] = r, n = 0; n < r.length; n++) Qe.add(r[n]);
  }
  var Be = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), X = Object.prototype.hasOwnProperty, q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ce = {}, W = {};
  function ae(n) {
    return X.call(W, n) ? !0 : X.call(Ce, n) ? !1 : q.test(n) ? W[n] = !0 : (Ce[n] = !0, !1);
  }
  function J(n, r, l, o) {
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
  function ie(n, r, l, o) {
    if (r === null || typeof r > "u" || J(n, r, l, o)) return !0;
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
  function ye(n, r, l, o, c, d, h) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = h;
  }
  var _e = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    _e[n] = new ye(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    _e[r] = new ye(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    _e[n] = new ye(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    _e[n] = new ye(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    _e[n] = new ye(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    _e[n] = new ye(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    _e[n] = new ye(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    _e[n] = new ye(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    _e[n] = new ye(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var it = /[\-:]([a-z])/g;
  function je(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      it,
      je
    );
    _e[r] = new ye(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(it, je);
    _e[r] = new ye(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(it, je);
    _e[r] = new ye(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    _e[n] = new ye(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), _e.xlinkHref = new ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    _e[n] = new ye(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function De(n, r, l, o) {
    var c = _e.hasOwnProperty(r) ? _e[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ie(r, l, c, o) && (l = null), o || c === null ? ae(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var $e = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Re = Symbol.for("react.element"), rt = Symbol.for("react.portal"), we = Symbol.for("react.fragment"), Dt = Symbol.for("react.strict_mode"), Tt = Symbol.for("react.profiler"), It = Symbol.for("react.provider"), jt = Symbol.for("react.context"), Rt = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), Ht = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), He = Symbol.for("react.offscreen"), V = Symbol.iterator;
  function de(n) {
    return n === null || typeof n != "object" ? null : (n = V && n[V] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var K = Object.assign, Ge;
  function st(n) {
    if (Ge === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      Ge = r && r[1] || "";
    }
    return `
` + Ge + n;
  }
  var Ft = !1;
  function Kt(n, r) {
    if (!n || Ft) return "";
    Ft = !0;
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
      Ft = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? st(n) : "";
  }
  function fr(n) {
    switch (n.tag) {
      case 5:
        return st(n.type);
      case 16:
        return st("Lazy");
      case 13:
        return st("Suspense");
      case 19:
        return st("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Kt(n.type, !1), n;
      case 11:
        return n = Kt(n.type.render, !1), n;
      case 1:
        return n = Kt(n.type, !0), n;
      default:
        return "";
    }
  }
  function un(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case we:
        return "Fragment";
      case rt:
        return "Portal";
      case Tt:
        return "Profiler";
      case Dt:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Ht:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case jt:
        return (n.displayName || "Context") + ".Consumer";
      case It:
        return (n._context.displayName || "Context") + ".Provider";
      case Rt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Q:
        return r = n.displayName || null, r !== null ? r : un(n.type) || "Memo";
      case fe:
        r = n._payload, n = n._init;
        try {
          return un(n(r));
        } catch {
        }
    }
    return null;
  }
  function nn(n) {
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
        return un(r);
      case 8:
        return r === Dt ? "StrictMode" : "Mode";
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
  function hn(n) {
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
  function dr(n) {
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
  function mn(n) {
    n._valueTracker || (n._valueTracker = dr(n));
  }
  function pr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = ir(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function on(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Pn(n, r) {
    var l = r.checked;
    return K({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Dn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = hn(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function kn(n, r) {
    r = r.checked, r != null && De(n, "checked", r, !1);
  }
  function lr(n, r) {
    kn(n, r);
    var l = hn(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? _r(n, r.type, l) : r.hasOwnProperty("defaultValue") && _r(n, r.type, hn(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function rn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function _r(n, r, l) {
    (r !== "number" || on(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ba = Array.isArray;
  function Yn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + hn(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function An(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(b(91));
    return K({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ze(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(b(92));
        if (ba(l)) {
          if (1 < l.length) throw Error(b(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: hn(l) };
  }
  function Vt(n, r) {
    var l = hn(r.value), o = hn(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function yt(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function $t(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Pt(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? $t(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var _n, yn = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (_n = _n || document.createElement("div"), _n.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = _n.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function G(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var se = {
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
  }, Fe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(se).forEach(function(n) {
    Fe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), se[r] = se[n];
    });
  });
  function Je(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || se.hasOwnProperty(n) && se[n] ? ("" + r).trim() : r + "px";
  }
  function lt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Je(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var ht = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ut(n, r) {
    if (r) {
      if (ht[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(b(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(b(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(b(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(b(62));
    }
  }
  function Mt(n, r) {
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
  var ct = null;
  function et(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var kt = null, Gr = null, On = null;
  function jn(n) {
    if (n = xe(n)) {
      if (typeof kt != "function") throw Error(b(280));
      var r = n.stateNode;
      r && (r = Zt(r), kt(n.stateNode, n.type, r));
    }
  }
  function ks(n) {
    Gr ? On ? On.push(n) : On = [n] : Gr = n;
  }
  function ro() {
    if (Gr) {
      var n = Gr, r = On;
      if (On = Gr = null, jn(n), r) for (n = 0; n < r.length; n++) jn(r[n]);
    }
  }
  function ao(n, r) {
    return n(r);
  }
  function fu() {
  }
  var du = !1;
  function io(n, r, l) {
    if (du) return n(r, l);
    du = !0;
    try {
      return ao(n, r, l);
    } finally {
      du = !1, (Gr !== null || On !== null) && (fu(), ro());
    }
  }
  function ii(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Zt(l);
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
    if (l && typeof l != "function") throw Error(b(231, r, typeof l));
    return l;
  }
  var Da = !1;
  if (Be) try {
    var Or = {};
    Object.defineProperty(Or, "passive", { get: function() {
      Da = !0;
    } }), window.addEventListener("test", Or, Or), window.removeEventListener("test", Or, Or);
  } catch {
    Da = !1;
  }
  function Ai(n, r, l, o, c, d, h, S, C) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, M);
    } catch (B) {
      this.onError(B);
    }
  }
  var li = !1, ji = null, Hi = !1, E = null, F = { onError: function(n) {
    li = !0, ji = n;
  } };
  function ne(n, r, l, o, c, d, h, S, C) {
    li = !1, ji = null, Ai.apply(F, arguments);
  }
  function Me(n, r, l, o, c, d, h, S, C) {
    if (ne.apply(this, arguments), li) {
      if (li) {
        var M = ji;
        li = !1, ji = null;
      } else throw Error(b(198));
      Hi || (Hi = !0, E = M);
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
  function We(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function ut(n) {
    if (qe(n) !== n) throw Error(b(188));
  }
  function at(n) {
    var r = n.alternate;
    if (!r) {
      if (r = qe(n), r === null) throw Error(b(188));
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
          if (d === l) return ut(c), n;
          if (d === o) return ut(c), r;
          d = d.sibling;
        }
        throw Error(b(188));
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
          if (!h) throw Error(b(189));
        }
      }
      if (l.alternate !== o) throw Error(b(190));
    }
    if (l.tag !== 3) throw Error(b(188));
    return l.stateNode.current === l ? n : r;
  }
  function Mn(n) {
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
  var qt = I.unstable_scheduleCallback, vr = I.unstable_cancelCallback, ui = I.unstable_shouldYield, oi = I.unstable_requestPaint, Ze = I.unstable_now, tt = I.unstable_getCurrentPriorityLevel, si = I.unstable_ImmediatePriority, lo = I.unstable_UserBlockingPriority, uo = I.unstable_NormalPriority, $p = I.unstable_LowPriority, Rf = I.unstable_IdlePriority, oo = null, ka = null;
  function Pp(n) {
    if (ka && typeof ka.onCommitFiberRoot == "function") try {
      ka.onCommitFiberRoot(oo, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var la = Math.clz32 ? Math.clz32 : wf, Bm = Math.log, $m = Math.LN2;
  function wf(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Bm(n) / $m | 0) | 0;
  }
  var pu = 64, _a = 4194304;
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
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - la(r), c = 1 << l, o |= n[l], r &= ~c;
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
      var h = 31 - la(d), S = 1 << h, C = c[h];
      C === -1 ? (!(S & l) || S & o) && (c[h] = Pm(S, r)) : C <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function Df(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function _s() {
    var n = pu;
    return pu <<= 1, !(pu & 4194240) && (pu = 64), n;
  }
  function kf(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Cl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - la(r), n[r] = l;
  }
  function Ym(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - la(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Os(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - la(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var _t = 0;
  function _f(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ot, Of, Mf, Xe, Nf, hr = !1, Fi = [], ua = null, Vi = null, an = null, Yt = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), Qn = [], oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ci(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        ua = null;
        break;
      case "dragenter":
      case "dragleave":
        Vi = null;
        break;
      case "mouseover":
      case "mouseout":
        an = null;
        break;
      case "pointerover":
      case "pointerout":
        Yt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        so.delete(r.pointerId);
    }
  }
  function co(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = xe(r), r !== null && Of(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Lf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return ua = co(ua, n, r, l, o, c), !0;
      case "dragenter":
        return Vi = co(Vi, n, r, l, o, c), !0;
      case "mouseover":
        return an = co(an, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Yt.set(d, co(Yt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, so.set(d, co(so.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function zf(n) {
    var r = Ml(n.target);
    if (r !== null) {
      var l = qe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = We(l), r !== null) {
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
  function fo(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Ns(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        ct = o, l.target.dispatchEvent(o), ct = null;
      } else return r = xe(l), r !== null && Of(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Yp(n, r, l) {
    fo(n) && l.delete(r);
  }
  function Qm() {
    hr = !1, ua !== null && fo(ua) && (ua = null), Vi !== null && fo(Vi) && (Vi = null), an !== null && fo(an) && (an = null), Yt.forEach(Yp), so.forEach(Yp);
  }
  function po(n, r) {
    n.blockedOn === r && (n.blockedOn = null, hr || (hr = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, Qm)));
  }
  function Bi(n) {
    function r(c) {
      return po(c, n);
    }
    if (0 < Fi.length) {
      po(Fi[0], n);
      for (var l = 1; l < Fi.length; l++) {
        var o = Fi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (ua !== null && po(ua, n), Vi !== null && po(Vi, n), an !== null && po(an, n), Yt.forEach(r), so.forEach(r), l = 0; l < Qn.length; l++) o = Qn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Qn.length && (l = Qn[0], l.blockedOn === null); ) zf(l), l.blockedOn === null && Qn.shift();
  }
  var xl = $e.ReactCurrentBatchConfig, Tl = !0;
  function Qp(n, r, l, o) {
    var c = _t, d = xl.transition;
    xl.transition = null;
    try {
      _t = 1, Ms(n, r, l, o);
    } finally {
      _t = c, xl.transition = d;
    }
  }
  function Ip(n, r, l, o) {
    var c = _t, d = xl.transition;
    xl.transition = null;
    try {
      _t = 4, Ms(n, r, l, o);
    } finally {
      _t = c, xl.transition = d;
    }
  }
  function Ms(n, r, l, o) {
    if (Tl) {
      var c = Ns(n, r, l, o);
      if (c === null) Ks(n, r, o, vo, l), ci(n, o);
      else if (Lf(c, n, r, l, o)) o.stopPropagation();
      else if (ci(n, o), r & 4 && -1 < oa.indexOf(n)) {
        for (; c !== null; ) {
          var d = xe(c);
          if (d !== null && Ot(d), d = Ns(n, r, l, o), d === null && Ks(n, r, o, vo, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Ks(n, r, o, null, l);
    }
  }
  var vo = null;
  function Ns(n, r, l, o) {
    if (vo = null, n = et(o), n = Ml(n), n !== null) if (r = qe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = We(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return vo = n, null;
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
        switch (tt()) {
          case si:
            return 1;
          case lo:
            return 4;
          case uo:
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
  var fi = null, zs = null, vu = null;
  function Uf() {
    if (vu) return vu;
    var n, r = zs, l = r.length, o, c = "value" in fi ? fi.value : fi.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var h = l - n;
    for (o = 1; o <= h && r[l - o] === c[d - o]; o++) ;
    return vu = c.slice(n, 1 < o ? 1 - o : void 0);
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
  function Mr(n) {
    function r(l, o, c, d, h) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = h, this.currentTarget = null;
      for (var S in n) n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? As : js, this.isPropagationStopped = js, this;
    }
    return K(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = As);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = As);
    }, persist: function() {
    }, isPersistent: As }), r;
  }
  var Rl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Hs = Mr(Rl), hu = K({}, Rl, { view: 0, detail: 0 }), Im = Mr(hu), Af, In, wl, ho = K({}, hu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== wl && (wl && n.type === "mousemove" ? (Af = n.screenX - wl.screenX, In = n.screenY - wl.screenY) : In = Af = 0, wl = n), Af);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : In;
  } }), jf = Mr(ho), Wm = K({}, ho, { dataTransfer: 0 }), mu = Mr(Wm), Hf = K({}, hu, { relatedTarget: 0 }), Fs = Mr(Hf), Gm = K({}, Rl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xm = Mr(Gm), Km = K({}, Rl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Wp = Mr(Km), Ff = K({}, Rl, { data: 0 }), Vf = Mr(Ff), Gp = {
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
  function di(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = qm[n]) ? !!r[n] : !1;
  }
  function Bf() {
    return di;
  }
  var $f = K({}, hu, { key: function(n) {
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
  } }), Pf = Mr($f), Yf = K({}, ho, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Kp = Mr(Yf), Vs = K({}, hu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bf }), qp = Mr(Vs), Nr = K({}, Rl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pi = Mr(Nr), gn = K({}, ho, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), vi = Mr(gn), Qf = [9, 13, 27, 32], yu = Be && "CompositionEvent" in window, mo = null;
  Be && "documentMode" in document && (mo = document.documentMode);
  var yo = Be && "TextEvent" in window && !mo, Zp = Be && (!yu || mo && 8 < mo && 11 >= mo), Jp = " ", Bs = !1;
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
  var gu = !1;
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
    if (gu) return n === "compositionend" || !yu && ev(n, r) ? (n = Uf(), vu = zs = fi = null, gu = !1, n) : null;
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
    ks(o), r = To(r, "onChange"), 0 < r.length && (l = new Hs("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Fa = null, bl = null;
  function av(n) {
    _l(n, 0);
  }
  function go(n) {
    var r = Ma(n);
    if (pr(r)) return n;
  }
  function ey(n, r) {
    if (n === "change") return r;
  }
  var iv = !1;
  if (Be) {
    var Wf;
    if (Be) {
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
    Fa && (Fa.detachEvent("onpropertychange", ov), bl = Fa = null);
  }
  function ov(n) {
    if (n.propertyName === "value" && go(bl)) {
      var r = [];
      If(r, bl, n, et(n)), io(av, r);
    }
  }
  function ty(n, r, l) {
    n === "focusin" ? (uv(), Fa = r, bl = l, Fa.attachEvent("onpropertychange", ov)) : n === "focusout" && uv();
  }
  function sv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return go(bl);
  }
  function ny(n, r) {
    if (n === "click") return go(r);
  }
  function cv(n, r) {
    if (n === "input" || n === "change") return go(r);
  }
  function ry(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Oa = typeof Object.is == "function" ? Object.is : ry;
  function So(n, r) {
    if (Oa(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!X.call(r, c) || !Oa(n[c], r[c])) return !1;
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
  function $i(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? $i(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Eo() {
    for (var n = window, r = on(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = on(n.document);
    }
    return r;
  }
  function Ps(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Su(n) {
    var r = Eo(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && $i(l.ownerDocument.documentElement, l)) {
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
  var ay = Be && "documentMode" in document && 11 >= document.documentMode, Eu = null, Xf = null, Co = null, Kf = !1;
  function qf(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Kf || Eu == null || Eu !== on(o) || (o = Eu, "selectionStart" in o && Ps(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Co && So(Co, o) || (Co = o, o = To(Xf, "onSelect"), 0 < o.length && (r = new Hs("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Eu)));
  }
  function Ys(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Dl = { animationend: Ys("Animation", "AnimationEnd"), animationiteration: Ys("Animation", "AnimationIteration"), animationstart: Ys("Animation", "AnimationStart"), transitionend: Ys("Transition", "TransitionEnd") }, Wn = {}, Zf = {};
  Be && (Zf = document.createElement("div").style, "AnimationEvent" in window || (delete Dl.animationend.animation, delete Dl.animationiteration.animation, delete Dl.animationstart.animation), "TransitionEvent" in window || delete Dl.transitionend.transition);
  function Qs(n) {
    if (Wn[n]) return Wn[n];
    if (!Dl[n]) return n;
    var r = Dl[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Zf) return Wn[n] = r[l];
    return n;
  }
  var dv = Qs("animationend"), pv = Qs("animationiteration"), vv = Qs("animationstart"), hv = Qs("transitionend"), Jf = /* @__PURE__ */ new Map(), Is = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function sa(n, r) {
    Jf.set(n, r), Ne(r, [n]);
  }
  for (var ed = 0; ed < Is.length; ed++) {
    var kl = Is[ed], iy = kl.toLowerCase(), ly = kl[0].toUpperCase() + kl.slice(1);
    sa(iy, "on" + ly);
  }
  sa(dv, "onAnimationEnd"), sa(pv, "onAnimationIteration"), sa(vv, "onAnimationStart"), sa("dblclick", "onDoubleClick"), sa("focusin", "onFocus"), sa("focusout", "onBlur"), sa(hv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), Ne("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ne("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ne("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ne("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), td = new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));
  function Ws(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Me(o, r, void 0, n), n.currentTarget = null;
  }
  function _l(n, r) {
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
    if (Hi) throw n = E, Hi = !1, E = null, n;
  }
  function wt(n, r) {
    var l = r[bo];
    l === void 0 && (l = r[bo] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (mv(r, n, 2, !1), l.add(o));
  }
  function Gs(n, r, l) {
    var o = 0;
    r && (o |= 4), mv(l, n, o, r);
  }
  var Xs = "_reactListening" + Math.random().toString(36).slice(2);
  function Cu(n) {
    if (!n[Xs]) {
      n[Xs] = !0, Qe.forEach(function(l) {
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
    l = c.bind(null, r, l, n), c = void 0, !Da || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
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
          if (h = Ml(S), h === null) return;
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
      var M = d, B = et(l), P = [];
      e: {
        var H = Jf.get(n);
        if (H !== void 0) {
          var le = Hs, pe = n;
          switch (n) {
            case "keypress":
              if (Us(l) === 0) break e;
            case "keydown":
            case "keyup":
              le = Pf;
              break;
            case "focusin":
              pe = "focus", le = Fs;
              break;
            case "focusout":
              pe = "blur", le = Fs;
              break;
            case "beforeblur":
            case "afterblur":
              le = Fs;
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
              le = jf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              le = mu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              le = qp;
              break;
            case dv:
            case pv:
            case vv:
              le = Xm;
              break;
            case hv:
              le = pi;
              break;
            case "scroll":
              le = Im;
              break;
            case "wheel":
              le = vi;
              break;
            case "copy":
            case "cut":
            case "paste":
              le = Wp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              le = Kp;
          }
          var me = (r & 4) !== 0, pn = !me && n === "scroll", w = me ? H !== null ? H + "Capture" : null : H;
          me = [];
          for (var T = M, _; T !== null; ) {
            _ = T;
            var $ = _.stateNode;
            if (_.tag === 5 && $ !== null && (_ = $, w !== null && ($ = ii(T, w), $ != null && me.push(xu(T, $, _)))), pn) break;
            T = T.return;
          }
          0 < me.length && (H = new le(H, pe, null, l, B), P.push({ event: H, listeners: me }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (H = n === "mouseover" || n === "pointerover", le = n === "mouseout" || n === "pointerout", H && l !== ct && (pe = l.relatedTarget || l.fromElement) && (Ml(pe) || pe[hi])) break e;
          if ((le || H) && (H = B.window === B ? B : (H = B.ownerDocument) ? H.defaultView || H.parentWindow : window, le ? (pe = l.relatedTarget || l.toElement, le = M, pe = pe ? Ml(pe) : null, pe !== null && (pn = qe(pe), pe !== pn || pe.tag !== 5 && pe.tag !== 6) && (pe = null)) : (le = null, pe = M), le !== pe)) {
            if (me = jf, $ = "onMouseLeave", w = "onMouseEnter", T = "mouse", (n === "pointerout" || n === "pointerover") && (me = Kp, $ = "onPointerLeave", w = "onPointerEnter", T = "pointer"), pn = le == null ? H : Ma(le), _ = pe == null ? H : Ma(pe), H = new me($, T + "leave", le, l, B), H.target = pn, H.relatedTarget = _, $ = null, Ml(B) === M && (me = new me(w, T + "enter", pe, l, B), me.target = _, me.relatedTarget = pn, $ = me), pn = $, le && pe) t: {
              for (me = le, w = pe, T = 0, _ = me; _; _ = Pi(_)) T++;
              for (_ = 0, $ = w; $; $ = Pi($)) _++;
              for (; 0 < T - _; ) me = Pi(me), T--;
              for (; 0 < _ - T; ) w = Pi(w), _--;
              for (; T--; ) {
                if (me === w || w !== null && me === w.alternate) break t;
                me = Pi(me), w = Pi(w);
              }
              me = null;
            }
            else me = null;
            le !== null && yv(P, H, le, me, !1), pe !== null && pn !== null && yv(P, pn, pe, me, !0);
          }
        }
        e: {
          if (H = M ? Ma(M) : window, le = H.nodeName && H.nodeName.toLowerCase(), le === "select" || le === "input" && H.type === "file") var ve = ey;
          else if (rv(H)) if (iv) ve = cv;
          else {
            ve = sv;
            var ke = ty;
          }
          else (le = H.nodeName) && le.toLowerCase() === "input" && (H.type === "checkbox" || H.type === "radio") && (ve = ny);
          if (ve && (ve = ve(n, M))) {
            If(P, ve, l, B);
            break e;
          }
          ke && ke(n, H, M), n === "focusout" && (ke = H._wrapperState) && ke.controlled && H.type === "number" && _r(H, "number", H.value);
        }
        switch (ke = M ? Ma(M) : window, n) {
          case "focusin":
            (rv(ke) || ke.contentEditable === "true") && (Eu = ke, Xf = M, Co = null);
            break;
          case "focusout":
            Co = Xf = Eu = null;
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
        var Oe;
        if (yu) e: {
          switch (n) {
            case "compositionstart":
              var Ve = "onCompositionStart";
              break e;
            case "compositionend":
              Ve = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ve = "onCompositionUpdate";
              break e;
          }
          Ve = void 0;
        }
        else gu ? ev(n, l) && (Ve = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ve = "onCompositionStart");
        Ve && (Zp && l.locale !== "ko" && (gu || Ve !== "onCompositionStart" ? Ve === "onCompositionEnd" && gu && (Oe = Uf()) : (fi = B, zs = "value" in fi ? fi.value : fi.textContent, gu = !0)), ke = To(M, Ve), 0 < ke.length && (Ve = new Vf(Ve, n, null, l, B), P.push({ event: Ve, listeners: ke }), Oe ? Ve.data = Oe : (Oe = tv(l), Oe !== null && (Ve.data = Oe)))), (Oe = yo ? nv(n, l) : Zm(n, l)) && (M = To(M, "onBeforeInput"), 0 < M.length && (B = new Vf("onBeforeInput", "beforeinput", null, l, B), P.push({ event: B, listeners: M }), B.data = Oe));
      }
      _l(P, r);
    });
  }
  function xu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function To(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ii(n, l), d != null && o.unshift(xu(n, d, c)), d = ii(n, r), d != null && o.push(xu(n, d, c))), n = n.return;
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
  function yv(n, r, l, o, c) {
    for (var d = r._reactName, h = []; l !== null && l !== o; ) {
      var S = l, C = S.alternate, M = S.stateNode;
      if (C !== null && C === o) break;
      S.tag === 5 && M !== null && (S = M, c ? (C = ii(l, d), C != null && h.unshift(xu(l, C, S))) : c || (C = ii(l, d), C != null && h.push(xu(l, C, S)))), l = l.return;
    }
    h.length !== 0 && n.push({ event: r, listeners: h });
  }
  var gv = /\r\n?/g, uy = /\u0000|\uFFFD/g;
  function Sv(n) {
    return (typeof n == "string" ? n : "" + n).replace(gv, `
`).replace(uy, "");
  }
  function qs(n, r, l) {
    if (r = Sv(r), Sv(n) !== r && l) throw Error(b(425));
  }
  function Yi() {
  }
  var Ro = null, Ol = null;
  function Zs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Js = typeof setTimeout == "function" ? setTimeout : void 0, nd = typeof clearTimeout == "function" ? clearTimeout : void 0, Ev = typeof Promise == "function" ? Promise : void 0, Tu = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ev < "u" ? function(n) {
    return Ev.resolve(null).then(n).catch(ec);
  } : Js;
  function ec(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ru(n, r) {
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
  var Qi = Math.random().toString(36).slice(2), Ba = "__reactFiber$" + Qi, wo = "__reactProps$" + Qi, hi = "__reactContainer$" + Qi, bo = "__reactEvents$" + Qi, wu = "__reactListeners$" + Qi, oy = "__reactHandles$" + Qi;
  function Ml(n) {
    var r = n[Ba];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[hi] || l[Ba]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Cv(n); n !== null; ) {
          if (l = n[Ba]) return l;
          n = Cv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function xe(n) {
    return n = n[Ba] || n[hi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ma(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(b(33));
  }
  function Zt(n) {
    return n[wo] || null;
  }
  var ft = [], ca = -1;
  function fa(n) {
    return { current: n };
  }
  function Bt(n) {
    0 > ca || (n.current = ft[ca], ft[ca] = null, ca--);
  }
  function Ee(n, r) {
    ca++, ft[ca] = n.current, n.current = r;
  }
  var ur = {}, ln = fa(ur), Nn = fa(!1), Lr = ur;
  function zr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return ur;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function bu() {
    Bt(Nn), Bt(ln);
  }
  function xv(n, r, l) {
    if (ln.current !== ur) throw Error(b(168));
    Ee(ln, r), Ee(Nn, l);
  }
  function Do(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(b(108, nn(n) || "Unknown", c));
    return K({}, l, o);
  }
  function Hn(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ur, Lr = ln.current, Ee(ln, n), Ee(Nn, Nn.current), !0;
  }
  function tc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(b(169));
    l ? (n = Do(n, r, Lr), o.__reactInternalMemoizedMergedChildContext = n, Bt(Nn), Bt(ln), Ee(ln, n)) : Bt(Nn), Ee(Nn, l);
  }
  var $a = null, Du = !1, mi = !1;
  function nc(n) {
    $a === null ? $a = [n] : $a.push(n);
  }
  function Ii(n) {
    Du = !0, nc(n);
  }
  function Pa() {
    if (!mi && $a !== null) {
      mi = !0;
      var n = 0, r = _t;
      try {
        var l = $a;
        for (_t = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        $a = null, Du = !1;
      } catch (c) {
        throw $a !== null && ($a = $a.slice(n + 1)), qt(si, Pa), c;
      } finally {
        _t = r, mi = !1;
      }
    }
    return null;
  }
  var Wi = [], Gi = 0, Xi = null, yi = 0, En = [], da = 0, Xr = null, Ya = 1, Qa = "";
  function Nl(n, r) {
    Wi[Gi++] = yi, Wi[Gi++] = Xi, Xi = n, yi = r;
  }
  function Tv(n, r, l) {
    En[da++] = Ya, En[da++] = Qa, En[da++] = Xr, Xr = n;
    var o = Ya;
    n = Qa;
    var c = 32 - la(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - la(r) + c;
    if (30 < d) {
      var h = c - c % 5;
      d = (o & (1 << h) - 1).toString(32), o >>= h, c -= h, Ya = 1 << 32 - la(r) + c | l << c | o, Qa = d + n;
    } else Ya = 1 << d | l << c | o, Qa = n;
  }
  function rc(n) {
    n.return !== null && (Nl(n, 1), Tv(n, 1, 0));
  }
  function ac(n) {
    for (; n === Xi; ) Xi = Wi[--Gi], Wi[Gi] = null, yi = Wi[--Gi], Wi[Gi] = null;
    for (; n === Xr; ) Xr = En[--da], En[da] = null, Qa = En[--da], En[da] = null, Ya = En[--da], En[da] = null;
  }
  var Ur = null, Ar = null, Gt = !1, pa = null;
  function rd(n, r) {
    var l = ga(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Rv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ur = n, Ar = Va(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ur = n, Ar = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Xr !== null ? { id: Ya, overflow: Qa } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ga(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ur = n, Ar = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ad(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function id(n) {
    if (Gt) {
      var r = Ar;
      if (r) {
        var l = r;
        if (!Rv(n, r)) {
          if (ad(n)) throw Error(b(418));
          r = Va(l.nextSibling);
          var o = Ur;
          r && Rv(n, r) ? rd(o, l) : (n.flags = n.flags & -4097 | 2, Gt = !1, Ur = n);
        }
      } else {
        if (ad(n)) throw Error(b(418));
        n.flags = n.flags & -4097 | 2, Gt = !1, Ur = n;
      }
    }
  }
  function Ln(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Ur = n;
  }
  function ic(n) {
    if (n !== Ur) return !1;
    if (!Gt) return Ln(n), Gt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Zs(n.type, n.memoizedProps)), r && (r = Ar)) {
      if (ad(n)) throw ko(), Error(b(418));
      for (; r; ) rd(n, r), r = Va(r.nextSibling);
    }
    if (Ln(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(b(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Ar = Va(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ar = null;
      }
    } else Ar = Ur ? Va(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ko() {
    for (var n = Ar; n; ) n = Va(n.nextSibling);
  }
  function Ki() {
    Ar = Ur = null, Gt = !1;
  }
  function gi(n) {
    pa === null ? pa = [n] : pa.push(n);
  }
  var sy = $e.ReactCurrentBatchConfig;
  function Ll(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(b(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(b(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(h) {
          var S = c.refs;
          h === null ? delete S[d] : S[d] = h;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(b(284));
      if (!l._owner) throw Error(b(290, n));
    }
    return n;
  }
  function lc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(b(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function wv(n) {
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
    function S(w, T, _, $) {
      return T === null || T.tag !== 6 ? (T = Ad(_, w.mode, $), T.return = w, T) : (T = c(T, _), T.return = w, T);
    }
    function C(w, T, _, $) {
      var ve = _.type;
      return ve === we ? B(w, T, _.props.children, $, _.key) : T !== null && (T.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === fe && wv(ve) === T.type) ? ($ = c(T, _.props), $.ref = Ll(w, T, _), $.return = w, $) : ($ = as(_.type, _.key, _.props, null, w.mode, $), $.ref = Ll(w, T, _), $.return = w, $);
    }
    function M(w, T, _, $) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== _.containerInfo || T.stateNode.implementation !== _.implementation ? (T = Fc(_, w.mode, $), T.return = w, T) : (T = c(T, _.children || []), T.return = w, T);
    }
    function B(w, T, _, $, ve) {
      return T === null || T.tag !== 7 ? (T = Ri(_, w.mode, $, ve), T.return = w, T) : (T = c(T, _), T.return = w, T);
    }
    function P(w, T, _) {
      if (typeof T == "string" && T !== "" || typeof T == "number") return T = Ad("" + T, w.mode, _), T.return = w, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Re:
            return _ = as(T.type, T.key, T.props, null, w.mode, _), _.ref = Ll(w, null, T), _.return = w, _;
          case rt:
            return T = Fc(T, w.mode, _), T.return = w, T;
          case fe:
            var $ = T._init;
            return P(w, $(T._payload), _);
        }
        if (ba(T) || de(T)) return T = Ri(T, w.mode, _, null), T.return = w, T;
        lc(w, T);
      }
      return null;
    }
    function H(w, T, _, $) {
      var ve = T !== null ? T.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return ve !== null ? null : S(w, T, "" + _, $);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Re:
            return _.key === ve ? C(w, T, _, $) : null;
          case rt:
            return _.key === ve ? M(w, T, _, $) : null;
          case fe:
            return ve = _._init, H(
              w,
              T,
              ve(_._payload),
              $
            );
        }
        if (ba(_) || de(_)) return ve !== null ? null : B(w, T, _, $, null);
        lc(w, _);
      }
      return null;
    }
    function le(w, T, _, $, ve) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") return w = w.get(_) || null, S(T, w, "" + $, ve);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case Re:
            return w = w.get($.key === null ? _ : $.key) || null, C(T, w, $, ve);
          case rt:
            return w = w.get($.key === null ? _ : $.key) || null, M(T, w, $, ve);
          case fe:
            var ke = $._init;
            return le(w, T, _, ke($._payload), ve);
        }
        if (ba($) || de($)) return w = w.get(_) || null, B(T, w, $, ve, null);
        lc(T, $);
      }
      return null;
    }
    function pe(w, T, _, $) {
      for (var ve = null, ke = null, Oe = T, Ve = T = 0, Bn = null; Oe !== null && Ve < _.length; Ve++) {
        Oe.index > Ve ? (Bn = Oe, Oe = null) : Bn = Oe.sibling;
        var Et = H(w, Oe, _[Ve], $);
        if (Et === null) {
          Oe === null && (Oe = Bn);
          break;
        }
        n && Oe && Et.alternate === null && r(w, Oe), T = d(Et, T, Ve), ke === null ? ve = Et : ke.sibling = Et, ke = Et, Oe = Bn;
      }
      if (Ve === _.length) return l(w, Oe), Gt && Nl(w, Ve), ve;
      if (Oe === null) {
        for (; Ve < _.length; Ve++) Oe = P(w, _[Ve], $), Oe !== null && (T = d(Oe, T, Ve), ke === null ? ve = Oe : ke.sibling = Oe, ke = Oe);
        return Gt && Nl(w, Ve), ve;
      }
      for (Oe = o(w, Oe); Ve < _.length; Ve++) Bn = le(Oe, w, Ve, _[Ve], $), Bn !== null && (n && Bn.alternate !== null && Oe.delete(Bn.key === null ? Ve : Bn.key), T = d(Bn, T, Ve), ke === null ? ve = Bn : ke.sibling = Bn, ke = Bn);
      return n && Oe.forEach(function(ul) {
        return r(w, ul);
      }), Gt && Nl(w, Ve), ve;
    }
    function me(w, T, _, $) {
      var ve = de(_);
      if (typeof ve != "function") throw Error(b(150));
      if (_ = ve.call(_), _ == null) throw Error(b(151));
      for (var ke = ve = null, Oe = T, Ve = T = 0, Bn = null, Et = _.next(); Oe !== null && !Et.done; Ve++, Et = _.next()) {
        Oe.index > Ve ? (Bn = Oe, Oe = null) : Bn = Oe.sibling;
        var ul = H(w, Oe, Et.value, $);
        if (ul === null) {
          Oe === null && (Oe = Bn);
          break;
        }
        n && Oe && ul.alternate === null && r(w, Oe), T = d(ul, T, Ve), ke === null ? ve = ul : ke.sibling = ul, ke = ul, Oe = Bn;
      }
      if (Et.done) return l(
        w,
        Oe
      ), Gt && Nl(w, Ve), ve;
      if (Oe === null) {
        for (; !Et.done; Ve++, Et = _.next()) Et = P(w, Et.value, $), Et !== null && (T = d(Et, T, Ve), ke === null ? ve = Et : ke.sibling = Et, ke = Et);
        return Gt && Nl(w, Ve), ve;
      }
      for (Oe = o(w, Oe); !Et.done; Ve++, Et = _.next()) Et = le(Oe, w, Ve, Et.value, $), Et !== null && (n && Et.alternate !== null && Oe.delete(Et.key === null ? Ve : Et.key), T = d(Et, T, Ve), ke === null ? ve = Et : ke.sibling = Et, ke = Et);
      return n && Oe.forEach(function(uh) {
        return r(w, uh);
      }), Gt && Nl(w, Ve), ve;
    }
    function pn(w, T, _, $) {
      if (typeof _ == "object" && _ !== null && _.type === we && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case Re:
            e: {
              for (var ve = _.key, ke = T; ke !== null; ) {
                if (ke.key === ve) {
                  if (ve = _.type, ve === we) {
                    if (ke.tag === 7) {
                      l(w, ke.sibling), T = c(ke, _.props.children), T.return = w, w = T;
                      break e;
                    }
                  } else if (ke.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === fe && wv(ve) === ke.type) {
                    l(w, ke.sibling), T = c(ke, _.props), T.ref = Ll(w, ke, _), T.return = w, w = T;
                    break e;
                  }
                  l(w, ke);
                  break;
                } else r(w, ke);
                ke = ke.sibling;
              }
              _.type === we ? (T = Ri(_.props.children, w.mode, $, _.key), T.return = w, w = T) : ($ = as(_.type, _.key, _.props, null, w.mode, $), $.ref = Ll(w, T, _), $.return = w, w = $);
            }
            return h(w);
          case rt:
            e: {
              for (ke = _.key; T !== null; ) {
                if (T.key === ke) if (T.tag === 4 && T.stateNode.containerInfo === _.containerInfo && T.stateNode.implementation === _.implementation) {
                  l(w, T.sibling), T = c(T, _.children || []), T.return = w, w = T;
                  break e;
                } else {
                  l(w, T);
                  break;
                }
                else r(w, T);
                T = T.sibling;
              }
              T = Fc(_, w.mode, $), T.return = w, w = T;
            }
            return h(w);
          case fe:
            return ke = _._init, pn(w, T, ke(_._payload), $);
        }
        if (ba(_)) return pe(w, T, _, $);
        if (de(_)) return me(w, T, _, $);
        lc(w, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" ? (_ = "" + _, T !== null && T.tag === 6 ? (l(w, T.sibling), T = c(T, _), T.return = w, w = T) : (l(w, T), T = Ad(_, w.mode, $), T.return = w, w = T), h(w)) : l(w, T);
    }
    return pn;
  }
  var sn = zl(!0), ee = zl(!1), Kr = fa(null), jr = null, ku = null, ld = null;
  function ud() {
    ld = ku = jr = null;
  }
  function od(n) {
    var r = Kr.current;
    Bt(Kr), n._currentValue = r;
  }
  function sd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Jt(n, r) {
    jr = n, ld = ku = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (xn = !0), n.firstContext = null);
  }
  function va(n) {
    var r = n._currentValue;
    if (ld !== n) if (n = { context: n, memoizedValue: r, next: null }, ku === null) {
      if (jr === null) throw Error(b(308));
      ku = n, jr.dependencies = { lanes: 0, firstContext: n };
    } else ku = ku.next = n;
    return r;
  }
  var Ul = null;
  function cd(n) {
    Ul === null ? Ul = [n] : Ul.push(n);
  }
  function fd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, qr(n, o);
  }
  function qr(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Zr = !1;
  function dd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function bv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Si(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function qi(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, dt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, qr(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, qr(n, l);
  }
  function uc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Os(n, l);
    }
  }
  function Dv(n, r) {
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
    Zr = !1;
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
        var H = S.lane, le = S.eventTime;
        if ((o & H) === H) {
          B !== null && (B = B.next = {
            eventTime: le,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var pe = n, me = S;
            switch (H = r, le = l, me.tag) {
              case 1:
                if (pe = me.payload, typeof pe == "function") {
                  P = pe.call(le, P, H);
                  break e;
                }
                P = pe;
                break e;
              case 3:
                pe.flags = pe.flags & -65537 | 128;
              case 0:
                if (pe = me.payload, H = typeof pe == "function" ? pe.call(le, P, H) : pe, H == null) break e;
                P = K({}, P, H);
                break e;
              case 2:
                Zr = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, H = c.effects, H === null ? c.effects = [S] : H.push(S));
        } else le = { eventTime: le, lane: H, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, B === null ? (M = B = le, C = P) : B = B.next = le, h |= H;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null) break;
          H = S, S = H.next, H.next = null, c.lastBaseUpdate = H, c.shared.pending = null;
        }
      } while (!0);
      if (B === null && (C = P), c.baseState = C, c.firstBaseUpdate = M, c.lastBaseUpdate = B, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          h |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ka |= h, n.lanes = h, n.memoizedState = P;
    }
  }
  function pd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(b(191, c));
        c.call(o);
      }
    }
  }
  var Oo = {}, Ia = fa(Oo), Mo = fa(Oo), No = fa(Oo);
  function Al(n) {
    if (n === Oo) throw Error(b(174));
    return n;
  }
  function vd(n, r) {
    switch (Ee(No, r), Ee(Mo, n), Ee(Ia, Oo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Pt(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Pt(r, n);
    }
    Bt(Ia), Ee(Ia, r);
  }
  function jl() {
    Bt(Ia), Bt(Mo), Bt(No);
  }
  function kv(n) {
    Al(No.current);
    var r = Al(Ia.current), l = Pt(r, n.type);
    r !== l && (Ee(Mo, n), Ee(Ia, l));
  }
  function oc(n) {
    Mo.current === n && (Bt(Ia), Bt(Mo));
  }
  var en = fa(0);
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
  var Lo = [];
  function Te() {
    for (var n = 0; n < Lo.length; n++) Lo[n]._workInProgressVersionPrimary = null;
    Lo.length = 0;
  }
  var nt = $e.ReactCurrentDispatcher, gt = $e.ReactCurrentBatchConfig, Nt = 0, St = null, Cn = null, Fn = null, cc = !1, zo = !1, Hl = 0, j = 0;
  function mt() {
    throw Error(b(321));
  }
  function Ue(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Oa(n[l], r[l])) return !1;
    return !0;
  }
  function Zi(n, r, l, o, c, d) {
    if (Nt = d, St = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, nt.current = n === null || n.memoizedState === null ? wc : Vo, n = l(o, c), zo) {
      d = 0;
      do {
        if (zo = !1, Hl = 0, 25 <= d) throw Error(b(301));
        d += 1, Fn = Cn = null, r.updateQueue = null, nt.current = bc, n = l(o, c);
      } while (zo);
    }
    if (nt.current = Pl, r = Cn !== null && Cn.next !== null, Nt = 0, Fn = Cn = St = null, cc = !1, r) throw Error(b(300));
    return n;
  }
  function Na() {
    var n = Hl !== 0;
    return Hl = 0, n;
  }
  function or() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fn === null ? St.memoizedState = Fn = n : Fn = Fn.next = n, Fn;
  }
  function cn() {
    if (Cn === null) {
      var n = St.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Cn.next;
    var r = Fn === null ? St.memoizedState : Fn.next;
    if (r !== null) Fn = r, Cn = n;
    else {
      if (n === null) throw Error(b(310));
      Cn = n, n = { memoizedState: Cn.memoizedState, baseState: Cn.baseState, baseQueue: Cn.baseQueue, queue: Cn.queue, next: null }, Fn === null ? St.memoizedState = Fn = n : Fn = Fn.next = n;
    }
    return Fn;
  }
  function Ei(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ji(n) {
    var r = cn(), l = r.queue;
    if (l === null) throw Error(b(311));
    l.lastRenderedReducer = n;
    var o = Cn, c = o.baseQueue, d = l.pending;
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
        if ((Nt & B) === B) C !== null && (C = C.next = { lane: 0, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null }), o = M.hasEagerState ? M.eagerState : n(o, M.action);
        else {
          var P = {
            lane: B,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          };
          C === null ? (S = C = P, h = o) : C = C.next = P, St.lanes |= B, Ka |= B;
        }
        M = M.next;
      } while (M !== null && M !== d);
      C === null ? h = o : C.next = S, Oa(o, r.memoizedState) || (xn = !0), r.memoizedState = o, r.baseState = h, r.baseQueue = C, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, St.lanes |= d, Ka |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Fl(n) {
    var r = cn(), l = r.queue;
    if (l === null) throw Error(b(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var h = c = c.next;
      do
        d = n(d, h.action), h = h.next;
      while (h !== c);
      Oa(d, r.memoizedState) || (xn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function fc() {
  }
  function dc(n, r) {
    var l = St, o = cn(), c = r(), d = !Oa(o.memoizedState, c);
    if (d && (o.memoizedState = c, xn = !0), o = o.queue, Uo(hc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Fn !== null && Fn.memoizedState.tag & 1) {
      if (l.flags |= 2048, Vl(9, vc.bind(null, l, o, c, r), void 0, null), zn === null) throw Error(b(349));
      Nt & 30 || pc(l, r, c);
    }
    return c;
  }
  function pc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = St.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, St.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
    var r = qr(n, 1);
    r !== null && Sr(r, n, 1, -1);
  }
  function gc(n) {
    var r = or();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ei, lastRenderedState: n }, r.queue = n, n = n.dispatch = $l.bind(null, St, n), [r.memoizedState, n];
  }
  function Vl(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = St.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, St.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Sc() {
    return cn().memoizedState;
  }
  function _u(n, r, l, o) {
    var c = or();
    St.flags |= n, c.memoizedState = Vl(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Ou(n, r, l, o) {
    var c = cn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Cn !== null) {
      var h = Cn.memoizedState;
      if (d = h.destroy, o !== null && Ue(o, h.deps)) {
        c.memoizedState = Vl(r, l, d, o);
        return;
      }
    }
    St.flags |= n, c.memoizedState = Vl(1 | r, l, d, o);
  }
  function Ec(n, r) {
    return _u(8390656, 8, n, r);
  }
  function Uo(n, r) {
    return Ou(2048, 8, n, r);
  }
  function Cc(n, r) {
    return Ou(4, 2, n, r);
  }
  function Ao(n, r) {
    return Ou(4, 4, n, r);
  }
  function Bl(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function xc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Ou(4, 4, Bl.bind(null, r, n), l);
  }
  function jo() {
  }
  function Tc(n, r) {
    var l = cn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ue(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Rc(n, r) {
    var l = cn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ue(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function hd(n, r, l) {
    return Nt & 21 ? (Oa(l, r) || (l = _s(), St.lanes |= l, Ka |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, xn = !0), n.memoizedState = l);
  }
  function Ho(n, r) {
    var l = _t;
    _t = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = gt.transition;
    gt.transition = {};
    try {
      n(!1), r();
    } finally {
      _t = l, gt.transition = o;
    }
  }
  function md() {
    return cn().memoizedState;
  }
  function Fo(n, r, l) {
    var o = qa(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Hr(n)) _v(r, l);
    else if (l = fd(n, r, l, o), l !== null) {
      var c = wn();
      Sr(l, n, o, c), At(l, r, o);
    }
  }
  function $l(n, r, l) {
    var o = qa(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Hr(n)) _v(r, c);
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
      l = fd(n, r, c, o), l !== null && (c = wn(), Sr(l, n, o, c), At(l, r, o));
    }
  }
  function Hr(n) {
    var r = n.alternate;
    return n === St || r !== null && r === St;
  }
  function _v(n, r) {
    zo = cc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function At(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Os(n, l);
    }
  }
  var Pl = { readContext: va, useCallback: mt, useContext: mt, useEffect: mt, useImperativeHandle: mt, useInsertionEffect: mt, useLayoutEffect: mt, useMemo: mt, useReducer: mt, useRef: mt, useState: mt, useDebugValue: mt, useDeferredValue: mt, useTransition: mt, useMutableSource: mt, useSyncExternalStore: mt, useId: mt, unstable_isNewReconciler: !1 }, wc = { readContext: va, useCallback: function(n, r) {
    return or().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: va, useEffect: Ec, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, _u(
      4194308,
      4,
      Bl.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return _u(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return _u(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = or();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = or();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Fo.bind(null, St, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = or();
    return n = { current: n }, r.memoizedState = n;
  }, useState: gc, useDebugValue: jo, useDeferredValue: function(n) {
    return or().memoizedState = n;
  }, useTransition: function() {
    var n = gc(!1), r = n[0];
    return n = Ho.bind(null, n[1]), or().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = St, c = or();
    if (Gt) {
      if (l === void 0) throw Error(b(407));
      l = l();
    } else {
      if (l = r(), zn === null) throw Error(b(349));
      Nt & 30 || pc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ec(hc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Vl(9, vc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = or(), r = zn.identifierPrefix;
    if (Gt) {
      var l = Qa, o = Ya;
      l = (o & ~(1 << 32 - la(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Hl++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = j++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Vo = {
    readContext: va,
    useCallback: Tc,
    useContext: va,
    useEffect: Uo,
    useImperativeHandle: xc,
    useInsertionEffect: Cc,
    useLayoutEffect: Ao,
    useMemo: Rc,
    useReducer: Ji,
    useRef: Sc,
    useState: function() {
      return Ji(Ei);
    },
    useDebugValue: jo,
    useDeferredValue: function(n) {
      var r = cn();
      return hd(r, Cn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ji(Ei)[0], r = cn().memoizedState;
      return [n, r];
    },
    useMutableSource: fc,
    useSyncExternalStore: dc,
    useId: md,
    unstable_isNewReconciler: !1
  }, bc = { readContext: va, useCallback: Tc, useContext: va, useEffect: Uo, useImperativeHandle: xc, useInsertionEffect: Cc, useLayoutEffect: Ao, useMemo: Rc, useReducer: Fl, useRef: Sc, useState: function() {
    return Fl(Ei);
  }, useDebugValue: jo, useDeferredValue: function(n) {
    var r = cn();
    return Cn === null ? r.memoizedState = n : hd(r, Cn.memoizedState, n);
  }, useTransition: function() {
    var n = Fl(Ei)[0], r = cn().memoizedState;
    return [n, r];
  }, useMutableSource: fc, useSyncExternalStore: dc, useId: md, unstable_isNewReconciler: !1 };
  function La(n, r) {
    if (n && n.defaultProps) {
      r = K({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function yd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : K({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Dc = { isMounted: function(n) {
    return (n = n._reactInternals) ? qe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = wn(), c = qa(n), d = Si(o, c);
    d.payload = r, l != null && (d.callback = l), r = qi(n, d, c), r !== null && (Sr(r, n, c, o), uc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = wn(), c = qa(n), d = Si(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = qi(n, d, c), r !== null && (Sr(r, n, c, o), uc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = wn(), o = qa(n), c = Si(l, o);
    c.tag = 2, r != null && (c.callback = r), r = qi(n, c, o), r !== null && (Sr(r, n, o, l), uc(r, n, o));
  } };
  function Ov(n, r, l, o, c, d, h) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, h) : r.prototype && r.prototype.isPureReactComponent ? !So(l, o) || !So(c, d) : !0;
  }
  function kc(n, r, l) {
    var o = !1, c = ur, d = r.contextType;
    return typeof d == "object" && d !== null ? d = va(d) : (c = Sn(r) ? Lr : ln.current, o = r.contextTypes, d = (o = o != null) ? zr(n, c) : ur), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Dc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Mv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Dc.enqueueReplaceState(r, r.state, null);
  }
  function Bo(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, dd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = va(d) : (d = Sn(r) ? Lr : ln.current, c.context = zr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (yd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Dc.enqueueReplaceState(c, c.state, null), _o(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Yl(n, r) {
    try {
      var l = "", o = r;
      do
        l += fr(o), o = o.return;
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
    l = Si(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Au || (Au = !0, Wl = o), Sd(n, r);
    }, l;
  }
  function Ed(n, r, l) {
    l = Si(-1, l), l.tag = 3;
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
      Sd(n, r), typeof o != "function" && (nl === null ? nl = /* @__PURE__ */ new Set([this]) : nl.add(this));
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
  function el(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Si(-1, 1), r.tag = 2, qi(l, r, 1))), l.lanes |= 1), n);
  }
  var $o = $e.ReactCurrentOwner, xn = !1;
  function Gn(n, r, l, o) {
    r.child = n === null ? ee(r, null, l, o) : sn(r, n.child, l, o);
  }
  function Fr(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Jt(r, c), o = Zi(n, r, l, o, d, c), l = Na(), n !== null && !xn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ma(n, r, c)) : (Gt && l && rc(r), r.flags |= 1, Gn(n, r, o, c), r.child);
  }
  function Ql(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Ud(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Ke(n, r, d, o, c)) : (n = as(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var h = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : So, l(h, o) && n.ref === r.ref) return ma(n, r, c);
    }
    return r.flags |= 1, n = al(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Ke(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (So(d, o) && n.ref === r.ref) if (xn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (xn = !0);
      else return r.lanes = n.lanes, ma(n, r, c);
    }
    return zv(n, r, l, o, c);
  }
  function Po(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ee(Lu, Jr), Jr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ee(Lu, Jr), Jr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Ee(Lu, Jr), Jr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Ee(Lu, Jr), Jr |= o;
    return Gn(n, r, c, l), r.child;
  }
  function xd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function zv(n, r, l, o, c) {
    var d = Sn(l) ? Lr : ln.current;
    return d = zr(r, d), Jt(r, c), l = Zi(n, r, l, o, d, c), o = Na(), n !== null && !xn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ma(n, r, c)) : (Gt && o && rc(r), r.flags |= 1, Gn(n, r, l, c), r.child);
  }
  function Uv(n, r, l, o, c) {
    if (Sn(l)) {
      var d = !0;
      Hn(r);
    } else d = !1;
    if (Jt(r, c), r.stateNode === null) ha(n, r), kc(r, l, o), Bo(r, l, o, c), o = !0;
    else if (n === null) {
      var h = r.stateNode, S = r.memoizedProps;
      h.props = S;
      var C = h.context, M = l.contextType;
      typeof M == "object" && M !== null ? M = va(M) : (M = Sn(l) ? Lr : ln.current, M = zr(r, M));
      var B = l.getDerivedStateFromProps, P = typeof B == "function" || typeof h.getSnapshotBeforeUpdate == "function";
      P || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== o || C !== M) && Mv(r, h, o, M), Zr = !1;
      var H = r.memoizedState;
      h.state = H, _o(r, o, h, c), C = r.memoizedState, S !== o || H !== C || Nn.current || Zr ? (typeof B == "function" && (yd(r, l, B, o), C = r.memoizedState), (S = Zr || Ov(r, l, S, o, H, C, M)) ? (P || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount()), typeof h.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = C), h.props = o, h.state = C, h.context = M, o = S) : (typeof h.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      h = r.stateNode, bv(n, r), S = r.memoizedProps, M = r.type === r.elementType ? S : La(r.type, S), h.props = M, P = r.pendingProps, H = h.context, C = l.contextType, typeof C == "object" && C !== null ? C = va(C) : (C = Sn(l) ? Lr : ln.current, C = zr(r, C));
      var le = l.getDerivedStateFromProps;
      (B = typeof le == "function" || typeof h.getSnapshotBeforeUpdate == "function") || typeof h.UNSAFE_componentWillReceiveProps != "function" && typeof h.componentWillReceiveProps != "function" || (S !== P || H !== C) && Mv(r, h, o, C), Zr = !1, H = r.memoizedState, h.state = H, _o(r, o, h, c);
      var pe = r.memoizedState;
      S !== P || H !== pe || Nn.current || Zr ? (typeof le == "function" && (yd(r, l, le, o), pe = r.memoizedState), (M = Zr || Ov(r, l, M, o, H, pe, C) || !1) ? (B || typeof h.UNSAFE_componentWillUpdate != "function" && typeof h.componentWillUpdate != "function" || (typeof h.componentWillUpdate == "function" && h.componentWillUpdate(o, pe, C), typeof h.UNSAFE_componentWillUpdate == "function" && h.UNSAFE_componentWillUpdate(o, pe, C)), typeof h.componentDidUpdate == "function" && (r.flags |= 4), typeof h.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = pe), h.props = o, h.state = pe, h.context = C, o = M) : (typeof h.componentDidUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 4), typeof h.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && H === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Yo(n, r, l, o, d, c);
  }
  function Yo(n, r, l, o, c, d) {
    xd(n, r);
    var h = (r.flags & 128) !== 0;
    if (!o && !h) return c && tc(r, l, !1), ma(n, r, d);
    o = r.stateNode, $o.current = r;
    var S = h && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && h ? (r.child = sn(r, n.child, null, d), r.child = sn(r, null, S, d)) : Gn(n, r, S, d), r.memoizedState = o.state, c && tc(r, l, !0), r.child;
  }
  function Mu(n) {
    var r = n.stateNode;
    r.pendingContext ? xv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && xv(n, r.context, !1), vd(n, r.containerInfo);
  }
  function Av(n, r, l, o, c) {
    return Ki(), gi(c), r.flags |= 256, Gn(n, r, l, o), r.child;
  }
  var Oc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Td(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Mc(n, r, l) {
    var o = r.pendingProps, c = en.current, d = !1, h = (r.flags & 128) !== 0, S;
    if ((S = h) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ee(en, c & 1), n === null)
      return id(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (h = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, h = { mode: "hidden", children: h }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = h) : d = il(h, o, 0, null), n = Ri(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Td(l), r.memoizedState = Oc, n) : Rd(r, h));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null)) return jv(n, r, h, o, S, c, l);
    if (d) {
      d = o.fallback, h = r.mode, c = n.child, S = c.sibling;
      var C = { mode: "hidden", children: o.children };
      return !(h & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = C, r.deletions = null) : (o = al(c, C), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = al(S, d) : (d = Ri(d, h, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, h = n.child.memoizedState, h = h === null ? Td(l) : { baseLanes: h.baseLanes | l, cachePool: null, transitions: h.transitions }, d.memoizedState = h, d.childLanes = n.childLanes & ~l, r.memoizedState = Oc, o;
    }
    return d = n.child, n = d.sibling, o = al(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Rd(n, r) {
    return r = il({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Qo(n, r, l, o) {
    return o !== null && gi(o), sn(r, n.child, null, l), n = Rd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function jv(n, r, l, o, c, d, h) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = gd(Error(b(422))), Qo(n, r, h, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = il({ mode: "visible", children: o.children }, c, 0, null), d = Ri(d, c, h, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && sn(r, n.child, null, h), r.child.memoizedState = Td(h), r.memoizedState = Oc, d);
    if (!(r.mode & 1)) return Qo(n, r, h, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var S = o.dgst;
      return o = S, d = Error(b(419)), o = gd(d, o, void 0), Qo(n, r, h, o);
    }
    if (S = (h & n.childLanes) !== 0, xn || S) {
      if (o = zn, o !== null) {
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
        c = c & (o.suspendedLanes | h) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, qr(n, c), Sr(o, n, c, -1));
      }
      return zd(), o = gd(Error(b(421))), Qo(n, r, h, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = yy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Ar = Va(c.nextSibling), Ur = r, Gt = !0, pa = null, n !== null && (En[da++] = Ya, En[da++] = Qa, En[da++] = Xr, Ya = n.id, Qa = n.overflow, Xr = r), r = Rd(r, o.children), r.flags |= 4096, r);
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
  function Wa(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Gn(n, r, o.children, l), o = en.current, o & 2) o = o & 1 | 2, r.flags |= 128;
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
    if (Ee(en, o), !(r.mode & 1)) r.memoizedState = null;
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
  function ha(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ma(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ka |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(b(153));
    if (r.child !== null) {
      for (n = r.child, l = al(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = al(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Io(n, r, l) {
    switch (r.tag) {
      case 3:
        Mu(r), Ki();
        break;
      case 5:
        kv(r);
        break;
      case 1:
        Sn(r.type) && Hn(r);
        break;
      case 4:
        vd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ee(Kr, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ee(en, en.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Mc(n, r, l) : (Ee(en, en.current & 1), n = ma(n, r, l), n !== null ? n.sibling : null);
        Ee(en, en.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Wa(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ee(en, en.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Po(n, r, l);
    }
    return ma(n, r, l);
  }
  var ya, Tn, Hv, Fv;
  ya = function(n, r) {
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
  }, Tn = function() {
  }, Hv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Al(Ia.current);
      var d = null;
      switch (l) {
        case "input":
          c = Pn(n, c), o = Pn(n, o), d = [];
          break;
        case "select":
          c = K({}, c, { value: void 0 }), o = K({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = An(n, c), o = An(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Yi);
      }
      Ut(l, o);
      var h;
      l = null;
      for (M in c) if (!o.hasOwnProperty(M) && c.hasOwnProperty(M) && c[M] != null) if (M === "style") {
        var S = c[M];
        for (h in S) S.hasOwnProperty(h) && (l || (l = {}), l[h] = "");
      } else M !== "dangerouslySetInnerHTML" && M !== "children" && M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && M !== "autoFocus" && (Pe.hasOwnProperty(M) ? d || (d = []) : (d = d || []).push(M, null));
      for (M in o) {
        var C = o[M];
        if (S = c != null ? c[M] : void 0, o.hasOwnProperty(M) && C !== S && (C != null || S != null)) if (M === "style") if (S) {
          for (h in S) !S.hasOwnProperty(h) || C && C.hasOwnProperty(h) || (l || (l = {}), l[h] = "");
          for (h in C) C.hasOwnProperty(h) && S[h] !== C[h] && (l || (l = {}), l[h] = C[h]);
        } else l || (d || (d = []), d.push(
          M,
          l
        )), l = C;
        else M === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, S = S ? S.__html : void 0, C != null && S !== C && (d = d || []).push(M, C)) : M === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(M, "" + C) : M !== "suppressContentEditableWarning" && M !== "suppressHydrationWarning" && (Pe.hasOwnProperty(M) ? (C != null && M === "onScroll" && wt("scroll", n), d || S === C || (d = [])) : (d = d || []).push(M, C));
      }
      l && (d = d || []).push("style", l);
      var M = d;
      (r.updateQueue = M) && (r.flags |= 4);
    }
  }, Fv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Wo(n, r) {
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
        return Sn(r.type) && bu(), Vn(r), null;
      case 3:
        return o = r.stateNode, jl(), Bt(Nn), Bt(ln), Te(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (ic(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, pa !== null && (Gl(pa), pa = null))), Tn(n, r), Vn(r), null;
      case 5:
        oc(r);
        var c = Al(No.current);
        if (l = r.type, n !== null && r.stateNode != null) Hv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(b(166));
            return Vn(r), null;
          }
          if (n = Al(Ia.current), ic(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ba] = r, o[wo] = d, n = (r.mode & 1) !== 0, l) {
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
                for (c = 0; c < xo.length; c++) wt(xo[c], o);
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
                Dn(o, d), wt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, wt("invalid", o);
                break;
              case "textarea":
                ze(o, d), wt("invalid", o);
            }
            Ut(l, d), c = null;
            for (var h in d) if (d.hasOwnProperty(h)) {
              var S = d[h];
              h === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && qs(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && qs(
                o.textContent,
                S,
                n
              ), c = ["children", "" + S]) : Pe.hasOwnProperty(h) && S != null && h === "onScroll" && wt("scroll", o);
            }
            switch (l) {
              case "input":
                mn(o), rn(o, d, !0);
                break;
              case "textarea":
                mn(o), yt(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Yi);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            h = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = $t(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = h.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = h.createElement(l, { is: o.is }) : (n = h.createElement(l), l === "select" && (h = n, o.multiple ? h.multiple = !0 : o.size && (h.size = o.size))) : n = h.createElementNS(n, l), n[Ba] = r, n[wo] = o, ya(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (h = Mt(l, o), l) {
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
                  for (c = 0; c < xo.length; c++) wt(xo[c], n);
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
                  Dn(n, o), c = Pn(n, o), wt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = K({}, o, { value: void 0 }), wt("invalid", n);
                  break;
                case "textarea":
                  ze(n, o), c = An(n, o), wt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Ut(l, c), S = c;
              for (d in S) if (S.hasOwnProperty(d)) {
                var C = S[d];
                d === "style" ? lt(n, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && yn(n, C)) : d === "children" ? typeof C == "string" ? (l !== "textarea" || C !== "") && G(n, C) : typeof C == "number" && G(n, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Pe.hasOwnProperty(d) ? C != null && d === "onScroll" && wt("scroll", n) : C != null && De(n, d, C, h));
              }
              switch (l) {
                case "input":
                  mn(n), rn(n, o, !1);
                  break;
                case "textarea":
                  mn(n), yt(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + hn(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Yn(n, !!o.multiple, d, !1) : o.defaultValue != null && Yn(
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
        return Vn(r), null;
      case 6:
        if (n && r.stateNode != null) Fv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(b(166));
          if (l = Al(No.current), Al(Ia.current), ic(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ba] = r, (d = o.nodeValue !== l) && (n = Ur, n !== null)) switch (n.tag) {
              case 3:
                qs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && qs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ba] = r, r.stateNode = o;
        }
        return Vn(r), null;
      case 13:
        if (Bt(en), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Gt && Ar !== null && r.mode & 1 && !(r.flags & 128)) ko(), Ki(), r.flags |= 98560, d = !1;
          else if (d = ic(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(b(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(b(317));
              d[Ba] = r;
            } else Ki(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Vn(r), d = !1;
          } else pa !== null && (Gl(pa), pa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || en.current & 1 ? dn === 0 && (dn = 3) : zd())), r.updateQueue !== null && (r.flags |= 4), Vn(r), null);
      case 4:
        return jl(), Tn(n, r), n === null && Cu(r.stateNode.containerInfo), Vn(r), null;
      case 10:
        return od(r.type._context), Vn(r), null;
      case 17:
        return Sn(r.type) && bu(), Vn(r), null;
      case 19:
        if (Bt(en), d = r.memoizedState, d === null) return Vn(r), null;
        if (o = (r.flags & 128) !== 0, h = d.rendering, h === null) if (o) Wo(d, !1);
        else {
          if (dn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (h = sc(n), h !== null) {
              for (r.flags |= 128, Wo(d, !1), o = h.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, h = d.alternate, h === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = h.childLanes, d.lanes = h.lanes, d.child = h.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = h.memoizedProps, d.memoizedState = h.memoizedState, d.updateQueue = h.updateQueue, d.type = h.type, n = h.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Ee(en, en.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ze() > Uu && (r.flags |= 128, o = !0, Wo(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = sc(h), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Wo(d, !0), d.tail === null && d.tailMode === "hidden" && !h.alternate && !Gt) return Vn(r), null;
          } else 2 * Ze() - d.renderingStartTime > Uu && l !== 1073741824 && (r.flags |= 128, o = !0, Wo(d, !1), r.lanes = 4194304);
          d.isBackwards ? (h.sibling = r.child, r.child = h) : (l = d.last, l !== null ? l.sibling = h : r.child = h, d.last = h);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ze(), r.sibling = null, l = en.current, Ee(en, o ? l & 1 | 2 : l & 1), r) : (Vn(r), null);
      case 22:
      case 23:
        return Ld(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Jr & 1073741824 && (Vn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Vn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(b(156, r.tag));
  }
  function Nc(n, r) {
    switch (ac(r), r.tag) {
      case 1:
        return Sn(r.type) && bu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return jl(), Bt(Nn), Bt(ln), Te(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return oc(r), null;
      case 13:
        if (Bt(en), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(b(340));
          Ki();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Bt(en), null;
      case 4:
        return jl(), null;
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
  var Go = !1, sr = !1, cy = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
  function Nu(n, r) {
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
    if (Ro = Tl, n = Eo(), Ps(n)) {
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
          var h = 0, S = -1, C = -1, M = 0, B = 0, P = n, H = null;
          t: for (; ; ) {
            for (var le; P !== l || c !== 0 && P.nodeType !== 3 || (S = h + c), P !== d || o !== 0 && P.nodeType !== 3 || (C = h + o), P.nodeType === 3 && (h += P.nodeValue.length), (le = P.firstChild) !== null; )
              H = P, P = le;
            for (; ; ) {
              if (P === n) break t;
              if (H === l && ++M === c && (S = h), H === d && ++B === o && (C = h), (le = P.nextSibling) !== null) break;
              P = H, H = P.parentNode;
            }
            P = le;
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
        var pe = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (pe !== null) {
              var me = pe.memoizedProps, pn = pe.memoizedState, w = r.stateNode, T = w.getSnapshotBeforeUpdate(r.elementType === r.type ? me : La(r.type, me), pn);
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
            throw Error(b(163));
        }
      } catch ($) {
        Xt(r, r.return, $);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ce = n;
        break;
      }
      ce = r.return;
    }
    return pe = Bv, Bv = !1, pe;
  }
  function Xo(n, r, l) {
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
    r !== null && (n.alternate = null, zc(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ba], delete r[wo], delete r[bo], delete r[wu], delete r[oy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  var fn = null, yr = !1;
  function gr(n, r, l) {
    for (l = l.child; l !== null; ) Pv(n, r, l), l = l.sibling;
  }
  function Pv(n, r, l) {
    if (ka && typeof ka.onCommitFiberUnmount == "function") try {
      ka.onCommitFiberUnmount(oo, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        sr || Nu(l, r);
      case 6:
        var o = fn, c = yr;
        fn = null, gr(n, r, l), fn = o, yr = c, fn !== null && (yr ? (n = fn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : fn.removeChild(l.stateNode));
        break;
      case 18:
        fn !== null && (yr ? (n = fn, l = l.stateNode, n.nodeType === 8 ? Ru(n.parentNode, l) : n.nodeType === 1 && Ru(n, l), Bi(n)) : Ru(fn, l.stateNode));
        break;
      case 4:
        o = fn, c = yr, fn = l.stateNode.containerInfo, yr = !0, gr(n, r, l), fn = o, yr = c;
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
        if (!sr && (Nu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
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
              fn = S.stateNode, yr = !1;
              break e;
            case 3:
              fn = S.stateNode.containerInfo, yr = !0;
              break e;
            case 4:
              fn = S.stateNode.containerInfo, yr = !0;
              break e;
          }
          S = S.return;
        }
        if (fn === null) throw Error(b(160));
        Pv(d, h, c), fn = null, yr = !1;
        var C = c.alternate;
        C !== null && (C.return = null), c.return = null;
      } catch (M) {
        Xt(c, r, M);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Dd(r, n), r = r.sibling;
  }
  function Dd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (za(r, n), Vr(n), o & 4) {
          try {
            Xo(3, n, n.return), Ko(3, n);
          } catch (me) {
            Xt(n, n.return, me);
          }
          try {
            Xo(5, n, n.return);
          } catch (me) {
            Xt(n, n.return, me);
          }
        }
        break;
      case 1:
        za(r, n), Vr(n), o & 512 && l !== null && Nu(l, l.return);
        break;
      case 5:
        if (za(r, n), Vr(n), o & 512 && l !== null && Nu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            G(c, "");
          } catch (me) {
            Xt(n, n.return, me);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, h = l !== null ? l.memoizedProps : d, S = n.type, C = n.updateQueue;
          if (n.updateQueue = null, C !== null) try {
            S === "input" && d.type === "radio" && d.name != null && kn(c, d), Mt(S, h);
            var M = Mt(S, d);
            for (h = 0; h < C.length; h += 2) {
              var B = C[h], P = C[h + 1];
              B === "style" ? lt(c, P) : B === "dangerouslySetInnerHTML" ? yn(c, P) : B === "children" ? G(c, P) : De(c, B, P, M);
            }
            switch (S) {
              case "input":
                lr(c, d);
                break;
              case "textarea":
                Vt(c, d);
                break;
              case "select":
                var H = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var le = d.value;
                le != null ? Yn(c, !!d.multiple, le, !1) : H !== !!d.multiple && (d.defaultValue != null ? Yn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Yn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[wo] = d;
          } catch (me) {
            Xt(n, n.return, me);
          }
        }
        break;
      case 6:
        if (za(r, n), Vr(n), o & 4) {
          if (n.stateNode === null) throw Error(b(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (me) {
            Xt(n, n.return, me);
          }
        }
        break;
      case 3:
        if (za(r, n), Vr(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Bi(r.containerInfo);
        } catch (me) {
          Xt(n, n.return, me);
        }
        break;
      case 4:
        za(r, n), Vr(n);
        break;
      case 13:
        za(r, n), Vr(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Od = Ze())), o & 4 && Yv(n);
        break;
      case 22:
        if (B = l !== null && l.memoizedState !== null, n.mode & 1 ? (sr = (M = sr) || B, za(r, n), sr = M) : za(r, n), Vr(n), o & 8192) {
          if (M = n.memoizedState !== null, (n.stateNode.isHidden = M) && !B && n.mode & 1) for (ce = n, B = n.child; B !== null; ) {
            for (P = ce = B; ce !== null; ) {
              switch (H = ce, le = H.child, H.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xo(4, H, H.return);
                  break;
                case 1:
                  Nu(H, H.return);
                  var pe = H.stateNode;
                  if (typeof pe.componentWillUnmount == "function") {
                    o = H, l = H.return;
                    try {
                      r = o, pe.props = r.memoizedProps, pe.state = r.memoizedState, pe.componentWillUnmount();
                    } catch (me) {
                      Xt(o, l, me);
                    }
                  }
                  break;
                case 5:
                  Nu(H, H.return);
                  break;
                case 22:
                  if (H.memoizedState !== null) {
                    Zo(P);
                    continue;
                  }
              }
              le !== null ? (le.return = H, ce = le) : Zo(P);
            }
            B = B.sibling;
          }
          e: for (B = null, P = n; ; ) {
            if (P.tag === 5) {
              if (B === null) {
                B = P;
                try {
                  c = P.stateNode, M ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = P.stateNode, C = P.memoizedProps.style, h = C != null && C.hasOwnProperty("display") ? C.display : null, S.style.display = Je("display", h));
                } catch (me) {
                  Xt(n, n.return, me);
                }
              }
            } else if (P.tag === 6) {
              if (B === null) try {
                P.stateNode.nodeValue = M ? "" : P.memoizedProps;
              } catch (me) {
                Xt(n, n.return, me);
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
        za(r, n), Vr(n), o & 4 && Yv(n);
        break;
      case 21:
        break;
      default:
        za(
          r,
          n
        ), Vr(n);
    }
  }
  function Vr(n) {
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
          throw Error(b(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (G(c, ""), o.flags &= -33);
            var d = Ci(n);
            Xa(n, d, c);
            break;
          case 3:
          case 4:
            var h = o.stateNode.containerInfo, S = Ci(n);
            Ga(n, S, h);
            break;
          default:
            throw Error(b(161));
        }
      } catch (C) {
        Xt(n, n.return, C);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function fy(n, r, l) {
    ce = n, kd(n);
  }
  function kd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ce !== null; ) {
      var c = ce, d = c.child;
      if (c.tag === 22 && o) {
        var h = c.memoizedState !== null || Go;
        if (!h) {
          var S = c.alternate, C = S !== null && S.memoizedState !== null || sr;
          S = Go;
          var M = sr;
          if (Go = h, (sr = C) && !M) for (ce = c; ce !== null; ) h = ce, C = h.child, h.tag === 22 && h.memoizedState !== null ? _d(c) : C !== null ? (C.return = h, ce = C) : _d(c);
          for (; d !== null; ) ce = d, kd(d), d = d.sibling;
          ce = c, Go = S, sr = M;
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
              sr || Ko(5, r);
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
              throw Error(b(163));
          }
          sr || r.flags & 512 && bd(r);
        } catch (H) {
          Xt(r, r.return, H);
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
  function _d(n) {
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
  var dy = Math.ceil, tl = $e.ReactCurrentDispatcher, Il = $e.ReactCurrentOwner, Xn = $e.ReactCurrentBatchConfig, dt = 0, zn = null, Rn = null, Kn = 0, Jr = 0, Lu = fa(0), dn = 0, Jo = null, Ka = 0, zu = 0, Uc = 0, es = null, Br = null, Od = 0, Uu = 1 / 0, ea = null, Au = !1, Wl = null, nl = null, Ac = !1, xi = null, ts = 0, rl = 0, ju = null, ns = -1, cr = 0;
  function wn() {
    return dt & 6 ? Ze() : ns !== -1 ? ns : ns = Ze();
  }
  function qa(n) {
    return n.mode & 1 ? dt & 2 && Kn !== 0 ? Kn & -Kn : sy.transition !== null ? (cr === 0 && (cr = _s()), cr) : (n = _t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ls(n.type)), n) : 1;
  }
  function Sr(n, r, l, o) {
    if (50 < rl) throw rl = 0, ju = null, Error(b(185));
    Cl(n, l, o), (!(dt & 2) || n !== zn) && (n === zn && (!(dt & 2) && (zu |= l), dn === 4 && Ua(n, Kn)), $r(n, o), l === 1 && dt === 0 && !(r.mode & 1) && (Uu = Ze() + 500, Du && Pa()));
  }
  function $r(n, r) {
    var l = n.callbackNode;
    bf(n, r);
    var o = El(n, n === zn ? Kn : 0);
    if (o === 0) l !== null && vr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && vr(l), r === 1) n.tag === 0 ? Ii(Md.bind(null, n)) : nc(Md.bind(null, n)), Tu(function() {
        !(dt & 6) && Pa();
      }), l = null;
      else {
        switch (_f(o)) {
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
            l = Rf;
            break;
          default:
            l = uo;
        }
        l = th(l, jc.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function jc(n, r) {
    if (ns = -1, cr = 0, dt & 6) throw Error(b(327));
    var l = n.callbackNode;
    if (Hu() && n.callbackNode !== l) return null;
    var o = El(n, n === zn ? Kn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Hc(n, o);
    else {
      r = o;
      var c = dt;
      dt |= 2;
      var d = Wv();
      (zn !== n || Kn !== r) && (ea = null, Uu = Ze() + 500, Ti(n, r));
      do
        try {
          Gv();
          break;
        } catch (S) {
          Iv(n, S);
        }
      while (!0);
      ud(), tl.current = d, dt = c, Rn !== null ? r = 0 : (zn = null, Kn = 0, r = dn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Df(n), c !== 0 && (o = c, r = rs(n, c))), r === 1) throw l = Jo, Ti(n, 0), Ua(n, o), $r(n, Ze()), l;
      if (r === 6) Ua(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !py(c) && (r = Hc(n, o), r === 2 && (d = Df(n), d !== 0 && (o = d, r = rs(n, d))), r === 1)) throw l = Jo, Ti(n, 0), Ua(n, o), $r(n, Ze()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(b(345));
          case 2:
            Kl(n, Br, ea);
            break;
          case 3:
            if (Ua(n, o), (o & 130023424) === o && (r = Od + 500 - Ze(), 10 < r)) {
              if (El(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                wn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Js(Kl.bind(null, n, Br, ea), r);
              break;
            }
            Kl(n, Br, ea);
            break;
          case 4:
            if (Ua(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var h = 31 - la(o);
              d = 1 << h, h = r[h], h > c && (c = h), o &= ~d;
            }
            if (o = c, o = Ze() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * dy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Js(Kl.bind(null, n, Br, ea), o);
              break;
            }
            Kl(n, Br, ea);
            break;
          case 5:
            Kl(n, Br, ea);
            break;
          default:
            throw Error(b(329));
        }
      }
    }
    return $r(n, Ze()), n.callbackNode === l ? jc.bind(null, n) : null;
  }
  function rs(n, r) {
    var l = es;
    return n.current.memoizedState.isDehydrated && (Ti(n, r).flags |= 256), n = Hc(n, r), n !== 2 && (r = Br, Br = l, r !== null && Gl(r)), n;
  }
  function Gl(n) {
    Br === null ? Br = n : Br.push.apply(Br, n);
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
    for (r &= ~Uc, r &= ~zu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - la(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Md(n) {
    if (dt & 6) throw Error(b(327));
    Hu();
    var r = El(n, 0);
    if (!(r & 1)) return $r(n, Ze()), null;
    var l = Hc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Df(n);
      o !== 0 && (r = o, l = rs(n, o));
    }
    if (l === 1) throw l = Jo, Ti(n, 0), Ua(n, r), $r(n, Ze()), l;
    if (l === 6) throw Error(b(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Kl(n, Br, ea), $r(n, Ze()), null;
  }
  function Nd(n, r) {
    var l = dt;
    dt |= 1;
    try {
      return n(r);
    } finally {
      dt = l, dt === 0 && (Uu = Ze() + 500, Du && Pa());
    }
  }
  function Xl(n) {
    xi !== null && xi.tag === 0 && !(dt & 6) && Hu();
    var r = dt;
    dt |= 1;
    var l = Xn.transition, o = _t;
    try {
      if (Xn.transition = null, _t = 1, n) return n();
    } finally {
      _t = o, Xn.transition = l, dt = r, !(dt & 6) && Pa();
    }
  }
  function Ld() {
    Jr = Lu.current, Bt(Lu);
  }
  function Ti(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, nd(l)), Rn !== null) for (l = Rn.return; l !== null; ) {
      var o = l;
      switch (ac(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && bu();
          break;
        case 3:
          jl(), Bt(Nn), Bt(ln), Te();
          break;
        case 5:
          oc(o);
          break;
        case 4:
          jl();
          break;
        case 13:
          Bt(en);
          break;
        case 19:
          Bt(en);
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
    if (zn = n, Rn = n = al(n.current, null), Kn = Jr = r, dn = 0, Jo = null, Uc = zu = Ka = 0, Br = es = null, Ul !== null) {
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
  function Iv(n, r) {
    do {
      var l = Rn;
      try {
        if (ud(), nt.current = Pl, cc) {
          for (var o = St.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          cc = !1;
        }
        if (Nt = 0, Fn = Cn = St = null, zo = !1, Hl = 0, Il.current = null, l === null || l.return === null) {
          dn = 1, Jo = r, Rn = null;
          break;
        }
        e: {
          var d = n, h = l.return, S = l, C = r;
          if (r = Kn, S.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var M = C, B = S, P = B.tag;
            if (!(B.mode & 1) && (P === 0 || P === 11 || P === 15)) {
              var H = B.alternate;
              H ? (B.updateQueue = H.updateQueue, B.memoizedState = H.memoizedState, B.lanes = H.lanes) : (B.updateQueue = null, B.memoizedState = null);
            }
            var le = Lv(h);
            if (le !== null) {
              le.flags &= -257, el(le, h, S, d, r), le.mode & 1 && Cd(d, M, r), r = le, C = M;
              var pe = r.updateQueue;
              if (pe === null) {
                var me = /* @__PURE__ */ new Set();
                me.add(C), r.updateQueue = me;
              } else pe.add(C);
              break e;
            } else {
              if (!(r & 1)) {
                Cd(d, M, r), zd();
                break e;
              }
              C = Error(b(426));
            }
          } else if (Gt && S.mode & 1) {
            var pn = Lv(h);
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
                var w = Nv(d, C, r);
                Dv(d, w);
                break e;
              case 1:
                S = C;
                var T = d.type, _ = d.stateNode;
                if (!(d.flags & 128) && (typeof T.getDerivedStateFromError == "function" || _ !== null && typeof _.componentDidCatch == "function" && (nl === null || !nl.has(_)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var $ = Ed(d, S, r);
                  Dv(d, $);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Kv(l);
      } catch (ve) {
        r = ve, Rn === l && l !== null && (Rn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Wv() {
    var n = tl.current;
    return tl.current = Pl, n === null ? Pl : n;
  }
  function zd() {
    (dn === 0 || dn === 3 || dn === 2) && (dn = 4), zn === null || !(Ka & 268435455) && !(zu & 268435455) || Ua(zn, Kn);
  }
  function Hc(n, r) {
    var l = dt;
    dt |= 2;
    var o = Wv();
    (zn !== n || Kn !== r) && (ea = null, Ti(n, r));
    do
      try {
        vy();
        break;
      } catch (c) {
        Iv(n, c);
      }
    while (!0);
    if (ud(), dt = l, tl.current = o, Rn !== null) throw Error(b(261));
    return zn = null, Kn = 0, dn;
  }
  function vy() {
    for (; Rn !== null; ) Xv(Rn);
  }
  function Gv() {
    for (; Rn !== null && !ui(); ) Xv(Rn);
  }
  function Xv(n) {
    var r = eh(n.alternate, n, Jr);
    n.memoizedProps = n.pendingProps, r === null ? Kv(n) : Rn = r, Il.current = null;
  }
  function Kv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Nc(l, r), l !== null) {
          l.flags &= 32767, Rn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          dn = 6, Rn = null;
          return;
        }
      } else if (l = Vv(l, r, Jr), l !== null) {
        Rn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Rn = r;
        return;
      }
      Rn = r = n;
    } while (r !== null);
    dn === 0 && (dn = 5);
  }
  function Kl(n, r, l) {
    var o = _t, c = Xn.transition;
    try {
      Xn.transition = null, _t = 1, hy(n, r, l, o);
    } finally {
      Xn.transition = c, _t = o;
    }
    return null;
  }
  function hy(n, r, l, o) {
    do
      Hu();
    while (xi !== null);
    if (dt & 6) throw Error(b(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(b(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Ym(n, d), n === zn && (Rn = zn = null, Kn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Ac || (Ac = !0, th(uo, function() {
      return Hu(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Xn.transition, Xn.transition = null;
      var h = _t;
      _t = 1;
      var S = dt;
      dt |= 4, Il.current = null, $v(n, l), Dd(l, n), Su(Ol), Tl = !!Ro, Ol = Ro = null, n.current = l, fy(l), oi(), dt = S, _t = h, Xn.transition = d;
    } else n.current = l;
    if (Ac && (Ac = !1, xi = n, ts = c), d = n.pendingLanes, d === 0 && (nl = null), Pp(l.stateNode), $r(n, Ze()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Au) throw Au = !1, n = Wl, Wl = null, n;
    return ts & 1 && n.tag !== 0 && Hu(), d = n.pendingLanes, d & 1 ? n === ju ? rl++ : (rl = 0, ju = n) : rl = 0, Pa(), null;
  }
  function Hu() {
    if (xi !== null) {
      var n = _f(ts), r = Xn.transition, l = _t;
      try {
        if (Xn.transition = null, _t = 16 > n ? 16 : n, xi === null) var o = !1;
        else {
          if (n = xi, xi = null, ts = 0, dt & 6) throw Error(b(331));
          var c = dt;
          for (dt |= 4, ce = n.current; ce !== null; ) {
            var d = ce, h = d.child;
            if (ce.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var M = S[C];
                  for (ce = M; ce !== null; ) {
                    var B = ce;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xo(8, B, d);
                    }
                    var P = B.child;
                    if (P !== null) P.return = B, ce = P;
                    else for (; ce !== null; ) {
                      B = ce;
                      var H = B.sibling, le = B.return;
                      if (zc(B), B === M) {
                        ce = null;
                        break;
                      }
                      if (H !== null) {
                        H.return = le, ce = H;
                        break;
                      }
                      ce = le;
                    }
                  }
                }
                var pe = d.alternate;
                if (pe !== null) {
                  var me = pe.child;
                  if (me !== null) {
                    pe.child = null;
                    do {
                      var pn = me.sibling;
                      me.sibling = null, me = pn;
                    } while (me !== null);
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
              } catch (ve) {
                Xt(S, S.return, ve);
              }
              if (S === h) {
                ce = null;
                break e;
              }
              var $ = S.sibling;
              if ($ !== null) {
                $.return = S.return, ce = $;
                break e;
              }
              ce = S.return;
            }
          }
          if (dt = c, Pa(), ka && typeof ka.onPostCommitFiberRoot == "function") try {
            ka.onPostCommitFiberRoot(oo, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        _t = l, Xn.transition = r;
      }
    }
    return !1;
  }
  function qv(n, r, l) {
    r = Yl(l, r), r = Nv(n, r, 1), n = qi(n, r, 1), r = wn(), n !== null && (Cl(n, 1, r), $r(n, r));
  }
  function Xt(n, r, l) {
    if (n.tag === 3) qv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        qv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (nl === null || !nl.has(o))) {
          n = Yl(l, n), n = Ed(r, n, 1), r = qi(r, n, 1), n = wn(), r !== null && (Cl(r, 1, n), $r(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function my(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = wn(), n.pingedLanes |= n.suspendedLanes & l, zn === n && (Kn & l) === l && (dn === 4 || dn === 3 && (Kn & 130023424) === Kn && 500 > Ze() - Od ? Ti(n, 0) : Uc |= l), $r(n, r);
  }
  function Zv(n, r) {
    r === 0 && (n.mode & 1 ? (r = _a, _a <<= 1, !(_a & 130023424) && (_a = 4194304)) : r = 1);
    var l = wn();
    n = qr(n, r), n !== null && (Cl(n, r, l), $r(n, l));
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
        throw Error(b(314));
    }
    o !== null && o.delete(r), Zv(n, l);
  }
  var eh;
  eh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Nn.current) xn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return xn = !1, Io(n, r, l);
      xn = !!(n.flags & 131072);
    }
    else xn = !1, Gt && r.flags & 1048576 && Tv(r, yi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ha(n, r), n = r.pendingProps;
        var c = zr(r, ln.current);
        Jt(r, l), c = Zi(null, r, o, n, c, l);
        var d = Na();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Sn(o) ? (d = !0, Hn(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, dd(r), c.updater = Dc, r.stateNode = c, c._reactInternals = r, Bo(r, o, n, l), r = Yo(null, r, o, !0, d, l)) : (r.tag = 0, Gt && d && rc(r), Gn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (ha(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Sy(o), n = La(o, n), c) {
            case 0:
              r = zv(null, r, o, n, l);
              break e;
            case 1:
              r = Uv(null, r, o, n, l);
              break e;
            case 11:
              r = Fr(null, r, o, n, l);
              break e;
            case 14:
              r = Ql(null, r, o, La(o.type, n), l);
              break e;
          }
          throw Error(b(
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
          if (Mu(r), n === null) throw Error(b(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, bv(n, r), _o(r, o, null, l);
          var h = r.memoizedState;
          if (o = h.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: h.cache, pendingSuspenseBoundaries: h.pendingSuspenseBoundaries, transitions: h.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Yl(Error(b(423)), r), r = Av(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Yl(Error(b(424)), r), r = Av(n, r, o, l, c);
            break e;
          } else for (Ar = Va(r.stateNode.containerInfo.firstChild), Ur = r, Gt = !0, pa = null, l = ee(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ki(), o === c) {
              r = ma(n, r, l);
              break e;
            }
            Gn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return kv(r), n === null && id(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, h = c.children, Zs(o, c) ? h = null : d !== null && Zs(o, d) && (r.flags |= 32), xd(n, r), Gn(n, r, h, l), r.child;
      case 6:
        return n === null && id(r), null;
      case 13:
        return Mc(n, r, l);
      case 4:
        return vd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = sn(r, null, o, l) : Gn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : La(o, c), Fr(n, r, o, c, l);
      case 7:
        return Gn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Gn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Gn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, h = c.value, Ee(Kr, o._currentValue), o._currentValue = h, d !== null) if (Oa(d.value, h)) {
            if (d.children === c.children && !Nn.current) {
              r = ma(n, r, l);
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
              if (h = d.return, h === null) throw Error(b(341));
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
        return c = r.type, o = r.pendingProps.children, Jt(r, l), c = va(c), o = o(c), r.flags |= 1, Gn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = La(o, r.pendingProps), c = La(o.type, c), Ql(n, r, o, c, l);
      case 15:
        return Ke(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : La(o, c), ha(n, r), r.tag = 1, Sn(o) ? (n = !0, Hn(r)) : n = !1, Jt(r, l), kc(r, o, c), Bo(r, o, c, l), Yo(null, r, o, !0, n, l);
      case 19:
        return Wa(n, r, l);
      case 22:
        return Po(n, r, l);
    }
    throw Error(b(156, r.tag));
  };
  function th(n, r) {
    return qt(n, r);
  }
  function gy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ga(n, r, l, o) {
    return new gy(n, r, l, o);
  }
  function Ud(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Sy(n) {
    if (typeof n == "function") return Ud(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Rt) return 11;
      if (n === Q) return 14;
    }
    return 2;
  }
  function al(n, r) {
    var l = n.alternate;
    return l === null ? (l = ga(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function as(n, r, l, o, c, d) {
    var h = 2;
    if (o = n, typeof n == "function") Ud(n) && (h = 1);
    else if (typeof n == "string") h = 5;
    else e: switch (n) {
      case we:
        return Ri(l.children, c, d, r);
      case Dt:
        h = 8, c |= 8;
        break;
      case Tt:
        return n = ga(12, l, r, c | 2), n.elementType = Tt, n.lanes = d, n;
      case Le:
        return n = ga(13, l, r, c), n.elementType = Le, n.lanes = d, n;
      case Ht:
        return n = ga(19, l, r, c), n.elementType = Ht, n.lanes = d, n;
      case He:
        return il(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case It:
            h = 10;
            break e;
          case jt:
            h = 9;
            break e;
          case Rt:
            h = 11;
            break e;
          case Q:
            h = 14;
            break e;
          case fe:
            h = 16, o = null;
            break e;
        }
        throw Error(b(130, n == null ? n : typeof n, ""));
    }
    return r = ga(h, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ri(n, r, l, o) {
    return n = ga(7, n, o, r), n.lanes = l, n;
  }
  function il(n, r, l, o) {
    return n = ga(22, n, o, r), n.elementType = He, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ad(n, r, l) {
    return n = ga(6, n, null, r), n.lanes = l, n;
  }
  function Fc(n, r, l) {
    return r = ga(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function nh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kf(0), this.expirationTimes = kf(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kf(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Vc(n, r, l, o, c, d, h, S, C) {
    return n = new nh(n, r, l, S, C), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ga(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, dd(d), n;
  }
  function Ey(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: rt, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function jd(n) {
    if (!n) return ur;
    n = n._reactInternals;
    e: {
      if (qe(n) !== n || n.tag !== 1) throw Error(b(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Sn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(b(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Sn(l)) return Do(n, l, r);
    }
    return r;
  }
  function rh(n, r, l, o, c, d, h, S, C) {
    return n = Vc(l, o, !0, n, c, d, h, S, C), n.context = jd(null), l = n.current, o = wn(), c = qa(l), d = Si(o, c), d.callback = r ?? null, qi(l, d, c), n.current.lanes = c, Cl(n, c, o), $r(n, o), n;
  }
  function Bc(n, r, l, o) {
    var c = r.current, d = wn(), h = qa(c);
    return l = jd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Si(d, h), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = qi(c, r, h), n !== null && (Sr(n, c, h, d), uc(n, c, h)), h;
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
  var ql = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Fd(n) {
    this._internalRoot = n;
  }
  Yc.prototype.render = Fd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(b(409));
    Bc(n, r, null, null);
  }, Yc.prototype.unmount = Fd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Xl(function() {
        Bc(null, n, null, null);
      }), r[hi] = null;
    }
  };
  function Yc(n) {
    this._internalRoot = n;
  }
  Yc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Xe();
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
      return n._reactRootContainer = h, n[hi] = h.current, Cu(n.nodeType === 8 ? n.parentNode : n), Xl(), h;
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
    return n._reactRootContainer = C, n[hi] = C.current, Cu(n.nodeType === 8 ? n.parentNode : n), Xl(function() {
      Bc(r, C, l, o);
    }), C;
  }
  function is(n, r, l, o, c) {
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
  Ot = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Sl(r.pendingLanes);
          l !== 0 && (Os(r, l | 1), $r(r, Ze()), !(dt & 6) && (Uu = Ze() + 500, Pa()));
        }
        break;
      case 13:
        Xl(function() {
          var o = qr(n, 1);
          if (o !== null) {
            var c = wn();
            Sr(o, n, 1, c);
          }
        }), Pc(n, 1);
    }
  }, Of = function(n) {
    if (n.tag === 13) {
      var r = qr(n, 134217728);
      if (r !== null) {
        var l = wn();
        Sr(r, n, 134217728, l);
      }
      Pc(n, 134217728);
    }
  }, Mf = function(n) {
    if (n.tag === 13) {
      var r = qa(n), l = qr(n, r);
      if (l !== null) {
        var o = wn();
        Sr(l, n, r, o);
      }
      Pc(n, r);
    }
  }, Xe = function() {
    return _t;
  }, Nf = function(n, r) {
    var l = _t;
    try {
      return _t = n, r();
    } finally {
      _t = l;
    }
  }, kt = function(n, r, l) {
    switch (r) {
      case "input":
        if (lr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Zt(o);
              if (!c) throw Error(b(90));
              pr(o), lr(o, c);
            }
          }
        }
        break;
      case "textarea":
        Vt(n, l);
        break;
      case "select":
        r = l.value, r != null && Yn(n, !!l.multiple, r, !1);
    }
  }, ao = Nd, fu = Xl;
  var xy = { usingClientEntryPoint: !1, Events: [xe, Ma, Zt, ks, ro, Nd] }, ls = { findFiberByHostInstance: Ml, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, lh = { bundleType: ls.bundleType, version: ls.version, rendererPackageName: ls.rendererPackageName, rendererConfig: ls.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $e.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Mn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: ls.findFiberByHostInstance || ah, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ll = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ll.isDisabled && ll.supportsFiber) try {
      oo = ll.inject(lh), ka = ll;
    } catch {
    }
  }
  return Ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xy, Ra.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vd(r)) throw Error(b(200));
    return Ey(n, r, null, l);
  }, Ra.createRoot = function(n, r) {
    if (!Vd(n)) throw Error(b(299));
    var l = !1, o = "", c = ql;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Vc(n, 1, !1, null, null, l, !1, o, c), n[hi] = r.current, Cu(n.nodeType === 8 ? n.parentNode : n), new Fd(r);
  }, Ra.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(b(188)) : (n = Object.keys(n).join(","), Error(b(268, n)));
    return n = Mn(r), n = n === null ? null : n.stateNode, n;
  }, Ra.flushSync = function(n) {
    return Xl(n);
  }, Ra.hydrate = function(n, r, l) {
    if (!Qc(r)) throw Error(b(200));
    return is(null, n, r, !0, l);
  }, Ra.hydrateRoot = function(n, r, l) {
    if (!Vd(n)) throw Error(b(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", h = ql;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (h = l.onRecoverableError)), r = rh(r, null, n, 1, l ?? null, c, !1, d, h), n[hi] = r.current, Cu(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Yc(r);
  }, Ra.render = function(n, r, l) {
    if (!Qc(r)) throw Error(b(200));
    return is(null, n, r, !1, l);
  }, Ra.unmountComponentAtNode = function(n) {
    if (!Qc(n)) throw Error(b(40));
    return n._reactRootContainer ? (Xl(function() {
      is(null, null, n, !1, function() {
        n._reactRootContainer = null, n[hi] = null;
      });
    }), !0) : !1;
  }, Ra.unstable_batchedUpdates = Nd, Ra.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Qc(l)) throw Error(b(200));
    if (n == null || n._reactInternals === void 0) throw Error(b(38));
    return is(n, r, l, !1, o);
  }, Ra.version = "18.3.1-next-f1338f8080-20240426", Ra;
}
var wa = {};
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
function tk() {
  return aT || (aT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var A = Tf, I = lT(), b = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Qe = !1;
    function Pe(e) {
      Qe = e;
    }
    function Ne(e) {
      if (!Qe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Be("warn", e, a);
      }
    }
    function g(e) {
      if (!Qe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Be("error", e, a);
      }
    }
    function Be(e, t, a) {
      {
        var i = b.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var X = 0, q = 1, Ce = 2, W = 3, ae = 4, J = 5, ie = 6, ye = 7, _e = 8, it = 9, je = 10, De = 11, $e = 12, Re = 13, rt = 14, we = 15, Dt = 16, Tt = 17, It = 18, jt = 19, Rt = 21, Le = 22, Ht = 23, Q = 24, fe = 25, He = !0, V = !1, de = !1, K = !1, Ge = !1, st = !0, Ft = !0, Kt = !0, fr = !0, un = /* @__PURE__ */ new Set(), nn = {}, hn = {};
    function ir(e, t) {
      dr(e, t), dr(e + "Capture", t);
    }
    function dr(e, t) {
      nn[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), nn[e] = t;
      {
        var a = e.toLowerCase();
        hn[a] = e, e === "onDoubleClick" && (hn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        un.add(t[i]);
    }
    var mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", pr = Object.prototype.hasOwnProperty;
    function on(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Pn(e) {
      try {
        return Dn(e), !1;
      } catch {
        return !0;
      }
    }
    function Dn(e) {
      return "" + e;
    }
    function kn(e, t) {
      if (Pn(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, on(e)), Dn(e);
    }
    function lr(e) {
      if (Pn(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", on(e)), Dn(e);
    }
    function rn(e, t) {
      if (Pn(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, on(e)), Dn(e);
    }
    function _r(e, t) {
      if (Pn(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, on(e)), Dn(e);
    }
    function ba(e) {
      if (Pn(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", on(e)), Dn(e);
    }
    function Yn(e) {
      if (Pn(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", on(e)), Dn(e);
    }
    var An = 0, ze = 1, Vt = 2, yt = 3, $t = 4, Pt = 5, _n = 6, yn = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", G = yn + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", se = new RegExp("^[" + yn + "][" + G + "]*$"), Fe = {}, Je = {};
    function lt(e) {
      return pr.call(Je, e) ? !0 : pr.call(Fe, e) ? !1 : se.test(e) ? (Je[e] = !0, !0) : (Fe[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function ht(e, t, a) {
      return t !== null ? t.type === An : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Ut(e, t, a, i) {
      if (a !== null && a.type === An)
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
    function Mt(e, t, a, i) {
      if (t === null || typeof t > "u" || Ut(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case yt:
            return !t;
          case $t:
            return t === !1;
          case Pt:
            return isNaN(t);
          case _n:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ct(e) {
      return kt.hasOwnProperty(e) ? kt[e] : null;
    }
    function et(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Vt || t === yt || t === $t, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var kt = {}, Gr = [
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
    Gr.forEach(function(e) {
      kt[e] = new et(
        e,
        An,
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
      kt[t] = new et(
        t,
        ze,
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
      kt[e] = new et(
        e,
        Vt,
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
      kt[e] = new et(
        e,
        Vt,
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
      kt[e] = new et(
        e,
        yt,
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
      kt[e] = new et(
        e,
        yt,
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
      kt[e] = new et(
        e,
        $t,
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
      kt[e] = new et(
        e,
        _n,
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
      kt[e] = new et(
        e,
        Pt,
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
    var On = /[\-\:]([a-z])/g, jn = function(e) {
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
      var t = e.replace(On, jn);
      kt[t] = new et(
        t,
        ze,
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
      var t = e.replace(On, jn);
      kt[t] = new et(
        t,
        ze,
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
      var t = e.replace(On, jn);
      kt[t] = new et(
        t,
        ze,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      kt[e] = new et(
        e,
        ze,
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
    var ks = "xlinkHref";
    kt[ks] = new et(
      "xlinkHref",
      ze,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      kt[e] = new et(
        e,
        ze,
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
    function fu(e) {
      !ao && ro.test(e) && (ao = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function du(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        kn(a, t), i.sanitizeURL && fu("" + a);
        var s = i.attributeName, f = null;
        if (i.type === $t) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Mt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Mt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === yt)
            return a;
          f = e.getAttribute(s);
        }
        return Mt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function io(e, t, a, i) {
      {
        if (!lt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return kn(a, t), u === "" + a ? a : u;
      }
    }
    function ii(e, t, a, i) {
      var u = ct(t);
      if (!ht(t, u, i)) {
        if (Mt(t, a, u, i) && (a = null), i || u === null) {
          if (lt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (kn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === yt ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var m = u.attributeName, y = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(m);
        else {
          var R = u.type, x;
          R === yt || R === $t && a === !0 ? x = "" : (kn(a, m), x = "" + a, u.sanitizeURL && fu(x.toString())), y ? e.setAttributeNS(y, m, x) : e.setAttribute(m, x);
        }
      }
    }
    var Da = Symbol.for("react.element"), Or = Symbol.for("react.portal"), Ai = Symbol.for("react.fragment"), li = Symbol.for("react.strict_mode"), ji = Symbol.for("react.profiler"), Hi = Symbol.for("react.provider"), E = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), ut = Symbol.for("react.scope"), at = Symbol.for("react.debug_trace_mode"), Mn = Symbol.for("react.offscreen"), Wt = Symbol.for("react.legacy_hidden"), qt = Symbol.for("react.cache"), vr = Symbol.for("react.tracing_marker"), ui = Symbol.iterator, oi = "@@iterator";
    function Ze(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ui && e[ui] || e[oi];
      return typeof t == "function" ? t : null;
    }
    var tt = Object.assign, si = 0, lo, uo, $p, Rf, oo, ka, Pp;
    function la() {
    }
    la.__reactDisabledLog = !0;
    function Bm() {
      {
        if (si === 0) {
          lo = console.log, uo = console.info, $p = console.warn, Rf = console.error, oo = console.group, ka = console.groupCollapsed, Pp = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: la,
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
            log: tt({}, e, {
              value: lo
            }),
            info: tt({}, e, {
              value: uo
            }),
            warn: tt({}, e, {
              value: $p
            }),
            error: tt({}, e, {
              value: Rf
            }),
            group: tt({}, e, {
              value: oo
            }),
            groupCollapsed: tt({}, e, {
              value: ka
            }),
            groupEnd: tt({}, e, {
              value: Pp
            })
          });
        }
        si < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wf = b.ReactCurrentDispatcher, pu;
    function _a(e, t, a) {
      {
        if (pu === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            pu = i && i[1] || "";
          }
        return `
` + pu + e;
      }
    }
    var Sl = !1, El;
    {
      var Pm = typeof WeakMap == "function" ? WeakMap : Map;
      El = new Pm();
    }
    function bf(e, t) {
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
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && El.set(e, R), R;
                  }
                while (m >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        Sl = !1, wf.current = s, $m(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", O = x ? _a(x) : "";
      return typeof e == "function" && El.set(e, O), O;
    }
    function Df(e, t, a) {
      return bf(e, !0);
    }
    function _s(e, t, a) {
      return bf(e, !1);
    }
    function kf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Cl(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return bf(e, kf(e));
      if (typeof e == "string")
        return _a(e);
      switch (e) {
        case ne:
          return _a("Suspense");
        case Me:
          return _a("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case F:
            return _s(e.render);
          case qe:
            return Cl(e.type, t, a);
          case We: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Cl(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ym(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case J:
          return _a(e.type);
        case Dt:
          return _a("Lazy");
        case Re:
          return _a("Suspense");
        case jt:
          return _a("SuspenseList");
        case X:
        case Ce:
        case we:
          return _s(e.type);
        case De:
          return _s(e.type.render);
        case q:
          return Df(e.type);
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
    function _t(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function _f(e) {
      return e.displayName || "Context";
    }
    function Ot(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ai:
          return "Fragment";
        case Or:
          return "Portal";
        case ji:
          return "Profiler";
        case li:
          return "StrictMode";
        case ne:
          return "Suspense";
        case Me:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var t = e;
            return _f(t) + ".Consumer";
          case Hi:
            var a = e;
            return _f(a._context) + ".Provider";
          case F:
            return _t(e, e.render, "ForwardRef");
          case qe:
            var i = e.displayName || null;
            return i !== null ? i : Ot(e.type) || "Memo";
          case We: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Ot(f(s));
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
    function Xe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Q:
          return "Cache";
        case it:
          var i = a;
          return Mf(i) + ".Consumer";
        case je:
          var u = a;
          return Mf(u._context) + ".Provider";
        case It:
          return "DehydratedFragment";
        case De:
          return Of(a, a.render, "ForwardRef");
        case ye:
          return "Fragment";
        case J:
          return a;
        case ae:
          return "Portal";
        case W:
          return "Root";
        case ie:
          return "Text";
        case Dt:
          return Ot(a);
        case _e:
          return a === li ? "StrictMode" : "Mode";
        case Le:
          return "Offscreen";
        case $e:
          return "Profiler";
        case Rt:
          return "Scope";
        case Re:
          return "Suspense";
        case jt:
          return "SuspenseList";
        case fe:
          return "TracingMarker";
        case q:
        case X:
        case Tt:
        case Ce:
        case rt:
        case we:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Nf = b.ReactDebugCurrentFrame, hr = null, Fi = !1;
    function ua() {
      {
        if (hr === null)
          return null;
        var e = hr._debugOwner;
        if (e !== null && typeof e < "u")
          return Xe(e);
      }
      return null;
    }
    function Vi() {
      return hr === null ? "" : Os(hr);
    }
    function an() {
      Nf.getCurrentStack = null, hr = null, Fi = !1;
    }
    function Yt(e) {
      Nf.getCurrentStack = e === null ? null : Vi, hr = e, Fi = !1;
    }
    function so() {
      return hr;
    }
    function Qn(e) {
      Fi = e;
    }
    function oa(e) {
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
          return Yn(e), e;
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
    function Lf(e, t) {
      co[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function zf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function fo(e) {
      return e._valueTracker;
    }
    function Yp(e) {
      e._valueTracker = null;
    }
    function Qm(e) {
      var t = "";
      return e && (zf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function po(e) {
      var t = zf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Yn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Yn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Yn(p), i = "" + p;
          },
          stopTracking: function() {
            Yp(e), delete e[t];
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
    var Qp = !1, Ip = !1, Ms = !1, vo = !1;
    function Ns(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Ls(e, t) {
      var a = e, i = t.checked, u = tt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function fi(e, t) {
      Lf("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Ip && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ua() || "A component", t.type), Ip = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Qp && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ua() || "A component", t.type), Qp = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ci(t.value != null ? t.value : i),
        controlled: Ns(t)
      };
    }
    function zs(e, t) {
      var a = e, i = t.checked;
      i != null && ii(a, "checked", i, !1);
    }
    function vu(e, t) {
      var a = e;
      {
        var i = Ns(t);
        !a._wrapperState.controlled && i && !vo && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), vo = !0), a._wrapperState.controlled && !i && !Ms && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ms = !0);
      }
      zs(e, t);
      var u = ci(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = oa(u)) : a.value !== oa(u) && (a.value = oa(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? js(a, t.type, u) : t.hasOwnProperty("defaultValue") && js(a, t.type, ci(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Uf(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = oa(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Us(e, t) {
      var a = e;
      vu(a, t), As(a, t);
    }
    function As(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        kn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Rh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            xl(f), vu(f, p);
          }
        }
      }
    }
    function js(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Tl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = oa(e._wrapperState.initialValue) : e.defaultValue !== oa(a) && (e.defaultValue = oa(a)));
    }
    var Mr = !1, Rl = !1, Hs = !1;
    function hu(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? A.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Rl || (Rl = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Hs || (Hs = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Mr && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Mr = !0);
    }
    function Im(e, t) {
      t.value != null && e.setAttribute("value", oa(ci(t.value)));
    }
    var Af = Array.isArray;
    function In(e) {
      return Af(e);
    }
    var wl;
    wl = !1;
    function ho() {
      var e = ua();
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
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ho()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ho());
          }
        }
      }
    }
    function mu(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var m = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== m && (u[v].selected = m), m && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var y = oa(ci(a)), R = null, x = 0; x < u.length; x++) {
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
      return tt({}, t, {
        value: void 0
      });
    }
    function Fs(e, t) {
      var a = e;
      Wm(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !wl && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), wl = !0);
    }
    function Gm(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? mu(a, !!t.multiple, i, !1) : t.defaultValue != null && mu(a, !!t.multiple, t.defaultValue, !0);
    }
    function Xm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? mu(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? mu(a, !!t.multiple, t.defaultValue, !0) : mu(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Km(e, t) {
      var a = e, i = t.value;
      i != null && mu(a, !!t.multiple, i, !1);
    }
    var Wp = !1;
    function Ff(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = tt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: oa(a._wrapperState.initialValue)
      });
      return i;
    }
    function Vf(e, t) {
      var a = e;
      Lf("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Wp && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ua() || "A component"), Wp = !0);
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
        initialValue: ci(i)
      };
    }
    function Gp(e, t) {
      var a = e, i = ci(t.value), u = ci(t.defaultValue);
      if (i != null) {
        var s = oa(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = oa(u));
    }
    function Xp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function qm(e, t) {
      Gp(e, t);
    }
    var di = "http://www.w3.org/1999/xhtml", Bf = "http://www.w3.org/1998/Math/MathML", $f = "http://www.w3.org/2000/svg";
    function Pf(e) {
      switch (e) {
        case "svg":
          return $f;
        case "math":
          return Bf;
        default:
          return di;
      }
    }
    function Yf(e, t) {
      return e == null || e === di ? Pf(t) : e === $f && t === "foreignObject" ? di : e;
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
    }), Nr = 1, pi = 3, gn = 8, vi = 9, Qf = 11, yu = function(e, t) {
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
    function Zp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Jp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(yo).forEach(function(e) {
      Jp.forEach(function(t) {
        yo[Zp(t, e)] = yo[e];
      });
    });
    function Bs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(yo.hasOwnProperty(e) && yo[e]) ? t + "px" : (_r(t, e), ("" + t).trim());
    }
    var ev = /([A-Z])/g, tv = /^ms-/;
    function gu(e) {
      return e.replace(ev, "-$1").toLowerCase().replace(tv, "-ms-");
    }
    var nv = function() {
    };
    {
      var Zm = /^(?:webkit|moz|o)[A-Z]/, Jm = /^-ms-/, rv = /-(.)/g, If = /;\s*$/, Fa = {}, bl = {}, av = !1, go = !1, ey = function(e) {
        return e.replace(rv, function(t, a) {
          return a.toUpperCase();
        });
      }, iv = function(e) {
        Fa.hasOwnProperty(e) && Fa[e] || (Fa[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ey(e.replace(Jm, "ms-"))
        ));
      }, Wf = function(e) {
        Fa.hasOwnProperty(e) && Fa[e] || (Fa[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Gf = function(e, t) {
        bl.hasOwnProperty(t) && bl[t] || (bl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(If, "")));
      }, lv = function(e, t) {
        av || (av = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, uv = function(e, t) {
        go || (go = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
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
              t += a + (s ? i : gu(i)) + ":", t += Bs(i, u, s), a = ";";
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
        for (var i = mo[a] || [a], u = 0; u < i.length; u++)
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
    }, So = tt({
      menuitem: !0
    }, Oa), fv = "__html";
    function $s(e, t) {
      if (t) {
        if (So[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    function $i(e, t) {
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
    }, Su = {}, ay = new RegExp("^(aria)-[" + G + "]*$"), Eu = new RegExp("^(aria)[A-Z][" + G + "]*$");
    function Xf(e, t) {
      {
        if (pr.call(Su, t) && Su[t])
          return !0;
        if (Eu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Ps.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Su[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Su[t] = !0, !0;
        }
        if (ay.test(t)) {
          var u = t.toLowerCase(), s = Ps.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Su[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Su[t] = !0, !0;
        }
      }
      return !0;
    }
    function Co(e, t) {
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
      $i(e, t) || Co(e, t);
    }
    var qf = !1;
    function Ys(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !qf && (qf = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Dl = function() {
    };
    {
      var Wn = {}, Zf = /^on./, Qs = /^on[^A-Z]/, dv = new RegExp("^(aria)-[" + G + "]*$"), pv = new RegExp("^(aria)[A-Z][" + G + "]*$");
      Dl = function(e, t, a, i) {
        if (pr.call(Wn, t) && Wn[t])
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
        var v = ct(t), m = v !== null && v.type === An;
        if (Eo.hasOwnProperty(u)) {
          var y = Eo[u];
          if (y !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, y), Wn[t] = !0, !0;
        } else if (!m && t !== u)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Wn[t] = !0, !0;
        return typeof a == "boolean" && Ut(t, a, v, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Wn[t] = !0, !0) : m ? !0 : Ut(t, a, v, !1) ? (Wn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === yt && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Wn[t] = !0), !0);
      };
    }
    var vv = function(e, t, a) {
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
    function hv(e, t, a) {
      $i(e, t) || vv(e, t, a);
    }
    var Jf = 1, Is = 2, sa = 4, ed = Jf | Is | sa, kl = null;
    function iy(e) {
      kl !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), kl = e;
    }
    function ly() {
      kl === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), kl = null;
    }
    function xo(e) {
      return e === kl;
    }
    function td(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === pi ? t.parentNode : t;
    }
    var Ws = null, _l = null, wt = null;
    function Gs(e) {
      var t = Bu(e);
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
    function Cu(e) {
      _l ? wt ? wt.push(e) : wt = [e] : _l = e;
    }
    function mv() {
      return _l !== null || wt !== null;
    }
    function Ks() {
      if (_l) {
        var e = _l, t = wt;
        if (_l = null, wt = null, Gs(e), t)
          for (var a = 0; a < t.length; a++)
            Gs(t[a]);
      }
    }
    var xu = function(e, t) {
      return e(t);
    }, To = function() {
    }, Pi = !1;
    function yv() {
      var e = mv();
      e && (To(), Ks());
    }
    function gv(e, t, a) {
      if (Pi)
        return e(t, a);
      Pi = !0;
      try {
        return xu(e, t, a);
      } finally {
        Pi = !1, yv();
      }
    }
    function uy(e, t, a) {
      xu = e, To = a;
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
    function Yi(e, t) {
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
    var Ro = !1;
    if (mn)
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
        function L() {
          nd.removeEventListener(z, be, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = O);
        }
        var te = Array.prototype.slice.call(arguments, 3);
        function be() {
          R = !0, L(), a.apply(i, te), x = !1;
        }
        var Se, vt = !1, ot = !1;
        function D(k) {
          if (Se = k.error, vt = !0, Se === null && k.colno === 0 && k.lineno === 0 && (ot = !0), k.defaultPrevented && Se != null && typeof Se == "object")
            try {
              Se._suppressLogging = !0;
            } catch {
            }
        }
        var z = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), nd.addEventListener(z, be, !1), y.initEvent(z, !1, !1), nd.dispatchEvent(y), N && Object.defineProperty(window, "event", N), R && x && (vt ? ot && (Se = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Se = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Se)), window.removeEventListener("error", D), !R)
          return L(), Zs.apply(this, arguments);
      };
    }
    var Ev = Js, Tu = !1, ec = null, Ru = !1, Va = null, Cv = {
      onError: function(e) {
        Tu = !0, ec = e;
      }
    };
    function Qi(e, t, a, i, u, s, f, p, v) {
      Tu = !1, ec = null, Ev.apply(Cv, arguments);
    }
    function Ba(e, t, a, i, u, s, f, p, v) {
      if (Qi.apply(this, arguments), Tu) {
        var m = bo();
        Ru || (Ru = !0, Va = m);
      }
    }
    function wo() {
      if (Ru) {
        var e = Va;
        throw Ru = !1, Va = null, e;
      }
    }
    function hi() {
      return Tu;
    }
    function bo() {
      if (Tu) {
        var e = ec;
        return Tu = !1, ec = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wu(e) {
      return e._reactInternals;
    }
    function oy(e) {
      return e._reactInternals !== void 0;
    }
    function Ml(e, t) {
      e._reactInternals = t;
    }
    var xe = (
      /*                      */
      0
    ), Ma = (
      /*                */
      1
    ), Zt = (
      /*                    */
      2
    ), ft = (
      /*                       */
      4
    ), ca = (
      /*                */
      16
    ), fa = (
      /*                 */
      32
    ), Bt = (
      /*                     */
      64
    ), Ee = (
      /*                   */
      128
    ), ur = (
      /*            */
      256
    ), ln = (
      /*                          */
      512
    ), Nn = (
      /*                     */
      1024
    ), Lr = (
      /*                      */
      2048
    ), zr = (
      /*                    */
      4096
    ), Sn = (
      /*                   */
      8192
    ), bu = (
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
    ), $a = (
      /*                       */
      1048576
    ), Du = (
      /*                    */
      2097152
    ), mi = (
      /*                 */
      4194304
    ), nc = (
      /*                */
      8388608
    ), Ii = (
      /*               */
      16777216
    ), Pa = (
      /*              */
      33554432
    ), Wi = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ft | Nn | 0
    ), Gi = Zt | ft | ca | fa | ln | zr | Sn, Xi = ft | Bt | ln | Sn, yi = Lr | ca, En = mi | nc | Du, da = b.ReactCurrentOwner;
    function Xr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Zt | zr)) !== xe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === W ? a : null;
    }
    function Ya(e) {
      if (e.tag === Re) {
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
    function Qa(e) {
      return e.tag === W ? e.stateNode.containerInfo : null;
    }
    function Nl(e) {
      return Xr(e) === e;
    }
    function Tv(e) {
      {
        var t = da.current;
        if (t !== null && t.tag === q) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Xe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = wu(e);
      return u ? Xr(u) === u : !1;
    }
    function rc(e) {
      if (Xr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function ac(e) {
      var t = e.alternate;
      if (!t) {
        var a = Xr(e);
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
      if (i.tag !== W)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Ur(e) {
      var t = ac(e);
      return t !== null ? Ar(t) : null;
    }
    function Ar(e) {
      if (e.tag === J || e.tag === ie)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Ar(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Gt(e) {
      var t = ac(e);
      return t !== null ? pa(t) : null;
    }
    function pa(e) {
      if (e.tag === J || e.tag === ie)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ae) {
          var a = pa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var rd = I.unstable_scheduleCallback, Rv = I.unstable_cancelCallback, ad = I.unstable_shouldYield, id = I.unstable_requestPaint, Ln = I.unstable_now, ic = I.unstable_getCurrentPriorityLevel, ko = I.unstable_ImmediatePriority, Ki = I.unstable_UserBlockingPriority, gi = I.unstable_NormalPriority, sy = I.unstable_LowPriority, Ll = I.unstable_IdlePriority, lc = I.unstable_yieldValue, wv = I.unstable_setDisableYieldValue, zl = null, sn = null, ee = null, Kr = !1, jr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ku(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ft && (e = tt({}, e, {
          getLaneLabelMap: Ul,
          injectProfilingHooks: va
        })), zl = t.inject(e), sn = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ld(e, t) {
      if (sn && typeof sn.onScheduleFiberRoot == "function")
        try {
          sn.onScheduleFiberRoot(zl, e, t);
        } catch (a) {
          Kr || (Kr = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function ud(e, t) {
      if (sn && typeof sn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ee) === Ee;
          if (Kt) {
            var i;
            switch (t) {
              case mr:
                i = ko;
                break;
              case Wa:
                i = Ki;
                break;
              case ha:
                i = gi;
                break;
              case ma:
                i = Ll;
                break;
              default:
                i = gi;
                break;
            }
            sn.onCommitFiberRoot(zl, e, i, a);
          }
        } catch (u) {
          Kr || (Kr = !0, g("React instrumentation encountered an error: %s", u));
        }
    }
    function od(e) {
      if (sn && typeof sn.onPostCommitFiberRoot == "function")
        try {
          sn.onPostCommitFiberRoot(zl, e);
        } catch (t) {
          Kr || (Kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function sd(e) {
      if (sn && typeof sn.onCommitFiberUnmount == "function")
        try {
          sn.onCommitFiberUnmount(zl, e);
        } catch (t) {
          Kr || (Kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Jt(e) {
      if (typeof lc == "function" && (wv(e), Pe(e)), sn && typeof sn.setStrictMode == "function")
        try {
          sn.setStrictMode(zl, e);
        } catch (t) {
          Kr || (Kr = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function va(e) {
      ee = e;
    }
    function Ul() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Hl; a++) {
          var i = _v(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function cd(e) {
      ee !== null && typeof ee.markCommitStarted == "function" && ee.markCommitStarted(e);
    }
    function fd() {
      ee !== null && typeof ee.markCommitStopped == "function" && ee.markCommitStopped();
    }
    function qr(e) {
      ee !== null && typeof ee.markComponentRenderStarted == "function" && ee.markComponentRenderStarted(e);
    }
    function Zr() {
      ee !== null && typeof ee.markComponentRenderStopped == "function" && ee.markComponentRenderStopped();
    }
    function dd(e) {
      ee !== null && typeof ee.markComponentPassiveEffectMountStarted == "function" && ee.markComponentPassiveEffectMountStarted(e);
    }
    function bv() {
      ee !== null && typeof ee.markComponentPassiveEffectMountStopped == "function" && ee.markComponentPassiveEffectMountStopped();
    }
    function Si(e) {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStarted == "function" && ee.markComponentPassiveEffectUnmountStarted(e);
    }
    function qi() {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStopped == "function" && ee.markComponentPassiveEffectUnmountStopped();
    }
    function uc(e) {
      ee !== null && typeof ee.markComponentLayoutEffectMountStarted == "function" && ee.markComponentLayoutEffectMountStarted(e);
    }
    function Dv() {
      ee !== null && typeof ee.markComponentLayoutEffectMountStopped == "function" && ee.markComponentLayoutEffectMountStopped();
    }
    function _o(e) {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStarted == "function" && ee.markComponentLayoutEffectUnmountStarted(e);
    }
    function pd() {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStopped == "function" && ee.markComponentLayoutEffectUnmountStopped();
    }
    function Oo(e, t, a) {
      ee !== null && typeof ee.markComponentErrored == "function" && ee.markComponentErrored(e, t, a);
    }
    function Ia(e, t, a) {
      ee !== null && typeof ee.markComponentSuspended == "function" && ee.markComponentSuspended(e, t, a);
    }
    function Mo(e) {
      ee !== null && typeof ee.markLayoutEffectsStarted == "function" && ee.markLayoutEffectsStarted(e);
    }
    function No() {
      ee !== null && typeof ee.markLayoutEffectsStopped == "function" && ee.markLayoutEffectsStopped();
    }
    function Al(e) {
      ee !== null && typeof ee.markPassiveEffectsStarted == "function" && ee.markPassiveEffectsStarted(e);
    }
    function vd() {
      ee !== null && typeof ee.markPassiveEffectsStopped == "function" && ee.markPassiveEffectsStopped();
    }
    function jl(e) {
      ee !== null && typeof ee.markRenderStarted == "function" && ee.markRenderStarted(e);
    }
    function kv() {
      ee !== null && typeof ee.markRenderYielded == "function" && ee.markRenderYielded();
    }
    function oc() {
      ee !== null && typeof ee.markRenderStopped == "function" && ee.markRenderStopped();
    }
    function en(e) {
      ee !== null && typeof ee.markRenderScheduled == "function" && ee.markRenderScheduled(e);
    }
    function sc(e, t) {
      ee !== null && typeof ee.markForceUpdateScheduled == "function" && ee.markForceUpdateScheduled(e, t);
    }
    function Lo(e, t) {
      ee !== null && typeof ee.markStateUpdateScheduled == "function" && ee.markStateUpdateScheduled(e, t);
    }
    var Te = (
      /*                         */
      0
    ), nt = (
      /*                 */
      1
    ), gt = (
      /*                    */
      2
    ), Nt = (
      /*               */
      8
    ), St = (
      /*              */
      16
    ), Cn = Math.clz32 ? Math.clz32 : zo, Fn = Math.log, cc = Math.LN2;
    function zo(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Fn(t) / cc | 0) | 0;
    }
    var Hl = 31, j = (
      /*                        */
      0
    ), mt = (
      /*                          */
      0
    ), Ue = (
      /*                        */
      1
    ), Zi = (
      /*    */
      2
    ), Na = (
      /*             */
      4
    ), or = (
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
    ), Fl = (
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
    ), Vl = (
      /*                       */
      32768
    ), Sc = (
      /*                       */
      65536
    ), _u = (
      /*                       */
      131072
    ), Ou = (
      /*                       */
      262144
    ), Ec = (
      /*                       */
      524288
    ), Uo = (
      /*                       */
      1048576
    ), Cc = (
      /*                       */
      2097152
    ), Ao = (
      /*                            */
      130023424
    ), Bl = (
      /*                             */
      4194304
    ), xc = (
      /*                             */
      8388608
    ), jo = (
      /*                             */
      16777216
    ), Tc = (
      /*                             */
      33554432
    ), Rc = (
      /*                             */
      67108864
    ), hd = Bl, Ho = (
      /*          */
      134217728
    ), md = (
      /*                          */
      268435455
    ), Fo = (
      /*               */
      268435456
    ), $l = (
      /*                        */
      536870912
    ), Hr = (
      /*                   */
      1073741824
    );
    function _v(e) {
      {
        if (e & Ue)
          return "Sync";
        if (e & Zi)
          return "InputContinuousHydration";
        if (e & Na)
          return "InputContinuous";
        if (e & or)
          return "DefaultHydration";
        if (e & cn)
          return "Default";
        if (e & Ei)
          return "TransitionHydration";
        if (e & Ji)
          return "Transition";
        if (e & Ao)
          return "Retry";
        if (e & Ho)
          return "SelectiveHydration";
        if (e & Fo)
          return "IdleHydration";
        if (e & $l)
          return "Idle";
        if (e & Hr)
          return "Offscreen";
      }
    }
    var At = -1, Pl = Fl, wc = Bl;
    function Vo(e) {
      switch (el(e)) {
        case Ue:
          return Ue;
        case Zi:
          return Zi;
        case Na:
          return Na;
        case or:
          return or;
        case cn:
          return cn;
        case Ei:
          return Ei;
        case Fl:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case mc:
        case yc:
        case gc:
        case Vl:
        case Sc:
        case _u:
        case Ou:
        case Ec:
        case Uo:
        case Cc:
          return e & Ji;
        case Bl:
        case xc:
        case jo:
        case Tc:
        case Rc:
          return e & Ao;
        case Ho:
          return Ho;
        case Fo:
          return Fo;
        case $l:
          return $l;
        case Hr:
          return Hr;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function bc(e, t) {
      var a = e.pendingLanes;
      if (a === j)
        return j;
      var i = j, u = e.suspendedLanes, s = e.pingedLanes, f = a & md;
      if (f !== j) {
        var p = f & ~u;
        if (p !== j)
          i = Vo(p);
        else {
          var v = f & s;
          v !== j && (i = Vo(v));
        }
      } else {
        var m = a & ~u;
        m !== j ? i = Vo(m) : s !== j && (i = Vo(s));
      }
      if (i === j)
        return j;
      if (t !== j && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === j) {
        var y = el(i), R = el(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          y >= R || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          y === cn && (R & Ji) !== j
        )
          return t;
      }
      (i & Na) !== j && (i |= a & cn);
      var x = e.entangledLanes;
      if (x !== j)
        for (var O = e.entanglements, N = i & x; N > 0; ) {
          var L = xn(N), te = 1 << L;
          i |= O[L], N &= ~te;
        }
      return i;
    }
    function La(e, t) {
      for (var a = e.eventTimes, i = At; t > 0; ) {
        var u = xn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function yd(e, t) {
      switch (e) {
        case Ue:
        case Zi:
        case Na:
          return t + 250;
        case or:
        case cn:
        case Ei:
        case Fl:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case mc:
        case yc:
        case gc:
        case Vl:
        case Sc:
        case _u:
        case Ou:
        case Ec:
        case Uo:
        case Cc:
          return t + 5e3;
        case Bl:
        case xc:
        case jo:
        case Tc:
        case Rc:
          return At;
        case Ho:
        case Fo:
        case $l:
        case Hr:
          return At;
        default:
          return g("Should have found matching lanes. This is a bug in React."), At;
      }
    }
    function Dc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = xn(f), v = 1 << p, m = s[p];
        m === At ? ((v & i) === j || (v & u) !== j) && (s[p] = yd(v, t)) : m <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Ov(e) {
      return Vo(e.pendingLanes);
    }
    function kc(e) {
      var t = e.pendingLanes & ~Hr;
      return t !== j ? t : t & Hr ? Hr : j;
    }
    function Mv(e) {
      return (e & Ue) !== j;
    }
    function Bo(e) {
      return (e & md) !== j;
    }
    function Yl(e) {
      return (e & Ao) === e;
    }
    function gd(e) {
      var t = Ue | Na | cn;
      return (e & t) === j;
    }
    function Sd(e) {
      return (e & Ji) === e;
    }
    function _c(e, t) {
      var a = Zi | Na | or | cn;
      return (t & a) !== j;
    }
    function Nv(e, t) {
      return (t & e.expiredLanes) !== j;
    }
    function Ed(e) {
      return (e & Ji) !== j;
    }
    function Cd() {
      var e = Pl;
      return Pl <<= 1, (Pl & Ji) === j && (Pl = Fl), e;
    }
    function Lv() {
      var e = wc;
      return wc <<= 1, (wc & Ao) === j && (wc = Bl), e;
    }
    function el(e) {
      return e & -e;
    }
    function $o(e) {
      return el(e);
    }
    function xn(e) {
      return 31 - Cn(e);
    }
    function Gn(e) {
      return xn(e);
    }
    function Fr(e, t) {
      return (e & t) !== j;
    }
    function Ql(e, t) {
      return (e & t) === t;
    }
    function Ke(e, t) {
      return e | t;
    }
    function Po(e, t) {
      return e & ~t;
    }
    function xd(e, t) {
      return e & t;
    }
    function zv(e) {
      return e;
    }
    function Uv(e, t) {
      return e !== mt && e < t ? e : t;
    }
    function Yo(e) {
      for (var t = [], a = 0; a < Hl; a++)
        t.push(e);
      return t;
    }
    function Mu(e, t, a) {
      e.pendingLanes |= t, t !== $l && (e.suspendedLanes = j, e.pingedLanes = j);
      var i = e.eventTimes, u = Gn(t);
      i[u] = a;
    }
    function Av(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = xn(i), s = 1 << u;
        a[u] = At, i &= ~s;
      }
    }
    function Oc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Td(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = j, e.pingedLanes = j, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = xn(f), v = 1 << p;
        i[p] = j, u[p] = At, s[p] = At, f &= ~v;
      }
    }
    function Mc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = xn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Rd(e, t) {
      var a = el(t), i;
      switch (a) {
        case Na:
          i = Zi;
          break;
        case cn:
          i = or;
          break;
        case Fl:
        case fc:
        case dc:
        case pc:
        case vc:
        case hc:
        case mc:
        case yc:
        case gc:
        case Vl:
        case Sc:
        case _u:
        case Ou:
        case Ec:
        case Uo:
        case Cc:
        case Bl:
        case xc:
        case jo:
        case Tc:
        case Rc:
          i = Ei;
          break;
        case $l:
          i = Fo;
          break;
        default:
          i = mt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== mt ? mt : i;
    }
    function Qo(e, t, a) {
      if (jr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Gn(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function jv(e, t) {
      if (jr)
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
    var mr = Ue, Wa = Na, ha = cn, ma = $l, Io = mt;
    function ya() {
      return Io;
    }
    function Tn(e) {
      Io = e;
    }
    function Hv(e, t) {
      var a = Io;
      try {
        return Io = e, t();
      } finally {
        Io = a;
      }
    }
    function Fv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Wo(e, t) {
      return e > t ? e : t;
    }
    function Vn(e, t) {
      return e !== 0 && e < t;
    }
    function Vv(e) {
      var t = el(e);
      return Vn(mr, t) ? Vn(Wa, t) ? Bo(t) ? ha : ma : Wa : mr;
    }
    function Nc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Go;
    function sr(e) {
      Go = e;
    }
    function cy(e) {
      Go(e);
    }
    var ce;
    function Nu(e) {
      ce = e;
    }
    var Lc;
    function Bv(e) {
      Lc = e;
    }
    var $v;
    function Xo(e) {
      $v = e;
    }
    var Ko;
    function bd(e) {
      Ko = e;
    }
    var zc = !1, qo = [], Ci = null, Ga = null, Xa = null, fn = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), gr = [], Pv = [
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
    function Dd(e, t) {
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
          yr.delete(i);
          break;
        }
      }
    }
    function Vr(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = za(t, a, i, u, s);
        if (t !== null) {
          var p = Bu(t);
          p !== null && ce(p);
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
          return Ci = Vr(Ci, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ga = Vr(Ga, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Xa = Vr(Xa, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, m = v.pointerId;
          return fn.set(m, Vr(fn.get(m) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var y = u, R = y.pointerId;
          return yr.set(R, Vr(yr.get(R) || null, e, t, a, i, y)), !0;
        }
      }
      return !1;
    }
    function kd(e) {
      var t = ss(e.target);
      if (t !== null) {
        var a = Xr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Re) {
            var u = Ya(a);
            if (u !== null) {
              e.blockedOn = u, Ko(e.priority, function() {
                Lc(a);
              });
              return;
            }
          } else if (i === W) {
            var s = a.stateNode;
            if (Nc(s)) {
              e.blockedOn = Qa(a);
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
      gr.splice(i, 0, a), i === 0 && kd(a);
    }
    function Zo(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = zu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          iy(s), u.target.dispatchEvent(s), ly();
        } else {
          var f = Bu(i);
          return f !== null && ce(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function _d(e, t, a) {
      Zo(e) && a.delete(t);
    }
    function dy() {
      zc = !1, Ci !== null && Zo(Ci) && (Ci = null), Ga !== null && Zo(Ga) && (Ga = null), Xa !== null && Zo(Xa) && (Xa = null), fn.forEach(_d), yr.forEach(_d);
    }
    function tl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, zc || (zc = !0, I.unstable_scheduleCallback(I.unstable_NormalPriority, dy)));
    }
    function Il(e) {
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
      fn.forEach(i), yr.forEach(i);
      for (var u = 0; u < gr.length; u++) {
        var s = gr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; gr.length > 0; ) {
        var f = gr[0];
        if (f.blockedOn !== null)
          break;
        kd(f), f.blockedOn === null && gr.shift();
      }
    }
    var Xn = b.ReactCurrentBatchConfig, dt = !0;
    function zn(e) {
      dt = !!e;
    }
    function Rn() {
      return dt;
    }
    function Kn(e, t, a) {
      var i = Uc(t), u;
      switch (i) {
        case mr:
          u = Jr;
          break;
        case Wa:
          u = Lu;
          break;
        case ha:
        default:
          u = dn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Jr(e, t, a, i) {
      var u = ya(), s = Xn.transition;
      Xn.transition = null;
      try {
        Tn(mr), dn(e, t, a, i);
      } finally {
        Tn(u), Xn.transition = s;
      }
    }
    function Lu(e, t, a, i) {
      var u = ya(), s = Xn.transition;
      Xn.transition = null;
      try {
        Tn(Wa), dn(e, t, a, i);
      } finally {
        Tn(u), Xn.transition = s;
      }
    }
    function dn(e, t, a, i) {
      dt && Jo(e, t, a, i);
    }
    function Jo(e, t, a, i) {
      var u = zu(e, t, a, i);
      if (u === null) {
        _y(e, t, i, Ka, a), Dd(e, i);
        return;
      }
      if (fy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Dd(e, i), t & sa && Yv(e)) {
        for (; u !== null; ) {
          var s = Bu(u);
          s !== null && cy(s);
          var f = zu(e, t, a, i);
          if (f === null && _y(e, t, i, Ka, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _y(e, t, i, null, a);
    }
    var Ka = null;
    function zu(e, t, a, i) {
      Ka = null;
      var u = td(i), s = ss(u);
      if (s !== null) {
        var f = Xr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var v = Ya(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === W) {
            var m = f.stateNode;
            if (Nc(m))
              return Qa(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ka = s, null;
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
          return Wa;
        case "message": {
          var t = ic();
          switch (t) {
            case ko:
              return mr;
            case Ki:
              return Wa;
            case gi:
            case sy:
              return ha;
            case Ll:
              return ma;
            default:
              return ha;
          }
        }
        default:
          return ha;
      }
    }
    function es(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Br(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Od(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Uu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ea = null, Au = null, Wl = null;
    function nl(e) {
      return ea = e, Au = ts(), !0;
    }
    function Ac() {
      ea = null, Au = null, Wl = null;
    }
    function xi() {
      if (Wl)
        return Wl;
      var e, t = Au, a = t.length, i, u = ts(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Wl = u.slice(e, p), Wl;
    }
    function ts() {
      return "value" in ea ? ea.value : ea.textContent;
    }
    function rl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ju() {
      return !0;
    }
    function ns() {
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
        return m ? this.isDefaultPrevented = ju : this.isDefaultPrevented = ns, this.isPropagationStopped = ns, this;
      }
      return tt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ju);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ju);
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
        isPersistent: ju
      }), t;
    }
    var wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, qa = cr(wn), Sr = tt({}, wn, {
      view: 0,
      detail: 0
    }), $r = cr(Sr), jc, rs, Gl;
    function py(e) {
      e !== Gl && (Gl && e.type === "mousemove" ? (jc = e.screenX - Gl.screenX, rs = e.screenY - Gl.screenY) : (jc = 0, rs = 0), Gl = e);
    }
    var Ua = tt({}, Sr, {
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
        return "movementY" in e ? e.movementY : rs;
      }
    }), Md = cr(Ua), Nd = tt({}, Ua, {
      dataTransfer: 0
    }), Xl = cr(Nd), Ld = tt({}, Sr, {
      relatedTarget: 0
    }), Ti = cr(Ld), Iv = tt({}, wn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wv = cr(Iv), zd = tt({}, wn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Hc = cr(zd), vy = tt({}, wn, {
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
    function hy(e) {
      if (e.key) {
        var t = Kv[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = rl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Kl[e.keyCode] || "Unidentified" : "";
    }
    var Hu = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function qv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Hu[e];
      return i ? !!a[i] : !1;
    }
    function Xt(e) {
      return qv;
    }
    var my = tt({}, Sr, {
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
        return e.type === "keypress" ? rl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? rl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Zv = cr(my), yy = tt({}, Ua, {
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
    }), Jv = cr(yy), eh = tt({}, Sr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xt
    }), th = cr(eh), gy = tt({}, wn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ga = cr(gy), Ud = tt({}, Ua, {
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
    }), Sy = cr(Ud), al = [9, 13, 27, 32], as = 229, Ri = mn && "CompositionEvent" in window, il = null;
    mn && "documentMode" in document && (il = document.documentMode);
    var Ad = mn && "TextEvent" in window && !il, Fc = mn && (!Ri || il && il > 8 && il <= 11), nh = 32, Vc = String.fromCharCode(nh);
    function Ey() {
      ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ir("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ir("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ir("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
      return e === "keydown" && t.keyCode === as;
    }
    function Hd(e, t) {
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
    function Pc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ah(e) {
      return e.locale === "ko";
    }
    var ql = !1;
    function Fd(e, t, a, i, u) {
      var s, f;
      if (Ri ? s = Bc(t) : ql ? Hd(t, i) && (s = "onCompositionEnd") : $c(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Fc && !ah(i) && (!ql && s === "onCompositionStart" ? ql = nl(u) : s === "onCompositionEnd" && ql && (f = xi()));
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
      if (ql) {
        if (e === "compositionend" || !Ri && Hd(e, t)) {
          var a = xi();
          return Ac(), ql = !1, a;
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
    function is(e) {
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
      if (!mn)
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
    function lh(e, t, a, i) {
      Cu(i);
      var u = fh(t, "onChange");
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
      lh(t, n, e, td(e)), gv(o, t);
    }
    function o(e) {
      _0(e, 0);
    }
    function c(e) {
      var t = qc(e);
      if (xl(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var h = !1;
    mn && (h = xy("input") && (!document.documentMode || document.documentMode > 9));
    function S(e, t) {
      ll = e, n = t, ll.attachEvent("onpropertychange", M);
    }
    function C() {
      ll && (ll.detachEvent("onpropertychange", M), ll = null, n = null);
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
    function H(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function le(e, t) {
      if (e === "click")
        return c(t);
    }
    function pe(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function me(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || js(e, "number", e.value);
    }
    function pn(e, t, a, i, u, s, f) {
      var p = a ? qc(a) : window, v, m;
      if (r(p) ? v = d : is(p) ? h ? v = pe : (v = P, m = B) : H(p) && (v = le), v) {
        var y = v(t, a);
        if (y) {
          lh(e, y, i, u);
          return;
        }
      }
      m && m(t, p, a), t === "focusout" && me(p);
    }
    function w() {
      dr("onMouseEnter", ["mouseout", "mouseover"]), dr("onMouseLeave", ["mouseout", "mouseover"]), dr("onPointerEnter", ["pointerout", "pointerover"]), dr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function T(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !xo(i)) {
        var m = i.relatedTarget || i.fromElement;
        if (m && (ss(m) || ep(m)))
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
          if (x = a, O = N ? ss(N) : null, O !== null) {
            var L = Xr(O);
            (O !== L || O.tag !== J && O.tag !== ie) && (O = null);
          }
        } else
          x = null, O = a;
        if (x !== O) {
          var te = Md, be = "onMouseLeave", Se = "onMouseEnter", vt = "mouse";
          (t === "pointerout" || t === "pointerover") && (te = Jv, be = "onPointerLeave", Se = "onPointerEnter", vt = "pointer");
          var ot = x == null ? y : qc(x), D = O == null ? y : qc(O), z = new te(be, vt + "leave", x, i, u);
          z.target = ot, z.relatedTarget = D;
          var k = null, Y = ss(u);
          if (Y === a) {
            var oe = new te(Se, vt + "enter", O, i, u);
            oe.target = D, oe.relatedTarget = ot, k = oe;
          }
          kT(e, z, k, x, O);
        }
      }
    }
    function _(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var $ = typeof Object.is == "function" ? Object.is : _;
    function ve(e, t) {
      if ($(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!pr.call(t, s) || !$(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ke(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Oe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ve(e, t) {
      for (var a = ke(e), i = 0, u = 0; a; ) {
        if (a.nodeType === pi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ke(Oe(a));
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
      return Et(e, u, s, f, p);
    }
    function Et(e, t, a, i, u) {
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
        var m = Ve(e, f), y = Ve(e, p);
        if (m && y) {
          if (u.rangeCount === 1 && u.anchorNode === m.node && u.anchorOffset === m.offset && u.focusNode === y.node && u.focusOffset === y.offset)
            return;
          var R = a.createRange();
          R.setStart(m.node, m.offset), u.removeAllRanges(), f > p ? (u.addRange(R), u.extend(y.node, y.offset)) : (R.setEnd(y.node, y.offset), u.addRange(R));
        }
      }
    }
    function uh(e) {
      return e && e.nodeType === pi;
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
      for (var e = window, t = Tl(); t instanceof e.HTMLIFrameElement; ) {
        if (fT(t))
          e = t.contentWindow;
        else
          return t;
        t = Tl(e.document);
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
          s.nodeType === Nr && u.push({
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
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : ul(e, t);
    }
    var mT = mn && "documentMode" in document && document.documentMode <= 11;
    function yT() {
      ir("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
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
      return e.window === e ? e.document : e.nodeType === vi ? e : e.ownerDocument;
    }
    function E0(e, t, a) {
      var i = ST(a);
      if (!(wy || Ic == null || Ic !== Tl(i))) {
        var u = gT(Ic);
        if (!Bd || !ve(Bd, u)) {
          Bd = u;
          var s = fh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new qa("onSelect", "select", null, t, a);
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
          (is(p) || p.contentEditable === "true") && (Ic = p, Ry = a, Bd = null);
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
    mn && (C0 = document.createElement("div").style, "AnimationEvent" in window || (delete Wc.animationend.animation, delete Wc.animationiteration.animation, delete Wc.animationstart.animation), "TransitionEvent" in window || delete Wc.transitionend.transition);
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
    var x0 = sh("animationend"), T0 = sh("animationiteration"), R0 = sh("animationstart"), w0 = sh("transitionend"), b0 = /* @__PURE__ */ new Map(), D0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Fu(e, t) {
      b0.set(e, t), ir(t, [e]);
    }
    function CT() {
      for (var e = 0; e < D0.length; e++) {
        var t = D0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Fu(a, "on" + i);
      }
      Fu(x0, "onAnimationEnd"), Fu(T0, "onAnimationIteration"), Fu(R0, "onAnimationStart"), Fu("dblclick", "onDoubleClick"), Fu("focusin", "onFocus"), Fu("focusout", "onBlur"), Fu(w0, "onTransitionEnd");
    }
    function xT(e, t, a, i, u, s, f) {
      var p = b0.get(t);
      if (p !== void 0) {
        var v = qa, m = t;
        switch (t) {
          case "keypress":
            if (rl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Zv;
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
            v = Xl;
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
            v = ga;
            break;
          case "scroll":
            v = $r;
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
        var y = (s & sa) !== 0;
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
    CT(), w(), ls(), yT(), Ey();
    function TT(e, t, a, i, u, s, f) {
      xT(e, t, a, i, u, s);
      var p = (s & ed) === 0;
      p && (T(e, t, a, i, u), pn(e, t, a, i, u), ET(e, t, a, i, u), ih(e, t, a, i, u));
    }
    var $d = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Dy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat($d));
    function k0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ba(i, t, void 0, e), e.currentTarget = null;
    }
    function RT(e, t, a) {
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
      for (var a = (t & sa) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        RT(s, f, a);
      }
      wo();
    }
    function wT(e, t, a, i, u) {
      var s = td(a), f = [];
      TT(f, e, i, a, s, t), _0(f, t);
    }
    function tn(e, t) {
      Dy.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = t1(t), u = _T(e);
      i.has(u) || (O0(t, e, Is, a), i.add(u));
    }
    function ky(e, t, a) {
      Dy.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= sa), O0(a, e, i, t);
    }
    var ch = "_reactListening" + Math.random().toString(36).slice(2);
    function Pd(e) {
      if (!e[ch]) {
        e[ch] = !0, un.forEach(function(a) {
          a !== "selectionchange" && (Dy.has(a) || ky(a, !1, e), ky(a, !0, e));
        });
        var t = e.nodeType === vi ? e : e.ownerDocument;
        t !== null && (t[ch] || (t[ch] = !0, ky("selectionchange", !1, t)));
      }
    }
    function O0(e, t, a, i, u) {
      var s = Kn(e, t, a), f = void 0;
      Ro && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Od(e, t, s, f) : Br(e, t, s) : f !== void 0 ? Uu(e, t, s, f) : es(e, t, s);
    }
    function M0(e, t) {
      return e === t || e.nodeType === gn && e.parentNode === t;
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
            if (v === W || v === ae) {
              var m = p.stateNode.containerInfo;
              if (M0(m, f))
                break;
              if (v === ae)
                for (var y = p.return; y !== null; ) {
                  var R = y.tag;
                  if (R === W || R === ae) {
                    var x = y.stateNode.containerInfo;
                    if (M0(x, f))
                      return;
                  }
                  y = y.return;
                }
              for (; m !== null; ) {
                var O = ss(m);
                if (O === null)
                  return;
                var N = O.tag;
                if (N === J || N === ie) {
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
        if (O === J && x !== null && (y = x, p !== null)) {
          var N = Yi(m, p);
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
        if (p === J && f !== null) {
          var v = f, m = Yi(u, a);
          m != null && i.unshift(Yd(u, m, v));
          var y = Yi(u, t);
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
      while (e && e.tag !== J);
      return e || null;
    }
    function DT(e, t) {
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
        if (R === J && y !== null) {
          var x = y;
          if (u) {
            var O = Yi(p, s);
            O != null && f.unshift(Yd(p, O, x));
          } else if (!u) {
            var N = Yi(p, s);
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
    function kT(e, t, a, i, u) {
      var s = i && u ? DT(i, u) : null;
      i !== null && N0(e, t, i, s, !1), u !== null && a !== null && N0(e, a, u, s, !0);
    }
    function _T(e, t) {
      return e + "__bubble";
    }
    var Sa = !1, Qd = "dangerouslySetInnerHTML", dh = "suppressContentEditableWarning", Vu = "suppressHydrationWarning", L0 = "autoFocus", us = "children", os = "style", ph = "__html", Oy, vh, Id, z0, hh, U0, A0;
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
        registrationNameDependencies: nn,
        possibleRegistrationNames: hn
      });
    }, U0 = mn && !document.documentMode, Id = function(e, t, a) {
      if (!Sa) {
        var i = mh(a), u = mh(t);
        u !== i && (Sa = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, z0 = function(e) {
      if (!Sa) {
        Sa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, hh = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, A0 = function(e, t) {
      var a = e.namespaceURI === di ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OT = /\r\n?/g, MT = /\u0000|\uFFFD/g;
    function mh(e) {
      ba(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OT, `
`).replace(MT, "");
    }
    function yh(e, t, a, i) {
      var u = mh(t), s = mh(e);
      if (s !== u && (i && (Sa || (Sa = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && He))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function j0(e) {
      return e.nodeType === vi ? e : e.ownerDocument;
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
          if (s === os)
            f && Object.freeze(f), sv(t, f);
          else if (s === Qd) {
            var p = f ? f[ph] : void 0;
            p != null && qp(t, p);
          } else if (s === us)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && yu(t, f);
            } else typeof f == "number" && yu(t, "" + f);
          else s === dh || s === Vu || s === L0 || (nn.hasOwnProperty(s) ? f != null && (typeof f != "function" && hh(s, f), s === "onScroll" && tn("scroll", t)) : f != null && ii(t, s, f, u));
        }
    }
    function zT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === os ? sv(e, f) : s === Qd ? qp(e, f) : s === us ? yu(e, f) : ii(e, s, f, i);
      }
    }
    function UT(e, t, a, i) {
      var u, s = j0(a), f, p = i;
      if (p === di && (p = Pf(e)), p === di) {
        if (u = $i(e, t), !u && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === di && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !pr.call(Oy, e) && (Oy[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function AT(e, t) {
      return j0(t).createTextNode(e);
    }
    function jT(e, t, a, i) {
      var u = $i(t, a);
      vh(t, a);
      var s;
      switch (t) {
        case "dialog":
          tn("cancel", e), tn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          tn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < $d.length; f++)
            tn($d[f], e);
          s = a;
          break;
        case "source":
          tn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          tn("error", e), tn("load", e), s = a;
          break;
        case "details":
          tn("toggle", e), s = a;
          break;
        case "input":
          fi(e, a), s = Ls(e, a), tn("invalid", e);
          break;
        case "option":
          hu(e, a), s = a;
          break;
        case "select":
          Fs(e, a), s = Hf(e, a), tn("invalid", e);
          break;
        case "textarea":
          Vf(e, a), s = Ff(e, a), tn("invalid", e);
          break;
        default:
          s = a;
      }
      switch ($s(t, s), LT(t, e, i, s, u), t) {
        case "input":
          Bi(e), Uf(e, a, !1);
          break;
        case "textarea":
          Bi(e), Xp(e);
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
          if (v === os) {
            var R = f[v];
            for (m in R)
              R.hasOwnProperty(m) && (y || (y = {}), y[m] = "");
          } else v === Qd || v === us || v === dh || v === Vu || v === L0 || (nn.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
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
          else if (v === Qd) {
            var N = x ? x[ph] : void 0, L = O ? O[ph] : void 0;
            N != null && L !== N && (s = s || []).push(v, N);
          } else v === us ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === dh || v === Vu || (nn.hasOwnProperty(v) ? (x != null && (typeof x != "function" && hh(v, x), v === "onScroll" && tn("scroll", e)), !s && O !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return y && (ry(y, p[os]), (s = s || []).push(os, y)), s;
    }
    function FT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && zs(e, u);
      var s = $i(a, i), f = $i(a, u);
      switch (zT(e, t, s, f), a) {
        case "input":
          vu(e, u);
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
        return Eo.hasOwnProperty(t) && Eo[t] || null;
      }
    }
    function BT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = $i(t, a), vh(t, a), t) {
        case "dialog":
          tn("cancel", e), tn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          tn("load", e);
          break;
        case "video":
        case "audio":
          for (var m = 0; m < $d.length; m++)
            tn($d[m], e);
          break;
        case "source":
          tn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          tn("error", e), tn("load", e);
          break;
        case "details":
          tn("toggle", e);
          break;
        case "input":
          fi(e, a), tn("invalid", e);
          break;
        case "option":
          hu(e, a);
          break;
        case "select":
          Fs(e, a), tn("invalid", e);
          break;
        case "textarea":
          Vf(e, a), tn("invalid", e);
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
          var L = a[N];
          if (N === us)
            typeof L == "string" ? e.textContent !== L && (a[Vu] !== !0 && yh(e.textContent, L, s, f), O = [us, L]) : typeof L == "number" && e.textContent !== "" + L && (a[Vu] !== !0 && yh(e.textContent, L, s, f), O = [us, "" + L]);
          else if (nn.hasOwnProperty(N))
            L != null && (typeof L != "function" && hh(N, L), N === "onScroll" && tn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var te = void 0, be = ct(N);
            if (a[Vu] !== !0) {
              if (!(N === dh || N === Vu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              N === "value" || N === "checked" || N === "selected")) {
                if (N === Qd) {
                  var Se = e.innerHTML, vt = L ? L[ph] : void 0;
                  if (vt != null) {
                    var ot = A0(e, vt);
                    ot !== Se && Id(N, Se, ot);
                  }
                } else if (N === os) {
                  if (v.delete(N), U0) {
                    var D = ty(L);
                    te = e.getAttribute("style"), D !== te && Id(N, te, D);
                  }
                } else if (p && !Ge)
                  v.delete(N.toLowerCase()), te = io(e, N, L), L !== te && Id(N, te, L);
                else if (!ht(N, be, p) && !Mt(N, L, be, p)) {
                  var z = !1;
                  if (be !== null)
                    v.delete(be.attributeName), te = du(e, N, L, be);
                  else {
                    var k = i;
                    if (k === di && (k = Pf(t)), k === di)
                      v.delete(N.toLowerCase());
                    else {
                      var Y = VT(N);
                      Y !== null && Y !== N && (z = !0, v.delete(Y)), v.delete(N);
                    }
                    te = io(e, N, L);
                  }
                  var oe = Ge;
                  !oe && L !== te && !z && Id(N, te, L);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Vu] !== !0 && z0(v), t) {
        case "input":
          Bi(e), Uf(e, a, !0);
          break;
        case "textarea":
          Bi(e), Xp(e);
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
        if (Sa)
          return;
        Sa = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (Sa)
          return;
        Sa = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (Sa)
          return;
        Sa = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t) {
      {
        if (t === "" || Sa)
          return;
        Sa = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
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
        var a = tt({}, e || F0), i = {
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
        case vi:
        case Qf: {
          t = i === vi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Yf(null, "");
          break;
        }
        default: {
          var s = i === gn ? e.parentNode : e, f = s.namespaceURI || null;
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
    function gk(e) {
      return e;
    }
    function ZT(e) {
      Uy = Rn(), Ay = dT();
      var t = null;
      return zn(!1), t;
    }
    function JT(e) {
      pT(Ay), zn(Uy), Uy = null, Ay = null;
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
      return e === void 0 ? ha : Uc(e.type);
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
      yu(e, "");
    }
    function fR(e, t, a) {
      e.nodeValue = a;
    }
    function dR(e, t) {
      e.appendChild(t);
    }
    function pR(e, t) {
      var a;
      e.nodeType === gn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && gh(a);
    }
    function vR(e, t, a) {
      e.insertBefore(t, a);
    }
    function hR(e, t, a) {
      e.nodeType === gn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function mR(e, t) {
      e.removeChild(t);
    }
    function yR(e, t) {
      e.nodeType === gn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Vy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === gn) {
          var s = u.data;
          if (s === Ch)
            if (i === 0) {
              e.removeChild(u), Il(t);
              return;
            } else
              i--;
          else (s === Eh || s === Xd || s === Kd) && i++;
        }
        a = u;
      } while (a);
      Il(t);
    }
    function gR(e, t) {
      e.nodeType === gn ? Vy(e.parentNode, t) : e.nodeType === Nr && Vy(e, t), Il(e);
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
      e.nodeType === Nr ? e.textContent = "" : e.nodeType === vi && e.documentElement && e.removeChild(e.documentElement);
    }
    function RR(e, t, a) {
      return e.nodeType !== Nr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function wR(e, t) {
      return t === "" || e.nodeType !== pi ? null : e;
    }
    function bR(e) {
      return e.nodeType !== gn ? null : e;
    }
    function P0(e) {
      return e.data === Xd;
    }
    function By(e) {
      return e.data === Kd;
    }
    function DR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function kR(e, t) {
      e._reactRetry = t;
    }
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Nr || t === pi)
          break;
        if (t === gn) {
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
      var m = (s.mode & nt) !== Te;
      return BT(e, t, a, p, i, m, f);
    }
    function LR(e, t, a, i) {
      return Jd(a, e), a.mode & nt, $T(e, t);
    }
    function zR(e, t) {
      Jd(t, e);
    }
    function UR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
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
        if (t.nodeType === gn) {
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
      Il(e);
    }
    function jR(e) {
      Il(e);
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
      t.nodeType === Nr ? My(e, t) : t.nodeType === gn || Ny(e, t);
    }
    function $R(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Nr ? My(a, t) : t.nodeType === gn || Ny(a, t));
      }
    }
    function PR(e, t, a, i, u) {
      (u || t[Sh] !== !0) && (i.nodeType === Nr ? My(a, i) : i.nodeType === gn || Ny(a, i));
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
    function ss(e) {
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
    function Bu(e) {
      var t = e[Kc] || e[Zd];
      return t && (t.tag === J || t.tag === ie || t.tag === Re || t.tag === W) ? t : null;
    }
    function qc(e) {
      if (e.tag === J || e.tag === ie)
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
    var I0 = {}, W0 = b.ReactDebugCurrentFrame;
    function wh(e) {
      if (e) {
        var t = e._owner, a = Cl(e.type, e._source, t ? t.type : null);
        W0.setExtraStackFrame(a);
      } else
        W0.setExtraStackFrame(null);
    }
    function wi(e, t, a, i, u) {
      {
        var s = Function.call.bind(pr);
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
    var Zl = -1;
    function $u(e) {
      return {
        current: e
      };
    }
    function Pr(e, t) {
      if (Zl < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== bh[Zl] && g("Unexpected Fiber popped."), e.current = Qy[Zl], Qy[Zl] = null, bh[Zl] = null, Zl--;
    }
    function Yr(e, t, a) {
      Zl++, Qy[Zl] = e.current, bh[Zl] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var Aa = {};
    Object.freeze(Aa);
    var Jl = $u(Aa), ol = $u(!1), Wy = Aa;
    function Zc(e, t, a) {
      return a && sl(t) ? Wy : Jl.current;
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
          var p = Xe(e) || "Unknown";
          wi(i, s, "context", p);
        }
        return u && G0(e, t, s), s;
      }
    }
    function Dh() {
      return ol.current;
    }
    function sl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function kh(e) {
      Pr(ol, e), Pr(Jl, e);
    }
    function Gy(e) {
      Pr(ol, e), Pr(Jl, e);
    }
    function X0(e, t, a) {
      {
        if (Jl.current !== Aa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Yr(Jl, t, e), Yr(ol, a, e);
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Xe(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Xe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Xe(e) || "Unknown";
          wi(u, f, "child context", v);
        }
        return tt({}, a, f);
      }
    }
    function _h(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Aa;
        return Wy = Jl.current, Yr(Jl, a, e), Yr(ol, ol.current, e), !0;
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = K0(e, t, Wy);
          i.__reactInternalMemoizedMergedChildContext = u, Pr(ol, e), Pr(Jl, e), Yr(Jl, u, e), Yr(ol, a, e);
        } else
          Pr(ol, e), Yr(ol, a, e);
      }
    }
    function n1(e) {
      {
        if (!Nl(e) || e.tag !== q)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case W:
              return t.stateNode.context;
            case q: {
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
    var Pu = 0, Oh = 1, eu = null, Xy = !1, Ky = !1;
    function Z0(e) {
      eu === null ? eu = [e] : eu.push(e);
    }
    function r1(e) {
      Xy = !0, Z0(e);
    }
    function J0() {
      Xy && Yu();
    }
    function Yu() {
      if (!Ky && eu !== null) {
        Ky = !0;
        var e = 0, t = ya();
        try {
          var a = !0, i = eu;
          for (Tn(mr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          eu = null, Xy = !1;
        } catch (s) {
          throw eu !== null && (eu = eu.slice(e + 1)), rd(ko, Yu), s;
        } finally {
          Tn(t), Ky = !1;
        }
      }
      return null;
    }
    var ef = [], tf = 0, Mh = null, Nh = 0, Za = [], Ja = 0, cs = null, tu = 1, nu = "";
    function a1(e) {
      return ds(), (e.flags & $a) !== xe;
    }
    function i1(e) {
      return ds(), Nh;
    }
    function l1() {
      var e = nu, t = tu, a = t & ~u1(t);
      return a.toString(32) + e;
    }
    function fs(e, t) {
      ds(), ef[tf++] = Nh, ef[tf++] = Mh, Mh = e, Nh = t;
    }
    function eE(e, t, a) {
      ds(), Za[Ja++] = tu, Za[Ja++] = nu, Za[Ja++] = cs, cs = e;
      var i = tu, u = nu, s = Lh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Lh(t) + s;
      if (v > 30) {
        var m = s - s % 5, y = (1 << m) - 1, R = (f & y).toString(32), x = f >> m, O = s - m, N = Lh(t) + O, L = p << O, te = L | x, be = R + u;
        tu = 1 << N | te, nu = be;
      } else {
        var Se = p << s, vt = Se | f, ot = u;
        tu = 1 << v | vt, nu = ot;
      }
    }
    function qy(e) {
      ds();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        fs(e, a), eE(e, a, i);
      }
    }
    function Lh(e) {
      return 32 - Cn(e);
    }
    function u1(e) {
      return 1 << Lh(e) - 1;
    }
    function Zy(e) {
      for (; e === Mh; )
        Mh = ef[--tf], ef[tf] = null, Nh = ef[--tf], ef[tf] = null;
      for (; e === cs; )
        cs = Za[--Ja], Za[Ja] = null, nu = Za[--Ja], Za[Ja] = null, tu = Za[--Ja], Za[Ja] = null;
    }
    function o1() {
      return ds(), cs !== null ? {
        id: tu,
        overflow: nu
      } : null;
    }
    function s1(e, t) {
      ds(), Za[Ja++] = tu, Za[Ja++] = nu, Za[Ja++] = cs, tu = t.id, nu = t.overflow, cs = e;
    }
    function ds() {
      Cr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Er = null, ei = null, bi = !1, ps = !1, Qu = null;
    function c1() {
      bi && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function tE() {
      ps = !0;
    }
    function f1() {
      return ps;
    }
    function d1(e) {
      var t = e.stateNode.containerInfo;
      return ei = OR(t), Er = e, bi = !0, Qu = null, ps = !1, !0;
    }
    function p1(e, t, a) {
      return ei = MR(t), Er = e, bi = !0, Qu = null, ps = !1, a !== null && s1(e, a), !0;
    }
    function nE(e, t) {
      switch (e.tag) {
        case W: {
          BR(e.stateNode.containerInfo, t);
          break;
        }
        case J: {
          var a = (e.mode & nt) !== Te;
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
        case Re: {
          var i = e.memoizedState;
          i.dehydrated !== null && $R(i.dehydrated, t);
          break;
        }
      }
    }
    function rE(e, t) {
      nE(e, t);
      var a = yD();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= ca) : i.push(a);
    }
    function Jy(e, t) {
      {
        if (ps)
          return;
        switch (e.tag) {
          case W: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case J:
                var i = t.type;
                t.pendingProps, YR(a, i);
                break;
              case ie:
                var u = t.pendingProps;
                QR(a, u);
                break;
            }
            break;
          }
          case J: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case J: {
                var v = t.type, m = t.pendingProps, y = (e.mode & nt) !== Te;
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
              case ie: {
                var R = t.pendingProps, x = (e.mode & nt) !== Te;
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
          case Re: {
            var O = e.memoizedState, N = O.dehydrated;
            if (N !== null) switch (t.tag) {
              case J:
                var L = t.type;
                t.pendingProps, IR(N, L);
                break;
              case ie:
                var te = t.pendingProps;
                WR(N, te);
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
      t.flags = t.flags & ~zr | Zt, Jy(e, t);
    }
    function iE(e, t) {
      switch (e.tag) {
        case J: {
          var a = e.type;
          e.pendingProps;
          var i = RR(t, a);
          return i !== null ? (e.stateNode = i, Er = e, ei = _R(i), !0) : !1;
        }
        case ie: {
          var u = e.pendingProps, s = wR(t, u);
          return s !== null ? (e.stateNode = s, Er = e, ei = null, !0) : !1;
        }
        case Re: {
          var f = bR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: o1(),
              retryLane: Hr
            };
            e.memoizedState = p;
            var v = gD(f);
            return v.return = e, e.child = v, Er = e, ei = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function eg(e) {
      return (e.mode & nt) !== Te && (e.flags & Ee) === xe;
    }
    function tg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function ng(e) {
      if (bi) {
        var t = ei;
        if (!t) {
          eg(e) && (Jy(Er, e), tg()), aE(Er, e), bi = !1, Er = e;
          return;
        }
        var a = t;
        if (!iE(e, t)) {
          eg(e) && (Jy(Er, e), tg()), t = qd(a);
          var i = Er;
          if (!t || !iE(e, t)) {
            aE(Er, e), bi = !1, Er = e;
            return;
          }
          rE(i, a);
        }
      }
    }
    function v1(e, t, a) {
      var i = e.stateNode, u = !ps, s = NR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function h1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = LR(t, a, e);
      if (i) {
        var u = Er;
        if (u !== null)
          switch (u.tag) {
            case W: {
              var s = u.stateNode.containerInfo, f = (u.mode & nt) !== Te;
              FR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case J: {
              var p = u.type, v = u.memoizedProps, m = u.stateNode, y = (u.mode & nt) !== Te;
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
      for (var t = e.return; t !== null && t.tag !== J && t.tag !== W && t.tag !== Re; )
        t = t.return;
      Er = t;
    }
    function zh(e) {
      if (e !== Er)
        return !1;
      if (!bi)
        return lE(e), bi = !0, !1;
      if (e.tag !== W && (e.tag !== J || HR(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = ei;
        if (t)
          if (eg(e))
            uE(e), tg();
          else
            for (; t; )
              rE(e, t), t = qd(t);
      }
      return lE(e), e.tag === Re ? ei = y1(e) : ei = Er ? qd(e.stateNode) : null, !0;
    }
    function g1() {
      return bi && ei !== null;
    }
    function uE(e) {
      for (var t = ei; t; )
        nE(e, t), t = qd(t);
    }
    function nf() {
      Er = null, ei = null, bi = !1, ps = !1;
    }
    function oE() {
      Qu !== null && (tx(Qu), Qu = null);
    }
    function Cr() {
      return bi;
    }
    function rg(e) {
      Qu === null ? Qu = [e] : Qu.push(e);
    }
    var S1 = b.ReactCurrentBatchConfig, E1 = null;
    function C1() {
      return S1.transition;
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
      var x1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Nt && (t = a), a = a.return;
        return t;
      }, vs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, tp = [], np = [], rp = [], ap = [], ip = [], lp = [], hs = /* @__PURE__ */ new Set();
      Di.recordUnsafeLifecycleWarnings = function(e, t) {
        hs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && tp.push(e), e.mode & Nt && typeof t.UNSAFE_componentWillMount == "function" && np.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && rp.push(e), e.mode & Nt && typeof t.UNSAFE_componentWillReceiveProps == "function" && ap.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && ip.push(e), e.mode & Nt && typeof t.UNSAFE_componentWillUpdate == "function" && lp.push(e));
      }, Di.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        tp.length > 0 && (tp.forEach(function(x) {
          e.add(Xe(x) || "Component"), hs.add(x.type);
        }), tp = []);
        var t = /* @__PURE__ */ new Set();
        np.length > 0 && (np.forEach(function(x) {
          t.add(Xe(x) || "Component"), hs.add(x.type);
        }), np = []);
        var a = /* @__PURE__ */ new Set();
        rp.length > 0 && (rp.forEach(function(x) {
          a.add(Xe(x) || "Component"), hs.add(x.type);
        }), rp = []);
        var i = /* @__PURE__ */ new Set();
        ap.length > 0 && (ap.forEach(function(x) {
          i.add(Xe(x) || "Component"), hs.add(x.type);
        }), ap = []);
        var u = /* @__PURE__ */ new Set();
        ip.length > 0 && (ip.forEach(function(x) {
          u.add(Xe(x) || "Component"), hs.add(x.type);
        }), ip = []);
        var s = /* @__PURE__ */ new Set();
        if (lp.length > 0 && (lp.forEach(function(x) {
          s.add(Xe(x) || "Component"), hs.add(x.type);
        }), lp = []), t.size > 0) {
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
          Ne(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
        }
        if (a.size > 0) {
          var y = vs(a);
          Ne(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (u.size > 0) {
          var R = vs(u);
          Ne(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
      };
      var Uh = /* @__PURE__ */ new Map(), sE = /* @__PURE__ */ new Set();
      Di.recordLegacyContextWarning = function(e, t) {
        var a = x1(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!sE.has(e.type)) {
          var i = Uh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Uh.set(a, i)), i.push(e));
        }
      }, Di.flushLegacyContextWarning = function() {
        Uh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Xe(s) || "Component"), sE.add(s.type);
            });
            var u = vs(i);
            try {
              Yt(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              an();
            }
          }
        });
      }, Di.discardPendingWarnings = function() {
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
        var a = Xe(t) || "Component";
        ug[a] || (ug[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function T1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function up(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Nt || st) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== q) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !T1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Xe(e) || "Component";
          lg[u] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), lg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== q)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          rn(i, "ref");
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
        var t = Xe(e) || "Component";
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
      function t(D, z) {
        if (e) {
          var k = D.deletions;
          k === null ? (D.deletions = [z], D.flags |= ca) : k.push(z);
        }
      }
      function a(D, z) {
        if (!e)
          return null;
        for (var k = z; k !== null; )
          t(D, k), k = k.sibling;
        return null;
      }
      function i(D, z) {
        for (var k = /* @__PURE__ */ new Map(), Y = z; Y !== null; )
          Y.key !== null ? k.set(Y.key, Y) : k.set(Y.index, Y), Y = Y.sibling;
        return k;
      }
      function u(D, z) {
        var k = Rs(D, z);
        return k.index = 0, k.sibling = null, k;
      }
      function s(D, z, k) {
        if (D.index = k, !e)
          return D.flags |= $a, z;
        var Y = D.alternate;
        if (Y !== null) {
          var oe = Y.index;
          return oe < z ? (D.flags |= Zt, z) : oe;
        } else
          return D.flags |= Zt, z;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= Zt), D;
      }
      function p(D, z, k, Y) {
        if (z === null || z.tag !== ie) {
          var oe = r0(k, D.mode, Y);
          return oe.return = D, oe;
        } else {
          var re = u(z, k);
          return re.return = D, re;
        }
      }
      function v(D, z, k, Y) {
        var oe = k.type;
        if (oe === Ai)
          return y(D, z, k.props.children, Y, k.key);
        if (z !== null && (z.elementType === oe || // Keep this check inline so it only runs on the false path:
        yx(z, k) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof oe == "object" && oe !== null && oe.$$typeof === We && fE(oe) === z.type)) {
          var re = u(z, k.props);
          return re.ref = up(D, z, k), re.return = D, re._debugSource = k._source, re._debugOwner = k._owner, re;
        }
        var Ae = n0(k, D.mode, Y);
        return Ae.ref = up(D, z, k), Ae.return = D, Ae;
      }
      function m(D, z, k, Y) {
        if (z === null || z.tag !== ae || z.stateNode.containerInfo !== k.containerInfo || z.stateNode.implementation !== k.implementation) {
          var oe = a0(k, D.mode, Y);
          return oe.return = D, oe;
        } else {
          var re = u(z, k.children || []);
          return re.return = D, re;
        }
      }
      function y(D, z, k, Y, oe) {
        if (z === null || z.tag !== ye) {
          var re = no(k, D.mode, Y, oe);
          return re.return = D, re;
        } else {
          var Ae = u(z, k);
          return Ae.return = D, Ae;
        }
      }
      function R(D, z, k) {
        if (typeof z == "string" && z !== "" || typeof z == "number") {
          var Y = r0("" + z, D.mode, k);
          return Y.return = D, Y;
        }
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Da: {
              var oe = n0(z, D.mode, k);
              return oe.ref = up(D, null, z), oe.return = D, oe;
            }
            case Or: {
              var re = a0(z, D.mode, k);
              return re.return = D, re;
            }
            case We: {
              var Ae = z._payload, Ie = z._init;
              return R(D, Ie(Ae), k);
            }
          }
          if (In(z) || Ze(z)) {
            var zt = no(z, D.mode, k, null);
            return zt.return = D, zt;
          }
          Ah(D, z);
        }
        return typeof z == "function" && jh(D), null;
      }
      function x(D, z, k, Y) {
        var oe = z !== null ? z.key : null;
        if (typeof k == "string" && k !== "" || typeof k == "number")
          return oe !== null ? null : p(D, z, "" + k, Y);
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case Da:
              return k.key === oe ? v(D, z, k, Y) : null;
            case Or:
              return k.key === oe ? m(D, z, k, Y) : null;
            case We: {
              var re = k._payload, Ae = k._init;
              return x(D, z, Ae(re), Y);
            }
          }
          if (In(k) || Ze(k))
            return oe !== null ? null : y(D, z, k, Y, null);
          Ah(D, k);
        }
        return typeof k == "function" && jh(D), null;
      }
      function O(D, z, k, Y, oe) {
        if (typeof Y == "string" && Y !== "" || typeof Y == "number") {
          var re = D.get(k) || null;
          return p(z, re, "" + Y, oe);
        }
        if (typeof Y == "object" && Y !== null) {
          switch (Y.$$typeof) {
            case Da: {
              var Ae = D.get(Y.key === null ? k : Y.key) || null;
              return v(z, Ae, Y, oe);
            }
            case Or: {
              var Ie = D.get(Y.key === null ? k : Y.key) || null;
              return m(z, Ie, Y, oe);
            }
            case We:
              var zt = Y._payload, Ct = Y._init;
              return O(D, z, k, Ct(zt), oe);
          }
          if (In(Y) || Ze(Y)) {
            var Un = D.get(k) || null;
            return y(z, Un, Y, oe, null);
          }
          Ah(z, Y);
        }
        return typeof Y == "function" && jh(z), null;
      }
      function N(D, z, k) {
        {
          if (typeof D != "object" || D === null)
            return z;
          switch (D.$$typeof) {
            case Da:
            case Or:
              cE(D, k);
              var Y = D.key;
              if (typeof Y != "string")
                break;
              if (z === null) {
                z = /* @__PURE__ */ new Set(), z.add(Y);
                break;
              }
              if (!z.has(Y)) {
                z.add(Y);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Y);
              break;
            case We:
              var oe = D._payload, re = D._init;
              N(re(oe), z, k);
              break;
          }
        }
        return z;
      }
      function L(D, z, k, Y) {
        for (var oe = null, re = 0; re < k.length; re++) {
          var Ae = k[re];
          oe = N(Ae, oe, D);
        }
        for (var Ie = null, zt = null, Ct = z, Un = 0, xt = 0, bn = null; Ct !== null && xt < k.length; xt++) {
          Ct.index > xt ? (bn = Ct, Ct = null) : bn = Ct.sibling;
          var Ir = x(D, Ct, k[xt], Y);
          if (Ir === null) {
            Ct === null && (Ct = bn);
            break;
          }
          e && Ct && Ir.alternate === null && t(D, Ct), Un = s(Ir, Un, xt), zt === null ? Ie = Ir : zt.sibling = Ir, zt = Ir, Ct = bn;
        }
        if (xt === k.length) {
          if (a(D, Ct), Cr()) {
            var kr = xt;
            fs(D, kr);
          }
          return Ie;
        }
        if (Ct === null) {
          for (; xt < k.length; xt++) {
            var Ha = R(D, k[xt], Y);
            Ha !== null && (Un = s(Ha, Un, xt), zt === null ? Ie = Ha : zt.sibling = Ha, zt = Ha);
          }
          if (Cr()) {
            var aa = xt;
            fs(D, aa);
          }
          return Ie;
        }
        for (var ia = i(D, Ct); xt < k.length; xt++) {
          var Wr = O(ia, D, xt, k[xt], Y);
          Wr !== null && (e && Wr.alternate !== null && ia.delete(Wr.key === null ? xt : Wr.key), Un = s(Wr, Un, xt), zt === null ? Ie = Wr : zt.sibling = Wr, zt = Wr);
        }
        if (e && ia.forEach(function(xf) {
          return t(D, xf);
        }), Cr()) {
          var su = xt;
          fs(D, su);
        }
        return Ie;
      }
      function te(D, z, k, Y) {
        var oe = Ze(k);
        if (typeof oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          k[Symbol.toStringTag] === "Generator" && (ig || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ig = !0), k.entries === oe && (ag || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ag = !0);
          var re = oe.call(k);
          if (re)
            for (var Ae = null, Ie = re.next(); !Ie.done; Ie = re.next()) {
              var zt = Ie.value;
              Ae = N(zt, Ae, D);
            }
        }
        var Ct = oe.call(k);
        if (Ct == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Un = null, xt = null, bn = z, Ir = 0, kr = 0, Ha = null, aa = Ct.next(); bn !== null && !aa.done; kr++, aa = Ct.next()) {
          bn.index > kr ? (Ha = bn, bn = null) : Ha = bn.sibling;
          var ia = x(D, bn, aa.value, Y);
          if (ia === null) {
            bn === null && (bn = Ha);
            break;
          }
          e && bn && ia.alternate === null && t(D, bn), Ir = s(ia, Ir, kr), xt === null ? Un = ia : xt.sibling = ia, xt = ia, bn = Ha;
        }
        if (aa.done) {
          if (a(D, bn), Cr()) {
            var Wr = kr;
            fs(D, Wr);
          }
          return Un;
        }
        if (bn === null) {
          for (; !aa.done; kr++, aa = Ct.next()) {
            var su = R(D, aa.value, Y);
            su !== null && (Ir = s(su, Ir, kr), xt === null ? Un = su : xt.sibling = su, xt = su);
          }
          if (Cr()) {
            var xf = kr;
            fs(D, xf);
          }
          return Un;
        }
        for (var Fp = i(D, bn); !aa.done; kr++, aa = Ct.next()) {
          var yl = O(Fp, D, kr, aa.value, Y);
          yl !== null && (e && yl.alternate !== null && Fp.delete(yl.key === null ? kr : yl.key), Ir = s(yl, Ir, kr), xt === null ? Un = yl : xt.sibling = yl, xt = yl);
        }
        if (e && Fp.forEach(function(XD) {
          return t(D, XD);
        }), Cr()) {
          var GD = kr;
          fs(D, GD);
        }
        return Un;
      }
      function be(D, z, k, Y) {
        if (z !== null && z.tag === ie) {
          a(D, z.sibling);
          var oe = u(z, k);
          return oe.return = D, oe;
        }
        a(D, z);
        var re = r0(k, D.mode, Y);
        return re.return = D, re;
      }
      function Se(D, z, k, Y) {
        for (var oe = k.key, re = z; re !== null; ) {
          if (re.key === oe) {
            var Ae = k.type;
            if (Ae === Ai) {
              if (re.tag === ye) {
                a(D, re.sibling);
                var Ie = u(re, k.props.children);
                return Ie.return = D, Ie._debugSource = k._source, Ie._debugOwner = k._owner, Ie;
              }
            } else if (re.elementType === Ae || // Keep this check inline so it only runs on the false path:
            yx(re, k) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ae == "object" && Ae !== null && Ae.$$typeof === We && fE(Ae) === re.type) {
              a(D, re.sibling);
              var zt = u(re, k.props);
              return zt.ref = up(D, re, k), zt.return = D, zt._debugSource = k._source, zt._debugOwner = k._owner, zt;
            }
            a(D, re);
            break;
          } else
            t(D, re);
          re = re.sibling;
        }
        if (k.type === Ai) {
          var Ct = no(k.props.children, D.mode, Y, k.key);
          return Ct.return = D, Ct;
        } else {
          var Un = n0(k, D.mode, Y);
          return Un.ref = up(D, z, k), Un.return = D, Un;
        }
      }
      function vt(D, z, k, Y) {
        for (var oe = k.key, re = z; re !== null; ) {
          if (re.key === oe)
            if (re.tag === ae && re.stateNode.containerInfo === k.containerInfo && re.stateNode.implementation === k.implementation) {
              a(D, re.sibling);
              var Ae = u(re, k.children || []);
              return Ae.return = D, Ae;
            } else {
              a(D, re);
              break;
            }
          else
            t(D, re);
          re = re.sibling;
        }
        var Ie = a0(k, D.mode, Y);
        return Ie.return = D, Ie;
      }
      function ot(D, z, k, Y) {
        var oe = typeof k == "object" && k !== null && k.type === Ai && k.key === null;
        if (oe && (k = k.props.children), typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case Da:
              return f(Se(D, z, k, Y));
            case Or:
              return f(vt(D, z, k, Y));
            case We:
              var re = k._payload, Ae = k._init;
              return ot(D, z, Ae(re), Y);
          }
          if (In(k))
            return L(D, z, k, Y);
          if (Ze(k))
            return te(D, z, k, Y);
          Ah(D, k);
        }
        return typeof k == "string" && k !== "" || typeof k == "number" ? f(be(D, z, "" + k, Y)) : (typeof k == "function" && jh(D), a(D, z));
      }
      return ot;
    }
    var rf = dE(!0), pE = dE(!1);
    function R1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Rs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Rs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function w1(e, t) {
      for (var a = e.child; a !== null; )
        dD(a, t), a = a.sibling;
    }
    var sg = $u(null), cg;
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
      Yr(sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== cg && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = cg;
    }
    function dg(e, t) {
      var a = sg.current;
      Pr(sg, t), e._currentValue = a;
    }
    function pg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ql(i.childLanes, t) ? u !== null && !Ql(u.childLanes, t) && (u.childLanes = Ke(u.childLanes, t)) : (i.childLanes = Ke(i.childLanes, t), u !== null && (u.childLanes = Ke(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function b1(e, t, a) {
      D1(e, t, a);
    }
    function D1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === q) {
                var p = $o(a), v = ru(At, p);
                v.tag = $h;
                var m = i.updateQueue;
                if (m !== null) {
                  var y = m.shared, R = y.pending;
                  R === null ? v.next = v : (v.next = R.next, R.next = v), y.pending = v;
                }
              }
              i.lanes = Ke(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = Ke(x.lanes, a)), pg(i.return, a, e), s.lanes = Ke(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === je)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === It) {
          var O = i.return;
          if (O === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          O.lanes = Ke(O.lanes, a);
          var N = O.alternate;
          N !== null && (N.lanes = Ke(N.lanes, a)), pg(O, a, e), u = i.sibling;
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
    function lf(e, t) {
      Hh = e, af = null, fg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Fr(a.lanes, t) && xp(), a.firstContext = null);
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
            lanes: j,
            firstContext: a
          };
        } else
          af = af.next = a;
      }
      return t;
    }
    var ms = null;
    function vg(e) {
      ms === null ? ms = [e] : ms.push(e);
    }
    function k1() {
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
    function Ea(e, t) {
      return Bh(e, t);
    }
    var M1 = Bh;
    function Bh(e, t) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & (Zt | zr)) !== xe && px(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (u.flags & (Zt | zr)) !== xe && px(e), i = u, u = u.return;
      if (i.tag === W) {
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
          lanes: j
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
          var f = Ke(s, a);
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
              if (e.mode & Nt) {
                Jt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Jt(!1);
                }
              }
              hE();
            }
            return p;
          }
          return f;
        }
        case hg:
          e.flags = e.flags & ~Hn | Ee;
        case gE: {
          var v = a.payload, m;
          if (typeof v == "function") {
            vE(), m = v.call(s, i, u);
            {
              if (e.mode & Nt) {
                Jt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Jt(!1);
                }
              }
              hE();
            }
          } else
            m = v;
          return m == null ? i : tt({}, i, m);
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
        var O = u.baseState, N = j, L = null, te = null, be = null, Se = s;
        do {
          var vt = Se.lane, ot = Se.eventTime;
          if (Ql(i, vt)) {
            if (be !== null) {
              var z = {
                eventTime: ot,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mt,
                tag: Se.tag,
                payload: Se.payload,
                callback: Se.callback,
                next: null
              };
              be = be.next = z;
            }
            O = N1(e, u, Se, O, t, a);
            var k = Se.callback;
            if (k !== null && // If the update was already committed, we should not queue its
            // callback again.
            Se.lane !== mt) {
              e.flags |= Bt;
              var Y = u.effects;
              Y === null ? u.effects = [Se] : Y.push(Se);
            }
          } else {
            var D = {
              eventTime: ot,
              lane: vt,
              tag: Se.tag,
              payload: Se.payload,
              callback: Se.callback,
              next: null
            };
            be === null ? (te = be = D, L = O) : be = be.next = D, N = Ke(N, vt);
          }
          if (Se = Se.next, Se === null) {
            if (p = u.shared.pending, p === null)
              break;
            var oe = p, re = oe.next;
            oe.next = null, Se = re, u.lastBaseUpdate = oe, u.shared.pending = null;
          }
        } while (!0);
        be === null && (L = O), u.baseState = L, u.firstBaseUpdate = te, u.lastBaseUpdate = be;
        var Ae = u.shared.interleaved;
        if (Ae !== null) {
          var Ie = Ae;
          do
            N = Ke(N, Ie.lane), Ie = Ie.next;
          while (Ie !== Ae);
        } else s === null && (u.shared.lanes = j);
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
    var op = {}, Wu = $u(op), sp = $u(op), Gh = $u(op);
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
      Yr(Gh, t, e), Yr(sp, e, e), Yr(Wu, op, e);
      var a = KT(t);
      Pr(Wu, e), Yr(Wu, a, e);
    }
    function uf(e) {
      Pr(Wu, e), Pr(sp, e), Pr(Gh, e);
    }
    function Eg() {
      var e = Xh(Wu.current);
      return e;
    }
    function RE(e) {
      Xh(Gh.current);
      var t = Xh(Wu.current), a = qT(t, e.type);
      t !== a && (Yr(sp, e, e), Yr(Wu, a, e));
    }
    function Cg(e) {
      sp.current === e && (Pr(Wu, e), Pr(sp, e));
    }
    var z1 = 0, wE = 1, bE = 1, cp = 2, ki = $u(z1);
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
    function Gu(e, t) {
      Yr(ki, t, e);
    }
    function sf(e) {
      Pr(ki, e);
    }
    function A1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Kh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || P0(i) || By(i))
              return t;
          }
        } else if (t.tag === jt && // revealOrder undefined can't be trusted because it don't
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
    var Ca = (
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
    var ue = b.ReactCurrentDispatcher, fp = b.ReactCurrentBatchConfig, bg, cf;
    bg = /* @__PURE__ */ new Set();
    var ys = j, Lt = null, Jn = null, er = null, qh = !1, dp = !1, pp = 0, H1 = 0, F1 = 25, U = null, ti = null, Xu = -1, Dg = !1;
    function bt() {
      {
        var e = U;
        ti === null ? ti = [e] : ti.push(e);
      }
    }
    function Z() {
      {
        var e = U;
        ti !== null && (Xu++, ti[Xu] !== e && V1(e));
      }
    }
    function ff(e) {
      e != null && !In(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", U, typeof e);
    }
    function V1(e) {
      {
        var t = Xe(Lt);
        if (!bg.has(t) && (bg.add(t), ti !== null)) {
          for (var a = "", i = 30, u = 0; u <= Xu; u++) {
            for (var s = ti[u], f = u === Xu ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function Qr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function kg(e, t) {
      if (Dg)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", U), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, U, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!$(e[a], t[a]))
          return !1;
      return !0;
    }
    function df(e, t, a, i, u, s) {
      ys = s, Lt = t, ti = e !== null ? e._debugHookTypes : null, Xu = -1, Dg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = j, e !== null && e.memoizedState !== null ? ue.current = GE : ti !== null ? ue.current = WE : ue.current = IE;
      var f = a(i, u);
      if (dp) {
        var p = 0;
        do {
          if (dp = !1, pp = 0, p >= F1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Dg = !1, Jn = null, er = null, t.updateQueue = null, Xu = -1, ue.current = XE, f = a(i, u);
        } while (dp);
      }
      ue.current = cm, t._debugHookTypes = ti;
      var v = Jn !== null && Jn.next !== null;
      if (ys = j, Lt = null, Jn = null, er = null, U = null, ti = null, Xu = -1, e !== null && (e.flags & En) !== (t.flags & En) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & nt) !== Te && g("Internal React error: Expected static flag was missing. Please notify the React team."), qh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function pf() {
      var e = pp !== 0;
      return pp = 0, e;
    }
    function DE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & St) !== Te ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Po(e.lanes, a);
    }
    function kE() {
      if (ue.current = cm, qh) {
        for (var e = Lt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        qh = !1;
      }
      ys = j, Lt = null, Jn = null, er = null, ti = null, Xu = -1, U = null, BE = !1, dp = !1, pp = 0;
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
    function _g(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Og(e, t, a) {
      var i = fl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: j,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Y1.bind(null, Lt, s);
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
        var y = f.next, R = s.baseState, x = null, O = null, N = null, L = y;
        do {
          var te = L.lane;
          if (Ql(ys, te)) {
            if (N !== null) {
              var Se = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: mt,
                action: L.action,
                hasEagerState: L.hasEagerState,
                eagerState: L.eagerState,
                next: null
              };
              N = N.next = Se;
            }
            if (L.hasEagerState)
              R = L.eagerState;
            else {
              var vt = L.action;
              R = e(R, vt);
            }
          } else {
            var be = {
              lane: te,
              action: L.action,
              hasEagerState: L.hasEagerState,
              eagerState: L.eagerState,
              next: null
            };
            N === null ? (O = N = be, x = R) : N = N.next = be, Lt.lanes = Ke(Lt.lanes, te), zp(te);
          }
          L = L.next;
        } while (L !== null && L !== y);
        N === null ? x = R : N.next = O, $(R, i.memoizedState) || xp(), i.memoizedState = R, i.baseState = x, i.baseQueue = N, u.lastRenderedState = R;
      }
      var ot = u.interleaved;
      if (ot !== null) {
        var D = ot;
        do {
          var z = D.lane;
          Lt.lanes = Ke(Lt.lanes, z), zp(z), D = D.next;
        } while (D !== ot);
      } else f === null && (u.lanes = j);
      var k = u.dispatch;
      return [i.memoizedState, k];
    }
    function Ng(e, t, a) {
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
        $(p, i.memoizedState) || xp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Sk(e, t, a) {
    }
    function Ek(e, t, a) {
    }
    function Lg(e, t, a) {
      var i = Lt, u = fl(), s, f = Cr();
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
        _c(v, ys) || OE(i, t, s);
      }
      u.memoizedState = s;
      var m = {
        value: s,
        getSnapshot: t
      };
      return u.queue = m, nm(NE.bind(null, i, m, e), [e]), i.flags |= Lr, vp(qn | xr, ME.bind(null, i, m, s, t), void 0, null), s;
    }
    function Zh(e, t, a) {
      var i = Lt, u = ni(), s = t();
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
        i.flags |= Lr, vp(qn | xr, ME.bind(null, i, m, s, t), void 0, null);
        var y = _m();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _c(y, ys) || OE(i, t, s);
      }
      return s;
    }
    function OE(e, t, a) {
      e.flags |= bu;
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
      var t = Ea(e, Ue);
      t !== null && ar(t, e, Ue, At);
    }
    function Jh(e) {
      var t = fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: j,
        dispatch: null,
        lastRenderedReducer: _g,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Q1.bind(null, Lt, a);
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
    function Ag(e) {
      var t = fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function em(e) {
      var t = ni();
      return t.memoizedState;
    }
    function hp(e, t, a, i) {
      var u = fl(), s = i === void 0 ? null : i;
      Lt.flags |= e, u.memoizedState = vp(qn | t, a, void 0, s);
    }
    function tm(e, t, a, i) {
      var u = ni(), s = i === void 0 ? null : i, f = void 0;
      if (Jn !== null) {
        var p = Jn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (kg(s, v)) {
            u.memoizedState = vp(t, a, f, s);
            return;
          }
        }
      }
      Lt.flags |= e, u.memoizedState = vp(qn | t, a, f, s);
    }
    function nm(e, t) {
      return (Lt.mode & St) !== Te ? hp(Pa | Lr | nc, xr, e, t) : hp(Lr | nc, xr, e, t);
    }
    function mp(e, t) {
      return tm(Lr, xr, e, t);
    }
    function jg(e, t) {
      return hp(ft, cl, e, t);
    }
    function rm(e, t) {
      return tm(ft, cl, e, t);
    }
    function Hg(e, t) {
      var a = ft;
      return a |= mi, (Lt.mode & St) !== Te && (a |= Ii), hp(a, Zn, e, t);
    }
    function am(e, t) {
      return tm(ft, Zn, e, t);
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
      var i = a != null ? a.concat([e]) : null, u = ft;
      return u |= mi, (Lt.mode & St) !== Te && (u |= Ii), hp(u, Zn, UE.bind(null, t, e), i);
    }
    function im(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return tm(ft, Zn, UE.bind(null, t, e), i);
    }
    function B1(e, t) {
    }
    var lm = B1;
    function Vg(e, t) {
      var a = fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function um(e, t) {
      var a = ni(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Bg(e, t) {
      var a = fl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function om(e, t) {
      var a = ni(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
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
      return HE(t, i, e);
    }
    function jE(e) {
      var t = ni();
      if (Jn === null)
        return t.memoizedState = e, e;
      var a = Jn.memoizedState;
      return HE(t, a, e);
    }
    function HE(e, t, a) {
      var i = !gd(ys);
      if (i) {
        if (!$(a, t)) {
          var u = Cd();
          Lt.lanes = Ke(Lt.lanes, u), zp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, xp()), e.memoizedState = a, a;
    }
    function $1(e, t, a) {
      var i = ya();
      Tn(Fv(i, Wa)), e(!0);
      var u = fp.transition;
      fp.transition = {};
      var s = fp.transition;
      fp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Tn(i), fp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ne("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = Jh(!1), t = e[0], a = e[1], i = $1.bind(null, a), u = fl();
      return u.memoizedState = i, [t, i];
    }
    function FE() {
      var e = zg(), t = e[0], a = ni(), i = a.memoizedState;
      return [t, i];
    }
    function VE() {
      var e = Ug(), t = e[0], a = ni(), i = a.memoizedState;
      return [t, i];
    }
    var BE = !1;
    function P1() {
      return BE;
    }
    function Yg() {
      var e = fl(), t = _m(), a = t.identifierPrefix, i;
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
      var e = ni(), t = e.memoizedState;
      return t;
    }
    function Y1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = eo(e), u = {
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
          var f = ra();
          ar(s, e, i, f), YE(s, t, i);
        }
      }
      QE(e, i);
    }
    function Q1(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = eo(e), u = {
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
        if (e.lanes === j && (s === null || s.lanes === j)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ue.current, ue.current = _i;
            try {
              var v = t.lastRenderedState, m = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = m, $(m, v)) {
                _1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ue.current = p;
            }
          }
        }
        var y = yE(e, t, u, i);
        if (y !== null) {
          var R = ra();
          ar(y, e, i, R), YE(y, t, i);
        }
      }
      QE(e, i);
    }
    function $E(e) {
      var t = e.alternate;
      return e === Lt || t !== null && t === Lt;
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
        var u = Ke(i, a);
        t.lanes = u, Mc(e, u);
      }
    }
    function QE(e, t, a) {
      Lo(e, t);
    }
    var cm = {
      readContext: $n,
      useCallback: Qr,
      useContext: Qr,
      useEffect: Qr,
      useImperativeHandle: Qr,
      useInsertionEffect: Qr,
      useLayoutEffect: Qr,
      useMemo: Qr,
      useReducer: Qr,
      useRef: Qr,
      useState: Qr,
      useDebugValue: Qr,
      useDeferredValue: Qr,
      useTransition: Qr,
      useMutableSource: Qr,
      useSyncExternalStore: Qr,
      useId: Qr,
      unstable_isNewReconciler: V
    }, IE = null, WE = null, GE = null, XE = null, dl = null, _i = null, fm = null;
    {
      var Qg = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ye = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      IE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", bt(), ff(t), Vg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", bt(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", bt(), ff(t), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", bt(), ff(a), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", bt(), ff(t), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", bt(), ff(t), Hg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", bt(), ff(t);
          var a = ue.current;
          ue.current = dl;
          try {
            return Bg(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", bt();
          var i = ue.current;
          ue.current = dl;
          try {
            return Og(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", bt(), Ag(e);
        },
        useState: function(e) {
          U = "useState", bt();
          var t = ue.current;
          ue.current = dl;
          try {
            return Jh(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", bt(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", bt(), $g(e);
        },
        useTransition: function() {
          return U = "useTransition", bt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", bt(), Lg(e, t, a);
        },
        useId: function() {
          return U = "useId", bt(), Yg();
        },
        unstable_isNewReconciler: V
      }, WE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Z(), Vg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Z(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Z(), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Z(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Z(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Z(), Hg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Z();
          var a = ue.current;
          ue.current = dl;
          try {
            return Bg(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Z();
          var i = ue.current;
          ue.current = dl;
          try {
            return Og(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Z(), Ag(e);
        },
        useState: function(e) {
          U = "useState", Z();
          var t = ue.current;
          ue.current = dl;
          try {
            return Jh(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Z(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Z(), $g(e);
        },
        useTransition: function() {
          return U = "useTransition", Z(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Z(), Lg(e, t, a);
        },
        useId: function() {
          return U = "useId", Z(), Yg();
        },
        unstable_isNewReconciler: V
      }, GE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Z(), um(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Z(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Z(), mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Z(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Z(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Z(), am(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Z();
          var a = ue.current;
          ue.current = _i;
          try {
            return om(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Z();
          var i = ue.current;
          ue.current = _i;
          try {
            return Mg(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Z(), em();
        },
        useState: function(e) {
          U = "useState", Z();
          var t = ue.current;
          ue.current = _i;
          try {
            return zg(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Z(), lm();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Z(), AE(e);
        },
        useTransition: function() {
          return U = "useTransition", Z(), FE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Z(), Zh(e, t);
        },
        useId: function() {
          return U = "useId", Z(), sm();
        },
        unstable_isNewReconciler: V
      }, XE = {
        readContext: function(e) {
          return $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Z(), um(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Z(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Z(), mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Z(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Z(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Z(), am(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Z();
          var a = ue.current;
          ue.current = fm;
          try {
            return om(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Z();
          var i = ue.current;
          ue.current = fm;
          try {
            return Ng(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Z(), em();
        },
        useState: function(e) {
          U = "useState", Z();
          var t = ue.current;
          ue.current = fm;
          try {
            return Ug(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Z(), lm();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Z(), jE(e);
        },
        useTransition: function() {
          return U = "useTransition", Z(), VE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Z(), Zh(e, t);
        },
        useId: function() {
          return U = "useId", Z(), sm();
        },
        unstable_isNewReconciler: V
      }, dl = {
        readContext: function(e) {
          return Qg(), $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Ye(), bt(), Vg(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Ye(), bt(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Ye(), bt(), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Ye(), bt(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Ye(), bt(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Ye(), bt(), Hg(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Ye(), bt();
          var a = ue.current;
          ue.current = dl;
          try {
            return Bg(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Ye(), bt();
          var i = ue.current;
          ue.current = dl;
          try {
            return Og(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Ye(), bt(), Ag(e);
        },
        useState: function(e) {
          U = "useState", Ye(), bt();
          var t = ue.current;
          ue.current = dl;
          try {
            return Jh(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Ye(), bt(), void 0;
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Ye(), bt(), $g(e);
        },
        useTransition: function() {
          return U = "useTransition", Ye(), bt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Ye(), bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Ye(), bt(), Lg(e, t, a);
        },
        useId: function() {
          return U = "useId", Ye(), bt(), Yg();
        },
        unstable_isNewReconciler: V
      }, _i = {
        readContext: function(e) {
          return Qg(), $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Ye(), Z(), um(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Ye(), Z(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Ye(), Z(), mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Ye(), Z(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Ye(), Z(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Ye(), Z(), am(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Ye(), Z();
          var a = ue.current;
          ue.current = _i;
          try {
            return om(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Ye(), Z();
          var i = ue.current;
          ue.current = _i;
          try {
            return Mg(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Ye(), Z(), em();
        },
        useState: function(e) {
          U = "useState", Ye(), Z();
          var t = ue.current;
          ue.current = _i;
          try {
            return zg(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Ye(), Z(), lm();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Ye(), Z(), AE(e);
        },
        useTransition: function() {
          return U = "useTransition", Ye(), Z(), FE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Ye(), Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Ye(), Z(), Zh(e, t);
        },
        useId: function() {
          return U = "useId", Ye(), Z(), sm();
        },
        unstable_isNewReconciler: V
      }, fm = {
        readContext: function(e) {
          return Qg(), $n(e);
        },
        useCallback: function(e, t) {
          return U = "useCallback", Ye(), Z(), um(e, t);
        },
        useContext: function(e) {
          return U = "useContext", Ye(), Z(), $n(e);
        },
        useEffect: function(e, t) {
          return U = "useEffect", Ye(), Z(), mp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return U = "useImperativeHandle", Ye(), Z(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return U = "useInsertionEffect", Ye(), Z(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return U = "useLayoutEffect", Ye(), Z(), am(e, t);
        },
        useMemo: function(e, t) {
          U = "useMemo", Ye(), Z();
          var a = ue.current;
          ue.current = _i;
          try {
            return om(e, t);
          } finally {
            ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          U = "useReducer", Ye(), Z();
          var i = ue.current;
          ue.current = _i;
          try {
            return Ng(e, t, a);
          } finally {
            ue.current = i;
          }
        },
        useRef: function(e) {
          return U = "useRef", Ye(), Z(), em();
        },
        useState: function(e) {
          U = "useState", Ye(), Z();
          var t = ue.current;
          ue.current = _i;
          try {
            return Ug(e);
          } finally {
            ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return U = "useDebugValue", Ye(), Z(), lm();
        },
        useDeferredValue: function(e) {
          return U = "useDeferredValue", Ye(), Z(), jE(e);
        },
        useTransition: function() {
          return U = "useTransition", Ye(), Z(), VE();
        },
        useMutableSource: function(e, t, a) {
          return U = "useMutableSource", Ye(), Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return U = "useSyncExternalStore", Ye(), Z(), Zh(e, t);
        },
        useId: function() {
          return U = "useId", Ye(), Z(), sm();
        },
        unstable_isNewReconciler: V
      };
    }
    var Ku = I.unstable_now, KE = 0, dm = -1, yp = -1, pm = -1, Ig = !1, vm = !1;
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
      KE = Ku();
    }
    function Wg(e) {
      yp = Ku(), e.actualStartTime < 0 && (e.actualStartTime = Ku());
    }
    function eC(e) {
      yp = -1;
    }
    function hm(e, t) {
      if (yp >= 0) {
        var a = Ku() - yp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), yp = -1;
      }
    }
    function pl(e) {
      if (dm >= 0) {
        var t = Ku() - dm;
        dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case $e:
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
        var t = Ku() - pm;
        pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case W:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case $e:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function vl() {
      dm = Ku();
    }
    function Xg() {
      pm = Ku();
    }
    function Kg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Oi(e, t) {
      if (e && e.defaultProps) {
        var a = tt({}, t), i = e.defaultProps;
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
          var a = Ot(e) || "Component";
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
        if (e.mode & Nt) {
          Jt(!0);
          try {
            s = a(i, u);
          } finally {
            Jt(!1);
          }
        }
        tC(t, s);
      }
      var f = s == null ? u : tt({}, u, s);
      if (e.memoizedState = f, e.lanes === j) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var uS = {
      isMounted: Tv,
      enqueueSetState: function(e, t, a) {
        var i = wu(e), u = ra(), s = eo(i), f = ru(u, s);
        f.payload = t, a != null && (mm(a, "setState"), f.callback = a);
        var p = Iu(i, f, s);
        p !== null && (ar(p, i, s, u), Qh(p, i, s)), Lo(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = wu(e), u = ra(), s = eo(i), f = ru(u, s);
        f.tag = SE, f.payload = t, a != null && (mm(a, "replaceState"), f.callback = a);
        var p = Iu(i, f, s);
        p !== null && (ar(p, i, s, u), Qh(p, i, s)), Lo(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = wu(e), i = ra(), u = eo(a), s = ru(i, u);
        s.tag = $h, t != null && (mm(t, "forceUpdate"), s.callback = t);
        var f = Iu(a, s, u);
        f !== null && (ar(f, a, u, i), Qh(f, a, u)), sc(a, u);
      }
    };
    function rC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Nt) {
            Jt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Jt(!1);
            }
          }
          v === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ot(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ve(a, i) || !ve(u, s) : !0;
    }
    function X1(e, t, a) {
      var i = e.stateNode;
      {
        var u = Ot(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !gp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Nt) === Te && (gp.add(t), g(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !gp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Nt) === Te && (gp.add(t), g(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !aS.has(t) && (aS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ot(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !eS.has(t) && (eS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ot(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || In(p)) && g("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function aC(e, t) {
      t.updater = uS, e.stateNode = t, Ml(t, e), t._reactInternalInstance = qg;
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
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Hi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ot(t) || "Component", v);
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
      if (e.mode & Nt) {
        Jt(!0);
        try {
          y = new t(a, s);
        } finally {
          Jt(!1);
        }
      }
      var R = e.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null;
      aC(e, y);
      {
        if (typeof t.getDerivedStateFromProps == "function" && R === null) {
          var x = Ot(t) || "Component";
          Jg.has(x) || (Jg.add(x), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, y.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function") {
          var O = null, N = null, L = null;
          if (typeof y.componentWillMount == "function" && y.componentWillMount.__suppressDeprecationWarning !== !0 ? O = "componentWillMount" : typeof y.UNSAFE_componentWillMount == "function" && (O = "UNSAFE_componentWillMount"), typeof y.componentWillReceiveProps == "function" && y.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? N = "componentWillReceiveProps" : typeof y.UNSAFE_componentWillReceiveProps == "function" && (N = "UNSAFE_componentWillReceiveProps"), typeof y.componentWillUpdate == "function" && y.componentWillUpdate.__suppressDeprecationWarning !== !0 ? L = "componentWillUpdate" : typeof y.UNSAFE_componentWillUpdate == "function" && (L = "UNSAFE_componentWillUpdate"), O !== null || N !== null || L !== null) {
            var te = Ot(t) || "Component", be = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            tS.has(te) || (tS.add(te), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, te, be, O !== null ? `
  ` + O : "", N !== null ? `
  ` + N : "", L !== null ? `
  ` + L : ""));
          }
        }
      }
      return i && G0(e, u, s), y;
    }
    function K1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Xe(e) || "Component"), uS.enqueueReplaceState(t, t.state, null));
    }
    function lC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Xe(e) || "Component";
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
          var p = Ot(t) || "Component";
          rS.has(p) || (rS.add(p), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Nt && Di.recordLegacyContextWarning(e, u), Di.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (lS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (K1(e, u), Ih(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var m = ft;
        m |= mi, (e.mode & St) !== Te && (m |= Ii), e.flags |= m;
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
      if (Ih(e, a, u, i), O = e.memoizedState, s === a && x === O && !Dh() && !Wh()) {
        if (typeof u.componentDidMount == "function") {
          var N = ft;
          N |= mi, (e.mode & St) !== Te && (N |= Ii), e.flags |= N;
        }
        return !1;
      }
      typeof y == "function" && (lS(e, t, y, a), O = e.memoizedState);
      var L = Wh() || rC(e, t, s, a, x, O, v);
      if (L) {
        if (!R && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var te = ft;
          te |= mi, (e.mode & St) !== Te && (te |= Ii), e.flags |= te;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var be = ft;
          be |= mi, (e.mode & St) !== Te && (be |= Ii), e.flags |= be;
        }
        e.memoizedProps = a, e.memoizedState = O;
      }
      return u.props = a, u.state = O, u.context = v, L;
    }
    function Z1(e, t, a, i, u) {
      var s = t.stateNode;
      EE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Oi(t.type, f);
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
      var L = t.memoizedState, te = s.state = L;
      if (Ih(t, i, s, u), te = t.memoizedState, f === v && L === te && !Dh() && !Wh() && !de)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Nn), !1;
      typeof O == "function" && (lS(t, a, O, i), te = t.memoizedState);
      var be = Wh() || rC(t, a, p, i, L, te, R) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      de;
      return be ? (!N && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, te, R), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, te, R)), typeof s.componentDidUpdate == "function" && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Nn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= ft), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || L !== e.memoizedState) && (t.flags |= Nn), t.memoizedProps = i, t.memoizedState = te), s.props = i, s.state = te, s.context = R, be;
    }
    function gs(e, t) {
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
          if (e.tag === q)
            return;
          console.error(i);
        }
        var p = u ? Xe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", m;
        if (e.tag === W)
          m = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var y = Xe(e) || "Anonymous";
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
      var i = ru(At, a);
      i.tag = hg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Ib(u), cS(e, t);
      }, i;
    }
    function fS(e, t, a) {
      var i = ru(At, a);
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
        }), typeof u != "function" && (Fr(e.lanes, Ue) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Xe(e) || "Unknown"));
      }), i;
    }
    function oC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ew(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Wb.bind(null, e, t, a);
        jr && Up(e, a), t.then(s, s);
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
      if ((e.mode & nt) === Te && (a === X || a === De || a === we)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function sC(e) {
      var t = e;
      do {
        if (t.tag === Re && A1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function cC(e, t, a, i, u) {
      if ((e.mode & nt) === Te) {
        if (e === t)
          e.flags |= Hn;
        else {
          if (e.flags |= Ee, a.flags |= tc, a.flags &= -52805, a.tag === q) {
            var s = a.alternate;
            if (s === null)
              a.tag = Tt;
            else {
              var f = ru(At, Ue);
              f.tag = $h, Iu(a, f, Ue);
            }
          }
          a.lanes = Ke(a.lanes, Ue);
        }
        return e;
      }
      return e.flags |= Hn, e.lanes = u, e;
    }
    function rw(e, t, a, i, u) {
      if (a.flags |= Do, jr && Up(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nw(a), Cr() && a.mode & nt && tE();
        var f = sC(t);
        if (f !== null) {
          f.flags &= ~ur, cC(f, t, a, e, u), f.mode & nt && oC(e, s, u), tw(f, e, s);
          return;
        } else {
          if (!Mv(u)) {
            oC(e, s, u), YS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Cr() && a.mode & nt) {
        tE();
        var v = sC(t);
        if (v !== null) {
          (v.flags & Hn) === xe && (v.flags |= ur), cC(v, t, a, e, u), rg(gs(i, a));
          return;
        }
      }
      i = gs(i, a), Ab(i);
      var m = t;
      do {
        switch (m.tag) {
          case W: {
            var y = i;
            m.flags |= Hn;
            var R = $o(u);
            m.lanes = Ke(m.lanes, R);
            var x = uC(m, y, R);
            gg(m, x);
            return;
          }
          case q:
            var O = i, N = m.type, L = m.stateNode;
            if ((m.flags & Ee) === xe && (typeof N.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && !sx(L))) {
              m.flags |= Hn;
              var te = $o(u);
              m.lanes = Ke(m.lanes, te);
              var be = fS(m, O, te);
              gg(m, be);
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
    var Sp = b.ReactCurrentOwner, Mi = !1, dS, Ep, pS, vS, hS, Ss, mS, ym, Cp;
    dS = {}, Ep = {}, pS = {}, vS = {}, hS = {}, Ss = !1, mS = {}, ym = {}, Cp = {};
    function ta(e, t, a, i) {
      e === null ? t.child = pE(t, null, a, i) : t.child = rf(t, e.child, a, i);
    }
    function iw(e, t, a, i) {
      t.child = rf(t, e.child, null, i), t.child = rf(t, null, a, i);
    }
    function fC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && wi(
          s,
          i,
          // Resolved props
          "prop",
          Ot(a)
        );
      }
      var f = a.render, p = t.ref, v, m;
      lf(t, u), qr(t);
      {
        if (Sp.current = t, Qn(!0), v = df(e, t, f, i, p, u), m = pf(), t.mode & Nt) {
          Jt(!0);
          try {
            v = df(e, t, f, i, p, u), m = pf();
          } finally {
            Jt(!1);
          }
        }
        Qn(!1);
      }
      return Zr(), e !== null && !Mi ? (DE(e, t, u), au(e, t, u)) : (Cr() && m && qy(t), t.flags |= Ma, ta(e, t, v, u), t.child);
    }
    function dC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (cD(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Cf(s), t.tag = we, t.type = f, SS(t, s), pC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && wi(
            p,
            i,
            // Resolved props
            "prop",
            Ot(s)
          ), a.defaultProps !== void 0) {
            var v = Ot(s) || "Unknown";
            Cp[v] || (g("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Cp[v] = !0);
          }
        }
        var m = t0(a.type, null, i, t, t.mode, u);
        return m.ref = t.ref, m.return = t, t.child = m, m;
      }
      {
        var y = a.type, R = y.propTypes;
        R && wi(
          R,
          i,
          // Resolved props
          "prop",
          Ot(y)
        );
      }
      var x = e.child, O = wS(e, u);
      if (!O) {
        var N = x.memoizedProps, L = a.compare;
        if (L = L !== null ? L : ve, L(N, i) && e.ref === t.ref)
          return au(e, t, u);
      }
      t.flags |= Ma;
      var te = Rs(x, i);
      return te.ref = t.ref, te.return = t, t.child = te, te;
    }
    function pC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === We) {
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
            Ot(s)
          );
        }
      }
      if (e !== null) {
        var y = e.memoizedProps;
        if (ve(y, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Mi = !1, t.pendingProps = i = y, wS(e, u))
            (e.flags & tc) !== xe && (Mi = !0);
          else return t.lanes = e.lanes, au(e, t, u);
      }
      return yS(e, t, a, i, u);
    }
    function vC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || K)
        if ((t.mode & nt) === Te) {
          var f = {
            baseLanes: j,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Om(t, a);
        } else if (Fr(a, Hr)) {
          var R = {
            baseLanes: j,
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
            v = Ke(m, a);
          } else
            v = a;
          t.lanes = t.childLanes = Hr;
          var y = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = y, t.updateQueue = null, Om(t, v), null;
        }
      else {
        var O;
        s !== null ? (O = Ke(s.baseLanes, a), t.memoizedState = null) : O = a, Om(t, O);
      }
      return ta(e, t, u, a), t.child;
    }
    function lw(e, t, a) {
      var i = t.pendingProps;
      return ta(e, t, i, a), t.child;
    }
    function uw(e, t, a) {
      var i = t.pendingProps.children;
      return ta(e, t, i, a), t.child;
    }
    function ow(e, t, a) {
      {
        t.flags |= ft;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ta(e, t, s, a), t.child;
    }
    function hC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ln, t.flags |= Du);
    }
    function yS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && wi(
          s,
          i,
          // Resolved props
          "prop",
          Ot(a)
        );
      }
      var f;
      {
        var p = Zc(t, a, !0);
        f = Jc(t, p);
      }
      var v, m;
      lf(t, u), qr(t);
      {
        if (Sp.current = t, Qn(!0), v = df(e, t, a, i, f, u), m = pf(), t.mode & Nt) {
          Jt(!0);
          try {
            v = df(e, t, a, i, f, u), m = pf();
          } finally {
            Jt(!1);
          }
        }
        Qn(!1);
      }
      return Zr(), e !== null && !Mi ? (DE(e, t, u), au(e, t, u)) : (Cr() && m && qy(t), t.flags |= Ma, ta(e, t, v, u), t.child);
    }
    function mC(e, t, a, i, u) {
      {
        switch (wD(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ee, t.flags |= Hn;
            var m = new Error("Simulated error coming from DevTools"), y = $o(u);
            t.lanes = Ke(t.lanes, y);
            var R = fS(t, gs(m, t), y);
            gg(t, R);
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
            Ot(a)
          );
        }
      }
      var O;
      sl(a) ? (O = !0, _h(t)) : O = !1, lf(t, u);
      var N = t.stateNode, L;
      N === null ? (Sm(e, t), iC(t, a, i), oS(t, a, i, u), L = !0) : e === null ? L = q1(t, a, i, u) : L = Z1(e, t, a, i, u);
      var te = gS(e, t, a, L, O, u);
      {
        var be = t.stateNode;
        L && be.props !== i && (Ss || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Xe(t) || "a component"), Ss = !0);
      }
      return te;
    }
    function gS(e, t, a, i, u, s) {
      hC(e, t);
      var f = (t.flags & Ee) !== xe;
      if (!i && !f)
        return u && q0(t, a, !1), au(e, t, s);
      var p = t.stateNode;
      Sp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, eC();
      else {
        qr(t);
        {
          if (Qn(!0), v = p.render(), t.mode & Nt) {
            Jt(!0);
            try {
              p.render();
            } finally {
              Jt(!1);
            }
          }
          Qn(!1);
        }
        Zr();
      }
      return t.flags |= Ma, e !== null && f ? iw(e, t, v, s) : ta(e, t, v, s), t.memoizedState = p.state, u && q0(t, a, !0), t.child;
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
          var y = gs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return gC(e, t, p, a, y);
        } else if (p !== s) {
          var R = gs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return gC(e, t, p, a, R);
        } else {
          d1(t);
          var x = pE(t, null, p, a);
          t.child = x;
          for (var O = x; O; )
            O.flags = O.flags & ~Zt | zr, O = O.sibling;
        }
      } else {
        if (nf(), p === s)
          return au(e, t, a);
        ta(e, t, p, a);
      }
      return t.child;
    }
    function gC(e, t, a, i, u) {
      return nf(), rg(u), t.flags |= ur, ta(e, t, a, i), t.child;
    }
    function cw(e, t, a) {
      RE(t), e === null && ng(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = jy(i, u);
      return p ? f = null : s !== null && jy(i, s) && (t.flags |= fa), hC(e, t), ta(e, t, f, a), t.child;
    }
    function fw(e, t) {
      return e === null && ng(t), null;
    }
    function dw(e, t, a, i) {
      Sm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var m = t.tag = fD(v), y = Oi(v, u), R;
      switch (m) {
        case X:
          return SS(t, v), t.type = v = Cf(v), R = yS(null, t, v, y, i), R;
        case q:
          return t.type = v = XS(v), R = mC(null, t, v, y, i), R;
        case De:
          return t.type = v = KS(v), R = fC(null, t, v, y, i), R;
        case rt: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && wi(
              x,
              y,
              // Resolved for outer only
              "prop",
              Ot(v)
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
      throw v !== null && typeof v == "object" && v.$$typeof === We && (O = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + O));
    }
    function pw(e, t, a, i, u) {
      Sm(e, t), t.tag = q;
      var s;
      return sl(a) ? (s = !0, _h(t)) : s = !1, lf(t, u), iC(t, a, i), oS(t, a, i, u), gS(null, t, a, !0, s, u);
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
      qr(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var m = Ot(a) || "Unknown";
          dS[m] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", m, m), dS[m] = !0);
        }
        t.mode & Nt && Di.recordLegacyContextWarning(t, null), Qn(!0), Sp.current = t, p = df(null, t, a, u, s, i), v = pf(), Qn(!1);
      }
      if (Zr(), t.flags |= Ma, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var y = Ot(a) || "Unknown";
        Ep[y] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", y, y, y), Ep[y] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var R = Ot(a) || "Unknown";
          Ep[R] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", R, R, R), Ep[R] = !0);
        }
        t.tag = q, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return sl(a) ? (x = !0, _h(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, yg(t), aC(t, p), oS(t, a, u, i), gS(null, t, a, !0, x, i);
      } else {
        if (t.tag = X, t.mode & Nt) {
          Jt(!0);
          try {
            p = df(null, t, a, u, s, i), v = pf();
          } finally {
            Jt(!1);
          }
        }
        return Cr() && v && qy(t), ta(null, t, p, i), SS(t, a), t.child;
      }
    }
    function SS(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ua();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), hS[u] || (hS[u] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Ot(t) || "Unknown";
          Cp[f] || (g("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Cp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Ot(t) || "Unknown";
          vS[p] || (g("%s: Function components do not support getDerivedStateFromProps.", p), vS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Ot(t) || "Unknown";
          pS[v] || (g("%s: Function components do not support contextType.", v), pS[v] = !0);
        }
      }
    }
    var ES = {
      dehydrated: null,
      treeContext: null,
      retryLane: mt
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
        baseLanes: Ke(e.baseLanes, t),
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
      return Po(e.childLanes, t);
    }
    function SC(e, t, a) {
      var i = t.pendingProps;
      bD(t) && (t.flags |= Ee);
      var u = ki.current, s = !1, f = (t.flags & Ee) !== xe;
      if (f || mw(u, e) ? (s = !0, t.flags &= ~Ee) : (e === null || e.memoizedState !== null) && (u = U1(u, bE)), u = of(u), Gu(t, u), e === null) {
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
          var L = i.fallback, te = i.children, be = Ew(e, t, te, L, a), Se = t.child, vt = e.child.memoizedState;
          return Se.memoizedState = vt === null ? CS(a) : hw(vt, a), Se.childLanes = yw(e, a), t.memoizedState = ES, be;
        } else {
          var ot = i.children, D = Sw(e, t, ot, a);
          return t.memoizedState = null, D;
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
      return (u & nt) === Te && s !== null ? (p = s, p.childLanes = j, p.pendingProps = f, e.mode & gt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = no(a, u, i, null)) : (p = TS(f, u), v = no(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function TS(e, t, a) {
      return Ex(e, t, j, null);
    }
    function EC(e, t) {
      return Rs(e, t);
    }
    function Sw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = EC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & nt) === Te && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= ca) : p.push(s);
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
        (s & nt) === Te && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var y = t.child;
        m = y, m.childLanes = j, m.pendingProps = v, t.mode & gt && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = f.selfBaseDuration, m.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        m = EC(f, v), m.subtreeFlags = f.subtreeFlags & En;
      var R;
      return p !== null ? R = Rs(p, i) : (R = no(i, s, u, null), R.flags |= Zt), R.return = t, m.return = t, m.sibling = R, t.child = m, R;
    }
    function gm(e, t, a, i) {
      i !== null && rg(i), rf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = xS(t, s);
      return f.flags |= Zt, t.memoizedState = null, f;
    }
    function Cw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = TS(f, s), v = no(i, s, u, null);
      return v.flags |= Zt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & nt) !== Te && rf(t, e.child, null, u), v;
    }
    function xw(e, t, a) {
      return (e.mode & nt) === Te ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ue) : By(t) ? e.lanes = or : e.lanes = Hr, null;
    }
    function Tw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & ur) {
          t.flags &= ~ur;
          var D = sS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return gm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ee, null;
          var z = i.children, k = i.fallback, Y = Cw(e, t, z, k, f), oe = t.child;
          return oe.memoizedState = CS(f), t.memoizedState = ES, Y;
        }
      else {
        if (c1(), (t.mode & nt) === Te)
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
            var y = DR(u);
            p = y.digest, v = y.message, m = y.stack;
          }
          var R;
          v ? R = new Error(v) : R = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = sS(R, p, m);
          return gm(e, t, f, x);
        }
        var O = Fr(f, e.childLanes);
        if (Mi || O) {
          var N = _m();
          if (N !== null) {
            var L = Rd(N, f);
            if (L !== mt && L !== s.retryLane) {
              s.retryLane = L;
              var te = At;
              Ea(e, L), ar(N, e, L, te);
            }
          }
          YS();
          var be = sS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return gm(e, t, f, be);
        } else if (P0(u)) {
          t.flags |= Ee, t.child = e.child;
          var Se = Gb.bind(null, e);
          return kR(u, Se), null;
        } else {
          p1(t, u, s.treeContext);
          var vt = i.children, ot = xS(t, vt);
          return ot.flags |= zr, ot;
        }
      }
    }
    function CC(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ke(i.lanes, t)), pg(e.return, t, a);
    }
    function Rw(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && CC(i, a, e);
        } else if (i.tag === jt)
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
    function Dw(e, t) {
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
    function kw(e, t) {
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
      bw(u), Dw(s, u), kw(f, u), ta(e, t, f, a);
      var p = ki.current, v = xg(p, cp);
      if (v)
        p = Tg(p, cp), t.flags |= Ee;
      else {
        var m = e !== null && (e.flags & Ee) !== xe;
        m && Rw(t, t.child, a), p = of(p);
      }
      if (Gu(t, p), (t.mode & nt) === Te)
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
              var L = O.sibling;
              O.sibling = x, x = O, O = L;
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
      return e === null ? t.child = rf(t, null, i, a) : ta(e, t, i, a), t.child;
    }
    var RC = !1;
    function Ow(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || RC || (RC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && wi(v, s, "prop", "Context.Provider");
      }
      if (mE(t, u, p), f !== null) {
        var m = f.value;
        if ($(m, p)) {
          if (f.children === s.children && !Dh())
            return au(e, t, a);
        } else
          b1(t, u, a);
      }
      var y = s.children;
      return ta(e, t, y, a), t.child;
    }
    var wC = !1;
    function Mw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), lf(t, a);
      var f = $n(i);
      qr(t);
      var p;
      return Sp.current = t, Qn(!0), p = s(f), Qn(!1), Zr(), t.flags |= Ma, ta(e, t, p, a), t.child;
    }
    function xp() {
      Mi = !0;
    }
    function Sm(e, t) {
      (t.mode & nt) === Te && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Zt);
    }
    function au(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), eC(), zp(t.lanes), Fr(a, t.childLanes) ? (R1(e, t), t.child) : null;
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
        return s === null ? (i.deletions = [e], i.flags |= ca) : s.push(e), a.flags |= Zt, a;
      }
    }
    function wS(e, t) {
      var a = e.lanes;
      return !!Fr(a, t);
    }
    function Lw(e, t, a) {
      switch (t.tag) {
        case W:
          yC(t), t.stateNode, nf();
          break;
        case J:
          RE(t);
          break;
        case q: {
          var i = t.type;
          sl(i) && _h(t);
          break;
        }
        case ae:
          Sg(t, t.stateNode.containerInfo);
          break;
        case je: {
          var u = t.memoizedProps.value, s = t.type._context;
          mE(t, s, u);
          break;
        }
        case $e:
          {
            var f = Fr(a, t.childLanes);
            f && (t.flags |= ft);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Re: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Gu(t, of(ki.current)), t.flags |= Ee, null;
            var m = t.child, y = m.childLanes;
            if (Fr(a, y))
              return SC(e, t, a);
            Gu(t, of(ki.current));
            var R = au(e, t, a);
            return R !== null ? R.sibling : null;
          } else
            Gu(t, of(ki.current));
          break;
        }
        case jt: {
          var x = (e.flags & Ee) !== xe, O = Fr(a, t.childLanes);
          if (x) {
            if (O)
              return TC(e, t, a);
            t.flags |= Ee;
          }
          var N = t.memoizedState;
          if (N !== null && (N.rendering = null, N.tail = null, N.lastEffect = null), Gu(t, ki.current), O)
            break;
          return null;
        }
        case Le:
        case Ht:
          return t.lanes = j, vC(e, t, a);
      }
      return au(e, t, a);
    }
    function bC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Nw(e, t, t0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Dh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Mi = !0;
        else {
          var s = wS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ee) === xe)
            return Mi = !1, Lw(e, t, a);
          (e.flags & tc) !== xe ? Mi = !0 : Mi = !1;
        }
      } else if (Mi = !1, Cr() && a1(t)) {
        var f = t.index, p = i1();
        eE(t, p, f);
      }
      switch (t.lanes = j, t.tag) {
        case Ce:
          return vw(e, t, t.type, a);
        case Dt: {
          var v = t.elementType;
          return dw(e, t, v, a);
        }
        case X: {
          var m = t.type, y = t.pendingProps, R = t.elementType === m ? y : Oi(m, y);
          return yS(e, t, m, R, a);
        }
        case q: {
          var x = t.type, O = t.pendingProps, N = t.elementType === x ? O : Oi(x, O);
          return mC(e, t, x, N, a);
        }
        case W:
          return sw(e, t, a);
        case J:
          return cw(e, t, a);
        case ie:
          return fw(e, t);
        case Re:
          return SC(e, t, a);
        case ae:
          return _w(e, t, a);
        case De: {
          var L = t.type, te = t.pendingProps, be = t.elementType === L ? te : Oi(L, te);
          return fC(e, t, L, be, a);
        }
        case ye:
          return lw(e, t, a);
        case _e:
          return uw(e, t, a);
        case $e:
          return ow(e, t, a);
        case je:
          return Ow(e, t, a);
        case it:
          return Mw(e, t, a);
        case rt: {
          var Se = t.type, vt = t.pendingProps, ot = Oi(Se, vt);
          if (t.type !== t.elementType) {
            var D = Se.propTypes;
            D && wi(
              D,
              ot,
              // Resolved for outer only
              "prop",
              Ot(Se)
            );
          }
          return ot = Oi(Se.type, ot), dC(e, t, Se, ot, a);
        }
        case we:
          return pC(e, t, t.type, t.pendingProps, a);
        case Tt: {
          var z = t.type, k = t.pendingProps, Y = t.elementType === z ? k : Oi(z, k);
          return pw(e, t, z, Y, a);
        }
        case jt:
          return TC(e, t, a);
        case Rt:
          break;
        case Le:
          return vC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function vf(e) {
      e.flags |= ft;
    }
    function DC(e) {
      e.flags |= ln, e.flags |= Du;
    }
    var kC, bS, _C, OC;
    kC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === J || u.tag === ie)
          tR(e, u.stateNode);
        else if (u.tag !== ae) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = j, i = xe;
      if (t) {
        if ((e.mode & gt) !== Te) {
          for (var v = e.selfBaseDuration, m = e.child; m !== null; )
            a = Ke(a, Ke(m.lanes, m.childLanes)), i |= m.subtreeFlags & En, i |= m.flags & En, v += m.treeBaseDuration, m = m.sibling;
          e.treeBaseDuration = v;
        } else
          for (var y = e.child; y !== null; )
            a = Ke(a, Ke(y.lanes, y.childLanes)), i |= y.subtreeFlags & En, i |= y.flags & En, y.return = e, y = y.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & gt) !== Te) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ke(a, Ke(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ke(a, Ke(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zw(e, t, a) {
      if (g1() && (t.mode & nt) !== Te && (t.flags & Ee) === xe)
        return uE(t), nf(), t.flags |= ur | Do | Hn, !1;
      var i = zh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (m1(t), Tr(t), (t.mode & gt) !== Te) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (nf(), (t.flags & Ee) === xe && (t.memoizedState = null), t.flags |= ft, Tr(t), (t.mode & gt) !== Te) {
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
        case Ce:
        case Dt:
        case we:
        case X:
        case De:
        case ye:
        case _e:
        case $e:
        case it:
        case rt:
          return Tr(t), null;
        case q: {
          var u = t.type;
          return sl(u) && kh(t), Tr(t), null;
        }
        case W: {
          var s = t.stateNode;
          if (uf(t), Gy(t), wg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = zh(t);
            if (f)
              vf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & ur) !== xe) && (t.flags |= Nn, oE());
            }
          }
          return bS(e, t), Tr(t), null;
        }
        case J: {
          Cg(t);
          var v = TE(), m = t.type;
          if (e !== null && t.stateNode != null)
            _C(e, t, m, i, v), e.ref !== t.ref && DC(t);
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
              kC(x, t, !1, !1), t.stateNode = x, nR(x, m, i, v) && vf(t);
            }
            t.ref !== null && DC(t);
          }
          return Tr(t), null;
        }
        case ie: {
          var O = i;
          if (e && t.stateNode != null) {
            var N = e.memoizedProps;
            OC(e, t, N, O);
          } else {
            if (typeof O != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var L = TE(), te = Eg(), be = zh(t);
            be ? h1(t) && vf(t) : t.stateNode = aR(O, L, te, t);
          }
          return Tr(t), null;
        }
        case Re: {
          sf(t);
          var Se = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var vt = zw(e, t, Se);
            if (!vt)
              return t.flags & Hn ? t : null;
          }
          if ((t.flags & Ee) !== xe)
            return t.lanes = a, (t.mode & gt) !== Te && Kg(t), t;
          var ot = Se !== null, D = e !== null && e.memoizedState !== null;
          if (ot !== D && ot) {
            var z = t.child;
            if (z.flags |= Sn, (t.mode & nt) !== Te) {
              var k = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              k || xg(ki.current, bE) ? Ub() : YS();
            }
          }
          var Y = t.updateQueue;
          if (Y !== null && (t.flags |= ft), Tr(t), (t.mode & gt) !== Te && ot) {
            var oe = t.child;
            oe !== null && (t.treeBaseDuration -= oe.treeBaseDuration);
          }
          return null;
        }
        case ae:
          return uf(t), bS(e, t), e === null && qR(t.stateNode.containerInfo), Tr(t), null;
        case je:
          var re = t.type._context;
          return dg(re, t), Tr(t), null;
        case Tt: {
          var Ae = t.type;
          return sl(Ae) && kh(t), Tr(t), null;
        }
        case jt: {
          sf(t);
          var Ie = t.memoizedState;
          if (Ie === null)
            return Tr(t), null;
          var zt = (t.flags & Ee) !== xe, Ct = Ie.rendering;
          if (Ct === null)
            if (zt)
              Tp(Ie, !1);
            else {
              var Un = jb() && (e === null || (e.flags & Ee) === xe);
              if (!Un)
                for (var xt = t.child; xt !== null; ) {
                  var bn = Kh(xt);
                  if (bn !== null) {
                    zt = !0, t.flags |= Ee, Tp(Ie, !1);
                    var Ir = bn.updateQueue;
                    return Ir !== null && (t.updateQueue = Ir, t.flags |= ft), t.subtreeFlags = xe, w1(t, a), Gu(t, Tg(ki.current, cp)), t.child;
                  }
                  xt = xt.sibling;
                }
              Ie.tail !== null && Ln() > ZC() && (t.flags |= Ee, zt = !0, Tp(Ie, !1), t.lanes = hd);
            }
          else {
            if (!zt) {
              var kr = Kh(Ct);
              if (kr !== null) {
                t.flags |= Ee, zt = !0;
                var Ha = kr.updateQueue;
                if (Ha !== null && (t.updateQueue = Ha, t.flags |= ft), Tp(Ie, !0), Ie.tail === null && Ie.tailMode === "hidden" && !Ct.alternate && !Cr())
                  return Tr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Ln() * 2 - Ie.renderingStartTime > ZC() && a !== Hr && (t.flags |= Ee, zt = !0, Tp(Ie, !1), t.lanes = hd);
            }
            if (Ie.isBackwards)
              Ct.sibling = t.child, t.child = Ct;
            else {
              var aa = Ie.last;
              aa !== null ? aa.sibling = Ct : t.child = Ct, Ie.last = Ct;
            }
          }
          if (Ie.tail !== null) {
            var ia = Ie.tail;
            Ie.rendering = ia, Ie.tail = ia.sibling, Ie.renderingStartTime = Ln(), ia.sibling = null;
            var Wr = ki.current;
            return zt ? Wr = Tg(Wr, cp) : Wr = of(Wr), Gu(t, Wr), ia;
          }
          return Tr(t), null;
        }
        case Rt:
          break;
        case Le:
        case Ht: {
          PS(t);
          var su = t.memoizedState, xf = su !== null;
          if (e !== null) {
            var Fp = e.memoizedState, yl = Fp !== null;
            yl !== xf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !K && (t.flags |= Sn);
          }
          return !xf || (t.mode & nt) === Te ? Tr(t) : Fr(ml, Hr) && (Tr(t), t.subtreeFlags & (Zt | ft) && (t.flags |= Sn)), null;
        }
        case Q:
          return null;
        case fe:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Uw(e, t, a) {
      switch (Zy(t), t.tag) {
        case q: {
          var i = t.type;
          sl(i) && kh(t);
          var u = t.flags;
          return u & Hn ? (t.flags = u & ~Hn | Ee, (t.mode & gt) !== Te && Kg(t), t) : null;
        }
        case W: {
          t.stateNode, uf(t), Gy(t), wg();
          var s = t.flags;
          return (s & Hn) !== xe && (s & Ee) === xe ? (t.flags = s & ~Hn | Ee, t) : null;
        }
        case J:
          return Cg(t), null;
        case Re: {
          sf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            nf();
          }
          var p = t.flags;
          return p & Hn ? (t.flags = p & ~Hn | Ee, (t.mode & gt) !== Te && Kg(t), t) : null;
        }
        case jt:
          return sf(t), null;
        case ae:
          return uf(t), null;
        case je:
          var v = t.type._context;
          return dg(v, t), null;
        case Le:
        case Ht:
          return PS(t), null;
        case Q:
          return null;
        default:
          return null;
      }
    }
    function NC(e, t, a) {
      switch (Zy(t), t.tag) {
        case q: {
          var i = t.type.childContextTypes;
          i != null && kh(t);
          break;
        }
        case W: {
          t.stateNode, uf(t), Gy(t), wg();
          break;
        }
        case J: {
          Cg(t);
          break;
        }
        case ae:
          uf(t);
          break;
        case Re:
          sf(t);
          break;
        case jt:
          sf(t);
          break;
        case je:
          var u = t.type._context;
          dg(u, t);
          break;
        case Le:
        case Ht:
          PS(t);
          break;
      }
    }
    var LC = null;
    LC = /* @__PURE__ */ new Set();
    var Em = !1, Rr = !1, Aw = typeof WeakSet == "function" ? WeakSet : Set, he = null, hf = null, mf = null;
    function jw(e) {
      Qi(null, function() {
        throw e;
      }), bo();
    }
    var Hw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & gt)
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
        qu(Zn, e);
      } catch (a) {
        Qt(e, t, a);
      }
    }
    function DS(e, t, a) {
      try {
        Hw(e, a);
      } catch (i) {
        Qt(e, t, i);
      }
    }
    function Fw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Qt(e, t, i);
      }
    }
    function UC(e, t) {
      try {
        jC(e);
      } catch (a) {
        Qt(e, t, a);
      }
    }
    function yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Kt && fr && e.mode & gt)
              try {
                vl(), i = a(null);
              } finally {
                pl(e);
              }
            else
              i = a(null);
          } catch (u) {
            Qt(e, t, u);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          a.current = null;
    }
    function Cm(e, t, a) {
      try {
        a();
      } catch (i) {
        Qt(e, t, i);
      }
    }
    var AC = !1;
    function Vw(e, t) {
      ZT(e.containerInfo), he = t, Bw();
      var a = AC;
      return AC = !1, a;
    }
    function Bw() {
      for (; he !== null; ) {
        var e = he, t = e.child;
        (e.subtreeFlags & Wi) !== xe && t !== null ? (t.return = e, he = t) : $w();
      }
    }
    function $w() {
      for (; he !== null; ) {
        var e = he;
        Yt(e);
        try {
          Pw(e);
        } catch (a) {
          Qt(e, e.return, a);
        }
        an();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, he = t;
          return;
        }
        he = e.return;
      }
    }
    function Pw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Nn) !== xe) {
        switch (Yt(e), e.tag) {
          case X:
          case De:
          case we:
            break;
          case q: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ss && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Oi(e.type, i), u);
              {
                var p = LC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Xe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case W: {
            {
              var v = e.stateNode;
              TR(v.containerInfo);
            }
            break;
          }
          case J:
          case ie:
          case ae:
          case Tt:
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
            f.destroy = void 0, p !== void 0 && ((e & xr) !== Ca ? Si(t) : (e & Zn) !== Ca && _o(t), (e & cl) !== Ca && Ap(!0), Cm(t, a, p), (e & cl) !== Ca && Ap(!1), (e & xr) !== Ca ? qi() : (e & Zn) !== Ca && pd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function qu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & xr) !== Ca ? dd(t) : (e & Zn) !== Ca && uc(t);
            var f = s.create;
            (e & cl) !== Ca && Ap(!0), s.destroy = f(), (e & cl) !== Ca && Ap(!1), (e & xr) !== Ca ? bv() : (e & Zn) !== Ca && Dv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Zn) !== xe ? v = "useLayoutEffect" : (s.tag & cl) !== xe ? v = "useInsertionEffect" : v = "useEffect";
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
      if ((t.flags & ft) !== xe)
        switch (t.tag) {
          case $e: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = ZE(), p = t.alternate === null ? "mount" : "update";
            qE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case W:
                  var m = v.stateNode;
                  m.passiveEffectDuration += a;
                  break e;
                case $e:
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
      if ((a.flags & Xi) !== xe)
        switch (a.tag) {
          case X:
          case De:
          case we: {
            if (!Rr)
              if (a.mode & gt)
                try {
                  vl(), qu(Zn | qn, a);
                } finally {
                  pl(a);
                }
              else
                qu(Zn | qn, a);
            break;
          }
          case q: {
            var u = a.stateNode;
            if (a.flags & ft && !Rr)
              if (t === null)
                if (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & gt)
                  try {
                    vl(), u.componentDidMount();
                  } finally {
                    pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Oi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & gt)
                  try {
                    vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ss && (u.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), xE(a, p, u));
            break;
          }
          case W: {
            var v = a.updateQueue;
            if (v !== null) {
              var m = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case J:
                    m = a.child.stateNode;
                    break;
                  case q:
                    m = a.child.stateNode;
                    break;
                }
              xE(a, v, m);
            }
            break;
          }
          case J: {
            var y = a.stateNode;
            if (t === null && a.flags & ft) {
              var R = a.type, x = a.memoizedProps;
              sR(y, R, x);
            }
            break;
          }
          case ie:
            break;
          case ae:
            break;
          case $e: {
            {
              var O = a.memoizedProps, N = O.onCommit, L = O.onRender, te = a.stateNode.effectDuration, be = ZE(), Se = t === null ? "mount" : "update";
              qE() && (Se = "nested-update"), typeof L == "function" && L(a.memoizedProps.id, Se, a.actualDuration, a.treeBaseDuration, a.actualStartTime, be);
              {
                typeof N == "function" && N(a.memoizedProps.id, Se, te, be), $b(a);
                var vt = a.return;
                e: for (; vt !== null; ) {
                  switch (vt.tag) {
                    case W:
                      var ot = vt.stateNode;
                      ot.effectDuration += te;
                      break e;
                    case $e:
                      var D = vt.stateNode;
                      D.effectDuration += te;
                      break e;
                  }
                  vt = vt.return;
                }
              }
            }
            break;
          }
          case Re: {
            Jw(e, a);
            break;
          }
          case jt:
          case Tt:
          case Rt:
          case Le:
          case Ht:
          case fe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Rr || a.flags & ln && jC(a);
    }
    function Iw(e) {
      switch (e.tag) {
        case X:
        case De:
        case we: {
          if (e.mode & gt)
            try {
              vl(), zC(e, e.return);
            } finally {
              pl(e);
            }
          else
            zC(e, e.return);
          break;
        }
        case q: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Fw(e, e.return, t), UC(e, e.return);
          break;
        }
        case J: {
          UC(e, e.return);
          break;
        }
      }
    }
    function Ww(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === J) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? SR(u) : CR(i.stateNode, i.memoizedProps);
            } catch (f) {
              Qt(e, e.return, f);
            }
          }
        } else if (i.tag === ie) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ER(s) : xR(s, i.memoizedProps);
            } catch (f) {
              Qt(e, e.return, f);
            }
        } else if (!((i.tag === Le || i.tag === Ht) && i.memoizedState !== null && i !== e)) {
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
          case J:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & gt)
            try {
              vl(), u = t(i);
            } finally {
              pl(e);
            }
          else
            u = t(i);
          typeof u == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Xe(e)), t.current = i;
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
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === J) {
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
      return e.tag === J || e.tag === W || e.tag === ae;
    }
    function VC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== J && t.tag !== ie && t.tag !== It; ) {
          if (t.flags & Zt || t.child === null || t.tag === ae)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Zt))
          return t.stateNode;
      }
    }
    function Kw(e) {
      var t = Xw(e);
      switch (t.tag) {
        case J: {
          var a = t.stateNode;
          t.flags & fa && ($0(a), t.flags &= ~fa);
          var i = VC(e);
          _S(e, i, a);
          break;
        }
        case W:
        case ae: {
          var u = t.stateNode.containerInfo, s = VC(e);
          kS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === J || i === ie;
      if (u) {
        var s = e.stateNode;
        t ? hR(a, s, t) : pR(a, s);
      } else if (i !== ae) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === J || i === ie;
      if (u) {
        var s = e.stateNode;
        t ? vR(a, s, t) : dR(a, s);
      } else if (i !== ae) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    var wr = null, Li = !1;
    function qw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case J: {
              wr = i.stateNode, Li = !1;
              break e;
            }
            case W: {
              wr = i.stateNode.containerInfo, Li = !0;
              break e;
            }
            case ae: {
              wr = i.stateNode.containerInfo, Li = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (wr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        BC(e, t, a), wr = null, Li = !1;
      }
      Gw(a);
    }
    function Zu(e, t, a) {
      for (var i = a.child; i !== null; )
        BC(e, t, i), i = i.sibling;
    }
    function BC(e, t, a) {
      switch (sd(a), a.tag) {
        case J:
          Rr || yf(a, t);
        case ie: {
          {
            var i = wr, u = Li;
            wr = null, Zu(e, t, a), wr = i, Li = u, wr !== null && (Li ? yR(wr, a.stateNode) : mR(wr, a.stateNode));
          }
          return;
        }
        case It: {
          wr !== null && (Li ? gR(wr, a.stateNode) : Vy(wr, a.stateNode));
          return;
        }
        case ae: {
          {
            var s = wr, f = Li;
            wr = a.stateNode.containerInfo, Li = !0, Zu(e, t, a), wr = s, Li = f;
          }
          return;
        }
        case X:
        case De:
        case rt:
        case we: {
          if (!Rr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var m = v.next, y = m;
                do {
                  var R = y, x = R.destroy, O = R.tag;
                  x !== void 0 && ((O & cl) !== Ca ? Cm(a, t, x) : (O & Zn) !== Ca && (_o(a), a.mode & gt ? (vl(), Cm(a, t, x), pl(a)) : Cm(a, t, x), pd())), y = y.next;
                } while (y !== m);
              }
            }
          }
          Zu(e, t, a);
          return;
        }
        case q: {
          if (!Rr) {
            yf(a, t);
            var N = a.stateNode;
            typeof N.componentWillUnmount == "function" && DS(a, t, N);
          }
          Zu(e, t, a);
          return;
        }
        case Rt: {
          Zu(e, t, a);
          return;
        }
        case Le: {
          if (
            // TODO: Remove this dead flag
            a.mode & nt
          ) {
            var L = Rr;
            Rr = L || a.memoizedState !== null, Zu(e, t, a), Rr = L;
          } else
            Zu(e, t, a);
          break;
        }
        default: {
          Zu(e, t, a);
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
            if (a.add(i), jr)
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
      hf = a, mf = e, Yt(t), PC(t, e), Yt(t), hf = null, mf = null;
    }
    function zi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            qw(e, t, s);
          } catch (v) {
            Qt(s, t, v);
          }
        }
      var f = so();
      if (t.subtreeFlags & Gi)
        for (var p = t.child; p !== null; )
          Yt(p), PC(p, e), p = p.sibling;
      Yt(f);
    }
    function PC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case X:
        case De:
        case rt:
        case we: {
          if (zi(t, e), hl(e), u & ft) {
            try {
              Ni(cl | qn, e, e.return), qu(cl | qn, e);
            } catch (Ae) {
              Qt(e, e.return, Ae);
            }
            if (e.mode & gt) {
              try {
                vl(), Ni(Zn | qn, e, e.return);
              } catch (Ae) {
                Qt(e, e.return, Ae);
              }
              pl(e);
            } else
              try {
                Ni(Zn | qn, e, e.return);
              } catch (Ae) {
                Qt(e, e.return, Ae);
              }
          }
          return;
        }
        case q: {
          zi(t, e), hl(e), u & ln && i !== null && yf(i, i.return);
          return;
        }
        case J: {
          zi(t, e), hl(e), u & ln && i !== null && yf(i, i.return);
          {
            if (e.flags & fa) {
              var s = e.stateNode;
              try {
                $0(s);
              } catch (Ae) {
                Qt(e, e.return, Ae);
              }
            }
            if (u & ft) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, m = e.type, y = e.updateQueue;
                if (e.updateQueue = null, y !== null)
                  try {
                    cR(f, y, m, v, p, e);
                  } catch (Ae) {
                    Qt(e, e.return, Ae);
                  }
              }
            }
          }
          return;
        }
        case ie: {
          if (zi(t, e), hl(e), u & ft) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var R = e.stateNode, x = e.memoizedProps, O = i !== null ? i.memoizedProps : x;
            try {
              fR(R, O, x);
            } catch (Ae) {
              Qt(e, e.return, Ae);
            }
          }
          return;
        }
        case W: {
          if (zi(t, e), hl(e), u & ft && i !== null) {
            var N = i.memoizedState;
            if (N.isDehydrated)
              try {
                AR(t.containerInfo);
              } catch (Ae) {
                Qt(e, e.return, Ae);
              }
          }
          return;
        }
        case ae: {
          zi(t, e), hl(e);
          return;
        }
        case Re: {
          zi(t, e), hl(e);
          var L = e.child;
          if (L.flags & Sn) {
            var te = L.stateNode, be = L.memoizedState, Se = be !== null;
            if (te.isHidden = Se, Se) {
              var vt = L.alternate !== null && L.alternate.memoizedState !== null;
              vt || zb();
            }
          }
          if (u & ft) {
            try {
              Zw(e);
            } catch (Ae) {
              Qt(e, e.return, Ae);
            }
            $C(e);
          }
          return;
        }
        case Le: {
          var ot = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & nt
          ) {
            var D = Rr;
            Rr = D || ot, zi(t, e), Rr = D;
          } else
            zi(t, e);
          if (hl(e), u & Sn) {
            var z = e.stateNode, k = e.memoizedState, Y = k !== null, oe = e;
            if (z.isHidden = Y, Y && !ot && (oe.mode & nt) !== Te) {
              he = oe;
              for (var re = oe.child; re !== null; )
                he = re, nb(re), re = re.sibling;
            }
            Ww(oe, Y);
          }
          return;
        }
        case jt: {
          zi(t, e), hl(e), u & ft && $C(e);
          return;
        }
        case Rt:
          return;
        default: {
          zi(t, e), hl(e);
          return;
        }
      }
    }
    function hl(e) {
      var t = e.flags;
      if (t & Zt) {
        try {
          Kw(e);
        } catch (a) {
          Qt(e, e.return, a);
        }
        e.flags &= ~Zt;
      }
      t & zr && (e.flags &= ~zr);
    }
    function tb(e, t, a) {
      hf = a, mf = t, he = e, YC(e, t, a), hf = null, mf = null;
    }
    function YC(e, t, a) {
      for (var i = (e.mode & nt) !== Te; he !== null; ) {
        var u = he, s = u.child;
        if (u.tag === Le && i) {
          var f = u.memoizedState !== null, p = f || Em;
          if (p) {
            OS(e, t, a);
            continue;
          } else {
            var v = u.alternate, m = v !== null && v.memoizedState !== null, y = m || Rr, R = Em, x = Rr;
            Em = p, Rr = y, Rr && !x && (he = u, rb(u));
            for (var O = s; O !== null; )
              he = O, YC(
                O,
                // New root; bubble back up to here and stop.
                t,
                a
              ), O = O.sibling;
            he = u, Em = R, Rr = x, OS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Xi) !== xe && s !== null ? (s.return = u, he = s) : OS(e, t, a);
      }
    }
    function OS(e, t, a) {
      for (; he !== null; ) {
        var i = he;
        if ((i.flags & Xi) !== xe) {
          var u = i.alternate;
          Yt(i);
          try {
            Qw(t, u, i, a);
          } catch (f) {
            Qt(i, i.return, f);
          }
          an();
        }
        if (i === e) {
          he = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, he = s;
          return;
        }
        he = i.return;
      }
    }
    function nb(e) {
      for (; he !== null; ) {
        var t = he, a = t.child;
        switch (t.tag) {
          case X:
          case De:
          case rt:
          case we: {
            if (t.mode & gt)
              try {
                vl(), Ni(Zn, t, t.return);
              } finally {
                pl(t);
              }
            else
              Ni(Zn, t, t.return);
            break;
          }
          case q: {
            yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && DS(t, t.return, i);
            break;
          }
          case J: {
            yf(t, t.return);
            break;
          }
          case Le: {
            var u = t.memoizedState !== null;
            if (u) {
              QC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, he = a) : QC(e);
      }
    }
    function QC(e) {
      for (; he !== null; ) {
        var t = he;
        if (t === e) {
          he = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, he = a;
          return;
        }
        he = t.return;
      }
    }
    function rb(e) {
      for (; he !== null; ) {
        var t = he, a = t.child;
        if (t.tag === Le) {
          var i = t.memoizedState !== null;
          if (i) {
            IC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, he = a) : IC(e);
      }
    }
    function IC(e) {
      for (; he !== null; ) {
        var t = he;
        Yt(t);
        try {
          Iw(t);
        } catch (i) {
          Qt(t, t.return, i);
        }
        if (an(), t === e) {
          he = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, he = a;
          return;
        }
        he = t.return;
      }
    }
    function ab(e, t, a, i) {
      he = t, ib(t, e, a, i);
    }
    function ib(e, t, a, i) {
      for (; he !== null; ) {
        var u = he, s = u.child;
        (u.subtreeFlags & yi) !== xe && s !== null ? (s.return = u, he = s) : lb(e, t, a, i);
      }
    }
    function lb(e, t, a, i) {
      for (; he !== null; ) {
        var u = he;
        if ((u.flags & Lr) !== xe) {
          Yt(u);
          try {
            ub(t, u, a, i);
          } catch (f) {
            Qt(u, u.return, f);
          }
          an();
        }
        if (u === e) {
          he = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, he = s;
          return;
        }
        he = u.return;
      }
    }
    function ub(e, t, a, i) {
      switch (t.tag) {
        case X:
        case De:
        case we: {
          if (t.mode & gt) {
            Xg();
            try {
              qu(xr | qn, t);
            } finally {
              Gg(t);
            }
          } else
            qu(xr | qn, t);
          break;
        }
      }
    }
    function ob(e) {
      he = e, sb();
    }
    function sb() {
      for (; he !== null; ) {
        var e = he, t = e.child;
        if ((he.flags & ca) !== xe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              he = u, db(u, e);
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
            he = e;
          }
        }
        (e.subtreeFlags & yi) !== xe && t !== null ? (t.return = e, he = t) : cb();
      }
    }
    function cb() {
      for (; he !== null; ) {
        var e = he;
        (e.flags & Lr) !== xe && (Yt(e), fb(e), an());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, he = t;
          return;
        }
        he = e.return;
      }
    }
    function fb(e) {
      switch (e.tag) {
        case X:
        case De:
        case we: {
          e.mode & gt ? (Xg(), Ni(xr | qn, e, e.return), Gg(e)) : Ni(xr | qn, e, e.return);
          break;
        }
      }
    }
    function db(e, t) {
      for (; he !== null; ) {
        var a = he;
        Yt(a), vb(a, t), an();
        var i = a.child;
        i !== null ? (i.return = a, he = i) : pb(e);
      }
    }
    function pb(e) {
      for (; he !== null; ) {
        var t = he, a = t.sibling, i = t.return;
        if (HC(t), t === e) {
          he = null;
          return;
        }
        if (a !== null) {
          a.return = i, he = a;
          return;
        }
        he = i;
      }
    }
    function vb(e, t) {
      switch (e.tag) {
        case X:
        case De:
        case we: {
          e.mode & gt ? (Xg(), Ni(xr, e, t), Gg(e)) : Ni(xr, e, t);
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case X:
        case De:
        case we: {
          try {
            qu(Zn | qn, e);
          } catch (a) {
            Qt(e, e.return, a);
          }
          break;
        }
        case q: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Qt(e, e.return, a);
          }
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case X:
        case De:
        case we: {
          try {
            qu(xr | qn, e);
          } catch (t) {
            Qt(e, e.return, t);
          }
          break;
        }
      }
    }
    function yb(e) {
      switch (e.tag) {
        case X:
        case De:
        case we: {
          try {
            Ni(Zn | qn, e, e.return);
          } catch (a) {
            Qt(e, e.return, a);
          }
          break;
        }
        case q: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && DS(e, e.return, t);
          break;
        }
      }
    }
    function gb(e) {
      switch (e.tag) {
        case X:
        case De:
        case we:
          try {
            Ni(xr | qn, e, e.return);
          } catch (t) {
            Qt(e, e.return, t);
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
    var Cb = b.ReactCurrentActQueue;
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
    var Tb = Math.ceil, MS = b.ReactCurrentDispatcher, NS = b.ReactCurrentOwner, br = b.ReactCurrentBatchConfig, Ui = b.ReactCurrentActQueue, tr = (
      /*             */
      0
    ), GC = (
      /*               */
      1
    ), Dr = (
      /*                */
      2
    ), ri = (
      /*                */
      4
    ), iu = 0, wp = 1, Es = 2, xm = 3, bp = 4, XC = 5, LS = 6, pt = tr, na = null, vn = null, nr = j, ml = j, zS = $u(j), rr = iu, Dp = null, Tm = j, kp = j, Rm = j, _p = null, xa = null, US = 0, KC = 500, qC = 1 / 0, Rb = 500, lu = null;
    function Op() {
      qC = Ln() + Rb;
    }
    function ZC() {
      return qC;
    }
    var wm = !1, AS = null, gf = null, Cs = !1, Ju = null, Mp = j, jS = [], HS = null, wb = 50, Np = 0, FS = null, VS = !1, bm = !1, bb = 50, Sf = 0, Dm = null, Lp = At, km = j, JC = !1;
    function _m() {
      return na;
    }
    function ra() {
      return (pt & (Dr | ri)) !== tr ? Ln() : (Lp !== At || (Lp = Ln()), Lp);
    }
    function eo(e) {
      var t = e.mode;
      if ((t & nt) === Te)
        return Ue;
      if ((pt & Dr) !== tr && nr !== j)
        return $o(nr);
      var a = C1() !== E1;
      if (a) {
        if (br.transition !== null) {
          var i = br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return km === mt && (km = Cd()), km;
      }
      var u = ya();
      if (u !== mt)
        return u;
      var s = iR();
      return s;
    }
    function Db(e) {
      var t = e.mode;
      return (t & nt) === Te ? Ue : Lv();
    }
    function ar(e, t, a, i) {
      qb(), JC && g("useInsertionEffect must not schedule updates."), VS && (bm = !0), Mu(e, a, i), (pt & Dr) !== j && e === na ? eD(t) : (jr && Qo(e, t, a), tD(t), e === na && ((pt & Dr) === tr && (kp = Ke(kp, a)), rr === bp && to(e, nr)), Ta(e, i), a === Ue && pt === tr && (t.mode & nt) === Te && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Ui.isBatchingLegacy && (Op(), J0()));
    }
    function kb(e, t, a) {
      var i = e.current;
      i.lanes = t, Mu(e, t, a), Ta(e, a);
    }
    function _b(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (pt & Dr) !== tr
      );
    }
    function Ta(e, t) {
      var a = e.callbackNode;
      Dc(e, t);
      var i = bc(e, e === na ? nr : j);
      if (i === j) {
        a !== null && hx(a), e.callbackNode = null, e.callbackPriority = mt;
        return;
      }
      var u = el(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Ui.current !== null && a !== WS)) {
        a == null && s !== Ue && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && hx(a);
      var f;
      if (u === Ue)
        e.tag === Pu ? (Ui.isBatchingLegacy !== null && (Ui.didScheduleLegacyUpdate = !0), r1(nx.bind(null, e))) : Z0(nx.bind(null, e)), Ui.current !== null ? Ui.current.push(Yu) : uR(function() {
          (pt & (Dr | ri)) === tr && Yu();
        }), f = null;
      else {
        var p;
        switch (Vv(i)) {
          case mr:
            p = ko;
            break;
          case Wa:
            p = Ki;
            break;
          case ha:
            p = gi;
            break;
          case ma:
            p = Ll;
            break;
          default:
            p = gi;
            break;
        }
        f = GS(p, ex.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function ex(e, t) {
      if (W1(), Lp = At, km = j, (pt & (Dr | ri)) !== tr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = ou();
      if (i && e.callbackNode !== a)
        return null;
      var u = bc(e, e === na ? nr : j);
      if (u === j)
        return null;
      var s = !_c(e, u) && !Nv(e, u) && !t, f = s ? Fb(e, u) : Mm(e, u);
      if (f !== iu) {
        if (f === Es) {
          var p = kc(e);
          p !== j && (u = p, f = BS(e, p));
        }
        if (f === wp) {
          var v = Dp;
          throw xs(e, j), to(e, u), Ta(e, Ln()), v;
        }
        if (f === LS)
          to(e, u);
        else {
          var m = !_c(e, u), y = e.current.alternate;
          if (m && !Mb(y)) {
            if (f = Mm(e, u), f === Es) {
              var R = kc(e);
              R !== j && (u = R, f = BS(e, R));
            }
            if (f === wp) {
              var x = Dp;
              throw xs(e, j), to(e, u), Ta(e, Ln()), x;
            }
          }
          e.finishedWork = y, e.finishedLanes = u, Ob(e, f, u);
        }
      }
      return Ta(e, Ln()), e.callbackNode === a ? ex.bind(null, e) : null;
    }
    function BS(e, t) {
      var a = _p;
      if (Nc(e)) {
        var i = xs(e, t);
        i.flags |= ur, KR(e.containerInfo);
      }
      var u = Mm(e, t);
      if (u !== Es) {
        var s = xa;
        xa = a, s !== null && tx(s);
      }
      return u;
    }
    function tx(e) {
      xa === null ? xa = e : xa.push.apply(xa, e);
    }
    function Ob(e, t, a) {
      switch (t) {
        case iu:
        case wp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Es: {
          Ts(e, xa, lu);
          break;
        }
        case xm: {
          if (to(e, a), Yl(a) && // do not delay if we're inside an act() scope
          !mx()) {
            var i = US + KC - Ln();
            if (i > 10) {
              var u = bc(e, j);
              if (u !== j)
                break;
              var s = e.suspendedLanes;
              if (!Ql(s, a)) {
                ra(), Oc(e, s);
                break;
              }
              e.timeoutHandle = Hy(Ts.bind(null, e, xa, lu), i);
              break;
            }
          }
          Ts(e, xa, lu);
          break;
        }
        case bp: {
          if (to(e, a), Sd(a))
            break;
          if (!mx()) {
            var f = La(e, a), p = f, v = Ln() - p, m = Kb(v) - v;
            if (m > 10) {
              e.timeoutHandle = Hy(Ts.bind(null, e, xa, lu), m);
              break;
            }
          }
          Ts(e, xa, lu);
          break;
        }
        case XC: {
          Ts(e, xa, lu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Mb(e) {
      for (var t = e; ; ) {
        if (t.flags & bu) {
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
        if (t.subtreeFlags & bu && v !== null) {
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
    function to(e, t) {
      t = Po(t, Rm), t = Po(t, kp), Av(e, t);
    }
    function nx(e) {
      if (G1(), (pt & (Dr | ri)) !== tr)
        throw new Error("Should not already be working.");
      ou();
      var t = bc(e, j);
      if (!Fr(t, Ue))
        return Ta(e, Ln()), null;
      var a = Mm(e, t);
      if (e.tag !== Pu && a === Es) {
        var i = kc(e);
        i !== j && (t = i, a = BS(e, i));
      }
      if (a === wp) {
        var u = Dp;
        throw xs(e, j), to(e, t), Ta(e, Ln()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Ts(e, xa, lu), Ta(e, Ln()), null;
    }
    function Nb(e, t) {
      t !== j && (Mc(e, Ke(t, Ue)), Ta(e, Ln()), (pt & (Dr | ri)) === tr && (Op(), Yu()));
    }
    function $S(e, t) {
      var a = pt;
      pt |= GC;
      try {
        return e(t);
      } finally {
        pt = a, pt === tr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Ui.isBatchingLegacy && (Op(), J0());
      }
    }
    function Lb(e, t, a, i, u) {
      var s = ya(), f = br.transition;
      try {
        return br.transition = null, Tn(mr), e(t, a, i, u);
      } finally {
        Tn(s), br.transition = f, pt === tr && Op();
      }
    }
    function uu(e) {
      Ju !== null && Ju.tag === Pu && (pt & (Dr | ri)) === tr && ou();
      var t = pt;
      pt |= GC;
      var a = br.transition, i = ya();
      try {
        return br.transition = null, Tn(mr), e ? e() : void 0;
      } finally {
        Tn(i), br.transition = a, pt = t, (pt & (Dr | ri)) === tr && Yu();
      }
    }
    function rx() {
      return (pt & (Dr | ri)) !== tr;
    }
    function Om(e, t) {
      Yr(zS, ml, e), ml = Ke(ml, t);
    }
    function PS(e) {
      ml = zS.current, Pr(zS, e);
    }
    function xs(e, t) {
      e.finishedWork = null, e.finishedLanes = j;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, lR(a)), vn !== null)
        for (var i = vn.return; i !== null; ) {
          var u = i.alternate;
          NC(u, i), i = i.return;
        }
      na = e;
      var s = Rs(e.current, null);
      return vn = s, nr = ml = t, rr = iu, Dp = null, Tm = j, kp = j, Rm = j, _p = null, xa = null, k1(), Di.discardPendingWarnings(), s;
    }
    function ax(e, t) {
      do {
        var a = vn;
        try {
          if (Vh(), kE(), an(), NS.current = null, a === null || a.return === null) {
            rr = wp, Dp = t, vn = null;
            return;
          }
          if (Kt && a.mode & gt && hm(a, !0), Ft)
            if (Zr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Ia(a, i, nr);
            } else
              Oo(a, t, nr);
          rw(e, a.return, a, t, nr), ox(a);
        } catch (u) {
          t = u, vn === a && a !== null ? (a = a.return, vn = a) : a = vn;
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
      US = Ln();
    }
    function zp(e) {
      Tm = Ke(e, Tm);
    }
    function Ub() {
      rr === iu && (rr = xm);
    }
    function YS() {
      (rr === iu || rr === xm || rr === Es) && (rr = bp), na !== null && (Bo(Tm) || Bo(kp)) && to(na, nr);
    }
    function Ab(e) {
      rr !== bp && (rr = Es), _p === null ? _p = [e] : _p.push(e);
    }
    function jb() {
      return rr === iu;
    }
    function Mm(e, t) {
      var a = pt;
      pt |= Dr;
      var i = ix();
      if (na !== e || nr !== t) {
        if (jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Up(e, nr), u.clear()), jv(e, t);
        }
        lu = wd(), xs(e, t);
      }
      jl(t);
      do
        try {
          Hb();
          break;
        } catch (s) {
          ax(e, s);
        }
      while (!0);
      if (Vh(), pt = a, lx(i), vn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return oc(), na = null, nr = j, rr;
    }
    function Hb() {
      for (; vn !== null; )
        ux(vn);
    }
    function Fb(e, t) {
      var a = pt;
      pt |= Dr;
      var i = ix();
      if (na !== e || nr !== t) {
        if (jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Up(e, nr), u.clear()), jv(e, t);
        }
        lu = wd(), Op(), xs(e, t);
      }
      jl(t);
      do
        try {
          Vb();
          break;
        } catch (s) {
          ax(e, s);
        }
      while (!0);
      return Vh(), lx(i), pt = a, vn !== null ? (kv(), iu) : (oc(), na = null, nr = j, rr);
    }
    function Vb() {
      for (; vn !== null && !ad(); )
        ux(vn);
    }
    function ux(e) {
      var t = e.alternate;
      Yt(e);
      var a;
      (e.mode & gt) !== Te ? (Wg(e), a = QS(t, e, ml), hm(e, !0)) : a = QS(t, e, ml), an(), e.memoizedProps = e.pendingProps, a === null ? ox(e) : vn = a, NS.current = null;
    }
    function ox(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Do) === xe) {
          Yt(t);
          var u = void 0;
          if ((t.mode & gt) === Te ? u = MC(a, t, ml) : (Wg(t), u = MC(a, t, ml), hm(t, !1)), an(), u !== null) {
            vn = u;
            return;
          }
        } else {
          var s = Uw(a, t);
          if (s !== null) {
            s.flags &= xv, vn = s;
            return;
          }
          if ((t.mode & gt) !== Te) {
            hm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Do, i.subtreeFlags = xe, i.deletions = null;
          else {
            rr = LS, vn = null;
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
      var i = ya(), u = br.transition;
      try {
        br.transition = null, Tn(mr), Bb(e, t, a, i);
      } finally {
        br.transition = u, Tn(i);
      }
      return null;
    }
    function Bb(e, t, a, i) {
      do
        ou();
      while (Ju !== null);
      if (Zb(), (pt & (Dr | ri)) !== tr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (cd(s), u === null)
        return fd(), null;
      if (s === j && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = j, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = mt;
      var f = Ke(u.lanes, u.childLanes);
      Td(e, f), e === na && (na = null, vn = null, nr = j), ((u.subtreeFlags & yi) !== xe || (u.flags & yi) !== xe) && (Cs || (Cs = !0, HS = a, GS(gi, function() {
        return ou(), null;
      })));
      var p = (u.subtreeFlags & (Wi | Gi | Xi | yi)) !== xe, v = (u.flags & (Wi | Gi | Xi | yi)) !== xe;
      if (p || v) {
        var m = br.transition;
        br.transition = null;
        var y = ya();
        Tn(mr);
        var R = pt;
        pt |= ri, NS.current = null, Vw(e, u), JE(), eb(e, u, s), JT(e.containerInfo), e.current = u, Mo(s), tb(u, e, s), No(), id(), pt = R, Tn(y), br.transition = m;
      } else
        e.current = u, JE();
      var x = Cs;
      if (Cs ? (Cs = !1, Ju = e, Mp = s) : (Sf = 0, Dm = null), f = e.pendingLanes, f === j && (gf = null), x || dx(e.current, !1), ud(u.stateNode, i), jr && e.memoizedUpdaters.clear(), Eb(), Ta(e, Ln()), t !== null)
        for (var O = e.onRecoverableError, N = 0; N < t.length; N++) {
          var L = t[N], te = L.stack, be = L.digest;
          O(L.value, {
            componentStack: te,
            digest: be
          });
        }
      if (wm) {
        wm = !1;
        var Se = AS;
        throw AS = null, Se;
      }
      return Fr(Mp, Ue) && e.tag !== Pu && ou(), f = e.pendingLanes, Fr(f, Ue) ? (I1(), e === FS ? Np++ : (Np = 0, FS = e)) : Np = 0, Yu(), fd(), null;
    }
    function ou() {
      if (Ju !== null) {
        var e = Vv(Mp), t = Wo(ha, e), a = br.transition, i = ya();
        try {
          return br.transition = null, Tn(t), Pb();
        } finally {
          Tn(i), br.transition = a;
        }
      }
      return !1;
    }
    function $b(e) {
      jS.push(e), Cs || (Cs = !0, GS(gi, function() {
        return ou(), null;
      }));
    }
    function Pb() {
      if (Ju === null)
        return !1;
      var e = HS;
      HS = null;
      var t = Ju, a = Mp;
      if (Ju = null, Mp = j, (pt & (Dr | ri)) !== tr)
        throw new Error("Cannot flush passive effects while already rendering.");
      VS = !0, bm = !1, Al(a);
      var i = pt;
      pt |= ri, ob(t.current), ab(t, t.current, a, e);
      {
        var u = jS;
        jS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Yw(t, f);
        }
      }
      vd(), dx(t.current, !0), pt = i, Yu(), bm ? t === Dm ? Sf++ : (Sf = 0, Dm = t) : Sf = 0, VS = !1, bm = !1, od(t);
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
      var i = gs(a, t), u = uC(e, i, Ue), s = Iu(e, u, Ue), f = ra();
      s !== null && (Mu(s, Ue, f), Ta(s, f));
    }
    function Qt(e, t, a) {
      if (jw(a), Ap(!1), e.tag === W) {
        cx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === W) {
          cx(i, e, a);
          return;
        } else if (i.tag === q) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !sx(s)) {
            var f = gs(a, e), p = fS(i, f, Ue), v = Iu(i, p, Ue), m = ra();
            v !== null && (Mu(v, Ue, m), Ta(v, m));
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
      var u = ra();
      Oc(e, a), nD(e), na === e && Ql(nr, a) && (rr === bp || rr === xm && Yl(nr) && Ln() - US < KC ? xs(e, j) : Rm = Ke(Rm, a)), Ta(e, u);
    }
    function fx(e, t) {
      t === mt && (t = Db(e));
      var a = ra(), i = Ea(e, t);
      i !== null && (Mu(i, t, a), Ta(i, a));
    }
    function Gb(e) {
      var t = e.memoizedState, a = mt;
      t !== null && (a = t.retryLane), fx(e, a);
    }
    function Xb(e, t) {
      var a = mt, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case jt:
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
      Sf > bb && (Sf = 0, Dm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Zb() {
      Di.flushLegacyContextWarning(), Di.flushPendingUnsafeLifecycleWarnings();
    }
    function dx(e, t) {
      Yt(e), Nm(e, Ii, yb), t && Nm(e, Pa, gb), Nm(e, Ii, hb), t && Nm(e, Pa, mb), an();
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
        if ((pt & Dr) !== tr || !(e.mode & nt))
          return;
        var t = e.tag;
        if (t !== Ce && t !== W && t !== q && t !== X && t !== De && t !== rt && t !== we)
          return;
        var a = Xe(e) || "ReactComponent";
        if (Lm !== null) {
          if (Lm.has(a))
            return;
          Lm.add(a);
        } else
          Lm = /* @__PURE__ */ new Set([a]);
        var i = hr;
        try {
          Yt(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Yt(e) : an();
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
          if (Vh(), kE(), NC(e, t), Cx(t, i), t.mode & gt && Wg(t), Qi(null, bC, null, e, t, a), hi()) {
            var u = bo();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var vx = !1, IS;
    IS = /* @__PURE__ */ new Set();
    function eD(e) {
      if (Fi && !P1())
        switch (e.tag) {
          case X:
          case De:
          case we: {
            var t = vn && Xe(vn) || "Unknown", a = t;
            if (!IS.has(a)) {
              IS.add(a);
              var i = Xe(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case q: {
            vx || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), vx = !0);
            break;
          }
        }
    }
    function Up(e, t) {
      if (jr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Qo(e, i, t);
        });
      }
    }
    var WS = {};
    function GS(e, t) {
      {
        var a = Ui.current;
        return a !== null ? (a.push(t), WS) : rd(e, t);
      }
    }
    function hx(e) {
      if (e !== WS)
        return Rv(e);
    }
    function mx() {
      return Ui.current !== null;
    }
    function tD(e) {
      {
        if (e.mode & nt) {
          if (!WC())
            return;
        } else if (!xb() || pt !== tr || e.tag !== X && e.tag !== De && e.tag !== we)
          return;
        if (Ui.current === null) {
          var t = hr;
          try {
            Yt(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Xe(e));
          } finally {
            t ? Yt(e) : an();
          }
        }
      }
    }
    function nD(e) {
      e.tag !== Pu && WC() && Ui.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

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
    var ai = null, Ef = null, rD = function(e) {
      ai = e;
    };
    function Cf(e) {
      {
        if (ai === null)
          return e;
        var t = ai(e);
        return t === void 0 ? e : t.current;
      }
    }
    function XS(e) {
      return Cf(e);
    }
    function KS(e) {
      {
        if (ai === null)
          return e;
        var t = ai(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Cf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: F,
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
          case q: {
            typeof i == "function" && (u = !0);
            break;
          }
          case X: {
            (typeof i == "function" || s === We) && (u = !0);
            break;
          }
          case De: {
            (s === F || s === We) && (u = !0);
            break;
          }
          case rt:
          case we: {
            (s === qe || s === We) && (u = !0);
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
        Ef === null && (Ef = /* @__PURE__ */ new WeakSet()), Ef.add(e);
      }
    }
    var aD = function(e, t) {
      {
        if (ai === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        ou(), uu(function() {
          qS(e.current, i, a);
        });
      }
    }, iD = function(e, t) {
      {
        if (e.context !== Aa)
          return;
        ou(), uu(function() {
          jp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case X:
          case we:
          case q:
            v = p;
            break;
          case De:
            v = p.render;
            break;
        }
        if (ai === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var m = !1, y = !1;
        if (v !== null) {
          var R = ai(v);
          R !== void 0 && (a.has(R) ? y = !0 : t.has(R) && (f === q ? y = !0 : m = !0));
        }
        if (Ef !== null && (Ef.has(e) || i !== null && Ef.has(i)) && (y = !0), y && (e._debugNeedsRemount = !0), y || m) {
          var x = Ea(e, Ue);
          x !== null && ar(x, e, Ue, At);
        }
        u !== null && !y && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var lD = function(e, t) {
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
          case X:
          case we:
          case q:
            p = f;
            break;
          case De:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? uD(e, a) : i !== null && ZS(i, t, a), u !== null && ZS(u, t, a);
      }
    }
    function uD(e, t) {
      {
        var a = oD(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case J:
              t.add(i.stateNode);
              return;
            case ae:
              t.add(i.stateNode.containerInfo);
              return;
            case W:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function oD(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === J)
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
    function sD(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = xe, this.subtreeFlags = xe, this.deletions = null, this.lanes = j, this.childLanes = j, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !JS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ja = function(e, t, a, i) {
      return new sD(e, t, a, i);
    };
    function e0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cD(e) {
      return typeof e == "function" && !e0(e) && e.defaultProps === void 0;
    }
    function fD(e) {
      if (typeof e == "function")
        return e0(e) ? q : X;
      if (e != null) {
        var t = e.$$typeof;
        if (t === F)
          return De;
        if (t === qe)
          return rt;
      }
      return Ce;
    }
    function Rs(e, t) {
      var a = e.alternate;
      a === null ? (a = ja(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = xe, a.subtreeFlags = xe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & En, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ce:
        case X:
        case we:
          a.type = Cf(e.type);
          break;
        case q:
          a.type = XS(e.type);
          break;
        case De:
          a.type = KS(e.type);
          break;
      }
      return a;
    }
    function dD(e, t) {
      e.flags &= En | Zt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = j, e.lanes = t, e.child = null, e.subtreeFlags = xe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function pD(e, t, a) {
      var i;
      return e === Oh ? (i = nt, t === !0 && (i |= Nt, i |= St)) : i = Te, jr && (i |= gt), ja(W, null, null, i);
    }
    function t0(e, t, a, i, u, s) {
      var f = Ce, p = e;
      if (typeof e == "function")
        e0(e) ? (f = q, p = XS(p)) : p = Cf(p);
      else if (typeof e == "string")
        f = J;
      else
        e: switch (e) {
          case Ai:
            return no(a.children, u, s, t);
          case li:
            f = _e, u |= Nt, (u & nt) !== Te && (u |= St);
            break;
          case ji:
            return vD(a, u, s, t);
          case ne:
            return hD(a, u, s, t);
          case Me:
            return mD(a, u, s, t);
          case Mn:
            return Ex(a, u, s, t);
          case Wt:
          case ut:
          case qt:
          case vr:
          case at:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Hi:
                  f = je;
                  break e;
                case E:
                  f = it;
                  break e;
                case F:
                  f = De, p = KS(p);
                  break e;
                case qe:
                  f = rt;
                  break e;
                case We:
                  f = Dt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var m = i ? Xe(i) : null;
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
    function no(e, t, a, i) {
      var u = ja(ye, e, i, t);
      return u.lanes = a, u;
    }
    function vD(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ja($e, e, i, t | gt);
      return u.elementType = ji, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function hD(e, t, a, i) {
      var u = ja(Re, e, i, t);
      return u.elementType = ne, u.lanes = a, u;
    }
    function mD(e, t, a, i) {
      var u = ja(jt, e, i, t);
      return u.elementType = Me, u.lanes = a, u;
    }
    function Ex(e, t, a, i) {
      var u = ja(Le, e, i, t);
      u.elementType = Mn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function r0(e, t, a) {
      var i = ja(ie, e, null, t);
      return i.lanes = a, i;
    }
    function yD() {
      var e = ja(J, null, null, Te);
      return e.elementType = "DELETED", e;
    }
    function gD(e) {
      var t = ja(It, null, null, Te);
      return t.stateNode = e, t;
    }
    function a0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ja(ae, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function Cx(e, t) {
      return e === null && (e = ja(Ce, null, null, Te)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function SD(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = mt, this.eventTimes = Yo(j), this.expirationTimes = Yo(At), this.pendingLanes = j, this.suspendedLanes = j, this.pingedLanes = j, this.expiredLanes = j, this.mutableReadLanes = j, this.finishedLanes = j, this.entangledLanes = j, this.entanglements = Yo(j), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Hl; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Oh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Pu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function xx(e, t, a, i, u, s, f, p, v, m) {
      var y = new SD(e, t, a, p, v), R = pD(t, s);
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
    function ED(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return lr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Or,
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
      var t = wu(e), a = n1(t);
      if (t.tag === q) {
        var i = t.type;
        if (sl(i))
          return K0(t, i, a);
      }
      return a;
    }
    function CD(e, t) {
      {
        var a = wu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Ur(a);
        if (u === null)
          return null;
        if (u.mode & Nt) {
          var s = Xe(a) || "Component";
          if (!u0[s]) {
            u0[s] = !0;
            var f = hr;
            try {
              Yt(u), a.mode & Nt ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Yt(f) : an();
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
      var x = R.current, O = ra(), N = eo(x), L = ru(O, N);
      return L.callback = t ?? null, Iu(x, L, N), kb(R, N, O), R;
    }
    function jp(e, t, a, i) {
      ld(t, e);
      var u = t.current, s = ra(), f = eo(u);
      en(f);
      var p = Tx(a);
      t.context === null ? t.context = p : t.pendingContext = p, Fi && hr !== null && !l0 && (l0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Xe(hr) || "Unknown"));
      var v = ru(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var m = Iu(u, v, f);
      return m !== null && (ar(m, u, f, s), Qh(m, u, f)), f;
    }
    function zm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case J:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function xD(e) {
      switch (e.tag) {
        case W: {
          var t = e.stateNode;
          if (Nc(t)) {
            var a = Ov(t);
            Nb(t, a);
          }
          break;
        }
        case Re: {
          uu(function() {
            var u = Ea(e, Ue);
            if (u !== null) {
              var s = ra();
              ar(u, e, Ue, s);
            }
          });
          var i = Ue;
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
    function TD(e) {
      if (e.tag === Re) {
        var t = Ho, a = Ea(e, t);
        if (a !== null) {
          var i = ra();
          ar(a, e, t, i);
        }
        o0(e, t);
      }
    }
    function RD(e) {
      if (e.tag === Re) {
        var t = eo(e), a = Ea(e, t);
        if (a !== null) {
          var i = ra();
          ar(a, e, t, i);
        }
        o0(e, t);
      }
    }
    function Dx(e) {
      var t = Gt(e);
      return t === null ? null : t.stateNode;
    }
    var kx = function(e) {
      return null;
    };
    function wD(e) {
      return kx(e);
    }
    var _x = function(e) {
      return !1;
    };
    function bD(e) {
      return _x(e);
    }
    var Ox = null, Mx = null, Nx = null, Lx = null, zx = null, Ux = null, Ax = null, jx = null, Hx = null;
    {
      var Fx = function(e, t, a) {
        var i = t[a], u = In(e) ? e.slice() : tt({}, e);
        return a + 1 === t.length ? (In(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = Fx(e[i], t, a + 1), u);
      }, Vx = function(e, t) {
        return Fx(e, t, 0);
      }, Bx = function(e, t, a, i) {
        var u = t[i], s = In(e) ? e.slice() : tt({}, e);
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
          Ne("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ne("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Bx(e, t, a, 0);
      }, Px = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = In(e) ? e.slice() : tt({}, e);
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
          u.memoizedState = s, u.baseState = s, e.memoizedProps = tt({}, e.memoizedProps);
          var f = Ea(e, Ue);
          f !== null && ar(f, e, Ue, At);
        }
      }, Mx = function(e, t, a) {
        var i = s0(e, t);
        if (i !== null) {
          var u = Vx(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = tt({}, e.memoizedProps);
          var s = Ea(e, Ue);
          s !== null && ar(s, e, Ue, At);
        }
      }, Nx = function(e, t, a, i) {
        var u = s0(e, t);
        if (u !== null) {
          var s = $x(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = tt({}, e.memoizedProps);
          var f = Ea(e, Ue);
          f !== null && ar(f, e, Ue, At);
        }
      }, Lx = function(e, t, a) {
        e.pendingProps = Yx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ea(e, Ue);
        i !== null && ar(i, e, Ue, At);
      }, zx = function(e, t) {
        e.pendingProps = Vx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ea(e, Ue);
        a !== null && ar(a, e, Ue, At);
      }, Ux = function(e, t, a) {
        e.pendingProps = $x(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ea(e, Ue);
        i !== null && ar(i, e, Ue, At);
      }, Ax = function(e) {
        var t = Ea(e, Ue);
        t !== null && ar(t, e, Ue, At);
      }, jx = function(e) {
        kx = e;
      }, Hx = function(e) {
        _x = e;
      };
    }
    function DD(e) {
      var t = Ur(e);
      return t === null ? null : t.stateNode;
    }
    function kD(e) {
      return null;
    }
    function _D() {
      return hr;
    }
    function OD(e) {
      var t = e.findFiberByHostInstance, a = b.ReactCurrentDispatcher;
      return ku({
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
        findHostInstanceByFiber: DD,
        findFiberByHostInstance: t || kD,
        // React Refresh
        findHostInstancesForRefresh: lD,
        scheduleRefresh: aD,
        scheduleRoot: iD,
        setRefreshHandler: rD,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: _D,
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
        if (a.nodeType !== gn) {
          var i = Dx(t.current);
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
        rx() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), uu(function() {
          jp(null, e, null, null);
        }), Q0(t);
      }
    };
    function MD(e, t) {
      if (!Am(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Ix(e);
      var a = !1, i = !1, u = "", s = Qx;
      t != null && (t.hydrate ? Ne("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Da && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = Rx(e, Oh, null, a, i, u, s);
      Th(f.current, e);
      var p = e.nodeType === gn ? e.parentNode : e;
      return Pd(p), new c0(f);
    }
    function Um(e) {
      this._internalRoot = e;
    }
    function ND(e) {
      e && Qv(e);
    }
    Um.prototype.unstable_scheduleHydration = ND;
    function LD(e, t, a) {
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
      return !!(e && (e.nodeType === Nr || e.nodeType === vi || e.nodeType === Qf));
    }
    function Hp(e) {
      return !!(e && (e.nodeType === Nr || e.nodeType === vi || e.nodeType === Qf || e.nodeType === gn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Ix(e) {
      e.nodeType === Nr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), ep(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var zD = b.ReactCurrentOwner, Wx;
    Wx = function(e) {
      if (e._reactRootContainer && e.nodeType !== gn) {
        var t = Dx(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = f0(e), u = !!(i && Bu(i));
      u && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Nr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function f0(e) {
      return e ? e.nodeType === vi ? e.documentElement : e.firstChild : null;
    }
    function Gx() {
    }
    function UD(e, t, a, i, u) {
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
        e._reactRootContainer = f, Th(f.current, e);
        var p = e.nodeType === gn ? e.parentNode : e;
        return Pd(p), uu(), f;
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
        e._reactRootContainer = y, Th(y.current, e);
        var R = e.nodeType === gn ? e.parentNode : e;
        return Pd(R), uu(function() {
          jp(t, y, a, i);
        }), y;
      }
    }
    function AD(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function jm(e, t, a, i, u) {
      Wx(a), AD(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = UD(a, t, e, u, i);
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
    function jD(e) {
      {
        Xx || (Xx = !0, g("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = zD.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ot(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Nr ? e : CD(e, "findDOMNode");
    }
    function HD(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ep(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return jm(null, e, t, !0, a);
    }
    function FD(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ep(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return jm(null, e, t, !1, a);
    }
    function VD(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Hp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !oy(e))
        throw new Error("parentComponent must be a valid React Component");
      return jm(e, t, a, !1, i);
    }
    var Kx = !1;
    function BD(e) {
      if (Kx || (Kx = !0, g("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Hp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = ep(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = f0(e), i = a && !Bu(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return uu(function() {
          jm(null, null, e, !1, function() {
            e._reactRootContainer = null, Q0(e);
          });
        }), !0;
      } else {
        {
          var u = f0(e), s = !!(u && Bu(u)), f = e.nodeType === Nr && Hp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    sr(xD), Nu(TD), Bv(RD), Xo(ya), bd(Hv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Xs(PT), uy($S, Lb, uu);
    function $D(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Am(t))
        throw new Error("Target container is not a DOM element.");
      return ED(e, t, null, a);
    }
    function PD(e, t, a, i) {
      return VD(e, t, a, i);
    }
    var d0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Bu, qc, Rh, Cu, Ks, $S]
    };
    function YD(e, t) {
      return d0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), MD(e, t);
    }
    function QD(e, t, a) {
      return d0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), LD(e, t, a);
    }
    function ID(e) {
      return rx() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), uu(e);
    }
    var WD = OD({
      findFiberByHostInstance: ss,
      bundleType: 1,
      version: i0,
      rendererPackageName: "react-dom"
    });
    if (!WD && mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var qx = window.location.protocol;
      /^(https?|file):$/.test(qx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (qx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d0, wa.createPortal = $D, wa.createRoot = YD, wa.findDOMNode = jD, wa.flushSync = ID, wa.hydrate = HD, wa.hydrateRoot = QD, wa.render = FD, wa.unmountComponentAtNode = BD, wa.unstable_batchedUpdates = $S, wa.unstable_renderSubtreeIntoContainer = PD, wa.version = i0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), wa;
}
function uT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uT);
    } catch (A) {
      console.error(A);
    }
  }
}
process.env.NODE_ENV === "production" ? (uT(), m0.exports = ek()) : m0.exports = tk();
var nk = m0.exports, y0, Fm = nk;
if (process.env.NODE_ENV === "production")
  y0 = Fm.createRoot, Fm.hydrateRoot;
else {
  var iT = Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  y0 = function(A, I) {
    iT.usingClientEntryPoint = !0;
    try {
      return Fm.createRoot(A, I);
    } finally {
      iT.usingClientEntryPoint = !1;
    }
  };
}
function rk() {
  const A = ik(), I = /^#\/element\/(.+)$/.exec(A);
  return /* @__PURE__ */ ge.jsx("div", { className: "karyotype_viewer_main ", children: /* @__PURE__ */ ge.jsx(ak, { route: A, children: I ? /* @__PURE__ */ ge.jsx(uk, { elementId: decodeURIComponent(I[1]) }) : /* @__PURE__ */ ge.jsx(lk, {}) }) });
}
class ak extends Tf.Component {
  constructor(I) {
    super(I), this.state = { error: null };
  }
  static getDerivedStateFromError(I) {
    return { error: I };
  }
  componentDidCatch(I, b) {
  }
  componentDidUpdate(I) {
    I.route !== this.props.route && this.state.error && this.setState({ error: null });
  }
  render() {
    return this.state.error ? /* @__PURE__ */ ge.jsx("div", { className: "max-w-7xl mx-auto p-4", children: /* @__PURE__ */ ge.jsxs("div", { className: "rounded-xl border bg-white p-6", children: [
      /* @__PURE__ */ ge.jsx("div", { className: "text-red-700 font-semibold mb-2", children: "Something went wrong" }),
      /* @__PURE__ */ ge.jsx("pre", { className: "text-xs whitespace-pre-wrap text-red-800", children: String(this.state.error) }),
      /* @__PURE__ */ ge.jsx("button", { className: "mt-3 px-3 py-1.5 rounded-xl border", onClick: () => this.setState({ error: null }), children: "Try again" })
    ] }) }) : this.props.children;
  }
}
function ik() {
  const [A, I] = gl(() => window.location.hash || "#/");
  return cu(() => {
    const b = () => I(window.location.hash || "#/");
    return window.addEventListener("hashchange", b), () => window.removeEventListener("hashchange", b);
  }, []), A;
}
function lk() {
  const [A, I] = gl(null), [b, Qe] = gl(null), [Pe, Ne] = gl("(none)"), [g, Be] = gl("(none)"), [X, q] = gl(!1), [Ce, W] = gl(null), [ae, J] = gl(null);
  return cu(() => {
    try {
      sessionStorage.removeItem("selected_element");
      const ie = [];
      for (let ye = 0; ye < sessionStorage.length; ye++) {
        const _e = sessionStorage.key(ye);
        _e && _e.startsWith("element:") && ie.push(_e);
      }
      ie.forEach((ye) => sessionStorage.removeItem(ye));
    } catch {
    }
  }, []), cu(() => {
    const ie = document.getElementById("karyotype_div");
    if (!ie)
      return;
    async function ye() {
      try {
        console.log(ie.getAttribute("data-karyo-txt"), typeof ie.getAttribute("data-karyo-txt")), console.log(ie.getAttribute("data-karyo-bed"));
        const it = await (await fetch(ie.getAttribute("data-karyo-txt"))).text();
        I(it), Ne(ie.getAttribute("data-karyo-txt"));
        const De = await (await fetch(ie.getAttribute("data-karyo-bed"))).text();
        Qe(De), Be(ie.getAttribute("data-karyo-bed"));
        const Re = await (await fetch("/static/karyotype_viewer/family_colors.json")).json();
        console.log(Re), J(Re), console.log(ae);
        const rt = ie.getAttribute("data-karyo-parent");
        console.log(rt), W(rt);
      } catch (_e) {
        console.error("Error loading static files", _e);
      }
    }
    ye();
  }, []), /* @__PURE__ */ ge.jsx("div", { className: "main-grid grid grid-cols-1 lg:grid-cols-12 gap-4", children: /* @__PURE__ */ ge.jsx("div", { className: "col-left lg:col-span-9", children: /* @__PURE__ */ ge.jsx(ok, { karyoText: A, bedText: b, parent: Ce, familyColors: ae }) }) });
}
function uk({ elementId: A }) {
  const I = bs(() => {
    const b = sessionStorage.getItem(`element:${A}`);
    return b ? JSON.parse(b) : null;
  }, [A]);
  return /* @__PURE__ */ ge.jsxs("div", { className: "bg-white rounded-2xl shadow p-6", children: [
    /* @__PURE__ */ ge.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ ge.jsx("a", { href: "#/", className: "text-sm text-blue-600 hover:underline", onClick: (b) => {
      b.preventDefault(), window.history.length > 1 ? window.history.back() : window.location.hash = "#/";
    }, children: "← Back to viewer" }) }),
    /* @__PURE__ */ ge.jsxs("h1", { className: "mt-2 text-2xl font-semibold", children: [
      "Element: ",
      /* @__PURE__ */ ge.jsx("span", { className: "font-mono text-base px-2 py-1 rounded bg-gray-100 break-all", children: A })
    ] }),
    I ? /* @__PURE__ */ ge.jsxs("div", { className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ ge.jsxs("div", { className: "p-4 bg-gray-50 rounded-xl", children: [
        /* @__PURE__ */ ge.jsx("h2", { className: "font-semibold", children: "Summary" }),
        /* @__PURE__ */ ge.jsxs("ul", { className: "text-sm text-gray-800 mt-2 space-y-1", children: [
          /* @__PURE__ */ ge.jsxs("li", { children: [
            /* @__PURE__ */ ge.jsx("b", { children: "Chrom:" }),
            " ",
            I.chr
          ] }),
          /* @__PURE__ */ ge.jsxs("li", { children: [
            /* @__PURE__ */ ge.jsx("b", { children: "Start:" }),
            " ",
            Number(I.start).toLocaleString()
          ] }),
          /* @__PURE__ */ ge.jsxs("li", { children: [
            /* @__PURE__ */ ge.jsx("b", { children: "End:" }),
            " ",
            Number(I.end).toLocaleString()
          ] }),
          /* @__PURE__ */ ge.jsxs("li", { children: [
            /* @__PURE__ */ ge.jsx("b", { children: "Name:" }),
            " ",
            I.name
          ] }),
          /* @__PURE__ */ ge.jsxs("li", { children: [
            /* @__PURE__ */ ge.jsx("b", { children: "Family:" }),
            " ",
            I.family
          ] })
        ] })
      ] }),
      /* @__PURE__ */ ge.jsxs("div", { className: "p-4 bg-gray-50 rounded-xl", children: [
        /* @__PURE__ */ ge.jsx("h2", { className: "font-semibold", children: "External Links" }),
        /* @__PURE__ */ ge.jsxs("ul", { className: "text-sm list-disc pl-5 mt-2", children: [
          /* @__PURE__ */ ge.jsx("li", { children: /* @__PURE__ */ ge.jsx("a", { className: "text-blue-600 hover:underline", href: "#", children: "Repeat-ome record" }) }),
          /* @__PURE__ */ ge.jsx("li", { children: /* @__PURE__ */ ge.jsx("a", { className: "text-blue-600 hover:underline", href: "#", children: "UCSC / Ensembl" }) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ ge.jsx("p", { className: "mt-3 text-gray-600", children: "No cached element data for this id. Navigate here by clicking an element in the viewer." })
  ] });
}
function ok({ karyoText: A, bedText: I, parent: b, familyColors: Qe }) {
  const Pe = ws(null), Ne = ws(null), g = ws(null), Be = ws(!1), [X, q] = gl(() => sessionStorage.getItem("selected_element") || null);
  cu(() => {
    const Q = () => q(null);
    return window.addEventListener("kv-clear-all", Q), () => window.removeEventListener("kv-clear-all", Q);
  }, []);
  const Ce = ws({ x: 0, y: 0, s: 1 }), W = ws(!1), ae = ws({ x: 0, y: 0, tx: 0, ty: 0 }), J = (Q, fe, He) => {
    Ce.current = { x: Q, y: fe, s: He };
    const V = g.current;
    V && V.setAttribute("transform", `translate(${Q},${fe}) scale(${He})`);
  }, ie = () => {
    const Q = Ne.current, fe = g.current;
    if (!(!Q || !fe))
      try {
        const He = fe.getBBox();
        if (!isFinite(He.width) || !isFinite(He.height) || He.width === 0 || He.height === 0) return;
        const V = Q.clientWidth || 1e3, de = Q.clientHeight || 600, K = 20, Ge = (V - 2 * K) / He.width, st = (de - 2 * K) / He.height, Ft = Math.min(Ge, st), Kt = K - He.x * Ft + (V - (He.width * Ft + 2 * K)) / 2, fr = K - He.y * Ft + (de - (He.height * Ft + 2 * K)) / 2;
        J(Kt, fr, Ft);
      } catch {
      }
  }, ye = (Q, fe, He) => {
    const { x: V, y: de, s: K } = Ce.current, Ge = Ds(K * Q, 0.3, 200), st = (fe - V) / K, Ft = (He - de) / K, Kt = fe - st * Ge, fr = He - Ft * Ge;
    J(Kt, fr, Ge);
  }, _e = (Q) => {
    Q.preventDefault();
    const fe = Math.exp(-Q.deltaY * 1e-3), He = Q.currentTarget.getBoundingClientRect();
    ye(fe, Q.clientX - He.left, Q.clientY - He.top);
  }, it = (Q) => {
    const fe = Ne.current;
    if (!fe) return;
    const He = Q.target;
    if (!(He && typeof He.getAttribute == "function" && He.getAttribute("data-el") === "1")) {
      W.current = !0;
      try {
        fe.setPointerCapture(Q.pointerId);
      } catch {
      }
      ae.current = { x: Q.clientX, y: Q.clientY, tx: Ce.current.x, ty: Ce.current.y };
    }
  }, je = (Q) => {
    if (!W.current) return;
    const fe = Q.clientX - ae.current.x, He = Q.clientY - ae.current.y;
    J(ae.current.tx + fe, ae.current.ty + He, Ce.current.s);
  }, De = (Q) => {
    const fe = Ne.current;
    if (fe) {
      W.current = !1;
      try {
        fe.releasePointerCapture(Q.pointerId);
      } catch {
      }
    }
  }, $e = bs(() => A ? fk(A) : [], [A]), Re = bs(() => I ? dk(I) : [], [I]);
  console.log("RAW BED TEXT:", I), console.log("PARSED BEDS:", Re.slice(0, 20)), cu(() => {
    Be.current = !1;
  }, [$e, Re]);
  const rt = bs(() => new Map($e.map((Q) => [Q.key, Q])), [$e]), we = bs(() => Re.filter((Q) => !(!rt.get(Q.key) || !isFinite(Q.start) || !isFinite(Q.end) || Q.end < Q.start)), [Re, rt]);
  console.log("MATCHED: ", we);
  const Dt = bs(() => Array.from(
    new Set(
      we.map((Q) => String(Q.family || "").trim()).filter(Boolean)
    )
  ), [we]), [Tt, It] = gl(/* @__PURE__ */ new Set()), jt = bs(() => {
    const Q = /* @__PURE__ */ new Map(), fe = b && b !== "none" && Qe ? Qe[b] : null;
    return Dt.forEach((He, V) => {
      const de = fe ? mk(fe, V, Dt.length || 1) : pk(V, Dt.length || 1);
      Q.set(He, de);
    }), Q;
  }, [Dt, b, Qe]);
  cu(() => {
    It(new Set(Dt));
  }, [Dt]), console.log(jt), console.log(Dt), cu(() => {
    It(new Set(Dt));
  }, [Dt]), cu(() => {
    const Q = "http://www.w3.org/2000/svg", fe = Ne.current;
    if (!fe) return;
    for (; fe.firstChild; ) fe.removeChild(fe.firstChild);
    const He = document.createElementNS(Q, "defs");
    fe.appendChild(He);
    const V = document.createElementNS(Q, "g");
    if (fe.appendChild(V), g.current = V, !$e.length) return;
    const de = new Map($e.map((ze) => [ze.key, ze])), K = $e.map((ze) => ze.key), Ge = K.length, Ft = Math.ceil(Ge / 14), Kt = Math.floor(Ge / Ft), fr = Ge % Ft, un = [];
    let nn = 0;
    for (let ze = 0; ze < Ft; ze++) {
      const Vt = Kt + (ze < fr ? 1 : 0);
      un.push(K.slice(nn, nn + Vt)), nn += Vt;
    }
    const hn = 16, ir = 340, dr = 80, mn = 20, pr = 40, on = /* @__PURE__ */ new Map(), Pn = $e.reduce((ze, Vt) => Math.max(ze, Vt.end - Vt.start), 1), Dn = (ze, Vt, yt) => ($t) => Vt + ($t - ze.start) / (ze.end - ze.start) * yt;
    un.forEach((ze, Vt) => {
      ze.forEach((yt, $t) => {
        const Pt = de.get(yt);
        if (!Pt) return;
        const yn = (Pt.end - Pt.start) / Pn * 280 + 40, G = pr + $t * dr, se = mn + Vt * ir, Fe = Dn(Pt, se, yn);
        on.set(yt, { x: G, y: se, height: yn, scale: Fe, k: Pt });
      });
    });
    for (const [ze, Vt] of on) {
      const { x: yt, y: $t, height: Pt, k: _n, scale: yn } = Vt, G = yn(_n.ceStart), se = yn(_n.ceEnd);
      var kn = !0;
      G < 22 && se < 22 && (console.log("NO PINCH: ", b), kn = !1);
      const Fe = ck(yt, $t, Pt, hn, G, se, kn), Je = document.createElementNS(Q, "path");
      Je.setAttribute("d", Fe), Je.setAttribute("fill", "#e5e7eb"), Je.setAttribute("stroke", "#9ca3af"), Je.setAttribute("stroke-width", "1"), Je.setAttribute("shape-rendering", "geometricPrecision"), V.appendChild(Je);
      const lt = `clip-${ze}`, ht = document.createElementNS(Q, "clipPath");
      ht.setAttribute("id", lt);
      const Ut = document.createElementNS(Q, "path");
      Ut.setAttribute("d", Fe), ht.appendChild(Ut), He.appendChild(ht);
      const Mt = document.createElementNS(Q, "g");
      Mt.setAttribute("clip-path", `url(#${lt})`), V.appendChild(Mt);
      const ct = document.createElementNS(Q, "text");
      ct.setAttribute("x", String(yt + hn / 2)), ct.setAttribute("y", String($t + Pt + 16)), ct.setAttribute("text-anchor", "middle"), ct.setAttribute("font-size", "12"), ct.setAttribute("fill", "#374151"), ct.textContent = _n.label, V.appendChild(ct), Vt.gChr = Mt;
    }
    const lr = document.createElementNS(Q, "rect");
    lr.setAttribute("fill", "none"), lr.setAttribute("stroke", "#111827"), lr.setAttribute("stroke-width", "2"), lr.setAttribute("vector-effect", "non-scaling-stroke"), lr.setAttribute("pointer-events", "none"), lr.setAttribute("visibility", "hidden");
    const rn = document.createElementNS(Q, "rect");
    rn.setAttribute("fill", "none"), rn.setAttribute("stroke", "#2563eb"), rn.setAttribute("stroke-width", "2"), rn.setAttribute("vector-effect", "non-scaling-stroke"), rn.setAttribute("pointer-events", "none"), rn.setAttribute("visibility", "hidden");
    const _r = /* @__PURE__ */ new Map(), ba = (ze) => Tt.has(ze);
    for (const ze of we) {
      if (!ba(ze.family) || !de.has(ze.key)) continue;
      const Vt = on.get(ze.key);
      if (!Vt) continue;
      const { k: yt, scale: $t } = Vt, Pt = Math.max(yt.start, Math.min(ze.start, yt.end)), _n = Math.max(yt.start, Math.min(ze.end + 1, yt.end + 1)), yn = $t(Pt), G = $t(_n), se = `${de.get(ze.key).label}:${ze.start}-${ze.end}:${ze.name}`.replace(/\s+/g, "_");
      (_r.get(ze.key) || _r.set(ze.key, []).get(ze.key)).push({ b: ze, yTop: yn, yBot: G, id: se });
    }
    const Yn = 2, An = 8;
    for (const [ze, Vt] of _r) {
      const yt = on.get(ze);
      if (!yt) continue;
      const { x: $t, y: Pt, height: _n, gChr: yn } = yt, G = 16 - 2 * Yn, se = Math.min(G, Math.max(An, G)), Fe = $t + (16 - se) / 2, Je = Vt.slice().sort((lt, ht) => lt.yTop - ht.yTop || lt.yBot - lt.yTop - (ht.yBot - ht.yTop));
      for (let lt = 0; lt < Je.length; lt++) {
        const { b: ht, id: Ut } = Je[lt];
        let Mt = Math.max(Pt, Math.min(Pt + _n, Je[lt].yTop)), ct = Math.max(Mt, Math.min(Pt + _n, Je[lt].yBot));
        const et = document.createElementNS(Q, "rect");
        et.setAttribute("x", String(Fe)), et.setAttribute("width", String(se)), et.setAttribute("y", String(Mt)), et.setAttribute("height", String(Math.max(1, ct - Mt))), et.setAttribute("fill", jt.get(ht.family) || "#10b981"), et.setAttribute("stroke", "none"), et.setAttribute("cursor", "pointer"), et.setAttribute("pointer-events", "all"), et.setAttribute("data-el", "1"), et.addEventListener("pointerdown", (On) => On.stopPropagation()), et.addEventListener("pointerenter", () => {
          rn.setAttribute("x", String(Fe)), rn.setAttribute("y", String(Mt)), rn.setAttribute("width", String(se)), rn.setAttribute("height", String(Math.max(1, ct - Mt))), rn.setAttribute("visibility", "visible"), yn.appendChild(rn);
        }), et.addEventListener("pointerleave", () => {
          rn.setAttribute("visibility", "hidden");
        }), et.addEventListener("click", () => {
          window.open("/repeatTable/" + ht.family, "_blank");
        });
        const kt = document.createElementNS(Q, "title"), Gr = de.get(ht.key);
        if (kt.textContent = `${ht.name} — ${ht.family}
${Gr ? Gr.label : ht.key}:${ht.start}-${ht.end}`, et.appendChild(kt), yn.appendChild(et), X && Ut === X) {
          const On = { x: Fe, w: se, y: Mt, h: Math.max(1, ct - Mt) }, jn = document.createElementNS(Q, "rect");
          jn.setAttribute("fill", "none"), jn.setAttribute("stroke", "#111827"), jn.setAttribute("stroke-width", "2"), jn.setAttribute("vector-effect", "non-scaling-stroke"), jn.setAttribute("pointer-events", "none"), jn.setAttribute("x", String(On.x)), jn.setAttribute("y", String(On.y)), jn.setAttribute("width", String(On.w)), jn.setAttribute("height", String(On.h)), yn.appendChild(jn);
        }
      }
    }
    Be.current || (setTimeout(ie, 0), Be.current = !0);
  }, [$e, Re, Tt, jt, X]), cu(() => {
    const Q = Ne.current;
    if (!Q) return;
    const fe = (He) => {
      He.preventDefault(), Math.pow(1.0015, He.deltaY);
      const V = Q.getBoundingClientRect();
      (He.clientX - V.left) / V.width, (He.clientY - V.top) / V.height;
    };
    return Q.addEventListener("wheel", fe, { passive: !1 }), () => {
      Q.removeEventListener("wheel", fe);
    };
  }, []);
  const Rt = () => {
    const Q = Ne.current;
    if (!Q) return;
    const fe = Q.getBoundingClientRect();
    ye(1.2, fe.width / 2, fe.height / 2);
  }, Le = () => {
    const Q = Ne.current;
    if (!Q) return;
    const fe = Q.getBoundingClientRect();
    ye(1 / 1.2, fe.width / 2, fe.height / 2);
  }, Ht = () => {
    ie();
  };
  return /* @__PURE__ */ ge.jsxs("div", { ref: Pe, className: "kary_card bg-white rounded-2xl shadow overflow-hidden flex flex-col flex-1 min-h-0", children: [
    /* @__PURE__ */ ge.jsx("div", { className: "kary_btns_div flex items-center justify-between border-b px-3 py-2", children: /* @__PURE__ */ ge.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ ge.jsx("button", { onClick: Rt, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "+ Zoom in" }),
      /* @__PURE__ */ ge.jsx("button", { onClick: Le, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "- Zoom out" }),
      /* @__PURE__ */ ge.jsx("button", { onClick: Ht, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50", children: "⟲ Reset" })
    ] }) }),
    /* @__PURE__ */ ge.jsxs("div", { className: "kary_graph_holder grid grid-cols-12 flex-1 min-h-0", children: [
      /* @__PURE__ */ ge.jsx("div", { className: "kary_graph col-span-9 border-r h-full min-h-0", children: /* @__PURE__ */ ge.jsxs("div", { className: "kary_svg_holder relative w-full h-full min-h-0 bg-gray-50", children: [
        /* @__PURE__ */ ge.jsx(
          "svg",
          {
            ref: Ne,
            className: "absolute inset-0 w-full h-full block",
            onWheel: _e,
            onPointerDown: it,
            onPointerMove: je,
            onPointerUp: De
          }
        ),
        !sk($e) && !Re.length && /* @__PURE__ */ ge.jsx("div", { className: "absolute inset-0 grid place-items-center pointer-events-none", children: /* @__PURE__ */ ge.jsxs("div", { className: "text-center text-gray-500", children: [
          /* @__PURE__ */ ge.jsx("div", { className: "mb-2 text-2xl", children: "⬆" }),
          /* @__PURE__ */ ge.jsx("p", { className: "font-medium", children: "Drop karyotype + BED here" }),
          /* @__PURE__ */ ge.jsx("p", { className: "text-sm", children: "or use the upload buttons" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ ge.jsx("div", { className: "col-span-3 h-full min-h-0 overflow-hidden p-3 flex flex-col justify-end", children: Dt.length ? /* @__PURE__ */ ge.jsx("div", { className: "family-scroll mt-auto", children: /* @__PURE__ */ ge.jsx("div", { className: "karyo_btns", children: Dt.map((Q) => /* @__PURE__ */ ge.jsx(
        "button",
        {
          onClick: () => {
            const fe = new Set(Tt);
            fe.has(Q) ? fe.delete(Q) : fe.add(Q), It(fe);
          },
          className: `w-full flex items-center gap-3 px-3 py-2 rounded-xl border ${Tt.has(Q) ? "hover:opacity-70" : "bg-gray-100 opacity-70"}`,
          style: { background: jt.get(Q) || "#10b981" },
          children: /* @__PURE__ */ ge.jsx("span", { className: "text-sm font-medium flex-1 text-left break-words", children: Q })
        },
        Q
      )) }) }) : /* @__PURE__ */ ge.jsx("div", { className: "text-sm text-gray-500 p-2 mt-auto", children: "Legend appears after loading BED rows that match chromosomes in the karyotype file." }) })
    ] })
  ] });
}
function sk(A) {
  return Array.isArray(A) && A.length > 0;
}
function ck(A, I, b, Qe, Pe, Ne, g = !0) {
  if (!g) {
    const De = A, $e = A + Qe, Re = I, rt = I + b, we = Math.min(Qe / 2, 8);
    return [
      `M ${De} ${Re + we}`,
      `Q ${De} ${Re} ${De + we} ${Re}`,
      `L ${$e - we} ${Re}`,
      `Q ${$e} ${Re} ${$e} ${Re + we}`,
      `L ${$e} ${rt - we}`,
      `Q ${$e} ${rt} ${$e - we} ${rt}`,
      `L ${De + we} ${rt}`,
      `Q ${De} ${rt} ${De} ${rt - we}`,
      `L ${De} ${Re + we}`,
      "Z"
    ].join(" ");
  }
  const Be = A + Qe / 2, X = A, q = A + Qe, Ce = I, W = I + b;
  let ae = Math.max(Ce, Math.min(Pe, Ne)), J = Math.min(W, Math.max(Pe, Ne));
  const ie = 4, ye = Qe * 0.45, _e = Math.min(ye * 0.25, 6), it = Math.max(ae, Ce + ie), je = Math.min(J, W - ie);
  return [
    `M ${X} ${Ce + ie}`,
    `Q ${X} ${Ce} ${X + ie} ${Ce}`,
    `L ${q - ie} ${Ce}`,
    `Q ${q} ${Ce} ${q} ${Ce + ie}`,
    `L ${q} ${it - _e}`,
    `Q ${q} ${it} ${Be + ye / 2 + _e} ${it}`,
    `Q ${Be + ye / 2} ${it} ${Be + ye / 2} ${it + _e}`,
    `L ${Be + ye / 2} ${je - _e}`,
    `Q ${Be + ye / 2} ${je} ${Be + ye / 2 + _e} ${je}`,
    `Q ${q} ${je} ${q} ${je + _e}`,
    `L ${q} ${W - ie}`,
    `Q ${q} ${W} ${q - ie} ${W}`,
    `L ${X + ie} ${W}`,
    `Q ${X} ${W} ${X} ${W - ie}`,
    `L ${X} ${je + _e}`,
    `Q ${X} ${je} ${Be - ye / 2 - _e} ${je}`,
    `Q ${Be - ye / 2} ${je} ${Be - ye / 2} ${je - _e}`,
    `L ${Be - ye / 2} ${it + _e}`,
    `Q ${Be - ye / 2} ${it} ${Be - ye / 2 - _e} ${it}`,
    `Q ${X} ${it} ${X} ${it - _e}`,
    `L ${X} ${Ce + ie}`,
    "Z"
  ].join(" ");
}
function oT(A) {
  return String(A || "").trim().replace(/^chrom(?:osome)?/i, "").replace(/^chr/i, "").trim().toLowerCase();
}
function fk(A) {
  const I = [], b = String(A).split(/\r?\n/);
  for (let Qe = 0; Qe < b.length; Qe++) {
    const Pe = String(b[Qe] || "").trim();
    if (!Pe || /^#/.test(Pe)) continue;
    const Ne = Pe.split(/\t|,|\s+/).filter(Boolean);
    if (Ne.length < 5) continue;
    const g = Ne[1], Be = Ne[2];
    if (/start/i.test(g) || /end/i.test(Be) || /ce[_-]?start/i.test(Pe)) continue;
    const [q, Ce, W, ae, J] = Ne, ie = String(q).trim(), ye = oT(ie), _e = Vm(Ce), it = Vm(W), je = Vm(ae), De = Vm(J);
    [_e, it, je, De].some(($e) => !isFinite($e)) || I.push({ key: ye, label: ie, start: _e, end: it, ceStart: je, ceEnd: De });
  }
  return I;
}
function dk(A) {
  const I = [], b = String(A).split(/\r?\n/);
  for (const Qe of b) {
    const Pe = String(Qe).trim();
    if (!Pe || /^#/.test(Pe)) continue;
    const Ne = Pe.split(/\t|\s+/);
    if (Ne.length < 5) continue;
    const [g, Be, X, q, Ce] = Ne, W = oT(g), ae = +Be, J = +X;
    if (!isFinite(ae) || !isFinite(J)) continue;
    const ie = ae + 1, ye = J;
    I.push({ key: W, start: ie, end: ye, name: q, family: Ce, raw: Pe });
  }
  return I;
}
function pk(A, I) {
  return `hsl(${A * 360 / Math.max(1, I) % 360} 70% 45%)`;
}
function Ds(A, I, b) {
  return Math.max(I, Math.min(b, A));
}
function Vm(A) {
  const b = +String(A).replace(/,/g, "");
  return isFinite(b) ? b : NaN;
}
function vk(A) {
  const I = String(A).trim().match(/^hsl\(\s*([-\d.]+)\s+([-\d.]+)%\s+([-\d.]+)%\s*\)$/i);
  return I ? {
    h: (Number(I[1]) % 360 + 360) % 360,
    s: Ds(Number(I[2]), 0, 100),
    l: Ds(Number(I[3]), 0, 100)
  } : null;
}
function hk({ h: A, s: I, l: b }) {
  return `hsl(${A} ${I}% ${b}%)`;
}
function mk(A, I, b) {
  const Qe = vk(A);
  if (!Qe) return A;
  const Pe = Math.max(1, b - 1), Ne = Pe === 0 ? 0.5 : I / Pe, g = Ds(Qe.l - 18, 10, 90), Be = Ds(Qe.l + 18, 10, 90), X = g + (Be - g) * Ne, q = Ds(Qe.s - 8, 35, 95), Ce = Ds(Qe.s + 4, 35, 95), W = Ce - (Ce - q) * Ne;
  return hk({ h: Qe.h, s: Math.round(W), l: Math.round(X) });
}
const sT = document.getElementById("karyotype_div");
if (!sT)
  throw new Error('Missing <div id="karyotype_div"> in your HTML/template');
const yk = y0(sT);
yk.render(
  /* @__PURE__ */ ge.jsx(Tf.StrictMode, { children: /* @__PURE__ */ ge.jsx(rk, {}) })
);
