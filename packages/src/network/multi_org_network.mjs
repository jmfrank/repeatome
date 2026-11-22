function wk(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var T0 = { exports: {} }, rv = {}, b0 = { exports: {} }, Kt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pw;
function Rk() {
  if (pw) return Kt;
  pw = 1;
  var E = Symbol.for("react.element"), w = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), y = Symbol.for("react.context"), xe = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), j = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), Z = Symbol.iterator;
  function X(M) {
    return M === null || typeof M != "object" ? null : (M = Z && M[Z] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var B = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ce = Object.assign, J = {};
  function q(M, ae, Xe) {
    this.props = M, this.context = ae, this.refs = J, this.updater = Xe || B;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(M, ae) {
    if (typeof M != "object" && typeof M != "function" && M != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, ae, "setState");
  }, q.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function ve() {
  }
  ve.prototype = q.prototype;
  function he(M, ae, Xe) {
    this.props = M, this.context = ae, this.refs = J, this.updater = Xe || B;
  }
  var Re = he.prototype = new ve();
  Re.constructor = he, Ce(Re, q.prototype), Re.isPureReactComponent = !0;
  var Se = Array.isArray, Te = Object.prototype.hasOwnProperty, Je = { current: null }, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function mt(M, ae, Xe) {
    var Qe, Ot = {}, _t = null, Rt = null;
    if (ae != null) for (Qe in ae.ref !== void 0 && (Rt = ae.ref), ae.key !== void 0 && (_t = "" + ae.key), ae) Te.call(ae, Qe) && !Pe.hasOwnProperty(Qe) && (Ot[Qe] = ae[Qe]);
    var kt = arguments.length - 2;
    if (kt === 1) Ot.children = Xe;
    else if (1 < kt) {
      for (var Tt = Array(kt), tn = 0; tn < kt; tn++) Tt[tn] = arguments[tn + 2];
      Ot.children = Tt;
    }
    if (M && M.defaultProps) for (Qe in kt = M.defaultProps, kt) Ot[Qe] === void 0 && (Ot[Qe] = kt[Qe]);
    return { $$typeof: E, type: M, key: _t, ref: Rt, props: Ot, _owner: Je.current };
  }
  function xt(M, ae) {
    return { $$typeof: E, type: M.type, key: ae, ref: M.ref, props: M.props, _owner: M._owner };
  }
  function lt(M) {
    return typeof M == "object" && M !== null && M.$$typeof === E;
  }
  function Vt(M) {
    var ae = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(Xe) {
      return ae[Xe];
    });
  }
  var wt = /\/+/g;
  function ue(M, ae) {
    return typeof M == "object" && M !== null && M.key != null ? Vt("" + M.key) : ae.toString(36);
  }
  function jt(M, ae, Xe, Qe, Ot) {
    var _t = typeof M;
    (_t === "undefined" || _t === "boolean") && (M = null);
    var Rt = !1;
    if (M === null) Rt = !0;
    else switch (_t) {
      case "string":
      case "number":
        Rt = !0;
        break;
      case "object":
        switch (M.$$typeof) {
          case E:
          case w:
            Rt = !0;
        }
    }
    if (Rt) return Rt = M, Ot = Ot(Rt), M = Qe === "" ? "." + ue(Rt, 0) : Qe, Se(Ot) ? (Xe = "", M != null && (Xe = M.replace(wt, "$&/") + "/"), jt(Ot, ae, Xe, "", function(tn) {
      return tn;
    })) : Ot != null && (lt(Ot) && (Ot = xt(Ot, Xe + (!Ot.key || Rt && Rt.key === Ot.key ? "" : ("" + Ot.key).replace(wt, "$&/") + "/") + M)), ae.push(Ot)), 1;
    if (Rt = 0, Qe = Qe === "" ? "." : Qe + ":", Se(M)) for (var kt = 0; kt < M.length; kt++) {
      _t = M[kt];
      var Tt = Qe + ue(_t, kt);
      Rt += jt(_t, ae, Xe, Tt, Ot);
    }
    else if (Tt = X(M), typeof Tt == "function") for (M = Tt.call(M), kt = 0; !(_t = M.next()).done; ) _t = _t.value, Tt = Qe + ue(_t, kt++), Rt += jt(_t, ae, Xe, Tt, Ot);
    else if (_t === "object") throw ae = String(M), Error("Objects are not valid as a React child (found: " + (ae === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : ae) + "). If you meant to render a collection of children, use an array instead.");
    return Rt;
  }
  function $t(M, ae, Xe) {
    if (M == null) return M;
    var Qe = [], Ot = 0;
    return jt(M, Qe, "", "", function(_t) {
      return ae.call(Xe, _t, Ot++);
    }), Qe;
  }
  function It(M) {
    if (M._status === -1) {
      var ae = M._result;
      ae = ae(), ae.then(function(Xe) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = Xe);
      }, function(Xe) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = Xe);
      }), M._status === -1 && (M._status = 0, M._result = ae);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var He = { current: null }, fe = { transition: null }, Ve = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: fe, ReactCurrentOwner: Je };
  function be() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Kt.Children = { map: $t, forEach: function(M, ae, Xe) {
    $t(M, function() {
      ae.apply(this, arguments);
    }, Xe);
  }, count: function(M) {
    var ae = 0;
    return $t(M, function() {
      ae++;
    }), ae;
  }, toArray: function(M) {
    return $t(M, function(ae) {
      return ae;
    }) || [];
  }, only: function(M) {
    if (!lt(M)) throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } }, Kt.Component = q, Kt.Fragment = C, Kt.Profiler = H, Kt.PureComponent = he, Kt.StrictMode = P, Kt.Suspense = re, Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ve, Kt.act = be, Kt.cloneElement = function(M, ae, Xe) {
    if (M == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
    var Qe = Ce({}, M.props), Ot = M.key, _t = M.ref, Rt = M._owner;
    if (ae != null) {
      if (ae.ref !== void 0 && (_t = ae.ref, Rt = Je.current), ae.key !== void 0 && (Ot = "" + ae.key), M.type && M.type.defaultProps) var kt = M.type.defaultProps;
      for (Tt in ae) Te.call(ae, Tt) && !Pe.hasOwnProperty(Tt) && (Qe[Tt] = ae[Tt] === void 0 && kt !== void 0 ? kt[Tt] : ae[Tt]);
    }
    var Tt = arguments.length - 2;
    if (Tt === 1) Qe.children = Xe;
    else if (1 < Tt) {
      kt = Array(Tt);
      for (var tn = 0; tn < Tt; tn++) kt[tn] = arguments[tn + 2];
      Qe.children = kt;
    }
    return { $$typeof: E, type: M.type, key: Ot, ref: _t, props: Qe, _owner: Rt };
  }, Kt.createContext = function(M) {
    return M = { $$typeof: y, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, M.Provider = { $$typeof: K, _context: M }, M.Consumer = M;
  }, Kt.createElement = mt, Kt.createFactory = function(M) {
    var ae = mt.bind(null, M);
    return ae.type = M, ae;
  }, Kt.createRef = function() {
    return { current: null };
  }, Kt.forwardRef = function(M) {
    return { $$typeof: xe, render: M };
  }, Kt.isValidElement = lt, Kt.lazy = function(M) {
    return { $$typeof: Ee, _payload: { _status: -1, _result: M }, _init: It };
  }, Kt.memo = function(M, ae) {
    return { $$typeof: j, type: M, compare: ae === void 0 ? null : ae };
  }, Kt.startTransition = function(M) {
    var ae = fe.transition;
    fe.transition = {};
    try {
      M();
    } finally {
      fe.transition = ae;
    }
  }, Kt.unstable_act = be, Kt.useCallback = function(M, ae) {
    return He.current.useCallback(M, ae);
  }, Kt.useContext = function(M) {
    return He.current.useContext(M);
  }, Kt.useDebugValue = function() {
  }, Kt.useDeferredValue = function(M) {
    return He.current.useDeferredValue(M);
  }, Kt.useEffect = function(M, ae) {
    return He.current.useEffect(M, ae);
  }, Kt.useId = function() {
    return He.current.useId();
  }, Kt.useImperativeHandle = function(M, ae, Xe) {
    return He.current.useImperativeHandle(M, ae, Xe);
  }, Kt.useInsertionEffect = function(M, ae) {
    return He.current.useInsertionEffect(M, ae);
  }, Kt.useLayoutEffect = function(M, ae) {
    return He.current.useLayoutEffect(M, ae);
  }, Kt.useMemo = function(M, ae) {
    return He.current.useMemo(M, ae);
  }, Kt.useReducer = function(M, ae, Xe) {
    return He.current.useReducer(M, ae, Xe);
  }, Kt.useRef = function(M) {
    return He.current.useRef(M);
  }, Kt.useState = function(M) {
    return He.current.useState(M);
  }, Kt.useSyncExternalStore = function(M, ae, Xe) {
    return He.current.useSyncExternalStore(M, ae, Xe);
  }, Kt.useTransition = function() {
    return He.current.useTransition();
  }, Kt.version = "18.3.1", Kt;
}
var lv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
lv.exports;
var vw;
function Tk() {
  return vw || (vw = 1, function(E, w) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var C = "18.3.1", P = Symbol.for("react.element"), H = Symbol.for("react.portal"), K = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), xe = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), j = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), q = Symbol.iterator, ve = "@@iterator";
      function he(h) {
        if (h === null || typeof h != "object")
          return null;
        var T = q && h[q] || h[ve];
        return typeof T == "function" ? T : null;
      }
      var Re = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Se = {
        transition: null
      }, Te = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Je = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Pe = {}, mt = null;
      function xt(h) {
        mt = h;
      }
      Pe.setExtraStackFrame = function(h) {
        mt = h;
      }, Pe.getCurrentStack = null, Pe.getStackAddendum = function() {
        var h = "";
        mt && (h += mt);
        var T = Pe.getCurrentStack;
        return T && (h += T() || ""), h;
      };
      var lt = !1, Vt = !1, wt = !1, ue = !1, jt = !1, $t = {
        ReactCurrentDispatcher: Re,
        ReactCurrentBatchConfig: Se,
        ReactCurrentOwner: Je
      };
      $t.ReactDebugCurrentFrame = Pe, $t.ReactCurrentActQueue = Te;
      function It(h) {
        {
          for (var T = arguments.length, $ = new Array(T > 1 ? T - 1 : 0), W = 1; W < T; W++)
            $[W - 1] = arguments[W];
          fe("warn", h, $);
        }
      }
      function He(h) {
        {
          for (var T = arguments.length, $ = new Array(T > 1 ? T - 1 : 0), W = 1; W < T; W++)
            $[W - 1] = arguments[W];
          fe("error", h, $);
        }
      }
      function fe(h, T, $) {
        {
          var W = $t.ReactDebugCurrentFrame, we = W.getStackAddendum();
          we !== "" && (T += "%s", $ = $.concat([we]));
          var rt = $.map(function(ke) {
            return String(ke);
          });
          rt.unshift("Warning: " + T), Function.prototype.apply.call(console[h], console, rt);
        }
      }
      var Ve = {};
      function be(h, T) {
        {
          var $ = h.constructor, W = $ && ($.displayName || $.name) || "ReactClass", we = W + "." + T;
          if (Ve[we])
            return;
          He("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", T, W), Ve[we] = !0;
        }
      }
      var M = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, T, $) {
          be(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, T, $, W) {
          be(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, T, $, W) {
          be(h, "setState");
        }
      }, ae = Object.assign, Xe = {};
      Object.freeze(Xe);
      function Qe(h, T, $) {
        this.props = h, this.context = T, this.refs = Xe, this.updater = $ || M;
      }
      Qe.prototype.isReactComponent = {}, Qe.prototype.setState = function(h, T) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, T, "setState");
      }, Qe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Ot = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, _t = function(h, T) {
          Object.defineProperty(Qe.prototype, h, {
            get: function() {
              It("%s(...) is deprecated in plain JavaScript React classes. %s", T[0], T[1]);
            }
          });
        };
        for (var Rt in Ot)
          Ot.hasOwnProperty(Rt) && _t(Rt, Ot[Rt]);
      }
      function kt() {
      }
      kt.prototype = Qe.prototype;
      function Tt(h, T, $) {
        this.props = h, this.context = T, this.refs = Xe, this.updater = $ || M;
      }
      var tn = Tt.prototype = new kt();
      tn.constructor = Tt, ae(tn, Qe.prototype), tn.isPureReactComponent = !0;
      function An() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var dr = Array.isArray;
      function Rn(h) {
        return dr(h);
      }
      function Qn(h) {
        {
          var T = typeof Symbol == "function" && Symbol.toStringTag, $ = T && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return $;
        }
      }
      function Un(h) {
        try {
          return jn(h), !1;
        } catch {
          return !0;
        }
      }
      function jn(h) {
        return "" + h;
      }
      function Sr(h) {
        if (Un(h))
          return He("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qn(h)), jn(h);
      }
      function Ra(h, T, $) {
        var W = h.displayName;
        if (W)
          return W;
        var we = T.displayName || T.name || "";
        return we !== "" ? $ + "(" + we + ")" : $;
      }
      function Ar(h) {
        return h.displayName || "Context";
      }
      function Pn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && He("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case K:
            return "Fragment";
          case H:
            return "Portal";
          case xe:
            return "Profiler";
          case y:
            return "StrictMode";
          case Z:
            return "Suspense";
          case X:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case j:
              var T = h;
              return Ar(T) + ".Consumer";
            case re:
              var $ = h;
              return Ar($._context) + ".Provider";
            case Ee:
              return Ra(h, h.render, "ForwardRef");
            case B:
              var W = h.displayName || null;
              return W !== null ? W : Pn(h.type) || "Memo";
            case Ce: {
              var we = h, rt = we._payload, ke = we._init;
              try {
                return Pn(ke(rt));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tn = Object.prototype.hasOwnProperty, Fn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ar, ia, _;
      _ = {};
      function G(h) {
        if (Tn.call(h, "ref")) {
          var T = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (T && T.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function oe(h) {
        if (Tn.call(h, "key")) {
          var T = Object.getOwnPropertyDescriptor(h, "key").get;
          if (T && T.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function De(h, T) {
        var $ = function() {
          ar || (ar = !0, He("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        $.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: $,
          configurable: !0
        });
      }
      function Oe(h, T) {
        var $ = function() {
          ia || (ia = !0, He("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        $.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: $,
          configurable: !0
        });
      }
      function z(h) {
        if (typeof h.ref == "string" && Je.current && h.__self && Je.current.stateNode !== h.__self) {
          var T = Pn(Je.current.type);
          _[T] || (He('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T, h.ref), _[T] = !0);
        }
      }
      var Q = function(h, T, $, W, we, rt, ke) {
        var ot = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: P,
          // Built-in properties that belong on the element
          type: h,
          key: T,
          ref: $,
          props: ke,
          // Record the component responsible for creating this element.
          _owner: rt
        };
        return ot._store = {}, Object.defineProperty(ot._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ot, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: W
        }), Object.defineProperty(ot, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: we
        }), Object.freeze && (Object.freeze(ot.props), Object.freeze(ot)), ot;
      };
      function me(h, T, $) {
        var W, we = {}, rt = null, ke = null, ot = null, Ht = null;
        if (T != null) {
          G(T) && (ke = T.ref, z(T)), oe(T) && (Sr(T.key), rt = "" + T.key), ot = T.__self === void 0 ? null : T.__self, Ht = T.__source === void 0 ? null : T.__source;
          for (W in T)
            Tn.call(T, W) && !Fn.hasOwnProperty(W) && (we[W] = T[W]);
        }
        var Jt = arguments.length - 2;
        if (Jt === 1)
          we.children = $;
        else if (Jt > 1) {
          for (var Sn = Array(Jt), pn = 0; pn < Jt; pn++)
            Sn[pn] = arguments[pn + 2];
          Object.freeze && Object.freeze(Sn), we.children = Sn;
        }
        if (h && h.defaultProps) {
          var Nt = h.defaultProps;
          for (W in Nt)
            we[W] === void 0 && (we[W] = Nt[W]);
        }
        if (rt || ke) {
          var vn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          rt && De(we, vn), ke && Oe(we, vn);
        }
        return Q(h, rt, ke, ot, Ht, Je.current, we);
      }
      function Ke(h, T) {
        var $ = Q(h.type, T, h.ref, h._self, h._source, h._owner, h.props);
        return $;
      }
      function ut(h, T, $) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var W, we = ae({}, h.props), rt = h.key, ke = h.ref, ot = h._self, Ht = h._source, Jt = h._owner;
        if (T != null) {
          G(T) && (ke = T.ref, Jt = Je.current), oe(T) && (Sr(T.key), rt = "" + T.key);
          var Sn;
          h.type && h.type.defaultProps && (Sn = h.type.defaultProps);
          for (W in T)
            Tn.call(T, W) && !Fn.hasOwnProperty(W) && (T[W] === void 0 && Sn !== void 0 ? we[W] = Sn[W] : we[W] = T[W]);
        }
        var pn = arguments.length - 2;
        if (pn === 1)
          we.children = $;
        else if (pn > 1) {
          for (var Nt = Array(pn), vn = 0; vn < pn; vn++)
            Nt[vn] = arguments[vn + 2];
          we.children = Nt;
        }
        return Q(h.type, rt, ke, ot, Ht, Jt, we);
      }
      function Et(h) {
        return typeof h == "object" && h !== null && h.$$typeof === P;
      }
      var gt = ".", dt = ":";
      function Mt(h) {
        var T = /[=:]/g, $ = {
          "=": "=0",
          ":": "=2"
        }, W = h.replace(T, function(we) {
          return $[we];
        });
        return "$" + W;
      }
      var Lt = !1, zt = /\/+/g;
      function qt(h) {
        return h.replace(zt, "$&/");
      }
      function Yt(h, T) {
        return typeof h == "object" && h !== null && h.key != null ? (Sr(h.key), Mt("" + h.key)) : T.toString(36);
      }
      function Cn(h, T, $, W, we) {
        var rt = typeof h;
        (rt === "undefined" || rt === "boolean") && (h = null);
        var ke = !1;
        if (h === null)
          ke = !0;
        else
          switch (rt) {
            case "string":
            case "number":
              ke = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case P:
                case H:
                  ke = !0;
              }
          }
        if (ke) {
          var ot = h, Ht = we(ot), Jt = W === "" ? gt + Yt(ot, 0) : W;
          if (Rn(Ht)) {
            var Sn = "";
            Jt != null && (Sn = qt(Jt) + "/"), Cn(Ht, T, Sn, "", function(td) {
              return td;
            });
          } else Ht != null && (Et(Ht) && (Ht.key && (!ot || ot.key !== Ht.key) && Sr(Ht.key), Ht = Ke(
            Ht,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            $ + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ht.key && (!ot || ot.key !== Ht.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              qt("" + Ht.key) + "/"
            ) : "") + Jt
          )), T.push(Ht));
          return 1;
        }
        var pn, Nt, vn = 0, On = W === "" ? gt : W + dt;
        if (Rn(h))
          for (var _l = 0; _l < h.length; _l++)
            pn = h[_l], Nt = On + Yt(pn, _l), vn += Cn(pn, T, $, Nt, we);
        else {
          var Zo = he(h);
          if (typeof Zo == "function") {
            var Gi = h;
            Zo === Gi.entries && (Lt || It("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Lt = !0);
            for (var Jo = Zo.call(Gi), cu, ed = 0; !(cu = Jo.next()).done; )
              pn = cu.value, Nt = On + Yt(pn, ed++), vn += Cn(pn, T, $, Nt, we);
          } else if (rt === "object") {
            var pc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (pc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : pc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return vn;
      }
      function Dn(h, T, $) {
        if (h == null)
          return h;
        var W = [], we = 0;
        return Cn(h, W, "", "", function(rt) {
          return T.call($, rt, we++);
        }), W;
      }
      function pr(h) {
        var T = 0;
        return Dn(h, function() {
          T++;
        }), T;
      }
      function Er(h, T, $) {
        Dn(h, function() {
          T.apply(this, arguments);
        }, $);
      }
      function Vr(h) {
        return Dn(h, function(T) {
          return T;
        }) || [];
      }
      function Ba(h) {
        if (!Et(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Cr(h) {
        var T = {
          $$typeof: j,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        T.Provider = {
          $$typeof: re,
          _context: T
        };
        var $ = !1, W = !1, we = !1;
        {
          var rt = {
            $$typeof: j,
            _context: T
          };
          Object.defineProperties(rt, {
            Provider: {
              get: function() {
                return W || (W = !0, He("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), T.Provider;
              },
              set: function(ke) {
                T.Provider = ke;
              }
            },
            _currentValue: {
              get: function() {
                return T._currentValue;
              },
              set: function(ke) {
                T._currentValue = ke;
              }
            },
            _currentValue2: {
              get: function() {
                return T._currentValue2;
              },
              set: function(ke) {
                T._currentValue2 = ke;
              }
            },
            _threadCount: {
              get: function() {
                return T._threadCount;
              },
              set: function(ke) {
                T._threadCount = ke;
              }
            },
            Consumer: {
              get: function() {
                return $ || ($ = !0, He("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), T.Consumer;
              }
            },
            displayName: {
              get: function() {
                return T.displayName;
              },
              set: function(ke) {
                we || (It("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ke), we = !0);
              }
            }
          }), T.Consumer = rt;
        }
        return T._currentRenderer = null, T._currentRenderer2 = null, T;
      }
      var bn = -1, ir = 0, Vn = 1, $a = 2;
      function Ta(h) {
        if (h._status === bn) {
          var T = h._result, $ = T();
          if ($.then(function(rt) {
            if (h._status === ir || h._status === bn) {
              var ke = h;
              ke._status = Vn, ke._result = rt;
            }
          }, function(rt) {
            if (h._status === ir || h._status === bn) {
              var ke = h;
              ke._status = $a, ke._result = rt;
            }
          }), h._status === bn) {
            var W = h;
            W._status = ir, W._result = $;
          }
        }
        if (h._status === Vn) {
          var we = h._result;
          return we === void 0 && He(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, we), "default" in we || He(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, we), we.default;
        } else
          throw h._result;
      }
      function ba(h) {
        var T = {
          // We use these fields to store the result.
          _status: bn,
          _result: h
        }, $ = {
          $$typeof: Ce,
          _payload: T,
          _init: Ta
        };
        {
          var W, we;
          Object.defineProperties($, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return W;
              },
              set: function(rt) {
                He("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), W = rt, Object.defineProperty($, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return we;
              },
              set: function(rt) {
                He("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), we = rt, Object.defineProperty($, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return $;
      }
      function _a(h) {
        h != null && h.$$typeof === B ? He("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? He("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && He("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && He("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var T = {
          $$typeof: Ee,
          render: h
        };
        {
          var $;
          Object.defineProperty(T, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return $;
            },
            set: function(W) {
              $ = W, !h.name && !h.displayName && (h.displayName = W);
            }
          });
        }
        return T;
      }
      var g;
      g = Symbol.for("react.module.reference");
      function L(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === K || h === xe || jt || h === y || h === Z || h === X || ue || h === J || lt || Vt || wt || typeof h == "object" && h !== null && (h.$$typeof === Ce || h.$$typeof === B || h.$$typeof === re || h.$$typeof === j || h.$$typeof === Ee || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === g || h.getModuleId !== void 0));
      }
      function ne(h, T) {
        L(h) || He("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var $ = {
          $$typeof: B,
          type: h,
          compare: T === void 0 ? null : T
        };
        {
          var W;
          Object.defineProperty($, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(we) {
              W = we, !h.name && !h.displayName && (h.displayName = we);
            }
          });
        }
        return $;
      }
      function le() {
        var h = Re.current;
        return h === null && He(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ue(h) {
        var T = le();
        if (h._context !== void 0) {
          var $ = h._context;
          $.Consumer === h ? He("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : $.Provider === h && He("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return T.useContext(h);
      }
      function Ge(h) {
        var T = le();
        return T.useState(h);
      }
      function We(h, T, $) {
        var W = le();
        return W.useReducer(h, T, $);
      }
      function et(h) {
        var T = le();
        return T.useRef(h);
      }
      function At(h, T) {
        var $ = le();
        return $.useEffect(h, T);
      }
      function Ft(h, T) {
        var $ = le();
        return $.useInsertionEffect(h, T);
      }
      function nn(h, T) {
        var $ = le();
        return $.useLayoutEffect(h, T);
      }
      function lr(h, T) {
        var $ = le();
        return $.useCallback(h, T);
      }
      function la(h, T) {
        var $ = le();
        return $.useMemo(h, T);
      }
      function Ur(h, T, $) {
        var W = le();
        return W.useImperativeHandle(h, T, $);
      }
      function pt(h, T) {
        {
          var $ = le();
          return $.useDebugValue(h, T);
        }
      }
      function bt() {
        var h = le();
        return h.useTransition();
      }
      function Br(h) {
        var T = le();
        return T.useDeferredValue(h);
      }
      function au() {
        var h = le();
        return h.useId();
      }
      function iu(h, T, $) {
        var W = le();
        return W.useSyncExternalStore(h, T, $);
      }
      var El = 0, Gu, Cl, ua, Qo, $r, fc, dc;
      function Xu() {
      }
      Xu.__reactDisabledLog = !0;
      function xl() {
        {
          if (El === 0) {
            Gu = console.log, Cl = console.info, ua = console.warn, Qo = console.error, $r = console.group, fc = console.groupCollapsed, dc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Xu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          El++;
        }
      }
      function ka() {
        {
          if (El--, El === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ae({}, h, {
                value: Gu
              }),
              info: ae({}, h, {
                value: Cl
              }),
              warn: ae({}, h, {
                value: ua
              }),
              error: ae({}, h, {
                value: Qo
              }),
              group: ae({}, h, {
                value: $r
              }),
              groupCollapsed: ae({}, h, {
                value: fc
              }),
              groupEnd: ae({}, h, {
                value: dc
              })
            });
          }
          El < 0 && He("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ci = $t.ReactCurrentDispatcher, fi;
      function qu(h, T, $) {
        {
          if (fi === void 0)
            try {
              throw Error();
            } catch (we) {
              var W = we.stack.trim().match(/\n( *(at )?)/);
              fi = W && W[1] || "";
            }
          return `
` + fi + h;
        }
      }
      var lu = !1, wl;
      {
        var Zu = typeof WeakMap == "function" ? WeakMap : Map;
        wl = new Zu();
      }
      function Ju(h, T) {
        if (!h || lu)
          return "";
        {
          var $ = wl.get(h);
          if ($ !== void 0)
            return $;
        }
        var W;
        lu = !0;
        var we = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var rt;
        rt = ci.current, ci.current = null, xl();
        try {
          if (T) {
            var ke = function() {
              throw Error();
            };
            if (Object.defineProperty(ke.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ke, []);
              } catch (On) {
                W = On;
              }
              Reflect.construct(h, [], ke);
            } else {
              try {
                ke.call();
              } catch (On) {
                W = On;
              }
              h.call(ke.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (On) {
              W = On;
            }
            h();
          }
        } catch (On) {
          if (On && W && typeof On.stack == "string") {
            for (var ot = On.stack.split(`
`), Ht = W.stack.split(`
`), Jt = ot.length - 1, Sn = Ht.length - 1; Jt >= 1 && Sn >= 0 && ot[Jt] !== Ht[Sn]; )
              Sn--;
            for (; Jt >= 1 && Sn >= 0; Jt--, Sn--)
              if (ot[Jt] !== Ht[Sn]) {
                if (Jt !== 1 || Sn !== 1)
                  do
                    if (Jt--, Sn--, Sn < 0 || ot[Jt] !== Ht[Sn]) {
                      var pn = `
` + ot[Jt].replace(" at new ", " at ");
                      return h.displayName && pn.includes("<anonymous>") && (pn = pn.replace("<anonymous>", h.displayName)), typeof h == "function" && wl.set(h, pn), pn;
                    }
                  while (Jt >= 1 && Sn >= 0);
                break;
              }
          }
        } finally {
          lu = !1, ci.current = rt, ka(), Error.prepareStackTrace = we;
        }
        var Nt = h ? h.displayName || h.name : "", vn = Nt ? qu(Nt) : "";
        return typeof h == "function" && wl.set(h, vn), vn;
      }
      function Wi(h, T, $) {
        return Ju(h, !1);
      }
      function Zf(h) {
        var T = h.prototype;
        return !!(T && T.isReactComponent);
      }
      function Qi(h, T, $) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Ju(h, Zf(h));
        if (typeof h == "string")
          return qu(h);
        switch (h) {
          case Z:
            return qu("Suspense");
          case X:
            return qu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ee:
              return Wi(h.render);
            case B:
              return Qi(h.type, T, $);
            case Ce: {
              var W = h, we = W._payload, rt = W._init;
              try {
                return Qi(rt(we), T, $);
              } catch {
              }
            }
          }
        return "";
      }
      var rn = {}, eo = $t.ReactDebugCurrentFrame;
      function Zt(h) {
        if (h) {
          var T = h._owner, $ = Qi(h.type, h._source, T ? T.type : null);
          eo.setExtraStackFrame($);
        } else
          eo.setExtraStackFrame(null);
      }
      function Go(h, T, $, W, we) {
        {
          var rt = Function.call.bind(Tn);
          for (var ke in h)
            if (rt(h, ke)) {
              var ot = void 0;
              try {
                if (typeof h[ke] != "function") {
                  var Ht = Error((W || "React class") + ": " + $ + " type `" + ke + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ke] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ht.name = "Invariant Violation", Ht;
                }
                ot = h[ke](T, ke, W, $, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Jt) {
                ot = Jt;
              }
              ot && !(ot instanceof Error) && (Zt(we), He("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", $, ke, typeof ot), Zt(null)), ot instanceof Error && !(ot.message in rn) && (rn[ot.message] = !0, Zt(we), He("Failed %s type: %s", $, ot.message), Zt(null));
            }
        }
      }
      function wi(h) {
        if (h) {
          var T = h._owner, $ = Qi(h.type, h._source, T ? T.type : null);
          xt($);
        } else
          xt(null);
      }
      var yt;
      yt = !1;
      function to() {
        if (Je.current) {
          var h = Pn(Je.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function xr(h) {
        if (h !== void 0) {
          var T = h.fileName.replace(/^.*[\\\/]/, ""), $ = h.lineNumber;
          return `

Check your code at ` + T + ":" + $ + ".";
        }
        return "";
      }
      function Ri(h) {
        return h != null ? xr(h.__source) : "";
      }
      var Ir = {};
      function Ti(h) {
        var T = to();
        if (!T) {
          var $ = typeof h == "string" ? h : h.displayName || h.name;
          $ && (T = `

Check the top-level render call using <` + $ + ">.");
        }
        return T;
      }
      function xn(h, T) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var $ = Ti(T);
          if (!Ir[$]) {
            Ir[$] = !0;
            var W = "";
            h && h._owner && h._owner !== Je.current && (W = " It was passed a child from " + Pn(h._owner.type) + "."), wi(h), He('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', $, W), wi(null);
          }
        }
      }
      function dn(h, T) {
        if (typeof h == "object") {
          if (Rn(h))
            for (var $ = 0; $ < h.length; $++) {
              var W = h[$];
              Et(W) && xn(W, T);
            }
          else if (Et(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var we = he(h);
            if (typeof we == "function" && we !== h.entries)
              for (var rt = we.call(h), ke; !(ke = rt.next()).done; )
                Et(ke.value) && xn(ke.value, T);
          }
        }
      }
      function Rl(h) {
        {
          var T = h.type;
          if (T == null || typeof T == "string")
            return;
          var $;
          if (typeof T == "function")
            $ = T.propTypes;
          else if (typeof T == "object" && (T.$$typeof === Ee || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          T.$$typeof === B))
            $ = T.propTypes;
          else
            return;
          if ($) {
            var W = Pn(T);
            Go($, h.props, "prop", W, h);
          } else if (T.PropTypes !== void 0 && !yt) {
            yt = !0;
            var we = Pn(T);
            He("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
          }
          typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && He("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ur(h) {
        {
          for (var T = Object.keys(h.props), $ = 0; $ < T.length; $++) {
            var W = T[$];
            if (W !== "children" && W !== "key") {
              wi(h), He("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), wi(null);
              break;
            }
          }
          h.ref !== null && (wi(h), He("Invalid attribute `ref` supplied to `React.Fragment`."), wi(null));
        }
      }
      function Yr(h, T, $) {
        var W = L(h);
        if (!W) {
          var we = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (we += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var rt = Ri(T);
          rt ? we += rt : we += to();
          var ke;
          h === null ? ke = "null" : Rn(h) ? ke = "array" : h !== void 0 && h.$$typeof === P ? (ke = "<" + (Pn(h.type) || "Unknown") + " />", we = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof h, He("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, we);
        }
        var ot = me.apply(this, arguments);
        if (ot == null)
          return ot;
        if (W)
          for (var Ht = 2; Ht < arguments.length; Ht++)
            dn(arguments[Ht], h);
        return h === K ? ur(ot) : Rl(ot), ot;
      }
      var Ia = !1;
      function uu(h) {
        var T = Yr.bind(null, h);
        return T.type = h, Ia || (Ia = !0, It("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(T, "type", {
          enumerable: !1,
          get: function() {
            return It("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), T;
      }
      function Xo(h, T, $) {
        for (var W = ut.apply(this, arguments), we = 2; we < arguments.length; we++)
          dn(arguments[we], W.type);
        return Rl(W), W;
      }
      function qo(h, T) {
        var $ = Se.transition;
        Se.transition = {};
        var W = Se.transition;
        Se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Se.transition = $, $ === null && W._updatedFibers) {
            var we = W._updatedFibers.size;
            we > 10 && It("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), W._updatedFibers.clear();
          }
        }
      }
      var Tl = !1, ou = null;
      function Jf(h) {
        if (ou === null)
          try {
            var T = ("require" + Math.random()).slice(0, 7), $ = E && E[T];
            ou = $.call(E, "timers").setImmediate;
          } catch {
            ou = function(we) {
              Tl === !1 && (Tl = !0, typeof MessageChannel > "u" && He("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var rt = new MessageChannel();
              rt.port1.onmessage = we, rt.port2.postMessage(void 0);
            };
          }
        return ou(h);
      }
      var Ya = 0, di = !1;
      function bi(h) {
        {
          var T = Ya;
          Ya++, Te.current === null && (Te.current = []);
          var $ = Te.isBatchingLegacy, W;
          try {
            if (Te.isBatchingLegacy = !0, W = h(), !$ && Te.didScheduleLegacyUpdate) {
              var we = Te.current;
              we !== null && (Te.didScheduleLegacyUpdate = !1, bl(we));
            }
          } catch (Nt) {
            throw Ka(T), Nt;
          } finally {
            Te.isBatchingLegacy = $;
          }
          if (W !== null && typeof W == "object" && typeof W.then == "function") {
            var rt = W, ke = !1, ot = {
              then: function(Nt, vn) {
                ke = !0, rt.then(function(On) {
                  Ka(T), Ya === 0 ? no(On, Nt, vn) : Nt(On);
                }, function(On) {
                  Ka(T), vn(On);
                });
              }
            };
            return !di && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ke || (di = !0, He("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ot;
          } else {
            var Ht = W;
            if (Ka(T), Ya === 0) {
              var Jt = Te.current;
              Jt !== null && (bl(Jt), Te.current = null);
              var Sn = {
                then: function(Nt, vn) {
                  Te.current === null ? (Te.current = [], no(Ht, Nt, vn)) : Nt(Ht);
                }
              };
              return Sn;
            } else {
              var pn = {
                then: function(Nt, vn) {
                  Nt(Ht);
                }
              };
              return pn;
            }
          }
        }
      }
      function Ka(h) {
        h !== Ya - 1 && He("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ya = h;
      }
      function no(h, T, $) {
        {
          var W = Te.current;
          if (W !== null)
            try {
              bl(W), Jf(function() {
                W.length === 0 ? (Te.current = null, T(h)) : no(h, T, $);
              });
            } catch (we) {
              $(we);
            }
          else
            T(h);
        }
      }
      var ro = !1;
      function bl(h) {
        if (!ro) {
          ro = !0;
          var T = 0;
          try {
            for (; T < h.length; T++) {
              var $ = h[T];
              do
                $ = $(!0);
              while ($ !== null);
            }
            h.length = 0;
          } catch (W) {
            throw h = h.slice(T + 1), W;
          } finally {
            ro = !1;
          }
        }
      }
      var su = Yr, ao = Xo, io = uu, pi = {
        map: Dn,
        forEach: Er,
        count: pr,
        toArray: Vr,
        only: Ba
      };
      w.Children = pi, w.Component = Qe, w.Fragment = K, w.Profiler = xe, w.PureComponent = Tt, w.StrictMode = y, w.Suspense = Z, w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $t, w.act = bi, w.cloneElement = ao, w.createContext = Cr, w.createElement = su, w.createFactory = io, w.createRef = An, w.forwardRef = _a, w.isValidElement = Et, w.lazy = ba, w.memo = ne, w.startTransition = qo, w.unstable_act = bi, w.useCallback = lr, w.useContext = Ue, w.useDebugValue = pt, w.useDeferredValue = Br, w.useEffect = At, w.useId = au, w.useImperativeHandle = Ur, w.useInsertionEffect = Ft, w.useLayoutEffect = nn, w.useMemo = la, w.useReducer = We, w.useRef = et, w.useState = Ge, w.useSyncExternalStore = iu, w.useTransition = bt, w.version = C, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(lv, lv.exports)), lv.exports;
}
process.env.NODE_ENV === "production" ? b0.exports = Rk() : b0.exports = Tk();
var Pt = b0.exports;
const bk = /* @__PURE__ */ wk(Pt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hw;
function _k() {
  if (hw) return rv;
  hw = 1;
  var E = Pt, w = Symbol.for("react.element"), C = Symbol.for("react.fragment"), P = Object.prototype.hasOwnProperty, H = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, K = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(xe, re, j) {
    var Ee, Z = {}, X = null, B = null;
    j !== void 0 && (X = "" + j), re.key !== void 0 && (X = "" + re.key), re.ref !== void 0 && (B = re.ref);
    for (Ee in re) P.call(re, Ee) && !K.hasOwnProperty(Ee) && (Z[Ee] = re[Ee]);
    if (xe && xe.defaultProps) for (Ee in re = xe.defaultProps, re) Z[Ee] === void 0 && (Z[Ee] = re[Ee]);
    return { $$typeof: w, type: xe, key: X, ref: B, props: Z, _owner: H.current };
  }
  return rv.Fragment = C, rv.jsx = y, rv.jsxs = y, rv;
}
var av = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mw;
function kk() {
  return mw || (mw = 1, process.env.NODE_ENV !== "production" && function() {
    var E = Pt, w = Symbol.for("react.element"), C = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), xe = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), Ee = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), Ce = Symbol.iterator, J = "@@iterator";
    function q(g) {
      if (g === null || typeof g != "object")
        return null;
      var L = Ce && g[Ce] || g[J];
      return typeof L == "function" ? L : null;
    }
    var ve = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function he(g) {
      {
        for (var L = arguments.length, ne = new Array(L > 1 ? L - 1 : 0), le = 1; le < L; le++)
          ne[le - 1] = arguments[le];
        Re("error", g, ne);
      }
    }
    function Re(g, L, ne) {
      {
        var le = ve.ReactDebugCurrentFrame, Ue = le.getStackAddendum();
        Ue !== "" && (L += "%s", ne = ne.concat([Ue]));
        var Ge = ne.map(function(We) {
          return String(We);
        });
        Ge.unshift("Warning: " + L), Function.prototype.apply.call(console[g], console, Ge);
      }
    }
    var Se = !1, Te = !1, Je = !1, Pe = !1, mt = !1, xt;
    xt = Symbol.for("react.module.reference");
    function lt(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === P || g === K || mt || g === H || g === j || g === Ee || Pe || g === B || Se || Te || Je || typeof g == "object" && g !== null && (g.$$typeof === X || g.$$typeof === Z || g.$$typeof === y || g.$$typeof === xe || g.$$typeof === re || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === xt || g.getModuleId !== void 0));
    }
    function Vt(g, L, ne) {
      var le = g.displayName;
      if (le)
        return le;
      var Ue = L.displayName || L.name || "";
      return Ue !== "" ? ne + "(" + Ue + ")" : ne;
    }
    function wt(g) {
      return g.displayName || "Context";
    }
    function ue(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && he("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case P:
          return "Fragment";
        case C:
          return "Portal";
        case K:
          return "Profiler";
        case H:
          return "StrictMode";
        case j:
          return "Suspense";
        case Ee:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case xe:
            var L = g;
            return wt(L) + ".Consumer";
          case y:
            var ne = g;
            return wt(ne._context) + ".Provider";
          case re:
            return Vt(g, g.render, "ForwardRef");
          case Z:
            var le = g.displayName || null;
            return le !== null ? le : ue(g.type) || "Memo";
          case X: {
            var Ue = g, Ge = Ue._payload, We = Ue._init;
            try {
              return ue(We(Ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var jt = Object.assign, $t = 0, It, He, fe, Ve, be, M, ae;
    function Xe() {
    }
    Xe.__reactDisabledLog = !0;
    function Qe() {
      {
        if ($t === 0) {
          It = console.log, He = console.info, fe = console.warn, Ve = console.error, be = console.group, M = console.groupCollapsed, ae = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: Xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        $t++;
      }
    }
    function Ot() {
      {
        if ($t--, $t === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: jt({}, g, {
              value: It
            }),
            info: jt({}, g, {
              value: He
            }),
            warn: jt({}, g, {
              value: fe
            }),
            error: jt({}, g, {
              value: Ve
            }),
            group: jt({}, g, {
              value: be
            }),
            groupCollapsed: jt({}, g, {
              value: M
            }),
            groupEnd: jt({}, g, {
              value: ae
            })
          });
        }
        $t < 0 && he("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _t = ve.ReactCurrentDispatcher, Rt;
    function kt(g, L, ne) {
      {
        if (Rt === void 0)
          try {
            throw Error();
          } catch (Ue) {
            var le = Ue.stack.trim().match(/\n( *(at )?)/);
            Rt = le && le[1] || "";
          }
        return `
` + Rt + g;
      }
    }
    var Tt = !1, tn;
    {
      var An = typeof WeakMap == "function" ? WeakMap : Map;
      tn = new An();
    }
    function dr(g, L) {
      if (!g || Tt)
        return "";
      {
        var ne = tn.get(g);
        if (ne !== void 0)
          return ne;
      }
      var le;
      Tt = !0;
      var Ue = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ge;
      Ge = _t.current, _t.current = null, Qe();
      try {
        if (L) {
          var We = function() {
            throw Error();
          };
          if (Object.defineProperty(We.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(We, []);
            } catch (pt) {
              le = pt;
            }
            Reflect.construct(g, [], We);
          } else {
            try {
              We.call();
            } catch (pt) {
              le = pt;
            }
            g.call(We.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            le = pt;
          }
          g();
        }
      } catch (pt) {
        if (pt && le && typeof pt.stack == "string") {
          for (var et = pt.stack.split(`
`), At = le.stack.split(`
`), Ft = et.length - 1, nn = At.length - 1; Ft >= 1 && nn >= 0 && et[Ft] !== At[nn]; )
            nn--;
          for (; Ft >= 1 && nn >= 0; Ft--, nn--)
            if (et[Ft] !== At[nn]) {
              if (Ft !== 1 || nn !== 1)
                do
                  if (Ft--, nn--, nn < 0 || et[Ft] !== At[nn]) {
                    var lr = `
` + et[Ft].replace(" at new ", " at ");
                    return g.displayName && lr.includes("<anonymous>") && (lr = lr.replace("<anonymous>", g.displayName)), typeof g == "function" && tn.set(g, lr), lr;
                  }
                while (Ft >= 1 && nn >= 0);
              break;
            }
        }
      } finally {
        Tt = !1, _t.current = Ge, Ot(), Error.prepareStackTrace = Ue;
      }
      var la = g ? g.displayName || g.name : "", Ur = la ? kt(la) : "";
      return typeof g == "function" && tn.set(g, Ur), Ur;
    }
    function Rn(g, L, ne) {
      return dr(g, !1);
    }
    function Qn(g) {
      var L = g.prototype;
      return !!(L && L.isReactComponent);
    }
    function Un(g, L, ne) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return dr(g, Qn(g));
      if (typeof g == "string")
        return kt(g);
      switch (g) {
        case j:
          return kt("Suspense");
        case Ee:
          return kt("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case re:
            return Rn(g.render);
          case Z:
            return Un(g.type, L, ne);
          case X: {
            var le = g, Ue = le._payload, Ge = le._init;
            try {
              return Un(Ge(Ue), L, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var jn = Object.prototype.hasOwnProperty, Sr = {}, Ra = ve.ReactDebugCurrentFrame;
    function Ar(g) {
      if (g) {
        var L = g._owner, ne = Un(g.type, g._source, L ? L.type : null);
        Ra.setExtraStackFrame(ne);
      } else
        Ra.setExtraStackFrame(null);
    }
    function Pn(g, L, ne, le, Ue) {
      {
        var Ge = Function.call.bind(jn);
        for (var We in g)
          if (Ge(g, We)) {
            var et = void 0;
            try {
              if (typeof g[We] != "function") {
                var At = Error((le || "React class") + ": " + ne + " type `" + We + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[We] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw At.name = "Invariant Violation", At;
              }
              et = g[We](L, We, le, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ft) {
              et = Ft;
            }
            et && !(et instanceof Error) && (Ar(Ue), he("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", ne, We, typeof et), Ar(null)), et instanceof Error && !(et.message in Sr) && (Sr[et.message] = !0, Ar(Ue), he("Failed %s type: %s", ne, et.message), Ar(null));
          }
      }
    }
    var Tn = Array.isArray;
    function Fn(g) {
      return Tn(g);
    }
    function ar(g) {
      {
        var L = typeof Symbol == "function" && Symbol.toStringTag, ne = L && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return ne;
      }
    }
    function ia(g) {
      try {
        return _(g), !1;
      } catch {
        return !0;
      }
    }
    function _(g) {
      return "" + g;
    }
    function G(g) {
      if (ia(g))
        return he("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(g)), _(g);
    }
    var oe = ve.ReactCurrentOwner, De = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, z;
    function Q(g) {
      if (jn.call(g, "ref")) {
        var L = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function me(g) {
      if (jn.call(g, "key")) {
        var L = Object.getOwnPropertyDescriptor(g, "key").get;
        if (L && L.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Ke(g, L) {
      typeof g.ref == "string" && oe.current;
    }
    function ut(g, L) {
      {
        var ne = function() {
          Oe || (Oe = !0, he("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        ne.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function Et(g, L) {
      {
        var ne = function() {
          z || (z = !0, he("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", L));
        };
        ne.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var gt = function(g, L, ne, le, Ue, Ge, We) {
      var et = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: g,
        key: L,
        ref: ne,
        props: We,
        // Record the component responsible for creating this element.
        _owner: Ge
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
        value: le
      }), Object.defineProperty(et, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ue
      }), Object.freeze && (Object.freeze(et.props), Object.freeze(et)), et;
    };
    function dt(g, L, ne, le, Ue) {
      {
        var Ge, We = {}, et = null, At = null;
        ne !== void 0 && (G(ne), et = "" + ne), me(L) && (G(L.key), et = "" + L.key), Q(L) && (At = L.ref, Ke(L, Ue));
        for (Ge in L)
          jn.call(L, Ge) && !De.hasOwnProperty(Ge) && (We[Ge] = L[Ge]);
        if (g && g.defaultProps) {
          var Ft = g.defaultProps;
          for (Ge in Ft)
            We[Ge] === void 0 && (We[Ge] = Ft[Ge]);
        }
        if (et || At) {
          var nn = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          et && ut(We, nn), At && Et(We, nn);
        }
        return gt(g, et, At, Ue, le, oe.current, We);
      }
    }
    var Mt = ve.ReactCurrentOwner, Lt = ve.ReactDebugCurrentFrame;
    function zt(g) {
      if (g) {
        var L = g._owner, ne = Un(g.type, g._source, L ? L.type : null);
        Lt.setExtraStackFrame(ne);
      } else
        Lt.setExtraStackFrame(null);
    }
    var qt;
    qt = !1;
    function Yt(g) {
      return typeof g == "object" && g !== null && g.$$typeof === w;
    }
    function Cn() {
      {
        if (Mt.current) {
          var g = ue(Mt.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Dn(g) {
      return "";
    }
    var pr = {};
    function Er(g) {
      {
        var L = Cn();
        if (!L) {
          var ne = typeof g == "string" ? g : g.displayName || g.name;
          ne && (L = `

Check the top-level render call using <` + ne + ">.");
        }
        return L;
      }
    }
    function Vr(g, L) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var ne = Er(L);
        if (pr[ne])
          return;
        pr[ne] = !0;
        var le = "";
        g && g._owner && g._owner !== Mt.current && (le = " It was passed a child from " + ue(g._owner.type) + "."), zt(g), he('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, le), zt(null);
      }
    }
    function Ba(g, L) {
      {
        if (typeof g != "object")
          return;
        if (Fn(g))
          for (var ne = 0; ne < g.length; ne++) {
            var le = g[ne];
            Yt(le) && Vr(le, L);
          }
        else if (Yt(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var Ue = q(g);
          if (typeof Ue == "function" && Ue !== g.entries)
            for (var Ge = Ue.call(g), We; !(We = Ge.next()).done; )
              Yt(We.value) && Vr(We.value, L);
        }
      }
    }
    function Cr(g) {
      {
        var L = g.type;
        if (L == null || typeof L == "string")
          return;
        var ne;
        if (typeof L == "function")
          ne = L.propTypes;
        else if (typeof L == "object" && (L.$$typeof === re || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        L.$$typeof === Z))
          ne = L.propTypes;
        else
          return;
        if (ne) {
          var le = ue(L);
          Pn(ne, g.props, "prop", le, g);
        } else if (L.PropTypes !== void 0 && !qt) {
          qt = !0;
          var Ue = ue(L);
          he("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ue || "Unknown");
        }
        typeof L.getDefaultProps == "function" && !L.getDefaultProps.isReactClassApproved && he("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bn(g) {
      {
        for (var L = Object.keys(g.props), ne = 0; ne < L.length; ne++) {
          var le = L[ne];
          if (le !== "children" && le !== "key") {
            zt(g), he("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), zt(null);
            break;
          }
        }
        g.ref !== null && (zt(g), he("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var ir = {};
    function Vn(g, L, ne, le, Ue, Ge) {
      {
        var We = lt(g);
        if (!We) {
          var et = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var At = Dn();
          At ? et += At : et += Cn();
          var Ft;
          g === null ? Ft = "null" : Fn(g) ? Ft = "array" : g !== void 0 && g.$$typeof === w ? (Ft = "<" + (ue(g.type) || "Unknown") + " />", et = " Did you accidentally export a JSX literal instead of a component?") : Ft = typeof g, he("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ft, et);
        }
        var nn = dt(g, L, ne, Ue, Ge);
        if (nn == null)
          return nn;
        if (We) {
          var lr = L.children;
          if (lr !== void 0)
            if (le)
              if (Fn(lr)) {
                for (var la = 0; la < lr.length; la++)
                  Ba(lr[la], g);
                Object.freeze && Object.freeze(lr);
              } else
                he("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ba(lr, g);
        }
        if (jn.call(L, "key")) {
          var Ur = ue(g), pt = Object.keys(L).filter(function(au) {
            return au !== "key";
          }), bt = pt.length > 0 ? "{key: someKey, " + pt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ir[Ur + bt]) {
            var Br = pt.length > 0 ? "{" + pt.join(": ..., ") + ": ...}" : "{}";
            he(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, bt, Ur, Br, Ur), ir[Ur + bt] = !0;
          }
        }
        return g === P ? bn(nn) : Cr(nn), nn;
      }
    }
    function $a(g, L, ne) {
      return Vn(g, L, ne, !0);
    }
    function Ta(g, L, ne) {
      return Vn(g, L, ne, !1);
    }
    var ba = Ta, _a = $a;
    av.Fragment = P, av.jsx = ba, av.jsxs = _a;
  }()), av;
}
process.env.NODE_ENV === "production" ? T0.exports = _k() : T0.exports = kk();
var ft = T0.exports, _0 = { exports: {} }, oi = {}, ty = { exports: {} }, w0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yw;
function Dk() {
  return yw || (yw = 1, function(E) {
    function w(fe, Ve) {
      var be = fe.length;
      fe.push(Ve);
      e: for (; 0 < be; ) {
        var M = be - 1 >>> 1, ae = fe[M];
        if (0 < H(ae, Ve)) fe[M] = Ve, fe[be] = ae, be = M;
        else break e;
      }
    }
    function C(fe) {
      return fe.length === 0 ? null : fe[0];
    }
    function P(fe) {
      if (fe.length === 0) return null;
      var Ve = fe[0], be = fe.pop();
      if (be !== Ve) {
        fe[0] = be;
        e: for (var M = 0, ae = fe.length, Xe = ae >>> 1; M < Xe; ) {
          var Qe = 2 * (M + 1) - 1, Ot = fe[Qe], _t = Qe + 1, Rt = fe[_t];
          if (0 > H(Ot, be)) _t < ae && 0 > H(Rt, Ot) ? (fe[M] = Rt, fe[_t] = be, M = _t) : (fe[M] = Ot, fe[Qe] = be, M = Qe);
          else if (_t < ae && 0 > H(Rt, be)) fe[M] = Rt, fe[_t] = be, M = _t;
          else break e;
        }
      }
      return Ve;
    }
    function H(fe, Ve) {
      var be = fe.sortIndex - Ve.sortIndex;
      return be !== 0 ? be : fe.id - Ve.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var K = performance;
      E.unstable_now = function() {
        return K.now();
      };
    } else {
      var y = Date, xe = y.now();
      E.unstable_now = function() {
        return y.now() - xe;
      };
    }
    var re = [], j = [], Ee = 1, Z = null, X = 3, B = !1, Ce = !1, J = !1, q = typeof setTimeout == "function" ? setTimeout : null, ve = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Re(fe) {
      for (var Ve = C(j); Ve !== null; ) {
        if (Ve.callback === null) P(j);
        else if (Ve.startTime <= fe) P(j), Ve.sortIndex = Ve.expirationTime, w(re, Ve);
        else break;
        Ve = C(j);
      }
    }
    function Se(fe) {
      if (J = !1, Re(fe), !Ce) if (C(re) !== null) Ce = !0, It(Te);
      else {
        var Ve = C(j);
        Ve !== null && He(Se, Ve.startTime - fe);
      }
    }
    function Te(fe, Ve) {
      Ce = !1, J && (J = !1, ve(mt), mt = -1), B = !0;
      var be = X;
      try {
        for (Re(Ve), Z = C(re); Z !== null && (!(Z.expirationTime > Ve) || fe && !Vt()); ) {
          var M = Z.callback;
          if (typeof M == "function") {
            Z.callback = null, X = Z.priorityLevel;
            var ae = M(Z.expirationTime <= Ve);
            Ve = E.unstable_now(), typeof ae == "function" ? Z.callback = ae : Z === C(re) && P(re), Re(Ve);
          } else P(re);
          Z = C(re);
        }
        if (Z !== null) var Xe = !0;
        else {
          var Qe = C(j);
          Qe !== null && He(Se, Qe.startTime - Ve), Xe = !1;
        }
        return Xe;
      } finally {
        Z = null, X = be, B = !1;
      }
    }
    var Je = !1, Pe = null, mt = -1, xt = 5, lt = -1;
    function Vt() {
      return !(E.unstable_now() - lt < xt);
    }
    function wt() {
      if (Pe !== null) {
        var fe = E.unstable_now();
        lt = fe;
        var Ve = !0;
        try {
          Ve = Pe(!0, fe);
        } finally {
          Ve ? ue() : (Je = !1, Pe = null);
        }
      } else Je = !1;
    }
    var ue;
    if (typeof he == "function") ue = function() {
      he(wt);
    };
    else if (typeof MessageChannel < "u") {
      var jt = new MessageChannel(), $t = jt.port2;
      jt.port1.onmessage = wt, ue = function() {
        $t.postMessage(null);
      };
    } else ue = function() {
      q(wt, 0);
    };
    function It(fe) {
      Pe = fe, Je || (Je = !0, ue());
    }
    function He(fe, Ve) {
      mt = q(function() {
        fe(E.unstable_now());
      }, Ve);
    }
    E.unstable_IdlePriority = 5, E.unstable_ImmediatePriority = 1, E.unstable_LowPriority = 4, E.unstable_NormalPriority = 3, E.unstable_Profiling = null, E.unstable_UserBlockingPriority = 2, E.unstable_cancelCallback = function(fe) {
      fe.callback = null;
    }, E.unstable_continueExecution = function() {
      Ce || B || (Ce = !0, It(Te));
    }, E.unstable_forceFrameRate = function(fe) {
      0 > fe || 125 < fe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xt = 0 < fe ? Math.floor(1e3 / fe) : 5;
    }, E.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, E.unstable_getFirstCallbackNode = function() {
      return C(re);
    }, E.unstable_next = function(fe) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var Ve = 3;
          break;
        default:
          Ve = X;
      }
      var be = X;
      X = Ve;
      try {
        return fe();
      } finally {
        X = be;
      }
    }, E.unstable_pauseExecution = function() {
    }, E.unstable_requestPaint = function() {
    }, E.unstable_runWithPriority = function(fe, Ve) {
      switch (fe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          fe = 3;
      }
      var be = X;
      X = fe;
      try {
        return Ve();
      } finally {
        X = be;
      }
    }, E.unstable_scheduleCallback = function(fe, Ve, be) {
      var M = E.unstable_now();
      switch (typeof be == "object" && be !== null ? (be = be.delay, be = typeof be == "number" && 0 < be ? M + be : M) : be = M, fe) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return ae = be + ae, fe = { id: Ee++, callback: Ve, priorityLevel: fe, startTime: be, expirationTime: ae, sortIndex: -1 }, be > M ? (fe.sortIndex = be, w(j, fe), C(re) === null && fe === C(j) && (J ? (ve(mt), mt = -1) : J = !0, He(Se, be - M))) : (fe.sortIndex = ae, w(re, fe), Ce || B || (Ce = !0, It(Te))), fe;
    }, E.unstable_shouldYield = Vt, E.unstable_wrapCallback = function(fe) {
      var Ve = X;
      return function() {
        var be = X;
        X = Ve;
        try {
          return fe.apply(this, arguments);
        } finally {
          X = be;
        }
      };
    };
  }(w0)), w0;
}
var R0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gw;
function Ok() {
  return gw || (gw = 1, function(E) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var w = !1, C = 5;
      function P(z, Q) {
        var me = z.length;
        z.push(Q), y(z, Q, me);
      }
      function H(z) {
        return z.length === 0 ? null : z[0];
      }
      function K(z) {
        if (z.length === 0)
          return null;
        var Q = z[0], me = z.pop();
        return me !== Q && (z[0] = me, xe(z, me, 0)), Q;
      }
      function y(z, Q, me) {
        for (var Ke = me; Ke > 0; ) {
          var ut = Ke - 1 >>> 1, Et = z[ut];
          if (re(Et, Q) > 0)
            z[ut] = Q, z[Ke] = Et, Ke = ut;
          else
            return;
        }
      }
      function xe(z, Q, me) {
        for (var Ke = me, ut = z.length, Et = ut >>> 1; Ke < Et; ) {
          var gt = (Ke + 1) * 2 - 1, dt = z[gt], Mt = gt + 1, Lt = z[Mt];
          if (re(dt, Q) < 0)
            Mt < ut && re(Lt, dt) < 0 ? (z[Ke] = Lt, z[Mt] = Q, Ke = Mt) : (z[Ke] = dt, z[gt] = Q, Ke = gt);
          else if (Mt < ut && re(Lt, Q) < 0)
            z[Ke] = Lt, z[Mt] = Q, Ke = Mt;
          else
            return;
        }
      }
      function re(z, Q) {
        var me = z.sortIndex - Q.sortIndex;
        return me !== 0 ? me : z.id - Q.id;
      }
      var j = 1, Ee = 2, Z = 3, X = 4, B = 5;
      function Ce(z, Q) {
      }
      var J = typeof performance == "object" && typeof performance.now == "function";
      if (J) {
        var q = performance;
        E.unstable_now = function() {
          return q.now();
        };
      } else {
        var ve = Date, he = ve.now();
        E.unstable_now = function() {
          return ve.now() - he;
        };
      }
      var Re = 1073741823, Se = -1, Te = 250, Je = 5e3, Pe = 1e4, mt = Re, xt = [], lt = [], Vt = 1, wt = null, ue = Z, jt = !1, $t = !1, It = !1, He = typeof setTimeout == "function" ? setTimeout : null, fe = typeof clearTimeout == "function" ? clearTimeout : null, Ve = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function be(z) {
        for (var Q = H(lt); Q !== null; ) {
          if (Q.callback === null)
            K(lt);
          else if (Q.startTime <= z)
            K(lt), Q.sortIndex = Q.expirationTime, P(xt, Q);
          else
            return;
          Q = H(lt);
        }
      }
      function M(z) {
        if (It = !1, be(z), !$t)
          if (H(xt) !== null)
            $t = !0, _(ae);
          else {
            var Q = H(lt);
            Q !== null && G(M, Q.startTime - z);
          }
      }
      function ae(z, Q) {
        $t = !1, It && (It = !1, oe()), jt = !0;
        var me = ue;
        try {
          var Ke;
          if (!w) return Xe(z, Q);
        } finally {
          wt = null, ue = me, jt = !1;
        }
      }
      function Xe(z, Q) {
        var me = Q;
        for (be(me), wt = H(xt); wt !== null && !(wt.expirationTime > me && (!z || Ra())); ) {
          var Ke = wt.callback;
          if (typeof Ke == "function") {
            wt.callback = null, ue = wt.priorityLevel;
            var ut = wt.expirationTime <= me, Et = Ke(ut);
            me = E.unstable_now(), typeof Et == "function" ? wt.callback = Et : wt === H(xt) && K(xt), be(me);
          } else
            K(xt);
          wt = H(xt);
        }
        if (wt !== null)
          return !0;
        var gt = H(lt);
        return gt !== null && G(M, gt.startTime - me), !1;
      }
      function Qe(z, Q) {
        switch (z) {
          case j:
          case Ee:
          case Z:
          case X:
          case B:
            break;
          default:
            z = Z;
        }
        var me = ue;
        ue = z;
        try {
          return Q();
        } finally {
          ue = me;
        }
      }
      function Ot(z) {
        var Q;
        switch (ue) {
          case j:
          case Ee:
          case Z:
            Q = Z;
            break;
          default:
            Q = ue;
            break;
        }
        var me = ue;
        ue = Q;
        try {
          return z();
        } finally {
          ue = me;
        }
      }
      function _t(z) {
        var Q = ue;
        return function() {
          var me = ue;
          ue = Q;
          try {
            return z.apply(this, arguments);
          } finally {
            ue = me;
          }
        };
      }
      function Rt(z, Q, me) {
        var Ke = E.unstable_now(), ut;
        if (typeof me == "object" && me !== null) {
          var Et = me.delay;
          typeof Et == "number" && Et > 0 ? ut = Ke + Et : ut = Ke;
        } else
          ut = Ke;
        var gt;
        switch (z) {
          case j:
            gt = Se;
            break;
          case Ee:
            gt = Te;
            break;
          case B:
            gt = mt;
            break;
          case X:
            gt = Pe;
            break;
          case Z:
          default:
            gt = Je;
            break;
        }
        var dt = ut + gt, Mt = {
          id: Vt++,
          callback: Q,
          priorityLevel: z,
          startTime: ut,
          expirationTime: dt,
          sortIndex: -1
        };
        return ut > Ke ? (Mt.sortIndex = ut, P(lt, Mt), H(xt) === null && Mt === H(lt) && (It ? oe() : It = !0, G(M, ut - Ke))) : (Mt.sortIndex = dt, P(xt, Mt), !$t && !jt && ($t = !0, _(ae))), Mt;
      }
      function kt() {
      }
      function Tt() {
        !$t && !jt && ($t = !0, _(ae));
      }
      function tn() {
        return H(xt);
      }
      function An(z) {
        z.callback = null;
      }
      function dr() {
        return ue;
      }
      var Rn = !1, Qn = null, Un = -1, jn = C, Sr = -1;
      function Ra() {
        var z = E.unstable_now() - Sr;
        return !(z < jn);
      }
      function Ar() {
      }
      function Pn(z) {
        if (z < 0 || z > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        z > 0 ? jn = Math.floor(1e3 / z) : jn = C;
      }
      var Tn = function() {
        if (Qn !== null) {
          var z = E.unstable_now();
          Sr = z;
          var Q = !0, me = !0;
          try {
            me = Qn(Q, z);
          } finally {
            me ? Fn() : (Rn = !1, Qn = null);
          }
        } else
          Rn = !1;
      }, Fn;
      if (typeof Ve == "function")
        Fn = function() {
          Ve(Tn);
        };
      else if (typeof MessageChannel < "u") {
        var ar = new MessageChannel(), ia = ar.port2;
        ar.port1.onmessage = Tn, Fn = function() {
          ia.postMessage(null);
        };
      } else
        Fn = function() {
          He(Tn, 0);
        };
      function _(z) {
        Qn = z, Rn || (Rn = !0, Fn());
      }
      function G(z, Q) {
        Un = He(function() {
          z(E.unstable_now());
        }, Q);
      }
      function oe() {
        fe(Un), Un = -1;
      }
      var De = Ar, Oe = null;
      E.unstable_IdlePriority = B, E.unstable_ImmediatePriority = j, E.unstable_LowPriority = X, E.unstable_NormalPriority = Z, E.unstable_Profiling = Oe, E.unstable_UserBlockingPriority = Ee, E.unstable_cancelCallback = An, E.unstable_continueExecution = Tt, E.unstable_forceFrameRate = Pn, E.unstable_getCurrentPriorityLevel = dr, E.unstable_getFirstCallbackNode = tn, E.unstable_next = Ot, E.unstable_pauseExecution = kt, E.unstable_requestPaint = De, E.unstable_runWithPriority = Qe, E.unstable_scheduleCallback = Rt, E.unstable_shouldYield = Ra, E.unstable_wrapCallback = _t, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(R0)), R0;
}
var Sw;
function kw() {
  return Sw || (Sw = 1, process.env.NODE_ENV === "production" ? ty.exports = Dk() : ty.exports = Ok()), ty.exports;
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
var Ew;
function Mk() {
  if (Ew) return oi;
  Ew = 1;
  var E = Pt, w = kw();
  function C(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var P = /* @__PURE__ */ new Set(), H = {};
  function K(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (H[n] = r, n = 0; n < r.length; n++) P.add(r[n]);
  }
  var xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), re = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ee = {}, Z = {};
  function X(n) {
    return re.call(Z, n) ? !0 : re.call(Ee, n) ? !1 : j.test(n) ? Z[n] = !0 : (Ee[n] = !0, !1);
  }
  function B(n, r, l, o) {
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
  function Ce(n, r, l, o) {
    if (r === null || typeof r > "u" || B(n, r, l, o)) return !0;
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
  function J(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    q[n] = new J(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    q[r] = new J(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    q[n] = new J(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    q[n] = new J(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    q[n] = new J(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    q[n] = new J(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    q[n] = new J(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    q[n] = new J(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    q[n] = new J(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ve = /[\-:]([a-z])/g;
  function he(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ve,
      he
    );
    q[r] = new J(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ve, he);
    q[r] = new J(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ve, he);
    q[r] = new J(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    q[n] = new J(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), q.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    q[n] = new J(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Re(n, r, l, o) {
    var c = q.hasOwnProperty(r) ? q[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ce(r, l, c, o) && (l = null), o || c === null ? X(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Se = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Te = Symbol.for("react.element"), Je = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), mt = Symbol.for("react.strict_mode"), xt = Symbol.for("react.profiler"), lt = Symbol.for("react.provider"), Vt = Symbol.for("react.context"), wt = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), jt = Symbol.for("react.suspense_list"), $t = Symbol.for("react.memo"), It = Symbol.for("react.lazy"), He = Symbol.for("react.offscreen"), fe = Symbol.iterator;
  function Ve(n) {
    return n === null || typeof n != "object" ? null : (n = fe && n[fe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var be = Object.assign, M;
  function ae(n) {
    if (M === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      M = r && r[1] || "";
    }
    return `
` + M + n;
  }
  var Xe = !1;
  function Qe(n, r) {
    if (!n || Xe) return "";
    Xe = !0;
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
        } catch (I) {
          var o = I;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (I) {
          o = I;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (I) {
          o = I;
        }
        n();
      }
    } catch (I) {
      if (I && o && typeof I.stack == "string") {
        for (var c = I.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, R = d.length - 1; 1 <= m && 0 <= R && c[m] !== d[R]; ) R--;
        for (; 1 <= m && 0 <= R; m--, R--) if (c[m] !== d[R]) {
          if (m !== 1 || R !== 1)
            do
              if (m--, R--, 0 > R || c[m] !== d[R]) {
                var b = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", n.displayName)), b;
              }
            while (1 <= m && 0 <= R);
          break;
        }
      }
    } finally {
      Xe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ae(n) : "";
  }
  function Ot(n) {
    switch (n.tag) {
      case 5:
        return ae(n.type);
      case 16:
        return ae("Lazy");
      case 13:
        return ae("Suspense");
      case 19:
        return ae("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Qe(n.type, !1), n;
      case 11:
        return n = Qe(n.type.render, !1), n;
      case 1:
        return n = Qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function _t(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Pe:
        return "Fragment";
      case Je:
        return "Portal";
      case xt:
        return "Profiler";
      case mt:
        return "StrictMode";
      case ue:
        return "Suspense";
      case jt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Vt:
        return (n.displayName || "Context") + ".Consumer";
      case lt:
        return (n._context.displayName || "Context") + ".Provider";
      case wt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case $t:
        return r = n.displayName || null, r !== null ? r : _t(n.type) || "Memo";
      case It:
        r = n._payload, n = n._init;
        try {
          return _t(n(r));
        } catch {
        }
    }
    return null;
  }
  function Rt(n) {
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
        return _t(r);
      case 8:
        return r === mt ? "StrictMode" : "Mode";
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
  function kt(n) {
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
  function Tt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function tn(n) {
    var r = Tt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function An(n) {
    n._valueTracker || (n._valueTracker = tn(n));
  }
  function dr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Tt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Rn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Qn(n, r) {
    var l = r.checked;
    return be({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Un(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = kt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function jn(n, r) {
    r = r.checked, r != null && Re(n, "checked", r, !1);
  }
  function Sr(n, r) {
    jn(n, r);
    var l = kt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ar(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ar(n, r.type, kt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ra(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ar(n, r, l) {
    (r !== "number" || Rn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Pn = Array.isArray;
  function Tn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + kt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Fn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(C(91));
    return be({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ar(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(C(92));
        if (Pn(l)) {
          if (1 < l.length) throw Error(C(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: kt(l) };
  }
  function ia(n, r) {
    var l = kt(r.value), o = kt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function _(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function G(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function oe(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? G(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var De, Oe = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (De = De || document.createElement("div"), De.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = De.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function z(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Q = {
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
  }, me = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Q).forEach(function(n) {
    me.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Q[r] = Q[n];
    });
  });
  function Ke(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Q.hasOwnProperty(n) && Q[n] ? ("" + r).trim() : r + "px";
  }
  function ut(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ke(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Et = be({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function gt(n, r) {
    if (r) {
      if (Et[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(C(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(C(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(C(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(C(62));
    }
  }
  function dt(n, r) {
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
  var Mt = null;
  function Lt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var zt = null, qt = null, Yt = null;
  function Cn(n) {
    if (n = tt(n)) {
      if (typeof zt != "function") throw Error(C(280));
      var r = n.stateNode;
      r && (r = Mn(r), zt(n.stateNode, n.type, r));
    }
  }
  function Dn(n) {
    qt ? Yt ? Yt.push(n) : Yt = [n] : qt = n;
  }
  function pr() {
    if (qt) {
      var n = qt, r = Yt;
      if (Yt = qt = null, Cn(n), r) for (n = 0; n < r.length; n++) Cn(r[n]);
    }
  }
  function Er(n, r) {
    return n(r);
  }
  function Vr() {
  }
  var Ba = !1;
  function Cr(n, r, l) {
    if (Ba) return n(r, l);
    Ba = !0;
    try {
      return Er(n, r, l);
    } finally {
      Ba = !1, (qt !== null || Yt !== null) && (Vr(), pr());
    }
  }
  function bn(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Mn(l);
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
    if (l && typeof l != "function") throw Error(C(231, r, typeof l));
    return l;
  }
  var ir = !1;
  if (xe) try {
    var Vn = {};
    Object.defineProperty(Vn, "passive", { get: function() {
      ir = !0;
    } }), window.addEventListener("test", Vn, Vn), window.removeEventListener("test", Vn, Vn);
  } catch {
    ir = !1;
  }
  function $a(n, r, l, o, c, d, m, R, b) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, I);
    } catch (de) {
      this.onError(de);
    }
  }
  var Ta = !1, ba = null, _a = !1, g = null, L = { onError: function(n) {
    Ta = !0, ba = n;
  } };
  function ne(n, r, l, o, c, d, m, R, b) {
    Ta = !1, ba = null, $a.apply(L, arguments);
  }
  function le(n, r, l, o, c, d, m, R, b) {
    if (ne.apply(this, arguments), Ta) {
      if (Ta) {
        var I = ba;
        Ta = !1, ba = null;
      } else throw Error(C(198));
      _a || (_a = !0, g = I);
    }
  }
  function Ue(n) {
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
  function Ge(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function We(n) {
    if (Ue(n) !== n) throw Error(C(188));
  }
  function et(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ue(n), r === null) throw Error(C(188));
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
          if (d === l) return We(c), n;
          if (d === o) return We(c), r;
          d = d.sibling;
        }
        throw Error(C(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, R = c.child; R; ) {
          if (R === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (R === o) {
            m = !0, o = c, l = d;
            break;
          }
          R = R.sibling;
        }
        if (!m) {
          for (R = d.child; R; ) {
            if (R === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (R === o) {
              m = !0, o = d, l = c;
              break;
            }
            R = R.sibling;
          }
          if (!m) throw Error(C(189));
        }
      }
      if (l.alternate !== o) throw Error(C(190));
    }
    if (l.tag !== 3) throw Error(C(188));
    return l.stateNode.current === l ? n : r;
  }
  function At(n) {
    return n = et(n), n !== null ? Ft(n) : null;
  }
  function Ft(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Ft(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var nn = w.unstable_scheduleCallback, lr = w.unstable_cancelCallback, la = w.unstable_shouldYield, Ur = w.unstable_requestPaint, pt = w.unstable_now, bt = w.unstable_getCurrentPriorityLevel, Br = w.unstable_ImmediatePriority, au = w.unstable_UserBlockingPriority, iu = w.unstable_NormalPriority, El = w.unstable_LowPriority, Gu = w.unstable_IdlePriority, Cl = null, ua = null;
  function Qo(n) {
    if (ua && typeof ua.onCommitFiberRoot == "function") try {
      ua.onCommitFiberRoot(Cl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var $r = Math.clz32 ? Math.clz32 : Xu, fc = Math.log, dc = Math.LN2;
  function Xu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fc(n) / dc | 0) | 0;
  }
  var xl = 64, ka = 4194304;
  function ci(n) {
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
  function fi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var R = m & ~c;
      R !== 0 ? o = ci(R) : (d &= m, d !== 0 && (o = ci(d)));
    } else m = l & ~c, m !== 0 ? o = ci(m) : d !== 0 && (o = ci(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - $r(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function qu(n, r) {
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
  function lu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - $r(d), R = 1 << m, b = c[m];
      b === -1 ? (!(R & l) || R & o) && (c[m] = qu(R, r)) : b <= r && (n.expiredLanes |= R), d &= ~R;
    }
  }
  function wl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Zu() {
    var n = xl;
    return xl <<= 1, !(xl & 4194240) && (xl = 64), n;
  }
  function Ju(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Wi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - $r(r), n[r] = l;
  }
  function Zf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - $r(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Qi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - $r(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var rn = 0;
  function eo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Zt, Go, wi, yt, to, xr = !1, Ri = [], Ir = null, Ti = null, xn = null, dn = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map(), ur = [], Yr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ia(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ir = null;
        break;
      case "dragenter":
      case "dragleave":
        Ti = null;
        break;
      case "mouseover":
      case "mouseout":
        xn = null;
        break;
      case "pointerover":
      case "pointerout":
        dn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rl.delete(r.pointerId);
    }
  }
  function uu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = tt(r), r !== null && Go(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Xo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Ir = uu(Ir, n, r, l, o, c), !0;
      case "dragenter":
        return Ti = uu(Ti, n, r, l, o, c), !0;
      case "mouseover":
        return xn = uu(xn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return dn.set(d, uu(dn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Rl.set(d, uu(Rl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function qo(n) {
    var r = mu(n.target);
    if (r !== null) {
      var l = Ue(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ge(l), r !== null) {
            n.blockedOn = r, to(n.priority, function() {
              wi(l);
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
  function Tl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ao(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Mt = o, l.target.dispatchEvent(o), Mt = null;
      } else return r = tt(l), r !== null && Go(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function ou(n, r, l) {
    Tl(n) && l.delete(r);
  }
  function Jf() {
    xr = !1, Ir !== null && Tl(Ir) && (Ir = null), Ti !== null && Tl(Ti) && (Ti = null), xn !== null && Tl(xn) && (xn = null), dn.forEach(ou), Rl.forEach(ou);
  }
  function Ya(n, r) {
    n.blockedOn === r && (n.blockedOn = null, xr || (xr = !0, w.unstable_scheduleCallback(w.unstable_NormalPriority, Jf)));
  }
  function di(n) {
    function r(c) {
      return Ya(c, n);
    }
    if (0 < Ri.length) {
      Ya(Ri[0], n);
      for (var l = 1; l < Ri.length; l++) {
        var o = Ri[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Ir !== null && Ya(Ir, n), Ti !== null && Ya(Ti, n), xn !== null && Ya(xn, n), dn.forEach(r), Rl.forEach(r), l = 0; l < ur.length; l++) o = ur[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < ur.length && (l = ur[0], l.blockedOn === null); ) qo(l), l.blockedOn === null && ur.shift();
  }
  var bi = Se.ReactCurrentBatchConfig, Ka = !0;
  function no(n, r, l, o) {
    var c = rn, d = bi.transition;
    bi.transition = null;
    try {
      rn = 1, bl(n, r, l, o);
    } finally {
      rn = c, bi.transition = d;
    }
  }
  function ro(n, r, l, o) {
    var c = rn, d = bi.transition;
    bi.transition = null;
    try {
      rn = 4, bl(n, r, l, o);
    } finally {
      rn = c, bi.transition = d;
    }
  }
  function bl(n, r, l, o) {
    if (Ka) {
      var c = ao(n, r, l, o);
      if (c === null) Rc(n, r, o, su, l), Ia(n, o);
      else if (Xo(c, n, r, l, o)) o.stopPropagation();
      else if (Ia(n, o), r & 4 && -1 < Yr.indexOf(n)) {
        for (; c !== null; ) {
          var d = tt(c);
          if (d !== null && Zt(d), d = ao(n, r, l, o), d === null && Rc(n, r, o, su, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Rc(n, r, o, null, l);
    }
  }
  var su = null;
  function ao(n, r, l, o) {
    if (su = null, n = Lt(o), n = mu(n), n !== null) if (r = Ue(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ge(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return su = n, null;
  }
  function io(n) {
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
        switch (bt()) {
          case Br:
            return 1;
          case au:
            return 4;
          case iu:
          case El:
            return 16;
          case Gu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pi = null, h = null, T = null;
  function $() {
    if (T) return T;
    var n, r = h, l = r.length, o, c = "value" in pi ? pi.value : pi.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return T = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function W(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function we() {
    return !0;
  }
  function rt() {
    return !1;
  }
  function ke(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var R in n) n.hasOwnProperty(R) && (l = n[R], this[R] = l ? l(d) : d[R]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? we : rt, this.isPropagationStopped = rt, this;
    }
    return be(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = we);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = we);
    }, persist: function() {
    }, isPersistent: we }), r;
  }
  var ot = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ht = ke(ot), Jt = be({}, ot, { view: 0, detail: 0 }), Sn = ke(Jt), pn, Nt, vn, On = be({}, Jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ad, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== vn && (vn && n.type === "mousemove" ? (pn = n.screenX - vn.screenX, Nt = n.screenY - vn.screenY) : Nt = pn = 0, vn = n), pn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Nt;
  } }), _l = ke(On), Zo = be({}, On, { dataTransfer: 0 }), Gi = ke(Zo), Jo = be({}, Jt, { relatedTarget: 0 }), cu = ke(Jo), ed = be({}, ot, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = ke(ed), td = be({}, ot, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), cv = ke(td), nd = be({}, ot, { data: 0 }), rd = ke(nd), fv = {
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
  }, dv = {
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
  }, uy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Xi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = uy[n]) ? !!r[n] : !1;
  }
  function ad() {
    return Xi;
  }
  var id = be({}, Jt, { key: function(n) {
    if (n.key) {
      var r = fv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = W(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? dv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ad, charCode: function(n) {
    return n.type === "keypress" ? W(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? W(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ld = ke(id), ud = be({}, On, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pv = ke(ud), vc = be({}, Jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ad }), vv = ke(vc), oa = be({}, ot, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qi = ke(oa), Gn = be({}, On, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zi = ke(Gn), od = [9, 13, 27, 32], lo = xe && "CompositionEvent" in window, es = null;
  xe && "documentMode" in document && (es = document.documentMode);
  var ts = xe && "TextEvent" in window && !es, hv = xe && (!lo || es && 8 < es && 11 >= es), mv = " ", hc = !1;
  function yv(n, r) {
    switch (n) {
      case "keyup":
        return od.indexOf(r.keyCode) !== -1;
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
  function gv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var uo = !1;
  function Sv(n, r) {
    switch (n) {
      case "compositionend":
        return gv(r);
      case "keypress":
        return r.which !== 32 ? null : (hc = !0, mv);
      case "textInput":
        return n = r.data, n === mv && hc ? null : n;
      default:
        return null;
    }
  }
  function oy(n, r) {
    if (uo) return n === "compositionend" || !lo && yv(n, r) ? (n = $(), T = h = pi = null, uo = !1, n) : null;
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
        return hv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var sy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ev(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!sy[n.type] : r === "textarea";
  }
  function sd(n, r, l, o) {
    Dn(o), r = us(r, "onChange"), 0 < r.length && (l = new Ht("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var _i = null, fu = null;
  function Cv(n) {
    vu(n, 0);
  }
  function ns(n) {
    var r = hi(n);
    if (dr(r)) return n;
  }
  function cy(n, r) {
    if (n === "change") return r;
  }
  var xv = !1;
  if (xe) {
    var cd;
    if (xe) {
      var fd = "oninput" in document;
      if (!fd) {
        var wv = document.createElement("div");
        wv.setAttribute("oninput", "return;"), fd = typeof wv.oninput == "function";
      }
      cd = fd;
    } else cd = !1;
    xv = cd && (!document.documentMode || 9 < document.documentMode);
  }
  function Rv() {
    _i && (_i.detachEvent("onpropertychange", Tv), fu = _i = null);
  }
  function Tv(n) {
    if (n.propertyName === "value" && ns(fu)) {
      var r = [];
      sd(r, fu, n, Lt(n)), Cr(Cv, r);
    }
  }
  function fy(n, r, l) {
    n === "focusin" ? (Rv(), _i = r, fu = l, _i.attachEvent("onpropertychange", Tv)) : n === "focusout" && Rv();
  }
  function bv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ns(fu);
  }
  function dy(n, r) {
    if (n === "click") return ns(r);
  }
  function _v(n, r) {
    if (n === "input" || n === "change") return ns(r);
  }
  function py(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var vi = typeof Object.is == "function" ? Object.is : py;
  function rs(n, r) {
    if (vi(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!re.call(r, c) || !vi(n[c], r[c])) return !1;
    }
    return !0;
  }
  function kv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function mc(n, r) {
    var l = kv(n);
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
      l = kv(l);
    }
  }
  function kl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? kl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function as() {
    for (var n = window, r = Rn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Rn(n.document);
    }
    return r;
  }
  function yc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function oo(n) {
    var r = as(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && kl(l.ownerDocument.documentElement, l)) {
      if (o !== null && yc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = mc(l, d);
          var m = mc(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var vy = xe && "documentMode" in document && 11 >= document.documentMode, so = null, dd = null, is = null, pd = !1;
  function vd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pd || so == null || so !== Rn(o) || (o = so, "selectionStart" in o && yc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), is && rs(is, o) || (is = o, o = us(dd, "onSelect"), 0 < o.length && (r = new Ht("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = so)));
  }
  function gc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var du = { animationend: gc("Animation", "AnimationEnd"), animationiteration: gc("Animation", "AnimationIteration"), animationstart: gc("Animation", "AnimationStart"), transitionend: gc("Transition", "TransitionEnd") }, wr = {}, hd = {};
  xe && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete du.animationend.animation, delete du.animationiteration.animation, delete du.animationstart.animation), "TransitionEvent" in window || delete du.transitionend.transition);
  function Sc(n) {
    if (wr[n]) return wr[n];
    if (!du[n]) return n;
    var r = du[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in hd) return wr[n] = r[l];
    return n;
  }
  var Dv = Sc("animationend"), Ov = Sc("animationiteration"), Mv = Sc("animationstart"), Lv = Sc("transitionend"), md = /* @__PURE__ */ new Map(), Ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Wa(n, r) {
    md.set(n, r), K(r, [n]);
  }
  for (var yd = 0; yd < Ec.length; yd++) {
    var pu = Ec[yd], hy = pu.toLowerCase(), my = pu[0].toUpperCase() + pu.slice(1);
    Wa(hy, "on" + my);
  }
  Wa(Dv, "onAnimationEnd"), Wa(Ov, "onAnimationIteration"), Wa(Mv, "onAnimationStart"), Wa("dblclick", "onDoubleClick"), Wa("focusin", "onFocus"), Wa("focusout", "onBlur"), Wa(Lv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), K("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), K("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), K("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), K("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), K("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), K("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ls = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));
  function Cc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, le(o, r, void 0, n), n.currentTarget = null;
  }
  function vu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var R = o[m], b = R.instance, I = R.currentTarget;
          if (R = R.listener, b !== d && c.isPropagationStopped()) break e;
          Cc(c, R, I), d = b;
        }
        else for (m = 0; m < o.length; m++) {
          if (R = o[m], b = R.instance, I = R.currentTarget, R = R.listener, b !== d && c.isPropagationStopped()) break e;
          Cc(c, R, I), d = b;
        }
      }
    }
    if (_a) throw n = g, _a = !1, g = null, n;
  }
  function cn(n, r) {
    var l = r[cs];
    l === void 0 && (l = r[cs] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Nv(r, n, 2, !1), l.add(o));
  }
  function xc(n, r, l) {
    var o = 0;
    r && (o |= 4), Nv(l, n, o, r);
  }
  var wc = "_reactListening" + Math.random().toString(36).slice(2);
  function co(n) {
    if (!n[wc]) {
      n[wc] = !0, P.forEach(function(l) {
        l !== "selectionchange" && (gd.has(l) || xc(l, !1, n), xc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[wc] || (r[wc] = !0, xc("selectionchange", !1, r));
    }
  }
  function Nv(n, r, l, o) {
    switch (io(r)) {
      case 1:
        var c = no;
        break;
      case 4:
        c = ro;
        break;
      default:
        c = bl;
    }
    l = c.bind(null, r, l, n), c = void 0, !ir || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Rc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var R = o.stateNode.containerInfo;
        if (R === c || R.nodeType === 8 && R.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var b = m.tag;
          if ((b === 3 || b === 4) && (b = m.stateNode.containerInfo, b === c || b.nodeType === 8 && b.parentNode === c)) return;
          m = m.return;
        }
        for (; R !== null; ) {
          if (m = mu(R), m === null) return;
          if (b = m.tag, b === 5 || b === 6) {
            o = d = m;
            continue e;
          }
          R = R.parentNode;
        }
      }
      o = o.return;
    }
    Cr(function() {
      var I = d, de = Lt(l), ye = [];
      e: {
        var ce = md.get(n);
        if (ce !== void 0) {
          var ze = Ht, Be = n;
          switch (n) {
            case "keypress":
              if (W(l) === 0) break e;
            case "keydown":
            case "keyup":
              ze = ld;
              break;
            case "focusin":
              Be = "focus", ze = cu;
              break;
            case "focusout":
              Be = "blur", ze = cu;
              break;
            case "beforeblur":
            case "afterblur":
              ze = cu;
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
              ze = _l;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ze = Gi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ze = vv;
              break;
            case Dv:
            case Ov:
            case Mv:
              ze = pc;
              break;
            case Lv:
              ze = qi;
              break;
            case "scroll":
              ze = Sn;
              break;
            case "wheel":
              ze = Zi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ze = cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ze = pv;
          }
          var Ye = (r & 4) !== 0, Kn = !Ye && n === "scroll", N = Ye ? ce !== null ? ce + "Capture" : null : ce;
          Ye = [];
          for (var D = I, F; D !== null; ) {
            F = D;
            var pe = F.stateNode;
            if (F.tag === 5 && pe !== null && (F = pe, N !== null && (pe = bn(D, N), pe != null && Ye.push(fo(D, pe, F)))), Kn) break;
            D = D.return;
          }
          0 < Ye.length && (ce = new ze(ce, Be, null, l, de), ye.push({ event: ce, listeners: Ye }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ce = n === "mouseover" || n === "pointerover", ze = n === "mouseout" || n === "pointerout", ce && l !== Mt && (Be = l.relatedTarget || l.fromElement) && (mu(Be) || Be[Ji])) break e;
          if ((ze || ce) && (ce = de.window === de ? de : (ce = de.ownerDocument) ? ce.defaultView || ce.parentWindow : window, ze ? (Be = l.relatedTarget || l.toElement, ze = I, Be = Be ? mu(Be) : null, Be !== null && (Kn = Ue(Be), Be !== Kn || Be.tag !== 5 && Be.tag !== 6) && (Be = null)) : (ze = null, Be = I), ze !== Be)) {
            if (Ye = _l, pe = "onMouseLeave", N = "onMouseEnter", D = "mouse", (n === "pointerout" || n === "pointerover") && (Ye = pv, pe = "onPointerLeave", N = "onPointerEnter", D = "pointer"), Kn = ze == null ? ce : hi(ze), F = Be == null ? ce : hi(Be), ce = new Ye(pe, D + "leave", ze, l, de), ce.target = Kn, ce.relatedTarget = F, pe = null, mu(de) === I && (Ye = new Ye(N, D + "enter", Be, l, de), Ye.target = F, Ye.relatedTarget = Kn, pe = Ye), Kn = pe, ze && Be) t: {
              for (Ye = ze, N = Be, D = 0, F = Ye; F; F = Dl(F)) D++;
              for (F = 0, pe = N; pe; pe = Dl(pe)) F++;
              for (; 0 < D - F; ) Ye = Dl(Ye), D--;
              for (; 0 < F - D; ) N = Dl(N), F--;
              for (; D--; ) {
                if (Ye === N || N !== null && Ye === N.alternate) break t;
                Ye = Dl(Ye), N = Dl(N);
              }
              Ye = null;
            }
            else Ye = null;
            ze !== null && zv(ye, ce, ze, Ye, !1), Be !== null && Kn !== null && zv(ye, Kn, Be, Ye, !0);
          }
        }
        e: {
          if (ce = I ? hi(I) : window, ze = ce.nodeName && ce.nodeName.toLowerCase(), ze === "select" || ze === "input" && ce.type === "file") var $e = cy;
          else if (Ev(ce)) if (xv) $e = _v;
          else {
            $e = bv;
            var it = fy;
          }
          else (ze = ce.nodeName) && ze.toLowerCase() === "input" && (ce.type === "checkbox" || ce.type === "radio") && ($e = dy);
          if ($e && ($e = $e(n, I))) {
            sd(ye, $e, l, de);
            break e;
          }
          it && it(n, ce, I), n === "focusout" && (it = ce._wrapperState) && it.controlled && ce.type === "number" && Ar(ce, "number", ce.value);
        }
        switch (it = I ? hi(I) : window, n) {
          case "focusin":
            (Ev(it) || it.contentEditable === "true") && (so = it, dd = I, is = null);
            break;
          case "focusout":
            is = dd = so = null;
            break;
          case "mousedown":
            pd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pd = !1, vd(ye, l, de);
            break;
          case "selectionchange":
            if (vy) break;
          case "keydown":
          case "keyup":
            vd(ye, l, de);
        }
        var st;
        if (lo) e: {
          switch (n) {
            case "compositionstart":
              var ht = "onCompositionStart";
              break e;
            case "compositionend":
              ht = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ht = "onCompositionUpdate";
              break e;
          }
          ht = void 0;
        }
        else uo ? yv(n, l) && (ht = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ht = "onCompositionStart");
        ht && (hv && l.locale !== "ko" && (uo || ht !== "onCompositionStart" ? ht === "onCompositionEnd" && uo && (st = $()) : (pi = de, h = "value" in pi ? pi.value : pi.textContent, uo = !0)), it = us(I, ht), 0 < it.length && (ht = new rd(ht, n, null, l, de), ye.push({ event: ht, listeners: it }), st ? ht.data = st : (st = gv(l), st !== null && (ht.data = st)))), (st = ts ? Sv(n, l) : oy(n, l)) && (I = us(I, "onBeforeInput"), 0 < I.length && (de = new rd("onBeforeInput", "beforeinput", null, l, de), ye.push({ event: de, listeners: I }), de.data = st));
      }
      vu(ye, r);
    });
  }
  function fo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function us(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = bn(n, l), d != null && o.unshift(fo(n, d, c)), d = bn(n, r), d != null && o.push(fo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Dl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function zv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var R = l, b = R.alternate, I = R.stateNode;
      if (b !== null && b === o) break;
      R.tag === 5 && I !== null && (R = I, c ? (b = bn(l, d), b != null && m.unshift(fo(l, b, R))) : c || (b = bn(l, d), b != null && m.push(fo(l, b, R)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Av = /\r\n?/g, yy = /\u0000|\uFFFD/g;
  function Uv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Av, `
`).replace(yy, "");
  }
  function Tc(n, r, l) {
    if (r = Uv(r), Uv(n) !== r && l) throw Error(C(425));
  }
  function Ol() {
  }
  var os = null, hu = null;
  function bc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var _c = typeof setTimeout == "function" ? setTimeout : void 0, Sd = typeof clearTimeout == "function" ? clearTimeout : void 0, jv = typeof Promise == "function" ? Promise : void 0, po = typeof queueMicrotask == "function" ? queueMicrotask : typeof jv < "u" ? function(n) {
    return jv.resolve(null).then(n).catch(kc);
  } : _c;
  function kc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function vo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), di(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    di(r);
  }
  function ki(n) {
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
  function Fv(n) {
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
  var Ml = Math.random().toString(36).slice(2), Di = "__reactFiber$" + Ml, ss = "__reactProps$" + Ml, Ji = "__reactContainer$" + Ml, cs = "__reactEvents$" + Ml, ho = "__reactListeners$" + Ml, gy = "__reactHandles$" + Ml;
  function mu(n) {
    var r = n[Di];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ji] || l[Di]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Fv(n); n !== null; ) {
          if (l = n[Di]) return l;
          n = Fv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function tt(n) {
    return n = n[Di] || n[Ji], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function hi(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(C(33));
  }
  function Mn(n) {
    return n[ss] || null;
  }
  var Wt = [], Qa = -1;
  function Ga(n) {
    return { current: n };
  }
  function En(n) {
    0 > Qa || (n.current = Wt[Qa], Wt[Qa] = null, Qa--);
  }
  function Ze(n, r) {
    Qa++, Wt[Qa] = n.current, n.current = r;
  }
  var jr = {}, Hn = Ga(jr), or = Ga(!1), sa = jr;
  function ca(n, r) {
    var l = n.type.contextTypes;
    if (!l) return jr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Xn(n) {
    return n = n.childContextTypes, n != null;
  }
  function mo() {
    En(or), En(Hn);
  }
  function Hv(n, r, l) {
    if (Hn.current !== jr) throw Error(C(168));
    Ze(Hn, r), Ze(or, l);
  }
  function fs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(C(108, Rt(n) || "Unknown", c));
    return be({}, l, o);
  }
  function vr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || jr, sa = Hn.current, Ze(Hn, n), Ze(or, or.current), !0;
  }
  function Dc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(C(169));
    l ? (n = fs(n, r, sa), o.__reactInternalMemoizedMergedChildContext = n, En(or), En(Hn), Ze(Hn, n)) : En(or), Ze(or, l);
  }
  var Oi = null, yo = !1, el = !1;
  function Oc(n) {
    Oi === null ? Oi = [n] : Oi.push(n);
  }
  function Ll(n) {
    yo = !0, Oc(n);
  }
  function Mi() {
    if (!el && Oi !== null) {
      el = !0;
      var n = 0, r = rn;
      try {
        var l = Oi;
        for (rn = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Oi = null, yo = !1;
      } catch (c) {
        throw Oi !== null && (Oi = Oi.slice(n + 1)), nn(Br, Mi), c;
      } finally {
        rn = r, el = !1;
      }
    }
    return null;
  }
  var Nl = [], zl = 0, Al = null, tl = 0, qn = [], Xa = 0, Da = null, Li = 1, Ni = "";
  function yu(n, r) {
    Nl[zl++] = tl, Nl[zl++] = Al, Al = n, tl = r;
  }
  function Pv(n, r, l) {
    qn[Xa++] = Li, qn[Xa++] = Ni, qn[Xa++] = Da, Da = n;
    var o = Li;
    n = Ni;
    var c = 32 - $r(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - $r(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Li = 1 << 32 - $r(r) + c | l << c | o, Ni = d + n;
    } else Li = 1 << d | l << c | o, Ni = n;
  }
  function Mc(n) {
    n.return !== null && (yu(n, 1), Pv(n, 1, 0));
  }
  function Lc(n) {
    for (; n === Al; ) Al = Nl[--zl], Nl[zl] = null, tl = Nl[--zl], Nl[zl] = null;
    for (; n === Da; ) Da = qn[--Xa], qn[Xa] = null, Ni = qn[--Xa], qn[Xa] = null, Li = qn[--Xa], qn[Xa] = null;
  }
  var fa = null, da = null, _n = !1, qa = null;
  function Ed(n, r) {
    var l = ni(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Vv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, fa = n, da = ki(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, fa = n, da = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Da !== null ? { id: Li, overflow: Ni } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ni(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, fa = n, da = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Cd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function xd(n) {
    if (_n) {
      var r = da;
      if (r) {
        var l = r;
        if (!Vv(n, r)) {
          if (Cd(n)) throw Error(C(418));
          r = ki(l.nextSibling);
          var o = fa;
          r && Vv(n, r) ? Ed(o, l) : (n.flags = n.flags & -4097 | 2, _n = !1, fa = n);
        }
      } else {
        if (Cd(n)) throw Error(C(418));
        n.flags = n.flags & -4097 | 2, _n = !1, fa = n;
      }
    }
  }
  function sr(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    fa = n;
  }
  function Nc(n) {
    if (n !== fa) return !1;
    if (!_n) return sr(n), _n = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !bc(n.type, n.memoizedProps)), r && (r = da)) {
      if (Cd(n)) throw ds(), Error(C(418));
      for (; r; ) Ed(n, r), r = ki(r.nextSibling);
    }
    if (sr(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(C(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                da = ki(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        da = null;
      }
    } else da = fa ? ki(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ds() {
    for (var n = da; n; ) n = ki(n.nextSibling);
  }
  function Ul() {
    da = fa = null, _n = !1;
  }
  function nl(n) {
    qa === null ? qa = [n] : qa.push(n);
  }
  var Sy = Se.ReactCurrentBatchConfig;
  function gu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(C(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(C(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var R = c.refs;
          m === null ? delete R[d] : R[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(C(284));
      if (!l._owner) throw Error(C(290, n));
    }
    return n;
  }
  function zc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(C(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Bv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Su(n) {
    function r(N, D) {
      if (n) {
        var F = N.deletions;
        F === null ? (N.deletions = [D], N.flags |= 16) : F.push(D);
      }
    }
    function l(N, D) {
      if (!n) return null;
      for (; D !== null; ) r(N, D), D = D.sibling;
      return null;
    }
    function o(N, D) {
      for (N = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? N.set(D.key, D) : N.set(D.index, D), D = D.sibling;
      return N;
    }
    function c(N, D) {
      return N = Il(N, D), N.index = 0, N.sibling = null, N;
    }
    function d(N, D, F) {
      return N.index = F, n ? (F = N.alternate, F !== null ? (F = F.index, F < D ? (N.flags |= 2, D) : F) : (N.flags |= 2, D)) : (N.flags |= 1048576, D);
    }
    function m(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function R(N, D, F, pe) {
      return D === null || D.tag !== 6 ? (D = Jd(F, N.mode, pe), D.return = N, D) : (D = c(D, F), D.return = N, D);
    }
    function b(N, D, F, pe) {
      var $e = F.type;
      return $e === Pe ? de(N, D, F.props.children, pe, F.key) : D !== null && (D.elementType === $e || typeof $e == "object" && $e !== null && $e.$$typeof === It && Bv($e) === D.type) ? (pe = c(D, F.props), pe.ref = gu(N, D, F), pe.return = N, pe) : (pe = Bs(F.type, F.key, F.props, null, N.mode, pe), pe.ref = gu(N, D, F), pe.return = N, pe);
    }
    function I(N, D, F, pe) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== F.containerInfo || D.stateNode.implementation !== F.implementation ? (D = vf(F, N.mode, pe), D.return = N, D) : (D = c(D, F.children || []), D.return = N, D);
    }
    function de(N, D, F, pe, $e) {
      return D === null || D.tag !== 7 ? (D = ol(F, N.mode, pe, $e), D.return = N, D) : (D = c(D, F), D.return = N, D);
    }
    function ye(N, D, F) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = Jd("" + D, N.mode, F), D.return = N, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case Te:
            return F = Bs(D.type, D.key, D.props, null, N.mode, F), F.ref = gu(N, null, D), F.return = N, F;
          case Je:
            return D = vf(D, N.mode, F), D.return = N, D;
          case It:
            var pe = D._init;
            return ye(N, pe(D._payload), F);
        }
        if (Pn(D) || Ve(D)) return D = ol(D, N.mode, F, null), D.return = N, D;
        zc(N, D);
      }
      return null;
    }
    function ce(N, D, F, pe) {
      var $e = D !== null ? D.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number") return $e !== null ? null : R(N, D, "" + F, pe);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Te:
            return F.key === $e ? b(N, D, F, pe) : null;
          case Je:
            return F.key === $e ? I(N, D, F, pe) : null;
          case It:
            return $e = F._init, ce(
              N,
              D,
              $e(F._payload),
              pe
            );
        }
        if (Pn(F) || Ve(F)) return $e !== null ? null : de(N, D, F, pe, null);
        zc(N, F);
      }
      return null;
    }
    function ze(N, D, F, pe, $e) {
      if (typeof pe == "string" && pe !== "" || typeof pe == "number") return N = N.get(F) || null, R(D, N, "" + pe, $e);
      if (typeof pe == "object" && pe !== null) {
        switch (pe.$$typeof) {
          case Te:
            return N = N.get(pe.key === null ? F : pe.key) || null, b(D, N, pe, $e);
          case Je:
            return N = N.get(pe.key === null ? F : pe.key) || null, I(D, N, pe, $e);
          case It:
            var it = pe._init;
            return ze(N, D, F, it(pe._payload), $e);
        }
        if (Pn(pe) || Ve(pe)) return N = N.get(F) || null, de(D, N, pe, $e, null);
        zc(D, pe);
      }
      return null;
    }
    function Be(N, D, F, pe) {
      for (var $e = null, it = null, st = D, ht = D = 0, yr = null; st !== null && ht < F.length; ht++) {
        st.index > ht ? (yr = st, st = null) : yr = st.sibling;
        var un = ce(N, st, F[ht], pe);
        if (un === null) {
          st === null && (st = yr);
          break;
        }
        n && st && un.alternate === null && r(N, st), D = d(un, D, ht), it === null ? $e = un : it.sibling = un, it = un, st = yr;
      }
      if (ht === F.length) return l(N, st), _n && yu(N, ht), $e;
      if (st === null) {
        for (; ht < F.length; ht++) st = ye(N, F[ht], pe), st !== null && (D = d(st, D, ht), it === null ? $e = st : it.sibling = st, it = st);
        return _n && yu(N, ht), $e;
      }
      for (st = o(N, st); ht < F.length; ht++) yr = ze(st, N, ht, F[ht], pe), yr !== null && (n && yr.alternate !== null && st.delete(yr.key === null ? ht : yr.key), D = d(yr, D, ht), it === null ? $e = yr : it.sibling = yr, it = yr);
      return n && st.forEach(function(Wl) {
        return r(N, Wl);
      }), _n && yu(N, ht), $e;
    }
    function Ye(N, D, F, pe) {
      var $e = Ve(F);
      if (typeof $e != "function") throw Error(C(150));
      if (F = $e.call(F), F == null) throw Error(C(151));
      for (var it = $e = null, st = D, ht = D = 0, yr = null, un = F.next(); st !== null && !un.done; ht++, un = F.next()) {
        st.index > ht ? (yr = st, st = null) : yr = st.sibling;
        var Wl = ce(N, st, un.value, pe);
        if (Wl === null) {
          st === null && (st = yr);
          break;
        }
        n && st && Wl.alternate === null && r(N, st), D = d(Wl, D, ht), it === null ? $e = Wl : it.sibling = Wl, it = Wl, st = yr;
      }
      if (un.done) return l(
        N,
        st
      ), _n && yu(N, ht), $e;
      if (st === null) {
        for (; !un.done; ht++, un = F.next()) un = ye(N, un.value, pe), un !== null && (D = d(un, D, ht), it === null ? $e = un : it.sibling = un, it = un);
        return _n && yu(N, ht), $e;
      }
      for (st = o(N, st); !un.done; ht++, un = F.next()) un = ze(st, N, ht, un.value, pe), un !== null && (n && un.alternate !== null && st.delete(un.key === null ? ht : un.key), D = d(un, D, ht), it === null ? $e = un : it.sibling = un, it = un);
      return n && st.forEach(function(Rh) {
        return r(N, Rh);
      }), _n && yu(N, ht), $e;
    }
    function Kn(N, D, F, pe) {
      if (typeof F == "object" && F !== null && F.type === Pe && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Te:
            e: {
              for (var $e = F.key, it = D; it !== null; ) {
                if (it.key === $e) {
                  if ($e = F.type, $e === Pe) {
                    if (it.tag === 7) {
                      l(N, it.sibling), D = c(it, F.props.children), D.return = N, N = D;
                      break e;
                    }
                  } else if (it.elementType === $e || typeof $e == "object" && $e !== null && $e.$$typeof === It && Bv($e) === it.type) {
                    l(N, it.sibling), D = c(it, F.props), D.ref = gu(N, it, F), D.return = N, N = D;
                    break e;
                  }
                  l(N, it);
                  break;
                } else r(N, it);
                it = it.sibling;
              }
              F.type === Pe ? (D = ol(F.props.children, N.mode, pe, F.key), D.return = N, N = D) : (pe = Bs(F.type, F.key, F.props, null, N.mode, pe), pe.ref = gu(N, D, F), pe.return = N, N = pe);
            }
            return m(N);
          case Je:
            e: {
              for (it = F.key; D !== null; ) {
                if (D.key === it) if (D.tag === 4 && D.stateNode.containerInfo === F.containerInfo && D.stateNode.implementation === F.implementation) {
                  l(N, D.sibling), D = c(D, F.children || []), D.return = N, N = D;
                  break e;
                } else {
                  l(N, D);
                  break;
                }
                else r(N, D);
                D = D.sibling;
              }
              D = vf(F, N.mode, pe), D.return = N, N = D;
            }
            return m(N);
          case It:
            return it = F._init, Kn(N, D, it(F._payload), pe);
        }
        if (Pn(F)) return Be(N, D, F, pe);
        if (Ve(F)) return Ye(N, D, F, pe);
        zc(N, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" ? (F = "" + F, D !== null && D.tag === 6 ? (l(N, D.sibling), D = c(D, F), D.return = N, N = D) : (l(N, D), D = Jd(F, N.mode, pe), D.return = N, N = D), m(N)) : l(N, D);
    }
    return Kn;
  }
  var Bn = Su(!0), Me = Su(!1), Oa = Ga(null), pa = null, go = null, wd = null;
  function Rd() {
    wd = go = pa = null;
  }
  function Td(n) {
    var r = Oa.current;
    En(Oa), n._currentValue = r;
  }
  function bd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Ln(n, r) {
    pa = n, wd = go = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Jn = !0), n.firstContext = null);
  }
  function Za(n) {
    var r = n._currentValue;
    if (wd !== n) if (n = { context: n, memoizedValue: r, next: null }, go === null) {
      if (pa === null) throw Error(C(308));
      go = n, pa.dependencies = { lanes: 0, firstContext: n };
    } else go = go.next = n;
    return r;
  }
  var Eu = null;
  function _d(n) {
    Eu === null ? Eu = [n] : Eu.push(n);
  }
  function kd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, _d(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ma(n, o);
  }
  function Ma(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var La = !1;
  function Dd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function $v(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function rl(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function jl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Qt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ma(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, _d(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ma(n, l);
  }
  function Ac(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qi(n, l);
    }
  }
  function Iv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ps(n, r, l, o) {
    var c = n.updateQueue;
    La = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, R = c.shared.pending;
    if (R !== null) {
      c.shared.pending = null;
      var b = R, I = b.next;
      b.next = null, m === null ? d = I : m.next = I, m = b;
      var de = n.alternate;
      de !== null && (de = de.updateQueue, R = de.lastBaseUpdate, R !== m && (R === null ? de.firstBaseUpdate = I : R.next = I, de.lastBaseUpdate = b));
    }
    if (d !== null) {
      var ye = c.baseState;
      m = 0, de = I = b = null, R = d;
      do {
        var ce = R.lane, ze = R.eventTime;
        if ((o & ce) === ce) {
          de !== null && (de = de.next = {
            eventTime: ze,
            lane: 0,
            tag: R.tag,
            payload: R.payload,
            callback: R.callback,
            next: null
          });
          e: {
            var Be = n, Ye = R;
            switch (ce = r, ze = l, Ye.tag) {
              case 1:
                if (Be = Ye.payload, typeof Be == "function") {
                  ye = Be.call(ze, ye, ce);
                  break e;
                }
                ye = Be;
                break e;
              case 3:
                Be.flags = Be.flags & -65537 | 128;
              case 0:
                if (Be = Ye.payload, ce = typeof Be == "function" ? Be.call(ze, ye, ce) : Be, ce == null) break e;
                ye = be({}, ye, ce);
                break e;
              case 2:
                La = !0;
            }
          }
          R.callback !== null && R.lane !== 0 && (n.flags |= 64, ce = c.effects, ce === null ? c.effects = [R] : ce.push(R));
        } else ze = { eventTime: ze, lane: ce, tag: R.tag, payload: R.payload, callback: R.callback, next: null }, de === null ? (I = de = ze, b = ye) : de = de.next = ze, m |= ce;
        if (R = R.next, R === null) {
          if (R = c.shared.pending, R === null) break;
          ce = R, R = ce.next, ce.next = null, c.lastBaseUpdate = ce, c.shared.pending = null;
        }
      } while (!0);
      if (de === null && (b = ye), c.baseState = b, c.firstBaseUpdate = I, c.lastBaseUpdate = de, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Fi |= m, n.lanes = m, n.memoizedState = ye;
    }
  }
  function Od(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(C(191, c));
        c.call(o);
      }
    }
  }
  var vs = {}, zi = Ga(vs), hs = Ga(vs), ms = Ga(vs);
  function Cu(n) {
    if (n === vs) throw Error(C(174));
    return n;
  }
  function Md(n, r) {
    switch (Ze(ms, r), Ze(hs, n), Ze(zi, vs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : oe(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = oe(r, n);
    }
    En(zi), Ze(zi, r);
  }
  function xu() {
    En(zi), En(hs), En(ms);
  }
  function Yv(n) {
    Cu(ms.current);
    var r = Cu(zi.current), l = oe(r, n.type);
    r !== l && (Ze(hs, n), Ze(zi, l));
  }
  function Uc(n) {
    hs.current === n && (En(zi), En(hs));
  }
  var Nn = Ga(0);
  function jc(n) {
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
  var ys = [];
  function nt() {
    for (var n = 0; n < ys.length; n++) ys[n]._workInProgressVersionPrimary = null;
    ys.length = 0;
  }
  var Ut = Se.ReactCurrentDispatcher, an = Se.ReactCurrentBatchConfig, hn = 0, ln = null, Zn = null, hr = null, Fc = !1, gs = !1, wu = 0, se = 0;
  function en() {
    throw Error(C(321));
  }
  function ct(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!vi(n[l], r[l])) return !1;
    return !0;
  }
  function Fl(n, r, l, o, c, d) {
    if (hn = d, ln = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ut.current = n === null || n.memoizedState === null ? Jc : Rs, n = l(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, wu = 0, 25 <= d) throw Error(C(301));
        d += 1, hr = Zn = null, r.updateQueue = null, Ut.current = ef, n = l(o, c);
      } while (gs);
    }
    if (Ut.current = ku, r = Zn !== null && Zn.next !== null, hn = 0, hr = Zn = ln = null, Fc = !1, r) throw Error(C(300));
    return n;
  }
  function mi() {
    var n = wu !== 0;
    return wu = 0, n;
  }
  function Fr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return hr === null ? ln.memoizedState = hr = n : hr = hr.next = n, hr;
  }
  function $n() {
    if (Zn === null) {
      var n = ln.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Zn.next;
    var r = hr === null ? ln.memoizedState : hr.next;
    if (r !== null) hr = r, Zn = n;
    else {
      if (n === null) throw Error(C(310));
      Zn = n, n = { memoizedState: Zn.memoizedState, baseState: Zn.baseState, baseQueue: Zn.baseQueue, queue: Zn.queue, next: null }, hr === null ? ln.memoizedState = hr = n : hr = hr.next = n;
    }
    return hr;
  }
  function al(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Hl(n) {
    var r = $n(), l = r.queue;
    if (l === null) throw Error(C(311));
    l.lastRenderedReducer = n;
    var o = Zn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var R = m = null, b = null, I = d;
      do {
        var de = I.lane;
        if ((hn & de) === de) b !== null && (b = b.next = { lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }), o = I.hasEagerState ? I.eagerState : n(o, I.action);
        else {
          var ye = {
            lane: de,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          };
          b === null ? (R = b = ye, m = o) : b = b.next = ye, ln.lanes |= de, Fi |= de;
        }
        I = I.next;
      } while (I !== null && I !== d);
      b === null ? m = o : b.next = R, vi(o, r.memoizedState) || (Jn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = b, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ln.lanes |= d, Fi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ru(n) {
    var r = $n(), l = r.queue;
    if (l === null) throw Error(C(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      vi(d, r.memoizedState) || (Jn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Hc() {
  }
  function Pc(n, r) {
    var l = ln, o = $n(), c = r(), d = !vi(o.memoizedState, c);
    if (d && (o.memoizedState = c, Jn = !0), o = o.queue, Ss($c.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || hr !== null && hr.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, Bc.bind(null, l, o, c, r), void 0, null), cr === null) throw Error(C(349));
      hn & 30 || Vc(l, r, c);
    }
    return c;
  }
  function Vc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ln.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ln.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Bc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Ic(r) && Yc(n);
  }
  function $c(n, r, l) {
    return l(function() {
      Ic(r) && Yc(n);
    });
  }
  function Ic(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !vi(n, l);
    } catch {
      return !0;
    }
  }
  function Yc(n) {
    var r = Ma(n, 1);
    r !== null && Gr(r, n, 1, -1);
  }
  function Kc(n) {
    var r = Fr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: al, lastRenderedState: n }, r.queue = n, n = n.dispatch = _u.bind(null, ln, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ln.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ln.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Wc() {
    return $n().memoizedState;
  }
  function So(n, r, l, o) {
    var c = Fr();
    ln.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Eo(n, r, l, o) {
    var c = $n();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Zn !== null) {
      var m = Zn.memoizedState;
      if (d = m.destroy, o !== null && ct(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    ln.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function Qc(n, r) {
    return So(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return Eo(2048, 8, n, r);
  }
  function Gc(n, r) {
    return Eo(4, 2, n, r);
  }
  function Es(n, r) {
    return Eo(4, 4, n, r);
  }
  function bu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Xc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Eo(4, 4, bu.bind(null, r, n), l);
  }
  function Cs() {
  }
  function qc(n, r) {
    var l = $n();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ct(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Zc(n, r) {
    var l = $n();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ct(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ld(n, r, l) {
    return hn & 21 ? (vi(l, r) || (l = Zu(), ln.lanes |= l, Fi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Jn = !0), n.memoizedState = l);
  }
  function xs(n, r) {
    var l = rn;
    rn = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = an.transition;
    an.transition = {};
    try {
      n(!1), r();
    } finally {
      rn = l, an.transition = o;
    }
  }
  function Nd() {
    return $n().memoizedState;
  }
  function ws(n, r, l) {
    var o = Hi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, va(n)) Kv(r, l);
    else if (l = kd(n, r, l, o), l !== null) {
      var c = nr();
      Gr(l, n, o, c), gn(l, r, o);
    }
  }
  function _u(n, r, l) {
    var o = Hi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (va(n)) Kv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, R = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = R, vi(R, m)) {
          var b = r.interleaved;
          b === null ? (c.next = c, _d(r)) : (c.next = b.next, b.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = kd(n, r, c, o), l !== null && (c = nr(), Gr(l, n, o, c), gn(l, r, o));
    }
  }
  function va(n) {
    var r = n.alternate;
    return n === ln || r !== null && r === ln;
  }
  function Kv(n, r) {
    gs = Fc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function gn(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qi(n, l);
    }
  }
  var ku = { readContext: Za, useCallback: en, useContext: en, useEffect: en, useImperativeHandle: en, useInsertionEffect: en, useLayoutEffect: en, useMemo: en, useReducer: en, useRef: en, useState: en, useDebugValue: en, useDeferredValue: en, useTransition: en, useMutableSource: en, useSyncExternalStore: en, useId: en, unstable_isNewReconciler: !1 }, Jc = { readContext: Za, useCallback: function(n, r) {
    return Fr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Za, useEffect: Qc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, So(
      4194308,
      4,
      bu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return So(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return So(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Fr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Fr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = ws.bind(null, ln, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Fr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Kc, useDebugValue: Cs, useDeferredValue: function(n) {
    return Fr().memoizedState = n;
  }, useTransition: function() {
    var n = Kc(!1), r = n[0];
    return n = xs.bind(null, n[1]), Fr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = ln, c = Fr();
    if (_n) {
      if (l === void 0) throw Error(C(407));
      l = l();
    } else {
      if (l = r(), cr === null) throw Error(C(349));
      hn & 30 || Vc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Qc($c.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, Bc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Fr(), r = cr.identifierPrefix;
    if (_n) {
      var l = Ni, o = Li;
      l = (o & ~(1 << 32 - $r(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = wu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = se++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Rs = {
    readContext: Za,
    useCallback: qc,
    useContext: Za,
    useEffect: Ss,
    useImperativeHandle: Xc,
    useInsertionEffect: Gc,
    useLayoutEffect: Es,
    useMemo: Zc,
    useReducer: Hl,
    useRef: Wc,
    useState: function() {
      return Hl(al);
    },
    useDebugValue: Cs,
    useDeferredValue: function(n) {
      var r = $n();
      return Ld(r, Zn.memoizedState, n);
    },
    useTransition: function() {
      var n = Hl(al)[0], r = $n().memoizedState;
      return [n, r];
    },
    useMutableSource: Hc,
    useSyncExternalStore: Pc,
    useId: Nd,
    unstable_isNewReconciler: !1
  }, ef = { readContext: Za, useCallback: qc, useContext: Za, useEffect: Ss, useImperativeHandle: Xc, useInsertionEffect: Gc, useLayoutEffect: Es, useMemo: Zc, useReducer: Ru, useRef: Wc, useState: function() {
    return Ru(al);
  }, useDebugValue: Cs, useDeferredValue: function(n) {
    var r = $n();
    return Zn === null ? r.memoizedState = n : Ld(r, Zn.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(al)[0], r = $n().memoizedState;
    return [n, r];
  }, useMutableSource: Hc, useSyncExternalStore: Pc, useId: Nd, unstable_isNewReconciler: !1 };
  function yi(n, r) {
    if (n && n.defaultProps) {
      r = be({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function zd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : be({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var tf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ue(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = nr(), c = Hi(n), d = rl(o, c);
    d.payload = r, l != null && (d.callback = l), r = jl(n, d, c), r !== null && (Gr(r, n, c, o), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = nr(), c = Hi(n), d = rl(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = jl(n, d, c), r !== null && (Gr(r, n, c, o), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = nr(), o = Hi(n), c = rl(l, o);
    c.tag = 2, r != null && (c.callback = r), r = jl(n, c, o), r !== null && (Gr(r, n, o, l), Ac(r, n, o));
  } };
  function Wv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !rs(l, o) || !rs(c, d) : !0;
  }
  function nf(n, r, l) {
    var o = !1, c = jr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Za(d) : (c = Xn(r) ? sa : Hn.current, o = r.contextTypes, d = (o = o != null) ? ca(n, c) : jr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && tf.enqueueReplaceState(r, r.state, null);
  }
  function Ts(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Dd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Za(d) : (d = Xn(r) ? sa : Hn.current, c.context = ca(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (zd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && tf.enqueueReplaceState(c, c.state, null), ps(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Du(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ot(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Ad(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ud(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var rf = typeof WeakMap == "function" ? WeakMap : Map;
  function Gv(n, r, l) {
    l = rl(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      bo || (bo = !0, Lu = o), Ud(n, r);
    }, l;
  }
  function jd(n, r, l) {
    l = rl(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ud(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ud(n, r), typeof o != "function" && (Bl === null ? Bl = /* @__PURE__ */ new Set([this]) : Bl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Fd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new rf();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = by.bind(null, n, r, l), r.then(n, n));
  }
  function Xv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Pl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = rl(-1, 1), r.tag = 2, jl(l, r, 1))), l.lanes |= 1), n);
  }
  var bs = Se.ReactCurrentOwner, Jn = !1;
  function Rr(n, r, l, o) {
    r.child = n === null ? Me(r, null, l, o) : Bn(r, n.child, l, o);
  }
  function ha(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Ln(r, c), o = Fl(n, r, l, o, d, c), l = mi(), n !== null && !Jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ei(n, r, c)) : (_n && l && Mc(r), r.flags |= 1, Rr(n, r, o, c), r.child);
  }
  function Ou(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Zd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Dt(n, r, d, o, c)) : (n = Bs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : rs, l(m, o) && n.ref === r.ref) return ei(n, r, c);
    }
    return r.flags |= 1, n = Il(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Dt(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (rs(d, o) && n.ref === r.ref) if (Jn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Jn = !0);
      else return r.lanes = n.lanes, ei(n, r, c);
    }
    return qv(n, r, l, o, c);
  }
  function _s(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(wo, Na), Na |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ze(wo, Na), Na |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Ze(wo, Na), Na |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Ze(wo, Na), Na |= o;
    return Rr(n, r, c, l), r.child;
  }
  function Hd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qv(n, r, l, o, c) {
    var d = Xn(l) ? sa : Hn.current;
    return d = ca(r, d), Ln(r, c), l = Fl(n, r, l, o, d, c), o = mi(), n !== null && !Jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ei(n, r, c)) : (_n && o && Mc(r), r.flags |= 1, Rr(n, r, l, c), r.child);
  }
  function Zv(n, r, l, o, c) {
    if (Xn(l)) {
      var d = !0;
      vr(r);
    } else d = !1;
    if (Ln(r, c), r.stateNode === null) Ja(n, r), nf(r, l, o), Ts(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, R = r.memoizedProps;
      m.props = R;
      var b = m.context, I = l.contextType;
      typeof I == "object" && I !== null ? I = Za(I) : (I = Xn(l) ? sa : Hn.current, I = ca(r, I));
      var de = l.getDerivedStateFromProps, ye = typeof de == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      ye || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (R !== o || b !== I) && Qv(r, m, o, I), La = !1;
      var ce = r.memoizedState;
      m.state = ce, ps(r, o, m, c), b = r.memoizedState, R !== o || ce !== b || or.current || La ? (typeof de == "function" && (zd(r, l, de, o), b = r.memoizedState), (R = La || Wv(r, l, R, o, ce, b, I)) ? (ye || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = b), m.props = o, m.state = b, m.context = I, o = R) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, $v(n, r), R = r.memoizedProps, I = r.type === r.elementType ? R : yi(r.type, R), m.props = I, ye = r.pendingProps, ce = m.context, b = l.contextType, typeof b == "object" && b !== null ? b = Za(b) : (b = Xn(l) ? sa : Hn.current, b = ca(r, b));
      var ze = l.getDerivedStateFromProps;
      (de = typeof ze == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (R !== ye || ce !== b) && Qv(r, m, o, b), La = !1, ce = r.memoizedState, m.state = ce, ps(r, o, m, c);
      var Be = r.memoizedState;
      R !== ye || ce !== Be || or.current || La ? (typeof ze == "function" && (zd(r, l, ze, o), Be = r.memoizedState), (I = La || Wv(r, l, I, o, ce, Be, b) || !1) ? (de || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Be, b), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Be, b)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || R === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Be), m.props = o, m.state = Be, m.context = b, o = I) : (typeof m.componentDidUpdate != "function" || R === n.memoizedProps && ce === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || R === n.memoizedProps && ce === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ks(n, r, l, o, d, c);
  }
  function ks(n, r, l, o, c, d) {
    Hd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Dc(r, l, !1), ei(n, r, d);
    o = r.stateNode, bs.current = r;
    var R = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Bn(r, n.child, null, d), r.child = Bn(r, null, R, d)) : Rr(n, r, R, d), r.memoizedState = o.state, c && Dc(r, l, !0), r.child;
  }
  function Co(n) {
    var r = n.stateNode;
    r.pendingContext ? Hv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Hv(n, r.context, !1), Md(n, r.containerInfo);
  }
  function Jv(n, r, l, o, c) {
    return Ul(), nl(c), r.flags |= 256, Rr(n, r, l, o), r.child;
  }
  var af = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function lf(n, r, l) {
    var o = r.pendingProps, c = Nn.current, d = !1, m = (r.flags & 128) !== 0, R;
    if ((R = m) || (R = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), R ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ze(Nn, c & 1), n === null)
      return xd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Yl(m, o, 0, null), n = ol(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Pd(l), r.memoizedState = af, n) : Vd(r, m));
    if (c = n.memoizedState, c !== null && (R = c.dehydrated, R !== null)) return eh(n, r, m, o, R, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, R = c.sibling;
      var b = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = b, r.deletions = null) : (o = Il(c, b), o.subtreeFlags = c.subtreeFlags & 14680064), R !== null ? d = Il(R, d) : (d = ol(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Pd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = af, o;
    }
    return d = n.child, n = d.sibling, o = Il(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Vd(n, r) {
    return r = Yl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ds(n, r, l, o) {
    return o !== null && nl(o), Bn(r, n.child, null, l), n = Vd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function eh(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ad(Error(C(422))), Ds(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Yl({ mode: "visible", children: o.children }, c, 0, null), d = ol(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Bn(r, n.child, null, m), r.child.memoizedState = Pd(m), r.memoizedState = af, d);
    if (!(r.mode & 1)) return Ds(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var R = o.dgst;
      return o = R, d = Error(C(419)), o = Ad(d, o, void 0), Ds(n, r, m, o);
    }
    if (R = (m & n.childLanes) !== 0, Jn || R) {
      if (o = cr, o !== null) {
        switch (m & -m) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ma(n, c), Gr(o, n, c, -1));
      }
      return qd(), o = Ad(Error(C(421))), Ds(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = _y.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, da = ki(c.nextSibling), fa = r, _n = !0, qa = null, n !== null && (qn[Xa++] = Li, qn[Xa++] = Ni, qn[Xa++] = Da, Li = n.id, Ni = n.overflow, Da = r), r = Vd(r, o.children), r.flags |= 4096, r);
  }
  function Bd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), bd(n.return, r, l);
  }
  function Kr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ai(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Rr(n, r, o.children, l), o = Nn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Bd(n, l, r);
        else if (n.tag === 19) Bd(n, l, r);
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
    if (Ze(Nn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && jc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Kr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && jc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Kr(r, !0, l, null, d);
        break;
      case "together":
        Kr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ja(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ei(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Fi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(C(153));
    if (r.child !== null) {
      for (n = r.child, l = Il(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Il(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Os(n, r, l) {
    switch (r.tag) {
      case 3:
        Co(r), Ul();
        break;
      case 5:
        Yv(r);
        break;
      case 1:
        Xn(r.type) && vr(r);
        break;
      case 4:
        Md(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ze(Oa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ze(Nn, Nn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? lf(n, r, l) : (Ze(Nn, Nn.current & 1), n = ei(n, r, l), n !== null ? n.sibling : null);
        Ze(Nn, Nn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Ai(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ze(Nn, Nn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, _s(n, r, l);
    }
    return ei(n, r, l);
  }
  var ti, er, th, nh;
  ti = function(n, r) {
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
  }, er = function() {
  }, th = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Cu(zi.current);
      var d = null;
      switch (l) {
        case "input":
          c = Qn(n, c), o = Qn(n, o), d = [];
          break;
        case "select":
          c = be({}, c, { value: void 0 }), o = be({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Fn(n, c), o = Fn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ol);
      }
      gt(l, o);
      var m;
      l = null;
      for (I in c) if (!o.hasOwnProperty(I) && c.hasOwnProperty(I) && c[I] != null) if (I === "style") {
        var R = c[I];
        for (m in R) R.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else I !== "dangerouslySetInnerHTML" && I !== "children" && I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && I !== "autoFocus" && (H.hasOwnProperty(I) ? d || (d = []) : (d = d || []).push(I, null));
      for (I in o) {
        var b = o[I];
        if (R = c != null ? c[I] : void 0, o.hasOwnProperty(I) && b !== R && (b != null || R != null)) if (I === "style") if (R) {
          for (m in R) !R.hasOwnProperty(m) || b && b.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in b) b.hasOwnProperty(m) && R[m] !== b[m] && (l || (l = {}), l[m] = b[m]);
        } else l || (d || (d = []), d.push(
          I,
          l
        )), l = b;
        else I === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, R = R ? R.__html : void 0, b != null && R !== b && (d = d || []).push(I, b)) : I === "children" ? typeof b != "string" && typeof b != "number" || (d = d || []).push(I, "" + b) : I !== "suppressContentEditableWarning" && I !== "suppressHydrationWarning" && (H.hasOwnProperty(I) ? (b != null && I === "onScroll" && cn("scroll", n), d || R === b || (d = [])) : (d = d || []).push(I, b));
      }
      l && (d = d || []).push("style", l);
      var I = d;
      (r.updateQueue = I) && (r.flags |= 4);
    }
  }, nh = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ms(n, r) {
    if (!_n) switch (n.tailMode) {
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
  function mr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function rh(n, r, l) {
    var o = r.pendingProps;
    switch (Lc(r), r.tag) {
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
        return mr(r), null;
      case 1:
        return Xn(r.type) && mo(), mr(r), null;
      case 3:
        return o = r.stateNode, xu(), En(or), En(Hn), nt(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Nc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, qa !== null && (Nu(qa), qa = null))), er(n, r), mr(r), null;
      case 5:
        Uc(r);
        var c = Cu(ms.current);
        if (l = r.type, n !== null && r.stateNode != null) th(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(C(166));
            return mr(r), null;
          }
          if (n = Cu(zi.current), Nc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Di] = r, o[ss] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                cn("cancel", o), cn("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                cn("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ls.length; c++) cn(ls[c], o);
                break;
              case "source":
                cn("error", o);
                break;
              case "img":
              case "image":
              case "link":
                cn(
                  "error",
                  o
                ), cn("load", o);
                break;
              case "details":
                cn("toggle", o);
                break;
              case "input":
                Un(o, d), cn("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, cn("invalid", o);
                break;
              case "textarea":
                ar(o, d), cn("invalid", o);
            }
            gt(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var R = d[m];
              m === "children" ? typeof R == "string" ? o.textContent !== R && (d.suppressHydrationWarning !== !0 && Tc(o.textContent, R, n), c = ["children", R]) : typeof R == "number" && o.textContent !== "" + R && (d.suppressHydrationWarning !== !0 && Tc(
                o.textContent,
                R,
                n
              ), c = ["children", "" + R]) : H.hasOwnProperty(m) && R != null && m === "onScroll" && cn("scroll", o);
            }
            switch (l) {
              case "input":
                An(o), Ra(o, d, !0);
                break;
              case "textarea":
                An(o), _(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ol);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = G(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Di] = r, n[ss] = o, ti(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = dt(l, o), l) {
                case "dialog":
                  cn("cancel", n), cn("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  cn("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ls.length; c++) cn(ls[c], n);
                  c = o;
                  break;
                case "source":
                  cn("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  cn(
                    "error",
                    n
                  ), cn("load", n), c = o;
                  break;
                case "details":
                  cn("toggle", n), c = o;
                  break;
                case "input":
                  Un(n, o), c = Qn(n, o), cn("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = be({}, o, { value: void 0 }), cn("invalid", n);
                  break;
                case "textarea":
                  ar(n, o), c = Fn(n, o), cn("invalid", n);
                  break;
                default:
                  c = o;
              }
              gt(l, c), R = c;
              for (d in R) if (R.hasOwnProperty(d)) {
                var b = R[d];
                d === "style" ? ut(n, b) : d === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, b != null && Oe(n, b)) : d === "children" ? typeof b == "string" ? (l !== "textarea" || b !== "") && z(n, b) : typeof b == "number" && z(n, "" + b) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (H.hasOwnProperty(d) ? b != null && d === "onScroll" && cn("scroll", n) : b != null && Re(n, d, b, m));
              }
              switch (l) {
                case "input":
                  An(n), Ra(n, o, !1);
                  break;
                case "textarea":
                  An(n), _(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + kt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Tn(n, !!o.multiple, d, !1) : o.defaultValue != null && Tn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ol);
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
        return mr(r), null;
      case 6:
        if (n && r.stateNode != null) nh(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(C(166));
          if (l = Cu(ms.current), Cu(zi.current), Nc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Di] = r, (d = o.nodeValue !== l) && (n = fa, n !== null)) switch (n.tag) {
              case 3:
                Tc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Tc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Di] = r, r.stateNode = o;
        }
        return mr(r), null;
      case 13:
        if (En(Nn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (_n && da !== null && r.mode & 1 && !(r.flags & 128)) ds(), Ul(), r.flags |= 98560, d = !1;
          else if (d = Nc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(C(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(C(317));
              d[Di] = r;
            } else Ul(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            mr(r), d = !1;
          } else qa !== null && (Nu(qa), qa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Nn.current & 1 ? Yn === 0 && (Yn = 3) : qd())), r.updateQueue !== null && (r.flags |= 4), mr(r), null);
      case 4:
        return xu(), er(n, r), n === null && co(r.stateNode.containerInfo), mr(r), null;
      case 10:
        return Td(r.type._context), mr(r), null;
      case 17:
        return Xn(r.type) && mo(), mr(r), null;
      case 19:
        if (En(Nn), d = r.memoizedState, d === null) return mr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ms(d, !1);
        else {
          if (Yn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = jc(n), m !== null) {
              for (r.flags |= 128, Ms(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Ze(Nn, Nn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && pt() > To && (r.flags |= 128, o = !0, Ms(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = jc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ms(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !_n) return mr(r), null;
          } else 2 * pt() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, Ms(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = pt(), r.sibling = null, l = Nn.current, Ze(Nn, o ? l & 1 | 2 : l & 1), r) : (mr(r), null);
      case 22:
      case 23:
        return Xd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Na & 1073741824 && (mr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : mr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(C(156, r.tag));
  }
  function uf(n, r) {
    switch (Lc(r), r.tag) {
      case 1:
        return Xn(r.type) && mo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return xu(), En(or), En(Hn), nt(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Uc(r), null;
      case 13:
        if (En(Nn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(C(340));
          Ul();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return En(Nn), null;
      case 4:
        return xu(), null;
      case 10:
        return Td(r.type._context), null;
      case 22:
      case 23:
        return Xd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ls = !1, Hr = !1, Ey = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
  function xo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      kn(n, r, o);
    }
    else l.current = null;
  }
  function of(n, r, l) {
    try {
      l();
    } catch (o) {
      kn(n, r, o);
    }
  }
  var ah = !1;
  function ih(n, r) {
    if (os = Ka, n = as(), yc(n)) {
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
          var m = 0, R = -1, b = -1, I = 0, de = 0, ye = n, ce = null;
          t: for (; ; ) {
            for (var ze; ye !== l || c !== 0 && ye.nodeType !== 3 || (R = m + c), ye !== d || o !== 0 && ye.nodeType !== 3 || (b = m + o), ye.nodeType === 3 && (m += ye.nodeValue.length), (ze = ye.firstChild) !== null; )
              ce = ye, ye = ze;
            for (; ; ) {
              if (ye === n) break t;
              if (ce === l && ++I === c && (R = m), ce === d && ++de === o && (b = m), (ze = ye.nextSibling) !== null) break;
              ye = ce, ce = ye.parentNode;
            }
            ye = ze;
          }
          l = R === -1 || b === -1 ? null : { start: R, end: b };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (hu = { focusedElem: n, selectionRange: l }, Ka = !1, Fe = r; Fe !== null; ) if (r = Fe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Fe = n;
    else for (; Fe !== null; ) {
      r = Fe;
      try {
        var Be = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Be !== null) {
              var Ye = Be.memoizedProps, Kn = Be.memoizedState, N = r.stateNode, D = N.getSnapshotBeforeUpdate(r.elementType === r.type ? Ye : yi(r.type, Ye), Kn);
              N.__reactInternalSnapshotBeforeUpdate = D;
            }
            break;
          case 3:
            var F = r.stateNode.containerInfo;
            F.nodeType === 1 ? F.textContent = "" : F.nodeType === 9 && F.documentElement && F.removeChild(F.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(C(163));
        }
      } catch (pe) {
        kn(r, r.return, pe);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Fe = n;
        break;
      }
      Fe = r.return;
    }
    return Be = ah, ah = !1, Be;
  }
  function Ns(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && of(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function zs(n, r) {
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
  function $d(n) {
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
  function sf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, sf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Di], delete r[ss], delete r[cs], delete r[ho], delete r[gy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function As(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function il(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || As(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ui(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ol));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ui(n, r, l), n = n.sibling; n !== null; ) Ui(n, r, l), n = n.sibling;
  }
  function ji(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (ji(n, r, l), n = n.sibling; n !== null; ) ji(n, r, l), n = n.sibling;
  }
  var In = null, Wr = !1;
  function Qr(n, r, l) {
    for (l = l.child; l !== null; ) lh(n, r, l), l = l.sibling;
  }
  function lh(n, r, l) {
    if (ua && typeof ua.onCommitFiberUnmount == "function") try {
      ua.onCommitFiberUnmount(Cl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Hr || xo(l, r);
      case 6:
        var o = In, c = Wr;
        In = null, Qr(n, r, l), In = o, Wr = c, In !== null && (Wr ? (n = In, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : In.removeChild(l.stateNode));
        break;
      case 18:
        In !== null && (Wr ? (n = In, l = l.stateNode, n.nodeType === 8 ? vo(n.parentNode, l) : n.nodeType === 1 && vo(n, l), di(n)) : vo(In, l.stateNode));
        break;
      case 4:
        o = In, c = Wr, In = l.stateNode.containerInfo, Wr = !0, Qr(n, r, l), In = o, Wr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Hr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && of(l, r, m), c = c.next;
          } while (c !== o);
        }
        Qr(n, r, l);
        break;
      case 1:
        if (!Hr && (xo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (R) {
          kn(l, r, R);
        }
        Qr(n, r, l);
        break;
      case 21:
        Qr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Hr = (o = Hr) || l.memoizedState !== null, Qr(n, r, l), Hr = o) : Qr(n, r, l);
        break;
      default:
        Qr(n, r, l);
    }
  }
  function uh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Ey()), r.forEach(function(o) {
        var c = mh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function gi(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, R = m;
        e: for (; R !== null; ) {
          switch (R.tag) {
            case 5:
              In = R.stateNode, Wr = !1;
              break e;
            case 3:
              In = R.stateNode.containerInfo, Wr = !0;
              break e;
            case 4:
              In = R.stateNode.containerInfo, Wr = !0;
              break e;
          }
          R = R.return;
        }
        if (In === null) throw Error(C(160));
        lh(d, m, c), In = null, Wr = !1;
        var b = c.alternate;
        b !== null && (b.return = null), c.return = null;
      } catch (I) {
        kn(c, r, I);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Id(r, n), r = r.sibling;
  }
  function Id(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (gi(r, n), ma(n), o & 4) {
          try {
            Ns(3, n, n.return), zs(3, n);
          } catch (Ye) {
            kn(n, n.return, Ye);
          }
          try {
            Ns(5, n, n.return);
          } catch (Ye) {
            kn(n, n.return, Ye);
          }
        }
        break;
      case 1:
        gi(r, n), ma(n), o & 512 && l !== null && xo(l, l.return);
        break;
      case 5:
        if (gi(r, n), ma(n), o & 512 && l !== null && xo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            z(c, "");
          } catch (Ye) {
            kn(n, n.return, Ye);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, R = n.type, b = n.updateQueue;
          if (n.updateQueue = null, b !== null) try {
            R === "input" && d.type === "radio" && d.name != null && jn(c, d), dt(R, m);
            var I = dt(R, d);
            for (m = 0; m < b.length; m += 2) {
              var de = b[m], ye = b[m + 1];
              de === "style" ? ut(c, ye) : de === "dangerouslySetInnerHTML" ? Oe(c, ye) : de === "children" ? z(c, ye) : Re(c, de, ye, I);
            }
            switch (R) {
              case "input":
                Sr(c, d);
                break;
              case "textarea":
                ia(c, d);
                break;
              case "select":
                var ce = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ze = d.value;
                ze != null ? Tn(c, !!d.multiple, ze, !1) : ce !== !!d.multiple && (d.defaultValue != null ? Tn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Tn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ss] = d;
          } catch (Ye) {
            kn(n, n.return, Ye);
          }
        }
        break;
      case 6:
        if (gi(r, n), ma(n), o & 4) {
          if (n.stateNode === null) throw Error(C(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ye) {
            kn(n, n.return, Ye);
          }
        }
        break;
      case 3:
        if (gi(r, n), ma(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          di(r.containerInfo);
        } catch (Ye) {
          kn(n, n.return, Ye);
        }
        break;
      case 4:
        gi(r, n), ma(n);
        break;
      case 13:
        gi(r, n), ma(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Wd = pt())), o & 4 && uh(n);
        break;
      case 22:
        if (de = l !== null && l.memoizedState !== null, n.mode & 1 ? (Hr = (I = Hr) || de, gi(r, n), Hr = I) : gi(r, n), ma(n), o & 8192) {
          if (I = n.memoizedState !== null, (n.stateNode.isHidden = I) && !de && n.mode & 1) for (Fe = n, de = n.child; de !== null; ) {
            for (ye = Fe = de; Fe !== null; ) {
              switch (ce = Fe, ze = ce.child, ce.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ns(4, ce, ce.return);
                  break;
                case 1:
                  xo(ce, ce.return);
                  var Be = ce.stateNode;
                  if (typeof Be.componentWillUnmount == "function") {
                    o = ce, l = ce.return;
                    try {
                      r = o, Be.props = r.memoizedProps, Be.state = r.memoizedState, Be.componentWillUnmount();
                    } catch (Ye) {
                      kn(o, l, Ye);
                    }
                  }
                  break;
                case 5:
                  xo(ce, ce.return);
                  break;
                case 22:
                  if (ce.memoizedState !== null) {
                    Us(ye);
                    continue;
                  }
              }
              ze !== null ? (ze.return = ce, Fe = ze) : Us(ye);
            }
            de = de.sibling;
          }
          e: for (de = null, ye = n; ; ) {
            if (ye.tag === 5) {
              if (de === null) {
                de = ye;
                try {
                  c = ye.stateNode, I ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (R = ye.stateNode, b = ye.memoizedProps.style, m = b != null && b.hasOwnProperty("display") ? b.display : null, R.style.display = Ke("display", m));
                } catch (Ye) {
                  kn(n, n.return, Ye);
                }
              }
            } else if (ye.tag === 6) {
              if (de === null) try {
                ye.stateNode.nodeValue = I ? "" : ye.memoizedProps;
              } catch (Ye) {
                kn(n, n.return, Ye);
              }
            } else if ((ye.tag !== 22 && ye.tag !== 23 || ye.memoizedState === null || ye === n) && ye.child !== null) {
              ye.child.return = ye, ye = ye.child;
              continue;
            }
            if (ye === n) break e;
            for (; ye.sibling === null; ) {
              if (ye.return === null || ye.return === n) break e;
              de === ye && (de = null), ye = ye.return;
            }
            de === ye && (de = null), ye.sibling.return = ye.return, ye = ye.sibling;
          }
        }
        break;
      case 19:
        gi(r, n), ma(n), o & 4 && uh(n);
        break;
      case 21:
        break;
      default:
        gi(
          r,
          n
        ), ma(n);
    }
  }
  function ma(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (As(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(C(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (z(c, ""), o.flags &= -33);
            var d = il(n);
            ji(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, R = il(n);
            Ui(n, R, m);
            break;
          default:
            throw Error(C(161));
        }
      } catch (b) {
        kn(n, n.return, b);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Cy(n, r, l) {
    Fe = n, Yd(n);
  }
  function Yd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Fe !== null; ) {
      var c = Fe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ls;
        if (!m) {
          var R = c.alternate, b = R !== null && R.memoizedState !== null || Hr;
          R = Ls;
          var I = Hr;
          if (Ls = m, (Hr = b) && !I) for (Fe = c; Fe !== null; ) m = Fe, b = m.child, m.tag === 22 && m.memoizedState !== null ? Kd(c) : b !== null ? (b.return = m, Fe = b) : Kd(c);
          for (; d !== null; ) Fe = d, Yd(d), d = d.sibling;
          Fe = c, Ls = R, Hr = I;
        }
        oh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Fe = d) : oh(n);
    }
  }
  function oh(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Hr || zs(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Hr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : yi(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Od(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Od(r, m, l);
              }
              break;
            case 5:
              var R = r.stateNode;
              if (l === null && r.flags & 4) {
                l = R;
                var b = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    b.autoFocus && l.focus();
                    break;
                  case "img":
                    b.src && (l.src = b.src);
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
                var I = r.alternate;
                if (I !== null) {
                  var de = I.memoizedState;
                  if (de !== null) {
                    var ye = de.dehydrated;
                    ye !== null && di(ye);
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
              throw Error(C(163));
          }
          Hr || r.flags & 512 && $d(r);
        } catch (ce) {
          kn(r, r.return, ce);
        }
      }
      if (r === n) {
        Fe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Fe = l;
        break;
      }
      Fe = r.return;
    }
  }
  function Us(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      if (r === n) {
        Fe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Fe = l;
        break;
      }
      Fe = r.return;
    }
  }
  function Kd(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              zs(4, r);
            } catch (b) {
              kn(r, l, b);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (b) {
                kn(r, c, b);
              }
            }
            var d = r.return;
            try {
              $d(r);
            } catch (b) {
              kn(r, d, b);
            }
            break;
          case 5:
            var m = r.return;
            try {
              $d(r);
            } catch (b) {
              kn(r, m, b);
            }
        }
      } catch (b) {
        kn(r, r.return, b);
      }
      if (r === n) {
        Fe = null;
        break;
      }
      var R = r.sibling;
      if (R !== null) {
        R.return = r.return, Fe = R;
        break;
      }
      Fe = r.return;
    }
  }
  var xy = Math.ceil, Vl = Se.ReactCurrentDispatcher, Mu = Se.ReactCurrentOwner, Tr = Se.ReactCurrentBatchConfig, Qt = 0, cr = null, tr = null, br = 0, Na = 0, wo = Ga(0), Yn = 0, js = null, Fi = 0, Ro = 0, cf = 0, Fs = null, ya = null, Wd = 0, To = 1 / 0, za = null, bo = !1, Lu = null, Bl = null, ff = !1, ll = null, Hs = 0, $l = 0, _o = null, Ps = -1, Pr = 0;
  function nr() {
    return Qt & 6 ? pt() : Ps !== -1 ? Ps : Ps = pt();
  }
  function Hi(n) {
    return n.mode & 1 ? Qt & 2 && br !== 0 ? br & -br : Sy.transition !== null ? (Pr === 0 && (Pr = Zu()), Pr) : (n = rn, n !== 0 || (n = window.event, n = n === void 0 ? 16 : io(n.type)), n) : 1;
  }
  function Gr(n, r, l, o) {
    if (50 < $l) throw $l = 0, _o = null, Error(C(185));
    Wi(n, l, o), (!(Qt & 2) || n !== cr) && (n === cr && (!(Qt & 2) && (Ro |= l), Yn === 4 && Si(n, br)), ga(n, o), l === 1 && Qt === 0 && !(r.mode & 1) && (To = pt() + 500, yo && Mi()));
  }
  function ga(n, r) {
    var l = n.callbackNode;
    lu(n, r);
    var o = fi(n, n === cr ? br : 0);
    if (o === 0) l !== null && lr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && lr(l), r === 1) n.tag === 0 ? Ll(Qd.bind(null, n)) : Oc(Qd.bind(null, n)), po(function() {
        !(Qt & 6) && Mi();
      }), l = null;
      else {
        switch (eo(o)) {
          case 1:
            l = Br;
            break;
          case 4:
            l = au;
            break;
          case 16:
            l = iu;
            break;
          case 536870912:
            l = Gu;
            break;
          default:
            l = iu;
        }
        l = gh(l, df.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function df(n, r) {
    if (Ps = -1, Pr = 0, Qt & 6) throw Error(C(327));
    var l = n.callbackNode;
    if (ko() && n.callbackNode !== l) return null;
    var o = fi(n, n === cr ? br : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = pf(n, o);
    else {
      r = o;
      var c = Qt;
      Qt |= 2;
      var d = ch();
      (cr !== n || br !== r) && (za = null, To = pt() + 500, ul(n, r));
      do
        try {
          fh();
          break;
        } catch (R) {
          sh(n, R);
        }
      while (!0);
      Rd(), Vl.current = d, Qt = c, tr !== null ? r = 0 : (cr = null, br = 0, r = Yn);
    }
    if (r !== 0) {
      if (r === 2 && (c = wl(n), c !== 0 && (o = c, r = Vs(n, c))), r === 1) throw l = js, ul(n, 0), Si(n, o), ga(n, pt()), l;
      if (r === 6) Si(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !wy(c) && (r = pf(n, o), r === 2 && (d = wl(n), d !== 0 && (o = d, r = Vs(n, d))), r === 1)) throw l = js, ul(n, 0), Si(n, o), ga(n, pt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(C(345));
          case 2:
            Au(n, ya, za);
            break;
          case 3:
            if (Si(n, o), (o & 130023424) === o && (r = Wd + 500 - pt(), 10 < r)) {
              if (fi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                nr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = _c(Au.bind(null, n, ya, za), r);
              break;
            }
            Au(n, ya, za);
            break;
          case 4:
            if (Si(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - $r(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = pt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * xy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = _c(Au.bind(null, n, ya, za), o);
              break;
            }
            Au(n, ya, za);
            break;
          case 5:
            Au(n, ya, za);
            break;
          default:
            throw Error(C(329));
        }
      }
    }
    return ga(n, pt()), n.callbackNode === l ? df.bind(null, n) : null;
  }
  function Vs(n, r) {
    var l = Fs;
    return n.current.memoizedState.isDehydrated && (ul(n, r).flags |= 256), n = pf(n, r), n !== 2 && (r = ya, ya = l, r !== null && Nu(r)), n;
  }
  function Nu(n) {
    ya === null ? ya = n : ya.push.apply(ya, n);
  }
  function wy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!vi(d(), c)) return !1;
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
  function Si(n, r) {
    for (r &= ~cf, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - $r(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Qd(n) {
    if (Qt & 6) throw Error(C(327));
    ko();
    var r = fi(n, 0);
    if (!(r & 1)) return ga(n, pt()), null;
    var l = pf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = wl(n);
      o !== 0 && (r = o, l = Vs(n, o));
    }
    if (l === 1) throw l = js, ul(n, 0), Si(n, r), ga(n, pt()), l;
    if (l === 6) throw Error(C(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Au(n, ya, za), ga(n, pt()), null;
  }
  function Gd(n, r) {
    var l = Qt;
    Qt |= 1;
    try {
      return n(r);
    } finally {
      Qt = l, Qt === 0 && (To = pt() + 500, yo && Mi());
    }
  }
  function zu(n) {
    ll !== null && ll.tag === 0 && !(Qt & 6) && ko();
    var r = Qt;
    Qt |= 1;
    var l = Tr.transition, o = rn;
    try {
      if (Tr.transition = null, rn = 1, n) return n();
    } finally {
      rn = o, Tr.transition = l, Qt = r, !(Qt & 6) && Mi();
    }
  }
  function Xd() {
    Na = wo.current, En(wo);
  }
  function ul(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Sd(l)), tr !== null) for (l = tr.return; l !== null; ) {
      var o = l;
      switch (Lc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && mo();
          break;
        case 3:
          xu(), En(or), En(Hn), nt();
          break;
        case 5:
          Uc(o);
          break;
        case 4:
          xu();
          break;
        case 13:
          En(Nn);
          break;
        case 19:
          En(Nn);
          break;
        case 10:
          Td(o.type._context);
          break;
        case 22:
        case 23:
          Xd();
      }
      l = l.return;
    }
    if (cr = n, tr = n = Il(n.current, null), br = Na = r, Yn = 0, js = null, cf = Ro = Fi = 0, ya = Fs = null, Eu !== null) {
      for (r = 0; r < Eu.length; r++) if (l = Eu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      Eu = null;
    }
    return n;
  }
  function sh(n, r) {
    do {
      var l = tr;
      try {
        if (Rd(), Ut.current = ku, Fc) {
          for (var o = ln.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Fc = !1;
        }
        if (hn = 0, hr = Zn = ln = null, gs = !1, wu = 0, Mu.current = null, l === null || l.return === null) {
          Yn = 1, js = r, tr = null;
          break;
        }
        e: {
          var d = n, m = l.return, R = l, b = r;
          if (r = br, R.flags |= 32768, b !== null && typeof b == "object" && typeof b.then == "function") {
            var I = b, de = R, ye = de.tag;
            if (!(de.mode & 1) && (ye === 0 || ye === 11 || ye === 15)) {
              var ce = de.alternate;
              ce ? (de.updateQueue = ce.updateQueue, de.memoizedState = ce.memoizedState, de.lanes = ce.lanes) : (de.updateQueue = null, de.memoizedState = null);
            }
            var ze = Xv(m);
            if (ze !== null) {
              ze.flags &= -257, Pl(ze, m, R, d, r), ze.mode & 1 && Fd(d, I, r), r = ze, b = I;
              var Be = r.updateQueue;
              if (Be === null) {
                var Ye = /* @__PURE__ */ new Set();
                Ye.add(b), r.updateQueue = Ye;
              } else Be.add(b);
              break e;
            } else {
              if (!(r & 1)) {
                Fd(d, I, r), qd();
                break e;
              }
              b = Error(C(426));
            }
          } else if (_n && R.mode & 1) {
            var Kn = Xv(m);
            if (Kn !== null) {
              !(Kn.flags & 65536) && (Kn.flags |= 256), Pl(Kn, m, R, d, r), nl(Du(b, R));
              break e;
            }
          }
          d = b = Du(b, R), Yn !== 4 && (Yn = 2), Fs === null ? Fs = [d] : Fs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var N = Gv(d, b, r);
                Iv(d, N);
                break e;
              case 1:
                R = b;
                var D = d.type, F = d.stateNode;
                if (!(d.flags & 128) && (typeof D.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && (Bl === null || !Bl.has(F)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var pe = jd(d, R, r);
                  Iv(d, pe);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ph(l);
      } catch ($e) {
        r = $e, tr === l && l !== null && (tr = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ch() {
    var n = Vl.current;
    return Vl.current = ku, n === null ? ku : n;
  }
  function qd() {
    (Yn === 0 || Yn === 3 || Yn === 2) && (Yn = 4), cr === null || !(Fi & 268435455) && !(Ro & 268435455) || Si(cr, br);
  }
  function pf(n, r) {
    var l = Qt;
    Qt |= 2;
    var o = ch();
    (cr !== n || br !== r) && (za = null, ul(n, r));
    do
      try {
        Ry();
        break;
      } catch (c) {
        sh(n, c);
      }
    while (!0);
    if (Rd(), Qt = l, Vl.current = o, tr !== null) throw Error(C(261));
    return cr = null, br = 0, Yn;
  }
  function Ry() {
    for (; tr !== null; ) dh(tr);
  }
  function fh() {
    for (; tr !== null && !la(); ) dh(tr);
  }
  function dh(n) {
    var r = yh(n.alternate, n, Na);
    n.memoizedProps = n.pendingProps, r === null ? ph(n) : tr = r, Mu.current = null;
  }
  function ph(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = uf(l, r), l !== null) {
          l.flags &= 32767, tr = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Yn = 6, tr = null;
          return;
        }
      } else if (l = rh(l, r, Na), l !== null) {
        tr = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        tr = r;
        return;
      }
      tr = r = n;
    } while (r !== null);
    Yn === 0 && (Yn = 5);
  }
  function Au(n, r, l) {
    var o = rn, c = Tr.transition;
    try {
      Tr.transition = null, rn = 1, Ty(n, r, l, o);
    } finally {
      Tr.transition = c, rn = o;
    }
    return null;
  }
  function Ty(n, r, l, o) {
    do
      ko();
    while (ll !== null);
    if (Qt & 6) throw Error(C(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(C(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Zf(n, d), n === cr && (tr = cr = null, br = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ff || (ff = !0, gh(iu, function() {
      return ko(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Tr.transition, Tr.transition = null;
      var m = rn;
      rn = 1;
      var R = Qt;
      Qt |= 4, Mu.current = null, ih(n, l), Id(l, n), oo(hu), Ka = !!os, hu = os = null, n.current = l, Cy(l), Ur(), Qt = R, rn = m, Tr.transition = d;
    } else n.current = l;
    if (ff && (ff = !1, ll = n, Hs = c), d = n.pendingLanes, d === 0 && (Bl = null), Qo(l.stateNode), ga(n, pt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (bo) throw bo = !1, n = Lu, Lu = null, n;
    return Hs & 1 && n.tag !== 0 && ko(), d = n.pendingLanes, d & 1 ? n === _o ? $l++ : ($l = 0, _o = n) : $l = 0, Mi(), null;
  }
  function ko() {
    if (ll !== null) {
      var n = eo(Hs), r = Tr.transition, l = rn;
      try {
        if (Tr.transition = null, rn = 16 > n ? 16 : n, ll === null) var o = !1;
        else {
          if (n = ll, ll = null, Hs = 0, Qt & 6) throw Error(C(331));
          var c = Qt;
          for (Qt |= 4, Fe = n.current; Fe !== null; ) {
            var d = Fe, m = d.child;
            if (Fe.flags & 16) {
              var R = d.deletions;
              if (R !== null) {
                for (var b = 0; b < R.length; b++) {
                  var I = R[b];
                  for (Fe = I; Fe !== null; ) {
                    var de = Fe;
                    switch (de.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(8, de, d);
                    }
                    var ye = de.child;
                    if (ye !== null) ye.return = de, Fe = ye;
                    else for (; Fe !== null; ) {
                      de = Fe;
                      var ce = de.sibling, ze = de.return;
                      if (sf(de), de === I) {
                        Fe = null;
                        break;
                      }
                      if (ce !== null) {
                        ce.return = ze, Fe = ce;
                        break;
                      }
                      Fe = ze;
                    }
                  }
                }
                var Be = d.alternate;
                if (Be !== null) {
                  var Ye = Be.child;
                  if (Ye !== null) {
                    Be.child = null;
                    do {
                      var Kn = Ye.sibling;
                      Ye.sibling = null, Ye = Kn;
                    } while (Ye !== null);
                  }
                }
                Fe = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, Fe = m;
            else e: for (; Fe !== null; ) {
              if (d = Fe, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ns(9, d, d.return);
              }
              var N = d.sibling;
              if (N !== null) {
                N.return = d.return, Fe = N;
                break e;
              }
              Fe = d.return;
            }
          }
          var D = n.current;
          for (Fe = D; Fe !== null; ) {
            m = Fe;
            var F = m.child;
            if (m.subtreeFlags & 2064 && F !== null) F.return = m, Fe = F;
            else e: for (m = D; Fe !== null; ) {
              if (R = Fe, R.flags & 2048) try {
                switch (R.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zs(9, R);
                }
              } catch ($e) {
                kn(R, R.return, $e);
              }
              if (R === m) {
                Fe = null;
                break e;
              }
              var pe = R.sibling;
              if (pe !== null) {
                pe.return = R.return, Fe = pe;
                break e;
              }
              Fe = R.return;
            }
          }
          if (Qt = c, Mi(), ua && typeof ua.onPostCommitFiberRoot == "function") try {
            ua.onPostCommitFiberRoot(Cl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        rn = l, Tr.transition = r;
      }
    }
    return !1;
  }
  function vh(n, r, l) {
    r = Du(l, r), r = Gv(n, r, 1), n = jl(n, r, 1), r = nr(), n !== null && (Wi(n, 1, r), ga(n, r));
  }
  function kn(n, r, l) {
    if (n.tag === 3) vh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        vh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Bl === null || !Bl.has(o))) {
          n = Du(l, n), n = jd(r, n, 1), r = jl(r, n, 1), n = nr(), r !== null && (Wi(r, 1, n), ga(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function by(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = nr(), n.pingedLanes |= n.suspendedLanes & l, cr === n && (br & l) === l && (Yn === 4 || Yn === 3 && (br & 130023424) === br && 500 > pt() - Wd ? ul(n, 0) : cf |= l), ga(n, r);
  }
  function hh(n, r) {
    r === 0 && (n.mode & 1 ? (r = ka, ka <<= 1, !(ka & 130023424) && (ka = 4194304)) : r = 1);
    var l = nr();
    n = Ma(n, r), n !== null && (Wi(n, r, l), ga(n, l));
  }
  function _y(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), hh(n, l);
  }
  function mh(n, r) {
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
        throw Error(C(314));
    }
    o !== null && o.delete(r), hh(n, l);
  }
  var yh;
  yh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || or.current) Jn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Jn = !1, Os(n, r, l);
      Jn = !!(n.flags & 131072);
    }
    else Jn = !1, _n && r.flags & 1048576 && Pv(r, tl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ja(n, r), n = r.pendingProps;
        var c = ca(r, Hn.current);
        Ln(r, l), c = Fl(null, r, o, n, c, l);
        var d = mi();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Xn(o) ? (d = !0, vr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Dd(r), c.updater = tf, r.stateNode = c, c._reactInternals = r, Ts(r, o, n, l), r = ks(null, r, o, !0, d, l)) : (r.tag = 0, _n && d && Mc(r), Rr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ja(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Dy(o), n = yi(o, n), c) {
            case 0:
              r = qv(null, r, o, n, l);
              break e;
            case 1:
              r = Zv(null, r, o, n, l);
              break e;
            case 11:
              r = ha(null, r, o, n, l);
              break e;
            case 14:
              r = Ou(null, r, o, yi(o.type, n), l);
              break e;
          }
          throw Error(C(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : yi(o, c), qv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : yi(o, c), Zv(n, r, o, c, l);
      case 3:
        e: {
          if (Co(r), n === null) throw Error(C(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, $v(n, r), ps(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Du(Error(C(423)), r), r = Jv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Du(Error(C(424)), r), r = Jv(n, r, o, l, c);
            break e;
          } else for (da = ki(r.stateNode.containerInfo.firstChild), fa = r, _n = !0, qa = null, l = Me(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ul(), o === c) {
              r = ei(n, r, l);
              break e;
            }
            Rr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Yv(r), n === null && xd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, bc(o, c) ? m = null : d !== null && bc(o, d) && (r.flags |= 32), Hd(n, r), Rr(n, r, m, l), r.child;
      case 6:
        return n === null && xd(r), null;
      case 13:
        return lf(n, r, l);
      case 4:
        return Md(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Bn(r, null, o, l) : Rr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : yi(o, c), ha(n, r, o, c, l);
      case 7:
        return Rr(n, r, r.pendingProps, l), r.child;
      case 8:
        return Rr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Rr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Ze(Oa, o._currentValue), o._currentValue = m, d !== null) if (vi(d.value, m)) {
            if (d.children === c.children && !or.current) {
              r = ei(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var R = d.dependencies;
            if (R !== null) {
              m = d.child;
              for (var b = R.firstContext; b !== null; ) {
                if (b.context === o) {
                  if (d.tag === 1) {
                    b = rl(-1, l & -l), b.tag = 2;
                    var I = d.updateQueue;
                    if (I !== null) {
                      I = I.shared;
                      var de = I.pending;
                      de === null ? b.next = b : (b.next = de.next, de.next = b), I.pending = b;
                    }
                  }
                  d.lanes |= l, b = d.alternate, b !== null && (b.lanes |= l), bd(
                    d.return,
                    l,
                    r
                  ), R.lanes |= l;
                  break;
                }
                b = b.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(C(341));
              m.lanes |= l, R = m.alternate, R !== null && (R.lanes |= l), bd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          Rr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Ln(r, l), c = Za(c), o = o(c), r.flags |= 1, Rr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = yi(o, r.pendingProps), c = yi(o.type, c), Ou(n, r, o, c, l);
      case 15:
        return Dt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : yi(o, c), Ja(n, r), r.tag = 1, Xn(o) ? (n = !0, vr(r)) : n = !1, Ln(r, l), nf(r, o, c), Ts(r, o, c, l), ks(null, r, o, !0, n, l);
      case 19:
        return Ai(n, r, l);
      case 22:
        return _s(n, r, l);
    }
    throw Error(C(156, r.tag));
  };
  function gh(n, r) {
    return nn(n, r);
  }
  function ky(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ni(n, r, l, o) {
    return new ky(n, r, l, o);
  }
  function Zd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Dy(n) {
    if (typeof n == "function") return Zd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === wt) return 11;
      if (n === $t) return 14;
    }
    return 2;
  }
  function Il(n, r) {
    var l = n.alternate;
    return l === null ? (l = ni(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Bs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Zd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Pe:
        return ol(l.children, c, d, r);
      case mt:
        m = 8, c |= 8;
        break;
      case xt:
        return n = ni(12, l, r, c | 2), n.elementType = xt, n.lanes = d, n;
      case ue:
        return n = ni(13, l, r, c), n.elementType = ue, n.lanes = d, n;
      case jt:
        return n = ni(19, l, r, c), n.elementType = jt, n.lanes = d, n;
      case He:
        return Yl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case lt:
            m = 10;
            break e;
          case Vt:
            m = 9;
            break e;
          case wt:
            m = 11;
            break e;
          case $t:
            m = 14;
            break e;
          case It:
            m = 16, o = null;
            break e;
        }
        throw Error(C(130, n == null ? n : typeof n, ""));
    }
    return r = ni(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function ol(n, r, l, o) {
    return n = ni(7, n, o, r), n.lanes = l, n;
  }
  function Yl(n, r, l, o) {
    return n = ni(22, n, o, r), n.elementType = He, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Jd(n, r, l) {
    return n = ni(6, n, null, r), n.lanes = l, n;
  }
  function vf(n, r, l) {
    return r = ni(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ju(0), this.expirationTimes = Ju(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ju(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function hf(n, r, l, o, c, d, m, R, b) {
    return n = new Sh(n, r, l, R, b), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ni(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Dd(d), n;
  }
  function Oy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Je, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function ep(n) {
    if (!n) return jr;
    n = n._reactInternals;
    e: {
      if (Ue(n) !== n || n.tag !== 1) throw Error(C(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Xn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(C(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Xn(l)) return fs(n, l, r);
    }
    return r;
  }
  function Eh(n, r, l, o, c, d, m, R, b) {
    return n = hf(l, o, !0, n, c, d, m, R, b), n.context = ep(null), l = n.current, o = nr(), c = Hi(l), d = rl(o, c), d.callback = r ?? null, jl(l, d, c), n.current.lanes = c, Wi(n, c, o), ga(n, o), n;
  }
  function mf(n, r, l, o) {
    var c = r.current, d = nr(), m = Hi(c);
    return l = ep(l), r.context === null ? r.context = l : r.pendingContext = l, r = rl(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = jl(c, r, m), n !== null && (Gr(n, c, m, d), Ac(n, c, m)), m;
  }
  function yf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function tp(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function gf(n, r) {
    tp(n, r), (n = n.alternate) && tp(n, r);
  }
  function Ch() {
    return null;
  }
  var Uu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function np(n) {
    this._internalRoot = n;
  }
  Sf.prototype.render = np.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(C(409));
    mf(n, r, null, null);
  }, Sf.prototype.unmount = np.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      zu(function() {
        mf(null, n, null, null);
      }), r[Ji] = null;
    }
  };
  function Sf(n) {
    this._internalRoot = n;
  }
  Sf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = yt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < ur.length && r !== 0 && r < ur[l].priority; l++) ;
      ur.splice(l, 0, n), l === 0 && qo(n);
    }
  };
  function rp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Ef(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function xh() {
  }
  function My(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var I = yf(m);
          d.call(I);
        };
      }
      var m = Eh(r, o, n, 0, null, !1, !1, "", xh);
      return n._reactRootContainer = m, n[Ji] = m.current, co(n.nodeType === 8 ? n.parentNode : n), zu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var R = o;
      o = function() {
        var I = yf(b);
        R.call(I);
      };
    }
    var b = hf(n, 0, !1, null, null, !1, !1, "", xh);
    return n._reactRootContainer = b, n[Ji] = b.current, co(n.nodeType === 8 ? n.parentNode : n), zu(function() {
      mf(r, b, l, o);
    }), b;
  }
  function $s(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var R = c;
        c = function() {
          var b = yf(m);
          R.call(b);
        };
      }
      mf(r, m, n, c);
    } else m = My(l, r, n, c, o);
    return yf(m);
  }
  Zt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ci(r.pendingLanes);
          l !== 0 && (Qi(r, l | 1), ga(r, pt()), !(Qt & 6) && (To = pt() + 500, Mi()));
        }
        break;
      case 13:
        zu(function() {
          var o = Ma(n, 1);
          if (o !== null) {
            var c = nr();
            Gr(o, n, 1, c);
          }
        }), gf(n, 1);
    }
  }, Go = function(n) {
    if (n.tag === 13) {
      var r = Ma(n, 134217728);
      if (r !== null) {
        var l = nr();
        Gr(r, n, 134217728, l);
      }
      gf(n, 134217728);
    }
  }, wi = function(n) {
    if (n.tag === 13) {
      var r = Hi(n), l = Ma(n, r);
      if (l !== null) {
        var o = nr();
        Gr(l, n, r, o);
      }
      gf(n, r);
    }
  }, yt = function() {
    return rn;
  }, to = function(n, r) {
    var l = rn;
    try {
      return rn = n, r();
    } finally {
      rn = l;
    }
  }, zt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Sr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Mn(o);
              if (!c) throw Error(C(90));
              dr(o), Sr(o, c);
            }
          }
        }
        break;
      case "textarea":
        ia(n, l);
        break;
      case "select":
        r = l.value, r != null && Tn(n, !!l.multiple, r, !1);
    }
  }, Er = Gd, Vr = zu;
  var Ly = { usingClientEntryPoint: !1, Events: [tt, hi, Mn, Dn, pr, Gd] }, Is = { findFiberByHostInstance: mu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wh = { bundleType: Is.bundleType, version: Is.version, rendererPackageName: Is.rendererPackageName, rendererConfig: Is.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Se.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = At(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Is.findFiberByHostInstance || Ch, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kl.isDisabled && Kl.supportsFiber) try {
      Cl = Kl.inject(wh), ua = Kl;
    } catch {
    }
  }
  return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ly, oi.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!rp(r)) throw Error(C(200));
    return Oy(n, r, null, l);
  }, oi.createRoot = function(n, r) {
    if (!rp(n)) throw Error(C(299));
    var l = !1, o = "", c = Uu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = hf(n, 1, !1, null, null, l, !1, o, c), n[Ji] = r.current, co(n.nodeType === 8 ? n.parentNode : n), new np(r);
  }, oi.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(C(188)) : (n = Object.keys(n).join(","), Error(C(268, n)));
    return n = At(r), n = n === null ? null : n.stateNode, n;
  }, oi.flushSync = function(n) {
    return zu(n);
  }, oi.hydrate = function(n, r, l) {
    if (!Ef(r)) throw Error(C(200));
    return $s(null, n, r, !0, l);
  }, oi.hydrateRoot = function(n, r, l) {
    if (!rp(n)) throw Error(C(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Uu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Eh(r, null, n, 1, l ?? null, c, !1, d, m), n[Ji] = r.current, co(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Sf(r);
  }, oi.render = function(n, r, l) {
    if (!Ef(r)) throw Error(C(200));
    return $s(null, n, r, !1, l);
  }, oi.unmountComponentAtNode = function(n) {
    if (!Ef(n)) throw Error(C(40));
    return n._reactRootContainer ? (zu(function() {
      $s(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ji] = null;
      });
    }), !0) : !1;
  }, oi.unstable_batchedUpdates = Gd, oi.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Ef(l)) throw Error(C(200));
    if (n == null || n._reactInternals === void 0) throw Error(C(38));
    return $s(n, r, l, !1, o);
  }, oi.version = "18.3.1-next-f1338f8080-20240426", oi;
}
var si = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cw;
function Lk() {
  return Cw || (Cw = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var E = Pt, w = kw(), C = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, P = !1;
    function H(e) {
      P = e;
    }
    function K(e) {
      if (!P) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        xe("warn", e, a);
      }
    }
    function y(e) {
      if (!P) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        xe("error", e, a);
      }
    }
    function xe(e, t, a) {
      {
        var i = C.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var re = 0, j = 1, Ee = 2, Z = 3, X = 4, B = 5, Ce = 6, J = 7, q = 8, ve = 9, he = 10, Re = 11, Se = 12, Te = 13, Je = 14, Pe = 15, mt = 16, xt = 17, lt = 18, Vt = 19, wt = 21, ue = 22, jt = 23, $t = 24, It = 25, He = !0, fe = !1, Ve = !1, be = !1, M = !1, ae = !0, Xe = !0, Qe = !0, Ot = !0, _t = /* @__PURE__ */ new Set(), Rt = {}, kt = {};
    function Tt(e, t) {
      tn(e, t), tn(e + "Capture", t);
    }
    function tn(e, t) {
      Rt[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Rt[e] = t;
      {
        var a = e.toLowerCase();
        kt[a] = e, e === "onDoubleClick" && (kt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        _t.add(t[i]);
    }
    var An = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", dr = Object.prototype.hasOwnProperty;
    function Rn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Qn(e) {
      try {
        return Un(e), !1;
      } catch {
        return !0;
      }
    }
    function Un(e) {
      return "" + e;
    }
    function jn(e, t) {
      if (Qn(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Un(e);
    }
    function Sr(e) {
      if (Qn(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Un(e);
    }
    function Ra(e, t) {
      if (Qn(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Un(e);
    }
    function Ar(e, t) {
      if (Qn(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Rn(e)), Un(e);
    }
    function Pn(e) {
      if (Qn(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Rn(e)), Un(e);
    }
    function Tn(e) {
      if (Qn(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Rn(e)), Un(e);
    }
    var Fn = 0, ar = 1, ia = 2, _ = 3, G = 4, oe = 5, De = 6, Oe = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", z = Oe + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Q = new RegExp("^[" + Oe + "][" + z + "]*$"), me = {}, Ke = {};
    function ut(e) {
      return dr.call(Ke, e) ? !0 : dr.call(me, e) ? !1 : Q.test(e) ? (Ke[e] = !0, !0) : (me[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Et(e, t, a) {
      return t !== null ? t.type === Fn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function gt(e, t, a, i) {
      if (a !== null && a.type === Fn)
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
    function dt(e, t, a, i) {
      if (t === null || typeof t > "u" || gt(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case _:
            return !t;
          case G:
            return t === !1;
          case oe:
            return isNaN(t);
          case De:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Mt(e) {
      return zt.hasOwnProperty(e) ? zt[e] : null;
    }
    function Lt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === ia || t === _ || t === G, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var zt = {}, qt = [
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
    qt.forEach(function(e) {
      zt[e] = new Lt(
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      zt[t] = new Lt(
        t,
        ar,
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
      zt[e] = new Lt(
        e,
        ia,
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
      zt[e] = new Lt(
        e,
        ia,
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
      zt[e] = new Lt(
        e,
        _,
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
      zt[e] = new Lt(
        e,
        _,
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
      zt[e] = new Lt(
        e,
        G,
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
      zt[e] = new Lt(
        e,
        De,
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
      zt[e] = new Lt(
        e,
        oe,
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
    var Yt = /[\-\:]([a-z])/g, Cn = function(e) {
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
      var t = e.replace(Yt, Cn);
      zt[t] = new Lt(
        t,
        ar,
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
      var t = e.replace(Yt, Cn);
      zt[t] = new Lt(
        t,
        ar,
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
      var t = e.replace(Yt, Cn);
      zt[t] = new Lt(
        t,
        ar,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      zt[e] = new Lt(
        e,
        ar,
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
    var Dn = "xlinkHref";
    zt[Dn] = new Lt(
      "xlinkHref",
      ar,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      zt[e] = new Lt(
        e,
        ar,
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
    var pr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Er = !1;
    function Vr(e) {
      !Er && pr.test(e) && (Er = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ba(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        jn(a, t), i.sanitizeURL && Vr("" + a);
        var s = i.attributeName, f = null;
        if (i.type === G) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : dt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (dt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === _)
            return a;
          f = e.getAttribute(s);
        }
        return dt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Cr(e, t, a, i) {
      {
        if (!ut(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return jn(a, t), u === "" + a ? a : u;
      }
    }
    function bn(e, t, a, i) {
      var u = Mt(t);
      if (!Et(t, u, i)) {
        if (dt(t, a, u, i) && (a = null), i || u === null) {
          if (ut(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (jn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === _ ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var S = u.attributeName, x = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(S);
        else {
          var O = u.type, k;
          O === _ || O === G && a === !0 ? k = "" : (jn(a, S), k = "" + a, u.sanitizeURL && Vr(k.toString())), x ? e.setAttributeNS(x, S, k) : e.setAttribute(S, k);
        }
      }
    }
    var ir = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), $a = Symbol.for("react.fragment"), Ta = Symbol.for("react.strict_mode"), ba = Symbol.for("react.profiler"), _a = Symbol.for("react.provider"), g = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), Ue = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), We = Symbol.for("react.scope"), et = Symbol.for("react.debug_trace_mode"), At = Symbol.for("react.offscreen"), Ft = Symbol.for("react.legacy_hidden"), nn = Symbol.for("react.cache"), lr = Symbol.for("react.tracing_marker"), la = Symbol.iterator, Ur = "@@iterator";
    function pt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = la && e[la] || e[Ur];
      return typeof t == "function" ? t : null;
    }
    var bt = Object.assign, Br = 0, au, iu, El, Gu, Cl, ua, Qo;
    function $r() {
    }
    $r.__reactDisabledLog = !0;
    function fc() {
      {
        if (Br === 0) {
          au = console.log, iu = console.info, El = console.warn, Gu = console.error, Cl = console.group, ua = console.groupCollapsed, Qo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: $r,
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
        Br++;
      }
    }
    function dc() {
      {
        if (Br--, Br === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: bt({}, e, {
              value: au
            }),
            info: bt({}, e, {
              value: iu
            }),
            warn: bt({}, e, {
              value: El
            }),
            error: bt({}, e, {
              value: Gu
            }),
            group: bt({}, e, {
              value: Cl
            }),
            groupCollapsed: bt({}, e, {
              value: ua
            }),
            groupEnd: bt({}, e, {
              value: Qo
            })
          });
        }
        Br < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xu = C.ReactCurrentDispatcher, xl;
    function ka(e, t, a) {
      {
        if (xl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            xl = i && i[1] || "";
          }
        return `
` + xl + e;
      }
    }
    var ci = !1, fi;
    {
      var qu = typeof WeakMap == "function" ? WeakMap : Map;
      fi = new qu();
    }
    function lu(e, t) {
      if (!e || ci)
        return "";
      {
        var a = fi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ci = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Xu.current, Xu.current = null, fc();
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
            } catch (Y) {
              i = Y;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (Y) {
              i = Y;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            i = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && i && typeof Y.stack == "string") {
          for (var p = Y.stack.split(`
`), v = i.stack.split(`
`), S = p.length - 1, x = v.length - 1; S >= 1 && x >= 0 && p[S] !== v[x]; )
            x--;
          for (; S >= 1 && x >= 0; S--, x--)
            if (p[S] !== v[x]) {
              if (S !== 1 || x !== 1)
                do
                  if (S--, x--, x < 0 || p[S] !== v[x]) {
                    var O = `
` + p[S].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && fi.set(e, O), O;
                  }
                while (S >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        ci = !1, Xu.current = s, dc(), Error.prepareStackTrace = u;
      }
      var k = e ? e.displayName || e.name : "", V = k ? ka(k) : "";
      return typeof e == "function" && fi.set(e, V), V;
    }
    function wl(e, t, a) {
      return lu(e, !0);
    }
    function Zu(e, t, a) {
      return lu(e, !1);
    }
    function Ju(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Wi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return lu(e, Ju(e));
      if (typeof e == "string")
        return ka(e);
      switch (e) {
        case ne:
          return ka("Suspense");
        case le:
          return ka("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case L:
            return Zu(e.render);
          case Ue:
            return Wi(e.type, t, a);
          case Ge: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Wi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Zf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case B:
          return ka(e.type);
        case mt:
          return ka("Lazy");
        case Te:
          return ka("Suspense");
        case Vt:
          return ka("SuspenseList");
        case re:
        case Ee:
        case Pe:
          return Zu(e.type);
        case Re:
          return Zu(e.type.render);
        case j:
          return wl(e.type);
        default:
          return "";
      }
    }
    function Qi(e) {
      try {
        var t = "", a = e;
        do
          t += Zf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function rn(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function eo(e) {
      return e.displayName || "Context";
    }
    function Zt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case $a:
          return "Fragment";
        case Vn:
          return "Portal";
        case ba:
          return "Profiler";
        case Ta:
          return "StrictMode";
        case ne:
          return "Suspense";
        case le:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var t = e;
            return eo(t) + ".Consumer";
          case _a:
            var a = e;
            return eo(a._context) + ".Provider";
          case L:
            return rn(e, e.render, "ForwardRef");
          case Ue:
            var i = e.displayName || null;
            return i !== null ? i : Zt(e.type) || "Memo";
          case Ge: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Zt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Go(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function wi(e) {
      return e.displayName || "Context";
    }
    function yt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case $t:
          return "Cache";
        case ve:
          var i = a;
          return wi(i) + ".Consumer";
        case he:
          var u = a;
          return wi(u._context) + ".Provider";
        case lt:
          return "DehydratedFragment";
        case Re:
          return Go(a, a.render, "ForwardRef");
        case J:
          return "Fragment";
        case B:
          return a;
        case X:
          return "Portal";
        case Z:
          return "Root";
        case Ce:
          return "Text";
        case mt:
          return Zt(a);
        case q:
          return a === Ta ? "StrictMode" : "Mode";
        case ue:
          return "Offscreen";
        case Se:
          return "Profiler";
        case wt:
          return "Scope";
        case Te:
          return "Suspense";
        case Vt:
          return "SuspenseList";
        case It:
          return "TracingMarker";
        case j:
        case re:
        case xt:
        case Ee:
        case Je:
        case Pe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var to = C.ReactDebugCurrentFrame, xr = null, Ri = !1;
    function Ir() {
      {
        if (xr === null)
          return null;
        var e = xr._debugOwner;
        if (e !== null && typeof e < "u")
          return yt(e);
      }
      return null;
    }
    function Ti() {
      return xr === null ? "" : Qi(xr);
    }
    function xn() {
      to.getCurrentStack = null, xr = null, Ri = !1;
    }
    function dn(e) {
      to.getCurrentStack = e === null ? null : Ti, xr = e, Ri = !1;
    }
    function Rl() {
      return xr;
    }
    function ur(e) {
      Ri = e;
    }
    function Yr(e) {
      return "" + e;
    }
    function Ia(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Tn(e), e;
        default:
          return "";
      }
    }
    var uu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Xo(e, t) {
      uu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function qo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Tl(e) {
      return e._valueTracker;
    }
    function ou(e) {
      e._valueTracker = null;
    }
    function Jf(e) {
      var t = "";
      return e && (qo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ya(e) {
      var t = qo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Tn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Tn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Tn(p), i = "" + p;
          },
          stopTracking: function() {
            ou(e), delete e[t];
          }
        };
        return f;
      }
    }
    function di(e) {
      Tl(e) || (e._valueTracker = Ya(e));
    }
    function bi(e) {
      if (!e)
        return !1;
      var t = Tl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Jf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ka(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var no = !1, ro = !1, bl = !1, su = !1;
    function ao(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function io(e, t) {
      var a = e, i = t.checked, u = bt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function pi(e, t) {
      Xo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ro && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ir() || "A component", t.type), ro = !0), t.value !== void 0 && t.defaultValue !== void 0 && !no && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ir() || "A component", t.type), no = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ia(t.value != null ? t.value : i),
        controlled: ao(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && bn(a, "checked", i, !1);
    }
    function T(e, t) {
      var a = e;
      {
        var i = ao(t);
        !a._wrapperState.controlled && i && !su && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), su = !0), a._wrapperState.controlled && !i && !bl && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), bl = !0);
      }
      h(e, t);
      var u = Ia(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Yr(u)) : a.value !== Yr(u) && (a.value = Yr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? rt(a, t.type, u) : t.hasOwnProperty("defaultValue") && rt(a, t.type, Ia(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function $(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Yr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function W(e, t) {
      var a = e;
      T(a, t), we(a, t);
    }
    function we(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        jn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Vh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            bi(f), T(f, p);
          }
        }
      }
    }
    function rt(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ka(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Yr(e._wrapperState.initialValue) : e.defaultValue !== Yr(a) && (e.defaultValue = Yr(a)));
    }
    var ke = !1, ot = !1, Ht = !1;
    function Jt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? E.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ot || (ot = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ht || (Ht = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ke && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ke = !0);
    }
    function Sn(e, t) {
      t.value != null && e.setAttribute("value", Yr(Ia(t.value)));
    }
    var pn = Array.isArray;
    function Nt(e) {
      return pn(e);
    }
    var vn;
    vn = !1;
    function On() {
      var e = Ir();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var _l = ["value", "defaultValue"];
    function Zo(e) {
      {
        Xo("select", e);
        for (var t = 0; t < _l.length; t++) {
          var a = _l[t];
          if (e[a] != null) {
            var i = Nt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, On()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, On());
          }
        }
      }
    }
    function Gi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var S = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== S && (u[v].selected = S), S && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var x = Yr(Ia(a)), O = null, k = 0; k < u.length; k++) {
          if (u[k].value === x) {
            u[k].selected = !0, i && (u[k].defaultSelected = !0);
            return;
          }
          O === null && !u[k].disabled && (O = u[k]);
        }
        O !== null && (O.selected = !0);
      }
    }
    function Jo(e, t) {
      return bt({}, t, {
        value: void 0
      });
    }
    function cu(e, t) {
      var a = e;
      Zo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !vn && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), vn = !0);
    }
    function ed(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Gi(a, !!t.multiple, i, !1) : t.defaultValue != null && Gi(a, !!t.multiple, t.defaultValue, !0);
    }
    function pc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Gi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Gi(a, !!t.multiple, t.defaultValue, !0) : Gi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function td(e, t) {
      var a = e, i = t.value;
      i != null && Gi(a, !!t.multiple, i, !1);
    }
    var cv = !1;
    function nd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = bt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Yr(a._wrapperState.initialValue)
      });
      return i;
    }
    function rd(e, t) {
      var a = e;
      Xo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ir() || "A component"), cv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Nt(u)) {
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
        initialValue: Ia(i)
      };
    }
    function fv(e, t) {
      var a = e, i = Ia(t.value), u = Ia(t.defaultValue);
      if (i != null) {
        var s = Yr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Yr(u));
    }
    function dv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function uy(e, t) {
      fv(e, t);
    }
    var Xi = "http://www.w3.org/1999/xhtml", ad = "http://www.w3.org/1998/Math/MathML", id = "http://www.w3.org/2000/svg";
    function ld(e) {
      switch (e) {
        case "svg":
          return id;
        case "math":
          return ad;
        default:
          return Xi;
      }
    }
    function ud(e, t) {
      return e == null || e === Xi ? ld(t) : e === id && t === "foreignObject" ? Xi : e;
    }
    var pv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, vc, vv = pv(function(e, t) {
      if (e.namespaceURI === id && !("innerHTML" in e)) {
        vc = vc || document.createElement("div"), vc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = vc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), oa = 1, qi = 3, Gn = 8, Zi = 9, od = 11, lo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === qi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, es = {
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
    }, ts = {
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
    function hv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var mv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ts).forEach(function(e) {
      mv.forEach(function(t) {
        ts[hv(t, e)] = ts[e];
      });
    });
    function hc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ts.hasOwnProperty(e) && ts[e]) ? t + "px" : (Ar(t, e), ("" + t).trim());
    }
    var yv = /([A-Z])/g, gv = /^ms-/;
    function uo(e) {
      return e.replace(yv, "-$1").toLowerCase().replace(gv, "-ms-");
    }
    var Sv = function() {
    };
    {
      var oy = /^(?:webkit|moz|o)[A-Z]/, sy = /^-ms-/, Ev = /-(.)/g, sd = /;\s*$/, _i = {}, fu = {}, Cv = !1, ns = !1, cy = function(e) {
        return e.replace(Ev, function(t, a) {
          return a.toUpperCase();
        });
      }, xv = function(e) {
        _i.hasOwnProperty(e) && _i[e] || (_i[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          cy(e.replace(sy, "ms-"))
        ));
      }, cd = function(e) {
        _i.hasOwnProperty(e) && _i[e] || (_i[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, fd = function(e, t) {
        fu.hasOwnProperty(t) && fu[t] || (fu[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(sd, "")));
      }, wv = function(e, t) {
        Cv || (Cv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Rv = function(e, t) {
        ns || (ns = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Sv = function(e, t) {
        e.indexOf("-") > -1 ? xv(e) : oy.test(e) ? cd(e) : sd.test(t) && fd(e, t), typeof t == "number" && (isNaN(t) ? wv(e, t) : isFinite(t) || Rv(e, t));
      };
    }
    var Tv = Sv;
    function fy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : uo(i)) + ":", t += hc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function bv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Tv(i, t[i]);
          var s = hc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function dy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function _v(e) {
      var t = {};
      for (var a in e)
        for (var i = es[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function py(e, t) {
      {
        if (!t)
          return;
        var a = _v(e), i = _v(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, y("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", dy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var vi = {
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
    }, rs = bt({
      menuitem: !0
    }, vi), kv = "__html";
    function mc(e, t) {
      if (t) {
        if (rs[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(kv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && y("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function kl(e, t) {
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
    var as = {
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
    }, yc = {
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
    }, oo = {}, vy = new RegExp("^(aria)-[" + z + "]*$"), so = new RegExp("^(aria)[A-Z][" + z + "]*$");
    function dd(e, t) {
      {
        if (dr.call(oo, t) && oo[t])
          return !0;
        if (so.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = yc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), oo[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), oo[t] = !0, !0;
        }
        if (vy.test(t)) {
          var u = t.toLowerCase(), s = yc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return oo[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), oo[t] = !0, !0;
        }
      }
      return !0;
    }
    function is(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = dd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? y("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && y("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function pd(e, t) {
      kl(e, t) || is(e, t);
    }
    var vd = !1;
    function gc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !vd && (vd = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var du = function() {
    };
    {
      var wr = {}, hd = /^on./, Sc = /^on[^A-Z]/, Dv = new RegExp("^(aria)-[" + z + "]*$"), Ov = new RegExp("^(aria)[A-Z][" + z + "]*$");
      du = function(e, t, a, i) {
        if (dr.call(wr, t) && wr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), wr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), wr[t] = !0, !0;
          if (hd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), wr[t] = !0, !0;
        } else if (hd.test(t))
          return Sc.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wr[t] = !0, !0;
        if (Dv.test(t) || Ov.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), wr[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), wr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), wr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), wr[t] = !0, !0;
        var v = Mt(t), S = v !== null && v.type === Fn;
        if (as.hasOwnProperty(u)) {
          var x = as[u];
          if (x !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, x), wr[t] = !0, !0;
        } else if (!S && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && gt(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : S ? !0 : gt(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === _ && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
      };
    }
    var Mv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = du(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Lv(e, t, a) {
      kl(e, t) || Mv(e, t, a);
    }
    var md = 1, Ec = 2, Wa = 4, yd = md | Ec | Wa, pu = null;
    function hy(e) {
      pu !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), pu = e;
    }
    function my() {
      pu === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), pu = null;
    }
    function ls(e) {
      return e === pu;
    }
    function gd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === qi ? t.parentNode : t;
    }
    var Cc = null, vu = null, cn = null;
    function xc(e) {
      var t = Mo(e);
      if (t) {
        if (typeof Cc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Vh(a);
          Cc(t.stateNode, t.type, i);
        }
      }
    }
    function wc(e) {
      Cc = e;
    }
    function co(e) {
      vu ? cn ? cn.push(e) : cn = [e] : vu = e;
    }
    function Nv() {
      return vu !== null || cn !== null;
    }
    function Rc() {
      if (vu) {
        var e = vu, t = cn;
        if (vu = null, cn = null, xc(e), t)
          for (var a = 0; a < t.length; a++)
            xc(t[a]);
      }
    }
    var fo = function(e, t) {
      return e(t);
    }, us = function() {
    }, Dl = !1;
    function zv() {
      var e = Nv();
      e && (us(), Rc());
    }
    function Av(e, t, a) {
      if (Dl)
        return e(t, a);
      Dl = !0;
      try {
        return fo(e, t, a);
      } finally {
        Dl = !1, zv();
      }
    }
    function yy(e, t, a) {
      fo = e, us = a;
    }
    function Uv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Tc(e, t, a) {
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
          return !!(a.disabled && Uv(t));
        default:
          return !1;
      }
    }
    function Ol(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Vh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Tc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var os = !1;
    if (An)
      try {
        var hu = {};
        Object.defineProperty(hu, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", hu, hu), window.removeEventListener("test", hu, hu);
      } catch {
        os = !1;
      }
    function bc(e, t, a, i, u, s, f, p, v) {
      var S = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, S);
      } catch (x) {
        this.onError(x);
      }
    }
    var _c = bc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Sd = document.createElement("react");
      _c = function(t, a, i, u, s, f, p, v, S) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var x = document.createEvent("Event"), O = !1, k = !0, V = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function ee() {
          Sd.removeEventListener(te, at, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var Le = Array.prototype.slice.call(arguments, 3);
        function at() {
          O = !0, ee(), a.apply(i, Le), k = !1;
        }
        var qe, Xt = !1, Bt = !1;
        function A(U) {
          if (qe = U.error, Xt = !0, qe === null && U.colno === 0 && U.lineno === 0 && (Bt = !0), U.defaultPrevented && qe != null && typeof qe == "object")
            try {
              qe._suppressLogging = !0;
            } catch {
            }
        }
        var te = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", A), Sd.addEventListener(te, at, !1), x.initEvent(te, !1, !1), Sd.dispatchEvent(x), Y && Object.defineProperty(window, "event", Y), O && k && (Xt ? Bt && (qe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : qe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(qe)), window.removeEventListener("error", A), !O)
          return ee(), bc.apply(this, arguments);
      };
    }
    var jv = _c, po = !1, kc = null, vo = !1, ki = null, Fv = {
      onError: function(e) {
        po = !0, kc = e;
      }
    };
    function Ml(e, t, a, i, u, s, f, p, v) {
      po = !1, kc = null, jv.apply(Fv, arguments);
    }
    function Di(e, t, a, i, u, s, f, p, v) {
      if (Ml.apply(this, arguments), po) {
        var S = cs();
        vo || (vo = !0, ki = S);
      }
    }
    function ss() {
      if (vo) {
        var e = ki;
        throw vo = !1, ki = null, e;
      }
    }
    function Ji() {
      return po;
    }
    function cs() {
      if (po) {
        var e = kc;
        return po = !1, kc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ho(e) {
      return e._reactInternals;
    }
    function gy(e) {
      return e._reactInternals !== void 0;
    }
    function mu(e, t) {
      e._reactInternals = t;
    }
    var tt = (
      /*                      */
      0
    ), hi = (
      /*                */
      1
    ), Mn = (
      /*                    */
      2
    ), Wt = (
      /*                       */
      4
    ), Qa = (
      /*                */
      16
    ), Ga = (
      /*                 */
      32
    ), En = (
      /*                     */
      64
    ), Ze = (
      /*                   */
      128
    ), jr = (
      /*            */
      256
    ), Hn = (
      /*                          */
      512
    ), or = (
      /*                     */
      1024
    ), sa = (
      /*                      */
      2048
    ), ca = (
      /*                    */
      4096
    ), Xn = (
      /*                   */
      8192
    ), mo = (
      /*             */
      16384
    ), Hv = (
      /*               */
      32767
    ), fs = (
      /*                   */
      32768
    ), vr = (
      /*                */
      65536
    ), Dc = (
      /* */
      131072
    ), Oi = (
      /*                       */
      1048576
    ), yo = (
      /*                    */
      2097152
    ), el = (
      /*                 */
      4194304
    ), Oc = (
      /*                */
      8388608
    ), Ll = (
      /*               */
      16777216
    ), Mi = (
      /*              */
      33554432
    ), Nl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Wt | or | 0
    ), zl = Mn | Wt | Qa | Ga | Hn | ca | Xn, Al = Wt | En | Hn | Xn, tl = sa | Qa, qn = el | Oc | yo, Xa = C.ReactCurrentOwner;
    function Da(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Mn | ca)) !== tt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Z ? a : null;
    }
    function Li(e) {
      if (e.tag === Te) {
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
    function Ni(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function yu(e) {
      return Da(e) === e;
    }
    function Pv(e) {
      {
        var t = Xa.current;
        if (t !== null && t.tag === j) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", yt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ho(e);
      return u ? Da(u) === u : !1;
    }
    function Mc(e) {
      if (Da(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Lc(e) {
      var t = e.alternate;
      if (!t) {
        var a = Da(e);
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
              return Mc(s), e;
            if (v === u)
              return Mc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var S = !1, x = s.child; x; ) {
            if (x === i) {
              S = !0, i = s, u = f;
              break;
            }
            if (x === u) {
              S = !0, u = s, i = f;
              break;
            }
            x = x.sibling;
          }
          if (!S) {
            for (x = f.child; x; ) {
              if (x === i) {
                S = !0, i = f, u = s;
                break;
              }
              if (x === u) {
                S = !0, u = f, i = s;
                break;
              }
              x = x.sibling;
            }
            if (!S)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function fa(e) {
      var t = Lc(e);
      return t !== null ? da(t) : null;
    }
    function da(e) {
      if (e.tag === B || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = da(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function _n(e) {
      var t = Lc(e);
      return t !== null ? qa(t) : null;
    }
    function qa(e) {
      if (e.tag === B || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== X) {
          var a = qa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ed = w.unstable_scheduleCallback, Vv = w.unstable_cancelCallback, Cd = w.unstable_shouldYield, xd = w.unstable_requestPaint, sr = w.unstable_now, Nc = w.unstable_getCurrentPriorityLevel, ds = w.unstable_ImmediatePriority, Ul = w.unstable_UserBlockingPriority, nl = w.unstable_NormalPriority, Sy = w.unstable_LowPriority, gu = w.unstable_IdlePriority, zc = w.unstable_yieldValue, Bv = w.unstable_setDisableYieldValue, Su = null, Bn = null, Me = null, Oa = !1, pa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function go(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Xe && (e = bt({}, e, {
          getLaneLabelMap: Eu,
          injectProfilingHooks: Za
        })), Su = t.inject(e), Bn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function wd(e, t) {
      if (Bn && typeof Bn.onScheduleFiberRoot == "function")
        try {
          Bn.onScheduleFiberRoot(Su, e, t);
        } catch (a) {
          Oa || (Oa = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function Rd(e, t) {
      if (Bn && typeof Bn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ze) === Ze;
          if (Qe) {
            var i;
            switch (t) {
              case Kr:
                i = ds;
                break;
              case Ai:
                i = Ul;
                break;
              case Ja:
                i = nl;
                break;
              case ei:
                i = gu;
                break;
              default:
                i = nl;
                break;
            }
            Bn.onCommitFiberRoot(Su, e, i, a);
          }
        } catch (u) {
          Oa || (Oa = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function Td(e) {
      if (Bn && typeof Bn.onPostCommitFiberRoot == "function")
        try {
          Bn.onPostCommitFiberRoot(Su, e);
        } catch (t) {
          Oa || (Oa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function bd(e) {
      if (Bn && typeof Bn.onCommitFiberUnmount == "function")
        try {
          Bn.onCommitFiberUnmount(Su, e);
        } catch (t) {
          Oa || (Oa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Ln(e) {
      if (typeof zc == "function" && (Bv(e), H(e)), Bn && typeof Bn.setStrictMode == "function")
        try {
          Bn.setStrictMode(Su, e);
        } catch (t) {
          Oa || (Oa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Za(e) {
      Me = e;
    }
    function Eu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < wu; a++) {
          var i = Kv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function _d(e) {
      Me !== null && typeof Me.markCommitStarted == "function" && Me.markCommitStarted(e);
    }
    function kd() {
      Me !== null && typeof Me.markCommitStopped == "function" && Me.markCommitStopped();
    }
    function Ma(e) {
      Me !== null && typeof Me.markComponentRenderStarted == "function" && Me.markComponentRenderStarted(e);
    }
    function La() {
      Me !== null && typeof Me.markComponentRenderStopped == "function" && Me.markComponentRenderStopped();
    }
    function Dd(e) {
      Me !== null && typeof Me.markComponentPassiveEffectMountStarted == "function" && Me.markComponentPassiveEffectMountStarted(e);
    }
    function $v() {
      Me !== null && typeof Me.markComponentPassiveEffectMountStopped == "function" && Me.markComponentPassiveEffectMountStopped();
    }
    function rl(e) {
      Me !== null && typeof Me.markComponentPassiveEffectUnmountStarted == "function" && Me.markComponentPassiveEffectUnmountStarted(e);
    }
    function jl() {
      Me !== null && typeof Me.markComponentPassiveEffectUnmountStopped == "function" && Me.markComponentPassiveEffectUnmountStopped();
    }
    function Ac(e) {
      Me !== null && typeof Me.markComponentLayoutEffectMountStarted == "function" && Me.markComponentLayoutEffectMountStarted(e);
    }
    function Iv() {
      Me !== null && typeof Me.markComponentLayoutEffectMountStopped == "function" && Me.markComponentLayoutEffectMountStopped();
    }
    function ps(e) {
      Me !== null && typeof Me.markComponentLayoutEffectUnmountStarted == "function" && Me.markComponentLayoutEffectUnmountStarted(e);
    }
    function Od() {
      Me !== null && typeof Me.markComponentLayoutEffectUnmountStopped == "function" && Me.markComponentLayoutEffectUnmountStopped();
    }
    function vs(e, t, a) {
      Me !== null && typeof Me.markComponentErrored == "function" && Me.markComponentErrored(e, t, a);
    }
    function zi(e, t, a) {
      Me !== null && typeof Me.markComponentSuspended == "function" && Me.markComponentSuspended(e, t, a);
    }
    function hs(e) {
      Me !== null && typeof Me.markLayoutEffectsStarted == "function" && Me.markLayoutEffectsStarted(e);
    }
    function ms() {
      Me !== null && typeof Me.markLayoutEffectsStopped == "function" && Me.markLayoutEffectsStopped();
    }
    function Cu(e) {
      Me !== null && typeof Me.markPassiveEffectsStarted == "function" && Me.markPassiveEffectsStarted(e);
    }
    function Md() {
      Me !== null && typeof Me.markPassiveEffectsStopped == "function" && Me.markPassiveEffectsStopped();
    }
    function xu(e) {
      Me !== null && typeof Me.markRenderStarted == "function" && Me.markRenderStarted(e);
    }
    function Yv() {
      Me !== null && typeof Me.markRenderYielded == "function" && Me.markRenderYielded();
    }
    function Uc() {
      Me !== null && typeof Me.markRenderStopped == "function" && Me.markRenderStopped();
    }
    function Nn(e) {
      Me !== null && typeof Me.markRenderScheduled == "function" && Me.markRenderScheduled(e);
    }
    function jc(e, t) {
      Me !== null && typeof Me.markForceUpdateScheduled == "function" && Me.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      Me !== null && typeof Me.markStateUpdateScheduled == "function" && Me.markStateUpdateScheduled(e, t);
    }
    var nt = (
      /*                         */
      0
    ), Ut = (
      /*                 */
      1
    ), an = (
      /*                    */
      2
    ), hn = (
      /*               */
      8
    ), ln = (
      /*              */
      16
    ), Zn = Math.clz32 ? Math.clz32 : gs, hr = Math.log, Fc = Math.LN2;
    function gs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (hr(t) / Fc | 0) | 0;
    }
    var wu = 31, se = (
      /*                        */
      0
    ), en = (
      /*                          */
      0
    ), ct = (
      /*                        */
      1
    ), Fl = (
      /*    */
      2
    ), mi = (
      /*             */
      4
    ), Fr = (
      /*            */
      8
    ), $n = (
      /*                     */
      16
    ), al = (
      /*                */
      32
    ), Hl = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), Hc = (
      /*                        */
      128
    ), Pc = (
      /*                        */
      256
    ), Vc = (
      /*                        */
      512
    ), Bc = (
      /*                        */
      1024
    ), $c = (
      /*                        */
      2048
    ), Ic = (
      /*                        */
      4096
    ), Yc = (
      /*                        */
      8192
    ), Kc = (
      /*                        */
      16384
    ), Tu = (
      /*                       */
      32768
    ), Wc = (
      /*                       */
      65536
    ), So = (
      /*                       */
      131072
    ), Eo = (
      /*                       */
      262144
    ), Qc = (
      /*                       */
      524288
    ), Ss = (
      /*                       */
      1048576
    ), Gc = (
      /*                       */
      2097152
    ), Es = (
      /*                            */
      130023424
    ), bu = (
      /*                             */
      4194304
    ), Xc = (
      /*                             */
      8388608
    ), Cs = (
      /*                             */
      16777216
    ), qc = (
      /*                             */
      33554432
    ), Zc = (
      /*                             */
      67108864
    ), Ld = bu, xs = (
      /*          */
      134217728
    ), Nd = (
      /*                          */
      268435455
    ), ws = (
      /*               */
      268435456
    ), _u = (
      /*                        */
      536870912
    ), va = (
      /*                   */
      1073741824
    );
    function Kv(e) {
      {
        if (e & ct)
          return "Sync";
        if (e & Fl)
          return "InputContinuousHydration";
        if (e & mi)
          return "InputContinuous";
        if (e & Fr)
          return "DefaultHydration";
        if (e & $n)
          return "Default";
        if (e & al)
          return "TransitionHydration";
        if (e & Hl)
          return "Transition";
        if (e & Es)
          return "Retry";
        if (e & xs)
          return "SelectiveHydration";
        if (e & ws)
          return "IdleHydration";
        if (e & _u)
          return "Idle";
        if (e & va)
          return "Offscreen";
      }
    }
    var gn = -1, ku = Ru, Jc = bu;
    function Rs(e) {
      switch (Pl(e)) {
        case ct:
          return ct;
        case Fl:
          return Fl;
        case mi:
          return mi;
        case Fr:
          return Fr;
        case $n:
          return $n;
        case al:
          return al;
        case Ru:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Kc:
        case Tu:
        case Wc:
        case So:
        case Eo:
        case Qc:
        case Ss:
        case Gc:
          return e & Hl;
        case bu:
        case Xc:
        case Cs:
        case qc:
        case Zc:
          return e & Es;
        case xs:
          return xs;
        case ws:
          return ws;
        case _u:
          return _u;
        case va:
          return va;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ef(e, t) {
      var a = e.pendingLanes;
      if (a === se)
        return se;
      var i = se, u = e.suspendedLanes, s = e.pingedLanes, f = a & Nd;
      if (f !== se) {
        var p = f & ~u;
        if (p !== se)
          i = Rs(p);
        else {
          var v = f & s;
          v !== se && (i = Rs(v));
        }
      } else {
        var S = a & ~u;
        S !== se ? i = Rs(S) : s !== se && (i = Rs(s));
      }
      if (i === se)
        return se;
      if (t !== se && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === se) {
        var x = Pl(i), O = Pl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          x >= O || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          x === $n && (O & Hl) !== se
        )
          return t;
      }
      (i & mi) !== se && (i |= a & $n);
      var k = e.entangledLanes;
      if (k !== se)
        for (var V = e.entanglements, Y = i & k; Y > 0; ) {
          var ee = Jn(Y), Le = 1 << ee;
          i |= V[ee], Y &= ~Le;
        }
      return i;
    }
    function yi(e, t) {
      for (var a = e.eventTimes, i = gn; t > 0; ) {
        var u = Jn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function zd(e, t) {
      switch (e) {
        case ct:
        case Fl:
        case mi:
          return t + 250;
        case Fr:
        case $n:
        case al:
        case Ru:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Kc:
        case Tu:
        case Wc:
        case So:
        case Eo:
        case Qc:
        case Ss:
        case Gc:
          return t + 5e3;
        case bu:
        case Xc:
        case Cs:
        case qc:
        case Zc:
          return gn;
        case xs:
        case ws:
        case _u:
        case va:
          return gn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), gn;
      }
    }
    function tf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Jn(f), v = 1 << p, S = s[p];
        S === gn ? ((v & i) === se || (v & u) !== se) && (s[p] = zd(v, t)) : S <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Wv(e) {
      return Rs(e.pendingLanes);
    }
    function nf(e) {
      var t = e.pendingLanes & ~va;
      return t !== se ? t : t & va ? va : se;
    }
    function Qv(e) {
      return (e & ct) !== se;
    }
    function Ts(e) {
      return (e & Nd) !== se;
    }
    function Du(e) {
      return (e & Es) === e;
    }
    function Ad(e) {
      var t = ct | mi | $n;
      return (e & t) === se;
    }
    function Ud(e) {
      return (e & Hl) === e;
    }
    function rf(e, t) {
      var a = Fl | mi | Fr | $n;
      return (t & a) !== se;
    }
    function Gv(e, t) {
      return (t & e.expiredLanes) !== se;
    }
    function jd(e) {
      return (e & Hl) !== se;
    }
    function Fd() {
      var e = ku;
      return ku <<= 1, (ku & Hl) === se && (ku = Ru), e;
    }
    function Xv() {
      var e = Jc;
      return Jc <<= 1, (Jc & Es) === se && (Jc = bu), e;
    }
    function Pl(e) {
      return e & -e;
    }
    function bs(e) {
      return Pl(e);
    }
    function Jn(e) {
      return 31 - Zn(e);
    }
    function Rr(e) {
      return Jn(e);
    }
    function ha(e, t) {
      return (e & t) !== se;
    }
    function Ou(e, t) {
      return (e & t) === t;
    }
    function Dt(e, t) {
      return e | t;
    }
    function _s(e, t) {
      return e & ~t;
    }
    function Hd(e, t) {
      return e & t;
    }
    function qv(e) {
      return e;
    }
    function Zv(e, t) {
      return e !== en && e < t ? e : t;
    }
    function ks(e) {
      for (var t = [], a = 0; a < wu; a++)
        t.push(e);
      return t;
    }
    function Co(e, t, a) {
      e.pendingLanes |= t, t !== _u && (e.suspendedLanes = se, e.pingedLanes = se);
      var i = e.eventTimes, u = Rr(t);
      i[u] = a;
    }
    function Jv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Jn(i), s = 1 << u;
        a[u] = gn, i &= ~s;
      }
    }
    function af(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Pd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = se, e.pingedLanes = se, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Jn(f), v = 1 << p;
        i[p] = se, u[p] = gn, s[p] = gn, f &= ~v;
      }
    }
    function lf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Jn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Vd(e, t) {
      var a = Pl(t), i;
      switch (a) {
        case mi:
          i = Fl;
          break;
        case $n:
          i = Fr;
          break;
        case Ru:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Kc:
        case Tu:
        case Wc:
        case So:
        case Eo:
        case Qc:
        case Ss:
        case Gc:
        case bu:
        case Xc:
        case Cs:
        case qc:
        case Zc:
          i = al;
          break;
        case _u:
          i = ws;
          break;
        default:
          i = en;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== en ? en : i;
    }
    function Ds(e, t, a) {
      if (pa)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Rr(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function eh(e, t) {
      if (pa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Rr(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Bd(e, t) {
      return null;
    }
    var Kr = ct, Ai = mi, Ja = $n, ei = _u, Os = en;
    function ti() {
      return Os;
    }
    function er(e) {
      Os = e;
    }
    function th(e, t) {
      var a = Os;
      try {
        return Os = e, t();
      } finally {
        Os = a;
      }
    }
    function nh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ms(e, t) {
      return e > t ? e : t;
    }
    function mr(e, t) {
      return e !== 0 && e < t;
    }
    function rh(e) {
      var t = Pl(e);
      return mr(Kr, t) ? mr(Ai, t) ? Ts(t) ? Ja : ei : Ai : Kr;
    }
    function uf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ls;
    function Hr(e) {
      Ls = e;
    }
    function Ey(e) {
      Ls(e);
    }
    var Fe;
    function xo(e) {
      Fe = e;
    }
    var of;
    function ah(e) {
      of = e;
    }
    var ih;
    function Ns(e) {
      ih = e;
    }
    var zs;
    function $d(e) {
      zs = e;
    }
    var sf = !1, As = [], il = null, Ui = null, ji = null, In = /* @__PURE__ */ new Map(), Wr = /* @__PURE__ */ new Map(), Qr = [], lh = [
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
    function uh(e) {
      return lh.indexOf(e) > -1;
    }
    function gi(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Id(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          il = null;
          break;
        case "dragenter":
        case "dragleave":
          Ui = null;
          break;
        case "mouseover":
        case "mouseout":
          ji = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          In.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Wr.delete(i);
          break;
        }
      }
    }
    function ma(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = gi(t, a, i, u, s);
        if (t !== null) {
          var p = Mo(t);
          p !== null && Fe(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Cy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return il = ma(il, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ui = ma(Ui, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ji = ma(ji, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, S = v.pointerId;
          return In.set(S, ma(In.get(S) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var x = u, O = x.pointerId;
          return Wr.set(O, ma(Wr.get(O) || null, e, t, a, i, x)), !0;
        }
      }
      return !1;
    }
    function Yd(e) {
      var t = Ws(e.target);
      if (t !== null) {
        var a = Da(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Te) {
            var u = Li(a);
            if (u !== null) {
              e.blockedOn = u, zs(e.priority, function() {
                of(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (uf(s)) {
              e.blockedOn = Ni(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function oh(e) {
      for (var t = ih(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Qr.length && mr(t, Qr[i].priority); i++)
        ;
      Qr.splice(i, 0, a), i === 0 && Yd(a);
    }
    function Us(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ro(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          hy(s), u.target.dispatchEvent(s), my();
        } else {
          var f = Mo(i);
          return f !== null && Fe(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Kd(e, t, a) {
      Us(e) && a.delete(t);
    }
    function xy() {
      sf = !1, il !== null && Us(il) && (il = null), Ui !== null && Us(Ui) && (Ui = null), ji !== null && Us(ji) && (ji = null), In.forEach(Kd), Wr.forEach(Kd);
    }
    function Vl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, sf || (sf = !0, w.unstable_scheduleCallback(w.unstable_NormalPriority, xy)));
    }
    function Mu(e) {
      if (As.length > 0) {
        Vl(As[0], e);
        for (var t = 1; t < As.length; t++) {
          var a = As[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      il !== null && Vl(il, e), Ui !== null && Vl(Ui, e), ji !== null && Vl(ji, e);
      var i = function(p) {
        return Vl(p, e);
      };
      In.forEach(i), Wr.forEach(i);
      for (var u = 0; u < Qr.length; u++) {
        var s = Qr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Qr.length > 0; ) {
        var f = Qr[0];
        if (f.blockedOn !== null)
          break;
        Yd(f), f.blockedOn === null && Qr.shift();
      }
    }
    var Tr = C.ReactCurrentBatchConfig, Qt = !0;
    function cr(e) {
      Qt = !!e;
    }
    function tr() {
      return Qt;
    }
    function br(e, t, a) {
      var i = cf(t), u;
      switch (i) {
        case Kr:
          u = Na;
          break;
        case Ai:
          u = wo;
          break;
        case Ja:
        default:
          u = Yn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Na(e, t, a, i) {
      var u = ti(), s = Tr.transition;
      Tr.transition = null;
      try {
        er(Kr), Yn(e, t, a, i);
      } finally {
        er(u), Tr.transition = s;
      }
    }
    function wo(e, t, a, i) {
      var u = ti(), s = Tr.transition;
      Tr.transition = null;
      try {
        er(Ai), Yn(e, t, a, i);
      } finally {
        er(u), Tr.transition = s;
      }
    }
    function Yn(e, t, a, i) {
      Qt && js(e, t, a, i);
    }
    function js(e, t, a, i) {
      var u = Ro(e, t, a, i);
      if (u === null) {
        Hy(e, t, i, Fi, a), Id(e, i);
        return;
      }
      if (Cy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Id(e, i), t & Wa && uh(e)) {
        for (; u !== null; ) {
          var s = Mo(u);
          s !== null && Ey(s);
          var f = Ro(e, t, a, i);
          if (f === null && Hy(e, t, i, Fi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Hy(e, t, i, null, a);
    }
    var Fi = null;
    function Ro(e, t, a, i) {
      Fi = null;
      var u = gd(i), s = Ws(u);
      if (s !== null) {
        var f = Da(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Te) {
            var v = Li(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === Z) {
            var S = f.stateNode;
            if (uf(S))
              return Ni(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Fi = s, null;
    }
    function cf(e) {
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
          return Kr;
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
          return Ai;
        case "message": {
          var t = Nc();
          switch (t) {
            case ds:
              return Kr;
            case Ul:
              return Ai;
            case nl:
            case Sy:
              return Ja;
            case gu:
              return ei;
            default:
              return Ja;
          }
        }
        default:
          return Ja;
      }
    }
    function Fs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ya(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Wd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function To(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var za = null, bo = null, Lu = null;
    function Bl(e) {
      return za = e, bo = Hs(), !0;
    }
    function ff() {
      za = null, bo = null, Lu = null;
    }
    function ll() {
      if (Lu)
        return Lu;
      var e, t = bo, a = t.length, i, u = Hs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Lu = u.slice(e, p), Lu;
    }
    function Hs() {
      return "value" in za ? za.value : za.textContent;
    }
    function $l(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function _o() {
      return !0;
    }
    function Ps() {
      return !1;
    }
    function Pr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var S = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return S ? this.isDefaultPrevented = _o : this.isDefaultPrevented = Ps, this.isPropagationStopped = Ps, this;
      }
      return bt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = _o);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = _o);
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
        isPersistent: _o
      }), t;
    }
    var nr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Hi = Pr(nr), Gr = bt({}, nr, {
      view: 0,
      detail: 0
    }), ga = Pr(Gr), df, Vs, Nu;
    function wy(e) {
      e !== Nu && (Nu && e.type === "mousemove" ? (df = e.screenX - Nu.screenX, Vs = e.screenY - Nu.screenY) : (df = 0, Vs = 0), Nu = e);
    }
    var Si = bt({}, Gr, {
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
      getModifierState: kn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (wy(e), df);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Vs;
      }
    }), Qd = Pr(Si), Gd = bt({}, Si, {
      dataTransfer: 0
    }), zu = Pr(Gd), Xd = bt({}, Gr, {
      relatedTarget: 0
    }), ul = Pr(Xd), sh = bt({}, nr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ch = Pr(sh), qd = bt({}, nr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), pf = Pr(qd), Ry = bt({}, nr, {
      data: 0
    }), fh = Pr(Ry), dh = fh, ph = {
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
    }, Au = {
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
    function Ty(e) {
      if (e.key) {
        var t = ph[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = $l(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Au[e.keyCode] || "Unidentified" : "";
    }
    var ko = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function vh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ko[e];
      return i ? !!a[i] : !1;
    }
    function kn(e) {
      return vh;
    }
    var by = bt({}, Gr, {
      key: Ty,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: kn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? $l(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? $l(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), hh = Pr(by), _y = bt({}, Si, {
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
    }), mh = Pr(_y), yh = bt({}, Gr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: kn
    }), gh = Pr(yh), ky = bt({}, nr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ni = Pr(ky), Zd = bt({}, Si, {
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
    }), Dy = Pr(Zd), Il = [9, 13, 27, 32], Bs = 229, ol = An && "CompositionEvent" in window, Yl = null;
    An && "documentMode" in document && (Yl = document.documentMode);
    var Jd = An && "TextEvent" in window && !Yl, vf = An && (!ol || Yl && Yl > 8 && Yl <= 11), Sh = 32, hf = String.fromCharCode(Sh);
    function Oy() {
      Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Tt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Tt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ep = !1;
    function Eh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function mf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function yf(e, t) {
      return e === "keydown" && t.keyCode === Bs;
    }
    function tp(e, t) {
      switch (e) {
        case "keyup":
          return Il.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Bs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function gf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ch(e) {
      return e.locale === "ko";
    }
    var Uu = !1;
    function np(e, t, a, i, u) {
      var s, f;
      if (ol ? s = mf(t) : Uu ? tp(t, i) && (s = "onCompositionEnd") : yf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      vf && !Ch(i) && (!Uu && s === "onCompositionStart" ? Uu = Bl(u) : s === "onCompositionEnd" && Uu && (f = ll()));
      var p = kh(a, s);
      if (p.length > 0) {
        var v = new fh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var S = gf(i);
          S !== null && (v.data = S);
        }
      }
    }
    function Sf(e, t) {
      switch (e) {
        case "compositionend":
          return gf(t);
        case "keypress":
          var a = t.which;
          return a !== Sh ? null : (ep = !0, hf);
        case "textInput":
          var i = t.data;
          return i === hf && ep ? null : i;
        default:
          return null;
      }
    }
    function rp(e, t) {
      if (Uu) {
        if (e === "compositionend" || !ol && tp(e, t)) {
          var a = ll();
          return ff(), Uu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Eh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return vf && !Ch(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ef(e, t, a, i, u) {
      var s;
      if (Jd ? s = Sf(t, i) : s = rp(t, i), !s)
        return null;
      var f = kh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new dh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function xh(e, t, a, i, u, s, f) {
      np(e, t, a, i, u), Ef(e, t, a, i, u);
    }
    var My = {
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
    function $s(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!My[e.type] : t === "textarea";
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
    function Ly(e) {
      if (!An)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Is() {
      Tt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function wh(e, t, a, i) {
      co(i);
      var u = kh(t, "onChange");
      if (u.length > 0) {
        var s = new Hi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Kl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      wh(t, n, e, gd(e)), Av(o, t);
    }
    function o(e) {
      I0(e, 0);
    }
    function c(e) {
      var t = bf(e);
      if (bi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    An && (m = Ly("input") && (!document.documentMode || document.documentMode > 9));
    function R(e, t) {
      Kl = e, n = t, Kl.attachEvent("onpropertychange", I);
    }
    function b() {
      Kl && (Kl.detachEvent("onpropertychange", I), Kl = null, n = null);
    }
    function I(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function de(e, t, a) {
      e === "focusin" ? (b(), R(t, a)) : e === "focusout" && b();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function ce(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ze(e, t) {
      if (e === "click")
        return c(t);
    }
    function Be(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ye(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || rt(e, "number", e.value);
    }
    function Kn(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window, v, S;
      if (r(p) ? v = d : $s(p) ? m ? v = Be : (v = ye, S = de) : ce(p) && (v = ze), v) {
        var x = v(t, a);
        if (x) {
          wh(e, x, i, u);
          return;
        }
      }
      S && S(t, p, a), t === "focusout" && Ye(p);
    }
    function N() {
      tn("onMouseEnter", ["mouseout", "mouseover"]), tn("onMouseLeave", ["mouseout", "mouseover"]), tn("onPointerEnter", ["pointerout", "pointerover"]), tn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function D(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ls(i)) {
        var S = i.relatedTarget || i.fromElement;
        if (S && (Ws(S) || yp(S)))
          return;
      }
      if (!(!v && !p)) {
        var x;
        if (u.window === u)
          x = u;
        else {
          var O = u.ownerDocument;
          O ? x = O.defaultView || O.parentWindow : x = window;
        }
        var k, V;
        if (v) {
          var Y = i.relatedTarget || i.toElement;
          if (k = a, V = Y ? Ws(Y) : null, V !== null) {
            var ee = Da(V);
            (V !== ee || V.tag !== B && V.tag !== Ce) && (V = null);
          }
        } else
          k = null, V = a;
        if (k !== V) {
          var Le = Qd, at = "onMouseLeave", qe = "onMouseEnter", Xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Le = mh, at = "onPointerLeave", qe = "onPointerEnter", Xt = "pointer");
          var Bt = k == null ? x : bf(k), A = V == null ? x : bf(V), te = new Le(at, Xt + "leave", k, i, u);
          te.target = Bt, te.relatedTarget = A;
          var U = null, ge = Ws(u);
          if (ge === a) {
            var je = new Le(qe, Xt + "enter", V, i, u);
            je.target = A, je.relatedTarget = Bt, U = je;
          }
          tR(e, te, U, k, V);
        }
      }
    }
    function F(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var pe = typeof Object.is == "function" ? Object.is : F;
    function $e(e, t) {
      if (pe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!dr.call(t, s) || !pe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function it(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function st(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function ht(e, t) {
      for (var a = it(e), i = 0, u = 0; a; ) {
        if (a.nodeType === qi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = it(st(a));
      }
    }
    function yr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return un(e, u, s, f, p);
    }
    function un(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, S = 0, x = e, O = null;
      e: for (; ; ) {
        for (var k = null; x === t && (a === 0 || x.nodeType === qi) && (f = s + a), x === i && (u === 0 || x.nodeType === qi) && (p = s + u), x.nodeType === qi && (s += x.nodeValue.length), (k = x.firstChild) !== null; )
          O = x, x = k;
        for (; ; ) {
          if (x === e)
            break e;
          if (O === t && ++v === a && (f = s), O === i && ++S === u && (p = s), (k = x.nextSibling) !== null)
            break;
          x = O, O = x.parentNode;
        }
        x = k;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Wl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var S = ht(e, f), x = ht(e, p);
        if (S && x) {
          if (u.rangeCount === 1 && u.anchorNode === S.node && u.anchorOffset === S.offset && u.focusNode === x.node && u.focusOffset === x.offset)
            return;
          var O = a.createRange();
          O.setStart(S.node, S.offset), u.removeAllRanges(), f > p ? (u.addRange(O), u.extend(x.node, x.offset)) : (O.setEnd(x.node, x.offset), u.addRange(O));
        }
      }
    }
    function Rh(e) {
      return e && e.nodeType === qi;
    }
    function N0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Rh(e) ? !1 : Rh(t) ? N0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jw(e) {
      return e && e.ownerDocument && N0(e.ownerDocument.documentElement, e);
    }
    function Fw(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function z0() {
      for (var e = window, t = Ka(); t instanceof e.HTMLIFrameElement; ) {
        if (Fw(t))
          e = t.contentWindow;
        else
          return t;
        t = Ka(e.document);
      }
      return t;
    }
    function Ny(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Hw() {
      var e = z0();
      return {
        focusedElem: e,
        selectionRange: Ny(e) ? Vw(e) : null
      };
    }
    function Pw(e) {
      var t = z0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && jw(a)) {
        i !== null && Ny(a) && Bw(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === oa && u.push({
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
    function Vw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = yr(e), t || {
        start: 0,
        end: 0
      };
    }
    function Bw(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Wl(e, t);
    }
    var $w = An && "documentMode" in document && document.documentMode <= 11;
    function Iw() {
      Tt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Cf = null, zy = null, ap = null, Ay = !1;
    function Yw(e) {
      if ("selectionStart" in e && Ny(e))
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
    function Kw(e) {
      return e.window === e ? e.document : e.nodeType === Zi ? e : e.ownerDocument;
    }
    function A0(e, t, a) {
      var i = Kw(a);
      if (!(Ay || Cf == null || Cf !== Ka(i))) {
        var u = Yw(Cf);
        if (!ap || !$e(ap, u)) {
          ap = u;
          var s = kh(zy, "onSelect");
          if (s.length > 0) {
            var f = new Hi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Cf;
          }
        }
      }
    }
    function Ww(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window;
      switch (t) {
        case "focusin":
          ($s(p) || p.contentEditable === "true") && (Cf = p, zy = a, ap = null);
          break;
        case "focusout":
          Cf = null, zy = null, ap = null;
          break;
        case "mousedown":
          Ay = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ay = !1, A0(e, i, u);
          break;
        case "selectionchange":
          if ($w)
            break;
        case "keydown":
        case "keyup":
          A0(e, i, u);
      }
    }
    function Th(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var xf = {
      animationend: Th("Animation", "AnimationEnd"),
      animationiteration: Th("Animation", "AnimationIteration"),
      animationstart: Th("Animation", "AnimationStart"),
      transitionend: Th("Transition", "TransitionEnd")
    }, Uy = {}, U0 = {};
    An && (U0 = document.createElement("div").style, "AnimationEvent" in window || (delete xf.animationend.animation, delete xf.animationiteration.animation, delete xf.animationstart.animation), "TransitionEvent" in window || delete xf.transitionend.transition);
    function bh(e) {
      if (Uy[e])
        return Uy[e];
      if (!xf[e])
        return e;
      var t = xf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in U0)
          return Uy[e] = t[a];
      return e;
    }
    var j0 = bh("animationend"), F0 = bh("animationiteration"), H0 = bh("animationstart"), P0 = bh("transitionend"), V0 = /* @__PURE__ */ new Map(), B0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Do(e, t) {
      V0.set(e, t), Tt(t, [e]);
    }
    function Qw() {
      for (var e = 0; e < B0.length; e++) {
        var t = B0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Do(a, "on" + i);
      }
      Do(j0, "onAnimationEnd"), Do(F0, "onAnimationIteration"), Do(H0, "onAnimationStart"), Do("dblclick", "onDoubleClick"), Do("focusin", "onFocus"), Do("focusout", "onBlur"), Do(P0, "onTransitionEnd");
    }
    function Gw(e, t, a, i, u, s, f) {
      var p = V0.get(t);
      if (p !== void 0) {
        var v = Hi, S = t;
        switch (t) {
          case "keypress":
            if ($l(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = hh;
            break;
          case "focusin":
            S = "focus", v = ul;
            break;
          case "focusout":
            S = "blur", v = ul;
            break;
          case "beforeblur":
          case "afterblur":
            v = ul;
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
            v = Qd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = zu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = gh;
            break;
          case j0:
          case F0:
          case H0:
            v = ch;
            break;
          case P0:
            v = ni;
            break;
          case "scroll":
            v = ga;
            break;
          case "wheel":
            v = Dy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = mh;
            break;
        }
        var x = (s & Wa) !== 0;
        {
          var O = !x && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", k = Jw(a, p, i.type, x, O);
          if (k.length > 0) {
            var V = new v(p, S, null, i, u);
            e.push({
              event: V,
              listeners: k
            });
          }
        }
      }
    }
    Qw(), N(), Is(), Iw(), Oy();
    function Xw(e, t, a, i, u, s, f) {
      Gw(e, t, a, i, u, s);
      var p = (s & yd) === 0;
      p && (D(e, t, a, i, u), Kn(e, t, a, i, u), Ww(e, t, a, i, u), xh(e, t, a, i, u));
    }
    var ip = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], jy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ip));
    function $0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Di(i, t, void 0, e), e.currentTarget = null;
    }
    function qw(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          $0(e, v, p), i = f;
        }
      else
        for (var S = 0; S < t.length; S++) {
          var x = t[S], O = x.instance, k = x.currentTarget, V = x.listener;
          if (O !== i && e.isPropagationStopped())
            return;
          $0(e, V, k), i = O;
        }
    }
    function I0(e, t) {
      for (var a = (t & Wa) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        qw(s, f, a);
      }
      ss();
    }
    function Zw(e, t, a, i, u) {
      var s = gd(a), f = [];
      Xw(f, e, i, a, s, t), I0(f, t);
    }
    function zn(e, t) {
      jy.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = k1(t), u = nR(e);
      i.has(u) || (Y0(t, e, Ec, a), i.add(u));
    }
    function Fy(e, t, a) {
      jy.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Wa), Y0(a, e, i, t);
    }
    var _h = "_reactListening" + Math.random().toString(36).slice(2);
    function lp(e) {
      if (!e[_h]) {
        e[_h] = !0, _t.forEach(function(a) {
          a !== "selectionchange" && (jy.has(a) || Fy(a, !1, e), Fy(a, !0, e));
        });
        var t = e.nodeType === Zi ? e : e.ownerDocument;
        t !== null && (t[_h] || (t[_h] = !0, Fy("selectionchange", !1, t)));
      }
    }
    function Y0(e, t, a, i, u) {
      var s = br(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Wd(e, t, s, f) : ya(e, t, s) : f !== void 0 ? To(e, t, s, f) : Fs(e, t, s);
    }
    function K0(e, t) {
      return e === t || e.nodeType === Gn && e.parentNode === t;
    }
    function Hy(e, t, a, i, u) {
      var s = i;
      if (!(t & md) && !(t & Ec)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === Z || v === X) {
              var S = p.stateNode.containerInfo;
              if (K0(S, f))
                break;
              if (v === X)
                for (var x = p.return; x !== null; ) {
                  var O = x.tag;
                  if (O === Z || O === X) {
                    var k = x.stateNode.containerInfo;
                    if (K0(k, f))
                      return;
                  }
                  x = x.return;
                }
              for (; S !== null; ) {
                var V = Ws(S);
                if (V === null)
                  return;
                var Y = V.tag;
                if (Y === B || Y === Ce) {
                  p = s = V;
                  continue e;
                }
                S = S.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Av(function() {
        return Zw(e, t, a, s);
      });
    }
    function up(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Jw(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], S = e, x = null; S !== null; ) {
        var O = S, k = O.stateNode, V = O.tag;
        if (V === B && k !== null && (x = k, p !== null)) {
          var Y = Ol(S, p);
          Y != null && v.push(up(S, Y, x));
        }
        if (u)
          break;
        S = S.return;
      }
      return v;
    }
    function kh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === B && f !== null) {
          var v = f, S = Ol(u, a);
          S != null && i.unshift(up(u, S, v));
          var x = Ol(u, t);
          x != null && i.push(up(u, x, v));
        }
        u = u.return;
      }
      return i;
    }
    function wf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== B);
      return e || null;
    }
    function eR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = wf(s))
        u++;
      for (var f = 0, p = i; p; p = wf(p))
        f++;
      for (; u - f > 0; )
        a = wf(a), u--;
      for (; f - u > 0; )
        i = wf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = wf(a), i = wf(i);
      }
      return null;
    }
    function W0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, S = v.alternate, x = v.stateNode, O = v.tag;
        if (S !== null && S === i)
          break;
        if (O === B && x !== null) {
          var k = x;
          if (u) {
            var V = Ol(p, s);
            V != null && f.unshift(up(p, V, k));
          } else if (!u) {
            var Y = Ol(p, s);
            Y != null && f.push(up(p, Y, k));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function tR(e, t, a, i, u) {
      var s = i && u ? eR(i, u) : null;
      i !== null && W0(e, t, i, s, !1), u !== null && a !== null && W0(e, a, u, s, !0);
    }
    function nR(e, t) {
      return e + "__bubble";
    }
    var ri = !1, op = "dangerouslySetInnerHTML", Dh = "suppressContentEditableWarning", Oo = "suppressHydrationWarning", Q0 = "autoFocus", Ys = "children", Ks = "style", Oh = "__html", Py, Mh, sp, G0, Lh, X0, q0;
    Py = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Mh = function(e, t) {
      pd(e, t), gc(e, t), Lv(e, t, {
        registrationNameDependencies: Rt,
        possibleRegistrationNames: kt
      });
    }, X0 = An && !document.documentMode, sp = function(e, t, a) {
      if (!ri) {
        var i = Nh(a), u = Nh(t);
        u !== i && (ri = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, G0 = function(e) {
      if (!ri) {
        ri = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Lh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, q0 = function(e, t) {
      var a = e.namespaceURI === Xi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var rR = /\r\n?/g, aR = /\u0000|\uFFFD/g;
    function Nh(e) {
      Pn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(rR, `
`).replace(aR, "");
    }
    function zh(e, t, a, i) {
      var u = Nh(t), s = Nh(e);
      if (s !== u && (i && (ri || (ri = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && He))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Z0(e) {
      return e.nodeType === Zi ? e : e.ownerDocument;
    }
    function iR() {
    }
    function Ah(e) {
      e.onclick = iR;
    }
    function lR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ks)
            f && Object.freeze(f), bv(t, f);
          else if (s === op) {
            var p = f ? f[Oh] : void 0;
            p != null && vv(t, p);
          } else if (s === Ys)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && lo(t, f);
            } else typeof f == "number" && lo(t, "" + f);
          else s === Dh || s === Oo || s === Q0 || (Rt.hasOwnProperty(s) ? f != null && (typeof f != "function" && Lh(s, f), s === "onScroll" && zn("scroll", t)) : f != null && bn(t, s, f, u));
        }
    }
    function uR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ks ? bv(e, f) : s === op ? vv(e, f) : s === Ys ? lo(e, f) : bn(e, s, f, i);
      }
    }
    function oR(e, t, a, i) {
      var u, s = Z0(a), f, p = i;
      if (p === Xi && (p = ld(e)), p === Xi) {
        if (u = kl(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var S = v.firstChild;
          f = v.removeChild(S);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var x = f;
          t.multiple ? x.multiple = !0 : t.size && (x.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Xi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !dr.call(Py, e) && (Py[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function sR(e, t) {
      return Z0(t).createTextNode(e);
    }
    function cR(e, t, a, i) {
      var u = kl(t, a);
      Mh(t, a);
      var s;
      switch (t) {
        case "dialog":
          zn("cancel", e), zn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          zn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ip.length; f++)
            zn(ip[f], e);
          s = a;
          break;
        case "source":
          zn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          zn("error", e), zn("load", e), s = a;
          break;
        case "details":
          zn("toggle", e), s = a;
          break;
        case "input":
          pi(e, a), s = io(e, a), zn("invalid", e);
          break;
        case "option":
          Jt(e, a), s = a;
          break;
        case "select":
          cu(e, a), s = Jo(e, a), zn("invalid", e);
          break;
        case "textarea":
          rd(e, a), s = nd(e, a), zn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (mc(t, s), lR(t, e, i, s, u), t) {
        case "input":
          di(e), $(e, a, !1);
          break;
        case "textarea":
          di(e), dv(e);
          break;
        case "option":
          Sn(e, a);
          break;
        case "select":
          ed(e, a);
          break;
        default:
          typeof s.onClick == "function" && Ah(e);
          break;
      }
    }
    function fR(e, t, a, i, u) {
      Mh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = io(e, a), p = io(e, i), s = [];
          break;
        case "select":
          f = Jo(e, a), p = Jo(e, i), s = [];
          break;
        case "textarea":
          f = nd(e, a), p = nd(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Ah(e);
          break;
      }
      mc(t, p);
      var v, S, x = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ks) {
            var O = f[v];
            for (S in O)
              O.hasOwnProperty(S) && (x || (x = {}), x[S] = "");
          } else v === op || v === Ys || v === Dh || v === Oo || v === Q0 || (Rt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var k = p[v], V = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || k === V || k == null && V == null))
          if (v === Ks)
            if (k && Object.freeze(k), V) {
              for (S in V)
                V.hasOwnProperty(S) && (!k || !k.hasOwnProperty(S)) && (x || (x = {}), x[S] = "");
              for (S in k)
                k.hasOwnProperty(S) && V[S] !== k[S] && (x || (x = {}), x[S] = k[S]);
            } else
              x || (s || (s = []), s.push(v, x)), x = k;
          else if (v === op) {
            var Y = k ? k[Oh] : void 0, ee = V ? V[Oh] : void 0;
            Y != null && ee !== Y && (s = s || []).push(v, Y);
          } else v === Ys ? (typeof k == "string" || typeof k == "number") && (s = s || []).push(v, "" + k) : v === Dh || v === Oo || (Rt.hasOwnProperty(v) ? (k != null && (typeof k != "function" && Lh(v, k), v === "onScroll" && zn("scroll", e)), !s && V !== k && (s = [])) : (s = s || []).push(v, k));
      }
      return x && (py(x, p[Ks]), (s = s || []).push(Ks, x)), s;
    }
    function dR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = kl(a, i), f = kl(a, u);
      switch (uR(e, t, s, f), a) {
        case "input":
          T(e, u);
          break;
        case "textarea":
          fv(e, u);
          break;
        case "select":
          pc(e, u);
          break;
      }
    }
    function pR(e) {
      {
        var t = e.toLowerCase();
        return as.hasOwnProperty(t) && as[t] || null;
      }
    }
    function vR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = kl(t, a), Mh(t, a), t) {
        case "dialog":
          zn("cancel", e), zn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          zn("load", e);
          break;
        case "video":
        case "audio":
          for (var S = 0; S < ip.length; S++)
            zn(ip[S], e);
          break;
        case "source":
          zn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          zn("error", e), zn("load", e);
          break;
        case "details":
          zn("toggle", e);
          break;
        case "input":
          pi(e, a), zn("invalid", e);
          break;
        case "option":
          Jt(e, a);
          break;
        case "select":
          cu(e, a), zn("invalid", e);
          break;
        case "textarea":
          rd(e, a), zn("invalid", e);
          break;
      }
      mc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var x = e.attributes, O = 0; O < x.length; O++) {
          var k = x[O].name.toLowerCase();
          switch (k) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(x[O].name);
          }
        }
      }
      var V = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var ee = a[Y];
          if (Y === Ys)
            typeof ee == "string" ? e.textContent !== ee && (a[Oo] !== !0 && zh(e.textContent, ee, s, f), V = [Ys, ee]) : typeof ee == "number" && e.textContent !== "" + ee && (a[Oo] !== !0 && zh(e.textContent, ee, s, f), V = [Ys, "" + ee]);
          else if (Rt.hasOwnProperty(Y))
            ee != null && (typeof ee != "function" && Lh(Y, ee), Y === "onScroll" && zn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Le = void 0, at = Mt(Y);
            if (a[Oo] !== !0) {
              if (!(Y === Dh || Y === Oo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === op) {
                  var qe = e.innerHTML, Xt = ee ? ee[Oh] : void 0;
                  if (Xt != null) {
                    var Bt = q0(e, Xt);
                    Bt !== qe && sp(Y, qe, Bt);
                  }
                } else if (Y === Ks) {
                  if (v.delete(Y), X0) {
                    var A = fy(ee);
                    Le = e.getAttribute("style"), A !== Le && sp(Y, Le, A);
                  }
                } else if (p && !M)
                  v.delete(Y.toLowerCase()), Le = Cr(e, Y, ee), ee !== Le && sp(Y, Le, ee);
                else if (!Et(Y, at, p) && !dt(Y, ee, at, p)) {
                  var te = !1;
                  if (at !== null)
                    v.delete(at.attributeName), Le = Ba(e, Y, ee, at);
                  else {
                    var U = i;
                    if (U === Xi && (U = ld(t)), U === Xi)
                      v.delete(Y.toLowerCase());
                    else {
                      var ge = pR(Y);
                      ge !== null && ge !== Y && (te = !0, v.delete(ge)), v.delete(Y);
                    }
                    Le = Cr(e, Y, ee);
                  }
                  var je = M;
                  !je && ee !== Le && !te && sp(Y, Le, ee);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Oo] !== !0 && G0(v), t) {
        case "input":
          di(e), $(e, a, !0);
          break;
        case "textarea":
          di(e), dv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Ah(e);
          break;
      }
      return V;
    }
    function hR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Vy(e, t) {
      {
        if (ri)
          return;
        ri = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function By(e, t) {
      {
        if (ri)
          return;
        ri = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function $y(e, t, a) {
      {
        if (ri)
          return;
        ri = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Iy(e, t) {
      {
        if (t === "" || ri)
          return;
        ri = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function mR(e, t, a) {
      switch (t) {
        case "input":
          W(e, a);
          return;
        case "textarea":
          uy(e, a);
          return;
        case "select":
          td(e, a);
          return;
      }
    }
    var cp = function() {
    }, fp = function() {
    };
    {
      var yR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], J0 = [
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
      ], gR = J0.concat(["button"]), SR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], eE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      fp = function(e, t) {
        var a = bt({}, e || eE), i = {
          tag: t
        };
        return J0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), gR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), yR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ER = function(e, t) {
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
            return SR.indexOf(t) === -1;
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
      }, CR = function(e, t) {
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
      }, tE = {};
      cp = function(e, t, a) {
        a = a || eE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && y("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ER(e, u) ? null : i, f = s ? null : CR(e, a), p = s || f;
        if (p) {
          var v = p.tag, S = !!s + "|" + e + "|" + v;
          if (!tE[S]) {
            tE[S] = !0;
            var x = e, O = "";
            if (e === "#text" ? /\S/.test(t) ? x = "Text nodes" : (x = "Whitespace text nodes", O = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", s) {
              var k = "";
              v === "table" && e === "tr" && (k += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, v, O, k);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, v);
          }
        }
      };
    }
    var Uh = "suppressHydrationWarning", jh = "$", Fh = "/$", dp = "$?", pp = "$!", xR = "style", Yy = null, Ky = null;
    function wR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Zi:
        case od: {
          t = i === Zi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : ud(null, "");
          break;
        }
        default: {
          var s = i === Gn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = ud(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = fp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function RR(e, t, a) {
      {
        var i = e, u = ud(i.namespace, t), s = fp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function ED(e) {
      return e;
    }
    function TR(e) {
      Yy = tr(), Ky = Hw();
      var t = null;
      return cr(!1), t;
    }
    function bR(e) {
      Pw(Ky), cr(Yy), Yy = null, Ky = null;
    }
    function _R(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (cp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = fp(f.ancestorInfo, e);
          cp(null, p, v);
        }
        s = f.namespace;
      }
      var S = oR(e, t, a, s);
      return mp(u, S), eg(S, t), S;
    }
    function kR(e, t) {
      e.appendChild(t);
    }
    function DR(e, t, a, i, u) {
      switch (cR(e, t, a, i), t) {
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
    function OR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = fp(f.ancestorInfo, t);
          cp(null, p, v);
        }
      }
      return fR(e, t, a, i);
    }
    function Wy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function MR(e, t, a, i) {
      {
        var u = a;
        cp(null, e, u.ancestorInfo);
      }
      var s = sR(e, t);
      return mp(i, s), s;
    }
    function LR() {
      var e = window.event;
      return e === void 0 ? Ja : cf(e.type);
    }
    var Qy = typeof setTimeout == "function" ? setTimeout : void 0, NR = typeof clearTimeout == "function" ? clearTimeout : void 0, Gy = -1, nE = typeof Promise == "function" ? Promise : void 0, zR = typeof queueMicrotask == "function" ? queueMicrotask : typeof nE < "u" ? function(e) {
      return nE.resolve(null).then(e).catch(AR);
    } : Qy;
    function AR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function UR(e, t, a, i) {
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
    function jR(e, t, a, i, u, s) {
      dR(e, t, a, i, u), eg(e, u);
    }
    function rE(e) {
      lo(e, "");
    }
    function FR(e, t, a) {
      e.nodeValue = a;
    }
    function HR(e, t) {
      e.appendChild(t);
    }
    function PR(e, t) {
      var a;
      e.nodeType === Gn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ah(a);
    }
    function VR(e, t, a) {
      e.insertBefore(t, a);
    }
    function BR(e, t, a) {
      e.nodeType === Gn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $R(e, t) {
      e.removeChild(t);
    }
    function IR(e, t) {
      e.nodeType === Gn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Xy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Gn) {
          var s = u.data;
          if (s === Fh)
            if (i === 0) {
              e.removeChild(u), Mu(t);
              return;
            } else
              i--;
          else (s === jh || s === dp || s === pp) && i++;
        }
        a = u;
      } while (a);
      Mu(t);
    }
    function YR(e, t) {
      e.nodeType === Gn ? Xy(e.parentNode, t) : e.nodeType === oa && Xy(e, t), Mu(e);
    }
    function KR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function WR(e) {
      e.nodeValue = "";
    }
    function QR(e, t) {
      e = e;
      var a = t[xR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = hc("display", i);
    }
    function GR(e, t) {
      e.nodeValue = t;
    }
    function XR(e) {
      e.nodeType === oa ? e.textContent = "" : e.nodeType === Zi && e.documentElement && e.removeChild(e.documentElement);
    }
    function qR(e, t, a) {
      return e.nodeType !== oa || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function ZR(e, t) {
      return t === "" || e.nodeType !== qi ? null : e;
    }
    function JR(e) {
      return e.nodeType !== Gn ? null : e;
    }
    function aE(e) {
      return e.data === dp;
    }
    function qy(e) {
      return e.data === pp;
    }
    function e1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function t1(e, t) {
      e._reactRetry = t;
    }
    function Hh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === oa || t === qi)
          break;
        if (t === Gn) {
          var a = e.data;
          if (a === jh || a === pp || a === dp)
            break;
          if (a === Fh)
            return null;
        }
      }
      return e;
    }
    function vp(e) {
      return Hh(e.nextSibling);
    }
    function n1(e) {
      return Hh(e.firstChild);
    }
    function r1(e) {
      return Hh(e.firstChild);
    }
    function a1(e) {
      return Hh(e.nextSibling);
    }
    function i1(e, t, a, i, u, s, f) {
      mp(s, e), eg(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var S = (s.mode & Ut) !== nt;
      return vR(e, t, a, p, i, S, f);
    }
    function l1(e, t, a, i) {
      return mp(a, e), a.mode & Ut, hR(e, t);
    }
    function u1(e, t) {
      mp(t, e);
    }
    function o1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Gn) {
          var i = t.data;
          if (i === Fh) {
            if (a === 0)
              return vp(t);
            a--;
          } else (i === jh || i === pp || i === dp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function iE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Gn) {
          var i = t.data;
          if (i === jh || i === pp || i === dp) {
            if (a === 0)
              return t;
            a--;
          } else i === Fh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function s1(e) {
      Mu(e);
    }
    function c1(e) {
      Mu(e);
    }
    function f1(e) {
      return e !== "head" && e !== "body";
    }
    function d1(e, t, a, i) {
      var u = !0;
      zh(t.nodeValue, a, i, u);
    }
    function p1(e, t, a, i, u, s) {
      if (t[Uh] !== !0) {
        var f = !0;
        zh(i.nodeValue, u, s, f);
      }
    }
    function v1(e, t) {
      t.nodeType === oa ? Vy(e, t) : t.nodeType === Gn || By(e, t);
    }
    function h1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === oa ? Vy(a, t) : t.nodeType === Gn || By(a, t));
      }
    }
    function m1(e, t, a, i, u) {
      (u || t[Uh] !== !0) && (i.nodeType === oa ? Vy(a, i) : i.nodeType === Gn || By(a, i));
    }
    function y1(e, t, a) {
      $y(e, t);
    }
    function g1(e, t) {
      Iy(e, t);
    }
    function S1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && $y(i, t);
      }
    }
    function E1(e, t) {
      {
        var a = e.parentNode;
        a !== null && Iy(a, t);
      }
    }
    function C1(e, t, a, i, u, s) {
      (s || t[Uh] !== !0) && $y(a, i);
    }
    function x1(e, t, a, i, u) {
      (u || t[Uh] !== !0) && Iy(a, i);
    }
    function w1(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function R1(e) {
      lp(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, Zy = "__reactProps$" + Rf, hp = "__reactContainer$" + Rf, Jy = "__reactEvents$" + Rf, T1 = "__reactListeners$" + Rf, b1 = "__reactHandles$" + Rf;
    function _1(e) {
      delete e[Tf], delete e[Zy], delete e[Jy], delete e[T1], delete e[b1];
    }
    function mp(e, t) {
      t[Tf] = e;
    }
    function Ph(e, t) {
      t[hp] = e;
    }
    function lE(e) {
      e[hp] = null;
    }
    function yp(e) {
      return !!e[hp];
    }
    function Ws(e) {
      var t = e[Tf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[hp] || a[Tf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = iE(e); u !== null; ) {
              var s = u[Tf];
              if (s)
                return s;
              u = iE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Mo(e) {
      var t = e[Tf] || e[hp];
      return t && (t.tag === B || t.tag === Ce || t.tag === Te || t.tag === Z) ? t : null;
    }
    function bf(e) {
      if (e.tag === B || e.tag === Ce)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Vh(e) {
      return e[Zy] || null;
    }
    function eg(e, t) {
      e[Zy] = t;
    }
    function k1(e) {
      var t = e[Jy];
      return t === void 0 && (t = e[Jy] = /* @__PURE__ */ new Set()), t;
    }
    var uE = {}, oE = C.ReactDebugCurrentFrame;
    function Bh(e) {
      if (e) {
        var t = e._owner, a = Wi(e.type, e._source, t ? t.type : null);
        oE.setExtraStackFrame(a);
      } else
        oE.setExtraStackFrame(null);
    }
    function sl(e, t, a, i, u) {
      {
        var s = Function.call.bind(dr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              p = S;
            }
            p && !(p instanceof Error) && (Bh(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Bh(null)), p instanceof Error && !(p.message in uE) && (uE[p.message] = !0, Bh(u), y("Failed %s type: %s", a, p.message), Bh(null));
          }
      }
    }
    var tg = [], $h;
    $h = [];
    var ju = -1;
    function Lo(e) {
      return {
        current: e
      };
    }
    function Sa(e, t) {
      if (ju < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== $h[ju] && y("Unexpected Fiber popped."), e.current = tg[ju], tg[ju] = null, $h[ju] = null, ju--;
    }
    function Ea(e, t, a) {
      ju++, tg[ju] = e.current, $h[ju] = a, e.current = t;
    }
    var ng;
    ng = {};
    var Ei = {};
    Object.freeze(Ei);
    var Fu = Lo(Ei), Ql = Lo(!1), rg = Ei;
    function _f(e, t, a) {
      return a && Gl(t) ? rg : Fu.current;
    }
    function sE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function kf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ei;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = yt(e) || "Unknown";
          sl(i, s, "context", p);
        }
        return u && sE(e, t, s), s;
      }
    }
    function Ih() {
      return Ql.current;
    }
    function Gl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Yh(e) {
      Sa(Ql, e), Sa(Fu, e);
    }
    function ag(e) {
      Sa(Ql, e), Sa(Fu, e);
    }
    function cE(e, t, a) {
      {
        if (Fu.current !== Ei)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Ea(Fu, t, e), Ea(Ql, a, e);
      }
    }
    function fE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = yt(e) || "Unknown";
            ng[s] || (ng[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((yt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = yt(e) || "Unknown";
          sl(u, f, "child context", v);
        }
        return bt({}, a, f);
      }
    }
    function Kh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ei;
        return rg = Fu.current, Ea(Fu, a, e), Ea(Ql, Ql.current, e), !0;
      }
    }
    function dE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = fE(e, t, rg);
          i.__reactInternalMemoizedMergedChildContext = u, Sa(Ql, e), Sa(Fu, e), Ea(Fu, u, e), Ea(Ql, a, e);
        } else
          Sa(Ql, e), Ea(Ql, a, e);
      }
    }
    function D1(e) {
      {
        if (!yu(e) || e.tag !== j)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
              return t.stateNode.context;
            case j: {
              var a = t.type;
              if (Gl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var No = 0, Wh = 1, Hu = null, ig = !1, lg = !1;
    function pE(e) {
      Hu === null ? Hu = [e] : Hu.push(e);
    }
    function O1(e) {
      ig = !0, pE(e);
    }
    function vE() {
      ig && zo();
    }
    function zo() {
      if (!lg && Hu !== null) {
        lg = !0;
        var e = 0, t = ti();
        try {
          var a = !0, i = Hu;
          for (er(Kr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Hu = null, ig = !1;
        } catch (s) {
          throw Hu !== null && (Hu = Hu.slice(e + 1)), Ed(ds, zo), s;
        } finally {
          er(t), lg = !1;
        }
      }
      return null;
    }
    var Df = [], Of = 0, Qh = null, Gh = 0, Pi = [], Vi = 0, Qs = null, Pu = 1, Vu = "";
    function M1(e) {
      return Xs(), (e.flags & Oi) !== tt;
    }
    function L1(e) {
      return Xs(), Gh;
    }
    function N1() {
      var e = Vu, t = Pu, a = t & ~z1(t);
      return a.toString(32) + e;
    }
    function Gs(e, t) {
      Xs(), Df[Of++] = Gh, Df[Of++] = Qh, Qh = e, Gh = t;
    }
    function hE(e, t, a) {
      Xs(), Pi[Vi++] = Pu, Pi[Vi++] = Vu, Pi[Vi++] = Qs, Qs = e;
      var i = Pu, u = Vu, s = Xh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Xh(t) + s;
      if (v > 30) {
        var S = s - s % 5, x = (1 << S) - 1, O = (f & x).toString(32), k = f >> S, V = s - S, Y = Xh(t) + V, ee = p << V, Le = ee | k, at = O + u;
        Pu = 1 << Y | Le, Vu = at;
      } else {
        var qe = p << s, Xt = qe | f, Bt = u;
        Pu = 1 << v | Xt, Vu = Bt;
      }
    }
    function ug(e) {
      Xs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Gs(e, a), hE(e, a, i);
      }
    }
    function Xh(e) {
      return 32 - Zn(e);
    }
    function z1(e) {
      return 1 << Xh(e) - 1;
    }
    function og(e) {
      for (; e === Qh; )
        Qh = Df[--Of], Df[Of] = null, Gh = Df[--Of], Df[Of] = null;
      for (; e === Qs; )
        Qs = Pi[--Vi], Pi[Vi] = null, Vu = Pi[--Vi], Pi[Vi] = null, Pu = Pi[--Vi], Pi[Vi] = null;
    }
    function A1() {
      return Xs(), Qs !== null ? {
        id: Pu,
        overflow: Vu
      } : null;
    }
    function U1(e, t) {
      Xs(), Pi[Vi++] = Pu, Pi[Vi++] = Vu, Pi[Vi++] = Qs, Pu = t.id, Vu = t.overflow, Qs = e;
    }
    function Xs() {
      qr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Xr = null, Bi = null, cl = !1, qs = !1, Ao = null;
    function j1() {
      cl && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function mE() {
      qs = !0;
    }
    function F1() {
      return qs;
    }
    function H1(e) {
      var t = e.stateNode.containerInfo;
      return Bi = r1(t), Xr = e, cl = !0, Ao = null, qs = !1, !0;
    }
    function P1(e, t, a) {
      return Bi = a1(t), Xr = e, cl = !0, Ao = null, qs = !1, a !== null && U1(e, a), !0;
    }
    function yE(e, t) {
      switch (e.tag) {
        case Z: {
          v1(e.stateNode.containerInfo, t);
          break;
        }
        case B: {
          var a = (e.mode & Ut) !== nt;
          m1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Te: {
          var i = e.memoizedState;
          i.dehydrated !== null && h1(i.dehydrated, t);
          break;
        }
      }
    }
    function gE(e, t) {
      yE(e, t);
      var a = I_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Qa) : i.push(a);
    }
    function sg(e, t) {
      {
        if (qs)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case B:
                var i = t.type;
                t.pendingProps, y1(a, i);
                break;
              case Ce:
                var u = t.pendingProps;
                g1(a, u);
                break;
            }
            break;
          }
          case B: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case B: {
                var v = t.type, S = t.pendingProps, x = (e.mode & Ut) !== nt;
                C1(
                  s,
                  f,
                  p,
                  v,
                  S,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
              case Ce: {
                var O = t.pendingProps, k = (e.mode & Ut) !== nt;
                x1(
                  s,
                  f,
                  p,
                  O,
                  // TODO: Delete this argument when we remove the legacy root API.
                  k
                );
                break;
              }
            }
            break;
          }
          case Te: {
            var V = e.memoizedState, Y = V.dehydrated;
            if (Y !== null) switch (t.tag) {
              case B:
                var ee = t.type;
                t.pendingProps, S1(Y, ee);
                break;
              case Ce:
                var Le = t.pendingProps;
                E1(Y, Le);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function SE(e, t) {
      t.flags = t.flags & ~ca | Mn, sg(e, t);
    }
    function EE(e, t) {
      switch (e.tag) {
        case B: {
          var a = e.type;
          e.pendingProps;
          var i = qR(t, a);
          return i !== null ? (e.stateNode = i, Xr = e, Bi = n1(i), !0) : !1;
        }
        case Ce: {
          var u = e.pendingProps, s = ZR(t, u);
          return s !== null ? (e.stateNode = s, Xr = e, Bi = null, !0) : !1;
        }
        case Te: {
          var f = JR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: A1(),
              retryLane: va
            };
            e.memoizedState = p;
            var v = Y_(f);
            return v.return = e, e.child = v, Xr = e, Bi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function cg(e) {
      return (e.mode & Ut) !== nt && (e.flags & Ze) === tt;
    }
    function fg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function dg(e) {
      if (cl) {
        var t = Bi;
        if (!t) {
          cg(e) && (sg(Xr, e), fg()), SE(Xr, e), cl = !1, Xr = e;
          return;
        }
        var a = t;
        if (!EE(e, t)) {
          cg(e) && (sg(Xr, e), fg()), t = vp(a);
          var i = Xr;
          if (!t || !EE(e, t)) {
            SE(Xr, e), cl = !1, Xr = e;
            return;
          }
          gE(i, a);
        }
      }
    }
    function V1(e, t, a) {
      var i = e.stateNode, u = !qs, s = i1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function B1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = l1(t, a, e);
      if (i) {
        var u = Xr;
        if (u !== null)
          switch (u.tag) {
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ut) !== nt;
              d1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case B: {
              var p = u.type, v = u.memoizedProps, S = u.stateNode, x = (u.mode & Ut) !== nt;
              p1(
                p,
                v,
                S,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
          }
      }
      return i;
    }
    function $1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      u1(a, e);
    }
    function I1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return o1(a);
    }
    function CE(e) {
      for (var t = e.return; t !== null && t.tag !== B && t.tag !== Z && t.tag !== Te; )
        t = t.return;
      Xr = t;
    }
    function qh(e) {
      if (e !== Xr)
        return !1;
      if (!cl)
        return CE(e), cl = !0, !1;
      if (e.tag !== Z && (e.tag !== B || f1(e.type) && !Wy(e.type, e.memoizedProps))) {
        var t = Bi;
        if (t)
          if (cg(e))
            xE(e), fg();
          else
            for (; t; )
              gE(e, t), t = vp(t);
      }
      return CE(e), e.tag === Te ? Bi = I1(e) : Bi = Xr ? vp(e.stateNode) : null, !0;
    }
    function Y1() {
      return cl && Bi !== null;
    }
    function xE(e) {
      for (var t = Bi; t; )
        yE(e, t), t = vp(t);
    }
    function Mf() {
      Xr = null, Bi = null, cl = !1, qs = !1;
    }
    function wE() {
      Ao !== null && (mx(Ao), Ao = null);
    }
    function qr() {
      return cl;
    }
    function pg(e) {
      Ao === null ? Ao = [e] : Ao.push(e);
    }
    var K1 = C.ReactCurrentBatchConfig, W1 = null;
    function Q1() {
      return K1.transition;
    }
    var fl = {
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
      var G1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & hn && (t = a), a = a.return;
        return t;
      }, Zs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, gp = [], Sp = [], Ep = [], Cp = [], xp = [], wp = [], Js = /* @__PURE__ */ new Set();
      fl.recordUnsafeLifecycleWarnings = function(e, t) {
        Js.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & hn && typeof t.UNSAFE_componentWillMount == "function" && Sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & hn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Cp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && xp.push(e), e.mode & hn && typeof t.UNSAFE_componentWillUpdate == "function" && wp.push(e));
      }, fl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(k) {
          e.add(yt(k) || "Component"), Js.add(k.type);
        }), gp = []);
        var t = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(k) {
          t.add(yt(k) || "Component"), Js.add(k.type);
        }), Sp = []);
        var a = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(k) {
          a.add(yt(k) || "Component"), Js.add(k.type);
        }), Ep = []);
        var i = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(k) {
          i.add(yt(k) || "Component"), Js.add(k.type);
        }), Cp = []);
        var u = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(k) {
          u.add(yt(k) || "Component"), Js.add(k.type);
        }), xp = []);
        var s = /* @__PURE__ */ new Set();
        if (wp.length > 0 && (wp.forEach(function(k) {
          s.add(yt(k) || "Component"), Js.add(k.type);
        }), wp = []), t.size > 0) {
          var f = Zs(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Zs(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Zs(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var S = Zs(e);
          K(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (a.size > 0) {
          var x = Zs(a);
          K(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (u.size > 0) {
          var O = Zs(u);
          K(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
      };
      var Zh = /* @__PURE__ */ new Map(), RE = /* @__PURE__ */ new Set();
      fl.recordLegacyContextWarning = function(e, t) {
        var a = G1(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!RE.has(e.type)) {
          var i = Zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Zh.set(a, i)), i.push(e));
        }
      }, fl.flushLegacyContextWarning = function() {
        Zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(yt(s) || "Component"), RE.add(s.type);
            });
            var u = Zs(i);
            try {
              dn(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              xn();
            }
          }
        });
      }, fl.discardPendingWarnings = function() {
        gp = [], Sp = [], Ep = [], Cp = [], xp = [], wp = [], Zh = /* @__PURE__ */ new Map();
      };
    }
    var vg, hg, mg, yg, gg, TE = function(e, t) {
    };
    vg = !1, hg = !1, mg = {}, yg = {}, gg = {}, TE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = yt(t) || "Component";
        yg[a] || (yg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function X1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Rp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & hn || ae) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== j) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !X1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = yt(e) || "Component";
          mg[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), mg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== j)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Ra(i, "ref");
          var S = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === S)
            return t.ref;
          var x = function(O) {
            var k = v.refs;
            O === null ? delete k[S] : k[S] = O;
          };
          return x._stringRef = S, x;
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
    function Jh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function em(e) {
      {
        var t = yt(e) || "Component";
        if (gg[t])
          return;
        gg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function bE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function _E(e) {
      function t(A, te) {
        if (e) {
          var U = A.deletions;
          U === null ? (A.deletions = [te], A.flags |= Qa) : U.push(te);
        }
      }
      function a(A, te) {
        if (!e)
          return null;
        for (var U = te; U !== null; )
          t(A, U), U = U.sibling;
        return null;
      }
      function i(A, te) {
        for (var U = /* @__PURE__ */ new Map(), ge = te; ge !== null; )
          ge.key !== null ? U.set(ge.key, ge) : U.set(ge.index, ge), ge = ge.sibling;
        return U;
      }
      function u(A, te) {
        var U = oc(A, te);
        return U.index = 0, U.sibling = null, U;
      }
      function s(A, te, U) {
        if (A.index = U, !e)
          return A.flags |= Oi, te;
        var ge = A.alternate;
        if (ge !== null) {
          var je = ge.index;
          return je < te ? (A.flags |= Mn, te) : je;
        } else
          return A.flags |= Mn, te;
      }
      function f(A) {
        return e && A.alternate === null && (A.flags |= Mn), A;
      }
      function p(A, te, U, ge) {
        if (te === null || te.tag !== Ce) {
          var je = p0(U, A.mode, ge);
          return je.return = A, je;
        } else {
          var Ne = u(te, U);
          return Ne.return = A, Ne;
        }
      }
      function v(A, te, U, ge) {
        var je = U.type;
        if (je === $a)
          return x(A, te, U.props.children, ge, U.key);
        if (te !== null && (te.elementType === je || // Keep this check inline so it only runs on the false path:
        Lx(te, U) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof je == "object" && je !== null && je.$$typeof === Ge && bE(je) === te.type)) {
          var Ne = u(te, U.props);
          return Ne.ref = Rp(A, te, U), Ne.return = A, Ne._debugSource = U._source, Ne._debugOwner = U._owner, Ne;
        }
        var vt = d0(U, A.mode, ge);
        return vt.ref = Rp(A, te, U), vt.return = A, vt;
      }
      function S(A, te, U, ge) {
        if (te === null || te.tag !== X || te.stateNode.containerInfo !== U.containerInfo || te.stateNode.implementation !== U.implementation) {
          var je = v0(U, A.mode, ge);
          return je.return = A, je;
        } else {
          var Ne = u(te, U.children || []);
          return Ne.return = A, Ne;
        }
      }
      function x(A, te, U, ge, je) {
        if (te === null || te.tag !== J) {
          var Ne = Ko(U, A.mode, ge, je);
          return Ne.return = A, Ne;
        } else {
          var vt = u(te, U);
          return vt.return = A, vt;
        }
      }
      function O(A, te, U) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var ge = p0("" + te, A.mode, U);
          return ge.return = A, ge;
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case ir: {
              var je = d0(te, A.mode, U);
              return je.ref = Rp(A, null, te), je.return = A, je;
            }
            case Vn: {
              var Ne = v0(te, A.mode, U);
              return Ne.return = A, Ne;
            }
            case Ge: {
              var vt = te._payload, Ct = te._init;
              return O(A, Ct(vt), U);
            }
          }
          if (Nt(te) || pt(te)) {
            var yn = Ko(te, A.mode, U, null);
            return yn.return = A, yn;
          }
          Jh(A, te);
        }
        return typeof te == "function" && em(A), null;
      }
      function k(A, te, U, ge) {
        var je = te !== null ? te.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number")
          return je !== null ? null : p(A, te, "" + U, ge);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case ir:
              return U.key === je ? v(A, te, U, ge) : null;
            case Vn:
              return U.key === je ? S(A, te, U, ge) : null;
            case Ge: {
              var Ne = U._payload, vt = U._init;
              return k(A, te, vt(Ne), ge);
            }
          }
          if (Nt(U) || pt(U))
            return je !== null ? null : x(A, te, U, ge, null);
          Jh(A, U);
        }
        return typeof U == "function" && em(A), null;
      }
      function V(A, te, U, ge, je) {
        if (typeof ge == "string" && ge !== "" || typeof ge == "number") {
          var Ne = A.get(U) || null;
          return p(te, Ne, "" + ge, je);
        }
        if (typeof ge == "object" && ge !== null) {
          switch (ge.$$typeof) {
            case ir: {
              var vt = A.get(ge.key === null ? U : ge.key) || null;
              return v(te, vt, ge, je);
            }
            case Vn: {
              var Ct = A.get(ge.key === null ? U : ge.key) || null;
              return S(te, Ct, ge, je);
            }
            case Ge:
              var yn = ge._payload, on = ge._init;
              return V(A, te, U, on(yn), je);
          }
          if (Nt(ge) || pt(ge)) {
            var fr = A.get(U) || null;
            return x(te, fr, ge, je, null);
          }
          Jh(te, ge);
        }
        return typeof ge == "function" && em(te), null;
      }
      function Y(A, te, U) {
        {
          if (typeof A != "object" || A === null)
            return te;
          switch (A.$$typeof) {
            case ir:
            case Vn:
              TE(A, U);
              var ge = A.key;
              if (typeof ge != "string")
                break;
              if (te === null) {
                te = /* @__PURE__ */ new Set(), te.add(ge);
                break;
              }
              if (!te.has(ge)) {
                te.add(ge);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ge);
              break;
            case Ge:
              var je = A._payload, Ne = A._init;
              Y(Ne(je), te, U);
              break;
          }
        }
        return te;
      }
      function ee(A, te, U, ge) {
        for (var je = null, Ne = 0; Ne < U.length; Ne++) {
          var vt = U[Ne];
          je = Y(vt, je, A);
        }
        for (var Ct = null, yn = null, on = te, fr = 0, sn = 0, rr = null; on !== null && sn < U.length; sn++) {
          on.index > sn ? (rr = on, on = null) : rr = on.sibling;
          var xa = k(A, on, U[sn], ge);
          if (xa === null) {
            on === null && (on = rr);
            break;
          }
          e && on && xa.alternate === null && t(A, on), fr = s(xa, fr, sn), yn === null ? Ct = xa : yn.sibling = xa, yn = xa, on = rr;
        }
        if (sn === U.length) {
          if (a(A, on), qr()) {
            var aa = sn;
            Gs(A, aa);
          }
          return Ct;
        }
        if (on === null) {
          for (; sn < U.length; sn++) {
            var xi = O(A, U[sn], ge);
            xi !== null && (fr = s(xi, fr, sn), yn === null ? Ct = xi : yn.sibling = xi, yn = xi);
          }
          if (qr()) {
            var Fa = sn;
            Gs(A, Fa);
          }
          return Ct;
        }
        for (var Ha = i(A, on); sn < U.length; sn++) {
          var wa = V(Ha, A, sn, U[sn], ge);
          wa !== null && (e && wa.alternate !== null && Ha.delete(wa.key === null ? sn : wa.key), fr = s(wa, fr, sn), yn === null ? Ct = wa : yn.sibling = wa, yn = wa);
        }
        if (e && Ha.forEach(function(Xf) {
          return t(A, Xf);
        }), qr()) {
          var Qu = sn;
          Gs(A, Qu);
        }
        return Ct;
      }
      function Le(A, te, U, ge) {
        var je = pt(U);
        if (typeof je != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          U[Symbol.toStringTag] === "Generator" && (hg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hg = !0), U.entries === je && (vg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vg = !0);
          var Ne = je.call(U);
          if (Ne)
            for (var vt = null, Ct = Ne.next(); !Ct.done; Ct = Ne.next()) {
              var yn = Ct.value;
              vt = Y(yn, vt, A);
            }
        }
        var on = je.call(U);
        if (on == null)
          throw new Error("An iterable object provided no iterator.");
        for (var fr = null, sn = null, rr = te, xa = 0, aa = 0, xi = null, Fa = on.next(); rr !== null && !Fa.done; aa++, Fa = on.next()) {
          rr.index > aa ? (xi = rr, rr = null) : xi = rr.sibling;
          var Ha = k(A, rr, Fa.value, ge);
          if (Ha === null) {
            rr === null && (rr = xi);
            break;
          }
          e && rr && Ha.alternate === null && t(A, rr), xa = s(Ha, xa, aa), sn === null ? fr = Ha : sn.sibling = Ha, sn = Ha, rr = xi;
        }
        if (Fa.done) {
          if (a(A, rr), qr()) {
            var wa = aa;
            Gs(A, wa);
          }
          return fr;
        }
        if (rr === null) {
          for (; !Fa.done; aa++, Fa = on.next()) {
            var Qu = O(A, Fa.value, ge);
            Qu !== null && (xa = s(Qu, xa, aa), sn === null ? fr = Qu : sn.sibling = Qu, sn = Qu);
          }
          if (qr()) {
            var Xf = aa;
            Gs(A, Xf);
          }
          return fr;
        }
        for (var nv = i(A, rr); !Fa.done; aa++, Fa = on.next()) {
          var ru = V(nv, A, aa, Fa.value, ge);
          ru !== null && (e && ru.alternate !== null && nv.delete(ru.key === null ? aa : ru.key), xa = s(ru, xa, aa), sn === null ? fr = ru : sn.sibling = ru, sn = ru);
        }
        if (e && nv.forEach(function(xk) {
          return t(A, xk);
        }), qr()) {
          var Ck = aa;
          Gs(A, Ck);
        }
        return fr;
      }
      function at(A, te, U, ge) {
        if (te !== null && te.tag === Ce) {
          a(A, te.sibling);
          var je = u(te, U);
          return je.return = A, je;
        }
        a(A, te);
        var Ne = p0(U, A.mode, ge);
        return Ne.return = A, Ne;
      }
      function qe(A, te, U, ge) {
        for (var je = U.key, Ne = te; Ne !== null; ) {
          if (Ne.key === je) {
            var vt = U.type;
            if (vt === $a) {
              if (Ne.tag === J) {
                a(A, Ne.sibling);
                var Ct = u(Ne, U.props.children);
                return Ct.return = A, Ct._debugSource = U._source, Ct._debugOwner = U._owner, Ct;
              }
            } else if (Ne.elementType === vt || // Keep this check inline so it only runs on the false path:
            Lx(Ne, U) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof vt == "object" && vt !== null && vt.$$typeof === Ge && bE(vt) === Ne.type) {
              a(A, Ne.sibling);
              var yn = u(Ne, U.props);
              return yn.ref = Rp(A, Ne, U), yn.return = A, yn._debugSource = U._source, yn._debugOwner = U._owner, yn;
            }
            a(A, Ne);
            break;
          } else
            t(A, Ne);
          Ne = Ne.sibling;
        }
        if (U.type === $a) {
          var on = Ko(U.props.children, A.mode, ge, U.key);
          return on.return = A, on;
        } else {
          var fr = d0(U, A.mode, ge);
          return fr.ref = Rp(A, te, U), fr.return = A, fr;
        }
      }
      function Xt(A, te, U, ge) {
        for (var je = U.key, Ne = te; Ne !== null; ) {
          if (Ne.key === je)
            if (Ne.tag === X && Ne.stateNode.containerInfo === U.containerInfo && Ne.stateNode.implementation === U.implementation) {
              a(A, Ne.sibling);
              var vt = u(Ne, U.children || []);
              return vt.return = A, vt;
            } else {
              a(A, Ne);
              break;
            }
          else
            t(A, Ne);
          Ne = Ne.sibling;
        }
        var Ct = v0(U, A.mode, ge);
        return Ct.return = A, Ct;
      }
      function Bt(A, te, U, ge) {
        var je = typeof U == "object" && U !== null && U.type === $a && U.key === null;
        if (je && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case ir:
              return f(qe(A, te, U, ge));
            case Vn:
              return f(Xt(A, te, U, ge));
            case Ge:
              var Ne = U._payload, vt = U._init;
              return Bt(A, te, vt(Ne), ge);
          }
          if (Nt(U))
            return ee(A, te, U, ge);
          if (pt(U))
            return Le(A, te, U, ge);
          Jh(A, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? f(at(A, te, "" + U, ge)) : (typeof U == "function" && em(A), a(A, te));
      }
      return Bt;
    }
    var Lf = _E(!0), kE = _E(!1);
    function q1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = oc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = oc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Z1(e, t) {
      for (var a = e.child; a !== null; )
        H_(a, t), a = a.sibling;
    }
    var Sg = Lo(null), Eg;
    Eg = {};
    var tm = null, Nf = null, Cg = null, nm = !1;
    function rm() {
      tm = null, Nf = null, Cg = null, nm = !1;
    }
    function DE() {
      nm = !0;
    }
    function OE() {
      nm = !1;
    }
    function ME(e, t, a) {
      Ea(Sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Eg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Eg;
    }
    function xg(e, t) {
      var a = Sg.current;
      Sa(Sg, t), e._currentValue = a;
    }
    function wg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ou(i.childLanes, t) ? u !== null && !Ou(u.childLanes, t) && (u.childLanes = Dt(u.childLanes, t)) : (i.childLanes = Dt(i.childLanes, t), u !== null && (u.childLanes = Dt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function J1(e, t, a) {
      eT(e, t, a);
    }
    function eT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === j) {
                var p = bs(a), v = Bu(gn, p);
                v.tag = im;
                var S = i.updateQueue;
                if (S !== null) {
                  var x = S.shared, O = x.pending;
                  O === null ? v.next = v : (v.next = O.next, O.next = v), x.pending = v;
                }
              }
              i.lanes = Dt(i.lanes, a);
              var k = i.alternate;
              k !== null && (k.lanes = Dt(k.lanes, a)), wg(i.return, a, e), s.lanes = Dt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === he)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === lt) {
          var V = i.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = Dt(V.lanes, a);
          var Y = V.alternate;
          Y !== null && (Y.lanes = Dt(Y.lanes, a)), wg(V, a, e), u = i.sibling;
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
            var ee = u.sibling;
            if (ee !== null) {
              ee.return = u.return, u = ee;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function zf(e, t) {
      tm = e, Nf = null, Cg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ha(a.lanes, t) && Hp(), a.firstContext = null);
      }
    }
    function gr(e) {
      nm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Cg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nf === null) {
          if (tm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, tm.dependencies = {
            lanes: se,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
      }
      return t;
    }
    var ec = null;
    function Rg(e) {
      ec === null ? ec = [e] : ec.push(e);
    }
    function tT() {
      if (ec !== null) {
        for (var e = 0; e < ec.length; e++) {
          var t = ec[e], a = t.interleaved;
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
        ec = null;
      }
    }
    function LE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, am(e, i);
    }
    function nT(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, Rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function rT(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, Rg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, am(e, i);
    }
    function ai(e, t) {
      return am(e, t);
    }
    var aT = am;
    function am(e, t) {
      e.lanes = Dt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Dt(a.lanes, t)), a === null && (e.flags & (Mn | ca)) !== tt && kx(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Dt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Dt(a.childLanes, t) : (u.flags & (Mn | ca)) !== tt && kx(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var NE = 0, zE = 1, im = 2, Tg = 3, lm = !1, bg, um;
    bg = !1, um = null;
    function _g(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: se
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function AE(e, t) {
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
    function Bu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: NE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Uo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (um === u && !bg && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), bg = !0), n_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, aT(e, a);
      } else
        return rT(e, u, t, a);
    }
    function om(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (jd(a)) {
          var s = u.lanes;
          s = Hd(s, e.pendingLanes);
          var f = Dt(s, a);
          u.lanes = f, lf(e, f);
        }
      }
    }
    function kg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var S = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = S : (f.next = S, f = S), v = v.next;
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
      var x = a.lastBaseUpdate;
      x === null ? a.firstBaseUpdate = t : x.next = t, a.lastBaseUpdate = t;
    }
    function iT(e, t, a, i, u, s) {
      switch (a.tag) {
        case zE: {
          var f = a.payload;
          if (typeof f == "function") {
            DE();
            var p = f.call(s, i, u);
            {
              if (e.mode & hn) {
                Ln(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Ln(!1);
                }
              }
              OE();
            }
            return p;
          }
          return f;
        }
        case Tg:
          e.flags = e.flags & ~vr | Ze;
        case NE: {
          var v = a.payload, S;
          if (typeof v == "function") {
            DE(), S = v.call(s, i, u);
            {
              if (e.mode & hn) {
                Ln(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Ln(!1);
                }
              }
              OE();
            }
          } else
            S = v;
          return S == null ? i : bt({}, i, S);
        }
        case im:
          return lm = !0, i;
      }
      return i;
    }
    function sm(e, t, a, i) {
      var u = e.updateQueue;
      lm = !1, um = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, S = v.next;
        v.next = null, f === null ? s = S : f.next = S, f = v;
        var x = e.alternate;
        if (x !== null) {
          var O = x.updateQueue, k = O.lastBaseUpdate;
          k !== f && (k === null ? O.firstBaseUpdate = S : k.next = S, O.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var V = u.baseState, Y = se, ee = null, Le = null, at = null, qe = s;
        do {
          var Xt = qe.lane, Bt = qe.eventTime;
          if (Ou(i, Xt)) {
            if (at !== null) {
              var te = {
                eventTime: Bt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: en,
                tag: qe.tag,
                payload: qe.payload,
                callback: qe.callback,
                next: null
              };
              at = at.next = te;
            }
            V = iT(e, u, qe, V, t, a);
            var U = qe.callback;
            if (U !== null && // If the update was already committed, we should not queue its
            // callback again.
            qe.lane !== en) {
              e.flags |= En;
              var ge = u.effects;
              ge === null ? u.effects = [qe] : ge.push(qe);
            }
          } else {
            var A = {
              eventTime: Bt,
              lane: Xt,
              tag: qe.tag,
              payload: qe.payload,
              callback: qe.callback,
              next: null
            };
            at === null ? (Le = at = A, ee = V) : at = at.next = A, Y = Dt(Y, Xt);
          }
          if (qe = qe.next, qe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var je = p, Ne = je.next;
            je.next = null, qe = Ne, u.lastBaseUpdate = je, u.shared.pending = null;
          }
        } while (!0);
        at === null && (ee = V), u.baseState = ee, u.firstBaseUpdate = Le, u.lastBaseUpdate = at;
        var vt = u.shared.interleaved;
        if (vt !== null) {
          var Ct = vt;
          do
            Y = Dt(Y, Ct.lane), Ct = Ct.next;
          while (Ct !== vt);
        } else s === null && (u.shared.lanes = se);
        qp(Y), e.lanes = Y, e.memoizedState = V;
      }
      um = null;
    }
    function lT(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function UE() {
      lm = !1;
    }
    function cm() {
      return lm;
    }
    function jE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, lT(f, a));
        }
    }
    var Tp = {}, jo = Lo(Tp), bp = Lo(Tp), fm = Lo(Tp);
    function dm(e) {
      if (e === Tp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function FE() {
      var e = dm(fm.current);
      return e;
    }
    function Dg(e, t) {
      Ea(fm, t, e), Ea(bp, e, e), Ea(jo, Tp, e);
      var a = wR(t);
      Sa(jo, e), Ea(jo, a, e);
    }
    function Af(e) {
      Sa(jo, e), Sa(bp, e), Sa(fm, e);
    }
    function Og() {
      var e = dm(jo.current);
      return e;
    }
    function HE(e) {
      dm(fm.current);
      var t = dm(jo.current), a = RR(t, e.type);
      t !== a && (Ea(bp, e, e), Ea(jo, a, e));
    }
    function Mg(e) {
      bp.current === e && (Sa(jo, e), Sa(bp, e));
    }
    var uT = 0, PE = 1, VE = 1, _p = 2, dl = Lo(uT);
    function Lg(e, t) {
      return (e & t) !== 0;
    }
    function Uf(e) {
      return e & PE;
    }
    function Ng(e, t) {
      return e & PE | t;
    }
    function oT(e, t) {
      return e | t;
    }
    function Fo(e, t) {
      Ea(dl, t, e);
    }
    function jf(e) {
      Sa(dl, e);
    }
    function sT(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function pm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || aE(i) || qy(i))
              return t;
          }
        } else if (t.tag === Vt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ze) !== tt;
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
    var ii = (
      /*   */
      0
    ), _r = (
      /* */
      1
    ), Xl = (
      /*  */
      2
    ), kr = (
      /*    */
      4
    ), Zr = (
      /*   */
      8
    ), zg = [];
    function Ag() {
      for (var e = 0; e < zg.length; e++) {
        var t = zg[e];
        t._workInProgressVersionPrimary = null;
      }
      zg.length = 0;
    }
    function cT(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ae = C.ReactCurrentDispatcher, kp = C.ReactCurrentBatchConfig, Ug, Ff;
    Ug = /* @__PURE__ */ new Set();
    var tc = se, mn = null, Dr = null, Or = null, vm = !1, Dp = !1, Op = 0, fT = 0, dT = 25, ie = null, $i = null, Ho = -1, jg = !1;
    function fn() {
      {
        var e = ie;
        $i === null ? $i = [e] : $i.push(e);
      }
    }
    function _e() {
      {
        var e = ie;
        $i !== null && (Ho++, $i[Ho] !== e && pT(e));
      }
    }
    function Hf(e) {
      e != null && !Nt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ie, typeof e);
    }
    function pT(e) {
      {
        var t = yt(mn);
        if (!Ug.has(t) && (Ug.add(t), $i !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ho; u++) {
            for (var s = $i[u], f = u === Ho ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          y(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Ca() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Fg(e, t) {
      if (jg)
        return !1;
      if (t === null)
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ie), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ie, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!pe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Pf(e, t, a, i, u, s) {
      tc = s, mn = t, $i = e !== null ? e._debugHookTypes : null, Ho = -1, jg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = se, e !== null && e.memoizedState !== null ? Ae.current = sC : $i !== null ? Ae.current = oC : Ae.current = uC;
      var f = a(i, u);
      if (Dp) {
        var p = 0;
        do {
          if (Dp = !1, Op = 0, p >= dT)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, jg = !1, Dr = null, Or = null, t.updateQueue = null, Ho = -1, Ae.current = cC, f = a(i, u);
        } while (Dp);
      }
      Ae.current = _m, t._debugHookTypes = $i;
      var v = Dr !== null && Dr.next !== null;
      if (tc = se, mn = null, Dr = null, Or = null, ie = null, $i = null, Ho = -1, e !== null && (e.flags & qn) !== (t.flags & qn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ut) !== nt && y("Internal React error: Expected static flag was missing. Please notify the React team."), vm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Vf() {
      var e = Op !== 0;
      return Op = 0, e;
    }
    function BE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ln) !== nt ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = _s(e.lanes, a);
    }
    function $E() {
      if (Ae.current = _m, vm) {
        for (var e = mn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        vm = !1;
      }
      tc = se, mn = null, Dr = null, Or = null, $i = null, Ho = -1, ie = null, nC = !1, Dp = !1, Op = 0;
    }
    function ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Or === null ? mn.memoizedState = Or = e : Or = Or.next = e, Or;
    }
    function Ii() {
      var e;
      if (Dr === null) {
        var t = mn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Dr.next;
      var a;
      if (Or === null ? a = mn.memoizedState : a = Or.next, a !== null)
        Or = a, a = Or.next, Dr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Dr = e;
        var i = {
          memoizedState: Dr.memoizedState,
          baseState: Dr.baseState,
          baseQueue: Dr.baseQueue,
          queue: Dr.queue,
          next: null
        };
        Or === null ? mn.memoizedState = Or = i : Or = Or.next = i;
      }
      return Or;
    }
    function IE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Hg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pg(e, t, a) {
      var i = ql(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: se,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = yT.bind(null, mn, s);
      return [i.memoizedState, f];
    }
    function Vg(e, t, a) {
      var i = Ii(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Dr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, S = p.next;
          f.next = S, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var x = f.next, O = s.baseState, k = null, V = null, Y = null, ee = x;
        do {
          var Le = ee.lane;
          if (Ou(tc, Le)) {
            if (Y !== null) {
              var qe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: en,
                action: ee.action,
                hasEagerState: ee.hasEagerState,
                eagerState: ee.eagerState,
                next: null
              };
              Y = Y.next = qe;
            }
            if (ee.hasEagerState)
              O = ee.eagerState;
            else {
              var Xt = ee.action;
              O = e(O, Xt);
            }
          } else {
            var at = {
              lane: Le,
              action: ee.action,
              hasEagerState: ee.hasEagerState,
              eagerState: ee.eagerState,
              next: null
            };
            Y === null ? (V = Y = at, k = O) : Y = Y.next = at, mn.lanes = Dt(mn.lanes, Le), qp(Le);
          }
          ee = ee.next;
        } while (ee !== null && ee !== x);
        Y === null ? k = O : Y.next = V, pe(O, i.memoizedState) || Hp(), i.memoizedState = O, i.baseState = k, i.baseQueue = Y, u.lastRenderedState = O;
      }
      var Bt = u.interleaved;
      if (Bt !== null) {
        var A = Bt;
        do {
          var te = A.lane;
          mn.lanes = Dt(mn.lanes, te), qp(te), A = A.next;
        } while (A !== Bt);
      } else f === null && (u.lanes = se);
      var U = u.dispatch;
      return [i.memoizedState, U];
    }
    function Bg(e, t, a) {
      var i = Ii(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, S = v;
        do {
          var x = S.action;
          p = e(p, x), S = S.next;
        } while (S !== v);
        pe(p, i.memoizedState) || Hp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function CD(e, t, a) {
    }
    function xD(e, t, a) {
    }
    function $g(e, t, a) {
      var i = mn, u = ql(), s, f = qr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Ff || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      } else {
        if (s = t(), !Ff) {
          var p = t();
          pe(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
        }
        var v = Km();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(v, tc) || YE(i, t, s);
      }
      u.memoizedState = s;
      var S = {
        value: s,
        getSnapshot: t
      };
      return u.queue = S, Sm(WE.bind(null, i, S, e), [e]), i.flags |= sa, Mp(_r | Zr, KE.bind(null, i, S, s, t), void 0, null), s;
    }
    function hm(e, t, a) {
      var i = mn, u = Ii(), s = t();
      if (!Ff) {
        var f = t();
        pe(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      }
      var p = u.memoizedState, v = !pe(p, s);
      v && (u.memoizedState = s, Hp());
      var S = u.queue;
      if (Np(WE.bind(null, i, S, e), [e]), S.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Or !== null && Or.memoizedState.tag & _r) {
        i.flags |= sa, Mp(_r | Zr, KE.bind(null, i, S, s, t), void 0, null);
        var x = Km();
        if (x === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(x, tc) || YE(i, t, s);
      }
      return s;
    }
    function YE(e, t, a) {
      e.flags |= mo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = mn.updateQueue;
      if (u === null)
        u = IE(), mn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function KE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, QE(t) && GE(e);
    }
    function WE(e, t, a) {
      var i = function() {
        QE(t) && GE(e);
      };
      return a(i);
    }
    function QE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !pe(a, i);
      } catch {
        return !0;
      }
    }
    function GE(e) {
      var t = ai(e, ct);
      t !== null && zr(t, e, ct, gn);
    }
    function mm(e) {
      var t = ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: se,
        dispatch: null,
        lastRenderedReducer: Hg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = gT.bind(null, mn, a);
      return [t.memoizedState, i];
    }
    function Ig(e) {
      return Vg(Hg);
    }
    function Yg(e) {
      return Bg(Hg);
    }
    function Mp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = mn.updateQueue;
      if (s === null)
        s = IE(), mn.updateQueue = s, s.lastEffect = u.next = u;
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
    function Kg(e) {
      var t = ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function ym(e) {
      var t = Ii();
      return t.memoizedState;
    }
    function Lp(e, t, a, i) {
      var u = ql(), s = i === void 0 ? null : i;
      mn.flags |= e, u.memoizedState = Mp(_r | t, a, void 0, s);
    }
    function gm(e, t, a, i) {
      var u = Ii(), s = i === void 0 ? null : i, f = void 0;
      if (Dr !== null) {
        var p = Dr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Fg(s, v)) {
            u.memoizedState = Mp(t, a, f, s);
            return;
          }
        }
      }
      mn.flags |= e, u.memoizedState = Mp(_r | t, a, f, s);
    }
    function Sm(e, t) {
      return (mn.mode & ln) !== nt ? Lp(Mi | sa | Oc, Zr, e, t) : Lp(sa | Oc, Zr, e, t);
    }
    function Np(e, t) {
      return gm(sa, Zr, e, t);
    }
    function Wg(e, t) {
      return Lp(Wt, Xl, e, t);
    }
    function Em(e, t) {
      return gm(Wt, Xl, e, t);
    }
    function Qg(e, t) {
      var a = Wt;
      return a |= el, (mn.mode & ln) !== nt && (a |= Ll), Lp(a, kr, e, t);
    }
    function Cm(e, t) {
      return gm(Wt, kr, e, t);
    }
    function XE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || y("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Gg(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Wt;
      return u |= el, (mn.mode & ln) !== nt && (u |= Ll), Lp(u, kr, XE.bind(null, t, e), i);
    }
    function xm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return gm(Wt, kr, XE.bind(null, t, e), i);
    }
    function vT(e, t) {
    }
    var wm = vT;
    function Xg(e, t) {
      var a = ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Rm(e, t) {
      var a = Ii(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Fg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function qg(e, t) {
      var a = ql(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Tm(e, t) {
      var a = Ii(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Fg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Zg(e) {
      var t = ql();
      return t.memoizedState = e, e;
    }
    function qE(e) {
      var t = Ii(), a = Dr, i = a.memoizedState;
      return JE(t, i, e);
    }
    function ZE(e) {
      var t = Ii();
      if (Dr === null)
        return t.memoizedState = e, e;
      var a = Dr.memoizedState;
      return JE(t, a, e);
    }
    function JE(e, t, a) {
      var i = !Ad(tc);
      if (i) {
        if (!pe(a, t)) {
          var u = Fd();
          mn.lanes = Dt(mn.lanes, u), qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Hp()), e.memoizedState = a, a;
    }
    function hT(e, t, a) {
      var i = ti();
      er(nh(i, Ai)), e(!0);
      var u = kp.transition;
      kp.transition = {};
      var s = kp.transition;
      kp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (er(i), kp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && K("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Jg() {
      var e = mm(!1), t = e[0], a = e[1], i = hT.bind(null, a), u = ql();
      return u.memoizedState = i, [t, i];
    }
    function eC() {
      var e = Ig(), t = e[0], a = Ii(), i = a.memoizedState;
      return [t, i];
    }
    function tC() {
      var e = Yg(), t = e[0], a = Ii(), i = a.memoizedState;
      return [t, i];
    }
    var nC = !1;
    function mT() {
      return nC;
    }
    function eS() {
      var e = ql(), t = Km(), a = t.identifierPrefix, i;
      if (qr()) {
        var u = N1();
        i = ":" + a + "R" + u;
        var s = Op++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = fT++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function bm() {
      var e = Ii(), t = e.memoizedState;
      return t;
    }
    function yT(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (rC(e))
        aC(t, u);
      else {
        var s = LE(e, t, u, i);
        if (s !== null) {
          var f = ja();
          zr(s, e, i, f), iC(s, t, i);
        }
      }
      lC(e, i);
    }
    function gT(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (rC(e))
        aC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === se && (s === null || s.lanes === se)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Ae.current, Ae.current = pl;
            try {
              var v = t.lastRenderedState, S = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = S, pe(S, v)) {
                nT(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Ae.current = p;
            }
          }
        }
        var x = LE(e, t, u, i);
        if (x !== null) {
          var O = ja();
          zr(x, e, i, O), iC(x, t, i);
        }
      }
      lC(e, i);
    }
    function rC(e) {
      var t = e.alternate;
      return e === mn || t !== null && t === mn;
    }
    function aC(e, t) {
      Dp = vm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function iC(e, t, a) {
      if (jd(a)) {
        var i = t.lanes;
        i = Hd(i, e.pendingLanes);
        var u = Dt(i, a);
        t.lanes = u, lf(e, u);
      }
    }
    function lC(e, t, a) {
      ys(e, t);
    }
    var _m = {
      readContext: gr,
      useCallback: Ca,
      useContext: Ca,
      useEffect: Ca,
      useImperativeHandle: Ca,
      useInsertionEffect: Ca,
      useLayoutEffect: Ca,
      useMemo: Ca,
      useReducer: Ca,
      useRef: Ca,
      useState: Ca,
      useDebugValue: Ca,
      useDeferredValue: Ca,
      useTransition: Ca,
      useMutableSource: Ca,
      useSyncExternalStore: Ca,
      useId: Ca,
      unstable_isNewReconciler: fe
    }, uC = null, oC = null, sC = null, cC = null, Zl = null, pl = null, km = null;
    {
      var tS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, St = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      uC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", fn(), Hf(t), Xg(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", fn(), gr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", fn(), Hf(t), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", fn(), Hf(a), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", fn(), Hf(t), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", fn(), Hf(t), Qg(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", fn(), Hf(t);
          var a = Ae.current;
          Ae.current = Zl;
          try {
            return qg(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", fn();
          var i = Ae.current;
          Ae.current = Zl;
          try {
            return Pg(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", fn(), Kg(e);
        },
        useState: function(e) {
          ie = "useState", fn();
          var t = Ae.current;
          Ae.current = Zl;
          try {
            return mm(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", fn(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", fn(), Zg(e);
        },
        useTransition: function() {
          return ie = "useTransition", fn(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", fn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", fn(), $g(e, t, a);
        },
        useId: function() {
          return ie = "useId", fn(), eS();
        },
        unstable_isNewReconciler: fe
      }, oC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", _e(), Xg(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", _e(), gr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", _e(), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", _e(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", _e(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", _e(), Qg(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", _e();
          var a = Ae.current;
          Ae.current = Zl;
          try {
            return qg(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", _e();
          var i = Ae.current;
          Ae.current = Zl;
          try {
            return Pg(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", _e(), Kg(e);
        },
        useState: function(e) {
          ie = "useState", _e();
          var t = Ae.current;
          Ae.current = Zl;
          try {
            return mm(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", _e(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", _e(), Zg(e);
        },
        useTransition: function() {
          return ie = "useTransition", _e(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", _e(), $g(e, t, a);
        },
        useId: function() {
          return ie = "useId", _e(), eS();
        },
        unstable_isNewReconciler: fe
      }, sC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", _e(), Rm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", _e(), gr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", _e(), Np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", _e(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", _e(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", _e(), Cm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", _e();
          var a = Ae.current;
          Ae.current = pl;
          try {
            return Tm(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", _e();
          var i = Ae.current;
          Ae.current = pl;
          try {
            return Vg(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", _e(), ym();
        },
        useState: function(e) {
          ie = "useState", _e();
          var t = Ae.current;
          Ae.current = pl;
          try {
            return Ig(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", _e(), wm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", _e(), qE(e);
        },
        useTransition: function() {
          return ie = "useTransition", _e(), eC();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", _e(), hm(e, t);
        },
        useId: function() {
          return ie = "useId", _e(), bm();
        },
        unstable_isNewReconciler: fe
      }, cC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", _e(), Rm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", _e(), gr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", _e(), Np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", _e(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", _e(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", _e(), Cm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", _e();
          var a = Ae.current;
          Ae.current = km;
          try {
            return Tm(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", _e();
          var i = Ae.current;
          Ae.current = km;
          try {
            return Bg(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", _e(), ym();
        },
        useState: function(e) {
          ie = "useState", _e();
          var t = Ae.current;
          Ae.current = km;
          try {
            return Yg(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", _e(), wm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", _e(), ZE(e);
        },
        useTransition: function() {
          return ie = "useTransition", _e(), tC();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", _e(), hm(e, t);
        },
        useId: function() {
          return ie = "useId", _e(), bm();
        },
        unstable_isNewReconciler: fe
      }, Zl = {
        readContext: function(e) {
          return tS(), gr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", St(), fn(), Xg(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", St(), fn(), gr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", St(), fn(), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", St(), fn(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", St(), fn(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", St(), fn(), Qg(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", St(), fn();
          var a = Ae.current;
          Ae.current = Zl;
          try {
            return qg(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", St(), fn();
          var i = Ae.current;
          Ae.current = Zl;
          try {
            return Pg(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", St(), fn(), Kg(e);
        },
        useState: function(e) {
          ie = "useState", St(), fn();
          var t = Ae.current;
          Ae.current = Zl;
          try {
            return mm(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", St(), fn(), void 0;
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", St(), fn(), Zg(e);
        },
        useTransition: function() {
          return ie = "useTransition", St(), fn(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", St(), fn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", St(), fn(), $g(e, t, a);
        },
        useId: function() {
          return ie = "useId", St(), fn(), eS();
        },
        unstable_isNewReconciler: fe
      }, pl = {
        readContext: function(e) {
          return tS(), gr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", St(), _e(), Rm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", St(), _e(), gr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", St(), _e(), Np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", St(), _e(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", St(), _e(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", St(), _e(), Cm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", St(), _e();
          var a = Ae.current;
          Ae.current = pl;
          try {
            return Tm(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", St(), _e();
          var i = Ae.current;
          Ae.current = pl;
          try {
            return Vg(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", St(), _e(), ym();
        },
        useState: function(e) {
          ie = "useState", St(), _e();
          var t = Ae.current;
          Ae.current = pl;
          try {
            return Ig(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", St(), _e(), wm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", St(), _e(), qE(e);
        },
        useTransition: function() {
          return ie = "useTransition", St(), _e(), eC();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", St(), _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", St(), _e(), hm(e, t);
        },
        useId: function() {
          return ie = "useId", St(), _e(), bm();
        },
        unstable_isNewReconciler: fe
      }, km = {
        readContext: function(e) {
          return tS(), gr(e);
        },
        useCallback: function(e, t) {
          return ie = "useCallback", St(), _e(), Rm(e, t);
        },
        useContext: function(e) {
          return ie = "useContext", St(), _e(), gr(e);
        },
        useEffect: function(e, t) {
          return ie = "useEffect", St(), _e(), Np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ie = "useImperativeHandle", St(), _e(), xm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ie = "useInsertionEffect", St(), _e(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ie = "useLayoutEffect", St(), _e(), Cm(e, t);
        },
        useMemo: function(e, t) {
          ie = "useMemo", St(), _e();
          var a = Ae.current;
          Ae.current = pl;
          try {
            return Tm(e, t);
          } finally {
            Ae.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ie = "useReducer", St(), _e();
          var i = Ae.current;
          Ae.current = pl;
          try {
            return Bg(e, t, a);
          } finally {
            Ae.current = i;
          }
        },
        useRef: function(e) {
          return ie = "useRef", St(), _e(), ym();
        },
        useState: function(e) {
          ie = "useState", St(), _e();
          var t = Ae.current;
          Ae.current = pl;
          try {
            return Yg(e);
          } finally {
            Ae.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ie = "useDebugValue", St(), _e(), wm();
        },
        useDeferredValue: function(e) {
          return ie = "useDeferredValue", St(), _e(), ZE(e);
        },
        useTransition: function() {
          return ie = "useTransition", St(), _e(), tC();
        },
        useMutableSource: function(e, t, a) {
          return ie = "useMutableSource", St(), _e(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ie = "useSyncExternalStore", St(), _e(), hm(e, t);
        },
        useId: function() {
          return ie = "useId", St(), _e(), bm();
        },
        unstable_isNewReconciler: fe
      };
    }
    var Po = w.unstable_now, fC = 0, Dm = -1, zp = -1, Om = -1, nS = !1, Mm = !1;
    function dC() {
      return nS;
    }
    function ST() {
      Mm = !0;
    }
    function ET() {
      nS = !1, Mm = !1;
    }
    function CT() {
      nS = Mm, Mm = !1;
    }
    function pC() {
      return fC;
    }
    function vC() {
      fC = Po();
    }
    function rS(e) {
      zp = Po(), e.actualStartTime < 0 && (e.actualStartTime = Po());
    }
    function hC(e) {
      zp = -1;
    }
    function Lm(e, t) {
      if (zp >= 0) {
        var a = Po() - zp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), zp = -1;
      }
    }
    function Jl(e) {
      if (Dm >= 0) {
        var t = Po() - Dm;
        Dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Se:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function aS(e) {
      if (Om >= 0) {
        var t = Po() - Om;
        Om = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Se:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function eu() {
      Dm = Po();
    }
    function iS() {
      Om = Po();
    }
    function lS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function vl(e, t) {
      if (e && e.defaultProps) {
        var a = bt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var uS = {}, oS, sS, cS, fS, dS, mC, Nm, pS, vS, hS, Ap;
    {
      oS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), fS = /* @__PURE__ */ new Set(), pS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), Ap = /* @__PURE__ */ new Set();
      var yC = /* @__PURE__ */ new Set();
      Nm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          yC.has(a) || (yC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, mC = function(e, t) {
        if (t === void 0) {
          var a = Zt(e) || "Component";
          dS.has(a) || (dS.add(a), y("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(uS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(uS);
    }
    function mS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & hn) {
          Ln(!0);
          try {
            s = a(i, u);
          } finally {
            Ln(!1);
          }
        }
        mC(t, s);
      }
      var f = s == null ? u : bt({}, u, s);
      if (e.memoizedState = f, e.lanes === se) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var yS = {
      isMounted: Pv,
      enqueueSetState: function(e, t, a) {
        var i = ho(e), u = ja(), s = Io(i), f = Bu(u, s);
        f.payload = t, a != null && (Nm(a, "setState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (zr(p, i, s, u), om(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ho(e), u = ja(), s = Io(i), f = Bu(u, s);
        f.tag = zE, f.payload = t, a != null && (Nm(a, "replaceState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (zr(p, i, s, u), om(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ho(e), i = ja(), u = Io(a), s = Bu(i, u);
        s.tag = im, t != null && (Nm(t, "forceUpdate"), s.callback = t);
        var f = Uo(a, s, u);
        f !== null && (zr(f, a, u, i), om(f, a, u)), jc(a, u);
      }
    };
    function gC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & hn) {
            Ln(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Ln(!1);
            }
          }
          v === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Zt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !$e(a, i) || !$e(u, s) : !0;
    }
    function xT(e, t, a) {
      var i = e.stateNode;
      {
        var u = Zt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & hn) === nt && (Ap.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & hn) === nt && (Ap.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !vS.has(t) && (vS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Zt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !cS.has(t) && (cS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Zt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Nt(p)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function SC(e, t) {
      t.updater = yS, e.stateNode = t, mu(t, e), t._reactInternalInstance = uS;
    }
    function EC(e, t, a) {
      var i = !1, u = Ei, s = Ei, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === g && f._context === void 0
        );
        if (!p && !hS.has(t)) {
          hS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === _a ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Zt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = gr(f);
      else {
        u = _f(e, t, !0);
        var S = t.contextTypes;
        i = S != null, s = i ? kf(e, u) : Ei;
      }
      var x = new t(a, s);
      if (e.mode & hn) {
        Ln(!0);
        try {
          x = new t(a, s);
        } finally {
          Ln(!1);
        }
      }
      var O = e.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null;
      SC(e, x);
      {
        if (typeof t.getDerivedStateFromProps == "function" && O === null) {
          var k = Zt(t) || "Component";
          sS.has(k) || (sS.add(k), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, x.state === null ? "null" : "undefined", k));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var V = null, Y = null, ee = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ee = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (ee = "UNSAFE_componentWillUpdate"), V !== null || Y !== null || ee !== null) {
            var Le = Zt(t) || "Component", at = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fS.has(Le) || (fS.add(Le), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Le, at, V !== null ? `
  ` + V : "", Y !== null ? `
  ` + Y : "", ee !== null ? `
  ` + ee : ""));
          }
        }
      }
      return i && sE(e, u, s), x;
    }
    function wT(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", yt(e) || "Component"), yS.enqueueReplaceState(t, t.state, null));
    }
    function CC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = yt(e) || "Component";
          oS.has(s) || (oS.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        yS.enqueueReplaceState(t, t.state, null);
      }
    }
    function gS(e, t, a, i) {
      xT(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, _g(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = gr(s);
      else {
        var f = _f(e, t, !0);
        u.context = kf(e, f);
      }
      {
        if (u.state === a) {
          var p = Zt(t) || "Component";
          pS.has(p) || (pS.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & hn && fl.recordLegacyContextWarning(e, u), fl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (mS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (wT(e, u), sm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var S = Wt;
        S |= el, (e.mode & ln) !== nt && (S |= Ll), e.flags |= S;
      }
    }
    function RT(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Ei;
      if (typeof p == "object" && p !== null)
        v = gr(p);
      else {
        var S = _f(e, t, !0);
        v = kf(e, S);
      }
      var x = t.getDerivedStateFromProps, O = typeof x == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !O && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && CC(e, u, a, v), UE();
      var k = e.memoizedState, V = u.state = k;
      if (sm(e, a, u, i), V = e.memoizedState, s === a && k === V && !Ih() && !cm()) {
        if (typeof u.componentDidMount == "function") {
          var Y = Wt;
          Y |= el, (e.mode & ln) !== nt && (Y |= Ll), e.flags |= Y;
        }
        return !1;
      }
      typeof x == "function" && (mS(e, t, x, a), V = e.memoizedState);
      var ee = cm() || gC(e, t, s, a, k, V, v);
      if (ee) {
        if (!O && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Le = Wt;
          Le |= el, (e.mode & ln) !== nt && (Le |= Ll), e.flags |= Le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var at = Wt;
          at |= el, (e.mode & ln) !== nt && (at |= Ll), e.flags |= at;
        }
        e.memoizedProps = a, e.memoizedState = V;
      }
      return u.props = a, u.state = V, u.context = v, ee;
    }
    function TT(e, t, a, i, u) {
      var s = t.stateNode;
      AE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : vl(t.type, f);
      s.props = p;
      var v = t.pendingProps, S = s.context, x = a.contextType, O = Ei;
      if (typeof x == "object" && x !== null)
        O = gr(x);
      else {
        var k = _f(t, a, !0);
        O = kf(t, k);
      }
      var V = a.getDerivedStateFromProps, Y = typeof V == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Y && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || S !== O) && CC(t, s, i, O), UE();
      var ee = t.memoizedState, Le = s.state = ee;
      if (sm(t, i, s, u), Le = t.memoizedState, f === v && ee === Le && !Ih() && !cm() && !Ve)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Wt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= or), !1;
      typeof V == "function" && (mS(t, a, V, i), Le = t.memoizedState);
      var at = cm() || gC(t, a, p, i, ee, Le, O) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Ve;
      return at ? (!Y && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Le, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Le, O)), typeof s.componentDidUpdate == "function" && (t.flags |= Wt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= or)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Wt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= or), t.memoizedProps = i, t.memoizedState = Le), s.props = i, s.state = Le, s.context = O, at;
    }
    function nc(e, t) {
      return {
        value: e,
        source: t,
        stack: Qi(t),
        digest: null
      };
    }
    function SS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function bT(e, t) {
      return !0;
    }
    function ES(e, t) {
      try {
        var a = bT(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === j)
            return;
          console.error(i);
        }
        var p = u ? yt(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", S;
        if (e.tag === Z)
          S = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var x = yt(e) || "Anonymous";
          S = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + x + ".");
        }
        var O = v + `
` + f + `

` + ("" + S);
        console.error(O);
      } catch (k) {
        setTimeout(function() {
          throw k;
        });
      }
    }
    var _T = typeof WeakMap == "function" ? WeakMap : Map;
    function xC(e, t, a) {
      var i = Bu(gn, a);
      i.tag = Tg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        S_(u), ES(e, t);
      }, i;
    }
    function CS(e, t, a) {
      var i = Bu(gn, a);
      i.tag = Tg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          Nx(e), ES(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        Nx(e), ES(e, t), typeof u != "function" && y_(this);
        var v = t.value, S = t.stack;
        this.componentDidCatch(v, {
          componentStack: S !== null ? S : ""
        }), typeof u != "function" && (ha(e.lanes, ct) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", yt(e) || "Unknown"));
      }), i;
    }
    function wC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new _T(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = E_.bind(null, e, t, a);
        pa && Zp(e, a), t.then(s, s);
      }
    }
    function kT(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function DT(e, t) {
      var a = e.tag;
      if ((e.mode & Ut) === nt && (a === re || a === Re || a === Pe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function RC(e) {
      var t = e;
      do {
        if (t.tag === Te && sT(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function TC(e, t, a, i, u) {
      if ((e.mode & Ut) === nt) {
        if (e === t)
          e.flags |= vr;
        else {
          if (e.flags |= Ze, a.flags |= Dc, a.flags &= -52805, a.tag === j) {
            var s = a.alternate;
            if (s === null)
              a.tag = xt;
            else {
              var f = Bu(gn, ct);
              f.tag = im, Uo(a, f, ct);
            }
          }
          a.lanes = Dt(a.lanes, ct);
        }
        return e;
      }
      return e.flags |= vr, e.lanes = u, e;
    }
    function OT(e, t, a, i, u) {
      if (a.flags |= fs, pa && Zp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        DT(a), qr() && a.mode & Ut && mE();
        var f = RC(t);
        if (f !== null) {
          f.flags &= ~jr, TC(f, t, a, e, u), f.mode & Ut && wC(e, s, u), kT(f, e, s);
          return;
        } else {
          if (!Qv(u)) {
            wC(e, s, u), e0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (qr() && a.mode & Ut) {
        mE();
        var v = RC(t);
        if (v !== null) {
          (v.flags & vr) === tt && (v.flags |= jr), TC(v, t, a, e, u), pg(nc(i, a));
          return;
        }
      }
      i = nc(i, a), s_(i);
      var S = t;
      do {
        switch (S.tag) {
          case Z: {
            var x = i;
            S.flags |= vr;
            var O = bs(u);
            S.lanes = Dt(S.lanes, O);
            var k = xC(S, x, O);
            kg(S, k);
            return;
          }
          case j:
            var V = i, Y = S.type, ee = S.stateNode;
            if ((S.flags & Ze) === tt && (typeof Y.getDerivedStateFromError == "function" || ee !== null && typeof ee.componentDidCatch == "function" && !Rx(ee))) {
              S.flags |= vr;
              var Le = bs(u);
              S.lanes = Dt(S.lanes, Le);
              var at = CS(S, V, Le);
              kg(S, at);
              return;
            }
            break;
        }
        S = S.return;
      } while (S !== null);
    }
    function MT() {
      return null;
    }
    var Up = C.ReactCurrentOwner, hl = !1, xS, jp, wS, RS, TS, rc, bS, zm, Fp;
    xS = {}, jp = {}, wS = {}, RS = {}, TS = {}, rc = !1, bS = {}, zm = {}, Fp = {};
    function Aa(e, t, a, i) {
      e === null ? t.child = kE(t, null, a, i) : t.child = Lf(t, e.child, a, i);
    }
    function LT(e, t, a, i) {
      t.child = Lf(t, e.child, null, i), t.child = Lf(t, null, a, i);
    }
    function bC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && sl(
          s,
          i,
          // Resolved props
          "prop",
          Zt(a)
        );
      }
      var f = a.render, p = t.ref, v, S;
      zf(t, u), Ma(t);
      {
        if (Up.current = t, ur(!0), v = Pf(e, t, f, i, p, u), S = Vf(), t.mode & hn) {
          Ln(!0);
          try {
            v = Pf(e, t, f, i, p, u), S = Vf();
          } finally {
            Ln(!1);
          }
        }
        ur(!1);
      }
      return La(), e !== null && !hl ? (BE(e, t, u), $u(e, t, u)) : (qr() && S && ug(t), t.flags |= hi, Aa(e, t, v, u), t.child);
    }
    function _C(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (j_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Gf(s), t.tag = Pe, t.type = f, DS(t, s), kC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && sl(
            p,
            i,
            // Resolved props
            "prop",
            Zt(s)
          ), a.defaultProps !== void 0) {
            var v = Zt(s) || "Unknown";
            Fp[v] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Fp[v] = !0);
          }
        }
        var S = f0(a.type, null, i, t, t.mode, u);
        return S.ref = t.ref, S.return = t, t.child = S, S;
      }
      {
        var x = a.type, O = x.propTypes;
        O && sl(
          O,
          i,
          // Resolved props
          "prop",
          Zt(x)
        );
      }
      var k = e.child, V = AS(e, u);
      if (!V) {
        var Y = k.memoizedProps, ee = a.compare;
        if (ee = ee !== null ? ee : $e, ee(Y, i) && e.ref === t.ref)
          return $u(e, t, u);
      }
      t.flags |= hi;
      var Le = oc(k, i);
      return Le.ref = t.ref, Le.return = t, t.child = Le, Le;
    }
    function kC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ge) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var S = s && s.propTypes;
          S && sl(
            S,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Zt(s)
          );
        }
      }
      if (e !== null) {
        var x = e.memoizedProps;
        if ($e(x, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (hl = !1, t.pendingProps = i = x, AS(e, u))
            (e.flags & Dc) !== tt && (hl = !0);
          else return t.lanes = e.lanes, $u(e, t, u);
      }
      return _S(e, t, a, i, u);
    }
    function DC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || be)
        if ((t.mode & Ut) === nt) {
          var f = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Wm(t, a);
        } else if (ha(a, va)) {
          var O = {
            baseLanes: se,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = O;
          var k = s !== null ? s.baseLanes : a;
          Wm(t, k);
        } else {
          var p = null, v;
          if (s !== null) {
            var S = s.baseLanes;
            v = Dt(S, a);
          } else
            v = a;
          t.lanes = t.childLanes = va;
          var x = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = x, t.updateQueue = null, Wm(t, v), null;
        }
      else {
        var V;
        s !== null ? (V = Dt(s.baseLanes, a), t.memoizedState = null) : V = a, Wm(t, V);
      }
      return Aa(e, t, u, a), t.child;
    }
    function NT(e, t, a) {
      var i = t.pendingProps;
      return Aa(e, t, i, a), t.child;
    }
    function zT(e, t, a) {
      var i = t.pendingProps.children;
      return Aa(e, t, i, a), t.child;
    }
    function AT(e, t, a) {
      {
        t.flags |= Wt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Aa(e, t, s, a), t.child;
    }
    function OC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Hn, t.flags |= yo);
    }
    function _S(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && sl(
          s,
          i,
          // Resolved props
          "prop",
          Zt(a)
        );
      }
      var f;
      {
        var p = _f(t, a, !0);
        f = kf(t, p);
      }
      var v, S;
      zf(t, u), Ma(t);
      {
        if (Up.current = t, ur(!0), v = Pf(e, t, a, i, f, u), S = Vf(), t.mode & hn) {
          Ln(!0);
          try {
            v = Pf(e, t, a, i, f, u), S = Vf();
          } finally {
            Ln(!1);
          }
        }
        ur(!1);
      }
      return La(), e !== null && !hl ? (BE(e, t, u), $u(e, t, u)) : (qr() && S && ug(t), t.flags |= hi, Aa(e, t, v, u), t.child);
    }
    function MC(e, t, a, i, u) {
      {
        switch (Z_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ze, t.flags |= vr;
            var S = new Error("Simulated error coming from DevTools"), x = bs(u);
            t.lanes = Dt(t.lanes, x);
            var O = CS(t, nc(S, t), x);
            kg(t, O);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var k = a.propTypes;
          k && sl(
            k,
            i,
            // Resolved props
            "prop",
            Zt(a)
          );
        }
      }
      var V;
      Gl(a) ? (V = !0, Kh(t)) : V = !1, zf(t, u);
      var Y = t.stateNode, ee;
      Y === null ? (Um(e, t), EC(t, a, i), gS(t, a, i, u), ee = !0) : e === null ? ee = RT(t, a, i, u) : ee = TT(e, t, a, i, u);
      var Le = kS(e, t, a, ee, V, u);
      {
        var at = t.stateNode;
        ee && at.props !== i && (rc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yt(t) || "a component"), rc = !0);
      }
      return Le;
    }
    function kS(e, t, a, i, u, s) {
      OC(e, t);
      var f = (t.flags & Ze) !== tt;
      if (!i && !f)
        return u && dE(t, a, !1), $u(e, t, s);
      var p = t.stateNode;
      Up.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, hC();
      else {
        Ma(t);
        {
          if (ur(!0), v = p.render(), t.mode & hn) {
            Ln(!0);
            try {
              p.render();
            } finally {
              Ln(!1);
            }
          }
          ur(!1);
        }
        La();
      }
      return t.flags |= hi, e !== null && f ? LT(e, t, v, s) : Aa(e, t, v, s), t.memoizedState = p.state, u && dE(t, a, !0), t.child;
    }
    function LC(e) {
      var t = e.stateNode;
      t.pendingContext ? cE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cE(e, t.context, !1), Dg(e, t.containerInfo);
    }
    function UT(e, t, a) {
      if (LC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      AE(e, t), sm(t, i, null, a);
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
        }, S = t.updateQueue;
        if (S.baseState = v, t.memoizedState = v, t.flags & jr) {
          var x = nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return NC(e, t, p, a, x);
        } else if (p !== s) {
          var O = nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return NC(e, t, p, a, O);
        } else {
          H1(t);
          var k = kE(t, null, p, a);
          t.child = k;
          for (var V = k; V; )
            V.flags = V.flags & ~Mn | ca, V = V.sibling;
        }
      } else {
        if (Mf(), p === s)
          return $u(e, t, a);
        Aa(e, t, p, a);
      }
      return t.child;
    }
    function NC(e, t, a, i, u) {
      return Mf(), pg(u), t.flags |= jr, Aa(e, t, a, i), t.child;
    }
    function jT(e, t, a) {
      HE(t), e === null && dg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Wy(i, u);
      return p ? f = null : s !== null && Wy(i, s) && (t.flags |= Ga), OC(e, t), Aa(e, t, f, a), t.child;
    }
    function FT(e, t) {
      return e === null && dg(t), null;
    }
    function HT(e, t, a, i) {
      Um(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var S = t.tag = F_(v), x = vl(v, u), O;
      switch (S) {
        case re:
          return DS(t, v), t.type = v = Gf(v), O = _S(null, t, v, x, i), O;
        case j:
          return t.type = v = i0(v), O = MC(null, t, v, x, i), O;
        case Re:
          return t.type = v = l0(v), O = bC(null, t, v, x, i), O;
        case Je: {
          if (t.type !== t.elementType) {
            var k = v.propTypes;
            k && sl(
              k,
              x,
              // Resolved for outer only
              "prop",
              Zt(v)
            );
          }
          return O = _C(
            null,
            t,
            v,
            vl(v.type, x),
            // The inner type can have defaults too
            i
          ), O;
        }
      }
      var V = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ge && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function PT(e, t, a, i, u) {
      Um(e, t), t.tag = j;
      var s;
      return Gl(a) ? (s = !0, Kh(t)) : s = !1, zf(t, u), EC(t, a, i), gS(t, a, i, u), kS(null, t, a, !0, s, u);
    }
    function VT(e, t, a, i) {
      Um(e, t);
      var u = t.pendingProps, s;
      {
        var f = _f(t, a, !1);
        s = kf(t, f);
      }
      zf(t, i);
      var p, v;
      Ma(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var S = Zt(a) || "Unknown";
          xS[S] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), xS[S] = !0);
        }
        t.mode & hn && fl.recordLegacyContextWarning(t, null), ur(!0), Up.current = t, p = Pf(null, t, a, u, s, i), v = Vf(), ur(!1);
      }
      if (La(), t.flags |= hi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var x = Zt(a) || "Unknown";
        jp[x] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), jp[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var O = Zt(a) || "Unknown";
          jp[O] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), jp[O] = !0);
        }
        t.tag = j, t.memoizedState = null, t.updateQueue = null;
        var k = !1;
        return Gl(a) ? (k = !0, Kh(t)) : k = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, _g(t), SC(t, p), gS(t, a, u, i), kS(null, t, a, !0, k, i);
      } else {
        if (t.tag = re, t.mode & hn) {
          Ln(!0);
          try {
            p = Pf(null, t, a, u, s, i), v = Vf();
          } finally {
            Ln(!1);
          }
        }
        return qr() && v && ug(t), Aa(null, t, p, i), DS(t, a), t.child;
      }
    }
    function DS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ir();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), TS[u] || (TS[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Zt(t) || "Unknown";
          Fp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Fp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Zt(t) || "Unknown";
          RS[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), RS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Zt(t) || "Unknown";
          wS[v] || (y("%s: Function components do not support contextType.", v), wS[v] = !0);
        }
      }
    }
    var OS = {
      dehydrated: null,
      treeContext: null,
      retryLane: en
    };
    function MS(e) {
      return {
        baseLanes: e,
        cachePool: MT(),
        transitions: null
      };
    }
    function BT(e, t) {
      var a = null;
      return {
        baseLanes: Dt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function $T(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Lg(e, _p);
    }
    function IT(e, t) {
      return _s(e.childLanes, t);
    }
    function zC(e, t, a) {
      var i = t.pendingProps;
      J_(t) && (t.flags |= Ze);
      var u = dl.current, s = !1, f = (t.flags & Ze) !== tt;
      if (f || $T(u, e) ? (s = !0, t.flags &= ~Ze) : (e === null || e.memoizedState !== null) && (u = oT(u, VE)), u = Uf(u), Fo(t, u), e === null) {
        dg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return GT(t, v);
        }
        var S = i.children, x = i.fallback;
        if (s) {
          var O = YT(t, S, x, a), k = t.child;
          return k.memoizedState = MS(a), t.memoizedState = OS, O;
        } else
          return LS(t, S);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var Y = V.dehydrated;
          if (Y !== null)
            return XT(e, t, f, i, Y, V, a);
        }
        if (s) {
          var ee = i.fallback, Le = i.children, at = WT(e, t, Le, ee, a), qe = t.child, Xt = e.child.memoizedState;
          return qe.memoizedState = Xt === null ? MS(a) : BT(Xt, a), qe.childLanes = IT(e, a), t.memoizedState = OS, at;
        } else {
          var Bt = i.children, A = KT(e, t, Bt, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function LS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = NS(u, i);
      return s.return = e, e.child = s, s;
    }
    function YT(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ut) === nt && s !== null ? (p = s, p.childLanes = se, p.pendingProps = f, e.mode & an && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Ko(a, u, i, null)) : (p = NS(f, u), v = Ko(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function NS(e, t, a) {
      return Ax(e, t, se, null);
    }
    function AC(e, t) {
      return oc(e, t);
    }
    function KT(e, t, a, i) {
      var u = e.child, s = u.sibling, f = AC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ut) === nt && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Qa) : p.push(s);
      }
      return t.child = f, f;
    }
    function WT(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, S;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ut) === nt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var x = t.child;
        S = x, S.childLanes = se, S.pendingProps = v, t.mode & an && (S.actualDuration = 0, S.actualStartTime = -1, S.selfBaseDuration = f.selfBaseDuration, S.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        S = AC(f, v), S.subtreeFlags = f.subtreeFlags & qn;
      var O;
      return p !== null ? O = oc(p, i) : (O = Ko(i, s, u, null), O.flags |= Mn), O.return = t, S.return = t, S.sibling = O, t.child = S, O;
    }
    function Am(e, t, a, i) {
      i !== null && pg(i), Lf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = LS(t, s);
      return f.flags |= Mn, t.memoizedState = null, f;
    }
    function QT(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = NS(f, s), v = Ko(i, s, u, null);
      return v.flags |= Mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ut) !== nt && Lf(t, e.child, null, u), v;
    }
    function GT(e, t, a) {
      return (e.mode & Ut) === nt ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ct) : qy(t) ? e.lanes = Fr : e.lanes = va, null;
    }
    function XT(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & jr) {
          t.flags &= ~jr;
          var A = SS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Am(e, t, f, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ze, null;
          var te = i.children, U = i.fallback, ge = QT(e, t, te, U, f), je = t.child;
          return je.memoizedState = MS(f), t.memoizedState = OS, ge;
        }
      else {
        if (j1(), (t.mode & Ut) === nt)
          return Am(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (qy(u)) {
          var p, v, S;
          {
            var x = e1(u);
            p = x.digest, v = x.message, S = x.stack;
          }
          var O;
          v ? O = new Error(v) : O = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var k = SS(O, p, S);
          return Am(e, t, f, k);
        }
        var V = ha(f, e.childLanes);
        if (hl || V) {
          var Y = Km();
          if (Y !== null) {
            var ee = Vd(Y, f);
            if (ee !== en && ee !== s.retryLane) {
              s.retryLane = ee;
              var Le = gn;
              ai(e, ee), zr(Y, e, ee, Le);
            }
          }
          e0();
          var at = SS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Am(e, t, f, at);
        } else if (aE(u)) {
          t.flags |= Ze, t.child = e.child;
          var qe = C_.bind(null, e);
          return t1(u, qe), null;
        } else {
          P1(t, u, s.treeContext);
          var Xt = i.children, Bt = LS(t, Xt);
          return Bt.flags |= ca, Bt;
        }
      }
    }
    function UC(e, t, a) {
      e.lanes = Dt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Dt(i.lanes, t)), wg(e.return, t, a);
    }
    function qT(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Te) {
          var u = i.memoizedState;
          u !== null && UC(i, a, e);
        } else if (i.tag === Vt)
          UC(i, a, e);
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
    function ZT(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && pm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function JT(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !bS[e])
        if (bS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              y('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              y('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          y('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function eb(e, t) {
      e !== void 0 && !zm[e] && (e !== "collapsed" && e !== "hidden" ? (zm[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (zm[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function jC(e, t) {
      {
        var a = Nt(e), i = !a && typeof pt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function tb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Nt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!jC(e[a], a))
              return;
        } else {
          var i = pt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!jC(s.value, f))
                  return;
                f++;
              }
          } else
            y('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function zS(e, t, a, i, u) {
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
    function FC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      JT(u), eb(s, u), tb(f, u), Aa(e, t, f, a);
      var p = dl.current, v = Lg(p, _p);
      if (v)
        p = Ng(p, _p), t.flags |= Ze;
      else {
        var S = e !== null && (e.flags & Ze) !== tt;
        S && qT(t, t.child, a), p = Uf(p);
      }
      if (Fo(t, p), (t.mode & Ut) === nt)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var x = ZT(t.child), O;
            x === null ? (O = t.child, t.child = null) : (O = x.sibling, x.sibling = null), zS(
              t,
              !1,
              // isBackwards
              O,
              x,
              s
            );
            break;
          }
          case "backwards": {
            var k = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var Y = V.alternate;
              if (Y !== null && pm(Y) === null) {
                t.child = V;
                break;
              }
              var ee = V.sibling;
              V.sibling = k, k = V, V = ee;
            }
            zS(
              t,
              !0,
              // isBackwards
              k,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            zS(
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
    function nb(e, t, a) {
      Dg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Lf(t, null, i, a) : Aa(e, t, i, a), t.child;
    }
    var HC = !1;
    function rb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || HC || (HC = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && sl(v, s, "prop", "Context.Provider");
      }
      if (ME(t, u, p), f !== null) {
        var S = f.value;
        if (pe(S, p)) {
          if (f.children === s.children && !Ih())
            return $u(e, t, a);
        } else
          J1(t, u, a);
      }
      var x = s.children;
      return Aa(e, t, x, a), t.child;
    }
    var PC = !1;
    function ab(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (PC || (PC = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zf(t, a);
      var f = gr(i);
      Ma(t);
      var p;
      return Up.current = t, ur(!0), p = s(f), ur(!1), La(), t.flags |= hi, Aa(e, t, p, a), t.child;
    }
    function Hp() {
      hl = !0;
    }
    function Um(e, t) {
      (t.mode & Ut) === nt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Mn);
    }
    function $u(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), hC(), qp(t.lanes), ha(a, t.childLanes) ? (q1(e, t), t.child) : null;
    }
    function ib(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Qa) : s.push(e), a.flags |= Mn, a;
      }
    }
    function AS(e, t) {
      var a = e.lanes;
      return !!ha(a, t);
    }
    function lb(e, t, a) {
      switch (t.tag) {
        case Z:
          LC(t), t.stateNode, Mf();
          break;
        case B:
          HE(t);
          break;
        case j: {
          var i = t.type;
          Gl(i) && Kh(t);
          break;
        }
        case X:
          Dg(t, t.stateNode.containerInfo);
          break;
        case he: {
          var u = t.memoizedProps.value, s = t.type._context;
          ME(t, s, u);
          break;
        }
        case Se:
          {
            var f = ha(a, t.childLanes);
            f && (t.flags |= Wt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Te: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Fo(t, Uf(dl.current)), t.flags |= Ze, null;
            var S = t.child, x = S.childLanes;
            if (ha(a, x))
              return zC(e, t, a);
            Fo(t, Uf(dl.current));
            var O = $u(e, t, a);
            return O !== null ? O.sibling : null;
          } else
            Fo(t, Uf(dl.current));
          break;
        }
        case Vt: {
          var k = (e.flags & Ze) !== tt, V = ha(a, t.childLanes);
          if (k) {
            if (V)
              return FC(e, t, a);
            t.flags |= Ze;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Fo(t, dl.current), V)
            break;
          return null;
        }
        case ue:
        case jt:
          return t.lanes = se, DC(e, t, a);
      }
      return $u(e, t, a);
    }
    function VC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return ib(e, t, f0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Ih() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          hl = !0;
        else {
          var s = AS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ze) === tt)
            return hl = !1, lb(e, t, a);
          (e.flags & Dc) !== tt ? hl = !0 : hl = !1;
        }
      } else if (hl = !1, qr() && M1(t)) {
        var f = t.index, p = L1();
        hE(t, p, f);
      }
      switch (t.lanes = se, t.tag) {
        case Ee:
          return VT(e, t, t.type, a);
        case mt: {
          var v = t.elementType;
          return HT(e, t, v, a);
        }
        case re: {
          var S = t.type, x = t.pendingProps, O = t.elementType === S ? x : vl(S, x);
          return _S(e, t, S, O, a);
        }
        case j: {
          var k = t.type, V = t.pendingProps, Y = t.elementType === k ? V : vl(k, V);
          return MC(e, t, k, Y, a);
        }
        case Z:
          return UT(e, t, a);
        case B:
          return jT(e, t, a);
        case Ce:
          return FT(e, t);
        case Te:
          return zC(e, t, a);
        case X:
          return nb(e, t, a);
        case Re: {
          var ee = t.type, Le = t.pendingProps, at = t.elementType === ee ? Le : vl(ee, Le);
          return bC(e, t, ee, at, a);
        }
        case J:
          return NT(e, t, a);
        case q:
          return zT(e, t, a);
        case Se:
          return AT(e, t, a);
        case he:
          return rb(e, t, a);
        case ve:
          return ab(e, t, a);
        case Je: {
          var qe = t.type, Xt = t.pendingProps, Bt = vl(qe, Xt);
          if (t.type !== t.elementType) {
            var A = qe.propTypes;
            A && sl(
              A,
              Bt,
              // Resolved for outer only
              "prop",
              Zt(qe)
            );
          }
          return Bt = vl(qe.type, Bt), _C(e, t, qe, Bt, a);
        }
        case Pe:
          return kC(e, t, t.type, t.pendingProps, a);
        case xt: {
          var te = t.type, U = t.pendingProps, ge = t.elementType === te ? U : vl(te, U);
          return PT(e, t, te, ge, a);
        }
        case Vt:
          return FC(e, t, a);
        case wt:
          break;
        case ue:
          return DC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bf(e) {
      e.flags |= Wt;
    }
    function BC(e) {
      e.flags |= Hn, e.flags |= yo;
    }
    var $C, US, IC, YC;
    $C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === B || u.tag === Ce)
          kR(e, u.stateNode);
        else if (u.tag !== X) {
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
    }, US = function(e, t) {
    }, IC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Og(), v = OR(f, a, s, i, u, p);
        t.updateQueue = v, v && Bf(t);
      }
    }, YC = function(e, t, a, i) {
      a !== i && Bf(t);
    };
    function Pp(e, t) {
      if (!qr())
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
    function Jr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = se, i = tt;
      if (t) {
        if ((e.mode & an) !== nt) {
          for (var v = e.selfBaseDuration, S = e.child; S !== null; )
            a = Dt(a, Dt(S.lanes, S.childLanes)), i |= S.subtreeFlags & qn, i |= S.flags & qn, v += S.treeBaseDuration, S = S.sibling;
          e.treeBaseDuration = v;
        } else
          for (var x = e.child; x !== null; )
            a = Dt(a, Dt(x.lanes, x.childLanes)), i |= x.subtreeFlags & qn, i |= x.flags & qn, x.return = e, x = x.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & an) !== nt) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Dt(a, Dt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Dt(a, Dt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function ub(e, t, a) {
      if (Y1() && (t.mode & Ut) !== nt && (t.flags & Ze) === tt)
        return xE(t), Mf(), t.flags |= jr | fs | vr, !1;
      var i = qh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($1(t), Jr(t), (t.mode & an) !== nt) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Mf(), (t.flags & Ze) === tt && (t.memoizedState = null), t.flags |= Wt, Jr(t), (t.mode & an) !== nt) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return wE(), !0;
    }
    function KC(e, t, a) {
      var i = t.pendingProps;
      switch (og(t), t.tag) {
        case Ee:
        case mt:
        case Pe:
        case re:
        case Re:
        case J:
        case q:
        case Se:
        case ve:
        case Je:
          return Jr(t), null;
        case j: {
          var u = t.type;
          return Gl(u) && Yh(t), Jr(t), null;
        }
        case Z: {
          var s = t.stateNode;
          if (Af(t), ag(t), Ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = qh(t);
            if (f)
              Bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & jr) !== tt) && (t.flags |= or, wE());
            }
          }
          return US(e, t), Jr(t), null;
        }
        case B: {
          Mg(t);
          var v = FE(), S = t.type;
          if (e !== null && t.stateNode != null)
            IC(e, t, S, i, v), e.ref !== t.ref && BC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Jr(t), null;
            }
            var x = Og(), O = qh(t);
            if (O)
              V1(t, v, x) && Bf(t);
            else {
              var k = _R(S, i, v, x, t);
              $C(k, t, !1, !1), t.stateNode = k, DR(k, S, i, v) && Bf(t);
            }
            t.ref !== null && BC(t);
          }
          return Jr(t), null;
        }
        case Ce: {
          var V = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            YC(e, t, Y, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ee = FE(), Le = Og(), at = qh(t);
            at ? B1(t) && Bf(t) : t.stateNode = MR(V, ee, Le, t);
          }
          return Jr(t), null;
        }
        case Te: {
          jf(t);
          var qe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Xt = ub(e, t, qe);
            if (!Xt)
              return t.flags & vr ? t : null;
          }
          if ((t.flags & Ze) !== tt)
            return t.lanes = a, (t.mode & an) !== nt && lS(t), t;
          var Bt = qe !== null, A = e !== null && e.memoizedState !== null;
          if (Bt !== A && Bt) {
            var te = t.child;
            if (te.flags |= Xn, (t.mode & Ut) !== nt) {
              var U = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              U || Lg(dl.current, VE) ? o_() : e0();
            }
          }
          var ge = t.updateQueue;
          if (ge !== null && (t.flags |= Wt), Jr(t), (t.mode & an) !== nt && Bt) {
            var je = t.child;
            je !== null && (t.treeBaseDuration -= je.treeBaseDuration);
          }
          return null;
        }
        case X:
          return Af(t), US(e, t), e === null && R1(t.stateNode.containerInfo), Jr(t), null;
        case he:
          var Ne = t.type._context;
          return xg(Ne, t), Jr(t), null;
        case xt: {
          var vt = t.type;
          return Gl(vt) && Yh(t), Jr(t), null;
        }
        case Vt: {
          jf(t);
          var Ct = t.memoizedState;
          if (Ct === null)
            return Jr(t), null;
          var yn = (t.flags & Ze) !== tt, on = Ct.rendering;
          if (on === null)
            if (yn)
              Pp(Ct, !1);
            else {
              var fr = c_() && (e === null || (e.flags & Ze) === tt);
              if (!fr)
                for (var sn = t.child; sn !== null; ) {
                  var rr = pm(sn);
                  if (rr !== null) {
                    yn = !0, t.flags |= Ze, Pp(Ct, !1);
                    var xa = rr.updateQueue;
                    return xa !== null && (t.updateQueue = xa, t.flags |= Wt), t.subtreeFlags = tt, Z1(t, a), Fo(t, Ng(dl.current, _p)), t.child;
                  }
                  sn = sn.sibling;
                }
              Ct.tail !== null && sr() > px() && (t.flags |= Ze, yn = !0, Pp(Ct, !1), t.lanes = Ld);
            }
          else {
            if (!yn) {
              var aa = pm(on);
              if (aa !== null) {
                t.flags |= Ze, yn = !0;
                var xi = aa.updateQueue;
                if (xi !== null && (t.updateQueue = xi, t.flags |= Wt), Pp(Ct, !0), Ct.tail === null && Ct.tailMode === "hidden" && !on.alternate && !qr())
                  return Jr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              sr() * 2 - Ct.renderingStartTime > px() && a !== va && (t.flags |= Ze, yn = !0, Pp(Ct, !1), t.lanes = Ld);
            }
            if (Ct.isBackwards)
              on.sibling = t.child, t.child = on;
            else {
              var Fa = Ct.last;
              Fa !== null ? Fa.sibling = on : t.child = on, Ct.last = on;
            }
          }
          if (Ct.tail !== null) {
            var Ha = Ct.tail;
            Ct.rendering = Ha, Ct.tail = Ha.sibling, Ct.renderingStartTime = sr(), Ha.sibling = null;
            var wa = dl.current;
            return yn ? wa = Ng(wa, _p) : wa = Uf(wa), Fo(t, wa), Ha;
          }
          return Jr(t), null;
        }
        case wt:
          break;
        case ue:
        case jt: {
          JS(t);
          var Qu = t.memoizedState, Xf = Qu !== null;
          if (e !== null) {
            var nv = e.memoizedState, ru = nv !== null;
            ru !== Xf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !be && (t.flags |= Xn);
          }
          return !Xf || (t.mode & Ut) === nt ? Jr(t) : ha(nu, va) && (Jr(t), t.subtreeFlags & (Mn | Wt) && (t.flags |= Xn)), null;
        }
        case $t:
          return null;
        case It:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ob(e, t, a) {
      switch (og(t), t.tag) {
        case j: {
          var i = t.type;
          Gl(i) && Yh(t);
          var u = t.flags;
          return u & vr ? (t.flags = u & ~vr | Ze, (t.mode & an) !== nt && lS(t), t) : null;
        }
        case Z: {
          t.stateNode, Af(t), ag(t), Ag();
          var s = t.flags;
          return (s & vr) !== tt && (s & Ze) === tt ? (t.flags = s & ~vr | Ze, t) : null;
        }
        case B:
          return Mg(t), null;
        case Te: {
          jf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Mf();
          }
          var p = t.flags;
          return p & vr ? (t.flags = p & ~vr | Ze, (t.mode & an) !== nt && lS(t), t) : null;
        }
        case Vt:
          return jf(t), null;
        case X:
          return Af(t), null;
        case he:
          var v = t.type._context;
          return xg(v, t), null;
        case ue:
        case jt:
          return JS(t), null;
        case $t:
          return null;
        default:
          return null;
      }
    }
    function WC(e, t, a) {
      switch (og(t), t.tag) {
        case j: {
          var i = t.type.childContextTypes;
          i != null && Yh(t);
          break;
        }
        case Z: {
          t.stateNode, Af(t), ag(t), Ag();
          break;
        }
        case B: {
          Mg(t);
          break;
        }
        case X:
          Af(t);
          break;
        case Te:
          jf(t);
          break;
        case Vt:
          jf(t);
          break;
        case he:
          var u = t.type._context;
          xg(u, t);
          break;
        case ue:
        case jt:
          JS(t);
          break;
      }
    }
    var QC = null;
    QC = /* @__PURE__ */ new Set();
    var jm = !1, ea = !1, sb = typeof WeakSet == "function" ? WeakSet : Set, Ie = null, $f = null, If = null;
    function cb(e) {
      Ml(null, function() {
        throw e;
      }), cs();
    }
    var fb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & an)
        try {
          eu(), t.componentWillUnmount();
        } finally {
          Jl(e);
        }
      else
        t.componentWillUnmount();
    };
    function GC(e, t) {
      try {
        Vo(kr, e);
      } catch (a) {
        wn(e, t, a);
      }
    }
    function jS(e, t, a) {
      try {
        fb(e, a);
      } catch (i) {
        wn(e, t, i);
      }
    }
    function db(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        wn(e, t, i);
      }
    }
    function XC(e, t) {
      try {
        ZC(e);
      } catch (a) {
        wn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Qe && Ot && e.mode & an)
              try {
                eu(), i = a(null);
              } finally {
                Jl(e);
              }
            else
              i = a(null);
          } catch (u) {
            wn(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", yt(e));
        } else
          a.current = null;
    }
    function Fm(e, t, a) {
      try {
        a();
      } catch (i) {
        wn(e, t, i);
      }
    }
    var qC = !1;
    function pb(e, t) {
      TR(e.containerInfo), Ie = t, vb();
      var a = qC;
      return qC = !1, a;
    }
    function vb() {
      for (; Ie !== null; ) {
        var e = Ie, t = e.child;
        (e.subtreeFlags & Nl) !== tt && t !== null ? (t.return = e, Ie = t) : hb();
      }
    }
    function hb() {
      for (; Ie !== null; ) {
        var e = Ie;
        dn(e);
        try {
          mb(e);
        } catch (a) {
          wn(e, e.return, a);
        }
        xn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ie = t;
          return;
        }
        Ie = e.return;
      }
    }
    function mb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & or) !== tt) {
        switch (dn(e), e.tag) {
          case re:
          case Re:
          case Pe:
            break;
          case j: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !rc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : vl(e.type, i), u);
              {
                var p = QC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", yt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Z: {
            {
              var v = e.stateNode;
              XR(v.containerInfo);
            }
            break;
          }
          case B:
          case Ce:
          case X:
          case xt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        xn();
      }
    }
    function ml(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Zr) !== ii ? rl(t) : (e & kr) !== ii && ps(t), (e & Xl) !== ii && Jp(!0), Fm(t, a, p), (e & Xl) !== ii && Jp(!1), (e & Zr) !== ii ? jl() : (e & kr) !== ii && Od());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Vo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Zr) !== ii ? Dd(t) : (e & kr) !== ii && Ac(t);
            var f = s.create;
            (e & Xl) !== ii && Jp(!0), s.destroy = f(), (e & Xl) !== ii && Jp(!1), (e & Zr) !== ii ? $v() : (e & kr) !== ii && Iv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & kr) !== tt ? v = "useLayoutEffect" : (s.tag & Xl) !== tt ? v = "useInsertionEffect" : v = "useEffect";
                var S = void 0;
                p === null ? S = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? S = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : S = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", v, S);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function yb(e, t) {
      if ((t.flags & Wt) !== tt)
        switch (t.tag) {
          case Se: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = pC(), p = t.alternate === null ? "mount" : "update";
            dC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case Z:
                  var S = v.stateNode;
                  S.passiveEffectDuration += a;
                  break e;
                case Se:
                  var x = v.stateNode;
                  x.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function gb(e, t, a, i) {
      if ((a.flags & Al) !== tt)
        switch (a.tag) {
          case re:
          case Re:
          case Pe: {
            if (!ea)
              if (a.mode & an)
                try {
                  eu(), Vo(kr | _r, a);
                } finally {
                  Jl(a);
                }
              else
                Vo(kr | _r, a);
            break;
          }
          case j: {
            var u = a.stateNode;
            if (a.flags & Wt && !ea)
              if (t === null)
                if (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), a.mode & an)
                  try {
                    eu(), u.componentDidMount();
                  } finally {
                    Jl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : vl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), a.mode & an)
                  try {
                    eu(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Jl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), jE(a, p, u));
            break;
          }
          case Z: {
            var v = a.updateQueue;
            if (v !== null) {
              var S = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case B:
                    S = a.child.stateNode;
                    break;
                  case j:
                    S = a.child.stateNode;
                    break;
                }
              jE(a, v, S);
            }
            break;
          }
          case B: {
            var x = a.stateNode;
            if (t === null && a.flags & Wt) {
              var O = a.type, k = a.memoizedProps;
              UR(x, O, k);
            }
            break;
          }
          case Ce:
            break;
          case X:
            break;
          case Se: {
            {
              var V = a.memoizedProps, Y = V.onCommit, ee = V.onRender, Le = a.stateNode.effectDuration, at = pC(), qe = t === null ? "mount" : "update";
              dC() && (qe = "nested-update"), typeof ee == "function" && ee(a.memoizedProps.id, qe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, at);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, qe, Le, at), h_(a);
                var Xt = a.return;
                e: for (; Xt !== null; ) {
                  switch (Xt.tag) {
                    case Z:
                      var Bt = Xt.stateNode;
                      Bt.effectDuration += Le;
                      break e;
                    case Se:
                      var A = Xt.stateNode;
                      A.effectDuration += Le;
                      break e;
                  }
                  Xt = Xt.return;
                }
              }
            }
            break;
          }
          case Te: {
            bb(e, a);
            break;
          }
          case Vt:
          case xt:
          case wt:
          case ue:
          case jt:
          case It:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      ea || a.flags & Hn && ZC(a);
    }
    function Sb(e) {
      switch (e.tag) {
        case re:
        case Re:
        case Pe: {
          if (e.mode & an)
            try {
              eu(), GC(e, e.return);
            } finally {
              Jl(e);
            }
          else
            GC(e, e.return);
          break;
        }
        case j: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && db(e, e.return, t), XC(e, e.return);
          break;
        }
        case B: {
          XC(e, e.return);
          break;
        }
      }
    }
    function Eb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === B) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? KR(u) : QR(i.stateNode, i.memoizedProps);
            } catch (f) {
              wn(e, e.return, f);
            }
          }
        } else if (i.tag === Ce) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? WR(s) : GR(s, i.memoizedProps);
            } catch (f) {
              wn(e, e.return, f);
            }
        } else if (!((i.tag === ue || i.tag === jt) && i.memoizedState !== null && i !== e)) {
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
    function ZC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case B:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & an)
            try {
              eu(), u = t(i);
            } finally {
              Jl(e);
            }
          else
            u = t(i);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", yt(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", yt(e)), t.current = i;
      }
    }
    function Cb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function JC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, JC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === B) {
          var a = e.stateNode;
          a !== null && _1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function xb(e) {
      for (var t = e.return; t !== null; ) {
        if (ex(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ex(e) {
      return e.tag === B || e.tag === Z || e.tag === X;
    }
    function tx(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || ex(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== B && t.tag !== Ce && t.tag !== lt; ) {
          if (t.flags & Mn || t.child === null || t.tag === X)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Mn))
          return t.stateNode;
      }
    }
    function wb(e) {
      var t = xb(e);
      switch (t.tag) {
        case B: {
          var a = t.stateNode;
          t.flags & Ga && (rE(a), t.flags &= ~Ga);
          var i = tx(e);
          HS(e, i, a);
          break;
        }
        case Z:
        case X: {
          var u = t.stateNode.containerInfo, s = tx(e);
          FS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function FS(e, t, a) {
      var i = e.tag, u = i === B || i === Ce;
      if (u) {
        var s = e.stateNode;
        t ? BR(a, s, t) : PR(a, s);
      } else if (i !== X) {
        var f = e.child;
        if (f !== null) {
          FS(f, t, a);
          for (var p = f.sibling; p !== null; )
            FS(p, t, a), p = p.sibling;
        }
      }
    }
    function HS(e, t, a) {
      var i = e.tag, u = i === B || i === Ce;
      if (u) {
        var s = e.stateNode;
        t ? VR(a, s, t) : HR(a, s);
      } else if (i !== X) {
        var f = e.child;
        if (f !== null) {
          HS(f, t, a);
          for (var p = f.sibling; p !== null; )
            HS(p, t, a), p = p.sibling;
        }
      }
    }
    var ta = null, yl = !1;
    function Rb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case B: {
              ta = i.stateNode, yl = !1;
              break e;
            }
            case Z: {
              ta = i.stateNode.containerInfo, yl = !0;
              break e;
            }
            case X: {
              ta = i.stateNode.containerInfo, yl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (ta === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        nx(e, t, a), ta = null, yl = !1;
      }
      Cb(a);
    }
    function Bo(e, t, a) {
      for (var i = a.child; i !== null; )
        nx(e, t, i), i = i.sibling;
    }
    function nx(e, t, a) {
      switch (bd(a), a.tag) {
        case B:
          ea || Yf(a, t);
        case Ce: {
          {
            var i = ta, u = yl;
            ta = null, Bo(e, t, a), ta = i, yl = u, ta !== null && (yl ? IR(ta, a.stateNode) : $R(ta, a.stateNode));
          }
          return;
        }
        case lt: {
          ta !== null && (yl ? YR(ta, a.stateNode) : Xy(ta, a.stateNode));
          return;
        }
        case X: {
          {
            var s = ta, f = yl;
            ta = a.stateNode.containerInfo, yl = !0, Bo(e, t, a), ta = s, yl = f;
          }
          return;
        }
        case re:
        case Re:
        case Je:
        case Pe: {
          if (!ea) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var S = v.next, x = S;
                do {
                  var O = x, k = O.destroy, V = O.tag;
                  k !== void 0 && ((V & Xl) !== ii ? Fm(a, t, k) : (V & kr) !== ii && (ps(a), a.mode & an ? (eu(), Fm(a, t, k), Jl(a)) : Fm(a, t, k), Od())), x = x.next;
                } while (x !== S);
              }
            }
          }
          Bo(e, t, a);
          return;
        }
        case j: {
          if (!ea) {
            Yf(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && jS(a, t, Y);
          }
          Bo(e, t, a);
          return;
        }
        case wt: {
          Bo(e, t, a);
          return;
        }
        case ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ut
          ) {
            var ee = ea;
            ea = ee || a.memoizedState !== null, Bo(e, t, a), ea = ee;
          } else
            Bo(e, t, a);
          break;
        }
        default: {
          Bo(e, t, a);
          return;
        }
      }
    }
    function Tb(e) {
      e.memoizedState;
    }
    function bb(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && c1(s);
          }
        }
      }
    }
    function rx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new sb()), t.forEach(function(i) {
          var u = x_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), pa)
              if ($f !== null && If !== null)
                Zp(If, $f);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function _b(e, t, a) {
      $f = a, If = e, dn(t), ax(t, e), dn(t), $f = null, If = null;
    }
    function gl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Rb(e, t, s);
          } catch (v) {
            wn(s, t, v);
          }
        }
      var f = Rl();
      if (t.subtreeFlags & zl)
        for (var p = t.child; p !== null; )
          dn(p), ax(p, e), p = p.sibling;
      dn(f);
    }
    function ax(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case re:
        case Re:
        case Je:
        case Pe: {
          if (gl(t, e), tu(e), u & Wt) {
            try {
              ml(Xl | _r, e, e.return), Vo(Xl | _r, e);
            } catch (vt) {
              wn(e, e.return, vt);
            }
            if (e.mode & an) {
              try {
                eu(), ml(kr | _r, e, e.return);
              } catch (vt) {
                wn(e, e.return, vt);
              }
              Jl(e);
            } else
              try {
                ml(kr | _r, e, e.return);
              } catch (vt) {
                wn(e, e.return, vt);
              }
          }
          return;
        }
        case j: {
          gl(t, e), tu(e), u & Hn && i !== null && Yf(i, i.return);
          return;
        }
        case B: {
          gl(t, e), tu(e), u & Hn && i !== null && Yf(i, i.return);
          {
            if (e.flags & Ga) {
              var s = e.stateNode;
              try {
                rE(s);
              } catch (vt) {
                wn(e, e.return, vt);
              }
            }
            if (u & Wt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, S = e.type, x = e.updateQueue;
                if (e.updateQueue = null, x !== null)
                  try {
                    jR(f, x, S, v, p, e);
                  } catch (vt) {
                    wn(e, e.return, vt);
                  }
              }
            }
          }
          return;
        }
        case Ce: {
          if (gl(t, e), tu(e), u & Wt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var O = e.stateNode, k = e.memoizedProps, V = i !== null ? i.memoizedProps : k;
            try {
              FR(O, V, k);
            } catch (vt) {
              wn(e, e.return, vt);
            }
          }
          return;
        }
        case Z: {
          if (gl(t, e), tu(e), u & Wt && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                s1(t.containerInfo);
              } catch (vt) {
                wn(e, e.return, vt);
              }
          }
          return;
        }
        case X: {
          gl(t, e), tu(e);
          return;
        }
        case Te: {
          gl(t, e), tu(e);
          var ee = e.child;
          if (ee.flags & Xn) {
            var Le = ee.stateNode, at = ee.memoizedState, qe = at !== null;
            if (Le.isHidden = qe, qe) {
              var Xt = ee.alternate !== null && ee.alternate.memoizedState !== null;
              Xt || u_();
            }
          }
          if (u & Wt) {
            try {
              Tb(e);
            } catch (vt) {
              wn(e, e.return, vt);
            }
            rx(e);
          }
          return;
        }
        case ue: {
          var Bt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ut
          ) {
            var A = ea;
            ea = A || Bt, gl(t, e), ea = A;
          } else
            gl(t, e);
          if (tu(e), u & Xn) {
            var te = e.stateNode, U = e.memoizedState, ge = U !== null, je = e;
            if (te.isHidden = ge, ge && !Bt && (je.mode & Ut) !== nt) {
              Ie = je;
              for (var Ne = je.child; Ne !== null; )
                Ie = Ne, Db(Ne), Ne = Ne.sibling;
            }
            Eb(je, ge);
          }
          return;
        }
        case Vt: {
          gl(t, e), tu(e), u & Wt && rx(e);
          return;
        }
        case wt:
          return;
        default: {
          gl(t, e), tu(e);
          return;
        }
      }
    }
    function tu(e) {
      var t = e.flags;
      if (t & Mn) {
        try {
          wb(e);
        } catch (a) {
          wn(e, e.return, a);
        }
        e.flags &= ~Mn;
      }
      t & ca && (e.flags &= ~ca);
    }
    function kb(e, t, a) {
      $f = a, If = t, Ie = e, ix(e, t, a), $f = null, If = null;
    }
    function ix(e, t, a) {
      for (var i = (e.mode & Ut) !== nt; Ie !== null; ) {
        var u = Ie, s = u.child;
        if (u.tag === ue && i) {
          var f = u.memoizedState !== null, p = f || jm;
          if (p) {
            PS(e, t, a);
            continue;
          } else {
            var v = u.alternate, S = v !== null && v.memoizedState !== null, x = S || ea, O = jm, k = ea;
            jm = p, ea = x, ea && !k && (Ie = u, Ob(u));
            for (var V = s; V !== null; )
              Ie = V, ix(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            Ie = u, jm = O, ea = k, PS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Al) !== tt && s !== null ? (s.return = u, Ie = s) : PS(e, t, a);
      }
    }
    function PS(e, t, a) {
      for (; Ie !== null; ) {
        var i = Ie;
        if ((i.flags & Al) !== tt) {
          var u = i.alternate;
          dn(i);
          try {
            gb(t, u, i, a);
          } catch (f) {
            wn(i, i.return, f);
          }
          xn();
        }
        if (i === e) {
          Ie = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ie = s;
          return;
        }
        Ie = i.return;
      }
    }
    function Db(e) {
      for (; Ie !== null; ) {
        var t = Ie, a = t.child;
        switch (t.tag) {
          case re:
          case Re:
          case Je:
          case Pe: {
            if (t.mode & an)
              try {
                eu(), ml(kr, t, t.return);
              } finally {
                Jl(t);
              }
            else
              ml(kr, t, t.return);
            break;
          }
          case j: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && jS(t, t.return, i);
            break;
          }
          case B: {
            Yf(t, t.return);
            break;
          }
          case ue: {
            var u = t.memoizedState !== null;
            if (u) {
              lx(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ie = a) : lx(e);
      }
    }
    function lx(e) {
      for (; Ie !== null; ) {
        var t = Ie;
        if (t === e) {
          Ie = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ie = a;
          return;
        }
        Ie = t.return;
      }
    }
    function Ob(e) {
      for (; Ie !== null; ) {
        var t = Ie, a = t.child;
        if (t.tag === ue) {
          var i = t.memoizedState !== null;
          if (i) {
            ux(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ie = a) : ux(e);
      }
    }
    function ux(e) {
      for (; Ie !== null; ) {
        var t = Ie;
        dn(t);
        try {
          Sb(t);
        } catch (i) {
          wn(t, t.return, i);
        }
        if (xn(), t === e) {
          Ie = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ie = a;
          return;
        }
        Ie = t.return;
      }
    }
    function Mb(e, t, a, i) {
      Ie = t, Lb(t, e, a, i);
    }
    function Lb(e, t, a, i) {
      for (; Ie !== null; ) {
        var u = Ie, s = u.child;
        (u.subtreeFlags & tl) !== tt && s !== null ? (s.return = u, Ie = s) : Nb(e, t, a, i);
      }
    }
    function Nb(e, t, a, i) {
      for (; Ie !== null; ) {
        var u = Ie;
        if ((u.flags & sa) !== tt) {
          dn(u);
          try {
            zb(t, u, a, i);
          } catch (f) {
            wn(u, u.return, f);
          }
          xn();
        }
        if (u === e) {
          Ie = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ie = s;
          return;
        }
        Ie = u.return;
      }
    }
    function zb(e, t, a, i) {
      switch (t.tag) {
        case re:
        case Re:
        case Pe: {
          if (t.mode & an) {
            iS();
            try {
              Vo(Zr | _r, t);
            } finally {
              aS(t);
            }
          } else
            Vo(Zr | _r, t);
          break;
        }
      }
    }
    function Ab(e) {
      Ie = e, Ub();
    }
    function Ub() {
      for (; Ie !== null; ) {
        var e = Ie, t = e.child;
        if ((Ie.flags & Qa) !== tt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ie = u, Hb(u, e);
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
            Ie = e;
          }
        }
        (e.subtreeFlags & tl) !== tt && t !== null ? (t.return = e, Ie = t) : jb();
      }
    }
    function jb() {
      for (; Ie !== null; ) {
        var e = Ie;
        (e.flags & sa) !== tt && (dn(e), Fb(e), xn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ie = t;
          return;
        }
        Ie = e.return;
      }
    }
    function Fb(e) {
      switch (e.tag) {
        case re:
        case Re:
        case Pe: {
          e.mode & an ? (iS(), ml(Zr | _r, e, e.return), aS(e)) : ml(Zr | _r, e, e.return);
          break;
        }
      }
    }
    function Hb(e, t) {
      for (; Ie !== null; ) {
        var a = Ie;
        dn(a), Vb(a, t), xn();
        var i = a.child;
        i !== null ? (i.return = a, Ie = i) : Pb(e);
      }
    }
    function Pb(e) {
      for (; Ie !== null; ) {
        var t = Ie, a = t.sibling, i = t.return;
        if (JC(t), t === e) {
          Ie = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ie = a;
          return;
        }
        Ie = i;
      }
    }
    function Vb(e, t) {
      switch (e.tag) {
        case re:
        case Re:
        case Pe: {
          e.mode & an ? (iS(), ml(Zr, e, t), aS(e)) : ml(Zr, e, t);
          break;
        }
      }
    }
    function Bb(e) {
      switch (e.tag) {
        case re:
        case Re:
        case Pe: {
          try {
            Vo(kr | _r, e);
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
        case j: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
      }
    }
    function $b(e) {
      switch (e.tag) {
        case re:
        case Re:
        case Pe: {
          try {
            Vo(Zr | _r, e);
          } catch (t) {
            wn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Ib(e) {
      switch (e.tag) {
        case re:
        case Re:
        case Pe: {
          try {
            ml(kr | _r, e, e.return);
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
        case j: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && jS(e, e.return, t);
          break;
        }
      }
    }
    function Yb(e) {
      switch (e.tag) {
        case re:
        case Re:
        case Pe:
          try {
            ml(Zr | _r, e, e.return);
          } catch (t) {
            wn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Vp = Symbol.for;
      Vp("selector.component"), Vp("selector.has_pseudo_class"), Vp("selector.role"), Vp("selector.test_id"), Vp("selector.text");
    }
    var Kb = [];
    function Wb() {
      Kb.forEach(function(e) {
        return e();
      });
    }
    var Qb = C.ReactCurrentActQueue;
    function Gb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function ox() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Qb.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Xb = Math.ceil, VS = C.ReactCurrentDispatcher, BS = C.ReactCurrentOwner, na = C.ReactCurrentBatchConfig, Sl = C.ReactCurrentActQueue, Mr = (
      /*             */
      0
    ), sx = (
      /*               */
      1
    ), ra = (
      /*                */
      2
    ), Yi = (
      /*                */
      4
    ), Iu = 0, Bp = 1, ac = 2, Hm = 3, $p = 4, cx = 5, $S = 6, Gt = Mr, Ua = null, Wn = null, Lr = se, nu = se, IS = Lo(se), Nr = Iu, Ip = null, Pm = se, Yp = se, Vm = se, Kp = null, li = null, YS = 0, fx = 500, dx = 1 / 0, qb = 500, Yu = null;
    function Wp() {
      dx = sr() + qb;
    }
    function px() {
      return dx;
    }
    var Bm = !1, KS = null, Kf = null, ic = !1, $o = null, Qp = se, WS = [], QS = null, Zb = 50, Gp = 0, GS = null, XS = !1, $m = !1, Jb = 50, Wf = 0, Im = null, Xp = gn, Ym = se, vx = !1;
    function Km() {
      return Ua;
    }
    function ja() {
      return (Gt & (ra | Yi)) !== Mr ? sr() : (Xp !== gn || (Xp = sr()), Xp);
    }
    function Io(e) {
      var t = e.mode;
      if ((t & Ut) === nt)
        return ct;
      if ((Gt & ra) !== Mr && Lr !== se)
        return bs(Lr);
      var a = Q1() !== W1;
      if (a) {
        if (na.transition !== null) {
          var i = na.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Ym === en && (Ym = Fd()), Ym;
      }
      var u = ti();
      if (u !== en)
        return u;
      var s = LR();
      return s;
    }
    function e_(e) {
      var t = e.mode;
      return (t & Ut) === nt ? ct : Xv();
    }
    function zr(e, t, a, i) {
      R_(), vx && y("useInsertionEffect must not schedule updates."), XS && ($m = !0), Co(e, a, i), (Gt & ra) !== se && e === Ua ? __(t) : (pa && Ds(e, t, a), k_(t), e === Ua && ((Gt & ra) === Mr && (Yp = Dt(Yp, a)), Nr === $p && Yo(e, Lr)), ui(e, i), a === ct && Gt === Mr && (t.mode & Ut) === nt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Sl.isBatchingLegacy && (Wp(), vE()));
    }
    function t_(e, t, a) {
      var i = e.current;
      i.lanes = t, Co(e, t, a), ui(e, a);
    }
    function n_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Gt & ra) !== Mr
      );
    }
    function ui(e, t) {
      var a = e.callbackNode;
      tf(e, t);
      var i = ef(e, e === Ua ? Lr : se);
      if (i === se) {
        a !== null && Ox(a), e.callbackNode = null, e.callbackPriority = en;
        return;
      }
      var u = Pl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Sl.current !== null && a !== r0)) {
        a == null && s !== ct && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Ox(a);
      var f;
      if (u === ct)
        e.tag === No ? (Sl.isBatchingLegacy !== null && (Sl.didScheduleLegacyUpdate = !0), O1(yx.bind(null, e))) : pE(yx.bind(null, e)), Sl.current !== null ? Sl.current.push(zo) : zR(function() {
          (Gt & (ra | Yi)) === Mr && zo();
        }), f = null;
      else {
        var p;
        switch (rh(i)) {
          case Kr:
            p = ds;
            break;
          case Ai:
            p = Ul;
            break;
          case Ja:
            p = nl;
            break;
          case ei:
            p = gu;
            break;
          default:
            p = nl;
            break;
        }
        f = a0(p, hx.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function hx(e, t) {
      if (ET(), Xp = gn, Ym = se, (Gt & (ra | Yi)) !== Mr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Wu();
      if (i && e.callbackNode !== a)
        return null;
      var u = ef(e, e === Ua ? Lr : se);
      if (u === se)
        return null;
      var s = !rf(e, u) && !Gv(e, u) && !t, f = s ? d_(e, u) : Qm(e, u);
      if (f !== Iu) {
        if (f === ac) {
          var p = nf(e);
          p !== se && (u = p, f = qS(e, p));
        }
        if (f === Bp) {
          var v = Ip;
          throw lc(e, se), Yo(e, u), ui(e, sr()), v;
        }
        if (f === $S)
          Yo(e, u);
        else {
          var S = !rf(e, u), x = e.current.alternate;
          if (S && !a_(x)) {
            if (f = Qm(e, u), f === ac) {
              var O = nf(e);
              O !== se && (u = O, f = qS(e, O));
            }
            if (f === Bp) {
              var k = Ip;
              throw lc(e, se), Yo(e, u), ui(e, sr()), k;
            }
          }
          e.finishedWork = x, e.finishedLanes = u, r_(e, f, u);
        }
      }
      return ui(e, sr()), e.callbackNode === a ? hx.bind(null, e) : null;
    }
    function qS(e, t) {
      var a = Kp;
      if (uf(e)) {
        var i = lc(e, t);
        i.flags |= jr, w1(e.containerInfo);
      }
      var u = Qm(e, t);
      if (u !== ac) {
        var s = li;
        li = a, s !== null && mx(s);
      }
      return u;
    }
    function mx(e) {
      li === null ? li = e : li.push.apply(li, e);
    }
    function r_(e, t, a) {
      switch (t) {
        case Iu:
        case Bp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ac: {
          uc(e, li, Yu);
          break;
        }
        case Hm: {
          if (Yo(e, a), Du(a) && // do not delay if we're inside an act() scope
          !Mx()) {
            var i = YS + fx - sr();
            if (i > 10) {
              var u = ef(e, se);
              if (u !== se)
                break;
              var s = e.suspendedLanes;
              if (!Ou(s, a)) {
                ja(), af(e, s);
                break;
              }
              e.timeoutHandle = Qy(uc.bind(null, e, li, Yu), i);
              break;
            }
          }
          uc(e, li, Yu);
          break;
        }
        case $p: {
          if (Yo(e, a), Ud(a))
            break;
          if (!Mx()) {
            var f = yi(e, a), p = f, v = sr() - p, S = w_(v) - v;
            if (S > 10) {
              e.timeoutHandle = Qy(uc.bind(null, e, li, Yu), S);
              break;
            }
          }
          uc(e, li, Yu);
          break;
        }
        case cx: {
          uc(e, li, Yu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function a_(e) {
      for (var t = e; ; ) {
        if (t.flags & mo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!pe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & mo && v !== null) {
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
    function Yo(e, t) {
      t = _s(t, Vm), t = _s(t, Yp), Jv(e, t);
    }
    function yx(e) {
      if (CT(), (Gt & (ra | Yi)) !== Mr)
        throw new Error("Should not already be working.");
      Wu();
      var t = ef(e, se);
      if (!ha(t, ct))
        return ui(e, sr()), null;
      var a = Qm(e, t);
      if (e.tag !== No && a === ac) {
        var i = nf(e);
        i !== se && (t = i, a = qS(e, i));
      }
      if (a === Bp) {
        var u = Ip;
        throw lc(e, se), Yo(e, t), ui(e, sr()), u;
      }
      if (a === $S)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, uc(e, li, Yu), ui(e, sr()), null;
    }
    function i_(e, t) {
      t !== se && (lf(e, Dt(t, ct)), ui(e, sr()), (Gt & (ra | Yi)) === Mr && (Wp(), zo()));
    }
    function ZS(e, t) {
      var a = Gt;
      Gt |= sx;
      try {
        return e(t);
      } finally {
        Gt = a, Gt === Mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Sl.isBatchingLegacy && (Wp(), vE());
      }
    }
    function l_(e, t, a, i, u) {
      var s = ti(), f = na.transition;
      try {
        return na.transition = null, er(Kr), e(t, a, i, u);
      } finally {
        er(s), na.transition = f, Gt === Mr && Wp();
      }
    }
    function Ku(e) {
      $o !== null && $o.tag === No && (Gt & (ra | Yi)) === Mr && Wu();
      var t = Gt;
      Gt |= sx;
      var a = na.transition, i = ti();
      try {
        return na.transition = null, er(Kr), e ? e() : void 0;
      } finally {
        er(i), na.transition = a, Gt = t, (Gt & (ra | Yi)) === Mr && zo();
      }
    }
    function gx() {
      return (Gt & (ra | Yi)) !== Mr;
    }
    function Wm(e, t) {
      Ea(IS, nu, e), nu = Dt(nu, t);
    }
    function JS(e) {
      nu = IS.current, Sa(IS, e);
    }
    function lc(e, t) {
      e.finishedWork = null, e.finishedLanes = se;
      var a = e.timeoutHandle;
      if (a !== Gy && (e.timeoutHandle = Gy, NR(a)), Wn !== null)
        for (var i = Wn.return; i !== null; ) {
          var u = i.alternate;
          WC(u, i), i = i.return;
        }
      Ua = e;
      var s = oc(e.current, null);
      return Wn = s, Lr = nu = t, Nr = Iu, Ip = null, Pm = se, Yp = se, Vm = se, Kp = null, li = null, tT(), fl.discardPendingWarnings(), s;
    }
    function Sx(e, t) {
      do {
        var a = Wn;
        try {
          if (rm(), $E(), xn(), BS.current = null, a === null || a.return === null) {
            Nr = Bp, Ip = t, Wn = null;
            return;
          }
          if (Qe && a.mode & an && Lm(a, !0), Xe)
            if (La(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              zi(a, i, Lr);
            } else
              vs(a, t, Lr);
          OT(e, a.return, a, t, Lr), wx(a);
        } catch (u) {
          t = u, Wn === a && a !== null ? (a = a.return, Wn = a) : a = Wn;
          continue;
        }
        return;
      } while (!0);
    }
    function Ex() {
      var e = VS.current;
      return VS.current = _m, e === null ? _m : e;
    }
    function Cx(e) {
      VS.current = e;
    }
    function u_() {
      YS = sr();
    }
    function qp(e) {
      Pm = Dt(e, Pm);
    }
    function o_() {
      Nr === Iu && (Nr = Hm);
    }
    function e0() {
      (Nr === Iu || Nr === Hm || Nr === ac) && (Nr = $p), Ua !== null && (Ts(Pm) || Ts(Yp)) && Yo(Ua, Lr);
    }
    function s_(e) {
      Nr !== $p && (Nr = ac), Kp === null ? Kp = [e] : Kp.push(e);
    }
    function c_() {
      return Nr === Iu;
    }
    function Qm(e, t) {
      var a = Gt;
      Gt |= ra;
      var i = Ex();
      if (Ua !== e || Lr !== t) {
        if (pa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, Lr), u.clear()), eh(e, t);
        }
        Yu = Bd(), lc(e, t);
      }
      xu(t);
      do
        try {
          f_();
          break;
        } catch (s) {
          Sx(e, s);
        }
      while (!0);
      if (rm(), Gt = a, Cx(i), Wn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Uc(), Ua = null, Lr = se, Nr;
    }
    function f_() {
      for (; Wn !== null; )
        xx(Wn);
    }
    function d_(e, t) {
      var a = Gt;
      Gt |= ra;
      var i = Ex();
      if (Ua !== e || Lr !== t) {
        if (pa) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, Lr), u.clear()), eh(e, t);
        }
        Yu = Bd(), Wp(), lc(e, t);
      }
      xu(t);
      do
        try {
          p_();
          break;
        } catch (s) {
          Sx(e, s);
        }
      while (!0);
      return rm(), Cx(i), Gt = a, Wn !== null ? (Yv(), Iu) : (Uc(), Ua = null, Lr = se, Nr);
    }
    function p_() {
      for (; Wn !== null && !Cd(); )
        xx(Wn);
    }
    function xx(e) {
      var t = e.alternate;
      dn(e);
      var a;
      (e.mode & an) !== nt ? (rS(e), a = t0(t, e, nu), Lm(e, !0)) : a = t0(t, e, nu), xn(), e.memoizedProps = e.pendingProps, a === null ? wx(e) : Wn = a, BS.current = null;
    }
    function wx(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & fs) === tt) {
          dn(t);
          var u = void 0;
          if ((t.mode & an) === nt ? u = KC(a, t, nu) : (rS(t), u = KC(a, t, nu), Lm(t, !1)), xn(), u !== null) {
            Wn = u;
            return;
          }
        } else {
          var s = ob(a, t);
          if (s !== null) {
            s.flags &= Hv, Wn = s;
            return;
          }
          if ((t.mode & an) !== nt) {
            Lm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= fs, i.subtreeFlags = tt, i.deletions = null;
          else {
            Nr = $S, Wn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Wn = v;
          return;
        }
        t = i, Wn = t;
      } while (t !== null);
      Nr === Iu && (Nr = cx);
    }
    function uc(e, t, a) {
      var i = ti(), u = na.transition;
      try {
        na.transition = null, er(Kr), v_(e, t, a, i);
      } finally {
        na.transition = u, er(i);
      }
      return null;
    }
    function v_(e, t, a, i) {
      do
        Wu();
      while ($o !== null);
      if (T_(), (Gt & (ra | Yi)) !== Mr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (_d(s), u === null)
        return kd(), null;
      if (s === se && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = se, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = en;
      var f = Dt(u.lanes, u.childLanes);
      Pd(e, f), e === Ua && (Ua = null, Wn = null, Lr = se), ((u.subtreeFlags & tl) !== tt || (u.flags & tl) !== tt) && (ic || (ic = !0, QS = a, a0(nl, function() {
        return Wu(), null;
      })));
      var p = (u.subtreeFlags & (Nl | zl | Al | tl)) !== tt, v = (u.flags & (Nl | zl | Al | tl)) !== tt;
      if (p || v) {
        var S = na.transition;
        na.transition = null;
        var x = ti();
        er(Kr);
        var O = Gt;
        Gt |= Yi, BS.current = null, pb(e, u), vC(), _b(e, u, s), bR(e.containerInfo), e.current = u, hs(s), kb(u, e, s), ms(), xd(), Gt = O, er(x), na.transition = S;
      } else
        e.current = u, vC();
      var k = ic;
      if (ic ? (ic = !1, $o = e, Qp = s) : (Wf = 0, Im = null), f = e.pendingLanes, f === se && (Kf = null), k || _x(e.current, !1), Rd(u.stateNode, i), pa && e.memoizedUpdaters.clear(), Wb(), ui(e, sr()), t !== null)
        for (var V = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var ee = t[Y], Le = ee.stack, at = ee.digest;
          V(ee.value, {
            componentStack: Le,
            digest: at
          });
        }
      if (Bm) {
        Bm = !1;
        var qe = KS;
        throw KS = null, qe;
      }
      return ha(Qp, ct) && e.tag !== No && Wu(), f = e.pendingLanes, ha(f, ct) ? (ST(), e === GS ? Gp++ : (Gp = 0, GS = e)) : Gp = 0, zo(), kd(), null;
    }
    function Wu() {
      if ($o !== null) {
        var e = rh(Qp), t = Ms(Ja, e), a = na.transition, i = ti();
        try {
          return na.transition = null, er(t), m_();
        } finally {
          er(i), na.transition = a;
        }
      }
      return !1;
    }
    function h_(e) {
      WS.push(e), ic || (ic = !0, a0(nl, function() {
        return Wu(), null;
      }));
    }
    function m_() {
      if ($o === null)
        return !1;
      var e = QS;
      QS = null;
      var t = $o, a = Qp;
      if ($o = null, Qp = se, (Gt & (ra | Yi)) !== Mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      XS = !0, $m = !1, Cu(a);
      var i = Gt;
      Gt |= Yi, Ab(t.current), Mb(t, t.current, a, e);
      {
        var u = WS;
        WS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          yb(t, f);
        }
      }
      Md(), _x(t.current, !0), Gt = i, zo(), $m ? t === Im ? Wf++ : (Wf = 0, Im = t) : Wf = 0, XS = !1, $m = !1, Td(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Rx(e) {
      return Kf !== null && Kf.has(e);
    }
    function y_(e) {
      Kf === null ? Kf = /* @__PURE__ */ new Set([e]) : Kf.add(e);
    }
    function g_(e) {
      Bm || (Bm = !0, KS = e);
    }
    var S_ = g_;
    function Tx(e, t, a) {
      var i = nc(a, t), u = xC(e, i, ct), s = Uo(e, u, ct), f = ja();
      s !== null && (Co(s, ct, f), ui(s, f));
    }
    function wn(e, t, a) {
      if (cb(a), Jp(!1), e.tag === Z) {
        Tx(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          Tx(i, e, a);
          return;
        } else if (i.tag === j) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !Rx(s)) {
            var f = nc(a, e), p = CS(i, f, ct), v = Uo(i, p, ct), S = ja();
            v !== null && (Co(v, ct, S), ui(v, S));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function E_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ja();
      af(e, a), D_(e), Ua === e && Ou(Lr, a) && (Nr === $p || Nr === Hm && Du(Lr) && sr() - YS < fx ? lc(e, se) : Vm = Dt(Vm, a)), ui(e, u);
    }
    function bx(e, t) {
      t === en && (t = e_(e));
      var a = ja(), i = ai(e, t);
      i !== null && (Co(i, t, a), ui(i, a));
    }
    function C_(e) {
      var t = e.memoizedState, a = en;
      t !== null && (a = t.retryLane), bx(e, a);
    }
    function x_(e, t) {
      var a = en, i;
      switch (e.tag) {
        case Te:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Vt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), bx(e, a);
    }
    function w_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Xb(e / 1960) * 1960;
    }
    function R_() {
      if (Gp > Zb)
        throw Gp = 0, GS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Wf > Jb && (Wf = 0, Im = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function T_() {
      fl.flushLegacyContextWarning(), fl.flushPendingUnsafeLifecycleWarnings();
    }
    function _x(e, t) {
      dn(e), Gm(e, Ll, Ib), t && Gm(e, Mi, Yb), Gm(e, Ll, Bb), t && Gm(e, Mi, $b), xn();
    }
    function Gm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== tt ? i = i.child : ((i.flags & t) !== tt && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Xm = null;
    function kx(e) {
      {
        if ((Gt & ra) !== Mr || !(e.mode & Ut))
          return;
        var t = e.tag;
        if (t !== Ee && t !== Z && t !== j && t !== re && t !== Re && t !== Je && t !== Pe)
          return;
        var a = yt(e) || "ReactComponent";
        if (Xm !== null) {
          if (Xm.has(a))
            return;
          Xm.add(a);
        } else
          Xm = /* @__PURE__ */ new Set([a]);
        var i = xr;
        try {
          dn(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? dn(e) : xn();
        }
      }
    }
    var t0;
    {
      var b_ = null;
      t0 = function(e, t, a) {
        var i = Ux(b_, t);
        try {
          return VC(e, t, a);
        } catch (s) {
          if (F1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (rm(), $E(), WC(e, t), Ux(t, i), t.mode & an && rS(t), Ml(null, VC, null, e, t, a), Ji()) {
            var u = cs();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var Dx = !1, n0;
    n0 = /* @__PURE__ */ new Set();
    function __(e) {
      if (Ri && !mT())
        switch (e.tag) {
          case re:
          case Re:
          case Pe: {
            var t = Wn && yt(Wn) || "Unknown", a = t;
            if (!n0.has(a)) {
              n0.add(a);
              var i = yt(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case j: {
            Dx || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Dx = !0);
            break;
          }
        }
    }
    function Zp(e, t) {
      if (pa) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ds(e, i, t);
        });
      }
    }
    var r0 = {};
    function a0(e, t) {
      {
        var a = Sl.current;
        return a !== null ? (a.push(t), r0) : Ed(e, t);
      }
    }
    function Ox(e) {
      if (e !== r0)
        return Vv(e);
    }
    function Mx() {
      return Sl.current !== null;
    }
    function k_(e) {
      {
        if (e.mode & Ut) {
          if (!ox())
            return;
        } else if (!Gb() || Gt !== Mr || e.tag !== re && e.tag !== Re && e.tag !== Pe)
          return;
        if (Sl.current === null) {
          var t = xr;
          try {
            dn(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, yt(e));
          } finally {
            t ? dn(e) : xn();
          }
        }
      }
    }
    function D_(e) {
      e.tag !== No && ox() && Sl.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Jp(e) {
      vx = e;
    }
    var Ki = null, Qf = null, O_ = function(e) {
      Ki = e;
    };
    function Gf(e) {
      {
        if (Ki === null)
          return e;
        var t = Ki(e);
        return t === void 0 ? e : t.current;
      }
    }
    function i0(e) {
      return Gf(e);
    }
    function l0(e) {
      {
        if (Ki === null)
          return e;
        var t = Ki(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Gf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: L,
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
    function Lx(e, t) {
      {
        if (Ki === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case j: {
            typeof i == "function" && (u = !0);
            break;
          }
          case re: {
            (typeof i == "function" || s === Ge) && (u = !0);
            break;
          }
          case Re: {
            (s === L || s === Ge) && (u = !0);
            break;
          }
          case Je:
          case Pe: {
            (s === Ue || s === Ge) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Ki(a);
          if (f !== void 0 && f === Ki(i))
            return !0;
        }
        return !1;
      }
    }
    function Nx(e) {
      {
        if (Ki === null || typeof WeakSet != "function")
          return;
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var M_ = function(e, t) {
      {
        if (Ki === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Wu(), Ku(function() {
          u0(e.current, i, a);
        });
      }
    }, L_ = function(e, t) {
      {
        if (e.context !== Ei)
          return;
        Wu(), Ku(function() {
          ev(t, e, null, null);
        });
      }
    };
    function u0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case re:
          case Pe:
          case j:
            v = p;
            break;
          case Re:
            v = p.render;
            break;
        }
        if (Ki === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var S = !1, x = !1;
        if (v !== null) {
          var O = Ki(v);
          O !== void 0 && (a.has(O) ? x = !0 : t.has(O) && (f === j ? x = !0 : S = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || S) {
          var k = ai(e, ct);
          k !== null && zr(k, e, ct, gn);
        }
        u !== null && !x && u0(u, t, a), s !== null && u0(s, t, a);
      }
    }
    var N_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return o0(e.current, i, a), a;
      }
    };
    function o0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case re:
          case Pe:
          case j:
            p = f;
            break;
          case Re:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? z_(e, a) : i !== null && o0(i, t, a), u !== null && o0(u, t, a);
      }
    }
    function z_(e, t) {
      {
        var a = A_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case B:
              t.add(i.stateNode);
              return;
            case X:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function A_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === B)
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
    var s0;
    {
      s0 = !1;
      try {
        var zx = Object.preventExtensions({});
      } catch {
        s0 = !0;
      }
    }
    function U_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = tt, this.subtreeFlags = tt, this.deletions = null, this.lanes = se, this.childLanes = se, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !s0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ci = function(e, t, a, i) {
      return new U_(e, t, a, i);
    };
    function c0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function j_(e) {
      return typeof e == "function" && !c0(e) && e.defaultProps === void 0;
    }
    function F_(e) {
      if (typeof e == "function")
        return c0(e) ? j : re;
      if (e != null) {
        var t = e.$$typeof;
        if (t === L)
          return Re;
        if (t === Ue)
          return Je;
      }
      return Ee;
    }
    function oc(e, t) {
      var a = e.alternate;
      a === null ? (a = Ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = tt, a.subtreeFlags = tt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & qn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ee:
        case re:
        case Pe:
          a.type = Gf(e.type);
          break;
        case j:
          a.type = i0(e.type);
          break;
        case Re:
          a.type = l0(e.type);
          break;
      }
      return a;
    }
    function H_(e, t) {
      e.flags &= qn | Mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = se, e.lanes = t, e.child = null, e.subtreeFlags = tt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = tt, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function P_(e, t, a) {
      var i;
      return e === Wh ? (i = Ut, t === !0 && (i |= hn, i |= ln)) : i = nt, pa && (i |= an), Ci(Z, null, null, i);
    }
    function f0(e, t, a, i, u, s) {
      var f = Ee, p = e;
      if (typeof e == "function")
        c0(e) ? (f = j, p = i0(p)) : p = Gf(p);
      else if (typeof e == "string")
        f = B;
      else
        e: switch (e) {
          case $a:
            return Ko(a.children, u, s, t);
          case Ta:
            f = q, u |= hn, (u & Ut) !== nt && (u |= ln);
            break;
          case ba:
            return V_(a, u, s, t);
          case ne:
            return B_(a, u, s, t);
          case le:
            return $_(a, u, s, t);
          case At:
            return Ax(a, u, s, t);
          case Ft:
          case We:
          case nn:
          case lr:
          case et:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case _a:
                  f = he;
                  break e;
                case g:
                  f = ve;
                  break e;
                case L:
                  f = Re, p = l0(p);
                  break e;
                case Ue:
                  f = Je;
                  break e;
                case Ge:
                  f = mt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var S = i ? yt(i) : null;
              S && (v += `

Check the render method of \`` + S + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var x = Ci(f, a, t, u);
      return x.elementType = e, x.type = p, x.lanes = s, x._debugOwner = i, x;
    }
    function d0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = f0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Ko(e, t, a, i) {
      var u = Ci(J, e, i, t);
      return u.lanes = a, u;
    }
    function V_(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ci(Se, e, i, t | an);
      return u.elementType = ba, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function B_(e, t, a, i) {
      var u = Ci(Te, e, i, t);
      return u.elementType = ne, u.lanes = a, u;
    }
    function $_(e, t, a, i) {
      var u = Ci(Vt, e, i, t);
      return u.elementType = le, u.lanes = a, u;
    }
    function Ax(e, t, a, i) {
      var u = Ci(ue, e, i, t);
      u.elementType = At, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function p0(e, t, a) {
      var i = Ci(Ce, e, null, t);
      return i.lanes = a, i;
    }
    function I_() {
      var e = Ci(B, null, null, nt);
      return e.elementType = "DELETED", e;
    }
    function Y_(e) {
      var t = Ci(lt, null, null, nt);
      return t.stateNode = e, t;
    }
    function v0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Ci(X, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function Ux(e, t) {
      return e === null && (e = Ci(Ee, null, null, nt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function K_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Gy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = en, this.eventTimes = ks(se), this.expirationTimes = ks(gn), this.pendingLanes = se, this.suspendedLanes = se, this.pingedLanes = se, this.expiredLanes = se, this.mutableReadLanes = se, this.finishedLanes = se, this.entangledLanes = se, this.entanglements = ks(se), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < wu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Wh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case No:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function jx(e, t, a, i, u, s, f, p, v, S) {
      var x = new K_(e, t, a, p, v), O = P_(t, s);
      x.current = O, O.stateNode = x;
      {
        var k = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        O.memoizedState = k;
      }
      return _g(O), x;
    }
    var h0 = "18.3.1";
    function W_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Sr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Vn,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var m0, y0;
    m0 = !1, y0 = {};
    function Fx(e) {
      if (!e)
        return Ei;
      var t = ho(e), a = D1(t);
      if (t.tag === j) {
        var i = t.type;
        if (Gl(i))
          return fE(t, i, a);
      }
      return a;
    }
    function Q_(e, t) {
      {
        var a = ho(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = fa(a);
        if (u === null)
          return null;
        if (u.mode & hn) {
          var s = yt(a) || "Component";
          if (!y0[s]) {
            y0[s] = !0;
            var f = xr;
            try {
              dn(u), a.mode & hn ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? dn(f) : xn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function Hx(e, t, a, i, u, s, f, p) {
      var v = !1, S = null;
      return jx(e, t, v, S, a, i, u, s, f);
    }
    function Px(e, t, a, i, u, s, f, p, v, S) {
      var x = !0, O = jx(a, i, x, e, u, s, f, p, v);
      O.context = Fx(null);
      var k = O.current, V = ja(), Y = Io(k), ee = Bu(V, Y);
      return ee.callback = t ?? null, Uo(k, ee, Y), t_(O, Y, V), O;
    }
    function ev(e, t, a, i) {
      wd(t, e);
      var u = t.current, s = ja(), f = Io(u);
      Nn(f);
      var p = Fx(a);
      t.context === null ? t.context = p : t.pendingContext = p, Ri && xr !== null && !m0 && (m0 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, yt(xr) || "Unknown"));
      var v = Bu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var S = Uo(u, v, f);
      return S !== null && (zr(S, u, f, s), om(S, u, f)), f;
    }
    function qm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case B:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function G_(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (uf(t)) {
            var a = Wv(t);
            i_(t, a);
          }
          break;
        }
        case Te: {
          Ku(function() {
            var u = ai(e, ct);
            if (u !== null) {
              var s = ja();
              zr(u, e, ct, s);
            }
          });
          var i = ct;
          g0(e, i);
          break;
        }
      }
    }
    function Vx(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Zv(a.retryLane, t));
    }
    function g0(e, t) {
      Vx(e, t);
      var a = e.alternate;
      a && Vx(a, t);
    }
    function X_(e) {
      if (e.tag === Te) {
        var t = xs, a = ai(e, t);
        if (a !== null) {
          var i = ja();
          zr(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function q_(e) {
      if (e.tag === Te) {
        var t = Io(e), a = ai(e, t);
        if (a !== null) {
          var i = ja();
          zr(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function Bx(e) {
      var t = _n(e);
      return t === null ? null : t.stateNode;
    }
    var $x = function(e) {
      return null;
    };
    function Z_(e) {
      return $x(e);
    }
    var Ix = function(e) {
      return !1;
    };
    function J_(e) {
      return Ix(e);
    }
    var Yx = null, Kx = null, Wx = null, Qx = null, Gx = null, Xx = null, qx = null, Zx = null, Jx = null;
    {
      var ew = function(e, t, a) {
        var i = t[a], u = Nt(e) ? e.slice() : bt({}, e);
        return a + 1 === t.length ? (Nt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = ew(e[i], t, a + 1), u);
      }, tw = function(e, t) {
        return ew(e, t, 0);
      }, nw = function(e, t, a, i) {
        var u = t[i], s = Nt(e) ? e.slice() : bt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Nt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = nw(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, rw = function(e, t, a) {
        if (t.length !== a.length) {
          K("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              K("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return nw(e, t, a, 0);
      }, aw = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Nt(e) ? e.slice() : bt({}, e);
        return s[u] = aw(e[u], t, a + 1, i), s;
      }, iw = function(e, t, a) {
        return aw(e, t, 0, a);
      }, S0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Yx = function(e, t, a, i) {
        var u = S0(e, t);
        if (u !== null) {
          var s = iw(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
          var f = ai(e, ct);
          f !== null && zr(f, e, ct, gn);
        }
      }, Kx = function(e, t, a) {
        var i = S0(e, t);
        if (i !== null) {
          var u = tw(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = bt({}, e.memoizedProps);
          var s = ai(e, ct);
          s !== null && zr(s, e, ct, gn);
        }
      }, Wx = function(e, t, a, i) {
        var u = S0(e, t);
        if (u !== null) {
          var s = rw(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = bt({}, e.memoizedProps);
          var f = ai(e, ct);
          f !== null && zr(f, e, ct, gn);
        }
      }, Qx = function(e, t, a) {
        e.pendingProps = iw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ai(e, ct);
        i !== null && zr(i, e, ct, gn);
      }, Gx = function(e, t) {
        e.pendingProps = tw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ai(e, ct);
        a !== null && zr(a, e, ct, gn);
      }, Xx = function(e, t, a) {
        e.pendingProps = rw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ai(e, ct);
        i !== null && zr(i, e, ct, gn);
      }, qx = function(e) {
        var t = ai(e, ct);
        t !== null && zr(t, e, ct, gn);
      }, Zx = function(e) {
        $x = e;
      }, Jx = function(e) {
        Ix = e;
      };
    }
    function ek(e) {
      var t = fa(e);
      return t === null ? null : t.stateNode;
    }
    function tk(e) {
      return null;
    }
    function nk() {
      return xr;
    }
    function rk(e) {
      var t = e.findFiberByHostInstance, a = C.ReactCurrentDispatcher;
      return go({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Yx,
        overrideHookStateDeletePath: Kx,
        overrideHookStateRenamePath: Wx,
        overrideProps: Qx,
        overridePropsDeletePath: Gx,
        overridePropsRenamePath: Xx,
        setErrorHandler: Zx,
        setSuspenseHandler: Jx,
        scheduleUpdate: qx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ek,
        findFiberByHostInstance: t || tk,
        // React Refresh
        findHostInstancesForRefresh: N_,
        scheduleRefresh: M_,
        scheduleRoot: L_,
        setRefreshHandler: O_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: nk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: h0
      });
    }
    var lw = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function E0(e) {
      this._internalRoot = e;
    }
    Zm.prototype.render = E0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? y("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Jm(arguments[1]) ? y("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && y("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Gn) {
          var i = Bx(t.current);
          i && i.parentNode !== a && y("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      ev(e, t, null, null);
    }, Zm.prototype.unmount = E0.prototype.unmount = function() {
      typeof arguments[0] == "function" && y("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        gx() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ku(function() {
          ev(null, e, null, null);
        }), lE(t);
      }
    };
    function ak(e, t) {
      if (!Jm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      uw(e);
      var a = !1, i = !1, u = "", s = lw;
      t != null && (t.hydrate ? K("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ir && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = Hx(e, Wh, null, a, i, u, s);
      Ph(f.current, e);
      var p = e.nodeType === Gn ? e.parentNode : e;
      return lp(p), new E0(f);
    }
    function Zm(e) {
      this._internalRoot = e;
    }
    function ik(e) {
      e && oh(e);
    }
    Zm.prototype.unstable_scheduleHydration = ik;
    function lk(e, t, a) {
      if (!Jm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      uw(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = lw;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var S = Px(t, null, e, Wh, i, s, f, p, v);
      if (Ph(S.current, e), lp(e), u)
        for (var x = 0; x < u.length; x++) {
          var O = u[x];
          cT(S, O);
        }
      return new Zm(S);
    }
    function Jm(e) {
      return !!(e && (e.nodeType === oa || e.nodeType === Zi || e.nodeType === od));
    }
    function tv(e) {
      return !!(e && (e.nodeType === oa || e.nodeType === Zi || e.nodeType === od || e.nodeType === Gn && e.nodeValue === " react-mount-point-unstable "));
    }
    function uw(e) {
      e.nodeType === oa && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), yp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var uk = C.ReactCurrentOwner, ow;
    ow = function(e) {
      if (e._reactRootContainer && e.nodeType !== Gn) {
        var t = Bx(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = C0(e), u = !!(i && Mo(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === oa && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function C0(e) {
      return e ? e.nodeType === Zi ? e.documentElement : e.firstChild : null;
    }
    function sw() {
    }
    function ok(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var k = qm(f);
            s.call(k);
          };
        }
        var f = Px(
          t,
          i,
          e,
          No,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sw
        );
        e._reactRootContainer = f, Ph(f.current, e);
        var p = e.nodeType === Gn ? e.parentNode : e;
        return lp(p), Ku(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var S = i;
          i = function() {
            var k = qm(x);
            S.call(k);
          };
        }
        var x = Hx(
          e,
          No,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sw
        );
        e._reactRootContainer = x, Ph(x.current, e);
        var O = e.nodeType === Gn ? e.parentNode : e;
        return lp(O), Ku(function() {
          ev(t, x, a, i);
        }), x;
      }
    }
    function sk(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ey(e, t, a, i, u) {
      ow(a), sk(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = ok(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = qm(f);
            p.call(v);
          };
        }
        ev(t, f, e, u);
      }
      return qm(f);
    }
    var cw = !1;
    function ck(e) {
      {
        cw || (cw = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = uk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === oa ? e : Q_(e, "findDOMNode");
    }
    function fk(e, t, a) {
      if (y("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = yp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ey(null, e, t, !0, a);
    }
    function dk(e, t, a) {
      if (y("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = yp(t) && t._reactRootContainer === void 0;
        i && y("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ey(null, e, t, !1, a);
    }
    function pk(e, t, a, i) {
      if (y("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !tv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !gy(e))
        throw new Error("parentComponent must be a valid React Component");
      return ey(e, t, a, !1, i);
    }
    var fw = !1;
    function vk(e) {
      if (fw || (fw = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !tv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = yp(e) && e._reactRootContainer === void 0;
        t && y("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = C0(e), i = a && !Mo(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ku(function() {
          ey(null, null, e, !1, function() {
            e._reactRootContainer = null, lE(e);
          });
        }), !0;
      } else {
        {
          var u = C0(e), s = !!(u && Mo(u)), f = e.nodeType === oa && tv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Hr(G_), xo(X_), ah(q_), Ns(ti), $d(th), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), wc(mR), yy(ZS, l_, Ku);
    function hk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Jm(t))
        throw new Error("Target container is not a DOM element.");
      return W_(e, t, null, a);
    }
    function mk(e, t, a, i) {
      return pk(e, t, a, i);
    }
    var x0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Mo, bf, Vh, co, Rc, ZS]
    };
    function yk(e, t) {
      return x0.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ak(e, t);
    }
    function gk(e, t, a) {
      return x0.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lk(e, t, a);
    }
    function Sk(e) {
      return gx() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ku(e);
    }
    var Ek = rk({
      findFiberByHostInstance: Ws,
      bundleType: 1,
      version: h0,
      rendererPackageName: "react-dom"
    });
    if (!Ek && An && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var dw = window.location.protocol;
      /^(https?|file):$/.test(dw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (dw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x0, si.createPortal = hk, si.createRoot = yk, si.findDOMNode = ck, si.flushSync = Sk, si.hydrate = fk, si.hydrateRoot = gk, si.render = dk, si.unmountComponentAtNode = vk, si.unstable_batchedUpdates = ZS, si.unstable_renderSubtreeIntoContainer = mk, si.version = h0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), si;
}
function Dw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dw);
    } catch (E) {
      console.error(E);
    }
  }
}
process.env.NODE_ENV === "production" ? (Dw(), _0.exports = Mk()) : _0.exports = Lk();
var Nk = _0.exports, k0, ny = Nk;
if (process.env.NODE_ENV === "production")
  k0 = ny.createRoot, ny.hydrateRoot;
else {
  var xw = ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  k0 = function(E, w) {
    xw.usingClientEntryPoint = !0;
    try {
      return ny.createRoot(E, w);
    } finally {
      xw.usingClientEntryPoint = !1;
    }
  };
}
function zk(E, w) {
  var C, P = 1;
  E == null && (E = 0), w == null && (w = 0);
  function H() {
    var K, y = C.length, xe, re = 0, j = 0;
    for (K = 0; K < y; ++K)
      xe = C[K], re += xe.x, j += xe.y;
    for (re = (re / y - E) * P, j = (j / y - w) * P, K = 0; K < y; ++K)
      xe = C[K], xe.x -= re, xe.y -= j;
  }
  return H.initialize = function(K) {
    C = K;
  }, H.x = function(K) {
    return arguments.length ? (E = +K, H) : E;
  }, H.y = function(K) {
    return arguments.length ? (w = +K, H) : w;
  }, H.strength = function(K) {
    return arguments.length ? (P = +K, H) : P;
  }, H;
}
function Ak(E) {
  const w = +this._x.call(null, E), C = +this._y.call(null, E);
  return Ow(this.cover(w, C), w, C, E);
}
function Ow(E, w, C, P) {
  if (isNaN(w) || isNaN(C)) return E;
  var H, K = E._root, y = { data: P }, xe = E._x0, re = E._y0, j = E._x1, Ee = E._y1, Z, X, B, Ce, J, q, ve, he;
  if (!K) return E._root = y, E;
  for (; K.length; )
    if ((J = w >= (Z = (xe + j) / 2)) ? xe = Z : j = Z, (q = C >= (X = (re + Ee) / 2)) ? re = X : Ee = X, H = K, !(K = K[ve = q << 1 | J])) return H[ve] = y, E;
  if (B = +E._x.call(null, K.data), Ce = +E._y.call(null, K.data), w === B && C === Ce) return y.next = K, H ? H[ve] = y : E._root = y, E;
  do
    H = H ? H[ve] = new Array(4) : E._root = new Array(4), (J = w >= (Z = (xe + j) / 2)) ? xe = Z : j = Z, (q = C >= (X = (re + Ee) / 2)) ? re = X : Ee = X;
  while ((ve = q << 1 | J) === (he = (Ce >= X) << 1 | B >= Z));
  return H[he] = K, H[ve] = y, E;
}
function Uk(E) {
  var w, C, P = E.length, H, K, y = new Array(P), xe = new Array(P), re = 1 / 0, j = 1 / 0, Ee = -1 / 0, Z = -1 / 0;
  for (C = 0; C < P; ++C)
    isNaN(H = +this._x.call(null, w = E[C])) || isNaN(K = +this._y.call(null, w)) || (y[C] = H, xe[C] = K, H < re && (re = H), H > Ee && (Ee = H), K < j && (j = K), K > Z && (Z = K));
  if (re > Ee || j > Z) return this;
  for (this.cover(re, j).cover(Ee, Z), C = 0; C < P; ++C)
    Ow(this, y[C], xe[C], E[C]);
  return this;
}
function jk(E, w) {
  if (isNaN(E = +E) || isNaN(w = +w)) return this;
  var C = this._x0, P = this._y0, H = this._x1, K = this._y1;
  if (isNaN(C))
    H = (C = Math.floor(E)) + 1, K = (P = Math.floor(w)) + 1;
  else {
    for (var y = H - C || 1, xe = this._root, re, j; C > E || E >= H || P > w || w >= K; )
      switch (j = (w < P) << 1 | E < C, re = new Array(4), re[j] = xe, xe = re, y *= 2, j) {
        case 0:
          H = C + y, K = P + y;
          break;
        case 1:
          C = H - y, K = P + y;
          break;
        case 2:
          H = C + y, P = K - y;
          break;
        case 3:
          C = H - y, P = K - y;
          break;
      }
    this._root && this._root.length && (this._root = xe);
  }
  return this._x0 = C, this._y0 = P, this._x1 = H, this._y1 = K, this;
}
function Fk() {
  var E = [];
  return this.visit(function(w) {
    if (!w.length) do
      E.push(w.data);
    while (w = w.next);
  }), E;
}
function Hk(E) {
  return arguments.length ? this.cover(+E[0][0], +E[0][1]).cover(+E[1][0], +E[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function Pa(E, w, C, P, H) {
  this.node = E, this.x0 = w, this.y0 = C, this.x1 = P, this.y1 = H;
}
function Pk(E, w, C) {
  var P, H = this._x0, K = this._y0, y, xe, re, j, Ee = this._x1, Z = this._y1, X = [], B = this._root, Ce, J;
  for (B && X.push(new Pa(B, H, K, Ee, Z)), C == null ? C = 1 / 0 : (H = E - C, K = w - C, Ee = E + C, Z = w + C, C *= C); Ce = X.pop(); )
    if (!(!(B = Ce.node) || (y = Ce.x0) > Ee || (xe = Ce.y0) > Z || (re = Ce.x1) < H || (j = Ce.y1) < K))
      if (B.length) {
        var q = (y + re) / 2, ve = (xe + j) / 2;
        X.push(
          new Pa(B[3], q, ve, re, j),
          new Pa(B[2], y, ve, q, j),
          new Pa(B[1], q, xe, re, ve),
          new Pa(B[0], y, xe, q, ve)
        ), (J = (w >= ve) << 1 | E >= q) && (Ce = X[X.length - 1], X[X.length - 1] = X[X.length - 1 - J], X[X.length - 1 - J] = Ce);
      } else {
        var he = E - +this._x.call(null, B.data), Re = w - +this._y.call(null, B.data), Se = he * he + Re * Re;
        if (Se < C) {
          var Te = Math.sqrt(C = Se);
          H = E - Te, K = w - Te, Ee = E + Te, Z = w + Te, P = B.data;
        }
      }
  return P;
}
function Vk(E) {
  if (isNaN(Ee = +this._x.call(null, E)) || isNaN(Z = +this._y.call(null, E))) return this;
  var w, C = this._root, P, H, K, y = this._x0, xe = this._y0, re = this._x1, j = this._y1, Ee, Z, X, B, Ce, J, q, ve;
  if (!C) return this;
  if (C.length) for (; ; ) {
    if ((Ce = Ee >= (X = (y + re) / 2)) ? y = X : re = X, (J = Z >= (B = (xe + j) / 2)) ? xe = B : j = B, w = C, !(C = C[q = J << 1 | Ce])) return this;
    if (!C.length) break;
    (w[q + 1 & 3] || w[q + 2 & 3] || w[q + 3 & 3]) && (P = w, ve = q);
  }
  for (; C.data !== E; ) if (H = C, !(C = C.next)) return this;
  return (K = C.next) && delete C.next, H ? (K ? H.next = K : delete H.next, this) : w ? (K ? w[q] = K : delete w[q], (C = w[0] || w[1] || w[2] || w[3]) && C === (w[3] || w[2] || w[1] || w[0]) && !C.length && (P ? P[ve] = C : this._root = C), this) : (this._root = K, this);
}
function Bk(E) {
  for (var w = 0, C = E.length; w < C; ++w) this.remove(E[w]);
  return this;
}
function $k() {
  return this._root;
}
function Ik() {
  var E = 0;
  return this.visit(function(w) {
    if (!w.length) do
      ++E;
    while (w = w.next);
  }), E;
}
function Yk(E) {
  var w = [], C, P = this._root, H, K, y, xe, re;
  for (P && w.push(new Pa(P, this._x0, this._y0, this._x1, this._y1)); C = w.pop(); )
    if (!E(P = C.node, K = C.x0, y = C.y0, xe = C.x1, re = C.y1) && P.length) {
      var j = (K + xe) / 2, Ee = (y + re) / 2;
      (H = P[3]) && w.push(new Pa(H, j, Ee, xe, re)), (H = P[2]) && w.push(new Pa(H, K, Ee, j, re)), (H = P[1]) && w.push(new Pa(H, j, y, xe, Ee)), (H = P[0]) && w.push(new Pa(H, K, y, j, Ee));
    }
  return this;
}
function Kk(E) {
  var w = [], C = [], P;
  for (this._root && w.push(new Pa(this._root, this._x0, this._y0, this._x1, this._y1)); P = w.pop(); ) {
    var H = P.node;
    if (H.length) {
      var K, y = P.x0, xe = P.y0, re = P.x1, j = P.y1, Ee = (y + re) / 2, Z = (xe + j) / 2;
      (K = H[0]) && w.push(new Pa(K, y, xe, Ee, Z)), (K = H[1]) && w.push(new Pa(K, Ee, xe, re, Z)), (K = H[2]) && w.push(new Pa(K, y, Z, Ee, j)), (K = H[3]) && w.push(new Pa(K, Ee, Z, re, j));
    }
    C.push(P);
  }
  for (; P = C.pop(); )
    E(P.node, P.x0, P.y0, P.x1, P.y1);
  return this;
}
function Wk(E) {
  return E[0];
}
function Qk(E) {
  return arguments.length ? (this._x = E, this) : this._x;
}
function Gk(E) {
  return E[1];
}
function Xk(E) {
  return arguments.length ? (this._y = E, this) : this._y;
}
function M0(E, w, C) {
  var P = new L0(w ?? Wk, C ?? Gk, NaN, NaN, NaN, NaN);
  return E == null ? P : P.addAll(E);
}
function L0(E, w, C, P, H, K) {
  this._x = E, this._y = w, this._x0 = C, this._y0 = P, this._x1 = H, this._y1 = K, this._root = void 0;
}
function ww(E) {
  for (var w = { data: E.data }, C = w; E = E.next; ) C = C.next = { data: E.data };
  return w;
}
var Va = M0.prototype = L0.prototype;
Va.copy = function() {
  var E = new L0(this._x, this._y, this._x0, this._y0, this._x1, this._y1), w = this._root, C, P;
  if (!w) return E;
  if (!w.length) return E._root = ww(w), E;
  for (C = [{ source: w, target: E._root = new Array(4) }]; w = C.pop(); )
    for (var H = 0; H < 4; ++H)
      (P = w.source[H]) && (P.length ? C.push({ source: P, target: w.target[H] = new Array(4) }) : w.target[H] = ww(P));
  return E;
};
Va.add = Ak;
Va.addAll = Uk;
Va.cover = jk;
Va.data = Fk;
Va.extent = Hk;
Va.find = Pk;
Va.remove = Vk;
Va.removeAll = Bk;
Va.root = $k;
Va.size = Ik;
Va.visit = Yk;
Va.visitAfter = Kk;
Va.x = Qk;
Va.y = Xk;
function sc(E) {
  return function() {
    return E;
  };
}
function Wo(E) {
  return (E() - 0.5) * 1e-6;
}
function qk(E) {
  return E.x + E.vx;
}
function Zk(E) {
  return E.y + E.vy;
}
function Jk(E) {
  var w, C, P, H = 1, K = 1;
  typeof E != "function" && (E = sc(E == null ? 1 : +E));
  function y() {
    for (var j, Ee = w.length, Z, X, B, Ce, J, q, ve = 0; ve < K; ++ve)
      for (Z = M0(w, qk, Zk).visitAfter(xe), j = 0; j < Ee; ++j)
        X = w[j], J = C[X.index], q = J * J, B = X.x + X.vx, Ce = X.y + X.vy, Z.visit(he);
    function he(Re, Se, Te, Je, Pe) {
      var mt = Re.data, xt = Re.r, lt = J + xt;
      if (mt) {
        if (mt.index > X.index) {
          var Vt = B - mt.x - mt.vx, wt = Ce - mt.y - mt.vy, ue = Vt * Vt + wt * wt;
          ue < lt * lt && (Vt === 0 && (Vt = Wo(P), ue += Vt * Vt), wt === 0 && (wt = Wo(P), ue += wt * wt), ue = (lt - (ue = Math.sqrt(ue))) / ue * H, X.vx += (Vt *= ue) * (lt = (xt *= xt) / (q + xt)), X.vy += (wt *= ue) * lt, mt.vx -= Vt * (lt = 1 - lt), mt.vy -= wt * lt);
        }
        return;
      }
      return Se > B + lt || Je < B - lt || Te > Ce + lt || Pe < Ce - lt;
    }
  }
  function xe(j) {
    if (j.data) return j.r = C[j.data.index];
    for (var Ee = j.r = 0; Ee < 4; ++Ee)
      j[Ee] && j[Ee].r > j.r && (j.r = j[Ee].r);
  }
  function re() {
    if (w) {
      var j, Ee = w.length, Z;
      for (C = new Array(Ee), j = 0; j < Ee; ++j) Z = w[j], C[Z.index] = +E(Z, j, w);
    }
  }
  return y.initialize = function(j, Ee) {
    w = j, P = Ee, re();
  }, y.iterations = function(j) {
    return arguments.length ? (K = +j, y) : K;
  }, y.strength = function(j) {
    return arguments.length ? (H = +j, y) : H;
  }, y.radius = function(j) {
    return arguments.length ? (E = typeof j == "function" ? j : sc(+j), re(), y) : E;
  }, y;
}
function eD(E) {
  return E.index;
}
function Rw(E, w) {
  var C = E.get(w);
  if (!C) throw new Error("node not found: " + w);
  return C;
}
function tD(E) {
  var w = eD, C = Z, P, H = sc(30), K, y, xe, re, j, Ee = 1;
  E == null && (E = []);
  function Z(q) {
    return 1 / Math.min(xe[q.source.index], xe[q.target.index]);
  }
  function X(q) {
    for (var ve = 0, he = E.length; ve < Ee; ++ve)
      for (var Re = 0, Se, Te, Je, Pe, mt, xt, lt; Re < he; ++Re)
        Se = E[Re], Te = Se.source, Je = Se.target, Pe = Je.x + Je.vx - Te.x - Te.vx || Wo(j), mt = Je.y + Je.vy - Te.y - Te.vy || Wo(j), xt = Math.sqrt(Pe * Pe + mt * mt), xt = (xt - K[Re]) / xt * q * P[Re], Pe *= xt, mt *= xt, Je.vx -= Pe * (lt = re[Re]), Je.vy -= mt * lt, Te.vx += Pe * (lt = 1 - lt), Te.vy += mt * lt;
  }
  function B() {
    if (y) {
      var q, ve = y.length, he = E.length, Re = new Map(y.map((Te, Je) => [w(Te, Je, y), Te])), Se;
      for (q = 0, xe = new Array(ve); q < he; ++q)
        Se = E[q], Se.index = q, typeof Se.source != "object" && (Se.source = Rw(Re, Se.source)), typeof Se.target != "object" && (Se.target = Rw(Re, Se.target)), xe[Se.source.index] = (xe[Se.source.index] || 0) + 1, xe[Se.target.index] = (xe[Se.target.index] || 0) + 1;
      for (q = 0, re = new Array(he); q < he; ++q)
        Se = E[q], re[q] = xe[Se.source.index] / (xe[Se.source.index] + xe[Se.target.index]);
      P = new Array(he), Ce(), K = new Array(he), J();
    }
  }
  function Ce() {
    if (y)
      for (var q = 0, ve = E.length; q < ve; ++q)
        P[q] = +C(E[q], q, E);
  }
  function J() {
    if (y)
      for (var q = 0, ve = E.length; q < ve; ++q)
        K[q] = +H(E[q], q, E);
  }
  return X.initialize = function(q, ve) {
    y = q, j = ve, B();
  }, X.links = function(q) {
    return arguments.length ? (E = q, B(), X) : E;
  }, X.id = function(q) {
    return arguments.length ? (w = q, X) : w;
  }, X.iterations = function(q) {
    return arguments.length ? (Ee = +q, X) : Ee;
  }, X.strength = function(q) {
    return arguments.length ? (C = typeof q == "function" ? q : sc(+q), Ce(), X) : C;
  }, X.distance = function(q) {
    return arguments.length ? (H = typeof q == "function" ? q : sc(+q), J(), X) : H;
  }, X;
}
var nD = { value: () => {
} };
function Mw() {
  for (var E = 0, w = arguments.length, C = {}, P; E < w; ++E) {
    if (!(P = arguments[E] + "") || P in C || /[\s.]/.test(P)) throw new Error("illegal type: " + P);
    C[P] = [];
  }
  return new ry(C);
}
function ry(E) {
  this._ = E;
}
function rD(E, w) {
  return E.trim().split(/^|\s+/).map(function(C) {
    var P = "", H = C.indexOf(".");
    if (H >= 0 && (P = C.slice(H + 1), C = C.slice(0, H)), C && !w.hasOwnProperty(C)) throw new Error("unknown type: " + C);
    return { type: C, name: P };
  });
}
ry.prototype = Mw.prototype = {
  constructor: ry,
  on: function(E, w) {
    var C = this._, P = rD(E + "", C), H, K = -1, y = P.length;
    if (arguments.length < 2) {
      for (; ++K < y; ) if ((H = (E = P[K]).type) && (H = aD(C[H], E.name))) return H;
      return;
    }
    if (w != null && typeof w != "function") throw new Error("invalid callback: " + w);
    for (; ++K < y; )
      if (H = (E = P[K]).type) C[H] = Tw(C[H], E.name, w);
      else if (w == null) for (H in C) C[H] = Tw(C[H], E.name, null);
    return this;
  },
  copy: function() {
    var E = {}, w = this._;
    for (var C in w) E[C] = w[C].slice();
    return new ry(E);
  },
  call: function(E, w) {
    if ((H = arguments.length - 2) > 0) for (var C = new Array(H), P = 0, H, K; P < H; ++P) C[P] = arguments[P + 2];
    if (!this._.hasOwnProperty(E)) throw new Error("unknown type: " + E);
    for (K = this._[E], P = 0, H = K.length; P < H; ++P) K[P].value.apply(w, C);
  },
  apply: function(E, w, C) {
    if (!this._.hasOwnProperty(E)) throw new Error("unknown type: " + E);
    for (var P = this._[E], H = 0, K = P.length; H < K; ++H) P[H].value.apply(w, C);
  }
};
function aD(E, w) {
  for (var C = 0, P = E.length, H; C < P; ++C)
    if ((H = E[C]).name === w)
      return H.value;
}
function Tw(E, w, C) {
  for (var P = 0, H = E.length; P < H; ++P)
    if (E[P].name === w) {
      E[P] = nD, E = E.slice(0, P).concat(E.slice(P + 1));
      break;
    }
  return C != null && E.push({ name: w, value: C }), E;
}
var qf = 0, uv = 0, iv = 0, Lw = 1e3, ay, ov, iy = 0, cc = 0, ly = 0, sv = typeof performance == "object" && performance.now ? performance : Date, Nw = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(E) {
  setTimeout(E, 17);
};
function zw() {
  return cc || (Nw(iD), cc = sv.now() + ly);
}
function iD() {
  cc = 0;
}
function D0() {
  this._call = this._time = this._next = null;
}
D0.prototype = Aw.prototype = {
  constructor: D0,
  restart: function(E, w, C) {
    if (typeof E != "function") throw new TypeError("callback is not a function");
    C = (C == null ? zw() : +C) + (w == null ? 0 : +w), !this._next && ov !== this && (ov ? ov._next = this : ay = this, ov = this), this._call = E, this._time = C, O0();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, O0());
  }
};
function Aw(E, w, C) {
  var P = new D0();
  return P.restart(E, w, C), P;
}
function lD() {
  zw(), ++qf;
  for (var E = ay, w; E; )
    (w = cc - E._time) >= 0 && E._call.call(void 0, w), E = E._next;
  --qf;
}
function bw() {
  cc = (iy = sv.now()) + ly, qf = uv = 0;
  try {
    lD();
  } finally {
    qf = 0, oD(), cc = 0;
  }
}
function uD() {
  var E = sv.now(), w = E - iy;
  w > Lw && (ly -= w, iy = E);
}
function oD() {
  for (var E, w = ay, C, P = 1 / 0; w; )
    w._call ? (P > w._time && (P = w._time), E = w, w = w._next) : (C = w._next, w._next = null, w = E ? E._next = C : ay = C);
  ov = E, O0(P);
}
function O0(E) {
  if (!qf) {
    uv && (uv = clearTimeout(uv));
    var w = E - cc;
    w > 24 ? (E < 1 / 0 && (uv = setTimeout(bw, E - sv.now() - ly)), iv && (iv = clearInterval(iv))) : (iv || (iy = sv.now(), iv = setInterval(uD, Lw)), qf = 1, Nw(bw));
  }
}
const sD = 1664525, cD = 1013904223, _w = 4294967296;
function fD() {
  let E = 1;
  return () => (E = (sD * E + cD) % _w) / _w;
}
function dD(E) {
  return E.x;
}
function pD(E) {
  return E.y;
}
var vD = 10, hD = Math.PI * (3 - Math.sqrt(5));
function mD(E) {
  var w, C = 1, P = 1e-3, H = 1 - Math.pow(P, 1 / 300), K = 0, y = 0.6, xe = /* @__PURE__ */ new Map(), re = Aw(Z), j = Mw("tick", "end"), Ee = fD();
  E == null && (E = []);
  function Z() {
    X(), j.call("tick", w), C < P && (re.stop(), j.call("end", w));
  }
  function X(J) {
    var q, ve = E.length, he;
    J === void 0 && (J = 1);
    for (var Re = 0; Re < J; ++Re)
      for (C += (K - C) * H, xe.forEach(function(Se) {
        Se(C);
      }), q = 0; q < ve; ++q)
        he = E[q], he.fx == null ? he.x += he.vx *= y : (he.x = he.fx, he.vx = 0), he.fy == null ? he.y += he.vy *= y : (he.y = he.fy, he.vy = 0);
    return w;
  }
  function B() {
    for (var J = 0, q = E.length, ve; J < q; ++J) {
      if (ve = E[J], ve.index = J, ve.fx != null && (ve.x = ve.fx), ve.fy != null && (ve.y = ve.fy), isNaN(ve.x) || isNaN(ve.y)) {
        var he = vD * Math.sqrt(0.5 + J), Re = J * hD;
        ve.x = he * Math.cos(Re), ve.y = he * Math.sin(Re);
      }
      (isNaN(ve.vx) || isNaN(ve.vy)) && (ve.vx = ve.vy = 0);
    }
  }
  function Ce(J) {
    return J.initialize && J.initialize(E, Ee), J;
  }
  return B(), w = {
    tick: X,
    restart: function() {
      return re.restart(Z), w;
    },
    stop: function() {
      return re.stop(), w;
    },
    nodes: function(J) {
      return arguments.length ? (E = J, B(), xe.forEach(Ce), w) : E;
    },
    alpha: function(J) {
      return arguments.length ? (C = +J, w) : C;
    },
    alphaMin: function(J) {
      return arguments.length ? (P = +J, w) : P;
    },
    alphaDecay: function(J) {
      return arguments.length ? (H = +J, w) : +H;
    },
    alphaTarget: function(J) {
      return arguments.length ? (K = +J, w) : K;
    },
    velocityDecay: function(J) {
      return arguments.length ? (y = 1 - J, w) : 1 - y;
    },
    randomSource: function(J) {
      return arguments.length ? (Ee = J, xe.forEach(Ce), w) : Ee;
    },
    force: function(J, q) {
      return arguments.length > 1 ? (q == null ? xe.delete(J) : xe.set(J, Ce(q)), w) : xe.get(J);
    },
    find: function(J, q, ve) {
      var he = 0, Re = E.length, Se, Te, Je, Pe, mt;
      for (ve == null ? ve = 1 / 0 : ve *= ve, he = 0; he < Re; ++he)
        Pe = E[he], Se = J - Pe.x, Te = q - Pe.y, Je = Se * Se + Te * Te, Je < ve && (mt = Pe, ve = Je);
      return mt;
    },
    on: function(J, q) {
      return arguments.length > 1 ? (j.on(J, q), w) : j.on(J);
    }
  };
}
function yD() {
  var E, w, C, P, H = sc(-30), K, y = 1, xe = 1 / 0, re = 0.81;
  function j(B) {
    var Ce, J = E.length, q = M0(E, dD, pD).visitAfter(Z);
    for (P = B, Ce = 0; Ce < J; ++Ce) w = E[Ce], q.visit(X);
  }
  function Ee() {
    if (E) {
      var B, Ce = E.length, J;
      for (K = new Array(Ce), B = 0; B < Ce; ++B) J = E[B], K[J.index] = +H(J, B, E);
    }
  }
  function Z(B) {
    var Ce = 0, J, q, ve = 0, he, Re, Se;
    if (B.length) {
      for (he = Re = Se = 0; Se < 4; ++Se)
        (J = B[Se]) && (q = Math.abs(J.value)) && (Ce += J.value, ve += q, he += q * J.x, Re += q * J.y);
      B.x = he / ve, B.y = Re / ve;
    } else {
      J = B, J.x = J.data.x, J.y = J.data.y;
      do
        Ce += K[J.data.index];
      while (J = J.next);
    }
    B.value = Ce;
  }
  function X(B, Ce, J, q) {
    if (!B.value) return !0;
    var ve = B.x - w.x, he = B.y - w.y, Re = q - Ce, Se = ve * ve + he * he;
    if (Re * Re / re < Se)
      return Se < xe && (ve === 0 && (ve = Wo(C), Se += ve * ve), he === 0 && (he = Wo(C), Se += he * he), Se < y && (Se = Math.sqrt(y * Se)), w.vx += ve * B.value * P / Se, w.vy += he * B.value * P / Se), !0;
    if (B.length || Se >= xe) return;
    (B.data !== w || B.next) && (ve === 0 && (ve = Wo(C), Se += ve * ve), he === 0 && (he = Wo(C), Se += he * he), Se < y && (Se = Math.sqrt(y * Se)));
    do
      B.data !== w && (Re = K[B.data.index] * P / Se, w.vx += ve * Re, w.vy += he * Re);
    while (B = B.next);
  }
  return j.initialize = function(B, Ce) {
    E = B, C = Ce, Ee();
  }, j.strength = function(B) {
    return arguments.length ? (H = typeof B == "function" ? B : sc(+B), Ee(), j) : H;
  }, j.distanceMin = function(B) {
    return arguments.length ? (y = B * B, j) : Math.sqrt(y);
  }, j.distanceMax = function(B) {
    return arguments.length ? (xe = B * B, j) : Math.sqrt(xe);
  }, j.theta = function(B) {
    return arguments.length ? (re = B * B, j) : Math.sqrt(re);
  }, j;
}
function gD() {
  var dr, Rn, Qn, Un, jn, Sr, Ra, Ar, Pn, Tn, Fn, ar, ia;
  const [E, w] = Pt.useState(""), [C, P] = Pt.useState(!1), [H, K] = Pt.useState(null), [y, xe] = Pt.useState(null), re = Pt.useRef(null), [j, Ee] = Pt.useState(() => {
    const _ = document.getElementById("network-container");
    return Number((_ == null ? void 0 : _.dataset.threshold) || 0.1);
  });
  Pt.useEffect(() => {
    const _ = document.getElementById("network-container");
    if (re.current = _, !_) return;
    const G = (z) => Array.isArray(z) ? z : Array.isArray(z == null ? void 0 : z.nodes) ? z.nodes : z && typeof z == "object" ? Object.values(z) : [];
    let oe = new AbortController();
    const De = async () => {
      try {
        const z = _.getAttribute("data-network") || "[]", Q = JSON.parse(z);
        if (console.log("RAW:", z), console.log("ORG IDS:", Q), xe(Q), !Array.isArray(Q) || !Q.length) {
          K({});
          return;
        }
        const me = {};
        await Promise.all(
          Q.map(async (Ke) => {
            const ut = `/static/network/repeat_network_db_${Ke}.json`;
            console.log("Loading:", ut);
            const gt = `${ut.includes("?") ? "&" : "?"}_=${Date.now()}`, dt = await fetch(ut + gt, {
              credentials: "same-origin",
              cache: "no-store",
              signal: oe.signal
            });
            if (!dt.ok)
              throw new Error(
                `Failed to load ${ut}: ${dt.status} ${dt.statusText}`
              );
            const Mt = await dt.json();
            me[Ke] = G(Mt);
          })
        ), console.log("LOADED:", me), K(me);
      } catch (z) {
        z.name !== "AbortError" && console.error("Error fetching network data:", z);
      }
    };
    De();
    const Oe = () => {
      oe.abort(), oe = new AbortController(), De();
    };
    return _.addEventListener("network-settings-change", Oe), () => {
      oe.abort(), _.removeEventListener("network-settings-change", Oe);
    };
  }, []);
  const Z = Pt.useMemo(() => !H || Array.isArray(H) ? [] : Object.entries(H).flatMap(
    ([_, G]) => (Array.isArray(G) ? G : []).map((oe, De) => {
      var z;
      const Oe = String(oe.key || ((z = oe.attributes) == null ? void 0 : z.label) || `node_${De}`);
      return {
        ...oe,
        key: Oe,
        _orgId: String(_),
        _globalKey: `${_}::${Oe}`
      };
    })
  ), [H]), X = Pt.useMemo(
    () => Z.filter((_) => {
      var G;
      return ((G = _.attributes) == null ? void 0 : G.node_type) === "repeat";
    }).map((_, G) => ({
      ..._,
      attributes: {
        ..._.attributes
      }
    })),
    [Z, y]
  ), B = Pt.useMemo(
    () => Z.filter((_) => {
      var G;
      return ((G = _.attributes) == null ? void 0 : G.node_type) === "protein";
    }).map((_) => ({
      ..._,
      attributes: {
        ..._.attributes
      }
    })),
    [Z]
  ), Ce = Pt.useMemo(() => {
    const _ = /* @__PURE__ */ new Map();
    return X.forEach((G) => {
      const oe = _.get(G._orgId) || [];
      oe.push(G.key), _.set(G._orgId, oe);
    }), _;
  }, [X]), J = Pt.useMemo(() => B.map((_) => {
    let G = null;
    const oe = Ce.get(_._orgId) || [];
    for (const De of oe)
      if (_.key.endsWith("_" + De)) {
        G = De;
        break;
      }
    if (!G) {
      const De = _.key.lastIndexOf("_");
      if (De > -1) {
        const Oe = _.key.slice(De + 1);
        oe.includes(Oe) && (G = Oe);
      }
    }
    return {
      ..._,
      _satelliteKey: G,
      _satelliteglobalKey: G ? `${_._orgId}::${G}` : null
    };
  }), [B, Ce]), q = (_, G) => {
    const oe = /* @__PURE__ */ new Map();
    for (const De of _) {
      const Oe = G(De), z = oe.get(Oe) || [];
      z.push(De), oe.set(Oe, z);
    }
    return oe;
  }, ve = Pt.useMemo(
    () => q(
      J.filter((_) => _._satelliteglobalKey),
      (_) => _._satelliteglobalKey
    ),
    [J]
  ), [he, Re] = Pt.useState([]);
  Pt.useEffect(() => {
    let _ = new AbortController();
    return (async () => {
      try {
        const oe = "/static/multi_org_network/repeat_network_db_all.json", De = oe.includes("?") ? "&" : "?", Oe = await fetch(`${oe}${De}_=${Date.now()}`, {
          credentials: "same-origin",
          cache: "no-store",
          signal: _.signal
        });
        if (!Oe.ok)
          throw new Error(`Failed to load ${oe}: ${Oe.status} ${Oe.statusText}`);
        const z = await Oe.json();
        Re(
          Array.isArray(z) ? z.filter(
            (Q) => Array.isArray(Q) && Q.length >= 2 && Q[0] != null && Q[1] != null
          ) : []
        );
      } catch (oe) {
        oe.name !== "AbortError" && (console.error("Error fetching clone pair data:", oe), Re([]));
      }
    })(), () => _.abort();
  }, []);
  const Se = [
    "#e15759",
    // red
    "#4e79a7",
    // blue
    "#f28e2b",
    // orange
    "#76b7b2",
    // teal
    "#59a14f",
    // green
    "#edc948",
    // yellow
    "#b07aa1",
    // purple
    "#ff9da7",
    // pink
    "#9c755f",
    // brown
    "#bab0ac"
    // grey
  ], Te = Pt.useMemo(() => {
    const _ = /* @__PURE__ */ new Map();
    return (y || []).forEach((G, oe) => {
      _.set(String(G), Se[oe % Se.length]);
    }), _;
  }, [y]), Je = Pt.useMemo(() => {
    var G, oe, De, Oe;
    const _ = /* @__PURE__ */ new Map();
    for (const z of Z) {
      const Q = z._orgId, me = ((oe = (G = z.attributes) == null ? void 0 : G.parental_organism) == null ? void 0 : oe.scientific_name) || ((Oe = (De = z.attributes) == null ? void 0 : De.parent_organism) == null ? void 0 : Oe.scientific_name) || Q;
      _.has(Q) || _.set(Q, {
        id: Q,
        name: me,
        color: Te.get(Q) || "#888"
      });
    }
    return Array.from(_.values());
  }, [Z, Te]), Pe = Pt.useMemo(() => {
    const _ = J.filter(
      (G) => {
        var oe;
        return Number(((oe = G.attributes) == null ? void 0 : oe.enrichment) || 0) >= j;
      }
    );
    return [...X, ..._].map((G) => {
      var oe, De;
      return {
        key: G.key,
        label: ((oe = G.attributes) == null ? void 0 : oe.label) || G.key,
        type: (De = G.attributes) == null ? void 0 : De.node_type,
        orgId: G._orgId,
        node: G
      };
    });
  }, [X, J, j]), mt = Pt.useMemo(() => {
    const _ = E.trim().toLowerCase();
    return _ ? Pe.filter((G) => {
      var De;
      const oe = String(((De = G.node.attributes) == null ? void 0 : De.aliases) || "").toLowerCase();
      return G.label.toLowerCase().includes(_) || G.key.toLowerCase().includes(_) || oe.includes(_);
    }).slice(0, 12) : [];
  }, [E, Pe]), xt = (_) => {
    const G = _.type === "repeat" ? Xe.get(_.node._globalKey) : Qe.get(_.node._globalKey);
    if (!G) return;
    const oe = _.type === "repeat" ? 260 : 180, De = _.type === "repeat" ? 180 : 130;
    Ve({
      x: G.x - oe / 2,
      y: G.y - De / 2,
      w: oe,
      h: De
    }), jt({ type: _.type === "repeat" ? "repeat" : "protein", node: _.node }), P(!1);
  }, lt = Pt.useRef(null), [Vt, wt] = Pt.useState({ x: 0, y: 0 }), [ue, jt] = Pt.useState(null), [$t, It] = Pt.useState(!1), He = Pt.useRef({ clientX: 0, clientY: 0, viewX: 0, viewY: 0 }), [fe, Ve] = Pt.useState({ x: -600, y: -300, w: 1200, h: 600 }), [be, M] = Pt.useState(!1);
  Pt.useEffect(() => {
    M(!1);
  }, [H]), Pt.useEffect(() => {
    const _ = lt.current;
    if (!_) return;
    const G = _.parentElement;
    if (!G) return;
    const oe = () => {
      const Oe = G.getBoundingClientRect();
      _.setAttribute("width", `${Oe.width}`), _.setAttribute("height", `${Oe.height}`);
    };
    oe();
    const De = new ResizeObserver(oe);
    return De.observe(G), () => De.disconnect();
  }, []), Pt.useEffect(() => {
    const _ = (G) => wt({ x: G.clientX, y: G.clientY });
    return window.addEventListener("mousemove", _), () => window.removeEventListener("mousemove", _);
  }, []);
  const ae = (_) => {
    _.preventDefault();
    const G = Math.pow(1.0015, _.deltaY), oe = lt.current;
    if (!oe) return;
    const De = oe.getBoundingClientRect(), Oe = (_.clientX - De.left) / De.width, z = (_.clientY - De.top) / De.height;
    Ve((Q) => {
      const me = Q.x + Oe * Q.w, Ke = Q.y + z * Q.h, ut = Math.max(50, Math.min(1e4, Q.w * G)), Et = Math.max(50, Math.min(1e4, Q.h * G));
      return {
        x: me - Oe * ut,
        y: Ke - z * Et,
        w: ut,
        h: Et
      };
    });
  };
  Pt.useEffect(() => {
    const _ = re.current;
    if (!_) return;
    const G = () => {
      Ee(Number(_.dataset.threshold || 0));
    };
    return _.addEventListener("network-settings-change", G), () => {
      _.removeEventListener("network-settings-change", G);
    };
  }, []);
  const { satPositions: Xe, proteinPositions: Qe } = Pt.useMemo(() => {
    var ba, _a;
    const _ = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map();
    if (!X.length && !J.length)
      return { satPositions: _, proteinPositions: G };
    const oe = J.filter(
      (g) => {
        var L;
        return Number(((L = g.attributes) == null ? void 0 : L.enrichment) || 0) >= j;
      }
    ), De = /* @__PURE__ */ new Map();
    for (const g of oe) {
      const L = De.get(g.key) || [];
      L.push(g), De.set(g.key, L);
    }
    const Oe = [], z = /* @__PURE__ */ new Set();
    for (const [g, L] of he) {
      const ne = String(g).trim(), le = String(L).trim(), Ue = De.get(ne) || [], Ge = De.get(le) || [];
      for (const We of Ue)
        for (const et of Ge) {
          if (We._globalKey === et._globalKey) continue;
          const At = We._globalKey < et._globalKey ? `${We._globalKey}|||${et._globalKey}` : `${et._globalKey}|||${We._globalKey}`;
          z.has(At) || (z.add(At), Oe.push({ source: We, target: et }));
        }
    }
    const Q = /* @__PURE__ */ new Map(), me = [], Ke = (g, L) => g < L ? `${g}|||${L}` : `${L}|||${g}`;
    for (const { source: g, target: L } of Oe) {
      const ne = g._satelliteglobalKey, le = L._satelliteglobalKey;
      if (!ne || !le || ne === le) continue;
      const Ue = Ke(ne, le);
      Q.set(Ue, (Q.get(Ue) || 0) + 1);
    }
    for (const [g, L] of Q.entries()) {
      const ne = g.indexOf("|||"), le = g.slice(0, ne), Ue = g.slice(ne + 3);
      me.push({ a: le, b: Ue, weight: L });
    }
    const ut = X.map((g) => g._globalKey), Et = new Map(ut.map((g) => [g, 0]));
    for (const g of me)
      Et.set(g.a, (Et.get(g.a) || 0) + g.weight), Et.set(g.b, (Et.get(g.b) || 0) + g.weight);
    const gt = new Set(ut), dt = [];
    if (gt.size) {
      let g = [...gt].sort((L, ne) => (Et.get(ne) || 0) - (Et.get(L) || 0) || String(L).localeCompare(String(ne)))[0];
      for (dt.push(g), gt.delete(g); gt.size; ) {
        let L = null, ne = -1 / 0;
        for (const le of gt) {
          const Ge = (Q.get(Ke(g, le)) || 0) * 100 + (Et.get(le) || 0);
          (Ge > ne || Ge === ne && String(le).localeCompare(String(L)) < 0) && (ne = Ge, L = le);
        }
        dt.push(L), gt.delete(L), g = L;
      }
    }
    const Mt = (g, L, ne) => {
      const le = Math.abs(g - L);
      return Math.min(le, ne - le);
    }, Lt = (g, L, ne) => {
      if (g.a === L.a || g.a === L.b || g.b === L.a || g.b === L.b) return !1;
      const le = ne.get(g.a), Ue = ne.get(g.b), Ge = ne.get(L.a), We = ne.get(L.b);
      if ([le, Ue, Ge, We].some((At) => At == null)) return !1;
      const et = (At, Ft, nn) => Ft < nn ? At > Ft && At < nn : At > Ft || At < nn;
      return et(Ge, le, Ue) !== et(We, le, Ue) && et(le, Ge, We) !== et(Ue, Ge, We);
    }, zt = (g) => {
      if (g.length < 2) return 0;
      const L = new Map(g.map((le, Ue) => [le, Ue]));
      let ne = 0;
      for (const le of me)
        ne += le.weight * Mt(L.get(le.a), L.get(le.b), g.length) * 10;
      for (let le = 0; le < me.length; le++)
        for (let Ue = le + 1; Ue < me.length; Ue++)
          Lt(me[le], me[Ue], L) && (ne += me[le].weight * me[Ue].weight * 45);
      return ne;
    };
    let qt = zt(dt), Yt = !0, Cn = 0;
    for (; Yt && Cn < 8; ) {
      Yt = !1, Cn += 1;
      for (let g = 0; g < dt.length - 1; g++)
        for (let L = g + 1; L < dt.length; L++) {
          [dt[g], dt[L]] = [dt[L], dt[g]];
          const ne = zt(dt);
          ne + 1e-3 < qt ? (qt = ne, Yt = !0) : [dt[g], dt[L]] = [dt[L], dt[g]];
        }
    }
    const Dn = Math.max(dt.length, 1), pr = Math.max(340, Dn * 76), Er = Math.max(210, Math.min(460, Dn * 37)), Vr = /* @__PURE__ */ new Map();
    dt.forEach((g, L) => {
      const ne = -Math.PI / 2 + L * 2 * Math.PI / Dn;
      Vr.set(g, {
        x: Math.cos(ne) * pr,
        y: Math.sin(ne) * Er,
        angle: ne
      });
    });
    const Ba = [], Cr = /* @__PURE__ */ new Map();
    X.forEach((g) => {
      var Ue;
      const L = Number(((Ue = g.attributes) == null ? void 0 : Ue.size) ?? 40), ne = Vr.get(g._globalKey) || { x: 0, y: 0 }, le = {
        id: g._globalKey,
        type: "repeat",
        raw: g,
        size: L,
        x: ne.x,
        y: ne.y,
        fx: ne.x,
        fy: ne.y
      };
      Ba.push(le), Cr.set(g._globalKey, le);
    });
    const bn = /* @__PURE__ */ new Map();
    for (const { source: g, target: L } of Oe)
      if (g._satelliteglobalKey && L._satelliteglobalKey) {
        const ne = bn.get(g._globalKey) || [];
        ne.push(L._satelliteglobalKey), bn.set(g._globalKey, ne);
        const le = bn.get(L._globalKey) || [];
        le.push(g._satelliteglobalKey), bn.set(L._globalKey, le);
      }
    const ir = /* @__PURE__ */ new Map();
    for (const g of oe) {
      if (!g._satelliteglobalKey) continue;
      const L = ir.get(g._satelliteglobalKey) || [];
      L.push(g), ir.set(g._satelliteglobalKey, L);
    }
    for (const [g, L] of ir.entries()) {
      const ne = Cr.get(g);
      if (!ne) continue;
      L.sort((We, et) => {
        const At = (bn.get(We._globalKey) || []).length, Ft = (bn.get(et._globalKey) || []).length;
        return Ft !== At ? Ft - At : String(We._globalKey).localeCompare(String(et._globalKey));
      });
      let le = 0, Ue = 0;
      const Ge = Math.max(
        1,
        L.filter((We) => !(bn.get(We._globalKey) || []).length).length
      );
      for (const We of L) {
        const et = bn.get(We._globalKey) || [];
        let At, Ft;
        if (et.length) {
          let Ur = 0, pt = 0;
          for (const bt of et) {
            const Br = Vr.get(bt);
            Br && (Ur += Br.x - ne.x, pt += Br.y - ne.y);
          }
          At = Math.atan2(pt, Ur), Ft = le++, At += (Ft % 7 - 3) * 0.085;
        } else {
          const Ur = ((ba = Vr.get(g)) == null ? void 0 : ba.angle) ?? 0;
          Ft = Ue++;
          const pt = Ge <= 1 ? 0.5 : Ft / (Ge - 1);
          At = Ur + (pt - 0.5) * Math.PI * 1.25;
        }
        const nn = Number(ne.size || 40) + 56 + Ft % 3 * 10, lr = Number(((_a = We.attributes) == null ? void 0 : _a.size) ?? 6), la = {
          id: We._globalKey,
          type: "protein",
          raw: We,
          size: lr,
          x: ne.x + Math.cos(At) * nn,
          y: ne.y + Math.sin(At) * nn
        };
        Ba.push(la), Cr.set(We._globalKey, la);
      }
    }
    const Vn = [];
    for (const g of oe)
      g._satelliteglobalKey && (!Cr.has(g._globalKey) || !Cr.has(g._satelliteglobalKey) || Vn.push({
        source: g._globalKey,
        target: g._satelliteglobalKey,
        kind: "binding"
      }));
    for (const { source: g, target: L } of Oe)
      !Cr.has(g._globalKey) || !Cr.has(L._globalKey) || Vn.push({
        source: g._globalKey,
        target: L._globalKey,
        kind: "clone"
      });
    const $a = mD(Ba).force(
      "charge",
      yD().strength((g) => g.type === "repeat" ? -40 : -52)
    ).force(
      "collide",
      Jk().radius(
        (g) => Number(g.size || (g.type === "repeat" ? 40 : 6)) + (g.type === "repeat" ? 26 : 7)
      ).strength(1).iterations(2)
    ).force(
      "link",
      tD(Vn).id((g) => g.id).distance((g) => {
        if (g.kind === "clone") return 155;
        const L = g.source.type === "repeat" ? g.source : g.target;
        return Number((L == null ? void 0 : L.size) || 40) + 56;
      }).strength((g) => g.kind === "binding" ? 0.88 : 0.045)
    ).force("center", zk(0, 0)).stop(), Ta = 380;
    for (let g = 0; g < Ta; g++) $a.tick();
    return X.forEach((g) => {
      const L = Cr.get(g._globalKey);
      L && _.set(g._globalKey, { x: L.x, y: L.y });
    }), oe.forEach((g) => {
      const L = Cr.get(g._globalKey);
      L && G.set(g._globalKey, { x: L.x, y: L.y });
    }), { satPositions: _, proteinPositions: G };
  }, [X, J, he, j]);
  Pt.useEffect(() => {
    if (be || !lt.current || !X.length || Xe.size === 0) return;
    const _ = [], G = [];
    for (const { x: qt, y: Yt } of Xe.values())
      _.push(qt), G.push(Yt);
    for (const { x: qt, y: Yt } of Qe.values())
      _.push(qt), G.push(Yt);
    if (!_.length) return;
    let oe = Math.min(..._), De = Math.max(..._), Oe = Math.min(...G), z = Math.max(...G);
    const Q = 80;
    oe -= Q, De += Q, Oe -= Q, z += Q;
    let me = Math.max(De - oe || 1, 900), Ke = Math.max(z - Oe || 1, 500);
    const ut = lt.current.parentElement;
    if (!ut) {
      const Yt = oe + me / 2, Cn = Oe + Ke / 2;
      me *= 1.18, Ke *= 1.18, oe = Yt - me / 2, Oe = Cn - Ke / 2, Ve({ x: oe, y: Oe, w: me, h: Ke }), M(!0);
      return;
    }
    const Et = ut.getBoundingClientRect(), gt = Et.width / Et.height;
    if (me / Ke > gt) {
      const qt = me / gt, Yt = qt - Ke;
      Oe -= Yt / 2, Ke = qt;
    } else {
      const qt = Ke * gt, Yt = qt - me;
      oe -= Yt / 2, me = qt;
    }
    const Mt = 1.18, Lt = oe + me / 2, zt = Oe + Ke / 2;
    me *= Mt, Ke *= Mt, oe = Lt - me / 2, Oe = zt - Ke / 2, Ve({ x: oe, y: Oe, w: me, h: Ke }), M(!0);
  }, [Xe, Qe, X.length, be]);
  const Ot = Pt.useMemo(() => {
    const _ = [];
    for (const [G, oe] of ve.entries()) {
      const De = Xe.get(G);
      if (De)
        for (const Oe of oe) {
          const z = Qe.get(Oe._globalKey);
          z && _.push({ a: z, b: De });
        }
    }
    return _;
  }, [ve, Xe, Qe]), _t = (_, G, oe, De = 28) => {
    const Oe = [];
    for (let z = 0; z <= De; z++) {
      const Q = z / De, me = 1 - Q;
      Oe.push({
        x: me * me * _.x + 2 * me * Q * G.x + Q * Q * oe.x,
        y: me * me * _.y + 2 * me * Q * G.y + Q * Q * oe.y
      });
    }
    return Oe;
  }, Rt = (_, G, oe, De) => {
    const Oe = (ut, Et, gt) => (Et.x - ut.x) * (gt.y - ut.y) - (Et.y - ut.y) * (gt.x - ut.x), z = Oe(_, G, oe), Q = Oe(_, G, De), me = Oe(oe, De, _), Ke = Oe(oe, De, G);
    return z * Q < 0 && me * Ke < 0;
  }, kt = (_, G, oe, De = []) => {
    const Oe = G.x - _.x, z = G.y - _.y, Q = Math.hypot(Oe, z) || 1, me = (_.x + G.x) / 2, Ke = (_.y + G.y) / 2, ut = -z / Q, Et = Oe / Q, gt = [
      0.1,
      -0.1,
      0.18,
      -0.18,
      0.28,
      -0.28,
      0.4,
      -0.4,
      0.54,
      -0.54,
      0.7,
      -0.7
    ];
    let dt = null;
    for (const Mt of gt) {
      const Lt = Math.max(22, Math.min(300, Q * Math.abs(Mt))) * Math.sign(Mt), zt = { x: me + ut * Lt, y: Ke + Et * Lt }, qt = _t(_, zt, G, 30);
      let Yt = Math.abs(Lt) * 0.016;
      for (const Cn of oe) {
        let Dn = 1 / 0;
        for (let pr = 3; pr < qt.length - 3; pr++) {
          const Er = qt[pr], Vr = Math.hypot(Er.x - Cn.x, Er.y - Cn.y) - Cn.r;
          Dn = Math.min(Dn, Vr);
        }
        Dn < 0 ? Yt += 6e3 + Math.abs(Dn) * 140 : Dn < 34 && (Yt += (34 - Dn) * 20);
      }
      for (const Cn of De) {
        let Dn = 0;
        for (let pr = 0; pr < qt.length - 1; pr++)
          for (let Er = 0; Er < Cn.length - 1; Er++)
            if (Rt(
              qt[pr],
              qt[pr + 1],
              Cn[Er],
              Cn[Er + 1]
            )) {
              Dn += 1;
              break;
            }
        Yt += Dn * 480;
      }
      (!dt || Yt < dt.score) && (dt = {
        score: Yt,
        path: `M ${_.x} ${_.y} Q ${zt.x} ${zt.y} ${G.x} ${G.y}`,
        samples: qt
      });
    }
    return dt;
  }, Tt = Pt.useMemo(() => {
    const _ = /* @__PURE__ */ new Map();
    for (const z of J) {
      const Q = Qe.get(z._globalKey);
      if (!Q) continue;
      const me = _.get(z.key) || [];
      me.push({ node: z, pos: Q }), _.set(z.key, me);
    }
    const G = [], oe = /* @__PURE__ */ new Set();
    for (const [z, Q] of he) {
      const me = String(z).trim(), Ke = String(Q).trim(), ut = _.get(me) || [], Et = _.get(Ke) || [];
      for (const gt of ut)
        for (const dt of Et) {
          const Mt = gt.node._globalKey, Lt = dt.node._globalKey;
          if (Mt === Lt) continue;
          const zt = Mt < Lt ? `${Mt}|||${Lt}` : `${Lt}|||${Mt}`;
          oe.has(zt) || (oe.add(zt), G.push({
            a: gt.pos,
            b: dt.pos,
            sourceGlobalKey: Mt,
            targetGlobalKey: Lt
          }));
        }
    }
    G.sort(
      (z, Q) => Math.hypot(Q.b.x - Q.a.x, Q.b.y - Q.a.y) - Math.hypot(z.b.x - z.a.x, z.b.y - z.a.y)
    );
    const De = X.map((z) => {
      var me;
      const Q = Xe.get(z._globalKey) || { x: 0, y: 0 };
      return {
        x: Q.x,
        y: Q.y,
        r: Number(((me = z.attributes) == null ? void 0 : me.size) ?? 30) + 14
      };
    }), Oe = [];
    return G.map((z) => {
      const Q = kt(
        z.a,
        z.b,
        De,
        Oe
      );
      return Oe.push(Q.samples), { ...z, path: Q.path };
    });
  }, [he, J, Qe, X, Xe]), tn = Pt.useMemo(() => {
    const _ = /* @__PURE__ */ new Set();
    if ((ue == null ? void 0 : ue.type) !== "protein") return _;
    const G = ue.node;
    _.add(G._globalKey);
    for (const oe of Tt)
      oe.sourceGlobalKey === G._globalKey && _.add(oe.targetGlobalKey), oe.targetGlobalKey === G._globalKey && _.add(oe.sourceGlobalKey);
    return _;
  }, [ue, Tt]), An = `${fe.x} ${fe.y} ${fe.w} ${fe.h}`;
  return !X.length && !J.length ? /* @__PURE__ */ ft.jsx("p", { children: "Enrichment data doesn't exist" }) : /* @__PURE__ */ ft.jsxs(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        margin: 0,
        padding: 0,
        width: "100%",
        height: "600px",
        touchAction: "none",
        overscrollBehavior: "contain"
      },
      children: [
        /* @__PURE__ */ ft.jsxs(
          "div",
          {
            style: {
              position: "absolute",
              top: 12,
              left: 12,
              zIndex: 10,
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              pointerEvents: "auto"
            },
            children: [
              /* @__PURE__ */ ft.jsxs("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ ft.jsx(
                  "input",
                  {
                    type: "text",
                    value: E,
                    onChange: (_) => w(_.target.value),
                    onFocus: () => P(!0),
                    placeholder: "Search protein or repeat...",
                    style: {
                      width: 240,
                      padding: "8px 10px",
                      borderRadius: 8,
                      border: "1px solid #ccc",
                      fontSize: 13,
                      background: "rgba(255,255,255,0.95)"
                    }
                  }
                ),
                C && E.trim() && /* @__PURE__ */ ft.jsx(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: 38,
                      left: 0,
                      width: 280,
                      maxHeight: 260,
                      overflowY: "auto",
                      background: "white",
                      border: "1px solid #ddd",
                      borderRadius: 8,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.12)"
                    },
                    children: mt.length ? mt.map((_) => /* @__PURE__ */ ft.jsxs(
                      "div",
                      {
                        onMouseDown: (G) => {
                          G.preventDefault(), xt(_);
                        },
                        style: {
                          padding: "8px 10px",
                          cursor: "pointer",
                          borderBottom: "1px solid #eee",
                          fontSize: 13
                        },
                        children: [
                          /* @__PURE__ */ ft.jsx("div", { style: { fontWeight: 600 }, children: _.label }),
                          /* @__PURE__ */ ft.jsxs("div", { style: { color: "#666", fontSize: 11 }, children: [
                            _.type === "repeat" ? "Repeat" : "Protein",
                            " · ",
                            _.orgId
                          ] })
                        ]
                      },
                      `${_.orgId}-${_.key}`
                    )) : /* @__PURE__ */ ft.jsx("div", { style: { padding: "8px 10px", color: "#666", fontSize: 13 }, children: "No matches" })
                  }
                )
              ] }),
              /* @__PURE__ */ ft.jsxs(
                "div",
                {
                  style: {
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    padding: "8px 10px",
                    fontSize: 12,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                    minWidth: 160
                  },
                  children: [
                    /* @__PURE__ */ ft.jsx("div", { style: { fontWeight: 700, marginBottom: 6 }, children: "Organisms" }),
                    Je.map((_) => /* @__PURE__ */ ft.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 7,
                          marginBottom: 4
                        },
                        children: [
                          /* @__PURE__ */ ft.jsx(
                            "span",
                            {
                              style: {
                                width: 11,
                                height: 11,
                                borderRadius: "50%",
                                background: _.color,
                                display: "inline-block"
                              }
                            }
                          ),
                          /* @__PURE__ */ ft.jsx("span", { children: _.name })
                        ]
                      },
                      _.id
                    ))
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ ft.jsxs(
          "svg",
          {
            ref: lt,
            viewBox: An,
            onWheel: ae,
            style: { width: "100%", height: "100%", display: "block" },
            children: [
              /* @__PURE__ */ ft.jsx(
                "rect",
                {
                  x: fe.x - fe.w,
                  y: fe.y - fe.h,
                  width: fe.w * 3,
                  height: fe.h * 3,
                  fill: "transparent",
                  style: { cursor: $t ? "grabbing" : "grab" },
                  onMouseDown: (_) => {
                    _.button === 0 && (It(!0), He.current = {
                      clientX: _.clientX,
                      clientY: _.clientY,
                      viewX: fe.x,
                      viewY: fe.y
                    });
                  },
                  onMouseMove: (_) => {
                    if (!$t) return;
                    const G = lt.current.getBoundingClientRect(), oe = fe.w / G.width, De = fe.h / G.height, Oe = (_.clientX - He.current.clientX) * oe, z = (_.clientY - He.current.clientY) * De;
                    Ve((Q) => ({
                      ...Q,
                      x: He.current.viewX - Oe,
                      y: He.current.viewY - z
                    }));
                  },
                  onMouseUp: () => It(!1),
                  onMouseLeave: () => It(!1)
                }
              ),
              /* @__PURE__ */ ft.jsx("g", { children: Tt.map((_, G) => {
                const oe = (ue == null ? void 0 : ue.type) === "protein" && (_.sourceGlobalKey === ue.node._globalKey || _.targetGlobalKey === ue.node._globalKey);
                return /* @__PURE__ */ ft.jsx(
                  "path",
                  {
                    d: _.path,
                    fill: "none",
                    stroke: oe ? "#FFD700" : "#888",
                    strokeDasharray: "4 4",
                    strokeWidth: oe ? 2.5 : 1,
                    opacity: oe ? 1 : 0.6,
                    pointerEvents: "none"
                  },
                  `clone-${G}`
                );
              }) }),
              /* @__PURE__ */ ft.jsx("g", { children: Ot.map((_, G) => /* @__PURE__ */ ft.jsx(
                "line",
                {
                  x1: _.a.x,
                  y1: _.a.y,
                  x2: _.b.x,
                  y2: _.b.y,
                  stroke: "#bdbdbd",
                  strokeWidth: "1.2"
                },
                `ps-${G}`
              )) }),
              /* @__PURE__ */ ft.jsx("g", { children: X.map((_) => {
                var Q, me, Ke, ut;
                const G = Xe.get(_._globalKey) || { x: 0, y: 0 }, oe = Number(((Q = _.attributes) == null ? void 0 : Q.size) ?? 30), De = Te.get(_._orgId) ?? ((me = _.attributes) == null ? void 0 : me.color) ?? "#888", Oe = ((Ke = _.attributes) == null ? void 0 : Ke.label) || _.key, z = ((ut = _.attributes) == null ? void 0 : ut.url) || null;
                return /* @__PURE__ */ ft.jsxs("g", { transform: `translate(${G.x},${G.y})`, children: [
                  /* @__PURE__ */ ft.jsx(
                    "circle",
                    {
                      r: oe,
                      fill: De,
                      opacity: "1",
                      stroke: (ue == null ? void 0 : ue.type) === "repeat" && ue.node._globalKey === _._globalKey ? "#FFD700" : "none",
                      strokeWidth: (ue == null ? void 0 : ue.type) === "repeat" && ue.node._globalKey === _._globalKey ? 4 : 0,
                      style: { cursor: z ? "pointer" : "default" },
                      onMouseEnter: () => jt({ type: "repeat", node: _ }),
                      onMouseLeave: () => jt(null),
                      onClick: () => z && window.open(z, "_blank")
                    }
                  ),
                  /* @__PURE__ */ ft.jsx(
                    "text",
                    {
                      x: 0,
                      y: 0,
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                      fill: "#fff",
                      fontSize: "20",
                      fontWeight: "600",
                      style: { cursor: z ? "pointer" : "default", userSelect: "none" },
                      onMouseEnter: () => jt({ type: "repeat", node: _ }),
                      onMouseLeave: () => jt(null),
                      onClick: () => z && window.open(z, "_blank"),
                      children: Oe
                    }
                  )
                ] }, _._globalKey);
              }) }),
              /* @__PURE__ */ ft.jsx("g", { children: J.filter((_) => {
                var G;
                return Number(((G = _.attributes) == null ? void 0 : G.enrichment) || 0) >= j;
              }).map((_) => {
                var z, Q, me;
                const G = Qe.get(_._globalKey) || { x: 0, y: 0 }, oe = Number(((z = _.attributes) == null ? void 0 : z.size) ?? 6), De = ((Q = _.attributes) == null ? void 0 : Q.color) || "#9DD6FB", Oe = ((me = _.attributes) == null ? void 0 : me.url) || null;
                return /* @__PURE__ */ ft.jsx(
                  "circle",
                  {
                    cx: G.x,
                    cy: G.y,
                    r: oe,
                    fill: De,
                    stroke: tn.has(_._globalKey) ? "#FFD700" : "none",
                    strokeWidth: tn.has(_._globalKey) ? 3 : 0,
                    style: { cursor: Oe ? "pointer" : "default" },
                    onMouseEnter: () => jt({ type: "protein", node: _ }),
                    onMouseLeave: () => jt(null),
                    onClick: () => Oe && window.open(Oe, "_blank")
                  },
                  _._globalKey
                );
              }) })
            ]
          }
        ),
        ue && /* @__PURE__ */ ft.jsx(
          "div",
          {
            role: "tooltip",
            style: {
              position: "fixed",
              left: Vt.x + 12,
              top: Vt.y + 12,
              background: "rgba(255,255,255,0.95)",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: 10,
              padding: "10px 12px",
              fontSize: 12,
              boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
              pointerEvents: "none",
              maxWidth: 260,
              zIndex: 9999
            },
            children: ue.type === "repeat" ? /* @__PURE__ */ ft.jsxs("div", { children: [
              /* @__PURE__ */ ft.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: ((dr = ue.node.attributes) == null ? void 0 : dr.label) || ue.node.key }),
              /* @__PURE__ */ ft.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Satellite (repeat)" }),
              ((Rn = ue.node.attributes) == null ? void 0 : Rn.aliases) && /* @__PURE__ */ ft.jsxs("div", { children: [
                /* @__PURE__ */ ft.jsx("b", { children: "Aliases:" }),
                " ",
                String(ue.node.attributes.aliases)
              ] }),
              ((Un = (Qn = ue.node.attributes) == null ? void 0 : Qn.parental_organism) == null ? void 0 : Un.scientific_name) && /* @__PURE__ */ ft.jsxs("div", { children: [
                /* @__PURE__ */ ft.jsx("b", { children: "Organism:" }),
                " ",
                String(ue.node.attributes.parental_organism.scientific_name)
              ] }),
              ((jn = ue.node.attributes) == null ? void 0 : jn.dfam_id) != null && /* @__PURE__ */ ft.jsxs("div", { children: [
                /* @__PURE__ */ ft.jsx("b", { children: "Dfam:" }),
                " ",
                String(ue.node.attributes.dfam_id)
              ] }),
              ((Sr = ue.node.attributes) == null ? void 0 : Sr.url) && /* @__PURE__ */ ft.jsx(
                "div",
                {
                  style: {
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer"
                  },
                  onClick: () => window.open(ue.node.attributes.url, "_blank"),
                  children: "Open page"
                }
              )
            ] }) : /* @__PURE__ */ ft.jsxs("div", { children: [
              /* @__PURE__ */ ft.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: (Ra = ue.node.attributes) == null ? void 0 : Ra.label }),
              /* @__PURE__ */ ft.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Transcription factor" }),
              ((Ar = ue.node.attributes) == null ? void 0 : Ar.aliases) && /* @__PURE__ */ ft.jsxs("div", { children: [
                /* @__PURE__ */ ft.jsx("b", { children: "Aliases:" }),
                " ",
                String(ue.node.attributes.aliases)
              ] }),
              ((Pn = ue.node.attributes) == null ? void 0 : Pn.gene_family) && /* @__PURE__ */ ft.jsxs("div", { children: [
                /* @__PURE__ */ ft.jsx("b", { children: "Family:" }),
                " ",
                String(ue.node.attributes.gene_family)
              ] }),
              ((Fn = (Tn = ue.node.attributes) == null ? void 0 : Tn.parent_organism) == null ? void 0 : Fn.scientific_name) != null && /* @__PURE__ */ ft.jsxs("div", { children: [
                /* @__PURE__ */ ft.jsx("b", { children: "Organism:" }),
                " ",
                String(ue.node.attributes.parent_organism.scientific_name)
              ] }),
              ((ar = ue.node.attributes) == null ? void 0 : ar.enrichment) != null && /* @__PURE__ */ ft.jsxs("div", { children: [
                /* @__PURE__ */ ft.jsx("b", { children: "Enrichment:" }),
                " ",
                String(ue.node.attributes.enrichment)
              ] }),
              ((ia = ue.node.attributes) == null ? void 0 : ia.url) && /* @__PURE__ */ ft.jsx(
                "div",
                {
                  style: {
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer"
                  },
                  onClick: () => window.open(ue.node.attributes.url, "_blank"),
                  children: "Open page"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
const Uw = document.getElementById("network-container");
if (!Uw) throw new Error('Missing <div id="network-container"> in index.html');
const SD = k0(Uw);
SD.render(
  /* @__PURE__ */ ft.jsx(bk.StrictMode, { children: /* @__PURE__ */ ft.jsx(gD, {}) })
);
