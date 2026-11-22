function xk(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var T0 = { exports: {} }, rv = {}, b0 = { exports: {} }, Vt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var px;
function wk() {
  if (px) return Vt;
  px = 1;
  var S = Symbol.for("react.element"), R = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), Y = Symbol.for("react.provider"), y = Symbol.for("react.context"), ye = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), M = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), X = Symbol.iterator;
  function Z(O) {
    return O === null || typeof O != "object" ? null : (O = X && O[X] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ge = Object.assign, ee = {};
  function A(O, q, ot) {
    this.props = O, this.context = q, this.refs = ee, this.updater = ot || F;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(O, q) {
    if (typeof O != "object" && typeof O != "function" && O != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, O, q, "setState");
  }, A.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function re() {
  }
  re.prototype = A.prototype;
  function fe(O, q, ot) {
    this.props = O, this.context = q, this.refs = ee, this.updater = ot || F;
  }
  var Re = fe.prototype = new re();
  Re.constructor = fe, ge(Re, A.prototype), Re.isPureReactComponent = !0;
  var ce = Array.isArray, me = Object.prototype.hasOwnProperty, qe = { current: null }, Be = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ht(O, q, ot) {
    var at, Dt = {}, Tt = null, Et = null;
    if (q != null) for (at in q.ref !== void 0 && (Et = q.ref), q.key !== void 0 && (Tt = "" + q.key), q) me.call(q, at) && !Be.hasOwnProperty(at) && (Dt[at] = q[at]);
    var bt = arguments.length - 2;
    if (bt === 1) Dt.children = ot;
    else if (1 < bt) {
      for (var Ot = Array(bt), H = 0; H < bt; H++) Ot[H] = arguments[H + 2];
      Dt.children = Ot;
    }
    if (O && O.defaultProps) for (at in bt = O.defaultProps, bt) Dt[at] === void 0 && (Dt[at] = bt[at]);
    return { $$typeof: S, type: O, key: Tt, ref: Et, props: Dt, _owner: qe.current };
  }
  function xt(O, q) {
    return { $$typeof: S, type: O.type, key: q, ref: O.ref, props: O.props, _owner: O._owner };
  }
  function rt(O) {
    return typeof O == "object" && O !== null && O.$$typeof === S;
  }
  function Nt(O) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(ot) {
      return q[ot];
    });
  }
  var wt = /\/+/g;
  function $e(O, q) {
    return typeof O == "object" && O !== null && O.key != null ? Nt("" + O.key) : q.toString(36);
  }
  function Jt(O, q, ot, at, Dt) {
    var Tt = typeof O;
    (Tt === "undefined" || Tt === "boolean") && (O = null);
    var Et = !1;
    if (O === null) Et = !0;
    else switch (Tt) {
      case "string":
      case "number":
        Et = !0;
        break;
      case "object":
        switch (O.$$typeof) {
          case S:
          case R:
            Et = !0;
        }
    }
    if (Et) return Et = O, Dt = Dt(Et), O = at === "" ? "." + $e(Et, 0) : at, ce(Dt) ? (ot = "", O != null && (ot = O.replace(wt, "$&/") + "/"), Jt(Dt, q, ot, "", function(H) {
      return H;
    })) : Dt != null && (rt(Dt) && (Dt = xt(Dt, ot + (!Dt.key || Et && Et.key === Dt.key ? "" : ("" + Dt.key).replace(wt, "$&/") + "/") + O)), q.push(Dt)), 1;
    if (Et = 0, at = at === "" ? "." : at + ":", ce(O)) for (var bt = 0; bt < O.length; bt++) {
      Tt = O[bt];
      var Ot = at + $e(Tt, bt);
      Et += Jt(Tt, q, ot, Ot, Dt);
    }
    else if (Ot = Z(O), typeof Ot == "function") for (O = Ot.call(O), bt = 0; !(Tt = O.next()).done; ) Tt = Tt.value, Ot = at + $e(Tt, bt++), Et += Jt(Tt, q, ot, Ot, Dt);
    else if (Tt === "object") throw q = String(O), Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.");
    return Et;
  }
  function Bt(O, q, ot) {
    if (O == null) return O;
    var at = [], Dt = 0;
    return Jt(O, at, "", "", function(Tt) {
      return q.call(ot, Tt, Dt++);
    }), at;
  }
  function Kt(O) {
    if (O._status === -1) {
      var q = O._result;
      q = q(), q.then(function(ot) {
        (O._status === 0 || O._status === -1) && (O._status = 1, O._result = ot);
      }, function(ot) {
        (O._status === 0 || O._status === -1) && (O._status = 2, O._result = ot);
      }), O._status === -1 && (O._status = 0, O._result = q);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var Ie = { current: null }, Se = { transition: null }, Xe = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: Se, ReactCurrentOwner: qe };
  function Te() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Vt.Children = { map: Bt, forEach: function(O, q, ot) {
    Bt(O, function() {
      q.apply(this, arguments);
    }, ot);
  }, count: function(O) {
    var q = 0;
    return Bt(O, function() {
      q++;
    }), q;
  }, toArray: function(O) {
    return Bt(O, function(q) {
      return q;
    }) || [];
  }, only: function(O) {
    if (!rt(O)) throw Error("React.Children.only expected to receive a single React element child.");
    return O;
  } }, Vt.Component = A, Vt.Fragment = E, Vt.Profiler = P, Vt.PureComponent = fe, Vt.StrictMode = j, Vt.Suspense = K, Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xe, Vt.act = Te, Vt.cloneElement = function(O, q, ot) {
    if (O == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + O + ".");
    var at = ge({}, O.props), Dt = O.key, Tt = O.ref, Et = O._owner;
    if (q != null) {
      if (q.ref !== void 0 && (Tt = q.ref, Et = qe.current), q.key !== void 0 && (Dt = "" + q.key), O.type && O.type.defaultProps) var bt = O.type.defaultProps;
      for (Ot in q) me.call(q, Ot) && !Be.hasOwnProperty(Ot) && (at[Ot] = q[Ot] === void 0 && bt !== void 0 ? bt[Ot] : q[Ot]);
    }
    var Ot = arguments.length - 2;
    if (Ot === 1) at.children = ot;
    else if (1 < Ot) {
      bt = Array(Ot);
      for (var H = 0; H < Ot; H++) bt[H] = arguments[H + 2];
      at.children = bt;
    }
    return { $$typeof: S, type: O.type, key: Dt, ref: Tt, props: at, _owner: Et };
  }, Vt.createContext = function(O) {
    return O = { $$typeof: y, _currentValue: O, _currentValue2: O, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, O.Provider = { $$typeof: Y, _context: O }, O.Consumer = O;
  }, Vt.createElement = ht, Vt.createFactory = function(O) {
    var q = ht.bind(null, O);
    return q.type = O, q;
  }, Vt.createRef = function() {
    return { current: null };
  }, Vt.forwardRef = function(O) {
    return { $$typeof: ye, render: O };
  }, Vt.isValidElement = rt, Vt.lazy = function(O) {
    return { $$typeof: ve, _payload: { _status: -1, _result: O }, _init: Kt };
  }, Vt.memo = function(O, q) {
    return { $$typeof: M, type: O, compare: q === void 0 ? null : q };
  }, Vt.startTransition = function(O) {
    var q = Se.transition;
    Se.transition = {};
    try {
      O();
    } finally {
      Se.transition = q;
    }
  }, Vt.unstable_act = Te, Vt.useCallback = function(O, q) {
    return Ie.current.useCallback(O, q);
  }, Vt.useContext = function(O) {
    return Ie.current.useContext(O);
  }, Vt.useDebugValue = function() {
  }, Vt.useDeferredValue = function(O) {
    return Ie.current.useDeferredValue(O);
  }, Vt.useEffect = function(O, q) {
    return Ie.current.useEffect(O, q);
  }, Vt.useId = function() {
    return Ie.current.useId();
  }, Vt.useImperativeHandle = function(O, q, ot) {
    return Ie.current.useImperativeHandle(O, q, ot);
  }, Vt.useInsertionEffect = function(O, q) {
    return Ie.current.useInsertionEffect(O, q);
  }, Vt.useLayoutEffect = function(O, q) {
    return Ie.current.useLayoutEffect(O, q);
  }, Vt.useMemo = function(O, q) {
    return Ie.current.useMemo(O, q);
  }, Vt.useReducer = function(O, q, ot) {
    return Ie.current.useReducer(O, q, ot);
  }, Vt.useRef = function(O) {
    return Ie.current.useRef(O);
  }, Vt.useState = function(O) {
    return Ie.current.useState(O);
  }, Vt.useSyncExternalStore = function(O, q, ot) {
    return Ie.current.useSyncExternalStore(O, q, ot);
  }, Vt.useTransition = function() {
    return Ie.current.useTransition();
  }, Vt.version = "18.3.1", Vt;
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
var vx;
function Tk() {
  return vx || (vx = 1, function(S, R) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var E = "18.3.1", j = Symbol.for("react.element"), P = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), ye = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), M = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), A = Symbol.iterator, re = "@@iterator";
      function fe(h) {
        if (h === null || typeof h != "object")
          return null;
        var w = A && h[A] || h[re];
        return typeof w == "function" ? w : null;
      }
      var Re = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {
        transition: null
      }, me = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, qe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Be = {}, ht = null;
      function xt(h) {
        ht = h;
      }
      Be.setExtraStackFrame = function(h) {
        ht = h;
      }, Be.getCurrentStack = null, Be.getStackAddendum = function() {
        var h = "";
        ht && (h += ht);
        var w = Be.getCurrentStack;
        return w && (h += w() || ""), h;
      };
      var rt = !1, Nt = !1, wt = !1, $e = !1, Jt = !1, Bt = {
        ReactCurrentDispatcher: Re,
        ReactCurrentBatchConfig: ce,
        ReactCurrentOwner: qe
      };
      Bt.ReactDebugCurrentFrame = Be, Bt.ReactCurrentActQueue = me;
      function Kt(h) {
        {
          for (var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), W = 1; W < w; W++)
            B[W - 1] = arguments[W];
          Se("warn", h, B);
        }
      }
      function Ie(h) {
        {
          for (var w = arguments.length, B = new Array(w > 1 ? w - 1 : 0), W = 1; W < w; W++)
            B[W - 1] = arguments[W];
          Se("error", h, B);
        }
      }
      function Se(h, w, B) {
        {
          var W = Bt.ReactDebugCurrentFrame, Ce = W.getStackAddendum();
          Ce !== "" && (w += "%s", B = B.concat([Ce]));
          var it = B.map(function(De) {
            return String(De);
          });
          it.unshift("Warning: " + w), Function.prototype.apply.call(console[h], console, it);
        }
      }
      var Xe = {};
      function Te(h, w) {
        {
          var B = h.constructor, W = B && (B.displayName || B.name) || "ReactClass", Ce = W + "." + w;
          if (Xe[Ce])
            return;
          Ie("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", w, W), Xe[Ce] = !0;
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
        enqueueForceUpdate: function(h, w, B) {
          Te(h, "forceUpdate");
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
        enqueueReplaceState: function(h, w, B, W) {
          Te(h, "replaceState");
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
        enqueueSetState: function(h, w, B, W) {
          Te(h, "setState");
        }
      }, q = Object.assign, ot = {};
      Object.freeze(ot);
      function at(h, w, B) {
        this.props = h, this.context = w, this.refs = ot, this.updater = B || O;
      }
      at.prototype.isReactComponent = {}, at.prototype.setState = function(h, w) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, w, "setState");
      }, at.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Dt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Tt = function(h, w) {
          Object.defineProperty(at.prototype, h, {
            get: function() {
              Kt("%s(...) is deprecated in plain JavaScript React classes. %s", w[0], w[1]);
            }
          });
        };
        for (var Et in Dt)
          Dt.hasOwnProperty(Et) && Tt(Et, Dt[Et]);
      }
      function bt() {
      }
      bt.prototype = at.prototype;
      function Ot(h, w, B) {
        this.props = h, this.context = w, this.refs = ot, this.updater = B || O;
      }
      var H = Ot.prototype = new bt();
      H.constructor = Ot, q(H, at.prototype), H.isPureReactComponent = !0;
      function oe() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Ne = Array.isArray;
      function _e(h) {
        return Ne(h);
      }
      function xe(h) {
        {
          var w = typeof Symbol == "function" && Symbol.toStringTag, B = w && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return B;
        }
      }
      function be(h) {
        try {
          return Fe(h), !1;
        } catch {
          return !0;
        }
      }
      function Fe(h) {
        return "" + h;
      }
      function Ge(h) {
        if (be(h))
          return Ie("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xe(h)), Fe(h);
      }
      function et(h, w, B) {
        var W = h.displayName;
        if (W)
          return W;
        var Ce = w.displayName || w.name || "";
        return Ce !== "" ? B + "(" + Ce + ")" : B;
      }
      function ft(h) {
        return h.displayName || "Context";
      }
      function Xt(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ie("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Y:
            return "Fragment";
          case P:
            return "Portal";
          case ye:
            return "Profiler";
          case y:
            return "StrictMode";
          case X:
            return "Suspense";
          case Z:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case M:
              var w = h;
              return ft(w) + ".Consumer";
            case K:
              var B = h;
              return ft(B._context) + ".Provider";
            case ve:
              return et(h, h.render, "ForwardRef");
            case F:
              var W = h.displayName || null;
              return W !== null ? W : Xt(h.type) || "Memo";
            case ge: {
              var Ce = h, it = Ce._payload, De = Ce._init;
              try {
                return Xt(De(it));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var $t = Object.prototype.hasOwnProperty, cn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, yn, In, hn;
      hn = {};
      function Ht(h) {
        if ($t.call(h, "ref")) {
          var w = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sn(h) {
        if ($t.call(h, "key")) {
          var w = Object.getOwnPropertyDescriptor(h, "key").get;
          if (w && w.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function jn(h, w) {
        var B = function() {
          yn || (yn = !0, Ie("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        B.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: B,
          configurable: !0
        });
      }
      function On(h, w) {
        var B = function() {
          In || (In = !0, Ie("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        B.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: B,
          configurable: !0
        });
      }
      function he(h) {
        if (typeof h.ref == "string" && qe.current && h.__self && qe.current.stateNode !== h.__self) {
          var w = Xt(qe.current.type);
          hn[w] || (Ie('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w, h.ref), hn[w] = !0);
        }
      }
      var Oe = function(h, w, B, W, Ce, it, De) {
        var st = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: j,
          // Built-in properties that belong on the element
          type: h,
          key: w,
          ref: B,
          props: De,
          // Record the component responsible for creating this element.
          _owner: it
        };
        return st._store = {}, Object.defineProperty(st._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(st, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: W
        }), Object.defineProperty(st, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Ce
        }), Object.freeze && (Object.freeze(st.props), Object.freeze(st)), st;
      };
      function pt(h, w, B) {
        var W, Ce = {}, it = null, De = null, st = null, Ft = null;
        if (w != null) {
          Ht(w) && (De = w.ref, he(w)), sn(w) && (Ge(w.key), it = "" + w.key), st = w.__self === void 0 ? null : w.__self, Ft = w.__source === void 0 ? null : w.__source;
          for (W in w)
            $t.call(w, W) && !cn.hasOwnProperty(W) && (Ce[W] = w[W]);
        }
        var Zt = arguments.length - 2;
        if (Zt === 1)
          Ce.children = B;
        else if (Zt > 1) {
          for (var kn = Array(Zt), Sn = 0; Sn < Zt; Sn++)
            kn[Sn] = arguments[Sn + 2];
          Object.freeze && Object.freeze(kn), Ce.children = kn;
        }
        if (h && h.defaultProps) {
          var zt = h.defaultProps;
          for (W in zt)
            Ce[W] === void 0 && (Ce[W] = zt[W]);
        }
        if (it || De) {
          var En = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          it && jn(Ce, En), De && On(Ce, En);
        }
        return Oe(h, it, De, st, Ft, qe.current, Ce);
      }
      function It(h, w) {
        var B = Oe(h.type, w, h.ref, h._self, h._source, h._owner, h.props);
        return B;
      }
      function fn(h, w, B) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var W, Ce = q({}, h.props), it = h.key, De = h.ref, st = h._self, Ft = h._source, Zt = h._owner;
        if (w != null) {
          Ht(w) && (De = w.ref, Zt = qe.current), sn(w) && (Ge(w.key), it = "" + w.key);
          var kn;
          h.type && h.type.defaultProps && (kn = h.type.defaultProps);
          for (W in w)
            $t.call(w, W) && !cn.hasOwnProperty(W) && (w[W] === void 0 && kn !== void 0 ? Ce[W] = kn[W] : Ce[W] = w[W]);
        }
        var Sn = arguments.length - 2;
        if (Sn === 1)
          Ce.children = B;
        else if (Sn > 1) {
          for (var zt = Array(Sn), En = 0; En < Sn; En++)
            zt[En] = arguments[En + 2];
          Ce.children = zt;
        }
        return Oe(h.type, it, De, st, Ft, Zt, Ce);
      }
      function Mn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === j;
      }
      var wn = ".", te = ":";
      function se(h) {
        var w = /[=:]/g, B = {
          "=": "=0",
          ":": "=2"
        }, W = h.replace(w, function(Ce) {
          return B[Ce];
        });
        return "$" + W;
      }
      var Ee = !1, we = /\/+/g;
      function Ct(h) {
        return h.replace(we, "$&/");
      }
      function dn(h, w) {
        return typeof h == "object" && h !== null && h.key != null ? (Ge(h.key), se("" + h.key)) : w.toString(36);
      }
      function bn(h, w, B, W, Ce) {
        var it = typeof h;
        (it === "undefined" || it === "boolean") && (h = null);
        var De = !1;
        if (h === null)
          De = !0;
        else
          switch (it) {
            case "string":
            case "number":
              De = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case j:
                case P:
                  De = !0;
              }
          }
        if (De) {
          var st = h, Ft = Ce(st), Zt = W === "" ? wn + dn(st, 0) : W;
          if (_e(Ft)) {
            var kn = "";
            Zt != null && (kn = Ct(Zt) + "/"), bn(Ft, w, kn, "", function(td) {
              return td;
            });
          } else Ft != null && (Mn(Ft) && (Ft.key && (!st || st.key !== Ft.key) && Ge(Ft.key), Ft = It(
            Ft,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ft.key && (!st || st.key !== Ft.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ct("" + Ft.key) + "/"
            ) : "") + Zt
          )), w.push(Ft));
          return 1;
        }
        var Sn, zt, En = 0, Fn = W === "" ? wn : W + te;
        if (_e(h))
          for (var _l = 0; _l < h.length; _l++)
            Sn = h[_l], zt = Fn + dn(Sn, _l), En += bn(Sn, w, B, zt, Ce);
        else {
          var Zo = fe(h);
          if (typeof Zo == "function") {
            var Ki = h;
            Zo === Ki.entries && (Ee || Kt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ee = !0);
            for (var Jo = Zo.call(Ki), cu, ed = 0; !(cu = Jo.next()).done; )
              Sn = cu.value, zt = Fn + dn(Sn, ed++), En += bn(Sn, w, B, zt, Ce);
          } else if (it === "object") {
            var pc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (pc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : pc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return En;
      }
      function Sr(h, w, B) {
        if (h == null)
          return h;
        var W = [], Ce = 0;
        return bn(h, W, "", "", function(it) {
          return w.call(B, it, Ce++);
        }), W;
      }
      function Ar(h) {
        var w = 0;
        return Sr(h, function() {
          w++;
        }), w;
      }
      function ra(h, w, B) {
        Sr(h, function() {
          w.apply(this, arguments);
        }, B);
      }
      function Pr(h) {
        return Sr(h, function(w) {
          return w;
        }) || [];
      }
      function ti(h) {
        if (!Mn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ni(h) {
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
          $$typeof: K,
          _context: w
        };
        var B = !1, W = !1, Ce = !1;
        {
          var it = {
            $$typeof: M,
            _context: w
          };
          Object.defineProperties(it, {
            Provider: {
              get: function() {
                return W || (W = !0, Ie("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), w.Provider;
              },
              set: function(De) {
                w.Provider = De;
              }
            },
            _currentValue: {
              get: function() {
                return w._currentValue;
              },
              set: function(De) {
                w._currentValue = De;
              }
            },
            _currentValue2: {
              get: function() {
                return w._currentValue2;
              },
              set: function(De) {
                w._currentValue2 = De;
              }
            },
            _threadCount: {
              get: function() {
                return w._threadCount;
              },
              set: function(De) {
                w._threadCount = De;
              }
            },
            Consumer: {
              get: function() {
                return B || (B = !0, Ie("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), w.Consumer;
              }
            },
            displayName: {
              get: function() {
                return w.displayName;
              },
              set: function(De) {
                Ce || (Kt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", De), Ce = !0);
              }
            }
          }), w.Consumer = it;
        }
        return w._currentRenderer = null, w._currentRenderer2 = null, w;
      }
      var pr = -1, Er = 0, Yn = 1, Ei = 2;
      function ri(h) {
        if (h._status === pr) {
          var w = h._result, B = w();
          if (B.then(function(it) {
            if (h._status === Er || h._status === pr) {
              var De = h;
              De._status = Yn, De._result = it;
            }
          }, function(it) {
            if (h._status === Er || h._status === pr) {
              var De = h;
              De._status = Ei, De._result = it;
            }
          }), h._status === pr) {
            var W = h;
            W._status = Er, W._result = B;
          }
        }
        if (h._status === Yn) {
          var Ce = h._result;
          return Ce === void 0 && Ie(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Ce), "default" in Ce || Ie(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Ce), Ce.default;
        } else
          throw h._result;
      }
      function Ci(h) {
        var w = {
          // We use these fields to store the result.
          _status: pr,
          _result: h
        }, B = {
          $$typeof: ge,
          _payload: w,
          _init: ri
        };
        {
          var W, Ce;
          Object.defineProperties(B, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return W;
              },
              set: function(it) {
                Ie("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), W = it, Object.defineProperty(B, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Ce;
              },
              set: function(it) {
                Ie("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Ce = it, Object.defineProperty(B, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return B;
      }
      function Ri(h) {
        h != null && h.$$typeof === F ? Ie("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ie("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ie("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ie("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var w = {
          $$typeof: ve,
          render: h
        };
        {
          var B;
          Object.defineProperty(w, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(W) {
              B = W, !h.name && !h.displayName && (h.displayName = W);
            }
          });
        }
        return w;
      }
      var T;
      T = Symbol.for("react.module.reference");
      function ne(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Y || h === ye || Jt || h === y || h === X || h === Z || $e || h === ee || rt || Nt || wt || typeof h == "object" && h !== null && (h.$$typeof === ge || h.$$typeof === F || h.$$typeof === K || h.$$typeof === M || h.$$typeof === ve || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === T || h.getModuleId !== void 0));
      }
      function Me(h, w) {
        ne(h) || Ie("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var B = {
          $$typeof: F,
          type: h,
          compare: w === void 0 ? null : w
        };
        {
          var W;
          Object.defineProperty(B, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(Ce) {
              W = Ce, !h.name && !h.displayName && (h.displayName = Ce);
            }
          });
        }
        return B;
      }
      function Ve() {
        var h = Re.current;
        return h === null && Ie(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function _t(h) {
        var w = Ve();
        if (h._context !== void 0) {
          var B = h._context;
          B.Consumer === h ? Ie("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === h && Ie("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return w.useContext(h);
      }
      function gt(h) {
        var w = Ve();
        return w.useState(h);
      }
      function jt(h, w, B) {
        var W = Ve();
        return W.useReducer(h, w, B);
      }
      function At(h) {
        var w = Ve();
        return w.useRef(h);
      }
      function Wn(h, w) {
        var B = Ve();
        return B.useEffect(h, w);
      }
      function _n(h, w) {
        var B = Ve();
        return B.useInsertionEffect(h, w);
      }
      function Nn(h, w) {
        var B = Ve();
        return B.useLayoutEffect(h, w);
      }
      function Cr(h, w) {
        var B = Ve();
        return B.useCallback(h, w);
      }
      function ai(h, w) {
        var B = Ve();
        return B.useMemo(h, w);
      }
      function ii(h, w, B) {
        var W = Ve();
        return W.useImperativeHandle(h, w, B);
      }
      function kt(h, w) {
        {
          var B = Ve();
          return B.useDebugValue(h, w);
        }
      }
      function Lt() {
        var h = Ve();
        return h.useTransition();
      }
      function li(h) {
        var w = Ve();
        return w.useDeferredValue(h);
      }
      function au() {
        var h = Ve();
        return h.useId();
      }
      function iu(h, w, B) {
        var W = Ve();
        return W.useSyncExternalStore(h, w, B);
      }
      var El = 0, Ku, Cl, aa, Go, Vr, fc, dc;
      function Xu() {
      }
      Xu.__reactDisabledLog = !0;
      function Rl() {
        {
          if (El === 0) {
            Ku = console.log, Cl = console.info, aa = console.warn, Go = console.error, Vr = console.group, fc = console.groupCollapsed, dc = console.groupEnd;
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
      function Ca() {
        {
          if (El--, El === 0) {
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
                value: Cl
              }),
              warn: q({}, h, {
                value: aa
              }),
              error: q({}, h, {
                value: Go
              }),
              group: q({}, h, {
                value: Vr
              }),
              groupCollapsed: q({}, h, {
                value: fc
              }),
              groupEnd: q({}, h, {
                value: dc
              })
            });
          }
          El < 0 && Ie("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ui = Bt.ReactCurrentDispatcher, oi;
      function qu(h, w, B) {
        {
          if (oi === void 0)
            try {
              throw Error();
            } catch (Ce) {
              var W = Ce.stack.trim().match(/\n( *(at )?)/);
              oi = W && W[1] || "";
            }
          return `
` + oi + h;
        }
      }
      var lu = !1, xl;
      {
        var Zu = typeof WeakMap == "function" ? WeakMap : Map;
        xl = new Zu();
      }
      function Ju(h, w) {
        if (!h || lu)
          return "";
        {
          var B = xl.get(h);
          if (B !== void 0)
            return B;
        }
        var W;
        lu = !0;
        var Ce = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var it;
        it = ui.current, ui.current = null, Rl();
        try {
          if (w) {
            var De = function() {
              throw Error();
            };
            if (Object.defineProperty(De.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(De, []);
              } catch (Fn) {
                W = Fn;
              }
              Reflect.construct(h, [], De);
            } else {
              try {
                De.call();
              } catch (Fn) {
                W = Fn;
              }
              h.call(De.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Fn) {
              W = Fn;
            }
            h();
          }
        } catch (Fn) {
          if (Fn && W && typeof Fn.stack == "string") {
            for (var st = Fn.stack.split(`
`), Ft = W.stack.split(`
`), Zt = st.length - 1, kn = Ft.length - 1; Zt >= 1 && kn >= 0 && st[Zt] !== Ft[kn]; )
              kn--;
            for (; Zt >= 1 && kn >= 0; Zt--, kn--)
              if (st[Zt] !== Ft[kn]) {
                if (Zt !== 1 || kn !== 1)
                  do
                    if (Zt--, kn--, kn < 0 || st[Zt] !== Ft[kn]) {
                      var Sn = `
` + st[Zt].replace(" at new ", " at ");
                      return h.displayName && Sn.includes("<anonymous>") && (Sn = Sn.replace("<anonymous>", h.displayName)), typeof h == "function" && xl.set(h, Sn), Sn;
                    }
                  while (Zt >= 1 && kn >= 0);
                break;
              }
          }
        } finally {
          lu = !1, ui.current = it, Ca(), Error.prepareStackTrace = Ce;
        }
        var zt = h ? h.displayName || h.name : "", En = zt ? qu(zt) : "";
        return typeof h == "function" && xl.set(h, En), En;
      }
      function Qi(h, w, B) {
        return Ju(h, !1);
      }
      function Zf(h) {
        var w = h.prototype;
        return !!(w && w.isReactComponent);
      }
      function Gi(h, w, B) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Ju(h, Zf(h));
        if (typeof h == "string")
          return qu(h);
        switch (h) {
          case X:
            return qu("Suspense");
          case Z:
            return qu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ve:
              return Qi(h.render);
            case F:
              return Gi(h.type, w, B);
            case ge: {
              var W = h, Ce = W._payload, it = W._init;
              try {
                return Gi(it(Ce), w, B);
              } catch {
              }
            }
          }
        return "";
      }
      var nn = {}, eo = Bt.ReactDebugCurrentFrame;
      function qt(h) {
        if (h) {
          var w = h._owner, B = Gi(h.type, h._source, w ? w.type : null);
          eo.setExtraStackFrame(B);
        } else
          eo.setExtraStackFrame(null);
      }
      function Ko(h, w, B, W, Ce) {
        {
          var it = Function.call.bind($t);
          for (var De in h)
            if (it(h, De)) {
              var st = void 0;
              try {
                if (typeof h[De] != "function") {
                  var Ft = Error((W || "React class") + ": " + B + " type `" + De + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[De] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ft.name = "Invariant Violation", Ft;
                }
                st = h[De](w, De, W, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Zt) {
                st = Zt;
              }
              st && !(st instanceof Error) && (qt(Ce), Ie("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", B, De, typeof st), qt(null)), st instanceof Error && !(st.message in nn) && (nn[st.message] = !0, qt(Ce), Ie("Failed %s type: %s", B, st.message), qt(null));
            }
        }
      }
      function xi(h) {
        if (h) {
          var w = h._owner, B = Gi(h.type, h._source, w ? w.type : null);
          xt(B);
        } else
          xt(null);
      }
      var yt;
      yt = !1;
      function to() {
        if (qe.current) {
          var h = Xt(qe.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Rr(h) {
        if (h !== void 0) {
          var w = h.fileName.replace(/^.*[\\\/]/, ""), B = h.lineNumber;
          return `

Check your code at ` + w + ":" + B + ".";
        }
        return "";
      }
      function wi(h) {
        return h != null ? Rr(h.__source) : "";
      }
      var Br = {};
      function Ti(h) {
        var w = to();
        if (!w) {
          var B = typeof h == "string" ? h : h.displayName || h.name;
          B && (w = `

Check the top-level render call using <` + B + ">.");
        }
        return w;
      }
      function Ln(h, w) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var B = Ti(w);
          if (!Br[B]) {
            Br[B] = !0;
            var W = "";
            h && h._owner && h._owner !== qe.current && (W = " It was passed a child from " + Xt(h._owner.type) + "."), xi(h), Ie('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, W), xi(null);
          }
        }
      }
      function gn(h, w) {
        if (typeof h == "object") {
          if (_e(h))
            for (var B = 0; B < h.length; B++) {
              var W = h[B];
              Mn(W) && Ln(W, w);
            }
          else if (Mn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Ce = fe(h);
            if (typeof Ce == "function" && Ce !== h.entries)
              for (var it = Ce.call(h), De; !(De = it.next()).done; )
                Mn(De.value) && Ln(De.value, w);
          }
        }
      }
      function wl(h) {
        {
          var w = h.type;
          if (w == null || typeof w == "string")
            return;
          var B;
          if (typeof w == "function")
            B = w.propTypes;
          else if (typeof w == "object" && (w.$$typeof === ve || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          w.$$typeof === F))
            B = w.propTypes;
          else
            return;
          if (B) {
            var W = Xt(w);
            Ko(B, h.props, "prop", W, h);
          } else if (w.PropTypes !== void 0 && !yt) {
            yt = !0;
            var Ce = Xt(w);
            Ie("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ce || "Unknown");
          }
          typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && Ie("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function or(h) {
        {
          for (var w = Object.keys(h.props), B = 0; B < w.length; B++) {
            var W = w[B];
            if (W !== "children" && W !== "key") {
              xi(h), Ie("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), xi(null);
              break;
            }
          }
          h.ref !== null && (xi(h), Ie("Invalid attribute `ref` supplied to `React.Fragment`."), xi(null));
        }
      }
      function $r(h, w, B) {
        var W = ne(h);
        if (!W) {
          var Ce = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Ce += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var it = wi(w);
          it ? Ce += it : Ce += to();
          var De;
          h === null ? De = "null" : _e(h) ? De = "array" : h !== void 0 && h.$$typeof === j ? (De = "<" + (Xt(h.type) || "Unknown") + " />", Ce = " Did you accidentally export a JSX literal instead of a component?") : De = typeof h, Ie("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", De, Ce);
        }
        var st = pt.apply(this, arguments);
        if (st == null)
          return st;
        if (W)
          for (var Ft = 2; Ft < arguments.length; Ft++)
            gn(arguments[Ft], h);
        return h === Y ? or(st) : wl(st), st;
      }
      var Aa = !1;
      function uu(h) {
        var w = $r.bind(null, h);
        return w.type = h, Aa || (Aa = !0, Kt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(w, "type", {
          enumerable: !1,
          get: function() {
            return Kt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), w;
      }
      function Xo(h, w, B) {
        for (var W = fn.apply(this, arguments), Ce = 2; Ce < arguments.length; Ce++)
          gn(arguments[Ce], W.type);
        return wl(W), W;
      }
      function qo(h, w) {
        var B = ce.transition;
        ce.transition = {};
        var W = ce.transition;
        ce.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ce.transition = B, B === null && W._updatedFibers) {
            var Ce = W._updatedFibers.size;
            Ce > 10 && Kt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), W._updatedFibers.clear();
          }
        }
      }
      var Tl = !1, ou = null;
      function Jf(h) {
        if (ou === null)
          try {
            var w = ("require" + Math.random()).slice(0, 7), B = S && S[w];
            ou = B.call(S, "timers").setImmediate;
          } catch {
            ou = function(Ce) {
              Tl === !1 && (Tl = !0, typeof MessageChannel > "u" && Ie("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var it = new MessageChannel();
              it.port1.onmessage = Ce, it.port2.postMessage(void 0);
            };
          }
        return ou(h);
      }
      var Ua = 0, si = !1;
      function bi(h) {
        {
          var w = Ua;
          Ua++, me.current === null && (me.current = []);
          var B = me.isBatchingLegacy, W;
          try {
            if (me.isBatchingLegacy = !0, W = h(), !B && me.didScheduleLegacyUpdate) {
              var Ce = me.current;
              Ce !== null && (me.didScheduleLegacyUpdate = !1, bl(Ce));
            }
          } catch (zt) {
            throw ja(w), zt;
          } finally {
            me.isBatchingLegacy = B;
          }
          if (W !== null && typeof W == "object" && typeof W.then == "function") {
            var it = W, De = !1, st = {
              then: function(zt, En) {
                De = !0, it.then(function(Fn) {
                  ja(w), Ua === 0 ? no(Fn, zt, En) : zt(Fn);
                }, function(Fn) {
                  ja(w), En(Fn);
                });
              }
            };
            return !si && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              De || (si = !0, Ie("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), st;
          } else {
            var Ft = W;
            if (ja(w), Ua === 0) {
              var Zt = me.current;
              Zt !== null && (bl(Zt), me.current = null);
              var kn = {
                then: function(zt, En) {
                  me.current === null ? (me.current = [], no(Ft, zt, En)) : zt(Ft);
                }
              };
              return kn;
            } else {
              var Sn = {
                then: function(zt, En) {
                  zt(Ft);
                }
              };
              return Sn;
            }
          }
        }
      }
      function ja(h) {
        h !== Ua - 1 && Ie("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ua = h;
      }
      function no(h, w, B) {
        {
          var W = me.current;
          if (W !== null)
            try {
              bl(W), Jf(function() {
                W.length === 0 ? (me.current = null, w(h)) : no(h, w, B);
              });
            } catch (Ce) {
              B(Ce);
            }
          else
            w(h);
        }
      }
      var ro = !1;
      function bl(h) {
        if (!ro) {
          ro = !0;
          var w = 0;
          try {
            for (; w < h.length; w++) {
              var B = h[w];
              do
                B = B(!0);
              while (B !== null);
            }
            h.length = 0;
          } catch (W) {
            throw h = h.slice(w + 1), W;
          } finally {
            ro = !1;
          }
        }
      }
      var su = $r, ao = Xo, io = uu, ci = {
        map: Sr,
        forEach: ra,
        count: Ar,
        toArray: Pr,
        only: ti
      };
      R.Children = ci, R.Component = at, R.Fragment = Y, R.Profiler = ye, R.PureComponent = Ot, R.StrictMode = y, R.Suspense = X, R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bt, R.act = bi, R.cloneElement = ao, R.createContext = ni, R.createElement = su, R.createFactory = io, R.createRef = oe, R.forwardRef = Ri, R.isValidElement = Mn, R.lazy = Ci, R.memo = Me, R.startTransition = qo, R.unstable_act = bi, R.useCallback = Cr, R.useContext = _t, R.useDebugValue = kt, R.useDeferredValue = li, R.useEffect = Wn, R.useId = au, R.useImperativeHandle = ii, R.useInsertionEffect = _n, R.useLayoutEffect = Nn, R.useMemo = ai, R.useReducer = jt, R.useRef = At, R.useState = gt, R.useSyncExternalStore = iu, R.useTransition = Lt, R.version = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(lv, lv.exports)), lv.exports;
}
process.env.NODE_ENV === "production" ? b0.exports = wk() : b0.exports = Tk();
var mn = b0.exports;
const bk = /* @__PURE__ */ xk(mn);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hx;
function _k() {
  if (hx) return rv;
  hx = 1;
  var S = mn, R = Symbol.for("react.element"), E = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, P = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(ye, K, M) {
    var ve, X = {}, Z = null, F = null;
    M !== void 0 && (Z = "" + M), K.key !== void 0 && (Z = "" + K.key), K.ref !== void 0 && (F = K.ref);
    for (ve in K) j.call(K, ve) && !Y.hasOwnProperty(ve) && (X[ve] = K[ve]);
    if (ye && ye.defaultProps) for (ve in K = ye.defaultProps, K) X[ve] === void 0 && (X[ve] = K[ve]);
    return { $$typeof: R, type: ye, key: Z, ref: F, props: X, _owner: P.current };
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
var mx;
function kk() {
  return mx || (mx = 1, process.env.NODE_ENV !== "production" && function() {
    var S = mn, R = Symbol.for("react.element"), E = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), ye = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), ge = Symbol.iterator, ee = "@@iterator";
    function A(T) {
      if (T === null || typeof T != "object")
        return null;
      var ne = ge && T[ge] || T[ee];
      return typeof ne == "function" ? ne : null;
    }
    var re = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function fe(T) {
      {
        for (var ne = arguments.length, Me = new Array(ne > 1 ? ne - 1 : 0), Ve = 1; Ve < ne; Ve++)
          Me[Ve - 1] = arguments[Ve];
        Re("error", T, Me);
      }
    }
    function Re(T, ne, Me) {
      {
        var Ve = re.ReactDebugCurrentFrame, _t = Ve.getStackAddendum();
        _t !== "" && (ne += "%s", Me = Me.concat([_t]));
        var gt = Me.map(function(jt) {
          return String(jt);
        });
        gt.unshift("Warning: " + ne), Function.prototype.apply.call(console[T], console, gt);
      }
    }
    var ce = !1, me = !1, qe = !1, Be = !1, ht = !1, xt;
    xt = Symbol.for("react.module.reference");
    function rt(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === j || T === Y || ht || T === P || T === M || T === ve || Be || T === F || ce || me || qe || typeof T == "object" && T !== null && (T.$$typeof === Z || T.$$typeof === X || T.$$typeof === y || T.$$typeof === ye || T.$$typeof === K || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === xt || T.getModuleId !== void 0));
    }
    function Nt(T, ne, Me) {
      var Ve = T.displayName;
      if (Ve)
        return Ve;
      var _t = ne.displayName || ne.name || "";
      return _t !== "" ? Me + "(" + _t + ")" : Me;
    }
    function wt(T) {
      return T.displayName || "Context";
    }
    function $e(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && fe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case j:
          return "Fragment";
        case E:
          return "Portal";
        case Y:
          return "Profiler";
        case P:
          return "StrictMode";
        case M:
          return "Suspense";
        case ve:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case ye:
            var ne = T;
            return wt(ne) + ".Consumer";
          case y:
            var Me = T;
            return wt(Me._context) + ".Provider";
          case K:
            return Nt(T, T.render, "ForwardRef");
          case X:
            var Ve = T.displayName || null;
            return Ve !== null ? Ve : $e(T.type) || "Memo";
          case Z: {
            var _t = T, gt = _t._payload, jt = _t._init;
            try {
              return $e(jt(gt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Jt = Object.assign, Bt = 0, Kt, Ie, Se, Xe, Te, O, q;
    function ot() {
    }
    ot.__reactDisabledLog = !0;
    function at() {
      {
        if (Bt === 0) {
          Kt = console.log, Ie = console.info, Se = console.warn, Xe = console.error, Te = console.group, O = console.groupCollapsed, q = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: ot,
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
        Bt++;
      }
    }
    function Dt() {
      {
        if (Bt--, Bt === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Jt({}, T, {
              value: Kt
            }),
            info: Jt({}, T, {
              value: Ie
            }),
            warn: Jt({}, T, {
              value: Se
            }),
            error: Jt({}, T, {
              value: Xe
            }),
            group: Jt({}, T, {
              value: Te
            }),
            groupCollapsed: Jt({}, T, {
              value: O
            }),
            groupEnd: Jt({}, T, {
              value: q
            })
          });
        }
        Bt < 0 && fe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Tt = re.ReactCurrentDispatcher, Et;
    function bt(T, ne, Me) {
      {
        if (Et === void 0)
          try {
            throw Error();
          } catch (_t) {
            var Ve = _t.stack.trim().match(/\n( *(at )?)/);
            Et = Ve && Ve[1] || "";
          }
        return `
` + Et + T;
      }
    }
    var Ot = !1, H;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      H = new oe();
    }
    function Ne(T, ne) {
      if (!T || Ot)
        return "";
      {
        var Me = H.get(T);
        if (Me !== void 0)
          return Me;
      }
      var Ve;
      Ot = !0;
      var _t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var gt;
      gt = Tt.current, Tt.current = null, at();
      try {
        if (ne) {
          var jt = function() {
            throw Error();
          };
          if (Object.defineProperty(jt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(jt, []);
            } catch (kt) {
              Ve = kt;
            }
            Reflect.construct(T, [], jt);
          } else {
            try {
              jt.call();
            } catch (kt) {
              Ve = kt;
            }
            T.call(jt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kt) {
            Ve = kt;
          }
          T();
        }
      } catch (kt) {
        if (kt && Ve && typeof kt.stack == "string") {
          for (var At = kt.stack.split(`
`), Wn = Ve.stack.split(`
`), _n = At.length - 1, Nn = Wn.length - 1; _n >= 1 && Nn >= 0 && At[_n] !== Wn[Nn]; )
            Nn--;
          for (; _n >= 1 && Nn >= 0; _n--, Nn--)
            if (At[_n] !== Wn[Nn]) {
              if (_n !== 1 || Nn !== 1)
                do
                  if (_n--, Nn--, Nn < 0 || At[_n] !== Wn[Nn]) {
                    var Cr = `
` + At[_n].replace(" at new ", " at ");
                    return T.displayName && Cr.includes("<anonymous>") && (Cr = Cr.replace("<anonymous>", T.displayName)), typeof T == "function" && H.set(T, Cr), Cr;
                  }
                while (_n >= 1 && Nn >= 0);
              break;
            }
        }
      } finally {
        Ot = !1, Tt.current = gt, Dt(), Error.prepareStackTrace = _t;
      }
      var ai = T ? T.displayName || T.name : "", ii = ai ? bt(ai) : "";
      return typeof T == "function" && H.set(T, ii), ii;
    }
    function _e(T, ne, Me) {
      return Ne(T, !1);
    }
    function xe(T) {
      var ne = T.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function be(T, ne, Me) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return Ne(T, xe(T));
      if (typeof T == "string")
        return bt(T);
      switch (T) {
        case M:
          return bt("Suspense");
        case ve:
          return bt("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case K:
            return _e(T.render);
          case X:
            return be(T.type, ne, Me);
          case Z: {
            var Ve = T, _t = Ve._payload, gt = Ve._init;
            try {
              return be(gt(_t), ne, Me);
            } catch {
            }
          }
        }
      return "";
    }
    var Fe = Object.prototype.hasOwnProperty, Ge = {}, et = re.ReactDebugCurrentFrame;
    function ft(T) {
      if (T) {
        var ne = T._owner, Me = be(T.type, T._source, ne ? ne.type : null);
        et.setExtraStackFrame(Me);
      } else
        et.setExtraStackFrame(null);
    }
    function Xt(T, ne, Me, Ve, _t) {
      {
        var gt = Function.call.bind(Fe);
        for (var jt in T)
          if (gt(T, jt)) {
            var At = void 0;
            try {
              if (typeof T[jt] != "function") {
                var Wn = Error((Ve || "React class") + ": " + Me + " type `" + jt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[jt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Wn.name = "Invariant Violation", Wn;
              }
              At = T[jt](ne, jt, Ve, Me, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_n) {
              At = _n;
            }
            At && !(At instanceof Error) && (ft(_t), fe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ve || "React class", Me, jt, typeof At), ft(null)), At instanceof Error && !(At.message in Ge) && (Ge[At.message] = !0, ft(_t), fe("Failed %s type: %s", Me, At.message), ft(null));
          }
      }
    }
    var $t = Array.isArray;
    function cn(T) {
      return $t(T);
    }
    function yn(T) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, Me = ne && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return Me;
      }
    }
    function In(T) {
      try {
        return hn(T), !1;
      } catch {
        return !0;
      }
    }
    function hn(T) {
      return "" + T;
    }
    function Ht(T) {
      if (In(T))
        return fe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yn(T)), hn(T);
    }
    var sn = re.ReactCurrentOwner, jn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, On, he;
    function Oe(T) {
      if (Fe.call(T, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function pt(T) {
      if (Fe.call(T, "key")) {
        var ne = Object.getOwnPropertyDescriptor(T, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function It(T, ne) {
      typeof T.ref == "string" && sn.current;
    }
    function fn(T, ne) {
      {
        var Me = function() {
          On || (On = !0, fe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        Me.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: Me,
          configurable: !0
        });
      }
    }
    function Mn(T, ne) {
      {
        var Me = function() {
          he || (he = !0, fe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        Me.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: Me,
          configurable: !0
        });
      }
    }
    var wn = function(T, ne, Me, Ve, _t, gt, jt) {
      var At = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: T,
        key: ne,
        ref: Me,
        props: jt,
        // Record the component responsible for creating this element.
        _owner: gt
      };
      return At._store = {}, Object.defineProperty(At._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(At, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ve
      }), Object.defineProperty(At, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _t
      }), Object.freeze && (Object.freeze(At.props), Object.freeze(At)), At;
    };
    function te(T, ne, Me, Ve, _t) {
      {
        var gt, jt = {}, At = null, Wn = null;
        Me !== void 0 && (Ht(Me), At = "" + Me), pt(ne) && (Ht(ne.key), At = "" + ne.key), Oe(ne) && (Wn = ne.ref, It(ne, _t));
        for (gt in ne)
          Fe.call(ne, gt) && !jn.hasOwnProperty(gt) && (jt[gt] = ne[gt]);
        if (T && T.defaultProps) {
          var _n = T.defaultProps;
          for (gt in _n)
            jt[gt] === void 0 && (jt[gt] = _n[gt]);
        }
        if (At || Wn) {
          var Nn = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          At && fn(jt, Nn), Wn && Mn(jt, Nn);
        }
        return wn(T, At, Wn, _t, Ve, sn.current, jt);
      }
    }
    var se = re.ReactCurrentOwner, Ee = re.ReactDebugCurrentFrame;
    function we(T) {
      if (T) {
        var ne = T._owner, Me = be(T.type, T._source, ne ? ne.type : null);
        Ee.setExtraStackFrame(Me);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function dn(T) {
      return typeof T == "object" && T !== null && T.$$typeof === R;
    }
    function bn() {
      {
        if (se.current) {
          var T = $e(se.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function Sr(T) {
      return "";
    }
    var Ar = {};
    function ra(T) {
      {
        var ne = bn();
        if (!ne) {
          var Me = typeof T == "string" ? T : T.displayName || T.name;
          Me && (ne = `

Check the top-level render call using <` + Me + ">.");
        }
        return ne;
      }
    }
    function Pr(T, ne) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var Me = ra(ne);
        if (Ar[Me])
          return;
        Ar[Me] = !0;
        var Ve = "";
        T && T._owner && T._owner !== se.current && (Ve = " It was passed a child from " + $e(T._owner.type) + "."), we(T), fe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Me, Ve), we(null);
      }
    }
    function ti(T, ne) {
      {
        if (typeof T != "object")
          return;
        if (cn(T))
          for (var Me = 0; Me < T.length; Me++) {
            var Ve = T[Me];
            dn(Ve) && Pr(Ve, ne);
          }
        else if (dn(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var _t = A(T);
          if (typeof _t == "function" && _t !== T.entries)
            for (var gt = _t.call(T), jt; !(jt = gt.next()).done; )
              dn(jt.value) && Pr(jt.value, ne);
        }
      }
    }
    function ni(T) {
      {
        var ne = T.type;
        if (ne == null || typeof ne == "string")
          return;
        var Me;
        if (typeof ne == "function")
          Me = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === K || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === X))
          Me = ne.propTypes;
        else
          return;
        if (Me) {
          var Ve = $e(ne);
          Xt(Me, T.props, "prop", Ve, T);
        } else if (ne.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var _t = $e(ne);
          fe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _t || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && fe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(T) {
      {
        for (var ne = Object.keys(T.props), Me = 0; Me < ne.length; Me++) {
          var Ve = ne[Me];
          if (Ve !== "children" && Ve !== "key") {
            we(T), fe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ve), we(null);
            break;
          }
        }
        T.ref !== null && (we(T), fe("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    var Er = {};
    function Yn(T, ne, Me, Ve, _t, gt) {
      {
        var jt = rt(T);
        if (!jt) {
          var At = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (At += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Wn = Sr();
          Wn ? At += Wn : At += bn();
          var _n;
          T === null ? _n = "null" : cn(T) ? _n = "array" : T !== void 0 && T.$$typeof === R ? (_n = "<" + ($e(T.type) || "Unknown") + " />", At = " Did you accidentally export a JSX literal instead of a component?") : _n = typeof T, fe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _n, At);
        }
        var Nn = te(T, ne, Me, _t, gt);
        if (Nn == null)
          return Nn;
        if (jt) {
          var Cr = ne.children;
          if (Cr !== void 0)
            if (Ve)
              if (cn(Cr)) {
                for (var ai = 0; ai < Cr.length; ai++)
                  ti(Cr[ai], T);
                Object.freeze && Object.freeze(Cr);
              } else
                fe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ti(Cr, T);
        }
        if (Fe.call(ne, "key")) {
          var ii = $e(T), kt = Object.keys(ne).filter(function(au) {
            return au !== "key";
          }), Lt = kt.length > 0 ? "{key: someKey, " + kt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Er[ii + Lt]) {
            var li = kt.length > 0 ? "{" + kt.join(": ..., ") + ": ...}" : "{}";
            fe(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Lt, ii, li, ii), Er[ii + Lt] = !0;
          }
        }
        return T === j ? pr(Nn) : ni(Nn), Nn;
      }
    }
    function Ei(T, ne, Me) {
      return Yn(T, ne, Me, !0);
    }
    function ri(T, ne, Me) {
      return Yn(T, ne, Me, !1);
    }
    var Ci = ri, Ri = Ei;
    av.Fragment = j, av.jsx = Ci, av.jsxs = Ri;
  }()), av;
}
process.env.NODE_ENV === "production" ? T0.exports = _k() : T0.exports = kk();
var tn = T0.exports, _0 = { exports: {} }, Ja = {}, ty = { exports: {} }, x0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yx;
function Dk() {
  return yx || (yx = 1, function(S) {
    function R(Se, Xe) {
      var Te = Se.length;
      Se.push(Xe);
      e: for (; 0 < Te; ) {
        var O = Te - 1 >>> 1, q = Se[O];
        if (0 < P(q, Xe)) Se[O] = Xe, Se[Te] = q, Te = O;
        else break e;
      }
    }
    function E(Se) {
      return Se.length === 0 ? null : Se[0];
    }
    function j(Se) {
      if (Se.length === 0) return null;
      var Xe = Se[0], Te = Se.pop();
      if (Te !== Xe) {
        Se[0] = Te;
        e: for (var O = 0, q = Se.length, ot = q >>> 1; O < ot; ) {
          var at = 2 * (O + 1) - 1, Dt = Se[at], Tt = at + 1, Et = Se[Tt];
          if (0 > P(Dt, Te)) Tt < q && 0 > P(Et, Dt) ? (Se[O] = Et, Se[Tt] = Te, O = Tt) : (Se[O] = Dt, Se[at] = Te, O = at);
          else if (Tt < q && 0 > P(Et, Te)) Se[O] = Et, Se[Tt] = Te, O = Tt;
          else break e;
        }
      }
      return Xe;
    }
    function P(Se, Xe) {
      var Te = Se.sortIndex - Xe.sortIndex;
      return Te !== 0 ? Te : Se.id - Xe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Y = performance;
      S.unstable_now = function() {
        return Y.now();
      };
    } else {
      var y = Date, ye = y.now();
      S.unstable_now = function() {
        return y.now() - ye;
      };
    }
    var K = [], M = [], ve = 1, X = null, Z = 3, F = !1, ge = !1, ee = !1, A = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Re(Se) {
      for (var Xe = E(M); Xe !== null; ) {
        if (Xe.callback === null) j(M);
        else if (Xe.startTime <= Se) j(M), Xe.sortIndex = Xe.expirationTime, R(K, Xe);
        else break;
        Xe = E(M);
      }
    }
    function ce(Se) {
      if (ee = !1, Re(Se), !ge) if (E(K) !== null) ge = !0, Kt(me);
      else {
        var Xe = E(M);
        Xe !== null && Ie(ce, Xe.startTime - Se);
      }
    }
    function me(Se, Xe) {
      ge = !1, ee && (ee = !1, re(ht), ht = -1), F = !0;
      var Te = Z;
      try {
        for (Re(Xe), X = E(K); X !== null && (!(X.expirationTime > Xe) || Se && !Nt()); ) {
          var O = X.callback;
          if (typeof O == "function") {
            X.callback = null, Z = X.priorityLevel;
            var q = O(X.expirationTime <= Xe);
            Xe = S.unstable_now(), typeof q == "function" ? X.callback = q : X === E(K) && j(K), Re(Xe);
          } else j(K);
          X = E(K);
        }
        if (X !== null) var ot = !0;
        else {
          var at = E(M);
          at !== null && Ie(ce, at.startTime - Xe), ot = !1;
        }
        return ot;
      } finally {
        X = null, Z = Te, F = !1;
      }
    }
    var qe = !1, Be = null, ht = -1, xt = 5, rt = -1;
    function Nt() {
      return !(S.unstable_now() - rt < xt);
    }
    function wt() {
      if (Be !== null) {
        var Se = S.unstable_now();
        rt = Se;
        var Xe = !0;
        try {
          Xe = Be(!0, Se);
        } finally {
          Xe ? $e() : (qe = !1, Be = null);
        }
      } else qe = !1;
    }
    var $e;
    if (typeof fe == "function") $e = function() {
      fe(wt);
    };
    else if (typeof MessageChannel < "u") {
      var Jt = new MessageChannel(), Bt = Jt.port2;
      Jt.port1.onmessage = wt, $e = function() {
        Bt.postMessage(null);
      };
    } else $e = function() {
      A(wt, 0);
    };
    function Kt(Se) {
      Be = Se, qe || (qe = !0, $e());
    }
    function Ie(Se, Xe) {
      ht = A(function() {
        Se(S.unstable_now());
      }, Xe);
    }
    S.unstable_IdlePriority = 5, S.unstable_ImmediatePriority = 1, S.unstable_LowPriority = 4, S.unstable_NormalPriority = 3, S.unstable_Profiling = null, S.unstable_UserBlockingPriority = 2, S.unstable_cancelCallback = function(Se) {
      Se.callback = null;
    }, S.unstable_continueExecution = function() {
      ge || F || (ge = !0, Kt(me));
    }, S.unstable_forceFrameRate = function(Se) {
      0 > Se || 125 < Se ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : xt = 0 < Se ? Math.floor(1e3 / Se) : 5;
    }, S.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, S.unstable_getFirstCallbackNode = function() {
      return E(K);
    }, S.unstable_next = function(Se) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var Xe = 3;
          break;
        default:
          Xe = Z;
      }
      var Te = Z;
      Z = Xe;
      try {
        return Se();
      } finally {
        Z = Te;
      }
    }, S.unstable_pauseExecution = function() {
    }, S.unstable_requestPaint = function() {
    }, S.unstable_runWithPriority = function(Se, Xe) {
      switch (Se) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Se = 3;
      }
      var Te = Z;
      Z = Se;
      try {
        return Xe();
      } finally {
        Z = Te;
      }
    }, S.unstable_scheduleCallback = function(Se, Xe, Te) {
      var O = S.unstable_now();
      switch (typeof Te == "object" && Te !== null ? (Te = Te.delay, Te = typeof Te == "number" && 0 < Te ? O + Te : O) : Te = O, Se) {
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
      return q = Te + q, Se = { id: ve++, callback: Xe, priorityLevel: Se, startTime: Te, expirationTime: q, sortIndex: -1 }, Te > O ? (Se.sortIndex = Te, R(M, Se), E(K) === null && Se === E(M) && (ee ? (re(ht), ht = -1) : ee = !0, Ie(ce, Te - O))) : (Se.sortIndex = q, R(K, Se), ge || F || (ge = !0, Kt(me))), Se;
    }, S.unstable_shouldYield = Nt, S.unstable_wrapCallback = function(Se) {
      var Xe = Z;
      return function() {
        var Te = Z;
        Z = Xe;
        try {
          return Se.apply(this, arguments);
        } finally {
          Z = Te;
        }
      };
    };
  }(x0)), x0;
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
var gx;
function Ok() {
  return gx || (gx = 1, function(S) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var R = !1, E = 5;
      function j(he, Oe) {
        var pt = he.length;
        he.push(Oe), y(he, Oe, pt);
      }
      function P(he) {
        return he.length === 0 ? null : he[0];
      }
      function Y(he) {
        if (he.length === 0)
          return null;
        var Oe = he[0], pt = he.pop();
        return pt !== Oe && (he[0] = pt, ye(he, pt, 0)), Oe;
      }
      function y(he, Oe, pt) {
        for (var It = pt; It > 0; ) {
          var fn = It - 1 >>> 1, Mn = he[fn];
          if (K(Mn, Oe) > 0)
            he[fn] = Oe, he[It] = Mn, It = fn;
          else
            return;
        }
      }
      function ye(he, Oe, pt) {
        for (var It = pt, fn = he.length, Mn = fn >>> 1; It < Mn; ) {
          var wn = (It + 1) * 2 - 1, te = he[wn], se = wn + 1, Ee = he[se];
          if (K(te, Oe) < 0)
            se < fn && K(Ee, te) < 0 ? (he[It] = Ee, he[se] = Oe, It = se) : (he[It] = te, he[wn] = Oe, It = wn);
          else if (se < fn && K(Ee, Oe) < 0)
            he[It] = Ee, he[se] = Oe, It = se;
          else
            return;
        }
      }
      function K(he, Oe) {
        var pt = he.sortIndex - Oe.sortIndex;
        return pt !== 0 ? pt : he.id - Oe.id;
      }
      var M = 1, ve = 2, X = 3, Z = 4, F = 5;
      function ge(he, Oe) {
      }
      var ee = typeof performance == "object" && typeof performance.now == "function";
      if (ee) {
        var A = performance;
        S.unstable_now = function() {
          return A.now();
        };
      } else {
        var re = Date, fe = re.now();
        S.unstable_now = function() {
          return re.now() - fe;
        };
      }
      var Re = 1073741823, ce = -1, me = 250, qe = 5e3, Be = 1e4, ht = Re, xt = [], rt = [], Nt = 1, wt = null, $e = X, Jt = !1, Bt = !1, Kt = !1, Ie = typeof setTimeout == "function" ? setTimeout : null, Se = typeof clearTimeout == "function" ? clearTimeout : null, Xe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Te(he) {
        for (var Oe = P(rt); Oe !== null; ) {
          if (Oe.callback === null)
            Y(rt);
          else if (Oe.startTime <= he)
            Y(rt), Oe.sortIndex = Oe.expirationTime, j(xt, Oe);
          else
            return;
          Oe = P(rt);
        }
      }
      function O(he) {
        if (Kt = !1, Te(he), !Bt)
          if (P(xt) !== null)
            Bt = !0, hn(q);
          else {
            var Oe = P(rt);
            Oe !== null && Ht(O, Oe.startTime - he);
          }
      }
      function q(he, Oe) {
        Bt = !1, Kt && (Kt = !1, sn()), Jt = !0;
        var pt = $e;
        try {
          var It;
          if (!R) return ot(he, Oe);
        } finally {
          wt = null, $e = pt, Jt = !1;
        }
      }
      function ot(he, Oe) {
        var pt = Oe;
        for (Te(pt), wt = P(xt); wt !== null && !(wt.expirationTime > pt && (!he || et())); ) {
          var It = wt.callback;
          if (typeof It == "function") {
            wt.callback = null, $e = wt.priorityLevel;
            var fn = wt.expirationTime <= pt, Mn = It(fn);
            pt = S.unstable_now(), typeof Mn == "function" ? wt.callback = Mn : wt === P(xt) && Y(xt), Te(pt);
          } else
            Y(xt);
          wt = P(xt);
        }
        if (wt !== null)
          return !0;
        var wn = P(rt);
        return wn !== null && Ht(O, wn.startTime - pt), !1;
      }
      function at(he, Oe) {
        switch (he) {
          case M:
          case ve:
          case X:
          case Z:
          case F:
            break;
          default:
            he = X;
        }
        var pt = $e;
        $e = he;
        try {
          return Oe();
        } finally {
          $e = pt;
        }
      }
      function Dt(he) {
        var Oe;
        switch ($e) {
          case M:
          case ve:
          case X:
            Oe = X;
            break;
          default:
            Oe = $e;
            break;
        }
        var pt = $e;
        $e = Oe;
        try {
          return he();
        } finally {
          $e = pt;
        }
      }
      function Tt(he) {
        var Oe = $e;
        return function() {
          var pt = $e;
          $e = Oe;
          try {
            return he.apply(this, arguments);
          } finally {
            $e = pt;
          }
        };
      }
      function Et(he, Oe, pt) {
        var It = S.unstable_now(), fn;
        if (typeof pt == "object" && pt !== null) {
          var Mn = pt.delay;
          typeof Mn == "number" && Mn > 0 ? fn = It + Mn : fn = It;
        } else
          fn = It;
        var wn;
        switch (he) {
          case M:
            wn = ce;
            break;
          case ve:
            wn = me;
            break;
          case F:
            wn = ht;
            break;
          case Z:
            wn = Be;
            break;
          case X:
          default:
            wn = qe;
            break;
        }
        var te = fn + wn, se = {
          id: Nt++,
          callback: Oe,
          priorityLevel: he,
          startTime: fn,
          expirationTime: te,
          sortIndex: -1
        };
        return fn > It ? (se.sortIndex = fn, j(rt, se), P(xt) === null && se === P(rt) && (Kt ? sn() : Kt = !0, Ht(O, fn - It))) : (se.sortIndex = te, j(xt, se), !Bt && !Jt && (Bt = !0, hn(q))), se;
      }
      function bt() {
      }
      function Ot() {
        !Bt && !Jt && (Bt = !0, hn(q));
      }
      function H() {
        return P(xt);
      }
      function oe(he) {
        he.callback = null;
      }
      function Ne() {
        return $e;
      }
      var _e = !1, xe = null, be = -1, Fe = E, Ge = -1;
      function et() {
        var he = S.unstable_now() - Ge;
        return !(he < Fe);
      }
      function ft() {
      }
      function Xt(he) {
        if (he < 0 || he > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        he > 0 ? Fe = Math.floor(1e3 / he) : Fe = E;
      }
      var $t = function() {
        if (xe !== null) {
          var he = S.unstable_now();
          Ge = he;
          var Oe = !0, pt = !0;
          try {
            pt = xe(Oe, he);
          } finally {
            pt ? cn() : (_e = !1, xe = null);
          }
        } else
          _e = !1;
      }, cn;
      if (typeof Xe == "function")
        cn = function() {
          Xe($t);
        };
      else if (typeof MessageChannel < "u") {
        var yn = new MessageChannel(), In = yn.port2;
        yn.port1.onmessage = $t, cn = function() {
          In.postMessage(null);
        };
      } else
        cn = function() {
          Ie($t, 0);
        };
      function hn(he) {
        xe = he, _e || (_e = !0, cn());
      }
      function Ht(he, Oe) {
        be = Ie(function() {
          he(S.unstable_now());
        }, Oe);
      }
      function sn() {
        Se(be), be = -1;
      }
      var jn = ft, On = null;
      S.unstable_IdlePriority = F, S.unstable_ImmediatePriority = M, S.unstable_LowPriority = Z, S.unstable_NormalPriority = X, S.unstable_Profiling = On, S.unstable_UserBlockingPriority = ve, S.unstable_cancelCallback = oe, S.unstable_continueExecution = Ot, S.unstable_forceFrameRate = Xt, S.unstable_getCurrentPriorityLevel = Ne, S.unstable_getFirstCallbackNode = H, S.unstable_next = Dt, S.unstable_pauseExecution = bt, S.unstable_requestPaint = jn, S.unstable_runWithPriority = at, S.unstable_scheduleCallback = Et, S.unstable_shouldYield = et, S.unstable_wrapCallback = Tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(w0)), w0;
}
var Sx;
function kx() {
  return Sx || (Sx = 1, process.env.NODE_ENV === "production" ? ty.exports = Dk() : ty.exports = Ok()), ty.exports;
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
var Ex;
function Mk() {
  if (Ex) return Ja;
  Ex = 1;
  var S = mn, R = kx();
  function E(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var j = /* @__PURE__ */ new Set(), P = {};
  function Y(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (P[n] = r, n = 0; n < r.length; n++) j.add(r[n]);
  }
  var ye = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), K = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ve = {}, X = {};
  function Z(n) {
    return K.call(X, n) ? !0 : K.call(ve, n) ? !1 : M.test(n) ? X[n] = !0 : (ve[n] = !0, !1);
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
  function ge(n, r, l, o) {
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
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    A[n] = new ee(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    A[r] = new ee(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    A[n] = new ee(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    A[n] = new ee(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    A[n] = new ee(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    A[n] = new ee(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    A[n] = new ee(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    A[n] = new ee(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    A[n] = new ee(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    A[r] = new ee(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(re, fe);
    A[r] = new ee(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(re, fe);
    A[r] = new ee(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    A[n] = new ee(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), A.xlinkHref = new ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    A[n] = new ee(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Re(n, r, l, o) {
    var c = A.hasOwnProperty(r) ? A[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ge(r, l, c, o) && (l = null), o || c === null ? Z(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ce = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, me = Symbol.for("react.element"), qe = Symbol.for("react.portal"), Be = Symbol.for("react.fragment"), ht = Symbol.for("react.strict_mode"), xt = Symbol.for("react.profiler"), rt = Symbol.for("react.provider"), Nt = Symbol.for("react.context"), wt = Symbol.for("react.forward_ref"), $e = Symbol.for("react.suspense"), Jt = Symbol.for("react.suspense_list"), Bt = Symbol.for("react.memo"), Kt = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), Se = Symbol.iterator;
  function Xe(n) {
    return n === null || typeof n != "object" ? null : (n = Se && n[Se] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Te = Object.assign, O;
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
  var ot = !1;
  function at(n, r) {
    if (!n || ot) return "";
    ot = !0;
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
`), m = c.length - 1, x = d.length - 1; 1 <= m && 0 <= x && c[m] !== d[x]; ) x--;
        for (; 1 <= m && 0 <= x; m--, x--) if (c[m] !== d[x]) {
          if (m !== 1 || x !== 1)
            do
              if (m--, x--, 0 > x || c[m] !== d[x]) {
                var b = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", n.displayName)), b;
              }
            while (1 <= m && 0 <= x);
          break;
        }
      }
    } finally {
      ot = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? q(n) : "";
  }
  function Dt(n) {
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
        return n = at(n.type, !1), n;
      case 11:
        return n = at(n.type.render, !1), n;
      case 1:
        return n = at(n.type, !0), n;
      default:
        return "";
    }
  }
  function Tt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Be:
        return "Fragment";
      case qe:
        return "Portal";
      case xt:
        return "Profiler";
      case ht:
        return "StrictMode";
      case $e:
        return "Suspense";
      case Jt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Nt:
        return (n.displayName || "Context") + ".Consumer";
      case rt:
        return (n._context.displayName || "Context") + ".Provider";
      case wt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Bt:
        return r = n.displayName || null, r !== null ? r : Tt(n.type) || "Memo";
      case Kt:
        r = n._payload, n = n._init;
        try {
          return Tt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Et(n) {
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
        return Tt(r);
      case 8:
        return r === ht ? "StrictMode" : "Mode";
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
  function bt(n) {
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
  function Ot(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function H(n) {
    var r = Ot(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function oe(n) {
    n._valueTracker || (n._valueTracker = H(n));
  }
  function Ne(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Ot(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function _e(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function xe(n, r) {
    var l = r.checked;
    return Te({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function be(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = bt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Fe(n, r) {
    r = r.checked, r != null && Re(n, "checked", r, !1);
  }
  function Ge(n, r) {
    Fe(n, r);
    var l = bt(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ft(n, r.type, l) : r.hasOwnProperty("defaultValue") && ft(n, r.type, bt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function et(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function ft(n, r, l) {
    (r !== "number" || _e(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Xt = Array.isArray;
  function $t(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + bt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function cn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(E(91));
    return Te({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function yn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(E(92));
        if (Xt(l)) {
          if (1 < l.length) throw Error(E(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: bt(l) };
  }
  function In(n, r) {
    var l = bt(r.value), o = bt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function hn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Ht(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ht(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var jn, On = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (jn = jn || document.createElement("div"), jn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = jn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function he(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Oe = {
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
  }, pt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Oe).forEach(function(n) {
    pt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Oe[r] = Oe[n];
    });
  });
  function It(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Oe.hasOwnProperty(n) && Oe[n] ? ("" + r).trim() : r + "px";
  }
  function fn(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = It(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Mn = Te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function wn(n, r) {
    if (r) {
      if (Mn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(E(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(E(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(E(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(E(62));
    }
  }
  function te(n, r) {
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
  var se = null;
  function Ee(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var we = null, Ct = null, dn = null;
  function bn(n) {
    if (n = tt(n)) {
      if (typeof we != "function") throw Error(E(280));
      var r = n.stateNode;
      r && (r = Hn(r), we(n.stateNode, n.type, r));
    }
  }
  function Sr(n) {
    Ct ? dn ? dn.push(n) : dn = [n] : Ct = n;
  }
  function Ar() {
    if (Ct) {
      var n = Ct, r = dn;
      if (dn = Ct = null, bn(n), r) for (n = 0; n < r.length; n++) bn(r[n]);
    }
  }
  function ra(n, r) {
    return n(r);
  }
  function Pr() {
  }
  var ti = !1;
  function ni(n, r, l) {
    if (ti) return n(r, l);
    ti = !0;
    try {
      return ra(n, r, l);
    } finally {
      ti = !1, (Ct !== null || dn !== null) && (Pr(), Ar());
    }
  }
  function pr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Hn(l);
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
  var Er = !1;
  if (ye) try {
    var Yn = {};
    Object.defineProperty(Yn, "passive", { get: function() {
      Er = !0;
    } }), window.addEventListener("test", Yn, Yn), window.removeEventListener("test", Yn, Yn);
  } catch {
    Er = !1;
  }
  function Ei(n, r, l, o, c, d, m, x, b) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, $);
    } catch (le) {
      this.onError(le);
    }
  }
  var ri = !1, Ci = null, Ri = !1, T = null, ne = { onError: function(n) {
    ri = !0, Ci = n;
  } };
  function Me(n, r, l, o, c, d, m, x, b) {
    ri = !1, Ci = null, Ei.apply(ne, arguments);
  }
  function Ve(n, r, l, o, c, d, m, x, b) {
    if (Me.apply(this, arguments), ri) {
      if (ri) {
        var $ = Ci;
        ri = !1, Ci = null;
      } else throw Error(E(198));
      Ri || (Ri = !0, T = $);
    }
  }
  function _t(n) {
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
  function gt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function jt(n) {
    if (_t(n) !== n) throw Error(E(188));
  }
  function At(n) {
    var r = n.alternate;
    if (!r) {
      if (r = _t(n), r === null) throw Error(E(188));
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
          if (d === l) return jt(c), n;
          if (d === o) return jt(c), r;
          d = d.sibling;
        }
        throw Error(E(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, x = c.child; x; ) {
          if (x === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (x === o) {
            m = !0, o = c, l = d;
            break;
          }
          x = x.sibling;
        }
        if (!m) {
          for (x = d.child; x; ) {
            if (x === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (x === o) {
              m = !0, o = d, l = c;
              break;
            }
            x = x.sibling;
          }
          if (!m) throw Error(E(189));
        }
      }
      if (l.alternate !== o) throw Error(E(190));
    }
    if (l.tag !== 3) throw Error(E(188));
    return l.stateNode.current === l ? n : r;
  }
  function Wn(n) {
    return n = At(n), n !== null ? _n(n) : null;
  }
  function _n(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = _n(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Nn = R.unstable_scheduleCallback, Cr = R.unstable_cancelCallback, ai = R.unstable_shouldYield, ii = R.unstable_requestPaint, kt = R.unstable_now, Lt = R.unstable_getCurrentPriorityLevel, li = R.unstable_ImmediatePriority, au = R.unstable_UserBlockingPriority, iu = R.unstable_NormalPriority, El = R.unstable_LowPriority, Ku = R.unstable_IdlePriority, Cl = null, aa = null;
  function Go(n) {
    if (aa && typeof aa.onCommitFiberRoot == "function") try {
      aa.onCommitFiberRoot(Cl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Vr = Math.clz32 ? Math.clz32 : Xu, fc = Math.log, dc = Math.LN2;
  function Xu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fc(n) / dc | 0) | 0;
  }
  var Rl = 64, Ca = 4194304;
  function ui(n) {
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
  function oi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var x = m & ~c;
      x !== 0 ? o = ui(x) : (d &= m, d !== 0 && (o = ui(d)));
    } else m = l & ~c, m !== 0 ? o = ui(m) : d !== 0 && (o = ui(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Vr(r), c = 1 << l, o |= n[l], r &= ~c;
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
      var m = 31 - Vr(d), x = 1 << m, b = c[m];
      b === -1 ? (!(x & l) || x & o) && (c[m] = qu(x, r)) : b <= r && (n.expiredLanes |= x), d &= ~x;
    }
  }
  function xl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Zu() {
    var n = Rl;
    return Rl <<= 1, !(Rl & 4194240) && (Rl = 64), n;
  }
  function Ju(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Qi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Vr(r), n[r] = l;
  }
  function Zf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Vr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Gi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Vr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var nn = 0;
  function eo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var qt, Ko, xi, yt, to, Rr = !1, wi = [], Br = null, Ti = null, Ln = null, gn = /* @__PURE__ */ new Map(), wl = /* @__PURE__ */ new Map(), or = [], $r = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Aa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Br = null;
        break;
      case "dragenter":
      case "dragleave":
        Ti = null;
        break;
      case "mouseover":
      case "mouseout":
        Ln = null;
        break;
      case "pointerover":
      case "pointerout":
        gn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wl.delete(r.pointerId);
    }
  }
  function uu(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = tt(r), r !== null && Ko(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Xo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Br = uu(Br, n, r, l, o, c), !0;
      case "dragenter":
        return Ti = uu(Ti, n, r, l, o, c), !0;
      case "mouseover":
        return Ln = uu(Ln, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return gn.set(d, uu(gn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, wl.set(d, uu(wl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function qo(n) {
    var r = mu(n.target);
    if (r !== null) {
      var l = _t(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = gt(l), r !== null) {
            n.blockedOn = r, to(n.priority, function() {
              xi(l);
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
        se = o, l.target.dispatchEvent(o), se = null;
      } else return r = tt(l), r !== null && Ko(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function ou(n, r, l) {
    Tl(n) && l.delete(r);
  }
  function Jf() {
    Rr = !1, Br !== null && Tl(Br) && (Br = null), Ti !== null && Tl(Ti) && (Ti = null), Ln !== null && Tl(Ln) && (Ln = null), gn.forEach(ou), wl.forEach(ou);
  }
  function Ua(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Rr || (Rr = !0, R.unstable_scheduleCallback(R.unstable_NormalPriority, Jf)));
  }
  function si(n) {
    function r(c) {
      return Ua(c, n);
    }
    if (0 < wi.length) {
      Ua(wi[0], n);
      for (var l = 1; l < wi.length; l++) {
        var o = wi[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Br !== null && Ua(Br, n), Ti !== null && Ua(Ti, n), Ln !== null && Ua(Ln, n), gn.forEach(r), wl.forEach(r), l = 0; l < or.length; l++) o = or[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < or.length && (l = or[0], l.blockedOn === null); ) qo(l), l.blockedOn === null && or.shift();
  }
  var bi = ce.ReactCurrentBatchConfig, ja = !0;
  function no(n, r, l, o) {
    var c = nn, d = bi.transition;
    bi.transition = null;
    try {
      nn = 1, bl(n, r, l, o);
    } finally {
      nn = c, bi.transition = d;
    }
  }
  function ro(n, r, l, o) {
    var c = nn, d = bi.transition;
    bi.transition = null;
    try {
      nn = 4, bl(n, r, l, o);
    } finally {
      nn = c, bi.transition = d;
    }
  }
  function bl(n, r, l, o) {
    if (ja) {
      var c = ao(n, r, l, o);
      if (c === null) wc(n, r, o, su, l), Aa(n, o);
      else if (Xo(c, n, r, l, o)) o.stopPropagation();
      else if (Aa(n, o), r & 4 && -1 < $r.indexOf(n)) {
        for (; c !== null; ) {
          var d = tt(c);
          if (d !== null && qt(d), d = ao(n, r, l, o), d === null && wc(n, r, o, su, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else wc(n, r, o, null, l);
    }
  }
  var su = null;
  function ao(n, r, l, o) {
    if (su = null, n = Ee(o), n = mu(n), n !== null) if (r = _t(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = gt(r), n !== null) return n;
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
        switch (Lt()) {
          case li:
            return 1;
          case au:
            return 4;
          case iu:
          case El:
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
  var ci = null, h = null, w = null;
  function B() {
    if (w) return w;
    var n, r = h, l = r.length, o, c = "value" in ci ? ci.value : ci.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return w = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function W(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ce() {
    return !0;
  }
  function it() {
    return !1;
  }
  function De(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var x in n) n.hasOwnProperty(x) && (l = n[x], this[x] = l ? l(d) : d[x]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ce : it, this.isPropagationStopped = it, this;
    }
    return Te(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ce);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ce);
    }, persist: function() {
    }, isPersistent: Ce }), r;
  }
  var st = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ft = De(st), Zt = Te({}, st, { view: 0, detail: 0 }), kn = De(Zt), Sn, zt, En, Fn = Te({}, Zt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ad, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== En && (En && n.type === "mousemove" ? (Sn = n.screenX - En.screenX, zt = n.screenY - En.screenY) : zt = Sn = 0, En = n), Sn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : zt;
  } }), _l = De(Fn), Zo = Te({}, Fn, { dataTransfer: 0 }), Ki = De(Zo), Jo = Te({}, Zt, { relatedTarget: 0 }), cu = De(Jo), ed = Te({}, st, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = De(ed), td = Te({}, st, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), cv = De(td), nd = Te({}, st, { data: 0 }), rd = De(nd), fv = {
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
  var id = Te({}, Zt, { key: function(n) {
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
  } }), ld = De(id), ud = Te({}, Fn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pv = De(ud), vc = Te({}, Zt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ad }), vv = De(vc), ia = Te({}, st, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qi = De(ia), Jn = Te({}, Fn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zi = De(Jn), od = [9, 13, 27, 32], lo = ye && "CompositionEvent" in window, es = null;
  ye && "documentMode" in document && (es = document.documentMode);
  var ts = ye && "TextEvent" in window && !es, hv = ye && (!lo || es && 8 < es && 11 >= es), mv = " ", hc = !1;
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
    if (uo) return n === "compositionend" || !lo && yv(n, r) ? (n = B(), w = h = ci = null, uo = !1, n) : null;
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
    Sr(o), r = us(r, "onChange"), 0 < r.length && (l = new Ft("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var _i = null, fu = null;
  function Cv(n) {
    vu(n, 0);
  }
  function ns(n) {
    var r = di(n);
    if (Ne(r)) return n;
  }
  function cy(n, r) {
    if (n === "change") return r;
  }
  var Rv = !1;
  if (ye) {
    var cd;
    if (ye) {
      var fd = "oninput" in document;
      if (!fd) {
        var xv = document.createElement("div");
        xv.setAttribute("oninput", "return;"), fd = typeof xv.oninput == "function";
      }
      cd = fd;
    } else cd = !1;
    Rv = cd && (!document.documentMode || 9 < document.documentMode);
  }
  function wv() {
    _i && (_i.detachEvent("onpropertychange", Tv), fu = _i = null);
  }
  function Tv(n) {
    if (n.propertyName === "value" && ns(fu)) {
      var r = [];
      sd(r, fu, n, Ee(n)), ni(Cv, r);
    }
  }
  function fy(n, r, l) {
    n === "focusin" ? (wv(), _i = r, fu = l, _i.attachEvent("onpropertychange", Tv)) : n === "focusout" && wv();
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
  var fi = typeof Object.is == "function" ? Object.is : py;
  function rs(n, r) {
    if (fi(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!K.call(r, c) || !fi(n[c], r[c])) return !1;
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
    for (var n = window, r = _e(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = _e(n.document);
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
  var vy = ye && "documentMode" in document && 11 >= document.documentMode, so = null, dd = null, is = null, pd = !1;
  function vd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pd || so == null || so !== _e(o) || (o = so, "selectionStart" in o && yc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), is && rs(is, o) || (is = o, o = us(dd, "onSelect"), 0 < o.length && (r = new Ft("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = so)));
  }
  function gc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var du = { animationend: gc("Animation", "AnimationEnd"), animationiteration: gc("Animation", "AnimationIteration"), animationstart: gc("Animation", "AnimationStart"), transitionend: gc("Transition", "TransitionEnd") }, xr = {}, hd = {};
  ye && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete du.animationend.animation, delete du.animationiteration.animation, delete du.animationstart.animation), "TransitionEvent" in window || delete du.transitionend.transition);
  function Sc(n) {
    if (xr[n]) return xr[n];
    if (!du[n]) return n;
    var r = du[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in hd) return xr[n] = r[l];
    return n;
  }
  var Dv = Sc("animationend"), Ov = Sc("animationiteration"), Mv = Sc("animationstart"), Nv = Sc("transitionend"), md = /* @__PURE__ */ new Map(), Ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Fa(n, r) {
    md.set(n, r), Y(r, [n]);
  }
  for (var yd = 0; yd < Ec.length; yd++) {
    var pu = Ec[yd], hy = pu.toLowerCase(), my = pu[0].toUpperCase() + pu.slice(1);
    Fa(hy, "on" + my);
  }
  Fa(Dv, "onAnimationEnd"), Fa(Ov, "onAnimationIteration"), Fa(Mv, "onAnimationStart"), Fa("dblclick", "onDoubleClick"), Fa("focusin", "onFocus"), Fa("focusout", "onBlur"), Fa(Nv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), Y("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Y("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Y("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Y("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Y("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Y("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ls = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));
  function Cc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Ve(o, r, void 0, n), n.currentTarget = null;
  }
  function vu(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var x = o[m], b = x.instance, $ = x.currentTarget;
          if (x = x.listener, b !== d && c.isPropagationStopped()) break e;
          Cc(c, x, $), d = b;
        }
        else for (m = 0; m < o.length; m++) {
          if (x = o[m], b = x.instance, $ = x.currentTarget, x = x.listener, b !== d && c.isPropagationStopped()) break e;
          Cc(c, x, $), d = b;
        }
      }
    }
    if (Ri) throw n = T, Ri = !1, T = null, n;
  }
  function pn(n, r) {
    var l = r[cs];
    l === void 0 && (l = r[cs] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Lv(r, n, 2, !1), l.add(o));
  }
  function Rc(n, r, l) {
    var o = 0;
    r && (o |= 4), Lv(l, n, o, r);
  }
  var xc = "_reactListening" + Math.random().toString(36).slice(2);
  function co(n) {
    if (!n[xc]) {
      n[xc] = !0, j.forEach(function(l) {
        l !== "selectionchange" && (gd.has(l) || Rc(l, !1, n), Rc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[xc] || (r[xc] = !0, Rc("selectionchange", !1, r));
    }
  }
  function Lv(n, r, l, o) {
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
    l = c.bind(null, r, l, n), c = void 0, !Er || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function wc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var x = o.stateNode.containerInfo;
        if (x === c || x.nodeType === 8 && x.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var b = m.tag;
          if ((b === 3 || b === 4) && (b = m.stateNode.containerInfo, b === c || b.nodeType === 8 && b.parentNode === c)) return;
          m = m.return;
        }
        for (; x !== null; ) {
          if (m = mu(x), m === null) return;
          if (b = m.tag, b === 5 || b === 6) {
            o = d = m;
            continue e;
          }
          x = x.parentNode;
        }
      }
      o = o.return;
    }
    ni(function() {
      var $ = d, le = Ee(l), de = [];
      e: {
        var ie = md.get(n);
        if (ie !== void 0) {
          var Ue = Ft, Ye = n;
          switch (n) {
            case "keypress":
              if (W(l) === 0) break e;
            case "keydown":
            case "keyup":
              Ue = ld;
              break;
            case "focusin":
              Ye = "focus", Ue = cu;
              break;
            case "focusout":
              Ye = "blur", Ue = cu;
              break;
            case "beforeblur":
            case "afterblur":
              Ue = cu;
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
              Ue = _l;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ue = Ki;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ue = vv;
              break;
            case Dv:
            case Ov:
            case Mv:
              Ue = pc;
              break;
            case Nv:
              Ue = qi;
              break;
            case "scroll":
              Ue = kn;
              break;
            case "wheel":
              Ue = Zi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ue = cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ue = pv;
          }
          var Ke = (r & 4) !== 0, qn = !Ke && n === "scroll", N = Ke ? ie !== null ? ie + "Capture" : null : ie;
          Ke = [];
          for (var k = $, U; k !== null; ) {
            U = k;
            var ue = U.stateNode;
            if (U.tag === 5 && ue !== null && (U = ue, N !== null && (ue = pr(k, N), ue != null && Ke.push(fo(k, ue, U)))), qn) break;
            k = k.return;
          }
          0 < Ke.length && (ie = new Ue(ie, Ye, null, l, le), de.push({ event: ie, listeners: Ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ie = n === "mouseover" || n === "pointerover", Ue = n === "mouseout" || n === "pointerout", ie && l !== se && (Ye = l.relatedTarget || l.fromElement) && (mu(Ye) || Ye[Ji])) break e;
          if ((Ue || ie) && (ie = le.window === le ? le : (ie = le.ownerDocument) ? ie.defaultView || ie.parentWindow : window, Ue ? (Ye = l.relatedTarget || l.toElement, Ue = $, Ye = Ye ? mu(Ye) : null, Ye !== null && (qn = _t(Ye), Ye !== qn || Ye.tag !== 5 && Ye.tag !== 6) && (Ye = null)) : (Ue = null, Ye = $), Ue !== Ye)) {
            if (Ke = _l, ue = "onMouseLeave", N = "onMouseEnter", k = "mouse", (n === "pointerout" || n === "pointerover") && (Ke = pv, ue = "onPointerLeave", N = "onPointerEnter", k = "pointer"), qn = Ue == null ? ie : di(Ue), U = Ye == null ? ie : di(Ye), ie = new Ke(ue, k + "leave", Ue, l, le), ie.target = qn, ie.relatedTarget = U, ue = null, mu(le) === $ && (Ke = new Ke(N, k + "enter", Ye, l, le), Ke.target = U, Ke.relatedTarget = qn, ue = Ke), qn = ue, Ue && Ye) t: {
              for (Ke = Ue, N = Ye, k = 0, U = Ke; U; U = Dl(U)) k++;
              for (U = 0, ue = N; ue; ue = Dl(ue)) U++;
              for (; 0 < k - U; ) Ke = Dl(Ke), k--;
              for (; 0 < U - k; ) N = Dl(N), U--;
              for (; k--; ) {
                if (Ke === N || N !== null && Ke === N.alternate) break t;
                Ke = Dl(Ke), N = Dl(N);
              }
              Ke = null;
            }
            else Ke = null;
            Ue !== null && zv(de, ie, Ue, Ke, !1), Ye !== null && qn !== null && zv(de, qn, Ye, Ke, !0);
          }
        }
        e: {
          if (ie = $ ? di($) : window, Ue = ie.nodeName && ie.nodeName.toLowerCase(), Ue === "select" || Ue === "input" && ie.type === "file") var We = cy;
          else if (Ev(ie)) if (Rv) We = _v;
          else {
            We = bv;
            var ut = fy;
          }
          else (Ue = ie.nodeName) && Ue.toLowerCase() === "input" && (ie.type === "checkbox" || ie.type === "radio") && (We = dy);
          if (We && (We = We(n, $))) {
            sd(de, We, l, le);
            break e;
          }
          ut && ut(n, ie, $), n === "focusout" && (ut = ie._wrapperState) && ut.controlled && ie.type === "number" && ft(ie, "number", ie.value);
        }
        switch (ut = $ ? di($) : window, n) {
          case "focusin":
            (Ev(ut) || ut.contentEditable === "true") && (so = ut, dd = $, is = null);
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
            pd = !1, vd(de, l, le);
            break;
          case "selectionchange":
            if (vy) break;
          case "keydown":
          case "keyup":
            vd(de, l, le);
        }
        var ct;
        if (lo) e: {
          switch (n) {
            case "compositionstart":
              var mt = "onCompositionStart";
              break e;
            case "compositionend":
              mt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              mt = "onCompositionUpdate";
              break e;
          }
          mt = void 0;
        }
        else uo ? yv(n, l) && (mt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (mt = "onCompositionStart");
        mt && (hv && l.locale !== "ko" && (uo || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && uo && (ct = B()) : (ci = le, h = "value" in ci ? ci.value : ci.textContent, uo = !0)), ut = us($, mt), 0 < ut.length && (mt = new rd(mt, n, null, l, le), de.push({ event: mt, listeners: ut }), ct ? mt.data = ct : (ct = gv(l), ct !== null && (mt.data = ct)))), (ct = ts ? Sv(n, l) : oy(n, l)) && ($ = us($, "onBeforeInput"), 0 < $.length && (le = new rd("onBeforeInput", "beforeinput", null, l, le), de.push({ event: le, listeners: $ }), le.data = ct));
      }
      vu(de, r);
    });
  }
  function fo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function us(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = pr(n, l), d != null && o.unshift(fo(n, d, c)), d = pr(n, r), d != null && o.push(fo(n, d, c))), n = n.return;
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
      var x = l, b = x.alternate, $ = x.stateNode;
      if (b !== null && b === o) break;
      x.tag === 5 && $ !== null && (x = $, c ? (b = pr(l, d), b != null && m.unshift(fo(l, b, x))) : c || (b = pr(l, d), b != null && m.push(fo(l, b, x)))), l = l.return;
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
          n.removeChild(c), si(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    si(r);
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
  function di(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(E(33));
  }
  function Hn(n) {
    return n[ss] || null;
  }
  var Yt = [], Ha = -1;
  function Pa(n) {
    return { current: n };
  }
  function Dn(n) {
    0 > Ha || (n.current = Yt[Ha], Yt[Ha] = null, Ha--);
  }
  function Je(n, r) {
    Ha++, Yt[Ha] = n.current, n.current = r;
  }
  var Ur = {}, $n = Pa(Ur), sr = Pa(!1), la = Ur;
  function ua(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ur;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function er(n) {
    return n = n.childContextTypes, n != null;
  }
  function mo() {
    Dn(sr), Dn($n);
  }
  function Hv(n, r, l) {
    if ($n.current !== Ur) throw Error(E(168));
    Je($n, r), Je(sr, l);
  }
  function fs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(E(108, Et(n) || "Unknown", c));
    return Te({}, l, o);
  }
  function vr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ur, la = $n.current, Je($n, n), Je(sr, sr.current), !0;
  }
  function Dc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(E(169));
    l ? (n = fs(n, r, la), o.__reactInternalMemoizedMergedChildContext = n, Dn(sr), Dn($n), Je($n, n)) : Dn(sr), Je(sr, l);
  }
  var Oi = null, yo = !1, el = !1;
  function Oc(n) {
    Oi === null ? Oi = [n] : Oi.push(n);
  }
  function Nl(n) {
    yo = !0, Oc(n);
  }
  function Mi() {
    if (!el && Oi !== null) {
      el = !0;
      var n = 0, r = nn;
      try {
        var l = Oi;
        for (nn = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Oi = null, yo = !1;
      } catch (c) {
        throw Oi !== null && (Oi = Oi.slice(n + 1)), Nn(li, Mi), c;
      } finally {
        nn = r, el = !1;
      }
    }
    return null;
  }
  var Ll = [], zl = 0, Al = null, tl = 0, tr = [], Va = 0, Ra = null, Ni = 1, Li = "";
  function yu(n, r) {
    Ll[zl++] = tl, Ll[zl++] = Al, Al = n, tl = r;
  }
  function Pv(n, r, l) {
    tr[Va++] = Ni, tr[Va++] = Li, tr[Va++] = Ra, Ra = n;
    var o = Ni;
    n = Li;
    var c = 32 - Vr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Vr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ni = 1 << 32 - Vr(r) + c | l << c | o, Li = d + n;
    } else Ni = 1 << d | l << c | o, Li = n;
  }
  function Mc(n) {
    n.return !== null && (yu(n, 1), Pv(n, 1, 0));
  }
  function Nc(n) {
    for (; n === Al; ) Al = Ll[--zl], Ll[zl] = null, tl = Ll[--zl], Ll[zl] = null;
    for (; n === Ra; ) Ra = tr[--Va], tr[Va] = null, Li = tr[--Va], tr[Va] = null, Ni = tr[--Va], tr[Va] = null;
  }
  var oa = null, sa = null, An = !1, Ba = null;
  function Ed(n, r) {
    var l = Qa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Vv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, oa = n, sa = ki(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, oa = n, sa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ra !== null ? { id: Ni, overflow: Li } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Qa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, oa = n, sa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Cd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Rd(n) {
    if (An) {
      var r = sa;
      if (r) {
        var l = r;
        if (!Vv(n, r)) {
          if (Cd(n)) throw Error(E(418));
          r = ki(l.nextSibling);
          var o = oa;
          r && Vv(n, r) ? Ed(o, l) : (n.flags = n.flags & -4097 | 2, An = !1, oa = n);
        }
      } else {
        if (Cd(n)) throw Error(E(418));
        n.flags = n.flags & -4097 | 2, An = !1, oa = n;
      }
    }
  }
  function cr(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    oa = n;
  }
  function Lc(n) {
    if (n !== oa) return !1;
    if (!An) return cr(n), An = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !bc(n.type, n.memoizedProps)), r && (r = sa)) {
      if (Cd(n)) throw ds(), Error(E(418));
      for (; r; ) Ed(n, r), r = ki(r.nextSibling);
    }
    if (cr(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(E(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                sa = ki(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        sa = null;
      }
    } else sa = oa ? ki(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ds() {
    for (var n = sa; n; ) n = ki(n.nextSibling);
  }
  function Ul() {
    sa = oa = null, An = !1;
  }
  function nl(n) {
    Ba === null ? Ba = [n] : Ba.push(n);
  }
  var Sy = ce.ReactCurrentBatchConfig;
  function gu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(E(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(E(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var x = c.refs;
          m === null ? delete x[d] : x[d] = m;
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
  function Su(n) {
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
      return N = Il(N, k), N.index = 0, N.sibling = null, N;
    }
    function d(N, k, U) {
      return N.index = U, n ? (U = N.alternate, U !== null ? (U = U.index, U < k ? (N.flags |= 2, k) : U) : (N.flags |= 2, k)) : (N.flags |= 1048576, k);
    }
    function m(N) {
      return n && N.alternate === null && (N.flags |= 2), N;
    }
    function x(N, k, U, ue) {
      return k === null || k.tag !== 6 ? (k = Jd(U, N.mode, ue), k.return = N, k) : (k = c(k, U), k.return = N, k);
    }
    function b(N, k, U, ue) {
      var We = U.type;
      return We === Be ? le(N, k, U.props.children, ue, U.key) : k !== null && (k.elementType === We || typeof We == "object" && We !== null && We.$$typeof === Kt && Bv(We) === k.type) ? (ue = c(k, U.props), ue.ref = gu(N, k, U), ue.return = N, ue) : (ue = Bs(U.type, U.key, U.props, null, N.mode, ue), ue.ref = gu(N, k, U), ue.return = N, ue);
    }
    function $(N, k, U, ue) {
      return k === null || k.tag !== 4 || k.stateNode.containerInfo !== U.containerInfo || k.stateNode.implementation !== U.implementation ? (k = vf(U, N.mode, ue), k.return = N, k) : (k = c(k, U.children || []), k.return = N, k);
    }
    function le(N, k, U, ue, We) {
      return k === null || k.tag !== 7 ? (k = ol(U, N.mode, ue, We), k.return = N, k) : (k = c(k, U), k.return = N, k);
    }
    function de(N, k, U) {
      if (typeof k == "string" && k !== "" || typeof k == "number") return k = Jd("" + k, N.mode, U), k.return = N, k;
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case me:
            return U = Bs(k.type, k.key, k.props, null, N.mode, U), U.ref = gu(N, null, k), U.return = N, U;
          case qe:
            return k = vf(k, N.mode, U), k.return = N, k;
          case Kt:
            var ue = k._init;
            return de(N, ue(k._payload), U);
        }
        if (Xt(k) || Xe(k)) return k = ol(k, N.mode, U, null), k.return = N, k;
        zc(N, k);
      }
      return null;
    }
    function ie(N, k, U, ue) {
      var We = k !== null ? k.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number") return We !== null ? null : x(N, k, "" + U, ue);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case me:
            return U.key === We ? b(N, k, U, ue) : null;
          case qe:
            return U.key === We ? $(N, k, U, ue) : null;
          case Kt:
            return We = U._init, ie(
              N,
              k,
              We(U._payload),
              ue
            );
        }
        if (Xt(U) || Xe(U)) return We !== null ? null : le(N, k, U, ue, null);
        zc(N, U);
      }
      return null;
    }
    function Ue(N, k, U, ue, We) {
      if (typeof ue == "string" && ue !== "" || typeof ue == "number") return N = N.get(U) || null, x(k, N, "" + ue, We);
      if (typeof ue == "object" && ue !== null) {
        switch (ue.$$typeof) {
          case me:
            return N = N.get(ue.key === null ? U : ue.key) || null, b(k, N, ue, We);
          case qe:
            return N = N.get(ue.key === null ? U : ue.key) || null, $(k, N, ue, We);
          case Kt:
            var ut = ue._init;
            return Ue(N, k, U, ut(ue._payload), We);
        }
        if (Xt(ue) || Xe(ue)) return N = N.get(U) || null, le(k, N, ue, We, null);
        zc(k, ue);
      }
      return null;
    }
    function Ye(N, k, U, ue) {
      for (var We = null, ut = null, ct = k, mt = k = 0, yr = null; ct !== null && mt < U.length; mt++) {
        ct.index > mt ? (yr = ct, ct = null) : yr = ct.sibling;
        var ln = ie(N, ct, U[mt], ue);
        if (ln === null) {
          ct === null && (ct = yr);
          break;
        }
        n && ct && ln.alternate === null && r(N, ct), k = d(ln, k, mt), ut === null ? We = ln : ut.sibling = ln, ut = ln, ct = yr;
      }
      if (mt === U.length) return l(N, ct), An && yu(N, mt), We;
      if (ct === null) {
        for (; mt < U.length; mt++) ct = de(N, U[mt], ue), ct !== null && (k = d(ct, k, mt), ut === null ? We = ct : ut.sibling = ct, ut = ct);
        return An && yu(N, mt), We;
      }
      for (ct = o(N, ct); mt < U.length; mt++) yr = Ue(ct, N, mt, U[mt], ue), yr !== null && (n && yr.alternate !== null && ct.delete(yr.key === null ? mt : yr.key), k = d(yr, k, mt), ut === null ? We = yr : ut.sibling = yr, ut = yr);
      return n && ct.forEach(function(Ql) {
        return r(N, Ql);
      }), An && yu(N, mt), We;
    }
    function Ke(N, k, U, ue) {
      var We = Xe(U);
      if (typeof We != "function") throw Error(E(150));
      if (U = We.call(U), U == null) throw Error(E(151));
      for (var ut = We = null, ct = k, mt = k = 0, yr = null, ln = U.next(); ct !== null && !ln.done; mt++, ln = U.next()) {
        ct.index > mt ? (yr = ct, ct = null) : yr = ct.sibling;
        var Ql = ie(N, ct, ln.value, ue);
        if (Ql === null) {
          ct === null && (ct = yr);
          break;
        }
        n && ct && Ql.alternate === null && r(N, ct), k = d(Ql, k, mt), ut === null ? We = Ql : ut.sibling = Ql, ut = Ql, ct = yr;
      }
      if (ln.done) return l(
        N,
        ct
      ), An && yu(N, mt), We;
      if (ct === null) {
        for (; !ln.done; mt++, ln = U.next()) ln = de(N, ln.value, ue), ln !== null && (k = d(ln, k, mt), ut === null ? We = ln : ut.sibling = ln, ut = ln);
        return An && yu(N, mt), We;
      }
      for (ct = o(N, ct); !ln.done; mt++, ln = U.next()) ln = Ue(ct, N, mt, ln.value, ue), ln !== null && (n && ln.alternate !== null && ct.delete(ln.key === null ? mt : ln.key), k = d(ln, k, mt), ut === null ? We = ln : ut.sibling = ln, ut = ln);
      return n && ct.forEach(function(wh) {
        return r(N, wh);
      }), An && yu(N, mt), We;
    }
    function qn(N, k, U, ue) {
      if (typeof U == "object" && U !== null && U.type === Be && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case me:
            e: {
              for (var We = U.key, ut = k; ut !== null; ) {
                if (ut.key === We) {
                  if (We = U.type, We === Be) {
                    if (ut.tag === 7) {
                      l(N, ut.sibling), k = c(ut, U.props.children), k.return = N, N = k;
                      break e;
                    }
                  } else if (ut.elementType === We || typeof We == "object" && We !== null && We.$$typeof === Kt && Bv(We) === ut.type) {
                    l(N, ut.sibling), k = c(ut, U.props), k.ref = gu(N, ut, U), k.return = N, N = k;
                    break e;
                  }
                  l(N, ut);
                  break;
                } else r(N, ut);
                ut = ut.sibling;
              }
              U.type === Be ? (k = ol(U.props.children, N.mode, ue, U.key), k.return = N, N = k) : (ue = Bs(U.type, U.key, U.props, null, N.mode, ue), ue.ref = gu(N, k, U), ue.return = N, N = ue);
            }
            return m(N);
          case qe:
            e: {
              for (ut = U.key; k !== null; ) {
                if (k.key === ut) if (k.tag === 4 && k.stateNode.containerInfo === U.containerInfo && k.stateNode.implementation === U.implementation) {
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
          case Kt:
            return ut = U._init, qn(N, k, ut(U._payload), ue);
        }
        if (Xt(U)) return Ye(N, k, U, ue);
        if (Xe(U)) return Ke(N, k, U, ue);
        zc(N, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, k !== null && k.tag === 6 ? (l(N, k.sibling), k = c(k, U), k.return = N, N = k) : (l(N, k), k = Jd(U, N.mode, ue), k.return = N, N = k), m(N)) : l(N, k);
    }
    return qn;
  }
  var Qn = Su(!0), Le = Su(!1), xa = Pa(null), ca = null, go = null, xd = null;
  function wd() {
    xd = go = ca = null;
  }
  function Td(n) {
    var r = xa.current;
    Dn(xa), n._currentValue = r;
  }
  function bd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Pn(n, r) {
    ca = n, xd = go = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (rr = !0), n.firstContext = null);
  }
  function $a(n) {
    var r = n._currentValue;
    if (xd !== n) if (n = { context: n, memoizedValue: r, next: null }, go === null) {
      if (ca === null) throw Error(E(308));
      go = n, ca.dependencies = { lanes: 0, firstContext: n };
    } else go = go.next = n;
    return r;
  }
  var Eu = null;
  function _d(n) {
    Eu === null ? Eu = [n] : Eu.push(n);
  }
  function kd(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, _d(r)) : (l.next = c.next, c.next = l), r.interleaved = l, wa(n, o);
  }
  function wa(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ta = !1;
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
    if (o = o.shared, Wt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, wa(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, _d(o)) : (r.next = c.next, c.next = r), o.interleaved = r, wa(n, l);
  }
  function Ac(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Gi(n, l);
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
    Ta = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var b = x, $ = b.next;
      b.next = null, m === null ? d = $ : m.next = $, m = b;
      var le = n.alternate;
      le !== null && (le = le.updateQueue, x = le.lastBaseUpdate, x !== m && (x === null ? le.firstBaseUpdate = $ : x.next = $, le.lastBaseUpdate = b));
    }
    if (d !== null) {
      var de = c.baseState;
      m = 0, le = $ = b = null, x = d;
      do {
        var ie = x.lane, Ue = x.eventTime;
        if ((o & ie) === ie) {
          le !== null && (le = le.next = {
            eventTime: Ue,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var Ye = n, Ke = x;
            switch (ie = r, Ue = l, Ke.tag) {
              case 1:
                if (Ye = Ke.payload, typeof Ye == "function") {
                  de = Ye.call(Ue, de, ie);
                  break e;
                }
                de = Ye;
                break e;
              case 3:
                Ye.flags = Ye.flags & -65537 | 128;
              case 0:
                if (Ye = Ke.payload, ie = typeof Ye == "function" ? Ye.call(Ue, de, ie) : Ye, ie == null) break e;
                de = Te({}, de, ie);
                break e;
              case 2:
                Ta = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (n.flags |= 64, ie = c.effects, ie === null ? c.effects = [x] : ie.push(x));
        } else Ue = { eventTime: Ue, lane: ie, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, le === null ? ($ = le = Ue, b = de) : le = le.next = Ue, m |= ie;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          ie = x, x = ie.next, ie.next = null, c.lastBaseUpdate = ie, c.shared.pending = null;
        }
      } while (!0);
      if (le === null && (b = de), c.baseState = b, c.firstBaseUpdate = $, c.lastBaseUpdate = le, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Fi |= m, n.lanes = m, n.memoizedState = de;
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
  var vs = {}, zi = Pa(vs), hs = Pa(vs), ms = Pa(vs);
  function Cu(n) {
    if (n === vs) throw Error(E(174));
    return n;
  }
  function Md(n, r) {
    switch (Je(ms, r), Je(hs, n), Je(zi, vs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sn(r, n);
    }
    Dn(zi), Je(zi, r);
  }
  function Ru() {
    Dn(zi), Dn(hs), Dn(ms);
  }
  function Yv(n) {
    Cu(ms.current);
    var r = Cu(zi.current), l = sn(r, n.type);
    r !== l && (Je(hs, n), Je(zi, l));
  }
  function Uc(n) {
    hs.current === n && (Dn(zi), Dn(hs));
  }
  var Vn = Pa(0);
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
  var Ut = ce.ReactCurrentDispatcher, rn = ce.ReactCurrentBatchConfig, Cn = 0, an = null, nr = null, hr = null, Fc = !1, gs = !1, xu = 0, ae = 0;
  function en() {
    throw Error(E(321));
  }
  function dt(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!fi(n[l], r[l])) return !1;
    return !0;
  }
  function Fl(n, r, l, o, c, d) {
    if (Cn = d, an = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ut.current = n === null || n.memoizedState === null ? Jc : ws, n = l(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, xu = 0, 25 <= d) throw Error(E(301));
        d += 1, hr = nr = null, r.updateQueue = null, Ut.current = ef, n = l(o, c);
      } while (gs);
    }
    if (Ut.current = ku, r = nr !== null && nr.next !== null, Cn = 0, hr = nr = an = null, Fc = !1, r) throw Error(E(300));
    return n;
  }
  function pi() {
    var n = xu !== 0;
    return xu = 0, n;
  }
  function jr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return hr === null ? an.memoizedState = hr = n : hr = hr.next = n, hr;
  }
  function Gn() {
    if (nr === null) {
      var n = an.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = nr.next;
    var r = hr === null ? an.memoizedState : hr.next;
    if (r !== null) hr = r, nr = n;
    else {
      if (n === null) throw Error(E(310));
      nr = n, n = { memoizedState: nr.memoizedState, baseState: nr.baseState, baseQueue: nr.baseQueue, queue: nr.queue, next: null }, hr === null ? an.memoizedState = hr = n : hr = hr.next = n;
    }
    return hr;
  }
  function al(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Hl(n) {
    var r = Gn(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var o = nr, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var x = m = null, b = null, $ = d;
      do {
        var le = $.lane;
        if ((Cn & le) === le) b !== null && (b = b.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), o = $.hasEagerState ? $.eagerState : n(o, $.action);
        else {
          var de = {
            lane: le,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          b === null ? (x = b = de, m = o) : b = b.next = de, an.lanes |= le, Fi |= le;
        }
        $ = $.next;
      } while ($ !== null && $ !== d);
      b === null ? m = o : b.next = x, fi(o, r.memoizedState) || (rr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = b, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, an.lanes |= d, Fi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function wu(n) {
    var r = Gn(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      fi(d, r.memoizedState) || (rr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Hc() {
  }
  function Pc(n, r) {
    var l = an, o = Gn(), c = r(), d = !fi(o.memoizedState, c);
    if (d && (o.memoizedState = c, rr = !0), o = o.queue, Ss($c.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || hr !== null && hr.memoizedState.tag & 1) {
      if (l.flags |= 2048, Tu(9, Bc.bind(null, l, o, c, r), void 0, null), fr === null) throw Error(E(349));
      Cn & 30 || Vc(l, r, c);
    }
    return c;
  }
  function Vc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = an.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, an.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
      return !fi(n, l);
    } catch {
      return !0;
    }
  }
  function Yc(n) {
    var r = wa(n, 1);
    r !== null && Qr(r, n, 1, -1);
  }
  function Wc(n) {
    var r = jr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: al, lastRenderedState: n }, r.queue = n, n = n.dispatch = _u.bind(null, an, n), [r.memoizedState, n];
  }
  function Tu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = an.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, an.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Qc() {
    return Gn().memoizedState;
  }
  function So(n, r, l, o) {
    var c = jr();
    an.flags |= n, c.memoizedState = Tu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Eo(n, r, l, o) {
    var c = Gn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (nr !== null) {
      var m = nr.memoizedState;
      if (d = m.destroy, o !== null && dt(o, m.deps)) {
        c.memoizedState = Tu(r, l, d, o);
        return;
      }
    }
    an.flags |= n, c.memoizedState = Tu(1 | r, l, d, o);
  }
  function Gc(n, r) {
    return So(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return Eo(2048, 8, n, r);
  }
  function Kc(n, r) {
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
    var l = Gn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && dt(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Zc(n, r) {
    var l = Gn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && dt(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Nd(n, r, l) {
    return Cn & 21 ? (fi(l, r) || (l = Zu(), an.lanes |= l, Fi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, rr = !0), n.memoizedState = l);
  }
  function Rs(n, r) {
    var l = nn;
    nn = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = rn.transition;
    rn.transition = {};
    try {
      n(!1), r();
    } finally {
      nn = l, rn.transition = o;
    }
  }
  function Ld() {
    return Gn().memoizedState;
  }
  function xs(n, r, l) {
    var o = Hi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, fa(n)) Wv(r, l);
    else if (l = kd(n, r, l, o), l !== null) {
      var c = lr();
      Qr(l, n, o, c), Tn(l, r, o);
    }
  }
  function _u(n, r, l) {
    var o = Hi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (fa(n)) Wv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, x = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = x, fi(x, m)) {
          var b = r.interleaved;
          b === null ? (c.next = c, _d(r)) : (c.next = b.next, b.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = kd(n, r, c, o), l !== null && (c = lr(), Qr(l, n, o, c), Tn(l, r, o));
    }
  }
  function fa(n) {
    var r = n.alternate;
    return n === an || r !== null && r === an;
  }
  function Wv(n, r) {
    gs = Fc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Tn(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Gi(n, l);
    }
  }
  var ku = { readContext: $a, useCallback: en, useContext: en, useEffect: en, useImperativeHandle: en, useInsertionEffect: en, useLayoutEffect: en, useMemo: en, useReducer: en, useRef: en, useState: en, useDebugValue: en, useDeferredValue: en, useTransition: en, useMutableSource: en, useSyncExternalStore: en, useId: en, unstable_isNewReconciler: !1 }, Jc = { readContext: $a, useCallback: function(n, r) {
    return jr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: $a, useEffect: Gc, useImperativeHandle: function(n, r, l) {
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
    var l = jr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = jr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = xs.bind(null, an, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = jr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Wc, useDebugValue: Cs, useDeferredValue: function(n) {
    return jr().memoizedState = n;
  }, useTransition: function() {
    var n = Wc(!1), r = n[0];
    return n = Rs.bind(null, n[1]), jr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = an, c = jr();
    if (An) {
      if (l === void 0) throw Error(E(407));
      l = l();
    } else {
      if (l = r(), fr === null) throw Error(E(349));
      Cn & 30 || Vc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Gc($c.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Tu(9, Bc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = jr(), r = fr.identifierPrefix;
    if (An) {
      var l = Li, o = Ni;
      l = (o & ~(1 << 32 - Vr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = xu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ae++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ws = {
    readContext: $a,
    useCallback: qc,
    useContext: $a,
    useEffect: Ss,
    useImperativeHandle: Xc,
    useInsertionEffect: Kc,
    useLayoutEffect: Es,
    useMemo: Zc,
    useReducer: Hl,
    useRef: Qc,
    useState: function() {
      return Hl(al);
    },
    useDebugValue: Cs,
    useDeferredValue: function(n) {
      var r = Gn();
      return Nd(r, nr.memoizedState, n);
    },
    useTransition: function() {
      var n = Hl(al)[0], r = Gn().memoizedState;
      return [n, r];
    },
    useMutableSource: Hc,
    useSyncExternalStore: Pc,
    useId: Ld,
    unstable_isNewReconciler: !1
  }, ef = { readContext: $a, useCallback: qc, useContext: $a, useEffect: Ss, useImperativeHandle: Xc, useInsertionEffect: Kc, useLayoutEffect: Es, useMemo: Zc, useReducer: wu, useRef: Qc, useState: function() {
    return wu(al);
  }, useDebugValue: Cs, useDeferredValue: function(n) {
    var r = Gn();
    return nr === null ? r.memoizedState = n : Nd(r, nr.memoizedState, n);
  }, useTransition: function() {
    var n = wu(al)[0], r = Gn().memoizedState;
    return [n, r];
  }, useMutableSource: Hc, useSyncExternalStore: Pc, useId: Ld, unstable_isNewReconciler: !1 };
  function vi(n, r) {
    if (n && n.defaultProps) {
      r = Te({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function zd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : Te({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var tf = { isMounted: function(n) {
    return (n = n._reactInternals) ? _t(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = lr(), c = Hi(n), d = rl(o, c);
    d.payload = r, l != null && (d.callback = l), r = jl(n, d, c), r !== null && (Qr(r, n, c, o), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = lr(), c = Hi(n), d = rl(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = jl(n, d, c), r !== null && (Qr(r, n, c, o), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = lr(), o = Hi(n), c = rl(l, o);
    c.tag = 2, r != null && (c.callback = r), r = jl(n, c, o), r !== null && (Qr(r, n, o, l), Ac(r, n, o));
  } };
  function Qv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !rs(l, o) || !rs(c, d) : !0;
  }
  function nf(n, r, l) {
    var o = !1, c = Ur, d = r.contextType;
    return typeof d == "object" && d !== null ? d = $a(d) : (c = er(r) ? la : $n.current, o = r.contextTypes, d = (o = o != null) ? ua(n, c) : Ur), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Gv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && tf.enqueueReplaceState(r, r.state, null);
  }
  function Ts(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Dd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = $a(d) : (d = er(r) ? la : $n.current, c.context = ua(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (zd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && tf.enqueueReplaceState(c, c.state, null), ps(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Du(n, r) {
    try {
      var l = "", o = r;
      do
        l += Dt(o), o = o.return;
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
  function Kv(n, r, l) {
    l = rl(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      bo || (bo = !0, Nu = o), Ud(n, r);
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
  var bs = ce.ReactCurrentOwner, rr = !1;
  function wr(n, r, l, o) {
    r.child = n === null ? Le(r, null, l, o) : Qn(r, n.child, l, o);
  }
  function da(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Pn(r, c), o = Fl(n, r, l, o, d, c), l = pi(), n !== null && !rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ya(n, r, c)) : (An && l && Mc(r), r.flags |= 1, wr(n, r, o, c), r.child);
  }
  function Ou(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Zd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Mt(n, r, d, o, c)) : (n = Bs(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : rs, l(m, o) && n.ref === r.ref) return Ya(n, r, c);
    }
    return r.flags |= 1, n = Il(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Mt(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (rs(d, o) && n.ref === r.ref) if (rr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (rr = !0);
      else return r.lanes = n.lanes, Ya(n, r, c);
    }
    return qv(n, r, l, o, c);
  }
  function _s(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Je(xo, ba), ba |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Je(xo, ba), ba |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Je(xo, ba), ba |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Je(xo, ba), ba |= o;
    return wr(n, r, c, l), r.child;
  }
  function Hd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qv(n, r, l, o, c) {
    var d = er(l) ? la : $n.current;
    return d = ua(r, d), Pn(r, c), l = Fl(n, r, l, o, d, c), o = pi(), n !== null && !rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ya(n, r, c)) : (An && o && Mc(r), r.flags |= 1, wr(n, r, l, c), r.child);
  }
  function Zv(n, r, l, o, c) {
    if (er(l)) {
      var d = !0;
      vr(r);
    } else d = !1;
    if (Pn(r, c), r.stateNode === null) Ia(n, r), nf(r, l, o), Ts(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, x = r.memoizedProps;
      m.props = x;
      var b = m.context, $ = l.contextType;
      typeof $ == "object" && $ !== null ? $ = $a($) : ($ = er(l) ? la : $n.current, $ = ua(r, $));
      var le = l.getDerivedStateFromProps, de = typeof le == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      de || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== o || b !== $) && Gv(r, m, o, $), Ta = !1;
      var ie = r.memoizedState;
      m.state = ie, ps(r, o, m, c), b = r.memoizedState, x !== o || ie !== b || sr.current || Ta ? (typeof le == "function" && (zd(r, l, le, o), b = r.memoizedState), (x = Ta || Qv(r, l, x, o, ie, b, $)) ? (de || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = b), m.props = o, m.state = b, m.context = $, o = x) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, $v(n, r), x = r.memoizedProps, $ = r.type === r.elementType ? x : vi(r.type, x), m.props = $, de = r.pendingProps, ie = m.context, b = l.contextType, typeof b == "object" && b !== null ? b = $a(b) : (b = er(l) ? la : $n.current, b = ua(r, b));
      var Ue = l.getDerivedStateFromProps;
      (le = typeof Ue == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (x !== de || ie !== b) && Gv(r, m, o, b), Ta = !1, ie = r.memoizedState, m.state = ie, ps(r, o, m, c);
      var Ye = r.memoizedState;
      x !== de || ie !== Ye || sr.current || Ta ? (typeof Ue == "function" && (zd(r, l, Ue, o), Ye = r.memoizedState), ($ = Ta || Qv(r, l, $, o, ie, Ye, b) || !1) ? (le || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Ye, b), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ye, b)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Ye), m.props = o, m.state = Ye, m.context = b, o = $) : (typeof m.componentDidUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || x === n.memoizedProps && ie === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return ks(n, r, l, o, d, c);
  }
  function ks(n, r, l, o, c, d) {
    Hd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Dc(r, l, !1), Ya(n, r, d);
    o = r.stateNode, bs.current = r;
    var x = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Qn(r, n.child, null, d), r.child = Qn(r, null, x, d)) : wr(n, r, x, d), r.memoizedState = o.state, c && Dc(r, l, !0), r.child;
  }
  function Co(n) {
    var r = n.stateNode;
    r.pendingContext ? Hv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Hv(n, r.context, !1), Md(n, r.containerInfo);
  }
  function Jv(n, r, l, o, c) {
    return Ul(), nl(c), r.flags |= 256, wr(n, r, l, o), r.child;
  }
  var af = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function lf(n, r, l) {
    var o = r.pendingProps, c = Vn.current, d = !1, m = (r.flags & 128) !== 0, x;
    if ((x = m) || (x = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), x ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Je(Vn, c & 1), n === null)
      return Rd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Yl(m, o, 0, null), n = ol(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Pd(l), r.memoizedState = af, n) : Vd(r, m));
    if (c = n.memoizedState, c !== null && (x = c.dehydrated, x !== null)) return eh(n, r, m, o, x, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, x = c.sibling;
      var b = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = b, r.deletions = null) : (o = Il(c, b), o.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? d = Il(x, d) : (d = ol(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Pd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = af, o;
    }
    return d = n.child, n = d.sibling, o = Il(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Vd(n, r) {
    return r = Yl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ds(n, r, l, o) {
    return o !== null && nl(o), Qn(r, n.child, null, l), n = Vd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function eh(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ad(Error(E(422))), Ds(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Yl({ mode: "visible", children: o.children }, c, 0, null), d = ol(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Qn(r, n.child, null, m), r.child.memoizedState = Pd(m), r.memoizedState = af, d);
    if (!(r.mode & 1)) return Ds(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var x = o.dgst;
      return o = x, d = Error(E(419)), o = Ad(d, o, void 0), Ds(n, r, m, o);
    }
    if (x = (m & n.childLanes) !== 0, rr || x) {
      if (o = fr, o !== null) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, wa(n, c), Qr(o, n, c, -1));
      }
      return qd(), o = Ad(Error(E(421))), Ds(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = _y.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, sa = ki(c.nextSibling), oa = r, An = !0, Ba = null, n !== null && (tr[Va++] = Ni, tr[Va++] = Li, tr[Va++] = Ra, Ni = n.id, Li = n.overflow, Ra = r), r = Vd(r, o.children), r.flags |= 4096, r);
  }
  function Bd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), bd(n.return, r, l);
  }
  function Ir(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ai(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (wr(n, r, o.children, l), o = Vn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
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
    if (Je(Vn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && jc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Ir(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && jc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Ir(r, !0, l, null, d);
        break;
      case "together":
        Ir(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ia(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ya(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Fi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(E(153));
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
        er(r.type) && vr(r);
        break;
      case 4:
        Md(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Je(xa, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Je(Vn, Vn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? lf(n, r, l) : (Je(Vn, Vn.current & 1), n = Ya(n, r, l), n !== null ? n.sibling : null);
        Je(Vn, Vn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Ai(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Je(Vn, Vn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, _s(n, r, l);
    }
    return Ya(n, r, l);
  }
  var Wa, ar, th, nh;
  Wa = function(n, r) {
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
  }, ar = function() {
  }, th = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Cu(zi.current);
      var d = null;
      switch (l) {
        case "input":
          c = xe(n, c), o = xe(n, o), d = [];
          break;
        case "select":
          c = Te({}, c, { value: void 0 }), o = Te({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = cn(n, c), o = cn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ol);
      }
      wn(l, o);
      var m;
      l = null;
      for ($ in c) if (!o.hasOwnProperty($) && c.hasOwnProperty($) && c[$] != null) if ($ === "style") {
        var x = c[$];
        for (m in x) x.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (P.hasOwnProperty($) ? d || (d = []) : (d = d || []).push($, null));
      for ($ in o) {
        var b = o[$];
        if (x = c != null ? c[$] : void 0, o.hasOwnProperty($) && b !== x && (b != null || x != null)) if ($ === "style") if (x) {
          for (m in x) !x.hasOwnProperty(m) || b && b.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in b) b.hasOwnProperty(m) && x[m] !== b[m] && (l || (l = {}), l[m] = b[m]);
        } else l || (d || (d = []), d.push(
          $,
          l
        )), l = b;
        else $ === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, x = x ? x.__html : void 0, b != null && x !== b && (d = d || []).push($, b)) : $ === "children" ? typeof b != "string" && typeof b != "number" || (d = d || []).push($, "" + b) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (P.hasOwnProperty($) ? (b != null && $ === "onScroll" && pn("scroll", n), d || x === b || (d = [])) : (d = d || []).push($, b));
      }
      l && (d = d || []).push("style", l);
      var $ = d;
      (r.updateQueue = $) && (r.flags |= 4);
    }
  }, nh = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ms(n, r) {
    if (!An) switch (n.tailMode) {
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
        return mr(r), null;
      case 1:
        return er(r.type) && mo(), mr(r), null;
      case 3:
        return o = r.stateNode, Ru(), Dn(sr), Dn($n), nt(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Lc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ba !== null && (Lu(Ba), Ba = null))), ar(n, r), mr(r), null;
      case 5:
        Uc(r);
        var c = Cu(ms.current);
        if (l = r.type, n !== null && r.stateNode != null) th(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(E(166));
            return mr(r), null;
          }
          if (n = Cu(zi.current), Lc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Di] = r, o[ss] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                pn("cancel", o), pn("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                pn("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ls.length; c++) pn(ls[c], o);
                break;
              case "source":
                pn("error", o);
                break;
              case "img":
              case "image":
              case "link":
                pn(
                  "error",
                  o
                ), pn("load", o);
                break;
              case "details":
                pn("toggle", o);
                break;
              case "input":
                be(o, d), pn("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, pn("invalid", o);
                break;
              case "textarea":
                yn(o, d), pn("invalid", o);
            }
            wn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var x = d[m];
              m === "children" ? typeof x == "string" ? o.textContent !== x && (d.suppressHydrationWarning !== !0 && Tc(o.textContent, x, n), c = ["children", x]) : typeof x == "number" && o.textContent !== "" + x && (d.suppressHydrationWarning !== !0 && Tc(
                o.textContent,
                x,
                n
              ), c = ["children", "" + x]) : P.hasOwnProperty(m) && x != null && m === "onScroll" && pn("scroll", o);
            }
            switch (l) {
              case "input":
                oe(o), et(o, d, !0);
                break;
              case "textarea":
                oe(o), hn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ol);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ht(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Di] = r, n[ss] = o, Wa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = te(l, o), l) {
                case "dialog":
                  pn("cancel", n), pn("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  pn("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ls.length; c++) pn(ls[c], n);
                  c = o;
                  break;
                case "source":
                  pn("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  pn(
                    "error",
                    n
                  ), pn("load", n), c = o;
                  break;
                case "details":
                  pn("toggle", n), c = o;
                  break;
                case "input":
                  be(n, o), c = xe(n, o), pn("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = Te({}, o, { value: void 0 }), pn("invalid", n);
                  break;
                case "textarea":
                  yn(n, o), c = cn(n, o), pn("invalid", n);
                  break;
                default:
                  c = o;
              }
              wn(l, c), x = c;
              for (d in x) if (x.hasOwnProperty(d)) {
                var b = x[d];
                d === "style" ? fn(n, b) : d === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, b != null && On(n, b)) : d === "children" ? typeof b == "string" ? (l !== "textarea" || b !== "") && he(n, b) : typeof b == "number" && he(n, "" + b) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (P.hasOwnProperty(d) ? b != null && d === "onScroll" && pn("scroll", n) : b != null && Re(n, d, b, m));
              }
              switch (l) {
                case "input":
                  oe(n), et(n, o, !1);
                  break;
                case "textarea":
                  oe(n), hn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + bt(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? $t(n, !!o.multiple, d, !1) : o.defaultValue != null && $t(
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
          if (typeof o != "string" && r.stateNode === null) throw Error(E(166));
          if (l = Cu(ms.current), Cu(zi.current), Lc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Di] = r, (d = o.nodeValue !== l) && (n = oa, n !== null)) switch (n.tag) {
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
        if (Dn(Vn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (An && sa !== null && r.mode & 1 && !(r.flags & 128)) ds(), Ul(), r.flags |= 98560, d = !1;
          else if (d = Lc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(E(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(E(317));
              d[Di] = r;
            } else Ul(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            mr(r), d = !1;
          } else Ba !== null && (Lu(Ba), Ba = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Vn.current & 1 ? Xn === 0 && (Xn = 3) : qd())), r.updateQueue !== null && (r.flags |= 4), mr(r), null);
      case 4:
        return Ru(), ar(n, r), n === null && co(r.stateNode.containerInfo), mr(r), null;
      case 10:
        return Td(r.type._context), mr(r), null;
      case 17:
        return er(r.type) && mo(), mr(r), null;
      case 19:
        if (Dn(Vn), d = r.memoizedState, d === null) return mr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ms(d, !1);
        else {
          if (Xn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = jc(n), m !== null) {
              for (r.flags |= 128, Ms(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Je(Vn, Vn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && kt() > To && (r.flags |= 128, o = !0, Ms(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = jc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ms(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !An) return mr(r), null;
          } else 2 * kt() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, Ms(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = kt(), r.sibling = null, l = Vn.current, Je(Vn, o ? l & 1 | 2 : l & 1), r) : (mr(r), null);
      case 22:
      case 23:
        return Xd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ba & 1073741824 && (mr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : mr(r), null;
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
        return er(r.type) && mo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ru(), Dn(sr), Dn($n), nt(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Uc(r), null;
      case 13:
        if (Dn(Vn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(E(340));
          Ul();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Dn(Vn), null;
      case 4:
        return Ru(), null;
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
  var Ns = !1, Fr = !1, Ey = typeof WeakSet == "function" ? WeakSet : Set, Pe = null;
  function Ro(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Un(n, r, o);
    }
    else l.current = null;
  }
  function of(n, r, l) {
    try {
      l();
    } catch (o) {
      Un(n, r, o);
    }
  }
  var ah = !1;
  function ih(n, r) {
    if (os = ja, n = as(), yc(n)) {
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
          var m = 0, x = -1, b = -1, $ = 0, le = 0, de = n, ie = null;
          t: for (; ; ) {
            for (var Ue; de !== l || c !== 0 && de.nodeType !== 3 || (x = m + c), de !== d || o !== 0 && de.nodeType !== 3 || (b = m + o), de.nodeType === 3 && (m += de.nodeValue.length), (Ue = de.firstChild) !== null; )
              ie = de, de = Ue;
            for (; ; ) {
              if (de === n) break t;
              if (ie === l && ++$ === c && (x = m), ie === d && ++le === o && (b = m), (Ue = de.nextSibling) !== null) break;
              de = ie, ie = de.parentNode;
            }
            de = Ue;
          }
          l = x === -1 || b === -1 ? null : { start: x, end: b };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (hu = { focusedElem: n, selectionRange: l }, ja = !1, Pe = r; Pe !== null; ) if (r = Pe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Pe = n;
    else for (; Pe !== null; ) {
      r = Pe;
      try {
        var Ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ye !== null) {
              var Ke = Ye.memoizedProps, qn = Ye.memoizedState, N = r.stateNode, k = N.getSnapshotBeforeUpdate(r.elementType === r.type ? Ke : vi(r.type, Ke), qn);
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
        Un(r, r.return, ue);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Pe = n;
        break;
      }
      Pe = r.return;
    }
    return Ye = ah, ah = !1, Ye;
  }
  function Ls(n, r, l) {
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
  var Kn = null, Yr = !1;
  function Wr(n, r, l) {
    for (l = l.child; l !== null; ) lh(n, r, l), l = l.sibling;
  }
  function lh(n, r, l) {
    if (aa && typeof aa.onCommitFiberUnmount == "function") try {
      aa.onCommitFiberUnmount(Cl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Fr || Ro(l, r);
      case 6:
        var o = Kn, c = Yr;
        Kn = null, Wr(n, r, l), Kn = o, Yr = c, Kn !== null && (Yr ? (n = Kn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Kn.removeChild(l.stateNode));
        break;
      case 18:
        Kn !== null && (Yr ? (n = Kn, l = l.stateNode, n.nodeType === 8 ? vo(n.parentNode, l) : n.nodeType === 1 && vo(n, l), si(n)) : vo(Kn, l.stateNode));
        break;
      case 4:
        o = Kn, c = Yr, Kn = l.stateNode.containerInfo, Yr = !0, Wr(n, r, l), Kn = o, Yr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Fr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && of(l, r, m), c = c.next;
          } while (c !== o);
        }
        Wr(n, r, l);
        break;
      case 1:
        if (!Fr && (Ro(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (x) {
          Un(l, r, x);
        }
        Wr(n, r, l);
        break;
      case 21:
        Wr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Fr = (o = Fr) || l.memoizedState !== null, Wr(n, r, l), Fr = o) : Wr(n, r, l);
        break;
      default:
        Wr(n, r, l);
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
  function hi(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, x = m;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              Kn = x.stateNode, Yr = !1;
              break e;
            case 3:
              Kn = x.stateNode.containerInfo, Yr = !0;
              break e;
            case 4:
              Kn = x.stateNode.containerInfo, Yr = !0;
              break e;
          }
          x = x.return;
        }
        if (Kn === null) throw Error(E(160));
        lh(d, m, c), Kn = null, Yr = !1;
        var b = c.alternate;
        b !== null && (b.return = null), c.return = null;
      } catch ($) {
        Un(c, r, $);
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
        if (hi(r, n), pa(n), o & 4) {
          try {
            Ls(3, n, n.return), zs(3, n);
          } catch (Ke) {
            Un(n, n.return, Ke);
          }
          try {
            Ls(5, n, n.return);
          } catch (Ke) {
            Un(n, n.return, Ke);
          }
        }
        break;
      case 1:
        hi(r, n), pa(n), o & 512 && l !== null && Ro(l, l.return);
        break;
      case 5:
        if (hi(r, n), pa(n), o & 512 && l !== null && Ro(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            he(c, "");
          } catch (Ke) {
            Un(n, n.return, Ke);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, x = n.type, b = n.updateQueue;
          if (n.updateQueue = null, b !== null) try {
            x === "input" && d.type === "radio" && d.name != null && Fe(c, d), te(x, m);
            var $ = te(x, d);
            for (m = 0; m < b.length; m += 2) {
              var le = b[m], de = b[m + 1];
              le === "style" ? fn(c, de) : le === "dangerouslySetInnerHTML" ? On(c, de) : le === "children" ? he(c, de) : Re(c, le, de, $);
            }
            switch (x) {
              case "input":
                Ge(c, d);
                break;
              case "textarea":
                In(c, d);
                break;
              case "select":
                var ie = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Ue = d.value;
                Ue != null ? $t(c, !!d.multiple, Ue, !1) : ie !== !!d.multiple && (d.defaultValue != null ? $t(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : $t(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ss] = d;
          } catch (Ke) {
            Un(n, n.return, Ke);
          }
        }
        break;
      case 6:
        if (hi(r, n), pa(n), o & 4) {
          if (n.stateNode === null) throw Error(E(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ke) {
            Un(n, n.return, Ke);
          }
        }
        break;
      case 3:
        if (hi(r, n), pa(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          si(r.containerInfo);
        } catch (Ke) {
          Un(n, n.return, Ke);
        }
        break;
      case 4:
        hi(r, n), pa(n);
        break;
      case 13:
        hi(r, n), pa(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Qd = kt())), o & 4 && uh(n);
        break;
      case 22:
        if (le = l !== null && l.memoizedState !== null, n.mode & 1 ? (Fr = ($ = Fr) || le, hi(r, n), Fr = $) : hi(r, n), pa(n), o & 8192) {
          if ($ = n.memoizedState !== null, (n.stateNode.isHidden = $) && !le && n.mode & 1) for (Pe = n, le = n.child; le !== null; ) {
            for (de = Pe = le; Pe !== null; ) {
              switch (ie = Pe, Ue = ie.child, ie.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ls(4, ie, ie.return);
                  break;
                case 1:
                  Ro(ie, ie.return);
                  var Ye = ie.stateNode;
                  if (typeof Ye.componentWillUnmount == "function") {
                    o = ie, l = ie.return;
                    try {
                      r = o, Ye.props = r.memoizedProps, Ye.state = r.memoizedState, Ye.componentWillUnmount();
                    } catch (Ke) {
                      Un(o, l, Ke);
                    }
                  }
                  break;
                case 5:
                  Ro(ie, ie.return);
                  break;
                case 22:
                  if (ie.memoizedState !== null) {
                    Us(de);
                    continue;
                  }
              }
              Ue !== null ? (Ue.return = ie, Pe = Ue) : Us(de);
            }
            le = le.sibling;
          }
          e: for (le = null, de = n; ; ) {
            if (de.tag === 5) {
              if (le === null) {
                le = de;
                try {
                  c = de.stateNode, $ ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (x = de.stateNode, b = de.memoizedProps.style, m = b != null && b.hasOwnProperty("display") ? b.display : null, x.style.display = It("display", m));
                } catch (Ke) {
                  Un(n, n.return, Ke);
                }
              }
            } else if (de.tag === 6) {
              if (le === null) try {
                de.stateNode.nodeValue = $ ? "" : de.memoizedProps;
              } catch (Ke) {
                Un(n, n.return, Ke);
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
        hi(r, n), pa(n), o & 4 && uh(n);
        break;
      case 21:
        break;
      default:
        hi(
          r,
          n
        ), pa(n);
    }
  }
  function pa(n) {
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
          throw Error(E(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (he(c, ""), o.flags &= -33);
            var d = il(n);
            ji(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, x = il(n);
            Ui(n, x, m);
            break;
          default:
            throw Error(E(161));
        }
      } catch (b) {
        Un(n, n.return, b);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Cy(n, r, l) {
    Pe = n, Yd(n);
  }
  function Yd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Pe !== null; ) {
      var c = Pe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ns;
        if (!m) {
          var x = c.alternate, b = x !== null && x.memoizedState !== null || Fr;
          x = Ns;
          var $ = Fr;
          if (Ns = m, (Fr = b) && !$) for (Pe = c; Pe !== null; ) m = Pe, b = m.child, m.tag === 22 && m.memoizedState !== null ? Wd(c) : b !== null ? (b.return = m, Pe = b) : Wd(c);
          for (; d !== null; ) Pe = d, Yd(d), d = d.sibling;
          Pe = c, Ns = x, Fr = $;
        }
        oh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Pe = d) : oh(n);
    }
  }
  function oh(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Fr || zs(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Fr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : vi(r.type, l.memoizedProps);
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
              var x = r.stateNode;
              if (l === null && r.flags & 4) {
                l = x;
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
                  var le = $.memoizedState;
                  if (le !== null) {
                    var de = le.dehydrated;
                    de !== null && si(de);
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
          Fr || r.flags & 512 && $d(r);
        } catch (ie) {
          Un(r, r.return, ie);
        }
      }
      if (r === n) {
        Pe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Pe = l;
        break;
      }
      Pe = r.return;
    }
  }
  function Us(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      if (r === n) {
        Pe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Pe = l;
        break;
      }
      Pe = r.return;
    }
  }
  function Wd(n) {
    for (; Pe !== null; ) {
      var r = Pe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              zs(4, r);
            } catch (b) {
              Un(r, l, b);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (b) {
                Un(r, c, b);
              }
            }
            var d = r.return;
            try {
              $d(r);
            } catch (b) {
              Un(r, d, b);
            }
            break;
          case 5:
            var m = r.return;
            try {
              $d(r);
            } catch (b) {
              Un(r, m, b);
            }
        }
      } catch (b) {
        Un(r, r.return, b);
      }
      if (r === n) {
        Pe = null;
        break;
      }
      var x = r.sibling;
      if (x !== null) {
        x.return = r.return, Pe = x;
        break;
      }
      Pe = r.return;
    }
  }
  var Ry = Math.ceil, Vl = ce.ReactCurrentDispatcher, Mu = ce.ReactCurrentOwner, Tr = ce.ReactCurrentBatchConfig, Wt = 0, fr = null, ir = null, br = 0, ba = 0, xo = Pa(0), Xn = 0, js = null, Fi = 0, wo = 0, cf = 0, Fs = null, va = null, Qd = 0, To = 1 / 0, _a = null, bo = !1, Nu = null, Bl = null, ff = !1, ll = null, Hs = 0, $l = 0, _o = null, Ps = -1, Hr = 0;
  function lr() {
    return Wt & 6 ? kt() : Ps !== -1 ? Ps : Ps = kt();
  }
  function Hi(n) {
    return n.mode & 1 ? Wt & 2 && br !== 0 ? br & -br : Sy.transition !== null ? (Hr === 0 && (Hr = Zu()), Hr) : (n = nn, n !== 0 || (n = window.event, n = n === void 0 ? 16 : io(n.type)), n) : 1;
  }
  function Qr(n, r, l, o) {
    if (50 < $l) throw $l = 0, _o = null, Error(E(185));
    Qi(n, l, o), (!(Wt & 2) || n !== fr) && (n === fr && (!(Wt & 2) && (wo |= l), Xn === 4 && mi(n, br)), ha(n, o), l === 1 && Wt === 0 && !(r.mode & 1) && (To = kt() + 500, yo && Mi()));
  }
  function ha(n, r) {
    var l = n.callbackNode;
    lu(n, r);
    var o = oi(n, n === fr ? br : 0);
    if (o === 0) l !== null && Cr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Cr(l), r === 1) n.tag === 0 ? Nl(Gd.bind(null, n)) : Oc(Gd.bind(null, n)), po(function() {
        !(Wt & 6) && Mi();
      }), l = null;
      else {
        switch (eo(o)) {
          case 1:
            l = li;
            break;
          case 4:
            l = au;
            break;
          case 16:
            l = iu;
            break;
          case 536870912:
            l = Ku;
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
    if (Ps = -1, Hr = 0, Wt & 6) throw Error(E(327));
    var l = n.callbackNode;
    if (ko() && n.callbackNode !== l) return null;
    var o = oi(n, n === fr ? br : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = pf(n, o);
    else {
      r = o;
      var c = Wt;
      Wt |= 2;
      var d = ch();
      (fr !== n || br !== r) && (_a = null, To = kt() + 500, ul(n, r));
      do
        try {
          fh();
          break;
        } catch (x) {
          sh(n, x);
        }
      while (!0);
      wd(), Vl.current = d, Wt = c, ir !== null ? r = 0 : (fr = null, br = 0, r = Xn);
    }
    if (r !== 0) {
      if (r === 2 && (c = xl(n), c !== 0 && (o = c, r = Vs(n, c))), r === 1) throw l = js, ul(n, 0), mi(n, o), ha(n, kt()), l;
      if (r === 6) mi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !xy(c) && (r = pf(n, o), r === 2 && (d = xl(n), d !== 0 && (o = d, r = Vs(n, d))), r === 1)) throw l = js, ul(n, 0), mi(n, o), ha(n, kt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(E(345));
          case 2:
            Au(n, va, _a);
            break;
          case 3:
            if (mi(n, o), (o & 130023424) === o && (r = Qd + 500 - kt(), 10 < r)) {
              if (oi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                lr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = _c(Au.bind(null, n, va, _a), r);
              break;
            }
            Au(n, va, _a);
            break;
          case 4:
            if (mi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Vr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = kt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Ry(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = _c(Au.bind(null, n, va, _a), o);
              break;
            }
            Au(n, va, _a);
            break;
          case 5:
            Au(n, va, _a);
            break;
          default:
            throw Error(E(329));
        }
      }
    }
    return ha(n, kt()), n.callbackNode === l ? df.bind(null, n) : null;
  }
  function Vs(n, r) {
    var l = Fs;
    return n.current.memoizedState.isDehydrated && (ul(n, r).flags |= 256), n = pf(n, r), n !== 2 && (r = va, va = l, r !== null && Lu(r)), n;
  }
  function Lu(n) {
    va === null ? va = n : va.push.apply(va, n);
  }
  function xy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!fi(d(), c)) return !1;
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
  function mi(n, r) {
    for (r &= ~cf, r &= ~wo, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Vr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Gd(n) {
    if (Wt & 6) throw Error(E(327));
    ko();
    var r = oi(n, 0);
    if (!(r & 1)) return ha(n, kt()), null;
    var l = pf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = xl(n);
      o !== 0 && (r = o, l = Vs(n, o));
    }
    if (l === 1) throw l = js, ul(n, 0), mi(n, r), ha(n, kt()), l;
    if (l === 6) throw Error(E(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Au(n, va, _a), ha(n, kt()), null;
  }
  function Kd(n, r) {
    var l = Wt;
    Wt |= 1;
    try {
      return n(r);
    } finally {
      Wt = l, Wt === 0 && (To = kt() + 500, yo && Mi());
    }
  }
  function zu(n) {
    ll !== null && ll.tag === 0 && !(Wt & 6) && ko();
    var r = Wt;
    Wt |= 1;
    var l = Tr.transition, o = nn;
    try {
      if (Tr.transition = null, nn = 1, n) return n();
    } finally {
      nn = o, Tr.transition = l, Wt = r, !(Wt & 6) && Mi();
    }
  }
  function Xd() {
    ba = xo.current, Dn(xo);
  }
  function ul(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Sd(l)), ir !== null) for (l = ir.return; l !== null; ) {
      var o = l;
      switch (Nc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && mo();
          break;
        case 3:
          Ru(), Dn(sr), Dn($n), nt();
          break;
        case 5:
          Uc(o);
          break;
        case 4:
          Ru();
          break;
        case 13:
          Dn(Vn);
          break;
        case 19:
          Dn(Vn);
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
    if (fr = n, ir = n = Il(n.current, null), br = ba = r, Xn = 0, js = null, cf = wo = Fi = 0, va = Fs = null, Eu !== null) {
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
      var l = ir;
      try {
        if (wd(), Ut.current = ku, Fc) {
          for (var o = an.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Fc = !1;
        }
        if (Cn = 0, hr = nr = an = null, gs = !1, xu = 0, Mu.current = null, l === null || l.return === null) {
          Xn = 1, js = r, ir = null;
          break;
        }
        e: {
          var d = n, m = l.return, x = l, b = r;
          if (r = br, x.flags |= 32768, b !== null && typeof b == "object" && typeof b.then == "function") {
            var $ = b, le = x, de = le.tag;
            if (!(le.mode & 1) && (de === 0 || de === 11 || de === 15)) {
              var ie = le.alternate;
              ie ? (le.updateQueue = ie.updateQueue, le.memoizedState = ie.memoizedState, le.lanes = ie.lanes) : (le.updateQueue = null, le.memoizedState = null);
            }
            var Ue = Xv(m);
            if (Ue !== null) {
              Ue.flags &= -257, Pl(Ue, m, x, d, r), Ue.mode & 1 && Fd(d, $, r), r = Ue, b = $;
              var Ye = r.updateQueue;
              if (Ye === null) {
                var Ke = /* @__PURE__ */ new Set();
                Ke.add(b), r.updateQueue = Ke;
              } else Ye.add(b);
              break e;
            } else {
              if (!(r & 1)) {
                Fd(d, $, r), qd();
                break e;
              }
              b = Error(E(426));
            }
          } else if (An && x.mode & 1) {
            var qn = Xv(m);
            if (qn !== null) {
              !(qn.flags & 65536) && (qn.flags |= 256), Pl(qn, m, x, d, r), nl(Du(b, x));
              break e;
            }
          }
          d = b = Du(b, x), Xn !== 4 && (Xn = 2), Fs === null ? Fs = [d] : Fs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var N = Kv(d, b, r);
                Iv(d, N);
                break e;
              case 1:
                x = b;
                var k = d.type, U = d.stateNode;
                if (!(d.flags & 128) && (typeof k.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (Bl === null || !Bl.has(U)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ue = jd(d, x, r);
                  Iv(d, ue);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ph(l);
      } catch (We) {
        r = We, ir === l && l !== null && (ir = l = l.return);
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
    (Xn === 0 || Xn === 3 || Xn === 2) && (Xn = 4), fr === null || !(Fi & 268435455) && !(wo & 268435455) || mi(fr, br);
  }
  function pf(n, r) {
    var l = Wt;
    Wt |= 2;
    var o = ch();
    (fr !== n || br !== r) && (_a = null, ul(n, r));
    do
      try {
        wy();
        break;
      } catch (c) {
        sh(n, c);
      }
    while (!0);
    if (wd(), Wt = l, Vl.current = o, ir !== null) throw Error(E(261));
    return fr = null, br = 0, Xn;
  }
  function wy() {
    for (; ir !== null; ) dh(ir);
  }
  function fh() {
    for (; ir !== null && !ai(); ) dh(ir);
  }
  function dh(n) {
    var r = yh(n.alternate, n, ba);
    n.memoizedProps = n.pendingProps, r === null ? ph(n) : ir = r, Mu.current = null;
  }
  function ph(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = uf(l, r), l !== null) {
          l.flags &= 32767, ir = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Xn = 6, ir = null;
          return;
        }
      } else if (l = rh(l, r, ba), l !== null) {
        ir = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        ir = r;
        return;
      }
      ir = r = n;
    } while (r !== null);
    Xn === 0 && (Xn = 5);
  }
  function Au(n, r, l) {
    var o = nn, c = Tr.transition;
    try {
      Tr.transition = null, nn = 1, Ty(n, r, l, o);
    } finally {
      Tr.transition = c, nn = o;
    }
    return null;
  }
  function Ty(n, r, l, o) {
    do
      ko();
    while (ll !== null);
    if (Wt & 6) throw Error(E(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(E(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Zf(n, d), n === fr && (ir = fr = null, br = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ff || (ff = !0, gh(iu, function() {
      return ko(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Tr.transition, Tr.transition = null;
      var m = nn;
      nn = 1;
      var x = Wt;
      Wt |= 4, Mu.current = null, ih(n, l), Id(l, n), oo(hu), ja = !!os, hu = os = null, n.current = l, Cy(l), ii(), Wt = x, nn = m, Tr.transition = d;
    } else n.current = l;
    if (ff && (ff = !1, ll = n, Hs = c), d = n.pendingLanes, d === 0 && (Bl = null), Go(l.stateNode), ha(n, kt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (bo) throw bo = !1, n = Nu, Nu = null, n;
    return Hs & 1 && n.tag !== 0 && ko(), d = n.pendingLanes, d & 1 ? n === _o ? $l++ : ($l = 0, _o = n) : $l = 0, Mi(), null;
  }
  function ko() {
    if (ll !== null) {
      var n = eo(Hs), r = Tr.transition, l = nn;
      try {
        if (Tr.transition = null, nn = 16 > n ? 16 : n, ll === null) var o = !1;
        else {
          if (n = ll, ll = null, Hs = 0, Wt & 6) throw Error(E(331));
          var c = Wt;
          for (Wt |= 4, Pe = n.current; Pe !== null; ) {
            var d = Pe, m = d.child;
            if (Pe.flags & 16) {
              var x = d.deletions;
              if (x !== null) {
                for (var b = 0; b < x.length; b++) {
                  var $ = x[b];
                  for (Pe = $; Pe !== null; ) {
                    var le = Pe;
                    switch (le.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ls(8, le, d);
                    }
                    var de = le.child;
                    if (de !== null) de.return = le, Pe = de;
                    else for (; Pe !== null; ) {
                      le = Pe;
                      var ie = le.sibling, Ue = le.return;
                      if (sf(le), le === $) {
                        Pe = null;
                        break;
                      }
                      if (ie !== null) {
                        ie.return = Ue, Pe = ie;
                        break;
                      }
                      Pe = Ue;
                    }
                  }
                }
                var Ye = d.alternate;
                if (Ye !== null) {
                  var Ke = Ye.child;
                  if (Ke !== null) {
                    Ye.child = null;
                    do {
                      var qn = Ke.sibling;
                      Ke.sibling = null, Ke = qn;
                    } while (Ke !== null);
                  }
                }
                Pe = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, Pe = m;
            else e: for (; Pe !== null; ) {
              if (d = Pe, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ls(9, d, d.return);
              }
              var N = d.sibling;
              if (N !== null) {
                N.return = d.return, Pe = N;
                break e;
              }
              Pe = d.return;
            }
          }
          var k = n.current;
          for (Pe = k; Pe !== null; ) {
            m = Pe;
            var U = m.child;
            if (m.subtreeFlags & 2064 && U !== null) U.return = m, Pe = U;
            else e: for (m = k; Pe !== null; ) {
              if (x = Pe, x.flags & 2048) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zs(9, x);
                }
              } catch (We) {
                Un(x, x.return, We);
              }
              if (x === m) {
                Pe = null;
                break e;
              }
              var ue = x.sibling;
              if (ue !== null) {
                ue.return = x.return, Pe = ue;
                break e;
              }
              Pe = x.return;
            }
          }
          if (Wt = c, Mi(), aa && typeof aa.onPostCommitFiberRoot == "function") try {
            aa.onPostCommitFiberRoot(Cl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        nn = l, Tr.transition = r;
      }
    }
    return !1;
  }
  function vh(n, r, l) {
    r = Du(l, r), r = Kv(n, r, 1), n = jl(n, r, 1), r = lr(), n !== null && (Qi(n, 1, r), ha(n, r));
  }
  function Un(n, r, l) {
    if (n.tag === 3) vh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        vh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Bl === null || !Bl.has(o))) {
          n = Du(l, n), n = jd(r, n, 1), r = jl(r, n, 1), n = lr(), r !== null && (Qi(r, 1, n), ha(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function by(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = lr(), n.pingedLanes |= n.suspendedLanes & l, fr === n && (br & l) === l && (Xn === 4 || Xn === 3 && (br & 130023424) === br && 500 > kt() - Qd ? ul(n, 0) : cf |= l), ha(n, r);
  }
  function hh(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ca, Ca <<= 1, !(Ca & 130023424) && (Ca = 4194304)) : r = 1);
    var l = lr();
    n = wa(n, r), n !== null && (Qi(n, r, l), ha(n, l));
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
    if (n !== null) if (n.memoizedProps !== r.pendingProps || sr.current) rr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return rr = !1, Os(n, r, l);
      rr = !!(n.flags & 131072);
    }
    else rr = !1, An && r.flags & 1048576 && Pv(r, tl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ia(n, r), n = r.pendingProps;
        var c = ua(r, $n.current);
        Pn(r, l), c = Fl(null, r, o, n, c, l);
        var d = pi();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, er(o) ? (d = !0, vr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Dd(r), c.updater = tf, r.stateNode = c, c._reactInternals = r, Ts(r, o, n, l), r = ks(null, r, o, !0, d, l)) : (r.tag = 0, An && d && Mc(r), wr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ia(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = Dy(o), n = vi(o, n), c) {
            case 0:
              r = qv(null, r, o, n, l);
              break e;
            case 1:
              r = Zv(null, r, o, n, l);
              break e;
            case 11:
              r = da(null, r, o, n, l);
              break e;
            case 14:
              r = Ou(null, r, o, vi(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : vi(o, c), qv(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : vi(o, c), Zv(n, r, o, c, l);
      case 3:
        e: {
          if (Co(r), n === null) throw Error(E(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, $v(n, r), ps(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Du(Error(E(423)), r), r = Jv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Du(Error(E(424)), r), r = Jv(n, r, o, l, c);
            break e;
          } else for (sa = ki(r.stateNode.containerInfo.firstChild), oa = r, An = !0, Ba = null, l = Le(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ul(), o === c) {
              r = Ya(n, r, l);
              break e;
            }
            wr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Yv(r), n === null && Rd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, bc(o, c) ? m = null : d !== null && bc(o, d) && (r.flags |= 32), Hd(n, r), wr(n, r, m, l), r.child;
      case 6:
        return n === null && Rd(r), null;
      case 13:
        return lf(n, r, l);
      case 4:
        return Md(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Qn(r, null, o, l) : wr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : vi(o, c), da(n, r, o, c, l);
      case 7:
        return wr(n, r, r.pendingProps, l), r.child;
      case 8:
        return wr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return wr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Je(xa, o._currentValue), o._currentValue = m, d !== null) if (fi(d.value, m)) {
            if (d.children === c.children && !sr.current) {
              r = Ya(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var x = d.dependencies;
            if (x !== null) {
              m = d.child;
              for (var b = x.firstContext; b !== null; ) {
                if (b.context === o) {
                  if (d.tag === 1) {
                    b = rl(-1, l & -l), b.tag = 2;
                    var $ = d.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var le = $.pending;
                      le === null ? b.next = b : (b.next = le.next, le.next = b), $.pending = b;
                    }
                  }
                  d.lanes |= l, b = d.alternate, b !== null && (b.lanes |= l), bd(
                    d.return,
                    l,
                    r
                  ), x.lanes |= l;
                  break;
                }
                b = b.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(E(341));
              m.lanes |= l, x = m.alternate, x !== null && (x.lanes |= l), bd(m, l, r), m = d.sibling;
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
          wr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Pn(r, l), c = $a(c), o = o(c), r.flags |= 1, wr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = vi(o, r.pendingProps), c = vi(o.type, c), Ou(n, r, o, c, l);
      case 15:
        return Mt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : vi(o, c), Ia(n, r), r.tag = 1, er(o) ? (n = !0, vr(r)) : n = !1, Pn(r, l), nf(r, o, c), Ts(r, o, c, l), ks(null, r, o, !0, n, l);
      case 19:
        return Ai(n, r, l);
      case 22:
        return _s(n, r, l);
    }
    throw Error(E(156, r.tag));
  };
  function gh(n, r) {
    return Nn(n, r);
  }
  function ky(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Qa(n, r, l, o) {
    return new ky(n, r, l, o);
  }
  function Zd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Dy(n) {
    if (typeof n == "function") return Zd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === wt) return 11;
      if (n === Bt) return 14;
    }
    return 2;
  }
  function Il(n, r) {
    var l = n.alternate;
    return l === null ? (l = Qa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Bs(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Zd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Be:
        return ol(l.children, c, d, r);
      case ht:
        m = 8, c |= 8;
        break;
      case xt:
        return n = Qa(12, l, r, c | 2), n.elementType = xt, n.lanes = d, n;
      case $e:
        return n = Qa(13, l, r, c), n.elementType = $e, n.lanes = d, n;
      case Jt:
        return n = Qa(19, l, r, c), n.elementType = Jt, n.lanes = d, n;
      case Ie:
        return Yl(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case rt:
            m = 10;
            break e;
          case Nt:
            m = 9;
            break e;
          case wt:
            m = 11;
            break e;
          case Bt:
            m = 14;
            break e;
          case Kt:
            m = 16, o = null;
            break e;
        }
        throw Error(E(130, n == null ? n : typeof n, ""));
    }
    return r = Qa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function ol(n, r, l, o) {
    return n = Qa(7, n, o, r), n.lanes = l, n;
  }
  function Yl(n, r, l, o) {
    return n = Qa(22, n, o, r), n.elementType = Ie, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Jd(n, r, l) {
    return n = Qa(6, n, null, r), n.lanes = l, n;
  }
  function vf(n, r, l) {
    return r = Qa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ju(0), this.expirationTimes = Ju(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ju(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function hf(n, r, l, o, c, d, m, x, b) {
    return n = new Sh(n, r, l, x, b), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Qa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Dd(d), n;
  }
  function Oy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: qe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function ep(n) {
    if (!n) return Ur;
    n = n._reactInternals;
    e: {
      if (_t(n) !== n || n.tag !== 1) throw Error(E(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (er(r.type)) {
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
      if (er(l)) return fs(n, l, r);
    }
    return r;
  }
  function Eh(n, r, l, o, c, d, m, x, b) {
    return n = hf(l, o, !0, n, c, d, m, x, b), n.context = ep(null), l = n.current, o = lr(), c = Hi(l), d = rl(o, c), d.callback = r ?? null, jl(l, d, c), n.current.lanes = c, Qi(n, c, o), ha(n, o), n;
  }
  function mf(n, r, l, o) {
    var c = r.current, d = lr(), m = Hi(c);
    return l = ep(l), r.context === null ? r.context = l : r.pendingContext = l, r = rl(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = jl(c, r, m), n !== null && (Qr(n, c, m, d), Ac(n, c, m)), m;
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
    if (r === null) throw Error(E(409));
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
      for (var l = 0; l < or.length && r !== 0 && r < or[l].priority; l++) ;
      or.splice(l, 0, n), l === 0 && qo(n);
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
      return n._reactRootContainer = m, n[Ji] = m.current, co(n.nodeType === 8 ? n.parentNode : n), zu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var x = o;
      o = function() {
        var $ = yf(b);
        x.call($);
      };
    }
    var b = hf(n, 0, !1, null, null, !1, !1, "", Rh);
    return n._reactRootContainer = b, n[Ji] = b.current, co(n.nodeType === 8 ? n.parentNode : n), zu(function() {
      mf(r, b, l, o);
    }), b;
  }
  function $s(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var b = yf(m);
          x.call(b);
        };
      }
      mf(r, m, n, c);
    } else m = My(l, r, n, c, o);
    return yf(m);
  }
  qt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ui(r.pendingLanes);
          l !== 0 && (Gi(r, l | 1), ha(r, kt()), !(Wt & 6) && (To = kt() + 500, Mi()));
        }
        break;
      case 13:
        zu(function() {
          var o = wa(n, 1);
          if (o !== null) {
            var c = lr();
            Qr(o, n, 1, c);
          }
        }), gf(n, 1);
    }
  }, Ko = function(n) {
    if (n.tag === 13) {
      var r = wa(n, 134217728);
      if (r !== null) {
        var l = lr();
        Qr(r, n, 134217728, l);
      }
      gf(n, 134217728);
    }
  }, xi = function(n) {
    if (n.tag === 13) {
      var r = Hi(n), l = wa(n, r);
      if (l !== null) {
        var o = lr();
        Qr(l, n, r, o);
      }
      gf(n, r);
    }
  }, yt = function() {
    return nn;
  }, to = function(n, r) {
    var l = nn;
    try {
      return nn = n, r();
    } finally {
      nn = l;
    }
  }, we = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ge(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Hn(o);
              if (!c) throw Error(E(90));
              Ne(o), Ge(o, c);
            }
          }
        }
        break;
      case "textarea":
        In(n, l);
        break;
      case "select":
        r = l.value, r != null && $t(n, !!l.multiple, r, !1);
    }
  }, ra = Kd, Pr = zu;
  var Ny = { usingClientEntryPoint: !1, Events: [tt, di, Hn, Sr, Ar, Kd] }, Is = { findFiberByHostInstance: mu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xh = { bundleType: Is.bundleType, version: Is.version, rendererPackageName: Is.rendererPackageName, rendererConfig: Is.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ce.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Wn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Is.findFiberByHostInstance || Ch, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Wl.isDisabled && Wl.supportsFiber) try {
      Cl = Wl.inject(xh), aa = Wl;
    } catch {
    }
  }
  return Ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ny, Ja.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!rp(r)) throw Error(E(200));
    return Oy(n, r, null, l);
  }, Ja.createRoot = function(n, r) {
    if (!rp(n)) throw Error(E(299));
    var l = !1, o = "", c = Uu;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = hf(n, 1, !1, null, null, l, !1, o, c), n[Ji] = r.current, co(n.nodeType === 8 ? n.parentNode : n), new np(r);
  }, Ja.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(E(188)) : (n = Object.keys(n).join(","), Error(E(268, n)));
    return n = Wn(r), n = n === null ? null : n.stateNode, n;
  }, Ja.flushSync = function(n) {
    return zu(n);
  }, Ja.hydrate = function(n, r, l) {
    if (!Ef(r)) throw Error(E(200));
    return $s(null, n, r, !0, l);
  }, Ja.hydrateRoot = function(n, r, l) {
    if (!rp(n)) throw Error(E(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Uu;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Eh(r, null, n, 1, l ?? null, c, !1, d, m), n[Ji] = r.current, co(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Sf(r);
  }, Ja.render = function(n, r, l) {
    if (!Ef(r)) throw Error(E(200));
    return $s(null, n, r, !1, l);
  }, Ja.unmountComponentAtNode = function(n) {
    if (!Ef(n)) throw Error(E(40));
    return n._reactRootContainer ? (zu(function() {
      $s(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ji] = null;
      });
    }), !0) : !1;
  }, Ja.unstable_batchedUpdates = Kd, Ja.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Ef(l)) throw Error(E(200));
    if (n == null || n._reactInternals === void 0) throw Error(E(38));
    return $s(n, r, l, !1, o);
  }, Ja.version = "18.3.1-next-f1338f8080-20240426", Ja;
}
var ei = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cx;
function Nk() {
  return Cx || (Cx = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var S = mn, R = kx(), E = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, j = !1;
    function P(e) {
      j = e;
    }
    function Y(e) {
      if (!j) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ye("warn", e, a);
      }
    }
    function y(e) {
      if (!j) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ye("error", e, a);
      }
    }
    function ye(e, t, a) {
      {
        var i = E.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var K = 0, M = 1, ve = 2, X = 3, Z = 4, F = 5, ge = 6, ee = 7, A = 8, re = 9, fe = 10, Re = 11, ce = 12, me = 13, qe = 14, Be = 15, ht = 16, xt = 17, rt = 18, Nt = 19, wt = 21, $e = 22, Jt = 23, Bt = 24, Kt = 25, Ie = !0, Se = !1, Xe = !1, Te = !1, O = !1, q = !0, ot = !0, at = !0, Dt = !0, Tt = /* @__PURE__ */ new Set(), Et = {}, bt = {};
    function Ot(e, t) {
      H(e, t), H(e + "Capture", t);
    }
    function H(e, t) {
      Et[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Et[e] = t;
      {
        var a = e.toLowerCase();
        bt[a] = e, e === "onDoubleClick" && (bt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Tt.add(t[i]);
    }
    var oe = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ne = Object.prototype.hasOwnProperty;
    function _e(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function xe(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function Fe(e, t) {
      if (xe(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _e(e)), be(e);
    }
    function Ge(e) {
      if (xe(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _e(e)), be(e);
    }
    function et(e, t) {
      if (xe(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _e(e)), be(e);
    }
    function ft(e, t) {
      if (xe(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, _e(e)), be(e);
    }
    function Xt(e) {
      if (xe(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", _e(e)), be(e);
    }
    function $t(e) {
      if (xe(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", _e(e)), be(e);
    }
    var cn = 0, yn = 1, In = 2, hn = 3, Ht = 4, sn = 5, jn = 6, On = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", he = On + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Oe = new RegExp("^[" + On + "][" + he + "]*$"), pt = {}, It = {};
    function fn(e) {
      return Ne.call(It, e) ? !0 : Ne.call(pt, e) ? !1 : Oe.test(e) ? (It[e] = !0, !0) : (pt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function Mn(e, t, a) {
      return t !== null ? t.type === cn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function wn(e, t, a, i) {
      if (a !== null && a.type === cn)
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
    function te(e, t, a, i) {
      if (t === null || typeof t > "u" || wn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case hn:
            return !t;
          case Ht:
            return t === !1;
          case sn:
            return isNaN(t);
          case jn:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function se(e) {
      return we.hasOwnProperty(e) ? we[e] : null;
    }
    function Ee(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === In || t === hn || t === Ht, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var we = {}, Ct = [
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
    Ct.forEach(function(e) {
      we[e] = new Ee(
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
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      we[t] = new Ee(
        t,
        yn,
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
      we[e] = new Ee(
        e,
        In,
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
      we[e] = new Ee(
        e,
        In,
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
      we[e] = new Ee(
        e,
        hn,
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
      we[e] = new Ee(
        e,
        hn,
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
      we[e] = new Ee(
        e,
        Ht,
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
      we[e] = new Ee(
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
    }), ["rowSpan", "start"].forEach(function(e) {
      we[e] = new Ee(
        e,
        sn,
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
    var dn = /[\-\:]([a-z])/g, bn = function(e) {
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
      var t = e.replace(dn, bn);
      we[t] = new Ee(
        t,
        yn,
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
      var t = e.replace(dn, bn);
      we[t] = new Ee(
        t,
        yn,
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
      var t = e.replace(dn, bn);
      we[t] = new Ee(
        t,
        yn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      we[e] = new Ee(
        e,
        yn,
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
    var Sr = "xlinkHref";
    we[Sr] = new Ee(
      "xlinkHref",
      yn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      we[e] = new Ee(
        e,
        yn,
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
    var Ar = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ra = !1;
    function Pr(e) {
      !ra && Ar.test(e) && (ra = !0, y("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ti(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Fe(a, t), i.sanitizeURL && Pr("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Ht) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : te(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (te(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === hn)
            return a;
          f = e.getAttribute(s);
        }
        return te(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ni(e, t, a, i) {
      {
        if (!fn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Fe(a, t), u === "" + a ? a : u;
      }
    }
    function pr(e, t, a, i) {
      var u = se(t);
      if (!Mn(t, u, i)) {
        if (te(t, a, u, i) && (a = null), i || u === null) {
          if (fn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Fe(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === hn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var g = u.attributeName, C = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(g);
        else {
          var D = u.type, _;
          D === hn || D === Ht && a === !0 ? _ = "" : (Fe(a, g), _ = "" + a, u.sanitizeURL && Pr(_.toString())), C ? e.setAttributeNS(C, g, _) : e.setAttribute(g, _);
        }
      }
    }
    var Er = Symbol.for("react.element"), Yn = Symbol.for("react.portal"), Ei = Symbol.for("react.fragment"), ri = Symbol.for("react.strict_mode"), Ci = Symbol.for("react.profiler"), Ri = Symbol.for("react.provider"), T = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), Me = Symbol.for("react.suspense"), Ve = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), jt = Symbol.for("react.scope"), At = Symbol.for("react.debug_trace_mode"), Wn = Symbol.for("react.offscreen"), _n = Symbol.for("react.legacy_hidden"), Nn = Symbol.for("react.cache"), Cr = Symbol.for("react.tracing_marker"), ai = Symbol.iterator, ii = "@@iterator";
    function kt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ai && e[ai] || e[ii];
      return typeof t == "function" ? t : null;
    }
    var Lt = Object.assign, li = 0, au, iu, El, Ku, Cl, aa, Go;
    function Vr() {
    }
    Vr.__reactDisabledLog = !0;
    function fc() {
      {
        if (li === 0) {
          au = console.log, iu = console.info, El = console.warn, Ku = console.error, Cl = console.group, aa = console.groupCollapsed, Go = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Vr,
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
        li++;
      }
    }
    function dc() {
      {
        if (li--, li === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Lt({}, e, {
              value: au
            }),
            info: Lt({}, e, {
              value: iu
            }),
            warn: Lt({}, e, {
              value: El
            }),
            error: Lt({}, e, {
              value: Ku
            }),
            group: Lt({}, e, {
              value: Cl
            }),
            groupCollapsed: Lt({}, e, {
              value: aa
            }),
            groupEnd: Lt({}, e, {
              value: Go
            })
          });
        }
        li < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xu = E.ReactCurrentDispatcher, Rl;
    function Ca(e, t, a) {
      {
        if (Rl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Rl = i && i[1] || "";
          }
        return `
` + Rl + e;
      }
    }
    var ui = !1, oi;
    {
      var qu = typeof WeakMap == "function" ? WeakMap : Map;
      oi = new qu();
    }
    function lu(e, t) {
      if (!e || ui)
        return "";
      {
        var a = oi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ui = !0;
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
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && oi.set(e, D), D;
                  }
                while (g >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        ui = !1, Xu.current = s, dc(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", V = _ ? Ca(_) : "";
      return typeof e == "function" && oi.set(e, V), V;
    }
    function xl(e, t, a) {
      return lu(e, !0);
    }
    function Zu(e, t, a) {
      return lu(e, !1);
    }
    function Ju(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Qi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return lu(e, Ju(e));
      if (typeof e == "string")
        return Ca(e);
      switch (e) {
        case Me:
          return Ca("Suspense");
        case Ve:
          return Ca("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            return Zu(e.render);
          case _t:
            return Qi(e.type, t, a);
          case gt: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Qi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Zf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case F:
          return Ca(e.type);
        case ht:
          return Ca("Lazy");
        case me:
          return Ca("Suspense");
        case Nt:
          return Ca("SuspenseList");
        case K:
        case ve:
        case Be:
          return Zu(e.type);
        case Re:
          return Zu(e.type.render);
        case M:
          return xl(e.type);
        default:
          return "";
      }
    }
    function Gi(e) {
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
    function nn(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function eo(e) {
      return e.displayName || "Context";
    }
    function qt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ei:
          return "Fragment";
        case Yn:
          return "Portal";
        case Ci:
          return "Profiler";
        case ri:
          return "StrictMode";
        case Me:
          return "Suspense";
        case Ve:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var t = e;
            return eo(t) + ".Consumer";
          case Ri:
            var a = e;
            return eo(a._context) + ".Provider";
          case ne:
            return nn(e, e.render, "ForwardRef");
          case _t:
            var i = e.displayName || null;
            return i !== null ? i : qt(e.type) || "Memo";
          case gt: {
            var u = e, s = u._payload, f = u._init;
            try {
              return qt(f(s));
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
    function xi(e) {
      return e.displayName || "Context";
    }
    function yt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Bt:
          return "Cache";
        case re:
          var i = a;
          return xi(i) + ".Consumer";
        case fe:
          var u = a;
          return xi(u._context) + ".Provider";
        case rt:
          return "DehydratedFragment";
        case Re:
          return Ko(a, a.render, "ForwardRef");
        case ee:
          return "Fragment";
        case F:
          return a;
        case Z:
          return "Portal";
        case X:
          return "Root";
        case ge:
          return "Text";
        case ht:
          return qt(a);
        case A:
          return a === ri ? "StrictMode" : "Mode";
        case $e:
          return "Offscreen";
        case ce:
          return "Profiler";
        case wt:
          return "Scope";
        case me:
          return "Suspense";
        case Nt:
          return "SuspenseList";
        case Kt:
          return "TracingMarker";
        case M:
        case K:
        case xt:
        case ve:
        case qe:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var to = E.ReactDebugCurrentFrame, Rr = null, wi = !1;
    function Br() {
      {
        if (Rr === null)
          return null;
        var e = Rr._debugOwner;
        if (e !== null && typeof e < "u")
          return yt(e);
      }
      return null;
    }
    function Ti() {
      return Rr === null ? "" : Gi(Rr);
    }
    function Ln() {
      to.getCurrentStack = null, Rr = null, wi = !1;
    }
    function gn(e) {
      to.getCurrentStack = e === null ? null : Ti, Rr = e, wi = !1;
    }
    function wl() {
      return Rr;
    }
    function or(e) {
      wi = e;
    }
    function $r(e) {
      return "" + e;
    }
    function Aa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return $t(e), e;
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
    function Ua(e) {
      var t = qo(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      $t(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            $t(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            $t(p), i = "" + p;
          },
          stopTracking: function() {
            ou(e), delete e[t];
          }
        };
        return f;
      }
    }
    function si(e) {
      Tl(e) || (e._valueTracker = Ua(e));
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
    function ja(e) {
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
      var a = e, i = t.checked, u = Lt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ci(e, t) {
      Xo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ro && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component", t.type), ro = !0), t.value !== void 0 && t.defaultValue !== void 0 && !no && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component", t.type), no = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Aa(t.value != null ? t.value : i),
        controlled: ao(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && pr(a, "checked", i, !1);
    }
    function w(e, t) {
      var a = e;
      {
        var i = ao(t);
        !a._wrapperState.controlled && i && !su && (y("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), su = !0), a._wrapperState.controlled && !i && !bl && (y("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), bl = !0);
      }
      h(e, t);
      var u = Aa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = $r(u)) : a.value !== $r(u) && (a.value = $r(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? it(a, t.type, u) : t.hasOwnProperty("defaultValue") && it(a, t.type, Aa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function B(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = $r(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function W(e, t) {
      var a = e;
      w(a, t), Ce(a, t);
    }
    function Ce(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Fe(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Vh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            bi(f), w(f, p);
          }
        }
      }
    }
    function it(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ja(e.ownerDocument) !== e) && (a == null ? e.defaultValue = $r(e._wrapperState.initialValue) : e.defaultValue !== $r(a) && (e.defaultValue = $r(a)));
    }
    var De = !1, st = !1, Ft = !1;
    function Zt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? S.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || st || (st = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ft || (Ft = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !De && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), De = !0);
    }
    function kn(e, t) {
      t.value != null && e.setAttribute("value", $r(Aa(t.value)));
    }
    var Sn = Array.isArray;
    function zt(e) {
      return Sn(e);
    }
    var En;
    En = !1;
    function Fn() {
      var e = Br();
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
            var i = zt(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Fn()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Fn());
          }
        }
      }
    }
    function Ki(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var g = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== g && (u[v].selected = g), g && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var C = $r(Aa(a)), D = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === C) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          D === null && !u[_].disabled && (D = u[_]);
        }
        D !== null && (D.selected = !0);
      }
    }
    function Jo(e, t) {
      return Lt({}, t, {
        value: void 0
      });
    }
    function cu(e, t) {
      var a = e;
      Zo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !En && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), En = !0);
    }
    function ed(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ki(a, !!t.multiple, i, !1) : t.defaultValue != null && Ki(a, !!t.multiple, t.defaultValue, !0);
    }
    function pc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ki(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ki(a, !!t.multiple, t.defaultValue, !0) : Ki(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function td(e, t) {
      var a = e, i = t.value;
      i != null && Ki(a, !!t.multiple, i, !1);
    }
    var cv = !1;
    function nd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Lt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: $r(a._wrapperState.initialValue)
      });
      return i;
    }
    function rd(e, t) {
      var a = e;
      Xo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Br() || "A component"), cv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (zt(u)) {
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
        initialValue: Aa(i)
      };
    }
    function fv(e, t) {
      var a = e, i = Aa(t.value), u = Aa(t.defaultValue);
      if (i != null) {
        var s = $r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = $r(u));
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
    }), ia = 1, qi = 3, Jn = 8, Zi = 9, od = 11, lo = function(e, t) {
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
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ts.hasOwnProperty(e) && ts[e]) ? t + "px" : (ft(t, e), ("" + t).trim());
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
      }, Rv = function(e) {
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
      }, xv = function(e, t) {
        Cv || (Cv = !0, y("`NaN` is an invalid value for the `%s` css style property.", e));
      }, wv = function(e, t) {
        ns || (ns = !0, y("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Sv = function(e, t) {
        e.indexOf("-") > -1 ? Rv(e) : oy.test(e) ? cd(e) : sd.test(t) && fd(e, t), typeof t == "number" && (isNaN(t) ? xv(e, t) : isFinite(t) || wv(e, t));
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
    var fi = {
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
    }, rs = Lt({
      menuitem: !0
    }, fi), kv = "__html";
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
    }, oo = {}, vy = new RegExp("^(aria)-[" + he + "]*$"), so = new RegExp("^(aria)[A-Z][" + he + "]*$");
    function dd(e, t) {
      {
        if (Ne.call(oo, t) && oo[t])
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
      var xr = {}, hd = /^on./, Sc = /^on[^A-Z]/, Dv = new RegExp("^(aria)-[" + he + "]*$"), Ov = new RegExp("^(aria)[A-Z][" + he + "]*$");
      du = function(e, t, a, i) {
        if (Ne.call(xr, t) && xr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), xr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), xr[t] = !0, !0;
          if (hd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), xr[t] = !0, !0;
        } else if (hd.test(t))
          return Sc.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), xr[t] = !0, !0;
        if (Dv.test(t) || Ov.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), xr[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), xr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), xr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), xr[t] = !0, !0;
        var v = se(t), g = v !== null && v.type === cn;
        if (as.hasOwnProperty(u)) {
          var C = as[u];
          if (C !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, C), xr[t] = !0, !0;
        } else if (!g && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), xr[t] = !0, !0;
        return typeof a == "boolean" && wn(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), xr[t] = !0, !0) : g ? !0 : wn(t, a, v, !1) ? (xr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === hn && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), xr[t] = !0), !0);
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
    function Nv(e, t, a) {
      kl(e, t) || Mv(e, t, a);
    }
    var md = 1, Ec = 2, Fa = 4, yd = md | Ec | Fa, pu = null;
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
    var Cc = null, vu = null, pn = null;
    function Rc(e) {
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
    function xc(e) {
      Cc = e;
    }
    function co(e) {
      vu ? pn ? pn.push(e) : pn = [e] : vu = e;
    }
    function Lv() {
      return vu !== null || pn !== null;
    }
    function wc() {
      if (vu) {
        var e = vu, t = pn;
        if (vu = null, pn = null, Rc(e), t)
          for (var a = 0; a < t.length; a++)
            Rc(t[a]);
      }
    }
    var fo = function(e, t) {
      return e(t);
    }, us = function() {
    }, Dl = !1;
    function zv() {
      var e = Lv();
      e && (us(), wc());
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
    if (oe)
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
        var C = document.createEvent("Event"), D = !1, _ = !0, V = window.event, I = Object.getOwnPropertyDescriptor(window, "event");
        function Q() {
          Sd.removeEventListener(G, lt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var ze = Array.prototype.slice.call(arguments, 3);
        function lt() {
          D = !0, Q(), a.apply(i, ze), _ = !1;
        }
        var Ze, Gt = !1, Pt = !1;
        function L(z) {
          if (Ze = z.error, Gt = !0, Ze === null && z.colno === 0 && z.lineno === 0 && (Pt = !0), z.defaultPrevented && Ze != null && typeof Ze == "object")
            try {
              Ze._suppressLogging = !0;
            } catch {
            }
        }
        var G = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", L), Sd.addEventListener(G, lt, !1), C.initEvent(G, !1, !1), Sd.dispatchEvent(C), I && Object.defineProperty(window, "event", I), D && _ && (Gt ? Pt && (Ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ze)), window.removeEventListener("error", L), !D)
          return Q(), bc.apply(this, arguments);
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
        var g = cs();
        vo || (vo = !0, ki = g);
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
    ), di = (
      /*                */
      1
    ), Hn = (
      /*                    */
      2
    ), Yt = (
      /*                       */
      4
    ), Ha = (
      /*                */
      16
    ), Pa = (
      /*                 */
      32
    ), Dn = (
      /*                     */
      64
    ), Je = (
      /*                   */
      128
    ), Ur = (
      /*            */
      256
    ), $n = (
      /*                          */
      512
    ), sr = (
      /*                     */
      1024
    ), la = (
      /*                      */
      2048
    ), ua = (
      /*                    */
      4096
    ), er = (
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
    ), Nl = (
      /*               */
      16777216
    ), Mi = (
      /*              */
      33554432
    ), Ll = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Yt | sr | 0
    ), zl = Hn | Yt | Ha | Pa | $n | ua | er, Al = Yt | Dn | $n | er, tl = la | Ha, tr = el | Oc | yo, Va = E.ReactCurrentOwner;
    function Ra(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Hn | ua)) !== tt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === X ? a : null;
    }
    function Ni(e) {
      if (e.tag === me) {
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
    function Li(e) {
      return e.tag === X ? e.stateNode.containerInfo : null;
    }
    function yu(e) {
      return Ra(e) === e;
    }
    function Pv(e) {
      {
        var t = Va.current;
        if (t !== null && t.tag === M) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", yt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ho(e);
      return u ? Ra(u) === u : !1;
    }
    function Mc(e) {
      if (Ra(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Nc(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ra(e);
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
      if (i.tag !== X)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function oa(e) {
      var t = Nc(e);
      return t !== null ? sa(t) : null;
    }
    function sa(e) {
      if (e.tag === F || e.tag === ge)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = sa(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function An(e) {
      var t = Nc(e);
      return t !== null ? Ba(t) : null;
    }
    function Ba(e) {
      if (e.tag === F || e.tag === ge)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Z) {
          var a = Ba(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ed = R.unstable_scheduleCallback, Vv = R.unstable_cancelCallback, Cd = R.unstable_shouldYield, Rd = R.unstable_requestPaint, cr = R.unstable_now, Lc = R.unstable_getCurrentPriorityLevel, ds = R.unstable_ImmediatePriority, Ul = R.unstable_UserBlockingPriority, nl = R.unstable_NormalPriority, Sy = R.unstable_LowPriority, gu = R.unstable_IdlePriority, zc = R.unstable_yieldValue, Bv = R.unstable_setDisableYieldValue, Su = null, Qn = null, Le = null, xa = !1, ca = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function go(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ot && (e = Lt({}, e, {
          getLaneLabelMap: Eu,
          injectProfilingHooks: $a
        })), Su = t.inject(e), Qn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function xd(e, t) {
      if (Qn && typeof Qn.onScheduleFiberRoot == "function")
        try {
          Qn.onScheduleFiberRoot(Su, e, t);
        } catch (a) {
          xa || (xa = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function wd(e, t) {
      if (Qn && typeof Qn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Je) === Je;
          if (at) {
            var i;
            switch (t) {
              case Ir:
                i = ds;
                break;
              case Ai:
                i = Ul;
                break;
              case Ia:
                i = nl;
                break;
              case Ya:
                i = gu;
                break;
              default:
                i = nl;
                break;
            }
            Qn.onCommitFiberRoot(Su, e, i, a);
          }
        } catch (u) {
          xa || (xa = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function Td(e) {
      if (Qn && typeof Qn.onPostCommitFiberRoot == "function")
        try {
          Qn.onPostCommitFiberRoot(Su, e);
        } catch (t) {
          xa || (xa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function bd(e) {
      if (Qn && typeof Qn.onCommitFiberUnmount == "function")
        try {
          Qn.onCommitFiberUnmount(Su, e);
        } catch (t) {
          xa || (xa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Pn(e) {
      if (typeof zc == "function" && (Bv(e), P(e)), Qn && typeof Qn.setStrictMode == "function")
        try {
          Qn.setStrictMode(Su, e);
        } catch (t) {
          xa || (xa = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function $a(e) {
      Le = e;
    }
    function Eu() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < xu; a++) {
          var i = Wv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function _d(e) {
      Le !== null && typeof Le.markCommitStarted == "function" && Le.markCommitStarted(e);
    }
    function kd() {
      Le !== null && typeof Le.markCommitStopped == "function" && Le.markCommitStopped();
    }
    function wa(e) {
      Le !== null && typeof Le.markComponentRenderStarted == "function" && Le.markComponentRenderStarted(e);
    }
    function Ta() {
      Le !== null && typeof Le.markComponentRenderStopped == "function" && Le.markComponentRenderStopped();
    }
    function Dd(e) {
      Le !== null && typeof Le.markComponentPassiveEffectMountStarted == "function" && Le.markComponentPassiveEffectMountStarted(e);
    }
    function $v() {
      Le !== null && typeof Le.markComponentPassiveEffectMountStopped == "function" && Le.markComponentPassiveEffectMountStopped();
    }
    function rl(e) {
      Le !== null && typeof Le.markComponentPassiveEffectUnmountStarted == "function" && Le.markComponentPassiveEffectUnmountStarted(e);
    }
    function jl() {
      Le !== null && typeof Le.markComponentPassiveEffectUnmountStopped == "function" && Le.markComponentPassiveEffectUnmountStopped();
    }
    function Ac(e) {
      Le !== null && typeof Le.markComponentLayoutEffectMountStarted == "function" && Le.markComponentLayoutEffectMountStarted(e);
    }
    function Iv() {
      Le !== null && typeof Le.markComponentLayoutEffectMountStopped == "function" && Le.markComponentLayoutEffectMountStopped();
    }
    function ps(e) {
      Le !== null && typeof Le.markComponentLayoutEffectUnmountStarted == "function" && Le.markComponentLayoutEffectUnmountStarted(e);
    }
    function Od() {
      Le !== null && typeof Le.markComponentLayoutEffectUnmountStopped == "function" && Le.markComponentLayoutEffectUnmountStopped();
    }
    function vs(e, t, a) {
      Le !== null && typeof Le.markComponentErrored == "function" && Le.markComponentErrored(e, t, a);
    }
    function zi(e, t, a) {
      Le !== null && typeof Le.markComponentSuspended == "function" && Le.markComponentSuspended(e, t, a);
    }
    function hs(e) {
      Le !== null && typeof Le.markLayoutEffectsStarted == "function" && Le.markLayoutEffectsStarted(e);
    }
    function ms() {
      Le !== null && typeof Le.markLayoutEffectsStopped == "function" && Le.markLayoutEffectsStopped();
    }
    function Cu(e) {
      Le !== null && typeof Le.markPassiveEffectsStarted == "function" && Le.markPassiveEffectsStarted(e);
    }
    function Md() {
      Le !== null && typeof Le.markPassiveEffectsStopped == "function" && Le.markPassiveEffectsStopped();
    }
    function Ru(e) {
      Le !== null && typeof Le.markRenderStarted == "function" && Le.markRenderStarted(e);
    }
    function Yv() {
      Le !== null && typeof Le.markRenderYielded == "function" && Le.markRenderYielded();
    }
    function Uc() {
      Le !== null && typeof Le.markRenderStopped == "function" && Le.markRenderStopped();
    }
    function Vn(e) {
      Le !== null && typeof Le.markRenderScheduled == "function" && Le.markRenderScheduled(e);
    }
    function jc(e, t) {
      Le !== null && typeof Le.markForceUpdateScheduled == "function" && Le.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      Le !== null && typeof Le.markStateUpdateScheduled == "function" && Le.markStateUpdateScheduled(e, t);
    }
    var nt = (
      /*                         */
      0
    ), Ut = (
      /*                 */
      1
    ), rn = (
      /*                    */
      2
    ), Cn = (
      /*               */
      8
    ), an = (
      /*              */
      16
    ), nr = Math.clz32 ? Math.clz32 : gs, hr = Math.log, Fc = Math.LN2;
    function gs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (hr(t) / Fc | 0) | 0;
    }
    var xu = 31, ae = (
      /*                        */
      0
    ), en = (
      /*                          */
      0
    ), dt = (
      /*                        */
      1
    ), Fl = (
      /*    */
      2
    ), pi = (
      /*             */
      4
    ), jr = (
      /*            */
      8
    ), Gn = (
      /*                     */
      16
    ), al = (
      /*                */
      32
    ), Hl = (
      /*                       */
      4194240
    ), wu = (
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
    ), Tu = (
      /*                       */
      32768
    ), Qc = (
      /*                       */
      65536
    ), So = (
      /*                       */
      131072
    ), Eo = (
      /*                       */
      262144
    ), Gc = (
      /*                       */
      524288
    ), Ss = (
      /*                       */
      1048576
    ), Kc = (
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
    ), Nd = bu, Rs = (
      /*          */
      134217728
    ), Ld = (
      /*                          */
      268435455
    ), xs = (
      /*               */
      268435456
    ), _u = (
      /*                        */
      536870912
    ), fa = (
      /*                   */
      1073741824
    );
    function Wv(e) {
      {
        if (e & dt)
          return "Sync";
        if (e & Fl)
          return "InputContinuousHydration";
        if (e & pi)
          return "InputContinuous";
        if (e & jr)
          return "DefaultHydration";
        if (e & Gn)
          return "Default";
        if (e & al)
          return "TransitionHydration";
        if (e & Hl)
          return "Transition";
        if (e & Es)
          return "Retry";
        if (e & Rs)
          return "SelectiveHydration";
        if (e & xs)
          return "IdleHydration";
        if (e & _u)
          return "Idle";
        if (e & fa)
          return "Offscreen";
      }
    }
    var Tn = -1, ku = wu, Jc = bu;
    function ws(e) {
      switch (Pl(e)) {
        case dt:
          return dt;
        case Fl:
          return Fl;
        case pi:
          return pi;
        case jr:
          return jr;
        case Gn:
          return Gn;
        case al:
          return al;
        case wu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case Tu:
        case Qc:
        case So:
        case Eo:
        case Gc:
        case Ss:
        case Kc:
          return e & Hl;
        case bu:
        case Xc:
        case Cs:
        case qc:
        case Zc:
          return e & Es;
        case Rs:
          return Rs;
        case xs:
          return xs;
        case _u:
          return _u;
        case fa:
          return fa;
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
          i = ws(p);
        else {
          var v = f & s;
          v !== ae && (i = ws(v));
        }
      } else {
        var g = a & ~u;
        g !== ae ? i = ws(g) : s !== ae && (i = ws(s));
      }
      if (i === ae)
        return ae;
      if (t !== ae && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ae) {
        var C = Pl(i), D = Pl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          C >= D || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          C === Gn && (D & Hl) !== ae
        )
          return t;
      }
      (i & pi) !== ae && (i |= a & Gn);
      var _ = e.entangledLanes;
      if (_ !== ae)
        for (var V = e.entanglements, I = i & _; I > 0; ) {
          var Q = rr(I), ze = 1 << Q;
          i |= V[Q], I &= ~ze;
        }
      return i;
    }
    function vi(e, t) {
      for (var a = e.eventTimes, i = Tn; t > 0; ) {
        var u = rr(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function zd(e, t) {
      switch (e) {
        case dt:
        case Fl:
        case pi:
          return t + 250;
        case jr:
        case Gn:
        case al:
        case wu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case Tu:
        case Qc:
        case So:
        case Eo:
        case Gc:
        case Ss:
        case Kc:
          return t + 5e3;
        case bu:
        case Xc:
        case Cs:
        case qc:
        case Zc:
          return Tn;
        case Rs:
        case xs:
        case _u:
        case fa:
          return Tn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), Tn;
      }
    }
    function tf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = rr(f), v = 1 << p, g = s[p];
        g === Tn ? ((v & i) === ae || (v & u) !== ae) && (s[p] = zd(v, t)) : g <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Qv(e) {
      return ws(e.pendingLanes);
    }
    function nf(e) {
      var t = e.pendingLanes & ~fa;
      return t !== ae ? t : t & fa ? fa : ae;
    }
    function Gv(e) {
      return (e & dt) !== ae;
    }
    function Ts(e) {
      return (e & Ld) !== ae;
    }
    function Du(e) {
      return (e & Es) === e;
    }
    function Ad(e) {
      var t = dt | pi | Gn;
      return (e & t) === ae;
    }
    function Ud(e) {
      return (e & Hl) === e;
    }
    function rf(e, t) {
      var a = Fl | pi | jr | Gn;
      return (t & a) !== ae;
    }
    function Kv(e, t) {
      return (t & e.expiredLanes) !== ae;
    }
    function jd(e) {
      return (e & Hl) !== ae;
    }
    function Fd() {
      var e = ku;
      return ku <<= 1, (ku & Hl) === ae && (ku = wu), e;
    }
    function Xv() {
      var e = Jc;
      return Jc <<= 1, (Jc & Es) === ae && (Jc = bu), e;
    }
    function Pl(e) {
      return e & -e;
    }
    function bs(e) {
      return Pl(e);
    }
    function rr(e) {
      return 31 - nr(e);
    }
    function wr(e) {
      return rr(e);
    }
    function da(e, t) {
      return (e & t) !== ae;
    }
    function Ou(e, t) {
      return (e & t) === t;
    }
    function Mt(e, t) {
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
      for (var t = [], a = 0; a < xu; a++)
        t.push(e);
      return t;
    }
    function Co(e, t, a) {
      e.pendingLanes |= t, t !== _u && (e.suspendedLanes = ae, e.pingedLanes = ae);
      var i = e.eventTimes, u = wr(t);
      i[u] = a;
    }
    function Jv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = rr(i), s = 1 << u;
        a[u] = Tn, i &= ~s;
      }
    }
    function af(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Pd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ae, e.pingedLanes = ae, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = rr(f), v = 1 << p;
        i[p] = ae, u[p] = Tn, s[p] = Tn, f &= ~v;
      }
    }
    function lf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = rr(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Vd(e, t) {
      var a = Pl(t), i;
      switch (a) {
        case pi:
          i = Fl;
          break;
        case Gn:
          i = jr;
          break;
        case wu:
        case Hc:
        case Pc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case Wc:
        case Tu:
        case Qc:
        case So:
        case Eo:
        case Gc:
        case Ss:
        case Kc:
        case bu:
        case Xc:
        case Cs:
        case qc:
        case Zc:
          i = al;
          break;
        case _u:
          i = xs;
          break;
        default:
          i = en;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== en ? en : i;
    }
    function Ds(e, t, a) {
      if (ca)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = wr(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function eh(e, t) {
      if (ca)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = wr(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Bd(e, t) {
      return null;
    }
    var Ir = dt, Ai = pi, Ia = Gn, Ya = _u, Os = en;
    function Wa() {
      return Os;
    }
    function ar(e) {
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
      return mr(Ir, t) ? mr(Ai, t) ? Ts(t) ? Ia : Ya : Ai : Ir;
    }
    function uf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ns;
    function Fr(e) {
      Ns = e;
    }
    function Ey(e) {
      Ns(e);
    }
    var Pe;
    function Ro(e) {
      Pe = e;
    }
    var of;
    function ah(e) {
      of = e;
    }
    var ih;
    function Ls(e) {
      ih = e;
    }
    var zs;
    function $d(e) {
      zs = e;
    }
    var sf = !1, As = [], il = null, Ui = null, ji = null, Kn = /* @__PURE__ */ new Map(), Yr = /* @__PURE__ */ new Map(), Wr = [], lh = [
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
    function hi(e, t, a, i, u) {
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
          Kn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Yr.delete(i);
          break;
        }
      }
    }
    function pa(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = hi(t, a, i, u, s);
        if (t !== null) {
          var p = Mo(t);
          p !== null && Pe(p);
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
          return il = pa(il, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ui = pa(Ui, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ji = pa(ji, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, g = v.pointerId;
          return Kn.set(g, pa(Kn.get(g) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var C = u, D = C.pointerId;
          return Yr.set(D, pa(Yr.get(D) || null, e, t, a, i, C)), !0;
        }
      }
      return !1;
    }
    function Yd(e) {
      var t = Qs(e.target);
      if (t !== null) {
        var a = Ra(t);
        if (a !== null) {
          var i = a.tag;
          if (i === me) {
            var u = Ni(a);
            if (u !== null) {
              e.blockedOn = u, zs(e.priority, function() {
                of(a);
              });
              return;
            }
          } else if (i === X) {
            var s = a.stateNode;
            if (uf(s)) {
              e.blockedOn = Li(a);
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
      }, i = 0; i < Wr.length && mr(t, Wr[i].priority); i++)
        ;
      Wr.splice(i, 0, a), i === 0 && Yd(a);
    }
    function Us(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = wo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          hy(s), u.target.dispatchEvent(s), my();
        } else {
          var f = Mo(i);
          return f !== null && Pe(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Wd(e, t, a) {
      Us(e) && a.delete(t);
    }
    function Ry() {
      sf = !1, il !== null && Us(il) && (il = null), Ui !== null && Us(Ui) && (Ui = null), ji !== null && Us(ji) && (ji = null), Kn.forEach(Wd), Yr.forEach(Wd);
    }
    function Vl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, sf || (sf = !0, R.unstable_scheduleCallback(R.unstable_NormalPriority, Ry)));
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
      Kn.forEach(i), Yr.forEach(i);
      for (var u = 0; u < Wr.length; u++) {
        var s = Wr[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Wr.length > 0; ) {
        var f = Wr[0];
        if (f.blockedOn !== null)
          break;
        Yd(f), f.blockedOn === null && Wr.shift();
      }
    }
    var Tr = E.ReactCurrentBatchConfig, Wt = !0;
    function fr(e) {
      Wt = !!e;
    }
    function ir() {
      return Wt;
    }
    function br(e, t, a) {
      var i = cf(t), u;
      switch (i) {
        case Ir:
          u = ba;
          break;
        case Ai:
          u = xo;
          break;
        case Ia:
        default:
          u = Xn;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ba(e, t, a, i) {
      var u = Wa(), s = Tr.transition;
      Tr.transition = null;
      try {
        ar(Ir), Xn(e, t, a, i);
      } finally {
        ar(u), Tr.transition = s;
      }
    }
    function xo(e, t, a, i) {
      var u = Wa(), s = Tr.transition;
      Tr.transition = null;
      try {
        ar(Ai), Xn(e, t, a, i);
      } finally {
        ar(u), Tr.transition = s;
      }
    }
    function Xn(e, t, a, i) {
      Wt && js(e, t, a, i);
    }
    function js(e, t, a, i) {
      var u = wo(e, t, a, i);
      if (u === null) {
        Hy(e, t, i, Fi, a), Id(e, i);
        return;
      }
      if (Cy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Id(e, i), t & Fa && uh(e)) {
        for (; u !== null; ) {
          var s = Mo(u);
          s !== null && Ey(s);
          var f = wo(e, t, a, i);
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
    function wo(e, t, a, i) {
      Fi = null;
      var u = gd(i), s = Qs(u);
      if (s !== null) {
        var f = Ra(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === me) {
            var v = Ni(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === X) {
            var g = f.stateNode;
            if (uf(g))
              return Li(f);
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
          return Ir;
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
          var t = Lc();
          switch (t) {
            case ds:
              return Ir;
            case Ul:
              return Ai;
            case nl:
            case Sy:
              return Ia;
            case gu:
              return Ya;
            default:
              return Ia;
          }
        }
        default:
          return Ia;
      }
    }
    function Fs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function va(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Qd(e, t, a, i) {
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
    var _a = null, bo = null, Nu = null;
    function Bl(e) {
      return _a = e, bo = Hs(), !0;
    }
    function ff() {
      _a = null, bo = null, Nu = null;
    }
    function ll() {
      if (Nu)
        return Nu;
      var e, t = bo, a = t.length, i, u = Hs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Nu = u.slice(e, p), Nu;
    }
    function Hs() {
      return "value" in _a ? _a.value : _a.textContent;
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
    function Hr(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var g = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return g ? this.isDefaultPrevented = _o : this.isDefaultPrevented = Ps, this.isPropagationStopped = Ps, this;
      }
      return Lt(t.prototype, {
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
    var lr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Hi = Hr(lr), Qr = Lt({}, lr, {
      view: 0,
      detail: 0
    }), ha = Hr(Qr), df, Vs, Lu;
    function xy(e) {
      e !== Lu && (Lu && e.type === "mousemove" ? (df = e.screenX - Lu.screenX, Vs = e.screenY - Lu.screenY) : (df = 0, Vs = 0), Lu = e);
    }
    var mi = Lt({}, Qr, {
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
      getModifierState: Un,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (xy(e), df);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Vs;
      }
    }), Gd = Hr(mi), Kd = Lt({}, mi, {
      dataTransfer: 0
    }), zu = Hr(Kd), Xd = Lt({}, Qr, {
      relatedTarget: 0
    }), ul = Hr(Xd), sh = Lt({}, lr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ch = Hr(sh), qd = Lt({}, lr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), pf = Hr(qd), wy = Lt({}, lr, {
      data: 0
    }), fh = Hr(wy), dh = fh, ph = {
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
    function Un(e) {
      return vh;
    }
    var by = Lt({}, Qr, {
      key: Ty,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Un,
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
    }), hh = Hr(by), _y = Lt({}, mi, {
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
    }), mh = Hr(_y), yh = Lt({}, Qr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Un
    }), gh = Hr(yh), ky = Lt({}, lr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qa = Hr(ky), Zd = Lt({}, mi, {
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
    }), Dy = Hr(Zd), Il = [9, 13, 27, 32], Bs = 229, ol = oe && "CompositionEvent" in window, Yl = null;
    oe && "documentMode" in document && (Yl = document.documentMode);
    var Jd = oe && "TextEvent" in window && !Yl, vf = oe && (!ol || Yl && Yl > 8 && Yl <= 11), Sh = 32, hf = String.fromCharCode(Sh);
    function Oy() {
      Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ot("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ot("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ot("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
    function Ny(e) {
      if (!oe)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Is() {
      Ot("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function xh(e, t, a, i) {
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
    var Wl = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      xh(t, n, e, gd(e)), Av(o, t);
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
    oe && (m = Ny("input") && (!document.documentMode || document.documentMode > 9));
    function x(e, t) {
      Wl = e, n = t, Wl.attachEvent("onpropertychange", $);
    }
    function b() {
      Wl && (Wl.detachEvent("onpropertychange", $), Wl = null, n = null);
    }
    function $(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function le(e, t, a) {
      e === "focusin" ? (b(), x(t, a)) : e === "focusout" && b();
    }
    function de(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function ie(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ue(e, t) {
      if (e === "click")
        return c(t);
    }
    function Ye(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ke(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || it(e, "number", e.value);
    }
    function qn(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window, v, g;
      if (r(p) ? v = d : $s(p) ? m ? v = Ye : (v = de, g = le) : ie(p) && (v = Ue), v) {
        var C = v(t, a);
        if (C) {
          xh(e, C, i, u);
          return;
        }
      }
      g && g(t, p, a), t === "focusout" && Ke(p);
    }
    function N() {
      H("onMouseEnter", ["mouseout", "mouseover"]), H("onMouseLeave", ["mouseout", "mouseover"]), H("onPointerEnter", ["pointerout", "pointerover"]), H("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function k(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ls(i)) {
        var g = i.relatedTarget || i.fromElement;
        if (g && (Qs(g) || yp(g)))
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
        var _, V;
        if (v) {
          var I = i.relatedTarget || i.toElement;
          if (_ = a, V = I ? Qs(I) : null, V !== null) {
            var Q = Ra(V);
            (V !== Q || V.tag !== F && V.tag !== ge) && (V = null);
          }
        } else
          _ = null, V = a;
        if (_ !== V) {
          var ze = Gd, lt = "onMouseLeave", Ze = "onMouseEnter", Gt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ze = mh, lt = "onPointerLeave", Ze = "onPointerEnter", Gt = "pointer");
          var Pt = _ == null ? C : bf(_), L = V == null ? C : bf(V), G = new ze(lt, Gt + "leave", _, i, u);
          G.target = Pt, G.relatedTarget = L;
          var z = null, pe = Qs(u);
          if (pe === a) {
            var He = new ze(Ze, Gt + "enter", V, i, u);
            He.target = L, He.relatedTarget = Pt, z = He;
          }
          tw(e, G, z, _, V);
        }
      }
    }
    function U(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ue = typeof Object.is == "function" ? Object.is : U;
    function We(e, t) {
      if (ue(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Ne.call(t, s) || !ue(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ut(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ct(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function mt(e, t) {
      for (var a = ut(e), i = 0, u = 0; a; ) {
        if (a.nodeType === qi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ut(ct(a));
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
      return ln(e, u, s, f, p);
    }
    function ln(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, g = 0, C = e, D = null;
      e: for (; ; ) {
        for (var _ = null; C === t && (a === 0 || C.nodeType === qi) && (f = s + a), C === i && (u === 0 || C.nodeType === qi) && (p = s + u), C.nodeType === qi && (s += C.nodeValue.length), (_ = C.firstChild) !== null; )
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
    function Ql(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var g = mt(e, f), C = mt(e, p);
        if (g && C) {
          if (u.rangeCount === 1 && u.anchorNode === g.node && u.anchorOffset === g.offset && u.focusNode === C.node && u.focusOffset === C.offset)
            return;
          var D = a.createRange();
          D.setStart(g.node, g.offset), u.removeAllRanges(), f > p ? (u.addRange(D), u.extend(C.node, C.offset)) : (D.setEnd(C.node, C.offset), u.addRange(D));
        }
      }
    }
    function wh(e) {
      return e && e.nodeType === qi;
    }
    function L0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : wh(e) ? !1 : wh(t) ? L0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jx(e) {
      return e && e.ownerDocument && L0(e.ownerDocument.documentElement, e);
    }
    function Fx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function z0() {
      for (var e = window, t = ja(); t instanceof e.HTMLIFrameElement; ) {
        if (Fx(t))
          e = t.contentWindow;
        else
          return t;
        t = ja(e.document);
      }
      return t;
    }
    function Ly(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Hx() {
      var e = z0();
      return {
        focusedElem: e,
        selectionRange: Ly(e) ? Vx(e) : null
      };
    }
    function Px(e) {
      var t = z0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && jx(a)) {
        i !== null && Ly(a) && Bx(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === ia && u.push({
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
    function Vx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = yr(e), t || {
        start: 0,
        end: 0
      };
    }
    function Bx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Ql(e, t);
    }
    var $x = oe && "documentMode" in document && document.documentMode <= 11;
    function Ix() {
      Ot("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Cf = null, zy = null, ap = null, Ay = !1;
    function Yx(e) {
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
    function Wx(e) {
      return e.window === e ? e.document : e.nodeType === Zi ? e : e.ownerDocument;
    }
    function A0(e, t, a) {
      var i = Wx(a);
      if (!(Ay || Cf == null || Cf !== ja(i))) {
        var u = Yx(Cf);
        if (!ap || !We(ap, u)) {
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
    function Qx(e, t, a, i, u, s, f) {
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
          if ($x)
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
    oe && (U0 = document.createElement("div").style, "AnimationEvent" in window || (delete Rf.animationend.animation, delete Rf.animationiteration.animation, delete Rf.animationstart.animation), "TransitionEvent" in window || delete Rf.transitionend.transition);
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
    function Do(e, t) {
      V0.set(e, t), Ot(t, [e]);
    }
    function Gx() {
      for (var e = 0; e < B0.length; e++) {
        var t = B0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Do(a, "on" + i);
      }
      Do(j0, "onAnimationEnd"), Do(F0, "onAnimationIteration"), Do(H0, "onAnimationStart"), Do("dblclick", "onDoubleClick"), Do("focusin", "onFocus"), Do("focusout", "onBlur"), Do(P0, "onTransitionEnd");
    }
    function Kx(e, t, a, i, u, s, f) {
      var p = V0.get(t);
      if (p !== void 0) {
        var v = Hi, g = t;
        switch (t) {
          case "keypress":
            if ($l(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = hh;
            break;
          case "focusin":
            g = "focus", v = ul;
            break;
          case "focusout":
            g = "blur", v = ul;
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
            v = Qa;
            break;
          case "scroll":
            v = ha;
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
        var C = (s & Fa) !== 0;
        {
          var D = !C && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = Jx(a, p, i.type, C, D);
          if (_.length > 0) {
            var V = new v(p, g, null, i, u);
            e.push({
              event: V,
              listeners: _
            });
          }
        }
      }
    }
    Gx(), N(), Is(), Ix(), Oy();
    function Xx(e, t, a, i, u, s, f) {
      Kx(e, t, a, i, u, s);
      var p = (s & yd) === 0;
      p && (k(e, t, a, i, u), qn(e, t, a, i, u), Qx(e, t, a, i, u), Rh(e, t, a, i, u));
    }
    var ip = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], jy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ip));
    function $0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Di(i, t, void 0, e), e.currentTarget = null;
    }
    function qx(e, t, a) {
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
          var C = t[g], D = C.instance, _ = C.currentTarget, V = C.listener;
          if (D !== i && e.isPropagationStopped())
            return;
          $0(e, V, _), i = D;
        }
    }
    function I0(e, t) {
      for (var a = (t & Fa) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        qx(s, f, a);
      }
      ss();
    }
    function Zx(e, t, a, i, u) {
      var s = gd(a), f = [];
      Xx(f, e, i, a, s, t), I0(f, t);
    }
    function Bn(e, t) {
      jy.has(e) || y('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = k1(t), u = nw(e);
      i.has(u) || (Y0(t, e, Ec, a), i.add(u));
    }
    function Fy(e, t, a) {
      jy.has(e) && !t && y('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Fa), Y0(a, e, i, t);
    }
    var _h = "_reactListening" + Math.random().toString(36).slice(2);
    function lp(e) {
      if (!e[_h]) {
        e[_h] = !0, Tt.forEach(function(a) {
          a !== "selectionchange" && (jy.has(a) || Fy(a, !1, e), Fy(a, !0, e));
        });
        var t = e.nodeType === Zi ? e : e.ownerDocument;
        t !== null && (t[_h] || (t[_h] = !0, Fy("selectionchange", !1, t)));
      }
    }
    function Y0(e, t, a, i, u) {
      var s = br(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qd(e, t, s, f) : va(e, t, s) : f !== void 0 ? To(e, t, s, f) : Fs(e, t, s);
    }
    function W0(e, t) {
      return e === t || e.nodeType === Jn && e.parentNode === t;
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
            if (v === X || v === Z) {
              var g = p.stateNode.containerInfo;
              if (W0(g, f))
                break;
              if (v === Z)
                for (var C = p.return; C !== null; ) {
                  var D = C.tag;
                  if (D === X || D === Z) {
                    var _ = C.stateNode.containerInfo;
                    if (W0(_, f))
                      return;
                  }
                  C = C.return;
                }
              for (; g !== null; ) {
                var V = Qs(g);
                if (V === null)
                  return;
                var I = V.tag;
                if (I === F || I === ge) {
                  p = s = V;
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
        return Zx(e, t, a, s);
      });
    }
    function up(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Jx(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], g = e, C = null; g !== null; ) {
        var D = g, _ = D.stateNode, V = D.tag;
        if (V === F && _ !== null && (C = _, p !== null)) {
          var I = Ol(g, p);
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
        if (p === F && f !== null) {
          var v = f, g = Ol(u, a);
          g != null && i.unshift(up(u, g, v));
          var C = Ol(u, t);
          C != null && i.push(up(u, C, v));
        }
        u = u.return;
      }
      return i;
    }
    function xf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== F);
      return e || null;
    }
    function ew(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = xf(s))
        u++;
      for (var f = 0, p = i; p; p = xf(p))
        f++;
      for (; u - f > 0; )
        a = xf(a), u--;
      for (; f - u > 0; )
        i = xf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = xf(a), i = xf(i);
      }
      return null;
    }
    function Q0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, g = v.alternate, C = v.stateNode, D = v.tag;
        if (g !== null && g === i)
          break;
        if (D === F && C !== null) {
          var _ = C;
          if (u) {
            var V = Ol(p, s);
            V != null && f.unshift(up(p, V, _));
          } else if (!u) {
            var I = Ol(p, s);
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
    function tw(e, t, a, i, u) {
      var s = i && u ? ew(i, u) : null;
      i !== null && Q0(e, t, i, s, !1), u !== null && a !== null && Q0(e, a, u, s, !0);
    }
    function nw(e, t) {
      return e + "__bubble";
    }
    var Ga = !1, op = "dangerouslySetInnerHTML", Dh = "suppressContentEditableWarning", Oo = "suppressHydrationWarning", G0 = "autoFocus", Ys = "children", Ws = "style", Oh = "__html", Py, Mh, sp, K0, Nh, X0, q0;
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
        registrationNameDependencies: Et,
        possibleRegistrationNames: bt
      });
    }, X0 = oe && !document.documentMode, sp = function(e, t, a) {
      if (!Ga) {
        var i = Lh(a), u = Lh(t);
        u !== i && (Ga = !0, y("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, K0 = function(e) {
      if (!Ga) {
        Ga = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), y("Extra attributes from the server: %s", t);
      }
    }, Nh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, q0 = function(e, t) {
      var a = e.namespaceURI === Xi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var rw = /\r\n?/g, aw = /\u0000|\uFFFD/g;
    function Lh(e) {
      Xt(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(rw, `
`).replace(aw, "");
    }
    function zh(e, t, a, i) {
      var u = Lh(t), s = Lh(e);
      if (s !== u && (i && (Ga || (Ga = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Ie))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function Z0(e) {
      return e.nodeType === Zi ? e : e.ownerDocument;
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
          if (s === Ws)
            f && Object.freeze(f), bv(t, f);
          else if (s === op) {
            var p = f ? f[Oh] : void 0;
            p != null && vv(t, p);
          } else if (s === Ys)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && lo(t, f);
            } else typeof f == "number" && lo(t, "" + f);
          else s === Dh || s === Oo || s === G0 || (Et.hasOwnProperty(s) ? f != null && (typeof f != "function" && Nh(s, f), s === "onScroll" && Bn("scroll", t)) : f != null && pr(t, s, f, u));
        }
    }
    function uw(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ws ? bv(e, f) : s === op ? vv(e, f) : s === Ys ? lo(e, f) : pr(e, s, f, i);
      }
    }
    function ow(e, t, a, i) {
      var u, s = Z0(a), f, p = i;
      if (p === Xi && (p = ld(e)), p === Xi) {
        if (u = kl(e, t), !u && e !== e.toLowerCase() && y("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === Xi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Ne.call(Py, e) && (Py[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function sw(e, t) {
      return Z0(t).createTextNode(e);
    }
    function cw(e, t, a, i) {
      var u = kl(t, a);
      Mh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Bn("cancel", e), Bn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Bn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ip.length; f++)
            Bn(ip[f], e);
          s = a;
          break;
        case "source":
          Bn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Bn("error", e), Bn("load", e), s = a;
          break;
        case "details":
          Bn("toggle", e), s = a;
          break;
        case "input":
          ci(e, a), s = io(e, a), Bn("invalid", e);
          break;
        case "option":
          Zt(e, a), s = a;
          break;
        case "select":
          cu(e, a), s = Jo(e, a), Bn("invalid", e);
          break;
        case "textarea":
          rd(e, a), s = nd(e, a), Bn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (mc(t, s), lw(t, e, i, s, u), t) {
        case "input":
          si(e), B(e, a, !1);
          break;
        case "textarea":
          si(e), dv(e);
          break;
        case "option":
          kn(e, a);
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
      var v, g, C = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ws) {
            var D = f[v];
            for (g in D)
              D.hasOwnProperty(g) && (C || (C = {}), C[g] = "");
          } else v === op || v === Ys || v === Dh || v === Oo || v === G0 || (Et.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], V = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === V || _ == null && V == null))
          if (v === Ws)
            if (_ && Object.freeze(_), V) {
              for (g in V)
                V.hasOwnProperty(g) && (!_ || !_.hasOwnProperty(g)) && (C || (C = {}), C[g] = "");
              for (g in _)
                _.hasOwnProperty(g) && V[g] !== _[g] && (C || (C = {}), C[g] = _[g]);
            } else
              C || (s || (s = []), s.push(v, C)), C = _;
          else if (v === op) {
            var I = _ ? _[Oh] : void 0, Q = V ? V[Oh] : void 0;
            I != null && Q !== I && (s = s || []).push(v, I);
          } else v === Ys ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === Dh || v === Oo || (Et.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && Nh(v, _), v === "onScroll" && Bn("scroll", e)), !s && V !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return C && (py(C, p[Ws]), (s = s || []).push(Ws, C)), s;
    }
    function dw(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = kl(a, i), f = kl(a, u);
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
        return as.hasOwnProperty(t) && as[t] || null;
      }
    }
    function vw(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = kl(t, a), Mh(t, a), t) {
        case "dialog":
          Bn("cancel", e), Bn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Bn("load", e);
          break;
        case "video":
        case "audio":
          for (var g = 0; g < ip.length; g++)
            Bn(ip[g], e);
          break;
        case "source":
          Bn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Bn("error", e), Bn("load", e);
          break;
        case "details":
          Bn("toggle", e);
          break;
        case "input":
          ci(e, a), Bn("invalid", e);
          break;
        case "option":
          Zt(e, a);
          break;
        case "select":
          cu(e, a), Bn("invalid", e);
          break;
        case "textarea":
          rd(e, a), Bn("invalid", e);
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
      var V = null;
      for (var I in a)
        if (a.hasOwnProperty(I)) {
          var Q = a[I];
          if (I === Ys)
            typeof Q == "string" ? e.textContent !== Q && (a[Oo] !== !0 && zh(e.textContent, Q, s, f), V = [Ys, Q]) : typeof Q == "number" && e.textContent !== "" + Q && (a[Oo] !== !0 && zh(e.textContent, Q, s, f), V = [Ys, "" + Q]);
          else if (Et.hasOwnProperty(I))
            Q != null && (typeof Q != "function" && Nh(I, Q), I === "onScroll" && Bn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ze = void 0, lt = se(I);
            if (a[Oo] !== !0) {
              if (!(I === Dh || I === Oo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              I === "value" || I === "checked" || I === "selected")) {
                if (I === op) {
                  var Ze = e.innerHTML, Gt = Q ? Q[Oh] : void 0;
                  if (Gt != null) {
                    var Pt = q0(e, Gt);
                    Pt !== Ze && sp(I, Ze, Pt);
                  }
                } else if (I === Ws) {
                  if (v.delete(I), X0) {
                    var L = fy(Q);
                    ze = e.getAttribute("style"), L !== ze && sp(I, ze, L);
                  }
                } else if (p && !O)
                  v.delete(I.toLowerCase()), ze = ni(e, I, Q), Q !== ze && sp(I, ze, Q);
                else if (!Mn(I, lt, p) && !te(I, Q, lt, p)) {
                  var G = !1;
                  if (lt !== null)
                    v.delete(lt.attributeName), ze = ti(e, I, Q, lt);
                  else {
                    var z = i;
                    if (z === Xi && (z = ld(t)), z === Xi)
                      v.delete(I.toLowerCase());
                    else {
                      var pe = pw(I);
                      pe !== null && pe !== I && (G = !0, v.delete(pe)), v.delete(I);
                    }
                    ze = ni(e, I, Q);
                  }
                  var He = O;
                  !He && Q !== ze && !G && sp(I, ze, Q);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Oo] !== !0 && K0(v), t) {
        case "input":
          si(e), B(e, a, !0);
          break;
        case "textarea":
          si(e), dv(e);
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
    function hw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Vy(e, t) {
      {
        if (Ga)
          return;
        Ga = !0, y("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function By(e, t) {
      {
        if (Ga)
          return;
        Ga = !0, y('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function $y(e, t, a) {
      {
        if (Ga)
          return;
        Ga = !0, y("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Iy(e, t) {
      {
        if (t === "" || Ga)
          return;
        Ga = !0, y('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function mw(e, t, a) {
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
        var a = Lt({}, e || eE), i = {
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
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", C, v, D, _);
            } else
              y("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", C, v);
          }
        }
      };
    }
    var Uh = "suppressHydrationWarning", jh = "$", Fh = "/$", dp = "$?", pp = "$!", Rw = "style", Yy = null, Wy = null;
    function xw(e) {
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
          var s = i === Jn ? e.parentNode : e, f = s.namespaceURI || null;
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
    function ED(e) {
      return e;
    }
    function Tw(e) {
      Yy = ir(), Wy = Hx();
      var t = null;
      return fr(!1), t;
    }
    function bw(e) {
      Px(Wy), fr(Yy), Yy = null, Wy = null;
    }
    function _w(e, t, a, i, u) {
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
      return e === void 0 ? Ia : cf(e.type);
    }
    var Gy = typeof setTimeout == "function" ? setTimeout : void 0, Lw = typeof clearTimeout == "function" ? clearTimeout : void 0, Ky = -1, nE = typeof Promise == "function" ? Promise : void 0, zw = typeof queueMicrotask == "function" ? queueMicrotask : typeof nE < "u" ? function(e) {
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
      lo(e, "");
    }
    function Fw(e, t, a) {
      e.nodeValue = a;
    }
    function Hw(e, t) {
      e.appendChild(t);
    }
    function Pw(e, t) {
      var a;
      e.nodeType === Jn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ah(a);
    }
    function Vw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Bw(e, t, a) {
      e.nodeType === Jn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $w(e, t) {
      e.removeChild(t);
    }
    function Iw(e, t) {
      e.nodeType === Jn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Xy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Jn) {
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
    function Yw(e, t) {
      e.nodeType === Jn ? Xy(e.parentNode, t) : e.nodeType === ia && Xy(e, t), Mu(e);
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
    function Kw(e, t) {
      e.nodeValue = t;
    }
    function Xw(e) {
      e.nodeType === ia ? e.textContent = "" : e.nodeType === Zi && e.documentElement && e.removeChild(e.documentElement);
    }
    function qw(e, t, a) {
      return e.nodeType !== ia || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Zw(e, t) {
      return t === "" || e.nodeType !== qi ? null : e;
    }
    function Jw(e) {
      return e.nodeType !== Jn ? null : e;
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
        if (t === ia || t === qi)
          break;
        if (t === Jn) {
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
      var g = (s.mode & Ut) !== nt;
      return vw(e, t, a, p, i, g, f);
    }
    function l1(e, t, a, i) {
      return mp(a, e), a.mode & Ut, hw(e, t);
    }
    function u1(e, t) {
      mp(t, e);
    }
    function o1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Jn) {
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
        if (t.nodeType === Jn) {
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
      t.nodeType === ia ? Vy(e, t) : t.nodeType === Jn || By(e, t);
    }
    function h1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === ia ? Vy(a, t) : t.nodeType === Jn || By(a, t));
      }
    }
    function m1(e, t, a, i, u) {
      (u || t[Uh] !== !0) && (i.nodeType === ia ? Vy(a, i) : i.nodeType === Jn || By(a, i));
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
    function x1(e) {
      y("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function w1(e) {
      lp(e);
    }
    var wf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + wf, Zy = "__reactProps$" + wf, hp = "__reactContainer$" + wf, Jy = "__reactEvents$" + wf, T1 = "__reactListeners$" + wf, b1 = "__reactHandles$" + wf;
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
    function Qs(e) {
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
      return t && (t.tag === F || t.tag === ge || t.tag === me || t.tag === X) ? t : null;
    }
    function bf(e) {
      if (e.tag === F || e.tag === ge)
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
        var t = e._owner, a = Qi(e.type, e._source, t ? t.type : null);
        oE.setExtraStackFrame(a);
      } else
        oE.setExtraStackFrame(null);
    }
    function sl(e, t, a, i, u) {
      {
        var s = Function.call.bind(Ne);
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
    var ju = -1;
    function No(e) {
      return {
        current: e
      };
    }
    function ma(e, t) {
      if (ju < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== $h[ju] && y("Unexpected Fiber popped."), e.current = tg[ju], tg[ju] = null, $h[ju] = null, ju--;
    }
    function ya(e, t, a) {
      ju++, tg[ju] = e.current, $h[ju] = a, e.current = t;
    }
    var ng;
    ng = {};
    var yi = {};
    Object.freeze(yi);
    var Fu = No(yi), Gl = No(!1), rg = yi;
    function _f(e, t, a) {
      return a && Kl(t) ? rg : Fu.current;
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
          return yi;
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
      return Gl.current;
    }
    function Kl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Yh(e) {
      ma(Gl, e), ma(Fu, e);
    }
    function ag(e) {
      ma(Gl, e), ma(Fu, e);
    }
    function cE(e, t, a) {
      {
        if (Fu.current !== yi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ya(Fu, t, e), ya(Gl, a, e);
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
        return Lt({}, a, f);
      }
    }
    function Wh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || yi;
        return rg = Fu.current, ya(Fu, a, e), ya(Gl, Gl.current, e), !0;
      }
    }
    function dE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = fE(e, t, rg);
          i.__reactInternalMemoizedMergedChildContext = u, ma(Gl, e), ma(Fu, e), ya(Fu, u, e), ya(Gl, a, e);
        } else
          ma(Gl, e), ya(Gl, a, e);
      }
    }
    function D1(e) {
      {
        if (!yu(e) || e.tag !== M)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case X:
              return t.stateNode.context;
            case M: {
              var a = t.type;
              if (Kl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Qh = 1, Hu = null, ig = !1, lg = !1;
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
        var e = 0, t = Wa();
        try {
          var a = !0, i = Hu;
          for (ar(Ir); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Hu = null, ig = !1;
        } catch (s) {
          throw Hu !== null && (Hu = Hu.slice(e + 1)), Ed(ds, zo), s;
        } finally {
          ar(t), lg = !1;
        }
      }
      return null;
    }
    var Df = [], Of = 0, Gh = null, Kh = 0, Pi = [], Vi = 0, Gs = null, Pu = 1, Vu = "";
    function M1(e) {
      return Xs(), (e.flags & Oi) !== tt;
    }
    function N1(e) {
      return Xs(), Kh;
    }
    function L1() {
      var e = Vu, t = Pu, a = t & ~z1(t);
      return a.toString(32) + e;
    }
    function Ks(e, t) {
      Xs(), Df[Of++] = Kh, Df[Of++] = Gh, Gh = e, Kh = t;
    }
    function hE(e, t, a) {
      Xs(), Pi[Vi++] = Pu, Pi[Vi++] = Vu, Pi[Vi++] = Gs, Gs = e;
      var i = Pu, u = Vu, s = Xh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Xh(t) + s;
      if (v > 30) {
        var g = s - s % 5, C = (1 << g) - 1, D = (f & C).toString(32), _ = f >> g, V = s - g, I = Xh(t) + V, Q = p << V, ze = Q | _, lt = D + u;
        Pu = 1 << I | ze, Vu = lt;
      } else {
        var Ze = p << s, Gt = Ze | f, Pt = u;
        Pu = 1 << v | Gt, Vu = Pt;
      }
    }
    function ug(e) {
      Xs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ks(e, a), hE(e, a, i);
      }
    }
    function Xh(e) {
      return 32 - nr(e);
    }
    function z1(e) {
      return 1 << Xh(e) - 1;
    }
    function og(e) {
      for (; e === Gh; )
        Gh = Df[--Of], Df[Of] = null, Kh = Df[--Of], Df[Of] = null;
      for (; e === Gs; )
        Gs = Pi[--Vi], Pi[Vi] = null, Vu = Pi[--Vi], Pi[Vi] = null, Pu = Pi[--Vi], Pi[Vi] = null;
    }
    function A1() {
      return Xs(), Gs !== null ? {
        id: Pu,
        overflow: Vu
      } : null;
    }
    function U1(e, t) {
      Xs(), Pi[Vi++] = Pu, Pi[Vi++] = Vu, Pi[Vi++] = Gs, Pu = t.id, Vu = t.overflow, Gs = e;
    }
    function Xs() {
      Kr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Gr = null, Bi = null, cl = !1, qs = !1, Ao = null;
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
      return Bi = r1(t), Gr = e, cl = !0, Ao = null, qs = !1, !0;
    }
    function P1(e, t, a) {
      return Bi = a1(t), Gr = e, cl = !0, Ao = null, qs = !1, a !== null && U1(e, a), !0;
    }
    function yE(e, t) {
      switch (e.tag) {
        case X: {
          v1(e.stateNode.containerInfo, t);
          break;
        }
        case F: {
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
        case me: {
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
      i === null ? (e.deletions = [a], e.flags |= Ha) : i.push(a);
    }
    function sg(e, t) {
      {
        if (qs)
          return;
        switch (e.tag) {
          case X: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case F:
                var i = t.type;
                t.pendingProps, y1(a, i);
                break;
              case ge:
                var u = t.pendingProps;
                g1(a, u);
                break;
            }
            break;
          }
          case F: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case F: {
                var v = t.type, g = t.pendingProps, C = (e.mode & Ut) !== nt;
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
              case ge: {
                var D = t.pendingProps, _ = (e.mode & Ut) !== nt;
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
          case me: {
            var V = e.memoizedState, I = V.dehydrated;
            if (I !== null) switch (t.tag) {
              case F:
                var Q = t.type;
                t.pendingProps, S1(I, Q);
                break;
              case ge:
                var ze = t.pendingProps;
                E1(I, ze);
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
      t.flags = t.flags & ~ua | Hn, sg(e, t);
    }
    function EE(e, t) {
      switch (e.tag) {
        case F: {
          var a = e.type;
          e.pendingProps;
          var i = qw(t, a);
          return i !== null ? (e.stateNode = i, Gr = e, Bi = n1(i), !0) : !1;
        }
        case ge: {
          var u = e.pendingProps, s = Zw(t, u);
          return s !== null ? (e.stateNode = s, Gr = e, Bi = null, !0) : !1;
        }
        case me: {
          var f = Jw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: A1(),
              retryLane: fa
            };
            e.memoizedState = p;
            var v = Y_(f);
            return v.return = e, e.child = v, Gr = e, Bi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function cg(e) {
      return (e.mode & Ut) !== nt && (e.flags & Je) === tt;
    }
    function fg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function dg(e) {
      if (cl) {
        var t = Bi;
        if (!t) {
          cg(e) && (sg(Gr, e), fg()), SE(Gr, e), cl = !1, Gr = e;
          return;
        }
        var a = t;
        if (!EE(e, t)) {
          cg(e) && (sg(Gr, e), fg()), t = vp(a);
          var i = Gr;
          if (!t || !EE(e, t)) {
            SE(Gr, e), cl = !1, Gr = e;
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
        var u = Gr;
        if (u !== null)
          switch (u.tag) {
            case X: {
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
            case F: {
              var p = u.type, v = u.memoizedProps, g = u.stateNode, C = (u.mode & Ut) !== nt;
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
      for (var t = e.return; t !== null && t.tag !== F && t.tag !== X && t.tag !== me; )
        t = t.return;
      Gr = t;
    }
    function qh(e) {
      if (e !== Gr)
        return !1;
      if (!cl)
        return CE(e), cl = !0, !1;
      if (e.tag !== X && (e.tag !== F || f1(e.type) && !Qy(e.type, e.memoizedProps))) {
        var t = Bi;
        if (t)
          if (cg(e))
            RE(e), fg();
          else
            for (; t; )
              gE(e, t), t = vp(t);
      }
      return CE(e), e.tag === me ? Bi = I1(e) : Bi = Gr ? vp(e.stateNode) : null, !0;
    }
    function Y1() {
      return cl && Bi !== null;
    }
    function RE(e) {
      for (var t = Bi; t; )
        yE(e, t), t = vp(t);
    }
    function Mf() {
      Gr = null, Bi = null, cl = !1, qs = !1;
    }
    function xE() {
      Ao !== null && (mR(Ao), Ao = null);
    }
    function Kr() {
      return cl;
    }
    function pg(e) {
      Ao === null ? Ao = [e] : Ao.push(e);
    }
    var W1 = E.ReactCurrentBatchConfig, Q1 = null;
    function G1() {
      return W1.transition;
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
      var K1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Cn && (t = a), a = a.return;
        return t;
      }, Zs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, gp = [], Sp = [], Ep = [], Cp = [], Rp = [], xp = [], Js = /* @__PURE__ */ new Set();
      fl.recordUnsafeLifecycleWarnings = function(e, t) {
        Js.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillMount == "function" && Sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Cp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Rp.push(e), e.mode & Cn && typeof t.UNSAFE_componentWillUpdate == "function" && xp.push(e));
      }, fl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(_) {
          e.add(yt(_) || "Component"), Js.add(_.type);
        }), gp = []);
        var t = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(_) {
          t.add(yt(_) || "Component"), Js.add(_.type);
        }), Sp = []);
        var a = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(_) {
          a.add(yt(_) || "Component"), Js.add(_.type);
        }), Ep = []);
        var i = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(_) {
          i.add(yt(_) || "Component"), Js.add(_.type);
        }), Cp = []);
        var u = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(_) {
          u.add(yt(_) || "Component"), Js.add(_.type);
        }), Rp = []);
        var s = /* @__PURE__ */ new Set();
        if (xp.length > 0 && (xp.forEach(function(_) {
          s.add(yt(_) || "Component"), Js.add(_.type);
        }), xp = []), t.size > 0) {
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
          var g = Zs(e);
          Y(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (a.size > 0) {
          var C = Zs(a);
          Y(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (u.size > 0) {
          var D = Zs(u);
          Y(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
      };
      var Zh = /* @__PURE__ */ new Map(), wE = /* @__PURE__ */ new Set();
      fl.recordLegacyContextWarning = function(e, t) {
        var a = K1(e);
        if (a === null) {
          y("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!wE.has(e.type)) {
          var i = Zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Zh.set(a, i)), i.push(e));
        }
      }, fl.flushLegacyContextWarning = function() {
        Zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(yt(s) || "Component"), wE.add(s.type);
            });
            var u = Zs(i);
            try {
              gn(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Ln();
            }
          }
        });
      }, fl.discardPendingWarnings = function() {
        gp = [], Sp = [], Ep = [], Cp = [], Rp = [], xp = [], Zh = /* @__PURE__ */ new Map();
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
    function wp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Cn || q) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== M) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !X1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = yt(e) || "Component";
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
          et(i, "ref");
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
      function t(L, G) {
        if (e) {
          var z = L.deletions;
          z === null ? (L.deletions = [G], L.flags |= Ha) : z.push(G);
        }
      }
      function a(L, G) {
        if (!e)
          return null;
        for (var z = G; z !== null; )
          t(L, z), z = z.sibling;
        return null;
      }
      function i(L, G) {
        for (var z = /* @__PURE__ */ new Map(), pe = G; pe !== null; )
          pe.key !== null ? z.set(pe.key, pe) : z.set(pe.index, pe), pe = pe.sibling;
        return z;
      }
      function u(L, G) {
        var z = oc(L, G);
        return z.index = 0, z.sibling = null, z;
      }
      function s(L, G, z) {
        if (L.index = z, !e)
          return L.flags |= Oi, G;
        var pe = L.alternate;
        if (pe !== null) {
          var He = pe.index;
          return He < G ? (L.flags |= Hn, G) : He;
        } else
          return L.flags |= Hn, G;
      }
      function f(L) {
        return e && L.alternate === null && (L.flags |= Hn), L;
      }
      function p(L, G, z, pe) {
        if (G === null || G.tag !== ge) {
          var He = p0(z, L.mode, pe);
          return He.return = L, He;
        } else {
          var Ae = u(G, z);
          return Ae.return = L, Ae;
        }
      }
      function v(L, G, z, pe) {
        var He = z.type;
        if (He === Ei)
          return C(L, G, z.props.children, pe, z.key);
        if (G !== null && (G.elementType === He || // Keep this check inline so it only runs on the false path:
        NR(G, z) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof He == "object" && He !== null && He.$$typeof === gt && bE(He) === G.type)) {
          var Ae = u(G, z.props);
          return Ae.ref = wp(L, G, z), Ae.return = L, Ae._debugSource = z._source, Ae._debugOwner = z._owner, Ae;
        }
        var vt = d0(z, L.mode, pe);
        return vt.ref = wp(L, G, z), vt.return = L, vt;
      }
      function g(L, G, z, pe) {
        if (G === null || G.tag !== Z || G.stateNode.containerInfo !== z.containerInfo || G.stateNode.implementation !== z.implementation) {
          var He = v0(z, L.mode, pe);
          return He.return = L, He;
        } else {
          var Ae = u(G, z.children || []);
          return Ae.return = L, Ae;
        }
      }
      function C(L, G, z, pe, He) {
        if (G === null || G.tag !== ee) {
          var Ae = Wo(z, L.mode, pe, He);
          return Ae.return = L, Ae;
        } else {
          var vt = u(G, z);
          return vt.return = L, vt;
        }
      }
      function D(L, G, z) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var pe = p0("" + G, L.mode, z);
          return pe.return = L, pe;
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case Er: {
              var He = d0(G, L.mode, z);
              return He.ref = wp(L, null, G), He.return = L, He;
            }
            case Yn: {
              var Ae = v0(G, L.mode, z);
              return Ae.return = L, Ae;
            }
            case gt: {
              var vt = G._payload, Rt = G._init;
              return D(L, Rt(vt), z);
            }
          }
          if (zt(G) || kt(G)) {
            var xn = Wo(G, L.mode, z, null);
            return xn.return = L, xn;
          }
          Jh(L, G);
        }
        return typeof G == "function" && em(L), null;
      }
      function _(L, G, z, pe) {
        var He = G !== null ? G.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number")
          return He !== null ? null : p(L, G, "" + z, pe);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Er:
              return z.key === He ? v(L, G, z, pe) : null;
            case Yn:
              return z.key === He ? g(L, G, z, pe) : null;
            case gt: {
              var Ae = z._payload, vt = z._init;
              return _(L, G, vt(Ae), pe);
            }
          }
          if (zt(z) || kt(z))
            return He !== null ? null : C(L, G, z, pe, null);
          Jh(L, z);
        }
        return typeof z == "function" && em(L), null;
      }
      function V(L, G, z, pe, He) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var Ae = L.get(z) || null;
          return p(G, Ae, "" + pe, He);
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case Er: {
              var vt = L.get(pe.key === null ? z : pe.key) || null;
              return v(G, vt, pe, He);
            }
            case Yn: {
              var Rt = L.get(pe.key === null ? z : pe.key) || null;
              return g(G, Rt, pe, He);
            }
            case gt:
              var xn = pe._payload, un = pe._init;
              return V(L, G, z, un(xn), He);
          }
          if (zt(pe) || kt(pe)) {
            var dr = L.get(z) || null;
            return C(G, dr, pe, He, null);
          }
          Jh(G, pe);
        }
        return typeof pe == "function" && em(G), null;
      }
      function I(L, G, z) {
        {
          if (typeof L != "object" || L === null)
            return G;
          switch (L.$$typeof) {
            case Er:
            case Yn:
              TE(L, z);
              var pe = L.key;
              if (typeof pe != "string")
                break;
              if (G === null) {
                G = /* @__PURE__ */ new Set(), G.add(pe);
                break;
              }
              if (!G.has(pe)) {
                G.add(pe);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", pe);
              break;
            case gt:
              var He = L._payload, Ae = L._init;
              I(Ae(He), G, z);
              break;
          }
        }
        return G;
      }
      function Q(L, G, z, pe) {
        for (var He = null, Ae = 0; Ae < z.length; Ae++) {
          var vt = z[Ae];
          He = I(vt, He, L);
        }
        for (var Rt = null, xn = null, un = G, dr = 0, on = 0, ur = null; un !== null && on < z.length; on++) {
          un.index > on ? (ur = un, un = null) : ur = un.sibling;
          var Sa = _(L, un, z[on], pe);
          if (Sa === null) {
            un === null && (un = ur);
            break;
          }
          e && un && Sa.alternate === null && t(L, un), dr = s(Sa, dr, on), xn === null ? Rt = Sa : xn.sibling = Sa, xn = Sa, un = ur;
        }
        if (on === z.length) {
          if (a(L, un), Kr()) {
            var na = on;
            Ks(L, na);
          }
          return Rt;
        }
        if (un === null) {
          for (; on < z.length; on++) {
            var Si = D(L, z[on], pe);
            Si !== null && (dr = s(Si, dr, on), xn === null ? Rt = Si : xn.sibling = Si, xn = Si);
          }
          if (Kr()) {
            var Ma = on;
            Ks(L, Ma);
          }
          return Rt;
        }
        for (var Na = i(L, un); on < z.length; on++) {
          var Ea = V(Na, L, on, z[on], pe);
          Ea !== null && (e && Ea.alternate !== null && Na.delete(Ea.key === null ? on : Ea.key), dr = s(Ea, dr, on), xn === null ? Rt = Ea : xn.sibling = Ea, xn = Ea);
        }
        if (e && Na.forEach(function(Xf) {
          return t(L, Xf);
        }), Kr()) {
          var Gu = on;
          Ks(L, Gu);
        }
        return Rt;
      }
      function ze(L, G, z, pe) {
        var He = kt(z);
        if (typeof He != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          z[Symbol.toStringTag] === "Generator" && (hg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hg = !0), z.entries === He && (vg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vg = !0);
          var Ae = He.call(z);
          if (Ae)
            for (var vt = null, Rt = Ae.next(); !Rt.done; Rt = Ae.next()) {
              var xn = Rt.value;
              vt = I(xn, vt, L);
            }
        }
        var un = He.call(z);
        if (un == null)
          throw new Error("An iterable object provided no iterator.");
        for (var dr = null, on = null, ur = G, Sa = 0, na = 0, Si = null, Ma = un.next(); ur !== null && !Ma.done; na++, Ma = un.next()) {
          ur.index > na ? (Si = ur, ur = null) : Si = ur.sibling;
          var Na = _(L, ur, Ma.value, pe);
          if (Na === null) {
            ur === null && (ur = Si);
            break;
          }
          e && ur && Na.alternate === null && t(L, ur), Sa = s(Na, Sa, na), on === null ? dr = Na : on.sibling = Na, on = Na, ur = Si;
        }
        if (Ma.done) {
          if (a(L, ur), Kr()) {
            var Ea = na;
            Ks(L, Ea);
          }
          return dr;
        }
        if (ur === null) {
          for (; !Ma.done; na++, Ma = un.next()) {
            var Gu = D(L, Ma.value, pe);
            Gu !== null && (Sa = s(Gu, Sa, na), on === null ? dr = Gu : on.sibling = Gu, on = Gu);
          }
          if (Kr()) {
            var Xf = na;
            Ks(L, Xf);
          }
          return dr;
        }
        for (var nv = i(L, ur); !Ma.done; na++, Ma = un.next()) {
          var ru = V(nv, L, na, Ma.value, pe);
          ru !== null && (e && ru.alternate !== null && nv.delete(ru.key === null ? na : ru.key), Sa = s(ru, Sa, na), on === null ? dr = ru : on.sibling = ru, on = ru);
        }
        if (e && nv.forEach(function(Rk) {
          return t(L, Rk);
        }), Kr()) {
          var Ck = na;
          Ks(L, Ck);
        }
        return dr;
      }
      function lt(L, G, z, pe) {
        if (G !== null && G.tag === ge) {
          a(L, G.sibling);
          var He = u(G, z);
          return He.return = L, He;
        }
        a(L, G);
        var Ae = p0(z, L.mode, pe);
        return Ae.return = L, Ae;
      }
      function Ze(L, G, z, pe) {
        for (var He = z.key, Ae = G; Ae !== null; ) {
          if (Ae.key === He) {
            var vt = z.type;
            if (vt === Ei) {
              if (Ae.tag === ee) {
                a(L, Ae.sibling);
                var Rt = u(Ae, z.props.children);
                return Rt.return = L, Rt._debugSource = z._source, Rt._debugOwner = z._owner, Rt;
              }
            } else if (Ae.elementType === vt || // Keep this check inline so it only runs on the false path:
            NR(Ae, z) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof vt == "object" && vt !== null && vt.$$typeof === gt && bE(vt) === Ae.type) {
              a(L, Ae.sibling);
              var xn = u(Ae, z.props);
              return xn.ref = wp(L, Ae, z), xn.return = L, xn._debugSource = z._source, xn._debugOwner = z._owner, xn;
            }
            a(L, Ae);
            break;
          } else
            t(L, Ae);
          Ae = Ae.sibling;
        }
        if (z.type === Ei) {
          var un = Wo(z.props.children, L.mode, pe, z.key);
          return un.return = L, un;
        } else {
          var dr = d0(z, L.mode, pe);
          return dr.ref = wp(L, G, z), dr.return = L, dr;
        }
      }
      function Gt(L, G, z, pe) {
        for (var He = z.key, Ae = G; Ae !== null; ) {
          if (Ae.key === He)
            if (Ae.tag === Z && Ae.stateNode.containerInfo === z.containerInfo && Ae.stateNode.implementation === z.implementation) {
              a(L, Ae.sibling);
              var vt = u(Ae, z.children || []);
              return vt.return = L, vt;
            } else {
              a(L, Ae);
              break;
            }
          else
            t(L, Ae);
          Ae = Ae.sibling;
        }
        var Rt = v0(z, L.mode, pe);
        return Rt.return = L, Rt;
      }
      function Pt(L, G, z, pe) {
        var He = typeof z == "object" && z !== null && z.type === Ei && z.key === null;
        if (He && (z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Er:
              return f(Ze(L, G, z, pe));
            case Yn:
              return f(Gt(L, G, z, pe));
            case gt:
              var Ae = z._payload, vt = z._init;
              return Pt(L, G, vt(Ae), pe);
          }
          if (zt(z))
            return Q(L, G, z, pe);
          if (kt(z))
            return ze(L, G, z, pe);
          Jh(L, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" ? f(lt(L, G, "" + z, pe)) : (typeof z == "function" && em(L), a(L, G));
      }
      return Pt;
    }
    var Nf = _E(!0), kE = _E(!1);
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
    var Sg = No(null), Eg;
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
      ya(Sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Eg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Eg;
    }
    function Rg(e, t) {
      var a = Sg.current;
      ma(Sg, t), e._currentValue = a;
    }
    function xg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Ou(i.childLanes, t) ? u !== null && !Ou(u.childLanes, t) && (u.childLanes = Mt(u.childLanes, t)) : (i.childLanes = Mt(i.childLanes, t), u !== null && (u.childLanes = Mt(u.childLanes, t))), i === a)
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
              if (i.tag === M) {
                var p = bs(a), v = Bu(Tn, p);
                v.tag = im;
                var g = i.updateQueue;
                if (g !== null) {
                  var C = g.shared, D = C.pending;
                  D === null ? v.next = v : (v.next = D.next, D.next = v), C.pending = v;
                }
              }
              i.lanes = Mt(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = Mt(_.lanes, a)), xg(i.return, a, e), s.lanes = Mt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === fe)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === rt) {
          var V = i.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = Mt(V.lanes, a);
          var I = V.alternate;
          I !== null && (I.lanes = Mt(I.lanes, a)), xg(V, a, e), u = i.sibling;
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
            var Q = u.sibling;
            if (Q !== null) {
              Q.return = u.return, u = Q;
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
        i !== null && (da(a.lanes, t) && Hp(), a.firstContext = null);
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
    var ec = null;
    function wg(e) {
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
    function NE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, am(e, i);
    }
    function nT(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function rT(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, wg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, am(e, i);
    }
    function Ka(e, t) {
      return am(e, t);
    }
    var aT = am;
    function am(e, t) {
      e.lanes = Mt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Mt(a.lanes, t)), a === null && (e.flags & (Hn | ua)) !== tt && kR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Mt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Mt(a.childLanes, t) : (u.flags & (Hn | ua)) !== tt && kR(e), i = u, u = u.return;
      if (i.tag === X) {
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
    function Bu(e, t) {
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
          var f = Mt(s, a);
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
              if (e.mode & Cn) {
                Pn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Pn(!1);
                }
              }
              OE();
            }
            return p;
          }
          return f;
        }
        case Tg:
          e.flags = e.flags & ~vr | Je;
        case LE: {
          var v = a.payload, g;
          if (typeof v == "function") {
            DE(), g = v.call(s, i, u);
            {
              if (e.mode & Cn) {
                Pn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Pn(!1);
                }
              }
              OE();
            }
          } else
            g = v;
          return g == null ? i : Lt({}, i, g);
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
        var V = u.baseState, I = ae, Q = null, ze = null, lt = null, Ze = s;
        do {
          var Gt = Ze.lane, Pt = Ze.eventTime;
          if (Ou(i, Gt)) {
            if (lt !== null) {
              var G = {
                eventTime: Pt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: en,
                tag: Ze.tag,
                payload: Ze.payload,
                callback: Ze.callback,
                next: null
              };
              lt = lt.next = G;
            }
            V = iT(e, u, Ze, V, t, a);
            var z = Ze.callback;
            if (z !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ze.lane !== en) {
              e.flags |= Dn;
              var pe = u.effects;
              pe === null ? u.effects = [Ze] : pe.push(Ze);
            }
          } else {
            var L = {
              eventTime: Pt,
              lane: Gt,
              tag: Ze.tag,
              payload: Ze.payload,
              callback: Ze.callback,
              next: null
            };
            lt === null ? (ze = lt = L, Q = V) : lt = lt.next = L, I = Mt(I, Gt);
          }
          if (Ze = Ze.next, Ze === null) {
            if (p = u.shared.pending, p === null)
              break;
            var He = p, Ae = He.next;
            He.next = null, Ze = Ae, u.lastBaseUpdate = He, u.shared.pending = null;
          }
        } while (!0);
        lt === null && (Q = V), u.baseState = Q, u.firstBaseUpdate = ze, u.lastBaseUpdate = lt;
        var vt = u.shared.interleaved;
        if (vt !== null) {
          var Rt = vt;
          do
            I = Mt(I, Rt.lane), Rt = Rt.next;
          while (Rt !== vt);
        } else s === null && (u.shared.lanes = ae);
        qp(I), e.lanes = I, e.memoizedState = V;
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
    var Tp = {}, jo = No(Tp), bp = No(Tp), fm = No(Tp);
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
      ya(fm, t, e), ya(bp, e, e), ya(jo, Tp, e);
      var a = xw(t);
      ma(jo, e), ya(jo, a, e);
    }
    function Af(e) {
      ma(jo, e), ma(bp, e), ma(fm, e);
    }
    function Og() {
      var e = dm(jo.current);
      return e;
    }
    function HE(e) {
      dm(fm.current);
      var t = dm(jo.current), a = ww(t, e.type);
      t !== a && (ya(bp, e, e), ya(jo, a, e));
    }
    function Mg(e) {
      bp.current === e && (ma(jo, e), ma(bp, e));
    }
    var uT = 0, PE = 1, VE = 1, _p = 2, dl = No(uT);
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
    function Fo(e, t) {
      ya(dl, t, e);
    }
    function jf(e) {
      ma(dl, e);
    }
    function sT(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function pm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === me) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || aE(i) || qy(i))
              return t;
          }
        } else if (t.tag === Nt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Je) !== tt;
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
    var Xa = (
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
    ), Xr = (
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
    var je = E.ReactCurrentDispatcher, kp = E.ReactCurrentBatchConfig, Ug, Ff;
    Ug = /* @__PURE__ */ new Set();
    var tc = ae, Rn = null, Dr = null, Or = null, vm = !1, Dp = !1, Op = 0, fT = 0, dT = 25, J = null, $i = null, Ho = -1, jg = !1;
    function vn() {
      {
        var e = J;
        $i === null ? $i = [e] : $i.push(e);
      }
    }
    function ke() {
      {
        var e = J;
        $i !== null && (Ho++, $i[Ho] !== e && pT(e));
      }
    }
    function Hf(e) {
      e != null && !zt(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function pT(e) {
      {
        var t = yt(Rn);
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
    function ga() {
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
      tc = s, Rn = t, $i = e !== null ? e._debugHookTypes : null, Ho = -1, jg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ae, e !== null && e.memoizedState !== null ? je.current = sC : $i !== null ? je.current = oC : je.current = uC;
      var f = a(i, u);
      if (Dp) {
        var p = 0;
        do {
          if (Dp = !1, Op = 0, p >= dT)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, jg = !1, Dr = null, Or = null, t.updateQueue = null, Ho = -1, je.current = cC, f = a(i, u);
        } while (Dp);
      }
      je.current = _m, t._debugHookTypes = $i;
      var v = Dr !== null && Dr.next !== null;
      if (tc = ae, Rn = null, Dr = null, Or = null, J = null, $i = null, Ho = -1, e !== null && (e.flags & tr) !== (t.flags & tr) && // Disable this warning in legacy mode, because legacy Suspense is weird
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
      t.updateQueue = e.updateQueue, (t.mode & an) !== nt ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = _s(e.lanes, a);
    }
    function $E() {
      if (je.current = _m, vm) {
        for (var e = Rn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        vm = !1;
      }
      tc = ae, Rn = null, Dr = null, Or = null, $i = null, Ho = -1, J = null, nC = !1, Dp = !1, Op = 0;
    }
    function ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Or === null ? Rn.memoizedState = Or = e : Or = Or.next = e, Or;
    }
    function Ii() {
      var e;
      if (Dr === null) {
        var t = Rn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Dr.next;
      var a;
      if (Or === null ? a = Rn.memoizedState : a = Or.next, a !== null)
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
        Or === null ? Rn.memoizedState = Or = i : Or = Or.next = i;
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
        lanes: ae,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = yT.bind(null, Rn, s);
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
          var v = f.next, g = p.next;
          f.next = g, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var C = f.next, D = s.baseState, _ = null, V = null, I = null, Q = C;
        do {
          var ze = Q.lane;
          if (Ou(tc, ze)) {
            if (I !== null) {
              var Ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: en,
                action: Q.action,
                hasEagerState: Q.hasEagerState,
                eagerState: Q.eagerState,
                next: null
              };
              I = I.next = Ze;
            }
            if (Q.hasEagerState)
              D = Q.eagerState;
            else {
              var Gt = Q.action;
              D = e(D, Gt);
            }
          } else {
            var lt = {
              lane: ze,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            };
            I === null ? (V = I = lt, _ = D) : I = I.next = lt, Rn.lanes = Mt(Rn.lanes, ze), qp(ze);
          }
          Q = Q.next;
        } while (Q !== null && Q !== C);
        I === null ? _ = D : I.next = V, ue(D, i.memoizedState) || Hp(), i.memoizedState = D, i.baseState = _, i.baseQueue = I, u.lastRenderedState = D;
      }
      var Pt = u.interleaved;
      if (Pt !== null) {
        var L = Pt;
        do {
          var G = L.lane;
          Rn.lanes = Mt(Rn.lanes, G), qp(G), L = L.next;
        } while (L !== Pt);
      } else f === null && (u.lanes = ae);
      var z = u.dispatch;
      return [i.memoizedState, z];
    }
    function Bg(e, t, a) {
      var i = Ii(), u = i.queue;
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
    function CD(e, t, a) {
    }
    function RD(e, t, a) {
    }
    function $g(e, t, a) {
      var i = Rn, u = ql(), s, f = Kr();
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
        rf(v, tc) || YE(i, t, s);
      }
      u.memoizedState = s;
      var g = {
        value: s,
        getSnapshot: t
      };
      return u.queue = g, Sm(QE.bind(null, i, g, e), [e]), i.flags |= la, Mp(_r | Xr, WE.bind(null, i, g, s, t), void 0, null), s;
    }
    function hm(e, t, a) {
      var i = Rn, u = Ii(), s = t();
      if (!Ff) {
        var f = t();
        ue(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      }
      var p = u.memoizedState, v = !ue(p, s);
      v && (u.memoizedState = s, Hp());
      var g = u.queue;
      if (Lp(QE.bind(null, i, g, e), [e]), g.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Or !== null && Or.memoizedState.tag & _r) {
        i.flags |= la, Mp(_r | Xr, WE.bind(null, i, g, s, t), void 0, null);
        var C = Wm();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(C, tc) || YE(i, t, s);
      }
      return s;
    }
    function YE(e, t, a) {
      e.flags |= mo;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Rn.updateQueue;
      if (u === null)
        u = IE(), Rn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function WE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, GE(t) && KE(e);
    }
    function QE(e, t, a) {
      var i = function() {
        GE(t) && KE(e);
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
    function KE(e) {
      var t = Ka(e, dt);
      t !== null && zr(t, e, dt, Tn);
    }
    function mm(e) {
      var t = ql();
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
      var i = a.dispatch = gT.bind(null, Rn, a);
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
      }, s = Rn.updateQueue;
      if (s === null)
        s = IE(), Rn.updateQueue = s, s.lastEffect = u.next = u;
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
    function Np(e, t, a, i) {
      var u = ql(), s = i === void 0 ? null : i;
      Rn.flags |= e, u.memoizedState = Mp(_r | t, a, void 0, s);
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
      Rn.flags |= e, u.memoizedState = Mp(_r | t, a, f, s);
    }
    function Sm(e, t) {
      return (Rn.mode & an) !== nt ? Np(Mi | la | Oc, Xr, e, t) : Np(la | Oc, Xr, e, t);
    }
    function Lp(e, t) {
      return gm(la, Xr, e, t);
    }
    function Qg(e, t) {
      return Np(Yt, Xl, e, t);
    }
    function Em(e, t) {
      return gm(Yt, Xl, e, t);
    }
    function Gg(e, t) {
      var a = Yt;
      return a |= el, (Rn.mode & an) !== nt && (a |= Nl), Np(a, kr, e, t);
    }
    function Cm(e, t) {
      return gm(Yt, kr, e, t);
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
    function Kg(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Yt;
      return u |= el, (Rn.mode & an) !== nt && (u |= Nl), Np(u, kr, XE.bind(null, t, e), i);
    }
    function Rm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return gm(Yt, kr, XE.bind(null, t, e), i);
    }
    function vT(e, t) {
    }
    var xm = vT;
    function Xg(e, t) {
      var a = ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function wm(e, t) {
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
        if (!ue(a, t)) {
          var u = Fd();
          Rn.lanes = Mt(Rn.lanes, u), qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Hp()), e.memoizedState = a, a;
    }
    function hT(e, t, a) {
      var i = Wa();
      ar(nh(i, Ai)), e(!0);
      var u = kp.transition;
      kp.transition = {};
      var s = kp.transition;
      kp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (ar(i), kp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Y("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
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
      var e = ql(), t = Wm(), a = t.identifierPrefix, i;
      if (Kr()) {
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
        var s = NE(e, t, u, i);
        if (s !== null) {
          var f = Oa();
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
        if (e.lanes === ae && (s === null || s.lanes === ae)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = je.current, je.current = pl;
            try {
              var v = t.lastRenderedState, g = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = g, ue(g, v)) {
                nT(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              je.current = p;
            }
          }
        }
        var C = NE(e, t, u, i);
        if (C !== null) {
          var D = Oa();
          zr(C, e, i, D), iC(C, t, i);
        }
      }
      lC(e, i);
    }
    function rC(e) {
      var t = e.alternate;
      return e === Rn || t !== null && t === Rn;
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
        var u = Mt(i, a);
        t.lanes = u, lf(e, u);
      }
    }
    function lC(e, t, a) {
      ys(e, t);
    }
    var _m = {
      readContext: gr,
      useCallback: ga,
      useContext: ga,
      useEffect: ga,
      useImperativeHandle: ga,
      useInsertionEffect: ga,
      useLayoutEffect: ga,
      useMemo: ga,
      useReducer: ga,
      useRef: ga,
      useState: ga,
      useDebugValue: ga,
      useDeferredValue: ga,
      useTransition: ga,
      useMutableSource: ga,
      useSyncExternalStore: ga,
      useId: ga,
      unstable_isNewReconciler: Se
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
          return J = "useCallback", vn(), Hf(t), Xg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", vn(), gr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", vn(), Hf(t), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", vn(), Hf(a), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", vn(), Hf(t), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", vn(), Hf(t), Gg(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", vn(), Hf(t);
          var a = je.current;
          je.current = Zl;
          try {
            return qg(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", vn();
          var i = je.current;
          je.current = Zl;
          try {
            return Pg(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", vn(), Wg(e);
        },
        useState: function(e) {
          J = "useState", vn();
          var t = je.current;
          je.current = Zl;
          try {
            return mm(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", vn(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", vn(), Zg(e);
        },
        useTransition: function() {
          return J = "useTransition", vn(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", vn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", vn(), $g(e, t, a);
        },
        useId: function() {
          return J = "useId", vn(), eS();
        },
        unstable_isNewReconciler: Se
      }, oC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ke(), Xg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ke(), gr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ke(), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ke(), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ke(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ke(), Gg(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ke();
          var a = je.current;
          je.current = Zl;
          try {
            return qg(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ke();
          var i = je.current;
          je.current = Zl;
          try {
            return Pg(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ke(), Wg(e);
        },
        useState: function(e) {
          J = "useState", ke();
          var t = je.current;
          je.current = Zl;
          try {
            return mm(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ke(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ke(), Zg(e);
        },
        useTransition: function() {
          return J = "useTransition", ke(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ke(), $g(e, t, a);
        },
        useId: function() {
          return J = "useId", ke(), eS();
        },
        unstable_isNewReconciler: Se
      }, sC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ke(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ke(), gr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ke(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ke(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ke(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ke(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ke();
          var a = je.current;
          je.current = pl;
          try {
            return Tm(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ke();
          var i = je.current;
          je.current = pl;
          try {
            return Vg(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ke(), ym();
        },
        useState: function(e) {
          J = "useState", ke();
          var t = je.current;
          je.current = pl;
          try {
            return Ig(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ke(), xm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ke(), qE(e);
        },
        useTransition: function() {
          return J = "useTransition", ke(), eC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ke(), hm(e, t);
        },
        useId: function() {
          return J = "useId", ke(), bm();
        },
        unstable_isNewReconciler: Se
      }, cC = {
        readContext: function(e) {
          return gr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ke(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ke(), gr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ke(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ke(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ke(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ke(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ke();
          var a = je.current;
          je.current = km;
          try {
            return Tm(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ke();
          var i = je.current;
          je.current = km;
          try {
            return Bg(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ke(), ym();
        },
        useState: function(e) {
          J = "useState", ke();
          var t = je.current;
          je.current = km;
          try {
            return Yg(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ke(), xm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ke(), ZE(e);
        },
        useTransition: function() {
          return J = "useTransition", ke(), tC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ke(), hm(e, t);
        },
        useId: function() {
          return J = "useId", ke(), bm();
        },
        unstable_isNewReconciler: Se
      }, Zl = {
        readContext: function(e) {
          return tS(), gr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", St(), vn(), Xg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", St(), vn(), gr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", St(), vn(), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", St(), vn(), Kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", St(), vn(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", St(), vn(), Gg(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", St(), vn();
          var a = je.current;
          je.current = Zl;
          try {
            return qg(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", St(), vn();
          var i = je.current;
          je.current = Zl;
          try {
            return Pg(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", St(), vn(), Wg(e);
        },
        useState: function(e) {
          J = "useState", St(), vn();
          var t = je.current;
          je.current = Zl;
          try {
            return mm(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", St(), vn(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", St(), vn(), Zg(e);
        },
        useTransition: function() {
          return J = "useTransition", St(), vn(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", St(), vn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", St(), vn(), $g(e, t, a);
        },
        useId: function() {
          return J = "useId", St(), vn(), eS();
        },
        unstable_isNewReconciler: Se
      }, pl = {
        readContext: function(e) {
          return tS(), gr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", St(), ke(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", St(), ke(), gr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", St(), ke(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", St(), ke(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", St(), ke(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", St(), ke(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", St(), ke();
          var a = je.current;
          je.current = pl;
          try {
            return Tm(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", St(), ke();
          var i = je.current;
          je.current = pl;
          try {
            return Vg(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", St(), ke(), ym();
        },
        useState: function(e) {
          J = "useState", St(), ke();
          var t = je.current;
          je.current = pl;
          try {
            return Ig(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", St(), ke(), xm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", St(), ke(), qE(e);
        },
        useTransition: function() {
          return J = "useTransition", St(), ke(), eC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", St(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", St(), ke(), hm(e, t);
        },
        useId: function() {
          return J = "useId", St(), ke(), bm();
        },
        unstable_isNewReconciler: Se
      }, km = {
        readContext: function(e) {
          return tS(), gr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", St(), ke(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", St(), ke(), gr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", St(), ke(), Lp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", St(), ke(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", St(), ke(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", St(), ke(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", St(), ke();
          var a = je.current;
          je.current = pl;
          try {
            return Tm(e, t);
          } finally {
            je.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", St(), ke();
          var i = je.current;
          je.current = pl;
          try {
            return Bg(e, t, a);
          } finally {
            je.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", St(), ke(), ym();
        },
        useState: function(e) {
          J = "useState", St(), ke();
          var t = je.current;
          je.current = pl;
          try {
            return Yg(e);
          } finally {
            je.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", St(), ke(), xm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", St(), ke(), ZE(e);
        },
        useTransition: function() {
          return J = "useTransition", St(), ke(), tC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", St(), ke(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", St(), ke(), hm(e, t);
        },
        useId: function() {
          return J = "useId", St(), ke(), bm();
        },
        unstable_isNewReconciler: Se
      };
    }
    var Po = R.unstable_now, fC = 0, Dm = -1, zp = -1, Om = -1, nS = !1, Mm = !1;
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
    function Nm(e, t) {
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
            case X:
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
        var t = Po() - Om;
        Om = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case X:
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
        var a = Lt({}, t), i = e.defaultProps;
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
          var a = qt(e) || "Component";
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
        if (e.mode & Cn) {
          Pn(!0);
          try {
            s = a(i, u);
          } finally {
            Pn(!1);
          }
        }
        mC(t, s);
      }
      var f = s == null ? u : Lt({}, u, s);
      if (e.memoizedState = f, e.lanes === ae) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var yS = {
      isMounted: Pv,
      enqueueSetState: function(e, t, a) {
        var i = ho(e), u = Oa(), s = Io(i), f = Bu(u, s);
        f.payload = t, a != null && (Lm(a, "setState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (zr(p, i, s, u), om(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ho(e), u = Oa(), s = Io(i), f = Bu(u, s);
        f.tag = zE, f.payload = t, a != null && (Lm(a, "replaceState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (zr(p, i, s, u), om(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ho(e), i = Oa(), u = Io(a), s = Bu(i, u);
        s.tag = im, t != null && (Lm(t, "forceUpdate"), s.callback = t);
        var f = Uo(a, s, u);
        f !== null && (zr(f, a, u, i), om(f, a, u)), jc(a, u);
      }
    };
    function gC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Cn) {
            Pn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Pn(!1);
            }
          }
          v === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", qt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !We(a, i) || !We(u, s) : !0;
    }
    function RT(e, t, a) {
      var i = e.stateNode;
      {
        var u = qt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Cn) === nt && (Ap.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Cn) === nt && (Ap.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !vS.has(t) && (vS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", qt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !cS.has(t) && (cS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", qt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || zt(p)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function SC(e, t) {
      t.updater = yS, e.stateNode = t, mu(t, e), t._reactInternalInstance = uS;
    }
    function EC(e, t, a) {
      var i = !1, u = yi, s = yi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === T && f._context === void 0
        );
        if (!p && !hS.has(t)) {
          hS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Ri ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", qt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = gr(f);
      else {
        u = _f(e, t, !0);
        var g = t.contextTypes;
        i = g != null, s = i ? kf(e, u) : yi;
      }
      var C = new t(a, s);
      if (e.mode & Cn) {
        Pn(!0);
        try {
          C = new t(a, s);
        } finally {
          Pn(!1);
        }
      }
      var D = e.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null;
      SC(e, C);
      {
        if (typeof t.getDerivedStateFromProps == "function" && D === null) {
          var _ = qt(t) || "Component";
          sS.has(_) || (sS.add(_), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, C.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof C.getSnapshotBeforeUpdate == "function") {
          var V = null, I = null, Q = null;
          if (typeof C.componentWillMount == "function" && C.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof C.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof C.componentWillReceiveProps == "function" && C.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof C.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof C.componentWillUpdate == "function" && C.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Q = "componentWillUpdate" : typeof C.UNSAFE_componentWillUpdate == "function" && (Q = "UNSAFE_componentWillUpdate"), V !== null || I !== null || Q !== null) {
            var ze = qt(t) || "Component", lt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fS.has(ze) || (fS.add(ze), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ze, lt, V !== null ? `
  ` + V : "", I !== null ? `
  ` + I : "", Q !== null ? `
  ` + Q : ""));
          }
        }
      }
      return i && sE(e, u, s), C;
    }
    function xT(e, t) {
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
      RT(e, t, a);
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
          var p = qt(t) || "Component";
          pS.has(p) || (pS.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Cn && fl.recordLegacyContextWarning(e, u), fl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (mS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (xT(e, u), sm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var g = Yt;
        g |= el, (e.mode & an) !== nt && (g |= Nl), e.flags |= g;
      }
    }
    function wT(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = yi;
      if (typeof p == "object" && p !== null)
        v = gr(p);
      else {
        var g = _f(e, t, !0);
        v = kf(e, g);
      }
      var C = t.getDerivedStateFromProps, D = typeof C == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !D && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && CC(e, u, a, v), UE();
      var _ = e.memoizedState, V = u.state = _;
      if (sm(e, a, u, i), V = e.memoizedState, s === a && _ === V && !Ih() && !cm()) {
        if (typeof u.componentDidMount == "function") {
          var I = Yt;
          I |= el, (e.mode & an) !== nt && (I |= Nl), e.flags |= I;
        }
        return !1;
      }
      typeof C == "function" && (mS(e, t, C, a), V = e.memoizedState);
      var Q = cm() || gC(e, t, s, a, _, V, v);
      if (Q) {
        if (!D && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ze = Yt;
          ze |= el, (e.mode & an) !== nt && (ze |= Nl), e.flags |= ze;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var lt = Yt;
          lt |= el, (e.mode & an) !== nt && (lt |= Nl), e.flags |= lt;
        }
        e.memoizedProps = a, e.memoizedState = V;
      }
      return u.props = a, u.state = V, u.context = v, Q;
    }
    function TT(e, t, a, i, u) {
      var s = t.stateNode;
      AE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : vl(t.type, f);
      s.props = p;
      var v = t.pendingProps, g = s.context, C = a.contextType, D = yi;
      if (typeof C == "object" && C !== null)
        D = gr(C);
      else {
        var _ = _f(t, a, !0);
        D = kf(t, _);
      }
      var V = a.getDerivedStateFromProps, I = typeof V == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !I && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || g !== D) && CC(t, s, i, D), UE();
      var Q = t.memoizedState, ze = s.state = Q;
      if (sm(t, i, s, u), ze = t.memoizedState, f === v && Q === ze && !Ih() && !cm() && !Xe)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= Yt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= sr), !1;
      typeof V == "function" && (mS(t, a, V, i), ze = t.memoizedState);
      var lt = cm() || gC(t, a, p, i, Q, ze, D) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Xe;
      return lt ? (!I && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ze, D), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ze, D)), typeof s.componentDidUpdate == "function" && (t.flags |= Yt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= sr)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= Yt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= sr), t.memoizedProps = i, t.memoizedState = ze), s.props = i, s.state = ze, s.context = D, lt;
    }
    function nc(e, t) {
      return {
        value: e,
        source: t,
        stack: Gi(t),
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
          if (e.tag === M)
            return;
          console.error(i);
        }
        var p = u ? yt(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", g;
        if (e.tag === X)
          g = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var C = yt(e) || "Anonymous";
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
      var i = Bu(Tn, a);
      i.tag = Tg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        S_(u), ES(e, t);
      }, i;
    }
    function CS(e, t, a) {
      var i = Bu(Tn, a);
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
        }), typeof u != "function" && (da(e.lanes, dt) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", yt(e) || "Unknown"));
      }), i;
    }
    function xC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new _T(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = E_.bind(null, e, t, a);
        ca && Zp(e, a), t.then(s, s);
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
      if ((e.mode & Ut) === nt && (a === K || a === Re || a === Be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function wC(e) {
      var t = e;
      do {
        if (t.tag === me && sT(t))
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
          if (e.flags |= Je, a.flags |= Dc, a.flags &= -52805, a.tag === M) {
            var s = a.alternate;
            if (s === null)
              a.tag = xt;
            else {
              var f = Bu(Tn, dt);
              f.tag = im, Uo(a, f, dt);
            }
          }
          a.lanes = Mt(a.lanes, dt);
        }
        return e;
      }
      return e.flags |= vr, e.lanes = u, e;
    }
    function OT(e, t, a, i, u) {
      if (a.flags |= fs, ca && Zp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        DT(a), Kr() && a.mode & Ut && mE();
        var f = wC(t);
        if (f !== null) {
          f.flags &= ~Ur, TC(f, t, a, e, u), f.mode & Ut && xC(e, s, u), kT(f, e, s);
          return;
        } else {
          if (!Gv(u)) {
            xC(e, s, u), e0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Kr() && a.mode & Ut) {
        mE();
        var v = wC(t);
        if (v !== null) {
          (v.flags & vr) === tt && (v.flags |= Ur), TC(v, t, a, e, u), pg(nc(i, a));
          return;
        }
      }
      i = nc(i, a), s_(i);
      var g = t;
      do {
        switch (g.tag) {
          case X: {
            var C = i;
            g.flags |= vr;
            var D = bs(u);
            g.lanes = Mt(g.lanes, D);
            var _ = RC(g, C, D);
            kg(g, _);
            return;
          }
          case M:
            var V = i, I = g.type, Q = g.stateNode;
            if ((g.flags & Je) === tt && (typeof I.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && !wR(Q))) {
              g.flags |= vr;
              var ze = bs(u);
              g.lanes = Mt(g.lanes, ze);
              var lt = CS(g, V, ze);
              kg(g, lt);
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
    var Up = E.ReactCurrentOwner, hl = !1, RS, jp, xS, wS, TS, rc, bS, zm, Fp;
    RS = {}, jp = {}, xS = {}, wS = {}, TS = {}, rc = !1, bS = {}, zm = {}, Fp = {};
    function ka(e, t, a, i) {
      e === null ? t.child = kE(t, null, a, i) : t.child = Nf(t, e.child, a, i);
    }
    function NT(e, t, a, i) {
      t.child = Nf(t, e.child, null, i), t.child = Nf(t, null, a, i);
    }
    function bC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && sl(
          s,
          i,
          // Resolved props
          "prop",
          qt(a)
        );
      }
      var f = a.render, p = t.ref, v, g;
      zf(t, u), wa(t);
      {
        if (Up.current = t, or(!0), v = Pf(e, t, f, i, p, u), g = Vf(), t.mode & Cn) {
          Pn(!0);
          try {
            v = Pf(e, t, f, i, p, u), g = Vf();
          } finally {
            Pn(!1);
          }
        }
        or(!1);
      }
      return Ta(), e !== null && !hl ? (BE(e, t, u), $u(e, t, u)) : (Kr() && g && ug(t), t.flags |= di, ka(e, t, v, u), t.child);
    }
    function _C(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (j_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Kf(s), t.tag = Be, t.type = f, DS(t, s), kC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && sl(
            p,
            i,
            // Resolved props
            "prop",
            qt(s)
          ), a.defaultProps !== void 0) {
            var v = qt(s) || "Unknown";
            Fp[v] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Fp[v] = !0);
          }
        }
        var g = f0(a.type, null, i, t, t.mode, u);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var C = a.type, D = C.propTypes;
        D && sl(
          D,
          i,
          // Resolved props
          "prop",
          qt(C)
        );
      }
      var _ = e.child, V = AS(e, u);
      if (!V) {
        var I = _.memoizedProps, Q = a.compare;
        if (Q = Q !== null ? Q : We, Q(I, i) && e.ref === t.ref)
          return $u(e, t, u);
      }
      t.flags |= di;
      var ze = oc(_, i);
      return ze.ref = t.ref, ze.return = t, t.child = ze, ze;
    }
    function kC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === gt) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var g = s && s.propTypes;
          g && sl(
            g,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            qt(s)
          );
        }
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (We(C, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (hl = !1, t.pendingProps = i = C, AS(e, u))
            (e.flags & Dc) !== tt && (hl = !0);
          else return t.lanes = e.lanes, $u(e, t, u);
      }
      return _S(e, t, a, i, u);
    }
    function DC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Te)
        if ((t.mode & Ut) === nt) {
          var f = {
            baseLanes: ae,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Qm(t, a);
        } else if (da(a, fa)) {
          var D = {
            baseLanes: ae,
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
            v = Mt(g, a);
          } else
            v = a;
          t.lanes = t.childLanes = fa;
          var C = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = C, t.updateQueue = null, Qm(t, v), null;
        }
      else {
        var V;
        s !== null ? (V = Mt(s.baseLanes, a), t.memoizedState = null) : V = a, Qm(t, V);
      }
      return ka(e, t, u, a), t.child;
    }
    function LT(e, t, a) {
      var i = t.pendingProps;
      return ka(e, t, i, a), t.child;
    }
    function zT(e, t, a) {
      var i = t.pendingProps.children;
      return ka(e, t, i, a), t.child;
    }
    function AT(e, t, a) {
      {
        t.flags |= Yt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return ka(e, t, s, a), t.child;
    }
    function OC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= $n, t.flags |= yo);
    }
    function _S(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && sl(
          s,
          i,
          // Resolved props
          "prop",
          qt(a)
        );
      }
      var f;
      {
        var p = _f(t, a, !0);
        f = kf(t, p);
      }
      var v, g;
      zf(t, u), wa(t);
      {
        if (Up.current = t, or(!0), v = Pf(e, t, a, i, f, u), g = Vf(), t.mode & Cn) {
          Pn(!0);
          try {
            v = Pf(e, t, a, i, f, u), g = Vf();
          } finally {
            Pn(!1);
          }
        }
        or(!1);
      }
      return Ta(), e !== null && !hl ? (BE(e, t, u), $u(e, t, u)) : (Kr() && g && ug(t), t.flags |= di, ka(e, t, v, u), t.child);
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
            t.flags |= Je, t.flags |= vr;
            var g = new Error("Simulated error coming from DevTools"), C = bs(u);
            t.lanes = Mt(t.lanes, C);
            var D = CS(t, nc(g, t), C);
            kg(t, D);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && sl(
            _,
            i,
            // Resolved props
            "prop",
            qt(a)
          );
        }
      }
      var V;
      Kl(a) ? (V = !0, Wh(t)) : V = !1, zf(t, u);
      var I = t.stateNode, Q;
      I === null ? (Um(e, t), EC(t, a, i), gS(t, a, i, u), Q = !0) : e === null ? Q = wT(t, a, i, u) : Q = TT(e, t, a, i, u);
      var ze = kS(e, t, a, Q, V, u);
      {
        var lt = t.stateNode;
        Q && lt.props !== i && (rc || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yt(t) || "a component"), rc = !0);
      }
      return ze;
    }
    function kS(e, t, a, i, u, s) {
      OC(e, t);
      var f = (t.flags & Je) !== tt;
      if (!i && !f)
        return u && dE(t, a, !1), $u(e, t, s);
      var p = t.stateNode;
      Up.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, hC();
      else {
        wa(t);
        {
          if (or(!0), v = p.render(), t.mode & Cn) {
            Pn(!0);
            try {
              p.render();
            } finally {
              Pn(!1);
            }
          }
          or(!1);
        }
        Ta();
      }
      return t.flags |= di, e !== null && f ? NT(e, t, v, s) : ka(e, t, v, s), t.memoizedState = p.state, u && dE(t, a, !0), t.child;
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
        if (g.baseState = v, t.memoizedState = v, t.flags & Ur) {
          var C = nc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return LC(e, t, p, a, C);
        } else if (p !== s) {
          var D = nc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return LC(e, t, p, a, D);
        } else {
          H1(t);
          var _ = kE(t, null, p, a);
          t.child = _;
          for (var V = _; V; )
            V.flags = V.flags & ~Hn | ua, V = V.sibling;
        }
      } else {
        if (Mf(), p === s)
          return $u(e, t, a);
        ka(e, t, p, a);
      }
      return t.child;
    }
    function LC(e, t, a, i, u) {
      return Mf(), pg(u), t.flags |= Ur, ka(e, t, a, i), t.child;
    }
    function jT(e, t, a) {
      HE(t), e === null && dg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Qy(i, u);
      return p ? f = null : s !== null && Qy(i, s) && (t.flags |= Pa), OC(e, t), ka(e, t, f, a), t.child;
    }
    function FT(e, t) {
      return e === null && dg(t), null;
    }
    function HT(e, t, a, i) {
      Um(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var g = t.tag = F_(v), C = vl(v, u), D;
      switch (g) {
        case K:
          return DS(t, v), t.type = v = Kf(v), D = _S(null, t, v, C, i), D;
        case M:
          return t.type = v = i0(v), D = MC(null, t, v, C, i), D;
        case Re:
          return t.type = v = l0(v), D = bC(null, t, v, C, i), D;
        case qe: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && sl(
              _,
              C,
              // Resolved for outer only
              "prop",
              qt(v)
            );
          }
          return D = _C(
            null,
            t,
            v,
            vl(v.type, C),
            // The inner type can have defaults too
            i
          ), D;
        }
      }
      var V = "";
      throw v !== null && typeof v == "object" && v.$$typeof === gt && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function PT(e, t, a, i, u) {
      Um(e, t), t.tag = M;
      var s;
      return Kl(a) ? (s = !0, Wh(t)) : s = !1, zf(t, u), EC(t, a, i), gS(t, a, i, u), kS(null, t, a, !0, s, u);
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
      wa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var g = qt(a) || "Unknown";
          RS[g] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", g, g), RS[g] = !0);
        }
        t.mode & Cn && fl.recordLegacyContextWarning(t, null), or(!0), Up.current = t, p = Pf(null, t, a, u, s, i), v = Vf(), or(!1);
      }
      if (Ta(), t.flags |= di, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var C = qt(a) || "Unknown";
        jp[C] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), jp[C] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var D = qt(a) || "Unknown";
          jp[D] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), jp[D] = !0);
        }
        t.tag = M, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Kl(a) ? (_ = !0, Wh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, _g(t), SC(t, p), gS(t, a, u, i), kS(null, t, a, !0, _, i);
      } else {
        if (t.tag = K, t.mode & Cn) {
          Pn(!0);
          try {
            p = Pf(null, t, a, u, s, i), v = Vf();
          } finally {
            Pn(!1);
          }
        }
        return Kr() && v && ug(t), ka(null, t, p, i), DS(t, a), t.child;
      }
    }
    function DS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Br();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), TS[u] || (TS[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = qt(t) || "Unknown";
          Fp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Fp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = qt(t) || "Unknown";
          wS[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), wS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = qt(t) || "Unknown";
          xS[v] || (y("%s: Function components do not support contextType.", v), xS[v] = !0);
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
        baseLanes: Mt(e.baseLanes, t),
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
      return _s(e.childLanes, t);
    }
    function zC(e, t, a) {
      var i = t.pendingProps;
      J_(t) && (t.flags |= Je);
      var u = dl.current, s = !1, f = (t.flags & Je) !== tt;
      if (f || $T(u, e) ? (s = !0, t.flags &= ~Je) : (e === null || e.memoizedState !== null) && (u = oT(u, VE)), u = Uf(u), Fo(t, u), e === null) {
        dg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return KT(t, v);
        }
        var g = i.children, C = i.fallback;
        if (s) {
          var D = YT(t, g, C, a), _ = t.child;
          return _.memoizedState = MS(a), t.memoizedState = OS, D;
        } else
          return NS(t, g);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var I = V.dehydrated;
          if (I !== null)
            return XT(e, t, f, i, I, V, a);
        }
        if (s) {
          var Q = i.fallback, ze = i.children, lt = QT(e, t, ze, Q, a), Ze = t.child, Gt = e.child.memoizedState;
          return Ze.memoizedState = Gt === null ? MS(a) : BT(Gt, a), Ze.childLanes = IT(e, a), t.memoizedState = OS, lt;
        } else {
          var Pt = i.children, L = WT(e, t, Pt, a);
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
    function YT(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ut) === nt && s !== null ? (p = s, p.childLanes = ae, p.pendingProps = f, e.mode & rn && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Wo(a, u, i, null)) : (p = LS(f, u), v = Wo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function LS(e, t, a) {
      return AR(e, t, ae, null);
    }
    function AC(e, t) {
      return oc(e, t);
    }
    function WT(e, t, a, i) {
      var u = e.child, s = u.sibling, f = AC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ut) === nt && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ha) : p.push(s);
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
        (s & Ut) === nt && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var C = t.child;
        g = C, g.childLanes = ae, g.pendingProps = v, t.mode & rn && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = f.selfBaseDuration, g.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        g = AC(f, v), g.subtreeFlags = f.subtreeFlags & tr;
      var D;
      return p !== null ? D = oc(p, i) : (D = Wo(i, s, u, null), D.flags |= Hn), D.return = t, g.return = t, g.sibling = D, t.child = g, D;
    }
    function Am(e, t, a, i) {
      i !== null && pg(i), Nf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = NS(t, s);
      return f.flags |= Hn, t.memoizedState = null, f;
    }
    function GT(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = LS(f, s), v = Wo(i, s, u, null);
      return v.flags |= Hn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ut) !== nt && Nf(t, e.child, null, u), v;
    }
    function KT(e, t, a) {
      return (e.mode & Ut) === nt ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = dt) : qy(t) ? e.lanes = jr : e.lanes = fa, null;
    }
    function XT(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Ur) {
          t.flags &= ~Ur;
          var L = SS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Am(e, t, f, L);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Je, null;
          var G = i.children, z = i.fallback, pe = GT(e, t, G, z, f), He = t.child;
          return He.memoizedState = MS(f), t.memoizedState = OS, pe;
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
        var V = da(f, e.childLanes);
        if (hl || V) {
          var I = Wm();
          if (I !== null) {
            var Q = Vd(I, f);
            if (Q !== en && Q !== s.retryLane) {
              s.retryLane = Q;
              var ze = Tn;
              Ka(e, Q), zr(I, e, Q, ze);
            }
          }
          e0();
          var lt = SS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Am(e, t, f, lt);
        } else if (aE(u)) {
          t.flags |= Je, t.child = e.child;
          var Ze = C_.bind(null, e);
          return t1(u, Ze), null;
        } else {
          P1(t, u, s.treeContext);
          var Gt = i.children, Pt = NS(t, Gt);
          return Pt.flags |= ua, Pt;
        }
      }
    }
    function UC(e, t, a) {
      e.lanes = Mt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Mt(i.lanes, t)), xg(e.return, t, a);
    }
    function qT(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === me) {
          var u = i.memoizedState;
          u !== null && UC(i, a, e);
        } else if (i.tag === Nt)
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
        var a = zt(e), i = !a && typeof kt(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function tb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (zt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!jC(e[a], a))
              return;
        } else {
          var i = kt(e);
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
      JT(u), eb(s, u), tb(f, u), ka(e, t, f, a);
      var p = dl.current, v = Ng(p, _p);
      if (v)
        p = Lg(p, _p), t.flags |= Je;
      else {
        var g = e !== null && (e.flags & Je) !== tt;
        g && qT(t, t.child, a), p = Uf(p);
      }
      if (Fo(t, p), (t.mode & Ut) === nt)
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
            var _ = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var I = V.alternate;
              if (I !== null && pm(I) === null) {
                t.child = V;
                break;
              }
              var Q = V.sibling;
              V.sibling = _, _ = V, V = Q;
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
      return e === null ? t.child = Nf(t, null, i, a) : ka(e, t, i, a), t.child;
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
        var g = f.value;
        if (ue(g, p)) {
          if (f.children === s.children && !Ih())
            return $u(e, t, a);
        } else
          J1(t, u, a);
      }
      var C = s.children;
      return ka(e, t, C, a), t.child;
    }
    var PC = !1;
    function ab(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (PC || (PC = !0, y("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && y("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zf(t, a);
      var f = gr(i);
      wa(t);
      var p;
      return Up.current = t, or(!0), p = s(f), or(!1), Ta(), t.flags |= di, ka(e, t, p, a), t.child;
    }
    function Hp() {
      hl = !0;
    }
    function Um(e, t) {
      (t.mode & Ut) === nt && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Hn);
    }
    function $u(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), hC(), qp(t.lanes), da(a, t.childLanes) ? (q1(e, t), t.child) : null;
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
        return s === null ? (i.deletions = [e], i.flags |= Ha) : s.push(e), a.flags |= Hn, a;
      }
    }
    function AS(e, t) {
      var a = e.lanes;
      return !!da(a, t);
    }
    function lb(e, t, a) {
      switch (t.tag) {
        case X:
          NC(t), t.stateNode, Mf();
          break;
        case F:
          HE(t);
          break;
        case M: {
          var i = t.type;
          Kl(i) && Wh(t);
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
            var f = da(a, t.childLanes);
            f && (t.flags |= Yt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case me: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Fo(t, Uf(dl.current)), t.flags |= Je, null;
            var g = t.child, C = g.childLanes;
            if (da(a, C))
              return zC(e, t, a);
            Fo(t, Uf(dl.current));
            var D = $u(e, t, a);
            return D !== null ? D.sibling : null;
          } else
            Fo(t, Uf(dl.current));
          break;
        }
        case Nt: {
          var _ = (e.flags & Je) !== tt, V = da(a, t.childLanes);
          if (_) {
            if (V)
              return FC(e, t, a);
            t.flags |= Je;
          }
          var I = t.memoizedState;
          if (I !== null && (I.rendering = null, I.tail = null, I.lastEffect = null), Fo(t, dl.current), V)
            break;
          return null;
        }
        case $e:
        case Jt:
          return t.lanes = ae, DC(e, t, a);
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
          (t.flags & Je) === tt)
            return hl = !1, lb(e, t, a);
          (e.flags & Dc) !== tt ? hl = !0 : hl = !1;
        }
      } else if (hl = !1, Kr() && M1(t)) {
        var f = t.index, p = N1();
        hE(t, p, f);
      }
      switch (t.lanes = ae, t.tag) {
        case ve:
          return VT(e, t, t.type, a);
        case ht: {
          var v = t.elementType;
          return HT(e, t, v, a);
        }
        case K: {
          var g = t.type, C = t.pendingProps, D = t.elementType === g ? C : vl(g, C);
          return _S(e, t, g, D, a);
        }
        case M: {
          var _ = t.type, V = t.pendingProps, I = t.elementType === _ ? V : vl(_, V);
          return MC(e, t, _, I, a);
        }
        case X:
          return UT(e, t, a);
        case F:
          return jT(e, t, a);
        case ge:
          return FT(e, t);
        case me:
          return zC(e, t, a);
        case Z:
          return nb(e, t, a);
        case Re: {
          var Q = t.type, ze = t.pendingProps, lt = t.elementType === Q ? ze : vl(Q, ze);
          return bC(e, t, Q, lt, a);
        }
        case ee:
          return LT(e, t, a);
        case A:
          return zT(e, t, a);
        case ce:
          return AT(e, t, a);
        case fe:
          return rb(e, t, a);
        case re:
          return ab(e, t, a);
        case qe: {
          var Ze = t.type, Gt = t.pendingProps, Pt = vl(Ze, Gt);
          if (t.type !== t.elementType) {
            var L = Ze.propTypes;
            L && sl(
              L,
              Pt,
              // Resolved for outer only
              "prop",
              qt(Ze)
            );
          }
          return Pt = vl(Ze.type, Pt), _C(e, t, Ze, Pt, a);
        }
        case Be:
          return kC(e, t, t.type, t.pendingProps, a);
        case xt: {
          var G = t.type, z = t.pendingProps, pe = t.elementType === G ? z : vl(G, z);
          return PT(e, t, G, pe, a);
        }
        case Nt:
          return FC(e, t, a);
        case wt:
          break;
        case $e:
          return DC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bf(e) {
      e.flags |= Yt;
    }
    function BC(e) {
      e.flags |= $n, e.flags |= yo;
    }
    var $C, US, IC, YC;
    $C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === F || u.tag === ge)
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
    }, IC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Og(), v = Ow(f, a, s, i, u, p);
        t.updateQueue = v, v && Bf(t);
      }
    }, YC = function(e, t, a, i) {
      a !== i && Bf(t);
    };
    function Pp(e, t) {
      if (!Kr())
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
    function qr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ae, i = tt;
      if (t) {
        if ((e.mode & rn) !== nt) {
          for (var v = e.selfBaseDuration, g = e.child; g !== null; )
            a = Mt(a, Mt(g.lanes, g.childLanes)), i |= g.subtreeFlags & tr, i |= g.flags & tr, v += g.treeBaseDuration, g = g.sibling;
          e.treeBaseDuration = v;
        } else
          for (var C = e.child; C !== null; )
            a = Mt(a, Mt(C.lanes, C.childLanes)), i |= C.subtreeFlags & tr, i |= C.flags & tr, C.return = e, C = C.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & rn) !== nt) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Mt(a, Mt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Mt(a, Mt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function ub(e, t, a) {
      if (Y1() && (t.mode & Ut) !== nt && (t.flags & Je) === tt)
        return RE(t), Mf(), t.flags |= Ur | fs | vr, !1;
      var i = qh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($1(t), qr(t), (t.mode & rn) !== nt) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Mf(), (t.flags & Je) === tt && (t.memoizedState = null), t.flags |= Yt, qr(t), (t.mode & rn) !== nt) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return xE(), !0;
    }
    function WC(e, t, a) {
      var i = t.pendingProps;
      switch (og(t), t.tag) {
        case ve:
        case ht:
        case Be:
        case K:
        case Re:
        case ee:
        case A:
        case ce:
        case re:
        case qe:
          return qr(t), null;
        case M: {
          var u = t.type;
          return Kl(u) && Yh(t), qr(t), null;
        }
        case X: {
          var s = t.stateNode;
          if (Af(t), ag(t), Ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = qh(t);
            if (f)
              Bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Ur) !== tt) && (t.flags |= sr, xE());
            }
          }
          return US(e, t), qr(t), null;
        }
        case F: {
          Mg(t);
          var v = FE(), g = t.type;
          if (e !== null && t.stateNode != null)
            IC(e, t, g, i, v), e.ref !== t.ref && BC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return qr(t), null;
            }
            var C = Og(), D = qh(t);
            if (D)
              V1(t, v, C) && Bf(t);
            else {
              var _ = _w(g, i, v, C, t);
              $C(_, t, !1, !1), t.stateNode = _, Dw(_, g, i, v) && Bf(t);
            }
            t.ref !== null && BC(t);
          }
          return qr(t), null;
        }
        case ge: {
          var V = i;
          if (e && t.stateNode != null) {
            var I = e.memoizedProps;
            YC(e, t, I, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Q = FE(), ze = Og(), lt = qh(t);
            lt ? B1(t) && Bf(t) : t.stateNode = Mw(V, Q, ze, t);
          }
          return qr(t), null;
        }
        case me: {
          jf(t);
          var Ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Gt = ub(e, t, Ze);
            if (!Gt)
              return t.flags & vr ? t : null;
          }
          if ((t.flags & Je) !== tt)
            return t.lanes = a, (t.mode & rn) !== nt && lS(t), t;
          var Pt = Ze !== null, L = e !== null && e.memoizedState !== null;
          if (Pt !== L && Pt) {
            var G = t.child;
            if (G.flags |= er, (t.mode & Ut) !== nt) {
              var z = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              z || Ng(dl.current, VE) ? o_() : e0();
            }
          }
          var pe = t.updateQueue;
          if (pe !== null && (t.flags |= Yt), qr(t), (t.mode & rn) !== nt && Pt) {
            var He = t.child;
            He !== null && (t.treeBaseDuration -= He.treeBaseDuration);
          }
          return null;
        }
        case Z:
          return Af(t), US(e, t), e === null && w1(t.stateNode.containerInfo), qr(t), null;
        case fe:
          var Ae = t.type._context;
          return Rg(Ae, t), qr(t), null;
        case xt: {
          var vt = t.type;
          return Kl(vt) && Yh(t), qr(t), null;
        }
        case Nt: {
          jf(t);
          var Rt = t.memoizedState;
          if (Rt === null)
            return qr(t), null;
          var xn = (t.flags & Je) !== tt, un = Rt.rendering;
          if (un === null)
            if (xn)
              Pp(Rt, !1);
            else {
              var dr = c_() && (e === null || (e.flags & Je) === tt);
              if (!dr)
                for (var on = t.child; on !== null; ) {
                  var ur = pm(on);
                  if (ur !== null) {
                    xn = !0, t.flags |= Je, Pp(Rt, !1);
                    var Sa = ur.updateQueue;
                    return Sa !== null && (t.updateQueue = Sa, t.flags |= Yt), t.subtreeFlags = tt, Z1(t, a), Fo(t, Lg(dl.current, _p)), t.child;
                  }
                  on = on.sibling;
                }
              Rt.tail !== null && cr() > pR() && (t.flags |= Je, xn = !0, Pp(Rt, !1), t.lanes = Nd);
            }
          else {
            if (!xn) {
              var na = pm(un);
              if (na !== null) {
                t.flags |= Je, xn = !0;
                var Si = na.updateQueue;
                if (Si !== null && (t.updateQueue = Si, t.flags |= Yt), Pp(Rt, !0), Rt.tail === null && Rt.tailMode === "hidden" && !un.alternate && !Kr())
                  return qr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              cr() * 2 - Rt.renderingStartTime > pR() && a !== fa && (t.flags |= Je, xn = !0, Pp(Rt, !1), t.lanes = Nd);
            }
            if (Rt.isBackwards)
              un.sibling = t.child, t.child = un;
            else {
              var Ma = Rt.last;
              Ma !== null ? Ma.sibling = un : t.child = un, Rt.last = un;
            }
          }
          if (Rt.tail !== null) {
            var Na = Rt.tail;
            Rt.rendering = Na, Rt.tail = Na.sibling, Rt.renderingStartTime = cr(), Na.sibling = null;
            var Ea = dl.current;
            return xn ? Ea = Lg(Ea, _p) : Ea = Uf(Ea), Fo(t, Ea), Na;
          }
          return qr(t), null;
        }
        case wt:
          break;
        case $e:
        case Jt: {
          JS(t);
          var Gu = t.memoizedState, Xf = Gu !== null;
          if (e !== null) {
            var nv = e.memoizedState, ru = nv !== null;
            ru !== Xf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Te && (t.flags |= er);
          }
          return !Xf || (t.mode & Ut) === nt ? qr(t) : da(nu, fa) && (qr(t), t.subtreeFlags & (Hn | Yt) && (t.flags |= er)), null;
        }
        case Bt:
          return null;
        case Kt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ob(e, t, a) {
      switch (og(t), t.tag) {
        case M: {
          var i = t.type;
          Kl(i) && Yh(t);
          var u = t.flags;
          return u & vr ? (t.flags = u & ~vr | Je, (t.mode & rn) !== nt && lS(t), t) : null;
        }
        case X: {
          t.stateNode, Af(t), ag(t), Ag();
          var s = t.flags;
          return (s & vr) !== tt && (s & Je) === tt ? (t.flags = s & ~vr | Je, t) : null;
        }
        case F:
          return Mg(t), null;
        case me: {
          jf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Mf();
          }
          var p = t.flags;
          return p & vr ? (t.flags = p & ~vr | Je, (t.mode & rn) !== nt && lS(t), t) : null;
        }
        case Nt:
          return jf(t), null;
        case Z:
          return Af(t), null;
        case fe:
          var v = t.type._context;
          return Rg(v, t), null;
        case $e:
        case Jt:
          return JS(t), null;
        case Bt:
          return null;
        default:
          return null;
      }
    }
    function QC(e, t, a) {
      switch (og(t), t.tag) {
        case M: {
          var i = t.type.childContextTypes;
          i != null && Yh(t);
          break;
        }
        case X: {
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
        case me:
          jf(t);
          break;
        case Nt:
          jf(t);
          break;
        case fe:
          var u = t.type._context;
          Rg(u, t);
          break;
        case $e:
        case Jt:
          JS(t);
          break;
      }
    }
    var GC = null;
    GC = /* @__PURE__ */ new Set();
    var jm = !1, Zr = !1, sb = typeof WeakSet == "function" ? WeakSet : Set, Qe = null, $f = null, If = null;
    function cb(e) {
      Ml(null, function() {
        throw e;
      }), cs();
    }
    var fb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & rn)
        try {
          eu(), t.componentWillUnmount();
        } finally {
          Jl(e);
        }
      else
        t.componentWillUnmount();
    };
    function KC(e, t) {
      try {
        Vo(kr, e);
      } catch (a) {
        zn(e, t, a);
      }
    }
    function jS(e, t, a) {
      try {
        fb(e, a);
      } catch (i) {
        zn(e, t, i);
      }
    }
    function db(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        zn(e, t, i);
      }
    }
    function XC(e, t) {
      try {
        ZC(e);
      } catch (a) {
        zn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (at && Dt && e.mode & rn)
              try {
                eu(), i = a(null);
              } finally {
                Jl(e);
              }
            else
              i = a(null);
          } catch (u) {
            zn(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", yt(e));
        } else
          a.current = null;
    }
    function Fm(e, t, a) {
      try {
        a();
      } catch (i) {
        zn(e, t, i);
      }
    }
    var qC = !1;
    function pb(e, t) {
      Tw(e.containerInfo), Qe = t, vb();
      var a = qC;
      return qC = !1, a;
    }
    function vb() {
      for (; Qe !== null; ) {
        var e = Qe, t = e.child;
        (e.subtreeFlags & Ll) !== tt && t !== null ? (t.return = e, Qe = t) : hb();
      }
    }
    function hb() {
      for (; Qe !== null; ) {
        var e = Qe;
        gn(e);
        try {
          mb(e);
        } catch (a) {
          zn(e, e.return, a);
        }
        Ln();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Qe = t;
          return;
        }
        Qe = e.return;
      }
    }
    function mb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & sr) !== tt) {
        switch (gn(e), e.tag) {
          case K:
          case Re:
          case Be:
            break;
          case M: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !rc && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : vl(e.type, i), u);
              {
                var p = GC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", yt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case X: {
            {
              var v = e.stateNode;
              Xw(v.containerInfo);
            }
            break;
          }
          case F:
          case ge:
          case Z:
          case xt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Ln();
      }
    }
    function ml(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Xr) !== Xa ? rl(t) : (e & kr) !== Xa && ps(t), (e & Xl) !== Xa && Jp(!0), Fm(t, a, p), (e & Xl) !== Xa && Jp(!1), (e & Xr) !== Xa ? jl() : (e & kr) !== Xa && Od());
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
            (e & Xr) !== Xa ? Dd(t) : (e & kr) !== Xa && Ac(t);
            var f = s.create;
            (e & Xl) !== Xa && Jp(!0), s.destroy = f(), (e & Xl) !== Xa && Jp(!1), (e & Xr) !== Xa ? $v() : (e & kr) !== Xa && Iv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & kr) !== tt ? v = "useLayoutEffect" : (s.tag & Xl) !== tt ? v = "useInsertionEffect" : v = "useEffect";
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
      if ((t.flags & Yt) !== tt)
        switch (t.tag) {
          case ce: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = pC(), p = t.alternate === null ? "mount" : "update";
            dC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case X:
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
    function gb(e, t, a, i) {
      if ((a.flags & Al) !== tt)
        switch (a.tag) {
          case K:
          case Re:
          case Be: {
            if (!Zr)
              if (a.mode & rn)
                try {
                  eu(), Vo(kr | _r, a);
                } finally {
                  Jl(a);
                }
              else
                Vo(kr | _r, a);
            break;
          }
          case M: {
            var u = a.stateNode;
            if (a.flags & Yt && !Zr)
              if (t === null)
                if (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), a.mode & rn)
                  try {
                    eu(), u.componentDidMount();
                  } finally {
                    Jl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : vl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !rc && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), a.mode & rn)
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
          case X: {
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
            if (t === null && a.flags & Yt) {
              var D = a.type, _ = a.memoizedProps;
              Uw(C, D, _);
            }
            break;
          }
          case ge:
            break;
          case Z:
            break;
          case ce: {
            {
              var V = a.memoizedProps, I = V.onCommit, Q = V.onRender, ze = a.stateNode.effectDuration, lt = pC(), Ze = t === null ? "mount" : "update";
              dC() && (Ze = "nested-update"), typeof Q == "function" && Q(a.memoizedProps.id, Ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, lt);
              {
                typeof I == "function" && I(a.memoizedProps.id, Ze, ze, lt), h_(a);
                var Gt = a.return;
                e: for (; Gt !== null; ) {
                  switch (Gt.tag) {
                    case X:
                      var Pt = Gt.stateNode;
                      Pt.effectDuration += ze;
                      break e;
                    case ce:
                      var L = Gt.stateNode;
                      L.effectDuration += ze;
                      break e;
                  }
                  Gt = Gt.return;
                }
              }
            }
            break;
          }
          case me: {
            bb(e, a);
            break;
          }
          case Nt:
          case xt:
          case wt:
          case $e:
          case Jt:
          case Kt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Zr || a.flags & $n && ZC(a);
    }
    function Sb(e) {
      switch (e.tag) {
        case K:
        case Re:
        case Be: {
          if (e.mode & rn)
            try {
              eu(), KC(e, e.return);
            } finally {
              Jl(e);
            }
          else
            KC(e, e.return);
          break;
        }
        case M: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && db(e, e.return, t), XC(e, e.return);
          break;
        }
        case F: {
          XC(e, e.return);
          break;
        }
      }
    }
    function Eb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === F) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Ww(u) : Gw(i.stateNode, i.memoizedProps);
            } catch (f) {
              zn(e, e.return, f);
            }
          }
        } else if (i.tag === ge) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Qw(s) : Kw(s, i.memoizedProps);
            } catch (f) {
              zn(e, e.return, f);
            }
        } else if (!((i.tag === $e || i.tag === Jt) && i.memoizedState !== null && i !== e)) {
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
          if (e.mode & rn)
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
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === F) {
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
      return e.tag === F || e.tag === X || e.tag === Z;
    }
    function tR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || eR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== F && t.tag !== ge && t.tag !== rt; ) {
          if (t.flags & Hn || t.child === null || t.tag === Z)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Hn))
          return t.stateNode;
      }
    }
    function xb(e) {
      var t = Rb(e);
      switch (t.tag) {
        case F: {
          var a = t.stateNode;
          t.flags & Pa && (rE(a), t.flags &= ~Pa);
          var i = tR(e);
          HS(e, i, a);
          break;
        }
        case X:
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
      var i = e.tag, u = i === F || i === ge;
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
      var i = e.tag, u = i === F || i === ge;
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
    var Jr = null, yl = !1;
    function wb(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case F: {
              Jr = i.stateNode, yl = !1;
              break e;
            }
            case X: {
              Jr = i.stateNode.containerInfo, yl = !0;
              break e;
            }
            case Z: {
              Jr = i.stateNode.containerInfo, yl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Jr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        nR(e, t, a), Jr = null, yl = !1;
      }
      Cb(a);
    }
    function Bo(e, t, a) {
      for (var i = a.child; i !== null; )
        nR(e, t, i), i = i.sibling;
    }
    function nR(e, t, a) {
      switch (bd(a), a.tag) {
        case F:
          Zr || Yf(a, t);
        case ge: {
          {
            var i = Jr, u = yl;
            Jr = null, Bo(e, t, a), Jr = i, yl = u, Jr !== null && (yl ? Iw(Jr, a.stateNode) : $w(Jr, a.stateNode));
          }
          return;
        }
        case rt: {
          Jr !== null && (yl ? Yw(Jr, a.stateNode) : Xy(Jr, a.stateNode));
          return;
        }
        case Z: {
          {
            var s = Jr, f = yl;
            Jr = a.stateNode.containerInfo, yl = !0, Bo(e, t, a), Jr = s, yl = f;
          }
          return;
        }
        case K:
        case Re:
        case qe:
        case Be: {
          if (!Zr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var g = v.next, C = g;
                do {
                  var D = C, _ = D.destroy, V = D.tag;
                  _ !== void 0 && ((V & Xl) !== Xa ? Fm(a, t, _) : (V & kr) !== Xa && (ps(a), a.mode & rn ? (eu(), Fm(a, t, _), Jl(a)) : Fm(a, t, _), Od())), C = C.next;
                } while (C !== g);
              }
            }
          }
          Bo(e, t, a);
          return;
        }
        case M: {
          if (!Zr) {
            Yf(a, t);
            var I = a.stateNode;
            typeof I.componentWillUnmount == "function" && jS(a, t, I);
          }
          Bo(e, t, a);
          return;
        }
        case wt: {
          Bo(e, t, a);
          return;
        }
        case $e: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ut
          ) {
            var Q = Zr;
            Zr = Q || a.memoizedState !== null, Bo(e, t, a), Zr = Q;
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
    function rR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new sb()), t.forEach(function(i) {
          var u = R_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ca)
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
      $f = a, If = e, gn(t), aR(t, e), gn(t), $f = null, If = null;
    }
    function gl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            wb(e, t, s);
          } catch (v) {
            zn(s, t, v);
          }
        }
      var f = wl();
      if (t.subtreeFlags & zl)
        for (var p = t.child; p !== null; )
          gn(p), aR(p, e), p = p.sibling;
      gn(f);
    }
    function aR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case K:
        case Re:
        case qe:
        case Be: {
          if (gl(t, e), tu(e), u & Yt) {
            try {
              ml(Xl | _r, e, e.return), Vo(Xl | _r, e);
            } catch (vt) {
              zn(e, e.return, vt);
            }
            if (e.mode & rn) {
              try {
                eu(), ml(kr | _r, e, e.return);
              } catch (vt) {
                zn(e, e.return, vt);
              }
              Jl(e);
            } else
              try {
                ml(kr | _r, e, e.return);
              } catch (vt) {
                zn(e, e.return, vt);
              }
          }
          return;
        }
        case M: {
          gl(t, e), tu(e), u & $n && i !== null && Yf(i, i.return);
          return;
        }
        case F: {
          gl(t, e), tu(e), u & $n && i !== null && Yf(i, i.return);
          {
            if (e.flags & Pa) {
              var s = e.stateNode;
              try {
                rE(s);
              } catch (vt) {
                zn(e, e.return, vt);
              }
            }
            if (u & Yt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, g = e.type, C = e.updateQueue;
                if (e.updateQueue = null, C !== null)
                  try {
                    jw(f, C, g, v, p, e);
                  } catch (vt) {
                    zn(e, e.return, vt);
                  }
              }
            }
          }
          return;
        }
        case ge: {
          if (gl(t, e), tu(e), u & Yt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var D = e.stateNode, _ = e.memoizedProps, V = i !== null ? i.memoizedProps : _;
            try {
              Fw(D, V, _);
            } catch (vt) {
              zn(e, e.return, vt);
            }
          }
          return;
        }
        case X: {
          if (gl(t, e), tu(e), u & Yt && i !== null) {
            var I = i.memoizedState;
            if (I.isDehydrated)
              try {
                s1(t.containerInfo);
              } catch (vt) {
                zn(e, e.return, vt);
              }
          }
          return;
        }
        case Z: {
          gl(t, e), tu(e);
          return;
        }
        case me: {
          gl(t, e), tu(e);
          var Q = e.child;
          if (Q.flags & er) {
            var ze = Q.stateNode, lt = Q.memoizedState, Ze = lt !== null;
            if (ze.isHidden = Ze, Ze) {
              var Gt = Q.alternate !== null && Q.alternate.memoizedState !== null;
              Gt || u_();
            }
          }
          if (u & Yt) {
            try {
              Tb(e);
            } catch (vt) {
              zn(e, e.return, vt);
            }
            rR(e);
          }
          return;
        }
        case $e: {
          var Pt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ut
          ) {
            var L = Zr;
            Zr = L || Pt, gl(t, e), Zr = L;
          } else
            gl(t, e);
          if (tu(e), u & er) {
            var G = e.stateNode, z = e.memoizedState, pe = z !== null, He = e;
            if (G.isHidden = pe, pe && !Pt && (He.mode & Ut) !== nt) {
              Qe = He;
              for (var Ae = He.child; Ae !== null; )
                Qe = Ae, Db(Ae), Ae = Ae.sibling;
            }
            Eb(He, pe);
          }
          return;
        }
        case Nt: {
          gl(t, e), tu(e), u & Yt && rR(e);
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
      if (t & Hn) {
        try {
          xb(e);
        } catch (a) {
          zn(e, e.return, a);
        }
        e.flags &= ~Hn;
      }
      t & ua && (e.flags &= ~ua);
    }
    function kb(e, t, a) {
      $f = a, If = t, Qe = e, iR(e, t, a), $f = null, If = null;
    }
    function iR(e, t, a) {
      for (var i = (e.mode & Ut) !== nt; Qe !== null; ) {
        var u = Qe, s = u.child;
        if (u.tag === $e && i) {
          var f = u.memoizedState !== null, p = f || jm;
          if (p) {
            PS(e, t, a);
            continue;
          } else {
            var v = u.alternate, g = v !== null && v.memoizedState !== null, C = g || Zr, D = jm, _ = Zr;
            jm = p, Zr = C, Zr && !_ && (Qe = u, Ob(u));
            for (var V = s; V !== null; )
              Qe = V, iR(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            Qe = u, jm = D, Zr = _, PS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Al) !== tt && s !== null ? (s.return = u, Qe = s) : PS(e, t, a);
      }
    }
    function PS(e, t, a) {
      for (; Qe !== null; ) {
        var i = Qe;
        if ((i.flags & Al) !== tt) {
          var u = i.alternate;
          gn(i);
          try {
            gb(t, u, i, a);
          } catch (f) {
            zn(i, i.return, f);
          }
          Ln();
        }
        if (i === e) {
          Qe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Qe = s;
          return;
        }
        Qe = i.return;
      }
    }
    function Db(e) {
      for (; Qe !== null; ) {
        var t = Qe, a = t.child;
        switch (t.tag) {
          case K:
          case Re:
          case qe:
          case Be: {
            if (t.mode & rn)
              try {
                eu(), ml(kr, t, t.return);
              } finally {
                Jl(t);
              }
            else
              ml(kr, t, t.return);
            break;
          }
          case M: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && jS(t, t.return, i);
            break;
          }
          case F: {
            Yf(t, t.return);
            break;
          }
          case $e: {
            var u = t.memoizedState !== null;
            if (u) {
              lR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Qe = a) : lR(e);
      }
    }
    function lR(e) {
      for (; Qe !== null; ) {
        var t = Qe;
        if (t === e) {
          Qe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Qe = a;
          return;
        }
        Qe = t.return;
      }
    }
    function Ob(e) {
      for (; Qe !== null; ) {
        var t = Qe, a = t.child;
        if (t.tag === $e) {
          var i = t.memoizedState !== null;
          if (i) {
            uR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Qe = a) : uR(e);
      }
    }
    function uR(e) {
      for (; Qe !== null; ) {
        var t = Qe;
        gn(t);
        try {
          Sb(t);
        } catch (i) {
          zn(t, t.return, i);
        }
        if (Ln(), t === e) {
          Qe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Qe = a;
          return;
        }
        Qe = t.return;
      }
    }
    function Mb(e, t, a, i) {
      Qe = t, Nb(t, e, a, i);
    }
    function Nb(e, t, a, i) {
      for (; Qe !== null; ) {
        var u = Qe, s = u.child;
        (u.subtreeFlags & tl) !== tt && s !== null ? (s.return = u, Qe = s) : Lb(e, t, a, i);
      }
    }
    function Lb(e, t, a, i) {
      for (; Qe !== null; ) {
        var u = Qe;
        if ((u.flags & la) !== tt) {
          gn(u);
          try {
            zb(t, u, a, i);
          } catch (f) {
            zn(u, u.return, f);
          }
          Ln();
        }
        if (u === e) {
          Qe = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Qe = s;
          return;
        }
        Qe = u.return;
      }
    }
    function zb(e, t, a, i) {
      switch (t.tag) {
        case K:
        case Re:
        case Be: {
          if (t.mode & rn) {
            iS();
            try {
              Vo(Xr | _r, t);
            } finally {
              aS(t);
            }
          } else
            Vo(Xr | _r, t);
          break;
        }
      }
    }
    function Ab(e) {
      Qe = e, Ub();
    }
    function Ub() {
      for (; Qe !== null; ) {
        var e = Qe, t = e.child;
        if ((Qe.flags & Ha) !== tt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Qe = u, Hb(u, e);
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
            Qe = e;
          }
        }
        (e.subtreeFlags & tl) !== tt && t !== null ? (t.return = e, Qe = t) : jb();
      }
    }
    function jb() {
      for (; Qe !== null; ) {
        var e = Qe;
        (e.flags & la) !== tt && (gn(e), Fb(e), Ln());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Qe = t;
          return;
        }
        Qe = e.return;
      }
    }
    function Fb(e) {
      switch (e.tag) {
        case K:
        case Re:
        case Be: {
          e.mode & rn ? (iS(), ml(Xr | _r, e, e.return), aS(e)) : ml(Xr | _r, e, e.return);
          break;
        }
      }
    }
    function Hb(e, t) {
      for (; Qe !== null; ) {
        var a = Qe;
        gn(a), Vb(a, t), Ln();
        var i = a.child;
        i !== null ? (i.return = a, Qe = i) : Pb(e);
      }
    }
    function Pb(e) {
      for (; Qe !== null; ) {
        var t = Qe, a = t.sibling, i = t.return;
        if (JC(t), t === e) {
          Qe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Qe = a;
          return;
        }
        Qe = i;
      }
    }
    function Vb(e, t) {
      switch (e.tag) {
        case K:
        case Re:
        case Be: {
          e.mode & rn ? (iS(), ml(Xr, e, t), aS(e)) : ml(Xr, e, t);
          break;
        }
      }
    }
    function Bb(e) {
      switch (e.tag) {
        case K:
        case Re:
        case Be: {
          try {
            Vo(kr | _r, e);
          } catch (a) {
            zn(e, e.return, a);
          }
          break;
        }
        case M: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            zn(e, e.return, a);
          }
          break;
        }
      }
    }
    function $b(e) {
      switch (e.tag) {
        case K:
        case Re:
        case Be: {
          try {
            Vo(Xr | _r, e);
          } catch (t) {
            zn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Ib(e) {
      switch (e.tag) {
        case K:
        case Re:
        case Be: {
          try {
            ml(kr | _r, e, e.return);
          } catch (a) {
            zn(e, e.return, a);
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
    function Yb(e) {
      switch (e.tag) {
        case K:
        case Re:
        case Be:
          try {
            ml(Xr | _r, e, e.return);
          } catch (t) {
            zn(e, e.return, t);
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
    var Gb = E.ReactCurrentActQueue;
    function Kb(e) {
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
        return !e && Gb.current !== null && y("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Xb = Math.ceil, VS = E.ReactCurrentDispatcher, BS = E.ReactCurrentOwner, ea = E.ReactCurrentBatchConfig, Sl = E.ReactCurrentActQueue, Mr = (
      /*             */
      0
    ), sR = (
      /*               */
      1
    ), ta = (
      /*                */
      2
    ), Yi = (
      /*                */
      4
    ), Iu = 0, Bp = 1, ac = 2, Hm = 3, $p = 4, cR = 5, $S = 6, Qt = Mr, Da = null, Zn = null, Nr = ae, nu = ae, IS = No(ae), Lr = Iu, Ip = null, Pm = ae, Yp = ae, Vm = ae, Wp = null, qa = null, YS = 0, fR = 500, dR = 1 / 0, qb = 500, Yu = null;
    function Qp() {
      dR = cr() + qb;
    }
    function pR() {
      return dR;
    }
    var Bm = !1, WS = null, Wf = null, ic = !1, $o = null, Gp = ae, QS = [], GS = null, Zb = 50, Kp = 0, KS = null, XS = !1, $m = !1, Jb = 50, Qf = 0, Im = null, Xp = Tn, Ym = ae, vR = !1;
    function Wm() {
      return Da;
    }
    function Oa() {
      return (Qt & (ta | Yi)) !== Mr ? cr() : (Xp !== Tn || (Xp = cr()), Xp);
    }
    function Io(e) {
      var t = e.mode;
      if ((t & Ut) === nt)
        return dt;
      if ((Qt & ta) !== Mr && Nr !== ae)
        return bs(Nr);
      var a = G1() !== Q1;
      if (a) {
        if (ea.transition !== null) {
          var i = ea.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Ym === en && (Ym = Fd()), Ym;
      }
      var u = Wa();
      if (u !== en)
        return u;
      var s = Nw();
      return s;
    }
    function e_(e) {
      var t = e.mode;
      return (t & Ut) === nt ? dt : Xv();
    }
    function zr(e, t, a, i) {
      w_(), vR && y("useInsertionEffect must not schedule updates."), XS && ($m = !0), Co(e, a, i), (Qt & ta) !== ae && e === Da ? __(t) : (ca && Ds(e, t, a), k_(t), e === Da && ((Qt & ta) === Mr && (Yp = Mt(Yp, a)), Lr === $p && Yo(e, Nr)), Za(e, i), a === dt && Qt === Mr && (t.mode & Ut) === nt && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Sl.isBatchingLegacy && (Qp(), vE()));
    }
    function t_(e, t, a) {
      var i = e.current;
      i.lanes = t, Co(e, t, a), Za(e, a);
    }
    function n_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Qt & ta) !== Mr
      );
    }
    function Za(e, t) {
      var a = e.callbackNode;
      tf(e, t);
      var i = ef(e, e === Da ? Nr : ae);
      if (i === ae) {
        a !== null && OR(a), e.callbackNode = null, e.callbackPriority = en;
        return;
      }
      var u = Pl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Sl.current !== null && a !== r0)) {
        a == null && s !== dt && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && OR(a);
      var f;
      if (u === dt)
        e.tag === Lo ? (Sl.isBatchingLegacy !== null && (Sl.didScheduleLegacyUpdate = !0), O1(yR.bind(null, e))) : pE(yR.bind(null, e)), Sl.current !== null ? Sl.current.push(zo) : zw(function() {
          (Qt & (ta | Yi)) === Mr && zo();
        }), f = null;
      else {
        var p;
        switch (rh(i)) {
          case Ir:
            p = ds;
            break;
          case Ai:
            p = Ul;
            break;
          case Ia:
            p = nl;
            break;
          case Ya:
            p = gu;
            break;
          default:
            p = nl;
            break;
        }
        f = a0(p, hR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function hR(e, t) {
      if (ET(), Xp = Tn, Ym = ae, (Qt & (ta | Yi)) !== Mr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Qu();
      if (i && e.callbackNode !== a)
        return null;
      var u = ef(e, e === Da ? Nr : ae);
      if (u === ae)
        return null;
      var s = !rf(e, u) && !Kv(e, u) && !t, f = s ? d_(e, u) : Gm(e, u);
      if (f !== Iu) {
        if (f === ac) {
          var p = nf(e);
          p !== ae && (u = p, f = qS(e, p));
        }
        if (f === Bp) {
          var v = Ip;
          throw lc(e, ae), Yo(e, u), Za(e, cr()), v;
        }
        if (f === $S)
          Yo(e, u);
        else {
          var g = !rf(e, u), C = e.current.alternate;
          if (g && !a_(C)) {
            if (f = Gm(e, u), f === ac) {
              var D = nf(e);
              D !== ae && (u = D, f = qS(e, D));
            }
            if (f === Bp) {
              var _ = Ip;
              throw lc(e, ae), Yo(e, u), Za(e, cr()), _;
            }
          }
          e.finishedWork = C, e.finishedLanes = u, r_(e, f, u);
        }
      }
      return Za(e, cr()), e.callbackNode === a ? hR.bind(null, e) : null;
    }
    function qS(e, t) {
      var a = Wp;
      if (uf(e)) {
        var i = lc(e, t);
        i.flags |= Ur, x1(e.containerInfo);
      }
      var u = Gm(e, t);
      if (u !== ac) {
        var s = qa;
        qa = a, s !== null && mR(s);
      }
      return u;
    }
    function mR(e) {
      qa === null ? qa = e : qa.push.apply(qa, e);
    }
    function r_(e, t, a) {
      switch (t) {
        case Iu:
        case Bp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ac: {
          uc(e, qa, Yu);
          break;
        }
        case Hm: {
          if (Yo(e, a), Du(a) && // do not delay if we're inside an act() scope
          !MR()) {
            var i = YS + fR - cr();
            if (i > 10) {
              var u = ef(e, ae);
              if (u !== ae)
                break;
              var s = e.suspendedLanes;
              if (!Ou(s, a)) {
                Oa(), af(e, s);
                break;
              }
              e.timeoutHandle = Gy(uc.bind(null, e, qa, Yu), i);
              break;
            }
          }
          uc(e, qa, Yu);
          break;
        }
        case $p: {
          if (Yo(e, a), Ud(a))
            break;
          if (!MR()) {
            var f = vi(e, a), p = f, v = cr() - p, g = x_(v) - v;
            if (g > 10) {
              e.timeoutHandle = Gy(uc.bind(null, e, qa, Yu), g);
              break;
            }
          }
          uc(e, qa, Yu);
          break;
        }
        case cR: {
          uc(e, qa, Yu);
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
                  if (!ue(f(), p))
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
    function yR(e) {
      if (CT(), (Qt & (ta | Yi)) !== Mr)
        throw new Error("Should not already be working.");
      Qu();
      var t = ef(e, ae);
      if (!da(t, dt))
        return Za(e, cr()), null;
      var a = Gm(e, t);
      if (e.tag !== Lo && a === ac) {
        var i = nf(e);
        i !== ae && (t = i, a = qS(e, i));
      }
      if (a === Bp) {
        var u = Ip;
        throw lc(e, ae), Yo(e, t), Za(e, cr()), u;
      }
      if (a === $S)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, uc(e, qa, Yu), Za(e, cr()), null;
    }
    function i_(e, t) {
      t !== ae && (lf(e, Mt(t, dt)), Za(e, cr()), (Qt & (ta | Yi)) === Mr && (Qp(), zo()));
    }
    function ZS(e, t) {
      var a = Qt;
      Qt |= sR;
      try {
        return e(t);
      } finally {
        Qt = a, Qt === Mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Sl.isBatchingLegacy && (Qp(), vE());
      }
    }
    function l_(e, t, a, i, u) {
      var s = Wa(), f = ea.transition;
      try {
        return ea.transition = null, ar(Ir), e(t, a, i, u);
      } finally {
        ar(s), ea.transition = f, Qt === Mr && Qp();
      }
    }
    function Wu(e) {
      $o !== null && $o.tag === Lo && (Qt & (ta | Yi)) === Mr && Qu();
      var t = Qt;
      Qt |= sR;
      var a = ea.transition, i = Wa();
      try {
        return ea.transition = null, ar(Ir), e ? e() : void 0;
      } finally {
        ar(i), ea.transition = a, Qt = t, (Qt & (ta | Yi)) === Mr && zo();
      }
    }
    function gR() {
      return (Qt & (ta | Yi)) !== Mr;
    }
    function Qm(e, t) {
      ya(IS, nu, e), nu = Mt(nu, t);
    }
    function JS(e) {
      nu = IS.current, ma(IS, e);
    }
    function lc(e, t) {
      e.finishedWork = null, e.finishedLanes = ae;
      var a = e.timeoutHandle;
      if (a !== Ky && (e.timeoutHandle = Ky, Lw(a)), Zn !== null)
        for (var i = Zn.return; i !== null; ) {
          var u = i.alternate;
          QC(u, i), i = i.return;
        }
      Da = e;
      var s = oc(e.current, null);
      return Zn = s, Nr = nu = t, Lr = Iu, Ip = null, Pm = ae, Yp = ae, Vm = ae, Wp = null, qa = null, tT(), fl.discardPendingWarnings(), s;
    }
    function SR(e, t) {
      do {
        var a = Zn;
        try {
          if (rm(), $E(), Ln(), BS.current = null, a === null || a.return === null) {
            Lr = Bp, Ip = t, Zn = null;
            return;
          }
          if (at && a.mode & rn && Nm(a, !0), ot)
            if (Ta(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              zi(a, i, Nr);
            } else
              vs(a, t, Nr);
          OT(e, a.return, a, t, Nr), xR(a);
        } catch (u) {
          t = u, Zn === a && a !== null ? (a = a.return, Zn = a) : a = Zn;
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
      YS = cr();
    }
    function qp(e) {
      Pm = Mt(e, Pm);
    }
    function o_() {
      Lr === Iu && (Lr = Hm);
    }
    function e0() {
      (Lr === Iu || Lr === Hm || Lr === ac) && (Lr = $p), Da !== null && (Ts(Pm) || Ts(Yp)) && Yo(Da, Nr);
    }
    function s_(e) {
      Lr !== $p && (Lr = ac), Wp === null ? Wp = [e] : Wp.push(e);
    }
    function c_() {
      return Lr === Iu;
    }
    function Gm(e, t) {
      var a = Qt;
      Qt |= ta;
      var i = ER();
      if (Da !== e || Nr !== t) {
        if (ca) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, Nr), u.clear()), eh(e, t);
        }
        Yu = Bd(), lc(e, t);
      }
      Ru(t);
      do
        try {
          f_();
          break;
        } catch (s) {
          SR(e, s);
        }
      while (!0);
      if (rm(), Qt = a, CR(i), Zn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Uc(), Da = null, Nr = ae, Lr;
    }
    function f_() {
      for (; Zn !== null; )
        RR(Zn);
    }
    function d_(e, t) {
      var a = Qt;
      Qt |= ta;
      var i = ER();
      if (Da !== e || Nr !== t) {
        if (ca) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, Nr), u.clear()), eh(e, t);
        }
        Yu = Bd(), Qp(), lc(e, t);
      }
      Ru(t);
      do
        try {
          p_();
          break;
        } catch (s) {
          SR(e, s);
        }
      while (!0);
      return rm(), CR(i), Qt = a, Zn !== null ? (Yv(), Iu) : (Uc(), Da = null, Nr = ae, Lr);
    }
    function p_() {
      for (; Zn !== null && !Cd(); )
        RR(Zn);
    }
    function RR(e) {
      var t = e.alternate;
      gn(e);
      var a;
      (e.mode & rn) !== nt ? (rS(e), a = t0(t, e, nu), Nm(e, !0)) : a = t0(t, e, nu), Ln(), e.memoizedProps = e.pendingProps, a === null ? xR(e) : Zn = a, BS.current = null;
    }
    function xR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & fs) === tt) {
          gn(t);
          var u = void 0;
          if ((t.mode & rn) === nt ? u = WC(a, t, nu) : (rS(t), u = WC(a, t, nu), Nm(t, !1)), Ln(), u !== null) {
            Zn = u;
            return;
          }
        } else {
          var s = ob(a, t);
          if (s !== null) {
            s.flags &= Hv, Zn = s;
            return;
          }
          if ((t.mode & rn) !== nt) {
            Nm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= fs, i.subtreeFlags = tt, i.deletions = null;
          else {
            Lr = $S, Zn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Zn = v;
          return;
        }
        t = i, Zn = t;
      } while (t !== null);
      Lr === Iu && (Lr = cR);
    }
    function uc(e, t, a) {
      var i = Wa(), u = ea.transition;
      try {
        ea.transition = null, ar(Ir), v_(e, t, a, i);
      } finally {
        ea.transition = u, ar(i);
      }
      return null;
    }
    function v_(e, t, a, i) {
      do
        Qu();
      while ($o !== null);
      if (T_(), (Qt & (ta | Yi)) !== Mr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (_d(s), u === null)
        return kd(), null;
      if (s === ae && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ae, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = en;
      var f = Mt(u.lanes, u.childLanes);
      Pd(e, f), e === Da && (Da = null, Zn = null, Nr = ae), ((u.subtreeFlags & tl) !== tt || (u.flags & tl) !== tt) && (ic || (ic = !0, GS = a, a0(nl, function() {
        return Qu(), null;
      })));
      var p = (u.subtreeFlags & (Ll | zl | Al | tl)) !== tt, v = (u.flags & (Ll | zl | Al | tl)) !== tt;
      if (p || v) {
        var g = ea.transition;
        ea.transition = null;
        var C = Wa();
        ar(Ir);
        var D = Qt;
        Qt |= Yi, BS.current = null, pb(e, u), vC(), _b(e, u, s), bw(e.containerInfo), e.current = u, hs(s), kb(u, e, s), ms(), Rd(), Qt = D, ar(C), ea.transition = g;
      } else
        e.current = u, vC();
      var _ = ic;
      if (ic ? (ic = !1, $o = e, Gp = s) : (Qf = 0, Im = null), f = e.pendingLanes, f === ae && (Wf = null), _ || _R(e.current, !1), wd(u.stateNode, i), ca && e.memoizedUpdaters.clear(), Qb(), Za(e, cr()), t !== null)
        for (var V = e.onRecoverableError, I = 0; I < t.length; I++) {
          var Q = t[I], ze = Q.stack, lt = Q.digest;
          V(Q.value, {
            componentStack: ze,
            digest: lt
          });
        }
      if (Bm) {
        Bm = !1;
        var Ze = WS;
        throw WS = null, Ze;
      }
      return da(Gp, dt) && e.tag !== Lo && Qu(), f = e.pendingLanes, da(f, dt) ? (ST(), e === KS ? Kp++ : (Kp = 0, KS = e)) : Kp = 0, zo(), kd(), null;
    }
    function Qu() {
      if ($o !== null) {
        var e = rh(Gp), t = Ms(Ia, e), a = ea.transition, i = Wa();
        try {
          return ea.transition = null, ar(t), m_();
        } finally {
          ar(i), ea.transition = a;
        }
      }
      return !1;
    }
    function h_(e) {
      QS.push(e), ic || (ic = !0, a0(nl, function() {
        return Qu(), null;
      }));
    }
    function m_() {
      if ($o === null)
        return !1;
      var e = GS;
      GS = null;
      var t = $o, a = Gp;
      if ($o = null, Gp = ae, (Qt & (ta | Yi)) !== Mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      XS = !0, $m = !1, Cu(a);
      var i = Qt;
      Qt |= Yi, Ab(t.current), Mb(t, t.current, a, e);
      {
        var u = QS;
        QS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          yb(t, f);
        }
      }
      Md(), _R(t.current, !0), Qt = i, zo(), $m ? t === Im ? Qf++ : (Qf = 0, Im = t) : Qf = 0, XS = !1, $m = !1, Td(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function wR(e) {
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
      var i = nc(a, t), u = RC(e, i, dt), s = Uo(e, u, dt), f = Oa();
      s !== null && (Co(s, dt, f), Za(s, f));
    }
    function zn(e, t, a) {
      if (cb(a), Jp(!1), e.tag === X) {
        TR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === X) {
          TR(i, e, a);
          return;
        } else if (i.tag === M) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !wR(s)) {
            var f = nc(a, e), p = CS(i, f, dt), v = Uo(i, p, dt), g = Oa();
            v !== null && (Co(v, dt, g), Za(v, g));
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
      var u = Oa();
      af(e, a), D_(e), Da === e && Ou(Nr, a) && (Lr === $p || Lr === Hm && Du(Nr) && cr() - YS < fR ? lc(e, ae) : Vm = Mt(Vm, a)), Za(e, u);
    }
    function bR(e, t) {
      t === en && (t = e_(e));
      var a = Oa(), i = Ka(e, t);
      i !== null && (Co(i, t, a), Za(i, a));
    }
    function C_(e) {
      var t = e.memoizedState, a = en;
      t !== null && (a = t.retryLane), bR(e, a);
    }
    function R_(e, t) {
      var a = en, i;
      switch (e.tag) {
        case me:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Nt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), bR(e, a);
    }
    function x_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Xb(e / 1960) * 1960;
    }
    function w_() {
      if (Kp > Zb)
        throw Kp = 0, KS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Qf > Jb && (Qf = 0, Im = null, y("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function T_() {
      fl.flushLegacyContextWarning(), fl.flushPendingUnsafeLifecycleWarnings();
    }
    function _R(e, t) {
      gn(e), Km(e, Nl, Ib), t && Km(e, Mi, Yb), Km(e, Nl, Bb), t && Km(e, Mi, $b), Ln();
    }
    function Km(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== tt ? i = i.child : ((i.flags & t) !== tt && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Xm = null;
    function kR(e) {
      {
        if ((Qt & ta) !== Mr || !(e.mode & Ut))
          return;
        var t = e.tag;
        if (t !== ve && t !== X && t !== M && t !== K && t !== Re && t !== qe && t !== Be)
          return;
        var a = yt(e) || "ReactComponent";
        if (Xm !== null) {
          if (Xm.has(a))
            return;
          Xm.add(a);
        } else
          Xm = /* @__PURE__ */ new Set([a]);
        var i = Rr;
        try {
          gn(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? gn(e) : Ln();
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
          if (rm(), $E(), QC(e, t), UR(t, i), t.mode & rn && rS(t), Ml(null, VC, null, e, t, a), Ji()) {
            var u = cs();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var DR = !1, n0;
    n0 = /* @__PURE__ */ new Set();
    function __(e) {
      if (wi && !mT())
        switch (e.tag) {
          case K:
          case Re:
          case Be: {
            var t = Zn && yt(Zn) || "Unknown", a = t;
            if (!n0.has(a)) {
              n0.add(a);
              var i = yt(e) || "Unknown";
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
      if (ca) {
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
    function OR(e) {
      if (e !== r0)
        return Vv(e);
    }
    function MR() {
      return Sl.current !== null;
    }
    function k_(e) {
      {
        if (e.mode & Ut) {
          if (!oR())
            return;
        } else if (!Kb() || Qt !== Mr || e.tag !== K && e.tag !== Re && e.tag !== Be)
          return;
        if (Sl.current === null) {
          var t = Rr;
          try {
            gn(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, yt(e));
          } finally {
            t ? gn(e) : Ln();
          }
        }
      }
    }
    function D_(e) {
      e.tag !== Lo && oR() && Sl.current === null && y(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

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
    var Wi = null, Gf = null, O_ = function(e) {
      Wi = e;
    };
    function Kf(e) {
      {
        if (Wi === null)
          return e;
        var t = Wi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function i0(e) {
      return Kf(e);
    }
    function l0(e) {
      {
        if (Wi === null)
          return e;
        var t = Wi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Kf(e.render);
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
        if (Wi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case M: {
            typeof i == "function" && (u = !0);
            break;
          }
          case K: {
            (typeof i == "function" || s === gt) && (u = !0);
            break;
          }
          case Re: {
            (s === ne || s === gt) && (u = !0);
            break;
          }
          case qe:
          case Be: {
            (s === _t || s === gt) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Wi(a);
          if (f !== void 0 && f === Wi(i))
            return !0;
        }
        return !1;
      }
    }
    function LR(e) {
      {
        if (Wi === null || typeof WeakSet != "function")
          return;
        Gf === null && (Gf = /* @__PURE__ */ new WeakSet()), Gf.add(e);
      }
    }
    var M_ = function(e, t) {
      {
        if (Wi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Qu(), Wu(function() {
          u0(e.current, i, a);
        });
      }
    }, N_ = function(e, t) {
      {
        if (e.context !== yi)
          return;
        Qu(), Wu(function() {
          ev(t, e, null, null);
        });
      }
    };
    function u0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case K:
          case Be:
          case M:
            v = p;
            break;
          case Re:
            v = p.render;
            break;
        }
        if (Wi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var g = !1, C = !1;
        if (v !== null) {
          var D = Wi(v);
          D !== void 0 && (a.has(D) ? C = !0 : t.has(D) && (f === M ? C = !0 : g = !0));
        }
        if (Gf !== null && (Gf.has(e) || i !== null && Gf.has(i)) && (C = !0), C && (e._debugNeedsRemount = !0), C || g) {
          var _ = Ka(e, dt);
          _ !== null && zr(_, e, dt, Tn);
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
          case K:
          case Be:
          case M:
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
            case F:
              t.add(i.stateNode);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
            case X:
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
    function U_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = tt, this.subtreeFlags = tt, this.deletions = null, this.lanes = ae, this.childLanes = ae, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !s0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var gi = function(e, t, a, i) {
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
        return c0(e) ? M : K;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ne)
          return Re;
        if (t === _t)
          return qe;
      }
      return ve;
    }
    function oc(e, t) {
      var a = e.alternate;
      a === null ? (a = gi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = tt, a.subtreeFlags = tt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & tr, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ve:
        case K:
        case Be:
          a.type = Kf(e.type);
          break;
        case M:
          a.type = i0(e.type);
          break;
        case Re:
          a.type = l0(e.type);
          break;
      }
      return a;
    }
    function H_(e, t) {
      e.flags &= tr | Hn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ae, e.lanes = t, e.child = null, e.subtreeFlags = tt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
      return e === Qh ? (i = Ut, t === !0 && (i |= Cn, i |= an)) : i = nt, ca && (i |= rn), gi(X, null, null, i);
    }
    function f0(e, t, a, i, u, s) {
      var f = ve, p = e;
      if (typeof e == "function")
        c0(e) ? (f = M, p = i0(p)) : p = Kf(p);
      else if (typeof e == "string")
        f = F;
      else
        e: switch (e) {
          case Ei:
            return Wo(a.children, u, s, t);
          case ri:
            f = A, u |= Cn, (u & Ut) !== nt && (u |= an);
            break;
          case Ci:
            return V_(a, u, s, t);
          case Me:
            return B_(a, u, s, t);
          case Ve:
            return $_(a, u, s, t);
          case Wn:
            return AR(a, u, s, t);
          case _n:
          case jt:
          case Nn:
          case Cr:
          case At:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ri:
                  f = fe;
                  break e;
                case T:
                  f = re;
                  break e;
                case ne:
                  f = Re, p = l0(p);
                  break e;
                case _t:
                  f = qe;
                  break e;
                case gt:
                  f = ht, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var g = i ? yt(i) : null;
              g && (v += `

Check the render method of \`` + g + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var C = gi(f, a, t, u);
      return C.elementType = e, C.type = p, C.lanes = s, C._debugOwner = i, C;
    }
    function d0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = f0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Wo(e, t, a, i) {
      var u = gi(ee, e, i, t);
      return u.lanes = a, u;
    }
    function V_(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = gi(ce, e, i, t | rn);
      return u.elementType = Ci, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function B_(e, t, a, i) {
      var u = gi(me, e, i, t);
      return u.elementType = Me, u.lanes = a, u;
    }
    function $_(e, t, a, i) {
      var u = gi(Nt, e, i, t);
      return u.elementType = Ve, u.lanes = a, u;
    }
    function AR(e, t, a, i) {
      var u = gi($e, e, i, t);
      u.elementType = Wn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function p0(e, t, a) {
      var i = gi(ge, e, null, t);
      return i.lanes = a, i;
    }
    function I_() {
      var e = gi(F, null, null, nt);
      return e.elementType = "DELETED", e;
    }
    function Y_(e) {
      var t = gi(rt, null, null, nt);
      return t.stateNode = e, t;
    }
    function v0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = gi(Z, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function UR(e, t) {
      return e === null && (e = gi(ve, null, null, nt)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function W_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ky, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = en, this.eventTimes = ks(ae), this.expirationTimes = ks(Tn), this.pendingLanes = ae, this.suspendedLanes = ae, this.pingedLanes = ae, this.expiredLanes = ae, this.mutableReadLanes = ae, this.finishedLanes = ae, this.entangledLanes = ae, this.entanglements = ks(ae), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < xu; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Qh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
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
      return Ge(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Yn,
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
        return yi;
      var t = ho(e), a = D1(t);
      if (t.tag === M) {
        var i = t.type;
        if (Kl(i))
          return fE(t, i, a);
      }
      return a;
    }
    function G_(e, t) {
      {
        var a = ho(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = oa(a);
        if (u === null)
          return null;
        if (u.mode & Cn) {
          var s = yt(a) || "Component";
          if (!y0[s]) {
            y0[s] = !0;
            var f = Rr;
            try {
              gn(u), a.mode & Cn ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? gn(f) : Ln();
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
      var _ = D.current, V = Oa(), I = Io(_), Q = Bu(V, I);
      return Q.callback = t ?? null, Uo(_, Q, I), t_(D, I, V), D;
    }
    function ev(e, t, a, i) {
      xd(t, e);
      var u = t.current, s = Oa(), f = Io(u);
      Vn(f);
      var p = FR(a);
      t.context === null ? t.context = p : t.pendingContext = p, wi && Rr !== null && !m0 && (m0 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, yt(Rr) || "Unknown"));
      var v = Bu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var g = Uo(u, v, f);
      return g !== null && (zr(g, u, f, s), om(g, u, f)), f;
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
    function K_(e) {
      switch (e.tag) {
        case X: {
          var t = e.stateNode;
          if (uf(t)) {
            var a = Qv(t);
            i_(t, a);
          }
          break;
        }
        case me: {
          Wu(function() {
            var u = Ka(e, dt);
            if (u !== null) {
              var s = Oa();
              zr(u, e, dt, s);
            }
          });
          var i = dt;
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
      if (e.tag === me) {
        var t = Rs, a = Ka(e, t);
        if (a !== null) {
          var i = Oa();
          zr(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function q_(e) {
      if (e.tag === me) {
        var t = Io(e), a = Ka(e, t);
        if (a !== null) {
          var i = Oa();
          zr(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function BR(e) {
      var t = An(e);
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
    var YR = null, WR = null, QR = null, GR = null, KR = null, XR = null, qR = null, ZR = null, JR = null;
    {
      var ex = function(e, t, a) {
        var i = t[a], u = zt(e) ? e.slice() : Lt({}, e);
        return a + 1 === t.length ? (zt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = ex(e[i], t, a + 1), u);
      }, tx = function(e, t) {
        return ex(e, t, 0);
      }, nx = function(e, t, a, i) {
        var u = t[i], s = zt(e) ? e.slice() : Lt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], zt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = nx(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, rx = function(e, t, a) {
        if (t.length !== a.length) {
          Y("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Y("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return nx(e, t, a, 0);
      }, ax = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = zt(e) ? e.slice() : Lt({}, e);
        return s[u] = ax(e[u], t, a + 1, i), s;
      }, ix = function(e, t, a) {
        return ax(e, t, 0, a);
      }, S0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      YR = function(e, t, a, i) {
        var u = S0(e, t);
        if (u !== null) {
          var s = ix(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Lt({}, e.memoizedProps);
          var f = Ka(e, dt);
          f !== null && zr(f, e, dt, Tn);
        }
      }, WR = function(e, t, a) {
        var i = S0(e, t);
        if (i !== null) {
          var u = tx(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Lt({}, e.memoizedProps);
          var s = Ka(e, dt);
          s !== null && zr(s, e, dt, Tn);
        }
      }, QR = function(e, t, a, i) {
        var u = S0(e, t);
        if (u !== null) {
          var s = rx(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Lt({}, e.memoizedProps);
          var f = Ka(e, dt);
          f !== null && zr(f, e, dt, Tn);
        }
      }, GR = function(e, t, a) {
        e.pendingProps = ix(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ka(e, dt);
        i !== null && zr(i, e, dt, Tn);
      }, KR = function(e, t) {
        e.pendingProps = tx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ka(e, dt);
        a !== null && zr(a, e, dt, Tn);
      }, XR = function(e, t, a) {
        e.pendingProps = rx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ka(e, dt);
        i !== null && zr(i, e, dt, Tn);
      }, qR = function(e) {
        var t = Ka(e, dt);
        t !== null && zr(t, e, dt, Tn);
      }, ZR = function(e) {
        $R = e;
      }, JR = function(e) {
        IR = e;
      };
    }
    function ek(e) {
      var t = oa(e);
      return t === null ? null : t.stateNode;
    }
    function tk(e) {
      return null;
    }
    function nk() {
      return Rr;
    }
    function rk(e) {
      var t = e.findFiberByHostInstance, a = E.ReactCurrentDispatcher;
      return go({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: YR,
        overrideHookStateDeletePath: WR,
        overrideHookStateRenamePath: QR,
        overrideProps: GR,
        overridePropsDeletePath: KR,
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
    var lx = typeof reportError == "function" ? (
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
        if (a.nodeType !== Jn) {
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
        gR() && y("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Wu(function() {
          ev(null, e, null, null);
        }), lE(t);
      }
    };
    function ak(e, t) {
      if (!Jm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      ux(e);
      var a = !1, i = !1, u = "", s = lx;
      t != null && (t.hydrate ? Y("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Er && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = HR(e, Qh, null, a, i, u, s);
      Ph(f.current, e);
      var p = e.nodeType === Jn ? e.parentNode : e;
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
      ux(e), t === void 0 && y("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = lx;
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
      return !!(e && (e.nodeType === ia || e.nodeType === Zi || e.nodeType === od));
    }
    function tv(e) {
      return !!(e && (e.nodeType === ia || e.nodeType === Zi || e.nodeType === od || e.nodeType === Jn && e.nodeValue === " react-mount-point-unstable "));
    }
    function ux(e) {
      e.nodeType === ia && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), yp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var uk = E.ReactCurrentOwner, ox;
    ox = function(e) {
      if (e._reactRootContainer && e.nodeType !== Jn) {
        var t = BR(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = C0(e), u = !!(i && Mo(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ia && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function C0(e) {
      return e ? e.nodeType === Zi ? e.documentElement : e.firstChild : null;
    }
    function sx() {
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
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sx
        );
        e._reactRootContainer = f, Ph(f.current, e);
        var p = e.nodeType === Jn ? e.parentNode : e;
        return lp(p), Wu(), f;
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
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          sx
        );
        e._reactRootContainer = C, Ph(C.current, e);
        var D = e.nodeType === Jn ? e.parentNode : e;
        return lp(D), Wu(function() {
          ev(t, C, a, i);
        }), C;
      }
    }
    function sk(e, t) {
      e !== null && typeof e != "function" && y("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ey(e, t, a, i, u) {
      ox(a), sk(u === void 0 ? null : u, "render");
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
    var cx = !1;
    function ck(e) {
      {
        cx || (cx = !0, y("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = uk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ia ? e : G_(e, "findDOMNode");
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
    var fx = !1;
    function vk(e) {
      if (fx || (fx = !0, y("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !tv(e))
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
        return Wu(function() {
          ey(null, null, e, !1, function() {
            e._reactRootContainer = null, lE(e);
          });
        }), !0;
      } else {
        {
          var u = C0(e), s = !!(u && Mo(u)), f = e.nodeType === ia && tv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Fr(K_), Ro(X_), ah(q_), Ls(Wa), $d(th), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && y("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), xc(mw), yy(ZS, l_, Wu);
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
      Events: [Mo, bf, Vh, co, wc, ZS]
    };
    function yk(e, t) {
      return R0.usingClientEntryPoint || y('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ak(e, t);
    }
    function gk(e, t, a) {
      return R0.usingClientEntryPoint || y('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), lk(e, t, a);
    }
    function Sk(e) {
      return gR() && y("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Wu(e);
    }
    var Ek = rk({
      findFiberByHostInstance: Qs,
      bundleType: 1,
      version: h0,
      rendererPackageName: "react-dom"
    });
    if (!Ek && oe && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var dx = window.location.protocol;
      /^(https?|file):$/.test(dx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (dx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R0, ei.createPortal = hk, ei.createRoot = yk, ei.findDOMNode = ck, ei.flushSync = Sk, ei.hydrate = fk, ei.hydrateRoot = gk, ei.render = dk, ei.unmountComponentAtNode = vk, ei.unstable_batchedUpdates = ZS, ei.unstable_renderSubtreeIntoContainer = mk, ei.version = h0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ei;
}
function Dx() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dx);
    } catch (S) {
      console.error(S);
    }
  }
}
process.env.NODE_ENV === "production" ? (Dx(), _0.exports = Mk()) : _0.exports = Nk();
var Lk = _0.exports, k0, ny = Lk;
if (process.env.NODE_ENV === "production")
  k0 = ny.createRoot, ny.hydrateRoot;
else {
  var Rx = ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  k0 = function(S, R) {
    Rx.usingClientEntryPoint = !0;
    try {
      return ny.createRoot(S, R);
    } finally {
      Rx.usingClientEntryPoint = !1;
    }
  };
}
function zk(S, R) {
  var E, j = 1;
  S == null && (S = 0), R == null && (R = 0);
  function P() {
    var Y, y = E.length, ye, K = 0, M = 0;
    for (Y = 0; Y < y; ++Y)
      ye = E[Y], K += ye.x, M += ye.y;
    for (K = (K / y - S) * j, M = (M / y - R) * j, Y = 0; Y < y; ++Y)
      ye = E[Y], ye.x -= K, ye.y -= M;
  }
  return P.initialize = function(Y) {
    E = Y;
  }, P.x = function(Y) {
    return arguments.length ? (S = +Y, P) : S;
  }, P.y = function(Y) {
    return arguments.length ? (R = +Y, P) : R;
  }, P.strength = function(Y) {
    return arguments.length ? (j = +Y, P) : j;
  }, P;
}
function Ak(S) {
  const R = +this._x.call(null, S), E = +this._y.call(null, S);
  return Ox(this.cover(R, E), R, E, S);
}
function Ox(S, R, E, j) {
  if (isNaN(R) || isNaN(E)) return S;
  var P, Y = S._root, y = { data: j }, ye = S._x0, K = S._y0, M = S._x1, ve = S._y1, X, Z, F, ge, ee, A, re, fe;
  if (!Y) return S._root = y, S;
  for (; Y.length; )
    if ((ee = R >= (X = (ye + M) / 2)) ? ye = X : M = X, (A = E >= (Z = (K + ve) / 2)) ? K = Z : ve = Z, P = Y, !(Y = Y[re = A << 1 | ee])) return P[re] = y, S;
  if (F = +S._x.call(null, Y.data), ge = +S._y.call(null, Y.data), R === F && E === ge) return y.next = Y, P ? P[re] = y : S._root = y, S;
  do
    P = P ? P[re] = new Array(4) : S._root = new Array(4), (ee = R >= (X = (ye + M) / 2)) ? ye = X : M = X, (A = E >= (Z = (K + ve) / 2)) ? K = Z : ve = Z;
  while ((re = A << 1 | ee) === (fe = (ge >= Z) << 1 | F >= X));
  return P[fe] = Y, P[re] = y, S;
}
function Uk(S) {
  var R, E, j = S.length, P, Y, y = new Array(j), ye = new Array(j), K = 1 / 0, M = 1 / 0, ve = -1 / 0, X = -1 / 0;
  for (E = 0; E < j; ++E)
    isNaN(P = +this._x.call(null, R = S[E])) || isNaN(Y = +this._y.call(null, R)) || (y[E] = P, ye[E] = Y, P < K && (K = P), P > ve && (ve = P), Y < M && (M = Y), Y > X && (X = Y));
  if (K > ve || M > X) return this;
  for (this.cover(K, M).cover(ve, X), E = 0; E < j; ++E)
    Ox(this, y[E], ye[E], S[E]);
  return this;
}
function jk(S, R) {
  if (isNaN(S = +S) || isNaN(R = +R)) return this;
  var E = this._x0, j = this._y0, P = this._x1, Y = this._y1;
  if (isNaN(E))
    P = (E = Math.floor(S)) + 1, Y = (j = Math.floor(R)) + 1;
  else {
    for (var y = P - E || 1, ye = this._root, K, M; E > S || S >= P || j > R || R >= Y; )
      switch (M = (R < j) << 1 | S < E, K = new Array(4), K[M] = ye, ye = K, y *= 2, M) {
        case 0:
          P = E + y, Y = j + y;
          break;
        case 1:
          E = P - y, Y = j + y;
          break;
        case 2:
          P = E + y, j = Y - y;
          break;
        case 3:
          E = P - y, j = Y - y;
          break;
      }
    this._root && this._root.length && (this._root = ye);
  }
  return this._x0 = E, this._y0 = j, this._x1 = P, this._y1 = Y, this;
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
function La(S, R, E, j, P) {
  this.node = S, this.x0 = R, this.y0 = E, this.x1 = j, this.y1 = P;
}
function Pk(S, R, E) {
  var j, P = this._x0, Y = this._y0, y, ye, K, M, ve = this._x1, X = this._y1, Z = [], F = this._root, ge, ee;
  for (F && Z.push(new La(F, P, Y, ve, X)), E == null ? E = 1 / 0 : (P = S - E, Y = R - E, ve = S + E, X = R + E, E *= E); ge = Z.pop(); )
    if (!(!(F = ge.node) || (y = ge.x0) > ve || (ye = ge.y0) > X || (K = ge.x1) < P || (M = ge.y1) < Y))
      if (F.length) {
        var A = (y + K) / 2, re = (ye + M) / 2;
        Z.push(
          new La(F[3], A, re, K, M),
          new La(F[2], y, re, A, M),
          new La(F[1], A, ye, K, re),
          new La(F[0], y, ye, A, re)
        ), (ee = (R >= re) << 1 | S >= A) && (ge = Z[Z.length - 1], Z[Z.length - 1] = Z[Z.length - 1 - ee], Z[Z.length - 1 - ee] = ge);
      } else {
        var fe = S - +this._x.call(null, F.data), Re = R - +this._y.call(null, F.data), ce = fe * fe + Re * Re;
        if (ce < E) {
          var me = Math.sqrt(E = ce);
          P = S - me, Y = R - me, ve = S + me, X = R + me, j = F.data;
        }
      }
  return j;
}
function Vk(S) {
  if (isNaN(ve = +this._x.call(null, S)) || isNaN(X = +this._y.call(null, S))) return this;
  var R, E = this._root, j, P, Y, y = this._x0, ye = this._y0, K = this._x1, M = this._y1, ve, X, Z, F, ge, ee, A, re;
  if (!E) return this;
  if (E.length) for (; ; ) {
    if ((ge = ve >= (Z = (y + K) / 2)) ? y = Z : K = Z, (ee = X >= (F = (ye + M) / 2)) ? ye = F : M = F, R = E, !(E = E[A = ee << 1 | ge])) return this;
    if (!E.length) break;
    (R[A + 1 & 3] || R[A + 2 & 3] || R[A + 3 & 3]) && (j = R, re = A);
  }
  for (; E.data !== S; ) if (P = E, !(E = E.next)) return this;
  return (Y = E.next) && delete E.next, P ? (Y ? P.next = Y : delete P.next, this) : R ? (Y ? R[A] = Y : delete R[A], (E = R[0] || R[1] || R[2] || R[3]) && E === (R[3] || R[2] || R[1] || R[0]) && !E.length && (j ? j[re] = E : this._root = E), this) : (this._root = Y, this);
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
  var R = [], E, j = this._root, P, Y, y, ye, K;
  for (j && R.push(new La(j, this._x0, this._y0, this._x1, this._y1)); E = R.pop(); )
    if (!S(j = E.node, Y = E.x0, y = E.y0, ye = E.x1, K = E.y1) && j.length) {
      var M = (Y + ye) / 2, ve = (y + K) / 2;
      (P = j[3]) && R.push(new La(P, M, ve, ye, K)), (P = j[2]) && R.push(new La(P, Y, ve, M, K)), (P = j[1]) && R.push(new La(P, M, y, ye, ve)), (P = j[0]) && R.push(new La(P, Y, y, M, ve));
    }
  return this;
}
function Wk(S) {
  var R = [], E = [], j;
  for (this._root && R.push(new La(this._root, this._x0, this._y0, this._x1, this._y1)); j = R.pop(); ) {
    var P = j.node;
    if (P.length) {
      var Y, y = j.x0, ye = j.y0, K = j.x1, M = j.y1, ve = (y + K) / 2, X = (ye + M) / 2;
      (Y = P[0]) && R.push(new La(Y, y, ye, ve, X)), (Y = P[1]) && R.push(new La(Y, ve, ye, K, X)), (Y = P[2]) && R.push(new La(Y, y, X, ve, M)), (Y = P[3]) && R.push(new La(Y, ve, X, K, M));
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
function Gk(S) {
  return arguments.length ? (this._x = S, this) : this._x;
}
function Kk(S) {
  return S[1];
}
function Xk(S) {
  return arguments.length ? (this._y = S, this) : this._y;
}
function M0(S, R, E) {
  var j = new N0(R ?? Qk, E ?? Kk, NaN, NaN, NaN, NaN);
  return S == null ? j : j.addAll(S);
}
function N0(S, R, E, j, P, Y) {
  this._x = S, this._y = R, this._x0 = E, this._y0 = j, this._x1 = P, this._y1 = Y, this._root = void 0;
}
function xx(S) {
  for (var R = { data: S.data }, E = R; S = S.next; ) E = E.next = { data: S.data };
  return R;
}
var za = M0.prototype = N0.prototype;
za.copy = function() {
  var S = new N0(this._x, this._y, this._x0, this._y0, this._x1, this._y1), R = this._root, E, j;
  if (!R) return S;
  if (!R.length) return S._root = xx(R), S;
  for (E = [{ source: R, target: S._root = new Array(4) }]; R = E.pop(); )
    for (var P = 0; P < 4; ++P)
      (j = R.source[P]) && (j.length ? E.push({ source: j, target: R.target[P] = new Array(4) }) : R.target[P] = xx(j));
  return S;
};
za.add = Ak;
za.addAll = Uk;
za.cover = jk;
za.data = Fk;
za.extent = Hk;
za.find = Pk;
za.remove = Vk;
za.removeAll = Bk;
za.root = $k;
za.size = Ik;
za.visit = Yk;
za.visitAfter = Wk;
za.x = Gk;
za.y = Xk;
function sc(S) {
  return function() {
    return S;
  };
}
function Qo(S) {
  return (S() - 0.5) * 1e-6;
}
function qk(S) {
  return S.x + S.vx;
}
function Zk(S) {
  return S.y + S.vy;
}
function Jk(S) {
  var R, E, j, P = 1, Y = 1;
  typeof S != "function" && (S = sc(S == null ? 1 : +S));
  function y() {
    for (var M, ve = R.length, X, Z, F, ge, ee, A, re = 0; re < Y; ++re)
      for (X = M0(R, qk, Zk).visitAfter(ye), M = 0; M < ve; ++M)
        Z = R[M], ee = E[Z.index], A = ee * ee, F = Z.x + Z.vx, ge = Z.y + Z.vy, X.visit(fe);
    function fe(Re, ce, me, qe, Be) {
      var ht = Re.data, xt = Re.r, rt = ee + xt;
      if (ht) {
        if (ht.index > Z.index) {
          var Nt = F - ht.x - ht.vx, wt = ge - ht.y - ht.vy, $e = Nt * Nt + wt * wt;
          $e < rt * rt && (Nt === 0 && (Nt = Qo(j), $e += Nt * Nt), wt === 0 && (wt = Qo(j), $e += wt * wt), $e = (rt - ($e = Math.sqrt($e))) / $e * P, Z.vx += (Nt *= $e) * (rt = (xt *= xt) / (A + xt)), Z.vy += (wt *= $e) * rt, ht.vx -= Nt * (rt = 1 - rt), ht.vy -= wt * rt);
        }
        return;
      }
      return ce > F + rt || qe < F - rt || me > ge + rt || Be < ge - rt;
    }
  }
  function ye(M) {
    if (M.data) return M.r = E[M.data.index];
    for (var ve = M.r = 0; ve < 4; ++ve)
      M[ve] && M[ve].r > M.r && (M.r = M[ve].r);
  }
  function K() {
    if (R) {
      var M, ve = R.length, X;
      for (E = new Array(ve), M = 0; M < ve; ++M) X = R[M], E[X.index] = +S(X, M, R);
    }
  }
  return y.initialize = function(M, ve) {
    R = M, j = ve, K();
  }, y.iterations = function(M) {
    return arguments.length ? (Y = +M, y) : Y;
  }, y.strength = function(M) {
    return arguments.length ? (P = +M, y) : P;
  }, y.radius = function(M) {
    return arguments.length ? (S = typeof M == "function" ? M : sc(+M), K(), y) : S;
  }, y;
}
function eD(S) {
  return S.index;
}
function wx(S, R) {
  var E = S.get(R);
  if (!E) throw new Error("node not found: " + R);
  return E;
}
function tD(S) {
  var R = eD, E = X, j, P = sc(30), Y, y, ye, K, M, ve = 1;
  S == null && (S = []);
  function X(A) {
    return 1 / Math.min(ye[A.source.index], ye[A.target.index]);
  }
  function Z(A) {
    for (var re = 0, fe = S.length; re < ve; ++re)
      for (var Re = 0, ce, me, qe, Be, ht, xt, rt; Re < fe; ++Re)
        ce = S[Re], me = ce.source, qe = ce.target, Be = qe.x + qe.vx - me.x - me.vx || Qo(M), ht = qe.y + qe.vy - me.y - me.vy || Qo(M), xt = Math.sqrt(Be * Be + ht * ht), xt = (xt - Y[Re]) / xt * A * j[Re], Be *= xt, ht *= xt, qe.vx -= Be * (rt = K[Re]), qe.vy -= ht * rt, me.vx += Be * (rt = 1 - rt), me.vy += ht * rt;
  }
  function F() {
    if (y) {
      var A, re = y.length, fe = S.length, Re = new Map(y.map((me, qe) => [R(me, qe, y), me])), ce;
      for (A = 0, ye = new Array(re); A < fe; ++A)
        ce = S[A], ce.index = A, typeof ce.source != "object" && (ce.source = wx(Re, ce.source)), typeof ce.target != "object" && (ce.target = wx(Re, ce.target)), ye[ce.source.index] = (ye[ce.source.index] || 0) + 1, ye[ce.target.index] = (ye[ce.target.index] || 0) + 1;
      for (A = 0, K = new Array(fe); A < fe; ++A)
        ce = S[A], K[A] = ye[ce.source.index] / (ye[ce.source.index] + ye[ce.target.index]);
      j = new Array(fe), ge(), Y = new Array(fe), ee();
    }
  }
  function ge() {
    if (y)
      for (var A = 0, re = S.length; A < re; ++A)
        j[A] = +E(S[A], A, S);
  }
  function ee() {
    if (y)
      for (var A = 0, re = S.length; A < re; ++A)
        Y[A] = +P(S[A], A, S);
  }
  return Z.initialize = function(A, re) {
    y = A, M = re, F();
  }, Z.links = function(A) {
    return arguments.length ? (S = A, F(), Z) : S;
  }, Z.id = function(A) {
    return arguments.length ? (R = A, Z) : R;
  }, Z.iterations = function(A) {
    return arguments.length ? (ve = +A, Z) : ve;
  }, Z.strength = function(A) {
    return arguments.length ? (E = typeof A == "function" ? A : sc(+A), ge(), Z) : E;
  }, Z.distance = function(A) {
    return arguments.length ? (P = typeof A == "function" ? A : sc(+A), ee(), Z) : P;
  }, Z;
}
var nD = { value: () => {
} };
function Mx() {
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
    var j = "", P = E.indexOf(".");
    if (P >= 0 && (j = E.slice(P + 1), E = E.slice(0, P)), E && !R.hasOwnProperty(E)) throw new Error("unknown type: " + E);
    return { type: E, name: j };
  });
}
ry.prototype = Mx.prototype = {
  constructor: ry,
  on: function(S, R) {
    var E = this._, j = rD(S + "", E), P, Y = -1, y = j.length;
    if (arguments.length < 2) {
      for (; ++Y < y; ) if ((P = (S = j[Y]).type) && (P = aD(E[P], S.name))) return P;
      return;
    }
    if (R != null && typeof R != "function") throw new Error("invalid callback: " + R);
    for (; ++Y < y; )
      if (P = (S = j[Y]).type) E[P] = Tx(E[P], S.name, R);
      else if (R == null) for (P in E) E[P] = Tx(E[P], S.name, null);
    return this;
  },
  copy: function() {
    var S = {}, R = this._;
    for (var E in R) S[E] = R[E].slice();
    return new ry(S);
  },
  call: function(S, R) {
    if ((P = arguments.length - 2) > 0) for (var E = new Array(P), j = 0, P, Y; j < P; ++j) E[j] = arguments[j + 2];
    if (!this._.hasOwnProperty(S)) throw new Error("unknown type: " + S);
    for (Y = this._[S], j = 0, P = Y.length; j < P; ++j) Y[j].value.apply(R, E);
  },
  apply: function(S, R, E) {
    if (!this._.hasOwnProperty(S)) throw new Error("unknown type: " + S);
    for (var j = this._[S], P = 0, Y = j.length; P < Y; ++P) j[P].value.apply(R, E);
  }
};
function aD(S, R) {
  for (var E = 0, j = S.length, P; E < j; ++E)
    if ((P = S[E]).name === R)
      return P.value;
}
function Tx(S, R, E) {
  for (var j = 0, P = S.length; j < P; ++j)
    if (S[j].name === R) {
      S[j] = nD, S = S.slice(0, j).concat(S.slice(j + 1));
      break;
    }
  return E != null && S.push({ name: R, value: E }), S;
}
var qf = 0, uv = 0, iv = 0, Nx = 1e3, ay, ov, iy = 0, cc = 0, ly = 0, sv = typeof performance == "object" && performance.now ? performance : Date, Lx = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(S) {
  setTimeout(S, 17);
};
function zx() {
  return cc || (Lx(iD), cc = sv.now() + ly);
}
function iD() {
  cc = 0;
}
function D0() {
  this._call = this._time = this._next = null;
}
D0.prototype = Ax.prototype = {
  constructor: D0,
  restart: function(S, R, E) {
    if (typeof S != "function") throw new TypeError("callback is not a function");
    E = (E == null ? zx() : +E) + (R == null ? 0 : +R), !this._next && ov !== this && (ov ? ov._next = this : ay = this, ov = this), this._call = S, this._time = E, O0();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, O0());
  }
};
function Ax(S, R, E) {
  var j = new D0();
  return j.restart(S, R, E), j;
}
function lD() {
  zx(), ++qf;
  for (var S = ay, R; S; )
    (R = cc - S._time) >= 0 && S._call.call(void 0, R), S = S._next;
  --qf;
}
function bx() {
  cc = (iy = sv.now()) + ly, qf = uv = 0;
  try {
    lD();
  } finally {
    qf = 0, oD(), cc = 0;
  }
}
function uD() {
  var S = sv.now(), R = S - iy;
  R > Nx && (ly -= R, iy = S);
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
    R > 24 ? (S < 1 / 0 && (uv = setTimeout(bx, S - sv.now() - ly)), iv && (iv = clearInterval(iv))) : (iv || (iy = sv.now(), iv = setInterval(uD, Nx)), qf = 1, Lx(bx));
  }
}
const sD = 1664525, cD = 1013904223, _x = 4294967296;
function fD() {
  let S = 1;
  return () => (S = (sD * S + cD) % _x) / _x;
}
function dD(S) {
  return S.x;
}
function pD(S) {
  return S.y;
}
var vD = 10, hD = Math.PI * (3 - Math.sqrt(5));
function mD(S) {
  var R, E = 1, j = 1e-3, P = 1 - Math.pow(j, 1 / 300), Y = 0, y = 0.6, ye = /* @__PURE__ */ new Map(), K = Ax(X), M = Mx("tick", "end"), ve = fD();
  S == null && (S = []);
  function X() {
    Z(), M.call("tick", R), E < j && (K.stop(), M.call("end", R));
  }
  function Z(ee) {
    var A, re = S.length, fe;
    ee === void 0 && (ee = 1);
    for (var Re = 0; Re < ee; ++Re)
      for (E += (Y - E) * P, ye.forEach(function(ce) {
        ce(E);
      }), A = 0; A < re; ++A)
        fe = S[A], fe.fx == null ? fe.x += fe.vx *= y : (fe.x = fe.fx, fe.vx = 0), fe.fy == null ? fe.y += fe.vy *= y : (fe.y = fe.fy, fe.vy = 0);
    return R;
  }
  function F() {
    for (var ee = 0, A = S.length, re; ee < A; ++ee) {
      if (re = S[ee], re.index = ee, re.fx != null && (re.x = re.fx), re.fy != null && (re.y = re.fy), isNaN(re.x) || isNaN(re.y)) {
        var fe = vD * Math.sqrt(0.5 + ee), Re = ee * hD;
        re.x = fe * Math.cos(Re), re.y = fe * Math.sin(Re);
      }
      (isNaN(re.vx) || isNaN(re.vy)) && (re.vx = re.vy = 0);
    }
  }
  function ge(ee) {
    return ee.initialize && ee.initialize(S, ve), ee;
  }
  return F(), R = {
    tick: Z,
    restart: function() {
      return K.restart(X), R;
    },
    stop: function() {
      return K.stop(), R;
    },
    nodes: function(ee) {
      return arguments.length ? (S = ee, F(), ye.forEach(ge), R) : S;
    },
    alpha: function(ee) {
      return arguments.length ? (E = +ee, R) : E;
    },
    alphaMin: function(ee) {
      return arguments.length ? (j = +ee, R) : j;
    },
    alphaDecay: function(ee) {
      return arguments.length ? (P = +ee, R) : +P;
    },
    alphaTarget: function(ee) {
      return arguments.length ? (Y = +ee, R) : Y;
    },
    velocityDecay: function(ee) {
      return arguments.length ? (y = 1 - ee, R) : 1 - y;
    },
    randomSource: function(ee) {
      return arguments.length ? (ve = ee, ye.forEach(ge), R) : ve;
    },
    force: function(ee, A) {
      return arguments.length > 1 ? (A == null ? ye.delete(ee) : ye.set(ee, ge(A)), R) : ye.get(ee);
    },
    find: function(ee, A, re) {
      var fe = 0, Re = S.length, ce, me, qe, Be, ht;
      for (re == null ? re = 1 / 0 : re *= re, fe = 0; fe < Re; ++fe)
        Be = S[fe], ce = ee - Be.x, me = A - Be.y, qe = ce * ce + me * me, qe < re && (ht = Be, re = qe);
      return ht;
    },
    on: function(ee, A) {
      return arguments.length > 1 ? (M.on(ee, A), R) : M.on(ee);
    }
  };
}
function yD() {
  var S, R, E, j, P = sc(-30), Y, y = 1, ye = 1 / 0, K = 0.81;
  function M(F) {
    var ge, ee = S.length, A = M0(S, dD, pD).visitAfter(X);
    for (j = F, ge = 0; ge < ee; ++ge) R = S[ge], A.visit(Z);
  }
  function ve() {
    if (S) {
      var F, ge = S.length, ee;
      for (Y = new Array(ge), F = 0; F < ge; ++F) ee = S[F], Y[ee.index] = +P(ee, F, S);
    }
  }
  function X(F) {
    var ge = 0, ee, A, re = 0, fe, Re, ce;
    if (F.length) {
      for (fe = Re = ce = 0; ce < 4; ++ce)
        (ee = F[ce]) && (A = Math.abs(ee.value)) && (ge += ee.value, re += A, fe += A * ee.x, Re += A * ee.y);
      F.x = fe / re, F.y = Re / re;
    } else {
      ee = F, ee.x = ee.data.x, ee.y = ee.data.y;
      do
        ge += Y[ee.data.index];
      while (ee = ee.next);
    }
    F.value = ge;
  }
  function Z(F, ge, ee, A) {
    if (!F.value) return !0;
    var re = F.x - R.x, fe = F.y - R.y, Re = A - ge, ce = re * re + fe * fe;
    if (Re * Re / K < ce)
      return ce < ye && (re === 0 && (re = Qo(E), ce += re * re), fe === 0 && (fe = Qo(E), ce += fe * fe), ce < y && (ce = Math.sqrt(y * ce)), R.vx += re * F.value * j / ce, R.vy += fe * F.value * j / ce), !0;
    if (F.length || ce >= ye) return;
    (F.data !== R || F.next) && (re === 0 && (re = Qo(E), ce += re * re), fe === 0 && (fe = Qo(E), ce += fe * fe), ce < y && (ce = Math.sqrt(y * ce)));
    do
      F.data !== R && (Re = Y[F.data.index] * j / ce, R.vx += re * Re, R.vy += fe * Re);
    while (F = F.next);
  }
  return M.initialize = function(F, ge) {
    S = F, E = ge, ve();
  }, M.strength = function(F) {
    return arguments.length ? (P = typeof F == "function" ? F : sc(+F), ve(), M) : P;
  }, M.distanceMin = function(F) {
    return arguments.length ? (y = F * F, M) : Math.sqrt(y);
  }, M.distanceMax = function(F) {
    return arguments.length ? (ye = F * F, M) : Math.sqrt(ye);
  }, M.theta = function(F) {
    return arguments.length ? (K = F * F, M) : Math.sqrt(K);
  }, M;
}
function gD() {
  var Te, O, q, ot, at, Dt, Tt, Et, bt, Ot;
  const [S, R] = mn.useState(null), E = mn.useRef(null), [j, P] = mn.useState(() => {
    const H = document.getElementById("network-container");
    return Number((H == null ? void 0 : H.dataset.threshold) || 0.1);
  });
  mn.useEffect(() => {
    const H = document.getElementById("network-container");
    if (E.current = H, !H) return;
    H.getAttribute("data-organism");
    const oe = (be) => Array.isArray(be) ? be : Array.isArray(be == null ? void 0 : be.nodes) ? be.nodes : be && typeof be == "object" ? Object.values(be) : [];
    let Ne = new AbortController();
    const _e = (be) => {
      if (!be) return;
      const Ge = `${be.includes("?") ? "&" : "?"}_=${Date.now()}`;
      fetch(be + Ge, {
        credentials: "same-origin",
        cache: "no-store",
        signal: Ne.signal
      }).then((et) => {
        if (!et.ok)
          throw new Error(`Failed to load ${be}: ${et.status} ${et.statusText}`);
        return et.json();
      }).then((et) => {
        const ft = oe(et);
        R(ft);
      }).catch((et) => {
        et.name !== "AbortError" && console.error("Error fetching network data:", et);
      });
    };
    _e(H.getAttribute("data-network"));
    const xe = new MutationObserver((be) => {
      for (const Fe of be)
        Fe.type === "attributes" && Fe.attributeName === "data-network" && (Ne.abort(), Ne = new AbortController(), _e(H.getAttribute("data-network")));
    });
    return xe.observe(H, { attributes: !0 }), () => {
      xe.disconnect(), Ne.abort();
    };
  }, []);
  const Y = mn.useMemo(() => Array.isArray(S) ? S : [], [S]), y = mn.useMemo(
    () => Y.filter((H) => {
      var oe;
      return ((oe = H.attributes) == null ? void 0 : oe.node_type) === "repeat";
    }),
    [Y]
  ), ye = mn.useMemo(
    () => Y.filter((H) => {
      var oe;
      return ((oe = H.attributes) == null ? void 0 : oe.node_type) === "protein";
    }),
    [Y]
  ), K = mn.useMemo(() => y.map((H) => H.key), [y]), M = mn.useMemo(() => ye.map((H) => {
    let oe = null;
    for (const Ne of K)
      if (H.key.endsWith("_" + Ne)) {
        oe = Ne;
        break;
      }
    if (!oe) {
      const Ne = H.key.lastIndexOf("_");
      if (Ne > -1) {
        const _e = H.key.slice(Ne + 1);
        K.includes(_e) && (oe = _e);
      }
    }
    return { ...H, _satelliteKey: oe };
  }), [ye, K]), ve = (H, oe) => {
    const Ne = /* @__PURE__ */ new Map();
    for (const _e of H) {
      const xe = oe(_e), be = Ne.get(xe) || [];
      be.push(_e), Ne.set(xe, be);
    }
    return Ne;
  }, X = mn.useMemo(
    () => ve(M.filter((H) => H._satelliteKey), (H) => H._satelliteKey),
    [M]
  ), Z = mn.useMemo(
    () => ve(M, (H) => {
      var oe;
      return ((oe = H.attributes) == null ? void 0 : oe.label) || H.key;
    }),
    [M]
  ), F = mn.useRef(null), [ge, ee] = mn.useState({ x: 0, y: 0 }), [A, re] = mn.useState(null), [fe, Re] = mn.useState(!1), ce = mn.useRef({ clientX: 0, clientY: 0, viewX: 0, viewY: 0 }), [me, qe] = mn.useState({ x: -600, y: -300, w: 1200, h: 600 }), [Be, ht] = mn.useState(!1);
  mn.useEffect(() => {
    ht(!1);
  }, [S]), mn.useEffect(() => {
    const H = F.current;
    if (!H) return;
    const oe = H.parentElement;
    if (!oe) return;
    const Ne = () => {
      const xe = oe.getBoundingClientRect();
      H.setAttribute("width", `${xe.width}`), H.setAttribute("height", `${xe.height}`);
    };
    Ne();
    const _e = new ResizeObserver(Ne);
    return _e.observe(oe), () => _e.disconnect();
  }, []), mn.useEffect(() => {
    const H = (oe) => ee({ x: oe.clientX, y: oe.clientY });
    return window.addEventListener("mousemove", H), () => window.removeEventListener("mousemove", H);
  }, []);
  const xt = (H) => {
    H.preventDefault();
    const oe = Math.pow(1.0015, H.deltaY), Ne = F.current;
    if (!Ne) return;
    const _e = Ne.getBoundingClientRect(), xe = (H.clientX - _e.left) / _e.width, be = (H.clientY - _e.top) / _e.height;
    qe((Fe) => {
      const Ge = Fe.x + xe * Fe.w, et = Fe.y + be * Fe.h, ft = Math.max(50, Math.min(1e4, Fe.w * oe)), Xt = Math.max(50, Math.min(1e4, Fe.h * oe));
      return {
        x: Ge - xe * ft,
        y: et - be * Xt,
        w: ft,
        h: Xt
      };
    });
  };
  mn.useEffect(() => {
    const H = E.current;
    if (!H) return;
    const oe = () => {
      P(Number(H.dataset.threshold || 0));
    };
    return H.addEventListener("network-settings-change", oe), () => {
      H.removeEventListener("network-settings-change", oe);
    };
  }, []);
  const { satPositions: rt, proteinPositions: Nt } = mn.useMemo(() => {
    const H = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map();
    if (!y.length && !M.length)
      return { satPositions: H, proteinPositions: oe };
    const Ne = M.filter(
      (te) => {
        var se;
        return Number(((se = te.attributes) == null ? void 0 : se.enrichment) || 0) >= j;
      }
    ), _e = /* @__PURE__ */ new Map(), xe = [], be = (te, se) => te < se ? `${te}|||${se}` : `${se}|||${te}`;
    for (const [, te] of Z.entries()) {
      const se = [...new Set(
        te.filter((Ee) => {
          var we;
          return Number(((we = Ee.attributes) == null ? void 0 : we.enrichment) || 0) >= j;
        }).map((Ee) => Ee._satelliteKey).filter(Boolean)
      )];
      for (let Ee = 0; Ee < se.length; Ee++)
        for (let we = Ee + 1; we < se.length; we++) {
          const Ct = be(se[Ee], se[we]);
          _e.set(Ct, (_e.get(Ct) || 0) + 1);
        }
    }
    for (const [te, se] of _e.entries()) {
      const [Ee, we] = te.split("|||");
      xe.push({ a: Ee, b: we, weight: se });
    }
    const Fe = y.map((te) => te.key), Ge = new Map(Fe.map((te) => [te, 0]));
    for (const te of xe)
      Ge.set(te.a, (Ge.get(te.a) || 0) + te.weight), Ge.set(te.b, (Ge.get(te.b) || 0) + te.weight);
    const et = new Set(Fe), ft = [];
    if (et.size) {
      let te = [...et].sort((se, Ee) => (Ge.get(Ee) || 0) - (Ge.get(se) || 0))[0];
      for (ft.push(te), et.delete(te); et.size; ) {
        let se = null, Ee = -1 / 0;
        for (const we of et) {
          const dn = (_e.get(be(te, we)) || 0) * 100 + (Ge.get(we) || 0);
          dn > Ee && (Ee = dn, se = we);
        }
        ft.push(se), et.delete(se), te = se;
      }
    }
    const Xt = (te, se, Ee) => {
      const we = Math.abs(te - se);
      return Math.min(we, Ee - we);
    }, $t = (te, se, Ee) => {
      if (te.a === se.a || te.a === se.b || te.b === se.a || te.b === se.b) return !1;
      Ee.size;
      const we = Ee.get(te.a), Ct = Ee.get(te.b), dn = Ee.get(se.a), bn = Ee.get(se.b);
      if ([we, Ct, dn, bn].some((Ar) => Ar == null)) return !1;
      const Sr = (Ar, ra, Pr) => ra < Pr ? Ar > ra && Ar < Pr : Ar > ra || Ar < Pr;
      return Sr(dn, we, Ct) !== Sr(bn, we, Ct) && Sr(we, dn, bn) !== Sr(Ct, dn, bn);
    }, cn = (te) => {
      if (te.length < 2) return 0;
      const se = new Map(te.map((we, Ct) => [we, Ct]));
      let Ee = 0;
      for (const we of xe)
        Ee += we.weight * Xt(se.get(we.a), se.get(we.b), te.length) * 10;
      for (let we = 0; we < xe.length; we++)
        for (let Ct = we + 1; Ct < xe.length; Ct++)
          $t(xe[we], xe[Ct], se) && (Ee += xe[we].weight * xe[Ct].weight * 45);
      return Ee;
    };
    let yn = cn(ft), In = !0, hn = 0;
    for (; In && hn < 8; ) {
      In = !1, hn += 1;
      for (let te = 0; te < ft.length - 1; te++)
        for (let se = te + 1; se < ft.length; se++) {
          [ft[te], ft[se]] = [ft[se], ft[te]];
          const Ee = cn(ft);
          Ee + 1e-3 < yn ? (yn = Ee, In = !0) : [ft[te], ft[se]] = [ft[se], ft[te]];
        }
    }
    const Ht = Math.max(ft.length, 1), sn = Math.max(310, Ht * 72), jn = Math.max(190, Math.min(390, Ht * 34)), On = /* @__PURE__ */ new Map();
    ft.forEach((te, se) => {
      const Ee = -Math.PI / 2 + se * 2 * Math.PI / Ht, we = Math.cos(Ee) * sn, Ct = Math.sin(Ee) * jn;
      On.set(te, { x: we, y: Ct, angle: Ee });
    });
    const he = [], Oe = /* @__PURE__ */ new Map();
    y.forEach((te) => {
      var Ct;
      const se = Number(((Ct = te.attributes) == null ? void 0 : Ct.size) ?? 40), Ee = On.get(te.key) || { x: 0, y: 0 }, we = {
        id: te.key,
        type: "repeat",
        raw: te,
        size: se,
        x: Ee.x,
        y: Ee.y,
        fx: Ee.x,
        fy: Ee.y
      };
      he.push(we), Oe.set(te.key, we);
    });
    const pt = /* @__PURE__ */ new Map();
    for (const [, te] of Z.entries()) {
      const se = te.filter(
        (Ee) => {
          var we;
          return Number(((we = Ee.attributes) == null ? void 0 : we.enrichment) || 0) >= j && Ee._satelliteKey;
        }
      );
      for (const Ee of se) {
        const we = pt.get(Ee.key) || [];
        for (const Ct of se)
          Ct.key !== Ee.key && Ct._satelliteKey !== Ee._satelliteKey && we.push(Ct._satelliteKey);
        pt.set(Ee.key, we);
      }
    }
    const It = /* @__PURE__ */ new Map();
    for (const te of Ne) {
      if (!te._satelliteKey) continue;
      const se = It.get(te._satelliteKey) || [];
      se.push(te), It.set(te._satelliteKey, se);
    }
    for (const [te, se] of It.entries()) {
      const Ee = Oe.get(te);
      Ee && (se.sort((we, Ct) => {
        const dn = (pt.get(we.key) || []).length, bn = (pt.get(Ct.key) || []).length;
        return bn !== dn ? bn - dn : String(we.key).localeCompare(String(Ct.key));
      }), se.forEach((we, Ct) => {
        var Pr, ti;
        const dn = pt.get(we.key) || [];
        let bn;
        if (dn.length) {
          let ni = 0, pr = 0;
          for (const Er of dn) {
            const Yn = On.get(Er);
            Yn && (ni += Yn.x - Ee.x, pr += Yn.y - Ee.y);
          }
          bn = Math.atan2(pr, ni), bn += (Ct % 5 - 2) * 0.1;
        } else
          bn = (((Pr = On.get(te)) == null ? void 0 : Pr.angle) ?? 0) + (Ct / Math.max(se.length, 1) - 0.5) * Math.PI * 1.35;
        const Sr = Number(Ee.size || 40) + 54 + Ct % 3 * 9, Ar = Number(((ti = we.attributes) == null ? void 0 : ti.size) ?? 6), ra = {
          id: we.key,
          type: "protein",
          raw: we,
          size: Ar,
          x: Ee.x + Math.cos(bn) * Sr,
          y: Ee.y + Math.sin(bn) * Sr
        };
        he.push(ra), Oe.set(we.key, ra);
      }));
    }
    const fn = [];
    Ne.forEach((te) => {
      te._satelliteKey && (!Oe.has(te.key) || !Oe.has(te._satelliteKey) || fn.push({ source: te.key, target: te._satelliteKey, kind: "binding" }));
    });
    for (const [, te] of Z.entries()) {
      const se = te.filter((Ee) => Oe.has(Ee.key));
      if (!(se.length < 2))
        for (let Ee = 0; Ee < se.length - 1; Ee++)
          fn.push({
            source: se[Ee].key,
            target: se[Ee + 1].key,
            kind: "clone"
          });
    }
    const Mn = mD(he).force(
      "charge",
      yD().strength((te) => te.type === "repeat" ? -40 : -52)
    ).force(
      "collide",
      Jk().radius((te) => Number(te.size || (te.type === "repeat" ? 40 : 6)) + (te.type === "repeat" ? 24 : 7)).strength(1).iterations(2)
    ).force(
      "link",
      tD(fn).id((te) => te.id).distance((te) => {
        if (te.kind === "clone") return 145;
        const se = te.source.type === "repeat" ? te.source : te.target;
        return Number((se == null ? void 0 : se.size) || 40) + 55;
      }).strength((te) => te.kind === "binding" ? 0.88 : 0.055)
    ).force("center", zk(0, 0)).stop(), wn = 360;
    for (let te = 0; te < wn; te++) Mn.tick();
    return y.forEach((te) => {
      const se = Oe.get(te.key);
      se && H.set(te.key, { x: se.x, y: se.y });
    }), Ne.forEach((te) => {
      const se = Oe.get(te.key);
      se && oe.set(te.key, { x: se.x, y: se.y });
    }), { satPositions: H, proteinPositions: oe };
  }, [y, M, Z, j]);
  mn.useEffect(() => {
    if (Be || !F.current || !y.length || rt.size === 0) return;
    const H = [], oe = [];
    for (const { x: Ht, y: sn } of rt.values())
      H.push(Ht), oe.push(sn);
    for (const { x: Ht, y: sn } of Nt.values())
      H.push(Ht), oe.push(sn);
    if (!H.length) return;
    let Ne = Math.min(...H), _e = Math.max(...H), xe = Math.min(...oe), be = Math.max(...oe);
    const Fe = 80;
    Ne -= Fe, _e += Fe, xe -= Fe, be += Fe;
    let Ge = Math.max(_e - Ne || 1, 900), et = Math.max(be - xe || 1, 500);
    const ft = F.current.parentElement;
    if (!ft) {
      const sn = Ne + Ge / 2, jn = xe + et / 2;
      Ge *= 1.18, et *= 1.18, Ne = sn - Ge / 2, xe = jn - et / 2, qe({ x: Ne, y: xe, w: Ge, h: et }), ht(!0);
      return;
    }
    const Xt = ft.getBoundingClientRect(), $t = Xt.width / Xt.height;
    if (Ge / et > $t) {
      const Ht = Ge / $t, sn = Ht - et;
      xe -= sn / 2, et = Ht;
    } else {
      const Ht = et * $t, sn = Ht - Ge;
      Ne -= sn / 2, Ge = Ht;
    }
    const yn = 1.18, In = Ne + Ge / 2, hn = xe + et / 2;
    Ge *= yn, et *= yn, Ne = In - Ge / 2, xe = hn - et / 2, qe({ x: Ne, y: xe, w: Ge, h: et }), ht(!0);
  }, [rt, Nt, y.length, Be]);
  const wt = mn.useMemo(() => {
    const H = [];
    for (const [oe, Ne] of X.entries()) {
      const _e = rt.get(oe);
      if (_e)
        for (const xe of Ne) {
          const be = Nt.get(xe.key);
          be && H.push({ a: be, b: _e });
        }
    }
    return H;
  }, [X, rt, Nt]), $e = (H, oe, Ne, _e = 24) => {
    const xe = [];
    for (let be = 0; be <= _e; be++) {
      const Fe = be / _e, Ge = 1 - Fe;
      xe.push({
        x: Ge * Ge * H.x + 2 * Ge * Fe * oe.x + Fe * Fe * Ne.x,
        y: Ge * Ge * H.y + 2 * Ge * Fe * oe.y + Fe * Fe * Ne.y
      });
    }
    return xe;
  }, Jt = (H, oe, Ne, _e) => {
    const xe = (ft, Xt, $t) => (Xt.x - ft.x) * ($t.y - ft.y) - (Xt.y - ft.y) * ($t.x - ft.x), be = xe(H, oe, Ne), Fe = xe(H, oe, _e), Ge = xe(Ne, _e, H), et = xe(Ne, _e, oe);
    return be * Fe < 0 && Ge * et < 0;
  }, Bt = (H, oe, Ne, _e = []) => {
    const xe = oe.x - H.x, be = oe.y - H.y, Fe = Math.hypot(xe, be) || 1, Ge = (H.x + oe.x) / 2, et = (H.y + oe.y) / 2, ft = -be / Fe, Xt = xe / Fe, $t = [0.12, -0.12, 0.22, -0.22, 0.34, -0.34, 0.48, -0.48, 0.64, -0.64];
    let cn = null;
    for (const yn of $t) {
      const In = Math.max(22, Math.min(260, Fe * Math.abs(yn))) * Math.sign(yn), hn = { x: Ge + ft * In, y: et + Xt * In }, Ht = $e(H, hn, oe, 28);
      let sn = Math.abs(In) * 0.018;
      for (const jn of Ne) {
        let On = 1 / 0;
        for (let he = 2; he < Ht.length - 2; he++) {
          const Oe = Ht[he], pt = Math.hypot(Oe.x - jn.x, Oe.y - jn.y) - jn.r;
          On = Math.min(On, pt);
        }
        On < 0 ? sn += 5e3 + Math.abs(On) * 120 : On < 28 && (sn += (28 - On) * 18);
      }
      for (const jn of _e) {
        let On = 0;
        for (let he = 0; he < Ht.length - 1; he++)
          for (let Oe = 0; Oe < jn.length - 1; Oe++)
            if (Jt(Ht[he], Ht[he + 1], jn[Oe], jn[Oe + 1])) {
              On += 1;
              break;
            }
        sn += On * 420;
      }
      (!cn || sn < cn.score) && (cn = {
        score: sn,
        path: `M ${H.x} ${H.y} Q ${hn.x} ${hn.y} ${oe.x} ${oe.y}`,
        samples: Ht
      });
    }
    return cn;
  }, Kt = mn.useMemo(() => {
    const H = [];
    for (const [_e, xe] of Z.entries()) {
      const be = xe.map((Fe) => ({ node: Fe, pos: Nt.get(Fe.key) })).filter((Fe) => Fe.pos);
      if (be.length > 1) {
        const Fe = be.slice(1), Ge = [be[0]];
        for (; Fe.length; ) {
          const et = Ge[Ge.length - 1].pos;
          let ft = 0, Xt = 1 / 0;
          Fe.forEach(($t, cn) => {
            const yn = Math.hypot($t.pos.x - et.x, $t.pos.y - et.y);
            yn < Xt && (Xt = yn, ft = cn);
          }), Ge.push(Fe.splice(ft, 1)[0]);
        }
        for (let et = 0; et < Ge.length - 1; et++)
          H.push({ a: Ge[et].pos, b: Ge[et + 1].pos, label: _e });
      }
    }
    H.sort(
      (_e, xe) => Math.hypot(xe.b.x - xe.a.x, xe.b.y - xe.a.y) - Math.hypot(_e.b.x - _e.a.x, _e.b.y - _e.a.y)
    );
    const oe = y.map((_e) => {
      var be;
      const xe = rt.get(_e.key) || { x: 0, y: 0 };
      return {
        x: xe.x,
        y: xe.y,
        r: Number(((be = _e.attributes) == null ? void 0 : be.size) ?? 30) + 12
      };
    }), Ne = [];
    return H.map((_e) => {
      const xe = Bt(_e.a, _e.b, oe, Ne);
      return Ne.push(xe.samples), { ..._e, path: xe.path };
    });
  }, [Z, Nt, y, rt]), Ie = (A == null ? void 0 : A.type) === "protein" ? ((Te = A.node.attributes) == null ? void 0 : Te.label) || A.node.key : null, Se = (H) => {
    var oe;
    return Ie ? (((oe = H.attributes) == null ? void 0 : oe.label) || H.key) === Ie : !1;
  }, Xe = `${me.x} ${me.y} ${me.w} ${me.h}`;
  return !y.length && !M.length ? /* @__PURE__ */ tn.jsx("p", { children: "Enrichment data doesn't exist" }) : /* @__PURE__ */ tn.jsxs(
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
        /* @__PURE__ */ tn.jsxs(
          "svg",
          {
            ref: F,
            viewBox: Xe,
            onWheel: xt,
            style: { width: "100%", height: "100%", display: "block" },
            children: [
              /* @__PURE__ */ tn.jsx(
                "rect",
                {
                  x: me.x - me.w,
                  y: me.y - me.h,
                  width: me.w * 3,
                  height: me.h * 3,
                  fill: "transparent",
                  style: { cursor: fe ? "grabbing" : "grab" },
                  onMouseDown: (H) => {
                    H.button === 0 && (Re(!0), ce.current = {
                      clientX: H.clientX,
                      clientY: H.clientY,
                      viewX: me.x,
                      viewY: me.y
                    });
                  },
                  onMouseMove: (H) => {
                    if (!fe) return;
                    const oe = F.current.getBoundingClientRect(), Ne = me.w / oe.width, _e = me.h / oe.height, xe = (H.clientX - ce.current.clientX) * Ne, be = (H.clientY - ce.current.clientY) * _e;
                    qe((Fe) => ({
                      ...Fe,
                      x: ce.current.viewX - xe,
                      y: ce.current.viewY - be
                    }));
                  },
                  onMouseUp: () => Re(!1),
                  onMouseLeave: () => Re(!1)
                }
              ),
              /* @__PURE__ */ tn.jsx("g", { children: Kt.map((H, oe) => {
                const Ne = Ie === H.label;
                return /* @__PURE__ */ tn.jsx(
                  "path",
                  {
                    d: H.path,
                    fill: "none",
                    stroke: Ne ? "#FFD700" : "#888",
                    strokeDasharray: "4 4",
                    strokeWidth: Ne ? 2.5 : 1,
                    opacity: Ne ? 1 : 0.6,
                    pointerEvents: "none"
                  },
                  `clone-${oe}`
                );
              }) }),
              /* @__PURE__ */ tn.jsx("g", { children: wt.map((H, oe) => /* @__PURE__ */ tn.jsx(
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
              /* @__PURE__ */ tn.jsx("g", { children: y.map((H) => {
                var Fe, Ge, et, ft;
                const oe = rt.get(H.key) || { x: 0, y: 0 }, Ne = Number(((Fe = H.attributes) == null ? void 0 : Fe.size) ?? 30), _e = ((Ge = H.attributes) == null ? void 0 : Ge.color) || "#888", xe = ((et = H.attributes) == null ? void 0 : et.label) || H.key, be = ((ft = H.attributes) == null ? void 0 : ft.url) || null;
                return /* @__PURE__ */ tn.jsxs("g", { transform: `translate(${oe.x},${oe.y})`, children: [
                  /* @__PURE__ */ tn.jsx(
                    "circle",
                    {
                      r: Ne,
                      fill: _e,
                      opacity: "1",
                      stroke: (A == null ? void 0 : A.type) === "repeat" && A.node.key === H.key ? "#FFD700" : "none",
                      strokeWidth: (A == null ? void 0 : A.type) === "repeat" && A.node.key === H.key ? 4 : 0,
                      style: { cursor: be ? "pointer" : "default" },
                      onMouseEnter: () => re({ type: "repeat", node: H }),
                      onMouseLeave: () => re(null),
                      onClick: () => be && window.open(be, "_blank")
                    }
                  ),
                  /* @__PURE__ */ tn.jsx(
                    "text",
                    {
                      x: 0,
                      y: 0,
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                      fill: "#fff",
                      fontSize: "20",
                      fontWeight: "600",
                      style: { cursor: be ? "pointer" : "default", userSelect: "none" },
                      onMouseEnter: () => re({ type: "repeat", node: H }),
                      onMouseLeave: () => re(null),
                      onClick: () => be && window.open(be, "_blank"),
                      children: xe
                    }
                  )
                ] }, H.key);
              }) }),
              /* @__PURE__ */ tn.jsx("g", { children: M.filter((H) => {
                var oe;
                return Number(((oe = H.attributes) == null ? void 0 : oe.enrichment) || 0) >= j;
              }).map((H) => {
                var be, Fe, Ge;
                const oe = Nt.get(H.key) || { x: 0, y: 0 }, Ne = Number(((be = H.attributes) == null ? void 0 : be.size) ?? 6), _e = ((Fe = H.attributes) == null ? void 0 : Fe.color) || "#9DD6FB", xe = ((Ge = H.attributes) == null ? void 0 : Ge.url) || null;
                return /* @__PURE__ */ tn.jsx(
                  "circle",
                  {
                    cx: oe.x,
                    cy: oe.y,
                    r: Ne,
                    fill: _e,
                    stroke: Se(H) ? "#FFD700" : "none",
                    strokeWidth: Se(H) ? 3 : 0,
                    style: { cursor: xe ? "pointer" : "default" },
                    onMouseEnter: () => re({ type: "protein", node: H }),
                    onMouseLeave: () => re(null),
                    onClick: () => xe && window.open(xe, "_blank")
                  },
                  H.key
                );
              }) })
            ]
          }
        ),
        A && /* @__PURE__ */ tn.jsx(
          "div",
          {
            role: "tooltip",
            style: {
              position: "fixed",
              left: ge.x + 12,
              top: ge.y + 12,
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
            children: A.type === "repeat" ? /* @__PURE__ */ tn.jsxs("div", { children: [
              /* @__PURE__ */ tn.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: ((O = A.node.attributes) == null ? void 0 : O.label) || A.node.key }),
              /* @__PURE__ */ tn.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Satellite (repeat)" }),
              ((q = A.node.attributes) == null ? void 0 : q.aliases) && /* @__PURE__ */ tn.jsxs("div", { children: [
                /* @__PURE__ */ tn.jsx("b", { children: "Aliases:" }),
                " ",
                String(A.node.attributes.aliases)
              ] }),
              ((ot = A.node.attributes) == null ? void 0 : ot.dfam_id) != null && /* @__PURE__ */ tn.jsxs("div", { children: [
                /* @__PURE__ */ tn.jsx("b", { children: "Dfam:" }),
                " ",
                String(A.node.attributes.dfam_id)
              ] }),
              ((at = A.node.attributes) == null ? void 0 : at.url) && /* @__PURE__ */ tn.jsx(
                "div",
                {
                  style: {
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer"
                  },
                  onClick: () => window.open(A.node.attributes.url, "_blank"),
                  children: "Open page"
                }
              )
            ] }) : /* @__PURE__ */ tn.jsxs("div", { children: [
              /* @__PURE__ */ tn.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: (Dt = A.node.attributes) == null ? void 0 : Dt.label }),
              /* @__PURE__ */ tn.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Transcription factor" }),
              ((Tt = A.node.attributes) == null ? void 0 : Tt.gene_family) && /* @__PURE__ */ tn.jsxs("div", { children: [
                /* @__PURE__ */ tn.jsx("b", { children: "Family:" }),
                " ",
                String(A.node.attributes.gene_family)
              ] }),
              ((Et = A.node.attributes) == null ? void 0 : Et.enrichment) != null && /* @__PURE__ */ tn.jsxs("div", { children: [
                /* @__PURE__ */ tn.jsx("b", { children: "Enrichment:" }),
                " ",
                String(A.node.attributes.enrichment)
              ] }),
              ((bt = A.node.attributes) == null ? void 0 : bt.aliases) && /* @__PURE__ */ tn.jsxs("div", { children: [
                /* @__PURE__ */ tn.jsx("b", { children: "Aliases:" }),
                " ",
                String(A.node.attributes.aliases)
              ] }),
              ((Ot = A.node.attributes) == null ? void 0 : Ot.url) && /* @__PURE__ */ tn.jsx(
                "div",
                {
                  style: {
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer"
                  },
                  onClick: () => window.open(A.node.attributes.url, "_blank"),
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
const Ux = document.getElementById("network-container");
if (!Ux) throw new Error('Missing <div id="network-container"> in index.html');
const SD = k0(Ux);
SD.render(
  /* @__PURE__ */ tn.jsx(bk.StrictMode, { children: /* @__PURE__ */ tn.jsx(gD, {}) })
);
