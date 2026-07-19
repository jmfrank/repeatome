function wk(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var T0 = { exports: {} }, rv = {}, b0 = { exports: {} }, Bt = {};
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
function xk() {
  if (pw) return Bt;
  pw = 1;
  var S = Symbol.for("react.element"), R = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), y = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), N = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), q = Symbol.iterator;
  function ee(O) {
    return O === null || typeof O != "object" ? null : (O = q && O[q] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ye = Object.assign, G = {};
  function X(O, te, Xe) {
    this.props = O, this.context = te, this.refs = G, this.updater = Xe || P;
  }
  X.prototype.isReactComponent = {}, X.prototype.setState = function(O, te) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, te, "setState");
  }, X.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function fe() {
  }
  fe.prototype = X.prototype;
  function de(O, te, Xe) {
    this.props = O, this.context = te, this.refs = G, this.updater = Xe || P;
  }
  var Ce = de.prototype = new fe();
  Ce.constructor = de, ye(Ce, X.prototype), Ce.isPureReactComponent = !0;
  var he = Array.isArray, Re = Object.prototype.hasOwnProperty, Ge = { current: null }, He = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ct(O, te, Xe) {
    var We, Tt = {}, Rt = null, gt = null;
    if (te != null) for (We in te.ref !== void 0 && (gt = te.ref), te.key !== void 0 && (Rt = "" + te.key), te) Re.call(te, We) && !He.hasOwnProperty(We) && (Tt[We] = te[We]);
    var St = arguments.length - 2;
    if (St === 1) Tt.children = Xe;
    else if (1 < St) {
      for (var wt = Array(St), qt = 0; qt < St; qt++) wt[qt] = arguments[qt + 2];
      Tt.children = wt;
    }
    if (O && O.defaultProps) for (We in St = O.defaultProps, St) Tt[We] === void 0 && (Tt[We] = St[We]);
    return { $$typeof: S, type: O, key: Rt, ref: gt, props: Tt, _owner: Ge.current };
  }
  function mt(O, te) {
    return { $$typeof: S, type: O.type, key: te, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function rt(O) {
    return typeof O == "object" && O !== null && O.$$typeof === S;
  }
  function zt(O) {
    var te = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(Xe) {
      return te[Xe];
    });
  }
  var yt = /\/+/g;
  function Se(O, te) {
    return typeof O == "object" && O !== null && O.key != null ? zt("" + O.key) : te.toString(36);
  }
  function Mt(O, te, Xe, We, Tt) {
    var Rt = typeof O;
    (Rt === "undefined" || Rt === "boolean") && (O = null);
    var gt = !1;
    if (O === null) gt = !0;
    else switch (Rt) {
      case "string":
      case "number":
        gt = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case S:
          case R:
            gt = !0;
        }
    }
    if (gt) return gt = O, Tt = Tt(gt), O = We === "" ? "." + Se(gt, 0) : We, he(Tt) ? (Xe = "", O != null && (Xe = O.replace(yt, "$&/") + "/"), Mt(Tt, te, Xe, "", function(qt) {
      return qt;
    })) : Tt != null && (rt(Tt) && (Tt = mt(Tt, Xe + (!Tt.key || gt && gt.key === Tt.key ? "" : ("" + Tt.key).replace(yt, "$&/") + "/") + O)), te.push(Tt)), 1;
    if (gt = 0, We = We === "" ? "." : We + ":", he(O)) for (var St = 0; St < O.length; St++) {
      Rt = O[St];
      var wt = We + Se(Rt, St);
      gt += Mt(Rt, te, Xe, wt, Tt);
    }
    else if (wt = ee(O), typeof wt == "function") for (O = wt.call(O), St = 0; !(Rt = O.next()).done; ) Rt = Rt.value, wt = We + Se(Rt, St++), gt += Mt(Rt, te, Xe, wt, Tt);
    else if (Rt === "object") throw te = String(O), Error("Objects are not valid as a React child (found: " + (te === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : te) + "). If you meant to render a collection of children, use an array instead.");
    return gt;
  }
  function jt(O, te, Xe) {
    if (O == null) return O;
    var We = [], Tt = 0;
    return Mt(O, We, "", "", function(Rt) {
      return te.call(Xe, Rt, Tt++);
    }), We;
  }
  function Ft(O) {
    if (O._status === -1) {
      var te = O._result;
      te = te(), te.then(function(Xe) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = Xe);
      }, function(Xe) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = Xe);
      }), O._status === -1 && (O._status = 0, O._result = te);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var je = { current: null }, ue = { transition: null }, Pe = { ReactCurrentDispatcher: je, ReactCurrentBatchConfig: ue, ReactCurrentOwner: Ge };
  function we() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Bt.Children = { map: jt, forEach: function(O, te, Xe) {
    jt(O, function() {
      te.apply(this, arguments);
    }, Xe);
  }, count: function(O) {
    var te = 0;
    return jt(O, function() {
      te++;
    }), te;
  }, toArray: function(O) {
    return jt(O, function(te) {
      return te;
    }) || [];
  }, only: function(O) {
    if (!rt(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, Bt.Component = X, Bt.Fragment = E, Bt.Profiler = z, Bt.PureComponent = de, Bt.StrictMode = j, Bt.Suspense = Y, Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, Bt.act = we, Bt.cloneElement = function(O, te, Xe) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var We = ye({}, O.props), Tt = O.key, Rt = O.ref, gt = O._owner;
    if (te != null) {
      if (te.ref !== void 0 && (Rt = te.ref, gt = Ge.current), te.key !== void 0 && (Tt = "" + te.key), O.type && O.type.defaultProps) var St = O.type.defaultProps;
      for (wt in te) Re.call(te, wt) && !He.hasOwnProperty(wt) && (We[wt] = te[wt] === void 0 && St !== void 0 ? St[wt] : te[wt]);
    }
    var wt = arguments.length - 2;
    if (wt === 1) We.children = Xe;
    else if (1 < wt) {
      St = Array(wt);
      for (var qt = 0; qt < wt; qt++) St[qt] = arguments[qt + 2];
      We.children = St;
    }
    return { $$typeof: S, type: O.type, key: Tt, ref: Rt, props: We, _owner: gt };
  }, Bt.createContext = function(O) {
    return O = { $$typeof: y, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: B, _context: O }, O.Consumer = O;
  }, Bt.createElement = ct, Bt.createFactory = function(O) {
    var te = ct.bind(null, O);
    return te.type = O, te;
  }, Bt.createRef = function() {
    return { current: null };
  }, Bt.forwardRef = function(O) {
    return { $$typeof: Q, render: O };
  }, Bt.isValidElement = rt, Bt.lazy = function(O) {
    return { $$typeof: oe, _payload: { _status: -1, _result: O }, _init: Ft };
  }, Bt.memo = function(O, te) {
    return { $$typeof: N, type: O, compare: te === void 0 ? null : te };
  }, Bt.startTransition = function(O) {
    var te = ue.transition;
    ue.transition = {};
    try {
      O();
    } finally {
      ue.transition = te;
    }
  }, Bt.unstable_act = we, Bt.useCallback = function(O, te) {
    return je.current.useCallback(O, te);
  }, Bt.useContext = function(O) {
    return je.current.useContext(O);
  }, Bt.useDebugValue = function() {
  }, Bt.useDeferredValue = function(O) {
    return je.current.useDeferredValue(O);
  }, Bt.useEffect = function(O, te) {
    return je.current.useEffect(O, te);
  }, Bt.useId = function() {
    return je.current.useId();
  }, Bt.useImperativeHandle = function(O, te, Xe) {
    return je.current.useImperativeHandle(O, te, Xe);
  }, Bt.useInsertionEffect = function(O, te) {
    return je.current.useInsertionEffect(O, te);
  }, Bt.useLayoutEffect = function(O, te) {
    return je.current.useLayoutEffect(O, te);
  }, Bt.useMemo = function(O, te) {
    return je.current.useMemo(O, te);
  }, Bt.useReducer = function(O, te, Xe) {
    return je.current.useReducer(O, te, Xe);
  }, Bt.useRef = function(O) {
    return je.current.useRef(O);
  }, Bt.useState = function(O) {
    return je.current.useState(O);
  }, Bt.useSyncExternalStore = function(O, te, Xe) {
    return je.current.useSyncExternalStore(O, te, Xe);
  }, Bt.useTransition = function() {
    return je.current.useTransition();
  }, Bt.version = "18.3.1", Bt;
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
  return vw || (vw = 1, function(S, R) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var E = "18.3.1", j = Symbol.for("react.element"), z = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), N = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), ye = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), X = Symbol.iterator, fe = "@@iterator";
      function de(h) {
        if (h === null || typeof h != "object")
          return null;
        var x = X && h[X] || h[fe];
        return typeof x == "function" ? x : null;
      }
      var Ce = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, he = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, ct = null;
      function mt(h) {
        ct = h;
      }
      He.setExtraStackFrame = function(h) {
        ct = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        ct && (h += ct);
        var x = He.getCurrentStack;
        return x && (h += x() || ""), h;
      };
      var rt = !1, zt = !1, yt = !1, Se = !1, Mt = !1, jt = {
        ReactCurrentDispatcher: Ce,
        ReactCurrentBatchConfig: he,
        ReactCurrentOwner: Ge
      };
      jt.ReactDebugCurrentFrame = He, jt.ReactCurrentActQueue = Re;
      function Ft(h) {
        {
          for (var x = arguments.length, V = new Array(x > 1 ? x - 1 : 0), K = 1; K < x; K++)
            V[K - 1] = arguments[K];
          ue("warn", h, V);
        }
      }
      function je(h) {
        {
          for (var x = arguments.length, V = new Array(x > 1 ? x - 1 : 0), K = 1; K < x; K++)
            V[K - 1] = arguments[K];
          ue("error", h, V);
        }
      }
      function ue(h, x, V) {
        {
          var K = jt.ReactDebugCurrentFrame, ge = K.getStackAddendum();
          ge !== "" && (x += "%s", V = V.concat([ge]));
          var et = V.map(function(Te) {
            return String(Te);
          });
          et.unshift("Warning: " + x), Function.prototype.apply.call(console[h], console, et);
        }
      }
      var Pe = {};
      function we(h, x) {
        {
          var V = h.constructor, K = V && (V.displayName || V.name) || "ReactClass", ge = K + "." + x;
          if (Pe[ge])
            return;
          je("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", x, K), Pe[ge] = !0;
        }
      }
      var O = {
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
        enqueueForceUpdate: function(h, x, V) {
          we(h, "forceUpdate");
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
        enqueueReplaceState: function(h, x, V, K) {
          we(h, "replaceState");
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
        enqueueSetState: function(h, x, V, K) {
          we(h, "setState");
        }
      }, te = Object.assign, Xe = {};
      Object.freeze(Xe);
      function We(h, x, V) {
        this.props = h, this.context = x, this.refs = Xe, this.updater = V || O;
      }
      We.prototype.isReactComponent = {}, We.prototype.setState = function(h, x) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, x, "setState");
      }, We.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Tt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Rt = function(h, x) {
          Object.defineProperty(We.prototype, h, {
            get: function() {
              Ft("%s(...) is deprecated in plain JavaScript React classes. %s", x[0], x[1]);
            }
          });
        };
        for (var gt in Tt)
          Tt.hasOwnProperty(gt) && Rt(gt, Tt[gt]);
      }
      function St() {
      }
      St.prototype = We.prototype;
      function wt(h, x, V) {
        this.props = h, this.context = x, this.refs = Xe, this.updater = V || O;
      }
      var qt = wt.prototype = new St();
      qt.constructor = wt, te(qt, We.prototype), qt.isPureReactComponent = !0;
      function _n() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var ir = Array.isArray;
      function xn(h) {
        return ir(h);
      }
      function In(h) {
        {
          var x = typeof Symbol == "function" && Symbol.toStringTag, V = x && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return V;
        }
      }
      function Ln(h) {
        try {
          return zn(h), !1;
        } catch {
          return !0;
        }
      }
      function zn(h) {
        return "" + h;
      }
      function fr(h) {
        if (Ln(h))
          return je("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", In(h)), zn(h);
      }
      function va(h, x, V) {
        var K = h.displayName;
        if (K)
          return K;
        var ge = x.displayName || x.name || "";
        return ge !== "" ? V + "(" + ge + ")" : V;
      }
      function _r(h) {
        return h.displayName || "Context";
      }
      function Un(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && je("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case B:
            return "Fragment";
          case z:
            return "Portal";
          case Q:
            return "Profiler";
          case y:
            return "StrictMode";
          case q:
            return "Suspense";
          case ee:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case N:
              var x = h;
              return _r(x) + ".Consumer";
            case Y:
              var V = h;
              return _r(V._context) + ".Provider";
            case oe:
              return va(h, h.render, "ForwardRef");
            case P:
              var K = h.displayName || null;
              return K !== null ? K : Un(h.type) || "Memo";
            case ye: {
              var ge = h, et = ge._payload, Te = ge._init;
              try {
                return Un(Te(et));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var M = Object.prototype.hasOwnProperty, re = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, me, be, _e;
      _e = {};
      function Me(h) {
        if (M.call(h, "ref")) {
          var x = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (x && x.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Je(h) {
        if (M.call(h, "key")) {
          var x = Object.getOwnPropertyDescriptor(h, "key").get;
          if (x && x.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function bt(h, x) {
        var V = function() {
          me || (me = !0, je("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        V.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: V,
          configurable: !0
        });
      }
      function Ht(h, x) {
        var V = function() {
          be || (be = !0, je("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        V.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: V,
          configurable: !0
        });
      }
      function W(h) {
        if (typeof h.ref == "string" && Ge.current && h.__self && Ge.current.stateNode !== h.__self) {
          var x = Un(Ge.current.type);
          _e[x] || (je('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x, h.ref), _e[x] = !0);
        }
      }
      var Ee = function(h, x, V, K, ge, et, Te) {
        var at = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: j,
          // Built-in properties that belong on the element
          type: h,
          key: x,
          ref: V,
          props: Te,
          // Record the component responsible for creating this element.
          _owner: et
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
          value: K
        }), Object.defineProperty(at, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ge
        }), Object.freeze && (Object.freeze(at.props), Object.freeze(at)), at;
      };
      function Ie(h, x, V) {
        var K, ge = {}, et = null, Te = null, at = null, Lt = null;
        if (x != null) {
          Me(x) && (Te = x.ref, W(x)), Je(x) && (fr(x.key), et = "" + x.key), at = x.__self === void 0 ? null : x.__self, Lt = x.__source === void 0 ? null : x.__source;
          for (K in x)
            M.call(x, K) && !re.hasOwnProperty(K) && (ge[K] = x[K]);
        }
        var Kt = arguments.length - 2;
        if (Kt === 1)
          ge.children = V;
        else if (Kt > 1) {
          for (var Sn = Array(Kt), fn = 0; fn < Kt; fn++)
            Sn[fn] = arguments[fn + 2];
          Object.freeze && Object.freeze(Sn), ge.children = Sn;
        }
        if (h && h.defaultProps) {
          var kt = h.defaultProps;
          for (K in kt)
            ge[K] === void 0 && (ge[K] = kt[K]);
        }
        if (et || Te) {
          var dn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          et && bt(ge, dn), Te && Ht(ge, dn);
        }
        return Ee(h, et, Te, at, Lt, Ge.current, ge);
      }
      function ft(h, x) {
        var V = Ee(h.type, x, h.ref, h._self, h._source, h._owner, h.props);
        return V;
      }
      function Pt(h, x, V) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var K, ge = te({}, h.props), et = h.key, Te = h.ref, at = h._self, Lt = h._source, Kt = h._owner;
        if (x != null) {
          Me(x) && (Te = x.ref, Kt = Ge.current), Je(x) && (fr(x.key), et = "" + x.key);
          var Sn;
          h.type && h.type.defaultProps && (Sn = h.type.defaultProps);
          for (K in x)
            M.call(x, K) && !re.hasOwnProperty(K) && (x[K] === void 0 && Sn !== void 0 ? ge[K] = Sn[K] : ge[K] = x[K]);
        }
        var fn = arguments.length - 2;
        if (fn === 1)
          ge.children = V;
        else if (fn > 1) {
          for (var kt = Array(fn), dn = 0; dn < fn; dn++)
            kt[dn] = arguments[dn + 2];
          ge.children = kt;
        }
        return Ee(h.type, et, Te, at, Lt, Kt, ge);
      }
      function mn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === j;
      }
      var an = ".", Gt = ":";
      function Vt(h) {
        var x = /[=:]/g, V = {
          "=": "=0",
          ":": "=2"
        }, K = h.replace(x, function(ge) {
          return V[ge];
        });
        return "$" + K;
      }
      var ln = !1, sn = /\/+/g;
      function ha(h) {
        return h.replace(sn, "$&/");
      }
      function kr(h, x) {
        return typeof h == "object" && h !== null && h.key != null ? (fr(h.key), Vt("" + h.key)) : x.toString(36);
      }
      function Ma(h, x, V, K, ge) {
        var et = typeof h;
        (et === "undefined" || et === "boolean") && (h = null);
        var Te = !1;
        if (h === null)
          Te = !0;
        else
          switch (et) {
            case "string":
            case "number":
              Te = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case j:
                case z:
                  Te = !0;
              }
          }
        if (Te) {
          var at = h, Lt = ge(at), Kt = K === "" ? an + kr(at, 0) : K;
          if (xn(Lt)) {
            var Sn = "";
            Kt != null && (Sn = ha(Kt) + "/"), Ma(Lt, x, Sn, "", function(td) {
              return td;
            });
          } else Lt != null && (mn(Lt) && (Lt.key && (!at || at.key !== Lt.key) && fr(Lt.key), Lt = ft(
            Lt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            V + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Lt.key && (!at || at.key !== Lt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ha("" + Lt.key) + "/"
            ) : "") + Kt
          )), x.push(Lt));
          return 1;
        }
        var fn, kt, dn = 0, kn = K === "" ? an : K + Gt;
        if (xn(h))
          for (var Tl = 0; Tl < h.length; Tl++)
            fn = h[Tl], kt = kn + kr(fn, Tl), dn += Ma(fn, x, V, kt, ge);
        else {
          var Jo = de(h);
          if (typeof Jo == "function") {
            var Yi = h;
            Jo === Yi.entries && (ln || Ft("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ln = !0);
            for (var es = Jo.call(Yi), fu, ed = 0; !(fu = es.next()).done; )
              fn = fu.value, kt = kn + kr(fn, ed++), dn += Ma(fn, x, V, kt, ge);
          } else if (et === "object") {
            var pc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (pc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : pc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return dn;
      }
      function Bi(h, x, V) {
        if (h == null)
          return h;
        var K = [], ge = 0;
        return Ma(h, K, "", "", function(et) {
          return x.call(V, et, ge++);
        }), K;
      }
      function nu(h) {
        var x = 0;
        return Bi(h, function() {
          x++;
        }), x;
      }
      function ru(h, x, V) {
        Bi(h, function() {
          x.apply(this, arguments);
        }, V);
      }
      function ml(h) {
        return Bi(h, function(x) {
          return x;
        }) || [];
      }
      function yl(h) {
        if (!mn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function au(h) {
        var x = {
          $$typeof: N,
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
        x.Provider = {
          $$typeof: Y,
          _context: x
        };
        var V = !1, K = !1, ge = !1;
        {
          var et = {
            $$typeof: N,
            _context: x
          };
          Object.defineProperties(et, {
            Provider: {
              get: function() {
                return K || (K = !0, je("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), x.Provider;
              },
              set: function(Te) {
                x.Provider = Te;
              }
            },
            _currentValue: {
              get: function() {
                return x._currentValue;
              },
              set: function(Te) {
                x._currentValue = Te;
              }
            },
            _currentValue2: {
              get: function() {
                return x._currentValue2;
              },
              set: function(Te) {
                x._currentValue2 = Te;
              }
            },
            _threadCount: {
              get: function() {
                return x._threadCount;
              },
              set: function(Te) {
                x._threadCount = Te;
              }
            },
            Consumer: {
              get: function() {
                return V || (V = !0, je("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), x.Consumer;
              }
            },
            displayName: {
              get: function() {
                return x.displayName;
              },
              set: function(Te) {
                ge || (Ft("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Te), ge = !0);
              }
            }
          }), x.Consumer = et;
        }
        return x._currentRenderer = null, x._currentRenderer2 = null, x;
      }
      var Lr = -1, zr = 0, dr = 1, hi = 2;
      function Za(h) {
        if (h._status === Lr) {
          var x = h._result, V = x();
          if (V.then(function(et) {
            if (h._status === zr || h._status === Lr) {
              var Te = h;
              Te._status = dr, Te._result = et;
            }
          }, function(et) {
            if (h._status === zr || h._status === Lr) {
              var Te = h;
              Te._status = hi, Te._result = et;
            }
          }), h._status === Lr) {
            var K = h;
            K._status = zr, K._result = V;
          }
        }
        if (h._status === dr) {
          var ge = h._result;
          return ge === void 0 && je(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ge), "default" in ge || je(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ge), ge.default;
        } else
          throw h._result;
      }
      function mi(h) {
        var x = {
          // We use these fields to store the result.
          _status: Lr,
          _result: h
        }, V = {
          $$typeof: ye,
          _payload: x,
          _init: Za
        };
        {
          var K, ge;
          Object.defineProperties(V, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(et) {
                je("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = et, Object.defineProperty(V, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ge;
              },
              set: function(et) {
                je("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ge = et, Object.defineProperty(V, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return V;
      }
      function yi(h) {
        h != null && h.$$typeof === P ? je("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? je("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && je("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && je("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var x = {
          $$typeof: oe,
          render: h
        };
        {
          var V;
          Object.defineProperty(x, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return V;
            },
            set: function(K) {
              V = K, !h.name && !h.displayName && (h.displayName = K);
            }
          });
        }
        return x;
      }
      var T;
      T = Symbol.for("react.module.reference");
      function ae(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === B || h === Q || Mt || h === y || h === q || h === ee || Se || h === G || rt || zt || yt || typeof h == "object" && h !== null && (h.$$typeof === ye || h.$$typeof === P || h.$$typeof === Y || h.$$typeof === N || h.$$typeof === oe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === T || h.getModuleId !== void 0));
      }
      function ke(h, x) {
        ae(h) || je("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var V = {
          $$typeof: P,
          type: h,
          compare: x === void 0 ? null : x
        };
        {
          var K;
          Object.defineProperty(V, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return K;
            },
            set: function(ge) {
              K = ge, !h.name && !h.displayName && (h.displayName = ge);
            }
          });
        }
        return V;
      }
      function Fe() {
        var h = Ce.current;
        return h === null && je(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Et(h) {
        var x = Fe();
        if (h._context !== void 0) {
          var V = h._context;
          V.Consumer === h ? je("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : V.Provider === h && je("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return x.useContext(h);
      }
      function pt(h) {
        var x = Fe();
        return x.useState(h);
      }
      function Nt(h, x, V) {
        var K = Fe();
        return K.useReducer(h, x, V);
      }
      function Dt(h) {
        var x = Fe();
        return x.useRef(h);
      }
      function jn(h, x) {
        var V = Fe();
        return V.useEffect(h, x);
      }
      function gn(h, x) {
        var V = Fe();
        return V.useInsertionEffect(h, x);
      }
      function Cn(h, x) {
        var V = Fe();
        return V.useLayoutEffect(h, x);
      }
      function pr(h, x) {
        var V = Fe();
        return V.useCallback(h, x);
      }
      function Ja(h, x) {
        var V = Fe();
        return V.useMemo(h, x);
      }
      function ei(h, x, V) {
        var K = Fe();
        return K.useImperativeHandle(h, x, V);
      }
      function Ct(h, x) {
        {
          var V = Fe();
          return V.useDebugValue(h, x);
        }
      }
      function _t() {
        var h = Fe();
        return h.useTransition();
      }
      function ti(h) {
        var x = Fe();
        return x.useDeferredValue(h);
      }
      function iu() {
        var h = Fe();
        return h.useId();
      }
      function lu(h, x, V) {
        var K = Fe();
        return K.useSyncExternalStore(h, x, V);
      }
      var gl = 0, Xu, Sl, qr, Go, Ar, fc, dc;
      function qu() {
      }
      qu.__reactDisabledLog = !0;
      function El() {
        {
          if (gl === 0) {
            Xu = console.log, Sl = console.info, qr = console.warn, Go = console.error, Ar = console.group, fc = console.groupCollapsed, dc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: qu,
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
          gl++;
        }
      }
      function ma() {
        {
          if (gl--, gl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: te({}, h, {
                value: Xu
              }),
              info: te({}, h, {
                value: Sl
              }),
              warn: te({}, h, {
                value: qr
              }),
              error: te({}, h, {
                value: Go
              }),
              group: te({}, h, {
                value: Ar
              }),
              groupCollapsed: te({}, h, {
                value: fc
              }),
              groupEnd: te({}, h, {
                value: dc
              })
            });
          }
          gl < 0 && je("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ni = jt.ReactCurrentDispatcher, ri;
      function Zu(h, x, V) {
        {
          if (ri === void 0)
            try {
              throw Error();
            } catch (ge) {
              var K = ge.stack.trim().match(/\n( *(at )?)/);
              ri = K && K[1] || "";
            }
          return `
` + ri + h;
        }
      }
      var uu = !1, Cl;
      {
        var Ju = typeof WeakMap == "function" ? WeakMap : Map;
        Cl = new Ju();
      }
      function eo(h, x) {
        if (!h || uu)
          return "";
        {
          var V = Cl.get(h);
          if (V !== void 0)
            return V;
        }
        var K;
        uu = !0;
        var ge = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var et;
        et = ni.current, ni.current = null, El();
        try {
          if (x) {
            var Te = function() {
              throw Error();
            };
            if (Object.defineProperty(Te.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Te, []);
              } catch (kn) {
                K = kn;
              }
              Reflect.construct(h, [], Te);
            } else {
              try {
                Te.call();
              } catch (kn) {
                K = kn;
              }
              h.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (kn) {
              K = kn;
            }
            h();
          }
        } catch (kn) {
          if (kn && K && typeof kn.stack == "string") {
            for (var at = kn.stack.split(`
`), Lt = K.stack.split(`
`), Kt = at.length - 1, Sn = Lt.length - 1; Kt >= 1 && Sn >= 0 && at[Kt] !== Lt[Sn]; )
              Sn--;
            for (; Kt >= 1 && Sn >= 0; Kt--, Sn--)
              if (at[Kt] !== Lt[Sn]) {
                if (Kt !== 1 || Sn !== 1)
                  do
                    if (Kt--, Sn--, Sn < 0 || at[Kt] !== Lt[Sn]) {
                      var fn = `
` + at[Kt].replace(" at new ", " at ");
                      return h.displayName && fn.includes("<anonymous>") && (fn = fn.replace("<anonymous>", h.displayName)), typeof h == "function" && Cl.set(h, fn), fn;
                    }
                  while (Kt >= 1 && Sn >= 0);
                break;
              }
          }
        } finally {
          uu = !1, ni.current = et, ma(), Error.prepareStackTrace = ge;
        }
        var kt = h ? h.displayName || h.name : "", dn = kt ? Zu(kt) : "";
        return typeof h == "function" && Cl.set(h, dn), dn;
      }
      function $i(h, x, V) {
        return eo(h, !1);
      }
      function Zf(h) {
        var x = h.prototype;
        return !!(x && x.isReactComponent);
      }
      function Ii(h, x, V) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return eo(h, Zf(h));
        if (typeof h == "string")
          return Zu(h);
        switch (h) {
          case q:
            return Zu("Suspense");
          case ee:
            return Zu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case oe:
              return $i(h.render);
            case P:
              return Ii(h.type, x, V);
            case ye: {
              var K = h, ge = K._payload, et = K._init;
              try {
                return Ii(et(ge), x, V);
              } catch {
              }
            }
          }
        return "";
      }
      var Zt = {}, to = jt.ReactDebugCurrentFrame;
      function Qt(h) {
        if (h) {
          var x = h._owner, V = Ii(h.type, h._source, x ? x.type : null);
          to.setExtraStackFrame(V);
        } else
          to.setExtraStackFrame(null);
      }
      function Xo(h, x, V, K, ge) {
        {
          var et = Function.call.bind(M);
          for (var Te in h)
            if (et(h, Te)) {
              var at = void 0;
              try {
                if (typeof h[Te] != "function") {
                  var Lt = Error((K || "React class") + ": " + V + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Lt.name = "Invariant Violation", Lt;
                }
                at = h[Te](x, Te, K, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Kt) {
                at = Kt;
              }
              at && !(at instanceof Error) && (Qt(ge), je("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", V, Te, typeof at), Qt(null)), at instanceof Error && !(at.message in Zt) && (Zt[at.message] = !0, Qt(ge), je("Failed %s type: %s", V, at.message), Qt(null));
            }
        }
      }
      function gi(h) {
        if (h) {
          var x = h._owner, V = Ii(h.type, h._source, x ? x.type : null);
          mt(V);
        } else
          mt(null);
      }
      var dt;
      dt = !1;
      function no() {
        if (Ge.current) {
          var h = Un(Ge.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function vr(h) {
        if (h !== void 0) {
          var x = h.fileName.replace(/^.*[\\\/]/, ""), V = h.lineNumber;
          return `

Check your code at ` + x + ":" + V + ".";
        }
        return "";
      }
      function Si(h) {
        return h != null ? vr(h.__source) : "";
      }
      var Ur = {};
      function Ei(h) {
        var x = no();
        if (!x) {
          var V = typeof h == "string" ? h : h.displayName || h.name;
          V && (x = `

Check the top-level render call using <` + V + ">.");
        }
        return x;
      }
      function Rn(h, x) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var V = Ei(x);
          if (!Ur[V]) {
            Ur[V] = !0;
            var K = "";
            h && h._owner && h._owner !== Ge.current && (K = " It was passed a child from " + Un(h._owner.type) + "."), gi(h), je('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, K), gi(null);
          }
        }
      }
      function cn(h, x) {
        if (typeof h == "object") {
          if (xn(h))
            for (var V = 0; V < h.length; V++) {
              var K = h[V];
              mn(K) && Rn(K, x);
            }
          else if (mn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ge = de(h);
            if (typeof ge == "function" && ge !== h.entries)
              for (var et = ge.call(h), Te; !(Te = et.next()).done; )
                mn(Te.value) && Rn(Te.value, x);
          }
        }
      }
      function Rl(h) {
        {
          var x = h.type;
          if (x == null || typeof x == "string")
            return;
          var V;
          if (typeof x == "function")
            V = x.propTypes;
          else if (typeof x == "object" && (x.$$typeof === oe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          x.$$typeof === P))
            V = x.propTypes;
          else
            return;
          if (V) {
            var K = Un(x);
            Xo(V, h.props, "prop", K, h);
          } else if (x.PropTypes !== void 0 && !dt) {
            dt = !0;
            var ge = Un(x);
            je("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ge || "Unknown");
          }
          typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && je("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function er(h) {
        {
          for (var x = Object.keys(h.props), V = 0; V < x.length; V++) {
            var K = x[V];
            if (K !== "children" && K !== "key") {
              gi(h), je("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), gi(null);
              break;
            }
          }
          h.ref !== null && (gi(h), je("Invalid attribute `ref` supplied to `React.Fragment`."), gi(null));
        }
      }
      function jr(h, x, V) {
        var K = ae(h);
        if (!K) {
          var ge = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ge += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = Si(x);
          et ? ge += et : ge += no();
          var Te;
          h === null ? Te = "null" : xn(h) ? Te = "array" : h !== void 0 && h.$$typeof === j ? (Te = "<" + (Un(h.type) || "Unknown") + " />", ge = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof h, je("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, ge);
        }
        var at = Ie.apply(this, arguments);
        if (at == null)
          return at;
        if (K)
          for (var Lt = 2; Lt < arguments.length; Lt++)
            cn(arguments[Lt], h);
        return h === B ? er(at) : Rl(at), at;
      }
      var Na = !1;
      function ou(h) {
        var x = jr.bind(null, h);
        return x.type = h, Na || (Na = !0, Ft("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(x, "type", {
          enumerable: !1,
          get: function() {
            return Ft("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), x;
      }
      function qo(h, x, V) {
        for (var K = Pt.apply(this, arguments), ge = 2; ge < arguments.length; ge++)
          cn(arguments[ge], K.type);
        return Rl(K), K;
      }
      function Zo(h, x) {
        var V = he.transition;
        he.transition = {};
        var K = he.transition;
        he.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (he.transition = V, V === null && K._updatedFibers) {
            var ge = K._updatedFibers.size;
            ge > 10 && Ft("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), K._updatedFibers.clear();
          }
        }
      }
      var wl = !1, su = null;
      function Jf(h) {
        if (su === null)
          try {
            var x = ("require" + Math.random()).slice(0, 7), V = S && S[x];
            su = V.call(S, "timers").setImmediate;
          } catch {
            su = function(ge) {
              wl === !1 && (wl = !0, typeof MessageChannel > "u" && je("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var et = new MessageChannel();
              et.port1.onmessage = ge, et.port2.postMessage(void 0);
            };
          }
        return su(h);
      }
      var La = 0, ai = !1;
      function Ci(h) {
        {
          var x = La;
          La++, Re.current === null && (Re.current = []);
          var V = Re.isBatchingLegacy, K;
          try {
            if (Re.isBatchingLegacy = !0, K = h(), !V && Re.didScheduleLegacyUpdate) {
              var ge = Re.current;
              ge !== null && (Re.didScheduleLegacyUpdate = !1, xl(ge));
            }
          } catch (kt) {
            throw za(x), kt;
          } finally {
            Re.isBatchingLegacy = V;
          }
          if (K !== null && typeof K == "object" && typeof K.then == "function") {
            var et = K, Te = !1, at = {
              then: function(kt, dn) {
                Te = !0, et.then(function(kn) {
                  za(x), La === 0 ? ro(kn, kt, dn) : kt(kn);
                }, function(kn) {
                  za(x), dn(kn);
                });
              }
            };
            return !ai && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (ai = !0, je("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), at;
          } else {
            var Lt = K;
            if (za(x), La === 0) {
              var Kt = Re.current;
              Kt !== null && (xl(Kt), Re.current = null);
              var Sn = {
                then: function(kt, dn) {
                  Re.current === null ? (Re.current = [], ro(Lt, kt, dn)) : kt(Lt);
                }
              };
              return Sn;
            } else {
              var fn = {
                then: function(kt, dn) {
                  kt(Lt);
                }
              };
              return fn;
            }
          }
        }
      }
      function za(h) {
        h !== La - 1 && je("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = h;
      }
      function ro(h, x, V) {
        {
          var K = Re.current;
          if (K !== null)
            try {
              xl(K), Jf(function() {
                K.length === 0 ? (Re.current = null, x(h)) : ro(h, x, V);
              });
            } catch (ge) {
              V(ge);
            }
          else
            x(h);
        }
      }
      var ao = !1;
      function xl(h) {
        if (!ao) {
          ao = !0;
          var x = 0;
          try {
            for (; x < h.length; x++) {
              var V = h[x];
              do
                V = V(!0);
              while (V !== null);
            }
            h.length = 0;
          } catch (K) {
            throw h = h.slice(x + 1), K;
          } finally {
            ao = !1;
          }
        }
      }
      var cu = jr, io = qo, lo = ou, ii = {
        map: Bi,
        forEach: ru,
        count: nu,
        toArray: ml,
        only: yl
      };
      R.Children = ii, R.Component = We, R.Fragment = B, R.Profiler = Q, R.PureComponent = wt, R.StrictMode = y, R.Suspense = q, R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jt, R.act = Ci, R.cloneElement = io, R.createContext = au, R.createElement = cu, R.createFactory = lo, R.createRef = _n, R.forwardRef = yi, R.isValidElement = mn, R.lazy = mi, R.memo = ke, R.startTransition = Zo, R.unstable_act = Ci, R.useCallback = pr, R.useContext = Et, R.useDebugValue = Ct, R.useDeferredValue = ti, R.useEffect = jn, R.useId = iu, R.useImperativeHandle = ei, R.useInsertionEffect = gn, R.useLayoutEffect = Cn, R.useMemo = Ja, R.useReducer = Nt, R.useRef = Dt, R.useState = pt, R.useSyncExternalStore = lu, R.useTransition = _t, R.version = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(lv, lv.exports)), lv.exports;
}
process.env.NODE_ENV === "production" ? b0.exports = xk() : b0.exports = Tk();
var Ut = b0.exports;
const bk = /* @__PURE__ */ wk(Ut);
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
  var S = Ut, R = Symbol.for("react.element"), E = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, z = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(Q, Y, N) {
    var oe, q = {}, ee = null, P = null;
    N !== void 0 && (ee = "" + N), Y.key !== void 0 && (ee = "" + Y.key), Y.ref !== void 0 && (P = Y.ref);
    for (oe in Y) j.call(Y, oe) && !B.hasOwnProperty(oe) && (q[oe] = Y[oe]);
    if (Q && Q.defaultProps) for (oe in Y = Q.defaultProps, Y) q[oe] === void 0 && (q[oe] = Y[oe]);
    return { $$typeof: R, type: Q, key: ee, ref: P, props: q, _owner: z.current };
  }
  return rv.Fragment = E, rv.jsx = y, rv.jsxs = y, rv;
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
    var S = Ut, R = Symbol.for("react.element"), E = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), Q = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), ye = Symbol.iterator, G = "@@iterator";
    function X(T) {
      if (T === null || typeof T != "object")
        return null;
      var ae = ye && T[ye] || T[G];
      return typeof ae == "function" ? ae : null;
    }
    var fe = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function de(T) {
      {
        for (var ae = arguments.length, ke = new Array(ae > 1 ? ae - 1 : 0), Fe = 1; Fe < ae; Fe++)
          ke[Fe - 1] = arguments[Fe];
        Ce("error", T, ke);
      }
    }
    function Ce(T, ae, ke) {
      {
        var Fe = fe.ReactDebugCurrentFrame, Et = Fe.getStackAddendum();
        Et !== "" && (ae += "%s", ke = ke.concat([Et]));
        var pt = ke.map(function(Nt) {
          return String(Nt);
        });
        pt.unshift("Warning: " + ae), Function.prototype.apply.call(console[T], console, pt);
      }
    }
    var he = !1, Re = !1, Ge = !1, He = !1, ct = !1, mt;
    mt = Symbol.for("react.module.reference");
    function rt(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === j || T === B || ct || T === z || T === N || T === oe || He || T === P || he || Re || Ge || typeof T == "object" && T !== null && (T.$$typeof === ee || T.$$typeof === q || T.$$typeof === y || T.$$typeof === Q || T.$$typeof === Y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === mt || T.getModuleId !== void 0));
    }
    function zt(T, ae, ke) {
      var Fe = T.displayName;
      if (Fe)
        return Fe;
      var Et = ae.displayName || ae.name || "";
      return Et !== "" ? ke + "(" + Et + ")" : ke;
    }
    function yt(T) {
      return T.displayName || "Context";
    }
    function Se(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && de("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case j:
          return "Fragment";
        case E:
          return "Portal";
        case B:
          return "Profiler";
        case z:
          return "StrictMode";
        case N:
          return "Suspense";
        case oe:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case Q:
            var ae = T;
            return yt(ae) + ".Consumer";
          case y:
            var ke = T;
            return yt(ke._context) + ".Provider";
          case Y:
            return zt(T, T.render, "ForwardRef");
          case q:
            var Fe = T.displayName || null;
            return Fe !== null ? Fe : Se(T.type) || "Memo";
          case ee: {
            var Et = T, pt = Et._payload, Nt = Et._init;
            try {
              return Se(Nt(pt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Mt = Object.assign, jt = 0, Ft, je, ue, Pe, we, O, te;
    function Xe() {
    }
    Xe.__reactDisabledLog = !0;
    function We() {
      {
        if (jt === 0) {
          Ft = console.log, je = console.info, ue = console.warn, Pe = console.error, we = console.group, O = console.groupCollapsed, te = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: Xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        jt++;
      }
    }
    function Tt() {
      {
        if (jt--, jt === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Mt({}, T, {
              value: Ft
            }),
            info: Mt({}, T, {
              value: je
            }),
            warn: Mt({}, T, {
              value: ue
            }),
            error: Mt({}, T, {
              value: Pe
            }),
            group: Mt({}, T, {
              value: we
            }),
            groupCollapsed: Mt({}, T, {
              value: O
            }),
            groupEnd: Mt({}, T, {
              value: te
            })
          });
        }
        jt < 0 && de("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Rt = fe.ReactCurrentDispatcher, gt;
    function St(T, ae, ke) {
      {
        if (gt === void 0)
          try {
            throw Error();
          } catch (Et) {
            var Fe = Et.stack.trim().match(/\n( *(at )?)/);
            gt = Fe && Fe[1] || "";
          }
        return `
` + gt + T;
      }
    }
    var wt = !1, qt;
    {
      var _n = typeof WeakMap == "function" ? WeakMap : Map;
      qt = new _n();
    }
    function ir(T, ae) {
      if (!T || wt)
        return "";
      {
        var ke = qt.get(T);
        if (ke !== void 0)
          return ke;
      }
      var Fe;
      wt = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pt;
      pt = Rt.current, Rt.current = null, We();
      try {
        if (ae) {
          var Nt = function() {
            throw Error();
          };
          if (Object.defineProperty(Nt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Nt, []);
            } catch (Ct) {
              Fe = Ct;
            }
            Reflect.construct(T, [], Nt);
          } else {
            try {
              Nt.call();
            } catch (Ct) {
              Fe = Ct;
            }
            T.call(Nt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ct) {
            Fe = Ct;
          }
          T();
        }
      } catch (Ct) {
        if (Ct && Fe && typeof Ct.stack == "string") {
          for (var Dt = Ct.stack.split(`
`), jn = Fe.stack.split(`
`), gn = Dt.length - 1, Cn = jn.length - 1; gn >= 1 && Cn >= 0 && Dt[gn] !== jn[Cn]; )
            Cn--;
          for (; gn >= 1 && Cn >= 0; gn--, Cn--)
            if (Dt[gn] !== jn[Cn]) {
              if (gn !== 1 || Cn !== 1)
                do
                  if (gn--, Cn--, Cn < 0 || Dt[gn] !== jn[Cn]) {
                    var pr = `
` + Dt[gn].replace(" at new ", " at ");
                    return T.displayName && pr.includes("<anonymous>") && (pr = pr.replace("<anonymous>", T.displayName)), typeof T == "function" && qt.set(T, pr), pr;
                  }
                while (gn >= 1 && Cn >= 0);
              break;
            }
        }
      } finally {
        wt = !1, Rt.current = pt, Tt(), Error.prepareStackTrace = Et;
      }
      var Ja = T ? T.displayName || T.name : "", ei = Ja ? St(Ja) : "";
      return typeof T == "function" && qt.set(T, ei), ei;
    }
    function xn(T, ae, ke) {
      return ir(T, !1);
    }
    function In(T) {
      var ae = T.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function Ln(T, ae, ke) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return ir(T, In(T));
      if (typeof T == "string")
        return St(T);
      switch (T) {
        case N:
          return St("Suspense");
        case oe:
          return St("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case Y:
            return xn(T.render);
          case q:
            return Ln(T.type, ae, ke);
          case ee: {
            var Fe = T, Et = Fe._payload, pt = Fe._init;
            try {
              return Ln(pt(Et), ae, ke);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, fr = {}, va = fe.ReactDebugCurrentFrame;
    function _r(T) {
      if (T) {
        var ae = T._owner, ke = Ln(T.type, T._source, ae ? ae.type : null);
        va.setExtraStackFrame(ke);
      } else
        va.setExtraStackFrame(null);
    }
    function Un(T, ae, ke, Fe, Et) {
      {
        var pt = Function.call.bind(zn);
        for (var Nt in T)
          if (pt(T, Nt)) {
            var Dt = void 0;
            try {
              if (typeof T[Nt] != "function") {
                var jn = Error((Fe || "React class") + ": " + ke + " type `" + Nt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[Nt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw jn.name = "Invariant Violation", jn;
              }
              Dt = T[Nt](ae, Nt, Fe, ke, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (gn) {
              Dt = gn;
            }
            Dt && !(Dt instanceof Error) && (_r(Et), de("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Fe || "React class", ke, Nt, typeof Dt), _r(null)), Dt instanceof Error && !(Dt.message in fr) && (fr[Dt.message] = !0, _r(Et), de("Failed %s type: %s", ke, Dt.message), _r(null));
          }
      }
    }
    var M = Array.isArray;
    function re(T) {
      return M(T);
    }
    function me(T) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, ke = ae && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return ke;
      }
    }
    function be(T) {
      try {
        return _e(T), !1;
      } catch {
        return !0;
      }
    }
    function _e(T) {
      return "" + T;
    }
    function Me(T) {
      if (be(T))
        return de("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", me(T)), _e(T);
    }
    var Je = fe.ReactCurrentOwner, bt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ht, W;
    function Ee(T) {
      if (zn.call(T, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function Ie(T) {
      if (zn.call(T, "key")) {
        var ae = Object.getOwnPropertyDescriptor(T, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function ft(T, ae) {
      typeof T.ref == "string" && Je.current;
    }
    function Pt(T, ae) {
      {
        var ke = function() {
          Ht || (Ht = !0, de("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        ke.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: ke,
          configurable: !0
        });
      }
    }
    function mn(T, ae) {
      {
        var ke = function() {
          W || (W = !0, de("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        ke.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: ke,
          configurable: !0
        });
      }
    }
    var an = function(T, ae, ke, Fe, Et, pt, Nt) {
      var Dt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: T,
        key: ae,
        ref: ke,
        props: Nt,
        // Record the component responsible for creating this element.
        _owner: pt
      };
      return Dt._store = {}, Object.defineProperty(Dt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Dt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.defineProperty(Dt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Et
      }), Object.freeze && (Object.freeze(Dt.props), Object.freeze(Dt)), Dt;
    };
    function Gt(T, ae, ke, Fe, Et) {
      {
        var pt, Nt = {}, Dt = null, jn = null;
        ke !== void 0 && (Me(ke), Dt = "" + ke), Ie(ae) && (Me(ae.key), Dt = "" + ae.key), Ee(ae) && (jn = ae.ref, ft(ae, Et));
        for (pt in ae)
          zn.call(ae, pt) && !bt.hasOwnProperty(pt) && (Nt[pt] = ae[pt]);
        if (T && T.defaultProps) {
          var gn = T.defaultProps;
          for (pt in gn)
            Nt[pt] === void 0 && (Nt[pt] = gn[pt]);
        }
        if (Dt || jn) {
          var Cn = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          Dt && Pt(Nt, Cn), jn && mn(Nt, Cn);
        }
        return an(T, Dt, jn, Et, Fe, Je.current, Nt);
      }
    }
    var Vt = fe.ReactCurrentOwner, ln = fe.ReactDebugCurrentFrame;
    function sn(T) {
      if (T) {
        var ae = T._owner, ke = Ln(T.type, T._source, ae ? ae.type : null);
        ln.setExtraStackFrame(ke);
      } else
        ln.setExtraStackFrame(null);
    }
    var ha;
    ha = !1;
    function kr(T) {
      return typeof T == "object" && T !== null && T.$$typeof === R;
    }
    function Ma() {
      {
        if (Vt.current) {
          var T = Se(Vt.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function Bi(T) {
      return "";
    }
    var nu = {};
    function ru(T) {
      {
        var ae = Ma();
        if (!ae) {
          var ke = typeof T == "string" ? T : T.displayName || T.name;
          ke && (ae = `

Check the top-level render call using <` + ke + ">.");
        }
        return ae;
      }
    }
    function ml(T, ae) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var ke = ru(ae);
        if (nu[ke])
          return;
        nu[ke] = !0;
        var Fe = "";
        T && T._owner && T._owner !== Vt.current && (Fe = " It was passed a child from " + Se(T._owner.type) + "."), sn(T), de('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ke, Fe), sn(null);
      }
    }
    function yl(T, ae) {
      {
        if (typeof T != "object")
          return;
        if (re(T))
          for (var ke = 0; ke < T.length; ke++) {
            var Fe = T[ke];
            kr(Fe) && ml(Fe, ae);
          }
        else if (kr(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var Et = X(T);
          if (typeof Et == "function" && Et !== T.entries)
            for (var pt = Et.call(T), Nt; !(Nt = pt.next()).done; )
              kr(Nt.value) && ml(Nt.value, ae);
        }
      }
    }
    function au(T) {
      {
        var ae = T.type;
        if (ae == null || typeof ae == "string")
          return;
        var ke;
        if (typeof ae == "function")
          ke = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === Y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === q))
          ke = ae.propTypes;
        else
          return;
        if (ke) {
          var Fe = Se(ae);
          Un(ke, T.props, "prop", Fe, T);
        } else if (ae.PropTypes !== void 0 && !ha) {
          ha = !0;
          var Et = Se(ae);
          de("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && de("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(T) {
      {
        for (var ae = Object.keys(T.props), ke = 0; ke < ae.length; ke++) {
          var Fe = ae[ke];
          if (Fe !== "children" && Fe !== "key") {
            sn(T), de("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Fe), sn(null);
            break;
          }
        }
        T.ref !== null && (sn(T), de("Invalid attribute `ref` supplied to `React.Fragment`."), sn(null));
      }
    }
    var zr = {};
    function dr(T, ae, ke, Fe, Et, pt) {
      {
        var Nt = rt(T);
        if (!Nt) {
          var Dt = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (Dt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var jn = Bi();
          jn ? Dt += jn : Dt += Ma();
          var gn;
          T === null ? gn = "null" : re(T) ? gn = "array" : T !== void 0 && T.$$typeof === R ? (gn = "<" + (Se(T.type) || "Unknown") + " />", Dt = " Did you accidentally export a JSX literal instead of a component?") : gn = typeof T, de("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gn, Dt);
        }
        var Cn = Gt(T, ae, ke, Et, pt);
        if (Cn == null)
          return Cn;
        if (Nt) {
          var pr = ae.children;
          if (pr !== void 0)
            if (Fe)
              if (re(pr)) {
                for (var Ja = 0; Ja < pr.length; Ja++)
                  yl(pr[Ja], T);
                Object.freeze && Object.freeze(pr);
              } else
                de("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yl(pr, T);
        }
        if (zn.call(ae, "key")) {
          var ei = Se(T), Ct = Object.keys(ae).filter(function(iu) {
            return iu !== "key";
          }), _t = Ct.length > 0 ? "{key: someKey, " + Ct.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!zr[ei + _t]) {
            var ti = Ct.length > 0 ? "{" + Ct.join(": ..., ") + ": ...}" : "{}";
            de(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _t, ei, ti, ei), zr[ei + _t] = !0;
          }
        }
        return T === j ? Lr(Cn) : au(Cn), Cn;
      }
    }
    function hi(T, ae, ke) {
      return dr(T, ae, ke, !0);
    }
    function Za(T, ae, ke) {
      return dr(T, ae, ke, !1);
    }
    var mi = Za, yi = hi;
    av.Fragment = j, av.jsx = mi, av.jsxs = yi;
  }()), av;
}
process.env.NODE_ENV === "production" ? T0.exports = _k() : T0.exports = kk();
var ut = T0.exports, _0 = { exports: {} }, Xa = {}, ty = { exports: {} }, w0 = {};
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
  return yw || (yw = 1, function(S) {
    function R(ue, Pe) {
      var we = ue.length;
      ue.push(Pe);
      e: for (; 0 < we; ) {
        var O = we - 1 >>> 1, te = ue[O];
        if (0 < z(te, Pe)) ue[O] = Pe, ue[we] = te, we = O;
        else break e;
      }
    }
    function E(ue) {
      return ue.length === 0 ? null : ue[0];
    }
    function j(ue) {
      if (ue.length === 0) return null;
      var Pe = ue[0], we = ue.pop();
      if (we !== Pe) {
        ue[0] = we;
        e: for (var O = 0, te = ue.length, Xe = te >>> 1; O < Xe; ) {
          var We = 2 * (O + 1) - 1, Tt = ue[We], Rt = We + 1, gt = ue[Rt];
          if (0 > z(Tt, we)) Rt < te && 0 > z(gt, Tt) ? (ue[O] = gt, ue[Rt] = we, O = Rt) : (ue[O] = Tt, ue[We] = we, O = We);
          else if (Rt < te && 0 > z(gt, we)) ue[O] = gt, ue[Rt] = we, O = Rt;
          else break e;
        }
      }
      return Pe;
    }
    function z(ue, Pe) {
      var we = ue.sortIndex - Pe.sortIndex;
      return we !== 0 ? we : ue.id - Pe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var B = performance;
      S.unstable_now = function() {
        return B.now();
      };
    } else {
      var y = Date, Q = y.now();
      S.unstable_now = function() {
        return y.now() - Q;
      };
    }
    var Y = [], N = [], oe = 1, q = null, ee = 3, P = !1, ye = !1, G = !1, X = typeof setTimeout == "function" ? setTimeout : null, fe = typeof clearTimeout == "function" ? clearTimeout : null, de = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ce(ue) {
      for (var Pe = E(N); Pe !== null; ) {
        if (Pe.callback === null) j(N);
        else if (Pe.startTime <= ue) j(N), Pe.sortIndex = Pe.expirationTime, R(Y, Pe);
        else break;
        Pe = E(N);
      }
    }
    function he(ue) {
      if (G = !1, Ce(ue), !ye) if (E(Y) !== null) ye = !0, Ft(Re);
      else {
        var Pe = E(N);
        Pe !== null && je(he, Pe.startTime - ue);
      }
    }
    function Re(ue, Pe) {
      ye = !1, G && (G = !1, fe(ct), ct = -1), P = !0;
      var we = ee;
      try {
        for (Ce(Pe), q = E(Y); q !== null && (!(q.expirationTime > Pe) || ue && !zt()); ) {
          var O = q.callback;
          if (typeof O == "function") {
            q.callback = null, ee = q.priorityLevel;
            var te = O(q.expirationTime <= Pe);
            Pe = S.unstable_now(), typeof te == "function" ? q.callback = te : q === E(Y) && j(Y), Ce(Pe);
          } else j(Y);
          q = E(Y);
        }
        if (q !== null) var Xe = !0;
        else {
          var We = E(N);
          We !== null && je(he, We.startTime - Pe), Xe = !1;
        }
        return Xe;
      } finally {
        q = null, ee = we, P = !1;
      }
    }
    var Ge = !1, He = null, ct = -1, mt = 5, rt = -1;
    function zt() {
      return !(S.unstable_now() - rt < mt);
    }
    function yt() {
      if (He !== null) {
        var ue = S.unstable_now();
        rt = ue;
        var Pe = !0;
        try {
          Pe = He(!0, ue);
        } finally {
          Pe ? Se() : (Ge = !1, He = null);
        }
      } else Ge = !1;
    }
    var Se;
    if (typeof de == "function") Se = function() {
      de(yt);
    };
    else if (typeof MessageChannel < "u") {
      var Mt = new MessageChannel(), jt = Mt.port2;
      Mt.port1.onmessage = yt, Se = function() {
        jt.postMessage(null);
      };
    } else Se = function() {
      X(yt, 0);
    };
    function Ft(ue) {
      He = ue, Ge || (Ge = !0, Se());
    }
    function je(ue, Pe) {
      ct = X(function() {
        ue(S.unstable_now());
      }, Pe);
    }
    S.unstable_IdlePriority = 5, S.unstable_ImmediatePriority = 1, S.unstable_LowPriority = 4, S.unstable_NormalPriority = 3, S.unstable_Profiling = null, S.unstable_UserBlockingPriority = 2, S.unstable_cancelCallback = function(ue) {
      ue.callback = null;
    }, S.unstable_continueExecution = function() {
      ye || P || (ye = !0, Ft(Re));
    }, S.unstable_forceFrameRate = function(ue) {
      0 > ue || 125 < ue ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : mt = 0 < ue ? Math.floor(1e3 / ue) : 5;
    }, S.unstable_getCurrentPriorityLevel = function() {
      return ee;
    }, S.unstable_getFirstCallbackNode = function() {
      return E(Y);
    }, S.unstable_next = function(ue) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
          var Pe = 3;
          break;
        default:
          Pe = ee;
      }
      var we = ee;
      ee = Pe;
      try {
        return ue();
      } finally {
        ee = we;
      }
    }, S.unstable_pauseExecution = function() {
    }, S.unstable_requestPaint = function() {
    }, S.unstable_runWithPriority = function(ue, Pe) {
      switch (ue) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ue = 3;
      }
      var we = ee;
      ee = ue;
      try {
        return Pe();
      } finally {
        ee = we;
      }
    }, S.unstable_scheduleCallback = function(ue, Pe, we) {
      var O = S.unstable_now();
      switch (typeof we == "object" && we !== null ? (we = we.delay, we = typeof we == "number" && 0 < we ? O + we : O) : we = O, ue) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return te = we + te, ue = { id: oe++, callback: Pe, priorityLevel: ue, startTime: we, expirationTime: te, sortIndex: -1 }, we > O ? (ue.sortIndex = we, R(N, ue), E(Y) === null && ue === E(N) && (G ? (fe(ct), ct = -1) : G = !0, je(he, we - O))) : (ue.sortIndex = te, R(Y, ue), ye || P || (ye = !0, Ft(Re))), ue;
    }, S.unstable_shouldYield = zt, S.unstable_wrapCallback = function(ue) {
      var Pe = ee;
      return function() {
        var we = ee;
        ee = Pe;
        try {
          return ue.apply(this, arguments);
        } finally {
          ee = we;
        }
      };
    };
  }(w0)), w0;
}
var x0 = {};
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
  return gw || (gw = 1, function(S) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var R = !1, E = 5;
      function j(W, Ee) {
        var Ie = W.length;
        W.push(Ee), y(W, Ee, Ie);
      }
      function z(W) {
        return W.length === 0 ? null : W[0];
      }
      function B(W) {
        if (W.length === 0)
          return null;
        var Ee = W[0], Ie = W.pop();
        return Ie !== Ee && (W[0] = Ie, Q(W, Ie, 0)), Ee;
      }
      function y(W, Ee, Ie) {
        for (var ft = Ie; ft > 0; ) {
          var Pt = ft - 1 >>> 1, mn = W[Pt];
          if (Y(mn, Ee) > 0)
            W[Pt] = Ee, W[ft] = mn, ft = Pt;
          else
            return;
        }
      }
      function Q(W, Ee, Ie) {
        for (var ft = Ie, Pt = W.length, mn = Pt >>> 1; ft < mn; ) {
          var an = (ft + 1) * 2 - 1, Gt = W[an], Vt = an + 1, ln = W[Vt];
          if (Y(Gt, Ee) < 0)
            Vt < Pt && Y(ln, Gt) < 0 ? (W[ft] = ln, W[Vt] = Ee, ft = Vt) : (W[ft] = Gt, W[an] = Ee, ft = an);
          else if (Vt < Pt && Y(ln, Ee) < 0)
            W[ft] = ln, W[Vt] = Ee, ft = Vt;
          else
            return;
        }
      }
      function Y(W, Ee) {
        var Ie = W.sortIndex - Ee.sortIndex;
        return Ie !== 0 ? Ie : W.id - Ee.id;
      }
      var N = 1, oe = 2, q = 3, ee = 4, P = 5;
      function ye(W, Ee) {
      }
      var G = typeof performance == "object" && typeof performance.now == "function";
      if (G) {
        var X = performance;
        S.unstable_now = function() {
          return X.now();
        };
      } else {
        var fe = Date, de = fe.now();
        S.unstable_now = function() {
          return fe.now() - de;
        };
      }
      var Ce = 1073741823, he = -1, Re = 250, Ge = 5e3, He = 1e4, ct = Ce, mt = [], rt = [], zt = 1, yt = null, Se = q, Mt = !1, jt = !1, Ft = !1, je = typeof setTimeout == "function" ? setTimeout : null, ue = typeof clearTimeout == "function" ? clearTimeout : null, Pe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function we(W) {
        for (var Ee = z(rt); Ee !== null; ) {
          if (Ee.callback === null)
            B(rt);
          else if (Ee.startTime <= W)
            B(rt), Ee.sortIndex = Ee.expirationTime, j(mt, Ee);
          else
            return;
          Ee = z(rt);
        }
      }
      function O(W) {
        if (Ft = !1, we(W), !jt)
          if (z(mt) !== null)
            jt = !0, _e(te);
          else {
            var Ee = z(rt);
            Ee !== null && Me(O, Ee.startTime - W);
          }
      }
      function te(W, Ee) {
        jt = !1, Ft && (Ft = !1, Je()), Mt = !0;
        var Ie = Se;
        try {
          var ft;
          if (!R) return Xe(W, Ee);
        } finally {
          yt = null, Se = Ie, Mt = !1;
        }
      }
      function Xe(W, Ee) {
        var Ie = Ee;
        for (we(Ie), yt = z(mt); yt !== null && !(yt.expirationTime > Ie && (!W || va())); ) {
          var ft = yt.callback;
          if (typeof ft == "function") {
            yt.callback = null, Se = yt.priorityLevel;
            var Pt = yt.expirationTime <= Ie, mn = ft(Pt);
            Ie = S.unstable_now(), typeof mn == "function" ? yt.callback = mn : yt === z(mt) && B(mt), we(Ie);
          } else
            B(mt);
          yt = z(mt);
        }
        if (yt !== null)
          return !0;
        var an = z(rt);
        return an !== null && Me(O, an.startTime - Ie), !1;
      }
      function We(W, Ee) {
        switch (W) {
          case N:
          case oe:
          case q:
          case ee:
          case P:
            break;
          default:
            W = q;
        }
        var Ie = Se;
        Se = W;
        try {
          return Ee();
        } finally {
          Se = Ie;
        }
      }
      function Tt(W) {
        var Ee;
        switch (Se) {
          case N:
          case oe:
          case q:
            Ee = q;
            break;
          default:
            Ee = Se;
            break;
        }
        var Ie = Se;
        Se = Ee;
        try {
          return W();
        } finally {
          Se = Ie;
        }
      }
      function Rt(W) {
        var Ee = Se;
        return function() {
          var Ie = Se;
          Se = Ee;
          try {
            return W.apply(this, arguments);
          } finally {
            Se = Ie;
          }
        };
      }
      function gt(W, Ee, Ie) {
        var ft = S.unstable_now(), Pt;
        if (typeof Ie == "object" && Ie !== null) {
          var mn = Ie.delay;
          typeof mn == "number" && mn > 0 ? Pt = ft + mn : Pt = ft;
        } else
          Pt = ft;
        var an;
        switch (W) {
          case N:
            an = he;
            break;
          case oe:
            an = Re;
            break;
          case P:
            an = ct;
            break;
          case ee:
            an = He;
            break;
          case q:
          default:
            an = Ge;
            break;
        }
        var Gt = Pt + an, Vt = {
          id: zt++,
          callback: Ee,
          priorityLevel: W,
          startTime: Pt,
          expirationTime: Gt,
          sortIndex: -1
        };
        return Pt > ft ? (Vt.sortIndex = Pt, j(rt, Vt), z(mt) === null && Vt === z(rt) && (Ft ? Je() : Ft = !0, Me(O, Pt - ft))) : (Vt.sortIndex = Gt, j(mt, Vt), !jt && !Mt && (jt = !0, _e(te))), Vt;
      }
      function St() {
      }
      function wt() {
        !jt && !Mt && (jt = !0, _e(te));
      }
      function qt() {
        return z(mt);
      }
      function _n(W) {
        W.callback = null;
      }
      function ir() {
        return Se;
      }
      var xn = !1, In = null, Ln = -1, zn = E, fr = -1;
      function va() {
        var W = S.unstable_now() - fr;
        return !(W < zn);
      }
      function _r() {
      }
      function Un(W) {
        if (W < 0 || W > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        W > 0 ? zn = Math.floor(1e3 / W) : zn = E;
      }
      var M = function() {
        if (In !== null) {
          var W = S.unstable_now();
          fr = W;
          var Ee = !0, Ie = !0;
          try {
            Ie = In(Ee, W);
          } finally {
            Ie ? re() : (xn = !1, In = null);
          }
        } else
          xn = !1;
      }, re;
      if (typeof Pe == "function")
        re = function() {
          Pe(M);
        };
      else if (typeof MessageChannel < "u") {
        var me = new MessageChannel(), be = me.port2;
        me.port1.onmessage = M, re = function() {
          be.postMessage(null);
        };
      } else
        re = function() {
          je(M, 0);
        };
      function _e(W) {
        In = W, xn || (xn = !0, re());
      }
      function Me(W, Ee) {
        Ln = je(function() {
          W(S.unstable_now());
        }, Ee);
      }
      function Je() {
        ue(Ln), Ln = -1;
      }
      var bt = _r, Ht = null;
      S.unstable_IdlePriority = P, S.unstable_ImmediatePriority = N, S.unstable_LowPriority = ee, S.unstable_NormalPriority = q, S.unstable_Profiling = Ht, S.unstable_UserBlockingPriority = oe, S.unstable_cancelCallback = _n, S.unstable_continueExecution = wt, S.unstable_forceFrameRate = Un, S.unstable_getCurrentPriorityLevel = ir, S.unstable_getFirstCallbackNode = qt, S.unstable_next = Tt, S.unstable_pauseExecution = St, S.unstable_requestPaint = bt, S.unstable_runWithPriority = We, S.unstable_scheduleCallback = gt, S.unstable_shouldYield = va, S.unstable_wrapCallback = Rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(x0)), x0;
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
  if (Ew) return Xa;
  Ew = 1;
  var S = Ut, R = kw();
  function E(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var j = /* @__PURE__ */ new Set(), z = {};
  function B(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (z[n] = r, n = 0; n < r.length; n++) j.add(r[n]);
  }
  var Q = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Y = Object.prototype.hasOwnProperty, N = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, oe = {}, q = {};
  function ee(n) {
    return Y.call(q, n) ? !0 : Y.call(oe, n) ? !1 : N.test(n) ? q[n] = !0 : (oe[n] = !0, !1);
  }
  function P(n, r, l, o) {
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
  function ye(n, r, l, o) {
    if (r === null || typeof r > "u" || P(n, r, l, o)) return !0;
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
  function G(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var X = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    X[n] = new G(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    X[r] = new G(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    X[n] = new G(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    X[n] = new G(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    X[n] = new G(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    X[n] = new G(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    X[n] = new G(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    X[n] = new G(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    X[n] = new G(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var fe = /[\-:]([a-z])/g;
  function de(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      fe,
      de
    );
    X[r] = new G(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(fe, de);
    X[r] = new G(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(fe, de);
    X[r] = new G(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    X[n] = new G(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), X.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    X[n] = new G(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ce(n, r, l, o) {
    var c = X.hasOwnProperty(r) ? X[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ye(r, l, c, o) && (l = null), o || c === null ? ee(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var he = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Re = Symbol.for("react.element"), Ge = Symbol.for("react.portal"), He = Symbol.for("react.fragment"), ct = Symbol.for("react.strict_mode"), mt = Symbol.for("react.profiler"), rt = Symbol.for("react.provider"), zt = Symbol.for("react.context"), yt = Symbol.for("react.forward_ref"), Se = Symbol.for("react.suspense"), Mt = Symbol.for("react.suspense_list"), jt = Symbol.for("react.memo"), Ft = Symbol.for("react.lazy"), je = Symbol.for("react.offscreen"), ue = Symbol.iterator;
  function Pe(n) {
    return n === null || typeof n != "object" ? null : (n = ue && n[ue] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var we = Object.assign, O;
  function te(n) {
    if (O === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      O = r && r[1] || "";
    }
    return `
` + O + n;
  }
  var Xe = !1;
  function We(n, r) {
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
        } catch ($) {
          var o = $;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch ($) {
          o = $;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch ($) {
          o = $;
        }
        n();
      }
    } catch ($) {
      if ($ && o && typeof $.stack == "string") {
        for (var c = $.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, w = d.length - 1; 1 <= m && 0 <= w && c[m] !== d[w]; ) w--;
        for (; 1 <= m && 0 <= w; m--, w--) if (c[m] !== d[w]) {
          if (m !== 1 || w !== 1)
            do
              if (m--, w--, 0 > w || c[m] !== d[w]) {
                var b = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", n.displayName)), b;
              }
            while (1 <= m && 0 <= w);
          break;
        }
      }
    } finally {
      Xe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? te(n) : "";
  }
  function Tt(n) {
    switch (n.tag) {
      case 5:
        return te(n.type);
      case 16:
        return te("Lazy");
      case 13:
        return te("Suspense");
      case 19:
        return te("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = We(n.type, !1), n;
      case 11:
        return n = We(n.type.render, !1), n;
      case 1:
        return n = We(n.type, !0), n;
      default:
        return "";
    }
  }
  function Rt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case He:
        return "Fragment";
      case Ge:
        return "Portal";
      case mt:
        return "Profiler";
      case ct:
        return "StrictMode";
      case Se:
        return "Suspense";
      case Mt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case zt:
        return (n.displayName || "Context") + ".Consumer";
      case rt:
        return (n._context.displayName || "Context") + ".Provider";
      case yt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case jt:
        return r = n.displayName || null, r !== null ? r : Rt(n.type) || "Memo";
      case Ft:
        r = n._payload, n = n._init;
        try {
          return Rt(n(r));
        } catch {
        }
    }
    return null;
  }
  function gt(n) {
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
        return Rt(r);
      case 8:
        return r === ct ? "StrictMode" : "Mode";
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
  function St(n) {
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
  function wt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function qt(n) {
    var r = wt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function _n(n) {
    n._valueTracker || (n._valueTracker = qt(n));
  }
  function ir(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = wt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function xn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function In(n, r) {
    var l = r.checked;
    return we({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Ln(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = St(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function zn(n, r) {
    r = r.checked, r != null && Ce(n, "checked", r, !1);
  }
  function fr(n, r) {
    zn(n, r);
    var l = St(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? _r(n, r.type, l) : r.hasOwnProperty("defaultValue") && _r(n, r.type, St(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function va(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function _r(n, r, l) {
    (r !== "number" || xn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Un = Array.isArray;
  function M(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + St(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function re(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(E(91));
    return we({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function me(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(E(92));
        if (Un(l)) {
          if (1 < l.length) throw Error(E(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: St(l) };
  }
  function be(n, r) {
    var l = St(r.value), o = St(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function _e(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Me(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Je(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Me(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var bt, Ht = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (bt = bt || document.createElement("div"), bt.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = bt.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function W(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ee = {
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
  }, Ie = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ee).forEach(function(n) {
    Ie.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ee[r] = Ee[n];
    });
  });
  function ft(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Ee.hasOwnProperty(n) && Ee[n] ? ("" + r).trim() : r + "px";
  }
  function Pt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = ft(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var mn = we({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function an(n, r) {
    if (r) {
      if (mn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(E(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(E(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(E(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(E(62));
    }
  }
  function Gt(n, r) {
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
  var Vt = null;
  function ln(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var sn = null, ha = null, kr = null;
  function Ma(n) {
    if (n = qe(n)) {
      if (typeof sn != "function") throw Error(E(280));
      var r = n.stateNode;
      r && (r = Dn(r), sn(n.stateNode, n.type, r));
    }
  }
  function Bi(n) {
    ha ? kr ? kr.push(n) : kr = [n] : ha = n;
  }
  function nu() {
    if (ha) {
      var n = ha, r = kr;
      if (kr = ha = null, Ma(n), r) for (n = 0; n < r.length; n++) Ma(r[n]);
    }
  }
  function ru(n, r) {
    return n(r);
  }
  function ml() {
  }
  var yl = !1;
  function au(n, r, l) {
    if (yl) return n(r, l);
    yl = !0;
    try {
      return ru(n, r, l);
    } finally {
      yl = !1, (ha !== null || kr !== null) && (ml(), nu());
    }
  }
  function Lr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Dn(l);
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
    if (l && typeof l != "function") throw Error(E(231, r, typeof l));
    return l;
  }
  var zr = !1;
  if (Q) try {
    var dr = {};
    Object.defineProperty(dr, "passive", { get: function() {
      zr = !0;
    } }), window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr);
  } catch {
    zr = !1;
  }
  function hi(n, r, l, o, c, d, m, w, b) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, $);
    } catch (se) {
      this.onError(se);
    }
  }
  var Za = !1, mi = null, yi = !1, T = null, ae = { onError: function(n) {
    Za = !0, mi = n;
  } };
  function ke(n, r, l, o, c, d, m, w, b) {
    Za = !1, mi = null, hi.apply(ae, arguments);
  }
  function Fe(n, r, l, o, c, d, m, w, b) {
    if (ke.apply(this, arguments), Za) {
      if (Za) {
        var $ = mi;
        Za = !1, mi = null;
      } else throw Error(E(198));
      yi || (yi = !0, T = $);
    }
  }
  function Et(n) {
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
  function pt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Nt(n) {
    if (Et(n) !== n) throw Error(E(188));
  }
  function Dt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Et(n), r === null) throw Error(E(188));
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
          if (d === l) return Nt(c), n;
          if (d === o) return Nt(c), r;
          d = d.sibling;
        }
        throw Error(E(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, w = c.child; w; ) {
          if (w === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (w === o) {
            m = !0, o = c, l = d;
            break;
          }
          w = w.sibling;
        }
        if (!m) {
          for (w = d.child; w; ) {
            if (w === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (w === o) {
              m = !0, o = d, l = c;
              break;
            }
            w = w.sibling;
          }
          if (!m) throw Error(E(189));
        }
      }
      if (l.alternate !== o) throw Error(E(190));
    }
    if (l.tag !== 3) throw Error(E(188));
    return l.stateNode.current === l ? n : r;
  }
  function jn(n) {
    return n = Dt(n), n !== null ? gn(n) : null;
  }
  function gn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = gn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Cn = R.unstable_scheduleCallback, pr = R.unstable_cancelCallback, Ja = R.unstable_shouldYield, ei = R.unstable_requestPaint, Ct = R.unstable_now, _t = R.unstable_getCurrentPriorityLevel, ti = R.unstable_ImmediatePriority, iu = R.unstable_UserBlockingPriority, lu = R.unstable_NormalPriority, gl = R.unstable_LowPriority, Xu = R.unstable_IdlePriority, Sl = null, qr = null;
  function Go(n) {
    if (qr && typeof qr.onCommitFiberRoot == "function") try {
      qr.onCommitFiberRoot(Sl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Ar = Math.clz32 ? Math.clz32 : qu, fc = Math.log, dc = Math.LN2;
  function qu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fc(n) / dc | 0) | 0;
  }
  var El = 64, ma = 4194304;
  function ni(n) {
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
  function ri(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var w = m & ~c;
      w !== 0 ? o = ni(w) : (d &= m, d !== 0 && (o = ni(d)));
    } else m = l & ~c, m !== 0 ? o = ni(m) : d !== 0 && (o = ni(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Ar(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Zu(n, r) {
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
  function uu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Ar(d), w = 1 << m, b = c[m];
      b === -1 ? (!(w & l) || w & o) && (c[m] = Zu(w, r)) : b <= r && (n.expiredLanes |= w), d &= ~w;
    }
  }
  function Cl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ju() {
    var n = El;
    return El <<= 1, !(El & 4194240) && (El = 64), n;
  }
  function eo(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function $i(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Ar(r), n[r] = l;
  }
  function Zf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Ar(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Ii(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Ar(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Zt = 0;
  function to(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Qt, Xo, gi, dt, no, vr = !1, Si = [], Ur = null, Ei = null, Rn = null, cn = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map(), er = [], jr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Na(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ur = null;
        break;
      case "dragenter":
      case "dragleave":
        Ei = null;
        break;
      case "mouseover":
      case "mouseout":
        Rn = null;
        break;
      case "pointerover":
      case "pointerout":
        cn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rl.delete(r.pointerId);
    }
  }
  function ou(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = qe(r), r !== null && Xo(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Ur = ou(Ur, n, r, l, o, c), !0;
      case "dragenter":
        return Ei = ou(Ei, n, r, l, o, c), !0;
      case "mouseover":
        return Rn = ou(Rn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return cn.set(d, ou(cn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Rl.set(d, ou(Rl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Zo(n) {
    var r = yu(n.target);
    if (r !== null) {
      var l = Et(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = pt(l), r !== null) {
            n.blockedOn = r, no(n.priority, function() {
              gi(l);
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
  function wl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = io(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Vt = o, l.target.dispatchEvent(o), Vt = null;
      } else return r = qe(l), r !== null && Xo(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function su(n, r, l) {
    wl(n) && l.delete(r);
  }
  function Jf() {
    vr = !1, Ur !== null && wl(Ur) && (Ur = null), Ei !== null && wl(Ei) && (Ei = null), Rn !== null && wl(Rn) && (Rn = null), cn.forEach(su), Rl.forEach(su);
  }
  function La(n, r) {
    n.blockedOn === r && (n.blockedOn = null, vr || (vr = !0, R.unstable_scheduleCallback(R.unstable_NormalPriority, Jf)));
  }
  function ai(n) {
    function r(c) {
      return La(c, n);
    }
    if (0 < Si.length) {
      La(Si[0], n);
      for (var l = 1; l < Si.length; l++) {
        var o = Si[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Ur !== null && La(Ur, n), Ei !== null && La(Ei, n), Rn !== null && La(Rn, n), cn.forEach(r), Rl.forEach(r), l = 0; l < er.length; l++) o = er[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < er.length && (l = er[0], l.blockedOn === null); ) Zo(l), l.blockedOn === null && er.shift();
  }
  var Ci = he.ReactCurrentBatchConfig, za = !0;
  function ro(n, r, l, o) {
    var c = Zt, d = Ci.transition;
    Ci.transition = null;
    try {
      Zt = 1, xl(n, r, l, o);
    } finally {
      Zt = c, Ci.transition = d;
    }
  }
  function ao(n, r, l, o) {
    var c = Zt, d = Ci.transition;
    Ci.transition = null;
    try {
      Zt = 4, xl(n, r, l, o);
    } finally {
      Zt = c, Ci.transition = d;
    }
  }
  function xl(n, r, l, o) {
    if (za) {
      var c = io(n, r, l, o);
      if (c === null) xc(n, r, o, cu, l), Na(n, o);
      else if (qo(c, n, r, l, o)) o.stopPropagation();
      else if (Na(n, o), r & 4 && -1 < jr.indexOf(n)) {
        for (; c !== null; ) {
          var d = qe(c);
          if (d !== null && Qt(d), d = io(n, r, l, o), d === null && xc(n, r, o, cu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else xc(n, r, o, null, l);
    }
  }
  var cu = null;
  function io(n, r, l, o) {
    if (cu = null, n = ln(o), n = yu(n), n !== null) if (r = Et(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = pt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return cu = n, null;
  }
  function lo(n) {
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
        switch (_t()) {
          case ti:
            return 1;
          case iu:
            return 4;
          case lu:
          case gl:
            return 16;
          case Xu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ii = null, h = null, x = null;
  function V() {
    if (x) return x;
    var n, r = h, l = r.length, o, c = "value" in ii ? ii.value : ii.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return x = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function K(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ge() {
    return !0;
  }
  function et() {
    return !1;
  }
  function Te(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var w in n) n.hasOwnProperty(w) && (l = n[w], this[w] = l ? l(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ge : et, this.isPropagationStopped = et, this;
    }
    return we(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ge);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ge);
    }, persist: function() {
    }, isPersistent: ge }), r;
  }
  var at = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Lt = Te(at), Kt = we({}, at, { view: 0, detail: 0 }), Sn = Te(Kt), fn, kt, dn, kn = we({}, Kt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ad, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== dn && (dn && n.type === "mousemove" ? (fn = n.screenX - dn.screenX, kt = n.screenY - dn.screenY) : kt = fn = 0, dn = n), fn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : kt;
  } }), Tl = Te(kn), Jo = we({}, kn, { dataTransfer: 0 }), Yi = Te(Jo), es = we({}, Kt, { relatedTarget: 0 }), fu = Te(es), ed = we({}, at, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = Te(ed), td = we({}, at, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), cv = Te(td), nd = we({}, at, { data: 0 }), rd = Te(nd), fv = {
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
  function Wi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = uy[n]) ? !!r[n] : !1;
  }
  function ad() {
    return Wi;
  }
  var id = we({}, Kt, { key: function(n) {
    if (n.key) {
      var r = fv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = K(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? dv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ad, charCode: function(n) {
    return n.type === "keypress" ? K(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? K(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ld = Te(id), ud = we({}, kn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pv = Te(ud), vc = we({}, Kt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ad }), vv = Te(vc), Zr = we({}, at, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Qi = Te(Zr), Yn = we({}, kn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ki = Te(Yn), od = [9, 13, 27, 32], uo = Q && "CompositionEvent" in window, ts = null;
  Q && "documentMode" in document && (ts = document.documentMode);
  var ns = Q && "TextEvent" in window && !ts, hv = Q && (!uo || ts && 8 < ts && 11 >= ts), mv = " ", hc = !1;
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
  var oo = !1;
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
    if (oo) return n === "compositionend" || !uo && yv(n, r) ? (n = V(), x = h = ii = null, oo = !1, n) : null;
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
    Bi(o), r = os(r, "onChange"), 0 < r.length && (l = new Lt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Ri = null, du = null;
  function Cv(n) {
    hu(n, 0);
  }
  function rs(n) {
    var r = ui(n);
    if (ir(r)) return n;
  }
  function cy(n, r) {
    if (n === "change") return r;
  }
  var Rv = !1;
  if (Q) {
    var cd;
    if (Q) {
      var fd = "oninput" in document;
      if (!fd) {
        var wv = document.createElement("div");
        wv.setAttribute("oninput", "return;"), fd = typeof wv.oninput == "function";
      }
      cd = fd;
    } else cd = !1;
    Rv = cd && (!document.documentMode || 9 < document.documentMode);
  }
  function xv() {
    Ri && (Ri.detachEvent("onpropertychange", Tv), du = Ri = null);
  }
  function Tv(n) {
    if (n.propertyName === "value" && rs(du)) {
      var r = [];
      sd(r, du, n, ln(n)), au(Cv, r);
    }
  }
  function fy(n, r, l) {
    n === "focusin" ? (xv(), Ri = r, du = l, Ri.attachEvent("onpropertychange", Tv)) : n === "focusout" && xv();
  }
  function bv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return rs(du);
  }
  function dy(n, r) {
    if (n === "click") return rs(r);
  }
  function _v(n, r) {
    if (n === "input" || n === "change") return rs(r);
  }
  function py(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var li = typeof Object.is == "function" ? Object.is : py;
  function as(n, r) {
    if (li(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Y.call(r, c) || !li(n[c], r[c])) return !1;
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
  function bl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? bl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function is() {
    for (var n = window, r = xn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = xn(n.document);
    }
    return r;
  }
  function yc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function so(n) {
    var r = is(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && bl(l.ownerDocument.documentElement, l)) {
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
  var vy = Q && "documentMode" in document && 11 >= document.documentMode, co = null, dd = null, ls = null, pd = !1;
  function vd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pd || co == null || co !== xn(o) || (o = co, "selectionStart" in o && yc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ls && as(ls, o) || (ls = o, o = os(dd, "onSelect"), 0 < o.length && (r = new Lt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = co)));
  }
  function gc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var pu = { animationend: gc("Animation", "AnimationEnd"), animationiteration: gc("Animation", "AnimationIteration"), animationstart: gc("Animation", "AnimationStart"), transitionend: gc("Transition", "TransitionEnd") }, hr = {}, hd = {};
  Q && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete pu.animationend.animation, delete pu.animationiteration.animation, delete pu.animationstart.animation), "TransitionEvent" in window || delete pu.transitionend.transition);
  function Sc(n) {
    if (hr[n]) return hr[n];
    if (!pu[n]) return n;
    var r = pu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in hd) return hr[n] = r[l];
    return n;
  }
  var Dv = Sc("animationend"), Ov = Sc("animationiteration"), Mv = Sc("animationstart"), Nv = Sc("transitionend"), md = /* @__PURE__ */ new Map(), Ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Aa(n, r) {
    md.set(n, r), B(r, [n]);
  }
  for (var yd = 0; yd < Ec.length; yd++) {
    var vu = Ec[yd], hy = vu.toLowerCase(), my = vu[0].toUpperCase() + vu.slice(1);
    Aa(hy, "on" + my);
  }
  Aa(Dv, "onAnimationEnd"), Aa(Ov, "onAnimationIteration"), Aa(Mv, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(Nv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), B("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), B("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), B("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), B("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), B("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), B("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gd = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
  function Cc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Fe(o, r, void 0, n), n.currentTarget = null;
  }
  function hu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var w = o[m], b = w.instance, $ = w.currentTarget;
          if (w = w.listener, b !== d && c.isPropagationStopped()) break e;
          Cc(c, w, $), d = b;
        }
        else for (m = 0; m < o.length; m++) {
          if (w = o[m], b = w.instance, $ = w.currentTarget, w = w.listener, b !== d && c.isPropagationStopped()) break e;
          Cc(c, w, $), d = b;
        }
      }
    }
    if (yi) throw n = T, yi = !1, T = null, n;
  }
  function un(n, r) {
    var l = r[fs];
    l === void 0 && (l = r[fs] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Lv(r, n, 2, !1), l.add(o));
  }
  function Rc(n, r, l) {
    var o = 0;
    r && (o |= 4), Lv(l, n, o, r);
  }
  var wc = "_reactListening" + Math.random().toString(36).slice(2);
  function fo(n) {
    if (!n[wc]) {
      n[wc] = !0, j.forEach(function(l) {
        l !== "selectionchange" && (gd.has(l) || Rc(l, !1, n), Rc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[wc] || (r[wc] = !0, Rc("selectionchange", !1, r));
    }
  }
  function Lv(n, r, l, o) {
    switch (lo(r)) {
      case 1:
        var c = ro;
        break;
      case 4:
        c = ao;
        break;
      default:
        c = xl;
    }
    l = c.bind(null, r, l, n), c = void 0, !zr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function xc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var w = o.stateNode.containerInfo;
        if (w === c || w.nodeType === 8 && w.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var b = m.tag;
          if ((b === 3 || b === 4) && (b = m.stateNode.containerInfo, b === c || b.nodeType === 8 && b.parentNode === c)) return;
          m = m.return;
        }
        for (; w !== null; ) {
          if (m = yu(w), m === null) return;
          if (b = m.tag, b === 5 || b === 6) {
            o = d = m;
            continue e;
          }
          w = w.parentNode;
        }
      }
      o = o.return;
    }
    au(function() {
      var $ = d, se = ln(l), pe = [];
      e: {
        var le = md.get(n);
        if (le !== void 0) {
          var Le = Lt, Ve = n;
          switch (n) {
            case "keypress":
              if (K(l) === 0) break e;
            case "keydown":
            case "keyup":
              Le = ld;
              break;
            case "focusin":
              Ve = "focus", Le = fu;
              break;
            case "focusout":
              Ve = "blur", Le = fu;
              break;
            case "beforeblur":
            case "afterblur":
              Le = fu;
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
              Le = Tl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Le = Yi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Le = vv;
              break;
            case Dv:
            case Ov:
            case Mv:
              Le = pc;
              break;
            case Nv:
              Le = Qi;
              break;
            case "scroll":
              Le = Sn;
              break;
            case "wheel":
              Le = Ki;
              break;
            case "copy":
            case "cut":
            case "paste":
              Le = cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Le = pv;
          }
          var Ye = (r & 4) !== 0, Bn = !Ye && n === "scroll", L = Ye ? le !== null ? le + "Capture" : null : le;
          Ye = [];
          for (var k = $, F; k !== null; ) {
            F = k;
            var ce = F.stateNode;
            if (F.tag === 5 && ce !== null && (F = ce, L !== null && (ce = Lr(k, L), ce != null && Ye.push(po(k, ce, F)))), Bn) break;
            k = k.return;
          }
          0 < Ye.length && (le = new Le(le, Ve, null, l, se), pe.push({ event: le, listeners: Ye }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", Le = n === "mouseout" || n === "pointerout", le && l !== Vt && (Ve = l.relatedTarget || l.fromElement) && (yu(Ve) || Ve[Gi])) break e;
          if ((Le || le) && (le = se.window === se ? se : (le = se.ownerDocument) ? le.defaultView || le.parentWindow : window, Le ? (Ve = l.relatedTarget || l.toElement, Le = $, Ve = Ve ? yu(Ve) : null, Ve !== null && (Bn = Et(Ve), Ve !== Bn || Ve.tag !== 5 && Ve.tag !== 6) && (Ve = null)) : (Le = null, Ve = $), Le !== Ve)) {
            if (Ye = Tl, ce = "onMouseLeave", L = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (Ye = pv, ce = "onPointerLeave", L = "onPointerEnter", k = "pointer"), Bn = Le == null ? le : ui(Le), F = Ve == null ? le : ui(Ve), le = new Ye(ce, k + "leave", Le, l, se), le.target = Bn, le.relatedTarget = F, ce = null, yu(se) === $ && (Ye = new Ye(L, k + "enter", Ve, l, se), Ye.target = F, Ye.relatedTarget = Bn, ce = Ye), Bn = ce, Le && Ve) t: {
              for (Ye = Le, L = Ve, k = 0, F = Ye; F; F = _l(F)) k++;
              for (F = 0, ce = L; ce; ce = _l(ce)) F++;
              for (; 0 < k - F; ) Ye = _l(Ye), k--;
              for (; 0 < F - k; ) L = _l(L), F--;
              for (; k--; ) {
                if (Ye === L || L !== null && Ye === L.alternate) break t;
                Ye = _l(Ye), L = _l(L);
              }
              Ye = null;
            }
            else Ye = null;
            Le !== null && zv(pe, le, Le, Ye, !1), Ve !== null && Bn !== null && zv(pe, Bn, Ve, Ye, !0);
          }
        }
        e: {
          if (le = $ ? ui($) : window, Le = le.nodeName && le.nodeName.toLowerCase(), Le === "select" || Le === "input" && le.type === "file") var Be = cy;
          else if (Ev(le)) if (Rv) Be = _v;
          else {
            Be = bv;
            var nt = fy;
          }
          else (Le = le.nodeName) && Le.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (Be = dy);
          if (Be && (Be = Be(n, $))) {
            sd(pe, Be, l, se);
            break e;
          }
          nt && nt(n, le, $), n === "focusout" && (nt = le._wrapperState) && nt.controlled && le.type === "number" && _r(le, "number", le.value);
        }
        switch (nt = $ ? ui($) : window, n) {
          case "focusin":
            (Ev(nt) || nt.contentEditable === "true") && (co = nt, dd = $, ls = null);
            break;
          case "focusout":
            ls = dd = co = null;
            break;
          case "mousedown":
            pd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pd = !1, vd(pe, l, se);
            break;
          case "selectionchange":
            if (vy) break;
          case "keydown":
          case "keyup":
            vd(pe, l, se);
        }
        var it;
        if (uo) e: {
          switch (n) {
            case "compositionstart":
              var st = "onCompositionStart";
              break e;
            case "compositionend":
              st = "onCompositionEnd";
              break e;
            case "compositionupdate":
              st = "onCompositionUpdate";
              break e;
          }
          st = void 0;
        }
        else oo ? yv(n, l) && (st = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (st = "onCompositionStart");
        st && (hv && l.locale !== "ko" && (oo || st !== "onCompositionStart" ? st === "onCompositionEnd" && oo && (it = V()) : (ii = se, h = "value" in ii ? ii.value : ii.textContent, oo = !0)), nt = os($, st), 0 < nt.length && (st = new rd(st, n, null, l, se), pe.push({ event: st, listeners: nt }), it ? st.data = it : (it = gv(l), it !== null && (st.data = it)))), (it = ns ? Sv(n, l) : oy(n, l)) && ($ = os($, "onBeforeInput"), 0 < $.length && (se = new rd("onBeforeInput", "beforeinput", null, l, se), pe.push({ event: se, listeners: $ }), se.data = it));
      }
      hu(pe, r);
    });
  }
  function po(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function os(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Lr(n, l), d != null && o.unshift(po(n, d, c)), d = Lr(n, r), d != null && o.push(po(n, d, c))), n = n.return;
    }
    return o;
  }
  function _l(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function zv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var w = l, b = w.alternate, $ = w.stateNode;
      if (b !== null && b === o) break;
      w.tag === 5 && $ !== null && (w = $, c ? (b = Lr(l, d), b != null && m.unshift(po(l, b, w))) : c || (b = Lr(l, d), b != null && m.push(po(l, b, w)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Av = /\r\n?/g, yy = /\u0000|\uFFFD/g;
  function Uv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Av, `
`).replace(yy, "");
  }
  function Tc(n, r, l) {
    if (r = Uv(r), Uv(n) !== r && l) throw Error(E(425));
  }
  function kl() {
  }
  var ss = null, mu = null;
  function bc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var _c = typeof setTimeout == "function" ? setTimeout : void 0, Sd = typeof clearTimeout == "function" ? clearTimeout : void 0, jv = typeof Promise == "function" ? Promise : void 0, vo = typeof queueMicrotask == "function" ? queueMicrotask : typeof jv < "u" ? function(n) {
    return jv.resolve(null).then(n).catch(kc);
  } : _c;
  function kc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ho(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), ai(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ai(r);
  }
  function wi(n) {
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
  var Dl = Math.random().toString(36).slice(2), xi = "__reactFiber$" + Dl, cs = "__reactProps$" + Dl, Gi = "__reactContainer$" + Dl, fs = "__reactEvents$" + Dl, mo = "__reactListeners$" + Dl, gy = "__reactHandles$" + Dl;
  function yu(n) {
    var r = n[xi];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Gi] || l[xi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Fv(n); n !== null; ) {
          if (l = n[xi]) return l;
          n = Fv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function qe(n) {
    return n = n[xi] || n[Gi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ui(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(E(33));
  }
  function Dn(n) {
    return n[cs] || null;
  }
  var $t = [], Ua = -1;
  function ja(n) {
    return { current: n };
  }
  function En(n) {
    0 > Ua || (n.current = $t[Ua], $t[Ua] = null, Ua--);
  }
  function Ke(n, r) {
    Ua++, $t[Ua] = n.current, n.current = r;
  }
  var Dr = {}, An = ja(Dr), tr = ja(!1), Jr = Dr;
  function ea(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Dr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Wn(n) {
    return n = n.childContextTypes, n != null;
  }
  function yo() {
    En(tr), En(An);
  }
  function Hv(n, r, l) {
    if (An.current !== Dr) throw Error(E(168));
    Ke(An, r), Ke(tr, l);
  }
  function ds(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(E(108, gt(n) || "Unknown", c));
    return we({}, l, o);
  }
  function lr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Dr, Jr = An.current, Ke(An, n), Ke(tr, tr.current), !0;
  }
  function Dc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(E(169));
    l ? (n = ds(n, r, Jr), o.__reactInternalMemoizedMergedChildContext = n, En(tr), En(An), Ke(An, n)) : En(tr), Ke(tr, l);
  }
  var Ti = null, go = !1, Xi = !1;
  function Oc(n) {
    Ti === null ? Ti = [n] : Ti.push(n);
  }
  function Ol(n) {
    go = !0, Oc(n);
  }
  function bi() {
    if (!Xi && Ti !== null) {
      Xi = !0;
      var n = 0, r = Zt;
      try {
        var l = Ti;
        for (Zt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ti = null, go = !1;
      } catch (c) {
        throw Ti !== null && (Ti = Ti.slice(n + 1)), Cn(ti, bi), c;
      } finally {
        Zt = r, Xi = !1;
      }
    }
    return null;
  }
  var Ml = [], Nl = 0, Ll = null, qi = 0, Qn = [], Fa = 0, ya = null, _i = 1, ki = "";
  function gu(n, r) {
    Ml[Nl++] = qi, Ml[Nl++] = Ll, Ll = n, qi = r;
  }
  function Pv(n, r, l) {
    Qn[Fa++] = _i, Qn[Fa++] = ki, Qn[Fa++] = ya, ya = n;
    var o = _i;
    n = ki;
    var c = 32 - Ar(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Ar(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, _i = 1 << 32 - Ar(r) + c | l << c | o, ki = d + n;
    } else _i = 1 << d | l << c | o, ki = n;
  }
  function Mc(n) {
    n.return !== null && (gu(n, 1), Pv(n, 1, 0));
  }
  function Nc(n) {
    for (; n === Ll; ) Ll = Ml[--Nl], Ml[Nl] = null, qi = Ml[--Nl], Ml[Nl] = null;
    for (; n === ya; ) ya = Qn[--Fa], Qn[Fa] = null, ki = Qn[--Fa], Qn[Fa] = null, _i = Qn[--Fa], Qn[Fa] = null;
  }
  var ta = null, na = null, Tn = !1, Ha = null;
  function Ed(n, r) {
    var l = Ia(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Vv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ta = n, na = wi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ta = n, na = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ya !== null ? { id: _i, overflow: ki } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ia(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ta = n, na = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Cd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Rd(n) {
    if (Tn) {
      var r = na;
      if (r) {
        var l = r;
        if (!Vv(n, r)) {
          if (Cd(n)) throw Error(E(418));
          r = wi(l.nextSibling);
          var o = ta;
          r && Vv(n, r) ? Ed(o, l) : (n.flags = n.flags & -4097 | 2, Tn = !1, ta = n);
        }
      } else {
        if (Cd(n)) throw Error(E(418));
        n.flags = n.flags & -4097 | 2, Tn = !1, ta = n;
      }
    }
  }
  function nr(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ta = n;
  }
  function Lc(n) {
    if (n !== ta) return !1;
    if (!Tn) return nr(n), Tn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !bc(n.type, n.memoizedProps)), r && (r = na)) {
      if (Cd(n)) throw ps(), Error(E(418));
      for (; r; ) Ed(n, r), r = wi(r.nextSibling);
    }
    if (nr(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(E(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                na = wi(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        na = null;
      }
    } else na = ta ? wi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ps() {
    for (var n = na; n; ) n = wi(n.nextSibling);
  }
  function zl() {
    na = ta = null, Tn = !1;
  }
  function Zi(n) {
    Ha === null ? Ha = [n] : Ha.push(n);
  }
  var Sy = he.ReactCurrentBatchConfig;
  function Su(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(E(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(E(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var w = c.refs;
          m === null ? delete w[d] : w[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(E(284));
      if (!l._owner) throw Error(E(290, n));
    }
    return n;
  }
  function zc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(E(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Bv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Eu(n) {
    function r(L, k) {
      if (n) {
        var F = L.deletions;
        F === null ? (L.deletions = [k], L.flags |= 16) : F.push(k);
      }
    }
    function l(L, k) {
      if (!n) return null;
      for (; k !== null; ) r(L, k), k = k.sibling;
      return null;
    }
    function o(L, k) {
      for (L = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? L.set(k.key, k) : L.set(k.index, k), k = k.sibling;
      return L;
    }
    function c(L, k) {
      return L = Bl(L, k), L.index = 0, L.sibling = null, L;
    }
    function d(L, k, F) {
      return L.index = F, n ? (F = L.alternate, F !== null ? (F = F.index, F < k ? (L.flags |= 2, k) : F) : (L.flags |= 2, k)) : (L.flags |= 1048576, k);
    }
    function m(L) {
      return n && L.alternate === null && (L.flags |= 2), L;
    }
    function w(L, k, F, ce) {
      return k === null || k.tag !== 6 ? (k = Jd(F, L.mode, ce), k.return = L, k) : (k = c(k, F), k.return = L, k);
    }
    function b(L, k, F, ce) {
      var Be = F.type;
      return Be === He ? se(L, k, F.props.children, ce, F.key) : k !== null && (k.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === Ft && Bv(Be) === k.type) ? (ce = c(k, F.props), ce.ref = Su(L, k, F), ce.return = L, ce) : (ce = $s(F.type, F.key, F.props, null, L.mode, ce), ce.ref = Su(L, k, F), ce.return = L, ce);
    }
    function $(L, k, F, ce) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== F.containerInfo || k.stateNode.implementation !== F.implementation ? (k = vf(F, L.mode, ce), k.return = L, k) : (k = c(k, F.children || []), k.return = L, k);
    }
    function se(L, k, F, ce, Be) {
      return k === null || k.tag !== 7 ? (k = al(F, L.mode, ce, Be), k.return = L, k) : (k = c(k, F), k.return = L, k);
    }
    function pe(L, k, F) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Jd("" + k, L.mode, F), k.return = L, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case Re:
            return F = $s(k.type, k.key, k.props, null, L.mode, F), F.ref = Su(L, null, k), F.return = L, F;
          case Ge:
            return k = vf(k, L.mode, F), k.return = L, k;
          case Ft:
            var ce = k._init;
            return pe(L, ce(k._payload), F);
        }
        if (Un(k) || Pe(k)) return k = al(k, L.mode, F, null), k.return = L, k;
        zc(L, k);
      }
      return null;
    }
    function le(L, k, F, ce) {
      var Be = k !== null ? k.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number") return Be !== null ? null : w(L, k, "" + F, ce);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Re:
            return F.key === Be ? b(L, k, F, ce) : null;
          case Ge:
            return F.key === Be ? $(L, k, F, ce) : null;
          case Ft:
            return Be = F._init, le(
              L,
              k,
              Be(F._payload),
              ce
            );
        }
        if (Un(F) || Pe(F)) return Be !== null ? null : se(L, k, F, ce, null);
        zc(L, F);
      }
      return null;
    }
    function Le(L, k, F, ce, Be) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number") return L = L.get(F) || null, w(k, L, "" + ce, Be);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case Re:
            return L = L.get(ce.key === null ? F : ce.key) || null, b(k, L, ce, Be);
          case Ge:
            return L = L.get(ce.key === null ? F : ce.key) || null, $(k, L, ce, Be);
          case Ft:
            var nt = ce._init;
            return Le(L, k, F, nt(ce._payload), Be);
        }
        if (Un(ce) || Pe(ce)) return L = L.get(F) || null, se(k, L, ce, Be, null);
        zc(k, ce);
      }
      return null;
    }
    function Ve(L, k, F, ce) {
      for (var Be = null, nt = null, it = k, st = k = 0, sr = null; it !== null && st < F.length; st++) {
        it.index > st ? (sr = it, it = null) : sr = it.sibling;
        var tn = le(L, it, F[st], ce);
        if (tn === null) {
          it === null && (it = sr);
          break;
        }
        n && it && tn.alternate === null && r(L, it), k = d(tn, k, st), nt === null ? Be = tn : nt.sibling = tn, nt = tn, it = sr;
      }
      if (st === F.length) return l(L, it), Tn && gu(L, st), Be;
      if (it === null) {
        for (; st < F.length; st++) it = pe(L, F[st], ce), it !== null && (k = d(it, k, st), nt === null ? Be = it : nt.sibling = it, nt = it);
        return Tn && gu(L, st), Be;
      }
      for (it = o(L, it); st < F.length; st++) sr = Le(it, L, st, F[st], ce), sr !== null && (n && sr.alternate !== null && it.delete(sr.key === null ? st : sr.key), k = d(sr, k, st), nt === null ? Be = sr : nt.sibling = sr, nt = sr);
      return n && it.forEach(function(Yl) {
        return r(L, Yl);
      }), Tn && gu(L, st), Be;
    }
    function Ye(L, k, F, ce) {
      var Be = Pe(F);
      if (typeof Be != "function") throw Error(E(150));
      if (F = Be.call(F), F == null) throw Error(E(151));
      for (var nt = Be = null, it = k, st = k = 0, sr = null, tn = F.next(); it !== null && !tn.done; st++, tn = F.next()) {
        it.index > st ? (sr = it, it = null) : sr = it.sibling;
        var Yl = le(L, it, tn.value, ce);
        if (Yl === null) {
          it === null && (it = sr);
          break;
        }
        n && it && Yl.alternate === null && r(L, it), k = d(Yl, k, st), nt === null ? Be = Yl : nt.sibling = Yl, nt = Yl, it = sr;
      }
      if (tn.done) return l(
        L,
        it
      ), Tn && gu(L, st), Be;
      if (it === null) {
        for (; !tn.done; st++, tn = F.next()) tn = pe(L, tn.value, ce), tn !== null && (k = d(tn, k, st), nt === null ? Be = tn : nt.sibling = tn, nt = tn);
        return Tn && gu(L, st), Be;
      }
      for (it = o(L, it); !tn.done; st++, tn = F.next()) tn = Le(it, L, st, tn.value, ce), tn !== null && (n && tn.alternate !== null && it.delete(tn.key === null ? st : tn.key), k = d(tn, k, st), nt === null ? Be = tn : nt.sibling = tn, nt = tn);
      return n && it.forEach(function(xh) {
        return r(L, xh);
      }), Tn && gu(L, st), Be;
    }
    function Bn(L, k, F, ce) {
      if (typeof F == "object" && F !== null && F.type === He && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Re:
            e: {
              for (var Be = F.key, nt = k; nt !== null; ) {
                if (nt.key === Be) {
                  if (Be = F.type, Be === He) {
                    if (nt.tag === 7) {
                      l(L, nt.sibling), k = c(nt, F.props.children), k.return = L, L = k;
                      break e;
                    }
                  } else if (nt.elementType === Be || typeof Be == "object" && Be !== null && Be.$$typeof === Ft && Bv(Be) === nt.type) {
                    l(L, nt.sibling), k = c(nt, F.props), k.ref = Su(L, nt, F), k.return = L, L = k;
                    break e;
                  }
                  l(L, nt);
                  break;
                } else r(L, nt);
                nt = nt.sibling;
              }
              F.type === He ? (k = al(F.props.children, L.mode, ce, F.key), k.return = L, L = k) : (ce = $s(F.type, F.key, F.props, null, L.mode, ce), ce.ref = Su(L, k, F), ce.return = L, L = ce);
            }
            return m(L);
          case Ge:
            e: {
              for (nt = F.key; k !== null; ) {
                if (k.key === nt) if (k.tag === 4 && k.stateNode.containerInfo === F.containerInfo && k.stateNode.implementation === F.implementation) {
                  l(L, k.sibling), k = c(k, F.children || []), k.return = L, L = k;
                  break e;
                } else {
                  l(L, k);
                  break;
                }
                else r(L, k);
                k = k.sibling;
              }
              k = vf(F, L.mode, ce), k.return = L, L = k;
            }
            return m(L);
          case Ft:
            return nt = F._init, Bn(L, k, nt(F._payload), ce);
        }
        if (Un(F)) return Ve(L, k, F, ce);
        if (Pe(F)) return Ye(L, k, F, ce);
        zc(L, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" ? (F = "" + F, k !== null && k.tag === 6 ? (l(L, k.sibling), k = c(k, F), k.return = L, L = k) : (l(L, k), k = Jd(F, L.mode, ce), k.return = L, L = k), m(L)) : l(L, k);
    }
    return Bn;
  }
  var Fn = Eu(!0), De = Eu(!1), ga = ja(null), ra = null, So = null, wd = null;
  function xd() {
    wd = So = ra = null;
  }
  function Td(n) {
    var r = ga.current;
    En(ga), n._currentValue = r;
  }
  function bd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function On(n, r) {
    ra = n, wd = So = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Gn = !0), n.firstContext = null);
  }
  function Pa(n) {
    var r = n._currentValue;
    if (wd !== n) if (n = { context: n, memoizedValue: r, next: null }, So === null) {
      if (ra === null) throw Error(E(308));
      So = n, ra.dependencies = { lanes: 0, firstContext: n };
    } else So = So.next = n;
    return r;
  }
  var Cu = null;
  function _d(n) {
    Cu === null ? Cu = [n] : Cu.push(n);
  }
  function kd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, _d(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Sa(n, o);
  }
  function Sa(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ea = !1;
  function Dd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function $v(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Ji(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Al(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, It & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Sa(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, _d(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Sa(n, l);
  }
  function Ac(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ii(n, l);
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
  function vs(n, r, l, o) {
    var c = n.updateQueue;
    Ea = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, w = c.shared.pending;
    if (w !== null) {
      c.shared.pending = null;
      var b = w, $ = b.next;
      b.next = null, m === null ? d = $ : m.next = $, m = b;
      var se = n.alternate;
      se !== null && (se = se.updateQueue, w = se.lastBaseUpdate, w !== m && (w === null ? se.firstBaseUpdate = $ : w.next = $, se.lastBaseUpdate = b));
    }
    if (d !== null) {
      var pe = c.baseState;
      m = 0, se = $ = b = null, w = d;
      do {
        var le = w.lane, Le = w.eventTime;
        if ((o & le) === le) {
          se !== null && (se = se.next = {
            eventTime: Le,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var Ve = n, Ye = w;
            switch (le = r, Le = l, Ye.tag) {
              case 1:
                if (Ve = Ye.payload, typeof Ve == "function") {
                  pe = Ve.call(Le, pe, le);
                  break e;
                }
                pe = Ve;
                break e;
              case 3:
                Ve.flags = Ve.flags & -65537 | 128;
              case 0:
                if (Ve = Ye.payload, le = typeof Ve == "function" ? Ve.call(Le, pe, le) : Ve, le == null) break e;
                pe = we({}, pe, le);
                break e;
              case 2:
                Ea = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, le = c.effects, le === null ? c.effects = [w] : le.push(w));
        } else Le = { eventTime: Le, lane: le, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, se === null ? ($ = se = Le, b = pe) : se = se.next = Le, m |= le;
        if (w = w.next, w === null) {
          if (w = c.shared.pending, w === null) break;
          le = w, w = le.next, le.next = null, c.lastBaseUpdate = le, c.shared.pending = null;
        }
      } while (!0);
      if (se === null && (b = pe), c.baseState = b, c.firstBaseUpdate = $, c.lastBaseUpdate = se, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Li |= m, n.lanes = m, n.memoizedState = pe;
    }
  }
  function Od(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(E(191, c));
        c.call(o);
      }
    }
  }
  var hs = {}, Di = ja(hs), ms = ja(hs), ys = ja(hs);
  function Ru(n) {
    if (n === hs) throw Error(E(174));
    return n;
  }
  function Md(n, r) {
    switch (Ke(ys, r), Ke(ms, n), Ke(Di, hs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Je(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Je(r, n);
    }
    En(Di), Ke(Di, r);
  }
  function wu() {
    En(Di), En(ms), En(ys);
  }
  function Yv(n) {
    Ru(ys.current);
    var r = Ru(Di.current), l = Je(r, n.type);
    r !== l && (Ke(ms, n), Ke(Di, l));
  }
  function Uc(n) {
    ms.current === n && (En(Di), En(ms));
  }
  var Mn = ja(0);
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
  var gs = [];
  function Ze() {
    for (var n = 0; n < gs.length; n++) gs[n]._workInProgressVersionPrimary = null;
    gs.length = 0;
  }
  var Ot = he.ReactCurrentDispatcher, Jt = he.ReactCurrentBatchConfig, pn = 0, en = null, Kn = null, ur = null, Fc = !1, Ss = !1, xu = 0, ie = 0;
  function Xt() {
    throw Error(E(321));
  }
  function lt(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!li(n[l], r[l])) return !1;
    return !0;
  }
  function Ul(n, r, l, o, c, d) {
    if (pn = d, en = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ot.current = n === null || n.memoizedState === null ? Jc : Ts, n = l(o, c), Ss) {
      d = 0;
      do {
        if (Ss = !1, xu = 0, 25 <= d) throw Error(E(301));
        d += 1, ur = Kn = null, r.updateQueue = null, Ot.current = ef, n = l(o, c);
      } while (Ss);
    }
    if (Ot.current = Du, r = Kn !== null && Kn.next !== null, pn = 0, ur = Kn = en = null, Fc = !1, r) throw Error(E(300));
    return n;
  }
  function oi() {
    var n = xu !== 0;
    return xu = 0, n;
  }
  function Or() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ur === null ? en.memoizedState = ur = n : ur = ur.next = n, ur;
  }
  function Hn() {
    if (Kn === null) {
      var n = en.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Kn.next;
    var r = ur === null ? en.memoizedState : ur.next;
    if (r !== null) ur = r, Kn = n;
    else {
      if (n === null) throw Error(E(310));
      Kn = n, n = { memoizedState: Kn.memoizedState, baseState: Kn.baseState, baseQueue: Kn.baseQueue, queue: Kn.queue, next: null }, ur === null ? en.memoizedState = ur = n : ur = ur.next = n;
    }
    return ur;
  }
  function el(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function jl(n) {
    var r = Hn(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var o = Kn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var w = m = null, b = null, $ = d;
      do {
        var se = $.lane;
        if ((pn & se) === se) b !== null && (b = b.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), o = $.hasEagerState ? $.eagerState : n(o, $.action);
        else {
          var pe = {
            lane: se,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          b === null ? (w = b = pe, m = o) : b = b.next = pe, en.lanes |= se, Li |= se;
        }
        $ = $.next;
      } while ($ !== null && $ !== d);
      b === null ? m = o : b.next = w, li(o, r.memoizedState) || (Gn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = b, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, en.lanes |= d, Li |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Tu(n) {
    var r = Hn(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      li(d, r.memoizedState) || (Gn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Hc() {
  }
  function Pc(n, r) {
    var l = en, o = Hn(), c = r(), d = !li(o.memoizedState, c);
    if (d && (o.memoizedState = c, Gn = !0), o = o.queue, Es($c.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || ur !== null && ur.memoizedState.tag & 1) {
      if (l.flags |= 2048, bu(9, Bc.bind(null, l, o, c, r), void 0, null), rr === null) throw Error(E(349));
      pn & 30 || Vc(l, r, c);
    }
    return c;
  }
  function Vc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = en.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, en.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
      return !li(n, l);
    } catch {
      return !0;
    }
  }
  function Yc(n) {
    var r = Sa(n, 1);
    r !== null && Vr(r, n, 1, -1);
  }
  function Wc(n) {
    var r = Or();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: el, lastRenderedState: n }, r.queue = n, n = n.dispatch = ku.bind(null, en, n), [r.memoizedState, n];
  }
  function bu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = en.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, en.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Qc() {
    return Hn().memoizedState;
  }
  function Eo(n, r, l, o) {
    var c = Or();
    en.flags |= n, c.memoizedState = bu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Co(n, r, l, o) {
    var c = Hn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Kn !== null) {
      var m = Kn.memoizedState;
      if (d = m.destroy, o !== null && lt(o, m.deps)) {
        c.memoizedState = bu(r, l, d, o);
        return;
      }
    }
    en.flags |= n, c.memoizedState = bu(1 | r, l, d, o);
  }
  function Kc(n, r) {
    return Eo(8390656, 8, n, r);
  }
  function Es(n, r) {
    return Co(2048, 8, n, r);
  }
  function Gc(n, r) {
    return Co(4, 2, n, r);
  }
  function Cs(n, r) {
    return Co(4, 4, n, r);
  }
  function _u(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Xc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Co(4, 4, _u.bind(null, r, n), l);
  }
  function Rs() {
  }
  function qc(n, r) {
    var l = Hn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && lt(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Zc(n, r) {
    var l = Hn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && lt(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Nd(n, r, l) {
    return pn & 21 ? (li(l, r) || (l = Ju(), en.lanes |= l, Li |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Gn = !0), n.memoizedState = l);
  }
  function ws(n, r) {
    var l = Zt;
    Zt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Jt.transition;
    Jt.transition = {};
    try {
      n(!1), r();
    } finally {
      Zt = l, Jt.transition = o;
    }
  }
  function Ld() {
    return Hn().memoizedState;
  }
  function xs(n, r, l) {
    var o = zi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, aa(n)) Wv(r, l);
    else if (l = kd(n, r, l, o), l !== null) {
      var c = Zn();
      Vr(l, n, o, c), yn(l, r, o);
    }
  }
  function ku(n, r, l) {
    var o = zi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (aa(n)) Wv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, w = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = w, li(w, m)) {
          var b = r.interleaved;
          b === null ? (c.next = c, _d(r)) : (c.next = b.next, b.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = kd(n, r, c, o), l !== null && (c = Zn(), Vr(l, n, o, c), yn(l, r, o));
    }
  }
  function aa(n) {
    var r = n.alternate;
    return n === en || r !== null && r === en;
  }
  function Wv(n, r) {
    Ss = Fc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function yn(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ii(n, l);
    }
  }
  var Du = { readContext: Pa, useCallback: Xt, useContext: Xt, useEffect: Xt, useImperativeHandle: Xt, useInsertionEffect: Xt, useLayoutEffect: Xt, useMemo: Xt, useReducer: Xt, useRef: Xt, useState: Xt, useDebugValue: Xt, useDeferredValue: Xt, useTransition: Xt, useMutableSource: Xt, useSyncExternalStore: Xt, useId: Xt, unstable_isNewReconciler: !1 }, Jc = { readContext: Pa, useCallback: function(n, r) {
    return Or().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Pa, useEffect: Kc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Eo(
      4194308,
      4,
      _u.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Eo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Eo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Or();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Or();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = xs.bind(null, en, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Or();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Wc, useDebugValue: Rs, useDeferredValue: function(n) {
    return Or().memoizedState = n;
  }, useTransition: function() {
    var n = Wc(!1), r = n[0];
    return n = ws.bind(null, n[1]), Or().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = en, c = Or();
    if (Tn) {
      if (l === void 0) throw Error(E(407));
      l = l();
    } else {
      if (l = r(), rr === null) throw Error(E(349));
      pn & 30 || Vc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Kc($c.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, bu(9, Bc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Or(), r = rr.identifierPrefix;
    if (Tn) {
      var l = ki, o = _i;
      l = (o & ~(1 << 32 - Ar(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = xu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ie++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ts = {
    readContext: Pa,
    useCallback: qc,
    useContext: Pa,
    useEffect: Es,
    useImperativeHandle: Xc,
    useInsertionEffect: Gc,
    useLayoutEffect: Cs,
    useMemo: Zc,
    useReducer: jl,
    useRef: Qc,
    useState: function() {
      return jl(el);
    },
    useDebugValue: Rs,
    useDeferredValue: function(n) {
      var r = Hn();
      return Nd(r, Kn.memoizedState, n);
    },
    useTransition: function() {
      var n = jl(el)[0], r = Hn().memoizedState;
      return [n, r];
    },
    useMutableSource: Hc,
    useSyncExternalStore: Pc,
    useId: Ld,
    unstable_isNewReconciler: !1
  }, ef = { readContext: Pa, useCallback: qc, useContext: Pa, useEffect: Es, useImperativeHandle: Xc, useInsertionEffect: Gc, useLayoutEffect: Cs, useMemo: Zc, useReducer: Tu, useRef: Qc, useState: function() {
    return Tu(el);
  }, useDebugValue: Rs, useDeferredValue: function(n) {
    var r = Hn();
    return Kn === null ? r.memoizedState = n : Nd(r, Kn.memoizedState, n);
  }, useTransition: function() {
    var n = Tu(el)[0], r = Hn().memoizedState;
    return [n, r];
  }, useMutableSource: Hc, useSyncExternalStore: Pc, useId: Ld, unstable_isNewReconciler: !1 };
  function si(n, r) {
    if (n && n.defaultProps) {
      r = we({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function zd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : we({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var tf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Et(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Zn(), c = zi(n), d = Ji(o, c);
    d.payload = r, l != null && (d.callback = l), r = Al(n, d, c), r !== null && (Vr(r, n, c, o), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Zn(), c = zi(n), d = Ji(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Al(n, d, c), r !== null && (Vr(r, n, c, o), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Zn(), o = zi(n), c = Ji(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Al(n, c, o), r !== null && (Vr(r, n, o, l), Ac(r, n, o));
  } };
  function Qv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !as(l, o) || !as(c, d) : !0;
  }
  function nf(n, r, l) {
    var o = !1, c = Dr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Pa(d) : (c = Wn(r) ? Jr : An.current, o = r.contextTypes, d = (o = o != null) ? ea(n, c) : Dr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Kv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && tf.enqueueReplaceState(r, r.state, null);
  }
  function bs(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Dd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Pa(d) : (d = Wn(r) ? Jr : An.current, c.context = ea(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (zd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && tf.enqueueReplaceState(c, c.state, null), vs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ou(n, r) {
    try {
      var l = "", o = r;
      do
        l += Tt(o), o = o.return;
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
    l = Ji(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      _o || (_o = !0, Lu = o), Ud(n, r);
    }, l;
  }
  function jd(n, r, l) {
    l = Ji(-1, l), l.tag = 3;
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
      Ud(n, r), typeof o != "function" && (Pl === null ? Pl = /* @__PURE__ */ new Set([this]) : Pl.add(this));
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
  function Fl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Ji(-1, 1), r.tag = 2, Al(l, r, 1))), l.lanes |= 1), n);
  }
  var _s = he.ReactCurrentOwner, Gn = !1;
  function mr(n, r, l, o) {
    r.child = n === null ? De(r, null, l, o) : Fn(r, n.child, l, o);
  }
  function ia(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return On(r, c), o = Ul(n, r, l, o, d, c), l = oi(), n !== null && !Gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ba(n, r, c)) : (Tn && l && Mc(r), r.flags |= 1, mr(n, r, o, c), r.child);
  }
  function Mu(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Zd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, xt(n, r, d, o, c)) : (n = $s(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : as, l(m, o) && n.ref === r.ref) return Ba(n, r, c);
    }
    return r.flags |= 1, n = Bl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function xt(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (as(d, o) && n.ref === r.ref) if (Gn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Gn = !0);
      else return r.lanes = n.lanes, Ba(n, r, c);
    }
    return qv(n, r, l, o, c);
  }
  function ks(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ke(xo, Ca), Ca |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ke(xo, Ca), Ca |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Ke(xo, Ca), Ca |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Ke(xo, Ca), Ca |= o;
    return mr(n, r, c, l), r.child;
  }
  function Hd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qv(n, r, l, o, c) {
    var d = Wn(l) ? Jr : An.current;
    return d = ea(r, d), On(r, c), l = Ul(n, r, l, o, d, c), o = oi(), n !== null && !Gn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ba(n, r, c)) : (Tn && o && Mc(r), r.flags |= 1, mr(n, r, l, c), r.child);
  }
  function Zv(n, r, l, o, c) {
    if (Wn(l)) {
      var d = !0;
      lr(r);
    } else d = !1;
    if (On(r, c), r.stateNode === null) Va(n, r), nf(r, l, o), bs(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, w = r.memoizedProps;
      m.props = w;
      var b = m.context, $ = l.contextType;
      typeof $ == "object" && $ !== null ? $ = Pa($) : ($ = Wn(l) ? Jr : An.current, $ = ea(r, $));
      var se = l.getDerivedStateFromProps, pe = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      pe || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (w !== o || b !== $) && Kv(r, m, o, $), Ea = !1;
      var le = r.memoizedState;
      m.state = le, vs(r, o, m, c), b = r.memoizedState, w !== o || le !== b || tr.current || Ea ? (typeof se == "function" && (zd(r, l, se, o), b = r.memoizedState), (w = Ea || Qv(r, l, w, o, le, b, $)) ? (pe || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = b), m.props = o, m.state = b, m.context = $, o = w) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, $v(n, r), w = r.memoizedProps, $ = r.type === r.elementType ? w : si(r.type, w), m.props = $, pe = r.pendingProps, le = m.context, b = l.contextType, typeof b == "object" && b !== null ? b = Pa(b) : (b = Wn(l) ? Jr : An.current, b = ea(r, b));
      var Le = l.getDerivedStateFromProps;
      (se = typeof Le == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (w !== pe || le !== b) && Kv(r, m, o, b), Ea = !1, le = r.memoizedState, m.state = le, vs(r, o, m, c);
      var Ve = r.memoizedState;
      w !== pe || le !== Ve || tr.current || Ea ? (typeof Le == "function" && (zd(r, l, Le, o), Ve = r.memoizedState), ($ = Ea || Qv(r, l, $, o, le, Ve, b) || !1) ? (se || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ve, b), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ve, b)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || w === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ve), m.props = o, m.state = Ve, m.context = b, o = $) : (typeof m.componentDidUpdate != "function" || w === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ds(n, r, l, o, d, c);
  }
  function Ds(n, r, l, o, c, d) {
    Hd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Dc(r, l, !1), Ba(n, r, d);
    o = r.stateNode, _s.current = r;
    var w = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Fn(r, n.child, null, d), r.child = Fn(r, null, w, d)) : mr(n, r, w, d), r.memoizedState = o.state, c && Dc(r, l, !0), r.child;
  }
  function Ro(n) {
    var r = n.stateNode;
    r.pendingContext ? Hv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Hv(n, r.context, !1), Md(n, r.containerInfo);
  }
  function Jv(n, r, l, o, c) {
    return zl(), Zi(c), r.flags |= 256, mr(n, r, l, o), r.child;
  }
  var af = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function lf(n, r, l) {
    var o = r.pendingProps, c = Mn.current, d = !1, m = (r.flags & 128) !== 0, w;
    if ((w = m) || (w = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), w ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ke(Mn, c & 1), n === null)
      return Rd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = $l(m, o, 0, null), n = al(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Pd(l), r.memoizedState = af, n) : Vd(r, m));
    if (c = n.memoizedState, c !== null && (w = c.dehydrated, w !== null)) return eh(n, r, m, o, w, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, w = c.sibling;
      var b = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = b, r.deletions = null) : (o = Bl(c, b), o.subtreeFlags = c.subtreeFlags & 14680064), w !== null ? d = Bl(w, d) : (d = al(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Pd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = af, o;
    }
    return d = n.child, n = d.sibling, o = Bl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Vd(n, r) {
    return r = $l({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Os(n, r, l, o) {
    return o !== null && Zi(o), Fn(r, n.child, null, l), n = Vd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function eh(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ad(Error(E(422))), Os(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = $l({ mode: "visible", children: o.children }, c, 0, null), d = al(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Fn(r, n.child, null, m), r.child.memoizedState = Pd(m), r.memoizedState = af, d);
    if (!(r.mode & 1)) return Os(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var w = o.dgst;
      return o = w, d = Error(E(419)), o = Ad(d, o, void 0), Os(n, r, m, o);
    }
    if (w = (m & n.childLanes) !== 0, Gn || w) {
      if (o = rr, o !== null) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Sa(n, c), Vr(o, n, c, -1));
      }
      return qd(), o = Ad(Error(E(421))), Os(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = _y.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, na = wi(c.nextSibling), ta = r, Tn = !0, Ha = null, n !== null && (Qn[Fa++] = _i, Qn[Fa++] = ki, Qn[Fa++] = ya, _i = n.id, ki = n.overflow, ya = r), r = Vd(r, o.children), r.flags |= 4096, r);
  }
  function Bd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), bd(n.return, r, l);
  }
  function Fr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Oi(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (mr(n, r, o.children, l), o = Mn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
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
    if (Ke(Mn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && jc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Fr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && jc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Fr(r, !0, l, null, d);
        break;
      case "together":
        Fr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Va(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ba(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Li |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(E(153));
    if (r.child !== null) {
      for (n = r.child, l = Bl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Bl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ms(n, r, l) {
    switch (r.tag) {
      case 3:
        Ro(r), zl();
        break;
      case 5:
        Yv(r);
        break;
      case 1:
        Wn(r.type) && lr(r);
        break;
      case 4:
        Md(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ke(ga, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ke(Mn, Mn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? lf(n, r, l) : (Ke(Mn, Mn.current & 1), n = Ba(n, r, l), n !== null ? n.sibling : null);
        Ke(Mn, Mn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Oi(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ke(Mn, Mn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ks(n, r, l);
    }
    return Ba(n, r, l);
  }
  var $a, Xn, th, nh;
  $a = function(n, r) {
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
  }, Xn = function() {
  }, th = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Ru(Di.current);
      var d = null;
      switch (l) {
        case "input":
          c = In(n, c), o = In(n, o), d = [];
          break;
        case "select":
          c = we({}, c, { value: void 0 }), o = we({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = re(n, c), o = re(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = kl);
      }
      an(l, o);
      var m;
      l = null;
      for ($ in c) if (!o.hasOwnProperty($) && c.hasOwnProperty($) && c[$] != null) if ($ === "style") {
        var w = c[$];
        for (m in w) w.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (z.hasOwnProperty($) ? d || (d = []) : (d = d || []).push($, null));
      for ($ in o) {
        var b = o[$];
        if (w = c != null ? c[$] : void 0, o.hasOwnProperty($) && b !== w && (b != null || w != null)) if ($ === "style") if (w) {
          for (m in w) !w.hasOwnProperty(m) || b && b.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in b) b.hasOwnProperty(m) && w[m] !== b[m] && (l || (l = {}), l[m] = b[m]);
        } else l || (d || (d = []), d.push(
          $,
          l
        )), l = b;
        else $ === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, w = w ? w.__html : void 0, b != null && w !== b && (d = d || []).push($, b)) : $ === "children" ? typeof b != "string" && typeof b != "number" || (d = d || []).push($, "" + b) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (z.hasOwnProperty($) ? (b != null && $ === "onScroll" && un("scroll", n), d || w === b || (d = [])) : (d = d || []).push($, b));
      }
      l && (d = d || []).push("style", l);
      var $ = d;
      (r.updateQueue = $) && (r.flags |= 4);
    }
  }, nh = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ns(n, r) {
    if (!Tn) switch (n.tailMode) {
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
  function or(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function rh(n, r, l) {
    var o = r.pendingProps;
    switch (Nc(r), r.tag) {
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
        return or(r), null;
      case 1:
        return Wn(r.type) && yo(), or(r), null;
      case 3:
        return o = r.stateNode, wu(), En(tr), En(An), Ze(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Lc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ha !== null && (zu(Ha), Ha = null))), Xn(n, r), or(r), null;
      case 5:
        Uc(r);
        var c = Ru(ys.current);
        if (l = r.type, n !== null && r.stateNode != null) th(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(E(166));
            return or(r), null;
          }
          if (n = Ru(Di.current), Lc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[xi] = r, o[cs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                un("cancel", o), un("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                un("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < us.length; c++) un(us[c], o);
                break;
              case "source":
                un("error", o);
                break;
              case "img":
              case "image":
              case "link":
                un(
                  "error",
                  o
                ), un("load", o);
                break;
              case "details":
                un("toggle", o);
                break;
              case "input":
                Ln(o, d), un("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, un("invalid", o);
                break;
              case "textarea":
                me(o, d), un("invalid", o);
            }
            an(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var w = d[m];
              m === "children" ? typeof w == "string" ? o.textContent !== w && (d.suppressHydrationWarning !== !0 && Tc(o.textContent, w, n), c = ["children", w]) : typeof w == "number" && o.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && Tc(
                o.textContent,
                w,
                n
              ), c = ["children", "" + w]) : z.hasOwnProperty(m) && w != null && m === "onScroll" && un("scroll", o);
            }
            switch (l) {
              case "input":
                _n(o), va(o, d, !0);
                break;
              case "textarea":
                _n(o), _e(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = kl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Me(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[xi] = r, n[cs] = o, $a(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Gt(l, o), l) {
                case "dialog":
                  un("cancel", n), un("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  un("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < us.length; c++) un(us[c], n);
                  c = o;
                  break;
                case "source":
                  un("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  un(
                    "error",
                    n
                  ), un("load", n), c = o;
                  break;
                case "details":
                  un("toggle", n), c = o;
                  break;
                case "input":
                  Ln(n, o), c = In(n, o), un("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = we({}, o, { value: void 0 }), un("invalid", n);
                  break;
                case "textarea":
                  me(n, o), c = re(n, o), un("invalid", n);
                  break;
                default:
                  c = o;
              }
              an(l, c), w = c;
              for (d in w) if (w.hasOwnProperty(d)) {
                var b = w[d];
                d === "style" ? Pt(n, b) : d === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, b != null && Ht(n, b)) : d === "children" ? typeof b == "string" ? (l !== "textarea" || b !== "") && W(n, b) : typeof b == "number" && W(n, "" + b) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (z.hasOwnProperty(d) ? b != null && d === "onScroll" && un("scroll", n) : b != null && Ce(n, d, b, m));
              }
              switch (l) {
                case "input":
                  _n(n), va(n, o, !1);
                  break;
                case "textarea":
                  _n(n), _e(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + St(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? M(n, !!o.multiple, d, !1) : o.defaultValue != null && M(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = kl);
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
        return or(r), null;
      case 6:
        if (n && r.stateNode != null) nh(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(E(166));
          if (l = Ru(ys.current), Ru(Di.current), Lc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[xi] = r, (d = o.nodeValue !== l) && (n = ta, n !== null)) switch (n.tag) {
              case 3:
                Tc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Tc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[xi] = r, r.stateNode = o;
        }
        return or(r), null;
      case 13:
        if (En(Mn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Tn && na !== null && r.mode & 1 && !(r.flags & 128)) ps(), zl(), r.flags |= 98560, d = !1;
          else if (d = Lc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(E(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(E(317));
              d[xi] = r;
            } else zl(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            or(r), d = !1;
          } else Ha !== null && (zu(Ha), Ha = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Mn.current & 1 ? Vn === 0 && (Vn = 3) : qd())), r.updateQueue !== null && (r.flags |= 4), or(r), null);
      case 4:
        return wu(), Xn(n, r), n === null && fo(r.stateNode.containerInfo), or(r), null;
      case 10:
        return Td(r.type._context), or(r), null;
      case 17:
        return Wn(r.type) && yo(), or(r), null;
      case 19:
        if (En(Mn), d = r.memoizedState, d === null) return or(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ns(d, !1);
        else {
          if (Vn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = jc(n), m !== null) {
              for (r.flags |= 128, Ns(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Ke(Mn, Mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ct() > bo && (r.flags |= 128, o = !0, Ns(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = jc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ns(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !Tn) return or(r), null;
          } else 2 * Ct() - d.renderingStartTime > bo && l !== 1073741824 && (r.flags |= 128, o = !0, Ns(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ct(), r.sibling = null, l = Mn.current, Ke(Mn, o ? l & 1 | 2 : l & 1), r) : (or(r), null);
      case 22:
      case 23:
        return Xd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Ca & 1073741824 && (or(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : or(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(E(156, r.tag));
  }
  function uf(n, r) {
    switch (Nc(r), r.tag) {
      case 1:
        return Wn(r.type) && yo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wu(), En(tr), En(An), Ze(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Uc(r), null;
      case 13:
        if (En(Mn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(E(340));
          zl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return En(Mn), null;
      case 4:
        return wu(), null;
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
  var Ls = !1, Mr = !1, Ey = typeof WeakSet == "function" ? WeakSet : Set, Ue = null;
  function wo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      bn(n, r, o);
    }
    else l.current = null;
  }
  function of(n, r, l) {
    try {
      l();
    } catch (o) {
      bn(n, r, o);
    }
  }
  var ah = !1;
  function ih(n, r) {
    if (ss = za, n = is(), yc(n)) {
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
          var m = 0, w = -1, b = -1, $ = 0, se = 0, pe = n, le = null;
          t: for (; ; ) {
            for (var Le; pe !== l || c !== 0 && pe.nodeType !== 3 || (w = m + c), pe !== d || o !== 0 && pe.nodeType !== 3 || (b = m + o), pe.nodeType === 3 && (m += pe.nodeValue.length), (Le = pe.firstChild) !== null; )
              le = pe, pe = Le;
            for (; ; ) {
              if (pe === n) break t;
              if (le === l && ++$ === c && (w = m), le === d && ++se === o && (b = m), (Le = pe.nextSibling) !== null) break;
              pe = le, le = pe.parentNode;
            }
            pe = Le;
          }
          l = w === -1 || b === -1 ? null : { start: w, end: b };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (mu = { focusedElem: n, selectionRange: l }, za = !1, Ue = r; Ue !== null; ) if (r = Ue, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ue = n;
    else for (; Ue !== null; ) {
      r = Ue;
      try {
        var Ve = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ve !== null) {
              var Ye = Ve.memoizedProps, Bn = Ve.memoizedState, L = r.stateNode, k = L.getSnapshotBeforeUpdate(r.elementType === r.type ? Ye : si(r.type, Ye), Bn);
              L.__reactInternalSnapshotBeforeUpdate = k;
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
            throw Error(E(163));
        }
      } catch (ce) {
        bn(r, r.return, ce);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ue = n;
        break;
      }
      Ue = r.return;
    }
    return Ve = ah, ah = !1, Ve;
  }
  function zs(n, r, l) {
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
  function As(n, r) {
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
    r !== null && (n.alternate = null, sf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[xi], delete r[cs], delete r[fs], delete r[mo], delete r[gy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Us(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function tl(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Us(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Mi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = kl));
    else if (o !== 4 && (n = n.child, n !== null)) for (Mi(n, r, l), n = n.sibling; n !== null; ) Mi(n, r, l), n = n.sibling;
  }
  function Ni(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ni(n, r, l), n = n.sibling; n !== null; ) Ni(n, r, l), n = n.sibling;
  }
  var Pn = null, Hr = !1;
  function Pr(n, r, l) {
    for (l = l.child; l !== null; ) lh(n, r, l), l = l.sibling;
  }
  function lh(n, r, l) {
    if (qr && typeof qr.onCommitFiberUnmount == "function") try {
      qr.onCommitFiberUnmount(Sl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Mr || wo(l, r);
      case 6:
        var o = Pn, c = Hr;
        Pn = null, Pr(n, r, l), Pn = o, Hr = c, Pn !== null && (Hr ? (n = Pn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Pn.removeChild(l.stateNode));
        break;
      case 18:
        Pn !== null && (Hr ? (n = Pn, l = l.stateNode, n.nodeType === 8 ? ho(n.parentNode, l) : n.nodeType === 1 && ho(n, l), ai(n)) : ho(Pn, l.stateNode));
        break;
      case 4:
        o = Pn, c = Hr, Pn = l.stateNode.containerInfo, Hr = !0, Pr(n, r, l), Pn = o, Hr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Mr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && of(l, r, m), c = c.next;
          } while (c !== o);
        }
        Pr(n, r, l);
        break;
      case 1:
        if (!Mr && (wo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (w) {
          bn(l, r, w);
        }
        Pr(n, r, l);
        break;
      case 21:
        Pr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Mr = (o = Mr) || l.memoizedState !== null, Pr(n, r, l), Mr = o) : Pr(n, r, l);
        break;
      default:
        Pr(n, r, l);
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
  function ci(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, w = m;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 5:
              Pn = w.stateNode, Hr = !1;
              break e;
            case 3:
              Pn = w.stateNode.containerInfo, Hr = !0;
              break e;
            case 4:
              Pn = w.stateNode.containerInfo, Hr = !0;
              break e;
          }
          w = w.return;
        }
        if (Pn === null) throw Error(E(160));
        lh(d, m, c), Pn = null, Hr = !1;
        var b = c.alternate;
        b !== null && (b.return = null), c.return = null;
      } catch ($) {
        bn(c, r, $);
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
        if (ci(r, n), la(n), o & 4) {
          try {
            zs(3, n, n.return), As(3, n);
          } catch (Ye) {
            bn(n, n.return, Ye);
          }
          try {
            zs(5, n, n.return);
          } catch (Ye) {
            bn(n, n.return, Ye);
          }
        }
        break;
      case 1:
        ci(r, n), la(n), o & 512 && l !== null && wo(l, l.return);
        break;
      case 5:
        if (ci(r, n), la(n), o & 512 && l !== null && wo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            W(c, "");
          } catch (Ye) {
            bn(n, n.return, Ye);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, w = n.type, b = n.updateQueue;
          if (n.updateQueue = null, b !== null) try {
            w === "input" && d.type === "radio" && d.name != null && zn(c, d), Gt(w, m);
            var $ = Gt(w, d);
            for (m = 0; m < b.length; m += 2) {
              var se = b[m], pe = b[m + 1];
              se === "style" ? Pt(c, pe) : se === "dangerouslySetInnerHTML" ? Ht(c, pe) : se === "children" ? W(c, pe) : Ce(c, se, pe, $);
            }
            switch (w) {
              case "input":
                fr(c, d);
                break;
              case "textarea":
                be(c, d);
                break;
              case "select":
                var le = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Le = d.value;
                Le != null ? M(c, !!d.multiple, Le, !1) : le !== !!d.multiple && (d.defaultValue != null ? M(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : M(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[cs] = d;
          } catch (Ye) {
            bn(n, n.return, Ye);
          }
        }
        break;
      case 6:
        if (ci(r, n), la(n), o & 4) {
          if (n.stateNode === null) throw Error(E(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ye) {
            bn(n, n.return, Ye);
          }
        }
        break;
      case 3:
        if (ci(r, n), la(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ai(r.containerInfo);
        } catch (Ye) {
          bn(n, n.return, Ye);
        }
        break;
      case 4:
        ci(r, n), la(n);
        break;
      case 13:
        ci(r, n), la(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Qd = Ct())), o & 4 && uh(n);
        break;
      case 22:
        if (se = l !== null && l.memoizedState !== null, n.mode & 1 ? (Mr = ($ = Mr) || se, ci(r, n), Mr = $) : ci(r, n), la(n), o & 8192) {
          if ($ = n.memoizedState !== null, (n.stateNode.isHidden = $) && !se && n.mode & 1) for (Ue = n, se = n.child; se !== null; ) {
            for (pe = Ue = se; Ue !== null; ) {
              switch (le = Ue, Le = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zs(4, le, le.return);
                  break;
                case 1:
                  wo(le, le.return);
                  var Ve = le.stateNode;
                  if (typeof Ve.componentWillUnmount == "function") {
                    o = le, l = le.return;
                    try {
                      r = o, Ve.props = r.memoizedProps, Ve.state = r.memoizedState, Ve.componentWillUnmount();
                    } catch (Ye) {
                      bn(o, l, Ye);
                    }
                  }
                  break;
                case 5:
                  wo(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    js(pe);
                    continue;
                  }
              }
              Le !== null ? (Le.return = le, Ue = Le) : js(pe);
            }
            se = se.sibling;
          }
          e: for (se = null, pe = n; ; ) {
            if (pe.tag === 5) {
              if (se === null) {
                se = pe;
                try {
                  c = pe.stateNode, $ ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (w = pe.stateNode, b = pe.memoizedProps.style, m = b != null && b.hasOwnProperty("display") ? b.display : null, w.style.display = ft("display", m));
                } catch (Ye) {
                  bn(n, n.return, Ye);
                }
              }
            } else if (pe.tag === 6) {
              if (se === null) try {
                pe.stateNode.nodeValue = $ ? "" : pe.memoizedProps;
              } catch (Ye) {
                bn(n, n.return, Ye);
              }
            } else if ((pe.tag !== 22 && pe.tag !== 23 || pe.memoizedState === null || pe === n) && pe.child !== null) {
              pe.child.return = pe, pe = pe.child;
              continue;
            }
            if (pe === n) break e;
            for (; pe.sibling === null; ) {
              if (pe.return === null || pe.return === n) break e;
              se === pe && (se = null), pe = pe.return;
            }
            se === pe && (se = null), pe.sibling.return = pe.return, pe = pe.sibling;
          }
        }
        break;
      case 19:
        ci(r, n), la(n), o & 4 && uh(n);
        break;
      case 21:
        break;
      default:
        ci(
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
            if (Us(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(E(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (W(c, ""), o.flags &= -33);
            var d = tl(n);
            Ni(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, w = tl(n);
            Mi(n, w, m);
            break;
          default:
            throw Error(E(161));
        }
      } catch (b) {
        bn(n, n.return, b);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Cy(n, r, l) {
    Ue = n, Yd(n);
  }
  function Yd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Ue !== null; ) {
      var c = Ue, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ls;
        if (!m) {
          var w = c.alternate, b = w !== null && w.memoizedState !== null || Mr;
          w = Ls;
          var $ = Mr;
          if (Ls = m, (Mr = b) && !$) for (Ue = c; Ue !== null; ) m = Ue, b = m.child, m.tag === 22 && m.memoizedState !== null ? Wd(c) : b !== null ? (b.return = m, Ue = b) : Wd(c);
          for (; d !== null; ) Ue = d, Yd(d), d = d.sibling;
          Ue = c, Ls = w, Mr = $;
        }
        oh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Ue = d) : oh(n);
    }
  }
  function oh(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Mr || As(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Mr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : si(r.type, l.memoizedProps);
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
              var w = r.stateNode;
              if (l === null && r.flags & 4) {
                l = w;
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
                var $ = r.alternate;
                if ($ !== null) {
                  var se = $.memoizedState;
                  if (se !== null) {
                    var pe = se.dehydrated;
                    pe !== null && ai(pe);
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
              throw Error(E(163));
          }
          Mr || r.flags & 512 && $d(r);
        } catch (le) {
          bn(r, r.return, le);
        }
      }
      if (r === n) {
        Ue = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Ue = l;
        break;
      }
      Ue = r.return;
    }
  }
  function js(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      if (r === n) {
        Ue = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Ue = l;
        break;
      }
      Ue = r.return;
    }
  }
  function Wd(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              As(4, r);
            } catch (b) {
              bn(r, l, b);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (b) {
                bn(r, c, b);
              }
            }
            var d = r.return;
            try {
              $d(r);
            } catch (b) {
              bn(r, d, b);
            }
            break;
          case 5:
            var m = r.return;
            try {
              $d(r);
            } catch (b) {
              bn(r, m, b);
            }
        }
      } catch (b) {
        bn(r, r.return, b);
      }
      if (r === n) {
        Ue = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, Ue = w;
        break;
      }
      Ue = r.return;
    }
  }
  var Ry = Math.ceil, Hl = he.ReactCurrentDispatcher, Nu = he.ReactCurrentOwner, yr = he.ReactCurrentBatchConfig, It = 0, rr = null, qn = null, gr = 0, Ca = 0, xo = ja(0), Vn = 0, Fs = null, Li = 0, To = 0, cf = 0, Hs = null, ua = null, Qd = 0, bo = 1 / 0, Ra = null, _o = !1, Lu = null, Pl = null, ff = !1, nl = null, Ps = 0, Vl = 0, ko = null, Vs = -1, Nr = 0;
  function Zn() {
    return It & 6 ? Ct() : Vs !== -1 ? Vs : Vs = Ct();
  }
  function zi(n) {
    return n.mode & 1 ? It & 2 && gr !== 0 ? gr & -gr : Sy.transition !== null ? (Nr === 0 && (Nr = Ju()), Nr) : (n = Zt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : lo(n.type)), n) : 1;
  }
  function Vr(n, r, l, o) {
    if (50 < Vl) throw Vl = 0, ko = null, Error(E(185));
    $i(n, l, o), (!(It & 2) || n !== rr) && (n === rr && (!(It & 2) && (To |= l), Vn === 4 && fi(n, gr)), oa(n, o), l === 1 && It === 0 && !(r.mode & 1) && (bo = Ct() + 500, go && bi()));
  }
  function oa(n, r) {
    var l = n.callbackNode;
    uu(n, r);
    var o = ri(n, n === rr ? gr : 0);
    if (o === 0) l !== null && pr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && pr(l), r === 1) n.tag === 0 ? Ol(Kd.bind(null, n)) : Oc(Kd.bind(null, n)), vo(function() {
        !(It & 6) && bi();
      }), l = null;
      else {
        switch (to(o)) {
          case 1:
            l = ti;
            break;
          case 4:
            l = iu;
            break;
          case 16:
            l = lu;
            break;
          case 536870912:
            l = Xu;
            break;
          default:
            l = lu;
        }
        l = gh(l, df.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function df(n, r) {
    if (Vs = -1, Nr = 0, It & 6) throw Error(E(327));
    var l = n.callbackNode;
    if (Do() && n.callbackNode !== l) return null;
    var o = ri(n, n === rr ? gr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = pf(n, o);
    else {
      r = o;
      var c = It;
      It |= 2;
      var d = ch();
      (rr !== n || gr !== r) && (Ra = null, bo = Ct() + 500, rl(n, r));
      do
        try {
          fh();
          break;
        } catch (w) {
          sh(n, w);
        }
      while (!0);
      xd(), Hl.current = d, It = c, qn !== null ? r = 0 : (rr = null, gr = 0, r = Vn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Cl(n), c !== 0 && (o = c, r = Bs(n, c))), r === 1) throw l = Fs, rl(n, 0), fi(n, o), oa(n, Ct()), l;
      if (r === 6) fi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !wy(c) && (r = pf(n, o), r === 2 && (d = Cl(n), d !== 0 && (o = d, r = Bs(n, d))), r === 1)) throw l = Fs, rl(n, 0), fi(n, o), oa(n, Ct()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(E(345));
          case 2:
            Uu(n, ua, Ra);
            break;
          case 3:
            if (fi(n, o), (o & 130023424) === o && (r = Qd + 500 - Ct(), 10 < r)) {
              if (ri(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Zn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = _c(Uu.bind(null, n, ua, Ra), r);
              break;
            }
            Uu(n, ua, Ra);
            break;
          case 4:
            if (fi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Ar(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ct() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Ry(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = _c(Uu.bind(null, n, ua, Ra), o);
              break;
            }
            Uu(n, ua, Ra);
            break;
          case 5:
            Uu(n, ua, Ra);
            break;
          default:
            throw Error(E(329));
        }
      }
    }
    return oa(n, Ct()), n.callbackNode === l ? df.bind(null, n) : null;
  }
  function Bs(n, r) {
    var l = Hs;
    return n.current.memoizedState.isDehydrated && (rl(n, r).flags |= 256), n = pf(n, r), n !== 2 && (r = ua, ua = l, r !== null && zu(r)), n;
  }
  function zu(n) {
    ua === null ? ua = n : ua.push.apply(ua, n);
  }
  function wy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!li(d(), c)) return !1;
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
  function fi(n, r) {
    for (r &= ~cf, r &= ~To, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Ar(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Kd(n) {
    if (It & 6) throw Error(E(327));
    Do();
    var r = ri(n, 0);
    if (!(r & 1)) return oa(n, Ct()), null;
    var l = pf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Cl(n);
      o !== 0 && (r = o, l = Bs(n, o));
    }
    if (l === 1) throw l = Fs, rl(n, 0), fi(n, r), oa(n, Ct()), l;
    if (l === 6) throw Error(E(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Uu(n, ua, Ra), oa(n, Ct()), null;
  }
  function Gd(n, r) {
    var l = It;
    It |= 1;
    try {
      return n(r);
    } finally {
      It = l, It === 0 && (bo = Ct() + 500, go && bi());
    }
  }
  function Au(n) {
    nl !== null && nl.tag === 0 && !(It & 6) && Do();
    var r = It;
    It |= 1;
    var l = yr.transition, o = Zt;
    try {
      if (yr.transition = null, Zt = 1, n) return n();
    } finally {
      Zt = o, yr.transition = l, It = r, !(It & 6) && bi();
    }
  }
  function Xd() {
    Ca = xo.current, En(xo);
  }
  function rl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Sd(l)), qn !== null) for (l = qn.return; l !== null; ) {
      var o = l;
      switch (Nc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && yo();
          break;
        case 3:
          wu(), En(tr), En(An), Ze();
          break;
        case 5:
          Uc(o);
          break;
        case 4:
          wu();
          break;
        case 13:
          En(Mn);
          break;
        case 19:
          En(Mn);
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
    if (rr = n, qn = n = Bl(n.current, null), gr = Ca = r, Vn = 0, Fs = null, cf = To = Li = 0, ua = Hs = null, Cu !== null) {
      for (r = 0; r < Cu.length; r++) if (l = Cu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      Cu = null;
    }
    return n;
  }
  function sh(n, r) {
    do {
      var l = qn;
      try {
        if (xd(), Ot.current = Du, Fc) {
          for (var o = en.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Fc = !1;
        }
        if (pn = 0, ur = Kn = en = null, Ss = !1, xu = 0, Nu.current = null, l === null || l.return === null) {
          Vn = 1, Fs = r, qn = null;
          break;
        }
        e: {
          var d = n, m = l.return, w = l, b = r;
          if (r = gr, w.flags |= 32768, b !== null && typeof b == "object" && typeof b.then == "function") {
            var $ = b, se = w, pe = se.tag;
            if (!(se.mode & 1) && (pe === 0 || pe === 11 || pe === 15)) {
              var le = se.alternate;
              le ? (se.updateQueue = le.updateQueue, se.memoizedState = le.memoizedState, se.lanes = le.lanes) : (se.updateQueue = null, se.memoizedState = null);
            }
            var Le = Xv(m);
            if (Le !== null) {
              Le.flags &= -257, Fl(Le, m, w, d, r), Le.mode & 1 && Fd(d, $, r), r = Le, b = $;
              var Ve = r.updateQueue;
              if (Ve === null) {
                var Ye = /* @__PURE__ */ new Set();
                Ye.add(b), r.updateQueue = Ye;
              } else Ve.add(b);
              break e;
            } else {
              if (!(r & 1)) {
                Fd(d, $, r), qd();
                break e;
              }
              b = Error(E(426));
            }
          } else if (Tn && w.mode & 1) {
            var Bn = Xv(m);
            if (Bn !== null) {
              !(Bn.flags & 65536) && (Bn.flags |= 256), Fl(Bn, m, w, d, r), Zi(Ou(b, w));
              break e;
            }
          }
          d = b = Ou(b, w), Vn !== 4 && (Vn = 2), Hs === null ? Hs = [d] : Hs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var L = Gv(d, b, r);
                Iv(d, L);
                break e;
              case 1:
                w = b;
                var k = d.type, F = d.stateNode;
                if (!(d.flags & 128) && (typeof k.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && (Pl === null || !Pl.has(F)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ce = jd(d, w, r);
                  Iv(d, ce);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ph(l);
      } catch (Be) {
        r = Be, qn === l && l !== null && (qn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ch() {
    var n = Hl.current;
    return Hl.current = Du, n === null ? Du : n;
  }
  function qd() {
    (Vn === 0 || Vn === 3 || Vn === 2) && (Vn = 4), rr === null || !(Li & 268435455) && !(To & 268435455) || fi(rr, gr);
  }
  function pf(n, r) {
    var l = It;
    It |= 2;
    var o = ch();
    (rr !== n || gr !== r) && (Ra = null, rl(n, r));
    do
      try {
        xy();
        break;
      } catch (c) {
        sh(n, c);
      }
    while (!0);
    if (xd(), It = l, Hl.current = o, qn !== null) throw Error(E(261));
    return rr = null, gr = 0, Vn;
  }
  function xy() {
    for (; qn !== null; ) dh(qn);
  }
  function fh() {
    for (; qn !== null && !Ja(); ) dh(qn);
  }
  function dh(n) {
    var r = yh(n.alternate, n, Ca);
    n.memoizedProps = n.pendingProps, r === null ? ph(n) : qn = r, Nu.current = null;
  }
  function ph(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = uf(l, r), l !== null) {
          l.flags &= 32767, qn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Vn = 6, qn = null;
          return;
        }
      } else if (l = rh(l, r, Ca), l !== null) {
        qn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        qn = r;
        return;
      }
      qn = r = n;
    } while (r !== null);
    Vn === 0 && (Vn = 5);
  }
  function Uu(n, r, l) {
    var o = Zt, c = yr.transition;
    try {
      yr.transition = null, Zt = 1, Ty(n, r, l, o);
    } finally {
      yr.transition = c, Zt = o;
    }
    return null;
  }
  function Ty(n, r, l, o) {
    do
      Do();
    while (nl !== null);
    if (It & 6) throw Error(E(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(E(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Zf(n, d), n === rr && (qn = rr = null, gr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ff || (ff = !0, gh(lu, function() {
      return Do(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = yr.transition, yr.transition = null;
      var m = Zt;
      Zt = 1;
      var w = It;
      It |= 4, Nu.current = null, ih(n, l), Id(l, n), so(mu), za = !!ss, mu = ss = null, n.current = l, Cy(l), ei(), It = w, Zt = m, yr.transition = d;
    } else n.current = l;
    if (ff && (ff = !1, nl = n, Ps = c), d = n.pendingLanes, d === 0 && (Pl = null), Go(l.stateNode), oa(n, Ct()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (_o) throw _o = !1, n = Lu, Lu = null, n;
    return Ps & 1 && n.tag !== 0 && Do(), d = n.pendingLanes, d & 1 ? n === ko ? Vl++ : (Vl = 0, ko = n) : Vl = 0, bi(), null;
  }
  function Do() {
    if (nl !== null) {
      var n = to(Ps), r = yr.transition, l = Zt;
      try {
        if (yr.transition = null, Zt = 16 > n ? 16 : n, nl === null) var o = !1;
        else {
          if (n = nl, nl = null, Ps = 0, It & 6) throw Error(E(331));
          var c = It;
          for (It |= 4, Ue = n.current; Ue !== null; ) {
            var d = Ue, m = d.child;
            if (Ue.flags & 16) {
              var w = d.deletions;
              if (w !== null) {
                for (var b = 0; b < w.length; b++) {
                  var $ = w[b];
                  for (Ue = $; Ue !== null; ) {
                    var se = Ue;
                    switch (se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zs(8, se, d);
                    }
                    var pe = se.child;
                    if (pe !== null) pe.return = se, Ue = pe;
                    else for (; Ue !== null; ) {
                      se = Ue;
                      var le = se.sibling, Le = se.return;
                      if (sf(se), se === $) {
                        Ue = null;
                        break;
                      }
                      if (le !== null) {
                        le.return = Le, Ue = le;
                        break;
                      }
                      Ue = Le;
                    }
                  }
                }
                var Ve = d.alternate;
                if (Ve !== null) {
                  var Ye = Ve.child;
                  if (Ye !== null) {
                    Ve.child = null;
                    do {
                      var Bn = Ye.sibling;
                      Ye.sibling = null, Ye = Bn;
                    } while (Ye !== null);
                  }
                }
                Ue = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, Ue = m;
            else e: for (; Ue !== null; ) {
              if (d = Ue, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  zs(9, d, d.return);
              }
              var L = d.sibling;
              if (L !== null) {
                L.return = d.return, Ue = L;
                break e;
              }
              Ue = d.return;
            }
          }
          var k = n.current;
          for (Ue = k; Ue !== null; ) {
            m = Ue;
            var F = m.child;
            if (m.subtreeFlags & 2064 && F !== null) F.return = m, Ue = F;
            else e: for (m = k; Ue !== null; ) {
              if (w = Ue, w.flags & 2048) try {
                switch (w.tag) {
                  case 0:
                  case 11:
                  case 15:
                    As(9, w);
                }
              } catch (Be) {
                bn(w, w.return, Be);
              }
              if (w === m) {
                Ue = null;
                break e;
              }
              var ce = w.sibling;
              if (ce !== null) {
                ce.return = w.return, Ue = ce;
                break e;
              }
              Ue = w.return;
            }
          }
          if (It = c, bi(), qr && typeof qr.onPostCommitFiberRoot == "function") try {
            qr.onPostCommitFiberRoot(Sl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Zt = l, yr.transition = r;
      }
    }
    return !1;
  }
  function vh(n, r, l) {
    r = Ou(l, r), r = Gv(n, r, 1), n = Al(n, r, 1), r = Zn(), n !== null && ($i(n, 1, r), oa(n, r));
  }
  function bn(n, r, l) {
    if (n.tag === 3) vh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        vh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pl === null || !Pl.has(o))) {
          n = Ou(l, n), n = jd(r, n, 1), r = Al(r, n, 1), n = Zn(), r !== null && ($i(r, 1, n), oa(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function by(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Zn(), n.pingedLanes |= n.suspendedLanes & l, rr === n && (gr & l) === l && (Vn === 4 || Vn === 3 && (gr & 130023424) === gr && 500 > Ct() - Qd ? rl(n, 0) : cf |= l), oa(n, r);
  }
  function hh(n, r) {
    r === 0 && (n.mode & 1 ? (r = ma, ma <<= 1, !(ma & 130023424) && (ma = 4194304)) : r = 1);
    var l = Zn();
    n = Sa(n, r), n !== null && ($i(n, r, l), oa(n, l));
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
        throw Error(E(314));
    }
    o !== null && o.delete(r), hh(n, l);
  }
  var yh;
  yh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || tr.current) Gn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Gn = !1, Ms(n, r, l);
      Gn = !!(n.flags & 131072);
    }
    else Gn = !1, Tn && r.flags & 1048576 && Pv(r, qi, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Va(n, r), n = r.pendingProps;
        var c = ea(r, An.current);
        On(r, l), c = Ul(null, r, o, n, c, l);
        var d = oi();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Wn(o) ? (d = !0, lr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Dd(r), c.updater = tf, r.stateNode = c, c._reactInternals = r, bs(r, o, n, l), r = Ds(null, r, o, !0, d, l)) : (r.tag = 0, Tn && d && Mc(r), mr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Va(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Dy(o), n = si(o, n), c) {
            case 0:
              r = qv(null, r, o, n, l);
              break e;
            case 1:
              r = Zv(null, r, o, n, l);
              break e;
            case 11:
              r = ia(null, r, o, n, l);
              break e;
            case 14:
              r = Mu(null, r, o, si(o.type, n), l);
              break e;
          }
          throw Error(E(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : si(o, c), qv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : si(o, c), Zv(n, r, o, c, l);
      case 3:
        e: {
          if (Ro(r), n === null) throw Error(E(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, $v(n, r), vs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Ou(Error(E(423)), r), r = Jv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Ou(Error(E(424)), r), r = Jv(n, r, o, l, c);
            break e;
          } else for (na = wi(r.stateNode.containerInfo.firstChild), ta = r, Tn = !0, Ha = null, l = De(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (zl(), o === c) {
              r = Ba(n, r, l);
              break e;
            }
            mr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Yv(r), n === null && Rd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, bc(o, c) ? m = null : d !== null && bc(o, d) && (r.flags |= 32), Hd(n, r), mr(n, r, m, l), r.child;
      case 6:
        return n === null && Rd(r), null;
      case 13:
        return lf(n, r, l);
      case 4:
        return Md(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Fn(r, null, o, l) : mr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : si(o, c), ia(n, r, o, c, l);
      case 7:
        return mr(n, r, r.pendingProps, l), r.child;
      case 8:
        return mr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return mr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Ke(ga, o._currentValue), o._currentValue = m, d !== null) if (li(d.value, m)) {
            if (d.children === c.children && !tr.current) {
              r = Ba(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var w = d.dependencies;
            if (w !== null) {
              m = d.child;
              for (var b = w.firstContext; b !== null; ) {
                if (b.context === o) {
                  if (d.tag === 1) {
                    b = Ji(-1, l & -l), b.tag = 2;
                    var $ = d.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var se = $.pending;
                      se === null ? b.next = b : (b.next = se.next, se.next = b), $.pending = b;
                    }
                  }
                  d.lanes |= l, b = d.alternate, b !== null && (b.lanes |= l), bd(
                    d.return,
                    l,
                    r
                  ), w.lanes |= l;
                  break;
                }
                b = b.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(E(341));
              m.lanes |= l, w = m.alternate, w !== null && (w.lanes |= l), bd(m, l, r), m = d.sibling;
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
          mr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, On(r, l), c = Pa(c), o = o(c), r.flags |= 1, mr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = si(o, r.pendingProps), c = si(o.type, c), Mu(n, r, o, c, l);
      case 15:
        return xt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : si(o, c), Va(n, r), r.tag = 1, Wn(o) ? (n = !0, lr(r)) : n = !1, On(r, l), nf(r, o, c), bs(r, o, c, l), Ds(null, r, o, !0, n, l);
      case 19:
        return Oi(n, r, l);
      case 22:
        return ks(n, r, l);
    }
    throw Error(E(156, r.tag));
  };
  function gh(n, r) {
    return Cn(n, r);
  }
  function ky(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ia(n, r, l, o) {
    return new ky(n, r, l, o);
  }
  function Zd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Dy(n) {
    if (typeof n == "function") return Zd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === yt) return 11;
      if (n === jt) return 14;
    }
    return 2;
  }
  function Bl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ia(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function $s(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Zd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case He:
        return al(l.children, c, d, r);
      case ct:
        m = 8, c |= 8;
        break;
      case mt:
        return n = Ia(12, l, r, c | 2), n.elementType = mt, n.lanes = d, n;
      case Se:
        return n = Ia(13, l, r, c), n.elementType = Se, n.lanes = d, n;
      case Mt:
        return n = Ia(19, l, r, c), n.elementType = Mt, n.lanes = d, n;
      case je:
        return $l(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case rt:
            m = 10;
            break e;
          case zt:
            m = 9;
            break e;
          case yt:
            m = 11;
            break e;
          case jt:
            m = 14;
            break e;
          case Ft:
            m = 16, o = null;
            break e;
        }
        throw Error(E(130, n == null ? n : typeof n, ""));
    }
    return r = Ia(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function al(n, r, l, o) {
    return n = Ia(7, n, o, r), n.lanes = l, n;
  }
  function $l(n, r, l, o) {
    return n = Ia(22, n, o, r), n.elementType = je, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Jd(n, r, l) {
    return n = Ia(6, n, null, r), n.lanes = l, n;
  }
  function vf(n, r, l) {
    return r = Ia(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = eo(0), this.expirationTimes = eo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eo(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function hf(n, r, l, o, c, d, m, w, b) {
    return n = new Sh(n, r, l, w, b), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ia(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Dd(d), n;
  }
  function Oy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ge, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function ep(n) {
    if (!n) return Dr;
    n = n._reactInternals;
    e: {
      if (Et(n) !== n || n.tag !== 1) throw Error(E(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Wn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(E(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Wn(l)) return ds(n, l, r);
    }
    return r;
  }
  function Eh(n, r, l, o, c, d, m, w, b) {
    return n = hf(l, o, !0, n, c, d, m, w, b), n.context = ep(null), l = n.current, o = Zn(), c = zi(l), d = Ji(o, c), d.callback = r ?? null, Al(l, d, c), n.current.lanes = c, $i(n, c, o), oa(n, o), n;
  }
  function mf(n, r, l, o) {
    var c = r.current, d = Zn(), m = zi(c);
    return l = ep(l), r.context === null ? r.context = l : r.pendingContext = l, r = Ji(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Al(c, r, m), n !== null && (Vr(n, c, m, d), Ac(n, c, m)), m;
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
  var ju = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function np(n) {
    this._internalRoot = n;
  }
  Sf.prototype.render = np.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(E(409));
    mf(n, r, null, null);
  }, Sf.prototype.unmount = np.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Au(function() {
        mf(null, n, null, null);
      }), r[Gi] = null;
    }
  };
  function Sf(n) {
    this._internalRoot = n;
  }
  Sf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = dt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < er.length && r !== 0 && r < er[l].priority; l++) ;
      er.splice(l, 0, n), l === 0 && Zo(n);
    }
  };
  function rp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Ef(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Rh() {
  }
  function My(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var $ = yf(m);
          d.call($);
        };
      }
      var m = Eh(r, o, n, 0, null, !1, !1, "", Rh);
      return n._reactRootContainer = m, n[Gi] = m.current, fo(n.nodeType === 8 ? n.parentNode : n), Au(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var w = o;
      o = function() {
        var $ = yf(b);
        w.call($);
      };
    }
    var b = hf(n, 0, !1, null, null, !1, !1, "", Rh);
    return n._reactRootContainer = b, n[Gi] = b.current, fo(n.nodeType === 8 ? n.parentNode : n), Au(function() {
      mf(r, b, l, o);
    }), b;
  }
  function Is(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var w = c;
        c = function() {
          var b = yf(m);
          w.call(b);
        };
      }
      mf(r, m, n, c);
    } else m = My(l, r, n, c, o);
    return yf(m);
  }
  Qt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ni(r.pendingLanes);
          l !== 0 && (Ii(r, l | 1), oa(r, Ct()), !(It & 6) && (bo = Ct() + 500, bi()));
        }
        break;
      case 13:
        Au(function() {
          var o = Sa(n, 1);
          if (o !== null) {
            var c = Zn();
            Vr(o, n, 1, c);
          }
        }), gf(n, 1);
    }
  }, Xo = function(n) {
    if (n.tag === 13) {
      var r = Sa(n, 134217728);
      if (r !== null) {
        var l = Zn();
        Vr(r, n, 134217728, l);
      }
      gf(n, 134217728);
    }
  }, gi = function(n) {
    if (n.tag === 13) {
      var r = zi(n), l = Sa(n, r);
      if (l !== null) {
        var o = Zn();
        Vr(l, n, r, o);
      }
      gf(n, r);
    }
  }, dt = function() {
    return Zt;
  }, no = function(n, r) {
    var l = Zt;
    try {
      return Zt = n, r();
    } finally {
      Zt = l;
    }
  }, sn = function(n, r, l) {
    switch (r) {
      case "input":
        if (fr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Dn(o);
              if (!c) throw Error(E(90));
              ir(o), fr(o, c);
            }
          }
        }
        break;
      case "textarea":
        be(n, l);
        break;
      case "select":
        r = l.value, r != null && M(n, !!l.multiple, r, !1);
    }
  }, ru = Gd, ml = Au;
  var Ny = { usingClientEntryPoint: !1, Events: [qe, ui, Dn, Bi, nu, Gd] }, Ys = { findFiberByHostInstance: yu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, wh = { bundleType: Ys.bundleType, version: Ys.version, rendererPackageName: Ys.rendererPackageName, rendererConfig: Ys.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: he.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = jn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ys.findFiberByHostInstance || Ch, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Il.isDisabled && Il.supportsFiber) try {
      Sl = Il.inject(wh), qr = Il;
    } catch {
    }
  }
  return Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ny, Xa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!rp(r)) throw Error(E(200));
    return Oy(n, r, null, l);
  }, Xa.createRoot = function(n, r) {
    if (!rp(n)) throw Error(E(299));
    var l = !1, o = "", c = ju;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = hf(n, 1, !1, null, null, l, !1, o, c), n[Gi] = r.current, fo(n.nodeType === 8 ? n.parentNode : n), new np(r);
  }, Xa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(E(188)) : (n = Object.keys(n).join(","), Error(E(268, n)));
    return n = jn(r), n = n === null ? null : n.stateNode, n;
  }, Xa.flushSync = function(n) {
    return Au(n);
  }, Xa.hydrate = function(n, r, l) {
    if (!Ef(r)) throw Error(E(200));
    return Is(null, n, r, !0, l);
  }, Xa.hydrateRoot = function(n, r, l) {
    if (!rp(n)) throw Error(E(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = ju;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Eh(r, null, n, 1, l ?? null, c, !1, d, m), n[Gi] = r.current, fo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Sf(r);
  }, Xa.render = function(n, r, l) {
    if (!Ef(r)) throw Error(E(200));
    return Is(null, n, r, !1, l);
  }, Xa.unmountComponentAtNode = function(n) {
    if (!Ef(n)) throw Error(E(40));
    return n._reactRootContainer ? (Au(function() {
      Is(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Gi] = null;
      });
    }), !0) : !1;
  }, Xa.unstable_batchedUpdates = Gd, Xa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Ef(l)) throw Error(E(200));
    if (n == null || n._reactInternals === void 0) throw Error(E(38));
    return Is(n, r, l, !1, o);
  }, Xa.version = "18.3.1-next-f1338f8080-20240426", Xa;
}
var qa = {};
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
function Nk() {
  return Cw || (Cw = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var S = Ut, R = kw(), E = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, j = !1;
    function z(e) {
      j = e;
    }
    function B(e) {
      if (!j) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Q("warn", e, a);
      }
    }
    function y(e) {
      if (!j) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Q("error", e, a);
      }
    }
    function Q(e, t, a) {
      {
        var i = E.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Y = 0, N = 1, oe = 2, q = 3, ee = 4, P = 5, ye = 6, G = 7, X = 8, fe = 9, de = 10, Ce = 11, he = 12, Re = 13, Ge = 14, He = 15, ct = 16, mt = 17, rt = 18, zt = 19, yt = 21, Se = 22, Mt = 23, jt = 24, Ft = 25, je = !0, ue = !1, Pe = !1, we = !1, O = !1, te = !0, Xe = !0, We = !0, Tt = !0, Rt = /* @__PURE__ */ new Set(), gt = {}, St = {};
    function wt(e, t) {
      qt(e, t), qt(e + "Capture", t);
    }
    function qt(e, t) {
      gt[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), gt[e] = t;
      {
        var a = e.toLowerCase();
        St[a] = e, e === "onDoubleClick" && (St.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Rt.add(t[i]);
    }
    var _n = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = Object.prototype.hasOwnProperty;
    function xn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function In(e) {
      try {
        return Ln(e), !1;
      } catch {
        return !0;
      }
    }
    function Ln(e) {
      return "" + e;
    }
    function zn(e, t) {
      if (In(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xn(e)), Ln(e);
    }
    function fr(e) {
      if (In(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xn(e)), Ln(e);
    }
    function va(e, t) {
      if (In(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xn(e)), Ln(e);
    }
    function _r(e, t) {
      if (In(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xn(e)), Ln(e);
    }
    function Un(e) {
      if (In(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", xn(e)), Ln(e);
    }
    function M(e) {
      if (In(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", xn(e)), Ln(e);
    }
    var re = 0, me = 1, be = 2, _e = 3, Me = 4, Je = 5, bt = 6, Ht = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", W = Ht + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ee = new RegExp("^[" + Ht + "][" + W + "]*$"), Ie = {}, ft = {};
    function Pt(e) {
      return ir.call(ft, e) ? !0 : ir.call(Ie, e) ? !1 : Ee.test(e) ? (ft[e] = !0, !0) : (Ie[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function mn(e, t, a) {
      return t !== null ? t.type === re : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function an(e, t, a, i) {
      if (a !== null && a.type === re)
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
    function Gt(e, t, a, i) {
      if (t === null || typeof t > "u" || an(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case _e:
            return !t;
          case Me:
            return t === !1;
          case Je:
            return isNaN(t);
          case bt:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Vt(e) {
      return sn.hasOwnProperty(e) ? sn[e] : null;
    }
    function ln(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === be || t === _e || t === Me, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var sn = {}, ha = [
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
      sn[e] = new ln(
        e,
        re,
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
      sn[t] = new ln(
        t,
        me,
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
      sn[e] = new ln(
        e,
        be,
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
      sn[e] = new ln(
        e,
        be,
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
      sn[e] = new ln(
        e,
        _e,
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
      sn[e] = new ln(
        e,
        _e,
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
      sn[e] = new ln(
        e,
        Me,
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
      sn[e] = new ln(
        e,
        bt,
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
      sn[e] = new ln(
        e,
        Je,
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
    var kr = /[\-\:]([a-z])/g, Ma = function(e) {
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
      var t = e.replace(kr, Ma);
      sn[t] = new ln(
        t,
        me,
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
      var t = e.replace(kr, Ma);
      sn[t] = new ln(
        t,
        me,
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
      var t = e.replace(kr, Ma);
      sn[t] = new ln(
        t,
        me,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      sn[e] = new ln(
        e,
        me,
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
    var Bi = "xlinkHref";
    sn[Bi] = new ln(
      "xlinkHref",
      me,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      sn[e] = new ln(
        e,
        me,
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
    var nu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ru = !1;
    function ml(e) {
      !ru && nu.test(e) && (ru = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function yl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        zn(a, t), i.sanitizeURL && ml("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Me) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Gt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Gt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === _e)
            return a;
          f = e.getAttribute(s);
        }
        return Gt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function au(e, t, a, i) {
      {
        if (!Pt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return zn(a, t), u === "" + a ? a : u;
      }
    }
    function Lr(e, t, a, i) {
      var u = Vt(t);
      if (!mn(t, u, i)) {
        if (Gt(t, a, u, i) && (a = null), i || u === null) {
          if (Pt(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (zn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === _e ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var g = u.attributeName, C = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(g);
        else {
          var D = u.type, _;
          D === _e || D === Me && a === !0 ? _ = "" : (zn(a, g), _ = "" + a, u.sanitizeURL && ml(_.toString())), C ? e.setAttributeNS(C, g, _) : e.setAttribute(g, _);
        }
      }
    }
    var zr = Symbol.for("react.element"), dr = Symbol.for("react.portal"), hi = Symbol.for("react.fragment"), Za = Symbol.for("react.strict_mode"), mi = Symbol.for("react.profiler"), yi = Symbol.for("react.provider"), T = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), ke = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), Nt = Symbol.for("react.scope"), Dt = Symbol.for("react.debug_trace_mode"), jn = Symbol.for("react.offscreen"), gn = Symbol.for("react.legacy_hidden"), Cn = Symbol.for("react.cache"), pr = Symbol.for("react.tracing_marker"), Ja = Symbol.iterator, ei = "@@iterator";
    function Ct(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ja && e[Ja] || e[ei];
      return typeof t == "function" ? t : null;
    }
    var _t = Object.assign, ti = 0, iu, lu, gl, Xu, Sl, qr, Go;
    function Ar() {
    }
    Ar.__reactDisabledLog = !0;
    function fc() {
      {
        if (ti === 0) {
          iu = console.log, lu = console.info, gl = console.warn, Xu = console.error, Sl = console.group, qr = console.groupCollapsed, Go = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ar,
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
        ti++;
      }
    }
    function dc() {
      {
        if (ti--, ti === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _t({}, e, {
              value: iu
            }),
            info: _t({}, e, {
              value: lu
            }),
            warn: _t({}, e, {
              value: gl
            }),
            error: _t({}, e, {
              value: Xu
            }),
            group: _t({}, e, {
              value: Sl
            }),
            groupCollapsed: _t({}, e, {
              value: qr
            }),
            groupEnd: _t({}, e, {
              value: Go
            })
          });
        }
        ti < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qu = E.ReactCurrentDispatcher, El;
    function ma(e, t, a) {
      {
        if (El === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            El = i && i[1] || "";
          }
        return `
` + El + e;
      }
    }
    var ni = !1, ri;
    {
      var Zu = typeof WeakMap == "function" ? WeakMap : Map;
      ri = new Zu();
    }
    function uu(e, t) {
      if (!e || ni)
        return "";
      {
        var a = ri.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ni = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = qu.current, qu.current = null, fc();
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
            } catch (I) {
              i = I;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (I) {
              i = I;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            i = I;
          }
          e();
        }
      } catch (I) {
        if (I && i && typeof I.stack == "string") {
          for (var p = I.stack.split(`
`), v = i.stack.split(`
`), g = p.length - 1, C = v.length - 1; g >= 1 && C >= 0 && p[g] !== v[C]; )
            C--;
          for (; g >= 1 && C >= 0; g--, C--)
            if (p[g] !== v[C]) {
              if (g !== 1 || C !== 1)
                do
                  if (g--, C--, C < 0 || p[g] !== v[C]) {
                    var D = `
` + p[g].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && ri.set(e, D), D;
                  }
                while (g >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        ni = !1, qu.current = s, dc(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", H = _ ? ma(_) : "";
      return typeof e == "function" && ri.set(e, H), H;
    }
    function Cl(e, t, a) {
      return uu(e, !0);
    }
    function Ju(e, t, a) {
      return uu(e, !1);
    }
    function eo(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function $i(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return uu(e, eo(e));
      if (typeof e == "string")
        return ma(e);
      switch (e) {
        case ke:
          return ma("Suspense");
        case Fe:
          return ma("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ae:
            return Ju(e.render);
          case Et:
            return $i(e.type, t, a);
          case pt: {
            var i = e, u = i._payload, s = i._init;
            try {
              return $i(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Zf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case P:
          return ma(e.type);
        case ct:
          return ma("Lazy");
        case Re:
          return ma("Suspense");
        case zt:
          return ma("SuspenseList");
        case Y:
        case oe:
        case He:
          return Ju(e.type);
        case Ce:
          return Ju(e.type.render);
        case N:
          return Cl(e.type);
        default:
          return "";
      }
    }
    function Ii(e) {
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
    function Zt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function to(e) {
      return e.displayName || "Context";
    }
    function Qt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case hi:
          return "Fragment";
        case dr:
          return "Portal";
        case mi:
          return "Profiler";
        case Za:
          return "StrictMode";
        case ke:
          return "Suspense";
        case Fe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var t = e;
            return to(t) + ".Consumer";
          case yi:
            var a = e;
            return to(a._context) + ".Provider";
          case ae:
            return Zt(e, e.render, "ForwardRef");
          case Et:
            var i = e.displayName || null;
            return i !== null ? i : Qt(e.type) || "Memo";
          case pt: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Qt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Xo(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function gi(e) {
      return e.displayName || "Context";
    }
    function dt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case jt:
          return "Cache";
        case fe:
          var i = a;
          return gi(i) + ".Consumer";
        case de:
          var u = a;
          return gi(u._context) + ".Provider";
        case rt:
          return "DehydratedFragment";
        case Ce:
          return Xo(a, a.render, "ForwardRef");
        case G:
          return "Fragment";
        case P:
          return a;
        case ee:
          return "Portal";
        case q:
          return "Root";
        case ye:
          return "Text";
        case ct:
          return Qt(a);
        case X:
          return a === Za ? "StrictMode" : "Mode";
        case Se:
          return "Offscreen";
        case he:
          return "Profiler";
        case yt:
          return "Scope";
        case Re:
          return "Suspense";
        case zt:
          return "SuspenseList";
        case Ft:
          return "TracingMarker";
        case N:
        case Y:
        case mt:
        case oe:
        case Ge:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var no = E.ReactDebugCurrentFrame, vr = null, Si = !1;
    function Ur() {
      {
        if (vr === null)
          return null;
        var e = vr._debugOwner;
        if (e !== null && typeof e < "u")
          return dt(e);
      }
      return null;
    }
    function Ei() {
      return vr === null ? "" : Ii(vr);
    }
    function Rn() {
      no.getCurrentStack = null, vr = null, Si = !1;
    }
    function cn(e) {
      no.getCurrentStack = e === null ? null : Ei, vr = e, Si = !1;
    }
    function Rl() {
      return vr;
    }
    function er(e) {
      Si = e;
    }
    function jr(e) {
      return "" + e;
    }
    function Na(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return M(e), e;
        default:
          return "";
      }
    }
    var ou = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function qo(e, t) {
      ou[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || y("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || y("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Zo(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function wl(e) {
      return e._valueTracker;
    }
    function su(e) {
      e._valueTracker = null;
    }
    function Jf(e) {
      var t = "";
      return e && (Zo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function La(e) {
      var t = Zo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      M(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            M(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            M(p), i = "" + p;
          },
          stopTracking: function() {
            su(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ai(e) {
      wl(e) || (e._valueTracker = La(e));
    }
    function Ci(e) {
      if (!e)
        return !1;
      var t = wl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Jf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function za(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ro = !1, ao = !1, xl = !1, cu = !1;
    function io(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function lo(e, t) {
      var a = e, i = t.checked, u = _t({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ii(e, t) {
      qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ao && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), ao = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ro && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), ro = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Na(t.value != null ? t.value : i),
        controlled: io(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && Lr(a, "checked", i, !1);
    }
    function x(e, t) {
      var a = e;
      {
        var i = io(t);
        !a._wrapperState.controlled && i && !cu && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), cu = !0), a._wrapperState.controlled && !i && !xl && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), xl = !0);
      }
      h(e, t);
      var u = Na(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = jr(u)) : a.value !== jr(u) && (a.value = jr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? et(a, t.type, u) : t.hasOwnProperty("defaultValue") && et(a, t.type, Na(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function V(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = jr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function K(e, t) {
      var a = e;
      x(a, t), ge(a, t);
    }
    function ge(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        zn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Vh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ci(f), x(f, p);
          }
        }
      }
    }
    function et(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || za(e.ownerDocument) !== e) && (a == null ? e.defaultValue = jr(e._wrapperState.initialValue) : e.defaultValue !== jr(a) && (e.defaultValue = jr(a)));
    }
    var Te = !1, at = !1, Lt = !1;
    function Kt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? S.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || at || (at = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Lt || (Lt = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Te && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Te = !0);
    }
    function Sn(e, t) {
      t.value != null && e.setAttribute("value", jr(Na(t.value)));
    }
    var fn = Array.isArray;
    function kt(e) {
      return fn(e);
    }
    var dn;
    dn = !1;
    function kn() {
      var e = Ur();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Tl = ["value", "defaultValue"];
    function Jo(e) {
      {
        qo("select", e);
        for (var t = 0; t < Tl.length; t++) {
          var a = Tl[t];
          if (e[a] != null) {
            var i = kt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, kn()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, kn());
          }
        }
      }
    }
    function Yi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var g = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== g && (u[v].selected = g), g && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var C = jr(Na(a)), D = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === C) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          D === null && !u[_].disabled && (D = u[_]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function es(e, t) {
      return _t({}, t, {
        value: void 0
      });
    }
    function fu(e, t) {
      var a = e;
      Jo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !dn && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), dn = !0);
    }
    function ed(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Yi(a, !!t.multiple, i, !1) : t.defaultValue != null && Yi(a, !!t.multiple, t.defaultValue, !0);
    }
    function pc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Yi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Yi(a, !!t.multiple, t.defaultValue, !0) : Yi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function td(e, t) {
      var a = e, i = t.value;
      i != null && Yi(a, !!t.multiple, i, !1);
    }
    var cv = !1;
    function nd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = _t({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: jr(a._wrapperState.initialValue)
      });
      return i;
    }
    function rd(e, t) {
      var a = e;
      qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component"), cv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (kt(u)) {
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
        initialValue: Na(i)
      };
    }
    function fv(e, t) {
      var a = e, i = Na(t.value), u = Na(t.defaultValue);
      if (i != null) {
        var s = jr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = jr(u));
    }
    function dv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function uy(e, t) {
      fv(e, t);
    }
    var Wi = "http://www.w3.org/1999/xhtml", ad = "http://www.w3.org/1998/Math/MathML", id = "http://www.w3.org/2000/svg";
    function ld(e) {
      switch (e) {
        case "svg":
          return id;
        case "math":
          return ad;
        default:
          return Wi;
      }
    }
    function ud(e, t) {
      return e == null || e === Wi ? ld(t) : e === id && t === "foreignObject" ? Wi : e;
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
    }), Zr = 1, Qi = 3, Yn = 8, Ki = 9, od = 11, uo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Qi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ts = {
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
    }, ns = {
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
    Object.keys(ns).forEach(function(e) {
      mv.forEach(function(t) {
        ns[hv(t, e)] = ns[e];
      });
    });
    function hc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ns.hasOwnProperty(e) && ns[e]) ? t + "px" : (_r(t, e), ("" + t).trim());
    }
    var yv = /([A-Z])/g, gv = /^ms-/;
    function oo(e) {
      return e.replace(yv, "-$1").toLowerCase().replace(gv, "-ms-");
    }
    var Sv = function() {
    };
    {
      var oy = /^(?:webkit|moz|o)[A-Z]/, sy = /^-ms-/, Ev = /-(.)/g, sd = /;\s*$/, Ri = {}, du = {}, Cv = !1, rs = !1, cy = function(e) {
        return e.replace(Ev, function(t, a) {
          return a.toUpperCase();
        });
      }, Rv = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          cy(e.replace(sy, "ms-"))
        ));
      }, cd = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, fd = function(e, t) {
        du.hasOwnProperty(t) && du[t] || (du[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(sd, "")));
      }, wv = function(e, t) {
        Cv || (Cv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, xv = function(e, t) {
        rs || (rs = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Sv = function(e, t) {
        e.indexOf("-") > -1 ? Rv(e) : oy.test(e) ? cd(e) : sd.test(t) && fd(e, t), typeof t == "number" && (isNaN(t) ? wv(e, t) : isFinite(t) || xv(e, t));
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
              t += a + (s ? i : oo(i)) + ":", t += hc(i, u, s), a = ";";
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
        for (var i = ts[a] || [a], u = 0; u < i.length; u++)
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
    var li = {
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
    }, as = _t({
      menuitem: !0
    }, li), kv = "__html";
    function mc(e, t) {
      if (t) {
        if (as[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    function bl(e, t) {
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
    var is = {
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
    }, so = {}, vy = new RegExp("^(aria)-[" + W + "]*$"), co = new RegExp("^(aria)[A-Z][" + W + "]*$");
    function dd(e, t) {
      {
        if (ir.call(so, t) && so[t])
          return !0;
        if (co.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = yc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return y("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), so[t] = !0, !0;
          if (t !== i)
            return y("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), so[t] = !0, !0;
        }
        if (vy.test(t)) {
          var u = t.toLowerCase(), s = yc.hasOwnProperty(u) ? u : null;
          if (s == null)
            return so[t] = !0, !1;
          if (t !== s)
            return y("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), so[t] = !0, !0;
        }
      }
      return !0;
    }
    function ls(e, t) {
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
      bl(e, t) || ls(e, t);
    }
    var vd = !1;
    function gc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !vd && (vd = !0, e === "select" && t.multiple ? y("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : y("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var pu = function() {
    };
    {
      var hr = {}, hd = /^on./, Sc = /^on[^A-Z]/, Dv = new RegExp("^(aria)-[" + W + "]*$"), Ov = new RegExp("^(aria)[A-Z][" + W + "]*$");
      pu = function(e, t, a, i) {
        if (ir.call(hr, t) && hr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), hr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), hr[t] = !0, !0;
          if (hd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), hr[t] = !0, !0;
        } else if (hd.test(t))
          return Sc.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), hr[t] = !0, !0;
        if (Dv.test(t) || Ov.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), hr[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), hr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), hr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), hr[t] = !0, !0;
        var v = Vt(t), g = v !== null && v.type === re;
        if (is.hasOwnProperty(u)) {
          var C = is[u];
          if (C !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, C), hr[t] = !0, !0;
        } else if (!g && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), hr[t] = !0, !0;
        return typeof a == "boolean" && an(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), hr[t] = !0, !0) : g ? !0 : an(t, a, v, !1) ? (hr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === _e && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), hr[t] = !0), !0);
      };
    }
    var Mv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = pu(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? y("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && y("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Nv(e, t, a) {
      bl(e, t) || Mv(e, t, a);
    }
    var md = 1, Ec = 2, Aa = 4, yd = md | Ec | Aa, vu = null;
    function hy(e) {
      vu !== null && y("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), vu = e;
    }
    function my() {
      vu === null && y("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), vu = null;
    }
    function us(e) {
      return e === vu;
    }
    function gd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Qi ? t.parentNode : t;
    }
    var Cc = null, hu = null, un = null;
    function Rc(e) {
      var t = No(e);
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
    function fo(e) {
      hu ? un ? un.push(e) : un = [e] : hu = e;
    }
    function Lv() {
      return hu !== null || un !== null;
    }
    function xc() {
      if (hu) {
        var e = hu, t = un;
        if (hu = null, un = null, Rc(e), t)
          for (var a = 0; a < t.length; a++)
            Rc(t[a]);
      }
    }
    var po = function(e, t) {
      return e(t);
    }, os = function() {
    }, _l = !1;
    function zv() {
      var e = Lv();
      e && (os(), xc());
    }
    function Av(e, t, a) {
      if (_l)
        return e(t, a);
      _l = !0;
      try {
        return po(e, t, a);
      } finally {
        _l = !1, zv();
      }
    }
    function yy(e, t, a) {
      po = e, os = a;
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
    function kl(e, t) {
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
    var ss = !1;
    if (_n)
      try {
        var mu = {};
        Object.defineProperty(mu, "passive", {
          get: function() {
            ss = !0;
          }
        }), window.addEventListener("test", mu, mu), window.removeEventListener("test", mu, mu);
      } catch {
        ss = !1;
      }
    function bc(e, t, a, i, u, s, f, p, v) {
      var g = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, g);
      } catch (C) {
        this.onError(C);
      }
    }
    var _c = bc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Sd = document.createElement("react");
      _c = function(t, a, i, u, s, f, p, v, g) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var C = document.createEvent("Event"), D = !1, _ = !0, H = window.event, I = Object.getOwnPropertyDescriptor(window, "event");
        function Z() {
          Sd.removeEventListener(J, tt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = H);
        }
        var Oe = Array.prototype.slice.call(arguments, 3);
        function tt() {
          D = !0, Z(), a.apply(i, Oe), _ = !1;
        }
        var Qe, Wt = !1, At = !1;
        function A(U) {
          if (Qe = U.error, Wt = !0, Qe === null && U.colno === 0 && U.lineno === 0 && (At = !0), U.defaultPrevented && Qe != null && typeof Qe == "object")
            try {
              Qe._suppressLogging = !0;
            } catch {
            }
        }
        var J = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", A), Sd.addEventListener(J, tt, !1), C.initEvent(J, !1, !1), Sd.dispatchEvent(C), I && Object.defineProperty(window, "event", I), D && _ && (Wt ? At && (Qe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Qe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Qe)), window.removeEventListener("error", A), !D)
          return Z(), bc.apply(this, arguments);
      };
    }
    var jv = _c, vo = !1, kc = null, ho = !1, wi = null, Fv = {
      onError: function(e) {
        vo = !0, kc = e;
      }
    };
    function Dl(e, t, a, i, u, s, f, p, v) {
      vo = !1, kc = null, jv.apply(Fv, arguments);
    }
    function xi(e, t, a, i, u, s, f, p, v) {
      if (Dl.apply(this, arguments), vo) {
        var g = fs();
        ho || (ho = !0, wi = g);
      }
    }
    function cs() {
      if (ho) {
        var e = wi;
        throw ho = !1, wi = null, e;
      }
    }
    function Gi() {
      return vo;
    }
    function fs() {
      if (vo) {
        var e = kc;
        return vo = !1, kc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mo(e) {
      return e._reactInternals;
    }
    function gy(e) {
      return e._reactInternals !== void 0;
    }
    function yu(e, t) {
      e._reactInternals = t;
    }
    var qe = (
      /*                      */
      0
    ), ui = (
      /*                */
      1
    ), Dn = (
      /*                    */
      2
    ), $t = (
      /*                       */
      4
    ), Ua = (
      /*                */
      16
    ), ja = (
      /*                 */
      32
    ), En = (
      /*                     */
      64
    ), Ke = (
      /*                   */
      128
    ), Dr = (
      /*            */
      256
    ), An = (
      /*                          */
      512
    ), tr = (
      /*                     */
      1024
    ), Jr = (
      /*                      */
      2048
    ), ea = (
      /*                    */
      4096
    ), Wn = (
      /*                   */
      8192
    ), yo = (
      /*             */
      16384
    ), Hv = (
      /*               */
      32767
    ), ds = (
      /*                   */
      32768
    ), lr = (
      /*                */
      65536
    ), Dc = (
      /* */
      131072
    ), Ti = (
      /*                       */
      1048576
    ), go = (
      /*                    */
      2097152
    ), Xi = (
      /*                 */
      4194304
    ), Oc = (
      /*                */
      8388608
    ), Ol = (
      /*               */
      16777216
    ), bi = (
      /*              */
      33554432
    ), Ml = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      $t | tr | 0
    ), Nl = Dn | $t | Ua | ja | An | ea | Wn, Ll = $t | En | An | Wn, qi = Jr | Ua, Qn = Xi | Oc | go, Fa = E.ReactCurrentOwner;
    function ya(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Dn | ea)) !== qe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === q ? a : null;
    }
    function _i(e) {
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
    function ki(e) {
      return e.tag === q ? e.stateNode.containerInfo : null;
    }
    function gu(e) {
      return ya(e) === e;
    }
    function Pv(e) {
      {
        var t = Fa.current;
        if (t !== null && t.tag === N) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", dt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = mo(e);
      return u ? ya(u) === u : !1;
    }
    function Mc(e) {
      if (ya(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Nc(e) {
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
          for (var g = !1, C = s.child; C; ) {
            if (C === i) {
              g = !0, i = s, u = f;
              break;
            }
            if (C === u) {
              g = !0, u = s, i = f;
              break;
            }
            C = C.sibling;
          }
          if (!g) {
            for (C = f.child; C; ) {
              if (C === i) {
                g = !0, i = f, u = s;
                break;
              }
              if (C === u) {
                g = !0, u = f, i = s;
                break;
              }
              C = C.sibling;
            }
            if (!g)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== q)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ta(e) {
      var t = Nc(e);
      return t !== null ? na(t) : null;
    }
    function na(e) {
      if (e.tag === P || e.tag === ye)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = na(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Tn(e) {
      var t = Nc(e);
      return t !== null ? Ha(t) : null;
    }
    function Ha(e) {
      if (e.tag === P || e.tag === ye)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ee) {
          var a = Ha(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ed = R.unstable_scheduleCallback, Vv = R.unstable_cancelCallback, Cd = R.unstable_shouldYield, Rd = R.unstable_requestPaint, nr = R.unstable_now, Lc = R.unstable_getCurrentPriorityLevel, ps = R.unstable_ImmediatePriority, zl = R.unstable_UserBlockingPriority, Zi = R.unstable_NormalPriority, Sy = R.unstable_LowPriority, Su = R.unstable_IdlePriority, zc = R.unstable_yieldValue, Bv = R.unstable_setDisableYieldValue, Eu = null, Fn = null, De = null, ga = !1, ra = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function So(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Xe && (e = _t({}, e, {
          getLaneLabelMap: Cu,
          injectProfilingHooks: Pa
        })), Eu = t.inject(e), Fn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function wd(e, t) {
      if (Fn && typeof Fn.onScheduleFiberRoot == "function")
        try {
          Fn.onScheduleFiberRoot(Eu, e, t);
        } catch (a) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function xd(e, t) {
      if (Fn && typeof Fn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ke) === Ke;
          if (We) {
            var i;
            switch (t) {
              case Fr:
                i = ps;
                break;
              case Oi:
                i = zl;
                break;
              case Va:
                i = Zi;
                break;
              case Ba:
                i = Su;
                break;
              default:
                i = Zi;
                break;
            }
            Fn.onCommitFiberRoot(Eu, e, i, a);
          }
        } catch (u) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function Td(e) {
      if (Fn && typeof Fn.onPostCommitFiberRoot == "function")
        try {
          Fn.onPostCommitFiberRoot(Eu, e);
        } catch (t) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function bd(e) {
      if (Fn && typeof Fn.onCommitFiberUnmount == "function")
        try {
          Fn.onCommitFiberUnmount(Eu, e);
        } catch (t) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function On(e) {
      if (typeof zc == "function" && (Bv(e), z(e)), Fn && typeof Fn.setStrictMode == "function")
        try {
          Fn.setStrictMode(Eu, e);
        } catch (t) {
          ga || (ga = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Pa(e) {
      De = e;
    }
    function Cu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < xu; a++) {
          var i = Wv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function _d(e) {
      De !== null && typeof De.markCommitStarted == "function" && De.markCommitStarted(e);
    }
    function kd() {
      De !== null && typeof De.markCommitStopped == "function" && De.markCommitStopped();
    }
    function Sa(e) {
      De !== null && typeof De.markComponentRenderStarted == "function" && De.markComponentRenderStarted(e);
    }
    function Ea() {
      De !== null && typeof De.markComponentRenderStopped == "function" && De.markComponentRenderStopped();
    }
    function Dd(e) {
      De !== null && typeof De.markComponentPassiveEffectMountStarted == "function" && De.markComponentPassiveEffectMountStarted(e);
    }
    function $v() {
      De !== null && typeof De.markComponentPassiveEffectMountStopped == "function" && De.markComponentPassiveEffectMountStopped();
    }
    function Ji(e) {
      De !== null && typeof De.markComponentPassiveEffectUnmountStarted == "function" && De.markComponentPassiveEffectUnmountStarted(e);
    }
    function Al() {
      De !== null && typeof De.markComponentPassiveEffectUnmountStopped == "function" && De.markComponentPassiveEffectUnmountStopped();
    }
    function Ac(e) {
      De !== null && typeof De.markComponentLayoutEffectMountStarted == "function" && De.markComponentLayoutEffectMountStarted(e);
    }
    function Iv() {
      De !== null && typeof De.markComponentLayoutEffectMountStopped == "function" && De.markComponentLayoutEffectMountStopped();
    }
    function vs(e) {
      De !== null && typeof De.markComponentLayoutEffectUnmountStarted == "function" && De.markComponentLayoutEffectUnmountStarted(e);
    }
    function Od() {
      De !== null && typeof De.markComponentLayoutEffectUnmountStopped == "function" && De.markComponentLayoutEffectUnmountStopped();
    }
    function hs(e, t, a) {
      De !== null && typeof De.markComponentErrored == "function" && De.markComponentErrored(e, t, a);
    }
    function Di(e, t, a) {
      De !== null && typeof De.markComponentSuspended == "function" && De.markComponentSuspended(e, t, a);
    }
    function ms(e) {
      De !== null && typeof De.markLayoutEffectsStarted == "function" && De.markLayoutEffectsStarted(e);
    }
    function ys() {
      De !== null && typeof De.markLayoutEffectsStopped == "function" && De.markLayoutEffectsStopped();
    }
    function Ru(e) {
      De !== null && typeof De.markPassiveEffectsStarted == "function" && De.markPassiveEffectsStarted(e);
    }
    function Md() {
      De !== null && typeof De.markPassiveEffectsStopped == "function" && De.markPassiveEffectsStopped();
    }
    function wu(e) {
      De !== null && typeof De.markRenderStarted == "function" && De.markRenderStarted(e);
    }
    function Yv() {
      De !== null && typeof De.markRenderYielded == "function" && De.markRenderYielded();
    }
    function Uc() {
      De !== null && typeof De.markRenderStopped == "function" && De.markRenderStopped();
    }
    function Mn(e) {
      De !== null && typeof De.markRenderScheduled == "function" && De.markRenderScheduled(e);
    }
    function jc(e, t) {
      De !== null && typeof De.markForceUpdateScheduled == "function" && De.markForceUpdateScheduled(e, t);
    }
    function gs(e, t) {
      De !== null && typeof De.markStateUpdateScheduled == "function" && De.markStateUpdateScheduled(e, t);
    }
    var Ze = (
      /*                         */
      0
    ), Ot = (
      /*                 */
      1
    ), Jt = (
      /*                    */
      2
    ), pn = (
      /*               */
      8
    ), en = (
      /*              */
      16
    ), Kn = Math.clz32 ? Math.clz32 : Ss, ur = Math.log, Fc = Math.LN2;
    function Ss(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ur(t) / Fc | 0) | 0;
    }
    var xu = 31, ie = (
      /*                        */
      0
    ), Xt = (
      /*                          */
      0
    ), lt = (
      /*                        */
      1
    ), Ul = (
      /*    */
      2
    ), oi = (
      /*             */
      4
    ), Or = (
      /*            */
      8
    ), Hn = (
      /*                     */
      16
    ), el = (
      /*                */
      32
    ), jl = (
      /*                       */
      4194240
    ), Tu = (
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
    ), Wc = (
      /*                        */
      16384
    ), bu = (
      /*                       */
      32768
    ), Qc = (
      /*                       */
      65536
    ), Eo = (
      /*                       */
      131072
    ), Co = (
      /*                       */
      262144
    ), Kc = (
      /*                       */
      524288
    ), Es = (
      /*                       */
      1048576
    ), Gc = (
      /*                       */
      2097152
    ), Cs = (
      /*                            */
      130023424
    ), _u = (
      /*                             */
      4194304
    ), Xc = (
      /*                             */
      8388608
    ), Rs = (
      /*                             */
      16777216
    ), qc = (
      /*                             */
      33554432
    ), Zc = (
      /*                             */
      67108864
    ), Nd = _u, ws = (
      /*          */
      134217728
    ), Ld = (
      /*                          */
      268435455
    ), xs = (
      /*               */
      268435456
    ), ku = (
      /*                        */
      536870912
    ), aa = (
      /*                   */
      1073741824
    );
    function Wv(e) {
      {
        if (e & lt)
          return "Sync";
        if (e & Ul)
          return "InputContinuousHydration";
        if (e & oi)
          return "InputContinuous";
        if (e & Or)
          return "DefaultHydration";
        if (e & Hn)
          return "Default";
        if (e & el)
          return "TransitionHydration";
        if (e & jl)
          return "Transition";
        if (e & Cs)
          return "Retry";
        if (e & ws)
          return "SelectiveHydration";
        if (e & xs)
          return "IdleHydration";
        if (e & ku)
          return "Idle";
        if (e & aa)
          return "Offscreen";
      }
    }
    var yn = -1, Du = Tu, Jc = _u;
    function Ts(e) {
      switch (Fl(e)) {
        case lt:
          return lt;
        case Ul:
          return Ul;
        case oi:
          return oi;
        case Or:
          return Or;
        case Hn:
          return Hn;
        case el:
          return el;
        case Tu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case bu:
        case Qc:
        case Eo:
        case Co:
        case Kc:
        case Es:
        case Gc:
          return e & jl;
        case _u:
        case Xc:
        case Rs:
        case qc:
        case Zc:
          return e & Cs;
        case ws:
          return ws;
        case xs:
          return xs;
        case ku:
          return ku;
        case aa:
          return aa;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ef(e, t) {
      var a = e.pendingLanes;
      if (a === ie)
        return ie;
      var i = ie, u = e.suspendedLanes, s = e.pingedLanes, f = a & Ld;
      if (f !== ie) {
        var p = f & ~u;
        if (p !== ie)
          i = Ts(p);
        else {
          var v = f & s;
          v !== ie && (i = Ts(v));
        }
      } else {
        var g = a & ~u;
        g !== ie ? i = Ts(g) : s !== ie && (i = Ts(s));
      }
      if (i === ie)
        return ie;
      if (t !== ie && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ie) {
        var C = Fl(i), D = Fl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          C >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          C === Hn && (D & jl) !== ie
        )
          return t;
      }
      (i & oi) !== ie && (i |= a & Hn);
      var _ = e.entangledLanes;
      if (_ !== ie)
        for (var H = e.entanglements, I = i & _; I > 0; ) {
          var Z = Gn(I), Oe = 1 << Z;
          i |= H[Z], I &= ~Oe;
        }
      return i;
    }
    function si(e, t) {
      for (var a = e.eventTimes, i = yn; t > 0; ) {
        var u = Gn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function zd(e, t) {
      switch (e) {
        case lt:
        case Ul:
        case oi:
          return t + 250;
        case Or:
        case Hn:
        case el:
        case Tu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case bu:
        case Qc:
        case Eo:
        case Co:
        case Kc:
        case Es:
        case Gc:
          return t + 5e3;
        case _u:
        case Xc:
        case Rs:
        case qc:
        case Zc:
          return yn;
        case ws:
        case xs:
        case ku:
        case aa:
          return yn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), yn;
      }
    }
    function tf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Gn(f), v = 1 << p, g = s[p];
        g === yn ? ((v & i) === ie || (v & u) !== ie) && (s[p] = zd(v, t)) : g <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Qv(e) {
      return Ts(e.pendingLanes);
    }
    function nf(e) {
      var t = e.pendingLanes & ~aa;
      return t !== ie ? t : t & aa ? aa : ie;
    }
    function Kv(e) {
      return (e & lt) !== ie;
    }
    function bs(e) {
      return (e & Ld) !== ie;
    }
    function Ou(e) {
      return (e & Cs) === e;
    }
    function Ad(e) {
      var t = lt | oi | Hn;
      return (e & t) === ie;
    }
    function Ud(e) {
      return (e & jl) === e;
    }
    function rf(e, t) {
      var a = Ul | oi | Or | Hn;
      return (t & a) !== ie;
    }
    function Gv(e, t) {
      return (t & e.expiredLanes) !== ie;
    }
    function jd(e) {
      return (e & jl) !== ie;
    }
    function Fd() {
      var e = Du;
      return Du <<= 1, (Du & jl) === ie && (Du = Tu), e;
    }
    function Xv() {
      var e = Jc;
      return Jc <<= 1, (Jc & Cs) === ie && (Jc = _u), e;
    }
    function Fl(e) {
      return e & -e;
    }
    function _s(e) {
      return Fl(e);
    }
    function Gn(e) {
      return 31 - Kn(e);
    }
    function mr(e) {
      return Gn(e);
    }
    function ia(e, t) {
      return (e & t) !== ie;
    }
    function Mu(e, t) {
      return (e & t) === t;
    }
    function xt(e, t) {
      return e | t;
    }
    function ks(e, t) {
      return e & ~t;
    }
    function Hd(e, t) {
      return e & t;
    }
    function qv(e) {
      return e;
    }
    function Zv(e, t) {
      return e !== Xt && e < t ? e : t;
    }
    function Ds(e) {
      for (var t = [], a = 0; a < xu; a++)
        t.push(e);
      return t;
    }
    function Ro(e, t, a) {
      e.pendingLanes |= t, t !== ku && (e.suspendedLanes = ie, e.pingedLanes = ie);
      var i = e.eventTimes, u = mr(t);
      i[u] = a;
    }
    function Jv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Gn(i), s = 1 << u;
        a[u] = yn, i &= ~s;
      }
    }
    function af(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Pd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ie, e.pingedLanes = ie, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Gn(f), v = 1 << p;
        i[p] = ie, u[p] = yn, s[p] = yn, f &= ~v;
      }
    }
    function lf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Gn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Vd(e, t) {
      var a = Fl(t), i;
      switch (a) {
        case oi:
          i = Ul;
          break;
        case Hn:
          i = Or;
          break;
        case Tu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case bu:
        case Qc:
        case Eo:
        case Co:
        case Kc:
        case Es:
        case Gc:
        case _u:
        case Xc:
        case Rs:
        case qc:
        case Zc:
          i = el;
          break;
        case ku:
          i = xs;
          break;
        default:
          i = Xt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Xt ? Xt : i;
    }
    function Os(e, t, a) {
      if (ra)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = mr(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function eh(e, t) {
      if (ra)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = mr(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Bd(e, t) {
      return null;
    }
    var Fr = lt, Oi = oi, Va = Hn, Ba = ku, Ms = Xt;
    function $a() {
      return Ms;
    }
    function Xn(e) {
      Ms = e;
    }
    function th(e, t) {
      var a = Ms;
      try {
        return Ms = e, t();
      } finally {
        Ms = a;
      }
    }
    function nh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ns(e, t) {
      return e > t ? e : t;
    }
    function or(e, t) {
      return e !== 0 && e < t;
    }
    function rh(e) {
      var t = Fl(e);
      return or(Fr, t) ? or(Oi, t) ? bs(t) ? Va : Ba : Oi : Fr;
    }
    function uf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ls;
    function Mr(e) {
      Ls = e;
    }
    function Ey(e) {
      Ls(e);
    }
    var Ue;
    function wo(e) {
      Ue = e;
    }
    var of;
    function ah(e) {
      of = e;
    }
    var ih;
    function zs(e) {
      ih = e;
    }
    var As;
    function $d(e) {
      As = e;
    }
    var sf = !1, Us = [], tl = null, Mi = null, Ni = null, Pn = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), Pr = [], lh = [
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
    function ci(e, t, a, i, u) {
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
          tl = null;
          break;
        case "dragenter":
        case "dragleave":
          Mi = null;
          break;
        case "mouseover":
        case "mouseout":
          Ni = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Pn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Hr.delete(i);
          break;
        }
      }
    }
    function la(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ci(t, a, i, u, s);
        if (t !== null) {
          var p = No(t);
          p !== null && Ue(p);
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
          return tl = la(tl, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Mi = la(Mi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Ni = la(Ni, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, g = v.pointerId;
          return Pn.set(g, la(Pn.get(g) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var C = u, D = C.pointerId;
          return Hr.set(D, la(Hr.get(D) || null, e, t, a, i, C)), !0;
        }
      }
      return !1;
    }
    function Yd(e) {
      var t = Ks(e.target);
      if (t !== null) {
        var a = ya(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Re) {
            var u = _i(a);
            if (u !== null) {
              e.blockedOn = u, As(e.priority, function() {
                of(a);
              });
              return;
            }
          } else if (i === q) {
            var s = a.stateNode;
            if (uf(s)) {
              e.blockedOn = ki(a);
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
      }, i = 0; i < Pr.length && or(t, Pr[i].priority); i++)
        ;
      Pr.splice(i, 0, a), i === 0 && Yd(a);
    }
    function js(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = To(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          hy(s), u.target.dispatchEvent(s), my();
        } else {
          var f = No(i);
          return f !== null && Ue(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Wd(e, t, a) {
      js(e) && a.delete(t);
    }
    function Ry() {
      sf = !1, tl !== null && js(tl) && (tl = null), Mi !== null && js(Mi) && (Mi = null), Ni !== null && js(Ni) && (Ni = null), Pn.forEach(Wd), Hr.forEach(Wd);
    }
    function Hl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, sf || (sf = !0, R.unstable_scheduleCallback(R.unstable_NormalPriority, Ry)));
    }
    function Nu(e) {
      if (Us.length > 0) {
        Hl(Us[0], e);
        for (var t = 1; t < Us.length; t++) {
          var a = Us[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      tl !== null && Hl(tl, e), Mi !== null && Hl(Mi, e), Ni !== null && Hl(Ni, e);
      var i = function(p) {
        return Hl(p, e);
      };
      Pn.forEach(i), Hr.forEach(i);
      for (var u = 0; u < Pr.length; u++) {
        var s = Pr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Pr.length > 0; ) {
        var f = Pr[0];
        if (f.blockedOn !== null)
          break;
        Yd(f), f.blockedOn === null && Pr.shift();
      }
    }
    var yr = E.ReactCurrentBatchConfig, It = !0;
    function rr(e) {
      It = !!e;
    }
    function qn() {
      return It;
    }
    function gr(e, t, a) {
      var i = cf(t), u;
      switch (i) {
        case Fr:
          u = Ca;
          break;
        case Oi:
          u = xo;
          break;
        case Va:
        default:
          u = Vn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Ca(e, t, a, i) {
      var u = $a(), s = yr.transition;
      yr.transition = null;
      try {
        Xn(Fr), Vn(e, t, a, i);
      } finally {
        Xn(u), yr.transition = s;
      }
    }
    function xo(e, t, a, i) {
      var u = $a(), s = yr.transition;
      yr.transition = null;
      try {
        Xn(Oi), Vn(e, t, a, i);
      } finally {
        Xn(u), yr.transition = s;
      }
    }
    function Vn(e, t, a, i) {
      It && Fs(e, t, a, i);
    }
    function Fs(e, t, a, i) {
      var u = To(e, t, a, i);
      if (u === null) {
        Hy(e, t, i, Li, a), Id(e, i);
        return;
      }
      if (Cy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Id(e, i), t & Aa && uh(e)) {
        for (; u !== null; ) {
          var s = No(u);
          s !== null && Ey(s);
          var f = To(e, t, a, i);
          if (f === null && Hy(e, t, i, Li, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Hy(e, t, i, null, a);
    }
    var Li = null;
    function To(e, t, a, i) {
      Li = null;
      var u = gd(i), s = Ks(u);
      if (s !== null) {
        var f = ya(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var v = _i(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === q) {
            var g = f.stateNode;
            if (uf(g))
              return ki(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Li = s, null;
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
          return Fr;
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
          return Oi;
        case "message": {
          var t = Lc();
          switch (t) {
            case ps:
              return Fr;
            case zl:
              return Oi;
            case Zi:
            case Sy:
              return Va;
            case Su:
              return Ba;
            default:
              return Va;
          }
        }
        default:
          return Va;
      }
    }
    function Hs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ua(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Qd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function bo(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ra = null, _o = null, Lu = null;
    function Pl(e) {
      return Ra = e, _o = Ps(), !0;
    }
    function ff() {
      Ra = null, _o = null, Lu = null;
    }
    function nl() {
      if (Lu)
        return Lu;
      var e, t = _o, a = t.length, i, u = Ps(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Lu = u.slice(e, p), Lu;
    }
    function Ps() {
      return "value" in Ra ? Ra.value : Ra.textContent;
    }
    function Vl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ko() {
      return !0;
    }
    function Vs() {
      return !1;
    }
    function Nr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var g = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return g ? this.isDefaultPrevented = ko : this.isDefaultPrevented = Vs, this.isPropagationStopped = Vs, this;
      }
      return _t(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ko);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ko);
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
        isPersistent: ko
      }), t;
    }
    var Zn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, zi = Nr(Zn), Vr = _t({}, Zn, {
      view: 0,
      detail: 0
    }), oa = Nr(Vr), df, Bs, zu;
    function wy(e) {
      e !== zu && (zu && e.type === "mousemove" ? (df = e.screenX - zu.screenX, Bs = e.screenY - zu.screenY) : (df = 0, Bs = 0), zu = e);
    }
    var fi = _t({}, Vr, {
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
      getModifierState: bn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (wy(e), df);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Bs;
      }
    }), Kd = Nr(fi), Gd = _t({}, fi, {
      dataTransfer: 0
    }), Au = Nr(Gd), Xd = _t({}, Vr, {
      relatedTarget: 0
    }), rl = Nr(Xd), sh = _t({}, Zn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ch = Nr(sh), qd = _t({}, Zn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), pf = Nr(qd), xy = _t({}, Zn, {
      data: 0
    }), fh = Nr(xy), dh = fh, ph = {
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
    }, Uu = {
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
        var a = Vl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Uu[e.keyCode] || "Unidentified" : "";
    }
    var Do = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function vh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Do[e];
      return i ? !!a[i] : !1;
    }
    function bn(e) {
      return vh;
    }
    var by = _t({}, Vr, {
      key: Ty,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Vl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Vl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), hh = Nr(by), _y = _t({}, fi, {
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
    }), mh = Nr(_y), yh = _t({}, Vr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bn
    }), gh = Nr(yh), ky = _t({}, Zn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ia = Nr(ky), Zd = _t({}, fi, {
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
    }), Dy = Nr(Zd), Bl = [9, 13, 27, 32], $s = 229, al = _n && "CompositionEvent" in window, $l = null;
    _n && "documentMode" in document && ($l = document.documentMode);
    var Jd = _n && "TextEvent" in window && !$l, vf = _n && (!al || $l && $l > 8 && $l <= 11), Sh = 32, hf = String.fromCharCode(Sh);
    function Oy() {
      wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), wt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), wt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), wt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
      return e === "keydown" && t.keyCode === $s;
    }
    function tp(e, t) {
      switch (e) {
        case "keyup":
          return Bl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== $s;
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
    var ju = !1;
    function np(e, t, a, i, u) {
      var s, f;
      if (al ? s = mf(t) : ju ? tp(t, i) && (s = "onCompositionEnd") : yf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      vf && !Ch(i) && (!ju && s === "onCompositionStart" ? ju = Pl(u) : s === "onCompositionEnd" && ju && (f = nl()));
      var p = kh(a, s);
      if (p.length > 0) {
        var v = new fh(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var g = gf(i);
          g !== null && (v.data = g);
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
      if (ju) {
        if (e === "compositionend" || !al && tp(e, t)) {
          var a = nl();
          return ff(), ju = !1, a;
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
    function Rh(e, t, a, i, u, s, f) {
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
    function Is(e) {
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
    function Ny(e) {
      if (!_n)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Ys() {
      wt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function wh(e, t, a, i) {
      fo(i);
      var u = kh(t, "onChange");
      if (u.length > 0) {
        var s = new zi("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Il = null, n = null;
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
      if (Ci(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    _n && (m = Ny("input") && (!document.documentMode || document.documentMode > 9));
    function w(e, t) {
      Il = e, n = t, Il.attachEvent("onpropertychange", $);
    }
    function b() {
      Il && (Il.detachEvent("onpropertychange", $), Il = null, n = null);
    }
    function $(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function se(e, t, a) {
      e === "focusin" ? (b(), w(t, a)) : e === "focusout" && b();
    }
    function pe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function le(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Le(e, t) {
      if (e === "click")
        return c(t);
    }
    function Ve(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ye(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || et(e, "number", e.value);
    }
    function Bn(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window, v, g;
      if (r(p) ? v = d : Is(p) ? m ? v = Ve : (v = pe, g = se) : le(p) && (v = Le), v) {
        var C = v(t, a);
        if (C) {
          wh(e, C, i, u);
          return;
        }
      }
      g && g(t, p, a), t === "focusout" && Ye(p);
    }
    function L() {
      qt("onMouseEnter", ["mouseout", "mouseover"]), qt("onMouseLeave", ["mouseout", "mouseover"]), qt("onPointerEnter", ["pointerout", "pointerover"]), qt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function k(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !us(i)) {
        var g = i.relatedTarget || i.fromElement;
        if (g && (Ks(g) || yp(g)))
          return;
      }
      if (!(!v && !p)) {
        var C;
        if (u.window === u)
          C = u;
        else {
          var D = u.ownerDocument;
          D ? C = D.defaultView || D.parentWindow : C = window;
        }
        var _, H;
        if (v) {
          var I = i.relatedTarget || i.toElement;
          if (_ = a, H = I ? Ks(I) : null, H !== null) {
            var Z = ya(H);
            (H !== Z || H.tag !== P && H.tag !== ye) && (H = null);
          }
        } else
          _ = null, H = a;
        if (_ !== H) {
          var Oe = Kd, tt = "onMouseLeave", Qe = "onMouseEnter", Wt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Oe = mh, tt = "onPointerLeave", Qe = "onPointerEnter", Wt = "pointer");
          var At = _ == null ? C : bf(_), A = H == null ? C : bf(H), J = new Oe(tt, Wt + "leave", _, i, u);
          J.target = At, J.relatedTarget = A;
          var U = null, ve = Ks(u);
          if (ve === a) {
            var Ae = new Oe(Qe, Wt + "enter", H, i, u);
            Ae.target = A, Ae.relatedTarget = At, U = Ae;
          }
          tx(e, J, U, _, H);
        }
      }
    }
    function F(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ce = typeof Object.is == "function" ? Object.is : F;
    function Be(e, t) {
      if (ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!ir.call(t, s) || !ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function nt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function it(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function st(e, t) {
      for (var a = nt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Qi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = nt(it(a));
      }
    }
    function sr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return tn(e, u, s, f, p);
    }
    function tn(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, g = 0, C = e, D = null;
      e: for (; ; ) {
        for (var _ = null; C === t && (a === 0 || C.nodeType === Qi) && (f = s + a), C === i && (u === 0 || C.nodeType === Qi) && (p = s + u), C.nodeType === Qi && (s += C.nodeValue.length), (_ = C.firstChild) !== null; )
          D = C, C = _;
        for (; ; ) {
          if (C === e)
            break e;
          if (D === t && ++v === a && (f = s), D === i && ++g === u && (p = s), (_ = C.nextSibling) !== null)
            break;
          C = D, D = C.parentNode;
        }
        C = _;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Yl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var g = st(e, f), C = st(e, p);
        if (g && C) {
          if (u.rangeCount === 1 && u.anchorNode === g.node && u.anchorOffset === g.offset && u.focusNode === C.node && u.focusOffset === C.offset)
            return;
          var D = a.createRange();
          D.setStart(g.node, g.offset), u.removeAllRanges(), f > p ? (u.addRange(D), u.extend(C.node, C.offset)) : (D.setEnd(C.node, C.offset), u.addRange(D));
        }
      }
    }
    function xh(e) {
      return e && e.nodeType === Qi;
    }
    function L0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : xh(e) ? !1 : xh(t) ? L0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jw(e) {
      return e && e.ownerDocument && L0(e.ownerDocument.documentElement, e);
    }
    function Fw(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function z0() {
      for (var e = window, t = za(); t instanceof e.HTMLIFrameElement; ) {
        if (Fw(t))
          e = t.contentWindow;
        else
          return t;
        t = za(e.document);
      }
      return t;
    }
    function Ly(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Hw() {
      var e = z0();
      return {
        focusedElem: e,
        selectionRange: Ly(e) ? Vw(e) : null
      };
    }
    function Pw(e) {
      var t = z0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && jw(a)) {
        i !== null && Ly(a) && Bw(a, i);
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
    function Vw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = sr(e), t || {
        start: 0,
        end: 0
      };
    }
    function Bw(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Yl(e, t);
    }
    var $w = _n && "documentMode" in document && document.documentMode <= 11;
    function Iw() {
      wt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Cf = null, zy = null, ap = null, Ay = !1;
    function Yw(e) {
      if ("selectionStart" in e && Ly(e))
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
    function Ww(e) {
      return e.window === e ? e.document : e.nodeType === Ki ? e : e.ownerDocument;
    }
    function A0(e, t, a) {
      var i = Ww(a);
      if (!(Ay || Cf == null || Cf !== za(i))) {
        var u = Yw(Cf);
        if (!ap || !Be(ap, u)) {
          ap = u;
          var s = kh(zy, "onSelect");
          if (s.length > 0) {
            var f = new zi("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Cf;
          }
        }
      }
    }
    function Qw(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window;
      switch (t) {
        case "focusin":
          (Is(p) || p.contentEditable === "true") && (Cf = p, zy = a, ap = null);
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
    var Rf = {
      animationend: Th("Animation", "AnimationEnd"),
      animationiteration: Th("Animation", "AnimationIteration"),
      animationstart: Th("Animation", "AnimationStart"),
      transitionend: Th("Transition", "TransitionEnd")
    }, Uy = {}, U0 = {};
    _n && (U0 = document.createElement("div").style, "AnimationEvent" in window || (delete Rf.animationend.animation, delete Rf.animationiteration.animation, delete Rf.animationstart.animation), "TransitionEvent" in window || delete Rf.transitionend.transition);
    function bh(e) {
      if (Uy[e])
        return Uy[e];
      if (!Rf[e])
        return e;
      var t = Rf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in U0)
          return Uy[e] = t[a];
      return e;
    }
    var j0 = bh("animationend"), F0 = bh("animationiteration"), H0 = bh("animationstart"), P0 = bh("transitionend"), V0 = /* @__PURE__ */ new Map(), B0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Oo(e, t) {
      V0.set(e, t), wt(t, [e]);
    }
    function Kw() {
      for (var e = 0; e < B0.length; e++) {
        var t = B0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Oo(a, "on" + i);
      }
      Oo(j0, "onAnimationEnd"), Oo(F0, "onAnimationIteration"), Oo(H0, "onAnimationStart"), Oo("dblclick", "onDoubleClick"), Oo("focusin", "onFocus"), Oo("focusout", "onBlur"), Oo(P0, "onTransitionEnd");
    }
    function Gw(e, t, a, i, u, s, f) {
      var p = V0.get(t);
      if (p !== void 0) {
        var v = zi, g = t;
        switch (t) {
          case "keypress":
            if (Vl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = hh;
            break;
          case "focusin":
            g = "focus", v = rl;
            break;
          case "focusout":
            g = "blur", v = rl;
            break;
          case "beforeblur":
          case "afterblur":
            v = rl;
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
            v = Kd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Au;
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
            v = Ia;
            break;
          case "scroll":
            v = oa;
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
        var C = (s & Aa) !== 0;
        {
          var D = !C && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = Jw(a, p, i.type, C, D);
          if (_.length > 0) {
            var H = new v(p, g, null, i, u);
            e.push({
              event: H,
              listeners: _
            });
          }
        }
      }
    }
    Kw(), L(), Ys(), Iw(), Oy();
    function Xw(e, t, a, i, u, s, f) {
      Gw(e, t, a, i, u, s);
      var p = (s & yd) === 0;
      p && (k(e, t, a, i, u), Bn(e, t, a, i, u), Qw(e, t, a, i, u), Rh(e, t, a, i, u));
    }
    var ip = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], jy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ip));
    function $0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, xi(i, t, void 0, e), e.currentTarget = null;
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
        for (var g = 0; g < t.length; g++) {
          var C = t[g], D = C.instance, _ = C.currentTarget, H = C.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          $0(e, H, _), i = D;
        }
    }
    function I0(e, t) {
      for (var a = (t & Aa) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        qw(s, f, a);
      }
      cs();
    }
    function Zw(e, t, a, i, u) {
      var s = gd(a), f = [];
      Xw(f, e, i, a, s, t), I0(f, t);
    }
    function Nn(e, t) {
      jy.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = k1(t), u = nx(e);
      i.has(u) || (Y0(t, e, Ec, a), i.add(u));
    }
    function Fy(e, t, a) {
      jy.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Aa), Y0(a, e, i, t);
    }
    var _h = "_reactListening" + Math.random().toString(36).slice(2);
    function lp(e) {
      if (!e[_h]) {
        e[_h] = !0, Rt.forEach(function(a) {
          a !== "selectionchange" && (jy.has(a) || Fy(a, !1, e), Fy(a, !0, e));
        });
        var t = e.nodeType === Ki ? e : e.ownerDocument;
        t !== null && (t[_h] || (t[_h] = !0, Fy("selectionchange", !1, t)));
      }
    }
    function Y0(e, t, a, i, u) {
      var s = gr(e, t, a), f = void 0;
      ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qd(e, t, s, f) : ua(e, t, s) : f !== void 0 ? bo(e, t, s, f) : Hs(e, t, s);
    }
    function W0(e, t) {
      return e === t || e.nodeType === Yn && e.parentNode === t;
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
            if (v === q || v === ee) {
              var g = p.stateNode.containerInfo;
              if (W0(g, f))
                break;
              if (v === ee)
                for (var C = p.return; C !== null; ) {
                  var D = C.tag;
                  if (D === q || D === ee) {
                    var _ = C.stateNode.containerInfo;
                    if (W0(_, f))
                      return;
                  }
                  C = C.return;
                }
              for (; g !== null; ) {
                var H = Ks(g);
                if (H === null)
                  return;
                var I = H.tag;
                if (I === P || I === ye) {
                  p = s = H;
                  continue e;
                }
                g = g.parentNode;
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
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], g = e, C = null; g !== null; ) {
        var D = g, _ = D.stateNode, H = D.tag;
        if (H === P && _ !== null && (C = _, p !== null)) {
          var I = kl(g, p);
          I != null && v.push(up(g, I, C));
        }
        if (u)
          break;
        g = g.return;
      }
      return v;
    }
    function kh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === P && f !== null) {
          var v = f, g = kl(u, a);
          g != null && i.unshift(up(u, g, v));
          var C = kl(u, t);
          C != null && i.push(up(u, C, v));
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
      while (e && e.tag !== P);
      return e || null;
    }
    function ex(e, t) {
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
    function Q0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, g = v.alternate, C = v.stateNode, D = v.tag;
        if (g !== null && g === i)
          break;
        if (D === P && C !== null) {
          var _ = C;
          if (u) {
            var H = kl(p, s);
            H != null && f.unshift(up(p, H, _));
          } else if (!u) {
            var I = kl(p, s);
            I != null && f.push(up(p, I, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function tx(e, t, a, i, u) {
      var s = i && u ? ex(i, u) : null;
      i !== null && Q0(e, t, i, s, !1), u !== null && a !== null && Q0(e, a, u, s, !0);
    }
    function nx(e, t) {
      return e + "__bubble";
    }
    var Ya = !1, op = "dangerouslySetInnerHTML", Dh = "suppressContentEditableWarning", Mo = "suppressHydrationWarning", K0 = "autoFocus", Ws = "children", Qs = "style", Oh = "__html", Py, Mh, sp, G0, Nh, X0, q0;
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
      pd(e, t), gc(e, t), Nv(e, t, {
        registrationNameDependencies: gt,
        possibleRegistrationNames: St
      });
    }, X0 = _n && !document.documentMode, sp = function(e, t, a) {
      if (!Ya) {
        var i = Lh(a), u = Lh(t);
        u !== i && (Ya = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, G0 = function(e) {
      if (!Ya) {
        Ya = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Nh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, q0 = function(e, t) {
      var a = e.namespaceURI === Wi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var rx = /\r\n?/g, ax = /\u0000|\uFFFD/g;
    function Lh(e) {
      Un(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(rx, `
`).replace(ax, "");
    }
    function zh(e, t, a, i) {
      var u = Lh(t), s = Lh(e);
      if (s !== u && (i && (Ya || (Ya = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && je))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Z0(e) {
      return e.nodeType === Ki ? e : e.ownerDocument;
    }
    function ix() {
    }
    function Ah(e) {
      e.onclick = ix;
    }
    function lx(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Qs)
            f && Object.freeze(f), bv(t, f);
          else if (s === op) {
            var p = f ? f[Oh] : void 0;
            p != null && vv(t, p);
          } else if (s === Ws)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && uo(t, f);
            } else typeof f == "number" && uo(t, "" + f);
          else s === Dh || s === Mo || s === K0 || (gt.hasOwnProperty(s) ? f != null && (typeof f != "function" && Nh(s, f), s === "onScroll" && Nn("scroll", t)) : f != null && Lr(t, s, f, u));
        }
    }
    function ux(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Qs ? bv(e, f) : s === op ? vv(e, f) : s === Ws ? uo(e, f) : Lr(e, s, f, i);
      }
    }
    function ox(e, t, a, i) {
      var u, s = Z0(a), f, p = i;
      if (p === Wi && (p = ld(e)), p === Wi) {
        if (u = bl(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var g = v.firstChild;
          f = v.removeChild(g);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var C = f;
          t.multiple ? C.multiple = !0 : t.size && (C.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Wi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ir.call(Py, e) && (Py[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function sx(e, t) {
      return Z0(t).createTextNode(e);
    }
    function cx(e, t, a, i) {
      var u = bl(t, a);
      Mh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Nn("cancel", e), Nn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Nn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ip.length; f++)
            Nn(ip[f], e);
          s = a;
          break;
        case "source":
          Nn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Nn("error", e), Nn("load", e), s = a;
          break;
        case "details":
          Nn("toggle", e), s = a;
          break;
        case "input":
          ii(e, a), s = lo(e, a), Nn("invalid", e);
          break;
        case "option":
          Kt(e, a), s = a;
          break;
        case "select":
          fu(e, a), s = es(e, a), Nn("invalid", e);
          break;
        case "textarea":
          rd(e, a), s = nd(e, a), Nn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (mc(t, s), lx(t, e, i, s, u), t) {
        case "input":
          ai(e), V(e, a, !1);
          break;
        case "textarea":
          ai(e), dv(e);
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
    function fx(e, t, a, i, u) {
      Mh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = lo(e, a), p = lo(e, i), s = [];
          break;
        case "select":
          f = es(e, a), p = es(e, i), s = [];
          break;
        case "textarea":
          f = nd(e, a), p = nd(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Ah(e);
          break;
      }
      mc(t, p);
      var v, g, C = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Qs) {
            var D = f[v];
            for (g in D)
              D.hasOwnProperty(g) && (C || (C = {}), C[g] = "");
          } else v === op || v === Ws || v === Dh || v === Mo || v === K0 || (gt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], H = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === H || _ == null && H == null))
          if (v === Qs)
            if (_ && Object.freeze(_), H) {
              for (g in H)
                H.hasOwnProperty(g) && (!_ || !_.hasOwnProperty(g)) && (C || (C = {}), C[g] = "");
              for (g in _)
                _.hasOwnProperty(g) && H[g] !== _[g] && (C || (C = {}), C[g] = _[g]);
            } else
              C || (s || (s = []), s.push(v, C)), C = _;
          else if (v === op) {
            var I = _ ? _[Oh] : void 0, Z = H ? H[Oh] : void 0;
            I != null && Z !== I && (s = s || []).push(v, I);
          } else v === Ws ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === Dh || v === Mo || (gt.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && Nh(v, _), v === "onScroll" && Nn("scroll", e)), !s && H !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return C && (py(C, p[Qs]), (s = s || []).push(Qs, C)), s;
    }
    function dx(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = bl(a, i), f = bl(a, u);
      switch (ux(e, t, s, f), a) {
        case "input":
          x(e, u);
          break;
        case "textarea":
          fv(e, u);
          break;
        case "select":
          pc(e, u);
          break;
      }
    }
    function px(e) {
      {
        var t = e.toLowerCase();
        return is.hasOwnProperty(t) && is[t] || null;
      }
    }
    function vx(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = bl(t, a), Mh(t, a), t) {
        case "dialog":
          Nn("cancel", e), Nn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Nn("load", e);
          break;
        case "video":
        case "audio":
          for (var g = 0; g < ip.length; g++)
            Nn(ip[g], e);
          break;
        case "source":
          Nn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Nn("error", e), Nn("load", e);
          break;
        case "details":
          Nn("toggle", e);
          break;
        case "input":
          ii(e, a), Nn("invalid", e);
          break;
        case "option":
          Kt(e, a);
          break;
        case "select":
          fu(e, a), Nn("invalid", e);
          break;
        case "textarea":
          rd(e, a), Nn("invalid", e);
          break;
      }
      mc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var C = e.attributes, D = 0; D < C.length; D++) {
          var _ = C[D].name.toLowerCase();
          switch (_) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(C[D].name);
          }
        }
      }
      var H = null;
      for (var I in a)
        if (a.hasOwnProperty(I)) {
          var Z = a[I];
          if (I === Ws)
            typeof Z == "string" ? e.textContent !== Z && (a[Mo] !== !0 && zh(e.textContent, Z, s, f), H = [Ws, Z]) : typeof Z == "number" && e.textContent !== "" + Z && (a[Mo] !== !0 && zh(e.textContent, Z, s, f), H = [Ws, "" + Z]);
          else if (gt.hasOwnProperty(I))
            Z != null && (typeof Z != "function" && Nh(I, Z), I === "onScroll" && Nn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Oe = void 0, tt = Vt(I);
            if (a[Mo] !== !0) {
              if (!(I === Dh || I === Mo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              I === "value" || I === "checked" || I === "selected")) {
                if (I === op) {
                  var Qe = e.innerHTML, Wt = Z ? Z[Oh] : void 0;
                  if (Wt != null) {
                    var At = q0(e, Wt);
                    At !== Qe && sp(I, Qe, At);
                  }
                } else if (I === Qs) {
                  if (v.delete(I), X0) {
                    var A = fy(Z);
                    Oe = e.getAttribute("style"), A !== Oe && sp(I, Oe, A);
                  }
                } else if (p && !O)
                  v.delete(I.toLowerCase()), Oe = au(e, I, Z), Z !== Oe && sp(I, Oe, Z);
                else if (!mn(I, tt, p) && !Gt(I, Z, tt, p)) {
                  var J = !1;
                  if (tt !== null)
                    v.delete(tt.attributeName), Oe = yl(e, I, Z, tt);
                  else {
                    var U = i;
                    if (U === Wi && (U = ld(t)), U === Wi)
                      v.delete(I.toLowerCase());
                    else {
                      var ve = px(I);
                      ve !== null && ve !== I && (J = !0, v.delete(ve)), v.delete(I);
                    }
                    Oe = au(e, I, Z);
                  }
                  var Ae = O;
                  !Ae && Z !== Oe && !J && sp(I, Oe, Z);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Mo] !== !0 && G0(v), t) {
        case "input":
          ai(e), V(e, a, !0);
          break;
        case "textarea":
          ai(e), dv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Ah(e);
          break;
      }
      return H;
    }
    function hx(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Vy(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function By(e, t) {
      {
        if (Ya)
          return;
        Ya = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function $y(e, t, a) {
      {
        if (Ya)
          return;
        Ya = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Iy(e, t) {
      {
        if (t === "" || Ya)
          return;
        Ya = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function mx(e, t, a) {
      switch (t) {
        case "input":
          K(e, a);
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
      var yx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], J0 = [
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
      ], gx = J0.concat(["button"]), Sx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], eE = {
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
        var a = _t({}, e || eE), i = {
          tag: t
        };
        return J0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), gx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), yx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Ex = function(e, t) {
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
            return Sx.indexOf(t) === -1;
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
      }, Cx = function(e, t) {
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
        var s = Ex(e, u) ? null : i, f = s ? null : Cx(e, a), p = s || f;
        if (p) {
          var v = p.tag, g = !!s + "|" + e + "|" + v;
          if (!tE[g]) {
            tE[g] = !0;
            var C = e, D = "";
            if (e === "#text" ? /\S/.test(t) ? C = "Text nodes" : (C = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : C = "<" + e + ">", s) {
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", C, v, D, _);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", C, v);
          }
        }
      };
    }
    var Uh = "suppressHydrationWarning", jh = "$", Fh = "/$", dp = "$?", pp = "$!", Rx = "style", Yy = null, Wy = null;
    function wx(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ki:
        case od: {
          t = i === Ki ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : ud(null, "");
          break;
        }
        default: {
          var s = i === Yn ? e.parentNode : e, f = s.namespaceURI || null;
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
    function xx(e, t, a) {
      {
        var i = e, u = ud(i.namespace, t), s = fp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function RD(e) {
      return e;
    }
    function Tx(e) {
      Yy = qn(), Wy = Hw();
      var t = null;
      return rr(!1), t;
    }
    function bx(e) {
      Pw(Wy), rr(Yy), Yy = null, Wy = null;
    }
    function _x(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (cp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = fp(f.ancestorInfo, e);
          cp(null, p, v);
        }
        s = f.namespace;
      }
      var g = ox(e, t, a, s);
      return mp(u, g), eg(g, t), g;
    }
    function kx(e, t) {
      e.appendChild(t);
    }
    function Dx(e, t, a, i, u) {
      switch (cx(e, t, a, i), t) {
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
    function Ox(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = fp(f.ancestorInfo, t);
          cp(null, p, v);
        }
      }
      return fx(e, t, a, i);
    }
    function Qy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Mx(e, t, a, i) {
      {
        var u = a;
        cp(null, e, u.ancestorInfo);
      }
      var s = sx(e, t);
      return mp(i, s), s;
    }
    function Nx() {
      var e = window.event;
      return e === void 0 ? Va : cf(e.type);
    }
    var Ky = typeof setTimeout == "function" ? setTimeout : void 0, Lx = typeof clearTimeout == "function" ? clearTimeout : void 0, Gy = -1, nE = typeof Promise == "function" ? Promise : void 0, zx = typeof queueMicrotask == "function" ? queueMicrotask : typeof nE < "u" ? function(e) {
      return nE.resolve(null).then(e).catch(Ax);
    } : Ky;
    function Ax(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ux(e, t, a, i) {
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
    function jx(e, t, a, i, u, s) {
      dx(e, t, a, i, u), eg(e, u);
    }
    function rE(e) {
      uo(e, "");
    }
    function Fx(e, t, a) {
      e.nodeValue = a;
    }
    function Hx(e, t) {
      e.appendChild(t);
    }
    function Px(e, t) {
      var a;
      e.nodeType === Yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ah(a);
    }
    function Vx(e, t, a) {
      e.insertBefore(t, a);
    }
    function Bx(e, t, a) {
      e.nodeType === Yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $x(e, t) {
      e.removeChild(t);
    }
    function Ix(e, t) {
      e.nodeType === Yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Xy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Yn) {
          var s = u.data;
          if (s === Fh)
            if (i === 0) {
              e.removeChild(u), Nu(t);
              return;
            } else
              i--;
          else (s === jh || s === dp || s === pp) && i++;
        }
        a = u;
      } while (a);
      Nu(t);
    }
    function Yx(e, t) {
      e.nodeType === Yn ? Xy(e.parentNode, t) : e.nodeType === Zr && Xy(e, t), Nu(e);
    }
    function Wx(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Qx(e) {
      e.nodeValue = "";
    }
    function Kx(e, t) {
      e = e;
      var a = t[Rx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = hc("display", i);
    }
    function Gx(e, t) {
      e.nodeValue = t;
    }
    function Xx(e) {
      e.nodeType === Zr ? e.textContent = "" : e.nodeType === Ki && e.documentElement && e.removeChild(e.documentElement);
    }
    function qx(e, t, a) {
      return e.nodeType !== Zr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Zx(e, t) {
      return t === "" || e.nodeType !== Qi ? null : e;
    }
    function Jx(e) {
      return e.nodeType !== Yn ? null : e;
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
        if (t === Zr || t === Qi)
          break;
        if (t === Yn) {
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
      var g = (s.mode & Ot) !== Ze;
      return vx(e, t, a, p, i, g, f);
    }
    function l1(e, t, a, i) {
      return mp(a, e), a.mode & Ot, hx(e, t);
    }
    function u1(e, t) {
      mp(t, e);
    }
    function o1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Yn) {
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
        if (t.nodeType === Yn) {
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
      Nu(e);
    }
    function c1(e) {
      Nu(e);
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
      t.nodeType === Zr ? Vy(e, t) : t.nodeType === Yn || By(e, t);
    }
    function h1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Zr ? Vy(a, t) : t.nodeType === Yn || By(a, t));
      }
    }
    function m1(e, t, a, i, u) {
      (u || t[Uh] !== !0) && (i.nodeType === Zr ? Vy(a, i) : i.nodeType === Yn || By(a, i));
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
    function R1(e, t, a, i, u) {
      (u || t[Uh] !== !0) && Iy(a, i);
    }
    function w1(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function x1(e) {
      lp(e);
    }
    var xf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + xf, Zy = "__reactProps$" + xf, hp = "__reactContainer$" + xf, Jy = "__reactEvents$" + xf, T1 = "__reactListeners$" + xf, b1 = "__reactHandles$" + xf;
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
    function Ks(e) {
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
    function No(e) {
      var t = e[Tf] || e[hp];
      return t && (t.tag === P || t.tag === ye || t.tag === Re || t.tag === q) ? t : null;
    }
    function bf(e) {
      if (e.tag === P || e.tag === ye)
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
    var uE = {}, oE = E.ReactDebugCurrentFrame;
    function Bh(e) {
      if (e) {
        var t = e._owner, a = $i(e.type, e._source, t ? t.type : null);
        oE.setExtraStackFrame(a);
      } else
        oE.setExtraStackFrame(null);
    }
    function il(e, t, a, i, u) {
      {
        var s = Function.call.bind(ir);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              p = g;
            }
            p && !(p instanceof Error) && (Bh(u), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Bh(null)), p instanceof Error && !(p.message in uE) && (uE[p.message] = !0, Bh(u), y("Failed %s type: %s", a, p.message), Bh(null));
          }
      }
    }
    var tg = [], $h;
    $h = [];
    var Fu = -1;
    function Lo(e) {
      return {
        current: e
      };
    }
    function sa(e, t) {
      if (Fu < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== $h[Fu] && y("Unexpected Fiber popped."), e.current = tg[Fu], tg[Fu] = null, $h[Fu] = null, Fu--;
    }
    function ca(e, t, a) {
      Fu++, tg[Fu] = e.current, $h[Fu] = a, e.current = t;
    }
    var ng;
    ng = {};
    var di = {};
    Object.freeze(di);
    var Hu = Lo(di), Wl = Lo(!1), rg = di;
    function _f(e, t, a) {
      return a && Ql(t) ? rg : Hu.current;
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
          return di;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = dt(e) || "Unknown";
          il(i, s, "context", p);
        }
        return u && sE(e, t, s), s;
      }
    }
    function Ih() {
      return Wl.current;
    }
    function Ql(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Yh(e) {
      sa(Wl, e), sa(Hu, e);
    }
    function ag(e) {
      sa(Wl, e), sa(Hu, e);
    }
    function cE(e, t, a) {
      {
        if (Hu.current !== di)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ca(Hu, t, e), ca(Wl, a, e);
      }
    }
    function fE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = dt(e) || "Unknown";
            ng[s] || (ng[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((dt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = dt(e) || "Unknown";
          il(u, f, "child context", v);
        }
        return _t({}, a, f);
      }
    }
    function Wh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || di;
        return rg = Hu.current, ca(Hu, a, e), ca(Wl, Wl.current, e), !0;
      }
    }
    function dE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = fE(e, t, rg);
          i.__reactInternalMemoizedMergedChildContext = u, sa(Wl, e), sa(Hu, e), ca(Hu, u, e), ca(Wl, a, e);
        } else
          sa(Wl, e), ca(Wl, a, e);
      }
    }
    function D1(e) {
      {
        if (!gu(e) || e.tag !== N)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case q:
              return t.stateNode.context;
            case N: {
              var a = t.type;
              if (Ql(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var zo = 0, Qh = 1, Pu = null, ig = !1, lg = !1;
    function pE(e) {
      Pu === null ? Pu = [e] : Pu.push(e);
    }
    function O1(e) {
      ig = !0, pE(e);
    }
    function vE() {
      ig && Ao();
    }
    function Ao() {
      if (!lg && Pu !== null) {
        lg = !0;
        var e = 0, t = $a();
        try {
          var a = !0, i = Pu;
          for (Xn(Fr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Pu = null, ig = !1;
        } catch (s) {
          throw Pu !== null && (Pu = Pu.slice(e + 1)), Ed(ps, Ao), s;
        } finally {
          Xn(t), lg = !1;
        }
      }
      return null;
    }
    var Df = [], Of = 0, Kh = null, Gh = 0, Ai = [], Ui = 0, Gs = null, Vu = 1, Bu = "";
    function M1(e) {
      return qs(), (e.flags & Ti) !== qe;
    }
    function N1(e) {
      return qs(), Gh;
    }
    function L1() {
      var e = Bu, t = Vu, a = t & ~z1(t);
      return a.toString(32) + e;
    }
    function Xs(e, t) {
      qs(), Df[Of++] = Gh, Df[Of++] = Kh, Kh = e, Gh = t;
    }
    function hE(e, t, a) {
      qs(), Ai[Ui++] = Vu, Ai[Ui++] = Bu, Ai[Ui++] = Gs, Gs = e;
      var i = Vu, u = Bu, s = Xh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Xh(t) + s;
      if (v > 30) {
        var g = s - s % 5, C = (1 << g) - 1, D = (f & C).toString(32), _ = f >> g, H = s - g, I = Xh(t) + H, Z = p << H, Oe = Z | _, tt = D + u;
        Vu = 1 << I | Oe, Bu = tt;
      } else {
        var Qe = p << s, Wt = Qe | f, At = u;
        Vu = 1 << v | Wt, Bu = At;
      }
    }
    function ug(e) {
      qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Xs(e, a), hE(e, a, i);
      }
    }
    function Xh(e) {
      return 32 - Kn(e);
    }
    function z1(e) {
      return 1 << Xh(e) - 1;
    }
    function og(e) {
      for (; e === Kh; )
        Kh = Df[--Of], Df[Of] = null, Gh = Df[--Of], Df[Of] = null;
      for (; e === Gs; )
        Gs = Ai[--Ui], Ai[Ui] = null, Bu = Ai[--Ui], Ai[Ui] = null, Vu = Ai[--Ui], Ai[Ui] = null;
    }
    function A1() {
      return qs(), Gs !== null ? {
        id: Vu,
        overflow: Bu
      } : null;
    }
    function U1(e, t) {
      qs(), Ai[Ui++] = Vu, Ai[Ui++] = Bu, Ai[Ui++] = Gs, Vu = t.id, Bu = t.overflow, Gs = e;
    }
    function qs() {
      $r() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Br = null, ji = null, ll = !1, Zs = !1, Uo = null;
    function j1() {
      ll && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function mE() {
      Zs = !0;
    }
    function F1() {
      return Zs;
    }
    function H1(e) {
      var t = e.stateNode.containerInfo;
      return ji = r1(t), Br = e, ll = !0, Uo = null, Zs = !1, !0;
    }
    function P1(e, t, a) {
      return ji = a1(t), Br = e, ll = !0, Uo = null, Zs = !1, a !== null && U1(e, a), !0;
    }
    function yE(e, t) {
      switch (e.tag) {
        case q: {
          v1(e.stateNode.containerInfo, t);
          break;
        }
        case P: {
          var a = (e.mode & Ot) !== Ze;
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
        case Re: {
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
      i === null ? (e.deletions = [a], e.flags |= Ua) : i.push(a);
    }
    function sg(e, t) {
      {
        if (Zs)
          return;
        switch (e.tag) {
          case q: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case P:
                var i = t.type;
                t.pendingProps, y1(a, i);
                break;
              case ye:
                var u = t.pendingProps;
                g1(a, u);
                break;
            }
            break;
          }
          case P: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case P: {
                var v = t.type, g = t.pendingProps, C = (e.mode & Ot) !== Ze;
                C1(
                  s,
                  f,
                  p,
                  v,
                  g,
                  // TODO: Delete this argument when we remove the legacy root API.
                  C
                );
                break;
              }
              case ye: {
                var D = t.pendingProps, _ = (e.mode & Ot) !== Ze;
                R1(
                  s,
                  f,
                  p,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
            }
            break;
          }
          case Re: {
            var H = e.memoizedState, I = H.dehydrated;
            if (I !== null) switch (t.tag) {
              case P:
                var Z = t.type;
                t.pendingProps, S1(I, Z);
                break;
              case ye:
                var Oe = t.pendingProps;
                E1(I, Oe);
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
      t.flags = t.flags & ~ea | Dn, sg(e, t);
    }
    function EE(e, t) {
      switch (e.tag) {
        case P: {
          var a = e.type;
          e.pendingProps;
          var i = qx(t, a);
          return i !== null ? (e.stateNode = i, Br = e, ji = n1(i), !0) : !1;
        }
        case ye: {
          var u = e.pendingProps, s = Zx(t, u);
          return s !== null ? (e.stateNode = s, Br = e, ji = null, !0) : !1;
        }
        case Re: {
          var f = Jx(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: A1(),
              retryLane: aa
            };
            e.memoizedState = p;
            var v = Y_(f);
            return v.return = e, e.child = v, Br = e, ji = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function cg(e) {
      return (e.mode & Ot) !== Ze && (e.flags & Ke) === qe;
    }
    function fg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function dg(e) {
      if (ll) {
        var t = ji;
        if (!t) {
          cg(e) && (sg(Br, e), fg()), SE(Br, e), ll = !1, Br = e;
          return;
        }
        var a = t;
        if (!EE(e, t)) {
          cg(e) && (sg(Br, e), fg()), t = vp(a);
          var i = Br;
          if (!t || !EE(e, t)) {
            SE(Br, e), ll = !1, Br = e;
            return;
          }
          gE(i, a);
        }
      }
    }
    function V1(e, t, a) {
      var i = e.stateNode, u = !Zs, s = i1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function B1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = l1(t, a, e);
      if (i) {
        var u = Br;
        if (u !== null)
          switch (u.tag) {
            case q: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ot) !== Ze;
              d1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case P: {
              var p = u.type, v = u.memoizedProps, g = u.stateNode, C = (u.mode & Ot) !== Ze;
              p1(
                p,
                v,
                g,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                C
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
      for (var t = e.return; t !== null && t.tag !== P && t.tag !== q && t.tag !== Re; )
        t = t.return;
      Br = t;
    }
    function qh(e) {
      if (e !== Br)
        return !1;
      if (!ll)
        return CE(e), ll = !0, !1;
      if (e.tag !== q && (e.tag !== P || f1(e.type) && !Qy(e.type, e.memoizedProps))) {
        var t = ji;
        if (t)
          if (cg(e))
            RE(e), fg();
          else
            for (; t; )
              gE(e, t), t = vp(t);
      }
      return CE(e), e.tag === Re ? ji = I1(e) : ji = Br ? vp(e.stateNode) : null, !0;
    }
    function Y1() {
      return ll && ji !== null;
    }
    function RE(e) {
      for (var t = ji; t; )
        yE(e, t), t = vp(t);
    }
    function Mf() {
      Br = null, ji = null, ll = !1, Zs = !1;
    }
    function wE() {
      Uo !== null && (mR(Uo), Uo = null);
    }
    function $r() {
      return ll;
    }
    function pg(e) {
      Uo === null ? Uo = [e] : Uo.push(e);
    }
    var W1 = E.ReactCurrentBatchConfig, Q1 = null;
    function K1() {
      return W1.transition;
    }
    var ul = {
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
          a.mode & pn && (t = a), a = a.return;
        return t;
      }, Js = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, gp = [], Sp = [], Ep = [], Cp = [], Rp = [], wp = [], ec = /* @__PURE__ */ new Set();
      ul.recordUnsafeLifecycleWarnings = function(e, t) {
        ec.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & pn && typeof t.UNSAFE_componentWillMount == "function" && Sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & pn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Cp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Rp.push(e), e.mode & pn && typeof t.UNSAFE_componentWillUpdate == "function" && wp.push(e));
      }, ul.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(_) {
          e.add(dt(_) || "Component"), ec.add(_.type);
        }), gp = []);
        var t = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(_) {
          t.add(dt(_) || "Component"), ec.add(_.type);
        }), Sp = []);
        var a = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(_) {
          a.add(dt(_) || "Component"), ec.add(_.type);
        }), Ep = []);
        var i = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(_) {
          i.add(dt(_) || "Component"), ec.add(_.type);
        }), Cp = []);
        var u = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(_) {
          u.add(dt(_) || "Component"), ec.add(_.type);
        }), Rp = []);
        var s = /* @__PURE__ */ new Set();
        if (wp.length > 0 && (wp.forEach(function(_) {
          s.add(dt(_) || "Component"), ec.add(_.type);
        }), wp = []), t.size > 0) {
          var f = Js(t);
          y(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Js(i);
          y(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Js(s);
          y(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var g = Js(e);
          B(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (a.size > 0) {
          var C = Js(a);
          B(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (u.size > 0) {
          var D = Js(u);
          B(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var Zh = /* @__PURE__ */ new Map(), xE = /* @__PURE__ */ new Set();
      ul.recordLegacyContextWarning = function(e, t) {
        var a = G1(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!xE.has(e.type)) {
          var i = Zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Zh.set(a, i)), i.push(e));
        }
      }, ul.flushLegacyContextWarning = function() {
        Zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(dt(s) || "Component"), xE.add(s.type);
            });
            var u = Js(i);
            try {
              cn(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Rn();
            }
          }
        });
      }, ul.discardPendingWarnings = function() {
        gp = [], Sp = [], Ep = [], Cp = [], Rp = [], wp = [], Zh = /* @__PURE__ */ new Map();
      };
    }
    var vg, hg, mg, yg, gg, TE = function(e, t) {
    };
    vg = !1, hg = !1, mg = {}, yg = {}, gg = {}, TE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = dt(t) || "Component";
        yg[a] || (yg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function X1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function xp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & pn || te) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== N) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !X1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = dt(e) || "Component";
          mg[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), mg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== N)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          va(i, "ref");
          var g = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === g)
            return t.ref;
          var C = function(D) {
            var _ = v.refs;
            D === null ? delete _[g] : _[g] = D;
          };
          return C._stringRef = g, C;
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
        var t = dt(e) || "Component";
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
      function t(A, J) {
        if (e) {
          var U = A.deletions;
          U === null ? (A.deletions = [J], A.flags |= Ua) : U.push(J);
        }
      }
      function a(A, J) {
        if (!e)
          return null;
        for (var U = J; U !== null; )
          t(A, U), U = U.sibling;
        return null;
      }
      function i(A, J) {
        for (var U = /* @__PURE__ */ new Map(), ve = J; ve !== null; )
          ve.key !== null ? U.set(ve.key, ve) : U.set(ve.index, ve), ve = ve.sibling;
        return U;
      }
      function u(A, J) {
        var U = sc(A, J);
        return U.index = 0, U.sibling = null, U;
      }
      function s(A, J, U) {
        if (A.index = U, !e)
          return A.flags |= Ti, J;
        var ve = A.alternate;
        if (ve !== null) {
          var Ae = ve.index;
          return Ae < J ? (A.flags |= Dn, J) : Ae;
        } else
          return A.flags |= Dn, J;
      }
      function f(A) {
        return e && A.alternate === null && (A.flags |= Dn), A;
      }
      function p(A, J, U, ve) {
        if (J === null || J.tag !== ye) {
          var Ae = p0(U, A.mode, ve);
          return Ae.return = A, Ae;
        } else {
          var Ne = u(J, U);
          return Ne.return = A, Ne;
        }
      }
      function v(A, J, U, ve) {
        var Ae = U.type;
        if (Ae === hi)
          return C(A, J, U.props.children, ve, U.key);
        if (J !== null && (J.elementType === Ae || // Keep this check inline so it only runs on the false path:
        NR(J, U) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ae == "object" && Ae !== null && Ae.$$typeof === pt && bE(Ae) === J.type)) {
          var Ne = u(J, U.props);
          return Ne.ref = xp(A, J, U), Ne.return = A, Ne._debugSource = U._source, Ne._debugOwner = U._owner, Ne;
        }
        var ot = d0(U, A.mode, ve);
        return ot.ref = xp(A, J, U), ot.return = A, ot;
      }
      function g(A, J, U, ve) {
        if (J === null || J.tag !== ee || J.stateNode.containerInfo !== U.containerInfo || J.stateNode.implementation !== U.implementation) {
          var Ae = v0(U, A.mode, ve);
          return Ae.return = A, Ae;
        } else {
          var Ne = u(J, U.children || []);
          return Ne.return = A, Ne;
        }
      }
      function C(A, J, U, ve, Ae) {
        if (J === null || J.tag !== G) {
          var Ne = Qo(U, A.mode, ve, Ae);
          return Ne.return = A, Ne;
        } else {
          var ot = u(J, U);
          return ot.return = A, ot;
        }
      }
      function D(A, J, U) {
        if (typeof J == "string" && J !== "" || typeof J == "number") {
          var ve = p0("" + J, A.mode, U);
          return ve.return = A, ve;
        }
        if (typeof J == "object" && J !== null) {
          switch (J.$$typeof) {
            case zr: {
              var Ae = d0(J, A.mode, U);
              return Ae.ref = xp(A, null, J), Ae.return = A, Ae;
            }
            case dr: {
              var Ne = v0(J, A.mode, U);
              return Ne.return = A, Ne;
            }
            case pt: {
              var ot = J._payload, ht = J._init;
              return D(A, ht(ot), U);
            }
          }
          if (kt(J) || Ct(J)) {
            var hn = Qo(J, A.mode, U, null);
            return hn.return = A, hn;
          }
          Jh(A, J);
        }
        return typeof J == "function" && em(A), null;
      }
      function _(A, J, U, ve) {
        var Ae = J !== null ? J.key : null;
        if (typeof U == "string" && U !== "" || typeof U == "number")
          return Ae !== null ? null : p(A, J, "" + U, ve);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case zr:
              return U.key === Ae ? v(A, J, U, ve) : null;
            case dr:
              return U.key === Ae ? g(A, J, U, ve) : null;
            case pt: {
              var Ne = U._payload, ot = U._init;
              return _(A, J, ot(Ne), ve);
            }
          }
          if (kt(U) || Ct(U))
            return Ae !== null ? null : C(A, J, U, ve, null);
          Jh(A, U);
        }
        return typeof U == "function" && em(A), null;
      }
      function H(A, J, U, ve, Ae) {
        if (typeof ve == "string" && ve !== "" || typeof ve == "number") {
          var Ne = A.get(U) || null;
          return p(J, Ne, "" + ve, Ae);
        }
        if (typeof ve == "object" && ve !== null) {
          switch (ve.$$typeof) {
            case zr: {
              var ot = A.get(ve.key === null ? U : ve.key) || null;
              return v(J, ot, ve, Ae);
            }
            case dr: {
              var ht = A.get(ve.key === null ? U : ve.key) || null;
              return g(J, ht, ve, Ae);
            }
            case pt:
              var hn = ve._payload, nn = ve._init;
              return H(A, J, U, nn(hn), Ae);
          }
          if (kt(ve) || Ct(ve)) {
            var ar = A.get(U) || null;
            return C(J, ar, ve, Ae, null);
          }
          Jh(J, ve);
        }
        return typeof ve == "function" && em(J), null;
      }
      function I(A, J, U) {
        {
          if (typeof A != "object" || A === null)
            return J;
          switch (A.$$typeof) {
            case zr:
            case dr:
              TE(A, U);
              var ve = A.key;
              if (typeof ve != "string")
                break;
              if (J === null) {
                J = /* @__PURE__ */ new Set(), J.add(ve);
                break;
              }
              if (!J.has(ve)) {
                J.add(ve);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ve);
              break;
            case pt:
              var Ae = A._payload, Ne = A._init;
              I(Ne(Ae), J, U);
              break;
          }
        }
        return J;
      }
      function Z(A, J, U, ve) {
        for (var Ae = null, Ne = 0; Ne < U.length; Ne++) {
          var ot = U[Ne];
          Ae = I(ot, Ae, A);
        }
        for (var ht = null, hn = null, nn = J, ar = 0, rn = 0, Jn = null; nn !== null && rn < U.length; rn++) {
          nn.index > rn ? (Jn = nn, nn = null) : Jn = nn.sibling;
          var da = _(A, nn, U[rn], ve);
          if (da === null) {
            nn === null && (nn = Jn);
            break;
          }
          e && nn && da.alternate === null && t(A, nn), ar = s(da, ar, rn), hn === null ? ht = da : hn.sibling = da, hn = da, nn = Jn;
        }
        if (rn === U.length) {
          if (a(A, nn), $r()) {
            var Xr = rn;
            Xs(A, Xr);
          }
          return ht;
        }
        if (nn === null) {
          for (; rn < U.length; rn++) {
            var vi = D(A, U[rn], ve);
            vi !== null && (ar = s(vi, ar, rn), hn === null ? ht = vi : hn.sibling = vi, hn = vi);
          }
          if ($r()) {
            var ba = rn;
            Xs(A, ba);
          }
          return ht;
        }
        for (var _a = i(A, nn); rn < U.length; rn++) {
          var pa = H(_a, A, rn, U[rn], ve);
          pa !== null && (e && pa.alternate !== null && _a.delete(pa.key === null ? rn : pa.key), ar = s(pa, ar, rn), hn === null ? ht = pa : hn.sibling = pa, hn = pa);
        }
        if (e && _a.forEach(function(Xf) {
          return t(A, Xf);
        }), $r()) {
          var Gu = rn;
          Xs(A, Gu);
        }
        return ht;
      }
      function Oe(A, J, U, ve) {
        var Ae = Ct(U);
        if (typeof Ae != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          U[Symbol.toStringTag] === "Generator" && (hg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hg = !0), U.entries === Ae && (vg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vg = !0);
          var Ne = Ae.call(U);
          if (Ne)
            for (var ot = null, ht = Ne.next(); !ht.done; ht = Ne.next()) {
              var hn = ht.value;
              ot = I(hn, ot, A);
            }
        }
        var nn = Ae.call(U);
        if (nn == null)
          throw new Error("An iterable object provided no iterator.");
        for (var ar = null, rn = null, Jn = J, da = 0, Xr = 0, vi = null, ba = nn.next(); Jn !== null && !ba.done; Xr++, ba = nn.next()) {
          Jn.index > Xr ? (vi = Jn, Jn = null) : vi = Jn.sibling;
          var _a = _(A, Jn, ba.value, ve);
          if (_a === null) {
            Jn === null && (Jn = vi);
            break;
          }
          e && Jn && _a.alternate === null && t(A, Jn), da = s(_a, da, Xr), rn === null ? ar = _a : rn.sibling = _a, rn = _a, Jn = vi;
        }
        if (ba.done) {
          if (a(A, Jn), $r()) {
            var pa = Xr;
            Xs(A, pa);
          }
          return ar;
        }
        if (Jn === null) {
          for (; !ba.done; Xr++, ba = nn.next()) {
            var Gu = D(A, ba.value, ve);
            Gu !== null && (da = s(Gu, da, Xr), rn === null ? ar = Gu : rn.sibling = Gu, rn = Gu);
          }
          if ($r()) {
            var Xf = Xr;
            Xs(A, Xf);
          }
          return ar;
        }
        for (var nv = i(A, Jn); !ba.done; Xr++, ba = nn.next()) {
          var tu = H(nv, A, Xr, ba.value, ve);
          tu !== null && (e && tu.alternate !== null && nv.delete(tu.key === null ? Xr : tu.key), da = s(tu, da, Xr), rn === null ? ar = tu : rn.sibling = tu, rn = tu);
        }
        if (e && nv.forEach(function(Rk) {
          return t(A, Rk);
        }), $r()) {
          var Ck = Xr;
          Xs(A, Ck);
        }
        return ar;
      }
      function tt(A, J, U, ve) {
        if (J !== null && J.tag === ye) {
          a(A, J.sibling);
          var Ae = u(J, U);
          return Ae.return = A, Ae;
        }
        a(A, J);
        var Ne = p0(U, A.mode, ve);
        return Ne.return = A, Ne;
      }
      function Qe(A, J, U, ve) {
        for (var Ae = U.key, Ne = J; Ne !== null; ) {
          if (Ne.key === Ae) {
            var ot = U.type;
            if (ot === hi) {
              if (Ne.tag === G) {
                a(A, Ne.sibling);
                var ht = u(Ne, U.props.children);
                return ht.return = A, ht._debugSource = U._source, ht._debugOwner = U._owner, ht;
              }
            } else if (Ne.elementType === ot || // Keep this check inline so it only runs on the false path:
            NR(Ne, U) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ot == "object" && ot !== null && ot.$$typeof === pt && bE(ot) === Ne.type) {
              a(A, Ne.sibling);
              var hn = u(Ne, U.props);
              return hn.ref = xp(A, Ne, U), hn.return = A, hn._debugSource = U._source, hn._debugOwner = U._owner, hn;
            }
            a(A, Ne);
            break;
          } else
            t(A, Ne);
          Ne = Ne.sibling;
        }
        if (U.type === hi) {
          var nn = Qo(U.props.children, A.mode, ve, U.key);
          return nn.return = A, nn;
        } else {
          var ar = d0(U, A.mode, ve);
          return ar.ref = xp(A, J, U), ar.return = A, ar;
        }
      }
      function Wt(A, J, U, ve) {
        for (var Ae = U.key, Ne = J; Ne !== null; ) {
          if (Ne.key === Ae)
            if (Ne.tag === ee && Ne.stateNode.containerInfo === U.containerInfo && Ne.stateNode.implementation === U.implementation) {
              a(A, Ne.sibling);
              var ot = u(Ne, U.children || []);
              return ot.return = A, ot;
            } else {
              a(A, Ne);
              break;
            }
          else
            t(A, Ne);
          Ne = Ne.sibling;
        }
        var ht = v0(U, A.mode, ve);
        return ht.return = A, ht;
      }
      function At(A, J, U, ve) {
        var Ae = typeof U == "object" && U !== null && U.type === hi && U.key === null;
        if (Ae && (U = U.props.children), typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case zr:
              return f(Qe(A, J, U, ve));
            case dr:
              return f(Wt(A, J, U, ve));
            case pt:
              var Ne = U._payload, ot = U._init;
              return At(A, J, ot(Ne), ve);
          }
          if (kt(U))
            return Z(A, J, U, ve);
          if (Ct(U))
            return Oe(A, J, U, ve);
          Jh(A, U);
        }
        return typeof U == "string" && U !== "" || typeof U == "number" ? f(tt(A, J, "" + U, ve)) : (typeof U == "function" && em(A), a(A, J));
      }
      return At;
    }
    var Nf = _E(!0), kE = _E(!1);
    function q1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = sc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = sc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Z1(e, t) {
      for (var a = e.child; a !== null; )
        H_(a, t), a = a.sibling;
    }
    var Sg = Lo(null), Eg;
    Eg = {};
    var tm = null, Lf = null, Cg = null, nm = !1;
    function rm() {
      tm = null, Lf = null, Cg = null, nm = !1;
    }
    function DE() {
      nm = !0;
    }
    function OE() {
      nm = !1;
    }
    function ME(e, t, a) {
      ca(Sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Eg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Eg;
    }
    function Rg(e, t) {
      var a = Sg.current;
      sa(Sg, t), e._currentValue = a;
    }
    function wg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Mu(i.childLanes, t) ? u !== null && !Mu(u.childLanes, t) && (u.childLanes = xt(u.childLanes, t)) : (i.childLanes = xt(i.childLanes, t), u !== null && (u.childLanes = xt(u.childLanes, t))), i === a)
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
              if (i.tag === N) {
                var p = _s(a), v = $u(yn, p);
                v.tag = im;
                var g = i.updateQueue;
                if (g !== null) {
                  var C = g.shared, D = C.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), C.pending = v;
                }
              }
              i.lanes = xt(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = xt(_.lanes, a)), wg(i.return, a, e), s.lanes = xt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === de)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === rt) {
          var H = i.return;
          if (H === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          H.lanes = xt(H.lanes, a);
          var I = H.alternate;
          I !== null && (I.lanes = xt(I.lanes, a)), wg(H, a, e), u = i.sibling;
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
            var Z = u.sibling;
            if (Z !== null) {
              Z.return = u.return, u = Z;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function zf(e, t) {
      tm = e, Lf = null, Cg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ia(a.lanes, t) && Hp(), a.firstContext = null);
      }
    }
    function cr(e) {
      nm && y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Cg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lf === null) {
          if (tm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lf = a, tm.dependencies = {
            lanes: ie,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var tc = null;
    function xg(e) {
      tc === null ? tc = [e] : tc.push(e);
    }
    function tT() {
      if (tc !== null) {
        for (var e = 0; e < tc.length; e++) {
          var t = tc[e], a = t.interleaved;
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
        tc = null;
      }
    }
    function NE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, xg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, am(e, i);
    }
    function nT(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, xg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function rT(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, xg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, am(e, i);
    }
    function Wa(e, t) {
      return am(e, t);
    }
    var aT = am;
    function am(e, t) {
      e.lanes = xt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = xt(a.lanes, t)), a === null && (e.flags & (Dn | ea)) !== qe && kR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = xt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = xt(a.childLanes, t) : (u.flags & (Dn | ea)) !== qe && kR(e), i = u, u = u.return;
      if (i.tag === q) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var LE = 0, zE = 1, im = 2, Tg = 3, lm = !1, bg, um;
    bg = !1, um = null;
    function _g(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ie
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
    function $u(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: LE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function jo(e, t, a) {
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
          var f = xt(s, a);
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
              var g = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = g : (f.next = g, f = g), v = v.next;
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
      var C = a.lastBaseUpdate;
      C === null ? a.firstBaseUpdate = t : C.next = t, a.lastBaseUpdate = t;
    }
    function iT(e, t, a, i, u, s) {
      switch (a.tag) {
        case zE: {
          var f = a.payload;
          if (typeof f == "function") {
            DE();
            var p = f.call(s, i, u);
            {
              if (e.mode & pn) {
                On(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  On(!1);
                }
              }
              OE();
            }
            return p;
          }
          return f;
        }
        case Tg:
          e.flags = e.flags & ~lr | Ke;
        case LE: {
          var v = a.payload, g;
          if (typeof v == "function") {
            DE(), g = v.call(s, i, u);
            {
              if (e.mode & pn) {
                On(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  On(!1);
                }
              }
              OE();
            }
          } else
            g = v;
          return g == null ? i : _t({}, i, g);
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
        var v = p, g = v.next;
        v.next = null, f === null ? s = g : f.next = g, f = v;
        var C = e.alternate;
        if (C !== null) {
          var D = C.updateQueue, _ = D.lastBaseUpdate;
          _ !== f && (_ === null ? D.firstBaseUpdate = g : _.next = g, D.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var H = u.baseState, I = ie, Z = null, Oe = null, tt = null, Qe = s;
        do {
          var Wt = Qe.lane, At = Qe.eventTime;
          if (Mu(i, Wt)) {
            if (tt !== null) {
              var J = {
                eventTime: At,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Xt,
                tag: Qe.tag,
                payload: Qe.payload,
                callback: Qe.callback,
                next: null
              };
              tt = tt.next = J;
            }
            H = iT(e, u, Qe, H, t, a);
            var U = Qe.callback;
            if (U !== null && // If the update was already committed, we should not queue its
            // callback again.
            Qe.lane !== Xt) {
              e.flags |= En;
              var ve = u.effects;
              ve === null ? u.effects = [Qe] : ve.push(Qe);
            }
          } else {
            var A = {
              eventTime: At,
              lane: Wt,
              tag: Qe.tag,
              payload: Qe.payload,
              callback: Qe.callback,
              next: null
            };
            tt === null ? (Oe = tt = A, Z = H) : tt = tt.next = A, I = xt(I, Wt);
          }
          if (Qe = Qe.next, Qe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Ae = p, Ne = Ae.next;
            Ae.next = null, Qe = Ne, u.lastBaseUpdate = Ae, u.shared.pending = null;
          }
        } while (!0);
        tt === null && (Z = H), u.baseState = Z, u.firstBaseUpdate = Oe, u.lastBaseUpdate = tt;
        var ot = u.shared.interleaved;
        if (ot !== null) {
          var ht = ot;
          do
            I = xt(I, ht.lane), ht = ht.next;
          while (ht !== ot);
        } else s === null && (u.shared.lanes = ie);
        qp(I), e.lanes = I, e.memoizedState = H;
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
    var Tp = {}, Fo = Lo(Tp), bp = Lo(Tp), fm = Lo(Tp);
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
      ca(fm, t, e), ca(bp, e, e), ca(Fo, Tp, e);
      var a = wx(t);
      sa(Fo, e), ca(Fo, a, e);
    }
    function Af(e) {
      sa(Fo, e), sa(bp, e), sa(fm, e);
    }
    function Og() {
      var e = dm(Fo.current);
      return e;
    }
    function HE(e) {
      dm(fm.current);
      var t = dm(Fo.current), a = xx(t, e.type);
      t !== a && (ca(bp, e, e), ca(Fo, a, e));
    }
    function Mg(e) {
      bp.current === e && (sa(Fo, e), sa(bp, e));
    }
    var uT = 0, PE = 1, VE = 1, _p = 2, ol = Lo(uT);
    function Ng(e, t) {
      return (e & t) !== 0;
    }
    function Uf(e) {
      return e & PE;
    }
    function Lg(e, t) {
      return e & PE | t;
    }
    function oT(e, t) {
      return e | t;
    }
    function Ho(e, t) {
      ca(ol, t, e);
    }
    function jf(e) {
      sa(ol, e);
    }
    function sT(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function pm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || aE(i) || qy(i))
              return t;
          }
        } else if (t.tag === zt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ke) !== qe;
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
    var Qa = (
      /*   */
      0
    ), Sr = (
      /* */
      1
    ), Kl = (
      /*  */
      2
    ), Er = (
      /*    */
      4
    ), Ir = (
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
    var ze = E.ReactCurrentDispatcher, kp = E.ReactCurrentBatchConfig, Ug, Ff;
    Ug = /* @__PURE__ */ new Set();
    var nc = ie, vn = null, Cr = null, Rr = null, vm = !1, Dp = !1, Op = 0, fT = 0, dT = 25, ne = null, Fi = null, Po = -1, jg = !1;
    function on() {
      {
        var e = ne;
        Fi === null ? Fi = [e] : Fi.push(e);
      }
    }
    function xe() {
      {
        var e = ne;
        Fi !== null && (Po++, Fi[Po] !== e && pT(e));
      }
    }
    function Hf(e) {
      e != null && !kt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ne, typeof e);
    }
    function pT(e) {
      {
        var t = dt(vn);
        if (!Ug.has(t) && (Ug.add(t), Fi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Po; u++) {
            for (var s = Fi[u], f = u === Po ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function fa() {
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
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ne), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ne, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Pf(e, t, a, i, u, s) {
      nc = s, vn = t, Fi = e !== null ? e._debugHookTypes : null, Po = -1, jg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ie, e !== null && e.memoizedState !== null ? ze.current = sC : Fi !== null ? ze.current = oC : ze.current = uC;
      var f = a(i, u);
      if (Dp) {
        var p = 0;
        do {
          if (Dp = !1, Op = 0, p >= dT)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, jg = !1, Cr = null, Rr = null, t.updateQueue = null, Po = -1, ze.current = cC, f = a(i, u);
        } while (Dp);
      }
      ze.current = _m, t._debugHookTypes = Fi;
      var v = Cr !== null && Cr.next !== null;
      if (nc = ie, vn = null, Cr = null, Rr = null, ne = null, Fi = null, Po = -1, e !== null && (e.flags & Qn) !== (t.flags & Qn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ot) !== Ze && y("Internal React error: Expected static flag was missing. Please notify the React team."), vm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Vf() {
      var e = Op !== 0;
      return Op = 0, e;
    }
    function BE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & en) !== Ze ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ks(e.lanes, a);
    }
    function $E() {
      if (ze.current = _m, vm) {
        for (var e = vn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        vm = !1;
      }
      nc = ie, vn = null, Cr = null, Rr = null, Fi = null, Po = -1, ne = null, nC = !1, Dp = !1, Op = 0;
    }
    function Gl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Rr === null ? vn.memoizedState = Rr = e : Rr = Rr.next = e, Rr;
    }
    function Hi() {
      var e;
      if (Cr === null) {
        var t = vn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Cr.next;
      var a;
      if (Rr === null ? a = vn.memoizedState : a = Rr.next, a !== null)
        Rr = a, a = Rr.next, Cr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Cr = e;
        var i = {
          memoizedState: Cr.memoizedState,
          baseState: Cr.baseState,
          baseQueue: Cr.baseQueue,
          queue: Cr.queue,
          next: null
        };
        Rr === null ? vn.memoizedState = Rr = i : Rr = Rr.next = i;
      }
      return Rr;
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
      var i = Gl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ie,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = yT.bind(null, vn, s);
      return [i.memoizedState, f];
    }
    function Vg(e, t, a) {
      var i = Hi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Cr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, g = p.next;
          f.next = g, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var C = f.next, D = s.baseState, _ = null, H = null, I = null, Z = C;
        do {
          var Oe = Z.lane;
          if (Mu(nc, Oe)) {
            if (I !== null) {
              var Qe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Xt,
                action: Z.action,
                hasEagerState: Z.hasEagerState,
                eagerState: Z.eagerState,
                next: null
              };
              I = I.next = Qe;
            }
            if (Z.hasEagerState)
              D = Z.eagerState;
            else {
              var Wt = Z.action;
              D = e(D, Wt);
            }
          } else {
            var tt = {
              lane: Oe,
              action: Z.action,
              hasEagerState: Z.hasEagerState,
              eagerState: Z.eagerState,
              next: null
            };
            I === null ? (H = I = tt, _ = D) : I = I.next = tt, vn.lanes = xt(vn.lanes, Oe), qp(Oe);
          }
          Z = Z.next;
        } while (Z !== null && Z !== C);
        I === null ? _ = D : I.next = H, ce(D, i.memoizedState) || Hp(), i.memoizedState = D, i.baseState = _, i.baseQueue = I, u.lastRenderedState = D;
      }
      var At = u.interleaved;
      if (At !== null) {
        var A = At;
        do {
          var J = A.lane;
          vn.lanes = xt(vn.lanes, J), qp(J), A = A.next;
        } while (A !== At);
      } else f === null && (u.lanes = ie);
      var U = u.dispatch;
      return [i.memoizedState, U];
    }
    function Bg(e, t, a) {
      var i = Hi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, g = v;
        do {
          var C = g.action;
          p = e(p, C), g = g.next;
        } while (g !== v);
        ce(p, i.memoizedState) || Hp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function wD(e, t, a) {
    }
    function xD(e, t, a) {
    }
    function $g(e, t, a) {
      var i = vn, u = Gl(), s, f = $r();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Ff || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      } else {
        if (s = t(), !Ff) {
          var p = t();
          ce(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
        }
        var v = Wm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(v, nc) || YE(i, t, s);
      }
      u.memoizedState = s;
      var g = {
        value: s,
        getSnapshot: t
      };
      return u.queue = g, Sm(QE.bind(null, i, g, e), [e]), i.flags |= Jr, Mp(Sr | Ir, WE.bind(null, i, g, s, t), void 0, null), s;
    }
    function hm(e, t, a) {
      var i = vn, u = Hi(), s = t();
      if (!Ff) {
        var f = t();
        ce(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      }
      var p = u.memoizedState, v = !ce(p, s);
      v && (u.memoizedState = s, Hp());
      var g = u.queue;
      if (Lp(QE.bind(null, i, g, e), [e]), g.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Rr !== null && Rr.memoizedState.tag & Sr) {
        i.flags |= Jr, Mp(Sr | Ir, WE.bind(null, i, g, s, t), void 0, null);
        var C = Wm();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(C, nc) || YE(i, t, s);
      }
      return s;
    }
    function YE(e, t, a) {
      e.flags |= yo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = vn.updateQueue;
      if (u === null)
        u = IE(), vn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function WE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, KE(t) && GE(e);
    }
    function QE(e, t, a) {
      var i = function() {
        KE(t) && GE(e);
      };
      return a(i);
    }
    function KE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ce(a, i);
      } catch {
        return !0;
      }
    }
    function GE(e) {
      var t = Wa(e, lt);
      t !== null && br(t, e, lt, yn);
    }
    function mm(e) {
      var t = Gl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ie,
        dispatch: null,
        lastRenderedReducer: Hg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = gT.bind(null, vn, a);
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
      }, s = vn.updateQueue;
      if (s === null)
        s = IE(), vn.updateQueue = s, s.lastEffect = u.next = u;
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
    function Wg(e) {
      var t = Gl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function ym(e) {
      var t = Hi();
      return t.memoizedState;
    }
    function Np(e, t, a, i) {
      var u = Gl(), s = i === void 0 ? null : i;
      vn.flags |= e, u.memoizedState = Mp(Sr | t, a, void 0, s);
    }
    function gm(e, t, a, i) {
      var u = Hi(), s = i === void 0 ? null : i, f = void 0;
      if (Cr !== null) {
        var p = Cr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Fg(s, v)) {
            u.memoizedState = Mp(t, a, f, s);
            return;
          }
        }
      }
      vn.flags |= e, u.memoizedState = Mp(Sr | t, a, f, s);
    }
    function Sm(e, t) {
      return (vn.mode & en) !== Ze ? Np(bi | Jr | Oc, Ir, e, t) : Np(Jr | Oc, Ir, e, t);
    }
    function Lp(e, t) {
      return gm(Jr, Ir, e, t);
    }
    function Qg(e, t) {
      return Np($t, Kl, e, t);
    }
    function Em(e, t) {
      return gm($t, Kl, e, t);
    }
    function Kg(e, t) {
      var a = $t;
      return a |= Xi, (vn.mode & en) !== Ze && (a |= Ol), Np(a, Er, e, t);
    }
    function Cm(e, t) {
      return gm($t, Er, e, t);
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
      var i = a != null ? a.concat([e]) : null, u = $t;
      return u |= Xi, (vn.mode & en) !== Ze && (u |= Ol), Np(u, Er, XE.bind(null, t, e), i);
    }
    function Rm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return gm($t, Er, XE.bind(null, t, e), i);
    }
    function vT(e, t) {
    }
    var wm = vT;
    function Xg(e, t) {
      var a = Gl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function xm(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Fg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function qg(e, t) {
      var a = Gl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Tm(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Fg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Zg(e) {
      var t = Gl();
      return t.memoizedState = e, e;
    }
    function qE(e) {
      var t = Hi(), a = Cr, i = a.memoizedState;
      return JE(t, i, e);
    }
    function ZE(e) {
      var t = Hi();
      if (Cr === null)
        return t.memoizedState = e, e;
      var a = Cr.memoizedState;
      return JE(t, a, e);
    }
    function JE(e, t, a) {
      var i = !Ad(nc);
      if (i) {
        if (!ce(a, t)) {
          var u = Fd();
          vn.lanes = xt(vn.lanes, u), qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Hp()), e.memoizedState = a, a;
    }
    function hT(e, t, a) {
      var i = $a();
      Xn(nh(i, Oi)), e(!0);
      var u = kp.transition;
      kp.transition = {};
      var s = kp.transition;
      kp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Xn(i), kp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && B("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Jg() {
      var e = mm(!1), t = e[0], a = e[1], i = hT.bind(null, a), u = Gl();
      return u.memoizedState = i, [t, i];
    }
    function eC() {
      var e = Ig(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    function tC() {
      var e = Yg(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    var nC = !1;
    function mT() {
      return nC;
    }
    function eS() {
      var e = Gl(), t = Wm(), a = t.identifierPrefix, i;
      if ($r()) {
        var u = L1();
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
      var e = Hi(), t = e.memoizedState;
      return t;
    }
    function yT(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Yo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (rC(e))
        aC(t, u);
      else {
        var s = NE(e, t, u, i);
        if (s !== null) {
          var f = Ta();
          br(s, e, i, f), iC(s, t, i);
        }
      }
      lC(e, i);
    }
    function gT(e, t, a) {
      typeof arguments[3] == "function" && y("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Yo(e), u = {
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
        if (e.lanes === ie && (s === null || s.lanes === ie)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ze.current, ze.current = sl;
            try {
              var v = t.lastRenderedState, g = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = g, ce(g, v)) {
                nT(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ze.current = p;
            }
          }
        }
        var C = NE(e, t, u, i);
        if (C !== null) {
          var D = Ta();
          br(C, e, i, D), iC(C, t, i);
        }
      }
      lC(e, i);
    }
    function rC(e) {
      var t = e.alternate;
      return e === vn || t !== null && t === vn;
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
        var u = xt(i, a);
        t.lanes = u, lf(e, u);
      }
    }
    function lC(e, t, a) {
      gs(e, t);
    }
    var _m = {
      readContext: cr,
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
      unstable_isNewReconciler: ue
    }, uC = null, oC = null, sC = null, cC = null, Xl = null, sl = null, km = null;
    {
      var tS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, vt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      uC = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", on(), Hf(t), Xg(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", on(), cr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", on(), Hf(t), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", on(), Hf(a), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", on(), Hf(t), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", on(), Hf(t), Kg(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", on(), Hf(t);
          var a = ze.current;
          ze.current = Xl;
          try {
            return qg(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", on();
          var i = ze.current;
          ze.current = Xl;
          try {
            return Pg(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", on(), Wg(e);
        },
        useState: function(e) {
          ne = "useState", on();
          var t = ze.current;
          ze.current = Xl;
          try {
            return mm(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", on(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", on(), Zg(e);
        },
        useTransition: function() {
          return ne = "useTransition", on(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", on(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", on(), $g(e, t, a);
        },
        useId: function() {
          return ne = "useId", on(), eS();
        },
        unstable_isNewReconciler: ue
      }, oC = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", xe(), Xg(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", xe(), cr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", xe(), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", xe(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", xe(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", xe(), Kg(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", xe();
          var a = ze.current;
          ze.current = Xl;
          try {
            return qg(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", xe();
          var i = ze.current;
          ze.current = Xl;
          try {
            return Pg(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", xe(), Wg(e);
        },
        useState: function(e) {
          ne = "useState", xe();
          var t = ze.current;
          ze.current = Xl;
          try {
            return mm(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", xe(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", xe(), Zg(e);
        },
        useTransition: function() {
          return ne = "useTransition", xe(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", xe(), $g(e, t, a);
        },
        useId: function() {
          return ne = "useId", xe(), eS();
        },
        unstable_isNewReconciler: ue
      }, sC = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", xe(), xm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", xe(), cr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", xe(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", xe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", xe(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", xe(), Cm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", xe();
          var a = ze.current;
          ze.current = sl;
          try {
            return Tm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", xe();
          var i = ze.current;
          ze.current = sl;
          try {
            return Vg(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", xe(), ym();
        },
        useState: function(e) {
          ne = "useState", xe();
          var t = ze.current;
          ze.current = sl;
          try {
            return Ig(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", xe(), wm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", xe(), qE(e);
        },
        useTransition: function() {
          return ne = "useTransition", xe(), eC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", xe(), hm(e, t);
        },
        useId: function() {
          return ne = "useId", xe(), bm();
        },
        unstable_isNewReconciler: ue
      }, cC = {
        readContext: function(e) {
          return cr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", xe(), xm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", xe(), cr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", xe(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", xe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", xe(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", xe(), Cm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", xe();
          var a = ze.current;
          ze.current = km;
          try {
            return Tm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", xe();
          var i = ze.current;
          ze.current = km;
          try {
            return Bg(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", xe(), ym();
        },
        useState: function(e) {
          ne = "useState", xe();
          var t = ze.current;
          ze.current = km;
          try {
            return Yg(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", xe(), wm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", xe(), ZE(e);
        },
        useTransition: function() {
          return ne = "useTransition", xe(), tC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", xe(), hm(e, t);
        },
        useId: function() {
          return ne = "useId", xe(), bm();
        },
        unstable_isNewReconciler: ue
      }, Xl = {
        readContext: function(e) {
          return tS(), cr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", vt(), on(), Xg(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", vt(), on(), cr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", vt(), on(), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", vt(), on(), Gg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", vt(), on(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", vt(), on(), Kg(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", vt(), on();
          var a = ze.current;
          ze.current = Xl;
          try {
            return qg(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", vt(), on();
          var i = ze.current;
          ze.current = Xl;
          try {
            return Pg(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", vt(), on(), Wg(e);
        },
        useState: function(e) {
          ne = "useState", vt(), on();
          var t = ze.current;
          ze.current = Xl;
          try {
            return mm(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", vt(), on(), void 0;
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", vt(), on(), Zg(e);
        },
        useTransition: function() {
          return ne = "useTransition", vt(), on(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", vt(), on(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", vt(), on(), $g(e, t, a);
        },
        useId: function() {
          return ne = "useId", vt(), on(), eS();
        },
        unstable_isNewReconciler: ue
      }, sl = {
        readContext: function(e) {
          return tS(), cr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", vt(), xe(), xm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", vt(), xe(), cr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", vt(), xe(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", vt(), xe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", vt(), xe(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", vt(), xe(), Cm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", vt(), xe();
          var a = ze.current;
          ze.current = sl;
          try {
            return Tm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", vt(), xe();
          var i = ze.current;
          ze.current = sl;
          try {
            return Vg(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", vt(), xe(), ym();
        },
        useState: function(e) {
          ne = "useState", vt(), xe();
          var t = ze.current;
          ze.current = sl;
          try {
            return Ig(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", vt(), xe(), wm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", vt(), xe(), qE(e);
        },
        useTransition: function() {
          return ne = "useTransition", vt(), xe(), eC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", vt(), xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", vt(), xe(), hm(e, t);
        },
        useId: function() {
          return ne = "useId", vt(), xe(), bm();
        },
        unstable_isNewReconciler: ue
      }, km = {
        readContext: function(e) {
          return tS(), cr(e);
        },
        useCallback: function(e, t) {
          return ne = "useCallback", vt(), xe(), xm(e, t);
        },
        useContext: function(e) {
          return ne = "useContext", vt(), xe(), cr(e);
        },
        useEffect: function(e, t) {
          return ne = "useEffect", vt(), xe(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ne = "useImperativeHandle", vt(), xe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ne = "useInsertionEffect", vt(), xe(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ne = "useLayoutEffect", vt(), xe(), Cm(e, t);
        },
        useMemo: function(e, t) {
          ne = "useMemo", vt(), xe();
          var a = ze.current;
          ze.current = sl;
          try {
            return Tm(e, t);
          } finally {
            ze.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ne = "useReducer", vt(), xe();
          var i = ze.current;
          ze.current = sl;
          try {
            return Bg(e, t, a);
          } finally {
            ze.current = i;
          }
        },
        useRef: function(e) {
          return ne = "useRef", vt(), xe(), ym();
        },
        useState: function(e) {
          ne = "useState", vt(), xe();
          var t = ze.current;
          ze.current = sl;
          try {
            return Yg(e);
          } finally {
            ze.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ne = "useDebugValue", vt(), xe(), wm();
        },
        useDeferredValue: function(e) {
          return ne = "useDeferredValue", vt(), xe(), ZE(e);
        },
        useTransition: function() {
          return ne = "useTransition", vt(), xe(), tC();
        },
        useMutableSource: function(e, t, a) {
          return ne = "useMutableSource", vt(), xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ne = "useSyncExternalStore", vt(), xe(), hm(e, t);
        },
        useId: function() {
          return ne = "useId", vt(), xe(), bm();
        },
        unstable_isNewReconciler: ue
      };
    }
    var Vo = R.unstable_now, fC = 0, Dm = -1, zp = -1, Om = -1, nS = !1, Mm = !1;
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
      fC = Vo();
    }
    function rS(e) {
      zp = Vo(), e.actualStartTime < 0 && (e.actualStartTime = Vo());
    }
    function hC(e) {
      zp = -1;
    }
    function Nm(e, t) {
      if (zp >= 0) {
        var a = Vo() - zp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), zp = -1;
      }
    }
    function ql(e) {
      if (Dm >= 0) {
        var t = Vo() - Dm;
        Dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case q:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case he:
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
        var t = Vo() - Om;
        Om = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case q:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case he:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Zl() {
      Dm = Vo();
    }
    function iS() {
      Om = Vo();
    }
    function lS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function cl(e, t) {
      if (e && e.defaultProps) {
        var a = _t({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var uS = {}, oS, sS, cS, fS, dS, mC, Lm, pS, vS, hS, Ap;
    {
      oS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), fS = /* @__PURE__ */ new Set(), pS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), Ap = /* @__PURE__ */ new Set();
      var yC = /* @__PURE__ */ new Set();
      Lm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          yC.has(a) || (yC.add(a), y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, mC = function(e, t) {
        if (t === void 0) {
          var a = Qt(e) || "Component";
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
        if (e.mode & pn) {
          On(!0);
          try {
            s = a(i, u);
          } finally {
            On(!1);
          }
        }
        mC(t, s);
      }
      var f = s == null ? u : _t({}, u, s);
      if (e.memoizedState = f, e.lanes === ie) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var yS = {
      isMounted: Pv,
      enqueueSetState: function(e, t, a) {
        var i = mo(e), u = Ta(), s = Yo(i), f = $u(u, s);
        f.payload = t, a != null && (Lm(a, "setState"), f.callback = a);
        var p = jo(i, f, s);
        p !== null && (br(p, i, s, u), om(p, i, s)), gs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = mo(e), u = Ta(), s = Yo(i), f = $u(u, s);
        f.tag = zE, f.payload = t, a != null && (Lm(a, "replaceState"), f.callback = a);
        var p = jo(i, f, s);
        p !== null && (br(p, i, s, u), om(p, i, s)), gs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = mo(e), i = Ta(), u = Yo(a), s = $u(i, u);
        s.tag = im, t != null && (Lm(t, "forceUpdate"), s.callback = t);
        var f = jo(a, s, u);
        f !== null && (br(f, a, u, i), om(f, a, u)), jc(a, u);
      }
    };
    function gC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & pn) {
            On(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              On(!1);
            }
          }
          v === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Qt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Be(a, i) || !Be(u, s) : !0;
    }
    function RT(e, t, a) {
      var i = e.stateNode;
      {
        var u = Qt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & pn) === Ze && (Ap.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & pn) === Ze && (Ap.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !vS.has(t) && (vS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Qt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !cS.has(t) && (cS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Qt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || kt(p)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function SC(e, t) {
      t.updater = yS, e.stateNode = t, yu(t, e), t._reactInternalInstance = uS;
    }
    function EC(e, t, a) {
      var i = !1, u = di, s = di, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === T && f._context === void 0
        );
        if (!p && !hS.has(t)) {
          hS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === yi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Qt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = cr(f);
      else {
        u = _f(e, t, !0);
        var g = t.contextTypes;
        i = g != null, s = i ? kf(e, u) : di;
      }
      var C = new t(a, s);
      if (e.mode & pn) {
        On(!0);
        try {
          C = new t(a, s);
        } finally {
          On(!1);
        }
      }
      var D = e.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null;
      SC(e, C);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var _ = Qt(t) || "Component";
          sS.has(_) || (sS.add(_), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, C.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof C.getSnapshotBeforeUpdate == "function") {
          var H = null, I = null, Z = null;
          if (typeof C.componentWillMount == "function" && C.componentWillMount.__suppressDeprecationWarning !== !0 ? H = "componentWillMount" : typeof C.UNSAFE_componentWillMount == "function" && (H = "UNSAFE_componentWillMount"), typeof C.componentWillReceiveProps == "function" && C.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof C.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof C.componentWillUpdate == "function" && C.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Z = "componentWillUpdate" : typeof C.UNSAFE_componentWillUpdate == "function" && (Z = "UNSAFE_componentWillUpdate"), H !== null || I !== null || Z !== null) {
            var Oe = Qt(t) || "Component", tt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fS.has(Oe) || (fS.add(Oe), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Oe, tt, H !== null ? `
  ` + H : "", I !== null ? `
  ` + I : "", Z !== null ? `
  ` + Z : ""));
          }
        }
      }
      return i && sE(e, u, s), C;
    }
    function wT(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", dt(e) || "Component"), yS.enqueueReplaceState(t, t.state, null));
    }
    function CC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = dt(e) || "Component";
          oS.has(s) || (oS.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        yS.enqueueReplaceState(t, t.state, null);
      }
    }
    function gS(e, t, a, i) {
      RT(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, _g(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = cr(s);
      else {
        var f = _f(e, t, !0);
        u.context = kf(e, f);
      }
      {
        if (u.state === a) {
          var p = Qt(t) || "Component";
          pS.has(p) || (pS.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & pn && ul.recordLegacyContextWarning(e, u), ul.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (mS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (wT(e, u), sm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var g = $t;
        g |= Xi, (e.mode & en) !== Ze && (g |= Ol), e.flags |= g;
      }
    }
    function xT(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = di;
      if (typeof p == "object" && p !== null)
        v = cr(p);
      else {
        var g = _f(e, t, !0);
        v = kf(e, g);
      }
      var C = t.getDerivedStateFromProps, D = typeof C == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !D && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && CC(e, u, a, v), UE();
      var _ = e.memoizedState, H = u.state = _;
      if (sm(e, a, u, i), H = e.memoizedState, s === a && _ === H && !Ih() && !cm()) {
        if (typeof u.componentDidMount == "function") {
          var I = $t;
          I |= Xi, (e.mode & en) !== Ze && (I |= Ol), e.flags |= I;
        }
        return !1;
      }
      typeof C == "function" && (mS(e, t, C, a), H = e.memoizedState);
      var Z = cm() || gC(e, t, s, a, _, H, v);
      if (Z) {
        if (!D && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Oe = $t;
          Oe |= Xi, (e.mode & en) !== Ze && (Oe |= Ol), e.flags |= Oe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var tt = $t;
          tt |= Xi, (e.mode & en) !== Ze && (tt |= Ol), e.flags |= tt;
        }
        e.memoizedProps = a, e.memoizedState = H;
      }
      return u.props = a, u.state = H, u.context = v, Z;
    }
    function TT(e, t, a, i, u) {
      var s = t.stateNode;
      AE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : cl(t.type, f);
      s.props = p;
      var v = t.pendingProps, g = s.context, C = a.contextType, D = di;
      if (typeof C == "object" && C !== null)
        D = cr(C);
      else {
        var _ = _f(t, a, !0);
        D = kf(t, _);
      }
      var H = a.getDerivedStateFromProps, I = typeof H == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !I && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || g !== D) && CC(t, s, i, D), UE();
      var Z = t.memoizedState, Oe = s.state = Z;
      if (sm(t, i, s, u), Oe = t.memoizedState, f === v && Z === Oe && !Ih() && !cm() && !Pe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= $t), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= tr), !1;
      typeof H == "function" && (mS(t, a, H, i), Oe = t.memoizedState);
      var tt = cm() || gC(t, a, p, i, Z, Oe, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Pe;
      return tt ? (!I && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Oe, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Oe, D)), typeof s.componentDidUpdate == "function" && (t.flags |= $t), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= tr)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= $t), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Z !== e.memoizedState) && (t.flags |= tr), t.memoizedProps = i, t.memoizedState = Oe), s.props = i, s.state = Oe, s.context = D, tt;
    }
    function rc(e, t) {
      return {
        value: e,
        source: t,
        stack: Ii(t),
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
          if (e.tag === N)
            return;
          console.error(i);
        }
        var p = u ? dt(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", g;
        if (e.tag === q)
          g = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var C = dt(e) || "Anonymous";
          g = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + C + ".");
        }
        var D = v + `
` + f + `

` + ("" + g);
        console.error(D);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var _T = typeof WeakMap == "function" ? WeakMap : Map;
    function RC(e, t, a) {
      var i = $u(yn, a);
      i.tag = Tg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        S_(u), ES(e, t);
      }, i;
    }
    function CS(e, t, a) {
      var i = $u(yn, a);
      i.tag = Tg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          LR(e), ES(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        LR(e), ES(e, t), typeof u != "function" && y_(this);
        var v = t.value, g = t.stack;
        this.componentDidCatch(v, {
          componentStack: g !== null ? g : ""
        }), typeof u != "function" && (ia(e.lanes, lt) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", dt(e) || "Unknown"));
      }), i;
    }
    function wC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new _T(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = E_.bind(null, e, t, a);
        ra && Zp(e, a), t.then(s, s);
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
      if ((e.mode & Ot) === Ze && (a === Y || a === Ce || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function xC(e) {
      var t = e;
      do {
        if (t.tag === Re && sT(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function TC(e, t, a, i, u) {
      if ((e.mode & Ot) === Ze) {
        if (e === t)
          e.flags |= lr;
        else {
          if (e.flags |= Ke, a.flags |= Dc, a.flags &= -52805, a.tag === N) {
            var s = a.alternate;
            if (s === null)
              a.tag = mt;
            else {
              var f = $u(yn, lt);
              f.tag = im, jo(a, f, lt);
            }
          }
          a.lanes = xt(a.lanes, lt);
        }
        return e;
      }
      return e.flags |= lr, e.lanes = u, e;
    }
    function OT(e, t, a, i, u) {
      if (a.flags |= ds, ra && Zp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        DT(a), $r() && a.mode & Ot && mE();
        var f = xC(t);
        if (f !== null) {
          f.flags &= ~Dr, TC(f, t, a, e, u), f.mode & Ot && wC(e, s, u), kT(f, e, s);
          return;
        } else {
          if (!Kv(u)) {
            wC(e, s, u), e0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if ($r() && a.mode & Ot) {
        mE();
        var v = xC(t);
        if (v !== null) {
          (v.flags & lr) === qe && (v.flags |= Dr), TC(v, t, a, e, u), pg(rc(i, a));
          return;
        }
      }
      i = rc(i, a), s_(i);
      var g = t;
      do {
        switch (g.tag) {
          case q: {
            var C = i;
            g.flags |= lr;
            var D = _s(u);
            g.lanes = xt(g.lanes, D);
            var _ = RC(g, C, D);
            kg(g, _);
            return;
          }
          case N:
            var H = i, I = g.type, Z = g.stateNode;
            if ((g.flags & Ke) === qe && (typeof I.getDerivedStateFromError == "function" || Z !== null && typeof Z.componentDidCatch == "function" && !xR(Z))) {
              g.flags |= lr;
              var Oe = _s(u);
              g.lanes = xt(g.lanes, Oe);
              var tt = CS(g, H, Oe);
              kg(g, tt);
              return;
            }
            break;
        }
        g = g.return;
      } while (g !== null);
    }
    function MT() {
      return null;
    }
    var Up = E.ReactCurrentOwner, fl = !1, RS, jp, wS, xS, TS, ac, bS, zm, Fp;
    RS = {}, jp = {}, wS = {}, xS = {}, TS = {}, ac = !1, bS = {}, zm = {}, Fp = {};
    function wa(e, t, a, i) {
      e === null ? t.child = kE(t, null, a, i) : t.child = Nf(t, e.child, a, i);
    }
    function NT(e, t, a, i) {
      t.child = Nf(t, e.child, null, i), t.child = Nf(t, null, a, i);
    }
    function bC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          Qt(a)
        );
      }
      var f = a.render, p = t.ref, v, g;
      zf(t, u), Sa(t);
      {
        if (Up.current = t, er(!0), v = Pf(e, t, f, i, p, u), g = Vf(), t.mode & pn) {
          On(!0);
          try {
            v = Pf(e, t, f, i, p, u), g = Vf();
          } finally {
            On(!1);
          }
        }
        er(!1);
      }
      return Ea(), e !== null && !fl ? (BE(e, t, u), Iu(e, t, u)) : ($r() && g && ug(t), t.flags |= ui, wa(e, t, v, u), t.child);
    }
    function _C(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (j_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Gf(s), t.tag = He, t.type = f, DS(t, s), kC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && il(
            p,
            i,
            // Resolved props
            "prop",
            Qt(s)
          ), a.defaultProps !== void 0) {
            var v = Qt(s) || "Unknown";
            Fp[v] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Fp[v] = !0);
          }
        }
        var g = f0(a.type, null, i, t, t.mode, u);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var C = a.type, D = C.propTypes;
        D && il(
          D,
          i,
          // Resolved props
          "prop",
          Qt(C)
        );
      }
      var _ = e.child, H = AS(e, u);
      if (!H) {
        var I = _.memoizedProps, Z = a.compare;
        if (Z = Z !== null ? Z : Be, Z(I, i) && e.ref === t.ref)
          return Iu(e, t, u);
      }
      t.flags |= ui;
      var Oe = sc(_, i);
      return Oe.ref = t.ref, Oe.return = t, t.child = Oe, Oe;
    }
    function kC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === pt) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var g = s && s.propTypes;
          g && il(
            g,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Qt(s)
          );
        }
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (Be(C, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fl = !1, t.pendingProps = i = C, AS(e, u))
            (e.flags & Dc) !== qe && (fl = !0);
          else return t.lanes = e.lanes, Iu(e, t, u);
      }
      return _S(e, t, a, i, u);
    }
    function DC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || we)
        if ((t.mode & Ot) === Ze) {
          var f = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Qm(t, a);
        } else if (ia(a, aa)) {
          var D = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = D;
          var _ = s !== null ? s.baseLanes : a;
          Qm(t, _);
        } else {
          var p = null, v;
          if (s !== null) {
            var g = s.baseLanes;
            v = xt(g, a);
          } else
            v = a;
          t.lanes = t.childLanes = aa;
          var C = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = C, t.updateQueue = null, Qm(t, v), null;
        }
      else {
        var H;
        s !== null ? (H = xt(s.baseLanes, a), t.memoizedState = null) : H = a, Qm(t, H);
      }
      return wa(e, t, u, a), t.child;
    }
    function LT(e, t, a) {
      var i = t.pendingProps;
      return wa(e, t, i, a), t.child;
    }
    function zT(e, t, a) {
      var i = t.pendingProps.children;
      return wa(e, t, i, a), t.child;
    }
    function AT(e, t, a) {
      {
        t.flags |= $t;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return wa(e, t, s, a), t.child;
    }
    function OC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= An, t.flags |= go);
    }
    function _S(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          Qt(a)
        );
      }
      var f;
      {
        var p = _f(t, a, !0);
        f = kf(t, p);
      }
      var v, g;
      zf(t, u), Sa(t);
      {
        if (Up.current = t, er(!0), v = Pf(e, t, a, i, f, u), g = Vf(), t.mode & pn) {
          On(!0);
          try {
            v = Pf(e, t, a, i, f, u), g = Vf();
          } finally {
            On(!1);
          }
        }
        er(!1);
      }
      return Ea(), e !== null && !fl ? (BE(e, t, u), Iu(e, t, u)) : ($r() && g && ug(t), t.flags |= ui, wa(e, t, v, u), t.child);
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
            t.flags |= Ke, t.flags |= lr;
            var g = new Error("Simulated error coming from DevTools"), C = _s(u);
            t.lanes = xt(t.lanes, C);
            var D = CS(t, rc(g, t), C);
            kg(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && il(
            _,
            i,
            // Resolved props
            "prop",
            Qt(a)
          );
        }
      }
      var H;
      Ql(a) ? (H = !0, Wh(t)) : H = !1, zf(t, u);
      var I = t.stateNode, Z;
      I === null ? (Um(e, t), EC(t, a, i), gS(t, a, i, u), Z = !0) : e === null ? Z = xT(t, a, i, u) : Z = TT(e, t, a, i, u);
      var Oe = kS(e, t, a, Z, H, u);
      {
        var tt = t.stateNode;
        Z && tt.props !== i && (ac || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", dt(t) || "a component"), ac = !0);
      }
      return Oe;
    }
    function kS(e, t, a, i, u, s) {
      OC(e, t);
      var f = (t.flags & Ke) !== qe;
      if (!i && !f)
        return u && dE(t, a, !1), Iu(e, t, s);
      var p = t.stateNode;
      Up.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, hC();
      else {
        Sa(t);
        {
          if (er(!0), v = p.render(), t.mode & pn) {
            On(!0);
            try {
              p.render();
            } finally {
              On(!1);
            }
          }
          er(!1);
        }
        Ea();
      }
      return t.flags |= ui, e !== null && f ? NT(e, t, v, s) : wa(e, t, v, s), t.memoizedState = p.state, u && dE(t, a, !0), t.child;
    }
    function NC(e) {
      var t = e.stateNode;
      t.pendingContext ? cE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cE(e, t.context, !1), Dg(e, t.containerInfo);
    }
    function UT(e, t, a) {
      if (NC(t), e === null)
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
        }, g = t.updateQueue;
        if (g.baseState = v, t.memoizedState = v, t.flags & Dr) {
          var C = rc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return LC(e, t, p, a, C);
        } else if (p !== s) {
          var D = rc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return LC(e, t, p, a, D);
        } else {
          H1(t);
          var _ = kE(t, null, p, a);
          t.child = _;
          for (var H = _; H; )
            H.flags = H.flags & ~Dn | ea, H = H.sibling;
        }
      } else {
        if (Mf(), p === s)
          return Iu(e, t, a);
        wa(e, t, p, a);
      }
      return t.child;
    }
    function LC(e, t, a, i, u) {
      return Mf(), pg(u), t.flags |= Dr, wa(e, t, a, i), t.child;
    }
    function jT(e, t, a) {
      HE(t), e === null && dg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Qy(i, u);
      return p ? f = null : s !== null && Qy(i, s) && (t.flags |= ja), OC(e, t), wa(e, t, f, a), t.child;
    }
    function FT(e, t) {
      return e === null && dg(t), null;
    }
    function HT(e, t, a, i) {
      Um(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var g = t.tag = F_(v), C = cl(v, u), D;
      switch (g) {
        case Y:
          return DS(t, v), t.type = v = Gf(v), D = _S(null, t, v, C, i), D;
        case N:
          return t.type = v = i0(v), D = MC(null, t, v, C, i), D;
        case Ce:
          return t.type = v = l0(v), D = bC(null, t, v, C, i), D;
        case Ge: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && il(
              _,
              C,
              // Resolved for outer only
              "prop",
              Qt(v)
            );
          }
          return D = _C(
            null,
            t,
            v,
            cl(v.type, C),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var H = "";
      throw v !== null && typeof v == "object" && v.$$typeof === pt && (H = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + H));
    }
    function PT(e, t, a, i, u) {
      Um(e, t), t.tag = N;
      var s;
      return Ql(a) ? (s = !0, Wh(t)) : s = !1, zf(t, u), EC(t, a, i), gS(t, a, i, u), kS(null, t, a, !0, s, u);
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
      Sa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var g = Qt(a) || "Unknown";
          RS[g] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", g, g), RS[g] = !0);
        }
        t.mode & pn && ul.recordLegacyContextWarning(t, null), er(!0), Up.current = t, p = Pf(null, t, a, u, s, i), v = Vf(), er(!1);
      }
      if (Ea(), t.flags |= ui, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var C = Qt(a) || "Unknown";
        jp[C] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), jp[C] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = Qt(a) || "Unknown";
          jp[D] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), jp[D] = !0);
        }
        t.tag = N, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Ql(a) ? (_ = !0, Wh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, _g(t), SC(t, p), gS(t, a, u, i), kS(null, t, a, !0, _, i);
      } else {
        if (t.tag = Y, t.mode & pn) {
          On(!0);
          try {
            p = Pf(null, t, a, u, s, i), v = Vf();
          } finally {
            On(!1);
          }
        }
        return $r() && v && ug(t), wa(null, t, p, i), DS(t, a), t.child;
      }
    }
    function DS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Ur();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), TS[u] || (TS[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Qt(t) || "Unknown";
          Fp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Fp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Qt(t) || "Unknown";
          xS[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), xS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Qt(t) || "Unknown";
          wS[v] || (y("%s: Function components do not support contextType.", v), wS[v] = !0);
        }
      }
    }
    var OS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Xt
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
        baseLanes: xt(e.baseLanes, t),
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
      return Ng(e, _p);
    }
    function IT(e, t) {
      return ks(e.childLanes, t);
    }
    function zC(e, t, a) {
      var i = t.pendingProps;
      J_(t) && (t.flags |= Ke);
      var u = ol.current, s = !1, f = (t.flags & Ke) !== qe;
      if (f || $T(u, e) ? (s = !0, t.flags &= ~Ke) : (e === null || e.memoizedState !== null) && (u = oT(u, VE)), u = Uf(u), Ho(t, u), e === null) {
        dg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return GT(t, v);
        }
        var g = i.children, C = i.fallback;
        if (s) {
          var D = YT(t, g, C, a), _ = t.child;
          return _.memoizedState = MS(a), t.memoizedState = OS, D;
        } else
          return NS(t, g);
      } else {
        var H = e.memoizedState;
        if (H !== null) {
          var I = H.dehydrated;
          if (I !== null)
            return XT(e, t, f, i, I, H, a);
        }
        if (s) {
          var Z = i.fallback, Oe = i.children, tt = QT(e, t, Oe, Z, a), Qe = t.child, Wt = e.child.memoizedState;
          return Qe.memoizedState = Wt === null ? MS(a) : BT(Wt, a), Qe.childLanes = IT(e, a), t.memoizedState = OS, tt;
        } else {
          var At = i.children, A = WT(e, t, At, a);
          return t.memoizedState = null, A;
        }
      }
    }
    function NS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = LS(u, i);
      return s.return = e, e.child = s, s;
    }
    function YT(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ot) === Ze && s !== null ? (p = s, p.childLanes = ie, p.pendingProps = f, e.mode & Jt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Qo(a, u, i, null)) : (p = LS(f, u), v = Qo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function LS(e, t, a) {
      return AR(e, t, ie, null);
    }
    function AC(e, t) {
      return sc(e, t);
    }
    function WT(e, t, a, i) {
      var u = e.child, s = u.sibling, f = AC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ot) === Ze && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ua) : p.push(s);
      }
      return t.child = f, f;
    }
    function QT(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, g;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Ot) === Ze && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var C = t.child;
        g = C, g.childLanes = ie, g.pendingProps = v, t.mode & Jt && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = f.selfBaseDuration, g.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        g = AC(f, v), g.subtreeFlags = f.subtreeFlags & Qn;
      var D;
      return p !== null ? D = sc(p, i) : (D = Qo(i, s, u, null), D.flags |= Dn), D.return = t, g.return = t, g.sibling = D, t.child = g, D;
    }
    function Am(e, t, a, i) {
      i !== null && pg(i), Nf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = NS(t, s);
      return f.flags |= Dn, t.memoizedState = null, f;
    }
    function KT(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = LS(f, s), v = Qo(i, s, u, null);
      return v.flags |= Dn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ot) !== Ze && Nf(t, e.child, null, u), v;
    }
    function GT(e, t, a) {
      return (e.mode & Ot) === Ze ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = lt) : qy(t) ? e.lanes = Or : e.lanes = aa, null;
    }
    function XT(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Dr) {
          t.flags &= ~Dr;
          var A = SS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Am(e, t, f, A);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ke, null;
          var J = i.children, U = i.fallback, ve = KT(e, t, J, U, f), Ae = t.child;
          return Ae.memoizedState = MS(f), t.memoizedState = OS, ve;
        }
      else {
        if (j1(), (t.mode & Ot) === Ze)
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
          var p, v, g;
          {
            var C = e1(u);
            p = C.digest, v = C.message, g = C.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var _ = SS(D, p, g);
          return Am(e, t, f, _);
        }
        var H = ia(f, e.childLanes);
        if (fl || H) {
          var I = Wm();
          if (I !== null) {
            var Z = Vd(I, f);
            if (Z !== Xt && Z !== s.retryLane) {
              s.retryLane = Z;
              var Oe = yn;
              Wa(e, Z), br(I, e, Z, Oe);
            }
          }
          e0();
          var tt = SS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Am(e, t, f, tt);
        } else if (aE(u)) {
          t.flags |= Ke, t.child = e.child;
          var Qe = C_.bind(null, e);
          return t1(u, Qe), null;
        } else {
          P1(t, u, s.treeContext);
          var Wt = i.children, At = NS(t, Wt);
          return At.flags |= ea, At;
        }
      }
    }
    function UC(e, t, a) {
      e.lanes = xt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = xt(i.lanes, t)), wg(e.return, t, a);
    }
    function qT(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && UC(i, a, e);
        } else if (i.tag === zt)
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
        var a = kt(e), i = !a && typeof Ct(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function tb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (kt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!jC(e[a], a))
              return;
        } else {
          var i = Ct(e);
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
      JT(u), eb(s, u), tb(f, u), wa(e, t, f, a);
      var p = ol.current, v = Ng(p, _p);
      if (v)
        p = Lg(p, _p), t.flags |= Ke;
      else {
        var g = e !== null && (e.flags & Ke) !== qe;
        g && qT(t, t.child, a), p = Uf(p);
      }
      if (Ho(t, p), (t.mode & Ot) === Ze)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var C = ZT(t.child), D;
            C === null ? (D = t.child, t.child = null) : (D = C.sibling, C.sibling = null), zS(
              t,
              !1,
              // isBackwards
              D,
              C,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, H = t.child;
            for (t.child = null; H !== null; ) {
              var I = H.alternate;
              if (I !== null && pm(I) === null) {
                t.child = H;
                break;
              }
              var Z = H.sibling;
              H.sibling = _, _ = H, H = Z;
            }
            zS(
              t,
              !0,
              // isBackwards
              _,
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
      return e === null ? t.child = Nf(t, null, i, a) : wa(e, t, i, a), t.child;
    }
    var HC = !1;
    function rb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || HC || (HC = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && il(v, s, "prop", "Context.Provider");
      }
      if (ME(t, u, p), f !== null) {
        var g = f.value;
        if (ce(g, p)) {
          if (f.children === s.children && !Ih())
            return Iu(e, t, a);
        } else
          J1(t, u, a);
      }
      var C = s.children;
      return wa(e, t, C, a), t.child;
    }
    var PC = !1;
    function ab(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (PC || (PC = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zf(t, a);
      var f = cr(i);
      Sa(t);
      var p;
      return Up.current = t, er(!0), p = s(f), er(!1), Ea(), t.flags |= ui, wa(e, t, p, a), t.child;
    }
    function Hp() {
      fl = !0;
    }
    function Um(e, t) {
      (t.mode & Ot) === Ze && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Dn);
    }
    function Iu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), hC(), qp(t.lanes), ia(a, t.childLanes) ? (q1(e, t), t.child) : null;
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
        return s === null ? (i.deletions = [e], i.flags |= Ua) : s.push(e), a.flags |= Dn, a;
      }
    }
    function AS(e, t) {
      var a = e.lanes;
      return !!ia(a, t);
    }
    function lb(e, t, a) {
      switch (t.tag) {
        case q:
          NC(t), t.stateNode, Mf();
          break;
        case P:
          HE(t);
          break;
        case N: {
          var i = t.type;
          Ql(i) && Wh(t);
          break;
        }
        case ee:
          Dg(t, t.stateNode.containerInfo);
          break;
        case de: {
          var u = t.memoizedProps.value, s = t.type._context;
          ME(t, s, u);
          break;
        }
        case he:
          {
            var f = ia(a, t.childLanes);
            f && (t.flags |= $t);
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
              return Ho(t, Uf(ol.current)), t.flags |= Ke, null;
            var g = t.child, C = g.childLanes;
            if (ia(a, C))
              return zC(e, t, a);
            Ho(t, Uf(ol.current));
            var D = Iu(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            Ho(t, Uf(ol.current));
          break;
        }
        case zt: {
          var _ = (e.flags & Ke) !== qe, H = ia(a, t.childLanes);
          if (_) {
            if (H)
              return FC(e, t, a);
            t.flags |= Ke;
          }
          var I = t.memoizedState;
          if (I !== null && (I.rendering = null, I.tail = null, I.lastEffect = null), Ho(t, ol.current), H)
            break;
          return null;
        }
        case Se:
        case Mt:
          return t.lanes = ie, DC(e, t, a);
      }
      return Iu(e, t, a);
    }
    function VC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return ib(e, t, f0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Ih() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fl = !0;
        else {
          var s = AS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ke) === qe)
            return fl = !1, lb(e, t, a);
          (e.flags & Dc) !== qe ? fl = !0 : fl = !1;
        }
      } else if (fl = !1, $r() && M1(t)) {
        var f = t.index, p = N1();
        hE(t, p, f);
      }
      switch (t.lanes = ie, t.tag) {
        case oe:
          return VT(e, t, t.type, a);
        case ct: {
          var v = t.elementType;
          return HT(e, t, v, a);
        }
        case Y: {
          var g = t.type, C = t.pendingProps, D = t.elementType === g ? C : cl(g, C);
          return _S(e, t, g, D, a);
        }
        case N: {
          var _ = t.type, H = t.pendingProps, I = t.elementType === _ ? H : cl(_, H);
          return MC(e, t, _, I, a);
        }
        case q:
          return UT(e, t, a);
        case P:
          return jT(e, t, a);
        case ye:
          return FT(e, t);
        case Re:
          return zC(e, t, a);
        case ee:
          return nb(e, t, a);
        case Ce: {
          var Z = t.type, Oe = t.pendingProps, tt = t.elementType === Z ? Oe : cl(Z, Oe);
          return bC(e, t, Z, tt, a);
        }
        case G:
          return LT(e, t, a);
        case X:
          return zT(e, t, a);
        case he:
          return AT(e, t, a);
        case de:
          return rb(e, t, a);
        case fe:
          return ab(e, t, a);
        case Ge: {
          var Qe = t.type, Wt = t.pendingProps, At = cl(Qe, Wt);
          if (t.type !== t.elementType) {
            var A = Qe.propTypes;
            A && il(
              A,
              At,
              // Resolved for outer only
              "prop",
              Qt(Qe)
            );
          }
          return At = cl(Qe.type, At), _C(e, t, Qe, At, a);
        }
        case He:
          return kC(e, t, t.type, t.pendingProps, a);
        case mt: {
          var J = t.type, U = t.pendingProps, ve = t.elementType === J ? U : cl(J, U);
          return PT(e, t, J, ve, a);
        }
        case zt:
          return FC(e, t, a);
        case yt:
          break;
        case Se:
          return DC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bf(e) {
      e.flags |= $t;
    }
    function BC(e) {
      e.flags |= An, e.flags |= go;
    }
    var $C, US, IC, YC;
    $C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === P || u.tag === ye)
          kx(e, u.stateNode);
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
    }, US = function(e, t) {
    }, IC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Og(), v = Ox(f, a, s, i, u, p);
        t.updateQueue = v, v && Bf(t);
      }
    }, YC = function(e, t, a, i) {
      a !== i && Bf(t);
    };
    function Pp(e, t) {
      if (!$r())
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
    function Yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ie, i = qe;
      if (t) {
        if ((e.mode & Jt) !== Ze) {
          for (var v = e.selfBaseDuration, g = e.child; g !== null; )
            a = xt(a, xt(g.lanes, g.childLanes)), i |= g.subtreeFlags & Qn, i |= g.flags & Qn, v += g.treeBaseDuration, g = g.sibling;
          e.treeBaseDuration = v;
        } else
          for (var C = e.child; C !== null; )
            a = xt(a, xt(C.lanes, C.childLanes)), i |= C.subtreeFlags & Qn, i |= C.flags & Qn, C.return = e, C = C.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Jt) !== Ze) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = xt(a, xt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = xt(a, xt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function ub(e, t, a) {
      if (Y1() && (t.mode & Ot) !== Ze && (t.flags & Ke) === qe)
        return RE(t), Mf(), t.flags |= Dr | ds | lr, !1;
      var i = qh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($1(t), Yr(t), (t.mode & Jt) !== Ze) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Mf(), (t.flags & Ke) === qe && (t.memoizedState = null), t.flags |= $t, Yr(t), (t.mode & Jt) !== Ze) {
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
    function WC(e, t, a) {
      var i = t.pendingProps;
      switch (og(t), t.tag) {
        case oe:
        case ct:
        case He:
        case Y:
        case Ce:
        case G:
        case X:
        case he:
        case fe:
        case Ge:
          return Yr(t), null;
        case N: {
          var u = t.type;
          return Ql(u) && Yh(t), Yr(t), null;
        }
        case q: {
          var s = t.stateNode;
          if (Af(t), ag(t), Ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = qh(t);
            if (f)
              Bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Dr) !== qe) && (t.flags |= tr, wE());
            }
          }
          return US(e, t), Yr(t), null;
        }
        case P: {
          Mg(t);
          var v = FE(), g = t.type;
          if (e !== null && t.stateNode != null)
            IC(e, t, g, i, v), e.ref !== t.ref && BC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Yr(t), null;
            }
            var C = Og(), D = qh(t);
            if (D)
              V1(t, v, C) && Bf(t);
            else {
              var _ = _x(g, i, v, C, t);
              $C(_, t, !1, !1), t.stateNode = _, Dx(_, g, i, v) && Bf(t);
            }
            t.ref !== null && BC(t);
          }
          return Yr(t), null;
        }
        case ye: {
          var H = i;
          if (e && t.stateNode != null) {
            var I = e.memoizedProps;
            YC(e, t, I, H);
          } else {
            if (typeof H != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Z = FE(), Oe = Og(), tt = qh(t);
            tt ? B1(t) && Bf(t) : t.stateNode = Mx(H, Z, Oe, t);
          }
          return Yr(t), null;
        }
        case Re: {
          jf(t);
          var Qe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Wt = ub(e, t, Qe);
            if (!Wt)
              return t.flags & lr ? t : null;
          }
          if ((t.flags & Ke) !== qe)
            return t.lanes = a, (t.mode & Jt) !== Ze && lS(t), t;
          var At = Qe !== null, A = e !== null && e.memoizedState !== null;
          if (At !== A && At) {
            var J = t.child;
            if (J.flags |= Wn, (t.mode & Ot) !== Ze) {
              var U = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              U || Ng(ol.current, VE) ? o_() : e0();
            }
          }
          var ve = t.updateQueue;
          if (ve !== null && (t.flags |= $t), Yr(t), (t.mode & Jt) !== Ze && At) {
            var Ae = t.child;
            Ae !== null && (t.treeBaseDuration -= Ae.treeBaseDuration);
          }
          return null;
        }
        case ee:
          return Af(t), US(e, t), e === null && x1(t.stateNode.containerInfo), Yr(t), null;
        case de:
          var Ne = t.type._context;
          return Rg(Ne, t), Yr(t), null;
        case mt: {
          var ot = t.type;
          return Ql(ot) && Yh(t), Yr(t), null;
        }
        case zt: {
          jf(t);
          var ht = t.memoizedState;
          if (ht === null)
            return Yr(t), null;
          var hn = (t.flags & Ke) !== qe, nn = ht.rendering;
          if (nn === null)
            if (hn)
              Pp(ht, !1);
            else {
              var ar = c_() && (e === null || (e.flags & Ke) === qe);
              if (!ar)
                for (var rn = t.child; rn !== null; ) {
                  var Jn = pm(rn);
                  if (Jn !== null) {
                    hn = !0, t.flags |= Ke, Pp(ht, !1);
                    var da = Jn.updateQueue;
                    return da !== null && (t.updateQueue = da, t.flags |= $t), t.subtreeFlags = qe, Z1(t, a), Ho(t, Lg(ol.current, _p)), t.child;
                  }
                  rn = rn.sibling;
                }
              ht.tail !== null && nr() > pR() && (t.flags |= Ke, hn = !0, Pp(ht, !1), t.lanes = Nd);
            }
          else {
            if (!hn) {
              var Xr = pm(nn);
              if (Xr !== null) {
                t.flags |= Ke, hn = !0;
                var vi = Xr.updateQueue;
                if (vi !== null && (t.updateQueue = vi, t.flags |= $t), Pp(ht, !0), ht.tail === null && ht.tailMode === "hidden" && !nn.alternate && !$r())
                  return Yr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              nr() * 2 - ht.renderingStartTime > pR() && a !== aa && (t.flags |= Ke, hn = !0, Pp(ht, !1), t.lanes = Nd);
            }
            if (ht.isBackwards)
              nn.sibling = t.child, t.child = nn;
            else {
              var ba = ht.last;
              ba !== null ? ba.sibling = nn : t.child = nn, ht.last = nn;
            }
          }
          if (ht.tail !== null) {
            var _a = ht.tail;
            ht.rendering = _a, ht.tail = _a.sibling, ht.renderingStartTime = nr(), _a.sibling = null;
            var pa = ol.current;
            return hn ? pa = Lg(pa, _p) : pa = Uf(pa), Ho(t, pa), _a;
          }
          return Yr(t), null;
        }
        case yt:
          break;
        case Se:
        case Mt: {
          JS(t);
          var Gu = t.memoizedState, Xf = Gu !== null;
          if (e !== null) {
            var nv = e.memoizedState, tu = nv !== null;
            tu !== Xf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !we && (t.flags |= Wn);
          }
          return !Xf || (t.mode & Ot) === Ze ? Yr(t) : ia(eu, aa) && (Yr(t), t.subtreeFlags & (Dn | $t) && (t.flags |= Wn)), null;
        }
        case jt:
          return null;
        case Ft:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ob(e, t, a) {
      switch (og(t), t.tag) {
        case N: {
          var i = t.type;
          Ql(i) && Yh(t);
          var u = t.flags;
          return u & lr ? (t.flags = u & ~lr | Ke, (t.mode & Jt) !== Ze && lS(t), t) : null;
        }
        case q: {
          t.stateNode, Af(t), ag(t), Ag();
          var s = t.flags;
          return (s & lr) !== qe && (s & Ke) === qe ? (t.flags = s & ~lr | Ke, t) : null;
        }
        case P:
          return Mg(t), null;
        case Re: {
          jf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Mf();
          }
          var p = t.flags;
          return p & lr ? (t.flags = p & ~lr | Ke, (t.mode & Jt) !== Ze && lS(t), t) : null;
        }
        case zt:
          return jf(t), null;
        case ee:
          return Af(t), null;
        case de:
          var v = t.type._context;
          return Rg(v, t), null;
        case Se:
        case Mt:
          return JS(t), null;
        case jt:
          return null;
        default:
          return null;
      }
    }
    function QC(e, t, a) {
      switch (og(t), t.tag) {
        case N: {
          var i = t.type.childContextTypes;
          i != null && Yh(t);
          break;
        }
        case q: {
          t.stateNode, Af(t), ag(t), Ag();
          break;
        }
        case P: {
          Mg(t);
          break;
        }
        case ee:
          Af(t);
          break;
        case Re:
          jf(t);
          break;
        case zt:
          jf(t);
          break;
        case de:
          var u = t.type._context;
          Rg(u, t);
          break;
        case Se:
        case Mt:
          JS(t);
          break;
      }
    }
    var KC = null;
    KC = /* @__PURE__ */ new Set();
    var jm = !1, Wr = !1, sb = typeof WeakSet == "function" ? WeakSet : Set, $e = null, $f = null, If = null;
    function cb(e) {
      Dl(null, function() {
        throw e;
      }), fs();
    }
    var fb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Jt)
        try {
          Zl(), t.componentWillUnmount();
        } finally {
          ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function GC(e, t) {
      try {
        Bo(Er, e);
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
            if (We && Tt && e.mode & Jt)
              try {
                Zl(), i = a(null);
              } finally {
                ql(e);
              }
            else
              i = a(null);
          } catch (u) {
            wn(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", dt(e));
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
      Tx(e.containerInfo), $e = t, vb();
      var a = qC;
      return qC = !1, a;
    }
    function vb() {
      for (; $e !== null; ) {
        var e = $e, t = e.child;
        (e.subtreeFlags & Ml) !== qe && t !== null ? (t.return = e, $e = t) : hb();
      }
    }
    function hb() {
      for (; $e !== null; ) {
        var e = $e;
        cn(e);
        try {
          mb(e);
        } catch (a) {
          wn(e, e.return, a);
        }
        Rn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, $e = t;
          return;
        }
        $e = e.return;
      }
    }
    function mb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & tr) !== qe) {
        switch (cn(e), e.tag) {
          case Y:
          case Ce:
          case He:
            break;
          case N: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ac && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : cl(e.type, i), u);
              {
                var p = KC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", dt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case q: {
            {
              var v = e.stateNode;
              Xx(v.containerInfo);
            }
            break;
          }
          case P:
          case ye:
          case ee:
          case mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Rn();
      }
    }
    function dl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Ir) !== Qa ? Ji(t) : (e & Er) !== Qa && vs(t), (e & Kl) !== Qa && Jp(!0), Fm(t, a, p), (e & Kl) !== Qa && Jp(!1), (e & Ir) !== Qa ? Al() : (e & Er) !== Qa && Od());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Bo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Ir) !== Qa ? Dd(t) : (e & Er) !== Qa && Ac(t);
            var f = s.create;
            (e & Kl) !== Qa && Jp(!0), s.destroy = f(), (e & Kl) !== Qa && Jp(!1), (e & Ir) !== Qa ? $v() : (e & Er) !== Qa && Iv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Er) !== qe ? v = "useLayoutEffect" : (s.tag & Kl) !== qe ? v = "useInsertionEffect" : v = "useEffect";
                var g = void 0;
                p === null ? g = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? g = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : g = " You returned: " + p, y("%s must not return anything besides a function, which is used for clean-up.%s", v, g);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function yb(e, t) {
      if ((t.flags & $t) !== qe)
        switch (t.tag) {
          case he: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = pC(), p = t.alternate === null ? "mount" : "update";
            dC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case q:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
                case he:
                  var C = v.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function gb(e, t, a, i) {
      if ((a.flags & Ll) !== qe)
        switch (a.tag) {
          case Y:
          case Ce:
          case He: {
            if (!Wr)
              if (a.mode & Jt)
                try {
                  Zl(), Bo(Er | Sr, a);
                } finally {
                  ql(a);
                }
              else
                Bo(Er | Sr, a);
            break;
          }
          case N: {
            var u = a.stateNode;
            if (a.flags & $t && !Wr)
              if (t === null)
                if (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(a) || "instance")), a.mode & Jt)
                  try {
                    Zl(), u.componentDidMount();
                  } finally {
                    ql(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : cl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(a) || "instance")), a.mode & Jt)
                  try {
                    Zl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ql(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", dt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", dt(a) || "instance")), jE(a, p, u));
            break;
          }
          case q: {
            var v = a.updateQueue;
            if (v !== null) {
              var g = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case P:
                    g = a.child.stateNode;
                    break;
                  case N:
                    g = a.child.stateNode;
                    break;
                }
              jE(a, v, g);
            }
            break;
          }
          case P: {
            var C = a.stateNode;
            if (t === null && a.flags & $t) {
              var D = a.type, _ = a.memoizedProps;
              Ux(C, D, _);
            }
            break;
          }
          case ye:
            break;
          case ee:
            break;
          case he: {
            {
              var H = a.memoizedProps, I = H.onCommit, Z = H.onRender, Oe = a.stateNode.effectDuration, tt = pC(), Qe = t === null ? "mount" : "update";
              dC() && (Qe = "nested-update"), typeof Z == "function" && Z(a.memoizedProps.id, Qe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, tt);
              {
                typeof I == "function" && I(a.memoizedProps.id, Qe, Oe, tt), h_(a);
                var Wt = a.return;
                e: for (; Wt !== null; ) {
                  switch (Wt.tag) {
                    case q:
                      var At = Wt.stateNode;
                      At.effectDuration += Oe;
                      break e;
                    case he:
                      var A = Wt.stateNode;
                      A.effectDuration += Oe;
                      break e;
                  }
                  Wt = Wt.return;
                }
              }
            }
            break;
          }
          case Re: {
            bb(e, a);
            break;
          }
          case zt:
          case mt:
          case yt:
          case Se:
          case Mt:
          case Ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Wr || a.flags & An && ZC(a);
    }
    function Sb(e) {
      switch (e.tag) {
        case Y:
        case Ce:
        case He: {
          if (e.mode & Jt)
            try {
              Zl(), GC(e, e.return);
            } finally {
              ql(e);
            }
          else
            GC(e, e.return);
          break;
        }
        case N: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && db(e, e.return, t), XC(e, e.return);
          break;
        }
        case P: {
          XC(e, e.return);
          break;
        }
      }
    }
    function Eb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === P) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Wx(u) : Kx(i.stateNode, i.memoizedProps);
            } catch (f) {
              wn(e, e.return, f);
            }
          }
        } else if (i.tag === ye) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Qx(s) : Gx(s, i.memoizedProps);
            } catch (f) {
              wn(e, e.return, f);
            }
        } else if (!((i.tag === Se || i.tag === Mt) && i.memoizedState !== null && i !== e)) {
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
          case P:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Jt)
            try {
              Zl(), u = t(i);
            } finally {
              ql(e);
            }
          else
            u = t(i);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", dt(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", dt(e)), t.current = i;
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
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === P) {
          var a = e.stateNode;
          a !== null && _1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Rb(e) {
      for (var t = e.return; t !== null; ) {
        if (eR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function eR(e) {
      return e.tag === P || e.tag === q || e.tag === ee;
    }
    function tR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || eR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== P && t.tag !== ye && t.tag !== rt; ) {
          if (t.flags & Dn || t.child === null || t.tag === ee)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Dn))
          return t.stateNode;
      }
    }
    function wb(e) {
      var t = Rb(e);
      switch (t.tag) {
        case P: {
          var a = t.stateNode;
          t.flags & ja && (rE(a), t.flags &= ~ja);
          var i = tR(e);
          HS(e, i, a);
          break;
        }
        case q:
        case ee: {
          var u = t.stateNode.containerInfo, s = tR(e);
          FS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function FS(e, t, a) {
      var i = e.tag, u = i === P || i === ye;
      if (u) {
        var s = e.stateNode;
        t ? Bx(a, s, t) : Px(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          FS(f, t, a);
          for (var p = f.sibling; p !== null; )
            FS(p, t, a), p = p.sibling;
        }
      }
    }
    function HS(e, t, a) {
      var i = e.tag, u = i === P || i === ye;
      if (u) {
        var s = e.stateNode;
        t ? Vx(a, s, t) : Hx(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          HS(f, t, a);
          for (var p = f.sibling; p !== null; )
            HS(p, t, a), p = p.sibling;
        }
      }
    }
    var Qr = null, pl = !1;
    function xb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case P: {
              Qr = i.stateNode, pl = !1;
              break e;
            }
            case q: {
              Qr = i.stateNode.containerInfo, pl = !0;
              break e;
            }
            case ee: {
              Qr = i.stateNode.containerInfo, pl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Qr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        nR(e, t, a), Qr = null, pl = !1;
      }
      Cb(a);
    }
    function $o(e, t, a) {
      for (var i = a.child; i !== null; )
        nR(e, t, i), i = i.sibling;
    }
    function nR(e, t, a) {
      switch (bd(a), a.tag) {
        case P:
          Wr || Yf(a, t);
        case ye: {
          {
            var i = Qr, u = pl;
            Qr = null, $o(e, t, a), Qr = i, pl = u, Qr !== null && (pl ? Ix(Qr, a.stateNode) : $x(Qr, a.stateNode));
          }
          return;
        }
        case rt: {
          Qr !== null && (pl ? Yx(Qr, a.stateNode) : Xy(Qr, a.stateNode));
          return;
        }
        case ee: {
          {
            var s = Qr, f = pl;
            Qr = a.stateNode.containerInfo, pl = !0, $o(e, t, a), Qr = s, pl = f;
          }
          return;
        }
        case Y:
        case Ce:
        case Ge:
        case He: {
          if (!Wr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var g = v.next, C = g;
                do {
                  var D = C, _ = D.destroy, H = D.tag;
                  _ !== void 0 && ((H & Kl) !== Qa ? Fm(a, t, _) : (H & Er) !== Qa && (vs(a), a.mode & Jt ? (Zl(), Fm(a, t, _), ql(a)) : Fm(a, t, _), Od())), C = C.next;
                } while (C !== g);
              }
            }
          }
          $o(e, t, a);
          return;
        }
        case N: {
          if (!Wr) {
            Yf(a, t);
            var I = a.stateNode;
            typeof I.componentWillUnmount == "function" && jS(a, t, I);
          }
          $o(e, t, a);
          return;
        }
        case yt: {
          $o(e, t, a);
          return;
        }
        case Se: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ot
          ) {
            var Z = Wr;
            Wr = Z || a.memoizedState !== null, $o(e, t, a), Wr = Z;
          } else
            $o(e, t, a);
          break;
        }
        default: {
          $o(e, t, a);
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
    function rR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new sb()), t.forEach(function(i) {
          var u = R_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ra)
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
      $f = a, If = e, cn(t), aR(t, e), cn(t), $f = null, If = null;
    }
    function vl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            xb(e, t, s);
          } catch (v) {
            wn(s, t, v);
          }
        }
      var f = Rl();
      if (t.subtreeFlags & Nl)
        for (var p = t.child; p !== null; )
          cn(p), aR(p, e), p = p.sibling;
      cn(f);
    }
    function aR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Y:
        case Ce:
        case Ge:
        case He: {
          if (vl(t, e), Jl(e), u & $t) {
            try {
              dl(Kl | Sr, e, e.return), Bo(Kl | Sr, e);
            } catch (ot) {
              wn(e, e.return, ot);
            }
            if (e.mode & Jt) {
              try {
                Zl(), dl(Er | Sr, e, e.return);
              } catch (ot) {
                wn(e, e.return, ot);
              }
              ql(e);
            } else
              try {
                dl(Er | Sr, e, e.return);
              } catch (ot) {
                wn(e, e.return, ot);
              }
          }
          return;
        }
        case N: {
          vl(t, e), Jl(e), u & An && i !== null && Yf(i, i.return);
          return;
        }
        case P: {
          vl(t, e), Jl(e), u & An && i !== null && Yf(i, i.return);
          {
            if (e.flags & ja) {
              var s = e.stateNode;
              try {
                rE(s);
              } catch (ot) {
                wn(e, e.return, ot);
              }
            }
            if (u & $t) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, g = e.type, C = e.updateQueue;
                if (e.updateQueue = null, C !== null)
                  try {
                    jx(f, C, g, v, p, e);
                  } catch (ot) {
                    wn(e, e.return, ot);
                  }
              }
            }
          }
          return;
        }
        case ye: {
          if (vl(t, e), Jl(e), u & $t) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, _ = e.memoizedProps, H = i !== null ? i.memoizedProps : _;
            try {
              Fx(D, H, _);
            } catch (ot) {
              wn(e, e.return, ot);
            }
          }
          return;
        }
        case q: {
          if (vl(t, e), Jl(e), u & $t && i !== null) {
            var I = i.memoizedState;
            if (I.isDehydrated)
              try {
                s1(t.containerInfo);
              } catch (ot) {
                wn(e, e.return, ot);
              }
          }
          return;
        }
        case ee: {
          vl(t, e), Jl(e);
          return;
        }
        case Re: {
          vl(t, e), Jl(e);
          var Z = e.child;
          if (Z.flags & Wn) {
            var Oe = Z.stateNode, tt = Z.memoizedState, Qe = tt !== null;
            if (Oe.isHidden = Qe, Qe) {
              var Wt = Z.alternate !== null && Z.alternate.memoizedState !== null;
              Wt || u_();
            }
          }
          if (u & $t) {
            try {
              Tb(e);
            } catch (ot) {
              wn(e, e.return, ot);
            }
            rR(e);
          }
          return;
        }
        case Se: {
          var At = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ot
          ) {
            var A = Wr;
            Wr = A || At, vl(t, e), Wr = A;
          } else
            vl(t, e);
          if (Jl(e), u & Wn) {
            var J = e.stateNode, U = e.memoizedState, ve = U !== null, Ae = e;
            if (J.isHidden = ve, ve && !At && (Ae.mode & Ot) !== Ze) {
              $e = Ae;
              for (var Ne = Ae.child; Ne !== null; )
                $e = Ne, Db(Ne), Ne = Ne.sibling;
            }
            Eb(Ae, ve);
          }
          return;
        }
        case zt: {
          vl(t, e), Jl(e), u & $t && rR(e);
          return;
        }
        case yt:
          return;
        default: {
          vl(t, e), Jl(e);
          return;
        }
      }
    }
    function Jl(e) {
      var t = e.flags;
      if (t & Dn) {
        try {
          wb(e);
        } catch (a) {
          wn(e, e.return, a);
        }
        e.flags &= ~Dn;
      }
      t & ea && (e.flags &= ~ea);
    }
    function kb(e, t, a) {
      $f = a, If = t, $e = e, iR(e, t, a), $f = null, If = null;
    }
    function iR(e, t, a) {
      for (var i = (e.mode & Ot) !== Ze; $e !== null; ) {
        var u = $e, s = u.child;
        if (u.tag === Se && i) {
          var f = u.memoizedState !== null, p = f || jm;
          if (p) {
            PS(e, t, a);
            continue;
          } else {
            var v = u.alternate, g = v !== null && v.memoizedState !== null, C = g || Wr, D = jm, _ = Wr;
            jm = p, Wr = C, Wr && !_ && ($e = u, Ob(u));
            for (var H = s; H !== null; )
              $e = H, iR(
                H,
                // New root; bubble back up to here and stop.
                t,
                a
              ), H = H.sibling;
            $e = u, jm = D, Wr = _, PS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ll) !== qe && s !== null ? (s.return = u, $e = s) : PS(e, t, a);
      }
    }
    function PS(e, t, a) {
      for (; $e !== null; ) {
        var i = $e;
        if ((i.flags & Ll) !== qe) {
          var u = i.alternate;
          cn(i);
          try {
            gb(t, u, i, a);
          } catch (f) {
            wn(i, i.return, f);
          }
          Rn();
        }
        if (i === e) {
          $e = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, $e = s;
          return;
        }
        $e = i.return;
      }
    }
    function Db(e) {
      for (; $e !== null; ) {
        var t = $e, a = t.child;
        switch (t.tag) {
          case Y:
          case Ce:
          case Ge:
          case He: {
            if (t.mode & Jt)
              try {
                Zl(), dl(Er, t, t.return);
              } finally {
                ql(t);
              }
            else
              dl(Er, t, t.return);
            break;
          }
          case N: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && jS(t, t.return, i);
            break;
          }
          case P: {
            Yf(t, t.return);
            break;
          }
          case Se: {
            var u = t.memoizedState !== null;
            if (u) {
              lR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, $e = a) : lR(e);
      }
    }
    function lR(e) {
      for (; $e !== null; ) {
        var t = $e;
        if (t === e) {
          $e = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, $e = a;
          return;
        }
        $e = t.return;
      }
    }
    function Ob(e) {
      for (; $e !== null; ) {
        var t = $e, a = t.child;
        if (t.tag === Se) {
          var i = t.memoizedState !== null;
          if (i) {
            uR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, $e = a) : uR(e);
      }
    }
    function uR(e) {
      for (; $e !== null; ) {
        var t = $e;
        cn(t);
        try {
          Sb(t);
        } catch (i) {
          wn(t, t.return, i);
        }
        if (Rn(), t === e) {
          $e = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, $e = a;
          return;
        }
        $e = t.return;
      }
    }
    function Mb(e, t, a, i) {
      $e = t, Nb(t, e, a, i);
    }
    function Nb(e, t, a, i) {
      for (; $e !== null; ) {
        var u = $e, s = u.child;
        (u.subtreeFlags & qi) !== qe && s !== null ? (s.return = u, $e = s) : Lb(e, t, a, i);
      }
    }
    function Lb(e, t, a, i) {
      for (; $e !== null; ) {
        var u = $e;
        if ((u.flags & Jr) !== qe) {
          cn(u);
          try {
            zb(t, u, a, i);
          } catch (f) {
            wn(u, u.return, f);
          }
          Rn();
        }
        if (u === e) {
          $e = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, $e = s;
          return;
        }
        $e = u.return;
      }
    }
    function zb(e, t, a, i) {
      switch (t.tag) {
        case Y:
        case Ce:
        case He: {
          if (t.mode & Jt) {
            iS();
            try {
              Bo(Ir | Sr, t);
            } finally {
              aS(t);
            }
          } else
            Bo(Ir | Sr, t);
          break;
        }
      }
    }
    function Ab(e) {
      $e = e, Ub();
    }
    function Ub() {
      for (; $e !== null; ) {
        var e = $e, t = e.child;
        if (($e.flags & Ua) !== qe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              $e = u, Hb(u, e);
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
            $e = e;
          }
        }
        (e.subtreeFlags & qi) !== qe && t !== null ? (t.return = e, $e = t) : jb();
      }
    }
    function jb() {
      for (; $e !== null; ) {
        var e = $e;
        (e.flags & Jr) !== qe && (cn(e), Fb(e), Rn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, $e = t;
          return;
        }
        $e = e.return;
      }
    }
    function Fb(e) {
      switch (e.tag) {
        case Y:
        case Ce:
        case He: {
          e.mode & Jt ? (iS(), dl(Ir | Sr, e, e.return), aS(e)) : dl(Ir | Sr, e, e.return);
          break;
        }
      }
    }
    function Hb(e, t) {
      for (; $e !== null; ) {
        var a = $e;
        cn(a), Vb(a, t), Rn();
        var i = a.child;
        i !== null ? (i.return = a, $e = i) : Pb(e);
      }
    }
    function Pb(e) {
      for (; $e !== null; ) {
        var t = $e, a = t.sibling, i = t.return;
        if (JC(t), t === e) {
          $e = null;
          return;
        }
        if (a !== null) {
          a.return = i, $e = a;
          return;
        }
        $e = i;
      }
    }
    function Vb(e, t) {
      switch (e.tag) {
        case Y:
        case Ce:
        case He: {
          e.mode & Jt ? (iS(), dl(Ir, e, t), aS(e)) : dl(Ir, e, t);
          break;
        }
      }
    }
    function Bb(e) {
      switch (e.tag) {
        case Y:
        case Ce:
        case He: {
          try {
            Bo(Er | Sr, e);
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
        case N: {
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
        case Y:
        case Ce:
        case He: {
          try {
            Bo(Ir | Sr, e);
          } catch (t) {
            wn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Ib(e) {
      switch (e.tag) {
        case Y:
        case Ce:
        case He: {
          try {
            dl(Er | Sr, e, e.return);
          } catch (a) {
            wn(e, e.return, a);
          }
          break;
        }
        case N: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && jS(e, e.return, t);
          break;
        }
      }
    }
    function Yb(e) {
      switch (e.tag) {
        case Y:
        case Ce:
        case He:
          try {
            dl(Ir | Sr, e, e.return);
          } catch (t) {
            wn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Vp = Symbol.for;
      Vp("selector.component"), Vp("selector.has_pseudo_class"), Vp("selector.role"), Vp("selector.test_id"), Vp("selector.text");
    }
    var Wb = [];
    function Qb() {
      Wb.forEach(function(e) {
        return e();
      });
    }
    var Kb = E.ReactCurrentActQueue;
    function Gb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function oR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && Kb.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Xb = Math.ceil, VS = E.ReactCurrentDispatcher, BS = E.ReactCurrentOwner, Kr = E.ReactCurrentBatchConfig, hl = E.ReactCurrentActQueue, wr = (
      /*             */
      0
    ), sR = (
      /*               */
      1
    ), Gr = (
      /*                */
      2
    ), Pi = (
      /*                */
      4
    ), Yu = 0, Bp = 1, ic = 2, Hm = 3, $p = 4, cR = 5, $S = 6, Yt = wr, xa = null, $n = null, xr = ie, eu = ie, IS = Lo(ie), Tr = Yu, Ip = null, Pm = ie, Yp = ie, Vm = ie, Wp = null, Ka = null, YS = 0, fR = 500, dR = 1 / 0, qb = 500, Wu = null;
    function Qp() {
      dR = nr() + qb;
    }
    function pR() {
      return dR;
    }
    var Bm = !1, WS = null, Wf = null, lc = !1, Io = null, Kp = ie, QS = [], KS = null, Zb = 50, Gp = 0, GS = null, XS = !1, $m = !1, Jb = 50, Qf = 0, Im = null, Xp = yn, Ym = ie, vR = !1;
    function Wm() {
      return xa;
    }
    function Ta() {
      return (Yt & (Gr | Pi)) !== wr ? nr() : (Xp !== yn || (Xp = nr()), Xp);
    }
    function Yo(e) {
      var t = e.mode;
      if ((t & Ot) === Ze)
        return lt;
      if ((Yt & Gr) !== wr && xr !== ie)
        return _s(xr);
      var a = K1() !== Q1;
      if (a) {
        if (Kr.transition !== null) {
          var i = Kr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Ym === Xt && (Ym = Fd()), Ym;
      }
      var u = $a();
      if (u !== Xt)
        return u;
      var s = Nx();
      return s;
    }
    function e_(e) {
      var t = e.mode;
      return (t & Ot) === Ze ? lt : Xv();
    }
    function br(e, t, a, i) {
      x_(), vR && y("useInsertionEffect must not schedule updates."), XS && ($m = !0), Ro(e, a, i), (Yt & Gr) !== ie && e === xa ? __(t) : (ra && Os(e, t, a), k_(t), e === xa && ((Yt & Gr) === wr && (Yp = xt(Yp, a)), Tr === $p && Wo(e, xr)), Ga(e, i), a === lt && Yt === wr && (t.mode & Ot) === Ze && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !hl.isBatchingLegacy && (Qp(), vE()));
    }
    function t_(e, t, a) {
      var i = e.current;
      i.lanes = t, Ro(e, t, a), Ga(e, a);
    }
    function n_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Yt & Gr) !== wr
      );
    }
    function Ga(e, t) {
      var a = e.callbackNode;
      tf(e, t);
      var i = ef(e, e === xa ? xr : ie);
      if (i === ie) {
        a !== null && OR(a), e.callbackNode = null, e.callbackPriority = Xt;
        return;
      }
      var u = Fl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(hl.current !== null && a !== r0)) {
        a == null && s !== lt && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && OR(a);
      var f;
      if (u === lt)
        e.tag === zo ? (hl.isBatchingLegacy !== null && (hl.didScheduleLegacyUpdate = !0), O1(yR.bind(null, e))) : pE(yR.bind(null, e)), hl.current !== null ? hl.current.push(Ao) : zx(function() {
          (Yt & (Gr | Pi)) === wr && Ao();
        }), f = null;
      else {
        var p;
        switch (rh(i)) {
          case Fr:
            p = ps;
            break;
          case Oi:
            p = zl;
            break;
          case Va:
            p = Zi;
            break;
          case Ba:
            p = Su;
            break;
          default:
            p = Zi;
            break;
        }
        f = a0(p, hR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function hR(e, t) {
      if (ET(), Xp = yn, Ym = ie, (Yt & (Gr | Pi)) !== wr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Ku();
      if (i && e.callbackNode !== a)
        return null;
      var u = ef(e, e === xa ? xr : ie);
      if (u === ie)
        return null;
      var s = !rf(e, u) && !Gv(e, u) && !t, f = s ? d_(e, u) : Km(e, u);
      if (f !== Yu) {
        if (f === ic) {
          var p = nf(e);
          p !== ie && (u = p, f = qS(e, p));
        }
        if (f === Bp) {
          var v = Ip;
          throw uc(e, ie), Wo(e, u), Ga(e, nr()), v;
        }
        if (f === $S)
          Wo(e, u);
        else {
          var g = !rf(e, u), C = e.current.alternate;
          if (g && !a_(C)) {
            if (f = Km(e, u), f === ic) {
              var D = nf(e);
              D !== ie && (u = D, f = qS(e, D));
            }
            if (f === Bp) {
              var _ = Ip;
              throw uc(e, ie), Wo(e, u), Ga(e, nr()), _;
            }
          }
          e.finishedWork = C, e.finishedLanes = u, r_(e, f, u);
        }
      }
      return Ga(e, nr()), e.callbackNode === a ? hR.bind(null, e) : null;
    }
    function qS(e, t) {
      var a = Wp;
      if (uf(e)) {
        var i = uc(e, t);
        i.flags |= Dr, w1(e.containerInfo);
      }
      var u = Km(e, t);
      if (u !== ic) {
        var s = Ka;
        Ka = a, s !== null && mR(s);
      }
      return u;
    }
    function mR(e) {
      Ka === null ? Ka = e : Ka.push.apply(Ka, e);
    }
    function r_(e, t, a) {
      switch (t) {
        case Yu:
        case Bp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ic: {
          oc(e, Ka, Wu);
          break;
        }
        case Hm: {
          if (Wo(e, a), Ou(a) && // do not delay if we're inside an act() scope
          !MR()) {
            var i = YS + fR - nr();
            if (i > 10) {
              var u = ef(e, ie);
              if (u !== ie)
                break;
              var s = e.suspendedLanes;
              if (!Mu(s, a)) {
                Ta(), af(e, s);
                break;
              }
              e.timeoutHandle = Ky(oc.bind(null, e, Ka, Wu), i);
              break;
            }
          }
          oc(e, Ka, Wu);
          break;
        }
        case $p: {
          if (Wo(e, a), Ud(a))
            break;
          if (!MR()) {
            var f = si(e, a), p = f, v = nr() - p, g = w_(v) - v;
            if (g > 10) {
              e.timeoutHandle = Ky(oc.bind(null, e, Ka, Wu), g);
              break;
            }
          }
          oc(e, Ka, Wu);
          break;
        }
        case cR: {
          oc(e, Ka, Wu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function a_(e) {
      for (var t = e; ; ) {
        if (t.flags & yo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ce(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & yo && v !== null) {
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
    function Wo(e, t) {
      t = ks(t, Vm), t = ks(t, Yp), Jv(e, t);
    }
    function yR(e) {
      if (CT(), (Yt & (Gr | Pi)) !== wr)
        throw new Error("Should not already be working.");
      Ku();
      var t = ef(e, ie);
      if (!ia(t, lt))
        return Ga(e, nr()), null;
      var a = Km(e, t);
      if (e.tag !== zo && a === ic) {
        var i = nf(e);
        i !== ie && (t = i, a = qS(e, i));
      }
      if (a === Bp) {
        var u = Ip;
        throw uc(e, ie), Wo(e, t), Ga(e, nr()), u;
      }
      if (a === $S)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, oc(e, Ka, Wu), Ga(e, nr()), null;
    }
    function i_(e, t) {
      t !== ie && (lf(e, xt(t, lt)), Ga(e, nr()), (Yt & (Gr | Pi)) === wr && (Qp(), Ao()));
    }
    function ZS(e, t) {
      var a = Yt;
      Yt |= sR;
      try {
        return e(t);
      } finally {
        Yt = a, Yt === wr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !hl.isBatchingLegacy && (Qp(), vE());
      }
    }
    function l_(e, t, a, i, u) {
      var s = $a(), f = Kr.transition;
      try {
        return Kr.transition = null, Xn(Fr), e(t, a, i, u);
      } finally {
        Xn(s), Kr.transition = f, Yt === wr && Qp();
      }
    }
    function Qu(e) {
      Io !== null && Io.tag === zo && (Yt & (Gr | Pi)) === wr && Ku();
      var t = Yt;
      Yt |= sR;
      var a = Kr.transition, i = $a();
      try {
        return Kr.transition = null, Xn(Fr), e ? e() : void 0;
      } finally {
        Xn(i), Kr.transition = a, Yt = t, (Yt & (Gr | Pi)) === wr && Ao();
      }
    }
    function gR() {
      return (Yt & (Gr | Pi)) !== wr;
    }
    function Qm(e, t) {
      ca(IS, eu, e), eu = xt(eu, t);
    }
    function JS(e) {
      eu = IS.current, sa(IS, e);
    }
    function uc(e, t) {
      e.finishedWork = null, e.finishedLanes = ie;
      var a = e.timeoutHandle;
      if (a !== Gy && (e.timeoutHandle = Gy, Lx(a)), $n !== null)
        for (var i = $n.return; i !== null; ) {
          var u = i.alternate;
          QC(u, i), i = i.return;
        }
      xa = e;
      var s = sc(e.current, null);
      return $n = s, xr = eu = t, Tr = Yu, Ip = null, Pm = ie, Yp = ie, Vm = ie, Wp = null, Ka = null, tT(), ul.discardPendingWarnings(), s;
    }
    function SR(e, t) {
      do {
        var a = $n;
        try {
          if (rm(), $E(), Rn(), BS.current = null, a === null || a.return === null) {
            Tr = Bp, Ip = t, $n = null;
            return;
          }
          if (We && a.mode & Jt && Nm(a, !0), Xe)
            if (Ea(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Di(a, i, xr);
            } else
              hs(a, t, xr);
          OT(e, a.return, a, t, xr), wR(a);
        } catch (u) {
          t = u, $n === a && a !== null ? (a = a.return, $n = a) : a = $n;
          continue;
        }
        return;
      } while (!0);
    }
    function ER() {
      var e = VS.current;
      return VS.current = _m, e === null ? _m : e;
    }
    function CR(e) {
      VS.current = e;
    }
    function u_() {
      YS = nr();
    }
    function qp(e) {
      Pm = xt(e, Pm);
    }
    function o_() {
      Tr === Yu && (Tr = Hm);
    }
    function e0() {
      (Tr === Yu || Tr === Hm || Tr === ic) && (Tr = $p), xa !== null && (bs(Pm) || bs(Yp)) && Wo(xa, xr);
    }
    function s_(e) {
      Tr !== $p && (Tr = ic), Wp === null ? Wp = [e] : Wp.push(e);
    }
    function c_() {
      return Tr === Yu;
    }
    function Km(e, t) {
      var a = Yt;
      Yt |= Gr;
      var i = ER();
      if (xa !== e || xr !== t) {
        if (ra) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, xr), u.clear()), eh(e, t);
        }
        Wu = Bd(), uc(e, t);
      }
      wu(t);
      do
        try {
          f_();
          break;
        } catch (s) {
          SR(e, s);
        }
      while (!0);
      if (rm(), Yt = a, CR(i), $n !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Uc(), xa = null, xr = ie, Tr;
    }
    function f_() {
      for (; $n !== null; )
        RR($n);
    }
    function d_(e, t) {
      var a = Yt;
      Yt |= Gr;
      var i = ER();
      if (xa !== e || xr !== t) {
        if (ra) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, xr), u.clear()), eh(e, t);
        }
        Wu = Bd(), Qp(), uc(e, t);
      }
      wu(t);
      do
        try {
          p_();
          break;
        } catch (s) {
          SR(e, s);
        }
      while (!0);
      return rm(), CR(i), Yt = a, $n !== null ? (Yv(), Yu) : (Uc(), xa = null, xr = ie, Tr);
    }
    function p_() {
      for (; $n !== null && !Cd(); )
        RR($n);
    }
    function RR(e) {
      var t = e.alternate;
      cn(e);
      var a;
      (e.mode & Jt) !== Ze ? (rS(e), a = t0(t, e, eu), Nm(e, !0)) : a = t0(t, e, eu), Rn(), e.memoizedProps = e.pendingProps, a === null ? wR(e) : $n = a, BS.current = null;
    }
    function wR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ds) === qe) {
          cn(t);
          var u = void 0;
          if ((t.mode & Jt) === Ze ? u = WC(a, t, eu) : (rS(t), u = WC(a, t, eu), Nm(t, !1)), Rn(), u !== null) {
            $n = u;
            return;
          }
        } else {
          var s = ob(a, t);
          if (s !== null) {
            s.flags &= Hv, $n = s;
            return;
          }
          if ((t.mode & Jt) !== Ze) {
            Nm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ds, i.subtreeFlags = qe, i.deletions = null;
          else {
            Tr = $S, $n = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          $n = v;
          return;
        }
        t = i, $n = t;
      } while (t !== null);
      Tr === Yu && (Tr = cR);
    }
    function oc(e, t, a) {
      var i = $a(), u = Kr.transition;
      try {
        Kr.transition = null, Xn(Fr), v_(e, t, a, i);
      } finally {
        Kr.transition = u, Xn(i);
      }
      return null;
    }
    function v_(e, t, a, i) {
      do
        Ku();
      while (Io !== null);
      if (T_(), (Yt & (Gr | Pi)) !== wr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (_d(s), u === null)
        return kd(), null;
      if (s === ie && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ie, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Xt;
      var f = xt(u.lanes, u.childLanes);
      Pd(e, f), e === xa && (xa = null, $n = null, xr = ie), ((u.subtreeFlags & qi) !== qe || (u.flags & qi) !== qe) && (lc || (lc = !0, KS = a, a0(Zi, function() {
        return Ku(), null;
      })));
      var p = (u.subtreeFlags & (Ml | Nl | Ll | qi)) !== qe, v = (u.flags & (Ml | Nl | Ll | qi)) !== qe;
      if (p || v) {
        var g = Kr.transition;
        Kr.transition = null;
        var C = $a();
        Xn(Fr);
        var D = Yt;
        Yt |= Pi, BS.current = null, pb(e, u), vC(), _b(e, u, s), bx(e.containerInfo), e.current = u, ms(s), kb(u, e, s), ys(), Rd(), Yt = D, Xn(C), Kr.transition = g;
      } else
        e.current = u, vC();
      var _ = lc;
      if (lc ? (lc = !1, Io = e, Kp = s) : (Qf = 0, Im = null), f = e.pendingLanes, f === ie && (Wf = null), _ || _R(e.current, !1), xd(u.stateNode, i), ra && e.memoizedUpdaters.clear(), Qb(), Ga(e, nr()), t !== null)
        for (var H = e.onRecoverableError, I = 0; I < t.length; I++) {
          var Z = t[I], Oe = Z.stack, tt = Z.digest;
          H(Z.value, {
            componentStack: Oe,
            digest: tt
          });
        }
      if (Bm) {
        Bm = !1;
        var Qe = WS;
        throw WS = null, Qe;
      }
      return ia(Kp, lt) && e.tag !== zo && Ku(), f = e.pendingLanes, ia(f, lt) ? (ST(), e === GS ? Gp++ : (Gp = 0, GS = e)) : Gp = 0, Ao(), kd(), null;
    }
    function Ku() {
      if (Io !== null) {
        var e = rh(Kp), t = Ns(Va, e), a = Kr.transition, i = $a();
        try {
          return Kr.transition = null, Xn(t), m_();
        } finally {
          Xn(i), Kr.transition = a;
        }
      }
      return !1;
    }
    function h_(e) {
      QS.push(e), lc || (lc = !0, a0(Zi, function() {
        return Ku(), null;
      }));
    }
    function m_() {
      if (Io === null)
        return !1;
      var e = KS;
      KS = null;
      var t = Io, a = Kp;
      if (Io = null, Kp = ie, (Yt & (Gr | Pi)) !== wr)
        throw new Error("Cannot flush passive effects while already rendering.");
      XS = !0, $m = !1, Ru(a);
      var i = Yt;
      Yt |= Pi, Ab(t.current), Mb(t, t.current, a, e);
      {
        var u = QS;
        QS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          yb(t, f);
        }
      }
      Md(), _R(t.current, !0), Yt = i, Ao(), $m ? t === Im ? Qf++ : (Qf = 0, Im = t) : Qf = 0, XS = !1, $m = !1, Td(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function xR(e) {
      return Wf !== null && Wf.has(e);
    }
    function y_(e) {
      Wf === null ? Wf = /* @__PURE__ */ new Set([e]) : Wf.add(e);
    }
    function g_(e) {
      Bm || (Bm = !0, WS = e);
    }
    var S_ = g_;
    function TR(e, t, a) {
      var i = rc(a, t), u = RC(e, i, lt), s = jo(e, u, lt), f = Ta();
      s !== null && (Ro(s, lt, f), Ga(s, f));
    }
    function wn(e, t, a) {
      if (cb(a), Jp(!1), e.tag === q) {
        TR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === q) {
          TR(i, e, a);
          return;
        } else if (i.tag === N) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !xR(s)) {
            var f = rc(a, e), p = CS(i, f, lt), v = jo(i, p, lt), g = Ta();
            v !== null && (Ro(v, lt, g), Ga(v, g));
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
      var u = Ta();
      af(e, a), D_(e), xa === e && Mu(xr, a) && (Tr === $p || Tr === Hm && Ou(xr) && nr() - YS < fR ? uc(e, ie) : Vm = xt(Vm, a)), Ga(e, u);
    }
    function bR(e, t) {
      t === Xt && (t = e_(e));
      var a = Ta(), i = Wa(e, t);
      i !== null && (Ro(i, t, a), Ga(i, a));
    }
    function C_(e) {
      var t = e.memoizedState, a = Xt;
      t !== null && (a = t.retryLane), bR(e, a);
    }
    function R_(e, t) {
      var a = Xt, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case zt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), bR(e, a);
    }
    function w_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Xb(e / 1960) * 1960;
    }
    function x_() {
      if (Gp > Zb)
        throw Gp = 0, GS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Qf > Jb && (Qf = 0, Im = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function T_() {
      ul.flushLegacyContextWarning(), ul.flushPendingUnsafeLifecycleWarnings();
    }
    function _R(e, t) {
      cn(e), Gm(e, Ol, Ib), t && Gm(e, bi, Yb), Gm(e, Ol, Bb), t && Gm(e, bi, $b), Rn();
    }
    function Gm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== qe ? i = i.child : ((i.flags & t) !== qe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Xm = null;
    function kR(e) {
      {
        if ((Yt & Gr) !== wr || !(e.mode & Ot))
          return;
        var t = e.tag;
        if (t !== oe && t !== q && t !== N && t !== Y && t !== Ce && t !== Ge && t !== He)
          return;
        var a = dt(e) || "ReactComponent";
        if (Xm !== null) {
          if (Xm.has(a))
            return;
          Xm.add(a);
        } else
          Xm = /* @__PURE__ */ new Set([a]);
        var i = vr;
        try {
          cn(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? cn(e) : Rn();
        }
      }
    }
    var t0;
    {
      var b_ = null;
      t0 = function(e, t, a) {
        var i = UR(b_, t);
        try {
          return VC(e, t, a);
        } catch (s) {
          if (F1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (rm(), $E(), QC(e, t), UR(t, i), t.mode & Jt && rS(t), Dl(null, VC, null, e, t, a), Gi()) {
            var u = fs();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var DR = !1, n0;
    n0 = /* @__PURE__ */ new Set();
    function __(e) {
      if (Si && !mT())
        switch (e.tag) {
          case Y:
          case Ce:
          case He: {
            var t = $n && dt($n) || "Unknown", a = t;
            if (!n0.has(a)) {
              n0.add(a);
              var i = dt(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case N: {
            DR || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), DR = !0);
            break;
          }
        }
    }
    function Zp(e, t) {
      if (ra) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Os(e, i, t);
        });
      }
    }
    var r0 = {};
    function a0(e, t) {
      {
        var a = hl.current;
        return a !== null ? (a.push(t), r0) : Ed(e, t);
      }
    }
    function OR(e) {
      if (e !== r0)
        return Vv(e);
    }
    function MR() {
      return hl.current !== null;
    }
    function k_(e) {
      {
        if (e.mode & Ot) {
          if (!oR())
            return;
        } else if (!Gb() || Yt !== wr || e.tag !== Y && e.tag !== Ce && e.tag !== He)
          return;
        if (hl.current === null) {
          var t = vr;
          try {
            cn(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, dt(e));
          } finally {
            t ? cn(e) : Rn();
          }
        }
      }
    }
    function D_(e) {
      e.tag !== zo && oR() && hl.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Jp(e) {
      vR = e;
    }
    var Vi = null, Kf = null, O_ = function(e) {
      Vi = e;
    };
    function Gf(e) {
      {
        if (Vi === null)
          return e;
        var t = Vi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function i0(e) {
      return Gf(e);
    }
    function l0(e) {
      {
        if (Vi === null)
          return e;
        var t = Vi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Gf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ae,
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
    function NR(e, t) {
      {
        if (Vi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case N: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Y: {
            (typeof i == "function" || s === pt) && (u = !0);
            break;
          }
          case Ce: {
            (s === ae || s === pt) && (u = !0);
            break;
          }
          case Ge:
          case He: {
            (s === Et || s === pt) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Vi(a);
          if (f !== void 0 && f === Vi(i))
            return !0;
        }
        return !1;
      }
    }
    function LR(e) {
      {
        if (Vi === null || typeof WeakSet != "function")
          return;
        Kf === null && (Kf = /* @__PURE__ */ new WeakSet()), Kf.add(e);
      }
    }
    var M_ = function(e, t) {
      {
        if (Vi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Ku(), Qu(function() {
          u0(e.current, i, a);
        });
      }
    }, N_ = function(e, t) {
      {
        if (e.context !== di)
          return;
        Ku(), Qu(function() {
          ev(t, e, null, null);
        });
      }
    };
    function u0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Y:
          case He:
          case N:
            v = p;
            break;
          case Ce:
            v = p.render;
            break;
        }
        if (Vi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var g = !1, C = !1;
        if (v !== null) {
          var D = Vi(v);
          D !== void 0 && (a.has(D) ? C = !0 : t.has(D) && (f === N ? C = !0 : g = !0));
        }
        if (Kf !== null && (Kf.has(e) || i !== null && Kf.has(i)) && (C = !0), C && (e._debugNeedsRemount = !0), C || g) {
          var _ = Wa(e, lt);
          _ !== null && br(_, e, lt, yn);
        }
        u !== null && !C && u0(u, t, a), s !== null && u0(s, t, a);
      }
    }
    var L_ = function(e, t) {
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
          case Y:
          case He:
          case N:
            p = f;
            break;
          case Ce:
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
            case P:
              t.add(i.stateNode);
              return;
            case ee:
              t.add(i.stateNode.containerInfo);
              return;
            case q:
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
        if (a.tag === P)
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
        var zR = Object.preventExtensions({});
      } catch {
        s0 = !0;
      }
    }
    function U_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = qe, this.subtreeFlags = qe, this.deletions = null, this.lanes = ie, this.childLanes = ie, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !s0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var pi = function(e, t, a, i) {
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
        return c0(e) ? N : Y;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ae)
          return Ce;
        if (t === Et)
          return Ge;
      }
      return oe;
    }
    function sc(e, t) {
      var a = e.alternate;
      a === null ? (a = pi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = qe, a.subtreeFlags = qe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Qn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case oe:
        case Y:
        case He:
          a.type = Gf(e.type);
          break;
        case N:
          a.type = i0(e.type);
          break;
        case Ce:
          a.type = l0(e.type);
          break;
      }
      return a;
    }
    function H_(e, t) {
      e.flags &= Qn | Dn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ie, e.lanes = t, e.child = null, e.subtreeFlags = qe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = qe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
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
      return e === Qh ? (i = Ot, t === !0 && (i |= pn, i |= en)) : i = Ze, ra && (i |= Jt), pi(q, null, null, i);
    }
    function f0(e, t, a, i, u, s) {
      var f = oe, p = e;
      if (typeof e == "function")
        c0(e) ? (f = N, p = i0(p)) : p = Gf(p);
      else if (typeof e == "string")
        f = P;
      else
        e: switch (e) {
          case hi:
            return Qo(a.children, u, s, t);
          case Za:
            f = X, u |= pn, (u & Ot) !== Ze && (u |= en);
            break;
          case mi:
            return V_(a, u, s, t);
          case ke:
            return B_(a, u, s, t);
          case Fe:
            return $_(a, u, s, t);
          case jn:
            return AR(a, u, s, t);
          case gn:
          case Nt:
          case Cn:
          case pr:
          case Dt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case yi:
                  f = de;
                  break e;
                case T:
                  f = fe;
                  break e;
                case ae:
                  f = Ce, p = l0(p);
                  break e;
                case Et:
                  f = Ge;
                  break e;
                case pt:
                  f = ct, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var g = i ? dt(i) : null;
              g && (v += `

Check the render method of \`` + g + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var C = pi(f, a, t, u);
      return C.elementType = e, C.type = p, C.lanes = s, C._debugOwner = i, C;
    }
    function d0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = f0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Qo(e, t, a, i) {
      var u = pi(G, e, i, t);
      return u.lanes = a, u;
    }
    function V_(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = pi(he, e, i, t | Jt);
      return u.elementType = mi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function B_(e, t, a, i) {
      var u = pi(Re, e, i, t);
      return u.elementType = ke, u.lanes = a, u;
    }
    function $_(e, t, a, i) {
      var u = pi(zt, e, i, t);
      return u.elementType = Fe, u.lanes = a, u;
    }
    function AR(e, t, a, i) {
      var u = pi(Se, e, i, t);
      u.elementType = jn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function p0(e, t, a) {
      var i = pi(ye, e, null, t);
      return i.lanes = a, i;
    }
    function I_() {
      var e = pi(P, null, null, Ze);
      return e.elementType = "DELETED", e;
    }
    function Y_(e) {
      var t = pi(rt, null, null, Ze);
      return t.stateNode = e, t;
    }
    function v0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = pi(ee, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function UR(e, t) {
      return e === null && (e = pi(oe, null, null, Ze)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function W_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Gy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Xt, this.eventTimes = Ds(ie), this.expirationTimes = Ds(yn), this.pendingLanes = ie, this.suspendedLanes = ie, this.pingedLanes = ie, this.expiredLanes = ie, this.mutableReadLanes = ie, this.finishedLanes = ie, this.entangledLanes = ie, this.entanglements = Ds(ie), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < xu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Qh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case zo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function jR(e, t, a, i, u, s, f, p, v, g) {
      var C = new W_(e, t, a, p, v), D = P_(t, s);
      C.current = D, D.stateNode = C;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        D.memoizedState = _;
      }
      return _g(D), C;
    }
    var h0 = "18.3.1";
    function Q_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return fr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: dr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var m0, y0;
    m0 = !1, y0 = {};
    function FR(e) {
      if (!e)
        return di;
      var t = mo(e), a = D1(t);
      if (t.tag === N) {
        var i = t.type;
        if (Ql(i))
          return fE(t, i, a);
      }
      return a;
    }
    function K_(e, t) {
      {
        var a = mo(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ta(a);
        if (u === null)
          return null;
        if (u.mode & pn) {
          var s = dt(a) || "Component";
          if (!y0[s]) {
            y0[s] = !0;
            var f = vr;
            try {
              cn(u), a.mode & pn ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? cn(f) : Rn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function HR(e, t, a, i, u, s, f, p) {
      var v = !1, g = null;
      return jR(e, t, v, g, a, i, u, s, f);
    }
    function PR(e, t, a, i, u, s, f, p, v, g) {
      var C = !0, D = jR(a, i, C, e, u, s, f, p, v);
      D.context = FR(null);
      var _ = D.current, H = Ta(), I = Yo(_), Z = $u(H, I);
      return Z.callback = t ?? null, jo(_, Z, I), t_(D, I, H), D;
    }
    function ev(e, t, a, i) {
      wd(t, e);
      var u = t.current, s = Ta(), f = Yo(u);
      Mn(f);
      var p = FR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Si && vr !== null && !m0 && (m0 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, dt(vr) || "Unknown"));
      var v = $u(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var g = jo(u, v, f);
      return g !== null && (br(g, u, f, s), om(g, u, f)), f;
    }
    function qm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case P:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function G_(e) {
      switch (e.tag) {
        case q: {
          var t = e.stateNode;
          if (uf(t)) {
            var a = Qv(t);
            i_(t, a);
          }
          break;
        }
        case Re: {
          Qu(function() {
            var u = Wa(e, lt);
            if (u !== null) {
              var s = Ta();
              br(u, e, lt, s);
            }
          });
          var i = lt;
          g0(e, i);
          break;
        }
      }
    }
    function VR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Zv(a.retryLane, t));
    }
    function g0(e, t) {
      VR(e, t);
      var a = e.alternate;
      a && VR(a, t);
    }
    function X_(e) {
      if (e.tag === Re) {
        var t = ws, a = Wa(e, t);
        if (a !== null) {
          var i = Ta();
          br(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function q_(e) {
      if (e.tag === Re) {
        var t = Yo(e), a = Wa(e, t);
        if (a !== null) {
          var i = Ta();
          br(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function BR(e) {
      var t = Tn(e);
      return t === null ? null : t.stateNode;
    }
    var $R = function(e) {
      return null;
    };
    function Z_(e) {
      return $R(e);
    }
    var IR = function(e) {
      return !1;
    };
    function J_(e) {
      return IR(e);
    }
    var YR = null, WR = null, QR = null, KR = null, GR = null, XR = null, qR = null, ZR = null, JR = null;
    {
      var ew = function(e, t, a) {
        var i = t[a], u = kt(e) ? e.slice() : _t({}, e);
        return a + 1 === t.length ? (kt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = ew(e[i], t, a + 1), u);
      }, tw = function(e, t) {
        return ew(e, t, 0);
      }, nw = function(e, t, a, i) {
        var u = t[i], s = kt(e) ? e.slice() : _t({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], kt(s) ? s.splice(u, 1) : delete s[u];
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
          B("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              B("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return nw(e, t, a, 0);
      }, aw = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = kt(e) ? e.slice() : _t({}, e);
        return s[u] = aw(e[u], t, a + 1, i), s;
      }, iw = function(e, t, a) {
        return aw(e, t, 0, a);
      }, S0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      YR = function(e, t, a, i) {
        var u = S0(e, t);
        if (u !== null) {
          var s = iw(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = _t({}, e.memoizedProps);
          var f = Wa(e, lt);
          f !== null && br(f, e, lt, yn);
        }
      }, WR = function(e, t, a) {
        var i = S0(e, t);
        if (i !== null) {
          var u = tw(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = _t({}, e.memoizedProps);
          var s = Wa(e, lt);
          s !== null && br(s, e, lt, yn);
        }
      }, QR = function(e, t, a, i) {
        var u = S0(e, t);
        if (u !== null) {
          var s = rw(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = _t({}, e.memoizedProps);
          var f = Wa(e, lt);
          f !== null && br(f, e, lt, yn);
        }
      }, KR = function(e, t, a) {
        e.pendingProps = iw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, lt);
        i !== null && br(i, e, lt, yn);
      }, GR = function(e, t) {
        e.pendingProps = tw(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Wa(e, lt);
        a !== null && br(a, e, lt, yn);
      }, XR = function(e, t, a) {
        e.pendingProps = rw(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, lt);
        i !== null && br(i, e, lt, yn);
      }, qR = function(e) {
        var t = Wa(e, lt);
        t !== null && br(t, e, lt, yn);
      }, ZR = function(e) {
        $R = e;
      }, JR = function(e) {
        IR = e;
      };
    }
    function ek(e) {
      var t = ta(e);
      return t === null ? null : t.stateNode;
    }
    function tk(e) {
      return null;
    }
    function nk() {
      return vr;
    }
    function rk(e) {
      var t = e.findFiberByHostInstance, a = E.ReactCurrentDispatcher;
      return So({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: YR,
        overrideHookStateDeletePath: WR,
        overrideHookStateRenamePath: QR,
        overrideProps: KR,
        overridePropsDeletePath: GR,
        overridePropsRenamePath: XR,
        setErrorHandler: ZR,
        setSuspenseHandler: JR,
        scheduleUpdate: qR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ek,
        findFiberByHostInstance: t || tk,
        // React Refresh
        findHostInstancesForRefresh: L_,
        scheduleRefresh: M_,
        scheduleRoot: N_,
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
        if (a.nodeType !== Yn) {
          var i = BR(t.current);
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
        gR() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Qu(function() {
          ev(null, e, null, null);
        }), lE(t);
      }
    };
    function ak(e, t) {
      if (!Jm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      uw(e);
      var a = !1, i = !1, u = "", s = lw;
      t != null && (t.hydrate ? B("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === zr && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = HR(e, Qh, null, a, i, u, s);
      Ph(f.current, e);
      var p = e.nodeType === Yn ? e.parentNode : e;
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
      var g = PR(t, null, e, Qh, i, s, f, p, v);
      if (Ph(g.current, e), lp(e), u)
        for (var C = 0; C < u.length; C++) {
          var D = u[C];
          cT(g, D);
        }
      return new Zm(g);
    }
    function Jm(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === Ki || e.nodeType === od));
    }
    function tv(e) {
      return !!(e && (e.nodeType === Zr || e.nodeType === Ki || e.nodeType === od || e.nodeType === Yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function uw(e) {
      e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), yp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var uk = E.ReactCurrentOwner, ow;
    ow = function(e) {
      if (e._reactRootContainer && e.nodeType !== Yn) {
        var t = BR(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = C0(e), u = !!(i && No(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Zr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function C0(e) {
      return e ? e.nodeType === Ki ? e.documentElement : e.firstChild : null;
    }
    function sw() {
    }
    function ok(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = qm(f);
            s.call(_);
          };
        }
        var f = PR(
          t,
          i,
          e,
          zo,
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
        var p = e.nodeType === Yn ? e.parentNode : e;
        return lp(p), Qu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var g = i;
          i = function() {
            var _ = qm(C);
            g.call(_);
          };
        }
        var C = HR(
          e,
          zo,
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
        e._reactRootContainer = C, Ph(C.current, e);
        var D = e.nodeType === Yn ? e.parentNode : e;
        return lp(D), Qu(function() {
          ev(t, C, a, i);
        }), C;
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
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Qt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Zr ? e : K_(e, "findDOMNode");
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
          var a = C0(e), i = a && !No(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Qu(function() {
          ey(null, null, e, !1, function() {
            e._reactRootContainer = null, lE(e);
          });
        }), !0;
      } else {
        {
          var u = C0(e), s = !!(u && No(u)), f = e.nodeType === Zr && tv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Mr(G_), wo(X_), ah(q_), zs($a), $d(th), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), wc(mx), yy(ZS, l_, Qu);
    function hk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Jm(t))
        throw new Error("Target container is not a DOM element.");
      return Q_(e, t, null, a);
    }
    function mk(e, t, a, i) {
      return pk(e, t, a, i);
    }
    var R0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [No, bf, Vh, fo, xc, ZS]
    };
    function yk(e, t) {
      return R0.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ak(e, t);
    }
    function gk(e, t, a) {
      return R0.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lk(e, t, a);
    }
    function Sk(e) {
      return gR() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Qu(e);
    }
    var Ek = rk({
      findFiberByHostInstance: Ks,
      bundleType: 1,
      version: h0,
      rendererPackageName: "react-dom"
    });
    if (!Ek && _n && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var dw = window.location.protocol;
      /^(https?|file):$/.test(dw) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (dw === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R0, qa.createPortal = hk, qa.createRoot = yk, qa.findDOMNode = ck, qa.flushSync = Sk, qa.hydrate = fk, qa.hydrateRoot = gk, qa.render = dk, qa.unmountComponentAtNode = vk, qa.unstable_batchedUpdates = ZS, qa.unstable_renderSubtreeIntoContainer = mk, qa.version = h0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), qa;
}
function Dw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dw);
    } catch (S) {
      console.error(S);
    }
  }
}
process.env.NODE_ENV === "production" ? (Dw(), _0.exports = Mk()) : _0.exports = Nk();
var Lk = _0.exports, k0, ny = Lk;
if (process.env.NODE_ENV === "production")
  k0 = ny.createRoot, ny.hydrateRoot;
else {
  var Rw = ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  k0 = function(S, R) {
    Rw.usingClientEntryPoint = !0;
    try {
      return ny.createRoot(S, R);
    } finally {
      Rw.usingClientEntryPoint = !1;
    }
  };
}
function zk(S, R) {
  var E, j = 1;
  S == null && (S = 0), R == null && (R = 0);
  function z() {
    var B, y = E.length, Q, Y = 0, N = 0;
    for (B = 0; B < y; ++B)
      Q = E[B], Y += Q.x, N += Q.y;
    for (Y = (Y / y - S) * j, N = (N / y - R) * j, B = 0; B < y; ++B)
      Q = E[B], Q.x -= Y, Q.y -= N;
  }
  return z.initialize = function(B) {
    E = B;
  }, z.x = function(B) {
    return arguments.length ? (S = +B, z) : S;
  }, z.y = function(B) {
    return arguments.length ? (R = +B, z) : R;
  }, z.strength = function(B) {
    return arguments.length ? (j = +B, z) : j;
  }, z;
}
function Ak(S) {
  const R = +this._x.call(null, S), E = +this._y.call(null, S);
  return Ow(this.cover(R, E), R, E, S);
}
function Ow(S, R, E, j) {
  if (isNaN(R) || isNaN(E)) return S;
  var z, B = S._root, y = { data: j }, Q = S._x0, Y = S._y0, N = S._x1, oe = S._y1, q, ee, P, ye, G, X, fe, de;
  if (!B) return S._root = y, S;
  for (; B.length; )
    if ((G = R >= (q = (Q + N) / 2)) ? Q = q : N = q, (X = E >= (ee = (Y + oe) / 2)) ? Y = ee : oe = ee, z = B, !(B = B[fe = X << 1 | G])) return z[fe] = y, S;
  if (P = +S._x.call(null, B.data), ye = +S._y.call(null, B.data), R === P && E === ye) return y.next = B, z ? z[fe] = y : S._root = y, S;
  do
    z = z ? z[fe] = new Array(4) : S._root = new Array(4), (G = R >= (q = (Q + N) / 2)) ? Q = q : N = q, (X = E >= (ee = (Y + oe) / 2)) ? Y = ee : oe = ee;
  while ((fe = X << 1 | G) === (de = (ye >= ee) << 1 | P >= q));
  return z[de] = B, z[fe] = y, S;
}
function Uk(S) {
  var R, E, j = S.length, z, B, y = new Array(j), Q = new Array(j), Y = 1 / 0, N = 1 / 0, oe = -1 / 0, q = -1 / 0;
  for (E = 0; E < j; ++E)
    isNaN(z = +this._x.call(null, R = S[E])) || isNaN(B = +this._y.call(null, R)) || (y[E] = z, Q[E] = B, z < Y && (Y = z), z > oe && (oe = z), B < N && (N = B), B > q && (q = B));
  if (Y > oe || N > q) return this;
  for (this.cover(Y, N).cover(oe, q), E = 0; E < j; ++E)
    Ow(this, y[E], Q[E], S[E]);
  return this;
}
function jk(S, R) {
  if (isNaN(S = +S) || isNaN(R = +R)) return this;
  var E = this._x0, j = this._y0, z = this._x1, B = this._y1;
  if (isNaN(E))
    z = (E = Math.floor(S)) + 1, B = (j = Math.floor(R)) + 1;
  else {
    for (var y = z - E || 1, Q = this._root, Y, N; E > S || S >= z || j > R || R >= B; )
      switch (N = (R < j) << 1 | S < E, Y = new Array(4), Y[N] = Q, Q = Y, y *= 2, N) {
        case 0:
          z = E + y, B = j + y;
          break;
        case 1:
          E = z - y, B = j + y;
          break;
        case 2:
          z = E + y, j = B - y;
          break;
        case 3:
          E = z - y, j = B - y;
          break;
      }
    this._root && this._root.length && (this._root = Q);
  }
  return this._x0 = E, this._y0 = j, this._x1 = z, this._y1 = B, this;
}
function Fk() {
  var S = [];
  return this.visit(function(R) {
    if (!R.length) do
      S.push(R.data);
    while (R = R.next);
  }), S;
}
function Hk(S) {
  return arguments.length ? this.cover(+S[0][0], +S[0][1]).cover(+S[1][0], +S[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function ka(S, R, E, j, z) {
  this.node = S, this.x0 = R, this.y0 = E, this.x1 = j, this.y1 = z;
}
function Pk(S, R, E) {
  var j, z = this._x0, B = this._y0, y, Q, Y, N, oe = this._x1, q = this._y1, ee = [], P = this._root, ye, G;
  for (P && ee.push(new ka(P, z, B, oe, q)), E == null ? E = 1 / 0 : (z = S - E, B = R - E, oe = S + E, q = R + E, E *= E); ye = ee.pop(); )
    if (!(!(P = ye.node) || (y = ye.x0) > oe || (Q = ye.y0) > q || (Y = ye.x1) < z || (N = ye.y1) < B))
      if (P.length) {
        var X = (y + Y) / 2, fe = (Q + N) / 2;
        ee.push(
          new ka(P[3], X, fe, Y, N),
          new ka(P[2], y, fe, X, N),
          new ka(P[1], X, Q, Y, fe),
          new ka(P[0], y, Q, X, fe)
        ), (G = (R >= fe) << 1 | S >= X) && (ye = ee[ee.length - 1], ee[ee.length - 1] = ee[ee.length - 1 - G], ee[ee.length - 1 - G] = ye);
      } else {
        var de = S - +this._x.call(null, P.data), Ce = R - +this._y.call(null, P.data), he = de * de + Ce * Ce;
        if (he < E) {
          var Re = Math.sqrt(E = he);
          z = S - Re, B = R - Re, oe = S + Re, q = R + Re, j = P.data;
        }
      }
  return j;
}
function Vk(S) {
  if (isNaN(oe = +this._x.call(null, S)) || isNaN(q = +this._y.call(null, S))) return this;
  var R, E = this._root, j, z, B, y = this._x0, Q = this._y0, Y = this._x1, N = this._y1, oe, q, ee, P, ye, G, X, fe;
  if (!E) return this;
  if (E.length) for (; ; ) {
    if ((ye = oe >= (ee = (y + Y) / 2)) ? y = ee : Y = ee, (G = q >= (P = (Q + N) / 2)) ? Q = P : N = P, R = E, !(E = E[X = G << 1 | ye])) return this;
    if (!E.length) break;
    (R[X + 1 & 3] || R[X + 2 & 3] || R[X + 3 & 3]) && (j = R, fe = X);
  }
  for (; E.data !== S; ) if (z = E, !(E = E.next)) return this;
  return (B = E.next) && delete E.next, z ? (B ? z.next = B : delete z.next, this) : R ? (B ? R[X] = B : delete R[X], (E = R[0] || R[1] || R[2] || R[3]) && E === (R[3] || R[2] || R[1] || R[0]) && !E.length && (j ? j[fe] = E : this._root = E), this) : (this._root = B, this);
}
function Bk(S) {
  for (var R = 0, E = S.length; R < E; ++R) this.remove(S[R]);
  return this;
}
function $k() {
  return this._root;
}
function Ik() {
  var S = 0;
  return this.visit(function(R) {
    if (!R.length) do
      ++S;
    while (R = R.next);
  }), S;
}
function Yk(S) {
  var R = [], E, j = this._root, z, B, y, Q, Y;
  for (j && R.push(new ka(j, this._x0, this._y0, this._x1, this._y1)); E = R.pop(); )
    if (!S(j = E.node, B = E.x0, y = E.y0, Q = E.x1, Y = E.y1) && j.length) {
      var N = (B + Q) / 2, oe = (y + Y) / 2;
      (z = j[3]) && R.push(new ka(z, N, oe, Q, Y)), (z = j[2]) && R.push(new ka(z, B, oe, N, Y)), (z = j[1]) && R.push(new ka(z, N, y, Q, oe)), (z = j[0]) && R.push(new ka(z, B, y, N, oe));
    }
  return this;
}
function Wk(S) {
  var R = [], E = [], j;
  for (this._root && R.push(new ka(this._root, this._x0, this._y0, this._x1, this._y1)); j = R.pop(); ) {
    var z = j.node;
    if (z.length) {
      var B, y = j.x0, Q = j.y0, Y = j.x1, N = j.y1, oe = (y + Y) / 2, q = (Q + N) / 2;
      (B = z[0]) && R.push(new ka(B, y, Q, oe, q)), (B = z[1]) && R.push(new ka(B, oe, Q, Y, q)), (B = z[2]) && R.push(new ka(B, y, q, oe, N)), (B = z[3]) && R.push(new ka(B, oe, q, Y, N));
    }
    E.push(j);
  }
  for (; j = E.pop(); )
    S(j.node, j.x0, j.y0, j.x1, j.y1);
  return this;
}
function Qk(S) {
  return S[0];
}
function Kk(S) {
  return arguments.length ? (this._x = S, this) : this._x;
}
function Gk(S) {
  return S[1];
}
function Xk(S) {
  return arguments.length ? (this._y = S, this) : this._y;
}
function M0(S, R, E) {
  var j = new N0(R ?? Qk, E ?? Gk, NaN, NaN, NaN, NaN);
  return S == null ? j : j.addAll(S);
}
function N0(S, R, E, j, z, B) {
  this._x = S, this._y = R, this._x0 = E, this._y0 = j, this._x1 = z, this._y1 = B, this._root = void 0;
}
function ww(S) {
  for (var R = { data: S.data }, E = R; S = S.next; ) E = E.next = { data: S.data };
  return R;
}
var Oa = M0.prototype = N0.prototype;
Oa.copy = function() {
  var S = new N0(this._x, this._y, this._x0, this._y0, this._x1, this._y1), R = this._root, E, j;
  if (!R) return S;
  if (!R.length) return S._root = ww(R), S;
  for (E = [{ source: R, target: S._root = new Array(4) }]; R = E.pop(); )
    for (var z = 0; z < 4; ++z)
      (j = R.source[z]) && (j.length ? E.push({ source: j, target: R.target[z] = new Array(4) }) : R.target[z] = ww(j));
  return S;
};
Oa.add = Ak;
Oa.addAll = Uk;
Oa.cover = jk;
Oa.data = Fk;
Oa.extent = Hk;
Oa.find = Pk;
Oa.remove = Vk;
Oa.removeAll = Bk;
Oa.root = $k;
Oa.size = Ik;
Oa.visit = Yk;
Oa.visitAfter = Wk;
Oa.x = Kk;
Oa.y = Xk;
function Da(S) {
  return function() {
    return S;
  };
}
function Ko(S) {
  return (S() - 0.5) * 1e-6;
}
function qk(S) {
  return S.x + S.vx;
}
function Zk(S) {
  return S.y + S.vy;
}
function Jk(S) {
  var R, E, j, z = 1, B = 1;
  typeof S != "function" && (S = Da(S == null ? 1 : +S));
  function y() {
    for (var N, oe = R.length, q, ee, P, ye, G, X, fe = 0; fe < B; ++fe)
      for (q = M0(R, qk, Zk).visitAfter(Q), N = 0; N < oe; ++N)
        ee = R[N], G = E[ee.index], X = G * G, P = ee.x + ee.vx, ye = ee.y + ee.vy, q.visit(de);
    function de(Ce, he, Re, Ge, He) {
      var ct = Ce.data, mt = Ce.r, rt = G + mt;
      if (ct) {
        if (ct.index > ee.index) {
          var zt = P - ct.x - ct.vx, yt = ye - ct.y - ct.vy, Se = zt * zt + yt * yt;
          Se < rt * rt && (zt === 0 && (zt = Ko(j), Se += zt * zt), yt === 0 && (yt = Ko(j), Se += yt * yt), Se = (rt - (Se = Math.sqrt(Se))) / Se * z, ee.vx += (zt *= Se) * (rt = (mt *= mt) / (X + mt)), ee.vy += (yt *= Se) * rt, ct.vx -= zt * (rt = 1 - rt), ct.vy -= yt * rt);
        }
        return;
      }
      return he > P + rt || Ge < P - rt || Re > ye + rt || He < ye - rt;
    }
  }
  function Q(N) {
    if (N.data) return N.r = E[N.data.index];
    for (var oe = N.r = 0; oe < 4; ++oe)
      N[oe] && N[oe].r > N.r && (N.r = N[oe].r);
  }
  function Y() {
    if (R) {
      var N, oe = R.length, q;
      for (E = new Array(oe), N = 0; N < oe; ++N) q = R[N], E[q.index] = +S(q, N, R);
    }
  }
  return y.initialize = function(N, oe) {
    R = N, j = oe, Y();
  }, y.iterations = function(N) {
    return arguments.length ? (B = +N, y) : B;
  }, y.strength = function(N) {
    return arguments.length ? (z = +N, y) : z;
  }, y.radius = function(N) {
    return arguments.length ? (S = typeof N == "function" ? N : Da(+N), Y(), y) : S;
  }, y;
}
function eD(S) {
  return S.index;
}
function xw(S, R) {
  var E = S.get(R);
  if (!E) throw new Error("node not found: " + R);
  return E;
}
function tD(S) {
  var R = eD, E = q, j, z = Da(30), B, y, Q, Y, N, oe = 1;
  S == null && (S = []);
  function q(X) {
    return 1 / Math.min(Q[X.source.index], Q[X.target.index]);
  }
  function ee(X) {
    for (var fe = 0, de = S.length; fe < oe; ++fe)
      for (var Ce = 0, he, Re, Ge, He, ct, mt, rt; Ce < de; ++Ce)
        he = S[Ce], Re = he.source, Ge = he.target, He = Ge.x + Ge.vx - Re.x - Re.vx || Ko(N), ct = Ge.y + Ge.vy - Re.y - Re.vy || Ko(N), mt = Math.sqrt(He * He + ct * ct), mt = (mt - B[Ce]) / mt * X * j[Ce], He *= mt, ct *= mt, Ge.vx -= He * (rt = Y[Ce]), Ge.vy -= ct * rt, Re.vx += He * (rt = 1 - rt), Re.vy += ct * rt;
  }
  function P() {
    if (y) {
      var X, fe = y.length, de = S.length, Ce = new Map(y.map((Re, Ge) => [R(Re, Ge, y), Re])), he;
      for (X = 0, Q = new Array(fe); X < de; ++X)
        he = S[X], he.index = X, typeof he.source != "object" && (he.source = xw(Ce, he.source)), typeof he.target != "object" && (he.target = xw(Ce, he.target)), Q[he.source.index] = (Q[he.source.index] || 0) + 1, Q[he.target.index] = (Q[he.target.index] || 0) + 1;
      for (X = 0, Y = new Array(de); X < de; ++X)
        he = S[X], Y[X] = Q[he.source.index] / (Q[he.source.index] + Q[he.target.index]);
      j = new Array(de), ye(), B = new Array(de), G();
    }
  }
  function ye() {
    if (y)
      for (var X = 0, fe = S.length; X < fe; ++X)
        j[X] = +E(S[X], X, S);
  }
  function G() {
    if (y)
      for (var X = 0, fe = S.length; X < fe; ++X)
        B[X] = +z(S[X], X, S);
  }
  return ee.initialize = function(X, fe) {
    y = X, N = fe, P();
  }, ee.links = function(X) {
    return arguments.length ? (S = X, P(), ee) : S;
  }, ee.id = function(X) {
    return arguments.length ? (R = X, ee) : R;
  }, ee.iterations = function(X) {
    return arguments.length ? (oe = +X, ee) : oe;
  }, ee.strength = function(X) {
    return arguments.length ? (E = typeof X == "function" ? X : Da(+X), ye(), ee) : E;
  }, ee.distance = function(X) {
    return arguments.length ? (z = typeof X == "function" ? X : Da(+X), G(), ee) : z;
  }, ee;
}
var nD = { value: () => {
} };
function Mw() {
  for (var S = 0, R = arguments.length, E = {}, j; S < R; ++S) {
    if (!(j = arguments[S] + "") || j in E || /[\s.]/.test(j)) throw new Error("illegal type: " + j);
    E[j] = [];
  }
  return new ry(E);
}
function ry(S) {
  this._ = S;
}
function rD(S, R) {
  return S.trim().split(/^|\s+/).map(function(E) {
    var j = "", z = E.indexOf(".");
    if (z >= 0 && (j = E.slice(z + 1), E = E.slice(0, z)), E && !R.hasOwnProperty(E)) throw new Error("unknown type: " + E);
    return { type: E, name: j };
  });
}
ry.prototype = Mw.prototype = {
  constructor: ry,
  on: function(S, R) {
    var E = this._, j = rD(S + "", E), z, B = -1, y = j.length;
    if (arguments.length < 2) {
      for (; ++B < y; ) if ((z = (S = j[B]).type) && (z = aD(E[z], S.name))) return z;
      return;
    }
    if (R != null && typeof R != "function") throw new Error("invalid callback: " + R);
    for (; ++B < y; )
      if (z = (S = j[B]).type) E[z] = Tw(E[z], S.name, R);
      else if (R == null) for (z in E) E[z] = Tw(E[z], S.name, null);
    return this;
  },
  copy: function() {
    var S = {}, R = this._;
    for (var E in R) S[E] = R[E].slice();
    return new ry(S);
  },
  call: function(S, R) {
    if ((z = arguments.length - 2) > 0) for (var E = new Array(z), j = 0, z, B; j < z; ++j) E[j] = arguments[j + 2];
    if (!this._.hasOwnProperty(S)) throw new Error("unknown type: " + S);
    for (B = this._[S], j = 0, z = B.length; j < z; ++j) B[j].value.apply(R, E);
  },
  apply: function(S, R, E) {
    if (!this._.hasOwnProperty(S)) throw new Error("unknown type: " + S);
    for (var j = this._[S], z = 0, B = j.length; z < B; ++z) j[z].value.apply(R, E);
  }
};
function aD(S, R) {
  for (var E = 0, j = S.length, z; E < j; ++E)
    if ((z = S[E]).name === R)
      return z.value;
}
function Tw(S, R, E) {
  for (var j = 0, z = S.length; j < z; ++j)
    if (S[j].name === R) {
      S[j] = nD, S = S.slice(0, j).concat(S.slice(j + 1));
      break;
    }
  return E != null && S.push({ name: R, value: E }), S;
}
var qf = 0, uv = 0, iv = 0, Nw = 1e3, ay, ov, iy = 0, cc = 0, ly = 0, sv = typeof performance == "object" && performance.now ? performance : Date, Lw = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(S) {
  setTimeout(S, 17);
};
function zw() {
  return cc || (Lw(iD), cc = sv.now() + ly);
}
function iD() {
  cc = 0;
}
function D0() {
  this._call = this._time = this._next = null;
}
D0.prototype = Aw.prototype = {
  constructor: D0,
  restart: function(S, R, E) {
    if (typeof S != "function") throw new TypeError("callback is not a function");
    E = (E == null ? zw() : +E) + (R == null ? 0 : +R), !this._next && ov !== this && (ov ? ov._next = this : ay = this, ov = this), this._call = S, this._time = E, O0();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, O0());
  }
};
function Aw(S, R, E) {
  var j = new D0();
  return j.restart(S, R, E), j;
}
function lD() {
  zw(), ++qf;
  for (var S = ay, R; S; )
    (R = cc - S._time) >= 0 && S._call.call(void 0, R), S = S._next;
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
  var S = sv.now(), R = S - iy;
  R > Nw && (ly -= R, iy = S);
}
function oD() {
  for (var S, R = ay, E, j = 1 / 0; R; )
    R._call ? (j > R._time && (j = R._time), S = R, R = R._next) : (E = R._next, R._next = null, R = S ? S._next = E : ay = E);
  ov = S, O0(j);
}
function O0(S) {
  if (!qf) {
    uv && (uv = clearTimeout(uv));
    var R = S - cc;
    R > 24 ? (S < 1 / 0 && (uv = setTimeout(bw, S - sv.now() - ly)), iv && (iv = clearInterval(iv))) : (iv || (iy = sv.now(), iv = setInterval(uD, Nw)), qf = 1, Lw(bw));
  }
}
const sD = 1664525, cD = 1013904223, _w = 4294967296;
function fD() {
  let S = 1;
  return () => (S = (sD * S + cD) % _w) / _w;
}
function dD(S) {
  return S.x;
}
function pD(S) {
  return S.y;
}
var vD = 10, hD = Math.PI * (3 - Math.sqrt(5));
function mD(S) {
  var R, E = 1, j = 1e-3, z = 1 - Math.pow(j, 1 / 300), B = 0, y = 0.6, Q = /* @__PURE__ */ new Map(), Y = Aw(q), N = Mw("tick", "end"), oe = fD();
  S == null && (S = []);
  function q() {
    ee(), N.call("tick", R), E < j && (Y.stop(), N.call("end", R));
  }
  function ee(G) {
    var X, fe = S.length, de;
    G === void 0 && (G = 1);
    for (var Ce = 0; Ce < G; ++Ce)
      for (E += (B - E) * z, Q.forEach(function(he) {
        he(E);
      }), X = 0; X < fe; ++X)
        de = S[X], de.fx == null ? de.x += de.vx *= y : (de.x = de.fx, de.vx = 0), de.fy == null ? de.y += de.vy *= y : (de.y = de.fy, de.vy = 0);
    return R;
  }
  function P() {
    for (var G = 0, X = S.length, fe; G < X; ++G) {
      if (fe = S[G], fe.index = G, fe.fx != null && (fe.x = fe.fx), fe.fy != null && (fe.y = fe.fy), isNaN(fe.x) || isNaN(fe.y)) {
        var de = vD * Math.sqrt(0.5 + G), Ce = G * hD;
        fe.x = de * Math.cos(Ce), fe.y = de * Math.sin(Ce);
      }
      (isNaN(fe.vx) || isNaN(fe.vy)) && (fe.vx = fe.vy = 0);
    }
  }
  function ye(G) {
    return G.initialize && G.initialize(S, oe), G;
  }
  return P(), R = {
    tick: ee,
    restart: function() {
      return Y.restart(q), R;
    },
    stop: function() {
      return Y.stop(), R;
    },
    nodes: function(G) {
      return arguments.length ? (S = G, P(), Q.forEach(ye), R) : S;
    },
    alpha: function(G) {
      return arguments.length ? (E = +G, R) : E;
    },
    alphaMin: function(G) {
      return arguments.length ? (j = +G, R) : j;
    },
    alphaDecay: function(G) {
      return arguments.length ? (z = +G, R) : +z;
    },
    alphaTarget: function(G) {
      return arguments.length ? (B = +G, R) : B;
    },
    velocityDecay: function(G) {
      return arguments.length ? (y = 1 - G, R) : 1 - y;
    },
    randomSource: function(G) {
      return arguments.length ? (oe = G, Q.forEach(ye), R) : oe;
    },
    force: function(G, X) {
      return arguments.length > 1 ? (X == null ? Q.delete(G) : Q.set(G, ye(X)), R) : Q.get(G);
    },
    find: function(G, X, fe) {
      var de = 0, Ce = S.length, he, Re, Ge, He, ct;
      for (fe == null ? fe = 1 / 0 : fe *= fe, de = 0; de < Ce; ++de)
        He = S[de], he = G - He.x, Re = X - He.y, Ge = he * he + Re * Re, Ge < fe && (ct = He, fe = Ge);
      return ct;
    },
    on: function(G, X) {
      return arguments.length > 1 ? (N.on(G, X), R) : N.on(G);
    }
  };
}
function yD() {
  var S, R, E, j, z = Da(-30), B, y = 1, Q = 1 / 0, Y = 0.81;
  function N(P) {
    var ye, G = S.length, X = M0(S, dD, pD).visitAfter(q);
    for (j = P, ye = 0; ye < G; ++ye) R = S[ye], X.visit(ee);
  }
  function oe() {
    if (S) {
      var P, ye = S.length, G;
      for (B = new Array(ye), P = 0; P < ye; ++P) G = S[P], B[G.index] = +z(G, P, S);
    }
  }
  function q(P) {
    var ye = 0, G, X, fe = 0, de, Ce, he;
    if (P.length) {
      for (de = Ce = he = 0; he < 4; ++he)
        (G = P[he]) && (X = Math.abs(G.value)) && (ye += G.value, fe += X, de += X * G.x, Ce += X * G.y);
      P.x = de / fe, P.y = Ce / fe;
    } else {
      G = P, G.x = G.data.x, G.y = G.data.y;
      do
        ye += B[G.data.index];
      while (G = G.next);
    }
    P.value = ye;
  }
  function ee(P, ye, G, X) {
    if (!P.value) return !0;
    var fe = P.x - R.x, de = P.y - R.y, Ce = X - ye, he = fe * fe + de * de;
    if (Ce * Ce / Y < he)
      return he < Q && (fe === 0 && (fe = Ko(E), he += fe * fe), de === 0 && (de = Ko(E), he += de * de), he < y && (he = Math.sqrt(y * he)), R.vx += fe * P.value * j / he, R.vy += de * P.value * j / he), !0;
    if (P.length || he >= Q) return;
    (P.data !== R || P.next) && (fe === 0 && (fe = Ko(E), he += fe * fe), de === 0 && (de = Ko(E), he += de * de), he < y && (he = Math.sqrt(y * he)));
    do
      P.data !== R && (Ce = B[P.data.index] * j / he, R.vx += fe * Ce, R.vy += de * Ce);
    while (P = P.next);
  }
  return N.initialize = function(P, ye) {
    S = P, E = ye, oe();
  }, N.strength = function(P) {
    return arguments.length ? (z = typeof P == "function" ? P : Da(+P), oe(), N) : z;
  }, N.distanceMin = function(P) {
    return arguments.length ? (y = P * P, N) : Math.sqrt(y);
  }, N.distanceMax = function(P) {
    return arguments.length ? (Q = P * P, N) : Math.sqrt(Q);
  }, N.theta = function(P) {
    return arguments.length ? (Y = P * P, N) : Math.sqrt(Y);
  }, N;
}
function gD(S) {
  var R = Da(0.1), E, j, z;
  typeof S != "function" && (S = Da(S == null ? 0 : +S));
  function B(Q) {
    for (var Y = 0, N = E.length, oe; Y < N; ++Y)
      oe = E[Y], oe.vx += (z[Y] - oe.x) * j[Y] * Q;
  }
  function y() {
    if (E) {
      var Q, Y = E.length;
      for (j = new Array(Y), z = new Array(Y), Q = 0; Q < Y; ++Q)
        j[Q] = isNaN(z[Q] = +S(E[Q], Q, E)) ? 0 : +R(E[Q], Q, E);
    }
  }
  return B.initialize = function(Q) {
    E = Q, y();
  }, B.strength = function(Q) {
    return arguments.length ? (R = typeof Q == "function" ? Q : Da(+Q), y(), B) : R;
  }, B.x = function(Q) {
    return arguments.length ? (S = typeof Q == "function" ? Q : Da(+Q), y(), B) : S;
  }, B;
}
function SD(S) {
  var R = Da(0.1), E, j, z;
  typeof S != "function" && (S = Da(S == null ? 0 : +S));
  function B(Q) {
    for (var Y = 0, N = E.length, oe; Y < N; ++Y)
      oe = E[Y], oe.vy += (z[Y] - oe.y) * j[Y] * Q;
  }
  function y() {
    if (E) {
      var Q, Y = E.length;
      for (j = new Array(Y), z = new Array(Y), Q = 0; Q < Y; ++Q)
        j[Q] = isNaN(z[Q] = +S(E[Q], Q, E)) ? 0 : +R(E[Q], Q, E);
    }
  }
  return B.initialize = function(Q) {
    E = Q, y();
  }, B.strength = function(Q) {
    return arguments.length ? (R = typeof Q == "function" ? Q : Da(+Q), y(), B) : R;
  }, B.y = function(Q) {
    return arguments.length ? (S = typeof Q == "function" ? Q : Da(+Q), y(), B) : S;
  }, B;
}
function ED() {
  var St, wt, qt, _n, ir, xn, In, Ln, zn, fr, va, _r, Un;
  const [S, R] = Ut.useState(""), [E, j] = Ut.useState(!1), [z, B] = Ut.useState(null), [y, Q] = Ut.useState(null), Y = Ut.useRef(null), [N, oe] = Ut.useState(() => {
    const M = document.getElementById("network-container");
    return Number((M == null ? void 0 : M.dataset.threshold) || 0.1);
  });
  Ut.useEffect(() => {
    const M = document.getElementById("network-container");
    if (Y.current = M, !M) return;
    const re = (Me) => Array.isArray(Me) ? Me : Array.isArray(Me == null ? void 0 : Me.nodes) ? Me.nodes : Me && typeof Me == "object" ? Object.values(Me) : [];
    let me = new AbortController();
    const be = async () => {
      try {
        const Me = M.getAttribute("data-network") || "[]", Je = JSON.parse(Me);
        if (console.log("RAW:", Me), console.log("ORG IDS:", Je), Q(Je), !Array.isArray(Je) || !Je.length) {
          B({});
          return;
        }
        const bt = {};
        await Promise.all(
          Je.map(async (Ht) => {
            const W = `/static/network/repeat_network_db_${Ht}.json`;
            console.log("Loading:", W);
            const Ie = `${W.includes("?") ? "&" : "?"}_=${Date.now()}`, ft = await fetch(W + Ie, {
              credentials: "same-origin",
              cache: "no-store",
              signal: me.signal
            });
            if (!ft.ok)
              throw new Error(
                `Failed to load ${W}: ${ft.status} ${ft.statusText}`
              );
            const Pt = await ft.json();
            bt[Ht] = re(Pt);
          })
        ), console.log("LOADED:", bt), B(bt);
      } catch (Me) {
        Me.name !== "AbortError" && console.error("Error fetching network data:", Me);
      }
    };
    be();
    const _e = () => {
      me.abort(), me = new AbortController(), be();
    };
    return M.addEventListener("network-settings-change", _e), () => {
      me.abort(), M.removeEventListener("network-settings-change", _e);
    };
  }, []);
  const q = Ut.useMemo(() => !z || Array.isArray(z) ? [] : Object.entries(z).flatMap(
    ([M, re]) => (Array.isArray(re) ? re : []).map((me, be) => {
      var Me;
      const _e = String(me.key || ((Me = me.attributes) == null ? void 0 : Me.label) || `node_${be}`);
      return {
        ...me,
        key: _e,
        _orgId: String(M),
        _globalKey: `${M}::${_e}`
      };
    })
  ), [z]), ee = Ut.useMemo(
    () => q.filter((M) => {
      var re;
      return ((re = M.attributes) == null ? void 0 : re.node_type) === "repeat";
    }).map((M, re) => ({
      ...M,
      attributes: {
        ...M.attributes
      }
    })),
    [q, y]
  ), P = Ut.useMemo(
    () => q.filter((M) => {
      var re;
      return ((re = M.attributes) == null ? void 0 : re.node_type) === "protein";
    }).map((M) => ({
      ...M,
      attributes: {
        ...M.attributes
      }
    })),
    [q]
  ), ye = Ut.useMemo(() => {
    const M = /* @__PURE__ */ new Map();
    return ee.forEach((re) => {
      const me = M.get(re._orgId) || [];
      me.push(re.key), M.set(re._orgId, me);
    }), M;
  }, [ee]), G = Ut.useMemo(() => P.map((M) => {
    let re = null;
    const me = ye.get(M._orgId) || [];
    for (const be of me)
      if (M.key.endsWith("_" + be)) {
        re = be;
        break;
      }
    if (!re) {
      const be = M.key.lastIndexOf("_");
      if (be > -1) {
        const _e = M.key.slice(be + 1);
        me.includes(_e) && (re = _e);
      }
    }
    return {
      ...M,
      _satelliteKey: re,
      _satelliteglobalKey: re ? `${M._orgId}::${re}` : null
    };
  }), [P, ye]), X = (M, re) => {
    const me = /* @__PURE__ */ new Map();
    for (const be of M) {
      const _e = re(be), Me = me.get(_e) || [];
      Me.push(be), me.set(_e, Me);
    }
    return me;
  }, fe = Ut.useMemo(
    () => X(
      G.filter((M) => M._satelliteglobalKey),
      (M) => M._satelliteglobalKey
    ),
    [G]
  ), [de, Ce] = Ut.useState([]);
  Ut.useEffect(() => {
    let M = new AbortController();
    return (async () => {
      try {
        const me = "/static/multi_org_network/repeat_network_db_all.json", be = me.includes("?") ? "&" : "?", _e = await fetch(`${me}${be}_=${Date.now()}`, {
          credentials: "same-origin",
          cache: "no-store",
          signal: M.signal
        });
        if (!_e.ok)
          throw new Error(`Failed to load ${me}: ${_e.status} ${_e.statusText}`);
        const Me = await _e.json();
        Ce(
          Array.isArray(Me) ? Me.filter(
            (Je) => Array.isArray(Je) && Je.length >= 2 && Je[0] != null && Je[1] != null
          ) : []
        );
      } catch (me) {
        me.name !== "AbortError" && (console.error("Error fetching clone pair data:", me), Ce([]));
      }
    })(), () => M.abort();
  }, []);
  const he = [
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
  ], Re = Ut.useMemo(() => {
    const M = /* @__PURE__ */ new Map();
    return (y || []).forEach((re, me) => {
      M.set(String(re), he[me % he.length]);
    }), M;
  }, [y]), Ge = Ut.useMemo(() => {
    var re, me, be, _e;
    const M = /* @__PURE__ */ new Map();
    for (const Me of q) {
      const Je = Me._orgId, bt = ((me = (re = Me.attributes) == null ? void 0 : re.parental_organism) == null ? void 0 : me.scientific_name) || ((_e = (be = Me.attributes) == null ? void 0 : be.parent_organism) == null ? void 0 : _e.scientific_name) || Je;
      M.has(Je) || M.set(Je, {
        id: Je,
        name: bt,
        color: Re.get(Je) || "#888"
      });
    }
    return Array.from(M.values());
  }, [q, Re]), He = Ut.useMemo(() => {
    const M = G.filter(
      (re) => {
        var me;
        return Number(((me = re.attributes) == null ? void 0 : me.enrichment) || 0) >= N;
      }
    );
    return [...ee, ...M].map((re) => {
      var me, be;
      return {
        key: re.key,
        label: ((me = re.attributes) == null ? void 0 : me.label) || re.key,
        type: (be = re.attributes) == null ? void 0 : be.node_type,
        orgId: re._orgId,
        node: re
      };
    });
  }, [ee, G, N]), ct = Ut.useMemo(() => {
    const M = S.trim().toLowerCase();
    return M ? He.filter((re) => {
      var be;
      const me = String(((be = re.node.attributes) == null ? void 0 : be.aliases) || "").toLowerCase();
      return re.label.toLowerCase().includes(M) || re.key.toLowerCase().includes(M) || me.includes(M);
    }).slice(0, 12) : [];
  }, [S, He]), mt = (M) => {
    const re = M.type === "repeat" ? Xe.get(M.node._globalKey) : We.get(M.node._globalKey);
    if (!re) return;
    const me = M.type === "repeat" ? 260 : 180, be = M.type === "repeat" ? 180 : 130;
    Pe({
      x: re.x - me / 2,
      y: re.y - be / 2,
      w: me,
      h: be
    }), Mt({ type: M.type === "repeat" ? "repeat" : "protein", node: M.node }), j(!1);
  }, rt = Ut.useRef(null), [zt, yt] = Ut.useState({ x: 0, y: 0 }), [Se, Mt] = Ut.useState(null), [jt, Ft] = Ut.useState(!1), je = Ut.useRef({ clientX: 0, clientY: 0, viewX: 0, viewY: 0 }), [ue, Pe] = Ut.useState({ x: -600, y: -300, w: 1200, h: 600 }), [we, O] = Ut.useState(!1);
  Ut.useEffect(() => {
    O(!1);
  }, [z]), Ut.useEffect(() => {
    const M = rt.current;
    if (!M) return;
    const re = M.parentElement;
    if (!re) return;
    const me = () => {
      const _e = re.getBoundingClientRect();
      M.setAttribute("width", `${_e.width}`), M.setAttribute("height", `${_e.height}`);
    };
    me();
    const be = new ResizeObserver(me);
    return be.observe(re), () => be.disconnect();
  }, []), Ut.useEffect(() => {
    const M = (re) => yt({ x: re.clientX, y: re.clientY });
    return window.addEventListener("mousemove", M), () => window.removeEventListener("mousemove", M);
  }, []);
  const te = (M) => {
    M.preventDefault();
    const re = Math.pow(1.0015, M.deltaY), me = rt.current;
    if (!me) return;
    const be = me.getBoundingClientRect(), _e = (M.clientX - be.left) / be.width, Me = (M.clientY - be.top) / be.height;
    Pe((Je) => {
      const bt = Je.x + _e * Je.w, Ht = Je.y + Me * Je.h, W = Math.max(50, Math.min(1e4, Je.w * re)), Ee = Math.max(50, Math.min(1e4, Je.h * re));
      return {
        x: bt - _e * W,
        y: Ht - Me * Ee,
        w: W,
        h: Ee
      };
    });
  };
  Ut.useEffect(() => {
    const M = Y.current;
    if (!M) return;
    const re = () => {
      oe(Number(M.dataset.threshold || 0));
    };
    return M.addEventListener("network-settings-change", re), () => {
      M.removeEventListener("network-settings-change", re);
    };
  }, []);
  const { satPositions: Xe, proteinPositions: We } = Ut.useMemo(() => {
    var Ht;
    const M = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
    if (!ee.length && !G.length)
      return { satPositions: M, proteinPositions: re };
    const me = [], be = /* @__PURE__ */ new Map();
    ee.forEach((W) => {
      var ft;
      const Ee = Number(((ft = W.attributes) == null ? void 0 : ft.size) ?? 40), Ie = {
        id: W._globalKey,
        type: "repeat",
        raw: W,
        size: Ee
      };
      me.push(Ie), be.set(W._globalKey, Ie);
    }), G.forEach((W) => {
      var ft, Pt;
      if (Number(((ft = W.attributes) == null ? void 0 : ft.enrichment) || 0) < N) return;
      const Ee = Number(((Pt = W.attributes) == null ? void 0 : Pt.size) ?? 6), Ie = {
        id: W._globalKey,
        type: "protein",
        raw: W,
        size: Ee
      };
      me.push(Ie), be.set(W._globalKey, Ie);
    });
    const _e = [];
    G.forEach((W) => {
      W._satelliteglobalKey && be.has(W._globalKey) && be.has(W._satelliteglobalKey) && _e.push({
        source: W._globalKey,
        target: W._satelliteglobalKey,
        kind: "binding"
      });
    });
    const Me = /* @__PURE__ */ new Map();
    for (const W of me) {
      const Ee = (Ht = W.raw) == null ? void 0 : Ht.key;
      if (!Ee) continue;
      const Ie = Me.get(Ee) || [];
      Ie.push(W), Me.set(Ee, Ie);
    }
    for (const [W, Ee] of de) {
      const Ie = String(W).trim(), ft = String(Ee).trim(), Pt = Me.get(Ie) || (be.has(Ie) ? [be.get(Ie)] : []), mn = Me.get(ft) || (be.has(ft) ? [be.get(ft)] : []);
      for (const an of Pt)
        for (const Gt of mn)
          !an || !Gt || an.id !== Gt.id && _e.push({
            source: an.id,
            target: Gt.id,
            kind: "clone"
          });
    }
    const Je = mD(me).force(
      "charge",
      yD().strength(
        (W) => W.type === "repeat" ? -80 : -20
      )
    ).force(
      "collide",
      Jk().radius((W) => {
        const Ee = W.type === "repeat" ? Number(W.size || 40) : Number(W.size || 6), Ie = W.type === "repeat" ? 35 : 3;
        return Ee + Ie;
      })
    ).force(
      "link",
      tD(_e).id((W) => W.id).distance(
        (W) => W.kind === "binding" ? 28 : 140
      ).strength(
        (W) => W.kind === "binding" ? 1.4 : 0.03
      )
    ).force("center", zk(0, 0)).force("x", gD(0).strength(0.03)).force("y", SD(0).strength(0.03)).stop(), bt = 280;
    for (let W = 0; W < bt; W++)
      Je.tick();
    return ee.forEach((W) => {
      const Ee = be.get(W._globalKey);
      Ee && M.set(W._globalKey, { x: Ee.x, y: Ee.y });
    }), G.forEach((W) => {
      const Ee = be.get(W._globalKey);
      Ee && re.set(W._globalKey, { x: Ee.x, y: Ee.y });
    }), { satPositions: M, proteinPositions: re };
  }, [ee, G, de, N]);
  Ut.useEffect(() => {
    if (we || !rt.current || !ee.length || Xe.size === 0) return;
    const M = [], re = [];
    for (const { x: Gt, y: Vt } of Xe.values())
      M.push(Gt), re.push(Vt);
    for (const { x: Gt, y: Vt } of We.values())
      M.push(Gt), re.push(Vt);
    if (!M.length) return;
    let me = Math.min(...M), be = Math.max(...M), _e = Math.min(...re), Me = Math.max(...re);
    const Je = 80;
    me -= Je, be += Je, _e -= Je, Me += Je;
    let bt = Math.max(be - me || 1, 900), Ht = Math.max(Me - _e || 1, 500);
    const W = rt.current.parentElement;
    if (!W) {
      const Vt = me + bt / 2, ln = _e + Ht / 2;
      bt *= 1.18, Ht *= 1.18, me = Vt - bt / 2, _e = ln - Ht / 2, Pe({ x: me, y: _e, w: bt, h: Ht }), O(!0);
      return;
    }
    const Ee = W.getBoundingClientRect(), Ie = Ee.width / Ee.height;
    if (bt / Ht > Ie) {
      const Gt = bt / Ie, Vt = Gt - Ht;
      _e -= Vt / 2, Ht = Gt;
    } else {
      const Gt = Ht * Ie, Vt = Gt - bt;
      me -= Vt / 2, bt = Gt;
    }
    const Pt = 1.18, mn = me + bt / 2, an = _e + Ht / 2;
    bt *= Pt, Ht *= Pt, me = mn - bt / 2, _e = an - Ht / 2, Pe({ x: me, y: _e, w: bt, h: Ht }), O(!0);
  }, [Xe, We, ee.length, we]);
  const Tt = Ut.useMemo(() => {
    const M = [];
    for (const [re, me] of fe.entries()) {
      const be = Xe.get(re);
      if (be)
        for (const _e of me) {
          const Me = We.get(_e._globalKey);
          Me && M.push({ a: Me, b: be });
        }
    }
    return M;
  }, [fe, Xe, We]), Rt = Ut.useMemo(() => {
    const M = [], re = /* @__PURE__ */ new Map();
    for (const me of G) {
      const be = We.get(me._globalKey);
      if (!be) continue;
      const _e = re.get(me.key) || [];
      _e.push(be), re.set(me.key, _e);
    }
    for (const [me, be] of de) {
      const _e = String(me).trim(), Me = String(be).trim(), Je = re.get(_e) || [], bt = re.get(Me) || [];
      for (const Ht of Je)
        for (const W of bt)
          M.push({ a: Ht, b: W });
    }
    return M;
  }, [de, G, We]), gt = `${ue.x} ${ue.y} ${ue.w} ${ue.h}`;
  return !ee.length && !G.length ? /* @__PURE__ */ ut.jsx("p", { children: "Enrichment data doesn't exist" }) : /* @__PURE__ */ ut.jsxs(
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
        /* @__PURE__ */ ut.jsxs(
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
              /* @__PURE__ */ ut.jsxs("div", { style: { position: "relative" }, children: [
                /* @__PURE__ */ ut.jsx(
                  "input",
                  {
                    type: "text",
                    value: S,
                    onChange: (M) => R(M.target.value),
                    onFocus: () => j(!0),
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
                E && S.trim() && /* @__PURE__ */ ut.jsx(
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
                    children: ct.length ? ct.map((M) => /* @__PURE__ */ ut.jsxs(
                      "div",
                      {
                        onMouseDown: (re) => {
                          re.preventDefault(), mt(M);
                        },
                        style: {
                          padding: "8px 10px",
                          cursor: "pointer",
                          borderBottom: "1px solid #eee",
                          fontSize: 13
                        },
                        children: [
                          /* @__PURE__ */ ut.jsx("div", { style: { fontWeight: 600 }, children: M.label }),
                          /* @__PURE__ */ ut.jsxs("div", { style: { color: "#666", fontSize: 11 }, children: [
                            M.type === "repeat" ? "Repeat" : "Protein",
                            " · ",
                            M.orgId
                          ] })
                        ]
                      },
                      `${M.orgId}-${M.key}`
                    )) : /* @__PURE__ */ ut.jsx("div", { style: { padding: "8px 10px", color: "#666", fontSize: 13 }, children: "No matches" })
                  }
                )
              ] }),
              /* @__PURE__ */ ut.jsxs(
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
                    /* @__PURE__ */ ut.jsx("div", { style: { fontWeight: 700, marginBottom: 6 }, children: "Organisms" }),
                    Ge.map((M) => /* @__PURE__ */ ut.jsxs(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: 7,
                          marginBottom: 4
                        },
                        children: [
                          /* @__PURE__ */ ut.jsx(
                            "span",
                            {
                              style: {
                                width: 11,
                                height: 11,
                                borderRadius: "50%",
                                background: M.color,
                                display: "inline-block"
                              }
                            }
                          ),
                          /* @__PURE__ */ ut.jsx("span", { children: M.name })
                        ]
                      },
                      M.id
                    ))
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ ut.jsxs(
          "svg",
          {
            ref: rt,
            viewBox: gt,
            onWheel: te,
            style: { width: "100%", height: "100%", display: "block" },
            children: [
              /* @__PURE__ */ ut.jsx(
                "rect",
                {
                  x: ue.x - ue.w,
                  y: ue.y - ue.h,
                  width: ue.w * 3,
                  height: ue.h * 3,
                  fill: "transparent",
                  style: { cursor: jt ? "grabbing" : "grab" },
                  onMouseDown: (M) => {
                    M.button === 0 && (Ft(!0), je.current = {
                      clientX: M.clientX,
                      clientY: M.clientY,
                      viewX: ue.x,
                      viewY: ue.y
                    });
                  },
                  onMouseMove: (M) => {
                    if (!jt) return;
                    const re = rt.current.getBoundingClientRect(), me = ue.w / re.width, be = ue.h / re.height, _e = (M.clientX - je.current.clientX) * me, Me = (M.clientY - je.current.clientY) * be;
                    Pe((Je) => ({
                      ...Je,
                      x: je.current.viewX - _e,
                      y: je.current.viewY - Me
                    }));
                  },
                  onMouseUp: () => Ft(!1),
                  onMouseLeave: () => Ft(!1)
                }
              ),
              /* @__PURE__ */ ut.jsx("g", { children: Rt.map((M, re) => /* @__PURE__ */ ut.jsx(
                "line",
                {
                  x1: M.a.x,
                  y1: M.a.y,
                  x2: M.b.x,
                  y2: M.b.y,
                  stroke: "#888",
                  strokeDasharray: "4 4",
                  strokeWidth: "1",
                  opacity: "0.6"
                },
                `clone-${re}`
              )) }),
              /* @__PURE__ */ ut.jsx("g", { children: Tt.map((M, re) => /* @__PURE__ */ ut.jsx(
                "line",
                {
                  x1: M.a.x,
                  y1: M.a.y,
                  x2: M.b.x,
                  y2: M.b.y,
                  stroke: "#bdbdbd",
                  strokeWidth: "1.2"
                },
                `ps-${re}`
              )) }),
              /* @__PURE__ */ ut.jsx("g", { children: ee.map((M) => {
                var Je, bt, Ht, W;
                const re = Xe.get(M._globalKey) || { x: 0, y: 0 }, me = Number(((Je = M.attributes) == null ? void 0 : Je.size) ?? 30), be = Re.get(M._orgId) ?? ((bt = M.attributes) == null ? void 0 : bt.color) ?? "#888", _e = ((Ht = M.attributes) == null ? void 0 : Ht.label) || M.key, Me = ((W = M.attributes) == null ? void 0 : W.url) || null;
                return /* @__PURE__ */ ut.jsxs("g", { transform: `translate(${re.x},${re.y})`, children: [
                  /* @__PURE__ */ ut.jsx(
                    "circle",
                    {
                      r: me,
                      fill: be,
                      opacity: "1",
                      style: { cursor: Me ? "pointer" : "default" },
                      onMouseEnter: () => Mt({ type: "repeat", node: M }),
                      onMouseLeave: () => Mt(null),
                      onClick: () => Me && window.open(Me, "_blank")
                    }
                  ),
                  /* @__PURE__ */ ut.jsx(
                    "text",
                    {
                      x: 0,
                      y: 0,
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                      fill: "#fff",
                      fontSize: "20",
                      fontWeight: "600",
                      style: { cursor: Me ? "pointer" : "default", userSelect: "none" },
                      onMouseEnter: () => Mt({ type: "repeat", node: M }),
                      onMouseLeave: () => Mt(null),
                      onClick: () => Me && window.open(Me, "_blank"),
                      children: _e
                    }
                  )
                ] }, M._globalKey);
              }) }),
              /* @__PURE__ */ ut.jsx("g", { children: G.filter((M) => {
                var re;
                return Number(((re = M.attributes) == null ? void 0 : re.enrichment) || 0) >= N;
              }).map((M) => {
                var Me, Je, bt;
                const re = We.get(M._globalKey) || { x: 0, y: 0 }, me = Number(((Me = M.attributes) == null ? void 0 : Me.size) ?? 6), be = ((Je = M.attributes) == null ? void 0 : Je.color) || "#9DD6FB", _e = ((bt = M.attributes) == null ? void 0 : bt.url) || null;
                return /* @__PURE__ */ ut.jsx(
                  "circle",
                  {
                    cx: re.x,
                    cy: re.y,
                    r: me,
                    fill: be,
                    style: { cursor: _e ? "pointer" : "default" },
                    onMouseEnter: () => Mt({ type: "protein", node: M }),
                    onMouseLeave: () => Mt(null),
                    onClick: () => _e && window.open(_e, "_blank")
                  },
                  M._globalKey
                );
              }) })
            ]
          }
        ),
        Se && /* @__PURE__ */ ut.jsx(
          "div",
          {
            role: "tooltip",
            style: {
              position: "fixed",
              left: zt.x + 12,
              top: zt.y + 12,
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
            children: Se.type === "repeat" ? /* @__PURE__ */ ut.jsxs("div", { children: [
              /* @__PURE__ */ ut.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: ((St = Se.node.attributes) == null ? void 0 : St.label) || Se.node.key }),
              /* @__PURE__ */ ut.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Satellite (repeat)" }),
              ((wt = Se.node.attributes) == null ? void 0 : wt.aliases) && /* @__PURE__ */ ut.jsxs("div", { children: [
                /* @__PURE__ */ ut.jsx("b", { children: "Aliases:" }),
                " ",
                String(Se.node.attributes.aliases)
              ] }),
              ((_n = (qt = Se.node.attributes) == null ? void 0 : qt.parental_organism) == null ? void 0 : _n.scientific_name) && /* @__PURE__ */ ut.jsxs("div", { children: [
                /* @__PURE__ */ ut.jsx("b", { children: "Organism:" }),
                " ",
                String(Se.node.attributes.parental_organism.scientific_name)
              ] }),
              ((ir = Se.node.attributes) == null ? void 0 : ir.dfam_id) != null && /* @__PURE__ */ ut.jsxs("div", { children: [
                /* @__PURE__ */ ut.jsx("b", { children: "Dfam:" }),
                " ",
                String(Se.node.attributes.dfam_id)
              ] }),
              ((xn = Se.node.attributes) == null ? void 0 : xn.url) && /* @__PURE__ */ ut.jsx(
                "div",
                {
                  style: {
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer"
                  },
                  onClick: () => window.open(Se.node.attributes.url, "_blank"),
                  children: "Open page"
                }
              )
            ] }) : /* @__PURE__ */ ut.jsxs("div", { children: [
              /* @__PURE__ */ ut.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: (In = Se.node.attributes) == null ? void 0 : In.label }),
              /* @__PURE__ */ ut.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Transcription factor" }),
              ((Ln = Se.node.attributes) == null ? void 0 : Ln.aliases) && /* @__PURE__ */ ut.jsxs("div", { children: [
                /* @__PURE__ */ ut.jsx("b", { children: "Aliases:" }),
                " ",
                String(Se.node.attributes.aliases)
              ] }),
              ((zn = Se.node.attributes) == null ? void 0 : zn.gene_family) && /* @__PURE__ */ ut.jsxs("div", { children: [
                /* @__PURE__ */ ut.jsx("b", { children: "Family:" }),
                " ",
                String(Se.node.attributes.gene_family)
              ] }),
              ((va = (fr = Se.node.attributes) == null ? void 0 : fr.parent_organism) == null ? void 0 : va.scientific_name) != null && /* @__PURE__ */ ut.jsxs("div", { children: [
                /* @__PURE__ */ ut.jsx("b", { children: "Organism:" }),
                " ",
                String(Se.node.attributes.parent_organism.scientific_name)
              ] }),
              ((_r = Se.node.attributes) == null ? void 0 : _r.enrichment) != null && /* @__PURE__ */ ut.jsxs("div", { children: [
                /* @__PURE__ */ ut.jsx("b", { children: "Enrichment:" }),
                " ",
                String(Se.node.attributes.enrichment)
              ] }),
              ((Un = Se.node.attributes) == null ? void 0 : Un.url) && /* @__PURE__ */ ut.jsx(
                "div",
                {
                  style: {
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer"
                  },
                  onClick: () => window.open(Se.node.attributes.url, "_blank"),
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
const CD = k0(Uw);
CD.render(
  /* @__PURE__ */ ut.jsx(bk.StrictMode, { children: /* @__PURE__ */ ut.jsx(ED, {}) })
);
