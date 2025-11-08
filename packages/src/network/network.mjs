function G_(ne) {
  return ne && ne.__esModule && Object.prototype.hasOwnProperty.call(ne, "default") ? ne.default : ne;
}
var fE = { exports: {} }, qp = {}, dE = { exports: {} }, gt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XR;
function X_() {
  if (XR) return gt;
  XR = 1;
  var ne = Symbol.for("react.element"), re = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), Ot = Symbol.for("react.strict_mode"), St = Symbol.for("react.profiler"), bt = Symbol.for("react.provider"), S = Symbol.for("react.context"), Et = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), pe = Symbol.for("react.memo"), Ze = Symbol.for("react.lazy"), J = Symbol.iterator;
  function Ee(T) {
    return T === null || typeof T != "object" ? null : (T = J && T[J] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var ae = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, We = Object.assign, dt = {};
  function rt(T, L, ie) {
    this.props = T, this.context = L, this.refs = dt, this.updater = ie || ae;
  }
  rt.prototype.isReactComponent = {}, rt.prototype.setState = function(T, L) {
    if (typeof T != "object" && typeof T != "function" && T != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, L, "setState");
  }, rt.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function rn() {
  }
  rn.prototype = rt.prototype;
  function at(T, L, ie) {
    this.props = T, this.context = L, this.refs = dt, this.updater = ie || ae;
  }
  var Qe = at.prototype = new rn();
  Qe.constructor = at, We(Qe, rt.prototype), Qe.isPureReactComponent = !0;
  var ut = Array.isArray, be = Object.prototype.hasOwnProperty, ot = { current: null }, Be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function an(T, L, ie) {
    var K, De = {}, _e = null, xe = null;
    if (L != null) for (K in L.ref !== void 0 && (xe = L.ref), L.key !== void 0 && (_e = "" + L.key), L) be.call(L, K) && !Be.hasOwnProperty(K) && (De[K] = L[K]);
    var Ue = arguments.length - 2;
    if (Ue === 1) De.children = ie;
    else if (1 < Ue) {
      for (var $e = Array(Ue), et = 0; et < Ue; et++) $e[et] = arguments[et + 2];
      De.children = $e;
    }
    if (T && T.defaultProps) for (K in Ue = T.defaultProps, Ue) De[K] === void 0 && (De[K] = Ue[K]);
    return { $$typeof: ne, type: T, key: _e, ref: xe, props: De, _owner: ot.current };
  }
  function Lt(T, L) {
    return { $$typeof: ne, type: T.type, key: L, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function It(T) {
    return typeof T == "object" && T !== null && T.$$typeof === ne;
  }
  function Gt(T) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(ie) {
      return L[ie];
    });
  }
  var mt = /\/+/g;
  function Le(T, L) {
    return typeof T == "object" && T !== null && T.key != null ? Gt("" + T.key) : L.toString(36);
  }
  function _t(T, L, ie, K, De) {
    var _e = typeof T;
    (_e === "undefined" || _e === "boolean") && (T = null);
    var xe = !1;
    if (T === null) xe = !0;
    else switch (_e) {
      case "string":
      case "number":
        xe = !0;
        break;
      case "object":
        switch (T.$$typeof) {
          case ne:
          case re:
            xe = !0;
        }
    }
    if (xe) return xe = T, De = De(xe), T = K === "" ? "." + Le(xe, 0) : K, ut(De) ? (ie = "", T != null && (ie = T.replace(mt, "$&/") + "/"), _t(De, L, ie, "", function(et) {
      return et;
    })) : De != null && (It(De) && (De = Lt(De, ie + (!De.key || xe && xe.key === De.key ? "" : ("" + De.key).replace(mt, "$&/") + "/") + T)), L.push(De)), 1;
    if (xe = 0, K = K === "" ? "." : K + ":", ut(T)) for (var Ue = 0; Ue < T.length; Ue++) {
      _e = T[Ue];
      var $e = K + Le(_e, Ue);
      xe += _t(_e, L, ie, $e, De);
    }
    else if ($e = Ee(T), typeof $e == "function") for (T = $e.call(T), Ue = 0; !(_e = T.next()).done; ) _e = _e.value, $e = K + Le(_e, Ue++), xe += _t(_e, L, ie, $e, De);
    else if (_e === "object") throw L = String(T), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
    return xe;
  }
  function yt(T, L, ie) {
    if (T == null) return T;
    var K = [], De = 0;
    return _t(T, K, "", "", function(_e) {
      return L.call(ie, _e, De++);
    }), K;
  }
  function Ct(T) {
    if (T._status === -1) {
      var L = T._result;
      L = L(), L.then(function(ie) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ie);
      }, function(ie) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ie);
      }), T._status === -1 && (T._status = 0, T._result = L);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var Ce = { current: null }, ee = { transition: null }, U = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: ee, ReactCurrentOwner: ot };
  function P() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return gt.Children = { map: yt, forEach: function(T, L, ie) {
    yt(T, function() {
      L.apply(this, arguments);
    }, ie);
  }, count: function(T) {
    var L = 0;
    return yt(T, function() {
      L++;
    }), L;
  }, toArray: function(T) {
    return yt(T, function(L) {
      return L;
    }) || [];
  }, only: function(T) {
    if (!It(T)) throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, gt.Component = rt, gt.Fragment = j, gt.Profiler = St, gt.PureComponent = at, gt.StrictMode = Ot, gt.Suspense = de, gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U, gt.act = P, gt.cloneElement = function(T, L, ie) {
    if (T == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var K = We({}, T.props), De = T.key, _e = T.ref, xe = T._owner;
    if (L != null) {
      if (L.ref !== void 0 && (_e = L.ref, xe = ot.current), L.key !== void 0 && (De = "" + L.key), T.type && T.type.defaultProps) var Ue = T.type.defaultProps;
      for ($e in L) be.call(L, $e) && !Be.hasOwnProperty($e) && (K[$e] = L[$e] === void 0 && Ue !== void 0 ? Ue[$e] : L[$e]);
    }
    var $e = arguments.length - 2;
    if ($e === 1) K.children = ie;
    else if (1 < $e) {
      Ue = Array($e);
      for (var et = 0; et < $e; et++) Ue[et] = arguments[et + 2];
      K.children = Ue;
    }
    return { $$typeof: ne, type: T.type, key: De, ref: _e, props: K, _owner: xe };
  }, gt.createContext = function(T) {
    return T = { $$typeof: S, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: bt, _context: T }, T.Consumer = T;
  }, gt.createElement = an, gt.createFactory = function(T) {
    var L = an.bind(null, T);
    return L.type = T, L;
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(T) {
    return { $$typeof: Et, render: T };
  }, gt.isValidElement = It, gt.lazy = function(T) {
    return { $$typeof: Ze, _payload: { _status: -1, _result: T }, _init: Ct };
  }, gt.memo = function(T, L) {
    return { $$typeof: pe, type: T, compare: L === void 0 ? null : L };
  }, gt.startTransition = function(T) {
    var L = ee.transition;
    ee.transition = {};
    try {
      T();
    } finally {
      ee.transition = L;
    }
  }, gt.unstable_act = P, gt.useCallback = function(T, L) {
    return Ce.current.useCallback(T, L);
  }, gt.useContext = function(T) {
    return Ce.current.useContext(T);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(T) {
    return Ce.current.useDeferredValue(T);
  }, gt.useEffect = function(T, L) {
    return Ce.current.useEffect(T, L);
  }, gt.useId = function() {
    return Ce.current.useId();
  }, gt.useImperativeHandle = function(T, L, ie) {
    return Ce.current.useImperativeHandle(T, L, ie);
  }, gt.useInsertionEffect = function(T, L) {
    return Ce.current.useInsertionEffect(T, L);
  }, gt.useLayoutEffect = function(T, L) {
    return Ce.current.useLayoutEffect(T, L);
  }, gt.useMemo = function(T, L) {
    return Ce.current.useMemo(T, L);
  }, gt.useReducer = function(T, L, ie) {
    return Ce.current.useReducer(T, L, ie);
  }, gt.useRef = function(T) {
    return Ce.current.useRef(T);
  }, gt.useState = function(T) {
    return Ce.current.useState(T);
  }, gt.useSyncExternalStore = function(T, L, ie) {
    return Ce.current.useSyncExternalStore(T, L, ie);
  }, gt.useTransition = function() {
    return Ce.current.useTransition();
  }, gt.version = "18.3.1", gt;
}
var Jp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Jp.exports;
var KR;
function K_() {
  return KR || (KR = 1, function(ne, re) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var j = "18.3.1", Ot = Symbol.for("react.element"), St = Symbol.for("react.portal"), bt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Et = Symbol.for("react.profiler"), de = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Ze = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), Ee = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), dt = Symbol.for("react.offscreen"), rt = Symbol.iterator, rn = "@@iterator";
      function at(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = rt && h[rt] || h[rn];
        return typeof C == "function" ? C : null;
      }
      var Qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ut = {
        transition: null
      }, be = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ot = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Be = {}, an = null;
      function Lt(h) {
        an = h;
      }
      Be.setExtraStackFrame = function(h) {
        an = h;
      }, Be.getCurrentStack = null, Be.getStackAddendum = function() {
        var h = "";
        an && (h += an);
        var C = Be.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var It = !1, Gt = !1, mt = !1, Le = !1, _t = !1, yt = {
        ReactCurrentDispatcher: Qe,
        ReactCurrentBatchConfig: ut,
        ReactCurrentOwner: ot
      };
      yt.ReactDebugCurrentFrame = Be, yt.ReactCurrentActQueue = be;
      function Ct(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          ee("warn", h, z);
        }
      }
      function Ce(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          ee("error", h, z);
        }
      }
      function ee(h, C, z) {
        {
          var H = yt.ReactDebugCurrentFrame, te = H.getStackAddendum();
          te !== "" && (C += "%s", z = z.concat([te]));
          var Ae = z.map(function(ue) {
            return String(ue);
          });
          Ae.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ae);
        }
      }
      var U = {};
      function P(h, C) {
        {
          var z = h.constructor, H = z && (z.displayName || z.name) || "ReactClass", te = H + "." + C;
          if (U[te])
            return;
          Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), U[te] = !0;
        }
      }
      var T = {
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
        enqueueForceUpdate: function(h, C, z) {
          P(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, z, H) {
          P(h, "replaceState");
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
        enqueueSetState: function(h, C, z, H) {
          P(h, "setState");
        }
      }, L = Object.assign, ie = {};
      Object.freeze(ie);
      function K(h, C, z) {
        this.props = h, this.context = C, this.refs = ie, this.updater = z || T;
      }
      K.prototype.isReactComponent = {}, K.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, K.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var De = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, _e = function(h, C) {
          Object.defineProperty(K.prototype, h, {
            get: function() {
              Ct("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var xe in De)
          De.hasOwnProperty(xe) && _e(xe, De[xe]);
      }
      function Ue() {
      }
      Ue.prototype = K.prototype;
      function $e(h, C, z) {
        this.props = h, this.context = C, this.refs = ie, this.updater = z || T;
      }
      var et = $e.prototype = new Ue();
      et.constructor = $e, L(et, K.prototype), et.isPureReactComponent = !0;
      function Bt() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var yn = Array.isArray;
      function gn(h) {
        return yn(h);
      }
      function Hn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Wt(h) {
        try {
          return Rn(h), !1;
        } catch {
          return !0;
        }
      }
      function Rn(h) {
        return "" + h;
      }
      function or(h) {
        if (Wt(h))
          return Ce("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(h)), Rn(h);
      }
      function Xr(h, C, z) {
        var H = h.displayName;
        if (H)
          return H;
        var te = C.displayName || C.name || "";
        return te !== "" ? z + "(" + te + ")" : z;
      }
      function On(h) {
        return h.displayName || "Context";
      }
      function Pn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ce("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case bt:
            return "Fragment";
          case St:
            return "Portal";
          case Et:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case Ee:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case pe:
              var C = h;
              return On(C) + ".Consumer";
            case de:
              var z = h;
              return On(z._context) + ".Provider";
            case Ze:
              return Xr(h, h.render, "ForwardRef");
            case ae:
              var H = h.displayName || null;
              return H !== null ? H : Pn(h.type) || "Memo";
            case We: {
              var te = h, Ae = te._payload, ue = te._init;
              try {
                return Pn(ue(Ae));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var fn = Object.prototype.hasOwnProperty, Mn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, sr, va, Tn;
      Tn = {};
      function Kn(h) {
        if (fn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function xr(h) {
        if (fn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Kr(h, C) {
        var z = function() {
          sr || (sr = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function Nt(h, C) {
        var z = function() {
          va || (va = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function Q(h) {
        if (typeof h.ref == "string" && ot.current && h.__self && ot.current.stateNode !== h.__self) {
          var C = Pn(ot.current.type);
          Tn[C] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Tn[C] = !0);
        }
      }
      var ve = function(h, C, z, H, te, Ae, ue) {
        var Pe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ot,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: ue,
          // Record the component responsible for creating this element.
          _owner: Ae
        };
        return Pe._store = {}, Object.defineProperty(Pe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Pe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(Pe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: te
        }), Object.freeze && (Object.freeze(Pe.props), Object.freeze(Pe)), Pe;
      };
      function je(h, C, z) {
        var H, te = {}, Ae = null, ue = null, Pe = null, vt = null;
        if (C != null) {
          Kn(C) && (ue = C.ref, Q(C)), xr(C) && (or(C.key), Ae = "" + C.key), Pe = C.__self === void 0 ? null : C.__self, vt = C.__source === void 0 ? null : C.__source;
          for (H in C)
            fn.call(C, H) && !Mn.hasOwnProperty(H) && (te[H] = C[H]);
        }
        var Dt = arguments.length - 2;
        if (Dt === 1)
          te.children = z;
        else if (Dt > 1) {
          for (var sn = Array(Dt), Zt = 0; Zt < Dt; Zt++)
            sn[Zt] = arguments[Zt + 2];
          Object.freeze && Object.freeze(sn), te.children = sn;
        }
        if (h && h.defaultProps) {
          var st = h.defaultProps;
          for (H in st)
            te[H] === void 0 && (te[H] = st[H]);
        }
        if (Ae || ue) {
          var Jt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ae && Kr(te, Jt), ue && Nt(te, Jt);
        }
        return ve(h, Ae, ue, Pe, vt, ot.current, te);
      }
      function zt(h, C) {
        var z = ve(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function Qt(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, te = L({}, h.props), Ae = h.key, ue = h.ref, Pe = h._self, vt = h._source, Dt = h._owner;
        if (C != null) {
          Kn(C) && (ue = C.ref, Dt = ot.current), xr(C) && (or(C.key), Ae = "" + C.key);
          var sn;
          h.type && h.type.defaultProps && (sn = h.type.defaultProps);
          for (H in C)
            fn.call(C, H) && !Mn.hasOwnProperty(H) && (C[H] === void 0 && sn !== void 0 ? te[H] = sn[H] : te[H] = C[H]);
        }
        var Zt = arguments.length - 2;
        if (Zt === 1)
          te.children = z;
        else if (Zt > 1) {
          for (var st = Array(Zt), Jt = 0; Jt < Zt; Jt++)
            st[Jt] = arguments[Jt + 2];
          te.children = st;
        }
        return ve(h.type, Ae, ue, Pe, vt, Dt, te);
      }
      function dn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ot;
      }
      var pn = ".", nr = ":";
      function un(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(te) {
          return z[te];
        });
        return "$" + H;
      }
      var Xt = !1, Kt = /\/+/g;
      function ha(h) {
        return h.replace(Kt, "$&/");
      }
      function br(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (or(h.key), un("" + h.key)) : C.toString(36);
      }
      function ka(h, C, z, H, te) {
        var Ae = typeof h;
        (Ae === "undefined" || Ae === "boolean") && (h = null);
        var ue = !1;
        if (h === null)
          ue = !0;
        else
          switch (Ae) {
            case "string":
            case "number":
              ue = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ot:
                case St:
                  ue = !0;
              }
          }
        if (ue) {
          var Pe = h, vt = te(Pe), Dt = H === "" ? pn + br(Pe, 0) : H;
          if (gn(vt)) {
            var sn = "";
            Dt != null && (sn = ha(Dt) + "/"), ka(vt, C, sn, "", function(Xf) {
              return Xf;
            });
          } else vt != null && (dn(vt) && (vt.key && (!Pe || Pe.key !== vt.key) && or(vt.key), vt = zt(
            vt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (vt.key && (!Pe || Pe.key !== vt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ha("" + vt.key) + "/"
            ) : "") + Dt
          )), C.push(vt));
          return 1;
        }
        var Zt, st, Jt = 0, wn = H === "" ? pn : H + nr;
        if (gn(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            Zt = h[Rl], st = wn + br(Zt, Rl), Jt += ka(Zt, C, z, st, te);
        else {
          var Xo = at(h);
          if (typeof Xo == "function") {
            var Bi = h;
            Xo === Bi.entries && (Xt || Ct("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xt = !0);
            for (var Ko = Xo.call(Bi), ou, Gf = 0; !(ou = Ko.next()).done; )
              Zt = ou.value, st = wn + br(Zt, Gf++), Jt += ka(Zt, C, z, st, te);
          } else if (Ae === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Jt;
      }
      function Hi(h, C, z) {
        if (h == null)
          return h;
        var H = [], te = 0;
        return ka(h, H, "", "", function(Ae) {
          return C.call(z, Ae, te++);
        }), H;
      }
      function Jl(h) {
        var C = 0;
        return Hi(h, function() {
          C++;
        }), C;
      }
      function eu(h, C, z) {
        Hi(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function pl(h) {
        return Hi(h, function(C) {
          return C;
        }) || [];
      }
      function vl(h) {
        if (!dn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function tu(h) {
        var C = {
          $$typeof: pe,
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
        C.Provider = {
          $$typeof: de,
          _context: C
        };
        var z = !1, H = !1, te = !1;
        {
          var Ae = {
            $$typeof: pe,
            _context: C
          };
          Object.defineProperties(Ae, {
            Provider: {
              get: function() {
                return H || (H = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ue) {
                C.Provider = ue;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ue) {
                C._currentValue = ue;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ue) {
                C._currentValue2 = ue;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ue) {
                C._threadCount = ue;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ue) {
                te || (Ct("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ue), te = !0);
              }
            }
          }), C.Consumer = Ae;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Mr = -1, Lr = 0, cr = 1, di = 2;
      function Xa(h) {
        if (h._status === Mr) {
          var C = h._result, z = C();
          if (z.then(function(Ae) {
            if (h._status === Lr || h._status === Mr) {
              var ue = h;
              ue._status = cr, ue._result = Ae;
            }
          }, function(Ae) {
            if (h._status === Lr || h._status === Mr) {
              var ue = h;
              ue._status = di, ue._result = Ae;
            }
          }), h._status === Mr) {
            var H = h;
            H._status = Lr, H._result = z;
          }
        }
        if (h._status === cr) {
          var te = h._result;
          return te === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, te), "default" in te || Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, te), te.default;
        } else
          throw h._result;
      }
      function pi(h) {
        var C = {
          // We use these fields to store the result.
          _status: Mr,
          _result: h
        }, z = {
          $$typeof: We,
          _payload: C,
          _init: Xa
        };
        {
          var H, te;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(Ae) {
                Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = Ae, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return te;
              },
              set: function(Ae) {
                Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), te = Ae, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function vi(h) {
        h != null && h.$$typeof === ae ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ce("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ze,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(H) {
              z = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Y(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === bt || h === Et || _t || h === S || h === J || h === Ee || Le || h === dt || It || Gt || mt || typeof h == "object" && h !== null && (h.$$typeof === We || h.$$typeof === ae || h.$$typeof === de || h.$$typeof === pe || h.$$typeof === Ze || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function oe(h, C) {
        Y(h) || Ce("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: ae,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(te) {
              H = te, !h.name && !h.displayName && (h.displayName = te);
            }
          });
        }
        return z;
      }
      function Se() {
        var h = Qe.current;
        return h === null && Ce(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function tt(h) {
        var C = Se();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ke(h) {
        var C = Se();
        return C.useState(h);
      }
      function pt(h, C, z) {
        var H = Se();
        return H.useReducer(h, C, z);
      }
      function ct(h) {
        var C = Se();
        return C.useRef(h);
      }
      function Ln(h, C) {
        var z = Se();
        return z.useEffect(h, C);
      }
      function on(h, C) {
        var z = Se();
        return z.useInsertionEffect(h, C);
      }
      function vn(h, C) {
        var z = Se();
        return z.useLayoutEffect(h, C);
      }
      function fr(h, C) {
        var z = Se();
        return z.useCallback(h, C);
      }
      function Ka(h, C) {
        var z = Se();
        return z.useMemo(h, C);
      }
      function qa(h, C, z) {
        var H = Se();
        return H.useImperativeHandle(h, C, z);
      }
      function nt(h, C) {
        {
          var z = Se();
          return z.useDebugValue(h, C);
        }
      }
      function lt() {
        var h = Se();
        return h.useTransition();
      }
      function Za(h) {
        var C = Se();
        return C.useDeferredValue(h);
      }
      function nu() {
        var h = Se();
        return h.useId();
      }
      function ru(h, C, z) {
        var H = Se();
        return H.useSyncExternalStore(h, C, z);
      }
      var hl = 0, Qu, ml, qr, Io, Nr, lc, uc;
      function Gu() {
      }
      Gu.__reactDisabledLog = !0;
      function yl() {
        {
          if (hl === 0) {
            Qu = console.log, ml = console.info, qr = console.warn, Io = console.error, Nr = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Gu,
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
          hl++;
        }
      }
      function ma() {
        {
          if (hl--, hl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: L({}, h, {
                value: Qu
              }),
              info: L({}, h, {
                value: ml
              }),
              warn: L({}, h, {
                value: qr
              }),
              error: L({}, h, {
                value: Io
              }),
              group: L({}, h, {
                value: Nr
              }),
              groupCollapsed: L({}, h, {
                value: lc
              }),
              groupEnd: L({}, h, {
                value: uc
              })
            });
          }
          hl < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ja = yt.ReactCurrentDispatcher, ei;
      function Xu(h, C, z) {
        {
          if (ei === void 0)
            try {
              throw Error();
            } catch (te) {
              var H = te.stack.trim().match(/\n( *(at )?)/);
              ei = H && H[1] || "";
            }
          return `
` + ei + h;
        }
      }
      var au = !1, gl;
      {
        var Ku = typeof WeakMap == "function" ? WeakMap : Map;
        gl = new Ku();
      }
      function qu(h, C) {
        if (!h || au)
          return "";
        {
          var z = gl.get(h);
          if (z !== void 0)
            return z;
        }
        var H;
        au = !0;
        var te = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ae;
        Ae = Ja.current, Ja.current = null, yl();
        try {
          if (C) {
            var ue = function() {
              throw Error();
            };
            if (Object.defineProperty(ue.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ue, []);
              } catch (wn) {
                H = wn;
              }
              Reflect.construct(h, [], ue);
            } else {
              try {
                ue.call();
              } catch (wn) {
                H = wn;
              }
              h.call(ue.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (wn) {
              H = wn;
            }
            h();
          }
        } catch (wn) {
          if (wn && H && typeof wn.stack == "string") {
            for (var Pe = wn.stack.split(`
`), vt = H.stack.split(`
`), Dt = Pe.length - 1, sn = vt.length - 1; Dt >= 1 && sn >= 0 && Pe[Dt] !== vt[sn]; )
              sn--;
            for (; Dt >= 1 && sn >= 0; Dt--, sn--)
              if (Pe[Dt] !== vt[sn]) {
                if (Dt !== 1 || sn !== 1)
                  do
                    if (Dt--, sn--, sn < 0 || Pe[Dt] !== vt[sn]) {
                      var Zt = `
` + Pe[Dt].replace(" at new ", " at ");
                      return h.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", h.displayName)), typeof h == "function" && gl.set(h, Zt), Zt;
                    }
                  while (Dt >= 1 && sn >= 0);
                break;
              }
          }
        } finally {
          au = !1, Ja.current = Ae, ma(), Error.prepareStackTrace = te;
        }
        var st = h ? h.displayName || h.name : "", Jt = st ? Xu(st) : "";
        return typeof h == "function" && gl.set(h, Jt), Jt;
      }
      function Pi(h, C, z) {
        return qu(h, !1);
      }
      function Wf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Vi(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return qu(h, Wf(h));
        if (typeof h == "string")
          return Xu(h);
        switch (h) {
          case J:
            return Xu("Suspense");
          case Ee:
            return Xu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ze:
              return Pi(h.render);
            case ae:
              return Vi(h.type, C, z);
            case We: {
              var H = h, te = H._payload, Ae = H._init;
              try {
                return Vi(Ae(te), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Ut = {}, Zu = yt.ReactDebugCurrentFrame;
      function kt(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Zu.setExtraStackFrame(z);
        } else
          Zu.setExtraStackFrame(null);
      }
      function Wo(h, C, z, H, te) {
        {
          var Ae = Function.call.bind(fn);
          for (var ue in h)
            if (Ae(h, ue)) {
              var Pe = void 0;
              try {
                if (typeof h[ue] != "function") {
                  var vt = Error((H || "React class") + ": " + z + " type `" + ue + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ue] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw vt.name = "Invariant Violation", vt;
                }
                Pe = h[ue](C, ue, H, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Dt) {
                Pe = Dt;
              }
              Pe && !(Pe instanceof Error) && (kt(te), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", z, ue, typeof Pe), kt(null)), Pe instanceof Error && !(Pe.message in Ut) && (Ut[Pe.message] = !0, kt(te), Ce("Failed %s type: %s", z, Pe.message), kt(null));
            }
        }
      }
      function hi(h) {
        if (h) {
          var C = h._owner, z = Vi(h.type, h._source, C ? C.type : null);
          Lt(z);
        } else
          Lt(null);
      }
      var Xe;
      Xe = !1;
      function Ju() {
        if (ot.current) {
          var h = Pn(ot.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function dr(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function mi(h) {
        return h != null ? dr(h.__source) : "";
      }
      var zr = {};
      function yi(h) {
        var C = Ju();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function hn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = yi(C);
          if (!zr[z]) {
            zr[z] = !0;
            var H = "";
            h && h._owner && h._owner !== ot.current && (H = " It was passed a child from " + Pn(h._owner.type) + "."), hi(h), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, H), hi(null);
          }
        }
      }
      function qt(h, C) {
        if (typeof h == "object") {
          if (gn(h))
            for (var z = 0; z < h.length; z++) {
              var H = h[z];
              dn(H) && hn(H, C);
            }
          else if (dn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var te = at(h);
            if (typeof te == "function" && te !== h.entries)
              for (var Ae = te.call(h), ue; !(ue = Ae.next()).done; )
                dn(ue.value) && hn(ue.value, C);
          }
        }
      }
      function Sl(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Ze || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ae))
            z = C.propTypes;
          else
            return;
          if (z) {
            var H = Pn(C);
            Wo(z, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !Xe) {
            Xe = !0;
            var te = Pn(C);
            Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", te || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function qn(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var H = C[z];
            if (H !== "children" && H !== "key") {
              hi(h), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), hi(null);
              break;
            }
          }
          h.ref !== null && (hi(h), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), hi(null));
        }
      }
      function Ur(h, C, z) {
        var H = Y(h);
        if (!H) {
          var te = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = mi(C);
          Ae ? te += Ae : te += Ju();
          var ue;
          h === null ? ue = "null" : gn(h) ? ue = "array" : h !== void 0 && h.$$typeof === Ot ? (ue = "<" + (Pn(h.type) || "Unknown") + " />", te = " Did you accidentally export a JSX literal instead of a component?") : ue = typeof h, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ue, te);
        }
        var Pe = je.apply(this, arguments);
        if (Pe == null)
          return Pe;
        if (H)
          for (var vt = 2; vt < arguments.length; vt++)
            qt(arguments[vt], h);
        return h === bt ? qn(Pe) : Sl(Pe), Pe;
      }
      var Da = !1;
      function iu(h) {
        var C = Ur.bind(null, h);
        return C.type = h, Da || (Da = !0, Ct("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ct("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Qo(h, C, z) {
        for (var H = Qt.apply(this, arguments), te = 2; te < arguments.length; te++)
          qt(arguments[te], H.type);
        return Sl(H), H;
      }
      function Go(h, C) {
        var z = ut.transition;
        ut.transition = {};
        var H = ut.transition;
        ut.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ut.transition = z, z === null && H._updatedFibers) {
            var te = H._updatedFibers.size;
            te > 10 && Ct("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var El = !1, lu = null;
      function Qf(h) {
        if (lu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = ne && ne[C];
            lu = z.call(ne, "timers").setImmediate;
          } catch {
            lu = function(te) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && Ce("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ae = new MessageChannel();
              Ae.port1.onmessage = te, Ae.port2.postMessage(void 0);
            };
          }
        return lu(h);
      }
      var Oa = 0, ti = !1;
      function gi(h) {
        {
          var C = Oa;
          Oa++, be.current === null && (be.current = []);
          var z = be.isBatchingLegacy, H;
          try {
            if (be.isBatchingLegacy = !0, H = h(), !z && be.didScheduleLegacyUpdate) {
              var te = be.current;
              te !== null && (be.didScheduleLegacyUpdate = !1, Cl(te));
            }
          } catch (st) {
            throw Ma(C), st;
          } finally {
            be.isBatchingLegacy = z;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var Ae = H, ue = !1, Pe = {
              then: function(st, Jt) {
                ue = !0, Ae.then(function(wn) {
                  Ma(C), Oa === 0 ? eo(wn, st, Jt) : st(wn);
                }, function(wn) {
                  Ma(C), Jt(wn);
                });
              }
            };
            return !ti && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ue || (ti = !0, Ce("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Pe;
          } else {
            var vt = H;
            if (Ma(C), Oa === 0) {
              var Dt = be.current;
              Dt !== null && (Cl(Dt), be.current = null);
              var sn = {
                then: function(st, Jt) {
                  be.current === null ? (be.current = [], eo(vt, st, Jt)) : st(vt);
                }
              };
              return sn;
            } else {
              var Zt = {
                then: function(st, Jt) {
                  st(vt);
                }
              };
              return Zt;
            }
          }
        }
      }
      function Ma(h) {
        h !== Oa - 1 && Ce("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function eo(h, C, z) {
        {
          var H = be.current;
          if (H !== null)
            try {
              Cl(H), Qf(function() {
                H.length === 0 ? (be.current = null, C(h)) : eo(h, C, z);
              });
            } catch (te) {
              z(te);
            }
          else
            C(h);
        }
      }
      var to = !1;
      function Cl(h) {
        if (!to) {
          to = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            to = !1;
          }
        }
      }
      var uu = Ur, no = Qo, ro = iu, ni = {
        map: Hi,
        forEach: eu,
        count: Jl,
        toArray: pl,
        only: vl
      };
      re.Children = ni, re.Component = K, re.Fragment = bt, re.Profiler = Et, re.PureComponent = $e, re.StrictMode = S, re.Suspense = J, re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yt, re.act = gi, re.cloneElement = no, re.createContext = tu, re.createElement = uu, re.createFactory = ro, re.createRef = Bt, re.forwardRef = vi, re.isValidElement = dn, re.lazy = pi, re.memo = oe, re.startTransition = Go, re.unstable_act = gi, re.useCallback = fr, re.useContext = tt, re.useDebugValue = nt, re.useDeferredValue = Za, re.useEffect = Ln, re.useId = nu, re.useImperativeHandle = qa, re.useInsertionEffect = on, re.useLayoutEffect = vn, re.useMemo = Ka, re.useReducer = pt, re.useRef = ct, re.useState = Ke, re.useSyncExternalStore = ru, re.useTransition = lt, re.version = j, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
process.env.NODE_ENV === "production" ? dE.exports = X_() : dE.exports = K_();
var Cn = dE.exports;
const q_ = /* @__PURE__ */ G_(Cn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qR;
function Z_() {
  if (qR) return qp;
  qR = 1;
  var ne = Cn, re = Symbol.for("react.element"), j = Symbol.for("react.fragment"), Ot = Object.prototype.hasOwnProperty, St = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, bt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(Et, de, pe) {
    var Ze, J = {}, Ee = null, ae = null;
    pe !== void 0 && (Ee = "" + pe), de.key !== void 0 && (Ee = "" + de.key), de.ref !== void 0 && (ae = de.ref);
    for (Ze in de) Ot.call(de, Ze) && !bt.hasOwnProperty(Ze) && (J[Ze] = de[Ze]);
    if (Et && Et.defaultProps) for (Ze in de = Et.defaultProps, de) J[Ze] === void 0 && (J[Ze] = de[Ze]);
    return { $$typeof: re, type: Et, key: Ee, ref: ae, props: J, _owner: St.current };
  }
  return qp.Fragment = j, qp.jsx = S, qp.jsxs = S, qp;
}
var Zp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function J_() {
  return ZR || (ZR = 1, process.env.NODE_ENV !== "production" && function() {
    var ne = Cn, re = Symbol.for("react.element"), j = Symbol.for("react.portal"), Ot = Symbol.for("react.fragment"), St = Symbol.for("react.strict_mode"), bt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Et = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), Ze = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), ae = Symbol.for("react.offscreen"), We = Symbol.iterator, dt = "@@iterator";
    function rt(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = We && R[We] || R[dt];
      return typeof Y == "function" ? Y : null;
    }
    var rn = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function at(R) {
      {
        for (var Y = arguments.length, oe = new Array(Y > 1 ? Y - 1 : 0), Se = 1; Se < Y; Se++)
          oe[Se - 1] = arguments[Se];
        Qe("error", R, oe);
      }
    }
    function Qe(R, Y, oe) {
      {
        var Se = rn.ReactDebugCurrentFrame, tt = Se.getStackAddendum();
        tt !== "" && (Y += "%s", oe = oe.concat([tt]));
        var Ke = oe.map(function(pt) {
          return String(pt);
        });
        Ke.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, Ke);
      }
    }
    var ut = !1, be = !1, ot = !1, Be = !1, an = !1, Lt;
    Lt = Symbol.for("react.module.reference");
    function It(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ot || R === bt || an || R === St || R === pe || R === Ze || Be || R === ae || ut || be || ot || typeof R == "object" && R !== null && (R.$$typeof === Ee || R.$$typeof === J || R.$$typeof === S || R.$$typeof === Et || R.$$typeof === de || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Lt || R.getModuleId !== void 0));
    }
    function Gt(R, Y, oe) {
      var Se = R.displayName;
      if (Se)
        return Se;
      var tt = Y.displayName || Y.name || "";
      return tt !== "" ? oe + "(" + tt + ")" : oe;
    }
    function mt(R) {
      return R.displayName || "Context";
    }
    function Le(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && at("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ot:
          return "Fragment";
        case j:
          return "Portal";
        case bt:
          return "Profiler";
        case St:
          return "StrictMode";
        case pe:
          return "Suspense";
        case Ze:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Et:
            var Y = R;
            return mt(Y) + ".Consumer";
          case S:
            var oe = R;
            return mt(oe._context) + ".Provider";
          case de:
            return Gt(R, R.render, "ForwardRef");
          case J:
            var Se = R.displayName || null;
            return Se !== null ? Se : Le(R.type) || "Memo";
          case Ee: {
            var tt = R, Ke = tt._payload, pt = tt._init;
            try {
              return Le(pt(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _t = Object.assign, yt = 0, Ct, Ce, ee, U, P, T, L;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function K() {
      {
        if (yt === 0) {
          Ct = console.log, Ce = console.info, ee = console.warn, U = console.error, P = console.group, T = console.groupCollapsed, L = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        yt++;
      }
    }
    function De() {
      {
        if (yt--, yt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _t({}, R, {
              value: Ct
            }),
            info: _t({}, R, {
              value: Ce
            }),
            warn: _t({}, R, {
              value: ee
            }),
            error: _t({}, R, {
              value: U
            }),
            group: _t({}, R, {
              value: P
            }),
            groupCollapsed: _t({}, R, {
              value: T
            }),
            groupEnd: _t({}, R, {
              value: L
            })
          });
        }
        yt < 0 && at("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _e = rn.ReactCurrentDispatcher, xe;
    function Ue(R, Y, oe) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (tt) {
            var Se = tt.stack.trim().match(/\n( *(at )?)/);
            xe = Se && Se[1] || "";
          }
        return `
` + xe + R;
      }
    }
    var $e = !1, et;
    {
      var Bt = typeof WeakMap == "function" ? WeakMap : Map;
      et = new Bt();
    }
    function yn(R, Y) {
      if (!R || $e)
        return "";
      {
        var oe = et.get(R);
        if (oe !== void 0)
          return oe;
      }
      var Se;
      $e = !0;
      var tt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      Ke = _e.current, _e.current = null, K();
      try {
        if (Y) {
          var pt = function() {
            throw Error();
          };
          if (Object.defineProperty(pt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pt, []);
            } catch (nt) {
              Se = nt;
            }
            Reflect.construct(R, [], pt);
          } else {
            try {
              pt.call();
            } catch (nt) {
              Se = nt;
            }
            R.call(pt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (nt) {
            Se = nt;
          }
          R();
        }
      } catch (nt) {
        if (nt && Se && typeof nt.stack == "string") {
          for (var ct = nt.stack.split(`
`), Ln = Se.stack.split(`
`), on = ct.length - 1, vn = Ln.length - 1; on >= 1 && vn >= 0 && ct[on] !== Ln[vn]; )
            vn--;
          for (; on >= 1 && vn >= 0; on--, vn--)
            if (ct[on] !== Ln[vn]) {
              if (on !== 1 || vn !== 1)
                do
                  if (on--, vn--, vn < 0 || ct[on] !== Ln[vn]) {
                    var fr = `
` + ct[on].replace(" at new ", " at ");
                    return R.displayName && fr.includes("<anonymous>") && (fr = fr.replace("<anonymous>", R.displayName)), typeof R == "function" && et.set(R, fr), fr;
                  }
                while (on >= 1 && vn >= 0);
              break;
            }
        }
      } finally {
        $e = !1, _e.current = Ke, De(), Error.prepareStackTrace = tt;
      }
      var Ka = R ? R.displayName || R.name : "", qa = Ka ? Ue(Ka) : "";
      return typeof R == "function" && et.set(R, qa), qa;
    }
    function gn(R, Y, oe) {
      return yn(R, !1);
    }
    function Hn(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Wt(R, Y, oe) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return yn(R, Hn(R));
      if (typeof R == "string")
        return Ue(R);
      switch (R) {
        case pe:
          return Ue("Suspense");
        case Ze:
          return Ue("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case de:
            return gn(R.render);
          case J:
            return Wt(R.type, Y, oe);
          case Ee: {
            var Se = R, tt = Se._payload, Ke = Se._init;
            try {
              return Wt(Ke(tt), Y, oe);
            } catch {
            }
          }
        }
      return "";
    }
    var Rn = Object.prototype.hasOwnProperty, or = {}, Xr = rn.ReactDebugCurrentFrame;
    function On(R) {
      if (R) {
        var Y = R._owner, oe = Wt(R.type, R._source, Y ? Y.type : null);
        Xr.setExtraStackFrame(oe);
      } else
        Xr.setExtraStackFrame(null);
    }
    function Pn(R, Y, oe, Se, tt) {
      {
        var Ke = Function.call.bind(Rn);
        for (var pt in R)
          if (Ke(R, pt)) {
            var ct = void 0;
            try {
              if (typeof R[pt] != "function") {
                var Ln = Error((Se || "React class") + ": " + oe + " type `" + pt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[pt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              ct = R[pt](Y, pt, Se, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              ct = on;
            }
            ct && !(ct instanceof Error) && (On(tt), at("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Se || "React class", oe, pt, typeof ct), On(null)), ct instanceof Error && !(ct.message in or) && (or[ct.message] = !0, On(tt), at("Failed %s type: %s", oe, ct.message), On(null));
          }
      }
    }
    var fn = Array.isArray;
    function Mn(R) {
      return fn(R);
    }
    function sr(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, oe = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return oe;
      }
    }
    function va(R) {
      try {
        return Tn(R), !1;
      } catch {
        return !0;
      }
    }
    function Tn(R) {
      return "" + R;
    }
    function Kn(R) {
      if (va(R))
        return at("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(R)), Tn(R);
    }
    var xr = rn.ReactCurrentOwner, Kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Nt, Q;
    function ve(R) {
      if (Rn.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function je(R) {
      if (Rn.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function zt(R, Y) {
      typeof R.ref == "string" && xr.current;
    }
    function Qt(R, Y) {
      {
        var oe = function() {
          Nt || (Nt = !0, at("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        oe.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: oe,
          configurable: !0
        });
      }
    }
    function dn(R, Y) {
      {
        var oe = function() {
          Q || (Q = !0, at("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        oe.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: oe,
          configurable: !0
        });
      }
    }
    var pn = function(R, Y, oe, Se, tt, Ke, pt) {
      var ct = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: re,
        // Built-in properties that belong on the element
        type: R,
        key: Y,
        ref: oe,
        props: pt,
        // Record the component responsible for creating this element.
        _owner: Ke
      };
      return ct._store = {}, Object.defineProperty(ct._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ct, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.defineProperty(ct, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: tt
      }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
    };
    function nr(R, Y, oe, Se, tt) {
      {
        var Ke, pt = {}, ct = null, Ln = null;
        oe !== void 0 && (Kn(oe), ct = "" + oe), je(Y) && (Kn(Y.key), ct = "" + Y.key), ve(Y) && (Ln = Y.ref, zt(Y, tt));
        for (Ke in Y)
          Rn.call(Y, Ke) && !Kr.hasOwnProperty(Ke) && (pt[Ke] = Y[Ke]);
        if (R && R.defaultProps) {
          var on = R.defaultProps;
          for (Ke in on)
            pt[Ke] === void 0 && (pt[Ke] = on[Ke]);
        }
        if (ct || Ln) {
          var vn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ct && Qt(pt, vn), Ln && dn(pt, vn);
        }
        return pn(R, ct, Ln, tt, Se, xr.current, pt);
      }
    }
    var un = rn.ReactCurrentOwner, Xt = rn.ReactDebugCurrentFrame;
    function Kt(R) {
      if (R) {
        var Y = R._owner, oe = Wt(R.type, R._source, Y ? Y.type : null);
        Xt.setExtraStackFrame(oe);
      } else
        Xt.setExtraStackFrame(null);
    }
    var ha;
    ha = !1;
    function br(R) {
      return typeof R == "object" && R !== null && R.$$typeof === re;
    }
    function ka() {
      {
        if (un.current) {
          var R = Le(un.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Hi(R) {
      return "";
    }
    var Jl = {};
    function eu(R) {
      {
        var Y = ka();
        if (!Y) {
          var oe = typeof R == "string" ? R : R.displayName || R.name;
          oe && (Y = `

Check the top-level render call using <` + oe + ">.");
        }
        return Y;
      }
    }
    function pl(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var oe = eu(Y);
        if (Jl[oe])
          return;
        Jl[oe] = !0;
        var Se = "";
        R && R._owner && R._owner !== un.current && (Se = " It was passed a child from " + Le(R._owner.type) + "."), Kt(R), at('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, Se), Kt(null);
      }
    }
    function vl(R, Y) {
      {
        if (typeof R != "object")
          return;
        if (Mn(R))
          for (var oe = 0; oe < R.length; oe++) {
            var Se = R[oe];
            br(Se) && pl(Se, Y);
          }
        else if (br(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var tt = rt(R);
          if (typeof tt == "function" && tt !== R.entries)
            for (var Ke = tt.call(R), pt; !(pt = Ke.next()).done; )
              br(pt.value) && pl(pt.value, Y);
        }
      }
    }
    function tu(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var oe;
        if (typeof Y == "function")
          oe = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === de || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === J))
          oe = Y.propTypes;
        else
          return;
        if (oe) {
          var Se = Le(Y);
          Pn(oe, R.props, "prop", Se, R);
        } else if (Y.PropTypes !== void 0 && !ha) {
          ha = !0;
          var tt = Le(Y);
          at("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", tt || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && at("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mr(R) {
      {
        for (var Y = Object.keys(R.props), oe = 0; oe < Y.length; oe++) {
          var Se = Y[oe];
          if (Se !== "children" && Se !== "key") {
            Kt(R), at("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Se), Kt(null);
            break;
          }
        }
        R.ref !== null && (Kt(R), at("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
      }
    }
    var Lr = {};
    function cr(R, Y, oe, Se, tt, Ke) {
      {
        var pt = It(R);
        if (!pt) {
          var ct = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ct += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = Hi();
          Ln ? ct += Ln : ct += ka();
          var on;
          R === null ? on = "null" : Mn(R) ? on = "array" : R !== void 0 && R.$$typeof === re ? (on = "<" + (Le(R.type) || "Unknown") + " />", ct = " Did you accidentally export a JSX literal instead of a component?") : on = typeof R, at("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, ct);
        }
        var vn = nr(R, Y, oe, tt, Ke);
        if (vn == null)
          return vn;
        if (pt) {
          var fr = Y.children;
          if (fr !== void 0)
            if (Se)
              if (Mn(fr)) {
                for (var Ka = 0; Ka < fr.length; Ka++)
                  vl(fr[Ka], R);
                Object.freeze && Object.freeze(fr);
              } else
                at("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vl(fr, R);
        }
        if (Rn.call(Y, "key")) {
          var qa = Le(R), nt = Object.keys(Y).filter(function(nu) {
            return nu !== "key";
          }), lt = nt.length > 0 ? "{key: someKey, " + nt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Lr[qa + lt]) {
            var Za = nt.length > 0 ? "{" + nt.join(": ..., ") + ": ...}" : "{}";
            at(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, lt, qa, Za, qa), Lr[qa + lt] = !0;
          }
        }
        return R === Ot ? Mr(vn) : tu(vn), vn;
      }
    }
    function di(R, Y, oe) {
      return cr(R, Y, oe, !0);
    }
    function Xa(R, Y, oe) {
      return cr(R, Y, oe, !1);
    }
    var pi = Xa, vi = di;
    Zp.Fragment = Ot, Zp.jsx = pi, Zp.jsxs = vi;
  }()), Zp;
}
process.env.NODE_ENV === "production" ? fE.exports = Z_() : fE.exports = J_();
var Vt = fE.exports, pE = { exports: {} }, Qa = {}, Im = { exports: {} }, sE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function ek() {
  return JR || (JR = 1, function(ne) {
    function re(ee, U) {
      var P = ee.length;
      ee.push(U);
      e: for (; 0 < P; ) {
        var T = P - 1 >>> 1, L = ee[T];
        if (0 < St(L, U)) ee[T] = U, ee[P] = L, P = T;
        else break e;
      }
    }
    function j(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function Ot(ee) {
      if (ee.length === 0) return null;
      var U = ee[0], P = ee.pop();
      if (P !== U) {
        ee[0] = P;
        e: for (var T = 0, L = ee.length, ie = L >>> 1; T < ie; ) {
          var K = 2 * (T + 1) - 1, De = ee[K], _e = K + 1, xe = ee[_e];
          if (0 > St(De, P)) _e < L && 0 > St(xe, De) ? (ee[T] = xe, ee[_e] = P, T = _e) : (ee[T] = De, ee[K] = P, T = K);
          else if (_e < L && 0 > St(xe, P)) ee[T] = xe, ee[_e] = P, T = _e;
          else break e;
        }
      }
      return U;
    }
    function St(ee, U) {
      var P = ee.sortIndex - U.sortIndex;
      return P !== 0 ? P : ee.id - U.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var bt = performance;
      ne.unstable_now = function() {
        return bt.now();
      };
    } else {
      var S = Date, Et = S.now();
      ne.unstable_now = function() {
        return S.now() - Et;
      };
    }
    var de = [], pe = [], Ze = 1, J = null, Ee = 3, ae = !1, We = !1, dt = !1, rt = typeof setTimeout == "function" ? setTimeout : null, rn = typeof clearTimeout == "function" ? clearTimeout : null, at = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Qe(ee) {
      for (var U = j(pe); U !== null; ) {
        if (U.callback === null) Ot(pe);
        else if (U.startTime <= ee) Ot(pe), U.sortIndex = U.expirationTime, re(de, U);
        else break;
        U = j(pe);
      }
    }
    function ut(ee) {
      if (dt = !1, Qe(ee), !We) if (j(de) !== null) We = !0, Ct(be);
      else {
        var U = j(pe);
        U !== null && Ce(ut, U.startTime - ee);
      }
    }
    function be(ee, U) {
      We = !1, dt && (dt = !1, rn(an), an = -1), ae = !0;
      var P = Ee;
      try {
        for (Qe(U), J = j(de); J !== null && (!(J.expirationTime > U) || ee && !Gt()); ) {
          var T = J.callback;
          if (typeof T == "function") {
            J.callback = null, Ee = J.priorityLevel;
            var L = T(J.expirationTime <= U);
            U = ne.unstable_now(), typeof L == "function" ? J.callback = L : J === j(de) && Ot(de), Qe(U);
          } else Ot(de);
          J = j(de);
        }
        if (J !== null) var ie = !0;
        else {
          var K = j(pe);
          K !== null && Ce(ut, K.startTime - U), ie = !1;
        }
        return ie;
      } finally {
        J = null, Ee = P, ae = !1;
      }
    }
    var ot = !1, Be = null, an = -1, Lt = 5, It = -1;
    function Gt() {
      return !(ne.unstable_now() - It < Lt);
    }
    function mt() {
      if (Be !== null) {
        var ee = ne.unstable_now();
        It = ee;
        var U = !0;
        try {
          U = Be(!0, ee);
        } finally {
          U ? Le() : (ot = !1, Be = null);
        }
      } else ot = !1;
    }
    var Le;
    if (typeof at == "function") Le = function() {
      at(mt);
    };
    else if (typeof MessageChannel < "u") {
      var _t = new MessageChannel(), yt = _t.port2;
      _t.port1.onmessage = mt, Le = function() {
        yt.postMessage(null);
      };
    } else Le = function() {
      rt(mt, 0);
    };
    function Ct(ee) {
      Be = ee, ot || (ot = !0, Le());
    }
    function Ce(ee, U) {
      an = rt(function() {
        ee(ne.unstable_now());
      }, U);
    }
    ne.unstable_IdlePriority = 5, ne.unstable_ImmediatePriority = 1, ne.unstable_LowPriority = 4, ne.unstable_NormalPriority = 3, ne.unstable_Profiling = null, ne.unstable_UserBlockingPriority = 2, ne.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, ne.unstable_continueExecution = function() {
      We || ae || (We = !0, Ct(be));
    }, ne.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Lt = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, ne.unstable_getCurrentPriorityLevel = function() {
      return Ee;
    }, ne.unstable_getFirstCallbackNode = function() {
      return j(de);
    }, ne.unstable_next = function(ee) {
      switch (Ee) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = Ee;
      }
      var P = Ee;
      Ee = U;
      try {
        return ee();
      } finally {
        Ee = P;
      }
    }, ne.unstable_pauseExecution = function() {
    }, ne.unstable_requestPaint = function() {
    }, ne.unstable_runWithPriority = function(ee, U) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var P = Ee;
      Ee = ee;
      try {
        return U();
      } finally {
        Ee = P;
      }
    }, ne.unstable_scheduleCallback = function(ee, U, P) {
      var T = ne.unstable_now();
      switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? T + P : T) : P = T, ee) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return L = P + L, ee = { id: Ze++, callback: U, priorityLevel: ee, startTime: P, expirationTime: L, sortIndex: -1 }, P > T ? (ee.sortIndex = P, re(pe, ee), j(de) === null && ee === j(pe) && (dt ? (rn(an), an = -1) : dt = !0, Ce(ut, P - T))) : (ee.sortIndex = L, re(de, ee), We || ae || (We = !0, Ct(be))), ee;
    }, ne.unstable_shouldYield = Gt, ne.unstable_wrapCallback = function(ee) {
      var U = Ee;
      return function() {
        var P = Ee;
        Ee = U;
        try {
          return ee.apply(this, arguments);
        } finally {
          Ee = P;
        }
      };
    };
  }(sE)), sE;
}
var cE = {};
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
function tk() {
  return eT || (eT = 1, function(ne) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var re = !1, j = 5;
      function Ot(Q, ve) {
        var je = Q.length;
        Q.push(ve), S(Q, ve, je);
      }
      function St(Q) {
        return Q.length === 0 ? null : Q[0];
      }
      function bt(Q) {
        if (Q.length === 0)
          return null;
        var ve = Q[0], je = Q.pop();
        return je !== ve && (Q[0] = je, Et(Q, je, 0)), ve;
      }
      function S(Q, ve, je) {
        for (var zt = je; zt > 0; ) {
          var Qt = zt - 1 >>> 1, dn = Q[Qt];
          if (de(dn, ve) > 0)
            Q[Qt] = ve, Q[zt] = dn, zt = Qt;
          else
            return;
        }
      }
      function Et(Q, ve, je) {
        for (var zt = je, Qt = Q.length, dn = Qt >>> 1; zt < dn; ) {
          var pn = (zt + 1) * 2 - 1, nr = Q[pn], un = pn + 1, Xt = Q[un];
          if (de(nr, ve) < 0)
            un < Qt && de(Xt, nr) < 0 ? (Q[zt] = Xt, Q[un] = ve, zt = un) : (Q[zt] = nr, Q[pn] = ve, zt = pn);
          else if (un < Qt && de(Xt, ve) < 0)
            Q[zt] = Xt, Q[un] = ve, zt = un;
          else
            return;
        }
      }
      function de(Q, ve) {
        var je = Q.sortIndex - ve.sortIndex;
        return je !== 0 ? je : Q.id - ve.id;
      }
      var pe = 1, Ze = 2, J = 3, Ee = 4, ae = 5;
      function We(Q, ve) {
      }
      var dt = typeof performance == "object" && typeof performance.now == "function";
      if (dt) {
        var rt = performance;
        ne.unstable_now = function() {
          return rt.now();
        };
      } else {
        var rn = Date, at = rn.now();
        ne.unstable_now = function() {
          return rn.now() - at;
        };
      }
      var Qe = 1073741823, ut = -1, be = 250, ot = 5e3, Be = 1e4, an = Qe, Lt = [], It = [], Gt = 1, mt = null, Le = J, _t = !1, yt = !1, Ct = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function P(Q) {
        for (var ve = St(It); ve !== null; ) {
          if (ve.callback === null)
            bt(It);
          else if (ve.startTime <= Q)
            bt(It), ve.sortIndex = ve.expirationTime, Ot(Lt, ve);
          else
            return;
          ve = St(It);
        }
      }
      function T(Q) {
        if (Ct = !1, P(Q), !yt)
          if (St(Lt) !== null)
            yt = !0, Tn(L);
          else {
            var ve = St(It);
            ve !== null && Kn(T, ve.startTime - Q);
          }
      }
      function L(Q, ve) {
        yt = !1, Ct && (Ct = !1, xr()), _t = !0;
        var je = Le;
        try {
          var zt;
          if (!re) return ie(Q, ve);
        } finally {
          mt = null, Le = je, _t = !1;
        }
      }
      function ie(Q, ve) {
        var je = ve;
        for (P(je), mt = St(Lt); mt !== null && !(mt.expirationTime > je && (!Q || Xr())); ) {
          var zt = mt.callback;
          if (typeof zt == "function") {
            mt.callback = null, Le = mt.priorityLevel;
            var Qt = mt.expirationTime <= je, dn = zt(Qt);
            je = ne.unstable_now(), typeof dn == "function" ? mt.callback = dn : mt === St(Lt) && bt(Lt), P(je);
          } else
            bt(Lt);
          mt = St(Lt);
        }
        if (mt !== null)
          return !0;
        var pn = St(It);
        return pn !== null && Kn(T, pn.startTime - je), !1;
      }
      function K(Q, ve) {
        switch (Q) {
          case pe:
          case Ze:
          case J:
          case Ee:
          case ae:
            break;
          default:
            Q = J;
        }
        var je = Le;
        Le = Q;
        try {
          return ve();
        } finally {
          Le = je;
        }
      }
      function De(Q) {
        var ve;
        switch (Le) {
          case pe:
          case Ze:
          case J:
            ve = J;
            break;
          default:
            ve = Le;
            break;
        }
        var je = Le;
        Le = ve;
        try {
          return Q();
        } finally {
          Le = je;
        }
      }
      function _e(Q) {
        var ve = Le;
        return function() {
          var je = Le;
          Le = ve;
          try {
            return Q.apply(this, arguments);
          } finally {
            Le = je;
          }
        };
      }
      function xe(Q, ve, je) {
        var zt = ne.unstable_now(), Qt;
        if (typeof je == "object" && je !== null) {
          var dn = je.delay;
          typeof dn == "number" && dn > 0 ? Qt = zt + dn : Qt = zt;
        } else
          Qt = zt;
        var pn;
        switch (Q) {
          case pe:
            pn = ut;
            break;
          case Ze:
            pn = be;
            break;
          case ae:
            pn = an;
            break;
          case Ee:
            pn = Be;
            break;
          case J:
          default:
            pn = ot;
            break;
        }
        var nr = Qt + pn, un = {
          id: Gt++,
          callback: ve,
          priorityLevel: Q,
          startTime: Qt,
          expirationTime: nr,
          sortIndex: -1
        };
        return Qt > zt ? (un.sortIndex = Qt, Ot(It, un), St(Lt) === null && un === St(It) && (Ct ? xr() : Ct = !0, Kn(T, Qt - zt))) : (un.sortIndex = nr, Ot(Lt, un), !yt && !_t && (yt = !0, Tn(L))), un;
      }
      function Ue() {
      }
      function $e() {
        !yt && !_t && (yt = !0, Tn(L));
      }
      function et() {
        return St(Lt);
      }
      function Bt(Q) {
        Q.callback = null;
      }
      function yn() {
        return Le;
      }
      var gn = !1, Hn = null, Wt = -1, Rn = j, or = -1;
      function Xr() {
        var Q = ne.unstable_now() - or;
        return !(Q < Rn);
      }
      function On() {
      }
      function Pn(Q) {
        if (Q < 0 || Q > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Q > 0 ? Rn = Math.floor(1e3 / Q) : Rn = j;
      }
      var fn = function() {
        if (Hn !== null) {
          var Q = ne.unstable_now();
          or = Q;
          var ve = !0, je = !0;
          try {
            je = Hn(ve, Q);
          } finally {
            je ? Mn() : (gn = !1, Hn = null);
          }
        } else
          gn = !1;
      }, Mn;
      if (typeof U == "function")
        Mn = function() {
          U(fn);
        };
      else if (typeof MessageChannel < "u") {
        var sr = new MessageChannel(), va = sr.port2;
        sr.port1.onmessage = fn, Mn = function() {
          va.postMessage(null);
        };
      } else
        Mn = function() {
          Ce(fn, 0);
        };
      function Tn(Q) {
        Hn = Q, gn || (gn = !0, Mn());
      }
      function Kn(Q, ve) {
        Wt = Ce(function() {
          Q(ne.unstable_now());
        }, ve);
      }
      function xr() {
        ee(Wt), Wt = -1;
      }
      var Kr = On, Nt = null;
      ne.unstable_IdlePriority = ae, ne.unstable_ImmediatePriority = pe, ne.unstable_LowPriority = Ee, ne.unstable_NormalPriority = J, ne.unstable_Profiling = Nt, ne.unstable_UserBlockingPriority = Ze, ne.unstable_cancelCallback = Bt, ne.unstable_continueExecution = $e, ne.unstable_forceFrameRate = Pn, ne.unstable_getCurrentPriorityLevel = yn, ne.unstable_getFirstCallbackNode = et, ne.unstable_next = De, ne.unstable_pauseExecution = Ue, ne.unstable_requestPaint = Kr, ne.unstable_runWithPriority = K, ne.unstable_scheduleCallback = xe, ne.unstable_shouldYield = Xr, ne.unstable_wrapCallback = _e, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(cE)), cE;
}
var tT;
function iT() {
  return tT || (tT = 1, process.env.NODE_ENV === "production" ? Im.exports = ek() : Im.exports = tk()), Im.exports;
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
function nk() {
  if (nT) return Qa;
  nT = 1;
  var ne = Cn, re = iT();
  function j(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ot = /* @__PURE__ */ new Set(), St = {};
  function bt(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (St[n] = r, n = 0; n < r.length; n++) Ot.add(r[n]);
  }
  var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), de = Object.prototype.hasOwnProperty, pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ze = {}, J = {};
  function Ee(n) {
    return de.call(J, n) ? !0 : de.call(Ze, n) ? !1 : pe.test(n) ? J[n] = !0 : (Ze[n] = !0, !1);
  }
  function ae(n, r, l, o) {
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
  function We(n, r, l, o) {
    if (r === null || typeof r > "u" || ae(n, r, l, o)) return !0;
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
  function dt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var rt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    rt[n] = new dt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    rt[r] = new dt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    rt[n] = new dt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    rt[n] = new dt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    rt[n] = new dt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    rt[n] = new dt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    rt[n] = new dt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    rt[n] = new dt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    rt[n] = new dt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var rn = /[\-:]([a-z])/g;
  function at(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      rn,
      at
    );
    rt[r] = new dt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(rn, at);
    rt[r] = new dt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(rn, at);
    rt[r] = new dt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    rt[n] = new dt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), rt.xlinkHref = new dt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    rt[n] = new dt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Qe(n, r, l, o) {
    var c = rt.hasOwnProperty(r) ? rt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (We(r, l, c, o) && (l = null), o || c === null ? Ee(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ut = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), ot = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), an = Symbol.for("react.strict_mode"), Lt = Symbol.for("react.profiler"), It = Symbol.for("react.provider"), Gt = Symbol.for("react.context"), mt = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), _t = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), Ct = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function U(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var P = Object.assign, T;
  function L(n) {
    if (T === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      T = r && r[1] || "";
    }
    return `
` + T + n;
  }
  var ie = !1;
  function K(n, r) {
    if (!n || ie) return "";
    ie = !0;
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
        } catch (A) {
          var o = A;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (A) {
          o = A;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var w = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? L(n) : "";
  }
  function De(n) {
    switch (n.tag) {
      case 5:
        return L(n.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = K(n.type, !1), n;
      case 11:
        return n = K(n.type.render, !1), n;
      case 1:
        return n = K(n.type, !0), n;
      default:
        return "";
    }
  }
  function _e(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Be:
        return "Fragment";
      case ot:
        return "Portal";
      case Lt:
        return "Profiler";
      case an:
        return "StrictMode";
      case Le:
        return "Suspense";
      case _t:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Gt:
        return (n.displayName || "Context") + ".Consumer";
      case It:
        return (n._context.displayName || "Context") + ".Provider";
      case mt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case yt:
        return r = n.displayName || null, r !== null ? r : _e(n.type) || "Memo";
      case Ct:
        r = n._payload, n = n._init;
        try {
          return _e(n(r));
        } catch {
        }
    }
    return null;
  }
  function xe(n) {
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
        return _e(r);
      case 8:
        return r === an ? "StrictMode" : "Mode";
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
  function Ue(n) {
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
  function $e(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function et(n) {
    var r = $e(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function Bt(n) {
    n._valueTracker || (n._valueTracker = et(n));
  }
  function yn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = $e(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function gn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Hn(n, r) {
    var l = r.checked;
    return P({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Wt(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Ue(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Rn(n, r) {
    r = r.checked, r != null && Qe(n, "checked", r, !1);
  }
  function or(n, r) {
    Rn(n, r);
    var l = Ue(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? On(n, r.type, l) : r.hasOwnProperty("defaultValue") && On(n, r.type, Ue(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Xr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function On(n, r, l) {
    (r !== "number" || gn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Pn = Array.isArray;
  function fn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Ue(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Mn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(j(91));
    return P({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function sr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(j(92));
        if (Pn(l)) {
          if (1 < l.length) throw Error(j(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Ue(l) };
  }
  function va(n, r) {
    var l = Ue(r.value), o = Ue(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Tn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Kn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function xr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Kn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Kr, Nt = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Kr = Kr || document.createElement("div"), Kr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Kr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
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
  var ve = {
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
  }, je = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ve).forEach(function(n) {
    je.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ve[r] = ve[n];
    });
  });
  function zt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ve.hasOwnProperty(n) && ve[n] ? ("" + r).trim() : r + "px";
  }
  function Qt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = zt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var dn = P({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pn(n, r) {
    if (r) {
      if (dn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(j(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(j(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(j(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(j(62));
    }
  }
  function nr(n, r) {
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
  var un = null;
  function Xt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Kt = null, ha = null, br = null;
  function ka(n) {
    if (n = Ne(n)) {
      if (typeof Kt != "function") throw Error(j(280));
      var r = n.stateNode;
      r && (r = xn(r), Kt(n.stateNode, n.type, r));
    }
  }
  function Hi(n) {
    ha ? br ? br.push(n) : br = [n] : ha = n;
  }
  function Jl() {
    if (ha) {
      var n = ha, r = br;
      if (br = ha = null, ka(n), r) for (n = 0; n < r.length; n++) ka(r[n]);
    }
  }
  function eu(n, r) {
    return n(r);
  }
  function pl() {
  }
  var vl = !1;
  function tu(n, r, l) {
    if (vl) return n(r, l);
    vl = !0;
    try {
      return eu(n, r, l);
    } finally {
      vl = !1, (ha !== null || br !== null) && (pl(), Jl());
    }
  }
  function Mr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = xn(l);
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
    if (l && typeof l != "function") throw Error(j(231, r, typeof l));
    return l;
  }
  var Lr = !1;
  if (Et) try {
    var cr = {};
    Object.defineProperty(cr, "passive", { get: function() {
      Lr = !0;
    } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
  } catch {
    Lr = !1;
  }
  function di(n, r, l, o, c, d, m, E, w) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (G) {
      this.onError(G);
    }
  }
  var Xa = !1, pi = null, vi = !1, R = null, Y = { onError: function(n) {
    Xa = !0, pi = n;
  } };
  function oe(n, r, l, o, c, d, m, E, w) {
    Xa = !1, pi = null, di.apply(Y, arguments);
  }
  function Se(n, r, l, o, c, d, m, E, w) {
    if (oe.apply(this, arguments), Xa) {
      if (Xa) {
        var A = pi;
        Xa = !1, pi = null;
      } else throw Error(j(198));
      vi || (vi = !0, R = A);
    }
  }
  function tt(n) {
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
  function Ke(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function pt(n) {
    if (tt(n) !== n) throw Error(j(188));
  }
  function ct(n) {
    var r = n.alternate;
    if (!r) {
      if (r = tt(n), r === null) throw Error(j(188));
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
          if (d === l) return pt(c), n;
          if (d === o) return pt(c), r;
          d = d.sibling;
        }
        throw Error(j(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(j(189));
        }
      }
      if (l.alternate !== o) throw Error(j(190));
    }
    if (l.tag !== 3) throw Error(j(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ln(n) {
    return n = ct(n), n !== null ? on(n) : null;
  }
  function on(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = on(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var vn = re.unstable_scheduleCallback, fr = re.unstable_cancelCallback, Ka = re.unstable_shouldYield, qa = re.unstable_requestPaint, nt = re.unstable_now, lt = re.unstable_getCurrentPriorityLevel, Za = re.unstable_ImmediatePriority, nu = re.unstable_UserBlockingPriority, ru = re.unstable_NormalPriority, hl = re.unstable_LowPriority, Qu = re.unstable_IdlePriority, ml = null, qr = null;
  function Io(n) {
    if (qr && typeof qr.onCommitFiberRoot == "function") try {
      qr.onCommitFiberRoot(ml, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : Gu, lc = Math.log, uc = Math.LN2;
  function Gu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (lc(n) / uc | 0) | 0;
  }
  var yl = 64, ma = 4194304;
  function Ja(n) {
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
  function ei(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ja(E) : (d &= m, d !== 0 && (o = Ja(d)));
    } else m = l & ~c, m !== 0 ? o = Ja(m) : d !== 0 && (o = Ja(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Nr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Xu(n, r) {
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
  function au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Nr(d), E = 1 << m, w = c[m];
      w === -1 ? (!(E & l) || E & o) && (c[m] = Xu(E, r)) : w <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function gl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ku() {
    var n = yl;
    return yl <<= 1, !(yl & 4194240) && (yl = 64), n;
  }
  function qu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Pi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = l;
  }
  function Wf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Nr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Vi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Nr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ut = 0;
  function Zu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var kt, Wo, hi, Xe, Ju, dr = !1, mi = [], zr = null, yi = null, hn = null, qt = /* @__PURE__ */ new Map(), Sl = /* @__PURE__ */ new Map(), qn = [], Ur = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Da(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        zr = null;
        break;
      case "dragenter":
      case "dragleave":
        yi = null;
        break;
      case "mouseover":
      case "mouseout":
        hn = null;
        break;
      case "pointerover":
      case "pointerout":
        qt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sl.delete(r.pointerId);
    }
  }
  function iu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ne(r), r !== null && Wo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Qo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return zr = iu(zr, n, r, l, o, c), !0;
      case "dragenter":
        return yi = iu(yi, n, r, l, o, c), !0;
      case "mouseover":
        return hn = iu(hn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return qt.set(d, iu(qt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Sl.set(d, iu(Sl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Go(n) {
    var r = vu(n.target);
    if (r !== null) {
      var l = tt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ke(l), r !== null) {
            n.blockedOn = r, Ju(n.priority, function() {
              hi(l);
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
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = no(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        un = o, l.target.dispatchEvent(o), un = null;
      } else return r = Ne(l), r !== null && Wo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function lu(n, r, l) {
    El(n) && l.delete(r);
  }
  function Qf() {
    dr = !1, zr !== null && El(zr) && (zr = null), yi !== null && El(yi) && (yi = null), hn !== null && El(hn) && (hn = null), qt.forEach(lu), Sl.forEach(lu);
  }
  function Oa(n, r) {
    n.blockedOn === r && (n.blockedOn = null, dr || (dr = !0, re.unstable_scheduleCallback(re.unstable_NormalPriority, Qf)));
  }
  function ti(n) {
    function r(c) {
      return Oa(c, n);
    }
    if (0 < mi.length) {
      Oa(mi[0], n);
      for (var l = 1; l < mi.length; l++) {
        var o = mi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (zr !== null && Oa(zr, n), yi !== null && Oa(yi, n), hn !== null && Oa(hn, n), qt.forEach(r), Sl.forEach(r), l = 0; l < qn.length; l++) o = qn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < qn.length && (l = qn[0], l.blockedOn === null); ) Go(l), l.blockedOn === null && qn.shift();
  }
  var gi = ut.ReactCurrentBatchConfig, Ma = !0;
  function eo(n, r, l, o) {
    var c = Ut, d = gi.transition;
    gi.transition = null;
    try {
      Ut = 1, Cl(n, r, l, o);
    } finally {
      Ut = c, gi.transition = d;
    }
  }
  function to(n, r, l, o) {
    var c = Ut, d = gi.transition;
    gi.transition = null;
    try {
      Ut = 4, Cl(n, r, l, o);
    } finally {
      Ut = c, gi.transition = d;
    }
  }
  function Cl(n, r, l, o) {
    if (Ma) {
      var c = no(n, r, l, o);
      if (c === null) Sc(n, r, o, uu, l), Da(n, o);
      else if (Qo(c, n, r, l, o)) o.stopPropagation();
      else if (Da(n, o), r & 4 && -1 < Ur.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ne(c);
          if (d !== null && kt(d), d = no(n, r, l, o), d === null && Sc(n, r, o, uu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Sc(n, r, o, null, l);
    }
  }
  var uu = null;
  function no(n, r, l, o) {
    if (uu = null, n = Xt(o), n = vu(n), n !== null) if (r = tt(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ke(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return uu = n, null;
  }
  function ro(n) {
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
        switch (lt()) {
          case Za:
            return 1;
          case nu:
            return 4;
          case ru:
          case hl:
            return 16;
          case Qu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ni = null, h = null, C = null;
  function z() {
    if (C) return C;
    var n, r = h, l = r.length, o, c = "value" in ni ? ni.value : ni.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function H(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function te() {
    return !0;
  }
  function Ae() {
    return !1;
  }
  function ue(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? te : Ae, this.isPropagationStopped = Ae, this;
    }
    return P(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = te);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = te);
    }, persist: function() {
    }, isPersistent: te }), r;
  }
  var Pe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, vt = ue(Pe), Dt = P({}, Pe, { view: 0, detail: 0 }), sn = ue(Dt), Zt, st, Jt, wn = P({}, Dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Zf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Jt && (Jt && n.type === "mousemove" ? (Zt = n.screenX - Jt.screenX, st = n.screenY - Jt.screenY) : st = Zt = 0, Jt = n), Zt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : st;
  } }), Rl = ue(wn), Xo = P({}, wn, { dataTransfer: 0 }), Bi = ue(Xo), Ko = P({}, Dt, { relatedTarget: 0 }), ou = ue(Ko), Gf = P({}, Pe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), oc = ue(Gf), Xf = P({}, Pe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ev = ue(Xf), Kf = P({}, Pe, { data: 0 }), qf = ue(Kf), tv = {
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
  }, nv = {
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
  }, Qm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $i(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Qm[n]) ? !!r[n] : !1;
  }
  function Zf() {
    return $i;
  }
  var Jf = P({}, Dt, { key: function(n) {
    if (n.key) {
      var r = tv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = H(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? nv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Zf, charCode: function(n) {
    return n.type === "keypress" ? H(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? H(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ed = ue(Jf), td = P({}, wn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), rv = ue(td), sc = P({}, Dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Zf }), av = ue(sc), Zr = P({}, Pe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Yi = ue(Zr), Vn = P({}, wn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ii = ue(Vn), nd = [9, 13, 27, 32], ao = Et && "CompositionEvent" in window, qo = null;
  Et && "documentMode" in document && (qo = document.documentMode);
  var Zo = Et && "TextEvent" in window && !qo, iv = Et && (!ao || qo && 8 < qo && 11 >= qo), lv = " ", cc = !1;
  function uv(n, r) {
    switch (n) {
      case "keyup":
        return nd.indexOf(r.keyCode) !== -1;
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
  function ov(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var io = !1;
  function sv(n, r) {
    switch (n) {
      case "compositionend":
        return ov(r);
      case "keypress":
        return r.which !== 32 ? null : (cc = !0, lv);
      case "textInput":
        return n = r.data, n === lv && cc ? null : n;
      default:
        return null;
    }
  }
  function Gm(n, r) {
    if (io) return n === "compositionend" || !ao && uv(n, r) ? (n = z(), C = h = ni = null, io = !1, n) : null;
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
        return iv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function cv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xm[n.type] : r === "textarea";
  }
  function rd(n, r, l, o) {
    Hi(o), r = as(r, "onChange"), 0 < r.length && (l = new vt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Si = null, su = null;
  function fv(n) {
    du(n, 0);
  }
  function Jo(n) {
    var r = ai(n);
    if (yn(r)) return n;
  }
  function Km(n, r) {
    if (n === "change") return r;
  }
  var dv = !1;
  if (Et) {
    var ad;
    if (Et) {
      var id = "oninput" in document;
      if (!id) {
        var pv = document.createElement("div");
        pv.setAttribute("oninput", "return;"), id = typeof pv.oninput == "function";
      }
      ad = id;
    } else ad = !1;
    dv = ad && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    Si && (Si.detachEvent("onpropertychange", hv), su = Si = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && Jo(su)) {
      var r = [];
      rd(r, su, n, Xt(n)), tu(fv, r);
    }
  }
  function qm(n, r, l) {
    n === "focusin" ? (vv(), Si = r, su = l, Si.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function mv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Jo(su);
  }
  function Zm(n, r) {
    if (n === "click") return Jo(r);
  }
  function yv(n, r) {
    if (n === "input" || n === "change") return Jo(r);
  }
  function Jm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ri = typeof Object.is == "function" ? Object.is : Jm;
  function es(n, r) {
    if (ri(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!de.call(r, c) || !ri(n[c], r[c])) return !1;
    }
    return !0;
  }
  function gv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function fc(n, r) {
    var l = gv(n);
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
      l = gv(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ts() {
    for (var n = window, r = gn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = gn(n.document);
    }
    return r;
  }
  function dc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function lo(n) {
    var r = ts(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
      if (o !== null && dc(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = fc(l, d);
          var m = fc(
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
  var ey = Et && "documentMode" in document && 11 >= document.documentMode, uo = null, ld = null, ns = null, ud = !1;
  function od(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ud || uo == null || uo !== gn(o) || (o = uo, "selectionStart" in o && dc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ns && es(ns, o) || (ns = o, o = as(ld, "onSelect"), 0 < o.length && (r = new vt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = uo)));
  }
  function pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var cu = { animationend: pc("Animation", "AnimationEnd"), animationiteration: pc("Animation", "AnimationIteration"), animationstart: pc("Animation", "AnimationStart"), transitionend: pc("Transition", "TransitionEnd") }, pr = {}, sd = {};
  Et && (sd = document.createElement("div").style, "AnimationEvent" in window || (delete cu.animationend.animation, delete cu.animationiteration.animation, delete cu.animationstart.animation), "TransitionEvent" in window || delete cu.transitionend.transition);
  function vc(n) {
    if (pr[n]) return pr[n];
    if (!cu[n]) return n;
    var r = cu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in sd) return pr[n] = r[l];
    return n;
  }
  var Sv = vc("animationend"), Ev = vc("animationiteration"), Cv = vc("animationstart"), Rv = vc("transitionend"), cd = /* @__PURE__ */ new Map(), hc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function La(n, r) {
    cd.set(n, r), bt(r, [n]);
  }
  for (var fd = 0; fd < hc.length; fd++) {
    var fu = hc[fd], ty = fu.toLowerCase(), ny = fu[0].toUpperCase() + fu.slice(1);
    La(ty, "on" + ny);
  }
  La(Sv, "onAnimationEnd"), La(Ev, "onAnimationIteration"), La(Cv, "onAnimationStart"), La("dblclick", "onDoubleClick"), La("focusin", "onFocus"), La("focusout", "onBlur"), La(Rv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Se(o, r, void 0, n), n.currentTarget = null;
  }
  function du(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], w = E.instance, A = E.currentTarget;
          if (E = E.listener, w !== d && c.isPropagationStopped()) break e;
          mc(c, E, A), d = w;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], w = E.instance, A = E.currentTarget, E = E.listener, w !== d && c.isPropagationStopped()) break e;
          mc(c, E, A), d = w;
        }
      }
    }
    if (vi) throw n = R, vi = !1, R = null, n;
  }
  function $t(n, r) {
    var l = r[us];
    l === void 0 && (l = r[us] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Tv(r, n, 2, !1), l.add(o));
  }
  function yc(n, r, l) {
    var o = 0;
    r && (o |= 4), Tv(l, n, o, r);
  }
  var gc = "_reactListening" + Math.random().toString(36).slice(2);
  function oo(n) {
    if (!n[gc]) {
      n[gc] = !0, Ot.forEach(function(l) {
        l !== "selectionchange" && (dd.has(l) || yc(l, !1, n), yc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[gc] || (r[gc] = !0, yc("selectionchange", !1, r));
    }
  }
  function Tv(n, r, l, o) {
    switch (ro(r)) {
      case 1:
        var c = eo;
        break;
      case 4:
        c = to;
        break;
      default:
        c = Cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !Lr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Sc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var w = m.tag;
          if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = vu(E), m === null) return;
          if (w = m.tag, w === 5 || w === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    tu(function() {
      var A = d, G = Xt(l), q = [];
      e: {
        var W = cd.get(n);
        if (W !== void 0) {
          var he = vt, Re = n;
          switch (n) {
            case "keypress":
              if (H(l) === 0) break e;
            case "keydown":
            case "keyup":
              he = ed;
              break;
            case "focusin":
              Re = "focus", he = ou;
              break;
            case "focusout":
              Re = "blur", he = ou;
              break;
            case "beforeblur":
            case "afterblur":
              he = ou;
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
              he = Rl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = Bi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = av;
              break;
            case Sv:
            case Ev:
            case Cv:
              he = oc;
              break;
            case Rv:
              he = Yi;
              break;
            case "scroll":
              he = sn;
              break;
            case "wheel":
              he = Ii;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = ev;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = rv;
          }
          var ke = (r & 4) !== 0, Fn = !ke && n === "scroll", k = ke ? W !== null ? W + "Capture" : null : W;
          ke = [];
          for (var b = A, M; b !== null; ) {
            M = b;
            var X = M.stateNode;
            if (M.tag === 5 && X !== null && (M = X, k !== null && (X = Mr(b, k), X != null && ke.push(so(b, X, M)))), Fn) break;
            b = b.return;
          }
          0 < ke.length && (W = new he(W, Re, null, l, G), q.push({ event: W, listeners: ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (W = n === "mouseover" || n === "pointerover", he = n === "mouseout" || n === "pointerout", W && l !== un && (Re = l.relatedTarget || l.fromElement) && (vu(Re) || Re[Wi])) break e;
          if ((he || W) && (W = G.window === G ? G : (W = G.ownerDocument) ? W.defaultView || W.parentWindow : window, he ? (Re = l.relatedTarget || l.toElement, he = A, Re = Re ? vu(Re) : null, Re !== null && (Fn = tt(Re), Re !== Fn || Re.tag !== 5 && Re.tag !== 6) && (Re = null)) : (he = null, Re = A), he !== Re)) {
            if (ke = Rl, X = "onMouseLeave", k = "onMouseEnter", b = "mouse", (n === "pointerout" || n === "pointerover") && (ke = rv, X = "onPointerLeave", k = "onPointerEnter", b = "pointer"), Fn = he == null ? W : ai(he), M = Re == null ? W : ai(Re), W = new ke(X, b + "leave", he, l, G), W.target = Fn, W.relatedTarget = M, X = null, vu(G) === A && (ke = new ke(k, b + "enter", Re, l, G), ke.target = M, ke.relatedTarget = Fn, X = ke), Fn = X, he && Re) t: {
              for (ke = he, k = Re, b = 0, M = ke; M; M = wl(M)) b++;
              for (M = 0, X = k; X; X = wl(X)) M++;
              for (; 0 < b - M; ) ke = wl(ke), b--;
              for (; 0 < M - b; ) k = wl(k), M--;
              for (; b--; ) {
                if (ke === k || k !== null && ke === k.alternate) break t;
                ke = wl(ke), k = wl(k);
              }
              ke = null;
            }
            else ke = null;
            he !== null && wv(q, W, he, ke, !1), Re !== null && Fn !== null && wv(q, Fn, Re, ke, !0);
          }
        }
        e: {
          if (W = A ? ai(A) : window, he = W.nodeName && W.nodeName.toLowerCase(), he === "select" || he === "input" && W.type === "file") var Te = Km;
          else if (cv(W)) if (dv) Te = yv;
          else {
            Te = mv;
            var He = qm;
          }
          else (he = W.nodeName) && he.toLowerCase() === "input" && (W.type === "checkbox" || W.type === "radio") && (Te = Zm);
          if (Te && (Te = Te(n, A))) {
            rd(q, Te, l, G);
            break e;
          }
          He && He(n, W, A), n === "focusout" && (He = W._wrapperState) && He.controlled && W.type === "number" && On(W, "number", W.value);
        }
        switch (He = A ? ai(A) : window, n) {
          case "focusin":
            (cv(He) || He.contentEditable === "true") && (uo = He, ld = A, ns = null);
            break;
          case "focusout":
            ns = ld = uo = null;
            break;
          case "mousedown":
            ud = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ud = !1, od(q, l, G);
            break;
          case "selectionchange":
            if (ey) break;
          case "keydown":
          case "keyup":
            od(q, l, G);
        }
        var Ve;
        if (ao) e: {
          switch (n) {
            case "compositionstart":
              var Ge = "onCompositionStart";
              break e;
            case "compositionend":
              Ge = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ge = "onCompositionUpdate";
              break e;
          }
          Ge = void 0;
        }
        else io ? uv(n, l) && (Ge = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ge = "onCompositionStart");
        Ge && (iv && l.locale !== "ko" && (io || Ge !== "onCompositionStart" ? Ge === "onCompositionEnd" && io && (Ve = z()) : (ni = G, h = "value" in ni ? ni.value : ni.textContent, io = !0)), He = as(A, Ge), 0 < He.length && (Ge = new qf(Ge, n, null, l, G), q.push({ event: Ge, listeners: He }), Ve ? Ge.data = Ve : (Ve = ov(l), Ve !== null && (Ge.data = Ve)))), (Ve = Zo ? sv(n, l) : Gm(n, l)) && (A = as(A, "onBeforeInput"), 0 < A.length && (G = new qf("onBeforeInput", "beforeinput", null, l, G), q.push({ event: G, listeners: A }), G.data = Ve));
      }
      du(q, r);
    });
  }
  function so(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Mr(n, l), d != null && o.unshift(so(n, d, c)), d = Mr(n, r), d != null && o.push(so(n, d, c))), n = n.return;
    }
    return o;
  }
  function wl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function wv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, w = E.alternate, A = E.stateNode;
      if (w !== null && w === o) break;
      E.tag === 5 && A !== null && (E = A, c ? (w = Mr(l, d), w != null && m.unshift(so(l, w, E))) : c || (w = Mr(l, d), w != null && m.push(so(l, w, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var xv = /\r\n?/g, ry = /\u0000|\uFFFD/g;
  function bv(n) {
    return (typeof n == "string" ? n : "" + n).replace(xv, `
`).replace(ry, "");
  }
  function Ec(n, r, l) {
    if (r = bv(r), bv(n) !== r && l) throw Error(j(425));
  }
  function xl() {
  }
  var is = null, pu = null;
  function Cc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = typeof setTimeout == "function" ? setTimeout : void 0, pd = typeof clearTimeout == "function" ? clearTimeout : void 0, _v = typeof Promise == "function" ? Promise : void 0, co = typeof queueMicrotask == "function" ? queueMicrotask : typeof _v < "u" ? function(n) {
    return _v.resolve(null).then(n).catch(Tc);
  } : Rc;
  function Tc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), ti(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ti(r);
  }
  function Ei(n) {
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
  function kv(n) {
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
  var bl = Math.random().toString(36).slice(2), Ci = "__reactFiber$" + bl, ls = "__reactProps$" + bl, Wi = "__reactContainer$" + bl, us = "__reactEvents$" + bl, po = "__reactListeners$" + bl, ay = "__reactHandles$" + bl;
  function vu(n) {
    var r = n[Ci];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Wi] || l[Ci]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = kv(n); n !== null; ) {
          if (l = n[Ci]) return l;
          n = kv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ne(n) {
    return n = n[Ci] || n[Wi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ai(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(j(33));
  }
  function xn(n) {
    return n[ls] || null;
  }
  var Rt = [], Na = -1;
  function za(n) {
    return { current: n };
  }
  function cn(n) {
    0 > Na || (n.current = Rt[Na], Rt[Na] = null, Na--);
  }
  function Me(n, r) {
    Na++, Rt[Na] = n.current, n.current = r;
  }
  var _r = {}, Dn = za(_r), Zn = za(!1), Jr = _r;
  function ea(n, r) {
    var l = n.type.contextTypes;
    if (!l) return _r;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Bn(n) {
    return n = n.childContextTypes, n != null;
  }
  function vo() {
    cn(Zn), cn(Dn);
  }
  function Dv(n, r, l) {
    if (Dn.current !== _r) throw Error(j(168));
    Me(Dn, r), Me(Zn, l);
  }
  function os(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(j(108, xe(n) || "Unknown", c));
    return P({}, l, o);
  }
  function rr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || _r, Jr = Dn.current, Me(Dn, n), Me(Zn, Zn.current), !0;
  }
  function wc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(j(169));
    l ? (n = os(n, r, Jr), o.__reactInternalMemoizedMergedChildContext = n, cn(Zn), cn(Dn), Me(Dn, n)) : cn(Zn), Me(Zn, l);
  }
  var Ri = null, ho = !1, Qi = !1;
  function xc(n) {
    Ri === null ? Ri = [n] : Ri.push(n);
  }
  function _l(n) {
    ho = !0, xc(n);
  }
  function Ti() {
    if (!Qi && Ri !== null) {
      Qi = !0;
      var n = 0, r = Ut;
      try {
        var l = Ri;
        for (Ut = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ri = null, ho = !1;
      } catch (c) {
        throw Ri !== null && (Ri = Ri.slice(n + 1)), vn(Za, Ti), c;
      } finally {
        Ut = r, Qi = !1;
      }
    }
    return null;
  }
  var kl = [], Dl = 0, Ol = null, Gi = 0, $n = [], Ua = 0, ya = null, wi = 1, xi = "";
  function hu(n, r) {
    kl[Dl++] = Gi, kl[Dl++] = Ol, Ol = n, Gi = r;
  }
  function Ov(n, r, l) {
    $n[Ua++] = wi, $n[Ua++] = xi, $n[Ua++] = ya, ya = n;
    var o = wi;
    n = xi;
    var c = 32 - Nr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Nr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, wi = 1 << 32 - Nr(r) + c | l << c | o, xi = d + n;
    } else wi = 1 << d | l << c | o, xi = n;
  }
  function bc(n) {
    n.return !== null && (hu(n, 1), Ov(n, 1, 0));
  }
  function _c(n) {
    for (; n === Ol; ) Ol = kl[--Dl], kl[Dl] = null, Gi = kl[--Dl], kl[Dl] = null;
    for (; n === ya; ) ya = $n[--Ua], $n[Ua] = null, xi = $n[--Ua], $n[Ua] = null, wi = $n[--Ua], $n[Ua] = null;
  }
  var ta = null, na = null, Sn = !1, Aa = null;
  function vd(n, r) {
    var l = Va(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Mv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ta = n, na = Ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ta = n, na = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ya !== null ? { id: wi, overflow: xi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Va(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ta = n, na = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (Sn) {
      var r = na;
      if (r) {
        var l = r;
        if (!Mv(n, r)) {
          if (hd(n)) throw Error(j(418));
          r = Ei(l.nextSibling);
          var o = ta;
          r && Mv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, Sn = !1, ta = n);
        }
      } else {
        if (hd(n)) throw Error(j(418));
        n.flags = n.flags & -4097 | 2, Sn = !1, ta = n;
      }
    }
  }
  function Jn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ta = n;
  }
  function kc(n) {
    if (n !== ta) return !1;
    if (!Sn) return Jn(n), Sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Cc(n.type, n.memoizedProps)), r && (r = na)) {
      if (hd(n)) throw ss(), Error(j(418));
      for (; r; ) vd(n, r), r = Ei(r.nextSibling);
    }
    if (Jn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(j(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                na = Ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        na = null;
      }
    } else na = ta ? Ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    for (var n = na; n; ) n = Ei(n.nextSibling);
  }
  function Ml() {
    na = ta = null, Sn = !1;
  }
  function Xi(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var iy = ut.ReactCurrentBatchConfig;
  function mu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(j(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(j(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(j(284));
      if (!l._owner) throw Error(j(290, n));
    }
    return n;
  }
  function Dc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(j(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Lv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function yu(n) {
    function r(k, b) {
      if (n) {
        var M = k.deletions;
        M === null ? (k.deletions = [b], k.flags |= 16) : M.push(b);
      }
    }
    function l(k, b) {
      if (!n) return null;
      for (; b !== null; ) r(k, b), b = b.sibling;
      return null;
    }
    function o(k, b) {
      for (k = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? k.set(b.key, b) : k.set(b.index, b), b = b.sibling;
      return k;
    }
    function c(k, b) {
      return k = Hl(k, b), k.index = 0, k.sibling = null, k;
    }
    function d(k, b, M) {
      return k.index = M, n ? (M = k.alternate, M !== null ? (M = M.index, M < b ? (k.flags |= 2, b) : M) : (k.flags |= 2, b)) : (k.flags |= 1048576, b);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function E(k, b, M, X) {
      return b === null || b.tag !== 6 ? (b = Qd(M, k.mode, X), b.return = k, b) : (b = c(b, M), b.return = k, b);
    }
    function w(k, b, M, X) {
      var Te = M.type;
      return Te === Be ? G(k, b, M.props.children, X, M.key) : b !== null && (b.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === Ct && Lv(Te) === b.type) ? (X = c(b, M.props), X.ref = mu(k, b, M), X.return = k, X) : (X = Hs(M.type, M.key, M.props, null, k.mode, X), X.ref = mu(k, b, M), X.return = k, X);
    }
    function A(k, b, M, X) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== M.containerInfo || b.stateNode.implementation !== M.implementation ? (b = sf(M, k.mode, X), b.return = k, b) : (b = c(b, M.children || []), b.return = k, b);
    }
    function G(k, b, M, X, Te) {
      return b === null || b.tag !== 7 ? (b = tl(M, k.mode, X, Te), b.return = k, b) : (b = c(b, M), b.return = k, b);
    }
    function q(k, b, M) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = Qd("" + b, k.mode, M), b.return = k, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case be:
            return M = Hs(b.type, b.key, b.props, null, k.mode, M), M.ref = mu(k, null, b), M.return = k, M;
          case ot:
            return b = sf(b, k.mode, M), b.return = k, b;
          case Ct:
            var X = b._init;
            return q(k, X(b._payload), M);
        }
        if (Pn(b) || U(b)) return b = tl(b, k.mode, M, null), b.return = k, b;
        Dc(k, b);
      }
      return null;
    }
    function W(k, b, M, X) {
      var Te = b !== null ? b.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return Te !== null ? null : E(k, b, "" + M, X);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case be:
            return M.key === Te ? w(k, b, M, X) : null;
          case ot:
            return M.key === Te ? A(k, b, M, X) : null;
          case Ct:
            return Te = M._init, W(
              k,
              b,
              Te(M._payload),
              X
            );
        }
        if (Pn(M) || U(M)) return Te !== null ? null : G(k, b, M, X, null);
        Dc(k, M);
      }
      return null;
    }
    function he(k, b, M, X, Te) {
      if (typeof X == "string" && X !== "" || typeof X == "number") return k = k.get(M) || null, E(b, k, "" + X, Te);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case be:
            return k = k.get(X.key === null ? M : X.key) || null, w(b, k, X, Te);
          case ot:
            return k = k.get(X.key === null ? M : X.key) || null, A(b, k, X, Te);
          case Ct:
            var He = X._init;
            return he(k, b, M, He(X._payload), Te);
        }
        if (Pn(X) || U(X)) return k = k.get(M) || null, G(b, k, X, Te, null);
        Dc(b, X);
      }
      return null;
    }
    function Re(k, b, M, X) {
      for (var Te = null, He = null, Ve = b, Ge = b = 0, lr = null; Ve !== null && Ge < M.length; Ge++) {
        Ve.index > Ge ? (lr = Ve, Ve = null) : lr = Ve.sibling;
        var jt = W(k, Ve, M[Ge], X);
        if (jt === null) {
          Ve === null && (Ve = lr);
          break;
        }
        n && Ve && jt.alternate === null && r(k, Ve), b = d(jt, b, Ge), He === null ? Te = jt : He.sibling = jt, He = jt, Ve = lr;
      }
      if (Ge === M.length) return l(k, Ve), Sn && hu(k, Ge), Te;
      if (Ve === null) {
        for (; Ge < M.length; Ge++) Ve = q(k, M[Ge], X), Ve !== null && (b = d(Ve, b, Ge), He === null ? Te = Ve : He.sibling = Ve, He = Ve);
        return Sn && hu(k, Ge), Te;
      }
      for (Ve = o(k, Ve); Ge < M.length; Ge++) lr = he(Ve, k, Ge, M[Ge], X), lr !== null && (n && lr.alternate !== null && Ve.delete(lr.key === null ? Ge : lr.key), b = d(lr, b, Ge), He === null ? Te = lr : He.sibling = lr, He = lr);
      return n && Ve.forEach(function(Bl) {
        return r(k, Bl);
      }), Sn && hu(k, Ge), Te;
    }
    function ke(k, b, M, X) {
      var Te = U(M);
      if (typeof Te != "function") throw Error(j(150));
      if (M = Te.call(M), M == null) throw Error(j(151));
      for (var He = Te = null, Ve = b, Ge = b = 0, lr = null, jt = M.next(); Ve !== null && !jt.done; Ge++, jt = M.next()) {
        Ve.index > Ge ? (lr = Ve, Ve = null) : lr = Ve.sibling;
        var Bl = W(k, Ve, jt.value, X);
        if (Bl === null) {
          Ve === null && (Ve = lr);
          break;
        }
        n && Ve && Bl.alternate === null && r(k, Ve), b = d(Bl, b, Ge), He === null ? Te = Bl : He.sibling = Bl, He = Bl, Ve = lr;
      }
      if (jt.done) return l(
        k,
        Ve
      ), Sn && hu(k, Ge), Te;
      if (Ve === null) {
        for (; !jt.done; Ge++, jt = M.next()) jt = q(k, jt.value, X), jt !== null && (b = d(jt, b, Ge), He === null ? Te = jt : He.sibling = jt, He = jt);
        return Sn && hu(k, Ge), Te;
      }
      for (Ve = o(k, Ve); !jt.done; Ge++, jt = M.next()) jt = he(Ve, k, Ge, jt.value, X), jt !== null && (n && jt.alternate !== null && Ve.delete(jt.key === null ? Ge : jt.key), b = d(jt, b, Ge), He === null ? Te = jt : He.sibling = jt, He = jt);
      return n && Ve.forEach(function(vh) {
        return r(k, vh);
      }), Sn && hu(k, Ge), Te;
    }
    function Fn(k, b, M, X) {
      if (typeof M == "object" && M !== null && M.type === Be && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case be:
            e: {
              for (var Te = M.key, He = b; He !== null; ) {
                if (He.key === Te) {
                  if (Te = M.type, Te === Be) {
                    if (He.tag === 7) {
                      l(k, He.sibling), b = c(He, M.props.children), b.return = k, k = b;
                      break e;
                    }
                  } else if (He.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === Ct && Lv(Te) === He.type) {
                    l(k, He.sibling), b = c(He, M.props), b.ref = mu(k, He, M), b.return = k, k = b;
                    break e;
                  }
                  l(k, He);
                  break;
                } else r(k, He);
                He = He.sibling;
              }
              M.type === Be ? (b = tl(M.props.children, k.mode, X, M.key), b.return = k, k = b) : (X = Hs(M.type, M.key, M.props, null, k.mode, X), X.ref = mu(k, b, M), X.return = k, k = X);
            }
            return m(k);
          case ot:
            e: {
              for (He = M.key; b !== null; ) {
                if (b.key === He) if (b.tag === 4 && b.stateNode.containerInfo === M.containerInfo && b.stateNode.implementation === M.implementation) {
                  l(k, b.sibling), b = c(b, M.children || []), b.return = k, k = b;
                  break e;
                } else {
                  l(k, b);
                  break;
                }
                else r(k, b);
                b = b.sibling;
              }
              b = sf(M, k.mode, X), b.return = k, k = b;
            }
            return m(k);
          case Ct:
            return He = M._init, Fn(k, b, He(M._payload), X);
        }
        if (Pn(M)) return Re(k, b, M, X);
        if (U(M)) return ke(k, b, M, X);
        Dc(k, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, b !== null && b.tag === 6 ? (l(k, b.sibling), b = c(b, M), b.return = k, k = b) : (l(k, b), b = Qd(M, k.mode, X), b.return = k, k = b), m(k)) : l(k, b);
    }
    return Fn;
  }
  var Nn = yu(!0), se = yu(!1), ga = za(null), ra = null, mo = null, yd = null;
  function gd() {
    yd = mo = ra = null;
  }
  function Sd(n) {
    var r = ga.current;
    cn(ga), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function bn(n, r) {
    ra = n, yd = mo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (In = !0), n.firstContext = null);
  }
  function Fa(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, mo === null) {
      if (ra === null) throw Error(j(308));
      mo = n, ra.dependencies = { lanes: 0, firstContext: n };
    } else mo = mo.next = n;
    return r;
  }
  var gu = null;
  function Cd(n) {
    gu === null ? gu = [n] : gu.push(n);
  }
  function Rd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Sa(n, o);
  }
  function Sa(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ea = !1;
  function Td(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Nv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ki(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Tt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Sa(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Sa(n, l);
  }
  function Oc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  function zv(n, r) {
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
  function cs(n, r, l, o) {
    var c = n.updateQueue;
    Ea = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var w = E, A = w.next;
      w.next = null, m === null ? d = A : m.next = A, m = w;
      var G = n.alternate;
      G !== null && (G = G.updateQueue, E = G.lastBaseUpdate, E !== m && (E === null ? G.firstBaseUpdate = A : E.next = A, G.lastBaseUpdate = w));
    }
    if (d !== null) {
      var q = c.baseState;
      m = 0, G = A = w = null, E = d;
      do {
        var W = E.lane, he = E.eventTime;
        if ((o & W) === W) {
          G !== null && (G = G.next = {
            eventTime: he,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Re = n, ke = E;
            switch (W = r, he = l, ke.tag) {
              case 1:
                if (Re = ke.payload, typeof Re == "function") {
                  q = Re.call(he, q, W);
                  break e;
                }
                q = Re;
                break e;
              case 3:
                Re.flags = Re.flags & -65537 | 128;
              case 0:
                if (Re = ke.payload, W = typeof Re == "function" ? Re.call(he, q, W) : Re, W == null) break e;
                q = P({}, q, W);
                break e;
              case 2:
                Ea = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, W = c.effects, W === null ? c.effects = [E] : W.push(E));
        } else he = { eventTime: he, lane: W, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, G === null ? (A = G = he, w = q) : G = G.next = he, m |= W;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          W = E, E = W.next, W.next = null, c.lastBaseUpdate = W, c.shared.pending = null;
        }
      } while (!0);
      if (G === null && (w = q), c.baseState = w, c.firstBaseUpdate = A, c.lastBaseUpdate = G, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Oi |= m, n.lanes = m, n.memoizedState = q;
    }
  }
  function wd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(j(191, c));
        c.call(o);
      }
    }
  }
  var fs = {}, bi = za(fs), ds = za(fs), ps = za(fs);
  function Su(n) {
    if (n === fs) throw Error(j(174));
    return n;
  }
  function xd(n, r) {
    switch (Me(ps, r), Me(ds, n), Me(bi, fs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : xr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = xr(r, n);
    }
    cn(bi), Me(bi, r);
  }
  function Eu() {
    cn(bi), cn(ds), cn(ps);
  }
  function Uv(n) {
    Su(ps.current);
    var r = Su(bi.current), l = xr(r, n.type);
    r !== l && (Me(ds, n), Me(bi, l));
  }
  function Mc(n) {
    ds.current === n && (cn(bi), cn(ds));
  }
  var _n = za(0);
  function Lc(n) {
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
  var vs = [];
  function ze() {
    for (var n = 0; n < vs.length; n++) vs[n]._workInProgressVersionPrimary = null;
    vs.length = 0;
  }
  var ft = ut.ReactCurrentDispatcher, At = ut.ReactCurrentBatchConfig, en = 0, Ft = null, Yn = null, ar = null, Nc = !1, hs = !1, Cu = 0, I = 0;
  function Mt() {
    throw Error(j(321));
  }
  function Ye(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ri(n[l], r[l])) return !1;
    return !0;
  }
  function Nl(n, r, l, o, c, d) {
    if (en = d, Ft = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ft.current = n === null || n.memoizedState === null ? Gc : Cs, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, Cu = 0, 25 <= d) throw Error(j(301));
        d += 1, ar = Yn = null, r.updateQueue = null, ft.current = Xc, n = l(o, c);
      } while (hs);
    }
    if (ft.current = bu, r = Yn !== null && Yn.next !== null, en = 0, ar = Yn = Ft = null, Nc = !1, r) throw Error(j(300));
    return n;
  }
  function ii() {
    var n = Cu !== 0;
    return Cu = 0, n;
  }
  function kr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ar === null ? Ft.memoizedState = ar = n : ar = ar.next = n, ar;
  }
  function zn() {
    if (Yn === null) {
      var n = Ft.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Yn.next;
    var r = ar === null ? Ft.memoizedState : ar.next;
    if (r !== null) ar = r, Yn = n;
    else {
      if (n === null) throw Error(j(310));
      Yn = n, n = { memoizedState: Yn.memoizedState, baseState: Yn.baseState, baseQueue: Yn.baseQueue, queue: Yn.queue, next: null }, ar === null ? Ft.memoizedState = ar = n : ar = ar.next = n;
    }
    return ar;
  }
  function qi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function zl(n) {
    var r = zn(), l = r.queue;
    if (l === null) throw Error(j(311));
    l.lastRenderedReducer = n;
    var o = Yn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, w = null, A = d;
      do {
        var G = A.lane;
        if ((en & G) === G) w !== null && (w = w.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var q = {
            lane: G,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          w === null ? (E = w = q, m = o) : w = w.next = q, Ft.lanes |= G, Oi |= G;
        }
        A = A.next;
      } while (A !== null && A !== d);
      w === null ? m = o : w.next = E, ri(o, r.memoizedState) || (In = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Ft.lanes |= d, Oi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ru(n) {
    var r = zn(), l = r.queue;
    if (l === null) throw Error(j(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ri(d, r.memoizedState) || (In = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function zc() {
  }
  function Uc(n, r) {
    var l = Ft, o = zn(), c = r(), d = !ri(o.memoizedState, c);
    if (d && (o.memoizedState = c, In = !0), o = o.queue, ms(jc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || ar !== null && ar.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, Fc.bind(null, l, o, c, r), void 0, null), er === null) throw Error(j(349));
      en & 30 || Ac(l, r, c);
    }
    return c;
  }
  function Ac(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Ft.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ft.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Fc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Hc(r) && Pc(n);
  }
  function jc(n, r, l) {
    return l(function() {
      Hc(r) && Pc(n);
    });
  }
  function Hc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ri(n, l);
    } catch {
      return !0;
    }
  }
  function Pc(n) {
    var r = Sa(n, 1);
    r !== null && Hr(r, n, 1, -1);
  }
  function Vc(n) {
    var r = kr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qi, lastRenderedState: n }, r.queue = n, n = n.dispatch = xu.bind(null, Ft, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Ft.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ft.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Bc() {
    return zn().memoizedState;
  }
  function yo(n, r, l, o) {
    var c = kr();
    Ft.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function go(n, r, l, o) {
    var c = zn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Yn !== null) {
      var m = Yn.memoizedState;
      if (d = m.destroy, o !== null && Ye(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    Ft.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function $c(n, r) {
    return yo(8390656, 8, n, r);
  }
  function ms(n, r) {
    return go(2048, 8, n, r);
  }
  function Yc(n, r) {
    return go(4, 2, n, r);
  }
  function ys(n, r) {
    return go(4, 4, n, r);
  }
  function wu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Ic(n, r, l) {
    return l = l != null ? l.concat([n]) : null, go(4, 4, wu.bind(null, r, n), l);
  }
  function gs() {
  }
  function Wc(n, r) {
    var l = zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ye(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Qc(n, r) {
    var l = zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ye(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function bd(n, r, l) {
    return en & 21 ? (ri(l, r) || (l = Ku(), Ft.lanes |= l, Oi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, In = !0), n.memoizedState = l);
  }
  function Ss(n, r) {
    var l = Ut;
    Ut = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = At.transition;
    At.transition = {};
    try {
      n(!1), r();
    } finally {
      Ut = l, At.transition = o;
    }
  }
  function _d() {
    return zn().memoizedState;
  }
  function Es(n, r, l) {
    var o = Mi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, aa(n)) Av(r, l);
    else if (l = Rd(n, r, l, o), l !== null) {
      var c = Gn();
      Hr(l, n, o, c), ln(l, r, o);
    }
  }
  function xu(n, r, l) {
    var o = Mi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (aa(n)) Av(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, ri(E, m)) {
          var w = r.interleaved;
          w === null ? (c.next = c, Cd(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Rd(n, r, c, o), l !== null && (c = Gn(), Hr(l, n, o, c), ln(l, r, o));
    }
  }
  function aa(n) {
    var r = n.alternate;
    return n === Ft || r !== null && r === Ft;
  }
  function Av(n, r) {
    hs = Nc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function ln(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Vi(n, l);
    }
  }
  var bu = { readContext: Fa, useCallback: Mt, useContext: Mt, useEffect: Mt, useImperativeHandle: Mt, useInsertionEffect: Mt, useLayoutEffect: Mt, useMemo: Mt, useReducer: Mt, useRef: Mt, useState: Mt, useDebugValue: Mt, useDeferredValue: Mt, useTransition: Mt, useMutableSource: Mt, useSyncExternalStore: Mt, useId: Mt, unstable_isNewReconciler: !1 }, Gc = { readContext: Fa, useCallback: function(n, r) {
    return kr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Fa, useEffect: $c, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, yo(
      4194308,
      4,
      wu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return yo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return yo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = kr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = kr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Es.bind(null, Ft, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = kr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: gs, useDeferredValue: function(n) {
    return kr().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Ss.bind(null, n[1]), kr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Ft, c = kr();
    if (Sn) {
      if (l === void 0) throw Error(j(407));
      l = l();
    } else {
      if (l = r(), er === null) throw Error(j(349));
      en & 30 || Ac(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, $c(jc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, Fc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = kr(), r = er.identifierPrefix;
    if (Sn) {
      var l = xi, o = wi;
      l = (o & ~(1 << 32 - Nr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Cu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = I++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Cs = {
    readContext: Fa,
    useCallback: Wc,
    useContext: Fa,
    useEffect: ms,
    useImperativeHandle: Ic,
    useInsertionEffect: Yc,
    useLayoutEffect: ys,
    useMemo: Qc,
    useReducer: zl,
    useRef: Bc,
    useState: function() {
      return zl(qi);
    },
    useDebugValue: gs,
    useDeferredValue: function(n) {
      var r = zn();
      return bd(r, Yn.memoizedState, n);
    },
    useTransition: function() {
      var n = zl(qi)[0], r = zn().memoizedState;
      return [n, r];
    },
    useMutableSource: zc,
    useSyncExternalStore: Uc,
    useId: _d,
    unstable_isNewReconciler: !1
  }, Xc = { readContext: Fa, useCallback: Wc, useContext: Fa, useEffect: ms, useImperativeHandle: Ic, useInsertionEffect: Yc, useLayoutEffect: ys, useMemo: Qc, useReducer: Ru, useRef: Bc, useState: function() {
    return Ru(qi);
  }, useDebugValue: gs, useDeferredValue: function(n) {
    var r = zn();
    return Yn === null ? r.memoizedState = n : bd(r, Yn.memoizedState, n);
  }, useTransition: function() {
    var n = Ru(qi)[0], r = zn().memoizedState;
    return [n, r];
  }, useMutableSource: zc, useSyncExternalStore: Uc, useId: _d, unstable_isNewReconciler: !1 };
  function li(n, r) {
    if (n && n.defaultProps) {
      r = P({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : P({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Kc = { isMounted: function(n) {
    return (n = n._reactInternals) ? tt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = Mi(n), d = Ki(o, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (Hr(r, n, c, o), Oc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Gn(), c = Mi(n), d = Ki(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (Hr(r, n, c, o), Oc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Gn(), o = Mi(n), c = Ki(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, o), r !== null && (Hr(r, n, o, l), Oc(r, n, o));
  } };
  function Fv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function qc(n, r, l) {
    var o = !1, c = _r, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Fa(d) : (c = Bn(r) ? Jr : Dn.current, o = r.contextTypes, d = (o = o != null) ? ea(n, c) : _r), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Kc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function jv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Kc.enqueueReplaceState(r, r.state, null);
  }
  function Rs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Td(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Fa(d) : (d = Bn(r) ? Jr : Dn.current, c.context = ea(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Kc.enqueueReplaceState(c, c.state, null), cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _u(n, r) {
    try {
      var l = "", o = r;
      do
        l += De(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Dd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Zc = typeof WeakMap == "function" ? WeakMap : Map;
  function Hv(n, r, l) {
    l = Ki(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      wo || (wo = !0, Ou = o), Od(n, r);
    }, l;
  }
  function Md(n, r, l) {
    l = Ki(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (Fl === null ? Fl = /* @__PURE__ */ new Set([this]) : Fl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ld(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Zc();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = dy.bind(null, n, r, l), r.then(n, n));
  }
  function Pv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ul(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ki(-1, 1), r.tag = 2, Ll(l, r, 1))), l.lanes |= 1), n);
  }
  var Ts = ut.ReactCurrentOwner, In = !1;
  function vr(n, r, l, o) {
    r.child = n === null ? se(r, null, l, o) : Nn(r, n.child, l, o);
  }
  function ia(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return bn(r, c), o = Nl(n, r, l, o, d, c), l = ii(), n !== null && !In ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ha(n, r, c)) : (Sn && l && bc(r), r.flags |= 1, vr(n, r, o, c), r.child);
  }
  function ku(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, it(n, r, d, o, c)) : (n = Hs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return Ha(n, r, c);
    }
    return r.flags |= 1, n = Hl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function it(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (In = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (In = !0);
      else return r.lanes = n.lanes, Ha(n, r, c);
    }
    return Vv(n, r, l, o, c);
  }
  function ws(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Me(Co, Ca), Ca |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Me(Co, Ca), Ca |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Me(Co, Ca), Ca |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Me(Co, Ca), Ca |= o;
    return vr(n, r, c, l), r.child;
  }
  function Nd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Vv(n, r, l, o, c) {
    var d = Bn(l) ? Jr : Dn.current;
    return d = ea(r, d), bn(r, c), l = Nl(n, r, l, o, d, c), o = ii(), n !== null && !In ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ha(n, r, c)) : (Sn && o && bc(r), r.flags |= 1, vr(n, r, l, c), r.child);
  }
  function Bv(n, r, l, o, c) {
    if (Bn(l)) {
      var d = !0;
      rr(r);
    } else d = !1;
    if (bn(r, c), r.stateNode === null) ja(n, r), qc(r, l, o), Rs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var w = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = Fa(A) : (A = Bn(l) ? Jr : Dn.current, A = ea(r, A));
      var G = l.getDerivedStateFromProps, q = typeof G == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      q || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || w !== A) && jv(r, m, o, A), Ea = !1;
      var W = r.memoizedState;
      m.state = W, cs(r, o, m, c), w = r.memoizedState, E !== o || W !== w || Zn.current || Ea ? (typeof G == "function" && (kd(r, l, G, o), w = r.memoizedState), (E = Ea || Fv(r, l, E, o, W, w, A)) ? (q || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Nv(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : li(r.type, E), m.props = A, q = r.pendingProps, W = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = Fa(w) : (w = Bn(l) ? Jr : Dn.current, w = ea(r, w));
      var he = l.getDerivedStateFromProps;
      (G = typeof he == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== q || W !== w) && jv(r, m, o, w), Ea = !1, W = r.memoizedState, m.state = W, cs(r, o, m, c);
      var Re = r.memoizedState;
      E !== q || W !== Re || Zn.current || Ea ? (typeof he == "function" && (kd(r, l, he, o), Re = r.memoizedState), (A = Ea || Fv(r, l, A, o, W, Re, w) || !1) ? (G || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Re, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Re, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Re), m.props = o, m.state = Re, m.context = w, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && W === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return xs(n, r, l, o, d, c);
  }
  function xs(n, r, l, o, c, d) {
    Nd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && wc(r, l, !1), Ha(n, r, d);
    o = r.stateNode, Ts.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Nn(r, n.child, null, d), r.child = Nn(r, null, E, d)) : vr(n, r, E, d), r.memoizedState = o.state, c && wc(r, l, !0), r.child;
  }
  function So(n) {
    var r = n.stateNode;
    r.pendingContext ? Dv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Dv(n, r.context, !1), xd(n, r.containerInfo);
  }
  function $v(n, r, l, o, c) {
    return Ml(), Xi(c), r.flags |= 256, vr(n, r, l, o), r.child;
  }
  var Jc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function zd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function ef(n, r, l) {
    var o = r.pendingProps, c = _n.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Me(_n, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Pl(m, o, 0, null), n = tl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = zd(l), r.memoizedState = Jc, n) : Ud(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Yv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Hl(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Hl(E, d) : (d = tl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? zd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Jc, o;
    }
    return d = n.child, n = d.sibling, o = Hl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ud(n, r) {
    return r = Pl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function bs(n, r, l, o) {
    return o !== null && Xi(o), Nn(r, n.child, null, l), n = Ud(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Yv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Dd(Error(j(422))), bs(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Pl({ mode: "visible", children: o.children }, c, 0, null), d = tl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Nn(r, n.child, null, m), r.child.memoizedState = zd(m), r.memoizedState = Jc, d);
    if (!(r.mode & 1)) return bs(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(j(419)), o = Dd(d, o, void 0), bs(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, In || E) {
      if (o = er, o !== null) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Sa(n, c), Hr(o, n, c, -1));
      }
      return Id(), o = Dd(Error(j(421))), bs(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = py.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, na = Ei(c.nextSibling), ta = r, Sn = !0, Aa = null, n !== null && ($n[Ua++] = wi, $n[Ua++] = xi, $n[Ua++] = ya, wi = n.id, xi = n.overflow, ya = r), r = Ud(r, o.children), r.flags |= 4096, r);
  }
  function Ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function Ar(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function _i(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (vr(n, r, o.children, l), o = _n.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ad(n, l, r);
        else if (n.tag === 19) Ad(n, l, r);
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
    if (Me(_n, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Lc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Ar(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Lc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Ar(r, !0, l, null, d);
        break;
      case "together":
        Ar(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function ja(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ha(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Oi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(j(153));
    if (r.child !== null) {
      for (n = r.child, l = Hl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Hl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _s(n, r, l) {
    switch (r.tag) {
      case 3:
        So(r), Ml();
        break;
      case 5:
        Uv(r);
        break;
      case 1:
        Bn(r.type) && rr(r);
        break;
      case 4:
        xd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Me(ga, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Me(_n, _n.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? ef(n, r, l) : (Me(_n, _n.current & 1), n = Ha(n, r, l), n !== null ? n.sibling : null);
        Me(_n, _n.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return _i(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Me(_n, _n.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ws(n, r, l);
    }
    return Ha(n, r, l);
  }
  var Pa, Wn, Iv, Wv;
  Pa = function(n, r) {
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
  }, Wn = function() {
  }, Iv = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Su(bi.current);
      var d = null;
      switch (l) {
        case "input":
          c = Hn(n, c), o = Hn(n, o), d = [];
          break;
        case "select":
          c = P({}, c, { value: void 0 }), o = P({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Mn(n, c), o = Mn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = xl);
      }
      pn(l, o);
      var m;
      l = null;
      for (A in c) if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null) if (A === "style") {
        var E = c[A];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (St.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var w = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && w !== E && (w != null || E != null)) if (A === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in w) w.hasOwnProperty(m) && E[m] !== w[m] && (l || (l = {}), l[m] = w[m]);
        } else l || (d || (d = []), d.push(
          A,
          l
        )), l = w;
        else A === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, E = E ? E.__html : void 0, w != null && E !== w && (d = d || []).push(A, w)) : A === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(A, "" + w) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (St.hasOwnProperty(A) ? (w != null && A === "onScroll" && $t("scroll", n), d || E === w || (d = [])) : (d = d || []).push(A, w));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!Sn) switch (n.tailMode) {
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
  function ir(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Qv(n, r, l) {
    var o = r.pendingProps;
    switch (_c(r), r.tag) {
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
        return ir(r), null;
      case 1:
        return Bn(r.type) && vo(), ir(r), null;
      case 3:
        return o = r.stateNode, Eu(), cn(Zn), cn(Dn), ze(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (kc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (Mu(Aa), Aa = null))), Wn(n, r), ir(r), null;
      case 5:
        Mc(r);
        var c = Su(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) Iv(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(j(166));
            return ir(r), null;
          }
          if (n = Su(bi.current), kc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ci] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                $t("cancel", o), $t("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                $t("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) $t(rs[c], o);
                break;
              case "source":
                $t("error", o);
                break;
              case "img":
              case "image":
              case "link":
                $t(
                  "error",
                  o
                ), $t("load", o);
                break;
              case "details":
                $t("toggle", o);
                break;
              case "input":
                Wt(o, d), $t("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, $t("invalid", o);
                break;
              case "textarea":
                sr(o, d), $t("invalid", o);
            }
            pn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Ec(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Ec(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : St.hasOwnProperty(m) && E != null && m === "onScroll" && $t("scroll", o);
            }
            switch (l) {
              case "input":
                Bt(o), Xr(o, d, !0);
                break;
              case "textarea":
                Bt(o), Tn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = xl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Kn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ci] = r, n[ls] = o, Pa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = nr(l, o), l) {
                case "dialog":
                  $t("cancel", n), $t("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  $t("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) $t(rs[c], n);
                  c = o;
                  break;
                case "source":
                  $t("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  $t(
                    "error",
                    n
                  ), $t("load", n), c = o;
                  break;
                case "details":
                  $t("toggle", n), c = o;
                  break;
                case "input":
                  Wt(n, o), c = Hn(n, o), $t("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = P({}, o, { value: void 0 }), $t("invalid", n);
                  break;
                case "textarea":
                  sr(n, o), c = Mn(n, o), $t("invalid", n);
                  break;
                default:
                  c = o;
              }
              pn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var w = E[d];
                d === "style" ? Qt(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && Nt(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && Q(n, w) : typeof w == "number" && Q(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (St.hasOwnProperty(d) ? w != null && d === "onScroll" && $t("scroll", n) : w != null && Qe(n, d, w, m));
              }
              switch (l) {
                case "input":
                  Bt(n), Xr(n, o, !1);
                  break;
                case "textarea":
                  Bt(n), Tn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Ue(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? fn(n, !!o.multiple, d, !1) : o.defaultValue != null && fn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = xl);
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
        return ir(r), null;
      case 6:
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(j(166));
          if (l = Su(ps.current), Su(bi.current), kc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ci] = r, (d = o.nodeValue !== l) && (n = ta, n !== null)) switch (n.tag) {
              case 3:
                Ec(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Ec(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ci] = r, r.stateNode = o;
        }
        return ir(r), null;
      case 13:
        if (cn(_n), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Sn && na !== null && r.mode & 1 && !(r.flags & 128)) ss(), Ml(), r.flags |= 98560, d = !1;
          else if (d = kc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(j(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(j(317));
              d[Ci] = r;
            } else Ml(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            ir(r), d = !1;
          } else Aa !== null && (Mu(Aa), Aa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || _n.current & 1 ? An === 0 && (An = 3) : Id())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return Eu(), Wn(n, r), n === null && oo(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return Sd(r.type._context), ir(r), null;
      case 17:
        return Bn(r.type) && vo(), ir(r), null;
      case 19:
        if (cn(_n), d = r.memoizedState, d === null) return ir(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (An !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Lc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Me(_n, _n.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && nt() > To && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Lc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !Sn) return ir(r), null;
          } else 2 * nt() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = nt(), r.sibling = null, l = _n.current, Me(_n, o ? l & 1 | 2 : l & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return Yd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Ca & 1073741824 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(j(156, r.tag));
  }
  function tf(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return Bn(r.type) && vo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Eu(), cn(Zn), cn(Dn), ze(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Mc(r), null;
      case 13:
        if (cn(_n), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(j(340));
          Ml();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return cn(_n), null;
      case 4:
        return Eu(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Yd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ds = !1, Dr = !1, ly = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
  function Eo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      En(n, r, o);
    }
    else l.current = null;
  }
  function nf(n, r, l) {
    try {
      l();
    } catch (o) {
      En(n, r, o);
    }
  }
  var Gv = !1;
  function Xv(n, r) {
    if (is = Ma, n = ts(), dc(n)) {
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
          var m = 0, E = -1, w = -1, A = 0, G = 0, q = n, W = null;
          t: for (; ; ) {
            for (var he; q !== l || c !== 0 && q.nodeType !== 3 || (E = m + c), q !== d || o !== 0 && q.nodeType !== 3 || (w = m + o), q.nodeType === 3 && (m += q.nodeValue.length), (he = q.firstChild) !== null; )
              W = q, q = he;
            for (; ; ) {
              if (q === n) break t;
              if (W === l && ++A === c && (E = m), W === d && ++G === o && (w = m), (he = q.nextSibling) !== null) break;
              q = W, W = q.parentNode;
            }
            q = he;
          }
          l = E === -1 || w === -1 ? null : { start: E, end: w };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (pu = { focusedElem: n, selectionRange: l }, Ma = !1, ge = r; ge !== null; ) if (r = ge, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ge = n;
    else for (; ge !== null; ) {
      r = ge;
      try {
        var Re = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Re !== null) {
              var ke = Re.memoizedProps, Fn = Re.memoizedState, k = r.stateNode, b = k.getSnapshotBeforeUpdate(r.elementType === r.type ? ke : li(r.type, ke), Fn);
              k.__reactInternalSnapshotBeforeUpdate = b;
            }
            break;
          case 3:
            var M = r.stateNode.containerInfo;
            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(j(163));
        }
      } catch (X) {
        En(r, r.return, X);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ge = n;
        break;
      }
      ge = r.return;
    }
    return Re = Gv, Gv = !1, Re;
  }
  function Os(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && nf(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Ms(n, r) {
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
  function Fd(n) {
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
  function rf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ci], delete r[ls], delete r[us], delete r[po], delete r[ay])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ls(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Zi(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Ls(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ki(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = xl));
    else if (o !== 4 && (n = n.child, n !== null)) for (ki(n, r, l), n = n.sibling; n !== null; ) ki(n, r, l), n = n.sibling;
  }
  function Di(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Di(n, r, l), n = n.sibling; n !== null; ) Di(n, r, l), n = n.sibling;
  }
  var Un = null, Fr = !1;
  function jr(n, r, l) {
    for (l = l.child; l !== null; ) Kv(n, r, l), l = l.sibling;
  }
  function Kv(n, r, l) {
    if (qr && typeof qr.onCommitFiberUnmount == "function") try {
      qr.onCommitFiberUnmount(ml, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Dr || Eo(l, r);
      case 6:
        var o = Un, c = Fr;
        Un = null, jr(n, r, l), Un = o, Fr = c, Un !== null && (Fr ? (n = Un, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Un.removeChild(l.stateNode));
        break;
      case 18:
        Un !== null && (Fr ? (n = Un, l = l.stateNode, n.nodeType === 8 ? fo(n.parentNode, l) : n.nodeType === 1 && fo(n, l), ti(n)) : fo(Un, l.stateNode));
        break;
      case 4:
        o = Un, c = Fr, Un = l.stateNode.containerInfo, Fr = !0, jr(n, r, l), Un = o, Fr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && nf(l, r, m), c = c.next;
          } while (c !== o);
        }
        jr(n, r, l);
        break;
      case 1:
        if (!Dr && (Eo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          En(l, r, E);
        }
        jr(n, r, l);
        break;
      case 21:
        jr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Dr = (o = Dr) || l.memoizedState !== null, jr(n, r, l), Dr = o) : jr(n, r, l);
        break;
      default:
        jr(n, r, l);
    }
  }
  function qv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new ly()), r.forEach(function(o) {
        var c = lh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ui(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              Un = E.stateNode, Fr = !1;
              break e;
            case 3:
              Un = E.stateNode.containerInfo, Fr = !0;
              break e;
            case 4:
              Un = E.stateNode.containerInfo, Fr = !0;
              break e;
          }
          E = E.return;
        }
        if (Un === null) throw Error(j(160));
        Kv(d, m, c), Un = null, Fr = !1;
        var w = c.alternate;
        w !== null && (w.return = null), c.return = null;
      } catch (A) {
        En(c, r, A);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) jd(r, n), r = r.sibling;
  }
  function jd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ui(r, n), la(n), o & 4) {
          try {
            Os(3, n, n.return), Ms(3, n);
          } catch (ke) {
            En(n, n.return, ke);
          }
          try {
            Os(5, n, n.return);
          } catch (ke) {
            En(n, n.return, ke);
          }
        }
        break;
      case 1:
        ui(r, n), la(n), o & 512 && l !== null && Eo(l, l.return);
        break;
      case 5:
        if (ui(r, n), la(n), o & 512 && l !== null && Eo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Q(c, "");
          } catch (ke) {
            En(n, n.return, ke);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Rn(c, d), nr(E, m);
            var A = nr(E, d);
            for (m = 0; m < w.length; m += 2) {
              var G = w[m], q = w[m + 1];
              G === "style" ? Qt(c, q) : G === "dangerouslySetInnerHTML" ? Nt(c, q) : G === "children" ? Q(c, q) : Qe(c, G, q, A);
            }
            switch (E) {
              case "input":
                or(c, d);
                break;
              case "textarea":
                va(c, d);
                break;
              case "select":
                var W = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var he = d.value;
                he != null ? fn(c, !!d.multiple, he, !1) : W !== !!d.multiple && (d.defaultValue != null ? fn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : fn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (ke) {
            En(n, n.return, ke);
          }
        }
        break;
      case 6:
        if (ui(r, n), la(n), o & 4) {
          if (n.stateNode === null) throw Error(j(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (ke) {
            En(n, n.return, ke);
          }
        }
        break;
      case 3:
        if (ui(r, n), la(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ti(r.containerInfo);
        } catch (ke) {
          En(n, n.return, ke);
        }
        break;
      case 4:
        ui(r, n), la(n);
        break;
      case 13:
        ui(r, n), la(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = nt())), o & 4 && qv(n);
        break;
      case 22:
        if (G = l !== null && l.memoizedState !== null, n.mode & 1 ? (Dr = (A = Dr) || G, ui(r, n), Dr = A) : ui(r, n), la(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !G && n.mode & 1) for (ge = n, G = n.child; G !== null; ) {
            for (q = ge = G; ge !== null; ) {
              switch (W = ge, he = W.child, W.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Os(4, W, W.return);
                  break;
                case 1:
                  Eo(W, W.return);
                  var Re = W.stateNode;
                  if (typeof Re.componentWillUnmount == "function") {
                    o = W, l = W.return;
                    try {
                      r = o, Re.props = r.memoizedProps, Re.state = r.memoizedState, Re.componentWillUnmount();
                    } catch (ke) {
                      En(o, l, ke);
                    }
                  }
                  break;
                case 5:
                  Eo(W, W.return);
                  break;
                case 22:
                  if (W.memoizedState !== null) {
                    Ns(q);
                    continue;
                  }
              }
              he !== null ? (he.return = W, ge = he) : Ns(q);
            }
            G = G.sibling;
          }
          e: for (G = null, q = n; ; ) {
            if (q.tag === 5) {
              if (G === null) {
                G = q;
                try {
                  c = q.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = q.stateNode, w = q.memoizedProps.style, m = w != null && w.hasOwnProperty("display") ? w.display : null, E.style.display = zt("display", m));
                } catch (ke) {
                  En(n, n.return, ke);
                }
              }
            } else if (q.tag === 6) {
              if (G === null) try {
                q.stateNode.nodeValue = A ? "" : q.memoizedProps;
              } catch (ke) {
                En(n, n.return, ke);
              }
            } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === n) && q.child !== null) {
              q.child.return = q, q = q.child;
              continue;
            }
            if (q === n) break e;
            for (; q.sibling === null; ) {
              if (q.return === null || q.return === n) break e;
              G === q && (G = null), q = q.return;
            }
            G === q && (G = null), q.sibling.return = q.return, q = q.sibling;
          }
        }
        break;
      case 19:
        ui(r, n), la(n), o & 4 && qv(n);
        break;
      case 21:
        break;
      default:
        ui(
          r,
          n
        ), la(n);
    }
  }
  function la(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Ls(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(j(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Q(c, ""), o.flags &= -33);
            var d = Zi(n);
            Di(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Zi(n);
            ki(n, E, m);
            break;
          default:
            throw Error(j(161));
        }
      } catch (w) {
        En(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function uy(n, r, l) {
    ge = n, Hd(n);
  }
  function Hd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ge !== null; ) {
      var c = ge, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ds;
        if (!m) {
          var E = c.alternate, w = E !== null && E.memoizedState !== null || Dr;
          E = Ds;
          var A = Dr;
          if (Ds = m, (Dr = w) && !A) for (ge = c; ge !== null; ) m = ge, w = m.child, m.tag === 22 && m.memoizedState !== null ? Pd(c) : w !== null ? (w.return = m, ge = w) : Pd(c);
          for (; d !== null; ) ge = d, Hd(d), d = d.sibling;
          ge = c, Ds = E, Dr = A;
        }
        Zv(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ge = d) : Zv(n);
    }
  }
  function Zv(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Dr || Ms(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Dr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : li(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && wd(r, d, o);
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
                wd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var w = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    w.autoFocus && l.focus();
                    break;
                  case "img":
                    w.src && (l.src = w.src);
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
                var A = r.alternate;
                if (A !== null) {
                  var G = A.memoizedState;
                  if (G !== null) {
                    var q = G.dehydrated;
                    q !== null && ti(q);
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
              throw Error(j(163));
          }
          Dr || r.flags & 512 && Fd(r);
        } catch (W) {
          En(r, r.return, W);
        }
      }
      if (r === n) {
        ge = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ge = l;
        break;
      }
      ge = r.return;
    }
  }
  function Ns(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r === n) {
        ge = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ge = l;
        break;
      }
      ge = r.return;
    }
  }
  function Pd(n) {
    for (; ge !== null; ) {
      var r = ge;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Ms(4, r);
            } catch (w) {
              En(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                En(r, c, w);
              }
            }
            var d = r.return;
            try {
              Fd(r);
            } catch (w) {
              En(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Fd(r);
            } catch (w) {
              En(r, m, w);
            }
        }
      } catch (w) {
        En(r, r.return, w);
      }
      if (r === n) {
        ge = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ge = E;
        break;
      }
      ge = r.return;
    }
  }
  var oy = Math.ceil, Al = ut.ReactCurrentDispatcher, Du = ut.ReactCurrentOwner, hr = ut.ReactCurrentBatchConfig, Tt = 0, er = null, Qn = null, mr = 0, Ca = 0, Co = za(0), An = 0, zs = null, Oi = 0, Ro = 0, af = 0, Us = null, ua = null, Vd = 0, To = 1 / 0, Ra = null, wo = !1, Ou = null, Fl = null, lf = !1, Ji = null, As = 0, jl = 0, xo = null, Fs = -1, Or = 0;
  function Gn() {
    return Tt & 6 ? nt() : Fs !== -1 ? Fs : Fs = nt();
  }
  function Mi(n) {
    return n.mode & 1 ? Tt & 2 && mr !== 0 ? mr & -mr : iy.transition !== null ? (Or === 0 && (Or = Ku()), Or) : (n = Ut, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ro(n.type)), n) : 1;
  }
  function Hr(n, r, l, o) {
    if (50 < jl) throw jl = 0, xo = null, Error(j(185));
    Pi(n, l, o), (!(Tt & 2) || n !== er) && (n === er && (!(Tt & 2) && (Ro |= l), An === 4 && oi(n, mr)), oa(n, o), l === 1 && Tt === 0 && !(r.mode & 1) && (To = nt() + 500, ho && Ti()));
  }
  function oa(n, r) {
    var l = n.callbackNode;
    au(n, r);
    var o = ei(n, n === er ? mr : 0);
    if (o === 0) l !== null && fr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && fr(l), r === 1) n.tag === 0 ? _l(Bd.bind(null, n)) : xc(Bd.bind(null, n)), co(function() {
        !(Tt & 6) && Ti();
      }), l = null;
      else {
        switch (Zu(o)) {
          case 1:
            l = Za;
            break;
          case 4:
            l = nu;
            break;
          case 16:
            l = ru;
            break;
          case 536870912:
            l = Qu;
            break;
          default:
            l = ru;
        }
        l = oh(l, uf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function uf(n, r) {
    if (Fs = -1, Or = 0, Tt & 6) throw Error(j(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l) return null;
    var o = ei(n, n === er ? mr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = Tt;
      Tt |= 2;
      var d = eh();
      (er !== n || mr !== r) && (Ra = null, To = nt() + 500, el(n, r));
      do
        try {
          th();
          break;
        } catch (E) {
          Jv(n, E);
        }
      while (!0);
      gd(), Al.current = d, Tt = c, Qn !== null ? r = 0 : (er = null, mr = 0, r = An);
    }
    if (r !== 0) {
      if (r === 2 && (c = gl(n), c !== 0 && (o = c, r = js(n, c))), r === 1) throw l = zs, el(n, 0), oi(n, o), oa(n, nt()), l;
      if (r === 6) oi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !sy(c) && (r = of(n, o), r === 2 && (d = gl(n), d !== 0 && (o = d, r = js(n, d))), r === 1)) throw l = zs, el(n, 0), oi(n, o), oa(n, nt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(j(345));
          case 2:
            Nu(n, ua, Ra);
            break;
          case 3:
            if (oi(n, o), (o & 130023424) === o && (r = Vd + 500 - nt(), 10 < r)) {
              if (ei(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Gn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Rc(Nu.bind(null, n, ua, Ra), r);
              break;
            }
            Nu(n, ua, Ra);
            break;
          case 4:
            if (oi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Nr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = nt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * oy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Rc(Nu.bind(null, n, ua, Ra), o);
              break;
            }
            Nu(n, ua, Ra);
            break;
          case 5:
            Nu(n, ua, Ra);
            break;
          default:
            throw Error(j(329));
        }
      }
    }
    return oa(n, nt()), n.callbackNode === l ? uf.bind(null, n) : null;
  }
  function js(n, r) {
    var l = Us;
    return n.current.memoizedState.isDehydrated && (el(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = ua, ua = l, r !== null && Mu(r)), n;
  }
  function Mu(n) {
    ua === null ? ua = n : ua.push.apply(ua, n);
  }
  function sy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ri(d(), c)) return !1;
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
  function oi(n, r) {
    for (r &= ~af, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Nr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Bd(n) {
    if (Tt & 6) throw Error(j(327));
    bo();
    var r = ei(n, 0);
    if (!(r & 1)) return oa(n, nt()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = gl(n);
      o !== 0 && (r = o, l = js(n, o));
    }
    if (l === 1) throw l = zs, el(n, 0), oi(n, r), oa(n, nt()), l;
    if (l === 6) throw Error(j(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Nu(n, ua, Ra), oa(n, nt()), null;
  }
  function $d(n, r) {
    var l = Tt;
    Tt |= 1;
    try {
      return n(r);
    } finally {
      Tt = l, Tt === 0 && (To = nt() + 500, ho && Ti());
    }
  }
  function Lu(n) {
    Ji !== null && Ji.tag === 0 && !(Tt & 6) && bo();
    var r = Tt;
    Tt |= 1;
    var l = hr.transition, o = Ut;
    try {
      if (hr.transition = null, Ut = 1, n) return n();
    } finally {
      Ut = o, hr.transition = l, Tt = r, !(Tt & 6) && Ti();
    }
  }
  function Yd() {
    Ca = Co.current, cn(Co);
  }
  function el(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, pd(l)), Qn !== null) for (l = Qn.return; l !== null; ) {
      var o = l;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && vo();
          break;
        case 3:
          Eu(), cn(Zn), cn(Dn), ze();
          break;
        case 5:
          Mc(o);
          break;
        case 4:
          Eu();
          break;
        case 13:
          cn(_n);
          break;
        case 19:
          cn(_n);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Yd();
      }
      l = l.return;
    }
    if (er = n, Qn = n = Hl(n.current, null), mr = Ca = r, An = 0, zs = null, af = Ro = Oi = 0, ua = Us = null, gu !== null) {
      for (r = 0; r < gu.length; r++) if (l = gu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      gu = null;
    }
    return n;
  }
  function Jv(n, r) {
    do {
      var l = Qn;
      try {
        if (gd(), ft.current = bu, Nc) {
          for (var o = Ft.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Nc = !1;
        }
        if (en = 0, ar = Yn = Ft = null, hs = !1, Cu = 0, Du.current = null, l === null || l.return === null) {
          An = 1, zs = r, Qn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, w = r;
          if (r = mr, E.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var A = w, G = E, q = G.tag;
            if (!(G.mode & 1) && (q === 0 || q === 11 || q === 15)) {
              var W = G.alternate;
              W ? (G.updateQueue = W.updateQueue, G.memoizedState = W.memoizedState, G.lanes = W.lanes) : (G.updateQueue = null, G.memoizedState = null);
            }
            var he = Pv(m);
            if (he !== null) {
              he.flags &= -257, Ul(he, m, E, d, r), he.mode & 1 && Ld(d, A, r), r = he, w = A;
              var Re = r.updateQueue;
              if (Re === null) {
                var ke = /* @__PURE__ */ new Set();
                ke.add(w), r.updateQueue = ke;
              } else Re.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                Ld(d, A, r), Id();
                break e;
              }
              w = Error(j(426));
            }
          } else if (Sn && E.mode & 1) {
            var Fn = Pv(m);
            if (Fn !== null) {
              !(Fn.flags & 65536) && (Fn.flags |= 256), Ul(Fn, m, E, d, r), Xi(_u(w, E));
              break e;
            }
          }
          d = w = _u(w, E), An !== 4 && (An = 2), Us === null ? Us = [d] : Us.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var k = Hv(d, w, r);
                zv(d, k);
                break e;
              case 1:
                E = w;
                var b = d.type, M = d.stateNode;
                if (!(d.flags & 128) && (typeof b.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Fl === null || !Fl.has(M)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var X = Md(d, E, r);
                  zv(d, X);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        rh(l);
      } catch (Te) {
        r = Te, Qn === l && l !== null && (Qn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function eh() {
    var n = Al.current;
    return Al.current = bu, n === null ? bu : n;
  }
  function Id() {
    (An === 0 || An === 3 || An === 2) && (An = 4), er === null || !(Oi & 268435455) && !(Ro & 268435455) || oi(er, mr);
  }
  function of(n, r) {
    var l = Tt;
    Tt |= 2;
    var o = eh();
    (er !== n || mr !== r) && (Ra = null, el(n, r));
    do
      try {
        cy();
        break;
      } catch (c) {
        Jv(n, c);
      }
    while (!0);
    if (gd(), Tt = l, Al.current = o, Qn !== null) throw Error(j(261));
    return er = null, mr = 0, An;
  }
  function cy() {
    for (; Qn !== null; ) nh(Qn);
  }
  function th() {
    for (; Qn !== null && !Ka(); ) nh(Qn);
  }
  function nh(n) {
    var r = uh(n.alternate, n, Ca);
    n.memoizedProps = n.pendingProps, r === null ? rh(n) : Qn = r, Du.current = null;
  }
  function rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = tf(l, r), l !== null) {
          l.flags &= 32767, Qn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          An = 6, Qn = null;
          return;
        }
      } else if (l = Qv(l, r, Ca), l !== null) {
        Qn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Qn = r;
        return;
      }
      Qn = r = n;
    } while (r !== null);
    An === 0 && (An = 5);
  }
  function Nu(n, r, l) {
    var o = Ut, c = hr.transition;
    try {
      hr.transition = null, Ut = 1, fy(n, r, l, o);
    } finally {
      hr.transition = c, Ut = o;
    }
    return null;
  }
  function fy(n, r, l, o) {
    do
      bo();
    while (Ji !== null);
    if (Tt & 6) throw Error(j(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(j(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Wf(n, d), n === er && (Qn = er = null, mr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, oh(ru, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = hr.transition, hr.transition = null;
      var m = Ut;
      Ut = 1;
      var E = Tt;
      Tt |= 4, Du.current = null, Xv(n, l), jd(l, n), lo(pu), Ma = !!is, pu = is = null, n.current = l, uy(l), qa(), Tt = E, Ut = m, hr.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Ji = n, As = c), d = n.pendingLanes, d === 0 && (Fl = null), Io(l.stateNode), oa(n, nt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (wo) throw wo = !1, n = Ou, Ou = null, n;
    return As & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === xo ? jl++ : (jl = 0, xo = n) : jl = 0, Ti(), null;
  }
  function bo() {
    if (Ji !== null) {
      var n = Zu(As), r = hr.transition, l = Ut;
      try {
        if (hr.transition = null, Ut = 16 > n ? 16 : n, Ji === null) var o = !1;
        else {
          if (n = Ji, Ji = null, As = 0, Tt & 6) throw Error(j(331));
          var c = Tt;
          for (Tt |= 4, ge = n.current; ge !== null; ) {
            var d = ge, m = d.child;
            if (ge.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var w = 0; w < E.length; w++) {
                  var A = E[w];
                  for (ge = A; ge !== null; ) {
                    var G = ge;
                    switch (G.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Os(8, G, d);
                    }
                    var q = G.child;
                    if (q !== null) q.return = G, ge = q;
                    else for (; ge !== null; ) {
                      G = ge;
                      var W = G.sibling, he = G.return;
                      if (rf(G), G === A) {
                        ge = null;
                        break;
                      }
                      if (W !== null) {
                        W.return = he, ge = W;
                        break;
                      }
                      ge = he;
                    }
                  }
                }
                var Re = d.alternate;
                if (Re !== null) {
                  var ke = Re.child;
                  if (ke !== null) {
                    Re.child = null;
                    do {
                      var Fn = ke.sibling;
                      ke.sibling = null, ke = Fn;
                    } while (ke !== null);
                  }
                }
                ge = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ge = m;
            else e: for (; ge !== null; ) {
              if (d = ge, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Os(9, d, d.return);
              }
              var k = d.sibling;
              if (k !== null) {
                k.return = d.return, ge = k;
                break e;
              }
              ge = d.return;
            }
          }
          var b = n.current;
          for (ge = b; ge !== null; ) {
            m = ge;
            var M = m.child;
            if (m.subtreeFlags & 2064 && M !== null) M.return = m, ge = M;
            else e: for (m = b; ge !== null; ) {
              if (E = ge, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ms(9, E);
                }
              } catch (Te) {
                En(E, E.return, Te);
              }
              if (E === m) {
                ge = null;
                break e;
              }
              var X = E.sibling;
              if (X !== null) {
                X.return = E.return, ge = X;
                break e;
              }
              ge = E.return;
            }
          }
          if (Tt = c, Ti(), qr && typeof qr.onPostCommitFiberRoot == "function") try {
            qr.onPostCommitFiberRoot(ml, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ut = l, hr.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = _u(l, r), r = Hv(n, r, 1), n = Ll(n, r, 1), r = Gn(), n !== null && (Pi(n, 1, r), oa(n, r));
  }
  function En(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Fl === null || !Fl.has(o))) {
          n = _u(l, n), n = Md(r, n, 1), r = Ll(r, n, 1), n = Gn(), r !== null && (Pi(r, 1, n), oa(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function dy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Gn(), n.pingedLanes |= n.suspendedLanes & l, er === n && (mr & l) === l && (An === 4 || An === 3 && (mr & 130023424) === mr && 500 > nt() - Vd ? el(n, 0) : af |= l), oa(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = ma, ma <<= 1, !(ma & 130023424) && (ma = 4194304)) : r = 1);
    var l = Gn();
    n = Sa(n, r), n !== null && (Pi(n, r, l), oa(n, l));
  }
  function py(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ih(n, l);
  }
  function lh(n, r) {
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
        throw Error(j(314));
    }
    o !== null && o.delete(r), ih(n, l);
  }
  var uh;
  uh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Zn.current) In = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return In = !1, _s(n, r, l);
      In = !!(n.flags & 131072);
    }
    else In = !1, Sn && r.flags & 1048576 && Ov(r, Gi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ja(n, r), n = r.pendingProps;
        var c = ea(r, Dn.current);
        bn(r, l), c = Nl(null, r, o, n, c, l);
        var d = ii();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Bn(o) ? (d = !0, rr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Td(r), c.updater = Kc, r.stateNode = c, c._reactInternals = r, Rs(r, o, n, l), r = xs(null, r, o, !0, d, l)) : (r.tag = 0, Sn && d && bc(r), vr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (ja(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = hy(o), n = li(o, n), c) {
            case 0:
              r = Vv(null, r, o, n, l);
              break e;
            case 1:
              r = Bv(null, r, o, n, l);
              break e;
            case 11:
              r = ia(null, r, o, n, l);
              break e;
            case 14:
              r = ku(null, r, o, li(o.type, n), l);
              break e;
          }
          throw Error(j(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : li(o, c), Vv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : li(o, c), Bv(n, r, o, c, l);
      case 3:
        e: {
          if (So(r), n === null) throw Error(j(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Nv(n, r), cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _u(Error(j(423)), r), r = $v(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _u(Error(j(424)), r), r = $v(n, r, o, l, c);
            break e;
          } else for (na = Ei(r.stateNode.containerInfo.firstChild), ta = r, Sn = !0, Aa = null, l = se(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ml(), o === c) {
              r = Ha(n, r, l);
              break e;
            }
            vr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Uv(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Cc(o, c) ? m = null : d !== null && Cc(o, d) && (r.flags |= 32), Nd(n, r), vr(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return ef(n, r, l);
      case 4:
        return xd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Nn(r, null, o, l) : vr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : li(o, c), ia(n, r, o, c, l);
      case 7:
        return vr(n, r, r.pendingProps, l), r.child;
      case 8:
        return vr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return vr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Me(ga, o._currentValue), o._currentValue = m, d !== null) if (ri(d.value, m)) {
            if (d.children === c.children && !Zn.current) {
              r = Ha(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var w = E.firstContext; w !== null; ) {
                if (w.context === o) {
                  if (d.tag === 1) {
                    w = Ki(-1, l & -l), w.tag = 2;
                    var A = d.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var G = A.pending;
                      G === null ? w.next = w : (w.next = G.next, G.next = w), A.pending = w;
                    }
                  }
                  d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                w = w.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(j(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
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
          vr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, bn(r, l), c = Fa(c), o = o(c), r.flags |= 1, vr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = li(o, r.pendingProps), c = li(o.type, c), ku(n, r, o, c, l);
      case 15:
        return it(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : li(o, c), ja(n, r), r.tag = 1, Bn(o) ? (n = !0, rr(r)) : n = !1, bn(r, l), qc(r, o, c), Rs(r, o, c, l), xs(null, r, o, !0, n, l);
      case 19:
        return _i(n, r, l);
      case 22:
        return ws(n, r, l);
    }
    throw Error(j(156, r.tag));
  };
  function oh(n, r) {
    return vn(n, r);
  }
  function vy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Va(n, r, l, o) {
    return new vy(n, r, l, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function hy(n) {
    if (typeof n == "function") return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === mt) return 11;
      if (n === yt) return 14;
    }
    return 2;
  }
  function Hl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Va(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Hs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Wd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Be:
        return tl(l.children, c, d, r);
      case an:
        m = 8, c |= 8;
        break;
      case Lt:
        return n = Va(12, l, r, c | 2), n.elementType = Lt, n.lanes = d, n;
      case Le:
        return n = Va(13, l, r, c), n.elementType = Le, n.lanes = d, n;
      case _t:
        return n = Va(19, l, r, c), n.elementType = _t, n.lanes = d, n;
      case Ce:
        return Pl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case It:
            m = 10;
            break e;
          case Gt:
            m = 9;
            break e;
          case mt:
            m = 11;
            break e;
          case yt:
            m = 14;
            break e;
          case Ct:
            m = 16, o = null;
            break e;
        }
        throw Error(j(130, n == null ? n : typeof n, ""));
    }
    return r = Va(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function tl(n, r, l, o) {
    return n = Va(7, n, o, r), n.lanes = l, n;
  }
  function Pl(n, r, l, o) {
    return n = Va(22, n, o, r), n.elementType = Ce, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Qd(n, r, l) {
    return n = Va(6, n, null, r), n.lanes = l, n;
  }
  function sf(n, r, l) {
    return r = Va(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = qu(0), this.expirationTimes = qu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, E, w) {
    return n = new sh(n, r, l, E, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Va(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Td(d), n;
  }
  function my(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ot, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Gd(n) {
    if (!n) return _r;
    n = n._reactInternals;
    e: {
      if (tt(n) !== n || n.tag !== 1) throw Error(j(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Bn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(j(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Bn(l)) return os(n, l, r);
    }
    return r;
  }
  function ch(n, r, l, o, c, d, m, E, w) {
    return n = cf(l, o, !0, n, c, d, m, E, w), n.context = Gd(null), l = n.current, o = Gn(), c = Mi(l), d = Ki(o, c), d.callback = r ?? null, Ll(l, d, c), n.current.lanes = c, Pi(n, c, o), oa(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Gn(), m = Mi(c);
    return l = Gd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ki(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Ll(c, r, m), n !== null && (Hr(n, c, m, d), Oc(n, c, m)), m;
  }
  function df(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Xd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pf(n, r) {
    Xd(n, r), (n = n.alternate) && Xd(n, r);
  }
  function fh() {
    return null;
  }
  var zu = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Kd(n) {
    this._internalRoot = n;
  }
  vf.prototype.render = Kd.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(j(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = Kd.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Lu(function() {
        ff(null, n, null, null);
      }), r[Wi] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Xe();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < qn.length && r !== 0 && r < qn[l].priority; l++) ;
      qn.splice(l, 0, n), l === 0 && Go(n);
    }
  };
  function qd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function dh() {
  }
  function yy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = df(m);
          d.call(A);
        };
      }
      var m = ch(r, o, n, 0, null, !1, !1, "", dh);
      return n._reactRootContainer = m, n[Wi] = m.current, oo(n.nodeType === 8 ? n.parentNode : n), Lu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = df(w);
        E.call(A);
      };
    }
    var w = cf(n, 0, !1, null, null, !1, !1, "", dh);
    return n._reactRootContainer = w, n[Wi] = w.current, oo(n.nodeType === 8 ? n.parentNode : n), Lu(function() {
      ff(r, w, l, o);
    }), w;
  }
  function Ps(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var w = df(m);
          E.call(w);
        };
      }
      ff(r, m, n, c);
    } else m = yy(l, r, n, c, o);
    return df(m);
  }
  kt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ja(r.pendingLanes);
          l !== 0 && (Vi(r, l | 1), oa(r, nt()), !(Tt & 6) && (To = nt() + 500, Ti()));
        }
        break;
      case 13:
        Lu(function() {
          var o = Sa(n, 1);
          if (o !== null) {
            var c = Gn();
            Hr(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, Wo = function(n) {
    if (n.tag === 13) {
      var r = Sa(n, 134217728);
      if (r !== null) {
        var l = Gn();
        Hr(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, hi = function(n) {
    if (n.tag === 13) {
      var r = Mi(n), l = Sa(n, r);
      if (l !== null) {
        var o = Gn();
        Hr(l, n, r, o);
      }
      pf(n, r);
    }
  }, Xe = function() {
    return Ut;
  }, Ju = function(n, r) {
    var l = Ut;
    try {
      return Ut = n, r();
    } finally {
      Ut = l;
    }
  }, Kt = function(n, r, l) {
    switch (r) {
      case "input":
        if (or(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = xn(o);
              if (!c) throw Error(j(90));
              yn(o), or(o, c);
            }
          }
        }
        break;
      case "textarea":
        va(n, l);
        break;
      case "select":
        r = l.value, r != null && fn(n, !!l.multiple, r, !1);
    }
  }, eu = $d, pl = Lu;
  var gy = { usingClientEntryPoint: !1, Events: [Ne, ai, xn, Hi, Jl, $d] }, Vs = { findFiberByHostInstance: vu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ph = { bundleType: Vs.bundleType, version: Vs.version, rendererPackageName: Vs.rendererPackageName, rendererConfig: Vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ut.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ln(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Vs.findFiberByHostInstance || fh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vl.isDisabled && Vl.supportsFiber) try {
      ml = Vl.inject(ph), qr = Vl;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qd(r)) throw Error(j(200));
    return my(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!qd(n)) throw Error(j(299));
    var l = !1, o = "", c = zu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[Wi] = r.current, oo(n.nodeType === 8 ? n.parentNode : n), new Kd(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(j(188)) : (n = Object.keys(n).join(","), Error(j(268, n)));
    return n = Ln(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Lu(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(j(200));
    return Ps(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!qd(n)) throw Error(j(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = zu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = ch(r, null, n, 1, l ?? null, c, !1, d, m), n[Wi] = r.current, oo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, Qa.render = function(n, r, l) {
    if (!hf(r)) throw Error(j(200));
    return Ps(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(j(40));
    return n._reactRootContainer ? (Lu(function() {
      Ps(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Wi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = $d, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(j(200));
    if (n == null || n._reactInternals === void 0) throw Error(j(38));
    return Ps(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Ga = {};
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
function rk() {
  return rT || (rT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ne = Cn, re = iT(), j = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ot = !1;
    function St(e) {
      Ot = e;
    }
    function bt(e) {
      if (!Ot) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Et("warn", e, a);
      }
    }
    function S(e) {
      if (!Ot) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Et("error", e, a);
      }
    }
    function Et(e, t, a) {
      {
        var i = j.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var de = 0, pe = 1, Ze = 2, J = 3, Ee = 4, ae = 5, We = 6, dt = 7, rt = 8, rn = 9, at = 10, Qe = 11, ut = 12, be = 13, ot = 14, Be = 15, an = 16, Lt = 17, It = 18, Gt = 19, mt = 21, Le = 22, _t = 23, yt = 24, Ct = 25, Ce = !0, ee = !1, U = !1, P = !1, T = !1, L = !0, ie = !0, K = !0, De = !0, _e = /* @__PURE__ */ new Set(), xe = {}, Ue = {};
    function $e(e, t) {
      et(e, t), et(e + "Capture", t);
    }
    function et(e, t) {
      xe[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), xe[e] = t;
      {
        var a = e.toLowerCase();
        Ue[a] = e, e === "onDoubleClick" && (Ue.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        _e.add(t[i]);
    }
    var Bt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", yn = Object.prototype.hasOwnProperty;
    function gn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Hn(e) {
      try {
        return Wt(e), !1;
      } catch {
        return !0;
      }
    }
    function Wt(e) {
      return "" + e;
    }
    function Rn(e, t) {
      if (Hn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, gn(e)), Wt(e);
    }
    function or(e) {
      if (Hn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gn(e)), Wt(e);
    }
    function Xr(e, t) {
      if (Hn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, gn(e)), Wt(e);
    }
    function On(e, t) {
      if (Hn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, gn(e)), Wt(e);
    }
    function Pn(e) {
      if (Hn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", gn(e)), Wt(e);
    }
    function fn(e) {
      if (Hn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", gn(e)), Wt(e);
    }
    var Mn = 0, sr = 1, va = 2, Tn = 3, Kn = 4, xr = 5, Kr = 6, Nt = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Q = Nt + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ve = new RegExp("^[" + Nt + "][" + Q + "]*$"), je = {}, zt = {};
    function Qt(e) {
      return yn.call(zt, e) ? !0 : yn.call(je, e) ? !1 : ve.test(e) ? (zt[e] = !0, !0) : (je[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, a) {
      return t !== null ? t.type === Mn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function pn(e, t, a, i) {
      if (a !== null && a.type === Mn)
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
    function nr(e, t, a, i) {
      if (t === null || typeof t > "u" || pn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Tn:
            return !t;
          case Kn:
            return t === !1;
          case xr:
            return isNaN(t);
          case Kr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function un(e) {
      return Kt.hasOwnProperty(e) ? Kt[e] : null;
    }
    function Xt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === va || t === Tn || t === Kn, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Kt = {}, ha = [
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
    ha.forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Mn,
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
      Kt[t] = new Xt(
        t,
        sr,
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
      Kt[e] = new Xt(
        e,
        va,
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
      Kt[e] = new Xt(
        e,
        va,
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
      Kt[e] = new Xt(
        e,
        Tn,
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
      Kt[e] = new Xt(
        e,
        Tn,
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
      Kt[e] = new Xt(
        e,
        Kn,
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
      Kt[e] = new Xt(
        e,
        Kr,
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
      Kt[e] = new Xt(
        e,
        xr,
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
    var br = /[\-\:]([a-z])/g, ka = function(e) {
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
      var t = e.replace(br, ka);
      Kt[t] = new Xt(
        t,
        sr,
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
      var t = e.replace(br, ka);
      Kt[t] = new Xt(
        t,
        sr,
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
      var t = e.replace(br, ka);
      Kt[t] = new Xt(
        t,
        sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        sr,
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
    var Hi = "xlinkHref";
    Kt[Hi] = new Xt(
      "xlinkHref",
      sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        sr,
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
    var Jl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, eu = !1;
    function pl(e) {
      !eu && Jl.test(e) && (eu = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function vl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Rn(a, t), i.sanitizeURL && pl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Kn) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : nr(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (nr(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Tn)
            return a;
          f = e.getAttribute(s);
        }
        return nr(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function tu(e, t, a, i) {
      {
        if (!Qt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Rn(a, t), u === "" + a ? a : u;
      }
    }
    function Mr(e, t, a, i) {
      var u = un(t);
      if (!dn(t, u, i)) {
        if (nr(t, a, u, i) && (a = null), i || u === null) {
          if (Qt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Rn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Tn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, x;
          _ === Tn || _ === Kn && a === !0 ? x = "" : (Rn(a, y), x = "" + a, u.sanitizeURL && pl(x.toString())), g ? e.setAttributeNS(g, y, x) : e.setAttribute(y, x);
        }
      }
    }
    var Lr = Symbol.for("react.element"), cr = Symbol.for("react.portal"), di = Symbol.for("react.fragment"), Xa = Symbol.for("react.strict_mode"), pi = Symbol.for("react.profiler"), vi = Symbol.for("react.provider"), R = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), Se = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), pt = Symbol.for("react.scope"), ct = Symbol.for("react.debug_trace_mode"), Ln = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), vn = Symbol.for("react.cache"), fr = Symbol.for("react.tracing_marker"), Ka = Symbol.iterator, qa = "@@iterator";
    function nt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ka && e[Ka] || e[qa];
      return typeof t == "function" ? t : null;
    }
    var lt = Object.assign, Za = 0, nu, ru, hl, Qu, ml, qr, Io;
    function Nr() {
    }
    Nr.__reactDisabledLog = !0;
    function lc() {
      {
        if (Za === 0) {
          nu = console.log, ru = console.info, hl = console.warn, Qu = console.error, ml = console.group, qr = console.groupCollapsed, Io = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Nr,
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
        Za++;
      }
    }
    function uc() {
      {
        if (Za--, Za === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lt({}, e, {
              value: nu
            }),
            info: lt({}, e, {
              value: ru
            }),
            warn: lt({}, e, {
              value: hl
            }),
            error: lt({}, e, {
              value: Qu
            }),
            group: lt({}, e, {
              value: ml
            }),
            groupCollapsed: lt({}, e, {
              value: qr
            }),
            groupEnd: lt({}, e, {
              value: Io
            })
          });
        }
        Za < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gu = j.ReactCurrentDispatcher, yl;
    function ma(e, t, a) {
      {
        if (yl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            yl = i && i[1] || "";
          }
        return `
` + yl + e;
      }
    }
    var Ja = !1, ei;
    {
      var Xu = typeof WeakMap == "function" ? WeakMap : Map;
      ei = new Xu();
    }
    function au(e, t) {
      if (!e || Ja)
        return "";
      {
        var a = ei.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ja = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Gu.current, Gu.current = null, lc();
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
            } catch (F) {
              i = F;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (F) {
              i = F;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            i = F;
          }
          e();
        }
      } catch (F) {
        if (F && i && typeof F.stack == "string") {
          for (var p = F.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && ei.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Ja = !1, Gu.current = s, uc(), Error.prepareStackTrace = u;
      }
      var x = e ? e.displayName || e.name : "", N = x ? ma(x) : "";
      return typeof e == "function" && ei.set(e, N), N;
    }
    function gl(e, t, a) {
      return au(e, !0);
    }
    function Ku(e, t, a) {
      return au(e, !1);
    }
    function qu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Pi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return au(e, qu(e));
      if (typeof e == "string")
        return ma(e);
      switch (e) {
        case oe:
          return ma("Suspense");
        case Se:
          return ma("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return Ku(e.render);
          case tt:
            return Pi(e.type, t, a);
          case Ke: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Pi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ae:
          return ma(e.type);
        case an:
          return ma("Lazy");
        case be:
          return ma("Suspense");
        case Gt:
          return ma("SuspenseList");
        case de:
        case Ze:
        case Be:
          return Ku(e.type);
        case Qe:
          return Ku(e.type.render);
        case pe:
          return gl(e.type);
        default:
          return "";
      }
    }
    function Vi(e) {
      try {
        var t = "", a = e;
        do
          t += Wf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ut(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Zu(e) {
      return e.displayName || "Context";
    }
    function kt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case di:
          return "Fragment";
        case cr:
          return "Portal";
        case pi:
          return "Profiler";
        case Xa:
          return "StrictMode";
        case oe:
          return "Suspense";
        case Se:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Zu(t) + ".Consumer";
          case vi:
            var a = e;
            return Zu(a._context) + ".Provider";
          case Y:
            return Ut(e, e.render, "ForwardRef");
          case tt:
            var i = e.displayName || null;
            return i !== null ? i : kt(e.type) || "Memo";
          case Ke: {
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
    function Wo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function hi(e) {
      return e.displayName || "Context";
    }
    function Xe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case yt:
          return "Cache";
        case rn:
          var i = a;
          return hi(i) + ".Consumer";
        case at:
          var u = a;
          return hi(u._context) + ".Provider";
        case It:
          return "DehydratedFragment";
        case Qe:
          return Wo(a, a.render, "ForwardRef");
        case dt:
          return "Fragment";
        case ae:
          return a;
        case Ee:
          return "Portal";
        case J:
          return "Root";
        case We:
          return "Text";
        case an:
          return kt(a);
        case rt:
          return a === Xa ? "StrictMode" : "Mode";
        case Le:
          return "Offscreen";
        case ut:
          return "Profiler";
        case mt:
          return "Scope";
        case be:
          return "Suspense";
        case Gt:
          return "SuspenseList";
        case Ct:
          return "TracingMarker";
        case pe:
        case de:
        case Lt:
        case Ze:
        case ot:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ju = j.ReactDebugCurrentFrame, dr = null, mi = !1;
    function zr() {
      {
        if (dr === null)
          return null;
        var e = dr._debugOwner;
        if (e !== null && typeof e < "u")
          return Xe(e);
      }
      return null;
    }
    function yi() {
      return dr === null ? "" : Vi(dr);
    }
    function hn() {
      Ju.getCurrentStack = null, dr = null, mi = !1;
    }
    function qt(e) {
      Ju.getCurrentStack = e === null ? null : yi, dr = e, mi = !1;
    }
    function Sl() {
      return dr;
    }
    function qn(e) {
      mi = e;
    }
    function Ur(e) {
      return "" + e;
    }
    function Da(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return fn(e), e;
        default:
          return "";
      }
    }
    var iu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Qo(e, t) {
      iu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Go(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function El(e) {
      return e._valueTracker;
    }
    function lu(e) {
      e._valueTracker = null;
    }
    function Qf(e) {
      var t = "";
      return e && (Go(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = Go(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      fn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            fn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            fn(p), i = "" + p;
          },
          stopTracking: function() {
            lu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ti(e) {
      El(e) || (e._valueTracker = Oa(e));
    }
    function gi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Qf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ma(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var eo = !1, to = !1, Cl = !1, uu = !1;
    function no(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ro(e, t) {
      var a = e, i = t.checked, u = lt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ni(e, t) {
      Qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !to && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), to = !0), t.value !== void 0 && t.defaultValue !== void 0 && !eo && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), eo = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Da(t.value != null ? t.value : i),
        controlled: no(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && Mr(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = no(t);
        !a._wrapperState.controlled && i && !uu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), uu = !0), a._wrapperState.controlled && !i && !Cl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cl = !0);
      }
      h(e, t);
      var u = Da(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Ur(u)) : a.value !== Ur(u) && (a.value = Ur(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ae(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ae(a, t.type, Da(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Ur(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function H(e, t) {
      var a = e;
      C(a, t), te(a, t);
    }
    function te(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Rn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Mh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            gi(f), C(f, p);
          }
        }
      }
    }
    function Ae(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ma(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Ur(e._wrapperState.initialValue) : e.defaultValue !== Ur(a) && (e.defaultValue = Ur(a)));
    }
    var ue = !1, Pe = !1, vt = !1;
    function Dt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ne.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Pe || (Pe = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (vt || (vt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ue && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ue = !0);
    }
    function sn(e, t) {
      t.value != null && e.setAttribute("value", Ur(Da(t.value)));
    }
    var Zt = Array.isArray;
    function st(e) {
      return Zt(e);
    }
    var Jt;
    Jt = !1;
    function wn() {
      var e = zr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function Xo(e) {
      {
        Qo("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = st(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, wn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, wn());
          }
        }
      }
    }
    function Bi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Ur(Da(a)), _ = null, x = 0; x < u.length; x++) {
          if (u[x].value === g) {
            u[x].selected = !0, i && (u[x].defaultSelected = !0);
            return;
          }
          _ === null && !u[x].disabled && (_ = u[x]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function Ko(e, t) {
      return lt({}, t, {
        value: void 0
      });
    }
    function ou(e, t) {
      var a = e;
      Xo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Jt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Jt = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Bi(a, !!t.multiple, i, !1) : t.defaultValue != null && Bi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Bi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Bi(a, !!t.multiple, t.defaultValue, !0) : Bi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Bi(a, !!t.multiple, i, !1);
    }
    var ev = !1;
    function Kf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = lt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Ur(a._wrapperState.initialValue)
      });
      return i;
    }
    function qf(e, t) {
      var a = e;
      Qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ev && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component"), ev = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (st(u)) {
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
        initialValue: Da(i)
      };
    }
    function tv(e, t) {
      var a = e, i = Da(t.value), u = Da(t.defaultValue);
      if (i != null) {
        var s = Ur(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Ur(u));
    }
    function nv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Qm(e, t) {
      tv(e, t);
    }
    var $i = "http://www.w3.org/1999/xhtml", Zf = "http://www.w3.org/1998/Math/MathML", Jf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Jf;
        case "math":
          return Zf;
        default:
          return $i;
      }
    }
    function td(e, t) {
      return e == null || e === $i ? ed(t) : e === Jf && t === "foreignObject" ? $i : e;
    }
    var rv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, av = rv(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Zr = 1, Yi = 3, Vn = 8, Ii = 9, nd = 11, ao = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Yi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, qo = {
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
    }, Zo = {
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
    function iv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var lv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zo).forEach(function(e) {
      lv.forEach(function(t) {
        Zo[iv(t, e)] = Zo[e];
      });
    });
    function cc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zo.hasOwnProperty(e) && Zo[e]) ? t + "px" : (On(t, e), ("" + t).trim());
    }
    var uv = /([A-Z])/g, ov = /^ms-/;
    function io(e) {
      return e.replace(uv, "-$1").toLowerCase().replace(ov, "-ms-");
    }
    var sv = function() {
    };
    {
      var Gm = /^(?:webkit|moz|o)[A-Z]/, Xm = /^-ms-/, cv = /-(.)/g, rd = /;\s*$/, Si = {}, su = {}, fv = !1, Jo = !1, Km = function(e) {
        return e.replace(cv, function(t, a) {
          return a.toUpperCase();
        });
      }, dv = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Km(e.replace(Xm, "ms-"))
        ));
      }, ad = function(e) {
        Si.hasOwnProperty(e) && Si[e] || (Si[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, id = function(e, t) {
        su.hasOwnProperty(t) && su[t] || (su[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rd, "")));
      }, pv = function(e, t) {
        fv || (fv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, vv = function(e, t) {
        Jo || (Jo = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sv = function(e, t) {
        e.indexOf("-") > -1 ? dv(e) : Gm.test(e) ? ad(e) : rd.test(t) && id(e, t), typeof t == "number" && (isNaN(t) ? pv(e, t) : isFinite(t) || vv(e, t));
      };
    }
    var hv = sv;
    function qm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : io(i)) + ":", t += cc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function mv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || hv(i, t[i]);
          var s = cc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Zm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function yv(e) {
      var t = {};
      for (var a in e)
        for (var i = qo[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Jm(e, t) {
      {
        if (!t)
          return;
        var a = yv(e), i = yv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Zm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var ri = {
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
    }, es = lt({
      menuitem: !0
    }, ri), gv = "__html";
    function fc(e, t) {
      if (t) {
        if (es[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
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
    var ts = {
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
    }, dc = {
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
    }, lo = {}, ey = new RegExp("^(aria)-[" + Q + "]*$"), uo = new RegExp("^(aria)[A-Z][" + Q + "]*$");
    function ld(e, t) {
      {
        if (yn.call(lo, t) && lo[t])
          return !0;
        if (uo.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = dc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
        if (ey.test(t)) {
          var u = t.toLowerCase(), s = dc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return lo[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), lo[t] = !0, !0;
        }
      }
      return !0;
    }
    function ns(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ld(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ud(e, t) {
      Tl(e, t) || ns(e, t);
    }
    var od = !1;
    function pc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !od && (od = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var cu = function() {
    };
    {
      var pr = {}, sd = /^on./, vc = /^on[^A-Z]/, Sv = new RegExp("^(aria)-[" + Q + "]*$"), Ev = new RegExp("^(aria)[A-Z][" + Q + "]*$");
      cu = function(e, t, a, i) {
        if (yn.call(pr, t) && pr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), pr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), pr[t] = !0, !0;
          if (sd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), pr[t] = !0, !0;
        } else if (sd.test(t))
          return vc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), pr[t] = !0, !0;
        if (Sv.test(t) || Ev.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), pr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), pr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), pr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), pr[t] = !0, !0;
        var v = un(t), y = v !== null && v.type === Mn;
        if (ts.hasOwnProperty(u)) {
          var g = ts[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), pr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), pr[t] = !0, !0;
        return typeof a == "boolean" && pn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), pr[t] = !0, !0) : y ? !0 : pn(t, a, v, !1) ? (pr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Tn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), pr[t] = !0), !0);
      };
    }
    var Cv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = cu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Rv(e, t, a) {
      Tl(e, t) || Cv(e, t, a);
    }
    var cd = 1, hc = 2, La = 4, fd = cd | hc | La, fu = null;
    function ty(e) {
      fu !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), fu = e;
    }
    function ny() {
      fu === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), fu = null;
    }
    function rs(e) {
      return e === fu;
    }
    function dd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Yi ? t.parentNode : t;
    }
    var mc = null, du = null, $t = null;
    function yc(e) {
      var t = Do(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Mh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function gc(e) {
      mc = e;
    }
    function oo(e) {
      du ? $t ? $t.push(e) : $t = [e] : du = e;
    }
    function Tv() {
      return du !== null || $t !== null;
    }
    function Sc() {
      if (du) {
        var e = du, t = $t;
        if (du = null, $t = null, yc(e), t)
          for (var a = 0; a < t.length; a++)
            yc(t[a]);
      }
    }
    var so = function(e, t) {
      return e(t);
    }, as = function() {
    }, wl = !1;
    function wv() {
      var e = Tv();
      e && (as(), Sc());
    }
    function xv(e, t, a) {
      if (wl)
        return e(t, a);
      wl = !0;
      try {
        return so(e, t, a);
      } finally {
        wl = !1, wv();
      }
    }
    function ry(e, t, a) {
      so = e, as = a;
    }
    function bv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
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
          return !!(a.disabled && bv(t));
        default:
          return !1;
      }
    }
    function xl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Mh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (Bt)
      try {
        var pu = {};
        Object.defineProperty(pu, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", pu, pu), window.removeEventListener("test", pu, pu);
      } catch {
        is = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Rc = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var pd = document.createElement("react");
      Rc = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, x = !0, N = window.event, F = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          pd.removeEventListener(B, Fe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var ce = Array.prototype.slice.call(arguments, 3);
        function Fe() {
          _ = !0, V(), a.apply(i, ce), x = !1;
        }
        var Oe, xt = !1, ht = !1;
        function D(O) {
          if (Oe = O.error, xt = !0, Oe === null && O.colno === 0 && O.lineno === 0 && (ht = !0), O.defaultPrevented && Oe != null && typeof Oe == "object")
            try {
              Oe._suppressLogging = !0;
            } catch {
            }
        }
        var B = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), pd.addEventListener(B, Fe, !1), g.initEvent(B, !1, !1), pd.dispatchEvent(g), F && Object.defineProperty(window, "event", F), _ && x && (xt ? ht && (Oe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Oe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Oe)), window.removeEventListener("error", D), !_)
          return V(), Cc.apply(this, arguments);
      };
    }
    var _v = Rc, co = !1, Tc = null, fo = !1, Ei = null, kv = {
      onError: function(e) {
        co = !0, Tc = e;
      }
    };
    function bl(e, t, a, i, u, s, f, p, v) {
      co = !1, Tc = null, _v.apply(kv, arguments);
    }
    function Ci(e, t, a, i, u, s, f, p, v) {
      if (bl.apply(this, arguments), co) {
        var y = us();
        fo || (fo = !0, Ei = y);
      }
    }
    function ls() {
      if (fo) {
        var e = Ei;
        throw fo = !1, Ei = null, e;
      }
    }
    function Wi() {
      return co;
    }
    function us() {
      if (co) {
        var e = Tc;
        return co = !1, Tc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function po(e) {
      return e._reactInternals;
    }
    function ay(e) {
      return e._reactInternals !== void 0;
    }
    function vu(e, t) {
      e._reactInternals = t;
    }
    var Ne = (
      /*                      */
      0
    ), ai = (
      /*                */
      1
    ), xn = (
      /*                    */
      2
    ), Rt = (
      /*                       */
      4
    ), Na = (
      /*                */
      16
    ), za = (
      /*                 */
      32
    ), cn = (
      /*                     */
      64
    ), Me = (
      /*                   */
      128
    ), _r = (
      /*            */
      256
    ), Dn = (
      /*                          */
      512
    ), Zn = (
      /*                     */
      1024
    ), Jr = (
      /*                      */
      2048
    ), ea = (
      /*                    */
      4096
    ), Bn = (
      /*                   */
      8192
    ), vo = (
      /*             */
      16384
    ), Dv = (
      /*               */
      32767
    ), os = (
      /*                   */
      32768
    ), rr = (
      /*                */
      65536
    ), wc = (
      /* */
      131072
    ), Ri = (
      /*                       */
      1048576
    ), ho = (
      /*                    */
      2097152
    ), Qi = (
      /*                 */
      4194304
    ), xc = (
      /*                */
      8388608
    ), _l = (
      /*               */
      16777216
    ), Ti = (
      /*              */
      33554432
    ), kl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Rt | Zn | 0
    ), Dl = xn | Rt | Na | za | Dn | ea | Bn, Ol = Rt | cn | Dn | Bn, Gi = Jr | Na, $n = Qi | xc | ho, Ua = j.ReactCurrentOwner;
    function ya(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (xn | ea)) !== Ne && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function wi(e) {
      if (e.tag === be) {
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
    function xi(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function hu(e) {
      return ya(e) === e;
    }
    function Ov(e) {
      {
        var t = Ua.current;
        if (t !== null && t.tag === pe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Xe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = po(e);
      return u ? ya(u) === u : !1;
    }
    function bc(e) {
      if (ya(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function _c(e) {
      var t = e.alternate;
      if (!t) {
        var a = ya(e);
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
              return bc(s), e;
            if (v === u)
              return bc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ta(e) {
      var t = _c(e);
      return t !== null ? na(t) : null;
    }
    function na(e) {
      if (e.tag === ae || e.tag === We)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = na(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Sn(e) {
      var t = _c(e);
      return t !== null ? Aa(t) : null;
    }
    function Aa(e) {
      if (e.tag === ae || e.tag === We)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ee) {
          var a = Aa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = re.unstable_scheduleCallback, Mv = re.unstable_cancelCallback, hd = re.unstable_shouldYield, md = re.unstable_requestPaint, Jn = re.unstable_now, kc = re.unstable_getCurrentPriorityLevel, ss = re.unstable_ImmediatePriority, Ml = re.unstable_UserBlockingPriority, Xi = re.unstable_NormalPriority, iy = re.unstable_LowPriority, mu = re.unstable_IdlePriority, Dc = re.unstable_yieldValue, Lv = re.unstable_setDisableYieldValue, yu = null, Nn = null, se = null, ga = !1, ra = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function mo(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ie && (e = lt({}, e, {
          getLaneLabelMap: gu,
          injectProfilingHooks: Fa
        })), yu = t.inject(e), Nn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yd(e, t) {
      if (Nn && typeof Nn.onScheduleFiberRoot == "function")
        try {
          Nn.onScheduleFiberRoot(yu, e, t);
        } catch (a) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (Nn && typeof Nn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Me) === Me;
          if (K) {
            var i;
            switch (t) {
              case Ar:
                i = ss;
                break;
              case _i:
                i = Ml;
                break;
              case ja:
                i = Xi;
                break;
              case Ha:
                i = mu;
                break;
              default:
                i = Xi;
                break;
            }
            Nn.onCommitFiberRoot(yu, e, i, a);
          }
        } catch (u) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (Nn && typeof Nn.onPostCommitFiberRoot == "function")
        try {
          Nn.onPostCommitFiberRoot(yu, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ed(e) {
      if (Nn && typeof Nn.onCommitFiberUnmount == "function")
        try {
          Nn.onCommitFiberUnmount(yu, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function bn(e) {
      if (typeof Dc == "function" && (Lv(e), St(e)), Nn && typeof Nn.setStrictMode == "function")
        try {
          Nn.setStrictMode(yu, e);
        } catch (t) {
          ga || (ga = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Fa(e) {
      se = e;
    }
    function gu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Cu; a++) {
          var i = Av(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Cd(e) {
      se !== null && typeof se.markCommitStarted == "function" && se.markCommitStarted(e);
    }
    function Rd() {
      se !== null && typeof se.markCommitStopped == "function" && se.markCommitStopped();
    }
    function Sa(e) {
      se !== null && typeof se.markComponentRenderStarted == "function" && se.markComponentRenderStarted(e);
    }
    function Ea() {
      se !== null && typeof se.markComponentRenderStopped == "function" && se.markComponentRenderStopped();
    }
    function Td(e) {
      se !== null && typeof se.markComponentPassiveEffectMountStarted == "function" && se.markComponentPassiveEffectMountStarted(e);
    }
    function Nv() {
      se !== null && typeof se.markComponentPassiveEffectMountStopped == "function" && se.markComponentPassiveEffectMountStopped();
    }
    function Ki(e) {
      se !== null && typeof se.markComponentPassiveEffectUnmountStarted == "function" && se.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ll() {
      se !== null && typeof se.markComponentPassiveEffectUnmountStopped == "function" && se.markComponentPassiveEffectUnmountStopped();
    }
    function Oc(e) {
      se !== null && typeof se.markComponentLayoutEffectMountStarted == "function" && se.markComponentLayoutEffectMountStarted(e);
    }
    function zv() {
      se !== null && typeof se.markComponentLayoutEffectMountStopped == "function" && se.markComponentLayoutEffectMountStopped();
    }
    function cs(e) {
      se !== null && typeof se.markComponentLayoutEffectUnmountStarted == "function" && se.markComponentLayoutEffectUnmountStarted(e);
    }
    function wd() {
      se !== null && typeof se.markComponentLayoutEffectUnmountStopped == "function" && se.markComponentLayoutEffectUnmountStopped();
    }
    function fs(e, t, a) {
      se !== null && typeof se.markComponentErrored == "function" && se.markComponentErrored(e, t, a);
    }
    function bi(e, t, a) {
      se !== null && typeof se.markComponentSuspended == "function" && se.markComponentSuspended(e, t, a);
    }
    function ds(e) {
      se !== null && typeof se.markLayoutEffectsStarted == "function" && se.markLayoutEffectsStarted(e);
    }
    function ps() {
      se !== null && typeof se.markLayoutEffectsStopped == "function" && se.markLayoutEffectsStopped();
    }
    function Su(e) {
      se !== null && typeof se.markPassiveEffectsStarted == "function" && se.markPassiveEffectsStarted(e);
    }
    function xd() {
      se !== null && typeof se.markPassiveEffectsStopped == "function" && se.markPassiveEffectsStopped();
    }
    function Eu(e) {
      se !== null && typeof se.markRenderStarted == "function" && se.markRenderStarted(e);
    }
    function Uv() {
      se !== null && typeof se.markRenderYielded == "function" && se.markRenderYielded();
    }
    function Mc() {
      se !== null && typeof se.markRenderStopped == "function" && se.markRenderStopped();
    }
    function _n(e) {
      se !== null && typeof se.markRenderScheduled == "function" && se.markRenderScheduled(e);
    }
    function Lc(e, t) {
      se !== null && typeof se.markForceUpdateScheduled == "function" && se.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      se !== null && typeof se.markStateUpdateScheduled == "function" && se.markStateUpdateScheduled(e, t);
    }
    var ze = (
      /*                         */
      0
    ), ft = (
      /*                 */
      1
    ), At = (
      /*                    */
      2
    ), en = (
      /*               */
      8
    ), Ft = (
      /*              */
      16
    ), Yn = Math.clz32 ? Math.clz32 : hs, ar = Math.log, Nc = Math.LN2;
    function hs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ar(t) / Nc | 0) | 0;
    }
    var Cu = 31, I = (
      /*                        */
      0
    ), Mt = (
      /*                          */
      0
    ), Ye = (
      /*                        */
      1
    ), Nl = (
      /*    */
      2
    ), ii = (
      /*             */
      4
    ), kr = (
      /*            */
      8
    ), zn = (
      /*                     */
      16
    ), qi = (
      /*                */
      32
    ), zl = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), zc = (
      /*                        */
      128
    ), Uc = (
      /*                        */
      256
    ), Ac = (
      /*                        */
      512
    ), Fc = (
      /*                        */
      1024
    ), jc = (
      /*                        */
      2048
    ), Hc = (
      /*                        */
      4096
    ), Pc = (
      /*                        */
      8192
    ), Vc = (
      /*                        */
      16384
    ), Tu = (
      /*                       */
      32768
    ), Bc = (
      /*                       */
      65536
    ), yo = (
      /*                       */
      131072
    ), go = (
      /*                       */
      262144
    ), $c = (
      /*                       */
      524288
    ), ms = (
      /*                       */
      1048576
    ), Yc = (
      /*                       */
      2097152
    ), ys = (
      /*                            */
      130023424
    ), wu = (
      /*                             */
      4194304
    ), Ic = (
      /*                             */
      8388608
    ), gs = (
      /*                             */
      16777216
    ), Wc = (
      /*                             */
      33554432
    ), Qc = (
      /*                             */
      67108864
    ), bd = wu, Ss = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), Es = (
      /*               */
      268435456
    ), xu = (
      /*                        */
      536870912
    ), aa = (
      /*                   */
      1073741824
    );
    function Av(e) {
      {
        if (e & Ye)
          return "Sync";
        if (e & Nl)
          return "InputContinuousHydration";
        if (e & ii)
          return "InputContinuous";
        if (e & kr)
          return "DefaultHydration";
        if (e & zn)
          return "Default";
        if (e & qi)
          return "TransitionHydration";
        if (e & zl)
          return "Transition";
        if (e & ys)
          return "Retry";
        if (e & Ss)
          return "SelectiveHydration";
        if (e & Es)
          return "IdleHydration";
        if (e & xu)
          return "Idle";
        if (e & aa)
          return "Offscreen";
      }
    }
    var ln = -1, bu = Ru, Gc = wu;
    function Cs(e) {
      switch (Ul(e)) {
        case Ye:
          return Ye;
        case Nl:
          return Nl;
        case ii:
          return ii;
        case kr:
          return kr;
        case zn:
          return zn;
        case qi:
          return qi;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Yc:
          return e & zl;
        case wu:
        case Ic:
        case gs:
        case Wc:
        case Qc:
          return e & ys;
        case Ss:
          return Ss;
        case Es:
          return Es;
        case xu:
          return xu;
        case aa:
          return aa;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Xc(e, t) {
      var a = e.pendingLanes;
      if (a === I)
        return I;
      var i = I, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== I) {
        var p = f & ~u;
        if (p !== I)
          i = Cs(p);
        else {
          var v = f & s;
          v !== I && (i = Cs(v));
        }
      } else {
        var y = a & ~u;
        y !== I ? i = Cs(y) : s !== I && (i = Cs(s));
      }
      if (i === I)
        return I;
      if (t !== I && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === I) {
        var g = Ul(i), _ = Ul(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === zn && (_ & zl) !== I
        )
          return t;
      }
      (i & ii) !== I && (i |= a & zn);
      var x = e.entangledLanes;
      if (x !== I)
        for (var N = e.entanglements, F = i & x; F > 0; ) {
          var V = In(F), ce = 1 << V;
          i |= N[V], F &= ~ce;
        }
      return i;
    }
    function li(e, t) {
      for (var a = e.eventTimes, i = ln; t > 0; ) {
        var u = In(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function kd(e, t) {
      switch (e) {
        case Ye:
        case Nl:
        case ii:
          return t + 250;
        case kr:
        case zn:
        case qi:
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Yc:
          return t + 5e3;
        case wu:
        case Ic:
        case gs:
        case Wc:
        case Qc:
          return ln;
        case Ss:
        case Es:
        case xu:
        case aa:
          return ln;
        default:
          return S("Should have found matching lanes. This is a bug in React."), ln;
      }
    }
    function Kc(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = In(f), v = 1 << p, y = s[p];
        y === ln ? ((v & i) === I || (v & u) !== I) && (s[p] = kd(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Fv(e) {
      return Cs(e.pendingLanes);
    }
    function qc(e) {
      var t = e.pendingLanes & ~aa;
      return t !== I ? t : t & aa ? aa : I;
    }
    function jv(e) {
      return (e & Ye) !== I;
    }
    function Rs(e) {
      return (e & _d) !== I;
    }
    function _u(e) {
      return (e & ys) === e;
    }
    function Dd(e) {
      var t = Ye | ii | zn;
      return (e & t) === I;
    }
    function Od(e) {
      return (e & zl) === e;
    }
    function Zc(e, t) {
      var a = Nl | ii | kr | zn;
      return (t & a) !== I;
    }
    function Hv(e, t) {
      return (t & e.expiredLanes) !== I;
    }
    function Md(e) {
      return (e & zl) !== I;
    }
    function Ld() {
      var e = bu;
      return bu <<= 1, (bu & zl) === I && (bu = Ru), e;
    }
    function Pv() {
      var e = Gc;
      return Gc <<= 1, (Gc & ys) === I && (Gc = wu), e;
    }
    function Ul(e) {
      return e & -e;
    }
    function Ts(e) {
      return Ul(e);
    }
    function In(e) {
      return 31 - Yn(e);
    }
    function vr(e) {
      return In(e);
    }
    function ia(e, t) {
      return (e & t) !== I;
    }
    function ku(e, t) {
      return (e & t) === t;
    }
    function it(e, t) {
      return e | t;
    }
    function ws(e, t) {
      return e & ~t;
    }
    function Nd(e, t) {
      return e & t;
    }
    function Vv(e) {
      return e;
    }
    function Bv(e, t) {
      return e !== Mt && e < t ? e : t;
    }
    function xs(e) {
      for (var t = [], a = 0; a < Cu; a++)
        t.push(e);
      return t;
    }
    function So(e, t, a) {
      e.pendingLanes |= t, t !== xu && (e.suspendedLanes = I, e.pingedLanes = I);
      var i = e.eventTimes, u = vr(t);
      i[u] = a;
    }
    function $v(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = In(i), s = 1 << u;
        a[u] = ln, i &= ~s;
      }
    }
    function Jc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function zd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = I, e.pingedLanes = I, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = In(f), v = 1 << p;
        i[p] = I, u[p] = ln, s[p] = ln, f &= ~v;
      }
    }
    function ef(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = In(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ud(e, t) {
      var a = Ul(t), i;
      switch (a) {
        case ii:
          i = Nl;
          break;
        case zn:
          i = kr;
          break;
        case Ru:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case jc:
        case Hc:
        case Pc:
        case Vc:
        case Tu:
        case Bc:
        case yo:
        case go:
        case $c:
        case ms:
        case Yc:
        case wu:
        case Ic:
        case gs:
        case Wc:
        case Qc:
          i = qi;
          break;
        case xu:
          i = Es;
          break;
        default:
          i = Mt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Mt ? Mt : i;
    }
    function bs(e, t, a) {
      if (ra)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = vr(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Yv(e, t) {
      if (ra)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = vr(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ad(e, t) {
      return null;
    }
    var Ar = Ye, _i = ii, ja = zn, Ha = xu, _s = Mt;
    function Pa() {
      return _s;
    }
    function Wn(e) {
      _s = e;
    }
    function Iv(e, t) {
      var a = _s;
      try {
        return _s = e, t();
      } finally {
        _s = a;
      }
    }
    function Wv(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ks(e, t) {
      return e > t ? e : t;
    }
    function ir(e, t) {
      return e !== 0 && e < t;
    }
    function Qv(e) {
      var t = Ul(e);
      return ir(Ar, t) ? ir(_i, t) ? Rs(t) ? ja : Ha : _i : Ar;
    }
    function tf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ds;
    function Dr(e) {
      Ds = e;
    }
    function ly(e) {
      Ds(e);
    }
    var ge;
    function Eo(e) {
      ge = e;
    }
    var nf;
    function Gv(e) {
      nf = e;
    }
    var Xv;
    function Os(e) {
      Xv = e;
    }
    var Ms;
    function Fd(e) {
      Ms = e;
    }
    var rf = !1, Ls = [], Zi = null, ki = null, Di = null, Un = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map(), jr = [], Kv = [
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
    function qv(e) {
      return Kv.indexOf(e) > -1;
    }
    function ui(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function jd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Zi = null;
          break;
        case "dragenter":
        case "dragleave":
          ki = null;
          break;
        case "mouseover":
        case "mouseout":
          Di = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Un.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Fr.delete(i);
          break;
        }
      }
    }
    function la(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ui(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && ge(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function uy(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Zi = la(Zi, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return ki = la(ki, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Di = la(Di, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Un.set(y, la(Un.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return Fr.set(_, la(Fr.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = ya(t);
        if (a !== null) {
          var i = a.tag;
          if (i === be) {
            var u = wi(a);
            if (u !== null) {
              e.blockedOn = u, Ms(e.priority, function() {
                nf(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (tf(s)) {
              e.blockedOn = xi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = Xv(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < jr.length && ir(t, jr[i].priority); i++)
        ;
      jr.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ro(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ty(s), u.target.dispatchEvent(s), ny();
        } else {
          var f = Do(i);
          return f !== null && ge(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Pd(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function oy() {
      rf = !1, Zi !== null && Ns(Zi) && (Zi = null), ki !== null && Ns(ki) && (ki = null), Di !== null && Ns(Di) && (Di = null), Un.forEach(Pd), Fr.forEach(Pd);
    }
    function Al(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, re.unstable_scheduleCallback(re.unstable_NormalPriority, oy)));
    }
    function Du(e) {
      if (Ls.length > 0) {
        Al(Ls[0], e);
        for (var t = 1; t < Ls.length; t++) {
          var a = Ls[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Zi !== null && Al(Zi, e), ki !== null && Al(ki, e), Di !== null && Al(Di, e);
      var i = function(p) {
        return Al(p, e);
      };
      Un.forEach(i), Fr.forEach(i);
      for (var u = 0; u < jr.length; u++) {
        var s = jr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; jr.length > 0; ) {
        var f = jr[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && jr.shift();
      }
    }
    var hr = j.ReactCurrentBatchConfig, Tt = !0;
    function er(e) {
      Tt = !!e;
    }
    function Qn() {
      return Tt;
    }
    function mr(e, t, a) {
      var i = af(t), u;
      switch (i) {
        case Ar:
          u = Ca;
          break;
        case _i:
          u = Co;
          break;
        case ja:
        default:
          u = An;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Ca(e, t, a, i) {
      var u = Pa(), s = hr.transition;
      hr.transition = null;
      try {
        Wn(Ar), An(e, t, a, i);
      } finally {
        Wn(u), hr.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = Pa(), s = hr.transition;
      hr.transition = null;
      try {
        Wn(_i), An(e, t, a, i);
      } finally {
        Wn(u), hr.transition = s;
      }
    }
    function An(e, t, a, i) {
      Tt && zs(e, t, a, i);
    }
    function zs(e, t, a, i) {
      var u = Ro(e, t, a, i);
      if (u === null) {
        xy(e, t, i, Oi, a), jd(e, i);
        return;
      }
      if (uy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (jd(e, i), t & La && qv(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && ly(s);
          var f = Ro(e, t, a, i);
          if (f === null && xy(e, t, i, Oi, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      xy(e, t, i, null, a);
    }
    var Oi = null;
    function Ro(e, t, a, i) {
      Oi = null;
      var u = dd(i), s = Ys(u);
      if (s !== null) {
        var f = ya(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === be) {
            var v = wi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (tf(y))
              return xi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Oi = s, null;
    }
    function af(e) {
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
          return Ar;
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
          return _i;
        case "message": {
          var t = kc();
          switch (t) {
            case ss:
              return Ar;
            case Ml:
              return _i;
            case Xi:
            case iy:
              return ja;
            case mu:
              return Ha;
            default:
              return ja;
          }
        }
        default:
          return ja;
      }
    }
    function Us(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ua(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Vd(e, t, a, i) {
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
    var Ra = null, wo = null, Ou = null;
    function Fl(e) {
      return Ra = e, wo = As(), !0;
    }
    function lf() {
      Ra = null, wo = null, Ou = null;
    }
    function Ji() {
      if (Ou)
        return Ou;
      var e, t = wo, a = t.length, i, u = As(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ou = u.slice(e, p), Ou;
    }
    function As() {
      return "value" in Ra ? Ra.value : Ra.textContent;
    }
    function jl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function xo() {
      return !0;
    }
    function Fs() {
      return !1;
    }
    function Or(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = xo : this.isDefaultPrevented = Fs, this.isPropagationStopped = Fs, this;
      }
      return lt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xo);
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
        isPersistent: xo
      }), t;
    }
    var Gn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Mi = Or(Gn), Hr = lt({}, Gn, {
      view: 0,
      detail: 0
    }), oa = Or(Hr), uf, js, Mu;
    function sy(e) {
      e !== Mu && (Mu && e.type === "mousemove" ? (uf = e.screenX - Mu.screenX, js = e.screenY - Mu.screenY) : (uf = 0, js = 0), Mu = e);
    }
    var oi = lt({}, Hr, {
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
      getModifierState: En,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (sy(e), uf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : js;
      }
    }), Bd = Or(oi), $d = lt({}, oi, {
      dataTransfer: 0
    }), Lu = Or($d), Yd = lt({}, Hr, {
      relatedTarget: 0
    }), el = Or(Yd), Jv = lt({}, Gn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), eh = Or(Jv), Id = lt({}, Gn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), of = Or(Id), cy = lt({}, Gn, {
      data: 0
    }), th = Or(cy), nh = th, rh = {
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
    }, Nu = {
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
    function fy(e) {
      if (e.key) {
        var t = rh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = jl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Nu[e.keyCode] || "Unidentified" : "";
    }
    var bo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ah(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = bo[e];
      return i ? !!a[i] : !1;
    }
    function En(e) {
      return ah;
    }
    var dy = lt({}, Hr, {
      key: fy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: En,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? jl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ih = Or(dy), py = lt({}, oi, {
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
    }), lh = Or(py), uh = lt({}, Hr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: En
    }), oh = Or(uh), vy = lt({}, Gn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Va = Or(vy), Wd = lt({}, oi, {
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
    }), hy = Or(Wd), Hl = [9, 13, 27, 32], Hs = 229, tl = Bt && "CompositionEvent" in window, Pl = null;
    Bt && "documentMode" in document && (Pl = document.documentMode);
    var Qd = Bt && "TextEvent" in window && !Pl, sf = Bt && (!tl || Pl && Pl > 8 && Pl <= 11), sh = 32, cf = String.fromCharCode(sh);
    function my() {
      $e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), $e("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $e("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), $e("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function ch(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function ff(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function df(e, t) {
      return e === "keydown" && t.keyCode === Hs;
    }
    function Xd(e, t) {
      switch (e) {
        case "keyup":
          return Hl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Hs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function fh(e) {
      return e.locale === "ko";
    }
    var zu = !1;
    function Kd(e, t, a, i, u) {
      var s, f;
      if (tl ? s = ff(t) : zu ? Xd(t, i) && (s = "onCompositionEnd") : df(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sf && !fh(i) && (!zu && s === "onCompositionStart" ? zu = Fl(u) : s === "onCompositionEnd" && zu && (f = Ji()));
      var p = gh(a, s);
      if (p.length > 0) {
        var v = new th(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = pf(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vf(e, t) {
      switch (e) {
        case "compositionend":
          return pf(t);
        case "keypress":
          var a = t.which;
          return a !== sh ? null : (Gd = !0, cf);
        case "textInput":
          var i = t.data;
          return i === cf && Gd ? null : i;
        default:
          return null;
      }
    }
    function qd(e, t) {
      if (zu) {
        if (e === "compositionend" || !tl && Xd(e, t)) {
          var a = Ji();
          return lf(), zu = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ch(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sf && !fh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hf(e, t, a, i, u) {
      var s;
      if (Qd ? s = vf(t, i) : s = qd(t, i), !s)
        return null;
      var f = gh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new nh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function dh(e, t, a, i, u, s, f) {
      Kd(e, t, a, i, u), hf(e, t, a, i, u);
    }
    var yy = {
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
    function Ps(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!yy[e.type] : t === "textarea";
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
    function gy(e) {
      if (!Bt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vs() {
      $e("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function ph(e, t, a, i) {
      oo(i);
      var u = gh(t, "onChange");
      if (u.length > 0) {
        var s = new Mi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Vl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      ph(t, n, e, dd(e)), xv(o, t);
    }
    function o(e) {
      bE(e, 0);
    }
    function c(e) {
      var t = Cf(e);
      if (gi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    Bt && (m = gy("input") && (!document.documentMode || document.documentMode > 9));
    function E(e, t) {
      Vl = e, n = t, Vl.attachEvent("onpropertychange", A);
    }
    function w() {
      Vl && (Vl.detachEvent("onpropertychange", A), Vl = null, n = null);
    }
    function A(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (w(), E(t, a)) : e === "focusout" && w();
    }
    function q(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function W(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function he(e, t) {
      if (e === "click")
        return c(t);
    }
    function Re(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function ke(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ae(e, "number", e.value);
    }
    function Fn(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (r(p) ? v = d : Ps(p) ? m ? v = Re : (v = q, y = G) : W(p) && (v = he), v) {
        var g = v(t, a);
        if (g) {
          ph(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && ke(p);
    }
    function k() {
      et("onMouseEnter", ["mouseout", "mouseover"]), et("onMouseLeave", ["mouseout", "mouseover"]), et("onPointerEnter", ["pointerout", "pointerover"]), et("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function b(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !rs(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ys(y) || fp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var x, N;
        if (v) {
          var F = i.relatedTarget || i.toElement;
          if (x = a, N = F ? Ys(F) : null, N !== null) {
            var V = ya(N);
            (N !== V || N.tag !== ae && N.tag !== We) && (N = null);
          }
        } else
          x = null, N = a;
        if (x !== N) {
          var ce = Bd, Fe = "onMouseLeave", Oe = "onMouseEnter", xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ce = lh, Fe = "onPointerLeave", Oe = "onPointerEnter", xt = "pointer");
          var ht = x == null ? g : Cf(x), D = N == null ? g : Cf(N), B = new ce(Fe, xt + "leave", x, i, u);
          B.target = ht, B.relatedTarget = D;
          var O = null, Z = Ys(u);
          if (Z === a) {
            var ye = new ce(Oe, xt + "enter", N, i, u);
            ye.target = D, ye.relatedTarget = ht, O = ye;
          }
          bT(e, B, O, x, N);
        }
      }
    }
    function M(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var X = typeof Object.is == "function" ? Object.is : M;
    function Te(e, t) {
      if (X(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!yn.call(t, s) || !X(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function He(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ve(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ge(e, t) {
      for (var a = He(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Yi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = He(Ve(a));
      }
    }
    function lr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return jt(e, u, s, f, p);
    }
    function jt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var x = null; g === t && (a === 0 || g.nodeType === Yi) && (f = s + a), g === i && (u === 0 || g.nodeType === Yi) && (p = s + u), g.nodeType === Yi && (s += g.nodeValue.length), (x = g.firstChild) !== null; )
          _ = g, g = x;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (x = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = x;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Bl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ge(e, f), g = Ge(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function vh(e) {
      return e && e.nodeType === Yi;
    }
    function hE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vh(e) ? !1 : vh(t) ? hE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function oT(e) {
      return e && e.ownerDocument && hE(e.ownerDocument.documentElement, e);
    }
    function sT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mE() {
      for (var e = window, t = Ma(); t instanceof e.HTMLIFrameElement; ) {
        if (sT(t))
          e = t.contentWindow;
        else
          return t;
        t = Ma(e.document);
      }
      return t;
    }
    function Sy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function cT() {
      var e = mE();
      return {
        focusedElem: e,
        selectionRange: Sy(e) ? dT(e) : null
      };
    }
    function fT(e) {
      var t = mE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && oT(a)) {
        i !== null && Sy(a) && pT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Zr && u.push({
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
      } : t = lr(e), t || {
        start: 0,
        end: 0
      };
    }
    function pT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Bl(e, t);
    }
    var vT = Bt && "documentMode" in document && document.documentMode <= 11;
    function hT() {
      $e("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, Ey = null, Zd = null, Cy = !1;
    function mT(e) {
      if ("selectionStart" in e && Sy(e))
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
      return e.window === e ? e.document : e.nodeType === Ii ? e : e.ownerDocument;
    }
    function yE(e, t, a) {
      var i = yT(a);
      if (!(Cy || mf == null || mf !== Ma(i))) {
        var u = mT(mf);
        if (!Zd || !Te(Zd, u)) {
          Zd = u;
          var s = gh(Ey, "onSelect");
          if (s.length > 0) {
            var f = new Mi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function gT(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (Ps(p) || p.contentEditable === "true") && (mf = p, Ey = a, Zd = null);
          break;
        case "focusout":
          mf = null, Ey = null, Zd = null;
          break;
        case "mousedown":
          Cy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Cy = !1, yE(e, i, u);
          break;
        case "selectionchange":
          if (vT)
            break;
        case "keydown":
        case "keyup":
          yE(e, i, u);
      }
    }
    function hh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: hh("Animation", "AnimationEnd"),
      animationiteration: hh("Animation", "AnimationIteration"),
      animationstart: hh("Animation", "AnimationStart"),
      transitionend: hh("Transition", "TransitionEnd")
    }, Ry = {}, gE = {};
    Bt && (gE = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function mh(e) {
      if (Ry[e])
        return Ry[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in gE)
          return Ry[e] = t[a];
      return e;
    }
    var SE = mh("animationend"), EE = mh("animationiteration"), CE = mh("animationstart"), RE = mh("transitionend"), TE = /* @__PURE__ */ new Map(), wE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      TE.set(e, t), $e(t, [e]);
    }
    function ST() {
      for (var e = 0; e < wE.length; e++) {
        var t = wE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(SE, "onAnimationEnd"), _o(EE, "onAnimationIteration"), _o(CE, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(RE, "onTransitionEnd");
    }
    function ET(e, t, a, i, u, s, f) {
      var p = TE.get(t);
      if (p !== void 0) {
        var v = Mi, y = t;
        switch (t) {
          case "keypress":
            if (jl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ih;
            break;
          case "focusin":
            y = "focus", v = el;
            break;
          case "focusout":
            y = "blur", v = el;
            break;
          case "beforeblur":
          case "afterblur":
            v = el;
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
            v = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Lu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = oh;
            break;
          case SE:
          case EE:
          case CE:
            v = eh;
            break;
          case RE:
            v = Va;
            break;
          case "scroll":
            v = oa;
            break;
          case "wheel":
            v = hy;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = lh;
            break;
        }
        var g = (s & La) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", x = wT(a, p, i.type, g, _);
          if (x.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: x
            });
          }
        }
      }
    }
    ST(), k(), Vs(), hT(), my();
    function CT(e, t, a, i, u, s, f) {
      ET(e, t, a, i, u, s);
      var p = (s & fd) === 0;
      p && (b(e, t, a, i, u), Fn(e, t, a, i, u), gT(e, t, a, i, u), dh(e, t, a, i, u));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ty = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function xE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ci(i, t, void 0, e), e.currentTarget = null;
    }
    function RT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          xE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, x = g.currentTarget, N = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          xE(e, N, x), i = _;
        }
    }
    function bE(e, t) {
      for (var a = (t & La) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        RT(s, f, a);
      }
      ls();
    }
    function TT(e, t, a, i, u) {
      var s = dd(a), f = [];
      CT(f, e, i, a, s, t), bE(f, t);
    }
    function kn(e, t) {
      Ty.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Jw(t), u = _T(e);
      i.has(u) || (_E(t, e, hc, a), i.add(u));
    }
    function wy(e, t, a) {
      Ty.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= La), _E(a, e, i, t);
    }
    var yh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[yh]) {
        e[yh] = !0, _e.forEach(function(a) {
          a !== "selectionchange" && (Ty.has(a) || wy(a, !1, e), wy(a, !0, e));
        });
        var t = e.nodeType === Ii ? e : e.ownerDocument;
        t !== null && (t[yh] || (t[yh] = !0, wy("selectionchange", !1, t)));
      }
    }
    function _E(e, t, a, i, u) {
      var s = mr(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Vd(e, t, s, f) : ua(e, t, s) : f !== void 0 ? To(e, t, s, f) : Us(e, t, s);
    }
    function kE(e, t) {
      return e === t || e.nodeType === Vn && e.parentNode === t;
    }
    function xy(e, t, a, i, u) {
      var s = i;
      if (!(t & cd) && !(t & hc)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === Ee) {
              var y = p.stateNode.containerInfo;
              if (kE(y, f))
                break;
              if (v === Ee)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === J || _ === Ee) {
                    var x = g.stateNode.containerInfo;
                    if (kE(x, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var N = Ys(y);
                if (N === null)
                  return;
                var F = N.tag;
                if (F === ae || F === We) {
                  p = s = N;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      xv(function() {
        return TT(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function wT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, x = _.stateNode, N = _.tag;
        if (N === ae && x !== null && (g = x, p !== null)) {
          var F = xl(y, p);
          F != null && v.push(tp(y, F, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function gh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ae && f !== null) {
          var v = f, y = xl(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = xl(u, t);
          g != null && i.push(tp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ae);
      return e || null;
    }
    function xT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = gf(s))
        u++;
      for (var f = 0, p = i; p; p = gf(p))
        f++;
      for (; u - f > 0; )
        a = gf(a), u--;
      for (; f - u > 0; )
        i = gf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = gf(a), i = gf(i);
      }
      return null;
    }
    function DE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === ae && g !== null) {
          var x = g;
          if (u) {
            var N = xl(p, s);
            N != null && f.unshift(tp(p, N, x));
          } else if (!u) {
            var F = xl(p, s);
            F != null && f.push(tp(p, F, x));
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
      var s = i && u ? xT(i, u) : null;
      i !== null && DE(e, t, i, s, !1), u !== null && a !== null && DE(e, a, u, s, !0);
    }
    function _T(e, t) {
      return e + "__bubble";
    }
    var Ba = !1, np = "dangerouslySetInnerHTML", Sh = "suppressContentEditableWarning", ko = "suppressHydrationWarning", OE = "autoFocus", Bs = "children", $s = "style", Eh = "__html", by, Ch, rp, ME, Rh, LE, NE;
    by = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ch = function(e, t) {
      ud(e, t), pc(e, t), Rv(e, t, {
        registrationNameDependencies: xe,
        possibleRegistrationNames: Ue
      });
    }, LE = Bt && !document.documentMode, rp = function(e, t, a) {
      if (!Ba) {
        var i = Th(a), u = Th(t);
        u !== i && (Ba = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, ME = function(e) {
      if (!Ba) {
        Ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Rh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, NE = function(e, t) {
      var a = e.namespaceURI === $i ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var kT = /\r\n?/g, DT = /\u0000|\uFFFD/g;
    function Th(e) {
      Pn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(kT, `
`).replace(DT, "");
    }
    function wh(e, t, a, i) {
      var u = Th(t), s = Th(e);
      if (s !== u && (i && (Ba || (Ba = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ce))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function zE(e) {
      return e.nodeType === Ii ? e : e.ownerDocument;
    }
    function OT() {
    }
    function xh(e) {
      e.onclick = OT;
    }
    function MT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === $s)
            f && Object.freeze(f), mv(t, f);
          else if (s === np) {
            var p = f ? f[Eh] : void 0;
            p != null && av(t, p);
          } else if (s === Bs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ao(t, f);
            } else typeof f == "number" && ao(t, "" + f);
          else s === Sh || s === ko || s === OE || (xe.hasOwnProperty(s) ? f != null && (typeof f != "function" && Rh(s, f), s === "onScroll" && kn("scroll", t)) : f != null && Mr(t, s, f, u));
        }
    }
    function LT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === $s ? mv(e, f) : s === np ? av(e, f) : s === Bs ? ao(e, f) : Mr(e, s, f, i);
      }
    }
    function NT(e, t, a, i) {
      var u, s = zE(a), f, p = i;
      if (p === $i && (p = ed(e)), p === $i) {
        if (u = Tl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === $i && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !yn.call(by, e) && (by[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function zT(e, t) {
      return zE(t).createTextNode(e);
    }
    function UT(e, t, a, i) {
      var u = Tl(t, a);
      Ch(t, a);
      var s;
      switch (t) {
        case "dialog":
          kn("cancel", e), kn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            kn(Jd[f], e);
          s = a;
          break;
        case "source":
          kn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e), s = a;
          break;
        case "details":
          kn("toggle", e), s = a;
          break;
        case "input":
          ni(e, a), s = ro(e, a), kn("invalid", e);
          break;
        case "option":
          Dt(e, a), s = a;
          break;
        case "select":
          ou(e, a), s = Ko(e, a), kn("invalid", e);
          break;
        case "textarea":
          qf(e, a), s = Kf(e, a), kn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (fc(t, s), MT(t, e, i, s, u), t) {
        case "input":
          ti(e), z(e, a, !1);
          break;
        case "textarea":
          ti(e), nv(e);
          break;
        case "option":
          sn(e, a);
          break;
        case "select":
          Gf(e, a);
          break;
        default:
          typeof s.onClick == "function" && xh(e);
          break;
      }
    }
    function AT(e, t, a, i, u) {
      Ch(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = ro(e, a), p = ro(e, i), s = [];
          break;
        case "select":
          f = Ko(e, a), p = Ko(e, i), s = [];
          break;
        case "textarea":
          f = Kf(e, a), p = Kf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && xh(e);
          break;
      }
      fc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === $s) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Bs || v === Sh || v === ko || v === OE || (xe.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var x = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || x === N || x == null && N == null))
          if (v === $s)
            if (x && Object.freeze(x), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!x || !x.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in x)
                x.hasOwnProperty(y) && N[y] !== x[y] && (g || (g = {}), g[y] = x[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = x;
          else if (v === np) {
            var F = x ? x[Eh] : void 0, V = N ? N[Eh] : void 0;
            F != null && V !== F && (s = s || []).push(v, F);
          } else v === Bs ? (typeof x == "string" || typeof x == "number") && (s = s || []).push(v, "" + x) : v === Sh || v === ko || (xe.hasOwnProperty(v) ? (x != null && (typeof x != "function" && Rh(v, x), v === "onScroll" && kn("scroll", e)), !s && N !== x && (s = [])) : (s = s || []).push(v, x));
      }
      return g && (Jm(g, p[$s]), (s = s || []).push($s, g)), s;
    }
    function FT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = Tl(a, i), f = Tl(a, u);
      switch (LT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          tv(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function jT(e) {
      {
        var t = e.toLowerCase();
        return ts.hasOwnProperty(t) && ts[t] || null;
      }
    }
    function HT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Tl(t, a), Ch(t, a), t) {
        case "dialog":
          kn("cancel", e), kn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          kn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            kn(Jd[y], e);
          break;
        case "source":
          kn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          kn("error", e), kn("load", e);
          break;
        case "details":
          kn("toggle", e);
          break;
        case "input":
          ni(e, a), kn("invalid", e);
          break;
        case "option":
          Dt(e, a);
          break;
        case "select":
          ou(e, a), kn("invalid", e);
          break;
        case "textarea":
          qf(e, a), kn("invalid", e);
          break;
      }
      fc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var x = g[_].name.toLowerCase();
          switch (x) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var N = null;
      for (var F in a)
        if (a.hasOwnProperty(F)) {
          var V = a[F];
          if (F === Bs)
            typeof V == "string" ? e.textContent !== V && (a[ko] !== !0 && wh(e.textContent, V, s, f), N = [Bs, V]) : typeof V == "number" && e.textContent !== "" + V && (a[ko] !== !0 && wh(e.textContent, V, s, f), N = [Bs, "" + V]);
          else if (xe.hasOwnProperty(F))
            V != null && (typeof V != "function" && Rh(F, V), F === "onScroll" && kn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ce = void 0, Fe = un(F);
            if (a[ko] !== !0) {
              if (!(F === Sh || F === ko || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              F === "value" || F === "checked" || F === "selected")) {
                if (F === np) {
                  var Oe = e.innerHTML, xt = V ? V[Eh] : void 0;
                  if (xt != null) {
                    var ht = NE(e, xt);
                    ht !== Oe && rp(F, Oe, ht);
                  }
                } else if (F === $s) {
                  if (v.delete(F), LE) {
                    var D = qm(V);
                    ce = e.getAttribute("style"), D !== ce && rp(F, ce, D);
                  }
                } else if (p && !T)
                  v.delete(F.toLowerCase()), ce = tu(e, F, V), V !== ce && rp(F, ce, V);
                else if (!dn(F, Fe, p) && !nr(F, V, Fe, p)) {
                  var B = !1;
                  if (Fe !== null)
                    v.delete(Fe.attributeName), ce = vl(e, F, V, Fe);
                  else {
                    var O = i;
                    if (O === $i && (O = ed(t)), O === $i)
                      v.delete(F.toLowerCase());
                    else {
                      var Z = jT(F);
                      Z !== null && Z !== F && (B = !0, v.delete(Z)), v.delete(F);
                    }
                    ce = tu(e, F, V);
                  }
                  var ye = T;
                  !ye && V !== ce && !B && rp(F, ce, V);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[ko] !== !0 && ME(v), t) {
        case "input":
          ti(e), z(e, a, !0);
          break;
        case "textarea":
          ti(e), nv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && xh(e);
          break;
      }
      return N;
    }
    function PT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function _y(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t, a) {
      {
        if (Ba)
          return;
        Ba = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (t === "" || Ba)
          return;
        Ba = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function VT(e, t, a) {
      switch (t) {
        case "input":
          H(e, a);
          return;
        case "textarea":
          Qm(e, a);
          return;
        case "select":
          Xf(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var BT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], UE = [
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
      ], $T = UE.concat(["button"]), YT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], AE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ip = function(e, t) {
        var a = lt({}, e || AE), i = {
          tag: t
        };
        return UE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), $T.indexOf(t) !== -1 && (a.pTagInButtonScope = null), BT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
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
      }, FE = {};
      ap = function(e, t, a) {
        a = a || AE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = IT(e, u) ? null : i, f = s ? null : WT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!FE[y]) {
            FE[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var x = "";
              v === "table" && e === "tr" && (x += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, x);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var bh = "suppressHydrationWarning", _h = "$", kh = "/$", lp = "$?", up = "$!", QT = "style", My = null, Ly = null;
    function GT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ii:
        case nd: {
          t = i === Ii ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : td(null, "");
          break;
        }
        default: {
          var s = i === Vn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = td(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ip(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function XT(e, t, a) {
      {
        var i = e, u = td(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function uk(e) {
      return e;
    }
    function KT(e) {
      My = Qn(), Ly = cT();
      var t = null;
      return er(!1), t;
    }
    function qT(e) {
      fT(Ly), er(My), My = null, Ly = null;
    }
    function ZT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = NT(e, t, a, s);
      return cp(u, y), Py(y, t), y;
    }
    function JT(e, t) {
      e.appendChild(t);
    }
    function ew(e, t, a, i, u) {
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
    function tw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return AT(e, t, a, i);
    }
    function Ny(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function nw(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = zT(e, t);
      return cp(i, s), s;
    }
    function rw() {
      var e = window.event;
      return e === void 0 ? ja : af(e.type);
    }
    var zy = typeof setTimeout == "function" ? setTimeout : void 0, aw = typeof clearTimeout == "function" ? clearTimeout : void 0, Uy = -1, jE = typeof Promise == "function" ? Promise : void 0, iw = typeof queueMicrotask == "function" ? queueMicrotask : typeof jE < "u" ? function(e) {
      return jE.resolve(null).then(e).catch(lw);
    } : zy;
    function lw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function uw(e, t, a, i) {
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
    function ow(e, t, a, i, u, s) {
      FT(e, t, a, i, u), Py(e, u);
    }
    function HE(e) {
      ao(e, "");
    }
    function sw(e, t, a) {
      e.nodeValue = a;
    }
    function cw(e, t) {
      e.appendChild(t);
    }
    function fw(e, t) {
      var a;
      e.nodeType === Vn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && xh(a);
    }
    function dw(e, t, a) {
      e.insertBefore(t, a);
    }
    function pw(e, t, a) {
      e.nodeType === Vn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function vw(e, t) {
      e.removeChild(t);
    }
    function hw(e, t) {
      e.nodeType === Vn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ay(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Vn) {
          var s = u.data;
          if (s === kh)
            if (i === 0) {
              e.removeChild(u), Du(t);
              return;
            } else
              i--;
          else (s === _h || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      Du(t);
    }
    function mw(e, t) {
      e.nodeType === Vn ? Ay(e.parentNode, t) : e.nodeType === Zr && Ay(e, t), Du(e);
    }
    function yw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function gw(e) {
      e.nodeValue = "";
    }
    function Sw(e, t) {
      e = e;
      var a = t[QT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = cc("display", i);
    }
    function Ew(e, t) {
      e.nodeValue = t;
    }
    function Cw(e) {
      e.nodeType === Zr ? e.textContent = "" : e.nodeType === Ii && e.documentElement && e.removeChild(e.documentElement);
    }
    function Rw(e, t, a) {
      return e.nodeType !== Zr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Tw(e, t) {
      return t === "" || e.nodeType !== Yi ? null : e;
    }
    function ww(e) {
      return e.nodeType !== Vn ? null : e;
    }
    function PE(e) {
      return e.data === lp;
    }
    function Fy(e) {
      return e.data === up;
    }
    function xw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function bw(e, t) {
      e._reactRetry = t;
    }
    function Dh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Zr || t === Yi)
          break;
        if (t === Vn) {
          var a = e.data;
          if (a === _h || a === up || a === lp)
            break;
          if (a === kh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return Dh(e.nextSibling);
    }
    function _w(e) {
      return Dh(e.firstChild);
    }
    function kw(e) {
      return Dh(e.firstChild);
    }
    function Dw(e) {
      return Dh(e.nextSibling);
    }
    function Ow(e, t, a, i, u, s, f) {
      cp(s, e), Py(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ft) !== ze;
      return HT(e, t, a, p, i, y, f);
    }
    function Mw(e, t, a, i) {
      return cp(a, e), a.mode & ft, PT(e, t);
    }
    function Lw(e, t) {
      cp(t, e);
    }
    function Nw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Vn) {
          var i = t.data;
          if (i === kh) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === _h || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function VE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Vn) {
          var i = t.data;
          if (i === _h || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === kh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function zw(e) {
      Du(e);
    }
    function Uw(e) {
      Du(e);
    }
    function Aw(e) {
      return e !== "head" && e !== "body";
    }
    function Fw(e, t, a, i) {
      var u = !0;
      wh(t.nodeValue, a, i, u);
    }
    function jw(e, t, a, i, u, s) {
      if (t[bh] !== !0) {
        var f = !0;
        wh(i.nodeValue, u, s, f);
      }
    }
    function Hw(e, t) {
      t.nodeType === Zr ? _y(e, t) : t.nodeType === Vn || ky(e, t);
    }
    function Pw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Zr ? _y(a, t) : t.nodeType === Vn || ky(a, t));
      }
    }
    function Vw(e, t, a, i, u) {
      (u || t[bh] !== !0) && (i.nodeType === Zr ? _y(a, i) : i.nodeType === Vn || ky(a, i));
    }
    function Bw(e, t, a) {
      Dy(e, t);
    }
    function $w(e, t) {
      Oy(e, t);
    }
    function Yw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dy(i, t);
      }
    }
    function Iw(e, t) {
      {
        var a = e.parentNode;
        a !== null && Oy(a, t);
      }
    }
    function Ww(e, t, a, i, u, s) {
      (s || t[bh] !== !0) && Dy(a, i);
    }
    function Qw(e, t, a, i, u) {
      (u || t[bh] !== !0) && Oy(a, i);
    }
    function Gw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Xw(e) {
      ep(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, jy = "__reactProps$" + Sf, sp = "__reactContainer$" + Sf, Hy = "__reactEvents$" + Sf, Kw = "__reactListeners$" + Sf, qw = "__reactHandles$" + Sf;
    function Zw(e) {
      delete e[Ef], delete e[jy], delete e[Hy], delete e[Kw], delete e[qw];
    }
    function cp(e, t) {
      t[Ef] = e;
    }
    function Oh(e, t) {
      t[sp] = e;
    }
    function BE(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function Ys(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = VE(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = VE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Ef] || e[sp];
      return t && (t.tag === ae || t.tag === We || t.tag === be || t.tag === J) ? t : null;
    }
    function Cf(e) {
      if (e.tag === ae || e.tag === We)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Mh(e) {
      return e[jy] || null;
    }
    function Py(e, t) {
      e[jy] = t;
    }
    function Jw(e) {
      var t = e[Hy];
      return t === void 0 && (t = e[Hy] = /* @__PURE__ */ new Set()), t;
    }
    var $E = {}, YE = j.ReactDebugCurrentFrame;
    function Lh(e) {
      if (e) {
        var t = e._owner, a = Pi(e.type, e._source, t ? t.type : null);
        YE.setExtraStackFrame(a);
      } else
        YE.setExtraStackFrame(null);
    }
    function nl(e, t, a, i, u) {
      {
        var s = Function.call.bind(yn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Lh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Lh(null)), p instanceof Error && !(p.message in $E) && ($E[p.message] = !0, Lh(u), S("Failed %s type: %s", a, p.message), Lh(null));
          }
      }
    }
    var Vy = [], Nh;
    Nh = [];
    var Uu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function sa(e, t) {
      if (Uu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Nh[Uu] && S("Unexpected Fiber popped."), e.current = Vy[Uu], Vy[Uu] = null, Nh[Uu] = null, Uu--;
    }
    function ca(e, t, a) {
      Uu++, Vy[Uu] = e.current, Nh[Uu] = a, e.current = t;
    }
    var By;
    By = {};
    var si = {};
    Object.freeze(si);
    var Au = Oo(si), $l = Oo(!1), $y = si;
    function Rf(e, t, a) {
      return a && Yl(t) ? $y : Au.current;
    }
    function IE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return si;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Xe(e) || "Unknown";
          nl(i, s, "context", p);
        }
        return u && IE(e, t, s), s;
      }
    }
    function zh() {
      return $l.current;
    }
    function Yl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Uh(e) {
      sa($l, e), sa(Au, e);
    }
    function Yy(e) {
      sa($l, e), sa(Au, e);
    }
    function WE(e, t, a) {
      {
        if (Au.current !== si)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ca(Au, t, e), ca($l, a, e);
      }
    }
    function QE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Xe(e) || "Unknown";
            By[s] || (By[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Xe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Xe(e) || "Unknown";
          nl(u, f, "child context", v);
        }
        return lt({}, a, f);
      }
    }
    function Ah(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || si;
        return $y = Au.current, ca(Au, a, e), ca($l, $l.current, e), !0;
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = QE(e, t, $y);
          i.__reactInternalMemoizedMergedChildContext = u, sa($l, e), sa(Au, e), ca(Au, u, e), ca($l, a, e);
        } else
          sa($l, e), ca($l, a, e);
      }
    }
    function e1(e) {
      {
        if (!hu(e) || e.tag !== pe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case pe: {
              var a = t.type;
              if (Yl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Mo = 0, Fh = 1, Fu = null, Iy = !1, Wy = !1;
    function XE(e) {
      Fu === null ? Fu = [e] : Fu.push(e);
    }
    function t1(e) {
      Iy = !0, XE(e);
    }
    function KE() {
      Iy && Lo();
    }
    function Lo() {
      if (!Wy && Fu !== null) {
        Wy = !0;
        var e = 0, t = Pa();
        try {
          var a = !0, i = Fu;
          for (Wn(Ar); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Fu = null, Iy = !1;
        } catch (s) {
          throw Fu !== null && (Fu = Fu.slice(e + 1)), vd(ss, Lo), s;
        } finally {
          Wn(t), Wy = !1;
        }
      }
      return null;
    }
    var wf = [], xf = 0, jh = null, Hh = 0, Li = [], Ni = 0, Is = null, ju = 1, Hu = "";
    function n1(e) {
      return Qs(), (e.flags & Ri) !== Ne;
    }
    function r1(e) {
      return Qs(), Hh;
    }
    function a1() {
      var e = Hu, t = ju, a = t & ~i1(t);
      return a.toString(32) + e;
    }
    function Ws(e, t) {
      Qs(), wf[xf++] = Hh, wf[xf++] = jh, jh = e, Hh = t;
    }
    function qE(e, t, a) {
      Qs(), Li[Ni++] = ju, Li[Ni++] = Hu, Li[Ni++] = Is, Is = e;
      var i = ju, u = Hu, s = Ph(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ph(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), x = f >> y, N = s - y, F = Ph(t) + N, V = p << N, ce = V | x, Fe = _ + u;
        ju = 1 << F | ce, Hu = Fe;
      } else {
        var Oe = p << s, xt = Oe | f, ht = u;
        ju = 1 << v | xt, Hu = ht;
      }
    }
    function Qy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ws(e, a), qE(e, a, i);
      }
    }
    function Ph(e) {
      return 32 - Yn(e);
    }
    function i1(e) {
      return 1 << Ph(e) - 1;
    }
    function Gy(e) {
      for (; e === jh; )
        jh = wf[--xf], wf[xf] = null, Hh = wf[--xf], wf[xf] = null;
      for (; e === Is; )
        Is = Li[--Ni], Li[Ni] = null, Hu = Li[--Ni], Li[Ni] = null, ju = Li[--Ni], Li[Ni] = null;
    }
    function l1() {
      return Qs(), Is !== null ? {
        id: ju,
        overflow: Hu
      } : null;
    }
    function u1(e, t) {
      Qs(), Li[Ni++] = ju, Li[Ni++] = Hu, Li[Ni++] = Is, ju = t.id, Hu = t.overflow, Is = e;
    }
    function Qs() {
      Vr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Pr = null, zi = null, rl = !1, Gs = !1, No = null;
    function o1() {
      rl && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function ZE() {
      Gs = !0;
    }
    function s1() {
      return Gs;
    }
    function c1(e) {
      var t = e.stateNode.containerInfo;
      return zi = kw(t), Pr = e, rl = !0, No = null, Gs = !1, !0;
    }
    function f1(e, t, a) {
      return zi = Dw(t), Pr = e, rl = !0, No = null, Gs = !1, a !== null && u1(e, a), !0;
    }
    function JE(e, t) {
      switch (e.tag) {
        case J: {
          Hw(e.stateNode.containerInfo, t);
          break;
        }
        case ae: {
          var a = (e.mode & ft) !== ze;
          Vw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case be: {
          var i = e.memoizedState;
          i.dehydrated !== null && Pw(i.dehydrated, t);
          break;
        }
      }
    }
    function eC(e, t) {
      JE(e, t);
      var a = h_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Na) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Gs)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ae:
                var i = t.type;
                t.pendingProps, Bw(a, i);
                break;
              case We:
                var u = t.pendingProps;
                $w(a, u);
                break;
            }
            break;
          }
          case ae: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ae: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ft) !== ze;
                Ww(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case We: {
                var _ = t.pendingProps, x = (e.mode & ft) !== ze;
                Qw(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
            }
            break;
          }
          case be: {
            var N = e.memoizedState, F = N.dehydrated;
            if (F !== null) switch (t.tag) {
              case ae:
                var V = t.type;
                t.pendingProps, Yw(F, V);
                break;
              case We:
                var ce = t.pendingProps;
                Iw(F, ce);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function tC(e, t) {
      t.flags = t.flags & ~ea | xn, Xy(e, t);
    }
    function nC(e, t) {
      switch (e.tag) {
        case ae: {
          var a = e.type;
          e.pendingProps;
          var i = Rw(t, a);
          return i !== null ? (e.stateNode = i, Pr = e, zi = _w(i), !0) : !1;
        }
        case We: {
          var u = e.pendingProps, s = Tw(t, u);
          return s !== null ? (e.stateNode = s, Pr = e, zi = null, !0) : !1;
        }
        case be: {
          var f = ww(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: l1(),
              retryLane: aa
            };
            e.memoizedState = p;
            var v = m_(f);
            return v.return = e, e.child = v, Pr = e, zi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & ft) !== ze && (e.flags & Me) === Ne;
    }
    function qy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Zy(e) {
      if (rl) {
        var t = zi;
        if (!t) {
          Ky(e) && (Xy(Pr, e), qy()), tC(Pr, e), rl = !1, Pr = e;
          return;
        }
        var a = t;
        if (!nC(e, t)) {
          Ky(e) && (Xy(Pr, e), qy()), t = op(a);
          var i = Pr;
          if (!t || !nC(e, t)) {
            tC(Pr, e), rl = !1, Pr = e;
            return;
          }
          eC(i, a);
        }
      }
    }
    function d1(e, t, a) {
      var i = e.stateNode, u = !Gs, s = Ow(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function p1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Mw(t, a, e);
      if (i) {
        var u = Pr;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & ft) !== ze;
              Fw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ae: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ft) !== ze;
              jw(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
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
      Lw(a, e);
    }
    function h1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Nw(a);
    }
    function rC(e) {
      for (var t = e.return; t !== null && t.tag !== ae && t.tag !== J && t.tag !== be; )
        t = t.return;
      Pr = t;
    }
    function Vh(e) {
      if (e !== Pr)
        return !1;
      if (!rl)
        return rC(e), rl = !0, !1;
      if (e.tag !== J && (e.tag !== ae || Aw(e.type) && !Ny(e.type, e.memoizedProps))) {
        var t = zi;
        if (t)
          if (Ky(e))
            aC(e), qy();
          else
            for (; t; )
              eC(e, t), t = op(t);
      }
      return rC(e), e.tag === be ? zi = h1(e) : zi = Pr ? op(e.stateNode) : null, !0;
    }
    function m1() {
      return rl && zi !== null;
    }
    function aC(e) {
      for (var t = zi; t; )
        JE(e, t), t = op(t);
    }
    function bf() {
      Pr = null, zi = null, rl = !1, Gs = !1;
    }
    function iC() {
      No !== null && (Z0(No), No = null);
    }
    function Vr() {
      return rl;
    }
    function Jy(e) {
      No === null ? No = [e] : No.push(e);
    }
    var y1 = j.ReactCurrentBatchConfig, g1 = null;
    function S1() {
      return y1.transition;
    }
    var al = {
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
          a.mode & en && (t = a), a = a.return;
        return t;
      }, Xs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Ks = /* @__PURE__ */ new Set();
      al.recordUnsafeLifecycleWarnings = function(e, t) {
        Ks.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & en && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & en && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & en && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, al.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(x) {
          e.add(Xe(x) || "Component"), Ks.add(x.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(x) {
          t.add(Xe(x) || "Component"), Ks.add(x.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(x) {
          a.add(Xe(x) || "Component"), Ks.add(x.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(x) {
          i.add(Xe(x) || "Component"), Ks.add(x.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(x) {
          u.add(Xe(x) || "Component"), Ks.add(x.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(x) {
          s.add(Xe(x) || "Component"), Ks.add(x.type);
        }), yp = []), t.size > 0) {
          var f = Xs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Xs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Xs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Xs(e);
          bt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Xs(a);
          bt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Xs(u);
          bt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Bh = /* @__PURE__ */ new Map(), lC = /* @__PURE__ */ new Set();
      al.recordLegacyContextWarning = function(e, t) {
        var a = E1(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!lC.has(e.type)) {
          var i = Bh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Bh.set(a, i)), i.push(e));
        }
      }, al.flushLegacyContextWarning = function() {
        Bh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Xe(s) || "Component"), lC.add(s.type);
            });
            var u = Xs(i);
            try {
              qt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              hn();
            }
          }
        });
      }, al.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Bh = /* @__PURE__ */ new Map();
      };
    }
    var eg, tg, ng, rg, ag, uC = function(e, t) {
    };
    eg = !1, tg = !1, ng = {}, rg = {}, ag = {}, uC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Xe(t) || "Component";
        rg[a] || (rg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function C1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & en || L) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== pe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !C1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Xe(e) || "Component";
          ng[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ng[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== pe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Xr(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var x = v.refs;
            _ === null ? delete x[y] : x[y] = _;
          };
          return g._stringRef = y, g;
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
    function $h(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Yh(e) {
      {
        var t = Xe(e) || "Component";
        if (ag[t])
          return;
        ag[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function oC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function sC(e) {
      function t(D, B) {
        if (e) {
          var O = D.deletions;
          O === null ? (D.deletions = [B], D.flags |= Na) : O.push(B);
        }
      }
      function a(D, B) {
        if (!e)
          return null;
        for (var O = B; O !== null; )
          t(D, O), O = O.sibling;
        return null;
      }
      function i(D, B) {
        for (var O = /* @__PURE__ */ new Map(), Z = B; Z !== null; )
          Z.key !== null ? O.set(Z.key, Z) : O.set(Z.index, Z), Z = Z.sibling;
        return O;
      }
      function u(D, B) {
        var O = ic(D, B);
        return O.index = 0, O.sibling = null, O;
      }
      function s(D, B, O) {
        if (D.index = O, !e)
          return D.flags |= Ri, B;
        var Z = D.alternate;
        if (Z !== null) {
          var ye = Z.index;
          return ye < B ? (D.flags |= xn, B) : ye;
        } else
          return D.flags |= xn, B;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= xn), D;
      }
      function p(D, B, O, Z) {
        if (B === null || B.tag !== We) {
          var ye = JS(O, D.mode, Z);
          return ye.return = D, ye;
        } else {
          var fe = u(B, O);
          return fe.return = D, fe;
        }
      }
      function v(D, B, O, Z) {
        var ye = O.type;
        if (ye === di)
          return g(D, B, O.props.children, Z, O.key);
        if (B !== null && (B.elementType === ye || // Keep this check inline so it only runs on the false path:
        vR(B, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === Ke && oC(ye) === B.type)) {
          var fe = u(B, O.props);
          return fe.ref = gp(D, B, O), fe.return = D, fe._debugSource = O._source, fe._debugOwner = O._owner, fe;
        }
        var Ie = ZS(O, D.mode, Z);
        return Ie.ref = gp(D, B, O), Ie.return = D, Ie;
      }
      function y(D, B, O, Z) {
        if (B === null || B.tag !== Ee || B.stateNode.containerInfo !== O.containerInfo || B.stateNode.implementation !== O.implementation) {
          var ye = eE(O, D.mode, Z);
          return ye.return = D, ye;
        } else {
          var fe = u(B, O.children || []);
          return fe.return = D, fe;
        }
      }
      function g(D, B, O, Z, ye) {
        if (B === null || B.tag !== dt) {
          var fe = Yo(O, D.mode, Z, ye);
          return fe.return = D, fe;
        } else {
          var Ie = u(B, O);
          return Ie.return = D, Ie;
        }
      }
      function _(D, B, O) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var Z = JS("" + B, D.mode, O);
          return Z.return = D, Z;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case Lr: {
              var ye = ZS(B, D.mode, O);
              return ye.ref = gp(D, null, B), ye.return = D, ye;
            }
            case cr: {
              var fe = eE(B, D.mode, O);
              return fe.return = D, fe;
            }
            case Ke: {
              var Ie = B._payload, Je = B._init;
              return _(D, Je(Ie), O);
            }
          }
          if (st(B) || nt(B)) {
            var nn = Yo(B, D.mode, O, null);
            return nn.return = D, nn;
          }
          $h(D, B);
        }
        return typeof B == "function" && Yh(D), null;
      }
      function x(D, B, O, Z) {
        var ye = B !== null ? B.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ye !== null ? null : p(D, B, "" + O, Z);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Lr:
              return O.key === ye ? v(D, B, O, Z) : null;
            case cr:
              return O.key === ye ? y(D, B, O, Z) : null;
            case Ke: {
              var fe = O._payload, Ie = O._init;
              return x(D, B, Ie(fe), Z);
            }
          }
          if (st(O) || nt(O))
            return ye !== null ? null : g(D, B, O, Z, null);
          $h(D, O);
        }
        return typeof O == "function" && Yh(D), null;
      }
      function N(D, B, O, Z, ye) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var fe = D.get(O) || null;
          return p(B, fe, "" + Z, ye);
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Lr: {
              var Ie = D.get(Z.key === null ? O : Z.key) || null;
              return v(B, Ie, Z, ye);
            }
            case cr: {
              var Je = D.get(Z.key === null ? O : Z.key) || null;
              return y(B, Je, Z, ye);
            }
            case Ke:
              var nn = Z._payload, Ht = Z._init;
              return N(D, B, O, Ht(nn), ye);
          }
          if (st(Z) || nt(Z)) {
            var tr = D.get(O) || null;
            return g(B, tr, Z, ye, null);
          }
          $h(B, Z);
        }
        return typeof Z == "function" && Yh(B), null;
      }
      function F(D, B, O) {
        {
          if (typeof D != "object" || D === null)
            return B;
          switch (D.$$typeof) {
            case Lr:
            case cr:
              uC(D, O);
              var Z = D.key;
              if (typeof Z != "string")
                break;
              if (B === null) {
                B = /* @__PURE__ */ new Set(), B.add(Z);
                break;
              }
              if (!B.has(Z)) {
                B.add(Z);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Z);
              break;
            case Ke:
              var ye = D._payload, fe = D._init;
              F(fe(ye), B, O);
              break;
          }
        }
        return B;
      }
      function V(D, B, O, Z) {
        for (var ye = null, fe = 0; fe < O.length; fe++) {
          var Ie = O[fe];
          ye = F(Ie, ye, D);
        }
        for (var Je = null, nn = null, Ht = B, tr = 0, Pt = 0, Xn = null; Ht !== null && Pt < O.length; Pt++) {
          Ht.index > Pt ? (Xn = Ht, Ht = null) : Xn = Ht.sibling;
          var da = x(D, Ht, O[Pt], Z);
          if (da === null) {
            Ht === null && (Ht = Xn);
            break;
          }
          e && Ht && da.alternate === null && t(D, Ht), tr = s(da, tr, Pt), nn === null ? Je = da : nn.sibling = da, nn = da, Ht = Xn;
        }
        if (Pt === O.length) {
          if (a(D, Ht), Vr()) {
            var Gr = Pt;
            Ws(D, Gr);
          }
          return Je;
        }
        if (Ht === null) {
          for (; Pt < O.length; Pt++) {
            var fi = _(D, O[Pt], Z);
            fi !== null && (tr = s(fi, tr, Pt), nn === null ? Je = fi : nn.sibling = fi, nn = fi);
          }
          if (Vr()) {
            var ba = Pt;
            Ws(D, ba);
          }
          return Je;
        }
        for (var _a = i(D, Ht); Pt < O.length; Pt++) {
          var pa = N(_a, D, Pt, O[Pt], Z);
          pa !== null && (e && pa.alternate !== null && _a.delete(pa.key === null ? Pt : pa.key), tr = s(pa, tr, Pt), nn === null ? Je = pa : nn.sibling = pa, nn = pa);
        }
        if (e && _a.forEach(function(If) {
          return t(D, If);
        }), Vr()) {
          var Wu = Pt;
          Ws(D, Wu);
        }
        return Je;
      }
      function ce(D, B, O, Z) {
        var ye = nt(O);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (tg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), tg = !0), O.entries === ye && (eg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), eg = !0);
          var fe = ye.call(O);
          if (fe)
            for (var Ie = null, Je = fe.next(); !Je.done; Je = fe.next()) {
              var nn = Je.value;
              Ie = F(nn, Ie, D);
            }
        }
        var Ht = ye.call(O);
        if (Ht == null)
          throw new Error("An iterable object provided no iterator.");
        for (var tr = null, Pt = null, Xn = B, da = 0, Gr = 0, fi = null, ba = Ht.next(); Xn !== null && !ba.done; Gr++, ba = Ht.next()) {
          Xn.index > Gr ? (fi = Xn, Xn = null) : fi = Xn.sibling;
          var _a = x(D, Xn, ba.value, Z);
          if (_a === null) {
            Xn === null && (Xn = fi);
            break;
          }
          e && Xn && _a.alternate === null && t(D, Xn), da = s(_a, da, Gr), Pt === null ? tr = _a : Pt.sibling = _a, Pt = _a, Xn = fi;
        }
        if (ba.done) {
          if (a(D, Xn), Vr()) {
            var pa = Gr;
            Ws(D, pa);
          }
          return tr;
        }
        if (Xn === null) {
          for (; !ba.done; Gr++, ba = Ht.next()) {
            var Wu = _(D, ba.value, Z);
            Wu !== null && (da = s(Wu, da, Gr), Pt === null ? tr = Wu : Pt.sibling = Wu, Pt = Wu);
          }
          if (Vr()) {
            var If = Gr;
            Ws(D, If);
          }
          return tr;
        }
        for (var Kp = i(D, Xn); !ba.done; Gr++, ba = Ht.next()) {
          var Zl = N(Kp, D, Gr, ba.value, Z);
          Zl !== null && (e && Zl.alternate !== null && Kp.delete(Zl.key === null ? Gr : Zl.key), da = s(Zl, da, Gr), Pt === null ? tr = Zl : Pt.sibling = Zl, Pt = Zl);
        }
        if (e && Kp.forEach(function(Q_) {
          return t(D, Q_);
        }), Vr()) {
          var W_ = Gr;
          Ws(D, W_);
        }
        return tr;
      }
      function Fe(D, B, O, Z) {
        if (B !== null && B.tag === We) {
          a(D, B.sibling);
          var ye = u(B, O);
          return ye.return = D, ye;
        }
        a(D, B);
        var fe = JS(O, D.mode, Z);
        return fe.return = D, fe;
      }
      function Oe(D, B, O, Z) {
        for (var ye = O.key, fe = B; fe !== null; ) {
          if (fe.key === ye) {
            var Ie = O.type;
            if (Ie === di) {
              if (fe.tag === dt) {
                a(D, fe.sibling);
                var Je = u(fe, O.props.children);
                return Je.return = D, Je._debugSource = O._source, Je._debugOwner = O._owner, Je;
              }
            } else if (fe.elementType === Ie || // Keep this check inline so it only runs on the false path:
            vR(fe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ie == "object" && Ie !== null && Ie.$$typeof === Ke && oC(Ie) === fe.type) {
              a(D, fe.sibling);
              var nn = u(fe, O.props);
              return nn.ref = gp(D, fe, O), nn.return = D, nn._debugSource = O._source, nn._debugOwner = O._owner, nn;
            }
            a(D, fe);
            break;
          } else
            t(D, fe);
          fe = fe.sibling;
        }
        if (O.type === di) {
          var Ht = Yo(O.props.children, D.mode, Z, O.key);
          return Ht.return = D, Ht;
        } else {
          var tr = ZS(O, D.mode, Z);
          return tr.ref = gp(D, B, O), tr.return = D, tr;
        }
      }
      function xt(D, B, O, Z) {
        for (var ye = O.key, fe = B; fe !== null; ) {
          if (fe.key === ye)
            if (fe.tag === Ee && fe.stateNode.containerInfo === O.containerInfo && fe.stateNode.implementation === O.implementation) {
              a(D, fe.sibling);
              var Ie = u(fe, O.children || []);
              return Ie.return = D, Ie;
            } else {
              a(D, fe);
              break;
            }
          else
            t(D, fe);
          fe = fe.sibling;
        }
        var Je = eE(O, D.mode, Z);
        return Je.return = D, Je;
      }
      function ht(D, B, O, Z) {
        var ye = typeof O == "object" && O !== null && O.type === di && O.key === null;
        if (ye && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Lr:
              return f(Oe(D, B, O, Z));
            case cr:
              return f(xt(D, B, O, Z));
            case Ke:
              var fe = O._payload, Ie = O._init;
              return ht(D, B, Ie(fe), Z);
          }
          if (st(O))
            return V(D, B, O, Z);
          if (nt(O))
            return ce(D, B, O, Z);
          $h(D, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Fe(D, B, "" + O, Z)) : (typeof O == "function" && Yh(D), a(D, B));
      }
      return ht;
    }
    var _f = sC(!0), cC = sC(!1);
    function R1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ic(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ic(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function T1(e, t) {
      for (var a = e.child; a !== null; )
        c_(a, t), a = a.sibling;
    }
    var ig = Oo(null), lg;
    lg = {};
    var Ih = null, kf = null, ug = null, Wh = !1;
    function Qh() {
      Ih = null, kf = null, ug = null, Wh = !1;
    }
    function fC() {
      Wh = !0;
    }
    function dC() {
      Wh = !1;
    }
    function pC(e, t, a) {
      ca(ig, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== lg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = lg;
    }
    function og(e, t) {
      var a = ig.current;
      sa(ig, t), e._currentValue = a;
    }
    function sg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (ku(i.childLanes, t) ? u !== null && !ku(u.childLanes, t) && (u.childLanes = it(u.childLanes, t)) : (i.childLanes = it(i.childLanes, t), u !== null && (u.childLanes = it(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function w1(e, t, a) {
      x1(e, t, a);
    }
    function x1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === pe) {
                var p = Ts(a), v = Pu(ln, p);
                v.tag = Xh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = it(i.lanes, a);
              var x = i.alternate;
              x !== null && (x.lanes = it(x.lanes, a)), sg(i.return, a, e), s.lanes = it(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === at)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === It) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = it(N.lanes, a);
          var F = N.alternate;
          F !== null && (F.lanes = it(F.lanes, a)), sg(N, a, e), u = i.sibling;
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
            var V = u.sibling;
            if (V !== null) {
              V.return = u.return, u = V;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      Ih = e, kf = null, ug = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ia(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function ur(e) {
      Wh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ug !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if (Ih === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, Ih.dependencies = {
            lanes: I,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var qs = null;
    function cg(e) {
      qs === null ? qs = [e] : qs.push(e);
    }
    function b1() {
      if (qs !== null) {
        for (var e = 0; e < qs.length; e++) {
          var t = qs[e], a = t.interleaved;
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
        qs = null;
      }
    }
    function vC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, cg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Gh(e, i);
    }
    function _1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, cg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function k1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, cg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Gh(e, i);
    }
    function $a(e, t) {
      return Gh(e, t);
    }
    var D1 = Gh;
    function Gh(e, t) {
      e.lanes = it(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = it(a.lanes, t)), a === null && (e.flags & (xn | ea)) !== Ne && cR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = it(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = it(a.childLanes, t) : (u.flags & (xn | ea)) !== Ne && cR(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var hC = 0, mC = 1, Xh = 2, fg = 3, Kh = !1, dg, qh;
    dg = !1, qh = null;
    function pg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: I
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function yC(e, t) {
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
    function Pu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: hC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (qh === u && !dg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), dg = !0), _b()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, D1(e, a);
      } else
        return k1(e, u, t, a);
    }
    function Zh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Md(a)) {
          var s = u.lanes;
          s = Nd(s, e.pendingLanes);
          var f = it(s, a);
          u.lanes = f, ef(e, f);
        }
      }
    }
    function vg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
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
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function O1(e, t, a, i, u, s) {
      switch (a.tag) {
        case mC: {
          var f = a.payload;
          if (typeof f == "function") {
            fC();
            var p = f.call(s, i, u);
            {
              if (e.mode & en) {
                bn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  bn(!1);
                }
              }
              dC();
            }
            return p;
          }
          return f;
        }
        case fg:
          e.flags = e.flags & ~rr | Me;
        case hC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            fC(), y = v.call(s, i, u);
            {
              if (e.mode & en) {
                bn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  bn(!1);
                }
              }
              dC();
            }
          } else
            y = v;
          return y == null ? i : lt({}, i, y);
        }
        case Xh:
          return Kh = !0, i;
      }
      return i;
    }
    function Jh(e, t, a, i) {
      var u = e.updateQueue;
      Kh = !1, qh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, x = _.lastBaseUpdate;
          x !== f && (x === null ? _.firstBaseUpdate = y : x.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, F = I, V = null, ce = null, Fe = null, Oe = s;
        do {
          var xt = Oe.lane, ht = Oe.eventTime;
          if (ku(i, xt)) {
            if (Fe !== null) {
              var B = {
                eventTime: ht,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Mt,
                tag: Oe.tag,
                payload: Oe.payload,
                callback: Oe.callback,
                next: null
              };
              Fe = Fe.next = B;
            }
            N = O1(e, u, Oe, N, t, a);
            var O = Oe.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Oe.lane !== Mt) {
              e.flags |= cn;
              var Z = u.effects;
              Z === null ? u.effects = [Oe] : Z.push(Oe);
            }
          } else {
            var D = {
              eventTime: ht,
              lane: xt,
              tag: Oe.tag,
              payload: Oe.payload,
              callback: Oe.callback,
              next: null
            };
            Fe === null ? (ce = Fe = D, V = N) : Fe = Fe.next = D, F = it(F, xt);
          }
          if (Oe = Oe.next, Oe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ye = p, fe = ye.next;
            ye.next = null, Oe = fe, u.lastBaseUpdate = ye, u.shared.pending = null;
          }
        } while (!0);
        Fe === null && (V = N), u.baseState = V, u.firstBaseUpdate = ce, u.lastBaseUpdate = Fe;
        var Ie = u.shared.interleaved;
        if (Ie !== null) {
          var Je = Ie;
          do
            F = it(F, Je.lane), Je = Je.next;
          while (Je !== Ie);
        } else s === null && (u.shared.lanes = I);
        Ip(F), e.lanes = F, e.memoizedState = N;
      }
      qh = null;
    }
    function M1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function gC() {
      Kh = !1;
    }
    function em() {
      return Kh;
    }
    function SC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, M1(f, a));
        }
    }
    var Sp = {}, Uo = Oo(Sp), Ep = Oo(Sp), tm = Oo(Sp);
    function nm(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function EC() {
      var e = nm(tm.current);
      return e;
    }
    function hg(e, t) {
      ca(tm, t, e), ca(Ep, e, e), ca(Uo, Sp, e);
      var a = GT(t);
      sa(Uo, e), ca(Uo, a, e);
    }
    function Of(e) {
      sa(Uo, e), sa(Ep, e), sa(tm, e);
    }
    function mg() {
      var e = nm(Uo.current);
      return e;
    }
    function CC(e) {
      nm(tm.current);
      var t = nm(Uo.current), a = XT(t, e.type);
      t !== a && (ca(Ep, e, e), ca(Uo, a, e));
    }
    function yg(e) {
      Ep.current === e && (sa(Uo, e), sa(Ep, e));
    }
    var L1 = 0, RC = 1, TC = 1, Cp = 2, il = Oo(L1);
    function gg(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & RC;
    }
    function Sg(e, t) {
      return e & RC | t;
    }
    function N1(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      ca(il, t, e);
    }
    function Lf(e) {
      sa(il, e);
    }
    function z1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function rm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === be) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || PE(i) || Fy(i))
              return t;
          }
        } else if (t.tag === Gt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Me) !== Ne;
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
    var Ya = (
      /*   */
      0
    ), yr = (
      /* */
      1
    ), Il = (
      /*  */
      2
    ), gr = (
      /*    */
      4
    ), Br = (
      /*   */
      8
    ), Eg = [];
    function Cg() {
      for (var e = 0; e < Eg.length; e++) {
        var t = Eg[e];
        t._workInProgressVersionPrimary = null;
      }
      Eg.length = 0;
    }
    function U1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var me = j.ReactCurrentDispatcher, Rp = j.ReactCurrentBatchConfig, Rg, Nf;
    Rg = /* @__PURE__ */ new Set();
    var Zs = I, tn = null, Sr = null, Er = null, am = !1, Tp = !1, wp = 0, A1 = 0, F1 = 25, $ = null, Ui = null, Fo = -1, Tg = !1;
    function Yt() {
      {
        var e = $;
        Ui === null ? Ui = [e] : Ui.push(e);
      }
    }
    function le() {
      {
        var e = $;
        Ui !== null && (Fo++, Ui[Fo] !== e && j1(e));
      }
    }
    function zf(e) {
      e != null && !st(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", $, typeof e);
    }
    function j1(e) {
      {
        var t = Xe(tn);
        if (!Rg.has(t) && (Rg.add(t), Ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = Ui[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function fa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function wg(e, t) {
      if (Tg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", $), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, $, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!X(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      Zs = s, tn = t, Ui = e !== null ? e._debugHookTypes : null, Fo = -1, Tg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = I, e !== null && e.memoizedState !== null ? me.current = IC : Ui !== null ? me.current = YC : me.current = $C;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, wp = 0, p >= F1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Tg = !1, Sr = null, Er = null, t.updateQueue = null, Fo = -1, me.current = WC, f = a(i, u);
        } while (Tp);
      }
      me.current = ym, t._debugHookTypes = Ui;
      var v = Sr !== null && Sr.next !== null;
      if (Zs = I, tn = null, Sr = null, Er = null, $ = null, Ui = null, Fo = -1, e !== null && (e.flags & $n) !== (t.flags & $n) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ft) !== ze && S("Internal React error: Expected static flag was missing. Please notify the React team."), am = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = wp !== 0;
      return wp = 0, e;
    }
    function wC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ft) !== ze ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ws(e.lanes, a);
    }
    function xC() {
      if (me.current = ym, am) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        am = !1;
      }
      Zs = I, tn = null, Sr = null, Er = null, Ui = null, Fo = -1, $ = null, jC = !1, Tp = !1, wp = 0;
    }
    function Wl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Er === null ? tn.memoizedState = Er = e : Er = Er.next = e, Er;
    }
    function Ai() {
      var e;
      if (Sr === null) {
        var t = tn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Sr.next;
      var a;
      if (Er === null ? a = tn.memoizedState : a = Er.next, a !== null)
        Er = a, a = Er.next, Sr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Sr = e;
        var i = {
          memoizedState: Sr.memoizedState,
          baseState: Sr.baseState,
          baseQueue: Sr.baseQueue,
          queue: Sr.queue,
          next: null
        };
        Er === null ? tn.memoizedState = Er = i : Er = Er.next = i;
      }
      return Er;
    }
    function bC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function xg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function bg(e, t, a) {
      var i = Wl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = B1.bind(null, tn, s);
      return [i.memoizedState, f];
    }
    function _g(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Sr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, x = null, N = null, F = null, V = g;
        do {
          var ce = V.lane;
          if (ku(Zs, ce)) {
            if (F !== null) {
              var Oe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Mt,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null
              };
              F = F.next = Oe;
            }
            if (V.hasEagerState)
              _ = V.eagerState;
            else {
              var xt = V.action;
              _ = e(_, xt);
            }
          } else {
            var Fe = {
              lane: ce,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            F === null ? (N = F = Fe, x = _) : F = F.next = Fe, tn.lanes = it(tn.lanes, ce), Ip(ce);
          }
          V = V.next;
        } while (V !== null && V !== g);
        F === null ? x = _ : F.next = N, X(_, i.memoizedState) || Np(), i.memoizedState = _, i.baseState = x, i.baseQueue = F, u.lastRenderedState = _;
      }
      var ht = u.interleaved;
      if (ht !== null) {
        var D = ht;
        do {
          var B = D.lane;
          tn.lanes = it(tn.lanes, B), Ip(B), D = D.next;
        } while (D !== ht);
      } else f === null && (u.lanes = I);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function kg(e, t, a) {
      var i = Ai(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        X(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function ok(e, t, a) {
    }
    function sk(e, t, a) {
    }
    function Dg(e, t, a) {
      var i = tn, u = Wl(), s, f = Vr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Nf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      } else {
        if (s = t(), !Nf) {
          var p = t();
          X(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
        }
        var v = Am();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Zc(v, Zs) || _C(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, sm(DC.bind(null, i, y, e), [e]), i.flags |= Jr, xp(yr | Br, kC.bind(null, i, y, s, t), void 0, null), s;
    }
    function im(e, t, a) {
      var i = tn, u = Ai(), s = t();
      if (!Nf) {
        var f = t();
        X(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      }
      var p = u.memoizedState, v = !X(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (_p(DC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Er !== null && Er.memoizedState.tag & yr) {
        i.flags |= Jr, xp(yr | Br, kC.bind(null, i, y, s, t), void 0, null);
        var g = Am();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Zc(g, Zs) || _C(i, t, s);
      }
      return s;
    }
    function _C(e, t, a) {
      e.flags |= vo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = tn.updateQueue;
      if (u === null)
        u = bC(), tn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function kC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, OC(t) && MC(e);
    }
    function DC(e, t, a) {
      var i = function() {
        OC(t) && MC(e);
      };
      return a(i);
    }
    function OC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !X(a, i);
      } catch {
        return !0;
      }
    }
    function MC(e) {
      var t = $a(e, Ye);
      t !== null && wr(t, e, Ye, ln);
    }
    function lm(e) {
      var t = Wl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: I,
        dispatch: null,
        lastRenderedReducer: xg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = $1.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function Og(e) {
      return _g(xg);
    }
    function Mg(e) {
      return kg(xg);
    }
    function xp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = tn.updateQueue;
      if (s === null)
        s = bC(), tn.updateQueue = s, s.lastEffect = u.next = u;
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
    function Lg(e) {
      var t = Wl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function um(e) {
      var t = Ai();
      return t.memoizedState;
    }
    function bp(e, t, a, i) {
      var u = Wl(), s = i === void 0 ? null : i;
      tn.flags |= e, u.memoizedState = xp(yr | t, a, void 0, s);
    }
    function om(e, t, a, i) {
      var u = Ai(), s = i === void 0 ? null : i, f = void 0;
      if (Sr !== null) {
        var p = Sr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (wg(s, v)) {
            u.memoizedState = xp(t, a, f, s);
            return;
          }
        }
      }
      tn.flags |= e, u.memoizedState = xp(yr | t, a, f, s);
    }
    function sm(e, t) {
      return (tn.mode & Ft) !== ze ? bp(Ti | Jr | xc, Br, e, t) : bp(Jr | xc, Br, e, t);
    }
    function _p(e, t) {
      return om(Jr, Br, e, t);
    }
    function Ng(e, t) {
      return bp(Rt, Il, e, t);
    }
    function cm(e, t) {
      return om(Rt, Il, e, t);
    }
    function zg(e, t) {
      var a = Rt;
      return a |= Qi, (tn.mode & Ft) !== ze && (a |= _l), bp(a, gr, e, t);
    }
    function fm(e, t) {
      return om(Rt, gr, e, t);
    }
    function LC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ug(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Rt;
      return u |= Qi, (tn.mode & Ft) !== ze && (u |= _l), bp(u, gr, LC.bind(null, t, e), i);
    }
    function dm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return om(Rt, gr, LC.bind(null, t, e), i);
    }
    function H1(e, t) {
    }
    var pm = H1;
    function Ag(e, t) {
      var a = Wl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function vm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = Wl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function hm(e, t) {
      var a = Ai(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (wg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function jg(e) {
      var t = Wl();
      return t.memoizedState = e, e;
    }
    function NC(e) {
      var t = Ai(), a = Sr, i = a.memoizedState;
      return UC(t, i, e);
    }
    function zC(e) {
      var t = Ai();
      if (Sr === null)
        return t.memoizedState = e, e;
      var a = Sr.memoizedState;
      return UC(t, a, e);
    }
    function UC(e, t, a) {
      var i = !Dd(Zs);
      if (i) {
        if (!X(a, t)) {
          var u = Ld();
          tn.lanes = it(tn.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function P1(e, t, a) {
      var i = Pa();
      Wn(Wv(i, _i)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Wn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && bt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Hg() {
      var e = lm(!1), t = e[0], a = e[1], i = P1.bind(null, a), u = Wl();
      return u.memoizedState = i, [t, i];
    }
    function AC() {
      var e = Og(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    function FC() {
      var e = Mg(), t = e[0], a = Ai(), i = a.memoizedState;
      return [t, i];
    }
    var jC = !1;
    function V1() {
      return jC;
    }
    function Pg() {
      var e = Wl(), t = Am(), a = t.identifierPrefix, i;
      if (Vr()) {
        var u = a1();
        i = ":" + a + "R" + u;
        var s = wp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = A1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function mm() {
      var e = Ai(), t = e.memoizedState;
      return t;
    }
    function B1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, u);
      else {
        var s = vC(e, t, u, i);
        if (s !== null) {
          var f = xa();
          wr(s, e, i, f), VC(s, t, i);
        }
      }
      BC(e, i);
    }
    function $1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === I && (s === null || s.lanes === I)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = me.current, me.current = ll;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, X(y, v)) {
                _1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              me.current = p;
            }
          }
        }
        var g = vC(e, t, u, i);
        if (g !== null) {
          var _ = xa();
          wr(g, e, i, _), VC(g, t, i);
        }
      }
      BC(e, i);
    }
    function HC(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function PC(e, t) {
      Tp = am = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function VC(e, t, a) {
      if (Md(a)) {
        var i = t.lanes;
        i = Nd(i, e.pendingLanes);
        var u = it(i, a);
        t.lanes = u, ef(e, u);
      }
    }
    function BC(e, t, a) {
      vs(e, t);
    }
    var ym = {
      readContext: ur,
      useCallback: fa,
      useContext: fa,
      useEffect: fa,
      useImperativeHandle: fa,
      useInsertionEffect: fa,
      useLayoutEffect: fa,
      useMemo: fa,
      useReducer: fa,
      useRef: fa,
      useState: fa,
      useDebugValue: fa,
      useDeferredValue: fa,
      useTransition: fa,
      useMutableSource: fa,
      useSyncExternalStore: fa,
      useId: fa,
      unstable_isNewReconciler: ee
    }, $C = null, YC = null, IC = null, WC = null, Ql = null, ll = null, gm = null;
    {
      var Vg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $C = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Yt(), zf(t), Ag(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Yt(), ur(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Yt(), zf(t), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Yt(), zf(a), Ug(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Yt(), zf(t), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Yt(), zf(t), zg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Yt(), zf(t);
          var a = me.current;
          me.current = Ql;
          try {
            return Fg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Yt();
          var i = me.current;
          me.current = Ql;
          try {
            return bg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Yt(), Lg(e);
        },
        useState: function(e) {
          $ = "useState", Yt();
          var t = me.current;
          me.current = Ql;
          try {
            return lm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Yt(), jg(e);
        },
        useTransition: function() {
          return $ = "useTransition", Yt(), Hg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Yt(), Dg(e, t, a);
        },
        useId: function() {
          return $ = "useId", Yt(), Pg();
        },
        unstable_isNewReconciler: ee
      }, YC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", le(), Ag(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", le(), ur(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", le(), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", le(), Ug(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", le(), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", le(), zg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", le();
          var a = me.current;
          me.current = Ql;
          try {
            return Fg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", le();
          var i = me.current;
          me.current = Ql;
          try {
            return bg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", le(), Lg(e);
        },
        useState: function(e) {
          $ = "useState", le();
          var t = me.current;
          me.current = Ql;
          try {
            return lm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", le(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", le(), jg(e);
        },
        useTransition: function() {
          return $ = "useTransition", le(), Hg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", le(), Dg(e, t, a);
        },
        useId: function() {
          return $ = "useId", le(), Pg();
        },
        unstable_isNewReconciler: ee
      }, IC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", le(), vm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", le(), ur(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", le(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", le(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", le(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", le(), fm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", le();
          var a = me.current;
          me.current = ll;
          try {
            return hm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", le();
          var i = me.current;
          me.current = ll;
          try {
            return _g(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", le(), um();
        },
        useState: function(e) {
          $ = "useState", le();
          var t = me.current;
          me.current = ll;
          try {
            return Og(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", le(), pm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", le(), NC(e);
        },
        useTransition: function() {
          return $ = "useTransition", le(), AC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", le(), im(e, t);
        },
        useId: function() {
          return $ = "useId", le(), mm();
        },
        unstable_isNewReconciler: ee
      }, WC = {
        readContext: function(e) {
          return ur(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", le(), vm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", le(), ur(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", le(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", le(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", le(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", le(), fm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", le();
          var a = me.current;
          me.current = gm;
          try {
            return hm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", le();
          var i = me.current;
          me.current = gm;
          try {
            return kg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", le(), um();
        },
        useState: function(e) {
          $ = "useState", le();
          var t = me.current;
          me.current = gm;
          try {
            return Mg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", le(), pm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", le(), zC(e);
        },
        useTransition: function() {
          return $ = "useTransition", le(), FC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", le(), im(e, t);
        },
        useId: function() {
          return $ = "useId", le(), mm();
        },
        unstable_isNewReconciler: ee
      }, Ql = {
        readContext: function(e) {
          return Vg(), ur(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", qe(), Yt(), Ag(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", qe(), Yt(), ur(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", qe(), Yt(), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", qe(), Yt(), Ug(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", qe(), Yt(), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", qe(), Yt(), zg(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", qe(), Yt();
          var a = me.current;
          me.current = Ql;
          try {
            return Fg(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", qe(), Yt();
          var i = me.current;
          me.current = Ql;
          try {
            return bg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", qe(), Yt(), Lg(e);
        },
        useState: function(e) {
          $ = "useState", qe(), Yt();
          var t = me.current;
          me.current = Ql;
          try {
            return lm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", qe(), Yt(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", qe(), Yt(), jg(e);
        },
        useTransition: function() {
          return $ = "useTransition", qe(), Yt(), Hg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", qe(), Yt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", qe(), Yt(), Dg(e, t, a);
        },
        useId: function() {
          return $ = "useId", qe(), Yt(), Pg();
        },
        unstable_isNewReconciler: ee
      }, ll = {
        readContext: function(e) {
          return Vg(), ur(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", qe(), le(), vm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", qe(), le(), ur(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", qe(), le(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", qe(), le(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", qe(), le(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", qe(), le(), fm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", qe(), le();
          var a = me.current;
          me.current = ll;
          try {
            return hm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", qe(), le();
          var i = me.current;
          me.current = ll;
          try {
            return _g(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", qe(), le(), um();
        },
        useState: function(e) {
          $ = "useState", qe(), le();
          var t = me.current;
          me.current = ll;
          try {
            return Og(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", qe(), le(), pm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", qe(), le(), NC(e);
        },
        useTransition: function() {
          return $ = "useTransition", qe(), le(), AC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", qe(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", qe(), le(), im(e, t);
        },
        useId: function() {
          return $ = "useId", qe(), le(), mm();
        },
        unstable_isNewReconciler: ee
      }, gm = {
        readContext: function(e) {
          return Vg(), ur(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", qe(), le(), vm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", qe(), le(), ur(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", qe(), le(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", qe(), le(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", qe(), le(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", qe(), le(), fm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", qe(), le();
          var a = me.current;
          me.current = ll;
          try {
            return hm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", qe(), le();
          var i = me.current;
          me.current = ll;
          try {
            return kg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", qe(), le(), um();
        },
        useState: function(e) {
          $ = "useState", qe(), le();
          var t = me.current;
          me.current = ll;
          try {
            return Mg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", qe(), le(), pm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", qe(), le(), zC(e);
        },
        useTransition: function() {
          return $ = "useTransition", qe(), le(), FC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", qe(), le(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", qe(), le(), im(e, t);
        },
        useId: function() {
          return $ = "useId", qe(), le(), mm();
        },
        unstable_isNewReconciler: ee
      };
    }
    var jo = re.unstable_now, QC = 0, Sm = -1, kp = -1, Em = -1, Bg = !1, Cm = !1;
    function GC() {
      return Bg;
    }
    function Y1() {
      Cm = !0;
    }
    function I1() {
      Bg = !1, Cm = !1;
    }
    function W1() {
      Bg = Cm, Cm = !1;
    }
    function XC() {
      return QC;
    }
    function KC() {
      QC = jo();
    }
    function $g(e) {
      kp = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function qC(e) {
      kp = -1;
    }
    function Rm(e, t) {
      if (kp >= 0) {
        var a = jo() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Gl(e) {
      if (Sm >= 0) {
        var t = jo() - Sm;
        Sm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ut:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Yg(e) {
      if (Em >= 0) {
        var t = jo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ut:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Xl() {
      Sm = jo();
    }
    function Ig() {
      Em = jo();
    }
    function Wg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ul(e, t) {
      if (e && e.defaultProps) {
        var a = lt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Qg = {}, Gg, Xg, Kg, qg, Zg, ZC, Tm, Jg, eS, tS, Dp;
    {
      Gg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var JC = /* @__PURE__ */ new Set();
      Tm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          JC.has(a) || (JC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, ZC = function(e, t) {
        if (t === void 0) {
          var a = kt(e) || "Component";
          Zg.has(a) || (Zg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Qg);
    }
    function nS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & en) {
          bn(!0);
          try {
            s = a(i, u);
          } finally {
            bn(!1);
          }
        }
        ZC(t, s);
      }
      var f = s == null ? u : lt({}, u, s);
      if (e.memoizedState = f, e.lanes === I) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var rS = {
      isMounted: Ov,
      enqueueSetState: function(e, t, a) {
        var i = po(e), u = xa(), s = Bo(i), f = Pu(u, s);
        f.payload = t, a != null && (Tm(a, "setState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (wr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = po(e), u = xa(), s = Bo(i), f = Pu(u, s);
        f.tag = mC, f.payload = t, a != null && (Tm(a, "replaceState"), f.callback = a);
        var p = zo(i, f, s);
        p !== null && (wr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = po(e), i = xa(), u = Bo(a), s = Pu(i, u);
        s.tag = Xh, t != null && (Tm(t, "forceUpdate"), s.callback = t);
        var f = zo(a, s, u);
        f !== null && (wr(f, a, u, i), Zh(f, a, u)), Lc(a, u);
      }
    };
    function e0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & en) {
            bn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              bn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", kt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Te(a, i) || !Te(u, s) : !0;
    }
    function Q1(e, t, a) {
      var i = e.stateNode;
      {
        var u = kt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === ze && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & en) === ze && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !eS.has(t) && (eS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", kt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", kt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || st(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function t0(e, t) {
      t.updater = rS, e.stateNode = t, vu(t, e), t._reactInternalInstance = Qg;
    }
    function n0(e, t, a) {
      var i = !1, u = si, s = si, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !tS.has(t)) {
          tS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === vi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", kt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ur(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Tf(e, u) : si;
      }
      var g = new t(a, s);
      if (e.mode & en) {
        bn(!0);
        try {
          g = new t(a, s);
        } finally {
          bn(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      t0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var x = kt(t) || "Component";
          Xg.has(x) || (Xg.add(x), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", x, g.state === null ? "null" : "undefined", x));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, F = null, V = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? F = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (F = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), N !== null || F !== null || V !== null) {
            var ce = kt(t) || "Component", Fe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            qg.has(ce) || (qg.add(ce), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ce, Fe, N !== null ? `
  ` + N : "", F !== null ? `
  ` + F : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && IE(e, u, s), g;
    }
    function G1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Xe(e) || "Component"), rS.enqueueReplaceState(t, t.state, null));
    }
    function r0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Xe(e) || "Component";
          Gg.has(s) || (Gg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        rS.enqueueReplaceState(t, t.state, null);
      }
    }
    function aS(e, t, a, i) {
      Q1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, pg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = ur(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = kt(t) || "Component";
          Jg.has(p) || (Jg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & en && al.recordLegacyContextWarning(e, u), al.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (nS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (G1(e, u), Jh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Rt;
        y |= Qi, (e.mode & Ft) !== ze && (y |= _l), e.flags |= y;
      }
    }
    function X1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = si;
      if (typeof p == "object" && p !== null)
        v = ur(p);
      else {
        var y = Rf(e, t, !0);
        v = Tf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && r0(e, u, a, v), gC();
      var x = e.memoizedState, N = u.state = x;
      if (Jh(e, a, u, i), N = e.memoizedState, s === a && x === N && !zh() && !em()) {
        if (typeof u.componentDidMount == "function") {
          var F = Rt;
          F |= Qi, (e.mode & Ft) !== ze && (F |= _l), e.flags |= F;
        }
        return !1;
      }
      typeof g == "function" && (nS(e, t, g, a), N = e.memoizedState);
      var V = em() || e0(e, t, s, a, x, N, v);
      if (V) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ce = Rt;
          ce |= Qi, (e.mode & Ft) !== ze && (ce |= _l), e.flags |= ce;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Fe = Rt;
          Fe |= Qi, (e.mode & Ft) !== ze && (Fe |= _l), e.flags |= Fe;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, V;
    }
    function K1(e, t, a, i, u) {
      var s = t.stateNode;
      yC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ul(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = si;
      if (typeof g == "object" && g !== null)
        _ = ur(g);
      else {
        var x = Rf(t, a, !0);
        _ = Tf(t, x);
      }
      var N = a.getDerivedStateFromProps, F = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !F && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && r0(t, s, i, _), gC();
      var V = t.memoizedState, ce = s.state = V;
      if (Jh(t, i, s, u), ce = t.memoizedState, f === v && V === ce && !zh() && !em() && !U)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Zn), !1;
      typeof N == "function" && (nS(t, a, N, i), ce = t.memoizedState);
      var Fe = em() || e0(t, a, p, i, V, ce, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      U;
      return Fe ? (!F && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ce, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ce, _)), typeof s.componentDidUpdate == "function" && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Zn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Rt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= Zn), t.memoizedProps = i, t.memoizedState = ce), s.props = i, s.state = ce, s.context = _, Fe;
    }
    function Js(e, t) {
      return {
        value: e,
        source: t,
        stack: Vi(t),
        digest: null
      };
    }
    function iS(e, t, a) {
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
    function lS(e, t) {
      try {
        var a = q1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === pe)
            return;
          console.error(i);
        }
        var p = u ? Xe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Xe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (x) {
        setTimeout(function() {
          throw x;
        });
      }
    }
    var Z1 = typeof WeakMap == "function" ? WeakMap : Map;
    function a0(e, t, a) {
      var i = Pu(ln, a);
      i.tag = fg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Yb(u), lS(e, t);
      }, i;
    }
    function uS(e, t, a) {
      var i = Pu(ln, a);
      i.tag = fg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          hR(e), lS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        hR(e), lS(e, t), typeof u != "function" && Bb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ia(e.lanes, Ye) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Xe(e) || "Unknown"));
      }), i;
    }
    function i0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Z1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Ib.bind(null, e, t, a);
        ra && Wp(e, a), t.then(s, s);
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
    function ex(e, t) {
      var a = e.tag;
      if ((e.mode & ft) === ze && (a === de || a === Qe || a === Be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function l0(e) {
      var t = e;
      do {
        if (t.tag === be && z1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function u0(e, t, a, i, u) {
      if ((e.mode & ft) === ze) {
        if (e === t)
          e.flags |= rr;
        else {
          if (e.flags |= Me, a.flags |= wc, a.flags &= -52805, a.tag === pe) {
            var s = a.alternate;
            if (s === null)
              a.tag = Lt;
            else {
              var f = Pu(ln, Ye);
              f.tag = Xh, zo(a, f, Ye);
            }
          }
          a.lanes = it(a.lanes, Ye);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = u, e;
    }
    function tx(e, t, a, i, u) {
      if (a.flags |= os, ra && Wp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ex(a), Vr() && a.mode & ft && ZE();
        var f = l0(t);
        if (f !== null) {
          f.flags &= ~_r, u0(f, t, a, e, u), f.mode & ft && i0(e, s, u), J1(f, e, s);
          return;
        } else {
          if (!jv(u)) {
            i0(e, s, u), PS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Vr() && a.mode & ft) {
        ZE();
        var v = l0(t);
        if (v !== null) {
          (v.flags & rr) === Ne && (v.flags |= _r), u0(v, t, a, e, u), Jy(Js(i, a));
          return;
        }
      }
      i = Js(i, a), zb(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= rr;
            var _ = Ts(u);
            y.lanes = it(y.lanes, _);
            var x = a0(y, g, _);
            vg(y, x);
            return;
          }
          case pe:
            var N = i, F = y.type, V = y.stateNode;
            if ((y.flags & Me) === Ne && (typeof F.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !lR(V))) {
              y.flags |= rr;
              var ce = Ts(u);
              y.lanes = it(y.lanes, ce);
              var Fe = uS(y, N, ce);
              vg(y, Fe);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function nx() {
      return null;
    }
    var Op = j.ReactCurrentOwner, ol = !1, oS, Mp, sS, cS, fS, ec, dS, wm, Lp;
    oS = {}, Mp = {}, sS = {}, cS = {}, fS = {}, ec = !1, dS = {}, wm = {}, Lp = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = cC(t, null, a, i) : t.child = _f(t, e.child, a, i);
    }
    function rx(e, t, a, i) {
      t.child = _f(t, e.child, null, i), t.child = _f(t, null, a, i);
    }
    function o0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), Sa(t);
      {
        if (Op.current = t, qn(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & en) {
          bn(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            bn(!1);
          }
        }
        qn(!1);
      }
      return Ea(), e !== null && !ol ? (wC(e, t, u), Vu(e, t, u)) : (Vr() && y && Qy(t), t.flags |= ai, Ta(e, t, v, u), t.child);
    }
    function s0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (o_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = Be, t.type = f, hS(t, s), c0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && nl(
            p,
            i,
            // Resolved props
            "prop",
            kt(s)
          ), a.defaultProps !== void 0) {
            var v = kt(s) || "Unknown";
            Lp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Lp[v] = !0);
          }
        }
        var y = qS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && nl(
          _,
          i,
          // Resolved props
          "prop",
          kt(g)
        );
      }
      var x = e.child, N = CS(e, u);
      if (!N) {
        var F = x.memoizedProps, V = a.compare;
        if (V = V !== null ? V : Te, V(F, i) && e.ref === t.ref)
          return Vu(e, t, u);
      }
      t.flags |= ai;
      var ce = ic(x, i);
      return ce.ref = t.ref, ce.return = t, t.child = ce, ce;
    }
    function c0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ke) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && nl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            kt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Te(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ol = !1, t.pendingProps = i = g, CS(e, u))
            (e.flags & wc) !== Ne && (ol = !0);
          else return t.lanes = e.lanes, Vu(e, t, u);
      }
      return pS(e, t, a, i, u);
    }
    function f0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || P)
        if ((t.mode & ft) === ze) {
          var f = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Fm(t, a);
        } else if (ia(a, aa)) {
          var _ = {
            baseLanes: I,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var x = s !== null ? s.baseLanes : a;
          Fm(t, x);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = it(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = aa;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Fm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = it(s.baseLanes, a), t.memoizedState = null) : N = a, Fm(t, N);
      }
      return Ta(e, t, u, a), t.child;
    }
    function ax(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function ix(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function lx(e, t, a) {
      {
        t.flags |= Rt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ta(e, t, s, a), t.child;
    }
    function d0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Dn, t.flags |= ho);
    }
    function pS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && nl(
          s,
          i,
          // Resolved props
          "prop",
          kt(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      Df(t, u), Sa(t);
      {
        if (Op.current = t, qn(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & en) {
          bn(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            bn(!1);
          }
        }
        qn(!1);
      }
      return Ea(), e !== null && !ol ? (wC(e, t, u), Vu(e, t, u)) : (Vr() && y && Qy(t), t.flags |= ai, Ta(e, t, v, u), t.child);
    }
    function p0(e, t, a, i, u) {
      {
        switch (T_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Me, t.flags |= rr;
            var y = new Error("Simulated error coming from DevTools"), g = Ts(u);
            t.lanes = it(t.lanes, g);
            var _ = uS(t, Js(y, t), g);
            vg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var x = a.propTypes;
          x && nl(
            x,
            i,
            // Resolved props
            "prop",
            kt(a)
          );
        }
      }
      var N;
      Yl(a) ? (N = !0, Ah(t)) : N = !1, Df(t, u);
      var F = t.stateNode, V;
      F === null ? (bm(e, t), n0(t, a, i), aS(t, a, i, u), V = !0) : e === null ? V = X1(t, a, i, u) : V = K1(e, t, a, i, u);
      var ce = vS(e, t, a, V, N, u);
      {
        var Fe = t.stateNode;
        V && Fe.props !== i && (ec || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Xe(t) || "a component"), ec = !0);
      }
      return ce;
    }
    function vS(e, t, a, i, u, s) {
      d0(e, t);
      var f = (t.flags & Me) !== Ne;
      if (!i && !f)
        return u && GE(t, a, !1), Vu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, qC();
      else {
        Sa(t);
        {
          if (qn(!0), v = p.render(), t.mode & en) {
            bn(!0);
            try {
              p.render();
            } finally {
              bn(!1);
            }
          }
          qn(!1);
        }
        Ea();
      }
      return t.flags |= ai, e !== null && f ? rx(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, u && GE(t, a, !0), t.child;
    }
    function v0(e) {
      var t = e.stateNode;
      t.pendingContext ? WE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && WE(e, t.context, !1), hg(e, t.containerInfo);
    }
    function ux(e, t, a) {
      if (v0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      yC(e, t), Jh(t, i, null, a);
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
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & _r) {
          var g = Js(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return h0(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Js(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return h0(e, t, p, a, _);
        } else {
          c1(t);
          var x = cC(t, null, p, a);
          t.child = x;
          for (var N = x; N; )
            N.flags = N.flags & ~xn | ea, N = N.sibling;
        }
      } else {
        if (bf(), p === s)
          return Vu(e, t, a);
        Ta(e, t, p, a);
      }
      return t.child;
    }
    function h0(e, t, a, i, u) {
      return bf(), Jy(u), t.flags |= _r, Ta(e, t, a, i), t.child;
    }
    function ox(e, t, a) {
      CC(t), e === null && Zy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ny(i, u);
      return p ? f = null : s !== null && Ny(i, s) && (t.flags |= za), d0(e, t), Ta(e, t, f, a), t.child;
    }
    function sx(e, t) {
      return e === null && Zy(t), null;
    }
    function cx(e, t, a, i) {
      bm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = s_(v), g = ul(v, u), _;
      switch (y) {
        case de:
          return hS(t, v), t.type = v = Yf(v), _ = pS(null, t, v, g, i), _;
        case pe:
          return t.type = v = IS(v), _ = p0(null, t, v, g, i), _;
        case Qe:
          return t.type = v = WS(v), _ = o0(null, t, v, g, i), _;
        case ot: {
          if (t.type !== t.elementType) {
            var x = v.propTypes;
            x && nl(
              x,
              g,
              // Resolved for outer only
              "prop",
              kt(v)
            );
          }
          return _ = s0(
            null,
            t,
            v,
            ul(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ke && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function fx(e, t, a, i, u) {
      bm(e, t), t.tag = pe;
      var s;
      return Yl(a) ? (s = !0, Ah(t)) : s = !1, Df(t, u), n0(t, a, i), aS(t, a, i, u), vS(null, t, a, !0, s, u);
    }
    function dx(e, t, a, i) {
      bm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      Df(t, i);
      var p, v;
      Sa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = kt(a) || "Unknown";
          oS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), oS[y] = !0);
        }
        t.mode & en && al.recordLegacyContextWarning(t, null), qn(!0), Op.current = t, p = Uf(null, t, a, u, s, i), v = Af(), qn(!1);
      }
      if (Ea(), t.flags |= ai, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = kt(a) || "Unknown";
        Mp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Mp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = kt(a) || "Unknown";
          Mp[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Mp[_] = !0);
        }
        t.tag = pe, t.memoizedState = null, t.updateQueue = null;
        var x = !1;
        return Yl(a) ? (x = !0, Ah(t)) : x = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, pg(t), t0(t, p), aS(t, a, u, i), vS(null, t, a, !0, x, i);
      } else {
        if (t.tag = de, t.mode & en) {
          bn(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            bn(!1);
          }
        }
        return Vr() && v && Qy(t), Ta(null, t, p, i), hS(t, a), t.child;
      }
    }
    function hS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = zr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), fS[u] || (fS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = kt(t) || "Unknown";
          Lp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Lp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = kt(t) || "Unknown";
          cS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), cS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = kt(t) || "Unknown";
          sS[v] || (S("%s: Function components do not support contextType.", v), sS[v] = !0);
        }
      }
    }
    var mS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Mt
    };
    function yS(e) {
      return {
        baseLanes: e,
        cachePool: nx(),
        transitions: null
      };
    }
    function px(e, t) {
      var a = null;
      return {
        baseLanes: it(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function vx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return gg(e, Cp);
    }
    function hx(e, t) {
      return ws(e.childLanes, t);
    }
    function m0(e, t, a) {
      var i = t.pendingProps;
      w_(t) && (t.flags |= Me);
      var u = il.current, s = !1, f = (t.flags & Me) !== Ne;
      if (f || vx(u, e) ? (s = !0, t.flags &= ~Me) : (e === null || e.memoizedState !== null) && (u = N1(u, TC)), u = Mf(u), Ao(t, u), e === null) {
        Zy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Ex(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = mx(t, y, g, a), x = t.child;
          return x.memoizedState = yS(a), t.memoizedState = mS, _;
        } else
          return gS(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var F = N.dehydrated;
          if (F !== null)
            return Cx(e, t, f, i, F, N, a);
        }
        if (s) {
          var V = i.fallback, ce = i.children, Fe = gx(e, t, ce, V, a), Oe = t.child, xt = e.child.memoizedState;
          return Oe.memoizedState = xt === null ? yS(a) : px(xt, a), Oe.childLanes = hx(e, a), t.memoizedState = mS, Fe;
        } else {
          var ht = i.children, D = yx(e, t, ht, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function gS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = SS(u, i);
      return s.return = e, e.child = s, s;
    }
    function mx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ft) === ze && s !== null ? (p = s, p.childLanes = I, p.pendingProps = f, e.mode & At && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = SS(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function SS(e, t, a) {
      return yR(e, t, I, null);
    }
    function y0(e, t) {
      return ic(e, t);
    }
    function yx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = y0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ft) === ze && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Na) : p.push(s);
      }
      return t.child = f, f;
    }
    function gx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ft) === ze && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = I, y.pendingProps = v, t.mode & At && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = y0(f, v), y.subtreeFlags = f.subtreeFlags & $n;
      var _;
      return p !== null ? _ = ic(p, i) : (_ = Yo(i, s, u, null), _.flags |= xn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function xm(e, t, a, i) {
      i !== null && Jy(i), _f(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = gS(t, s);
      return f.flags |= xn, t.memoizedState = null, f;
    }
    function Sx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = SS(f, s), v = Yo(i, s, u, null);
      return v.flags |= xn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ft) !== ze && _f(t, e.child, null, u), v;
    }
    function Ex(e, t, a) {
      return (e.mode & ft) === ze ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ye) : Fy(t) ? e.lanes = kr : e.lanes = aa, null;
    }
    function Cx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & _r) {
          t.flags &= ~_r;
          var D = iS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return xm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Me, null;
          var B = i.children, O = i.fallback, Z = Sx(e, t, B, O, f), ye = t.child;
          return ye.memoizedState = yS(f), t.memoizedState = mS, Z;
        }
      else {
        if (o1(), (t.mode & ft) === ze)
          return xm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(u)) {
          var p, v, y;
          {
            var g = xw(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var x = iS(_, p, y);
          return xm(e, t, f, x);
        }
        var N = ia(f, e.childLanes);
        if (ol || N) {
          var F = Am();
          if (F !== null) {
            var V = Ud(F, f);
            if (V !== Mt && V !== s.retryLane) {
              s.retryLane = V;
              var ce = ln;
              $a(e, V), wr(F, e, V, ce);
            }
          }
          PS();
          var Fe = iS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return xm(e, t, f, Fe);
        } else if (PE(u)) {
          t.flags |= Me, t.child = e.child;
          var Oe = Wb.bind(null, e);
          return bw(u, Oe), null;
        } else {
          f1(t, u, s.treeContext);
          var xt = i.children, ht = gS(t, xt);
          return ht.flags |= ea, ht;
        }
      }
    }
    function g0(e, t, a) {
      e.lanes = it(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = it(i.lanes, t)), sg(e.return, t, a);
    }
    function Rx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === be) {
          var u = i.memoizedState;
          u !== null && g0(i, a, e);
        } else if (i.tag === Gt)
          g0(i, a, e);
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
    function Tx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && rm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function wx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !dS[e])
        if (dS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function xx(e, t) {
      e !== void 0 && !wm[e] && (e !== "collapsed" && e !== "hidden" ? (wm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (wm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function S0(e, t) {
      {
        var a = st(e), i = !a && typeof nt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function bx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (st(e)) {
          for (var a = 0; a < e.length; a++)
            if (!S0(e[a], a))
              return;
        } else {
          var i = nt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!S0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function ES(e, t, a, i, u) {
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
    function E0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      wx(u), xx(s, u), bx(f, u), Ta(e, t, f, a);
      var p = il.current, v = gg(p, Cp);
      if (v)
        p = Sg(p, Cp), t.flags |= Me;
      else {
        var y = e !== null && (e.flags & Me) !== Ne;
        y && Rx(t, t.child, a), p = Mf(p);
      }
      if (Ao(t, p), (t.mode & ft) === ze)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Tx(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), ES(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var x = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var F = N.alternate;
              if (F !== null && rm(F) === null) {
                t.child = N;
                break;
              }
              var V = N.sibling;
              N.sibling = x, x = N, N = V;
            }
            ES(
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
            ES(
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
    function _x(e, t, a) {
      hg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = _f(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var C0 = !1;
    function kx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || C0 || (C0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && nl(v, s, "prop", "Context.Provider");
      }
      if (pC(t, u, p), f !== null) {
        var y = f.value;
        if (X(y, p)) {
          if (f.children === s.children && !zh())
            return Vu(e, t, a);
        } else
          w1(t, u, a);
      }
      var g = s.children;
      return Ta(e, t, g, a), t.child;
    }
    var R0 = !1;
    function Dx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (R0 || (R0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = ur(i);
      Sa(t);
      var p;
      return Op.current = t, qn(!0), p = s(f), qn(!1), Ea(), t.flags |= ai, Ta(e, t, p, a), t.child;
    }
    function Np() {
      ol = !0;
    }
    function bm(e, t) {
      (t.mode & ft) === ze && e !== null && (e.alternate = null, t.alternate = null, t.flags |= xn);
    }
    function Vu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), qC(), Ip(t.lanes), ia(a, t.childLanes) ? (R1(e, t), t.child) : null;
    }
    function Ox(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Na) : s.push(e), a.flags |= xn, a;
      }
    }
    function CS(e, t) {
      var a = e.lanes;
      return !!ia(a, t);
    }
    function Mx(e, t, a) {
      switch (t.tag) {
        case J:
          v0(t), t.stateNode, bf();
          break;
        case ae:
          CC(t);
          break;
        case pe: {
          var i = t.type;
          Yl(i) && Ah(t);
          break;
        }
        case Ee:
          hg(t, t.stateNode.containerInfo);
          break;
        case at: {
          var u = t.memoizedProps.value, s = t.type._context;
          pC(t, s, u);
          break;
        }
        case ut:
          {
            var f = ia(a, t.childLanes);
            f && (t.flags |= Rt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case be: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Mf(il.current)), t.flags |= Me, null;
            var y = t.child, g = y.childLanes;
            if (ia(a, g))
              return m0(e, t, a);
            Ao(t, Mf(il.current));
            var _ = Vu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Ao(t, Mf(il.current));
          break;
        }
        case Gt: {
          var x = (e.flags & Me) !== Ne, N = ia(a, t.childLanes);
          if (x) {
            if (N)
              return E0(e, t, a);
            t.flags |= Me;
          }
          var F = t.memoizedState;
          if (F !== null && (F.rendering = null, F.tail = null, F.lastEffect = null), Ao(t, il.current), N)
            break;
          return null;
        }
        case Le:
        case _t:
          return t.lanes = I, f0(e, t, a);
      }
      return Vu(e, t, a);
    }
    function T0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Ox(e, t, qS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || zh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ol = !0;
        else {
          var s = CS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Me) === Ne)
            return ol = !1, Mx(e, t, a);
          (e.flags & wc) !== Ne ? ol = !0 : ol = !1;
        }
      } else if (ol = !1, Vr() && n1(t)) {
        var f = t.index, p = r1();
        qE(t, p, f);
      }
      switch (t.lanes = I, t.tag) {
        case Ze:
          return dx(e, t, t.type, a);
        case an: {
          var v = t.elementType;
          return cx(e, t, v, a);
        }
        case de: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : ul(y, g);
          return pS(e, t, y, _, a);
        }
        case pe: {
          var x = t.type, N = t.pendingProps, F = t.elementType === x ? N : ul(x, N);
          return p0(e, t, x, F, a);
        }
        case J:
          return ux(e, t, a);
        case ae:
          return ox(e, t, a);
        case We:
          return sx(e, t);
        case be:
          return m0(e, t, a);
        case Ee:
          return _x(e, t, a);
        case Qe: {
          var V = t.type, ce = t.pendingProps, Fe = t.elementType === V ? ce : ul(V, ce);
          return o0(e, t, V, Fe, a);
        }
        case dt:
          return ax(e, t, a);
        case rt:
          return ix(e, t, a);
        case ut:
          return lx(e, t, a);
        case at:
          return kx(e, t, a);
        case rn:
          return Dx(e, t, a);
        case ot: {
          var Oe = t.type, xt = t.pendingProps, ht = ul(Oe, xt);
          if (t.type !== t.elementType) {
            var D = Oe.propTypes;
            D && nl(
              D,
              ht,
              // Resolved for outer only
              "prop",
              kt(Oe)
            );
          }
          return ht = ul(Oe.type, ht), s0(e, t, Oe, ht, a);
        }
        case Be:
          return c0(e, t, t.type, t.pendingProps, a);
        case Lt: {
          var B = t.type, O = t.pendingProps, Z = t.elementType === B ? O : ul(B, O);
          return fx(e, t, B, Z, a);
        }
        case Gt:
          return E0(e, t, a);
        case mt:
          break;
        case Le:
          return f0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ff(e) {
      e.flags |= Rt;
    }
    function w0(e) {
      e.flags |= Dn, e.flags |= ho;
    }
    var x0, RS, b0, _0;
    x0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ae || u.tag === We)
          JT(e, u.stateNode);
        else if (u.tag !== Ee) {
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
    }, RS = function(e, t) {
    }, b0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = mg(), v = tw(f, a, s, i, u, p);
        t.updateQueue = v, v && Ff(t);
      }
    }, _0 = function(e, t, a, i) {
      a !== i && Ff(t);
    };
    function zp(e, t) {
      if (!Vr())
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
    function $r(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = I, i = Ne;
      if (t) {
        if ((e.mode & At) !== ze) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = it(a, it(y.lanes, y.childLanes)), i |= y.subtreeFlags & $n, i |= y.flags & $n, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = it(a, it(g.lanes, g.childLanes)), i |= g.subtreeFlags & $n, i |= g.flags & $n, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & At) !== ze) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = it(a, it(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = it(a, it(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Lx(e, t, a) {
      if (m1() && (t.mode & ft) !== ze && (t.flags & Me) === Ne)
        return aC(t), bf(), t.flags |= _r | os | rr, !1;
      var i = Vh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (v1(t), $r(t), (t.mode & At) !== ze) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & Me) === Ne && (t.memoizedState = null), t.flags |= Rt, $r(t), (t.mode & At) !== ze) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return iC(), !0;
    }
    function k0(e, t, a) {
      var i = t.pendingProps;
      switch (Gy(t), t.tag) {
        case Ze:
        case an:
        case Be:
        case de:
        case Qe:
        case dt:
        case rt:
        case ut:
        case rn:
        case ot:
          return $r(t), null;
        case pe: {
          var u = t.type;
          return Yl(u) && Uh(t), $r(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Of(t), Yy(t), Cg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Vh(t);
            if (f)
              Ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & _r) !== Ne) && (t.flags |= Zn, iC());
            }
          }
          return RS(e, t), $r(t), null;
        }
        case ae: {
          yg(t);
          var v = EC(), y = t.type;
          if (e !== null && t.stateNode != null)
            b0(e, t, y, i, v), e.ref !== t.ref && w0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return $r(t), null;
            }
            var g = mg(), _ = Vh(t);
            if (_)
              d1(t, v, g) && Ff(t);
            else {
              var x = ZT(y, i, v, g, t);
              x0(x, t, !1, !1), t.stateNode = x, ew(x, y, i, v) && Ff(t);
            }
            t.ref !== null && w0(t);
          }
          return $r(t), null;
        }
        case We: {
          var N = i;
          if (e && t.stateNode != null) {
            var F = e.memoizedProps;
            _0(e, t, F, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = EC(), ce = mg(), Fe = Vh(t);
            Fe ? p1(t) && Ff(t) : t.stateNode = nw(N, V, ce, t);
          }
          return $r(t), null;
        }
        case be: {
          Lf(t);
          var Oe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var xt = Lx(e, t, Oe);
            if (!xt)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & Me) !== Ne)
            return t.lanes = a, (t.mode & At) !== ze && Wg(t), t;
          var ht = Oe !== null, D = e !== null && e.memoizedState !== null;
          if (ht !== D && ht) {
            var B = t.child;
            if (B.flags |= Bn, (t.mode & ft) !== ze) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || gg(il.current, TC) ? Nb() : PS();
            }
          }
          var Z = t.updateQueue;
          if (Z !== null && (t.flags |= Rt), $r(t), (t.mode & At) !== ze && ht) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case Ee:
          return Of(t), RS(e, t), e === null && Xw(t.stateNode.containerInfo), $r(t), null;
        case at:
          var fe = t.type._context;
          return og(fe, t), $r(t), null;
        case Lt: {
          var Ie = t.type;
          return Yl(Ie) && Uh(t), $r(t), null;
        }
        case Gt: {
          Lf(t);
          var Je = t.memoizedState;
          if (Je === null)
            return $r(t), null;
          var nn = (t.flags & Me) !== Ne, Ht = Je.rendering;
          if (Ht === null)
            if (nn)
              zp(Je, !1);
            else {
              var tr = Ub() && (e === null || (e.flags & Me) === Ne);
              if (!tr)
                for (var Pt = t.child; Pt !== null; ) {
                  var Xn = rm(Pt);
                  if (Xn !== null) {
                    nn = !0, t.flags |= Me, zp(Je, !1);
                    var da = Xn.updateQueue;
                    return da !== null && (t.updateQueue = da, t.flags |= Rt), t.subtreeFlags = Ne, T1(t, a), Ao(t, Sg(il.current, Cp)), t.child;
                  }
                  Pt = Pt.sibling;
                }
              Je.tail !== null && Jn() > X0() && (t.flags |= Me, nn = !0, zp(Je, !1), t.lanes = bd);
            }
          else {
            if (!nn) {
              var Gr = rm(Ht);
              if (Gr !== null) {
                t.flags |= Me, nn = !0;
                var fi = Gr.updateQueue;
                if (fi !== null && (t.updateQueue = fi, t.flags |= Rt), zp(Je, !0), Je.tail === null && Je.tailMode === "hidden" && !Ht.alternate && !Vr())
                  return $r(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Jn() * 2 - Je.renderingStartTime > X0() && a !== aa && (t.flags |= Me, nn = !0, zp(Je, !1), t.lanes = bd);
            }
            if (Je.isBackwards)
              Ht.sibling = t.child, t.child = Ht;
            else {
              var ba = Je.last;
              ba !== null ? ba.sibling = Ht : t.child = Ht, Je.last = Ht;
            }
          }
          if (Je.tail !== null) {
            var _a = Je.tail;
            Je.rendering = _a, Je.tail = _a.sibling, Je.renderingStartTime = Jn(), _a.sibling = null;
            var pa = il.current;
            return nn ? pa = Sg(pa, Cp) : pa = Mf(pa), Ao(t, pa), _a;
          }
          return $r(t), null;
        }
        case mt:
          break;
        case Le:
        case _t: {
          HS(t);
          var Wu = t.memoizedState, If = Wu !== null;
          if (e !== null) {
            var Kp = e.memoizedState, Zl = Kp !== null;
            Zl !== If && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !P && (t.flags |= Bn);
          }
          return !If || (t.mode & ft) === ze ? $r(t) : ia(ql, aa) && ($r(t), t.subtreeFlags & (xn | Rt) && (t.flags |= Bn)), null;
        }
        case yt:
          return null;
        case Ct:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Nx(e, t, a) {
      switch (Gy(t), t.tag) {
        case pe: {
          var i = t.type;
          Yl(i) && Uh(t);
          var u = t.flags;
          return u & rr ? (t.flags = u & ~rr | Me, (t.mode & At) !== ze && Wg(t), t) : null;
        }
        case J: {
          t.stateNode, Of(t), Yy(t), Cg();
          var s = t.flags;
          return (s & rr) !== Ne && (s & Me) === Ne ? (t.flags = s & ~rr | Me, t) : null;
        }
        case ae:
          return yg(t), null;
        case be: {
          Lf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & rr ? (t.flags = p & ~rr | Me, (t.mode & At) !== ze && Wg(t), t) : null;
        }
        case Gt:
          return Lf(t), null;
        case Ee:
          return Of(t), null;
        case at:
          var v = t.type._context;
          return og(v, t), null;
        case Le:
        case _t:
          return HS(t), null;
        case yt:
          return null;
        default:
          return null;
      }
    }
    function D0(e, t, a) {
      switch (Gy(t), t.tag) {
        case pe: {
          var i = t.type.childContextTypes;
          i != null && Uh(t);
          break;
        }
        case J: {
          t.stateNode, Of(t), Yy(t), Cg();
          break;
        }
        case ae: {
          yg(t);
          break;
        }
        case Ee:
          Of(t);
          break;
        case be:
          Lf(t);
          break;
        case Gt:
          Lf(t);
          break;
        case at:
          var u = t.type._context;
          og(u, t);
          break;
        case Le:
        case _t:
          HS(t);
          break;
      }
    }
    var O0 = null;
    O0 = /* @__PURE__ */ new Set();
    var _m = !1, Yr = !1, zx = typeof WeakSet == "function" ? WeakSet : Set, we = null, jf = null, Hf = null;
    function Ux(e) {
      bl(null, function() {
        throw e;
      }), us();
    }
    var Ax = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & At)
        try {
          Xl(), t.componentWillUnmount();
        } finally {
          Gl(e);
        }
      else
        t.componentWillUnmount();
    };
    function M0(e, t) {
      try {
        Ho(gr, e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function TS(e, t, a) {
      try {
        Ax(e, a);
      } catch (i) {
        mn(e, t, i);
      }
    }
    function Fx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        mn(e, t, i);
      }
    }
    function L0(e, t) {
      try {
        z0(e);
      } catch (a) {
        mn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (K && De && e.mode & At)
              try {
                Xl(), i = a(null);
              } finally {
                Gl(e);
              }
            else
              i = a(null);
          } catch (u) {
            mn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          a.current = null;
    }
    function km(e, t, a) {
      try {
        a();
      } catch (i) {
        mn(e, t, i);
      }
    }
    var N0 = !1;
    function jx(e, t) {
      KT(e.containerInfo), we = t, Hx();
      var a = N0;
      return N0 = !1, a;
    }
    function Hx() {
      for (; we !== null; ) {
        var e = we, t = e.child;
        (e.subtreeFlags & kl) !== Ne && t !== null ? (t.return = e, we = t) : Px();
      }
    }
    function Px() {
      for (; we !== null; ) {
        var e = we;
        qt(e);
        try {
          Vx(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        hn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, we = t;
          return;
        }
        we = e.return;
      }
    }
    function Vx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Zn) !== Ne) {
        switch (qt(e), e.tag) {
          case de:
          case Qe:
          case Be:
            break;
          case pe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ec && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ul(e.type, i), u);
              {
                var p = O0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Xe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              Cw(v.containerInfo);
            }
            break;
          }
          case ae:
          case We:
          case Ee:
          case Lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        hn();
      }
    }
    function sl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Br) !== Ya ? Ki(t) : (e & gr) !== Ya && cs(t), (e & Il) !== Ya && Qp(!0), km(t, a, p), (e & Il) !== Ya && Qp(!1), (e & Br) !== Ya ? Ll() : (e & gr) !== Ya && wd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ho(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Br) !== Ya ? Td(t) : (e & gr) !== Ya && Oc(t);
            var f = s.create;
            (e & Il) !== Ya && Qp(!0), s.destroy = f(), (e & Il) !== Ya && Qp(!1), (e & Br) !== Ya ? Nv() : (e & gr) !== Ya && zv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & gr) !== Ne ? v = "useLayoutEffect" : (s.tag & Il) !== Ne ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Bx(e, t) {
      if ((t.flags & Rt) !== Ne)
        switch (t.tag) {
          case ut: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XC(), p = t.alternate === null ? "mount" : "update";
            GC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case ut:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function $x(e, t, a, i) {
      if ((a.flags & Ol) !== Ne)
        switch (a.tag) {
          case de:
          case Qe:
          case Be: {
            if (!Yr)
              if (a.mode & At)
                try {
                  Xl(), Ho(gr | yr, a);
                } finally {
                  Gl(a);
                }
              else
                Ho(gr | yr, a);
            break;
          }
          case pe: {
            var u = a.stateNode;
            if (a.flags & Rt && !Yr)
              if (t === null)
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & At)
                  try {
                    Xl(), u.componentDidMount();
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ul(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), a.mode & At)
                  try {
                    Xl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ec && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Xe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Xe(a) || "instance")), SC(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ae:
                    y = a.child.stateNode;
                    break;
                  case pe:
                    y = a.child.stateNode;
                    break;
                }
              SC(a, v, y);
            }
            break;
          }
          case ae: {
            var g = a.stateNode;
            if (t === null && a.flags & Rt) {
              var _ = a.type, x = a.memoizedProps;
              uw(g, _, x);
            }
            break;
          }
          case We:
            break;
          case Ee:
            break;
          case ut: {
            {
              var N = a.memoizedProps, F = N.onCommit, V = N.onRender, ce = a.stateNode.effectDuration, Fe = XC(), Oe = t === null ? "mount" : "update";
              GC() && (Oe = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, Oe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Fe);
              {
                typeof F == "function" && F(a.memoizedProps.id, Oe, ce, Fe), Pb(a);
                var xt = a.return;
                e: for (; xt !== null; ) {
                  switch (xt.tag) {
                    case J:
                      var ht = xt.stateNode;
                      ht.effectDuration += ce;
                      break e;
                    case ut:
                      var D = xt.stateNode;
                      D.effectDuration += ce;
                      break e;
                  }
                  xt = xt.return;
                }
              }
            }
            break;
          }
          case be: {
            qx(e, a);
            break;
          }
          case Gt:
          case Lt:
          case mt:
          case Le:
          case _t:
          case Ct:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Yr || a.flags & Dn && z0(a);
    }
    function Yx(e) {
      switch (e.tag) {
        case de:
        case Qe:
        case Be: {
          if (e.mode & At)
            try {
              Xl(), M0(e, e.return);
            } finally {
              Gl(e);
            }
          else
            M0(e, e.return);
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Fx(e, e.return, t), L0(e, e.return);
          break;
        }
        case ae: {
          L0(e, e.return);
          break;
        }
      }
    }
    function Ix(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ae) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? yw(u) : Sw(i.stateNode, i.memoizedProps);
            } catch (f) {
              mn(e, e.return, f);
            }
          }
        } else if (i.tag === We) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? gw(s) : Ew(s, i.memoizedProps);
            } catch (f) {
              mn(e, e.return, f);
            }
        } else if (!((i.tag === Le || i.tag === _t) && i.memoizedState !== null && i !== e)) {
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
    function z0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ae:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & At)
            try {
              Xl(), u = t(i);
            } finally {
              Gl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Xe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Xe(e)), t.current = i;
      }
    }
    function Wx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function U0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, U0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ae) {
          var a = e.stateNode;
          a !== null && Zw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Qx(e) {
      for (var t = e.return; t !== null; ) {
        if (A0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function A0(e) {
      return e.tag === ae || e.tag === J || e.tag === Ee;
    }
    function F0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || A0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ae && t.tag !== We && t.tag !== It; ) {
          if (t.flags & xn || t.child === null || t.tag === Ee)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & xn))
          return t.stateNode;
      }
    }
    function Gx(e) {
      var t = Qx(e);
      switch (t.tag) {
        case ae: {
          var a = t.stateNode;
          t.flags & za && (HE(a), t.flags &= ~za);
          var i = F0(e);
          xS(e, i, a);
          break;
        }
        case J:
        case Ee: {
          var u = t.stateNode.containerInfo, s = F0(e);
          wS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === ae || i === We;
      if (u) {
        var s = e.stateNode;
        t ? pw(a, s, t) : fw(a, s);
      } else if (i !== Ee) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === ae || i === We;
      if (u) {
        var s = e.stateNode;
        t ? dw(a, s, t) : cw(a, s);
      } else if (i !== Ee) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    var Ir = null, cl = !1;
    function Xx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ae: {
              Ir = i.stateNode, cl = !1;
              break e;
            }
            case J: {
              Ir = i.stateNode.containerInfo, cl = !0;
              break e;
            }
            case Ee: {
              Ir = i.stateNode.containerInfo, cl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Ir === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        j0(e, t, a), Ir = null, cl = !1;
      }
      Wx(a);
    }
    function Po(e, t, a) {
      for (var i = a.child; i !== null; )
        j0(e, t, i), i = i.sibling;
    }
    function j0(e, t, a) {
      switch (Ed(a), a.tag) {
        case ae:
          Yr || Pf(a, t);
        case We: {
          {
            var i = Ir, u = cl;
            Ir = null, Po(e, t, a), Ir = i, cl = u, Ir !== null && (cl ? hw(Ir, a.stateNode) : vw(Ir, a.stateNode));
          }
          return;
        }
        case It: {
          Ir !== null && (cl ? mw(Ir, a.stateNode) : Ay(Ir, a.stateNode));
          return;
        }
        case Ee: {
          {
            var s = Ir, f = cl;
            Ir = a.stateNode.containerInfo, cl = !0, Po(e, t, a), Ir = s, cl = f;
          }
          return;
        }
        case de:
        case Qe:
        case ot:
        case Be: {
          if (!Yr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, x = _.destroy, N = _.tag;
                  x !== void 0 && ((N & Il) !== Ya ? km(a, t, x) : (N & gr) !== Ya && (cs(a), a.mode & At ? (Xl(), km(a, t, x), Gl(a)) : km(a, t, x), wd())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Po(e, t, a);
          return;
        }
        case pe: {
          if (!Yr) {
            Pf(a, t);
            var F = a.stateNode;
            typeof F.componentWillUnmount == "function" && TS(a, t, F);
          }
          Po(e, t, a);
          return;
        }
        case mt: {
          Po(e, t, a);
          return;
        }
        case Le: {
          if (
            // TODO: Remove this dead flag
            a.mode & ft
          ) {
            var V = Yr;
            Yr = V || a.memoizedState !== null, Po(e, t, a), Yr = V;
          } else
            Po(e, t, a);
          break;
        }
        default: {
          Po(e, t, a);
          return;
        }
      }
    }
    function Kx(e) {
      e.memoizedState;
    }
    function qx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Uw(s);
          }
        }
      }
    }
    function H0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new zx()), t.forEach(function(i) {
          var u = Qb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ra)
              if (jf !== null && Hf !== null)
                Wp(Hf, jf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Zx(e, t, a) {
      jf = a, Hf = e, qt(t), P0(t, e), qt(t), jf = null, Hf = null;
    }
    function fl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Xx(e, t, s);
          } catch (v) {
            mn(s, t, v);
          }
        }
      var f = Sl();
      if (t.subtreeFlags & Dl)
        for (var p = t.child; p !== null; )
          qt(p), P0(p, e), p = p.sibling;
      qt(f);
    }
    function P0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case de:
        case Qe:
        case ot:
        case Be: {
          if (fl(t, e), Kl(e), u & Rt) {
            try {
              sl(Il | yr, e, e.return), Ho(Il | yr, e);
            } catch (Ie) {
              mn(e, e.return, Ie);
            }
            if (e.mode & At) {
              try {
                Xl(), sl(gr | yr, e, e.return);
              } catch (Ie) {
                mn(e, e.return, Ie);
              }
              Gl(e);
            } else
              try {
                sl(gr | yr, e, e.return);
              } catch (Ie) {
                mn(e, e.return, Ie);
              }
          }
          return;
        }
        case pe: {
          fl(t, e), Kl(e), u & Dn && i !== null && Pf(i, i.return);
          return;
        }
        case ae: {
          fl(t, e), Kl(e), u & Dn && i !== null && Pf(i, i.return);
          {
            if (e.flags & za) {
              var s = e.stateNode;
              try {
                HE(s);
              } catch (Ie) {
                mn(e, e.return, Ie);
              }
            }
            if (u & Rt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    ow(f, g, y, v, p, e);
                  } catch (Ie) {
                    mn(e, e.return, Ie);
                  }
              }
            }
          }
          return;
        }
        case We: {
          if (fl(t, e), Kl(e), u & Rt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, x = e.memoizedProps, N = i !== null ? i.memoizedProps : x;
            try {
              sw(_, N, x);
            } catch (Ie) {
              mn(e, e.return, Ie);
            }
          }
          return;
        }
        case J: {
          if (fl(t, e), Kl(e), u & Rt && i !== null) {
            var F = i.memoizedState;
            if (F.isDehydrated)
              try {
                zw(t.containerInfo);
              } catch (Ie) {
                mn(e, e.return, Ie);
              }
          }
          return;
        }
        case Ee: {
          fl(t, e), Kl(e);
          return;
        }
        case be: {
          fl(t, e), Kl(e);
          var V = e.child;
          if (V.flags & Bn) {
            var ce = V.stateNode, Fe = V.memoizedState, Oe = Fe !== null;
            if (ce.isHidden = Oe, Oe) {
              var xt = V.alternate !== null && V.alternate.memoizedState !== null;
              xt || Lb();
            }
          }
          if (u & Rt) {
            try {
              Kx(e);
            } catch (Ie) {
              mn(e, e.return, Ie);
            }
            H0(e);
          }
          return;
        }
        case Le: {
          var ht = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ft
          ) {
            var D = Yr;
            Yr = D || ht, fl(t, e), Yr = D;
          } else
            fl(t, e);
          if (Kl(e), u & Bn) {
            var B = e.stateNode, O = e.memoizedState, Z = O !== null, ye = e;
            if (B.isHidden = Z, Z && !ht && (ye.mode & ft) !== ze) {
              we = ye;
              for (var fe = ye.child; fe !== null; )
                we = fe, eb(fe), fe = fe.sibling;
            }
            Ix(ye, Z);
          }
          return;
        }
        case Gt: {
          fl(t, e), Kl(e), u & Rt && H0(e);
          return;
        }
        case mt:
          return;
        default: {
          fl(t, e), Kl(e);
          return;
        }
      }
    }
    function Kl(e) {
      var t = e.flags;
      if (t & xn) {
        try {
          Gx(e);
        } catch (a) {
          mn(e, e.return, a);
        }
        e.flags &= ~xn;
      }
      t & ea && (e.flags &= ~ea);
    }
    function Jx(e, t, a) {
      jf = a, Hf = t, we = e, V0(e, t, a), jf = null, Hf = null;
    }
    function V0(e, t, a) {
      for (var i = (e.mode & ft) !== ze; we !== null; ) {
        var u = we, s = u.child;
        if (u.tag === Le && i) {
          var f = u.memoizedState !== null, p = f || _m;
          if (p) {
            bS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Yr, _ = _m, x = Yr;
            _m = p, Yr = g, Yr && !x && (we = u, tb(u));
            for (var N = s; N !== null; )
              we = N, V0(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            we = u, _m = _, Yr = x, bS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ol) !== Ne && s !== null ? (s.return = u, we = s) : bS(e, t, a);
      }
    }
    function bS(e, t, a) {
      for (; we !== null; ) {
        var i = we;
        if ((i.flags & Ol) !== Ne) {
          var u = i.alternate;
          qt(i);
          try {
            $x(t, u, i, a);
          } catch (f) {
            mn(i, i.return, f);
          }
          hn();
        }
        if (i === e) {
          we = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, we = s;
          return;
        }
        we = i.return;
      }
    }
    function eb(e) {
      for (; we !== null; ) {
        var t = we, a = t.child;
        switch (t.tag) {
          case de:
          case Qe:
          case ot:
          case Be: {
            if (t.mode & At)
              try {
                Xl(), sl(gr, t, t.return);
              } finally {
                Gl(t);
              }
            else
              sl(gr, t, t.return);
            break;
          }
          case pe: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && TS(t, t.return, i);
            break;
          }
          case ae: {
            Pf(t, t.return);
            break;
          }
          case Le: {
            var u = t.memoizedState !== null;
            if (u) {
              B0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, we = a) : B0(e);
      }
    }
    function B0(e) {
      for (; we !== null; ) {
        var t = we;
        if (t === e) {
          we = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, we = a;
          return;
        }
        we = t.return;
      }
    }
    function tb(e) {
      for (; we !== null; ) {
        var t = we, a = t.child;
        if (t.tag === Le) {
          var i = t.memoizedState !== null;
          if (i) {
            $0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, we = a) : $0(e);
      }
    }
    function $0(e) {
      for (; we !== null; ) {
        var t = we;
        qt(t);
        try {
          Yx(t);
        } catch (i) {
          mn(t, t.return, i);
        }
        if (hn(), t === e) {
          we = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, we = a;
          return;
        }
        we = t.return;
      }
    }
    function nb(e, t, a, i) {
      we = t, rb(t, e, a, i);
    }
    function rb(e, t, a, i) {
      for (; we !== null; ) {
        var u = we, s = u.child;
        (u.subtreeFlags & Gi) !== Ne && s !== null ? (s.return = u, we = s) : ab(e, t, a, i);
      }
    }
    function ab(e, t, a, i) {
      for (; we !== null; ) {
        var u = we;
        if ((u.flags & Jr) !== Ne) {
          qt(u);
          try {
            ib(t, u, a, i);
          } catch (f) {
            mn(u, u.return, f);
          }
          hn();
        }
        if (u === e) {
          we = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, we = s;
          return;
        }
        we = u.return;
      }
    }
    function ib(e, t, a, i) {
      switch (t.tag) {
        case de:
        case Qe:
        case Be: {
          if (t.mode & At) {
            Ig();
            try {
              Ho(Br | yr, t);
            } finally {
              Yg(t);
            }
          } else
            Ho(Br | yr, t);
          break;
        }
      }
    }
    function lb(e) {
      we = e, ub();
    }
    function ub() {
      for (; we !== null; ) {
        var e = we, t = e.child;
        if ((we.flags & Na) !== Ne) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              we = u, cb(u, e);
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
            we = e;
          }
        }
        (e.subtreeFlags & Gi) !== Ne && t !== null ? (t.return = e, we = t) : ob();
      }
    }
    function ob() {
      for (; we !== null; ) {
        var e = we;
        (e.flags & Jr) !== Ne && (qt(e), sb(e), hn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, we = t;
          return;
        }
        we = e.return;
      }
    }
    function sb(e) {
      switch (e.tag) {
        case de:
        case Qe:
        case Be: {
          e.mode & At ? (Ig(), sl(Br | yr, e, e.return), Yg(e)) : sl(Br | yr, e, e.return);
          break;
        }
      }
    }
    function cb(e, t) {
      for (; we !== null; ) {
        var a = we;
        qt(a), db(a, t), hn();
        var i = a.child;
        i !== null ? (i.return = a, we = i) : fb(e);
      }
    }
    function fb(e) {
      for (; we !== null; ) {
        var t = we, a = t.sibling, i = t.return;
        if (U0(t), t === e) {
          we = null;
          return;
        }
        if (a !== null) {
          a.return = i, we = a;
          return;
        }
        we = i;
      }
    }
    function db(e, t) {
      switch (e.tag) {
        case de:
        case Qe:
        case Be: {
          e.mode & At ? (Ig(), sl(Br, e, t), Yg(e)) : sl(Br, e, t);
          break;
        }
      }
    }
    function pb(e) {
      switch (e.tag) {
        case de:
        case Qe:
        case Be: {
          try {
            Ho(gr | yr, e);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
      }
    }
    function vb(e) {
      switch (e.tag) {
        case de:
        case Qe:
        case Be: {
          try {
            Ho(Br | yr, e);
          } catch (t) {
            mn(e, e.return, t);
          }
          break;
        }
      }
    }
    function hb(e) {
      switch (e.tag) {
        case de:
        case Qe:
        case Be: {
          try {
            sl(gr | yr, e, e.return);
          } catch (a) {
            mn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && TS(e, e.return, t);
          break;
        }
      }
    }
    function mb(e) {
      switch (e.tag) {
        case de:
        case Qe:
        case Be:
          try {
            sl(Br | yr, e, e.return);
          } catch (t) {
            mn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var yb = [];
    function gb() {
      yb.forEach(function(e) {
        return e();
      });
    }
    var Sb = j.ReactCurrentActQueue;
    function Eb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Y0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Sb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Cb = Math.ceil, _S = j.ReactCurrentDispatcher, kS = j.ReactCurrentOwner, Wr = j.ReactCurrentBatchConfig, dl = j.ReactCurrentActQueue, Cr = (
      /*             */
      0
    ), I0 = (
      /*               */
      1
    ), Qr = (
      /*                */
      2
    ), Fi = (
      /*                */
      4
    ), Bu = 0, Ap = 1, tc = 2, Dm = 3, Fp = 4, W0 = 5, DS = 6, wt = Cr, wa = null, jn = null, Rr = I, ql = I, OS = Oo(I), Tr = Bu, jp = null, Om = I, Hp = I, Mm = I, Pp = null, Ia = null, MS = 0, Q0 = 500, G0 = 1 / 0, Rb = 500, $u = null;
    function Vp() {
      G0 = Jn() + Rb;
    }
    function X0() {
      return G0;
    }
    var Lm = !1, LS = null, Vf = null, nc = !1, Vo = null, Bp = I, NS = [], zS = null, Tb = 50, $p = 0, US = null, AS = !1, Nm = !1, wb = 50, Bf = 0, zm = null, Yp = ln, Um = I, K0 = !1;
    function Am() {
      return wa;
    }
    function xa() {
      return (wt & (Qr | Fi)) !== Cr ? Jn() : (Yp !== ln || (Yp = Jn()), Yp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & ft) === ze)
        return Ye;
      if ((wt & Qr) !== Cr && Rr !== I)
        return Ts(Rr);
      var a = S1() !== g1;
      if (a) {
        if (Wr.transition !== null) {
          var i = Wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Um === Mt && (Um = Ld()), Um;
      }
      var u = Pa();
      if (u !== Mt)
        return u;
      var s = rw();
      return s;
    }
    function xb(e) {
      var t = e.mode;
      return (t & ft) === ze ? Ye : Pv();
    }
    function wr(e, t, a, i) {
      Xb(), K0 && S("useInsertionEffect must not schedule updates."), AS && (Nm = !0), So(e, a, i), (wt & Qr) !== I && e === wa ? Zb(t) : (ra && bs(e, t, a), Jb(t), e === wa && ((wt & Qr) === Cr && (Hp = it(Hp, a)), Tr === Fp && $o(e, Rr)), Wa(e, i), a === Ye && wt === Cr && (t.mode & ft) === ze && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !dl.isBatchingLegacy && (Vp(), KE()));
    }
    function bb(e, t, a) {
      var i = e.current;
      i.lanes = t, So(e, t, a), Wa(e, a);
    }
    function _b(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (wt & Qr) !== Cr
      );
    }
    function Wa(e, t) {
      var a = e.callbackNode;
      Kc(e, t);
      var i = Xc(e, e === wa ? Rr : I);
      if (i === I) {
        a !== null && dR(a), e.callbackNode = null, e.callbackPriority = Mt;
        return;
      }
      var u = Ul(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(dl.current !== null && a !== $S)) {
        a == null && s !== Ye && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && dR(a);
      var f;
      if (u === Ye)
        e.tag === Mo ? (dl.isBatchingLegacy !== null && (dl.didScheduleLegacyUpdate = !0), t1(J0.bind(null, e))) : XE(J0.bind(null, e)), dl.current !== null ? dl.current.push(Lo) : iw(function() {
          (wt & (Qr | Fi)) === Cr && Lo();
        }), f = null;
      else {
        var p;
        switch (Qv(i)) {
          case Ar:
            p = ss;
            break;
          case _i:
            p = Ml;
            break;
          case ja:
            p = Xi;
            break;
          case Ha:
            p = mu;
            break;
          default:
            p = Xi;
            break;
        }
        f = YS(p, q0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function q0(e, t) {
      if (I1(), Yp = ln, Um = I, (wt & (Qr | Fi)) !== Cr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Iu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Xc(e, e === wa ? Rr : I);
      if (u === I)
        return null;
      var s = !Zc(e, u) && !Hv(e, u) && !t, f = s ? Fb(e, u) : jm(e, u);
      if (f !== Bu) {
        if (f === tc) {
          var p = qc(e);
          p !== I && (u = p, f = FS(e, p));
        }
        if (f === Ap) {
          var v = jp;
          throw rc(e, I), $o(e, u), Wa(e, Jn()), v;
        }
        if (f === DS)
          $o(e, u);
        else {
          var y = !Zc(e, u), g = e.current.alternate;
          if (y && !Db(g)) {
            if (f = jm(e, u), f === tc) {
              var _ = qc(e);
              _ !== I && (u = _, f = FS(e, _));
            }
            if (f === Ap) {
              var x = jp;
              throw rc(e, I), $o(e, u), Wa(e, Jn()), x;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, kb(e, f, u);
        }
      }
      return Wa(e, Jn()), e.callbackNode === a ? q0.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Pp;
      if (tf(e)) {
        var i = rc(e, t);
        i.flags |= _r, Gw(e.containerInfo);
      }
      var u = jm(e, t);
      if (u !== tc) {
        var s = Ia;
        Ia = a, s !== null && Z0(s);
      }
      return u;
    }
    function Z0(e) {
      Ia === null ? Ia = e : Ia.push.apply(Ia, e);
    }
    function kb(e, t, a) {
      switch (t) {
        case Bu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case tc: {
          ac(e, Ia, $u);
          break;
        }
        case Dm: {
          if ($o(e, a), _u(a) && // do not delay if we're inside an act() scope
          !pR()) {
            var i = MS + Q0 - Jn();
            if (i > 10) {
              var u = Xc(e, I);
              if (u !== I)
                break;
              var s = e.suspendedLanes;
              if (!ku(s, a)) {
                xa(), Jc(e, s);
                break;
              }
              e.timeoutHandle = zy(ac.bind(null, e, Ia, $u), i);
              break;
            }
          }
          ac(e, Ia, $u);
          break;
        }
        case Fp: {
          if ($o(e, a), Od(a))
            break;
          if (!pR()) {
            var f = li(e, a), p = f, v = Jn() - p, y = Gb(v) - v;
            if (y > 10) {
              e.timeoutHandle = zy(ac.bind(null, e, Ia, $u), y);
              break;
            }
          }
          ac(e, Ia, $u);
          break;
        }
        case W0: {
          ac(e, Ia, $u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Db(e) {
      for (var t = e; ; ) {
        if (t.flags & vo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!X(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vo && v !== null) {
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
    function $o(e, t) {
      t = ws(t, Mm), t = ws(t, Hp), $v(e, t);
    }
    function J0(e) {
      if (W1(), (wt & (Qr | Fi)) !== Cr)
        throw new Error("Should not already be working.");
      Iu();
      var t = Xc(e, I);
      if (!ia(t, Ye))
        return Wa(e, Jn()), null;
      var a = jm(e, t);
      if (e.tag !== Mo && a === tc) {
        var i = qc(e);
        i !== I && (t = i, a = FS(e, i));
      }
      if (a === Ap) {
        var u = jp;
        throw rc(e, I), $o(e, t), Wa(e, Jn()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, ac(e, Ia, $u), Wa(e, Jn()), null;
    }
    function Ob(e, t) {
      t !== I && (ef(e, it(t, Ye)), Wa(e, Jn()), (wt & (Qr | Fi)) === Cr && (Vp(), Lo()));
    }
    function jS(e, t) {
      var a = wt;
      wt |= I0;
      try {
        return e(t);
      } finally {
        wt = a, wt === Cr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !dl.isBatchingLegacy && (Vp(), KE());
      }
    }
    function Mb(e, t, a, i, u) {
      var s = Pa(), f = Wr.transition;
      try {
        return Wr.transition = null, Wn(Ar), e(t, a, i, u);
      } finally {
        Wn(s), Wr.transition = f, wt === Cr && Vp();
      }
    }
    function Yu(e) {
      Vo !== null && Vo.tag === Mo && (wt & (Qr | Fi)) === Cr && Iu();
      var t = wt;
      wt |= I0;
      var a = Wr.transition, i = Pa();
      try {
        return Wr.transition = null, Wn(Ar), e ? e() : void 0;
      } finally {
        Wn(i), Wr.transition = a, wt = t, (wt & (Qr | Fi)) === Cr && Lo();
      }
    }
    function eR() {
      return (wt & (Qr | Fi)) !== Cr;
    }
    function Fm(e, t) {
      ca(OS, ql, e), ql = it(ql, t);
    }
    function HS(e) {
      ql = OS.current, sa(OS, e);
    }
    function rc(e, t) {
      e.finishedWork = null, e.finishedLanes = I;
      var a = e.timeoutHandle;
      if (a !== Uy && (e.timeoutHandle = Uy, aw(a)), jn !== null)
        for (var i = jn.return; i !== null; ) {
          var u = i.alternate;
          D0(u, i), i = i.return;
        }
      wa = e;
      var s = ic(e.current, null);
      return jn = s, Rr = ql = t, Tr = Bu, jp = null, Om = I, Hp = I, Mm = I, Pp = null, Ia = null, b1(), al.discardPendingWarnings(), s;
    }
    function tR(e, t) {
      do {
        var a = jn;
        try {
          if (Qh(), xC(), hn(), kS.current = null, a === null || a.return === null) {
            Tr = Ap, jp = t, jn = null;
            return;
          }
          if (K && a.mode & At && Rm(a, !0), ie)
            if (Ea(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bi(a, i, Rr);
            } else
              fs(a, t, Rr);
          tx(e, a.return, a, t, Rr), iR(a);
        } catch (u) {
          t = u, jn === a && a !== null ? (a = a.return, jn = a) : a = jn;
          continue;
        }
        return;
      } while (!0);
    }
    function nR() {
      var e = _S.current;
      return _S.current = ym, e === null ? ym : e;
    }
    function rR(e) {
      _S.current = e;
    }
    function Lb() {
      MS = Jn();
    }
    function Ip(e) {
      Om = it(e, Om);
    }
    function Nb() {
      Tr === Bu && (Tr = Dm);
    }
    function PS() {
      (Tr === Bu || Tr === Dm || Tr === tc) && (Tr = Fp), wa !== null && (Rs(Om) || Rs(Hp)) && $o(wa, Rr);
    }
    function zb(e) {
      Tr !== Fp && (Tr = tc), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function Ub() {
      return Tr === Bu;
    }
    function jm(e, t) {
      var a = wt;
      wt |= Qr;
      var i = nR();
      if (wa !== e || Rr !== t) {
        if (ra) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, Rr), u.clear()), Yv(e, t);
        }
        $u = Ad(), rc(e, t);
      }
      Eu(t);
      do
        try {
          Ab();
          break;
        } catch (s) {
          tR(e, s);
        }
      while (!0);
      if (Qh(), wt = a, rR(i), jn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Mc(), wa = null, Rr = I, Tr;
    }
    function Ab() {
      for (; jn !== null; )
        aR(jn);
    }
    function Fb(e, t) {
      var a = wt;
      wt |= Qr;
      var i = nR();
      if (wa !== e || Rr !== t) {
        if (ra) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Wp(e, Rr), u.clear()), Yv(e, t);
        }
        $u = Ad(), Vp(), rc(e, t);
      }
      Eu(t);
      do
        try {
          jb();
          break;
        } catch (s) {
          tR(e, s);
        }
      while (!0);
      return Qh(), rR(i), wt = a, jn !== null ? (Uv(), Bu) : (Mc(), wa = null, Rr = I, Tr);
    }
    function jb() {
      for (; jn !== null && !hd(); )
        aR(jn);
    }
    function aR(e) {
      var t = e.alternate;
      qt(e);
      var a;
      (e.mode & At) !== ze ? ($g(e), a = VS(t, e, ql), Rm(e, !0)) : a = VS(t, e, ql), hn(), e.memoizedProps = e.pendingProps, a === null ? iR(e) : jn = a, kS.current = null;
    }
    function iR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & os) === Ne) {
          qt(t);
          var u = void 0;
          if ((t.mode & At) === ze ? u = k0(a, t, ql) : ($g(t), u = k0(a, t, ql), Rm(t, !1)), hn(), u !== null) {
            jn = u;
            return;
          }
        } else {
          var s = Nx(a, t);
          if (s !== null) {
            s.flags &= Dv, jn = s;
            return;
          }
          if ((t.mode & At) !== ze) {
            Rm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= os, i.subtreeFlags = Ne, i.deletions = null;
          else {
            Tr = DS, jn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          jn = v;
          return;
        }
        t = i, jn = t;
      } while (t !== null);
      Tr === Bu && (Tr = W0);
    }
    function ac(e, t, a) {
      var i = Pa(), u = Wr.transition;
      try {
        Wr.transition = null, Wn(Ar), Hb(e, t, a, i);
      } finally {
        Wr.transition = u, Wn(i);
      }
      return null;
    }
    function Hb(e, t, a, i) {
      do
        Iu();
      while (Vo !== null);
      if (Kb(), (wt & (Qr | Fi)) !== Cr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Cd(s), u === null)
        return Rd(), null;
      if (s === I && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = I, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Mt;
      var f = it(u.lanes, u.childLanes);
      zd(e, f), e === wa && (wa = null, jn = null, Rr = I), ((u.subtreeFlags & Gi) !== Ne || (u.flags & Gi) !== Ne) && (nc || (nc = !0, zS = a, YS(Xi, function() {
        return Iu(), null;
      })));
      var p = (u.subtreeFlags & (kl | Dl | Ol | Gi)) !== Ne, v = (u.flags & (kl | Dl | Ol | Gi)) !== Ne;
      if (p || v) {
        var y = Wr.transition;
        Wr.transition = null;
        var g = Pa();
        Wn(Ar);
        var _ = wt;
        wt |= Fi, kS.current = null, jx(e, u), KC(), Zx(e, u, s), qT(e.containerInfo), e.current = u, ds(s), Jx(u, e, s), ps(), md(), wt = _, Wn(g), Wr.transition = y;
      } else
        e.current = u, KC();
      var x = nc;
      if (nc ? (nc = !1, Vo = e, Bp = s) : (Bf = 0, zm = null), f = e.pendingLanes, f === I && (Vf = null), x || sR(e.current, !1), gd(u.stateNode, i), ra && e.memoizedUpdaters.clear(), gb(), Wa(e, Jn()), t !== null)
        for (var N = e.onRecoverableError, F = 0; F < t.length; F++) {
          var V = t[F], ce = V.stack, Fe = V.digest;
          N(V.value, {
            componentStack: ce,
            digest: Fe
          });
        }
      if (Lm) {
        Lm = !1;
        var Oe = LS;
        throw LS = null, Oe;
      }
      return ia(Bp, Ye) && e.tag !== Mo && Iu(), f = e.pendingLanes, ia(f, Ye) ? (Y1(), e === US ? $p++ : ($p = 0, US = e)) : $p = 0, Lo(), Rd(), null;
    }
    function Iu() {
      if (Vo !== null) {
        var e = Qv(Bp), t = ks(ja, e), a = Wr.transition, i = Pa();
        try {
          return Wr.transition = null, Wn(t), Vb();
        } finally {
          Wn(i), Wr.transition = a;
        }
      }
      return !1;
    }
    function Pb(e) {
      NS.push(e), nc || (nc = !0, YS(Xi, function() {
        return Iu(), null;
      }));
    }
    function Vb() {
      if (Vo === null)
        return !1;
      var e = zS;
      zS = null;
      var t = Vo, a = Bp;
      if (Vo = null, Bp = I, (wt & (Qr | Fi)) !== Cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      AS = !0, Nm = !1, Su(a);
      var i = wt;
      wt |= Fi, lb(t.current), nb(t, t.current, a, e);
      {
        var u = NS;
        NS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Bx(t, f);
        }
      }
      xd(), sR(t.current, !0), wt = i, Lo(), Nm ? t === zm ? Bf++ : (Bf = 0, zm = t) : Bf = 0, AS = !1, Nm = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function lR(e) {
      return Vf !== null && Vf.has(e);
    }
    function Bb(e) {
      Vf === null ? Vf = /* @__PURE__ */ new Set([e]) : Vf.add(e);
    }
    function $b(e) {
      Lm || (Lm = !0, LS = e);
    }
    var Yb = $b;
    function uR(e, t, a) {
      var i = Js(a, t), u = a0(e, i, Ye), s = zo(e, u, Ye), f = xa();
      s !== null && (So(s, Ye, f), Wa(s, f));
    }
    function mn(e, t, a) {
      if (Ux(a), Qp(!1), e.tag === J) {
        uR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          uR(i, e, a);
          return;
        } else if (i.tag === pe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !lR(s)) {
            var f = Js(a, e), p = uS(i, f, Ye), v = zo(i, p, Ye), y = xa();
            v !== null && (So(v, Ye, y), Wa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Ib(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = xa();
      Jc(e, a), e_(e), wa === e && ku(Rr, a) && (Tr === Fp || Tr === Dm && _u(Rr) && Jn() - MS < Q0 ? rc(e, I) : Mm = it(Mm, a)), Wa(e, u);
    }
    function oR(e, t) {
      t === Mt && (t = xb(e));
      var a = xa(), i = $a(e, t);
      i !== null && (So(i, t, a), Wa(i, a));
    }
    function Wb(e) {
      var t = e.memoizedState, a = Mt;
      t !== null && (a = t.retryLane), oR(e, a);
    }
    function Qb(e, t) {
      var a = Mt, i;
      switch (e.tag) {
        case be:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Gt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), oR(e, a);
    }
    function Gb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Cb(e / 1960) * 1960;
    }
    function Xb() {
      if ($p > Tb)
        throw $p = 0, US = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > wb && (Bf = 0, zm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Kb() {
      al.flushLegacyContextWarning(), al.flushPendingUnsafeLifecycleWarnings();
    }
    function sR(e, t) {
      qt(e), Hm(e, _l, hb), t && Hm(e, Ti, mb), Hm(e, _l, pb), t && Hm(e, Ti, vb), hn();
    }
    function Hm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ne ? i = i.child : ((i.flags & t) !== Ne && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Pm = null;
    function cR(e) {
      {
        if ((wt & Qr) !== Cr || !(e.mode & ft))
          return;
        var t = e.tag;
        if (t !== Ze && t !== J && t !== pe && t !== de && t !== Qe && t !== ot && t !== Be)
          return;
        var a = Xe(e) || "ReactComponent";
        if (Pm !== null) {
          if (Pm.has(a))
            return;
          Pm.add(a);
        } else
          Pm = /* @__PURE__ */ new Set([a]);
        var i = dr;
        try {
          qt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? qt(e) : hn();
        }
      }
    }
    var VS;
    {
      var qb = null;
      VS = function(e, t, a) {
        var i = gR(qb, t);
        try {
          return T0(e, t, a);
        } catch (s) {
          if (s1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Qh(), xC(), D0(e, t), gR(t, i), t.mode & At && $g(t), bl(null, T0, null, e, t, a), Wi()) {
            var u = us();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var fR = !1, BS;
    BS = /* @__PURE__ */ new Set();
    function Zb(e) {
      if (mi && !V1())
        switch (e.tag) {
          case de:
          case Qe:
          case Be: {
            var t = jn && Xe(jn) || "Unknown", a = t;
            if (!BS.has(a)) {
              BS.add(a);
              var i = Xe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case pe: {
            fR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), fR = !0);
            break;
          }
        }
    }
    function Wp(e, t) {
      if (ra) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          bs(e, i, t);
        });
      }
    }
    var $S = {};
    function YS(e, t) {
      {
        var a = dl.current;
        return a !== null ? (a.push(t), $S) : vd(e, t);
      }
    }
    function dR(e) {
      if (e !== $S)
        return Mv(e);
    }
    function pR() {
      return dl.current !== null;
    }
    function Jb(e) {
      {
        if (e.mode & ft) {
          if (!Y0())
            return;
        } else if (!Eb() || wt !== Cr || e.tag !== de && e.tag !== Qe && e.tag !== Be)
          return;
        if (dl.current === null) {
          var t = dr;
          try {
            qt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Xe(e));
          } finally {
            t ? qt(e) : hn();
          }
        }
      }
    }
    function e_(e) {
      e.tag !== Mo && Y0() && dl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      K0 = e;
    }
    var ji = null, $f = null, t_ = function(e) {
      ji = e;
    };
    function Yf(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        return t === void 0 ? e : t.current;
      }
    }
    function IS(e) {
      return Yf(e);
    }
    function WS(e) {
      {
        if (ji === null)
          return e;
        var t = ji(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Y,
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
    function vR(e, t) {
      {
        if (ji === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case pe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case de: {
            (typeof i == "function" || s === Ke) && (u = !0);
            break;
          }
          case Qe: {
            (s === Y || s === Ke) && (u = !0);
            break;
          }
          case ot:
          case Be: {
            (s === tt || s === Ke) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ji(a);
          if (f !== void 0 && f === ji(i))
            return !0;
        }
        return !1;
      }
    }
    function hR(e) {
      {
        if (ji === null || typeof WeakSet != "function")
          return;
        $f === null && ($f = /* @__PURE__ */ new WeakSet()), $f.add(e);
      }
    }
    var n_ = function(e, t) {
      {
        if (ji === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Iu(), Yu(function() {
          QS(e.current, i, a);
        });
      }
    }, r_ = function(e, t) {
      {
        if (e.context !== si)
          return;
        Iu(), Yu(function() {
          Gp(t, e, null, null);
        });
      }
    };
    function QS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case de:
          case Be:
          case pe:
            v = p;
            break;
          case Qe:
            v = p.render;
            break;
        }
        if (ji === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = ji(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === pe ? g = !0 : y = !0));
        }
        if ($f !== null && ($f.has(e) || i !== null && $f.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var x = $a(e, Ye);
          x !== null && wr(x, e, Ye, ln);
        }
        u !== null && !g && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var a_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return GS(e.current, i, a), a;
      }
    };
    function GS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case de:
          case Be:
          case pe:
            p = f;
            break;
          case Qe:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? i_(e, a) : i !== null && GS(i, t, a), u !== null && GS(u, t, a);
      }
    }
    function i_(e, t) {
      {
        var a = l_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ae:
              t.add(i.stateNode);
              return;
            case Ee:
              t.add(i.stateNode.containerInfo);
              return;
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function l_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ae)
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
    var XS;
    {
      XS = !1;
      try {
        var mR = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function u_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ne, this.subtreeFlags = Ne, this.deletions = null, this.lanes = I, this.childLanes = I, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ci = function(e, t, a, i) {
      return new u_(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function o_(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function s_(e) {
      if (typeof e == "function")
        return KS(e) ? pe : de;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Y)
          return Qe;
        if (t === tt)
          return ot;
      }
      return Ze;
    }
    function ic(e, t) {
      var a = e.alternate;
      a === null ? (a = ci(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ne, a.subtreeFlags = Ne, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & $n, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ze:
        case de:
        case Be:
          a.type = Yf(e.type);
          break;
        case pe:
          a.type = IS(e.type);
          break;
        case Qe:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function c_(e, t) {
      e.flags &= $n | xn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = I, e.lanes = t, e.child = null, e.subtreeFlags = Ne, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ne, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function f_(e, t, a) {
      var i;
      return e === Fh ? (i = ft, t === !0 && (i |= en, i |= Ft)) : i = ze, ra && (i |= At), ci(J, null, null, i);
    }
    function qS(e, t, a, i, u, s) {
      var f = Ze, p = e;
      if (typeof e == "function")
        KS(e) ? (f = pe, p = IS(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = ae;
      else
        e: switch (e) {
          case di:
            return Yo(a.children, u, s, t);
          case Xa:
            f = rt, u |= en, (u & ft) !== ze && (u |= Ft);
            break;
          case pi:
            return d_(a, u, s, t);
          case oe:
            return p_(a, u, s, t);
          case Se:
            return v_(a, u, s, t);
          case Ln:
            return yR(a, u, s, t);
          case on:
          case pt:
          case vn:
          case fr:
          case ct:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case vi:
                  f = at;
                  break e;
                case R:
                  f = rn;
                  break e;
                case Y:
                  f = Qe, p = WS(p);
                  break e;
                case tt:
                  f = ot;
                  break e;
                case Ke:
                  f = an, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Xe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ci(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function ZS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = qS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = ci(dt, e, i, t);
      return u.lanes = a, u;
    }
    function d_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ci(ut, e, i, t | At);
      return u.elementType = pi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function p_(e, t, a, i) {
      var u = ci(be, e, i, t);
      return u.elementType = oe, u.lanes = a, u;
    }
    function v_(e, t, a, i) {
      var u = ci(Gt, e, i, t);
      return u.elementType = Se, u.lanes = a, u;
    }
    function yR(e, t, a, i) {
      var u = ci(Le, e, i, t);
      u.elementType = Ln, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function JS(e, t, a) {
      var i = ci(We, e, null, t);
      return i.lanes = a, i;
    }
    function h_() {
      var e = ci(ae, null, null, ze);
      return e.elementType = "DELETED", e;
    }
    function m_(e) {
      var t = ci(It, null, null, ze);
      return t.stateNode = e, t;
    }
    function eE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ci(Ee, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function gR(e, t) {
      return e === null && (e = ci(Ze, null, null, ze)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function y_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Uy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Mt, this.eventTimes = xs(I), this.expirationTimes = xs(ln), this.pendingLanes = I, this.suspendedLanes = I, this.pingedLanes = I, this.expiredLanes = I, this.mutableReadLanes = I, this.finishedLanes = I, this.entangledLanes = I, this.entanglements = xs(I), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Cu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Mo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function SR(e, t, a, i, u, s, f, p, v, y) {
      var g = new y_(e, t, a, p, v), _ = f_(t, s);
      g.current = _, _.stateNode = g;
      {
        var x = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = x;
      }
      return pg(_), g;
    }
    var tE = "18.3.1";
    function g_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return or(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: cr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var nE, rE;
    nE = !1, rE = {};
    function ER(e) {
      if (!e)
        return si;
      var t = po(e), a = e1(t);
      if (t.tag === pe) {
        var i = t.type;
        if (Yl(i))
          return QE(t, i, a);
      }
      return a;
    }
    function S_(e, t) {
      {
        var a = po(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ta(a);
        if (u === null)
          return null;
        if (u.mode & en) {
          var s = Xe(a) || "Component";
          if (!rE[s]) {
            rE[s] = !0;
            var f = dr;
            try {
              qt(u), a.mode & en ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? qt(f) : hn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function CR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return SR(e, t, v, y, a, i, u, s, f);
    }
    function RR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = SR(a, i, g, e, u, s, f, p, v);
      _.context = ER(null);
      var x = _.current, N = xa(), F = Bo(x), V = Pu(N, F);
      return V.callback = t ?? null, zo(x, V, F), bb(_, F, N), _;
    }
    function Gp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = xa(), f = Bo(u);
      _n(f);
      var p = ER(a);
      t.context === null ? t.context = p : t.pendingContext = p, mi && dr !== null && !nE && (nE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Xe(dr) || "Unknown"));
      var v = Pu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = zo(u, v, f);
      return y !== null && (wr(y, u, f, s), Zh(y, u, f)), f;
    }
    function Vm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ae:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function E_(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (tf(t)) {
            var a = Fv(t);
            Ob(t, a);
          }
          break;
        }
        case be: {
          Yu(function() {
            var u = $a(e, Ye);
            if (u !== null) {
              var s = xa();
              wr(u, e, Ye, s);
            }
          });
          var i = Ye;
          aE(e, i);
          break;
        }
      }
    }
    function TR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Bv(a.retryLane, t));
    }
    function aE(e, t) {
      TR(e, t);
      var a = e.alternate;
      a && TR(a, t);
    }
    function C_(e) {
      if (e.tag === be) {
        var t = Ss, a = $a(e, t);
        if (a !== null) {
          var i = xa();
          wr(a, e, t, i);
        }
        aE(e, t);
      }
    }
    function R_(e) {
      if (e.tag === be) {
        var t = Bo(e), a = $a(e, t);
        if (a !== null) {
          var i = xa();
          wr(a, e, t, i);
        }
        aE(e, t);
      }
    }
    function wR(e) {
      var t = Sn(e);
      return t === null ? null : t.stateNode;
    }
    var xR = function(e) {
      return null;
    };
    function T_(e) {
      return xR(e);
    }
    var bR = function(e) {
      return !1;
    };
    function w_(e) {
      return bR(e);
    }
    var _R = null, kR = null, DR = null, OR = null, MR = null, LR = null, NR = null, zR = null, UR = null;
    {
      var AR = function(e, t, a) {
        var i = t[a], u = st(e) ? e.slice() : lt({}, e);
        return a + 1 === t.length ? (st(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = AR(e[i], t, a + 1), u);
      }, FR = function(e, t) {
        return AR(e, t, 0);
      }, jR = function(e, t, a, i) {
        var u = t[i], s = st(e) ? e.slice() : lt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], st(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = jR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, HR = function(e, t, a) {
        if (t.length !== a.length) {
          bt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              bt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return jR(e, t, a, 0);
      }, PR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = st(e) ? e.slice() : lt({}, e);
        return s[u] = PR(e[u], t, a + 1, i), s;
      }, VR = function(e, t, a) {
        return PR(e, t, 0, a);
      }, iE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      _R = function(e, t, a, i) {
        var u = iE(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = $a(e, Ye);
          f !== null && wr(f, e, Ye, ln);
        }
      }, kR = function(e, t, a) {
        var i = iE(e, t);
        if (i !== null) {
          var u = FR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = lt({}, e.memoizedProps);
          var s = $a(e, Ye);
          s !== null && wr(s, e, Ye, ln);
        }
      }, DR = function(e, t, a, i) {
        var u = iE(e, t);
        if (u !== null) {
          var s = HR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = lt({}, e.memoizedProps);
          var f = $a(e, Ye);
          f !== null && wr(f, e, Ye, ln);
        }
      }, OR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Ye);
        i !== null && wr(i, e, Ye, ln);
      }, MR = function(e, t) {
        e.pendingProps = FR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, Ye);
        a !== null && wr(a, e, Ye, ln);
      }, LR = function(e, t, a) {
        e.pendingProps = HR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Ye);
        i !== null && wr(i, e, Ye, ln);
      }, NR = function(e) {
        var t = $a(e, Ye);
        t !== null && wr(t, e, Ye, ln);
      }, zR = function(e) {
        xR = e;
      }, UR = function(e) {
        bR = e;
      };
    }
    function x_(e) {
      var t = ta(e);
      return t === null ? null : t.stateNode;
    }
    function b_(e) {
      return null;
    }
    function __() {
      return dr;
    }
    function k_(e) {
      var t = e.findFiberByHostInstance, a = j.ReactCurrentDispatcher;
      return mo({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: _R,
        overrideHookStateDeletePath: kR,
        overrideHookStateRenamePath: DR,
        overrideProps: OR,
        overridePropsDeletePath: MR,
        overridePropsRenamePath: LR,
        setErrorHandler: zR,
        setSuspenseHandler: UR,
        scheduleUpdate: NR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: x_,
        findFiberByHostInstance: t || b_,
        // React Refresh
        findHostInstancesForRefresh: a_,
        scheduleRefresh: n_,
        scheduleRoot: r_,
        setRefreshHandler: t_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: __,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: tE
      });
    }
    var BR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function lE(e) {
      this._internalRoot = e;
    }
    Bm.prototype.render = lE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : $m(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Vn) {
          var i = wR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Gp(e, t, null, null);
    }, Bm.prototype.unmount = lE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        eR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Yu(function() {
          Gp(null, e, null, null);
        }), BE(t);
      }
    };
    function D_(e, t) {
      if (!$m(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $R(e);
      var a = !1, i = !1, u = "", s = BR;
      t != null && (t.hydrate ? bt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Lr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = CR(e, Fh, null, a, i, u, s);
      Oh(f.current, e);
      var p = e.nodeType === Vn ? e.parentNode : e;
      return ep(p), new lE(f);
    }
    function Bm(e) {
      this._internalRoot = e;
    }
    function O_(e) {
      e && Zv(e);
    }
    Bm.prototype.unstable_scheduleHydration = O_;
    function M_(e, t, a) {
      if (!$m(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $R(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = BR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = RR(t, null, e, Fh, i, s, f, p, v);
      if (Oh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          U1(y, _);
        }
      return new Bm(y);
    }
    function $m(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === Ii || e.nodeType === nd));
    }
    function Xp(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === Ii || e.nodeType === nd || e.nodeType === Vn && e.nodeValue === " react-mount-point-unstable "));
    }
    function $R(e) {
      e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var L_ = j.ReactCurrentOwner, YR;
    YR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Vn) {
        var t = wR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = uE(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function uE(e) {
      return e ? e.nodeType === Ii ? e.documentElement : e.firstChild : null;
    }
    function IR() {
    }
    function N_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var x = Vm(f);
            s.call(x);
          };
        }
        var f = RR(
          t,
          i,
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          IR
        );
        e._reactRootContainer = f, Oh(f.current, e);
        var p = e.nodeType === Vn ? e.parentNode : e;
        return ep(p), Yu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var x = Vm(g);
            y.call(x);
          };
        }
        var g = CR(
          e,
          Mo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          IR
        );
        e._reactRootContainer = g, Oh(g.current, e);
        var _ = e.nodeType === Vn ? e.parentNode : e;
        return ep(_), Yu(function() {
          Gp(t, g, a, i);
        }), g;
      }
    }
    function z_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ym(e, t, a, i, u) {
      YR(a), z_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = N_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Vm(f);
            p.call(v);
          };
        }
        Gp(t, f, e, u);
      }
      return Vm(f);
    }
    var WR = !1;
    function U_(e) {
      {
        WR || (WR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = L_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", kt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Zr ? e : S_(e, "findDOMNode");
    }
    function A_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ym(null, e, t, !0, a);
    }
    function F_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ym(null, e, t, !1, a);
    }
    function j_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Xp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ay(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ym(e, t, a, !1, i);
    }
    var QR = !1;
    function H_(e) {
      if (QR || (QR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Xp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = uE(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Yu(function() {
          Ym(null, null, e, !1, function() {
            e._reactRootContainer = null, BE(e);
          });
        }), !0;
      } else {
        {
          var u = uE(e), s = !!(u && Do(u)), f = e.nodeType === Zr && Xp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Dr(E_), Eo(C_), Gv(R_), Os(Pa), Fd(Iv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), gc(VT), ry(jS, Mb, Yu);
    function P_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!$m(t))
        throw new Error("Target container is not a DOM element.");
      return g_(e, t, null, a);
    }
    function V_(e, t, a, i) {
      return j_(e, t, a, i);
    }
    var oE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Cf, Mh, oo, Sc, jS]
    };
    function B_(e, t) {
      return oE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), D_(e, t);
    }
    function $_(e, t, a) {
      return oE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), M_(e, t, a);
    }
    function Y_(e) {
      return eR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Yu(e);
    }
    var I_ = k_({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: tE,
      rendererPackageName: "react-dom"
    });
    if (!I_ && Bt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var GR = window.location.protocol;
      /^(https?|file):$/.test(GR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (GR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oE, Ga.createPortal = P_, Ga.createRoot = B_, Ga.findDOMNode = U_, Ga.flushSync = Y_, Ga.hydrate = A_, Ga.hydrateRoot = $_, Ga.render = F_, Ga.unmountComponentAtNode = H_, Ga.unstable_batchedUpdates = jS, Ga.unstable_renderSubtreeIntoContainer = V_, Ga.version = tE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ga;
}
function lT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lT);
    } catch (ne) {
      console.error(ne);
    }
  }
}
process.env.NODE_ENV === "production" ? (lT(), pE.exports = nk()) : pE.exports = rk();
var ak = pE.exports, vE, Wm = ak;
if (process.env.NODE_ENV === "production")
  vE = Wm.createRoot, Wm.hydrateRoot;
else {
  var aT = Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  vE = function(ne, re) {
    aT.usingClientEntryPoint = !0;
    try {
      return Wm.createRoot(ne, re);
    } finally {
      aT.usingClientEntryPoint = !1;
    }
  };
}
function ik() {
  var It, Gt, mt, Le, _t, yt, Ct, Ce, ee;
  const [ne, re] = Cn.useState(null);
  Cn.useEffect(() => {
    const U = document.getElementById("network-container");
    if (!U) {
      console.error("Missing #network-container");
      return;
    }
    const P = (K) => Array.isArray(K) ? K : Array.isArray(K == null ? void 0 : K.nodes) ? K.nodes : K && typeof K == "object" ? Object.values(K) : [];
    let T = new AbortController();
    const L = (K) => {
      if (!K) return;
      const _e = `${K.includes("?") ? "&" : "?"}_=${Date.now()}`;
      fetch(K + _e, {
        credentials: "same-origin",
        cache: "no-store",
        signal: T.signal
      }).then((xe) => {
        if (!xe.ok) throw new Error(`Failed to load ${K}: ${xe.status} ${xe.statusText}`);
        return xe.json();
      }).then((xe) => {
        const Ue = P(xe);
        Ue.length || console.warn("Fetched JSON normalized to empty array:", xe), re(Ue);
      }).catch((xe) => {
        xe.name !== "AbortError" && console.error("Error fetching network data:", xe);
      });
    };
    L(U.getAttribute("data-network"));
    const ie = new MutationObserver((K) => {
      for (const De of K)
        De.type === "attributes" && De.attributeName === "data-network" && (T.abort(), T = new AbortController(), L(U.getAttribute("data-network")));
    });
    return ie.observe(U, { attributes: !0 }), () => {
      ie.disconnect(), T.abort();
    };
  }, []);
  const j = Cn.useMemo(() => Array.isArray(ne) && ne.length ? ne : [
    // { key: "HSat3", attributes: { node_type: "repeat", label: "HSat3", size: 45, color: "#8C5AE6", url: "/repeatTable/hsat3" } },
    // { key: "BCLAF1_HSat3", attributes: { node_type: "protein", label: "BCLAF1", size: 7, color: "#9DD6FB", url: "/proteinTable/bclaf1" } },
    // { key: "HSat7", attributes: { node_type: "repeat", label: "HSat7", size: 45, color: "#60A5FA", url: "/repeatTable/hsat7" } },
    // { key: "CTCF_HSat7", attributes: { node_type: "protein", label: "CTCF", size: 7, color: "#9DD6FB", url: "/proteinTable/ctcf" } },
  ], [ne]), Ot = Cn.useRef(null), [St, bt] = Cn.useState({ x: 0, y: 0 }), [S, Et] = Cn.useState(null), [de, pe] = Cn.useState(!1), Ze = Cn.useRef({ clientX: 0, clientY: 0, viewX: 0, viewY: 0 }), [J, Ee] = Cn.useState({ x: -400, y: -300, w: 800, h: 600 });
  Cn.useEffect(() => {
    const U = Ot.current;
    if (!U) return;
    const P = U.parentElement;
    if (!P) return;
    const T = () => {
      const ie = P.getBoundingClientRect();
      U.setAttribute("width", `${ie.width}`), U.setAttribute("height", `${ie.height}`);
    };
    T();
    const L = new ResizeObserver(T);
    return L.observe(P), () => L.disconnect();
  }, []), Cn.useEffect(() => {
    const U = (P) => bt({ x: P.clientX, y: P.clientY });
    return window.addEventListener("mousemove", U), () => window.removeEventListener("mousemove", U);
  }, []), Cn.useEffect(() => {
    const U = Ot.current;
    if (!U) return;
    const P = (T) => {
      T.preventDefault();
      const L = Math.pow(1.0015, T.deltaY), ie = U.getBoundingClientRect(), K = (T.clientX - ie.left) / ie.width, De = (T.clientY - ie.top) / ie.height;
      Ee((_e) => {
        const xe = _e.x + K * _e.w, Ue = _e.y + De * _e.h, $e = Math.max(50, Math.min(5e3, _e.w * L)), et = Math.max(50, Math.min(5e3, _e.h * L));
        return { x: xe - K * $e, y: Ue - De * et, w: $e, h: et };
      });
    };
    return U.addEventListener("wheel", P, { passive: !1 }), () => {
      U.removeEventListener("wheel", P);
    };
  }, []);
  const ae = Cn.useMemo(() => j.filter((U) => {
    var P;
    return ((P = U.attributes) == null ? void 0 : P.node_type) === "repeat";
  }), [j]), We = Cn.useMemo(() => j.filter((U) => {
    var P;
    return ((P = U.attributes) == null ? void 0 : P.node_type) === "protein";
  }), [j]), dt = Cn.useMemo(() => ae.map((U) => U.key), [ae]), rt = Cn.useMemo(() => We.map((U) => {
    let P = null;
    for (const T of dt)
      if (U.key.endsWith("_" + T)) {
        P = T;
        break;
      }
    if (!P) {
      const T = U.key.lastIndexOf("_");
      if (T > -1) {
        const L = U.key.slice(T + 1);
        dt.includes(L) && (P = L);
      }
    }
    return { ...U, _satelliteKey: P };
  }), [We, dt]), rn = (U, P) => {
    const T = /* @__PURE__ */ new Map();
    for (const L of U) {
      const ie = P(L), K = T.get(ie) || [];
      K.push(L), T.set(ie, K);
    }
    return T;
  }, at = Cn.useMemo(
    () => rn(rt.filter((U) => U._satelliteKey), (U) => U._satelliteKey),
    [rt]
  ), Qe = Cn.useMemo(
    () => rn(rt, (U) => {
      var P;
      return ((P = U.attributes) == null ? void 0 : P.label) || U.key;
    }),
    [rt]
  ), { satPositions: ut, proteinPositions: be } = Cn.useMemo(() => {
    const U = ae.length;
    if (U === 0) return { satPositions: /* @__PURE__ */ new Map(), proteinPositions: /* @__PURE__ */ new Map() };
    const P = Math.min(U, Math.max(2, Math.ceil(Math.sqrt(U)))), T = Math.ceil(U / P), L = 280, ie = 280, K = -((P - 1) * L) / 2, De = -((T - 1) * ie) / 2, _e = /* @__PURE__ */ new Map();
    ae.forEach(($e, et) => {
      const Bt = Math.floor(et / P), yn = et % P;
      _e.set($e.key, { x: K + yn * L, y: De + Bt * ie });
    });
    function xe($e, et) {
      var Kr;
      const Bt = _e.get($e) || { x: 0, y: 0 }, yn = ae.find((Nt) => Nt.key === $e), gn = (((Kr = yn == null ? void 0 : yn.attributes) == null ? void 0 : Kr.size) || 30) + 42, Hn = 4, Wt = et.length, Rn = et.map((Nt) => {
        var Q;
        return Number(((Q = Nt.attributes) == null ? void 0 : Q.size) ?? 6);
      });
      if (Wt === 0) return /* @__PURE__ */ new Map();
      if (Wt === 1) {
        const Nt = Math.max(gn, Rn[0] + Hn + 2), Q = /* @__PURE__ */ new Map();
        return Q.set(et[0].key, { x: Bt.x + Nt, y: Bt.y }), Q;
      }
      const or = new Array(Wt).fill(0).map((Nt, Q) => {
        const ve = Rn[Q], je = Rn[(Q + 1) % Wt];
        return ve + je + Hn;
      }), Xr = Math.PI * 2;
      let On = gn;
      const Pn = 500;
      let fn = 1 / 0;
      for (let Nt = 0; Nt < Pn; Nt++) {
        let Q = 0, ve = !1;
        for (let je = 0; je < Wt; je++) {
          const Qt = or[je] / (2 * On);
          if (Qt >= 1) {
            ve = !0;
            break;
          }
          const dn = 2 * Math.asin(Math.min(0.999999, Qt));
          Q += dn;
        }
        if (!ve && Q <= Xr) {
          fn = Q;
          break;
        }
        On += 1;
      }
      if (!isFinite(fn)) {
        const Nt = Xr / Wt, Q = /* @__PURE__ */ new Map();
        for (let ve = 0, je = 0; ve < Wt; ve++, je += Nt)
          Q.set(et[ve].key, { x: Bt.x + On * Math.cos(je), y: Bt.y + On * Math.sin(je) });
        return Q;
      }
      const Mn = or.map((Nt) => {
        const Q = Nt / (2 * On);
        return 2 * Math.asin(Math.min(0.999999, Q));
      }), va = Math.max(0, Xr - fn) / Wt, Tn = Mn.map((Nt) => Nt + va), Kn = /* @__PURE__ */ new Map();
      let xr = 0;
      for (let Nt = 0; Nt < Wt; Nt++) {
        const Q = xr + Tn[Nt] / 2, ve = Bt.x + On * Math.cos(Q), je = Bt.y + On * Math.sin(Q);
        Kn.set(et[Nt].key, { x: ve, y: je }), xr += Tn[Nt];
      }
      return Kn;
    }
    const Ue = /* @__PURE__ */ new Map();
    for (const [$e, et] of at.entries()) {
      const Bt = xe($e, et);
      for (const yn of et)
        Ue.set(yn.key, Bt.get(yn.key));
    }
    return { satPositions: _e, proteinPositions: Ue };
  }, [ae, at]), ot = Cn.useMemo(() => {
    const U = [];
    for (const [P, T] of at.entries()) {
      const L = ut.get(P);
      if (L)
        for (const ie of T) {
          const K = be.get(ie.key);
          K && U.push({ a: K, b: L });
        }
    }
    return U;
  }, [at, ut, be]), Be = Cn.useMemo(() => {
    const U = [];
    for (const [, P] of Qe.entries()) {
      const T = P.map((L) => be.get(L.key)).filter(Boolean);
      for (let L = 0; L < T.length - 1; L++) U.push({ a: T[L], b: T[L + 1] });
    }
    return U;
  }, [Qe, be]), an = `${J.x} ${J.y} ${J.w} ${J.h}`, Lt = (U) => {
    U.preventDefault();
    const P = Math.pow(1.0015, U.deltaY), T = Ot.current.getBoundingClientRect(), L = (U.clientX - T.left) / T.width, ie = (U.clientY - T.top) / T.height;
    Ee((K) => {
      const De = K.x + L * K.w, _e = K.y + ie * K.h, xe = Math.max(50, Math.min(5e3, K.w * P)), Ue = Math.max(50, Math.min(5e3, K.h * P));
      return { x: De - L * xe, y: _e - ie * Ue, w: xe, h: Ue };
    });
  };
  return /* @__PURE__ */ Vt.jsxs("div", { style: { width: "100%", height: "100%", overflow: "hidden", position: "relative", margin: 0, padding: 0, touchAction: "none", overscrollBehavior: "contain" }, children: [
    /* @__PURE__ */ Vt.jsxs("svg", { ref: Ot, viewBox: an, onWheel: Lt, style: { width: "100%", height: "100%", display: "block" }, children: [
      /* @__PURE__ */ Vt.jsx(
        "rect",
        {
          x: J.x - J.w,
          y: J.y - J.h,
          width: J.w * 3,
          height: J.h * 3,
          fill: "transparent",
          style: { cursor: de ? "grabbing" : "grab" },
          onMouseDown: (U) => {
            U.button === 0 && (pe(!0), Ze.current = { clientX: U.clientX, clientY: U.clientY, viewX: J.x, viewY: J.y });
          },
          onMouseMove: (U) => {
            if (!de) return;
            const P = Ot.current.getBoundingClientRect(), T = J.w / P.width, L = J.h / P.height, ie = (U.clientX - Ze.current.clientX) * T, K = (U.clientY - Ze.current.clientY) * L;
            Ee((De) => ({ ...De, x: Ze.current.viewX - ie, y: Ze.current.viewY - K }));
          },
          onMouseUp: () => pe(!1),
          onMouseLeave: () => pe(!1)
        }
      ),
      /* @__PURE__ */ Vt.jsx("g", { children: Be.map((U, P) => /* @__PURE__ */ Vt.jsx("line", { x1: U.a.x, y1: U.a.y, x2: U.b.x, y2: U.b.y, stroke: "#888", strokeDasharray: "4 4", strokeWidth: "1", opacity: "0.6" }, `clone-${P}`)) }),
      /* @__PURE__ */ Vt.jsx("g", { children: ot.map((U, P) => /* @__PURE__ */ Vt.jsx("line", { x1: U.a.x, y1: U.a.y, x2: U.b.x, y2: U.b.y, stroke: "#bdbdbd", strokeWidth: "1.2" }, `ps-${P}`)) }),
      /* @__PURE__ */ Vt.jsx("g", { children: ae.map((U) => {
        var De, _e, xe, Ue;
        const P = ut.get(U.key) || { x: 0, y: 0 }, T = Number(((De = U.attributes) == null ? void 0 : De.size) ?? 30), L = ((_e = U.attributes) == null ? void 0 : _e.color) || "#888", ie = ((xe = U.attributes) == null ? void 0 : xe.label) || U.key, K = ((Ue = U.attributes) == null ? void 0 : Ue.url) || null;
        return /* @__PURE__ */ Vt.jsxs("g", { transform: `translate(${P.x},${P.y})`, children: [
          /* @__PURE__ */ Vt.jsx(
            "circle",
            {
              r: T,
              fill: L,
              opacity: "1",
              style: { cursor: K ? "pointer" : "default" },
              onMouseEnter: () => Et({ type: "repeat", node: U }),
              onMouseLeave: () => Et(null),
              onClick: () => window.open(K, "_blank")
            }
          ),
          /* @__PURE__ */ Vt.jsx(
            "text",
            {
              x: 0,
              y: 0,
              textAnchor: "middle",
              dominantBaseline: "middle",
              fill: "#fff",
              fontSize: "12",
              fontWeight: "600",
              style: { cursor: K ? "pointer" : "default", userSelect: "none" },
              onMouseEnter: () => Et({ type: "repeat", node: U }),
              onMouseLeave: () => Et(null),
              onClick: () => window.open(K, "_blank"),
              children: ie
            }
          )
        ] }, U.key);
      }) }),
      /* @__PURE__ */ Vt.jsx("g", { children: rt.map((U) => {
        var K, De, _e;
        const P = be.get(U.key) || { x: 0, y: 0 }, T = Number(((K = U.attributes) == null ? void 0 : K.size) ?? 6), L = ((De = U.attributes) == null ? void 0 : De.color) || "#9DD6FB", ie = ((_e = U.attributes) == null ? void 0 : _e.url) || null;
        return /* @__PURE__ */ Vt.jsx(
          "circle",
          {
            cx: P.x,
            cy: P.y,
            r: T,
            fill: L,
            style: { cursor: ie ? "pointer" : "default" },
            onMouseEnter: () => Et({ type: "protein", node: U }),
            onMouseLeave: () => Et(null),
            onClick: () => ie && (window.location.href = ie)
          },
          U.key
        );
      }) })
    ] }),
    S && /* @__PURE__ */ Vt.jsx(
      "div",
      {
        role: "tooltip",
        style: {
          position: "fixed",
          left: St.x + 12,
          top: St.y + 12,
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
        children: S.type === "repeat" ? /* @__PURE__ */ Vt.jsxs("div", { children: [
          /* @__PURE__ */ Vt.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: ((It = S.node.attributes) == null ? void 0 : It.label) || S.node.key }),
          /* @__PURE__ */ Vt.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Satellite (repeat)" }),
          ((Gt = S.node.attributes) == null ? void 0 : Gt.aliases) && /* @__PURE__ */ Vt.jsxs("div", { children: [
            /* @__PURE__ */ Vt.jsx("b", { children: "Aliases:" }),
            " ",
            String(S.node.attributes.aliases)
          ] }),
          ((mt = S.node.attributes) == null ? void 0 : mt.dfam_id) != null && /* @__PURE__ */ Vt.jsxs("div", { children: [
            /* @__PURE__ */ Vt.jsx("b", { children: "Dfam:" }),
            " ",
            String(S.node.attributes.dfam_id)
          ] }),
          ((Le = S.node.attributes) == null ? void 0 : Le.url) && /* @__PURE__ */ Vt.jsx(
            "div",
            {
              style: { color: "#2563eb", textDecoration: "underline", marginTop: 6, pointerEvents: "auto", cursor: "pointer" },
              onClick: () => {
                window.location.href = S.node.attributes.url;
              },
              children: "Open page"
            }
          )
        ] }) : /* @__PURE__ */ Vt.jsxs("div", { children: [
          /* @__PURE__ */ Vt.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: (_t = S.node.attributes) == null ? void 0 : _t.label }),
          /* @__PURE__ */ Vt.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Transcription factor" }),
          ((yt = S.node.attributes) == null ? void 0 : yt.gene_family) && /* @__PURE__ */ Vt.jsxs("div", { children: [
            /* @__PURE__ */ Vt.jsx("b", { children: "Family:" }),
            " ",
            String(S.node.attributes.gene_family)
          ] }),
          ((Ct = S.node.attributes) == null ? void 0 : Ct.enrichment) != null && /* @__PURE__ */ Vt.jsxs("div", { children: [
            /* @__PURE__ */ Vt.jsx("b", { children: "Enrichment:" }),
            " ",
            String(S.node.attributes.enrichment)
          ] }),
          ((Ce = S.node.attributes) == null ? void 0 : Ce.aliases) && /* @__PURE__ */ Vt.jsxs("div", { children: [
            /* @__PURE__ */ Vt.jsx("b", { children: "Aliases:" }),
            " ",
            String(S.node.attributes.aliases)
          ] }),
          ((ee = S.node.attributes) == null ? void 0 : ee.url) && /* @__PURE__ */ Vt.jsx(
            "div",
            {
              style: { color: "#2563eb", textDecoration: "underline", marginTop: 6, pointerEvents: "auto", cursor: "pointer" },
              onClick: () => {
                window.location.href = S.node.attributes.url;
              },
              children: "Open page"
            }
          )
        ] })
      }
    )
  ] });
}
const uT = document.getElementById("network-container");
if (!uT) throw new Error('Missing <div id="network-container"> in index.html');
const lk = vE(uT);
lk.render(
  /* @__PURE__ */ Vt.jsx(q_.StrictMode, { children: /* @__PURE__ */ Vt.jsx(ik, {}) })
);
