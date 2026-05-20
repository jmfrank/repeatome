function Tk(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var x0 = { exports: {} }, rv = {}, _0 = { exports: {} }, bt = {};
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
  if (pT) return bt;
  pT = 1;
  var S = Symbol.for("react.element"), R = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), y = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), U = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), q = Symbol.iterator;
  function te(w) {
    return w === null || typeof w != "object" ? null : (w = q && w[q] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, Z = {};
  function G(w, M, he) {
    this.props = w, this.context = M, this.refs = Z, this.updater = he || L;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(w, M) {
    if (typeof w != "object" && typeof w != "function" && w != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, M, "setState");
  }, G.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function le() {
  }
  le.prototype = G.prototype;
  function re(w, M, he) {
    this.props = w, this.context = M, this.refs = Z, this.updater = he || L;
  }
  var Ee = re.prototype = new le();
  Ee.constructor = re, fe(Ee, G.prototype), Ee.isPureReactComponent = !0;
  var ve = Array.isArray, Re = Object.prototype.hasOwnProperty, Be = { current: null }, Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ut(w, M, he) {
    var ge, Ce = {}, Ve = null, ne = null;
    if (M != null) for (ge in M.ref !== void 0 && (ne = M.ref), M.key !== void 0 && (Ve = "" + M.key), M) Re.call(M, ge) && !Le.hasOwnProperty(ge) && (Ce[ge] = M[ge]);
    var Se = arguments.length - 2;
    if (Se === 1) Ce.children = he;
    else if (1 < Se) {
      for (var Ie = Array(Se), pt = 0; pt < Se; pt++) Ie[pt] = arguments[pt + 2];
      Ce.children = Ie;
    }
    if (w && w.defaultProps) for (ge in Se = w.defaultProps, Se) Ce[ge] === void 0 && (Ce[ge] = Se[ge]);
    return { $$typeof: S, type: w, key: Ve, ref: ne, props: Ce, _owner: Be.current };
  }
  function dt(w, M) {
    return { $$typeof: S, type: w.type, key: M, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function it(w) {
    return typeof w == "object" && w !== null && w.$$typeof === S;
  }
  function wt(w) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(he) {
      return M[he];
    });
  }
  var ct = /\/+/g;
  function Ae(w, M) {
    return typeof w == "object" && w !== null && w.key != null ? wt("" + w.key) : M.toString(36);
  }
  function Nt(w, M, he, ge, Ce) {
    var Ve = typeof w;
    (Ve === "undefined" || Ve === "boolean") && (w = null);
    var ne = !1;
    if (w === null) ne = !0;
    else switch (Ve) {
      case "string":
      case "number":
        ne = !0;
        break;
      case "object":
        switch (w.$$typeof) {
          case S:
          case R:
            ne = !0;
        }
    }
    if (ne) return ne = w, Ce = Ce(ne), w = ge === "" ? "." + Ae(ne, 0) : ge, ve(Ce) ? (he = "", w != null && (he = w.replace(ct, "$&/") + "/"), Nt(Ce, M, he, "", function(pt) {
      return pt;
    })) : Ce != null && (it(Ce) && (Ce = dt(Ce, he + (!Ce.key || ne && ne.key === Ce.key ? "" : ("" + Ce.key).replace(ct, "$&/") + "/") + w)), M.push(Ce)), 1;
    if (ne = 0, ge = ge === "" ? "." : ge + ":", ve(w)) for (var Se = 0; Se < w.length; Se++) {
      Ve = w[Se];
      var Ie = ge + Ae(Ve, Se);
      ne += Nt(Ve, M, he, Ie, Ce);
    }
    else if (Ie = te(w), typeof Ie == "function") for (w = Ie.call(w), Se = 0; !(Ve = w.next()).done; ) Ve = Ve.value, Ie = ge + Ae(Ve, Se++), ne += Nt(Ve, M, he, Ie, Ce);
    else if (Ve === "object") throw M = String(w), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    return ne;
  }
  function _t(w, M, he) {
    if (w == null) return w;
    var ge = [], Ce = 0;
    return Nt(w, ge, "", "", function(Ve) {
      return M.call(he, Ve, Ce++);
    }), ge;
  }
  function kt(w) {
    if (w._status === -1) {
      var M = w._result;
      M = M(), M.then(function(he) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = he);
      }, function(he) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = he);
      }), w._status === -1 && (w._status = 0, w._result = M);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var je = { current: null }, me = { transition: null }, $e = { ReactCurrentDispatcher: je, ReactCurrentBatchConfig: me, ReactCurrentOwner: Be };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return bt.Children = { map: _t, forEach: function(w, M, he) {
    _t(w, function() {
      M.apply(this, arguments);
    }, he);
  }, count: function(w) {
    var M = 0;
    return _t(w, function() {
      M++;
    }), M;
  }, toArray: function(w) {
    return _t(w, function(M) {
      return M;
    }) || [];
  }, only: function(w) {
    if (!it(w)) throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, bt.Component = G, bt.Fragment = E, bt.Profiler = P, bt.PureComponent = re, bt.StrictMode = z, bt.Suspense = W, bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $e, bt.act = N, bt.cloneElement = function(w, M, he) {
    if (w == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var ge = fe({}, w.props), Ce = w.key, Ve = w.ref, ne = w._owner;
    if (M != null) {
      if (M.ref !== void 0 && (Ve = M.ref, ne = Be.current), M.key !== void 0 && (Ce = "" + M.key), w.type && w.type.defaultProps) var Se = w.type.defaultProps;
      for (Ie in M) Re.call(M, Ie) && !Le.hasOwnProperty(Ie) && (ge[Ie] = M[Ie] === void 0 && Se !== void 0 ? Se[Ie] : M[Ie]);
    }
    var Ie = arguments.length - 2;
    if (Ie === 1) ge.children = he;
    else if (1 < Ie) {
      Se = Array(Ie);
      for (var pt = 0; pt < Ie; pt++) Se[pt] = arguments[pt + 2];
      ge.children = Se;
    }
    return { $$typeof: S, type: w.type, key: Ce, ref: Ve, props: ge, _owner: ne };
  }, bt.createContext = function(w) {
    return w = { $$typeof: y, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: I, _context: w }, w.Consumer = w;
  }, bt.createElement = ut, bt.createFactory = function(w) {
    var M = ut.bind(null, w);
    return M.type = w, M;
  }, bt.createRef = function() {
    return { current: null };
  }, bt.forwardRef = function(w) {
    return { $$typeof: ee, render: w };
  }, bt.isValidElement = it, bt.lazy = function(w) {
    return { $$typeof: oe, _payload: { _status: -1, _result: w }, _init: kt };
  }, bt.memo = function(w, M) {
    return { $$typeof: U, type: w, compare: M === void 0 ? null : M };
  }, bt.startTransition = function(w) {
    var M = me.transition;
    me.transition = {};
    try {
      w();
    } finally {
      me.transition = M;
    }
  }, bt.unstable_act = N, bt.useCallback = function(w, M) {
    return je.current.useCallback(w, M);
  }, bt.useContext = function(w) {
    return je.current.useContext(w);
  }, bt.useDebugValue = function() {
  }, bt.useDeferredValue = function(w) {
    return je.current.useDeferredValue(w);
  }, bt.useEffect = function(w, M) {
    return je.current.useEffect(w, M);
  }, bt.useId = function() {
    return je.current.useId();
  }, bt.useImperativeHandle = function(w, M, he) {
    return je.current.useImperativeHandle(w, M, he);
  }, bt.useInsertionEffect = function(w, M) {
    return je.current.useInsertionEffect(w, M);
  }, bt.useLayoutEffect = function(w, M) {
    return je.current.useLayoutEffect(w, M);
  }, bt.useMemo = function(w, M) {
    return je.current.useMemo(w, M);
  }, bt.useReducer = function(w, M, he) {
    return je.current.useReducer(w, M, he);
  }, bt.useRef = function(w) {
    return je.current.useRef(w);
  }, bt.useState = function(w) {
    return je.current.useState(w);
  }, bt.useSyncExternalStore = function(w, M, he) {
    return je.current.useSyncExternalStore(w, M, he);
  }, bt.useTransition = function() {
    return je.current.useTransition();
  }, bt.version = "18.3.1", bt;
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
      var E = "18.3.1", z = Symbol.for("react.element"), P = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), U = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), G = Symbol.iterator, le = "@@iterator";
      function re(h) {
        if (h === null || typeof h != "object")
          return null;
        var x = G && h[G] || h[le];
        return typeof x == "function" ? x : null;
      }
      var Ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ve = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Le = {}, ut = null;
      function dt(h) {
        ut = h;
      }
      Le.setExtraStackFrame = function(h) {
        ut = h;
      }, Le.getCurrentStack = null, Le.getStackAddendum = function() {
        var h = "";
        ut && (h += ut);
        var x = Le.getCurrentStack;
        return x && (h += x() || ""), h;
      };
      var it = !1, wt = !1, ct = !1, Ae = !1, Nt = !1, _t = {
        ReactCurrentDispatcher: Ee,
        ReactCurrentBatchConfig: ve,
        ReactCurrentOwner: Be
      };
      _t.ReactDebugCurrentFrame = Le, _t.ReactCurrentActQueue = Re;
      function kt(h) {
        {
          for (var x = arguments.length, B = new Array(x > 1 ? x - 1 : 0), Q = 1; Q < x; Q++)
            B[Q - 1] = arguments[Q];
          me("warn", h, B);
        }
      }
      function je(h) {
        {
          for (var x = arguments.length, B = new Array(x > 1 ? x - 1 : 0), Q = 1; Q < x; Q++)
            B[Q - 1] = arguments[Q];
          me("error", h, B);
        }
      }
      function me(h, x, B) {
        {
          var Q = _t.ReactDebugCurrentFrame, ye = Q.getStackAddendum();
          ye !== "" && (x += "%s", B = B.concat([ye]));
          var qe = B.map(function(xe) {
            return String(xe);
          });
          qe.unshift("Warning: " + x), Function.prototype.apply.call(console[h], console, qe);
        }
      }
      var $e = {};
      function N(h, x) {
        {
          var B = h.constructor, Q = B && (B.displayName || B.name) || "ReactClass", ye = Q + "." + x;
          if ($e[ye])
            return;
          je("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", x, Q), $e[ye] = !0;
        }
      }
      var w = {
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
        enqueueForceUpdate: function(h, x, B) {
          N(h, "forceUpdate");
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
        enqueueReplaceState: function(h, x, B, Q) {
          N(h, "replaceState");
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
        enqueueSetState: function(h, x, B, Q) {
          N(h, "setState");
        }
      }, M = Object.assign, he = {};
      Object.freeze(he);
      function ge(h, x, B) {
        this.props = h, this.context = x, this.refs = he, this.updater = B || w;
      }
      ge.prototype.isReactComponent = {}, ge.prototype.setState = function(h, x) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, x, "setState");
      }, ge.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Ce = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ve = function(h, x) {
          Object.defineProperty(ge.prototype, h, {
            get: function() {
              kt("%s(...) is deprecated in plain JavaScript React classes. %s", x[0], x[1]);
            }
          });
        };
        for (var ne in Ce)
          Ce.hasOwnProperty(ne) && Ve(ne, Ce[ne]);
      }
      function Se() {
      }
      Se.prototype = ge.prototype;
      function Ie(h, x, B) {
        this.props = h, this.context = x, this.refs = he, this.updater = B || w;
      }
      var pt = Ie.prototype = new Se();
      pt.constructor = Ie, M(pt, ge.prototype), pt.isPureReactComponent = !0;
      function nn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Er = Array.isArray;
      function hn(h) {
        return Er(h);
      }
      function In(h) {
        {
          var x = typeof Symbol == "function" && Symbol.toStringTag, B = x && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return B;
        }
      }
      function _n(h) {
        try {
          return Qt(h), !1;
        } catch {
          return !0;
        }
      }
      function Qt(h) {
        return "" + h;
      }
      function wn(h) {
        if (_n(h))
          return je("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", In(h)), Qt(h);
      }
      function _a(h, x, B) {
        var Q = h.displayName;
        if (Q)
          return Q;
        var ye = x.displayName || x.name || "";
        return ye !== "" ? B + "(" + ye + ")" : B;
      }
      function sa(h) {
        return h.displayName || "Context";
      }
      function Zn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && je("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case I:
            return "Fragment";
          case P:
            return "Portal";
          case ee:
            return "Profiler";
          case y:
            return "StrictMode";
          case q:
            return "Suspense";
          case te:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case U:
              var x = h;
              return sa(x) + ".Consumer";
            case W:
              var B = h;
              return sa(B._context) + ".Provider";
            case oe:
              return _a(h, h.render, "ForwardRef");
            case L:
              var Q = h.displayName || null;
              return Q !== null ? Q : Zn(h.type) || "Memo";
            case fe: {
              var ye = h, qe = ye._payload, xe = ye._init;
              try {
                return Zn(xe(qe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var bn = Object.prototype.hasOwnProperty, Wn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Cr, Ga, An;
      An = {};
      function Rr(h) {
        if (bn.call(h, "ref")) {
          var x = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (x && x.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function ca(h) {
        if (bn.call(h, "key")) {
          var x = Object.getOwnPropertyDescriptor(h, "key").get;
          if (x && x.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Xa(h, x) {
        var B = function() {
          Cr || (Cr = !0, je("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        B.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: B,
          configurable: !0
        });
      }
      function pi(h, x) {
        var B = function() {
          Ga || (Ga = !0, je("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        B.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: B,
          configurable: !0
        });
      }
      function Te(h) {
        if (typeof h.ref == "string" && Be.current && h.__self && Be.current.stateNode !== h.__self) {
          var x = Zn(Be.current.type);
          An[x] || (je('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x, h.ref), An[x] = !0);
        }
      }
      var We = function(h, x, B, Q, ye, qe, xe) {
        var et = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: z,
          // Built-in properties that belong on the element
          type: h,
          key: x,
          ref: B,
          props: xe,
          // Record the component responsible for creating this element.
          _owner: qe
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
          value: Q
        }), Object.defineProperty(et, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ye
        }), Object.freeze && (Object.freeze(et.props), Object.freeze(et)), et;
      };
      function gt(h, x, B) {
        var Q, ye = {}, qe = null, xe = null, et = null, Tt = null;
        if (x != null) {
          Rr(x) && (xe = x.ref, Te(x)), ca(x) && (wn(x.key), qe = "" + x.key), et = x.__self === void 0 ? null : x.__self, Tt = x.__source === void 0 ? null : x.__source;
          for (Q in x)
            bn.call(x, Q) && !Wn.hasOwnProperty(Q) && (ye[Q] = x[Q]);
        }
        var At = arguments.length - 2;
        if (At === 1)
          ye.children = B;
        else if (At > 1) {
          for (var sn = Array(At), qt = 0; qt < At; qt++)
            sn[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(sn), ye.children = sn;
        }
        if (h && h.defaultProps) {
          var St = h.defaultProps;
          for (Q in St)
            ye[Q] === void 0 && (ye[Q] = St[Q]);
        }
        if (qe || xe) {
          var Zt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          qe && Xa(ye, Zt), xe && pi(ye, Zt);
        }
        return We(h, qe, xe, et, Tt, Be.current, ye);
      }
      function Yt(h, x) {
        var B = We(h.type, x, h.ref, h._self, h._source, h._owner, h.props);
        return B;
      }
      function ln(h, x, B) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var Q, ye = M({}, h.props), qe = h.key, xe = h.ref, et = h._self, Tt = h._source, At = h._owner;
        if (x != null) {
          Rr(x) && (xe = x.ref, At = Be.current), ca(x) && (wn(x.key), qe = "" + x.key);
          var sn;
          h.type && h.type.defaultProps && (sn = h.type.defaultProps);
          for (Q in x)
            bn.call(x, Q) && !Wn.hasOwnProperty(Q) && (x[Q] === void 0 && sn !== void 0 ? ye[Q] = sn[Q] : ye[Q] = x[Q]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          ye.children = B;
        else if (qt > 1) {
          for (var St = Array(qt), Zt = 0; Zt < qt; Zt++)
            St[Zt] = arguments[Zt + 2];
          ye.children = St;
        }
        return We(h.type, qe, xe, et, Tt, At, ye);
      }
      function gn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === z;
      }
      var fn = ".", Jn = ":";
      function un(h) {
        var x = /[=:]/g, B = {
          "=": "=0",
          ":": "=2"
        }, Q = h.replace(x, function(ye) {
          return B[ye];
        });
        return "$" + Q;
      }
      var Gt = !1, Xt = /\/+/g;
      function fa(h) {
        return h.replace(Xt, "$&/");
      }
      function Tr(h, x) {
        return typeof h == "object" && h !== null && h.key != null ? (wn(h.key), un("" + h.key)) : x.toString(36);
      }
      function ba(h, x, B, Q, ye) {
        var qe = typeof h;
        (qe === "undefined" || qe === "boolean") && (h = null);
        var xe = !1;
        if (h === null)
          xe = !0;
        else
          switch (qe) {
            case "string":
            case "number":
              xe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case z:
                case P:
                  xe = !0;
              }
          }
        if (xe) {
          var et = h, Tt = ye(et), At = Q === "" ? fn + Tr(et, 0) : Q;
          if (hn(Tt)) {
            var sn = "";
            At != null && (sn = fa(At) + "/"), ba(Tt, x, sn, "", function(td) {
              return td;
            });
          } else Tt != null && (gn(Tt) && (Tt.key && (!et || et.key !== Tt.key) && wn(Tt.key), Tt = Yt(
            Tt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Tt.key && (!et || et.key !== Tt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              fa("" + Tt.key) + "/"
            ) : "") + At
          )), x.push(Tt));
          return 1;
        }
        var qt, St, Zt = 0, Sn = Q === "" ? fn : Q + Jn;
        if (hn(h))
          for (var xl = 0; xl < h.length; xl++)
            qt = h[xl], St = Sn + Tr(qt, xl), Zt += ba(qt, x, B, St, ye);
        else {
          var Jo = re(h);
          if (typeof Jo == "function") {
            var Yi = h;
            Jo === Yi.entries && (Gt || kt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gt = !0);
            for (var es = Jo.call(Yi), fu, ed = 0; !(fu = es.next()).done; )
              qt = fu.value, St = Sn + Tr(qt, ed++), Zt += ba(qt, x, B, St, ye);
          } else if (qe === "object") {
            var pc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (pc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : pc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function Vi(h, x, B) {
        if (h == null)
          return h;
        var Q = [], ye = 0;
        return ba(h, Q, "", "", function(qe) {
          return x.call(B, qe, ye++);
        }), Q;
      }
      function nu(h) {
        var x = 0;
        return Vi(h, function() {
          x++;
        }), x;
      }
      function ru(h, x, B) {
        Vi(h, function() {
          x.apply(this, arguments);
        }, B);
      }
      function ml(h) {
        return Vi(h, function(x) {
          return x;
        }) || [];
      }
      function yl(h) {
        if (!gn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function au(h) {
        var x = {
          $$typeof: U,
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
          $$typeof: W,
          _context: x
        };
        var B = !1, Q = !1, ye = !1;
        {
          var qe = {
            $$typeof: U,
            _context: x
          };
          Object.defineProperties(qe, {
            Provider: {
              get: function() {
                return Q || (Q = !0, je("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), x.Provider;
              },
              set: function(xe) {
                x.Provider = xe;
              }
            },
            _currentValue: {
              get: function() {
                return x._currentValue;
              },
              set: function(xe) {
                x._currentValue = xe;
              }
            },
            _currentValue2: {
              get: function() {
                return x._currentValue2;
              },
              set: function(xe) {
                x._currentValue2 = xe;
              }
            },
            _threadCount: {
              get: function() {
                return x._threadCount;
              },
              set: function(xe) {
                x._threadCount = xe;
              }
            },
            Consumer: {
              get: function() {
                return B || (B = !0, je("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), x.Consumer;
              }
            },
            displayName: {
              get: function() {
                return x.displayName;
              },
              set: function(xe) {
                ye || (kt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", xe), ye = !0);
              }
            }
          }), x.Consumer = qe;
        }
        return x._currentRenderer = null, x._currentRenderer2 = null, x;
      }
      var kr = -1, Dr = 0, ir = 1, vi = 2;
      function Ka(h) {
        if (h._status === kr) {
          var x = h._result, B = x();
          if (B.then(function(qe) {
            if (h._status === Dr || h._status === kr) {
              var xe = h;
              xe._status = ir, xe._result = qe;
            }
          }, function(qe) {
            if (h._status === Dr || h._status === kr) {
              var xe = h;
              xe._status = vi, xe._result = qe;
            }
          }), h._status === kr) {
            var Q = h;
            Q._status = Dr, Q._result = B;
          }
        }
        if (h._status === ir) {
          var ye = h._result;
          return ye === void 0 && je(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ye), "default" in ye || je(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ye), ye.default;
        } else
          throw h._result;
      }
      function hi(h) {
        var x = {
          // We use these fields to store the result.
          _status: kr,
          _result: h
        }, B = {
          $$typeof: fe,
          _payload: x,
          _init: Ka
        };
        {
          var Q, ye;
          Object.defineProperties(B, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Q;
              },
              set: function(qe) {
                je("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Q = qe, Object.defineProperty(B, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ye;
              },
              set: function(qe) {
                je("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ye = qe, Object.defineProperty(B, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return B;
      }
      function mi(h) {
        h != null && h.$$typeof === L ? je("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? je("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && je("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && je("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var x = {
          $$typeof: oe,
          render: h
        };
        {
          var B;
          Object.defineProperty(x, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(Q) {
              B = Q, !h.name && !h.displayName && (h.displayName = Q);
            }
          });
        }
        return x;
      }
      var _;
      _ = Symbol.for("react.module.reference");
      function ae(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === I || h === ee || Nt || h === y || h === q || h === te || Ae || h === Z || it || wt || ct || typeof h == "object" && h !== null && (h.$$typeof === fe || h.$$typeof === L || h.$$typeof === W || h.$$typeof === U || h.$$typeof === oe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === _ || h.getModuleId !== void 0));
      }
      function _e(h, x) {
        ae(h) || je("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var B = {
          $$typeof: L,
          type: h,
          compare: x === void 0 ? null : x
        };
        {
          var Q;
          Object.defineProperty(B, "displayName", {
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
        return B;
      }
      function Ue() {
        var h = Ee.current;
        return h === null && je(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function vt(h) {
        var x = Ue();
        if (h._context !== void 0) {
          var B = h._context;
          B.Consumer === h ? je("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === h && je("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return x.useContext(h);
      }
      function ot(h) {
        var x = Ue();
        return x.useState(h);
      }
      function Rt(h, x, B) {
        var Q = Ue();
        return Q.useReducer(h, x, B);
      }
      function Et(h) {
        var x = Ue();
        return x.useRef(h);
      }
      function kn(h, x) {
        var B = Ue();
        return B.useEffect(h, x);
      }
      function on(h, x) {
        var B = Ue();
        return B.useInsertionEffect(h, x);
      }
      function dn(h, x) {
        var B = Ue();
        return B.useLayoutEffect(h, x);
      }
      function lr(h, x) {
        var B = Ue();
        return B.useCallback(h, x);
      }
      function qa(h, x) {
        var B = Ue();
        return B.useMemo(h, x);
      }
      function Za(h, x, B) {
        var Q = Ue();
        return Q.useImperativeHandle(h, x, B);
      }
      function ht(h, x) {
        {
          var B = Ue();
          return B.useDebugValue(h, x);
        }
      }
      function yt() {
        var h = Ue();
        return h.useTransition();
      }
      function Ja(h) {
        var x = Ue();
        return x.useDeferredValue(h);
      }
      function iu() {
        var h = Ue();
        return h.useId();
      }
      function lu(h, x, B) {
        var Q = Ue();
        return Q.useSyncExternalStore(h, x, B);
      }
      var gl = 0, Ku, Sl, Wr, Xo, Or, fc, dc;
      function qu() {
      }
      qu.__reactDisabledLog = !0;
      function El() {
        {
          if (gl === 0) {
            Ku = console.log, Sl = console.info, Wr = console.warn, Xo = console.error, Or = console.group, fc = console.groupCollapsed, dc = console.groupEnd;
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
              log: M({}, h, {
                value: Ku
              }),
              info: M({}, h, {
                value: Sl
              }),
              warn: M({}, h, {
                value: Wr
              }),
              error: M({}, h, {
                value: Xo
              }),
              group: M({}, h, {
                value: Or
              }),
              groupCollapsed: M({}, h, {
                value: fc
              }),
              groupEnd: M({}, h, {
                value: dc
              })
            });
          }
          gl < 0 && je("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ei = _t.ReactCurrentDispatcher, ti;
      function Zu(h, x, B) {
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
      function eo(h, x) {
        if (!h || uu)
          return "";
        {
          var B = Cl.get(h);
          if (B !== void 0)
            return B;
        }
        var Q;
        uu = !0;
        var ye = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var qe;
        qe = ei.current, ei.current = null, El();
        try {
          if (x) {
            var xe = function() {
              throw Error();
            };
            if (Object.defineProperty(xe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(xe, []);
              } catch (Sn) {
                Q = Sn;
              }
              Reflect.construct(h, [], xe);
            } else {
              try {
                xe.call();
              } catch (Sn) {
                Q = Sn;
              }
              h.call(xe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Sn) {
              Q = Sn;
            }
            h();
          }
        } catch (Sn) {
          if (Sn && Q && typeof Sn.stack == "string") {
            for (var et = Sn.stack.split(`
`), Tt = Q.stack.split(`
`), At = et.length - 1, sn = Tt.length - 1; At >= 1 && sn >= 0 && et[At] !== Tt[sn]; )
              sn--;
            for (; At >= 1 && sn >= 0; At--, sn--)
              if (et[At] !== Tt[sn]) {
                if (At !== 1 || sn !== 1)
                  do
                    if (At--, sn--, sn < 0 || et[At] !== Tt[sn]) {
                      var qt = `
` + et[At].replace(" at new ", " at ");
                      return h.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", h.displayName)), typeof h == "function" && Cl.set(h, qt), qt;
                    }
                  while (At >= 1 && sn >= 0);
                break;
              }
          }
        } finally {
          uu = !1, ei.current = qe, da(), Error.prepareStackTrace = ye;
        }
        var St = h ? h.displayName || h.name : "", Zt = St ? Zu(St) : "";
        return typeof h == "function" && Cl.set(h, Zt), Zt;
      }
      function Bi(h, x, B) {
        return eo(h, !1);
      }
      function Zf(h) {
        var x = h.prototype;
        return !!(x && x.isReactComponent);
      }
      function $i(h, x, B) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return eo(h, Zf(h));
        if (typeof h == "string")
          return Zu(h);
        switch (h) {
          case q:
            return Zu("Suspense");
          case te:
            return Zu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case oe:
              return Bi(h.render);
            case L:
              return $i(h.type, x, B);
            case fe: {
              var Q = h, ye = Q._payload, qe = Q._init;
              try {
                return $i(qe(ye), x, B);
              } catch {
              }
            }
          }
        return "";
      }
      var Ft = {}, to = _t.ReactDebugCurrentFrame;
      function zt(h) {
        if (h) {
          var x = h._owner, B = $i(h.type, h._source, x ? x.type : null);
          to.setExtraStackFrame(B);
        } else
          to.setExtraStackFrame(null);
      }
      function Ko(h, x, B, Q, ye) {
        {
          var qe = Function.call.bind(bn);
          for (var xe in h)
            if (qe(h, xe)) {
              var et = void 0;
              try {
                if (typeof h[xe] != "function") {
                  var Tt = Error((Q || "React class") + ": " + B + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Tt.name = "Invariant Violation", Tt;
                }
                et = h[xe](x, xe, Q, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (At) {
                et = At;
              }
              et && !(et instanceof Error) && (zt(ye), je("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", B, xe, typeof et), zt(null)), et instanceof Error && !(et.message in Ft) && (Ft[et.message] = !0, zt(ye), je("Failed %s type: %s", B, et.message), zt(null));
            }
        }
      }
      function yi(h) {
        if (h) {
          var x = h._owner, B = $i(h.type, h._source, x ? x.type : null);
          dt(B);
        } else
          dt(null);
      }
      var lt;
      lt = !1;
      function no() {
        if (Be.current) {
          var h = Zn(Be.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function ur(h) {
        if (h !== void 0) {
          var x = h.fileName.replace(/^.*[\\\/]/, ""), B = h.lineNumber;
          return `

Check your code at ` + x + ":" + B + ".";
        }
        return "";
      }
      function gi(h) {
        return h != null ? ur(h.__source) : "";
      }
      var Mr = {};
      function Si(h) {
        var x = no();
        if (!x) {
          var B = typeof h == "string" ? h : h.displayName || h.name;
          B && (x = `

Check the top-level render call using <` + B + ">.");
        }
        return x;
      }
      function pn(h, x) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var B = Si(x);
          if (!Mr[B]) {
            Mr[B] = !0;
            var Q = "";
            h && h._owner && h._owner !== Be.current && (Q = " It was passed a child from " + Zn(h._owner.type) + "."), yi(h), je('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, Q), yi(null);
          }
        }
      }
      function Kt(h, x) {
        if (typeof h == "object") {
          if (hn(h))
            for (var B = 0; B < h.length; B++) {
              var Q = h[B];
              gn(Q) && pn(Q, x);
            }
          else if (gn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ye = re(h);
            if (typeof ye == "function" && ye !== h.entries)
              for (var qe = ye.call(h), xe; !(xe = qe.next()).done; )
                gn(xe.value) && pn(xe.value, x);
          }
        }
      }
      function Rl(h) {
        {
          var x = h.type;
          if (x == null || typeof x == "string")
            return;
          var B;
          if (typeof x == "function")
            B = x.propTypes;
          else if (typeof x == "object" && (x.$$typeof === oe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          x.$$typeof === L))
            B = x.propTypes;
          else
            return;
          if (B) {
            var Q = Zn(x);
            Ko(B, h.props, "prop", Q, h);
          } else if (x.PropTypes !== void 0 && !lt) {
            lt = !0;
            var ye = Zn(x);
            je("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ye || "Unknown");
          }
          typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && je("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Qn(h) {
        {
          for (var x = Object.keys(h.props), B = 0; B < x.length; B++) {
            var Q = x[B];
            if (Q !== "children" && Q !== "key") {
              yi(h), je("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), yi(null);
              break;
            }
          }
          h.ref !== null && (yi(h), je("Invalid attribute `ref` supplied to `React.Fragment`."), yi(null));
        }
      }
      function Lr(h, x, B) {
        var Q = ae(h);
        if (!Q) {
          var ye = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = gi(x);
          qe ? ye += qe : ye += no();
          var xe;
          h === null ? xe = "null" : hn(h) ? xe = "array" : h !== void 0 && h.$$typeof === z ? (xe = "<" + (Zn(h.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof h, je("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, ye);
        }
        var et = gt.apply(this, arguments);
        if (et == null)
          return et;
        if (Q)
          for (var Tt = 2; Tt < arguments.length; Tt++)
            Kt(arguments[Tt], h);
        return h === I ? Qn(et) : Rl(et), et;
      }
      var ka = !1;
      function ou(h) {
        var x = Lr.bind(null, h);
        return x.type = h, ka || (ka = !0, kt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(x, "type", {
          enumerable: !1,
          get: function() {
            return kt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), x;
      }
      function qo(h, x, B) {
        for (var Q = ln.apply(this, arguments), ye = 2; ye < arguments.length; ye++)
          Kt(arguments[ye], Q.type);
        return Rl(Q), Q;
      }
      function Zo(h, x) {
        var B = ve.transition;
        ve.transition = {};
        var Q = ve.transition;
        ve.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (ve.transition = B, B === null && Q._updatedFibers) {
            var ye = Q._updatedFibers.size;
            ye > 10 && kt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Q._updatedFibers.clear();
          }
        }
      }
      var Tl = !1, su = null;
      function Jf(h) {
        if (su === null)
          try {
            var x = ("require" + Math.random()).slice(0, 7), B = S && S[x];
            su = B.call(S, "timers").setImmediate;
          } catch {
            su = function(ye) {
              Tl === !1 && (Tl = !0, typeof MessageChannel > "u" && je("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var qe = new MessageChannel();
              qe.port1.onmessage = ye, qe.port2.postMessage(void 0);
            };
          }
        return su(h);
      }
      var Da = 0, ni = !1;
      function Ei(h) {
        {
          var x = Da;
          Da++, Re.current === null && (Re.current = []);
          var B = Re.isBatchingLegacy, Q;
          try {
            if (Re.isBatchingLegacy = !0, Q = h(), !B && Re.didScheduleLegacyUpdate) {
              var ye = Re.current;
              ye !== null && (Re.didScheduleLegacyUpdate = !1, wl(ye));
            }
          } catch (St) {
            throw Oa(x), St;
          } finally {
            Re.isBatchingLegacy = B;
          }
          if (Q !== null && typeof Q == "object" && typeof Q.then == "function") {
            var qe = Q, xe = !1, et = {
              then: function(St, Zt) {
                xe = !0, qe.then(function(Sn) {
                  Oa(x), Da === 0 ? ro(Sn, St, Zt) : St(Sn);
                }, function(Sn) {
                  Oa(x), Zt(Sn);
                });
              }
            };
            return !ni && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              xe || (ni = !0, je("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), et;
          } else {
            var Tt = Q;
            if (Oa(x), Da === 0) {
              var At = Re.current;
              At !== null && (wl(At), Re.current = null);
              var sn = {
                then: function(St, Zt) {
                  Re.current === null ? (Re.current = [], ro(Tt, St, Zt)) : St(Tt);
                }
              };
              return sn;
            } else {
              var qt = {
                then: function(St, Zt) {
                  St(Tt);
                }
              };
              return qt;
            }
          }
        }
      }
      function Oa(h) {
        h !== Da - 1 && je("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Da = h;
      }
      function ro(h, x, B) {
        {
          var Q = Re.current;
          if (Q !== null)
            try {
              wl(Q), Jf(function() {
                Q.length === 0 ? (Re.current = null, x(h)) : ro(h, x, B);
              });
            } catch (ye) {
              B(ye);
            }
          else
            x(h);
        }
      }
      var ao = !1;
      function wl(h) {
        if (!ao) {
          ao = !0;
          var x = 0;
          try {
            for (; x < h.length; x++) {
              var B = h[x];
              do
                B = B(!0);
              while (B !== null);
            }
            h.length = 0;
          } catch (Q) {
            throw h = h.slice(x + 1), Q;
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
      R.Children = ri, R.Component = ge, R.Fragment = I, R.Profiler = ee, R.PureComponent = Ie, R.StrictMode = y, R.Suspense = q, R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _t, R.act = Ei, R.cloneElement = io, R.createContext = au, R.createElement = cu, R.createFactory = lo, R.createRef = nn, R.forwardRef = mi, R.isValidElement = gn, R.lazy = hi, R.memo = _e, R.startTransition = Zo, R.unstable_act = Ei, R.useCallback = lr, R.useContext = vt, R.useDebugValue = ht, R.useDeferredValue = Ja, R.useEffect = kn, R.useId = iu, R.useImperativeHandle = Za, R.useInsertionEffect = on, R.useLayoutEffect = dn, R.useMemo = qa, R.useReducer = Rt, R.useRef = Et, R.useState = ot, R.useSyncExternalStore = lu, R.useTransition = yt, R.version = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(lv, lv.exports)), lv.exports;
}
process.env.NODE_ENV === "production" ? _0.exports = wk() : _0.exports = xk();
var an = _0.exports;
const _k = /* @__PURE__ */ Tk(an);
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
  var S = an, R = Symbol.for("react.element"), E = Symbol.for("react.fragment"), z = Object.prototype.hasOwnProperty, P = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, I = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(ee, W, U) {
    var oe, q = {}, te = null, L = null;
    U !== void 0 && (te = "" + U), W.key !== void 0 && (te = "" + W.key), W.ref !== void 0 && (L = W.ref);
    for (oe in W) z.call(W, oe) && !I.hasOwnProperty(oe) && (q[oe] = W[oe]);
    if (ee && ee.defaultProps) for (oe in W = ee.defaultProps, W) q[oe] === void 0 && (q[oe] = W[oe]);
    return { $$typeof: R, type: ee, key: te, ref: L, props: q, _owner: P.current };
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
    var S = an, R = Symbol.for("react.element"), E = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), ee = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), fe = Symbol.iterator, Z = "@@iterator";
    function G(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var ae = fe && _[fe] || _[Z];
      return typeof ae == "function" ? ae : null;
    }
    var le = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function re(_) {
      {
        for (var ae = arguments.length, _e = new Array(ae > 1 ? ae - 1 : 0), Ue = 1; Ue < ae; Ue++)
          _e[Ue - 1] = arguments[Ue];
        Ee("error", _, _e);
      }
    }
    function Ee(_, ae, _e) {
      {
        var Ue = le.ReactDebugCurrentFrame, vt = Ue.getStackAddendum();
        vt !== "" && (ae += "%s", _e = _e.concat([vt]));
        var ot = _e.map(function(Rt) {
          return String(Rt);
        });
        ot.unshift("Warning: " + ae), Function.prototype.apply.call(console[_], console, ot);
      }
    }
    var ve = !1, Re = !1, Be = !1, Le = !1, ut = !1, dt;
    dt = Symbol.for("react.module.reference");
    function it(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === z || _ === I || ut || _ === P || _ === U || _ === oe || Le || _ === L || ve || Re || Be || typeof _ == "object" && _ !== null && (_.$$typeof === te || _.$$typeof === q || _.$$typeof === y || _.$$typeof === ee || _.$$typeof === W || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === dt || _.getModuleId !== void 0));
    }
    function wt(_, ae, _e) {
      var Ue = _.displayName;
      if (Ue)
        return Ue;
      var vt = ae.displayName || ae.name || "";
      return vt !== "" ? _e + "(" + vt + ")" : _e;
    }
    function ct(_) {
      return _.displayName || "Context";
    }
    function Ae(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && re("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case z:
          return "Fragment";
        case E:
          return "Portal";
        case I:
          return "Profiler";
        case P:
          return "StrictMode";
        case U:
          return "Suspense";
        case oe:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case ee:
            var ae = _;
            return ct(ae) + ".Consumer";
          case y:
            var _e = _;
            return ct(_e._context) + ".Provider";
          case W:
            return wt(_, _.render, "ForwardRef");
          case q:
            var Ue = _.displayName || null;
            return Ue !== null ? Ue : Ae(_.type) || "Memo";
          case te: {
            var vt = _, ot = vt._payload, Rt = vt._init;
            try {
              return Ae(Rt(ot));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Nt = Object.assign, _t = 0, kt, je, me, $e, N, w, M;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function ge() {
      {
        if (_t === 0) {
          kt = console.log, je = console.info, me = console.warn, $e = console.error, N = console.group, w = console.groupCollapsed, M = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        _t++;
      }
    }
    function Ce() {
      {
        if (_t--, _t === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Nt({}, _, {
              value: kt
            }),
            info: Nt({}, _, {
              value: je
            }),
            warn: Nt({}, _, {
              value: me
            }),
            error: Nt({}, _, {
              value: $e
            }),
            group: Nt({}, _, {
              value: N
            }),
            groupCollapsed: Nt({}, _, {
              value: w
            }),
            groupEnd: Nt({}, _, {
              value: M
            })
          });
        }
        _t < 0 && re("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ve = le.ReactCurrentDispatcher, ne;
    function Se(_, ae, _e) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (vt) {
            var Ue = vt.stack.trim().match(/\n( *(at )?)/);
            ne = Ue && Ue[1] || "";
          }
        return `
` + ne + _;
      }
    }
    var Ie = !1, pt;
    {
      var nn = typeof WeakMap == "function" ? WeakMap : Map;
      pt = new nn();
    }
    function Er(_, ae) {
      if (!_ || Ie)
        return "";
      {
        var _e = pt.get(_);
        if (_e !== void 0)
          return _e;
      }
      var Ue;
      Ie = !0;
      var vt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ot;
      ot = Ve.current, Ve.current = null, ge();
      try {
        if (ae) {
          var Rt = function() {
            throw Error();
          };
          if (Object.defineProperty(Rt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Rt, []);
            } catch (ht) {
              Ue = ht;
            }
            Reflect.construct(_, [], Rt);
          } else {
            try {
              Rt.call();
            } catch (ht) {
              Ue = ht;
            }
            _.call(Rt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ht) {
            Ue = ht;
          }
          _();
        }
      } catch (ht) {
        if (ht && Ue && typeof ht.stack == "string") {
          for (var Et = ht.stack.split(`
`), kn = Ue.stack.split(`
`), on = Et.length - 1, dn = kn.length - 1; on >= 1 && dn >= 0 && Et[on] !== kn[dn]; )
            dn--;
          for (; on >= 1 && dn >= 0; on--, dn--)
            if (Et[on] !== kn[dn]) {
              if (on !== 1 || dn !== 1)
                do
                  if (on--, dn--, dn < 0 || Et[on] !== kn[dn]) {
                    var lr = `
` + Et[on].replace(" at new ", " at ");
                    return _.displayName && lr.includes("<anonymous>") && (lr = lr.replace("<anonymous>", _.displayName)), typeof _ == "function" && pt.set(_, lr), lr;
                  }
                while (on >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, Ve.current = ot, Ce(), Error.prepareStackTrace = vt;
      }
      var qa = _ ? _.displayName || _.name : "", Za = qa ? Se(qa) : "";
      return typeof _ == "function" && pt.set(_, Za), Za;
    }
    function hn(_, ae, _e) {
      return Er(_, !1);
    }
    function In(_) {
      var ae = _.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function _n(_, ae, _e) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return Er(_, In(_));
      if (typeof _ == "string")
        return Se(_);
      switch (_) {
        case U:
          return Se("Suspense");
        case oe:
          return Se("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case W:
            return hn(_.render);
          case q:
            return _n(_.type, ae, _e);
          case te: {
            var Ue = _, vt = Ue._payload, ot = Ue._init;
            try {
              return _n(ot(vt), ae, _e);
            } catch {
            }
          }
        }
      return "";
    }
    var Qt = Object.prototype.hasOwnProperty, wn = {}, _a = le.ReactDebugCurrentFrame;
    function sa(_) {
      if (_) {
        var ae = _._owner, _e = _n(_.type, _._source, ae ? ae.type : null);
        _a.setExtraStackFrame(_e);
      } else
        _a.setExtraStackFrame(null);
    }
    function Zn(_, ae, _e, Ue, vt) {
      {
        var ot = Function.call.bind(Qt);
        for (var Rt in _)
          if (ot(_, Rt)) {
            var Et = void 0;
            try {
              if (typeof _[Rt] != "function") {
                var kn = Error((Ue || "React class") + ": " + _e + " type `" + Rt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[Rt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kn.name = "Invariant Violation", kn;
              }
              Et = _[Rt](ae, Rt, Ue, _e, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (on) {
              Et = on;
            }
            Et && !(Et instanceof Error) && (sa(vt), re("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ue || "React class", _e, Rt, typeof Et), sa(null)), Et instanceof Error && !(Et.message in wn) && (wn[Et.message] = !0, sa(vt), re("Failed %s type: %s", _e, Et.message), sa(null));
          }
      }
    }
    var bn = Array.isArray;
    function Wn(_) {
      return bn(_);
    }
    function Cr(_) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, _e = ae && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return _e;
      }
    }
    function Ga(_) {
      try {
        return An(_), !1;
      } catch {
        return !0;
      }
    }
    function An(_) {
      return "" + _;
    }
    function Rr(_) {
      if (Ga(_))
        return re("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(_)), An(_);
    }
    var ca = le.ReactCurrentOwner, Xa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pi, Te;
    function We(_) {
      if (Qt.call(_, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function gt(_) {
      if (Qt.call(_, "key")) {
        var ae = Object.getOwnPropertyDescriptor(_, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Yt(_, ae) {
      typeof _.ref == "string" && ca.current;
    }
    function ln(_, ae) {
      {
        var _e = function() {
          pi || (pi = !0, re("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        _e.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: _e,
          configurable: !0
        });
      }
    }
    function gn(_, ae) {
      {
        var _e = function() {
          Te || (Te = !0, re("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        _e.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: _e,
          configurable: !0
        });
      }
    }
    var fn = function(_, ae, _e, Ue, vt, ot, Rt) {
      var Et = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: R,
        // Built-in properties that belong on the element
        type: _,
        key: ae,
        ref: _e,
        props: Rt,
        // Record the component responsible for creating this element.
        _owner: ot
      };
      return Et._store = {}, Object.defineProperty(Et._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Et, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ue
      }), Object.defineProperty(Et, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vt
      }), Object.freeze && (Object.freeze(Et.props), Object.freeze(Et)), Et;
    };
    function Jn(_, ae, _e, Ue, vt) {
      {
        var ot, Rt = {}, Et = null, kn = null;
        _e !== void 0 && (Rr(_e), Et = "" + _e), gt(ae) && (Rr(ae.key), Et = "" + ae.key), We(ae) && (kn = ae.ref, Yt(ae, vt));
        for (ot in ae)
          Qt.call(ae, ot) && !Xa.hasOwnProperty(ot) && (Rt[ot] = ae[ot]);
        if (_ && _.defaultProps) {
          var on = _.defaultProps;
          for (ot in on)
            Rt[ot] === void 0 && (Rt[ot] = on[ot]);
        }
        if (Et || kn) {
          var dn = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          Et && ln(Rt, dn), kn && gn(Rt, dn);
        }
        return fn(_, Et, kn, vt, Ue, ca.current, Rt);
      }
    }
    var un = le.ReactCurrentOwner, Gt = le.ReactDebugCurrentFrame;
    function Xt(_) {
      if (_) {
        var ae = _._owner, _e = _n(_.type, _._source, ae ? ae.type : null);
        Gt.setExtraStackFrame(_e);
      } else
        Gt.setExtraStackFrame(null);
    }
    var fa;
    fa = !1;
    function Tr(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === R;
    }
    function ba() {
      {
        if (un.current) {
          var _ = Ae(un.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function Vi(_) {
      return "";
    }
    var nu = {};
    function ru(_) {
      {
        var ae = ba();
        if (!ae) {
          var _e = typeof _ == "string" ? _ : _.displayName || _.name;
          _e && (ae = `

Check the top-level render call using <` + _e + ">.");
        }
        return ae;
      }
    }
    function ml(_, ae) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var _e = ru(ae);
        if (nu[_e])
          return;
        nu[_e] = !0;
        var Ue = "";
        _ && _._owner && _._owner !== un.current && (Ue = " It was passed a child from " + Ae(_._owner.type) + "."), Xt(_), re('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _e, Ue), Xt(null);
      }
    }
    function yl(_, ae) {
      {
        if (typeof _ != "object")
          return;
        if (Wn(_))
          for (var _e = 0; _e < _.length; _e++) {
            var Ue = _[_e];
            Tr(Ue) && ml(Ue, ae);
          }
        else if (Tr(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var vt = G(_);
          if (typeof vt == "function" && vt !== _.entries)
            for (var ot = vt.call(_), Rt; !(Rt = ot.next()).done; )
              Tr(Rt.value) && ml(Rt.value, ae);
        }
      }
    }
    function au(_) {
      {
        var ae = _.type;
        if (ae == null || typeof ae == "string")
          return;
        var _e;
        if (typeof ae == "function")
          _e = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === W || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === q))
          _e = ae.propTypes;
        else
          return;
        if (_e) {
          var Ue = Ae(ae);
          Zn(_e, _.props, "prop", Ue, _);
        } else if (ae.PropTypes !== void 0 && !fa) {
          fa = !0;
          var vt = Ae(ae);
          re("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", vt || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && re("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(_) {
      {
        for (var ae = Object.keys(_.props), _e = 0; _e < ae.length; _e++) {
          var Ue = ae[_e];
          if (Ue !== "children" && Ue !== "key") {
            Xt(_), re("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ue), Xt(null);
            break;
          }
        }
        _.ref !== null && (Xt(_), re("Invalid attribute `ref` supplied to `React.Fragment`."), Xt(null));
      }
    }
    var Dr = {};
    function ir(_, ae, _e, Ue, vt, ot) {
      {
        var Rt = it(_);
        if (!Rt) {
          var Et = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (Et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kn = Vi();
          kn ? Et += kn : Et += ba();
          var on;
          _ === null ? on = "null" : Wn(_) ? on = "array" : _ !== void 0 && _.$$typeof === R ? (on = "<" + (Ae(_.type) || "Unknown") + " />", Et = " Did you accidentally export a JSX literal instead of a component?") : on = typeof _, re("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", on, Et);
        }
        var dn = Jn(_, ae, _e, vt, ot);
        if (dn == null)
          return dn;
        if (Rt) {
          var lr = ae.children;
          if (lr !== void 0)
            if (Ue)
              if (Wn(lr)) {
                for (var qa = 0; qa < lr.length; qa++)
                  yl(lr[qa], _);
                Object.freeze && Object.freeze(lr);
              } else
                re("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yl(lr, _);
        }
        if (Qt.call(ae, "key")) {
          var Za = Ae(_), ht = Object.keys(ae).filter(function(iu) {
            return iu !== "key";
          }), yt = ht.length > 0 ? "{key: someKey, " + ht.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Dr[Za + yt]) {
            var Ja = ht.length > 0 ? "{" + ht.join(": ..., ") + ": ...}" : "{}";
            re(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, yt, Za, Ja, Za), Dr[Za + yt] = !0;
          }
        }
        return _ === z ? kr(dn) : au(dn), dn;
      }
    }
    function vi(_, ae, _e) {
      return ir(_, ae, _e, !0);
    }
    function Ka(_, ae, _e) {
      return ir(_, ae, _e, !1);
    }
    var hi = Ka, mi = vi;
    av.Fragment = z, av.jsx = hi, av.jsxs = mi;
  }()), av;
}
process.env.NODE_ENV === "production" ? x0.exports = bk() : x0.exports = kk();
var jt = x0.exports, b0 = { exports: {} }, Wa = {}, ty = { exports: {} }, T0 = {};
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
      var N = me.length;
      me.push($e);
      e: for (; 0 < N; ) {
        var w = N - 1 >>> 1, M = me[w];
        if (0 < P(M, $e)) me[w] = $e, me[N] = M, N = w;
        else break e;
      }
    }
    function E(me) {
      return me.length === 0 ? null : me[0];
    }
    function z(me) {
      if (me.length === 0) return null;
      var $e = me[0], N = me.pop();
      if (N !== $e) {
        me[0] = N;
        e: for (var w = 0, M = me.length, he = M >>> 1; w < he; ) {
          var ge = 2 * (w + 1) - 1, Ce = me[ge], Ve = ge + 1, ne = me[Ve];
          if (0 > P(Ce, N)) Ve < M && 0 > P(ne, Ce) ? (me[w] = ne, me[Ve] = N, w = Ve) : (me[w] = Ce, me[ge] = N, w = ge);
          else if (Ve < M && 0 > P(ne, N)) me[w] = ne, me[Ve] = N, w = Ve;
          else break e;
        }
      }
      return $e;
    }
    function P(me, $e) {
      var N = me.sortIndex - $e.sortIndex;
      return N !== 0 ? N : me.id - $e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var I = performance;
      S.unstable_now = function() {
        return I.now();
      };
    } else {
      var y = Date, ee = y.now();
      S.unstable_now = function() {
        return y.now() - ee;
      };
    }
    var W = [], U = [], oe = 1, q = null, te = 3, L = !1, fe = !1, Z = !1, G = typeof setTimeout == "function" ? setTimeout : null, le = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ee(me) {
      for (var $e = E(U); $e !== null; ) {
        if ($e.callback === null) z(U);
        else if ($e.startTime <= me) z(U), $e.sortIndex = $e.expirationTime, R(W, $e);
        else break;
        $e = E(U);
      }
    }
    function ve(me) {
      if (Z = !1, Ee(me), !fe) if (E(W) !== null) fe = !0, kt(Re);
      else {
        var $e = E(U);
        $e !== null && je(ve, $e.startTime - me);
      }
    }
    function Re(me, $e) {
      fe = !1, Z && (Z = !1, le(ut), ut = -1), L = !0;
      var N = te;
      try {
        for (Ee($e), q = E(W); q !== null && (!(q.expirationTime > $e) || me && !wt()); ) {
          var w = q.callback;
          if (typeof w == "function") {
            q.callback = null, te = q.priorityLevel;
            var M = w(q.expirationTime <= $e);
            $e = S.unstable_now(), typeof M == "function" ? q.callback = M : q === E(W) && z(W), Ee($e);
          } else z(W);
          q = E(W);
        }
        if (q !== null) var he = !0;
        else {
          var ge = E(U);
          ge !== null && je(ve, ge.startTime - $e), he = !1;
        }
        return he;
      } finally {
        q = null, te = N, L = !1;
      }
    }
    var Be = !1, Le = null, ut = -1, dt = 5, it = -1;
    function wt() {
      return !(S.unstable_now() - it < dt);
    }
    function ct() {
      if (Le !== null) {
        var me = S.unstable_now();
        it = me;
        var $e = !0;
        try {
          $e = Le(!0, me);
        } finally {
          $e ? Ae() : (Be = !1, Le = null);
        }
      } else Be = !1;
    }
    var Ae;
    if (typeof re == "function") Ae = function() {
      re(ct);
    };
    else if (typeof MessageChannel < "u") {
      var Nt = new MessageChannel(), _t = Nt.port2;
      Nt.port1.onmessage = ct, Ae = function() {
        _t.postMessage(null);
      };
    } else Ae = function() {
      G(ct, 0);
    };
    function kt(me) {
      Le = me, Be || (Be = !0, Ae());
    }
    function je(me, $e) {
      ut = G(function() {
        me(S.unstable_now());
      }, $e);
    }
    S.unstable_IdlePriority = 5, S.unstable_ImmediatePriority = 1, S.unstable_LowPriority = 4, S.unstable_NormalPriority = 3, S.unstable_Profiling = null, S.unstable_UserBlockingPriority = 2, S.unstable_cancelCallback = function(me) {
      me.callback = null;
    }, S.unstable_continueExecution = function() {
      fe || L || (fe = !0, kt(Re));
    }, S.unstable_forceFrameRate = function(me) {
      0 > me || 125 < me ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : dt = 0 < me ? Math.floor(1e3 / me) : 5;
    }, S.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, S.unstable_getFirstCallbackNode = function() {
      return E(W);
    }, S.unstable_next = function(me) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var $e = 3;
          break;
        default:
          $e = te;
      }
      var N = te;
      te = $e;
      try {
        return me();
      } finally {
        te = N;
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
      var N = te;
      te = me;
      try {
        return $e();
      } finally {
        te = N;
      }
    }, S.unstable_scheduleCallback = function(me, $e, N) {
      var w = S.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? w + N : w) : N = w, me) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = N + M, me = { id: oe++, callback: $e, priorityLevel: me, startTime: N, expirationTime: M, sortIndex: -1 }, N > w ? (me.sortIndex = N, R(U, me), E(W) === null && me === E(U) && (Z ? (le(ut), ut = -1) : Z = !0, je(ve, N - w))) : (me.sortIndex = M, R(W, me), fe || L || (fe = !0, kt(Re))), me;
    }, S.unstable_shouldYield = wt, S.unstable_wrapCallback = function(me) {
      var $e = te;
      return function() {
        var N = te;
        te = $e;
        try {
          return me.apply(this, arguments);
        } finally {
          te = N;
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
      function z(Te, We) {
        var gt = Te.length;
        Te.push(We), y(Te, We, gt);
      }
      function P(Te) {
        return Te.length === 0 ? null : Te[0];
      }
      function I(Te) {
        if (Te.length === 0)
          return null;
        var We = Te[0], gt = Te.pop();
        return gt !== We && (Te[0] = gt, ee(Te, gt, 0)), We;
      }
      function y(Te, We, gt) {
        for (var Yt = gt; Yt > 0; ) {
          var ln = Yt - 1 >>> 1, gn = Te[ln];
          if (W(gn, We) > 0)
            Te[ln] = We, Te[Yt] = gn, Yt = ln;
          else
            return;
        }
      }
      function ee(Te, We, gt) {
        for (var Yt = gt, ln = Te.length, gn = ln >>> 1; Yt < gn; ) {
          var fn = (Yt + 1) * 2 - 1, Jn = Te[fn], un = fn + 1, Gt = Te[un];
          if (W(Jn, We) < 0)
            un < ln && W(Gt, Jn) < 0 ? (Te[Yt] = Gt, Te[un] = We, Yt = un) : (Te[Yt] = Jn, Te[fn] = We, Yt = fn);
          else if (un < ln && W(Gt, We) < 0)
            Te[Yt] = Gt, Te[un] = We, Yt = un;
          else
            return;
        }
      }
      function W(Te, We) {
        var gt = Te.sortIndex - We.sortIndex;
        return gt !== 0 ? gt : Te.id - We.id;
      }
      var U = 1, oe = 2, q = 3, te = 4, L = 5;
      function fe(Te, We) {
      }
      var Z = typeof performance == "object" && typeof performance.now == "function";
      if (Z) {
        var G = performance;
        S.unstable_now = function() {
          return G.now();
        };
      } else {
        var le = Date, re = le.now();
        S.unstable_now = function() {
          return le.now() - re;
        };
      }
      var Ee = 1073741823, ve = -1, Re = 250, Be = 5e3, Le = 1e4, ut = Ee, dt = [], it = [], wt = 1, ct = null, Ae = q, Nt = !1, _t = !1, kt = !1, je = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, $e = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function N(Te) {
        for (var We = P(it); We !== null; ) {
          if (We.callback === null)
            I(it);
          else if (We.startTime <= Te)
            I(it), We.sortIndex = We.expirationTime, z(dt, We);
          else
            return;
          We = P(it);
        }
      }
      function w(Te) {
        if (kt = !1, N(Te), !_t)
          if (P(dt) !== null)
            _t = !0, An(M);
          else {
            var We = P(it);
            We !== null && Rr(w, We.startTime - Te);
          }
      }
      function M(Te, We) {
        _t = !1, kt && (kt = !1, ca()), Nt = !0;
        var gt = Ae;
        try {
          var Yt;
          if (!R) return he(Te, We);
        } finally {
          ct = null, Ae = gt, Nt = !1;
        }
      }
      function he(Te, We) {
        var gt = We;
        for (N(gt), ct = P(dt); ct !== null && !(ct.expirationTime > gt && (!Te || _a())); ) {
          var Yt = ct.callback;
          if (typeof Yt == "function") {
            ct.callback = null, Ae = ct.priorityLevel;
            var ln = ct.expirationTime <= gt, gn = Yt(ln);
            gt = S.unstable_now(), typeof gn == "function" ? ct.callback = gn : ct === P(dt) && I(dt), N(gt);
          } else
            I(dt);
          ct = P(dt);
        }
        if (ct !== null)
          return !0;
        var fn = P(it);
        return fn !== null && Rr(w, fn.startTime - gt), !1;
      }
      function ge(Te, We) {
        switch (Te) {
          case U:
          case oe:
          case q:
          case te:
          case L:
            break;
          default:
            Te = q;
        }
        var gt = Ae;
        Ae = Te;
        try {
          return We();
        } finally {
          Ae = gt;
        }
      }
      function Ce(Te) {
        var We;
        switch (Ae) {
          case U:
          case oe:
          case q:
            We = q;
            break;
          default:
            We = Ae;
            break;
        }
        var gt = Ae;
        Ae = We;
        try {
          return Te();
        } finally {
          Ae = gt;
        }
      }
      function Ve(Te) {
        var We = Ae;
        return function() {
          var gt = Ae;
          Ae = We;
          try {
            return Te.apply(this, arguments);
          } finally {
            Ae = gt;
          }
        };
      }
      function ne(Te, We, gt) {
        var Yt = S.unstable_now(), ln;
        if (typeof gt == "object" && gt !== null) {
          var gn = gt.delay;
          typeof gn == "number" && gn > 0 ? ln = Yt + gn : ln = Yt;
        } else
          ln = Yt;
        var fn;
        switch (Te) {
          case U:
            fn = ve;
            break;
          case oe:
            fn = Re;
            break;
          case L:
            fn = ut;
            break;
          case te:
            fn = Le;
            break;
          case q:
          default:
            fn = Be;
            break;
        }
        var Jn = ln + fn, un = {
          id: wt++,
          callback: We,
          priorityLevel: Te,
          startTime: ln,
          expirationTime: Jn,
          sortIndex: -1
        };
        return ln > Yt ? (un.sortIndex = ln, z(it, un), P(dt) === null && un === P(it) && (kt ? ca() : kt = !0, Rr(w, ln - Yt))) : (un.sortIndex = Jn, z(dt, un), !_t && !Nt && (_t = !0, An(M))), un;
      }
      function Se() {
      }
      function Ie() {
        !_t && !Nt && (_t = !0, An(M));
      }
      function pt() {
        return P(dt);
      }
      function nn(Te) {
        Te.callback = null;
      }
      function Er() {
        return Ae;
      }
      var hn = !1, In = null, _n = -1, Qt = E, wn = -1;
      function _a() {
        var Te = S.unstable_now() - wn;
        return !(Te < Qt);
      }
      function sa() {
      }
      function Zn(Te) {
        if (Te < 0 || Te > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Te > 0 ? Qt = Math.floor(1e3 / Te) : Qt = E;
      }
      var bn = function() {
        if (In !== null) {
          var Te = S.unstable_now();
          wn = Te;
          var We = !0, gt = !0;
          try {
            gt = In(We, Te);
          } finally {
            gt ? Wn() : (hn = !1, In = null);
          }
        } else
          hn = !1;
      }, Wn;
      if (typeof $e == "function")
        Wn = function() {
          $e(bn);
        };
      else if (typeof MessageChannel < "u") {
        var Cr = new MessageChannel(), Ga = Cr.port2;
        Cr.port1.onmessage = bn, Wn = function() {
          Ga.postMessage(null);
        };
      } else
        Wn = function() {
          je(bn, 0);
        };
      function An(Te) {
        In = Te, hn || (hn = !0, Wn());
      }
      function Rr(Te, We) {
        _n = je(function() {
          Te(S.unstable_now());
        }, We);
      }
      function ca() {
        me(_n), _n = -1;
      }
      var Xa = sa, pi = null;
      S.unstable_IdlePriority = L, S.unstable_ImmediatePriority = U, S.unstable_LowPriority = te, S.unstable_NormalPriority = q, S.unstable_Profiling = pi, S.unstable_UserBlockingPriority = oe, S.unstable_cancelCallback = nn, S.unstable_continueExecution = Ie, S.unstable_forceFrameRate = Zn, S.unstable_getCurrentPriorityLevel = Er, S.unstable_getFirstCallbackNode = pt, S.unstable_next = Ce, S.unstable_pauseExecution = Se, S.unstable_requestPaint = Xa, S.unstable_runWithPriority = ge, S.unstable_scheduleCallback = ne, S.unstable_shouldYield = _a, S.unstable_wrapCallback = Ve, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
  var S = an, R = kT();
  function E(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var z = /* @__PURE__ */ new Set(), P = {};
  function I(n, r) {
    y(n, r), y(n + "Capture", r);
  }
  function y(n, r) {
    for (P[n] = r, n = 0; n < r.length; n++) z.add(r[n]);
  }
  var ee = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), W = Object.prototype.hasOwnProperty, U = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, oe = {}, q = {};
  function te(n) {
    return W.call(q, n) ? !0 : W.call(oe, n) ? !1 : U.test(n) ? q[n] = !0 : (oe[n] = !0, !1);
  }
  function L(n, r, l, o) {
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
    if (r === null || typeof r > "u" || L(n, r, l, o)) return !0;
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
  function Z(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    G[n] = new Z(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    G[r] = new Z(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    G[n] = new Z(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    G[n] = new Z(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    G[n] = new Z(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    G[n] = new Z(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    G[n] = new Z(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    G[n] = new Z(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    G[n] = new Z(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var le = /[\-:]([a-z])/g;
  function re(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      le,
      re
    );
    G[r] = new Z(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(le, re);
    G[r] = new Z(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(le, re);
    G[r] = new Z(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    G[n] = new Z(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), G.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    G[n] = new Z(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ee(n, r, l, o) {
    var c = G.hasOwnProperty(r) ? G[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (fe(r, l, c, o) && (l = null), o || c === null ? te(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ve = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Re = Symbol.for("react.element"), Be = Symbol.for("react.portal"), Le = Symbol.for("react.fragment"), ut = Symbol.for("react.strict_mode"), dt = Symbol.for("react.profiler"), it = Symbol.for("react.provider"), wt = Symbol.for("react.context"), ct = Symbol.for("react.forward_ref"), Ae = Symbol.for("react.suspense"), Nt = Symbol.for("react.suspense_list"), _t = Symbol.for("react.memo"), kt = Symbol.for("react.lazy"), je = Symbol.for("react.offscreen"), me = Symbol.iterator;
  function $e(n) {
    return n === null || typeof n != "object" ? null : (n = me && n[me] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var N = Object.assign, w;
  function M(n) {
    if (w === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      w = r && r[1] || "";
    }
    return `
` + w + n;
  }
  var he = !1;
  function ge(n, r) {
    if (!n || he) return "";
    he = !0;
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
`), m = c.length - 1, T = d.length - 1; 1 <= m && 0 <= T && c[m] !== d[T]; ) T--;
        for (; 1 <= m && 0 <= T; m--, T--) if (c[m] !== d[T]) {
          if (m !== 1 || T !== 1)
            do
              if (m--, T--, 0 > T || c[m] !== d[T]) {
                var b = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", n.displayName)), b;
              }
            while (1 <= m && 0 <= T);
          break;
        }
      }
    } finally {
      he = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? M(n) : "";
  }
  function Ce(n) {
    switch (n.tag) {
      case 5:
        return M(n.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ge(n.type, !1), n;
      case 11:
        return n = ge(n.type.render, !1), n;
      case 1:
        return n = ge(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ve(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Le:
        return "Fragment";
      case Be:
        return "Portal";
      case dt:
        return "Profiler";
      case ut:
        return "StrictMode";
      case Ae:
        return "Suspense";
      case Nt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case wt:
        return (n.displayName || "Context") + ".Consumer";
      case it:
        return (n._context.displayName || "Context") + ".Provider";
      case ct:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case _t:
        return r = n.displayName || null, r !== null ? r : Ve(n.type) || "Memo";
      case kt:
        r = n._payload, n = n._init;
        try {
          return Ve(n(r));
        } catch {
        }
    }
    return null;
  }
  function ne(n) {
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
        return Ve(r);
      case 8:
        return r === ut ? "StrictMode" : "Mode";
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
  function Se(n) {
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
  function Ie(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function pt(n) {
    var r = Ie(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function nn(n) {
    n._valueTracker || (n._valueTracker = pt(n));
  }
  function Er(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Ie(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function hn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function In(n, r) {
    var l = r.checked;
    return N({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function _n(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Se(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Qt(n, r) {
    r = r.checked, r != null && Ee(n, "checked", r, !1);
  }
  function wn(n, r) {
    Qt(n, r);
    var l = Se(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? sa(n, r.type, l) : r.hasOwnProperty("defaultValue") && sa(n, r.type, Se(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function _a(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function sa(n, r, l) {
    (r !== "number" || hn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Zn = Array.isArray;
  function bn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Se(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Wn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(E(91));
    return N({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Cr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(E(92));
        if (Zn(l)) {
          if (1 < l.length) throw Error(E(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Se(l) };
  }
  function Ga(n, r) {
    var l = Se(r.value), o = Se(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function An(n) {
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
  var We = {
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
  }, gt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(We).forEach(function(n) {
    gt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), We[r] = We[n];
    });
  });
  function Yt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || We.hasOwnProperty(n) && We[n] ? ("" + r).trim() : r + "px";
  }
  function ln(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Yt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var gn = N({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function fn(n, r) {
    if (r) {
      if (gn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(E(137, n));
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
  var un = null;
  function Gt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Xt = null, fa = null, Tr = null;
  function ba(n) {
    if (n = Xe(n)) {
      if (typeof Xt != "function") throw Error(E(280));
      var r = n.stateNode;
      r && (r = En(r), Xt(n.stateNode, n.type, r));
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
  function kr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = En(l);
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
  var Dr = !1;
  if (ee) try {
    var ir = {};
    Object.defineProperty(ir, "passive", { get: function() {
      Dr = !0;
    } }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
  } catch {
    Dr = !1;
  }
  function vi(n, r, l, o, c, d, m, T, b) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, $);
    } catch (se) {
      this.onError(se);
    }
  }
  var Ka = !1, hi = null, mi = !1, _ = null, ae = { onError: function(n) {
    Ka = !0, hi = n;
  } };
  function _e(n, r, l, o, c, d, m, T, b) {
    Ka = !1, hi = null, vi.apply(ae, arguments);
  }
  function Ue(n, r, l, o, c, d, m, T, b) {
    if (_e.apply(this, arguments), Ka) {
      if (Ka) {
        var $ = hi;
        Ka = !1, hi = null;
      } else throw Error(E(198));
      mi || (mi = !0, _ = $);
    }
  }
  function vt(n) {
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
  function ot(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Rt(n) {
    if (vt(n) !== n) throw Error(E(188));
  }
  function Et(n) {
    var r = n.alternate;
    if (!r) {
      if (r = vt(n), r === null) throw Error(E(188));
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
          if (d === l) return Rt(c), n;
          if (d === o) return Rt(c), r;
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
  function kn(n) {
    return n = Et(n), n !== null ? on(n) : null;
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
  var dn = R.unstable_scheduleCallback, lr = R.unstable_cancelCallback, qa = R.unstable_shouldYield, Za = R.unstable_requestPaint, ht = R.unstable_now, yt = R.unstable_getCurrentPriorityLevel, Ja = R.unstable_ImmediatePriority, iu = R.unstable_UserBlockingPriority, lu = R.unstable_NormalPriority, gl = R.unstable_LowPriority, Ku = R.unstable_IdlePriority, Sl = null, Wr = null;
  function Xo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(Sl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : qu, fc = Math.log, dc = Math.LN2;
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
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Or(r), c = 1 << l, o |= n[l], r &= ~c;
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
      var m = 31 - Or(d), T = 1 << m, b = c[m];
      b === -1 ? (!(T & l) || T & o) && (c[m] = Zu(T, r)) : b <= r && (n.expiredLanes |= T), d &= ~T;
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
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Or(r), n[r] = l;
  }
  function Zf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Or(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function $i(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Or(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Ft = 0;
  function to(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var zt, Ko, yi, lt, no, ur = !1, gi = [], Mr = null, Si = null, pn = null, Kt = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map(), Qn = [], Lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ka(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Mr = null;
        break;
      case "dragenter":
      case "dragleave":
        Si = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        Kt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rl.delete(r.pointerId);
    }
  }
  function ou(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Xe(r), r !== null && Ko(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qo(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Mr = ou(Mr, n, r, l, o, c), !0;
      case "dragenter":
        return Si = ou(Si, n, r, l, o, c), !0;
      case "mouseover":
        return pn = ou(pn, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Kt.set(d, ou(Kt.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Rl.set(d, ou(Rl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Zo(n) {
    var r = yu(n.target);
    if (r !== null) {
      var l = vt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ot(l), r !== null) {
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
        un = o, l.target.dispatchEvent(o), un = null;
      } else return r = Xe(l), r !== null && Ko(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function su(n, r, l) {
    Tl(n) && l.delete(r);
  }
  function Jf() {
    ur = !1, Mr !== null && Tl(Mr) && (Mr = null), Si !== null && Tl(Si) && (Si = null), pn !== null && Tl(pn) && (pn = null), Kt.forEach(su), Rl.forEach(su);
  }
  function Da(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ur || (ur = !0, R.unstable_scheduleCallback(R.unstable_NormalPriority, Jf)));
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
    for (Mr !== null && Da(Mr, n), Si !== null && Da(Si, n), pn !== null && Da(pn, n), Kt.forEach(r), Rl.forEach(r), l = 0; l < Qn.length; l++) o = Qn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Qn.length && (l = Qn[0], l.blockedOn === null); ) Zo(l), l.blockedOn === null && Qn.shift();
  }
  var Ei = ve.ReactCurrentBatchConfig, Oa = !0;
  function ro(n, r, l, o) {
    var c = Ft, d = Ei.transition;
    Ei.transition = null;
    try {
      Ft = 1, wl(n, r, l, o);
    } finally {
      Ft = c, Ei.transition = d;
    }
  }
  function ao(n, r, l, o) {
    var c = Ft, d = Ei.transition;
    Ei.transition = null;
    try {
      Ft = 4, wl(n, r, l, o);
    } finally {
      Ft = c, Ei.transition = d;
    }
  }
  function wl(n, r, l, o) {
    if (Oa) {
      var c = io(n, r, l, o);
      if (c === null) wc(n, r, o, cu, l), ka(n, o);
      else if (qo(c, n, r, l, o)) o.stopPropagation();
      else if (ka(n, o), r & 4 && -1 < Lr.indexOf(n)) {
        for (; c !== null; ) {
          var d = Xe(c);
          if (d !== null && zt(d), d = io(n, r, l, o), d === null && wc(n, r, o, cu, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else wc(n, r, o, null, l);
    }
  }
  var cu = null;
  function io(n, r, l, o) {
    if (cu = null, n = Gt(o), n = yu(n), n !== null) if (r = vt(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ot(r), n !== null) return n;
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
        switch (yt()) {
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
  var ri = null, h = null, x = null;
  function B() {
    if (x) return x;
    var n, r = h, l = r.length, o, c = "value" in ri ? ri.value : ri.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return x = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ye() {
    return !0;
  }
  function qe() {
    return !1;
  }
  function xe(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var T in n) n.hasOwnProperty(T) && (l = n[T], this[T] = l ? l(d) : d[T]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ye : qe, this.isPropagationStopped = qe, this;
    }
    return N(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ye);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ye);
    }, persist: function() {
    }, isPersistent: ye }), r;
  }
  var et = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Tt = xe(et), At = N({}, et, { view: 0, detail: 0 }), sn = xe(At), qt, St, Zt, Sn = N({}, At, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ad, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Zt && (Zt && n.type === "mousemove" ? (qt = n.screenX - Zt.screenX, St = n.screenY - Zt.screenY) : St = qt = 0, Zt = n), qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : St;
  } }), xl = xe(Sn), Jo = N({}, Sn, { dataTransfer: 0 }), Yi = xe(Jo), es = N({}, At, { relatedTarget: 0 }), fu = xe(es), ed = N({}, et, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = xe(ed), td = N({}, et, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), cv = xe(td), nd = N({}, et, { data: 0 }), rd = xe(nd), fv = {
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
  var id = N({}, At, { key: function(n) {
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
  } }), ld = xe(id), ud = N({}, Sn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pv = xe(ud), vc = N({}, At, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ad }), vv = xe(vc), Qr = N({}, et, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wi = xe(Qr), Un = N({}, Sn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Qi = xe(Un), od = [9, 13, 27, 32], uo = ee && "CompositionEvent" in window, ts = null;
  ee && "documentMode" in document && (ts = document.documentMode);
  var ns = ee && "TextEvent" in window && !ts, hv = ee && (!uo || ts && 8 < ts && 11 >= ts), mv = " ", hc = !1;
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
    if (oo) return n === "compositionend" || !uo && yv(n, r) ? (n = B(), x = h = ri = null, oo = !1, n) : null;
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
    Vi(o), r = os(r, "onChange"), 0 < r.length && (l = new Tt("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Ci = null, du = null;
  function Cv(n) {
    hu(n, 0);
  }
  function rs(n) {
    var r = ii(n);
    if (Er(r)) return n;
  }
  function cy(n, r) {
    if (n === "change") return r;
  }
  var Rv = !1;
  if (ee) {
    var cd;
    if (ee) {
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
      sd(r, du, n, Gt(n)), au(Cv, r);
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
    for (var n = window, r = hn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = hn(n.document);
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
  var vy = ee && "documentMode" in document && 11 >= document.documentMode, co = null, dd = null, ls = null, pd = !1;
  function vd(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pd || co == null || co !== hn(o) || (o = co, "selectionStart" in o && yc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ls && as(ls, o) || (ls = o, o = os(dd, "onSelect"), 0 < o.length && (r = new Tt("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = co)));
  }
  function gc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var pu = { animationend: gc("Animation", "AnimationEnd"), animationiteration: gc("Animation", "AnimationIteration"), animationstart: gc("Animation", "AnimationStart"), transitionend: gc("Transition", "TransitionEnd") }, or = {}, hd = {};
  ee && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete pu.animationend.animation, delete pu.animationiteration.animation, delete pu.animationstart.animation), "TransitionEvent" in window || delete pu.transitionend.transition);
  function Sc(n) {
    if (or[n]) return or[n];
    if (!pu[n]) return n;
    var r = pu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in hd) return or[n] = r[l];
    return n;
  }
  var Dv = Sc("animationend"), Ov = Sc("animationiteration"), Mv = Sc("animationstart"), Lv = Sc("transitionend"), md = /* @__PURE__ */ new Map(), Ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ma(n, r) {
    md.set(n, r), I(r, [n]);
  }
  for (var yd = 0; yd < Ec.length; yd++) {
    var vu = Ec[yd], hy = vu.toLowerCase(), my = vu[0].toUpperCase() + vu.slice(1);
    Ma(hy, "on" + my);
  }
  Ma(Dv, "onAnimationEnd"), Ma(Ov, "onAnimationIteration"), Ma(Mv, "onAnimationStart"), Ma("dblclick", "onDoubleClick"), Ma("focusin", "onFocus"), Ma("focusout", "onBlur"), Ma(Lv, "onTransitionEnd"), y("onMouseEnter", ["mouseout", "mouseover"]), y("onMouseLeave", ["mouseout", "mouseover"]), y("onPointerEnter", ["pointerout", "pointerover"]), y("onPointerLeave", ["pointerout", "pointerover"]), I("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), I("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), I("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), I("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), I("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), I("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
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
          var T = o[m], b = T.instance, $ = T.currentTarget;
          if (T = T.listener, b !== d && c.isPropagationStopped()) break e;
          Cc(c, T, $), d = b;
        }
        else for (m = 0; m < o.length; m++) {
          if (T = o[m], b = T.instance, $ = T.currentTarget, T = T.listener, b !== d && c.isPropagationStopped()) break e;
          Cc(c, T, $), d = b;
        }
      }
    }
    if (mi) throw n = _, mi = !1, _ = null, n;
  }
  function It(n, r) {
    var l = r[fs];
    l === void 0 && (l = r[fs] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Nv(r, n, 2, !1), l.add(o));
  }
  function Rc(n, r, l) {
    var o = 0;
    r && (o |= 4), Nv(l, n, o, r);
  }
  var Tc = "_reactListening" + Math.random().toString(36).slice(2);
  function fo(n) {
    if (!n[Tc]) {
      n[Tc] = !0, z.forEach(function(l) {
        l !== "selectionchange" && (gd.has(l) || Rc(l, !1, n), Rc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Tc] || (r[Tc] = !0, Rc("selectionchange", !1, r));
    }
  }
  function Nv(n, r, l, o) {
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
    l = c.bind(null, r, l, n), c = void 0, !Dr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
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
          var b = m.tag;
          if ((b === 3 || b === 4) && (b = m.stateNode.containerInfo, b === c || b.nodeType === 8 && b.parentNode === c)) return;
          m = m.return;
        }
        for (; T !== null; ) {
          if (m = yu(T), m === null) return;
          if (b = m.tag, b === 5 || b === 6) {
            o = d = m;
            continue e;
          }
          T = T.parentNode;
        }
      }
      o = o.return;
    }
    au(function() {
      var $ = d, se = Gt(l), de = [];
      e: {
        var ue = md.get(n);
        if (ue !== void 0) {
          var Oe = Tt, Fe = n;
          switch (n) {
            case "keypress":
              if (Q(l) === 0) break e;
            case "keydown":
            case "keyup":
              Oe = ld;
              break;
            case "focusin":
              Fe = "focus", Oe = fu;
              break;
            case "focusout":
              Fe = "blur", Oe = fu;
              break;
            case "beforeblur":
            case "afterblur":
              Oe = fu;
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
              Oe = xl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Oe = Yi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Oe = vv;
              break;
            case Dv:
            case Ov:
            case Mv:
              Oe = pc;
              break;
            case Lv:
              Oe = Wi;
              break;
            case "scroll":
              Oe = sn;
              break;
            case "wheel":
              Oe = Qi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Oe = cv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Oe = pv;
          }
          var Ye = (r & 4) !== 0, Nn = !Ye && n === "scroll", A = Ye ? ue !== null ? ue + "Capture" : null : ue;
          Ye = [];
          for (var D = $, H; D !== null; ) {
            H = D;
            var ce = H.stateNode;
            if (H.tag === 5 && ce !== null && (H = ce, A !== null && (ce = kr(D, A), ce != null && Ye.push(po(D, ce, H)))), Nn) break;
            D = D.return;
          }
          0 < Ye.length && (ue = new Oe(ue, Fe, null, l, se), de.push({ event: ue, listeners: Ye }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ue = n === "mouseover" || n === "pointerover", Oe = n === "mouseout" || n === "pointerout", ue && l !== un && (Fe = l.relatedTarget || l.fromElement) && (yu(Fe) || Fe[Gi])) break e;
          if ((Oe || ue) && (ue = se.window === se ? se : (ue = se.ownerDocument) ? ue.defaultView || ue.parentWindow : window, Oe ? (Fe = l.relatedTarget || l.toElement, Oe = $, Fe = Fe ? yu(Fe) : null, Fe !== null && (Nn = vt(Fe), Fe !== Nn || Fe.tag !== 5 && Fe.tag !== 6) && (Fe = null)) : (Oe = null, Fe = $), Oe !== Fe)) {
            if (Ye = xl, ce = "onMouseLeave", A = "onMouseEnter", D = "mouse", (n === "pointerout" || n === "pointerover") && (Ye = pv, ce = "onPointerLeave", A = "onPointerEnter", D = "pointer"), Nn = Oe == null ? ue : ii(Oe), H = Fe == null ? ue : ii(Fe), ue = new Ye(ce, D + "leave", Oe, l, se), ue.target = Nn, ue.relatedTarget = H, ce = null, yu(se) === $ && (Ye = new Ye(A, D + "enter", Fe, l, se), Ye.target = H, Ye.relatedTarget = Nn, ce = Ye), Nn = ce, Oe && Fe) t: {
              for (Ye = Oe, A = Fe, D = 0, H = Ye; H; H = bl(H)) D++;
              for (H = 0, ce = A; ce; ce = bl(ce)) H++;
              for (; 0 < D - H; ) Ye = bl(Ye), D--;
              for (; 0 < H - D; ) A = bl(A), H--;
              for (; D--; ) {
                if (Ye === A || A !== null && Ye === A.alternate) break t;
                Ye = bl(Ye), A = bl(A);
              }
              Ye = null;
            }
            else Ye = null;
            Oe !== null && zv(de, ue, Oe, Ye, !1), Fe !== null && Nn !== null && zv(de, Nn, Fe, Ye, !0);
          }
        }
        e: {
          if (ue = $ ? ii($) : window, Oe = ue.nodeName && ue.nodeName.toLowerCase(), Oe === "select" || Oe === "input" && ue.type === "file") var He = cy;
          else if (Ev(ue)) if (Rv) He = bv;
          else {
            He = _v;
            var Je = fy;
          }
          else (Oe = ue.nodeName) && Oe.toLowerCase() === "input" && (ue.type === "checkbox" || ue.type === "radio") && (He = dy);
          if (He && (He = He(n, $))) {
            sd(de, He, l, se);
            break e;
          }
          Je && Je(n, ue, $), n === "focusout" && (Je = ue._wrapperState) && Je.controlled && ue.type === "number" && sa(ue, "number", ue.value);
        }
        switch (Je = $ ? ii($) : window, n) {
          case "focusin":
            (Ev(Je) || Je.contentEditable === "true") && (co = Je, dd = $, ls = null);
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
            pd = !1, vd(de, l, se);
            break;
          case "selectionchange":
            if (vy) break;
          case "keydown":
          case "keyup":
            vd(de, l, se);
        }
        var tt;
        if (uo) e: {
          switch (n) {
            case "compositionstart":
              var at = "onCompositionStart";
              break e;
            case "compositionend":
              at = "onCompositionEnd";
              break e;
            case "compositionupdate":
              at = "onCompositionUpdate";
              break e;
          }
          at = void 0;
        }
        else oo ? yv(n, l) && (at = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (at = "onCompositionStart");
        at && (hv && l.locale !== "ko" && (oo || at !== "onCompositionStart" ? at === "onCompositionEnd" && oo && (tt = B()) : (ri = se, h = "value" in ri ? ri.value : ri.textContent, oo = !0)), Je = os($, at), 0 < Je.length && (at = new rd(at, n, null, l, se), de.push({ event: at, listeners: Je }), tt ? at.data = tt : (tt = gv(l), tt !== null && (at.data = tt)))), (tt = ns ? Sv(n, l) : oy(n, l)) && ($ = os($, "onBeforeInput"), 0 < $.length && (se = new rd("onBeforeInput", "beforeinput", null, l, se), de.push({ event: se, listeners: $ }), se.data = tt));
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
      c.tag === 5 && d !== null && (c = d, d = kr(n, l), d != null && o.unshift(po(n, d, c)), d = kr(n, r), d != null && o.push(po(n, d, c))), n = n.return;
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
      var T = l, b = T.alternate, $ = T.stateNode;
      if (b !== null && b === o) break;
      T.tag === 5 && $ !== null && (T = $, c ? (b = kr(l, d), b != null && m.unshift(po(l, b, T))) : c || (b = kr(l, d), b != null && m.push(po(l, b, T)))), l = l.return;
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
  function Xe(n) {
    return n = n[Ti] || n[Gi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ii(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(E(33));
  }
  function En(n) {
    return n[cs] || null;
  }
  var Dt = [], La = -1;
  function Na(n) {
    return { current: n };
  }
  function cn(n) {
    0 > La || (n.current = Dt[La], Dt[La] = null, La--);
  }
  function Ge(n, r) {
    La++, Dt[La] = n.current, n.current = r;
  }
  var wr = {}, xn = Na(wr), Gn = Na(!1), Gr = wr;
  function Xr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return wr;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function jn(n) {
    return n = n.childContextTypes, n != null;
  }
  function yo() {
    cn(Gn), cn(xn);
  }
  function Hv(n, r, l) {
    if (xn.current !== wr) throw Error(E(168));
    Ge(xn, r), Ge(Gn, l);
  }
  function ds(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(E(108, ne(n) || "Unknown", c));
    return N({}, l, o);
  }
  function er(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || wr, Gr = xn.current, Ge(xn, n), Ge(Gn, Gn.current), !0;
  }
  function Dc(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(E(169));
    l ? (n = ds(n, r, Gr), o.__reactInternalMemoizedMergedChildContext = n, cn(Gn), cn(xn), Ge(xn, n)) : cn(Gn), Ge(Gn, l);
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
      var n = 0, r = Ft;
      try {
        var l = wi;
        for (Ft = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        wi = null, go = !1;
      } catch (c) {
        throw wi !== null && (wi = wi.slice(n + 1)), dn(Ja, xi), c;
      } finally {
        Ft = r, Xi = !1;
      }
    }
    return null;
  }
  var Ml = [], Ll = 0, Nl = null, Ki = 0, Fn = [], za = 0, pa = null, _i = 1, bi = "";
  function gu(n, r) {
    Ml[Ll++] = Ki, Ml[Ll++] = Nl, Nl = n, Ki = r;
  }
  function Pv(n, r, l) {
    Fn[za++] = _i, Fn[za++] = bi, Fn[za++] = pa, pa = n;
    var o = _i;
    n = bi;
    var c = 32 - Or(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Or(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, _i = 1 << 32 - Or(r) + c | l << c | o, bi = d + n;
    } else _i = 1 << d | l << c | o, bi = n;
  }
  function Mc(n) {
    n.return !== null && (gu(n, 1), Pv(n, 1, 0));
  }
  function Lc(n) {
    for (; n === Nl; ) Nl = Ml[--Ll], Ml[Ll] = null, Ki = Ml[--Ll], Ml[Ll] = null;
    for (; n === pa; ) pa = Fn[--za], Fn[za] = null, bi = Fn[--za], Fn[za] = null, _i = Fn[--za], Fn[za] = null;
  }
  var Kr = null, qr = null, mn = !1, Aa = null;
  function Ed(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Vv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Kr = n, qr = Ri(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Kr = n, qr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = pa !== null ? { id: _i, overflow: bi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Kr = n, qr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Cd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Rd(n) {
    if (mn) {
      var r = qr;
      if (r) {
        var l = r;
        if (!Vv(n, r)) {
          if (Cd(n)) throw Error(E(418));
          r = Ri(l.nextSibling);
          var o = Kr;
          r && Vv(n, r) ? Ed(o, l) : (n.flags = n.flags & -4097 | 2, mn = !1, Kr = n);
        }
      } else {
        if (Cd(n)) throw Error(E(418));
        n.flags = n.flags & -4097 | 2, mn = !1, Kr = n;
      }
    }
  }
  function Xn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Kr = n;
  }
  function Nc(n) {
    if (n !== Kr) return !1;
    if (!mn) return Xn(n), mn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !_c(n.type, n.memoizedProps)), r && (r = qr)) {
      if (Cd(n)) throw ps(), Error(E(418));
      for (; r; ) Ed(n, r), r = Ri(r.nextSibling);
    }
    if (Xn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(E(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                qr = Ri(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        qr = null;
      }
    } else qr = Kr ? Ri(n.stateNode.nextSibling) : null;
    return !0;
  }
  function ps() {
    for (var n = qr; n; ) n = Ri(n.nextSibling);
  }
  function zl() {
    qr = Kr = null, mn = !1;
  }
  function qi(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var Sy = ve.ReactCurrentBatchConfig;
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
    function r(A, D) {
      if (n) {
        var H = A.deletions;
        H === null ? (A.deletions = [D], A.flags |= 16) : H.push(D);
      }
    }
    function l(A, D) {
      if (!n) return null;
      for (; D !== null; ) r(A, D), D = D.sibling;
      return null;
    }
    function o(A, D) {
      for (A = /* @__PURE__ */ new Map(); D !== null; ) D.key !== null ? A.set(D.key, D) : A.set(D.index, D), D = D.sibling;
      return A;
    }
    function c(A, D) {
      return A = Bl(A, D), A.index = 0, A.sibling = null, A;
    }
    function d(A, D, H) {
      return A.index = H, n ? (H = A.alternate, H !== null ? (H = H.index, H < D ? (A.flags |= 2, D) : H) : (A.flags |= 2, D)) : (A.flags |= 1048576, D);
    }
    function m(A) {
      return n && A.alternate === null && (A.flags |= 2), A;
    }
    function T(A, D, H, ce) {
      return D === null || D.tag !== 6 ? (D = Jd(H, A.mode, ce), D.return = A, D) : (D = c(D, H), D.return = A, D);
    }
    function b(A, D, H, ce) {
      var He = H.type;
      return He === Le ? se(A, D, H.props.children, ce, H.key) : D !== null && (D.elementType === He || typeof He == "object" && He !== null && He.$$typeof === kt && Bv(He) === D.type) ? (ce = c(D, H.props), ce.ref = Su(A, D, H), ce.return = A, ce) : (ce = $s(H.type, H.key, H.props, null, A.mode, ce), ce.ref = Su(A, D, H), ce.return = A, ce);
    }
    function $(A, D, H, ce) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== H.containerInfo || D.stateNode.implementation !== H.implementation ? (D = vf(H, A.mode, ce), D.return = A, D) : (D = c(D, H.children || []), D.return = A, D);
    }
    function se(A, D, H, ce, He) {
      return D === null || D.tag !== 7 ? (D = rl(H, A.mode, ce, He), D.return = A, D) : (D = c(D, H), D.return = A, D);
    }
    function de(A, D, H) {
      if (typeof D == "string" && D !== "" || typeof D == "number") return D = Jd("" + D, A.mode, H), D.return = A, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case Re:
            return H = $s(D.type, D.key, D.props, null, A.mode, H), H.ref = Su(A, null, D), H.return = A, H;
          case Be:
            return D = vf(D, A.mode, H), D.return = A, D;
          case kt:
            var ce = D._init;
            return de(A, ce(D._payload), H);
        }
        if (Zn(D) || $e(D)) return D = rl(D, A.mode, H, null), D.return = A, D;
        zc(A, D);
      }
      return null;
    }
    function ue(A, D, H, ce) {
      var He = D !== null ? D.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number") return He !== null ? null : T(A, D, "" + H, ce);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case Re:
            return H.key === He ? b(A, D, H, ce) : null;
          case Be:
            return H.key === He ? $(A, D, H, ce) : null;
          case kt:
            return He = H._init, ue(
              A,
              D,
              He(H._payload),
              ce
            );
        }
        if (Zn(H) || $e(H)) return He !== null ? null : se(A, D, H, ce, null);
        zc(A, H);
      }
      return null;
    }
    function Oe(A, D, H, ce, He) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number") return A = A.get(H) || null, T(D, A, "" + ce, He);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case Re:
            return A = A.get(ce.key === null ? H : ce.key) || null, b(D, A, ce, He);
          case Be:
            return A = A.get(ce.key === null ? H : ce.key) || null, $(D, A, ce, He);
          case kt:
            var Je = ce._init;
            return Oe(A, D, H, Je(ce._payload), He);
        }
        if (Zn(ce) || $e(ce)) return A = A.get(H) || null, se(D, A, ce, He, null);
        zc(D, ce);
      }
      return null;
    }
    function Fe(A, D, H, ce) {
      for (var He = null, Je = null, tt = D, at = D = 0, rr = null; tt !== null && at < H.length; at++) {
        tt.index > at ? (rr = tt, tt = null) : rr = tt.sibling;
        var Vt = ue(A, tt, H[at], ce);
        if (Vt === null) {
          tt === null && (tt = rr);
          break;
        }
        n && tt && Vt.alternate === null && r(A, tt), D = d(Vt, D, at), Je === null ? He = Vt : Je.sibling = Vt, Je = Vt, tt = rr;
      }
      if (at === H.length) return l(A, tt), mn && gu(A, at), He;
      if (tt === null) {
        for (; at < H.length; at++) tt = de(A, H[at], ce), tt !== null && (D = d(tt, D, at), Je === null ? He = tt : Je.sibling = tt, Je = tt);
        return mn && gu(A, at), He;
      }
      for (tt = o(A, tt); at < H.length; at++) rr = Oe(tt, A, at, H[at], ce), rr !== null && (n && rr.alternate !== null && tt.delete(rr.key === null ? at : rr.key), D = d(rr, D, at), Je === null ? He = rr : Je.sibling = rr, Je = rr);
      return n && tt.forEach(function(Il) {
        return r(A, Il);
      }), mn && gu(A, at), He;
    }
    function Ye(A, D, H, ce) {
      var He = $e(H);
      if (typeof He != "function") throw Error(E(150));
      if (H = He.call(H), H == null) throw Error(E(151));
      for (var Je = He = null, tt = D, at = D = 0, rr = null, Vt = H.next(); tt !== null && !Vt.done; at++, Vt = H.next()) {
        tt.index > at ? (rr = tt, tt = null) : rr = tt.sibling;
        var Il = ue(A, tt, Vt.value, ce);
        if (Il === null) {
          tt === null && (tt = rr);
          break;
        }
        n && tt && Il.alternate === null && r(A, tt), D = d(Il, D, at), Je === null ? He = Il : Je.sibling = Il, Je = Il, tt = rr;
      }
      if (Vt.done) return l(
        A,
        tt
      ), mn && gu(A, at), He;
      if (tt === null) {
        for (; !Vt.done; at++, Vt = H.next()) Vt = de(A, Vt.value, ce), Vt !== null && (D = d(Vt, D, at), Je === null ? He = Vt : Je.sibling = Vt, Je = Vt);
        return mn && gu(A, at), He;
      }
      for (tt = o(A, tt); !Vt.done; at++, Vt = H.next()) Vt = Oe(tt, A, at, Vt.value, ce), Vt !== null && (n && Vt.alternate !== null && tt.delete(Vt.key === null ? at : Vt.key), D = d(Vt, D, at), Je === null ? He = Vt : Je.sibling = Vt, Je = Vt);
      return n && tt.forEach(function(wh) {
        return r(A, wh);
      }), mn && gu(A, at), He;
    }
    function Nn(A, D, H, ce) {
      if (typeof H == "object" && H !== null && H.type === Le && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case Re:
            e: {
              for (var He = H.key, Je = D; Je !== null; ) {
                if (Je.key === He) {
                  if (He = H.type, He === Le) {
                    if (Je.tag === 7) {
                      l(A, Je.sibling), D = c(Je, H.props.children), D.return = A, A = D;
                      break e;
                    }
                  } else if (Je.elementType === He || typeof He == "object" && He !== null && He.$$typeof === kt && Bv(He) === Je.type) {
                    l(A, Je.sibling), D = c(Je, H.props), D.ref = Su(A, Je, H), D.return = A, A = D;
                    break e;
                  }
                  l(A, Je);
                  break;
                } else r(A, Je);
                Je = Je.sibling;
              }
              H.type === Le ? (D = rl(H.props.children, A.mode, ce, H.key), D.return = A, A = D) : (ce = $s(H.type, H.key, H.props, null, A.mode, ce), ce.ref = Su(A, D, H), ce.return = A, A = ce);
            }
            return m(A);
          case Be:
            e: {
              for (Je = H.key; D !== null; ) {
                if (D.key === Je) if (D.tag === 4 && D.stateNode.containerInfo === H.containerInfo && D.stateNode.implementation === H.implementation) {
                  l(A, D.sibling), D = c(D, H.children || []), D.return = A, A = D;
                  break e;
                } else {
                  l(A, D);
                  break;
                }
                else r(A, D);
                D = D.sibling;
              }
              D = vf(H, A.mode, ce), D.return = A, A = D;
            }
            return m(A);
          case kt:
            return Je = H._init, Nn(A, D, Je(H._payload), ce);
        }
        if (Zn(H)) return Fe(A, D, H, ce);
        if ($e(H)) return Ye(A, D, H, ce);
        zc(A, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, D !== null && D.tag === 6 ? (l(A, D.sibling), D = c(D, H), D.return = A, A = D) : (l(A, D), D = Jd(H, A.mode, ce), D.return = A, A = D), m(A)) : l(A, D);
    }
    return Nn;
  }
  var Dn = Eu(!0), be = Eu(!1), va = Na(null), Zr = null, So = null, Td = null;
  function wd() {
    Td = So = Zr = null;
  }
  function xd(n) {
    var r = va.current;
    cn(va), n._currentValue = r;
  }
  function _d(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Cn(n, r) {
    Zr = n, Td = So = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Pn = !0), n.firstContext = null);
  }
  function Ua(n) {
    var r = n._currentValue;
    if (Td !== n) if (n = { context: n, memoizedValue: r, next: null }, So === null) {
      if (Zr === null) throw Error(E(308));
      So = n, Zr.dependencies = { lanes: 0, firstContext: n };
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
    if (o = o.shared, Ot & 2) {
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
      var b = T, $ = b.next;
      b.next = null, m === null ? d = $ : m.next = $, m = b;
      var se = n.alternate;
      se !== null && (se = se.updateQueue, T = se.lastBaseUpdate, T !== m && (T === null ? se.firstBaseUpdate = $ : T.next = $, se.lastBaseUpdate = b));
    }
    if (d !== null) {
      var de = c.baseState;
      m = 0, se = $ = b = null, T = d;
      do {
        var ue = T.lane, Oe = T.eventTime;
        if ((o & ue) === ue) {
          se !== null && (se = se.next = {
            eventTime: Oe,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var Fe = n, Ye = T;
            switch (ue = r, Oe = l, Ye.tag) {
              case 1:
                if (Fe = Ye.payload, typeof Fe == "function") {
                  de = Fe.call(Oe, de, ue);
                  break e;
                }
                de = Fe;
                break e;
              case 3:
                Fe.flags = Fe.flags & -65537 | 128;
              case 0:
                if (Fe = Ye.payload, ue = typeof Fe == "function" ? Fe.call(Oe, de, ue) : Fe, ue == null) break e;
                de = N({}, de, ue);
                break e;
              case 2:
                ma = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, ue = c.effects, ue === null ? c.effects = [T] : ue.push(T));
        } else Oe = { eventTime: Oe, lane: ue, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, se === null ? ($ = se = Oe, b = de) : se = se.next = Oe, m |= ue;
        if (T = T.next, T === null) {
          if (T = c.shared.pending, T === null) break;
          ue = T, T = ue.next, ue.next = null, c.lastBaseUpdate = ue, c.shared.pending = null;
        }
      } while (!0);
      if (se === null && (b = de), c.baseState = b, c.firstBaseUpdate = $, c.lastBaseUpdate = se, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Li |= m, n.lanes = m, n.memoizedState = de;
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
  var hs = {}, ki = Na(hs), ms = Na(hs), ys = Na(hs);
  function Ru(n) {
    if (n === hs) throw Error(E(174));
    return n;
  }
  function Md(n, r) {
    switch (Ge(ys, r), Ge(ms, n), Ge(ki, hs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ca(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ca(r, n);
    }
    cn(ki), Ge(ki, r);
  }
  function Tu() {
    cn(ki), cn(ms), cn(ys);
  }
  function Iv(n) {
    Ru(ys.current);
    var r = Ru(ki.current), l = ca(r, n.type);
    r !== l && (Ge(ms, n), Ge(ki, l));
  }
  function Uc(n) {
    ms.current === n && (cn(ki), cn(ms));
  }
  var Rn = Na(0);
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
  function Ke() {
    for (var n = 0; n < gs.length; n++) gs[n]._workInProgressVersionPrimary = null;
    gs.length = 0;
  }
  var Ct = ve.ReactCurrentDispatcher, Ht = ve.ReactCurrentBatchConfig, Jt = 0, Pt = null, Hn = null, tr = null, Fc = !1, Ss = !1, wu = 0, ie = 0;
  function Ut() {
    throw Error(E(321));
  }
  function nt(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ai(n[l], r[l])) return !1;
    return !0;
  }
  function Ul(n, r, l, o, c, d) {
    if (Jt = d, Pt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ct.current = n === null || n.memoizedState === null ? Jc : xs, n = l(o, c), Ss) {
      d = 0;
      do {
        if (Ss = !1, wu = 0, 25 <= d) throw Error(E(301));
        d += 1, tr = Hn = null, r.updateQueue = null, Ct.current = ef, n = l(o, c);
      } while (Ss);
    }
    if (Ct.current = Du, r = Hn !== null && Hn.next !== null, Jt = 0, tr = Hn = Pt = null, Fc = !1, r) throw Error(E(300));
    return n;
  }
  function li() {
    var n = wu !== 0;
    return wu = 0, n;
  }
  function xr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return tr === null ? Pt.memoizedState = tr = n : tr = tr.next = n, tr;
  }
  function On() {
    if (Hn === null) {
      var n = Pt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Hn.next;
    var r = tr === null ? Pt.memoizedState : tr.next;
    if (r !== null) tr = r, Hn = n;
    else {
      if (n === null) throw Error(E(310));
      Hn = n, n = { memoizedState: Hn.memoizedState, baseState: Hn.baseState, baseQueue: Hn.baseQueue, queue: Hn.queue, next: null }, tr === null ? Pt.memoizedState = tr = n : tr = tr.next = n;
    }
    return tr;
  }
  function Ji(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function jl(n) {
    var r = On(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var o = Hn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var T = m = null, b = null, $ = d;
      do {
        var se = $.lane;
        if ((Jt & se) === se) b !== null && (b = b.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), o = $.hasEagerState ? $.eagerState : n(o, $.action);
        else {
          var de = {
            lane: se,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          b === null ? (T = b = de, m = o) : b = b.next = de, Pt.lanes |= se, Li |= se;
        }
        $ = $.next;
      } while ($ !== null && $ !== d);
      b === null ? m = o : b.next = T, ai(o, r.memoizedState) || (Pn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = b, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Pt.lanes |= d, Li |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function xu(n) {
    var r = On(), l = r.queue;
    if (l === null) throw Error(E(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ai(d, r.memoizedState) || (Pn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Hc() {
  }
  function Pc(n, r) {
    var l = Pt, o = On(), c = r(), d = !ai(o.memoizedState, c);
    if (d && (o.memoizedState = c, Pn = !0), o = o.queue, Es($c.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || tr !== null && tr.memoizedState.tag & 1) {
      if (l.flags |= 2048, _u(9, Bc.bind(null, l, o, c, r), void 0, null), Kn === null) throw Error(E(349));
      Jt & 30 || Vc(l, r, c);
    }
    return c;
  }
  function Vc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Pt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Pt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
    r !== null && Ur(r, n, 1, -1);
  }
  function Wc(n) {
    var r = xr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ji, lastRenderedState: n }, r.queue = n, n = n.dispatch = ku.bind(null, Pt, n), [r.memoizedState, n];
  }
  function _u(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Pt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Pt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Qc() {
    return On().memoizedState;
  }
  function Eo(n, r, l, o) {
    var c = xr();
    Pt.flags |= n, c.memoizedState = _u(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function Co(n, r, l, o) {
    var c = On();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Hn !== null) {
      var m = Hn.memoizedState;
      if (d = m.destroy, o !== null && nt(o, m.deps)) {
        c.memoizedState = _u(r, l, d, o);
        return;
      }
    }
    Pt.flags |= n, c.memoizedState = _u(1 | r, l, d, o);
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
    var l = On();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && nt(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Zc(n, r) {
    var l = On();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && nt(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ld(n, r, l) {
    return Jt & 21 ? (ai(l, r) || (l = Ju(), Pt.lanes |= l, Li |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Pn = !0), n.memoizedState = l);
  }
  function Ts(n, r) {
    var l = Ft;
    Ft = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Ht.transition;
    Ht.transition = {};
    try {
      n(!1), r();
    } finally {
      Ft = l, Ht.transition = o;
    }
  }
  function Nd() {
    return On().memoizedState;
  }
  function ws(n, r, l) {
    var o = Ni(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Jr(n)) Wv(r, l);
    else if (l = kd(n, r, l, o), l !== null) {
      var c = $n();
      Ur(l, n, o, c), rn(l, r, o);
    }
  }
  function ku(n, r, l) {
    var o = Ni(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Jr(n)) Wv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, T = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = T, ai(T, m)) {
          var b = r.interleaved;
          b === null ? (c.next = c, bd(r)) : (c.next = b.next, b.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = kd(n, r, c, o), l !== null && (c = $n(), Ur(l, n, o, c), rn(l, r, o));
    }
  }
  function Jr(n) {
    var r = n.alternate;
    return n === Pt || r !== null && r === Pt;
  }
  function Wv(n, r) {
    Ss = Fc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function rn(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, $i(n, l);
    }
  }
  var Du = { readContext: Ua, useCallback: Ut, useContext: Ut, useEffect: Ut, useImperativeHandle: Ut, useInsertionEffect: Ut, useLayoutEffect: Ut, useMemo: Ut, useReducer: Ut, useRef: Ut, useState: Ut, useDebugValue: Ut, useDeferredValue: Ut, useTransition: Ut, useMutableSource: Ut, useSyncExternalStore: Ut, useId: Ut, unstable_isNewReconciler: !1 }, Jc = { readContext: Ua, useCallback: function(n, r) {
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
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = ws.bind(null, Pt, n), [o.memoizedState, n];
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
    var o = Pt, c = xr();
    if (mn) {
      if (l === void 0) throw Error(E(407));
      l = l();
    } else {
      if (l = r(), Kn === null) throw Error(E(349));
      Jt & 30 || Vc(o, r, l);
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
    var n = xr(), r = Kn.identifierPrefix;
    if (mn) {
      var l = bi, o = _i;
      l = (o & ~(1 << 32 - Or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = wu++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ie++, r = ":" + r + "r" + l.toString(32) + ":";
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
      var r = On();
      return Ld(r, Hn.memoizedState, n);
    },
    useTransition: function() {
      var n = jl(Ji)[0], r = On().memoizedState;
      return [n, r];
    },
    useMutableSource: Hc,
    useSyncExternalStore: Pc,
    useId: Nd,
    unstable_isNewReconciler: !1
  }, ef = { readContext: Ua, useCallback: qc, useContext: Ua, useEffect: Es, useImperativeHandle: Kc, useInsertionEffect: Xc, useLayoutEffect: Cs, useMemo: Zc, useReducer: xu, useRef: Qc, useState: function() {
    return xu(Ji);
  }, useDebugValue: Rs, useDeferredValue: function(n) {
    var r = On();
    return Hn === null ? r.memoizedState = n : Ld(r, Hn.memoizedState, n);
  }, useTransition: function() {
    var n = xu(Ji)[0], r = On().memoizedState;
    return [n, r];
  }, useMutableSource: Hc, useSyncExternalStore: Pc, useId: Nd, unstable_isNewReconciler: !1 };
  function ui(n, r) {
    if (n && n.defaultProps) {
      r = N({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function zd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : N({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var tf = { isMounted: function(n) {
    return (n = n._reactInternals) ? vt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = $n(), c = Ni(n), d = Zi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Al(n, d, c), r !== null && (Ur(r, n, c, o), Ac(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = $n(), c = Ni(n), d = Zi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Al(n, d, c), r !== null && (Ur(r, n, c, o), Ac(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = $n(), o = Ni(n), c = Zi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Al(n, c, o), r !== null && (Ur(r, n, o, l), Ac(r, n, o));
  } };
  function Qv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !as(l, o) || !as(c, d) : !0;
  }
  function nf(n, r, l) {
    var o = !1, c = wr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ua(d) : (c = jn(r) ? Gr : xn.current, o = r.contextTypes, d = (o = o != null) ? Xr(n, c) : wr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tf, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Gv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && tf.enqueueReplaceState(r, r.state, null);
  }
  function _s(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Dd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ua(d) : (d = jn(r) ? Gr : xn.current, c.context = Xr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (zd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && tf.enqueueReplaceState(c, c.state, null), vs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Ou(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ce(o), o = o.return;
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
      bo || (bo = !0, Nu = o), Ud(n, r);
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
  var bs = ve.ReactCurrentOwner, Pn = !1;
  function sr(n, r, l, o) {
    r.child = n === null ? be(r, null, l, o) : Dn(r, n.child, l, o);
  }
  function ea(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Cn(r, c), o = Ul(n, r, l, o, d, c), l = li(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (mn && l && Mc(r), r.flags |= 1, sr(n, r, o, c), r.child);
  }
  function Mu(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Zd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, mt(n, r, d, o, c)) : (n = $s(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : as, l(m, o) && n.ref === r.ref) return Fa(n, r, c);
    }
    return r.flags |= 1, n = Bl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function mt(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (as(d, o) && n.ref === r.ref) if (Pn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Pn = !0);
      else return r.lanes = n.lanes, Fa(n, r, c);
    }
    return qv(n, r, l, o, c);
  }
  function ks(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ge(wo, ya), ya |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ge(wo, ya), ya |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Ge(wo, ya), ya |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Ge(wo, ya), ya |= o;
    return sr(n, r, c, l), r.child;
  }
  function Hd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qv(n, r, l, o, c) {
    var d = jn(l) ? Gr : xn.current;
    return d = Xr(r, d), Cn(r, c), l = Ul(n, r, l, o, d, c), o = li(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Fa(n, r, c)) : (mn && o && Mc(r), r.flags |= 1, sr(n, r, l, c), r.child);
  }
  function Zv(n, r, l, o, c) {
    if (jn(l)) {
      var d = !0;
      er(r);
    } else d = !1;
    if (Cn(r, c), r.stateNode === null) ja(n, r), nf(r, l, o), _s(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, T = r.memoizedProps;
      m.props = T;
      var b = m.context, $ = l.contextType;
      typeof $ == "object" && $ !== null ? $ = Ua($) : ($ = jn(l) ? Gr : xn.current, $ = Xr(r, $));
      var se = l.getDerivedStateFromProps, de = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      de || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (T !== o || b !== $) && Gv(r, m, o, $), ma = !1;
      var ue = r.memoizedState;
      m.state = ue, vs(r, o, m, c), b = r.memoizedState, T !== o || ue !== b || Gn.current || ma ? (typeof se == "function" && (zd(r, l, se, o), b = r.memoizedState), (T = ma || Qv(r, l, T, o, ue, b, $)) ? (de || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = b), m.props = o, m.state = b, m.context = $, o = T) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, $v(n, r), T = r.memoizedProps, $ = r.type === r.elementType ? T : ui(r.type, T), m.props = $, de = r.pendingProps, ue = m.context, b = l.contextType, typeof b == "object" && b !== null ? b = Ua(b) : (b = jn(l) ? Gr : xn.current, b = Xr(r, b));
      var Oe = l.getDerivedStateFromProps;
      (se = typeof Oe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (T !== de || ue !== b) && Gv(r, m, o, b), ma = !1, ue = r.memoizedState, m.state = ue, vs(r, o, m, c);
      var Fe = r.memoizedState;
      T !== de || ue !== Fe || Gn.current || ma ? (typeof Oe == "function" && (zd(r, l, Oe, o), Fe = r.memoizedState), ($ = ma || Qv(r, l, $, o, ue, Fe, b) || !1) ? (se || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Fe, b), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Fe, b)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || T === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Fe), m.props = o, m.state = Fe, m.context = b, o = $) : (typeof m.componentDidUpdate != "function" || T === n.memoizedProps && ue === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && ue === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ds(n, r, l, o, d, c);
  }
  function Ds(n, r, l, o, c, d) {
    Hd(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Dc(r, l, !1), Fa(n, r, d);
    o = r.stateNode, bs.current = r;
    var T = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Dn(r, n.child, null, d), r.child = Dn(r, null, T, d)) : sr(n, r, T, d), r.memoizedState = o.state, c && Dc(r, l, !0), r.child;
  }
  function Ro(n) {
    var r = n.stateNode;
    r.pendingContext ? Hv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Hv(n, r.context, !1), Md(n, r.containerInfo);
  }
  function Jv(n, r, l, o, c) {
    return zl(), qi(c), r.flags |= 256, sr(n, r, l, o), r.child;
  }
  var af = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function lf(n, r, l) {
    var o = r.pendingProps, c = Rn.current, d = !1, m = (r.flags & 128) !== 0, T;
    if ((T = m) || (T = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), T ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ge(Rn, c & 1), n === null)
      return Rd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = $l(m, o, 0, null), n = rl(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Pd(l), r.memoizedState = af, n) : Vd(r, m));
    if (c = n.memoizedState, c !== null && (T = c.dehydrated, T !== null)) return eh(n, r, m, o, T, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, T = c.sibling;
      var b = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = b, r.deletions = null) : (o = Bl(c, b), o.subtreeFlags = c.subtreeFlags & 14680064), T !== null ? d = Bl(T, d) : (d = rl(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Pd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = af, o;
    }
    return d = n.child, n = d.sibling, o = Bl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Vd(n, r) {
    return r = $l({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Os(n, r, l, o) {
    return o !== null && qi(o), Dn(r, n.child, null, l), n = Vd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function eh(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Ad(Error(E(422))), Os(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = $l({ mode: "visible", children: o.children }, c, 0, null), d = rl(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Dn(r, n.child, null, m), r.child.memoizedState = Pd(m), r.memoizedState = af, d);
    if (!(r.mode & 1)) return Os(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var T = o.dgst;
      return o = T, d = Error(E(419)), o = Ad(d, o, void 0), Os(n, r, m, o);
    }
    if (T = (m & n.childLanes) !== 0, Pn || T) {
      if (o = Kn, o !== null) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, ha(n, c), Ur(o, n, c, -1));
      }
      return qd(), o = Ad(Error(E(421))), Os(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = by.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, qr = Ri(c.nextSibling), Kr = r, mn = !0, Aa = null, n !== null && (Fn[za++] = _i, Fn[za++] = bi, Fn[za++] = pa, _i = n.id, bi = n.overflow, pa = r), r = Vd(r, o.children), r.flags |= 4096, r);
  }
  function Bd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), _d(n.return, r, l);
  }
  function Nr(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Di(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (sr(n, r, o.children, l), o = Rn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
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
    if (Ge(Rn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && jc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Nr(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && jc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Nr(r, !0, l, null, d);
        break;
      case "together":
        Nr(r, !1, null, null, void 0);
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
        Iv(r);
        break;
      case 1:
        jn(r.type) && er(r);
        break;
      case 4:
        Md(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ge(va, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ge(Rn, Rn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? lf(n, r, l) : (Ge(Rn, Rn.current & 1), n = Fa(n, r, l), n !== null ? n.sibling : null);
        Ge(Rn, Rn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Di(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ge(Rn, Rn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ks(n, r, l);
    }
    return Fa(n, r, l);
  }
  var Ha, Vn, th, nh;
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
  }, Vn = function() {
  }, th = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Ru(ki.current);
      var d = null;
      switch (l) {
        case "input":
          c = In(n, c), o = In(n, o), d = [];
          break;
        case "select":
          c = N({}, c, { value: void 0 }), o = N({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Wn(n, c), o = Wn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = kl);
      }
      fn(l, o);
      var m;
      l = null;
      for ($ in c) if (!o.hasOwnProperty($) && c.hasOwnProperty($) && c[$] != null) if ($ === "style") {
        var T = c[$];
        for (m in T) T.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (P.hasOwnProperty($) ? d || (d = []) : (d = d || []).push($, null));
      for ($ in o) {
        var b = o[$];
        if (T = c != null ? c[$] : void 0, o.hasOwnProperty($) && b !== T && (b != null || T != null)) if ($ === "style") if (T) {
          for (m in T) !T.hasOwnProperty(m) || b && b.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in b) b.hasOwnProperty(m) && T[m] !== b[m] && (l || (l = {}), l[m] = b[m]);
        } else l || (d || (d = []), d.push(
          $,
          l
        )), l = b;
        else $ === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, T = T ? T.__html : void 0, b != null && T !== b && (d = d || []).push($, b)) : $ === "children" ? typeof b != "string" && typeof b != "number" || (d = d || []).push($, "" + b) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (P.hasOwnProperty($) ? (b != null && $ === "onScroll" && It("scroll", n), d || T === b || (d = [])) : (d = d || []).push($, b));
      }
      l && (d = d || []).push("style", l);
      var $ = d;
      (r.updateQueue = $) && (r.flags |= 4);
    }
  }, nh = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ls(n, r) {
    if (!mn) switch (n.tailMode) {
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
        return nr(r), null;
      case 1:
        return jn(r.type) && yo(), nr(r), null;
      case 3:
        return o = r.stateNode, Tu(), cn(Gn), cn(xn), Ke(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Nc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (zu(Aa), Aa = null))), Vn(n, r), nr(r), null;
      case 5:
        Uc(r);
        var c = Ru(ys.current);
        if (l = r.type, n !== null && r.stateNode != null) th(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(E(166));
            return nr(r), null;
          }
          if (n = Ru(ki.current), Nc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ti] = r, o[cs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                It("cancel", o), It("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                It("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < us.length; c++) It(us[c], o);
                break;
              case "source":
                It("error", o);
                break;
              case "img":
              case "image":
              case "link":
                It(
                  "error",
                  o
                ), It("load", o);
                break;
              case "details":
                It("toggle", o);
                break;
              case "input":
                _n(o, d), It("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, It("invalid", o);
                break;
              case "textarea":
                Cr(o, d), It("invalid", o);
            }
            fn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var T = d[m];
              m === "children" ? typeof T == "string" ? o.textContent !== T && (d.suppressHydrationWarning !== !0 && xc(o.textContent, T, n), c = ["children", T]) : typeof T == "number" && o.textContent !== "" + T && (d.suppressHydrationWarning !== !0 && xc(
                o.textContent,
                T,
                n
              ), c = ["children", "" + T]) : P.hasOwnProperty(m) && T != null && m === "onScroll" && It("scroll", o);
            }
            switch (l) {
              case "input":
                nn(o), _a(o, d, !0);
                break;
              case "textarea":
                nn(o), An(o);
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
                  It("cancel", n), It("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  It("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < us.length; c++) It(us[c], n);
                  c = o;
                  break;
                case "source":
                  It("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  It(
                    "error",
                    n
                  ), It("load", n), c = o;
                  break;
                case "details":
                  It("toggle", n), c = o;
                  break;
                case "input":
                  _n(n, o), c = In(n, o), It("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = N({}, o, { value: void 0 }), It("invalid", n);
                  break;
                case "textarea":
                  Cr(n, o), c = Wn(n, o), It("invalid", n);
                  break;
                default:
                  c = o;
              }
              fn(l, c), T = c;
              for (d in T) if (T.hasOwnProperty(d)) {
                var b = T[d];
                d === "style" ? ln(n, b) : d === "dangerouslySetInnerHTML" ? (b = b ? b.__html : void 0, b != null && pi(n, b)) : d === "children" ? typeof b == "string" ? (l !== "textarea" || b !== "") && Te(n, b) : typeof b == "number" && Te(n, "" + b) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (P.hasOwnProperty(d) ? b != null && d === "onScroll" && It("scroll", n) : b != null && Ee(n, d, b, m));
              }
              switch (l) {
                case "input":
                  nn(n), _a(n, o, !1);
                  break;
                case "textarea":
                  nn(n), An(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Se(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? bn(n, !!o.multiple, d, !1) : o.defaultValue != null && bn(
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
          if (l = Ru(ys.current), Ru(ki.current), Nc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ti] = r, (d = o.nodeValue !== l) && (n = Kr, n !== null)) switch (n.tag) {
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
        if (cn(Rn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (mn && qr !== null && r.mode & 1 && !(r.flags & 128)) ps(), zl(), r.flags |= 98560, d = !1;
          else if (d = Nc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(E(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(E(317));
              d[Ti] = r;
            } else zl(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            nr(r), d = !1;
          } else Aa !== null && (zu(Aa), Aa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Rn.current & 1 ? Ln === 0 && (Ln = 3) : qd())), r.updateQueue !== null && (r.flags |= 4), nr(r), null);
      case 4:
        return Tu(), Vn(n, r), n === null && fo(r.stateNode.containerInfo), nr(r), null;
      case 10:
        return xd(r.type._context), nr(r), null;
      case 17:
        return jn(r.type) && yo(), nr(r), null;
      case 19:
        if (cn(Rn), d = r.memoizedState, d === null) return nr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ls(d, !1);
        else {
          if (Ln !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = jc(n), m !== null) {
              for (r.flags |= 128, Ls(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Ge(Rn, Rn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && ht() > _o && (r.flags |= 128, o = !0, Ls(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = jc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ls(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !mn) return nr(r), null;
          } else 2 * ht() - d.renderingStartTime > _o && l !== 1073741824 && (r.flags |= 128, o = !0, Ls(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = ht(), r.sibling = null, l = Rn.current, Ge(Rn, o ? l & 1 | 2 : l & 1), r) : (nr(r), null);
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
    switch (Lc(r), r.tag) {
      case 1:
        return jn(r.type) && yo(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Tu(), cn(Gn), cn(xn), Ke(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Uc(r), null;
      case 13:
        if (cn(Rn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(E(340));
          zl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return cn(Rn), null;
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
  var Ns = !1, _r = !1, Ey = typeof WeakSet == "function" ? WeakSet : Set, ze = null;
  function To(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      yn(n, r, o);
    }
    else l.current = null;
  }
  function of(n, r, l) {
    try {
      l();
    } catch (o) {
      yn(n, r, o);
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
          var m = 0, T = -1, b = -1, $ = 0, se = 0, de = n, ue = null;
          t: for (; ; ) {
            for (var Oe; de !== l || c !== 0 && de.nodeType !== 3 || (T = m + c), de !== d || o !== 0 && de.nodeType !== 3 || (b = m + o), de.nodeType === 3 && (m += de.nodeValue.length), (Oe = de.firstChild) !== null; )
              ue = de, de = Oe;
            for (; ; ) {
              if (de === n) break t;
              if (ue === l && ++$ === c && (T = m), ue === d && ++se === o && (b = m), (Oe = de.nextSibling) !== null) break;
              de = ue, ue = de.parentNode;
            }
            de = Oe;
          }
          l = T === -1 || b === -1 ? null : { start: T, end: b };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (mu = { focusedElem: n, selectionRange: l }, Oa = !1, ze = r; ze !== null; ) if (r = ze, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ze = n;
    else for (; ze !== null; ) {
      r = ze;
      try {
        var Fe = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Fe !== null) {
              var Ye = Fe.memoizedProps, Nn = Fe.memoizedState, A = r.stateNode, D = A.getSnapshotBeforeUpdate(r.elementType === r.type ? Ye : ui(r.type, Ye), Nn);
              A.__reactInternalSnapshotBeforeUpdate = D;
            }
            break;
          case 3:
            var H = r.stateNode.containerInfo;
            H.nodeType === 1 ? H.textContent = "" : H.nodeType === 9 && H.documentElement && H.removeChild(H.documentElement);
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
        yn(r, r.return, ce);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ze = n;
        break;
      }
      ze = r.return;
    }
    return Fe = ah, ah = !1, Fe;
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
  var Mn = null, zr = !1;
  function Ar(n, r, l) {
    for (l = l.child; l !== null; ) lh(n, r, l), l = l.sibling;
  }
  function lh(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(Sl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        _r || To(l, r);
      case 6:
        var o = Mn, c = zr;
        Mn = null, Ar(n, r, l), Mn = o, zr = c, Mn !== null && (zr ? (n = Mn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Mn.removeChild(l.stateNode));
        break;
      case 18:
        Mn !== null && (zr ? (n = Mn, l = l.stateNode, n.nodeType === 8 ? ho(n.parentNode, l) : n.nodeType === 1 && ho(n, l), ni(n)) : ho(Mn, l.stateNode));
        break;
      case 4:
        o = Mn, c = zr, Mn = l.stateNode.containerInfo, zr = !0, Ar(n, r, l), Mn = o, zr = c;
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
        Ar(n, r, l);
        break;
      case 1:
        if (!_r && (To(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (T) {
          yn(l, r, T);
        }
        Ar(n, r, l);
        break;
      case 21:
        Ar(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (_r = (o = _r) || l.memoizedState !== null, Ar(n, r, l), _r = o) : Ar(n, r, l);
        break;
      default:
        Ar(n, r, l);
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
              Mn = T.stateNode, zr = !1;
              break e;
            case 3:
              Mn = T.stateNode.containerInfo, zr = !0;
              break e;
            case 4:
              Mn = T.stateNode.containerInfo, zr = !0;
              break e;
          }
          T = T.return;
        }
        if (Mn === null) throw Error(E(160));
        lh(d, m, c), Mn = null, zr = !1;
        var b = c.alternate;
        b !== null && (b.return = null), c.return = null;
      } catch ($) {
        yn(c, r, $);
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
        if (oi(r, n), ta(n), o & 4) {
          try {
            zs(3, n, n.return), As(3, n);
          } catch (Ye) {
            yn(n, n.return, Ye);
          }
          try {
            zs(5, n, n.return);
          } catch (Ye) {
            yn(n, n.return, Ye);
          }
        }
        break;
      case 1:
        oi(r, n), ta(n), o & 512 && l !== null && To(l, l.return);
        break;
      case 5:
        if (oi(r, n), ta(n), o & 512 && l !== null && To(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Te(c, "");
          } catch (Ye) {
            yn(n, n.return, Ye);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, T = n.type, b = n.updateQueue;
          if (n.updateQueue = null, b !== null) try {
            T === "input" && d.type === "radio" && d.name != null && Qt(c, d), Jn(T, m);
            var $ = Jn(T, d);
            for (m = 0; m < b.length; m += 2) {
              var se = b[m], de = b[m + 1];
              se === "style" ? ln(c, de) : se === "dangerouslySetInnerHTML" ? pi(c, de) : se === "children" ? Te(c, de) : Ee(c, se, de, $);
            }
            switch (T) {
              case "input":
                wn(c, d);
                break;
              case "textarea":
                Ga(c, d);
                break;
              case "select":
                var ue = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Oe = d.value;
                Oe != null ? bn(c, !!d.multiple, Oe, !1) : ue !== !!d.multiple && (d.defaultValue != null ? bn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : bn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[cs] = d;
          } catch (Ye) {
            yn(n, n.return, Ye);
          }
        }
        break;
      case 6:
        if (oi(r, n), ta(n), o & 4) {
          if (n.stateNode === null) throw Error(E(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ye) {
            yn(n, n.return, Ye);
          }
        }
        break;
      case 3:
        if (oi(r, n), ta(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ni(r.containerInfo);
        } catch (Ye) {
          yn(n, n.return, Ye);
        }
        break;
      case 4:
        oi(r, n), ta(n);
        break;
      case 13:
        oi(r, n), ta(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Qd = ht())), o & 4 && uh(n);
        break;
      case 22:
        if (se = l !== null && l.memoizedState !== null, n.mode & 1 ? (_r = ($ = _r) || se, oi(r, n), _r = $) : oi(r, n), ta(n), o & 8192) {
          if ($ = n.memoizedState !== null, (n.stateNode.isHidden = $) && !se && n.mode & 1) for (ze = n, se = n.child; se !== null; ) {
            for (de = ze = se; ze !== null; ) {
              switch (ue = ze, Oe = ue.child, ue.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zs(4, ue, ue.return);
                  break;
                case 1:
                  To(ue, ue.return);
                  var Fe = ue.stateNode;
                  if (typeof Fe.componentWillUnmount == "function") {
                    o = ue, l = ue.return;
                    try {
                      r = o, Fe.props = r.memoizedProps, Fe.state = r.memoizedState, Fe.componentWillUnmount();
                    } catch (Ye) {
                      yn(o, l, Ye);
                    }
                  }
                  break;
                case 5:
                  To(ue, ue.return);
                  break;
                case 22:
                  if (ue.memoizedState !== null) {
                    js(de);
                    continue;
                  }
              }
              Oe !== null ? (Oe.return = ue, ze = Oe) : js(de);
            }
            se = se.sibling;
          }
          e: for (se = null, de = n; ; ) {
            if (de.tag === 5) {
              if (se === null) {
                se = de;
                try {
                  c = de.stateNode, $ ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (T = de.stateNode, b = de.memoizedProps.style, m = b != null && b.hasOwnProperty("display") ? b.display : null, T.style.display = Yt("display", m));
                } catch (Ye) {
                  yn(n, n.return, Ye);
                }
              }
            } else if (de.tag === 6) {
              if (se === null) try {
                de.stateNode.nodeValue = $ ? "" : de.memoizedProps;
              } catch (Ye) {
                yn(n, n.return, Ye);
              }
            } else if ((de.tag !== 22 && de.tag !== 23 || de.memoizedState === null || de === n) && de.child !== null) {
              de.child.return = de, de = de.child;
              continue;
            }
            if (de === n) break e;
            for (; de.sibling === null; ) {
              if (de.return === null || de.return === n) break e;
              se === de && (se = null), de = de.return;
            }
            se === de && (se = null), de.sibling.return = de.return, de = de.sibling;
          }
        }
        break;
      case 19:
        oi(r, n), ta(n), o & 4 && uh(n);
        break;
      case 21:
        break;
      default:
        oi(
          r,
          n
        ), ta(n);
    }
  }
  function ta(n) {
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
      } catch (b) {
        yn(n, n.return, b);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Cy(n, r, l) {
    ze = n, Id(n);
  }
  function Id(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ze !== null; ) {
      var c = ze, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Ns;
        if (!m) {
          var T = c.alternate, b = T !== null && T.memoizedState !== null || _r;
          T = Ns;
          var $ = _r;
          if (Ns = m, (_r = b) && !$) for (ze = c; ze !== null; ) m = ze, b = m.child, m.tag === 22 && m.memoizedState !== null ? Wd(c) : b !== null ? (b.return = m, ze = b) : Wd(c);
          for (; d !== null; ) ze = d, Id(d), d = d.sibling;
          ze = c, Ns = T, _r = $;
        }
        oh(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ze = d) : oh(n);
    }
  }
  function oh(n) {
    for (; ze !== null; ) {
      var r = ze;
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
                    var de = se.dehydrated;
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
        } catch (ue) {
          yn(r, r.return, ue);
        }
      }
      if (r === n) {
        ze = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ze = l;
        break;
      }
      ze = r.return;
    }
  }
  function js(n) {
    for (; ze !== null; ) {
      var r = ze;
      if (r === n) {
        ze = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ze = l;
        break;
      }
      ze = r.return;
    }
  }
  function Wd(n) {
    for (; ze !== null; ) {
      var r = ze;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              As(4, r);
            } catch (b) {
              yn(r, l, b);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (b) {
                yn(r, c, b);
              }
            }
            var d = r.return;
            try {
              $d(r);
            } catch (b) {
              yn(r, d, b);
            }
            break;
          case 5:
            var m = r.return;
            try {
              $d(r);
            } catch (b) {
              yn(r, m, b);
            }
        }
      } catch (b) {
        yn(r, r.return, b);
      }
      if (r === n) {
        ze = null;
        break;
      }
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, ze = T;
        break;
      }
      ze = r.return;
    }
  }
  var Ry = Math.ceil, Hl = ve.ReactCurrentDispatcher, Lu = ve.ReactCurrentOwner, cr = ve.ReactCurrentBatchConfig, Ot = 0, Kn = null, Bn = null, fr = 0, ya = 0, wo = Na(0), Ln = 0, Fs = null, Li = 0, xo = 0, cf = 0, Hs = null, na = null, Qd = 0, _o = 1 / 0, ga = null, bo = !1, Nu = null, Pl = null, ff = !1, tl = null, Ps = 0, Vl = 0, ko = null, Vs = -1, br = 0;
  function $n() {
    return Ot & 6 ? ht() : Vs !== -1 ? Vs : Vs = ht();
  }
  function Ni(n) {
    return n.mode & 1 ? Ot & 2 && fr !== 0 ? fr & -fr : Sy.transition !== null ? (br === 0 && (br = Ju()), br) : (n = Ft, n !== 0 || (n = window.event, n = n === void 0 ? 16 : lo(n.type)), n) : 1;
  }
  function Ur(n, r, l, o) {
    if (50 < Vl) throw Vl = 0, ko = null, Error(E(185));
    Bi(n, l, o), (!(Ot & 2) || n !== Kn) && (n === Kn && (!(Ot & 2) && (xo |= l), Ln === 4 && si(n, fr)), ra(n, o), l === 1 && Ot === 0 && !(r.mode & 1) && (_o = ht() + 500, go && xi()));
  }
  function ra(n, r) {
    var l = n.callbackNode;
    uu(n, r);
    var o = ti(n, n === Kn ? fr : 0);
    if (o === 0) l !== null && lr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && lr(l), r === 1) n.tag === 0 ? Ol(Gd.bind(null, n)) : Oc(Gd.bind(null, n)), vo(function() {
        !(Ot & 6) && xi();
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
    if (Vs = -1, br = 0, Ot & 6) throw Error(E(327));
    var l = n.callbackNode;
    if (Do() && n.callbackNode !== l) return null;
    var o = ti(n, n === Kn ? fr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = pf(n, o);
    else {
      r = o;
      var c = Ot;
      Ot |= 2;
      var d = ch();
      (Kn !== n || fr !== r) && (ga = null, _o = ht() + 500, nl(n, r));
      do
        try {
          fh();
          break;
        } catch (T) {
          sh(n, T);
        }
      while (!0);
      wd(), Hl.current = d, Ot = c, Bn !== null ? r = 0 : (Kn = null, fr = 0, r = Ln);
    }
    if (r !== 0) {
      if (r === 2 && (c = Cl(n), c !== 0 && (o = c, r = Bs(n, c))), r === 1) throw l = Fs, nl(n, 0), si(n, o), ra(n, ht()), l;
      if (r === 6) si(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Ty(c) && (r = pf(n, o), r === 2 && (d = Cl(n), d !== 0 && (o = d, r = Bs(n, d))), r === 1)) throw l = Fs, nl(n, 0), si(n, o), ra(n, ht()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(E(345));
          case 2:
            Uu(n, na, ga);
            break;
          case 3:
            if (si(n, o), (o & 130023424) === o && (r = Qd + 500 - ht(), 10 < r)) {
              if (ti(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                $n(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = bc(Uu.bind(null, n, na, ga), r);
              break;
            }
            Uu(n, na, ga);
            break;
          case 4:
            if (si(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Or(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = ht() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Ry(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = bc(Uu.bind(null, n, na, ga), o);
              break;
            }
            Uu(n, na, ga);
            break;
          case 5:
            Uu(n, na, ga);
            break;
          default:
            throw Error(E(329));
        }
      }
    }
    return ra(n, ht()), n.callbackNode === l ? df.bind(null, n) : null;
  }
  function Bs(n, r) {
    var l = Hs;
    return n.current.memoizedState.isDehydrated && (nl(n, r).flags |= 256), n = pf(n, r), n !== 2 && (r = na, na = l, r !== null && zu(r)), n;
  }
  function zu(n) {
    na === null ? na = n : na.push.apply(na, n);
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
      var l = 31 - Or(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Gd(n) {
    if (Ot & 6) throw Error(E(327));
    Do();
    var r = ti(n, 0);
    if (!(r & 1)) return ra(n, ht()), null;
    var l = pf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Cl(n);
      o !== 0 && (r = o, l = Bs(n, o));
    }
    if (l === 1) throw l = Fs, nl(n, 0), si(n, r), ra(n, ht()), l;
    if (l === 6) throw Error(E(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Uu(n, na, ga), ra(n, ht()), null;
  }
  function Xd(n, r) {
    var l = Ot;
    Ot |= 1;
    try {
      return n(r);
    } finally {
      Ot = l, Ot === 0 && (_o = ht() + 500, go && xi());
    }
  }
  function Au(n) {
    tl !== null && tl.tag === 0 && !(Ot & 6) && Do();
    var r = Ot;
    Ot |= 1;
    var l = cr.transition, o = Ft;
    try {
      if (cr.transition = null, Ft = 1, n) return n();
    } finally {
      Ft = o, cr.transition = l, Ot = r, !(Ot & 6) && xi();
    }
  }
  function Kd() {
    ya = wo.current, cn(wo);
  }
  function nl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Sd(l)), Bn !== null) for (l = Bn.return; l !== null; ) {
      var o = l;
      switch (Lc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && yo();
          break;
        case 3:
          Tu(), cn(Gn), cn(xn), Ke();
          break;
        case 5:
          Uc(o);
          break;
        case 4:
          Tu();
          break;
        case 13:
          cn(Rn);
          break;
        case 19:
          cn(Rn);
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
    if (Kn = n, Bn = n = Bl(n.current, null), fr = ya = r, Ln = 0, Fs = null, cf = xo = Li = 0, na = Hs = null, Cu !== null) {
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
      var l = Bn;
      try {
        if (wd(), Ct.current = Du, Fc) {
          for (var o = Pt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Fc = !1;
        }
        if (Jt = 0, tr = Hn = Pt = null, Ss = !1, wu = 0, Lu.current = null, l === null || l.return === null) {
          Ln = 1, Fs = r, Bn = null;
          break;
        }
        e: {
          var d = n, m = l.return, T = l, b = r;
          if (r = fr, T.flags |= 32768, b !== null && typeof b == "object" && typeof b.then == "function") {
            var $ = b, se = T, de = se.tag;
            if (!(se.mode & 1) && (de === 0 || de === 11 || de === 15)) {
              var ue = se.alternate;
              ue ? (se.updateQueue = ue.updateQueue, se.memoizedState = ue.memoizedState, se.lanes = ue.lanes) : (se.updateQueue = null, se.memoizedState = null);
            }
            var Oe = Kv(m);
            if (Oe !== null) {
              Oe.flags &= -257, Fl(Oe, m, T, d, r), Oe.mode & 1 && Fd(d, $, r), r = Oe, b = $;
              var Fe = r.updateQueue;
              if (Fe === null) {
                var Ye = /* @__PURE__ */ new Set();
                Ye.add(b), r.updateQueue = Ye;
              } else Fe.add(b);
              break e;
            } else {
              if (!(r & 1)) {
                Fd(d, $, r), qd();
                break e;
              }
              b = Error(E(426));
            }
          } else if (mn && T.mode & 1) {
            var Nn = Kv(m);
            if (Nn !== null) {
              !(Nn.flags & 65536) && (Nn.flags |= 256), Fl(Nn, m, T, d, r), qi(Ou(b, T));
              break e;
            }
          }
          d = b = Ou(b, T), Ln !== 4 && (Ln = 2), Hs === null ? Hs = [d] : Hs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var A = Xv(d, b, r);
                Yv(d, A);
                break e;
              case 1:
                T = b;
                var D = d.type, H = d.stateNode;
                if (!(d.flags & 128) && (typeof D.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (Pl === null || !Pl.has(H)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ce = jd(d, T, r);
                  Yv(d, ce);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ph(l);
      } catch (He) {
        r = He, Bn === l && l !== null && (Bn = l = l.return);
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
    (Ln === 0 || Ln === 3 || Ln === 2) && (Ln = 4), Kn === null || !(Li & 268435455) && !(xo & 268435455) || si(Kn, fr);
  }
  function pf(n, r) {
    var l = Ot;
    Ot |= 2;
    var o = ch();
    (Kn !== n || fr !== r) && (ga = null, nl(n, r));
    do
      try {
        wy();
        break;
      } catch (c) {
        sh(n, c);
      }
    while (!0);
    if (wd(), Ot = l, Hl.current = o, Bn !== null) throw Error(E(261));
    return Kn = null, fr = 0, Ln;
  }
  function wy() {
    for (; Bn !== null; ) dh(Bn);
  }
  function fh() {
    for (; Bn !== null && !qa(); ) dh(Bn);
  }
  function dh(n) {
    var r = yh(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? ph(n) : Bn = r, Lu.current = null;
  }
  function ph(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = uf(l, r), l !== null) {
          l.flags &= 32767, Bn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Ln = 6, Bn = null;
          return;
        }
      } else if (l = rh(l, r, ya), l !== null) {
        Bn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Bn = r;
        return;
      }
      Bn = r = n;
    } while (r !== null);
    Ln === 0 && (Ln = 5);
  }
  function Uu(n, r, l) {
    var o = Ft, c = cr.transition;
    try {
      cr.transition = null, Ft = 1, xy(n, r, l, o);
    } finally {
      cr.transition = c, Ft = o;
    }
    return null;
  }
  function xy(n, r, l, o) {
    do
      Do();
    while (tl !== null);
    if (Ot & 6) throw Error(E(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(E(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Zf(n, d), n === Kn && (Bn = Kn = null, fr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ff || (ff = !0, gh(lu, function() {
      return Do(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = cr.transition, cr.transition = null;
      var m = Ft;
      Ft = 1;
      var T = Ot;
      Ot |= 4, Lu.current = null, ih(n, l), Yd(l, n), so(mu), Oa = !!ss, mu = ss = null, n.current = l, Cy(l), Za(), Ot = T, Ft = m, cr.transition = d;
    } else n.current = l;
    if (ff && (ff = !1, tl = n, Ps = c), d = n.pendingLanes, d === 0 && (Pl = null), Xo(l.stateNode), ra(n, ht()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (bo) throw bo = !1, n = Nu, Nu = null, n;
    return Ps & 1 && n.tag !== 0 && Do(), d = n.pendingLanes, d & 1 ? n === ko ? Vl++ : (Vl = 0, ko = n) : Vl = 0, xi(), null;
  }
  function Do() {
    if (tl !== null) {
      var n = to(Ps), r = cr.transition, l = Ft;
      try {
        if (cr.transition = null, Ft = 16 > n ? 16 : n, tl === null) var o = !1;
        else {
          if (n = tl, tl = null, Ps = 0, Ot & 6) throw Error(E(331));
          var c = Ot;
          for (Ot |= 4, ze = n.current; ze !== null; ) {
            var d = ze, m = d.child;
            if (ze.flags & 16) {
              var T = d.deletions;
              if (T !== null) {
                for (var b = 0; b < T.length; b++) {
                  var $ = T[b];
                  for (ze = $; ze !== null; ) {
                    var se = ze;
                    switch (se.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zs(8, se, d);
                    }
                    var de = se.child;
                    if (de !== null) de.return = se, ze = de;
                    else for (; ze !== null; ) {
                      se = ze;
                      var ue = se.sibling, Oe = se.return;
                      if (sf(se), se === $) {
                        ze = null;
                        break;
                      }
                      if (ue !== null) {
                        ue.return = Oe, ze = ue;
                        break;
                      }
                      ze = Oe;
                    }
                  }
                }
                var Fe = d.alternate;
                if (Fe !== null) {
                  var Ye = Fe.child;
                  if (Ye !== null) {
                    Fe.child = null;
                    do {
                      var Nn = Ye.sibling;
                      Ye.sibling = null, Ye = Nn;
                    } while (Ye !== null);
                  }
                }
                ze = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ze = m;
            else e: for (; ze !== null; ) {
              if (d = ze, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  zs(9, d, d.return);
              }
              var A = d.sibling;
              if (A !== null) {
                A.return = d.return, ze = A;
                break e;
              }
              ze = d.return;
            }
          }
          var D = n.current;
          for (ze = D; ze !== null; ) {
            m = ze;
            var H = m.child;
            if (m.subtreeFlags & 2064 && H !== null) H.return = m, ze = H;
            else e: for (m = D; ze !== null; ) {
              if (T = ze, T.flags & 2048) try {
                switch (T.tag) {
                  case 0:
                  case 11:
                  case 15:
                    As(9, T);
                }
              } catch (He) {
                yn(T, T.return, He);
              }
              if (T === m) {
                ze = null;
                break e;
              }
              var ce = T.sibling;
              if (ce !== null) {
                ce.return = T.return, ze = ce;
                break e;
              }
              ze = T.return;
            }
          }
          if (Ot = c, xi(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(Sl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Ft = l, cr.transition = r;
      }
    }
    return !1;
  }
  function vh(n, r, l) {
    r = Ou(l, r), r = Xv(n, r, 1), n = Al(n, r, 1), r = $n(), n !== null && (Bi(n, 1, r), ra(n, r));
  }
  function yn(n, r, l) {
    if (n.tag === 3) vh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        vh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pl === null || !Pl.has(o))) {
          n = Ou(l, n), n = jd(r, n, 1), r = Al(r, n, 1), n = $n(), r !== null && (Bi(r, 1, n), ra(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function _y(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = $n(), n.pingedLanes |= n.suspendedLanes & l, Kn === n && (fr & l) === l && (Ln === 4 || Ln === 3 && (fr & 130023424) === fr && 500 > ht() - Qd ? nl(n, 0) : cf |= l), ra(n, r);
  }
  function hh(n, r) {
    r === 0 && (n.mode & 1 ? (r = da, da <<= 1, !(da & 130023424) && (da = 4194304)) : r = 1);
    var l = $n();
    n = ha(n, r), n !== null && (Bi(n, r, l), ra(n, l));
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
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Gn.current) Pn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Pn = !1, Ms(n, r, l);
      Pn = !!(n.flags & 131072);
    }
    else Pn = !1, mn && r.flags & 1048576 && Pv(r, Ki, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ja(n, r), n = r.pendingProps;
        var c = Xr(r, xn.current);
        Cn(r, l), c = Ul(null, r, o, n, c, l);
        var d = li();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(o) ? (d = !0, er(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Dd(r), c.updater = tf, r.stateNode = c, c._reactInternals = r, _s(r, o, n, l), r = Ds(null, r, o, !0, d, l)) : (r.tag = 0, mn && d && Mc(r), sr(null, r, c, l), r = r.child), r;
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
              r = ea(null, r, o, n, l);
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
          } else for (qr = Ri(r.stateNode.containerInfo.firstChild), Kr = r, mn = !0, Aa = null, l = be(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (zl(), o === c) {
              r = Fa(n, r, l);
              break e;
            }
            sr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Iv(r), n === null && Rd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, _c(o, c) ? m = null : d !== null && _c(o, d) && (r.flags |= 32), Hd(n, r), sr(n, r, m, l), r.child;
      case 6:
        return n === null && Rd(r), null;
      case 13:
        return lf(n, r, l);
      case 4:
        return Md(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Dn(r, null, o, l) : sr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ui(o, c), ea(n, r, o, c, l);
      case 7:
        return sr(n, r, r.pendingProps, l), r.child;
      case 8:
        return sr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return sr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Ge(va, o._currentValue), o._currentValue = m, d !== null) if (ai(d.value, m)) {
            if (d.children === c.children && !Gn.current) {
              r = Fa(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var T = d.dependencies;
            if (T !== null) {
              m = d.child;
              for (var b = T.firstContext; b !== null; ) {
                if (b.context === o) {
                  if (d.tag === 1) {
                    b = Zi(-1, l & -l), b.tag = 2;
                    var $ = d.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var se = $.pending;
                      se === null ? b.next = b : (b.next = se.next, se.next = b), $.pending = b;
                    }
                  }
                  d.lanes |= l, b = d.alternate, b !== null && (b.lanes |= l), _d(
                    d.return,
                    l,
                    r
                  ), T.lanes |= l;
                  break;
                }
                b = b.next;
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
          sr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Cn(r, l), c = Ua(c), o = o(c), r.flags |= 1, sr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ui(o, r.pendingProps), c = ui(o.type, c), Mu(n, r, o, c, l);
      case 15:
        return mt(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ui(o, c), ja(n, r), r.tag = 1, jn(o) ? (n = !0, er(r)) : n = !1, Cn(r, l), nf(r, o, c), _s(r, o, c, l), Ds(null, r, o, !0, n, l);
      case 19:
        return Di(n, r, l);
      case 22:
        return ks(n, r, l);
    }
    throw Error(E(156, r.tag));
  };
  function gh(n, r) {
    return dn(n, r);
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
      if (n = n.$$typeof, n === ct) return 11;
      if (n === _t) return 14;
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
      case Le:
        return rl(l.children, c, d, r);
      case ut:
        m = 8, c |= 8;
        break;
      case dt:
        return n = Pa(12, l, r, c | 2), n.elementType = dt, n.lanes = d, n;
      case Ae:
        return n = Pa(13, l, r, c), n.elementType = Ae, n.lanes = d, n;
      case Nt:
        return n = Pa(19, l, r, c), n.elementType = Nt, n.lanes = d, n;
      case je:
        return $l(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case it:
            m = 10;
            break e;
          case wt:
            m = 9;
            break e;
          case ct:
            m = 11;
            break e;
          case _t:
            m = 14;
            break e;
          case kt:
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
    return n = Pa(22, n, o, r), n.elementType = je, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
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
  function hf(n, r, l, o, c, d, m, T, b) {
    return n = new Sh(n, r, l, T, b), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Dd(d), n;
  }
  function Oy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Be, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function ep(n) {
    if (!n) return wr;
    n = n._reactInternals;
    e: {
      if (vt(n) !== n || n.tag !== 1) throw Error(E(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (jn(r.type)) {
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
      if (jn(l)) return ds(n, l, r);
    }
    return r;
  }
  function Eh(n, r, l, o, c, d, m, T, b) {
    return n = hf(l, o, !0, n, c, d, m, T, b), n.context = ep(null), l = n.current, o = $n(), c = Ni(l), d = Zi(o, c), d.callback = r ?? null, Al(l, d, c), n.current.lanes = c, Bi(n, c, o), ra(n, o), n;
  }
  function mf(n, r, l, o) {
    var c = r.current, d = $n(), m = Ni(c);
    return l = ep(l), r.context === null ? r.context = l : r.pendingContext = l, r = Zi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Al(c, r, m), n !== null && (Ur(n, c, m, d), Ac(n, c, m)), m;
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
      var r = lt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Qn.length && r !== 0 && r < Qn[l].priority; l++) ;
      Qn.splice(l, 0, n), l === 0 && Zo(n);
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
      var T = o;
      o = function() {
        var $ = yf(b);
        T.call($);
      };
    }
    var b = hf(n, 0, !1, null, null, !1, !1, "", Rh);
    return n._reactRootContainer = b, n[Gi] = b.current, fo(n.nodeType === 8 ? n.parentNode : n), Au(function() {
      mf(r, b, l, o);
    }), b;
  }
  function Ys(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var T = c;
        c = function() {
          var b = yf(m);
          T.call(b);
        };
      }
      mf(r, m, n, c);
    } else m = My(l, r, n, c, o);
    return yf(m);
  }
  zt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ei(r.pendingLanes);
          l !== 0 && ($i(r, l | 1), ra(r, ht()), !(Ot & 6) && (_o = ht() + 500, xi()));
        }
        break;
      case 13:
        Au(function() {
          var o = ha(n, 1);
          if (o !== null) {
            var c = $n();
            Ur(o, n, 1, c);
          }
        }), gf(n, 1);
    }
  }, Ko = function(n) {
    if (n.tag === 13) {
      var r = ha(n, 134217728);
      if (r !== null) {
        var l = $n();
        Ur(r, n, 134217728, l);
      }
      gf(n, 134217728);
    }
  }, yi = function(n) {
    if (n.tag === 13) {
      var r = Ni(n), l = ha(n, r);
      if (l !== null) {
        var o = $n();
        Ur(l, n, r, o);
      }
      gf(n, r);
    }
  }, lt = function() {
    return Ft;
  }, no = function(n, r) {
    var l = Ft;
    try {
      return Ft = n, r();
    } finally {
      Ft = l;
    }
  }, Xt = function(n, r, l) {
    switch (r) {
      case "input":
        if (wn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = En(o);
              if (!c) throw Error(E(90));
              Er(o), wn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Ga(n, l);
        break;
      case "select":
        r = l.value, r != null && bn(n, !!l.multiple, r, !1);
    }
  }, ru = Xd, ml = Au;
  var Ly = { usingClientEntryPoint: !1, Events: [Xe, ii, En, Vi, nu, Xd] }, Is = { findFiberByHostInstance: yu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Th = { bundleType: Is.bundleType, version: Is.version, rendererPackageName: Is.rendererPackageName, rendererConfig: Is.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = kn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Is.findFiberByHostInstance || Ch, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yl.isDisabled && Yl.supportsFiber) try {
      Sl = Yl.inject(Th), Wr = Yl;
    } catch {
    }
  }
  return Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ly, Wa.createPortal = function(n, r) {
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
    return n = kn(r), n = n === null ? null : n.stateNode, n;
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
function Lk() {
  return CT || (CT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var S = an, R = kT(), E = S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, z = !1;
    function P(e) {
      z = e;
    }
    function I(e) {
      if (!z) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ee("warn", e, a);
      }
    }
    function y(e) {
      if (!z) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        ee("error", e, a);
      }
    }
    function ee(e, t, a) {
      {
        var i = E.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var W = 0, U = 1, oe = 2, q = 3, te = 4, L = 5, fe = 6, Z = 7, G = 8, le = 9, re = 10, Ee = 11, ve = 12, Re = 13, Be = 14, Le = 15, ut = 16, dt = 17, it = 18, wt = 19, ct = 21, Ae = 22, Nt = 23, _t = 24, kt = 25, je = !0, me = !1, $e = !1, N = !1, w = !1, M = !0, he = !0, ge = !0, Ce = !0, Ve = /* @__PURE__ */ new Set(), ne = {}, Se = {};
    function Ie(e, t) {
      pt(e, t), pt(e + "Capture", t);
    }
    function pt(e, t) {
      ne[e] && y("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ne[e] = t;
      {
        var a = e.toLowerCase();
        Se[a] = e, e === "onDoubleClick" && (Se.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ve.add(t[i]);
    }
    var nn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Er = Object.prototype.hasOwnProperty;
    function hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function In(e) {
      try {
        return _n(e), !1;
      } catch {
        return !0;
      }
    }
    function _n(e) {
      return "" + e;
    }
    function Qt(e, t) {
      if (In(e))
        return y("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, hn(e)), _n(e);
    }
    function wn(e) {
      if (In(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hn(e)), _n(e);
    }
    function _a(e, t) {
      if (In(e))
        return y("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, hn(e)), _n(e);
    }
    function sa(e, t) {
      if (In(e))
        return y("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, hn(e)), _n(e);
    }
    function Zn(e) {
      if (In(e))
        return y("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", hn(e)), _n(e);
    }
    function bn(e) {
      if (In(e))
        return y("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", hn(e)), _n(e);
    }
    var Wn = 0, Cr = 1, Ga = 2, An = 3, Rr = 4, ca = 5, Xa = 6, pi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Te = pi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", We = new RegExp("^[" + pi + "][" + Te + "]*$"), gt = {}, Yt = {};
    function ln(e) {
      return Er.call(Yt, e) ? !0 : Er.call(gt, e) ? !1 : We.test(e) ? (Yt[e] = !0, !0) : (gt[e] = !0, y("Invalid attribute name: `%s`", e), !1);
    }
    function gn(e, t, a) {
      return t !== null ? t.type === Wn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fn(e, t, a, i) {
      if (a !== null && a.type === Wn)
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
      if (t === null || typeof t > "u" || fn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case An:
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
    function un(e) {
      return Xt.hasOwnProperty(e) ? Xt[e] : null;
    }
    function Gt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ga || t === An || t === Rr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Xt = {}, fa = [
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
      Xt[e] = new Gt(
        e,
        Wn,
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
      Xt[t] = new Gt(
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
      Xt[e] = new Gt(
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
      Xt[e] = new Gt(
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
      Xt[e] = new Gt(
        e,
        An,
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
      Xt[e] = new Gt(
        e,
        An,
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
      Xt[e] = new Gt(
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
      Xt[e] = new Gt(
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
      Xt[e] = new Gt(
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
      Xt[t] = new Gt(
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
      Xt[t] = new Gt(
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
      Xt[t] = new Gt(
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
      Xt[e] = new Gt(
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
    Xt[Vi] = new Gt(
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
      Xt[e] = new Gt(
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
        Qt(a, t), i.sanitizeURL && ml("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Rr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Jn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Jn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === An)
            return a;
          f = e.getAttribute(s);
        }
        return Jn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function au(e, t, a, i) {
      {
        if (!ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Qt(a, t), u === "" + a ? a : u;
      }
    }
    function kr(e, t, a, i) {
      var u = un(t);
      if (!gn(t, u, i)) {
        if (Jn(t, a, u, i) && (a = null), i || u === null) {
          if (ln(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Qt(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === An ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var g = u.attributeName, C = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(g);
        else {
          var O = u.type, k;
          O === An || O === Rr && a === !0 ? k = "" : (Qt(a, g), k = "" + a, u.sanitizeURL && ml(k.toString())), C ? e.setAttributeNS(C, g, k) : e.setAttribute(g, k);
        }
      }
    }
    var Dr = Symbol.for("react.element"), ir = Symbol.for("react.portal"), vi = Symbol.for("react.fragment"), Ka = Symbol.for("react.strict_mode"), hi = Symbol.for("react.profiler"), mi = Symbol.for("react.provider"), _ = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), vt = Symbol.for("react.memo"), ot = Symbol.for("react.lazy"), Rt = Symbol.for("react.scope"), Et = Symbol.for("react.debug_trace_mode"), kn = Symbol.for("react.offscreen"), on = Symbol.for("react.legacy_hidden"), dn = Symbol.for("react.cache"), lr = Symbol.for("react.tracing_marker"), qa = Symbol.iterator, Za = "@@iterator";
    function ht(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = qa && e[qa] || e[Za];
      return typeof t == "function" ? t : null;
    }
    var yt = Object.assign, Ja = 0, iu, lu, gl, Ku, Sl, Wr, Xo;
    function Or() {
    }
    Or.__reactDisabledLog = !0;
    function fc() {
      {
        if (Ja === 0) {
          iu = console.log, lu = console.info, gl = console.warn, Ku = console.error, Sl = console.group, Wr = console.groupCollapsed, Xo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Or,
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
            log: yt({}, e, {
              value: iu
            }),
            info: yt({}, e, {
              value: lu
            }),
            warn: yt({}, e, {
              value: gl
            }),
            error: yt({}, e, {
              value: Ku
            }),
            group: yt({}, e, {
              value: Sl
            }),
            groupCollapsed: yt({}, e, {
              value: Wr
            }),
            groupEnd: yt({}, e, {
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
                    var O = `
` + p[g].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && ti.set(e, O), O;
                  }
                while (g >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        ei = !1, qu.current = s, dc(), Error.prepareStackTrace = u;
      }
      var k = e ? e.displayName || e.name : "", V = k ? da(k) : "";
      return typeof e == "function" && ti.set(e, V), V;
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
        case _e:
          return da("Suspense");
        case Ue:
          return da("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ae:
            return Ju(e.render);
          case vt:
            return Bi(e.type, t, a);
          case ot: {
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
        case L:
          return da(e.type);
        case ut:
          return da("Lazy");
        case Re:
          return da("Suspense");
        case wt:
          return da("SuspenseList");
        case W:
        case oe:
        case Le:
          return Ju(e.type);
        case Ee:
          return Ju(e.type.render);
        case U:
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
    function Ft(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function to(e) {
      return e.displayName || "Context";
    }
    function zt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case vi:
          return "Fragment";
        case ir:
          return "Portal";
        case hi:
          return "Profiler";
        case Ka:
          return "StrictMode";
        case _e:
          return "Suspense";
        case Ue:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var t = e;
            return to(t) + ".Consumer";
          case mi:
            var a = e;
            return to(a._context) + ".Provider";
          case ae:
            return Ft(e, e.render, "ForwardRef");
          case vt:
            var i = e.displayName || null;
            return i !== null ? i : zt(e.type) || "Memo";
          case ot: {
            var u = e, s = u._payload, f = u._init;
            try {
              return zt(f(s));
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
    function lt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _t:
          return "Cache";
        case le:
          var i = a;
          return yi(i) + ".Consumer";
        case re:
          var u = a;
          return yi(u._context) + ".Provider";
        case it:
          return "DehydratedFragment";
        case Ee:
          return Ko(a, a.render, "ForwardRef");
        case Z:
          return "Fragment";
        case L:
          return a;
        case te:
          return "Portal";
        case q:
          return "Root";
        case fe:
          return "Text";
        case ut:
          return zt(a);
        case G:
          return a === Ka ? "StrictMode" : "Mode";
        case Ae:
          return "Offscreen";
        case ve:
          return "Profiler";
        case ct:
          return "Scope";
        case Re:
          return "Suspense";
        case wt:
          return "SuspenseList";
        case kt:
          return "TracingMarker";
        case U:
        case W:
        case dt:
        case oe:
        case Be:
        case Le:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var no = E.ReactDebugCurrentFrame, ur = null, gi = !1;
    function Mr() {
      {
        if (ur === null)
          return null;
        var e = ur._debugOwner;
        if (e !== null && typeof e < "u")
          return lt(e);
      }
      return null;
    }
    function Si() {
      return ur === null ? "" : $i(ur);
    }
    function pn() {
      no.getCurrentStack = null, ur = null, gi = !1;
    }
    function Kt(e) {
      no.getCurrentStack = e === null ? null : Si, ur = e, gi = !1;
    }
    function Rl() {
      return ur;
    }
    function Qn(e) {
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
          return bn(e), e;
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
      bn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            bn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            bn(p), i = "" + p;
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
      var a = e, i = t.checked, u = yt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function ri(e, t) {
      qo("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ao && (y("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), ao = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ro && (y("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component", t.type), ro = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ka(t.value != null ? t.value : i),
        controlled: io(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && kr(a, "checked", i, !1);
    }
    function x(e, t) {
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
      t.hasOwnProperty("value") ? qe(a, t.type, u) : t.hasOwnProperty("defaultValue") && qe(a, t.type, ka(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function B(e, t, a) {
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
      x(a, t), ye(a, t);
    }
    function ye(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Qt(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Vh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Ei(f), x(f, p);
          }
        }
      }
    }
    function qe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Oa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Lr(e._wrapperState.initialValue) : e.defaultValue !== Lr(a) && (e.defaultValue = Lr(a)));
    }
    var xe = !1, et = !1, Tt = !1;
    function At(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? S.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || et || (et = !0, y("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Tt || (Tt = !0, y("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !xe && (y("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), xe = !0);
    }
    function sn(e, t) {
      t.value != null && e.setAttribute("value", Lr(ka(t.value)));
    }
    var qt = Array.isArray;
    function St(e) {
      return qt(e);
    }
    var Zt;
    Zt = !1;
    function Sn() {
      var e = Mr();
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
            var i = St(e[a]);
            e.multiple && !i ? y("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Sn()) : !e.multiple && i && y("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Sn());
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
        for (var C = Lr(ka(a)), O = null, k = 0; k < u.length; k++) {
          if (u[k].value === C) {
            u[k].selected = !0, i && (u[k].defaultSelected = !0);
            return;
          }
          O === null && !u[k].disabled && (O = u[k]);
        }
        O !== null && (O.selected = !0);
      }
    }
    function es(e, t) {
      return yt({}, t, {
        value: void 0
      });
    }
    function fu(e, t) {
      var a = e;
      Jo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Zt && (y("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Zt = !0);
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
      var i = yt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Lr(a._wrapperState.initialValue)
      });
      return i;
    }
    function rd(e, t) {
      var a = e;
      qo("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cv && (y("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Mr() || "A component"), cv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          y("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (St(u)) {
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
    }), Qr = 1, Wi = 3, Un = 8, Qi = 9, od = 11, uo = function(e, t) {
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
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(ns.hasOwnProperty(e) && ns[e]) ? t + "px" : (sa(t, e), ("" + t).trim());
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
    }, as = yt({
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
        if (Er.call(so, t) && so[t])
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
      var or = {}, hd = /^on./, Sc = /^on[^A-Z]/, Dv = new RegExp("^(aria)-[" + Te + "]*$"), Ov = new RegExp("^(aria)[A-Z][" + Te + "]*$");
      pu = function(e, t, a, i) {
        if (Er.call(or, t) && or[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return y("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), or[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return y("Invalid event handler property `%s`. Did you mean `%s`?", t, p), or[t] = !0, !0;
          if (hd.test(t))
            return y("Unknown event handler property `%s`. It will be ignored.", t), or[t] = !0, !0;
        } else if (hd.test(t))
          return Sc.test(t) && y("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), or[t] = !0, !0;
        if (Dv.test(t) || Ov.test(t))
          return !0;
        if (u === "innerhtml")
          return y("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), or[t] = !0, !0;
        if (u === "aria")
          return y("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), or[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return y("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), or[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return y("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), or[t] = !0, !0;
        var v = un(t), g = v !== null && v.type === Wn;
        if (is.hasOwnProperty(u)) {
          var C = is[u];
          if (C !== t)
            return y("Invalid DOM property `%s`. Did you mean `%s`?", t, C), or[t] = !0, !0;
        } else if (!g && t !== u)
          return y("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), or[t] = !0, !0;
        return typeof a == "boolean" && fn(t, a, v, !1) ? (a ? y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : y('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), or[t] = !0, !0) : g ? !0 : fn(t, a, v, !1) ? (or[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === An && (y("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), or[t] = !0), !0);
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
    function Lv(e, t, a) {
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
    var Cc = null, hu = null, It = null;
    function Rc(e) {
      var t = Lo(e);
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
      hu ? It ? It.push(e) : It = [e] : hu = e;
    }
    function Nv() {
      return hu !== null || It !== null;
    }
    function wc() {
      if (hu) {
        var e = hu, t = It;
        if (hu = null, It = null, Rc(e), t)
          for (var a = 0; a < t.length; a++)
            Rc(t[a]);
      }
    }
    var po = function(e, t) {
      return e(t);
    }, os = function() {
    }, bl = !1;
    function zv() {
      var e = Nv();
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
    if (nn)
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
        var C = document.createEvent("Event"), O = !1, k = !0, V = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function X() {
          Sd.removeEventListener(K, Ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var ke = Array.prototype.slice.call(arguments, 3);
        function Ze() {
          O = !0, X(), a.apply(i, ke), k = !1;
        }
        var Qe, Lt = !1, xt = !1;
        function j(F) {
          if (Qe = F.error, Lt = !0, Qe === null && F.colno === 0 && F.lineno === 0 && (xt = !0), F.defaultPrevented && Qe != null && typeof Qe == "object")
            try {
              Qe._suppressLogging = !0;
            } catch {
            }
        }
        var K = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", j), Sd.addEventListener(K, Ze, !1), C.initEvent(K, !1, !1), Sd.dispatchEvent(C), Y && Object.defineProperty(window, "event", Y), O && k && (Lt ? xt && (Qe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Qe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Qe)), window.removeEventListener("error", j), !O)
          return X(), _c.apply(this, arguments);
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
    var Xe = (
      /*                      */
      0
    ), ii = (
      /*                */
      1
    ), En = (
      /*                    */
      2
    ), Dt = (
      /*                       */
      4
    ), La = (
      /*                */
      16
    ), Na = (
      /*                 */
      32
    ), cn = (
      /*                     */
      64
    ), Ge = (
      /*                   */
      128
    ), wr = (
      /*            */
      256
    ), xn = (
      /*                          */
      512
    ), Gn = (
      /*                     */
      1024
    ), Gr = (
      /*                      */
      2048
    ), Xr = (
      /*                    */
      4096
    ), jn = (
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
      Dt | Gn | 0
    ), Ll = En | Dt | La | Na | xn | Xr | jn, Nl = Dt | cn | xn | jn, Ki = Gr | La, Fn = Xi | Oc | go, za = E.ReactCurrentOwner;
    function pa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (En | Xr)) !== Xe && (a = t.return), i = t.return;
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
    function bi(e) {
      return e.tag === q ? e.stateNode.containerInfo : null;
    }
    function gu(e) {
      return pa(e) === e;
    }
    function Pv(e) {
      {
        var t = za.current;
        if (t !== null && t.tag === U) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || y("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", lt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = mo(e);
      return u ? pa(u) === u : !1;
    }
    function Mc(e) {
      if (pa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Lc(e) {
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
      if (i.tag !== q)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Kr(e) {
      var t = Lc(e);
      return t !== null ? qr(t) : null;
    }
    function qr(e) {
      if (e.tag === L || e.tag === fe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = qr(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function mn(e) {
      var t = Lc(e);
      return t !== null ? Aa(t) : null;
    }
    function Aa(e) {
      if (e.tag === L || e.tag === fe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== te) {
          var a = Aa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ed = R.unstable_scheduleCallback, Vv = R.unstable_cancelCallback, Cd = R.unstable_shouldYield, Rd = R.unstable_requestPaint, Xn = R.unstable_now, Nc = R.unstable_getCurrentPriorityLevel, ps = R.unstable_ImmediatePriority, zl = R.unstable_UserBlockingPriority, qi = R.unstable_NormalPriority, Sy = R.unstable_LowPriority, Su = R.unstable_IdlePriority, zc = R.unstable_yieldValue, Bv = R.unstable_setDisableYieldValue, Eu = null, Dn = null, be = null, va = !1, Zr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function So(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return y("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        he && (e = yt({}, e, {
          getLaneLabelMap: Cu,
          injectProfilingHooks: Ua
        })), Eu = t.inject(e), Dn = t;
      } catch (a) {
        y("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Td(e, t) {
      if (Dn && typeof Dn.onScheduleFiberRoot == "function")
        try {
          Dn.onScheduleFiberRoot(Eu, e, t);
        } catch (a) {
          va || (va = !0, y("React instrumentation encountered an error: %s", a));
        }
    }
    function wd(e, t) {
      if (Dn && typeof Dn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ge) === Ge;
          if (ge) {
            var i;
            switch (t) {
              case Nr:
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
            Dn.onCommitFiberRoot(Eu, e, i, a);
          }
        } catch (u) {
          va || (va = !0, y("React instrumentation encountered an error: %s", u));
        }
    }
    function xd(e) {
      if (Dn && typeof Dn.onPostCommitFiberRoot == "function")
        try {
          Dn.onPostCommitFiberRoot(Eu, e);
        } catch (t) {
          va || (va = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function _d(e) {
      if (Dn && typeof Dn.onCommitFiberUnmount == "function")
        try {
          Dn.onCommitFiberUnmount(Eu, e);
        } catch (t) {
          va || (va = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Cn(e) {
      if (typeof zc == "function" && (Bv(e), P(e)), Dn && typeof Dn.setStrictMode == "function")
        try {
          Dn.setStrictMode(Eu, e);
        } catch (t) {
          va || (va = !0, y("React instrumentation encountered an error: %s", t));
        }
    }
    function Ua(e) {
      be = e;
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
      be !== null && typeof be.markCommitStarted == "function" && be.markCommitStarted(e);
    }
    function kd() {
      be !== null && typeof be.markCommitStopped == "function" && be.markCommitStopped();
    }
    function ha(e) {
      be !== null && typeof be.markComponentRenderStarted == "function" && be.markComponentRenderStarted(e);
    }
    function ma() {
      be !== null && typeof be.markComponentRenderStopped == "function" && be.markComponentRenderStopped();
    }
    function Dd(e) {
      be !== null && typeof be.markComponentPassiveEffectMountStarted == "function" && be.markComponentPassiveEffectMountStarted(e);
    }
    function $v() {
      be !== null && typeof be.markComponentPassiveEffectMountStopped == "function" && be.markComponentPassiveEffectMountStopped();
    }
    function Zi(e) {
      be !== null && typeof be.markComponentPassiveEffectUnmountStarted == "function" && be.markComponentPassiveEffectUnmountStarted(e);
    }
    function Al() {
      be !== null && typeof be.markComponentPassiveEffectUnmountStopped == "function" && be.markComponentPassiveEffectUnmountStopped();
    }
    function Ac(e) {
      be !== null && typeof be.markComponentLayoutEffectMountStarted == "function" && be.markComponentLayoutEffectMountStarted(e);
    }
    function Yv() {
      be !== null && typeof be.markComponentLayoutEffectMountStopped == "function" && be.markComponentLayoutEffectMountStopped();
    }
    function vs(e) {
      be !== null && typeof be.markComponentLayoutEffectUnmountStarted == "function" && be.markComponentLayoutEffectUnmountStarted(e);
    }
    function Od() {
      be !== null && typeof be.markComponentLayoutEffectUnmountStopped == "function" && be.markComponentLayoutEffectUnmountStopped();
    }
    function hs(e, t, a) {
      be !== null && typeof be.markComponentErrored == "function" && be.markComponentErrored(e, t, a);
    }
    function ki(e, t, a) {
      be !== null && typeof be.markComponentSuspended == "function" && be.markComponentSuspended(e, t, a);
    }
    function ms(e) {
      be !== null && typeof be.markLayoutEffectsStarted == "function" && be.markLayoutEffectsStarted(e);
    }
    function ys() {
      be !== null && typeof be.markLayoutEffectsStopped == "function" && be.markLayoutEffectsStopped();
    }
    function Ru(e) {
      be !== null && typeof be.markPassiveEffectsStarted == "function" && be.markPassiveEffectsStarted(e);
    }
    function Md() {
      be !== null && typeof be.markPassiveEffectsStopped == "function" && be.markPassiveEffectsStopped();
    }
    function Tu(e) {
      be !== null && typeof be.markRenderStarted == "function" && be.markRenderStarted(e);
    }
    function Iv() {
      be !== null && typeof be.markRenderYielded == "function" && be.markRenderYielded();
    }
    function Uc() {
      be !== null && typeof be.markRenderStopped == "function" && be.markRenderStopped();
    }
    function Rn(e) {
      be !== null && typeof be.markRenderScheduled == "function" && be.markRenderScheduled(e);
    }
    function jc(e, t) {
      be !== null && typeof be.markForceUpdateScheduled == "function" && be.markForceUpdateScheduled(e, t);
    }
    function gs(e, t) {
      be !== null && typeof be.markStateUpdateScheduled == "function" && be.markStateUpdateScheduled(e, t);
    }
    var Ke = (
      /*                         */
      0
    ), Ct = (
      /*                 */
      1
    ), Ht = (
      /*                    */
      2
    ), Jt = (
      /*               */
      8
    ), Pt = (
      /*              */
      16
    ), Hn = Math.clz32 ? Math.clz32 : Ss, tr = Math.log, Fc = Math.LN2;
    function Ss(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (tr(t) / Fc | 0) | 0;
    }
    var wu = 31, ie = (
      /*                        */
      0
    ), Ut = (
      /*                          */
      0
    ), nt = (
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
    ), On = (
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
    ), Ld = bu, Ts = (
      /*          */
      134217728
    ), Nd = (
      /*                          */
      268435455
    ), ws = (
      /*               */
      268435456
    ), ku = (
      /*                        */
      536870912
    ), Jr = (
      /*                   */
      1073741824
    );
    function Wv(e) {
      {
        if (e & nt)
          return "Sync";
        if (e & Ul)
          return "InputContinuousHydration";
        if (e & li)
          return "InputContinuous";
        if (e & xr)
          return "DefaultHydration";
        if (e & On)
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
        if (e & Jr)
          return "Offscreen";
      }
    }
    var rn = -1, Du = xu, Jc = bu;
    function xs(e) {
      switch (Fl(e)) {
        case nt:
          return nt;
        case Ul:
          return Ul;
        case li:
          return li;
        case xr:
          return xr;
        case On:
          return On;
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
        case Jr:
          return Jr;
        default:
          return y("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ef(e, t) {
      var a = e.pendingLanes;
      if (a === ie)
        return ie;
      var i = ie, u = e.suspendedLanes, s = e.pingedLanes, f = a & Nd;
      if (f !== ie) {
        var p = f & ~u;
        if (p !== ie)
          i = xs(p);
        else {
          var v = f & s;
          v !== ie && (i = xs(v));
        }
      } else {
        var g = a & ~u;
        g !== ie ? i = xs(g) : s !== ie && (i = xs(s));
      }
      if (i === ie)
        return ie;
      if (t !== ie && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ie) {
        var C = Fl(i), O = Fl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          C >= O || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          C === On && (O & jl) !== ie
        )
          return t;
      }
      (i & li) !== ie && (i |= a & On);
      var k = e.entangledLanes;
      if (k !== ie)
        for (var V = e.entanglements, Y = i & k; Y > 0; ) {
          var X = Pn(Y), ke = 1 << X;
          i |= V[X], Y &= ~ke;
        }
      return i;
    }
    function ui(e, t) {
      for (var a = e.eventTimes, i = rn; t > 0; ) {
        var u = Pn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function zd(e, t) {
      switch (e) {
        case nt:
        case Ul:
        case li:
          return t + 250;
        case xr:
        case On:
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
          return rn;
        case Ts:
        case ws:
        case ku:
        case Jr:
          return rn;
        default:
          return y("Should have found matching lanes. This is a bug in React."), rn;
      }
    }
    function tf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Pn(f), v = 1 << p, g = s[p];
        g === rn ? ((v & i) === ie || (v & u) !== ie) && (s[p] = zd(v, t)) : g <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Qv(e) {
      return xs(e.pendingLanes);
    }
    function nf(e) {
      var t = e.pendingLanes & ~Jr;
      return t !== ie ? t : t & Jr ? Jr : ie;
    }
    function Gv(e) {
      return (e & nt) !== ie;
    }
    function _s(e) {
      return (e & Nd) !== ie;
    }
    function Ou(e) {
      return (e & Cs) === e;
    }
    function Ad(e) {
      var t = nt | li | On;
      return (e & t) === ie;
    }
    function Ud(e) {
      return (e & jl) === e;
    }
    function rf(e, t) {
      var a = Ul | li | xr | On;
      return (t & a) !== ie;
    }
    function Xv(e, t) {
      return (t & e.expiredLanes) !== ie;
    }
    function jd(e) {
      return (e & jl) !== ie;
    }
    function Fd() {
      var e = Du;
      return Du <<= 1, (Du & jl) === ie && (Du = xu), e;
    }
    function Kv() {
      var e = Jc;
      return Jc <<= 1, (Jc & Cs) === ie && (Jc = bu), e;
    }
    function Fl(e) {
      return e & -e;
    }
    function bs(e) {
      return Fl(e);
    }
    function Pn(e) {
      return 31 - Hn(e);
    }
    function sr(e) {
      return Pn(e);
    }
    function ea(e, t) {
      return (e & t) !== ie;
    }
    function Mu(e, t) {
      return (e & t) === t;
    }
    function mt(e, t) {
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
      return e !== Ut && e < t ? e : t;
    }
    function Ds(e) {
      for (var t = [], a = 0; a < wu; a++)
        t.push(e);
      return t;
    }
    function Ro(e, t, a) {
      e.pendingLanes |= t, t !== ku && (e.suspendedLanes = ie, e.pingedLanes = ie);
      var i = e.eventTimes, u = sr(t);
      i[u] = a;
    }
    function Jv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Pn(i), s = 1 << u;
        a[u] = rn, i &= ~s;
      }
    }
    function af(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Pd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ie, e.pingedLanes = ie, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Pn(f), v = 1 << p;
        i[p] = ie, u[p] = rn, s[p] = rn, f &= ~v;
      }
    }
    function lf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Pn(u), f = 1 << s;
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
        case On:
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
          i = Ut;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ut ? Ut : i;
    }
    function Os(e, t, a) {
      if (Zr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = sr(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function eh(e, t) {
      if (Zr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = sr(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Bd(e, t) {
      return null;
    }
    var Nr = nt, Di = li, ja = On, Fa = ku, Ms = Ut;
    function Ha() {
      return Ms;
    }
    function Vn(e) {
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
    function Ls(e, t) {
      return e > t ? e : t;
    }
    function nr(e, t) {
      return e !== 0 && e < t;
    }
    function rh(e) {
      var t = Fl(e);
      return nr(Nr, t) ? nr(Di, t) ? _s(t) ? ja : Fa : Di : Nr;
    }
    function uf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ns;
    function _r(e) {
      Ns = e;
    }
    function Ey(e) {
      Ns(e);
    }
    var ze;
    function To(e) {
      ze = e;
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
    var sf = !1, Us = [], el = null, Oi = null, Mi = null, Mn = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map(), Ar = [], lh = [
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
          Mn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          zr.delete(i);
          break;
        }
      }
    }
    function ta(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = oi(t, a, i, u, s);
        if (t !== null) {
          var p = Lo(t);
          p !== null && ze(p);
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
          return el = ta(el, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Oi = ta(Oi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Mi = ta(Mi, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, g = v.pointerId;
          return Mn.set(g, ta(Mn.get(g) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var C = u, O = C.pointerId;
          return zr.set(O, ta(zr.get(O) || null, e, t, a, i, C)), !0;
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
      }, i = 0; i < Ar.length && nr(t, Ar[i].priority); i++)
        ;
      Ar.splice(i, 0, a), i === 0 && Id(a);
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
          var f = Lo(i);
          return f !== null && ze(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Wd(e, t, a) {
      js(e) && a.delete(t);
    }
    function Ry() {
      sf = !1, el !== null && js(el) && (el = null), Oi !== null && js(Oi) && (Oi = null), Mi !== null && js(Mi) && (Mi = null), Mn.forEach(Wd), zr.forEach(Wd);
    }
    function Hl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, sf || (sf = !0, R.unstable_scheduleCallback(R.unstable_NormalPriority, Ry)));
    }
    function Lu(e) {
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
      Mn.forEach(i), zr.forEach(i);
      for (var u = 0; u < Ar.length; u++) {
        var s = Ar[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ar.length > 0; ) {
        var f = Ar[0];
        if (f.blockedOn !== null)
          break;
        Id(f), f.blockedOn === null && Ar.shift();
      }
    }
    var cr = E.ReactCurrentBatchConfig, Ot = !0;
    function Kn(e) {
      Ot = !!e;
    }
    function Bn() {
      return Ot;
    }
    function fr(e, t, a) {
      var i = cf(t), u;
      switch (i) {
        case Nr:
          u = ya;
          break;
        case Di:
          u = wo;
          break;
        case ja:
        default:
          u = Ln;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ya(e, t, a, i) {
      var u = Ha(), s = cr.transition;
      cr.transition = null;
      try {
        Vn(Nr), Ln(e, t, a, i);
      } finally {
        Vn(u), cr.transition = s;
      }
    }
    function wo(e, t, a, i) {
      var u = Ha(), s = cr.transition;
      cr.transition = null;
      try {
        Vn(Di), Ln(e, t, a, i);
      } finally {
        Vn(u), cr.transition = s;
      }
    }
    function Ln(e, t, a, i) {
      Ot && Fs(e, t, a, i);
    }
    function Fs(e, t, a, i) {
      var u = xo(e, t, a, i);
      if (u === null) {
        Hy(e, t, i, Li, a), Yd(e, i);
        return;
      }
      if (Cy(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Yd(e, i), t & Ma && uh(e)) {
        for (; u !== null; ) {
          var s = Lo(u);
          s !== null && Ey(s);
          var f = xo(e, t, a, i);
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
    function xo(e, t, a, i) {
      Li = null;
      var u = gd(i), s = Gs(u);
      if (s !== null) {
        var f = pa(s);
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
              return bi(f);
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
          return Nr;
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
          var t = Nc();
          switch (t) {
            case ps:
              return Nr;
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
    function na(e, t, a) {
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
    var ga = null, bo = null, Nu = null;
    function Pl(e) {
      return ga = e, bo = Ps(), !0;
    }
    function ff() {
      ga = null, bo = null, Nu = null;
    }
    function tl() {
      if (Nu)
        return Nu;
      var e, t = bo, a = t.length, i, u = Ps(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Nu = u.slice(e, p), Nu;
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
      return yt(t.prototype, {
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
    var $n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ni = br($n), Ur = yt({}, $n, {
      view: 0,
      detail: 0
    }), ra = br(Ur), df, Bs, zu;
    function Ty(e) {
      e !== zu && (zu && e.type === "mousemove" ? (df = e.screenX - zu.screenX, Bs = e.screenY - zu.screenY) : (df = 0, Bs = 0), zu = e);
    }
    var si = yt({}, Ur, {
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
      getModifierState: yn,
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
    }), Gd = br(si), Xd = yt({}, si, {
      dataTransfer: 0
    }), Au = br(Xd), Kd = yt({}, Ur, {
      relatedTarget: 0
    }), nl = br(Kd), sh = yt({}, $n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ch = br(sh), qd = yt({}, $n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), pf = br(qd), wy = yt({}, $n, {
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
    function yn(e) {
      return vh;
    }
    var _y = yt({}, Ur, {
      key: xy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: yn,
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
    }), hh = br(_y), by = yt({}, si, {
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
    }), mh = br(by), yh = yt({}, Ur, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: yn
    }), gh = br(yh), ky = yt({}, $n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Pa = br(ky), Zd = yt({}, si, {
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
    }), Dy = br(Zd), Bl = [9, 13, 27, 32], $s = 229, rl = nn && "CompositionEvent" in window, $l = null;
    nn && "documentMode" in document && ($l = document.documentMode);
    var Jd = nn && "TextEvent" in window && !$l, vf = nn && (!rl || $l && $l > 8 && $l <= 11), Sh = 32, hf = String.fromCharCode(Sh);
    function Oy() {
      Ie("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ie("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ie("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ie("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
    function Ly(e) {
      if (!nn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Is() {
      Ie("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Th(e, t, a, i) {
      fo(i);
      var u = kh(t, "onChange");
      if (u.length > 0) {
        var s = new Ni("onChange", "change", null, a, i);
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
    nn && (m = Ly("input") && (!document.documentMode || document.documentMode > 9));
    function T(e, t) {
      Yl = e, n = t, Yl.attachEvent("onpropertychange", $);
    }
    function b() {
      Yl && (Yl.detachEvent("onpropertychange", $), Yl = null, n = null);
    }
    function $(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function se(e, t, a) {
      e === "focusin" ? (b(), T(t, a)) : e === "focusout" && b();
    }
    function de(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function ue(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Oe(e, t) {
      if (e === "click")
        return c(t);
    }
    function Fe(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Ye(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || qe(e, "number", e.value);
    }
    function Nn(e, t, a, i, u, s, f) {
      var p = a ? _f(a) : window, v, g;
      if (r(p) ? v = d : Ys(p) ? m ? v = Fe : (v = de, g = se) : ue(p) && (v = Oe), v) {
        var C = v(t, a);
        if (C) {
          Th(e, C, i, u);
          return;
        }
      }
      g && g(t, p, a), t === "focusout" && Ye(p);
    }
    function A() {
      pt("onMouseEnter", ["mouseout", "mouseover"]), pt("onMouseLeave", ["mouseout", "mouseover"]), pt("onPointerEnter", ["pointerout", "pointerover"]), pt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function D(e, t, a, i, u, s, f) {
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
          var O = u.ownerDocument;
          O ? C = O.defaultView || O.parentWindow : C = window;
        }
        var k, V;
        if (v) {
          var Y = i.relatedTarget || i.toElement;
          if (k = a, V = Y ? Gs(Y) : null, V !== null) {
            var X = pa(V);
            (V !== X || V.tag !== L && V.tag !== fe) && (V = null);
          }
        } else
          k = null, V = a;
        if (k !== V) {
          var ke = Gd, Ze = "onMouseLeave", Qe = "onMouseEnter", Lt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ke = mh, Ze = "onPointerLeave", Qe = "onPointerEnter", Lt = "pointer");
          var xt = k == null ? C : _f(k), j = V == null ? C : _f(V), K = new ke(Ze, Lt + "leave", k, i, u);
          K.target = xt, K.relatedTarget = j;
          var F = null, pe = Gs(u);
          if (pe === a) {
            var Ne = new ke(Qe, Lt + "enter", V, i, u);
            Ne.target = j, Ne.relatedTarget = xt, F = Ne;
          }
          tw(e, K, F, k, V);
        }
      }
    }
    function H(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ce = typeof Object.is == "function" ? Object.is : H;
    function He(e, t) {
      if (ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Er.call(t, s) || !ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function tt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function at(e, t) {
      for (var a = Je(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Wi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Je(tt(a));
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
      return Vt(e, u, s, f, p);
    }
    function Vt(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, g = 0, C = e, O = null;
      e: for (; ; ) {
        for (var k = null; C === t && (a === 0 || C.nodeType === Wi) && (f = s + a), C === i && (u === 0 || C.nodeType === Wi) && (p = s + u), C.nodeType === Wi && (s += C.nodeValue.length), (k = C.firstChild) !== null; )
          O = C, C = k;
        for (; ; ) {
          if (C === e)
            break e;
          if (O === t && ++v === a && (f = s), O === i && ++g === u && (p = s), (k = C.nextSibling) !== null)
            break;
          C = O, O = C.parentNode;
        }
        C = k;
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
        var g = at(e, f), C = at(e, p);
        if (g && C) {
          if (u.rangeCount === 1 && u.anchorNode === g.node && u.anchorOffset === g.offset && u.focusNode === C.node && u.focusOffset === C.offset)
            return;
          var O = a.createRange();
          O.setStart(g.node, g.offset), u.removeAllRanges(), f > p ? (u.addRange(O), u.extend(C.node, C.offset)) : (O.setEnd(C.node, C.offset), u.addRange(O));
        }
      }
    }
    function wh(e) {
      return e && e.nodeType === Wi;
    }
    function N0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : wh(e) ? !1 : wh(t) ? N0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jT(e) {
      return e && e.ownerDocument && N0(e.ownerDocument.documentElement, e);
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
    function Ny(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function HT() {
      var e = z0();
      return {
        focusedElem: e,
        selectionRange: Ny(e) ? VT(e) : null
      };
    }
    function PT(e) {
      var t = z0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && jT(a)) {
        i !== null && Ny(a) && BT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Qr && u.push({
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
    var $T = nn && "documentMode" in document && document.documentMode <= 11;
    function YT() {
      Ie("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Cf = null, zy = null, ap = null, Ay = !1;
    function IT(e) {
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
    function WT(e) {
      return e.window === e ? e.document : e.nodeType === Qi ? e : e.ownerDocument;
    }
    function A0(e, t, a) {
      var i = WT(a);
      if (!(Ay || Cf == null || Cf !== Oa(i))) {
        var u = IT(Cf);
        if (!ap || !He(ap, u)) {
          ap = u;
          var s = kh(zy, "onSelect");
          if (s.length > 0) {
            var f = new Ni("onSelect", "select", null, t, a);
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
    nn && (U0 = document.createElement("div").style, "AnimationEvent" in window || (delete Rf.animationend.animation, delete Rf.animationiteration.animation, delete Rf.animationstart.animation), "TransitionEvent" in window || delete Rf.transitionend.transition);
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
      V0.set(e, t), Ie(t, [e]);
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
        var v = Ni, g = t;
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
            v = ra;
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
          var O = !C && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", k = JT(a, p, i.type, C, O);
          if (k.length > 0) {
            var V = new v(p, g, null, i, u);
            e.push({
              event: V,
              listeners: k
            });
          }
        }
      }
    }
    GT(), A(), Is(), YT(), Oy();
    function KT(e, t, a, i, u, s, f) {
      XT(e, t, a, i, u, s);
      var p = (s & yd) === 0;
      p && (D(e, t, a, i, u), Nn(e, t, a, i, u), QT(e, t, a, i, u), Rh(e, t, a, i, u));
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
          var C = t[g], O = C.instance, k = C.currentTarget, V = C.listener;
          if (O !== i && e.isPropagationStopped())
            return;
          $0(e, V, k), i = O;
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
    function Tn(e, t) {
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
        e[bh] = !0, Ve.forEach(function(a) {
          a !== "selectionchange" && (jy.has(a) || Fy(a, !1, e), Fy(a, !0, e));
        });
        var t = e.nodeType === Qi ? e : e.ownerDocument;
        t !== null && (t[bh] || (t[bh] = !0, Fy("selectionchange", !1, t)));
      }
    }
    function I0(e, t, a, i, u) {
      var s = fr(e, t, a), f = void 0;
      ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Qd(e, t, s, f) : na(e, t, s) : f !== void 0 ? _o(e, t, s, f) : Hs(e, t, s);
    }
    function W0(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
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
            if (v === q || v === te) {
              var g = p.stateNode.containerInfo;
              if (W0(g, f))
                break;
              if (v === te)
                for (var C = p.return; C !== null; ) {
                  var O = C.tag;
                  if (O === q || O === te) {
                    var k = C.stateNode.containerInfo;
                    if (W0(k, f))
                      return;
                  }
                  C = C.return;
                }
              for (; g !== null; ) {
                var V = Gs(g);
                if (V === null)
                  return;
                var Y = V.tag;
                if (Y === L || Y === fe) {
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
        var O = g, k = O.stateNode, V = O.tag;
        if (V === L && k !== null && (C = k, p !== null)) {
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
        if (p === L && f !== null) {
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
      while (e && e.tag !== L);
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
        var v = p, g = v.alternate, C = v.stateNode, O = v.tag;
        if (g !== null && g === i)
          break;
        if (O === L && C !== null) {
          var k = C;
          if (u) {
            var V = kl(p, s);
            V != null && f.unshift(up(p, V, k));
          } else if (!u) {
            var Y = kl(p, s);
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
    function tw(e, t, a, i, u) {
      var s = i && u ? ew(i, u) : null;
      i !== null && Q0(e, t, i, s, !1), u !== null && a !== null && Q0(e, a, u, s, !0);
    }
    function nw(e, t) {
      return e + "__bubble";
    }
    var Va = !1, op = "dangerouslySetInnerHTML", Dh = "suppressContentEditableWarning", Mo = "suppressHydrationWarning", G0 = "autoFocus", Ws = "children", Qs = "style", Oh = "__html", Py, Mh, sp, X0, Lh, K0, q0;
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
        registrationNameDependencies: ne,
        possibleRegistrationNames: Se
      });
    }, K0 = nn && !document.documentMode, sp = function(e, t, a) {
      if (!Va) {
        var i = Nh(a), u = Nh(t);
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
    }, Lh = function(e, t) {
      t === !1 ? y("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : y("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, q0 = function(e, t) {
      var a = e.namespaceURI === Ii ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var rw = /\r\n?/g, aw = /\u0000|\uFFFD/g;
    function Nh(e) {
      Zn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(rw, `
`).replace(aw, "");
    }
    function zh(e, t, a, i) {
      var u = Nh(t), s = Nh(e);
      if (s !== u && (i && (Va || (Va = !0, y('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && je))
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
          else s === Dh || s === Mo || s === G0 || (ne.hasOwnProperty(s) ? f != null && (typeof f != "function" && Lh(s, f), s === "onScroll" && Tn("scroll", t)) : f != null && kr(t, s, f, u));
        }
    }
    function uw(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Qs ? _v(e, f) : s === op ? vv(e, f) : s === Ws ? uo(e, f) : kr(e, s, f, i);
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
      return p === Ii && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Er.call(Py, e) && (Py[e] = !0, y("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
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
          Tn("cancel", e), Tn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ip.length; f++)
            Tn(ip[f], e);
          s = a;
          break;
        case "source":
          Tn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e), s = a;
          break;
        case "details":
          Tn("toggle", e), s = a;
          break;
        case "input":
          ri(e, a), s = lo(e, a), Tn("invalid", e);
          break;
        case "option":
          At(e, a), s = a;
          break;
        case "select":
          fu(e, a), s = es(e, a), Tn("invalid", e);
          break;
        case "textarea":
          rd(e, a), s = nd(e, a), Tn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (mc(t, s), lw(t, e, i, s, u), t) {
        case "input":
          ni(e), B(e, a, !1);
          break;
        case "textarea":
          ni(e), dv(e);
          break;
        case "option":
          sn(e, a);
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
            var O = f[v];
            for (g in O)
              O.hasOwnProperty(g) && (C || (C = {}), C[g] = "");
          } else v === op || v === Ws || v === Dh || v === Mo || v === G0 || (ne.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var k = p[v], V = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || k === V || k == null && V == null))
          if (v === Qs)
            if (k && Object.freeze(k), V) {
              for (g in V)
                V.hasOwnProperty(g) && (!k || !k.hasOwnProperty(g)) && (C || (C = {}), C[g] = "");
              for (g in k)
                k.hasOwnProperty(g) && V[g] !== k[g] && (C || (C = {}), C[g] = k[g]);
            } else
              C || (s || (s = []), s.push(v, C)), C = k;
          else if (v === op) {
            var Y = k ? k[Oh] : void 0, X = V ? V[Oh] : void 0;
            Y != null && X !== Y && (s = s || []).push(v, Y);
          } else v === Ws ? (typeof k == "string" || typeof k == "number") && (s = s || []).push(v, "" + k) : v === Dh || v === Mo || (ne.hasOwnProperty(v) ? (k != null && (typeof k != "function" && Lh(v, k), v === "onScroll" && Tn("scroll", e)), !s && V !== k && (s = [])) : (s = s || []).push(v, k));
      }
      return C && (py(C, p[Qs]), (s = s || []).push(Qs, C)), s;
    }
    function dw(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = _l(a, i), f = _l(a, u);
      switch (uw(e, t, s, f), a) {
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
          Tn("cancel", e), Tn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Tn("load", e);
          break;
        case "video":
        case "audio":
          for (var g = 0; g < ip.length; g++)
            Tn(ip[g], e);
          break;
        case "source":
          Tn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Tn("error", e), Tn("load", e);
          break;
        case "details":
          Tn("toggle", e);
          break;
        case "input":
          ri(e, a), Tn("invalid", e);
          break;
        case "option":
          At(e, a);
          break;
        case "select":
          fu(e, a), Tn("invalid", e);
          break;
        case "textarea":
          rd(e, a), Tn("invalid", e);
          break;
      }
      mc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var C = e.attributes, O = 0; O < C.length; O++) {
          var k = C[O].name.toLowerCase();
          switch (k) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(C[O].name);
          }
        }
      }
      var V = null;
      for (var Y in a)
        if (a.hasOwnProperty(Y)) {
          var X = a[Y];
          if (Y === Ws)
            typeof X == "string" ? e.textContent !== X && (a[Mo] !== !0 && zh(e.textContent, X, s, f), V = [Ws, X]) : typeof X == "number" && e.textContent !== "" + X && (a[Mo] !== !0 && zh(e.textContent, X, s, f), V = [Ws, "" + X]);
          else if (ne.hasOwnProperty(Y))
            X != null && (typeof X != "function" && Lh(Y, X), Y === "onScroll" && Tn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ke = void 0, Ze = un(Y);
            if (a[Mo] !== !0) {
              if (!(Y === Dh || Y === Mo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === op) {
                  var Qe = e.innerHTML, Lt = X ? X[Oh] : void 0;
                  if (Lt != null) {
                    var xt = q0(e, Lt);
                    xt !== Qe && sp(Y, Qe, xt);
                  }
                } else if (Y === Qs) {
                  if (v.delete(Y), K0) {
                    var j = fy(X);
                    ke = e.getAttribute("style"), j !== ke && sp(Y, ke, j);
                  }
                } else if (p && !w)
                  v.delete(Y.toLowerCase()), ke = au(e, Y, X), X !== ke && sp(Y, ke, X);
                else if (!gn(Y, Ze, p) && !Jn(Y, X, Ze, p)) {
                  var K = !1;
                  if (Ze !== null)
                    v.delete(Ze.attributeName), ke = yl(e, Y, X, Ze);
                  else {
                    var F = i;
                    if (F === Ii && (F = ld(t)), F === Ii)
                      v.delete(Y.toLowerCase());
                    else {
                      var pe = pw(Y);
                      pe !== null && pe !== Y && (K = !0, v.delete(pe)), v.delete(Y);
                    }
                    ke = au(e, Y, X);
                  }
                  var Ne = w;
                  !Ne && X !== ke && !K && sp(Y, ke, X);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Mo] !== !0 && X0(v), t) {
        case "input":
          ni(e), B(e, a, !0);
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
      return V;
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
        var a = yt({}, e || eE), i = {
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
            var C = e, O = "";
            if (e === "#text" ? /\S/.test(t) ? C = "Text nodes" : (C = "Whitespace text nodes", O = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : C = "<" + e + ">", s) {
              var k = "";
              v === "table" && e === "tr" && (k += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), y("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", C, v, O, k);
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
          var s = i === Un ? e.parentNode : e, f = s.namespaceURI || null;
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
      Iy = Bn(), Wy = HT();
      var t = null;
      return Kn(!1), t;
    }
    function _w(e) {
      PT(Wy), Kn(Iy), Iy = null, Wy = null;
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
    function Lw() {
      var e = window.event;
      return e === void 0 ? ja : cf(e.type);
    }
    var Gy = typeof setTimeout == "function" ? setTimeout : void 0, Nw = typeof clearTimeout == "function" ? clearTimeout : void 0, Xy = -1, nE = typeof Promise == "function" ? Promise : void 0, zw = typeof queueMicrotask == "function" ? queueMicrotask : typeof nE < "u" ? function(e) {
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
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ah(a);
    }
    function Vw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Bw(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function $w(e, t) {
      e.removeChild(t);
    }
    function Yw(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ky(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Un) {
          var s = u.data;
          if (s === Fh)
            if (i === 0) {
              e.removeChild(u), Lu(t);
              return;
            } else
              i--;
          else (s === jh || s === dp || s === pp) && i++;
        }
        a = u;
      } while (a);
      Lu(t);
    }
    function Iw(e, t) {
      e.nodeType === Un ? Ky(e.parentNode, t) : e.nodeType === Qr && Ky(e, t), Lu(e);
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
      e.nodeType === Qr ? e.textContent = "" : e.nodeType === Qi && e.documentElement && e.removeChild(e.documentElement);
    }
    function qw(e, t, a) {
      return e.nodeType !== Qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Zw(e, t) {
      return t === "" || e.nodeType !== Wi ? null : e;
    }
    function Jw(e) {
      return e.nodeType !== Un ? null : e;
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
        if (t === Qr || t === Wi)
          break;
        if (t === Un) {
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
      var g = (s.mode & Ct) !== Ke;
      return vw(e, t, a, p, i, g, f);
    }
    function lx(e, t, a, i) {
      return mp(a, e), a.mode & Ct, hw(e, t);
    }
    function ux(e, t) {
      mp(t, e);
    }
    function ox(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
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
        if (t.nodeType === Un) {
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
      Lu(e);
    }
    function cx(e) {
      Lu(e);
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
      t.nodeType === Qr ? Vy(e, t) : t.nodeType === Un || By(e, t);
    }
    function hx(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Qr ? Vy(a, t) : t.nodeType === Un || By(a, t));
      }
    }
    function mx(e, t, a, i, u) {
      (u || t[Uh] !== !0) && (i.nodeType === Qr ? Vy(a, i) : i.nodeType === Un || By(a, i));
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
    function Lo(e) {
      var t = e[xf] || e[hp];
      return t && (t.tag === L || t.tag === fe || t.tag === Re || t.tag === q) ? t : null;
    }
    function _f(e) {
      if (e.tag === L || e.tag === fe)
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
        var s = Function.call.bind(Er);
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
    function No(e) {
      return {
        current: e
      };
    }
    function aa(e, t) {
      if (Fu < 0) {
        y("Unexpected pop.");
        return;
      }
      t !== $h[Fu] && y("Unexpected Fiber popped."), e.current = tg[Fu], tg[Fu] = null, $h[Fu] = null, Fu--;
    }
    function ia(e, t, a) {
      Fu++, tg[Fu] = e.current, $h[Fu] = a, e.current = t;
    }
    var ng;
    ng = {};
    var ci = {};
    Object.freeze(ci);
    var Hu = No(ci), Wl = No(!1), rg = ci;
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
          var p = lt(e) || "Unknown";
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
      aa(Wl, e), aa(Hu, e);
    }
    function ag(e) {
      aa(Wl, e), aa(Hu, e);
    }
    function cE(e, t, a) {
      {
        if (Hu.current !== ci)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ia(Hu, t, e), ia(Wl, a, e);
      }
    }
    function fE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = lt(e) || "Unknown";
            ng[s] || (ng[s] = !0, y("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((lt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = lt(e) || "Unknown";
          al(u, f, "child context", v);
        }
        return yt({}, a, f);
      }
    }
    function Wh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ci;
        return rg = Hu.current, ia(Hu, a, e), ia(Wl, Wl.current, e), !0;
      }
    }
    function dE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = fE(e, t, rg);
          i.__reactInternalMemoizedMergedChildContext = u, aa(Wl, e), aa(Hu, e), ia(Hu, u, e), ia(Wl, a, e);
        } else
          aa(Wl, e), ia(Wl, a, e);
      }
    }
    function Dx(e) {
      {
        if (!gu(e) || e.tag !== U)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case q:
              return t.stateNode.context;
            case U: {
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
          for (Vn(Nr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Pu = null, ig = !1;
        } catch (s) {
          throw Pu !== null && (Pu = Pu.slice(e + 1)), Ed(ps, Ao), s;
        } finally {
          Vn(t), lg = !1;
        }
      }
      return null;
    }
    var Df = [], Of = 0, Gh = null, Xh = 0, zi = [], Ai = 0, Xs = null, Vu = 1, Bu = "";
    function Mx(e) {
      return qs(), (e.flags & wi) !== Xe;
    }
    function Lx(e) {
      return qs(), Xh;
    }
    function Nx() {
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
        var g = s - s % 5, C = (1 << g) - 1, O = (f & C).toString(32), k = f >> g, V = s - g, Y = Kh(t) + V, X = p << V, ke = X | k, Ze = O + u;
        Vu = 1 << Y | ke, Bu = Ze;
      } else {
        var Qe = p << s, Lt = Qe | f, xt = u;
        Vu = 1 << v | Lt, Bu = xt;
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
      return 32 - Hn(e);
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
      Fr() || y("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var jr = null, Ui = null, il = !1, Zs = !1, Uo = null;
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
      return Ui = rx(t), jr = e, il = !0, Uo = null, Zs = !1, !0;
    }
    function Px(e, t, a) {
      return Ui = ax(t), jr = e, il = !0, Uo = null, Zs = !1, a !== null && Ux(e, a), !0;
    }
    function yE(e, t) {
      switch (e.tag) {
        case q: {
          vx(e.stateNode.containerInfo, t);
          break;
        }
        case L: {
          var a = (e.mode & Ct) !== Ke;
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
        case Re: {
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
      i === null ? (e.deletions = [a], e.flags |= La) : i.push(a);
    }
    function sg(e, t) {
      {
        if (Zs)
          return;
        switch (e.tag) {
          case q: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case L:
                var i = t.type;
                t.pendingProps, yx(a, i);
                break;
              case fe:
                var u = t.pendingProps;
                gx(a, u);
                break;
            }
            break;
          }
          case L: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case L: {
                var v = t.type, g = t.pendingProps, C = (e.mode & Ct) !== Ke;
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
              case fe: {
                var O = t.pendingProps, k = (e.mode & Ct) !== Ke;
                Rx(
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
          case Re: {
            var V = e.memoizedState, Y = V.dehydrated;
            if (Y !== null) switch (t.tag) {
              case L:
                var X = t.type;
                t.pendingProps, Sx(Y, X);
                break;
              case fe:
                var ke = t.pendingProps;
                Ex(Y, ke);
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
      t.flags = t.flags & ~Xr | En, sg(e, t);
    }
    function EE(e, t) {
      switch (e.tag) {
        case L: {
          var a = e.type;
          e.pendingProps;
          var i = qw(t, a);
          return i !== null ? (e.stateNode = i, jr = e, Ui = nx(i), !0) : !1;
        }
        case fe: {
          var u = e.pendingProps, s = Zw(t, u);
          return s !== null ? (e.stateNode = s, jr = e, Ui = null, !0) : !1;
        }
        case Re: {
          var f = Jw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: Ax(),
              retryLane: Jr
            };
            e.memoizedState = p;
            var v = Ib(f);
            return v.return = e, e.child = v, jr = e, Ui = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function cg(e) {
      return (e.mode & Ct) !== Ke && (e.flags & Ge) === Xe;
    }
    function fg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function dg(e) {
      if (il) {
        var t = Ui;
        if (!t) {
          cg(e) && (sg(jr, e), fg()), SE(jr, e), il = !1, jr = e;
          return;
        }
        var a = t;
        if (!EE(e, t)) {
          cg(e) && (sg(jr, e), fg()), t = vp(a);
          var i = jr;
          if (!t || !EE(e, t)) {
            SE(jr, e), il = !1, jr = e;
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
        var u = jr;
        if (u !== null)
          switch (u.tag) {
            case q: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ct) !== Ke;
              dx(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case L: {
              var p = u.type, v = u.memoizedProps, g = u.stateNode, C = (u.mode & Ct) !== Ke;
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
      for (var t = e.return; t !== null && t.tag !== L && t.tag !== q && t.tag !== Re; )
        t = t.return;
      jr = t;
    }
    function qh(e) {
      if (e !== jr)
        return !1;
      if (!il)
        return CE(e), il = !0, !1;
      if (e.tag !== q && (e.tag !== L || fx(e.type) && !Qy(e.type, e.memoizedProps))) {
        var t = Ui;
        if (t)
          if (cg(e))
            RE(e), fg();
          else
            for (; t; )
              gE(e, t), t = vp(t);
      }
      return CE(e), e.tag === Re ? Ui = Yx(e) : Ui = jr ? vp(e.stateNode) : null, !0;
    }
    function Ix() {
      return il && Ui !== null;
    }
    function RE(e) {
      for (var t = Ui; t; )
        yE(e, t), t = vp(t);
    }
    function Mf() {
      jr = null, Ui = null, il = !1, Zs = !1;
    }
    function TE() {
      Uo !== null && (mR(Uo), Uo = null);
    }
    function Fr() {
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
          a.mode & Jt && (t = a), a = a.return;
        return t;
      }, Js = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, gp = [], Sp = [], Ep = [], Cp = [], Rp = [], Tp = [], ec = /* @__PURE__ */ new Set();
      ll.recordUnsafeLifecycleWarnings = function(e, t) {
        ec.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && gp.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillMount == "function" && Sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ep.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillReceiveProps == "function" && Cp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Rp.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillUpdate == "function" && Tp.push(e));
      }, ll.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(k) {
          e.add(lt(k) || "Component"), ec.add(k.type);
        }), gp = []);
        var t = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(k) {
          t.add(lt(k) || "Component"), ec.add(k.type);
        }), Sp = []);
        var a = /* @__PURE__ */ new Set();
        Ep.length > 0 && (Ep.forEach(function(k) {
          a.add(lt(k) || "Component"), ec.add(k.type);
        }), Ep = []);
        var i = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(k) {
          i.add(lt(k) || "Component"), ec.add(k.type);
        }), Cp = []);
        var u = /* @__PURE__ */ new Set();
        Rp.length > 0 && (Rp.forEach(function(k) {
          u.add(lt(k) || "Component"), ec.add(k.type);
        }), Rp = []);
        var s = /* @__PURE__ */ new Set();
        if (Tp.length > 0 && (Tp.forEach(function(k) {
          s.add(lt(k) || "Component"), ec.add(k.type);
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
          var O = Js(u);
          I(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
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
              i.add(lt(s) || "Component"), wE.add(s.type);
            });
            var u = Js(i);
            try {
              Kt(a), y(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              pn();
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
        var a = lt(t) || "Component";
        yg[a] || (yg[a] = !0, y('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Kx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function wp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Jt || M) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== U) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Kx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = lt(e) || "Component";
          mg[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), mg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== U)
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
          var C = function(O) {
            var k = v.refs;
            O === null ? delete k[g] : k[g] = O;
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
        var t = lt(e) || "Component";
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
      function t(j, K) {
        if (e) {
          var F = j.deletions;
          F === null ? (j.deletions = [K], j.flags |= La) : F.push(K);
        }
      }
      function a(j, K) {
        if (!e)
          return null;
        for (var F = K; F !== null; )
          t(j, F), F = F.sibling;
        return null;
      }
      function i(j, K) {
        for (var F = /* @__PURE__ */ new Map(), pe = K; pe !== null; )
          pe.key !== null ? F.set(pe.key, pe) : F.set(pe.index, pe), pe = pe.sibling;
        return F;
      }
      function u(j, K) {
        var F = sc(j, K);
        return F.index = 0, F.sibling = null, F;
      }
      function s(j, K, F) {
        if (j.index = F, !e)
          return j.flags |= wi, K;
        var pe = j.alternate;
        if (pe !== null) {
          var Ne = pe.index;
          return Ne < K ? (j.flags |= En, K) : Ne;
        } else
          return j.flags |= En, K;
      }
      function f(j) {
        return e && j.alternate === null && (j.flags |= En), j;
      }
      function p(j, K, F, pe) {
        if (K === null || K.tag !== fe) {
          var Ne = p0(F, j.mode, pe);
          return Ne.return = j, Ne;
        } else {
          var De = u(K, F);
          return De.return = j, De;
        }
      }
      function v(j, K, F, pe) {
        var Ne = F.type;
        if (Ne === vi)
          return C(j, K, F.props.children, pe, F.key);
        if (K !== null && (K.elementType === Ne || // Keep this check inline so it only runs on the false path:
        LR(K, F) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ne == "object" && Ne !== null && Ne.$$typeof === ot && _E(Ne) === K.type)) {
          var De = u(K, F.props);
          return De.ref = wp(j, K, F), De.return = j, De._debugSource = F._source, De._debugOwner = F._owner, De;
        }
        var rt = d0(F, j.mode, pe);
        return rt.ref = wp(j, K, F), rt.return = j, rt;
      }
      function g(j, K, F, pe) {
        if (K === null || K.tag !== te || K.stateNode.containerInfo !== F.containerInfo || K.stateNode.implementation !== F.implementation) {
          var Ne = v0(F, j.mode, pe);
          return Ne.return = j, Ne;
        } else {
          var De = u(K, F.children || []);
          return De.return = j, De;
        }
      }
      function C(j, K, F, pe, Ne) {
        if (K === null || K.tag !== Z) {
          var De = Qo(F, j.mode, pe, Ne);
          return De.return = j, De;
        } else {
          var rt = u(K, F);
          return rt.return = j, rt;
        }
      }
      function O(j, K, F) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var pe = p0("" + K, j.mode, F);
          return pe.return = j, pe;
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case Dr: {
              var Ne = d0(K, j.mode, F);
              return Ne.ref = wp(j, null, K), Ne.return = j, Ne;
            }
            case ir: {
              var De = v0(K, j.mode, F);
              return De.return = j, De;
            }
            case ot: {
              var rt = K._payload, ft = K._init;
              return O(j, ft(rt), F);
            }
          }
          if (St(K) || ht(K)) {
            var tn = Qo(K, j.mode, F, null);
            return tn.return = j, tn;
          }
          Jh(j, K);
        }
        return typeof K == "function" && em(j), null;
      }
      function k(j, K, F, pe) {
        var Ne = K !== null ? K.key : null;
        if (typeof F == "string" && F !== "" || typeof F == "number")
          return Ne !== null ? null : p(j, K, "" + F, pe);
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case Dr:
              return F.key === Ne ? v(j, K, F, pe) : null;
            case ir:
              return F.key === Ne ? g(j, K, F, pe) : null;
            case ot: {
              var De = F._payload, rt = F._init;
              return k(j, K, rt(De), pe);
            }
          }
          if (St(F) || ht(F))
            return Ne !== null ? null : C(j, K, F, pe, null);
          Jh(j, F);
        }
        return typeof F == "function" && em(j), null;
      }
      function V(j, K, F, pe, Ne) {
        if (typeof pe == "string" && pe !== "" || typeof pe == "number") {
          var De = j.get(F) || null;
          return p(K, De, "" + pe, Ne);
        }
        if (typeof pe == "object" && pe !== null) {
          switch (pe.$$typeof) {
            case Dr: {
              var rt = j.get(pe.key === null ? F : pe.key) || null;
              return v(K, rt, pe, Ne);
            }
            case ir: {
              var ft = j.get(pe.key === null ? F : pe.key) || null;
              return g(K, ft, pe, Ne);
            }
            case ot:
              var tn = pe._payload, Bt = pe._init;
              return V(j, K, F, Bt(tn), Ne);
          }
          if (St(pe) || ht(pe)) {
            var qn = j.get(F) || null;
            return C(K, qn, pe, Ne, null);
          }
          Jh(K, pe);
        }
        return typeof pe == "function" && em(K), null;
      }
      function Y(j, K, F) {
        {
          if (typeof j != "object" || j === null)
            return K;
          switch (j.$$typeof) {
            case Dr:
            case ir:
              xE(j, F);
              var pe = j.key;
              if (typeof pe != "string")
                break;
              if (K === null) {
                K = /* @__PURE__ */ new Set(), K.add(pe);
                break;
              }
              if (!K.has(pe)) {
                K.add(pe);
                break;
              }
              y("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", pe);
              break;
            case ot:
              var Ne = j._payload, De = j._init;
              Y(De(Ne), K, F);
              break;
          }
        }
        return K;
      }
      function X(j, K, F, pe) {
        for (var Ne = null, De = 0; De < F.length; De++) {
          var rt = F[De];
          Ne = Y(rt, Ne, j);
        }
        for (var ft = null, tn = null, Bt = K, qn = 0, $t = 0, Yn = null; Bt !== null && $t < F.length; $t++) {
          Bt.index > $t ? (Yn = Bt, Bt = null) : Yn = Bt.sibling;
          var ua = k(j, Bt, F[$t], pe);
          if (ua === null) {
            Bt === null && (Bt = Yn);
            break;
          }
          e && Bt && ua.alternate === null && t(j, Bt), qn = s(ua, qn, $t), tn === null ? ft = ua : tn.sibling = ua, tn = ua, Bt = Yn;
        }
        if ($t === F.length) {
          if (a(j, Bt), Fr()) {
            var Ir = $t;
            Ks(j, Ir);
          }
          return ft;
        }
        if (Bt === null) {
          for (; $t < F.length; $t++) {
            var di = O(j, F[$t], pe);
            di !== null && (qn = s(di, qn, $t), tn === null ? ft = di : tn.sibling = di, tn = di);
          }
          if (Fr()) {
            var Ra = $t;
            Ks(j, Ra);
          }
          return ft;
        }
        for (var Ta = i(j, Bt); $t < F.length; $t++) {
          var oa = V(Ta, j, $t, F[$t], pe);
          oa !== null && (e && oa.alternate !== null && Ta.delete(oa.key === null ? $t : oa.key), qn = s(oa, qn, $t), tn === null ? ft = oa : tn.sibling = oa, tn = oa);
        }
        if (e && Ta.forEach(function(Kf) {
          return t(j, Kf);
        }), Fr()) {
          var Xu = $t;
          Ks(j, Xu);
        }
        return ft;
      }
      function ke(j, K, F, pe) {
        var Ne = ht(F);
        if (typeof Ne != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          F[Symbol.toStringTag] === "Generator" && (hg || y("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hg = !0), F.entries === Ne && (vg || y("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vg = !0);
          var De = Ne.call(F);
          if (De)
            for (var rt = null, ft = De.next(); !ft.done; ft = De.next()) {
              var tn = ft.value;
              rt = Y(tn, rt, j);
            }
        }
        var Bt = Ne.call(F);
        if (Bt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var qn = null, $t = null, Yn = K, ua = 0, Ir = 0, di = null, Ra = Bt.next(); Yn !== null && !Ra.done; Ir++, Ra = Bt.next()) {
          Yn.index > Ir ? (di = Yn, Yn = null) : di = Yn.sibling;
          var Ta = k(j, Yn, Ra.value, pe);
          if (Ta === null) {
            Yn === null && (Yn = di);
            break;
          }
          e && Yn && Ta.alternate === null && t(j, Yn), ua = s(Ta, ua, Ir), $t === null ? qn = Ta : $t.sibling = Ta, $t = Ta, Yn = di;
        }
        if (Ra.done) {
          if (a(j, Yn), Fr()) {
            var oa = Ir;
            Ks(j, oa);
          }
          return qn;
        }
        if (Yn === null) {
          for (; !Ra.done; Ir++, Ra = Bt.next()) {
            var Xu = O(j, Ra.value, pe);
            Xu !== null && (ua = s(Xu, ua, Ir), $t === null ? qn = Xu : $t.sibling = Xu, $t = Xu);
          }
          if (Fr()) {
            var Kf = Ir;
            Ks(j, Kf);
          }
          return qn;
        }
        for (var nv = i(j, Yn); !Ra.done; Ir++, Ra = Bt.next()) {
          var tu = V(nv, j, Ir, Ra.value, pe);
          tu !== null && (e && tu.alternate !== null && nv.delete(tu.key === null ? Ir : tu.key), ua = s(tu, ua, Ir), $t === null ? qn = tu : $t.sibling = tu, $t = tu);
        }
        if (e && nv.forEach(function(Rk) {
          return t(j, Rk);
        }), Fr()) {
          var Ck = Ir;
          Ks(j, Ck);
        }
        return qn;
      }
      function Ze(j, K, F, pe) {
        if (K !== null && K.tag === fe) {
          a(j, K.sibling);
          var Ne = u(K, F);
          return Ne.return = j, Ne;
        }
        a(j, K);
        var De = p0(F, j.mode, pe);
        return De.return = j, De;
      }
      function Qe(j, K, F, pe) {
        for (var Ne = F.key, De = K; De !== null; ) {
          if (De.key === Ne) {
            var rt = F.type;
            if (rt === vi) {
              if (De.tag === Z) {
                a(j, De.sibling);
                var ft = u(De, F.props.children);
                return ft.return = j, ft._debugSource = F._source, ft._debugOwner = F._owner, ft;
              }
            } else if (De.elementType === rt || // Keep this check inline so it only runs on the false path:
            LR(De, F) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof rt == "object" && rt !== null && rt.$$typeof === ot && _E(rt) === De.type) {
              a(j, De.sibling);
              var tn = u(De, F.props);
              return tn.ref = wp(j, De, F), tn.return = j, tn._debugSource = F._source, tn._debugOwner = F._owner, tn;
            }
            a(j, De);
            break;
          } else
            t(j, De);
          De = De.sibling;
        }
        if (F.type === vi) {
          var Bt = Qo(F.props.children, j.mode, pe, F.key);
          return Bt.return = j, Bt;
        } else {
          var qn = d0(F, j.mode, pe);
          return qn.ref = wp(j, K, F), qn.return = j, qn;
        }
      }
      function Lt(j, K, F, pe) {
        for (var Ne = F.key, De = K; De !== null; ) {
          if (De.key === Ne)
            if (De.tag === te && De.stateNode.containerInfo === F.containerInfo && De.stateNode.implementation === F.implementation) {
              a(j, De.sibling);
              var rt = u(De, F.children || []);
              return rt.return = j, rt;
            } else {
              a(j, De);
              break;
            }
          else
            t(j, De);
          De = De.sibling;
        }
        var ft = v0(F, j.mode, pe);
        return ft.return = j, ft;
      }
      function xt(j, K, F, pe) {
        var Ne = typeof F == "object" && F !== null && F.type === vi && F.key === null;
        if (Ne && (F = F.props.children), typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case Dr:
              return f(Qe(j, K, F, pe));
            case ir:
              return f(Lt(j, K, F, pe));
            case ot:
              var De = F._payload, rt = F._init;
              return xt(j, K, rt(De), pe);
          }
          if (St(F))
            return X(j, K, F, pe);
          if (ht(F))
            return ke(j, K, F, pe);
          Jh(j, F);
        }
        return typeof F == "string" && F !== "" || typeof F == "number" ? f(Ze(j, K, "" + F, pe)) : (typeof F == "function" && em(j), a(j, K));
      }
      return xt;
    }
    var Lf = bE(!0), kE = bE(!1);
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
    var Sg = No(null), Eg;
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
      ia(Sg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Eg && y("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Eg;
    }
    function Rg(e, t) {
      var a = Sg.current;
      aa(Sg, t), e._currentValue = a;
    }
    function Tg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Mu(i.childLanes, t) ? u !== null && !Mu(u.childLanes, t) && (u.childLanes = mt(u.childLanes, t)) : (i.childLanes = mt(i.childLanes, t), u !== null && (u.childLanes = mt(u.childLanes, t))), i === a)
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
              if (i.tag === U) {
                var p = bs(a), v = $u(rn, p);
                v.tag = im;
                var g = i.updateQueue;
                if (g !== null) {
                  var C = g.shared, O = C.pending;
                  O === null ? v.next = v : (v.next = O.next, O.next = v), C.pending = v;
                }
              }
              i.lanes = mt(i.lanes, a);
              var k = i.alternate;
              k !== null && (k.lanes = mt(k.lanes, a)), Tg(i.return, a, e), s.lanes = mt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === re)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === it) {
          var V = i.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = mt(V.lanes, a);
          var Y = V.alternate;
          Y !== null && (Y.lanes = mt(Y.lanes, a)), Tg(V, a, e), u = i.sibling;
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
            var X = u.sibling;
            if (X !== null) {
              X.return = u.return, u = X;
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
        i !== null && (ea(a.lanes, t) && Hp(), a.firstContext = null);
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
        if (Nf === null) {
          if (tm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, tm.dependencies = {
            lanes: ie,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
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
    function LE(e, t, a, i) {
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
      e.lanes = mt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = mt(a.lanes, t)), a === null && (e.flags & (En | Xr)) !== Xe && kR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = mt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = mt(a.childLanes, t) : (u.flags & (En | Xr)) !== Xe && kR(e), i = u, u = u.return;
      if (i.tag === q) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var NE = 0, zE = 1, im = 2, xg = 3, lm = !1, _g, um;
    _g = !1, um = null;
    function bg(e) {
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
        tag: NE,
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
          var f = mt(s, a);
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
              if (e.mode & Jt) {
                Cn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Cn(!1);
                }
              }
              OE();
            }
            return p;
          }
          return f;
        }
        case xg:
          e.flags = e.flags & ~er | Ge;
        case NE: {
          var v = a.payload, g;
          if (typeof v == "function") {
            DE(), g = v.call(s, i, u);
            {
              if (e.mode & Jt) {
                Cn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Cn(!1);
                }
              }
              OE();
            }
          } else
            g = v;
          return g == null ? i : yt({}, i, g);
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
          var O = C.updateQueue, k = O.lastBaseUpdate;
          k !== f && (k === null ? O.firstBaseUpdate = g : k.next = g, O.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var V = u.baseState, Y = ie, X = null, ke = null, Ze = null, Qe = s;
        do {
          var Lt = Qe.lane, xt = Qe.eventTime;
          if (Mu(i, Lt)) {
            if (Ze !== null) {
              var K = {
                eventTime: xt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ut,
                tag: Qe.tag,
                payload: Qe.payload,
                callback: Qe.callback,
                next: null
              };
              Ze = Ze.next = K;
            }
            V = i1(e, u, Qe, V, t, a);
            var F = Qe.callback;
            if (F !== null && // If the update was already committed, we should not queue its
            // callback again.
            Qe.lane !== Ut) {
              e.flags |= cn;
              var pe = u.effects;
              pe === null ? u.effects = [Qe] : pe.push(Qe);
            }
          } else {
            var j = {
              eventTime: xt,
              lane: Lt,
              tag: Qe.tag,
              payload: Qe.payload,
              callback: Qe.callback,
              next: null
            };
            Ze === null ? (ke = Ze = j, X = V) : Ze = Ze.next = j, Y = mt(Y, Lt);
          }
          if (Qe = Qe.next, Qe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Ne = p, De = Ne.next;
            Ne.next = null, Qe = De, u.lastBaseUpdate = Ne, u.shared.pending = null;
          }
        } while (!0);
        Ze === null && (X = V), u.baseState = X, u.firstBaseUpdate = ke, u.lastBaseUpdate = Ze;
        var rt = u.shared.interleaved;
        if (rt !== null) {
          var ft = rt;
          do
            Y = mt(Y, ft.lane), ft = ft.next;
          while (ft !== rt);
        } else s === null && (u.shared.lanes = ie);
        qp(Y), e.lanes = Y, e.memoizedState = V;
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
    var xp = {}, Fo = No(xp), _p = No(xp), fm = No(xp);
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
      ia(fm, t, e), ia(_p, e, e), ia(Fo, xp, e);
      var a = Tw(t);
      aa(Fo, e), ia(Fo, a, e);
    }
    function Af(e) {
      aa(Fo, e), aa(_p, e), aa(fm, e);
    }
    function Og() {
      var e = dm(Fo.current);
      return e;
    }
    function HE(e) {
      dm(fm.current);
      var t = dm(Fo.current), a = ww(t, e.type);
      t !== a && (ia(_p, e, e), ia(Fo, a, e));
    }
    function Mg(e) {
      _p.current === e && (aa(Fo, e), aa(_p, e));
    }
    var u1 = 0, PE = 1, VE = 1, bp = 2, ul = No(u1);
    function Lg(e, t) {
      return (e & t) !== 0;
    }
    function Uf(e) {
      return e & PE;
    }
    function Ng(e, t) {
      return e & PE | t;
    }
    function o1(e, t) {
      return e | t;
    }
    function Ho(e, t) {
      ia(ul, t, e);
    }
    function jf(e) {
      aa(ul, e);
    }
    function s1(e, t) {
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
        } else if (t.tag === wt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ge) !== Xe;
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
    ), dr = (
      /* */
      1
    ), Gl = (
      /*  */
      2
    ), pr = (
      /*    */
      4
    ), Hr = (
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
    var Me = E.ReactCurrentDispatcher, kp = E.ReactCurrentBatchConfig, Ug, Ff;
    Ug = /* @__PURE__ */ new Set();
    var nc = ie, en = null, vr = null, hr = null, vm = !1, Dp = !1, Op = 0, f1 = 0, d1 = 25, J = null, ji = null, Po = -1, jg = !1;
    function Wt() {
      {
        var e = J;
        ji === null ? ji = [e] : ji.push(e);
      }
    }
    function we() {
      {
        var e = J;
        ji !== null && (Po++, ji[Po] !== e && p1(e));
      }
    }
    function Hf(e) {
      e != null && !St(e) && y("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function p1(e) {
      {
        var t = lt(en);
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
    function la() {
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
        if (!ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Pf(e, t, a, i, u, s) {
      nc = s, en = t, ji = e !== null ? e._debugHookTypes : null, Po = -1, jg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ie, e !== null && e.memoizedState !== null ? Me.current = sC : ji !== null ? Me.current = oC : Me.current = uC;
      var f = a(i, u);
      if (Dp) {
        var p = 0;
        do {
          if (Dp = !1, Op = 0, p >= d1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, jg = !1, vr = null, hr = null, t.updateQueue = null, Po = -1, Me.current = cC, f = a(i, u);
        } while (Dp);
      }
      Me.current = bm, t._debugHookTypes = ji;
      var v = vr !== null && vr.next !== null;
      if (nc = ie, en = null, vr = null, hr = null, J = null, ji = null, Po = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Ct) !== Ke && y("Internal React error: Expected static flag was missing. Please notify the React team."), vm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Vf() {
      var e = Op !== 0;
      return Op = 0, e;
    }
    function BE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Pt) !== Ke ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = ks(e.lanes, a);
    }
    function $E() {
      if (Me.current = bm, vm) {
        for (var e = en.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        vm = !1;
      }
      nc = ie, en = null, vr = null, hr = null, ji = null, Po = -1, J = null, nC = !1, Dp = !1, Op = 0;
    }
    function Xl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return hr === null ? en.memoizedState = hr = e : hr = hr.next = e, hr;
    }
    function Fi() {
      var e;
      if (vr === null) {
        var t = en.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = vr.next;
      var a;
      if (hr === null ? a = en.memoizedState : a = hr.next, a !== null)
        hr = a, a = hr.next, vr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        vr = e;
        var i = {
          memoizedState: vr.memoizedState,
          baseState: vr.baseState,
          baseQueue: vr.baseQueue,
          queue: vr.queue,
          next: null
        };
        hr === null ? en.memoizedState = hr = i : hr = hr.next = i;
      }
      return hr;
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
        lanes: ie,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = y1.bind(null, en, s);
      return [i.memoizedState, f];
    }
    function Vg(e, t, a) {
      var i = Fi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = vr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, g = p.next;
          f.next = g, p.next = v;
        }
        s.baseQueue !== f && y("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var C = f.next, O = s.baseState, k = null, V = null, Y = null, X = C;
        do {
          var ke = X.lane;
          if (Mu(nc, ke)) {
            if (Y !== null) {
              var Qe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ut,
                action: X.action,
                hasEagerState: X.hasEagerState,
                eagerState: X.eagerState,
                next: null
              };
              Y = Y.next = Qe;
            }
            if (X.hasEagerState)
              O = X.eagerState;
            else {
              var Lt = X.action;
              O = e(O, Lt);
            }
          } else {
            var Ze = {
              lane: ke,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            };
            Y === null ? (V = Y = Ze, k = O) : Y = Y.next = Ze, en.lanes = mt(en.lanes, ke), qp(ke);
          }
          X = X.next;
        } while (X !== null && X !== C);
        Y === null ? k = O : Y.next = V, ce(O, i.memoizedState) || Hp(), i.memoizedState = O, i.baseState = k, i.baseQueue = Y, u.lastRenderedState = O;
      }
      var xt = u.interleaved;
      if (xt !== null) {
        var j = xt;
        do {
          var K = j.lane;
          en.lanes = mt(en.lanes, K), qp(K), j = j.next;
        } while (j !== xt);
      } else f === null && (u.lanes = ie);
      var F = u.dispatch;
      return [i.memoizedState, F];
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
        ce(p, i.memoizedState) || Hp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function RD(e, t, a) {
    }
    function TD(e, t, a) {
    }
    function $g(e, t, a) {
      var i = en, u = Xl(), s, f = Fr();
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
        rf(v, nc) || IE(i, t, s);
      }
      u.memoizedState = s;
      var g = {
        value: s,
        getSnapshot: t
      };
      return u.queue = g, Sm(QE.bind(null, i, g, e), [e]), i.flags |= Gr, Mp(dr | Hr, WE.bind(null, i, g, s, t), void 0, null), s;
    }
    function hm(e, t, a) {
      var i = en, u = Fi(), s = t();
      if (!Ff) {
        var f = t();
        ce(s, f) || (y("The result of getSnapshot should be cached to avoid an infinite loop"), Ff = !0);
      }
      var p = u.memoizedState, v = !ce(p, s);
      v && (u.memoizedState = s, Hp());
      var g = u.queue;
      if (Np(QE.bind(null, i, g, e), [e]), g.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      hr !== null && hr.memoizedState.tag & dr) {
        i.flags |= Gr, Mp(dr | Hr, WE.bind(null, i, g, s, t), void 0, null);
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
      }, u = en.updateQueue;
      if (u === null)
        u = YE(), en.updateQueue = u, u.stores = [i];
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
        return !ce(a, i);
      } catch {
        return !0;
      }
    }
    function XE(e) {
      var t = Ba(e, nt);
      t !== null && Sr(t, e, nt, rn);
    }
    function mm(e) {
      var t = Xl();
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
      var i = a.dispatch = g1.bind(null, en, a);
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
      }, s = en.updateQueue;
      if (s === null)
        s = YE(), en.updateQueue = s, s.lastEffect = u.next = u;
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
    function Lp(e, t, a, i) {
      var u = Xl(), s = i === void 0 ? null : i;
      en.flags |= e, u.memoizedState = Mp(dr | t, a, void 0, s);
    }
    function gm(e, t, a, i) {
      var u = Fi(), s = i === void 0 ? null : i, f = void 0;
      if (vr !== null) {
        var p = vr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Fg(s, v)) {
            u.memoizedState = Mp(t, a, f, s);
            return;
          }
        }
      }
      en.flags |= e, u.memoizedState = Mp(dr | t, a, f, s);
    }
    function Sm(e, t) {
      return (en.mode & Pt) !== Ke ? Lp(xi | Gr | Oc, Hr, e, t) : Lp(Gr | Oc, Hr, e, t);
    }
    function Np(e, t) {
      return gm(Gr, Hr, e, t);
    }
    function Qg(e, t) {
      return Lp(Dt, Gl, e, t);
    }
    function Em(e, t) {
      return gm(Dt, Gl, e, t);
    }
    function Gg(e, t) {
      var a = Dt;
      return a |= Xi, (en.mode & Pt) !== Ke && (a |= Ol), Lp(a, pr, e, t);
    }
    function Cm(e, t) {
      return gm(Dt, pr, e, t);
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
      var i = a != null ? a.concat([e]) : null, u = Dt;
      return u |= Xi, (en.mode & Pt) !== Ke && (u |= Ol), Lp(u, pr, KE.bind(null, t, e), i);
    }
    function Rm(e, t, a) {
      typeof t != "function" && y("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return gm(Dt, pr, KE.bind(null, t, e), i);
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
      var t = Fi(), a = vr, i = a.memoizedState;
      return JE(t, i, e);
    }
    function ZE(e) {
      var t = Fi();
      if (vr === null)
        return t.memoizedState = e, e;
      var a = vr.memoizedState;
      return JE(t, a, e);
    }
    function JE(e, t, a) {
      var i = !Ad(nc);
      if (i) {
        if (!ce(a, t)) {
          var u = Fd();
          en.lanes = mt(en.lanes, u), qp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Hp()), e.memoizedState = a, a;
    }
    function h1(e, t, a) {
      var i = Ha();
      Vn(nh(i, Di)), e(!0);
      var u = kp.transition;
      kp.transition = {};
      var s = kp.transition;
      kp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Vn(i), kp.transition = u, u === null && s._updatedFibers) {
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
      if (Fr()) {
        var u = Nx();
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
        var s = LE(e, t, u, i);
        if (s !== null) {
          var f = Ca();
          Sr(s, e, i, f), iC(s, t, i);
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
        if (e.lanes === ie && (s === null || s.lanes === ie)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Me.current, Me.current = ol;
            try {
              var v = t.lastRenderedState, g = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = g, ce(g, v)) {
                n1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Me.current = p;
            }
          }
        }
        var C = LE(e, t, u, i);
        if (C !== null) {
          var O = Ca();
          Sr(C, e, i, O), iC(C, t, i);
        }
      }
      lC(e, i);
    }
    function rC(e) {
      var t = e.alternate;
      return e === en || t !== null && t === en;
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
        var u = mt(i, a);
        t.lanes = u, lf(e, u);
      }
    }
    function lC(e, t, a) {
      gs(e, t);
    }
    var bm = {
      readContext: ar,
      useCallback: la,
      useContext: la,
      useEffect: la,
      useImperativeHandle: la,
      useInsertionEffect: la,
      useLayoutEffect: la,
      useMemo: la,
      useReducer: la,
      useRef: la,
      useState: la,
      useDebugValue: la,
      useDeferredValue: la,
      useTransition: la,
      useMutableSource: la,
      useSyncExternalStore: la,
      useId: la,
      unstable_isNewReconciler: me
    }, uC = null, oC = null, sC = null, cC = null, Kl = null, ol = null, km = null;
    {
      var tS = function() {
        y("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, st = function() {
        y("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      uC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Wt(), Hf(t), Kg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Wt(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Wt(), Hf(t), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", Wt(), Hf(a), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Wt(), Hf(t), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Wt(), Hf(t), Gg(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Wt(), Hf(t);
          var a = Me.current;
          Me.current = Kl;
          try {
            return qg(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", Wt();
          var i = Me.current;
          Me.current = Kl;
          try {
            return Pg(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", Wt(), Wg(e);
        },
        useState: function(e) {
          J = "useState", Wt();
          var t = Me.current;
          Me.current = Kl;
          try {
            return mm(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Wt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Wt(), Zg(e);
        },
        useTransition: function() {
          return J = "useTransition", Wt(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", Wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", Wt(), $g(e, t, a);
        },
        useId: function() {
          return J = "useId", Wt(), eS();
        },
        unstable_isNewReconciler: me
      }, oC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", we(), Kg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", we(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", we(), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", we(), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", we(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", we(), Gg(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", we();
          var a = Me.current;
          Me.current = Kl;
          try {
            return qg(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", we();
          var i = Me.current;
          Me.current = Kl;
          try {
            return Pg(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", we(), Wg(e);
        },
        useState: function(e) {
          J = "useState", we();
          var t = Me.current;
          Me.current = Kl;
          try {
            return mm(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", we(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", we(), Zg(e);
        },
        useTransition: function() {
          return J = "useTransition", we(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", we(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", we(), $g(e, t, a);
        },
        useId: function() {
          return J = "useId", we(), eS();
        },
        unstable_isNewReconciler: me
      }, sC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", we(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", we(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", we(), Np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", we(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", we(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", we(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", we();
          var a = Me.current;
          Me.current = ol;
          try {
            return xm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", we();
          var i = Me.current;
          Me.current = ol;
          try {
            return Vg(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", we(), ym();
        },
        useState: function(e) {
          J = "useState", we();
          var t = Me.current;
          Me.current = ol;
          try {
            return Yg(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", we(), Tm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", we(), qE(e);
        },
        useTransition: function() {
          return J = "useTransition", we(), eC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", we(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", we(), hm(e, t);
        },
        useId: function() {
          return J = "useId", we(), _m();
        },
        unstable_isNewReconciler: me
      }, cC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", we(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", we(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", we(), Np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", we(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", we(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", we(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", we();
          var a = Me.current;
          Me.current = km;
          try {
            return xm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", we();
          var i = Me.current;
          Me.current = km;
          try {
            return Bg(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", we(), ym();
        },
        useState: function(e) {
          J = "useState", we();
          var t = Me.current;
          Me.current = km;
          try {
            return Ig(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", we(), Tm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", we(), ZE(e);
        },
        useTransition: function() {
          return J = "useTransition", we(), tC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", we(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", we(), hm(e, t);
        },
        useId: function() {
          return J = "useId", we(), _m();
        },
        unstable_isNewReconciler: me
      }, Kl = {
        readContext: function(e) {
          return tS(), ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", st(), Wt(), Kg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", st(), Wt(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", st(), Wt(), Sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", st(), Wt(), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", st(), Wt(), Qg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", st(), Wt(), Gg(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", st(), Wt();
          var a = Me.current;
          Me.current = Kl;
          try {
            return qg(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", st(), Wt();
          var i = Me.current;
          Me.current = Kl;
          try {
            return Pg(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", st(), Wt(), Wg(e);
        },
        useState: function(e) {
          J = "useState", st(), Wt();
          var t = Me.current;
          Me.current = Kl;
          try {
            return mm(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", st(), Wt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", st(), Wt(), Zg(e);
        },
        useTransition: function() {
          return J = "useTransition", st(), Wt(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", st(), Wt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", st(), Wt(), $g(e, t, a);
        },
        useId: function() {
          return J = "useId", st(), Wt(), eS();
        },
        unstable_isNewReconciler: me
      }, ol = {
        readContext: function(e) {
          return tS(), ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", st(), we(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", st(), we(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", st(), we(), Np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", st(), we(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", st(), we(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", st(), we(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", st(), we();
          var a = Me.current;
          Me.current = ol;
          try {
            return xm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", st(), we();
          var i = Me.current;
          Me.current = ol;
          try {
            return Vg(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", st(), we(), ym();
        },
        useState: function(e) {
          J = "useState", st(), we();
          var t = Me.current;
          Me.current = ol;
          try {
            return Yg(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", st(), we(), Tm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", st(), we(), qE(e);
        },
        useTransition: function() {
          return J = "useTransition", st(), we(), eC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", st(), we(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", st(), we(), hm(e, t);
        },
        useId: function() {
          return J = "useId", st(), we(), _m();
        },
        unstable_isNewReconciler: me
      }, km = {
        readContext: function(e) {
          return tS(), ar(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", st(), we(), wm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", st(), we(), ar(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", st(), we(), Np(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", st(), we(), Rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", st(), we(), Em(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", st(), we(), Cm(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", st(), we();
          var a = Me.current;
          Me.current = ol;
          try {
            return xm(e, t);
          } finally {
            Me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", st(), we();
          var i = Me.current;
          Me.current = ol;
          try {
            return Bg(e, t, a);
          } finally {
            Me.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", st(), we(), ym();
        },
        useState: function(e) {
          J = "useState", st(), we();
          var t = Me.current;
          Me.current = ol;
          try {
            return Ig(e);
          } finally {
            Me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", st(), we(), Tm();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", st(), we(), ZE(e);
        },
        useTransition: function() {
          return J = "useTransition", st(), we(), tC();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", st(), we(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", st(), we(), hm(e, t);
        },
        useId: function() {
          return J = "useId", st(), we(), _m();
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
    function Lm(e, t) {
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
            case ve:
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
            case ve:
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
        var a = yt({}, t), i = e.defaultProps;
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
          var a = zt(e) || "Component";
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
        if (e.mode & Jt) {
          Cn(!0);
          try {
            s = a(i, u);
          } finally {
            Cn(!1);
          }
        }
        mC(t, s);
      }
      var f = s == null ? u : yt({}, u, s);
      if (e.memoizedState = f, e.lanes === ie) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var yS = {
      isMounted: Pv,
      enqueueSetState: function(e, t, a) {
        var i = mo(e), u = Ca(), s = Io(i), f = $u(u, s);
        f.payload = t, a != null && (Nm(a, "setState"), f.callback = a);
        var p = jo(i, f, s);
        p !== null && (Sr(p, i, s, u), om(p, i, s)), gs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = mo(e), u = Ca(), s = Io(i), f = $u(u, s);
        f.tag = zE, f.payload = t, a != null && (Nm(a, "replaceState"), f.callback = a);
        var p = jo(i, f, s);
        p !== null && (Sr(p, i, s, u), om(p, i, s)), gs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = mo(e), i = Ca(), u = Io(a), s = $u(i, u);
        s.tag = im, t != null && (Nm(t, "forceUpdate"), s.callback = t);
        var f = jo(a, s, u);
        f !== null && (Sr(f, a, u, i), om(f, a, u)), jc(a, u);
      }
    };
    function gC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Jt) {
            Cn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Cn(!1);
            }
          }
          v === void 0 && y("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", zt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !He(a, i) || !He(u, s) : !0;
    }
    function R1(e, t, a) {
      var i = e.stateNode;
      {
        var u = zt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? y("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : y("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && y("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && y("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && y("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Jt) === Ke && (Ap.add(t), y(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Ap.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & Jt) === Ke && (Ap.add(t), y(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && y("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !vS.has(t) && (vS.add(t), y("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && y("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && y("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", zt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && y("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && y("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && y("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && y("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && y("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && y("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !cS.has(t) && (cS.add(t), y("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", zt(t))), typeof i.getDerivedStateFromProps == "function" && y("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && y("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && y("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || St(p)) && y("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && y("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
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
          f === null || f !== void 0 && f.$$typeof === _ && f._context === void 0
        );
        if (!p && !hS.has(t)) {
          hS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === mi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", y("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", zt(t) || "Component", v);
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
      if (e.mode & Jt) {
        Cn(!0);
        try {
          C = new t(a, s);
        } finally {
          Cn(!1);
        }
      }
      var O = e.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null;
      SC(e, C);
      {
        if (typeof t.getDerivedStateFromProps == "function" && O === null) {
          var k = zt(t) || "Component";
          sS.has(k) || (sS.add(k), y("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, C.state === null ? "null" : "undefined", k));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof C.getSnapshotBeforeUpdate == "function") {
          var V = null, Y = null, X = null;
          if (typeof C.componentWillMount == "function" && C.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof C.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof C.componentWillReceiveProps == "function" && C.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof C.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof C.componentWillUpdate == "function" && C.componentWillUpdate.__suppressDeprecationWarning !== !0 ? X = "componentWillUpdate" : typeof C.UNSAFE_componentWillUpdate == "function" && (X = "UNSAFE_componentWillUpdate"), V !== null || Y !== null || X !== null) {
            var ke = zt(t) || "Component", Ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fS.has(ke) || (fS.add(ke), y(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ke, Ze, V !== null ? `
  ` + V : "", Y !== null ? `
  ` + Y : "", X !== null ? `
  ` + X : ""));
          }
        }
      }
      return i && sE(e, u, s), C;
    }
    function T1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (y("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", lt(e) || "Component"), yS.enqueueReplaceState(t, t.state, null));
    }
    function CC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = lt(e) || "Component";
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
          var p = zt(t) || "Component";
          pS.has(p) || (pS.add(p), y("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Jt && ll.recordLegacyContextWarning(e, u), ll.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (mS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (T1(e, u), sm(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var g = Dt;
        g |= Xi, (e.mode & Pt) !== Ke && (g |= Ol), e.flags |= g;
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
      var C = t.getDerivedStateFromProps, O = typeof C == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !O && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && CC(e, u, a, v), UE();
      var k = e.memoizedState, V = u.state = k;
      if (sm(e, a, u, i), V = e.memoizedState, s === a && k === V && !Yh() && !cm()) {
        if (typeof u.componentDidMount == "function") {
          var Y = Dt;
          Y |= Xi, (e.mode & Pt) !== Ke && (Y |= Ol), e.flags |= Y;
        }
        return !1;
      }
      typeof C == "function" && (mS(e, t, C, a), V = e.memoizedState);
      var X = cm() || gC(e, t, s, a, k, V, v);
      if (X) {
        if (!O && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ke = Dt;
          ke |= Xi, (e.mode & Pt) !== Ke && (ke |= Ol), e.flags |= ke;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ze = Dt;
          Ze |= Xi, (e.mode & Pt) !== Ke && (Ze |= Ol), e.flags |= Ze;
        }
        e.memoizedProps = a, e.memoizedState = V;
      }
      return u.props = a, u.state = V, u.context = v, X;
    }
    function x1(e, t, a, i, u) {
      var s = t.stateNode;
      AE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : sl(t.type, f);
      s.props = p;
      var v = t.pendingProps, g = s.context, C = a.contextType, O = ci;
      if (typeof C == "object" && C !== null)
        O = ar(C);
      else {
        var k = bf(t, a, !0);
        O = kf(t, k);
      }
      var V = a.getDerivedStateFromProps, Y = typeof V == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !Y && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || g !== O) && CC(t, s, i, O), UE();
      var X = t.memoizedState, ke = s.state = X;
      if (sm(t, i, s, u), ke = t.memoizedState, f === v && X === ke && !Yh() && !cm() && !$e)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Dt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Gn), !1;
      typeof V == "function" && (mS(t, a, V, i), ke = t.memoizedState);
      var Ze = cm() || gC(t, a, p, i, X, ke, O) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      $e;
      return Ze ? (!Y && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ke, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ke, O)), typeof s.componentDidUpdate == "function" && (t.flags |= Dt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Gn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Dt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || X !== e.memoizedState) && (t.flags |= Gn), t.memoizedProps = i, t.memoizedState = ke), s.props = i, s.state = ke, s.context = O, Ze;
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
          if (e.tag === U)
            return;
          console.error(i);
        }
        var p = u ? lt(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", g;
        if (e.tag === q)
          g = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var C = lt(e) || "Anonymous";
          g = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + C + ".");
        }
        var O = v + `
` + f + `

` + ("" + g);
        console.error(O);
      } catch (k) {
        setTimeout(function() {
          throw k;
        });
      }
    }
    var b1 = typeof WeakMap == "function" ? WeakMap : Map;
    function RC(e, t, a) {
      var i = $u(rn, a);
      i.tag = xg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Sb(u), ES(e, t);
      }, i;
    }
    function CS(e, t, a) {
      var i = $u(rn, a);
      i.tag = xg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          NR(e), ES(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        NR(e), ES(e, t), typeof u != "function" && yb(this);
        var v = t.value, g = t.stack;
        this.componentDidCatch(v, {
          componentStack: g !== null ? g : ""
        }), typeof u != "function" && (ea(e.lanes, nt) || y("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", lt(e) || "Unknown"));
      }), i;
    }
    function TC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new b1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Eb.bind(null, e, t, a);
        Zr && Zp(e, a), t.then(s, s);
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
      if ((e.mode & Ct) === Ke && (a === W || a === Ee || a === Le)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function wC(e) {
      var t = e;
      do {
        if (t.tag === Re && s1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function xC(e, t, a, i, u) {
      if ((e.mode & Ct) === Ke) {
        if (e === t)
          e.flags |= er;
        else {
          if (e.flags |= Ge, a.flags |= Dc, a.flags &= -52805, a.tag === U) {
            var s = a.alternate;
            if (s === null)
              a.tag = dt;
            else {
              var f = $u(rn, nt);
              f.tag = im, jo(a, f, nt);
            }
          }
          a.lanes = mt(a.lanes, nt);
        }
        return e;
      }
      return e.flags |= er, e.lanes = u, e;
    }
    function O1(e, t, a, i, u) {
      if (a.flags |= ds, Zr && Zp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        D1(a), Fr() && a.mode & Ct && mE();
        var f = wC(t);
        if (f !== null) {
          f.flags &= ~wr, xC(f, t, a, e, u), f.mode & Ct && TC(e, s, u), k1(f, e, s);
          return;
        } else {
          if (!Gv(u)) {
            TC(e, s, u), e0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Fr() && a.mode & Ct) {
        mE();
        var v = wC(t);
        if (v !== null) {
          (v.flags & er) === Xe && (v.flags |= wr), xC(v, t, a, e, u), pg(rc(i, a));
          return;
        }
      }
      i = rc(i, a), sb(i);
      var g = t;
      do {
        switch (g.tag) {
          case q: {
            var C = i;
            g.flags |= er;
            var O = bs(u);
            g.lanes = mt(g.lanes, O);
            var k = RC(g, C, O);
            kg(g, k);
            return;
          }
          case U:
            var V = i, Y = g.type, X = g.stateNode;
            if ((g.flags & Ge) === Xe && (typeof Y.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && !wR(X))) {
              g.flags |= er;
              var ke = bs(u);
              g.lanes = mt(g.lanes, ke);
              var Ze = CS(g, V, ke);
              kg(g, Ze);
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
      e === null ? t.child = kE(t, null, a, i) : t.child = Lf(t, e.child, a, i);
    }
    function L1(e, t, a, i) {
      t.child = Lf(t, e.child, null, i), t.child = Lf(t, null, a, i);
    }
    function _C(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          zt(a)
        );
      }
      var f = a.render, p = t.ref, v, g;
      zf(t, u), ha(t);
      {
        if (Up.current = t, Qn(!0), v = Pf(e, t, f, i, p, u), g = Vf(), t.mode & Jt) {
          Cn(!0);
          try {
            v = Pf(e, t, f, i, p, u), g = Vf();
          } finally {
            Cn(!1);
          }
        }
        Qn(!1);
      }
      return ma(), e !== null && !cl ? (BE(e, t, u), Yu(e, t, u)) : (Fr() && g && ug(t), t.flags |= ii, Sa(e, t, v, u), t.child);
    }
    function bC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (jb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Xf(s), t.tag = Le, t.type = f, DS(t, s), kC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && al(
            p,
            i,
            // Resolved props
            "prop",
            zt(s)
          ), a.defaultProps !== void 0) {
            var v = zt(s) || "Unknown";
            Fp[v] || (y("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Fp[v] = !0);
          }
        }
        var g = f0(a.type, null, i, t, t.mode, u);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var C = a.type, O = C.propTypes;
        O && al(
          O,
          i,
          // Resolved props
          "prop",
          zt(C)
        );
      }
      var k = e.child, V = AS(e, u);
      if (!V) {
        var Y = k.memoizedProps, X = a.compare;
        if (X = X !== null ? X : He, X(Y, i) && e.ref === t.ref)
          return Yu(e, t, u);
      }
      t.flags |= ii;
      var ke = sc(k, i);
      return ke.ref = t.ref, ke.return = t, t.child = ke, ke;
    }
    function kC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === ot) {
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
            zt(s)
          );
        }
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (He(C, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (cl = !1, t.pendingProps = i = C, AS(e, u))
            (e.flags & Dc) !== Xe && (cl = !0);
          else return t.lanes = e.lanes, Yu(e, t, u);
      }
      return bS(e, t, a, i, u);
    }
    function DC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || N)
        if ((t.mode & Ct) === Ke) {
          var f = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Qm(t, a);
        } else if (ea(a, Jr)) {
          var O = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = O;
          var k = s !== null ? s.baseLanes : a;
          Qm(t, k);
        } else {
          var p = null, v;
          if (s !== null) {
            var g = s.baseLanes;
            v = mt(g, a);
          } else
            v = a;
          t.lanes = t.childLanes = Jr;
          var C = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = C, t.updateQueue = null, Qm(t, v), null;
        }
      else {
        var V;
        s !== null ? (V = mt(s.baseLanes, a), t.memoizedState = null) : V = a, Qm(t, V);
      }
      return Sa(e, t, u, a), t.child;
    }
    function N1(e, t, a) {
      var i = t.pendingProps;
      return Sa(e, t, i, a), t.child;
    }
    function z1(e, t, a) {
      var i = t.pendingProps.children;
      return Sa(e, t, i, a), t.child;
    }
    function A1(e, t, a) {
      {
        t.flags |= Dt;
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
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= xn, t.flags |= go);
    }
    function bS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && al(
          s,
          i,
          // Resolved props
          "prop",
          zt(a)
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
        if (Up.current = t, Qn(!0), v = Pf(e, t, a, i, f, u), g = Vf(), t.mode & Jt) {
          Cn(!0);
          try {
            v = Pf(e, t, a, i, f, u), g = Vf();
          } finally {
            Cn(!1);
          }
        }
        Qn(!1);
      }
      return ma(), e !== null && !cl ? (BE(e, t, u), Yu(e, t, u)) : (Fr() && g && ug(t), t.flags |= ii, Sa(e, t, v, u), t.child);
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
            t.flags |= Ge, t.flags |= er;
            var g = new Error("Simulated error coming from DevTools"), C = bs(u);
            t.lanes = mt(t.lanes, C);
            var O = CS(t, rc(g, t), C);
            kg(t, O);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var k = a.propTypes;
          k && al(
            k,
            i,
            // Resolved props
            "prop",
            zt(a)
          );
        }
      }
      var V;
      Ql(a) ? (V = !0, Wh(t)) : V = !1, zf(t, u);
      var Y = t.stateNode, X;
      Y === null ? (Um(e, t), EC(t, a, i), gS(t, a, i, u), X = !0) : e === null ? X = w1(t, a, i, u) : X = x1(e, t, a, i, u);
      var ke = kS(e, t, a, X, V, u);
      {
        var Ze = t.stateNode;
        X && Ze.props !== i && (ac || y("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", lt(t) || "a component"), ac = !0);
      }
      return ke;
    }
    function kS(e, t, a, i, u, s) {
      OC(e, t);
      var f = (t.flags & Ge) !== Xe;
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
          if (Qn(!0), v = p.render(), t.mode & Jt) {
            Cn(!0);
            try {
              p.render();
            } finally {
              Cn(!1);
            }
          }
          Qn(!1);
        }
        ma();
      }
      return t.flags |= ii, e !== null && f ? L1(e, t, v, s) : Sa(e, t, v, s), t.memoizedState = p.state, u && dE(t, a, !0), t.child;
    }
    function LC(e) {
      var t = e.stateNode;
      t.pendingContext ? cE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cE(e, t.context, !1), Dg(e, t.containerInfo);
    }
    function U1(e, t, a) {
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
        }, g = t.updateQueue;
        if (g.baseState = v, t.memoizedState = v, t.flags & wr) {
          var C = rc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return NC(e, t, p, a, C);
        } else if (p !== s) {
          var O = rc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return NC(e, t, p, a, O);
        } else {
          Hx(t);
          var k = kE(t, null, p, a);
          t.child = k;
          for (var V = k; V; )
            V.flags = V.flags & ~En | Xr, V = V.sibling;
        }
      } else {
        if (Mf(), p === s)
          return Yu(e, t, a);
        Sa(e, t, p, a);
      }
      return t.child;
    }
    function NC(e, t, a, i, u) {
      return Mf(), pg(u), t.flags |= wr, Sa(e, t, a, i), t.child;
    }
    function j1(e, t, a) {
      HE(t), e === null && dg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Qy(i, u);
      return p ? f = null : s !== null && Qy(i, s) && (t.flags |= Na), OC(e, t), Sa(e, t, f, a), t.child;
    }
    function F1(e, t) {
      return e === null && dg(t), null;
    }
    function H1(e, t, a, i) {
      Um(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var g = t.tag = Fb(v), C = sl(v, u), O;
      switch (g) {
        case W:
          return DS(t, v), t.type = v = Xf(v), O = bS(null, t, v, C, i), O;
        case U:
          return t.type = v = i0(v), O = MC(null, t, v, C, i), O;
        case Ee:
          return t.type = v = l0(v), O = _C(null, t, v, C, i), O;
        case Be: {
          if (t.type !== t.elementType) {
            var k = v.propTypes;
            k && al(
              k,
              C,
              // Resolved for outer only
              "prop",
              zt(v)
            );
          }
          return O = bC(
            null,
            t,
            v,
            sl(v.type, C),
            // The inner type can have defaults too
            i
          ), O;
        }
      }
      var V = "";
      throw v !== null && typeof v == "object" && v.$$typeof === ot && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function P1(e, t, a, i, u) {
      Um(e, t), t.tag = U;
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
          var g = zt(a) || "Unknown";
          RS[g] || (y("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", g, g), RS[g] = !0);
        }
        t.mode & Jt && ll.recordLegacyContextWarning(t, null), Qn(!0), Up.current = t, p = Pf(null, t, a, u, s, i), v = Vf(), Qn(!1);
      }
      if (ma(), t.flags |= ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var C = zt(a) || "Unknown";
        jp[C] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), jp[C] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var O = zt(a) || "Unknown";
          jp[O] || (y("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), jp[O] = !0);
        }
        t.tag = U, t.memoizedState = null, t.updateQueue = null;
        var k = !1;
        return Ql(a) ? (k = !0, Wh(t)) : k = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, bg(t), SC(t, p), gS(t, a, u, i), kS(null, t, a, !0, k, i);
      } else {
        if (t.tag = W, t.mode & Jt) {
          Cn(!0);
          try {
            p = Pf(null, t, a, u, s, i), v = Vf();
          } finally {
            Cn(!1);
          }
        }
        return Fr() && v && ug(t), Sa(null, t, p, i), DS(t, a), t.child;
      }
    }
    function DS(e, t) {
      {
        if (t && t.childContextTypes && y("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Mr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), xS[u] || (xS[u] = !0, y("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = zt(t) || "Unknown";
          Fp[f] || (y("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Fp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = zt(t) || "Unknown";
          wS[p] || (y("%s: Function components do not support getDerivedStateFromProps.", p), wS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = zt(t) || "Unknown";
          TS[v] || (y("%s: Function components do not support contextType.", v), TS[v] = !0);
        }
      }
    }
    var OS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ut
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
        baseLanes: mt(e.baseLanes, t),
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
      return Lg(e, bp);
    }
    function Y1(e, t) {
      return ks(e.childLanes, t);
    }
    function zC(e, t, a) {
      var i = t.pendingProps;
      Jb(t) && (t.flags |= Ge);
      var u = ul.current, s = !1, f = (t.flags & Ge) !== Xe;
      if (f || $1(u, e) ? (s = !0, t.flags &= ~Ge) : (e === null || e.memoizedState !== null) && (u = o1(u, VE)), u = Uf(u), Ho(t, u), e === null) {
        dg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return X1(t, v);
        }
        var g = i.children, C = i.fallback;
        if (s) {
          var O = I1(t, g, C, a), k = t.child;
          return k.memoizedState = MS(a), t.memoizedState = OS, O;
        } else
          return LS(t, g);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var Y = V.dehydrated;
          if (Y !== null)
            return K1(e, t, f, i, Y, V, a);
        }
        if (s) {
          var X = i.fallback, ke = i.children, Ze = Q1(e, t, ke, X, a), Qe = t.child, Lt = e.child.memoizedState;
          return Qe.memoizedState = Lt === null ? MS(a) : B1(Lt, a), Qe.childLanes = Y1(e, a), t.memoizedState = OS, Ze;
        } else {
          var xt = i.children, j = W1(e, t, xt, a);
          return t.memoizedState = null, j;
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
    function I1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ct) === Ke && s !== null ? (p = s, p.childLanes = ie, p.pendingProps = f, e.mode & Ht && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Qo(a, u, i, null)) : (p = NS(f, u), v = Qo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function NS(e, t, a) {
      return AR(e, t, ie, null);
    }
    function AC(e, t) {
      return sc(e, t);
    }
    function W1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = AC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ct) === Ke && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= La) : p.push(s);
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
        (s & Ct) === Ke && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var C = t.child;
        g = C, g.childLanes = ie, g.pendingProps = v, t.mode & Ht && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = f.selfBaseDuration, g.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        g = AC(f, v), g.subtreeFlags = f.subtreeFlags & Fn;
      var O;
      return p !== null ? O = sc(p, i) : (O = Qo(i, s, u, null), O.flags |= En), O.return = t, g.return = t, g.sibling = O, t.child = g, O;
    }
    function Am(e, t, a, i) {
      i !== null && pg(i), Lf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = LS(t, s);
      return f.flags |= En, t.memoizedState = null, f;
    }
    function G1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = NS(f, s), v = Qo(i, s, u, null);
      return v.flags |= En, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ct) !== Ke && Lf(t, e.child, null, u), v;
    }
    function X1(e, t, a) {
      return (e.mode & Ct) === Ke ? (y("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = nt) : qy(t) ? e.lanes = xr : e.lanes = Jr, null;
    }
    function K1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & wr) {
          t.flags &= ~wr;
          var j = SS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Am(e, t, f, j);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ge, null;
          var K = i.children, F = i.fallback, pe = G1(e, t, K, F, f), Ne = t.child;
          return Ne.memoizedState = MS(f), t.memoizedState = OS, pe;
        }
      else {
        if (jx(), (t.mode & Ct) === Ke)
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
          var O;
          v ? O = new Error(v) : O = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var k = SS(O, p, g);
          return Am(e, t, f, k);
        }
        var V = ea(f, e.childLanes);
        if (cl || V) {
          var Y = Wm();
          if (Y !== null) {
            var X = Vd(Y, f);
            if (X !== Ut && X !== s.retryLane) {
              s.retryLane = X;
              var ke = rn;
              Ba(e, X), Sr(Y, e, X, ke);
            }
          }
          e0();
          var Ze = SS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Am(e, t, f, Ze);
        } else if (aE(u)) {
          t.flags |= Ge, t.child = e.child;
          var Qe = Cb.bind(null, e);
          return tx(u, Qe), null;
        } else {
          Px(t, u, s.treeContext);
          var Lt = i.children, xt = LS(t, Lt);
          return xt.flags |= Xr, xt;
        }
      }
    }
    function UC(e, t, a) {
      e.lanes = mt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = mt(i.lanes, t)), Tg(e.return, t, a);
    }
    function q1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && UC(i, a, e);
        } else if (i.tag === wt)
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
        var a = St(e), i = !a && typeof ht(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return y("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function t_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (St(e)) {
          for (var a = 0; a < e.length; a++)
            if (!jC(e[a], a))
              return;
        } else {
          var i = ht(e);
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
      var p = ul.current, v = Lg(p, bp);
      if (v)
        p = Ng(p, bp), t.flags |= Ge;
      else {
        var g = e !== null && (e.flags & Ge) !== Xe;
        g && q1(t, t.child, a), p = Uf(p);
      }
      if (Ho(t, p), (t.mode & Ct) === Ke)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var C = Z1(t.child), O;
            C === null ? (O = t.child, t.child = null) : (O = C.sibling, C.sibling = null), zS(
              t,
              !1,
              // isBackwards
              O,
              C,
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
              var X = V.sibling;
              V.sibling = k, k = V, V = X;
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
    function n_(e, t, a) {
      Dg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Lf(t, null, i, a) : Sa(e, t, i, a), t.child;
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
        if (ce(g, p)) {
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
      return Up.current = t, Qn(!0), p = s(f), Qn(!1), ma(), t.flags |= ii, Sa(e, t, p, a), t.child;
    }
    function Hp() {
      cl = !0;
    }
    function Um(e, t) {
      (t.mode & Ct) === Ke && e !== null && (e.alternate = null, t.alternate = null, t.flags |= En);
    }
    function Yu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), hC(), qp(t.lanes), ea(a, t.childLanes) ? (qx(e, t), t.child) : null;
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
        return s === null ? (i.deletions = [e], i.flags |= La) : s.push(e), a.flags |= En, a;
      }
    }
    function AS(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function l_(e, t, a) {
      switch (t.tag) {
        case q:
          LC(t), t.stateNode, Mf();
          break;
        case L:
          HE(t);
          break;
        case U: {
          var i = t.type;
          Ql(i) && Wh(t);
          break;
        }
        case te:
          Dg(t, t.stateNode.containerInfo);
          break;
        case re: {
          var u = t.memoizedProps.value, s = t.type._context;
          ME(t, s, u);
          break;
        }
        case ve:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= Dt);
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
              return Ho(t, Uf(ul.current)), t.flags |= Ge, null;
            var g = t.child, C = g.childLanes;
            if (ea(a, C))
              return zC(e, t, a);
            Ho(t, Uf(ul.current));
            var O = Yu(e, t, a);
            return O !== null ? O.sibling : null;
          } else
            Ho(t, Uf(ul.current));
          break;
        }
        case wt: {
          var k = (e.flags & Ge) !== Xe, V = ea(a, t.childLanes);
          if (k) {
            if (V)
              return FC(e, t, a);
            t.flags |= Ge;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Ho(t, ul.current), V)
            break;
          return null;
        }
        case Ae:
        case Nt:
          return t.lanes = ie, DC(e, t, a);
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
          (t.flags & Ge) === Xe)
            return cl = !1, l_(e, t, a);
          (e.flags & Dc) !== Xe ? cl = !0 : cl = !1;
        }
      } else if (cl = !1, Fr() && Mx(t)) {
        var f = t.index, p = Lx();
        hE(t, p, f);
      }
      switch (t.lanes = ie, t.tag) {
        case oe:
          return V1(e, t, t.type, a);
        case ut: {
          var v = t.elementType;
          return H1(e, t, v, a);
        }
        case W: {
          var g = t.type, C = t.pendingProps, O = t.elementType === g ? C : sl(g, C);
          return bS(e, t, g, O, a);
        }
        case U: {
          var k = t.type, V = t.pendingProps, Y = t.elementType === k ? V : sl(k, V);
          return MC(e, t, k, Y, a);
        }
        case q:
          return U1(e, t, a);
        case L:
          return j1(e, t, a);
        case fe:
          return F1(e, t);
        case Re:
          return zC(e, t, a);
        case te:
          return n_(e, t, a);
        case Ee: {
          var X = t.type, ke = t.pendingProps, Ze = t.elementType === X ? ke : sl(X, ke);
          return _C(e, t, X, Ze, a);
        }
        case Z:
          return N1(e, t, a);
        case G:
          return z1(e, t, a);
        case ve:
          return A1(e, t, a);
        case re:
          return r_(e, t, a);
        case le:
          return a_(e, t, a);
        case Be: {
          var Qe = t.type, Lt = t.pendingProps, xt = sl(Qe, Lt);
          if (t.type !== t.elementType) {
            var j = Qe.propTypes;
            j && al(
              j,
              xt,
              // Resolved for outer only
              "prop",
              zt(Qe)
            );
          }
          return xt = sl(Qe.type, xt), bC(e, t, Qe, xt, a);
        }
        case Le:
          return kC(e, t, t.type, t.pendingProps, a);
        case dt: {
          var K = t.type, F = t.pendingProps, pe = t.elementType === K ? F : sl(K, F);
          return P1(e, t, K, pe, a);
        }
        case wt:
          return FC(e, t, a);
        case ct:
          break;
        case Ae:
          return DC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bf(e) {
      e.flags |= Dt;
    }
    function BC(e) {
      e.flags |= xn, e.flags |= go;
    }
    var $C, US, YC, IC;
    $C = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === L || u.tag === fe)
          kw(e, u.stateNode);
        else if (u.tag !== te) {
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
      if (!Fr())
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
    function Pr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ie, i = Xe;
      if (t) {
        if ((e.mode & Ht) !== Ke) {
          for (var v = e.selfBaseDuration, g = e.child; g !== null; )
            a = mt(a, mt(g.lanes, g.childLanes)), i |= g.subtreeFlags & Fn, i |= g.flags & Fn, v += g.treeBaseDuration, g = g.sibling;
          e.treeBaseDuration = v;
        } else
          for (var C = e.child; C !== null; )
            a = mt(a, mt(C.lanes, C.childLanes)), i |= C.subtreeFlags & Fn, i |= C.flags & Fn, C.return = e, C = C.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ht) !== Ke) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = mt(a, mt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = mt(a, mt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function u_(e, t, a) {
      if (Ix() && (t.mode & Ct) !== Ke && (t.flags & Ge) === Xe)
        return RE(t), Mf(), t.flags |= wr | ds | er, !1;
      var i = qh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($x(t), Pr(t), (t.mode & Ht) !== Ke) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Mf(), (t.flags & Ge) === Xe && (t.memoizedState = null), t.flags |= Dt, Pr(t), (t.mode & Ht) !== Ke) {
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
        case oe:
        case ut:
        case Le:
        case W:
        case Ee:
        case Z:
        case G:
        case ve:
        case le:
        case Be:
          return Pr(t), null;
        case U: {
          var u = t.type;
          return Ql(u) && Ih(t), Pr(t), null;
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
              (t.flags & wr) !== Xe) && (t.flags |= Gn, TE());
            }
          }
          return US(e, t), Pr(t), null;
        }
        case L: {
          Mg(t);
          var v = FE(), g = t.type;
          if (e !== null && t.stateNode != null)
            YC(e, t, g, i, v), e.ref !== t.ref && BC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Pr(t), null;
            }
            var C = Og(), O = qh(t);
            if (O)
              Vx(t, v, C) && Bf(t);
            else {
              var k = bw(g, i, v, C, t);
              $C(k, t, !1, !1), t.stateNode = k, Dw(k, g, i, v) && Bf(t);
            }
            t.ref !== null && BC(t);
          }
          return Pr(t), null;
        }
        case fe: {
          var V = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            IC(e, t, Y, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var X = FE(), ke = Og(), Ze = qh(t);
            Ze ? Bx(t) && Bf(t) : t.stateNode = Mw(V, X, ke, t);
          }
          return Pr(t), null;
        }
        case Re: {
          jf(t);
          var Qe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Lt = u_(e, t, Qe);
            if (!Lt)
              return t.flags & er ? t : null;
          }
          if ((t.flags & Ge) !== Xe)
            return t.lanes = a, (t.mode & Ht) !== Ke && lS(t), t;
          var xt = Qe !== null, j = e !== null && e.memoizedState !== null;
          if (xt !== j && xt) {
            var K = t.child;
            if (K.flags |= jn, (t.mode & Ct) !== Ke) {
              var F = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              F || Lg(ul.current, VE) ? ob() : e0();
            }
          }
          var pe = t.updateQueue;
          if (pe !== null && (t.flags |= Dt), Pr(t), (t.mode & Ht) !== Ke && xt) {
            var Ne = t.child;
            Ne !== null && (t.treeBaseDuration -= Ne.treeBaseDuration);
          }
          return null;
        }
        case te:
          return Af(t), US(e, t), e === null && wx(t.stateNode.containerInfo), Pr(t), null;
        case re:
          var De = t.type._context;
          return Rg(De, t), Pr(t), null;
        case dt: {
          var rt = t.type;
          return Ql(rt) && Ih(t), Pr(t), null;
        }
        case wt: {
          jf(t);
          var ft = t.memoizedState;
          if (ft === null)
            return Pr(t), null;
          var tn = (t.flags & Ge) !== Xe, Bt = ft.rendering;
          if (Bt === null)
            if (tn)
              Pp(ft, !1);
            else {
              var qn = cb() && (e === null || (e.flags & Ge) === Xe);
              if (!qn)
                for (var $t = t.child; $t !== null; ) {
                  var Yn = pm($t);
                  if (Yn !== null) {
                    tn = !0, t.flags |= Ge, Pp(ft, !1);
                    var ua = Yn.updateQueue;
                    return ua !== null && (t.updateQueue = ua, t.flags |= Dt), t.subtreeFlags = Xe, Zx(t, a), Ho(t, Ng(ul.current, bp)), t.child;
                  }
                  $t = $t.sibling;
                }
              ft.tail !== null && Xn() > pR() && (t.flags |= Ge, tn = !0, Pp(ft, !1), t.lanes = Ld);
            }
          else {
            if (!tn) {
              var Ir = pm(Bt);
              if (Ir !== null) {
                t.flags |= Ge, tn = !0;
                var di = Ir.updateQueue;
                if (di !== null && (t.updateQueue = di, t.flags |= Dt), Pp(ft, !0), ft.tail === null && ft.tailMode === "hidden" && !Bt.alternate && !Fr())
                  return Pr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Xn() * 2 - ft.renderingStartTime > pR() && a !== Jr && (t.flags |= Ge, tn = !0, Pp(ft, !1), t.lanes = Ld);
            }
            if (ft.isBackwards)
              Bt.sibling = t.child, t.child = Bt;
            else {
              var Ra = ft.last;
              Ra !== null ? Ra.sibling = Bt : t.child = Bt, ft.last = Bt;
            }
          }
          if (ft.tail !== null) {
            var Ta = ft.tail;
            ft.rendering = Ta, ft.tail = Ta.sibling, ft.renderingStartTime = Xn(), Ta.sibling = null;
            var oa = ul.current;
            return tn ? oa = Ng(oa, bp) : oa = Uf(oa), Ho(t, oa), Ta;
          }
          return Pr(t), null;
        }
        case ct:
          break;
        case Ae:
        case Nt: {
          JS(t);
          var Xu = t.memoizedState, Kf = Xu !== null;
          if (e !== null) {
            var nv = e.memoizedState, tu = nv !== null;
            tu !== Kf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !N && (t.flags |= jn);
          }
          return !Kf || (t.mode & Ct) === Ke ? Pr(t) : ea(eu, Jr) && (Pr(t), t.subtreeFlags & (En | Dt) && (t.flags |= jn)), null;
        }
        case _t:
          return null;
        case kt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function o_(e, t, a) {
      switch (og(t), t.tag) {
        case U: {
          var i = t.type;
          Ql(i) && Ih(t);
          var u = t.flags;
          return u & er ? (t.flags = u & ~er | Ge, (t.mode & Ht) !== Ke && lS(t), t) : null;
        }
        case q: {
          t.stateNode, Af(t), ag(t), Ag();
          var s = t.flags;
          return (s & er) !== Xe && (s & Ge) === Xe ? (t.flags = s & ~er | Ge, t) : null;
        }
        case L:
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
          return p & er ? (t.flags = p & ~er | Ge, (t.mode & Ht) !== Ke && lS(t), t) : null;
        }
        case wt:
          return jf(t), null;
        case te:
          return Af(t), null;
        case re:
          var v = t.type._context;
          return Rg(v, t), null;
        case Ae:
        case Nt:
          return JS(t), null;
        case _t:
          return null;
        default:
          return null;
      }
    }
    function QC(e, t, a) {
      switch (og(t), t.tag) {
        case U: {
          var i = t.type.childContextTypes;
          i != null && Ih(t);
          break;
        }
        case q: {
          t.stateNode, Af(t), ag(t), Ag();
          break;
        }
        case L: {
          Mg(t);
          break;
        }
        case te:
          Af(t);
          break;
        case Re:
          jf(t);
          break;
        case wt:
          jf(t);
          break;
        case re:
          var u = t.type._context;
          Rg(u, t);
          break;
        case Ae:
        case Nt:
          JS(t);
          break;
      }
    }
    var GC = null;
    GC = /* @__PURE__ */ new Set();
    var jm = !1, Vr = !1, s_ = typeof WeakSet == "function" ? WeakSet : Set, Pe = null, $f = null, Yf = null;
    function c_(e) {
      Dl(null, function() {
        throw e;
      }), fs();
    }
    var f_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ht)
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
        Bo(pr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function jS(e, t, a) {
      try {
        f_(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function d_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function KC(e, t) {
      try {
        ZC(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function If(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ge && Ce && e.mode & Ht)
              try {
                Zl(), i = a(null);
              } finally {
                ql(e);
              }
            else
              i = a(null);
          } catch (u) {
            vn(e, t, u);
          }
          typeof i == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", lt(e));
        } else
          a.current = null;
    }
    function Fm(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var qC = !1;
    function p_(e, t) {
      xw(e.containerInfo), Pe = t, v_();
      var a = qC;
      return qC = !1, a;
    }
    function v_() {
      for (; Pe !== null; ) {
        var e = Pe, t = e.child;
        (e.subtreeFlags & Ml) !== Xe && t !== null ? (t.return = e, Pe = t) : h_();
      }
    }
    function h_() {
      for (; Pe !== null; ) {
        var e = Pe;
        Kt(e);
        try {
          m_(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        pn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Pe = t;
          return;
        }
        Pe = e.return;
      }
    }
    function m_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Gn) !== Xe) {
        switch (Kt(e), e.tag) {
          case W:
          case Ee:
          case Le:
            break;
          case U: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ac && (s.props !== e.memoizedProps && y("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(e) || "instance"), s.state !== e.memoizedState && y("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : sl(e.type, i), u);
              {
                var p = GC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), y("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", lt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case q: {
            {
              var v = e.stateNode;
              Kw(v.containerInfo);
            }
            break;
          }
          case L:
          case fe:
          case te:
          case dt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        pn();
      }
    }
    function fl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Hr) !== $a ? Zi(t) : (e & pr) !== $a && vs(t), (e & Gl) !== $a && Jp(!0), Fm(t, a, p), (e & Gl) !== $a && Jp(!1), (e & Hr) !== $a ? Al() : (e & pr) !== $a && Od());
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
            (e & Hr) !== $a ? Dd(t) : (e & pr) !== $a && Ac(t);
            var f = s.create;
            (e & Gl) !== $a && Jp(!0), s.destroy = f(), (e & Gl) !== $a && Jp(!1), (e & Hr) !== $a ? $v() : (e & pr) !== $a && Yv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & pr) !== Xe ? v = "useLayoutEffect" : (s.tag & Gl) !== Xe ? v = "useInsertionEffect" : v = "useEffect";
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
      if ((t.flags & Dt) !== Xe)
        switch (t.tag) {
          case ve: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = pC(), p = t.alternate === null ? "mount" : "update";
            dC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case q:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
                case ve:
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
      if ((a.flags & Nl) !== Xe)
        switch (a.tag) {
          case W:
          case Ee:
          case Le: {
            if (!Vr)
              if (a.mode & Ht)
                try {
                  Zl(), Bo(pr | dr, a);
                } finally {
                  ql(a);
                }
              else
                Bo(pr | dr, a);
            break;
          }
          case U: {
            var u = a.stateNode;
            if (a.flags & Dt && !Vr)
              if (t === null)
                if (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), a.mode & Ht)
                  try {
                    Zl(), u.componentDidMount();
                  } finally {
                    ql(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : sl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), a.mode & Ht)
                  try {
                    Zl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    ql(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && y("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", lt(a) || "instance"), u.state !== a.memoizedState && y("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", lt(a) || "instance")), jE(a, p, u));
            break;
          }
          case q: {
            var v = a.updateQueue;
            if (v !== null) {
              var g = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case L:
                    g = a.child.stateNode;
                    break;
                  case U:
                    g = a.child.stateNode;
                    break;
                }
              jE(a, v, g);
            }
            break;
          }
          case L: {
            var C = a.stateNode;
            if (t === null && a.flags & Dt) {
              var O = a.type, k = a.memoizedProps;
              Uw(C, O, k);
            }
            break;
          }
          case fe:
            break;
          case te:
            break;
          case ve: {
            {
              var V = a.memoizedProps, Y = V.onCommit, X = V.onRender, ke = a.stateNode.effectDuration, Ze = pC(), Qe = t === null ? "mount" : "update";
              dC() && (Qe = "nested-update"), typeof X == "function" && X(a.memoizedProps.id, Qe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ze);
              {
                typeof Y == "function" && Y(a.memoizedProps.id, Qe, ke, Ze), hb(a);
                var Lt = a.return;
                e: for (; Lt !== null; ) {
                  switch (Lt.tag) {
                    case q:
                      var xt = Lt.stateNode;
                      xt.effectDuration += ke;
                      break e;
                    case ve:
                      var j = Lt.stateNode;
                      j.effectDuration += ke;
                      break e;
                  }
                  Lt = Lt.return;
                }
              }
            }
            break;
          }
          case Re: {
            __(e, a);
            break;
          }
          case wt:
          case dt:
          case ct:
          case Ae:
          case Nt:
          case kt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vr || a.flags & xn && ZC(a);
    }
    function S_(e) {
      switch (e.tag) {
        case W:
        case Ee:
        case Le: {
          if (e.mode & Ht)
            try {
              Zl(), XC(e, e.return);
            } finally {
              ql(e);
            }
          else
            XC(e, e.return);
          break;
        }
        case U: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && d_(e, e.return, t), KC(e, e.return);
          break;
        }
        case L: {
          KC(e, e.return);
          break;
        }
      }
    }
    function E_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === L) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Ww(u) : Gw(i.stateNode, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
          }
        } else if (i.tag === fe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Qw(s) : Xw(s, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
        } else if (!((i.tag === Ae || i.tag === Nt) && i.memoizedState !== null && i !== e)) {
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
          case L:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ht)
            try {
              Zl(), u = t(i);
            } finally {
              ql(e);
            }
          else
            u = t(i);
          typeof u == "function" && y("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", lt(e));
        } else
          t.hasOwnProperty("current") || y("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", lt(e)), t.current = i;
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
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === L) {
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
      return e.tag === L || e.tag === q || e.tag === te;
    }
    function tR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || eR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== L && t.tag !== fe && t.tag !== it; ) {
          if (t.flags & En || t.child === null || t.tag === te)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & En))
          return t.stateNode;
      }
    }
    function T_(e) {
      var t = R_(e);
      switch (t.tag) {
        case L: {
          var a = t.stateNode;
          t.flags & Na && (rE(a), t.flags &= ~Na);
          var i = tR(e);
          HS(e, i, a);
          break;
        }
        case q:
        case te: {
          var u = t.stateNode.containerInfo, s = tR(e);
          FS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function FS(e, t, a) {
      var i = e.tag, u = i === L || i === fe;
      if (u) {
        var s = e.stateNode;
        t ? Bw(a, s, t) : Pw(a, s);
      } else if (i !== te) {
        var f = e.child;
        if (f !== null) {
          FS(f, t, a);
          for (var p = f.sibling; p !== null; )
            FS(p, t, a), p = p.sibling;
        }
      }
    }
    function HS(e, t, a) {
      var i = e.tag, u = i === L || i === fe;
      if (u) {
        var s = e.stateNode;
        t ? Vw(a, s, t) : Hw(a, s);
      } else if (i !== te) {
        var f = e.child;
        if (f !== null) {
          HS(f, t, a);
          for (var p = f.sibling; p !== null; )
            HS(p, t, a), p = p.sibling;
        }
      }
    }
    var Br = null, dl = !1;
    function w_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case L: {
              Br = i.stateNode, dl = !1;
              break e;
            }
            case q: {
              Br = i.stateNode.containerInfo, dl = !0;
              break e;
            }
            case te: {
              Br = i.stateNode.containerInfo, dl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Br === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        nR(e, t, a), Br = null, dl = !1;
      }
      C_(a);
    }
    function $o(e, t, a) {
      for (var i = a.child; i !== null; )
        nR(e, t, i), i = i.sibling;
    }
    function nR(e, t, a) {
      switch (_d(a), a.tag) {
        case L:
          Vr || If(a, t);
        case fe: {
          {
            var i = Br, u = dl;
            Br = null, $o(e, t, a), Br = i, dl = u, Br !== null && (dl ? Yw(Br, a.stateNode) : $w(Br, a.stateNode));
          }
          return;
        }
        case it: {
          Br !== null && (dl ? Iw(Br, a.stateNode) : Ky(Br, a.stateNode));
          return;
        }
        case te: {
          {
            var s = Br, f = dl;
            Br = a.stateNode.containerInfo, dl = !0, $o(e, t, a), Br = s, dl = f;
          }
          return;
        }
        case W:
        case Ee:
        case Be:
        case Le: {
          if (!Vr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var g = v.next, C = g;
                do {
                  var O = C, k = O.destroy, V = O.tag;
                  k !== void 0 && ((V & Gl) !== $a ? Fm(a, t, k) : (V & pr) !== $a && (vs(a), a.mode & Ht ? (Zl(), Fm(a, t, k), ql(a)) : Fm(a, t, k), Od())), C = C.next;
                } while (C !== g);
              }
            }
          }
          $o(e, t, a);
          return;
        }
        case U: {
          if (!Vr) {
            If(a, t);
            var Y = a.stateNode;
            typeof Y.componentWillUnmount == "function" && jS(a, t, Y);
          }
          $o(e, t, a);
          return;
        }
        case ct: {
          $o(e, t, a);
          return;
        }
        case Ae: {
          if (
            // TODO: Remove this dead flag
            a.mode & Ct
          ) {
            var X = Vr;
            Vr = X || a.memoizedState !== null, $o(e, t, a), Vr = X;
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
            if (a.add(i), Zr)
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
      $f = a, Yf = e, Kt(t), aR(t, e), Kt(t), $f = null, Yf = null;
    }
    function pl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            w_(e, t, s);
          } catch (v) {
            vn(s, t, v);
          }
        }
      var f = Rl();
      if (t.subtreeFlags & Ll)
        for (var p = t.child; p !== null; )
          Kt(p), aR(p, e), p = p.sibling;
      Kt(f);
    }
    function aR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case W:
        case Ee:
        case Be:
        case Le: {
          if (pl(t, e), Jl(e), u & Dt) {
            try {
              fl(Gl | dr, e, e.return), Bo(Gl | dr, e);
            } catch (rt) {
              vn(e, e.return, rt);
            }
            if (e.mode & Ht) {
              try {
                Zl(), fl(pr | dr, e, e.return);
              } catch (rt) {
                vn(e, e.return, rt);
              }
              ql(e);
            } else
              try {
                fl(pr | dr, e, e.return);
              } catch (rt) {
                vn(e, e.return, rt);
              }
          }
          return;
        }
        case U: {
          pl(t, e), Jl(e), u & xn && i !== null && If(i, i.return);
          return;
        }
        case L: {
          pl(t, e), Jl(e), u & xn && i !== null && If(i, i.return);
          {
            if (e.flags & Na) {
              var s = e.stateNode;
              try {
                rE(s);
              } catch (rt) {
                vn(e, e.return, rt);
              }
            }
            if (u & Dt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, g = e.type, C = e.updateQueue;
                if (e.updateQueue = null, C !== null)
                  try {
                    jw(f, C, g, v, p, e);
                  } catch (rt) {
                    vn(e, e.return, rt);
                  }
              }
            }
          }
          return;
        }
        case fe: {
          if (pl(t, e), Jl(e), u & Dt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var O = e.stateNode, k = e.memoizedProps, V = i !== null ? i.memoizedProps : k;
            try {
              Fw(O, V, k);
            } catch (rt) {
              vn(e, e.return, rt);
            }
          }
          return;
        }
        case q: {
          if (pl(t, e), Jl(e), u & Dt && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                sx(t.containerInfo);
              } catch (rt) {
                vn(e, e.return, rt);
              }
          }
          return;
        }
        case te: {
          pl(t, e), Jl(e);
          return;
        }
        case Re: {
          pl(t, e), Jl(e);
          var X = e.child;
          if (X.flags & jn) {
            var ke = X.stateNode, Ze = X.memoizedState, Qe = Ze !== null;
            if (ke.isHidden = Qe, Qe) {
              var Lt = X.alternate !== null && X.alternate.memoizedState !== null;
              Lt || ub();
            }
          }
          if (u & Dt) {
            try {
              x_(e);
            } catch (rt) {
              vn(e, e.return, rt);
            }
            rR(e);
          }
          return;
        }
        case Ae: {
          var xt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Ct
          ) {
            var j = Vr;
            Vr = j || xt, pl(t, e), Vr = j;
          } else
            pl(t, e);
          if (Jl(e), u & jn) {
            var K = e.stateNode, F = e.memoizedState, pe = F !== null, Ne = e;
            if (K.isHidden = pe, pe && !xt && (Ne.mode & Ct) !== Ke) {
              Pe = Ne;
              for (var De = Ne.child; De !== null; )
                Pe = De, D_(De), De = De.sibling;
            }
            E_(Ne, pe);
          }
          return;
        }
        case wt: {
          pl(t, e), Jl(e), u & Dt && rR(e);
          return;
        }
        case ct:
          return;
        default: {
          pl(t, e), Jl(e);
          return;
        }
      }
    }
    function Jl(e) {
      var t = e.flags;
      if (t & En) {
        try {
          T_(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= ~En;
      }
      t & Xr && (e.flags &= ~Xr);
    }
    function k_(e, t, a) {
      $f = a, Yf = t, Pe = e, iR(e, t, a), $f = null, Yf = null;
    }
    function iR(e, t, a) {
      for (var i = (e.mode & Ct) !== Ke; Pe !== null; ) {
        var u = Pe, s = u.child;
        if (u.tag === Ae && i) {
          var f = u.memoizedState !== null, p = f || jm;
          if (p) {
            PS(e, t, a);
            continue;
          } else {
            var v = u.alternate, g = v !== null && v.memoizedState !== null, C = g || Vr, O = jm, k = Vr;
            jm = p, Vr = C, Vr && !k && (Pe = u, O_(u));
            for (var V = s; V !== null; )
              Pe = V, iR(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            Pe = u, jm = O, Vr = k, PS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Nl) !== Xe && s !== null ? (s.return = u, Pe = s) : PS(e, t, a);
      }
    }
    function PS(e, t, a) {
      for (; Pe !== null; ) {
        var i = Pe;
        if ((i.flags & Nl) !== Xe) {
          var u = i.alternate;
          Kt(i);
          try {
            g_(t, u, i, a);
          } catch (f) {
            vn(i, i.return, f);
          }
          pn();
        }
        if (i === e) {
          Pe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Pe = s;
          return;
        }
        Pe = i.return;
      }
    }
    function D_(e) {
      for (; Pe !== null; ) {
        var t = Pe, a = t.child;
        switch (t.tag) {
          case W:
          case Ee:
          case Be:
          case Le: {
            if (t.mode & Ht)
              try {
                Zl(), fl(pr, t, t.return);
              } finally {
                ql(t);
              }
            else
              fl(pr, t, t.return);
            break;
          }
          case U: {
            If(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && jS(t, t.return, i);
            break;
          }
          case L: {
            If(t, t.return);
            break;
          }
          case Ae: {
            var u = t.memoizedState !== null;
            if (u) {
              lR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Pe = a) : lR(e);
      }
    }
    function lR(e) {
      for (; Pe !== null; ) {
        var t = Pe;
        if (t === e) {
          Pe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Pe = a;
          return;
        }
        Pe = t.return;
      }
    }
    function O_(e) {
      for (; Pe !== null; ) {
        var t = Pe, a = t.child;
        if (t.tag === Ae) {
          var i = t.memoizedState !== null;
          if (i) {
            uR(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Pe = a) : uR(e);
      }
    }
    function uR(e) {
      for (; Pe !== null; ) {
        var t = Pe;
        Kt(t);
        try {
          S_(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (pn(), t === e) {
          Pe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Pe = a;
          return;
        }
        Pe = t.return;
      }
    }
    function M_(e, t, a, i) {
      Pe = t, L_(t, e, a, i);
    }
    function L_(e, t, a, i) {
      for (; Pe !== null; ) {
        var u = Pe, s = u.child;
        (u.subtreeFlags & Ki) !== Xe && s !== null ? (s.return = u, Pe = s) : N_(e, t, a, i);
      }
    }
    function N_(e, t, a, i) {
      for (; Pe !== null; ) {
        var u = Pe;
        if ((u.flags & Gr) !== Xe) {
          Kt(u);
          try {
            z_(t, u, a, i);
          } catch (f) {
            vn(u, u.return, f);
          }
          pn();
        }
        if (u === e) {
          Pe = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Pe = s;
          return;
        }
        Pe = u.return;
      }
    }
    function z_(e, t, a, i) {
      switch (t.tag) {
        case W:
        case Ee:
        case Le: {
          if (t.mode & Ht) {
            iS();
            try {
              Bo(Hr | dr, t);
            } finally {
              aS(t);
            }
          } else
            Bo(Hr | dr, t);
          break;
        }
      }
    }
    function A_(e) {
      Pe = e, U_();
    }
    function U_() {
      for (; Pe !== null; ) {
        var e = Pe, t = e.child;
        if ((Pe.flags & La) !== Xe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Pe = u, H_(u, e);
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
            Pe = e;
          }
        }
        (e.subtreeFlags & Ki) !== Xe && t !== null ? (t.return = e, Pe = t) : j_();
      }
    }
    function j_() {
      for (; Pe !== null; ) {
        var e = Pe;
        (e.flags & Gr) !== Xe && (Kt(e), F_(e), pn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Pe = t;
          return;
        }
        Pe = e.return;
      }
    }
    function F_(e) {
      switch (e.tag) {
        case W:
        case Ee:
        case Le: {
          e.mode & Ht ? (iS(), fl(Hr | dr, e, e.return), aS(e)) : fl(Hr | dr, e, e.return);
          break;
        }
      }
    }
    function H_(e, t) {
      for (; Pe !== null; ) {
        var a = Pe;
        Kt(a), V_(a, t), pn();
        var i = a.child;
        i !== null ? (i.return = a, Pe = i) : P_(e);
      }
    }
    function P_(e) {
      for (; Pe !== null; ) {
        var t = Pe, a = t.sibling, i = t.return;
        if (JC(t), t === e) {
          Pe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Pe = a;
          return;
        }
        Pe = i;
      }
    }
    function V_(e, t) {
      switch (e.tag) {
        case W:
        case Ee:
        case Le: {
          e.mode & Ht ? (iS(), fl(Hr, e, t), aS(e)) : fl(Hr, e, t);
          break;
        }
      }
    }
    function B_(e) {
      switch (e.tag) {
        case W:
        case Ee:
        case Le: {
          try {
            Bo(pr | dr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case U: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function $_(e) {
      switch (e.tag) {
        case W:
        case Ee:
        case Le: {
          try {
            Bo(Hr | dr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Y_(e) {
      switch (e.tag) {
        case W:
        case Ee:
        case Le: {
          try {
            fl(pr | dr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case U: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && jS(e, e.return, t);
          break;
        }
      }
    }
    function I_(e) {
      switch (e.tag) {
        case W:
        case Ee:
        case Le:
          try {
            fl(Hr | dr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
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
    var K_ = Math.ceil, VS = E.ReactCurrentDispatcher, BS = E.ReactCurrentOwner, $r = E.ReactCurrentBatchConfig, vl = E.ReactCurrentActQueue, mr = (
      /*             */
      0
    ), sR = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Hi = (
      /*                */
      4
    ), Iu = 0, Bp = 1, ic = 2, Hm = 3, $p = 4, cR = 5, $S = 6, Mt = mr, Ea = null, zn = null, yr = ie, eu = ie, YS = No(ie), gr = Iu, Yp = null, Pm = ie, Ip = ie, Vm = ie, Wp = null, Ya = null, IS = 0, fR = 500, dR = 1 / 0, q_ = 500, Wu = null;
    function Qp() {
      dR = Xn() + q_;
    }
    function pR() {
      return dR;
    }
    var Bm = !1, WS = null, Wf = null, lc = !1, Yo = null, Gp = ie, QS = [], GS = null, Z_ = 50, Xp = 0, XS = null, KS = !1, $m = !1, J_ = 50, Qf = 0, Ym = null, Kp = rn, Im = ie, vR = !1;
    function Wm() {
      return Ea;
    }
    function Ca() {
      return (Mt & (Yr | Hi)) !== mr ? Xn() : (Kp !== rn || (Kp = Xn()), Kp);
    }
    function Io(e) {
      var t = e.mode;
      if ((t & Ct) === Ke)
        return nt;
      if ((Mt & Yr) !== mr && yr !== ie)
        return bs(yr);
      var a = Gx() !== Qx;
      if (a) {
        if ($r.transition !== null) {
          var i = $r.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Im === Ut && (Im = Fd()), Im;
      }
      var u = Ha();
      if (u !== Ut)
        return u;
      var s = Lw();
      return s;
    }
    function eb(e) {
      var t = e.mode;
      return (t & Ct) === Ke ? nt : Kv();
    }
    function Sr(e, t, a, i) {
      wb(), vR && y("useInsertionEffect must not schedule updates."), KS && ($m = !0), Ro(e, a, i), (Mt & Yr) !== ie && e === Ea ? bb(t) : (Zr && Os(e, t, a), kb(t), e === Ea && ((Mt & Yr) === mr && (Ip = mt(Ip, a)), gr === $p && Wo(e, yr)), Ia(e, i), a === nt && Mt === mr && (t.mode & Ct) === Ke && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
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
        (Mt & Yr) !== mr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      tf(e, t);
      var i = ef(e, e === Ea ? yr : ie);
      if (i === ie) {
        a !== null && OR(a), e.callbackNode = null, e.callbackPriority = Ut;
        return;
      }
      var u = Fl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(vl.current !== null && a !== r0)) {
        a == null && s !== nt && y("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && OR(a);
      var f;
      if (u === nt)
        e.tag === zo ? (vl.isBatchingLegacy !== null && (vl.didScheduleLegacyUpdate = !0), Ox(yR.bind(null, e))) : pE(yR.bind(null, e)), vl.current !== null ? vl.current.push(Ao) : zw(function() {
          (Mt & (Yr | Hi)) === mr && Ao();
        }), f = null;
      else {
        var p;
        switch (rh(i)) {
          case Nr:
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
      if (E1(), Kp = rn, Im = ie, (Mt & (Yr | Hi)) !== mr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Gu();
      if (i && e.callbackNode !== a)
        return null;
      var u = ef(e, e === Ea ? yr : ie);
      if (u === ie)
        return null;
      var s = !rf(e, u) && !Xv(e, u) && !t, f = s ? db(e, u) : Gm(e, u);
      if (f !== Iu) {
        if (f === ic) {
          var p = nf(e);
          p !== ie && (u = p, f = qS(e, p));
        }
        if (f === Bp) {
          var v = Yp;
          throw uc(e, ie), Wo(e, u), Ia(e, Xn()), v;
        }
        if (f === $S)
          Wo(e, u);
        else {
          var g = !rf(e, u), C = e.current.alternate;
          if (g && !ab(C)) {
            if (f = Gm(e, u), f === ic) {
              var O = nf(e);
              O !== ie && (u = O, f = qS(e, O));
            }
            if (f === Bp) {
              var k = Yp;
              throw uc(e, ie), Wo(e, u), Ia(e, Xn()), k;
            }
          }
          e.finishedWork = C, e.finishedLanes = u, rb(e, f, u);
        }
      }
      return Ia(e, Xn()), e.callbackNode === a ? hR.bind(null, e) : null;
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
            var i = IS + fR - Xn();
            if (i > 10) {
              var u = ef(e, ie);
              if (u !== ie)
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
            var f = ui(e, a), p = f, v = Xn() - p, g = Tb(v) - v;
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
      t = ks(t, Vm), t = ks(t, Ip), Jv(e, t);
    }
    function yR(e) {
      if (C1(), (Mt & (Yr | Hi)) !== mr)
        throw new Error("Should not already be working.");
      Gu();
      var t = ef(e, ie);
      if (!ea(t, nt))
        return Ia(e, Xn()), null;
      var a = Gm(e, t);
      if (e.tag !== zo && a === ic) {
        var i = nf(e);
        i !== ie && (t = i, a = qS(e, i));
      }
      if (a === Bp) {
        var u = Yp;
        throw uc(e, ie), Wo(e, t), Ia(e, Xn()), u;
      }
      if (a === $S)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, oc(e, Ya, Wu), Ia(e, Xn()), null;
    }
    function ib(e, t) {
      t !== ie && (lf(e, mt(t, nt)), Ia(e, Xn()), (Mt & (Yr | Hi)) === mr && (Qp(), Ao()));
    }
    function ZS(e, t) {
      var a = Mt;
      Mt |= sR;
      try {
        return e(t);
      } finally {
        Mt = a, Mt === mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !vl.isBatchingLegacy && (Qp(), vE());
      }
    }
    function lb(e, t, a, i, u) {
      var s = Ha(), f = $r.transition;
      try {
        return $r.transition = null, Vn(Nr), e(t, a, i, u);
      } finally {
        Vn(s), $r.transition = f, Mt === mr && Qp();
      }
    }
    function Qu(e) {
      Yo !== null && Yo.tag === zo && (Mt & (Yr | Hi)) === mr && Gu();
      var t = Mt;
      Mt |= sR;
      var a = $r.transition, i = Ha();
      try {
        return $r.transition = null, Vn(Nr), e ? e() : void 0;
      } finally {
        Vn(i), $r.transition = a, Mt = t, (Mt & (Yr | Hi)) === mr && Ao();
      }
    }
    function gR() {
      return (Mt & (Yr | Hi)) !== mr;
    }
    function Qm(e, t) {
      ia(YS, eu, e), eu = mt(eu, t);
    }
    function JS(e) {
      eu = YS.current, aa(YS, e);
    }
    function uc(e, t) {
      e.finishedWork = null, e.finishedLanes = ie;
      var a = e.timeoutHandle;
      if (a !== Xy && (e.timeoutHandle = Xy, Nw(a)), zn !== null)
        for (var i = zn.return; i !== null; ) {
          var u = i.alternate;
          QC(u, i), i = i.return;
        }
      Ea = e;
      var s = sc(e.current, null);
      return zn = s, yr = eu = t, gr = Iu, Yp = null, Pm = ie, Ip = ie, Vm = ie, Wp = null, Ya = null, t1(), ll.discardPendingWarnings(), s;
    }
    function SR(e, t) {
      do {
        var a = zn;
        try {
          if (rm(), $E(), pn(), BS.current = null, a === null || a.return === null) {
            gr = Bp, Yp = t, zn = null;
            return;
          }
          if (ge && a.mode & Ht && Lm(a, !0), he)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ki(a, i, yr);
            } else
              hs(a, t, yr);
          O1(e, a.return, a, t, yr), TR(a);
        } catch (u) {
          t = u, zn === a && a !== null ? (a = a.return, zn = a) : a = zn;
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
      IS = Xn();
    }
    function qp(e) {
      Pm = mt(e, Pm);
    }
    function ob() {
      gr === Iu && (gr = Hm);
    }
    function e0() {
      (gr === Iu || gr === Hm || gr === ic) && (gr = $p), Ea !== null && (_s(Pm) || _s(Ip)) && Wo(Ea, yr);
    }
    function sb(e) {
      gr !== $p && (gr = ic), Wp === null ? Wp = [e] : Wp.push(e);
    }
    function cb() {
      return gr === Iu;
    }
    function Gm(e, t) {
      var a = Mt;
      Mt |= Yr;
      var i = ER();
      if (Ea !== e || yr !== t) {
        if (Zr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, yr), u.clear()), eh(e, t);
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
      if (rm(), Mt = a, CR(i), zn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Uc(), Ea = null, yr = ie, gr;
    }
    function fb() {
      for (; zn !== null; )
        RR(zn);
    }
    function db(e, t) {
      var a = Mt;
      Mt |= Yr;
      var i = ER();
      if (Ea !== e || yr !== t) {
        if (Zr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Zp(e, yr), u.clear()), eh(e, t);
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
      return rm(), CR(i), Mt = a, zn !== null ? (Iv(), Iu) : (Uc(), Ea = null, yr = ie, gr);
    }
    function pb() {
      for (; zn !== null && !Cd(); )
        RR(zn);
    }
    function RR(e) {
      var t = e.alternate;
      Kt(e);
      var a;
      (e.mode & Ht) !== Ke ? (rS(e), a = t0(t, e, eu), Lm(e, !0)) : a = t0(t, e, eu), pn(), e.memoizedProps = e.pendingProps, a === null ? TR(e) : zn = a, BS.current = null;
    }
    function TR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ds) === Xe) {
          Kt(t);
          var u = void 0;
          if ((t.mode & Ht) === Ke ? u = WC(a, t, eu) : (rS(t), u = WC(a, t, eu), Lm(t, !1)), pn(), u !== null) {
            zn = u;
            return;
          }
        } else {
          var s = o_(a, t);
          if (s !== null) {
            s.flags &= Hv, zn = s;
            return;
          }
          if ((t.mode & Ht) !== Ke) {
            Lm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ds, i.subtreeFlags = Xe, i.deletions = null;
          else {
            gr = $S, zn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          zn = v;
          return;
        }
        t = i, zn = t;
      } while (t !== null);
      gr === Iu && (gr = cR);
    }
    function oc(e, t, a) {
      var i = Ha(), u = $r.transition;
      try {
        $r.transition = null, Vn(Nr), vb(e, t, a, i);
      } finally {
        $r.transition = u, Vn(i);
      }
      return null;
    }
    function vb(e, t, a, i) {
      do
        Gu();
      while (Yo !== null);
      if (xb(), (Mt & (Yr | Hi)) !== mr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (bd(s), u === null)
        return kd(), null;
      if (s === ie && y("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ie, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ut;
      var f = mt(u.lanes, u.childLanes);
      Pd(e, f), e === Ea && (Ea = null, zn = null, yr = ie), ((u.subtreeFlags & Ki) !== Xe || (u.flags & Ki) !== Xe) && (lc || (lc = !0, GS = a, a0(qi, function() {
        return Gu(), null;
      })));
      var p = (u.subtreeFlags & (Ml | Ll | Nl | Ki)) !== Xe, v = (u.flags & (Ml | Ll | Nl | Ki)) !== Xe;
      if (p || v) {
        var g = $r.transition;
        $r.transition = null;
        var C = Ha();
        Vn(Nr);
        var O = Mt;
        Mt |= Hi, BS.current = null, p_(e, u), vC(), b_(e, u, s), _w(e.containerInfo), e.current = u, ms(s), k_(u, e, s), ys(), Rd(), Mt = O, Vn(C), $r.transition = g;
      } else
        e.current = u, vC();
      var k = lc;
      if (lc ? (lc = !1, Yo = e, Gp = s) : (Qf = 0, Ym = null), f = e.pendingLanes, f === ie && (Wf = null), k || bR(e.current, !1), wd(u.stateNode, i), Zr && e.memoizedUpdaters.clear(), Q_(), Ia(e, Xn()), t !== null)
        for (var V = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var X = t[Y], ke = X.stack, Ze = X.digest;
          V(X.value, {
            componentStack: ke,
            digest: Ze
          });
        }
      if (Bm) {
        Bm = !1;
        var Qe = WS;
        throw WS = null, Qe;
      }
      return ea(Gp, nt) && e.tag !== zo && Gu(), f = e.pendingLanes, ea(f, nt) ? (S1(), e === XS ? Xp++ : (Xp = 0, XS = e)) : Xp = 0, Ao(), kd(), null;
    }
    function Gu() {
      if (Yo !== null) {
        var e = rh(Gp), t = Ls(ja, e), a = $r.transition, i = Ha();
        try {
          return $r.transition = null, Vn(t), mb();
        } finally {
          Vn(i), $r.transition = a;
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
      if (Yo = null, Gp = ie, (Mt & (Yr | Hi)) !== mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      KS = !0, $m = !1, Ru(a);
      var i = Mt;
      Mt |= Hi, A_(t.current), M_(t, t.current, a, e);
      {
        var u = QS;
        QS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          y_(t, f);
        }
      }
      Md(), bR(t.current, !0), Mt = i, Ao(), $m ? t === Ym ? Qf++ : (Qf = 0, Ym = t) : Qf = 0, KS = !1, $m = !1, xd(t);
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
      var i = rc(a, t), u = RC(e, i, nt), s = jo(e, u, nt), f = Ca();
      s !== null && (Ro(s, nt, f), Ia(s, f));
    }
    function vn(e, t, a) {
      if (c_(a), Jp(!1), e.tag === q) {
        xR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === q) {
          xR(i, e, a);
          return;
        } else if (i.tag === U) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !wR(s)) {
            var f = rc(a, e), p = CS(i, f, nt), v = jo(i, p, nt), g = Ca();
            v !== null && (Ro(v, nt, g), Ia(v, g));
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
      af(e, a), Db(e), Ea === e && Mu(yr, a) && (gr === $p || gr === Hm && Ou(yr) && Xn() - IS < fR ? uc(e, ie) : Vm = mt(Vm, a)), Ia(e, u);
    }
    function _R(e, t) {
      t === Ut && (t = eb(e));
      var a = Ca(), i = Ba(e, t);
      i !== null && (Ro(i, t, a), Ia(i, a));
    }
    function Cb(e) {
      var t = e.memoizedState, a = Ut;
      t !== null && (a = t.retryLane), _R(e, a);
    }
    function Rb(e, t) {
      var a = Ut, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case wt:
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
      Kt(e), Xm(e, Ol, Y_), t && Xm(e, xi, I_), Xm(e, Ol, B_), t && Xm(e, xi, $_), pn();
    }
    function Xm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Xe ? i = i.child : ((i.flags & t) !== Xe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Km = null;
    function kR(e) {
      {
        if ((Mt & Yr) !== mr || !(e.mode & Ct))
          return;
        var t = e.tag;
        if (t !== oe && t !== q && t !== U && t !== W && t !== Ee && t !== Be && t !== Le)
          return;
        var a = lt(e) || "ReactComponent";
        if (Km !== null) {
          if (Km.has(a))
            return;
          Km.add(a);
        } else
          Km = /* @__PURE__ */ new Set([a]);
        var i = ur;
        try {
          Kt(e), y("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Kt(e) : pn();
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
          if (rm(), $E(), QC(e, t), UR(t, i), t.mode & Ht && rS(t), Dl(null, VC, null, e, t, a), Gi()) {
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
          case Ee:
          case Le: {
            var t = zn && lt(zn) || "Unknown", a = t;
            if (!n0.has(a)) {
              n0.add(a);
              var i = lt(e) || "Unknown";
              y("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case U: {
            DR || (y("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), DR = !0);
            break;
          }
        }
    }
    function Zp(e, t) {
      if (Zr) {
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
        if (e.mode & Ct) {
          if (!oR())
            return;
        } else if (!X_() || Mt !== mr || e.tag !== W && e.tag !== Ee && e.tag !== Le)
          return;
        if (vl.current === null) {
          var t = ur;
          try {
            Kt(e), y(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, lt(e));
          } finally {
            t ? Kt(e) : pn();
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
    function LR(e, t) {
      {
        if (Pi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case U: {
            typeof i == "function" && (u = !0);
            break;
          }
          case W: {
            (typeof i == "function" || s === ot) && (u = !0);
            break;
          }
          case Ee: {
            (s === ae || s === ot) && (u = !0);
            break;
          }
          case Be:
          case Le: {
            (s === vt || s === ot) && (u = !0);
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
    function NR(e) {
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
    }, Lb = function(e, t) {
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
          case Le:
          case U:
            v = p;
            break;
          case Ee:
            v = p.render;
            break;
        }
        if (Pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var g = !1, C = !1;
        if (v !== null) {
          var O = Pi(v);
          O !== void 0 && (a.has(O) ? C = !0 : t.has(O) && (f === U ? C = !0 : g = !0));
        }
        if (Gf !== null && (Gf.has(e) || i !== null && Gf.has(i)) && (C = !0), C && (e._debugNeedsRemount = !0), C || g) {
          var k = Ba(e, nt);
          k !== null && Sr(k, e, nt, rn);
        }
        u !== null && !C && u0(u, t, a), s !== null && u0(s, t, a);
      }
    }
    var Nb = function(e, t) {
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
          case Le:
          case U:
            p = f;
            break;
          case Ee:
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
            case L:
              t.add(i.stateNode);
              return;
            case te:
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
    function Ab(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === L)
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
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Xe, this.subtreeFlags = Xe, this.deletions = null, this.lanes = ie, this.childLanes = ie, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !s0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
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
        return c0(e) ? U : W;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ae)
          return Ee;
        if (t === vt)
          return Be;
      }
      return oe;
    }
    function sc(e, t) {
      var a = e.alternate;
      a === null ? (a = fi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Xe, a.subtreeFlags = Xe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Fn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case oe:
        case W:
        case Le:
          a.type = Xf(e.type);
          break;
        case U:
          a.type = i0(e.type);
          break;
        case Ee:
          a.type = l0(e.type);
          break;
      }
      return a;
    }
    function Hb(e, t) {
      e.flags &= Fn | En;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ie, e.lanes = t, e.child = null, e.subtreeFlags = Xe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Xe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
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
      return e === Qh ? (i = Ct, t === !0 && (i |= Jt, i |= Pt)) : i = Ke, Zr && (i |= Ht), fi(q, null, null, i);
    }
    function f0(e, t, a, i, u, s) {
      var f = oe, p = e;
      if (typeof e == "function")
        c0(e) ? (f = U, p = i0(p)) : p = Xf(p);
      else if (typeof e == "string")
        f = L;
      else
        e: switch (e) {
          case vi:
            return Qo(a.children, u, s, t);
          case Ka:
            f = G, u |= Jt, (u & Ct) !== Ke && (u |= Pt);
            break;
          case hi:
            return Vb(a, u, s, t);
          case _e:
            return Bb(a, u, s, t);
          case Ue:
            return $b(a, u, s, t);
          case kn:
            return AR(a, u, s, t);
          case on:
          case Rt:
          case dn:
          case lr:
          case Et:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case mi:
                  f = re;
                  break e;
                case _:
                  f = le;
                  break e;
                case ae:
                  f = Ee, p = l0(p);
                  break e;
                case vt:
                  f = Be;
                  break e;
                case ot:
                  f = ut, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var g = i ? lt(i) : null;
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
      var u = fi(Z, e, i, t);
      return u.lanes = a, u;
    }
    function Vb(e, t, a, i) {
      typeof e.id != "string" && y('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = fi(ve, e, i, t | Ht);
      return u.elementType = hi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Bb(e, t, a, i) {
      var u = fi(Re, e, i, t);
      return u.elementType = _e, u.lanes = a, u;
    }
    function $b(e, t, a, i) {
      var u = fi(wt, e, i, t);
      return u.elementType = Ue, u.lanes = a, u;
    }
    function AR(e, t, a, i) {
      var u = fi(Ae, e, i, t);
      u.elementType = kn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function p0(e, t, a) {
      var i = fi(fe, e, null, t);
      return i.lanes = a, i;
    }
    function Yb() {
      var e = fi(L, null, null, Ke);
      return e.elementType = "DELETED", e;
    }
    function Ib(e) {
      var t = fi(it, null, null, Ke);
      return t.stateNode = e, t;
    }
    function v0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = fi(te, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function UR(e, t) {
      return e === null && (e = fi(oe, null, null, Ke)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Wb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Xy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ut, this.eventTimes = Ds(ie), this.expirationTimes = Ds(rn), this.pendingLanes = ie, this.suspendedLanes = ie, this.pingedLanes = ie, this.expiredLanes = ie, this.mutableReadLanes = ie, this.finishedLanes = ie, this.entangledLanes = ie, this.entanglements = Ds(ie), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
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
      var C = new Wb(e, t, a, p, v), O = Pb(t, s);
      C.current = O, O.stateNode = C;
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
      return bg(O), C;
    }
    var h0 = "18.3.1";
    function Qb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return wn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ir,
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
      if (t.tag === U) {
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
        var u = Kr(a);
        if (u === null)
          return null;
        if (u.mode & Jt) {
          var s = lt(a) || "Component";
          if (!y0[s]) {
            y0[s] = !0;
            var f = ur;
            try {
              Kt(u), a.mode & Jt ? y("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : y("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Kt(f) : pn();
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
      var C = !0, O = jR(a, i, C, e, u, s, f, p, v);
      O.context = FR(null);
      var k = O.current, V = Ca(), Y = Io(k), X = $u(V, Y);
      return X.callback = t ?? null, jo(k, X, Y), tb(O, Y, V), O;
    }
    function ev(e, t, a, i) {
      Td(t, e);
      var u = t.current, s = Ca(), f = Io(u);
      Rn(f);
      var p = FR(a);
      t.context === null ? t.context = p : t.pendingContext = p, gi && ur !== null && !m0 && (m0 = !0, y(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, lt(ur) || "Unknown"));
      var v = $u(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && y("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var g = jo(u, v, f);
      return g !== null && (Sr(g, u, f, s), om(g, u, f)), f;
    }
    function qm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case L:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Xb(e) {
      switch (e.tag) {
        case q: {
          var t = e.stateNode;
          if (uf(t)) {
            var a = Qv(t);
            ib(t, a);
          }
          break;
        }
        case Re: {
          Qu(function() {
            var u = Ba(e, nt);
            if (u !== null) {
              var s = Ca();
              Sr(u, e, nt, s);
            }
          });
          var i = nt;
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
      if (e.tag === Re) {
        var t = Ts, a = Ba(e, t);
        if (a !== null) {
          var i = Ca();
          Sr(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function qb(e) {
      if (e.tag === Re) {
        var t = Io(e), a = Ba(e, t);
        if (a !== null) {
          var i = Ca();
          Sr(a, e, t, i);
        }
        g0(e, t);
      }
    }
    function BR(e) {
      var t = mn(e);
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
        var i = t[a], u = St(e) ? e.slice() : yt({}, e);
        return a + 1 === t.length ? (St(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = eT(e[i], t, a + 1), u);
      }, tT = function(e, t) {
        return eT(e, t, 0);
      }, nT = function(e, t, a, i) {
        var u = t[i], s = St(e) ? e.slice() : yt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], St(s) ? s.splice(u, 1) : delete s[u];
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
        var u = t[a], s = St(e) ? e.slice() : yt({}, e);
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
          u.memoizedState = s, u.baseState = s, e.memoizedProps = yt({}, e.memoizedProps);
          var f = Ba(e, nt);
          f !== null && Sr(f, e, nt, rn);
        }
      }, WR = function(e, t, a) {
        var i = S0(e, t);
        if (i !== null) {
          var u = tT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = yt({}, e.memoizedProps);
          var s = Ba(e, nt);
          s !== null && Sr(s, e, nt, rn);
        }
      }, QR = function(e, t, a, i) {
        var u = S0(e, t);
        if (u !== null) {
          var s = rT(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = yt({}, e.memoizedProps);
          var f = Ba(e, nt);
          f !== null && Sr(f, e, nt, rn);
        }
      }, GR = function(e, t, a) {
        e.pendingProps = iT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, nt);
        i !== null && Sr(i, e, nt, rn);
      }, XR = function(e, t) {
        e.pendingProps = tT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, nt);
        a !== null && Sr(a, e, nt, rn);
      }, KR = function(e, t, a) {
        e.pendingProps = rT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, nt);
        i !== null && Sr(i, e, nt, rn);
      }, qR = function(e) {
        var t = Ba(e, nt);
        t !== null && Sr(t, e, nt, rn);
      }, ZR = function(e) {
        $R = e;
      }, JR = function(e) {
        YR = e;
      };
    }
    function ek(e) {
      var t = Kr(e);
      return t === null ? null : t.stateNode;
    }
    function tk(e) {
      return null;
    }
    function nk() {
      return ur;
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
        findHostInstancesForRefresh: Nb,
        scheduleRefresh: Mb,
        scheduleRoot: Lb,
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
        if (a.nodeType !== Un) {
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
      t != null && (t.hydrate ? I("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Dr && y(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = HR(e, Qh, null, a, i, u, s);
      Ph(f.current, e);
      var p = e.nodeType === Un ? e.parentNode : e;
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
          var O = u[C];
          c1(g, O);
        }
      return new Zm(g);
    }
    function Jm(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Qi || e.nodeType === od));
    }
    function tv(e) {
      return !!(e && (e.nodeType === Qr || e.nodeType === Qi || e.nodeType === od || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function uT(e) {
      e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), yp(e) && (e._reactRootContainer ? y("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : y("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var uk = E.ReactCurrentOwner, oT;
    oT = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = BR(e._reactRootContainer.current);
        t && t.parentNode !== e && y("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = C0(e), u = !!(i && Lo(i));
      u && !a && y("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Qr && e.tagName && e.tagName.toUpperCase() === "BODY" && y("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
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
            var k = qm(f);
            s.call(k);
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
        var p = e.nodeType === Un ? e.parentNode : e;
        return lp(p), Qu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var g = i;
          i = function() {
            var k = qm(C);
            g.call(k);
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
        var O = e.nodeType === Un ? e.parentNode : e;
        return lp(O), Qu(function() {
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
          a || y("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", zt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Qr ? e : Gb(e, "findDOMNode");
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
          var a = C0(e), i = a && !Lo(a);
          i && y("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Qu(function() {
          ey(null, null, e, !1, function() {
            e._reactRootContainer = null, lE(e);
          });
        }), !0;
      } else {
        {
          var u = C0(e), s = !!(u && Lo(u)), f = e.nodeType === Qr && tv(e.parentNode) && !!e.parentNode._reactRootContainer;
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
      Events: [Lo, _f, Vh, fo, wc, ZS]
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
    if (!Ek && nn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
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
process.env.NODE_ENV === "production" ? (DT(), b0.exports = Mk()) : b0.exports = Lk();
var Nk = b0.exports, k0, ny = Nk;
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
  var E, z = 1;
  S == null && (S = 0), R == null && (R = 0);
  function P() {
    var I, y = E.length, ee, W = 0, U = 0;
    for (I = 0; I < y; ++I)
      ee = E[I], W += ee.x, U += ee.y;
    for (W = (W / y - S) * z, U = (U / y - R) * z, I = 0; I < y; ++I)
      ee = E[I], ee.x -= W, ee.y -= U;
  }
  return P.initialize = function(I) {
    E = I;
  }, P.x = function(I) {
    return arguments.length ? (S = +I, P) : S;
  }, P.y = function(I) {
    return arguments.length ? (R = +I, P) : R;
  }, P.strength = function(I) {
    return arguments.length ? (z = +I, P) : z;
  }, P;
}
function Ak(S) {
  const R = +this._x.call(null, S), E = +this._y.call(null, S);
  return OT(this.cover(R, E), R, E, S);
}
function OT(S, R, E, z) {
  if (isNaN(R) || isNaN(E)) return S;
  var P, I = S._root, y = { data: z }, ee = S._x0, W = S._y0, U = S._x1, oe = S._y1, q, te, L, fe, Z, G, le, re;
  if (!I) return S._root = y, S;
  for (; I.length; )
    if ((Z = R >= (q = (ee + U) / 2)) ? ee = q : U = q, (G = E >= (te = (W + oe) / 2)) ? W = te : oe = te, P = I, !(I = I[le = G << 1 | Z])) return P[le] = y, S;
  if (L = +S._x.call(null, I.data), fe = +S._y.call(null, I.data), R === L && E === fe) return y.next = I, P ? P[le] = y : S._root = y, S;
  do
    P = P ? P[le] = new Array(4) : S._root = new Array(4), (Z = R >= (q = (ee + U) / 2)) ? ee = q : U = q, (G = E >= (te = (W + oe) / 2)) ? W = te : oe = te;
  while ((le = G << 1 | Z) === (re = (fe >= te) << 1 | L >= q));
  return P[re] = I, P[le] = y, S;
}
function Uk(S) {
  var R, E, z = S.length, P, I, y = new Array(z), ee = new Array(z), W = 1 / 0, U = 1 / 0, oe = -1 / 0, q = -1 / 0;
  for (E = 0; E < z; ++E)
    isNaN(P = +this._x.call(null, R = S[E])) || isNaN(I = +this._y.call(null, R)) || (y[E] = P, ee[E] = I, P < W && (W = P), P > oe && (oe = P), I < U && (U = I), I > q && (q = I));
  if (W > oe || U > q) return this;
  for (this.cover(W, U).cover(oe, q), E = 0; E < z; ++E)
    OT(this, y[E], ee[E], S[E]);
  return this;
}
function jk(S, R) {
  if (isNaN(S = +S) || isNaN(R = +R)) return this;
  var E = this._x0, z = this._y0, P = this._x1, I = this._y1;
  if (isNaN(E))
    P = (E = Math.floor(S)) + 1, I = (z = Math.floor(R)) + 1;
  else {
    for (var y = P - E || 1, ee = this._root, W, U; E > S || S >= P || z > R || R >= I; )
      switch (U = (R < z) << 1 | S < E, W = new Array(4), W[U] = ee, ee = W, y *= 2, U) {
        case 0:
          P = E + y, I = z + y;
          break;
        case 1:
          E = P - y, I = z + y;
          break;
        case 2:
          P = E + y, z = I - y;
          break;
        case 3:
          E = P - y, z = I - y;
          break;
      }
    this._root && this._root.length && (this._root = ee);
  }
  return this._x0 = E, this._y0 = z, this._x1 = P, this._y1 = I, this;
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
function wa(S, R, E, z, P) {
  this.node = S, this.x0 = R, this.y0 = E, this.x1 = z, this.y1 = P;
}
function Pk(S, R, E) {
  var z, P = this._x0, I = this._y0, y, ee, W, U, oe = this._x1, q = this._y1, te = [], L = this._root, fe, Z;
  for (L && te.push(new wa(L, P, I, oe, q)), E == null ? E = 1 / 0 : (P = S - E, I = R - E, oe = S + E, q = R + E, E *= E); fe = te.pop(); )
    if (!(!(L = fe.node) || (y = fe.x0) > oe || (ee = fe.y0) > q || (W = fe.x1) < P || (U = fe.y1) < I))
      if (L.length) {
        var G = (y + W) / 2, le = (ee + U) / 2;
        te.push(
          new wa(L[3], G, le, W, U),
          new wa(L[2], y, le, G, U),
          new wa(L[1], G, ee, W, le),
          new wa(L[0], y, ee, G, le)
        ), (Z = (R >= le) << 1 | S >= G) && (fe = te[te.length - 1], te[te.length - 1] = te[te.length - 1 - Z], te[te.length - 1 - Z] = fe);
      } else {
        var re = S - +this._x.call(null, L.data), Ee = R - +this._y.call(null, L.data), ve = re * re + Ee * Ee;
        if (ve < E) {
          var Re = Math.sqrt(E = ve);
          P = S - Re, I = R - Re, oe = S + Re, q = R + Re, z = L.data;
        }
      }
  return z;
}
function Vk(S) {
  if (isNaN(oe = +this._x.call(null, S)) || isNaN(q = +this._y.call(null, S))) return this;
  var R, E = this._root, z, P, I, y = this._x0, ee = this._y0, W = this._x1, U = this._y1, oe, q, te, L, fe, Z, G, le;
  if (!E) return this;
  if (E.length) for (; ; ) {
    if ((fe = oe >= (te = (y + W) / 2)) ? y = te : W = te, (Z = q >= (L = (ee + U) / 2)) ? ee = L : U = L, R = E, !(E = E[G = Z << 1 | fe])) return this;
    if (!E.length) break;
    (R[G + 1 & 3] || R[G + 2 & 3] || R[G + 3 & 3]) && (z = R, le = G);
  }
  for (; E.data !== S; ) if (P = E, !(E = E.next)) return this;
  return (I = E.next) && delete E.next, P ? (I ? P.next = I : delete P.next, this) : R ? (I ? R[G] = I : delete R[G], (E = R[0] || R[1] || R[2] || R[3]) && E === (R[3] || R[2] || R[1] || R[0]) && !E.length && (z ? z[le] = E : this._root = E), this) : (this._root = I, this);
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
  var R = [], E, z = this._root, P, I, y, ee, W;
  for (z && R.push(new wa(z, this._x0, this._y0, this._x1, this._y1)); E = R.pop(); )
    if (!S(z = E.node, I = E.x0, y = E.y0, ee = E.x1, W = E.y1) && z.length) {
      var U = (I + ee) / 2, oe = (y + W) / 2;
      (P = z[3]) && R.push(new wa(P, U, oe, ee, W)), (P = z[2]) && R.push(new wa(P, I, oe, U, W)), (P = z[1]) && R.push(new wa(P, U, y, ee, oe)), (P = z[0]) && R.push(new wa(P, I, y, U, oe));
    }
  return this;
}
function Wk(S) {
  var R = [], E = [], z;
  for (this._root && R.push(new wa(this._root, this._x0, this._y0, this._x1, this._y1)); z = R.pop(); ) {
    var P = z.node;
    if (P.length) {
      var I, y = z.x0, ee = z.y0, W = z.x1, U = z.y1, oe = (y + W) / 2, q = (ee + U) / 2;
      (I = P[0]) && R.push(new wa(I, y, ee, oe, q)), (I = P[1]) && R.push(new wa(I, oe, ee, W, q)), (I = P[2]) && R.push(new wa(I, y, q, oe, U)), (I = P[3]) && R.push(new wa(I, oe, q, W, U));
    }
    E.push(z);
  }
  for (; z = E.pop(); )
    S(z.node, z.x0, z.y0, z.x1, z.y1);
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
  var z = new L0(R ?? Qk, E ?? Xk, NaN, NaN, NaN, NaN);
  return S == null ? z : z.addAll(S);
}
function L0(S, R, E, z, P, I) {
  this._x = S, this._y = R, this._x0 = E, this._y0 = z, this._x1 = P, this._y1 = I, this._root = void 0;
}
function TT(S) {
  for (var R = { data: S.data }, E = R; S = S.next; ) E = E.next = { data: S.data };
  return R;
}
var xa = M0.prototype = L0.prototype;
xa.copy = function() {
  var S = new L0(this._x, this._y, this._x0, this._y0, this._x1, this._y1), R = this._root, E, z;
  if (!R) return S;
  if (!R.length) return S._root = TT(R), S;
  for (E = [{ source: R, target: S._root = new Array(4) }]; R = E.pop(); )
    for (var P = 0; P < 4; ++P)
      (z = R.source[P]) && (z.length ? E.push({ source: z, target: R.target[P] = new Array(4) }) : R.target[P] = TT(z));
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
  var R, E, z, P = 1, I = 1;
  typeof S != "function" && (S = hl(S == null ? 1 : +S));
  function y() {
    for (var U, oe = R.length, q, te, L, fe, Z, G, le = 0; le < I; ++le)
      for (q = M0(R, qk, Zk).visitAfter(ee), U = 0; U < oe; ++U)
        te = R[U], Z = E[te.index], G = Z * Z, L = te.x + te.vx, fe = te.y + te.vy, q.visit(re);
    function re(Ee, ve, Re, Be, Le) {
      var ut = Ee.data, dt = Ee.r, it = Z + dt;
      if (ut) {
        if (ut.index > te.index) {
          var wt = L - ut.x - ut.vx, ct = fe - ut.y - ut.vy, Ae = wt * wt + ct * ct;
          Ae < it * it && (wt === 0 && (wt = Go(z), Ae += wt * wt), ct === 0 && (ct = Go(z), Ae += ct * ct), Ae = (it - (Ae = Math.sqrt(Ae))) / Ae * P, te.vx += (wt *= Ae) * (it = (dt *= dt) / (G + dt)), te.vy += (ct *= Ae) * it, ut.vx -= wt * (it = 1 - it), ut.vy -= ct * it);
        }
        return;
      }
      return ve > L + it || Be < L - it || Re > fe + it || Le < fe - it;
    }
  }
  function ee(U) {
    if (U.data) return U.r = E[U.data.index];
    for (var oe = U.r = 0; oe < 4; ++oe)
      U[oe] && U[oe].r > U.r && (U.r = U[oe].r);
  }
  function W() {
    if (R) {
      var U, oe = R.length, q;
      for (E = new Array(oe), U = 0; U < oe; ++U) q = R[U], E[q.index] = +S(q, U, R);
    }
  }
  return y.initialize = function(U, oe) {
    R = U, z = oe, W();
  }, y.iterations = function(U) {
    return arguments.length ? (I = +U, y) : I;
  }, y.strength = function(U) {
    return arguments.length ? (P = +U, y) : P;
  }, y.radius = function(U) {
    return arguments.length ? (S = typeof U == "function" ? U : hl(+U), W(), y) : S;
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
  var R = eD, E = q, z, P = hl(30), I, y, ee, W, U, oe = 1;
  S == null && (S = []);
  function q(G) {
    return 1 / Math.min(ee[G.source.index], ee[G.target.index]);
  }
  function te(G) {
    for (var le = 0, re = S.length; le < oe; ++le)
      for (var Ee = 0, ve, Re, Be, Le, ut, dt, it; Ee < re; ++Ee)
        ve = S[Ee], Re = ve.source, Be = ve.target, Le = Be.x + Be.vx - Re.x - Re.vx || Go(U), ut = Be.y + Be.vy - Re.y - Re.vy || Go(U), dt = Math.sqrt(Le * Le + ut * ut), dt = (dt - I[Ee]) / dt * G * z[Ee], Le *= dt, ut *= dt, Be.vx -= Le * (it = W[Ee]), Be.vy -= ut * it, Re.vx += Le * (it = 1 - it), Re.vy += ut * it;
  }
  function L() {
    if (y) {
      var G, le = y.length, re = S.length, Ee = new Map(y.map((Re, Be) => [R(Re, Be, y), Re])), ve;
      for (G = 0, ee = new Array(le); G < re; ++G)
        ve = S[G], ve.index = G, typeof ve.source != "object" && (ve.source = wT(Ee, ve.source)), typeof ve.target != "object" && (ve.target = wT(Ee, ve.target)), ee[ve.source.index] = (ee[ve.source.index] || 0) + 1, ee[ve.target.index] = (ee[ve.target.index] || 0) + 1;
      for (G = 0, W = new Array(re); G < re; ++G)
        ve = S[G], W[G] = ee[ve.source.index] / (ee[ve.source.index] + ee[ve.target.index]);
      z = new Array(re), fe(), I = new Array(re), Z();
    }
  }
  function fe() {
    if (y)
      for (var G = 0, le = S.length; G < le; ++G)
        z[G] = +E(S[G], G, S);
  }
  function Z() {
    if (y)
      for (var G = 0, le = S.length; G < le; ++G)
        I[G] = +P(S[G], G, S);
  }
  return te.initialize = function(G, le) {
    y = G, U = le, L();
  }, te.links = function(G) {
    return arguments.length ? (S = G, L(), te) : S;
  }, te.id = function(G) {
    return arguments.length ? (R = G, te) : R;
  }, te.iterations = function(G) {
    return arguments.length ? (oe = +G, te) : oe;
  }, te.strength = function(G) {
    return arguments.length ? (E = typeof G == "function" ? G : hl(+G), fe(), te) : E;
  }, te.distance = function(G) {
    return arguments.length ? (P = typeof G == "function" ? G : hl(+G), Z(), te) : P;
  }, te;
}
var nD = { value: () => {
} };
function MT() {
  for (var S = 0, R = arguments.length, E = {}, z; S < R; ++S) {
    if (!(z = arguments[S] + "") || z in E || /[\s.]/.test(z)) throw new Error("illegal type: " + z);
    E[z] = [];
  }
  return new ry(E);
}
function ry(S) {
  this._ = S;
}
function rD(S, R) {
  return S.trim().split(/^|\s+/).map(function(E) {
    var z = "", P = E.indexOf(".");
    if (P >= 0 && (z = E.slice(P + 1), E = E.slice(0, P)), E && !R.hasOwnProperty(E)) throw new Error("unknown type: " + E);
    return { type: E, name: z };
  });
}
ry.prototype = MT.prototype = {
  constructor: ry,
  on: function(S, R) {
    var E = this._, z = rD(S + "", E), P, I = -1, y = z.length;
    if (arguments.length < 2) {
      for (; ++I < y; ) if ((P = (S = z[I]).type) && (P = aD(E[P], S.name))) return P;
      return;
    }
    if (R != null && typeof R != "function") throw new Error("invalid callback: " + R);
    for (; ++I < y; )
      if (P = (S = z[I]).type) E[P] = xT(E[P], S.name, R);
      else if (R == null) for (P in E) E[P] = xT(E[P], S.name, null);
    return this;
  },
  copy: function() {
    var S = {}, R = this._;
    for (var E in R) S[E] = R[E].slice();
    return new ry(S);
  },
  call: function(S, R) {
    if ((P = arguments.length - 2) > 0) for (var E = new Array(P), z = 0, P, I; z < P; ++z) E[z] = arguments[z + 2];
    if (!this._.hasOwnProperty(S)) throw new Error("unknown type: " + S);
    for (I = this._[S], z = 0, P = I.length; z < P; ++z) I[z].value.apply(R, E);
  },
  apply: function(S, R, E) {
    if (!this._.hasOwnProperty(S)) throw new Error("unknown type: " + S);
    for (var z = this._[S], P = 0, I = z.length; P < I; ++P) z[P].value.apply(R, E);
  }
};
function aD(S, R) {
  for (var E = 0, z = S.length, P; E < z; ++E)
    if ((P = S[E]).name === R)
      return P.value;
}
function xT(S, R, E) {
  for (var z = 0, P = S.length; z < P; ++z)
    if (S[z].name === R) {
      S[z] = nD, S = S.slice(0, z).concat(S.slice(z + 1));
      break;
    }
  return E != null && S.push({ name: R, value: E }), S;
}
var qf = 0, uv = 0, iv = 0, LT = 1e3, ay, ov, iy = 0, cc = 0, ly = 0, sv = typeof performance == "object" && performance.now ? performance : Date, NT = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(S) {
  setTimeout(S, 17);
};
function zT() {
  return cc || (NT(iD), cc = sv.now() + ly);
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
  var z = new D0();
  return z.restart(S, R, E), z;
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
  R > LT && (ly -= R, iy = S);
}
function oD() {
  for (var S, R = ay, E, z = 1 / 0; R; )
    R._call ? (z > R._time && (z = R._time), S = R, R = R._next) : (E = R._next, R._next = null, R = S ? S._next = E : ay = E);
  ov = S, O0(z);
}
function O0(S) {
  if (!qf) {
    uv && (uv = clearTimeout(uv));
    var R = S - cc;
    R > 24 ? (S < 1 / 0 && (uv = setTimeout(_T, S - sv.now() - ly)), iv && (iv = clearInterval(iv))) : (iv || (iy = sv.now(), iv = setInterval(uD, LT)), qf = 1, NT(_T));
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
  var R, E = 1, z = 1e-3, P = 1 - Math.pow(z, 1 / 300), I = 0, y = 0.6, ee = /* @__PURE__ */ new Map(), W = AT(q), U = MT("tick", "end"), oe = fD();
  S == null && (S = []);
  function q() {
    te(), U.call("tick", R), E < z && (W.stop(), U.call("end", R));
  }
  function te(Z) {
    var G, le = S.length, re;
    Z === void 0 && (Z = 1);
    for (var Ee = 0; Ee < Z; ++Ee)
      for (E += (I - E) * P, ee.forEach(function(ve) {
        ve(E);
      }), G = 0; G < le; ++G)
        re = S[G], re.fx == null ? re.x += re.vx *= y : (re.x = re.fx, re.vx = 0), re.fy == null ? re.y += re.vy *= y : (re.y = re.fy, re.vy = 0);
    return R;
  }
  function L() {
    for (var Z = 0, G = S.length, le; Z < G; ++Z) {
      if (le = S[Z], le.index = Z, le.fx != null && (le.x = le.fx), le.fy != null && (le.y = le.fy), isNaN(le.x) || isNaN(le.y)) {
        var re = vD * Math.sqrt(0.5 + Z), Ee = Z * hD;
        le.x = re * Math.cos(Ee), le.y = re * Math.sin(Ee);
      }
      (isNaN(le.vx) || isNaN(le.vy)) && (le.vx = le.vy = 0);
    }
  }
  function fe(Z) {
    return Z.initialize && Z.initialize(S, oe), Z;
  }
  return L(), R = {
    tick: te,
    restart: function() {
      return W.restart(q), R;
    },
    stop: function() {
      return W.stop(), R;
    },
    nodes: function(Z) {
      return arguments.length ? (S = Z, L(), ee.forEach(fe), R) : S;
    },
    alpha: function(Z) {
      return arguments.length ? (E = +Z, R) : E;
    },
    alphaMin: function(Z) {
      return arguments.length ? (z = +Z, R) : z;
    },
    alphaDecay: function(Z) {
      return arguments.length ? (P = +Z, R) : +P;
    },
    alphaTarget: function(Z) {
      return arguments.length ? (I = +Z, R) : I;
    },
    velocityDecay: function(Z) {
      return arguments.length ? (y = 1 - Z, R) : 1 - y;
    },
    randomSource: function(Z) {
      return arguments.length ? (oe = Z, ee.forEach(fe), R) : oe;
    },
    force: function(Z, G) {
      return arguments.length > 1 ? (G == null ? ee.delete(Z) : ee.set(Z, fe(G)), R) : ee.get(Z);
    },
    find: function(Z, G, le) {
      var re = 0, Ee = S.length, ve, Re, Be, Le, ut;
      for (le == null ? le = 1 / 0 : le *= le, re = 0; re < Ee; ++re)
        Le = S[re], ve = Z - Le.x, Re = G - Le.y, Be = ve * ve + Re * Re, Be < le && (ut = Le, le = Be);
      return ut;
    },
    on: function(Z, G) {
      return arguments.length > 1 ? (U.on(Z, G), R) : U.on(Z);
    }
  };
}
function yD() {
  var S, R, E, z, P = hl(-30), I, y = 1, ee = 1 / 0, W = 0.81;
  function U(L) {
    var fe, Z = S.length, G = M0(S, dD, pD).visitAfter(q);
    for (z = L, fe = 0; fe < Z; ++fe) R = S[fe], G.visit(te);
  }
  function oe() {
    if (S) {
      var L, fe = S.length, Z;
      for (I = new Array(fe), L = 0; L < fe; ++L) Z = S[L], I[Z.index] = +P(Z, L, S);
    }
  }
  function q(L) {
    var fe = 0, Z, G, le = 0, re, Ee, ve;
    if (L.length) {
      for (re = Ee = ve = 0; ve < 4; ++ve)
        (Z = L[ve]) && (G = Math.abs(Z.value)) && (fe += Z.value, le += G, re += G * Z.x, Ee += G * Z.y);
      L.x = re / le, L.y = Ee / le;
    } else {
      Z = L, Z.x = Z.data.x, Z.y = Z.data.y;
      do
        fe += I[Z.data.index];
      while (Z = Z.next);
    }
    L.value = fe;
  }
  function te(L, fe, Z, G) {
    if (!L.value) return !0;
    var le = L.x - R.x, re = L.y - R.y, Ee = G - fe, ve = le * le + re * re;
    if (Ee * Ee / W < ve)
      return ve < ee && (le === 0 && (le = Go(E), ve += le * le), re === 0 && (re = Go(E), ve += re * re), ve < y && (ve = Math.sqrt(y * ve)), R.vx += le * L.value * z / ve, R.vy += re * L.value * z / ve), !0;
    if (L.length || ve >= ee) return;
    (L.data !== R || L.next) && (le === 0 && (le = Go(E), ve += le * le), re === 0 && (re = Go(E), ve += re * re), ve < y && (ve = Math.sqrt(y * ve)));
    do
      L.data !== R && (Ee = I[L.data.index] * z / ve, R.vx += le * Ee, R.vy += re * Ee);
    while (L = L.next);
  }
  return U.initialize = function(L, fe) {
    S = L, E = fe, oe();
  }, U.strength = function(L) {
    return arguments.length ? (P = typeof L == "function" ? L : hl(+L), oe(), U) : P;
  }, U.distanceMin = function(L) {
    return arguments.length ? (y = L * L, U) : Math.sqrt(y);
  }, U.distanceMax = function(L) {
    return arguments.length ? (ee = L * L, U) : Math.sqrt(ee);
  }, U.theta = function(L) {
    return arguments.length ? (W = L * L, U) : Math.sqrt(W);
  }, U;
}
function gD(S) {
  var R = hl(0.1), E, z, P;
  typeof S != "function" && (S = hl(S == null ? 0 : +S));
  function I(ee) {
    for (var W = 0, U = E.length, oe; W < U; ++W)
      oe = E[W], oe.vy += (P[W] - oe.y) * z[W] * ee;
  }
  function y() {
    if (E) {
      var ee, W = E.length;
      for (z = new Array(W), P = new Array(W), ee = 0; ee < W; ++ee)
        z[ee] = isNaN(P[ee] = +S(E[ee], ee, E)) ? 0 : +R(E[ee], ee, E);
    }
  }
  return I.initialize = function(ee) {
    E = ee, y();
  }, I.strength = function(ee) {
    return arguments.length ? (R = typeof ee == "function" ? ee : hl(+ee), y(), I) : R;
  }, I.y = function(ee) {
    return arguments.length ? (S = typeof ee == "function" ? ee : hl(+ee), y(), I) : S;
  }, I;
}
function SD() {
  var wt, ct, Ae, Nt, _t, kt, je, me, $e;
  const [S, R] = an.useState(null);
  an.useEffect(() => {
    const N = document.getElementById("network-container");
    if (!N) return;
    N.getAttribute("data-organism");
    const w = (Ce) => Array.isArray(Ce) ? Ce : Array.isArray(Ce == null ? void 0 : Ce.nodes) ? Ce.nodes : Ce && typeof Ce == "object" ? Object.values(Ce) : [];
    let M = new AbortController();
    const he = (Ce) => {
      if (!Ce) return;
      const ne = `${Ce.includes("?") ? "&" : "?"}_=${Date.now()}`;
      fetch(Ce + ne, {
        credentials: "same-origin",
        cache: "no-store",
        signal: M.signal
      }).then((Se) => {
        if (!Se.ok)
          throw new Error(`Failed to load ${Ce}: ${Se.status} ${Se.statusText}`);
        return Se.json();
      }).then((Se) => {
        const Ie = w(Se);
        R(Ie);
      }).catch((Se) => {
        Se.name !== "AbortError" && console.error("Error fetching network data:", Se);
      });
    };
    he(N.getAttribute("data-network"));
    const ge = new MutationObserver((Ce) => {
      for (const Ve of Ce)
        Ve.type === "attributes" && Ve.attributeName === "data-network" && (M.abort(), M = new AbortController(), he(N.getAttribute("data-network")));
    });
    return ge.observe(N, { attributes: !0 }), () => {
      ge.disconnect(), M.abort();
    };
  }, []);
  const E = an.useMemo(() => Array.isArray(S) ? S : [], [S]), z = an.useMemo(
    () => E.filter((N) => {
      var w;
      return ((w = N.attributes) == null ? void 0 : w.node_type) === "repeat";
    }),
    [E]
  ), P = an.useMemo(
    () => E.filter((N) => {
      var w;
      return ((w = N.attributes) == null ? void 0 : w.node_type) === "protein";
    }),
    [E]
  ), I = an.useMemo(() => z.map((N) => N.key), [z]), y = an.useMemo(() => P.map((N) => {
    let w = null;
    for (const M of I)
      if (N.key.endsWith("_" + M)) {
        w = M;
        break;
      }
    if (!w) {
      const M = N.key.lastIndexOf("_");
      if (M > -1) {
        const he = N.key.slice(M + 1);
        I.includes(he) && (w = he);
      }
    }
    return { ...N, _satelliteKey: w };
  }), [P, I]), ee = (N, w) => {
    const M = /* @__PURE__ */ new Map();
    for (const he of N) {
      const ge = w(he), Ce = M.get(ge) || [];
      Ce.push(he), M.set(ge, Ce);
    }
    return M;
  }, W = an.useMemo(
    () => ee(y.filter((N) => N._satelliteKey), (N) => N._satelliteKey),
    [y]
  ), U = an.useMemo(
    () => ee(y, (N) => {
      var w;
      return ((w = N.attributes) == null ? void 0 : w.label) || N.key;
    }),
    [y]
  ), oe = an.useRef(null), [q, te] = an.useState({ x: 0, y: 0 }), [L, fe] = an.useState(null), [Z, G] = an.useState(!1), le = an.useRef({ clientX: 0, clientY: 0, viewX: 0, viewY: 0 }), [re, Ee] = an.useState({ x: -600, y: -300, w: 1200, h: 600 }), [ve, Re] = an.useState(!1);
  an.useEffect(() => {
    Re(!1);
  }, [S]), an.useEffect(() => {
    const N = oe.current;
    if (!N) return;
    const w = N.parentElement;
    if (!w) return;
    const M = () => {
      const ge = w.getBoundingClientRect();
      N.setAttribute("width", `${ge.width}`), N.setAttribute("height", `${ge.height}`);
    };
    M();
    const he = new ResizeObserver(M);
    return he.observe(w), () => he.disconnect();
  }, []), an.useEffect(() => {
    const N = (w) => te({ x: w.clientX, y: w.clientY });
    return window.addEventListener("mousemove", N), () => window.removeEventListener("mousemove", N);
  }, []), an.useEffect(() => {
    const N = oe.current;
    if (!N) return;
    const w = (M) => {
      M.preventDefault();
      const he = Math.pow(1.0015, M.deltaY), ge = N.getBoundingClientRect(), Ce = (M.clientX - ge.left) / ge.width, Ve = (M.clientY - ge.top) / ge.height;
      Ee((ne) => {
        const Se = ne.x + Ce * ne.w, Ie = ne.y + Ve * ne.h, pt = Math.max(50, Math.min(1e4, ne.w * he)), nn = Math.max(50, Math.min(1e4, ne.h * he));
        return { x: Se - Ce * pt, y: Ie - Ve * nn, w: pt, h: nn };
      });
    };
    return N.addEventListener("wheel", w, { passive: !1 }), () => N.removeEventListener("wheel", w);
  }, []);
  const { satPositions: Be, proteinPositions: Le } = an.useMemo(() => {
    const N = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
    if (!z.length && !y.length)
      return { satPositions: N, proteinPositions: w };
    const M = [], he = /* @__PURE__ */ new Map();
    z.forEach((ne) => {
      var pt;
      const Se = Number(((pt = ne.attributes) == null ? void 0 : pt.size) ?? 40), Ie = {
        id: ne.key,
        type: "repeat",
        raw: ne,
        size: Se
      };
      M.push(Ie), he.set(ne.key, Ie);
    }), y.forEach((ne) => {
      var pt;
      const Se = Number(((pt = ne.attributes) == null ? void 0 : pt.size) ?? 6), Ie = {
        id: ne.key,
        type: "protein",
        raw: ne,
        size: Se
      };
      M.push(Ie), he.set(ne.key, Ie);
    });
    const ge = [];
    y.forEach((ne) => {
      !ne._satelliteKey || !he.has(ne._satelliteKey) || ge.push({
        source: ne.key,
        target: ne._satelliteKey,
        kind: "binding"
      });
    });
    for (const [, ne] of U.entries())
      if (!(ne.length < 2))
        for (let Se = 0; Se < ne.length - 1; Se++) {
          const Ie = ne[Se].key, pt = ne[Se + 1].key;
          !he.has(Ie) || !he.has(pt) || ge.push({
            source: Ie,
            target: pt,
            kind: "clone"
          });
        }
    const Ce = mD(M).force(
      "charge",
      yD().strength((ne) => ne.type === "repeat" ? -100 : -120)
      // less repulsion
    ).force(
      "collide",
      Jk().radius((ne) => {
        const Se = ne.type === "repeat" ? Number(ne.size || 40) : Number(ne.size || 6), Ie = ne.type === "repeat" ? 15 : 4;
        return Se + Ie;
      })
    ).force(
      "link",
      tD(ge).id((ne) => ne.id).distance(
        (ne) => ne.kind === "binding" ? 90 : 60
        // clones closer too
      ).strength(
        (ne) => ne.kind === "binding" ? 0.7 : 0.2
      )
    ).force("center", zk(0, 0)).force("y", gD(0).strength(0.02)).stop(), Ve = 280;
    for (let ne = 0; ne < Ve; ne++)
      Ce.tick();
    return z.forEach((ne) => {
      const Se = he.get(ne.key);
      Se && N.set(ne.key, { x: Se.x, y: Se.y });
    }), y.forEach((ne) => {
      const Se = he.get(ne.key);
      Se && w.set(ne.key, { x: Se.x, y: Se.y });
    }), { satPositions: N, proteinPositions: w };
  }, [z, y, U]);
  an.useEffect(() => {
    if (ve || !oe.current || !z.length || Be.size === 0) return;
    const N = [], w = [];
    for (const { x: Qt, y: wn } of Be.values())
      N.push(Qt), w.push(wn);
    if (!N.length) return;
    let M = Math.min(...N), he = Math.max(...N), ge = Math.min(...w), Ce = Math.max(...w);
    const Ve = 80;
    M -= Ve, he += Ve, ge -= Ve, Ce += Ve;
    let ne = he - M || 1, Se = Ce - ge || 1;
    const Ie = oe.current.parentElement;
    if (!Ie) {
      const wn = M + ne / 2, _a = ge + Se / 2;
      ne *= 1.18, Se *= 1.18, M = wn - ne / 2, ge = _a - Se / 2, Ee({ x: M, y: ge, w: ne, h: Se }), Re(!0);
      return;
    }
    const pt = Ie.getBoundingClientRect(), nn = pt.width / pt.height;
    if (ne / Se > nn) {
      const Qt = ne / nn, wn = Qt - Se;
      ge -= wn / 2, Se = Qt;
    } else {
      const Qt = Se * nn, wn = Qt - ne;
      M -= wn / 2, ne = Qt;
    }
    const hn = 1.18, In = M + ne / 2, _n = ge + Se / 2;
    ne *= hn, Se *= hn, M = In - ne / 2, ge = _n - Se / 2, Ee({ x: M, y: ge, w: ne, h: Se }), Re(!0);
  }, [Be, z.length, ve]);
  const ut = an.useMemo(() => {
    const N = [];
    for (const [w, M] of W.entries()) {
      const he = Be.get(w);
      if (he)
        for (const ge of M) {
          const Ce = Le.get(ge.key);
          Ce && N.push({ a: Ce, b: he });
        }
    }
    return N;
  }, [W, Be, Le]), dt = an.useMemo(() => {
    const N = [];
    for (const [, w] of U.entries()) {
      const M = w.map((he) => Le.get(he.key)).filter(Boolean);
      for (let he = 0; he < M.length - 1; he++)
        N.push({ a: M[he], b: M[he + 1] });
    }
    return N;
  }, [U, Le]), it = `${re.x} ${re.y} ${re.w} ${re.h}`;
  return !z.length && !y.length ? /* @__PURE__ */ jt.jsx("p", { children: "Enrichment data doesn't exist" }) : /* @__PURE__ */ jt.jsxs(
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
        /* @__PURE__ */ jt.jsxs(
          "svg",
          {
            ref: oe,
            viewBox: it,
            style: { width: "100%", height: "100%", display: "block" },
            children: [
              /* @__PURE__ */ jt.jsx(
                "rect",
                {
                  x: re.x - re.w,
                  y: re.y - re.h,
                  width: re.w * 3,
                  height: re.h * 3,
                  fill: "transparent",
                  style: { cursor: Z ? "grabbing" : "grab" },
                  onMouseDown: (N) => {
                    N.button === 0 && (G(!0), le.current = {
                      clientX: N.clientX,
                      clientY: N.clientY,
                      viewX: re.x,
                      viewY: re.y
                    });
                  },
                  onMouseMove: (N) => {
                    if (!Z) return;
                    const w = oe.current.getBoundingClientRect(), M = re.w / w.width, he = re.h / w.height, ge = (N.clientX - le.current.clientX) * M, Ce = (N.clientY - le.current.clientY) * he;
                    Ee((Ve) => ({
                      ...Ve,
                      x: le.current.viewX - ge,
                      y: le.current.viewY - Ce
                    }));
                  },
                  onMouseUp: () => G(!1),
                  onMouseLeave: () => G(!1)
                }
              ),
              /* @__PURE__ */ jt.jsx("g", { children: dt.map((N, w) => /* @__PURE__ */ jt.jsx(
                "line",
                {
                  x1: N.a.x,
                  y1: N.a.y,
                  x2: N.b.x,
                  y2: N.b.y,
                  stroke: "#888",
                  strokeDasharray: "4 4",
                  strokeWidth: "1",
                  opacity: "0.6"
                },
                `clone-${w}`
              )) }),
              /* @__PURE__ */ jt.jsx("g", { children: ut.map((N, w) => /* @__PURE__ */ jt.jsx(
                "line",
                {
                  x1: N.a.x,
                  y1: N.a.y,
                  x2: N.b.x,
                  y2: N.b.y,
                  stroke: "#bdbdbd",
                  strokeWidth: "1.2"
                },
                `ps-${w}`
              )) }),
              /* @__PURE__ */ jt.jsx("g", { children: z.map((N) => {
                var Ve, ne, Se, Ie;
                const w = Be.get(N.key) || { x: 0, y: 0 }, M = Number(((Ve = N.attributes) == null ? void 0 : Ve.size) ?? 30), he = ((ne = N.attributes) == null ? void 0 : ne.color) || "#888", ge = ((Se = N.attributes) == null ? void 0 : Se.label) || N.key, Ce = ((Ie = N.attributes) == null ? void 0 : Ie.url) || null;
                return /* @__PURE__ */ jt.jsxs("g", { transform: `translate(${w.x},${w.y})`, children: [
                  /* @__PURE__ */ jt.jsx(
                    "circle",
                    {
                      r: M,
                      fill: he,
                      opacity: "1",
                      style: { cursor: Ce ? "pointer" : "default" },
                      onMouseEnter: () => fe({ type: "repeat", node: N }),
                      onMouseLeave: () => fe(null),
                      onClick: () => Ce && window.open(Ce, "_blank")
                    }
                  ),
                  /* @__PURE__ */ jt.jsx(
                    "text",
                    {
                      x: 0,
                      y: 0,
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                      fill: "#fff",
                      fontSize: "20",
                      fontWeight: "600",
                      style: { cursor: Ce ? "pointer" : "default", userSelect: "none" },
                      onMouseEnter: () => fe({ type: "repeat", node: N }),
                      onMouseLeave: () => fe(null),
                      onClick: () => Ce && window.open(Ce, "_blank"),
                      children: ge
                    }
                  )
                ] }, N.key);
              }) }),
              /* @__PURE__ */ jt.jsx("g", { children: y.map((N) => {
                var Ce, Ve, ne;
                const w = Le.get(N.key) || { x: 0, y: 0 }, M = Number(((Ce = N.attributes) == null ? void 0 : Ce.size) ?? 6), he = ((Ve = N.attributes) == null ? void 0 : Ve.color) || "#9DD6FB", ge = ((ne = N.attributes) == null ? void 0 : ne.url) || null;
                return /* @__PURE__ */ jt.jsx(
                  "circle",
                  {
                    cx: w.x,
                    cy: w.y,
                    r: M,
                    fill: he,
                    style: { cursor: ge ? "pointer" : "default" },
                    onMouseEnter: () => fe({ type: "protein", node: N }),
                    onMouseLeave: () => fe(null),
                    onClick: () => ge && window.open(ge, "_blank")
                  },
                  N.key
                );
              }) })
            ]
          }
        ),
        L && /* @__PURE__ */ jt.jsx(
          "div",
          {
            role: "tooltip",
            style: {
              position: "fixed",
              left: q.x + 12,
              top: q.y + 12,
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
            children: L.type === "repeat" ? /* @__PURE__ */ jt.jsxs("div", { children: [
              /* @__PURE__ */ jt.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: ((wt = L.node.attributes) == null ? void 0 : wt.label) || L.node.key }),
              /* @__PURE__ */ jt.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Satellite (repeat)" }),
              ((ct = L.node.attributes) == null ? void 0 : ct.aliases) && /* @__PURE__ */ jt.jsxs("div", { children: [
                /* @__PURE__ */ jt.jsx("b", { children: "Aliases:" }),
                " ",
                String(L.node.attributes.aliases)
              ] }),
              ((Ae = L.node.attributes) == null ? void 0 : Ae.dfam_id) != null && /* @__PURE__ */ jt.jsxs("div", { children: [
                /* @__PURE__ */ jt.jsx("b", { children: "Dfam:" }),
                " ",
                String(L.node.attributes.dfam_id)
              ] }),
              ((Nt = L.node.attributes) == null ? void 0 : Nt.url) && /* @__PURE__ */ jt.jsx(
                "div",
                {
                  style: {
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer"
                  },
                  onClick: () => window.open(L.node.attributes.url, "_blank"),
                  children: "Open page"
                }
              )
            ] }) : /* @__PURE__ */ jt.jsxs("div", { children: [
              /* @__PURE__ */ jt.jsx("div", { style: { fontWeight: 600, marginBottom: 4 }, children: (_t = L.node.attributes) == null ? void 0 : _t.label }),
              /* @__PURE__ */ jt.jsx("div", { style: { color: "#555", marginBottom: 4 }, children: "Transcription factor" }),
              ((kt = L.node.attributes) == null ? void 0 : kt.gene_family) && /* @__PURE__ */ jt.jsxs("div", { children: [
                /* @__PURE__ */ jt.jsx("b", { children: "Family:" }),
                " ",
                String(L.node.attributes.gene_family)
              ] }),
              ((je = L.node.attributes) == null ? void 0 : je.enrichment) != null && /* @__PURE__ */ jt.jsxs("div", { children: [
                /* @__PURE__ */ jt.jsx("b", { children: "Enrichment:" }),
                " ",
                String(L.node.attributes.enrichment)
              ] }),
              ((me = L.node.attributes) == null ? void 0 : me.aliases) && /* @__PURE__ */ jt.jsxs("div", { children: [
                /* @__PURE__ */ jt.jsx("b", { children: "Aliases:" }),
                " ",
                String(L.node.attributes.aliases)
              ] }),
              (($e = L.node.attributes) == null ? void 0 : $e.url) && /* @__PURE__ */ jt.jsx(
                "div",
                {
                  style: {
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer"
                  },
                  onClick: () => window.open(L.node.attributes.url, "_blank"),
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
  /* @__PURE__ */ jt.jsx(_k.StrictMode, { children: /* @__PURE__ */ jt.jsx(SD, {}) })
);
