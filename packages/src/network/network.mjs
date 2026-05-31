function Tk(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var x0 = { exports: {} }, rv = {}, _0 = { exports: {} }, Ot = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pT;
function wk() {
  if (pT) return Ot;
  pT = 1;
  var S = Symbol.for("react.element"), R = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), y = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), M = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), K = Symbol.iterator;
  function Z(O) {
    return O === null || typeof O != "object" ? null : (O = K && O[K] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, he = Object.assign, ee = {};
  function $(O, q, rt) {
    this.props = O, this.context = q, this.refs = ee, this.updater = rt || F;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(O, q) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, q, "setState");
  }, $.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function re() {
  }
  re.prototype = $.prototype;
  function fe(O, q, rt) {
    this.props = O, this.context = q, this.refs = ee, this.updater = rt || F;
  }
  var Ce = fe.prototype = new re();
  Ce.constructor = fe, he(Ce, $.prototype), Ce.isPureReactComponent = !0;
  var ce = Array.isArray, ve = Object.prototype.hasOwnProperty, We = { current: null }, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ot(O, q, rt) {
    var H, oe = {}, ge = null, Se = null;
    if (q != null) for (H in q.ref !== void 0 && (Se = q.ref), q.key !== void 0 && (ge = "" + q.key), q) ve.call(q, H) && !je.hasOwnProperty(H) && (oe[H] = q[H]);
    var _e = arguments.length - 2;
    if (_e === 1) oe.children = rt;
    else if (1 < _e) {
      for (var Re = Array(_e), Ze = 0; Ze < _e; Ze++) Re[Ze] = arguments[Ze + 2];
      oe.children = Re;
    }
    if (O && O.defaultProps) for (H in _e = O.defaultProps, _e) oe[H] === void 0 && (oe[H] = _e[H]);
    return { $$typeof: S, type: O, key: ge, ref: Se, props: oe, _owner: We.current };
  }
  function ht(O, q) {
    return { $$typeof: S, type: O.type, key: q, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function nt(O) {
    return typeof O == "object" && O !== null && O.$$typeof === S;
  }
  function Et(O) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(rt) {
      return q[rt];
    });
  }
  var mt = /\/+/g;
  function Fe(O, q) {
    return typeof O == "object" && O !== null && O.key != null ? Et("" + O.key) : q.toString(36);
  }
  function Ft(O, q, rt, H, oe) {
    var ge = typeof O;
    (ge === "undefined" || ge === "boolean") && (O = null);
    var Se = !1;
    if (O === null) Se = !0;
    else switch (ge) {
      case "string":
      case "number":
        Se = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case S:
          case R:
            Se = !0;
        }
    }
    if (Se) return Se = O, oe = oe(Se), O = H === "" ? "." + Fe(Se, 0) : H, ce(oe) ? (rt = "", O != null && (rt = O.replace(mt, "$&/") + "/"), Ft(oe, q, rt, "", function(Ze) {
      return Ze;
    })) : oe != null && (nt(oe) && (oe = ht(oe, rt + (!oe.key || Se && Se.key === oe.key ? "" : ("" + oe.key).replace(mt, "$&/") + "/") + O)), q.push(oe)), 1;
    if (Se = 0, H = H === "" ? "." : H + ":", ce(O)) for (var _e = 0; _e < O.length; _e++) {
      ge = O[_e];
      var Re = H + Fe(ge, _e);
      Se += Ft(ge, q, rt, Re, oe);
    }
    else if (Re = Z(O), typeof Re == "function") for (O = Re.call(O), _e = 0; !(ge = O.next()).done; ) ge = ge.value, Re = H + Fe(ge, _e++), Se += Ft(ge, q, rt, Re, oe);
    else if (ge === "object") throw q = String(O), Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.");
    return Se;
  }
  function Dt(O, q, rt) {
    if (O == null) return O;
    var H = [], oe = 0;
    return Ft(O, H, "", "", function(ge) {
      return q.call(rt, ge, oe++);
    }), H;
  }
  function Mt(O) {
    if (O._status === -1) {
      var q = O._result;
      q = q(), q.then(function(rt) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = rt);
      }, function(rt) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = rt);
      }), O._status === -1 && (O._status = 0, O._result = q);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var He = { current: null }, me = { transition: null }, $e = { ReactCurrentDispatcher: He, ReactCurrentBatchConfig: me, ReactCurrentOwner: We };
  function we() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ot.Children = { map: Dt, forEach: function(O, q, rt) {
    Dt(O, function() {
      q.apply(this, arguments);
    }, rt);
  }, count: function(O) {
    var q = 0;
    return Dt(O, function() {
      q++;
    }), q;
  }, toArray: function(O) {
    return Dt(O, function(q) {
      return q;
    }) || [];
  }, only: function(O) {
    if (!nt(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, Ot.Component = $, Ot.Fragment = E, Ot.Profiler = j, Ot.PureComponent = fe, Ot.StrictMode = A, Ot.Suspense = W, Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $e, Ot.act = we, Ot.cloneElement = function(O, q, rt) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var H = he({}, O.props), oe = O.key, ge = O.ref, Se = O._owner;
    if (q != null) {
      if (q.ref !== void 0 && (ge = q.ref, Se = We.current), q.key !== void 0 && (oe = "" + q.key), O.type && O.type.defaultProps) var _e = O.type.defaultProps;
      for (Re in q) ve.call(q, Re) && !je.hasOwnProperty(Re) && (H[Re] = q[Re] === void 0 && _e !== void 0 ? _e[Re] : q[Re]);
    }
    var Re = arguments.length - 2;
    if (Re === 1) H.children = rt;
    else if (1 < Re) {
      _e = Array(Re);
      for (var Ze = 0; Ze < Re; Ze++) _e[Ze] = arguments[Ze + 2];
      H.children = _e;
    }
    return { $$typeof: S, type: O.type, key: oe, ref: ge, props: H, _owner: Se };
  }, Ot.createContext = function(O) {
    return O = { $$typeof: y, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: I, _context: O }, O.Consumer = O;
  }, Ot.createElement = ot, Ot.createFactory = function(O) {
    var q = ot.bind(null, O);
    return q.type = O, q;
  }, Ot.createRef = function() {
    return { current: null };
  }, Ot.forwardRef = function(O) {
    return { $$typeof: te, render: O };
  }, Ot.isValidElement = nt, Ot.lazy = function(O) {
    return { $$typeof: se, _payload: { _status: -1, _result: O }, _init: Mt };
  }, Ot.memo = function(O, q) {
    return { $$typeof: M, type: O, compare: q === void 0 ? null : q };
  }, Ot.startTransition = function(O) {
    var q = me.transition;
    me.transition = {};
    try {
      O();
    } finally {
      me.transition = q;
    }
  }, Ot.unstable_act = we, Ot.useCallback = function(O, q) {
    return He.current.useCallback(O, q);
  }, Ot.useContext = function(O) {
    return He.current.useContext(O);
  }, Ot.useDebugValue = function() {
  }, Ot.useDeferredValue = function(O) {
    return He.current.useDeferredValue(O);
  }, Ot.useEffect = function(O, q) {
    return He.current.useEffect(O, q);
  }, Ot.useId = function() {
    return He.current.useId();
  }, Ot.useImperativeHandle = function(O, q, rt) {
    return He.current.useImperativeHandle(O, q, rt);
  }, Ot.useInsertionEffect = function(O, q) {
    return He.current.useInsertionEffect(O, q);
  }, Ot.useLayoutEffect = function(O, q) {
    return He.current.useLayoutEffect(O, q);
  }, Ot.useMemo = function(O, q) {
    return He.current.useMemo(O, q);
  }, Ot.useReducer = function(O, q, rt) {
    return He.current.useReducer(O, q, rt);
  }, Ot.useRef = function(O) {
    return He.current.useRef(O);
  }, Ot.useState = function(O) {
    return He.current.useState(O);
  }, Ot.useSyncExternalStore = function(O, q, rt) {
    return He.current.useSyncExternalStore(O, q, rt);
  }, Ot.useTransition = function() {
    return He.current.useTransition();
  }, Ot.version = "18.3.1", Ot;
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
var vT;
function xk() {
  return vT || (vT = 1, function(S, R) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var E = "18.3.1", A = Symbol.for("react.element"), j = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), M = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), $ = Symbol.iterator, re = "@@iterator";
      function fe(h) {
        if (h === null || typeof h != "object")
          return null;
        var w = $ && h[$] || h[re];
        return typeof w == "function" ? w : null;
      }
      var Ce = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {
        transition: null
      }, ve = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, We = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, je = {}, ot = null;
      function ht(h) {
        ot = h;
      }
      je.setExtraStackFrame = function(h) {
        ot = h;
      }, je.getCurrentStack = null, je.getStackAddendum = function() {
        var h = "";
        ot && (h += ot);
        var w = je.getCurrentStack;
        return w && (h += w() || ""), h;
      };
      var nt = !1, Et = !1, mt = !1, Fe = !1, Ft = !1, Dt = {
        ReactCurrentDispatcher: Ce,
        ReactCurrentBatchConfig: ce,
        ReactCurrentOwner: We
      };
      Dt.ReactDebugCurrentFrame = je, Dt.ReactCurrentActQueue = ve;
      function Mt(h) {
        {
          for (var w = arguments.length, V = new Array(w > 1 ? w - 1 : 0), Q = 1; Q < w; Q++)
            V[Q - 1] = arguments[Q];
          me("warn", h, V);
        }
      }
      function He(h) {
        {
          for (var w = arguments.length, V = new Array(w > 1 ? w - 1 : 0), Q = 1; Q < w; Q++)
            V[Q - 1] = arguments[Q];
          me("error", h, V);
        }
      }
      function me(h, w, V) {
        {
          var Q = Dt.ReactDebugCurrentFrame, ye = Q.getStackAddendum();
          ye !== "" && (w += "%s", V = V.concat([ye]));
          var Je = V.map(function(be) {
            return String(be);
          });
          Je.unshift("Warning: " + w), Function.prototype.apply.call(console[h], console, Je);
        }
      }
      var $e = {};
      function we(h, w) {
        {
          var V = h.constructor, Q = V && (V.displayName || V.name) || "ReactClass", ye = Q + "." + w;
          if ($e[ye])
            return;
          He("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, Q), $e[ye] = !0;
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
        enqueueForceUpdate: function(h, w, V) {
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
        enqueueReplaceState: function(h, w, V, Q) {
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
        enqueueSetState: function(h, w, V, Q) {
          we(h, "setState");
        }
      }, q = Object.assign, rt = {};
      Object.freeze(rt);
      function H(h, w, V) {
        this.props = h, this.context = w, this.refs = rt, this.updater = V || O;
      }
      H.prototype.isReactComponent = {}, H.prototype.setState = function(h, w) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, w, "setState");
      }, H.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var oe = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ge = function(h, w) {
          Object.defineProperty(H.prototype, h, {
            get: function() {
              Mt("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var Se in oe)
          oe.hasOwnProperty(Se) && ge(Se, oe[Se]);
      }
      function _e() {
      }
      _e.prototype = H.prototype;
      function Re(h, w, V) {
        this.props = h, this.context = w, this.refs = rt, this.updater = V || O;
      }
      var Ze = Re.prototype = new _e();
      Ze.constructor = Re, q(Ze, H.prototype), Ze.isPureReactComponent = !0;
      function Ee() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Ye = Array.isArray;
      function ct(h) {
        return Ye(h);
      }
      function qt(h) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, V = w && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return V;
        }
      }
      function cn(h) {
        try {
          return jn(h), !1;
        } catch {
          return !0;
        }
      }
      function jn(h) {
        return "" + h;
      }
      function ir(h) {
        if (cn(h))
          return He("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qt(h)), jn(h);
      }
      function _a(h, w, V) {
        var Q = h.displayName;
        if (Q)
          return Q;
        var ye = w.displayName || w.name || "";
        return ye !== "" ? V + "(" + ye + ")" : V;
      }
      function kr(h) {
        return h.displayName || "Context";
      }
      function Zt(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && He("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case I:
            return "Fragment";
          case j:
            return "Portal";
          case te:
            return "Profiler";
          case y:
            return "StrictMode";
          case K:
            return "Suspense";
          case Z:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case M:
              var w = h;
              return kr(w) + ".Consumer";
            case W:
              var V = h;
              return kr(V._context) + ".Provider";
            case se:
              return _a(h, h.render, "ForwardRef");
            case F:
              var Q = h.displayName || null;
              return Q !== null ? Q : Zt(h.type) || "Memo";
            case he: {
              var ye = h, Je = ye._payload, be = ye._init;
              try {
                return Zt(be(Je));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Qt = Object.prototype.hasOwnProperty, Dn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Cr, Ga, Fn;
      Fn = {};
      function Rr(h) {
        if (Qt.call(h, "ref")) {
          var w = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function ca(h) {
        if (Qt.call(h, "key")) {
          var w = Object.getOwnPropertyDescriptor(h, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Xa(h, w) {
        var V = function() {
          Cr || (Cr = !0, He("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        V.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: V,
          configurable: !0
        });
      }
      function pi(h, w) {
        var V = function() {
          Ga || (Ga = !0, He("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        V.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: V,
          configurable: !0
        });
      }
      function Te(h) {
        if (typeof h.ref == "string" && We.current && h.__self && We.current.stateNode !== h.__self) {
          var w = Zt(We.current.type);
          Fn[w] || (He('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, h.ref), Fn[w] = !0);
        }
      }
      var Qe = function(h, w, V, Q, ye, Je, be) {
        var at = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: A,
          // Built-in properties that belong on the element
          type: h,
          key: w,
          ref: V,
          props: be,
          // Record the component responsible for creating this element.
          _owner: Je
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
          value: Q
        }), Object.defineProperty(at, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ye
        }), Object.freeze && (Object.freeze(at.props), Object.freeze(at)), at;
      };
      function Rt(h, w, V) {
        var Q, ye = {}, Je = null, be = null, at = null, bt = null;
        if (w != null) {
          Rr(w) && (be = w.ref, Te(w)), ca(w) && (ir(w.key), Je = "" + w.key), at = w.__self === void 0 ? null : w.__self, bt = w.__source === void 0 ? null : w.__source;
          for (Q in w)
            Qt.call(w, Q) && !Dn.hasOwnProperty(Q) && (ye[Q] = w[Q]);
        }
        var jt = arguments.length - 2;
        if (jt === 1)
          ye.children = V;
        else if (jt > 1) {
          for (var vn = Array(jt), rn = 0; rn < jt; rn++)
            vn[rn] = arguments[rn + 2];
          Object.freeze && Object.freeze(vn), ye.children = vn;
        }
        if (h && h.defaultProps) {
          var Tt = h.defaultProps;
          for (Q in Tt)
            ye[Q] === void 0 && (ye[Q] = Tt[Q]);
        }
        if (Je || be) {
          var an = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Je && Xa(ye, an), be && pi(ye, an);
        }
        return Qe(h, Je, be, at, bt, We.current, ye);
      }
      function Gt(h, w) {
        var V = Qe(h.type, w, h.ref, h._self, h._source, h._owner, h.props);
        return V;
      }
      function fn(h, w, V) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var Q, ye = q({}, h.props), Je = h.key, be = h.ref, at = h._self, bt = h._source, jt = h._owner;
        if (w != null) {
          Rr(w) && (be = w.ref, jt = We.current), ca(w) && (ir(w.key), Je = "" + w.key);
          var vn;
          h.type && h.type.defaultProps && (vn = h.type.defaultProps);
          for (Q in w)
            Qt.call(w, Q) && !Dn.hasOwnProperty(Q) && (w[Q] === void 0 && vn !== void 0 ? ye[Q] = vn[Q] : ye[Q] = w[Q]);
        }
        var rn = arguments.length - 2;
        if (rn === 1)
          ye.children = V;
        else if (rn > 1) {
          for (var Tt = Array(rn), an = 0; an < rn; an++)
            Tt[an] = arguments[an + 2];
          ye.children = Tt;
        }
        return Qe(h.type, Je, be, at, bt, jt, ye);
      }
      function Rn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === A;
      }
      var mn = ".", Jn = ":";
      function dn(h) {
        var w = /[=:]/g, V = {
          "=": "=0",
          ":": "=2"
        }, Q = h.replace(w, function(ye) {
          return V[ye];
        });
        return "$" + Q;
      }
      var en = !1, tn = /\/+/g;
      function fa(h) {
        return h.replace(tn, "$&/");
      }
      function Tr(h, w) {
        return typeof h == "object" && h !== null && h.key != null ? (ir(h.key), dn("" + h.key)) : w.toString(36);
      }
      function ba(h, w, V, Q, ye) {
        var Je = typeof h;
        (Je === "undefined" || Je === "boolean") && (h = null);
        var be = !1;
        if (h === null)
          be = !0;
        else
          switch (Je) {
            case "string":
            case "number":
              be = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case A:
                case j:
                  be = !0;
              }
          }
        if (be) {
          var at = h, bt = ye(at), jt = Q === "" ? mn + Tr(at, 0) : Q;
          if (ct(bt)) {
            var vn = "";
            jt != null && (vn = fa(jt) + "/"), ba(bt, w, vn, "", function(td) {
              return td;
            });
          } else bt != null && (Rn(bt) && (bt.key && (!at || at.key !== bt.key) && ir(bt.key), bt = Gt(
            bt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            V + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (bt.key && (!at || at.key !== bt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              fa("" + bt.key) + "/"
            ) : "") + jt
          )), w.push(bt));
          return 1;
        }
        var rn, Tt, an = 0, Tn = Q === "" ? mn : Q + Jn;
        if (ct(h))
          for (var xl = 0; xl < h.length; xl++)
            rn = h[xl], Tt = Tn + Tr(rn, xl), an += ba(rn, w, V, Tt, ye);
        else {
          var Jo = fe(h);
          if (typeof Jo == "function") {
            var Yi = h;
            Jo === Yi.entries && (en || Mt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), en = !0);
            for (var es = Jo.call(Yi), fu, ed = 0; !(fu = es.next()).done; )
              rn = fu.value, Tt = Tn + Tr(rn, ed++), an += ba(rn, w, V, Tt, ye);
          } else if (Je === "object") {
            var pc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (pc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : pc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return an;
      }
      function Vi(h, w, V) {
        if (h == null)
          return h;
        var Q = [], ye = 0;
        return ba(h, Q, "", "", function(Je) {
          return w.call(V, Je, ye++);
        }), Q;
      }
      function nu(h) {
        var w = 0;
        return Vi(h, function() {
          w++;
        }), w;
      }
      function ru(h, w, V) {
        Vi(h, function() {
          w.apply(this, arguments);
        }, V);
      }
      function ml(h) {
        return Vi(h, function(w) {
          return w;
        }) || [];
      }
      function yl(h) {
        if (!Rn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function au(h) {
        var w = {
          $$typeof: M,
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
        w.Provider = {
          $$typeof: W,
          _context: w
        };
        var V = !1, Q = !1, ye = !1;
        {
          var Je = {
            $$typeof: M,
            _context: w
          };
          Object.defineProperties(Je, {
            Provider: {
              get: function() {
                return Q || (Q = !0, He("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(be) {
                w.Provider = be;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(be) {
                w._currentValue = be;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(be) {
                w._currentValue2 = be;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(be) {
                w._threadCount = be;
              }
            },
            Consumer: {
              get: function() {
                return V || (V = !0, He("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(be) {
                ye || (Mt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", be), ye = !0);
              }
            }
          }), w.Consumer = Je;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var Dr = -1, Or = 0, lr = 1, vi = 2;
      function Ka(h) {
        if (h._status === Dr) {
          var w = h._result, V = w();
          if (V.then(function(Je) {
            if (h._status === Or || h._status === Dr) {
              var be = h;
              be._status = lr, be._result = Je;
            }
          }, function(Je) {
            if (h._status === Or || h._status === Dr) {
              var be = h;
              be._status = vi, be._result = Je;
            }
          }), h._status === Dr) {
            var Q = h;
            Q._status = Or, Q._result = V;
          }
        }
        if (h._status === lr) {
          var ye = h._result;
          return ye === void 0 && He(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ye), "default" in ye || He(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ye), ye.default;
        } else
          throw h._result;
      }
      function hi(h) {
        var w = {
          // We use these fields to store the result.
          _status: Dr,
          _result: h
        }, V = {
          $$typeof: he,
          _payload: w,
          _init: Ka
        };
        {
          var Q, ye;
          Object.defineProperties(V, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Q;
              },
              set: function(Je) {
                He("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Q = Je, Object.defineProperty(V, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ye;
              },
              set: function(Je) {
                He("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ye = Je, Object.defineProperty(V, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return V;
      }
      function mi(h) {
        h != null && h.$$typeof === F ? He("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? He("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && He("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && He("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: se,
          render: h
        };
        {
          var V;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return V;
            },
            set: function(Q) {
              V = Q, !h.name && !h.displayName && (h.displayName = Q);
            }
          });
        }
        return w;
      }
      var x;
      x = Symbol.for("react.module.reference");
      function ne(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === I || h === te || Ft || h === y || h === K || h === Z || Fe || h === ee || nt || Et || mt || typeof h == "object" && h !== null && (h.$$typeof === he || h.$$typeof === F || h.$$typeof === W || h.$$typeof === M || h.$$typeof === se || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === x || h.getModuleId !== void 0));
      }
      function ke(h, w) {
        ne(h) || He("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var V = {
          $$typeof: F,
          type: h,
          compare: w === void 0 ? null : w
        };
        {
          var Q;
          Object.defineProperty(V, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Q;
            },
            set: function(ye) {
              Q = ye, !h.name && !h.displayName && (h.displayName = ye);
            }
          });
        }
        return V;
      }
      function Ue() {
        var h = Ce.current;
        return h === null && He(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function yt(h) {
        var w = Ue();
        if (h._context !== void 0) {
          var V = h._context;
          V.Consumer === h ? He("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : V.Provider === h && He("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(h);
      }
      function dt(h) {
        var w = Ue();
        return w.useState(h);
      }
      function _t(h, w, V) {
        var Q = Ue();
        return Q.useReducer(h, w, V);
      }
      function wt(h) {
        var w = Ue();
        return w.useRef(h);
      }
      function On(h, w) {
        var V = Ue();
        return V.useEffect(h, w);
      }
      function pn(h, w) {
        var V = Ue();
        return V.useInsertionEffect(h, w);
      }
      function yn(h, w) {
        var V = Ue();
        return V.useLayoutEffect(h, w);
      }
      function ur(h, w) {
        var V = Ue();
        return V.useCallback(h, w);
      }
      function qa(h, w) {
        var V = Ue();
        return V.useMemo(h, w);
      }
      function Za(h, w, V) {
        var Q = Ue();
        return Q.useImperativeHandle(h, w, V);
      }
      function gt(h, w) {
        {
          var V = Ue();
          return V.useDebugValue(h, w);
        }
      }
      function Ct() {
        var h = Ue();
        return h.useTransition();
      }
      function Ja(h) {
        var w = Ue();
        return w.useDeferredValue(h);
      }
      function iu() {
        var h = Ue();
        return h.useId();
      }
      function lu(h, w, V) {
        var Q = Ue();
        return Q.useSyncExternalStore(h, w, V);
      }
      var gl = 0, Ku, Sl, Qr, Xo, Mr, fc, dc;
      function qu() {
      }
      qu.__reactDisabledLog = !0;
      function El() {
        {
          if (gl === 0) {
            Ku = console.log, Sl = console.info, Qr = console.warn, Xo = console.error, Mr = console.group, fc = console.groupCollapsed, dc = console.groupEnd;
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
      function da() {
        {
          if (gl--, gl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: q({}, h, {
                value: Ku
              }),
              info: q({}, h, {
                value: Sl
              }),
              warn: q({}, h, {
                value: Qr
              }),
              error: q({}, h, {
                value: Xo
              }),
              group: q({}, h, {
                value: Mr
              }),
              groupCollapsed: q({}, h, {
                value: fc
              }),
              groupEnd: q({}, h, {
                value: dc
              })
            });
          }
          gl < 0 && He("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ei = Dt.ReactCurrentDispatcher, ti;
      function Zu(h, w, V) {
        {
          if (ti === void 0)
            try {
              throw Error();
            } catch (ye) {
              var Q = ye.stack.trim().match(/\n( *(at )?)/);
              ti = Q && Q[1] || "";
            }
          return `
` + ti + h;
        }
      }
      var uu = !1, Cl;
      {
        var Ju = typeof WeakMap == "function" ? WeakMap : Map;
        Cl = new Ju();
      }
      function eo(h, w) {
        if (!h || uu)
          return "";
        {
          var V = Cl.get(h);
          if (V !== void 0)
            return V;
        }
        var Q;
        uu = !0;
        var ye = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Je;
        Je = ei.current, ei.current = null, El();
        try {
          if (w) {
            var be = function() {
              throw Error();
            };
            if (Object.defineProperty(be.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(be, []);
              } catch (Tn) {
                Q = Tn;
              }
              Reflect.construct(h, [], be);
            } else {
              try {
                be.call();
              } catch (Tn) {
                Q = Tn;
              }
              h.call(be.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Tn) {
              Q = Tn;
            }
            h();
          }
        } catch (Tn) {
          if (Tn && Q && typeof Tn.stack == "string") {
            for (var at = Tn.stack.split(`
`), bt = Q.stack.split(`
`), jt = at.length - 1, vn = bt.length - 1; jt >= 1 && vn >= 0 && at[jt] !== bt[vn]; )
              vn--;
            for (; jt >= 1 && vn >= 0; jt--, vn--)
              if (at[jt] !== bt[vn]) {
                if (jt !== 1 || vn !== 1)
                  do
                    if (jt--, vn--, vn < 0 || at[jt] !== bt[vn]) {
                      var rn = `
` + at[jt].replace(" at new ", " at ");
                      return h.displayName && rn.includes("<anonymous>") && (rn = rn.replace("<anonymous>", h.displayName)), typeof h == "function" && Cl.set(h, rn), rn;
                    }
                  while (jt >= 1 && vn >= 0);
                break;
              }
          }
        } finally {
          uu = !1, ei.current = Je, da(), Error.prepareStackTrace = ye;
        }
        var Tt = h ? h.displayName || h.name : "", an = Tt ? Zu(Tt) : "";
        return typeof h == "function" && Cl.set(h, an), an;
      }
      function Bi(h, w, V) {
        return eo(h, !1);
      }
      function Zf(h) {
        var w = h.prototype;
        return !!(w && w.isReactComponent);
      }
      function $i(h, w, V) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return eo(h, Zf(h));
        if (typeof h == "string")
          return Zu(h);
        switch (h) {
          case K:
            return Zu("Suspense");
          case Z:
            return Zu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case se:
              return Bi(h.render);
            case F:
              return $i(h.type, w, V);
            case he: {
              var Q = h, ye = Q._payload, Je = Q._init;
              try {
                return $i(Je(ye), w, V);
              } catch {
              }
            }
          }
        return "";
      }
      var Vt = {}, to = Dt.ReactDebugCurrentFrame;
      function Ut(h) {
        if (h) {
          var w = h._owner, V = $i(h.type, h._source, w ? w.type : null);
          to.setExtraStackFrame(V);
        } else
          to.setExtraStackFrame(null);
      }
      function Ko(h, w, V, Q, ye) {
        {
          var Je = Function.call.bind(Qt);
          for (var be in h)
            if (Je(h, be)) {
              var at = void 0;
              try {
                if (typeof h[be] != "function") {
                  var bt = Error((Q || "React class") + ": " + V + " type `" + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw bt.name = "Invariant Violation", bt;
                }
                at = h[be](w, be, Q, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (jt) {
                at = jt;
              }
              at && !(at instanceof Error) && (Ut(ye), He("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", V, be, typeof at), Ut(null)), at instanceof Error && !(at.message in Vt) && (Vt[at.message] = !0, Ut(ye), He("Failed %s type: %s", V, at.message), Ut(null));
            }
        }
      }
      function yi(h) {
        if (h) {
          var w = h._owner, V = $i(h.type, h._source, w ? w.type : null);
          ht(V);
        } else
          ht(null);
      }
      var ft;
      ft = !1;
      function no() {
        if (We.current) {
          var h = Zt(We.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function or(h) {
        if (h !== void 0) {
          var w = h.fileName.replace(/^.*[\\\/]/, ""), V = h.lineNumber;
          return `

Check your code at ` + w + ":" + V + ".";
        }
        return "";
      }
      function gi(h) {
        return h != null ? or(h.__source) : "";
      }
      var Nr = {};
      function Si(h) {
        var w = no();
        if (!w) {
          var V = typeof h == "string" ? h : h.displayName || h.name;
          V && (w = `

Check the top-level render call using <` + V + ">.");
        }
        return w;
      }
      function gn(h, w) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var V = Si(w);
          if (!Nr[V]) {
            Nr[V] = !0;
            var Q = "";
            h && h._owner && h._owner !== We.current && (Q = " It was passed a child from " + Zt(h._owner.type) + "."), yi(h), He('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, Q), yi(null);
          }
        }
      }
      function nn(h, w) {
        if (typeof h == "object") {
          if (ct(h))
            for (var V = 0; V < h.length; V++) {
              var Q = h[V];
              Rn(Q) && gn(Q, w);
            }
          else if (Rn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ye = fe(h);
            if (typeof ye == "function" && ye !== h.entries)
              for (var Je = ye.call(h), be; !(be = Je.next()).done; )
                Rn(be.value) && gn(be.value, w);
          }
        }
      }
      function Rl(h) {
        {
          var w = h.type;
          if (w == null || typeof w == "string")
            return;
          var V;
          if (typeof w == "function")
            V = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === se || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === F))
            V = w.propTypes;
          else
            return;
          if (V) {
            var Q = Zt(w);
            Ko(V, h.props, "prop", Q, h);
          } else if (w.PropTypes !== void 0 && !ft) {
            ft = !0;
            var ye = Zt(w);
            He("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ye || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && He("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Gn(h) {
        {
          for (var w = Object.keys(h.props), V = 0; V < w.length; V++) {
            var Q = w[V];
            if (Q !== "children" && Q !== "key") {
              yi(h), He("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), yi(null);
              break;
            }
          }
          h.ref !== null && (yi(h), He("Invalid attribute `ref` supplied to `React.Fragment`."), yi(null));
        }
      }
      function Lr(h, w, V) {
        var Q = ne(h);
        if (!Q) {
          var ye = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = gi(w);
          Je ? ye += Je : ye += no();
          var be;
          h === null ? be = "null" : ct(h) ? be = "array" : h !== void 0 && h.$$typeof === A ? (be = "<" + (Zt(h.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : be = typeof h, He("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", be, ye);
        }
        var at = Rt.apply(this, arguments);
        if (at == null)
          return at;
        if (Q)
          for (var bt = 2; bt < arguments.length; bt++)
            nn(arguments[bt], h);
        return h === I ? Gn(at) : Rl(at), at;
      }
      var ka = !1;
      function ou(h) {
        var w = Lr.bind(null, h);
        return w.type = h, ka || (ka = !0, Mt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return Mt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), w;
      }
      function qo(h, w, V) {
        for (var Q = fn.apply(this, arguments), ye = 2; ye < arguments.length; ye++)
          nn(arguments[ye], Q.type);
        return Rl(Q), Q;
      }
      function Zo(h, w) {
        var V = ce.transition;
        ce.transition = {};
        var Q = ce.transition;
        ce.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ce.transition = V, V === null && Q._updatedFibers) {
            var ye = Q._updatedFibers.size;
            ye > 10 && Mt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Q._updatedFibers.clear();
          }
        }
      }
      var Tl = !1, su = null;
      function Jf(h) {
        if (su === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), V = S && S[w];
            su = V.call(S, "timers").setImmediate;
          } catch {
            su = function(ye) {
              Tl === !1 && (Tl = !0, typeof MessageChannel > "u" && He("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Je = new MessageChannel();
              Je.port1.onmessage = ye, Je.port2.postMessage(void 0);
            };
          }
        return su(h);
      }
      var Da = 0, ni = !1;
      function Ei(h) {
        {
          var w = Da;
          Da++, ve.current === null && (ve.current = []);
          var V = ve.isBatchingLegacy, Q;
          try {
            if (ve.isBatchingLegacy = !0, Q = h(), !V && ve.didScheduleLegacyUpdate) {
              var ye = ve.current;
              ye !== null && (ve.didScheduleLegacyUpdate = !1, wl(ye));
            }
          } catch (Tt) {
            throw Oa(w), Tt;
          } finally {
            ve.isBatchingLegacy = V;
          }
          if (Q !== null && typeof Q == "object" && typeof Q.then == "function") {
            var Je = Q, be = !1, at = {
              then: function(Tt, an) {
                be = !0, Je.then(function(Tn) {
                  Oa(w), Da === 0 ? ro(Tn, Tt, an) : Tt(Tn);
                }, function(Tn) {
                  Oa(w), an(Tn);
                });
              }
            };
            return !ni && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              be || (ni = !0, He("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), at;
          } else {
            var bt = Q;
            if (Oa(w), Da === 0) {
              var jt = ve.current;
              jt !== null && (wl(jt), ve.current = null);
              var vn = {
                then: function(Tt, an) {
                  ve.current === null ? (ve.current = [], ro(bt, Tt, an)) : Tt(bt);
                }
              };
              return vn;
            } else {
              var rn = {
                then: function(Tt, an) {
                  Tt(bt);
                }
              };
              return rn;
            }
          }
        }
      }
      function Oa(h) {
        h !== Da - 1 && He("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Da = h;
      }
      function ro(h, w, V) {
        {
          var Q = ve.current;
          if (Q !== null)
            try {
              wl(Q), Jf(function() {
                Q.length === 0 ? (ve.current = null, w(h)) : ro(h, w, V);
              });
            } catch (ye) {
              V(ye);
            }
          else
            w(h);
        }
      }
      var ao = !1;
      function wl(h) {
        if (!ao) {
          ao = !0;
          var w = 0;
          try {
            for (; w < h.length; w++) {
              var V = h[w];
              do
                V = V(!0);
              while (V !== null);
            }
            h.length = 0;
          } catch (Q) {
            throw h = h.slice(w + 1), Q;
          } finally {
            ao = !1;
          }
        }
      }
      var cu = Lr, io = qo, lo = ou, ri = {
        map: Vi,
        forEach: ru,
        count: nu,
        toArray: ml,
        only: yl
      };
      R.Children = ri, R.Component = H, R.Fragment = I, R.Profiler = te, R.PureComponent = Re, R.StrictMode = y, R.Suspense = K, R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dt, R.act = Ei, R.cloneElement = io, R.createContext = au, R.createElement = cu, R.createFactory = lo, R.createRef = Ee, R.forwardRef = mi, R.isValidElement = Rn, R.lazy = hi, R.memo = ke, R.startTransition = Zo, R.unstable_act = Ei, R.useCallback = ur, R.useContext = yt, R.useDebugValue = gt, R.useDeferredValue = Ja, R.useEffect = On, R.useId = iu, R.useImperativeHandle = Za, R.useInsertionEffect = pn, R.useLayoutEffect = yn, R.useMemo = qa, R.useReducer = _t, R.useRef = wt, R.useState = dt, R.useSyncExternalStore = lu, R.useTransition = Ct, R.version = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(lv, lv.exports)), lv.exports;
}
process.env.NODE_ENV === "production" ? _0.exports = wk() : _0.exports = xk();
var Jt = _0.exports;
const _k = /* @__PURE__ */ Tk(Jt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hT;
function bk() {
  if (hT) return rv;
  hT = 1;
  var S = Jt, R = Symbol.for("react.element"), E = Symbol.for("react.fragment"), A = Object.prototype.hasOwnProperty, j = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(te, W, M) {
    var se, K = {}, Z = null, F = null;
    M !== void 0 && (Z = "" + M), W.key !== void 0 && (Z = "" + W.key), W.ref !== void 0 && (F = W.ref);
    for (se in W) A.call(W, se) && !I.hasOwnProperty(se) && (K[se] = W[se]);
    if (te && te.defaultProps) for (se in W = te.defaultProps, W) K[se] === void 0 && (K[se] = W[se]);
    return { $$typeof: R, type: te, key: Z, ref: F, props: K, _owner: j.current };
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
var mT;
function kk() {
  return mT || (mT = 1, process.env.NODE_ENV !== "production" && function() {
    var S = Jt, R = Symbol.for("react.element"), E = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), te = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), se = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), he = Symbol.iterator, ee = "@@iterator";
    function $(x) {
      if (x === null || typeof x != "object")
        return null;
      var ne = he && x[he] || x[ee];
      return typeof ne == "function" ? ne : null;
    }
    var re = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function fe(x) {
      {
        for (var ne = arguments.length, ke = new Array(ne > 1 ? ne - 1 : 0), Ue = 1; Ue < ne; Ue++)
          ke[Ue - 1] = arguments[Ue];
        Ce("error", x, ke);
      }
    }
    function Ce(x, ne, ke) {
      {
        var Ue = re.ReactDebugCurrentFrame, yt = Ue.getStackAddendum();
        yt !== "" && (ne += "%s", ke = ke.concat([yt]));
        var dt = ke.map(function(_t) {
          return String(_t);
        });
        dt.unshift("Warning: " + ne), Function.prototype.apply.call(console[x], console, dt);
      }
    }
    var ce = !1, ve = !1, We = !1, je = !1, ot = !1, ht;
    ht = Symbol.for("react.module.reference");
    function nt(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === A || x === I || ot || x === j || x === M || x === se || je || x === F || ce || ve || We || typeof x == "object" && x !== null && (x.$$typeof === Z || x.$$typeof === K || x.$$typeof === y || x.$$typeof === te || x.$$typeof === W || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === ht || x.getModuleId !== void 0));
    }
    function Et(x, ne, ke) {
      var Ue = x.displayName;
      if (Ue)
        return Ue;
      var yt = ne.displayName || ne.name || "";
      return yt !== "" ? ke + "(" + yt + ")" : ke;
    }
    function mt(x) {
      return x.displayName || "Context";
    }
    function Fe(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && fe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case A:
          return "Fragment";
        case E:
          return "Portal";
        case I:
          return "Profiler";
        case j:
          return "StrictMode";
        case M:
          return "Suspense";
        case se:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case te:
            var ne = x;
            return mt(ne) + ".Consumer";
          case y:
            var ke = x;
            return mt(ke._context) + ".Provider";
          case W:
            return Et(x, x.render, "ForwardRef");
          case K:
            var Ue = x.displayName || null;
            return Ue !== null ? Ue : Fe(x.type) || "Memo";
          case Z: {
            var yt = x, dt = yt._payload, _t = yt._init;
            try {
              return Fe(_t(dt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ft = Object.assign, Dt = 0, Mt, He, me, $e, we, O, q;
    function rt() {
    }
    rt.__reactDisabledLog = !0;
    function H() {
      {
        if (Dt === 0) {
          Mt = console.log, He = console.info, me = console.warn, $e = console.error, we = console.group, O = console.groupCollapsed, q = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: rt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        Dt++;
      }
    }
    function oe() {
      {
        if (Dt--, Dt === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ft({}, x, {
              value: Mt
            }),
            info: Ft({}, x, {
              value: He
            }),
            warn: Ft({}, x, {
              value: me
            }),
            error: Ft({}, x, {
              value: $e
            }),
            group: Ft({}, x, {
              value: we
            }),
            groupCollapsed: Ft({}, x, {
              value: O
            }),
            groupEnd: Ft({}, x, {
              value: q
            })
          });
        }
        Dt < 0 && fe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = re.ReactCurrentDispatcher, Se;
    function _e(x, ne, ke) {
      {
        if (Se === void 0)
          try {
            throw Error();
          } catch (yt) {
            var Ue = yt.stack.trim().match(/\n( *(at )?)/);
            Se = Ue && Ue[1] || "";
          }
        return `
` + Se + x;
      }
    }
    var Re = !1, Ze;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      Ze = new Ee();
    }
    function Ye(x, ne) {
      if (!x || Re)
        return "";
      {
        var ke = Ze.get(x);
        if (ke !== void 0)
          return ke;
      }
      var Ue;
      Re = !0;
      var yt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var dt;
      dt = ge.current, ge.current = null, H();
      try {
        if (ne) {
          var _t = function() {
            throw Error();
          };
          if (Object.defineProperty(_t.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_t, []);
            } catch (gt) {
              Ue = gt;
            }
            Reflect.construct(x, [], _t);
          } else {
            try {
              _t.call();
            } catch (gt) {
              Ue = gt;
            }
            x.call(_t.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gt) {
            Ue = gt;
          }
          x();
        }
      } catch (gt) {
        if (gt && Ue && typeof gt.stack == "string") {
          for (var wt = gt.stack.split(`
`), On = Ue.stack.split(`
`), pn = wt.length - 1, yn = On.length - 1; pn >= 1 && yn >= 0 && wt[pn] !== On[yn]; )
            yn--;
          for (; pn >= 1 && yn >= 0; pn--, yn--)
            if (wt[pn] !== On[yn]) {
              if (pn !== 1 || yn !== 1)
                do
                  if (pn--, yn--, yn < 0 || wt[pn] !== On[yn]) {
                    var ur = `
` + wt[pn].replace(" at new ", " at ");
                    return x.displayName && ur.includes("<anonymous>") && (ur = ur.replace("<anonymous>", x.displayName)), typeof x == "function" && Ze.set(x, ur), ur;
                  }
                while (pn >= 1 && yn >= 0);
              break;
            }
        }
      } finally {
        Re = !1, ge.current = dt, oe(), Error.prepareStackTrace = yt;
      }
      var qa = x ? x.displayName || x.name : "", Za = qa ? _e(qa) : "";
      return typeof x == "function" && Ze.set(x, Za), Za;
    }
    function ct(x, ne, ke) {
      return Ye(x, !1);
    }
    function qt(x) {
      var ne = x.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function cn(x, ne, ke) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return Ye(x, qt(x));
      if (typeof x == "string")
        return _e(x);
      switch (x) {
        case M:
          return _e("Suspense");
        case se:
          return _e("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case W:
            return ct(x.render);
          case K:
            return cn(x.type, ne, ke);
          case Z: {
            var Ue = x, yt = Ue._payload, dt = Ue._init;
            try {
              return cn(dt(yt), ne, ke);
            } catch {
            }
          }
        }
      return "";
    }
    var jn = Object.prototype.hasOwnProperty, ir = {}, _a = re.ReactDebugCurrentFrame;
    function kr(x) {
      if (x) {
        var ne = x._owner, ke = cn(x.type, x._source, ne ? ne.type : null);
        _a.setExtraStackFrame(ke);
      } else
        _a.setExtraStackFrame(null);
    }
    function Zt(x, ne, ke, Ue, yt) {
      {
        var dt = Function.call.bind(jn);
        for (var _t in x)
          if (dt(x, _t)) {
            var wt = void 0;
            try {
              if (typeof x[_t] != "function") {
                var On = Error((Ue || "React class") + ": " + ke + " type `" + _t + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[_t] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw On.name = "Invariant Violation", On;
              }
              wt = x[_t](ne, _t, Ue, ke, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pn) {
              wt = pn;
            }
            wt && !(wt instanceof Error) && (kr(yt), fe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ue || "React class", ke, _t, typeof wt), kr(null)), wt instanceof Error && !(wt.message in ir) && (ir[wt.message] = !0, kr(yt), fe("Failed %s type: %s", ke, wt.message), kr(null));
          }
      }
    }
    var Qt = Array.isArray;
    function Dn(x) {
      return Qt(x);
    }
    function Cr(x) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, ke = ne && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return ke;
      }
    }
    function Ga(x) {
      try {
        return Fn(x), !1;
      } catch {
        return !0;
      }
    }
    function Fn(x) {
      return "" + x;
    }
    function Rr(x) {
      if (Ga(x))
        return fe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(x)), Fn(x);
    }
    var ca = re.ReactCurrentOwner, Xa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pi, Te;
    function Qe(x) {
      if (jn.call(x, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Rt(x) {
      if (jn.call(x, "key")) {
        var ne = Object.getOwnPropertyDescriptor(x, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function Gt(x, ne) {
      typeof x.ref == "string" && ca.current;
    }
    function fn(x, ne) {
      {
        var ke = function() {
          pi || (pi = !0, fe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        ke.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: ke,
          configurable: !0
        });
      }
    }
    function Rn(x, ne) {
      {
        var ke = function() {
          Te || (Te = !0, fe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        ke.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: ke,
          configurable: !0
        });
      }
    }
    var mn = function(x, ne, ke, Ue, yt, dt, _t) {
      var wt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: x,
        key: ne,
        ref: ke,
        props: _t,
        // Record the component responsible for creating this element.
        _owner: dt
      };
      return wt._store = {}, Object.defineProperty(wt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(wt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ue
      }), Object.defineProperty(wt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: yt
      }), Object.freeze && (Object.freeze(wt.props), Object.freeze(wt)), wt;
    };
    function Jn(x, ne, ke, Ue, yt) {
      {
        var dt, _t = {}, wt = null, On = null;
        ke !== void 0 && (Rr(ke), wt = "" + ke), Rt(ne) && (Rr(ne.key), wt = "" + ne.key), Qe(ne) && (On = ne.ref, Gt(ne, yt));
        for (dt in ne)
          jn.call(ne, dt) && !Xa.hasOwnProperty(dt) && (_t[dt] = ne[dt]);
        if (x && x.defaultProps) {
          var pn = x.defaultProps;
          for (dt in pn)
            _t[dt] === void 0 && (_t[dt] = pn[dt]);
        }
        if (wt || On) {
          var yn = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          wt && fn(_t, yn), On && Rn(_t, yn);
        }
        return mn(x, wt, On, yt, Ue, ca.current, _t);
      }
    }
    var dn = re.ReactCurrentOwner, en = re.ReactDebugCurrentFrame;
    function tn(x) {
      if (x) {
        var ne = x._owner, ke = cn(x.type, x._source, ne ? ne.type : null);
        en.setExtraStackFrame(ke);
      } else
        en.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function Tr(x) {
      return typeof x == "object" && x !== null && x.$$typeof === R;
    }
    function ba() {
      {
        if (dn.current) {
          var x = Fe(dn.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function Vi(x) {
      return "";
    }
    var nu = {};
    function ru(x) {
      {
        var ne = ba();
        if (!ne) {
          var ke = typeof x == "string" ? x : x.displayName || x.name;
          ke && (ne = `

Check the top-level render call using <` + ke + ">.");
        }
        return ne;
      }
    }
    function ml(x, ne) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var ke = ru(ne);
        if (nu[ke])
          return;
        nu[ke] = !0;
        var Ue = "";
        x && x._owner && x._owner !== dn.current && (Ue = " It was passed a child from " + Fe(x._owner.type) + "."), tn(x), fe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ke, Ue), tn(null);
      }
    }
    function yl(x, ne) {
      {
        if (typeof x != "object")
          return;
        if (Dn(x))
          for (var ke = 0; ke < x.length; ke++) {
            var Ue = x[ke];
            Tr(Ue) && ml(Ue, ne);
          }
        else if (Tr(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var yt = $(x);
          if (typeof yt == "function" && yt !== x.entries)
            for (var dt = yt.call(x), _t; !(_t = dt.next()).done; )
              Tr(_t.value) && ml(_t.value, ne);
        }
      }
    }
    function au(x) {
      {
        var ne = x.type;
        if (ne == null || typeof ne == "string")
          return;
        var ke;
        if (typeof ne == "function")
          ke = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === W || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === K))
          ke = ne.propTypes;
        else
          return;
        if (ke) {
          var Ue = Fe(ne);
          Zt(ke, x.props, "prop", Ue, x);
        } else if (ne.PropTypes !== void 0 && !fa) {
          fa = !0;
          var yt = Fe(ne);
          fe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", yt || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && fe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dr(x) {
      {
        for (var ne = Object.keys(x.props), ke = 0; ke < ne.length; ke++) {
          var Ue = ne[ke];
          if (Ue !== "children" && Ue !== "key") {
            tn(x), fe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ue), tn(null);
            break;
          }
        }
        x.ref !== null && (tn(x), fe("Invalid attribute `ref` supplied to `React.Fragment`."), tn(null));
      }
    }
    var Or = {};
    function lr(x, ne, ke, Ue, yt, dt) {
      {
        var _t = nt(x);
        if (!_t) {
          var wt = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (wt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var On = Vi();
          On ? wt += On : wt += ba();
          var pn;
          x === null ? pn = "null" : Dn(x) ? pn = "array" : x !== void 0 && x.$$typeof === R ? (pn = "<" + (Fe(x.type) || "Unknown") + " />", wt = " Did you accidentally export a JSX literal instead of a component?") : pn = typeof x, fe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pn, wt);
        }
        var yn = Jn(x, ne, ke, yt, dt);
        if (yn == null)
          return yn;
        if (_t) {
          var ur = ne.children;
          if (ur !== void 0)
            if (Ue)
              if (Dn(ur)) {
                for (var qa = 0; qa < ur.length; qa++)
                  yl(ur[qa], x);
                Object.freeze && Object.freeze(ur);
              } else
                fe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yl(ur, x);
        }
        if (jn.call(ne, "key")) {
          var Za = Fe(x), gt = Object.keys(ne).filter(function(iu) {
            return iu !== "key";
          }), Ct = gt.length > 0 ? "{key: someKey, " + gt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Or[Za + Ct]) {
            var Ja = gt.length > 0 ? "{" + gt.join(": ..., ") + ": ...}" : "{}";
            fe(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ct, Za, Ja, Za), Or[Za + Ct] = !0;
          }
        }
        return x === A ? Dr(yn) : au(yn), yn;
      }
    }
    function vi(x, ne, ke) {
      return lr(x, ne, ke, !0);
    }
    function Ka(x, ne, ke) {
      return lr(x, ne, ke, !1);
    }
    var hi = Ka, mi = vi;
    av.Fragment = A, av.jsx = hi, av.jsxs = mi;
  }()), av;
}
process.env.NODE_ENV === "production" ? x0.exports = bk() : x0.exports = kk();
var Pt = x0.exports, b0 = { exports: {} }, Wa = {}, ty = { exports: {} }, T0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yT;
function Dk() {
  return yT || (yT = 1, function(S) {
    function R(me, $e) {
      var we = me.length;
      me.push($e);
      e: for (; 0 < we; ) {
        var O = we - 1 >>> 1, q = me[O];
        if (0 < j(q, $e)) me[O] = $e, me[we] = q, we = O;
        else break e;
      }
    }
    function E(me) {
      return me.length === 0 ? null : me[0];
    }
    function A(me) {
      if (me.length === 0) return null;
      var $e = me[0], we = me.pop();
      if (we !== $e) {
        me[0] = we;
        e: for (var O = 0, q = me.length, rt = q >>> 1; O < rt; ) {
          var H = 2 * (O + 1) - 1, oe = me[H], ge = H + 1, Se = me[ge];
          if (0 > j(oe, we)) ge < q && 0 > j(Se, oe) ? (me[O] = Se, me[ge] = we, O = ge) : (me[O] = oe, me[H] = we, O = H);
          else if (ge < q && 0 > j(Se, we)) me[O] = Se, me[ge] = we, O = ge;
          else break e;
        }
      }
      return $e;
    }
    function j(me, $e) {
      var we = me.sortIndex - $e.sortIndex;
      return we !== 0 ? we : me.id - $e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var I = performance;
      S.unstable_now = function() {
        return I.now();
      };
    } else {
      var y = Date, te = y.now();
      S.unstable_now = function() {
        return y.now() - te;
      };
    }
    var W = [], M = [], se = 1, K = null, Z = 3, F = !1, he = !1, ee = !1, $ = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ce(me) {
      for (var $e = E(M); $e !== null; ) {
        if ($e.callback === null) A(M);
        else if ($e.startTime <= me) A(M), $e.sortIndex = $e.expirationTime, R(W, $e);
        else break;
        $e = E(M);
      }
    }
    function ce(me) {
      if (ee = !1, Ce(me), !he) if (E(W) !== null) he = !0, Mt(ve);
      else {
        var $e = E(M);
        $e !== null && He(ce, $e.startTime - me);
      }
    }
    function ve(me, $e) {
      he = !1, ee && (ee = !1, re(ot), ot = -1), F = !0;
      var we = Z;
      try {
        for (Ce($e), K = E(W); K !== null && (!(K.expirationTime > $e) || me && !Et()); ) {
          var O = K.callback;
          if (typeof O == "function") {
            K.callback = null, Z = K.priorityLevel;
            var q = O(K.expirationTime <= $e);
            $e = S.unstable_now(), typeof q == "function" ? K.callback = q : K === E(W) && A(W), Ce($e);
          } else A(W);
          K = E(W);
        }
        if (K !== null) var rt = !0;
        else {
          var H = E(M);
          H !== null && He(ce, H.startTime - $e), rt = !1;
        }
        return rt;
      } finally {
        K = null, Z = we, F = !1;
      }
    }
    var We = !1, je = null, ot = -1, ht = 5, nt = -1;
    function Et() {
      return !(S.unstable_now() - nt < ht);
    }
    function mt() {
      if (je !== null) {
        var me = S.unstable_now();
        nt = me;
        var $e = !0;
        try {
          $e = je(!0, me);
        } finally {
          $e ? Fe() : (We = !1, je = null);
        }
      } else We = !1;
    }
    var Fe;
    if (typeof fe == "function") Fe = function() {
      fe(mt);
    };
    else if (typeof MessageChannel < "u") {
      var Ft = new MessageChannel(), Dt = Ft.port2;
      Ft.port1.onmessage = mt, Fe = function() {
        Dt.postMessage(null);
      };
    } else Fe = function() {
      $(mt, 0);
    };
    function Mt(me) {
      je = me, We || (We = !0, Fe());
    }
    function He(me, $e) {
      ot = $(function() {
        me(S.unstable_now());
      }, $e);
    }
    S.unstable_IdlePriority = 5, S.unstable_ImmediatePriority = 1, S.unstable_LowPriority = 4, S.unstable_NormalPriority = 3, S.unstable_Profiling = null, S.unstable_UserBlockingPriority = 2, S.unstable_cancelCallback = function(me) {
      me.callback = null;
    }, S.unstable_continueExecution = function() {
      he || F || (he = !0, Mt(ve));
    }, S.unstable_forceFrameRate = function(me) {
      0 > me || 125 < me ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ht = 0 < me ? Math.floor(1e3 / me) : 5;
    }, S.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, S.unstable_getFirstCallbackNode = function() {
      return E(W);
    }, S.unstable_next = function(me) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var $e = 3;
          break;
        default:
          $e = Z;
      }
      var we = Z;
      Z = $e;
      try {
        return me();
      } finally {
        Z = we;
      }
    }, S.unstable_pauseExecution = function() {
    }, S.unstable_requestPaint = function() {
    }, S.unstable_runWithPriority = function(me, $e) {
      switch (me) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          me = 3;
      }
      var we = Z;
      Z = me;
      try {
        return $e();
      } finally {
        Z = we;
      }
    }, S.unstable_scheduleCallback = function(me, $e, we) {
      var O = S.unstable_now();
      switch (typeof we == "object" && we !== null ? (we = we.delay, we = typeof we == "number" && 0 < we ? O + we : O) : we = O, me) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return q = we + q, me = { id: se++, callback: $e, priorityLevel: me, startTime: we, expirationTime: q, sortIndex: -1 }, we > O ? (me.sortIndex = we, R(M, me), E(W) === null && me === E(M) && (ee ? (re(ot), ot = -1) : ee = !0, He(ce, we - O))) : (me.sortIndex = q, R(W, me), he || F || (he = !0, Mt(ve))), me;
    }, S.unstable_shouldYield = Et, S.unstable_wrapCallback = function(me) {
      var $e = Z;
      return function() {
        var we = Z;
        Z = $e;
        try {
          return me.apply(this, arguments);
        } finally {
          Z = we;
        }
      };
    };
  }(T0)), T0;
}
var w0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gT;
function Ok() {
  return gT || (gT = 1, function(S) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var R = !1, E = 5;
      function A(Te, Qe) {
        var Rt = Te.length;
        Te.push(Qe), y(Te, Qe, Rt);
      }
      function j(Te) {
        return Te.length === 0 ? null : Te[0];
      }
      function I(Te) {
        if (Te.length === 0)
          return null;
        var Qe = Te[0], Rt = Te.pop();
        return Rt !== Qe && (Te[0] = Rt, te(Te, Rt, 0)), Qe;
      }
      function y(Te, Qe, Rt) {
        for (var Gt = Rt; Gt > 0; ) {
          var fn = Gt - 1 >>> 1, Rn = Te[fn];
          if (W(Rn, Qe) > 0)
            Te[fn] = Qe, Te[Gt] = Rn, Gt = fn;
          else
            return;
        }
      }
      function te(Te, Qe, Rt) {
        for (var Gt = Rt, fn = Te.length, Rn = fn >>> 1; Gt < Rn; ) {
          var mn = (Gt + 1) * 2 - 1, Jn = Te[mn], dn = mn + 1, en = Te[dn];
          if (W(Jn, Qe) < 0)
            dn < fn && W(en, Jn) < 0 ? (Te[Gt] = en, Te[dn] = Qe, Gt = dn) : (Te[Gt] = Jn, Te[mn] = Qe, Gt = mn);
          else if (dn < fn && W(en, Qe) < 0)
            Te[Gt] = en, Te[dn] = Qe, Gt = dn;
          else
            return;
        }
      }
      function W(Te, Qe) {
        var Rt = Te.sortIndex - Qe.sortIndex;
        return Rt !== 0 ? Rt : Te.id - Qe.id;
      }
      var M = 1, se = 2, K = 3, Z = 4, F = 5;
      function he(Te, Qe) {
      }
      var ee = typeof performance == "object" && typeof performance.now == "function";
      if (ee) {
        var $ = performance;
        S.unstable_now = function() {
          return $.now();
        };
      } else {
        var re = Date, fe = re.now();
        S.unstable_now = function() {
          return re.now() - fe;
        };
      }
      var Ce = 1073741823, ce = -1, ve = 250, We = 5e3, je = 1e4, ot = Ce, ht = [], nt = [], Et = 1, mt = null, Fe = K, Ft = !1, Dt = !1, Mt = !1, He = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, $e = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function we(Te) {
        for (var Qe = j(nt); Qe !== null; ) {
          if (Qe.callback === null)
            I(nt);
          else if (Qe.startTime <= Te)
            I(nt), Qe.sortIndex = Qe.expirationTime, A(ht, Qe);
          else
            return;
          Qe = j(nt);
        }
      }
      function O(Te) {
        if (Mt = !1, we(Te), !Dt)
          if (j(ht) !== null)
            Dt = !0, Fn(q);
          else {
            var Qe = j(nt);
            Qe !== null && Rr(O, Qe.startTime - Te);
          }
      }
      function q(Te, Qe) {
        Dt = !1, Mt && (Mt = !1, ca()), Ft = !0;
        var Rt = Fe;
        try {
          var Gt;
          if (!R) return rt(Te, Qe);
        } finally {
          mt = null, Fe = Rt, Ft = !1;
        }
      }
      function rt(Te, Qe) {
        var Rt = Qe;
        for (we(Rt), mt = j(ht); mt !== null && !(mt.expirationTime > Rt && (!Te || _a())); ) {
          var Gt = mt.callback;
          if (typeof Gt == "function") {
            mt.callback = null, Fe = mt.priorityLevel;
            var fn = mt.expirationTime <= Rt, Rn = Gt(fn);
            Rt = S.unstable_now(), typeof Rn == "function" ? mt.callback = Rn : mt === j(ht) && I(ht), we(Rt);
          } else
            I(ht);
          mt = j(ht);
        }
        if (mt !== null)
          return !0;
        var mn = j(nt);
        return mn !== null && Rr(O, mn.startTime - Rt), !1;
      }
      function H(Te, Qe) {
        switch (Te) {
          case M:
          case se:
          case K:
          case Z:
          case F:
            break;
          default:
            Te = K;
        }
        var Rt = Fe;
        Fe = Te;
        try {
          return Qe();
        } finally {
          Fe = Rt;
        }
      }
      function oe(Te) {
        var Qe;
        switch (Fe) {
          case M:
          case se:
          case K:
            Qe = K;
            break;
          default:
            Qe = Fe;
            break;
        }
        var Rt = Fe;
        Fe = Qe;
        try {
          return Te();
        } finally {
          Fe = Rt;
        }
      }
      function ge(Te) {
        var Qe = Fe;
        return function() {
          var Rt = Fe;
          Fe = Qe;
          try {
            return Te.apply(this, arguments);
          } finally {
            Fe = Rt;
          }
        };
      }
      function Se(Te, Qe, Rt) {
        var Gt = S.unstable_now(), fn;
        if (typeof Rt == "object" && Rt !== null) {
          var Rn = Rt.delay;
          typeof Rn == "number" && Rn > 0 ? fn = Gt + Rn : fn = Gt;
        } else
          fn = Gt;
        var mn;
        switch (Te) {
          case M:
            mn = ce;
            break;
          case se:
            mn = ve;
            break;
          case F:
            mn = ot;
            break;
          case Z:
            mn = je;
            break;
          case K:
          default:
            mn = We;
            break;
        }
        var Jn = fn + mn, dn = {
          id: Et++,
          callback: Qe,
          priorityLevel: Te,
          startTime: fn,
          expirationTime: Jn,
          sortIndex: -1
        };
        return fn > Gt ? (dn.sortIndex = fn, A(nt, dn), j(ht) === null && dn === j(nt) && (Mt ? ca() : Mt = !0, Rr(O, fn - Gt))) : (dn.sortIndex = Jn, A(ht, dn), !Dt && !Ft && (Dt = !0, Fn(q))), dn;
      }
      function _e() {
      }
      function Re() {
        !Dt && !Ft && (Dt = !0, Fn(q));
      }
      function Ze() {
        return j(ht);
      }
      function Ee(Te) {
        Te.callback = null;
      }
      function Ye() {
        return Fe;
      }
      var ct = !1, qt = null, cn = -1, jn = E, ir = -1;
      function _a() {
        var Te = S.unstable_now() - ir;
        return !(Te < jn);
      }
      function kr() {
      }
      function Zt(Te) {
        if (Te < 0 || Te > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Te > 0 ? jn = Math.floor(1e3 / Te) : jn = E;
      }
      var Qt = function() {
        if (qt !== null) {
          var Te = S.unstable_now();
          ir = Te;
          var Qe = !0, Rt = !0;
          try {
            Rt = qt(Qe, Te);
          } finally {
            Rt ? Dn() : (ct = !1, qt = null);
          }
        } else
          ct = !1;
      }, Dn;
      if (typeof $e == "function")
        Dn = function() {
          $e(Qt);
        };
      else if (typeof MessageChannel < "u") {
        var Cr = new MessageChannel(), Ga = Cr.port2;
        Cr.port1.onmessage = Qt, Dn = function() {
          Ga.postMessage(null);
        };
      } else
        Dn = function() {
          He(Qt, 0);
        };
      function Fn(Te) {
        qt = Te, ct || (ct = !0, Dn());
      }
      function Rr(Te, Qe) {
        cn = He(function() {
          Te(S.unstable_now());
        }, Qe);
      }
      function ca() {
        me(cn), cn = -1;
      }
      var Xa = kr, pi = null;
      S.unstable_IdlePriority = F, S.unstable_ImmediatePriority = M, S.unstable_LowPriority = Z, S.unstable_NormalPriority = K, S.unstable_Profiling = pi, S.unstable_UserBlockingPriority = se, S.unstable_cancelCallback = Ee, S.unstable_continueExecution = Re, S.unstable_forceFrameRate = Zt, S.unstable_getCurrentPriorityLevel = Ye, S.unstable_getFirstCallbackNode = Ze, S.unstable_next = oe, S.unstable_pauseExecution = _e, S.unstable_requestPaint = Xa, S.unstable_runWithPriority = H, S.unstable_scheduleCallback = Se, S.unstable_shouldYield = _a, S.unstable_wrapCallback = ge, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(w0)), w0;
}
var ST;
function kT() {
  return ST || (ST = 1, process.env.NODE_ENV === "production" ? ty.exports = Dk() : ty.exports = Ok()), ty.exports;
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
var ET;
function Mk() {
  if (ET) return Wa;
  ET = 1;
  var S = Jt, R = kT();
  function E(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A = /* @__PURE__ */ new Set(), j = {};
  function I(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (j[n] = r, n = 0; n < r.length; n++) A.add(r[n]);
  }
  var te = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), W = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, se = {}, K = {};
  function Z(n) {
    return W.call(K, n) ? !0 : W.call(se, n) ? !1 : M.test(n) ? K[n] = !0 : (se[n] = !0, !1);
  }
  function F(n, r, l, o) {
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
    if (r === null || typeof r > "u" || F(n, r, l, o)) return !0;
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
  function ee(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    $[n] = new ee(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    $[r] = new ee(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    $[n] = new ee(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    $[n] = new ee(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    $[n] = new ee(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    $[n] = new ee(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    $[n] = new ee(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    $[n] = new ee(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    $[n] = new ee(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var re = /[\-:]([a-z])/g;
  function fe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      re,
      fe
    );
    $[r] = new ee(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(re, fe);
    $[r] = new ee(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(re, fe);
    $[r] = new ee(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    $[n] = new ee(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    $[n] = new ee(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ce(n, r, l, o) {
    var c = $.hasOwnProperty(r) ? $[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (he(r, l, c, o) && (l = null), o || c === null ? Z(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ce = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ve = Symbol.for("react.element"), We = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), ot = Symbol.for("react.strict_mode"), ht = Symbol.for("react.profiler"), nt = Symbol.for("react.provider"), Et = Symbol.for("react.context"), mt = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), Ft = Symbol.for("react.suspense_list"), Dt = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), He = Symbol.for("react.offscreen"), me = Symbol.iterator;
  function $e(n) {
    return n === null || typeof n != "object" ? null : (n = me && n[me] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var we = Object.assign, O;
  function q(n) {
    if (O === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      O = r && r[1] || "";
    }
    return `
` + O + n;
  }
  var rt = !1;
  function H(n, r) {
    if (!n || rt) return "";
    rt = !0;
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
        } catch (B) {
          var o = B;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (B) {
          o = B;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (B) {
          o = B;
        }
        n();
      }
    } catch (B) {
      if (B && o && typeof B.stack == "string") {
        for (var c = B.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, T = d.length - 1; 1 <= m && 0 <= T && c[m] !== d[T]; ) T--;
        for (; 1 <= m && 0 <= T; m--, T--) if (c[m] !== d[T]) {
          if (m !== 1 || T !== 1)
            do
              if (m--, T--, 0 > T || c[m] !== d[T]) {
                var _ = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", n.displayName)), _;
              }
            while (1 <= m && 0 <= T);
          break;
        }
      }
    } finally {
      rt = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? q(n) : "";
  }
  function oe(n) {
    switch (n.tag) {
      case 5:
        return q(n.type);
      case 16:
        return q("Lazy");
      case 13:
        return q("Suspense");
      case 19:
        return q("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = H(n.type, !1), n;
      case 11:
        return n = H(n.type.render, !1), n;
      case 1:
        return n = H(n.type, !0), n;
      default:
        return "";
    }
  }
  function ge(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case je:
        return "Fragment";
      case We:
        return "Portal";
      case ht:
        return "Profiler";
      case ot:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case Ft:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Et:
        return (n.displayName || "Context") + ".Consumer";
      case nt:
        return (n._context.displayName || "Context") + ".Provider";
      case mt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Dt:
        return r = n.displayName || null, r !== null ? r : ge(n.type) || "Memo";
      case Mt:
        r = n._payload, n = n._init;
        try {
          return ge(n(r));
        } catch {
        }
    }
    return null;
  }
  function Se(n) {
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
        return ge(r);
      case 8:
        return r === ot ? "StrictMode" : "Mode";
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
  function _e(n) {
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
  function Re(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ze(n) {
    var r = Re(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function Ee(n) {
    n._valueTracker || (n._valueTracker = Ze(n));
  }
  function Ye(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Re(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ct(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function qt(n, r) {
    var l = r.checked;
    return we({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function cn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = _e(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function jn(n, r) {
    r = r.checked, r != null && Ce(n, "checked", r, !1);
  }
  function ir(n, r) {
    jn(n, r);
    var l = _e(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? kr(n, r.type, l) : r.hasOwnProperty("defaultValue") && kr(n, r.type, _e(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function _a(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function kr(n, r, l) {
    (r !== "number" || ct(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Zt = Array.isArray;
  function Qt(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + _e(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Dn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(E(91));
    return we({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Cr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(E(92));
        if (Zt(l)) {
          if (1 < l.length) throw Error(E(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: _e(l) };
  }
  function Ga(n, r) {
    var l = _e(r.value), o = _e(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Fn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Rr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ca(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Rr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Xa, pi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Xa = Xa || document.createElement("div"), Xa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Xa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Te(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Qe = {
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
  }, Rt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Qe).forEach(function(n) {
    Rt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Qe[r] = Qe[n];
    });
  });
  function Gt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Qe.hasOwnProperty(n) && Qe[n] ? ("" + r).trim() : r + "px";
  }
  function fn(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Gt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Rn = we({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function mn(n, r) {
    if (r) {
      if (Rn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(E(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(E(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(E(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(E(62));
    }
  }
  function Jn(n, r) {
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
  var dn = null;
  function en(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var tn = null, fa = null, Tr = null;
  function ba(n) {
    if (n = Ke(n)) {
      if (typeof tn != "function") throw Error(E(280));
      var r = n.stateNode;
      r && (r = wn(r), tn(n.stateNode, n.type, r));
    }
  }
  function Vi(n) {
    fa ? Tr ? Tr.push(n) : Tr = [n] : fa = n;
  }
  function nu() {
    if (fa) {
      var n = fa, r = Tr;
      if (Tr = fa = null, ba(n), r) for (n = 0; n < r.length; n++) ba(r[n]);
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
      yl = !1, (fa !== null || Tr !== null) && (ml(), nu());
    }
  }
  function Dr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = wn(l);
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
  var Or = !1;
  if (te) try {
    var lr = {};
    Object.defineProperty(lr, "passive", { get: function() {
      Or = !0;
    } }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
  } catch {
    Or = !1;
  }
  function vi(n, r, l, o, c, d, m, T, _) {
    var B = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, B);
    } catch (le) {
      this.onError(le);
    }
  }
  var Ka = !1, hi = null, mi = !1, x = null, ne = { onError: function(n) {
    Ka = !0, hi = n;
  } };
  function ke(n, r, l, o, c, d, m, T, _) {
    Ka = !1, hi = null, vi.apply(ne, arguments);
  }
  function Ue(n, r, l, o, c, d, m, T, _) {
    if (ke.apply(this, arguments), Ka) {
      if (Ka) {
        var B = hi;
        Ka = !1, hi = null;
      } else throw Error(E(198));
      mi || (mi = !0, x = B);
    }
  }
  function yt(n) {
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
  function dt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function _t(n) {
    if (yt(n) !== n) throw Error(E(188));
  }
  function wt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = yt(n), r === null) throw Error(E(188));
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
          if (d === l) return _t(c), n;
          if (d === o) return _t(c), r;
          d = d.sibling;
        }
        throw Error(E(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, T = c.child; T; ) {
          if (T === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (T === o) {
            m = !0, o = c, l = d;
            break;
          }
          T = T.sibling;
        }
        if (!m) {
          for (T = d.child; T; ) {
            if (T === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (T === o) {
              m = !0, o = d, l = c;
              break;
            }
            T = T.sibling;
          }
          if (!m) throw Error(E(189));
        }
      }
      if (l.alternate !== o) throw Error(E(190));
    }
    if (l.tag !== 3) throw Error(E(188));
    return l.stateNode.current === l ? n : r;
  }
  function On(n) {
    return n = wt(n), n !== null ? pn(n) : null;
  }
  function pn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = pn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var yn = R.unstable_scheduleCallback, ur = R.unstable_cancelCallback, qa = R.unstable_shouldYield, Za = R.unstable_requestPaint, gt = R.unstable_now, Ct = R.unstable_getCurrentPriorityLevel, Ja = R.unstable_ImmediatePriority, iu = R.unstable_UserBlockingPriority, lu = R.unstable_NormalPriority, gl = R.unstable_LowPriority, Ku = R.unstable_IdlePriority, Sl = null, Qr = null;
  function Xo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(Sl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Mr = Math.clz32 ? Math.clz32 : qu, fc = Math.log, dc = Math.LN2;
  function qu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fc(n) / dc | 0) | 0;
  }
  var El = 64, da = 4194304;
  function ei(n) {
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
  function ti(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var T = m & ~c;
      T !== 0 ? o = ei(T) : (d &= m, d !== 0 && (o = ei(d)));
    } else m = l & ~c, m !== 0 ? o = ei(m) : d !== 0 && (o = ei(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Mr(r), c = 1 << l, o |= n[l], r &= ~c;
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
      var m = 31 - Mr(d), T = 1 << m, _ = c[m];
      _ === -1 ? (!(T & l) || T & o) && (c[m] = Zu(T, r)) : _ <= r && (n.expiredLanes |= T), d &= ~T;
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
  function Bi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Mr(r), n[r] = l;
  }
  function Zf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Mr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function $i(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Mr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Vt = 0;
  function to(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Ut, Ko, yi, ft, no, or = !1, gi = [], Nr = null, Si = null, gn = null, nn = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map(), Gn = [], Lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ka(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Nr = null;
        break;
      case "dragenter":
      case "dragleave":
        Si = null;
        break;
      case "mouseover":
      case "mouseout":
        gn = null;
        break;
      case "pointerover":
      case "pointerout":
        nn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rl.delete(r.pointerId);
    }
  }
  function ou(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ke(r), r !== null && Ko(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Nr = ou(Nr, n, r, l, o, c), !0;
      case "dragenter":
        return Si = ou(Si, n, r, l, o, c), !0;
      case "mouseover":
        return gn = ou(gn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return nn.set(d, ou(nn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Rl.set(d, ou(Rl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Zo(n) {
    var r = yu(n.target);
    if (r !== null) {
      var l = yt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = dt(l), r !== null) {
            n.blockedOn = r, no(n.priority, function() {
              yi(l);
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
      var l = io(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        dn = o, l.target.dispatchEvent(o), dn = null;
      } else return r = Ke(l), r !== null && Ko(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function su(n, r, l) {
    Tl(n) && l.delete(r);
  }
  function Jf() {
    or = !1, Nr !== null && Tl(Nr) && (Nr = null), Si !== null && Tl(Si) && (Si = null), gn !== null && Tl(gn) && (gn = null), nn.forEach(su), Rl.forEach(su);
  }
  function Da(n, r) {
    n.blockedOn === r && (n.blockedOn = null, or || (or = !0, R.unstable_scheduleCallback(R.unstable_NormalPriority, Jf)));
  }
  function ni(n) {
    function r(c) {
      return Da(c, n);
    }
    if (0 < gi.length) {
      Da(gi[0], n);
      for (var l = 1; l < gi.length; l++) {
        var o = gi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Nr !== null && Da(Nr, n), Si !== null && Da(Si, n), gn !== null && Da(gn, n), nn.forEach(r), Rl.forEach(r), l = 0; l < Gn.length; l++) o = Gn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Gn.length && (l = Gn[0], l.blockedOn === null); ) Zo(l), l.blockedOn === null && Gn.shift();
  }
  var Ei = ce.ReactCurrentBatchConfig, Oa = !0;
  function ro(n, r, l, o) {
    var c = Vt, d = Ei.transition;
    Ei.transition = null;
    try {
      Vt = 1, wl(n, r, l, o);
    } finally {
      Vt = c, Ei.transition = d;
    }
  }
  function ao(n, r, l, o) {
    var c = Vt, d = Ei.transition;
    Ei.transition = null;
    try {
      Vt = 4, wl(n, r, l, o);
    } finally {
      Vt = c, Ei.transition = d;
    }
  }
  function wl(n, r, l, o) {
    if (Oa) {
      var c = io(n, r, l, o);
      if (c === null) wc(n, r, o, cu, l), ka(n, o);
      else if (qo(c, n, r, l, o)) o.stopPropagation();
      else if (ka(n, o), r & 4 && -1 < Lr.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ke(c);
          if (d !== null && Ut(d), d = io(n, r, l, o), d === null && wc(n, r, o, cu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else wc(n, r, o, null, l);
    }
  }
  var cu = null;
  function io(n, r, l, o) {
    if (cu = null, n = en(o), n = yu(n), n !== null) if (r = yt(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = dt(r), n !== null) return n;
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
        switch (Ct()) {
          case Ja:
            return 1;
          case iu:
            return 4;
          case lu:
          case gl:
            return 16;
          case Ku:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ri = null, h = null, w = null;
  function V() {
    if (w) return w;
    var n, r = h, l = r.length, o, c = "value" in ri ? ri.value : ri.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return w = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ye() {
    return !0;
  }
  function Je() {
    return !1;
  }
  function be(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var T in n) n.hasOwnProperty(T) && (l = n[T], this[T] = l ? l(d) : d[T]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ye : Je, this.isPropagationStopped = Je, this;
    }
    return we(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ye);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ye);
    }, persist: function() {
    }, isPersistent: ye }), r;
  }
  var at = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, bt = be(at), jt = we({}, at, { view: 0, detail: 0 }), vn = be(jt), rn, Tt, an, Tn = we({}, jt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ad, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== an && (an && n.type === "mousemove" ? (rn = n.screenX - an.screenX, Tt = n.screenY - an.screenY) : Tt = rn = 0, an = n), rn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Tt;
  } }), xl = be(Tn), Jo = we({}, Tn, { dataTransfer: 0 }), Yi = be(Jo), es = we({}, jt, { relatedTarget: 0 }), fu = be(es), ed = we({}, at, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = be(ed), td = we({}, at, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), cv = be(td), nd = we({}, at, { data: 0 }), rd = be(nd), fv = {
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
  function Ii(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = uy[n]) ? !!r[n] : !1;
  }
  function ad() {
    return Ii;
  }
  var id = we({}, jt, { key: function(n) {
    if (n.key) {
      var r = fv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? dv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ad, charCode: function(n) {
    return n.type === "keypress" ? Q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ld = be(id), ud = we({}, Tn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pv = be(ud), vc = we({}, jt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ad }), vv = be(vc), Gr = we({}, at, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wi = be(Gr), Hn = we({}, Tn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qi = be(Hn), od = [9, 13, 27, 32], uo = te && "CompositionEvent" in window, ts = null;
  te && "documentMode" in document && (ts = document.documentMode);
  var ns = te && "TextEvent" in window && !ts, hv = te && (!uo || ts && 8 < ts && 11 >= ts), mv = " ", hc = !1;
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
    if (oo) return n === "compositionend" || !uo && yv(n, r) ? (n = V(), w = h = ri = null, oo = !1, n) : null;
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
    Vi(o), r = os(r, "onChange"), 0 < r.length && (l = new bt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Ci = null, du = null;
  function Cv(n) {
    hu(n, 0);
  }
  function rs(n) {
    var r = ii(n);
    if (Ye(r)) return n;
  }
  function cy(n, r) {
    if (n === "change") return r;
  }
  var Rv = !1;
  if (te) {
    var cd;
    if (te) {
      var fd = "oninput" in document;
      if (!fd) {
        var Tv = document.createElement("div");
        Tv.setAttribute("oninput", "return;"), fd = typeof Tv.oninput == "function";
      }
      cd = fd;
    } else cd = !1;
    Rv = cd && (!document.documentMode || 9 < document.documentMode);
  }
  function wv() {
    Ci && (Ci.detachEvent("onpropertychange", xv), du = Ci = null);
  }
  function xv(n) {
    if (n.propertyName === "value" && rs(du)) {
      var r = [];
      sd(r, du, n, en(n)), au(Cv, r);
    }
  }
  function fy(n, r, l) {
    n === "focusin" ? (wv(), Ci = r, du = l, Ci.attachEvent("onpropertychange", xv)) : n === "focusout" && wv();
  }
  function _v(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return rs(du);
  }
  function dy(n, r) {
    if (n === "click") return rs(r);
  }
  function bv(n, r) {
    if (n === "input" || n === "change") return rs(r);
  }
  function py(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ai = typeof Object.is == "function" ? Object.is : py;
  function as(n, r) {
    if (ai(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!W.call(r, c) || !ai(n[c], r[c])) return !1;
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
  function _l(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? _l(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function is() {
    for (var n = window, r = ct(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = ct(n.document);
    }
    return r;
  }
  function yc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function so(n) {
    var r = is(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && _l(l.ownerDocument.documentElement, l)) {
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
  var vy = te && "documentMode" in document && 11 >= document.documentMode, co = null, dd = null, ls = null, pd = !1;
  function vd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pd || co == null || co !== ct(o) || (o = co, "selectionStart" in o && yc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ls && as(ls, o) || (ls = o, o = os(dd, "onSelect"), 0 < o.length && (r = new bt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = co)));
  }
  function gc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var pu = { animationend: gc("Animation", "AnimationEnd"), animationiteration: gc("Animation", "AnimationIteration"), animationstart: gc("Animation", "AnimationStart"), transitionend: gc("Transition", "TransitionEnd") }, sr = {}, hd = {};
  te && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete pu.animationend.animation, delete pu.animationiteration.animation, delete pu.animationstart.animation), "TransitionEvent" in window || delete pu.transitionend.transition);
  function Sc(n) {
    if (sr[n]) return sr[n];
    if (!pu[n]) return n;
    var r = pu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in hd) return sr[n] = r[l];
    return n;
  }
  var Dv = Sc("animationend"), Ov = Sc("animationiteration"), Mv = Sc("animationstart"), Nv = Sc("transitionend"), md = /* @__PURE__ */ new Map(), Ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ma(n, r) {
    md.set(n, r), I(r, [n]);
  }
  for (var yd = 0; yd < Ec.length; yd++) {
    var vu = Ec[yd], hy = vu.toLowerCase(), my = vu[0].toUpperCase() + vu.slice(1);
    Ma(hy, "on" + my);
  }
  Ma(Dv, "onAnimationEnd"), Ma(Ov, "onAnimationIteration"), Ma(Mv, "onAnimationStart"), Ma("dblclick", "onDoubleClick"), Ma("focusin", "onFocus"), Ma("focusout", "onBlur"), Ma(Nv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), I("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), I("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), I("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), I("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), I("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), I("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gd = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
  function Cc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Ue(o, r, void 0, n), n.currentTarget = null;
  }
  function hu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var T = o[m], _ = T.instance, B = T.currentTarget;
          if (T = T.listener, _ !== d && c.isPropagationStopped()) break e;
          Cc(c, T, B), d = _;
        }
        else for (m = 0; m < o.length; m++) {
          if (T = o[m], _ = T.instance, B = T.currentTarget, T = T.listener, _ !== d && c.isPropagationStopped()) break e;
          Cc(c, T, B), d = _;
        }
      }
    }
    if (mi) throw n = x, mi = !1, x = null, n;
  }
  function Xt(n, r) {
    var l = r[fs];
    l === void 0 && (l = r[fs] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Lv(r, n, 2, !1), l.add(o));
  }
  function Rc(n, r, l) {
    var o = 0;
    r && (o |= 4), Lv(l, n, o, r);
  }
  var Tc = "_reactListening" + Math.random().toString(36).slice(2);
  function fo(n) {
    if (!n[Tc]) {
      n[Tc] = !0, A.forEach(function(l) {
        l !== "selectionchange" && (gd.has(l) || Rc(l, !1, n), Rc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Tc] || (r[Tc] = !0, Rc("selectionchange", !1, r));
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
        c = wl;
    }
    l = c.bind(null, r, l, n), c = void 0, !Or || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function wc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var T = o.stateNode.containerInfo;
        if (T === c || T.nodeType === 8 && T.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var _ = m.tag;
          if ((_ === 3 || _ === 4) && (_ = m.stateNode.containerInfo, _ === c || _.nodeType === 8 && _.parentNode === c)) return;
          m = m.return;
        }
        for (; T !== null; ) {
          if (m = yu(T), m === null) return;
          if (_ = m.tag, _ === 5 || _ === 6) {
            o = d = m;
            continue e;
          }
          T = T.parentNode;
        }
      }
      o = o.return;
    }
    au(function() {
      var B = d, le = en(l), de = [];
      e: {
        var ie = md.get(n);
        if (ie !== void 0) {
          var Ne = bt, Pe = n;
          switch (n) {
            case "keypress":
              if (Q(l) === 0) break e;
            case "keydown":
            case "keyup":
              Ne = ld;
              break;
            case "focusin":
              Pe = "focus", Ne = fu;
              break;
            case "focusout":
              Pe = "blur", Ne = fu;
              break;
            case "beforeblur":
            case "afterblur":
              Ne = fu;
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
              Ne = xl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ne = Yi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ne = vv;
              break;
            case Dv:
            case Ov:
            case Mv:
              Ne = pc;
              break;
            case Nv:
              Ne = Wi;
              break;
            case "scroll":
              Ne = vn;
              break;
            case "wheel":
              Ne = Qi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ne = cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ne = pv;
          }
          var Ie = (r & 4) !== 0, An = !Ie && n === "scroll", N = Ie ? ie !== null ? ie + "Capture" : null : ie;
          Ie = [];
          for (var k = B, U; k !== null; ) {
            U = k;
            var ue = U.stateNode;
            if (U.tag === 5 && ue !== null && (U = ue, N !== null && (ue = Dr(k, N), ue != null && Ie.push(po(k, ue, U)))), An) break;
            k = k.return;
          }
          0 < Ie.length && (ie = new Ne(ie, Pe, null, l, le), de.push({ event: ie, listeners: Ie }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", Ne = n === "mouseout" || n === "pointerout", ie && l !== dn && (Pe = l.relatedTarget || l.fromElement) && (yu(Pe) || Pe[Gi])) break e;
          if ((Ne || ie) && (ie = le.window === le ? le : (ie = le.ownerDocument) ? ie.defaultView || ie.parentWindow : window, Ne ? (Pe = l.relatedTarget || l.toElement, Ne = B, Pe = Pe ? yu(Pe) : null, Pe !== null && (An = yt(Pe), Pe !== An || Pe.tag !== 5 && Pe.tag !== 6) && (Pe = null)) : (Ne = null, Pe = B), Ne !== Pe)) {
            if (Ie = xl, ue = "onMouseLeave", N = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (Ie = pv, ue = "onPointerLeave", N = "onPointerEnter", k = "pointer"), An = Ne == null ? ie : ii(Ne), U = Pe == null ? ie : ii(Pe), ie = new Ie(ue, k + "leave", Ne, l, le), ie.target = An, ie.relatedTarget = U, ue = null, yu(le) === B && (Ie = new Ie(N, k + "enter", Pe, l, le), Ie.target = U, Ie.relatedTarget = An, ue = Ie), An = ue, Ne && Pe) t: {
              for (Ie = Ne, N = Pe, k = 0, U = Ie; U; U = bl(U)) k++;
              for (U = 0, ue = N; ue; ue = bl(ue)) U++;
              for (; 0 < k - U; ) Ie = bl(Ie), k--;
              for (; 0 < U - k; ) N = bl(N), U--;
              for (; k--; ) {
                if (Ie === N || N !== null && Ie === N.alternate) break t;
                Ie = bl(Ie), N = bl(N);
              }
              Ie = null;
            }
            else Ie = null;
            Ne !== null && zv(de, ie, Ne, Ie, !1), Pe !== null && An !== null && zv(de, An, Pe, Ie, !0);
          }
        }
        e: {
          if (ie = B ? ii(B) : window, Ne = ie.nodeName && ie.nodeName.toLowerCase(), Ne === "select" || Ne === "input" && ie.type === "file") var Ve = cy;
          else if (Ev(ie)) if (Rv) Ve = bv;
          else {
            Ve = _v;
            var tt = fy;
          }
          else (Ne = ie.nodeName) && Ne.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (Ve = dy);
          if (Ve && (Ve = Ve(n, B))) {
            sd(de, Ve, l, le);
            break e;
          }
          tt && tt(n, ie, B), n === "focusout" && (tt = ie._wrapperState) && tt.controlled && ie.type === "number" && kr(ie, "number", ie.value);
        }
        switch (tt = B ? ii(B) : window, n) {
          case "focusin":
            (Ev(tt) || tt.contentEditable === "true") && (co = tt, dd = B, ls = null);
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
            pd = !1, vd(de, l, le);
            break;
          case "selectionchange":
            if (vy) break;
          case "keydown":
          case "keyup":
            vd(de, l, le);
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
        st && (hv && l.locale !== "ko" && (oo || st !== "onCompositionStart" ? st === "onCompositionEnd" && oo && (it = V()) : (ri = le, h = "value" in ri ? ri.value : ri.textContent, oo = !0)), tt = os(B, st), 0 < tt.length && (st = new rd(st, n, null, l, le), de.push({ event: st, listeners: tt }), it ? st.data = it : (it = gv(l), it !== null && (st.data = it)))), (it = ns ? Sv(n, l) : oy(n, l)) && (B = os(B, "onBeforeInput"), 0 < B.length && (le = new rd("onBeforeInput", "beforeinput", null, l, le), de.push({ event: le, listeners: B }), le.data = it));
      }
      hu(de, r);
    });
  }
  function po(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function os(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Dr(n, l), d != null && o.unshift(po(n, d, c)), d = Dr(n, r), d != null && o.push(po(n, d, c))), n = n.return;
    }
    return o;
  }
  function bl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function zv(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var T = l, _ = T.alternate, B = T.stateNode;
      if (_ !== null && _ === o) break;
      T.tag === 5 && B !== null && (T = B, c ? (_ = Dr(l, d), _ != null && m.unshift(po(l, _, T))) : c || (_ = Dr(l, d), _ != null && m.push(po(l, _, T)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Av = /\r\n?/g, yy = /\u0000|\uFFFD/g;
  function Uv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Av, `
`).replace(yy, "");
  }
  function xc(n, r, l) {
    if (r = Uv(r), Uv(n) !== r && l) throw Error(E(425));
  }
  function kl() {
  }
  var ss = null, mu = null;
  function _c(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var bc = typeof setTimeout == "function" ? setTimeout : void 0, Sd = typeof clearTimeout == "function" ? clearTimeout : void 0, jv = typeof Promise == "function" ? Promise : void 0, vo = typeof queueMicrotask == "function" ? queueMicrotask : typeof jv < "u" ? function(n) {
    return jv.resolve(null).then(n).catch(kc);
  } : bc;
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
          n.removeChild(c), ni(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ni(r);
  }
  function Ri(n) {
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
  var Dl = Math.random().toString(36).slice(2), Ti = "__reactFiber$" + Dl, cs = "__reactProps$" + Dl, Gi = "__reactContainer$" + Dl, fs = "__reactEvents$" + Dl, mo = "__reactListeners$" + Dl, gy = "__reactHandles$" + Dl;
  function yu(n) {
    var r = n[Ti];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Gi] || l[Ti]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Fv(n); n !== null; ) {
          if (l = n[Ti]) return l;
          n = Fv(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ke(n) {
    return n = n[Ti] || n[Gi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ii(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(E(33));
  }
  function wn(n) {
    return n[cs] || null;
  }
  var Nt = [], Na = -1;
  function La(n) {
    return { current: n };
  }
  function hn(n) {
    0 > Na || (n.current = Nt[Na], Nt[Na] = null, Na--);
  }
  function Xe(n, r) {
    Na++, Nt[Na] = n.current, n.current = r;
  }
  var wr = {}, kn = La(wr), Xn = La(!1), Xr = wr;
  function Kr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return wr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Pn(n) {
    return n = n.childContextTypes, n != null;
  }
  function yo() {
    hn(Xn), hn(kn);
  }
  function Hv(n, r, l) {
    if (kn.current !== wr) throw Error(E(168));
    Xe(kn, r), Xe(Xn, l);
  }
  function ds(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(E(108, Se(n) || "Unknown", c));
    return we({}, l, o);
  }
  function er(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || wr, Xr = kn.current, Xe(kn, n), Xe(Xn, Xn.current), !0;
  }
  function Dc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(E(169));
    l ? (n = ds(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, hn(Xn), hn(kn), Xe(kn, n)) : hn(Xn), Xe(Xn, l);
  }
  var wi = null, go = !1, Xi = !1;
  function Oc(n) {
    wi === null ? wi = [n] : wi.push(n);
  }
  function Ol(n) {
    go = !0, Oc(n);
  }
  function xi() {
    if (!Xi && wi !== null) {
      Xi = !0;
      var n = 0, r = Vt;
      try {
        var l = wi;
        for (Vt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        wi = null, go = !1;
      } catch (c) {
        throw wi !== null && (wi = wi.slice(n + 1)), yn(Ja, xi), c;
      } finally {
        Vt = r, Xi = !1;
      }
    }
    return null;
  }
  var Ml = [], Nl = 0, Ll = null, Ki = 0, Vn = [], za = 0, pa = null, _i = 1, bi = "";
  function gu(n, r) {
    Ml[Nl++] = Ki, Ml[Nl++] = Ll, Ll = n, Ki = r;
  }
  function Pv(n, r, l) {
    Vn[za++] = _i, Vn[za++] = bi, Vn[za++] = pa, pa = n;
    var o = _i;
    n = bi;
    var c = 32 - Mr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Mr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, _i = 1 << 32 - Mr(r) + c | l << c | o, bi = d + n;
    } else _i = 1 << d | l << c | o, bi = n;
  }
  function Mc(n) {
    n.return !== null && (gu(n, 1), Pv(n, 1, 0));
  }
  function Nc(n) {
    for (; n === Ll; ) Ll = Ml[--Nl], Ml[Nl] = null, Ki = Ml[--Nl], Ml[Nl] = null;
    for (; n === pa; ) pa = Vn[--za], Vn[za] = null, bi = Vn[--za], Vn[za] = null, _i = Vn[--za], Vn[za] = null;
  }
  var qr = null, Zr = null, En = !1, Aa = null;
  function Ed(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Vv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, qr = n, Zr = Ri(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, qr = n, Zr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = pa !== null ? { id: _i, overflow: bi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, qr = n, Zr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Cd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Rd(n) {
    if (En) {
      var r = Zr;
      if (r) {
        var l = r;
        if (!Vv(n, r)) {
          if (Cd(n)) throw Error(E(418));
          r = Ri(l.nextSibling);
          var o = qr;
          r && Vv(n, r) ? Ed(o, l) : (n.flags = n.flags & -4097 | 2, En = !1, qr = n);
        }
      } else {
        if (Cd(n)) throw Error(E(418));
        n.flags = n.flags & -4097 | 2, En = !1, qr = n;
      }
    }
  }
  function Kn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    qr = n;
  }
  function Lc(n) {
    if (n !== qr) return !1;
    if (!En) return Kn(n), En = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !_c(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (Cd(n)) throw ps(), Error(E(418));
      for (; r; ) Ed(n, r), r = Ri(r.nextSibling);
    }
    if (Kn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(E(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Zr = Ri(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Zr = null;
      }
    } else Zr = qr ? Ri(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ps() {
    for (var n = Zr; n; ) n = Ri(n.nextSibling);
  }
  function zl() {
    Zr = qr = null, En = !1;
  }
  function qi(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var Sy = ce.ReactCurrentBatchConfig;
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
          var T = c.refs;
          m === null ? delete T[d] : T[d] = m;
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
    function r(N, k) {
      if (n) {
        var U = N.deletions;
        U === null ? (N.deletions = [k], N.flags |= 16) : U.push(k);
      }
    }
    function l(N, k) {
      if (!n) return null;
      for (; k !== null; ) r(N, k), k = k.sibling;
      return null;
    }
    function o(N, k) {
      for (N = /* @__PURE__ */ new Map(); k !== null; ) k.key !== null ? N.set(k.key, k) : N.set(k.index, k), k = k.sibling;
      return N;
    }
    function c(N, k) {
      return N = Bl(N, k), N.index = 0, N.sibling = null, N;
    }
    function d(N, k, U) {
      return N.index = U, n ? (U = N.alternate, U !== null ? (U = U.index, U < k ? (N.flags |= 2, k) : U) : (N.flags |= 2, k)) : (N.flags |= 1048576, k);
    }
    function m(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function T(N, k, U, ue) {
      return k === null || k.tag !== 6 ? (k = Jd(U, N.mode, ue), k.return = N, k) : (k = c(k, U), k.return = N, k);
    }
    function _(N, k, U, ue) {
      var Ve = U.type;
      return Ve === je ? le(N, k, U.props.children, ue, U.key) : k !== null && (k.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === Mt && Bv(Ve) === k.type) ? (ue = c(k, U.props), ue.ref = Su(N, k, U), ue.return = N, ue) : (ue = $s(U.type, U.key, U.props, null, N.mode, ue), ue.ref = Su(N, k, U), ue.return = N, ue);
    }
    function B(N, k, U, ue) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== U.containerInfo || k.stateNode.implementation !== U.implementation ? (k = vf(U, N.mode, ue), k.return = N, k) : (k = c(k, U.children || []), k.return = N, k);
    }
    function le(N, k, U, ue, Ve) {
      return k === null || k.tag !== 7 ? (k = rl(U, N.mode, ue, Ve), k.return = N, k) : (k = c(k, U), k.return = N, k);
    }
    function de(N, k, U) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Jd("" + k, N.mode, U), k.return = N, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case ve:
            return U = $s(k.type, k.key, k.props, null, N.mode, U), U.ref = Su(N, null, k), U.return = N, U;
          case We:
            return k = vf(k, N.mode, U), k.return = N, k;
          case Mt:
            var ue = k._init;
            return de(N, ue(k._payload), U);
        }
        if (Zt(k) || $e(k)) return k = rl(k, N.mode, U, null), k.return = N, k;
        zc(N, k);
      }
      return null;
    }
    function ie(N, k, U, ue) {
      var Ve = k !== null ? k.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number") return Ve !== null ? null : T(N, k, "" + U, ue);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ve:
            return U.key === Ve ? _(N, k, U, ue) : null;
          case We:
            return U.key === Ve ? B(N, k, U, ue) : null;
          case Mt:
            return Ve = U._init, ie(
              N,
              k,
              Ve(U._payload),
              ue
            );
        }
        if (Zt(U) || $e(U)) return Ve !== null ? null : le(N, k, U, ue, null);
        zc(N, U);
      }
      return null;
    }
    function Ne(N, k, U, ue, Ve) {
      if (typeof ue == "string" && ue !== "" || typeof ue == "number") return N = N.get(U) || null, T(k, N, "" + ue, Ve);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case ve:
            return N = N.get(ue.key === null ? U : ue.key) || null, _(k, N, ue, Ve);
          case We:
            return N = N.get(ue.key === null ? U : ue.key) || null, B(k, N, ue, Ve);
          case Mt:
            var tt = ue._init;
            return Ne(N, k, U, tt(ue._payload), Ve);
        }
        if (Zt(ue) || $e(ue)) return N = N.get(U) || null, le(k, N, ue, Ve, null);
        zc(k, ue);
      }
      return null;
    }
    function Pe(N, k, U, ue) {
      for (var Ve = null, tt = null, it = k, st = k = 0, rr = null; it !== null && st < U.length; st++) {
        it.index > st ? (rr = it, it = null) : rr = it.sibling;
        var Yt = ie(N, it, U[st], ue);
        if (Yt === null) {
          it === null && (it = rr);
          break;
        }
        n && it && Yt.alternate === null && r(N, it), k = d(Yt, k, st), tt === null ? Ve = Yt : tt.sibling = Yt, tt = Yt, it = rr;
      }
      if (st === U.length) return l(N, it), En && gu(N, st), Ve;
      if (it === null) {
        for (; st < U.length; st++) it = de(N, U[st], ue), it !== null && (k = d(it, k, st), tt === null ? Ve = it : tt.sibling = it, tt = it);
        return En && gu(N, st), Ve;
      }
      for (it = o(N, it); st < U.length; st++) rr = Ne(it, N, st, U[st], ue), rr !== null && (n && rr.alternate !== null && it.delete(rr.key === null ? st : rr.key), k = d(rr, k, st), tt === null ? Ve = rr : tt.sibling = rr, tt = rr);
      return n && it.forEach(function(Il) {
        return r(N, Il);
      }), En && gu(N, st), Ve;
    }
    function Ie(N, k, U, ue) {
      var Ve = $e(U);
      if (typeof Ve != "function") throw Error(E(150));
      if (U = Ve.call(U), U == null) throw Error(E(151));
      for (var tt = Ve = null, it = k, st = k = 0, rr = null, Yt = U.next(); it !== null && !Yt.done; st++, Yt = U.next()) {
        it.index > st ? (rr = it, it = null) : rr = it.sibling;
        var Il = ie(N, it, Yt.value, ue);
        if (Il === null) {
          it === null && (it = rr);
          break;
        }
        n && it && Il.alternate === null && r(N, it), k = d(Il, k, st), tt === null ? Ve = Il : tt.sibling = Il, tt = Il, it = rr;
      }
      if (Yt.done) return l(
        N,
        it
      ), En && gu(N, st), Ve;
      if (it === null) {
        for (; !Yt.done; st++, Yt = U.next()) Yt = de(N, Yt.value, ue), Yt !== null && (k = d(Yt, k, st), tt === null ? Ve = Yt : tt.sibling = Yt, tt = Yt);
        return En && gu(N, st), Ve;
      }
      for (it = o(N, it); !Yt.done; st++, Yt = U.next()) Yt = Ne(it, N, st, Yt.value, ue), Yt !== null && (n && Yt.alternate !== null && it.delete(Yt.key === null ? st : Yt.key), k = d(Yt, k, st), tt === null ? Ve = Yt : tt.sibling = Yt, tt = Yt);
      return n && it.forEach(function(wh) {
        return r(N, wh);
      }), En && gu(N, st), Ve;
    }
    function An(N, k, U, ue) {
      if (typeof U == "object" && U !== null && U.type === je && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ve:
            e: {
              for (var Ve = U.key, tt = k; tt !== null; ) {
                if (tt.key === Ve) {
                  if (Ve = U.type, Ve === je) {
                    if (tt.tag === 7) {
                      l(N, tt.sibling), k = c(tt, U.props.children), k.return = N, N = k;
                      break e;
                    }
                  } else if (tt.elementType === Ve || typeof Ve == "object" && Ve !== null && Ve.$$typeof === Mt && Bv(Ve) === tt.type) {
                    l(N, tt.sibling), k = c(tt, U.props), k.ref = Su(N, tt, U), k.return = N, N = k;
                    break e;
                  }
                  l(N, tt);
                  break;
                } else r(N, tt);
                tt = tt.sibling;
              }
              U.type === je ? (k = rl(U.props.children, N.mode, ue, U.key), k.return = N, N = k) : (ue = $s(U.type, U.key, U.props, null, N.mode, ue), ue.ref = Su(N, k, U), ue.return = N, N = ue);
            }
            return m(N);
          case We:
            e: {
              for (tt = U.key; k !== null; ) {
                if (k.key === tt) if (k.tag === 4 && k.stateNode.containerInfo === U.containerInfo && k.stateNode.implementation === U.implementation) {
                  l(N, k.sibling), k = c(k, U.children || []), k.return = N, N = k;
                  break e;
                } else {
                  l(N, k);
                  break;
                }
                else r(N, k);
                k = k.sibling;
              }
              k = vf(U, N.mode, ue), k.return = N, N = k;
            }
            return m(N);
          case Mt:
            return tt = U._init, An(N, k, tt(U._payload), ue);
        }
        if (Zt(U)) return Pe(N, k, U, ue);
        if ($e(U)) return Ie(N, k, U, ue);
        zc(N, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, k !== null && k.tag === 6 ? (l(N, k.sibling), k = c(k, U), k.return = N, N = k) : (l(N, k), k = Jd(U, N.mode, ue), k.return = N, N = k), m(N)) : l(N, k);
    }
    return An;
  }
  var Mn = Eu(!0), De = Eu(!1), va = La(null), Jr = null, So = null, Td = null;
  function wd() {
    Td = So = Jr = null;
  }
  function xd(n) {
    var r = va.current;
    hn(va), n._currentValue = r;
  }
  function _d(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function xn(n, r) {
    Jr = n, Td = So = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && ($n = !0), n.firstContext = null);
  }
  function Ua(n) {
    var r = n._currentValue;
    if (Td !== n) if (n = { context: n, memoizedValue: r, next: null }, So === null) {
      if (Jr === null) throw Error(E(308));
      So = n, Jr.dependencies = { lanes: 0, firstContext: n };
    } else So = So.next = n;
    return r;
  }
  var Cu = null;
  function bd(n) {
    Cu === null ? Cu = [n] : Cu.push(n);
  }
  function kd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, bd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, ha(n, o);
  }
  function ha(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ma = !1;
  function Dd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function $v(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Zi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Al(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Lt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, ha(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, bd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, ha(n, l);
  }
  function Ac(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, $i(n, l);
    }
  }
  function Yv(n, r) {
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
    ma = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, T = c.shared.pending;
    if (T !== null) {
      c.shared.pending = null;
      var _ = T, B = _.next;
      _.next = null, m === null ? d = B : m.next = B, m = _;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, T = le.lastBaseUpdate, T !== m && (T === null ? le.firstBaseUpdate = B : T.next = B, le.lastBaseUpdate = _));
    }
    if (d !== null) {
      var de = c.baseState;
      m = 0, le = B = _ = null, T = d;
      do {
        var ie = T.lane, Ne = T.eventTime;
        if ((o & ie) === ie) {
          le !== null && (le = le.next = {
            eventTime: Ne,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var Pe = n, Ie = T;
            switch (ie = r, Ne = l, Ie.tag) {
              case 1:
                if (Pe = Ie.payload, typeof Pe == "function") {
                  de = Pe.call(Ne, de, ie);
                  break e;
                }
                de = Pe;
                break e;
              case 3:
                Pe.flags = Pe.flags & -65537 | 128;
              case 0:
                if (Pe = Ie.payload, ie = typeof Pe == "function" ? Pe.call(Ne, de, ie) : Pe, ie == null) break e;
                de = we({}, de, ie);
                break e;
              case 2:
                ma = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, ie = c.effects, ie === null ? c.effects = [T] : ie.push(T));
        } else Ne = { eventTime: Ne, lane: ie, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, le === null ? (B = le = Ne, _ = de) : le = le.next = Ne, m |= ie;
        if (T = T.next, T === null) {
          if (T = c.shared.pending, T === null) break;
          ie = T, T = ie.next, ie.next = null, c.lastBaseUpdate = ie, c.shared.pending = null;
        }
      } while (!0);
      if (le === null && (_ = de), c.baseState = _, c.firstBaseUpdate = B, c.lastBaseUpdate = le, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Ni |= m, n.lanes = m, n.memoizedState = de;
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
  var hs = {}, ki = La(hs), ms = La(hs), ys = La(hs);
  function Ru(n) {
    if (n === hs) throw Error(E(174));
    return n;
  }
  function Md(n, r) {
    switch (Xe(ys, r), Xe(ms, n), Xe(ki, hs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ca(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ca(r, n);
    }
    hn(ki), Xe(ki, r);
  }
  function Tu() {
    hn(ki), hn(ms), hn(ys);
  }
  function Iv(n) {
    Ru(ys.current);
    var r = Ru(ki.current), l = ca(r, n.type);
    r !== l && (Xe(ms, n), Xe(ki, l));
  }
  function Uc(n) {
    ms.current === n && (hn(ki), hn(ms));
  }
  var _n = La(0);
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
  function qe() {
    for (var n = 0; n < gs.length; n++) gs[n]._workInProgressVersionPrimary = null;
    gs.length = 0;
  }
  var xt = ce.ReactCurrentDispatcher, Bt = ce.ReactCurrentBatchConfig, ln = 0, $t = null, Bn = null, tr = null, Fc = !1, Ss = !1, wu = 0, ae = 0;
  function Ht() {
    throw Error(E(321));
  }
  function lt(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ai(n[l], r[l])) return !1;
    return !0;
  }
  function Ul(n, r, l, o, c, d) {
    if (ln = d, $t = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, xt.current = n === null || n.memoizedState === null ? Jc : xs, n = l(o, c), Ss) {
      d = 0;
      do {
        if (Ss = !1, wu = 0, 25 <= d) throw Error(E(301));
        d += 1, tr = Bn = null, r.updateQueue = null, xt.current = ef, n = l(o, c);
      } while (Ss);
    }
    if (xt.current = Du, r = Bn !== null && Bn.next !== null, ln = 0, tr = Bn = $t = null, Fc = !1, r) throw Error(E(300));
    return n;
  }
  function li() {
    var n = wu !== 0;
    return wu = 0, n;
  }
  function xr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return tr === null ? $t.memoizedState = tr = n : tr = tr.next = n, tr;
  }
  function Nn() {
    if (Bn === null) {
      var n = $t.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Bn.next;
    var r = tr === null ? $t.memoizedState : tr.next;
    if (r !== null) tr = r, Bn = n;
    else {
      if (n === null) throw Error(E(310));
      Bn = n, n = { memoizedState: Bn.memoizedState, baseState: Bn.baseState, baseQueue: Bn.baseQueue, queue: Bn.queue, next: null }, tr === null ? $t.memoizedState = tr = n : tr = tr.next = n;
    }
    return tr;
  }
  function Ji(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function jl(n) {
    var r = Nn(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var o = Bn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var T = m = null, _ = null, B = d;
      do {
        var le = B.lane;
        if ((ln & le) === le) _ !== null && (_ = _.next = { lane: 0, action: B.action, hasEagerState: B.hasEagerState, eagerState: B.eagerState, next: null }), o = B.hasEagerState ? B.eagerState : n(o, B.action);
        else {
          var de = {
            lane: le,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null
          };
          _ === null ? (T = _ = de, m = o) : _ = _.next = de, $t.lanes |= le, Ni |= le;
        }
        B = B.next;
      } while (B !== null && B !== d);
      _ === null ? m = o : _.next = T, ai(o, r.memoizedState) || ($n = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = _, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, $t.lanes |= d, Ni |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function xu(n) {
    var r = Nn(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ai(d, r.memoizedState) || ($n = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Hc() {
  }
  function Pc(n, r) {
    var l = $t, o = Nn(), c = r(), d = !ai(o.memoizedState, c);
    if (d && (o.memoizedState = c, $n = !0), o = o.queue, Es($c.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || tr !== null && tr.memoizedState.tag & 1) {
      if (l.flags |= 2048, _u(9, Bc.bind(null, l, o, c, r), void 0, null), qn === null) throw Error(E(349));
      ln & 30 || Vc(l, r, c);
    }
    return c;
  }
  function Vc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = $t.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, $t.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Bc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Yc(r) && Ic(n);
  }
  function $c(n, r, l) {
    return l(function() {
      Yc(r) && Ic(n);
    });
  }
  function Yc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ai(n, l);
    } catch {
      return !0;
    }
  }
  function Ic(n) {
    var r = ha(n, 1);
    r !== null && jr(r, n, 1, -1);
  }
  function Wc(n) {
    var r = xr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ji, lastRenderedState: n }, r.queue = n, n = n.dispatch = ku.bind(null, $t, n), [r.memoizedState, n];
  }
  function _u(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = $t.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, $t.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Qc() {
    return Nn().memoizedState;
  }
  function Eo(n, r, l, o) {
    var c = xr();
    $t.flags |= n, c.memoizedState = _u(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Co(n, r, l, o) {
    var c = Nn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Bn !== null) {
      var m = Bn.memoizedState;
      if (d = m.destroy, o !== null && lt(o, m.deps)) {
        c.memoizedState = _u(r, l, d, o);
        return;
      }
    }
    $t.flags |= n, c.memoizedState = _u(1 | r, l, d, o);
  }
  function Gc(n, r) {
    return Eo(8390656, 8, n, r);
  }
  function Es(n, r) {
    return Co(2048, 8, n, r);
  }
  function Xc(n, r) {
    return Co(4, 2, n, r);
  }
  function Cs(n, r) {
    return Co(4, 4, n, r);
  }
  function bu(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Kc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Co(4, 4, bu.bind(null, r, n), l);
  }
  function Rs() {
  }
  function qc(n, r) {
    var l = Nn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && lt(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Zc(n, r) {
    var l = Nn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && lt(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Nd(n, r, l) {
    return ln & 21 ? (ai(l, r) || (l = Ju(), $t.lanes |= l, Ni |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, $n = !0), n.memoizedState = l);
  }
  function Ts(n, r) {
    var l = Vt;
    Vt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Bt.transition;
    Bt.transition = {};
    try {
      n(!1), r();
    } finally {
      Vt = l, Bt.transition = o;
    }
  }
  function Ld() {
    return Nn().memoizedState;
  }
  function ws(n, r, l) {
    var o = Li(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ea(n)) Wv(r, l);
    else if (l = kd(n, r, l, o), l !== null) {
      var c = Wn();
      jr(l, n, o, c), sn(l, r, o);
    }
  }
  function ku(n, r, l) {
    var o = Li(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ea(n)) Wv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, T = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = T, ai(T, m)) {
          var _ = r.interleaved;
          _ === null ? (c.next = c, bd(r)) : (c.next = _.next, _.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = kd(n, r, c, o), l !== null && (c = Wn(), jr(l, n, o, c), sn(l, r, o));
    }
  }
  function ea(n) {
    var r = n.alternate;
    return n === $t || r !== null && r === $t;
  }
  function Wv(n, r) {
    Ss = Fc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function sn(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, $i(n, l);
    }
  }
  var Du = { readContext: Ua, useCallback: Ht, useContext: Ht, useEffect: Ht, useImperativeHandle: Ht, useInsertionEffect: Ht, useLayoutEffect: Ht, useMemo: Ht, useReducer: Ht, useRef: Ht, useState: Ht, useDebugValue: Ht, useDeferredValue: Ht, useTransition: Ht, useMutableSource: Ht, useSyncExternalStore: Ht, useId: Ht, unstable_isNewReconciler: !1 }, Jc = { readContext: Ua, useCallback: function(n, r) {
    return xr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ua, useEffect: Gc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Eo(
      4194308,
      4,
      bu.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Eo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Eo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = xr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = xr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = ws.bind(null, $t, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = xr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Wc, useDebugValue: Rs, useDeferredValue: function(n) {
    return xr().memoizedState = n;
  }, useTransition: function() {
    var n = Wc(!1), r = n[0];
    return n = Ts.bind(null, n[1]), xr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = $t, c = xr();
    if (En) {
      if (l === void 0) throw Error(E(407));
      l = l();
    } else {
      if (l = r(), qn === null) throw Error(E(349));
      ln & 30 || Vc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Gc($c.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, _u(9, Bc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = xr(), r = qn.identifierPrefix;
    if (En) {
      var l = bi, o = _i;
      l = (o & ~(1 << 32 - Mr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = wu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ae++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, xs = {
    readContext: Ua,
    useCallback: qc,
    useContext: Ua,
    useEffect: Es,
    useImperativeHandle: Kc,
    useInsertionEffect: Xc,
    useLayoutEffect: Cs,
    useMemo: Zc,
    useReducer: jl,
    useRef: Qc,
    useState: function() {
      return jl(Ji);
    },
    useDebugValue: Rs,
    useDeferredValue: function(n) {
      var r = Nn();
      return Nd(r, Bn.memoizedState, n);
    },
    useTransition: function() {
      var n = jl(Ji)[0], r = Nn().memoizedState;
      return [n, r];
    },
    useMutableSource: Hc,
    useSyncExternalStore: Pc,
    useId: Ld,
    unstable_isNewReconciler: !1
  }, ef = { readContext: Ua, useCallback: qc, useContext: Ua, useEffect: Es, useImperativeHandle: Kc, useInsertionEffect: Xc, useLayoutEffect: Cs, useMemo: Zc, useReducer: xu, useRef: Qc, useState: function() {
    return xu(Ji);
  }, useDebugValue: Rs, useDeferredValue: function(n) {
    var r = Nn();
    return Bn === null ? r.memoizedState = n : Nd(r, Bn.memoizedState, n);
  }, useTransition: function() {
    var n = xu(Ji)[0], r = Nn().memoizedState;
    return [n, r];
  }, useMutableSource: Hc, useSyncExternalStore: Pc, useId: Ld, unstable_isNewReconciler: !1 };
  function ui(n, r) {
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
    return (n = n._reactInternals) ? yt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Wn(), c = Li(n), d = Zi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Al(n, d, c), r !== null && (jr(r, n, c, o), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Wn(), c = Li(n), d = Zi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Al(n, d, c), r !== null && (jr(r, n, c, o), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Wn(), o = Li(n), c = Zi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Al(n, c, o), r !== null && (jr(r, n, o, l), Ac(r, n, o));
  } };
  function Qv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !as(l, o) || !as(c, d) : !0;
  }
  function nf(n, r, l) {
    var o = !1, c = wr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ua(d) : (c = Pn(r) ? Xr : kn.current, o = r.contextTypes, d = (o = o != null) ? Kr(n, c) : wr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Gv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && tf.enqueueReplaceState(r, r.state, null);
  }
  function _s(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Dd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ua(d) : (d = Pn(r) ? Xr : kn.current, c.context = Kr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (zd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && tf.enqueueReplaceState(c, c.state, null), vs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ou(n, r) {
    try {
      var l = "", o = r;
      do
        l += oe(o), o = o.return;
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
  function Xv(n, r, l) {
    l = Zi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      bo || (bo = !0, Lu = o), Ud(n, r);
    }, l;
  }
  function jd(n, r, l) {
    l = Zi(-1, l), l.tag = 3;
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
    c.has(l) || (c.add(l), n = _y.bind(null, n, r, l), r.then(n, n));
  }
  function Kv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Fl(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Zi(-1, 1), r.tag = 2, Al(l, r, 1))), l.lanes |= 1), n);
  }
  var bs = ce.ReactCurrentOwner, $n = !1;
  function cr(n, r, l, o) {
    r.child = n === null ? De(r, null, l, o) : Mn(r, n.child, l, o);
  }
  function ta(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return xn(r, c), o = Ul(n, r, l, o, d, c), l = li(), n !== null && !$n ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (En && l && Mc(r), r.flags |= 1, cr(n, r, o, c), r.child);
  }
  function Mu(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Zd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, St(n, r, d, o, c)) : (n = $s(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : as, l(m, o) && n.ref === r.ref) return Fa(n, r, c);
    }
    return r.flags |= 1, n = Bl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function St(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (as(d, o) && n.ref === r.ref) if ($n = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && ($n = !0);
      else return r.lanes = n.lanes, Fa(n, r, c);
    }
    return qv(n, r, l, o, c);
  }
  function ks(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Xe(wo, ya), ya |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Xe(wo, ya), ya |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Xe(wo, ya), ya |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Xe(wo, ya), ya |= o;
    return cr(n, r, c, l), r.child;
  }
  function Hd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qv(n, r, l, o, c) {
    var d = Pn(l) ? Xr : kn.current;
    return d = Kr(r, d), xn(r, c), l = Ul(n, r, l, o, d, c), o = li(), n !== null && !$n ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (En && o && Mc(r), r.flags |= 1, cr(n, r, l, c), r.child);
  }
  function Zv(n, r, l, o, c) {
    if (Pn(l)) {
      var d = !0;
      er(r);
    } else d = !1;
    if (xn(r, c), r.stateNode === null) ja(n, r), nf(r, l, o), _s(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, T = r.memoizedProps;
      m.props = T;
      var _ = m.context, B = l.contextType;
      typeof B == "object" && B !== null ? B = Ua(B) : (B = Pn(l) ? Xr : kn.current, B = Kr(r, B));
      var le = l.getDerivedStateFromProps, de = typeof le == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      de || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (T !== o || _ !== B) && Gv(r, m, o, B), ma = !1;
      var ie = r.memoizedState;
      m.state = ie, vs(r, o, m, c), _ = r.memoizedState, T !== o || ie !== _ || Xn.current || ma ? (typeof le == "function" && (zd(r, l, le, o), _ = r.memoizedState), (T = ma || Qv(r, l, T, o, ie, _, B)) ? (de || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = _), m.props = o, m.state = _, m.context = B, o = T) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, $v(n, r), T = r.memoizedProps, B = r.type === r.elementType ? T : ui(r.type, T), m.props = B, de = r.pendingProps, ie = m.context, _ = l.contextType, typeof _ == "object" && _ !== null ? _ = Ua(_) : (_ = Pn(l) ? Xr : kn.current, _ = Kr(r, _));
      var Ne = l.getDerivedStateFromProps;
      (le = typeof Ne == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (T !== de || ie !== _) && Gv(r, m, o, _), ma = !1, ie = r.memoizedState, m.state = ie, vs(r, o, m, c);
      var Pe = r.memoizedState;
      T !== de || ie !== Pe || Xn.current || ma ? (typeof Ne == "function" && (zd(r, l, Ne, o), Pe = r.memoizedState), (B = ma || Qv(r, l, B, o, ie, Pe, _) || !1) ? (le || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Pe, _), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Pe, _)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || T === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Pe), m.props = o, m.state = Pe, m.context = _, o = B) : (typeof m.componentDidUpdate != "function" || T === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ds(n, r, l, o, d, c);
  }
  function Ds(n, r, l, o, c, d) {
    Hd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Dc(r, l, !1), Fa(n, r, d);
    o = r.stateNode, bs.current = r;
    var T = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Mn(r, n.child, null, d), r.child = Mn(r, null, T, d)) : cr(n, r, T, d), r.memoizedState = o.state, c && Dc(r, l, !0), r.child;
  }
  function Ro(n) {
    var r = n.stateNode;
    r.pendingContext ? Hv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Hv(n, r.context, !1), Md(n, r.containerInfo);
  }
  function Jv(n, r, l, o, c) {
    return zl(), qi(c), r.flags |= 256, cr(n, r, l, o), r.child;
  }
  var af = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function lf(n, r, l) {
    var o = r.pendingProps, c = _n.current, d = !1, m = (r.flags & 128) !== 0, T;
    if ((T = m) || (T = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), T ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Xe(_n, c & 1), n === null)
      return Rd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = $l(m, o, 0, null), n = rl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Pd(l), r.memoizedState = af, n) : Vd(r, m));
    if (c = n.memoizedState, c !== null && (T = c.dehydrated, T !== null)) return eh(n, r, m, o, T, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, T = c.sibling;
      var _ = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = _, r.deletions = null) : (o = Bl(c, _), o.subtreeFlags = c.subtreeFlags & 14680064), T !== null ? d = Bl(T, d) : (d = rl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Pd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = af, o;
    }
    return d = n.child, n = d.sibling, o = Bl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Vd(n, r) {
    return r = $l({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Os(n, r, l, o) {
    return o !== null && qi(o), Mn(r, n.child, null, l), n = Vd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function eh(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ad(Error(E(422))), Os(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = $l({ mode: "visible", children: o.children }, c, 0, null), d = rl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Mn(r, n.child, null, m), r.child.memoizedState = Pd(m), r.memoizedState = af, d);
    if (!(r.mode & 1)) return Os(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var T = o.dgst;
      return o = T, d = Error(E(419)), o = Ad(d, o, void 0), Os(n, r, m, o);
    }
    if (T = (m & n.childLanes) !== 0, $n || T) {
      if (o = qn, o !== null) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ha(n, c), jr(o, n, c, -1));
      }
      return qd(), o = Ad(Error(E(421))), Os(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = by.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zr = Ri(c.nextSibling), qr = r, En = !0, Aa = null, n !== null && (Vn[za++] = _i, Vn[za++] = bi, Vn[za++] = pa, _i = n.id, bi = n.overflow, pa = r), r = Vd(r, o.children), r.flags |= 4096, r);
  }
  function Bd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), _d(n.return, r, l);
  }
  function zr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Di(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (cr(n, r, o.children, l), o = _n.current, o & 2) o = o & 1 | 2, r.flags |= 128;
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
    if (Xe(_n, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && jc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), zr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && jc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        zr(r, !0, l, null, d);
        break;
      case "together":
        zr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function ja(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Fa(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Ni |= r.lanes, !(l & r.childLanes)) return null;
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
        Iv(r);
        break;
      case 1:
        Pn(r.type) && er(r);
        break;
      case 4:
        Md(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Xe(va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Xe(_n, _n.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? lf(n, r, l) : (Xe(_n, _n.current & 1), n = Fa(n, r, l), n !== null ? n.sibling : null);
        Xe(_n, _n.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Di(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Xe(_n, _n.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ks(n, r, l);
    }
    return Fa(n, r, l);
  }
  var Ha, Yn, th, nh;
  Ha = function(n, r) {
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
  }, Yn = function() {
  }, th = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Ru(ki.current);
      var d = null;
      switch (l) {
        case "input":
          c = qt(n, c), o = qt(n, o), d = [];
          break;
        case "select":
          c = we({}, c, { value: void 0 }), o = we({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Dn(n, c), o = Dn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = kl);
      }
      mn(l, o);
      var m;
      l = null;
      for (B in c) if (!o.hasOwnProperty(B) && c.hasOwnProperty(B) && c[B] != null) if (B === "style") {
        var T = c[B];
        for (m in T) T.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else B !== "dangerouslySetInnerHTML" && B !== "children" && B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && B !== "autoFocus" && (j.hasOwnProperty(B) ? d || (d = []) : (d = d || []).push(B, null));
      for (B in o) {
        var _ = o[B];
        if (T = c != null ? c[B] : void 0, o.hasOwnProperty(B) && _ !== T && (_ != null || T != null)) if (B === "style") if (T) {
          for (m in T) !T.hasOwnProperty(m) || _ && _.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in _) _.hasOwnProperty(m) && T[m] !== _[m] && (l || (l = {}), l[m] = _[m]);
        } else l || (d || (d = []), d.push(
          B,
          l
        )), l = _;
        else B === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, T = T ? T.__html : void 0, _ != null && T !== _ && (d = d || []).push(B, _)) : B === "children" ? typeof _ != "string" && typeof _ != "number" || (d = d || []).push(B, "" + _) : B !== "suppressContentEditableWarning" && B !== "suppressHydrationWarning" && (j.hasOwnProperty(B) ? (_ != null && B === "onScroll" && Xt("scroll", n), d || T === _ || (d = [])) : (d = d || []).push(B, _));
      }
      l && (d = d || []).push("style", l);
      var B = d;
      (r.updateQueue = B) && (r.flags |= 4);
    }
  }, nh = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ns(n, r) {
    if (!En) switch (n.tailMode) {
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
  function nr(n) {
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
        return nr(r), null;
      case 1:
        return Pn(r.type) && yo(), nr(r), null;
      case 3:
        return o = r.stateNode, Tu(), hn(Xn), hn(kn), qe(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Lc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (zu(Aa), Aa = null))), Yn(n, r), nr(r), null;
      case 5:
        Uc(r);
        var c = Ru(ys.current);
        if (l = r.type, n !== null && r.stateNode != null) th(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(E(166));
            return nr(r), null;
          }
          if (n = Ru(ki.current), Lc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ti] = r, o[cs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Xt("cancel", o), Xt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Xt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < us.length; c++) Xt(us[c], o);
                break;
              case "source":
                Xt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Xt(
                  "error",
                  o
                ), Xt("load", o);
                break;
              case "details":
                Xt("toggle", o);
                break;
              case "input":
                cn(o, d), Xt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Xt("invalid", o);
                break;
              case "textarea":
                Cr(o, d), Xt("invalid", o);
            }
            mn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var T = d[m];
              m === "children" ? typeof T == "string" ? o.textContent !== T && (d.suppressHydrationWarning !== !0 && xc(o.textContent, T, n), c = ["children", T]) : typeof T == "number" && o.textContent !== "" + T && (d.suppressHydrationWarning !== !0 && xc(
                o.textContent,
                T,
                n
              ), c = ["children", "" + T]) : j.hasOwnProperty(m) && T != null && m === "onScroll" && Xt("scroll", o);
            }
            switch (l) {
              case "input":
                Ee(o), _a(o, d, !0);
                break;
              case "textarea":
                Ee(o), Fn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = kl);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Rr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ti] = r, n[cs] = o, Ha(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Jn(l, o), l) {
                case "dialog":
                  Xt("cancel", n), Xt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Xt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < us.length; c++) Xt(us[c], n);
                  c = o;
                  break;
                case "source":
                  Xt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Xt(
                    "error",
                    n
                  ), Xt("load", n), c = o;
                  break;
                case "details":
                  Xt("toggle", n), c = o;
                  break;
                case "input":
                  cn(n, o), c = qt(n, o), Xt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = we({}, o, { value: void 0 }), Xt("invalid", n);
                  break;
                case "textarea":
                  Cr(n, o), c = Dn(n, o), Xt("invalid", n);
                  break;
                default:
                  c = o;
              }
              mn(l, c), T = c;
              for (d in T) if (T.hasOwnProperty(d)) {
                var _ = T[d];
                d === "style" ? fn(n, _) : d === "dangerouslySetInnerHTML" ? (_ = _ ? _.__html : void 0, _ != null && pi(n, _)) : d === "children" ? typeof _ == "string" ? (l !== "textarea" || _ !== "") && Te(n, _) : typeof _ == "number" && Te(n, "" + _) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (j.hasOwnProperty(d) ? _ != null && d === "onScroll" && Xt("scroll", n) : _ != null && Ce(n, d, _, m));
              }
              switch (l) {
                case "input":
                  Ee(n), _a(n, o, !1);
                  break;
                case "textarea":
                  Ee(n), Fn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + _e(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Qt(n, !!o.multiple, d, !1) : o.defaultValue != null && Qt(
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
        return nr(r), null;
      case 6:
        if (n && r.stateNode != null) nh(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(E(166));
          if (l = Ru(ys.current), Ru(ki.current), Lc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ti] = r, (d = o.nodeValue !== l) && (n = qr, n !== null)) switch (n.tag) {
              case 3:
                xc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && xc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ti] = r, r.stateNode = o;
        }
        return nr(r), null;
      case 13:
        if (hn(_n), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (En && Zr !== null && r.mode & 1 && !(r.flags & 128)) ps(), zl(), r.flags |= 98560, d = !1;
          else if (d = Lc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(E(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(E(317));
              d[Ti] = r;
            } else zl(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            nr(r), d = !1;
          } else Aa !== null && (zu(Aa), Aa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || _n.current & 1 ? zn === 0 && (zn = 3) : qd())), r.updateQueue !== null && (r.flags |= 4), nr(r), null);
      case 4:
        return Tu(), Yn(n, r), n === null && fo(r.stateNode.containerInfo), nr(r), null;
      case 10:
        return xd(r.type._context), nr(r), null;
      case 17:
        return Pn(r.type) && yo(), nr(r), null;
      case 19:
        if (hn(_n), d = r.memoizedState, d === null) return nr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ns(d, !1);
        else {
          if (zn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = jc(n), m !== null) {
              for (r.flags |= 128, Ns(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Xe(_n, _n.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && gt() > _o && (r.flags |= 128, o = !0, Ns(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = jc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ns(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !En) return nr(r), null;
          } else 2 * gt() - d.renderingStartTime > _o && l !== 1073741824 && (r.flags |= 128, o = !0, Ns(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = gt(), r.sibling = null, l = _n.current, Xe(_n, o ? l & 1 | 2 : l & 1), r) : (nr(r), null);
      case 22:
      case 23:
        return Kd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ya & 1073741824 && (nr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : nr(r), null;
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
        return Pn(r.type) && yo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Tu(), hn(Xn), hn(kn), qe(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Uc(r), null;
      case 13:
        if (hn(_n), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(E(340));
          zl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return hn(_n), null;
      case 4:
        return Tu(), null;
      case 10:
        return xd(r.type._context), null;
      case 22:
      case 23:
        return Kd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ls = !1, _r = !1, Ey = typeof WeakSet == "function" ? WeakSet : Set, Ae = null;
  function To(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Cn(n, r, o);
    }
    else l.current = null;
  }
  function of(n, r, l) {
    try {
      l();
    } catch (o) {
      Cn(n, r, o);
    }
  }
  var ah = !1;
  function ih(n, r) {
    if (ss = Oa, n = is(), yc(n)) {
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
          var m = 0, T = -1, _ = -1, B = 0, le = 0, de = n, ie = null;
          t: for (; ; ) {
            for (var Ne; de !== l || c !== 0 && de.nodeType !== 3 || (T = m + c), de !== d || o !== 0 && de.nodeType !== 3 || (_ = m + o), de.nodeType === 3 && (m += de.nodeValue.length), (Ne = de.firstChild) !== null; )
              ie = de, de = Ne;
            for (; ; ) {
              if (de === n) break t;
              if (ie === l && ++B === c && (T = m), ie === d && ++le === o && (_ = m), (Ne = de.nextSibling) !== null) break;
              de = ie, ie = de.parentNode;
            }
            de = Ne;
          }
          l = T === -1 || _ === -1 ? null : { start: T, end: _ };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (mu = { focusedElem: n, selectionRange: l }, Oa = !1, Ae = r; Ae !== null; ) if (r = Ae, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ae = n;
    else for (; Ae !== null; ) {
      r = Ae;
      try {
        var Pe = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Pe !== null) {
              var Ie = Pe.memoizedProps, An = Pe.memoizedState, N = r.stateNode, k = N.getSnapshotBeforeUpdate(r.elementType === r.type ? Ie : ui(r.type, Ie), An);
              N.__reactInternalSnapshotBeforeUpdate = k;
            }
            break;
          case 3:
            var U = r.stateNode.containerInfo;
            U.nodeType === 1 ? U.textContent = "" : U.nodeType === 9 && U.documentElement && U.removeChild(U.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(E(163));
        }
      } catch (ue) {
        Cn(r, r.return, ue);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ae = n;
        break;
      }
      Ae = r.return;
    }
    return Pe = ah, ah = !1, Pe;
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
    r !== null && (n.alternate = null, sf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ti], delete r[cs], delete r[fs], delete r[mo], delete r[gy])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Us(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function el(n) {
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
  function Oi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = kl));
    else if (o !== 4 && (n = n.child, n !== null)) for (Oi(n, r, l), n = n.sibling; n !== null; ) Oi(n, r, l), n = n.sibling;
  }
  function Mi(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Mi(n, r, l), n = n.sibling; n !== null; ) Mi(n, r, l), n = n.sibling;
  }
  var Ln = null, Ar = !1;
  function Ur(n, r, l) {
    for (l = l.child; l !== null; ) lh(n, r, l), l = l.sibling;
  }
  function lh(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(Sl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        _r || To(l, r);
      case 6:
        var o = Ln, c = Ar;
        Ln = null, Ur(n, r, l), Ln = o, Ar = c, Ln !== null && (Ar ? (n = Ln, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Ln.removeChild(l.stateNode));
        break;
      case 18:
        Ln !== null && (Ar ? (n = Ln, l = l.stateNode, n.nodeType === 8 ? ho(n.parentNode, l) : n.nodeType === 1 && ho(n, l), ni(n)) : ho(Ln, l.stateNode));
        break;
      case 4:
        o = Ln, c = Ar, Ln = l.stateNode.containerInfo, Ar = !0, Ur(n, r, l), Ln = o, Ar = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!_r && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && of(l, r, m), c = c.next;
          } while (c !== o);
        }
        Ur(n, r, l);
        break;
      case 1:
        if (!_r && (To(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (T) {
          Cn(l, r, T);
        }
        Ur(n, r, l);
        break;
      case 21:
        Ur(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (_r = (o = _r) || l.memoizedState !== null, Ur(n, r, l), _r = o) : Ur(n, r, l);
        break;
      default:
        Ur(n, r, l);
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
  function oi(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, T = m;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 5:
              Ln = T.stateNode, Ar = !1;
              break e;
            case 3:
              Ln = T.stateNode.containerInfo, Ar = !0;
              break e;
            case 4:
              Ln = T.stateNode.containerInfo, Ar = !0;
              break e;
          }
          T = T.return;
        }
        if (Ln === null) throw Error(E(160));
        lh(d, m, c), Ln = null, Ar = !1;
        var _ = c.alternate;
        _ !== null && (_.return = null), c.return = null;
      } catch (B) {
        Cn(c, r, B);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Yd(r, n), r = r.sibling;
  }
  function Yd(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (oi(r, n), na(n), o & 4) {
          try {
            zs(3, n, n.return), As(3, n);
          } catch (Ie) {
            Cn(n, n.return, Ie);
          }
          try {
            zs(5, n, n.return);
          } catch (Ie) {
            Cn(n, n.return, Ie);
          }
        }
        break;
      case 1:
        oi(r, n), na(n), o & 512 && l !== null && To(l, l.return);
        break;
      case 5:
        if (oi(r, n), na(n), o & 512 && l !== null && To(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Te(c, "");
          } catch (Ie) {
            Cn(n, n.return, Ie);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, T = n.type, _ = n.updateQueue;
          if (n.updateQueue = null, _ !== null) try {
            T === "input" && d.type === "radio" && d.name != null && jn(c, d), Jn(T, m);
            var B = Jn(T, d);
            for (m = 0; m < _.length; m += 2) {
              var le = _[m], de = _[m + 1];
              le === "style" ? fn(c, de) : le === "dangerouslySetInnerHTML" ? pi(c, de) : le === "children" ? Te(c, de) : Ce(c, le, de, B);
            }
            switch (T) {
              case "input":
                ir(c, d);
                break;
              case "textarea":
                Ga(c, d);
                break;
              case "select":
                var ie = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Ne = d.value;
                Ne != null ? Qt(c, !!d.multiple, Ne, !1) : ie !== !!d.multiple && (d.defaultValue != null ? Qt(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Qt(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[cs] = d;
          } catch (Ie) {
            Cn(n, n.return, Ie);
          }
        }
        break;
      case 6:
        if (oi(r, n), na(n), o & 4) {
          if (n.stateNode === null) throw Error(E(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ie) {
            Cn(n, n.return, Ie);
          }
        }
        break;
      case 3:
        if (oi(r, n), na(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ni(r.containerInfo);
        } catch (Ie) {
          Cn(n, n.return, Ie);
        }
        break;
      case 4:
        oi(r, n), na(n);
        break;
      case 13:
        oi(r, n), na(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Qd = gt())), o & 4 && uh(n);
        break;
      case 22:
        if (le = l !== null && l.memoizedState !== null, n.mode & 1 ? (_r = (B = _r) || le, oi(r, n), _r = B) : oi(r, n), na(n), o & 8192) {
          if (B = n.memoizedState !== null, (n.stateNode.isHidden = B) && !le && n.mode & 1) for (Ae = n, le = n.child; le !== null; ) {
            for (de = Ae = le; Ae !== null; ) {
              switch (ie = Ae, Ne = ie.child, ie.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zs(4, ie, ie.return);
                  break;
                case 1:
                  To(ie, ie.return);
                  var Pe = ie.stateNode;
                  if (typeof Pe.componentWillUnmount == "function") {
                    o = ie, l = ie.return;
                    try {
                      r = o, Pe.props = r.memoizedProps, Pe.state = r.memoizedState, Pe.componentWillUnmount();
                    } catch (Ie) {
                      Cn(o, l, Ie);
                    }
                  }
                  break;
                case 5:
                  To(ie, ie.return);
                  break;
                case 22:
                  if (ie.memoizedState !== null) {
                    js(de);
                    continue;
                  }
              }
              Ne !== null ? (Ne.return = ie, Ae = Ne) : js(de);
            }
            le = le.sibling;
          }
          e: for (le = null, de = n; ; ) {
            if (de.tag === 5) {
              if (le === null) {
                le = de;
                try {
                  c = de.stateNode, B ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (T = de.stateNode, _ = de.memoizedProps.style, m = _ != null && _.hasOwnProperty("display") ? _.display : null, T.style.display = Gt("display", m));
                } catch (Ie) {
                  Cn(n, n.return, Ie);
                }
              }
            } else if (de.tag === 6) {
              if (le === null) try {
                de.stateNode.nodeValue = B ? "" : de.memoizedProps;
              } catch (Ie) {
                Cn(n, n.return, Ie);
              }
            } else if ((de.tag !== 22 && de.tag !== 23 || de.memoizedState === null || de === n) && de.child !== null) {
              de.child.return = de, de = de.child;
              continue;
            }
            if (de === n) break e;
            for (; de.sibling === null; ) {
              if (de.return === null || de.return === n) break e;
              le === de && (le = null), de = de.return;
            }
            le === de && (le = null), de.sibling.return = de.return, de = de.sibling;
          }
        }
        break;
      case 19:
        oi(r, n), na(n), o & 4 && uh(n);
        break;
      case 21:
        break;
      default:
        oi(
          r,
          n
        ), na(n);
    }
  }
  function na(n) {
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
            o.flags & 32 && (Te(c, ""), o.flags &= -33);
            var d = el(n);
            Mi(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, T = el(n);
            Oi(n, T, m);
            break;
          default:
            throw Error(E(161));
        }
      } catch (_) {
        Cn(n, n.return, _);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Cy(n, r, l) {
    Ae = n, Id(n);
  }
  function Id(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Ae !== null; ) {
      var c = Ae, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ls;
        if (!m) {
          var T = c.alternate, _ = T !== null && T.memoizedState !== null || _r;
          T = Ls;
          var B = _r;
          if (Ls = m, (_r = _) && !B) for (Ae = c; Ae !== null; ) m = Ae, _ = m.child, m.tag === 22 && m.memoizedState !== null ? Wd(c) : _ !== null ? (_.return = m, Ae = _) : Wd(c);
          for (; d !== null; ) Ae = d, Id(d), d = d.sibling;
          Ae = c, Ls = T, _r = B;
        }
        oh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Ae = d) : oh(n);
    }
  }
  function oh(n) {
    for (; Ae !== null; ) {
      var r = Ae;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              _r || As(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !_r) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ui(r.type, l.memoizedProps);
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
              var T = r.stateNode;
              if (l === null && r.flags & 4) {
                l = T;
                var _ = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    _.autoFocus && l.focus();
                    break;
                  case "img":
                    _.src && (l.src = _.src);
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
                var B = r.alternate;
                if (B !== null) {
                  var le = B.memoizedState;
                  if (le !== null) {
                    var de = le.dehydrated;
                    de !== null && ni(de);
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
          _r || r.flags & 512 && $d(r);
        } catch (ie) {
          Cn(r, r.return, ie);
        }
      }
      if (r === n) {
        Ae = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Ae = l;
        break;
      }
      Ae = r.return;
    }
  }
  function js(n) {
    for (; Ae !== null; ) {
      var r = Ae;
      if (r === n) {
        Ae = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Ae = l;
        break;
      }
      Ae = r.return;
    }
  }
  function Wd(n) {
    for (; Ae !== null; ) {
      var r = Ae;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              As(4, r);
            } catch (_) {
              Cn(r, l, _);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (_) {
                Cn(r, c, _);
              }
            }
            var d = r.return;
            try {
              $d(r);
            } catch (_) {
              Cn(r, d, _);
            }
            break;
          case 5:
            var m = r.return;
            try {
              $d(r);
            } catch (_) {
              Cn(r, m, _);
            }
        }
      } catch (_) {
        Cn(r, r.return, _);
      }
      if (r === n) {
        Ae = null;
        break;
      }
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, Ae = T;
        break;
      }
      Ae = r.return;
    }
  }
  var Ry = Math.ceil, Hl = ce.ReactCurrentDispatcher, Nu = ce.ReactCurrentOwner, fr = ce.ReactCurrentBatchConfig, Lt = 0, qn = null, In = null, dr = 0, ya = 0, wo = La(0), zn = 0, Fs = null, Ni = 0, xo = 0, cf = 0, Hs = null, ra = null, Qd = 0, _o = 1 / 0, ga = null, bo = !1, Lu = null, Pl = null, ff = !1, tl = null, Ps = 0, Vl = 0, ko = null, Vs = -1, br = 0;
  function Wn() {
    return Lt & 6 ? gt() : Vs !== -1 ? Vs : Vs = gt();
  }
  function Li(n) {
    return n.mode & 1 ? Lt & 2 && dr !== 0 ? dr & -dr : Sy.transition !== null ? (br === 0 && (br = Ju()), br) : (n = Vt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : lo(n.type)), n) : 1;
  }
  function jr(n, r, l, o) {
    if (50 < Vl) throw Vl = 0, ko = null, Error(E(185));
    Bi(n, l, o), (!(Lt & 2) || n !== qn) && (n === qn && (!(Lt & 2) && (xo |= l), zn === 4 && si(n, dr)), aa(n, o), l === 1 && Lt === 0 && !(r.mode & 1) && (_o = gt() + 500, go && xi()));
  }
  function aa(n, r) {
    var l = n.callbackNode;
    uu(n, r);
    var o = ti(n, n === qn ? dr : 0);
    if (o === 0) l !== null && ur(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && ur(l), r === 1) n.tag === 0 ? Ol(Gd.bind(null, n)) : Oc(Gd.bind(null, n)), vo(function() {
        !(Lt & 6) && xi();
      }), l = null;
      else {
        switch (to(o)) {
          case 1:
            l = Ja;
            break;
          case 4:
            l = iu;
            break;
          case 16:
            l = lu;
            break;
          case 536870912:
            l = Ku;
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
    if (Vs = -1, br = 0, Lt & 6) throw Error(E(327));
    var l = n.callbackNode;
    if (Do() && n.callbackNode !== l) return null;
    var o = ti(n, n === qn ? dr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = pf(n, o);
    else {
      r = o;
      var c = Lt;
      Lt |= 2;
      var d = ch();
      (qn !== n || dr !== r) && (ga = null, _o = gt() + 500, nl(n, r));
      do
        try {
          fh();
          break;
        } catch (T) {
          sh(n, T);
        }
      while (!0);
      wd(), Hl.current = d, Lt = c, In !== null ? r = 0 : (qn = null, dr = 0, r = zn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Cl(n), c !== 0 && (o = c, r = Bs(n, c))), r === 1) throw l = Fs, nl(n, 0), si(n, o), aa(n, gt()), l;
      if (r === 6) si(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Ty(c) && (r = pf(n, o), r === 2 && (d = Cl(n), d !== 0 && (o = d, r = Bs(n, d))), r === 1)) throw l = Fs, nl(n, 0), si(n, o), aa(n, gt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(E(345));
          case 2:
            Uu(n, ra, ga);
            break;
          case 3:
            if (si(n, o), (o & 130023424) === o && (r = Qd + 500 - gt(), 10 < r)) {
              if (ti(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Wn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = bc(Uu.bind(null, n, ra, ga), r);
              break;
            }
            Uu(n, ra, ga);
            break;
          case 4:
            if (si(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Mr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = gt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Ry(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = bc(Uu.bind(null, n, ra, ga), o);
              break;
            }
            Uu(n, ra, ga);
            break;
          case 5:
            Uu(n, ra, ga);
            break;
          default:
            throw Error(E(329));
        }
      }
    }
    return aa(n, gt()), n.callbackNode === l ? df.bind(null, n) : null;
  }
  function Bs(n, r) {
    var l = Hs;
    return n.current.memoizedState.isDehydrated && (nl(n, r).flags |= 256), n = pf(n, r), n !== 2 && (r = ra, ra = l, r !== null && zu(r)), n;
  }
  function zu(n) {
    ra === null ? ra = n : ra.push.apply(ra, n);
  }
  function Ty(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!ai(d(), c)) return !1;
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
  function si(n, r) {
    for (r &= ~cf, r &= ~xo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Mr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Gd(n) {
    if (Lt & 6) throw Error(E(327));
    Do();
    var r = ti(n, 0);
    if (!(r & 1)) return aa(n, gt()), null;
    var l = pf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Cl(n);
      o !== 0 && (r = o, l = Bs(n, o));
    }
    if (l === 1) throw l = Fs, nl(n, 0), si(n, r), aa(n, gt()), l;
    if (l === 6) throw Error(E(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Uu(n, ra, ga), aa(n, gt()), null;
  }
  function Xd(n, r) {
    var l = Lt;
    Lt |= 1;
    try {
      return n(r);
    } finally {
      Lt = l, Lt === 0 && (_o = gt() + 500, go && xi());
    }
  }
  function Au(n) {
    tl !== null && tl.tag === 0 && !(Lt & 6) && Do();
    var r = Lt;
    Lt |= 1;
    var l = fr.transition, o = Vt;
    try {
      if (fr.transition = null, Vt = 1, n) return n();
    } finally {
      Vt = o, fr.transition = l, Lt = r, !(Lt & 6) && xi();
    }
  }
  function Kd() {
    ya = wo.current, hn(wo);
  }
  function nl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Sd(l)), In !== null) for (l = In.return; l !== null; ) {
      var o = l;
      switch (Nc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && yo();
          break;
        case 3:
          Tu(), hn(Xn), hn(kn), qe();
          break;
        case 5:
          Uc(o);
          break;
        case 4:
          Tu();
          break;
        case 13:
          hn(_n);
          break;
        case 19:
          hn(_n);
          break;
        case 10:
          xd(o.type._context);
          break;
        case 22:
        case 23:
          Kd();
      }
      l = l.return;
    }
    if (qn = n, In = n = Bl(n.current, null), dr = ya = r, zn = 0, Fs = null, cf = xo = Ni = 0, ra = Hs = null, Cu !== null) {
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
      var l = In;
      try {
        if (wd(), xt.current = Du, Fc) {
          for (var o = $t.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Fc = !1;
        }
        if (ln = 0, tr = Bn = $t = null, Ss = !1, wu = 0, Nu.current = null, l === null || l.return === null) {
          zn = 1, Fs = r, In = null;
          break;
        }
        e: {
          var d = n, m = l.return, T = l, _ = r;
          if (r = dr, T.flags |= 32768, _ !== null && typeof _ == "object" && typeof _.then == "function") {
            var B = _, le = T, de = le.tag;
            if (!(le.mode & 1) && (de === 0 || de === 11 || de === 15)) {
              var ie = le.alternate;
              ie ? (le.updateQueue = ie.updateQueue, le.memoizedState = ie.memoizedState, le.lanes = ie.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var Ne = Kv(m);
            if (Ne !== null) {
              Ne.flags &= -257, Fl(Ne, m, T, d, r), Ne.mode & 1 && Fd(d, B, r), r = Ne, _ = B;
              var Pe = r.updateQueue;
              if (Pe === null) {
                var Ie = /* @__PURE__ */ new Set();
                Ie.add(_), r.updateQueue = Ie;
              } else Pe.add(_);
              break e;
            } else {
              if (!(r & 1)) {
                Fd(d, B, r), qd();
                break e;
              }
              _ = Error(E(426));
            }
          } else if (En && T.mode & 1) {
            var An = Kv(m);
            if (An !== null) {
              !(An.flags & 65536) && (An.flags |= 256), Fl(An, m, T, d, r), qi(Ou(_, T));
              break e;
            }
          }
          d = _ = Ou(_, T), zn !== 4 && (zn = 2), Hs === null ? Hs = [d] : Hs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var N = Xv(d, _, r);
                Yv(d, N);
                break e;
              case 1:
                T = _;
                var k = d.type, U = d.stateNode;
                if (!(d.flags & 128) && (typeof k.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (Pl === null || !Pl.has(U)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ue = jd(d, T, r);
                  Yv(d, ue);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ph(l);
      } catch (Ve) {
        r = Ve, In === l && l !== null && (In = l = l.return);
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
    (zn === 0 || zn === 3 || zn === 2) && (zn = 4), qn === null || !(Ni & 268435455) && !(xo & 268435455) || si(qn, dr);
  }
  function pf(n, r) {
    var l = Lt;
    Lt |= 2;
    var o = ch();
    (qn !== n || dr !== r) && (ga = null, nl(n, r));
    do
      try {
        wy();
        break;
      } catch (c) {
        sh(n, c);
      }
    while (!0);
    if (wd(), Lt = l, Hl.current = o, In !== null) throw Error(E(261));
    return qn = null, dr = 0, zn;
  }
  function wy() {
    for (; In !== null; ) dh(In);
  }
  function fh() {
    for (; In !== null && !qa(); ) dh(In);
  }
  function dh(n) {
    var r = yh(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? ph(n) : In = r, Nu.current = null;
  }
  function ph(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = uf(l, r), l !== null) {
          l.flags &= 32767, In = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          zn = 6, In = null;
          return;
        }
      } else if (l = rh(l, r, ya), l !== null) {
        In = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        In = r;
        return;
      }
      In = r = n;
    } while (r !== null);
    zn === 0 && (zn = 5);
  }
  function Uu(n, r, l) {
    var o = Vt, c = fr.transition;
    try {
      fr.transition = null, Vt = 1, xy(n, r, l, o);
    } finally {
      fr.transition = c, Vt = o;
    }
    return null;
  }
  function xy(n, r, l, o) {
    do
      Do();
    while (tl !== null);
    if (Lt & 6) throw Error(E(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(E(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Zf(n, d), n === qn && (In = qn = null, dr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ff || (ff = !0, gh(lu, function() {
      return Do(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = fr.transition, fr.transition = null;
      var m = Vt;
      Vt = 1;
      var T = Lt;
      Lt |= 4, Nu.current = null, ih(n, l), Yd(l, n), so(mu), Oa = !!ss, mu = ss = null, n.current = l, Cy(l), Za(), Lt = T, Vt = m, fr.transition = d;
    } else n.current = l;
    if (ff && (ff = !1, tl = n, Ps = c), d = n.pendingLanes, d === 0 && (Pl = null), Xo(l.stateNode), aa(n, gt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (bo) throw bo = !1, n = Lu, Lu = null, n;
    return Ps & 1 && n.tag !== 0 && Do(), d = n.pendingLanes, d & 1 ? n === ko ? Vl++ : (Vl = 0, ko = n) : Vl = 0, xi(), null;
  }
  function Do() {
    if (tl !== null) {
      var n = to(Ps), r = fr.transition, l = Vt;
      try {
        if (fr.transition = null, Vt = 16 > n ? 16 : n, tl === null) var o = !1;
        else {
          if (n = tl, tl = null, Ps = 0, Lt & 6) throw Error(E(331));
          var c = Lt;
          for (Lt |= 4, Ae = n.current; Ae !== null; ) {
            var d = Ae, m = d.child;
            if (Ae.flags & 16) {
              var T = d.deletions;
              if (T !== null) {
                for (var _ = 0; _ < T.length; _++) {
                  var B = T[_];
                  for (Ae = B; Ae !== null; ) {
                    var le = Ae;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zs(8, le, d);
                    }
                    var de = le.child;
                    if (de !== null) de.return = le, Ae = de;
                    else for (; Ae !== null; ) {
                      le = Ae;
                      var ie = le.sibling, Ne = le.return;
                      if (sf(le), le === B) {
                        Ae = null;
                        break;
                      }
                      if (ie !== null) {
                        ie.return = Ne, Ae = ie;
                        break;
                      }
                      Ae = Ne;
                    }
                  }
                }
                var Pe = d.alternate;
                if (Pe !== null) {
                  var Ie = Pe.child;
                  if (Ie !== null) {
                    Pe.child = null;
                    do {
                      var An = Ie.sibling;
                      Ie.sibling = null, Ie = An;
                    } while (Ie !== null);
                  }
                }
                Ae = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, Ae = m;
            else e: for (; Ae !== null; ) {
              if (d = Ae, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  zs(9, d, d.return);
              }
              var N = d.sibling;
              if (N !== null) {
                N.return = d.return, Ae = N;
                break e;
              }
              Ae = d.return;
            }
          }
          var k = n.current;
          for (Ae = k; Ae !== null; ) {
            m = Ae;
            var U = m.child;
            if (m.subtreeFlags & 2064 && U !== null) U.return = m, Ae = U;
            else e: for (m = k; Ae !== null; ) {
              if (T = Ae, T.flags & 2048) try {
                switch (T.tag) {
                  case 0:
                  case 11:
                  case 15:
                    As(9, T);
                }
              } catch (Ve) {
                Cn(T, T.return, Ve);
              }
              if (T === m) {
                Ae = null;
                break e;
              }
              var ue = T.sibling;
              if (ue !== null) {
                ue.return = T.return, Ae = ue;
                break e;
              }
              Ae = T.return;
            }
          }
          if (Lt = c, xi(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(Sl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Vt = l, fr.transition = r;
      }
    }
    return !1;
  }
  function vh(n, r, l) {
    r = Ou(l, r), r = Xv(n, r, 1), n = Al(n, r, 1), r = Wn(), n !== null && (Bi(n, 1, r), aa(n, r));
  }
  function Cn(n, r, l) {
    if (n.tag === 3) vh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        vh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pl === null || !Pl.has(o))) {
          n = Ou(l, n), n = jd(r, n, 1), r = Al(r, n, 1), n = Wn(), r !== null && (Bi(r, 1, n), aa(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function _y(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Wn(), n.pingedLanes |= n.suspendedLanes & l, qn === n && (dr & l) === l && (zn === 4 || zn === 3 && (dr & 130023424) === dr && 500 > gt() - Qd ? nl(n, 0) : cf |= l), aa(n, r);
  }
  function hh(n, r) {
    r === 0 && (n.mode & 1 ? (r = da, da <<= 1, !(da & 130023424) && (da = 4194304)) : r = 1);
    var l = Wn();
    n = ha(n, r), n !== null && (Bi(n, r, l), aa(n, l));
  }
  function by(n) {
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
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Xn.current) $n = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return $n = !1, Ms(n, r, l);
      $n = !!(n.flags & 131072);
    }
    else $n = !1, En && r.flags & 1048576 && Pv(r, Ki, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ja(n, r), n = r.pendingProps;
        var c = Kr(r, kn.current);
        xn(r, l), c = Ul(null, r, o, n, c, l);
        var d = li();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Pn(o) ? (d = !0, er(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Dd(r), c.updater = tf, r.stateNode = c, c._reactInternals = r, _s(r, o, n, l), r = Ds(null, r, o, !0, d, l)) : (r.tag = 0, En && d && Mc(r), cr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (ja(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Dy(o), n = ui(o, n), c) {
            case 0:
              r = qv(null, r, o, n, l);
              break e;
            case 1:
              r = Zv(null, r, o, n, l);
              break e;
            case 11:
              r = ta(null, r, o, n, l);
              break e;
            case 14:
              r = Mu(null, r, o, ui(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ui(o, c), qv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ui(o, c), Zv(n, r, o, c, l);
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
          } else for (Zr = Ri(r.stateNode.containerInfo.firstChild), qr = r, En = !0, Aa = null, l = De(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (zl(), o === c) {
              r = Fa(n, r, l);
              break e;
            }
            cr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Iv(r), n === null && Rd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, _c(o, c) ? m = null : d !== null && _c(o, d) && (r.flags |= 32), Hd(n, r), cr(n, r, m, l), r.child;
      case 6:
        return n === null && Rd(r), null;
      case 13:
        return lf(n, r, l);
      case 4:
        return Md(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Mn(r, null, o, l) : cr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ui(o, c), ta(n, r, o, c, l);
      case 7:
        return cr(n, r, r.pendingProps, l), r.child;
      case 8:
        return cr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return cr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Xe(va, o._currentValue), o._currentValue = m, d !== null) if (ai(d.value, m)) {
            if (d.children === c.children && !Xn.current) {
              r = Fa(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var T = d.dependencies;
            if (T !== null) {
              m = d.child;
              for (var _ = T.firstContext; _ !== null; ) {
                if (_.context === o) {
                  if (d.tag === 1) {
                    _ = Zi(-1, l & -l), _.tag = 2;
                    var B = d.updateQueue;
                    if (B !== null) {
                      B = B.shared;
                      var le = B.pending;
                      le === null ? _.next = _ : (_.next = le.next, le.next = _), B.pending = _;
                    }
                  }
                  d.lanes |= l, _ = d.alternate, _ !== null && (_.lanes |= l), _d(
                    d.return,
                    l,
                    r
                  ), T.lanes |= l;
                  break;
                }
                _ = _.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(E(341));
              m.lanes |= l, T = m.alternate, T !== null && (T.lanes |= l), _d(m, l, r), m = d.sibling;
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
          cr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, xn(r, l), c = Ua(c), o = o(c), r.flags |= 1, cr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ui(o, r.pendingProps), c = ui(o.type, c), Mu(n, r, o, c, l);
      case 15:
        return St(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ui(o, c), ja(n, r), r.tag = 1, Pn(o) ? (n = !0, er(r)) : n = !1, xn(r, l), nf(r, o, c), _s(r, o, c, l), Ds(null, r, o, !0, n, l);
      case 19:
        return Di(n, r, l);
      case 22:
        return ks(n, r, l);
    }
    throw Error(E(156, r.tag));
  };
  function gh(n, r) {
    return yn(n, r);
  }
  function ky(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pa(n, r, l, o) {
    return new ky(n, r, l, o);
  }
  function Zd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Dy(n) {
    if (typeof n == "function") return Zd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === mt) return 11;
      if (n === Dt) return 14;
    }
    return 2;
  }
  function Bl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function $s(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Zd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case je:
        return rl(l.children, c, d, r);
      case ot:
        m = 8, c |= 8;
        break;
      case ht:
        return n = Pa(12, l, r, c | 2), n.elementType = ht, n.lanes = d, n;
      case Fe:
        return n = Pa(13, l, r, c), n.elementType = Fe, n.lanes = d, n;
      case Ft:
        return n = Pa(19, l, r, c), n.elementType = Ft, n.lanes = d, n;
      case He:
        return $l(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case nt:
            m = 10;
            break e;
          case Et:
            m = 9;
            break e;
          case mt:
            m = 11;
            break e;
          case Dt:
            m = 14;
            break e;
          case Mt:
            m = 16, o = null;
            break e;
        }
        throw Error(E(130, n == null ? n : typeof n, ""));
    }
    return r = Pa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function rl(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function $l(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = He, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Jd(n, r, l) {
    return n = Pa(6, n, null, r), n.lanes = l, n;
  }
  function vf(n, r, l) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = eo(0), this.expirationTimes = eo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eo(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function hf(n, r, l, o, c, d, m, T, _) {
    return n = new Sh(n, r, l, T, _), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Dd(d), n;
  }
  function Oy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: We, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function ep(n) {
    if (!n) return wr;
    n = n._reactInternals;
    e: {
      if (yt(n) !== n || n.tag !== 1) throw Error(E(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Pn(r.type)) {
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
      if (Pn(l)) return ds(n, l, r);
    }
    return r;
  }
  function Eh(n, r, l, o, c, d, m, T, _) {
    return n = hf(l, o, !0, n, c, d, m, T, _), n.context = ep(null), l = n.current, o = Wn(), c = Li(l), d = Zi(o, c), d.callback = r ?? null, Al(l, d, c), n.current.lanes = c, Bi(n, c, o), aa(n, o), n;
  }
  function mf(n, r, l, o) {
    var c = r.current, d = Wn(), m = Li(c);
    return l = ep(l), r.context === null ? r.context = l : r.pendingContext = l, r = Zi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Al(c, r, m), n !== null && (jr(n, c, m, d), Ac(n, c, m)), m;
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
      var r = ft();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Gn.length && r !== 0 && r < Gn[l].priority; l++) ;
      Gn.splice(l, 0, n), l === 0 && Zo(n);
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
          var B = yf(m);
          d.call(B);
        };
      }
      var m = Eh(r, o, n, 0, null, !1, !1, "", Rh);
      return n._reactRootContainer = m, n[Gi] = m.current, fo(n.nodeType === 8 ? n.parentNode : n), Au(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var T = o;
      o = function() {
        var B = yf(_);
        T.call(B);
      };
    }
    var _ = hf(n, 0, !1, null, null, !1, !1, "", Rh);
    return n._reactRootContainer = _, n[Gi] = _.current, fo(n.nodeType === 8 ? n.parentNode : n), Au(function() {
      mf(r, _, l, o);
    }), _;
  }
  function Ys(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var T = c;
        c = function() {
          var _ = yf(m);
          T.call(_);
        };
      }
      mf(r, m, n, c);
    } else m = My(l, r, n, c, o);
    return yf(m);
  }
  Ut = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ei(r.pendingLanes);
          l !== 0 && ($i(r, l | 1), aa(r, gt()), !(Lt & 6) && (_o = gt() + 500, xi()));
        }
        break;
      case 13:
        Au(function() {
          var o = ha(n, 1);
          if (o !== null) {
            var c = Wn();
            jr(o, n, 1, c);
          }
        }), gf(n, 1);
    }
  }, Ko = function(n) {
    if (n.tag === 13) {
      var r = ha(n, 134217728);
      if (r !== null) {
        var l = Wn();
        jr(r, n, 134217728, l);
      }
      gf(n, 134217728);
    }
  }, yi = function(n) {
    if (n.tag === 13) {
      var r = Li(n), l = ha(n, r);
      if (l !== null) {
        var o = Wn();
        jr(l, n, r, o);
      }
      gf(n, r);
    }
  }, ft = function() {
    return Vt;
  }, no = function(n, r) {
    var l = Vt;
    try {
      return Vt = n, r();
    } finally {
      Vt = l;
    }
  }, tn = function(n, r, l) {
    switch (r) {
      case "input":
        if (ir(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = wn(o);
              if (!c) throw Error(E(90));
              Ye(o), ir(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ga(n, l);
        break;
      case "select":
        r = l.value, r != null && Qt(n, !!l.multiple, r, !1);
    }
  }, ru = Xd, ml = Au;
  var Ny = { usingClientEntryPoint: !1, Events: [Ke, ii, wn, Vi, nu, Xd] }, Is = { findFiberByHostInstance: yu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Th = { bundleType: Is.bundleType, version: Is.version, rendererPackageName: Is.rendererPackageName, rendererConfig: Is.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ce.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = On(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Is.findFiberByHostInstance || Ch, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yl.isDisabled && Yl.supportsFiber) try {
      Sl = Yl.inject(Th), Qr = Yl;
    } catch {
    }
  }
  return Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ny, Wa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!rp(r)) throw Error(E(200));
    return Oy(n, r, null, l);
  }, Wa.createRoot = function(n, r) {
    if (!rp(n)) throw Error(E(299));
    var l = !1, o = "", c = ju;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = hf(n, 1, !1, null, null, l, !1, o, c), n[Gi] = r.current, fo(n.nodeType === 8 ? n.parentNode : n), new np(r);
  }, Wa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(E(188)) : (n = Object.keys(n).join(","), Error(E(268, n)));
    return n = On(r), n = n === null ? null : n.stateNode, n;
  }, Wa.flushSync = function(n) {
    return Au(n);
  }, Wa.hydrate = function(n, r, l) {
    if (!Ef(r)) throw Error(E(200));
    return Ys(null, n, r, !0, l);
  }, Wa.hydrateRoot = function(n, r, l) {
    if (!rp(n)) throw Error(E(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = ju;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Eh(r, null, n, 1, l ?? null, c, !1, d, m), n[Gi] = r.current, fo(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Sf(r);
  }, Wa.render = function(n, r, l) {
    if (!Ef(r)) throw Error(E(200));
    return Ys(null, n, r, !1, l);
  }, Wa.unmountComponentAtNode = function(n) {
    if (!Ef(n)) throw Error(E(40));
    return n._reactRootContainer ? (Au(function() {
      Ys(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Gi] = null;
      });
    }), !0) : !1;
  }, Wa.unstable_batchedUpdates = Xd, Wa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Ef(l)) throw Error(E(200));
    if (n == null || n._reactInternals === void 0) throw Error(E(38));
    return Ys(n, r, l, !1, o);
  }, Wa.version = "18.3.1-next-f1338f8080-20240426", Wa;
}
var Qa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var CT;
function Nk() {
  return CT || (CT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var S = Jt, R = kT(), E = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, A = !1;
    function j(e) {
      A = e;
    }
    function I(e) {
      if (!A) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        te("warn", e, a);
      }
    }
    function y(e) {
      if (!A) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        te("error", e, a);
      }
    }
    function te(e, t, a) {
      {
        var i = E.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var W = 0, M = 1, se = 2, K = 3, Z = 4, F = 5, he = 6, ee = 7, $ = 8, re = 9, fe = 10, Ce = 11, ce = 12, ve = 13, We = 14, je = 15, ot = 16, ht = 17, nt = 18, Et = 19, mt = 21, Fe = 22, Ft = 23, Dt = 24, Mt = 25, He = !0, me = !1, $e = !1, we = !1, O = !1, q = !0, rt = !0, H = !0, oe = !0, ge = /* @__PURE__ */ new Set(), Se = {}, _e = {};
    function Re(e, t) {
      Ze(e, t), Ze(e + "Capture", t);
    }
    function Ze(e, t) {
      Se[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Se[e] = t;
      {
        var a = e.toLowerCase();
        _e[a] = e, e === "onDoubleClick" && (_e.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ge.add(t[i]);
    }
    var Ee = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ye = Object.prototype.hasOwnProperty;
    function ct(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function qt(e) {
      try {
        return cn(e), !1;
      } catch {
        return !0;
      }
    }
    function cn(e) {
      return "" + e;
    }
    function jn(e, t) {
      if (qt(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ct(e)), cn(e);
    }
    function ir(e) {
      if (qt(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ct(e)), cn(e);
    }
    function _a(e, t) {
      if (qt(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ct(e)), cn(e);
    }
    function kr(e, t) {
      if (qt(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, ct(e)), cn(e);
    }
    function Zt(e) {
      if (qt(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", ct(e)), cn(e);
    }
    function Qt(e) {
      if (qt(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", ct(e)), cn(e);
    }
    var Dn = 0, Cr = 1, Ga = 2, Fn = 3, Rr = 4, ca = 5, Xa = 6, pi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Te = pi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Qe = new RegExp("^[" + pi + "][" + Te + "]*$"), Rt = {}, Gt = {};
    function fn(e) {
      return Ye.call(Gt, e) ? !0 : Ye.call(Rt, e) ? !1 : Qe.test(e) ? (Gt[e] = !0, !0) : (Rt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Rn(e, t, a) {
      return t !== null ? t.type === Dn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function mn(e, t, a, i) {
      if (a !== null && a.type === Dn)
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
    function Jn(e, t, a, i) {
      if (t === null || typeof t > "u" || mn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Fn:
            return !t;
          case Rr:
            return t === !1;
          case ca:
            return isNaN(t);
          case Xa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function dn(e) {
      return tn.hasOwnProperty(e) ? tn[e] : null;
    }
    function en(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ga || t === Fn || t === Rr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var tn = {}, fa = [
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
    fa.forEach(function(e) {
      tn[e] = new en(
        e,
        Dn,
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
      tn[t] = new en(
        t,
        Cr,
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
      tn[e] = new en(
        e,
        Ga,
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
      tn[e] = new en(
        e,
        Ga,
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
      tn[e] = new en(
        e,
        Fn,
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
      tn[e] = new en(
        e,
        Fn,
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
      tn[e] = new en(
        e,
        Rr,
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
      tn[e] = new en(
        e,
        Xa,
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
      tn[e] = new en(
        e,
        ca,
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
    var Tr = /[\-\:]([a-z])/g, ba = function(e) {
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
      var t = e.replace(Tr, ba);
      tn[t] = new en(
        t,
        Cr,
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
      var t = e.replace(Tr, ba);
      tn[t] = new en(
        t,
        Cr,
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
      var t = e.replace(Tr, ba);
      tn[t] = new en(
        t,
        Cr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      tn[e] = new en(
        e,
        Cr,
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
    var Vi = "xlinkHref";
    tn[Vi] = new en(
      "xlinkHref",
      Cr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      tn[e] = new en(
        e,
        Cr,
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
        jn(a, t), i.sanitizeURL && ml("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Rr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Jn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Jn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Fn)
            return a;
          f = e.getAttribute(s);
        }
        return Jn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function au(e, t, a, i) {
      {
        if (!fn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return jn(a, t), u === "" + a ? a : u;
      }
    }
    function Dr(e, t, a, i) {
      var u = dn(t);
      if (!Rn(t, u, i)) {
        if (Jn(t, a, u, i) && (a = null), i || u === null) {
          if (fn(t)) {
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
            e[p] = v === Fn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var g = u.attributeName, C = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(g);
        else {
          var D = u.type, b;
          D === Fn || D === Rr && a === !0 ? b = "" : (jn(a, g), b = "" + a, u.sanitizeURL && ml(b.toString())), C ? e.setAttributeNS(C, g, b) : e.setAttribute(g, b);
        }
      }
    }
    var Or = Symbol.for("react.element"), lr = Symbol.for("react.portal"), vi = Symbol.for("react.fragment"), Ka = Symbol.for("react.strict_mode"), hi = Symbol.for("react.profiler"), mi = Symbol.for("react.provider"), x = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), ke = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), yt = Symbol.for("react.memo"), dt = Symbol.for("react.lazy"), _t = Symbol.for("react.scope"), wt = Symbol.for("react.debug_trace_mode"), On = Symbol.for("react.offscreen"), pn = Symbol.for("react.legacy_hidden"), yn = Symbol.for("react.cache"), ur = Symbol.for("react.tracing_marker"), qa = Symbol.iterator, Za = "@@iterator";
    function gt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = qa && e[qa] || e[Za];
      return typeof t == "function" ? t : null;
    }
    var Ct = Object.assign, Ja = 0, iu, lu, gl, Ku, Sl, Qr, Xo;
    function Mr() {
    }
    Mr.__reactDisabledLog = !0;
    function fc() {
      {
        if (Ja === 0) {
          iu = console.log, lu = console.info, gl = console.warn, Ku = console.error, Sl = console.group, Qr = console.groupCollapsed, Xo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Mr,
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
        Ja++;
      }
    }
    function dc() {
      {
        if (Ja--, Ja === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ct({}, e, {
              value: iu
            }),
            info: Ct({}, e, {
              value: lu
            }),
            warn: Ct({}, e, {
              value: gl
            }),
            error: Ct({}, e, {
              value: Ku
            }),
            group: Ct({}, e, {
              value: Sl
            }),
            groupCollapsed: Ct({}, e, {
              value: Qr
            }),
            groupEnd: Ct({}, e, {
              value: Xo
            })
          });
        }
        Ja < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var qu = E.ReactCurrentDispatcher, El;
    function da(e, t, a) {
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
    var ei = !1, ti;
    {
      var Zu = typeof WeakMap == "function" ? WeakMap : Map;
      ti = new Zu();
    }
    function uu(e, t) {
      if (!e || ei)
        return "";
      {
        var a = ti.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ei = !0;
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
`), g = p.length - 1, C = v.length - 1; g >= 1 && C >= 0 && p[g] !== v[C]; )
            C--;
          for (; g >= 1 && C >= 0; g--, C--)
            if (p[g] !== v[C]) {
              if (g !== 1 || C !== 1)
                do
                  if (g--, C--, C < 0 || p[g] !== v[C]) {
                    var D = `
` + p[g].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && ti.set(e, D), D;
                  }
                while (g >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        ei = !1, qu.current = s, dc(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", P = b ? da(b) : "";
      return typeof e == "function" && ti.set(e, P), P;
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
    function Bi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return uu(e, eo(e));
      if (typeof e == "string")
        return da(e);
      switch (e) {
        case ke:
          return da("Suspense");
        case Ue:
          return da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            return Ju(e.render);
          case yt:
            return Bi(e.type, t, a);
          case dt: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Bi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Zf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case F:
          return da(e.type);
        case ot:
          return da("Lazy");
        case ve:
          return da("Suspense");
        case Et:
          return da("SuspenseList");
        case W:
        case se:
        case je:
          return Ju(e.type);
        case Ce:
          return Ju(e.type.render);
        case M:
          return Cl(e.type);
        default:
          return "";
      }
    }
    function $i(e) {
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
    function Vt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function to(e) {
      return e.displayName || "Context";
    }
    function Ut(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case vi:
          return "Fragment";
        case lr:
          return "Portal";
        case hi:
          return "Profiler";
        case Ka:
          return "StrictMode";
        case ke:
          return "Suspense";
        case Ue:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var t = e;
            return to(t) + ".Consumer";
          case mi:
            var a = e;
            return to(a._context) + ".Provider";
          case ne:
            return Vt(e, e.render, "ForwardRef");
          case yt:
            var i = e.displayName || null;
            return i !== null ? i : Ut(e.type) || "Memo";
          case dt: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Ut(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Ko(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function yi(e) {
      return e.displayName || "Context";
    }
    function ft(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Dt:
          return "Cache";
        case re:
          var i = a;
          return yi(i) + ".Consumer";
        case fe:
          var u = a;
          return yi(u._context) + ".Provider";
        case nt:
          return "DehydratedFragment";
        case Ce:
          return Ko(a, a.render, "ForwardRef");
        case ee:
          return "Fragment";
        case F:
          return a;
        case Z:
          return "Portal";
        case K:
          return "Root";
        case he:
          return "Text";
        case ot:
          return Ut(a);
        case $:
          return a === Ka ? "StrictMode" : "Mode";
        case Fe:
          return "Offscreen";
        case ce:
          return "Profiler";
        case mt:
          return "Scope";
        case ve:
          return "Suspense";
        case Et:
          return "SuspenseList";
        case Mt:
          return "TracingMarker";
        case M:
        case W:
        case ht:
        case se:
        case We:
        case je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var no = E.ReactDebugCurrentFrame, or = null, gi = !1;
    function Nr() {
      {
        if (or === null)
          return null;
        var e = or._debugOwner;
        if (e !== null && typeof e < "u")
          return ft(e);
      }
      return null;
    }
    function Si() {
      return or === null ? "" : $i(or);
    }
    function gn() {
      no.getCurrentStack = null, or = null, gi = !1;
    }
    function nn(e) {
      no.getCurrentStack = e === null ? null : Si, or = e, gi = !1;
    }
    function Rl() {
      return or;
    }
    function Gn(e) {
      gi = e;
    }
    function Lr(e) {
      return "" + e;
    }
    function ka(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Qt(e), e;
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
    function Tl(e) {
      return e._valueTracker;
    }
    function su(e) {
      e._valueTracker = null;
    }
    function Jf(e) {
      var t = "";
      return e && (Zo(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Da(e) {
      var t = Zo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Qt(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Qt(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Qt(p), i = "" + p;
          },
          stopTracking: function() {
            su(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ni(e) {
      Tl(e) || (e._valueTracker = Da(e));
    }
    function Ei(e) {
      if (!e)
        return !1;
      var t = Tl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Jf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Oa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ro = !1, ao = !1, wl = !1, cu = !1;
    function io(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function lo(e, t) {
      var a = e, i = t.checked, u = Ct({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ri(e, t) {
      qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ao && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), ao = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ro && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), ro = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ka(t.value != null ? t.value : i),
        controlled: io(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && Dr(a, "checked", i, !1);
    }
    function w(e, t) {
      var a = e;
      {
        var i = io(t);
        !a._wrapperState.controlled && i && !cu && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), cu = !0), a._wrapperState.controlled && !i && !wl && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), wl = !0);
      }
      h(e, t);
      var u = ka(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Lr(u)) : a.value !== Lr(u) && (a.value = Lr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Je(a, t.type, u) : t.hasOwnProperty("defaultValue") && Je(a, t.type, ka(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function V(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Lr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Q(e, t) {
      var a = e;
      w(a, t), ye(a, t);
    }
    function ye(e, t) {
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
            Ei(f), w(f, p);
          }
        }
      }
    }
    function Je(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Oa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Lr(e._wrapperState.initialValue) : e.defaultValue !== Lr(a) && (e.defaultValue = Lr(a)));
    }
    var be = !1, at = !1, bt = !1;
    function jt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? S.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || at || (at = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (bt || (bt = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !be && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), be = !0);
    }
    function vn(e, t) {
      t.value != null && e.setAttribute("value", Lr(ka(t.value)));
    }
    var rn = Array.isArray;
    function Tt(e) {
      return rn(e);
    }
    var an;
    an = !1;
    function Tn() {
      var e = Nr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var xl = ["value", "defaultValue"];
    function Jo(e) {
      {
        qo("select", e);
        for (var t = 0; t < xl.length; t++) {
          var a = xl[t];
          if (e[a] != null) {
            var i = Tt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Tn()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Tn());
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
        for (var C = Lr(ka(a)), D = null, b = 0; b < u.length; b++) {
          if (u[b].value === C) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          D === null && !u[b].disabled && (D = u[b]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function es(e, t) {
      return Ct({}, t, {
        value: void 0
      });
    }
    function fu(e, t) {
      var a = e;
      Jo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !an && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), an = !0);
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
      var i = Ct({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Lr(a._wrapperState.initialValue)
      });
      return i;
    }
    function rd(e, t) {
      var a = e;
      qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component"), cv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Tt(u)) {
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
        initialValue: ka(i)
      };
    }
    function fv(e, t) {
      var a = e, i = ka(t.value), u = ka(t.defaultValue);
      if (i != null) {
        var s = Lr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Lr(u));
    }
    function dv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function uy(e, t) {
      fv(e, t);
    }
    var Ii = "http://www.w3.org/1999/xhtml", ad = "http://www.w3.org/1998/Math/MathML", id = "http://www.w3.org/2000/svg";
    function ld(e) {
      switch (e) {
        case "svg":
          return id;
        case "math":
          return ad;
        default:
          return Ii;
      }
    }
    function ud(e, t) {
      return e == null || e === Ii ? ld(t) : e === id && t === "foreignObject" ? Ii : e;
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
    }), Gr = 1, Wi = 3, Hn = 8, Qi = 9, od = 11, uo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Wi) {
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
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ns.hasOwnProperty(e) && ns[e]) ? t + "px" : (kr(t, e), ("" + t).trim());
    }
    var yv = /([A-Z])/g, gv = /^ms-/;
    function oo(e) {
      return e.replace(yv, "-$1").toLowerCase().replace(gv, "-ms-");
    }
    var Sv = function() {
    };
    {
      var oy = /^(?:webkit|moz|o)[A-Z]/, sy = /^-ms-/, Ev = /-(.)/g, sd = /;\s*$/, Ci = {}, du = {}, Cv = !1, rs = !1, cy = function(e) {
        return e.replace(Ev, function(t, a) {
          return a.toUpperCase();
        });
      }, Rv = function(e) {
        Ci.hasOwnProperty(e) && Ci[e] || (Ci[e] = !0, y(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          cy(e.replace(sy, "ms-"))
        ));
      }, cd = function(e) {
        Ci.hasOwnProperty(e) && Ci[e] || (Ci[e] = !0, y("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, fd = function(e, t) {
        du.hasOwnProperty(t) && du[t] || (du[t] = !0, y(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(sd, "")));
      }, Tv = function(e, t) {
        Cv || (Cv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, wv = function(e, t) {
        rs || (rs = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Sv = function(e, t) {
        e.indexOf("-") > -1 ? Rv(e) : oy.test(e) ? cd(e) : sd.test(t) && fd(e, t), typeof t == "number" && (isNaN(t) ? Tv(e, t) : isFinite(t) || wv(e, t));
      };
    }
    var xv = Sv;
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
    function _v(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || xv(i, t[i]);
          var s = hc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function dy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function bv(e) {
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
        var a = bv(e), i = bv(t), u = {};
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
    var ai = {
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
    }, as = Ct({
      menuitem: !0
    }, ai), kv = "__html";
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
    function _l(e, t) {
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
    }, so = {}, vy = new RegExp("^(aria)-[" + Te + "]*$"), co = new RegExp("^(aria)[A-Z][" + Te + "]*$");
    function dd(e, t) {
      {
        if (Ye.call(so, t) && so[t])
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
      _l(e, t) || ls(e, t);
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
      var sr = {}, hd = /^on./, Sc = /^on[^A-Z]/, Dv = new RegExp("^(aria)-[" + Te + "]*$"), Ov = new RegExp("^(aria)[A-Z][" + Te + "]*$");
      pu = function(e, t, a, i) {
        if (Ye.call(sr, t) && sr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), sr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), sr[t] = !0, !0;
          if (hd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), sr[t] = !0, !0;
        } else if (hd.test(t))
          return Sc.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), sr[t] = !0, !0;
        if (Dv.test(t) || Ov.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), sr[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), sr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), sr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), sr[t] = !0, !0;
        var v = dn(t), g = v !== null && v.type === Dn;
        if (is.hasOwnProperty(u)) {
          var C = is[u];
          if (C !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, C), sr[t] = !0, !0;
        } else if (!g && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), sr[t] = !0, !0;
        return typeof a == "boolean" && mn(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), sr[t] = !0, !0) : g ? !0 : mn(t, a, v, !1) ? (sr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Fn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), sr[t] = !0), !0);
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
      _l(e, t) || Mv(e, t, a);
    }
    var md = 1, Ec = 2, Ma = 4, yd = md | Ec | Ma, vu = null;
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
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Wi ? t.parentNode : t;
    }
    var Cc = null, hu = null, Xt = null;
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
    function Tc(e) {
      Cc = e;
    }
    function fo(e) {
      hu ? Xt ? Xt.push(e) : Xt = [e] : hu = e;
    }
    function Lv() {
      return hu !== null || Xt !== null;
    }
    function wc() {
      if (hu) {
        var e = hu, t = Xt;
        if (hu = null, Xt = null, Rc(e), t)
          for (var a = 0; a < t.length; a++)
            Rc(t[a]);
      }
    }
    var po = function(e, t) {
      return e(t);
    }, os = function() {
    }, bl = !1;
    function zv() {
      var e = Lv();
      e && (os(), wc());
    }
    function Av(e, t, a) {
      if (bl)
        return e(t, a);
      bl = !0;
      try {
        return po(e, t, a);
      } finally {
        bl = !1, zv();
      }
    }
    function yy(e, t, a) {
      po = e, os = a;
    }
    function Uv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function xc(e, t, a) {
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
      if (xc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ss = !1;
    if (Ee)
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
    function _c(e, t, a, i, u, s, f, p, v) {
      var g = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, g);
      } catch (C) {
        this.onError(C);
      }
    }
    var bc = _c;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Sd = document.createElement("react");
      bc = function(t, a, i, u, s, f, p, v, g) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var C = document.createEvent("Event"), D = !1, b = !0, P = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function G() {
          Sd.removeEventListener(X, et, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = P);
        }
        var Oe = Array.prototype.slice.call(arguments, 3);
        function et() {
          D = !0, G(), a.apply(i, Oe), b = !1;
        }
        var Ge, At = !1, kt = !1;
        function L(z) {
          if (Ge = z.error, At = !0, Ge === null && z.colno === 0 && z.lineno === 0 && (kt = !0), z.defaultPrevented && Ge != null && typeof Ge == "object")
            try {
              Ge._suppressLogging = !0;
            } catch {
            }
        }
        var X = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", L), Sd.addEventListener(X, et, !1), C.initEvent(X, !1, !1), Sd.dispatchEvent(C), Y && Object.defineProperty(window, "event", Y), D && b && (At ? kt && (Ge = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ge = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ge)), window.removeEventListener("error", L), !D)
          return G(), _c.apply(this, arguments);
      };
    }
    var jv = bc, vo = !1, kc = null, ho = !1, Ri = null, Fv = {
      onError: function(e) {
        vo = !0, kc = e;
      }
    };
    function Dl(e, t, a, i, u, s, f, p, v) {
      vo = !1, kc = null, jv.apply(Fv, arguments);
    }
    function Ti(e, t, a, i, u, s, f, p, v) {
      if (Dl.apply(this, arguments), vo) {
        var g = fs();
        ho || (ho = !0, Ri = g);
      }
    }
    function cs() {
      if (ho) {
        var e = Ri;
        throw ho = !1, Ri = null, e;
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
    var Ke = (
      /*                      */
      0
    ), ii = (
      /*                */
      1
    ), wn = (
      /*                    */
      2
    ), Nt = (
      /*                       */
      4
    ), Na = (
      /*                */
      16
    ), La = (
      /*                 */
      32
    ), hn = (
      /*                     */
      64
    ), Xe = (
      /*                   */
      128
    ), wr = (
      /*            */
      256
    ), kn = (
      /*                          */
      512
    ), Xn = (
      /*                     */
      1024
    ), Xr = (
      /*                      */
      2048
    ), Kr = (
      /*                    */
      4096
    ), Pn = (
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
    ), er = (
      /*                */
      65536
    ), Dc = (
      /* */
      131072
    ), wi = (
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
    ), xi = (
      /*              */
      33554432
    ), Ml = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Nt | Xn | 0
    ), Nl = wn | Nt | Na | La | kn | Kr | Pn, Ll = Nt | hn | kn | Pn, Ki = Xr | Na, Vn = Xi | Oc | go, za = E.ReactCurrentOwner;
    function pa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (wn | Kr)) !== Ke && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === K ? a : null;
    }
    function _i(e) {
      if (e.tag === ve) {
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
    function bi(e) {
      return e.tag === K ? e.stateNode.containerInfo : null;
    }
    function gu(e) {
      return pa(e) === e;
    }
    function Pv(e) {
      {
        var t = za.current;
        if (t !== null && t.tag === M) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ft(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = mo(e);
      return u ? pa(u) === u : !1;
    }
    function Mc(e) {
      if (pa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Nc(e) {
      var t = e.alternate;
      if (!t) {
        var a = pa(e);
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
      if (i.tag !== K)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function qr(e) {
      var t = Nc(e);
      return t !== null ? Zr(t) : null;
    }
    function Zr(e) {
      if (e.tag === F || e.tag === he)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Zr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function En(e) {
      var t = Nc(e);
      return t !== null ? Aa(t) : null;
    }
    function Aa(e) {
      if (e.tag === F || e.tag === he)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Z) {
          var a = Aa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ed = R.unstable_scheduleCallback, Vv = R.unstable_cancelCallback, Cd = R.unstable_shouldYield, Rd = R.unstable_requestPaint, Kn = R.unstable_now, Lc = R.unstable_getCurrentPriorityLevel, ps = R.unstable_ImmediatePriority, zl = R.unstable_UserBlockingPriority, qi = R.unstable_NormalPriority, Sy = R.unstable_LowPriority, Su = R.unstable_IdlePriority, zc = R.unstable_yieldValue, Bv = R.unstable_setDisableYieldValue, Eu = null, Mn = null, De = null, va = !1, Jr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function So(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        rt && (e = Ct({}, e, {
          getLaneLabelMap: Cu,
          injectProfilingHooks: Ua
        })), Eu = t.inject(e), Mn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Td(e, t) {
      if (Mn && typeof Mn.onScheduleFiberRoot == "function")
        try {
          Mn.onScheduleFiberRoot(Eu, e, t);
        } catch (a) {
          va || (va = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function wd(e, t) {
      if (Mn && typeof Mn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Xe) === Xe;
          if (H) {
            var i;
            switch (t) {
              case zr:
                i = ps;
                break;
              case Di:
                i = zl;
                break;
              case ja:
                i = qi;
                break;
              case Fa:
                i = Su;
                break;
              default:
                i = qi;
                break;
            }
            Mn.onCommitFiberRoot(Eu, e, i, a);
          }
        } catch (u) {
          va || (va = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function xd(e) {
      if (Mn && typeof Mn.onPostCommitFiberRoot == "function")
        try {
          Mn.onPostCommitFiberRoot(Eu, e);
        } catch (t) {
          va || (va = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function _d(e) {
      if (Mn && typeof Mn.onCommitFiberUnmount == "function")
        try {
          Mn.onCommitFiberUnmount(Eu, e);
        } catch (t) {
          va || (va = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function xn(e) {
      if (typeof zc == "function" && (Bv(e), j(e)), Mn && typeof Mn.setStrictMode == "function")
        try {
          Mn.setStrictMode(Eu, e);
        } catch (t) {
          va || (va = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Ua(e) {
      De = e;
    }
    function Cu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < wu; a++) {
          var i = Wv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function bd(e) {
      De !== null && typeof De.markCommitStarted == "function" && De.markCommitStarted(e);
    }
    function kd() {
      De !== null && typeof De.markCommitStopped == "function" && De.markCommitStopped();
    }
    function ha(e) {
      De !== null && typeof De.markComponentRenderStarted == "function" && De.markComponentRenderStarted(e);
    }
    function ma() {
      De !== null && typeof De.markComponentRenderStopped == "function" && De.markComponentRenderStopped();
    }
    function Dd(e) {
      De !== null && typeof De.markComponentPassiveEffectMountStarted == "function" && De.markComponentPassiveEffectMountStarted(e);
    }
    function $v() {
      De !== null && typeof De.markComponentPassiveEffectMountStopped == "function" && De.markComponentPassiveEffectMountStopped();
    }
    function Zi(e) {
      De !== null && typeof De.markComponentPassiveEffectUnmountStarted == "function" && De.markComponentPassiveEffectUnmountStarted(e);
    }
    function Al() {
      De !== null && typeof De.markComponentPassiveEffectUnmountStopped == "function" && De.markComponentPassiveEffectUnmountStopped();
    }
    function Ac(e) {
      De !== null && typeof De.markComponentLayoutEffectMountStarted == "function" && De.markComponentLayoutEffectMountStarted(e);
    }
    function Yv() {
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
    function ki(e, t, a) {
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
    function Tu(e) {
      De !== null && typeof De.markRenderStarted == "function" && De.markRenderStarted(e);
    }
    function Iv() {
      De !== null && typeof De.markRenderYielded == "function" && De.markRenderYielded();
    }
    function Uc() {
      De !== null && typeof De.markRenderStopped == "function" && De.markRenderStopped();
    }
    function _n(e) {
      De !== null && typeof De.markRenderScheduled == "function" && De.markRenderScheduled(e);
    }
    function jc(e, t) {
      De !== null && typeof De.markForceUpdateScheduled == "function" && De.markForceUpdateScheduled(e, t);
    }
    function gs(e, t) {
      De !== null && typeof De.markStateUpdateScheduled == "function" && De.markStateUpdateScheduled(e, t);
    }
    var qe = (
      /*                         */
      0
    ), xt = (
      /*                 */
      1
    ), Bt = (
      /*                    */
      2
    ), ln = (
      /*               */
      8
    ), $t = (
      /*              */
      16
    ), Bn = Math.clz32 ? Math.clz32 : Ss, tr = Math.log, Fc = Math.LN2;
    function Ss(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (tr(t) / Fc | 0) | 0;
    }
    var wu = 31, ae = (
      /*                        */
      0
    ), Ht = (
      /*                          */
      0
    ), lt = (
      /*                        */
      1
    ), Ul = (
      /*    */
      2
    ), li = (
      /*             */
      4
    ), xr = (
      /*            */
      8
    ), Nn = (
      /*                     */
      16
    ), Ji = (
      /*                */
      32
    ), jl = (
      /*                       */
      4194240
    ), xu = (
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
    ), Yc = (
      /*                        */
      4096
    ), Ic = (
      /*                        */
      8192
    ), Wc = (
      /*                        */
      16384
    ), _u = (
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
    ), Gc = (
      /*                       */
      524288
    ), Es = (
      /*                       */
      1048576
    ), Xc = (
      /*                       */
      2097152
    ), Cs = (
      /*                            */
      130023424
    ), bu = (
      /*                             */
      4194304
    ), Kc = (
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
    ), Nd = bu, Ts = (
      /*          */
      134217728
    ), Ld = (
      /*                          */
      268435455
    ), ws = (
      /*               */
      268435456
    ), ku = (
      /*                        */
      536870912
    ), ea = (
      /*                   */
      1073741824
    );
    function Wv(e) {
      {
        if (e & lt)
          return "Sync";
        if (e & Ul)
          return "InputContinuousHydration";
        if (e & li)
          return "InputContinuous";
        if (e & xr)
          return "DefaultHydration";
        if (e & Nn)
          return "Default";
        if (e & Ji)
          return "TransitionHydration";
        if (e & jl)
          return "Transition";
        if (e & Cs)
          return "Retry";
        if (e & Ts)
          return "SelectiveHydration";
        if (e & ws)
          return "IdleHydration";
        if (e & ku)
          return "Idle";
        if (e & ea)
          return "Offscreen";
      }
    }
    var sn = -1, Du = xu, Jc = bu;
    function xs(e) {
      switch (Fl(e)) {
        case lt:
          return lt;
        case Ul:
          return Ul;
        case li:
          return li;
        case xr:
          return xr;
        case Nn:
          return Nn;
        case Ji:
          return Ji;
        case xu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Yc:
        case Ic:
        case Wc:
        case _u:
        case Qc:
        case Eo:
        case Co:
        case Gc:
        case Es:
        case Xc:
          return e & jl;
        case bu:
        case Kc:
        case Rs:
        case qc:
        case Zc:
          return e & Cs;
        case Ts:
          return Ts;
        case ws:
          return ws;
        case ku:
          return ku;
        case ea:
          return ea;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ef(e, t) {
      var a = e.pendingLanes;
      if (a === ae)
        return ae;
      var i = ae, u = e.suspendedLanes, s = e.pingedLanes, f = a & Ld;
      if (f !== ae) {
        var p = f & ~u;
        if (p !== ae)
          i = xs(p);
        else {
          var v = f & s;
          v !== ae && (i = xs(v));
        }
      } else {
        var g = a & ~u;
        g !== ae ? i = xs(g) : s !== ae && (i = xs(s));
      }
      if (i === ae)
        return ae;
      if (t !== ae && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ae) {
        var C = Fl(i), D = Fl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          C >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          C === Nn && (D & jl) !== ae
        )
          return t;
      }
      (i & li) !== ae && (i |= a & Nn);
      var b = e.entangledLanes;
      if (b !== ae)
        for (var P = e.entanglements, Y = i & b; Y > 0; ) {
          var G = $n(Y), Oe = 1 << G;
          i |= P[G], Y &= ~Oe;
        }
      return i;
    }
    function ui(e, t) {
      for (var a = e.eventTimes, i = sn; t > 0; ) {
        var u = $n(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function zd(e, t) {
      switch (e) {
        case lt:
        case Ul:
        case li:
          return t + 250;
        case xr:
        case Nn:
        case Ji:
        case xu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Yc:
        case Ic:
        case Wc:
        case _u:
        case Qc:
        case Eo:
        case Co:
        case Gc:
        case Es:
        case Xc:
          return t + 5e3;
        case bu:
        case Kc:
        case Rs:
        case qc:
        case Zc:
          return sn;
        case Ts:
        case ws:
        case ku:
        case ea:
          return sn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), sn;
      }
    }
    function tf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = $n(f), v = 1 << p, g = s[p];
        g === sn ? ((v & i) === ae || (v & u) !== ae) && (s[p] = zd(v, t)) : g <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Qv(e) {
      return xs(e.pendingLanes);
    }
    function nf(e) {
      var t = e.pendingLanes & ~ea;
      return t !== ae ? t : t & ea ? ea : ae;
    }
    function Gv(e) {
      return (e & lt) !== ae;
    }
    function _s(e) {
      return (e & Ld) !== ae;
    }
    function Ou(e) {
      return (e & Cs) === e;
    }
    function Ad(e) {
      var t = lt | li | Nn;
      return (e & t) === ae;
    }
    function Ud(e) {
      return (e & jl) === e;
    }
    function rf(e, t) {
      var a = Ul | li | xr | Nn;
      return (t & a) !== ae;
    }
    function Xv(e, t) {
      return (t & e.expiredLanes) !== ae;
    }
    function jd(e) {
      return (e & jl) !== ae;
    }
    function Fd() {
      var e = Du;
      return Du <<= 1, (Du & jl) === ae && (Du = xu), e;
    }
    function Kv() {
      var e = Jc;
      return Jc <<= 1, (Jc & Cs) === ae && (Jc = bu), e;
    }
    function Fl(e) {
      return e & -e;
    }
    function bs(e) {
      return Fl(e);
    }
    function $n(e) {
      return 31 - Bn(e);
    }
    function cr(e) {
      return $n(e);
    }
    function ta(e, t) {
      return (e & t) !== ae;
    }
    function Mu(e, t) {
      return (e & t) === t;
    }
    function St(e, t) {
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
      return e !== Ht && e < t ? e : t;
    }
    function Ds(e) {
      for (var t = [], a = 0; a < wu; a++)
        t.push(e);
      return t;
    }
    function Ro(e, t, a) {
      e.pendingLanes |= t, t !== ku && (e.suspendedLanes = ae, e.pingedLanes = ae);
      var i = e.eventTimes, u = cr(t);
      i[u] = a;
    }
    function Jv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = $n(i), s = 1 << u;
        a[u] = sn, i &= ~s;
      }
    }
    function af(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Pd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ae, e.pingedLanes = ae, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = $n(f), v = 1 << p;
        i[p] = ae, u[p] = sn, s[p] = sn, f &= ~v;
      }
    }
    function lf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = $n(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Vd(e, t) {
      var a = Fl(t), i;
      switch (a) {
        case li:
          i = Ul;
          break;
        case Nn:
          i = xr;
          break;
        case xu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Yc:
        case Ic:
        case Wc:
        case _u:
        case Qc:
        case Eo:
        case Co:
        case Gc:
        case Es:
        case Xc:
        case bu:
        case Kc:
        case Rs:
        case qc:
        case Zc:
          i = Ji;
          break;
        case ku:
          i = ws;
          break;
        default:
          i = Ht;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ht ? Ht : i;
    }
    function Os(e, t, a) {
      if (Jr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = cr(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function eh(e, t) {
      if (Jr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = cr(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Bd(e, t) {
      return null;
    }
    var zr = lt, Di = li, ja = Nn, Fa = ku, Ms = Ht;
    function Ha() {
      return Ms;
    }
    function Yn(e) {
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
    function nr(e, t) {
      return e !== 0 && e < t;
    }
    function rh(e) {
      var t = Fl(e);
      return nr(zr, t) ? nr(Di, t) ? _s(t) ? ja : Fa : Di : zr;
    }
    function uf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ls;
    function _r(e) {
      Ls = e;
    }
    function Ey(e) {
      Ls(e);
    }
    var Ae;
    function To(e) {
      Ae = e;
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
    var sf = !1, Us = [], el = null, Oi = null, Mi = null, Ln = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Map(), Ur = [], lh = [
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
    function oi(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Yd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          el = null;
          break;
        case "dragenter":
        case "dragleave":
          Oi = null;
          break;
        case "mouseover":
        case "mouseout":
          Mi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ln.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Ar.delete(i);
          break;
        }
      }
    }
    function na(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = oi(t, a, i, u, s);
        if (t !== null) {
          var p = No(t);
          p !== null && Ae(p);
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
          return el = na(el, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Oi = na(Oi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Mi = na(Mi, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, g = v.pointerId;
          return Ln.set(g, na(Ln.get(g) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var C = u, D = C.pointerId;
          return Ar.set(D, na(Ar.get(D) || null, e, t, a, i, C)), !0;
        }
      }
      return !1;
    }
    function Id(e) {
      var t = Gs(e.target);
      if (t !== null) {
        var a = pa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === ve) {
            var u = _i(a);
            if (u !== null) {
              e.blockedOn = u, As(e.priority, function() {
                of(a);
              });
              return;
            }
          } else if (i === K) {
            var s = a.stateNode;
            if (uf(s)) {
              e.blockedOn = bi(a);
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
      }, i = 0; i < Ur.length && nr(t, Ur[i].priority); i++)
        ;
      Ur.splice(i, 0, a), i === 0 && Id(a);
    }
    function js(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = xo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          hy(s), u.target.dispatchEvent(s), my();
        } else {
          var f = No(i);
          return f !== null && Ae(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Wd(e, t, a) {
      js(e) && a.delete(t);
    }
    function Ry() {
      sf = !1, el !== null && js(el) && (el = null), Oi !== null && js(Oi) && (Oi = null), Mi !== null && js(Mi) && (Mi = null), Ln.forEach(Wd), Ar.forEach(Wd);
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
      el !== null && Hl(el, e), Oi !== null && Hl(Oi, e), Mi !== null && Hl(Mi, e);
      var i = function(p) {
        return Hl(p, e);
      };
      Ln.forEach(i), Ar.forEach(i);
      for (var u = 0; u < Ur.length; u++) {
        var s = Ur[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ur.length > 0; ) {
        var f = Ur[0];
        if (f.blockedOn !== null)
          break;
        Id(f), f.blockedOn === null && Ur.shift();
      }
    }
    var fr = E.ReactCurrentBatchConfig, Lt = !0;
    function qn(e) {
      Lt = !!e;
    }
    function In() {
      return Lt;
    }
    function dr(e, t, a) {
      var i = cf(t), u;
      switch (i) {
        case zr:
          u = ya;
          break;
        case Di:
          u = wo;
          break;
        case ja:
        default:
          u = zn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ya(e, t, a, i) {
      var u = Ha(), s = fr.transition;
      fr.transition = null;
      try {
        Yn(zr), zn(e, t, a, i);
      } finally {
        Yn(u), fr.transition = s;
      }
    }
    function wo(e, t, a, i) {
      var u = Ha(), s = fr.transition;
      fr.transition = null;
      try {
        Yn(Di), zn(e, t, a, i);
      } finally {
        Yn(u), fr.transition = s;
      }
    }
    function zn(e, t, a, i) {
      Lt && Fs(e, t, a, i);
    }
    function Fs(e, t, a, i) {
      var u = xo(e, t, a, i);
      if (u === null) {
        Hy(e, t, i, Ni, a), Yd(e, i);
        return;
      }
      if (Cy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Yd(e, i), t & Ma && uh(e)) {
        for (; u !== null; ) {
          var s = No(u);
          s !== null && Ey(s);
          var f = xo(e, t, a, i);
          if (f === null && Hy(e, t, i, Ni, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Hy(e, t, i, null, a);
    }
    var Ni = null;
    function xo(e, t, a, i) {
      Ni = null;
      var u = gd(i), s = Gs(u);
      if (s !== null) {
        var f = pa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === ve) {
            var v = _i(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === K) {
            var g = f.stateNode;
            if (uf(g))
              return bi(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ni = s, null;
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
          return zr;
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
          return Di;
        case "message": {
          var t = Lc();
          switch (t) {
            case ps:
              return zr;
            case zl:
              return Di;
            case qi:
            case Sy:
              return ja;
            case Su:
              return Fa;
            default:
              return ja;
          }
        }
        default:
          return ja;
      }
    }
    function Hs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ra(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Qd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function _o(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ga = null, bo = null, Lu = null;
    function Pl(e) {
      return ga = e, bo = Ps(), !0;
    }
    function ff() {
      ga = null, bo = null, Lu = null;
    }
    function tl() {
      if (Lu)
        return Lu;
      var e, t = bo, a = t.length, i, u = Ps(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Lu = u.slice(e, p), Lu;
    }
    function Ps() {
      return "value" in ga ? ga.value : ga.textContent;
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
    function br(e) {
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
      return Ct(t.prototype, {
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
    var Wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Li = br(Wn), jr = Ct({}, Wn, {
      view: 0,
      detail: 0
    }), aa = br(jr), df, Bs, zu;
    function Ty(e) {
      e !== zu && (zu && e.type === "mousemove" ? (df = e.screenX - zu.screenX, Bs = e.screenY - zu.screenY) : (df = 0, Bs = 0), zu = e);
    }
    var si = Ct({}, jr, {
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
      getModifierState: Cn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ty(e), df);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Bs;
      }
    }), Gd = br(si), Xd = Ct({}, si, {
      dataTransfer: 0
    }), Au = br(Xd), Kd = Ct({}, jr, {
      relatedTarget: 0
    }), nl = br(Kd), sh = Ct({}, Wn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ch = br(sh), qd = Ct({}, Wn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), pf = br(qd), wy = Ct({}, Wn, {
      data: 0
    }), fh = br(wy), dh = fh, ph = {
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
    function xy(e) {
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
    function Cn(e) {
      return vh;
    }
    var _y = Ct({}, jr, {
      key: xy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Cn,
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
    }), hh = br(_y), by = Ct({}, si, {
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
    }), mh = br(by), yh = Ct({}, jr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Cn
    }), gh = br(yh), ky = Ct({}, Wn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Pa = br(ky), Zd = Ct({}, si, {
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
    }), Dy = br(Zd), Bl = [9, 13, 27, 32], $s = 229, rl = Ee && "CompositionEvent" in window, $l = null;
    Ee && "documentMode" in document && ($l = document.documentMode);
    var Jd = Ee && "TextEvent" in window && !$l, vf = Ee && (!rl || $l && $l > 8 && $l <= 11), Sh = 32, hf = String.fromCharCode(Sh);
    function Oy() {
      Re("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Re("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Re("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Re("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
      if (rl ? s = mf(t) : ju ? tp(t, i) && (s = "onCompositionEnd") : yf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      vf && !Ch(i) && (!ju && s === "onCompositionStart" ? ju = Pl(u) : s === "onCompositionEnd" && ju && (f = tl()));
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
        if (e === "compositionend" || !rl && tp(e, t)) {
          var a = tl();
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
    function Ys(e) {
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
      if (!Ee)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Is() {
      Re("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Th(e, t, a, i) {
      fo(i);
      var u = kh(t, "onChange");
      if (u.length > 0) {
        var s = new Li("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var Yl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      Th(t, n, e, gd(e)), Av(o, t);
    }
    function o(e) {
      Y0(e, 0);
    }
    function c(e) {
      var t = _f(e);
      if (Ei(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var m = !1;
    Ee && (m = Ny("input") && (!document.documentMode || document.documentMode > 9));
    function T(e, t) {
      Yl = e, n = t, Yl.attachEvent("onpropertychange", B);
    }
    function _() {
      Yl && (Yl.detachEvent("onpropertychange", B), Yl = null, n = null);
    }
    function B(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function le(e, t, a) {
      e === "focusin" ? (_(), T(t, a)) : e === "focusout" && _();
    }
    function de(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function ie(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ne(e, t) {
      if (e === "click")
        return c(t);
    }
    function Pe(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ie(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Je(e, "number", e.value);
    }
    function An(e, t, a, i, u, s, f) {
      var p = a ? _f(a) : window, v, g;
      if (r(p) ? v = d : Ys(p) ? m ? v = Pe : (v = de, g = le) : ie(p) && (v = Ne), v) {
        var C = v(t, a);
        if (C) {
          Th(e, C, i, u);
          return;
        }
      }
      g && g(t, p, a), t === "focusout" && Ie(p);
    }
    function N() {
      Ze("onMouseEnter", ["mouseout", "mouseover"]), Ze("onMouseLeave", ["mouseout", "mouseover"]), Ze("onPointerEnter", ["pointerout", "pointerover"]), Ze("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function k(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !us(i)) {
        var g = i.relatedTarget || i.fromElement;
        if (g && (Gs(g) || yp(g)))
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
        var b, P;
        if (v) {
          var Y = i.relatedTarget || i.toElement;
          if (b = a, P = Y ? Gs(Y) : null, P !== null) {
            var G = pa(P);
            (P !== G || P.tag !== F && P.tag !== he) && (P = null);
          }
        } else
          b = null, P = a;
        if (b !== P) {
          var Oe = Gd, et = "onMouseLeave", Ge = "onMouseEnter", At = "mouse";
          (t === "pointerout" || t === "pointerover") && (Oe = mh, et = "onPointerLeave", Ge = "onPointerEnter", At = "pointer");
          var kt = b == null ? C : _f(b), L = P == null ? C : _f(P), X = new Oe(et, At + "leave", b, i, u);
          X.target = kt, X.relatedTarget = L;
          var z = null, pe = Gs(u);
          if (pe === a) {
            var ze = new Oe(Ge, At + "enter", P, i, u);
            ze.target = L, ze.relatedTarget = kt, z = ze;
          }
          tw(e, X, z, b, P);
        }
      }
    }
    function U(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ue = typeof Object.is == "function" ? Object.is : U;
    function Ve(e, t) {
      if (ue(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Ye.call(t, s) || !ue(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function tt(e) {
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
      for (var a = tt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Wi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = tt(it(a));
      }
    }
    function rr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Yt(e, u, s, f, p);
    }
    function Yt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, g = 0, C = e, D = null;
      e: for (; ; ) {
        for (var b = null; C === t && (a === 0 || C.nodeType === Wi) && (f = s + a), C === i && (u === 0 || C.nodeType === Wi) && (p = s + u), C.nodeType === Wi && (s += C.nodeValue.length), (b = C.firstChild) !== null; )
          D = C, C = b;
        for (; ; ) {
          if (C === e)
            break e;
          if (D === t && ++v === a && (f = s), D === i && ++g === u && (p = s), (b = C.nextSibling) !== null)
            break;
          C = D, D = C.parentNode;
        }
        C = b;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Il(e, t) {
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
    function wh(e) {
      return e && e.nodeType === Wi;
    }
    function L0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : wh(e) ? !1 : wh(t) ? L0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jT(e) {
      return e && e.ownerDocument && L0(e.ownerDocument.documentElement, e);
    }
    function FT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function z0() {
      for (var e = window, t = Oa(); t instanceof e.HTMLIFrameElement; ) {
        if (FT(t))
          e = t.contentWindow;
        else
          return t;
        t = Oa(e.document);
      }
      return t;
    }
    function Ly(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function HT() {
      var e = z0();
      return {
        focusedElem: e,
        selectionRange: Ly(e) ? VT(e) : null
      };
    }
    function PT(e) {
      var t = z0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && jT(a)) {
        i !== null && Ly(a) && BT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Gr && u.push({
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
    function VT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = rr(e), t || {
        start: 0,
        end: 0
      };
    }
    function BT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Il(e, t);
    }
    var $T = Ee && "documentMode" in document && document.documentMode <= 11;
    function YT() {
      Re("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Cf = null, zy = null, ap = null, Ay = !1;
    function IT(e) {
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
    function WT(e) {
      return e.window === e ? e.document : e.nodeType === Qi ? e : e.ownerDocument;
    }
    function A0(e, t, a) {
      var i = WT(a);
      if (!(Ay || Cf == null || Cf !== Oa(i))) {
        var u = IT(Cf);
        if (!ap || !Ve(ap, u)) {
          ap = u;
          var s = kh(zy, "onSelect");
          if (s.length > 0) {
            var f = new Li("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Cf;
          }
        }
      }
    }
    function QT(e, t, a, i, u, s, f) {
      var p = a ? _f(a) : window;
      switch (t) {
        case "focusin":
          (Ys(p) || p.contentEditable === "true") && (Cf = p, zy = a, ap = null);
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
          if ($T)
            break;
        case "keydown":
        case "keyup":
          A0(e, i, u);
      }
    }
    function xh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Rf = {
      animationend: xh("Animation", "AnimationEnd"),
      animationiteration: xh("Animation", "AnimationIteration"),
      animationstart: xh("Animation", "AnimationStart"),
      transitionend: xh("Transition", "TransitionEnd")
    }, Uy = {}, U0 = {};
    Ee && (U0 = document.createElement("div").style, "AnimationEvent" in window || (delete Rf.animationend.animation, delete Rf.animationiteration.animation, delete Rf.animationstart.animation), "TransitionEvent" in window || delete Rf.transitionend.transition);
    function _h(e) {
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
    var j0 = _h("animationend"), F0 = _h("animationiteration"), H0 = _h("animationstart"), P0 = _h("transitionend"), V0 = /* @__PURE__ */ new Map(), B0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Oo(e, t) {
      V0.set(e, t), Re(t, [e]);
    }
    function GT() {
      for (var e = 0; e < B0.length; e++) {
        var t = B0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Oo(a, "on" + i);
      }
      Oo(j0, "onAnimationEnd"), Oo(F0, "onAnimationIteration"), Oo(H0, "onAnimationStart"), Oo("dblclick", "onDoubleClick"), Oo("focusin", "onFocus"), Oo("focusout", "onBlur"), Oo(P0, "onTransitionEnd");
    }
    function XT(e, t, a, i, u, s, f) {
      var p = V0.get(t);
      if (p !== void 0) {
        var v = Li, g = t;
        switch (t) {
          case "keypress":
            if (Vl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = hh;
            break;
          case "focusin":
            g = "focus", v = nl;
            break;
          case "focusout":
            g = "blur", v = nl;
            break;
          case "beforeblur":
          case "afterblur":
            v = nl;
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
            v = Gd;
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
            v = Pa;
            break;
          case "scroll":
            v = aa;
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
        var C = (s & Ma) !== 0;
        {
          var D = !C && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = JT(a, p, i.type, C, D);
          if (b.length > 0) {
            var P = new v(p, g, null, i, u);
            e.push({
              event: P,
              listeners: b
            });
          }
        }
      }
    }
    GT(), N(), Is(), YT(), Oy();
    function KT(e, t, a, i, u, s, f) {
      XT(e, t, a, i, u, s);
      var p = (s & yd) === 0;
      p && (k(e, t, a, i, u), An(e, t, a, i, u), QT(e, t, a, i, u), Rh(e, t, a, i, u));
    }
    var ip = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], jy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ip));
    function $0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ti(i, t, void 0, e), e.currentTarget = null;
    }
    function qT(e, t, a) {
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
          var C = t[g], D = C.instance, b = C.currentTarget, P = C.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          $0(e, P, b), i = D;
        }
    }
    function Y0(e, t) {
      for (var a = (t & Ma) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        qT(s, f, a);
      }
      cs();
    }
    function ZT(e, t, a, i, u) {
      var s = gd(a), f = [];
      KT(f, e, i, a, s, t), Y0(f, t);
    }
    function bn(e, t) {
      jy.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = kx(t), u = nw(e);
      i.has(u) || (I0(t, e, Ec, a), i.add(u));
    }
    function Fy(e, t, a) {
      jy.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Ma), I0(a, e, i, t);
    }
    var bh = "_reactListening" + Math.random().toString(36).slice(2);
    function lp(e) {
      if (!e[bh]) {
        e[bh] = !0, ge.forEach(function(a) {
          a !== "selectionchange" && (jy.has(a) || Fy(a, !1, e), Fy(a, !0, e));
        });
        var t = e.nodeType === Qi ? e : e.ownerDocument;
        t !== null && (t[bh] || (t[bh] = !0, Fy("selectionchange", !1, t)));
      }
    }
    function I0(e, t, a, i, u) {
      var s = dr(e, t, a), f = void 0;
      ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qd(e, t, s, f) : ra(e, t, s) : f !== void 0 ? _o(e, t, s, f) : Hs(e, t, s);
    }
    function W0(e, t) {
      return e === t || e.nodeType === Hn && e.parentNode === t;
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
            if (v === K || v === Z) {
              var g = p.stateNode.containerInfo;
              if (W0(g, f))
                break;
              if (v === Z)
                for (var C = p.return; C !== null; ) {
                  var D = C.tag;
                  if (D === K || D === Z) {
                    var b = C.stateNode.containerInfo;
                    if (W0(b, f))
                      return;
                  }
                  C = C.return;
                }
              for (; g !== null; ) {
                var P = Gs(g);
                if (P === null)
                  return;
                var Y = P.tag;
                if (Y === F || Y === he) {
                  p = s = P;
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
        return ZT(e, t, a, s);
      });
    }
    function up(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function JT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], g = e, C = null; g !== null; ) {
        var D = g, b = D.stateNode, P = D.tag;
        if (P === F && b !== null && (C = b, p !== null)) {
          var Y = kl(g, p);
          Y != null && v.push(up(g, Y, C));
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
        if (p === F && f !== null) {
          var v = f, g = kl(u, a);
          g != null && i.unshift(up(u, g, v));
          var C = kl(u, t);
          C != null && i.push(up(u, C, v));
        }
        u = u.return;
      }
      return i;
    }
    function Tf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== F);
      return e || null;
    }
    function ew(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Tf(s))
        u++;
      for (var f = 0, p = i; p; p = Tf(p))
        f++;
      for (; u - f > 0; )
        a = Tf(a), u--;
      for (; f - u > 0; )
        i = Tf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Tf(a), i = Tf(i);
      }
      return null;
    }
    function Q0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, g = v.alternate, C = v.stateNode, D = v.tag;
        if (g !== null && g === i)
          break;
        if (D === F && C !== null) {
          var b = C;
          if (u) {
            var P = kl(p, s);
            P != null && f.unshift(up(p, P, b));
          } else if (!u) {
            var Y = kl(p, s);
            Y != null && f.push(up(p, Y, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function tw(e, t, a, i, u) {
      var s = i && u ? ew(i, u) : null;
      i !== null && Q0(e, t, i, s, !1), u !== null && a !== null && Q0(e, a, u, s, !0);
    }
    function nw(e, t) {
      return e + "__bubble";
    }
    var Va = !1, op = "dangerouslySetInnerHTML", Dh = "suppressContentEditableWarning", Mo = "suppressHydrationWarning", G0 = "autoFocus", Ws = "children", Qs = "style", Oh = "__html", Py, Mh, sp, X0, Nh, K0, q0;
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
        registrationNameDependencies: Se,
        possibleRegistrationNames: _e
      });
    }, K0 = Ee && !document.documentMode, sp = function(e, t, a) {
      if (!Va) {
        var i = Lh(a), u = Lh(t);
        u !== i && (Va = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, X0 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Nh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, q0 = function(e, t) {
      var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var rw = /\r\n?/g, aw = /\u0000|\uFFFD/g;
    function Lh(e) {
      Zt(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(rw, `
`).replace(aw, "");
    }
    function zh(e, t, a, i) {
      var u = Lh(t), s = Lh(e);
      if (s !== u && (i && (Va || (Va = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && He))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Z0(e) {
      return e.nodeType === Qi ? e : e.ownerDocument;
    }
    function iw() {
    }
    function Ah(e) {
      e.onclick = iw;
    }
    function lw(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Qs)
            f && Object.freeze(f), _v(t, f);
          else if (s === op) {
            var p = f ? f[Oh] : void 0;
            p != null && vv(t, p);
          } else if (s === Ws)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && uo(t, f);
            } else typeof f == "number" && uo(t, "" + f);
          else s === Dh || s === Mo || s === G0 || (Se.hasOwnProperty(s) ? f != null && (typeof f != "function" && Nh(s, f), s === "onScroll" && bn("scroll", t)) : f != null && Dr(t, s, f, u));
        }
    }
    function uw(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Qs ? _v(e, f) : s === op ? vv(e, f) : s === Ws ? uo(e, f) : Dr(e, s, f, i);
      }
    }
    function ow(e, t, a, i) {
      var u, s = Z0(a), f, p = i;
      if (p === Ii && (p = ld(e)), p === Ii) {
        if (u = _l(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === Ii && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Ye.call(Py, e) && (Py[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function sw(e, t) {
      return Z0(t).createTextNode(e);
    }
    function cw(e, t, a, i) {
      var u = _l(t, a);
      Mh(t, a);
      var s;
      switch (t) {
        case "dialog":
          bn("cancel", e), bn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          bn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ip.length; f++)
            bn(ip[f], e);
          s = a;
          break;
        case "source":
          bn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          bn("error", e), bn("load", e), s = a;
          break;
        case "details":
          bn("toggle", e), s = a;
          break;
        case "input":
          ri(e, a), s = lo(e, a), bn("invalid", e);
          break;
        case "option":
          jt(e, a), s = a;
          break;
        case "select":
          fu(e, a), s = es(e, a), bn("invalid", e);
          break;
        case "textarea":
          rd(e, a), s = nd(e, a), bn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (mc(t, s), lw(t, e, i, s, u), t) {
        case "input":
          ni(e), V(e, a, !1);
          break;
        case "textarea":
          ni(e), dv(e);
          break;
        case "option":
          vn(e, a);
          break;
        case "select":
          ed(e, a);
          break;
        default:
          typeof s.onClick == "function" && Ah(e);
          break;
      }
    }
    function fw(e, t, a, i, u) {
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
          } else v === op || v === Ws || v === Dh || v === Mo || v === G0 || (Se.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], P = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === P || b == null && P == null))
          if (v === Qs)
            if (b && Object.freeze(b), P) {
              for (g in P)
                P.hasOwnProperty(g) && (!b || !b.hasOwnProperty(g)) && (C || (C = {}), C[g] = "");
              for (g in b)
                b.hasOwnProperty(g) && P[g] !== b[g] && (C || (C = {}), C[g] = b[g]);
            } else
              C || (s || (s = []), s.push(v, C)), C = b;
          else if (v === op) {
            var Y = b ? b[Oh] : void 0, G = P ? P[Oh] : void 0;
            Y != null && G !== Y && (s = s || []).push(v, Y);
          } else v === Ws ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === Dh || v === Mo || (Se.hasOwnProperty(v) ? (b != null && (typeof b != "function" && Nh(v, b), v === "onScroll" && bn("scroll", e)), !s && P !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return C && (py(C, p[Qs]), (s = s || []).push(Qs, C)), s;
    }
    function dw(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = _l(a, i), f = _l(a, u);
      switch (uw(e, t, s, f), a) {
        case "input":
          w(e, u);
          break;
        case "textarea":
          fv(e, u);
          break;
        case "select":
          pc(e, u);
          break;
      }
    }
    function pw(e) {
      {
        var t = e.toLowerCase();
        return is.hasOwnProperty(t) && is[t] || null;
      }
    }
    function vw(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = _l(t, a), Mh(t, a), t) {
        case "dialog":
          bn("cancel", e), bn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          bn("load", e);
          break;
        case "video":
        case "audio":
          for (var g = 0; g < ip.length; g++)
            bn(ip[g], e);
          break;
        case "source":
          bn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          bn("error", e), bn("load", e);
          break;
        case "details":
          bn("toggle", e);
          break;
        case "input":
          ri(e, a), bn("invalid", e);
          break;
        case "option":
          jt(e, a);
          break;
        case "select":
          fu(e, a), bn("invalid", e);
          break;
        case "textarea":
          rd(e, a), bn("invalid", e);
          break;
      }
      mc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var C = e.attributes, D = 0; D < C.length; D++) {
          var b = C[D].name.toLowerCase();
          switch (b) {
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
      var P = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var G = a[Y];
          if (Y === Ws)
            typeof G == "string" ? e.textContent !== G && (a[Mo] !== !0 && zh(e.textContent, G, s, f), P = [Ws, G]) : typeof G == "number" && e.textContent !== "" + G && (a[Mo] !== !0 && zh(e.textContent, G, s, f), P = [Ws, "" + G]);
          else if (Se.hasOwnProperty(Y))
            G != null && (typeof G != "function" && Nh(Y, G), Y === "onScroll" && bn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Oe = void 0, et = dn(Y);
            if (a[Mo] !== !0) {
              if (!(Y === Dh || Y === Mo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === op) {
                  var Ge = e.innerHTML, At = G ? G[Oh] : void 0;
                  if (At != null) {
                    var kt = q0(e, At);
                    kt !== Ge && sp(Y, Ge, kt);
                  }
                } else if (Y === Qs) {
                  if (v.delete(Y), K0) {
                    var L = fy(G);
                    Oe = e.getAttribute("style"), L !== Oe && sp(Y, Oe, L);
                  }
                } else if (p && !O)
                  v.delete(Y.toLowerCase()), Oe = au(e, Y, G), G !== Oe && sp(Y, Oe, G);
                else if (!Rn(Y, et, p) && !Jn(Y, G, et, p)) {
                  var X = !1;
                  if (et !== null)
                    v.delete(et.attributeName), Oe = yl(e, Y, G, et);
                  else {
                    var z = i;
                    if (z === Ii && (z = ld(t)), z === Ii)
                      v.delete(Y.toLowerCase());
                    else {
                      var pe = pw(Y);
                      pe !== null && pe !== Y && (X = !0, v.delete(pe)), v.delete(Y);
                    }
                    Oe = au(e, Y, G);
                  }
                  var ze = O;
                  !ze && G !== Oe && !X && sp(Y, Oe, G);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Mo] !== !0 && X0(v), t) {
        case "input":
          ni(e), V(e, a, !0);
          break;
        case "textarea":
          ni(e), dv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Ah(e);
          break;
      }
      return P;
    }
    function hw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Vy(e, t) {
      {
        if (Va)
          return;
        Va = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function By(e, t) {
      {
        if (Va)
          return;
        Va = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function $y(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Yy(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function mw(e, t, a) {
      switch (t) {
        case "input":
          Q(e, a);
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
      var yw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], J0 = [
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
      ], gw = J0.concat(["button"]), Sw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], eE = {
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
        var a = Ct({}, e || eE), i = {
          tag: t
        };
        return J0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), gw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), yw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Ew = function(e, t) {
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
            return Sw.indexOf(t) === -1;
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
      }, Cw = function(e, t) {
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
        var s = Ew(e, u) ? null : i, f = s ? null : Cw(e, a), p = s || f;
        if (p) {
          var v = p.tag, g = !!s + "|" + e + "|" + v;
          if (!tE[g]) {
            tE[g] = !0;
            var C = e, D = "";
            if (e === "#text" ? /\S/.test(t) ? C = "Text nodes" : (C = "Whitespace text nodes", D = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : C = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", C, v, D, b);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", C, v);
          }
        }
      };
    }
    var Uh = "suppressHydrationWarning", jh = "$", Fh = "/$", dp = "$?", pp = "$!", Rw = "style", Iy = null, Wy = null;
    function Tw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Qi:
        case od: {
          t = i === Qi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : ud(null, "");
          break;
        }
        default: {
          var s = i === Hn ? e.parentNode : e, f = s.namespaceURI || null;
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
    function ww(e, t, a) {
      {
        var i = e, u = ud(i.namespace, t), s = fp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function CD(e) {
      return e;
    }
    function xw(e) {
      Iy = In(), Wy = HT();
      var t = null;
      return qn(!1), t;
    }
    function _w(e) {
      PT(Wy), qn(Iy), Iy = null, Wy = null;
    }
    function bw(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (cp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = fp(f.ancestorInfo, e);
          cp(null, p, v);
        }
        s = f.namespace;
      }
      var g = ow(e, t, a, s);
      return mp(u, g), eg(g, t), g;
    }
    function kw(e, t) {
      e.appendChild(t);
    }
    function Dw(e, t, a, i, u) {
      switch (cw(e, t, a, i), t) {
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
    function Ow(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = fp(f.ancestorInfo, t);
          cp(null, p, v);
        }
      }
      return fw(e, t, a, i);
    }
    function Qy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Mw(e, t, a, i) {
      {
        var u = a;
        cp(null, e, u.ancestorInfo);
      }
      var s = sw(e, t);
      return mp(i, s), s;
    }
    function Nw() {
      var e = window.event;
      return e === void 0 ? ja : cf(e.type);
    }
    var Gy = typeof setTimeout == "function" ? setTimeout : void 0, Lw = typeof clearTimeout == "function" ? clearTimeout : void 0, Xy = -1, nE = typeof Promise == "function" ? Promise : void 0, zw = typeof queueMicrotask == "function" ? queueMicrotask : typeof nE < "u" ? function(e) {
      return nE.resolve(null).then(e).catch(Aw);
    } : Gy;
    function Aw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Uw(e, t, a, i) {
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
    function jw(e, t, a, i, u, s) {
      dw(e, t, a, i, u), eg(e, u);
    }
    function rE(e) {
      uo(e, "");
    }
    function Fw(e, t, a) {
      e.nodeValue = a;
    }
    function Hw(e, t) {
      e.appendChild(t);
    }
    function Pw(e, t) {
      var a;
      e.nodeType === Hn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ah(a);
    }
    function Vw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Bw(e, t, a) {
      e.nodeType === Hn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $w(e, t) {
      e.removeChild(t);
    }
    function Yw(e, t) {
      e.nodeType === Hn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ky(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Hn) {
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
    function Iw(e, t) {
      e.nodeType === Hn ? Ky(e.parentNode, t) : e.nodeType === Gr && Ky(e, t), Nu(e);
    }
    function Ww(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Qw(e) {
      e.nodeValue = "";
    }
    function Gw(e, t) {
      e = e;
      var a = t[Rw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = hc("display", i);
    }
    function Xw(e, t) {
      e.nodeValue = t;
    }
    function Kw(e) {
      e.nodeType === Gr ? e.textContent = "" : e.nodeType === Qi && e.documentElement && e.removeChild(e.documentElement);
    }
    function qw(e, t, a) {
      return e.nodeType !== Gr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Zw(e, t) {
      return t === "" || e.nodeType !== Wi ? null : e;
    }
    function Jw(e) {
      return e.nodeType !== Hn ? null : e;
    }
    function aE(e) {
      return e.data === dp;
    }
    function qy(e) {
      return e.data === pp;
    }
    function ex(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function tx(e, t) {
      e._reactRetry = t;
    }
    function Hh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Gr || t === Wi)
          break;
        if (t === Hn) {
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
    function nx(e) {
      return Hh(e.firstChild);
    }
    function rx(e) {
      return Hh(e.firstChild);
    }
    function ax(e) {
      return Hh(e.nextSibling);
    }
    function ix(e, t, a, i, u, s, f) {
      mp(s, e), eg(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var g = (s.mode & xt) !== qe;
      return vw(e, t, a, p, i, g, f);
    }
    function lx(e, t, a, i) {
      return mp(a, e), a.mode & xt, hw(e, t);
    }
    function ux(e, t) {
      mp(t, e);
    }
    function ox(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Hn) {
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
        if (t.nodeType === Hn) {
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
    function sx(e) {
      Nu(e);
    }
    function cx(e) {
      Nu(e);
    }
    function fx(e) {
      return e !== "head" && e !== "body";
    }
    function dx(e, t, a, i) {
      var u = !0;
      zh(t.nodeValue, a, i, u);
    }
    function px(e, t, a, i, u, s) {
      if (t[Uh] !== !0) {
        var f = !0;
        zh(i.nodeValue, u, s, f);
      }
    }
    function vx(e, t) {
      t.nodeType === Gr ? Vy(e, t) : t.nodeType === Hn || By(e, t);
    }
    function hx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Gr ? Vy(a, t) : t.nodeType === Hn || By(a, t));
      }
    }
    function mx(e, t, a, i, u) {
      (u || t[Uh] !== !0) && (i.nodeType === Gr ? Vy(a, i) : i.nodeType === Hn || By(a, i));
    }
    function yx(e, t, a) {
      $y(e, t);
    }
    function gx(e, t) {
      Yy(e, t);
    }
    function Sx(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && $y(i, t);
      }
    }
    function Ex(e, t) {
      {
        var a = e.parentNode;
        a !== null && Yy(a, t);
      }
    }
    function Cx(e, t, a, i, u, s) {
      (s || t[Uh] !== !0) && $y(a, i);
    }
    function Rx(e, t, a, i, u) {
      (u || t[Uh] !== !0) && Yy(a, i);
    }
    function Tx(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function wx(e) {
      lp(e);
    }
    var wf = Math.random().toString(36).slice(2), xf = "__reactFiber$" + wf, Zy = "__reactProps$" + wf, hp = "__reactContainer$" + wf, Jy = "__reactEvents$" + wf, xx = "__reactListeners$" + wf, _x = "__reactHandles$" + wf;
    function bx(e) {
      delete e[xf], delete e[Zy], delete e[Jy], delete e[xx], delete e[_x];
    }
    function mp(e, t) {
      t[xf] = e;
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
    function Gs(e) {
      var t = e[xf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[hp] || a[xf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = iE(e); u !== null; ) {
              var s = u[xf];
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
      var t = e[xf] || e[hp];
      return t && (t.tag === F || t.tag === he || t.tag === ve || t.tag === K) ? t : null;
    }
    function _f(e) {
      if (e.tag === F || e.tag === he)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Vh(e) {
      return e[Zy] || null;
    }
    function eg(e, t) {
      e[Zy] = t;
    }
    function kx(e) {
      var t = e[Jy];
      return t === void 0 && (t = e[Jy] = /* @__PURE__ */ new Set()), t;
    }
    var uE = {}, oE = E.ReactDebugCurrentFrame;
    function Bh(e) {
      if (e) {
        var t = e._owner, a = Bi(e.type, e._source, t ? t.type : null);
        oE.setExtraStackFrame(a);
      } else
        oE.setExtraStackFrame(null);
    }
    function al(e, t, a, i, u) {
      {
        var s = Function.call.bind(Ye);
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
    function ia(e, t) {
      if (Fu < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== $h[Fu] && y("Unexpected Fiber popped."), e.current = tg[Fu], tg[Fu] = null, $h[Fu] = null, Fu--;
    }
    function la(e, t, a) {
      Fu++, tg[Fu] = e.current, $h[Fu] = a, e.current = t;
    }
    var ng;
    ng = {};
    var ci = {};
    Object.freeze(ci);
    var Hu = Lo(ci), Wl = Lo(!1), rg = ci;
    function bf(e, t, a) {
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
          return ci;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = ft(e) || "Unknown";
          al(i, s, "context", p);
        }
        return u && sE(e, t, s), s;
      }
    }
    function Yh() {
      return Wl.current;
    }
    function Ql(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ih(e) {
      ia(Wl, e), ia(Hu, e);
    }
    function ag(e) {
      ia(Wl, e), ia(Hu, e);
    }
    function cE(e, t, a) {
      {
        if (Hu.current !== ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(Hu, t, e), la(Wl, a, e);
      }
    }
    function fE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = ft(e) || "Unknown";
            ng[s] || (ng[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((ft(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = ft(e) || "Unknown";
          al(u, f, "child context", v);
        }
        return Ct({}, a, f);
      }
    }
    function Wh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ci;
        return rg = Hu.current, la(Hu, a, e), la(Wl, Wl.current, e), !0;
      }
    }
    function dE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = fE(e, t, rg);
          i.__reactInternalMemoizedMergedChildContext = u, ia(Wl, e), ia(Hu, e), la(Hu, u, e), la(Wl, a, e);
        } else
          ia(Wl, e), la(Wl, a, e);
      }
    }
    function Dx(e) {
      {
        if (!gu(e) || e.tag !== M)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case K:
              return t.stateNode.context;
            case M: {
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
    function Ox(e) {
      ig = !0, pE(e);
    }
    function vE() {
      ig && Ao();
    }
    function Ao() {
      if (!lg && Pu !== null) {
        lg = !0;
        var e = 0, t = Ha();
        try {
          var a = !0, i = Pu;
          for (Yn(zr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Pu = null, ig = !1;
        } catch (s) {
          throw Pu !== null && (Pu = Pu.slice(e + 1)), Ed(ps, Ao), s;
        } finally {
          Yn(t), lg = !1;
        }
      }
      return null;
    }
    var Df = [], Of = 0, Gh = null, Xh = 0, zi = [], Ai = 0, Xs = null, Vu = 1, Bu = "";
    function Mx(e) {
      return qs(), (e.flags & wi) !== Ke;
    }
    function Nx(e) {
      return qs(), Xh;
    }
    function Lx() {
      var e = Bu, t = Vu, a = t & ~zx(t);
      return a.toString(32) + e;
    }
    function Ks(e, t) {
      qs(), Df[Of++] = Xh, Df[Of++] = Gh, Gh = e, Xh = t;
    }
    function hE(e, t, a) {
      qs(), zi[Ai++] = Vu, zi[Ai++] = Bu, zi[Ai++] = Xs, Xs = e;
      var i = Vu, u = Bu, s = Kh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Kh(t) + s;
      if (v > 30) {
        var g = s - s % 5, C = (1 << g) - 1, D = (f & C).toString(32), b = f >> g, P = s - g, Y = Kh(t) + P, G = p << P, Oe = G | b, et = D + u;
        Vu = 1 << Y | Oe, Bu = et;
      } else {
        var Ge = p << s, At = Ge | f, kt = u;
        Vu = 1 << v | At, Bu = kt;
      }
    }
    function ug(e) {
      qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ks(e, a), hE(e, a, i);
      }
    }
    function Kh(e) {
      return 32 - Bn(e);
    }
    function zx(e) {
      return 1 << Kh(e) - 1;
    }
    function og(e) {
      for (; e === Gh; )
        Gh = Df[--Of], Df[Of] = null, Xh = Df[--Of], Df[Of] = null;
      for (; e === Xs; )
        Xs = zi[--Ai], zi[Ai] = null, Bu = zi[--Ai], zi[Ai] = null, Vu = zi[--Ai], zi[Ai] = null;
    }
    function Ax() {
      return qs(), Xs !== null ? {
        id: Vu,
        overflow: Bu
      } : null;
    }
    function Ux(e, t) {
      qs(), zi[Ai++] = Vu, zi[Ai++] = Bu, zi[Ai++] = Xs, Vu = t.id, Bu = t.overflow, Xs = e;
    }
    function qs() {
      Hr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Fr = null, Ui = null, il = !1, Zs = !1, Uo = null;
    function jx() {
      il && y("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function mE() {
      Zs = !0;
    }
    function Fx() {
      return Zs;
    }
    function Hx(e) {
      var t = e.stateNode.containerInfo;
      return Ui = rx(t), Fr = e, il = !0, Uo = null, Zs = !1, !0;
    }
    function Px(e, t, a) {
      return Ui = ax(t), Fr = e, il = !0, Uo = null, Zs = !1, a !== null && Ux(e, a), !0;
    }
    function yE(e, t) {
      switch (e.tag) {
        case K: {
          vx(e.stateNode.containerInfo, t);
          break;
        }
        case F: {
          var a = (e.mode & xt) !== qe;
          mx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case ve: {
          var i = e.memoizedState;
          i.dehydrated !== null && hx(i.dehydrated, t);
          break;
        }
      }
    }
    function gE(e, t) {
      yE(e, t);
      var a = Yb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Na) : i.push(a);
    }
    function sg(e, t) {
      {
        if (Zs)
          return;
        switch (e.tag) {
          case K: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case F:
                var i = t.type;
                t.pendingProps, yx(a, i);
                break;
              case he:
                var u = t.pendingProps;
                gx(a, u);
                break;
            }
            break;
          }
          case F: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case F: {
                var v = t.type, g = t.pendingProps, C = (e.mode & xt) !== qe;
                Cx(
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
              case he: {
                var D = t.pendingProps, b = (e.mode & xt) !== qe;
                Rx(
                  s,
                  f,
                  p,
                  D,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case ve: {
            var P = e.memoizedState, Y = P.dehydrated;
            if (Y !== null) switch (t.tag) {
              case F:
                var G = t.type;
                t.pendingProps, Sx(Y, G);
                break;
              case he:
                var Oe = t.pendingProps;
                Ex(Y, Oe);
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
      t.flags = t.flags & ~Kr | wn, sg(e, t);
    }
    function EE(e, t) {
      switch (e.tag) {
        case F: {
          var a = e.type;
          e.pendingProps;
          var i = qw(t, a);
          return i !== null ? (e.stateNode = i, Fr = e, Ui = nx(i), !0) : !1;
        }
        case he: {
          var u = e.pendingProps, s = Zw(t, u);
          return s !== null ? (e.stateNode = s, Fr = e, Ui = null, !0) : !1;
        }
        case ve: {
          var f = Jw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Ax(),
              retryLane: ea
            };
            e.memoizedState = p;
            var v = Ib(f);
            return v.return = e, e.child = v, Fr = e, Ui = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function cg(e) {
      return (e.mode & xt) !== qe && (e.flags & Xe) === Ke;
    }
    function fg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function dg(e) {
      if (il) {
        var t = Ui;
        if (!t) {
          cg(e) && (sg(Fr, e), fg()), SE(Fr, e), il = !1, Fr = e;
          return;
        }
        var a = t;
        if (!EE(e, t)) {
          cg(e) && (sg(Fr, e), fg()), t = vp(a);
          var i = Fr;
          if (!t || !EE(e, t)) {
            SE(Fr, e), il = !1, Fr = e;
            return;
          }
          gE(i, a);
        }
      }
    }
    function Vx(e, t, a) {
      var i = e.stateNode, u = !Zs, s = ix(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Bx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = lx(t, a, e);
      if (i) {
        var u = Fr;
        if (u !== null)
          switch (u.tag) {
            case K: {
              var s = u.stateNode.containerInfo, f = (u.mode & xt) !== qe;
              dx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case F: {
              var p = u.type, v = u.memoizedProps, g = u.stateNode, C = (u.mode & xt) !== qe;
              px(
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
    function $x(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      ux(a, e);
    }
    function Yx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ox(a);
    }
    function CE(e) {
      for (var t = e.return; t !== null && t.tag !== F && t.tag !== K && t.tag !== ve; )
        t = t.return;
      Fr = t;
    }
    function qh(e) {
      if (e !== Fr)
        return !1;
      if (!il)
        return CE(e), il = !0, !1;
      if (e.tag !== K && (e.tag !== F || fx(e.type) && !Qy(e.type, e.memoizedProps))) {
        var t = Ui;
        if (t)
          if (cg(e))
            RE(e), fg();
          else
            for (; t; )
              gE(e, t), t = vp(t);
      }
      return CE(e), e.tag === ve ? Ui = Yx(e) : Ui = Fr ? vp(e.stateNode) : null, !0;
    }
    function Ix() {
      return il && Ui !== null;
    }
    function RE(e) {
      for (var t = Ui; t; )
        yE(e, t), t = vp(t);
    }
    function Mf() {
      Fr = null, Ui = null, il = !1, Zs = !1;
    }
    function TE() {
      Uo !== null && (mR(Uo), Uo = null);
    }
    function Hr() {
      return il;
    }
    function pg(e) {
      Uo === null ? Uo = [e] : Uo.push(e);
    }
    var Wx = E.ReactCurrentBatchConfig, Qx = null;
    function Gx() {
      return Wx.transition;
    }
    var ll = {
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
      var Xx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ln && (t = a), a = a.return;
        return t;
      }, Js = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, gp = [], Sp = [], Ep = [], Cp = [], Rp = [], Tp = [], ec = /* @__PURE__ */ new Set();
      ll.recordUnsafeLifecycleWarnings = function(e, t) {
        ec.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & ln && typeof t.UNSAFE_componentWillMount == "function" && Sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & ln && typeof t.UNSAFE_componentWillReceiveProps == "function" && Cp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Rp.push(e), e.mode & ln && typeof t.UNSAFE_componentWillUpdate == "function" && Tp.push(e));
      }, ll.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(b) {
          e.add(ft(b) || "Component"), ec.add(b.type);
        }), gp = []);
        var t = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(b) {
          t.add(ft(b) || "Component"), ec.add(b.type);
        }), Sp = []);
        var a = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(b) {
          a.add(ft(b) || "Component"), ec.add(b.type);
        }), Ep = []);
        var i = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(b) {
          i.add(ft(b) || "Component"), ec.add(b.type);
        }), Cp = []);
        var u = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(b) {
          u.add(ft(b) || "Component"), ec.add(b.type);
        }), Rp = []);
        var s = /* @__PURE__ */ new Set();
        if (Tp.length > 0 && (Tp.forEach(function(b) {
          s.add(ft(b) || "Component"), ec.add(b.type);
        }), Tp = []), t.size > 0) {
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
          I(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (a.size > 0) {
          var C = Js(a);
          I(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (u.size > 0) {
          var D = Js(u);
          I(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var Zh = /* @__PURE__ */ new Map(), wE = /* @__PURE__ */ new Set();
      ll.recordLegacyContextWarning = function(e, t) {
        var a = Xx(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!wE.has(e.type)) {
          var i = Zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Zh.set(a, i)), i.push(e));
        }
      }, ll.flushLegacyContextWarning = function() {
        Zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(ft(s) || "Component"), wE.add(s.type);
            });
            var u = Js(i);
            try {
              nn(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              gn();
            }
          }
        });
      }, ll.discardPendingWarnings = function() {
        gp = [], Sp = [], Ep = [], Cp = [], Rp = [], Tp = [], Zh = /* @__PURE__ */ new Map();
      };
    }
    var vg, hg, mg, yg, gg, xE = function(e, t) {
    };
    vg = !1, hg = !1, mg = {}, yg = {}, gg = {}, xE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ft(t) || "Component";
        yg[a] || (yg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Kx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function wp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ln || q) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== M) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Kx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = ft(e) || "Component";
          mg[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), mg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== M)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          _a(i, "ref");
          var g = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === g)
            return t.ref;
          var C = function(D) {
            var b = v.refs;
            D === null ? delete b[g] : b[g] = D;
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
        var t = ft(e) || "Component";
        if (gg[t])
          return;
        gg[t] = !0, y("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function _E(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function bE(e) {
      function t(L, X) {
        if (e) {
          var z = L.deletions;
          z === null ? (L.deletions = [X], L.flags |= Na) : z.push(X);
        }
      }
      function a(L, X) {
        if (!e)
          return null;
        for (var z = X; z !== null; )
          t(L, z), z = z.sibling;
        return null;
      }
      function i(L, X) {
        for (var z = /* @__PURE__ */ new Map(), pe = X; pe !== null; )
          pe.key !== null ? z.set(pe.key, pe) : z.set(pe.index, pe), pe = pe.sibling;
        return z;
      }
      function u(L, X) {
        var z = sc(L, X);
        return z.index = 0, z.sibling = null, z;
      }
      function s(L, X, z) {
        if (L.index = z, !e)
          return L.flags |= wi, X;
        var pe = L.alternate;
        if (pe !== null) {
          var ze = pe.index;
          return ze < X ? (L.flags |= wn, X) : ze;
        } else
          return L.flags |= wn, X;
      }
      function f(L) {
        return e && L.alternate === null && (L.flags |= wn), L;
      }
      function p(L, X, z, pe) {
        if (X === null || X.tag !== he) {
          var ze = p0(z, L.mode, pe);
          return ze.return = L, ze;
        } else {
          var Me = u(X, z);
          return Me.return = L, Me;
        }
      }
      function v(L, X, z, pe) {
        var ze = z.type;
        if (ze === vi)
          return C(L, X, z.props.children, pe, z.key);
        if (X !== null && (X.elementType === ze || // Keep this check inline so it only runs on the false path:
        NR(X, z) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ze == "object" && ze !== null && ze.$$typeof === dt && _E(ze) === X.type)) {
          var Me = u(X, z.props);
          return Me.ref = wp(L, X, z), Me.return = L, Me._debugSource = z._source, Me._debugOwner = z._owner, Me;
        }
        var ut = d0(z, L.mode, pe);
        return ut.ref = wp(L, X, z), ut.return = L, ut;
      }
      function g(L, X, z, pe) {
        if (X === null || X.tag !== Z || X.stateNode.containerInfo !== z.containerInfo || X.stateNode.implementation !== z.implementation) {
          var ze = v0(z, L.mode, pe);
          return ze.return = L, ze;
        } else {
          var Me = u(X, z.children || []);
          return Me.return = L, Me;
        }
      }
      function C(L, X, z, pe, ze) {
        if (X === null || X.tag !== ee) {
          var Me = Qo(z, L.mode, pe, ze);
          return Me.return = L, Me;
        } else {
          var ut = u(X, z);
          return ut.return = L, ut;
        }
      }
      function D(L, X, z) {
        if (typeof X == "string" && X !== "" || typeof X == "number") {
          var pe = p0("" + X, L.mode, z);
          return pe.return = L, pe;
        }
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Or: {
              var ze = d0(X, L.mode, z);
              return ze.ref = wp(L, null, X), ze.return = L, ze;
            }
            case lr: {
              var Me = v0(X, L.mode, z);
              return Me.return = L, Me;
            }
            case dt: {
              var ut = X._payload, vt = X._init;
              return D(L, vt(ut), z);
            }
          }
          if (Tt(X) || gt(X)) {
            var on = Qo(X, L.mode, z, null);
            return on.return = L, on;
          }
          Jh(L, X);
        }
        return typeof X == "function" && em(L), null;
      }
      function b(L, X, z, pe) {
        var ze = X !== null ? X.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number")
          return ze !== null ? null : p(L, X, "" + z, pe);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Or:
              return z.key === ze ? v(L, X, z, pe) : null;
            case lr:
              return z.key === ze ? g(L, X, z, pe) : null;
            case dt: {
              var Me = z._payload, ut = z._init;
              return b(L, X, ut(Me), pe);
            }
          }
          if (Tt(z) || gt(z))
            return ze !== null ? null : C(L, X, z, pe, null);
          Jh(L, z);
        }
        return typeof z == "function" && em(L), null;
      }
      function P(L, X, z, pe, ze) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var Me = L.get(z) || null;
          return p(X, Me, "" + pe, ze);
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case Or: {
              var ut = L.get(pe.key === null ? z : pe.key) || null;
              return v(X, ut, pe, ze);
            }
            case lr: {
              var vt = L.get(pe.key === null ? z : pe.key) || null;
              return g(X, vt, pe, ze);
            }
            case dt:
              var on = pe._payload, It = pe._init;
              return P(L, X, z, It(on), ze);
          }
          if (Tt(pe) || gt(pe)) {
            var Zn = L.get(z) || null;
            return C(X, Zn, pe, ze, null);
          }
          Jh(X, pe);
        }
        return typeof pe == "function" && em(X), null;
      }
      function Y(L, X, z) {
        {
          if (typeof L != "object" || L === null)
            return X;
          switch (L.$$typeof) {
            case Or:
            case lr:
              xE(L, z);
              var pe = L.key;
              if (typeof pe != "string")
                break;
              if (X === null) {
                X = /* @__PURE__ */ new Set(), X.add(pe);
                break;
              }
              if (!X.has(pe)) {
                X.add(pe);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", pe);
              break;
            case dt:
              var ze = L._payload, Me = L._init;
              Y(Me(ze), X, z);
              break;
          }
        }
        return X;
      }
      function G(L, X, z, pe) {
        for (var ze = null, Me = 0; Me < z.length; Me++) {
          var ut = z[Me];
          ze = Y(ut, ze, L);
        }
        for (var vt = null, on = null, It = X, Zn = 0, Wt = 0, Qn = null; It !== null && Wt < z.length; Wt++) {
          It.index > Wt ? (Qn = It, It = null) : Qn = It.sibling;
          var oa = b(L, It, z[Wt], pe);
          if (oa === null) {
            It === null && (It = Qn);
            break;
          }
          e && It && oa.alternate === null && t(L, It), Zn = s(oa, Zn, Wt), on === null ? vt = oa : on.sibling = oa, on = oa, It = Qn;
        }
        if (Wt === z.length) {
          if (a(L, It), Hr()) {
            var Wr = Wt;
            Ks(L, Wr);
          }
          return vt;
        }
        if (It === null) {
          for (; Wt < z.length; Wt++) {
            var di = D(L, z[Wt], pe);
            di !== null && (Zn = s(di, Zn, Wt), on === null ? vt = di : on.sibling = di, on = di);
          }
          if (Hr()) {
            var Ra = Wt;
            Ks(L, Ra);
          }
          return vt;
        }
        for (var Ta = i(L, It); Wt < z.length; Wt++) {
          var sa = P(Ta, L, Wt, z[Wt], pe);
          sa !== null && (e && sa.alternate !== null && Ta.delete(sa.key === null ? Wt : sa.key), Zn = s(sa, Zn, Wt), on === null ? vt = sa : on.sibling = sa, on = sa);
        }
        if (e && Ta.forEach(function(Kf) {
          return t(L, Kf);
        }), Hr()) {
          var Xu = Wt;
          Ks(L, Xu);
        }
        return vt;
      }
      function Oe(L, X, z, pe) {
        var ze = gt(z);
        if (typeof ze != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          z[Symbol.toStringTag] === "Generator" && (hg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hg = !0), z.entries === ze && (vg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vg = !0);
          var Me = ze.call(z);
          if (Me)
            for (var ut = null, vt = Me.next(); !vt.done; vt = Me.next()) {
              var on = vt.value;
              ut = Y(on, ut, L);
            }
        }
        var It = ze.call(z);
        if (It == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Zn = null, Wt = null, Qn = X, oa = 0, Wr = 0, di = null, Ra = It.next(); Qn !== null && !Ra.done; Wr++, Ra = It.next()) {
          Qn.index > Wr ? (di = Qn, Qn = null) : di = Qn.sibling;
          var Ta = b(L, Qn, Ra.value, pe);
          if (Ta === null) {
            Qn === null && (Qn = di);
            break;
          }
          e && Qn && Ta.alternate === null && t(L, Qn), oa = s(Ta, oa, Wr), Wt === null ? Zn = Ta : Wt.sibling = Ta, Wt = Ta, Qn = di;
        }
        if (Ra.done) {
          if (a(L, Qn), Hr()) {
            var sa = Wr;
            Ks(L, sa);
          }
          return Zn;
        }
        if (Qn === null) {
          for (; !Ra.done; Wr++, Ra = It.next()) {
            var Xu = D(L, Ra.value, pe);
            Xu !== null && (oa = s(Xu, oa, Wr), Wt === null ? Zn = Xu : Wt.sibling = Xu, Wt = Xu);
          }
          if (Hr()) {
            var Kf = Wr;
            Ks(L, Kf);
          }
          return Zn;
        }
        for (var nv = i(L, Qn); !Ra.done; Wr++, Ra = It.next()) {
          var tu = P(nv, L, Wr, Ra.value, pe);
          tu !== null && (e && tu.alternate !== null && nv.delete(tu.key === null ? Wr : tu.key), oa = s(tu, oa, Wr), Wt === null ? Zn = tu : Wt.sibling = tu, Wt = tu);
        }
        if (e && nv.forEach(function(Rk) {
          return t(L, Rk);
        }), Hr()) {
          var Ck = Wr;
          Ks(L, Ck);
        }
        return Zn;
      }
      function et(L, X, z, pe) {
        if (X !== null && X.tag === he) {
          a(L, X.sibling);
          var ze = u(X, z);
          return ze.return = L, ze;
        }
        a(L, X);
        var Me = p0(z, L.mode, pe);
        return Me.return = L, Me;
      }
      function Ge(L, X, z, pe) {
        for (var ze = z.key, Me = X; Me !== null; ) {
          if (Me.key === ze) {
            var ut = z.type;
            if (ut === vi) {
              if (Me.tag === ee) {
                a(L, Me.sibling);
                var vt = u(Me, z.props.children);
                return vt.return = L, vt._debugSource = z._source, vt._debugOwner = z._owner, vt;
              }
            } else if (Me.elementType === ut || // Keep this check inline so it only runs on the false path:
            NR(Me, z) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ut == "object" && ut !== null && ut.$$typeof === dt && _E(ut) === Me.type) {
              a(L, Me.sibling);
              var on = u(Me, z.props);
              return on.ref = wp(L, Me, z), on.return = L, on._debugSource = z._source, on._debugOwner = z._owner, on;
            }
            a(L, Me);
            break;
          } else
            t(L, Me);
          Me = Me.sibling;
        }
        if (z.type === vi) {
          var It = Qo(z.props.children, L.mode, pe, z.key);
          return It.return = L, It;
        } else {
          var Zn = d0(z, L.mode, pe);
          return Zn.ref = wp(L, X, z), Zn.return = L, Zn;
        }
      }
      function At(L, X, z, pe) {
        for (var ze = z.key, Me = X; Me !== null; ) {
          if (Me.key === ze)
            if (Me.tag === Z && Me.stateNode.containerInfo === z.containerInfo && Me.stateNode.implementation === z.implementation) {
              a(L, Me.sibling);
              var ut = u(Me, z.children || []);
              return ut.return = L, ut;
            } else {
              a(L, Me);
              break;
            }
          else
            t(L, Me);
          Me = Me.sibling;
        }
        var vt = v0(z, L.mode, pe);
        return vt.return = L, vt;
      }
      function kt(L, X, z, pe) {
        var ze = typeof z == "object" && z !== null && z.type === vi && z.key === null;
        if (ze && (z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Or:
              return f(Ge(L, X, z, pe));
            case lr:
              return f(At(L, X, z, pe));
            case dt:
              var Me = z._payload, ut = z._init;
              return kt(L, X, ut(Me), pe);
          }
          if (Tt(z))
            return G(L, X, z, pe);
          if (gt(z))
            return Oe(L, X, z, pe);
          Jh(L, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" ? f(et(L, X, "" + z, pe)) : (typeof z == "function" && em(L), a(L, X));
      }
      return kt;
    }
    var Nf = bE(!0), kE = bE(!1);
    function qx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = sc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = sc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Zx(e, t) {
      for (var a = e.child; a !== null; )
        Hb(a, t), a = a.sibling;
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
      la(Sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Eg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Eg;
    }
    function Rg(e, t) {
      var a = Sg.current;
      ia(Sg, t), e._currentValue = a;
    }
    function Tg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Mu(i.childLanes, t) ? u !== null && !Mu(u.childLanes, t) && (u.childLanes = St(u.childLanes, t)) : (i.childLanes = St(i.childLanes, t), u !== null && (u.childLanes = St(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && y("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Jx(e, t, a) {
      e1(e, t, a);
    }
    function e1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === M) {
                var p = bs(a), v = $u(sn, p);
                v.tag = im;
                var g = i.updateQueue;
                if (g !== null) {
                  var C = g.shared, D = C.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), C.pending = v;
                }
              }
              i.lanes = St(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = St(b.lanes, a)), Tg(i.return, a, e), s.lanes = St(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === fe)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === nt) {
          var P = i.return;
          if (P === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          P.lanes = St(P.lanes, a);
          var Y = P.alternate;
          Y !== null && (Y.lanes = St(Y.lanes, a)), Tg(P, a, e), u = i.sibling;
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
            var G = u.sibling;
            if (G !== null) {
              G.return = u.return, u = G;
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
        i !== null && (ta(a.lanes, t) && Hp(), a.firstContext = null);
      }
    }
    function ar(e) {
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
            lanes: ae,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var tc = null;
    function wg(e) {
      tc === null ? tc = [e] : tc.push(e);
    }
    function t1() {
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
      return u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, am(e, i);
    }
    function n1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function r1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, am(e, i);
    }
    function Ba(e, t) {
      return am(e, t);
    }
    var a1 = am;
    function am(e, t) {
      e.lanes = St(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = St(a.lanes, t)), a === null && (e.flags & (wn | Kr)) !== Ke && kR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = St(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = St(a.childLanes, t) : (u.flags & (wn | Kr)) !== Ke && kR(e), i = u, u = u.return;
      if (i.tag === K) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var LE = 0, zE = 1, im = 2, xg = 3, lm = !1, _g, um;
    _g = !1, um = null;
    function bg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ae
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
      if (um === u && !_g && (y("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), _g = !0), nb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, a1(e, a);
      } else
        return r1(e, u, t, a);
    }
    function om(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (jd(a)) {
          var s = u.lanes;
          s = Hd(s, e.pendingLanes);
          var f = St(s, a);
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
    function i1(e, t, a, i, u, s) {
      switch (a.tag) {
        case zE: {
          var f = a.payload;
          if (typeof f == "function") {
            DE();
            var p = f.call(s, i, u);
            {
              if (e.mode & ln) {
                xn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  xn(!1);
                }
              }
              OE();
            }
            return p;
          }
          return f;
        }
        case xg:
          e.flags = e.flags & ~er | Xe;
        case LE: {
          var v = a.payload, g;
          if (typeof v == "function") {
            DE(), g = v.call(s, i, u);
            {
              if (e.mode & ln) {
                xn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  xn(!1);
                }
              }
              OE();
            }
          } else
            g = v;
          return g == null ? i : Ct({}, i, g);
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
          var D = C.updateQueue, b = D.lastBaseUpdate;
          b !== f && (b === null ? D.firstBaseUpdate = g : b.next = g, D.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var P = u.baseState, Y = ae, G = null, Oe = null, et = null, Ge = s;
        do {
          var At = Ge.lane, kt = Ge.eventTime;
          if (Mu(i, At)) {
            if (et !== null) {
              var X = {
                eventTime: kt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ht,
                tag: Ge.tag,
                payload: Ge.payload,
                callback: Ge.callback,
                next: null
              };
              et = et.next = X;
            }
            P = i1(e, u, Ge, P, t, a);
            var z = Ge.callback;
            if (z !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ge.lane !== Ht) {
              e.flags |= hn;
              var pe = u.effects;
              pe === null ? u.effects = [Ge] : pe.push(Ge);
            }
          } else {
            var L = {
              eventTime: kt,
              lane: At,
              tag: Ge.tag,
              payload: Ge.payload,
              callback: Ge.callback,
              next: null
            };
            et === null ? (Oe = et = L, G = P) : et = et.next = L, Y = St(Y, At);
          }
          if (Ge = Ge.next, Ge === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ze = p, Me = ze.next;
            ze.next = null, Ge = Me, u.lastBaseUpdate = ze, u.shared.pending = null;
          }
        } while (!0);
        et === null && (G = P), u.baseState = G, u.firstBaseUpdate = Oe, u.lastBaseUpdate = et;
        var ut = u.shared.interleaved;
        if (ut !== null) {
          var vt = ut;
          do
            Y = St(Y, vt.lane), vt = vt.next;
          while (vt !== ut);
        } else s === null && (u.shared.lanes = ae);
        qp(Y), e.lanes = Y, e.memoizedState = P;
      }
      um = null;
    }
    function l1(e, t) {
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
          f !== null && (s.callback = null, l1(f, a));
        }
    }
    var xp = {}, Fo = Lo(xp), _p = Lo(xp), fm = Lo(xp);
    function dm(e) {
      if (e === xp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function FE() {
      var e = dm(fm.current);
      return e;
    }
    function Dg(e, t) {
      la(fm, t, e), la(_p, e, e), la(Fo, xp, e);
      var a = Tw(t);
      ia(Fo, e), la(Fo, a, e);
    }
    function Af(e) {
      ia(Fo, e), ia(_p, e), ia(fm, e);
    }
    function Og() {
      var e = dm(Fo.current);
      return e;
    }
    function HE(e) {
      dm(fm.current);
      var t = dm(Fo.current), a = ww(t, e.type);
      t !== a && (la(_p, e, e), la(Fo, a, e));
    }
    function Mg(e) {
      _p.current === e && (ia(Fo, e), ia(_p, e));
    }
    var u1 = 0, PE = 1, VE = 1, bp = 2, ul = Lo(u1);
    function Ng(e, t) {
      return (e & t) !== 0;
    }
    function Uf(e) {
      return e & PE;
    }
    function Lg(e, t) {
      return e & PE | t;
    }
    function o1(e, t) {
      return e | t;
    }
    function Ho(e, t) {
      la(ul, t, e);
    }
    function jf(e) {
      ia(ul, e);
    }
    function s1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function pm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ve) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || aE(i) || qy(i))
              return t;
          }
        } else if (t.tag === Et && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Xe) !== Ke;
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
    var $a = (
      /*   */
      0
    ), pr = (
      /* */
      1
    ), Gl = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), Pr = (
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
    function c1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Le = E.ReactCurrentDispatcher, kp = E.ReactCurrentBatchConfig, Ug, Ff;
    Ug = /* @__PURE__ */ new Set();
    var nc = ae, un = null, hr = null, mr = null, vm = !1, Dp = !1, Op = 0, f1 = 0, d1 = 25, J = null, ji = null, Po = -1, jg = !1;
    function Kt() {
      {
        var e = J;
        ji === null ? ji = [e] : ji.push(e);
      }
    }
    function xe() {
      {
        var e = J;
        ji !== null && (Po++, ji[Po] !== e && p1(e));
      }
    }
    function Hf(e) {
      e != null && !Tt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function p1(e) {
      {
        var t = ft(un);
        if (!Ug.has(t) && (Ug.add(t), ji !== null)) {
          for (var a = "", i = 30, u = 0; u <= Po; u++) {
            for (var s = ji[u], f = u === Po ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function ua() {
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
        return y("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", J), !1;
      e.length !== t.length && y(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, J, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ue(e[a], t[a]))
          return !1;
      return !0;
    }
    function Pf(e, t, a, i, u, s) {
      nc = s, un = t, ji = e !== null ? e._debugHookTypes : null, Po = -1, jg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ae, e !== null && e.memoizedState !== null ? Le.current = sC : ji !== null ? Le.current = oC : Le.current = uC;
      var f = a(i, u);
      if (Dp) {
        var p = 0;
        do {
          if (Dp = !1, Op = 0, p >= d1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, jg = !1, hr = null, mr = null, t.updateQueue = null, Po = -1, Le.current = cC, f = a(i, u);
        } while (Dp);
      }
      Le.current = bm, t._debugHookTypes = ji;
      var v = hr !== null && hr.next !== null;
      if (nc = ae, un = null, hr = null, mr = null, J = null, ji = null, Po = -1, e !== null && (e.flags & Vn) !== (t.flags & Vn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & xt) !== qe && y("Internal React error: Expected static flag was missing. Please notify the React team."), vm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Vf() {
      var e = Op !== 0;
      return Op = 0, e;
    }
    function BE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & $t) !== qe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ks(e.lanes, a);
    }
    function $E() {
      if (Le.current = bm, vm) {
        for (var e = un.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        vm = !1;
      }
      nc = ae, un = null, hr = null, mr = null, ji = null, Po = -1, J = null, nC = !1, Dp = !1, Op = 0;
    }
    function Xl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? un.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function Fi() {
      var e;
      if (hr === null) {
        var t = un.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = un.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? un.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function YE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Hg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pg(e, t, a) {
      var i = Xl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ae,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = y1.bind(null, un, s);
      return [i.memoizedState, f];
    }
    function Vg(e, t, a) {
      var i = Fi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = hr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, g = p.next;
          f.next = g, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var C = f.next, D = s.baseState, b = null, P = null, Y = null, G = C;
        do {
          var Oe = G.lane;
          if (Mu(nc, Oe)) {
            if (Y !== null) {
              var Ge = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ht,
                action: G.action,
                hasEagerState: G.hasEagerState,
                eagerState: G.eagerState,
                next: null
              };
              Y = Y.next = Ge;
            }
            if (G.hasEagerState)
              D = G.eagerState;
            else {
              var At = G.action;
              D = e(D, At);
            }
          } else {
            var et = {
              lane: Oe,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null
            };
            Y === null ? (P = Y = et, b = D) : Y = Y.next = et, un.lanes = St(un.lanes, Oe), qp(Oe);
          }
          G = G.next;
        } while (G !== null && G !== C);
        Y === null ? b = D : Y.next = P, ue(D, i.memoizedState) || Hp(), i.memoizedState = D, i.baseState = b, i.baseQueue = Y, u.lastRenderedState = D;
      }
      var kt = u.interleaved;
      if (kt !== null) {
        var L = kt;
        do {
          var X = L.lane;
          un.lanes = St(un.lanes, X), qp(X), L = L.next;
        } while (L !== kt);
      } else f === null && (u.lanes = ae);
      var z = u.dispatch;
      return [i.memoizedState, z];
    }
    function Bg(e, t, a) {
      var i = Fi(), u = i.queue;
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
        ue(p, i.memoizedState) || Hp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function RD(e, t, a) {
    }
    function TD(e, t, a) {
    }
    function $g(e, t, a) {
      var i = un, u = Xl(), s, f = Hr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Ff || s !== a() && (y("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      } else {
        if (s = t(), !Ff) {
          var p = t();
          ue(s, p) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
        }
        var v = Wm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(v, nc) || IE(i, t, s);
      }
      u.memoizedState = s;
      var g = {
        value: s,
        getSnapshot: t
      };
      return u.queue = g, Sm(QE.bind(null, i, g, e), [e]), i.flags |= Xr, Mp(pr | Pr, WE.bind(null, i, g, s, t), void 0, null), s;
    }
    function hm(e, t, a) {
      var i = un, u = Fi(), s = t();
      if (!Ff) {
        var f = t();
        ue(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      }
      var p = u.memoizedState, v = !ue(p, s);
      v && (u.memoizedState = s, Hp());
      var g = u.queue;
      if (Lp(QE.bind(null, i, g, e), [e]), g.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= Xr, Mp(pr | Pr, WE.bind(null, i, g, s, t), void 0, null);
        var C = Wm();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(C, nc) || IE(i, t, s);
      }
      return s;
    }
    function IE(e, t, a) {
      e.flags |= yo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = un.updateQueue;
      if (u === null)
        u = YE(), un.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function WE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, GE(t) && XE(e);
    }
    function QE(e, t, a) {
      var i = function() {
        GE(t) && XE(e);
      };
      return a(i);
    }
    function GE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ue(a, i);
      } catch {
        return !0;
      }
    }
    function XE(e) {
      var t = Ba(e, lt);
      t !== null && Er(t, e, lt, sn);
    }
    function mm(e) {
      var t = Xl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ae,
        dispatch: null,
        lastRenderedReducer: Hg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = g1.bind(null, un, a);
      return [t.memoizedState, i];
    }
    function Yg(e) {
      return Vg(Hg);
    }
    function Ig(e) {
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
      }, s = un.updateQueue;
      if (s === null)
        s = YE(), un.updateQueue = s, s.lastEffect = u.next = u;
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
      var t = Xl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function ym(e) {
      var t = Fi();
      return t.memoizedState;
    }
    function Np(e, t, a, i) {
      var u = Xl(), s = i === void 0 ? null : i;
      un.flags |= e, u.memoizedState = Mp(pr | t, a, void 0, s);
    }
    function gm(e, t, a, i) {
      var u = Fi(), s = i === void 0 ? null : i, f = void 0;
      if (hr !== null) {
        var p = hr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Fg(s, v)) {
            u.memoizedState = Mp(t, a, f, s);
            return;
          }
        }
      }
      un.flags |= e, u.memoizedState = Mp(pr | t, a, f, s);
    }
    function Sm(e, t) {
      return (un.mode & $t) !== qe ? Np(xi | Xr | Oc, Pr, e, t) : Np(Xr | Oc, Pr, e, t);
    }
    function Lp(e, t) {
      return gm(Xr, Pr, e, t);
    }
    function Qg(e, t) {
      return Np(Nt, Gl, e, t);
    }
    function Em(e, t) {
      return gm(Nt, Gl, e, t);
    }
    function Gg(e, t) {
      var a = Nt;
      return a |= Xi, (un.mode & $t) !== qe && (a |= Ol), Np(a, vr, e, t);
    }
    function Cm(e, t) {
      return gm(Nt, vr, e, t);
    }
    function KE(e, t) {
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
    function Xg(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Nt;
      return u |= Xi, (un.mode & $t) !== qe && (u |= Ol), Np(u, vr, KE.bind(null, t, e), i);
    }
    function Rm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return gm(Nt, vr, KE.bind(null, t, e), i);
    }
    function v1(e, t) {
    }
    var Tm = v1;
    function Kg(e, t) {
      var a = Xl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function wm(e, t) {
      var a = Fi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Fg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function qg(e, t) {
      var a = Xl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function xm(e, t) {
      var a = Fi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Fg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Zg(e) {
      var t = Xl();
      return t.memoizedState = e, e;
    }
    function qE(e) {
      var t = Fi(), a = hr, i = a.memoizedState;
      return JE(t, i, e);
    }
    function ZE(e) {
      var t = Fi();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return JE(t, a, e);
    }
    function JE(e, t, a) {
      var i = !Ad(nc);
      if (i) {
        if (!ue(a, t)) {
          var u = Fd();
          un.lanes = St(un.lanes, u), qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Hp()), e.memoizedState = a, a;
    }
    function h1(e, t, a) {
      var i = Ha();
      Yn(nh(i, Di)), e(!0);
      var u = kp.transition;
      kp.transition = {};
      var s = kp.transition;
      kp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Yn(i), kp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && I("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Jg() {
      var e = mm(!1), t = e[0], a = e[1], i = h1.bind(null, a), u = Xl();
      return u.memoizedState = i, [t, i];
    }
    function eC() {
      var e = Yg(), t = e[0], a = Fi(), i = a.memoizedState;
      return [t, i];
    }
    function tC() {
      var e = Ig(), t = e[0], a = Fi(), i = a.memoizedState;
      return [t, i];
    }
    var nC = !1;
    function m1() {
      return nC;
    }
    function eS() {
      var e = Xl(), t = Wm(), a = t.identifierPrefix, i;
      if (Hr()) {
        var u = Lx();
        i = ":" + a + "R" + u;
        var s = Op++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = f1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function _m() {
      var e = Fi(), t = e.memoizedState;
      return t;
    }
    function y1(e, t, a) {
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
        var s = NE(e, t, u, i);
        if (s !== null) {
          var f = Ca();
          Er(s, e, i, f), iC(s, t, i);
        }
      }
      lC(e, i);
    }
    function g1(e, t, a) {
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
        if (e.lanes === ae && (s === null || s.lanes === ae)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Le.current, Le.current = ol;
            try {
              var v = t.lastRenderedState, g = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = g, ue(g, v)) {
                n1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Le.current = p;
            }
          }
        }
        var C = NE(e, t, u, i);
        if (C !== null) {
          var D = Ca();
          Er(C, e, i, D), iC(C, t, i);
        }
      }
      lC(e, i);
    }
    function rC(e) {
      var t = e.alternate;
      return e === un || t !== null && t === un;
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
        var u = St(i, a);
        t.lanes = u, lf(e, u);
      }
    }
    function lC(e, t, a) {
      gs(e, t);
    }
    var bm = {
      readContext: ar,
      useCallback: ua,
      useContext: ua,
      useEffect: ua,
      useImperativeHandle: ua,
      useInsertionEffect: ua,
      useLayoutEffect: ua,
      useMemo: ua,
      useReducer: ua,
      useRef: ua,
      useState: ua,
      useDebugValue: ua,
      useDeferredValue: ua,
      useTransition: ua,
      useMutableSource: ua,
      useSyncExternalStore: ua,
      useId: ua,
      unstable_isNewReconciler: me
    }, uC = null, oC = null, sC = null, cC = null, Kl = null, ol = null, km = null;
    {
      var tS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, pt = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      uC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Kt(), Hf(t), Kg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Kt(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Kt(), Hf(t), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", Kt(), Hf(a), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Kt(), Hf(t), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Kt(), Hf(t), Gg(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Kt(), Hf(t);
          var a = Le.current;
          Le.current = Kl;
          try {
            return qg(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", Kt();
          var i = Le.current;
          Le.current = Kl;
          try {
            return Pg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", Kt(), Wg(e);
        },
        useState: function(e) {
          J = "useState", Kt();
          var t = Le.current;
          Le.current = Kl;
          try {
            return mm(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Kt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Kt(), Zg(e);
        },
        useTransition: function() {
          return J = "useTransition", Kt(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", Kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", Kt(), $g(e, t, a);
        },
        useId: function() {
          return J = "useId", Kt(), eS();
        },
        unstable_isNewReconciler: me
      }, oC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", xe(), Kg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", xe(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", xe(), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", xe(), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", xe(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", xe(), Gg(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", xe();
          var a = Le.current;
          Le.current = Kl;
          try {
            return qg(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", xe();
          var i = Le.current;
          Le.current = Kl;
          try {
            return Pg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", xe(), Wg(e);
        },
        useState: function(e) {
          J = "useState", xe();
          var t = Le.current;
          Le.current = Kl;
          try {
            return mm(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", xe(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", xe(), Zg(e);
        },
        useTransition: function() {
          return J = "useTransition", xe(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", xe(), $g(e, t, a);
        },
        useId: function() {
          return J = "useId", xe(), eS();
        },
        unstable_isNewReconciler: me
      }, sC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", xe(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", xe(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", xe(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", xe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", xe(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", xe(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", xe();
          var a = Le.current;
          Le.current = ol;
          try {
            return xm(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", xe();
          var i = Le.current;
          Le.current = ol;
          try {
            return Vg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", xe(), ym();
        },
        useState: function(e) {
          J = "useState", xe();
          var t = Le.current;
          Le.current = ol;
          try {
            return Yg(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", xe(), Tm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", xe(), qE(e);
        },
        useTransition: function() {
          return J = "useTransition", xe(), eC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", xe(), hm(e, t);
        },
        useId: function() {
          return J = "useId", xe(), _m();
        },
        unstable_isNewReconciler: me
      }, cC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", xe(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", xe(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", xe(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", xe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", xe(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", xe(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", xe();
          var a = Le.current;
          Le.current = km;
          try {
            return xm(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", xe();
          var i = Le.current;
          Le.current = km;
          try {
            return Bg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", xe(), ym();
        },
        useState: function(e) {
          J = "useState", xe();
          var t = Le.current;
          Le.current = km;
          try {
            return Ig(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", xe(), Tm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", xe(), ZE(e);
        },
        useTransition: function() {
          return J = "useTransition", xe(), tC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", xe(), hm(e, t);
        },
        useId: function() {
          return J = "useId", xe(), _m();
        },
        unstable_isNewReconciler: me
      }, Kl = {
        readContext: function(e) {
          return tS(), ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", pt(), Kt(), Kg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", pt(), Kt(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", pt(), Kt(), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", pt(), Kt(), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", pt(), Kt(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", pt(), Kt(), Gg(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", pt(), Kt();
          var a = Le.current;
          Le.current = Kl;
          try {
            return qg(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", pt(), Kt();
          var i = Le.current;
          Le.current = Kl;
          try {
            return Pg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", pt(), Kt(), Wg(e);
        },
        useState: function(e) {
          J = "useState", pt(), Kt();
          var t = Le.current;
          Le.current = Kl;
          try {
            return mm(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", pt(), Kt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", pt(), Kt(), Zg(e);
        },
        useTransition: function() {
          return J = "useTransition", pt(), Kt(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", pt(), Kt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", pt(), Kt(), $g(e, t, a);
        },
        useId: function() {
          return J = "useId", pt(), Kt(), eS();
        },
        unstable_isNewReconciler: me
      }, ol = {
        readContext: function(e) {
          return tS(), ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", pt(), xe(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", pt(), xe(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", pt(), xe(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", pt(), xe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", pt(), xe(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", pt(), xe(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", pt(), xe();
          var a = Le.current;
          Le.current = ol;
          try {
            return xm(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", pt(), xe();
          var i = Le.current;
          Le.current = ol;
          try {
            return Vg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", pt(), xe(), ym();
        },
        useState: function(e) {
          J = "useState", pt(), xe();
          var t = Le.current;
          Le.current = ol;
          try {
            return Yg(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", pt(), xe(), Tm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", pt(), xe(), qE(e);
        },
        useTransition: function() {
          return J = "useTransition", pt(), xe(), eC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", pt(), xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", pt(), xe(), hm(e, t);
        },
        useId: function() {
          return J = "useId", pt(), xe(), _m();
        },
        unstable_isNewReconciler: me
      }, km = {
        readContext: function(e) {
          return tS(), ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", pt(), xe(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", pt(), xe(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", pt(), xe(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", pt(), xe(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", pt(), xe(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", pt(), xe(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", pt(), xe();
          var a = Le.current;
          Le.current = ol;
          try {
            return xm(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", pt(), xe();
          var i = Le.current;
          Le.current = ol;
          try {
            return Bg(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", pt(), xe(), ym();
        },
        useState: function(e) {
          J = "useState", pt(), xe();
          var t = Le.current;
          Le.current = ol;
          try {
            return Ig(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", pt(), xe(), Tm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", pt(), xe(), ZE(e);
        },
        useTransition: function() {
          return J = "useTransition", pt(), xe(), tC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", pt(), xe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", pt(), xe(), hm(e, t);
        },
        useId: function() {
          return J = "useId", pt(), xe(), _m();
        },
        unstable_isNewReconciler: me
      };
    }
    var Vo = R.unstable_now, fC = 0, Dm = -1, zp = -1, Om = -1, nS = !1, Mm = !1;
    function dC() {
      return nS;
    }
    function S1() {
      Mm = !0;
    }
    function E1() {
      nS = !1, Mm = !1;
    }
    function C1() {
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
            case K:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case ce:
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
            case K:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case ce:
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
    function sl(e, t) {
      if (e && e.defaultProps) {
        var a = Ct({}, t), i = e.defaultProps;
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
          var a = Ut(e) || "Component";
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
        if (e.mode & ln) {
          xn(!0);
          try {
            s = a(i, u);
          } finally {
            xn(!1);
          }
        }
        mC(t, s);
      }
      var f = s == null ? u : Ct({}, u, s);
      if (e.memoizedState = f, e.lanes === ae) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var yS = {
      isMounted: Pv,
      enqueueSetState: function(e, t, a) {
        var i = mo(e), u = Ca(), s = Io(i), f = $u(u, s);
        f.payload = t, a != null && (Lm(a, "setState"), f.callback = a);
        var p = jo(i, f, s);
        p !== null && (Er(p, i, s, u), om(p, i, s)), gs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = mo(e), u = Ca(), s = Io(i), f = $u(u, s);
        f.tag = zE, f.payload = t, a != null && (Lm(a, "replaceState"), f.callback = a);
        var p = jo(i, f, s);
        p !== null && (Er(p, i, s, u), om(p, i, s)), gs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = mo(e), i = Ca(), u = Io(a), s = $u(i, u);
        s.tag = im, t != null && (Lm(t, "forceUpdate"), s.callback = t);
        var f = jo(a, s, u);
        f !== null && (Er(f, a, u, i), om(f, a, u)), jc(a, u);
      }
    };
    function gC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & ln) {
            xn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              xn(!1);
            }
          }
          v === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ut(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ve(a, i) || !Ve(u, s) : !0;
    }
    function R1(e, t, a) {
      var i = e.stateNode;
      {
        var u = Ut(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ln) === qe && (Ap.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ln) === qe && (Ap.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !vS.has(t) && (vS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ut(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !cS.has(t) && (cS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ut(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Tt(p)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function SC(e, t) {
      t.updater = yS, e.stateNode = t, yu(t, e), t._reactInternalInstance = uS;
    }
    function EC(e, t, a) {
      var i = !1, u = ci, s = ci, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === x && f._context === void 0
        );
        if (!p && !hS.has(t)) {
          hS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === mi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ut(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ar(f);
      else {
        u = bf(e, t, !0);
        var g = t.contextTypes;
        i = g != null, s = i ? kf(e, u) : ci;
      }
      var C = new t(a, s);
      if (e.mode & ln) {
        xn(!0);
        try {
          C = new t(a, s);
        } finally {
          xn(!1);
        }
      }
      var D = e.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null;
      SC(e, C);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var b = Ut(t) || "Component";
          sS.has(b) || (sS.add(b), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, C.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof C.getSnapshotBeforeUpdate == "function") {
          var P = null, Y = null, G = null;
          if (typeof C.componentWillMount == "function" && C.componentWillMount.__suppressDeprecationWarning !== !0 ? P = "componentWillMount" : typeof C.UNSAFE_componentWillMount == "function" && (P = "UNSAFE_componentWillMount"), typeof C.componentWillReceiveProps == "function" && C.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof C.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof C.componentWillUpdate == "function" && C.componentWillUpdate.__suppressDeprecationWarning !== !0 ? G = "componentWillUpdate" : typeof C.UNSAFE_componentWillUpdate == "function" && (G = "UNSAFE_componentWillUpdate"), P !== null || Y !== null || G !== null) {
            var Oe = Ut(t) || "Component", et = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fS.has(Oe) || (fS.add(Oe), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Oe, et, P !== null ? `
  ` + P : "", Y !== null ? `
  ` + Y : "", G !== null ? `
  ` + G : ""));
          }
        }
      }
      return i && sE(e, u, s), C;
    }
    function T1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ft(e) || "Component"), yS.enqueueReplaceState(t, t.state, null));
    }
    function CC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = ft(e) || "Component";
          oS.has(s) || (oS.add(s), y("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        yS.enqueueReplaceState(t, t.state, null);
      }
    }
    function gS(e, t, a, i) {
      R1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, bg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = ar(s);
      else {
        var f = bf(e, t, !0);
        u.context = kf(e, f);
      }
      {
        if (u.state === a) {
          var p = Ut(t) || "Component";
          pS.has(p) || (pS.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & ln && ll.recordLegacyContextWarning(e, u), ll.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (mS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (T1(e, u), sm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var g = Nt;
        g |= Xi, (e.mode & $t) !== qe && (g |= Ol), e.flags |= g;
      }
    }
    function w1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ci;
      if (typeof p == "object" && p !== null)
        v = ar(p);
      else {
        var g = bf(e, t, !0);
        v = kf(e, g);
      }
      var C = t.getDerivedStateFromProps, D = typeof C == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !D && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && CC(e, u, a, v), UE();
      var b = e.memoizedState, P = u.state = b;
      if (sm(e, a, u, i), P = e.memoizedState, s === a && b === P && !Yh() && !cm()) {
        if (typeof u.componentDidMount == "function") {
          var Y = Nt;
          Y |= Xi, (e.mode & $t) !== qe && (Y |= Ol), e.flags |= Y;
        }
        return !1;
      }
      typeof C == "function" && (mS(e, t, C, a), P = e.memoizedState);
      var G = cm() || gC(e, t, s, a, b, P, v);
      if (G) {
        if (!D && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Oe = Nt;
          Oe |= Xi, (e.mode & $t) !== qe && (Oe |= Ol), e.flags |= Oe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var et = Nt;
          et |= Xi, (e.mode & $t) !== qe && (et |= Ol), e.flags |= et;
        }
        e.memoizedProps = a, e.memoizedState = P;
      }
      return u.props = a, u.state = P, u.context = v, G;
    }
    function x1(e, t, a, i, u) {
      var s = t.stateNode;
      AE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : sl(t.type, f);
      s.props = p;
      var v = t.pendingProps, g = s.context, C = a.contextType, D = ci;
      if (typeof C == "object" && C !== null)
        D = ar(C);
      else {
        var b = bf(t, a, !0);
        D = kf(t, b);
      }
      var P = a.getDerivedStateFromProps, Y = typeof P == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Y && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || g !== D) && CC(t, s, i, D), UE();
      var G = t.memoizedState, Oe = s.state = G;
      if (sm(t, i, s, u), Oe = t.memoizedState, f === v && G === Oe && !Yh() && !cm() && !$e)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Xn), !1;
      typeof P == "function" && (mS(t, a, P, i), Oe = t.memoizedState);
      var et = cm() || gC(t, a, p, i, G, Oe, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      $e;
      return et ? (!Y && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Oe, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Oe, D)), typeof s.componentDidUpdate == "function" && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Xn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Xn), t.memoizedProps = i, t.memoizedState = Oe), s.props = i, s.state = Oe, s.context = D, et;
    }
    function rc(e, t) {
      return {
        value: e,
        source: t,
        stack: $i(t),
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
    function _1(e, t) {
      return !0;
    }
    function ES(e, t) {
      try {
        var a = _1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === M)
            return;
          console.error(i);
        }
        var p = u ? ft(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", g;
        if (e.tag === K)
          g = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var C = ft(e) || "Anonymous";
          g = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + C + ".");
        }
        var D = v + `
` + f + `

` + ("" + g);
        console.error(D);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var b1 = typeof WeakMap == "function" ? WeakMap : Map;
    function RC(e, t, a) {
      var i = $u(sn, a);
      i.tag = xg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Sb(u), ES(e, t);
      }, i;
    }
    function CS(e, t, a) {
      var i = $u(sn, a);
      i.tag = xg;
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
        LR(e), ES(e, t), typeof u != "function" && yb(this);
        var v = t.value, g = t.stack;
        this.componentDidCatch(v, {
          componentStack: g !== null ? g : ""
        }), typeof u != "function" && (ta(e.lanes, lt) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ft(e) || "Unknown"));
      }), i;
    }
    function TC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new b1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Eb.bind(null, e, t, a);
        Jr && Zp(e, a), t.then(s, s);
      }
    }
    function k1(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function D1(e, t) {
      var a = e.tag;
      if ((e.mode & xt) === qe && (a === W || a === Ce || a === je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function wC(e) {
      var t = e;
      do {
        if (t.tag === ve && s1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function xC(e, t, a, i, u) {
      if ((e.mode & xt) === qe) {
        if (e === t)
          e.flags |= er;
        else {
          if (e.flags |= Xe, a.flags |= Dc, a.flags &= -52805, a.tag === M) {
            var s = a.alternate;
            if (s === null)
              a.tag = ht;
            else {
              var f = $u(sn, lt);
              f.tag = im, jo(a, f, lt);
            }
          }
          a.lanes = St(a.lanes, lt);
        }
        return e;
      }
      return e.flags |= er, e.lanes = u, e;
    }
    function O1(e, t, a, i, u) {
      if (a.flags |= ds, Jr && Zp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        D1(a), Hr() && a.mode & xt && mE();
        var f = wC(t);
        if (f !== null) {
          f.flags &= ~wr, xC(f, t, a, e, u), f.mode & xt && TC(e, s, u), k1(f, e, s);
          return;
        } else {
          if (!Gv(u)) {
            TC(e, s, u), e0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Hr() && a.mode & xt) {
        mE();
        var v = wC(t);
        if (v !== null) {
          (v.flags & er) === Ke && (v.flags |= wr), xC(v, t, a, e, u), pg(rc(i, a));
          return;
        }
      }
      i = rc(i, a), sb(i);
      var g = t;
      do {
        switch (g.tag) {
          case K: {
            var C = i;
            g.flags |= er;
            var D = bs(u);
            g.lanes = St(g.lanes, D);
            var b = RC(g, C, D);
            kg(g, b);
            return;
          }
          case M:
            var P = i, Y = g.type, G = g.stateNode;
            if ((g.flags & Xe) === Ke && (typeof Y.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && !wR(G))) {
              g.flags |= er;
              var Oe = bs(u);
              g.lanes = St(g.lanes, Oe);
              var et = CS(g, P, Oe);
              kg(g, et);
              return;
            }
            break;
        }
        g = g.return;
      } while (g !== null);
    }
    function M1() {
      return null;
    }
    var Up = E.ReactCurrentOwner, cl = !1, RS, jp, TS, wS, xS, ac, _S, zm, Fp;
    RS = {}, jp = {}, TS = {}, wS = {}, xS = {}, ac = !1, _S = {}, zm = {}, Fp = {};
    function Sa(e, t, a, i) {
      e === null ? t.child = kE(t, null, a, i) : t.child = Nf(t, e.child, a, i);
    }
    function N1(e, t, a, i) {
      t.child = Nf(t, e.child, null, i), t.child = Nf(t, null, a, i);
    }
    function _C(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          Ut(a)
        );
      }
      var f = a.render, p = t.ref, v, g;
      zf(t, u), ha(t);
      {
        if (Up.current = t, Gn(!0), v = Pf(e, t, f, i, p, u), g = Vf(), t.mode & ln) {
          xn(!0);
          try {
            v = Pf(e, t, f, i, p, u), g = Vf();
          } finally {
            xn(!1);
          }
        }
        Gn(!1);
      }
      return ma(), e !== null && !cl ? (BE(e, t, u), Yu(e, t, u)) : (Hr() && g && ug(t), t.flags |= ii, Sa(e, t, v, u), t.child);
    }
    function bC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (jb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Xf(s), t.tag = je, t.type = f, DS(t, s), kC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && al(
            p,
            i,
            // Resolved props
            "prop",
            Ut(s)
          ), a.defaultProps !== void 0) {
            var v = Ut(s) || "Unknown";
            Fp[v] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Fp[v] = !0);
          }
        }
        var g = f0(a.type, null, i, t, t.mode, u);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var C = a.type, D = C.propTypes;
        D && al(
          D,
          i,
          // Resolved props
          "prop",
          Ut(C)
        );
      }
      var b = e.child, P = AS(e, u);
      if (!P) {
        var Y = b.memoizedProps, G = a.compare;
        if (G = G !== null ? G : Ve, G(Y, i) && e.ref === t.ref)
          return Yu(e, t, u);
      }
      t.flags |= ii;
      var Oe = sc(b, i);
      return Oe.ref = t.ref, Oe.return = t, t.child = Oe, Oe;
    }
    function kC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === dt) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var g = s && s.propTypes;
          g && al(
            g,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ut(s)
          );
        }
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (Ve(C, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (cl = !1, t.pendingProps = i = C, AS(e, u))
            (e.flags & Dc) !== Ke && (cl = !0);
          else return t.lanes = e.lanes, Yu(e, t, u);
      }
      return bS(e, t, a, i, u);
    }
    function DC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || we)
        if ((t.mode & xt) === qe) {
          var f = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Qm(t, a);
        } else if (ta(a, ea)) {
          var D = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = D;
          var b = s !== null ? s.baseLanes : a;
          Qm(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var g = s.baseLanes;
            v = St(g, a);
          } else
            v = a;
          t.lanes = t.childLanes = ea;
          var C = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = C, t.updateQueue = null, Qm(t, v), null;
        }
      else {
        var P;
        s !== null ? (P = St(s.baseLanes, a), t.memoizedState = null) : P = a, Qm(t, P);
      }
      return Sa(e, t, u, a), t.child;
    }
    function L1(e, t, a) {
      var i = t.pendingProps;
      return Sa(e, t, i, a), t.child;
    }
    function z1(e, t, a) {
      var i = t.pendingProps.children;
      return Sa(e, t, i, a), t.child;
    }
    function A1(e, t, a) {
      {
        t.flags |= Nt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Sa(e, t, s, a), t.child;
    }
    function OC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= kn, t.flags |= go);
    }
    function bS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          Ut(a)
        );
      }
      var f;
      {
        var p = bf(t, a, !0);
        f = kf(t, p);
      }
      var v, g;
      zf(t, u), ha(t);
      {
        if (Up.current = t, Gn(!0), v = Pf(e, t, a, i, f, u), g = Vf(), t.mode & ln) {
          xn(!0);
          try {
            v = Pf(e, t, a, i, f, u), g = Vf();
          } finally {
            xn(!1);
          }
        }
        Gn(!1);
      }
      return ma(), e !== null && !cl ? (BE(e, t, u), Yu(e, t, u)) : (Hr() && g && ug(t), t.flags |= ii, Sa(e, t, v, u), t.child);
    }
    function MC(e, t, a, i, u) {
      {
        switch (Zb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Xe, t.flags |= er;
            var g = new Error("Simulated error coming from DevTools"), C = bs(u);
            t.lanes = St(t.lanes, C);
            var D = CS(t, rc(g, t), C);
            kg(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && al(
            b,
            i,
            // Resolved props
            "prop",
            Ut(a)
          );
        }
      }
      var P;
      Ql(a) ? (P = !0, Wh(t)) : P = !1, zf(t, u);
      var Y = t.stateNode, G;
      Y === null ? (Um(e, t), EC(t, a, i), gS(t, a, i, u), G = !0) : e === null ? G = w1(t, a, i, u) : G = x1(e, t, a, i, u);
      var Oe = kS(e, t, a, G, P, u);
      {
        var et = t.stateNode;
        G && et.props !== i && (ac || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ft(t) || "a component"), ac = !0);
      }
      return Oe;
    }
    function kS(e, t, a, i, u, s) {
      OC(e, t);
      var f = (t.flags & Xe) !== Ke;
      if (!i && !f)
        return u && dE(t, a, !1), Yu(e, t, s);
      var p = t.stateNode;
      Up.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, hC();
      else {
        ha(t);
        {
          if (Gn(!0), v = p.render(), t.mode & ln) {
            xn(!0);
            try {
              p.render();
            } finally {
              xn(!1);
            }
          }
          Gn(!1);
        }
        ma();
      }
      return t.flags |= ii, e !== null && f ? N1(e, t, v, s) : Sa(e, t, v, s), t.memoizedState = p.state, u && dE(t, a, !0), t.child;
    }
    function NC(e) {
      var t = e.stateNode;
      t.pendingContext ? cE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cE(e, t.context, !1), Dg(e, t.containerInfo);
    }
    function U1(e, t, a) {
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
        if (g.baseState = v, t.memoizedState = v, t.flags & wr) {
          var C = rc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return LC(e, t, p, a, C);
        } else if (p !== s) {
          var D = rc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return LC(e, t, p, a, D);
        } else {
          Hx(t);
          var b = kE(t, null, p, a);
          t.child = b;
          for (var P = b; P; )
            P.flags = P.flags & ~wn | Kr, P = P.sibling;
        }
      } else {
        if (Mf(), p === s)
          return Yu(e, t, a);
        Sa(e, t, p, a);
      }
      return t.child;
    }
    function LC(e, t, a, i, u) {
      return Mf(), pg(u), t.flags |= wr, Sa(e, t, a, i), t.child;
    }
    function j1(e, t, a) {
      HE(t), e === null && dg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Qy(i, u);
      return p ? f = null : s !== null && Qy(i, s) && (t.flags |= La), OC(e, t), Sa(e, t, f, a), t.child;
    }
    function F1(e, t) {
      return e === null && dg(t), null;
    }
    function H1(e, t, a, i) {
      Um(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var g = t.tag = Fb(v), C = sl(v, u), D;
      switch (g) {
        case W:
          return DS(t, v), t.type = v = Xf(v), D = bS(null, t, v, C, i), D;
        case M:
          return t.type = v = i0(v), D = MC(null, t, v, C, i), D;
        case Ce:
          return t.type = v = l0(v), D = _C(null, t, v, C, i), D;
        case We: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && al(
              b,
              C,
              // Resolved for outer only
              "prop",
              Ut(v)
            );
          }
          return D = bC(
            null,
            t,
            v,
            sl(v.type, C),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var P = "";
      throw v !== null && typeof v == "object" && v.$$typeof === dt && (P = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + P));
    }
    function P1(e, t, a, i, u) {
      Um(e, t), t.tag = M;
      var s;
      return Ql(a) ? (s = !0, Wh(t)) : s = !1, zf(t, u), EC(t, a, i), gS(t, a, i, u), kS(null, t, a, !0, s, u);
    }
    function V1(e, t, a, i) {
      Um(e, t);
      var u = t.pendingProps, s;
      {
        var f = bf(t, a, !1);
        s = kf(t, f);
      }
      zf(t, i);
      var p, v;
      ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var g = Ut(a) || "Unknown";
          RS[g] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", g, g), RS[g] = !0);
        }
        t.mode & ln && ll.recordLegacyContextWarning(t, null), Gn(!0), Up.current = t, p = Pf(null, t, a, u, s, i), v = Vf(), Gn(!1);
      }
      if (ma(), t.flags |= ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var C = Ut(a) || "Unknown";
        jp[C] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), jp[C] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = Ut(a) || "Unknown";
          jp[D] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), jp[D] = !0);
        }
        t.tag = M, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Ql(a) ? (b = !0, Wh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, bg(t), SC(t, p), gS(t, a, u, i), kS(null, t, a, !0, b, i);
      } else {
        if (t.tag = W, t.mode & ln) {
          xn(!0);
          try {
            p = Pf(null, t, a, u, s, i), v = Vf();
          } finally {
            xn(!1);
          }
        }
        return Hr() && v && ug(t), Sa(null, t, p, i), DS(t, a), t.child;
      }
    }
    function DS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Nr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), xS[u] || (xS[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Ut(t) || "Unknown";
          Fp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Fp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Ut(t) || "Unknown";
          wS[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), wS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Ut(t) || "Unknown";
          TS[v] || (y("%s: Function components do not support contextType.", v), TS[v] = !0);
        }
      }
    }
    var OS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ht
    };
    function MS(e) {
      return {
        baseLanes: e,
        cachePool: M1(),
        transitions: null
      };
    }
    function B1(e, t) {
      var a = null;
      return {
        baseLanes: St(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function $1(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Ng(e, bp);
    }
    function Y1(e, t) {
      return ks(e.childLanes, t);
    }
    function zC(e, t, a) {
      var i = t.pendingProps;
      Jb(t) && (t.flags |= Xe);
      var u = ul.current, s = !1, f = (t.flags & Xe) !== Ke;
      if (f || $1(u, e) ? (s = !0, t.flags &= ~Xe) : (e === null || e.memoizedState !== null) && (u = o1(u, VE)), u = Uf(u), Ho(t, u), e === null) {
        dg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return X1(t, v);
        }
        var g = i.children, C = i.fallback;
        if (s) {
          var D = I1(t, g, C, a), b = t.child;
          return b.memoizedState = MS(a), t.memoizedState = OS, D;
        } else
          return NS(t, g);
      } else {
        var P = e.memoizedState;
        if (P !== null) {
          var Y = P.dehydrated;
          if (Y !== null)
            return K1(e, t, f, i, Y, P, a);
        }
        if (s) {
          var G = i.fallback, Oe = i.children, et = Q1(e, t, Oe, G, a), Ge = t.child, At = e.child.memoizedState;
          return Ge.memoizedState = At === null ? MS(a) : B1(At, a), Ge.childLanes = Y1(e, a), t.memoizedState = OS, et;
        } else {
          var kt = i.children, L = W1(e, t, kt, a);
          return t.memoizedState = null, L;
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
    function I1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & xt) === qe && s !== null ? (p = s, p.childLanes = ae, p.pendingProps = f, e.mode & Bt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Qo(a, u, i, null)) : (p = LS(f, u), v = Qo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function LS(e, t, a) {
      return AR(e, t, ae, null);
    }
    function AC(e, t) {
      return sc(e, t);
    }
    function W1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = AC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & xt) === qe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Na) : p.push(s);
      }
      return t.child = f, f;
    }
    function Q1(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, g;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & xt) === qe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var C = t.child;
        g = C, g.childLanes = ae, g.pendingProps = v, t.mode & Bt && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = f.selfBaseDuration, g.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        g = AC(f, v), g.subtreeFlags = f.subtreeFlags & Vn;
      var D;
      return p !== null ? D = sc(p, i) : (D = Qo(i, s, u, null), D.flags |= wn), D.return = t, g.return = t, g.sibling = D, t.child = g, D;
    }
    function Am(e, t, a, i) {
      i !== null && pg(i), Nf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = NS(t, s);
      return f.flags |= wn, t.memoizedState = null, f;
    }
    function G1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = LS(f, s), v = Qo(i, s, u, null);
      return v.flags |= wn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & xt) !== qe && Nf(t, e.child, null, u), v;
    }
    function X1(e, t, a) {
      return (e.mode & xt) === qe ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = lt) : qy(t) ? e.lanes = xr : e.lanes = ea, null;
    }
    function K1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & wr) {
          t.flags &= ~wr;
          var L = SS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Am(e, t, f, L);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Xe, null;
          var X = i.children, z = i.fallback, pe = G1(e, t, X, z, f), ze = t.child;
          return ze.memoizedState = MS(f), t.memoizedState = OS, pe;
        }
      else {
        if (jx(), (t.mode & xt) === qe)
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
            var C = ex(u);
            p = C.digest, v = C.message, g = C.stack;
          }
          var D;
          v ? D = new Error(v) : D = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = SS(D, p, g);
          return Am(e, t, f, b);
        }
        var P = ta(f, e.childLanes);
        if (cl || P) {
          var Y = Wm();
          if (Y !== null) {
            var G = Vd(Y, f);
            if (G !== Ht && G !== s.retryLane) {
              s.retryLane = G;
              var Oe = sn;
              Ba(e, G), Er(Y, e, G, Oe);
            }
          }
          e0();
          var et = SS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Am(e, t, f, et);
        } else if (aE(u)) {
          t.flags |= Xe, t.child = e.child;
          var Ge = Cb.bind(null, e);
          return tx(u, Ge), null;
        } else {
          Px(t, u, s.treeContext);
          var At = i.children, kt = NS(t, At);
          return kt.flags |= Kr, kt;
        }
      }
    }
    function UC(e, t, a) {
      e.lanes = St(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = St(i.lanes, t)), Tg(e.return, t, a);
    }
    function q1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === ve) {
          var u = i.memoizedState;
          u !== null && UC(i, a, e);
        } else if (i.tag === Et)
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
    function Z1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && pm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function J1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !_S[e])
        if (_S[e] = !0, typeof e == "string")
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
    function e_(e, t) {
      e !== void 0 && !zm[e] && (e !== "collapsed" && e !== "hidden" ? (zm[e] = !0, y('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (zm[e] = !0, y('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function jC(e, t) {
      {
        var a = Tt(e), i = !a && typeof gt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function t_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Tt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!jC(e[a], a))
              return;
        } else {
          var i = gt(e);
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
      J1(u), e_(s, u), t_(f, u), Sa(e, t, f, a);
      var p = ul.current, v = Ng(p, bp);
      if (v)
        p = Lg(p, bp), t.flags |= Xe;
      else {
        var g = e !== null && (e.flags & Xe) !== Ke;
        g && q1(t, t.child, a), p = Uf(p);
      }
      if (Ho(t, p), (t.mode & xt) === qe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var C = Z1(t.child), D;
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
            var b = null, P = t.child;
            for (t.child = null; P !== null; ) {
              var Y = P.alternate;
              if (Y !== null && pm(Y) === null) {
                t.child = P;
                break;
              }
              var G = P.sibling;
              P.sibling = b, b = P, P = G;
            }
            zS(
              t,
              !0,
              // isBackwards
              b,
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
    function n_(e, t, a) {
      Dg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Nf(t, null, i, a) : Sa(e, t, i, a), t.child;
    }
    var HC = !1;
    function r_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || HC || (HC = !0, y("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && al(v, s, "prop", "Context.Provider");
      }
      if (ME(t, u, p), f !== null) {
        var g = f.value;
        if (ue(g, p)) {
          if (f.children === s.children && !Yh())
            return Yu(e, t, a);
        } else
          Jx(t, u, a);
      }
      var C = s.children;
      return Sa(e, t, C, a), t.child;
    }
    var PC = !1;
    function a_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (PC || (PC = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zf(t, a);
      var f = ar(i);
      ha(t);
      var p;
      return Up.current = t, Gn(!0), p = s(f), Gn(!1), ma(), t.flags |= ii, Sa(e, t, p, a), t.child;
    }
    function Hp() {
      cl = !0;
    }
    function Um(e, t) {
      (t.mode & xt) === qe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= wn);
    }
    function Yu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), hC(), qp(t.lanes), ta(a, t.childLanes) ? (qx(e, t), t.child) : null;
    }
    function i_(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Na) : s.push(e), a.flags |= wn, a;
      }
    }
    function AS(e, t) {
      var a = e.lanes;
      return !!ta(a, t);
    }
    function l_(e, t, a) {
      switch (t.tag) {
        case K:
          NC(t), t.stateNode, Mf();
          break;
        case F:
          HE(t);
          break;
        case M: {
          var i = t.type;
          Ql(i) && Wh(t);
          break;
        }
        case Z:
          Dg(t, t.stateNode.containerInfo);
          break;
        case fe: {
          var u = t.memoizedProps.value, s = t.type._context;
          ME(t, s, u);
          break;
        }
        case ce:
          {
            var f = ta(a, t.childLanes);
            f && (t.flags |= Nt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case ve: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ho(t, Uf(ul.current)), t.flags |= Xe, null;
            var g = t.child, C = g.childLanes;
            if (ta(a, C))
              return zC(e, t, a);
            Ho(t, Uf(ul.current));
            var D = Yu(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            Ho(t, Uf(ul.current));
          break;
        }
        case Et: {
          var b = (e.flags & Xe) !== Ke, P = ta(a, t.childLanes);
          if (b) {
            if (P)
              return FC(e, t, a);
            t.flags |= Xe;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Ho(t, ul.current), P)
            break;
          return null;
        }
        case Fe:
        case Ft:
          return t.lanes = ae, DC(e, t, a);
      }
      return Yu(e, t, a);
    }
    function VC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return i_(e, t, f0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Yh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          cl = !0;
        else {
          var s = AS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Xe) === Ke)
            return cl = !1, l_(e, t, a);
          (e.flags & Dc) !== Ke ? cl = !0 : cl = !1;
        }
      } else if (cl = !1, Hr() && Mx(t)) {
        var f = t.index, p = Nx();
        hE(t, p, f);
      }
      switch (t.lanes = ae, t.tag) {
        case se:
          return V1(e, t, t.type, a);
        case ot: {
          var v = t.elementType;
          return H1(e, t, v, a);
        }
        case W: {
          var g = t.type, C = t.pendingProps, D = t.elementType === g ? C : sl(g, C);
          return bS(e, t, g, D, a);
        }
        case M: {
          var b = t.type, P = t.pendingProps, Y = t.elementType === b ? P : sl(b, P);
          return MC(e, t, b, Y, a);
        }
        case K:
          return U1(e, t, a);
        case F:
          return j1(e, t, a);
        case he:
          return F1(e, t);
        case ve:
          return zC(e, t, a);
        case Z:
          return n_(e, t, a);
        case Ce: {
          var G = t.type, Oe = t.pendingProps, et = t.elementType === G ? Oe : sl(G, Oe);
          return _C(e, t, G, et, a);
        }
        case ee:
          return L1(e, t, a);
        case $:
          return z1(e, t, a);
        case ce:
          return A1(e, t, a);
        case fe:
          return r_(e, t, a);
        case re:
          return a_(e, t, a);
        case We: {
          var Ge = t.type, At = t.pendingProps, kt = sl(Ge, At);
          if (t.type !== t.elementType) {
            var L = Ge.propTypes;
            L && al(
              L,
              kt,
              // Resolved for outer only
              "prop",
              Ut(Ge)
            );
          }
          return kt = sl(Ge.type, kt), bC(e, t, Ge, kt, a);
        }
        case je:
          return kC(e, t, t.type, t.pendingProps, a);
        case ht: {
          var X = t.type, z = t.pendingProps, pe = t.elementType === X ? z : sl(X, z);
          return P1(e, t, X, pe, a);
        }
        case Et:
          return FC(e, t, a);
        case mt:
          break;
        case Fe:
          return DC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bf(e) {
      e.flags |= Nt;
    }
    function BC(e) {
      e.flags |= kn, e.flags |= go;
    }
    var $C, US, YC, IC;
    $C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === F || u.tag === he)
          kw(e, u.stateNode);
        else if (u.tag !== Z) {
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
    }, YC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Og(), v = Ow(f, a, s, i, u, p);
        t.updateQueue = v, v && Bf(t);
      }
    }, IC = function(e, t, a, i) {
      a !== i && Bf(t);
    };
    function Pp(e, t) {
      if (!Hr())
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
    function Vr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ae, i = Ke;
      if (t) {
        if ((e.mode & Bt) !== qe) {
          for (var v = e.selfBaseDuration, g = e.child; g !== null; )
            a = St(a, St(g.lanes, g.childLanes)), i |= g.subtreeFlags & Vn, i |= g.flags & Vn, v += g.treeBaseDuration, g = g.sibling;
          e.treeBaseDuration = v;
        } else
          for (var C = e.child; C !== null; )
            a = St(a, St(C.lanes, C.childLanes)), i |= C.subtreeFlags & Vn, i |= C.flags & Vn, C.return = e, C = C.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Bt) !== qe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = St(a, St(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = St(a, St(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function u_(e, t, a) {
      if (Ix() && (t.mode & xt) !== qe && (t.flags & Xe) === Ke)
        return RE(t), Mf(), t.flags |= wr | ds | er, !1;
      var i = qh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($x(t), Vr(t), (t.mode & Bt) !== qe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Mf(), (t.flags & Xe) === Ke && (t.memoizedState = null), t.flags |= Nt, Vr(t), (t.mode & Bt) !== qe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return TE(), !0;
    }
    function WC(e, t, a) {
      var i = t.pendingProps;
      switch (og(t), t.tag) {
        case se:
        case ot:
        case je:
        case W:
        case Ce:
        case ee:
        case $:
        case ce:
        case re:
        case We:
          return Vr(t), null;
        case M: {
          var u = t.type;
          return Ql(u) && Ih(t), Vr(t), null;
        }
        case K: {
          var s = t.stateNode;
          if (Af(t), ag(t), Ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = qh(t);
            if (f)
              Bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & wr) !== Ke) && (t.flags |= Xn, TE());
            }
          }
          return US(e, t), Vr(t), null;
        }
        case F: {
          Mg(t);
          var v = FE(), g = t.type;
          if (e !== null && t.stateNode != null)
            YC(e, t, g, i, v), e.ref !== t.ref && BC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Vr(t), null;
            }
            var C = Og(), D = qh(t);
            if (D)
              Vx(t, v, C) && Bf(t);
            else {
              var b = bw(g, i, v, C, t);
              $C(b, t, !1, !1), t.stateNode = b, Dw(b, g, i, v) && Bf(t);
            }
            t.ref !== null && BC(t);
          }
          return Vr(t), null;
        }
        case he: {
          var P = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            IC(e, t, Y, P);
          } else {
            if (typeof P != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var G = FE(), Oe = Og(), et = qh(t);
            et ? Bx(t) && Bf(t) : t.stateNode = Mw(P, G, Oe, t);
          }
          return Vr(t), null;
        }
        case ve: {
          jf(t);
          var Ge = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var At = u_(e, t, Ge);
            if (!At)
              return t.flags & er ? t : null;
          }
          if ((t.flags & Xe) !== Ke)
            return t.lanes = a, (t.mode & Bt) !== qe && lS(t), t;
          var kt = Ge !== null, L = e !== null && e.memoizedState !== null;
          if (kt !== L && kt) {
            var X = t.child;
            if (X.flags |= Pn, (t.mode & xt) !== qe) {
              var z = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              z || Ng(ul.current, VE) ? ob() : e0();
            }
          }
          var pe = t.updateQueue;
          if (pe !== null && (t.flags |= Nt), Vr(t), (t.mode & Bt) !== qe && kt) {
            var ze = t.child;
            ze !== null && (t.treeBaseDuration -= ze.treeBaseDuration);
          }
          return null;
        }
        case Z:
          return Af(t), US(e, t), e === null && wx(t.stateNode.containerInfo), Vr(t), null;
        case fe:
          var Me = t.type._context;
          return Rg(Me, t), Vr(t), null;
        case ht: {
          var ut = t.type;
          return Ql(ut) && Ih(t), Vr(t), null;
        }
        case Et: {
          jf(t);
          var vt = t.memoizedState;
          if (vt === null)
            return Vr(t), null;
          var on = (t.flags & Xe) !== Ke, It = vt.rendering;
          if (It === null)
            if (on)
              Pp(vt, !1);
            else {
              var Zn = cb() && (e === null || (e.flags & Xe) === Ke);
              if (!Zn)
                for (var Wt = t.child; Wt !== null; ) {
                  var Qn = pm(Wt);
                  if (Qn !== null) {
                    on = !0, t.flags |= Xe, Pp(vt, !1);
                    var oa = Qn.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= Nt), t.subtreeFlags = Ke, Zx(t, a), Ho(t, Lg(ul.current, bp)), t.child;
                  }
                  Wt = Wt.sibling;
                }
              vt.tail !== null && Kn() > pR() && (t.flags |= Xe, on = !0, Pp(vt, !1), t.lanes = Nd);
            }
          else {
            if (!on) {
              var Wr = pm(It);
              if (Wr !== null) {
                t.flags |= Xe, on = !0;
                var di = Wr.updateQueue;
                if (di !== null && (t.updateQueue = di, t.flags |= Nt), Pp(vt, !0), vt.tail === null && vt.tailMode === "hidden" && !It.alternate && !Hr())
                  return Vr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Kn() * 2 - vt.renderingStartTime > pR() && a !== ea && (t.flags |= Xe, on = !0, Pp(vt, !1), t.lanes = Nd);
            }
            if (vt.isBackwards)
              It.sibling = t.child, t.child = It;
            else {
              var Ra = vt.last;
              Ra !== null ? Ra.sibling = It : t.child = It, vt.last = It;
            }
          }
          if (vt.tail !== null) {
            var Ta = vt.tail;
            vt.rendering = Ta, vt.tail = Ta.sibling, vt.renderingStartTime = Kn(), Ta.sibling = null;
            var sa = ul.current;
            return on ? sa = Lg(sa, bp) : sa = Uf(sa), Ho(t, sa), Ta;
          }
          return Vr(t), null;
        }
        case mt:
          break;
        case Fe:
        case Ft: {
          JS(t);
          var Xu = t.memoizedState, Kf = Xu !== null;
          if (e !== null) {
            var nv = e.memoizedState, tu = nv !== null;
            tu !== Kf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !we && (t.flags |= Pn);
          }
          return !Kf || (t.mode & xt) === qe ? Vr(t) : ta(eu, ea) && (Vr(t), t.subtreeFlags & (wn | Nt) && (t.flags |= Pn)), null;
        }
        case Dt:
          return null;
        case Mt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function o_(e, t, a) {
      switch (og(t), t.tag) {
        case M: {
          var i = t.type;
          Ql(i) && Ih(t);
          var u = t.flags;
          return u & er ? (t.flags = u & ~er | Xe, (t.mode & Bt) !== qe && lS(t), t) : null;
        }
        case K: {
          t.stateNode, Af(t), ag(t), Ag();
          var s = t.flags;
          return (s & er) !== Ke && (s & Xe) === Ke ? (t.flags = s & ~er | Xe, t) : null;
        }
        case F:
          return Mg(t), null;
        case ve: {
          jf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Mf();
          }
          var p = t.flags;
          return p & er ? (t.flags = p & ~er | Xe, (t.mode & Bt) !== qe && lS(t), t) : null;
        }
        case Et:
          return jf(t), null;
        case Z:
          return Af(t), null;
        case fe:
          var v = t.type._context;
          return Rg(v, t), null;
        case Fe:
        case Ft:
          return JS(t), null;
        case Dt:
          return null;
        default:
          return null;
      }
    }
    function QC(e, t, a) {
      switch (og(t), t.tag) {
        case M: {
          var i = t.type.childContextTypes;
          i != null && Ih(t);
          break;
        }
        case K: {
          t.stateNode, Af(t), ag(t), Ag();
          break;
        }
        case F: {
          Mg(t);
          break;
        }
        case Z:
          Af(t);
          break;
        case ve:
          jf(t);
          break;
        case Et:
          jf(t);
          break;
        case fe:
          var u = t.type._context;
          Rg(u, t);
          break;
        case Fe:
        case Ft:
          JS(t);
          break;
      }
    }
    var GC = null;
    GC = /* @__PURE__ */ new Set();
    var jm = !1, Br = !1, s_ = typeof WeakSet == "function" ? WeakSet : Set, Be = null, $f = null, Yf = null;
    function c_(e) {
      Dl(null, function() {
        throw e;
      }), fs();
    }
    var f_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Bt)
        try {
          Zl(), t.componentWillUnmount();
        } finally {
          ql(e);
        }
      else
        t.componentWillUnmount();
    };
    function XC(e, t) {
      try {
        Bo(vr, e);
      } catch (a) {
        Sn(e, t, a);
      }
    }
    function jS(e, t, a) {
      try {
        f_(e, a);
      } catch (i) {
        Sn(e, t, i);
      }
    }
    function d_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Sn(e, t, i);
      }
    }
    function KC(e, t) {
      try {
        ZC(e);
      } catch (a) {
        Sn(e, t, a);
      }
    }
    function If(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (H && oe && e.mode & Bt)
              try {
                Zl(), i = a(null);
              } finally {
                ql(e);
              }
            else
              i = a(null);
          } catch (u) {
            Sn(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ft(e));
        } else
          a.current = null;
    }
    function Fm(e, t, a) {
      try {
        a();
      } catch (i) {
        Sn(e, t, i);
      }
    }
    var qC = !1;
    function p_(e, t) {
      xw(e.containerInfo), Be = t, v_();
      var a = qC;
      return qC = !1, a;
    }
    function v_() {
      for (; Be !== null; ) {
        var e = Be, t = e.child;
        (e.subtreeFlags & Ml) !== Ke && t !== null ? (t.return = e, Be = t) : h_();
      }
    }
    function h_() {
      for (; Be !== null; ) {
        var e = Be;
        nn(e);
        try {
          m_(e);
        } catch (a) {
          Sn(e, e.return, a);
        }
        gn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Be = t;
          return;
        }
        Be = e.return;
      }
    }
    function m_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Xn) !== Ke) {
        switch (nn(e), e.tag) {
          case W:
          case Ce:
          case je:
            break;
          case M: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ac && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : sl(e.type, i), u);
              {
                var p = GC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ft(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case K: {
            {
              var v = e.stateNode;
              Kw(v.containerInfo);
            }
            break;
          }
          case F:
          case he:
          case Z:
          case ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        gn();
      }
    }
    function fl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Pr) !== $a ? Zi(t) : (e & vr) !== $a && vs(t), (e & Gl) !== $a && Jp(!0), Fm(t, a, p), (e & Gl) !== $a && Jp(!1), (e & Pr) !== $a ? Al() : (e & vr) !== $a && Od());
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
            (e & Pr) !== $a ? Dd(t) : (e & vr) !== $a && Ac(t);
            var f = s.create;
            (e & Gl) !== $a && Jp(!0), s.destroy = f(), (e & Gl) !== $a && Jp(!1), (e & Pr) !== $a ? $v() : (e & vr) !== $a && Yv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & vr) !== Ke ? v = "useLayoutEffect" : (s.tag & Gl) !== Ke ? v = "useInsertionEffect" : v = "useEffect";
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
    function y_(e, t) {
      if ((t.flags & Nt) !== Ke)
        switch (t.tag) {
          case ce: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = pC(), p = t.alternate === null ? "mount" : "update";
            dC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case K:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
                case ce:
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
    function g_(e, t, a, i) {
      if ((a.flags & Ll) !== Ke)
        switch (a.tag) {
          case W:
          case Ce:
          case je: {
            if (!Br)
              if (a.mode & Bt)
                try {
                  Zl(), Bo(vr | pr, a);
                } finally {
                  ql(a);
                }
              else
                Bo(vr | pr, a);
            break;
          }
          case M: {
            var u = a.stateNode;
            if (a.flags & Nt && !Br)
              if (t === null)
                if (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), a.mode & Bt)
                  try {
                    Zl(), u.componentDidMount();
                  } finally {
                    ql(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : sl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), a.mode & Bt)
                  try {
                    Zl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ql(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ft(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ft(a) || "instance")), jE(a, p, u));
            break;
          }
          case K: {
            var v = a.updateQueue;
            if (v !== null) {
              var g = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case F:
                    g = a.child.stateNode;
                    break;
                  case M:
                    g = a.child.stateNode;
                    break;
                }
              jE(a, v, g);
            }
            break;
          }
          case F: {
            var C = a.stateNode;
            if (t === null && a.flags & Nt) {
              var D = a.type, b = a.memoizedProps;
              Uw(C, D, b);
            }
            break;
          }
          case he:
            break;
          case Z:
            break;
          case ce: {
            {
              var P = a.memoizedProps, Y = P.onCommit, G = P.onRender, Oe = a.stateNode.effectDuration, et = pC(), Ge = t === null ? "mount" : "update";
              dC() && (Ge = "nested-update"), typeof G == "function" && G(a.memoizedProps.id, Ge, a.actualDuration, a.treeBaseDuration, a.actualStartTime, et);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Ge, Oe, et), hb(a);
                var At = a.return;
                e: for (; At !== null; ) {
                  switch (At.tag) {
                    case K:
                      var kt = At.stateNode;
                      kt.effectDuration += Oe;
                      break e;
                    case ce:
                      var L = At.stateNode;
                      L.effectDuration += Oe;
                      break e;
                  }
                  At = At.return;
                }
              }
            }
            break;
          }
          case ve: {
            __(e, a);
            break;
          }
          case Et:
          case ht:
          case mt:
          case Fe:
          case Ft:
          case Mt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Br || a.flags & kn && ZC(a);
    }
    function S_(e) {
      switch (e.tag) {
        case W:
        case Ce:
        case je: {
          if (e.mode & Bt)
            try {
              Zl(), XC(e, e.return);
            } finally {
              ql(e);
            }
          else
            XC(e, e.return);
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && d_(e, e.return, t), KC(e, e.return);
          break;
        }
        case F: {
          KC(e, e.return);
          break;
        }
      }
    }
    function E_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === F) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Ww(u) : Gw(i.stateNode, i.memoizedProps);
            } catch (f) {
              Sn(e, e.return, f);
            }
          }
        } else if (i.tag === he) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Qw(s) : Xw(s, i.memoizedProps);
            } catch (f) {
              Sn(e, e.return, f);
            }
        } else if (!((i.tag === Fe || i.tag === Ft) && i.memoizedState !== null && i !== e)) {
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
          case F:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Bt)
            try {
              Zl(), u = t(i);
            } finally {
              ql(e);
            }
          else
            u = t(i);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ft(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ft(e)), t.current = i;
      }
    }
    function C_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function JC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, JC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === F) {
          var a = e.stateNode;
          a !== null && bx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function R_(e) {
      for (var t = e.return; t !== null; ) {
        if (eR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function eR(e) {
      return e.tag === F || e.tag === K || e.tag === Z;
    }
    function tR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || eR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== F && t.tag !== he && t.tag !== nt; ) {
          if (t.flags & wn || t.child === null || t.tag === Z)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & wn))
          return t.stateNode;
      }
    }
    function T_(e) {
      var t = R_(e);
      switch (t.tag) {
        case F: {
          var a = t.stateNode;
          t.flags & La && (rE(a), t.flags &= ~La);
          var i = tR(e);
          HS(e, i, a);
          break;
        }
        case K:
        case Z: {
          var u = t.stateNode.containerInfo, s = tR(e);
          FS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function FS(e, t, a) {
      var i = e.tag, u = i === F || i === he;
      if (u) {
        var s = e.stateNode;
        t ? Bw(a, s, t) : Pw(a, s);
      } else if (i !== Z) {
        var f = e.child;
        if (f !== null) {
          FS(f, t, a);
          for (var p = f.sibling; p !== null; )
            FS(p, t, a), p = p.sibling;
        }
      }
    }
    function HS(e, t, a) {
      var i = e.tag, u = i === F || i === he;
      if (u) {
        var s = e.stateNode;
        t ? Vw(a, s, t) : Hw(a, s);
      } else if (i !== Z) {
        var f = e.child;
        if (f !== null) {
          HS(f, t, a);
          for (var p = f.sibling; p !== null; )
            HS(p, t, a), p = p.sibling;
        }
      }
    }
    var $r = null, dl = !1;
    function w_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case F: {
              $r = i.stateNode, dl = !1;
              break e;
            }
            case K: {
              $r = i.stateNode.containerInfo, dl = !0;
              break e;
            }
            case Z: {
              $r = i.stateNode.containerInfo, dl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if ($r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        nR(e, t, a), $r = null, dl = !1;
      }
      C_(a);
    }
    function $o(e, t, a) {
      for (var i = a.child; i !== null; )
        nR(e, t, i), i = i.sibling;
    }
    function nR(e, t, a) {
      switch (_d(a), a.tag) {
        case F:
          Br || If(a, t);
        case he: {
          {
            var i = $r, u = dl;
            $r = null, $o(e, t, a), $r = i, dl = u, $r !== null && (dl ? Yw($r, a.stateNode) : $w($r, a.stateNode));
          }
          return;
        }
        case nt: {
          $r !== null && (dl ? Iw($r, a.stateNode) : Ky($r, a.stateNode));
          return;
        }
        case Z: {
          {
            var s = $r, f = dl;
            $r = a.stateNode.containerInfo, dl = !0, $o(e, t, a), $r = s, dl = f;
          }
          return;
        }
        case W:
        case Ce:
        case We:
        case je: {
          if (!Br) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var g = v.next, C = g;
                do {
                  var D = C, b = D.destroy, P = D.tag;
                  b !== void 0 && ((P & Gl) !== $a ? Fm(a, t, b) : (P & vr) !== $a && (vs(a), a.mode & Bt ? (Zl(), Fm(a, t, b), ql(a)) : Fm(a, t, b), Od())), C = C.next;
                } while (C !== g);
              }
            }
          }
          $o(e, t, a);
          return;
        }
        case M: {
          if (!Br) {
            If(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && jS(a, t, Y);
          }
          $o(e, t, a);
          return;
        }
        case mt: {
          $o(e, t, a);
          return;
        }
        case Fe: {
          if (
            // TODO: Remove this dead flag
            a.mode & xt
          ) {
            var G = Br;
            Br = G || a.memoizedState !== null, $o(e, t, a), Br = G;
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
    function x_(e) {
      e.memoizedState;
    }
    function __(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && cx(s);
          }
        }
      }
    }
    function rR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new s_()), t.forEach(function(i) {
          var u = Rb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Jr)
              if ($f !== null && Yf !== null)
                Zp(Yf, $f);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function b_(e, t, a) {
      $f = a, Yf = e, nn(t), aR(t, e), nn(t), $f = null, Yf = null;
    }
    function pl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            w_(e, t, s);
          } catch (v) {
            Sn(s, t, v);
          }
        }
      var f = Rl();
      if (t.subtreeFlags & Nl)
        for (var p = t.child; p !== null; )
          nn(p), aR(p, e), p = p.sibling;
      nn(f);
    }
    function aR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case W:
        case Ce:
        case We:
        case je: {
          if (pl(t, e), Jl(e), u & Nt) {
            try {
              fl(Gl | pr, e, e.return), Bo(Gl | pr, e);
            } catch (ut) {
              Sn(e, e.return, ut);
            }
            if (e.mode & Bt) {
              try {
                Zl(), fl(vr | pr, e, e.return);
              } catch (ut) {
                Sn(e, e.return, ut);
              }
              ql(e);
            } else
              try {
                fl(vr | pr, e, e.return);
              } catch (ut) {
                Sn(e, e.return, ut);
              }
          }
          return;
        }
        case M: {
          pl(t, e), Jl(e), u & kn && i !== null && If(i, i.return);
          return;
        }
        case F: {
          pl(t, e), Jl(e), u & kn && i !== null && If(i, i.return);
          {
            if (e.flags & La) {
              var s = e.stateNode;
              try {
                rE(s);
              } catch (ut) {
                Sn(e, e.return, ut);
              }
            }
            if (u & Nt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, g = e.type, C = e.updateQueue;
                if (e.updateQueue = null, C !== null)
                  try {
                    jw(f, C, g, v, p, e);
                  } catch (ut) {
                    Sn(e, e.return, ut);
                  }
              }
            }
          }
          return;
        }
        case he: {
          if (pl(t, e), Jl(e), u & Nt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, b = e.memoizedProps, P = i !== null ? i.memoizedProps : b;
            try {
              Fw(D, P, b);
            } catch (ut) {
              Sn(e, e.return, ut);
            }
          }
          return;
        }
        case K: {
          if (pl(t, e), Jl(e), u & Nt && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                sx(t.containerInfo);
              } catch (ut) {
                Sn(e, e.return, ut);
              }
          }
          return;
        }
        case Z: {
          pl(t, e), Jl(e);
          return;
        }
        case ve: {
          pl(t, e), Jl(e);
          var G = e.child;
          if (G.flags & Pn) {
            var Oe = G.stateNode, et = G.memoizedState, Ge = et !== null;
            if (Oe.isHidden = Ge, Ge) {
              var At = G.alternate !== null && G.alternate.memoizedState !== null;
              At || ub();
            }
          }
          if (u & Nt) {
            try {
              x_(e);
            } catch (ut) {
              Sn(e, e.return, ut);
            }
            rR(e);
          }
          return;
        }
        case Fe: {
          var kt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & xt
          ) {
            var L = Br;
            Br = L || kt, pl(t, e), Br = L;
          } else
            pl(t, e);
          if (Jl(e), u & Pn) {
            var X = e.stateNode, z = e.memoizedState, pe = z !== null, ze = e;
            if (X.isHidden = pe, pe && !kt && (ze.mode & xt) !== qe) {
              Be = ze;
              for (var Me = ze.child; Me !== null; )
                Be = Me, D_(Me), Me = Me.sibling;
            }
            E_(ze, pe);
          }
          return;
        }
        case Et: {
          pl(t, e), Jl(e), u & Nt && rR(e);
          return;
        }
        case mt:
          return;
        default: {
          pl(t, e), Jl(e);
          return;
        }
      }
    }
    function Jl(e) {
      var t = e.flags;
      if (t & wn) {
        try {
          T_(e);
        } catch (a) {
          Sn(e, e.return, a);
        }
        e.flags &= ~wn;
      }
      t & Kr && (e.flags &= ~Kr);
    }
    function k_(e, t, a) {
      $f = a, Yf = t, Be = e, iR(e, t, a), $f = null, Yf = null;
    }
    function iR(e, t, a) {
      for (var i = (e.mode & xt) !== qe; Be !== null; ) {
        var u = Be, s = u.child;
        if (u.tag === Fe && i) {
          var f = u.memoizedState !== null, p = f || jm;
          if (p) {
            PS(e, t, a);
            continue;
          } else {
            var v = u.alternate, g = v !== null && v.memoizedState !== null, C = g || Br, D = jm, b = Br;
            jm = p, Br = C, Br && !b && (Be = u, O_(u));
            for (var P = s; P !== null; )
              Be = P, iR(
                P,
                // New root; bubble back up to here and stop.
                t,
                a
              ), P = P.sibling;
            Be = u, jm = D, Br = b, PS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ll) !== Ke && s !== null ? (s.return = u, Be = s) : PS(e, t, a);
      }
    }
    function PS(e, t, a) {
      for (; Be !== null; ) {
        var i = Be;
        if ((i.flags & Ll) !== Ke) {
          var u = i.alternate;
          nn(i);
          try {
            g_(t, u, i, a);
          } catch (f) {
            Sn(i, i.return, f);
          }
          gn();
        }
        if (i === e) {
          Be = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Be = s;
          return;
        }
        Be = i.return;
      }
    }
    function D_(e) {
      for (; Be !== null; ) {
        var t = Be, a = t.child;
        switch (t.tag) {
          case W:
          case Ce:
          case We:
          case je: {
            if (t.mode & Bt)
              try {
                Zl(), fl(vr, t, t.return);
              } finally {
                ql(t);
              }
            else
              fl(vr, t, t.return);
            break;
          }
          case M: {
            If(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && jS(t, t.return, i);
            break;
          }
          case F: {
            If(t, t.return);
            break;
          }
          case Fe: {
            var u = t.memoizedState !== null;
            if (u) {
              lR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Be = a) : lR(e);
      }
    }
    function lR(e) {
      for (; Be !== null; ) {
        var t = Be;
        if (t === e) {
          Be = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Be = a;
          return;
        }
        Be = t.return;
      }
    }
    function O_(e) {
      for (; Be !== null; ) {
        var t = Be, a = t.child;
        if (t.tag === Fe) {
          var i = t.memoizedState !== null;
          if (i) {
            uR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Be = a) : uR(e);
      }
    }
    function uR(e) {
      for (; Be !== null; ) {
        var t = Be;
        nn(t);
        try {
          S_(t);
        } catch (i) {
          Sn(t, t.return, i);
        }
        if (gn(), t === e) {
          Be = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Be = a;
          return;
        }
        Be = t.return;
      }
    }
    function M_(e, t, a, i) {
      Be = t, N_(t, e, a, i);
    }
    function N_(e, t, a, i) {
      for (; Be !== null; ) {
        var u = Be, s = u.child;
        (u.subtreeFlags & Ki) !== Ke && s !== null ? (s.return = u, Be = s) : L_(e, t, a, i);
      }
    }
    function L_(e, t, a, i) {
      for (; Be !== null; ) {
        var u = Be;
        if ((u.flags & Xr) !== Ke) {
          nn(u);
          try {
            z_(t, u, a, i);
          } catch (f) {
            Sn(u, u.return, f);
          }
          gn();
        }
        if (u === e) {
          Be = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Be = s;
          return;
        }
        Be = u.return;
      }
    }
    function z_(e, t, a, i) {
      switch (t.tag) {
        case W:
        case Ce:
        case je: {
          if (t.mode & Bt) {
            iS();
            try {
              Bo(Pr | pr, t);
            } finally {
              aS(t);
            }
          } else
            Bo(Pr | pr, t);
          break;
        }
      }
    }
    function A_(e) {
      Be = e, U_();
    }
    function U_() {
      for (; Be !== null; ) {
        var e = Be, t = e.child;
        if ((Be.flags & Na) !== Ke) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Be = u, H_(u, e);
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
            Be = e;
          }
        }
        (e.subtreeFlags & Ki) !== Ke && t !== null ? (t.return = e, Be = t) : j_();
      }
    }
    function j_() {
      for (; Be !== null; ) {
        var e = Be;
        (e.flags & Xr) !== Ke && (nn(e), F_(e), gn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Be = t;
          return;
        }
        Be = e.return;
      }
    }
    function F_(e) {
      switch (e.tag) {
        case W:
        case Ce:
        case je: {
          e.mode & Bt ? (iS(), fl(Pr | pr, e, e.return), aS(e)) : fl(Pr | pr, e, e.return);
          break;
        }
      }
    }
    function H_(e, t) {
      for (; Be !== null; ) {
        var a = Be;
        nn(a), V_(a, t), gn();
        var i = a.child;
        i !== null ? (i.return = a, Be = i) : P_(e);
      }
    }
    function P_(e) {
      for (; Be !== null; ) {
        var t = Be, a = t.sibling, i = t.return;
        if (JC(t), t === e) {
          Be = null;
          return;
        }
        if (a !== null) {
          a.return = i, Be = a;
          return;
        }
        Be = i;
      }
    }
    function V_(e, t) {
      switch (e.tag) {
        case W:
        case Ce:
        case je: {
          e.mode & Bt ? (iS(), fl(Pr, e, t), aS(e)) : fl(Pr, e, t);
          break;
        }
      }
    }
    function B_(e) {
      switch (e.tag) {
        case W:
        case Ce:
        case je: {
          try {
            Bo(vr | pr, e);
          } catch (a) {
            Sn(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Sn(e, e.return, a);
          }
          break;
        }
      }
    }
    function $_(e) {
      switch (e.tag) {
        case W:
        case Ce:
        case je: {
          try {
            Bo(Pr | pr, e);
          } catch (t) {
            Sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Y_(e) {
      switch (e.tag) {
        case W:
        case Ce:
        case je: {
          try {
            fl(vr | pr, e, e.return);
          } catch (a) {
            Sn(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && jS(e, e.return, t);
          break;
        }
      }
    }
    function I_(e) {
      switch (e.tag) {
        case W:
        case Ce:
        case je:
          try {
            fl(Pr | pr, e, e.return);
          } catch (t) {
            Sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Vp = Symbol.for;
      Vp("selector.component"), Vp("selector.has_pseudo_class"), Vp("selector.role"), Vp("selector.test_id"), Vp("selector.text");
    }
    var W_ = [];
    function Q_() {
      W_.forEach(function(e) {
        return e();
      });
    }
    var G_ = E.ReactCurrentActQueue;
    function X_(e) {
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
        return !e && G_.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var K_ = Math.ceil, VS = E.ReactCurrentDispatcher, BS = E.ReactCurrentOwner, Yr = E.ReactCurrentBatchConfig, vl = E.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), sR = (
      /*               */
      1
    ), Ir = (
      /*                */
      2
    ), Hi = (
      /*                */
      4
    ), Iu = 0, Bp = 1, ic = 2, Hm = 3, $p = 4, cR = 5, $S = 6, zt = yr, Ea = null, Un = null, gr = ae, eu = ae, YS = Lo(ae), Sr = Iu, Yp = null, Pm = ae, Ip = ae, Vm = ae, Wp = null, Ya = null, IS = 0, fR = 500, dR = 1 / 0, q_ = 500, Wu = null;
    function Qp() {
      dR = Kn() + q_;
    }
    function pR() {
      return dR;
    }
    var Bm = !1, WS = null, Wf = null, lc = !1, Yo = null, Gp = ae, QS = [], GS = null, Z_ = 50, Xp = 0, XS = null, KS = !1, $m = !1, J_ = 50, Qf = 0, Ym = null, Kp = sn, Im = ae, vR = !1;
    function Wm() {
      return Ea;
    }
    function Ca() {
      return (zt & (Ir | Hi)) !== yr ? Kn() : (Kp !== sn || (Kp = Kn()), Kp);
    }
    function Io(e) {
      var t = e.mode;
      if ((t & xt) === qe)
        return lt;
      if ((zt & Ir) !== yr && gr !== ae)
        return bs(gr);
      var a = Gx() !== Qx;
      if (a) {
        if (Yr.transition !== null) {
          var i = Yr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Im === Ht && (Im = Fd()), Im;
      }
      var u = Ha();
      if (u !== Ht)
        return u;
      var s = Nw();
      return s;
    }
    function eb(e) {
      var t = e.mode;
      return (t & xt) === qe ? lt : Kv();
    }
    function Er(e, t, a, i) {
      wb(), vR && y("useInsertionEffect must not schedule updates."), KS && ($m = !0), Ro(e, a, i), (zt & Ir) !== ae && e === Ea ? bb(t) : (Jr && Os(e, t, a), kb(t), e === Ea && ((zt & Ir) === yr && (Ip = St(Ip, a)), Sr === $p && Wo(e, gr)), Ia(e, i), a === lt && zt === yr && (t.mode & xt) === qe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !vl.isBatchingLegacy && (Qp(), vE()));
    }
    function tb(e, t, a) {
      var i = e.current;
      i.lanes = t, Ro(e, t, a), Ia(e, a);
    }
    function nb(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (zt & Ir) !== yr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      tf(e, t);
      var i = ef(e, e === Ea ? gr : ae);
      if (i === ae) {
        a !== null && OR(a), e.callbackNode = null, e.callbackPriority = Ht;
        return;
      }
      var u = Fl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(vl.current !== null && a !== r0)) {
        a == null && s !== lt && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && OR(a);
      var f;
      if (u === lt)
        e.tag === zo ? (vl.isBatchingLegacy !== null && (vl.didScheduleLegacyUpdate = !0), Ox(yR.bind(null, e))) : pE(yR.bind(null, e)), vl.current !== null ? vl.current.push(Ao) : zw(function() {
          (zt & (Ir | Hi)) === yr && Ao();
        }), f = null;
      else {
        var p;
        switch (rh(i)) {
          case zr:
            p = ps;
            break;
          case Di:
            p = zl;
            break;
          case ja:
            p = qi;
            break;
          case Fa:
            p = Su;
            break;
          default:
            p = qi;
            break;
        }
        f = a0(p, hR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function hR(e, t) {
      if (E1(), Kp = sn, Im = ae, (zt & (Ir | Hi)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Gu();
      if (i && e.callbackNode !== a)
        return null;
      var u = ef(e, e === Ea ? gr : ae);
      if (u === ae)
        return null;
      var s = !rf(e, u) && !Xv(e, u) && !t, f = s ? db(e, u) : Gm(e, u);
      if (f !== Iu) {
        if (f === ic) {
          var p = nf(e);
          p !== ae && (u = p, f = qS(e, p));
        }
        if (f === Bp) {
          var v = Yp;
          throw uc(e, ae), Wo(e, u), Ia(e, Kn()), v;
        }
        if (f === $S)
          Wo(e, u);
        else {
          var g = !rf(e, u), C = e.current.alternate;
          if (g && !ab(C)) {
            if (f = Gm(e, u), f === ic) {
              var D = nf(e);
              D !== ae && (u = D, f = qS(e, D));
            }
            if (f === Bp) {
              var b = Yp;
              throw uc(e, ae), Wo(e, u), Ia(e, Kn()), b;
            }
          }
          e.finishedWork = C, e.finishedLanes = u, rb(e, f, u);
        }
      }
      return Ia(e, Kn()), e.callbackNode === a ? hR.bind(null, e) : null;
    }
    function qS(e, t) {
      var a = Wp;
      if (uf(e)) {
        var i = uc(e, t);
        i.flags |= wr, Tx(e.containerInfo);
      }
      var u = Gm(e, t);
      if (u !== ic) {
        var s = Ya;
        Ya = a, s !== null && mR(s);
      }
      return u;
    }
    function mR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function rb(e, t, a) {
      switch (t) {
        case Iu:
        case Bp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ic: {
          oc(e, Ya, Wu);
          break;
        }
        case Hm: {
          if (Wo(e, a), Ou(a) && // do not delay if we're inside an act() scope
          !MR()) {
            var i = IS + fR - Kn();
            if (i > 10) {
              var u = ef(e, ae);
              if (u !== ae)
                break;
              var s = e.suspendedLanes;
              if (!Mu(s, a)) {
                Ca(), af(e, s);
                break;
              }
              e.timeoutHandle = Gy(oc.bind(null, e, Ya, Wu), i);
              break;
            }
          }
          oc(e, Ya, Wu);
          break;
        }
        case $p: {
          if (Wo(e, a), Ud(a))
            break;
          if (!MR()) {
            var f = ui(e, a), p = f, v = Kn() - p, g = Tb(v) - v;
            if (g > 10) {
              e.timeoutHandle = Gy(oc.bind(null, e, Ya, Wu), g);
              break;
            }
          }
          oc(e, Ya, Wu);
          break;
        }
        case cR: {
          oc(e, Ya, Wu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function ab(e) {
      for (var t = e; ; ) {
        if (t.flags & yo) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ue(f(), p))
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
      t = ks(t, Vm), t = ks(t, Ip), Jv(e, t);
    }
    function yR(e) {
      if (C1(), (zt & (Ir | Hi)) !== yr)
        throw new Error("Should not already be working.");
      Gu();
      var t = ef(e, ae);
      if (!ta(t, lt))
        return Ia(e, Kn()), null;
      var a = Gm(e, t);
      if (e.tag !== zo && a === ic) {
        var i = nf(e);
        i !== ae && (t = i, a = qS(e, i));
      }
      if (a === Bp) {
        var u = Yp;
        throw uc(e, ae), Wo(e, t), Ia(e, Kn()), u;
      }
      if (a === $S)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, oc(e, Ya, Wu), Ia(e, Kn()), null;
    }
    function ib(e, t) {
      t !== ae && (lf(e, St(t, lt)), Ia(e, Kn()), (zt & (Ir | Hi)) === yr && (Qp(), Ao()));
    }
    function ZS(e, t) {
      var a = zt;
      zt |= sR;
      try {
        return e(t);
      } finally {
        zt = a, zt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !vl.isBatchingLegacy && (Qp(), vE());
      }
    }
    function lb(e, t, a, i, u) {
      var s = Ha(), f = Yr.transition;
      try {
        return Yr.transition = null, Yn(zr), e(t, a, i, u);
      } finally {
        Yn(s), Yr.transition = f, zt === yr && Qp();
      }
    }
    function Qu(e) {
      Yo !== null && Yo.tag === zo && (zt & (Ir | Hi)) === yr && Gu();
      var t = zt;
      zt |= sR;
      var a = Yr.transition, i = Ha();
      try {
        return Yr.transition = null, Yn(zr), e ? e() : void 0;
      } finally {
        Yn(i), Yr.transition = a, zt = t, (zt & (Ir | Hi)) === yr && Ao();
      }
    }
    function gR() {
      return (zt & (Ir | Hi)) !== yr;
    }
    function Qm(e, t) {
      la(YS, eu, e), eu = St(eu, t);
    }
    function JS(e) {
      eu = YS.current, ia(YS, e);
    }
    function uc(e, t) {
      e.finishedWork = null, e.finishedLanes = ae;
      var a = e.timeoutHandle;
      if (a !== Xy && (e.timeoutHandle = Xy, Lw(a)), Un !== null)
        for (var i = Un.return; i !== null; ) {
          var u = i.alternate;
          QC(u, i), i = i.return;
        }
      Ea = e;
      var s = sc(e.current, null);
      return Un = s, gr = eu = t, Sr = Iu, Yp = null, Pm = ae, Ip = ae, Vm = ae, Wp = null, Ya = null, t1(), ll.discardPendingWarnings(), s;
    }
    function SR(e, t) {
      do {
        var a = Un;
        try {
          if (rm(), $E(), gn(), BS.current = null, a === null || a.return === null) {
            Sr = Bp, Yp = t, Un = null;
            return;
          }
          if (H && a.mode & Bt && Nm(a, !0), rt)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ki(a, i, gr);
            } else
              hs(a, t, gr);
          O1(e, a.return, a, t, gr), TR(a);
        } catch (u) {
          t = u, Un === a && a !== null ? (a = a.return, Un = a) : a = Un;
          continue;
        }
        return;
      } while (!0);
    }
    function ER() {
      var e = VS.current;
      return VS.current = bm, e === null ? bm : e;
    }
    function CR(e) {
      VS.current = e;
    }
    function ub() {
      IS = Kn();
    }
    function qp(e) {
      Pm = St(e, Pm);
    }
    function ob() {
      Sr === Iu && (Sr = Hm);
    }
    function e0() {
      (Sr === Iu || Sr === Hm || Sr === ic) && (Sr = $p), Ea !== null && (_s(Pm) || _s(Ip)) && Wo(Ea, gr);
    }
    function sb(e) {
      Sr !== $p && (Sr = ic), Wp === null ? Wp = [e] : Wp.push(e);
    }
    function cb() {
      return Sr === Iu;
    }
    function Gm(e, t) {
      var a = zt;
      zt |= Ir;
      var i = ER();
      if (Ea !== e || gr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, gr), u.clear()), eh(e, t);
        }
        Wu = Bd(), uc(e, t);
      }
      Tu(t);
      do
        try {
          fb();
          break;
        } catch (s) {
          SR(e, s);
        }
      while (!0);
      if (rm(), zt = a, CR(i), Un !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Uc(), Ea = null, gr = ae, Sr;
    }
    function fb() {
      for (; Un !== null; )
        RR(Un);
    }
    function db(e, t) {
      var a = zt;
      zt |= Ir;
      var i = ER();
      if (Ea !== e || gr !== t) {
        if (Jr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, gr), u.clear()), eh(e, t);
        }
        Wu = Bd(), Qp(), uc(e, t);
      }
      Tu(t);
      do
        try {
          pb();
          break;
        } catch (s) {
          SR(e, s);
        }
      while (!0);
      return rm(), CR(i), zt = a, Un !== null ? (Iv(), Iu) : (Uc(), Ea = null, gr = ae, Sr);
    }
    function pb() {
      for (; Un !== null && !Cd(); )
        RR(Un);
    }
    function RR(e) {
      var t = e.alternate;
      nn(e);
      var a;
      (e.mode & Bt) !== qe ? (rS(e), a = t0(t, e, eu), Nm(e, !0)) : a = t0(t, e, eu), gn(), e.memoizedProps = e.pendingProps, a === null ? TR(e) : Un = a, BS.current = null;
    }
    function TR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ds) === Ke) {
          nn(t);
          var u = void 0;
          if ((t.mode & Bt) === qe ? u = WC(a, t, eu) : (rS(t), u = WC(a, t, eu), Nm(t, !1)), gn(), u !== null) {
            Un = u;
            return;
          }
        } else {
          var s = o_(a, t);
          if (s !== null) {
            s.flags &= Hv, Un = s;
            return;
          }
          if ((t.mode & Bt) !== qe) {
            Nm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ds, i.subtreeFlags = Ke, i.deletions = null;
          else {
            Sr = $S, Un = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Un = v;
          return;
        }
        t = i, Un = t;
      } while (t !== null);
      Sr === Iu && (Sr = cR);
    }
    function oc(e, t, a) {
      var i = Ha(), u = Yr.transition;
      try {
        Yr.transition = null, Yn(zr), vb(e, t, a, i);
      } finally {
        Yr.transition = u, Yn(i);
      }
      return null;
    }
    function vb(e, t, a, i) {
      do
        Gu();
      while (Yo !== null);
      if (xb(), (zt & (Ir | Hi)) !== yr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (bd(s), u === null)
        return kd(), null;
      if (s === ae && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ae, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ht;
      var f = St(u.lanes, u.childLanes);
      Pd(e, f), e === Ea && (Ea = null, Un = null, gr = ae), ((u.subtreeFlags & Ki) !== Ke || (u.flags & Ki) !== Ke) && (lc || (lc = !0, GS = a, a0(qi, function() {
        return Gu(), null;
      })));
      var p = (u.subtreeFlags & (Ml | Nl | Ll | Ki)) !== Ke, v = (u.flags & (Ml | Nl | Ll | Ki)) !== Ke;
      if (p || v) {
        var g = Yr.transition;
        Yr.transition = null;
        var C = Ha();
        Yn(zr);
        var D = zt;
        zt |= Hi, BS.current = null, p_(e, u), vC(), b_(e, u, s), _w(e.containerInfo), e.current = u, ms(s), k_(u, e, s), ys(), Rd(), zt = D, Yn(C), Yr.transition = g;
      } else
        e.current = u, vC();
      var b = lc;
      if (lc ? (lc = !1, Yo = e, Gp = s) : (Qf = 0, Ym = null), f = e.pendingLanes, f === ae && (Wf = null), b || bR(e.current, !1), wd(u.stateNode, i), Jr && e.memoizedUpdaters.clear(), Q_(), Ia(e, Kn()), t !== null)
        for (var P = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var G = t[Y], Oe = G.stack, et = G.digest;
          P(G.value, {
            componentStack: Oe,
            digest: et
          });
        }
      if (Bm) {
        Bm = !1;
        var Ge = WS;
        throw WS = null, Ge;
      }
      return ta(Gp, lt) && e.tag !== zo && Gu(), f = e.pendingLanes, ta(f, lt) ? (S1(), e === XS ? Xp++ : (Xp = 0, XS = e)) : Xp = 0, Ao(), kd(), null;
    }
    function Gu() {
      if (Yo !== null) {
        var e = rh(Gp), t = Ns(ja, e), a = Yr.transition, i = Ha();
        try {
          return Yr.transition = null, Yn(t), mb();
        } finally {
          Yn(i), Yr.transition = a;
        }
      }
      return !1;
    }
    function hb(e) {
      QS.push(e), lc || (lc = !0, a0(qi, function() {
        return Gu(), null;
      }));
    }
    function mb() {
      if (Yo === null)
        return !1;
      var e = GS;
      GS = null;
      var t = Yo, a = Gp;
      if (Yo = null, Gp = ae, (zt & (Ir | Hi)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      KS = !0, $m = !1, Ru(a);
      var i = zt;
      zt |= Hi, A_(t.current), M_(t, t.current, a, e);
      {
        var u = QS;
        QS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          y_(t, f);
        }
      }
      Md(), bR(t.current, !0), zt = i, Ao(), $m ? t === Ym ? Qf++ : (Qf = 0, Ym = t) : Qf = 0, KS = !1, $m = !1, xd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function wR(e) {
      return Wf !== null && Wf.has(e);
    }
    function yb(e) {
      Wf === null ? Wf = /* @__PURE__ */ new Set([e]) : Wf.add(e);
    }
    function gb(e) {
      Bm || (Bm = !0, WS = e);
    }
    var Sb = gb;
    function xR(e, t, a) {
      var i = rc(a, t), u = RC(e, i, lt), s = jo(e, u, lt), f = Ca();
      s !== null && (Ro(s, lt, f), Ia(s, f));
    }
    function Sn(e, t, a) {
      if (c_(a), Jp(!1), e.tag === K) {
        xR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === K) {
          xR(i, e, a);
          return;
        } else if (i.tag === M) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !wR(s)) {
            var f = rc(a, e), p = CS(i, f, lt), v = jo(i, p, lt), g = Ca();
            v !== null && (Ro(v, lt, g), Ia(v, g));
            return;
          }
        }
        i = i.return;
      }
      y(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Eb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ca();
      af(e, a), Db(e), Ea === e && Mu(gr, a) && (Sr === $p || Sr === Hm && Ou(gr) && Kn() - IS < fR ? uc(e, ae) : Vm = St(Vm, a)), Ia(e, u);
    }
    function _R(e, t) {
      t === Ht && (t = eb(e));
      var a = Ca(), i = Ba(e, t);
      i !== null && (Ro(i, t, a), Ia(i, a));
    }
    function Cb(e) {
      var t = e.memoizedState, a = Ht;
      t !== null && (a = t.retryLane), _R(e, a);
    }
    function Rb(e, t) {
      var a = Ht, i;
      switch (e.tag) {
        case ve:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Et:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), _R(e, a);
    }
    function Tb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : K_(e / 1960) * 1960;
    }
    function wb() {
      if (Xp > Z_)
        throw Xp = 0, XS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Qf > J_ && (Qf = 0, Ym = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function xb() {
      ll.flushLegacyContextWarning(), ll.flushPendingUnsafeLifecycleWarnings();
    }
    function bR(e, t) {
      nn(e), Xm(e, Ol, Y_), t && Xm(e, xi, I_), Xm(e, Ol, B_), t && Xm(e, xi, $_), gn();
    }
    function Xm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ke ? i = i.child : ((i.flags & t) !== Ke && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Km = null;
    function kR(e) {
      {
        if ((zt & Ir) !== yr || !(e.mode & xt))
          return;
        var t = e.tag;
        if (t !== se && t !== K && t !== M && t !== W && t !== Ce && t !== We && t !== je)
          return;
        var a = ft(e) || "ReactComponent";
        if (Km !== null) {
          if (Km.has(a))
            return;
          Km.add(a);
        } else
          Km = /* @__PURE__ */ new Set([a]);
        var i = or;
        try {
          nn(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? nn(e) : gn();
        }
      }
    }
    var t0;
    {
      var _b = null;
      t0 = function(e, t, a) {
        var i = UR(_b, t);
        try {
          return VC(e, t, a);
        } catch (s) {
          if (Fx() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (rm(), $E(), QC(e, t), UR(t, i), t.mode & Bt && rS(t), Dl(null, VC, null, e, t, a), Gi()) {
            var u = fs();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var DR = !1, n0;
    n0 = /* @__PURE__ */ new Set();
    function bb(e) {
      if (gi && !m1())
        switch (e.tag) {
          case W:
          case Ce:
          case je: {
            var t = Un && ft(Un) || "Unknown", a = t;
            if (!n0.has(a)) {
              n0.add(a);
              var i = ft(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case M: {
            DR || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), DR = !0);
            break;
          }
        }
    }
    function Zp(e, t) {
      if (Jr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Os(e, i, t);
        });
      }
    }
    var r0 = {};
    function a0(e, t) {
      {
        var a = vl.current;
        return a !== null ? (a.push(t), r0) : Ed(e, t);
      }
    }
    function OR(e) {
      if (e !== r0)
        return Vv(e);
    }
    function MR() {
      return vl.current !== null;
    }
    function kb(e) {
      {
        if (e.mode & xt) {
          if (!oR())
            return;
        } else if (!X_() || zt !== yr || e.tag !== W && e.tag !== Ce && e.tag !== je)
          return;
        if (vl.current === null) {
          var t = or;
          try {
            nn(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ft(e));
          } finally {
            t ? nn(e) : gn();
          }
        }
      }
    }
    function Db(e) {
      e.tag !== zo && oR() && vl.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

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
    var Pi = null, Gf = null, Ob = function(e) {
      Pi = e;
    };
    function Xf(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function i0(e) {
      return Xf(e);
    }
    function l0(e) {
      {
        if (Pi === null)
          return e;
        var t = Pi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Xf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ne,
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
        if (Pi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case M: {
            typeof i == "function" && (u = !0);
            break;
          }
          case W: {
            (typeof i == "function" || s === dt) && (u = !0);
            break;
          }
          case Ce: {
            (s === ne || s === dt) && (u = !0);
            break;
          }
          case We:
          case je: {
            (s === yt || s === dt) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Pi(a);
          if (f !== void 0 && f === Pi(i))
            return !0;
        }
        return !1;
      }
    }
    function LR(e) {
      {
        if (Pi === null || typeof WeakSet != "function")
          return;
        Gf === null && (Gf = /* @__PURE__ */ new WeakSet()), Gf.add(e);
      }
    }
    var Mb = function(e, t) {
      {
        if (Pi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Gu(), Qu(function() {
          u0(e.current, i, a);
        });
      }
    }, Nb = function(e, t) {
      {
        if (e.context !== ci)
          return;
        Gu(), Qu(function() {
          ev(t, e, null, null);
        });
      }
    };
    function u0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case W:
          case je:
          case M:
            v = p;
            break;
          case Ce:
            v = p.render;
            break;
        }
        if (Pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var g = !1, C = !1;
        if (v !== null) {
          var D = Pi(v);
          D !== void 0 && (a.has(D) ? C = !0 : t.has(D) && (f === M ? C = !0 : g = !0));
        }
        if (Gf !== null && (Gf.has(e) || i !== null && Gf.has(i)) && (C = !0), C && (e._debugNeedsRemount = !0), C || g) {
          var b = Ba(e, lt);
          b !== null && Er(b, e, lt, sn);
        }
        u !== null && !C && u0(u, t, a), s !== null && u0(s, t, a);
      }
    }
    var Lb = function(e, t) {
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
          case W:
          case je:
          case M:
            p = f;
            break;
          case Ce:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? zb(e, a) : i !== null && o0(i, t, a), u !== null && o0(u, t, a);
      }
    }
    function zb(e, t) {
      {
        var a = Ab(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case F:
              t.add(i.stateNode);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
            case K:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Ab(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === F)
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
    function Ub(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ke, this.subtreeFlags = Ke, this.deletions = null, this.lanes = ae, this.childLanes = ae, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !s0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var fi = function(e, t, a, i) {
      return new Ub(e, t, a, i);
    };
    function c0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function jb(e) {
      return typeof e == "function" && !c0(e) && e.defaultProps === void 0;
    }
    function Fb(e) {
      if (typeof e == "function")
        return c0(e) ? M : W;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ne)
          return Ce;
        if (t === yt)
          return We;
      }
      return se;
    }
    function sc(e, t) {
      var a = e.alternate;
      a === null ? (a = fi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ke, a.subtreeFlags = Ke, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Vn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case se:
        case W:
        case je:
          a.type = Xf(e.type);
          break;
        case M:
          a.type = i0(e.type);
          break;
        case Ce:
          a.type = l0(e.type);
          break;
      }
      return a;
    }
    function Hb(e, t) {
      e.flags &= Vn | wn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ae, e.lanes = t, e.child = null, e.subtreeFlags = Ke, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ke, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Pb(e, t, a) {
      var i;
      return e === Qh ? (i = xt, t === !0 && (i |= ln, i |= $t)) : i = qe, Jr && (i |= Bt), fi(K, null, null, i);
    }
    function f0(e, t, a, i, u, s) {
      var f = se, p = e;
      if (typeof e == "function")
        c0(e) ? (f = M, p = i0(p)) : p = Xf(p);
      else if (typeof e == "string")
        f = F;
      else
        e: switch (e) {
          case vi:
            return Qo(a.children, u, s, t);
          case Ka:
            f = $, u |= ln, (u & xt) !== qe && (u |= $t);
            break;
          case hi:
            return Vb(a, u, s, t);
          case ke:
            return Bb(a, u, s, t);
          case Ue:
            return $b(a, u, s, t);
          case On:
            return AR(a, u, s, t);
          case pn:
          case _t:
          case yn:
          case ur:
          case wt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case mi:
                  f = fe;
                  break e;
                case x:
                  f = re;
                  break e;
                case ne:
                  f = Ce, p = l0(p);
                  break e;
                case yt:
                  f = We;
                  break e;
                case dt:
                  f = ot, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var g = i ? ft(i) : null;
              g && (v += `

Check the render method of \`` + g + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var C = fi(f, a, t, u);
      return C.elementType = e, C.type = p, C.lanes = s, C._debugOwner = i, C;
    }
    function d0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = f0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Qo(e, t, a, i) {
      var u = fi(ee, e, i, t);
      return u.lanes = a, u;
    }
    function Vb(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = fi(ce, e, i, t | Bt);
      return u.elementType = hi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Bb(e, t, a, i) {
      var u = fi(ve, e, i, t);
      return u.elementType = ke, u.lanes = a, u;
    }
    function $b(e, t, a, i) {
      var u = fi(Et, e, i, t);
      return u.elementType = Ue, u.lanes = a, u;
    }
    function AR(e, t, a, i) {
      var u = fi(Fe, e, i, t);
      u.elementType = On, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function p0(e, t, a) {
      var i = fi(he, e, null, t);
      return i.lanes = a, i;
    }
    function Yb() {
      var e = fi(F, null, null, qe);
      return e.elementType = "DELETED", e;
    }
    function Ib(e) {
      var t = fi(nt, null, null, qe);
      return t.stateNode = e, t;
    }
    function v0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = fi(Z, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function UR(e, t) {
      return e === null && (e = fi(se, null, null, qe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Wb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Xy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ht, this.eventTimes = Ds(ae), this.expirationTimes = Ds(sn), this.pendingLanes = ae, this.suspendedLanes = ae, this.pingedLanes = ae, this.expiredLanes = ae, this.mutableReadLanes = ae, this.finishedLanes = ae, this.entangledLanes = ae, this.entanglements = Ds(ae), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < wu; f++)
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
      var C = new Wb(e, t, a, p, v), D = Pb(t, s);
      C.current = D, D.stateNode = C;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        D.memoizedState = b;
      }
      return bg(D), C;
    }
    var h0 = "18.3.1";
    function Qb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ir(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: lr,
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
        return ci;
      var t = mo(e), a = Dx(t);
      if (t.tag === M) {
        var i = t.type;
        if (Ql(i))
          return fE(t, i, a);
      }
      return a;
    }
    function Gb(e, t) {
      {
        var a = mo(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = qr(a);
        if (u === null)
          return null;
        if (u.mode & ln) {
          var s = ft(a) || "Component";
          if (!y0[s]) {
            y0[s] = !0;
            var f = or;
            try {
              nn(u), a.mode & ln ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? nn(f) : gn();
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
      var b = D.current, P = Ca(), Y = Io(b), G = $u(P, Y);
      return G.callback = t ?? null, jo(b, G, Y), tb(D, Y, P), D;
    }
    function ev(e, t, a, i) {
      Td(t, e);
      var u = t.current, s = Ca(), f = Io(u);
      _n(f);
      var p = FR(a);
      t.context === null ? t.context = p : t.pendingContext = p, gi && or !== null && !m0 && (m0 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ft(or) || "Unknown"));
      var v = $u(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var g = jo(u, v, f);
      return g !== null && (Er(g, u, f, s), om(g, u, f)), f;
    }
    function qm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case F:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Xb(e) {
      switch (e.tag) {
        case K: {
          var t = e.stateNode;
          if (uf(t)) {
            var a = Qv(t);
            ib(t, a);
          }
          break;
        }
        case ve: {
          Qu(function() {
            var u = Ba(e, lt);
            if (u !== null) {
              var s = Ca();
              Er(u, e, lt, s);
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
    function Kb(e) {
      if (e.tag === ve) {
        var t = Ts, a = Ba(e, t);
        if (a !== null) {
          var i = Ca();
          Er(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function qb(e) {
      if (e.tag === ve) {
        var t = Io(e), a = Ba(e, t);
        if (a !== null) {
          var i = Ca();
          Er(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function BR(e) {
      var t = En(e);
      return t === null ? null : t.stateNode;
    }
    var $R = function(e) {
      return null;
    };
    function Zb(e) {
      return $R(e);
    }
    var YR = function(e) {
      return !1;
    };
    function Jb(e) {
      return YR(e);
    }
    var IR = null, WR = null, QR = null, GR = null, XR = null, KR = null, qR = null, ZR = null, JR = null;
    {
      var eT = function(e, t, a) {
        var i = t[a], u = Tt(e) ? e.slice() : Ct({}, e);
        return a + 1 === t.length ? (Tt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = eT(e[i], t, a + 1), u);
      }, tT = function(e, t) {
        return eT(e, t, 0);
      }, nT = function(e, t, a, i) {
        var u = t[i], s = Tt(e) ? e.slice() : Ct({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Tt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = nT(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, rT = function(e, t, a) {
        if (t.length !== a.length) {
          I("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              I("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return nT(e, t, a, 0);
      }, aT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Tt(e) ? e.slice() : Ct({}, e);
        return s[u] = aT(e[u], t, a + 1, i), s;
      }, iT = function(e, t, a) {
        return aT(e, t, 0, a);
      }, S0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      IR = function(e, t, a, i) {
        var u = S0(e, t);
        if (u !== null) {
          var s = iT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ct({}, e.memoizedProps);
          var f = Ba(e, lt);
          f !== null && Er(f, e, lt, sn);
        }
      }, WR = function(e, t, a) {
        var i = S0(e, t);
        if (i !== null) {
          var u = tT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ct({}, e.memoizedProps);
          var s = Ba(e, lt);
          s !== null && Er(s, e, lt, sn);
        }
      }, QR = function(e, t, a, i) {
        var u = S0(e, t);
        if (u !== null) {
          var s = rT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ct({}, e.memoizedProps);
          var f = Ba(e, lt);
          f !== null && Er(f, e, lt, sn);
        }
      }, GR = function(e, t, a) {
        e.pendingProps = iT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, lt);
        i !== null && Er(i, e, lt, sn);
      }, XR = function(e, t) {
        e.pendingProps = tT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, lt);
        a !== null && Er(a, e, lt, sn);
      }, KR = function(e, t, a) {
        e.pendingProps = rT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, lt);
        i !== null && Er(i, e, lt, sn);
      }, qR = function(e) {
        var t = Ba(e, lt);
        t !== null && Er(t, e, lt, sn);
      }, ZR = function(e) {
        $R = e;
      }, JR = function(e) {
        YR = e;
      };
    }
    function ek(e) {
      var t = qr(e);
      return t === null ? null : t.stateNode;
    }
    function tk(e) {
      return null;
    }
    function nk() {
      return or;
    }
    function rk(e) {
      var t = e.findFiberByHostInstance, a = E.ReactCurrentDispatcher;
      return So({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: IR,
        overrideHookStateDeletePath: WR,
        overrideHookStateRenamePath: QR,
        overrideProps: GR,
        overridePropsDeletePath: XR,
        overridePropsRenamePath: KR,
        setErrorHandler: ZR,
        setSuspenseHandler: JR,
        scheduleUpdate: qR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: ek,
        findFiberByHostInstance: t || tk,
        // React Refresh
        findHostInstancesForRefresh: Lb,
        scheduleRefresh: Mb,
        scheduleRoot: Nb,
        setRefreshHandler: Ob,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: nk,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: h0
      });
    }
    var lT = typeof reportError == "function" ? (
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
        if (a.nodeType !== Hn) {
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
      uT(e);
      var a = !1, i = !1, u = "", s = lT;
      t != null && (t.hydrate ? I("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Or && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = HR(e, Qh, null, a, i, u, s);
      Ph(f.current, e);
      var p = e.nodeType === Hn ? e.parentNode : e;
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
      uT(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = lT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var g = PR(t, null, e, Qh, i, s, f, p, v);
      if (Ph(g.current, e), lp(e), u)
        for (var C = 0; C < u.length; C++) {
          var D = u[C];
          c1(g, D);
        }
      return new Zm(g);
    }
    function Jm(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Qi || e.nodeType === od));
    }
    function tv(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Qi || e.nodeType === od || e.nodeType === Hn && e.nodeValue === " react-mount-point-unstable "));
    }
    function uT(e) {
      e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), yp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var uk = E.ReactCurrentOwner, oT;
    oT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Hn) {
        var t = BR(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = C0(e), u = !!(i && No(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function C0(e) {
      return e ? e.nodeType === Qi ? e.documentElement : e.firstChild : null;
    }
    function sT() {
    }
    function ok(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = qm(f);
            s.call(b);
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
          sT
        );
        e._reactRootContainer = f, Ph(f.current, e);
        var p = e.nodeType === Hn ? e.parentNode : e;
        return lp(p), Qu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var g = i;
          i = function() {
            var b = qm(C);
            g.call(b);
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
          sT
        );
        e._reactRootContainer = C, Ph(C.current, e);
        var D = e.nodeType === Hn ? e.parentNode : e;
        return lp(D), Qu(function() {
          ev(t, C, a, i);
        }), C;
      }
    }
    function sk(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ey(e, t, a, i, u) {
      oT(a), sk(u === void 0 ? null : u, "render");
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
    var cT = !1;
    function ck(e) {
      {
        cT || (cT = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = uk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ut(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Gr ? e : Gb(e, "findDOMNode");
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
    var fT = !1;
    function vk(e) {
      if (fT || (fT = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !tv(e))
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
          var u = C0(e), s = !!(u && No(u)), f = e.nodeType === Gr && tv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    _r(Xb), To(Kb), ah(qb), zs(Ha), $d(th), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Tc(mw), yy(ZS, lb, Qu);
    function hk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Jm(t))
        throw new Error("Target container is not a DOM element.");
      return Qb(e, t, null, a);
    }
    function mk(e, t, a, i) {
      return pk(e, t, a, i);
    }
    var R0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [No, _f, Vh, fo, wc, ZS]
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
      findFiberByHostInstance: Gs,
      bundleType: 1,
      version: h0,
      rendererPackageName: "react-dom"
    });
    if (!Ek && Ee && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var dT = window.location.protocol;
      /^(https?|file):$/.test(dT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (dT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R0, Qa.createPortal = hk, Qa.createRoot = yk, Qa.findDOMNode = ck, Qa.flushSync = Sk, Qa.hydrate = fk, Qa.hydrateRoot = gk, Qa.render = dk, Qa.unmountComponentAtNode = vk, Qa.unstable_batchedUpdates = ZS, Qa.unstable_renderSubtreeIntoContainer = mk, Qa.version = h0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Qa;
}
function DT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(DT);
    } catch (S) {
      console.error(S);
    }
  }
}
process.env.NODE_ENV === "production" ? (DT(), b0.exports = Mk()) : b0.exports = Nk();
var Lk = b0.exports, k0, ny = Lk;
if (process.env.NODE_ENV === "production")
  k0 = ny.createRoot, ny.hydrateRoot;
else {
  var RT = ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  k0 = function(S, R) {
    RT.usingClientEntryPoint = !0;
    try {
      return ny.createRoot(S, R);
    } finally {
      RT.usingClientEntryPoint = !1;
    }
  };
}
function zk(S, R) {
  var E, A = 1;
  S == null && (S = 0), R == null && (R = 0);
  function j() {
    var I, y = E.length, te, W = 0, M = 0;
    for (I = 0; I < y; ++I)
      te = E[I], W += te.x, M += te.y;
    for (W = (W / y - S) * A, M = (M / y - R) * A, I = 0; I < y; ++I)
      te = E[I], te.x -= W, te.y -= M;
  }
  return j.initialize = function(I) {
    E = I;
  }, j.x = function(I) {
    return arguments.length ? (S = +I, j) : S;
  }, j.y = function(I) {
    return arguments.length ? (R = +I, j) : R;
  }, j.strength = function(I) {
    return arguments.length ? (A = +I, j) : A;
  }, j;
}
function Ak(S) {
  const R = +this._x.call(null, S), E = +this._y.call(null, S);
  return OT(this.cover(R, E), R, E, S);
}
function OT(S, R, E, A) {
  if (isNaN(R) || isNaN(E)) return S;
  var j, I = S._root, y = { data: A }, te = S._x0, W = S._y0, M = S._x1, se = S._y1, K, Z, F, he, ee, $, re, fe;
  if (!I) return S._root = y, S;
  for (; I.length; )
    if ((ee = R >= (K = (te + M) / 2)) ? te = K : M = K, ($ = E >= (Z = (W + se) / 2)) ? W = Z : se = Z, j = I, !(I = I[re = $ << 1 | ee])) return j[re] = y, S;
  if (F = +S._x.call(null, I.data), he = +S._y.call(null, I.data), R === F && E === he) return y.next = I, j ? j[re] = y : S._root = y, S;
  do
    j = j ? j[re] = new Array(4) : S._root = new Array(4), (ee = R >= (K = (te + M) / 2)) ? te = K : M = K, ($ = E >= (Z = (W + se) / 2)) ? W = Z : se = Z;
  while ((re = $ << 1 | ee) === (fe = (he >= Z) << 1 | F >= K));
  return j[fe] = I, j[re] = y, S;
}
function Uk(S) {
  var R, E, A = S.length, j, I, y = new Array(A), te = new Array(A), W = 1 / 0, M = 1 / 0, se = -1 / 0, K = -1 / 0;
  for (E = 0; E < A; ++E)
    isNaN(j = +this._x.call(null, R = S[E])) || isNaN(I = +this._y.call(null, R)) || (y[E] = j, te[E] = I, j < W && (W = j), j > se && (se = j), I < M && (M = I), I > K && (K = I));
  if (W > se || M > K) return this;
  for (this.cover(W, M).cover(se, K), E = 0; E < A; ++E)
    OT(this, y[E], te[E], S[E]);
  return this;
}
function jk(S, R) {
  if (isNaN(S = +S) || isNaN(R = +R)) return this;
  var E = this._x0, A = this._y0, j = this._x1, I = this._y1;
  if (isNaN(E))
    j = (E = Math.floor(S)) + 1, I = (A = Math.floor(R)) + 1;
  else {
    for (var y = j - E || 1, te = this._root, W, M; E > S || S >= j || A > R || R >= I; )
      switch (M = (R < A) << 1 | S < E, W = new Array(4), W[M] = te, te = W, y *= 2, M) {
        case 0:
          j = E + y, I = A + y;
          break;
        case 1:
          E = j - y, I = A + y;
          break;
        case 2:
          j = E + y, A = I - y;
          break;
        case 3:
          E = j - y, A = I - y;
          break;
      }
    this._root && this._root.length && (this._root = te);
  }
  return this._x0 = E, this._y0 = A, this._x1 = j, this._y1 = I, this;
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
function wa(S, R, E, A, j) {
  this.node = S, this.x0 = R, this.y0 = E, this.x1 = A, this.y1 = j;
}
function Pk(S, R, E) {
  var A, j = this._x0, I = this._y0, y, te, W, M, se = this._x1, K = this._y1, Z = [], F = this._root, he, ee;
  for (F && Z.push(new wa(F, j, I, se, K)), E == null ? E = 1 / 0 : (j = S - E, I = R - E, se = S + E, K = R + E, E *= E); he = Z.pop(); )
    if (!(!(F = he.node) || (y = he.x0) > se || (te = he.y0) > K || (W = he.x1) < j || (M = he.y1) < I))
      if (F.length) {
        var $ = (y + W) / 2, re = (te + M) / 2;
        Z.push(
          new wa(F[3], $, re, W, M),
          new wa(F[2], y, re, $, M),
          new wa(F[1], $, te, W, re),
          new wa(F[0], y, te, $, re)
        ), (ee = (R >= re) << 1 | S >= $) && (he = Z[Z.length - 1], Z[Z.length - 1] = Z[Z.length - 1 - ee], Z[Z.length - 1 - ee] = he);
      } else {
        var fe = S - +this._x.call(null, F.data), Ce = R - +this._y.call(null, F.data), ce = fe * fe + Ce * Ce;
        if (ce < E) {
          var ve = Math.sqrt(E = ce);
          j = S - ve, I = R - ve, se = S + ve, K = R + ve, A = F.data;
        }
      }
  return A;
}
function Vk(S) {
  if (isNaN(se = +this._x.call(null, S)) || isNaN(K = +this._y.call(null, S))) return this;
  var R, E = this._root, A, j, I, y = this._x0, te = this._y0, W = this._x1, M = this._y1, se, K, Z, F, he, ee, $, re;
  if (!E) return this;
  if (E.length) for (; ; ) {
    if ((he = se >= (Z = (y + W) / 2)) ? y = Z : W = Z, (ee = K >= (F = (te + M) / 2)) ? te = F : M = F, R = E, !(E = E[$ = ee << 1 | he])) return this;
    if (!E.length) break;
    (R[$ + 1 & 3] || R[$ + 2 & 3] || R[$ + 3 & 3]) && (A = R, re = $);
  }
  for (; E.data !== S; ) if (j = E, !(E = E.next)) return this;
  return (I = E.next) && delete E.next, j ? (I ? j.next = I : delete j.next, this) : R ? (I ? R[$] = I : delete R[$], (E = R[0] || R[1] || R[2] || R[3]) && E === (R[3] || R[2] || R[1] || R[0]) && !E.length && (A ? A[re] = E : this._root = E), this) : (this._root = I, this);
}
function Bk(S) {
  for (var R = 0, E = S.length; R < E; ++R) this.remove(S[R]);
  return this;
}
function $k() {
  return this._root;
}
function Yk() {
  var S = 0;
  return this.visit(function(R) {
    if (!R.length) do
      ++S;
    while (R = R.next);
  }), S;
}
function Ik(S) {
  var R = [], E, A = this._root, j, I, y, te, W;
  for (A && R.push(new wa(A, this._x0, this._y0, this._x1, this._y1)); E = R.pop(); )
    if (!S(A = E.node, I = E.x0, y = E.y0, te = E.x1, W = E.y1) && A.length) {
      var M = (I + te) / 2, se = (y + W) / 2;
      (j = A[3]) && R.push(new wa(j, M, se, te, W)), (j = A[2]) && R.push(new wa(j, I, se, M, W)), (j = A[1]) && R.push(new wa(j, M, y, te, se)), (j = A[0]) && R.push(new wa(j, I, y, M, se));
    }
  return this;
}
function Wk(S) {
  var R = [], E = [], A;
  for (this._root && R.push(new wa(this._root, this._x0, this._y0, this._x1, this._y1)); A = R.pop(); ) {
    var j = A.node;
    if (j.length) {
      var I, y = A.x0, te = A.y0, W = A.x1, M = A.y1, se = (y + W) / 2, K = (te + M) / 2;
      (I = j[0]) && R.push(new wa(I, y, te, se, K)), (I = j[1]) && R.push(new wa(I, se, te, W, K)), (I = j[2]) && R.push(new wa(I, y, K, se, M)), (I = j[3]) && R.push(new wa(I, se, K, W, M));
    }
    E.push(A);
  }
  for (; A = E.pop(); )
    S(A.node, A.x0, A.y0, A.x1, A.y1);
  return this;
}
function Qk(S) {
  return S[0];
}
function Gk(S) {
  return arguments.length ? (this._x = S, this) : this._x;
}
function Xk(S) {
  return S[1];
}
function Kk(S) {
  return arguments.length ? (this._y = S, this) : this._y;
}
function M0(S, R, E) {
  var A = new N0(R ?? Qk, E ?? Xk, NaN, NaN, NaN, NaN);
  return S == null ? A : A.addAll(S);
}
function N0(S, R, E, A, j, I) {
  this._x = S, this._y = R, this._x0 = E, this._y0 = A, this._x1 = j, this._y1 = I, this._root = void 0;
}
function TT(S) {
  for (var R = { data: S.data }, E = R; S = S.next; ) E = E.next = { data: S.data };
  return R;
}
var xa = M0.prototype = N0.prototype;
xa.copy = function() {
  var S = new N0(this._x, this._y, this._x0, this._y0, this._x1, this._y1), R = this._root, E, A;
  if (!R) return S;
  if (!R.length) return S._root = TT(R), S;
  for (E = [{ source: R, target: S._root = new Array(4) }]; R = E.pop(); )
    for (var j = 0; j < 4; ++j)
      (A = R.source[j]) && (A.length ? E.push({ source: A, target: R.target[j] = new Array(4) }) : R.target[j] = TT(A));
  return S;
};
xa.add = Ak;
xa.addAll = Uk;
xa.cover = jk;
xa.data = Fk;
xa.extent = Hk;
xa.find = Pk;
xa.remove = Vk;
xa.removeAll = Bk;
xa.root = $k;
xa.size = Yk;
xa.visit = Ik;
xa.visitAfter = Wk;
xa.x = Gk;
xa.y = Kk;
function hl(S) {
  return function() {
    return S;
  };
}
function Go(S) {
  return (S() - 0.5) * 1e-6;
}
function qk(S) {
  return S.x + S.vx;
}
function Zk(S) {
  return S.y + S.vy;
}
function Jk(S) {
  var R, E, A, j = 1, I = 1;
  typeof S != "function" && (S = hl(S == null ? 1 : +S));
  function y() {
    for (var M, se = R.length, K, Z, F, he, ee, $, re = 0; re < I; ++re)
      for (K = M0(R, qk, Zk).visitAfter(te), M = 0; M < se; ++M)
        Z = R[M], ee = E[Z.index], $ = ee * ee, F = Z.x + Z.vx, he = Z.y + Z.vy, K.visit(fe);
    function fe(Ce, ce, ve, We, je) {
      var ot = Ce.data, ht = Ce.r, nt = ee + ht;
      if (ot) {
        if (ot.index > Z.index) {
          var Et = F - ot.x - ot.vx, mt = he - ot.y - ot.vy, Fe = Et * Et + mt * mt;
          Fe < nt * nt && (Et === 0 && (Et = Go(A), Fe += Et * Et), mt === 0 && (mt = Go(A), Fe += mt * mt), Fe = (nt - (Fe = Math.sqrt(Fe))) / Fe * j, Z.vx += (Et *= Fe) * (nt = (ht *= ht) / ($ + ht)), Z.vy += (mt *= Fe) * nt, ot.vx -= Et * (nt = 1 - nt), ot.vy -= mt * nt);
        }
        return;
      }
      return ce > F + nt || We < F - nt || ve > he + nt || je < he - nt;
    }
  }
  function te(M) {
    if (M.data) return M.r = E[M.data.index];
    for (var se = M.r = 0; se < 4; ++se)
      M[se] && M[se].r > M.r && (M.r = M[se].r);
  }
  function W() {
    if (R) {
      var M, se = R.length, K;
      for (E = new Array(se), M = 0; M < se; ++M) K = R[M], E[K.index] = +S(K, M, R);
    }
  }
  return y.initialize = function(M, se) {
    R = M, A = se, W();
  }, y.iterations = function(M) {
    return arguments.length ? (I = +M, y) : I;
  }, y.strength = function(M) {
    return arguments.length ? (j = +M, y) : j;
  }, y.radius = function(M) {
    return arguments.length ? (S = typeof M == "function" ? M : hl(+M), W(), y) : S;
  }, y;
}
function eD(S) {
  return S.index;
}
function wT(S, R) {
  var E = S.get(R);
  if (!E) throw new Error("node not found: " + R);
  return E;
}
function tD(S) {
  var R = eD, E = K, A, j = hl(30), I, y, te, W, M, se = 1;
  S == null && (S = []);
  function K($) {
    return 1 / Math.min(te[$.source.index], te[$.target.index]);
  }
  function Z($) {
    for (var re = 0, fe = S.length; re < se; ++re)
      for (var Ce = 0, ce, ve, We, je, ot, ht, nt; Ce < fe; ++Ce)
        ce = S[Ce], ve = ce.source, We = ce.target, je = We.x + We.vx - ve.x - ve.vx || Go(M), ot = We.y + We.vy - ve.y - ve.vy || Go(M), ht = Math.sqrt(je * je + ot * ot), ht = (ht - I[Ce]) / ht * $ * A[Ce], je *= ht, ot *= ht, We.vx -= je * (nt = W[Ce]), We.vy -= ot * nt, ve.vx += je * (nt = 1 - nt), ve.vy += ot * nt;
  }
  function F() {
    if (y) {
      var $, re = y.length, fe = S.length, Ce = new Map(y.map((ve, We) => [R(ve, We, y), ve])), ce;
      for ($ = 0, te = new Array(re); $ < fe; ++$)
        ce = S[$], ce.index = $, typeof ce.source != "object" && (ce.source = wT(Ce, ce.source)), typeof ce.target != "object" && (ce.target = wT(Ce, ce.target)), te[ce.source.index] = (te[ce.source.index] || 0) + 1, te[ce.target.index] = (te[ce.target.index] || 0) + 1;
      for ($ = 0, W = new Array(fe); $ < fe; ++$)
        ce = S[$], W[$] = te[ce.source.index] / (te[ce.source.index] + te[ce.target.index]);
      A = new Array(fe), he(), I = new Array(fe), ee();
    }
  }
  function he() {
    if (y)
      for (var $ = 0, re = S.length; $ < re; ++$)
        A[$] = +E(S[$], $, S);
  }
  function ee() {
    if (y)
      for (var $ = 0, re = S.length; $ < re; ++$)
        I[$] = +j(S[$], $, S);
  }
  return Z.initialize = function($, re) {
    y = $, M = re, F();
  }, Z.links = function($) {
    return arguments.length ? (S = $, F(), Z) : S;
  }, Z.id = function($) {
    return arguments.length ? (R = $, Z) : R;
  }, Z.iterations = function($) {
    return arguments.length ? (se = +$, Z) : se;
  }, Z.strength = function($) {
    return arguments.length ? (E = typeof $ == "function" ? $ : hl(+$), he(), Z) : E;
  }, Z.distance = function($) {
    return arguments.length ? (j = typeof $ == "function" ? $ : hl(+$), ee(), Z) : j;
  }, Z;
}
var nD = { value: () => {
} };
function MT() {
  for (var S = 0, R = arguments.length, E = {}, A; S < R; ++S) {
    if (!(A = arguments[S] + "") || A in E || /[\s.]/.test(A)) throw new Error("illegal type: " + A);
    E[A] = [];
  }
  return new ry(E);
}
function ry(S) {
  this._ = S;
}
function rD(S, R) {
  return S.trim().split(/^|\s+/).map(function(E) {
    var A = "", j = E.indexOf(".");
    if (j >= 0 && (A = E.slice(j + 1), E = E.slice(0, j)), E && !R.hasOwnProperty(E)) throw new Error("unknown type: " + E);
    return { type: E, name: A };
  });
}
ry.prototype = MT.prototype = {
  constructor: ry,
  on: function(S, R) {
    var E = this._, A = rD(S + "", E), j, I = -1, y = A.length;
    if (arguments.length < 2) {
      for (; ++I < y; ) if ((j = (S = A[I]).type) && (j = aD(E[j], S.name))) return j;
      return;
    }
    if (R != null && typeof R != "function") throw new Error("invalid callback: " + R);
    for (; ++I < y; )
      if (j = (S = A[I]).type) E[j] = xT(E[j], S.name, R);
      else if (R == null) for (j in E) E[j] = xT(E[j], S.name, null);
    return this;
  },
  copy: function() {
    var S = {}, R = this._;
    for (var E in R) S[E] = R[E].slice();
    return new ry(S);
  },
  call: function(S, R) {
    if ((j = arguments.length - 2) > 0) for (var E = new Array(j), A = 0, j, I; A < j; ++A) E[A] = arguments[A + 2];
    if (!this._.hasOwnProperty(S)) throw new Error("unknown type: " + S);
    for (I = this._[S], A = 0, j = I.length; A < j; ++A) I[A].value.apply(R, E);
  },
  apply: function(S, R, E) {
    if (!this._.hasOwnProperty(S)) throw new Error("unknown type: " + S);
    for (var A = this._[S], j = 0, I = A.length; j < I; ++j) A[j].value.apply(R, E);
  }
};
function aD(S, R) {
  for (var E = 0, A = S.length, j; E < A; ++E)
    if ((j = S[E]).name === R)
      return j.value;
}
function xT(S, R, E) {
  for (var A = 0, j = S.length; A < j; ++A)
    if (S[A].name === R) {
      S[A] = nD, S = S.slice(0, A).concat(S.slice(A + 1));
      break;
    }
  return E != null && S.push({ name: R, value: E }), S;
}
var qf = 0, uv = 0, iv = 0, NT = 1e3, ay, ov, iy = 0, cc = 0, ly = 0, sv = typeof performance == "object" && performance.now ? performance : Date, LT = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(S) {
  setTimeout(S, 17);
};
function zT() {
  return cc || (LT(iD), cc = sv.now() + ly);
}
function iD() {
  cc = 0;
}
function D0() {
  this._call = this._time = this._next = null;
}
D0.prototype = AT.prototype = {
  constructor: D0,
  restart: function(S, R, E) {
    if (typeof S != "function") throw new TypeError("callback is not a function");
    E = (E == null ? zT() : +E) + (R == null ? 0 : +R), !this._next && ov !== this && (ov ? ov._next = this : ay = this, ov = this), this._call = S, this._time = E, O0();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, O0());
  }
};
function AT(S, R, E) {
  var A = new D0();
  return A.restart(S, R, E), A;
}
function lD() {
  zT(), ++qf;
  for (var S = ay, R; S; )
    (R = cc - S._time) >= 0 && S._call.call(void 0, R), S = S._next;
  --qf;
}
function _T() {
  cc = (iy = sv.now()) + ly, qf = uv = 0;
  try {
    lD();
  } finally {
    qf = 0, oD(), cc = 0;
  }
}
function uD() {
  var S = sv.now(), R = S - iy;
  R > NT && (ly -= R, iy = S);
}
function oD() {
  for (var S, R = ay, E, A = 1 / 0; R; )
    R._call ? (A > R._time && (A = R._time), S = R, R = R._next) : (E = R._next, R._next = null, R = S ? S._next = E : ay = E);
  ov = S, O0(A);
}
function O0(S) {
  if (!qf) {
    uv && (uv = clearTimeout(uv));
    var R = S - cc;
    R > 24 ? (S < 1 / 0 && (uv = setTimeout(_T, S - sv.now() - ly)), iv && (iv = clearInterval(iv))) : (iv || (iy = sv.now(), iv = setInterval(uD, NT)), qf = 1, LT(_T));
  }
}
const sD = 1664525, cD = 1013904223, bT = 4294967296;
function fD() {
  let S = 1;
  return () => (S = (sD * S + cD) % bT) / bT;
}
function dD(S) {
  return S.x;
}
function pD(S) {
  return S.y;
}
var vD = 10, hD = Math.PI * (3 - Math.sqrt(5));
function mD(S) {
  var R, E = 1, A = 1e-3, j = 1 - Math.pow(A, 1 / 300), I = 0, y = 0.6, te = /* @__PURE__ */ new Map(), W = AT(K), M = MT("tick", "end"), se = fD();
  S == null && (S = []);
  function K() {
    Z(), M.call("tick", R), E < A && (W.stop(), M.call("end", R));
  }
  function Z(ee) {
    var $, re = S.length, fe;
    ee === void 0 && (ee = 1);
    for (var Ce = 0; Ce < ee; ++Ce)
      for (E += (I - E) * j, te.forEach(function(ce) {
        ce(E);
      }), $ = 0; $ < re; ++$)
        fe = S[$], fe.fx == null ? fe.x += fe.vx *= y : (fe.x = fe.fx, fe.vx = 0), fe.fy == null ? fe.y += fe.vy *= y : (fe.y = fe.fy, fe.vy = 0);
    return R;
  }
  function F() {
    for (var ee = 0, $ = S.length, re; ee < $; ++ee) {
      if (re = S[ee], re.index = ee, re.fx != null && (re.x = re.fx), re.fy != null && (re.y = re.fy), isNaN(re.x) || isNaN(re.y)) {
        var fe = vD * Math.sqrt(0.5 + ee), Ce = ee * hD;
        re.x = fe * Math.cos(Ce), re.y = fe * Math.sin(Ce);
      }
      (isNaN(re.vx) || isNaN(re.vy)) && (re.vx = re.vy = 0);
    }
  }
  function he(ee) {
    return ee.initialize && ee.initialize(S, se), ee;
  }
  return F(), R = {
    tick: Z,
    restart: function() {
      return W.restart(K), R;
    },
    stop: function() {
      return W.stop(), R;
    },
    nodes: function(ee) {
      return arguments.length ? (S = ee, F(), te.forEach(he), R) : S;
    },
    alpha: function(ee) {
      return arguments.length ? (E = +ee, R) : E;
    },
    alphaMin: function(ee) {
      return arguments.length ? (A = +ee, R) : A;
    },
    alphaDecay: function(ee) {
      return arguments.length ? (j = +ee, R) : +j;
    },
    alphaTarget: function(ee) {
      return arguments.length ? (I = +ee, R) : I;
    },
    velocityDecay: function(ee) {
      return arguments.length ? (y = 1 - ee, R) : 1 - y;
    },
    randomSource: function(ee) {
      return arguments.length ? (se = ee, te.forEach(he), R) : se;
    },
    force: function(ee, $) {
      return arguments.length > 1 ? ($ == null ? te.delete(ee) : te.set(ee, he($)), R) : te.get(ee);
    },
    find: function(ee, $, re) {
      var fe = 0, Ce = S.length, ce, ve, We, je, ot;
      for (re == null ? re = 1 / 0 : re *= re, fe = 0; fe < Ce; ++fe)
        je = S[fe], ce = ee - je.x, ve = $ - je.y, We = ce * ce + ve * ve, We < re && (ot = je, re = We);
      return ot;
    },
    on: function(ee, $) {
      return arguments.length > 1 ? (M.on(ee, $), R) : M.on(ee);
    }
  };
}
function yD() {
  var S, R, E, A, j = hl(-30), I, y = 1, te = 1 / 0, W = 0.81;
  function M(F) {
    var he, ee = S.length, $ = M0(S, dD, pD).visitAfter(K);
    for (A = F, he = 0; he < ee; ++he) R = S[he], $.visit(Z);
  }
  function se() {
    if (S) {
      var F, he = S.length, ee;
      for (I = new Array(he), F = 0; F < he; ++F) ee = S[F], I[ee.index] = +j(ee, F, S);
    }
  }
  function K(F) {
    var he = 0, ee, $, re = 0, fe, Ce, ce;
    if (F.length) {
      for (fe = Ce = ce = 0; ce < 4; ++ce)
        (ee = F[ce]) && ($ = Math.abs(ee.value)) && (he += ee.value, re += $, fe += $ * ee.x, Ce += $ * ee.y);
      F.x = fe / re, F.y = Ce / re;
    } else {
      ee = F, ee.x = ee.data.x, ee.y = ee.data.y;
      do
        he += I[ee.data.index];
      while (ee = ee.next);
    }
    F.value = he;
  }
  function Z(F, he, ee, $) {
    if (!F.value) return !0;
    var re = F.x - R.x, fe = F.y - R.y, Ce = $ - he, ce = re * re + fe * fe;
    if (Ce * Ce / W < ce)
      return ce < te && (re === 0 && (re = Go(E), ce += re * re), fe === 0 && (fe = Go(E), ce += fe * fe), ce < y && (ce = Math.sqrt(y * ce)), R.vx += re * F.value * A / ce, R.vy += fe * F.value * A / ce), !0;
    if (F.length || ce >= te) return;
    (F.data !== R || F.next) && (re === 0 && (re = Go(E), ce += re * re), fe === 0 && (fe = Go(E), ce += fe * fe), ce < y && (ce = Math.sqrt(y * ce)));
    do
      F.data !== R && (Ce = I[F.data.index] * A / ce, R.vx += re * Ce, R.vy += fe * Ce);
    while (F = F.next);
  }
  return M.initialize = function(F, he) {
    S = F, E = he, se();
  }, M.strength = function(F) {
    return arguments.length ? (j = typeof F == "function" ? F : hl(+F), se(), M) : j;
  }, M.distanceMin = function(F) {
    return arguments.length ? (y = F * F, M) : Math.sqrt(y);
  }, M.distanceMax = function(F) {
    return arguments.length ? (te = F * F, M) : Math.sqrt(te);
  }, M.theta = function(F) {
    return arguments.length ? (W = F * F, M) : Math.sqrt(W);
  }, M;
}
function gD(S) {
  var R = hl(0.1), E, A, j;
  typeof S != "function" && (S = hl(S == null ? 0 : +S));
  function I(te) {
    for (var W = 0, M = E.length, se; W < M; ++W)
      se = E[W], se.vy += (j[W] - se.y) * A[W] * te;
  }
  function y() {
    if (E) {
      var te, W = E.length;
      for (A = new Array(W), j = new Array(W), te = 0; te < W; ++te)
        A[te] = isNaN(j[te] = +S(E[te], te, E)) ? 0 : +R(E[te], te, E);
    }
  }
  return I.initialize = function(te) {
    E = te, y();
  }, I.strength = function(te) {
    return arguments.length ? (R = typeof te == "function" ? te : hl(+te), y(), I) : R;
  }, I.y = function(te) {
    return arguments.length ? (S = typeof te == "function" ? te : hl(+te), y(), I) : S;
  }, I;
}
function SD() {
  var Dt, Mt, He, me, $e, we, O, q, rt;
  const [S, R] = Jt.useState(null), E = Jt.useRef(null), [A, j] = Jt.useState(() => {
    const H = document.getElementById("network-container");
    return Number((H == null ? void 0 : H.dataset.threshold) || 0.1);
  });
  Jt.useEffect(() => {
    const H = document.getElementById("network-container");
    if (E.current = H, !H) return;
    H.getAttribute("data-organism");
    const oe = (Re) => Array.isArray(Re) ? Re : Array.isArray(Re == null ? void 0 : Re.nodes) ? Re.nodes : Re && typeof Re == "object" ? Object.values(Re) : [];
    let ge = new AbortController();
    const Se = (Re) => {
      if (!Re) return;
      const Ee = `${Re.includes("?") ? "&" : "?"}_=${Date.now()}`;
      fetch(Re + Ee, {
        credentials: "same-origin",
        cache: "no-store",
        signal: ge.signal
      }).then((Ye) => {
        if (!Ye.ok)
          throw new Error(`Failed to load ${Re}: ${Ye.status} ${Ye.statusText}`);
        return Ye.json();
      }).then((Ye) => {
        const ct = oe(Ye);
        R(ct);
      }).catch((Ye) => {
        Ye.name !== "AbortError" && console.error("Error fetching network data:", Ye);
      });
    };
    Se(H.getAttribute("data-network"));
    const _e = new MutationObserver((Re) => {
      for (const Ze of Re)
        Ze.type === "attributes" && Ze.attributeName === "data-network" && (ge.abort(), ge = new AbortController(), Se(H.getAttribute("data-network")));
    });
    return _e.observe(H, { attributes: !0 }), () => {
      _e.disconnect(), ge.abort();
    };
  }, []);
  const I = Jt.useMemo(() => Array.isArray(S) ? S : [], [S]), y = Jt.useMemo(
    () => I.filter((H) => {
      var oe;
      return ((oe = H.attributes) == null ? void 0 : oe.node_type) === "repeat";
    }),
    [I]
  ), te = Jt.useMemo(
    () => I.filter((H) => {
      var oe;
      return ((oe = H.attributes) == null ? void 0 : oe.node_type) === "protein";
    }),
    [I]
  ), W = Jt.useMemo(() => y.map((H) => H.key), [y]), M = Jt.useMemo(() => te.map((H) => {
    let oe = null;
    for (const ge of W)
      if (H.key.endsWith("_" + ge)) {
        oe = ge;
        break;
      }
    if (!oe) {
      const ge = H.key.lastIndexOf("_");
      if (ge > -1) {
        const Se = H.key.slice(ge + 1);
        W.includes(Se) && (oe = Se);
      }
    }
    return { ...H, _satelliteKey: oe };
  }), [te, W]), se = (H, oe) => {
    const ge = /* @__PURE__ */ new Map();
    for (const Se of H) {
      const _e = oe(Se), Re = ge.get(_e) || [];
      Re.push(Se), ge.set(_e, Re);
    }
    return ge;
  }, K = Jt.useMemo(
    () => se(M.filter((H) => H._satelliteKey), (H) => H._satelliteKey),
    [M]
  ), Z = Jt.useMemo(
    () => se(M, (H) => {
      var oe;
      return ((oe = H.attributes) == null ? void 0 : oe.label) || H.key;
    }),
    [M]
  ), F = Jt.useRef(null), [he, ee] = Jt.useState({ x: 0, y: 0 }), [$, re] = Jt.useState(null), [fe, Ce] = Jt.useState(!1), ce = Jt.useRef({ clientX: 0, clientY: 0, viewX: 0, viewY: 0 }), [ve, We] = Jt.useState({ x: -600, y: -300, w: 1200, h: 600 }), [je, ot] = Jt.useState(!1);
  Jt.useEffect(() => {
    ot(!1);
  }, [S]), Jt.useEffect(() => {
    const H = F.current;
    if (!H) return;
    const oe = H.parentElement;
    if (!oe) return;
    const ge = () => {
      const _e = oe.getBoundingClientRect();
      H.setAttribute("width", `${_e.width}`), H.setAttribute("height", `${_e.height}`);
    };
    ge();
    const Se = new ResizeObserver(ge);
    return Se.observe(oe), () => Se.disconnect();
  }, []), Jt.useEffect(() => {
    const H = (oe) => ee({ x: oe.clientX, y: oe.clientY });
    return window.addEventListener("mousemove", H), () => window.removeEventListener("mousemove", H);
  }, []);
  const ht = (H) => {
    H.preventDefault();
    const oe = Math.pow(1.0015, H.deltaY), ge = F.current;
    if (!ge) return;
    const Se = ge.getBoundingClientRect(), _e = (H.clientX - Se.left) / Se.width, Re = (H.clientY - Se.top) / Se.height;
    We((Ze) => {
      const Ee = Ze.x + _e * Ze.w, Ye = Ze.y + Re * Ze.h, ct = Math.max(50, Math.min(1e4, Ze.w * oe)), qt = Math.max(50, Math.min(1e4, Ze.h * oe));
      return {
        x: Ee - _e * ct,
        y: Ye - Re * qt,
        w: ct,
        h: qt
      };
    });
  };
  Jt.useEffect(() => {
    const H = E.current;
    if (!H) return;
    const oe = () => {
      j(Number(H.dataset.threshold || 0));
    };
    return H.addEventListener("network-settings-change", oe), () => {
      H.removeEventListener("network-settings-change", oe);
    };
  }, []);
  const { satPositions: nt, proteinPositions: Et } = Jt.useMemo(() => {
    const H = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map();
    if (!y.length && !M.length)
      return { satPositions: H, proteinPositions: oe };
    const ge = [], Se = /* @__PURE__ */ new Map();
    y.forEach((Ee) => {
      var qt;
      const Ye = Number(((qt = Ee.attributes) == null ? void 0 : qt.size) ?? 40), ct = {
        id: Ee.key,
        type: "repeat",
        raw: Ee,
        size: Ye
      };
      ge.push(ct), Se.set(Ee.key, ct);
    }), M.forEach((Ee) => {
      var qt, cn;
      if (Number(((qt = Ee.attributes) == null ? void 0 : qt.enrichment) || 0) < A) return;
      const Ye = Number(((cn = Ee.attributes) == null ? void 0 : cn.size) ?? 6), ct = {
        id: Ee.key,
        type: "protein",
        raw: Ee,
        size: Ye
      };
      ge.push(ct), Se.set(Ee.key, ct);
    });
    const _e = [];
    M.forEach((Ee) => {
      Ee._satelliteKey && Se.has(Ee.key) && Se.has(Ee._satelliteKey) && _e.push({
        source: Ee.key,
        target: Ee._satelliteKey,
        kind: "binding"
      });
    });
    for (const [, Ee] of Z.entries()) {
      const Ye = Ee.filter((ct) => Se.has(ct.key));
      if (!(Ye.length < 2))
        for (let ct = 0; ct < Ye.length - 1; ct++)
          _e.push({
            source: Ye[ct].key,
            target: Ye[ct + 1].key,
            kind: "clone"
          });
    }
    const Re = mD(ge).force(
      "charge",
      yD().strength((Ee) => Ee.type === "repeat" ? -100 : -120)
      // less repulsion
    ).force(
      "collide",
      Jk().radius((Ee) => {
        const Ye = Ee.type === "repeat" ? Number(Ee.size || 40) : Number(Ee.size || 6), ct = Ee.type === "repeat" ? 15 : 4;
        return Ye + ct;
      })
    ).force(
      "link",
      tD(_e).id((Ee) => Ee.id).distance(
        (Ee) => Ee.kind === "binding" ? 90 : 60
        // clones closer too
      ).strength(
        (Ee) => Ee.kind === "binding" ? 0.7 : 0.2
      )
    ).force("center", zk(0, 0)).force("y", gD(0).strength(0.02)).stop(), Ze = 280;
    for (let Ee = 0; Ee < Ze; Ee++)
      Re.tick();
    return y.forEach((Ee) => {
      const Ye = Se.get(Ee.key);
      Ye && H.set(Ee.key, { x: Ye.x, y: Ye.y });
    }), M.forEach((Ee) => {
      const Ye = Se.get(Ee.key);
      Ye && oe.set(Ee.key, { x: Ye.x, y: Ye.y });
    }), { satPositions: H, proteinPositions: oe };
  }, [y, M, Z, A]);
  Jt.useEffect(() => {
    if (je || !F.current || !y.length || nt.size === 0) return;
    const H = [], oe = [];
    for (const { x: Zt, y: Qt } of nt.values())
      H.push(Zt), oe.push(Qt);
    for (const { x: Zt, y: Qt } of Et.values())
      H.push(Zt), oe.push(Qt);
    if (!H.length) return;
    let ge = Math.min(...H), Se = Math.max(...H), _e = Math.min(...oe), Re = Math.max(...oe);
    const Ze = 80;
    ge -= Ze, Se += Ze, _e -= Ze, Re += Ze;
    let Ee = Math.max(Se - ge || 1, 900), Ye = Math.max(Re - _e || 1, 500);
    const ct = F.current.parentElement;
    if (!ct) {
      const Qt = ge + Ee / 2, Dn = _e + Ye / 2;
      Ee *= 1.18, Ye *= 1.18, ge = Qt - Ee / 2, _e = Dn - Ye / 2, We({ x: ge, y: _e, w: Ee, h: Ye }), ot(!0);
      return;
    }
    const qt = ct.getBoundingClientRect(), cn = qt.width / qt.height;
    if (Ee / Ye > cn) {
      const Zt = Ee / cn, Qt = Zt - Ye;
      _e -= Qt / 2, Ye = Zt;
    } else {
      const Zt = Ye * cn, Qt = Zt - Ee;
      ge -= Qt / 2, Ee = Zt;
    }
    const ir = 1.18, _a = ge + Ee / 2, kr = _e + Ye / 2;
    Ee *= ir, Ye *= ir, ge = _a - Ee / 2, _e = kr - Ye / 2, We({ x: ge, y: _e, w: Ee, h: Ye }), ot(!0);
  }, [nt, Et, y.length, je]);
  const mt = Jt.useMemo(() => {
    const H = [];
    for (const [oe, ge] of K.entries()) {
      const Se = nt.get(oe);
      if (Se)
        for (const _e of ge) {
          const Re = Et.get(_e.key);
          Re && H.push({ a: Re, b: Se });
        }
    }
    return H;
  }, [K, nt, Et]), Fe = Jt.useMemo(() => {
    const H = [];
    for (const [, oe] of Z.entries()) {
      const ge = oe.map((Se) => Et.get(Se.key)).filter(Boolean);
      for (let Se = 0; Se < ge.length - 1; Se++)
        H.push({ a: ge[Se], b: ge[Se + 1] });
    }
    return H;
  }, [Z, Et]), Ft = `${ve.x} ${ve.y} ${ve.w} ${ve.h}`;
  return !y.length && !M.length ? /* @__PURE__ */ Pt.jsx("p", { children: "Enrichment data doesn't exist" }) : /* @__PURE__ */ Pt.jsxs(
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
        /* @__PURE__ */ Pt.jsxs(
          "svg",
          {
            ref: F,
            viewBox: Ft,
            onWheel: ht,
            style: { width: "100%", height: "100%", display: "block" },
            children: [
              /* @__PURE__ */ Pt.jsx(
                "rect",
                {
                  x: ve.x - ve.w,
                  y: ve.y - ve.h,
                  width: ve.w * 3,
                  height: ve.h * 3,
                  fill: "transparent",
                  style: { cursor: fe ? "grabbing" : "grab" },
                  onMouseDown: (H) => {
                    H.button === 0 && (Ce(!0), ce.current = {
                      clientX: H.clientX,
                      clientY: H.clientY,
                      viewX: ve.x,
                      viewY: ve.y
                    });
                  },
                  onMouseMove: (H) => {
                    if (!fe) return;
                    const oe = F.current.getBoundingClientRect(), ge = ve.w / oe.width, Se = ve.h / oe.height, _e = (H.clientX - ce.current.clientX) * ge, Re = (H.clientY - ce.current.clientY) * Se;
                    We((Ze) => ({
                      ...Ze,
                      x: ce.current.viewX - _e,
                      y: ce.current.viewY - Re
                    }));
                  },
                  onMouseUp: () => Ce(!1),
                  onMouseLeave: () => Ce(!1)
                }
              ),
              /* @__PURE__ */ Pt.jsx("g", { children: Fe.map((H, oe) => /* @__PURE__ */ Pt.jsx(
                "line",
                {
                  x1: H.a.x,
                  y1: H.a.y,
                  x2: H.b.x,
                  y2: H.b.y,
                  stroke: "#888",
                  strokeDasharray: "4 4",
                  strokeWidth: "1",
                  opacity: "0.6"
                },
                `clone-${oe}`
              )) }),
              /* @__PURE__ */ Pt.jsx("g", { children: mt.map((H, oe) => /* @__PURE__ */ Pt.jsx(
                "line",
                {
                  x1: H.a.x,
                  y1: H.a.y,
                  x2: H.b.x,
                  y2: H.b.y,
                  stroke: "#bdbdbd",
                  strokeWidth: "1.2"
                },
                `ps-${oe}`
              )) }),
              /* @__PURE__ */ Pt.jsx("g", { children: y.map((H) => {
                var Ze, Ee, Ye, ct;
                const oe = nt.get(H.key) || { x: 0, y: 0 }, ge = Number(((Ze = H.attributes) == null ? void 0 : Ze.size) ?? 30), Se = ((Ee = H.attributes) == null ? void 0 : Ee.color) || "#888", _e = ((Ye = H.attributes) == null ? void 0 : Ye.label) || H.key, Re = ((ct = H.attributes) == null ? void 0 : ct.url) || null;
                return /* @__PURE__ */ Pt.jsxs("g", { transform: `translate(${oe.x},${oe.y})`, children: [
                  /* @__PURE__ */ Pt.jsx(
                    "circle",
                    {
                      r: ge,
                      fill: Se,
                      opacity: "1",
                      style: { cursor: Re ? "pointer" : "default" },
                      onMouseEnter: () => re({ type: "repeat", node: H }),
                      onMouseLeave: () => re(null),
                      onClick: () => Re && window.open(Re, "_blank")
                    }
                  ),
                  /* @__PURE__ */ Pt.jsx(
                    "text",
                    {
                      x: 0,
                      y: 0,
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                      fill: "#fff",
                      fontSize: "20",
                      fontWeight: "600",
                      style: { cursor: Re ? "pointer" : "default", userSelect: "none" },
                      onMouseEnter: () => re({ type: "repeat", node: H }),
                      onMouseLeave: () => re(null),
                      onClick: () => Re && window.open(Re, "_blank"),
                      children: _e
                    }
                  )
                ] }, H.key);
              }) }),
              /* @__PURE__ */ Pt.jsx("g", { children: M.filter((H) => {
                var oe;
                return Number(((oe = H.attributes) == null ? void 0 : oe.enrichment) || 0) >= A;
              }).map((H) => {
                var Re, Ze, Ee;
                const oe = Et.get(H.key) || { x: 0, y: 0 }, ge = Number(((Re = H.attributes) == null ? void 0 : Re.size) ?? 6), Se = ((Ze = H.attributes) == null ? void 0 : Ze.color) || "#9DD6FB", _e = ((Ee = H.attributes) == null ? void 0 : Ee.url) || null;
                return /* @__PURE__ */ Pt.jsx(
                  "circle",
                  {
                    cx: oe.x,
                    cy: oe.y,
                    r: ge,
                    fill: Se,
                    style: { cursor: _e ? "pointer" : "default" },
                    onMouseEnter: () => re({ type: "protein", node: H }),
                    onMouseLeave: () => re(null),
                    onClick: () => _e && window.open(_e, "_blank")
                  },
                  H.key
                );
              }) })
            ]
          }
        ),
        $ && /* @__PURE__ */ Pt.jsx(
          "div",
          {
            role: "tooltip",
            style: {
              position: "fixed",
              left: he.x + 12,
              top: he.y + 12,
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
            children: $.type === "repeat" ? /* @__PURE__ */ Pt.jsxs("div", { children: [
              /* @__PURE__ */ Pt.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: ((Dt = $.node.attributes) == null ? void 0 : Dt.label) || $.node.key }),
              /* @__PURE__ */ Pt.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Satellite (repeat)" }),
              ((Mt = $.node.attributes) == null ? void 0 : Mt.aliases) && /* @__PURE__ */ Pt.jsxs("div", { children: [
                /* @__PURE__ */ Pt.jsx("b", { children: "Aliases:" }),
                " ",
                String($.node.attributes.aliases)
              ] }),
              ((He = $.node.attributes) == null ? void 0 : He.dfam_id) != null && /* @__PURE__ */ Pt.jsxs("div", { children: [
                /* @__PURE__ */ Pt.jsx("b", { children: "Dfam:" }),
                " ",
                String($.node.attributes.dfam_id)
              ] }),
              ((me = $.node.attributes) == null ? void 0 : me.url) && /* @__PURE__ */ Pt.jsx(
                "div",
                {
                  style: {
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer"
                  },
                  onClick: () => window.open($.node.attributes.url, "_blank"),
                  children: "Open page"
                }
              )
            ] }) : /* @__PURE__ */ Pt.jsxs("div", { children: [
              /* @__PURE__ */ Pt.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: ($e = $.node.attributes) == null ? void 0 : $e.label }),
              /* @__PURE__ */ Pt.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Transcription factor" }),
              ((we = $.node.attributes) == null ? void 0 : we.gene_family) && /* @__PURE__ */ Pt.jsxs("div", { children: [
                /* @__PURE__ */ Pt.jsx("b", { children: "Family:" }),
                " ",
                String($.node.attributes.gene_family)
              ] }),
              ((O = $.node.attributes) == null ? void 0 : O.enrichment) != null && /* @__PURE__ */ Pt.jsxs("div", { children: [
                /* @__PURE__ */ Pt.jsx("b", { children: "Enrichment:" }),
                " ",
                String($.node.attributes.enrichment)
              ] }),
              ((q = $.node.attributes) == null ? void 0 : q.aliases) && /* @__PURE__ */ Pt.jsxs("div", { children: [
                /* @__PURE__ */ Pt.jsx("b", { children: "Aliases:" }),
                " ",
                String($.node.attributes.aliases)
              ] }),
              ((rt = $.node.attributes) == null ? void 0 : rt.url) && /* @__PURE__ */ Pt.jsx(
                "div",
                {
                  style: {
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer"
                  },
                  onClick: () => window.open($.node.attributes.url, "_blank"),
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
const UT = document.getElementById("network-container");
if (!UT) throw new Error('Missing <div id="network-container"> in index.html');
const ED = k0(UT);
ED.render(
  /* @__PURE__ */ Pt.jsx(_k.StrictMode, { children: /* @__PURE__ */ Pt.jsx(SD, {}) })
);
